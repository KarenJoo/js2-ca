// import { getWithToken } from "../auth/token.mjs";
// import { API_BASE_URL } from "../helpers/API.mjs";
// import { authFetch } from "../helpers/authFetch.mjs";



// const action = "/posts";
// const method = "post";

// export async function createPost(postData) {
//     const createPostURL = API_BASE_URL + action; 
//     const token = getWithToken("token");

//     try {
//         const response = await authFetch(createPostURL, {
//           method,
//           body: JSON.stringify(postData),
//         })
    
//         const result = await response.json();

//         console.log(result);
// return result;
//       } catch (error) {
//         console.error("Error creating post:", error.message);
//       }
//     }
    
//     createPost ( {
//         "title": "Dizmiss Post",
//         "body": "Check edit",
//         "tags": [],
//         "media": null,
//         "created": "2023-10-01T15:41:09.439Z",
//         "updated": "2023-10-01T15:41:09.439Z",
//         "id": 2118,
//       })
   