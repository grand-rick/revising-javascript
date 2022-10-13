// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))



// const fetchData = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await res.json(); 
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// fetchData();


const getPics = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos/');
        const data = await res.json();

        for(let i = 0;i<data.length-4990;i++) {
            //Creating an image element
            const img = document.createElement('img');
            //Grabbing the element with the id of pics
            const pics = document.getElementById('pics');
            //Grabbing all the image urls
            const url = data[i].url;


            //Appending an image to the pics element
            pics.appendChild(img);
            //Assigning the image urls to the API ones
            img.src = url;
        }
        
    }
    catch(err) {
        console.log(err);
    }
}

const button = document.querySelector('button');

button.addEventListener("click", getPics);