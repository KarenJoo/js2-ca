export const API_BASE_URL = "https://api.noroff.dev/api/v1";
/**
 * API call registers the user
 * @param {string} url
 * @param {object} userData
 * ```js
 * //use this function to register a new user
 * //
 */
export async function registerUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);

    // Checking the response from an HTTP request to see if it indicates an error
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("regForm");
  regForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nameReg = document.getElementById("regUserName").value;
    const emailReg = document.getElementById("regEmail").value;
    const passwordReg = document.getElementById("regPassword").value;

    const userToRegister = {
      name: nameReg,
      email: emailReg,
      password: passwordReg,
    };

    const registerUrl = `${API_BASE_URL}/social/auth/register`;

    try {
      // Call the registerUser function and handle the response
      await registerUser(registerUrl, userToRegister);
       // Show success message
       successMessage.classList.remove("d-none");
       // Hide error message if previously displayed
       errorMessage.classList.add("d-none");
       // Clear the form
       regForm.reset();
      // REMEMBER add success message
    } catch (error) {
      console.error("Registration failed:", error.message);
        // Show error message
      errorMessage.classList.remove("d-none");
      // Hide success message if previously displayed
      successMessage.classList.add("d-none");
    }
  });
});

