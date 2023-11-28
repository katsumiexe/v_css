$(function(){ 
	$('#set_btn').on("click",function(){
		$('#c3').delay(0).animate({"left":"53vw"}, 400).delay(2000).animate({"left":"28.5vw"}, 400)
		.delay(500)
		.animate({"left":"20vw"},250, function(){$(this).css({"z-index": "38"})}).delay(50).animate({"left":"37vw"},250).delay(50)
		.animate({"left":"20vw"},250, function(){$(this).css({"z-index": "36"})}).delay(50).animate({"left":"37vw"},250).delay(50)
		.animate({"left":"20vw"},250, function(){$(this).css({"z-index": "34"})}).delay(50).animate({"left":"37vw"},250).delay(50)
		.animate({"left":"20vw"},250, function(){$(this).css({"z-index": "32"})}).delay(50).animate({"left":"37vw"},250).delay(50)
		.animate({"left":"28.5vw"},250)
		.delay(800)
		.animate({"left":"53vw"}, 400)

		$('#c2').delay(100).animate({"left":"37vw"}, 400).delay(1900).animate({"left":"28.5vw"}, 400).delay(4000).animate({"left":"37vw"}, 400);
		$('#c1').delay(200).animate({"left":"21vw"}, 400).delay(1800).animate({"left":"28.5vw"}, 400)
		.delay(1000)
		.animate({"left":"37vw"},250, function(){$(this).css({"z-index": "37"})}).delay(50).animate({"left":"20vw"},250).delay(50)
		.animate({"left":"37vw"},250, function(){$(this).css({"z-index": "35"})}).delay(50).animate({"left":"20vw"},250).delay(50)
		.animate({"left":"37vw"},250, function(){$(this).css({"z-index": "33"})}).delay(50).animate({"left":"20vw"},250).delay(50)
		.animate({"left":"37vw"},250, function(){$(this).css({"z-index": "31"})}).delay(50).animate({"left":"20vw"},250).delay(50)
		.animate({"left":"28.5vw"},250)
		.delay(300)
		.animate({"left":"21vw"}, 400)

		$('#c0').delay(300).animate({"left":"5vw"}, 400).delay(1700).animate({"left":"28.5vw"}, 400).delay(4000).animate({"left":"5vw"}, 400);
	    $('.box_block').fadeOut(8000);

		setTimeout(function(){
			$('.chu_card_b').css('transform','rotateY(-180deg)');
			$('.chu_card_f').css('transform','rotateY(0)');
		},1400);
	});
	$(".chu_card").on("click",function(){
	    $('.box_block').show();
		$(this).children('.chu_card_f').css('transform','rotateY(-180deg)');
		$(this).children('.chu_card_b').css({'transform':'rotateY(0)','background-image':'url("https://katsumiexe.github.io/v_css/eve_2312/img/atari.jpg")'});
	});
});


