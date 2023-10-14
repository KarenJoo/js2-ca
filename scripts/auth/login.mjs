import { API_BASE_URL } from "../helpers/API.mjs";
import * as storage from "../storage/index.mjs"

const action = "/auth/login";
const method = "post";

export async function login(profile) {
const loginURL = API_BASE_URL + action;
// object to string
const body = JSON.stringify(profile);
// fetch loginURL and options
const response = await fetch (loginURL, {
    headers: {
        "Content-Type": "application/json"
    },
    method,
    body
})

const { accessToken, ...user } = await response.json()

// save token and user profile data separately
storage.save("token", accessToken)

storage.save("profile", user)
}



