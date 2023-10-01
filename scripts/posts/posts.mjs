import { allPosts } from "../handlers/allPosts.mjs";

// Function to create a card for a post
function createPostCard(post) {
    const card = document.createElement("div");
    card.classList.add("col-12", "col-sm-4", "mb-3");
  
    card.innerHTML = `
      <div class="card pr-2 pl-2">
        <img src="${post.media}" class="img-thumbnail" alt="post image" />
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text text-truncate">${post.body}</p>
          <p class="card-text">
            <small class="text-muted">Last updated ${post.created}</small>
          </p>
          <p class="card-text">
            <small class="text-muted">Tags: ${post.tags.join(", ")}</small>
          </p>
          <p class="card-text">
            <small class="text-muted">Post ID: ${post.id}</small>
          </p>
          <p class="card-text">
            <small class="text-muted">Comments: ${post._count.comments}</small>
          </p>
          <p class="card-text">
            <small class="text-muted">Reactions: ${post._count.reactions}</small>
          </p>
        </div>
      </div>
    `;
  
    return card;
  }
  
  // Function to render all posts
function renderPosts() {
    const postsContainer = document.querySelector(".container.mb-5.mt-5 .row");
    if (!postsContainer) {
      console.error("Posts container not found");
      return;
    }
  
    // Clear existing content
    postsContainer.innerHTML = "";
  
    // Loop through allPosts and append cards to the container
    allPosts.forEach(function (post) {
      const postCard = createPostCard(post);
      postsContainer.appendChild(postCard);
    });
  }
  
  // Call renderPosts to display posts
  renderPosts();
  