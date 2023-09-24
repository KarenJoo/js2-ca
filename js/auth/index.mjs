import { API_BASE_URL, registerUser } from "../register/registration.mjs";
import { loginUser, loginUrl, userToLogin } from "./login.mjs";
import { getWithToken, testToken } from "./token.mjs";

// Log in a user
// loginUser(loginUrl, userToLogin);

testToken(test, getWithToken);
