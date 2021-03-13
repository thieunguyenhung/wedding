$(document).ready(function () {
  if (location.protocol !== 'https:') {
    console.log('Redirecting to HTTPS');
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
  setTimeout(function () {
    $('body').show();
  }, 500);

  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector('#main-scrollbar'));
});
