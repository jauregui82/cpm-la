const handleShowElement = (text_id_elem) => {
  console.log(text_id_elem);

  text_id_elem = document.getElementById(text_id_elem);
  text_id_elem.classList.toggle('active');


}
$('span#btn-coments').click(function () {
  $('span#btn-coments').addClass('show');
  if ($('span#btn-coments').hasClass("show")) {
    $('form#comments').show('slow');
  }
});

$('p#btn-distribute').click(function () {
  $('p#btn-distribute').addClass('show');
  if ($('p#btn-distribute').hasClass("show")) {
    $('form#distribute').show('slow');
    $('p#btn-distribute').removeClass('mb-5')
  }
});

export {
  handleShowElement
}
