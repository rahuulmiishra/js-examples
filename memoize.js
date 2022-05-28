const fn = (n) => {
  let s = 0;
  for (let i = 0; i < n; i++) {
    s += n;
  }
  return s;
};

const memoize = function (cb) {
  let cache = {};
  console.log(arguments);
  return function () {};
};

const res = memoize(fn(100));

console.log(fn(199));
