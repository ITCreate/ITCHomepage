var window_width = 0;

$("body").ready(function(){
	window_width = $(window).width();

	if(window_width > 100){
		$("#menu1_top").width(window_width);
		$("#menu2_abst").width(window_width);
		$("#menu3_action").width(window_width);
		$("#menu4_member").width(window_width);
		var sum = ($("#menu1_top").width() + $("#menu2_abst").width() 
				+ $("#menu3_action").width() + $("#menu4_member").width() + 10);
		$("#inclusion_maincontents").width(sum);
	}

	//各オブジェクトの初期配置(ウインドウサイズによって変化するのでJSで指定
	obj1_offset = 3/2 * window_width - 275;

	$("#obj1").offset({left: obj1_offset});

	
	member_scroll();
});