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
        // $('.index-grid').bind('touchstart',touch_start);
        // $('.index-grid').bind('touchmove',touch_move);
        // $('.index-grid').bind('touchend',slide_end);   
    }else{
        setTimeout(function(){
            $(".text-1").css("opacity","1");
            $(".slide-right").addClass("animated");
            $(".slide-left").addClass("animated");
        }, 200);    
    }
};

// $(window).resize(function() {
//     console.log($(".active"));
//     $(".active").css("left",-($(window).width()));
// });

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
    
    $target = $("[slide="+next+"]");
    $other = $target.siblings('.active');
    $(".slide-right").addClass("animated");
    $(".slide-left").addClass("animated");

    if($other.attr("slide") == cantSlide){
        $(".button-projects").css("opacity","0");
    }
    /*Elimina el activo al actual*/
    $other.removeClass('active').animate({
        left: window.innerWidth
    }, 880, "linear", function() {
        $(".text-"+numActive).css("opacity","0");
    });

    $(".item-"+numActive).removeClass("active-item");
    $(".item-"+next).addClass("active-item");
    /*agrega el activo al próximo*/
    $target.addClass('active').show().css({
        display: "block",
        left: -($target.width())
    }).animate({
        left: 0
    }, 800, "linear", function() {
        /*SHOW BUTTON VER PROJ DESTACADOS*/
        if($target.attr("slide") == cantSlide){
            $(".button-projects").css("opacity","1");
        }
        /*SHOW TEXT*/
        $(".text-"+next).css({
            left: -$( window ).width()
        }).animate({
            opacity: 1,
            left: 0
        }, 300)  
        /*Prevent click when moving*/
        $(".index-slide").removeClass("onMove")
    });  
})

$(".slide-right").click(function(){
    if($(".index-slide").hasClass("onMove")) {
        return
    }else{
        $(".index-slide").addClass("onMove");
    }   

    numActive = parseInt($(".active").attr("slide"));
    next = numActive == cantSlide ? 1 : numActive+1;
    $target = $("[slide="+next+"]");
    $other = $target.siblings('.active');
    
    $(".slide-right").addClass("animated");
    $(".slide-left").addClass("animated");
    if($other.attr("slide") == cantSlide){
        $(".button-projects").css("opacity","0");
    }

    /*Elimina el activo al actual*/
    $other.removeClass('active').animate({
        left: -window.innerWidth
    }, 880, "linear", function() {
        $(".text-"+numActive).css("opacity","0");    
    });

    $(".item-"+numActive).removeClass("active-item");
    $(".item-"+next).addClass("active-item");
     /*agrega el activo al próximo*/
    $target.addClass('active').show().css({
        display: "block",
        left: ($target.width())
    }).animate({
        left: 0
    }, 800, "linear", function() {
        /*SHOW BUTTON VER PROJ DESTACADOS*/
        if($target.attr("slide") == cantSlide){
            $(".button-projects").css("opacity","1");
        }
        $(".text-"+next).css({
            left: -($(this).width())
        }).animate({
            opacity: 1,
            left: 0
        }, 300)  
         /*Prevent click when moving*/
        $(".index-slide").removeClass("onMove")
    });
    
    
})

$(".slide-left").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(".slide-left").removeClass("animated")  
})

$(".slide-right").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(".slide-right").removeClass("animated")  
})

// var mouseDown        =    false;
// var beginTouchDown        =    0;
// var target = $(".index-grid");

// function touch_start(e){
//     console.log(" START");
//     var parent = $(e.currentTarget);
//     beginTouchDown = parseInt(e.originalEvent.touches[0].pageX,10)-(target.offset().left - parent.offset().left);
// }

// function touch_move (e){
//     console.log(" MOVE");
//     e.preventDefault();
//     var parent         =    $(e.currentTarget);
//     var parentOffset   =    parent.offset().left;
//     var currentLeft    =    0;
//     var toMove         =    parseInt(e.originalEvent.touches[0].pageX,10)-beginTouchDown+currentLeft;
    
//     if(!(toMove+parentOffset+target.width() > parentOffset+parent.width())&&(toMove+parentOffset > parentOffset)){
//         console.log("WAEF");
//         target.css({'left':toMove+"px"});
//         check_place(target);
//     }else{
//         console.log("asef");
//     }
// }

// function slide_end(){
//     console.log(" END");
// }