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

#### Steps we took to complete the project/How we divied Work among the Team
**Step 0: GitHub/Visual Studio Code Setup Work Distribution**
1. Alejandra created a GitHub repository which had 1 simple html file and a readme along with a page configuration
2. Goma created seperate folders for sign in, sign up, and home pages so that each of us can work on our own things
4. All three of us communicated over Discord and divided work among ourself:
* Goma will work on the sign up page
* Sharvita will work on the sign in page
* Alejandra will work on the larger part of the home page and Goma and Sharvita will help with brining in dummy user data

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
- [x] Used cloudfare for fonts
- [x] Created different sections using ```<nav class="navbar navbar-light bg-light navbar-expand-lg">```
