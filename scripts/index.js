$(document).ready(function () {
  setTimeout(function () {
    $('body').show();
  }, 500);

  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector('#main-scrollbar'));
});
