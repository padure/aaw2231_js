import {
    getPosts
} from './utils/postController.js';

//Extragere JSON
const posts = document.querySelector('.posts');

(async () => {
    const postsList = await getPosts();
    postsList.forEach(post => {
        posts.innerHTML += `<div class='card'>
            <h4>${post.title}</h4>
            <p>${post.content}</p>
        </div>`;
    })
})()
