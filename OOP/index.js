import Student from "./temp.js";
import { Programmer } from "./temp.js"



const student1 = new Student("Patrick Kabuga", 19, "COM/012/21");
const programmer1 = new Programmer("Jill", 23, "LAW/017/21", "JavaScript");


console.log(student1.summary);

console.log(student1.getMean());
console.log(student1.getGrade());

console.log(programmer1.summary);

console.log(programmer1.getMean());
console.log(programmer1.getGrade());

