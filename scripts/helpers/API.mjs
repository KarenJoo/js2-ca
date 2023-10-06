export const API_BASE_URL = "https://api.noroff.dev/api/v1";
export const registerUrl = `${API_BASE_URL}/social/auth/register`;
export const loginUrl = `${API_BASE_URL}/social/auth/login`;
export const getAllPosts = `${API_BASE_URL}/social/posts`;
export const getSinglePost = `${API_BASE_URL}/social/posts/{id}`;
export const userProfileURL = `${API_BASE_URL}/social/profiles/{name}`;

export async function registerUser(userData) {
  const response = await fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

