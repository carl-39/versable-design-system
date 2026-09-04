import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = JSON.parse(await readFile(join(root, 'src/tokens.json'), 'utf8'));
const tokens = new Map();
function walk(value, path = []) {
  if (value && typeof value === 'object' && '$value' in value) {
    if (!value.$type) throw new Error(`Missing $type: ${path.join('.')}`);
    tokens.set(path.join('.'), value);
  } else if (value && typeof value === 'object') Object.entries(value).filter(([key]) => !key.startsWith('$')).forEach(([key, child]) => walk(child, [...path, key]));
}
walk(source);
for (const [name, token] of tokens) {
  const references = JSON.stringify(token.$value).match(/\{([^}]+)\}/g) ?? [];
  for (const reference of references) if (!tokens.has(reference.slice(1, -1))) throw new Error(`${name} references missing token ${reference}`);
}
if (tokens.size < 40) throw new Error('Token source is unexpectedly incomplete.');
console.log(`Validated ${tokens.size} typed tokens and aliases.`);
