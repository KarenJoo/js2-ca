import { setRegisterFormListener } from "./registration.mjs";
import { setLoginFormListener } from "./login.mjs";
import * as post from "../posts/index.mjs";

const path = location.pathname;


if (path === '/login/') {
  setLoginFormListener()
} else if (path === '/register/') {
setRegisterFormListener()
}

// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
post.getPosts().then(console.log)