const URL = 'http://localhost:3000/posts/';

export const storePost = async (post) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    });
    const result = await response.json();
    return result;
}