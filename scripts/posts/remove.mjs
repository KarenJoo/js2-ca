import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";
import { removePostListener } from "../handlers/removePost.mjs";

document.addEventListener("DOMContentLoaded", () => {
  removePostListener();
});

const action = "/posts";
const method = "DELETE"; 

/**
 * Removes a post 
 * This by making an authenticated DELETE request to the specified API endpoint.
 *
 * @param {string} id - The ID of the post to be deleted.
 * @returns {Promise<Object>} resolves to the response data after successfully deleting the post.
 *
 * @example
 * ```js 
 * const postId = "123"; 
 * const response = await removePost(postId);
 * ```
 * // When calling this function, the user retrieves response data after successfully deleting the post.
 */
export async function removePost(id) {
  if (!id) {
    throw new Error("Deleting a post requires a postID");
  }
  const removePostURL = `${API_BASE_URL}${action}/${id}`;

  try {
    const response = await authFetch(removePostURL, {
      method
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

   return await response.json();
   
   
  } catch (error) {
    console.error("Error deleting post:", error.message);
    throw error;
  }
}

