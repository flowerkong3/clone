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
		}else {
			$(".visual").removeClass("dim");
			$("body").css("overflow","auto");
			$(".btn--close-menu").removeClass("active");
		}
		// $(".visual").toggleClass("active");
	});

	// 메가메뉴 닫기 버튼
	$(".btn--close-menu").on("click",function(){
		$(this).toggleClass("active");
		$(".depth1__item").removeClass("active");
		$(".visual").removeClass("dim");
		$("body").css("overflow","auto");
	})

	// Store Menu hover img show | 스토어메뉴 오버하면 메뉴 이미지 나타남
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
		
	})

});



// Store Menu hover img mousemove | 스토어 메뉴 이미지 마우스무브
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



	


	searchBarFunc();
		//header search-bar
	function searchBarFunc(){
		let search = document.querySelector(".header__search-bar .search");
		let searchBtnClose = document.querySelector(".header__search-bar .btn--close-search");
		let searchMenu = document.querySelector(".header__search-bar-menu");
		let body = document.querySelector("body");

		search.addEventListener("click", () => {
			body.classList.add("active");
			search.classList.add("active");
			searchBtnClose.classList.add("active");
			searchMenu.classList.add("active");
		});

		searchBtnClose.addEventListener("click", () => {
			body.classList.remove("active");
			search.classList.remove("active");
			searchBtnClose.classList.remove("active");
			searchMenu.classList.remove("active");
		});
	};


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



