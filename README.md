# Learn Playwright Batch 2x

A beginner-friendly JavaScript learning repository organized into chapters. The focus is on core JavaScript fundamentals, language concepts, operators, data types, statements, and interview practice examples.

## What’s Included

- Chapter 01: JavaScript basics and setup verification
- Chapter 02: Core JavaScript concepts and notes
- Chapter 03: Identifiers, naming conventions, comments, and VS Code productivity
- **Chapter 03: Locators & Commands** — Playwright locators, XPath tutorials (240_Xpath.spec.ts), and comprehensive XPath cheat sheet
- **Chapter 04: Session Storage** — Session and localStorage management in Playwright
- **Chapter 05: Allure Reporting** — Test reporting with Allure framework
- **Chapter 06: Multiple Elements** — Handling multiple elements and batch operations
- **Chapter 07: Web Tables** — Web table automation with dynamic XPath and pagination
- **Chapter 08: Web Select & Frames/Iframe** — Dropdown selection and HTML iframe handling
- **Chapter 09: Frame & Iframe** — Advanced frame and iframe navigation
- Chapter 10: Variables, scope, hoisting, and functions
- Chapter 11: Arithmetic operators
- Chapter 12: Literals including `null`, `undefined`, strings, and template literals
- Chapter 13: Operator behavior, comparison, logical operators, ternary expressions, nullish coalescing, and type checks
- Chapter 14: Interview-style operator practice problems
- Chapter 15: Primitive and non-primitive data types
- Chapter 16: Conditional statements and control flow
- Chapter 20: Array methods, iteration, sorting, filtering, and reduction
- Chapter 22: String methods, search, replace, concatenation, slicing, and joining
- Chapter 23: Object concepts, config structures, destructuring, and reference behavior
- Chapter 24: Async/await and asynchronous JavaScript examples
- Chapter 25: Playwright basics and browser automation examples
- Chapter 26: TypeScript basics, module export/import examples, and default vs named exports
- Chapter 27: OOP concepts, classes, and class object examples
- Chapter 28: Callback functions explained in simple, beginner-friendly terms

## Prerequisites

- Node.js installed
- VS Code recommended for editing and running examples

## Running Examples

1. Open a terminal in the repository root.
2. Run any JavaScript lesson file with Node:

```bash
node chapter_01_Basics/01_basics.js
```

Replace the path with the lesson file you want to execute.

### Running Playwright tests

1. Install dependencies if needed:

```bash
npm install
```

2. Run Playwright tests from the repository root:

```bash
npx playwright test
```

3. Run a specific test file:

```bash
npx playwright test tests/ttcart.spec.ts
```

## Learning Path

1. Start with Chapter 01 and work through the basics sequentially.
2. Read the Chapter 02 notes to reinforce JavaScript concepts.
3. Study Chapter 03 for identifiers, comments, and editor shortcuts.
4. Work through Chapter 04 to understand variable declarations, scope, hoisting, and functions.
5. Continue with Chapter 05 and Chapter 06 to learn operators and literals.
6. Use Chapter 07 for a deeper review of operator behavior and type-related logic.
7. Practice interview-style questions in Chapter 08.
8. Review Chapter 09 for data type fundamentals.
9. Finish with Chapter 10 to master conditional statements and control flow.

## Structure Overview

- `chapter_01_Basics/` — introductory JavaScript examples
- `chapter_02_javascript_concepts/` — deeper JavaScript concept notes
- `chapter_03_identifier_literal/` — naming rules, comments, and VS Code shortcuts
- `tests/01_Basics/` — Playwright basic test setup and annotations
- `tests/02_First_tests/` — First Playwright tests with BCP (Browser, Context, Page) setup
- `tests/03_Locators_Commands/` — **Playwright locator strategies and XPath tutorials** with practical examples and comprehensive cheat sheet
- `tests/04_Session_Storage/` — Session and localStorage management in tests
- `tests/05_Allure_Reporting/` — Test reporting and Allure integration examples
- `tests/06_Multiple_Element_/` — Handling multiple elements and batch operations
- `tests/07_WebTables/` — Web table automation with dynamic XPath and pagination
- `tests/08_Web_Select_Frames_Iframe/` — Dropdown selection and HTML iframe handling
- `tests/09_Frame_Iframe/` — Advanced frame and iframe navigation
- `chapter_04_Javscript_fundamentals/` — variables, functions, hoisting, and scope
- `chapter_05_Operators/` — arithmetic operator examples
- `chapter_06_Literal/` — literal values and string formatting
- `chapter_07_Operators/` — operator types, comparisons, and expression logic
- `chapter_08_Interview_questions_Operators/` — interview practice problems for operators
- `chapter_09_Data_Types/` — primitive vs non-primitive data types
- `chapter_10_Statements/` — conditional statements and practice challenges
- `chapter_14_Arrays/` — array examples, iteration, sorting, transformation, and reduction
- `chapter_16_Strings/` — string method examples, search, replace, concatenation, slicing, and joining
- `Chapter_17_Objects/` — object examples, config structures, destructuring, and reference type behavior (includes 5th-grade examples)
- `chapter_18_Asyc_Await/` — async/await examples and asynchronous JavaScript concepts
- `chapter_19_Playwright_Basics/` — Playwright test examples and automation scripts
- `chapter_20_TypeScript_Basics/` — TypeScript basics, modules, and import/export examples
- `chapter_21_OOPS_Concepts/` — OOP concepts, class and object examples (Class_Objects folder)
- `Chapter_22_CallBack/` — Callback functions explained in simple, beginner-friendly terms with real-world examples

## XPath Tutorial & Resources

This repository includes comprehensive XPath learning materials:

### Files
- **240_Xpath.spec.ts** — 20 practical Playwright test examples covering:
  - Basic XPath syntax and tag selection
  - Attribute-based selection
  - Text content matching
  - Position-based selection
  - Parent-child relationships
  - Complex conditions and operators
  - Real-world form automation examples
  - Dynamic element handling

- **XPATH_CHEAT_SHEET.md** — Complete reference guide with:
  - 15+ organized tables with XPath patterns
  - 100+ practical examples
  - Selection methods (tag, attribute, text)
  - Predicates and conditions
  - XPath functions (string, numeric, boolean)
  - Navigation axes with examples
  - Real-world scenarios
  - Best practices and common mistakes
  - Playwright integration code samples

## Notes

- This repository is intended for practice and learning.
- File names are kept as-is to preserve chapter progression.
- The repo currently contains JavaScript fundamentals rather than Playwright-specific test scripts.

## Recent updates

- Added OOP and Promise examples, reorganized chapters under `chapter_21_OOPS_Concepts`.
- Added TypeScript notes and examples under `chapter_23_TypeScript_Basics` (JS vs TS, `void` vs `never`).
- Added `chapter_24_Interface` with interface examples and `chapter_21_OOPS_Concepts/05_Polymorphism`.

