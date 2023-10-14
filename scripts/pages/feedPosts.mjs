import { postTemplate, renderPostTemplate, renderPostTemplates} from "../templates/post.mjs";
import { getPosts } from "../posts/get.mjs";
import { renderSinglePost } from "../handlers/renderSinglePost.mjs";

export async function postTemp() {
    try {
        const posts = await getPosts();
        const postContainer = document.querySelector('#postContainer');
        postContainer.innerHTML = '';

        posts.forEach((post) => {
            const renderedPost = postTemplate(post, true);
            postContainer.appendChild(renderedPost);
        });
    } catch (error) {
        console.error("Error rendering posts:", error.message);
    }
}

postTemp();


// /singlePost.html?id=${post.id}`;

