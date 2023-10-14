import { API_BASE_URL } from "../helpers/API.mjs";

const action = "/auth/register";
const method = "post";

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