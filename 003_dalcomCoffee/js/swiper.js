var swiper1 = new Swiper(".mySwiper1", {
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
	effect: "fade",
	loop: true,
	pagination: {
		el: ".mySwiper1 .swiper-pagination",
		clickable: true,
	},
});

var swiper2 = new Swiper(".mySwiper2", {
	slidesPerView: 3,
	// spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".mySwiper2 .swiper-pagination",
		clickable: true,
	},
});