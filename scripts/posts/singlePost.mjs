import { allPosts } from "../handlers/renderPosts.mjs";
import { getSinglePost } from "../helpers/API.mjs";

// singlePost.mjs

const singlePostContainer = document.getElementById("singlePostContainer");

async function fetchSinglePost(postId) {
  try {
    const response = await fetch(`https://api.noroff.dev/api/v1/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const post = await response.json();
    renderSinglePost(post);
  } catch (error) {
    console.error("Error fetching single post:", error.message);
  }
}

// Retrieve the post ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

fetchSinglePost(postId);
