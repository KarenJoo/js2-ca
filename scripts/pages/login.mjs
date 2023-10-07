import { getWithToken } from "../auth/token.mjs";
import { API_BASE_URL, loginUrl } from "../helpers/API.mjs";


/**
 * Function to login to account
 * @param {string} url
 * @param {object} profileData
 * ```js    
 * // function to login as a Profile
 * // const profileToLogin
 * // console.log(loginProfile)
 * ```
 */

export async function loginProfile(url, profileData) {
  const loginError = document.getElementById("loginError");

  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    };

    const response = await fetch(url, postData);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    const accessToken = json.accessToken;
    const profile = json.profileData;
    console.log("Access Token Value:", accessToken);
    console.log("Profile details:", profileData);

    localStorage.setItem("profileUser", JSON.stringify(profileData));
    const storedProfileData = localStorage.getItem("profileUser");

  
    
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
    
    const loginUser = document.getElementById("loginUser").value;
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    console.log(loginUser)
    const profileToLogin = {
      name: loginUser,
      email: loginEmail,
      password: loginPassword,
    };

    await loginProfile(loginUrl, profileToLogin);
  });

