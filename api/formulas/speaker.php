<?php
/**
 * Speaker Calculator Formula
 * AVIXA EPR (Electrical Power Required) formula
 * Ceiling speaker layout calculations
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $speakerSensitivity = floatval($params['speakerSensitivity'] ?? 87);
    $targetSPL = floatval($params['targetSPL'] ?? 75);
    $headroom = floatval($params['headroom'] ?? 10);
    $distance = floatval($params['distance'] ?? 3);
    $distanceUnit = $params['distanceUnit'] ?? 'm';
    
    // Optional ceiling calculations
    $includeCeiling = boolval($params['includeCeiling'] ?? false);
    $roomLength = floatval($params['roomLength'] ?? 10);
    $roomWidth = floatval($params['roomWidth'] ?? 8);
    $ceilingHeight = floatval($params['ceilingHeight'] ?? 3);
    $roomUnit = $params['roomUnit'] ?? 'm';
    $coverageAngle = floatval($params['coverageAngle'] ?? 90);
    $spacingMode = $params['spacingMode'] ?? 'minimal';
    
    // Convert distance to meters
    $distanceM = $distance;
    if ($distanceUnit === 'ft') {
        $distanceM = $distance * 0.3048;
    } elseif ($distanceUnit === 'in') {
        $distanceM = $distance * 0.0254;
    }
    
    // AVIXA EPR Formula
    // EPR = 10^((targetSPL + headroom - sensitivity + distanceLoss) / 10)
    // Distance loss = 20 × log10(distance / 1m)
    
    $distanceRatio = $distanceM / 1;
    $distanceLoss = 20 * log10($distanceRatio);
    
    $numerator = $targetSPL + $headroom - $speakerSensitivity + $distanceLoss;
    $exponent = $numerator / 10;
    $requiredWatts = pow(10, $exponent);
    
    if ($requiredWatts < 0.01) {
        $requiredWatts = 0.01;
    }
    
    $result = [
        'requiredWatts' => round($requiredWatts * 100) / 100,
        'distanceLoss' => round($distanceLoss * 100) / 100,
        'distanceM' => round($distanceM * 100) / 100,
        'exponent' => round($exponent * 1000) / 1000
    ];
    
    // Ceiling speaker calculations if enabled
    if ($includeCeiling) {
        // Convert room dimensions to meters
        $lengthM = $roomLength;
        $widthM = $roomWidth;
        $heightM = $ceilingHeight;
        $earHeight = 1.2; // Standard ear height
        
        if ($roomUnit === 'ft') {
            $lengthM = $roomLength * 0.3048;
            $widthM = $roomWidth * 0.3048;
            $heightM = $ceilingHeight * 0.3048;
        }
        
        // Effective height (ceiling to ear level)
        $effectiveHeight = $heightM - $earHeight;
        $minHeight = ($roomUnit === 'm') ? 1.2 : 4;
        
        if ($effectiveHeight < $minHeight) {
            $effectiveHeight = $minHeight;
        }
        
        // Coverage calculation
        $angleRad = ($coverageAngle / 2) * (M_PI / 180);
        $coverageDiameter = 2 * $effectiveHeight * tan($angleRad);
        $coverageRadius = $coverageDiameter / 2;
        
        // Spacing based on mode
        switch ($spacingMode) {
            case 'edge':
                $spacing = $coverageDiameter;
                $spacingDescription = 'Edge to Edge';
                $uniformity = '±4.4 dB';
                break;
            case 'center':
                $spacing = $coverageRadius;
                $spacingDescription = 'Full Overlap (Center-to-Center)';
                $uniformity = '±1.4 dB';
                break;
            case 'minimal':
            default:
                $spacing = $coverageRadius * sqrt(2);
                $spacingDescription = 'Minimum Overlap';
                $uniformity = '±2.0 dB';
                break;
        }
        
        // Calculate speaker count
        $speakersLength = max(1, ceil($lengthM / $spacing));
        $speakersWidth = max(1, ceil($widthM / $spacing));
        $totalSpeakers = $speakersLength * $speakersWidth;
        
        // Calculate actual spacing
        $actualSpacingLength = $lengthM / $speakersLength;
        $actualSpacingWidth = $widthM / $speakersWidth;
        
        // Coverage area per speaker
        $coverageArea = M_PI * pow($coverageRadius, 2);
        $areaUnit = ($roomUnit === 'm') ? 'm²' : 'ft²';
        
        // Room area
        $roomArea = $lengthM * $widthM;
        
        // Total power
        $totalSpeakerPower = round($requiredWatts * $totalSpeakers * 100) / 100;
        
        // Amplifier sizing (1.5x speaker power for headroom)
        $requiredAmpPower = round($totalSpeakerPower * 1.5 * 100) / 100;
        
        $result['ceilingCalcs'] = [
            'effectiveHeight' => round($effectiveHeight * 100) / 100,
            'coverageDiameter' => round($coverageDiameter * 100) / 100,
            'coverageRadius' => round($coverageRadius * 100) / 100,
            'spacing' => round($spacing * 100) / 100,
            'spacingMode' => $spacingMode,
            'spacingDescription' => $spacingDescription,
            'uniformity' => $uniformity,
            'speakersLength' => $speakersLength,
            'speakersWidth' => $speakersWidth,
            'totalSpeakers' => $totalSpeakers,
            'actualSpacingLength' => round($actualSpacingLength * 100) / 100,
            'actualSpacingWidth' => round($actualSpacingWidth * 100) / 100,
            'coverageArea' => round($coverageArea * 100) / 100,
            'coverageAreaUnit' => $areaUnit,
            'roomArea' => round($roomArea * 100) / 100,
            'speakerCount' => $totalSpeakers,
            'totalSpeakerPower' => $totalSpeakerPower,
            'requiredAmpPower' => $requiredAmpPower,
            'eprPerSpeaker' => round($requiredWatts * 100) / 100
        ];
    }
    
    $result['standard'] = 'AVIXA D602.01:2022';
    
    return $result;
}
