//task 1
console.log("task 1")

let width = parseFloat(prompt("Input the width of the rectangle:"));
let height = parseFloat(prompt("Input the height of the rectangle:"));
let area = calcRectangleArea(width, height);

console.log(`Weidth: ${width}`);
console.log(`Height: ${height}`);


function calcRectangleArea(width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("Invalid input. Width and height must be positive values");
  }
  return width * height;
}

try {
  if (isNaN(width) || isNaN(height)) {
    throw new Error(
      "Invalid input. Width and height must be numeric values."
    );
  }

  console.log(`Rectangle area:", ${area}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}

//task 2
console.log("task 2")

let age = parseFloat(prompt("Input your age:"));
console.log(`Age: ${age}`);

function checkAge() {
    try {
      if (age === "") {
        throw new Error("The field is empty! Please enter your age.");
      }

      if (isNaN(age)) {
        throw new Error("Invalid input. Age must be numeric value.");
      }
  
      if (age < 14) {
        throw new Error("Sorry, you are too young for watching this movie.");
      }

      alert("Congrats! You have access for watching movie.");
    }
    catch (error) {
        alert(`${error.message}`);
        console.error(`Error: ${error.message}`);
      }
    }
    checkAge();
  
//task 3
console.log("task 3")

class MonthException {
    constructor(message) {
      this.name = 'MonthException';
      this.message = message;
    }
  }

  function showMonthName(month) {
    switch (month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
    throw new MonthException('Incorrect month number.');
    }
    }

    try{
    let month = parseFloat(prompt("Input a month number"));
    console.log("Month is " + showMonthName(month));
    } 
    catch (error) {
    if (error instanceof MonthException) {
      console.error(`Error:  ${error.message}`);
    } 
  }


//task 4
console.log("task 4");

function showUser(id) {
    if (id < 0) {
      throw new Error(`ID must not be negative: ${id}`);
    }

    return { id: id };
  }
  
  function showUsers(ids) {
    const validIds = [];
  
    for (let i = 0; i < ids.length; i++) {
      try {
        const user = showUser(ids[i]);
        validIds.push(user);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }

    return validIds;
  }
  console.log(showUsers([9, -5, 0, 13, 22, -7]));