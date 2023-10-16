import { updatePost } from "../posts/update.mjs";

export function updatePostListener() {
    const form = document.querySelector("#updatePost");
  
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
  
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("Post success!");
  
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());
        post.id = id;
  
        const postData = {
          title: formData.get("title"),
          body: formData.get("body"),
          media: formData.get("media"),
          tags: [formData.get("tags")],
          id: post.id,
        };
  
        try {
          await updatePost(postData);
          console.log("Post updated successfully");
  
          // Redirect to the updated post
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