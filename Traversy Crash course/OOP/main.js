//Inheriting a constructor/object
//Inheriting a prototype



//Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log(book1.getSummary());


//Function constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

//Assigning Prototypes
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`
// } 
//Instantiate Object
// const book2 = new Book('Book Two', 'Jane Doe', '2016');

// console.log(book2);

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
     getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`; 
    }
    getAge() {
        return `${this.title} is ${new Date().getFullYear() - this.year} years old.`
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static newBooks() {
        return `Harry Potter and the deathly hallows is out!`;
    }
}
//Instantiating Object
const book2 = new Book('Book Two', 'Jane Doe', '2010');

// console.log(book2);
// book2.revise('2014');
// console.log(book2);
// console.log(Object.keys(book2));

// console.log(Book.newBooks());

//Magazine Subclass

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

//Instantiate object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);



























