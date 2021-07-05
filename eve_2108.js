$(function(){
	$('.up_link_out').on('click',function(){
	    $('body, html').animate({ scrollTop: 0 }, 500);
	     return false;
	});

	$(window).scroll(function() {
		var Width = $('.main').width();

		var HIGHT = $(document).innerHeight();
		Tmp=$(this).scrollTop();

		if(Tmp < 0){
			Tmp=0;
		}

		if(Tmp>500){
			$('.up_link_out').fadeIn(200);
		}else{
			$('.up_link_out').fadeOut(200);
		}

		Base_w=$(window).width()+Tmp;
		Base_w=Width+Tmp;
		Base_y=(-450)+Tmp;

		S0=Math.floor(Tmp/20);


		$('.up_link').css({'transform':'rotate('+S0+'deg)'});

		$('.img_back1').stop(false, true).animate({'top':Base_y},100);

		if(Tmp > $('.box_3').offset().top){
			$('.img_back3').css('z-index','0');
			$('.img_back2,.img_back1').css('z-index','-1');

		}else if(Tmp > $('#list_1').offset().top){
			$('.img_back2').css('z-index','0');
			$('.img_back1,.img_back3').css('z-index','-1');
		
		}else{
			$('.img_back1').css('z-index','0');
			$('.img_back2,.img_back3').css('z-index','-1');
		}

		if($('.up_link_out').offset().top>$('#canvas2').offset().top){
			$('.up_link_out').removeClass('out_e');

		}else{
			$('.up_link_out').addClass('out_e');
		}
	});
});


window.addEventListener('load', draw, false);
function draw(){
	var r = 20;
	var T  = 600;
	var degree = 0;
	    
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	    
	function loop(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.strokeStyle = '#ff0fff';
		ctx.lineWidth = 2;
		drawWave(degree);

		ctx.stroke();
		ctx.fillStyle = '#ff0fff';
		ctx.globalAlpha = 1;
		ctx.lineTo(canvas.width, canvas.height);
		ctx.lineTo(0, canvas.height);
		ctx.closePath();
		ctx.fill();
		degree += 2;
		requestAnimationFrame(loop);
	}
	loop();

	function drawWave(degree) {
		ctx.moveTo(0, -r*Math.sin((2*Math.PI/T)*degree)+(canvas.height/2)); //始点
		for (var x=1; x <= canvas.width; x+= 1) {
			var y =-r*Math.sin((2*Math.PI/T)*(degree+x));
			ctx.lineTo(x, y+(canvas.height/2));
		}
	}
}


window.addEventListener('load', draw2, false);
function draw2(){
	var r = 20;
	var T  = 600;
	var degree2 = 0;
	    
	var canvas2 = document.getElementById('canvas2');
	var ctx = canvas2.getContext('2d');
	    
	function loop(){
		ctx.clearRect(0, 0, canvas2.width, canvas2.height);
		ctx.beginPath();
		ctx.strokeStyle = '#ff0000';
		ctx.lineWidth = 2;
		drawWave(degree2);

		ctx.stroke();
		ctx.fillStyle = '#0000ff';
		ctx.globalAlpha = 1;

		ctx.lineTo(canvas2.width, 0);
		ctx.lineTo(0, 0);

		ctx.closePath();
		ctx.fill();
		degree2 += 2;
	}
	loop();

	function drawWave(degree2) {
		ctx.moveTo(0, -r*Math.sin((2*Math.PI/T)*degree2)+(canvas2.height/2)); //始点
		for (var x=1; x <= canvas2.width; x+= 1) {
			if(x<400){
				var y =-50*Math.cos((Math.PI/800)*(x*2));

			}else{
				var y =-50*Math.cos((Math.PI/400)*(x*2-(x-400/100)));
			}
				ctx.lineTo(x, y+(canvas2.height/2));
		}
	}
}
