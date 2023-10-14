import { API_BASE_URL } from "../helpers/API.mjs";

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

const result = await response.json()
console.log(result);

}
