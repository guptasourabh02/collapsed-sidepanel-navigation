$(document).ready(function() {
	$('.nav_slide_button').click(function()     {
		$(".nav-container").animate({
			width: "toggle"
		},1500);
    });
	$("#nav-toggle").click( function() {
		$("#nav-toggle").toggleClass("active");
	});	
});
