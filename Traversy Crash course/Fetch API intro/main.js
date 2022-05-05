// Grabbing button to get text 
const text = document.getElementById('getText');
// Grabbing button to get users
const users = document.getElementById('getUsers');
// Grabbing button to get posts
const posts = document.getElementById('getPosts');
// Grabbing button to add posts
const add = document.getElementById('addPosts');

//Adding an event listener after get text button is clicked
text.addEventListener("click", getText);

//Adding an event listener after get users button is clicked
users.addEventListener("click", getUsers);

//Adding an event listener after get posts button is clicked
posts.addEventListener("click", getPosts);

//Adding an event listener to add posts
posts.addEventListener("submit", addPost);

//Using Async/await
// async function getText() {
//     const res = await fetch('fetchsandbox/sample.txt');
//     const data = await res.text();

//     output.innerHTML = data;
// }

//Using Fetch with promises to get text
function getText() {
    fetch('fetchsandbox/sample.txt')
    .then(res => res.text())
    .then(data => {
        document.getElementById('output').innerHTML = data;
    })
}

//Using Fetch with promises to get users
function getUsers() {
    fetch('fetchsandbox/users.json')
        .then(res => res.json())
        .then(data => {
            let output = "<h2 class='mb-4'>Users</h2>";
            data.forEach((user) => {
                output += `<ul "list-group mb-3">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Email: ${user.email}</li>
                </ul>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
}

//Using Fetch with promises to get posts

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            let output = `<h2 class="mb-4">Posts</h2>`;
            data.forEach((post) => {
                output += `
            <div class="card card-body mb-3">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.error(err));
}

function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json'
      },
      body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }