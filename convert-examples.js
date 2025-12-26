/**
 * Script to convert old-format commented examples to proper Example format
 * 
 * Usage: node convert-examples.js
 * 
 * This script reads examples.ts, extracts old-format examples (with 'label' field),
 * converts them to proper Example format, and outputs the converted code.
 */

const fs = require('fs');
const path = require('path');

// Read the examples file
const filePath = path.join(__dirname, 'src/catalog/examples.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Function to clean font names (remove parenthetical descriptions)
function cleanFont(font) {
  if (typeof font !== 'string') return font;
  // Remove anything in parentheses
  return font.split('(')[0].trim().split(')')[0].trim();
}

// Function to generate placeholder image URLs based on keywords
function generateImageUrls(id, keywords = '') {
  // Use consistent IDs based on example ID for reproducible URLs
  const seed = id.split('-').slice(0, 2).join('-');
  const seedNum = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Use different Unsplash photo IDs for variety
  const photoIds = [
    '1467232004584-a241de8bcf5d',
    '1492562080023-ab3db95bfbce',
    '1523050854058-8df90110c9f1',
    '1499750310107-5fef28a66643',
    '1497613812973-731b5a8cc776',
    '1460925895917-afdab827c52f',
    '1519389950473-47ba0277781c',
    '1432888622747-4eb9a8f2e40c',
    '1492691527719-9d1e07e534b4',
    '1487058792275-0ad4aaf24ca7',
    '1504868584819-f8e8b4b6d7e3',
    '1515895307828-95d45c2cbf0a',
    '1517077304055-6e89abbf09b0',
    '1522071820081-009f3129c710',
    '1522542559099-2d422a75104a',
    '1498050108023-c5249f4df085',
    '1506905925346-21bda4d32df4',
    '1517486808906-6ca8b3f04846',
    '1521737604893-d14cc237f11d',
    '1492691527719-9d1e07e534b4',
    '1516116217924-9b57c11fb66e',
    '1522771739534-6b8e7eb0b4b8',
    '1521737604893-d14cc237f11d',
    '1517077304055-6e89abbf09b0',
    '1498050108023-c5249f4df085',
    '1506905925346-21bda4d32df4',
    '1522542559099-2d422a75104a',
    '1487058792275-0ad4aaf24ca7',
    '1515895307828-95d45c2cbf0a',
    '1492691527719-9d1e07e534b4',
    '1522071820081-009f3129cbfb',
    '1497613812973-731b5a8cc776',
    '1460925895917-afdab827c52f',
    '1519389950473-47ba0277781c',
    '1432888622747-4eb9a8f2e40c',
  ];
  
  const photoId = photoIds[seedNum % photoIds.length];
  
  return {
    thumbnail: `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=400&q=60`,
    preview: `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=900&q=60`,
  };
}

// Function to convert an old-format example to new format
function convertExample(obj) {
  const trait = obj.trait || {};
  const colors = trait.colors || [];
  const fonts = (trait.fonts || []).map(cleanFont).filter(f => f);
  const layoutHints = trait.layoutHints || [];
  
  // Generate scenario from sourceExampleId or description
  let scenario = 'Website design';
  if (trait.sourceExampleId) {
    scenario = trait.sourceExampleId
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  } else if (obj.id) {
    scenario = obj.id
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .slice(0, 3)
      .join(' ');
  }
  
  const images = generateImageUrls(obj.id, obj.label || obj.id);
  
  return {
    id: obj.id,
    name: obj.label || obj.id,
    tagline: obj.highlight || obj.description?.substring(0, 70) || '',
    scenario: scenario,
    description: obj.description || '',
    palette: colors.length > 0 ? colors : ['#FFFFFF', '#000000'],
    fonts: fonts.length > 0 ? fonts : ['Sans-serif'],
    layoutTags: layoutHints.slice(0, 6), // Limit to 6 tags
    thumbnail: images.thumbnail,
    preview: images.preview,
    elements: [
      {
        id: `${obj.id}-element`,
        label: trait.label || obj.label || obj.id,
        description: trait.description || obj.description || '',
        highlight: obj.highlight || '',
        trait: {
          id: trait.id || obj.id,
          type: 'element',
          label: trait.label || obj.label || obj.id,
          sourceExampleId: obj.id,
          description: trait.description || obj.description || '',
          colors: colors,
          fonts: fonts,
          layoutHints: layoutHints,
        },
      },
    ],
  };
}

// Parse old-format examples from the file
// Look for objects with 'label' field (old format) that aren't in elements
const oldFormatPattern = /\{\s*id:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*description:\s*"([^"]*)",\s*highlight:\s*"([^"]*)",\s*trait:\s*\{[^}]+\{[^}]+\}[^}]+\}/gs;

