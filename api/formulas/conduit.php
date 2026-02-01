<?php
/**
 * Conduit Fill Calculator Formula
 * NEC Chapter 9 Table 1 & Annex C compliance
 * JAM Ratio calculation per industry standards
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $mode = $params['mode'] ?? 'single';
    
    if ($mode === 'mixed') {
        return calculateMixedConduit($params);
    } else {
        return calculateSingleConduit($params);
    }
}

function calculateSingleConduit($params) {
    $cableCount = intval($params['cableCount'] ?? 1);
    $cableDiameter = floatval($params['cableDiameter'] ?? 0.5);
    $unit = $params['unit'] ?? 'in';
    
    // EMT Conduit sizes (NEC Chapter 9 Table 4)
    $conduitSizes = [
        ['trade' => '1/2"', 'id' => 0.622, 'metric' => '16mm'],
        ['trade' => '3/4"', 'id' => 0.824, 'metric' => '21mm'],
        ['trade' => '1"', 'id' => 1.049, 'metric' => '27mm'],
        ['trade' => '1-1/4"', 'id' => 1.380, 'metric' => '35mm'],
        ['trade' => '1-1/2"', 'id' => 1.610, 'metric' => '41mm'],
        ['trade' => '2"', 'id' => 2.067, 'metric' => '53mm'],
        ['trade' => '2-1/2"', 'id' => 2.731, 'metric' => '69mm'],
        ['trade' => '3"', 'id' => 3.356, 'metric' => '85mm'],
        ['trade' => '4"', 'id' => 4.334, 'metric' => '110mm']
    ];
    
    // Convert to inches if mm
    $diameterInches = ($unit === 'mm') ? $cableDiameter / 25.4 : $cableDiameter;
    
    // NEC fill percentages
    $fillPercent = ($cableCount === 1) ? 0.53 : (($cableCount === 2) ? 0.31 : 0.40);
    
    // Calculate minimum required ID
    $totalCableArea = $cableCount * M_PI * pow($diameterInches / 2, 2);
    $minRequiredID = sqrt($totalCableArea / $fillPercent);
    
    // Find recommended conduit
    $recommendedConduit = null;
    foreach ($conduitSizes as $conduit) {
        if ($conduit['id'] >= $minRequiredID) {
            $recommendedConduit = $conduit;
            break;
        }
    }
    
    // If none found, use largest
    if (!$recommendedConduit) {
        $recommendedConduit = end($conduitSizes);
    }
    
    // Calculate actual fill
    $conduitArea = M_PI * pow($recommendedConduit['id'] / 2, 2);
    $actualFill = ($totalCableArea / $conduitArea) * 100;
    
    // JAM Ratio calculation (conduit ID / cable OD)
    $jamRatio = $recommendedConduit['id'] / $diameterInches;
    
    // JAM Risk assessment
    $jamRisk = 'N/A';
    $jamRiskColor = 'gray';
    if ($cableCount >= 3) {
        if ($jamRatio < 2.8) {
            $jamRisk = 'High Risk';
            $jamRiskColor = 'red';
        } elseif ($jamRatio <= 3.2) {
            $jamRisk = 'Borderline';
            $jamRiskColor = 'yellow';
        } else {
            $jamRisk = 'Low Risk';
            $jamRiskColor = 'green';
        }
    }
    
    // Find safe JAM conduit (ratio >= 3.2)
    $safeJamConduit = null;
    $safeJamRatio = 0;
    if ($cableCount >= 3) {
        $minSafeID = 3.2 * $diameterInches;
        foreach ($conduitSizes as $conduit) {
            if ($conduit['id'] >= $minSafeID) {
                $safeJamConduit = $conduit;
                $safeJamRatio = $conduit['id'] / $diameterInches;
                break;
            }
        }
    }
    
    // Check if exceeds maximum
    $exceedsMaximum = ($recommendedConduit === end($conduitSizes) && $actualFill > $fillPercent * 100);
    
    // Multi-conduit options if exceeds
    $multiConduitOptions = [];
    if ($exceedsMaximum || ($cableCount >= 3 && $jamRatio < 3.2)) {
        for ($numConduits = 2; $numConduits <= 4; $numConduits++) {
            $cablesEach = ceil($cableCount / $numConduits);
            $areaEach = $cablesEach * M_PI * pow($diameterInches / 2, 2);
            $fillEach = ($cablesEach === 1) ? 0.53 : (($cablesEach === 2) ? 0.31 : 0.40);
            $minIDEach = sqrt($areaEach / $fillEach);
            
            foreach ($conduitSizes as $conduit) {
                if ($conduit['id'] >= $minIDEach) {
                    $conduitAreaEach = M_PI * pow($conduit['id'] / 2, 2);
                    $fillPercentEach = ($areaEach / $conduitAreaEach) * 100;
                    $jamRatioEach = ($cablesEach >= 3) ? round($conduit['id'] / $diameterInches * 100) / 100 : null;
                    $jamRiskEach = 'N/A';
                    
                    if ($cablesEach >= 3 && $jamRatioEach) {
                        $jamRiskEach = ($jamRatioEach < 2.8) ? 'High Risk' : 
                                       (($jamRatioEach <= 3.2) ? 'Borderline' : 'Low Risk');
                    }
                    
                    $multiConduitOptions[] = [
                        'count' => $numConduits,
                        'cablesEach' => $cablesEach,
                        'conduit' => $conduit,
                        'jamRatio' => $jamRatioEach,
                        'jamRisk' => $jamRiskEach,
                        'fillPercent' => round($fillPercentEach * 10) / 10,
                        'compliant' => $fillPercentEach <= $fillEach * 100
                    ];
                    break;
                }
            }
        }
    }
    
    return [
        'minRequiredID' => round($minRequiredID * 1000) / 1000,
        'minRequiredIDInches' => round($minRequiredID * 1000) / 1000,
        '_0xd93e1a' => $recommendedConduit,
        'recommendedConduitID' => $recommendedConduit ? round($recommendedConduit['id'] * 100) / 100 : null,
        'fillPercentage' => $fillPercent * 100,
        'actualFillPercent' => round($actualFill * 10) / 10,
        'jamRatio' => round($jamRatio * 100) / 100,
        'jamRisk' => $jamRisk,
        'jamRiskColor' => $jamRiskColor,
        'safeJamConduit' => $safeJamConduit,
        'safeJamRatio' => round($safeJamRatio * 100) / 100,
        'multiConduitOptions' => $multiConduitOptions,
        'exceedsMaximum' => $exceedsMaximum,
        'exceedsMultiConduitOptions' => $multiConduitOptions,
        'bestPractices' => $exceedsMaximum ? [
            'Cable quantity exceeds maximum single 4" conduit capacity per NEC Chapter 9',
            'Use multiple parallel conduits to distribute cables',
            'Consider cable tray for large cable bundles (NEC Article 392)'
        ] : [],
        'unit' => $unit,
        'cableQty' => $cableCount,
        'outerDiameter' => $cableDiameter,
        'outerDiameterInches' => $diameterInches,
        '_0xf639dc' => $conduitSizes,
        'standard' => 'NEC 2023 Chapter 9, AVIXA F502.01:2018'
    ];
}

function calculateMixedConduit($params) {
    $cables = $params['cables'] ?? [];
    $conduitType = $params['conduitType'] ?? 'EMT';
    
    // EMT Conduit sizes
    $conduitSizes = [
        ['trade' => '1/2"', 'id' => 0.622],
        ['trade' => '3/4"', 'id' => 0.824],
        ['trade' => '1"', 'id' => 1.049],
        ['trade' => '1-1/4"', 'id' => 1.380],
        ['trade' => '1-1/2"', 'id' => 1.610],
        ['trade' => '2"', 'id' => 2.067],
        ['trade' => '2-1/2"', 'id' => 2.731],
        ['trade' => '3"', 'id' => 3.356],
        ['trade' => '4"', 'id' => 4.334]
    ];
    
    // Calculate total cables and area
    $totalCables = 0;
    $totalArea = 0;
    $cableBreakdown = [];
    
    foreach ($cables as $cable) {
        $qty = intval($cable['quantity'] ?? 1);
        $diameter = floatval($cable['diameter'] ?? 0.5);
        $area = M_PI * pow($diameter / 2, 2);
        
        $totalCables += $qty;
        $totalArea += $area * $qty;
        
        $cableBreakdown[] = [
            'type' => $cable['type'] ?? 'Cable',
            'description' => $cable['description'] ?? $cable['type'] ?? 'Cable',
            'quantity' => $qty,
            'diameter' => number_format($diameter, 3),
            'areaPerCable' => round($area * 10000) / 10000,
            'totalArea' => round($area * $qty * 10000) / 10000
        ];
    }
    
    // Determine fill percentage based on cable count
    $fillAllowed = ($totalCables === 1) ? 53 : (($totalCables === 2) ? 31 : 40);
    
    // Evaluate each conduit size
    $conduitOptions = [];
    $recommendedConduit = null;
    
    foreach ($conduitSizes as $conduit) {
        $conduitArea = M_PI * pow($conduit['id'] / 2, 2);
        $actualFill = round(($totalArea / $conduitArea) * 100 * 10) / 10;
        $compliant = $actualFill <= $fillAllowed;
        
        // Calculate average cable diameter for JAM ratio
        $avgDiameter = 0;
        if ($totalCables > 0) {
            $totalDiameterSum = 0;
            foreach ($cables as $cable) {
                $totalDiameterSum += $cable['diameter'] * $cable['quantity'];
            }
            $avgDiameter = $totalDiameterSum / $totalCables;
        }
        
        $jamRatio = ($totalCables >= 3 && $avgDiameter > 0) ? round($conduit['id'] / $avgDiameter * 100) / 100 : null;
        $jamStatus = 'N/A';
        
        if ($totalCables >= 3 && $jamRatio) {
            $jamStatus = ($jamRatio < 2.8) ? 'High Risk' : (($jamRatio <= 3.2) ? 'Borderline' : 'Low Risk');
        }
        
        $option = [
            'trade' => $conduit['trade'],
            'id' => $conduit['id'],
            'area' => round($conduitArea * 10000) / 10000,
            'actualFillPercent' => $actualFill,
            'compliant' => $compliant,
            'jamRatio' => $jamRatio,
            'jamStatus' => $jamStatus,
            'recommended' => false
        ];
        
        if ($compliant && !$recommendedConduit) {
            $option['recommended'] = true;
            $recommendedConduit = $option;
        }
        
        $conduitOptions[] = $option;
    }
    
    $exceedsMaximum = !$recommendedConduit;
    
    return [
        'totalCables' => $totalCables,
        'totalCableArea' => round($totalArea * 10000) / 10000,
        'fillPercentAllowed' => $fillAllowed,
        'cableBreakdown' => $cableBreakdown,
        'conduitOptions' => $conduitOptions,
        'recommendedConduit' => $recommendedConduit ?? end($conduitOptions),
        'conduitType' => $conduitType,
        'standards' => 'NEC 2023 Chapter 9, AVIXA F502.01:2018',
        'exceedsMaximum' => $exceedsMaximum,
        'multiConduitRecommendations' => [],
        'bestPractices' => []
    ];
}
