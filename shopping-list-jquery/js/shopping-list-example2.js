$(function() {
	// 1. Add a new item
	
	// SETUP
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	var $itemDescription = $('#itemDescription');
	
	$('li').hide().each(function(index) {
		$(this).delay(450*index).fadeIn(1600);		
	});
	
	// ITEM COUNTER with item not complete
	function updateCounter() {
		var len = $('li[class !=complete]').length;
		$('#counter').text(len);
	}
	updateCounter();	
	
	
	// SETUP FOR NEW ITEMS
	$newItemButton.show();
	$newItemForm.hide();
	
	$newItemButton.on('click', function() {		// When 'new item' button is clicked
		$(this).hide();							// Hide button
		$newItemForm.show();					// Show form
		$itemDescription.focus();
		$itemDescription.val('');		
	});
	
	
	//ADD A NEW ITEM
	$newItemForm.on('submit', function(e) {		// add new item after the last li
		e.preventDefault();						// prevent form from submitting
		var $newText = $itemDescription.val();
		
		var $newLi = '<li>' + $newText + '</li>';
		
		$newItemForm.hide();					// hide form after completting task
		$newItemButton.show();					// show up 'New Item' button
		if($('ul').text() == ''){
			$('li:last').after($newLi);				// Add newly item after the last li	
			$('li:last').on('click', handleClickItem);
			//alert('has last');
		}else{
			//alert('empty');
			$('ul').append($newLi);
			$('li:last').on('click', handleClickItem);
		}
		updateCounter();
	});


	// 2. Click to indicate the item complete,
	// moved to the bottom of list, and marked as 'complete'

	// 3. Second click, will be removed from list
	$('ul li').on('click', handleClickItem);	
	
	function handleClickItem() {
		if($(this).hasClass('complete')) {		// check li has class 'complete'
			$(this).animate({
				opacity: 0.0,
				paddingLeft: '+180'
			}, 500, 'swing', function() {
				$(this).remove();					// remove li if its class contains 'complete'			
			});			
			
		}else{					
			$(this).addClass('complete');		// add 'complete' class to li
			var $this = $(this).clone(true);	// keep this li, TRUE: to pass Event handler (p.346)
			$('li:last').after($this);			// add this li after the last li
			$(this).remove();					// remove clicked li
			updateCounter();
		}
		
		
	}	
});


