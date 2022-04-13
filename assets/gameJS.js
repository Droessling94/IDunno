gameUserInputs = {
    genre: "",
    theme: "",
    platform: "",
}

document.querySelector("#submitBtn").addEventListener("click", function() {
  var array = [];

  //STORES ALL CHENCKED GENRES INTO OBJECT
  var checkedBoxes = document.querySelectorAll("input[id=genre]:checked");
  for (var i = 0; i < checkedBoxes.length; i++) {
    array.push(checkedBoxes[i].value)
  }
  gameUserInputs.genre = array.join(",");

  //STORES ALL CHECKED THEMES INTO OBJECT
  array = [];
  checkedBoxes = document.querySelectorAll("input[id=theme]:checked");
  for (var i = 0; i < checkedBoxes.length; i++) {
    array.push(checkedBoxes[i].value)
  }
  gameUserInputs.theme = array.join(",");

  //STORES ALL CHECKED PLATFORM INTO OBJECT
  array = [];
  checkedBoxes = document.querySelectorAll("input[id=platform]:checked");
  for (var i = 0; i < checkedBoxes.length; i++) {
    array.push(checkedBoxes[i].value)
  }
  gameUserInputs.platform = array.join(",");
  console.log(gameUserInputs);
});