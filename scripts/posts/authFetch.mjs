import { getWithToken } from "../auth/token.mjs";

export async function headers() {
  try {
    const token = getWithToken("profile");

    if (!token) {
      throw new Error("Token not available");
    }

    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
  } catch (error) {
    console.error("Error getting token:", error.message);
    return {};
  }
}

export async function authFetch(url, options = {}) {
  try {
    const headersObject = await headers();
    console.log("Request Headers:", headersObject);

    const response = await fetch(url, {
      ...options,
      headers: headersObject,
    });
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error details:", errorDetails);
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${JSON.stringify(errorDetails)}`);
  }

  return response;
} catch (error) {
  console.error("Error authenticated request:", error.message);
  throw error;
}
}

