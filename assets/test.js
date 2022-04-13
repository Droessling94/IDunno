var mKey = "a8ef916164f716884135094e19f6727b";
var mApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${mKey}`;
function getMovies(searchedMovie) {
  fetch(mApiUrl + `&query=${searchedMovie}`)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
}

var userInputs = {
    genre: "28,12", //action and adventer
    certification_country: "US",
    certification: "PG,G",
    minYear: "2000",
    maxYear: "2022",
    minRating: "8",
    maxRuntime: "200", //in minutes
}

var newURL = `https://api.themoviedb.org/3/discover/movie?api_key=${mKey}&genre=${userInputs.genre}&certification_country=US&certification.lte=${userInputs.certification}&primary_release_date.lte=${userInputs.maxYear}&primary_release_date.gte=${userInputs.minYear}&vote_average.gte=${userInputs.minRating}&with_runtime.lte=${userInputs.maxRuntime}`

console.log(newURL)