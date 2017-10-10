// Check whether browser support Event object, and addEventListener

// 1. declare variables
var elNoteInput, elNoteName, elButtons, textEntered, target;    // Declare variables

elNoteName = document.getElementById('noteName'); 				// Element that holds note
elNoteInput = document.getElementById('noteInput'); 			// Input for writing the note
textEntered = '';											
var elButtons = document.getElementById('buttons');

// 2. Identify event and function responding to event
if (document.addEventListener) {
	window.addEventListener('load', setup, false);				// setup the form
	elButtons.addEventListener('click', changeState, false); 	// change state of button
	elNoteInput.addEventListener('keyup', writeLabel, false); 	// can use 'input',change state of button
}else {
	window.attachEvent('onload', setup);						// setup the form
	elButtons.attachEvent('onclick', changeState); 				// change state of button
	elNoteInput.attachEvent('onkeyup', writeLabel, false); 		// change state of 
}


// 3. Setup
function setup() {
	elNoteInput.focus(); 										// focus on text input
	elNoteInput.value = ''; 									// start with blank value
}

function changeState(e) {
	if (!e) { 													// if Event object is not present
		e = window.event; 										// Use IE5-8 fallback
	}	
	var target = e.target || e.srcElement; 						// Get target element
	
	if (e.preventDefault) { 									// if preventDefault() support
		e.preventDefault(); 									// stop default action
	}else {
		e.returnValue = false; 									// IE5-8 fallback: stop default action
	}
		
	switch(target.getAttribute('data-state')) {					// Get data-state attribute of button
		case 'record':											// If its state is record -> change to 'stop'
			elNoteInput.value = '';								// Set input field blank
			elNoteInput.setAttribute('readonly', 'readonly');	// Set readonly for field input
			target.setAttribute('data-state', 'stop');			// Set attribute for button
			break;
		case 'stop':
			elNoteInput.removeAttribute('readonly');			// If its state is stop -> change to 'record'
			elNoteInput.focus();								// set cursor in input field
			elNoteInput.value = '';								// set value blank
			target.setAttribute('data-state', 'record');		// set att for button
			break;		
	}	
}


function writeLabel(e) { 										// declare function
	if (!e) {													// if event object isn't present
		e = window.event;										
	}
	var target = e.target || e.srcElement;						// Use IE5-8 fallback
	
	textEntered = target.value;									// Get value of text entered
	elNoteName.textContent = textEntered;						// Set value for the note
	
	var charInput = String.fromCharCode(e.keyCode);				// Convert keyCode to readable character
	console.log('charInput=' +charInput);	
}


