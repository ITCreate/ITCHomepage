//メニュー４番目、項目「部員紹介」内でのJS。

//【１】部員アイコンリストの自動スクロール
//for文を用いて全メンバーアイコン要素をmember_scroll_speedに格納されている数値分上に移動させる。
//一番上のメンバーアイコン要素のtop値がloop_border_pxの値を上回った場合、その要素をリストの最後列に移動させる。
//一度目は<body>要素が読み込まれた時に実行。(readybody_event.js)
$("body").ready(function(){
	var nth_menber_top;				//上からn番目にあるメンバーのアイコンを格納。
	var first_menber_top;			//一番上の要素のtop値を格納。
	var member_scroll_speed = 2;	//上スクロールの速度。
	var loop_border_px = 50;		//アイコン要素のtop値がこの値を超えたらそのアイコン要素を最後列に移動させる。

	//member_scrollが再帰的に呼び出されスクロールする。
	function member_scroll() {
		for(var i=0;i < $(".type_member").length;i++){
			nth_menber_top = $(".type_member").eq(i).offset().top;		//i番目の要素のtop値を取得。
			$(".type_member").eq(i).offset({top: nth_menber_top - member_scroll_speed});	//i番目の要素のtop値をmember_scroll_speedに格納されている数値分上方向にずらす

			//ここからtop値がloop_border_pxを超えた要素を最後列に移動させる命令。
			if($(".type_member").eq(i).offset().top < loop_border_px){		//i番目のアイコン要素のtop値がloop_border_pxの値より上になっている場合。
				first_menber_top = $(".type_member").eq(i).offset().top;	//アイコン要素の移動後のtop値を取得。
				$(".type_member").eq(i).offset(
					{top: first_menber_top + $(".type_member").length * $(".type_member").eq(i).height()});	//top値がloop_border_pxを超えた要素のtop値を(要素の総数*要素の高さ)分下へ移動させる。
			}
			
		}
		//setTimeout(member_scroll(), 200);	//繰り返す。
	}

	
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

		personaldata_renewal(name, grade, course, speciality, image);
	});
});

$("body").ready(function(){
	$("#member2").hover(function(){
		var name = "森本";
		var grade = "2";
		var course = "ネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/gollira.jpg";

		personaldata_renewal(name, grade, course, speciality, image);
	});
});

$("body").ready(function(){
	$("#member3").hover(function(){
		var name = "石田ゆうた";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/yamada.png";	
		personaldata_renewal(name, grade, course, speciality, image);
	});
});

$("body").ready(function(){
	$("#member4").hover(function(){
		var name = "七塚";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/doragon.jpg";	
		personaldata_renewal(name, grade, course, speciality, image);
	});
});

$("body").ready(function(){
	$("#member5").hover(function(){
		var name = "マスミ";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/yamada.png";	
		personaldata_renewal(name, grade, course, speciality, image);
	});
});

$("body").ready(function(){
	$("#member6").hover(function(){
		var name = "東";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/megane.gif";	
		personaldata_renewal(name, grade, course, speciality, image);
	});
});

$("body").ready(function(){
	$("#member7").hover(function(){
		var name = "女";
		var grade = "3";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/girl.jpg";	
		personaldata_renewal(name, grade, course, speciality, image);
	});
});

$("body").ready(function(){
	$("#member8").hover(function(){
		var name = "相原";
		var grade = "2";
		var course = "ITネットワーク学科";
		var speciality = "ビルバク";
		var image = "images/member/mogura.jpg";	
		personaldata_renewal(name, grade, course, speciality, image);
	});
});

$("body").ready(function(){
	$("#member9").hover(function(){
		var name = "芝崎 拓海";
		var grade = "1";
		var course = "ITテクニカル学科";
		var speciality = "ビルバク";
		var image = "images/member/gollira.jpg";

		personaldata_renewal(name, grade, course, speciality, image);
	});
});

$("body").ready(function(){
	$("#member10").hover(function(){
		var name = "藤井";
		var grade = "1";
		var course = "ITテクニカル学科";
		var speciality = "ビルバク";
		var image = "images/member/gollira.jpg";

		personaldata_renewal(name, grade, course,  speciality, image);
	});
});

//個人情報を書き換えるプログラム。引数はマウスオーバーイベントから持ってくる。
function personaldata_renewal(name, grade, course, speciality, image){
	$("#personaldata_name").text(name);
	$("#personaldata_grade").text(grade);
	$("#personaldata_course").text(course);
	$("#personaldata_speciality").text(speciality);
	$("#charactor").attr("src", image);
}
