function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input: Arguments must be numbers';
  }
  return a + b;
}

console.log(foo(5, '5')); // Output: 10
console.log(foo('abc', 5)); // Output: Invalid input: Arguments must be numbers