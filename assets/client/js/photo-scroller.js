!(function (t, e, a, s) {
  var i = t("body"),
    r = t(e),
    n =
      (t("#main-slideshow"),
      t("#wpadminbar").height(),
      t(".masthead:not(.side-header):not(.side-header-v-stroke)").height(),
      i.hasClass("transparent")),
    o = t(".floating-navigation-below-slider").exists(),
    d = t(".masthead");
  (t.rsCSS3Easing = {
    easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
    easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
  }),
    t.extend(jQuery.easing, {
      easeInOutSine: function (t, e, a, s, i) {
        return (-s / 2) * (Math.cos((Math.PI * e) / i) - 1) + a;
      },
      easeOutSine: function (t, e, a, s, i) {
        return s * Math.sin((e / i) * (Math.PI / 2)) + a;
      },
      easeOutCubic: function (t, e, a, s, i) {
        return s * ((e = e / i - 1) * e * e + 1) + a;
      },
    }),
    (t.thePhotoSlider = function (e, a) {
      var s = t(e).data("thePhotoSlider");
      s ? s.update() : this._init(e, a);
    }),
    (t.thePhotoSlider.defaults = {
      mode: { type: "slider" },
      responsive: !0,
      height: !1,
      width: !1,
      sidePaddings: 0,
      paddingLeft: 0,
      storeHTML: !1,
      autoPlay: !1,
      threshold: 20,
      resizeImg: !1,
      imageScaleMode: "none",
      imageAlignCenter: !1,
      collapsePoint: 700,
      transformEnable: !0,
      calcAutoHeight: !1,
      columBasedResize: !1,
      resizeHeight: !1,
    }),
    (t.thePhotoSlider.prototype = {
      _init: function (a, s) {
        var i = this;
        if (
          ((i.st = t.extend({}, t.thePhotoSlider.defaults, s)),
          (i.ev = t(i)),
          (i.autoPlay = { enabled: !1, delay: 2e3, loop: !0 }),
          (i.currSlide = 0),
          (i.noSlide = !0),
          (i.lockLeft = !0),
          (i.lockRight = !0),
          (i.sliderLock = !1),
          (i.lockTimeout = !1),
          (i.wrap = {}),
          (i.wrap.$el = t(a)),
          (i.wrap.width = 0),
          (i.wrap.height = !1),
          i.wrap.$el.data("thePhotoSlider", i),
          (i.viewport = i.wrap.$el.find(".ts-viewport")),
          (i.cont = {}),
          (i.cont.$el = i.viewport.find(".ts-cont")),
          (i.cont.width = 0),
          (i.cont.startX = 0),
          (i.cont.instantX = 0),
          (i.slides = {}),
          (i.slides.$items = i.cont.$el.children()),
          (i.slides.number = i.slides.$items.length),
          (i.slides.position = []),
          (i.slides.width = []),
          (i.slides.isLoaded = []),
          (i.drag = {}),
          (i.drag.isMoving = !1),
          (i.drag.startX = 0),
          (i.drag.startY = 0),
          (i.drag.offsetX = 0),
          (i.drag.offsetY = 0),
          (i.drag.lockX = !1),
          (i.drag.lockY = !1),
          (i.features = {}),
          i._featureDetection(),
          i.st.storeHTML && (i.origHTML = i.wrap.$el.html()),
          i._buildHTML(),
          i._calcSliderSize(),
          i._resizeImage(),
          i.wrap.height || i.wrap.$el.addClass("ts-autoHeight"),
          i._setSliderWidth(),
          i._adjustSlides(),
          i._setSliderHeight(),
          i.slideTo(0, !0),
          i.noSlide || i._bindEvents(),
          setTimeout(function () {
            i.wrap.$el.addClass("ts-ready"), i.ev.trigger("sliderReady");
          }, 20),
          i.st.responsive)
        )
          if ("onorientationchange" in e) {
            var r = e.orientation;
            t(e).on("orientationchange", function (t) {
              var a = e.orientation;
              a !== r && ((r = a), i.update());
            });
          } else {
            var n;
            t(e).on("resize", function (t) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  i.update();
                }, 200));
            });
          }
        i.st.autoPlay.enabled && i.play();
      },
      _featureDetection: function () {
        var t,
          s = this,
          i = a.createElement("div").style,
          r = ["webkit", "Moz", "ms", "O"];
        s.features.vendor = "";
        for (let e = 0; e < r.length; e++)
          (t = r[e]),
            !s.features.vendor &&
              t + "Transform" in i &&
              (s.features.vendor = "-" + t.toLowerCase() + "-");
        -1 == navigator.userAgent.indexOf("Safari") ||
        -1 != navigator.userAgent.indexOf("Chrome") ||
        "ontouchstart" in e
          ? "undefined" != typeof Modernizr &&
            (s.features.css3d = Modernizr.csstransforms3d)
          : (s.features.css3d = Modernizr.csstransforms3d);
      },
      _buildHTML: function () {
        var t = this;
        "centered" === t.st.mode.type && t.wrap.$el.addClass("ts-centered"),
          "slider" === t.st.mode.type
            ? t.slides.$items.addClass("ts-slide")
            : ("scroller" !== t.st.mode.type &&
                "centered" !== t.st.mode.type &&
                "carousel" !== t.st.mode.type) ||
              t.slides.$items.addClass("ts-cell");
      },
      _calcSliderSize: function () {
        var t = this,
          e = typeof t.st.width,
          a = typeof t.st.height,
          s = !1,
          i = !1;
        (t.wrap.width = t.wrap.$el.width()),
          "function" === e
            ? (s = t.st.width(this))
            : "number" === e && (s = t.st.width),
          "function" === a
            ? (i = t.st.height(this))
            : "number" === a && (i = t.st.height),
          (t.wrap.height = i && !s ? i : !(!i || !s) && (i * t.wrap.width) / s);
      },
      _resizeImage: function () {
        var e = this;
        !0 === e.st.resizeImg &&
          ((e.cont.width = 0),
          e.slides.$items.each(function (a) {
            var s = t(e.slides.$items[a]).find("img"),
              i = e.st.imageAlignCenter,
              r = e.st.imageScaleMode;
            if (s) {
              var n = parseInt(s.attr("width")),
                o = parseInt(s.attr("height"));
              if ("none" !== r) {
                var d,
                  l,
                  h,
                  c,
                  p,
                  u = e.wrap.width,
                  m = e.wrap.height,
                  f = {};
                "fit-if-smaller" === r && (n > u || o > m) && (r = "fit"),
                  "fill" === r || "fit" === r
                    ? ((d = u / n),
                      (l = m / o),
                      (h = 1),
                      "fill" == r
                        ? (h = d > l ? d : l)
                        : "fit" == r && (h = d < l ? d : l),
                      (c = Math.ceil(n * h, 10)),
                      (p = Math.ceil(o * h, 10)))
                    : ((c = n), (p = o)),
                  "none" !== r && ((f.width = c), (f.height = p)),
                  i &&
                    ((f.marginLeft = Math.floor((u - c) / 2)),
                    (f.marginTop = Math.floor((m - p) / 2))),
                  s.css(f);
              }
            }
          }));
      },
      _setSliderWidth: function () {
        var e = this;
        "centered" !== e.st.mode.type
          ? e.viewport.css({ width: e.wrap.width })
          : e.wrap.width > e.st.collapsePoint
          ? t(e.wrap.$el)
              .parents()
              .hasClass("elementor-widget-the7_photo-scroller") ||
            e.wrap.$el.removeClass("ts-collapsed")
          : t(e.wrap.$el)
              .parents()
              .hasClass("elementor-widget-the7_photo-scroller") ||
            e.wrap.$el.addClass("ts-collapsed");
      },
      _setSliderHeight: function () {
        var e = this;
        if ("number" == typeof e.wrap.height)
          e.viewport.css({ height: e.wrap.height });
        else if (
          "scroller" === e.st.mode.type ||
          "centered" === e.st.mode.type ||
          "carousel" === e.st.mode.type
        ) {
          if (e.st.resizeHeight) {
            var a = t(e.viewport)
                .find("article")
                .map(function () {
                  return t(this).height();
                })
                .get(),
              s = Math.max.apply(null, a);
            e.viewport.css({ height: s }),
              t(e.slides.$items).css({ height: s });
          }
          ("0px" !== e.viewport.css("height") &&
            0 != e.viewport.css("height") &&
            e.viewport.css("height")) ||
            e.viewport.css({ height: Math.max.apply(null, e.slides.height) });
        } else {
          var i = t(e.slides.$items[e.currSlide]).height();
          i > 0
            ? e.viewport.css({ height: i })
            : e.viewport.css({ height: "auto" });
        }
      },
      _adjustSlides: function () {
        var a = this;
        if ("slider" === a.st.mode.type)
          (a.cont.width = 0),
            a.slides.$items.each(function (e) {
              var s = t(a.slides.$items[e]),
                i = {};
              (a.slides.position[e] =
                -a.cont.width - a.st.sidePaddings - a.st.paddingLeft),
                (a.cont.width =
                  a.cont.width +
                  a.wrap.width +
                  a.st.sidePaddings +
                  a.st.paddingLeft),
                (i.left = -a.slides.position[e]),
                a.slides.isLoaded[e] ||
                  s.find("img").loaded(
                    !1,
                    function () {
                      (a.slides.isLoaded[e] = !0), s.addClass("ts-loaded");
                    },
                    !0
                  ),
                s.css(i);
            });
        else if ("centered" === a.st.mode.type) {
          if (
            ((a.cont.width = 0),
            (a.slides.contRatio = []),
            (a.slides.ratio = []),
            (a.st.mode.lsMobMinW || a.st.mode.lsMobMaxW) &&
              "undefined" != typeof elementorFrontendConfig &&
              e.innerWidth <= elementorFrontendConfig.breakpoints.sm)
          )
            var s = (a.wrap.width / 100) * a.st.mode.lsMobMinW,
              i = (a.wrap.width / 100) * a.st.mode.lsMobMaxW;
          else if (
            (a.st.mode.lsTabMinW || a.st.mode.lsTabMaxW) &&
            "undefined" != typeof elementorFrontendConfig &&
            e.innerWidth > elementorFrontendConfig.breakpoints.sm &&
            e.innerWidth <= elementorFrontendConfig.breakpoints.md
          )
            var r = (a.wrap.width / 100) * a.st.mode.lsTabMinW,
              n = (a.wrap.width / 100) * a.st.mode.lsTabMaxW;
          else if (a.st.mode.lsMinW || a.st.mode.lsMaxW)
            var o = (a.wrap.width / 100) * a.st.mode.lsMinW,
              d = (a.wrap.width / 100) * a.st.mode.lsMaxW;
          if (
            (a.st.mode.ptMobMinW || a.st.mode.ptMobMaxW) &&
            "undefined" != typeof elementorFrontendConfig &&
            e.innerWidth <= elementorFrontendConfig.breakpoints.sm
          )
            var l = (a.wrap.width / 100) * a.st.mode.ptMobMinW,
              h = (a.wrap.width / 100) * a.st.mode.ptMobMaxW;
          else if (
            (a.st.mode.ptTabMinW || a.st.mode.ptTabMaxW) &&
            "undefined" != typeof elementorFrontendConfig &&
            e.innerWidth > elementorFrontendConfig.breakpoints.sm &&
            e.innerWidth <= elementorFrontendConfig.breakpoints.md
          )
            var c = (a.wrap.width / 100) * a.st.mode.ptTabMinW,
              p = (a.wrap.width / 100) * a.st.mode.ptTabMaxW;
          else if (a.st.mode.ptMinW || a.st.mode.ptMaxW)
            var u = (a.wrap.width / 100) * a.st.mode.ptMinW,
              m = (a.wrap.width / 100) * a.st.mode.ptMaxW;
          a.slides.$items.each(function (f) {
            var g = t(a.slides.$items[f]),
              v = {},
              w = g.attr("data-width")
                ? parseFloat(g.attr("data-width"))
                : g.width(),
              b = g.attr("data-height")
                ? parseFloat(g.attr("data-height"))
                : g.height();
            a.slides.contRatio[f] ||
              ((a.slides.contRatio[f] = w / b),
              a.slides.contRatio[f] > 1
                ? g.addClass("ts-ls")
                : g.addClass("ts-pt")),
              a.wrap.width > a.st.collapsePoint ||
              t(a.wrap.$el)
                .parents()
                .hasClass("elementor-widget-the7_photo-scroller")
                ? ((b = a.wrap.height),
                  (w = a.wrap.height * a.slides.contRatio[f]),
                  "undefined" != typeof elementorFrontendConfig &&
                  e.innerWidth <= elementorFrontendConfig.breakpoints.sm
                    ? (s || i) && w > b
                      ? s === i || w > i
                        ? (w = i)
                        : w < s && (w = s)
                      : (l || h) &&
                        w <= b &&
                        (l === h || w > h ? (w = h) : w < l && (w = l))
                    : "undefined" != typeof elementorFrontendConfig &&
                      e.innerWidth > elementorFrontendConfig.breakpoints.sm &&
                      e.innerWidth <= elementorFrontendConfig.breakpoints.md
                    ? (r || n) && w > b
                      ? r === n || w > n
                        ? (w = n)
                        : w < r && (w = r)
                      : (c || p) &&
                        w <= b &&
                        (c === p || w > p ? (w = p) : w < c && (w = c))
                    : (o || d) && w > b
                    ? o === d || w > d
                      ? (w = d)
                      : w < o && (w = o)
                    : (u || m) &&
                      w <= b &&
                      (u === m || w > m ? (w = m) : w < u && (w = u)),
                  (a.slides.ratio[f] = w / b),
                  (v.height = a.wrap.height),
                  (v.width = a.slides.width[f] = w),
                  (a.slides.position[f] = -a.cont.width),
                  "undefined" != typeof elementorFrontendConfig &&
                  e.innerWidth <= elementorFrontendConfig.breakpoints.sm
                    ? (a.cont.width =
                        a.cont.width +
                        a.slides.width[f] +
                        a.st.sideMobPaddings +
                        a.st.MobpaddingLeft)
                    : "undefined" != typeof elementorFrontendConfig &&
                      e.innerWidth > elementorFrontendConfig.breakpoints.sm &&
                      e.innerWidth <= elementorFrontendConfig.breakpoints.md
                    ? (a.cont.width =
                        a.cont.width +
                        a.slides.width[f] +
                        a.st.sideTabPaddings +
                        a.st.TabpaddingLeft)
                    : (a.cont.width =
                        a.cont.width +
                        a.slides.width[f] +
                        a.st.sidePaddings +
                        a.st.paddingLeft),
                  (v.left = -a.slides.position[f]))
                : ((b = v.height = a.wrap.height),
                  (w = a.slides.width[f] = v.width = a.wrap.width),
                  (a.slides.ratio[f] = w / b),
                  (a.slides.position[f] = -a.cont.width),
                  (a.cont.width = a.cont.width + a.slides.width[f]),
                  (v.left = -a.slides.position[f])),
              (a.slides.position[f] =
                a.slides.position[f] - a.slides.width[f] / 2),
              a.slides.ratio[f] > a.slides.contRatio[f]
                ? (g.removeClass("ts-narrow"), g.addClass("ts-wide"))
                : (g.removeClass("ts-wide"), g.addClass("ts-narrow")),
              a.slides.isLoaded[f] ||
                g.find("img").loaded(
                  !1,
                  function () {
                    (a.slides.isLoaded[f] = !0), g.addClass("ts-loaded");
                  },
                  !0
                ),
              g.css(v);
          });
        } else if ("scroller" === a.st.mode.type) {
          if (
            ((a.cont.width = 0),
            (a.slides.ratio = []),
            "number" != typeof a.wrap.height && (a.slides.height = []),
            void 0 !==
              a.slides.$items.parents(".slider-wrapper").attr("data-max-width"))
          )
            var f =
              (a.slides.$items.parents(".slider-wrapper").width() *
                parseFloat(
                  a.slides.$items
                    .parents(".slider-wrapper")
                    .attr("data-max-width")
                )) /
              100;
          a.slides.$items.each(function (e) {
            var s = t(a.slides.$items[e]),
              i = {},
              r = s.attr("data-width")
                ? parseFloat(s.attr("data-width"))
                : s.width(),
              n = s.attr("data-height")
                ? parseFloat(s.attr("data-height"))
                : s.height();
            r > f && (r = f),
              (a.slides.ratio[e] = r > 0 && n > 0 ? r / n : 1),
              "number" == typeof a.wrap.height
                ? ((a.slides.width[e] = a.wrap.height * a.slides.ratio[e]),
                  (i.width = a.slides.width[e]),
                  (i.height = a.slides.width[e] / a.slides.ratio[e]))
                : r > 0 && n > 0
                ? (a.slides.width[e] || (i.width = a.slides.width[e] = r),
                  a.slides.height[e] ||
                    a.st.resizeHeight ||
                    (i.height = "100%"),
                  (a.slides.height[e] = n))
                : (s.css("height", "auto"),
                  (a.slides.width[e] = s.width()),
                  (a.slides.height[e] = s.height()),
                  (i.height = "100%")),
              a.st.columBasedResize && (a.slides.width[e] = s.width()),
              (a.slides.position[e] = -a.cont.width),
              (a.cont.width = a.cont.width + a.slides.width[e]),
              e < a.slides.number - 1 &&
                (a.cont.width += a.st.sidePaddings + a.st.paddingLeft),
              (i.left = -a.slides.position[e]),
              a.slides.isLoaded[e] ||
                s.find("img").loaded(
                  !1,
                  function () {
                    (a.slides.isLoaded[e] = !0), s.addClass("ts-loaded");
                  },
                  !0
                ),
              s.css(i);
          });
        } else if ("carousel" === a.st.mode.type) {
          a.cont.width = 0;
          for (
            var g = a.st.mode.perView,
              v = a.st.mode.minWidth,
              w = a.wrap.width / g;
            w < v && g > 0.31;

          )
            --g < 1 && (g = 1), (w = a.wrap.width / g);
          (a.perView = g),
            a.slides.$items.each(function (e) {
              var s = t(a.slides.$items[e]),
                i = {};
              (a.slides.position[e] = -a.cont.width),
                (a.cont.width = a.cont.width + w),
                (i.width = w - a.st.sidePaddings - a.st.paddingLeft),
                (i.left =
                  -a.slides.position[e] + a.st.sidePaddings + a.st.paddingLeft),
                s.css(i);
            });
        }
        "centered" !== a.st.mode.type && a.cont.width <= a.wrap.width
          ? ((a.noSlide = !0),
            a._transitionStart(0, 0, "easeInOutSine", !0),
            a.cont.$el.css("left", (a.wrap.width - a.cont.width) / 2),
            (a.lockLeft = !0),
            (a.lockRight = !0),
            a.ev.trigger("updateNav"))
          : "centered" === a.st.mode.type && a.slides.number < 2
          ? ((a.noSlide = !0),
            a._transitionStart(0, 0, "easeInOutSine", !0),
            a.cont.$el.css("left", -a.cont.width / 2),
            (a.lockLeft = !0),
            (a.lockRight = !0),
            a.ev.trigger("updateNav"))
          : ((a.noSlide = !1),
            a.cont.$el.css("left", ""),
            a.lockRight
              ? ((a.lockLeft = !1),
                (a.lockRight = !0),
                a.ev.trigger("lockRight").trigger("updateNav"))
              : a.currSlide <= 0
              ? ((a.lockLeft = !0),
                (a.lockRight = !1),
                a.ev.trigger("lockLeft").trigger("updateNav"))
              : a.currSlide > 0 &&
                ((a.lockLeft = !1),
                (a.lockRight = !1),
                a.ev.trigger("updateNav")));
      },
      _unifiedEvent: function (t) {
        return (
          undefined !== t.originalEvent.touches &&
            t.originalEvent.touches[0] &&
            ((t.pageX = t.originalEvent.touches[0].pageX),
            (t.pageY = t.originalEvent.touches[0].pageY)),
          t
        );
      },
      _unifiedX: function () {
        var t = this,
          e = t.cont.$el.css("transform");
        if (e) var a = e.split(", ");
        return t.features.css3d && "none" !== e && "matrix(1" === a[0]
          ? parseFloat(a[4])
          : t.features.css3d && "none" !== e && "matrix3d(1" === a[0]
          ? parseFloat(a[12])
          : parseFloat(t.cont.$el.css("left"));
      },
      _bindEvents: function () {
        var e = this;
        e.st.transformEnable &&
          e.wrap.$el.on(
            "mousedown.theSlider touchstart.theSlider",
            function (s) {
              "touchstart" != s.type && s.preventDefault(),
                e._onStart(e._unifiedEvent(s)),
                t(a).on(
                  "mousemove.theSlider touchmove.theSlider",
                  function (t) {
                    e._onMove(e._unifiedEvent(t));
                  }
                ),
                t(a).on(
                  "mouseup.theSlider mouseleave.theSlider touchend.theSlider touchcancel.theSlider",
                  function (s) {
                    t(a).off(
                      "mousemove.theSlider mouseup.theSlider mouseleave.theSlider touchmove.theSlider touchend.theSlider touchcancel.theSlider"
                    ),
                      e._onStop(e._unifiedEvent(s));
                  }
                );
            }
          );
      },
      _unbindEvents: function () {
        this.wrap.$el.off("mousedown.theSlider touchstart.theSlider"),
          t(a).off(
            "mousemove.theSlider mouseup.theSlider mouseleave.theSlider touchmove.theSlider touchend.theSlider touchcancel.theSlider"
          );
      },
      _onStart: function (t) {
        var e = this;
        e.drag.isMoving ||
          e.sliderLock ||
          ((e.drag.isMoving = !0),
          (e.drag.startX = t.pageX),
          (e.drag.startY = t.pageY),
          (e.cont.startX = e._unifiedX()),
          (e.drag.offsetX = 0),
          (e.drag.offsetY = 0),
          (e.drag.lockX = !1),
          (e.drag.lockY = !1));
      },
      _onMove: function (t) {
        var e = this,
          a = 0;
        e.ev.trigger("psOnMove"),
          e.drag.isMoving &&
            ((e.drag.offsetX = t.pageX - e.drag.startX),
            (e.drag.offsetY = t.pageY - e.drag.startY),
            Math.abs(e.drag.offsetX) >= e.st.threshold - 1 &&
            Math.abs(e.drag.offsetX) > Math.abs(e.drag.offsetY) &&
            !e.drag.lockX
              ? ((e.drag.lockX = !1),
                (e.drag.lockY = !0),
                "touchmove" == t.type && (e.drag.offsetY = 0))
              : Math.abs(e.drag.offsetY) >= e.st.threshold - 1 &&
                Math.abs(e.drag.offsetX) < Math.abs(e.drag.offsetY) &&
                !e.drag.lockY &&
                ((e.drag.lockX = !0),
                (e.drag.lockY = !1),
                "touchmove" == t.type && (e.drag.offsetX = 0)),
            e.drag.lockX && "touchmove" == t.type
              ? (e.drag.offsetX = 0)
              : e.drag.lockY && "touchmove" == t.type && (e.drag.offsetY = 0),
            e.drag.lockY && t.preventDefault(),
            (e.cont.instantX = e.cont.startX + e.drag.offsetX),
            (a =
              e.cont.instantX < 0 &&
              e.cont.instantX > -e.cont.width + e.viewport.width()
                ? e.cont.instantX
                : e.cont.instantX >= 0
                ? e.cont.instantX / 4
                : -e.cont.width +
                  e.viewport.width() +
                  (e.cont.width - e.viewport.width() + e.cont.instantX) / 4),
            e._doDrag(a)),
          e.st.autoPlay.enabled && e.pause();
      },
      _onStop: function (t) {
        var a = this;
        return (
          a.ev.trigger("psOnStop"),
          a.drag.isMoving &&
            ((a.cont.instantX = a.cont.startX + a.drag.offsetX),
            Math.abs(a.drag.offsetX) > a.st.threshold &&
              (a.wrap.$el.addClass("ts-interceptClicks"),
              a.wrap.$el.one("click.preventClick", function (t) {
                t.preventDefault(),
                  t.stopImmediatePropagation(),
                  t.stopPropagation();
              }),
              e.setTimeout(function () {
                a.wrap.$el.off("click.preventClick"),
                  a.wrap.$el.removeClass("ts-interceptClicks");
              }, 301)),
            a._autoAdjust(),
            a._setSliderHeight(),
            (a.cont.startX = 0),
            (a.cont.instantX = 0),
            (a.drag.isMoving = !1),
            (a.drag.startX = 0),
            (a.drag.startY = 0),
            (a.drag.offsetX = 0),
            (a.drag.offsetY = 0),
            (a.drag.lockX = !1),
            (a.drag.lockY = !1)),
          a.st.autoPlay.enabled && a.play(),
          !1
        );
      },
      _doDrag: function (t) {
        var e = this;
        if (e.st.transformEnable)
          if (e.features.css3d) {
            var a = {};
            (a[e.features.vendor + "transform"] =
              "translate3d(" + t + "px,0,0)"),
              (a.transform = "translate3d(" + t + "px,0,0)"),
              (a[e.vendor + "transition"] = ""),
              (a.transition = ""),
              e.cont.$el.css(a);
          } else e.cont.$el.css({ left: t });
      },
      _calcCurrSlide: function (t) {
        var e = this,
          a = e.slides.number - 1;
        return (
          e.slides.$items.each(function (s) {
            if (t > e.slides.position[s]) return (a = s - 1), !1;
          }),
          a < 0 && (a = 0),
          a
        );
      },
      _isRightExceed: function (t) {
        var e = this;
        return (
          t <
          ("centered" === e.st.mode.type
            ? e.slides.position[e.slides.number - 1]
            : -e.cont.width + e.viewport.width())
        );
      },
      _autoAdjust: function () {
        var t,
          e = this,
          a = 0,
          s = e.slides.number - 1;
        if (e.cont.instantX >= 0)
          (a = e.slides.position[0]),
            (e.currSlide = 0),
            (e.lockLeft = !0),
            (e.lockRight = !1),
            e.ev.trigger("lockLeft").trigger("updateNav");
        else if (e._isRightExceed(e.cont.instantX))
          (a =
            "centered" === e.st.mode.type
              ? e.slides.position[e.slides.number - 1]
              : -e.cont.width + e.viewport.width()),
            (e.currSlide = e._calcCurrSlide(a)),
            (e.lockLeft = !1),
            (e.lockRight = !0),
            e.ev.trigger("lockRight").trigger("updateNav");
        else if (e.drag.offsetX < -e.st.threshold) {
          if (
            ((s = e._calcCurrSlide(e.cont.instantX) + 1),
            e._isRightExceed(e.slides.position[s]))
          ) {
            a = -e.cont.width + e.viewport.width();
            for (let t = s; t >= 0; t--)
              if (!e._isRightExceed(e.slides.position[t])) {
                s = t;
                break;
              }
            (e.lockLeft = !1),
              (e.lockRight = !0),
              e.ev.trigger("lockRight").trigger("updateNav");
          } else
            (a = e.slides.position[s]),
              s < e.slides.number - 1
                ? ((e.lockLeft = !1),
                  (e.lockRight = !1),
                  e.ev.trigger("updateNav"))
                : ((e.lockLeft = !1),
                  (e.lockRight = !0),
                  e.ev.trigger("lockRight").trigger("updateNav"));
          e.currSlide = s;
        } else
          e.drag.offsetX > e.st.threshold
            ? ((e.currSlide = e._calcCurrSlide(e.cont.instantX)),
              (a = e.slides.position[e.currSlide]),
              e.currSlide > 0
                ? ((e.lockLeft = !1),
                  (e.lockRight = !1),
                  e.ev.trigger("updateNav"))
                : ((e.lockLeft = !0),
                  (e.lockRight = !1),
                  e.ev.trigger("lockLeft").trigger("updateNav")))
            : (a = e.cont.startX);
        (t = 10 * Math.sqrt(Math.abs(e.cont.instantX - a)) + 100),
          e._transitionStart(a, t, "easeOutSine");
      },
      _transitionStart: function (e, a, s, i) {
        var r = this,
          n = {},
          o = t.rsCSS3Easing[s];
        if ((r._transitionEnd(), r.ev.trigger("beforeTransition"), i))
          return (
            r.st.transformEnable &&
              (r.features.css3d
                ? ((n[r.features.vendor + "transform"] =
                    "translate3d(" + e + "px,0,0)"),
                  (n.transform = "translate3d(" + e + "px,0,0)"))
                : (n.left = e)),
            r.cont.$el.css(n),
            !1
          );
        r.ev.trigger("beforeTransition"),
          (r.sliderLock = !0),
          clearTimeout(r.lockTimeout),
          (r.lockTimeout = setTimeout(function () {
            (r.sliderLock = !1), r.ev.trigger("afterTransition");
          }, a)),
          r.st.transformEnable &&
            (r.features.css3d
              ? ((n[r.features.vendor + "transform"] =
                  "translate3d(" + e + "px,0,0)"),
                (n.transform = "translate3d(" + e + "px,0,0)"),
                (n[r.features.vendor + "transition"] = "all " + a + "ms " + o),
                (n.transition = "all " + a + "ms " + o),
                r.cont.$el.css(n),
                r.cont.$el.one(
                  "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                  function () {}
                ))
              : r.cont.$el.animate({ left: e }, a, s));
      },
      _transitionEnd: function () {
        var t = this;
        if ((t.ev.trigger("psTransitionEnd"), t.st.transformEnable))
          if (t.features.css3d) {
            var e = {};
            (e[t.vendor + "transition"] = ""),
              (e.transition = ""),
              t.cont.$el.css(e);
          } else t.cont.$el.stop();
      },
      _transitionCancel: function () {
        var t = this,
          e = t.cont.$el.position().left,
          a = {};
        ((a[t.vendor + "transition"] = ""),
        (a.transition = ""),
        t.cont.$el.off(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"
        ),
        t.st.transformEnable) &&
          (t.features.css3d
            ? ((e = t.cont.$el.css("transform").split(", ")[4]),
              (a[t.features.vendor + "transform"] =
                "translate3d(" + e + "px,0,0)"),
              (a.transform = "translate3d(" + e + "px,0,0)"),
              t.cont.$el.css(a))
            : (t.cont.$el.stop(),
              t.cont.$el.animate({ left: e }, duration, easing)));
      },
      pause: function () {
        var t = this;
        t.ev.trigger("autoPlayPause"),
          (t._autoPlayRunning = !1),
          t._autoPlayTimeout &&
            (clearTimeout(t._autoPlayTimeout), (t._autoPlayTimeout = null));
      },
      slideTo: function (t, e) {
        var a,
          s = this,
          i = s.slides.position[t],
          r = s.currSlide;
        if ((s.pause(), s.ev.trigger("psBeforeAnimStart"), s.noSlide))
          return !1;
        s._transitionEnd(),
          i >= s.slides.position[0]
            ? ((s.currSlide = 0),
              (s.lockLeft = !0),
              (s.lockRight = !1),
              s.ev.trigger("lockLeft").trigger("updateNav"))
            : s._isRightExceed(i) || t >= s.slides.number - 1
            ? ("centered" === s.st.mode.type
                ? ((i = s.slides.position[t]), (s.currSlide = t))
                : ((i = -s.cont.width + s.viewport.width()),
                  (s.currSlide = s._calcCurrSlide(i))),
              (s.lockLeft = !1),
              (s.lockRight = !0),
              s.ev.trigger("lockRight").trigger("updateNav"))
            : ((s.currSlide = t),
              (s.lockLeft = !1),
              (s.lockRight = !1),
              s.ev.trigger("updateNav")),
          (a = 10 * Math.sqrt(Math.abs(s.slides.position[r] - i)) + 100),
          s._transitionStart(i, a, "easeInOutSine", e),
          s.st.autoPlay.enabled && s.play(),
          s.st.calcAutoHeight && s._setSliderHeight();
      },
      startPlay: function () {
        var t = this;
        t.ev.trigger("autoPlayPlay"),
          t.currSlide + 1 <= t.slides.number - 1 && !t.lockRight
            ? t.slideTo(t.currSlide + 1)
            : ((t.currSlide >= t.slides.number - 1 && t.st.autoPlay.loop) ||
                (t.lockRight && t.st.autoPlay.loop)) &&
              t.slideTo(0);
      },
      play: function () {
        var t = this;
        t.ev.trigger("autoPlayPlay"),
          (t._autoPlayRunning = !0),
          t._autoPlayTimeout && clearTimeout(t._autoPlayTimeout),
          (t._autoPlayTimeout = setTimeout(function () {
            t.startPlay();
          }, t.st.autoPlay.delay));
      },
      slideNext: function () {
        var t = this;
        if (!(t.currSlide + 1 <= t.slides.number - 1)) return !1;
        t.slideTo(t.currSlide + 1);
      },
      slidePrev: function () {
        var t = this;
        if (t.currSlide - 1 >= 0) t.slideTo(t.currSlide - 1);
        else {
          if (0 != t.currSlide || 0 != t.lockLeft) return !1;
          t.slideTo(t.currSlide);
        }
      },
      update: function () {
        var t = this;
        t._calcSliderSize(),
          t._resizeImage(),
          t._setSliderWidth(),
          t._adjustSlides(),
          t._setSliderHeight(),
          t._doDrag(),
          t.noSlide
            ? (t.slideTo(0, !0), t._unbindEvents())
            : (t.slideTo(t.currSlide, !0), t._bindEvents());
      },
    }),
    (t.fn.thePhotoSlider = function (e) {
      return this.each(function () {
        new t.thePhotoSlider(this, e);
      });
    }),
    t(e).on("elementor/frontend/init", function () {
      (dtGlobals.elementorMobile = elementorFrontend.config.breakpoints.sm),
        (dtGlobals.elementorTablet = elementorFrontend.config.breakpoints.md);
    });
  t(".photo-scroller");
  (t.fn.photoSlider = function (s) {
    return this.each(function () {
      var s = t(this),
        l = {},
        h = "";
      ($elParent = s.parents(".photo-scroller")),
        (l.$items = s.children("figure")),
        (l.count = l.$items.length);
      var c = $elParent;
      l.$items.each(function (e) {
        var a = t(this),
          s = a.children().first().remove(),
          i = s.attr("href"),
          r = s.children("img"),
          n = r.attr("src"),
          o = r.attr("alt") || "",
          d = r.attr("data-src"),
          l = (r.attr("data-srcset"), r.attr("class")),
          c = "";
        (r.hasClass("photo-thumb-lazy-load") || r.hasClass("lazy-load")) &&
          (c = "layzr-bg"),
          a.find("figcaption").addClass("caption-" + (e + 1));
        var p = t(this).find("figcaption").clone(!0),
          u = $elParent.attr("data-thumb-space")
            ? parseInt($elParent.attr("data-thumb-space"))
            : 5;
        if (
          (t(".slide-caption").append(p),
          parseInt($elParent.attr("data-thumb-width")) > 0)
        ) {
          var m = parseInt($elParent.attr("data-thumb-width")) + u,
            f = parseInt($elParent.attr("data-thumb-height"));
          $elParent.removeClass("proportional-thumbs");
        } else {
          (m = 2 * parseInt(r.attr("width"))),
            (f = 2 * parseInt(r.attr("height")));
          $elParent.addClass("proportional-thumbs");
        }
        (h =
          h +
          '<div class="ts-cell" data-width="' +
          m +
          '" data-height="' +
          f +
          '"><div class="ts-thumb-img ' +
          c +
          '"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path d="M16,8c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8S16,3.6,16,8z M12,5c-0.3-0.3-0.8-0.3-1.1,0c0,0,0,0,0,0L7.5,9.4L5.4,7.3C5.1,7,4.6,7.1,4.3,7.4c-0.3,0.3-0.3,0.7,0,1L7,11c0.3,0.3,0.8,0.3,1.1,0c0,0,0,0,0,0l4-5C12.3,5.7,12.3,5.3,12,5L12,5z"/></svg><img class=" ' +
          l +
          '" src="' +
          n +
          '" data-src="' +
          d +
          '" data-srcset="' +
          d +
          '" width="' +
          m +
          '" height="' +
          f +
          '" alt="' +
          o +
          '"></div></div>'),
          a.prepend(
            '<div class="ts-slide-img"><img src="' +
              i +
              '" width="' +
              a.attr("data-width") +
              '" height="' +
              a.attr("data-height") +
              '"  alt="' +
              o +
              '"></div>'
          ),
          m > f
            ? $elParent.addClass("wide-thumbnail").find(" .ts-slide-img img")
            : m === f
            ? $elParent.addClass("square-thumbnail")
            : $elParent.addClass("narrow-thumbnail").find(".ts-slide-img img");
      }),
        s.addClass("ts-cont"),
        s.wrap('<div class="ts-wrap"><div class="ts-viewport"></div></div>');
      var p = s.parents(".ts-wrap"),
        u = $elParent,
        m = "true" == u.attr("data-autoslide"),
        f =
          u.attr("data-delay") && parseInt(u.attr("data-delay")) > 999
            ? parseInt(u.attr("data-delay"))
            : 5e3,
        g = "true" === u.attr("data-loop"),
        v =
          u.attr("data-thumb-height") && u.attr("data-thumb-height") > 0
            ? parseInt(u.attr("data-thumb-height"))
            : 80,
        w = u.attr("data-transparency") ? u.attr("data-transparency") : 0.5,
        b = the7Utils.parseIntParam(u.attr("data-ls-min")),
        C = the7Utils.parseIntParam(u.attr("data-ls-max"), 100),
        S = the7Utils.parseParam(u.attr("data-ls-fill-dt"), "fill"),
        P = the7Utils.parseParam(u.attr("data-ls-fill-tablet"), S),
        y = the7Utils.parseParam(u.attr("data-ls-fill-mob"), "fit"),
        k = the7Utils.parseIntParam(u.attr("data-pt-min")),
        $ = the7Utils.parseIntParam(u.attr("data-pt-max"), 100),
        M = the7Utils.parseParam(u.attr("data-pt-fill-dt"), "fill"),
        T = the7Utils.parseParam(u.attr("data-pt-fill-tablet"), M),
        x = the7Utils.parseParam(u.attr("data-pt-fill-mob"), "fit"),
        W = "true" == u.attr("data-show-thumbnails"),
        _ = 700;
      u.parents().hasClass("elementor-widget-the7_photo-scroller") &&
        (_ =
          e.innerWidth <= elementorFrontendConfig.breakpoints.md
            ? elementorFrontendConfig.breakpoints.md
            : 0),
        void 0 === u.attr("data-show-thumbnails") && (W = !0);
      var I = "true" === u.attr("data-arrows");
      if ((void 0 === u.attr("data-arrows") && (I = !0), I)) {
        u.attr("data-prev-icon"), u.attr("data-next-icon");
        u.parent().hasClass("elementor-widget-container") ||
          $elParent.append(
            '<div class="scroller-arrow prev"><i></i><i></i></div><div class="scroller-arrow next"><i></i><i></i></div>'
          );
      }
      p
        .addClass("ts-ls-" + S)
        .addClass("ts-ls-tb-" + P)
        .addClass("ts-ls-mob-" + y),
        p
          .addClass("ts-pt-" + M)
          .addClass("ts-pt-tb-" + T)
          .addClass("ts-pt-mob-" + x),
        p.find(".ts-slide-img, .album-content-description").css({ opacity: w }),
        p.find(".video-icon").css({ opacity: w });
      var L = the7Utils.parseIntParam(u.attr("data-m-ls-min")),
        F = the7Utils.parseIntParam(u.attr("data-m-ls-max"), 100),
        R = the7Utils.parseIntParam(u.attr("data-t-ls-min")),
        X = the7Utils.parseIntParam(u.attr("data-t-ls-max"), 100),
        z = the7Utils.parseIntParam(u.attr("data-m-pt-min")),
        E = the7Utils.parseIntParam(u.attr("data-m-pt-max"), 100),
        U = the7Utils.parseIntParam(u.attr("data-t-pt-min")),
        N = the7Utils.parseIntParam(u.attr("data-t-pt-max"), 100),
        Y = p.find(".ts-viewport"),
        H = the7Utils.parseIntParam(u.attr("data-m-padding-side")),
        A = the7Utils.parseIntParam(u.attr("data-m-padding-left")),
        q = the7Utils.parseIntParam(u.attr("data-t-padding-side")),
        O = the7Utils.parseIntParam(u.attr("data-t-padding-left")),
        G = 0,
        D = 0,
        j = the7Utils.parseIntParam(u.attr("data-padding-side")),
        V = the7Utils.parseIntParam(u.attr("data-padding-left")),
        B = 0;
      function Q() {
        u.parents().hasClass("elementor-widget-the7_photo-scroller")
          ? e.innerWidth <= elementorFrontendConfig.breakpoints.sm
            ? ((G = the7Utils.parseIntParam(u.attr("data-m-padding-top"))),
              (D = the7Utils.parseIntParam(u.attr("data-m-padding-bottom"))))
            : e.innerWidth > elementorFrontendConfig.breakpoints.sm &&
              e.innerWidth <= elementorFrontendConfig.breakpoints.md
            ? ((G = the7Utils.parseIntParam(u.attr("data-t-padding-top"))),
              (D = the7Utils.parseIntParam(u.attr("data-t-padding-bottom"))))
            : ((G = the7Utils.parseIntParam(u.attr("data-padding-top"))),
              (D = the7Utils.parseIntParam(u.attr("data-padding-bottom"))))
          : ((G =
              u.attr("data-padding-top") && r.width() > 760
                ? u.attr("data-padding-top")
                : 0),
            (D =
              u.attr("data-padding-bottom") && r.width() > 760
                ? u.attr("data-padding-bottom")
                : 0)),
          Y.css({ "margin-top": G + "px", "margin-bottom": D + "px" });
      }
      void 0 !== u.attr("data-thumb-position") &&
        "outside" == u.attr("data-thumb-position") &&
        e.innerWidth > 760 &&
        (B = v),
        Q(),
        r.on("debouncedresize", function () {
          if (u.parents().hasClass("elementor-widget-the7_photo-scroller"))
            e.innerWidth <= elementorFrontendConfig.breakpoints.md &&
              elementorFrontendConfig.breakpoints.md;
          Q();
        });
      var J = p
        .thePhotoSlider({
          mode: {
            type: "centered",
            lsMinW: b,
            lsMaxW: C,
            lsTabMinW: R,
            lsTabMaxW: X,
            lsMobMinW: L,
            lsMobMaxW: F,
            ptMinW: k,
            ptMaxW: $,
            ptTabMinW: U,
            ptTabMaxW: N,
            ptMobMinW: z,
            ptMobMaxW: E,
          },
          collapsePoint: _,
          height: function () {
            if (
              void 0 !== u.attr("data-mobile-height") &&
              u.attr("data-mobile-height") > 0 &&
              !p.parents(".photo-scroller").hasClass("full-screen") &&
              e.innerWidth <= elementorFrontendConfig.breakpoints.sm
            )
              return (
                !!u.attr("data-mobile-height") &&
                parseInt(u.attr("data-mobile-height")) - G - D
              );
            if (
              void 0 !== u.attr("data-tablet-height") &&
              u.attr("data-tablet-height") > 0 &&
              !p.parents(".photo-scroller").hasClass("full-screen") &&
              e.innerWidth > elementorFrontendConfig.breakpoints.sm &&
              e.innerWidth <= elementorFrontendConfig.breakpoints.md
            )
              return (
                !!u.attr("data-tablet-height") &&
                parseInt(u.attr("data-tablet-height")) - G - D
              );
            if (
              void 0 !== u.attr("data-height") &&
              u.attr("data-height") > 0 &&
              !p.parents(".photo-scroller").hasClass("full-screen") &&
              e.innerWidth > elementorFrontendConfig.breakpoints.md
            )
              return (
                !!u.attr("data-height") &&
                parseInt(u.attr("data-height")) - G - D
              );
            var a = e.innerHeight,
              s = t("#wpadminbar").height() ? t("#wpadminbar").height() : 0;
            if (
              t(".mixed-header").length > 0 &&
              !$elParent.hasClass("full-screen")
            )
              var r = t(".mixed-header").height();
            else if ($elParent.hasClass("full-screen")) r = 0;
            else var r = t(".masthead").height();
            if (p.parents(".photo-scroller").hasClass("full-screen")) s = 0;
            var n = a - G - D - s,
              o = a - G - D - s - B;
            return i.hasClass("transparent") ||
              p.parents(".photo-scroller").hasClass("full-screen") ||
              p.parents(".photo-scroller").hasClass("fullscreen-on")
              ? (p
                  .parents(".photo-scroller")
                  .hasClass("elementor-widget-the7_photo-scroller") &&
                  e.innerWidth <= elementorFrontendConfig.breakpoints.sm) ||
                (p
                  .parents(".photo-scroller")
                  .hasClass("elementor-widget-the7_photo-scroller") &&
                  e.innerWidth > elementorFrontendConfig.breakpoints.sm &&
                  e.innerWidth <= elementorFrontendConfig.breakpoints.md) ||
                e.innerWidth <
                  dtLocal.themeSettings.mobileHeader.secondSwitchPoint
                ? n
                : o
              : t(".mixed-header").length > 0 ||
                p.parents(".photo-scroller").hasClass("full-screen")
              ? (e.innerWidth <
                  dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                  !i.hasClass("responsive-off")) ||
                t(".side-header-h-stroke").length > 0
                ? o - r
                : o
              : t(".side-header").length > 0 ||
                p.parents(".photo-scroller").hasClass("full-screen")
              ? e.innerWidth <
                  dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                !i.hasClass("responsive-off")
                ? o - r
                : o
              : o - r;
          },
          sidePaddings: j,
          sideTabPaddings: q,
          sideMobPaddings: H,
          paddingLeft: V,
          TabpaddingLeft: O,
          MobpaddingLeft: A,
          autoPlay: { enabled: m, delay: f, loop: g },
        })
        .data("thePhotoSlider");
      if (W) {
        var K = t(
          '<div class="ts-wrap"><div class="ts-viewport"><div class="ts-cont ts-thumbs">' +
            h +
            "</div></div></div>"
        );
        p.after(K);
        var Z = K.thePhotoSlider({
          mode: { type: "scroller" },
          height: v,
        }).data("thePhotoSlider");
      }
      if (
        (t(".prev", c).click(function () {
          J.noSlide || J.slidePrev();
        }),
        t(".next", c).click(function () {
          J.noSlide || J.slideNext();
        }),
        J.ev.on("updateNav sliderReady", function () {
          J.lockRight
            ? t(".next", $elParent).addClass("disabled")
            : t(".next", $elParent).removeClass("disabled"),
            J.lockLeft
              ? t(".prev", $elParent).addClass("disabled")
              : t(".prev", $elParent).removeClass("disabled");
        }),
        navigator.userAgent.match(/Trident.*rv\:11\./) && o && n)
      ) {
        var tt = d.attr("style");
        d.attr("style", tt + "; top:" + J.wrap.height + "px !important;");
      }
      if (
        (o &&
          !navigator.userAgent.match(/Trident.*rv\:11\./) &&
          ("function" == typeof dtGlobals.resetSizes &&
            dtGlobals.resetSizes(J.wrap.height),
          "function" == typeof dtGlobals.resetMobileSizes &&
            dtGlobals.resetMobileSizes(J.wrap.height)),
        e.addEventListener(
          "keydown",
          function (t) {
            "37" == t.keyCode
              ? J.noSlide || J.slidePrev()
              : "39" == t.keyCode && (J.noSlide || J.slideNext());
          },
          !1
        ),
        J.ev.on("sliderReady beforeTransition", function () {
          J.slides.$items.removeClass("act"),
            J.slides.$items.eq(J.currSlide).addClass("act"),
            W &&
              (Z.slides.$items.removeClass("act"),
              Z.slides.$items.eq(J.currSlide).addClass("act")),
            J.slides.$items.eq(J.currSlide).hasClass("ts-video") ||
            J.slides.$items.eq(J.currSlide).find(".ps-link").length > 0
              ? J.slides.$items
                  .parents(".ts-wrap ")
                  .addClass("hide-slider-overlay")
              : J.slides.$items
                  .parents(".ts-wrap ")
                  .removeClass("hide-slider-overlay");
          var e = J.slides.$items
            .eq(J.currSlide)
            .find("figcaption")
            .attr("class");
          t(".slide-caption > figcaption").removeClass("actCaption"),
            t(".slide-caption > ." + e).addClass("actCaption");
        }),
        !0 === W &&
          (J.ev.on("afterTransition", function () {
            var t = -Z._unifiedX(),
              e = t + Z.wrap.width,
              a = -Z.slides.position[J.currSlide],
              s = a + Z.slides.width[J.currSlide];
            if (((s += 50), (a -= 50) < t))
              for (let t = Z.currSlide; t >= 0; t--) {
                if (
                  ((a += 50), (s -= 50) > -Z.slides.position[t] + Z.wrap.width)
                ) {
                  Z.slideTo(t + 1);
                  break;
                }
                0 === t && Z.slideTo(0);
              }
            else s > e && Z.slideTo(J.currSlide);
          }),
          K.addClass("scroller-thumbnails"),
          Z.slides.$items.each(function (e) {
            t(this).on("click", function (a) {
              t(this).parents(".ts-wrap").hasClass("ts-interceptClicks") ||
                J.slideTo(e);
            });
          }),
          K.find(".photo-thumb-lazy-load")
            .removeClass("photo-thumb-lazy-load")
            .addClass("lazy-load"),
          K.layzrInitialisation()),
        J.slides.$items.each(function (e) {
          t(this).on("click", function (a) {
            t(this).parents(".ts-wrap").hasClass("ts-interceptClicks") ||
              J.slideTo(e);
          });
        }),
        J.st.autoPlay.enabled &&
          (t(".auto-play-btn", c).addClass("paused"),
          "true" == u.attr("data-play-on-hover") &&
            (u.on("mouseenter tap", function (e) {
              t(".auto-play-btn", c).hasClass("paused") &&
                (J.noSlide || J.pause(), (J.st.autoPlay.enabled = !1));
            }),
            u.on("mouseleave", function (e) {
              t(".auto-play-btn", c).hasClass("paused") &&
                (J.noSlide || J.play(), (J.st.autoPlay.enabled = !0));
            }))),
        t(".auto-play-btn", c).on("click", function (e) {
          e.preventDefault();
          var a = t(this);
          a.hasClass("paused")
            ? (a.removeClass("paused"),
              J.noSlide || J.pause(),
              (J.st.autoPlay.enabled = !1))
            : (a.addClass("paused"),
              J.noSlide || J.play(),
              (J.st.autoPlay.enabled = !0));
        }),
        t(".hide-thumb-btn", $elParent).on("click", function (e) {
          e.preventDefault();
          var a = t(this),
            s = a.parents(".photo-scroller"),
            i = s.attr("data-thumb-padding-top")
              ? parseInt(s.attr("data-thumb-padding-top"))
              : 5,
            r = s.attr("data-thumb-padding-bottom")
              ? parseInt(s.attr("data-thumb-padding-bottom"))
              : 5,
            n = s.attr("data-cntr-space-bottom")
              ? parseInt(s.attr("data-cntr-space-bottom"))
              : 5;
          a.hasClass("act")
            ? (a.removeClass("act"),
              s.removeClass("hide-thumbs"),
              t(".scroller-thumbnails", s).css({ bottom: 0 }),
              t(".btn-cntr, .slide-caption", s).css({
                bottom: parseInt(s.attr("data-thumb-height")) + i + r + n,
              }))
            : (a.addClass("act"),
              s.addClass("hide-thumbs"),
              t(".scroller-thumbnails", s).css({
                bottom: -(parseInt(s.attr("data-thumb-height")) + 20),
              }),
              t(".btn-cntr, .slide-caption", s).css({ bottom: n + "px" }));
        }),
        !dtGlobals.isWindowsPhone)
      ) {
        var et = t(".full-screen-btn", $elParent);
        et.each(function () {
          var e = t(this),
            s = e.parents(".photo-scroller"),
            i = s.find(".ts-wrap");
          a.addEventListener(
            "fullscreenchange",
            function () {
              if (!a.fullscreen) {
                e.removeClass("act"),
                  s.removeClass("full-screen"),
                  t("body, html").css("overflow", "");
                var r = i.data("thePhotoSlider");
                void 0 !== r &&
                  setTimeout(function () {
                    r.update();
                  }, 500);
              }
            },
            !1
          ),
            a.addEventListener(
              "mozfullscreenchange",
              function () {
                a.mozFullScreen ||
                  (e.removeClass("act"),
                  s.removeClass("full-screen"),
                  t("body, html").css("overflow", ""));
              },
              !1
            ),
            a.addEventListener(
              "webkitfullscreenchange",
              function () {
                if (!a.webkitIsFullScreen) {
                  e.removeClass("act"),
                    s.removeClass("full-screen"),
                    t("body, html").css("overflow", "");
                  var r = i.data("thePhotoSlider");
                  void 0 !== r &&
                    setTimeout(function () {
                      r.update();
                    }, 500);
                }
              },
              !1
            ),
            r.on("debouncedresize", function () {
              var e = t(this).find(".ts-wrap").data("thePhotoSlider");
              void 0 !== e &&
                setTimeout(function () {
                  e.update();
                }, 500);
            });
        }),
          et.on("click", function (s) {
            s.preventDefault();
            var i,
              r = t(this),
              n = r.parents(".photo-scroller"),
              o = n.find(".ts-wrap");
            n.find(".scroller-thumbnails").data("thePhotoSlider"),
              o.data("thePhotoSlider");
            void 0 !== n.attr("data-thumb-position") &&
              "outside" == n.attr("data-thumb-position") &&
              e.innerWidth > 760 &&
              n.find(".scroller-thumbnails").height(),
              r
                .parents(".photo-scroller")
                .find("figure")
                .animate({ opacity: 0 }, 150),
              r.hasClass("act")
                ? (r.removeClass("act"),
                  a.exitFullscreen
                    ? a.exitFullscreen()
                    : a.mozCancelFullScreen
                    ? a.mozCancelFullScreen()
                    : a.webkitExitFullscreen && a.webkitExitFullscreen(),
                  n.removeClass("full-screen"),
                  t("body, html").css({ overflow: "", height: "" }),
                  setTimeout(function () {
                    r.parents(".photo-scroller")
                      .find("figure")
                      .delay(600)
                      .animate({ opacity: 1 }, 300);
                  }, 300))
                : (r.addClass("act"),
                  n.addClass("full-screen"),
                  (i = a.documentElement).requestFullscreen
                    ? i.requestFullscreen()
                    : i.mozRequestFullScreen
                    ? i.mozRequestFullScreen()
                    : i.webkitRequestFullscreen
                    ? i.webkitRequestFullscreen()
                    : i.msRequestFullscreen && i.msRequestFullscreen(),
                  t("body, html").css({ height: "100%", overflow: "hidden" }),
                  setTimeout(function () {
                    r.parents(".photo-scroller")
                      .find("figure")
                      .delay(600)
                      .animate({ opacity: 1 }, 300);
                  }, 300));
            var d = o.data("thePhotoSlider");
            void 0 !== d &&
              setTimeout(function () {
                d.update();
              }, 500);
          });
      }
      var at = $elParent.attr("data-thumb-padding-top")
          ? parseInt($elParent.attr("data-thumb-padding-top"))
          : 5,
        st = $elParent.attr("data-thumb-padding-bottom")
          ? parseInt($elParent.attr("data-thumb-padding-bottom"))
          : 5,
        it = $elParent.attr("data-cntr-space-bottom")
          ? parseInt($elParent.attr("data-cntr-space-bottom"))
          : 5;
      t(".btn-cntr, .slide-caption", $elParent).css({
        bottom: parseInt($elParent.attr("data-thumb-height")) + at + st + it,
      }),
        $elParent.hasClass("hide-thumbs") &&
          ($elParent.find(".hide-thumb-btn").addClass("act"),
          t(".scroller-thumbnails", $elParent).css({
            bottom: -(parseInt($elParent.attr("data-thumb-height")) + 20),
          }),
          t(".btn-cntr, .slide-caption", $elParent).css({ bottom: it + "px" })),
        $elParent.css("visibility", "visible");
    });
  }),
    jQuery(a).ready(function (t) {
      t(".photoSlider:not(.slider-simple)").photoSlider(),
        r.on("debouncedresize", function () {
          t(".elementor-widget-the7_photo-scroller, .photo-scroller").each(
            function () {
              var e = t(this)
                .find(".ts-wrap:not(.scroller-thumbnails)")
                .data("thePhotoSlider");
              void 0 !== e &&
                setTimeout(function () {
                  e.update();
                }, 500);
            }
          );
        });
      var e = t(".rsHomePorthole");
      if (e.exists()) {
        var a = {};
        (a.container = t("#main-slideshow")),
          (a.hendheld = !!(r.width() < 740 && dtGlobals.isMobile)),
          t("#main-slideshow-content").appendTo(a.container),
          (t.fn.portholeScroller = function () {
            var e = t(this),
              a = {},
              s = "";
            (a.$items = e.children("li")),
              (a.count = a.$items.length),
              a.$items.each(function (e) {
                var a = t(this).children("img"),
                  i = a.attr("data-rstmb"),
                  r = a.attr("alt") || "",
                  n =
                    (a.attr("data-src"),
                    a.attr("data-srcset"),
                    a.attr("class")),
                  o = "";
                a.hasClass("lazy-load") && (o = "layzr-bg"),
                  (s =
                    s +
                    '<div class="ps-thumb-img ' +
                    o +
                    '"><img class=" ' +
                    n +
                    '" src="' +
                    i +
                    '"  width="150" height="150" alt="' +
                    r +
                    '"></div>');
              }),
              e.addClass("ts-cont"),
              e.wrap(
                '<div class="ts-wrap"><div class="ts-viewport portholeSlider-wrap"></div></div>'
              );
            var i = e.parents(".ts-wrap"),
              l = e.parents("#main-slideshow"),
              h = !(
                "true" == l.attr("data-paused") ||
                void 0 === l.attr("data-autoslide") ||
                (r.width() < 740 && dtGlobals.isMobile)
              ),
              c =
                l.attr("data-autoslide") &&
                parseInt(l.attr("data-autoslide")) > 999
                  ? parseInt(l.attr("data-autoslide"))
                  : 5e3,
              p = void 0 !== l.attr("data-autoslide"),
              u = the7Utils.parseIntParam(l.attr("data-width"), 800),
              m = the7Utils.parseIntParam(l.attr("data-height"), 400),
              f = the7Utils.parseParam(l.attr("data-scale"), "none"),
              g = i
                .thePhotoSlider({
                  mode: { type: "slider" },
                  height: m,
                  width: u,
                  resizeImg: !0,
                  imageScaleMode: f,
                  imageAlignCenter: !0,
                  autoPlay: { enabled: h, delay: c, loop: p },
                })
                .data("thePhotoSlider"),
              v = t(
                '<div class="psThumbs"><div class="psThumbsContainer">' +
                  s +
                  "</div></div>"
              );
            i.append(v);
            var w = t(".ps-thumb-img ");
            w.each(function (e) {
              t(this).on("click", function (a) {
                t(this);
                g.slideTo(e);
              });
            });
            var b,
              C = t(".psThumbsContainer");
            if (
              (C.after(
                '<div class="progress-wrapper"><div class="progress-controls"></div></div>'
              ),
              ($progressWrap = C.next()),
              ($progressHtml =
                '<div class="progress-mask"><div class="progress-spinner-left" style="animation-duration: ' +
                c +
                'ms;"></div></div><div class="progress-mask"><div class="progress-spinner-right" style="animation-duration: ' +
                c +
                'ms;"></div></div>'),
              g.st.autoPlay.enabled &&
                $progressWrap.find(".progress-mask").length < 1 &&
                $progressWrap.prepend($progressHtml),
              g.ev.on("autoPlayPlay", function () {
                $progressWrap.find(".progress-mask").length < 1 &&
                  $progressWrap.prepend($progressHtml),
                  $progressWrap.removeClass("paused");
              }),
              g.ev.on("autoPlayPause", function () {
                $progressWrap.find(".progress-mask").remove(),
                  h || $progressWrap.addClass("paused");
              }),
              g.ev.on("sliderReady beforeTransition", function () {
                var e = 40 * -g.currSlide;
                0 === e && (e = 20),
                  w.removeClass("psNavSelected psNavPrev psNavNext psNavVis"),
                  w.eq(g.currSlide).addClass("psNavSelected"),
                  w.eq(g.currSlide).prev().addClass("psNavPrev"),
                  w.eq(g.currSlide).next().addClass("psNavNext"),
                  w.eq(g.currSlide).prev().prev().addClass("psNavVis"),
                  w.eq(g.currSlide).next().next().addClass("psNavVis"),
                  t(".psThumbsContainer").css({
                    transform: "translateY(" + e + "px)",
                  });
              }),
              g.ev.on("sliderReady beforeTransition", function () {
                $progressWrap.addClass("blurred");
              }),
              g.ev.on("sliderReady afterTransition", function () {
                $progressWrap.removeClass("blurred");
              }),
              r.on("resize", function () {
                clearTimeout(b),
                  (b = setTimeout(function () {
                    $progressWrap.removeClass("blurred");
                  }, 200));
              }),
              navigator.userAgent.match(/Trident.*rv\:11\./) && o && n)
            ) {
              var S = d.attr("style");
              d.attr("style", S + "; top:" + g.wrap.height + "px !important;");
            }
            o &&
              !navigator.userAgent.match(/Trident.*rv\:11\./) &&
              (the7Utils.isFunction(dtGlobals.resetSizes) &&
                dtGlobals.resetSizes(g.wrap.height),
              the7Utils.isFunction(dtGlobals.resetMobileSizes) &&
                dtGlobals.resetMobileSizes(g.wrap.height)),
              t(
                '<div class="leftArrow"></div><div class="rightArrow"></div>'
              ).insertAfter(e),
              t(".leftArrow", i).click(function () {
                g.noSlide || g.slidePrev();
              }),
              t(".rightArrow", i).click(function () {
                g.noSlide || g.slideNext();
              }),
              g.ev.on("updateNav sliderReady", function () {
                g.lockRight
                  ? t(".rightArrow", i).addClass("disabled")
                  : t(".rightArrow", i).removeClass("disabled"),
                  g.lockLeft
                    ? t(".leftArrow", i).addClass("disabled")
                    : t(".leftArrow", i).removeClass("disabled"),
                  g.lockRight && g.lockLeft && l.addClass("hide-arrows");
              }),
              "true" === l.attr("data-paused") &&
                $progressWrap.addClass("paused"),
              $progressWrap.on("click", function (e) {
                e.preventDefault();
                var a = t(this);
                a.hasClass("paused")
                  ? (a.removeClass("paused"),
                    $progressWrap.find(".progress-mask").length < 1 &&
                      $progressWrap.prepend($progressHtml),
                    g.noSlide || g.play(),
                    (g.st.autoPlay.enabled = !0))
                  : (a.addClass("paused"),
                    g.noSlide || g.pause(),
                    (g.st.autoPlay.enabled = !1),
                    $progressWrap.find(".progress-mask").remove());
              });
          }),
          e.portholeScroller(),
          e.css("visibility", "visible"),
          t(".ts-wrap .dt-pswp-item").each(function () {
            t(this)
              .parents()
              .removeClass("photoswipe-wrapper")
              .parents("li")
              .addClass("photoswipe-wrapper");
          });
      }
    });
})(jQuery, window, document);
