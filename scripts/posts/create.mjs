import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch, headers } from "./authFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {

  const createPostURL = `${API_BASE_URL}${action}`;
  console.log("Created a post:", postData);

  try {
    const token = localStorage.getItem("accessToken");
    console.log("Access Token:", token);

    // for GET, UPDATE, PUT, DELETE
    const response = await authFetch(createPostURL, {
      method,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! response Status: ${response.status}`);
      }
  
      const createdPost = await response.json();
      console.log(createdPost);
      console.log("API Response:", createdPost);
  
      return createdPost;

    } catch (error) {
      console.error("Error creating post:", error.message);
      throw error; 
  }

}

