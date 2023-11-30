// let ww = $(window).outerWidth();
// var swiper1, swiper2, swiper3, swiper4, swiper5, swiper6;

// // const main = function(){
// // 	$(document).ready(function () {
// // 		init();
// // 		initMarkUpEvent();
// // 		initSwiper();
// // 	});
// // }

// function initSwiper() {
// 	if (ww < 1280 && swiper5 == undefined) {
// 			swiper5 = new Swiper(".swiper-blogging", {
// 					slidesPerView: 'auto',
// 					centeredSlides: true,
// 					spaceBetween: 15,
// 					pagination: {
// 							el: ".swiper-pagination",
// 					},
// 					observer: true,
// 					observeParents: true,
// 			});

// 	} else if (ww >= 1280 && swiper5!= undefined) {
// 			swiper5.destroy();
// 			// swiper6.destroy();
// 			swiper5 = undefined, swiper6 = undefined;
// 	}
// }

// initSwiper()


// Nav Color Change | 해당영역만큼 스크롤하면 메뉴 컬러 변경
function gnbColorChange(){
	$(window).scroll(function () {
		let gnbLink = $(".gnb__link") //li 담기
		let height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
	
		if ( height > $("#article1").offset().top - $('.header').height() - 10  ) {
			$("#menu1").addClass("active");
			gnbLink.not("#menu1").removeClass("active"); //menu1를 제외한 나머지는 클래스삭제
		} else {
			$("#menu1").removeClass("active");
		};
		if (height > $("#article2").offset().top - $('.header').height() - 10 ) {
			$("#menu2").addClass("active");
			gnbLink.not("#menu2").removeClass("active");
		} else {
			$("#menu2").removeClass("active");
		};
		if (height > $("#article3").offset().top- $('.header').height() - 10 ) {
			$("#menu3").addClass("active");
			gnbLink.not("#menu3").removeClass("active");
		} else {
			$("#menu3").removeClass("active");
		};
		if (height > $("#article4").offset().top- $('.header').height() - 10 ) {
			$("#menu4").addClass("active");
			gnbLink.not("#menu4").removeClass("active");
		} else {
			$("#menu4").removeClass("active");
		};
	});
}
gnbColorChange();

// GNB를 누르면 해당 섹션으로 이동
function scrollNav() {
	$(".gnb__link").on("click",function(){
		$(".gnb__link").removeClass("active");     
		$(this).addClass("active");
		
		$("html, body").stop().animate({
			scrollTop: $($(this).attr("href")).offset().top - $('.header').height()
		}, 0);
		return false;
	});
}
scrollNav();

// $('.gnb__link').on('click',function(e){
// 	e.preventDefault();
// 	$('.gnb__link').removeClass('active');
// 	$(this).addClass('active');
// })




// timeline swiper
  var mySwiper = new Swiper(".swiper-timeline", {
		slidesPerView: 'auto',
		centeredSlides: true,
    // autoHeight: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".timeline .swiper-button-next",
      prevEl: ".timeline .swiper-button-prev"
    },
    pagination: {
      el: ".timeline .swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });
  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });





let ww = $(window).outerWidth();
var swiper1, swiper2, swiper3, swiper4

$(document).ready(function () {
	// init();
	// initMarkUpEvent();
	initSwiper();
});

// 화면 resize
$(window).on('resize', function () {
	if(ww != $(window).outerWidth()) {
			ww = $(window).outerWidth();
			// headerHeight = $('.header').outerHeight();

			// init();
			initSwiper();
	}
});

// 1280이상은 스와이퍼 비활성화
function initSwiper(){
	if(ww < 1280  && swiper1 == undefined && swiper2 == undefined){
		swiper1 = new Swiper(".swiper-blogging", {
			// slidesPerView: 1.1,
			// effect: "fade",
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 15,
			pagination: {
				el: ".swiper-pagination",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			// breakpoints: {
			// 	// when window width is >= 1280px
			// 	1280: {
			// 			slidesPerView: 3,
			// 			spaceBetween: 85,
			// 	},
			// },
		});
		swiper2 = new Swiper(".swiper-change", {
			// slidesPerView: 1.1,
			// effect: "fade",
			slidesPerView: '1',
			// centeredSlides: true,
			spaceBetween: 0,
			pagination: {
				el: ".swiper-pagination",
				// type: "fraction",
			},
			observer: true,
			observeParents: true,
			// navigation: {
			// 	nextEl: ".swiper-button-next",
			// 	prevEl: ".swiper-button-prev",
			// },
			// breakpoints: {
			// 	// when window width is >= 1280px
			// 	1280: {
			// 			slidesPerView: 3,
			// 			spaceBetween: 85,
			// 	},
			// },
		});
	}else if (ww >= 1280){
		swiper1.destroy();
		swiper2.destroy();
		swiper1 = undefined, swiper2 = undefined;
	}
}


function accordion(){
	$('.accordion__btn').on('click',function(){
		$('.accordion__content').toggleClass('active');
		$('.accordion__btn').toggleClass('active');
	})
}

accordion();
