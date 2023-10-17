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

  
        const postData = {
          title: formData.get("title"),
          body: formData.get("body"),
          media: formData.get("media"),
          tags: [formData.get("tags")],
         
        };
        
        console.log(postData); 
        try {
          await updatePost(id, postData);
          console.log("Post updated successfully");
  
          
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