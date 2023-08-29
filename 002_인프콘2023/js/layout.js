// 제이쿼리
(function (win, $) {
	'use strict';

	// footer | 웹페이지 최하단시 스크롤이벤트 푸터 fixed
	// const footerFixed = function() {
	// 	var $winHeight = $(window).height();
	// 	var $docHeight = $(document).height();

	// 	$(window).scroll(function(){
	// 		if($(window).scrollTop() + $winHeight >= $docHeight) {
	// 			$(".footer").addClass("is-fixed");
	// 		}else {
	// 			$(".footer").removeClass("is-fixed");
	// 		}
	// 	})

	// };



	$(function () {
		footerFixed();
	})


})(window, window.jQuery);




// Header
const scrollHeader = function() {
	let scroll = 0;
	let header = document.querySelector(".header");
	let top = document.querySelector(".top");
	let mainVideo = document.querySelector(".home .main-video");
	

	window.addEventListener("scroll", () => {
		scroll = window.scrollY;
		// console.log(mainVideo)
		if(scroll > top.clientHeight){
			header.classList.add("is-fixed");
		}else {
			header.classList.remove("is-fixed");
		};
		if(scroll > 0){
			mainVideo.classList.add("is-active");
		}else {
			mainVideo.classList.remove("is-active");
		};
		// console.log(scroll)
	})
}

// Gnb Select Menu
const gnbSelectMenu = function() {
	let gnbSelect = document.querySelector(".gnb .select a");
	let gnbDropDown = document.querySelector(".gnb .dropdown");
	console.log(gnbSelect)

	gnbSelect.addEventListener("click", (e) => {
		e.preventDefault();
		gnbSelect.classList.toggle("is-active");
		gnbDropDown.classList.toggle("is-show")
	})
}

const hamburgerMenu = function() {
	let hamburger = document.querySelector(".hamburger-menu");
	let gnb = document.querySelector(".gnb");

	hamburger.addEventListener("click", () => {
		gnb.classList.toggle("is-show");
		hamburger.classList.toggle("is-active");
	})
}
 
scrollHeader();
gnbSelectMenu();
hamburgerMenu();