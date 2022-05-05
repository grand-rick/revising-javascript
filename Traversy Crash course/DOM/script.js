// var newDiv = document.createElement('div');

// newDiv.className = 'hello';
// newDiv.id = 'hello1';

// newDiv.setAttribute('title', 'Hello Div');

// newDiv.textContent = 'This is a div';

// const header = document.querySelector('header');
// header.appendChild(newDiv);
//Or use insertBefore();-- takes two parameters, 1st for what is to be inserted, and 2nd what it is to be inserted before.

// console.log(newDiv);

const btn = document.querySelector('.btn');

const form = document.querySelector('form');

form.addEventListener('mousemove', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}





