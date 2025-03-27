import {
    storePost
} from './utils/postController.js';

const createForm = document.querySelector('.create-form');

// Salvare in JSON
createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const post = {
        title: e.target.title.value,
        content: e.target.content.value,
    }
    storePost(post);
    location.href = 'index.html';
});