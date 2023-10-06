import { getWithToken } from "../auth/token.mjs";
import { getAllPosts } from "../helpers/API.mjs";

export async function getLatestPosts(postCount = 10) {
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
        console.log("posts:", allPosts);

        // Log posts with empty media
        const postsWithEmptyMedia = allPosts.filter((post) => !post.media);
        console.log("Posts with empty media:", postsWithEmptyMedia);

        // Get the latest posts based on postCount
        const latestPosts = allPosts.slice(0, postCount);

        return latestPosts;
    } catch (error) {
        console.error("Could not fetch posts:", error.message);
        throw error;
    }
}