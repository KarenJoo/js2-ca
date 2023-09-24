// log in endpoint

import { API_BASE_URL } from "../register/registration.mjs";
const loginUrl = `${API_BASE_URL}/social/auth/login`;

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
    throw error;
  }
}

const userToLogin = {
  email: "friday.student@stud.noroff.no",
  password: "fridayStudent123",
};

export { loginUser, loginUrl, userToLogin };
