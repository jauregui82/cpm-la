
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
var title_blog = '';
var content_blog = '';
var img_blog = '';


// Texto en el Blog
if (window.location.hash == '#1') {
  img_blog = '<img src="./img/blog/blog-1.png" alt=""/>';
  title_blog = 'EL CONSUMO DE PESCADO ES IDEAL PARA DEPORTISTAS';
  content_blog = "Si la respuesta es no, esta nota es para ti." +
    "<br>" +
    "<br>" +
    "Aprender a comer es una etapa en la vida de un niño y, por eso, debe sentir una actitud positiva por parte de sus padres: ¡más aún cuando se trata del pescado! El niño debe estar predispuesto a este alimento y nunca debe ser utilizado como castigo." +
    "<br>" +
    "<br>" +
    "Que los hijos aprendan a comer pescado puede resultar una tarea complicada, pero para hacerla más sencilla es recomendable seguir los siguientes consejos:" +
    "<br>" +
    "<br>" +
    "<ul class='ul-recipes tradeGothic color1 text__p'" +
    "<li> No debe tener espinas. Esta es la principal razón por la cual a los niños no les gusta el pescado. Es mejor prepararlo en filetes o en lomos.</li>" +
    "<li> Disimular el sabor. Algunos pescados tienen un sabor muy fuerte que termina siendo desagradable para el paladar delicado de un niño. Para esto se puede utilizar limón o diferentes salsas o preparaciones.</li>" +
    "<li> No volverlo repetitivo. Los niños suelen aburrirse de comer siempre lo mismo, más aún si no es de su completo agrado. Es recomendable utilizar recetas divertidas con formas o combinar el pescado con el plato favorito del niño.</li>" +
    "<li> Empezar cuanto antes. Mientras más temprano empiecen a comer pescado más rápido se van a acostumbrar al sabor.</li>" +
    "</li>" +
    "</ul>";
  $('#title_blog').html(title_blog);
  $('#content_blog').html(content_blog);
  $('.img_blog').html(img_blog);
}
else if (window.location.hash == '#2') {
  img_blog = '<img src="./img/blog/blog-2.png" alt=""/>';
  title_blog = '¿TUS HIJOS COMEN PESCADO?';
  content_blog = "Si la respuesta es no, esta nota es para ti." +
    "<br>" +
    "<br>" +
    "Aprender a comer es una etapa en la vida de un niño y, por eso, debe sentir una actitud positiva por parte de sus padres: ¡más aún cuando se trata del pescado! El niño debe estar predispuesto a este alimento y nunca debe ser utilizado como castigo." +
    "<br>" +
    "<br>" +
    "Que los hijos aprendan a comer pescado puede resultar una tarea complicada, pero para hacerla más sencilla es recomendable seguir los siguientes consejos:" +
    "<br>" +
    "<br>" +
    "<ul class='ul-recipes tradeGothic color1 text__p'>" +
    "<li> <b>No debe tener espinas.</b> Esta es la principal razón por la cual a los niños no les gusta el pescado. Es mejor prepararlo en filetes o en lomos.</li>" +
    "<li> <b>Disimular el sabor.</b> Algunos pescados tienen un sabor muy fuerte que termina siendo desagradable para el paladar  delicado de un niño. Para esto se puede utilizar limón o diferentes salsas o preparaciones.</li>" +
    "<li> <b>No volverlo repetitivo.</b> Los niños suelen aburrirse de comer siempre lo mismo, más aún si no es de su completo  agrado. Es recomendable utilizar recetas divertidas con formas o combinar el pescado con el plato favorito del niño.</li>" +
    "<li> <b>Empezar cuanto antes.</b> Mientras más temprano empiecen a comer pescado más rápido se van a acostumbrar al sabor</li>" +
    "</li>" +
    "</ul>";
  $('#title_blog').html(title_blog);
  $('#content_blog').html(content_blog);
  $('.img_blog').html(img_blog);
}
else if (window.location.hash == '#3') {
  img_blog = '<img src="./img/blog/blog-3.png" alt=""/>';
  title_blog = 'CONSUMIR PESCADO CONTRIBUYE AL ESTADO DE ÁNIMO';
  content_blog = "Muchos conocen los beneficios que ofrece el consumo de pescado para mantener un cuerpo saludable. Sin embargo, el pescado no solo ofrece bondades al estado físico, sino también al estado emocional de las personas." +
    "<br>" +
    "<br>" +
    "Uno de los componentes más importantes para lo mencionado arriba es el omega-3. Pescados como el salmón, atún y la sardina son los que tienen mayor contenido de este ácido graso, y las personas que lo consumen por lo general  presentan un menor riesgo de sufrir de depresión." +
    "<br>" +
    "<br>" +
    "Por otro lado, un nivel bajo de vitamina D en el organismo puede ocasionar cambios en el estado de ánimo y también generar depresión. Si bien la forma más adecuada de aumentar los niveles de esta vitamina es exponerse al sol -ya que sus rayos ayudan a producir esta vitamina-, en épocas de invierno esto resulta complicado. Aquí es donde el pescado juega un papel importante, debido a que su consumo aporta en el incremento de los niveles de esta vitamina en el cuerpo." +
    "<br>" +
    "<br>" +
    "Asimismo, los pescados grasos y los mariscos contienen selenio, el cual contribuye a mejorar el estado de ánimo,  disminuir los niveles de ansiedad y reducir el riesgo de sufrir depresión" +
    "<br>" +
    "<br>" +
    "¡Así que ahora tienes una razón más para comer pescado! ¡A mejorar ese estado de ánimo!";
  $('#title_blog').html(title_blog);
  $('#content_blog').html(content_blog);
  $('.img_blog').html(img_blog);
}
else if (window.location.hash == '#4') {
  img_blog = '<img src="./img/blog/blog-6.png" alt=""/>';
  title_blog = '¿QUÉ CONSIDERAR AL COMPRAR CONSERVAS DE PESCADO?';
  content_blog = "Existen muchos mitos acerca de los alimentos enlatados. Hay quienes dudan de su calidad y la seguridad que le puede dar el envase a su contenido. Pero la verdad es que las conservas tienen muchas ventajas, pues son una opción saludable y muy práctica para nuestras comidas diarias." +
    "<br>" +
    "<br>" +
    "Sin embargo, tenemos que tener en cuenta algunos consejos a la hora de elegir una conserva, como los que te mostramos a continuación:" +
    "<br>" +
    "<br>" +
    "<ul class='ul-recipes tradeGothic color1 text__p'>" +
    "<li> <b>Revisa la fecha de caducidad.</b> Toda conserva tiene una fecha de caducidad que puede variar de acuerdo a su contenido. Por ello, debemos tener en cuenta esta información y consumir la conserva antes de la fecha indicada para  evitar problemas a nuestra salud.</li>" +
    "<li> <b>Verifica que el envase no se encuentre oxidado.</b> Es importante que la tapa de la conserva no presente oxidación ya que podría afectar la calidad del contenido. </li>" +
    "<li> <b>Asegúrate de que el envase no tenga ninguna abolladura. </b>  Una conserva abultada o golpeada es un producto que ha sufrido una grave alteración, por lo que no es posible asegurar que su contenido se encuentre en buen estado.</li>" +
    "<li> <b>Es importante que compres una marca reconocida.</b> Una marca prestigiosa nos da la seguridad y confianza de que la conserva está fabricada con los más óptimos procesos de envasado y control de calidad.</li>" +
    "</ul>" +
    "Recuerda seguir estos consejos para tener una experiencia agradable cuando decidas preparar una deliciosa comida con alimentos en conserva.";
  $('#title_blog').html(title_blog);
  $('#content_blog').html(content_blog);
  $('.img_blog').html(img_blog);
}
else if (window.location.hash == '#5') {
  img_blog = '<img src="./img/blog/blog-4.png" alt=""/>';
  title_blog = 'CONOCE LOS ALIMENTOS ANTIOXIDANTES';
  content_blog = "¿Por qué son importantes los antioxidantes? Porque nos ayudan a contrarrestar las repercusiones de los radicales libres en nuestro cuerpo. Estos se encuentran en el ambiente, en la exposición a la luz solar, en la contaminación ambiental y en el humo del cigarro. Las células se ven afectadas por los radicales libres a través de un proceso de oxidación. Este daño puede contribuir en el desarrollo de ciertas enfermedades como el cáncer, males cardiovasculares, diabetes, Alzheimer, Parkinson y afecciones a los ojos. Por esto presentamos a continuación un listado de alimentos con altos contenidos de antioxidantes:" +
    "<br>" +
    "<br>" +
    "<ul class='ul-recipes tradeGothic color1 text__p'>" +
    "<li> <b>El maíz.</b> Contiene sustancias conocidas por su gran actividad antioxidante y antiinflamatoria.</li>" +
    "<li> <b>Las verduras crucíferas.</b>  El brócoli, la coliflor, la acelga, el repollo, la col risada, el nabo y la alcachofa. Según los  estudios, estos alimentos protegen al organismo contra el cáncer de próstata. de pulmón y de colon.</li>" +
    "<li> <b>Té negro. </b>   Contribuye también a bajar de peso y a estar en estado de alerta.</li>" +
    "<li> <b>Frutas.</b> Especialmente las moras azules y negras, las fresas y los arándanos. Estos pueden contribuir a reducir la presión arterial.</li>" +
    "<li> <b>Especias.</b>  Especialmente canela, orégano y clavo.</li>" +
    "</ul>" +
    "<br>" +
    "Lo mejor que podemos hacer para incrementar los antioxidantes en nuestro organismo es a través de una dieta  equilibrada rica en frutas y verduras. Esto es mucho más saludable que los suplementos.";
  $('#title_blog').html(title_blog);
  $('#content_blog').html(content_blog);
  $('.img_blog').html(img_blog);
}
else if (window.location.hash == '#6') {
  img_blog = '<img src="./img/blog/blog-5.png" alt=""/>';
  title_blog = 'LA IMPORTANCIA DEL PESCADO EN LA TERCERA EDAD';
  content_blog = "¿Sabías que comer pescado puede prevenir infartos?" +
    "El consumo de este alimento es de valiosa importancia, sobre todo en personas de la tercera edad, debido a su alto contenido de ácidos grasos omega-3 (EPA Y DHA), ya que es justo durante esta edad donde existe un mayor riesgo de enfermedades cardiovasculares." +
    "<br>" +
    "<br>" +
    "El pescado ayuda a incrementar el colesterol bueno y a disminuir el colesterol malo (LDL) y los triglicéridos, así como la posibilidad de sufrir males cardiacos. Por eso es recomendable que las personas de la tercera edad consuman pescado de tres a cuatro veces por semana. " +
    "<br>" +
    "<br>" +
    "Para evitar infartos de miocardio y accidentes vasculares-cerebrales, la Organización Mundial de la Salud recomienda ejercitarse de manera regular, eliminar el consumo de tabaco e incluir en la dieta abundantes frutas, verduras, cereales integrales, carnes magras, pescado, legumbres y poca sal y azúcar." +
    "<br>" +
    "<br>" +
    "Afortunadamente, la variedad de pescados es tan amplia que se puede lograr combinaciones deliciosas que, además de ponerle sabor a las comidas, ayudarán a prevenir los males cardiacos y colaborar con la salud y el bienestar de los adultos mayores.";
  $('#title_blog').html(title_blog);
  $('#content_blog').html(content_blog);
  $('.img_blog').html(img_blog);
}
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
