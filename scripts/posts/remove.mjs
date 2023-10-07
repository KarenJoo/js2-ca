import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "DELETE";

export async function removePost(id) {
    if (!id) {
        throw new Error("Deleting a post requires a postID");
    }
    const updatePostURL = `${API_BASE_URL}${action}/${id}`;

    try {
        const token = localStorage.getItem("accessToken");
        console.log("Access Token:", token);

        // for GET, UPDATE, PUT, DELETE
        const response = await authFetch(updatePostURL, {
            method,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const updatePost = await response.json();
        console.log(updatePost);

        return updatePost;

    } catch (error) {
        console.error("Error deleting post:", error.message);
        throw error;
    }
}
