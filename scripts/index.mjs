import { createPost } from "./posts/create.mjs";
const path =  location.pathname;

createPost ({
    title: "This is a post",
    body: "This is the content"
});

console.log("hello");