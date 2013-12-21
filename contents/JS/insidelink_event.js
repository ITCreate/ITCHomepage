/*
 * ヘッダーのページ内リンクに関するイベントを記述する。
 * 変数window_widthに現在のウインドウ幅を取得する。
 * リンクを押すとそれぞれの要素の位置まで移動する。(位置はウインドウ幅によって変化する)
 * 位置の指定は左端からスクロールした距離で行う。
 * (to 部長挨拶)　→　0px
 * (to 部長挨拶)　→　top幅
 * (to 活動紹介)　→　top幅 + abst幅
 * (to 部員紹介)　→　top幅 + abst幅 + action幅
 */

 //【１】[ページTOP]ボタンを押した時の画面スクロール
$("body").ready(function(){
	$("#btn1").click(function(){
		$("html, body").animate({scrollLeft: 0}, "slow");

	});
});

//【２】[部活概要]ボタンを押した時の画面スクロール
$("body").ready(function(){
	$("#btn2").click(function(){
		var scroll_amount = $("#menu1_top").width() * document.body.style.zoom;
		$("html, body").animate({scrollLeft: scroll_amount}, "slow");
	});
});

//【３】[活動紹介]ボタンを押した時の画面スクロール
$("body").ready(function(){
	$("#btn3").click(function(){
		var scroll_amount = ($("#menu1_top").width() + $("#menu2_abst").width()) * document.body.style.zoom;
		$("html, body").animate({scrollLeft: scroll_amount}, "slow");
	});
});

//【４】[部員紹介]ボタンを押した時の画面スクロール
$("body").ready(function(){
	$("#btn4").click(function(){
		var scroll_amount = ($("#menu1_top").width() + $("#menu2_abst").width() + $("#menu3_action").width()) * document.body.style.zoom;
		$("html, body").animate({scrollLeft: scroll_amount}, "slow");
	});
});
