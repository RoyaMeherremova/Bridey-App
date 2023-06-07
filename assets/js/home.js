//slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//blog-cards-slider
$('.blog-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $("#overlay").removeClass("d-none");
    $(".side-bar").css("transform", `translateX(${0}px)`);
    $("body").css("overflow-y", 'hidden');
  })


  $(".close").on("click", function () {
    $("#overlay").addClass("d-none");
    $(".side-bar").css("transform", `translateX(${-239}px)`);
    $("body").css("overflow", 'scroll');

  })
  $("#overlay").on("click", function () {
    $("#overlay").addClass("d-none");
    $(".side-bar").css("transform", `translateX(${-239}px)`);
    $("body").css("overflow", 'scroll');
  })
});
