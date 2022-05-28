function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make); // Maserati

// When you return a property, the value of the property is equal to the returned value,
// not the value set in the constructor function.
//  We return the string "Maserati", so myCar.make is equal to "Maserati".
