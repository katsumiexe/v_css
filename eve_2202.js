$(function(){ 
	$('.main_2').on('click','.main_2_1',function(){
		RANK++;
		Tmp=$(this).attr('id').replace('l','');

		if(RANK <5){
			$('.main_1_in,.main_2,.main_2_1').hide()
			$.ajax({	
				url:'./post_eve_2202.php',
				type: 'post',
				data:{
					'base':Tmp,
					'idcode':IdCode,
					'sp':'sp',
				},
				dataType: 'json'

			}).done(function(data, textStatus, jqXHR){
				HGT=data.cnt * 9+5;
				$('.main_1_in').fadeIn().text(data.main);
				$('.main_2').html(data.sub).css('height', HGT +"vw").slideDown(500);
				for(var N=0; N<data.cnt;N++){
					$('.main_2_1').eq(N).delay(150).fadeIn(300 * N);
				}
				$('.main_1_count').text(RANK + "/4");
				Foot[RANK]=Tmp;

				if(RANK >1){
					$('#back1').fadeIn(1000);
				}
			}).fail(function(jqXHR, textStatus, errorThrown){
			});

		}else{
			$.ajax({	
				url:'./post_eve_2202_last.php',
				type: 'post',
				data:{
					'base':Tmp,
					'idcode':IdCode,
					'sp':'sp',
				},

			}).done(function(data, textStatus, jqXHR){
				$('#back1').fadeOut(1000);
				$('.set_back').fadeIn(500);
				$('.ar_pop').html(data).delay(1000).fadeIn(1000);


			}).fail(function(jqXHR, textStatus, errorThrown){
			});
		}
	});

	$('#back1').on('click',function(){
		RANK--;
		Tmp=Foot[RANK]-0;

		$('.main_1_count').text(RANK + "/5");
		$('.main_1_in,.main_2,.main_2_1').hide()
		$.ajax({
			url:'./post_eve_2202.php',
			type: 'post',
			data:{
				'base':Tmp,
				'idcode':IdCode,
				'sp':'sp',
			},
			dataType: 'json'

		}).done(function(data, textStatus, jqXHR){
			RANK=data.rank;
			HGT=data.cnt * 9+5;
			$('.main_1_in').fadeIn().text(data.main);
			$('.main_2').html(data.sub).css('height', HGT +"vw").slideDown(500);
			for(var N=0; N<data.cnt;N++){
				$('.main_2_1').eq(N).delay(200).fadeIn(300 * N);
			}
			$('.main_1_count').text(RANK + "/4");
			Foot[RANK]=Tmp;
			if(RANK <2){
				$('#back1').fadeOut(1000);
			}

		}).fail(function(jqXHR, textStatus, errorThrown){

		});
	});
});
