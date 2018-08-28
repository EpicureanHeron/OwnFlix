
//

$("#searchMovieBtn").on("click", function () {
  $("#movies-view").empty()
  console.log("clicked")
  event.preventDefault();
  $("#movies-view").empty()
  console.log("clicked")

  var movieToSearch = $("#searchMovie")
    .val()
    .trim();
  $.ajax({

    url: "movies/search/" + movieToSearch,
    method: "GET"

  }).then(function (response) {
    var response = JSON.parse(response)
    // Creates a div to hold the movie
  
    response.Search.forEach(element => {

      console.log(element)
     // var newDiv = $("<div class='col-sm-6 addMovie' style='padding:1rem; margin:auto'>");
      var newDiv = $("<div class='col-sm-6 addMovie'>");

     // theDiv.addClass("addMovie");


      // Retrieves the Rating Data
      var titleInfo = element.Title

      var omdbKey = element.imdbID

      var titleH3 = $("<h3>")

      newDiv.attr("title", titleInfo)

      newDiv.attr("omdbKey", omdbKey)

      titleH3.html(titleInfo)

      newDiv.append(titleH3);

      var releaseYear = element.Year;
      // Creates an element to hold the release year
      var releaseYearP = $("<p>");
      // Displays the release year
      releaseYearP.html("Release year: " + releaseYear);

      newDiv.append(releaseYearP);

      var image = element.Poster;
      // Creates an element to hold the image
     // var imgElement = $("<img onerror='if (this.src == N/A') this.src = 'img/error.jpg'' height='300px width='250px'>");

      var imgElement = $("<img onerror='if (this.src == N/A') this.src = 'img/error.jpg''>");
      //<img src="foo.jpg" onerror="if (this.src != 'error.jpg') this.src = 'error.jpg';">
      imgElement.attr("src", image);
      // Appends the image
      newDiv.append(imgElement);
      // Puts the entire Movie above the previous movies.

      $("#movies-view").prepend(newDiv);

    })
  });
});

$('body').on('click', '.addMovie', function () {

  event.preventDefault();
  var omdbID = $(this).attr("omdbKey")

  
  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: "/movies/search/title/" + omdbID,
    method: "GET"
  }).then(function (response) {
    var response = JSON.parse(response)
    var movieDiv = $("<div>")

    //movie title
    var p = $("<h3>")

    p.html(response.Title)

    movieDiv.append(p)

    p = $("<p>")

    //movie plot
    p.html(response.Plot)

    movieDiv.append(p)

    var imageDiv = $("<div>")

    var newImg = $("<img>")

    newImg.attr("src", response.Poster)

    imageDiv.append(newImg)

    movieDiv.append(imageDiv)


    //the "claim it" button has all the data for the movies table"
    //
    //x title, loanStatus, loanerID, x plot,x poster, x actors, x omdbKey, x director
    var button = $("<button>")

    button.addClass("btn btn-primary modalBtn ")

    button.html("Claim It")

    button.attr("keyID", response.imdbID)

    button.attr("title", response.Title)

    button.attr("plot", response.Plot)

    button.attr("poster", response.Poster)

    button.attr("actors", response.Actors)

    button.attr("director", response.Director)

    button.attr("id", "claimMovie")

    movieDiv.append(button)

    button = $("<button>")

    button.addClass("btn btn-danger modalBtn")

    button.html("Go Back")

    button.attr("id", "closeModal")

    movieDiv.append(button)

    $(".movieClicked").append(movieDiv)
    $('#movieSelectedModal').css('display', 'block');
  })
})

$('body').on('click', '#claimMovie', function () {

  //title, loanStatus, loanerID, plot, poster, actors, omdbKey, director
  var data = {
    title: $(this).attr("title"),
    omdbKey: $(this).attr("keyID"),
    plot: $(this).attr("plot"),
    poster: $(this).attr("poster"),
    actors: $(this).attr("actors"),
    director: $(this).attr("director"),
    loanStatus: false
  }
  $.ajax({
    type: "POST",
    url: "/api/movies",
    data: data,
  }).then(function(){

    $(".movieClicked").empty()
    var h2 = $("<h2>")
    h2.html("Congrats! " + data.title + " has been added to your collection")
    $(".movieClicked").append(h2)
    var button = $("<button>")
    button.addClass("btn btn-danger")
    button.attr("id", "closeModal")
    button.html("Close Window")
    $(".movieClicked").append(button)

  }
)

})

$('body').on('click', '#closeModal', function () {
  $('.modal').css('display', 'none');
  $(".movieClicked").empty()


})