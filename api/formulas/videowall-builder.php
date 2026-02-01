<?php
/**
 * Video Wall Builder Calculator Formula
 * Display matrix configuration and resolution calculations
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $displayWidth = floatval($params['displayWidth'] ?? 47.6);
    $displayHeight = floatval($params['displayHeight'] ?? 26.8);
    $unit = $params['unit'] ?? 'in';
    $mode = $params['mode'] ?? 'manual';
    $rows = intval($params['rows'] ?? 2);
    $cols = intval($params['cols'] ?? 2);
    $displayResW = intval($params['displayResW'] ?? 1920);
    $displayResH = intval($params['displayResH'] ?? 1080);
    $bezelWidth = floatval($params['bezelWidth'] ?? 0.35);
    
    // For dimension/size targeting modes
    $targetDimension = $params['targetDimension'] ?? 'width';
    $targetValue = floatval($params['targetValue'] ?? 100);
    $targetAspectW = floatval($params['targetAspectW'] ?? 16);
    $targetAspectH = floatval($params['targetAspectH'] ?? 9);
    $targetSizeW = floatval($params['targetSizeW'] ?? 120);
    $targetSizeH = floatval($params['targetSizeH'] ?? 67.5);
    $sizeUnit = $params['sizeUnit'] ?? 'in';
    
    // Ensure minimums
    $displayWidth = max(1, $displayWidth);
    $displayHeight = max(1, $displayHeight);
    
    // Calculate rows/cols based on mode
    if ($mode === 'dimension') {
        // Calculate based on target dimension and aspect ratio
        $targetAspect = $targetAspectW / $targetAspectH;
        $displayAspect = $displayWidth / $displayHeight;
        
        if ($targetDimension === 'width') {
            $cols = ceil($targetValue / $displayWidth);
            $targetHeight = ($cols * $displayWidth) / $targetAspect;
            $rows = max(1, round($targetHeight / $displayHeight));
        } else {
            $rows = ceil($targetValue / $displayHeight);
            $targetWidth = ($rows * $displayHeight) * $targetAspect;
            $cols = max(1, round($targetWidth / $displayWidth));
        }
    } elseif ($mode === 'size') {
        // Calculate based on target total size
        $cols = ceil($targetSizeW / $displayWidth);
        $rows = ceil($targetSizeH / $displayHeight);
    }
    
    // Ensure minimums
    $rows = max(1, $rows);
    $cols = max(1, $cols);
    
    // Calculate total dimensions
    $totalBezelH = ($cols - 1) * (2 * $bezelWidth);
    $totalBezelV = ($rows - 1) * (2 * $bezelWidth);
    
    $totalWidth = ($cols * $displayWidth) + $totalBezelH;
    $totalHeight = ($rows * $displayHeight) + $totalBezelV;
    
    // Convert to other units
    $conversionFactors = [
        'in' => ['m' => 0.0254, 'ft' => 1/12, 'mm' => 25.4],
        'mm' => ['in' => 1/25.4, 'ft' => 1/304.8, 'm' => 0.001],
        'm' => ['in' => 39.3701, 'ft' => 3.28084, 'mm' => 1000],
        'ft' => ['in' => 12, 'm' => 0.3048, 'mm' => 304.8]
    ];
    
    $widthM = $totalWidth * ($conversionFactors[$unit]['m'] ?? ($unit === 'm' ? 1 : 0.0254));
    $heightM = $totalHeight * ($conversionFactors[$unit]['m'] ?? ($unit === 'm' ? 1 : 0.0254));
    
    // Calculate diagonal
    $diagonal = sqrt(pow($totalWidth, 2) + pow($totalHeight, 2));
    $diagonalIn = $diagonal;
    if ($unit === 'mm') $diagonalIn = $diagonal / 25.4;
    elseif ($unit === 'm') $diagonalIn = $diagonal * 39.3701;
    elseif ($unit === 'ft') $diagonalIn = $diagonal * 12;
    
    // Calculate total resolution
    $totalResW = $cols * $displayResW;
    $totalResH = $rows * $displayResH;
    $totalPixels = $totalResW * $totalResH;
    $megapixels = round($totalPixels / 1000000 * 10) / 10;
    
    // Calculate aspect ratio
    $gcd = function($a, $b) use (&$gcd) {
        return ($b == 0) ? $a : $gcd($b, $a % $b);
    };
    $divisor = $gcd($totalResW, $totalResH);
    $aspectW = $totalResW / $divisor;
    $aspectH = $totalResH / $divisor;
    
    // Simplify if numbers are too large
    if ($aspectW > 100 || $aspectH > 100) {
        $aspectW = round($totalWidth / $totalHeight * 100) / 100;
        $aspectH = 1;
    }
    
    // Display count
    $displayCount = $rows * $cols;
    
    // Area calculations
    $areaUnit = $unit;
    $totalArea = $totalWidth * $totalHeight;
    $areaSqFt = $widthM * $heightM * 10.764;
    $areaSqM = $widthM * $heightM;
    
    // Viewing distance recommendation (AVIXA)
    $minViewingDistanceFt = $diagonalIn / 12 * 1.5;
    $maxViewingDistanceFt = $diagonalIn / 12 * 4;
    $minViewingDistanceM = $minViewingDistanceFt * 0.3048;
    $maxViewingDistanceM = $maxViewingDistanceFt * 0.3048;
    
    return [
        'rows' => $rows,
        'cols' => $cols,
        'displayW' => $displayWidth,
        'displayH' => $displayHeight,
        'totalWidth' => round($totalWidth * 100) / 100,
        'totalHeight' => round($totalHeight * 100) / 100,
        'totalWidthM' => round($widthM * 100) / 100,
        'totalHeightM' => round($heightM * 100) / 100,
        'diagonal' => round($diagonal * 100) / 100,
        'diagonalIn' => round($diagonalIn),
        'unit' => $unit,
        'displayCount' => $displayCount,
        'totalResW' => $totalResW,
        'totalResH' => $totalResH,
        'totalPixels' => $totalPixels,
        'megapixels' => $megapixels,
        'aspectRatio' => "{$aspectW}:{$aspectH}",
        'areaSqFt' => round($areaSqFt * 10) / 10,
        'areaSqM' => round($areaSqM * 100) / 100,
        'bezelTotal' => [
            'horizontal' => round($totalBezelH * 100) / 100,
            'vertical' => round($totalBezelV * 100) / 100
        ],
        'viewingDistance' => [
            'minFt' => round($minViewingDistanceFt * 10) / 10,
            'maxFt' => round($maxViewingDistanceFt * 10) / 10,
            'minM' => round($minViewingDistanceM * 10) / 10,
            'maxM' => round($maxViewingDistanceM * 10) / 10
        ]
    ];
}
