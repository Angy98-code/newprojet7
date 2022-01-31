

function oneCardHtml(recipe) {
  return `<div class="card-body">
            <div class="card-img-top"></div>
            <div class="container">

              <div class="cardcontainertitle">
                <h5 class="card-title">${recipe.name}</h5>
                <i class="far fa-clock"><span class="time"> ${
                  recipe.time
                } min</span></i>
              </div>  

              <div class="cardcontainertextpart"> 
                <div class="cardtextgauche">
                  ${leftSideCard(recipe.ingredients)}
                </div>
                <div class="cardtextdroit">
                  ${recipe.description}
                  <p></p>
                </div>
              </div>

            </div>
          </div>`;
}

// insert the cards in the DOM (.allmenucards)
//placeCards fonction principale
function placeCards(recipesToDraw) {
  const parentNode = document.querySelector(".allmenucards");
  parentNode.innerHTML = "";
  recipesToDraw.forEach((recipe) => {
    //mettre chaque menu dans une card
    parentNode.innerHTML += oneCardHtml(recipe);
  });
}

// todo
// *1- ajouter un paramètre recipesToDraw à placeCards() et renommer placeCards en drawRecipes
// *2- modifier l'appel de placeCards en conséquence
// 3- appeler placeCards avec un array de recettes filtrées en fonction des ingrédients sélectionnés à chque ajout/suppression d'ingrédients
//

//leftSideCard liste des ingrédients avec quantity et unit
function leftSideCard(ingredients) {
  let ingredientsHtml = "";

  ingredients.forEach((ingredient) => {
    //change undefined value to ""
    if (typeof ingredient.quantity === "undefined") {
      ingredient.quantity = "";
    }
    if (typeof ingredient.unit === "undefined") {
      ingredient.unit = "";
    }

    if (ingredient.ingredient && ingredient.quantity && ingredient.unit) {
      ingredientsHtml += `<div class="chaqueingredient">
          <div style="font-weight:bold">${ingredient.ingredient}: </div> 
          <div>\u00A0${ingredient.quantity} </div>
          <div>\u00A0${ingredient.unit}</div>
        </div>`;
    } else if (
      (ingredient.ingredient !== ingredient.quantity) !==
      ingredient.unit
    ) {
      ingredientsHtml += `<div class="chaqueingredient">
          <div style="font-weight:bold">${ingredient.ingredient}</div> 
        </div>`;
    }
  });
  return ingredientsHtml;
}
