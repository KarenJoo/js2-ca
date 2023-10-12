import { getWithToken } from "../auth/token.mjs";
import { registerUser } from "../helpers/API.mjs";
import { updateProfile } from "../pages/updateProfile.mjs";
import { getProfile } from "./getProfile.mjs";

export async function editProfile() {

const form = document.querySelector("#editProfile");



if (form) {
    // pull name and email from local storage
    const { name, email } = getWithToken("profile");
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    // await API request to get values
    const profile= await getProfile(name);
    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = new formData(form);
        const profile = Object.fromEntries(FormData.entries())
    })

    editProfile(profile)
}
}
console.log('hello');