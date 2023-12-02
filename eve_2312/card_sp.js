$(function(){ 
	$('.set_btn_out').on("click",".set_btn_on",function(){
		$('#msg1').slideUp(500);
		$('#msg2').delay(800).slideDown(500).delay(3300).slideUp(500);
		$('#msg3').delay(5500).slideDown(500);
		$(this).removeClass("set_btn_on");

		$('.chu_card_b').css('transform','rotateY(-180deg)');
		$('.chu_card_f').css('transform','rotateY(0)');

		$('#c3').delay(800).animate({"left":"38vw"}, 400)
		.delay(500)
		.animate({"left":"20vw"},250, function(){$(this).css({"z-index": "38"})}).delay(50).animate({"left":"56vw"},250).delay(50)
		.animate({"left":"20vw"},250, function(){$(this).css({"z-index": "36"})}).delay(50).animate({"left":"56vw"},250).delay(50)
		.animate({"left":"20vw"},250, function(){$(this).css({"z-index": "34"})}).delay(50).animate({"left":"56vw"},250).delay(50)
		.animate({"left":"20vw"},250, function(){$(this).css({"z-index": "32"})}).delay(50).animate({"left":"56vw"},250).delay(50)
		.animate({"left":"38vw"},250)
		.delay(800)
		.animate({"left":"72.5vw"}, 400)

		$('#c2').delay(800).animate({"left":"38vw"}, 400).delay(4000).animate({"left":"49.5vw"}, 400);
		$('#c1').delay(800).animate({"left":"38vw"}, 400)
		.delay(1000)
		.animate({"left":"56vw"},250, function(){$(this).css({"z-index": "37"})}).delay(50).animate({"left":"20vw"},250).delay(50)
		.animate({"left":"56vw"},250, function(){$(this).css({"z-index": "35"})}).delay(50).animate({"left":"20vw"},250).delay(50)
		.animate({"left":"56vw"},250, function(){$(this).css({"z-index": "33"})}).delay(50).animate({"left":"20vw"},250).delay(50)
		.animate({"left":"56vw"},250, function(){$(this).css({"z-index": "31"})}).delay(50).animate({"left":"20vw"},250).delay(50)
		.animate({"left":"38vw"},250)
		.delay(300)
		.animate({"left":"26.5vw"}, 400)



		$('#c0').delay(800).animate({"left":"38vw"}, 400).delay(4000).animate({"left":"3.5vw"}, 400);
	    $('.box_block').fadeOut(6000);
	});

	$(".chu_card").on("click",function(){
		var Url='url(\"https://katsumiexe.github.io/v_css/eve_2312/img/card'+Done+'.jpg\")';
	    $('.box_block').show();
		$(this).children('.chu_card_f').css('transform','rotateY(-180deg)');
		$(this).children('.chu_card_b').css({'transform':'rotateY(0)','background-image':Url});
		$('#msg3').slideUp(500);
		Tmp_s=Done + 3;
		$('#msg' + Tmp_s).delay(600).slideDown(500);

	});
});
