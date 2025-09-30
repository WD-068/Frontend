// ==========================================
// SECTION 1: VARIABLES
// ==========================================
/* 
  In JavaScript, we use variables to store data that we can use later.
  There are three ways to declare variables:
  - let: for values that can change
  - const: for values that won't change (constants)
  - var: older way (try to avoid using this)
*/

// 1. Declare Variables with let and const:
let age = 25; // Number type
const birthYear = 1999; // Number type (constant)
let name = "John Doe"; // String type
const isStudent = true; // Boolean type (true/false)

// 2. Reassign Values:
// We can change 'let' variables, but not 'const' variables
age = 26; // This works fine
name = "Jane Doe"; // This works fine
// birthYear = 2000       // This will cause an error - can't change a const!
// isStudent = false;     // This will cause an error - can't change a const!

// 3. Print Variables to see their values
console.log(age); // Shows 26
console.log(birthYear); // Shows 1999
console.log(name); // Shows "Jane Doe"
console.log(isStudent); // Shows true

// 4. Create and Modify Variables
let favoriteColor = "blue";
console.log(favoriteColor); // Shows "blue"
favoriteColor = "green"; // We can change it because it's 'let'
console.log(favoriteColor); // Now shows "green"

// ==========================================
// SECTION 2: ARITHMETIC
// ==========================================
/* 
  JavaScript can perform mathematical operations like:
  +  (addition)
  -  (subtraction)
  *  (multiplication)
  /  (division)
  %  (modulus/remainder)
  
  Be careful with mixing numbers and strings!
*/

// 1. Addition with mixed types
let num = 5;
let strNum = "3";
let additionResult = num + strNum;
console.log("Addition Result:", additionResult); // Expected: "53" because string + number = string concatenation

// 2. Subtraction with mixed types
let subtractionResult = num - strNum;
console.log("Subtraction Result:", subtractionResult); // Expected: 2 because JavaScript converts string to number in subtraction

// 3. Multiplication with a string
let multiplicationResult = strNum * 2;
console.log("Multiplication Result:", multiplicationResult); // Expected: 6

// 4. Division by a string
let divisionResult = 10 / strNum;
console.log("Division Result:", divisionResult); // Expected: 3.333...

// 5. Modulus operation
let num2 = 10;
let modulusResult = num2 % num;
console.log("Modulus Result with Numbers:", modulusResult); // Expected: 0
modulusResult = num2 % strNum;
console.log("Modulus Result with String:", modulusResult); // Expected: 1 because '3' is converted to 3

// 6. Numeric operations
let a = 8;
let b = 3;
let c = 10;

// Addition of numbers
let sum = a + b + c;
console.log("Addition of Numbers:", sum); // Expected: 21

// Subtraction of numbers
let difference = a - b - c;
console.log("Subtraction of Numbers:", difference); // Expected: -5

// Multiplication of numbers
let product = a * b * c;
console.log("Multiplication of Numbers:", product); // Expected: 240

// Division of numbers
let quotient = c / a;
console.log("Division of Numbers:", quotient); // Expected: 1.25

// Modulus of numbers
let remainder = c % a;
console.log("Modulus of Numbers:", remainder); // Expected: 2

// ==========================================
// SECTION 3: COMPARISONS
// ==========================================
/* 
  We can compare values using:
  ==  (loose equality - compares value only)
  === (strict equality - compares value AND type)
  >   (greater than)
  <   (less than)
  >=  (greater than or equal)
  <=  (less than or equal)
*/

// Strict vs Simple Equality and Inequality
console.log('5 == "5": ', 5 == "5"); // Simple Equality, should be true
console.log('5 === "5": ', 5 === "5"); // Strict Equality, should be false

console.log('10 != "10": ', 10 != "10"); // Simple Inequality, should be false
console.log('10 !== "10": ', 10 !== "10"); // Strict Inequality, should be true

// Greater than, Less than, Greater than or Equal to, Less than or Equal to
console.log("5 > 3: ", 5 > 3); // True
console.log('"5" > "3": ', "5" > "3"); // True, string comparison

console.log("10 < 20: ", 10 < 20); // True
console.log('"10" < "20": ', "10" < "20"); // True, string comparison

console.log("5 >= 5: ", 5 >= 5); // True
console.log('"5" >= 5: ', "5" >= 5); // True, type coercion from string to number

console.log("10 <= 20: ", 10 <= 20); // True
console.log('"10" <= "20": ', "10" <= "20"); // True, string comparison

// Additional comparisons to illustrate different outcomes
console.log('true == "true": ', true == "true"); // False, different types and values
console.log("false === false: ", false === false); // True, same type and value
console.log("0 == false: ", 0 == false); // True, type coercion makes them equivalent
console.log("0 === false: ", 0 === false); // False, no type coercion and different types

// ==========================================
// SECTION 4: CONDITIONALS
// ==========================================
/* 
  Conditionals let us make decisions in our code.
  We can execute different code based on different conditions.
  - if/else statements for simple conditions
  - switch statements for multiple specific cases
*/

