import { setRegisterFormListener } from "./registration.mjs";
import { setLoginFormListener } from "./login.mjs";
import { postTemplate } from "../templates/post.mjs";
import { renderPostTemplates } from "../templates/post.mjs";
import * as postMethods from "../posts/index.mjs";
import { createPostListener } from "./createPost.mjs";
import { updatePostListener } from "./editPost.mjs";
import { updatePost } from "../posts/index.mjs";

const path = location.pathname;


if (path === '/login/') {
  setLoginFormListener()
} else if (path === '/register/') {
setRegisterFormListener()
} else if (path === '/content/createPost.html') {
  createPostListener()
  } else if (path === '/content/editPost.html') {
    updatePostListener()
    }

  // updatePost({
  //   id: 7508,
  //   title: "can you see my",
  //   body: "update",
  //   media: "https://cdn.pixabay.com/photo/2021/01/25/07/04/hearts-5947464_1280.png",
  //   tags: "hello"
  // })
// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   console.log(posts)
//   const post = posts.pop();
//   const container = document.querySelector("#post");
//   container.innerHTML = "";
//   // Render new post template
//   renderPostTemplates(posts, container);
// }

// testTemplate();


