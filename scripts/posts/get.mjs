import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";
    
const action = "/posts";

/**
 * Retrieves a list of all posts 
 * This by making an authenticated GET request to the API endpoint.
 *
 * @returns {Promise<Object[]>} A Promise that resolves to an array of post objects.
 *
 * @example
 * ```js
 * const posts = await getPosts();
 * ```
 * // When calling this function, the user retrieves an array of post objects.
 */

export async function getPosts() {
     const getPostsURL = `${API_BASE_URL}${action}?_author=true`;
    
        const response = await authFetch(getPostsURL)
       
       return await response.json();
       
    }


/**
 * Retrieves a specific post by its ID 
 * This through an authenticated GET request.
 *
 * @param {string} id - The ID of the post to retrieve.
 * @returns {Promise<Object>} Resolves to the post object with the specified ID.
 *
 * @example
 * ```js
 * const postId = "123"; 
 * const post = await getPostById(postId);
 * ```
 * // When calling this function, the user retrieves the post object with the specified ID.
 */

export async function getPostById(id) {
    if (!id) {
        throw new Error("Get requires a postID");
      }

    const getPostURL = `${API_BASE_URL}${action}/${id}?_author=true`;
   
    const response = await authFetch(getPostURL)
      
    return await response.json();
      
   }