export const API_BASE_URL = "https://api.noroff.dev/api/v1/social";
export const registerUrl = `${API_BASE_URL}/auth/register`;
export const loginUrl = `${API_BASE_URL}/auth/login`;
export const getAllPosts = `${API_BASE_URL}/posts`;
export const getSinglePost = `${API_BASE_URL}/posts/{id}`;

// export async function registerUser(url, userData) {
//   try {
//     const postData = {};
//   const response = await fetch(url, postData); {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });
//   } catch (error) {}
//   console.log (`HTTP error! Status: ${response.status}`);
//   }

//   return response.json();
// }

