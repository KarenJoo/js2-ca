import { createPost } from "../posts/create.mjs";
import { authFetch, headers } from "../posts/authFetch.mjs";

export function createPostListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      console.log("Post success!");

      const formData = new FormData(event.target);

      const postData = {
        title: formData.get("title"),
        body: formData.get("body"),
        media: formData.get("media"),
        tags: formData.get("tags"),
      };

      try {
        const response = await createPost(postData);

        console.log("Post created successfully:", response);
      } catch (error) {
        // Log more information about the error
        console.error("Error creating post:", error.message);
        if (error.response) {
          console.error("Response data:", await error.response.json());
        }
      }
    });
  }
}
