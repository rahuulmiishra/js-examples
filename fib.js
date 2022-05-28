function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(8)); // 21
console.log(fibonacci(18)); // 2584
console.log(fibonacci(28)); // 317811

function fib(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fib(n - 1);
  console.log({ arr });
  return [...arr, arr[n - 1] + arr[n - 2]];
}

console.log(fib(12));
