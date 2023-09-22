import { API_BASE_URL, registerUser } from "./registration.mjs";
import { loginUser, loginUrl, userToLogin } from './login.mjs';

const userToRegister = {
  name: "friday_student",
  email: "friday.student@stud.noroff.no",
  password: "fridayStudent123",
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;


// Log in a user
loginUser(loginUrl, userToLogin);

// registerUser(registerUrl, userToRegister);

// // log in endpoint
// // /social/auth/login

// async function loginUser(url, userData) {
//   try {
//     const postData = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     };

//     const response = await fetch(url, postData);
//     console.log(response);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const userToLogin = {
//   email: "friday.student@stud.noroff.no",
//   password: "fridayStudent123",
// };

// const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

// loginUser(loginUrl, userToLogin);
