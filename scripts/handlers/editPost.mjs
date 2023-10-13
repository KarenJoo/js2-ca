import { updatePost } from "../posts/update.mjs";

export function editPostListener() {
    const form = document.querySelector("#editPost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("Update post success!");

            const formData = new FormData(event.target);

            const postData = {
                title: formData.get("postTitle"), 
                body: formData.get("body"),
                media: formData.get("media"),
                tags: [formData.get("tags")],
                id: id, 
            };
            

            updatePost(postData);
        });
    }
}
