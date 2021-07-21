$(function(){
	$('.up_link_out').on('click',function(){
	    $('body, html').animate({ scrollTop: 0 }, 500);
	     return false;
	});

	$('.p_img_pop').on('click',function(){
		$('.pop').fadeIn(500);
	});

	$('.p_icon').on('click',function(){
		Tmp=$(this).attr('id');
		$('.p_box_detail').hide();
		$('#p'+Tmp).show();
	});

	$('.pop_back').on('click',function(){
		$('.pop').fadeOut(500);
	});



	$('.img_back1').delay(100).fadeIn(1000);
	$('.img_back2,.img_back3').delay(1100).fadeIn(10);

	$(window).scroll(function() {
		var Width = $(window).width();
		var Height = $(window).height();

		Tmp=$(this).scrollTop();

		if(Tmp < 0){
			Tmp=0;
		}

		if(Tmp>500){
			$('.up_link_out').fadeIn(200);
		}else{
			$('.up_link_out').fadeOut(200);
		}

		Base_y= (Width*0.55)*(-1)+ Tmp*1.3;

console.log(Base_y)

		S0=Math.floor(Tmp/5);
		Tmp_b=$('#canvas2').offset().top-$('.up_link_out').offset().top;


		if(Tmp>$('#canvas2').offset().top-$(window).height()+$('.up_link_out').height()){
			$('.up_link_out').removeClass('out_e').css({'position':'absolute','top':$('#canvas2').offset().top+10});

		}else{
			$('.up_link_out').addClass('out_e').css({'position':'fixed','top':'auto'});
		}


		$('.up_link').css({'transform':'rotate('+S0+'deg)'});
		$('.img_back1').stop(false, true).animate({'top':Base_y},10);

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
	});
});
