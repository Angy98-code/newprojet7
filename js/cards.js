//console.log(recipes);
//console.log(recipes);
//console.log(recipes[0].ingredients);
//console.log(recipes[0].ingredients[0].quantity);
//console.log(newArrayIngredients);

function oneCardHtml(recipe) {
  //  console.log(recipe.description);
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

//console.log(ingredients[0]);
// insert the cards in the DOM (.allmenucards)
//placeCards fonction principale
function placeCards() {
  const parentNode = document.querySelector(".allmenucards");
  // parentNode.innerHTML = oneCardHtml(recipes[0]);
  recipes.forEach((recipe) => {
    //  console.log(recipe);
    //mettre chaque menu dans une card
    parentNode.innerHTML += oneCardHtml(recipe);
  });
}

//leftSideCard liste des ingrédients avec quantity et unit
function leftSideCard(ingredients) {
  //  console.log("ingredients", ingredients);
  let ingredientsHtml = "";

  ingredients.forEach((ingredient) => {
    //  console.log(ingredient);
    //change undefined value to ""
    if (typeof ingredient.quantity === "undefined") {
      //      console.log(ingredient.quantity);
      ingredient.quantity = "";
      //      console.log("valeur ingredient.quantity", ingredient.quantity);
    }
    if (typeof ingredient.unit === "undefined") {
      //      console.log(ingredient.unit);
      ingredient.unit = "";
      //      console.log("valeur ingredient.unit", ingredient.unit);
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
    //console.log(typeof ingredient.quantity);
  });
  return ingredientsHtml;
}
