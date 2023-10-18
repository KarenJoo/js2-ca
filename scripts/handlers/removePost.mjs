import { removePost } from "../posts/remove.mjs";

/**
 * A listener for the delete post button.
 * When the button is clicked, it retrieves the post ID from the URL > calls the removePost function > deletes the post.
 * @example
 * ```js
 * removePostListener();
 * ```
 * // When the delete button is clicked, it will delete the post by its ID.
 */

export function removePostListener() {
    const deletePostBtn = document.querySelector("#deletePostBtn");
  
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
  
    if (deletePostBtn) {
      deletePostBtn.addEventListener("click", async (event) => {
    event.preventDefault(); 

        try {
          await removePost(id);
  

        } catch (error) {
          console.error("Error deleting post:", error.message);
          if (error.response) {
            console.error("Response data:", await error.response.json());
          }
        }
      });
    }
  }