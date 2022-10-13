//Promises
// let p = new Promise((resolve, reject) => {
//     let a = 6 + 1;
//     if(a==2) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// });

// p.then(message => {
//     console.log(`This is in the then ${message}`);
// }).catch(message => {
//     console.log(`This is in the catch ${message}`);
// });

//Or you can take two parameters/callbacks in the then function, one for if fulfilled and the other for if failed
// p.then((message) => {
//     console.log(message);
// },
// (err) => {
//     console.log(err);
// })


//Fetch Promises with pokemon API

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));


    // const data = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//Async/ Await
document.addEventListener("DOMContentLoaded", pokemon);
        async function pokemon() {
            try {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/abilities');
                const data = await res.json();
                console.log(data);
            }
            catch(err) {
                console.log(err);
            }
        }

// fetchData();