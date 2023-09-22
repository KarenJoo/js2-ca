export const API_BASE_URL = "https://api.noroff.dev";

/**
 * API call registers the user
 * @param {string} url
 * @param {object} userData
 * @returns {Promise<void>}
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

    // Checking the response from an HTTP request to see if it indicates an error
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

