var window_width = 0;

$("body").ready(function(){
	window_width = $(window).width();
<<<<<<< HEAD

	if(window_width > 900){
=======
	
	if(window_width > 1100){
>>>>>>> 0097520c24cbc5a16c2d9ede10ec1226692544c5
		$("#menu1_top").width(window_width);
		$("#menu2_abst").width(window_width);
		$("#menu3_action").width(window_width);
		$("#menu4_member").width(window_width);
		var sum = ($("#menu1_top").width() + $("#menu2_abst").width() 
				+ $("#menu3_action").width() + $("#menu4_member").width() + 10);
		$("#inclusion_maincontents").width(sum);
	}

	//各オブジェクトの初期配置(ウインドウサイズによって変化するのでJSで指定
	obj1_offset = $("#menu1_top").width() + $("#menu2_abst").width() / 2 - $("#obj1").width();

	$("#obj1").offset({left: obj1_offset});

	member_scroll();

});