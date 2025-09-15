var prompt = require("prompt-sync")();

function firstQuestion() {
  let age = parseInt(prompt("Enter your age to get discount for the movie:"));

  if (isNaN(age)) {
    console.log("Please enter a valid age to get the discount");
  } else if (age < 18) {
    console.log("You get a 20% discount");
  } else if (age <= 65) {
    console.log("Normal ticket price applies");
  } else {
    console.log("You get a 30% senior discount ");
  }
}

// firstQuestion();

function secondQuestion() {
  let length = parseInt(
    prompt("Enter the length to calculate the area of ractangle: ")
  );
  let width = parseInt(
    prompt("Enter the width to calculate the area of ractangle: ")
  );

  let area = length * width;
  console.log(`The area of ractangle is ${area}`);
}

// secondQuestion()

//Third Quesition
/* function product(name, price, inStock) {
  String((this.name = name)),
    Number((this.price = price)),
    Boolean((this.inStock = inStock));
}

let product1 = new product("Samsung", 10000, true);
let product2 = new product("IPhone", 12000, true);
let product3 = new product("Lava", 1200, false);

console.table(product1);
console.table(product2);
console.table(product3); */

// Forth Question with twist

/* let guestList = ["Sam", "Jinx", "Ehco", "Vi", "Katlean"];

let name = prompt("Enter your name: ");

while (!guestList.includes(name)) {
  console.log(`Sorry, ${name} You're not in the guest list`);
  name = prompt("Re-enter your name: ");
}

console.log(`Welcome to the party ${name}`); */

// Fivth Question

weather = {
  date: new Date(),
  temprature: 45,
  condition: "Sunny",
  humidity: 20,
};

console.log(weather);
