import { updatePost } from "../posts/update.mjs";

/**
 * A listener preventing the user to update a post.
 * When the user submits the form, it updates an existing post with the provided data.
 *
 * @example
 * ```js
 * updatePostListener();
 * ```
 * // The listener will call this function,
 * // and when the form is submitted, it will update an existing post.
 */
export function updatePostListener() {
    const form = document.querySelector("#updatePost");
  
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
  
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
  
        const formData = new FormData(form);

  
        const postData = {
          title: formData.get("title"),
          body: formData.get("body"),
          media: formData.get("media"),
          tags: [formData.get("tags")],
         
        };
        
        console.log(postData); 
        try {
          await updatePost(id, postData);
  
          
          window.location.href = "/feed";

        } catch (error) {
          console.error("Error updating post:", error.message);
          if (error.response) {
            console.error("Response data:", await error.response.json());
          }
        }
      });
    }
  }