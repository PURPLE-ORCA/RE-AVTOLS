<?php
/**
 * Bandwidth Calculator Formula
 * AVIXA Standard: Bandwidth (Mbps) = (Width × Height × Frame Rate × Bits per Pixel) ÷ 1,000,000
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    // Extract parameters
    $resolution = $params['resolution'] ?? '1920x1080';
    $frameRate = floatval($params['frameRate'] ?? 60);
    $colorDepth = intval($params['colorDepth'] ?? 10);
    $chromaSubsampling = $params['chromaSubsampling'] ?? '4:2:2';
    $compression = floatval($params['compression'] ?? 1);
    $overhead = floatval($params['overhead'] ?? 8);
    $streams = intval($params['streams'] ?? 1);
    
    // Chroma multipliers
    $chromaMultipliers = [
        '4:4:4' => 3,
        '4:2:2' => 2,
        '4:2:0' => 1.5
    ];
    
    // Parse resolution
    list($width, $height) = array_map('intval', explode('x', $resolution));
    
    // Calculate bits per pixel
    $chromaMultiplier = $chromaMultipliers[$chromaSubsampling] ?? 2;
    $bitsPerPixel = $colorDepth * $chromaMultiplier;
    
    // AVIXA formula: Bandwidth = (W × H × FPS × BPP) / 1,000,000
    $rawBitrateMbps = ($width * $height * $frameRate * $bitsPerPixel) / 1000000;
    
    // Apply compression
    $compressedBitrate = $rawBitrateMbps / max(1, $compression);
    
    // Add overhead
    $perStreamBitrate = $compressedBitrate * (1 + $overhead / 100);
    
    // Total for all streams
    $totalBitrate = $perStreamBitrate * $streams;
    
    // Determine switch type
    $switchType = '1Gb';
    $portSpeed = 1000;
    
    if ($totalBitrate >= 900) {
        $switchType = '10Gb';
        $portSpeed = 10000;
    }
    if ($totalBitrate >= 9000) {
        $switchType = '25Gb';
        $portSpeed = 25000;
    }
    if ($totalBitrate >= 24000) {
        $switchType = '100Gb';
        $portSpeed = 100000;
    }
    
    $utilization = ($totalBitrate / $portSpeed) * 100;
    
    return [
        'rawBitrateMbps' => round($rawBitrateMbps * 100) / 100,
        'rawBitrateGbps' => round($rawBitrateMbps / 1000 * 1000) / 1000,
        'compressedBitrate' => round($compressedBitrate * 100) / 100,
        'perStreamBitrate' => round($perStreamBitrate * 100) / 100,
        'totalBitrate' => round($totalBitrate * 100) / 100,
        'totalBitrateGbps' => round($totalBitrate / 1000 * 1000) / 1000,
        'switchType' => $switchType,
        'portSpeed' => $portSpeed,
        'utilization' => round($utilization * 100) / 100,
        'bitsPerPixel' => round($bitsPerPixel * 10) / 10,
        'totalPixels' => $width * $height,
        'pixelsPerSecond' => $width * $height * $frameRate,
        'standard' => 'AVIXA F501.01:2015'
    ];
}
