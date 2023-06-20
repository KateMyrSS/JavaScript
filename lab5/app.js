//task 1
console.log ("task 1");

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" ,
    active: true,
};
console.log(mentor);


function countProps(object) {
    let countProps = 0;

for (const key in object) {
    if (object.hasOwnProperty(key)){
        countProps += 1;
    }
  }
  return countProps;
}
    console.log(countProps(mentor));

//task 2
console.log("task 2");

let car = {
    make: "Ford",
    model: "Mustang",
    year: 2018,
    color: "red",
    price: 1000000,
}

function showProps(obj) {
    let properties = Object.keys(obj);
    let values = properties.map((prop) => obj[prop]);
    
    console.log("Properties:", properties);
    console.log("Values:", values);
}

showProps(car);

//console.log(Object.keys(car));
//console.log(Object.values(car));
//console.log(typeof Object.values(car));


//task 3
console.log("task 3");

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(`${this.name} ${this.surname}`);
      }
}

class Student extends Person {
    constructor(name, surname, year)
    {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        console.log(`${this.name} ${this.middleName} ${this.surname}`);
    }
     
    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year + 1;
        
        try {
           if (course <= 0 || course >= 7) {
              throw new Error("Person isn't a student");
            }
            console.log(`Course: ${course}`);
        }
          catch (error) {
            console.error(`Error: ${error.message}`);
          }
        }
    }

    const person = new Person("Jon","MCLaren");
    person.showFullName();
    
    const student = new Student("John","Travolta", 2010);
    student.showFullName();
    
    student.showCourse();

    //task4
    console.log("task 4");

class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this.experience = 1.2;
    }
  
    showSalary() {
      const salary = this.dayRate * this.workingDays;
      console.log(`${this.fullName} salary: ${salary}`);
    }
  
    showSalaryWithExperience() {
      const salary = this.dayRate * this.workingDays * this.experience;
      console.log(`${this.fullName} salary: ${salary}`);
    }
  
    setExperience(newExperience) {
      this.experience = newExperience;
      console.log(`New experience: ${newExperience}`);
    }
  
    static sortSalaries(workers) {
    workers.forEach((worker) => {
        console.log(`\n${worker.fullName}\n`);
        worker.showSalary();
        worker.setExperience(1.2);
        worker.showSalaryWithExperience();
        worker.setExperience(1.5);
        worker.showSalaryWithExperience();
      });
    }
  }
  
  const worker1 = new Worker("John Johnson", 20, 23);
  const worker2 = new Worker("Tom Tomson", 48, 22);
  const worker3 = new Worker("Andy Ander", 29, 23);
  
  const workers = [worker1, worker2, worker3];
  Worker.sortSalaries(workers);
  
  //task5
  console.log("task 5");
  
  class GeometricFigure {
    getArea() {
      return 0;
    }
  
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Triangle extends GeometricFigure {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  class Square extends GeometricFigure {
    constructor(side) {
      super();
      this.side = side;
    }
  
    getArea() {
      return this.side * this.side;
    }
  }
  
  class Circle extends GeometricFigure {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  function handleFigures(figures) {
    const totalArea = figures.reduce((sum, figure) => {
      if (figure instanceof GeometricFigure) {
        const area = figure.getArea();
        console.log(`${figure.toString()}: Area = ${area.toFixed(2)}`);
        return sum + area;
      }
      return sum;
    }, 0);
  
    console.log(`Total Area: ${totalArea.toFixed(2)}`);
  }
  
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  handleFigures(figures);



