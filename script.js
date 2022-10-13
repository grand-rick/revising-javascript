// "use strict";
//storing data in variables
/*
var website = "https://codingforeverybody.com/";
var teacherName = "Kalob Taulien";

console.log(teacherName);
console.log(website);

let apples = 5;   //cannot be referred to like the variables, but can be redeclared, or changed in the console table
const height ="6'0\"" //once const is declared you cannot change it, or re-declare it(can't overwrite)


console.log("I have", apples, "apples");
console.log("I am" ,height, )
*/

// operators
/*Assignment operator =
Addition operator e.g 3 + 3 = 6;
Subtraction operator e.g 23 - 12 = 11;
Multiplication operator e.g 3 * 4; = 12
Division Operator e.g 100/10 = 10;
Less than operator e.g <;
Greater than operator e.g >;
not equal to e.g !=;
    Modulus -To get the remainder e.g 10 % 3 = 1;
    Exponent e.g 3 ** 3 is same as 3*3*3= 27;
    *Increment e.g total++ gives the value first then adds it, so than when refer to the original total value, it has been added to by 1, ALT (--total also works)
    *Decrement e.g ++total adds the value first then returns it, giving you the new number which has been added to by 1, ALT (--total also works)
*/
// Javascript data types
/*
const str = "A String"; //String
const num =3; //number
const flt = 3.14; //float
const bool = true; // or "false" - boolean
const list = ["Item 1", 2, "Three", 3.14, []]; //Array=List
const thing = null; //Has nothing in it, not even a zero
const notDefined = undefined; //Currently holds no value
const getAge = function(){return 31;}//This is a function
const obj ={
    'name': 'Kalob',
    'profession': 'Coding teacher'
}// Object; can be accessed with obj['name']
*/

/*
//Conditional Statements
const name = "Kalob Taulien";
let profession = "Programmer";
if(name == "Kalob Taulien"){
    //Execute this code in here 
    console.log("Twitter handle is @Kalob Taulien");
} else{
    // Execute this code if it's not Kalob Taulien
    console.log("Twitter handle is @bazeng");
}

const age = 18;
if(age >= 18) {
    console.log("I'M ALLOWED TO VOTE");
}
if (age >= 21) {
    console.log("I can drink alcoholz");
} else{
    console.log("Not old enough to drink alcoholz");
}

var jina = "Rick";
if(jina == "Kabuga") {
    console.log("Hello", jina)
} else if (jina == "Rick") {
    //Do something in here
    console.log("Hello Rick!");
}
else {
    console.log("Hello  guest");
}
*/

// The DOM (DOCUMENT OBJECT MODEL)

/* Selecting elements(nodes) by their ids
e.g const box = document.getElementbyId("box") where the element's id is box
*/ 

/*//Javascript objects
console.log( myself = {
    "name" : "Patrick Kabuga",
    "age" : "189",
    "education" : "University",
    "size" : "big",
    "mode" : "savage"
})

then access from there e.g myself["name"] 
*/

// String methods
// console.log( course = "Javascript 101: coding for beginners")
// course.length (shows the n.o of characters in the text)--- any letter can be accessed by a number e.g course[16], will give you 16, the computer starts counting from zero 
// course.search (shows the location of a character in the text)
// course.slice(start, end)  {cuts the text into a desired portion, from  an index position to another}
// const.substr(16, 6)  {cuts from character at index 16 and goes ahead 6 indexes}
// course.replace("coding", "Programming") for temporary measures and course = course.replace("coding", "Programming") to assign a new variable
// course.toUpperCase()  {makes all text to be in uppercase form}
// course.toLowerCase() {makes all text to be in lowercase form}
// course.trim()  {gets rid of all the extra spaces in a spacey sentence}
// words= course.split(""); {will split anything in the constant variable course, with a quoation and a space in between, therefore, the text within will become an array}

// Casting data types--ability to turn one variable type into another variable type
/*e.g  if age ="31" (a string), to change it to a number, you write, age = Number(age),resulting to age becoming age = 31 (a number)*/

// String Concatenation--mixing various data types together to form a sentence
/*
e.g name = "Kalob Taulien";age = "31"
    // save that first
name + " is my age "+"and "+age+" is my age"
                    OR
`My name is ${name}, and my age is ${age}`
*/
// Javascript Arrays
/* 
e.g represented by []--to add an item to the array you use list.push(item), where list reps the variable key
*/

