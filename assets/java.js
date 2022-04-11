//code for the idbg database
var clientID = "86r14t0e30c28isroziyi3f0m1b3bo";
var clientSecret = "73dsrf43drt9m7rfhhmjpgbxzca8r3";

var accessToken;

var authURL = "https://id.twitch.tv/oauth2/token?client_id=86r14t0e30c28isroziyi3f0m1b3bo&client_secret=73dsrf43drt9m7rfhhmjpgbxzca8r3&grant_type=client_credentials";
var apiURL =  "https://api.igdb.com/v4/games"

// John's web server:
// https://floating-headland-95050.herokuapp.com/


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
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

setTimeout(test, 2000)
