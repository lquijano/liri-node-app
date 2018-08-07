
# LIRI Bot Assignment

This weeks challenge was to use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in command through Language vs Speech. LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

my-tweets

spotify-this-song

movie-this

do-what-it-says

# What Each Command Does
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
Or if no song is passed through, it will default to *"Florescent Adolescent" by Arctic Monkeys

node liri.js movie-this <movie name>
Shows the following information in terminal/bash.

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
Or if no movie is passed through, it will default to "Mr. Nobody"

node liri.js do-what-it-says
Takes the text from random.txt and runs the song through spotify-this-song command

# Technology Used
Node.js
Twitter NPM Package - https://www.npmjs.com/package/twitter <br>
Spotify NPM Package - https://www.npmjs.com/package/spotify <br>
Request NPM Package - https://www.npmjs.com/package/request <br>

# Built With
Atom - Text Editor

# Authors
Leslie Quijano - Node JS 
