var listProducts = null;
var categoryActive = 1;

const MenuScroll = () => {
  $(window).on("load", function () {
    // listProducts = document.querySelectorAll('.item-product');

    scrollNav();
    // handleLoadProducts();
    // handleNavCatgories();
  });

  $(window).on('scroll', function () {
    scrollNav();
    // console.log('hola guapo');
  });

}
const scrollNav = () => {
  var nav_menu = $('#nav-menu');

  var altura = nav_menu.offset().top;

  if (altura > 85) {
    // console.log(altura);
    // console.log(altura);
    nav_menu.addClass('scroll-nav');
  } else {
    nav_menu.removeClass('scroll-nav');
  }
}

export {
  MenuScroll
}

