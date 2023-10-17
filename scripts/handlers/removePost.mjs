import { removePost } from "../posts/remove.mjs";

export function removePostListener() {
    const deletePostBtn = document.querySelector("#deletePostBtn");
  
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
  
    if (deletePostBtn) {
      deletePostBtn.addEventListener("click", async (event) => {
    event.preventDefault(); 

        try {
          await removePost(id);
          console.log("Post deleted successfully");
  

        } catch (error) {
          console.error("Error deleting post:", error.message);
          if (error.response) {
            console.error("Response data:", await error.response.json());
          }
        }
      });
    }
  }