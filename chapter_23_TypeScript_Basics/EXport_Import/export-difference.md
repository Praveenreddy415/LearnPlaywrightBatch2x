# Named Export vs Default Export

## Named Export
- Allows exporting multiple values from a module.
- Imports must use the exact exported names.
- Uses curly braces when importing.
- Example:
  - `export function foo() {}`
  - `import { foo } from './module.js';`

## Default Export
- Allows exporting a single primary value from a module.
- Importers can choose any name for the imported value.
- No curly braces are used when importing.
- Example:
  - `export default function foo() {}`
  - `import bar from './module.js';`

## Key Differences
| Feature | Named Export | Default Export |
|---|---|---|
| Number of exports per module | Multiple | One default (plus optional named exports) |
| Import syntax | `import { name } from './file.js';` | `import name from './file.js';` |
| Import name freedom | Must match exported name | Can use any name |
| Best for | Exporting several utilities, constants, or components | Exporting one main value or component |
| Module usage | `export const x = 1; export function fn() {}` | `export default function main() {}` |

## Example
```js
// helpers.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// main.js
import multiply, { add, subtract } from './helpers.js';
```
