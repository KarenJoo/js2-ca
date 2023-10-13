import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "PUT";

export async function updatePost(postData) {
    if(!postData.id) {
        throw new Error("Updating a post requires a postID");
    }
  const updatePostURL = `${API_BASE_URL}${action}/${postData.id}`;

  try {
    const token = localStorage.getItem("accessToken");
    console.log("Access Token:", token);

    // for GET, UPDATE, PUT, DELETE
    const response = await authFetch(updatePostURL, {
      method,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const updatedPost = await response.json();
      console.log(updatedPost);
  
      return updatedPost;

    } catch (error) {
      console.error("Error updating post:", error.message);
      throw error; 
  }

}

