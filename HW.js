//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

// prints out the values of the favorite food
function parseFavoriteFood() {
  for (let key in person3) {
    console.log(person3[key]);
  }
}
parseFavoriteFood();
console.log(
  "============================================================================================="
);
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;

  // Use an arrow to create the printInfo method
  this.printInfo = () => {
    console.log(`Person's name is ${this.name} and age is ${this.age}.`);
  };

  // Create another arrow function for the addAge method that takes a single parameter
  this.addAge = () => {
    return `${(this.age += 1)}`;
  };
}
console.log(
  "============================================================================================"
);
// Adding to the age
let person1 = new Person("Adam", 37); // create instance of Person named 'Adam' with name an age of 37
let person2 = new Person("Adrianna", 28); // create instance of Person named 'Adrianna' with an age of 28
person1.printInfo(); // print the person info
person2.printInfo(); // print the person info
person1.addAge(); // call the addAge method to increment the age
person2.addAge(); // call the addAge method to increment the age
// text to see if person ages are increamented
console.log(`Person1's age: ${person1.age} \nPerson2's age: ${person2.age}`);
console.log(
  "============================================================================================="
);
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let char = "Hello JS";

const checkNum = new Promise(function (resolve, reject) {
  if (char.length < 10) {
    resolve("Small Number");
  } else {
    reject("Big word");
  }
});

console.log(checkNum.then(function (char) {}));