// Better approach: extract JSON-like objects
function extractOldFormatExamples(content) {
  const examples = [];
  
  // Find all objects that have the old format pattern
  // Look for: { id: "...", label: "...", description: "...", highlight: "...", trait: { ... } }
  
  // Split by example boundaries
  const exampleBlocks = content.split(/\n\s*\{/).filter(block => 
    block.includes('id:') && block.includes('label:') && !block.includes('name:')
  );
  
  // For now, let's try a simpler approach: find lines that match the pattern
  const lines = content.split('\n');
  let currentExample = null;
  let braceDepth = 0;
  let inExample = false;
  let exampleStartLine = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check if this looks like the start of an old-format example
    if (trimmed.match(/^\{\s*$/)) {
      // Check if next few lines match old format
      if (i + 1 < lines.length && lines[i + 1].includes('id:') && 
          i + 2 < lines.length && lines[i + 2].includes('label:')) {
        // This might be an old format example - skip for now, we'll use a different approach
      }
    }
  }
  
  return examples;
}

// Simpler approach: manually extract the examples between the converted ones and the comment end
function extractExamplesToConvert() {
  // Find where ADDITIONAL_EXAMPLES array ends (after the last converted example)
  const additionalStart = content.indexOf('const ADDITIONAL_EXAMPLES: Example[] = [');
  if (additionalStart === -1) return [];
  
  // Find where the old format examples start (after the last properly closed example)
  // Look for the pattern: }, followed by blank lines, then { with id and label (old format)
  const afterAdditional = content.substring(additionalStart);
  const oldFormatStart = afterAdditional.search(/\}\s*\n\s*\n\s*\{\s*\n\s*id:\s*"[^"]+",\s*\n\s*label:/);
  
  if (oldFormatStart === -1) {
    console.log('No old-format examples found after ADDITIONAL_EXAMPLES');
    return [];
  }
  
  // Extract from that point until the closing comment */
  const oldFormatSection = afterAdditional.substring(oldFormatStart);
  const commentEnd = oldFormatSection.indexOf('*/');
  if (commentEnd === -1) {
    console.log('No closing comment found');
    return [];
  }
  
  const examplesText = oldFormatSection.substring(0, commentEnd);
  
  // Now parse the examples - this is tricky because we need to parse JavaScript objects
  // For now, let's use a regex-based approach to extract basic info
  const exampleMatches = [];
  const exampleRegex = /\{\s*id:\s*"([^"]+)",\s*\n\s*label:\s*"([^"]+)",\s*\n\s*description:\s*"([^"]*(?:"[^"]*")*[^"]*)"?,\s*\n\s*highlight:\s*"([^"]+)",\s*\n\s*trait:\s*\{[\s\S]*?colors:\s*(\[[\s\S]*?\]),\s*\n\s*fonts:\s*(\[[\s\S]*?\]),\s*\n\s*layoutHints:\s*(\[[\s\S]*?\])/g;
  
  let match;
  while ((match = exampleRegex.exec(examplesText)) !== null) {
    try {
      // Parse the extracted JSON-like arrays
      const colorsStr = match[5].replace(/'/g, '"');
      const fontsStr = match[6].replace(/'/g, '"');
      const layoutHintsStr = match[7].replace(/'/g, '"');
      
      const colors = JSON.parse(colorsStr);
      const fonts = JSON.parse(fontsStr);
      const layoutHints = JSON.parse(layoutHintsStr);
      
      exampleMatches.push({
        id: match[1],
        label: match[2],
        description: match[3],
        highlight: match[4],
        trait: {
          colors: colors,
          fonts: fonts,
          layoutHints: layoutHints,
          label: match[2],
          description: match[3],
        },
      });
    } catch (e) {
      console.error(`Error parsing example ${match[1]}:`, e.message);
    }
  }
  
  return exampleMatches;
}

// Main conversion function
function convertExamples() {
  console.log('Extracting old-format examples...');
  const oldExamples = extractExamplesToConvert();
  
  if (oldExamples.length === 0) {
    console.log('No old-format examples found. Looking for different patterns...');
    // Try alternative extraction
    return;
  }
  
  console.log(`Found ${oldExamples.length} examples to convert\n`);
  
  // Convert each example
  const converted = oldExamples.map((example, index) => {
    console.log(`Converting ${index + 1}/${oldExamples.length}: ${example.id}`);
    return convertExample(example);
  });
  
  // Generate the TypeScript code
  const indent = '  ';
  let output = '';
  
  converted.forEach((example, index) => {
    output += `${indent}{\n`;
    output += `${indent}  id: "${example.id}",\n`;
    output += `${indent}  name: "${example.name.replace(/"/g, '\\"')}",\n`;
    output += `${indent}  tagline: "${example.tagline.replace(/"/g, '\\"')}",\n`;
    output += `${indent}  scenario: "${example.scenario.replace(/"/g, '\\"')}",\n`;
    output += `${indent}  description:\n${indent}    "${example.description.replace(/"/g, '\\"')}",\n`;
    output += `${indent}  palette: ${JSON.stringify(example.palette)},\n`;
    output += `${indent}  fonts: ${JSON.stringify(example.fonts)},\n`;
    output += `${indent}  layoutTags: ${JSON.stringify(example.layoutTags)},\n`;
    output += `${indent}  thumbnail:\n${indent}    "${example.thumbnail}",\n`;
    output += `${indent}  preview:\n${indent}    "${example.preview}",\n`;
    output += `${indent}  elements: [\n`;
    output += `${indent}    {\n`;
    output += `${indent}      id: "${example.elements[0].id}",\n`;
    output += `${indent}      label: "${example.elements[0].label.replace(/"/g, '\\"')}",\n`;
    output += `${indent}      description:\n${indent}        "${example.elements[0].description.replace(/"/g, '\\"')}",\n`;
    output += `${indent}      highlight: "${example.elements[0].highlight.replace(/"/g, '\\"')}",\n`;
    output += `${indent}      trait: {\n`;
    output += `${indent}        id: "${example.elements[0].trait.id}",\n`;
    output += `${indent}        type: "element",\n`;
    output += `${indent}        label: "${example.elements[0].trait.label.replace(/"/g, '\\"')}",\n`;
    output += `${indent}        sourceExampleId: "${example.elements[0].trait.sourceExampleId}",\n`;
    output += `${indent}        description:\n${indent}          "${example.elements[0].trait.description.replace(/"/g, '\\"')}",\n`;
    output += `${indent}        colors: ${JSON.stringify(example.elements[0].trait.colors)},\n`;
    output += `${indent}        fonts: ${JSON.stringify(example.elements[0].trait.fonts)},\n`;
    output += `${indent}        layoutHints: ${JSON.stringify(example.elements[0].trait.layoutHints)},\n`;
    output += `${indent}      },\n`;
    output += `${indent}    },\n`;
    output += `${indent}  ],\n`;
    output += `${indent}}${index < converted.length - 1 ? ',' : ''}\n`;
    if (index < converted.length - 1) output += '\n';
  });
  
  console.log('\n=== CONVERTED EXAMPLES ===\n');
  console.log(output);
  console.log('\n=== END OF CONVERTED EXAMPLES ===\n');
  
  // Write to a file
  const outputPath = path.join(__dirname, 'converted-examples.txt');
  fs.writeFileSync(outputPath, output, 'utf8');
  console.log(`\nConverted examples written to: ${outputPath}`);
  console.log('\nYou can copy this output and paste it into the ADDITIONAL_EXAMPLES array');
  console.log('in src/catalog/examples.ts, replacing the old-format examples.');
}

// Run the conversion
try {
  convertExamples();
} catch (error) {
  console.error('Error during conversion:', error);
  process.exit(1);
}

