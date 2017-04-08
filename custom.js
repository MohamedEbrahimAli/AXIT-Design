/**/
$(function () {
	
	'use strict';
	
	$(window).scroll(function () {
	
		var navbar = $('.navbar')
		
		if($(window).scrollTop() >= navbar.height()) {
			navbar.addClass('scrolled');
			
		} else {
			navbar.removeClass('scrolled');
		}
	}); // Condition ? True : False; ShortCut If
	
	// Deal With Tabs
	$('.tab-switch li').click(function () {
		// Add selected class to active link
		$(this).addClass('seleced').siblings().removeClass('selected');
		// Hide all divs
		$('.tabs .tabs-content > div').hide();
		// show div connected with this link
		$($(this).data('class')).show();
	});
	
	
});