/* 背景のスクロールイベント */
$("body").ready(function(){
	$(window).scroll(function(){
		var scrollX = $(window).scrollLeft();	//スクロール距離を代入
		//(x1, y1), (x2, y2)の二点を通る直線を求め
		var x1 = $("#menu1_top").width() - $(window).width() / 2 ; //スクロール開始座標x
		var y1 = -650;		//スクロール開始座標y
		var x2 = $("#menu1_top").width() + $("#menu2_abst").width()	//スクロール終了座標x
					 - $(window).width()/2;		//スクロール終了座標y
		var y2 = 150;

		if(x1 < scrollX && scrollX < x2){		//一次関数の値域内ではyが変化。
			proportion_scroll("#background_skin", x1, y1, x2, y2, scrollX);	//関数の呼び出し
		}else if(scrollX < x1){
			$("#background_skin").offset({top: -650});	//値域外ではy1に固定
		}else{
			$("#background_skin").offset({top: 150});	//値域外ではy2に固定。
		}
		$("#debug").html("scrollX: " + scrollX  + "x1: " + x1 + "menu1:" + $("#menu1_top").width());
	});
});

/* 一次関数上でオブジェクトを動かす関数 */
function proportion_scroll(target, x1, y1, x2, y2, scrollX){
	var slope = (y1 - y2)/(x1 - x2);	//傾き
	var intercept = y1 - (y1 - y2)/(x1 - x2)*x1;	//切片
	var background_vscroll = slope*scrollX  + intercept;	//一般しい
	$(target).offset({top: background_vscroll});
}