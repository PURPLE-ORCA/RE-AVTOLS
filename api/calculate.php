<?php
/**
 * AV Tools Pro - API Router
 * Handles all calculator requests and routes to appropriate formula files
 * 
 * @license Proprietary - avtoolspro.com
 */

// Security check - block direct access from browser
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}

// CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://avtoolspro.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

// Rate limiting
$ip = $_SERVER['REMOTE_ADDR'];
$rateFile = '/tmp/rate_limit_' . md5($ip) . '.json';
$rateLimit = 60; // requests per minute
$rateWindow = 60; // seconds

if (file_exists($rateFile)) {
    $rateData = json_decode(file_get_contents($rateFile), true);
    if (time() - $rateData['start'] < $rateWindow) {
        if ($rateData['count'] >= $rateLimit) {
            http_response_code(429);
            echo json_encode(['success' => false, 'error' => 'Rate limit exceeded']);
            exit();
        }
        $rateData['count']++;
    } else {
        $rateData = ['start' => time(), 'count' => 1];
    }
} else {
    $rateData = ['start' => time(), 'count' => 1];
}
file_put_contents($rateFile, json_encode($rateData));

// Get input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['calculator'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
    exit();
}

$calculator = $input['calculator'];
$params = $input['params'] ?? [];

// Whitelist of valid calculators
$validCalculators = [
    'bandwidth',
    'conduit',
    'audio',
    'projector',
    'poe',
    'brightness',
    'viewing-angle',
    'dvled',
    'videowall',
    'videowall-controller',
    'cooling',
    'speaker',
    'display-size',
    'camera',
    'dsp',
    'rack-builder',
    'videowall-builder'
];

if (!in_array($calculator, $validCalculators)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid calculator']);
    exit();
}

// Load and execute calculator
$formulaFile = __DIR__ . '/formulas/' . $calculator . '.php';

if (!file_exists($formulaFile)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Calculator not found']);
    exit();
}

try {
    require_once $formulaFile;
    $result = calculate($params);
    echo json_encode(['success' => true, 'result' => $result]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Calculation error: ' . $e->getMessage()]);
}
