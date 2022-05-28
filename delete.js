const nam1e = "Lydia";
age = 21;

console.log(delete nam1e); // false
console.log(delete age); // true

console.log(typeof age);

// The delete operator returns a boolean value: true on a successful deletion,
// else it'll return false. However, variables declared with the var,
// const or let keyword cannot be deleted using the delete operator.

// The name variable was declared with a const keyword,
// so its deletion is not successful: false is returned.
//  When we set age equal to 21, we actually added a property called age to the global object.
//   You can successfully delete properties from objects this way, also the global object,
//   so delete age returns true.
