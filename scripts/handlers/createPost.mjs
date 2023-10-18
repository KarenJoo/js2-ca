import { createPost } from "../posts/create.mjs";

/**
 * A listener preventing the user to create a post.
 * When the user submits the form, a new post is posted with the provided data.
 *
 * @example
 * ```js
 * createPostListener(); 
 * ```
 * // The listener Will call this function, 
 * // and when the form is submitted, it will create a new post.
 */
export function createPostListener() {

  const form = document.querySelector("#createPost");
  console.log("Form element:", form);

  if (form) {
    form.addEventListener("submit", async (event) => {
      console.log("Form submitted");
      event.preventDefault();

      const formData = new FormData(event.target);
      const postData = {
        title: formData.get("title"),
        body: formData.get("body"),
        media: formData.get("media"),
        tags: [formData.get("tags")],
      };

      try {
        const response = await createPost(postData);
        console.log("Post created successfully:", response);

        window.location.href = "/feed";
        
      } catch (error) {
        console.error("Error creating post:", error.message);
        if (error.response) {
          console.error("Response data:", await error.response.json());
        }
      }
    });
  }
}


