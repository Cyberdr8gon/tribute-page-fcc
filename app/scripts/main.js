jQuery(document).ready(function($) {

   $('.scroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    let width = 0;
    let height = 0;
  if(window.screen.width > 560) {
    width = 560;
    height = 315;
  } else if (window.screen.width > 380) {
    width = 380;
    height = 214;
  } else {
    width = 300;
    height = 168.75;
  }

  $('.video-container').html(`
       <iframe width="${width}" 
               height="${height}" 
               src="https://www.youtube-nocookie.com/embed/o4SGkB_8fFs" 
               frameborder="0" 
               allowfullscreen>
               </iframe>

       `)

  $('#copyright-current-year').html(new Date().getFullYear());
  
});


