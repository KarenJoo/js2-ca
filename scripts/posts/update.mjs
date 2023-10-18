import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";
import { updatePostListener } from "../handlers/editPost.mjs";

document.addEventListener("DOMContentLoaded", () => {
  updatePostListener();
});

const action = "/posts";
const method = "PUT"; 

/**
 * Updates a post 
 * This with the specified post ID using the provided post data.
 *
 * @param {string} id - The ID of the post to be updated.
 * @param {Object} postData - The data to update the post with.
 * @param {string} postData.title - The new title for the updated post.
 * @param {string} postData.body - The new body for the updated post.
 * @param {string} postData.media - The new media/image for the updated post.
 * @param {string[]} postData.tags - Tags for the updated post, in arrays [].
 * @returns {Promise<Object>} Resolves to the updated post data.
 *
 * @example
 * ```js
 * const postId = "123"; 
 * const updatedPostData = {
 *   title: "New Title",
 *   body: "Updated content",
 *   media: "new-media-url.jpg",
 *   tags: ["tag1", "tag2"],
 * };
 * try {
 *   const updatedPost = await updatePost(postId, updatedPostData);
 *   console.log("Post updated successfully:", updatedPost);
 * } catch (error) {
 *   console.error("Error updating post:", error.message);
 *   if (error.response) {
 *     console.error("Response data:", await error.response.json());
 *   }
 * }
 * ```
 */
export async function updatePost(id, postData) {
  if (!id) {
    throw new Error("Update post requires a postID");
  }

  const updatePostURL = `${API_BASE_URL}${action}/${id}`;

  try {
    const response = await authFetch(updatePostURL, {
      method,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating post:", error.message);
    throw error;
  }
}
