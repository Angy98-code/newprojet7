let selectedIngredients = []; // array of selected ingredients
let selectedAppliances = []; // array of selected appliances (array of strings)
let selectedUstensils = []; // array of selected ustensils (array of strings)
let globalSearchString = ""; // search string entered in main search field
let globalFilteredRecipes = recipes;
// getIngredients returns the list of ingredients, sorted and deduped present in the recipes array given in parameter
function getIngredients(recipes) {
  let arrayIngredients = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      arrayIngredients.push(ingredient.ingredient);
    });
  });
  let annulerDoublons = arrayIngredients.sort();
  let uniqueIngredientsArray = [...new Set(annulerDoublons)];
  return Array.from(uniqueIngredientsArray);
}

// getRemainingIngredients
function getRemainingIngredients() {
  // get ingredients remaining in selected recipes
  const remainingIngredients = getIngredients(selectedRecipes());
  // filter out already selected ingredients
  return remainingIngredients.filter((ingredient) => {
    return !selectedIngredients.includes(ingredient);
  });
}

// allAppliances returns the list of appliances, sorted and deduped
function getAppliances(recipes) {
  let arrayAppliances = [];
  recipes.forEach((recipe) => {
    arrayAppliances.push(recipe.appliance);
  });
  let sorted = arrayAppliances.sort();
  let deduped = [...new Set(sorted)];
  return Array.from(deduped);
}

// getRemainingAppliances
function getRemainingAppliances() {
  return getAppliances(selectedRecipes()).filter((appliance) => {
    return !selectedAppliances.includes(appliance);
  });
}

// getUstensils returns the list of Ustensils, sorted and deduped present in the recipes array given in parameter
function getUstensils(recipes) {
  let arrayUstensils = [];
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      arrayUstensils.push(ustensil);
    });
  });
  let annulerDoublons = arrayUstensils.sort();
  let uniqueUstensilsArray = [...new Set(annulerDoublons)];
  return Array.from(uniqueUstensilsArray);
}

// getRemainingUstensils
function getRemainingUstensils() {
  // get Ustensils remaining in selected recipes
  const remainingUstensils = getUstensils(selectedRecipes());
  // filter out already selected Ustensils
  return remainingUstensils.filter((ustensil) => {
    return !selectedUstensils.includes(ustensil);
  });
}

// allUstensils returns the list of ustensils, sorted and deduped
function allUstensils(recipes) {
  let arrayUstensils = [];
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      arrayUstensils.push(ustensil);
    });
  });
  let sorted = arrayUstensils.sort();
  let deduped = [...new Set(sorted)];
  return Array.from(deduped);
}

// selectedRecipes returns the recipes selected by main search string, ingredients, appliances and ustencils
function selectedRecipes() {
  let filteredRecipes = recipes;
  if (globalSearchString.length >= 3) {
    // use for...of instead of native filter function
    filteredRecipes = [];
    for (recipe of recipes) {
      if (
        recipe.name.toLowerCase().includes(globalSearchString.toLowerCase())
      ) {
        filteredRecipes.push(recipe);
        continue;
      }
      if (
        recipe.description
          .toLowerCase()
          .includes(globalSearchString.toLowerCase())
      ) {
        filteredRecipes.push(recipe);
        continue;
      }
      const ingredients = recipe.ingredients.map((ingredient) =>
        ingredient.ingredient.toLowerCase()
      );
      const ingredientsFound = ingredients.includes(
        globalSearchString.toLowerCase()
      );
      if (ingredientsFound) {
        filteredRecipes.push(recipe);
      }
    }
  }

  // filter remaining recipes by ingredients
  if (selectedIngredients.length > 0) {
    // si des ingrédients sont sélectionnés
    filteredRecipes = filteredRecipes.filter((recipe) => {
      // on récupère un array de string des ingrédients de la recette
      const ingredientsInRecipe = recipe.ingredients.map(
        (ingredient) => ingredient.ingredient
      );
      let allIngredientsPresent = true;
      // si un ingrédient n'est pas présent, on sait que tous les ingrédients ne sont pas présents
      selectedIngredients.forEach((ingredientSelectionne) => {
        if (!ingredientsInRecipe.includes(ingredientSelectionne)) {
          allIngredientsPresent = false;
        }
      });
      return allIngredientsPresent;
    });
  }

  // filter remaining recipes by appliance
  if (selectedAppliances.length > 0) {
    // si des ingrédients sont sélectionnés
    filteredRecipes = filteredRecipes.filter((recipe) => {
      // on regarde si l'appliance de la recette fait partie des appliances sélectionnées
      return selectedAppliances.includes(recipe.appliance);
    });
  }

  // filter remaining recipes by ustensiles
  if (selectedUstensils.length > 0) {
    // si des ustensils sont sélectionnés
    filteredRecipes = filteredRecipes.filter((recipe) => {
      let allUstensilsPresent = true;
      // si un ingrédient n'est pas présent, on sait que tous les ingrédients ne sont pas présents
      selectedUstensils.forEach((selectedUstensile) => {
        if (!recipe.ustensils.includes(selectedUstensile)) {
          allUstensilsPresent = false;
        }
      });
      return allUstensilsPresent;
    });
  }
  return filteredRecipes;
}