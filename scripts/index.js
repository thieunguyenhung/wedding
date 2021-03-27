function showImages(el, cssClass) {
  var windowHeight = jQuery(window).height();
  $(el).each(function () {
    var thisPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 200 > thisPos) {
      $(this).addClass(cssClass);
    }
  });
}

function showTexts(el, offset) {
  var windowHeight = jQuery(window).height();
  $(el).each(function () {
    var thisPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - offset > thisPos) {
      $(this).addClass('fade-in-top');
    }
  });
}

function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(function () {
  if (location.protocol !== 'https:' && location.protocol !== 'file:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
  if (Math.random() < 0.5) {
    $('#landingImg').attr(
      'src',
      'https://dm2305files.storage.live.com/y4mDXNkyAj2j_GIXPWzaxws5gzYe19EU-wDnbdNuijoZtCFKcjR18b-FY1KEv-CCufKAwMDva4IqdLhVfcfQtetLU0rN_Y8tSQf7F-MW36ya-OW0E0xIdXPSrVkjRFROsDBWlJ6IxdZuUycJUDptp6RZZsg6cSU5lJjeuxxo1UBmAGYGlJWnf4M7pd7a4dKxxXp?width=1920&height=1080&cropmode=none'
    );
  }
  $('#landingImg')
    .imagesLoaded()
    .always(function (instance) {
      $('#landingImg').addClass('fade-in-fwd');
      $('.background-number-row').css('visibility', 'visible');
      showImages('.story-img', 'fade-in-bottom');
      showImages('.gallery-img', 'fade-in-bottom');
      showTexts('.story-text', 450);
      showTexts('.about-col-first', 100);
      showTexts('.about-col-mid', 180);
      showTexts('.about-col-last', 250);
      initGalleryContainer();
      initPhotoSwipeFromDOM('.gallery-container');
    });

  var scrollbar = window.Scrollbar;
  scrollbar.init(document.querySelector('#mainScrollbar'));
  scrollbar.getAll()[0].addListener(function (status) {
    showImages('.story-img', 'fade-in-bottom');
    showImages('.gallery-img', 'fade-in-bottom');
    showTexts('.story-text', 450);
    showTexts('.about-col-first', 100);
    showTexts('.about-col-mid', 200);
    showTexts('.about-col-last', 300);
  });

  $('.anchor').on('click', function () {
    const hash = $(this).data('id');
    if (!hash) {
      return;
    }
    if (hash === '#home') {
      scrollbar.getAll()[0].setMomentum(0, -scrollbar.getAll()[0].scrollTop);
    } else if (hash === '#galerrySection') {
      initPhotoSwipe();
    } else {
      scrollbar.getAll()[0].scrollIntoView(document.querySelector(hash), {
        offsetTop: -scrollbar.getAll()[0].containerEl.scrollTop
      });
    }
  });
});
