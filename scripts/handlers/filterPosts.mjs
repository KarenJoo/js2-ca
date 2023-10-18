import { renderPostTemplates } from "../templates/post.mjs";
import { timeAgo } from "../posts/timeAgo.mjs";

/**
 * Filters post data (of arrays) based on the search value and filter type.
 *
 * @param {string} searchValue - The search value to filter posts.
 * @param {Object[]} postData - An array of post data to filter.
 * @param {string} [filterType="filter-title"] - The type of filter (ex. optional).
 * @returns {Object[]} An array of filtered post data.
 *
 * @example
 * ```js
 * const allPosts = [...] 
 * const searchValue = "example";
 * const filterType = "filter-title";
 * const filteredPosts = filterPosts(searchValue, allPosts, filterType);
 * console.log(filteredPosts);
 * ```
 */
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
    } else if (filterType === "filter-title") {
      filteredPosts.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA.localeCompare(titleB);
      });
    }

    return filteredPosts;
  };


 //chat(GPT) 
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
      const searchValue = document.querySelector("#search").value.trim().toLowerCase(); 
      const filteredPosts = filterPosts(searchValue, postData, filterType);
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