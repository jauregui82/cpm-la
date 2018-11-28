// modules
import { handleShowElement } from "./modules/general";
import toggleMenu from "./modules/menu";
import { sliderWrapper, sliderMultipleItems } from "./modules/slick";
import { MenuScroll } from "./modules/menu-scroll";
import { handlePagination, handlePaginationRecipes, handlePaginationNews } from "./modules/pagination";

import { activeItemNav, handleLoadRecipes, handleNavCategoriesRecipes } from "./modules/recipes";

// import {
//   handleItemArticle as handleItemArticleProducts,
//   handleItemMenuMap as handleItemMenuMapProducts
// } from "./modules/products";

// import { handleItemsMenu as handleItemsMenuTerms } from "./modules/terms-and-conditions";

// import AOS from 'aos';
// import 'aos/dist/aos.css';


// handlePagination();

window.handlePaginationNews = handlePaginationNews;

// window.handlePaginationRecipes = handlePaginationRecipes;
window.handleLoadRecipes = handleLoadRecipes;
window.handleNavCategoriesRecipes = handleNavCategoriesRecipes;


window.handleShowElement = handleShowElement;
window.toggleMenu = toggleMenu;
window.sliderWrapper = sliderWrapper;
window.sliderMultipleItems = sliderMultipleItems;

window.categoryRecipeActive = 1;


$(window).on('scroll', function () {
  MenuScroll();
});


// var categoryRecipeActive = 1;

// if (window.location.hash == '#1') {
//   categoryRecipeActive = 1;
//   activeItemNav();
// }
// else if (window.location.hash == '#2') {
//   categoryRecipeActive = 2;
//   activeItemNav();
// }
// else if (window.location.hash == '#3') {
//   categoryRecipeActive = 3;
//   activeItemNav();
// }



$(window).on('load', function () {
  MenuScroll();
  handleLoadRecipes();
  handleNavCategoriesRecipes();

  if (window.location.hash == '#1') {
    categoryRecipeActive = 1;
    activeItemNav();
  }
  else if (window.location.hash == '#2') {
    categoryRecipeActive = 2;
    activeItemNav();
  }
  else if (window.location.hash == '#3') {
    categoryRecipeActive = 3;
    activeItemNav();
  }




  console.log('cargo la pagina')

  // water();

  if (hideLoadin() == true) {
    setTimeout(function () {
      hideLoadin();
      $(".loading__content").hide();
      // AOS.init();
    }, 1000);
  }

});

//quitar br de kos titulos del blog
function strip_html_tags(str) {
  if ((str === null) || (str === ''))
    return false;
  else
    str = str.toString();

  $('#title_blog').text(str.replace(/<[^>]*>/g, ''));

}

// function water() {
//   var cnt = document.getElementById("count");
//   var water = document.getElementById("water");
//   var percent = cnt.innerText;
//   var interval;
//   interval = setInterval(function () {
//     percent++;
//     cnt.innerHTML = percent;
//     water.style.transform = 'translate(0' + ',' + (100 - percent) + '%)';
//     if (percent == 100) {
//       clearInterval(interval);
//       water.style.transform = 'translate(0px,100%)';
//       percent == 0;
//       cnt.innerHTML = 0;
//     }
//   }, 60);
// }

function water(e) {
  var cnt = document.getElementById("count");
  var water = document.getElementById("water");
  var percent = cnt.innerText;
  if (e == true) {
    water.style.transform = 'translate(0px,142%)';
    $('.water_wave').css('width', '600%');
    // $('.water-jar.water_wave').css('width', '600%!important');
  } else {

    var interval;
    interval = setInterval(function () {
      percent++;
      cnt.innerHTML = percent;
      water.style.transform = 'translate(0' + ',' + (100 - percent) + '%)';
      if (percent == 100) {
        clearInterval(interval);
        water.style.transform = 'translate(0px,70%)';
        percent == 0;
        cnt.innerHTML = 0;
      }
    }, 60);
  }
}

function hideLoadin() {
  $(".loading__content").attr("data-aos", "zoom-out-down")
  return true;
}

