<?php
/**
 * DSP Calculator Formula
 * Comprehensive DSP system analysis
 * PAG/NAG, AEC, gain structure, latency calculations
 * 
 * @license Proprietary - avtoolspro.com
 */

if (!defined('ABSPATH')) {
    http_response_code(403);
    exit('Direct access forbidden');
}

function calculate($params) {
    // Extract all parameters with defaults
    $micCount = intval($params['micCount'] ?? 4);
    $micLevelDbv = floatval($params['micLevelDbv'] ?? -50);
    $nominalSystemLevelDbu = floatval($params['nominalSystemLevelDbu'] ?? 4);
    $maxInputLevelDbu = floatval($params['maxInputLevelDbu'] ?? 24);
    $maxOutputLevelDbu = floatval($params['maxOutputLevelDbu'] ?? 24);
    $rt60Seconds = floatval($params['rt60Seconds'] ?? 0.6);
    $listenerDistanceM = floatval($params['listenerDistanceM'] ?? 3);
    $micToSpeakerDistanceM = floatval($params['micToSpeakerDistanceM'] ?? 2.5);
    $targetSplType = $params['targetSplType'] ?? 'presentation';
    $roomAbsorptionLossDb = floatval($params['roomAbsorptionLossDb'] ?? 2);
    $noiseFloorDba = floatval($params['noiseFloorDba'] ?? 35);
    $roomLengthM = floatval($params['roomLengthM'] ?? 10);
    $roomWidthM = floatval($params['roomWidthM'] ?? 8);
    $roomHeightM = floatval($params['roomHeightM'] ?? 3);
    $talkerToMicM = floatval($params['talkerToMicM'] ?? 0.5);
    $talkerToFarthestListenerM = floatval($params['talkerToFarthestListenerM'] ?? 8);
    $nearestListenerToSpeakerM = floatval($params['nearestListenerToSpeakerM'] ?? 2);
    $micPattern = $params['micPattern'] ?? 'cardioid';
    $useAutomixer = boolval($params['useAutomixer'] ?? false);
    $dspBlocks = $params['dspBlocks'] ?? ['aec', 'eq', 'compressor', 'matrix', 'delay'];
    $sampleRate = intval($params['sampleRate'] ?? 48000);
    $bitDepth = intval($params['bitDepth'] ?? 24);
    $danteChannelCount = intval($params['danteChannelCount'] ?? 16);
    $networkType = $params['networkType'] ?? 'dante';
    $inputs = $params['inputs'] ?? ['mics' => 4, 'programAudio' => 2, 'usbVoip' => 2];
    $outputs = $params['outputs'] ?? ['loudspeakers' => 4, 'amplifiers' => 2, 'ucCodec' => 1];
    $adDaLatencyMs = floatval($params['adDaLatencyMs'] ?? 1);
    $networkLatencyMs = floatval($params['networkLatencyMs'] ?? 1);
    
    $result = [];
    $warnings = [];
    $criticalIssues = [];
    
    // Room calculations
    $roomVolume = $roomLengthM * $roomWidthM * $roomHeightM;
    $surfaceArea = 2 * ($roomLengthM * $roomWidthM + $roomLengthM * $roomHeightM + $roomWidthM * $roomHeightM);
    $meanFreePath = (4 * $roomVolume) / $surfaceArea;
    $speakerDirectivityQ = 2;
    $criticalDistance = 0.057 * sqrt(($speakerDirectivityQ * $roomVolume) / max(0.1, $rt60Seconds));
    
    // Room acoustics rating
    if ($rt60Seconds <= 0.4) {
        $roomRating = 'Excellent';
        $roomAdvice = 'Optimal for speech intelligibility and conferencing';
    } elseif ($rt60Seconds <= 0.6) {
        $roomRating = 'Good';
        $roomAdvice = 'Suitable for conferencing with proper DSP';
    } elseif ($rt60Seconds <= 0.8) {
        $roomRating = 'Acceptable';
        $roomAdvice = 'Consider acoustic treatment for better AEC performance';
    } elseif ($rt60Seconds <= 1.2) {
        $roomRating = 'Challenging';
        $roomAdvice = 'Acoustic treatment strongly recommended';
    } else {
        $roomRating = 'Difficult';
        $roomAdvice = 'Significant acoustic treatment required before system design';
    }
    
    $result['room'] = [
        'volumeM3' => round($roomVolume * 10) / 10,
        'surfaceAreaM2' => round($surfaceArea * 10) / 10,
        'meanFreePathM' => round($meanFreePath * 100) / 100,
        'criticalDistanceM' => round($criticalDistance * 100) / 100,
        'speakerDirectivityQ' => $speakerDirectivityQ,
        'rt60Seconds' => $rt60Seconds,
        'roomAcousticsRating' => $roomRating,
        'roomAcousticsAdvice' => $roomAdvice
    ];
    
    // Gain structure
    $micLevelDbu = $micLevelDbv + 2.2;
    $inputHeadroom = $maxInputLevelDbu - $nominalSystemLevelDbu;
    $requiredInputGain = $nominalSystemLevelDbu - $micLevelDbu;
    $systemHeadroom = $maxOutputLevelDbu - $nominalSystemLevelDbu;
    $headroomTarget = ($targetSplType === 'voice') ? 10 : 20;
    $headroomPass = $systemHeadroom >= $headroomTarget;
    
    $result['gainStructure'] = [
        'inputHeadroomDb' => round($inputHeadroom * 10) / 10,
        'requiredInputGainDb' => round($requiredInputGain * 10) / 10,
        'systemHeadroomDb' => round($systemHeadroom * 10) / 10,
        'headroomPass' => $headroomPass,
        'headroomTarget' => $headroomTarget,
        'headroomRating' => $systemHeadroom >= 20 ? 'Excellent' : ($systemHeadroom >= 15 ? 'Good' : ($systemHeadroom >= 10 ? 'Acceptable' : 'Insufficient'))
    ];
    
    // NOM (Number of Open Microphones)
    $effectiveNom = $useAutomixer ? 1 : max(1, $micCount);
    $nomPenalty = 10 * log10($effectiveNom);
    
    // Microphone directivity bonus
    $micPatterns = [
        'omni' => ['ree' => 1, 'gainBonus' => 0],
        'cardioid' => ['ree' => 0.333, 'gainBonus' => 4.8],
        'supercardioid' => ['ree' => 0.268, 'gainBonus' => 5.7],
        'hypercardioid' => ['ree' => 0.25, 'gainBonus' => 6.0]
    ];
    $micInfo = $micPatterns[$micPattern] ?? $micPatterns['cardioid'];
    $directivityBonus = $micInfo['gainBonus'];
    
    $result['nom'] = [
        'micCount' => $micCount,
        'effectiveNom' => $effectiveNom,
        'useAutomixer' => $useAutomixer,
        'nomPenaltyDb' => round($nomPenalty * 10) / 10,
        'automixerBenefit' => $useAutomixer ? round(10 * log10($micCount) * 10) / 10 : 0,
        'micPattern' => $micPattern,
        'micDirectivityBonus' => $directivityBonus
    ];
    
    // PAG/NAG calculations
    $d0 = max(1, min(50, $talkerToFarthestListenerM));
    $d1 = max(0.3, min(20, $micToSpeakerDistanceM));
    $d2 = max(0.5, min(20, $nearestListenerToSpeakerM));
    $ds = max(0.1, min(5, $talkerToMicM));
    $d3 = max(0.5, min(30, $d0 * 0.4));
    
    $pagRaw = 20 * log10(($d0 * $d1) / ($d2 * $ds));
    $pag = $pagRaw - 10 * log10($effectiveNom) - 6 + $directivityBonus;
    $nag = 20 * log10($d0 / $d3);
    $feedbackMargin = $pag - $nag;
    $feedbackPass = $feedbackMargin >= 0;
    
    // Feedback risk assessment
    if ($feedbackMargin >= 10) {
        $feedbackRating = 'Excellent';
        $feedbackAdvice = 'System has comfortable margin - no feedback concerns';
    } elseif ($feedbackMargin >= 6) {
        $feedbackRating = 'Good';
        $feedbackAdvice = 'Adequate margin for typical operation';
    } elseif ($feedbackMargin >= 3) {
        $feedbackRating = 'Marginal';
        $feedbackAdvice = 'Limited margin - may ring at high gain settings';
    } elseif ($feedbackMargin >= 0) {
        $feedbackRating = 'At Risk';
        $feedbackAdvice = 'Very limited margin - feedback likely at normal operating levels';
    } else {
        $feedbackRating = 'Will Feedback';
        $feedbackAdvice = 'System cannot achieve needed gain without feedback - redesign required';
        $criticalIssues[] = "PAG ({$pag} dB) < NAG ({$nag} dB). System will feedback.";
    }
    
    $result['pagNag'] = [
        'pagDb' => round($pag * 10) / 10,
        'nagDb' => round($nag * 10) / 10,
        'feedbackMarginDb' => round($feedbackMargin * 10) / 10,
        'feedbackMarginPass' => $feedbackPass,
        'feedbackRiskRating' => $feedbackRating,
        'feedbackRiskAdvice' => $feedbackAdvice,
        'distances' => [
            'd0_talkerToFarthestListener' => $d0,
            'd1_micToSpeaker' => $d1,
            'd2_speakerToNearestListener' => $d2,
            'ds_talkerToMic' => $ds
        ]
    ];
    
    // AEC calculations
    $aecTailMs = round($rt60Seconds * 1000 * 2 / 3);
    if ($rt60Seconds <= 0.4) {
        $aecTailMs = 100;
        $aecRating = 'Excellent';
    } elseif ($rt60Seconds <= 0.5) {
        $aecTailMs = 150;
        $aecRating = 'Good';
    } elseif ($rt60Seconds <= 0.7) {
        $aecTailMs = 200;
        $aecRating = 'Acceptable';
    } elseif ($rt60Seconds <= 1.0) {
        $aecTailMs = 250;
        $aecRating = 'Challenging';
    } else {
        $aecTailMs = 300;
        $aecRating = 'Difficult';
    }
    
    // ERL calculation
    $erlDistance = 20 * log10($d1 / max(0.5, $d2));
    $erlDirectivity = min(6, 6 * log10($speakerDirectivityQ));
    $erlTreatment = min(4, $roomAbsorptionLossDb);
    $erlPenalty = max(0, (($rt60Seconds - 0.4) / 0.3) * 3);
    $erl = max(0, min(20, round(($erlDistance + $erlDirectivity + $erlTreatment - $erlPenalty) * 10) / 10));
    $erlPass = $erl >= 6;
    
    $result['aec'] = [
        'aecTailLengthMs' => $aecTailMs,
        'aecTailRating' => $aecRating,
        'erlDb' => $erl,
        'erlPass' => $erlPass,
        'erlRating' => $erl >= 12 ? 'Excellent' : ($erl >= 8 ? 'Good' : ($erl >= 6 ? 'Acceptable' : 'Poor'))
    ];
    
    // SNR and noise
    $targetSpl = ($targetSplType === 'voice') ? 70 : 78;
    $snr = $targetSpl - $noiseFloorDba;
    $snrPass = $snr >= 25;
    
    $result['noiseAndSensitivity'] = [
        'snrDb' => round($snr * 10) / 10,
        'snrPass' => $snrPass,
        'snrRating' => $snr >= 35 ? 'Excellent' : ($snr >= 25 ? 'Good' : ($snr >= 15 ? 'Acceptable' : 'Poor')),
        'noiseFloorDba' => $noiseFloorDba,
        'desiredSpeechLevel' => $targetSpl
    ];
    
    // Latency
    $adLatency = $adDaLatencyMs / 2;
    $daLatency = $adDaLatencyMs / 2;
    $dspLatency = min(5, 0.8 * count($dspBlocks));
    $networkLatency = $networkLatencyMs;
    $aecLatency = in_array('aec', $dspBlocks) ? 10 : 0;
    $totalLatency = $adLatency + $dspLatency + $networkLatency + $aecLatency + $daLatency;
    $latencyPass = $totalLatency < 20;
    
    $result['latency'] = [
        'totalLatencyMs' => round($totalLatency * 10) / 10,
        'latencyPass' => $latencyPass,
        'latencyRating' => $totalLatency < 10 ? 'Excellent' : ($totalLatency < 20 ? 'Good' : ($totalLatency < 40 ? 'Acceptable' : 'High')),
        'breakdown' => [
            'adConversion' => round($adLatency * 10) / 10,
            'dspProcessing' => round($dspLatency * 10) / 10,
            'networkTransport' => round($networkLatency * 10) / 10,
            'aecProcessing' => $aecLatency,
            'daConversion' => round($daLatency * 10) / 10
        ]
    ];
    
    // Network audio
    $rawBandwidth = ($sampleRate * $bitDepth * $danteChannelCount) / 1000000;
    $totalBandwidth = $rawBandwidth * 1.25;
    
    $result['networkAudio'] = [
        'totalBandwidthMbps' => round($totalBandwidth * 100) / 100,
        'rawBandwidthMbps' => round($rawBandwidth * 100) / 100,
        'channelCount' => $danteChannelCount,
        'sampleRate' => $sampleRate,
        'bitDepth' => $bitDepth,
        'networkType' => $networkType
    ];
    
    // Summary scoring
    $criteria = [
        ['name' => 'Feedback Stability', 'pass' => $feedbackPass, 'weight' => 25, 'critical' => true],
        ['name' => 'Echo Control', 'pass' => $erlPass, 'weight' => 20, 'critical' => true],
        ['name' => 'Speech Intelligibility', 'pass' => $snrPass, 'weight' => 20, 'critical' => false],
        ['name' => 'System Headroom', 'pass' => $headroomPass, 'weight' => 15, 'critical' => false],
        ['name' => 'System Latency', 'pass' => $latencyPass, 'weight' => 10, 'critical' => false]
    ];
    
    $totalWeight = array_sum(array_column($criteria, 'weight'));
    $passedWeight = 0;
    foreach ($criteria as $c) {
        if ($c['pass']) $passedWeight += $c['weight'];
    }
    $baseScore = round(($passedWeight / $totalWeight) * 100);
    
    $criticalFailures = array_filter($criteria, function($c) { return $c['critical'] && !$c['pass']; });
    $hasCriticalFailures = count($criticalFailures) > 0;
    
    if ($hasCriticalFailures) {
        $overallRating = 'Critical Issues';
        $overallAdvice = 'System has critical failures that must be addressed.';
    } elseif ($baseScore >= 90) {
        $overallRating = 'Excellent';
        $overallAdvice = 'System meets all design criteria - ready for deployment';
    } elseif ($baseScore >= 80) {
        $overallRating = 'Good';
        $overallAdvice = 'System meets requirements but has some areas for optimization';
    } elseif ($baseScore >= 65) {
        $overallRating = 'Acceptable';
        $overallAdvice = 'System is functional but review warnings for reliability improvements';
    } else {
        $overallRating = 'Needs Improvement';
        $overallAdvice = 'Multiple issues detected - significant design modifications required';
    }
    
    $result['summary'] = [
        'overallScore' => $baseScore,
        'overallRating' => $overallRating,
        'overallAdvice' => $overallAdvice,
        'passedCriteria' => count(array_filter($criteria, function($c) { return $c['pass']; })),
        'totalCriteria' => count($criteria),
        'hasCriticalFailures' => $hasCriticalFailures,
        'criticalFailures' => array_map(function($c) { return $c['name']; }, $criticalFailures),
        'warnings' => $warnings,
        'criticalIssues' => $criticalIssues
    ];
    
    return $result;
}
