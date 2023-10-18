import { API_BASE_URL } from "../helpers/API.mjs";

const action = "/auth/register";
const method = "post";

/**
 * Registers a new user and returns the registration result.
 *
 * @param {Object} profile - The user profile object with registration information.
 * @param {string} profile.username - The username for the new user.
 * @param {string} profile.email - The email address of the new user.
 * @param {string} profile.password - The password for the new user.
 * @returns {Promise<Object>} A Promise that resolves to the registration result.
 *
 * @example
 * const userRegistration = {
 *   username: "(desiredUsername)",
 *   email: "(userEmail@example.com)",
 *   password: "(desiredPassword)",
 * };
 *
 * try {
 *   const registrationResult = await register(userRegistration);
 *   console.log("Registration successful:", registrationResult);
 *   // You can now use the registrationResult as needed.
 * } catch (error) {
 *   console.error("Error during registration:", error.message);
 *   // Handle the error as needed.
 * }
 */

export async function register(profile) {
const registerURL = API_BASE_URL + action;
// object to string
const body = JSON.stringify(profile);
// fetch registerURL and options
const response = await fetch (registerURL, {
    headers: {
        "Content-Type": "application/json"
    },
    method,
    body,
})

const result = await response.json()
alert("You are now registered!")
return result


}