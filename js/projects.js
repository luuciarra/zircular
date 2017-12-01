/*ON CLICK de portfolio*/
$(".item").click(function(){
	var obj = $(this);

	// var classes = obj.attr("class").split(" ");
	// var attr = classes[classes.length-1];
	// attr = attr.substr(0,attr.length-3);
	var attr = obj.css("background-color");


	var main = $('.port-main-title', $( this ) ).html ();
	var subtitle = $('.port-main-subtitle', $( this ) ).html ();

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
$("[elem=1]").mouseover({url:"img2.jpg"}, changeImage);
$("[elem=2]").mouseover({url:"img3.jpg"}, changeImage);
$("[elem=3]").mouseover({url:"img1.jpg"}, changeImage);
$("[elem=4]").mouseover({url:"img8.jpg"}, changeImage);
$("[elem=5]").mouseover({url:"img4.jpg"}, changeImage);
$("[elem=6]").mouseover({url:"img7.jpg"}, changeImage);
$("[elem=7]").mouseover({url:"img2.jpg"}, changeImage);
$("[elem=8]").mouseover({url:"img5.jpg"}, changeImage);
$("[elem=9]").mouseover({url:"img1.jpg"}, changeImage);
$("[elem=10]").mouseover({url:"img2.jpg"}, changeImage);
$("[elem=11]").mouseover({url:"img5.jpg"}, changeImage);
$("[elem=12]").mouseover({url:"img6.jpg"}, changeImage);
$("[elem=13]").mouseover({url:"img8.jpg"}, changeImage);
$("[elem=14]").mouseover({url:"img1.jpg"}, changeImage);
$("[elem=15]").mouseover({url:"img3.jpg"}, changeImage);
$("[elem=16]").mouseover({url:"img4.jpg"}, changeImage);

function changeImage(param){
	$('.main-container').css("background-image", "url(images/"+param.data.url+")");  
}