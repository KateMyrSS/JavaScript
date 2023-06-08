//task1
console.log("task1")
let x = 1;
let y = 2;

let res1 = x.toString() + y.toString() // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y)// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x != y// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseFloat(res2);// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

//task2
console.log("task2")
let number = +prompt ("Enter your number")
console.log(number);
if (number % 2 === 0 && number > 0) {
    console.log("Number is even and positive");} 
else {
    console.log("Number isn't even and positive");
}

if (number % 7 === 0) {
    console.log("Number is a multiple of 7");} 
    else {
   console.log("Number isn't a multiple of 7");
}


//task3
console.log("task 3")
const arr1 = [];
let userValue = prompt ("Enter any value");
arr1[0] = 12;
arr1[1] = "Any text";
arr1[2] = true;
arr1[3] = null;

console.log(`Number of elements in the array: ${arr1.length}`);
//document.write("Number of elements in the array:" + arr1.lenght)

console.log(arr1);

arr1[4] = userValue;

console.log("Fifth element of the array:", arr1[4]);

delete arr1[0];
console.log(`Array after deleting the first element: ${arr1[0]}`);
//document.write(`Array after deleting the first element: ${arr1[0]}`)

console.log(arr1);


//task4
console.log("task4")

let cities = ["Rome", "Lviv", "Warsaw"];
let result = cities.join("*");

console.log(result);

//task5
console.log("task5")

let isAdult = prompt("Are you 18?");
const adult_age = "You're adult";
const not_adult_age = "You're too young";

if (isAdult >= 18) {
  console.log(adult_age);
} else {
  console.log(not_adult_age);
}

//task6
console.log("task 6")

let sideA = parseFloat(prompt("Enter the length of side A:"));
let sideB = parseFloat(prompt("Enter the length of side B:"));
let sideC = parseFloat(prompt("Enter the length of side C:"));
let semiPerimeter = (sideA + sideB + sideC) / 2;
let area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
let isRightAngled = sideA ** 2 + sideB ** 2 === sideC ** 2;

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
  console.log("Incorrect data");
} else {
    console.log("Area triangle: " + area.toFixed(3));
}
if (isRightAngled) {
     console.log("The triangle is right-angled.");
    } else {
     console.log("The triangle is not right-angled.");
  }
      

//task7
console.log("task7.1")

let currentHour = new Date().getHours();

if (currentHour >= 23 || currentHour < 5) {
  console.log("Good night");
} else if (currentHour >= 5 && currentHour < 11) {
  console.log("Good morning");
} else if (currentHour >= 11 && currentHour < 17) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

//console.log("task7.2")

let currentHour1 = new Date().getHours();
let greeting;

switch (true) {
  case (currentHour1 >= 23 || currentHour1 < 5):
    greeting = "Good night";
    break;
  case (currentHour1 >= 5 && currentHour1 < 11):
    greeting = "Good morning";
    break;
  case (currentHour1 >= 11 && currentHour1 < 17):
    greeting = "Good day";
    break;
  default:
    greeting = "Good evening";
    break;
  }
console.log(greeting);