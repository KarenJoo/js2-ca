import { setRegisterFormListener } from "./registration.mjs";
import { setLoginFormListener } from "./login.mjs";
import { postTemplate } from "../templates/post.mjs";
import { renderPostTemplates } from "../templates/post.mjs";
import * as postMethods from "../posts/index.mjs";
import { createPostListener } from "./createPost.mjs";
import { updatePostListener } from "./editPost.mjs";
import { updatePost } from "../posts/index.mjs";
import { remove } from "../storage/index.mjs";
import { removePostListener } from "./removePost.mjs";

const path = location.pathname;


if (path === '/login/index.html' || path === "/login/") {
  setLoginFormListener()
} else if (path === '/register/') {
setRegisterFormListener()
} else if (path === '/content/createPost.html') {
  createPostListener()
  } else if (path === '/content/editPost.html') {
    updatePostListener()
    } else if (path === '/scripts/handlers/removePost.mjs') {
      removePostListener()
    }
    


