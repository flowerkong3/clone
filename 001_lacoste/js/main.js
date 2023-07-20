$(document).ready(function(){

	// a태그 클릭시 새로고침 방지
	$("a").click(function(e) {
		e.preventDefault();
	});

	// 
	$(".depth1__item").on("click", function(){
		$(this).toggleClass("active");
		$(this).siblings().removeClass("active");
		$(".visual").toggleClass("active");
	});

	// Store Menu hover show img
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

});

// Store Menu hover move img
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

	// console.log(storeThumb)





// let storeItem = document.querySelector(".store-item");
// console.log(storeItem)
// for(var i = 0; i < storeItem.length; i++){
// 	storeItem[i].addEventListener("mouseover",() => {
// 		this.classList.add("active");
// 	})
// }



