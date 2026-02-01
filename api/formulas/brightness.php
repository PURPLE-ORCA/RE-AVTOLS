<?php
/**
 * Brightness Calculator Formula
 * AVIXA Display Brightness Standards
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $ambientLight = floatval($params['ambientLight'] ?? 500);
    $displayType = $params['displayType'] ?? 'lcd';
    
    // Display type specifications
    $displayTypes = [
        'lcd' => ['label' => 'LCD/LED Display', 'typicalNits' => '300-500', 'maxNits' => 700],
        'led' => ['label' => 'Commercial LED', 'typicalNits' => '500-1000', 'maxNits' => 1500],
        'dvled' => ['label' => 'Direct View LED', 'typicalNits' => '800-2000', 'maxNits' => 5000],
        'projector' => ['label' => 'Projector', 'typicalNits' => '100-300', 'maxNits' => 500]
    ];
    
    $display = $displayTypes[$displayType] ?? $displayTypes['lcd'];
    
    // Calculate required brightness (AVIXA formula)
    // nits = (ambient lux / π) × 3
    $requiredNits = ($ambientLight / M_PI) * 3;
    $nits = round($requiredNits * 100) / 100;
    
    // Calculate optimal nits (1.5x minimum)
    $optimalNits = round($nits * 1.5);
    
    // Check display suitability
    $displaySuitable = $display['maxNits'] >= $nits;
    $displayOptimal = $display['maxNits'] >= $optimalNits;
    
    // Calculate contrast ratio
    $ambientReflection = $ambientLight * 0.01;
    $estimatedCR = round($display['maxNits'] / ($ambientReflection + 1));
    
    // Generate tips and warnings
    $tips = [];
    $warnings = [];
    
    if ($displaySuitable && $displayOptimal) {
        $tips[] = [
            'type' => 'success',
            'title' => 'Brightness Adequate',
            'text' => "{$display['label']} can achieve required {$nits} nits with headroom for optimal viewing."
        ];
    } elseif ($displaySuitable && !$displayOptimal) {
        $tips[] = [
            'type' => 'warning',
            'title' => 'Marginal Brightness',
            'text' => "{$display['label']} meets minimum requirements but may lack headroom. Consider a brighter display."
        ];
    } else {
        $warnings[] = [
            'type' => 'error',
            'title' => 'Insufficient Brightness',
            'text' => "{$display['label']} (max {$display['maxNits']} nits) cannot achieve required {$nits} nits. Consider Direct View LED."
        ];
    }
    
    // Ambient light specific tips
    if ($ambientLight < 100) {
        $tips[] = [
            'type' => 'info',
            'title' => 'Dark Environment',
            'text' => 'Per AVIXA, reduce display brightness to 100-200 nits in dark rooms to prevent eye strain.'
        ];
    } elseif ($ambientLight > 1000) {
        $tips[] = [
            'type' => 'info',
            'title' => 'High Ambient Light',
            'text' => 'For bright environments, AVIXA recommends Direct View LED displays or high-brightness commercial displays.'
        ];
    }
    
    // Contrast ratio assessment
    if ($estimatedCR >= 100) {
        $tips[] = [
            'type' => 'success',
            'title' => 'Excellent Contrast',
            'text' => "Estimated contrast ratio of {$estimatedCR}:1 exceeds AVIXA minimum of 7:1 for text readability."
        ];
    } elseif ($estimatedCR >= 20) {
        $tips[] = [
            'type' => 'info',
            'title' => 'Good Contrast',
            'text' => "Estimated contrast ratio of {$estimatedCR}:1 is suitable for video and presentations."
        ];
    } elseif ($estimatedCR >= 7) {
        $tips[] = [
            'type' => 'warning',
            'title' => 'Minimum Contrast',
            'text' => "Estimated contrast ratio of {$estimatedCR}:1 meets AVIXA minimum but may cause eye strain."
        ];
    } else {
        $warnings[] = [
            'type' => 'error',
            'title' => 'Poor Contrast',
            'text' => "Estimated contrast ratio of {$estimatedCR}:1 is below AVIXA minimum of 7:1."
        ];
    }
    
    // Display-specific tips
    if ($displayType === 'projector') {
        $tips[] = [
            'type' => 'info',
            'title' => 'Projector Consideration',
            'text' => 'AVIXA recommends ALR screens for environments above 300 lux. Consider screen gain factor.'
        ];
    }
    
    if ($displayType === 'dvled' && $ambientLight < 200) {
        $tips[] = [
            'type' => 'info',
            'title' => 'LED Brightness Control',
            'text' => 'Direct View LED in dark environments should use reduced brightness (10-30%) to prevent eye fatigue.'
        ];
    }
    
    // Viewing guidelines
    $tips[] = [
        'type' => 'info',
        'title' => 'AVIXA Viewing Guidelines',
        'text' => ($ambientLight > 500) 
            ? 'For extended viewing in bright environments, ensure display brightness exceeds ambient by at least 3:1 ratio.'
            : 'For comfortable extended viewing, AVIXA recommends matching display brightness with a 3:1 to 5:1 contrast ratio.'
    ];
    
    // Determine environment category
    if ($ambientLight < 100) {
        $category = ['label' => 'Dark', 'color' => 'purple'];
    } elseif ($ambientLight < 300) {
        $category = ['label' => 'Dim', 'color' => 'blue'];
    } elseif ($ambientLight < 500) {
        $category = ['label' => 'Normal', 'color' => 'green'];
    } elseif ($ambientLight < 1000) {
        $category = ['label' => 'Bright', 'color' => 'yellow'];
    } else {
        $category = ['label' => 'Very Bright', 'color' => 'red'];
    }
    
    return [
        'nits' => $nits,
        'lumens' => round($nits * 3.426 * 100) / 100,
        'ambientLux' => $ambientLight,
        'minRecommendedNits' => $nits,
        'optimalNits' => $optimalNits,
        'displayType' => $display,
        'displaySuitable' => $displaySuitable,
        'displayOptimal' => $displayOptimal,
        'estimatedCR' => $estimatedCR,
        'tips' => $tips,
        'warnings' => $warnings,
        'category' => $category,
        'standard' => 'AVIXA V202.01:2016'
    ];
}
