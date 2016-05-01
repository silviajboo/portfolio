//scroll lento
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


//a través de waypoint hacemos menu más estrecho despues de pasar por about-us
var $about = $('#dv-about-us');

$about.waypoint(function (direction) {
    if (direction == 'down') {
        $('#dv-menu').addClass('scrolled-active');
        $('#dv-menu').removeClass('scrolled-inactive');
        $('.btn-anim-three').addClass('btn-anim-three-scrolled-active');
        $('.btn-anim-three').removeClass('btn-anim-three-scrolled-inactive');
        $('#dv-menu-logo-burguer').addClass('menu-logo-burguer-scrolled-active');
        $('#dv-menu-logo-burguer').removeClass('menu-logo-burguer-scrolled-inactive');
    }
    else{
        $('#dv-menu').removeClass('scrolled-active');
        $('#dv-menu').addClass('scrolled-inactive');
        $('.btn-anim-three').removeClass('btn-anim-three-scrolled-active');
        $('.btn-anim-three').addClass('btn-anim-three-scrolled-inactive');
        $('#dv-menu-logo-burguer').removeClass('menu-logo-burguer-scrolled-active');
        $('#dv-menu-logo-burguer').addClass('menu-logo-burguer-scrolled-inactive');
    }

    
});

var $projects = $('#dv-projects');
var $contact = $('#dv-contact');
var $container = $('#dv-container');

$about.waypoint(function (direction) {
    if (direction == 'down') {
        $('.li-about').addClass('selected_menu');
        $('.li-projects').removeClass('selected_menu');
        $('.li-contact').removeClass('selected_menu');
    }
    else{
        $('.li-about').removeClass('selected_menu');
        $('.li-projects').removeClass('selected_menu');
        $('.li-contact').removeClass('selected_menu');
    }

});

$projects.waypoint(function (direction) {
    if (direction == 'down') {
        $('.li-about').removeClass('selected_menu');
        $('.li-projects').addClass('selected_menu');
        $('.li-contact').removeClass('selected_menu');
    }
    else{
        $('.li-about').addClass('selected_menu');
        $('.li-projects').removeClass('selected_menu');
        $('.li-contact').removeClass('selected_menu');
    }
});

$contact.waypoint(function (direction) {
    if (direction == 'down') {
        $('.li-about').removeClass('selected_menu');
        $('.li-projects').removeClass('selected_menu');
        $('.li-contact').addClass('selected_menu');
    }
    else{
        $('.li-about').removeClass('selected_menu');
        $('.li-projects').addClass('selected_menu');
        $('.li-contact').removeClass('selected_menu');
    }
});

$container.waypoint(function (direction) {
    if (direction == 'down') {
        $('.li-about').removeClass('selected_menu');
        $('.li-projects').removeClass('selected_menu');
        $('.li-contact').removeClass('selected_menu');
    }
    else{
        $('.li-about').removeClass('selected_menu');
        $('.li-projects').removeClass('selected_menu');
        $('.li-contact').removeClass('selected_menu');
    }
});

