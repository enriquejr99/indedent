# Indedent

Multi-line template literals make source code ugly. Packages such as [dedent](https://www.npmjs.com/package/dedent) solve this problem however, interpolated multi-line strings in nested lines are not adjusted to match the indentation of the interpolating line.

This package indents interpolated multi-line strings, in addition to dedenting and trimming the template literal.

## Features

Side-by-side comparison between the `indedent` and `dedent` packages.

|            | Indedent   | Dedent     |
| ---------- | :--------: | :--------: |
| ECMAScript | ES6        | ES6        |
| Trims      | ✓          | ✓          |
| Dedents    | ✓          | ✓          |
| Indents    | ✓          | No         |
| Spaces     | ✓          | ✓          |
| Tabs       | ✓          | No         |
| Source     | TypeScript | JavaScript |
| Types      | <img src="https://img.shields.io/npm/types/indedent"> | <img src="https://img.shields.io/npm/types/dedent"> |
| Size       | <img src="https://img.shields.io/bundlephobia/minzip/indedent"> | <img src="https://img.shields.io/bundlephobia/minzip/dedent"> |

## Install

Requires [Node.js](https://nodejs.org/en/) version 6.0.0 or higher. Suitable for the browser.

Use `npm` to install the latest version.

```
npm i indedent
```

## Usage

```js
import indedent from 'indedent'
// or
const { indedent } = require('indedent')

console.log(dedent`this is some string
                   with multiple lines
                   below the first one`)
```

```
this is some string
with multiple lines
below the first one
```

## Build

This package is writen in [TypeScript](https://www.typescriptlang.org/). For better interoperability, we compile to both ESM and CommonJS. Conditional [exports](https://nodejs.org/api/packages.html#conditional-exports) take care of the rest.

Use the compile script to build the package.

```
npm run compile
```

Remember to test it afterwards.

```
npm run test
```
