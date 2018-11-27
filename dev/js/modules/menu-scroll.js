

const MenuScroll = () => {
  var nav_menu = $('#nav-menu');

  var altura = nav_menu.offset().top;

  // console.log(altura);

  if (altura > 85) {
    nav_menu.addClass('scroll-nav');
  } else {
    nav_menu.removeClass('scroll-nav');
  }

  // var footer = $('footer');

  // var altura_footer = $(window).scrollTop();
  // // console.log(altura_footer);
  // console.log($('body' ).height() - footer.scrollTop());

  // if (altura_footer > ($('body' ).height() - footer.scrollTop())) {
  //   console.log('ok');
  //   // nav_menu.addClass('scroll-nav');
  // } else {
  //   // nav_menu.removeClass('scroll-nav');
  // }
}

export {
  MenuScroll
}

