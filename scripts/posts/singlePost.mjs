// import { getSinglePost } from "../helpers/API.mjs";
// import { renderSinglePost } from "../handlers/renderSinglePost.mjs";
// import { getWithToken } from "../auth/token.mjs";


// const singlePostContainer = document.getElementById("singlePostContainer");

// async function fetchSinglePost(postId) {
//   try {
//     const url = `${getSinglePost.replace('{id}', postId)}`;
//     const response = await getWithToken(url); 
//     console.log(response);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const post = await response.json();
//     renderSinglePost(post);
//   } catch (error) {
//     console.error("Error fetching single post:", error.message);
//   }
// }

// const urlParams = new URLSearchParams(window.location.search);
// const postId = urlParams.get('id');

// fetchSinglePost(postId);
