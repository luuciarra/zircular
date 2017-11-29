/*MENU SCRIPT*/
		$(".uno").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		  $(".uno").removeClass("animated")  
		  $(".dos").removeClass("animated")  
		})

		$(".close-button").mouseenter(function(){
		  $(".uno").addClass("animated");        
		  $(".dos").addClass("animated");        
		})

		$(".close-button").click(function(){
			$(".menuShow").css("opacity","0");
			$(".menuShow").css("z-index","0");
		})

		$(".logo-menu-container-button").click(function(){
			$(".main-menu").css("z-index","150");
			$(".main-menu").css("opacity","1");
			$(".logo-menu-container-button").css("cursor","auto");
			if ($('.main-menu').css('opacity') == '0') {
				$(".menu-port-solid").addClass("animated"); 
				$(".solid-animation").addClass("animated");	
				$(".menu-text-transition").css("opacity","1");
			}
		})

		$(".close-button").click(function(){
			$(".main-menu").css("opacity","0");
			$(".main-menu").css("z-index","0");
			$(".logo-menu-container-button").css("cursor","pointer");
		})


		$(".solid-animation").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		  $(".solid-animation").removeClass("animated")  
		})
		$(".menu-port-solid").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		  $(".menu-port-solid").removeClass("animated");
		})