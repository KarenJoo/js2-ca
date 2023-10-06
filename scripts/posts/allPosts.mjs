// allPosts.mjs
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

        const latestPosts = await getLatestPosts(20); // Change 20 to the desired post count
        console.log("latest posts:", latestPosts);

        // Call the renderPosts function with the latest posts
        renderPosts(latestPosts);
    } catch (error) {
        console.error("Error fetching and rendering latest posts:", error.message);
    }
})();
