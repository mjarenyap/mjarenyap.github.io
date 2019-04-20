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
		var navHeight;
		var navPosition;
		if($(window).width() <= 670){
			navHeight = $("#main-nav").height();
			navPosition = $(window).height() - navHeight;
			$("#main-nav").css("bottom", 0);
			$("#main-nav").css("top", "none");
		}

		else{
			$("#main-nav").css("top", 0);
		}

		navPosition = $(window).height() - navHeight;
		$("#main-nav").css("top", navPosition);
	});
});