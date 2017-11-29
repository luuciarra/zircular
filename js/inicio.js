window.onload = function() {
    setTimeout(function(){
        $(".text-1").css("opacity","1");
    }, 800);
};

$(".slide-left").click(function(){
    cantSlide = parseInt($(".index-slide").children().length);
    numActive = parseInt($(".active").attr("slide"));
    next = numActive == 1 ?cantSlide:numActive-1
    
    $target = $("[slide="+next+"]");
    $other = $target.siblings('.active');
    
    $other.each(function(index, self) {
        var $this = $(this);
        $this.removeClass('active').animate({
            left: window.innerWidth
        }, 1000, function() {
            $(".text-"+numActive).css("opacity","0");
        });
    });

    $target.addClass('active').show().css({
        display: "block",
        left: -($target.width())
    }).animate({
        left: 0
    }, 1000, function() {
        $(".text-"+next).css({
            left: -($(this).width())
        }).animate({
            opacity: 1,
            left: 0
        }, 300)  
    });
})


$(".slide-right").click(function(){
    cantSlide = parseInt($(".index-slide").children().length);
    numActive = parseInt($(".active").attr("slide"));
    next = numActive == cantSlide ? 1 : numActive+1;
    $target = $("[slide="+next+"]");
    $other = $target.siblings('.active');
    $(".item-"+numActive).removeClass("active-item");
    $other.each(function(index, self) {
        var $this = $(this);
        $this.removeClass('active').animate({
            left: -window.innerWidth
        }, 1000, function() {
            $(".text-"+numActive).css("opacity","0");
        });
    });

     $(".item-"+next).addClass("active-item");
    $target.addClass('active').show().css({
        display: "block",
        left: ($target.width())
    }).animate({
        left: 0
    }, 1000, function() {
       
        $(".text-"+next).css({
            left: -($(this).width())
        }).animate({
            opacity: 1,
            left: 0
        }, 300)  
    });
    
})

