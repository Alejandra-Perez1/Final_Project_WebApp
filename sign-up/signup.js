//Get all of the necessary element
const signupForm = document.getElementById('signup-form');
const firstName = document.getElementById('textFirstName');
const lastName = document.getElementById('textLastName');
const username = document.getElementById('txtUsername');
const email = document.getElementById('emailAddress');
const password = document.getElementById('userPassword');
const password2 = document.getElementById('userPasswordRepeat');
const userLocation = document.getElementById('userLocation');
const date = document.getElementById('date');
const securityQuestion1Answer = document.getElementById('securityQuestion1Answer');
const securityQuestion2Answer = document.getElementById('securityQuestion2Answer');
const securityQuestion3Answer = document.getElementById('securityQuestion3Answer');
const biography = document.getElementById('biography');

signupForm.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// Trim to remove the whitespaces
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
    if(firstNameValue === '') {
		setErrorFor(firstName, 'First Name cannot be blank');
	} else {
		setSuccessFor(firstName);
	}

    if(lastNameValue === '') {
		setErrorFor(lastName, 'Last Name cannot be blank');
	} else {
		setSuccessFor(lastName);
	}
    
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}