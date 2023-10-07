// allPosts.mjs
import { getWithToken } from "../auth/token.mjs";
import { renderPosts } from "../handlers/renderPosts.mjs";
import { getAllPosts } from "../helpers/API.mjs";

// (async () => {
//     try {
//         const token = localStorage.getItem("accessToken");

//         if (!token) {
//             throw new Error("Can't access token");
//         }

//         const response = await getWithToken(getAllPosts);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }

//       }
//     })
      
