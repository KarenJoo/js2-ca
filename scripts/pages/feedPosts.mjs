import { getPosts } from "../posts/get.mjs";
import { authFetch } from "../posts/authFetch.mjs";
import { cardTemplate, timeAgo, renderCardTemplate, renderCardTemplates } from "../templates/post.mjs"


async function postTemp() {
    // get all posts
    const posts = await getPosts();
    // single post in postContainer
    const postContainer = document.querySelector('#post');
    // render post

    postContainer.innerHTML = '';
    renderCardTemplates(posts, postContainer);
}

postTemp();