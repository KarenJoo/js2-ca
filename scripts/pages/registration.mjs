import { registerUser } from "../helpers/API.mjs";

/**
 * API call registers the user
 * @param {string} url
 * @param {object} userData
 * ```js
 * //use this function to register a new user
 * //
 */

const registrationForm = document.getElementById("regForm");

async function handleUserRegistration(event) {
  event.preventDefault();

  const regUsername = document.getElementById("regUserName").value;
  const regEmail = document.getElementById("regEmail").value;
  const regPassword = document.getElementById("regPassword").value;

  const user = {
    name: regUsername,
    email: regEmail,
    password: regPassword,
  };

  try {
    const response = await registerUser(user);

    // success message
    successMessage.classList.remove("d-none");
    //        // Hide error message if previously displayed
    errorMessage.classList.add("d-none");
    //        // Clear the form
    regForm.reset();
  } catch (error) {
    // error message
    console.error("Registration failed:", error.message);

    console.error("Registration failed:", error.message);
    //         // Show error message
    errorMessage.classList.remove("d-none");
    //       // Hide success message if previously displayed
    successMessage.classList.add("d-none");
  }
}

registrationForm.addEventListener("submit", handleUserRegistration);

