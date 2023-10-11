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
                title: formData.get("postTitle"), // Use "postTitle" as the name attribute in the HTML
                body: formData.get("body"),
                media: formData.get("media"),
                tags: [formData.get("tags")],
                id: id, // Assign the id directly to postData.id
            };
            

            updatePost(postData);
        });
    }
}
