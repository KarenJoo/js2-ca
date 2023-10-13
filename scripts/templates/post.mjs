
export function postTemplate(postData, isSinglePost) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post", "col-12", "col-sm-4", "mb-3");

    const row = document.createElement("div");
    row.classList.add("row");

    const post = document.createElement("div");
    post.classList.add("post", "pr-2", "pl-2", "col");
    post.dataset.postId = postData.id;

    if (postData.media) {
        // image/media
        const img = document.createElement("img");
        img.classList.add("img-thumbnail");
        img.src = postData.media;
        img.alt = `Post Image from ${postData.title}`;

        post.appendChild(img);
    }

    if (isSinglePost) {
        postContainer.classList.add("clickable");
        postContainer.addEventListener('click', () => {
            window.location.href = `/single-post/index.html?id=${postData.id}`;
        });

        // Display information in single post view
        const postBody = document.createElement("div");
        postBody.classList.add("post-body");

        const postTitle = document.createElement("h2");
        postTitle.classList.add("post-title");
        postTitle.innerText = postData.title;

        const postText = document.createElement("p");
        postText.classList.add("post-text");
        postText.innerText = postData.body;

        const lastUpdated = document.createElement("p");
        lastUpdated.classList.add("post-text", "text-muted");
        lastUpdated.innerText = `Last updated ${timeAgo(postData.updated)} ago`;

        // append to post body
        postBody.appendChild(postTitle);
        postBody.appendChild(postText);
        postBody.appendChild(lastUpdated);

        post.appendChild(postBody);
    }

    postContainer.appendChild(post);

    return postContainer;
}

// function to calculate time (chatGPT)
export function timeAgo(dateString) {
    const now = new Date();

    // Convert the date string > Date object
    const postDate = new Date(dateString);
    // calculate time diff in ms
    const diffMilliseconds = now - postDate;

    //converting ms to sec, min, hours
    const seconds = Math.floor(diffMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} days`;
    } else if (hours > 0) {
        return `${hours} hours`;
    } else if (minutes > 0) {
        return `${minutes} minutes`;
    } else {
        return `${seconds} seconds ago`;
    }
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
}