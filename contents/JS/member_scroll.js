//メニュー４番目、項目「部員紹介」内でのJS。

//【１】部員アイコンリストの自動スクロール
//for文を用いて全メンバーアイコン要素をmember_scroll_speedに格納されている数値分上に移動させる。
//一番上のメンバーアイコン要素のtop値がloop_border_pxの値を上回った場合、その要素をリストの最後列に移動させる。
//一度目は<body>要素が読み込まれた時に実行。(readybody_event.js)

//idouが再帰的に呼び出されスクロールする。

$(function(){
	$("#scroll_upside").click(function(){
	var count = 28 - 1;
	(function idou(){
		var nth_menber_top;				//上からn番目にあるメンバーのアイコンを格納。
		var first_menber_top;			//一番上の要素のtop値を格納。
		var member_scroll_speed = 10;	//上スクロールの速度。
		var loop_border_px = 50;		//アイコン要素のtop値がこの値を超えたらそのアイコン要素を最後列に移動させる。

		for(var i=0;i < $(".type_member").length;i++){
			nth_menber_top = $(".type_member").eq(i).offset().top;		//i番目の要素のtop値を取得。
			$(".type_member").eq(i).offset({top: nth_menber_top - member_scroll_speed});
			//ここからtop値がloop_border_pxを超えた要素を最後列に移動させる命令。
			if($(".type_member").eq(i).offset().top < loop_border_px){		//i番目のアイコン要素のtop値がloop_border_pxの値より上になっている場合。
				first_menber_top = $(".type_member").eq(i).offset().top;	//アイコン要素の移動後のtop値を取得。
				$(".type_member").eq(i).offset(
					{top: first_menber_top + $(".type_member").length * $(".type_member").eq(i).height()});	//top値がloop_border_pxを超えた要素のtop値を(要素の総数*要素の高さ)分下へ移動させる。
			}
		}
		if(count > 0){
			count--;
			setTimeout(idou, 2);
		}		
	})();
	
	});
});


$(function(){
	$("#scroll_downside").click(function(){
	var count = 28 - 1;
	(function sitaidou(){
		var nth_menber_top;				//上からn番目にあるメンバーのアイコンを格納。
		var first_menber_top;			//一番上の要素のtop値を格納。
		var member_scroll_speed = -10;	//上スクロールの速度。
		var loop_border_px = 480;		//アイコン要素のtop値がこの値を超えたらそのアイコン要素を最後列に移動させる。

		for(var i= $(".type_member").length - 1;i>=0;i--){
			//alert($(".type_member").eq(i).offset().top);
			nth_menber_top = $(".type_member").eq(i).offset().top;		//i番目の要素のtop値を取得。
			$(".type_member").eq(i).offset({top: nth_menber_top - member_scroll_speed});
			//ここからtop値がloop_border_pxを超えた要素を最後列に移動させる命令。
			if($(".type_member").eq(i).offset().top > loop_border_px){		//i番目のアイコン要素のtop値がloop_border_pxの値より上になっている場合。
				first_menber_top = $(".type_member").eq(i).offset().top;	//アイコン要素の移動後のtop値を取得。
				$(".type_member").eq(i).offset(
					{top: first_menber_top - $(".type_member").length * $(".type_member").eq(i).height()});	//top値がloop_border_pxを超えた要素のtop値を(要素の総数*要素の高さ)分下へ移動させる。
			}
		}
		
		if(count > 0){
			count--;
			setTimeout(sitaidou, 2);
		}
		
	})();
	
	});
});

//【２】ホイールスクロール
$(".type_member").mousewheel(function(eo, delta, deltaX, deltaY){
	member_scroll();
});

//【３】部員アイコンリストのマウスオーバー
//
$("body").ready(function(){
	$("#member1").hover(function(){
		var name = "筒井瞬";
		var grade = "1";
		var course = "ITテクニカル学科";
		var speciality = "ビルバク";
		var image = "images/member/parman.jpg";
		var x=0, y=0;

		personaldata_renewal(name, grade, course, speciality, image, x ,y);
	});
});

$("body").ready(function(){
	$("#member2").hover(function(){
		var name = "森本";
		var grade = "2";
		var course = "ネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/gollira.jpg";
		var x=0, y=0;

		personaldata_renewal(name, grade, course, speciality, image, x ,y);
	});
});

$("body").ready(function(){
	$("#member3").hover(function(){
		var name = "石田ゆうた";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/yamada.png";
		var x=0, y=0;

		personaldata_renewal(name, grade, course, speciality, image, x ,y);
	});
});

$("body").ready(function(){
	$("#member4").hover(function(){
		var name = "七塚";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/doragon.jpg";
		var x=0, y=0;	

		personaldata_renewal(name, grade, course, speciality, image, x ,y);
	});
});

$("body").ready(function(){
	$("#member5").hover(function(){
		var name = "マスミ";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/yamada.png";
		var x=0, y=0;

		personaldata_renewal(name, grade, course, speciality, image, x ,y);
	});
});

$("body").ready(function(){
	$("#member6").hover(function(){
		var name = "東";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/megane.gif";
		var x=0, y=0;

		personaldata_renewal(name, grade, course, speciality, image, x ,y);
	});
});

$("body").ready(function(){
	$("#member7").hover(function(){
		var name = "女";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/girl.jpg";
		var x=0, y=0;

		personaldata_renewal(name, grade, course, speciality, image, x ,y);
	});
});

$("body").ready(function(){
	$("#member8").hover(function(){
		var name = "相原";
		var grade = "2";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/mogura.jpg";	
		var x=0, y=0;

		personaldata_renewal(name, grade, course, speciality, image, x ,y);
	});
});

$("body").ready(function(){
	$("#member9").hover(function(){
		var name = "芝崎 拓海";
		var grade = "1";
		var course = "ITテクニカル学科";
		var speciality = "ビルバク";
		var image = "images/member/shiva.png";
		var x=0, y=0;

		personaldata_renewal(name, grade, course, speciality, image, x, y);
	});
});

$("body").ready(function(){
	$("#member10").hover(function(){
		var name = "藤井";
		var grade = "1";
		var course = "ITテクニカル学科";
		var speciality = "ビルバク";
		var image = "images/member/gollira.jpg";
		var x=0, y=0;

		personaldata_renewal(name, grade, course,  speciality, image, x, y);
	});
});

//個人情報を書き換えるプログラム。引数はマウスオーバーイベントから持ってくる。
function personaldata_renewal(name, grade, course, speciality, image, x, y){
	$("#personaldata_name").text(name);
	$("#personaldata_grade").text(grade);
	$("#personaldata_course").text(course);
	$("#personaldata_speciality").text(speciality);
	$("#charactor").attr("src", image);
	$("#charactor").css('margin-top', y+'px');
	$("#charactor").css('margin-top', x+'px')
}
