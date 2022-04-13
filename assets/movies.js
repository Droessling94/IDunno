var mKey = "a8ef916164f716884135094e19f6727b";

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
    checkedBoxes = document.querySelectorAll("input[name=contentRating]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        array.push(checkedBoxes[i].id)
    }

    movieUserInputs.contentRating = array.join(",");

    
    //GETS MIN YEAR
    var selected = document.querySelector("#min-year");
    var year = selected.value;
    movieUserInputs.minYear = year.substring(0,4);

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

    localStorage.setItem("movie-inputs", JSON.stringify(movieUserInputs));

var userInputURL = `https://api.themoviedb.org/3/discover/movie?api_key=${mKey}&genre=${movieUserInputs.genre}&certification_country=US&certification.gte=${movieUserInputs.certification}&primary_release_date.lte=${movieUserInputs.maxYear}&primary_release_date.gte=${movieUserInputs.minYear}&vote_average.gte=${movieUserInputs.minRating}&with_runtime.lte=${movieUserInputs.maxRuntime}`

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(userInputURL, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});