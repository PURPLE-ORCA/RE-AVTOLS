<?php
/**
 * Video Wall Controller Calculator Formula
 * LED controller port loading and capacity
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $totalCapacity = intval($params['totalCapacity'] ?? 2000000);
    $outputPorts = intval($params['outputPorts'] ?? 4);
    $bitDepth = $params['bitDepth'] ?? '8bit';
    $cabinetWidth = intval($params['cabinetWidth'] ?? 500);
    $cabinetHeight = intval($params['cabinetHeight'] ?? 500);
    $pixelPitch = floatval($params['pixelPitch'] ?? 2.5);
    $refreshRate = intval($params['refreshRate'] ?? 60);
    
    // Determine port capacity based on bit depth
    $portCapacities = [
        '8bit' => 650000,
        '10bit' => 520000,
        '12bit' => 433333
    ];
    $bitDepthValue = intval(str_replace('bit', '', $bitDepth));
    $portCapacity = $portCapacities[$bitDepth] ?? 650000;
    
    // Calculate cabinet resolution
    $widthPixels = round($cabinetWidth / $pixelPitch);
    $heightPixels = round($cabinetHeight / $pixelPitch);
    $cabinetResolution = $widthPixels * $heightPixels;
    
    // Calculate port utilization
    $bitsPerPixel = 3 * $bitDepthValue; // RGB
    $calculatedPortCapacity = floor(936000000 / ($refreshRate * $bitsPerPixel));
    $effectivePortCapacity = min($calculatedPortCapacity, $portCapacity);
    
    // Calculate cabinets per port
    $cabinetsPerPort = floor($effectivePortCapacity / $cabinetResolution);
    
    // Calculate maximum cabinets
    $maxByControllerCapacity = floor($totalCapacity / $cabinetResolution);
    $maxByPorts = $cabinetsPerPort * $outputPorts;
    $maxCabinetsTotal = min($maxByControllerCapacity, $maxByPorts);
    
    // Calculate bandwidth per cabinet
    $bandwidthPerCabinet = ($cabinetResolution * $refreshRate * $bitsPerPixel) / 1000000;
    
    // Calculate port utilization percentage
    $portUtilization = (($cabinetResolution * $cabinetsPerPort) / $effectivePortCapacity) * 100;
    
    // Generate tips
    $tips = [];
    
    if ($maxByControllerCapacity < $maxByPorts) {
        $unusedPorts = $outputPorts - ceil($maxByControllerCapacity / $cabinetsPerPort);
        $tips[] = [
            'type' => 'warning',
            'title' => 'Controller Capacity Limited',
            'text' => "This controller's total capacity limits you to {$maxByControllerCapacity} cabinets. {$unusedPorts} port(s) will remain unused."
        ];
    } else {
        $tips[] = [
            'type' => 'success',
            'title' => 'Port-Limited Configuration',
            'text' => "Controller has sufficient pixel capacity. Your {$outputPorts} ports × {$cabinetsPerPort} cabinets/port is the limiting factor."
        ];
    }
    
    if ($refreshRate > 60) {
        $reduction = round((1 - 60 / $refreshRate) * 100);
        $tips[] = [
            'type' => 'info',
            'title' => 'High Refresh Rate Mode',
            'text' => "Running at {$refreshRate}Hz reduces pixel capacity by ~{$reduction}% compared to 60Hz."
        ];
    }
    
    if ($portUtilization < 50) {
        $tips[] = [
            'type' => 'info',
            'title' => 'Low Port Utilization',
            'text' => "Each port is only " . round($portUtilization) . "% utilized. You could add more cabinets per chain."
        ];
    } elseif ($portUtilization > 90) {
        $tips[] = [
            'type' => 'warning',
            'title' => 'High Port Utilization',
            'text' => "Ports are " . round($portUtilization) . "% utilized. Consider leaving 10-20% headroom for signal integrity."
        ];
    } else {
        $tips[] = [
            'type' => 'success',
            'title' => 'Good Port Utilization',
            'text' => "Port utilization at " . round($portUtilization) . "% is within optimal range (50-90%)."
        ];
    }
    
    $tips[] = [
        'type' => 'info',
        'title' => 'Cable Length Guideline',
        'text' => 'Per industry standards, Cat6 data cables to LED cabinets should not exceed 100m. For longer runs, use fiber converters.'
    ];
    
    if ($outputPorts >= 4) {
        $tips[] = [
            'type' => 'info',
            'title' => 'Redundancy Option',
            'text' => "With {$outputPorts} ports available, consider configuring backup/redundant data paths for critical displays."
        ];
    }
    
    return [
        'cabinetResolution' => $cabinetResolution,
        'widthPixels' => $widthPixels,
        'heightPixels' => $heightPixels,
        'cabinetsPerPort' => $cabinetsPerPort,
        'maxCabinetsTotal' => $maxCabinetsTotal,
        'maxByControllerCapacity' => $maxByControllerCapacity,
        'maxByPorts' => $maxByPorts,
        'refreshRate' => $refreshRate,
        'bitDepth' => $bitDepthValue,
        'bitsPerPixel' => $bitsPerPixel,
        'bandwidthPerCabinet' => round($bandwidthPerCabinet * 100) / 100,
        'effectivePortCapacity' => $effectivePortCapacity,
        'calculatedPortCapacity' => $calculatedPortCapacity,
        'portUtilization' => round($portUtilization * 10) / 10,
        'totalPixelsPerCabinet' => $cabinetResolution,
        'loadingEfficiency' => round($portUtilization * 10) / 10,
        'tips' => $tips
    ];
}
