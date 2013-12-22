$("body").ready(function(){
	$(window).scroll(function(){
		var scrollX = $(window).scrollLeft();
		//alert();
		var x1 = $("#menu1_top").width()*document.body.style.zoom - $(window).width() / 2 ;
		var y1 = -650;
		var x2 = $("#menu1_top").width()*document.body.style.zoom + $("#menu2_abst").width()*document.body.style.zoom
					 - $(window).width()/2;
		var y2 = 150;

		if(x1 < scrollX && scrollX < x2){
			proportion_scroll("#background_skin", x1, y1, x2, y2, scrollX);
		}else if(scrollX < x1){
			$("#background_skin").offset({top: -650});
		}else{
			$("#background_skin").offset({top: 150});
		}
		$("#debug").html("scrollX: " + scrollX  + "x1: " + x1 + "menu1:" + $("#background_skin").offset().top);
	});
});

function proportion_scroll(target, x1, y1, x2, y2, scrollX){
	var slope = (y1 - y2)/(x1 - x2);
	var intercept = y1 - (y1 - y2)/(x1 - x2)*x1;
	var background_vscroll = slope*scrollX  + intercept;
	$(target).offset({top: background_vscroll});
}