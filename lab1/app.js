//task2
console.log('task2');
console.log('Myr'); //enter the value Last Name

//task3
console.log('task3');
//a
let x; //create a variable x
let y; //create a variable y
//b
x = 2.32; //add value x
y = 'test'; //add value y
//c
console.log(x); //console log x
console.log(y); //console log y
//d
x=y; //change a variable
//e
console.log(x); //console log x
console.log(y); //console log y

//task4
console.log('task4');
let id = Symbol("id")
const  pet = {
    [id]: 123,
    name: "Kokos",
    age: 1.2,
    breed: undefined,
    food: null,
    active: true
}
console.log(pet)

//task5
console.log('task5');
let isAdult = confirm('Are you adult?');
console.log(isAdult);

//task6
console.log('task6');
let Name; //string
let Surname; //string
let Group; //string
let Birthday; //number
Name = 'Kate';
Surname = 'Ivanova';
Group = 'AQA 2';
Birthday = 1990;
let IsMarried = false; //boolean
console.log(Birthday);
console.log(IsMarried);
console.log(Name, Surname, Group)
let Money;
let Vacation = null;
console.log(typeof Money);
console.log(typeof Vacation);

//task7
console.log('task7');
let login = prompt('Please enter your login');
let email = prompt('Please enter your email');
let password = prompt('Please enter your password');
alert(`Dear ${login} , your email is ${email}, your password is ${password}`)

//task8
console.log('task8');
const secondsInMinute = 60;
const hoursInDay =24;
const secondsInHour = 60*secondsInMinute;
const secondsInDay = hoursInDay*secondsInHour;
let countDayofMontf = parseInt(prompt('Please enter day in month'));
//alert(`SecondsInHour = ${secondsInHour} , secondsInDay =  ${secondsInDay}, secondInMonth is ${countDayofMontf*secondsInDay}`)
document.write(`secondsInHour = ${secondsInHour} , secondsInDay =  ${secondsInDay}, secondInMonth is ${countDayofMontf*secondsInDay}`)