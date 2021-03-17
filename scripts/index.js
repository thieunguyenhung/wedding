function showImages(el) {
  var windowHeight = jQuery(window).height();
  $(el).each(function () {
    console.log($(this));
    var thisPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    console.log('thisPos', thisPos);
    console.log('topOfWindow', topOfWindow);
    console.log(topOfWindow + windowHeight - 200);
    if (topOfWindow + windowHeight - 200 > thisPos) {
      $(this).addClass('slide-in-blurred-bottom');
    }
  });
}

$(document).ready(function () {
  if (location.protocol !== 'https:' && location.protocol !== 'file:') {
    console.log('Redirecting to HTTPS');
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
  setTimeout(function () {
    $('body').show();
    showImages('.story-img');
  }, 500);

  var scrollbar = window.Scrollbar;
  scrollbar.init(document.querySelector('#main-scrollbar'));
  // $(window).on('wheel', function (event) {
  //   console.log(scrollbar.offset.y);
  //   if (event.originalEvent.deltaY < 0) {
  //     console.log('wheeled up');
  //   } else {
  //     console.log('wheeled down');
  //   }
  // });
  scrollbar.getAll()[0].addListener(function (status) {
    showImages('.story-img');
    console.log(status.offset.y);
  });
});
