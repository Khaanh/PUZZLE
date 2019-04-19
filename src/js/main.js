$(document).ready(initPage);
function initPage(){
	ImgTobg();
	pageScrollTop();
	counter();
	mobileMenu();
}

function ImgTobg() {
	$('.img-to-bg').each(function() {
		if ($(this).find('img').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')');
		}
	});
}
function pageScrollTop() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.btn-page-up').fadeIn();
		} else {
			$('.btn-page-up').fadeOut();
		}
	});
	$('.btn-page-up').click(function(e){
		var offsetTop = $('body').offset().top;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 500);
		e.preventDefault();
	});
}
function counter(){
	var time = 2,
		cc = 1;
	$(window).scroll(function(){
		$('#counter').each(function(){
			var
			cPos = $(this).offset().top,
			topWindow = $(window).scrollTop();
			if (cPos < topWindow + 750) {
				if (cc < 2) {
					$('.results__row-number').addClass('active');
					$('.results').addClass('show');
					$('div').each(function(){
						var 
						i = 1,
						num = $(this).data('num'),
						step = 1000 * time / num,
						that = $(this),
						int = setInterval(function(){
							if (i <= num) {
								that.html(i);
							} else {
								cc = cc + 2;
								clearInterval(int);
							}
							i++;
						}, step)
					});
				}
			}
		});
	})
}

function showBlock() {
	$(window).scroll(function(){
		var show = $(window);
		if ( show.scrollTop() > 300) {
			$('.first').addClass('show');
			if (show.scrollTop() > 900) {
				$('.seconde').addClass('show');
			}
		}
	})
}showBlock();

function mobileMenu(){
	$('.burger').on('click',function(){
		$(this).toggleClass('menu-open');
		$('.header__mobile').toggleClass('show-menu');
	})
}

