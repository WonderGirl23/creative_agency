$(document).ready(function(){
	$('.header-burger').click(function(){
		$('.header-burger, .header__nav').toggleClass('active')
	});

    $('.slider').bxSlider({
      	controls: false,
      	slideWidth: 555,
      	adaptiveHeight: true,
    });

    $('.team-box_btn').click(function(){
    	$('.team-box_hidden').fadeToggle(100);
    	$('.team-box_btn').hide();
    	$('.team-box_btn-less').show();
    });

    $('.team-box_btn-less').click(function(){
    	$('.team-box_hidden').fadeToggle(100);
    	$('.team-box_btn-less').hide();
    	$('.team-box_btn').show();
    });

    $('.owl-carousel').owlCarousel({
      	loop: true,
      	nav: true,
      	margin: 20,
      	responsive: {
      		0: {
      			items: 1
      		},
      		600: {
      			items: 2
      		},
      		1000: {
      			items:3
      		}
      	},
      	//navText: [
      	//'<div class="price-arrow price-arrow_right"></div',
      	//'<div class="price-arrow price-arrow_left"></div>'
      	//]
      });
})
