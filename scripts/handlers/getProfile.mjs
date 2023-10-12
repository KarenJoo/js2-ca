import { getWithToken } from "../auth/token.mjs";
import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "../posts/authFetch.mjs";

const action = "/profiles";

export async function getProfiles() {
    const updateProfileURL = `${API_BASE_URL}${action}`;

    const response = await authFetch(updateProfileURL)

    return await response.json();
}

export async function getProfile(name) {
    if (!name) {
        throw new Error("Get requires nameID");
    }

    const getProfileURL = `${API_BASE_URL}${action}/${name}`;

    const response = await authFetch(getProfileURL)

    return await response.json();
}
