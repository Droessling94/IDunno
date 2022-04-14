// Code that we might use in a later function.

// const resultCardFrontFace = document.querySelector(".listFront");
// const resultCardBackFace = document.querySelector(".listBack");
// const resultsCardFlipLocation = document.querySelector(".innerResultContainer");

// This grabs the back, next, and save buttons, which we will use to update our game selection.

const backBtn = document.querySelector(".backBtn");
const nextBtn = document.querySelector(".nextBtn");
const saveBtn = document.querySelector(".saveBtn");

//This creates empty global variables for us to manipulate later on.

var currentGame = [];
var gameName;
var gameRating;
var gameSummary;
var gameID;
var favoriteGames;
if(localStorage.getItem("favoriteGameIDs") !== null){
  var favoriteGames = JSON.parse(localStorage.getItem("favoriteGameIDs"));
}else {
  favoriteGames = [];
}


var gameObjectString = localStorage.getItem('gameObject');
var gameObjects = JSON.parse(gameObjectString);
var index = 0;


// This function will retrieve a new game from localStorage based on the current index.
// It starts at 0 and is incremented/decremented based on the user clicking next or back.

function getCurrentGame() {
  currentGame = gameObjects[index];
  gameName = "Title: " + currentGame.name;
  gameRating = ~~currentGame.rating;
      if (gameRating == 0) {
        gameRating = "Not currently rated.";
      }
      else {
        gameRating = "Rating: " + gameRating + "/100";
      }
  gameSummary = "Summary: " + currentGame.summary;
  gameID = currentGame.id;
}

// We run the function once to display the content on the screen.

getCurrentGame();

console.log(currentGame);

// function toggleHide (){
//   resultCardFrontFace.classList.toggle('hidden');
//   resultCardBackFace.classList.toggle('hidden');
// }

// When the back button is clicked, decrement index by 1 and fetch new game results.
// Error checking to ensure index
backBtn.addEventListener('click', function(){
  index--;
  if (index < 0) {
    index = 0;
  }
  getCurrentGame();

  $("#resultName1").text(gameName);
  $("#rating1").text(gameRating);
  $("#summary1").text(gameSummary);
  console.log(index);
  // resultsCardFlipLocation.classList.toggle('flipped');
  // setTimeout(toggleHide,280);
});

nextBtn.addEventListener('click', function(){
  index++;
  getCurrentGame();

  $("#resultName1").text(gameName);
  $("#rating1").text(gameRating);
  $("#summary1").text(gameSummary);

  console.log(index);
})

saveBtn.addEventListener('click', function(){
  favoriteGames.push(gameID);
  localStorage.setItem('favoriteGameIDs', JSON.stringify(favoriteGames));
  console.log("Saved Game ID to local storage!");
})

$("#resultName1").text(gameName);
$("#rating1").text(gameRating);
$("#summary1").text(gameSummary);





//   setTimeout(toggleHide,280);
//     if(nowNext.length <= 2){
//       console.log(nowNext);
//       getLatestNumber();
//       setTimeout(function(){
//         nowNext.push(randomMovie);
//       },240);
  
//     }else if(nowNext.length > 3){
//       nowNext.shift();
//       console.log(nowNext);
//     }else {
//       nowNext.shift();
//       getLatestNumber();
//       setTimeout(function(){
//         nowNext.push(randomMovie);
//       },240);
//       console.log(nowNext);
//     };
//     ///updating info after next click///
//     setTimeout( function(){
//       if(nowNext[2].title = ""){
//         $("#resultName1").text("Apparently this one doesnt have a name");
//       }else{
//         $("#resultName1").text("Title:" + nowNext[2].title);
//       };
//       if(!nowNext[2].release_date){
//         $("#reasultRelease1").text("or a release Date");
//       }else{
//         $("#reasultRelease1").text("Release Date:" + nowNext[2].release_date);
//       };
//       if(nowNext[2].genres.length > 0){
//         $("#resultGenre1").text(nowNext[2].genres[0].name);
//       }else {
//         $("#resultGenre1").text("wow no genre");
//       };
//       if(!nowNext[2].runtime){
//         $("#resultRuntime1").text("Length: So short its not even defined. Yea you've already finished it");
//       }else{
//         $("#resultRuntime1").text("Length:" + (nowNext[2].runtime / 60) + " Hours");
//       };
//       if(!nowNext[2].popularity){
//         $("#resultRating1").text("No one likes this, trust us you wouldnt either");
//       }else{
//         $("#resultRating1").text("Popularity:" + (nowNext[2].popularity) + " % of people like this");
//       };
//       if(!nowNext[2].overview){
//         $("#resultOverView1").text("This one is quite obscure, it appears theres no synopsis!");
//       } else{
//         $("#resultOverView1").text(nowNext[2].overview);
//       };
//       if(!nowNext[2].poster_path){
//         console.log("broke");
//         $("#resultImg1").attr("src", "./assets/pickolascage.jpg");
//       }else{
//        fetch(`https://image.tmdb.org/t/p/w500/` + nowNext[2].poster_path)
//         .then(function(response){
//           return response;
//         })
//         .then(function(data){
//           $("#resultImg1").attr("src", data.url);
//         })
     
