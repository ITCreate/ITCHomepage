//メニュー４番目、項目「部員紹介」内でのJS。

//【１】部員アイコンリストの自動スクロール
//for文を用いて全メンバーアイコン要素をmember_scroll_speedに格納されている数値分上に移動させる。
//一番上のメンバーアイコン要素のtop値がloop_border_pxの値を上回った場合、その要素をリストの最後列に移動させる。
//一度目は<body>要素が読み込まれた時に実行。(readybody_event.js)
function member_scroll() {
	var nth_menber_top;				//上からn番目にあるメンバーのアイコンを格納。
	var first_menber_top;			//一番上の要素のtop値を格納。
	var member_scroll_speed = 2;	//上スクロールの速度。
	var loop_border_px = 50;		//アイコン要素のtop値がこの値を超えたらそのアイコン要素を最後列に移動させる。
	for(i=0;i < $(".type_member").length;i++){
		nth_menber_top = $(".type_member").eq(i).offset().top;		//i番目の要素のtop値を取得。
		$(".type_member").eq(i).offset({top: nth_menber_top - member_scroll_speed});	//i番目の要素のtop値をmember_scroll_speedに格納されている数値分上方向にずらす

		//ここからtop値がloop_border_pxを超えた要素を最後列に移動させる命令。
		
		if($(".type_member").eq(i).offset().top < loop_border_px){	//i番目のアイコン要素のtop値がloop_border_pxの値より上になっている場合。
			first_menber_top = $(".type_member").eq(i).offset().top;	//アイコン要素の移動後のtop値を取得。
			$(".type_member").eq(i).offset(
				{top: first_menber_top + $(".type_member").length * $(".type_member").eq(i).height()});	//top値がloop_border_pxを超えた要素のtop値を(要素の総数*要素の高さ)分下へ移動させる。
		}
	}
	setTimeout("member_scroll()", 20);	//繰り返す。
}

//【２】部員アイコンリストのマウスオーバー
//
$("#member1").mouseover(function(){
	//$("#personaldata_grade").
});
/*
<div id="personaldata_name" class="personaldata">Name :</div>
					<div id="personaldata_grade" class="personaldata">Grade :</div>
					<div id="personaldata_course" class="personaldata">Course :</div>
					<div id="personaldata_birthplace" class="personaldata">Birthplace :</div>
					<div id="personaldata_Speciality" class="personaldata">Speciality :</div>
					<div id="personaldata_comment" class="personaldata">comment :</div>
*/