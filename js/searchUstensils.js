// OpenPanelUstensiles is the click callback for the "ustensiles" button
function OpenPanelUstensiles() {
  CloseAllPanels();
  OpenPanel("ustensiles");
  drawList(
    getRemainingUstensils(),
    ".ustensileslist",
    "ustensiles-item",
    "selectUstensile"
  );
}

function CloseAllPanels() {
  ClosePanel("ingredients");
  ClosePanel("appareil");
  ClosePanel("ustensiles");
}

// close panels on click on background
window.addEventListener("click", (e) => {
  console.log(e.target.nodeName);
  if (["DIV", "BODY"].includes(e.target.nodeName)) {
    CloseAllPanels();
  }
});

function removeUstensilTagCB(e) {
  // remove the ustensile from the selected ustensiles array
  const unstensile = e.target.parentNode.textContent.trim();
  removeFromArray(selectedUstensils, unstensile);
  // remove the tag element from the dom
  e.target.parentNode.parentNode.remove();
  drawList(
    getRemainingUstensils(),
    ".ustensileslist",
    "ustensiles-item",
    "selectUstensile"
  );
  ClosePanel("ustensiles");
  placeCards(selectedRecipes());
}

// selectUstensile is the callback called at click on an appliance in the opened panel
function selectUstensile(ustensileName) {
  selectedUstensils.push(ustensileName);
  drawList(
    getRemainingUstensils(),
    ".ustensileslist",
    "ustensiles-item",
    "selectUstensile"
  );
  drawTags(
    selectedUstensils,
    ".placerustensileschoisis",
    "navbarresultchoosesustensiles",
    removeUstensilTagCB
  );
  document.querySelector(".inputustensiles").value = "";
  ClosePanel("ustensiles");
  placeCards(selectedRecipes());
}

// OnUstensileInput
function OnUstensileInput(e) {
  const ustensileSearchStr = e.target.value;
  console.log("OnUstensileInput", ustensileSearchStr);
  const ustensiles = getRemainingUstensils().filter((ustensile) => {
    return ustensile.toLowerCase().includes(ustensileSearchStr.toLowerCase());
  });
  drawList(ustensiles, ".ustensileslist", "ustensiles-item", "selectUstensile");
}
