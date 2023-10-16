import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";
import { createPostListener } from "../handlers/createPost.mjs";

document.addEventListener("DOMContentLoaded", () => {
  createPostListener();
});

const action = "/posts";
const method = "POST"; 

export async function createPost(postData) {
  const createPostURL = API_BASE_URL + action;

  try {
    const response = await authFetch(createPostURL, {
      method,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

   return await response.json();
   
  } catch (error) {
    console.error("Error creating post:", error.message);
    throw error;
  }
}

