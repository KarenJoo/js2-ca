
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

export async function getPosts() {}

export async function getPost(id) {}
