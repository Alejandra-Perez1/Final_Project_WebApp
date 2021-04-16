# Chitter-Chatter
### Chitter-Chatter is an web app that lets you communicate with other people, share your thoughts and opinion, and browse the various happenings in the world. 

This is our first step toward designing Chitter-Chatter, a web application similar to Twitter.
For this assignemt, we focus mainly on the UI. 

**Our goal:**
(I) Design UI interface of Sign-up page
(II) Design UI interface of Sign-In page
(III) Design UI for the Hompage to include a menu and some dummy user tweets

Technologies: 
* For this assignment, we mainly worked with HTML and CSS  to setup our UI. 
* We use Visual Studio Code to create projects, run code, push code to Github as well as to pull code from Github

### Assignment 1
#### Steps we took to complete the project/How we divied Work among the Team
**Step 0: GitHub/Visual Studio Code Setup Work Distribution**
1. Alejandra created a GitHub repository which had 1 simple html file and a readme along with a page configuration
2. Goma created seperate folders for sign in, sign up, and home pages so that each of us can work on our own things
4. All three of us communicated over Discord and divided work among ourself:
* Goma will work on the sign up page
* Sharvita will work on the sign in page
* Alejandra will work on the user homepage/landing page and Goma and Sharvita will help with anything else

**Step 1: Sign Up Page UI**
- [x] Went for the classic card look for the sign up page to keep everything nice and organized and centered
- [x] Added a simple logo and title 
- [x] Reused code from classwork and added more functionality to it
- [x] Added first name, last name, user name, bio text field with ```<input type="text" class="input-box" id="" name="" placeholder="" required>```
- [x] Added gender field using ```<input type="radio" id="" name="" value="" class="form-check-input">```
- [x] Added email field using ```<input type="email" class="input-box" id="emailAddress" name="emailAddress" placeholder="user@example.com" required>```
- [x] Added password/confirm password field using ```<input type="password" class="input-box" id="" name="" placeholder="Password" required>```
- [x] Added DOB field using ```html <input type="date" class="input-box" placeholder="MM/DD/YYYY" required>```
- [x] Added Security question dropdown list with input text for answer: ```<select id="securityquestion1" name="securityquestion1" class="form-check-input">```
- [x] Added a submit button using ```'html <button type="button" class="signup-btn">Sign Up</button>```
- [x] Added a reset button using ```html <button type="reset" class="reset-btn"> Reset </button>```
- [x] Also added basic css for body, form, headers, input, button, background image, etc.

**Step 2: Sign In Page UI**
- [x] Went for the classic card look for the sign up page to keep everything nice and organized and centered
- [x] Added a simple logo and title 
- [x] Added user name field using ```<input type="text" id="userName" class="input-box" placeholder="Your username" required>```
- [x] Added password name field utilizing HTML's password feature as ```<input type="password" id="userPassword" class="input-box" placeholder="Your Password" required>```
- [x] Added a check box for "remember me" ```<p><span><input type="checkbox"></span>Remember Me</p>```
- [x] Added a link for "Forgot Password" using ```<p><span><input type="checkbox"></span>Remember Me</p>``` although the href  is just set to # for now until we have a page for that
- [x] Added a sign in button using ```<button type="button" class="signin-btn">Sign In</button>```
- [x] Added a cancel button using ```<button type="button" id="cancelButton" class="cancel-btn">Cancel</button>```
- [x] Added a sign up button to navigate to the sign up page using submit button type and onClick() function and location.ref for routing as ```<button type="submit" class="signin-btn" onClick="location.href='../sign-up/signup.html'"> Sign Up</button>```

**Step 3: Home Page UI**
- [x] Used bootstraps for general styling and sizing
- [x] Used font awesome for icons like explore, notification, home etc.
- [x] Made sure webpage looks good in different screen sizes ```<meta name="viewport" content="width=device-width, initial-scale=1" />```
- [x] Created a navigation bar at the top of the page using bootstrap navbar class
- [x] Added links to the home page and user's profile and also a search box in the navigation bar 
- [x] Created 3 columns under the navigation bar, all columns are styled with a gray border and rounded.```<div class="row d-flex flex-row justify-content-center bd-highlight"> & <div class="col  border border-1 rounded ">```
- [x] Column 1: Includes links to Explore the page, Notifications, Messages, and More options using the nav & nav-item class from bootstrap```<ul class="nav"><li class="nav-item">```
- [x] Column 2: Includes a What's happening input box with a Post button follow by User's posts samples for the purpose of this assignment. The size of this column is col-6 ```<div class="col-6 border border-1 rounded">```
- [x] Column 3: Includes A trending section at the top and a Who to follow section at the bottom. 
- [x] The  Trending section was created by using col-12 and class card and container from bootstrap ``` <div class="col-12 border-col4 rounded "> , <div class="card"> , <div class="container">```
- [x] The Who to follow section was created by using col-12 and spans for the purpose of this assignment only ``` <div class="col-12 border-col4 rounded"> ```
- [x] At the end of the page, there is a footer added that reads: @2021 Chitter-Chatter using the text-center class to center the footer at the bottom of the page ``` <footer class="text-center"> ```

