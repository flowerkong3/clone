// 제이쿼리
(function (win, $) {
	'use strict';

	// FAQ | Accordion Type1
	const accType1 = function() {
		let $accBtn = $(".acc__btn");
		let $accDesc = $(".acc__desc");
		$accBtn.on("click",function(){
			$(this).toggleClass("is-active")
			$(this).next($accDesc).slideToggle(200);
			// $(this).parent().siblings().children(".acc__btn").removeClass("is-active");
			// $(this).parent().siblings().children(".acc__desc").slideUp();
		});
	};

	// Session | Login Popup
	const loginPop = function() {
		$(".btn-loginPop").on("click",function(){
			$(".pop-login").css("display","block")
			$(".dimmed").css("display","block");
			$("body").css("overflow","hidden");
		})

		$(".btn-close").on("click",function(){
			$(".dimmed").css("display","none");
			$(".pop-login").css("display","none");
			$("body").css("overflow","auto");
		})
	};

	// Session | 필터
			// 버튼 show hide
	const filterTab = function() {
		$(".tab-type1 li").on("click",function(){
			if($(this).hasClass("first") == true){
				$(".btn-filter").css("display","block");
			}else {
				$(".btn-filter").css("display","none");
			}
		})
	};

			// 팝업
	const filterPop = function() {
		$(".btn-filter").on("click",function(){
			$(".pop-filter").css("display","block");
			$(".dimmed").css("display","block");
			$("body").css("overflow","hidden");
		})
	};
			// 팝업닫기
	const modalClose = function() {
		$(".modal-close").on("click",function(){
			$(".pop-modal").css("display","none");
			$(".dimmed").css("display","none");
			$("body").css("overflow","auto");
		})
	};
			// 버튼체크
	const filterChk = function() {
		$(".pop-filter .list button").on("click",function(){
			$(this).addClass("is-chk");
		});
	};
			// 선택초기화
	const filterReset = function() {
		$(".btn-reset").on("click",function(){
			$(".pop-filter .list button").removeClass("is-chk");
		})
	};

	// const homeAni2 = function() {
	// 	$(window).scroll(function(){
	// 		var scrT = $(window).scrollTop();
	// 		// console.log(scrT); //스크롤 값 확인용
	// 		if(scrT == $(document).height() - $(window).height()){
	// 			//스크롤이 끝에 도달했을때 실행될 이벤트
	// 			$(".invite1").addClass(".is-active");
	// 		} else {
	// 			//아닐때 이벤트
	// 		}
	// 	})
		 
	// }


	$(function () {
		accType1();
		loginPop();
		filterTab();
		filterPop();
		modalClose();
		filterChk();
		filterReset();
		// homeAni2();
	})


})(window, window.jQuery);
		


// Tab Type1
const tabType1 = function() {
	let tabMenu = document.querySelectorAll(".tab-type1 li");
	let tabContent = document.querySelectorAll(".tab-cont");
	tabMenu.forEach((tab, idx) => {
		tab.addEventListener("click", (e) => {
			e.preventDefault();
			tabMenu.forEach((menu) => {
				menu.classList.remove("is-active");
			});
			tabContent.forEach((content) => {
				content.classList.remove("is-show");
			});
			tabMenu[idx].classList.add("is-active");
			tabContent[idx].classList.add("is-show");
		});

	})
};

// Home ani
const homeAni = function() {
	let invite = document.querySelector(".section-invite");
	let invite1 = document.querySelector(".invite1");
	let invite2 = document.querySelector(".invite2");
	let invite3 = document.querySelector(".invite3");
	let inTroduce = document.querySelector(".section-itroduce");
	let invite1Tit = document.querySelector(".invite1 .title");
	let inviteM = document.querySelector(".invite1 .message");
	let inviteM1 = document.querySelector(".invite1 .m1");
	let inviteM2 = document.querySelector(".invite1 .m2");
	let inviteM3 = document.querySelector(".invite1 .m3");

	let scrollLtr = document.querySelector(".scroll-ltr");
	let documentHeight = 0;

	let scroll = 0;
	window.addEventListener("scroll", () => {
		scroll = window.scrollY;
		documentHeight = document.body.scrollHeight - window.innerHeight;
		per = Math.round((scroll / documentHeight) * 100);

		

		// console.log(scroll);
		// console.log(invite1.clientHeight + invite2.clientHeight);
		if(scroll > invite1.offsetTop / 2){
			invite1Tit.classList.add("is-active");
			inviteM.classList.add("is-active");
		}else {
			invite1Tit.classList.remove("is-active");
			inviteM.classList.remove("is-active");
		};
		if(scroll > invite1.offsetTop){
			inviteM1.classList.add("is-active");
			inviteM2.classList.add("is-active");
			inviteM3.classList.add("is-active");
		}else {
			inviteM1.classList.remove("is-active");
			inviteM2.classList.remove("is-active");
			inviteM3.classList.remove("is-active");
		};
		if(scroll > invite1.clientHeight) {
			invite2.classList.add("is-active");
		}else {
			invite2.classList.remove("is-active");
		};
		// Text Move Ltr 
		if(scroll > invite1.clientHeight + 1500) {
			scrollLtr.style.transform = `translateX(${per * 1.1}%)`;
		}else {
			scrollLtr.style.transform = `translateX(0)`;
		}
		if(scroll > invite1.clientHeight + invite2.clientHeight) {
			invite3.classList.add("is-active");
		}else {
			invite3.classList.remove("is-active");
		}
	})
}



tabType1();
homeAni();