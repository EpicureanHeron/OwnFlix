

//onclick event of button click
$("#sign-in").on("click", function(event){
    event.preventDefault();
    $('#sign-in-modal').css('display', 'block');
    // $("#login-view").empty();
    // $("#landing-header-view").empty();
    // var a = $("<form>");
    // a.addClass("signin-user-view")
    // //sign in username and password and sign in button and sign up link.
    // //TODO - check the form labels for correctness.
    // //TODO - how is the form data being transfered.  Updated needed?
    // a.append("<div class='row'><div class='col-sm-4'></div><div class='col-sm-4 sign-in-form'><h3>Sign In</h3><br><input type='text' name='username' value='UserName'><br><br><input type='text' name='Password' value='password'><br><br><input type='submit' id='submit-user' href='UserPage.html' value='Submit'><br><br> <button class='new-user'>New? Sign up Now.</button> <div class='col-sm-4'></div></div>");
    // $("#login-view").append(a);

})

//onclick event of button click
$("#create-new-user").on("click", function(event){
    event.preventDefault();
    $('#new-user-modal').css('display', 'block');
    // $("#login-view").empty();
    // $("#landing-header-view").empty();
    // $("#sign-in").empty();
    // var a = $("<form>");
    // a.addClass("new-user-view")
    // //sign up first last, username, email, password, create acount button, already user, sign in link
    // //create account button send to user dashboard page and load html
    //     //TODO - check the form labels for correctness.
    // //TODO - how is the form data being transfered.  Updated needed?
    // //Sign in or create user button in form needs to go user dashboard.
    // a.append("<div class='row'><div class='col-sm-3'></div><div class='col-sm-6 sign-in-form'><h3>Create Account</h3><br><input type='text' name='firstname' value='FirstName'><br><br><input type='text' name='lastname' value='LastName'><br><br><input type='text' name='username' value='UserName'><br><br><input type='text' name='zipcode' value='ZipCode'><br><br><input type='text' name='email' value='Email'><br><br><input type='text' name='password' value='Password'><br><br><input type='submit' id='submit-user' value='Submit'></div><div class='col-sm-3'></div></div>");
    // $("#login-view").append(a);
})

$("#new-user").on("click", function(event){
    event.preventDefault();
    //handle the 'New? Sign up now button' ie hide sign in modal
    $('#sign-in-modal').css('display', 'none');
    $('#new-user-modal').css('display', 'block');
})

//onclick event of - send to user dashboard
$("#submit-user").on("click", function(event){
    event.preventDefault();
    window.location = "UserPage.html";

})

// when you clicka da x da modal go away
$('.close').on('click', function(e) {
  $('.modal').css('display', 'none');
})


// Validate login

//

// Validate new user details
$('#submit-new-user').on('click', function(e) {
  // Validate form with jquery validate
  $("form[name='new-user-form']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstName: "required",
      lastName: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 8
      },
      address: {
        required: true
      },
      city: {
        required: true
      },
      state: {
        required: true,
        rangelength: [2,2]
      },
      zip: {
        required: true,
        rangelength: [5, 5]
      },

    },
    // Specify validation error messages
    messages: {
      firstName: "Please enter your firstname",
      lastName: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 8 characters long"
      },
      email: "Please enter a valid email address",
      address: {
        required: "Please enter your street address"
      },
      city: {
        required: "Please enter your city"
      },
      state: {
        required: "Please enter your state's postal code i.e. MN",
        rangelength: "State Postal Code should be only 2 leters"
      },
      zip: {
        required: "Please enter your 5 digit zip code",
        rangelength: "Zip Code should 5 digits (ignore anything following a hyphen)"
      }
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {

      // Serialize form data
      let serialForm = $(form).serializeArray();
      let data = {};
      for (let i = 0; i < serialForm.length; i++){
        data[serialForm[i]['name']] = serialForm[i]['value'];
      }
      console.log(data);
      console.log("valid form");

      $.post('/api/user', data, function(r) {
        console.log("Woo posted");
      })
    }
  });
});
