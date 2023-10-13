import { getAllPosts } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";


const method = "GET";

export async function getPosts() {
    const getPostsURL = `${getAllPosts}`;

    try {
        const token = localStorage.getItem("accessToken");
        console.log("Access Token:", token);

        // for GET, UPDATE, PUT, DELETE
        const response = await authFetch(getPostsURL);

         if (!response.ok) {
            const errorDetails = await response.json();
            console.error("Error details:", errorDetails);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }


        const getPosts = await response.json();
        console.log(getPosts);

        return getPosts;

    } catch (error) {
        console.error("Error get posts:", error.message);
        throw error;
    }
}

// export async function getPost(id) {
//     if (!id) {
//         throw new Error("Get requires a postID");
//     }

//     const getPostURL = `${API_BASE_URL}${action}/${id}`;

//     try {
//         const token = localStorage.getItem("accessToken");
//         console.log("Access Token:", token);

//         // for GET, UPDATE, PUT, DELETE
//         const response = await authFetch(getPostURL);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const getPost = await response.json();
//         console.log(getPost);

//         return getPost;

//     } catch (error) {
//         console.error("Error get post:", error.message);
//         throw error;
//     }
// }


