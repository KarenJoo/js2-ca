
function renderSinglePost(post) {
    const postTitle = document.getElementById("singleCard-title");
    const postBody = document.getElementById("singleCard-body");

    postTitle.textContent = post.title;
    postBody.textContent = post.body;
} 

export {renderSinglePost}; 