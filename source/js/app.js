'use strict';

$(document).ready(function() {
	
	var textClose = function () {
		
		var that = $(this);

		that.removeClass('open-text');
		that.off('click');
		$("html,body").css("overflow","auto");
	}

	var textOpen = function() {
		
		var that = $(this),
			thatParent = that.parent(),
			thatText = thatParent.find('.list__text');
			
			thatText.addClass('open-text');
			thatText.on('click', textClose);
			$("html,body").css("overflow","hidden");
	}

	$('.list__image').on('click', textOpen);

	$(window).resize(function() {
  		$("html,body").css("overflow","auto");
	});
});