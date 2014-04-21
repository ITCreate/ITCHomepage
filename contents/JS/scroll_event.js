/*
 *スクロールに関するイベントを記述。
*/

var scrollX = 0;
var prev_scrollX = 0;
var scroll_direction = 0;
var scroll_count = 0;

//【１】スクロール方向の取得
//座標の差分によりスクロール方向を取得
$(window).scroll(function(){
	scrollX = $(window).scrollLeft();

	if(scrollX > prev_scrollX){
		scroll_direction = 1;	//右方向スクロール
	}else{
		scroll_direction = -1;	//左方向スクロール
	}
	prev_scrollX = scrollX;
});

//【２】TOPページのGO矢印
//スクロール量が0のときフェードイン、スクロールするフェードアウト
$(window).scroll(function(){
	$("#obj3").fadeOut("slow");	
	if(scrollX == 0){
		$("#obj3").fadeIn("fast");
	}
});

$(window).scroll(function(){
	/*
	//多重スクロール
	//はらべさん
	obj2_offset = $("#obj2").offset();

	//べーやんの座標Yをスクロール距離との１次関数で表現
	//詳細: 二点(window_width, 3/2 * window_width + 225), (3/2 * window_width, 3/2 * window_width - 225)
	//		を通る１次関数
	obj2_offset.left = (-900 / window_width * scrollX) + 3/2 * window_width + 1000;
	$("#obj2").	offset({left: obj2_offset.left});
	
	*/
	//

	//$("#debug").html("scrollX: " + scrollX  + "x: " + $(window).width() + "方向:" +scroll_direction);	
	
});
