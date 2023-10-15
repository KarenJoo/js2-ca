import * as templates from "../templates/post.mjs";
import { renderSinglePostTemplate } from "../templates/post.mjs";
import * as postMethods from "../posts/index.mjs";

async function testTemplate() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  if (!postId) {
    console.error("Post ID not provided in the URL.");
    return;
  }

  const post = await postMethods.getPostById(postId);
  const container = document.querySelector("#postContainer");
  container.innerHTML = "";
  // Render only the single post 
  renderSinglePostTemplate(post, container);
}

testTemplate();
    
  