// Array iteration(the "FOR" loop)
/*
for(something; as long as something is ELSE; after each iteration)
e.g  const arr = ["Zero", "One", "Two", "Three"]
for(let i = 0; i < arr.length; i++){console.log(i)}
This simply means that for a variable i, if the variable i is less than the length of constant variable arr(an array, which is 4), add an increment of one until it does not satisfy the condition for the loop(which is to be less than the length of the array arr)--then display the loop on the console.

THE MODERN WAY--arr.forEach(num => {console.log(num);})

*/
// const elems = document.querySelectorAll(".this-class");--to select all classes
// const elems = document.querySelector(".this-class");--to select one class, the first one

// DRY (DON'T REPEAT YOURSELF) PRINCIPLE
/*
The syntax for a function--
function addNumbers(param1, param2){
    // Logic
        return "an answer";
}                        \
                          \
                           \
                             \
const total = addNumbers(); //an answer

*/
// Functions:Re-using code
/*function addNumbers (num1, num2) {
    const total = Number(num1) + Number(num2);
    return total;
}

var addedTotal = addNumbers(1, 9);
var sum = addNumbers(3,6);
 */

// Functions:The rest operator
/*function addNumbers(...numbers) {
    let total = 0;
    for(index in numbers){
      total = total + numbers[index];
    }
    return total;
  }
  const newTotal = addNumbers(1, 4, 13, 17);
  console.log(newTotal);

  function addNumbers(greetingName, ...numbers) {
    let total = 0;
    for(index in numbers) {
        total = total + numbers[index];
    }
    return `${greetingName}: the total is  ${total}`;
}

const newTotal = addNumbers("Zephyr", 1, 4, 7, 213);
console.log(newTotal); */

//  Objects with functions 
/*
    const person = {
  'name' : 'Kalob',
  'age' : 31,
  'height' : "6'0\"",
  'speak' : function (want = "cookies") {
    console.log('Meow, I want ${want}');,
    talk() {
        console.log("I am talking");--->This is called an object literal, an easier way of writing a function within the object
    }
  }
  
}

person.speak()

*/

// To show a message after the page has loaded
/*
window.onload = function() {
    alert("Page is loaded")
} */

// To show a message before a page has been refreshed
/*console.log("Mimi ni bazuu");

window.onbeforeunload = function() {
    console.log("Before unload")
    return "Are you sure you want to leave the page?"
} */

// Strict comparisons
/*
let num = "0";-->num is a string
and this, e.g console.log(num==0)-->is true
console.log(num=="0")--> is also true, but
console.log(num === 0)--> is FALSE, because "===" is a strict comparison, meaning the variable 'num' should be exactly be equal in property and data type with the said value, else it will be false

"0"--> is a string, whereas 0 is a number, and they cannot be the same

=== --> checks whether the given item is of the SAME VALUE and the SAME DATA TYPE as the variable. 

*/

// Javascript scope
/*
const and let are closed to their closest set of curly braces, but var is not.
Var is allowed to go through the curly braces, it is fluid.
const num = 1234;
if(num === 1234) {
    const greeting = "Hello 1234";
}

console.log(greeting);
*/

// Javascript Hoisting

/*
console.log("First", big)
var big = "Kalob";
console.log("Second", big)
-->In the first display, the name will be undefined, but in the second, it will display accordingly.

This is because, when a variable is declared, it first goes to the top of the scope, where it will appear from there on downwards but won't be assigned a value, until the flow of the code reaches to where the variable has been assigned. And this will result to the all items below it using the variable, to function properly.

AN ERROR WON'T POP UP FOR THE YET UNASSIGNED VARIABLE, BUT RATHER WILL BE REPLACED BY 'UNDEFINED'
*/

// Javascript Closures-->they give you access to an outer function's scope
/*
You can write code outside of a function, and it will be accessible from within a function.
e.g
let person1= "Kalob  M Taulien"
function greeting() {
    console.log("Hello "+ person1)
}

greeting("John Doe")--> When you view this code in a browser, the output will display as [Hello Kalob M taulien]

N/B="YOU CAN CREATE A VARIABLE OUTSIDE OF A FUNCTION, AND ACCESS IT WITHIN A FUNCTION,
 'BUT!', 
 THE OPPOSITE IS FALSE(that is, YOU CAN'T ACCESS A VARIABLE CREATED WITHIN A FUNCTION, FROM OUTSIDE IT)
"
And that is Javascript closure
*/

// Callback Functions--> A function to execute after the primary function;
/*
 console.log("Guess what my name is");
setTimeout (function() {
    console.log("My name is Patrick Kabuga!!");
}, 2500)
console.log("You have 2 seconds")
*/
 
