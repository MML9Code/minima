#!/usr/bin/env node

/**
 * Minify CSS file script for Minima CSS Framework
 * Usage: node minify.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const inputFile = 'minima.css';
const outputFile = 'minima.min.css';

// Minification function
function minifyCSS(css) {
  return css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove whitespace
    .replace(/\s+/g, ' ')
    // Remove whitespace around {} and :
    .replace(/\s*([{}:])\s*/g, '$1')
    // Remove whitespace around ;
    .replace(/;\s*/g, ';')
    // Remove whitespace before !
    .replace(/\s*!/g, '!')
    // Remove trailing semicolons
    .replace(/;}/g, '}')
    // Remove leading/trailing whitespace
    .trim();
}

// Main function
function main() {
  try {
    // Read input file
    const css = fs.readFileSync(inputFile, 'utf8');
    
    // Minify
    const minified = minifyCSS(css);
    
    // Write output file
    fs.writeFileSync(outputFile, minified, 'utf8');
    
    console.log(`✓ Successfully minified ${inputFile} to ${outputFile}`);
    console.log(`  Original size: ${fs.statSync(inputFile).size} bytes`);
    console.log(`  Minified size: ${fs.statSync(outputFile).size} bytes`);
    console.log(`  Reduction: ${((1 - fs.statSync(outputFile).size / fs.statSync(inputFile).size) * 100).toFixed(1)}%`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run
main();
