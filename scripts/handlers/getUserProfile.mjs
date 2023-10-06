import { API_BASE_URL } from "../helpers/API.mjs";
import { userProfileURL } from "../helpers/API.mjs";
import { getWithToken } from "../auth/token.mjs";

export const getUserProfile = (userName) => {
    const profileURL = `${API_BASE_URL}/social/profiles/${userName}?_posts=true`;
    return fetch(profileURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
};