//var window_width = 0;
var contentsResize_borderSize = 1100;
/**/
$("body").ready(function(){
	/*
	alert(($("#intro_header").height() + $("#inclusion_maincontents").height() + $("#footer_wrap").height()));
	alert(window.innerHeight);
	*/

	document.body.style.zoom = $(window).innerHeight() / $("#wrap").height();
});

$("body").ready(function(){
	var window_width = $(window).innerWidth() / document.body.style.zoom;
	if(window_width > contentsResize_borderSize / document.body.style.zoom){
		$("#menu1_top").width(window_width);
		$("#menu2_abst").width(window_width);
		$("#menu3_action").width(window_width);
		$("#menu4_member").width(window_width);
		var sum = ($("#menu1_top").width() + $("#menu2_abst").width()
				+ $("#menu3_action").width() + $("#menu4_member").width() + 10);
		$("#inclusion_maincontents").width(sum);
	}
});

//各オブジェクトの初期配置(ウインドウサイズによって変化するのでJSで指定
$("body").ready(function(){
	obj1_offset = $("#menu1_top").width() + $("#menu2_abst").width() / 2 - $("#obj1").width() / 2;
	$("#obj1").offset({left: obj1_offset});
});

//body読み込み時にウインドウの大きさに合わせてページサイズをzoomにより調整する。
//window.innerHeight: ブラウザの縦表示域　/ #wrap: コンテンツの高さ　により表示域のサイズギリギリまでコンテンツを表示させる。

