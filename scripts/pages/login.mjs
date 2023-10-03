import { getWithToken } from "../auth/token.mjs";
import { API_BASE_URL, loginUrl } from "../helpers/API.mjs";


/**
 * Function to login to account
 * @param {string} url
 * @param {object} userData
 * ```js    
 * // use this function to login as a user
 * // const userToLogin
 * // console.log(loginUser)
 * ```
 */

export async function loginUser(url, userData) {
  const loginError = document.getElementById("loginError");

  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    const accessToken = json.accessToken;
    const user = json.userData;
    console.log("Access Token Value:", accessToken);
    console.log("User details:", userData);

  
    
    // Redirect to the profile page if login was successful
    window.location.href = "/profile/index.html";
  } catch (error) {
    console.error("Login failed:", error.message);
    loginError.classList.remove("d-none");
  }
}

document
  .getElementById("loginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const userToLogin = {
      email: loginEmail,
      password: loginPassword,
    };

    await loginUser(loginUrl, userToLogin);
  });

