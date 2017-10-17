/*
$('li').on('click', function() {			// Use selector to have jQuery selection
	$(this).addClass('complete');			// indicate which event, add event listener to each element in selection
});
*/
/* 1. on() for all event method
$(function() {
	var $ids = '';
	var $listItems = $('li');

	$listItems.on('mouseover click', function() {
		var ids = this.id;						// get id of each li
		//$listItems.children('span').remove();	// remove span only in li, not li
	});

	$listItems.on('mouseout', function() {
		$listItems.children('span').remove();	
		//$(this).remove();						// remove li when moveout
	});	
});
*/

/* 2. jQuery Event object: Time of click (p.329)
$('li').on('click', function(e) {
	var eventType = e.type; 			// click
	var eventWhich = e.which; 			// 1
	var target = e.target; 				// fresh figs 
	
	var date = new Date();
	date.setTime(e.timeStamp);			// set timeStamp for clicked
	console.log(date);
	var clicked = date.toDateString();
	
	$(this).append(' ' + eventType + ': ' + clicked );
});
*/

/* 3. Delegate event from ul to li using event.target (p.331)
$(function() {
	var listItem, itemStatus, eventType;
	$('ul').on('click',
				':not(#four)',							// filter out li having id='four'
				{status : 'important'},					// additional data
				function(e) {							// handler
					listItem = 'Item: ' + e.target.textContent + '<br />';	// textContent of target
					itemStatus = 'Status: ' + e.data.status + '<br />';
					eventType = 'Event: ' + e.type;
					$('ul').append('<p>' +listItem + itemStatus + eventType +'</p>');
				});	
});
*/

/* 4. hide(), fadeIn(), fadeOut() (p.333)
$(function() {	
	$('h2').hide().slideDown();					// slide down h2
	
	var $lis = $('li');	
	$lis.hide().each(function(index) {			// loop thru each li
		$(this).delay(700 * index).fadeIn(700);	// index pro prevent lis appear at the same time		
	});
	
	$lis.on('click', function() {				// listen to li be clicked
		$(this).fadeOut(700);					// fade will take 700 ms
	});
});
*/

/* 5. Animation (p.334)
$(function() {
	$('li').on('click',function() {
		$(this).animate({								// do animation
			opacity: 0.0,								// format: object literal
			paddingLeft: '+=80'
		}, 500, 'swing', function() {					// duration:500ms, easing (linear,swing), callback fn
			$(this).remove();
		});		
	});
});
*/

/* 6. Traversing (p.337)
$(function() {
	$('ul').hide();									// uls are hidden
	$('h2').append('<a>(show)</a>');				// add link to h2
	
	$('h2').on('click', function() {
		$('h2').next().children()					// next comes to 'div'
				.fadeIn(500)						// children  comes to 'ul'
				.children('.hot')
				.addClass('complete');
		$('h2').find('a').fadeOut();				
	});	
});
*/

/* 7. Filter (p.339)
$(function() {
	var $listItem = $('li');
	$listItem.filter('.hot:last').removeClass('hot');		//remove class of hot from the last ele
	
	$('li:not(".hot")').addClass('cool');					// add class of cool to all li not hot
	
	$listItem.has('em').addClass('complete');				// add class of complete in li having em
	
	$listItem.each(function() {
		var $this = $(this);
		if ($this.is('.hot')) {								// is() has class of hot
			$this.prepend('Priority item: ');
		}
	});
	$('li:contains("honey")').append(' (local)');			// if content containing local, append
});
*/

/* 8. Find element by index number (p.341) zero-based
$(function() {
	$('li').eq(0).addClass('complete');			// li with index 2, add class of complete
	$('li:lt(3)').removeClass('hot');			// apply li with index <3
	$('li:gt(2)').addClass('cool');
});
*/

/* 9. Work with Forms, add item to the ul (p.334)
$(function() {
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	var $itemDescription = $('#itemDescription');
	
	$newItemForm.hide();
	$newItemButton.show();
	
	$('#newItemButton').on('click', function() {
		$(this).hide();
		$newItemForm.fadeIn();
		$itemDescription.focus();
	});
	
	$newItemForm.on('submit', function(e) {
		e.preventDefault();								// stop form from being submitted
		var text = $itemDescription.val();
		//var text = $('input:text').val();
		if(text) {										// Only if value is present, then add
			var newli = $('<li>' + text + '</li>');
			$('li:last').after(newli);					// Add after the last li
			$(this).hide();
			$('#newItemButton').show();
			$itemDescription.val('');	
		}else{
			$(this).hide();
			$('#newItemButton').show();
		}
	});	
});
