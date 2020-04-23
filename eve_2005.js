$(function(){ 
	$('.flex_box').hide();
	$('.group0').show();
	$('#p1').css('background','linear-gradient(#c0a000,#a09000)');

    $('.page').on('click',function(){
		$('.page').css('background','linear-gradient(#d0d0d0,#c0c0c0)');
		$(this).css('background','linear-gradient(#c0a000,#a09000)');

		Tmp =$(this).attr('id').replace("p", "");
		$('.flex_box').hide();
		$('.group'+Tmp).fadeIn(500);
	});
});
