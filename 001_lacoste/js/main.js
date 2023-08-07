$(document).ready(function(){

	// a태그 클릭시 새로고침 방지
	$("a").click(function(e) {
		e.preventDefault();
	});

	// 메가메뉴
	$(".depth1__item").on("click", function(){
		$(this).toggleClass("active");
		$(this).siblings().removeClass("active");
		
		if($(this).hasClass("active")){
			$(".visual").addClass("dim");
			$("body").css("overflow","hidden");
			$(".btn--close-menu").addClass("active");
			$(".header__inner").addClass("long");
		}else {
			$(".visual").removeClass("dim");
			$("body").css("overflow","auto");
			$(".btn--close-menu").removeClass("active");
			$(".header__inner").removeClass("long");
		}
		// $(".visual").toggleClass("active");
	});

	// 메가메뉴 닫기 버튼
	$(".btn--close-menu").on("click",function(){
		$(this).toggleClass("active");
		$(".depth1__item").removeClass("active");
		$(".visual").removeClass("dim");
		$("body").css("overflow","auto");
		$(".header__inner").removeClass("long");
	})

	// 스토어메뉴 호버하면 이미지 나타남
		const $storeItem = $(".store-item a");
		const $storeThumb= $(".store-thumb");
		$storeItem.on("mouseover",function(){
			$storeThumb.removeClass("active");
			$(this).siblings().addClass("active");
		});
		$storeItem.on("mouseleave",function(){
			$storeThumb.removeClass("active");
			// $(this).addClass("active");
		});
	// const $storeItem = $(".store-item");
	// const $storeThumb = $(".store-thumb");
	// $storeItem.on("mouseover",function(){
	// 	$(this).parents().siblings(".store-thumb").addClass("active");
	// });


	// Mobile Menu
	$(".hamburger").on("click",function(){
		$(this).toggleClass("active");
		$(".header").addClass("--mo");
		if($(this).hasClass("active")){
			$(".header").addClass("--mo");
		}else {
			$(".header").removeClass("--mo");
		}
		
	});

	// 검색하기
	const $search = $(".header__search-bar .search");
	const $searchBtnClose = $(".header__search-bar .btn--close-search");
	const $searchMenu = $(".header__search-bar-menu");
	$search.on("click",function(){
		$("body").addClass("active");
		$search.addClass("active");
		$searchBtnClose.addClass("active");
		$searchMenu.addClass("active");
	});
	$searchBtnClose.on("click",function(){
		$("body").removeClass("active");
		$search.removeClass("active");
		$searchBtnClose.removeClass("active");
		$searchMenu.removeClass("active");
	});

});



// 스토어 메뉴 이미지 마우스무브
window.onload = () => {
	let x = 0, 
			y = 0;
	let targetX = 0, 
			targetY = 0;
	const speed = 0.09;
	const storeItemAll = document.querySelectorAll(".store-item a");
	const storeThumbAll = document.querySelectorAll(".store-thumb");
	const storeSection = document.querySelector(".store-section");

	storeItemAll.forEach((storeItem) => {

		// 스토어 메뉴에 마우스 hover
		storeItem.addEventListener("mouseenter", () => {
			storeThumbAll.forEach((storeThumb) => {
				// storeThumb.style.transform = "scale(1.1)";

				// 스토어 이미지 move
				window.addEventListener("mousemove", (e) => {
					// x = e.pageX;
					// y = e.pageY;
					x = e.pageX - storeSection.clientWidth / 4;
					y = e.pageY - storeSection.clientHeight / 2;
					// x = e.pageX - window.innerWidth / 2;
					// y = e.pageY;
				});
			
				const loop = () => {
					targetX += (x - targetX) * speed;
					targetY += (x - targetY) * speed;
			
					storeThumb.style.transform = `translate(${targetX/2}px, ${targetY/2}px)`;
					window.requestAnimationFrame(loop);
				};
				loop();

			});
		});


	});

}

// 검색하기
// window.onload = () => {
// 	// searchBarFunc();
// 	//header search-bar
// 	// function searchBarFunc(){
		
// 	// };

	
// 	console.log(body)
	
