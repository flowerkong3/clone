$(document).ready(function(){

	// a태그 클릭시 새로고침 방지
	$('a').click(function(e) {
		e.preventDefault();
	});

	// 
	$('.depth1__item').on('click', function(){
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
		$('.visual').toggleClass('active');
	})
})