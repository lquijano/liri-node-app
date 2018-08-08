require("dotenv").config();

// In this section we are importing the Twitter and Spotify NPM package
// if you do not require a package you cannot use the methods associated with them -- so require it!

var Twitter = require ("twitter");
var Spotify = require ("spotify");

// importing the API keys. the ./ allows you access a file within the same directory
var keys = require ("./keys");

var request = require ("request");

// always create a varaible that's name is identical to the package you will be using. If you're using it require it!
var fs = require ("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);


// using a function expression
var getArtistName = function(artist) {
    return artist.name;
};

var getMeSpotify = function(songName){
  if (songName === undefined){
      songName = "anemone";
  }
  spotify.search(
    {
      type:"track",
      query = songName
    },

  // running a function for running a spotify API search
    function(err, data){
      if (err) {
        console.log('This is your problem: ' + err);
        return;
      }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++){
            console.log(i);
            console.log("artist(s): " + songs[i].artists.map(getArtistNames));
            console.log("song name: " + songs[i].name);
            console.log("preview song: " + songs[i].preview_url);
            console.log("album: " + songs[i].album.name);
            console.log("-----------------------------------");
        }
    }
  );
};
// running a function expression for running a twitter API search
  var getMeTweets = function(){
    var client = new Twitter(keys.twitter);
    var params = {
        screenName: "CNN"
    };
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log(" ");
        console.log(tweets[i].text);
      }
    }
  });
};
  }


  //
  // using function expressions stating var first
