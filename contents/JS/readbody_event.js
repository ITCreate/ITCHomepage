var contentsResize_borderSize = 1100;

//４つの大コンテンツの横幅をウインドウサイズに合わせて調整する。
$("body").ready(function(){
	var window_width = $(window).innerWidth();
	if(window_width > contentsResize_borderSize){
		$("#menu1_top").width(window_width);
		var sum = ($("#menu1_top").width() + $("#menu2_abst").width()
				+ $("#menu3_action").width() + $("#menu4_member").width() + 10);　
		$("#inclusion_maincontents").width(sum);	//
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
					$("#menu3_action").width() + $("#menu4_member").width()/2 - $("#member_window_wrap").width()/2;
	$("#member_sub_window").offset({left: obj_offset});
});

//【３】４ページ目、部員紹介のメンバーリスト
