import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "POST";

export async function createPost(postData) {
    if(!postData.id) {
        throw new Error("Creating a post requires a postID");
    }
  const createPostURL = `${API_BASE_URL}${action}`;

  try {
    const token = localStorage.getItem("accessToken");
    console.log("Access Token:", token);

    // for GET, UPDATE, PUT, DELETE
    const response = await authFetch(createPostURL, {
      method,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const createPost = await response.json();
      console.log(createPost);
  
      return createPost;

    } catch (error) {
      console.error("Error creating post:", error.message);
      throw error; 
  }

}

