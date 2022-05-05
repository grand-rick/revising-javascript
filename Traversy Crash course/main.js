//Object

// const person = {
//     firstName : 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// const letters = {
//     firstLetter: 'A',
//     secondLetter: 'B',
//     age: 45
// }

// const {firstLetter, secondLetter, age} = letters;

// const numbers = [1,2,3,4,5];
// const [one, two, three, four, five] = numbers;

// console.log(one, two, three, four, five);


// const todos = [
//     {id:1,
//     text: 'Take out trash',
//     isCompleted: true
// },
// {id:2,
//     text: 'Meeting with boss',
//     isCompleted: true
// },
// {id:3,
//     text: 'Dentist appt',
//     isCompleted: false
// }
// ];

// const todoJSON = JSON.stringify(todos);

//for of loop
// for(let todo of todos) {
//     console.log(todo.text);
// }
// console.log(todoJSON);

//High order array methods:forEach, map, filter
//forEach
//todos.forEach(function (todo, index) {
//     console.log(todo, index);
// });
//map
// const todoText = todos.map(function (todo) {
//     return todo.text;
// });

// console.log(todoText);

//filter
// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// });

// console.log(todoCompleted);

//Ternary operator
// const x = 10;

// const color = (x>10)?'green':'yellow';

// console.log(color);

//Arrow functions
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// console.log(addNums(5));

//Function constructor
// function Hospital (name, location, doc) {
//     this.hospitalName = name;
//     this.location = location;
//     this.doc = new Date(doc);
// }

// Hospital.prototype.officialName = function() {
//     return `${this.hospitalName}, ${this.location}`;
// }
// Hospital.prototype.getCommissionYear = function() {
//     return this.doc.getFullYear();
// } 


//Instantiate object
// const Hospital1 = new Hospital('Bliss Medical Center', 'Kiambu', '3-4-2017');
// const Hospital2 = new Hospital('St Jude Medical Center', 'Gatundu South', '1-10-2016');

// console.log(Hospital2.getCommissionYear());


//OOP
//Function constructor
// function Person(firstName, LastName, dob) {
//     this.firstName = firstName;
//     this.lastName = LastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

//Instantiate object
// const person1 = new Person('John', 'Doe', '4-9-2003');
// const person2 = new Person('Patrick', 'Kabuga', '3-7-2003');

// console.log(person2);
// console.log(person1);

//Class (Synctactic sugar-->better way to write function constructor and prototype code)

// class Person {
//     constructor(firstName, LastName, dob) {
//         this.firstName = firstName;
//         this.lastName = LastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

//Instantiate object
// const person1 = new Person('John', 'Doe', '4-9-2003');
// const person2 = new Person('Patrick', 'Kabuga', '3-7-2003');

// console.log(person2.getFullName());
// console.log(person1);

// console.log(window);
//Single element selectors
// const form = document.getElementById('my-form');
// const container = document.querySelector('h1');

// console.log(container);


//Multiple element selectors
//const item = document.querySelectorAll('.item');
//const item = document.getElementsByClassName('item');
// const item = document.getElementsByTagName('li');
// console.log(item);

// const ul = document.querySelector('.items');

// ul.children[1].textContent = 'Hello';

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value && emailInput.value) {
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    } else {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(()=> msg.remove(), 3000);
    }
}





























