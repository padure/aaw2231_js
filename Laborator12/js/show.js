import { getPostById } from "./utils/postController.js";

const postElement = document.querySelector(".post");

const postId = location.href.slice(location.href.indexOf("?id=") + 4);

(async () => {
  const post = await getPostById(postId);

  postElement.innerHTML += `<div class="card card-single">
      <h4>${post.title}</h4>
      <p>${post.content}</p>
    `;
})();
