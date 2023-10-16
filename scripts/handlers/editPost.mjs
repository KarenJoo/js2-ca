import { updatePost } from "../posts/update.mjs";

export function updatePostListener() {
  const form = document.querySelector("#updatePost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Post success!");

      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries())
      post.id = id;

      // const postData = {

      //   title: formData.get("title"),
      //   body: formData.get("body"),
      //   media: formData.get("media"),
      //   tags: [formData.get("tags")],
      // };
    

      updatePost(post);
    })
  }
}