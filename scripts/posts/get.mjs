import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "./authFetch.mjs";
    
const action = "/posts";

export async function getPosts() {
     const getPostsURL = `${API_BASE_URL}${action}?_author=true`;
    
        const response = await authFetch(getPostsURL)
       
       return await response.json();
       
    }


export async function getPostById(id) {
    if (!id) {
        throw new Error("Get requires a postID");
      }

    const getPostURL = `${API_BASE_URL}${action}/${id}?_author=true`;
   
    const response = await authFetch(getPostURL)
      
    return await response.json();
      
   }