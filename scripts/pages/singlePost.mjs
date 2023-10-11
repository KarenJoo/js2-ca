import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "../posts/authFetch.mjs";
import { cardTemplate } from "../templates/post.mjs";
import { renderSinglePost } from "../handlers/renderSinglePost.mjs";


export async function fetchAndRenderSinglePost() {
    try {
        const postId = getPostIdFromURL();
        console.log('Post ID:', postId);
        if (!postId) {
            console.error("Post ID is missing from the URL.");
            return;
        }

        const url = `${API_BASE_URL}/social/posts/${postId}`;
        const response = await authFetch(url);
        console.log("Response:", response); // Log the response

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const singlePost = await response.json();

        const parent = document.getElementById("post");
        parent.innerHTML = ''; 

        // Render single post > isSinglePost = true
        const card = cardTemplate(singlePost, true);
        parent.appendChild(card);

        renderSinglePost(singlePost);

    } catch (error) {
        console.error("Error fetching and rendering single post:", error.message);
    }
}

// extract the post ID from the URL 
function getPostIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

document.addEventListener('DOMContentLoaded', fetchAndRenderSinglePost);
