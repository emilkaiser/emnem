$(function() {
  $("img.lazy.landscape").lazyload({
    threshold : 200,
    effect: 'fadeIn',
    placeholder: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 3 2'%2F%3E"
  });
  $("img.lazy.portrait").lazyload({
    threshold : 200,
    effect: 'fadeIn',
    placeholder: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 2 3'%2F%3E"
  });
  $("img.lazy.square").lazyload({
    threshold : 200,
    effect: 'fadeIn',
    placeholder: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 2 2'%2F%3E"
  });
});

$(function () {
  var images = jQuery.makeArray($("img[data-original*='gif']"));
  function preloader () {
    var url = images.shift();
    if (url) {
      var img = new Image();
      img.addEventListener('load', setTimeout(preloader, 1000), false);
      img.src = $(url).data('original');
    }
  }
  setTimeout(preloader, 3000)
});

setTimeout(function () {
  new Waypoint({
    element: document.getElementById('sil'),
    handler: function(direction) {
      if (direction === 'down') {
        document.getElementById('sil-audio').play();
        document.getElementById('sil-audio').volume = 0;
        $('#sil-audio').animate({volume: 0.5}, 3000);
        setTimeout(function () {
          $('#sil-audio').animate({volume: 0}, 3000);
        }, 15000);
      }
    }
  });
}, 2000);
