import { API_BASE_URL } from "../helpers/API.mjs";
import { authFetch } from "../posts/authFetch.mjs";


const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
    if (!profileData.name) {
        throw new Error("Update requires name");
    }

    const updateProfileURL = `${API_BASE_URL}${action}/${profileData.name}`;

    const response = await authFetch(updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
    })

    return await response.json();
} 