import { setRegisterFormListener } from "./registration.mjs";
import { setLoginFormListener } from "./login.mjs";


const path = location.pathname;


if (path === '/login/') {
  setLoginFormListener()
} else if (path === '/register/')
setRegisterFormListener()