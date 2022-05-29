let name = "Lydia";

function getName() {
  console.log(name); // ReferenceError
  let name = "Sarah";
}

getName();

// Each function has its own execution context (or scope). The getName function first
// looks within its own context (scope) to see if it contains the variable name we're trying to access.
//  In this case, the getName function contains its own name variable: we declare the variable name
//  with the let keyword,
// and with the value of 'Sarah'.

// Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized.
// They are not accessible before the line we declare (initialize) them.
// This is called the "temporal dead zone". When we try to access the variables before they are declared,
//  JavaScript throws a ReferenceError.
