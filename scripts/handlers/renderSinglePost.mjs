import { cardTemplate } from "../templates/post.mjs";

function renderSinglePost(post) {
    const parentElement = document.getElementById("post");
    
    // Use cardTemplate to generate the card structure and append it to the parent element
    cardTemplate(post, true, parentElement);

    // Now you can style the card as needed in renderSinglePost
    const postTitle = document.getElementById("card-title");
    const postBody = document.getElementById("card-body");
    const postTags = document.getElementById("card-tags");
    const postMedia = document.getElementById("card-media");
    const postCreated = document.getElementById("card-created");
    const postUpdated = document.getElementById("card-updated");

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