// 	let search = document.querySelector(".header__search-bar .search");
// 	let searchBtnClose = document.querySelector(".header__search-bar .btn--close-search");
// 	let searchMenu = document.querySelector(".header__search-bar-menu");
// 	let body = document.querySelector("body");
// 	search.addEventListener("click", () => {
// 		body.classList.add("active");
// 		search.classList.add("active");
// 		searchBtnClose.classList.add("active");
// 		searchMenu.classList.add("active");
// 	});

// 	searchBtnClose.addEventListener("click", () => {
// 		body.classList.remove("active");
// 		search.classList.remove("active");
// 		searchBtnClose.classList.remove("active");
// 		searchMenu.classList.remove("active");
// 	});
// }

// Video section
window.onload = () => {
	const sectionAll = document.querySelector(".section");
	const section2 = document.querySelector(".section-2");
	const section3 = document.querySelector(".section-3");
	const section4 = document.querySelector(".section-4");
	const section5 = document.querySelector(".section-5");
	const section2Title = document.querySelector(".section-2 .title");
	const section3Title = document.querySelector(".section-3 .title");
	const section4Title = document.querySelector(".section-4 .title");
	const section4Menu = document.querySelector(".section-4 .store-menu");
	const section5Title = document.querySelector(".section-5 .title");
	const section5LeftAll = document.querySelectorAll(".section-5 .left");
	const section5RightAll = document.querySelectorAll(".section-5 .right");
	const flagAll = document.querySelectorAll(".section-2 .flag-group li");
	// let fade = document.querySelectorAll(".fade");
	let scroll = 0;
	window.addEventListener("scroll",() => {
		scroll = window.scrollY;
		if(scroll > section2.offsetTop /2){
			flagAll.forEach((flag) => {
				flag.classList.add("fadeIn")
			});
			section2Title.classList.add("fadeIn")
			// fadeAll.forEach((fade1) => {
			// 	fade1.classList.add("fadeIn")
			// })
		}else {
			flagAll.forEach((flags) => {
				flags.classList.remove("fadeIn")
			});
			section2Title.classList.remove("fadeIn")
			// fadeAll.forEach((fade2) => {
			// 	fade2.classList.remove("fadeIn")
			// })
		};
		if(scroll > section3.offsetTop / 1.5){
			section3Title.classList.add("fadeIn")
		}else {
			section3Title.classList.remove("fadeIn")
		};

		if(scroll > section4.offsetTop / 1.2){
			section4Title.classList.add("fadeIn");
			section4Menu.classList.add("fadeIn");

		}else {
			section4Title.classList.remove("fadeIn")
			section4Menu.classList.remove("fadeIn");
		};

		if(scroll > section5.offsetTop / 1.2){
			section5Title.classList.add("fadeIn");
			section5LeftAll.forEach((left) => {
				left.classList.add("fadeIn")
			});
			section5RightAll.forEach((right) => {
				right.classList.add("fadeIn")
			});
		}else {
			section5Title.classList.remove("fadeIn");
			section5LeftAll.forEach((lefts) => {
				lefts.classList.remove("fadeIn")
			});
			section5RightAll.forEach((rights) => {
				rights.classList.remove("fadeIn")
			});
		};
	});
}






// btnScrollDown
function btnScrollDown(){
	const section2 = document.querySelector(".section-2");
	const headerH = document.querySelector(".header").clientHeight;
	window.scrollTo({
		top:section2.offsetTop - headerH, 
		left:0, 
		behavior:'smooth'
	});

}

// Lang Popup
function langPop(){
	let langPop = document.querySelector(".lang-popup");
	let body = document.querySelector("body");
	let dimmed = document.querySelector(".dimmed");
	langPop.classList.toggle("active");
	body.classList.add("active");
	dimmed.classList.add("active");
}
function btnClosePop(){
	let langPop = document.querySelector(".lang-popup");
	let body = document.querySelector("body");
	let dimmed = document.querySelector(".dimmed");
	langPop.classList.remove("active");
	body.classList.remove("active");
	dimmed.classList.remove("active");
}






	// console.log(storeThumb)





// let storeItem = document.querySelector(".store-item");
// console.log(storeItem)
// for(var i = 0; i < storeItem.length; i++){
// 	storeItem[i].addEventListener("mouseover",() => {
// 		this.classList.add("active");
// 	})
// }



