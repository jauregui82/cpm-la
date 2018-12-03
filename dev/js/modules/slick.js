
const sliderWrapper = () => {
  $(document).ready(function () {
    $('.slider-wrapper').slick({
      autoplay: true,
      dots: true,
      arrows: false,
      infinite: true,
      // speed: 300,
      slidesToShow: 1
    });
  });
}


const sliderMultipleItems = (name_elem = '.multiple-items', show = 6, autoplay = false) => {
  // console.log('slick multiple items');
  // console.log(name_elem);
  $(document).ready(function () {
    $(name_elem).slick({
      autoplay: autoplay,
      infinite: true,
      arrows: true,
      // speed: 300,
      slidesToShow: show,
      slidesToScroll: show
    });
  });
}
const sliderAbout = (name_elem = '.multiple-items', show = 1, autoplay = false) => {
  // console.log('slick multiple items');
  // console.log(name_elem);
  $(document).ready(function () {
    $(name_elem).slick({
      autoplay: autoplay,
      infinite: true,
      arrows: true,
      // speed: 300,
      slidesToShow: show,
      slidesToScroll: show
    });
  });
}
$('.slider-about').slick({
  autoplay: false,
  infinite: true,
  arrows: true,
  // speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('span.origen').on('click', function () {
  $('.slider-about').slickFilter('.origen');
  // $('.active').removeClass('active');
  // $('.origen').addClass('active');

});
$('.slide-blog').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
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
      breakpoint: 768,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// slide atun
$('.slide-product').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true
  // asNavFor: '.nav_slides',
});

$('.nav_slides').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.slide-product',
  dots: false,
  focusOnSelect: true
});

if ($('.nav-item.slick-active').length == $('.nav-item').length) {

  $('.nav-item.slick-active').removeClass('slick-active');
  $('.nav-item.slick-current').addClass('slick-active');
}

$('.nav_slides').on('click', function () {
  if ($('.nav-item.slick-active').length == $('.nav-item').length) {

    $('.nav-item.slick-active').removeClass('slick-active');
    $('.nav-item.slick-current').addClass('slick-active');
  }
});

// On before slide change match active thumbnail to current slide
$('.slide-product').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $('.nav_slides .slick-slide').removeClass('slick-active');
  $('.nav_slides .slick-slide').eq(mySlideNumber).addClass('slick-active');
  // console.log($('.nav_slides .slick-slide').eq());

});

// slide caballa
$('.slide-product2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true
  // asNavFor: '.nav_slides',
});

$('.nav_slides2').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.slide-product2',
  dots: false,
  focusOnSelect: true
});

if ($('.nav-item2.slick-active').length == $('.nav-item2').length) {

  $('.nav-item2.slick-active').removeClass('slick-active');
  $('.nav-item2.slick-current').addClass('slick-active');
}

$('.nav_slides2').on('click', function () {
  if ($('.nav-item2.slick-active').length == $('.nav-item2').length) {

    $('.nav-item2.slick-active').removeClass('slick-active');
    $('.nav-item2.slick-current').addClass('slick-active');
  }
});


// On before slide change match active thumbnail to current slide
$('.slide-product2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $('.nav_slides2 .slick-slide').removeClass('slick-active');
  $('.nav_slides2 .slick-slide').eq(mySlideNumber).addClass('slick-active');
  // console.log($('.nav_slides .slick-slide').eq());

});

// slide about
$('.slide-ab').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        // adaptiveHeight: true
      }
    }
  ]
});

$('.nav_slides_ab').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.slide-ab',
  dots: false,
  focusOnSelect: true
});

if ($('.nav-item-ab.slick-active').length == $('.nav-item-ab').length) {

  $('.nav-item-ab.slick-active').removeClass('slick-active');
  $('.nav-item-ab.slick-current').addClass('slick-active');
}

$('.nav_slides_ab').on('click', function () {
  if ($('.nav-item-ab.slick-active').length == $('.nav-item-ab').length) {

    $('.nav-item-ab.slick-active').removeClass('slick-active');
    $('.nav-item-ab.slick-current').addClass('slick-active');
  }
});


// On before slide change match active thumbnail to current slide
$('.slide-ab').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $('.nav_slides_ab .slick-slide').removeClass('slick-active');
  $('.nav_slides_ab .slick-slide').eq(mySlideNumber).addClass('slick-active');
  // console.log($('.nav_slides .slick-slide').eq());

});


// collapse icons
$('.collapse_icon').click(() => {
  if ($('.collapse_icon').attr('aria-expanded') == 'false') {
    $('.img-icon-up').attr('src', './img/icon/arrow-up.png');
    $('.nav-interno').removeClass('hide')
  } else {
    $('.img-icon-up').attr('src', './img/icon/arrow-down.png');
    $('.nav-interno').addClass('hide')
  }
});
export {
  sliderWrapper,
  sliderMultipleItems
}
