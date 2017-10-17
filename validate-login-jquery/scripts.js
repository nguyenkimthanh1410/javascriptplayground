// 1. jQuery installed correctly
if (typeof jQuery == 'undefined') {
	alert('jQuery is not installed');
}else{
	alert('jQuery is installed correctly');
}

	
// 124. Detect a click on circle, square
/*CSS:
#circle {
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background-color: green;
	margin: 10px;
}
.square {
	width: 150px;
	height: 150px;
	background-color: red;
	margin: 10px;
}
*/
$("div").click(function() {
	alert('circle was clicked');
});
	

// 125. Update html
$('#circle').click(function(){
		$("p").html("This text has changed!");
		//alert($("p").html());
});


// 126. Change src of iframe
/*<iframe src="test.html"></iframe>*/
$("#circle").hover(function() {
	$("iframe").attr("src","test123.html")
});

// 127. Click an element to disappear
$("div").click(function() {
	$(this).css("display","none"); 				// use CSS
});

$("div").click(function() {
	document.body.removeChild(this);			// use DOM
	//$("#circle").css("width", 400);
	//alert($("#circle").css("background-color"));
	//alert($("body").css("width"));
});


$("div").click(function() {
	if ($(this).attr("id") == "circle") {		// get att of an element
		alert("You clicked a circle");
	}else {
		alert("You clicked a square");
	}
});

// 128. Toggle button to appear / disapper text
// Option 1: css("display") == "none"
$("#toggle").click(function() {				
	if($("#text").css("display") == "none") {
		$("#text").fadeIn();
	}else{
		$("#text").fadeOut();
	}				
});


// Option 2: Use var to keep track status, and call back fn
var textShowing = true;
$("#toggle").click(function () {
	if (textShowing) {
		$("#text").fadeOut(function() {
			textShowing = false;
		});
	}else {
		$("#text").fadeIn(function () {
			textShowing = true;
		});
	}
});

// 130. Toggle
	$('#circle').on('click', function() {
				$(this).animate({
								width:'400px',
								height: '400px',
								marginLeft: '100px',
								marginTop: '50px'},
								2000,'linear',
								function() {
									$(this).css('background-color','red');
								});
			});
			
// 132. Ajax
$.get('info.text', function(data) {
				alert(data);
			});	

$.ajax('info.txt')
	.done(function(data) {
		alert(data);
		$('text').html(data);
	})
	.fail(function() {
		alert('could not get data');			
	});

// 135. Regular expression: Check regex can be found in string?
var regex = /e/g;
var string = 'Regex is great';

var result = string.match(regex);

alert(result);



