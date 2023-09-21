export const API_BASE_URL = "https://api.noroff.dev";
const register = "/api/v1/social/auth/register";
/**
 * API call registers the user
 * @param {string} url
 * @param {object} userData
 * @returns {promise}
 * ```js
 * registerUser(registerUrl, userToRegister);
 * ```
 */

export async function registerUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
    // checking the response from an HTTP request to see if it indicates an error (chatGPT)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}
