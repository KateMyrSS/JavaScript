//tasl 1
console.log("task1.1");
const arr1 = [2,3,4,5];
let mult1 = 1;

for (let i=0; i< arr1.length; i++) {
     mult1 *= arr1[i];
    }
    console.log(`Array's multiplication equals: ${mult1}`);

console.log("task1.2");
const arr2 = [2,3,4,5];
let mult2 = 1;
let i=0;

while (i < arr2.length) {
    mult2 *= arr2[i];
   i++;
  }
  
  console.log(`Array's multiplication equals: ${mult2}`);

  //task2
console.log("task2");
  for (let i = 0; i <= 15; i++) {  
    if (i%2==0) {
        console.log(i + " is even") 
    } else {
        console.log(`${i} is odd`) 
 }
    }

//task3
console.log("task3");

function randArray(k) {
    let array = [];
    for (let i = 0; i < k; i++) {
      let randomNumber = Math.floor(Math.random() * 500) + 1;
      array.push(randomNumber);
    }
    return array;
  }
  console.log(randArray(5));

  //task4
  console.log("task4");

  let a = Number(prompt("Input number a"));
  let b = Number(prompt("Input degree b"));
  let result = raiseToDegree(a,b)

  function raiseToDegree(a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return Math.pow(a,b)
    }
   else {
    alert("Please enter an integer")
   }
}
  console.log(`The result of raising the number a to the degree of b: ${result}`);

  //task5
  console.log("task5"); 
  
  function findMin() {
    let min = arguments[0];
  
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
  
  let minValue = findMin(-5, 14, 4, -4, 0.2);
  console.log(`Minimum value: ${minValue}`);

  //task6
  console.log("task6");

  function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
  }
  
  let arr3 = [1, 2, 3, 4, 5];
  console.log(`Result for arr3: ${findUnique(arr3)}`); 
  
  let arr4 = [1, 2, 3, 2, 4, 5];
  console.log("Result for arr4:", findUnique(arr4)); 


  //task7
  console.log("task7");

  function getLastElements(arr, n) {
    if (n <= 0) {
      return [];
    } else if (n >= arr.length) {
      return arr[arr.length - 1];
    } else {
      return arr.slice(-n);
    }
  }
  
  console.log(getLastElements([1, 2, 3, 4, 5], 2));
  console.log(getLastElements([1, 2, 3, 4, 5], 6));
  console.log(getLastElements([1, 2, 3, 4, 5], 1));
  console.log(getLastElements([1, 2, 3, 4, 5], 4));

  //task8
  console.log("task8");

  function capitalizeFirstLetter(str) {
    let words = str.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      words[i] = capitalizedWord;
    }
    let capitalizedStr = words.join(" ");
    return capitalizedStr;
  }
  let str = "i love java script ";
  console.log(capitalizeFirstLetter(str));