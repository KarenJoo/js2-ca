import { setRegisterFormListener } from "./registration.mjs";


const path = location.pathname;

if (path.includes('/content/createPost.html')) {
  createPostListener();
} else if (path.includes('/content/editPost.html')) {
  editPostListener();
}

setRegisterFormListener();