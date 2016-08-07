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


  function preloader() {
    if (document.images) {
      var img1 = new Image();
      var img2 = new Image();
      var img3 = new Image();

      img1.src = "https://dl.dropboxusercontent.com/s/3ggtxl1dgztfpis/intag.gif";
      img2.src = "https://dl.dropboxusercontent.com/s/kmj0fibqehi1glt/ris.gif";
      img3.src = "https://dl.dropboxusercontent.com/s/p7n82q6pdgqtvc3/gruppbild.gif";

      var img4 = new Image();
      var img5 = new Image();
      var img6 = new Image();
      var img7 = new Image();
      var img8 = new Image();
      var img9 = new Image();
      var img10 = new Image();
      var img11 = new Image();

      img4.src = "https://dl.dropboxusercontent.com/s/rgypor1f66vxl7w/marika-o.gif";
      img5.src = "https://dl.dropboxusercontent.com/s/til5bkgm83jmq9s/lina-o.gif";
      img6.src = "https://dl.dropboxusercontent.com/s/bpc6aoomb9232tr/linnea-o.gif";
      img7.src = "https://dl.dropboxusercontent.com/s/op3wf84b1czn6ft/marie-o.gif";
      img8.src = "https://dl.dropboxusercontent.com/s/2rwzkah2en2pjsq/asa-o.gif";
      img9.src = "https://dl.dropboxusercontent.com/s/qua6diw5vpxqyxr/chewie-o.gif";
      img10.src = "https://dl.dropboxusercontent.com/s/zkc5vrtdzg67fza/joanna-o.gif";
      img11.src = "https://dl.dropboxusercontent.com/s/hw7vg95am2c713u/darth-o.gif";
    }
  }
  function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {
      window.onload = function() {
        if (oldonload) {
          oldonload();
        }
        func();
      }
    }
  }

  addLoadEvent(preloader);

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
