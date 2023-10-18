import * as templates from "../templates/post.mjs";
import { renderSinglePostTemplate } from "../templates/post.mjs";
import * as postMethods from "../posts/index.mjs";

/**
 * Fetches a single post by ID
 * Also checks for the post ID in the URL,
 * and renders the template for the single post.
 *
 * @returns {Promise<void>} resolves when the single post template is rendered.
 *
 * @example
 * ```js 
 * await testTemplate();
 * ```
 * // When calling this function, it fetches the post by ID > checks the URL for the ID > renders the single post template.
 */

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
    
  