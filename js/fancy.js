$(document).ready(function() {
	$('.hide').removeClass('hide');
	$('#copyYear').append(new Date().getFullYear());
});

/*
$(document).scroll(function() {
	var hidden_sections = $('.hide');
	for(let x = 0; x < hidden_sections.length; x++)
		$(this).scrollTop() >= $(hidden_sections[x]).offset().top - 300 ? $(hidden_sections[x]).removeClass('hide') : x;
});
*/