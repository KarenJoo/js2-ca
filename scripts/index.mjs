import { createPost } from "./posts/create.mjs";
import { updatePost } from "./posts/update.mjs";
import { removePost } from "./posts/remove.mjs";
import { getPosts, getPost } from "./posts/get.mjs";

const path =  location.pathname;

updatePost ({
    id: 3219,
    title: "Howdy",
    body: "Lets ride"
});

createPost ({
    id: 3407,
    title: "sorry for the spam",
    body: "sorry not sorry"
});

// createPost()
// updatePost()
// removePost()
// getPost()
getPosts().then(console.log); 

// removePost(3415)
