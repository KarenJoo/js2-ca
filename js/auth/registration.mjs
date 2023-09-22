export const API_BASE_URL = "https://api.noroff.dev/api/v1";

/**
 * API call registers the user
 * @param {string} url
 * @param {object} userData
 * ```js
 * //use this function to register a new user
 * // const
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

    // Checking the response from an HTTP request to see if it indicates an error
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const userToRegister = {
  name: "friday_student",
  email: "friday.student@stud.noroff.no",
  password: "fridayStudent123",
};

const registerUrl = `${API_BASE_URL}/social/auth/register`;
