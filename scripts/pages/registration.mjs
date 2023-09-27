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
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");
const emailErrorMessage = document.getElementById("emailErrorMessage");

async function handleUserRegistration(event) {
  event.preventDefault();

  // Hide all error messages
  hideAllErrorMessages();

  const regUsername = document.getElementById("regUserName").value;
  const regEmail = document.getElementById("regEmail").value;
  const regPassword = document.getElementById("regPassword").value;

  // Email address validation
  if (!validateEmail(regEmail)) {
    console.error("Invalid email address");
    successMessage.classList.add("d-none");
    emailErrorMessage.classList.remove("d-none");
    return;
  }

  const user = {
    name: regUsername,
    email: regEmail,
    password: regPassword,
  };

  console.log(user);

  try {
    const response = await registerUser(user);

    // success message
    successMessage.classList.remove("d-none");
    // Hide error message if previously displayed
    errorMessage.classList.add("d-none");
    // Clear the form
    regForm.reset();

    setTimeout(() => {
      successMessage.classList.add("d-none");
    }, 5000);
  } catch (error) {
    // error message
    console.error("Registration failed:", error.message);

    console.error("Registration failed:", error.message);
    // Show error message
    errorMessage.classList.remove("d-none");
    // Hide success message if previously displayed
    successMessage.classList.add("d-none");
  }
}

// (chatGPT)
function validateEmail(email) {
  // check for @noroff.no or @stud.noroff.no
  const emailRegex = /@(noroff\.no|stud\.noroff\.no)$/;

  return emailRegex.test(email);
}

function hideAllErrorMessages() {
  errorMessage.classList.add("d-none");
  emailErrorMessage.classList.add("d-none");
}

registrationForm.addEventListener("submit", handleUserRegistration);
