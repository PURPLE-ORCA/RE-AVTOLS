<?php
/**
 * DVLED Pixel Pitch Calculator Formula
 * Industry standard pixel pitch recommendations
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
    
    // Convert to feet
    $distanceFt = ($unit === 'm') ? $viewingDistance * 3.28084 : $viewingDistance;
    $distanceM = ($unit === 'ft') ? $viewingDistance / 3.28084 : $viewingDistance;
    
    // Calculate pixel pitch
    // Rule of thumb: pixel pitch (mm) = viewing distance (ft) / 10
    // More precise: pixel pitch (mm) = viewing distance (ft) / 11.28
    $pixelPitchMm = $distanceFt / 10;
    $pixelPitchMmExact = $distanceFt / 11.28;
    
    // Comfortable viewing distances
    $comfortableViewingFt = $distanceFt / 2;
    $comfortableViewingM = $distanceM / 2;
    
    return [
        'pixelPitchMm' => round($pixelPitchMm * 100) / 100,
        'pixelPitchMmExact' => round($pixelPitchMmExact * 100) / 100,
        'closestViewerFt' => round($distanceFt * 100) / 100,
        'closestViewerM' => round($distanceM * 100) / 100,
        'comfortableViewingFt' => round($comfortableViewingFt * 100) / 100,
        'comfortableViewingM' => round($comfortableViewingM * 100) / 100
    ];
}
