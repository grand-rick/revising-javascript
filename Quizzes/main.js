class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    static welcome() {
        return `Welcome to the University`;
    }
    getSummary() {
        return `${this.name} is ${this.age} years old and is pursuing a bachelor's degree in ${this.course}.`;
    }
}

//Instantiating Object
const student1 = new Student('Patrick Kabuga', '19', 'Computer Science');
const student2 = new Student('Pritam Vekaria', '23', 'Data Science');

// console.log(student2.getSummary());

//Creating a Sub class
class ExchangeStudent extends Student {
    constructor(name, age, course, country) {
        super(name, age, course);
        this.country = country;
    }
}

//Instantiate object
const student3 = new ExchangeStudent('John Doe', '20', 'Medicine', 'England');

// console.log(student3.getSummary());

// console.log(Student.welcome());






