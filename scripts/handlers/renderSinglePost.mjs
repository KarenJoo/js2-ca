
function renderSinglePost(post) {
    console.log(post);
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
    // clear the media if no media element
    postMedia.src = "";
    postMedia.alt = "";
    postMedia.classList.remove("img-thumbnail");
}


// timestamps (chatGPT)
postCreated.textContent = "Created: " + new Date(post.created).toLocaleString();
postUpdated.textContent = "Updated: " + new Date(post.updated).toLocaleString();
}



export {renderSinglePost}; 