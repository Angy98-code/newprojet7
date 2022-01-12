// OpenPanelIngredients is the click callback for the "ingredients" button
function OpenPanelIngredients() {
  CloseAllPanels();
  OpenPanel("ingredients");
  DrawIngredientsList();
}

function DrawIngredientsList() {
  drawList(
    getRemainingIngredients(),
    ".ingredientslist",
    "appareil-item",
    "selectIngredient"
  );
}

function removeIngredientTagCB(e) {
  // remove the ingredient from the selected ingredients array
  const ingredient = e.target.parentNode.textContent.trim();
  removeFromArray(selectedIngredients, ingredient);
  // remove the tag element from the dom
  e.target.parentNode.parentNode.remove();
  DrawIngredientsList();
  placeCards(selectedRecipes());
}

// selectIngredient is the callback called at click on an ingredient in the opened panel
function selectIngredient(ingredientName) {
  selectedIngredients.push(ingredientName);
  DrawIngredientsList();
  drawTags(
    selectedIngredients,
    ".placeringredientschoisis",
    "navbarresultchoosesingredients",
    removeIngredientTagCB
  );
  document.querySelector(".inputingredients").value = "";
  ClosePanel("ingredients");
  placeCards(selectedRecipes());
}

// OnIngredientInput
function OnIngredientInput(e) {
  const ingredientSearchStr = e.target.value;
  console.log("OnIngredientInput", ingredientSearchStr);
  const ingredients = getRemainingIngredients().filter((ingredient) => {
    return ingredient.toLowerCase().includes(ingredientSearchStr.toLowerCase());
  });
  drawList(
    ingredients,
    ".ingredientslist",
    "appareil-item",
    "selectIngredient"
  );
}
