### User Table
    UserID - Unique
    FirstName
    LastName
    Address
    City
    State
    Zip
    Password

### Movie Table
    ID - Unique
    MovieID
    MovieOBJ
        Title
        Review
        Actors
        PosterImgURL
        Description
        Other?
    Status (CheckedOut / Avialble / Transit)
    OwnerUserID 
    RenterUserID

### MovieRentalHistory Table
    ID - Unique
    RenterUserID
    WatchMovieID




### Create User
    Sends login info to populate new ID in User Table

### Login In
    Pulls Email from User table and checks password for validation 


### Dashboard - Your checked out Movies
    Look in Movie Table for your ID in RenterUserID
    Post all with status checked out

<!-- ### Dashboard - Your Watch MovieRentalHistory
    Look in MovieRentalHistory for your RenterUserID
    Join with Movie Table for all to retriev the Movie Info and display. -->

### Dashboard Search - Search for movie to Rent
    Search Movie table for Movie Title
    Display all avialble


### User Dashbord
    Your info  
        Email 
        Location

    Your Movie Database.
        Look in Movie Table for your ID in OwnerUserID
        Post all.  add button based on status.
            Click Check in to change Movie Table from Pending to Avalable. 

    Add new Movie
        AJAX request for movie keyword
        User clicks on movie or button to add to their list
            Populate new movie to Movie Table