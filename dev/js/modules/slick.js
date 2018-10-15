
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
  autoplay: true
});

export {
  sliderWrapper,
  sliderMultipleItems
}
