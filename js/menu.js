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
			var isMobile = window.matchMedia("only screen and (max-width: 640px)");

		    if(isMobile.matches){
		        $(".main-menu-responsive").css("z-index","150");
				$(".main-menu-responsive").css("opacity","1");
				/*Animate list of menu*/
				if ($('.main-menu-responsive').css('opacity') == '0') {
					var list = $(".menu-resp-list").children();
					$.each(list,function(i){
						var stallFor = 70 * parseInt(i); // 300 is the gap between delays, tweek it based on visual preference
				        $(this).delay(stallFor).animate({ 'left': "20%" }, function () {
				            $(this).animate({ 'left': "0", 'opacity':"1" });
				        });
					})
				}	
		    }else{
		      	$(".main-menu").css("z-index","150");
				$(".main-menu").css("opacity","1");
				if ($('.main-menu').css('opacity') == '0') {
					$(".menu-port-solid").addClass("animated"); 
					$(".solid-animation").addClass("animated");	
					$(".menu-text-transition").css("opacity","1");
				} 
		    }
		    $(".logo-menu-container-button").css("cursor","auto");
		    
		})

		// $(".logo-menu-container-button").click(function(){
		// 	$(".main-menu").css("z-index","150");
		// 	$(".main-menu").css("opacity","1");
		// 	$(".logo-menu-container-button").css("cursor","auto");
		// 	if ($('.main-menu').css('opacity') == '0') {
		// 		$(".menu-port-solid").addClass("animated"); 
		// 		$(".solid-animation").addClass("animated");	
		// 		$(".menu-text-transition").css("opacity","1");
		// 	}
		// })

		$(".close-button").click(function(){
			$(".main-menu").css("opacity","0");
			$(".main-menu").css("z-index","0");
			$(".main-menu-responsive").css("opacity","0");
			$(".main-menu-responsive").css("z-index","0");
			$(".menu-resp-list li").css("opacity","0");
			$(".logo-menu-container-button").css("cursor","pointer");
		})


		$(".solid-animation").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		  $(".solid-animation").removeClass("animated")  
		})
		$(".menu-port-solid").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		  $(".menu-port-solid").removeClass("animated");
		})