$('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


var $about = $('#dv-about-us');

$about.waypoint(function (direction) {
	if (direction == 'down') {
		$('#dv-menu').addClass('scrolled-active');
		$('#dv-menu').removeClass('scrolled-inactive');
	}
	else{
		$('#dv-menu').removeClass('scrolled-active');
		$('#dv-menu').addClass('scrolled-inactive');
	}
});
