// A $( document ).ready() block.

var CheckedOutMovies = ["tt2015381", "tt0468569"];
var PreviouslyWatched = ["tt0848228"];
var UserMovies = ["tt0848228", "tt0468569", "tt5580390"];

//     //OMDB http://www.omdbapi.com/

//         //the movie datbase https://developers.themoviedb.org/3/configuration/get-api-configuration
// var xhr = $.get("https://api.themoviedb.org/3/search/movie?api_key=373b98cfb44a36458b78fb8be90e88e2&query="+WishList[i]);
//         xhr.done(function(data) {
//             console.log("Success got data", data);

//         // the omdb datbase
//         var xhr2 = $.get("http://www.omdbapi.com/?t="+ WishList[i] +"&apikey=b2605f08");
//         xhr2.done(function(data) {
//         console.log("Success got data", data);

$(document).ready(function() {
  console.log("ready!");

  renderCheckOutMovies();
  renderPreviouslyWatchedMovies();
  renderUsersMovies();
});

//User Dash board
//on load
//query user database for current checked out, wishlist and already watched,
//ajax call info as needed for each or pull info as saved in database
//print to screen

function renderCheckOutMovies() {
  // event.preventDefault();

  for (var i = 0; i < CheckedOutMovies.length; i++) {
    // the omdb datbase
    var xhr = $.get(
      "http://www.omdbapi.com/?i=" + UserMovies[i] + "&apikey=b2605f08"
    );
    xhr.done(function(data) {
      console.log("Success got data", data);
      var gifDiv = $("<div class='col-md-4'>");
      gifDiv.append("<img src=" + data.Poster + "></div></div>");

      $("#top-section").prepend(gifDiv);
    });
  }

  // var a = $("<form>");
  // a.append("<div class='row'><div class='col-sm-12'></div><div class='col-sm-6 user-add-movie'><h3>Add Movie to Collection</h3><br><input type='text' name='movie' id='movie-input' value='movie title'><br><br><input type='text' name='qty' value='qty'><br><br><input type='submit' id='add-user-movie' value='Submit'></div><div class='col-sm-3'></div></div>");
  // $("#mid-section").append(a);
}

function renderPreviouslyWatchedMovies() {
  // event.preventDefault();

  for (var i = 0; i < PreviouslyWatched.length; i++) {
    // the omdb datbase
    var xhr = $.get(
      "http://www.omdbapi.com/?i=" + PreviouslyWatched[i] + "&apikey=b2605f08"
    );
    xhr.done(function(data) {
      console.log("Success got data", data);
      var gifDiv = $("<div class='col-md-4'>");
      gifDiv.append("<img src=" + data.Poster + "></div></div>");

      $("#mid-section").prepend(gifDiv);
    });
  }
}

function renderUsersMovies() {
  // event.preventDefault();
  console.log(UserMovies);
  for (var i = 0; i < UserMovies.length; i++) {
    // the omdb datbase
    var xhr = $.get(
      "http://www.omdbapi.com/?i=" + UserMovies[i] + "&apikey=b2605f08"
    );
    xhr.done(function(data) {
      console.log("Success got data", data);
      var gifDiv = $("<div class='col-md-4'>");
      gifDiv.append("<img src=" + data.Poster + "></div></div>");

      $("#bot-section").prepend(gifDiv);
    });
  }
}

//User clicks on search icon
//clear current screen
//on click, load search code
//user enters key word to search database
//ajax call searches omdb for info and populates results.
//search also queries database and looks for availbility to checkout

//Add to wish list and checkout
//add movie id to database

//Your movies
//query user database for movies in yourmovies
//ajax call for movie info and display
//text and submit to add movie to list

function SearchMoviedatabase(a) {
  // the omdb datbase
  var xhr = $.get("http://www.omdbapi.com/?t=" + a + "&apikey=b2605f08");
  xhr.done(function(data) {
    console.log("Success got data", data);
    console.log(data.imdbID);
  });
}

//onclick event of button click
$("#add-user-movie").on("click", function(event) {
  event.preventDefault();
  //grap the input from text box
  var newmovie = $("#movie-input")
    .val()
    .trim();
  console.log(newmovie);

  //TODO
  //ajax call to find id of new movie
  //use animals code to create a rendering of the search in image or list form.
  //update funtions to pass in the varriable to the render function
  //on click of the search images, add to your movie list.

  var movieId = "";
  SearchMoviedatabase(newmovie);
  // console.log(movieId)
  // UserMovies.push(movieId);

  //calling the render button function
  renderUsersMovies();
});

//Movie view
//ajax call for movie id
//two buttons, add to wishlist and checkout

//checkout
//change database from avilable to checkedout
//add movie to currently checked out db
//wishlist
//add movie to wish list db
