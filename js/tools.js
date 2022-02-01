// OpenPanel ouvre le panneau de recherche
function OpenPanel(panel) {
  // show open panel
  const openedPanelNode = document.querySelector("." + panel + "open");
  openedPanelNode.style.display = "block";
  // reset panel input field
  const inputNode = openedPanelNode.querySelector("input");
  inputNode.value = "";
  // hide closed panel
  const closedPanelNode = document.querySelector("." + panel + "close");
  closedPanelNode.style.display = "none";
}

// ClosePanel ferme le panneau de recherche
function ClosePanel(panel) {
  // show open panel
  const openedPanelNode = document.querySelector("." + panel + "open");
  openedPanelNode.style.display = "none";
  // hide closed panel
  const closedPanelNode = document.querySelector("." + panel + "close");
  closedPanelNode.style.display = "block";
}

// drawList inserts listItems elements in the dom 
//on the UL node defined by selector.
// each li has a class of className
// listItems must be an array of strings
function drawList(listItems, selector, className, clickFnName) {
  // paramètre array de string
  const parentNode = document.querySelector(selector);
  let listeHtml = "";
  listItems.forEach((item) => {
    listeHtml += `<li class="${className}" onclick="${clickFnName}(event.target.outerText)">${item}</li>`;
  });
  parentNode.innerHTML = listeHtml;
}

// drawTags draws a tag list, given, the dom parent node
function drawTags(tagsArray, parentNodeSelector, spanClass, removeCB) {
  let tagListHtml = "";
  const parentNode = document.querySelector(parentNodeSelector);
  tagsArray.forEach((tagName) => {
    tagListHtml += `<div class="tagsingredientrow">
                            <span class="${spanClass}">
                            ${tagName}
                            <i class="far fa-times-circle" id="boutonfermeturetag"></i>
                            </span>
                          </div>`;
  });
  parentNode.innerHTML = tagListHtml;

  const iTags = parentNode.querySelectorAll("i");
  iTags.forEach((iTag) => {
    iTag.addEventListener("click", removeCB);
  });
}


// removeFromArray removes the element from array arr
function removeFromArray(arr, element) {
  let idx = arr.indexOf(element);
  if (idx >= 0) {
    arr.splice(idx, 1);
  }
}
