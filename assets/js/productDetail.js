$(document).ready(function () {
    $('.slick', '.vertical-slider').slick({
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,

        prevArrow: $('.prev'),
        nextArrow: $('.next')



    });

});