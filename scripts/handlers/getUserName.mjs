export function getUserName() {
    // user profile from localStorage
    const userProfile = JSON.parse(localStorage.getItem("profile"));
  
    
    const setUserName = document.getElementById("userName");
    if (setUserName) {
      setUserName.innerText = userProfile.name;
    }
  }

