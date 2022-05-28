const fn = (n) => {
  let s = 0;
  for (let i = 0; i < n; i++) {
    s += i;
  }
  return s;
};

const memoize = function (cb) {
  let cache = {};

  return function () {
    const num = arguments[0];
    if (cache[num]) {
      return cache[num];
    } else {
      const s = cb(num);
      cache[num] = s;
      return s;
    }
  };
};

const res = memoize(fn);

console.time();
console.log(res(1000000));
console.timeEnd();

console.time();
console.log(res(1000000));
console.timeEnd();

console.time();
console.log(res(1000000));
console.timeEnd();
