# `void` vs `never` in TypeScript

Short, clear comparison and examples.

## Quick summary

- `void`: Use when a function does not return a useful value. Example: functions that only have side effects (logging, setting state). Value `undefined` (or `null` depending on config) is the only possible runtime value for `void`.
- `never`: Use when a function never returns at all — it either throws an error or loops forever. There is no possible value of type `never`.

## Table

| Aspect | `void` | `never` |
|---|---:|---:|
|Meaning|Function returns no meaningful value|Function never returns (throws or infinite loop)|
|Example result at runtime|`undefined` (or no value)|No value ever produced — code doesn't continue after call|
|Use case|Callbacks, event handlers, functions with side effects|Error functions, exhaustive checks, infinite loops|

## Examples

```ts
// void: function completes and returns nothing useful
function logMessage(msg: string): void {
  console.log(msg);
  // no return value (equivalent to returning `undefined`)
}

// allowed: assigning to void
const x: void = undefined;
```

```ts
// never: function never finishes normally
function fail(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {
    // loop forever
  }
}
```

## Practical uses

- `void` is common for callbacks and event handlers: you don't expect a returned value, only side effects.
- `never` is useful for marking code paths that should be impossible (e.g., the default branch of a `switch` after full type-checking). It helps the compiler know you've covered all cases.

```ts
// Example: exhaustive check using never
type Shape = { kind: 'circle'; radius: number } | { kind: 'square'; size: number };

function area(s: Shape): number {
  switch (s.kind) {
    case 'circle':
      return Math.PI * s.radius * s.radius;
    case 'square':
      return s.size * s.size;
    default: {
      const _exhaustiveCheck: never = s; // if a new shape is added, compiler error here
      return _exhaustiveCheck;
    }
  }
}
```

## One-line rule

- If a function may finish but has nothing to return, use `void`.
- If a function never finishes normally, use `never`.

