var myFavoriteMovies = [];
var myFavoriteGames = JSON.parse(localStorage.getItem("favoriteGameIDs"));
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
  if(myFavoriteGames !== null){
        // var gameID = myFavoriteGames[b];
        var name;
        // console.log(gameID);
        //code for the idbg database
        var accessToken;

        var authURL = "https://id.twitch.tv/oauth2/token?client_id=86r14t0e30c28isroziyi3f0m1b3bo&client_secret=73dsrf43drt9m7rfhhmjpgbxzca8r3&grant_type=client_credentials";

        //Authentication for the IGDB datebase.
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch(authURL, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            accessToken = data.access_token;
            var myHeaders = new Headers();
            myHeaders.append("Client-ID", "86r14t0e30c28isroziyi3f0m1b3bo");
            myHeaders.append("Authorization", "Bearer " + accessToken);
            
            for(var x = 0; x < myFavoriteGames.length; x++){
                var raw = "fields *; \r\nwhere (id = ("+myFavoriteGames[x]+"));";

                var requestOptions2 = {
                method: 'POST',
                headers: myHeaders,
                body:  raw,
                redirect: 'follow'
                };
                
                fetch("https://fusion-corsproxy.herokuapp.com/https://api.igdb.com/v4/games", requestOptions2)
                .then(response => response.json())
                .then(function(data) {
                    console.log(data);
                    name = data[0].name;
                    newLi = document.createElement("li");
                    newLi.classList = "card";
                    newLi.textContent = name;
                    newImg = document.createElement("img");
                    newImg.setAttribute("id", "scaled");
                    newImg.src = "./assets/pickolascage.jpg";
                    newLi.prepend(newImg)
                    document.querySelector(".my-favorites-list").append(newLi);
                })
                .catch(error => console.log('error', error));
            }
        })   
    }
}
var clrBtn = document.getElementById("clear-btn");
if(clrBtn){
    clrBtn.addEventListener("click", function() {
        myFavoriteGames = [];
        myFavoriteMovies = [];
        localStorage.removeItem("favoriteGameIDs");
        document.querySelector(".my-favorites-list").innerHTML = "";
    });
}
    