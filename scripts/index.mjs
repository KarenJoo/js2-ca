import { createPost } from "./posts/create.mjs";
import { updatePost } from "./posts/update.mjs";
import { removePost } from "./posts/remove.mjs";
const path =  location.pathname;

updatePost ({
    id: 3206,
    title: "Is saturNight",
    body: "happy hour"
});

createPost ({
    id: 3204,
    title: "cool banana",
    body: "bananas before lamas",
    media: "https://images.freeimages.com/images/large-previews/5a4/banana-man-1489104.jpg"
});

removePost(3206)
