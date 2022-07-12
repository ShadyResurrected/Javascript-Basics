const posts = [
    {title : 'This is post one', body : 'This is body of post one'},
    {title : 'This is post two', body : 'This is body of post two'}
]


function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach((post,index) => { 
            output +=`<li>${post.title}</li>`
        })

        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error : Something went wrong');
            }
        }, 2000)
    });
}

// createPost({title : 'This is post three' , body : 'This is body of post three'})
// .then(getPosts)
// .catch(err => console.log(err))

// If a promise is resolved then the function passed in the 'then' block is executed
// else the catch block gets executed

// Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 2000, 'Goodbye')
// })

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

// Promise.all([promise1,promise2,promise3,promise4])
// .then(values => console.log(values))


// Async / Await
// A more elegant way to handle promises
// Await waits for an asynchronous action to complete
// To use await the function must be labelled as async

async function init(){
    await createPost({title : 'This is the fourth Post', body : 'This is the body of the fourth post'})
    getPosts()
}
// await will make sure to wait for the function createPost to be done and then it will move on

init()

async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)
}

getUsers()