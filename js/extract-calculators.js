const fs = require('fs');
const path = require('path');

// Read the main file from the correct directory
const sourceFile = path.join(__dirname, '..', 'AVToolsWebsite.js');
console.log('Reading from:', sourceFile);

const content = fs.readFileSync(sourceFile, 'utf8');
const lines = content.split('\n');

console.log(`Total lines in source file: ${lines.length}`);

// Calculator configurations with their dependencies and exact line numbers
const calculators = [
  {
    name: 'SpeakerCalculator',
    startLine: 13678,
    endLine: 16157,
    imports: ['_jsx', '_jsxs', 'ResetConfirmModal', 'calculateSpeakerPower']
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
const outputDir = path.join(__dirname, 'calculators');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate each calculator file
calculators.forEach(calc => {
  try {
    // Extract lines for this calculator (0-indexed, so subtract 1)
    const startIndex = calc.startLine - 1;
    const endIndex = Math.min(calc.endLine, lines.length);
    
    if (startIndex >= lines.length) {
      console.error(`Error: Start line ${calc.startLine} exceeds file length ${lines.length}`);
      return;
    }
    
    const functionLines = lines.slice(startIndex, endIndex);
    
    if (functionLines.length === 0) {
      console.error(`Error: No lines extracted for ${calc.name}`);
      return;
    }
    
    // Join all lines
    const functionCode = functionLines.join('\n');
    
    // Create the file content with proper imports and React hooks
    const fileContent = `import { ${calc.imports.join(', ')} } from '../utils.js';

const { useState, useEffect, useRef } = React;

${functionCode}

export default ${calc.name};
`;

    const outputFile = path.join(outputDir, `${calc.name}.js`);
    fs.writeFileSync(outputFile, fileContent);
    console.log(`✓ Created ${calc.name}.js (${functionLines.length} lines, lines ${calc.startLine}-${endIndex})`);
  } catch (error) {
    console.error(`✗ Error creating ${calc.name}.js:`, error.message);
  }
});

console.log('\nExtraction complete!');
console.log('Output directory:', outputDir);
