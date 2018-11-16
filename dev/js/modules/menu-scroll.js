

const MenuScroll = () => {
  var nav_menu = $('#nav-menu');

  var altura = nav_menu.offset().top;

  // console.log(altura);

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

