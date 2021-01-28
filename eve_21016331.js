$(function(){
	W_Base	=$('.img_box_out2').width();
	S_Base	=$('.img_box_out1').width();


	$('#upd').on('change', function(e){
		var file = e.target.files[0];	
		var reader = new FileReader();

		if(file.type.indexOf("image") < 0){
			alert("NO IMAGE FILES");
			return false;
		}

		var img = new Image();
		var cvs = document.getElementById('cvs1');
		var ctx = cvs.getContext('2d');

		reader.onload = (function(file){
			return function(e){
				img.src = e.target.result;
				$("#view").attr("src", e.target.result);
				$("#view").attr("title", file.name);

				img.onload = function(){
					img_W=img.width;
					img_H=img.height;

					if(img_H > img_W){

						cvs_W=900;
						cvs_H=img_H*(cvs_W/img_W);


						cvs_X=Math.ceil((cvs_H-cvs_W)/2);
						cvs_Y=0;

						cvs_A=Math.ceil(cvs_H);
						cvs_B=50-cvs_X;
						
						css_W=W_Base;
						css_H=img_H*(css_W/img_W);

						css_l=css_H;
						css_p=S_Base-Math.ceil((css_H-css_W)/2);

					}else{

						cvs_H=900;
						cvs_W=img_W*(cvs_H/img_H);

						cvs_Y=Math.ceil((cvs_W-cvs_H)/2);
						cvs_X=0;

						cvs_A=Math.ceil(cvs_W);
						cvs_B=50-cvs_Y;

						css_H=W_Base;
						css_W=img_W*(css_H/img_H);

						css_l=css_W;
						css_p=S_Base-Math.ceil((css_W-css_H)/2);
					}				

					$("#cvs1").attr({'width': cvs_A,'height': cvs_A}).css({'width': css_l,'height': css_l,'left': css_p,'top': css_p});
					ctx.drawImage(img, 0,0, img_W, img_H, cvs_X, cvs_Y, cvs_W, cvs_H);
					ImgCode = cvs.toDataURL("image/jpeg");
					ImgTop		=css_p;
					ImgLeft		=css_p;
					Rote		=0;
					ImgZoom		=100;
				}
			};
		})(file);
		reader.readAsDataURL(file);
	});

	$("#cvs1").draggable();
	$("#cvs1").on("mousemove", function() {
		ImgLeft = $("#cvs1").css("left");
		ImgTop = $("#cvs1").css("top");
	});

	$('#img_close').on('click',function(){	
		$('.set_back').fadeOut(200);
		$('.img_box	').animate({'top':'120vh'},200);

		var cvs = document.getElementById('cvs1');
		var ctx = cvs.getContext('2d');
		ctx.clearRect(0, 0, cvs_A,cvs_A);
	});

	$('.upload_trush').on('click',function(){
		Zoom=100;
		Left=0;
		Right=0;
		Rote=0;
		ImgCode='';

		$("#cvs1").css({'transform':'rotate(0deg)'});
		$('.zoom_box').text(Zoom);
		$('#img_zoom').val(Zoom);
		$('#input_zoom').val(Zoom);
		$('#upd').val('');
		var cvs = document.getElementById('cvs1');
		var ctx = cvs.getContext('2d');
		ctx.clearRect(0, 0, cvs_A,cvs_A);
	});

	$('.upload_rote').on('click',function(){
		$({deg:Rote}).animate({deg:-90 + Rote}, {
			duration:400,
			progress:function() {
				$('#cvs1').css({
					'transform':'rotate(' + this.deg + 'deg)',
				});
			},
		});
		Rote -=90;
		if(Rote <0){
			Rote+=360;
		}
	});

	$('.zoom_mi').on( 'click', function () {
		Zoom--;
		if(Zoom <100){
			Zoom=100;
		}

		var cvs_An	=Math.floor(Zoom*css_l/100);
		$("#cvs1").css({'width':cvs_An,'height':cvs_An});

		$('.zoom_box').text(Zoom);
		$('#img_zoom').val(Zoom);
		$('#input_zoom').val(Zoom);
	});

	$( '.zoom_pu' ).on( 'click', function () {
		Zoom++;
		if(Zoom >300){
			Zoom=300;
		}

		var cvs_An	=Math.floor(Zoom*css_l/100);
		$("#cvs1").css({'width':cvs_An,'height':cvs_An});

		$('.zoom_box').text(Zoom);
		$('#img_zoom').val(Zoom);
		$('#input_zoom').val(Zoom);
	});

	$( '#input_zoom' ).on( 'input', function () {
		Zoom=$(this).val();
		if(Zoom > 300){
			Zoom=300;
		}
		if(Zoom < 100){
			Zoom=100;	
		}

		var cvs_An	=Math.floor(Zoom*css_l/100);
		$("#cvs1").css({'width':cvs_An,'height':cvs_An});

		$('.zoom_box').text(Zoom);
		$('#img_zoom').val(Zoom);
	});

	$('#img_reset').on( 'click', function () {
		Zoom=100;
		Left=cvs_B;
		Right=cvs_B;
		Rote=0;
		$("#cvs1").css({'width': cvs_A,'height': cvs_A,'left': cvs_B,'top': cvs_B, 'transform':'rotate(0deg)'});

		$('.zoom_box').text(Zoom);
		$('#img_zoom').val(Zoom);
		$('#input_zoom').val(Zoom);

		$('#reg_name').val('');
	});

	$('.img_open').on( 'click', function () {
		$('.back').fadeIn(500);
	});

	$('.box_iine').on('click',function(){
		$(this).addClass('box_iine_on');
		Tmp=$(this).attr('id').replace('iine','');

		$('#b'+Tmp).delay(50).animate({'left':'55vw'},400);
	});

	$('.img_label_name').on('click',function(){

		if($('#img_label').val()==1){
			$('#img_label').val('0');
			$('.check1').fadeOut(50);
			Tmp=0;

		}else{
			$('#img_label').val('1');
			$('.check1').fadeIn(50);
			Tmp=1;
		}

		$.ajax({
			url:"post_eve_2101_ck.php",
			type: "POST",
			data:{
				'reg'			:$('#img_id').val(),
				"idcode"		:IdCode,
				"submit"		:Tmp,
			},

		}).done(function(data, textStatus, jqXHR){
			$('#img_id').val(1);
		});
	});


	$('#img_chg').on('click', function(){
		$('.img_box	').animate({'top':'10vh'},200);
	});

	$('#img_del').on('click', function(){
		$.ajax({
			url:"post_img_del.php",
			type: "POST",
			data:{
				'idcode'	:'<?=$idcode?>',
			},
		}).done(function(data, textStatus, jqXHR){
			$('#main_img').attr('src',"../../asset/footmark/easytalk/face/noimage.png");
			$('#img_label').val('');
			$('img_id').val('');

			$('.img_box	').animate({'top':'120vh'},200);
			var cvs = document.getElementById('cvs1');
			var ctx = cvs.getContext('2d');
			ctx.clearRect(0, 0, cvs_A,cvs_A);
			$('.zoom_box').text('100');
			Rote=0;
		});
	});


	$('#img_set').on('click',function(){	
		$.ajax({
			url:"post_img_set.php",
			type: "POST",
			data:{
				'reg'		:$('#img_id').val(),
				'idcode'	:'<?=$idcode?>',
				'img_code'	:ImgCode.replace(/^data:image\/jpeg;base64,/, ""),
				'img_top'	:ImgTop,
				'img_left'	:ImgLeft,
				'img_width'	:cvs_W,
				'img_height':cvs_H,
				'img_zoom'	:$('.zoom_box').text(),
				'img_rote'	:Rote,
			},

		}).done(function(data, textStatus, jqXHR){

			$('#img_id').val(1);
			$('#main_img').attr('src',data);
			$('.set_back').fadeOut(200);
			$('.img_box	').animate({'top':'120vh'},200);
			var cvs = document.getElementById('cvs1');
			var ctx = cvs.getContext('2d');
			ctx.clearRect(0, 0, cvs_A,cvs_A);
			$('.zoom_box').text('100');
			Rote=0;

		}).fail(function(jqXHR, textStatus, errorThrown){
			console.log(textStatus);
			console.log(errorThrown);
		});
	});

	$('.title_1').on('click',function(){	
		Tmp=$(this).attr('id').replace('tag','page');
		console.log(Tmp);

		$('.title_1').removeClass("tag_on");
		$(this).addClass("tag_on");

		$('.content').hide()
		$('#'+Tmp).fadeIn(400);
	});


});