// Current temperature in degrees Celsius
const temperature = 20; // You can change this value for different outcomes

// Task 1: Simple if/else
if (temperature < 15) {
  console.log("It's cold, wear a coat.");
} else {
  console.log("It's not too cold, no coat needed.");
}

// Task 2: Using if/else
if (temperature < 15) {
  console.log("It's cold, wear a coat.");
} else if (temperature <= 25) {
  console.log("It's mild, wear a sweater.");
} else {
  console.log("It's warm, wear a t-shirt.");
}

// Task 3: Using switch
switch (true) {
  case temperature === 10:
    console.log("It's very cold, definitely wear a coat.");
    break;
  case temperature === 20:
    console.log("Nice and comfortable, a sweater will do.");
    break;
  case temperature === 30:
    console.log("Quite warm, a t-shirt is perfect.");
    break;
  default:
    console.log("Enter a specific temperature like 10, 20, or 30 degrees.");
}

// ==========================================
// SECTION 5: LOOPS
// ==========================================
/* 
  Loops help us do the same thing multiple times.
  Different types of loops:
  - for loop (when you know how many times to loop)
  - while loop (when you don't know how many times)
  - do-while loop (runs at least once)
*/

const animals = ["lion", "tiger", "bear", "giraffe", "zebra", "monkey"];

// For Loop - Most common type of loop
let totalAnimals = 0;
for (let i = 0; i < animals.length; i++) {
  // i++ means increase i by 1 each time
  totalAnimals++;
}
console.log(`There are ${totalAnimals} animals in the zoo.`);

// While Loop - Keeps going while condition is true
let animals5LettersOrMore = 0;
let i = 0;
while (i < animals.length) {
  if (animals[i].length >= 5) {
    // Counts animals with 5 or more letters
    animals5LettersOrMore++;
  }
  i++;
}
console.log(
  `There are ${animals5LettersOrMore} animals with 5 or more letters`
);

// Do-While Loop - Always runs at least once
let count = 0;
do {
  if (animals[count].startsWith("m")) {
    // Looks for animal starting with 'm'
    break; // 'break' exits the loop early
  }
  count++;
} while (count < animals.length);
console.log(`Count until m: ${count}`);

// ==========================================
// SECTION 6: FUNCTIONS
// ==========================================
/* 
  Functions are reusable blocks of code.
  We can write code once and use it many times.
  There are several ways to create functions:
  1. Function Declaration
  2. Function Expression
  3. Arrow Function
*/

// Part 1: Function Declarations

// 1. Declare a function with no parameters that outputs something to the console
function greet() {
  console.log("Hello, World!");
}

// Call the function
greet(); // Output: Hello, World!

// 2. Declare a function with one parameter that returns something
function square(number) {
  return number * number;
  // return number ** 2;
  // return Math.pow(number, 2);
}

// Call the function and store the result
let resultSquare = square(5);

// Output the result to the console
console.log(resultSquare); // Output: 25

// 3. Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly
function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }
  return dayName;
}

// Call the function and store the result
let resultDayName = getDayName(3);

// Output the result to the console
console.log(resultDayName); // Output: Wednesday

// Part 2: Function Expressions

// 1. Function expression with no parameters
const greetExpression = function () {
  console.log("Hello again, World!");
};

// Call the function
greetExpression(); // Output: Hello again, World!

// 2. Function expression with one parameter
const squareExpression = function (number) {
  return number * number;
};

// Call the function and store the result
let resultSquareExpression = squareExpression(5);

// Output the result to the console
console.log(resultSquareExpression); // Output: 25

// 3. Function expression with one parameter and a switch statement
const getDayNameExpression = function (dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }
  return dayName;
};

// Call the function and store the result
let resultDayNameExpression = getDayNameExpression(3);

// Output the result to the console
console.log(resultDayNameExpression); // Output: Wednesday

/*
Discussion:
- Function declarations are hoisted to the top of their scope, meaning they can be called before they are declared in the code.
- Function expressions are not hoisted, so they cannot be called before they are defined.
*/

// ==========================================
// SECTION 7: VARIABLES AND SCOPE
// ==========================================
/* 
  Scope determines where variables are accessible:
  - Global scope: accessible everywhere
  - Function scope: only inside the function
  - Block scope: only inside the block (for let/const)
  
  'var' has function scope
  'let' and 'const' have block scope
*/

var myVar = "Global with var";
function test() {
  // var, let and const behave very similar whtn it comes to function scope
  var myVar = "Function scoped with var";
  console.log(myVar);
}

test();

console.log(myVar);

if (true) {
  let myLetVar = "something";
  const myConstVar = "something else";
  var myVar = "re-declared";
  // let myLetVar = 'something';
  // const myConstVar = 'something else';
  console.log(myLetVar);
  console.log(myConstVar);
  console.log(myVar);
}
// let and const are scoped to the blocks they are declared in
// console.log(myLetVar);
// console.log(myConstVar);
console.log(myVar);

const myArray = [1, 2, 3];
console.log(myArray);
myArray.push(4);
console.log(myArray);
