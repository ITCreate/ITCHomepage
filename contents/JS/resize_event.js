//【１】ウインドウリサイズ時に
$(window).resize(function(){
	var window_width = $(window).width() / document.body.style.zoom;

	if(window_width > 900){
		$("#menu1_top").width(window_width);
		$("#menu2_abst").width(window_width);
		$("#menu3_action").width(window_width);
		$("#menu4_member").width(window_width);
		
		var sum = ($("#menu1_top").width() + $("#menu2_abst").width()
				+ $("#menu3_action").width() + $("#menu4_member").width() + 10);
		$("#inclusion_maincontents").width(sum);
	}
});

$(window).resize(function(){
	var window_height = $(window).innerHeight();
});