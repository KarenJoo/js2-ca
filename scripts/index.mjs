import { createPost } from "./posts/create.mjs";
import { updatePost } from "./posts/update.mjs";
const path =  location.pathname;

updatePost ({
    id: 3203,
    title: "This is a updated post",
    body: "This is the updated new content"
});

