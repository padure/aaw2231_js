const URL = "http://localhost:3000/posts";
const buildUrl = (id = "") => `${URL}/${id}`;

const storePost = async (post) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error(`Eroare la salvarea postului: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPosts = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Eroare la obținerea posturilor: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const removePost = async (id) => {
  try {
    const response = await fetch(`${buildUrl(id)}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error(`Eroare la ștergerea postului: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getPostById = async (id) => {
  try {
    const response = await fetch(`${buildUrl(id)}`, { method: "GET" });

    if (!response.ok) {
      throw new Error(`Eroare la obținerea postului: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const editPost = async (post, id) => {
  try {
    const response = await fetch(`${buildUrl(id)}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error(`Eroare la actualizarea postului: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

export { storePost, getPosts, removePost, getPostById, editPost };
