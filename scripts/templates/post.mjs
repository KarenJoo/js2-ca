import { timeAgo } from "../posts/timeAgo.mjs";
import { load } from "../storage/index.mjs";
import { removePost } from "../posts/remove.mjs";

const profile = load("profile");
// const { name: userName } = profile;
const userName = profile?.name || "unknown name";
console.log(userName);
/**
 * Template for displaying a post.
 *
 * @param {Object} postData - The data of the post.
 * @param {boolean} [isClickable=false] - If the post is clickable then redirect to single post page.
 * @returns {HTMLDivElement} The post template.
 *
 * @example
 * ```js
 * const postContainer = postTemplate(postData, true);
 * document.body.appendChild(postContainer);
 * ```
 */
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
    lastUpdated.innerText = `Last updated ${timeAgo(postData.updated)}`;

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

      const deletePostBtn = document.createElement("button");
      deletePostBtn.classList.add("btn", "btn-danger");
      deletePostBtn.innerText = "Delete post";
      deletePostBtn.id = `deletePostBtn-${postData.id}`;

      deletePostBtn.addEventListener("click", async () => {
        try {
          await removePost(postData.id);
          console.log("Post deleted successfully");
          // Reload the page or update the UI as needed
          window.location.href = `/feed/index.html`;
        } catch (error) {
          console.error("Error deleting post:", error.message);
          if (error.response) {
            console.error("Response data:", await error.response.json());
          }
        }
      });

      postBody.appendChild(editPostBtn);
      postBody.appendChild(deletePostBtn);
    }
  
    return postContainer;
}

/**
 * Renders a single post template 
 * Also appends the post to the specified parent element.
 *
 * @param {Object} postData - The data of the post.
 * @param {HTMLElement} parent - The parent element > post template is appended.
 * @returns {void}
 *
 * @example
 * ```js
 * renderSinglePostTemplate(postData, document.querySelector("#postContainer"));
 * ```
 */
export function renderSinglePostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

/**
 * Renders several post templates 
 * Also appends them to the specified parent element.
 *
 * @param {Array<Object>} postDataList - The list of post data objects.
 * @param {HTMLElement} parent - The parent element > post templates are appended to.
 * @param {boolean} [isClickable=false] - If the posts are clickable then redirect to single post page.
 * @returns {void}
 *
 * @example
 * ```js
 * renderPostTemplates(postDataList, document.querySelector("#postList"), true);
 * ```
 */
export function renderPostTemplates(postDataList, parent, isClickable = false) {
    parent.append(...postDataList.map(postData => postTemplate(postData, isClickable)));
}
  
