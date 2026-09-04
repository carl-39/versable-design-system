import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = JSON.parse(await readFile(join(root, 'src/tokens.json'), 'utf8'));
const leaves = [];
function walk(value, path = []) {
  if (value && typeof value === 'object' && '$value' in value) leaves.push({ path, ...value });
  else if (value && typeof value === 'object') Object.entries(value).filter(([key]) => !key.startsWith('$')).forEach(([key, child]) => walk(child, [...path, key]));
}
walk(source);
const cssName = (path) => `--versable-${path.join('-')}`;
const cssValue = (value) => Array.isArray(value) ? (typeof value[0] === 'number' ? `cubic-bezier(${value.join(', ')})` : value.join(', ')) : String(value).replace(/\{([^}]+)\}/g, (_, ref) => `var(${cssName(ref.split('.'))})`);
await mkdir(join(root, 'dist'), { recursive: true });
await writeFile(join(root, 'dist/tokens.json'), JSON.stringify(source, null, 2) + '\n');
await writeFile(join(root, 'dist/metadata.json'), JSON.stringify({ format: 'DTCG-compatible', source: 'src/tokens.json', generated: new Date().toISOString(), tokenCount: leaves.length }, null, 2) + '\n');
await writeFile(join(root, 'dist/tokens.css'), `/** Generated from src/tokens.json. Do not edit. */\n:root {\n${leaves.map((token) => `  ${cssName(token.path)}: ${cssValue(token.$value)};`).join('\n')}\n}\n\n[data-theme="dark"] {\n  --versable-color-background-primary: var(--versable-color-dark-background);\n  --versable-color-background-secondary: var(--versable-color-dark-surface);\n  --versable-color-surface-default: var(--versable-color-dark-surface);\n  --versable-color-text-primary: var(--versable-color-dark-text);\n  --versable-color-border-default: var(--versable-color-dark-border);\n}\n`);
console.log(`Generated ${leaves.length} tokens.`);