// Strict Mode-->makes your js become more secure and "strict"
/*
This method makes sure that variables aren't created blindly, but have to be defined as either var, let or const.
To set this strict measure, write "use strict"; at the top of the code page.
Thus, a variable like let x = "thing"
, will not be defined.

*/

// Timeouts and intervals--> A way of writing code where either it will do something repeatedly, or it will wait to do something
/*
setTimeout-->refer to callback functions
setInterval(function() {
    console.log("Checking Something...")
}, 2000)-->This code will repeat itself after every 2 seconds

let count = 0;
const interval = setInterval(function() {
    console.log("Checking Something...");
    count++;


    if(count === 3) {
        clearInterval(interval);
        console.log("This is the last one");
    }
}, 2000)

*N/B: TO STOP AN INTERVAL, USE clearInterval(VARIABLE NAME TO BE STOPPED)
*/

// While loops-->Will basically run forever until you tell them to stop
/*
while(somethingIsTrue) {
    // Execute this code
}
e.g 
let num = 0;
while(num < 100) {
    // Execute this code
    
}-->This code will execute forever, and may crash your browser, not computer...Therefore must have a way to stop the code at all times.(that is, make what was once true, become false)
In the above case, the num will increase until it reaches 99, because when it increments to 100, the value 100 is not less than 100, (making the condition of num(which is 100) < 100, to be false, thus stopping the code)


let num = 0;
while(num < 100) {
    // Execute this code
    console.log(num);
    num++;
    
}

            A SIMPLE GUESSING GAME
while (true) {
    let name = prompt("What is your name?");
    if(name === "Jacob") {
        alert("Yaaayy!, you guessed it!!")
        break;
    }
    alert("Wrong name. Try again")
}

*/

// Date formatting
/*
let d = new Date(2025, 0, 15);
the format is Year, Month, Day
The months start from 0, i.e Jan= 0. Feb = 1, Dec = 11 etc

to access the given date,
d.getDate()

to access the given month,
d.getMonth()

to access the given year,
d.getFullYear()
*/

// Destructuring Arrays and Objects
/*
// Destructuring an array

const months = ['January', 'February', 'December'];
const [Jan, Feb, Dec] = months;
console.log(Dec);
console.log(months);

// Destructuring an object

const person3 = {
    'name': 'Kalob',
    'instagram': '@coding.for.everybody',
    'dude': 'dudette',
}

const {name, instagram, dude} = person3;

*/

// Deleting Object Properties

/*


const person3 = {
    'name': 'Kalob',
    'instagram': '@coding.for.everybody',
    'dude': 'dudette',
}

const {name, instagram, dude} = person3;

delete person3['name'];


*N/B= YOU CAN'T DELETE VARIABLES, HOWEVER, YOU CAN DELETE OBJECT PROPERTIES  


*/

// JavaScript Math-->We use a math module inbuilt within javascript

/*

Math.round(4.6)-->5 (rounds off the number)

Math.pow(7,2)-->49 ( ALT 7**2) (using a power/exponent of a number)

Math.sqrt(9)-->3 (squareroot)

Math.max(1, 4, 50, 34)--->50 (shows the maximimum value)

Math.min(-31, -30, -29, 40)--->-31 (shows the minimum value)

Math.floor(23.98)--->23 (rounds off the number to its closest whole number i.e removes the decimals)

Math.ceil(23.1)---> 23 (rounds it off to the next n.o no matter the decimal values, i.e as long as there are decimal points)



Math.random();--->Gives us a random number between 0 and 1, the numbers given will never be the same


MINI-PROJECT: A SIMPLE RANDOM NUMBER GUESSING GAME


while (true) {
    let number = prompt("Guess Random Number from 1 and 5");
    number = Number(number);


    const randomNumber = Math.ceil(Math.random() * 5)
    if(number == randomNumber) {
        alert("YOU WIN!!");
        break;
    }else {
        alert("You guessed " + number + " but the right number was " + randomNumber);
    }
    
}




*/

// Try, Catch and Finally

