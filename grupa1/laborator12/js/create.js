import { storePost } from "./utils/postController.js";

const createForm = document.querySelector("#create-post-form");
const submitButton = createForm.querySelector('button[type="submit"]');

createForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = "Creating...";

  const post = {
    title: e.target.title.value,
    content: e.target.content.value,
  };

  await storePost(post);

  submitButton.disabled = false;
  submitButton.textContent = "Create Post";
  
  location.href = "index.html";
});
