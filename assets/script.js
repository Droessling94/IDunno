//code for the idbg database
var clientID = "86r14t0e30c28isroziyi3f0m1b3bo";
var clientSecret = "73dsrf43drt9m7rfhhmjpgbxzca8r3";

var accessToken;

var authURL = "https://id.twitch.tv/oauth2/token?client_id=86r14t0e30c28isroziyi3f0m1b3bo&client_secret=73dsrf43drt9m7rfhhmjpgbxzca8r3&grant_type=client_credentials";
var apiURL =  "https://api.igdb.com/v4/games"

// John's web server:
// https://floating-headland-95050.herokuapp.com/



//lines 16-55 pull information from the video game api
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
};
  
fetch(authURL, requestOptions)
.then(function (response) {
    console.log(response);
    return response.json();
})
.then(function(data) {
    accessToken = data.access_token;
    console.log(accessToken)
    return accessToken;
})


function test() {
  var myHeaders = new Headers();
    myHeaders.append("Client-ID", "86r14t0e30c28isroziyi3f0m1b3bo");
    myHeaders.append("Authorization", "Bearer " + accessToken);
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Content-Type", "*");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://floating-headland-95050.herokuapp.com/api.igdb.com/v4/games", requestOptions)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data)
  })
}
setTimeout(test, 2000);


//********BELOW HOLDS MOVIE API FETCH AND PARSE INFO*************//
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
};

setTimeout(getMovies("Spiderman"), 1000)


//*************Cheeky Design JS********//
const resultCardFrontFace = document.querySelector(".listFront");
const resultCardBackFace = document.querySelector(".listBack");
const resultsCardFlipLocation = document.querySelector(".innerResultContainer");
const backBtn = document.querySelector(".backBtn");
const nextBtn = document.querySelector(".nextBtn");
function toggleHide (){
  resultCardFrontFace.classList.toggle('hidden');
  resultCardBackFace.classList.toggle('hidden');
}
backBtn.addEventListener('click', function(){
  resultsCardFlipLocation.classList.toggle('flipped');
  setTimeout(toggleHide,125)
});

nextBtn.addEventListener('click', function(){
  resultsCardFlipLocation.classList.toggle('flipped');
  setTimeout(toggleHide,240)
});

//*******************SEARCH HTML FUNCTIONALITY******************//

var mApiUrlLatest = `https://api.themoviedb.org/3/movie/latest?api_key=${mKey}&language=en-US`;
var randomMovie;

///updates latestNumber to be used in the random number function
function getLatestNumber() {
  fetch(mApiUrlLatest)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    return data
  })
  .then(function(latestMovie){
    console.log(latestMovie);
    latestNumber = latestMovie.id
    console.log(latestNumber);
    return latestNumber
  })
  .then(function getRandomMovie(latestNumber) {
    let rand = Math.random() * latestNumber;
    console.log(rand);
    rand = Math.floor(rand);
    console.log(rand);
    randomMovieId = rand;
    console.log(randomMovieId);
    return randomMovieId;
  })
  .then(function getMovies(randomMovieId) {
    fetch(`https://api.themoviedb.org/3/movie/${randomMovieId}` + `?api_key=${mKey}`)
  .then(function (response) {
    console.log(response.ok);

    if(!response.ok){ getLatestNumber();
    }else{return response.json();}
  })
  .then( function(data){
    console.log(data);
    randomMovie = data;
    console.log(randomMovie);
  })
  })
};


getLatestNumber();
setTimeout(function(){
  console.log(randomMovie);
},1000);
