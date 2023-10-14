import { setRegisterFormListener } from "./registration.mjs";
import { setLoginFormListener } from "./login.mjs";
import { updatePost } from "../posts/update.mjs";
const path = location.pathname;


if (path === '/login/') {
  setLoginFormListener()
} else if (path === '/register/') {
setRegisterFormListener()
}

updatePost({
  id: 6442,
  title: "hey you updated",
  body: "good saturnight all",
});