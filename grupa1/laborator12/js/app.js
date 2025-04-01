import { getPosts, removePost } from "./utils/postController.js";

const posts = document.querySelector(".posts-list");

window.removePostEvent = async (id) => {
  if (confirm("Esti sigur?")) {
    await removePost(id);
  }
}

(async () => {
  const postsList = await getPosts();

  postsList.forEach((post) => {
    const title = post.title || "Titlu indisponibil";
    const content = post.content || "Conținut indisponibil";

    posts.innerHTML += `<div class="card">
      <div class='buttons'>
        <button class="remove" onclick="removePostEvent('${post.id}')">x</button>
        <a href="edit.html?id=${post.id}" class="update">Edit</a>
      </div>
      <h4>${title}</h4>
      <p>${content}</p>
      <a href="show.html?id=${post.id}">Mai mult</a>
    </div>`;
  });
})();
