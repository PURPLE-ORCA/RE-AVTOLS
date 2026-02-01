<?php
/**
 * Audio Calculator Formula
 * Supports: Data Rate, Dante/AES67 Bandwidth, Wavelength & Room Modes
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    $mode = $params['mode'] ?? 'datarate';
    
    switch ($mode) {
        case 'datarate':
            return calculateDataRate($params);
        case 'dante':
            return calculateDanteBandwidth($params);
        case 'wavelength':
            return calculateWavelength($params);
        default:
            return calculateDataRate($params);
    }
}

function calculateDataRate($params) {
    $sampleRate = intval($params['sampleRate'] ?? 48000);
    $bitDepth = intval($params['bitDepth'] ?? 24);
    $channels = intval($params['channels'] ?? 2);
    $minutes = intval($params['minutes'] ?? 0);
    $seconds = intval($params['seconds'] ?? 0);
    
    if ($sampleRate <= 0 || $bitDepth <= 0 || $channels <= 0) {
        return [
            'dataRateBps' => 0,
            'dataRateKbps' => 0,
            'dataRateMbps' => 0,
            'fileSizeMB' => 0,
            'fileSizeGB' => 0,
            'fileSizeFormatted' => '0 MB',
            'totalSeconds' => 0
        ];
    }
    
    $totalSeconds = max(0, $minutes * 60 + $seconds);
    
    // Data rate = sample rate × bit depth × channels
    $dataRateBps = $sampleRate * $bitDepth * $channels;
    $dataRateKbps = $dataRateBps / 1000;
    $dataRateMbps = $dataRateKbps / 1000;
    
    // File size = (data rate × duration) / 8 (bits to bytes)
    $fileSizeBytes = ($dataRateBps * $totalSeconds) / 8;
    $fileSizeMB = $fileSizeBytes / 1048576;
    $fileSizeGB = $fileSizeMB / 1024;
    
    // Format file size
    if ($fileSizeGB >= 1) {
        $fileSizeFormatted = round($fileSizeGB * 100) / 100 . ' GB';
    } elseif ($fileSizeMB >= 1) {
        $fileSizeFormatted = round($fileSizeMB * 100) / 100 . ' MB';
    } else {
        $fileSizeKB = $fileSizeBytes / 1024;
        $fileSizeFormatted = round($fileSizeKB * 100) / 100 . ' KB';
    }
    
    return [
        'dataRateBps' => round($dataRateBps),
        'dataRateKbps' => round($dataRateKbps * 100) / 100,
        'dataRateMbps' => round($dataRateMbps * 1000) / 1000,
        'fileSizeMB' => round($fileSizeMB * 100) / 100,
        'fileSizeGB' => round($fileSizeGB * 1000) / 1000,
        'fileSizeFormatted' => $fileSizeFormatted,
        'totalSeconds' => $totalSeconds
    ];
}

function calculateDanteBandwidth($params) {
    $protocol = $params['protocol'] ?? 'dante';
    $channels = intval($params['channels'] ?? 16);
    $sampleRate = intval($params['sampleRate'] ?? 48000);
    $bitDepth = intval($params['bitDepth'] ?? 24);
    $redundancy = boolval($params['redundancy'] ?? false);
    
    // Raw bandwidth = channels × sample rate × bit depth / 1,000,000
    $rawBandwidth = ($channels * $sampleRate * $bitDepth) / 1000000;
    
    // Protocol overhead
    $overhead = ($protocol === 'dante') ? 1.25 : 1.20; // Dante 25%, AES67 20%
    $protocolBandwidth = $rawBandwidth * $overhead;
    
    // Flows needed (Dante uses 4ch/flow, AES67 uses 8ch/flow)
    $channelsPerFlow = ($protocol === 'dante') ? 4 : 8;
    $flowsNeeded = ceil($channels / $channelsPerFlow);
    $bandwidthPerFlow = $protocolBandwidth / $flowsNeeded;
    
    // Total with redundancy
    $totalBandwidth = ($protocol === 'dante' && $redundancy) ? $protocolBandwidth * 2 : $protocolBandwidth;
    
    // Network recommendation
    $networkRecommendation = '100 Mbps';
    if ($totalBandwidth > 80) $networkRecommendation = '1 Gbps';
    if ($totalBandwidth > 800) $networkRecommendation = '10 Gbps';
    
    // Latency
    $latency = ($protocol === 'dante') 
        ? (($sampleRate === 96000) ? '0.25-1 ms' : '0.5-2 ms')
        : (($sampleRate === 96000) ? '0.5-2 ms' : '1-4 ms');
    
    return [
        'protocol' => $protocol,
        'protocolName' => ($protocol === 'dante') ? 'Dante' : 'AES67',
        'rawBandwidthMbps' => round($rawBandwidth * 100) / 100,
        'protocolBandwidthMbps' => round($protocolBandwidth * 100) / 100,
        'overhead' => ($protocol === 'dante') ? '25%' : '20%',
        'totalBandwidth' => round($totalBandwidth * 100) / 100,
        'flowsNeeded' => $flowsNeeded,
        'bandwidthPerFlow' => round($bandwidthPerFlow * 100) / 100,
        'networkRecommendation' => $networkRecommendation,
        'latency' => $latency,
        'redundancy' => $redundancy
    ];
}

function calculateWavelength($params) {
    $frequency = floatval($params['frequency'] ?? 1000);
    $temperature = floatval($params['temperature'] ?? 20);
    $roomLength = floatval($params['roomLength'] ?? 10);
    $roomWidth = floatval($params['roomWidth'] ?? 8);
    $roomHeight = floatval($params['roomHeight'] ?? 3);
    $unit = $params['unit'] ?? 'm';
    $roomType = $params['roomType'] ?? 'control-room';
    
    // Convert to meters if feet
    $lengthM = ($unit === 'ft') ? $roomLength * 0.3048 : $roomLength;
    $widthM = ($unit === 'ft') ? $roomWidth * 0.3048 : $roomWidth;
    $heightM = ($unit === 'ft') ? $roomHeight * 0.3048 : $roomHeight;
    
    // Speed of sound (temperature dependent)
    $speedOfSound = 331.3 + (0.606 * $temperature);
    
    // Wavelength = speed / frequency
    $wavelengthM = $speedOfSound / $frequency;
    $wavelengthCm = $wavelengthM * 100;
    $wavelengthFt = $wavelengthM * 3.28084;
    $wavelengthIn = $wavelengthFt * 12;
    
    // Room volume and surface area
    $volume = $lengthM * $widthM * $heightM;
    $surfaceArea = 2 * ($lengthM * $widthM + $widthM * $heightM + $lengthM * $heightM);
    
    // Room modes
    $lengthModes = [];
    $widthModes = [];
    $heightModes = [];
    
    for ($mode = 1; $mode <= 4; $mode++) {
        $lengthModes[] = [
            'mode' => $mode,
            'frequency' => round($speedOfSound / 2 * $mode / $lengthM * 10) / 10,
            'label' => "L$mode"
        ];
        $widthModes[] = [
            'mode' => $mode,
            'frequency' => round($speedOfSound / 2 * $mode / $widthM * 10) / 10,
            'label' => "W$mode"
        ];
        $heightModes[] = [
            'mode' => $mode,
            'frequency' => round($speedOfSound / 2 * $mode / $heightM * 10) / 10,
            'label' => "H$mode"
        ];
    }
    
    // Room type targets (ISO 3382)
    $roomTargets = [
        'recording-studio' => ['name' => 'Recording Studio', 'targetRT60' => 0.3, 'range' => '0.2-0.4s'],
        'control-room' => ['name' => 'Control Room', 'targetRT60' => 0.35, 'range' => '0.25-0.4s'],
        'home-theater' => ['name' => 'Home Theater', 'targetRT60' => 0.4, 'range' => '0.3-0.5s'],
        'conference-room' => ['name' => 'Conference Room', 'targetRT60' => 0.5, 'range' => '0.4-0.6s'],
        'lecture-hall' => ['name' => 'Lecture Hall', 'targetRT60' => 0.7, 'range' => '0.6-0.8s']
    ];
    
    $purposeInfo = $roomTargets[$roomType] ?? $roomTargets['control-room'];
    
    // Schroeder frequency
    $schroederFreq = round(2000 * sqrt($purposeInfo['targetRT60'] / $volume));
    
    // Quarter wavelength (for treatment depth)
    $quarterWavelength = $wavelengthM / 4;
    
    // Frequency band
    $freqBand = 'mid';
    if ($frequency < 60) $freqBand = 'sub-bass';
    elseif ($frequency < 250) $freqBand = 'bass';
    elseif ($frequency < 500) $freqBand = 'low-mid';
    elseif ($frequency < 2000) $freqBand = 'mid';
    elseif ($frequency < 6000) $freqBand = 'high-mid';
    else $freqBand = 'high';
    
    return [
        'frequency' => $frequency,
        'speedOfSound' => round($speedOfSound * 10) / 10,
        'wavelengthM' => round($wavelengthM * 100) / 100,
        'wavelengthCm' => round($wavelengthCm * 10) / 10,
        'wavelengthFt' => round($wavelengthFt * 100) / 100,
        'wavelengthIn' => round($wavelengthIn * 10) / 10,
        'lengthModes' => $lengthModes,
        'widthModes' => $widthModes,
        'heightModes' => $heightModes,
        'schroederFreq' => $schroederFreq,
        'volumeM3' => round($volume * 10) / 10,
        'volumeFt3' => round($volume * 35.3147),
        'roomDimensionUnit' => $unit,
        'freqBand' => $freqBand,
        'quarterWavelengthCm' => round($quarterWavelength * 100 * 10) / 10,
        'quarterWavelengthIn' => round($quarterWavelength * 39.37 * 10) / 10,
        'isBelowSchroeder' => $frequency < $schroederFreq,
        'purposeInfo' => $purposeInfo,
        'surfaceArea' => round($surfaceArea * 10) / 10,
        'treatmentRec' => []
    ];
}
