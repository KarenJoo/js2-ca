export function cardTemplate(postData) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-12", "col-sm-4", "mb-3");

    const row = document.createElement("div");
    row.classList.add("row");

    const row2 = document.createElement("div");
    row2.classList.add("col-12", "pr-2", "pl-2");

    const card = document.createElement("div");
    card.classList.add("card", "pr-2", "pl-2", "col");


    // image/media
    const img = document.createElement("img");
    img.classList.add("img-thumbnail");
    img.src = postData.media;
    img.alt = "Post Image";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = postData.title;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text", "text-truncate");
    cardText.innerText = postData.body;

    const lastUpdated = document.createElement("p");
    lastUpdated.classList.add("card-text", "text-muted");
    lastUpdated.innerText = `Last updated ${timeAgo(postData.updated)} ago`;

    // append to post body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(lastUpdated);

    card.appendChild(img);
    card.appendChild(cardBody);

    cardContainer.appendChild(card);

    return cardContainer;
}

// function to calculate time (chatGPT) 
export function timeAgo(dateString) {
    // get current date and time for post
    const now = new Date();

    // Convert the date string > Date object
    const postDate = new Date(dateString);
    // calculate time dif in ms
    const diffMilliseconds = now - postDate;

    //converting ms to sec, min, hours
    const seconds = Math.floor(diffMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

     
     if (days > 0) {
        return `${days} days`;
    } else if (hours > 0) {
        return `${hours} hours`;
    } else if (minutes > 0) {
        return `${minutes} minutes`;
    } else {
        return `${seconds} seconds ago`;
    }

}

export function renderCardTemplate (postData, parent) {
    parent.append(cardTemplate(postData))
}

export function renderCardTemplates(postDataList, parent) {
    parent.append(...postDataList.map(cardTemplate))

}


