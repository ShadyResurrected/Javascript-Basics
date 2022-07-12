const posts = [
    {title : 'Post One', body : 'This is post one'},
    {title : 'Post Two', body : 'This is post two'}
];

// Mimicking to get Posts from the server
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000)
}

// Mimicking to create post and push them on the server

// function createPost(post){
//     setTimeout(() => {
//         posts.push(post)
//     },2000);
// }

// Since the create Post function took two seconds to create a new post, and by that time the getPosts function was already over and the dom was painted

// getPosts()
// createPost({title : 'Post Three', body : 'This is post three'})


// Solution to above problem

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000)
}

// Here the getPosts function runs only after the new post is pushed that is it waits two seconds and then it executes

createPost({title : 'Post Three', body : 'This is post three'}, getPosts)