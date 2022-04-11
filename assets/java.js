//code for the idbg database
var clientID = "86r14t0e30c28isroziyi3f0m1b3bo";
var clientSecret = "73dsrf43drt9m7rfhhmjpgbxzca8r3";

var accessToken;

var authURL = "https://id.twitch.tv/oauth2/token?client_id=86r14t0e30c28isroziyi3f0m1b3bo&client_secret=73dsrf43drt9m7rfhhmjpgbxzca8r3&grant_type=client_credentials";
var apiURL =  "https://api.igdb.com/v4/games"


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
})



//     var myHeaders = new Headers();
//     myHeaders.append("Client-ID", "86r14t0e30c28isroziyi3f0m1b3bo");
//     myHeaders.append("Authorization", "Bearer ddsjcc8zwpzu9om6nqd8swnyuykcyp");

//     var requestOptions2 = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow',
//     };

//     fetch("https://api.igdb.com/v4/games", requestOptions2)
//   .then(response => console.log(response))
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
