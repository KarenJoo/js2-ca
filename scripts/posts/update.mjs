import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";


const action = "/posts";
const method = "PUT"; 

export async function updatePost(id, postData) {
  if (!id) {
    throw new Error("Update post requires a postID");
  }

  const updatePostURL = `${API_BASE_URL}${action}/${id}`;

  try {
    const response = await authFetch(updatePostURL, {
      method,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating post:", error.message);
    throw error;
  }
}
