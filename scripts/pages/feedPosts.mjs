import { postTemplate } from "../templates/post.mjs";
import { renderPostTemplates } from "../templates/post.mjs";
import * as postMethods from "../posts/index.mjs";
import { filterPosts, searchListener, filterListener, getActiveFilter } from "../handlers/filterPosts.mjs";


async function allPostsTemplate() {
  try {
    const posts = await postMethods.getPosts();
    console.log(posts);

    if (!Array.isArray(posts)) {
      throw new Error("Invalid data format: posts should be an array");
    }

    const post = posts.pop();
    const container = document.querySelector("#post");
    container.innerHTML = "";
    searchListener(posts, container);
    filterListener(posts, container);

    renderPostTemplates(posts, container, true);
  } catch (error) {
    console.log("error fetching posts:", error)
  }
}
  allPostsTemplate();

