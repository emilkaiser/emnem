$(function () {

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  panels();
  svg();
  text("dresscode");
  text("map");
  textLeft("about");
  textLeft("ee");
  text("hashtag");
  textLeft("osa");
  zoom('return');
  zoom('wishlist');
  leaf("party");
  customSwipe(".custom-panels");
  parallax(".parallax-two");
  parallax(".parallax-three");
  parallax(".parallax-four");
  parallax(".parallax-five");
  parallax(".parallax-six");
  parallax(".parallax-seven");
  //if (!mobileAndTabletcheck) {
    scrollTo();
  //}

  function sticky (element) {
    var scene = new ScrollMagic.Scene({triggerElement: element})
      .setPin(element)
      .addTo(controller);
  }

  function panels () {
    var slides = document.querySelectorAll("section.panel");
    for (var i=0; i<slides.length; i++) {
      new ScrollMagic.Scene({triggerElement: slides[i]})
        .setPin(slides[i])
        .addTo(controller);
    }
  }

  function svg () {
    var tween = new TimelineMax()
      .add(TweenMax.to($("path#e1"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
      .add(TweenMax.to($("path#e2"), 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
      .add(TweenMax.to($("path#heart"), 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
      .add(TweenMax.to("path", 1, {stroke: "#D6B6BF", ease:Linear.easeNone}), 0);
    var scene = new ScrollMagic.Scene({triggerElement: "section.panel.svg", duration: 200, tweenChanges: true})
      .setTween(tween)
      .setClassToggle('a[href="#home"]', "active")
      .addTo(controller)
      .triggerHook(0.0);
  }

  function text (selector) {
    $('section.' + selector).css("overflow", "hidden");
    var scene = new ScrollMagic.Scene({triggerElement: 'section.' + selector + ' + section', duration: 300})
      .setTween(TweenMax.staggerFromTo('section.' + selector + " + section .copy", 2, {left: 910}, {left: 0, ease: Back.easeOut}, 0.15))
      .setClassToggle('a[href="#' + selector + '"]', "active")
      .addTo(controller)
      .triggerHook(0.5);
  }

  function textLeft (selector) {
    $('section.' + selector).css("overflow", "hidden");
    var scene = new ScrollMagic.Scene({triggerElement: 'section.' + selector, duration: 300})
      .setTween(TweenMax.staggerFromTo('section.' + selector + " .copy", 2, {right: 1110}, {right: 0, ease: Back.easeOut}, 0.15))
      .setClassToggle('a[href="#' + selector + '"]', "active")
      .addTo(controller)
      .triggerHook(0.1);
  }

  function zoom (selector) {
    $('section.' + selector).css("overflow", "hidden");
    var scene = new ScrollMagic.Scene({triggerElement: 'section.' + selector})
      .setTween('section.' + selector + " .copy", 0.5, {scale: 1.25})
      .setClassToggle('a[href="#' + selector + '"]', "active")
      .addTo(controller)
      .triggerHook(0.2);
  }

  function leaf (selector) {
    var flightpath = {
      entry : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100,  y: -20},
            {x: 300,  y: 10}
          ]
      },
      looping : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 510,  y: 60},
            {x: 620,  y: -60},
            {x: 500,  y: -100},
            {x: 380,  y: 20},
            {x: 500,  y: 60},
            {x: 580,  y: 20},
            {x: 620,  y: 15}
          ]
      },
      leave : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 660,  y: 20},
            {x: 800,  y: 130},
            {x: $(window).width() + 300,  y: -100},
          ]
      }
    };

    var tween = new TimelineMax()
      .add(TweenMax.to($('section.' + selector + " img"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
      .add(TweenMax.to($('section.' + selector + " img"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
      .add(TweenMax.to($('section.' + selector + " img"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

    var scene = new ScrollMagic.Scene({triggerElement: 'section.' + selector, duration: 500, offset: 10})
      .setClassToggle('a[href="#' +  selector + '"]', "active")
      .setPin('section.' + selector + ".copy")
      .setTween(tween)
      .addTo(controller)
      .triggerHook(0.2);
  }

  function customSwipe (triggerElement) {
    var tween = new TimelineMax()
      .fromTo("section.custom-panel.map-img", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})
      .fromTo("section.custom-panel.grey", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});

    var scene = new ScrollMagic.Scene({triggerElement: triggerElement, triggerHook: "onLeave", duration: "300%"})
      .setPin(triggerElement)
      .setClassToggle('a[href="#map"]', "active")
      .setTween(tween)
      .addTo(controller);
  }

  function parallax (element) {
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
    var scene = new ScrollMagic.Scene({triggerElement: element})
      .setTween(element + " > div", {y: "80%", ease: Linear.easeNone})
      .addTo(controller);
  }

  function scrollTo () {

    controller.scrollTo(function (newpos) {
      TweenMax.to(window, 0.5, {scrollTo: {y: newpos, x: 0}});
    });

    //  bind scroll to anchor links
    $(document).on("click", "a[href^='#']", function (e) {
      var id = $(this).attr("href");
      if ($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller.scrollTo(id);
      }
    });
  }
});

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
