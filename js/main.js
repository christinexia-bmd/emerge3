// WHITE LAYER FOLLOW MOUSE
$( document ).on( "mousemove", function(e) {
	$('.layer.white').css({'left':e.pageX})
})


// COLOUR SHIFT W MOUSE X

$( document ).on( "mousemove", function(e) {

	var x = (e.pageX / $(window).width() ) * 180;
	var y = (e.pageY / $(window).height() ) * 180;
	var total = x + y;

	$('.bg').css({'filter':'hue-rotate(' + total + 'deg)'})
})