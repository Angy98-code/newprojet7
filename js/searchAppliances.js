// OpenPanelAppliances is the click callback for the "appareil" button
function OpenPanelAppliances() {
  CloseAllPanels();
  OpenPanel("appareil");
  drawList(
    getRemainingAppliances(),
    ".appareillist",
    "appareil-item",
    "selectAppliance"
  );
}

function removeApplianceTagCB(e) {
  // remove the appliance from the selected appliances array
  const appliance = e.target.parentNode.textContent.trim();
  removeFromArray(selectedAppliances, appliance);
  // remove the tag element from the dom
  e.target.parentNode.parentNode.remove();
  drawList(
    getRemainingAppliances(),
    ".appareillist",
    "appareil-item",
    "selectAppliance"
  );
  placeCards(selectedRecipes());
}

// selectAppliance is the callback called at click on an appliance in the opened panel
function selectAppliance(applianceName) {
  selectedAppliances.push(applianceName);
  drawList(
    getRemainingAppliances(),
    ".appareillist",
    "appareil-item",
    "selectAppliance"
  );
  drawTags(
    selectedAppliances,
    ".placerappareilchoisis",
    "navbarresultchoosesappareil",
    removeApplianceTagCB
  );
  document.querySelector(".inputappareil").value = "";
  ClosePanel("appareil");
  placeCards(selectedRecipes());
}

// OnApplianceInput
function OnApplianceInput(e) {
  const applianceSearchStr = e.target.value;
  const appliances = getRemainingAppliances().filter((appliance) => {
    return appliance.toLowerCase().includes(applianceSearchStr.toLowerCase());
  });
  drawList(appliances, ".appareillist", "appareil-item", "selectAppliance");
}
//appareillist = ul
//appareil-item = li
//// selectAppliance is the callback called at click on an appliance in the opened panel
