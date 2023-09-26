// log in endpoint

import { API_BASE_URL } from "./registration.mjs";
const loginUrl = `${API_BASE_URL}/social/auth/login`;

let userToLogin = {};
export { loginUser, loginUrl, userToLogin };

/**
 * Function to login to account
 * @param {string} url
 * @param {object} userData
 * ```js
 * // use this function to login as a user
 * // const userToLogin
 * // console.log(userToLogin)
 * ```
 */

async function loginUser(url, userData) {
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
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}

document
  .getElementById("loginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    userToLogin = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      // Call the login function and handle the response
      await loginUser(loginUrl, userToLogin);
      console.log(userToLogin); // Now you can log userToLogin here
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  });
