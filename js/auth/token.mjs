import { loginUser, loginUrl, userToLogin } from "./login.mjs";
import { API_BASE_URL } from "../register/registration.mjs";

// request with token
async function getWithToken(url) {
  try {
    console.log(url);
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
    //
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const postsUrl = `${API_BASE_URL}/social/posts`;

getWithToken(postsUrl);

const testToken = {
  test: "test token",
};
console.log(testToken);
export { testToken, getWithToken };
