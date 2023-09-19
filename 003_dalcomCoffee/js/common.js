
// floating
function btnClose(e){
	const floating = document.querySelector(".floating")
	event.preventDefault();
	floating.style.display="none"
}


(function (win, $){
	'use strict';

	// MegaMenu
	const megaMenuFunc = function(){
		const $gnbItem = $(".gnb__item");
		const $gnbLink = $(".gnb__link");
		const $megaMenu = $(".mega-menu");
		const $megaMenuBg = $(".mega-menu-bg");
		const $megaMenuOut = $(".mega-menu-out");
		$gnbItem.on("mouseover",function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			$megaMenu.addClass("active");
			$megaMenuBg.addClass("active");
		});
		$megaMenuOut.on("mouseover",function(){
			$gnbItem.removeClass("active");
			$megaMenu.removeClass("active");
			$megaMenuBg.removeClass("active");
		});
	}
	megaMenuFunc();

})(window, window.jQuery);



// AOS
AOS.init();
