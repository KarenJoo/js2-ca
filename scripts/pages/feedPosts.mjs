// import { getPosts } from "../posts/get.mjs";
// import { authFetch } from "../posts/authFetch.mjs";
// import { cardTemplate, timeAgo, renderCardTemplate, renderCardTemplates } from "../templates/post.mjs"
// import { renderSinglePost } from "../handlers/renderSinglePost.mjs";


// async function postTemp() {
//     // get all posts
//     const posts = await getPosts();
//     // single post in postContainer
//     const postContainer = document.querySelector('#post');
//     // render post

//     postContainer.innerHTML = '';
//     renderCardTemplates(posts, postContainer);
// }

// postTemp();

// const parent = document.getElementById("post");
// posts.forEach((post) => {
//     const card = cardTemplate(post);
//     parent.appendChild(card);
// });
import { cardTemplate, renderCardTemplate, renderCardTemplates } from "../templates/post.mjs";
import { getPosts } from "../posts/get.mjs";
import { renderSinglePost } from "../handlers/renderSinglePost.mjs";

export async function postTemp() {
    const posts = await getPosts();
    const postContainer = document.querySelector('#post');
    postContainer.innerHTML = '';

    posts.forEach((post) => {
        const card = cardTemplate(post, true);
        postContainer.appendChild(card);
    });
}

postTemp();


// /singlePost.html?id=${post.id}`;

