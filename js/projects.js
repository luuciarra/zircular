$(document).ready(function(){ 

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if(this.responseText == 1){
				//ES MOVIL
				$('.the-slide').slick({
					prevArrow:"<span class='slick-prev'></span>",
					nextArrow:"<span class='slick-next'></span>"
			  	});
			  	
			  	/*Animación de número de slide cuando cambia de proyecto*/
			  	var number = $(".slide-number");
				$('.the-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
					nextSlide++;
					number.html(nextSlide+"/16") ;
				});

				var fileref = document.createElement("link");

				fileref.setAttribute("rel", "stylesheet");
				fileref.setAttribute("type", "text/css");
				fileref.setAttribute("href", "css/projectResponsive.css");

				document.getElementsByTagName("head")[0].appendChild(fileref);
			}		
			$('.preloader').fadeOut(1000); 
		}
	};
	xhttp.open("GET", "php/detectMobile.php", true);
	xhttp.send();
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

/*animacion on click proyecto*/
$(".proj-section-1").click(function(){
	id = $(this).parent().attr("elemresp");
	father = $( this ).parent();

	/*extrae datos propios del proyecto que se mostrarán*/
	var subtitle = $('.proj-section-2 .proj-resp-subtitle', father).html ();
	var title = $('.proj-section-2 .proj-resp-title-2', father ).html ();
	var mainColor = $(".proj-section-2", father).css("background-color");
	$(".work-info-4 div h4").text(title);
	$(".work-info-4 div h5").text(subtitle);

	/*Estilo de info de proyecto*/
	$(".work-single").css("display","block");
	$(".slick-next").css("display","none");
	$(".slick-prev").css("display","none");
	$(".proj-resp-slide-test").css("display","none");

	$(".work-common-title").css("color",mainColor);
	$(".work-info-4").css("background-color", mainColor);
	$(".project-container-responsive").css({
		position: "static",
		height: "40vh"
	})

	/*VER ESTO COMO HACERLO*/
	for(i = 1; i<=16;i++){
		if (i!=id) {
			$("[elemresp=]"+i).css("display","none");
		}
	}

	/*animación*/
	$(".slick-track").css("height","40vh");
	$(".slick-list").animate({
        height: "40vh"
    }, 1100)  

    $(".work-info-1, .work-info-2, .work-info-3, .work-info-4").css({
    	animation: "none",
    	opacity:0,
    }).animate({
    	opacity: 1,
    }, 1000)
})