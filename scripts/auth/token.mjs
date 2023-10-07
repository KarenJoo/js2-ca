export function getWithToken() {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Token not available");
    }

    return token;
  } catch (error) {
    console.error("Error getting token:", error.message);
    throw error;
  }
}
