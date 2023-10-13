import { createPost } from "../posts/create.mjs";
import { updatePost } from "../posts/update.mjs";
import { createPostListener } from "../handlers/createPost.mjs"
import {editPostListener} from "../handlers/editPost.mjs"
const path = location.pathname;

if (path.includes('/content/createPost.html')) {
  createPostListener();
} else if (path.includes('/content/editPost.html')) {
  editPostListener();
}