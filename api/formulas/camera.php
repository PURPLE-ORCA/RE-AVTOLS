<?php
/**
 * Camera Calculator Formula
 * IEC 62676-4:2014 DORI standards
 * Pixels per meter/foot calculations
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $horizontalRes = intval($params['horizontalRes'] ?? 1920);
    $coverageWidth = floatval($params['coverageWidth'] ?? 10);
    $zoomFactor = floatval($params['zoomFactor'] ?? 1);
    $hfov = floatval($params['hfov'] ?? 90);
    $unit = $params['unit'] ?? 'm';
    
    // Validate inputs
    if ($horizontalRes <= 0) $horizontalRes = 1920;
    if ($coverageWidth <= 0) $coverageWidth = 1;
    if ($zoomFactor < 1) $zoomFactor = 1;
    if ($zoomFactor > 100) $zoomFactor = 100;
    if ($hfov <= 0) $hfov = 90;
    if ($hfov >= 180) $hfov = 179;
    
    // Convert coverage to meters
    $coverageM = ($unit === 'ft') ? $coverageWidth * 0.3048 : $coverageWidth;
    
    // Calculate base PPM (pixels per meter)
    $basePPM = $horizontalRes / $coverageM;
    $basePPF = $basePPM * 0.3048;
    
    // DORI level assessment function
    $getDORILevel = function($ppm) {
        if ($ppm >= 250) {
            return ['level' => 'Identification', 'color' => 'green', 'ppm' => 250, 'description' => 'Identity established beyond reasonable doubt'];
        } elseif ($ppm >= 125) {
            return ['level' => 'Recognition', 'color' => 'yellow', 'ppm' => 125, 'description' => 'Recognize known individual'];
        } elseif ($ppm >= 62) {
            return ['level' => 'Observation', 'color' => 'orange', 'ppm' => 62, 'description' => 'See characteristic details'];
        } elseif ($ppm >= 25) {
            return ['level' => 'Detection', 'color' => 'red', 'ppm' => 25, 'description' => 'Detect human presence'];
        } else {
            return ['level' => 'Monitoring', 'color' => 'gray', 'ppm' => 0, 'description' => 'General scene monitoring'];
        }
    };
    
    $baseDORI = $getDORILevel($basePPM);
    
    // Calculate zoomed values
    $hfovRad = $hfov * M_PI / 180;
    $zoomedHFOVRad = 2 * atan(tan($hfovRad / 2) / $zoomFactor);
    $effectiveHFOV = round(($zoomedHFOVRad * 180 / M_PI) * 10) / 10;
    
    if (!is_finite($effectiveHFOV) || $effectiveHFOV <= 0) {
        $effectiveHFOV = 0.1;
    }
    
    $effectivePPM = round($basePPM * $zoomFactor * 10) / 10;
    $effectivePPF = round($effectivePPM * 0.3048 * 10) / 10;
    $effectiveDORI = $getDORILevel($effectivePPM);
    
    // Effective coverage width when zoomed
    $effectiveCoverageM = round(($coverageM / $zoomFactor) * 100) / 100;
    $effectiveCoverageFt = round($effectiveCoverageM * 3.28084 * 100) / 100;
    
    // Max coverage distances for each DORI level
    $maxCoverages = [
        'detect' => [
            'base' => round($horizontalRes / 25 * 100) / 100,
            'zoomed' => round($horizontalRes / 25 * $zoomFactor * 100) / 100
        ],
        'observe' => [
            'base' => round($horizontalRes / 62 * 100) / 100,
            'zoomed' => round($horizontalRes / 62 * $zoomFactor * 100) / 100
        ],
        'recognize' => [
            'base' => round($horizontalRes / 125 * 100) / 100,
            'zoomed' => round($horizontalRes / 125 * $zoomFactor * 100) / 100
        ],
        'identify' => [
            'base' => round($horizontalRes / 250 * 100) / 100,
            'zoomed' => round($horizontalRes / 250 * $zoomFactor * 100) / 100
        ]
    ];
    
    return [
        'basePPM' => round($basePPM * 10) / 10,
        'basePPF' => round($basePPF * 10) / 10,
        'baseDORI' => $baseDORI,
        'baseHFOV' => $hfov,
        'zoomFactor' => $zoomFactor,
        'effectiveHFOV' => $effectiveHFOV,
        'effectivePPM' => $effectivePPM,
        'effectivePPF' => $effectivePPF,
        'effectiveDORI' => $effectiveDORI,
        'effectiveCoverageWidthM' => $effectiveCoverageM,
        'effectiveCoverageWidthFt' => $effectiveCoverageFt,
        'doriImproved' => $baseDORI['level'] !== $effectiveDORI['level'],
        'maxCoverages' => $maxCoverages,
        'standards' => 'IEC 62676-4:2014'
    ];
}