function explorador() {
  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1+
  var isChrome = !!window.chrome && !!window.chrome.webstore;

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;
  var ie = false;

  if (isIE) {
    $('#content-logo').removeClass('xs-m-auto');
    $('#logo-site').attr('src', './img/logo.png');
    ie = true;
    water(ie)

    // $('#loadig-ie').css('display', 'block');
    // alert('Internet explorer')
  } else {
    if ($(window).on('load')) {
      $('#loadig-ot').css('display', 'block');
      water(ie)
    }
  }

}
$(document).ready(function () {
  explorador();
  // water();
  strip_html_tags($('#title_blog').text());
  var vh = window.innerHeight;
  var vw = window.innerWidth;
  if (vw < 991) {
    $('.pc-version').css('display', 'none')
  }
  else if (vw > 991) {
    $('.mobile-version').css('display', 'none')
  }

  if (vw < 768) {
    $('.rm_container').removeClass('container');
  }
  else if (vw > 768) {
    if ($('.rm_container').hasClass('container') == false) {
      $('.rm_container').addClass('container');
    }
  }
  $('.filtering').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    slide: 'img'
  });

  var filtered = false;

  $('.all-filters').on('click', function () {
    $('.active').removeClass('active');
    $('.all-filters').addClass('active');
    $('.filtering').slickUnfilter();
    filtered = false;
  });

  $('.mouses-filter').on('click', function () {
    $('.filtering').slickFilter('.mouses');
    $('.active').removeClass('active');
    $('.mouses-filter').addClass('active');
    filtered = true;
  });

  $('.computers-filter').on('click', function () {
    $('.filtering').slickFilter('.computers');
    $('.active').removeClass('active');
    $('.computers-filter').addClass('active');
    filtered = true;
  });

  $('.pads-filter').on('click', function () {
    $('.filtering').slickFilter('.pads');
    $('.active').removeClass('active');
    $('.pads-filter').addClass('active');
    filtered = true;
  });

  $('.leds-filter').on('click', function () {
    $('.filtering').slickFilter('.leds');
    $('.active').removeClass('active');
    $('.leds-filter').addClass('active');
    filtered = true;
  });

  $('#btn_acepto').click(function () {
    $('#cookies_content').hide();
  });
  // tabs- Slider
  $('.cambiarpestana').click(function (ev) {
    let accion = $(this).data('accion');
    let cantidadPestana = $('.pills-tab li').length;

    if (accion == 'next') {
      $('.pills-tab li').each(function (index, pill) {
        index = index + 1;
        if ($(pill).find('a').hasClass('active')) {
          if (index == cantidadPestana) {
            $('.pills-tab li').first().find('a').tab('show');
            // $('.row__next').addClass('hide');
          }
          else {
            $(pill).next().find('a').tab('show');
            return false;
          }

        }
      });
    }
    if (accion == 'prev') {
      $.each($('.pills-tab li'), function (index, pill) {
        index = index + 1;
        if ($(pill).find('a').hasClass('active')) {
          if (index == 1) {
            $('.pills-tab li:last-child a').tab('show')
            return false;
          }
          else {
            $(pill).prev().find('a').tab('show');
            return false;
          }
        }
      });
    }
  });
  $('.cambiarpestana2').click(function (ev) {
    let accion = $(this).data('accion');
    let cantidadPestana = $('.pills-tab2 li').length;

    if (accion == 'next2') {
      $('.pills-tab2 li').each(function (index, pill) {
        index = index + 1;
        if ($(pill).find('a').hasClass('active')) {
          if (index == cantidadPestana) {
            $('.pills-tab2 li').first().find('a').tab('show');
          }
          else {
            $(pill).next().find('a').tab('show');
            return false;
          }

        }
      });
    }
    if (accion == 'prev2') {
      $.each($('.pills-tab2 li'), function (index, pill) {
        index = index + 1;
        if ($(pill).find('a').hasClass('active')) {
          if (index == 1) {
            $('.pills-tab2 li:last-child a').tab('show')
            return false;
          }
          else {
            $(pill).prev().find('a').tab('show');
            return false;
          }
        }
      });
    }
  });
});
$(window).resize(function () {
  var vh = window.innerHeight;
  var vw = window.innerWidth;
  if (vw < 991) {
    $('.pc-version').css('display', 'none')
    $('.mobile-version').css('display', '')
  }
  else if (vw > 991) {
    $('.mobile-version').css('display', 'none')
    $('.pc-version').css('display', '')
  }
  if (vw < 768) {
    $('.rm_container').removeClass('container');
  }
  else if (vw > 768) {
    if ($('.rm_container').hasClass('container') == false) {
      $('.rm_container').addClass('container');
    }
  }
  $('.filtering').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    slide: 'img'
  });

});
