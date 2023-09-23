
$(function() {
	$(".header").mouseenter(function() {
		// background-color, font-color hover
 		$(this).css("background-color","#fff").css("transition","0.3s");
 		$(this).children().css("color","#000");
		// logo hover
		$('.logo').children().attr("src","/img/header/top_logo_hover.png")
		// right menu hover
		$('.down_bar').attr("src","/img/header/downbar_hover.png")
		$('.login').attr("src","/img/header/ico_top_login_hover.png")
		$('.search').attr("src","/img/header/ico_top_search_hover.png")
		$('.allmenu').attr("src","/img/header/ico_top_allmenu_hover.png")
		// .header bordor-bottom hover
		$(this).css("border-bottom","1px solid #e3e3e3")
 	}).mouseleave(function() {
		// background-color, font-color hover
		$(this).css("background-color","transparent");
 		$(this).children().css("color","#fff");
		// logo hover
		$('.logo').children().attr("src","/img/header/top_logo.png")
		// right menu hover
		$('.down_bar').attr("src","/img/header/downbar.png")
		$('.login').attr("src","/img/header/ico_top_login.png")
		$('.search').attr("src","/img/header/ico_top_search.png")
		$('.allmenu').attr("src","/img/header/ico_top_allmenu.png")
		// .header bordor-bottom hover
		$(this).css("border-bottom","1px solid rgba(255, 255, 255, 0.3)")
	});


	$(".gnb ul li").mouseenter(function() {
		$(this).find("div").stop().slideDown();
	}).mouseleave(function() {
		$(this).find("div:visible").stop().slideUp(50);
	});
});