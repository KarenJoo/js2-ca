import { getWithToken } from "../auth/token.mjs";
import { getAllPosts } from "../helpers/API.mjs";

export async function getLatestPosts(pageSize = 20, page = 1) {
    try {
      const token = localStorage.getItem("accessToken");
  
      if (!token) {
        throw new Error("Can't access token");
      }
  
    
      const response = await getWithToken(getAllPosts);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const allPosts = await response.json();
  
      // Calculate the start and end index (chatGPT)
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
  
      // Fetch and display the 20 posts 
      const latestPosts = allPosts.slice(startIndex, endIndex);
  
      return latestPosts;
    } catch (error) {
      console.error("Could not fetch posts:", error.message);
      throw error;
    }
  }
  
  