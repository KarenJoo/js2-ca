import { setRegisterFormListener } from "./registration.mjs";
import { setLoginFormListener } from "./login.mjs";
import { postTemplate } from "../templates/post.mjs";
import { renderPostTemplates } from "../templates/post.mjs";
import * as postMethods from "../posts/index.mjs";

const path = location.pathname;


if (path === '/login/') {
  setLoginFormListener()
} else if (path === '/register/') {
setRegisterFormListener()
}

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


console.log('hello')