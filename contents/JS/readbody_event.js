//var window_width = 0;
var contentsResize_borderSize = 1100;

//body読み込み時にウインドウの大きさに合わせてページサイズをzoomにより調整する。
//window.innerHeight: ブラウザの縦表示域　/ #wrap: コンテンツの高さ　により表示域のサイズギリギリまでコンテンツを表示させる。
$("body").ready(function(){
	/*
	alert(($("#intro_header").height() + $("#inclusion_maincontents").height() + $("#footer_wrap").height()));
	alert(window.innerHeight);
	*/
	document.body.style.zoom = $(window).innerHeight() / $("#wrap").height();
	//ウインドウの幅のと整合性がずれる。
	//widthもおかしい
});

$("body").ready(function(){
	var window_width = $(window).innerWidth() / document.body.style.zoom;
	if(window_width > contentsResize_borderSize / document.body.style.zoom){
		$("#menu1_top").width(window_width);
		/*
		$("#menu2_abst").width(window_width);
		$("#menu3_action").width(window_width);
		$("#menu4_member").width(window_width);
		*/
		var sum = ($("#menu1_top").width() + $("#menu2_abst").width()
				+ $("#menu3_action").width() + $("#menu4_member").width() + 10);
		$("#inclusion_maincontents").width(sum);
	}
});

//各オブジェクトの初期配置(ウインドウサイズによって変化するのでJSで指定
//【１】２ページ目、部活概要の説明ウインドウ
$("body").ready(function(){
	obj_offset = $("#menu1_top").width() + $("#menu2_abst").width() / 2 - $("#obj1").width() / 2;
	$("#obj1").offset({left: obj_offset});
});

//【２】１ページ目、ページTOPの中央キャッチコピー
$("body").ready(function(){
	obj_offset = $("#menu1_top").width()/2 - $("#vcatch").width()/2;
	$("#vcatch").offset({left: obj_offset});
});

//【３】４ページ目、部員紹介のウインドウ
$("body").ready(function(){
	obj_offset = $("#menu1_top").width() + $("#menu2_abst").width() +
					$("#menu3_action").width() + $("#menu4_member").width()/2 - $("#member_sub_window").width()/2;
	$("#member_sub_window").offset({left: obj_offset});
});

//【３】４ページ目、部員紹介のメンバーリスト
$("body").ready(function(){
	obj_offset = $("#member_sub_window").offset().left + $("#member_sub_window").width() + 39;
	$("#memberwrap").offset({left: obj_offset});
});