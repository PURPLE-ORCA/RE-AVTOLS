<?php
/**
 * Projector Calculator Formula
 * Throw distance and brightness calculations
 * AVIXA/ANSI standard formulas
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $screenWidth = floatval($params['screenWidth'] ?? 10);
    $screenHeight = floatval($params['screenHeight'] ?? 5.625);
    $throwRatio = floatval($params['throwRatio'] ?? 1.5);
    $ambientLight = floatval($params['ambientLight'] ?? 300);
    $screenGain = floatval($params['screenGain'] ?? 1.0);
    $unit = $params['unit'] ?? 'ft';
    
    // Calculate throw distance
    $throwDistance = $screenWidth * $throwRatio;
    
    // Convert to feet for area calculation
    $widthFt = $screenWidth;
    $heightFt = $screenHeight;
    
    if ($unit === 'in') {
        $widthFt = $screenWidth / 12;
        $heightFt = $screenHeight / 12;
    } elseif ($unit === 'mm') {
        $widthFt = $screenWidth / 304.8;
        $heightFt = $screenHeight / 304.8;
    } elseif ($unit === 'm') {
        $widthFt = $screenWidth * 3.28084;
        $heightFt = $screenHeight * 3.28084;
    }
    
    $screenAreaFt = $widthFt * $heightFt;
    $screenAreaM2 = $screenAreaFt / 10.764;
    
    // Determine target foot-lamberts based on ambient light
    if ($ambientLight <= 20) {
        $targetFtL = 14;
        $brightnessCategory = 'Dedicated Theater';
        $brightnessDescription = 'Full light control, cinema experience';
    } elseif ($ambientLight <= 50) {
        $targetFtL = 20;
        $brightnessCategory = 'Dark Room';
        $brightnessDescription = 'Home theater, dedicated AV rooms';
    } elseif ($ambientLight <= 150) {
        $targetFtL = 35;
        $brightnessCategory = 'Dim Room';
        $brightnessDescription = 'Conference rooms with controlled lighting';
    } elseif ($ambientLight <= 300) {
        $targetFtL = 50;
        $brightnessCategory = 'Moderate Light';
        $brightnessDescription = 'Standard office, meeting rooms';
    } elseif ($ambientLight <= 500) {
        $targetFtL = 60;
        $brightnessCategory = 'Bright Room';
        $brightnessDescription = 'Well-lit offices, classrooms';
    } else {
        $targetFtL = 80;
        $brightnessCategory = 'Very Bright';
        $brightnessDescription = 'High ambient light, ALR screen recommended';
    }
    
    // Calculate required lumens
    // Formula: Lumens = (fL × Area × π) / Gain
    $requiredByFtL = ($targetFtL * $screenAreaFt * M_PI) / $screenGain;
    $minimumByArea = max(2000, 35 * $screenAreaFt);
    $requiredLumens = max($requiredByFtL, $minimumByArea);
    
    // Calculate resulting brightness
    $resultingFtL = ($requiredLumens * $screenGain) / ($screenAreaFt * M_PI);
    $resultingNits = $resultingFtL * 3.426;
    
    // Throw category
    if ($throwRatio < 0.5) {
        $throwCategory = 'Ultra Short Throw';
    } elseif ($throwRatio < 1) {
        $throwCategory = 'Short Throw';
    } elseif ($throwRatio < 2) {
        $throwCategory = 'Standard Throw';
    } else {
        $throwCategory = 'Long Throw';
    }
    
    // Screen diagonal in inches
    $screenDiagonalIn = 12 * sqrt($widthFt * $widthFt + $heightFt * $heightFt);
    
    // Multi-projector analysis for very large screens
    $multiProjector = null;
    if ($requiredLumens > 10000) {
        $projectorClass = 'Large Venue Laser';
        $projectorCount = 1;
        $lumensPerProjector = $requiredLumens;
        
        if ($requiredLumens > 20000) {
            if ($requiredLumens <= 40000) {
                $projectorClass = 'High-End Laser';
                $recommendation = 'Single high-end projector. Consider 2× stacked for redundancy.';
            } else {
                $projectorCount = ceil($requiredLumens / 17600); // 20000 with 12% overlap loss
                $lumensPerProjector = ceil($requiredLumens / $projectorCount / 0.88);
                $projectorClass = ($lumensPerProjector > 30000) ? 'Large Venue Laser' : 'Professional Laser';
                $recommendation = $projectorCount . '× projector edge-blended configuration';
            }
        } else {
            $recommendation = 'Single large venue projector recommended';
        }
        
        $multiProjector = [
            'required' => $requiredLumens > 10000,
            'projectorCount' => $projectorCount,
            'lumensPerProjector' => round($lumensPerProjector),
            'projectorClass' => $projectorClass,
            'recommendation' => $recommendation
        ];
    }
    
    // Screen size warning
    $screenSizeWarning = null;
    if ($screenDiagonalIn > 600) {
        $screenSizeWarning = [
            'level' => 'info',
            'message' => 'Very large screen - consider seamless projection screen or LED wall',
            'diagonal' => round($screenDiagonalIn)
        ];
    }
    if ($screenDiagonalIn > 1200) {
        $screenSizeWarning = [
            'level' => 'warning',
            'message' => 'Stadium-scale display - LED video wall strongly recommended over projection',
            'diagonal' => round($screenDiagonalIn)
        ];
    }
    
    return [
        'throwDistance' => round($throwDistance * 100) / 100,
        'throwCategory' => $throwCategory,
        'requiredLumens' => round($requiredLumens),
        'recommendedMin' => round($requiredLumens * 0.9),
        'recommendedMax' => round($requiredLumens * 1.3),
        'screenAreaFt' => round($screenAreaFt * 100) / 100,
        'screenAreaM2' => round($screenAreaM2 * 100) / 100,
        'screenDiagonalIn' => round($screenDiagonalIn),
        'targetFtL' => round($targetFtL),
        'resultingFtL' => round($resultingFtL * 10) / 10,
        'resultingNits' => round($resultingNits),
        'screenGain' => $screenGain,
        'brightnessCategory' => $brightnessCategory,
        'brightnessDescription' => $brightnessDescription,
        'unit' => $unit,
        'multiProjector' => $multiProjector,
        'screenSizeWarning' => $screenSizeWarning,
        'standard' => 'ANSI/INFOCOMM V202.01:2016'
    ];
}
