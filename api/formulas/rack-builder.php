<?php
/**
 * Rack Builder Calculator Formula
 * Power, cooling, and space calculations for AV equipment racks
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $rackHeight = intval($params['rackHeight'] ?? 42);
    $equipment = $params['equipment'] ?? [];
    $includeVentilation = boolval($params['includeVentilation'] ?? true);
    
    // Calculate totals
    $totalRackUnits = 0;
    $totalWatts = 0;
    $totalWeight = 0;
    
    foreach ($equipment as $item) {
        $qty = intval($item['quantity'] ?? 1);
        $ru = intval($item['rackUnits'] ?? 1);
        $watts = floatval($item['watts'] ?? 0);
        $weight = floatval($item['weight'] ?? 0);
        
        $totalRackUnits += $ru * $qty;
        $totalWatts += $watts * $qty;
        $totalWeight += $weight * $qty;
    }
    
    // Add ventilation space
    $ventilationRU = 0;
    if ($includeVentilation) {
        // 1U ventilation for every 10U of equipment
        $ventilationRU = ceil($totalRackUnits / 10);
        $totalRackUnits += $ventilationRU;
    }
    
    // Calculate available space
    $availableRU = $rackHeight;
    $usedRU = $totalRackUnits;
    $remainingRU = $availableRU - $usedRU;
    $utilizationPercent = round(($usedRU / $availableRU) * 100);
    
    // Thermal calculations
    $btuPerHour = round($totalWatts * 3.412);
    $coolingTons = round(($btuPerHour / 12000) * 100) / 100;
    $cfmRequired = round($btuPerHour / (1.08 * 15));
    
    // UPS sizing (1.25 safety factor, 0.8 power factor)
    $upsVA = round($totalWatts * 1.25 / 0.8);
    
    // Weight distribution warning
    $warnings = [];
    if ($totalWeight > 1500) {
        $warnings[] = [
            'type' => 'warning',
            'title' => 'Heavy Load',
            'text' => "Total weight ({$totalWeight} lbs) exceeds 1500 lbs. Verify floor load capacity."
        ];
    }
    
    if ($utilizationPercent > 80) {
        $warnings[] = [
            'type' => 'warning',
            'title' => 'High Utilization',
            'text' => "Rack is {$utilizationPercent}% full. Consider expansion planning."
        ];
    }
    
    if ($totalWatts > 5000) {
        $warnings[] = [
            'type' => 'info',
            'title' => 'High Power Draw',
            'text' => "Consider dedicated circuit or multiple PDUs for {$totalWatts}W load."
        ];
    }
    
    // Recommendations
    $recommendations = [];
    
    $recommendations[] = [
        'type' => 'info',
        'title' => 'Cooling Requirement',
        'text' => "Minimum {$cfmRequired} CFM airflow required. Ensure front-to-back airflow path."
    ];
    
    $recommendations[] = [
        'type' => 'info',
        'title' => 'UPS Sizing',
        'text' => "Minimum {$upsVA}VA UPS recommended for 5-minute runtime."
    ];
    
    if ($totalWatts > 2000) {
        $recommendations[] = [
            'type' => 'info',
            'title' => 'PDU Recommendation',
            'text' => 'Consider metered PDU for power monitoring.'
        ];
    }
    
    return [
        'totalRackUnits' => $totalRackUnits,
        'usedRU' => $usedRU,
        'availableRU' => $availableRU,
        'remainingRU' => $remainingRU,
        'utilizationPercent' => $utilizationPercent,
        'ventilationRU' => $ventilationRU,
        'totalWatts' => round($totalWatts),
        'totalWeight' => round($totalWeight),
        'btuPerHour' => $btuPerHour,
        'coolingTons' => $coolingTons,
        'cfmRequired' => $cfmRequired,
        'upsVA' => $upsVA,
        'warnings' => $warnings,
        'recommendations' => $recommendations
    ];
}
