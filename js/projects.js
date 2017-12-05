$(document).ready(function(){ 
  	$('.the-slide').slick({
		prevArrow:"<span class='slick-prev'>&#8249;</span>",
		nextArrow:"<span class='slick-next'>&#8250;</span>"
  	});
  	$('.preloader').fadeOut(1000); 

  	/*Animación de número de slide cuando cambia de proyecto*/
  	var number = $(".slide-number");
	$('.the-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  nextSlide++;
	  number.html(nextSlide+"/16") ;
	});
});

/*ON CLICK de portfolio*/
$(".item").click(function(){
	var obj = $(this);
	var attr = obj.css("background-color");
	var main = $('.port-main-title', $( this ) ).html ();
	var subtitle = $('.port-main-subtitle', $( this ) ).html ();
	var title = $('.port-title', $( this ) ).html ();
	
	$(".work-title").text(title);
	$(".work-info-4 div h4").text(main);
	$(".work-info-4 div h5").text(subtitle);

	$(".port-title").toggleClass("desappear");
	$(".work-single").css("display","block");
	$(".work-common-title").css("color",attr);
	$(".work-info-4").css("background-color", attr);

	setTimeout(function(){
		$(".work-title").toggleClass("toleft");
		$(".work-info-1").css("animation-play-state","running");
		$(".work-info-2").css("animation-play-state","running");
		$(".work-info-3").css("animation-play-state","running");
		$(".work-info-4").css("animation-play-state","running");
	},700)
});	

/*ON HOVER PORTFOLIO CHANGE IMAGE*/
for(i = 1; i <= 16; i++){
	elem = $("[elem="+i+"]");
	item = $("[proj="+i+"]");
	elem.mouseover({url: item.attr("src")}, changeImage);
	elem.css("background-color", item.attr("ppalColor"))
}

function changeImage(param){
	$('.main-container').css("background-image", "url("+param.data.url+")");  
}


/**************************************************************************
							PROJECTS RESPONSIVE
***************************************************************************/
/*Setea a cada projecto su imagen de fondo*/
for (var i = 1; i <= 16; i++) {
	elem = $("[elemresp=" + i + "]");
	elem.css("background-image","url('" + $("[proj="+i+"]").attr("src")+ "')")
}