### Assignment 2
#### Form Validation
- [x] Added 2 icons to each fields that needs to have form validation: one for sucessful input and one for incorrect input
- [x] Also added a placeholder for the error message that will be displayed if there is an invalid input
- [x] Added CSS styling for error - input box turns red when the user enters invalid input
- [x] Added CSS to set the placeholder for the error message to be hidden unless user has invalid input
- [x] Added CSS styilg for success - input box truns green when the user enters correct input
- [x] Created a JS file to add all of the form validation
- [x] Used ```document.getElementById``` to get all of the input elements that requires validation
- [x] Created a ```checkInputs()``` function which checks all of the inputs to see if it's empty, has any invalid characters, etc.
- [x] If any of the inputs have ```(/[\<\>!@#{}()\$%^&\*,'"`]+/i)``` characters, it makes the placeholder error message visible with the message "Illegal Characters",  turns the field red, and shows the ! icon
- [x] If any of the input fields are empty, it makes the placeholder error message visible with the message "Field can't be empty", turns the field red, and shows the ! icon
- [x] Created a ```isEmail()``` that returns a list of characters that consists of valid characters in the email
- [x] If the user puts in a character that is not in ```isEmail()``` function, it makes the placeholder error message visible with the message "Illegal Characters", turns the field red, and shows the ! icon
- [x] If the password value doesn't fit theese characters ```(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))``` then it makes the placeholder error message visible with the message "Password must be lower & upper case letter, number, and 6-20 in length", turns the field red, and shows the ! icon
- [x] If the input fields are not empty and it doesn't have illegal characters then it turns the input boxes green and shows a checkmark
 
#### Security Question Dynamicity
- [x] Created a CSS styling ```invisible```, set the display to none, and also added the ```invisible``` class to all 3 security question answer
- [x] Created a ```updateSecurity1View(), updateSecurity2View(), updateSecurity3View()``` to make the security question answer box hidden/visible
- [x] Used ```classList.remove("invisible")``` to make the security question answer box visible if any of the question from the select list is selected
- [x] Used ```classList.add("invisible")``` to make the security question answer box hidden if none of the question from the select list is selected
  
  
### Assignment 3
#### This assignmet covers portion of the backend for our social media final project.
- [x] We added capability for users to sign up and to sign in
- [x] This was created using Express, EJS. and MongoDB for data storage.
- [x] Created a MVC-compliant directory and application structure including public, views, models, and controllers
- [x] Defined a User model along with a schema included for signing up.
- [x] A seed.js file was added to the root directory to populate data.

#### Database
- [x] Added a Users collections with fields defined in the user model for the app. 

#### To run the database
- [x] Open the project in terminal
- [x] Run ```npm install``` to install the mongoose package
- [x] Run ```mongod``` to have the MongoDB server running in the background
- [x] Sign up to create a account and log in with that account to see if the datbase/backend works

#### Controllers
- [x] Added a usersController.js to handle when users sign up and sign in
- [x] Contains two GET request to log in and sign up redirecting to signup.ejs and login.ejs respectively. If there is an error in both, it renders to the ejs file with an error message. `router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));` , `router.get('/signup', forwardAuthenticated, (req, res) => res.render('signup'));`. 
- [x] Containes a POST request to save user's data into the database. `router.post('/signup', (req, res) => {` 
- [x] Added an errorController in the controllers directory which handles generic error messages such as 404 and 500.
- [x] Added a homeController iin the controllers directory to handle GET requests to the home directory.

#### Views
- [x]  Added a layout.ejs to handle a basic layout for all the pages. It includes a header, navigation bar, a footer and extra libraries we used to make the app look pretty. 
- [x]  Modified the signup.ejs adding the correct action, method and possible error messages.
- [x]  Modified the loging.ejs adding the correct action, method and possible error messages.
- [x]  error.ejs renders the page when an error happens with an appropiate message.


#### Steps for how to launch the server 
1. Open a terminal window (Mac) or a command window (Windows), and navigate (cd) to the ionic-tutorial/server directory

2. Install the server dependencies:
npm install

3. Start the server:
node server
If you get an error, make sure you don't have another server listening on port 3000.


### Assignment 4
#### In this assignment we are finishing all the required functionalities for the chitter-chatter site to work

- [x] We updated the user model to make it more robus adding CRUD actions and restructure the site.
- [x] We identify fields that are required in the proper schema and added timestamps.
- [x] We added new templates to restructure the site and edit them to handle CRUD actions in a proper way. 
- [x] Added sessions and cookies
- [x] Cookies and user sessions were handle with error messages 
- [x] Used passport for handling user sign-up and sign-in
- [x] Passport was used for user authentication and used flash messages to show success or error messages in the views folder.
- [x] Used express-validator to reimplement the vaildation sessions to promptly display an error message to users
- [x] Express-validator was used to check proper email addresses, integers, name, last name, and password.
- [x] Extended views to let the user know, they have logged in and/or logged out.
- [x] The navigation bar was designed to have link to different parts of the web app such as profile, log in.
- [x] Added tweets/posts capability for users. They are able to post anything and see other user's posts.

#### Each user's homepage
- [x] User info is shown: name, last name, username, number of tweets
- [x] Posts from other users are shown with their name, username and the propert post text. The main user is able to delete its own posts but not other user's posts.
- [x] Added a text area for the user to post. The limit size is 280 characters. POST ARE TEXTUAL ONLY? CAN WE ADD PICTURES?
- [x] A section WHO TO FOLLOW with a list of all users in the system
- [x] A section TRENDING TOPICS which is empty for now

### Instructions to run: 
#### **** Make sure you have npm and mongoDB installed before running this repository ****
1. Download repository to your computer 
2. Once the repository is in your computer, open the command line or terminal and cd until you are in the repo
3. From the repo folder, do npm install to install all required packages to run the website, then npm start to begin testing
4. Go to localhost:3000 in your web browser to access the webpage.