/*
                When an error occurs in js, the code below it does not function because the js flow falls out after being confused by the error.

try {
    // Non-existent function

} catch(error) {
    // Execute code in here
}---> Basically this means, try executing the code in here, if an error occurs, catch it then execute code in here.

e.g
try {
    throw "Kalob's Custom Error"
} catch (error) {
    console.warn("ERROR LOGGING", error);
}

console.log("SHOW ME!!!")

With that, you gracefully handle that error and the code below it runs smoothly, unaffected.("You can apply in real life situations, when a page or site isn't working")

try {
    throw "Kalob's Custom Error"
} catch (error) {
    console.warn("ERROR LOGGING", error);
} finally{
    // Whether the try code executes or the catch code executes, do something in here
}

console.log("SHOW ME!!!")

const num = 10;

try {
    num = num + 10;
} catch(error) {
    console.log("ERROR LOGGING", error)
} 

const num = 10;
try {
    num = num + 10;
} catch(error) {
    console.warn("ERROR LOGGING", error);
} finally {
    console.log("The final number is", num);
}

// HOMEWORK
const num = 10;
try {
    num = num + 32;
} catch(error) {
    console.warn(error)
} finally { 
    console.log("The number is", num);
}

console.log("Hello World");

*/


// The 'this' keyword-->refers to the entire body of an object, to the entire object that it belongs to

/*
const person5 = {
    'name': 'Henry',
    speak(name) {
        console.log("My name is " + this.name);
    }
}
person5.speak()


function counter() {
    if(this.total === undefined) {
        this.total = 1
    } else {
        this.total++
    }
    console.log("Running counter. Total is ", this.total)
}

counter()


*/


// Arrow functions
/*

const hello = function() {
    // Execute code in here
}

function hello() {
    // Execute code in here
}

const hi = () => {
    return "Hi there";
}

const hello = () => ... [if the code is just one line]


N/B*-->The 'this' keyword is not closed under the arrow function as is the case with other functions. When you use 'this', in an arrow function, it refers to the whole js window, but if used in other types of functions, it is closed under the nearest curly braces.
*/

// Javascript Classes--> Another way of writing an object, and quite similar
// Uses normal uppercasing instead of the usual camelcase

/*
class MyClassName {
    setName(name) {
        this.name = name
    }

    speak() {
        if(this.name === undefined) {
            this.name = "Unnamed Pupper"
        }
        console.log(`Woof Woof my name is  ${this.name}`);
    }
}

const thing = new MyClassName();

thing.setName("Doggo");
thing.speak();




// HOMEWORK
class PetName {
    setName(name) {
        this.name = name;
    }

    speak() {
        if(this.name === undefined) {
            this.name = "Unnamed Cat"
        }
        console.log(`Meowww, goes the cat named  ${this.name}`);
    }
}

const pet = new PetName;
pet.setName("Mario")
pet.speak()
*/

// Class Constructors--> makes the code easier, and this is where classes outpace objects, in the previous code, we used setName, to set the name, here we will simplify the code by using constructors e.g

/*

class Person {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hello from "+ this.name)
    }
}

const kalob = new Person("Kalob")
kalob.greeting()



// Homework
class Person {
    constructor(age) {
        this.age = age;
    }
    speak() {
        if(this.age === undefined) {
            this.age = "Private"
        }
        console.log("I am " + this.age + " years old")
    }
}

const old = new Person(57)

old.speak();


*/

// Javascript Object Notation-->JSON--> A lightweight data interchange format(A language someone made at some point in time, a long time ago to allow one partcular language can talk to another particular coding  language.)--{A globally recognised way to share data-AND IT IS NOT A SPECIFIC LANGUAGE}----->>BASICALLY IT'S JUST AN OBJECT WITHOUT THE INITIAL VARIABLE, JUST PLAIN TEXT, WITH A BUNCH OF OBJECT DATA IN IT
/*
    {
        'name' = 'Kalob',
        'age' = 31,
        'favFoods' = ['Pizza'. 'Tacos', 'Lasagna'],
        'children' = [
            {
                'name' = 'Zephyr',
                'age' = 4,
            },
            {
                'name' = 'gully'
                'age' = 5,
            }

        ]


} 
*/

// Ajax--> Asynchronous Javascript and XML--> It's not actually a programming language, its actually a combination of a browser's inbuilt XMLHttprequest ---> used by a browser to send data to a server, and to receive data.

/*
IT'S SUPER LIGHTWEIGHT--> because it only need to send a tiny bit of data and accept a tiny bit of data.
(AJAX IS OLD/OUTDATAED)
We used to use this XMLHtttpRequest to transact data to and from the ervers, but now we use FETCH API (fetch()), which makes it significantly easier


*/

// FETCH API
/*

Basically looks like:
fetch('http://website.com/')
    .then(...)
    .then(...)
Here we're saying, go and get information from website.com, 

*/


fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })





























