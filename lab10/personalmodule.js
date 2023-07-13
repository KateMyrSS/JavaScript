console.log("Task2 personalmodule");

let currentTimeInUkraine = new Date();
module.exports.Date = current.Date;

module.exports.showMessage = function(name) {

let hours = currentTimeInUkraine.getHours();

console.log(currentTimeInUkraine);

if(hours >= 23 && hours < 5) {console.log(`Good Night, ${name}`)}
else if (hours >= 5 && hours < 11) {console.log(`Good Morning, ${name}`)}
else if (hours >= 11 && hours < 17) {console.log(`Good Afternoon, ${name}`)}
else if (hours >=17 && hours < 23) {console.log(`Good Evening, ${name}`)};

}

//module.exports = showMessage;