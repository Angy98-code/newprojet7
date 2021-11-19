//----------toutes les variables globales
let arrayDesIngredientsSelectionnes = []; // variable globale de tous les ingrédients sélectionnés (array de strings) ingredientsSelected
//---------fin des variables globales

// **** 1°) la partie modal ouverte de la liste de tous les ingrédients

//----------principal function
// placeIngredients insère dans le DOM le HTML pour la recherche par ingrédients
// - récupère la liste de tous les ingrédients dédoublonnés
// - génére le code html de la liste des li li...
// - insère le html généré dans parentNode
// - insère la recherche par ingrédient//
// - point d'entrée (appelée dans main.js)

function placeIngredients() {
  // liste des ingrédients dans le panneau de recherche
  const allIngredients = laListeDesIngredients();
  const parentNode = document.querySelector(".ingredientslist");
  let listeHtml = "";
  allIngredients.forEach((ingredient) => {
    listeHtml += `<li class="baliseLiDansIngredients">${ingredient}</li>`;
  });
  parentNode.innerHTML = listeHtml;
  // liste des tags ingredients selectionnés
  addIngredientsClickListener();
}

//----------function traitement données
// laListeDesIngredients retourne un array de strings contenant tous les ingrédients

function laListeDesIngredients() {
  let arrayListIngredients = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      //(ingredient) correspond à ligne 8-12 dans le tableau recipes
      arrayListIngredients.push(ingredient.ingredient);
    });
  });
  let annulerDoublons = arrayListIngredients.sort();
  let uniqueIngredientsArray = [...new Set(annulerDoublons)];
  //console.log(uniqueIngredientsArray);
  return Array.from(uniqueIngredientsArray);
}

//----------addInputCallback() ajoute une callback sur l'évênement input désigné par cssSelector
//callback

function addInputCallback(cssSelector, saisieCB) {
  const nodeChampInputIngredients = document.querySelector(cssSelector);

  nodeChampInputIngredients.addEventListener("input", function (event) {
    event.preventDefault();
    console.log(cssSelector, event.target.value);
    saisieCB(event.target.value);
  });
}

//***** 2ème partie injection dans le dom du choix des ingrédients séléctionnés après chaque click

//TODO
// 1) créer une variable globale de tous les ingrédients sélectionnés (array de strings) arrayDesIngredientsSelectionnes /ex
//ok ligne 2
// 2) créer 1 fonction qui ajoute un ingrédient à la sélection selectIngredient
// 3) appeler la fonction  selectIngredient sur click d'un ingrédient de la liste
// 4) créer 1 fonction qui génére le code Html des tags d'ingrédients à partir d'arrayDesIngredientsSelectionnes (ingredientsTagsHtml)
// 5) sur click sur 1 ingrédient, appeler selectIngredient puis utiliser ingredientsTagsHtml pour afficher les tags dans le Dom (inline donc je vais utiliser les span)

//------ selectIngredient() ajoute un ingrédient à l'array des ingrédients selectionnés
function selectIngredient(ingredient) {
  console.log(
    "arrayDesIngredientsSelectionnes avant push : ",
    arrayDesIngredientsSelectionnes
  );
  arrayDesIngredientsSelectionnes.push(ingredient);
  console.log(
    "arrayDesIngredientsSelectionnes après push : ",
    arrayDesIngredientsSelectionnes
  );
}

//----- addIngredientsClickListener() fonction qui ajoute un ingrédient à la sélection selectIngredient
function addIngredientsClickListener() {
  const ulIngredients = document.querySelector(".ingredientslist");
  ulIngredients.addEventListener("click", (e) => {
    const recuperationIngredient = e.target.textContent;
    console.log(
      "recuperationIngredient avant appel fonction selectIngredient : ",
      recuperationIngredient
    );
    selectIngredient(recuperationIngredient);
    drawSelectedIngredientsTags();
    console.log(
      "recuperationIngredient après appel selectIngredient : ",
      recuperationIngredient
    );
  });
}

//----- 4) créer 1 fonction qui génére le code Html des tags d'ingrédients à partir d'arrayDesIngredientsSelectionnes (ingredientsTagsHtml)
// 5) sur click sur 1 ingrédient, appeler selectIngredient puis utiliser drawSelectedIngredientsTags pour afficher les tags dans le Dom (inline donc je vais utiliser les span)

function drawSelectedIngredientsTags() {
  let tagIngredientHtml = "";
  const parentNode = document.querySelector(".placeringredientschoisis");
  arrayDesIngredientsSelectionnes.forEach((ingredient) => {
    tagIngredientHtml += `<div class="tagsingredientrow">
                            <span class="navbarresultchoosesingredients">
                            ${ingredient}
                            <i class="far fa-times-circle" id="boutonfermeturetag"></i>
                            </span>
                          </div>`;
  });
  parentNode.innerHTML = tagIngredientHtml;
  const spans = parentNode.querySelectorAll("span");
  spans.forEach((span) => {
    span.addEventListener("click", removeIngredientsClickListener);
  });
}

//**** 3ème partie remove tags
// todo : case fermeture tag pas display none
// 1 : ajouter 1 eventListener click sur chaque tag  ou croix //valeur cliqué diff maniere de recuperer
// 2 : dans la cb du click supprimer remove() l'ingredient clique arraySelect.... //
// 3 : dans la cb appeler la fonction drawSelectedIngredientsTags

const removeIngredientsClickListener = (e) => {
  console.log("removeIngredientsClickListener", this, e);

  const recuperationTagASupprimer = e.target.textContent;
  arrayDesIngredientsSelectionnes.remove(recuperationTagASupprimer);
  drawSelectedIngredientsTags();
};

//***** 4ème partie fermeture ouverture de la liste des infrédients
//css display none
// toggle addevent

//***** 5ème partie input dans la modal ingrédients qui affiche un choix d'ingrédients après 3 lettres
