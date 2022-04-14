//code for the idbg database
var clientID = "86r14t0e30c28isroziyi3f0m1b3bo";
var clientSecret = "73dsrf43drt9m7rfhhmjpgbxzca8r3";
var accessToken;
var index = 0;

var authURL = "https://id.twitch.tv/oauth2/token?client_id=86r14t0e30c28isroziyi3f0m1b3bo&client_secret=73dsrf43drt9m7rfhhmjpgbxzca8r3&grant_type=client_credentials";
var apiURL =  "https://api.igdb.com/v4/games"
var object;

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
    return accessToken;
})

var gameUserInputs = {
    genre: "",
    theme: "",
    platform: "",
}

document.querySelector("#submitBtn").addEventListener("click", async function() {
  
  var array = [];

  //STORES ALL CHECKED GENRES INTO OBJECT
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

  //STORES ALL CHECKED PLATFORMS INTO OBJECT
  array = [];
  checkedBoxes = document.querySelectorAll("input[id=platform]:checked");
  for (var i = 0; i < checkedBoxes.length; i++) {
    array.push(checkedBoxes[i].value)
  }
  gameUserInputs.platform = array.join(",");

  var myHeaders = new Headers();
    myHeaders.append("Client-ID", "86r14t0e30c28isroziyi3f0m1b3bo");
    myHeaders.append("Authorization", "Bearer " + accessToken);
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Content-Type", "*");

  var raw = "fields *; \r\nlimit 500; \r\nwhere (platforms = ("+gameUserInputs.platform+") & genres = ("+gameUserInputs.genre+") & themes = ("+gameUserInputs.theme+"));";


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://fusion-corsproxy.herokuapp.com/https://api.igdb.com/v4/games", requestOptions)
      .then(response => response.json())
      .then(result => gameObject = result)
      .catch(error => console.log('error', error));

    function storeData() {
      console.log('Setting local storage...');

      localStorage.setItem('gameObject', JSON.stringify(gameObject));
      console.log('Local storage set!')
      window.location.href = "./gameResults.html"
    }
    setTimeout(storeData, 2000);
});
