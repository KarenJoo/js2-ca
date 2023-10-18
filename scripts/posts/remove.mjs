import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";
import { removePostListener } from "../handlers/removePost.mjs";

document.addEventListener("DOMContentLoaded", () => {
  removePostListener();
});

const action = "/posts";
const method = "DELETE"; 

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

