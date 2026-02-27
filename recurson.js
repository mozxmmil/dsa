// find the fibonachi number at the given position

function fibonachi(n) {
  if (n <= 1) return n;
  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(10));

// factorial of a number

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
