<?php
/**
 * Cooling Calculator Formula
 * ASHRAE standards for AV equipment cooling
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $equipmentWatts = floatval($params['equipmentWatts'] ?? 1000);
    $rackCount = intval($params['rackCount'] ?? 1);
    $lightingWatts = floatval($params['lightingWatts'] ?? 0);
    $safetyFactor = floatval($params['safetyFactor'] ?? 1.25);
    
    // BTU calculation
    // 1 Watt = 3.412 BTU/hr
    // Rack overhead ~400 BTU per rack
    $equipmentBTU = $equipmentWatts * 3.412;
    $rackBTU = $rackCount * 400;
    $lightingBTU = $lightingWatts * 3.412;
    
    $subtotalBTU = $equipmentBTU + $rackBTU + $lightingBTU;
    $totalBTU = $subtotalBTU * $safetyFactor;
    
    // Cooling calculations
    // 1 ton = 12,000 BTU/hr
    $coolingTons = $totalBTU / 12000;
    
    // CFM calculation (ASHRAE: ΔT = 15°F typical)
    // CFM = BTU / (1.08 × ΔT)
    $cfmRequired = round($totalBTU / (1.08 * 15));
    
    // kW conversion
    $coolingKW = $coolingTons * 3.517;
    
    return [
        'totalBTU' => round($totalBTU),
        'subtotalBTU' => round($subtotalBTU),
        'coolingTons' => round($coolingTons * 100) / 100,
        'cfmRequired' => $cfmRequired,
        'coolingKW' => round($coolingKW * 100) / 100,
        'breakdown' => [
            'equipmentBTU' => round($equipmentBTU),
            'rackBTU' => round($rackBTU),
            'lightingBTU' => round($lightingBTU)
        ],
        'standard' => 'ASHRAE TC 9.9'
    ];
}
