//code for the idbg database
var clientID = "86r14t0e30c28isroziyi3f0m1b3bo";
var clientSecret = "73dsrf43drt9m7rfhhmjpgbxzca8r3";
var accessToken;

var authURL = "https://id.twitch.tv/oauth2/token?client_id=86r14t0e30c28isroziyi3f0m1b3bo&client_secret=73dsrf43drt9m7rfhhmjpgbxzca8r3&grant_type=client_credentials";
var apiURL =  "https://api.igdb.com/v4/games"

//Authentication for the IGDB datebase.
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

var gameUserInputs = {
    genre: "",
    theme: "",
    platform: "",
}

document.querySelector("#submitBtn").addEventListener("click", function() {
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
  console.log(gameUserInputs);

  var myHeaders = new Headers();
    myHeaders.append("Client-ID", "86r14t0e30c28isroziyi3f0m1b3bo");
    myHeaders.append("Authorization", "Bearer " + accessToken);
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Content-Type", "*");

var raw = "fields *; \r\nlimit 8; \r\nwhere (platforms = ("+gameUserInputs.platform+") & genres = ("+gameUserInputs.genre+") & themes = ("+gameUserInputs.theme+"));";


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    console.log(requestOptions)
    console.log(requestOptions.headers);
    console.log(requestOptions.body);
    
    fetch("https://fusion-corsproxy.herokuapp.com/https://api.igdb.com/v4/games", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
});