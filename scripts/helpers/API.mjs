export const API_BASE_URL = "https://api.noroff.dev/api/v1";
export const registerUrl = `${API_BASE_URL}/social/auth/register`;

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
