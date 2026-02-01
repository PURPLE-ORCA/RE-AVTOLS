<?php
/**
 * Viewing Angle Calculator Formula
 * THX, SMPTE, AVIXA standards
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $screenDiagonal = floatval($params['screenDiagonal'] ?? 60);
    $viewingDistance = floatval($params['viewingDistance'] ?? 120);
    $unit = $params['unit'] ?? 'in';
    
    // Calculate viewing angle
    // θ = 2 × arctan(screen_size / 2 / distance) × (180/π)
    $angle = (2 * atan($screenDiagonal / 2 / $viewingDistance) * 180) / M_PI;
    $angle = round($angle * 100) / 100;
    
    return [
        'angle' => $angle,
        'unit' => $unit,
        'screenDiagonal' => $screenDiagonal,
        'viewingDistance' => $viewingDistance,
        'standard' => 'THX/SMPTE EG-18'
    ];
}
