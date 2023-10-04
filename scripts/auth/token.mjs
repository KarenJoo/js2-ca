import { API_BASE_URL } from "../helpers/API.mjs";
import { registerUrl } from "../helpers/API.mjs";


// request with token
export async function getWithToken(url) {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Token not available");
    }

    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.log(error);
    console.error("Request with token failed:", error.message);
  }
}
