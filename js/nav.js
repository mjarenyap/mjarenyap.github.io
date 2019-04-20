// nav javascript
$(document).ready(function(){

	// intial load
	if($(window).width() <= 670){
		var navHeight = $("#main-nav").height();
		var navPosition = $(window).height() - navHeight;
		$("#main-nav").css("top", navPosition);
	}

	else{
		$("#main-nav").css("top", 0);
	}

	// on resize event
	$(window).resize(function(){
		if($(window).width() <= 670){
			var navHeight = $("#main-nav").height();
			var navPosition = $(window).height() - navHeight;
			$("#main-nav").css("top", navPosition);
		}

		else{
			$("#main-nav").css("top", 0);
		}
	});
});