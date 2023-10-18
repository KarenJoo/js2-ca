import { postTemplate } from "../templates/post.mjs";
import { renderPostTemplates } from "../templates/post.mjs";
import * as postMethods from "../posts/index.mjs";
import { filterPosts, searchListener, filterListener, getActiveFilter } from "../handlers/filterPosts.mjs";

/**
 * Fetches all posts, sets up search and filter listeners, renders post templates.
 *
 * @returns {Promise<void>} resolves when all posts are fetched and templates are rendered.
 *
 * @example
 * ```js
 * await allPostsTemplate();
 * ```
 * // When calling the function, it fetches all posts > sets up listeners > renders post templates.
 */
async function allPostsTemplate() {
    const posts = await postMethods.getPosts();
    console.log(posts);
    const post = posts.pop();
    const container = document.querySelector("#post");
    container.innerHTML = "";
    searchListener(posts, container);
    filterListener(posts, container);

    renderPostTemplates(posts, container, true);
  }
  allPostsTemplate();

