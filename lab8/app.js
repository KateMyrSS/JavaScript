//task1 
console.log("task1");

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [, , , ...c] = arr;

console.log(arr[0]);
console.log(arr[1]);
console.log(c);


//task2
console.log("task2");

let data = {
 names: ["Sam", "Tom", "Ray", "Bob"],
ages: [20, 24, 22, 26],
};
  
let { names: [names1, names2, ...restNames], ages: [ages1, ages2, ages3, ages4] } = data;
  
console.log(names2); // "Tom"
console.log(ages2); // 24
console.log(restNames[1]); // "Ray"
console.log(ages4); // 26

//task3
console.log("task3");

function mul(...args) {
    const numbers = args.filter((arg) => typeof arg === "number");
  
    if (numbers.length === 0) {
      return 0;
    }
  
    const product = numbers.reduce((acc, curr) => acc * curr, 1);
  
    return product;
  }
  
  console.log(mul(1, "str", 2, 3, true)); //6
  console.log(mul(null, "str", false, true)); //0


//task4
console.log("task4");

let server = {
    data: 0,
    convertToString: function (callback) {
      callback(() => {
        return this.data + "";
      });
    },
  };
  
  let client = {
    server: server,
    result: "",
    calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification: function () {
      return (callback) => {
        this.result = callback();
      };
    },
  };
  
  client.calc(123);
  
  console.log(client.result);
  console.log(typeof client.result);

  //task5
  console.log("task5");

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
function mapBuilder(keysArray, valuesArray) {
  if (keysArray.length !== valuesArray.length) {
    throw new Error("Values and keys arrays must have the same length");
  }

  const map = new Map();
  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }

  return map;
}

console.log(map.size); //4
console.log(map.get(2)); //"span"