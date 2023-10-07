import { API_BASE_URL } from "../helpers/API.mjs";

export async function getWithToken() {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Token not available");
    }

    const url = `${API_BASE_URL}/posts`; 

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
    console.error("Request with token failed:", error.message);
    throw error; // Rethrow the error so that calling code can handle it
  }
}