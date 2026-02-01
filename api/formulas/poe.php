<?php
/**
 * POE Calculator Formula
 * IEEE 802.3af/at/bt standards
 * Cable loss calculations per IEEE
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $poe = intval($params['poe'] ?? 0);
    $poePlus = intval($params['poePlus'] ?? 0);
    $poePlusPlus = intval($params['poePlusPlus'] ?? 0);
    $fourPPOE = intval($params['fourPPOE'] ?? 0);
    $headroom = floatval($params['headroom'] ?? 20);
    $ambientTemp = floatval($params['ambientTemp'] ?? 50);
    $cableLength = floatval($params['cableLength'] ?? 50);
    $cableType = $params['cableType'] ?? 'cat6';
    
    // Cable resistance per meter (loop resistance)
    $cableResistance = [
        'cat5e' => 0.188,  // 24 AWG
        'cat6' => 0.125,   // 23 AWG
        'cat6a' => 0.09    // 22 AWG
    ];
    
    $poeVoltage = 52; // IEEE standard
    
    // Power at PD (device side)
    $pdPowerPoe = 12.95;      // 802.3af
    $pdPowerPoePlus = 25.5;   // 802.3at
    $pdPowerPoePlusPlus = 51; // 802.3bt Type 3
    $pdPower4PPOE = 71.3;     // 802.3bt Type 4
    
    // PSE power (switch provides)
    $psePowerPoe = 15.4;
    $psePowerPoePlus = 30;
    $psePowerPoePlusPlus = 60;
    $psePower4PPOE = 90;
    
    $Rc = $cableResistance[$cableType] ?? $cableResistance['cat6'];
    
    // Calculate cable loss function
    $calculateCableLoss = function($pdPower, $psePower, $numPairs) use ($poeVoltage, $Rc, $cableLength) {
        if ($pdPower === 0) {
            return ['lossWatts' => 0, 'lossPercent' => 0, 'actualPsePower' => $psePower];
        }
        
        $current = $pdPower / $poeVoltage;
        $effectiveResistance = ($Rc * $cableLength) / $numPairs;
        $powerLoss = pow($current, 2) * $effectiveResistance * 2;
        $actualPsePower = $pdPower + $powerLoss;
        $lossPercent = ($powerLoss / $actualPsePower) * 100;
        
        return [
            'lossWatts' => round($powerLoss * 100) / 100,
            'lossPercent' => round($lossPercent * 10) / 10,
            'actualPsePower' => round($actualPsePower * 100) / 100
        ];
    };
    
    // Calculate losses (PoE/PoE+ use 2 pairs, PoE++ uses 4 pairs)
    $poeLoss = $calculateCableLoss($pdPowerPoe, $psePowerPoe, 2);
    $poePlusLoss = $calculateCableLoss($pdPowerPoePlus, $psePowerPoePlus, 2);
    $poePlusPlusLoss = $calculateCableLoss($pdPowerPoePlusPlus, $psePowerPoePlusPlus, 4);
    $fourPPoeLoss = $calculateCableLoss($pdPower4PPOE, $psePower4PPOE, 4);
    
    // Calculate power requirements
    $poeWatts = $poeLoss['actualPsePower'] * $poe;
    $poePlusWatts = $poePlusLoss['actualPsePower'] * $poePlus;
    $poePlusPlusWatts = $poePlusPlusLoss['actualPsePower'] * $poePlusPlus;
    $fourPPOEWatts = $fourPPoeLoss['actualPsePower'] * $fourPPOE;
    
    $subtotalWatts = $poeWatts + $poePlusWatts + $poePlusPlusWatts + $fourPPOEWatts;
    $headroomWatts = $subtotalWatts * ($headroom / 100);
    $totalWatts = $subtotalWatts + $headroomWatts;
    
    // Switch base power estimate
    $switchBasePower = $ambientTemp;
    $totalSystemPower = $totalWatts + $switchBasePower;
    
    $totalDevices = $poe + $poePlus + $poePlusPlus + $fourPPOE;
    $recommendedPorts = ceil($totalDevices * 1.2);
    
    // Determine switch configuration
    $switchSize = 24;
    $numSwitches = 1;
    
    if ($recommendedPorts <= 48) {
        $switchSize = [8, 12, 16, 24, 48][array_search(true, array_map(function($s) use ($recommendedPorts) {
            return $s >= $recommendedPorts;
        }, [8, 12, 16, 24, 48])) ?? 4];
    } else {
        $numSwitches = ceil($recommendedPorts / 48);
        $switchSize = 48;
    }
    
    $totalPorts = $switchSize * $numSwitches;
    $unusedPorts = $totalPorts - $totalDevices;
    $unusedPercent = round(($unusedPorts / $totalPorts) * 100);
    
    // Determine minimum standard
    $minStandard = 'Non-PoE';
    $minStandardShort = 'N/A';
    $minStandardIEEE = '';
    
    if ($fourPPOE > 0) {
        $minStandard = 'PoE++ (802.3bt Type 4)';
        $minStandardShort = 'PoE++ Type 4';
        $minStandardIEEE = '802.3bt';
    } elseif ($poePlusPlus > 0) {
        $minStandard = 'PoE++ (802.3bt Type 3)';
        $minStandardShort = 'PoE++ Type 3';
        $minStandardIEEE = '802.3bt';
    } elseif ($poePlus > 0) {
        $minStandard = 'PoE+ (802.3at)';
        $minStandardShort = 'PoE+';
        $minStandardIEEE = '802.3at';
    } elseif ($poe > 0) {
        $minStandard = 'PoE (802.3af)';
        $minStandardShort = 'PoE';
        $minStandardIEEE = '802.3af';
    }
    
    // Cable loss totals
    $totalCableLoss = ($poeLoss['lossWatts'] * $poe) + 
                      ($poePlusLoss['lossWatts'] * $poePlus) + 
                      ($poePlusPlusLoss['lossWatts'] * $poePlusPlus) + 
                      ($fourPPoeLoss['lossWatts'] * $fourPPOE);
    
    $powerAtDevices = ($pdPowerPoe * $poe) + 
                      ($pdPowerPoePlus * $poePlus) + 
                      ($pdPowerPoePlusPlus * $poePlusPlus) + 
                      ($pdPower4PPOE * $fourPPOE);
    
    // UPS and thermal calculations
    $upsVA = round($totalSystemPower * 1.6 * 1.25);
    $btuPerHour = round($totalSystemPower * 3.412);
    
    // Cable recommendation
    $cableRecommendation = 'Cat5e or better';
    if ($fourPPOE > 0 || $poePlusPlus > 0) {
        $cableRecommendation = 'Cat6 or Cat6A recommended for Type 3/4 devices';
    }
    
    // Recommendations
    $recommendations = [];
    
    $recommendations[] = [
        'type' => 'info',
        'title' => 'UPS Sizing',
        'text' => "Minimum UPS capacity: {$upsVA}VA. For 15-min runtime, consider " . round($upsVA * 1.5) . "VA or higher."
    ];
    
    if ($subtotalWatts > 0) {
        $avgLossPercent = ($totalCableLoss / $subtotalWatts) * 100;
        if ($avgLossPercent > 10) {
            $recommendations[] = [
                'type' => 'warning',
                'title' => 'High Cable Loss',
                'text' => "Cable losses are " . round($avgLossPercent, 1) . "% at {$cableLength}m. Consider shorter runs or Cat6A cable."
            ];
        }
    }
    
    if ($btuPerHour > 500) {
        $recommendations[] = [
            'type' => 'warning',
            'title' => 'Thermal Management',
            'text' => "Total heat output: ~{$btuPerHour} BTU/hr. Ensure adequate rack ventilation."
        ];
    }
    
    return [
        'totalWatts' => round($totalWatts * 100) / 100,
        'subtotalWatts' => round($subtotalWatts * 100) / 100,
        'headroomWatts' => round($headroomWatts * 100) / 100,
        'headroomPercent' => $headroom,
        'switchBasePower' => $switchBasePower,
        'totalSystemPower' => round($totalSystemPower * 100) / 100,
        'minStandard' => $minStandard,
        'minStandardShort' => $minStandardShort,
        'minStandardIEEE' => $minStandardIEEE,
        'totalDevices' => $totalDevices,
        'recommendedPorts' => $totalPorts,
        'numSwitches' => $numSwitches,
        'switchSize' => $switchSize,
        'unusedPorts' => $unusedPorts,
        'unusedPercent' => $unusedPercent,
        'cableRecommendation' => $cableRecommendation,
        'upsVA' => $upsVA,
        'btuPerHour' => $btuPerHour,
        'recommendations' => $recommendations,
        'breakdown' => [
            'poe' => round($poeWatts * 100) / 100,
            'poePlus' => round($poePlusWatts * 100) / 100,
            'poePlusPlus' => round($poePlusPlusWatts * 100) / 100,
            'fourPPOE' => round($fourPPOEWatts * 100) / 100
        ],
        'deviceCounts' => [
            'poe' => $poe,
            'poePlus' => $poePlus,
            'poePlusPlus' => $poePlusPlus,
            'fourPPOE' => $fourPPOE
        ],
        'cableLoss' => [
            'totalLossWatts' => round($totalCableLoss * 100) / 100,
            'powerAtDevices' => round($powerAtDevices * 100) / 100,
            'cableLengthM' => $cableLength,
            'cableLengthFt' => round($cableLength * 3.28084),
            'cableType' => $cableType,
            'lossPercent' => $subtotalWatts > 0 ? round(($totalCableLoss / $subtotalWatts) * 1000) / 10 : 0,
            'perType' => [
                'poe' => $poeLoss,
                'poePlus' => $poePlusLoss,
                'poePlusPlus' => $poePlusPlusLoss,
                'fourPPOE' => $fourPPoeLoss
            ]
        ],
        'standard' => 'IEEE 802.3af/at/bt'
    ];
}
