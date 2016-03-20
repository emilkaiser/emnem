$(function () {

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

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
  breakpoint.refreshValue();
  if (breakpoint.value === 'big') {
    parallax(".parallax-two");
    parallax(".parallax-three");
    parallax(".parallax-four");
    parallax(".parallax-five");
    parallax(".parallax-six");
    parallax(".parallax-seven");
    scrollTo();
  }
  panels();
  menu();
  stagger();

  function panels () {
    var slides = $("section.panel");
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
    new ScrollMagic.Scene({triggerElement: "section.panel.svg", duration: 200, tweenChanges: true})
      .setTween(tween)
      .setClassToggle('a[href="#home"]', "active")
      .addTo(controller)
      .triggerHook(0.0);
  }

  function text (selector) {
    $('section.' + selector).css("overflow", "hidden");
    new ScrollMagic.Scene({triggerElement: 'section.' + selector, duration: 300})
      .setTween(TweenMax.staggerFromTo('section.' + selector + " .copy", 2, {left: 910}, {left: 0, ease: Back.easeOut}, 0.15))
      .setClassToggle('a[href="#' + selector + '"]', "active")
      .addTo(controller)
      .triggerHook(0.5);
  }

  function textLeft (selector) {
    $('section.' + selector).css("overflow", "hidden");
    new ScrollMagic.Scene({triggerElement: 'section.' + selector, duration: 300})
      .setTween(TweenMax.staggerFromTo('section.' + selector + " .copy", 2, {right: 1110}, {right: 0, ease: Back.easeOut}, 0.15))
      .setClassToggle('a[href="#' + selector + '"]', "active")
      .addTo(controller)
      .triggerHook(0.1);
  }

  function stagger () {
    var tween = TweenMax.staggerFromTo(".animate", 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);
    new ScrollMagic.Scene({triggerElement: "section.ee", duration: 300})
      .setTween(tween)
      .addTo(controller);
  }

  function zoom (selector) {
    $('section.' + selector).css("overflow", "hidden");
    new ScrollMagic.Scene({triggerElement: 'section.' + selector})
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

    new ScrollMagic.Scene({triggerElement: 'section.' + selector, duration: 500, offset: 10})
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

    new ScrollMagic.Scene({triggerElement: triggerElement, triggerHook: "onLeave", duration: "300%"})
      .setPin(triggerElement)
      .setClassToggle('a[href="#map"]', "active")
      .setTween(tween)
      .addTo(controller);
  }

  function parallax (selector) {
    $(selector).removeClass('panel').addClass('parallax');
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
    new ScrollMagic.Scene({triggerElement: selector})
      .setTween(selector + " > div", {y: "80%", ease: Linear.easeNone})
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

  function menu () {
    $('header nav ul').on('click', function () {
      $('header nav input').prop("checked", false);
    });
  }
});

var breakpoint = {};
breakpoint.refreshValue = function () {
  this.value = window.getComputedStyle(
    document.querySelector('body'), ':before'
  ).getPropertyValue('content').replace(/\"/g, '');
};
