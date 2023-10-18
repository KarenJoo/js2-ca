import { login } from "../auth/login.mjs";

/**
 * A listener for the login form submission.
 * When the form is submitted, it extracts form data and calls the login function.
 * *
 * @example
 * ```js``
 * setLoginFormListener();
 * ```
 * // Function calls when the login form is submitted.
 */
export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");
 
  if (form) {
  form.addEventListener("submit", (event) => {
  event.preventDefault()

  const form = event.target;
  const formData = new FormData(form);
  // get object from entries
  const profile = Object.fromEntries(formData.entries())
  // send to the API
  login(profile)
})   
  }
}

