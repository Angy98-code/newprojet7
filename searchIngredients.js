//----------principal function
// placeIngredients insère dans le DOM le HTML pour la recherche par ingrédients
// - récupère la liste de tous les ingrédients dédoublonnés
// - génére le code html de la liste des li li...
// - insère le html généré dans parentNode
// - point d'entrée (appelée dans main.js)

function placeIngredients() {
  const allIngredients = laListeDesIngredients();
  const parentNode = document.querySelector(".ingredientslist");
  let listeHtml = "";
  allIngredients.forEach((ingredient) => {
    listeHtml += `<li>${ingredient}</li>`;
  });
  parentNode.innerHTML = listeHtml;
}

//----------function traitement données
// laListeDesIngredients retourne un array de strings contenant tous les ingrédients

function laListeDesIngredients() {
  let arrayListIngredients = [];
  recipes.forEach((ingredients) => {
    ingredients.ingredients.forEach((ingredient) => {
      arrayListIngredients.push(ingredient.ingredient);
    });
  });
  let annulerDoublons = arrayListIngredients.sort();
  let uniqueIngredientsArray = [...new Set(annulerDoublons)];
  console.log(uniqueIngredientsArray);
  return Array.from(uniqueIngredientsArray);
}

//--------------------onSaisieIngredients()

function onSaisieIngredients(ingredientSearch) {
  console.log(ingredientSearch);
}

//--------------------addInputCallback() ajoute une callback sur l'évênement input désigné par cssSelector
//callback

function addInputCallback(cssSelector, saisieCB) {
  const nodeChampInputIngredients = document.querySelector(cssSelector);

  nodeChampInputIngredients.addEventListener("input", function (event) {
    event.preventDefault();
    console.log(cssSelector, event.target.value);
    saisieCB(event.target.value);
  });
}
addInputCallback(".inputingredients", onSaisieIngredients);
//addInputCallback(".inputappareil", onSaisieIngredients);
