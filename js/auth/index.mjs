import { API_BASE_URL, registerUser } from "./registration.mjs";

const userToRegister = {
  name: "friday_student",
  email: "friday.student@stud.noroff.no",
  password: "fridayStudent123",
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

registerUser(registerUrl, userToRegister);
