REBUS;

//console.log(uniqueIngredientsArray);
//for (const ingredientss of recipes.ingredients)

//laListeDesIngredients(); //appel de la fonction

//----------déclaration fonction pour l'affichage html
// function laListeDesIngredientsHtml() {
//   // let inserIngredients = document.querySelector(".ingredientslist");
//   //let ul = document.querySelector(".ingredientslist");
//   let inserIngredients = document.getElementsByTagName("li");

//   // var strong = document.createElement("strong");
//   // strong.setAttribute("class", "enGras");
//   // document.getElementById("truc").appendChild(strong);
//   console.log(inserIngredients);
//   recipes.forEach((ingredient) => {
//     console.log(inserIngredients);
//     // li.textContent += laListeDesIngredients(ingredient.ingredients);
//     laListeDesIngredients(ingredient.ingredients);
//     inserIngredients.innerHTML +=
//     console.log(inserIngredients);
//     console.log(laListeDesIngredients(ingredient.ingredients));
//     document.body.append(inserIngredients);
//   });
//   return inserIngredients;
// }

//laListeDesIngredientsHtml();
//console.log(laListeDesIngredients);
//console.log(arrayListIngredients);
//const arrayIngredientsSet = [...new Set(arrayListIngredients)];
//console.log(arrayListIngredients.join());

//doublons
// const filteredIngredientsArray = arrayListIngredients.filter(function (
//   ingredient
// ) {
//   return arrayListIngredients;
// });
// console.log(filteredIngredientsArray);

function salutation(name) {
  alert("Bonjour " + name);
}

function processUserInput(callback) {
  var name = prompt("Entrez votre nom.");
  callback(name);
}

processUserInput(salutation);

//

function append(valeur, tableau = []) {
  tableau.push(valeur);
  return tableau;
}

append(1); //[1]
append(2); //[2], et non [1, 2]

//

function salutation(nom, salut, message = salut + " " + nom) {
  return [nom, salut, message];
}

salutation("David", "Coucou");
// ["David", "Coucou", "Coucou David"]

salutation("David", "Coucou", "Bon anniversaire !");
// ["David", "Coucou", "Bon anniversaire !"]


//

// Produit une liste
var ul = document.createElement('ul');
document.body.appendChild(ul);

var li1 = document.createElement('li');
var li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e){
  // e.target se réfère à l'élément <li> cliqué
  // C'est différent de e.currentTarget qui doit faire référence au parent <ul> dans ce contexte
  e.target.style.visibility = 'hidden';
}

// Attache l'écouteur à la liste
// Il se déclenche pour chaque <li> clické
ul.addEventListener('click', hide, false);

//

var cube = function(x) { return x * x * x}; // Une expression de fonction
map(cube, [0, 1, 2, 5, 10]);
Copy to Clipboard
Le résultat de la dernière instruction est le tableau [0, 1, 8, 125, 1000].