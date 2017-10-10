var elSignUp = document.getElementById('formSignup');

var elUserName = document.getElementById('userName');
var elMsgUserName = document.getElementById('msgUserName');

var elPassword = document.getElementById('password');
var elMsgPassword = document.getElementById('msgPassword');

window.addEventListener('load', function() {			
	elUserName.focus();								// set focus on User Name field
}, false);

// Text field
elUserName.addEventListener('focus', function(){	// Add listener to User Name field
	tipUserName(5);									// show tip when User Name is focus
}, false);
function tipUserName(minLength) {					// fn shows tip, at least min characters
	var msg = 'User name must be at least ' + minLength + ' characters';
	elMsgUserName.textContent = msg;
	elMsgUserName.className += 'feedback tip';
}
elUserName.addEventListener('blur', function() {	// fn responds when User Name is blur
	checkUserName(5);								// check UserName length
}, false);
function checkUserName(minLength) {
	var len = elUserName.value.length;
	if(len < minLength) {							// invalid username len
		elMsgUserName.textContent = 'Not long enough, at least ' + minLength + ' characters';		
		elMsgUserName.setAttribute('class', 'feedback warning');
	}else {
		elMsgUserName.textContent = '';					//valid username len, take out text content
		elMsgUserName.removeAttribute('class');			// remove class feedback and tip
	}
}


elPassword.addEventListener('focus', function() {	// Add listener to Password field
	tipPassword(6);									// show tip when Password is focused
}, false);
function tipPassword(minLength) {					// fn shows tip, at least min characters
	var msg = 'Password must be at least ' + minLength + ' characters';
	elMsgPassword.textContent = msg;
	elMsgPassword.className += 'feedback tip';
}
elPassword.addEventListener('blur', function() {	// fn responds when Password is blur
	checkPassword(6);
}, false);
function checkPassword(minLength) {					// fn validate password len
	var len = elPassword.value.length;				// get len of password user key in
	if(len < minLength) {							// if len lt min, warning and notify
		elMsgPassword.textContent = 'Not long enough, at least ' + minLength + ' characters';
		elMsgPassword.setAttribute('class', 'feedback warning');
	}else {											// if valid len password
		elMsgPassword.textContent = '';				
		elMsgPassword.removeAttribute('class');		// remove class feedback and tip
	}
}

//==============================RADIO BUTTON: checked========================================
/*Check a radio button is checked*/
function validateGender() { 						// Validate radio button checked
	var genders = document.getElementsByName('gender');
	var isValid = false;
	
	for (var i = 0; i < genders.length; i++) {
		if (genders[i].checked) {					// detect one radio is checked
			isValid = true;
			alert(genders[i].value + ' is checked');
			break; // get out of loop
		}
	}	
	if (!isValid) {
		var elMsgGender = document.getElementById('msgGender');
		elMsgGender.textContent = 'You have choose Gender';
		elMsgGender.setAttribute('class', 'feedback warning');
	}
	return isValid;
}

/*Response to button is clicked*/
var genders = document.getElementsByName('gender');
for (var i = 0; i < genders.length; i++) {
	genders[i].addEventListener('click',function(e) {	// listen to radio button is clicked
		var target = e.target;
		console.log(target.value + ' is clicked');
	}, false);
}

//=============================SELECT OPTION: 1:=======================================
var elMemberType = document.getElementById('memberType');
elMemberType.addEventListener('change', showMessageMember, false);
function showMessageMember(e) {							// Response to select option
	var target = e.target;
	var op = target.options[target.selectedIndex].value; // Identify option is selected
	
	var elMsgMember = document.getElementById('msgMember'); // Get element message
	elMsgMember.textContent = op;
	elMsgMember.setAttribute('class','feedback tip');
	console.log('memberType= ' + op);
}

//=============================Question: SELECT OPTION: Multi=======================================
var elBookGenre = document.getElementById('bookGenre');
elBookGenre.addEventListener('change', showMessageGenre, false);
function showMessageGenre(e) {
	var target = e.target;
	var op = target.options[target.selectedIndex].value;
	
	console.log('memberType= ' + op);
}

//=============================Question: Checkbox=======================================
var elService = document.getElementsByName('service');
for (var i = 0; i < elService.length; i++) {	
	elService[i].addEventListener('click', showMessageService, false);
}
function showMessageService(e) {
	var target = e.target;
	var op = target.value;
	if (target.checked) {
		console.log(op);
	}
}

var elShortIntro = document.getElementById('shortIntro');
var elTerms = document.getElementById('terms');
var elTermsHint     = document.getElementById('termsHint');
elSignUp.addEventListener('submit', checkTerms, false);
function checkTerms(e) {                            	 // Declare function
  if (!elTerms.checked) {                                // If checkbox ticked
    elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
    event.preventDefault();                              // Don't submit form
  }
}
