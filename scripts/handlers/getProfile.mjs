import { API_BASE_URL } from "../helpers/API.mjs";

const profiles = "/profiles";

export async function getProfiles() {
  const profilesURL = `${API_BASE_URL}${profiles}`;
  
  try {
    const response = await fetch(profilesURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching profiles:", error.message);
    throw error;
  }
}