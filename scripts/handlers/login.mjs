import { login } from "../auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");
 
  if (form) {
  form.addEventListener("submit", (event) => {
  event.preventDefault()

  const form = event.target;
  const formData = new FormData(form);
  // get object from entries
  const profile = Object.fromEntries(formData.entries())
  const action = form.action;
  const method = form.method; 

  // send to the API
  login(profile)
})   
  }
}

