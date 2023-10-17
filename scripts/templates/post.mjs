import { timeAgo } from "../posts/timeAgo.mjs";
import { load } from "../storage/index.mjs";

const profile = load("profile");
const { name: userName } = profile;

export function postTemplate(postData, isClickable = false) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("col-12", "col-md-4", "mb-2");
    const post = document.createElement("div");
    post.classList.add("card", "mb-3", "mx-1", "shadow-sm", "h-100");

    const img = document.createElement("img");
    img.classList.add("img-thumbnail");

    // Set post's media > if not replace with image
    img.src = postData.media || "../img/post-1.jpg";
    img.alt = `Post Image from ${postData.title}`;

    const postBody = document.createElement("div");
    postBody.classList.add("card-body");

    const postTitle = document.createElement("h5");
    postTitle.classList.add("card-title");
    postTitle.innerText = postData.title;

    const postText = document.createElement("p");
    postText.classList.add("card-text", "text-truncate");
    postText.innerText = postData.body;

    const lastUpdated = document.createElement("p");
    lastUpdated.classList.add("card-text", "text-muted");
    lastUpdated.innerText = `Last updated ${timeAgo(postData.updated)} ago`;

    postBody.appendChild(postTitle);
    postBody.appendChild(postText);
    postBody.appendChild(lastUpdated);

    post.appendChild(img);
    post.appendChild(postBody);

    postContainer.appendChild(post);

    if (isClickable) {
        postContainer.addEventListener("click", () => {
          window.location.href = `/post/index.html?id=${postData.id}`;
        });
        postContainer.style.cursor = "pointer";
      }
    
    // Check if the user is === author
    const { author } = postData;
    const isAuthorAndUser = author && author.name === userName;

    if (isAuthorAndUser) {
      const editPostBtn = document.createElement("button");
      editPostBtn.classList.add("btn", "btn-primary");
      editPostBtn.innerText = "Edit post";

      editPostBtn.addEventListener("click", () => {
        // Execute > editPost.html with the post ID
        window.location.href = `/content/editPost.html?id=${postData.id}`;
      });

      postBody.appendChild(editPostBtn);
    }
  
    return postContainer;
}

export function renderSinglePostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent, isClickable = false) {
    parent.append(...postDataList.map(postData => postTemplate(postData, isClickable)));
}
  
