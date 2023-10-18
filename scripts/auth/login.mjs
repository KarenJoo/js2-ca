import { API_BASE_URL } from "../helpers/API.mjs";
import * as storage from "../storage/index.mjs";
import { getProfiles } from "../helpers/API.mjs";
const action = "/auth/login";
const method = "post";

/**
 * Logs in a user and saves their access token and profile data.
 *
 * @param {Object} profile - The user profile objects login information.
 * @param {string} profile.username - The username of the user
 * @param {string} profile.password - The password of the user
 * @returns {Promise} A Promise that resolves when the login is successful
 * @example
 * ```js
 * const userProfile = {
 *   username: "(userName)",
 *   password: "(password)",
 * };
 *
 * try {
 *   await login(userProfile);
 *   console.log("Login successful!");
 * } catch (error) {
 *   console.error("Error during login:", error.message);
 * }
 * // Only registered users gets logged in
 ** ```
 */ 

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

    if (response.ok) {
        window.location.replace("/profile/index.html");
      }
  
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  }