import { API_BASE_URL } from "../helpers/API.mjs";
import * as storage from "../storage/index.mjs";
import { getProfiles } from "../path-to-profileApi/profileApi.mjs";
import { getUserName } from "../handlers/getUserName.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_BASE_URL + action;
  const body = JSON.stringify(profile);

  try {
    // Fetch login data
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse login response
    const { accessToken, ...user } = await response.json();

    // Save token and user profile data separately
    storage.save("token", accessToken);
    storage.save("profile", user);

    // Fetch profiles
    const profiles = await getProfiles();

    // Extract names from profiles
    const profileNames = profiles.map((profile) => profile.name);

    console.log("Profile names:", profileNames);

    getUserName();


    alert("You are now logged in!");
  } catch (error) {
    console.error("Error during login:", error.message);
   
  }
}
