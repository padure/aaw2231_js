import { editPost, getPostById, getQueryParam } from "./utils/postController.js";

const postId = getQueryParam("id");
const editForm = document.querySelector("#edit-post-form");
const submitButton = editForm.querySelector('button[type="submit"]');

editForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = "Editing...";

  const post = {
    title: e.target.title.value,
    content: e.target.content.value,
  };

  const response = await editPost(post, postId);

  submitButton.disabled = false;
  submitButton.textContent = "Edit Post";

  location.href = "index.html";
});

(async () => {
  const post = await getPostById(postId);
  editForm.title.value = post.title;
  editForm.content.value = post.content;
})();