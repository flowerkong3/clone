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

	//index | 트레일러 모달
	const trailerModal = function() {
	
		$(".trailer-btn").on("click",function(){
			$(".trailer-modal").addClass("is-show");
			$(".home .header").css("display","none");
			$(".home .top").css("display","none");
			$("body").css("overflow","hidden");
			$(".youtube-url").attr('src', "https://www.youtube.com/embed/wm8bpujQjKM?autoplay=1");
		})
		$(".trailer-modal .btn-close").on("click",function(){
			$(".trailer-modal").removeClass("is-show");
			$(".home .header").css("display","block");
			$(".home .top").css("display","block");
			$("body").css("overflow","auto");
			$(".youtube-url").attr('src', "https://www.youtube.com/embed/wm8bpujQjKM");
		})
	}

	// Session Page | Login Popup
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

	// Session Page | 필터
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
		trailerModal();
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
	let scrollLtrBar = document.querySelector(".bar");
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
		
		// Ltr Text
		if(scroll > invite1.clientHeight * 1.3) {
			scrollLtr.style.transform = `translateX(${per}%)`;
			// scrollLtrBar.style.width = (per * 2)  + "%";
			// scrollLtrBar.classList.add("is-show");
		}else {
			scrollLtr.style.transform = `translateX(0)`;
			// scrollLtrBar.style.width = 0;
			// scrollLtrBar.classList.remove("is-show");
		}
		// Ltr Bar
		if(scroll > invite1.clientHeight * 1.5) {
			scrollLtrBar.style.width = (per * 2)  + "%";
			scrollLtrBar.classList.add("is-show");
		}else {
			scrollLtrBar.style.width = 0;
			scrollLtrBar.classList.remove("is-show");
		}

		// trailer Video
		if(scroll > invite1.clientHeight + invite2.clientHeight + 1000) {
			invite3.classList.add("is-active");
			invite2.style.display = "none";
		}else {
			invite3.classList.remove("is-active");
			invite2.style.display = "block"
		}
	})
}



tabType1();
homeAni();



// 링크복사
function copyUrl(){
	var copyText = document.createElement("textarea");
	document.body.appendChild(copyText);
	copyText.value = 'https://inflearn.com/conf/infcon-2023';
	copyText.select();
	document.execCommand('copy');
	document.body.removeChild(copyText);
	// alert(copyText.value + '\n이메일 주소 복사 완료!');
	alert(copyText.value + ' 링크 복사 완료!');
};

// 스크롤다운 fadeDown 애니메이션
AOS.init();
