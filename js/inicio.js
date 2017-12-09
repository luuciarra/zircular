/*On open page*/
window.onload = function() {
    var isMobile = window.matchMedia("only screen and (max-width: 640px)");

    if(isMobile.matches){
        $(".text-4").css({
            left: -$( window ).width()
        }).animate({
            opacity: 1,
            left: 0
        }, 300) 
        $(".button-projects").css("opacity","1");
    }else{
        setTimeout(function(){
            $(".text-1").css("opacity","1");
        }, 200);    
    }
};

var cantSlide = parseInt($(".index-slide").children().length);
/*BOTONES SIGUIENTE Y ANTERIOR*/
$(".slide-left").click(function(){
    if($(".index-slide").hasClass("onMove")) {
        return
    }else{
        $(".index-slide").addClass("onMove");
    }

    numActive = parseInt($(".active").attr("slide"));
    next = numActive == 1 ?cantSlide:numActive-1

    animateSlides(-window.innerWidth)   
})

$(".slide-right").click(function(){
    if($(".index-slide").hasClass("onMove")) {
        return
    }else{
        $(".index-slide").addClass("onMove");
    }   

    numActive = parseInt($(".active").attr("slide"));
    next = numActive == cantSlide ? 1 : numActive+1;
    
    animateSlides(window.innerWidth)   
})

function animateSlides (move){
    $target = $("[slide="+next+"]");
    $other = $target.siblings('.active');
    
    /*Si el actual es el del botón, lo esconde*/    
    if($other.attr("slide") == cantSlide){
        $(".button-projects").css("opacity","0");
    }

    /*Elimina el activo al actual*/
    $other.removeClass('active').animate({
        left: -move
    }, 880, function() {
        $(".text-"+numActive).css("opacity","0");
    });


    /*Borde animado de los items experiencia - sostenibilidad - vanguardia*/
    $(".item-"+numActive).removeClass("active-item");
    $(".item-"+next).addClass("active-item");

    /*Animación nuevo slide*/
    $(".text-"+next).css('left', '-='+($( window ).width()))
    $target.addClass('active').show().css({
        display: "block",
        left: move
    }).animate({
        left: 0
    }, 800,showTextActive);      
}
 
function showTextActive(){
   /*SHOW BUTTON VER PROJ DESTACADOS*/
    if($target.attr("slide") == cantSlide){
        $(".button-projects").css("opacity","1");
    }
    $(".text-"+next).animate({
        opacity: 1,
        left: 0
    }, 300)  
     /*Prevent click when moving*/
    $(".index-slide").removeClass("onMove")
}