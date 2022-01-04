// OpenPanelUstensiles is the click callback for the "ustensiles" button
function OpenPanelUstensiles() {
  OpenPanel("ustensiles");
  drawList(
    getRemainingUstensils(),
    ".ustensileslist",
    "ustensiles-item",
    "selectUstensile"
  );
}

// ClosePanelUstensiles is the click callback for the ustensiles close panel button
function ClosePanelUstensiles(e) {
  if (
    e &&
    (e.target.classList.contains("btn-danger") ||
      e.target.classList.contains("openclosechevron") ||
      e.target.classList.contains("fas"))
  ) {
    return;
  }
  ClosePanel("ustensiles");
}

window.addEventListener("click", (e) => {
  console.log(e);
  ClosePanelUstensiles(e);
});

function removeUstensilTagCB(e) {
  // remove the unstensile from the selected unstensiles array
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
  placeCards(selectedRecipes());
}

// selectAppliance is the callback called at click on an appliance in the opened panel
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
  ClosePanelUstensiles();
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
