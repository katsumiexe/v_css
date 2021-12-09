$(function(){ 
	var Pg=0;
	var PgMax=$('.page').length-6;
	$('.flex_box,.flex_box_w').hide();
	$('.group0').show();
	$('#p0').css('background','linear-gradient(#c0a000,#a09000)');

    $('.page').on('click',function(){
		$('.page').css('background','linear-gradient(#d0d0d0,#c0c0c0)');
		$(this).css('background','linear-gradient(#c0a000,#a09000)');

		Tmp =$(this).attr('id').replace("p", "");
		$('.flex_box,.flex_box_w').hide();
		$('.group'+Tmp).show();
	});

    $('#connect').on('click',function(){
		$.ajax({
			type:"post",
			url:"post_eve_2112.php",
			data:{
			'user_id':User_Id,
			'ope_id':Ope_Id
			},

		}).done(function(data, textStatus, jqXHR){
			console.log(data);
			if(data == 2){
				$('.bottun_box').hide();
				$('.call_box').fadeIn(500);

			}else{
				$('.call_ng').fadeIn(500);
			}		
		}).fail(function(jqXHR, textStatus, errorThrown){
			console.log(textStatus);
			console.log(errorThrown);
		});
	});


 
    $('#page_n').on('click',function(){
		if(PgMax+Pg>0){
			Pg--;
			$('.pg_box_in').animate({'left':Pg*8 +"vw"},200,"swing");
		    $('.to_top_p,.to_top_p2').css('border-color','#b08000');
		}
		if(PgMax+Pg>0){
		    $('.to_top_n,.to_top_n2').css('border-color','#fafafa');
		}
	});

    $('#page_p').on('click',function(){
		if(Pg<0){
			Pg++;
			$('.pg_box_in').animate({'left':Pg*8 +"vw"},200,"swing");
		    $('.to_top_n,.to_top_n2').css('border-color','#b08000');
		}
		if(Pg<0){
		    $('.to_top_p,.to_top_p2').css('border-color','#fafafa');
		}
	});
});
