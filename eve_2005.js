$(function(){ 
	$('.flex_box').hide();
	$('.group0').show();
	$('#p0').css('background','linear-gradient(#c0a000,#a09000)');

    $('.page').on('click',function(){
		$('.page').css('background','linear-gradient(#d0d0d0,#c0c0c0)');
		$(this).css('background','linear-gradient(#c0a000,#a09000)');

		Tmp =$(this).attr('id').replace("p", "");
		$('.flex_box').hide();
		$('.group'+Tmp).show();
	});

    $('.now_use').on('click',function(){
		$('.sorry').stop().fadeIn(200).delay(1500).fadeOut(1500);
	});



    $('#connect').on('click',function(){
		console.log(Ope_Id);

		$.post("post_eve_2005.php",
		{
			'user_id':User_Id,
			'ope_id':Ope_Id
		},
		function(data){
			if(data == 2){
				$('.bottun_box').hide();
				$('.call_box').fadeIn(500);

			}else{
				$('.call_ng').fadeIn(500);
			}		
		});
	});
});
