export function cardTemplate(postData, isClickable = false) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "col-12", "col-sm-4", "mb-3");

    const row = document.createElement("div");
    row.classList.add("row");

    const card = document.createElement("div");
    card.classList.add("card", "pr-2", "pl-2", "col");
    card.dataset.postId = postData.id;

    if (postData.media) {
        // image/media
        const img = document.createElement("img");
        img.classList.add("img-thumbnail");
        img.src = postData.media;
        img.alt = `Post Image from ${postData.title}`;

        card.appendChild(img);
    }

    if (isClickable) {
        cardContainer.classList.add("clickable");
        cardContainer.addEventListener('click', () => {
            window.location.href = `/single-post/index.html?id=${postData.id}`;
        });

        // Display other information in single post view
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = postData.title;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = postData.body;

        const lastUpdated = document.createElement("p");
        lastUpdated.classList.add("card-text", "text-muted");
        lastUpdated.innerText = `Last updated ${timeAgo(postData.updated)} ago`;

        // append to post body
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(lastUpdated);

        card.appendChild(cardBody);
    }

    cardContainer.appendChild(card);

    return cardContainer;
}

// function to calculate time (chatGPT)
export function timeAgo(dateString) {
    const now = new Date();

    // Convert the date string > Date object
    const postDate = new Date(dateString);
    // calculate time diff in ms
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

export function renderCardTemplate(postData, parent) {
    parent.append(cardTemplate(postData));
}

export function renderCardTemplates(postDataList, parent) {
    parent.append(...postDataList.map(cardTemplate));
}