//       };
//         },280);
//     setTimeout( function(){
//       if(nowNext[1].title = ""){
//         $("#resultName2").text("Apparently this one doesnt have a name");
//       }else{
//         $("#resultName2").text("Title:" + nowNext[1].title);
//       };
//       if(!nowNext[1].release_date){
//         $("#reasultRelease2").text("or a release Date");
//       }else{
//         $("#reasultRelease2").text("Release Date:" + nowNext[1].release_date);
//       };
//       if(nowNext[1].genres.length > 0){
//         $("#resultGenre2").text(nowNext[1].genres[0].name);
//       }else {
//         $("#resultGenre2").text("wow no genre");
//       };
//       if(!nowNext[1].runtime){
//         $("#resultRuntime2").text("Length: So short its not even defined. Yea you've already finished it");
//       }else{
//         $("#resultRuntime2").text("Length:" + (nowNext[1].runtime / 60) + " Hours");
//       };
//       if(!nowNext[1].popularity){
//         $("#resultRating2").text("No one likes this, trust us you wouldnt either");
//       }else{
//         $("#resultRating2").text("Popularity:" + (nowNext[1].popularity) + " % of people like this");
//       };
//       if(!nowNext[1].overview){
//         $("#resultOverView2").text("This one is quite obscure, it appears theres no synopsis!");
//       } else{
//         $("#resultOverView2").text(nowNext[1].overview);
//       };
//       if(!nowNext[1].poster_path){
//          $("#resultImg2").attr("src","./assets/pickolascage.jpg");
//       }else{
//        fetch(`https://image.tmdb.org/t/p/w500/` + nowNext[1].poster_path)
//         .then(function(response){
//           return response;
//         })
//         .then(function(data){
//           $("#resultImg2").attr("src", data.url);
//         })
     
//       };
//         },280);
        
//   }else {
//     setTimeout(function(){
//     $("#resultName2").text("OK I mean I get the first");
//     $("#reasultRelease2").text("three");
//     $("#resultGenre2").text("werent all that great");
//     $("#resultRuntime2").text("but like why did");
//     $("#resultRating2").text("you even come here");
//     $("#resultOverView2").text("if your not willing to work with us?");
//     $("#resultName1").text("This is the front of the card");
//     $("#reasultRelease1").text("and the sentiment is the same as the back..");
//     $("#resultGenre1").text("seeing the card's two sides getting called out like that");
//     $("#resultRuntime1").text("really breaks the immersion of it all");
//     $("#resultRating1").text("doesnt it?");
//     $("#resultOverView1").text("Yea, Hope your happy, Go play Elden ring or something");
//     $("#resultImg2").attr("src","./assets/pickolascage.jpg");
//     $("#resultImg1").attr("src", "./assets/pickolascage.jpg");
//   },280);

    
//   }
// });

// //*******************SEARCH HTML FUNCTIONALITY******************//

// var mApiUrlLatest = `https://api.themoviedb.org/3/movie/latest?api_key=${mKey}&language=en-US`;
// var randomMovie;

// //************BELOW IS THE FUNCTIONALITY TO CHOOSE A RANDOM MOVIE****************//
// function getLatestNumber() { 
//   fetch(mApiUrlLatest) 

//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     return data
//   })
//   .then(function(latestMovie){ 
//     latestNumber = latestMovie.id
//     return latestNumber
//   })
//   .then(function getRandomMovie(latestNumber) { 
//     let rand = Math.random() * latestNumber;
//     rand = Math.floor(rand);
//     var randomMovieId = rand;
//     return randomMovieId;
//   })
//   .then(function getMovies(randomMovieId) {
//     fetch(`https://api.themoviedb.org/3/movie/${randomMovieId}` + `?api_key=${mKey}`)
//   .then(function (response) {
//     console.log(response.ok);

//     if(!response.ok){ getLatestNumber(); 
//     }else{return response.json();}
//   })
//   .then(function(response){
//     console.log(response);
//     if(response.adult){
//        getLatestNumber()
//     }else{
//       return response;
//     };
//   })
//   .then( function(data){
//     randomMovie = data;
//     if(!nowNext.length){
//       nowNext.push(randomMovie);
//     }
//   })
//   })
// };


// getLatestNumber();
// console.log(nowNext);
// setTimeout(function(){
//   if(nowNext[0].title = ""){
//     $("#resultName1").text("Apparently this one doesnt have a name");
//   }else{
//     $("#resultName1").text("Title:" + nowNext[0].title);
//   };
//   if(!nowNext[0].release_date){
//     $("#reasultRelease1").text("or a release Date");
//   }else{
//     $("#reasultRelease1").text("Release Date:" + nowNext[0].release_date);
//   };
//   if(nowNext[0].genres.length > 0){
//      $("#resultGenre1").text(nowNext[0].genres[0].name);
//   }else {
//     $("#resultGenre1").text("wow no genre");
//   };
//   if(!nowNext[0].runtime){
//     $("#resultRuntime1").text("Length: So short its not even defined. Yea you've already finished it");
//   }else{
//     $("#resultRuntime1").text("Length:" + (nowNext[0].runtime / 60) + " Hours");
//   };
//   if(!nowNext[0].popularity){
//     $("#resultRating1").text("No one likes this, trust us you wouldnt either");
//   }else{
//     $("#resultRating1").text("Popularity:" + (nowNext[0].popularity) + " % of people like this");
//   };
//   if(!nowNext[0].overview){
//     $("#resultOverView1").text("This one is quite obscure, it appears theres no synopsis!");
//   } else{
//     $("#resultOverView1").text(nowNext[0].overview);
//   };
//   if(!nowNext[0].poster_path){
//     console.log("broke");
//     $("#resultImg1").attr("src","./assets/pickolascage.jpg");
//   }else{
//    fetch(`https://image.tmdb.org/t/p/w500/` + nowNext[0].poster_path)
//     .then(function(response){
//       return response;
//     })
//     .then(function(data){
//       $("#resultImg1").attr("src", data.url);
//     })
//   };
// },800);


//***************EVENT LISTENERS FOR DYNAMICALLY CHANGING RESULT PAGE ON NEXT OR BACK****************//$
