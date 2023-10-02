import { allPosts } from "../handlers/allPosts.mjs";

// Function to render all posts
function renderPosts() {
    const postsContainer = document.querySelector(".container.mb-5.mt-5 .row");
  
    if (!postsContainer) {
      console.error("Posts container not found");
      return;
    }
  
    postsContainer.innerHTML = "";
  
    // Loop through allPosts and append cards to container
    allPosts.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.classList.add("col-12", "col-sm-4", "mb-3");
  
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
  
      postsContainer.appendChild(postCard);
    });
  }
  
  // display posts
  renderPosts();
  