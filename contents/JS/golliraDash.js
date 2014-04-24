$("body").ready(function(){
	$(window).keyup(function(e){
		//alert(e.keyCode);
		var gollira_speed = 40;
		if(e.keyCode == 88 || e.keyCode == 90) {
			var scrollX = $("body").scrollLeft();

			var golliraX = $("#dashgollira").offset().left;
			//alert(scrollX);
			scrollX += gollira_speed;
			golliraX += gollira_speed;
			//alert(scrollX);
			
			
			$("body").animate({scrollLeft: scrollX}, 0);
			$("#dashgollira").offset({left: golliraX});
		}
	});	
});
