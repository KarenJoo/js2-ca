import { loginUser, loginUrl } from "../pages/login.mjs";
import { API_BASE_URL } from "../pages/registration.mjs";

// request with token
export async function getWithToken(url) {
  try {
    const token = localStorage.getItem("accessToken");
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    const json = await response.json();
  } catch (error) {
    console.log(error);
    console.error("Registration failed:", error.message);
  }
}

const postsUrl = `${API_BASE_URL}/social/posts`;

getWithToken(postsUrl);

// export { getWithToken };
