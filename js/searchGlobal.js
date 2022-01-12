function handleGlobalSearch() {
  const searchPrincipal = document.getElementById("inputsearch");
  searchPrincipal.addEventListener("input", (e) => {
    //console.log(e.target.value);
    globalSearchString = e.target.value; // globalSearchString is global, defined in selectRecipes
    console.log("globalSearchString", globalSearchString);
    CloseAllPanels();
    placeCards(selectedRecipes());
  });
}
