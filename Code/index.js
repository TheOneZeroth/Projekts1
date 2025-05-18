function GetInput() {
    const item = document.getElementById("insertItem").value;
    const info = document.getElementById("insertInfo").value;
    const price = document.getElementById("insertPrice").value;
    const link = document.getElementById("insertLink").value;

    if (item == "" || !item.match(/[A-z]/)) {
        alert("The item section accepts only roman alphabet letters");
        return;
    }
    if (info == "" || !info.match(/[A-z]/)) {
        alert("The info section accepts only roman alphabet letters");
        return;
    }
    if (price == "" || isNaN(price)) {
        alert("The price section accepts only numbers");
        return;
    }
    if (link == "" || !link.match(/(https?:\/\/[^\s]+)/g)) {
        alert("The link section accepts only valid links");
        return;
    }

    const itemsArray = JSON.parse(localStorage.getItem("itemsArray")) || [];

    itemsArray.push({
        item: item,
        info: info,
        price: `$${parseFloat(price).toFixed(2)}`,
        link: link,
    });

    localStorage.setItem("itemsArray", JSON.stringify(itemsArray));

    window.location.href = "main.html";
}

function ShowItems() {
    const itemsArray = JSON.parse(localStorage.getItem("itemsArray")) || [];

    const itemsContainer = document.getElementById("items");
    const infoContainer = document.getElementById("info");
    const priceContainer = document.getElementById("price");
    const linkContainer = document.getElementById("link");

    itemsContainer.innerHTML = "";
    infoContainer.innerHTML = "";
    priceContainer.innerHTML = "";
    linkContainer.innerHTML = "";

    itemsArray.forEach((entry) => {
        itemsContainer.innerHTML += `<p>${entry.item}</p>`;
        infoContainer.innerHTML += `<p>${entry.info}</p>`;
        priceContainer.innerHTML += `<p>${entry.price}</p>`;
        linkContainer.innerHTML += `<p><a href="${entry.link}" target="_blank">${entry.link}</a></p>`;
    });
}

function ClearList() {
    localStorage.removeItem("itemsArray");
    ShowItems();
}