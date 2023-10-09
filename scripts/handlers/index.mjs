import * as listeners from "../helpers/barrel.mjs";
import { createPost } from "../posts/create.mjs";
import { updatePost } from "../posts/update.mjs";
import { createPostListener } from "../helpers/barrel.mjs";
const path = location.pathname;

if (path.includes('/content/createPost.html')) {
  listeners.createPostListener();
} else if (path.includes('/content/editPost.html')) {
  listeners.editPostListener();
}