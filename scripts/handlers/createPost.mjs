import { createPost } from "../posts/create.mjs";

export function createPostListener() {
  console.log("createPostListener triggered");

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
      } catch (error) {
        console.error("Error creating post:", error.message);
        if (error.response) {
          console.error("Response data:", await error.response.json());
        }
      }
    });
  }
}


