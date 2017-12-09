/*MENU SCRIPT*/
	/*LOGO MENU BUTTON*/
	$(".logo-menu-container").click(function(){
		if($(this).hasClass("open")){
			//close
			$(this).removeClass("open")
			$(".main-menu").animate({
				opacity: 0
			},300,function(){
				$(".main-menu").css("display","none");
				$(".main-menu").css("z-index","0");
			})

			$(".main-menu-responsive").animate({
				opacity: 0
			}, 300, function(){
				$(".main-menu-responsive").css("display","none");
				$(".main-menu-responsive").css("z-index","0");
				$(".menu-resp-list li").css("opacity","0");
			})
		}else{
			//OPEN
			var isMobile = window.matchMedia("only screen and (max-width: 640px)");
			$(".logo-menu-container").toggleClass('open');
		    if(isMobile.matches){
		    	$(".main-menu-responsive").css("display","block");
		        $(".main-menu-responsive").css("z-index","150");
				$(".main-menu-responsive").animate({
					opacity: 1
				}, 300,function(){
					/*Animate list of menu*/
					var list = $(".menu-resp-list").children();
					$.each(list,function(i){
						var stallFor = 70 * parseInt(i); // 300 is the gap between delays, tweek it based on visual preference
				        $(this).delay(stallFor).animate({ 'left': "20%" }, function () {
				            $(this).animate({ 'left': "0", 'opacity':"1" });
				        });
					})
				})
		    }else{
		      	$(".main-menu").css("display","block");
		      	$(".main-menu").css("z-index","150");
				$(".main-menu").css("opacity","1");
				if ($('.main-menu').css('opacity') == '1') {
					$(".menu-port-solid").addClass("animated"); 
					$(".solid-animation").addClass("animated");	
					$(".menu-text-transition").css("opacity","1");
				} 
		    }
		}
	})

	$(".solid-animation").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
	  $(".solid-animation").removeClass("animated")  
	})

	$(".menu-port-solid").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
	  $(".menu-port-solid").removeClass("animated");
	})
