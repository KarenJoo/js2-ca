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

  posts.forEach((post) => {
    const { id, media, title, body, created } = post;

    const postCard = document.createElement("div");
    postCard.classList.add("col-12", "col-sm-4", "mb-3");

    // link to the single post page
    const postLink = document.createElement("a");
    postLink.href = `/single-post/singlePost.html?id=${id}`;

    const card = document.createElement("div");
    card.classList.add("card", "pr-2", "pl-2");

    const img = document.createElement("img");
    img.src = media;
    img.alt = "post thumbnail";
    img.classList.add("img-thumbnail");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titleElement = document.createElement("h5");
    titleElement.classList.add("card-title");
    titleElement.textContent = title;

    const bodyElement = document.createElement("p");
    bodyElement.classList.add("card-text", "text-truncate");
    bodyElement.textContent = body;

    const timestamp = document.createElement("p");
    timestamp.classList.add("card-text");
    const smallCreated = document.createElement("small");
    smallCreated.classList.add("text-muted");
    smallCreated.textContent = `Last updated ${created}`;
    timestamp.appendChild(smallCreated);

    // Append everything together
    cardBody.appendChild(titleElement);
    cardBody.appendChild(bodyElement);
    cardBody.appendChild(timestamp);

    card.appendChild(img);
    card.appendChild(cardBody);

    postLink.appendChild(card);
    postCard.appendChild(postLink);
    postsContainer.appendChild(postCard);
  });
}


export { renderPosts };
