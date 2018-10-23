
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
var title_blog='';
var content_blog='';
var img_blog='';


// Texto en el Blog
if (window.location.hash=='#1') {
  img_blog='<img src="./img/blog/blog-1.png" alt=""/>';
  title_blog='EL CONSUMO DE PESCADO ES IDEAL PARA DEPORTISTAS';
  content_blog="Si la respuesta es no, esta nota es para ti."+
  "<br>"+
  "<br>"+
  "Aprender a comer es una etapa en la vida de un niño y, por eso, debe sentir una actitud positiva por parte de sus padres: ¡más aún cuando se trata del pescado! El niño debe estar predispuesto a este alimento y nunca debe ser utilizado como castigo."+
  "<br>"+
  "<br>"+
  "Que los hijos aprendan a comer pescado puede resultar una tarea complicada, pero para hacerla más sencilla es recomendable seguir los siguientes consejos:"+
  "<br>"+
  "<br>"+
"<ul class='ul-recipes tradeGothic color1 text__p'"+
  "<li> No debe tener espinas. Esta es la principal razón por la cual a los niños no les gusta el pescado. Es mejor prepararlo en filetes o en lomos.</li>"+
  "<li> Disimular el sabor. Algunos pescados tienen un sabor muy fuerte que termina siendo desagradable para el paladar delicado de un niño. Para esto se puede utilizar limón o diferentes salsas o preparaciones.</li>"+
  "<li> No volverlo repetitivo. Los niños suelen aburrirse de comer siempre lo mismo, más aún si no es de su completo agrado. Es recomendable utilizar recetas divertidas con formas o combinar el pescado con el plato favorito del niño.</li>"+
  "<li> Empezar cuanto antes. Mientras más temprano empiecen a comer pescado más rápido se van a acostumbrar al sabor.</li>"+
  "</li>"+
  "</ul>";
  $('#title_blog').html(title_blog);
  $('#content_blog').html(content_blog);
  $('.img_blog').html(img_blog);
}
else if (window.location.hash=='#2') {
  img_blog='<img src="./img/blog/blog-2.png" alt=""/>';
  title_blog='¿TUS HIJOS COMEN PESCADO?';
  content_blog="Si la respuesta es no, esta nota es para ti."+
  "<br>"+
  "<br>"+
  "Aprender a comer es una etapa en la vida de un niño y, por eso, debe sentir una actitud positiva por parte de sus padres: ¡más aún cuando se trata del pescado! El niño debe estar predispuesto a este alimento y nunca debe ser utilizado como castigo."+
  "<br>"+
  "<br>"+
  "Que los hijos aprendan a comer pescado puede resultar una tarea complicada, pero para hacerla más sencilla es recomendable seguir los siguientes consejos:"+
  "<br>"+
  "<br>"+
"<ul class='ul-recipes tradeGothic color1 text__p'"+
  "<li> <b>No debe tener espinas.</b> Esta es la principal razón por la cual a los niños no les gusta el pescado. Es mejor prepararlo en filetes o en lomos.</li>"+
  "<li> <b>Disimular el sabor.</b> Algunos pescados tienen un sabor muy fuerte que termina siendo desagradable para el paladar  delicado de un niño. Para esto se puede utilizar limón o diferentes salsas o preparaciones.</li>"+
  "<li> <b>No volverlo repetitivo.</b> Los niños suelen aburrirse de comer siempre lo mismo, más aún si no es de su completo  agrado. Es recomendable utilizar recetas divertidas con formas o combinar el pescado con el plato favorito del niño.</li>"+
  "<li> <b>Empezar cuanto antes.</b> Mientras más temprano empiecen a comer pescado más rápido se van a acostumbrar al sabor</li>"+
  "</li>"+
  "</ul>";
  $('#title_blog').html(title_blog);
  $('#content_blog').html(content_blog);
  $('.img_blog').html(img_blog);
}

export {
  sliderWrapper,
  sliderMultipleItems
}
