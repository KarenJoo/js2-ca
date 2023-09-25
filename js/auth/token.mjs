import { loginUser, loginUrl } from "./login.mjs";
import { API_BASE_URL } from "../register/registration.mjs";

// request with token
async function getWithToken(url) {
  try {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
    console.error("Registration failed:", error.message);

  }
}

const postsUrl = `${API_BASE_URL}/social/posts`;

getWithToken(postsUrl);


export { getWithToken };
