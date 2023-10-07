import { getWithToken } from "../auth/token.mjs";

export function headers() {
  try {
    const token = getWithToken("profile"); // Pass the endpoint you want to access

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
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}