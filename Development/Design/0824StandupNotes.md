## Standup   
    Group 2 - Project OwnFlix  
    Date 24th Aug 2018  

## Outline  

    1. What I got done   
    2. What I am working on  
    3. Any blockers  

## Tsimnuj Hawj [4:06 PM]  
    1. What I worked on today? I finished integrating Passport.js, Express Sessions, and Bcrypt to insert a new user model into the table with a hashed password. I also used Express Sessions and Passport.js to generate a local cookie that stores the user information. With this cookie, we can pull data from the table pertaining to the specific user.  
    2. I am still working on ensuring that the cookie is persistent through route changes. I am also working on using the Passport.js function isAuthorized() to give page access to the logged in user.  
    3. It would be awesome to have all the pages (specifically the dashboard) converted to Handlebars so I can have pages for the logged in user to be redirected to.  

## Joe Thor [4:10 PM]  
    1. *Got Done*: haven't really touched our code since last night to be honest. Been at work all day (heck I still am). So yeah, check out my recap from last night.  
    2. *Working on*: Making sure all of our buttons work. So working on that front end javascript file. Also, if no one has touched it, I will work on making our API key is secured with that .env file. Also coming up with an outline for our presentation for Tuesday.  
    3.  *Blockers*: well it is Friday night, but I think I have the bandwidth to get this done. Agree with @Tsimnuj Hawj about getting those pages in handlebars working. I know @Zac Evanchak is actively working on it and he is pretty darn close.  

## Zac Evanchak [4:19 PM]
    1. Got Done:  The handlebars stuff is coming along nicely.  I think I know what I'm doing with that.  If we can confirm the dashboard is rendering what we need, then it shouldn't be an issue to render anything else.  So that's my goal right now.  
    2. Working On:  I'm thinking about just making a new branch to to test that my database-querying html route sends the right data to render.  I will make a test route (/dashboardtest or something) to make sure I can retrieve from local storage a user id for my queries to pass.  
    3. Blockers:  I think we just need to pull it all in now.  We made good design decisions with our database, once the data is rendered in handlebars we have our MVP  

## Scott Soltis [4:21 PM]
    1. Got Done:  Added the .env file and the keys file and the require to the server.  Update some front end code, clean up.  Handlebar the user pages.  Updated the readme, added license file, added code of conduct file.
    2. working on:  Not sure where the spi is referenced so I need to go through the code and update the link to use Movies_db.  The button links on the dashboard may not be correct anymore with the handlebar code.  Will need to test it.  The readme should list all the libraries and tech we are using, I'll need you guys to help confirm we recorded evrything on saturday.
    3. no more time between now and sat class

