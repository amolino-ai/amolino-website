import fs from 'fs';
import path from 'path';

const OUTPUT_FILE = 'combined-content.md';

function getAllYamlFiles(dir: string): string[] {
  const files: string[] = [];

  function traverse(currentDir: string) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.yaml')) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

function createMarkdownHeader(level: number, text: string): string {
  return '#'.repeat(level) + ' ' + text + '\n\n';
}

function main() {
  const cwd = process.cwd();
  const benefitsDir = path.join(cwd, 'content', 'pages', 'benefits');
  const featuresDir = path.join(cwd, 'content', 'pages', 'features');

  let output = createMarkdownHeader(1, 'Combined Benefits and Features Content');
  output += '> This file contains all benefit and feature YAML files combined\n\n';
  output += '---\n\n';

  // Process Benefits
  output += createMarkdownHeader(2, 'Benefits');

  const benefitFiles = fs.readdirSync(benefitsDir)
    .filter(file => file.endsWith('.yaml'))
    .sort();

  for (const file of benefitFiles) {
    const filePath = path.join(benefitsDir, file);
    const fileName = file.replace('.yaml', '');
    const content = fs.readFileSync(filePath, 'utf-8');

    output += createMarkdownHeader(3, `Benefit: ${fileName}`);
    output += `**File:** \`${path.relative(cwd, filePath)}\`\n\n`;
    output += '```yaml\n';
    output += content;
    output += '\n```\n\n';
    output += '---\n\n';
  }

  // Process Features
  output += createMarkdownHeader(2, 'Features by Benefit');

  const benefitDirs = fs.readdirSync(featuresDir)
    .filter(item => {
      const fullPath = path.join(featuresDir, item);
      return fs.statSync(fullPath).isDirectory();
    })
    .sort();

  for (const benefitDir of benefitDirs) {
    const benefitPath = path.join(featuresDir, benefitDir);
    output += createMarkdownHeader(3, `Benefit Category: ${benefitDir}`);

    const featureFiles = fs.readdirSync(benefitPath)
      .filter(file => file.endsWith('.yaml'))
      .sort();

    for (const file of featureFiles) {
      const filePath = path.join(benefitPath, file);
      const fileName = file.replace('.yaml', '');
      const content = fs.readFileSync(filePath, 'utf-8');

      output += createMarkdownHeader(4, `Feature: ${fileName}`);
      output += `**File:** \`${path.relative(cwd, filePath)}\`\n\n`;
      output += '```yaml\n';
      output += content;
      output += '\n```\n\n';
    }

    output += '---\n\n';
  }

  // Write to file
  const outputPath = path.join(cwd, OUTPUT_FILE);
  fs.writeFileSync(outputPath, output, 'utf-8');

  console.log('✅ Combined YAML files successfully!');
  console.log(`📄 Output written to: ${OUTPUT_FILE}`);
  console.log(`📊 Total size: ${(output.length / 1024).toFixed(2)} KB`);
  console.log('\n--- Preview (first 2000 characters) ---\n');
  console.log(output.substring(0, 2000));
  console.log('\n... (truncated, see full output in combined-content.md)');
}

main();
