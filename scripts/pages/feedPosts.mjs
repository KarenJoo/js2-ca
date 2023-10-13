import { postTemplate, renderPostTemplate, renderPostTemplates} from "../templates/post.mjs";
import { getPosts } from "../posts/get.mjs";
import { renderSinglePost } from "../handlers/renderSinglePost.mjs";

export async function postTemp(postData) {
    const posts = await getPosts();
    const postContainer = document.querySelector('#postContainer');
    postContainer.innerHTML = '';

    posts.forEach((post) => {
        const postElement = postTemplate(post, true);
        postContainer.appendChild(post);
    });
}

postTemp();


// /singlePost.html?id=${post.id}`;

