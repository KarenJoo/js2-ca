import { handleUserRegistration } from "../pages/registration.mjs";
import { registerUser } from "../helpers/API.mjs";
import { updateProfile } from "../pages/updateProfile.mjs";
import { getProfile } from "./getProfile.mjs";

export async function editProfile() {

const form = document.querySelector("#editProfile");

const url = new URL(location.href);

const { name, email } = handleUserRegistration("profile");


if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const profile= await getProfile(name);

    form.name.value = profile.name;
    form.email.value = profile.email;
    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const form = event.target;
        const dataForm = new dataForm(form);
        const profile = Object.fromEntries(FormData.entries())
    })

    editProfile(profile)
}
}
console.log('hello');