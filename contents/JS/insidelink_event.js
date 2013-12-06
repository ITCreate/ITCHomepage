/*
 * ヘッダーのページ内リンクに関するイベントを記述する。
 * 変数window_widthに現在のウインドウ幅を取得する。
 * リンクを押すとそれぞれの要素の位置まで移動する。(位置はウインドウ幅によって変化する)
 * 位置の指定は左端からスクロールした距離で行う。
 * (to 部長挨拶)　→　0px
 * (to 部長挨拶)　→　window幅
 * (to 活動紹介)　→　window幅*2
 * (to 部員紹介)　→　window幅*3
 */
$("body").ready(function(){
	var window_width = $(window).width();
	$("#btn1").click(function(){
		$("body").animate({scrollLeft: 0}, "slow");
	});
	$("#btn2").click(function(){
		$("body").animate({scrollLeft: window_width}, "slow");
	});
	$("#btn3").click(function(){
		$("body").animate({scrollLeft: window_width + window_width}, "slow");
	});
	$("#btn4").click(function(){
		$("body").animate({scrollLeft: window_width + window_width + window_width}, "slow");
	});

});
