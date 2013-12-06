/*
 *スクロールに関するイベントを記述。
 * 
 * 
 * 
*/
var scrollX = 0;
var prev_scrollX = 0;
var scroll_direction = 0;
var scroll_count = 0;

$(window).scroll(function(){
	scrollX = $(window).scrollLeft();			
	
	//スクロール方向取得
	if(scrollX > prev_scrollX){
		scroll_direction = 1;	//右方向スクロール
	}else{
		scroll_direction = -1;	//左方向スクロール
	}
	prev_scrollX = scrollX;
			
	//GO�T�C���̕\��/��\��
	$("#obj3").fadeOut("slow");	
	if(scrollX == 0){
		$("#obj3").fadeIn("fast");
	}
			
	//多重スクロール
	//はらべさん
	if(scroll_direction == 1){
		if(550 < scrollX && scrollX < 1850){
			obj2_offset = $("#obj2").offset();
			obj2_offset.left -= 4;
			$("#obj2").	offset({left: obj2_offset.left});
		}
	}else{
		if(550 < scrollX && scrollX < 1850){//
			var obj2_offset = $("#obj2").offset();
				obj2_offset.left += 4;
				$("#obj2").	offset({left: obj2_offset.left});	
			}
		}
	
	//
	scroll_count++;
	$("#debug").html("X: " + scrollX  + "カウント: " +scroll_count);	
});