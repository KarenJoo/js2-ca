import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";
import { createPostListener } from "../handlers/createPost.mjs";

document.addEventListener("DOMContentLoaded", () => {
  createPostListener();
});

const action = "/posts";
const method = "POST"; 

/**
 * Creates a new post 
 * This is done by making an authenticated POST request to the specified API endpoint.
 *
 * @param {Object} postData - The data for the new post, including title, body, media, and tags.
 * @param {string} postData.title - The post title
 * @param {string} postData.body - The post body content
 * @param {string} postData.media - The post media(image) content
 * @param {string[]} postData.tags - The post tags as arrays []
 * @returns {Promise<Object>} Returns the response JSON of the created post.
 *
 * @example
 * ```js
 * const postData = {
 *   title: "New Post Title",
 *   body: "This is the content of the new post.",
 *   media: "https://example.com/image.jpg",
 *   tags: ["tag1", "tag2"],
 * };
 * const createdPost = await createPost(postData);
 * ```
 * // When calling this function, the user retrieves the response JSON of the created post.
 */
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

