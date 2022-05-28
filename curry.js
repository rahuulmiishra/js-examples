function sum(num1) {
  return (num2) => {
    if (!num2) {
      return num1;
    }
    return sum(num1 + num2);
  };
}

console.log(sum(2)(3)(2)(5)());
