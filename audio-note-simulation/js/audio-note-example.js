// Check whether browser support Event object, and addEventListener

// 1. declare variables
var elLabel = document.getElementById('label');
var elNoteName = document.getElementById('noteName');
var elButtons = document.getElementById('buttons');

var textEntered = '';

// 2. Identify event and function responding to event
if (document.addEventListener) {
	window.addEventListener('load', setup, false);// setup the form
	elButtons.addEventListener('click', changeState, false); // change state of button
	elNoteName.addEventListener('keyup', writeLabel, false); // can use 'input',change state of button
}else {
	window.attachEvent('onload', setup);// setup the form
	elButtons.attachEvent('onclick', changeState); // change state of button
	elNoteName.attachEvent('onkeyup', writeLabel, false); // change state of 
}


// 3. implementation of event
function setup() {
	elNoteName.focus();
	elNoteName.value = '';
	elButtons.value = 'record';	
}

function changeState(e) {
	if (!e) { // if Event object is not present
		e = window.event; // Use IE5-8 fallback
	}	
	var target = e.target || e.srcElement; // Get target element
	
	if (e.preventDefault) { // if preventDefault() support
		e.preventDefault(); // stop default action
	}else {
		e.returnValue = false; // IE5-8 fallback: stop default action
	}
		
	switch(target.getAttribute('data-state')) {
		case 'record':
			elButtons.value = 'stop';
			elNoteName.value = '';
			elNoteName.setAttribute('readonly', 'readonly');
			target.setAttribute('data-state', 'stop');
			break;
		case 'stop':
			elNoteName.removeAttribute('readonly');
			elNoteName.focus();
			elNoteName.value = '';
			elButtons.value = 'record';
			target.setAttribute('data-state', 'record');
			break;		
	}	
}


function writeLabel(e) { // target is noteName element
	if (!e) {
		e = window.event;
	}
	var target = e.target || e.srcElement;	
	
	textEntered = target.value;
	elLabel.textContent = textEntered;
	
	var charInput = String.fromCharCode(e.keyCode);
	console.log('charInput=' +charInput);	
}


