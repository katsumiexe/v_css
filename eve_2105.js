
$(function(){ 
	var Pg=0;
	var PgMax=$('.page').length-4;
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
		console.log(Ope_Id);

		$.post("post_eve_2105.php",
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

 
    $('#page_p').on('click',function(){

console.log(PgMax);
console.log(Pg);

		if(Pg<PgMax){
			Pg--;
			$('.pg_box_in').animate({'left':Pg*8 +"vw"},500);
		}
	});
});



