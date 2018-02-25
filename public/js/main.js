$(document).ready(function() {
    /* Navigation Menu*/
	var offsettop = $('.navbar').offset().top;
	if (offsettop > 170) {
		$('#navbar-fixed').addClass('fixed-top');
		$('nav .text-hide').css({'background-image': 'url(../images/logo-icon.png)'})
    } else {
		$('#navbar-fixed').removeClass('fixed-top');
		$('nav .text-hide').css({'background-image': 'url()'})
    }
	var num = 170; //number of pixels before modifying styles

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > num) {
			$('#navbar-fixed').addClass('fixed-top');
			$('nav .text-hide').css({'background-image': 'url(../images/logo-icon.png)'})
	    } else {
			$('#navbar-fixed').removeClass('fixed-top');
			$('nav .text-hide').css({'background-image': 'url()'})
	    }
	});
	/* ============ */

	/* Slider Home */
	var $item = $('.carousel-item'); 
	var $wHeight = $(window).height();
	$item.eq(0).addClass('active');
	$item.height($wHeight); 
	$item.addClass('full-screen');

	$('.carousel img').each(function() {
	var $src = $(this).attr('src');
	var $color = $(this).attr('data-color');
	$(this).parent().css({
		'background-image' : 'url(' + $src + ')',
		'background-color' : $color
	});
	$(this).remove();
	});

	$(window).on('resize', function (){
	$wHeight = $(window).height();
	$item.height($wHeight);
	});

	$('.carousel').carousel({
	interval: 6000,
	pause: "false"
	});
	/* ============ */

	// Same Height for crads of monarch branch
	$('.card').matchHeight({
		byRow: false,
		property: 'min-height',
		remove: false
	});

	$('.same-height').matchHeight({
		byRow: false,
		property: 'min-height',
		remove: false
	});

	$('.same-width').equalize('width');
	/* ============ */

	// Monarch Branch click function
	$("#monarch_branch .card").click(function() {
		window.location.href = $(this).find("a").attr("href"); 
		return false;
	});
	/* ============ */
})