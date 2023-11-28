$(function(){ 

$(".chu_card").queue(function(next){

    $('#c3').delay(0).animate({"left":"53vw"}, 400).delay(3000).animate({"left":"32vw"}, 400).delay(200)
    .animate({"left":"-6vw"}, 150).delay(50).animate({"z-index":"14"}, 0).animate({"left":"5vw"}, 150).delay(350)
    .animate({"left":"-6vw"}, 150).delay(50).animate({"z-index":"16"}, 0).animate({"left":"5vw"}, 150).delay(350)
    .animate({"left":"-6vw"}, 150).delay(50).animate({"z-index":"18"}, 0).animate({"left":"5vw"}, 150).delay(750)
	.animate({"left":"53vw"}, 400)

	$('#c2').delay(100).animate({"left":"37vw"}, 400).delay(2800).animate({"left":"32vw"}, 400).delay(600)
    .animate({"left":"14vw"}, 150).delay(50).animate({"z-index":"15"}, 0).animate({"left":"5vw"}, 150).delay(350)
    .animate({"left":"14vw"}, 150).delay(50).animate({"z-index":"17"}, 0).animate({"left":"5vw"}, 150).delay(350)
    .animate({"left":"14vw"}, 150).delay(50).animate({"z-index":"19"}, 0).animate({"left":"5vw"}, 150).delay(350)
	.animate({"left":"37vw"}, 400)

    $('#c0').delay(3400).animate({"left":"32vw"}, 400).delay(200).animate({"left":"5vw"}, 400);

    $('#c1').delay(200).animate({"left":"21vw"}, 400,function() {
        next();
    }).delay(2600).animate({"left":"32vw"}, 400).delay(3000).animate({"left":"21vw"}, 400);
    $('.box_block').delay(6000).fadeOut(0);
});

$(".chu_card").delay(1500).queue(function(next){
	$('.chu_card_b').css('transform','rotateY(-180deg)');
	$('.chu_card_f').css('transform','rotateY(0)');
});

$(".chu_card").on("click",function(){
    $('.box_block').show();
	$(this).children('.chu_card_f').css('transform','rotateY(-180deg)');
	$(this).children('.chu_card_b').css({'transform':'rotateY(0)','background-image':'url("https://katsumiexe.github.io/v_css/eve_2312/img/atari.jpg")'});
});
});



