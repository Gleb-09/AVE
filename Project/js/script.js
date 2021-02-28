

$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
	
});
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$(document).ready(function() {
	$('.catalog__link').click(function(e){
		e.preventDefault();

		$('.catalog__link').removeClass('.catalog__link active');
		$('.catalog__block').removeClass('.catalog__block active');

		$(this).addClass('.catalog__link active');
		$($(this).attr('href')).addClass('.catalog__block active');
	});

	$('.catalog__link:first').click();
});
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__item-second,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function() {
	$('.avenue-fashion__serch2').click(function(event) {
		$('.avenue-fashion__serch.avenue-fashion__serch_header,.avenue-fashion__serch.avenue-fashion__serch_header2,.avenue-fashion__serch2').toggleClass('active');
	});
});


// const animItems = document.querySelectorAll('.anim-items');

// if(animItems.length > 0){
// 	window.addEventListener('scroll', animOnScroll);
// 	function animOnScroll(){
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStar = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStar;

// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStar;
// 			}

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
// 				animItem.classList.add('.active');
// 			}
// 			else {
// 				animItem.classList.remove('.active');
// 			}
// 		}
// 	}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop,
// 		return {top: rect.top + scrollTop, left: rect.left + scrollLeft }	
// 	}
// 	animOnScroll();
// }