$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
		items: 3,
		navigation : true,
    	navigationText : [" "," "],
	
		// 5 блоков на компьютерах (экран от 1400px до 901px)
		itemsDesktop:      [1400, 3],
		
		// 3 блока на маленьких компьютерах (экран от 900px до 601px)
		itemsDesktopSmall: [900, 3],
		
		// 2 элемента на планшетах (экран от 600 до 480 пикселей)
		itemsTablet:       [770, 1],
		
		// Настройки для телефона отключены, в этом случае будут
		// использованы настройки планшета
		itemsMobile:       [768, 1],
	});
});



	/* ---------------------------------------------------------------------- */
	/*	filter portfolio toggle
	/* ---------------------------------------------------------------------- */

	var togButton = $('a.filter-toggle'),
		filterList = $('ul.filter');

	togButton.on('click', function(event){
		event.preventDefault();
		filterList.slideToggle();
	});

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

	} catch(err) {

	}



$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('alt');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="img/big-img'+i_path+'.jpg"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});


$(document).ready(function(){
	$('#button-popup1').click(function(){
		$('#form-popup1').show();
		$('#form-popup1').css('display', 'flex');
	});
	$('.close-popup').click(function(){
		$('#form-popup1').hide();
	});
});

$(document).ready(function(){
	$('#button-popup2').click(function(){
		$('#form-popup2').show();
		$('#form-popup2').css('display', 'flex');
	});
	$('.close-popup').click(function(){
		$('#form-popup2').hide();
	});
});

$(document).ready(function(){
	$('#button-popup3').click(function(){
		$('#form-popup3').show();
		$('#form-popup3').css('display', 'flex');
	});
	$('.close-popup').click(function(){
		$('#form-popup3').hide();
	});
});

$(document).ready(function(){
	$('#button-popup3').click(function(){
		$('#form-popup3').show();
		$('#form-popup3').css('display', 'flex');
	});
	$('.close-popup').click(function(){
		$('#form-popup3').hide();
	});
});

$(document).ready(function(){
	$('.zoom-fr1').click(function(){
		$('.open1').show();
		$('.open1').css('display', 'flex');
	});
	$('.close-fotorama').click(function(){
		$('.open1').hide();
	});
});

$(document).ready(function(){
	$('.zoom-fr2').click(function(){
		$('.open2').show();
		$('.open2').css('display', 'flex');
	});
	$('.close-fotorama').click(function(){
		$('.open2').hide();
	});
});

$(document).ready(function(){
	$('.zoom-fr3').click(function(){
		$('.open3').show();
		$('.open3').css('display', 'flex');
	});
	$('.close-fotorama').click(function(){
		$('.open3').hide();
	});
});

$(document).ready(function(){
	$('.zoom-fr4').click(function(){
		$('.open4').show();
		$('.open4').css('display', 'flex');
	});
	$('.close-fotorama').click(function(){
		$('.open4').hide();
	});
});

$(document).ready(function(){
	$('.zoom-fr5').click(function(){
		$('.open5').show();
		$('.open5').css('display', 'flex');
	});
	$('.close-fotorama').click(function(){
		$('.open5').hide();
	});
});











