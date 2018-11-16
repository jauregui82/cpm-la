// modules
import { handleShowElement } from "./modules/general";
import toggleMenu from "./modules/menu";
import { sliderWrapper, sliderMultipleItems } from "./modules/slick";
import { MenuScroll } from "./modules/menu-scroll";
import { handlePagination, handlePaginationRecipes } from "./modules/pagination";

// import {
//   handleItemArticle as handleItemArticleProducts,
//   handleItemMenuMap as handleItemMenuMapProducts
// } from "./modules/products";

// import { handleItemsMenu as handleItemsMenuTerms } from "./modules/terms-and-conditions";

// import AOS from 'aos';
// import 'aos/dist/aos.css';


// handleShowNextSibling();
// handleShowElement;

handlePagination();

window.handlePaginationRecipes= handlePaginationRecipes;
window.handleShowElement = handleShowElement;
window.toggleMenu = toggleMenu;
window.sliderWrapper = sliderWrapper;
window.sliderMultipleItems = sliderMultipleItems;


$(window).on('scroll', function () {
  MenuScroll();
});


$(window).on('load', function () {
  MenuScroll();

  if (hideLoadin() == true) {
    setTimeout(function () {
      hideLoadin();
      $(".loading__content").hide();
      AOS.init();
    }, 1000);
  }

});

function hideLoadin() {
  $(".loading__content").attr("data-aos", "zoom-out-down")
  return true;
}

$(document).ready(function () {
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
