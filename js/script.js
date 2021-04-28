
$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html,body').animate({
  scrollTop: elemenTujuan.offset().top - 5
 },1250, 'easeInOutExpo');

 e.preventDefault();
});






// untuk parallax

// about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


$(window).scroll(function() {

		var wScroll = $(this).scrollTop();

		// jumbotron
		$('.jumbotron img').css({
				'transform' : 'translate(0px, '+ wScroll/5 +'%)'
		});

		$('.jumbotron h1').css({
				'transform' : 'translate(0px, '+ wScroll/2 +'%)'
		});

		$('.jumbotron p').css({
				'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
		});


		// portfolio
		if(wScroll > $('.portfolio').offset().top - 200){

			$('.portfolio .thumbnail').each(function(i){
				setTimeout(function(){
					$('.portfolio .thumbnail').eq(i).addClass('muncul');
				}, 300 * (i+1));
			});			
		}

});