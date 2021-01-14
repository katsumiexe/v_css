$(function(){ 
	var VwBase	=screen.availWidth/100;
	var VhBase	=screen.availHeight/100;
	var VwBase	=$(window).width()/100;
	var VhBase	=$(window).height()/100;
	var Fav			=0;
	var cvs_A		=0;
	var Rote		=0;
	var ImgZoom		=100;
	var Zoom		=100;
	var Chg			='';
	var Tmp			='';
	var StaffTmp	='';
	var ResOpen		='0';

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
						
						css_W=300;
						css_H=img_H*(css_W/img_W);

						css_l=css_H;
						css_p=50-Math.ceil((css_H-css_W)/2);

					}else{

						cvs_H=900;
						cvs_W=img_W*(cvs_H/img_H);

						cvs_Y=Math.ceil((cvs_W-cvs_H)/2);
						cvs_X=0;

						cvs_A=Math.ceil(cvs_W);
						cvs_B=50-cvs_Y;

						css_H=300;
						css_W=img_W*(css_H/img_H);

						css_l=css_W;
						css_p=50-Math.ceil((css_W-css_H)/2);
					}				
/*
console.log("cvs_H"+cvs_H);
console.log("cvs_W"+cvs_W);
console.log("cvs_Y"+cvs_Y);
console.log("cvs_X"+cvs_X);
console.log("cvs_A"+cvs_A);
console.log("cvs_B"+cvs_B);

console.log("css_H"+css_H);
console.log("css_W"+css_W);

console.log("css_l"+css_l);
console.log("css_p"+css_p);
*/

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
		$('#upd').fileExif(function(exif) {

			if (exif['Orientation']) {

				switch (exif['Orientation']) {
				case 3:
					Rote = 180;
					$('#cvs1').css({
						'transform':'rotate(180deg)',
					});
					break;

				case 8:
					Rote = 270;
					$('#cvs1').css({
						'transform':'rotate(270deg)',

					});
					break;

				case 6:
					Rote = 90;
					$('#cvs1').css({
						'transform':'rotate(90deg)',
					});
					break;
				}
			}
		});
	});

	$("#cvs1").draggable();
	$("#cvs1").on("mousemove", function() {
		ImgLeft = $("#cvs1").css("left");
		ImgTop = $("#cvs1").css("top");
	});

	$('#img_set').on('click',function(){	
/*
console.log(Set);
console.log(ImgTop);
console.log(ImgLeft);

console.log(cvs_W);
console.log(cvs_H);
console.log($('.zoom_box').text());
console.log(Rote);
*/

		$.post({
			url:"post_img_set.php",
			data:{
				'img_code'	:ImgCode.replace(/^data:image\/jpeg;base64,/, ""),
				'img_top'	:ImgTop,
				'img_left'	:ImgLeft,
				'img_width'	:cvs_W,
				'img_height':cvs_H,
				'img_zoom'	:$('.zoom_box').text(),
				'img_rote'	:Rote,
				'cast'		:Tmp,
				'reg_name'	:$('#reg_name').val(),
				'del'		:0,
			},

		}).done(function(data, textStatus, jqXHR){
//			console.log(data);

			$('.set_back').fadeOut(200);
			$('.img_box	').animate({'top':'120vh'},200);
			var cvs = document.getElementById('cvs1');
			var ctx = cvs.getContext('2d');
			ctx.clearRect(0, 0, cvs_A,cvs_A);

			$('#wait').hide();
			$('.zoom_box').text('100');
			Rote=0;
			if(Set == "reg"){
				$('#box'+Tmp).addClass('on');
				$('#no'+Tmp).addClass('on_s');
				$('#name'+Tmp).addClass('on_n').text($('#reg_name').val());
				$('#img'+Tmp).attr('src',data);
				$('#set'+Tmp).addClass('on_w');
				$('#cfg'+Tmp).addClass('on_c');

			}else if(Set == "new"){
				$('.tree_img').attr('src',data);

			}else if(Set == "res"){
				$('.write_img').attr('src',data);

			}else if(Set == "chg"){
				$('#list_img'+Tmp).attr('src',data);
			}
		}).fail(function(jqXHR, textStatus, errorThrown){
			console.log(textStatus);
			console.log(errorThrown);
		});


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

});

