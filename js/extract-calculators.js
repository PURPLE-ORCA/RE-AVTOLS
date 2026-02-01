const fs = require('fs');
const path = require('path');

// Read the main file
const sourceFile = path.join(__dirname, '..', '..', 'AVToolsWebsite.js');
const content = fs.readFileSync(sourceFile, 'utf8');
const lines = content.split('\n');

// Calculator configurations with their dependencies
const calculators = [
  {
    name: 'CoolingCalculator',
    startLine: 12698,
    endLine: 13677,
    imports: ['_jsx', '_jsxs', 'ResetConfirmModal', 'calculateRackCooling']
  },
  {
    name: 'SpeakerCalculator', 
    startLine: 13678,
    endLine: 16157,
    imports: ['_jsx', '_jsxs', 'ResetConfirmModal', 'calculateSpeakerPower']
  },
  {
    name: 'DisplaySizeCalculator',
    startLine: 16158,
    endLine: 16743,
    imports: ['_jsx', '_jsxs', 'ResetConfirmModal', '_0xb402b0']
  },
  {
    name: 'CameraCalculator',
    startLine: 16744,
    endLine: 17910,
    imports: ['_jsx', '_jsxs', 'ResetConfirmModal', 'calculateCameraDistance', 'calculateCameraWithZoom']
  },
  {
    name: 'DSPCalculator',
    startLine: 17911,
    endLine: 21190,
    imports: ['_jsx', '_jsxs', 'ResetConfirmModal', 'calculateDSP']
  },
  {
    name: 'RackBuilderCalculator',
    startLine: 21191,
    endLine: 27368,
    imports: ['_jsx', '_jsxs', 'ResetConfirmModal']
  },
  {
    name: 'VideoWallBuilderCalculator',
    startLine: 27369,
    endLine: lines.length,
    imports: ['_jsx', '_jsxs', 'ResetConfirmModal', '_0x99bba9']
  }
];

// Create output directory
const outputDir = path.join(__dirname, '..', 'calculators');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate each calculator file
calculators.forEach(calc => {
  // Extract the function code
  const functionLines = lines.slice(calc.startLine - 1, calc.endLine);
  
  // Find where the actual function starts (after the function declaration line)
  let functionStartIndex = 0;
  for (let i = 0; i < functionLines.length; i++) {
    if (functionLines[i].includes('function ' + calc.name + '()') || 
        functionLines[i].includes('function ' + calc.name)) {
      functionStartIndex = i;
      break;
    }
  }
  
  // Extract just the function body
  const functionCode = functionLines.slice(functionStartIndex).join('\n');
  
  // Create the file content with proper imports
  const fileContent = `import { ${calc.imports.join(', ')} } from '../utils.js';

const { useState, useEffect, useRef } = React;

${functionCode}

export default ${calc.name};
`;

  const outputFile = path.join(outputDir, `${calc.name}.js`);
  fs.writeFileSync(outputFile, fileContent);
  console.log(`Created ${calc.name}.js (${calc.endLine - calc.startLine + 1} lines)`);
});

console.log('\nAll calculator files created successfully!');
console.log('Files created in:', outputDir);
