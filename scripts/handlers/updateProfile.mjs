import { load } from "../storage/index.mjs";
import { updateProfile } from "../pages/editProfile.mjs";

export async function updateProfileListener() {

const form = document.querySelector("#editProfile");

if (form) {
    const { name, email } = load("profile")
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile= await updateProfile(name);

    
    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const form = event.target;
        const dataForm = new dataForm(form);
        const profile = Object.fromEntries(FormData.entries())

        profile.name = name;
        profile.email = email;
    })

    updateProfile(profile)
}
}

console.log('hello')