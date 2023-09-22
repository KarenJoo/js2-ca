// log in endpoint

import { API_BASE_URL } from "./registration.mjs";

// /social/auth/login
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
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error:", error);
  }
}

const userToLogin = {
  email: "friday.student@stud.noroff.no",
  password: "fridayStudent123",
};

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

export { loginUser, loginUrl, userToLogin };
