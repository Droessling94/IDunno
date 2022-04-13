var clientID = "86r14t0e30c28isroziyi3f0m1b3bo";
var clientSecret = "73dsrf43drt9m7rfhhmjpgbxzca8r3";

var accessToken;

var authURL = "https://id.twitch.tv/oauth2/token?client_id=86r14t0e30c28isroziyi3f0m1b3bo&client_secret=73dsrf43drt9m7rfhhmjpgbxzca8r3&grant_type=client_credentials";
var apiURL =  "https://api.igdb.com/v4/games"

$("button").click(function() {
    var buttonValue = $(this).val();
    console.log(buttonValue);
});

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

  fetch("https://floating-headland-95050.herokuapp.com/api.igdb.com/v4/genres/", requestOptions)
  .then(function (response) {
    return response.json();
    console.log(response)
  })
  .then(function(data) {
    console.log(data)
  })
}
setTimeout(test, 1000)