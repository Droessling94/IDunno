var movieUserInputs = {
    genre: "",
    contentRating: "",
    minYear: "",
    maxYear: "",
    minRating: "",
    maxRuntime: "",
}

document.querySelector("#submitBtn").addEventListener("click", function() {
    var array = [];

    //STORES GENRES SELECTED INTO ARRAY AND THEN TURNS THAT ARRAY INTO STRING
    //ADDS THE GENRE TO THE OBJECT
    var checkedBoxes = document.querySelectorAll("input[id=genre]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        array.push(checkedBoxes[i].name)
    }
    movieUserInputs.genre = array.join(",");

    //STORES CONTENT RATING AFTER EMPTYING THE PREVIOUS DATA FROM ARRAY
    array = [];
    checkedBoxes = document.querySelectorAll("input[id=contentRating]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        array.push(checkedBoxes[i].name)
    }
    movieUserInputs.contentRating = array.join(",");
    
    //GETS MIN YEAR
    var selected = document.querySelector("#min-year");
    var year = selected.value;
    userInputs.minYear = year.substring(0,4);

    //GETS MIN YEAR
    selected = document.querySelector("#max-year");
    year = selected.value;
    movieUserInputs.maxYear = year.substring(0,4);

    //GETS SELECTED MIN USER RATING
    selected = document.querySelector("#user-rating");
    movieUserInputs.minRating = selected.value;

    //GETS SELECTED MAX RUNTIME
    selected = document.querySelector("#max-runtime");
    movieUserInputs.maxRuntime = selected.value;

    console.log(movieUserInputs);

});