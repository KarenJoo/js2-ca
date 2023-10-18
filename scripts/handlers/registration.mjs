import { register } from "../auth/register.mjs";

/**
 * A listener for the registration form submission.
 * When the form is submitted, it extracts form data with action and method, and calls the register function.
 * @example
 * ```js
 * setRegisterFormListener();
 * ```
 * // When the registration form is submitted, the listener will call the register function.
 */
export function setRegisterFormListener() {
  const form = document.querySelector("#regForm");
 
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
  register(profile)
})  
  }

}

