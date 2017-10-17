/* 0. Start
$('li').on('click', function(e){
	var target = e.target;	
	var val = target.textContent;
	alert(val);	
});

$(':header').addClass('headline');					// Add class

$('li:lt(3)').hide().fadeIn(1500);					// hide, fade in first 3 li

$('li').on('click', function () {					// click to disappear
	$(this).remove();	
});
*/

/* 1. Get/set method
var content = $('li').html(); 						// GET first element
console.log(content);

$('li').html('Updated value'); 					// SET ALL elements
*/

/* 2. Implicit loop/ iteration (p.310)
$('li.hot').addClass('favorite');
$('li em').addClass('seasonal');
*/

/* 3. Chaining: many method in 1 selector (p.310)
$('li[id != "one"]').hide().delay(500).fadeIn(1400); //hide, delay 500ms, fadeIn
*/

/* 4. Page ready to use (p.313)

$(document).ready(function () {
	alert('Running when DOM has been created');		// fires when DOM loaded, not wait until other resours(images, css, script)
});

$(function () {
	alert('Running when DOM has been created');	 	// short-hand
});
*/

/* 5. Get ele content (p.314)
//alert($('ul').html());							// ~ innerHTML
//alert($('li').html());
//var s = $('ul').html();
//console.log(s instanceof Node);					// false


//console.log($('ul').text());						// all text in separate row
//console.log($('li').text());						// fresh figspine nuts honeybalsamic vinegar
*/

/* 6. Appending (p.315)
//var $listHTML = $('ul').html();						// get HTML inside all 4 li
//$('ul').append($listHTML);							// append to the selected section


//var $listText = $('ul').text();							// all text in separate row 
//$('ul').append('<p>' + $listText + '</p>');				// append it to ul


//var $listItemHTML = $('li').html();					// the first ele's content
//$('li').append($listItemHTML);

//var $listItemText = $('li').text();					// all text running together
//$('ul').append('<p>' + $listItemText + '</p>');					
*/

/* 6. Update elements (p.316)
$('li.hot').html(function () {
	return '<em>' + $(this).text() + '</em>';			// italic each li of .hot
});
*/

/* 7. Change element (p.317)
$(function() {
	$('li:contains("pine")').text('almonds');
	
	$('li.hot').html(function() {
		return '<em>' + $(this).text() + '</em>';
	});
	
	$('li#one').remove();
	
});*/

/* 8. Insert elements (p.318)
var $newFragment = $('li');								// Creat a new ele li
var $newItem = $('<li class="new">item</li>');

$(function() {
	$('ul').before('<p class="notice">Just updated</p>');	// Add to DOM tree
	$('li.hot').prepend('+ ');
	
	var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>'); // Add to DOM tree
	$('li:last').after($newListItem);	
});
*/

/* 9. Get, set attribute values (p.321)
$(function() {
	$('li#three').removeClass('hot');			// Remove a class
	
	$('li.hot').addClass('favorite');			// Add class 'favorite', other existing classes are unchanged
	
	$('ul').attr('id', 'group');				// Add id
});
*/

/* 10. Get, set CSS properties (p.322)
var backgroundColor = $('li').css('background-color');		// get bgc for 1st element
//alert(backgroundColor);

$('li').css('background-color', '#272727');					// set an rule
$('li').css('padding-left', '+=20');

$('li').css({												// Add multiple 
	'background-color': 'green',
	'font-family' : 'Courier'
});
*/

/* 11. Change CSS rule. Better to change class attr than css properties
$(function() {
	var backgroundColor = $('li').css('background-color');		//bg of 1st li
	$('ul').append('<p class="notice">Color was: ' + backgroundColor + '</p>');
	$('li').css({												// update many properties at once
		'background-color' : '#c5a996', // brown
		'border' : '1px solid #fff',
		'color' : '#000',
		'font-family' : 'Georgia',
		'padding-left' : '+=75'
	});
});
*/

/* 12. Work with each element ~ loop (p.324)
$('li').each(function() {
	var ids = this.id;			// access attribute
	$(this).append('<em class="order"> ' + ids + '</em>');	// insert content b4 ending tag
});
*/


