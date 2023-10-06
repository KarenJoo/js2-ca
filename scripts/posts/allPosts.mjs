import { getWithToken } from "../auth/token.mjs";
import { renderPosts } from "../handlers/renderPosts.mjs";
import { getAllPosts } from "../helpers/API.mjs";
import { getLatestPosts } from "../handlers/getLatestPosts.mjs";


(async () => {
  try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
          throw new Error("Can't access token");
      }

      const latestPosts = await getLatestPosts(10); 
      console.log("latest posts:", latestPosts);

    
      renderPosts(latestPosts);
  } catch (error) {
      console.error("Error fetching and rendering latest posts:", error.message);
  }
})();
