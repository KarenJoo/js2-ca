import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";


const action = "/posts";
const method = "DELETE"; 

export async function removePost(postData) {
  if (postData.id) {
    throw new Error("Deleting a post requires a postID");
  }
  const removePostURL = `${API_BASE_URL}${action}/${postData.id}`;

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

