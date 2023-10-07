import { getWithToken } from "../auth/token.mjs";

export async function headers() {
  try {
    const token = await getWithToken("profile");

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

export async function authFetch(url, options) {
  try {
    const headersObject = await headers();
    console.log("Request Headers:", headersObject);

    const response = await fetch(url, {
      ...options,
      headers: headersObject,
    });

    return response;
  } catch (error) {
    console.error("Error authenticated request:", error.message);
    throw error;
  }
}
