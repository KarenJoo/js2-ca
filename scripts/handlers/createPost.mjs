import { createPost } from "../posts/create.mjs";

export function createPostListener(){
    const form = document.querySelector("#createPost");


    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            console.log("Post success!");
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
           

            createPost(post)
        })
    }
}

