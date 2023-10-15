import { postTemplate } from "../templates/post.mjs";
import { renderPostTemplates } from "../templates/post.mjs";
import * as postMethods from "../posts/index.mjs";


async function allPostsTemplate() {
    const posts = await postMethods.getPosts();
    console.log(posts)
    const post = posts.pop();
    const container = document.querySelector("#post");
    container.innerHTML = "";
   
    renderPostTemplates(posts, container, true);
  }
  
  allPostsTemplate();

