import { register } from "../auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#regForm");
 
form.addEventListener("submit", (event) => {
  event.preventDefault()

  const form = event.target;
  const formData = new FormData(form);
  // get object from entries
  const profile = Object.fromEntries(formData.entries())
  const action = form.action;
  const method = form.method; 

  // send to the API
  register(profile)
}) 
}

