var myFavoriteMovies = ["675353", "508947", "414906"];
var myFavoriteGames = []
//"675353", "508947", "414906"
var newLi;
var newImg;

// SCRIPT FOR SHOWING FAVORITES LIST ON INDEX.HTML
window.onload = function() {
  if(myFavoriteMovies !== null) {
    for(var x = 0; x < myFavoriteMovies.length; x++){
      var searchUrl = "https://api.themoviedb.org/3/movie/" + encodeURI(myFavoriteMovies[x] + "?api_key=a8ef916164f716884135094e19f6727b");
      fetch(searchUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        newLi = document.createElement("li");
        newLi.classList = "card";
        newLi.textContent = data.title;
        newImg = document.createElement("img");
        newImg.setAttribute("id", "scaled");
        newImg.src = "https://image.tmdb.org/t/p/original" + data.poster_path;
        newLi.prepend(newImg)
        document.querySelector(".my-favorites-list").append(newLi);
      })
    }
  }
};