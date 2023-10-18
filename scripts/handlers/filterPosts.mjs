import { renderPostTemplates } from "../templates/post.mjs";

export const filterPosts = (searchValue, postData) => {
    const filteredPosts = postData.filter((filteredData) => {
      if (filteredData.title.toLowerCase().includes(searchValue)) 
      {
        
        return true;
      }
    });
    return filteredPosts;
  };
  
 export const searchListener = (postData, container) => {
    const search = document.querySelector("#search");
    
    search.oninput = function (event) {
      const searchValue = event.target.value.trim().toLowerCase();
      const filteredPosts = filterPosts(searchValue, postData);
      console.log(filteredPosts);
      const container = document.querySelector("#post");
      container.innerHTML = "";
      renderPostTemplates(filteredPosts, container, true);
    };
  };
  

export default searchListener;