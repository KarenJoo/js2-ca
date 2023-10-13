import { postTemplate } from "../templates/post.mjs";

function renderSinglePost(post) {
    const parentElement = document.getElementById("post");
    
    // Use postTemplate to generate the post structure and append it to the parent element
    postTemplate(post, true, parentElement);

    // Now you can style the post as needed in renderSinglePost
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const postTags = document.getElementById("post-tags");
    const postMedia = document.getElementById("post-media");
    const postCreated = document.getElementById("post-created");
    const postUpdated = document.getElementById("post-updated");

    postTitle.textContent = post.title;
    postBody.textContent = post.body;

    // Display tags
    if (post.tags && post.tags.length > 0) {
        postTags.textContent = "Tags: " + post.tags.join(", ");
    } else {
        postTags.textContent = "";
    }

    // Display media/image
    if (post.media) {
        postMedia.src = post.media;
        postMedia.alt = "Post Media";
        postMedia.classList.add("img-thumbnail");
    } else {
        postMedia.src = "";
        postMedia.alt = "";
        postMedia.classList.remove("img-thumbnail");
    }

    postCreated.textContent = "Created: " + new Date(post.created).toLocaleString();
    postUpdated.textContent = "Updated: " + new Date(post.updated).toLocaleString();
}

export { renderSinglePost };