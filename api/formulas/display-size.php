<?php
/**
 * Display Size Calculator Formula
 * AVIXA DISCAS (Display Image Size for 2D Content in Audiovisual Systems)
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $viewingDistance = floatval($params['viewingDistance'] ?? 10);
    $unit = $params['unit'] ?? 'ft';
    $contentType = $params['contentType'] ?? 'BDM';
    $aspectW = floatval($params['aspectW'] ?? 16);
    $aspectH = floatval($params['aspectH'] ?? 9);
    $resolution = $params['resolution'] ?? '1080p';
    $inputUnit = $params['inputUnit'] ?? 'in';
    
    // AVIXA DISCAS formulas
    // BDM (Basic Decision Making): Angular subtense of 1/100 rad
    // ADM (Analytical Decision Making): Angular subtense of 1/288 rad (pixel-level detail)
    
    // BDM: Image Height = Distance × (Viewing Angle / 100)
    // Simplified: Height = Distance / 200 (for 100% viewing factor)
    
    // ADM: Height = (Distance × Horizontal Resolution) / 3438
    
    $resolutionMap = [
        '720p' => 1280,
        '1080p' => 1920,
        '4K' => 3840,
        '8K' => 7680
    ];
    
    $horizontalRes = $resolutionMap[$resolution] ?? 1920;
    
    // Calculate image height based on method
    if ($contentType === 'BDM') {
        // BDM formula
        $imageHeight = $viewingDistance / ((100 / 100) * 200);
    } else {
        // ADM formula - for pixel-level detail
        $imageHeight = ($viewingDistance * $horizontalRes) / 3438;
    }
    
    // Calculate image width from aspect ratio
    $imageWidth = $imageHeight * ($aspectW / $aspectH);
    
    // Calculate diagonal
    $diagonal = sqrt(pow($imageWidth, 2) + pow($imageHeight, 2));
    
    // Convert to inches for display
    $diagonalInches = $diagonal;
    if ($inputUnit === 'ft') {
        $diagonalInches = $diagonal * 12;
    } elseif ($inputUnit === 'm') {
        $diagonalInches = $diagonal * 39.3701;
    }
    
    // Acuity factor explanation
    $acuityFactor = ($contentType === 'BDM') ? 200 : 3438;
    
    return [
        'imageHeight' => round($imageHeight * 100) / 100,
        'imageWidth' => round($imageWidth * 100) / 100,
        'diagonalSize' => round($diagonal * 100) / 100,
        'diagonalInches' => round($diagonalInches * 100) / 100,
        'method' => $contentType,
        'unit' => $inputUnit,
        'acuityFactor' => $acuityFactor,
        'aspectRatio' => "{$aspectW}:{$aspectH}",
        'resolution' => $resolution,
        'standard' => 'AVIXA DISCAS V202.01:2016'
    ];
}
