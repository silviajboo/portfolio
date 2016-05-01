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



// $('#dv-about-us').waypoint(function(direction) {
//   $("#dv-menu").addClass("scrolled");
//   }, {
//     offset: 116 
// });

// $('#dv-container').waypoint(function(direction) {
//   $("#dv-menu").removeClass("scrolled");
//   }, {
//     offset: -316 
// });
