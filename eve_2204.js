$(function(){ 
	$(".done2").on("click",function(){
		$(".back").fadeIn(0).delay(1000).fadeOut(400);
		$(".back_pop").animate({"top":"110vh"},0).animate({"top":"40vh"},200).animate({"top":"50vh"},50).delay(500).animate({"top":"60vh"},50).animate({"top":"-30vh"},200);
		Tmp=$(this).attr("id").replace("dn","");
		$(this).removeClass("done2").addClass("done3");
		$(this).next(".box_5_pts_a").text("���ςł�");

		$.ajax({
			type:"post",
			url:"post_eve_2204.php",
			data:{
				'ope_id':Tmp,
				'user_id':'<?=$idcode?>',
			},
		}).done(function(data, textStatus, jqXHR){
			console.log(data)
		});
	});
});
