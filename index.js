//Selectors

const tierListNAme = document.querySelector("#tierlist-name");
const tierlistNAmeBtn = document.querySelector("#tierlistName-btn");
const tierlistImage = document.querySelector("#tierlist-image");
const addImgBtn = document.querySelector("#addImage-btn");
const imageUrlInput = document.querySelector("#tierlist-image");
const imgContainerDiv = document.querySelectorAll(".image-container");
const itemsDropContainer = document.querySelectorAll(
  ".tierlist-item-container"
);
const imgListSection = document.querySelector("#image-lists");

// for (const itemContainer of imgContainerDiv) {
//   setUpForDragImgEle(itemContainer);
// }

//Containers

let currentDraggedItem;

//Events

tierlistNAmeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (tierListNAme.value == "") {
    alert("Please enter Tierlist Name url...");
    return;
  }

  createTierlistEle(tierListNAme.value);
  tierListNAme.value = "";
});

addImgBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (imageUrlInput.value == "") {
    alert("Please enter Image url...");
    return;
  }

  creactImageEle(imageUrlInput.value);
  imageUrlInput.value = "";
});

//Functions

function createTierlistEle(tierlistName) {
  const tierlistEle = document.createElement("div");
  tierlistEle.classList.add("tierlists-border-container");
  tierlistEle.setAttribute("draggable", "true");

  const eleName = document.createElement("h1");
  eleName.textContent = tierlistName;

  const tierlistItems = document.createElement("div");
  tierlistItems.classList.add("tierlist-item-container");

  const dltIcon = document.createElement("i");
  dltIcon.setAttribute("class", "fa-solid fa-trash deleteBtn");

  tierlistEle.appendChild(eleName);
  tierlistEle.appendChild(tierlistItems);
  tierlistEle.appendChild(dltIcon);

  setUpForDropZone(tierlistItems);

  const addTierlist = document.querySelector("#tierlists");
  addTierlist.appendChild(tierlistEle);

  deleteTierLists(tierlistEle, dltIcon);
}

function creactImageEle(ImageUrl) {
  const imageEle = document.createElement("div");

  imageEle.classList.add("image-container");

  const imageDiv = document.createElement("img");
  imageDiv.src = ImageUrl;

  imageEle.appendChild(imageDiv);

  const dltIcon = document.createElement("i");
  dltIcon.setAttribute("class", "fa-solid fa-circle-xmark cross");
  imageEle.appendChild(dltIcon);

  setUpForDragImgEle(imageEle);
  returnImageEle(imageEle);
  deleteImageLists(imageEle, dltIcon);

  const addImgEle = document.querySelector("#image-lists");
  addImgEle.appendChild(imageEle);
}

function setUpForDragImgEle(itemContainers) {
  itemContainers.addEventListener("dragstart", (e) => {
    currentDraggedItem = e.target.parentNode;
  });
}

function setUpForDropZone(itemContainers) {
  itemContainers.addEventListener("drop", (e) => {
    e.preventDefault();
  });
  itemContainers.addEventListener("dragover", function (e) {
    // e.target.appendChild(currentDraggedItem);

    if (this !== currentDraggedItem.parentNode) {
      this.appendChild(currentDraggedItem);
    }
  });
}

function returnImageEle(itemContainers) {
  itemContainers.addEventListener("dblclick", () => {
    imgListSection.appendChild(itemContainers);
  });
}

function deleteTierLists(tierlists, deleteBtn) {
  deleteBtn.addEventListener("click", () => {
    tierlists.remove();
  });
}

function deleteImageLists(imageContainer, dltBtn) {
  dltBtn.addEventListener("click", () => {
    imageContainer.remove();
  });
}
