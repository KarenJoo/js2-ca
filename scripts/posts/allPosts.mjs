// allposts.mjs
import { getWithToken } from "../auth/token.mjs";
import { renderPosts } from "../handlers/renderPosts.mjs";
import { getAllPosts } from "../helpers/API.mjs";

try {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("Can't access token");
  }

  // getWithToken to fetch posts
  const response = await getWithToken(getAllPosts);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const allPosts = await response.json();
  console.log("posts:", allPosts);

  // Call the renderPosts function
  renderPosts(allPosts);
} catch (error) {
  console.error("Could not fetch posts:", error.message);
}
