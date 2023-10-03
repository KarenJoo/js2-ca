import { getAllPosts } from "../helpers/API.mjs";
import { getWithToken } from "../auth/token.mjs";

// renderPosts.mjs
let allPosts;

function renderPosts(posts) {
  const postsContainer = document.querySelector(".container.mb-5.mt-5 .row");

  if (!postsContainer) {
    console.error("Posts not found");
    return;
  }

  postsContainer.innerHTML = "";

  // Loop through allPosts 
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.classList.add("col-12", "col-sm-4", "mb-3");

    // link to the single post page
    const postLink = document.createElement("a");
    postLink.href = `/single-post/singlePost.html?id=${post.id}`; 

    postCard.innerHTML = `
      <div class="card pr-2 pl-2">
        <img src="${post.media}" class="img-thumbnail" alt="post thumbnail" />
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text text-truncate">${post.body}</p>
          <p class="card-text">
            <small class="text-muted">Last updated ${post.created}</small>
          </p>
        </div>
      </div>
    `;

    postLink.appendChild(postCard);
    postsContainer.appendChild(postLink);
  });
}

export { renderPosts };
