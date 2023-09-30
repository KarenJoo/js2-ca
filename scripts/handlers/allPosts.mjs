import { getAllPosts } from "../helpers/API.mjs";
import { getWithToken } from "../auth/token.mjs";

let allPosts;

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

  allPosts = await response.json();
  console.log("posts:", allPosts);
} catch (error) {
  console.error("Could not fetch posts:", error.message);
}

export { allPosts };