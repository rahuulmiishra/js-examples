const info = {
  [Symbol("a")]: "b",
};

console.log(info); // {Symbol(a): "b"}
console.log(Object.keys(info)); // []

// A Symbol is not enumerable. The Object.keys method returns all enumerable key
// properties on an object. The Symbol won't be visible, and an empty array is returned.
// When logging the entire object, all properties will be visible, even non-enumerable ones.

// . You can still access symbols using the Object.getOwnPropertySymbols() method).

console.log(Object.getOwnPropertySymbols(info));
