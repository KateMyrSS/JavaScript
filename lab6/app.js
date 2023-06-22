//task1
console.log("Task1");

let divElement = document.getElementById("test");
divElement.textContent = "Last";

//const divElement = document.querySelector("#test");
// divElement.textContent = "Last";

//task2
console.log("Task2");

const image = document.getElementById("newImage");
image.src = "cat.jpg";
const newWidth = 495;
const newHeight = 750;

image.style.width = `${newWidth}px`;
image.style.height = `${newHeight}px`;

//task3
console.log("Task3");

let elements = document.querySelectorAll("#text > *");

elements.forEach((element, index) => {
  console.log(`Selector text ${index}: ${element.textContent}`);
});

//task4
console.log("Task4");

let list = document.getElementById("list");
let items = list.getElementsByTagName("li");
let order = [0, items.length - 1, 1, 3, 2];
let output = order.map((index) => items[index].textContent).join(", ");

console.log(output);

let items1 = document.querySelectorAll('#list li');
let order1 = [0, items1.length - 1, 1, 3, 2];
let output1 = order.map((index) => items[index].textContent).join(", ");

console.log(output1);2

//task5
console.log("task5");

let header = document.querySelector("h1");
let firstParagraph = document.querySelector("#myDiv p:first-child");
let secondParagraph = document.querySelector("#myDiv p:nth-child(2)");
let thirdParagraph = document.querySelector("#myDiv p:nth-child(3)");
let fourthParagraph = document.querySelector("#myDiv p:nth-child(4)");
let listItems = document.querySelectorAll("#myList li");
let span = document.querySelector("span");

header.style.fontWeight = "bold";
header.style.backgroundColor = "rgb(153, 255, 153)";
firstParagraph.style.fontWeight = "bold";
secondParagraph.style.color = "red";
thirdParagraph.style.textDecoration = "underline";
fourthParagraph.style.fontStyle = "italic";
listItems.forEach((item) => {
  item.style.display = "inline";
  item.style.margin = "0";
  item.style.padding = "0";
  item.style.listStyle = "none";
});
listItems.forEach((item) => {
  item.style.display = "inline";
  item.style.margin = "0";
  item.style.padding = "0";
  item.style.listStyle = "none";
});
span.style.display = "none";

const horizontalText = Array.from(listItems)
  .map((item) => item.textContent.trim())
  .join("");

const horizontalTextElement = document.createElement("p");
horizontalTextElement.textContent = horizontalText;

document.body.appendChild(horizontalTextElement);

//task6
console.log("task6");

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
const message1 = prompt("Input the first message:");
const message2 = prompt("Input the second message:");
let tempValue = input1.value;

input1.value = input2.value;
input2.value = tempValue;
input1.value = message2;
input2.value = message1;

//task7
console.log("task7");

//let body = document.createElement('body');
//let main = document.createElement('main');
//main.className = 'mainClass check item';
//let div = document.createElement('div');
//div.id = 'myDiv';
//let p = document.createElement('p');
//p.textContent = 'First paragraph';

//div.appendChild(p);
//main.appendChild(div);1
//body.appendChild(main);
//document.body = body;