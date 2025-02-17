# JavaScript Loose Typing Bug

This example demonstrates a common issue in JavaScript stemming from its loose typing system.  The `foo` function is intended to add two numbers but, due to type coercion, the result is string concatenation when one of the arguments is a string.

## Bug:
The primary bug is the unexpected string concatenation that occurs when one of the arguments is a string. This leads to incorrect results when numerical addition is expected.

## Solution:
The solution involves explicitly type-checking or converting the input values to ensure that the addition operation is performed numerically.

## How to Reproduce:
1. Clone this repository.
2. Run `node bug.js` to observe the unexpected behavior.
3. Run `node bugSolution.js` to see the corrected version.
