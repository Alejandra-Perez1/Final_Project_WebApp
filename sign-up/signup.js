//Get all of the necessary element
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
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
const biography = document.getElementById('biography')

form.addEventListener('submit', e => {
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
	var invalidChars = ['#', '!', '~', '&', '<', '>', '"', "'",'{','}'];
	
	//First name empty value, illegal character check
    if(firstNameValue === '' || firstNameValue == null ) {
		setErrorFor(firstName, 'First Name cannot be blank');
	} else if (firstNameValue.match(/[\<\>!@#{}()\$%^&\*,'"`]+/i) ) {
		setErrorFor(firstName, 'Illegal Character');
	} else {
		setSuccessFor(firstName);
	}

	//Last name empty value, illegal character check
    if(lastNameValue === '') {
		setErrorFor(lastName, 'Last Name cannot be blank');
	} else if (lastNameValue.match(/[\<\>!@#{}()\$%^&\*,'"`]+/i) ) {
		setErrorFor(lastName, 'Illegal Character');
	} else {
		setSuccessFor(lastName);
	}
    
	//Username empty value, illegal character check
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else if (lastNameValue.match(/[\<\>!@#{}()\$%^&\*,'"`]+/i) ) {
		setErrorFor(lastName, 'Illegal Character');
	}else {
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
	}else if (passwordValue.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
		setErrorFor(password, 'Password must be lower & upper case letter, number, and 6-20 in length');
	}else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	} else{
		setSuccessFor(password2);
	}

	if(userLocation.value === '' || userLocation.value == null ) {
		setErrorFor(userLocation, 'Location cannot be blank');
	} else if (userLocation.value.match(/[\<\>!@#{}()\$%^&\*,'"`]+/i) ) {
		setErrorFor(userLocation, 'Illegal Character');
	} else {
		setSuccessFor(userLocation);
	}

	if(date.value === '' || date.value == null ) {
		setErrorFor(date, 'Date cannot be blank');
	} else {
		setSuccessFor(date);
	}

	if(securityQuestion1Answer.value === '' || securityQuestion1Answer.value == null ) {
		setErrorFor(securityQuestion1Answer, 'Security Question cannot be blank');
	} else if (securityQuestion1Answer.value.match(/[\<\>!@#{}()\$%^&\*,'"`]+/i) ) {
		setErrorFor(securityQuestion1Answer, 'Illegal Character');
	}else {
		setSuccessFor(securityQuestion1Answer);
	}

	if(securityQuestion2Answer.value === '' || securityQuestion2Answer.value == null ) {
		setErrorFor(securityQuestion2Answer, 'Security Question cannot be blank');
	} else if (securityQuestion2Answer.value.match(/[\<\>!@#{}()\$%^&\*,'"`]+/i) ) {
		setErrorFor(securityQuestion2Answer, 'Illegal Character');
	}else {
		setSuccessFor(securityQuestion2Answer);
	}

	if(securityQuestion3Answer.value === '' || securityQuestion3Answer.value == null ) {
		setErrorFor(securityQuestion3Answer, 'Security Question cannot be blank');
	} else if (securityQuestion3Answer.value.match(/[\<\>!@#{}()\$%^&\*,'"`]+/i) ) {
		setErrorFor(securityQuestion3Answer, 'Illegal Character');
	}else {
		setSuccessFor(securityQuestion3Answer);
	}

	if (biography.value.match(/[\<\>!@#{}()\$%^&\*,'"`]+/i) ) {
		setErrorFor(biography, 'Illegal Character');
	} else {
		setSuccessFor(biography);
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
