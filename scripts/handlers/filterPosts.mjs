import { renderPostTemplates } from "../templates/post.mjs";
import { timeAgo } from "../posts/timeAgo.mjs";


export const filterPosts = (searchValue, postData, filterType) => {
    const filteredPosts = postData.filter((filteredData) => {
      const titleMatch = filteredData.title.toLowerCase().includes(searchValue);

      return titleMatch;
      
    });

    if (filterType === "filter-date") {
      filteredPosts.sort((a, b) => {
        const timeA = new Date(a.updated).getTime();
        const timeB = new Date(b.updated).getTime();
        return timeB - timeA;
      });
    }

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

  export const filterListener = (postData, container) => {
    const filterTitle = document.querySelector("#filter-title");
    const filterDate = document.querySelector("#filter-date");
  
    filterTitle.onclick = function () {
      const filterType = getActiveFilter();
      const filteredPosts = filterPosts(postData, filterType);
      container.innerHTML = "";
      renderPostTemplates(filteredPosts, container, true);
    };
  
    filterDate.onclick = function () {
      const filterType = getActiveFilter();
      const searchValue = document.querySelector("#search").value.trim().toLowerCase();
      const filteredPosts = filterPosts(searchValue, postData, "filter-date");
      container.innerHTML = "";
      renderPostTemplates(filteredPosts, container, true);
    };
  };
  
  // Function to get the active filter type based on filter type
  export function getActiveFilter() {
    const filterTitle = document.querySelector("#filter-title");
    const filterDate = document.querySelector("#filter-date");
  
    if (filterTitle.classList.contains("active")) {
      return "filter-title";
    } else if (filterDate.classList.contains("active")) {
      return "filter-date";
    }
  
   
    return "filter-title";
  }
  
  

export default searchListener;