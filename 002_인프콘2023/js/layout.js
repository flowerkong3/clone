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
		console.log(scroll)
	})
}

scrollHeader()