function Layzr(t) {
  (this._lastScroll = 0),
    (this._ticking = !1),
    (t = t || {}),
    (this._optionsContainer = document.querySelector(t.container) || window),
    (this._optionsSelector = t.selector || "[data-layzr]"),
    (this._optionsAttr = t.attr || "data-layzr"),
    (this._optionsAttrSrcSet = t.attrSrcSet || "data-layzr-srcset"),
    (this._optionsAttrRetina = t.retinaAttr || "data-layzr-retina"),
    (this._optionsAttrBg = t.bgAttr || "data-layzr-bg"),
    (this._optionsAttrHidden = t.hiddenAttr || "data-layzr-hidden"),
    (this._optionsThreshold = t.threshold || 0),
    (this._optionsBefore = t.before || null),
    (this._optionsAfter = t.after || null),
    (this._optionsCallback = t.callback || null),
    (this._optionsIsloadedClass = t.isloadedClass || "is-loaded"),
    (this._optionsIsloadingClass = t.isloadingClass || "is-loading"),
    (this._retina = window.devicePixelRatio > 1),
    (this._srcAttr = this._retina
      ? this._optionsAttrRetina
      : this._optionsAttr),
    this.updateSelector(),
    (this._handlerBind = this._requestScroll.bind(this)),
    this._create();
}
function simple_tooltip(t, e) {
  jQuery(t).each(function (t) {
    jQuery("body").append(
      "<div class='" +
        e +
        "' id='" +
        e +
        t +
        "'>" +
        jQuery(this).find("span.tooltip-c").html() +
        "</div>"
    );
    var i = jQuery("#" + e + t);
    jQuery(this)
      .removeAttr("title")
      .mouseover(function () {
        i.css({ opacity: 1, display: "none" }).fadeIn(400);
      })
      .mousemove(function (t) {
        var e,
          s,
          n = jQuery(window).scrollTop(),
          o = jQuery(window).width(),
          a = 15;
        (e = o - 30 >= i.width() + t.pageX ? t.pageX + a : o - i.width() - a),
          (s =
            n + 30 >= t.pageY - i.height() ? n + a : t.pageY - i.height() - 33),
          i.css({ left: e, top: s });
      })
      .mouseout(function () {
        i.css({ left: "-9999px" });
      });
  });
}
/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */ !(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return t(e);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (exports = t(require("jquery")))
    : t(jQuery);
})(function (t) {
  t.easing.jswing = t.easing.swing;
  var e = Math.pow,
    i = Math.sqrt,
    s = Math.sin,
    n = Math.cos,
    o = Math.PI,
    a = 1.70158,
    r = 1.525 * a,
    l = a + 1,
    d = (2 * o) / 3,
    c = (2 * o) / 4.5;
  function h(t) {
    var e = 7.5625,
      i = 2.75;
    return t < 1 / i
      ? e * t * t
      : t < 2 / i
      ? e * (t -= 1.5 / i) * t + 0.75
      : t < 2.5 / i
      ? e * (t -= 2.25 / i) * t + 0.9375
      : e * (t -= 2.625 / i) * t + 0.984375;
  }
  t.extend(t.easing, {
    def: "easeOutQuad",
    swing: function (e) {
      return t.easing[t.easing.def](e);
    },
    easeInQuad: function (t) {
      return t * t;
    },
    easeOutQuad: function (t) {
      return 1 - (1 - t) * (1 - t);
    },
    easeInOutQuad: function (t) {
      return t < 0.5 ? 2 * t * t : 1 - e(-2 * t + 2, 2) / 2;
    },
    easeInCubic: function (t) {
      return t * t * t;
    },
    easeOutCubic: function (t) {
      return 1 - e(1 - t, 3);
    },
    easeInOutCubic: function (t) {
      return t < 0.5 ? 4 * t * t * t : 1 - e(-2 * t + 2, 3) / 2;
    },
    easeInQuart: function (t) {
      return t * t * t * t;
    },
    easeOutQuart: function (t) {
      return 1 - e(1 - t, 4);
    },
    easeInOutQuart: function (t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - e(-2 * t + 2, 4) / 2;
    },
    easeInQuint: function (t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function (t) {
      return 1 - e(1 - t, 5);
    },
    easeInOutQuint: function (t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 - e(-2 * t + 2, 5) / 2;
    },
    easeInSine: function (t) {
      return 1 - n((t * o) / 2);
    },
    easeOutSine: function (t) {
      return s((t * o) / 2);
    },
    easeInOutSine: function (t) {
      return -(n(o * t) - 1) / 2;
    },
    easeInExpo: function (t) {
      return 0 === t ? 0 : e(2, 10 * t - 10);
    },
    easeOutExpo: function (t) {
      return 1 === t ? 1 : 1 - e(2, -10 * t);
    },
    easeInOutExpo: function (t) {
      return 0 === t
        ? 0
        : 1 === t
        ? 1
        : t < 0.5
        ? e(2, 20 * t - 10) / 2
        : (2 - e(2, -20 * t + 10)) / 2;
    },
    easeInCirc: function (t) {
      return 1 - i(1 - e(t, 2));
    },
    easeOutCirc: function (t) {
      return i(1 - e(t - 1, 2));
    },
    easeInOutCirc: function (t) {
      return t < 0.5
        ? (1 - i(1 - e(2 * t, 2))) / 2
        : (i(1 - e(-2 * t + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (t) {
      return 0 === t
        ? 0
        : 1 === t
        ? 1
        : -e(2, 10 * t - 10) * s((10 * t - 10.75) * d);
    },
    easeOutElastic: function (t) {
      return 0 === t
        ? 0
        : 1 === t
        ? 1
        : e(2, -10 * t) * s((10 * t - 0.75) * d) + 1;
    },
    easeInOutElastic: function (t) {
      return 0 === t
        ? 0
        : 1 === t
        ? 1
        : t < 0.5
        ? (-e(2, 20 * t - 10) * s((20 * t - 11.125) * c)) / 2
        : (e(2, -20 * t + 10) * s((20 * t - 11.125) * c)) / 2 + 1;
    },
    easeInBack: function (t) {
      return l * t * t * t - a * t * t;
    },
    easeOutBack: function (t) {
      return 1 + l * e(t - 1, 3) + a * e(t - 1, 2);
    },
    easeInOutBack: function (t) {
      return t < 0.5
        ? (e(2 * t, 2) * (7.189819 * t - r)) / 2
        : (e(2 * t - 2, 2) * ((r + 1) * (2 * t - 2) + r) + 2) / 2;
    },
    easeInBounce: function (t) {
      return 1 - h(1 - t);
    },
    easeOutBounce: h,
    easeInOutBounce: function (t) {
      return t < 0.5 ? (1 - h(1 - 2 * t)) / 2 : (1 + h(2 * t - 1)) / 2;
    },
  });
}),
  (The7Scroll = (function () {
    var t, e, i;
    function s(s) {
      i = 0;
      const a = {
        root: (e = s).root || null,
        rootMargin: e.offset || "0px",
        threshold: o(e.sensitivity),
      };
      t = new IntersectionObserver(n, a);
    }
    function n(t) {
      const s = t[0].boundingClientRect.y,
        n = t[0].isIntersecting,
        o = s < i ? "down" : "up",
        a = Math.abs(parseFloat((100 * t[0].intersectionRatio).toFixed(2)));
      e.callback({
        sensitivity: e.sensitivity,
        isInViewport: n,
        scrollPercentage: a,
        intersectionScrollDirection: o,
      }),
        (i = s);
    }
    function o(t = 0) {
      const e = [];
      if (t > 0 && t <= 100) {
        const i = 100 / t;
        for (let t = 0; t <= 100; t += i) e.push(t / 100);
      } else e.push(0);
      return e;
    }
    return (
      (s.prototype.getScrollObserver = function () {
        return t;
      }),
      s
    );
  })()),
  (function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0;
      i < e.length && !window.requestAnimationFrame;
      ++i
    )
      (window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[e[i] + "CancelAnimationFrame"] ||
          window[e[i] + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (e, i) {
        var s = new Date().getTime(),
          n = Math.max(0, 16 - (s - t)),
          o = window.setTimeout(function () {
            e(s + n);
          }, n);
        return (t = s + n), o;
      }),
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function (t) {
          clearTimeout(t);
        });
  })(),
  (Layzr.prototype._requestScroll = function () {
    this._optionsContainer === window
      ? (this._lastScroll = window.pageYOffset)
      : (this._lastScroll =
          this._optionsContainer.scrollTop +
          this._getOffset(this._optionsContainer)),
      this._requestTick();
  }),
  (Layzr.prototype._requestTick = function () {
    this._ticking ||
      (requestAnimationFrame(this.update.bind(this)), (this._ticking = !0));
  }),
  (Layzr.prototype._getOffset = function (t) {
    return t.getBoundingClientRect().top + window.pageYOffset;
  }),
  (Layzr.prototype._getContainerHeight = function () {
    return (
      this._optionsContainer.innerHeight || this._optionsContainer.offsetHeight
    );
  }),
  (Layzr.prototype._create = function () {
    this._handlerBind(),
      this._optionsContainer.addEventListener("scroll", this._handlerBind, !1),
      this._optionsContainer.addEventListener("resize", this._handlerBind, !1);
  }),
  (Layzr.prototype._destroy = function () {
    this._optionsContainer.removeEventListener("scroll", this._handlerBind, !1),
      this._optionsContainer.removeEventListener(
        "resize",
        this._handlerBind,
        !1
      );
  }),
  (Layzr.prototype._inViewport = function (t) {
    if (null == t.offsetParent) return !1;
    var e = this._lastScroll,
      i = e + this._getContainerHeight(),
      s = this._getOffset(t),
      n = s + this._getContainerHeight(),
      o = (this._optionsThreshold / 100) * window.innerHeight;
    return n >= e - o && s <= i + o && !t.hasAttribute(this._optionsAttrHidden);
  }),
  (Layzr.prototype._reveal = function (t) {
    var e = t.getAttribute(this._srcAttr) || t.getAttribute(this._optionsAttr),
      i = this,
      s = this._optionsIsloadedClass,
      n = this._optionsIsloadingClass;
    "function" == typeof this._optionsCallback &&
      (t.addEventListener
        ? t.addEventListener("load", function () {
            i._optionsCallback.call(t),
              (i._nodes = i._nodes.filter((e) => e !== t)),
              t.classList.add(s),
              t.classList.remove(n);
          })
        : t.attachEvent("onload", function () {
            i._optionsCallback.call(t),
              (i._nodes = i._nodes.filter((e) => e !== t)),
              t.classList.add(s),
              t.classList.remove(n);
          }));
    "function" == typeof this._optionsBefore && this._optionsBefore.call(t);
    var o = !1;
    t.hasAttribute(this._optionsAttrBg)
      ? ((t.style.backgroundImage = "url(" + e + ")"), (o = !0))
      : (e && (t.removeAttribute("src"), t.setAttribute("src", e), (o = !0)),
        t.hasAttribute(this._optionsAttrSrcSet) &&
          (t.setAttribute("srcset", t.getAttribute(this._optionsAttrSrcSet)),
          (o = !0))),
      o && t.classList.add(n),
      "function" == typeof this._optionsAfter && this._optionsAfter.call(t),
      t.removeAttribute(this._optionsAttr),
      t.removeAttribute(this._optionsAttrSrcSet),
      t.removeAttribute(this._optionsAttrRetina),
      t.removeAttribute(this._optionsAttrBg),
      t.removeAttribute(this._optionsAttrHidden);
  }),
  (Layzr.prototype.updateSelector = function () {
    (this._nodes = Array.from(
      document.querySelectorAll(this._optionsSelector)
    )),
      (this._nodes = this._prepareItems(this._nodes));
  }),
  (Layzr.prototype.addItems = function (t) {
    var e = Array.from(t.querySelectorAll(this._optionsSelector));
    (e = this._prepareItems(e)),
      (this._nodes = this._nodes.concat(e)),
      this.removeDuplicates();
  }),
  (Layzr.prototype.removeDuplicates = function () {
    var t = Array.from(new Set(this._nodes));
    t.length !== this._nodes.length && (this._nodes = t);
  }),
  (Layzr.prototype._prepareItems = function (t) {
    var e = this._optionsSelector.replace(/\./g, ""),
      i = this._optionsIsloadedClass,
      s = this._optionsIsloadingClass;
    return t.filter(function (t) {
      if (t.hasAttribute("data-src")) {
        var n = t.getAttribute("data-src"),
          o = n.substring(n.lastIndexOf(".") + 1);
        ("png" !== o && "svg" !== o) ||
          t.parentNode.classList.add("layzr-bg-transparent");
      } else if (!t.classList.contains(i) && !t.classList.contains(s)) return t.classList.remove(e), !1;
      return !0;
    });
  }),
  (Layzr.prototype.update = function () {
    for (var t = this._nodes.length, e = [], i = 0; i < t; i++) {
      var s = this._nodes[i];
      (s.hasAttribute(this._optionsAttr) ||
        s.hasAttribute(this._optionsAttrSrcSet) ||
        s.hasAttribute(this._optionsAttrRetina)) &&
        this._inViewport(s) &&
        e.push(s);
    }
    var n = this;
    e.forEach(function (t) {
      n._reveal(t);
    }),
      (this._ticking = !1);
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(e)
      : "object" == typeof exports
      ? (module.exports = e())
      : (t.PhotoSwipe = e());
  })(this, function () {
    "use strict";
    return function (t, e, i, s) {
      var n = {
        features: null,
        bind: function (t, e, i, s) {
          var n = (s ? "remove" : "add") + "EventListener";
          e = e.split(" ");
          for (var o = 0; o < e.length; o++) e[o] && t[n](e[o], i, !1);
        },
        isArray: function (t) {
          return t instanceof Array;
        },
        createEl: function (t, e) {
          var i = document.createElement(e || "div");
          return t && (i.className = t), i;
        },
        getScrollY: function () {
          var t = window.pageYOffset;
          return void 0 !== t ? t : document.documentElement.scrollTop;
        },
        unbind: function (t, e, i) {
          n.bind(t, e, i, !0);
        },
        removeClass: function (t, e) {
          var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
          t.className = t.className
            .replace(i, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        },
        addClass: function (t, e) {
          n.hasClass(t, e) || (t.className += (t.className ? " " : "") + e);
        },
        hasClass: function (t, e) {
          return (
            t.className &&
            new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
          );
        },
        getChildByClass: function (t, e) {
          for (var i = t.firstChild; i; ) {
            if (n.hasClass(i, e)) return i;
            i = i.nextSibling;
          }
        },
        arraySearch: function (t, e, i) {
          for (var s = t.length; s--; ) if (t[s][i] === e) return s;
          return -1;
        },
        extend: function (t, e, i) {
          for (var s in e)
            if (e.hasOwnProperty(s)) {
              if (i && t.hasOwnProperty(s)) continue;
              t[s] = e[s];
            }
        },
        easing: {
          sine: {
            out: function (t) {
              return Math.sin(t * (Math.PI / 2));
            },
            inOut: function (t) {
              return -(Math.cos(Math.PI * t) - 1) / 2;
            },
          },
          cubic: {
            out: function (t) {
              return --t * t * t + 1;
            },
          },
        },
        detectFeatures: function () {
          if (n.features) return n.features;
          var t = n.createEl().style,
            e = "",
            i = {};
          if (
            ((i.oldIE = document.all && !document.addEventListener),
            (i.touch =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0),
            window.requestAnimationFrame &&
              ((i.raf = window.requestAnimationFrame),
              (i.caf = window.cancelAnimationFrame)),
            (i.pointerEvent =
              navigator.pointerEnabled || navigator.msPointerEnabled),
            !i.pointerEvent)
          ) {
            var s = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              o &&
                o.length > 0 &&
                (o = parseInt(o[1], 10)) >= 1 &&
                o < 8 &&
                (i.isOldIOSPhone = !0);
            }
            var a = s.match(/Android\s([0-9\.]*)/),
              r = a ? a[1] : 0;
            (r = parseFloat(r)) >= 1 &&
              (r < 4.4 && (i.isOldAndroid = !0), (i.androidVersion = r)),
              (i.isMobileOpera = /opera mini|opera mobi/i.test(s));
          }
          for (
            var l,
              d,
              c = ["transform", "perspective", "animationName"],
              h = ["", "webkit", "Moz", "ms", "O"],
              u = 0;
            u < 4;
            u++
          ) {
            e = h[u];
            for (var p = 0; p < 3; p++)
              (l = c[p]),
                (d = e + (e ? l.charAt(0).toUpperCase() + l.slice(1) : l)),
                !i[l] && d in t && (i[l] = d);
            e &&
              !i.raf &&
              ((e = e.toLowerCase()),
              (i.raf = window[e + "RequestAnimationFrame"]),
              i.raf &&
                (i.caf =
                  window[e + "CancelAnimationFrame"] ||
                  window[e + "CancelRequestAnimationFrame"]));
          }
          if (!i.raf) {
            var f = 0;
            (i.raf = function (t) {
              var e = new Date().getTime(),
                i = Math.max(0, 16 - (e - f)),
                s = window.setTimeout(function () {
                  t(e + i);
                }, i);
              return (f = e + i), s;
            }),
              (i.caf = function (t) {
                clearTimeout(t);
              });
          }
          return (
            (i.svg =
              !!document.createElementNS &&
              !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect),
            (n.features = i),
            i
          );
        },
      };
      n.detectFeatures(),
        n.features.oldIE &&
          (n.bind = function (t, e, i, s) {
            e = e.split(" ");
            for (
              var n,
                o = (s ? "detach" : "attach") + "Event",
                a = function () {
                  i.handleEvent.call(i);
                },
                r = 0;
              r < e.length;
              r++
            )
              if ((n = e[r]))
                if ("object" == typeof i && i.handleEvent) {
                  if (s) {
                    if (!i["oldIE" + n]) return !1;
                  } else i["oldIE" + n] = a;
                  t[o]("on" + n, i["oldIE" + n]);
                } else t[o]("on" + n, i);
          });
      var o = this,
        a = {
          allowPanToNext: !0,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function (t) {
            return "A" === t.tagName;
          },
          getDoubleTapZoom: function (t, e) {
            return t || e.initialZoomLevel < 0.7 ? 1 : 1.33;
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit",
        };
      n.extend(a, s);
      var r,
        l,
        d,
        c,
        h,
        u,
        p,
        f,
        m,
        g,
        v,
        w,
        y,
        b,
        C,
        _,
        x,
        S,
        k,
        I,
        T,
        z,
        L,
        E,
        P,
        O,
        A,
        D,
        M,
        H,
        F,
        W,
        B,
        R,
        j,
        $,
        G,
        Y,
        N,
        q,
        U,
        V,
        X,
        Z,
        Q,
        K,
        J,
        tt,
        et,
        it,
        st,
        nt,
        ot,
        at,
        rt,
        lt,
        dt = { x: 0, y: 0 },
        ct = { x: 0, y: 0 },
        ht = { x: 0, y: 0 },
        ut = {},
        pt = 0,
        ft = {},
        mt = { x: 0, y: 0 },
        gt = 0,
        vt = !0,
        wt = [],
        yt = {},
        bt = !1,
        Ct = function (t, e) {
          n.extend(o, e.publicMethods), wt.push(t);
        },
        _t = function (t) {
          var e = je();
          return t > e - 1 ? t - e : t < 0 ? e + t : t;
        },
        xt = {},
        St = function (t, e) {
          return xt[t] || (xt[t] = []), xt[t].push(e);
        },
        kt = function (t) {
          var e = xt[t];
          if (e) {
            var i = Array.prototype.slice.call(arguments);
            i.shift();
            for (var s = 0; s < e.length; s++) e[s].apply(o, i);
          }
        },
        It = function () {
          return new Date().getTime();
        },
        Tt = function (t) {
          (at = t), (o.bg.style.opacity = t * a.bgOpacity);
        },
        zt = function (t, e, i, s, n) {
          (!bt || (n && n !== o.currItem)) &&
            (s /= n ? n.fitRatio : o.currItem.fitRatio),
            (t[z] = w + e + "px, " + i + "px" + y + " scale(" + s + ")");
        },
        Lt = function (t) {
          et &&
            (t &&
              (g > o.currItem.fitRatio
                ? bt || (Ze(o.currItem, !1, !0), (bt = !0))
                : bt && (Ze(o.currItem), (bt = !1))),
            zt(et, ht.x, ht.y, g));
        },
        Et = function (t) {
          t.container &&
            zt(
              t.container.style,
              t.initialPosition.x,
              t.initialPosition.y,
              t.initialZoomLevel,
              t
            );
        },
        Pt = function (t, e) {
          e[z] = w + t + "px, 0px" + y;
        },
        Ot = function (t, e) {
          if (!a.loop && e) {
            var i = c + (mt.x * pt - t) / mt.x,
              s = Math.round(t - ce.x);
            ((i < 0 && s > 0) || (i >= je() - 1 && s < 0)) &&
              (t = ce.x + s * a.mainScrollEndFriction);
          }
          (ce.x = t), Pt(t, h);
        },
        At = function (t, e) {
          var i = he[t] - ft[t];
          return ct[t] + dt[t] + i - i * (e / v);
        },
        Dt = function (t, e) {
          (t.x = e.x), (t.y = e.y), e.id && (t.id = e.id);
        },
        Mt = function (t) {
          (t.x = Math.round(t.x)), (t.y = Math.round(t.y));
        },
        Ht = null,
        Ft = function () {
          Ht &&
            (n.unbind(document, "mousemove", Ft),
            n.addClass(t, "pswp--has_mouse"),
            (a.mouseUsed = !0),
            kt("mouseUsed")),
            (Ht = setTimeout(function () {
              Ht = null;
            }, 100));
        },
        Wt = function (t, e) {
          var i = qe(o.currItem, ut, t);
          return e && (tt = i), i;
        },
        Bt = function (t) {
          return t || (t = o.currItem), t.initialZoomLevel;
        },
        Rt = function (t) {
          return t || (t = o.currItem), t.w > 0 ? a.maxSpreadZoom : 1;
        },
        jt = function (t, e, i, s) {
          return s === o.currItem.initialZoomLevel
            ? ((i[t] = o.currItem.initialPosition[t]), !0)
            : ((i[t] = At(t, s)),
              i[t] > e.min[t]
                ? ((i[t] = e.min[t]), !0)
                : i[t] < e.max[t] && ((i[t] = e.max[t]), !0));
        },
        $t = function (t) {
          var e = "";
          a.escKey && 27 === t.keyCode
            ? (e = "close")
            : a.arrowKeys &&
              (37 === t.keyCode
                ? (e = "prev")
                : 39 === t.keyCode && (e = "next")),
            e &&
              (t.ctrlKey ||
                t.altKey ||
                t.shiftKey ||
                t.metaKey ||
                (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                o[e]()));
        },
        Gt = function (t) {
          t && (V || U || it || G) && (t.preventDefault(), t.stopPropagation());
        },
        Yt = function () {
          o.setScrollOffset(0, n.getScrollY());
        },
        Nt = {},
        qt = 0,
        Ut = function (t) {
          Nt[t] && (Nt[t].raf && O(Nt[t].raf), qt--, delete Nt[t]);
        },
        Vt = function (t) {
          Nt[t] && Ut(t), Nt[t] || (qt++, (Nt[t] = {}));
        },
        Xt = function () {
          for (var t in Nt) Nt.hasOwnProperty(t) && Ut(t);
        },
        Zt = function (t, e, i, s, n, o, a) {
          var r,
            l = It();
          Vt(t);
          var d = function () {
            if (Nt[t]) {
              if ((r = It() - l) >= s) return Ut(t), o(i), void (a && a());
              o((i - e) * n(r / s) + e), (Nt[t].raf = P(d));
            }
          };
          d();
        },
        Qt = {
          shout: kt,
          listen: St,
          viewportSize: ut,
          options: a,
          isMainScrollAnimating: function () {
            return it;
          },
          getZoomLevel: function () {
            return g;
          },
          getCurrentIndex: function () {
            return c;
          },
          isDragging: function () {
            return N;
          },
          isZooming: function () {
            return K;
          },
          setScrollOffset: function (t, e) {
            (ft.x = t), (H = ft.y = e), kt("updateScrollOffset", ft);
          },
          applyZoomPan: function (t, e, i, s) {
            (ht.x = e), (ht.y = i), (g = t), Lt(s);
          },
          init: function () {
            if (!r && !l) {
              var i;
              (o.framework = n),
                (o.template = t),
                (o.bg = n.getChildByClass(t, "pswp__bg")),
                (A = t.className),
                (r = !0),
                (F = n.detectFeatures()),
                (P = F.raf),
                (O = F.caf),
                (z = F.transform),
                (M = F.oldIE),
                (o.scrollWrap = n.getChildByClass(t, "pswp__scroll-wrap")),
                (o.container = n.getChildByClass(
                  o.scrollWrap,
                  "pswp__container"
                )),
                (h = o.container.style),
                (o.itemHolders = _ =
                  [
                    { el: o.container.children[0], wrap: 0, index: -1 },
                    { el: o.container.children[1], wrap: 0, index: -1 },
                    { el: o.container.children[2], wrap: 0, index: -1 },
                  ]),
                (_[0].el.style.display = _[2].el.style.display = "none"),
                (function () {
                  if (z) {
                    var e = F.perspective && !E;
                    return (
                      (w = "translate" + (e ? "3d(" : "(")),
                      void (y = F.perspective ? ", 0px)" : ")")
                    );
                  }
                  (z = "left"),
                    n.addClass(t, "pswp--ie"),
                    (Pt = function (t, e) {
                      e.left = t + "px";
                    }),
                    (Et = function (t) {
                      var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                        i = t.container.style,
                        s = e * t.w,
                        n = e * t.h;
                      (i.width = s + "px"),
                        (i.height = n + "px"),
                        (i.left = t.initialPosition.x + "px"),
                        (i.top = t.initialPosition.y + "px");
                    }),
                    (Lt = function () {
                      if (et) {
                        var t = et,
                          e = o.currItem,
                          i = e.fitRatio > 1 ? 1 : e.fitRatio,
                          s = i * e.w,
                          n = i * e.h;
                        (t.width = s + "px"),
                          (t.height = n + "px"),
                          (t.left = ht.x + "px"),
                          (t.top = ht.y + "px");
                      }
                    });
                })(),
                (m = {
                  resize: o.updateSize,
                  orientationchange: function () {
                    clearTimeout(W),
                      (W = setTimeout(function () {
                        ut.x !== o.scrollWrap.clientWidth && o.updateSize();
                      }, 500));
                  },
                  scroll: Yt,
                  keydown: $t,
                  click: Gt,
                });
              var s = F.isOldIOSPhone || F.isOldAndroid || F.isMobileOpera;
              for (
                (F.animationName && F.transform && !s) ||
                  (a.showAnimationDuration = a.hideAnimationDuration = 0),
                  i = 0;
                i < wt.length;
                i++
              )
                o["init" + wt[i]]();
              if (e) (o.ui = new e(o, n)).init();
              kt("firstUpdate"),
                (c = c || a.index || 0),
                (isNaN(c) || c < 0 || c >= je()) && (c = 0),
                (o.currItem = Re(c)),
                (F.isOldIOSPhone || F.isOldAndroid) && (vt = !1),
                t.setAttribute("aria-hidden", "false"),
                a.modal &&
                  (vt
                    ? (t.style.position = "fixed")
                    : ((t.style.position = "absolute"),
                      (t.style.top = n.getScrollY() + "px"))),
                void 0 === H && (kt("initialLayout"), (H = D = n.getScrollY()));
              var d = "pswp--open ";
              for (
                a.mainClass && (d += a.mainClass + " "),
                  a.showHideOpacity && (d += "pswp--animate_opacity "),
                  d += E ? "pswp--touch" : "pswp--notouch",
                  d += F.animationName ? " pswp--css_animation" : "",
                  d += F.svg ? " pswp--svg" : "",
                  n.addClass(t, d),
                  o.updateSize(),
                  u = -1,
                  gt = null,
                  i = 0;
                i < 3;
                i++
              )
                Pt((i + u) * mt.x, _[i].el.style);
              M || n.bind(o.scrollWrap, f, o),
                St("initialZoomInEnd", function () {
                  o.setContent(_[0], c - 1),
                    o.setContent(_[2], c + 1),
                    (_[0].el.style.display = _[2].el.style.display = "block"),
                    a.focus && t.focus(),
                    n.bind(document, "keydown", o),
                    F.transform && n.bind(o.scrollWrap, "click", o),
                    a.mouseUsed || n.bind(document, "mousemove", Ft),
                    n.bind(window, "resize scroll orientationchange", o),
                    kt("bindEvents");
                }),
                o.setContent(_[1], c),
                o.updateCurrItem(),
                kt("afterInit"),
                vt ||
                  (b = setInterval(function () {
                    qt ||
                      N ||
                      K ||
                      g !== o.currItem.initialZoomLevel ||
                      o.updateSize();
                  }, 1e3)),
                n.addClass(t, "pswp--visible");
            }
          },
          close: function () {
            r &&
              ((r = !1),
              (l = !0),
              kt("close"),
              n.unbind(window, "resize scroll orientationchange", o),
              n.unbind(window, "scroll", m.scroll),
              n.unbind(document, "keydown", o),
              n.unbind(document, "mousemove", Ft),
              F.transform && n.unbind(o.scrollWrap, "click", o),
              N && n.unbind(window, p, o),
              clearTimeout(W),
              kt("unbindEvents"),
              $e(o.currItem, null, !0, o.destroy));
          },
          destroy: function () {
            kt("destroy"),
              He && clearTimeout(He),
              t.setAttribute("aria-hidden", "true"),
              (t.className = A),
              b && clearInterval(b),
              n.unbind(o.scrollWrap, f, o),
              n.unbind(window, "scroll", o),
              fe(),
              Xt(),
              (xt = null);
          },
          panTo: function (t, e, i) {
            i ||
              (t > tt.min.x ? (t = tt.min.x) : t < tt.max.x && (t = tt.max.x),
              e > tt.min.y ? (e = tt.min.y) : e < tt.max.y && (e = tt.max.y)),
              (ht.x = t),
              (ht.y = e),
              Lt();
          },
          handleEvent: function (t) {
            (t = t || window.event), m[t.type] && m[t.type](t);
          },
          goTo: function (t) {
            var e = (t = _t(t)) - c;
            (gt = e),
              (c = t),
              (o.currItem = Re(c)),
              (pt -= e),
              Ot(mt.x * pt),
              Xt(),
              (it = !1),
              o.updateCurrItem();
          },
          next: function () {
            o.goTo(c + 1);
          },
          prev: function () {
            o.goTo(c - 1);
          },
          updateCurrZoomItem: function (t) {
            if ((t && kt("beforeChange", 0), _[1].el.children.length)) {
              var e = _[1].el.children[0];
              et = n.hasClass(e, "pswp__zoom-wrap") ? e.style : null;
            } else et = null;
            (tt = o.currItem.bounds),
              (v = g = o.currItem.initialZoomLevel),
              (ht.x = tt.center.x),
              (ht.y = tt.center.y),
              t && kt("afterChange");
          },
          invalidateCurrItems: function () {
            C = !0;
            for (var t = 0; t < 3; t++)
              _[t].item && (_[t].item.needsUpdate = !0);
          },
          updateCurrItem: function (t) {
            if (0 !== gt) {
              var e,
                i = Math.abs(gt);
              if (!(t && i < 2)) {
                (o.currItem = Re(c)),
                  (bt = !1),
                  kt("beforeChange", gt),
                  i >= 3 && ((u += gt + (gt > 0 ? -3 : 3)), (i = 3));
                for (var s = 0; s < i; s++)
                  gt > 0
                    ? ((e = _.shift()),
                      (_[2] = e),
                      u++,
                      Pt((u + 2) * mt.x, e.el.style),
                      o.setContent(e, c - i + s + 1 + 1))
                    : ((e = _.pop()),
                      _.unshift(e),
                      u--,
                      Pt(u * mt.x, e.el.style),
                      o.setContent(e, c + i - s - 1 - 1));
                if (et && 1 === Math.abs(gt)) {
                  var n = Re(x);
                  n.initialZoomLevel !== g && (qe(n, ut), Ze(n), Et(n));
                }
                (gt = 0), o.updateCurrZoomItem(), (x = c), kt("afterChange");
              }
            }
          },
          updateSize: function (e) {
            if (!vt && a.modal) {
              var i = n.getScrollY();
              if (
                (H !== i && ((t.style.top = i + "px"), (H = i)),
                !e && yt.x === window.innerWidth && yt.y === window.innerHeight)
              )
                return;
              (yt.x = window.innerWidth),
                (yt.y = window.innerHeight),
                (t.style.height = yt.y + "px");
            }
            if (
              ((ut.x = o.scrollWrap.clientWidth),
              (ut.y = o.scrollWrap.clientHeight),
              Yt(),
              (mt.x = ut.x + Math.round(ut.x * a.spacing)),
              (mt.y = ut.y),
              Ot(mt.x * pt),
              kt("beforeResize"),
              void 0 !== u)
            ) {
              for (var s, r, l, d = 0; d < 3; d++)
                (s = _[d]),
                  Pt((d + u) * mt.x, s.el.style),
                  (l = c + d - 1),
                  a.loop && je() > 2 && (l = _t(l)),
                  (r = Re(l)) && (C || r.needsUpdate || !r.bounds)
                    ? (o.cleanSlide(r),
                      o.setContent(s, l),
                      1 === d && ((o.currItem = r), o.updateCurrZoomItem(!0)),
                      (r.needsUpdate = !1))
                    : -1 === s.index && l >= 0 && o.setContent(s, l),
                  r && r.container && (qe(r, ut), Ze(r), Et(r));
              C = !1;
            }
            (v = g = o.currItem.initialZoomLevel),
              (tt = o.currItem.bounds) &&
                ((ht.x = tt.center.x), (ht.y = tt.center.y), Lt(!0)),
              kt("resize");
          },
          zoomTo: function (t, e, i, s, o) {
            e &&
              ((v = g),
              (he.x = Math.abs(e.x) - ht.x),
              (he.y = Math.abs(e.y) - ht.y),
              Dt(ct, ht));
            var a = Wt(t, !1),
              r = {};
            jt("x", a, r, t), jt("y", a, r, t);
            var l = g,
              d = ht.x,
              c = ht.y;
            Mt(r);
            var h = function (e) {
              1 === e
                ? ((g = t), (ht.x = r.x), (ht.y = r.y))
                : ((g = (t - l) * e + l),
                  (ht.x = (r.x - d) * e + d),
                  (ht.y = (r.y - c) * e + c)),
                o && o(e),
                Lt(1 === e);
            };
            i ? Zt("customZoomTo", 0, 1, i, s || n.easing.sine.inOut, h) : h(1);
          },
        },
        Kt = {},
        Jt = {},
        te = {},
        ee = {},
        ie = {},
        se = [],
        ne = {},
        oe = [],
        ae = {},
        re = 0,
        le = { x: 0, y: 0 },
        de = 0,
        ce = { x: 0, y: 0 },
        he = { x: 0, y: 0 },
        ue = { x: 0, y: 0 },
        pe = function (t, e) {
          return (
            (ae.x = Math.abs(t.x - e.x)),
            (ae.y = Math.abs(t.y - e.y)),
            Math.sqrt(ae.x * ae.x + ae.y * ae.y)
          );
        },
        fe = function () {
          X && (O(X), (X = null));
        },
        me = function () {
          N && ((X = P(me)), Le());
        },
        ge = function (t, e) {
          return (
            !(!t || t === document) &&
            !(
              t.getAttribute("class") &&
              t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1
            ) &&
            (e(t) ? t : ge(t.parentNode, e))
          );
        },
        ve = {},
        we = function (t, e) {
          return (
            (ve.prevent = !ge(t.target, a.isClickableElement)),
            kt("preventDragEvent", t, e, ve),
            ve.prevent
          );
        },
        ye = function (t, e) {
          return (e.x = t.pageX), (e.y = t.pageY), (e.id = t.identifier), e;
        },
        be = function (t, e, i) {
          (i.x = 0.5 * (t.x + e.x)), (i.y = 0.5 * (t.y + e.y));
        },
        Ce = function () {
          var t = ht.y - o.currItem.initialPosition.y;
          return 1 - Math.abs(t / (ut.y / 2));
        },
        _e = {},
        xe = {},
        Se = [],
        ke = function (t) {
          for (; Se.length > 0; ) Se.pop();
          return (
            L
              ? ((lt = 0),
                se.forEach(function (t) {
                  0 === lt ? (Se[0] = t) : 1 === lt && (Se[1] = t), lt++;
                }))
              : t.type.indexOf("touch") > -1
              ? t.touches &&
                t.touches.length > 0 &&
                ((Se[0] = ye(t.touches[0], _e)),
                t.touches.length > 1 && (Se[1] = ye(t.touches[1], xe)))
              : ((_e.x = t.pageX),
                (_e.y = t.pageY),
                (_e.id = ""),
                (Se[0] = _e)),
            Se
          );
        },
        Ie = function (t, e) {
          var i,
            s,
            n,
            r,
            l = ht[t] + e[t],
            d = e[t] > 0,
            c = ce.x + e.x,
            h = ce.x - ne.x;
          return (
            (i = l > tt.min[t] || l < tt.max[t] ? a.panEndFriction : 1),
            (l = ht[t] + e[t] * i),
            (!a.allowPanToNext && g !== o.currItem.initialZoomLevel) ||
            (et
              ? "h" !== st ||
                "x" !== t ||
                U ||
                (d
                  ? (l > tt.min[t] &&
                      ((i = a.panEndFriction),
                      tt.min[t] - l,
                      (s = tt.min[t] - ct[t])),
                    (s <= 0 || h < 0) && je() > 1
                      ? ((r = c), h < 0 && c > ne.x && (r = ne.x))
                      : tt.min.x !== tt.max.x && (n = l))
                  : (l < tt.max[t] &&
                      ((i = a.panEndFriction),
                      l - tt.max[t],
                      (s = ct[t] - tt.max[t])),
                    (s <= 0 || h > 0) && je() > 1
                      ? ((r = c), h > 0 && c < ne.x && (r = ne.x))
                      : tt.min.x !== tt.max.x && (n = l)))
              : (r = c),
            "x" !== t)
              ? void (
                  it ||
                  Z ||
                  (g > o.currItem.fitRatio && (ht[t] += e[t] * i))
                )
              : (void 0 !== r && (Ot(r, !0), (Z = r !== ne.x)),
                tt.min.x !== tt.max.x &&
                  (void 0 !== n ? (ht.x = n) : Z || (ht.x += e.x * i)),
                void 0 !== r)
          );
        },
        Te = function (t) {
          if (!("mousedown" === t.type && t.button > 0)) {
            if (Be) return void t.preventDefault();
            if (!Y || "mousedown" !== t.type) {
              if ((we(t, !0) && t.preventDefault(), kt("pointerDown"), L)) {
                var e = n.arraySearch(se, t.pointerId, "id");
                e < 0 && (e = se.length),
                  (se[e] = { x: t.pageX, y: t.pageY, id: t.pointerId });
              }
              var i = ke(t),
                s = i.length;
              (Q = null),
                Xt(),
                (N && 1 !== s) ||
                  ((N = nt = !0),
                  n.bind(window, p, o),
                  ($ = rt = ot = G = Z = V = q = U = !1),
                  (st = null),
                  kt("firstTouchStart", i),
                  Dt(ct, ht),
                  (dt.x = dt.y = 0),
                  Dt(ee, i[0]),
                  Dt(ie, ee),
                  (ne.x = mt.x * pt),
                  (oe = [{ x: ee.x, y: ee.y }]),
                  (R = B = It()),
                  Wt(g, !0),
                  fe(),
                  me()),
                !K &&
                  s > 1 &&
                  !it &&
                  !Z &&
                  ((v = g),
                  (U = !1),
                  (K = q = !0),
                  (dt.y = dt.x = 0),
                  Dt(ct, ht),
                  Dt(Kt, i[0]),
                  Dt(Jt, i[1]),
                  be(Kt, Jt, ue),
                  (he.x = Math.abs(ue.x) - ht.x),
                  (he.y = Math.abs(ue.y) - ht.y),
                  (J = pe(Kt, Jt)));
            }
          }
        },
        ze = function (t) {
          if ((t.preventDefault(), L)) {
            var e = n.arraySearch(se, t.pointerId, "id");
            if (e > -1) {
              var i = se[e];
              (i.x = t.pageX), (i.y = t.pageY);
            }
          }
          if (N) {
            var s = ke(t);
            if (st || V || K) Q = s;
            else if (ce.x !== mt.x * pt) st = "h";
            else {
              var o = Math.abs(s[0].x - ee.x) - Math.abs(s[0].y - ee.y);
              Math.abs(o) >= 10 && ((st = o > 0 ? "h" : "v"), (Q = s));
            }
          }
        },
        Le = function () {
          if (Q) {
            var t = Q.length;
            if (0 !== t)
              if (
                (Dt(Kt, Q[0]),
                (te.x = Kt.x - ee.x),
                (te.y = Kt.y - ee.y),
                K && t > 1)
              ) {
                if (
                  ((ee.x = Kt.x),
                  (ee.y = Kt.y),
                  !te.x &&
                    !te.y &&
                    (function (t, e) {
                      return t.x === e.x && t.y === e.y;
                    })(Q[1], Jt))
                )
                  return;
                Dt(Jt, Q[1]), U || ((U = !0), kt("zoomGestureStarted"));
                var e = pe(Kt, Jt),
                  i = De(e);
                i >
                  o.currItem.initialZoomLevel +
                    o.currItem.initialZoomLevel / 15 && (rt = !0);
                var s = 1,
                  n = Bt(),
                  r = Rt();
                if (i < n)
                  if (
                    a.pinchToClose &&
                    !rt &&
                    v <= o.currItem.initialZoomLevel
                  ) {
                    var l = 1 - (n - i) / (n / 1.2);
                    Tt(l), kt("onPinchClose", l), (ot = !0);
                  } else
                    (s = (n - i) / n) > 1 && (s = 1), (i = n - s * (n / 3));
                else
                  i > r &&
                    ((s = (i - r) / (6 * n)) > 1 && (s = 1), (i = r + s * n));
                s < 0 && (s = 0),
                  e,
                  be(Kt, Jt, le),
                  (dt.x += le.x - ue.x),
                  (dt.y += le.y - ue.y),
                  Dt(ue, le),
                  (ht.x = At("x", i)),
                  (ht.y = At("y", i)),
                  ($ = i > g),
                  (g = i),
                  Lt();
              } else {
                if (!st) return;
                if (
                  (nt &&
                    ((nt = !1),
                    Math.abs(te.x) >= 10 && (te.x -= Q[0].x - ie.x),
                    Math.abs(te.y) >= 10 && (te.y -= Q[0].y - ie.y)),
                  (ee.x = Kt.x),
                  (ee.y = Kt.y),
                  0 === te.x && 0 === te.y)
                )
                  return;
                if (
                  "v" === st &&
                  a.closeOnVerticalDrag &&
                  "fit" === a.scaleMode &&
                  g === o.currItem.initialZoomLevel
                ) {
                  (dt.y += te.y), (ht.y += te.y);
                  var d = Ce();
                  return (G = !0), kt("onVerticalDrag", d), Tt(d), void Lt();
                }
                (function (t, e, i) {
                  if (t - R > 50) {
                    var s = oe.length > 2 ? oe.shift() : {};
                    (s.x = e), (s.y = i), oe.push(s), (R = t);
                  }
                })(It(), Kt.x, Kt.y),
                  (V = !0),
                  (tt = o.currItem.bounds),
                  Ie("x", te) || (Ie("y", te), Mt(ht), Lt());
              }
          }
        },
        Ee = function (t) {
          if (F.isOldAndroid) {
            if (Y && "mouseup" === t.type) return;
            t.type.indexOf("touch") > -1 &&
              (clearTimeout(Y),
              (Y = setTimeout(function () {
                Y = 0;
              }, 600)));
          }
          var e;
          if ((kt("pointerUp"), we(t, !1) && t.preventDefault(), L)) {
            var i = n.arraySearch(se, t.pointerId, "id");
            if (i > -1)
              if (((e = se.splice(i, 1)[0]), navigator.pointerEnabled))
                e.type = t.pointerType || "mouse";
              else {
                (e.type = { 4: "mouse", 2: "touch", 3: "pen" }[t.pointerType]),
                  e.type || (e.type = t.pointerType || "mouse");
              }
          }
          var s,
            r = ke(t),
            l = r.length;
          if (("mouseup" === t.type && (l = 0), 2 === l)) return (Q = null), !0;
          1 === l && Dt(ie, r[0]),
            0 !== l ||
              st ||
              it ||
              (e ||
                ("mouseup" === t.type
                  ? (e = { x: t.pageX, y: t.pageY, type: "mouse" })
                  : t.changedTouches &&
                    t.changedTouches[0] &&
                    (e = {
                      x: t.changedTouches[0].pageX,
                      y: t.changedTouches[0].pageY,
                      type: "touch",
                    })),
              kt("touchRelease", t, e));
          var d = -1;
          if (
            (0 === l &&
              ((N = !1),
              n.unbind(window, p, o),
              fe(),
              K ? (d = 0) : -1 !== de && (d = It() - de)),
            (de = 1 === l ? It() : -1),
            (s = -1 !== d && d < 150 ? "zoom" : "swipe"),
            K &&
              l < 2 &&
              ((K = !1),
              1 === l && (s = "zoomPointerUp"),
              kt("zoomGestureEnded")),
            (Q = null),
            V || U || it || G)
          )
            if ((Xt(), j || (j = Pe()), j.calculateSwipeSpeed("x"), G)) {
              if (Ce() < a.verticalDragRange) o.close();
              else {
                var c = ht.y,
                  h = at;
                Zt("verticalDrag", 0, 1, 300, n.easing.cubic.out, function (t) {
                  (ht.y = (o.currItem.initialPosition.y - c) * t + c),
                    Tt((1 - h) * t + h),
                    Lt();
                }),
                  kt("onVerticalDrag", 1);
              }
            } else {
              if ((Z || it) && 0 === l) {
                if (Ae(s, j)) return;
                s = "zoomPointerUp";
              }
              if (!it)
                return "swipe" !== s
                  ? void Me()
                  : void (!Z && g > o.currItem.fitRatio && Oe(j));
            }
        },
        Pe = function () {
          var t,
            e,
            i = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (s) {
                oe.length > 1
                  ? ((t = It() - R + 50), (e = oe[oe.length - 2][s]))
                  : ((t = It() - B), (e = ie[s])),
                  (i.lastFlickOffset[s] = ee[s] - e),
                  (i.lastFlickDist[s] = Math.abs(i.lastFlickOffset[s])),
                  i.lastFlickDist[s] > 20
                    ? (i.lastFlickSpeed[s] = i.lastFlickOffset[s] / t)
                    : (i.lastFlickSpeed[s] = 0),
                  Math.abs(i.lastFlickSpeed[s]) < 0.1 &&
                    (i.lastFlickSpeed[s] = 0),
                  (i.slowDownRatio[s] = 0.95),
                  (i.slowDownRatioReverse[s] = 1 - i.slowDownRatio[s]),
                  (i.speedDecelerationRatio[s] = 1);
              },
              calculateOverBoundsAnimOffset: function (t, e) {
                i.backAnimStarted[t] ||
                  (ht[t] > tt.min[t]
                    ? (i.backAnimDestination[t] = tt.min[t])
                    : ht[t] < tt.max[t] &&
                      (i.backAnimDestination[t] = tt.max[t]),
                  void 0 !== i.backAnimDestination[t] &&
                    ((i.slowDownRatio[t] = 0.7),
                    (i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t]),
                    i.speedDecelerationRatioAbs[t] < 0.05 &&
                      ((i.lastFlickSpeed[t] = 0),
                      (i.backAnimStarted[t] = !0),
                      Zt(
                        "bounceZoomPan" + t,
                        ht[t],
                        i.backAnimDestination[t],
                        e || 300,
                        n.easing.sine.out,
                        function (e) {
                          (ht[t] = e), Lt();
                        }
                      ))));
              },
              calculateAnimOffset: function (t) {
                i.backAnimStarted[t] ||
                  ((i.speedDecelerationRatio[t] =
                    i.speedDecelerationRatio[t] *
                    (i.slowDownRatio[t] +
                      i.slowDownRatioReverse[t] -
                      (i.slowDownRatioReverse[t] * i.timeDiff) / 10)),
                  (i.speedDecelerationRatioAbs[t] = Math.abs(
                    i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]
                  )),
                  (i.distanceOffset[t] =
                    i.lastFlickSpeed[t] *
                    i.speedDecelerationRatio[t] *
                    i.timeDiff),
                  (ht[t] += i.distanceOffset[t]));
              },
              panAnimLoop: function () {
                if (
                  Nt.zoomPan &&
                  ((Nt.zoomPan.raf = P(i.panAnimLoop)),
                  (i.now = It()),
                  (i.timeDiff = i.now - i.lastNow),
                  (i.lastNow = i.now),
                  i.calculateAnimOffset("x"),
                  i.calculateAnimOffset("y"),
                  Lt(),
                  i.calculateOverBoundsAnimOffset("x"),
                  i.calculateOverBoundsAnimOffset("y"),
                  i.speedDecelerationRatioAbs.x < 0.05 &&
                    i.speedDecelerationRatioAbs.y < 0.05)
                )
                  return (
                    (ht.x = Math.round(ht.x)),
                    (ht.y = Math.round(ht.y)),
                    Lt(),
                    void Ut("zoomPan")
                  );
              },
            };
          return i;
        },
        Oe = function (t) {
          return (
            t.calculateSwipeSpeed("y"),
            (tt = o.currItem.bounds),
            (t.backAnimDestination = {}),
            (t.backAnimStarted = {}),
            Math.abs(t.lastFlickSpeed.x) <= 0.05 &&
            Math.abs(t.lastFlickSpeed.y) <= 0.05
              ? ((t.speedDecelerationRatioAbs.x =
                  t.speedDecelerationRatioAbs.y =
                    0),
                t.calculateOverBoundsAnimOffset("x"),
                t.calculateOverBoundsAnimOffset("y"),
                !0)
              : (Vt("zoomPan"), (t.lastNow = It()), void t.panAnimLoop())
          );
        },
        Ae = function (t, e) {
          var i, s, r;
          if ((it || (re = c), "swipe" === t)) {
            var l = ee.x - ie.x,
              d = e.lastFlickDist.x < 10;
            l > 30 && (d || e.lastFlickOffset.x > 20)
              ? (s = -1)
              : l < -30 && (d || e.lastFlickOffset.x < -20) && (s = 1);
          }
          s &&
            ((c += s) < 0
              ? ((c = a.loop ? je() - 1 : 0), (r = !0))
              : c >= je() && ((c = a.loop ? 0 : je() - 1), (r = !0)),
            (r && !a.loop) || ((gt += s), (pt -= s), (i = !0)));
          var h,
            u = mt.x * pt,
            p = Math.abs(u - ce.x);
          return (
            i || u > ce.x == e.lastFlickSpeed.x > 0
              ? ((h =
                  Math.abs(e.lastFlickSpeed.x) > 0
                    ? p / Math.abs(e.lastFlickSpeed.x)
                    : 333),
                (h = Math.min(h, 400)),
                (h = Math.max(h, 250)))
              : (h = 333),
            re === c && (i = !1),
            (it = !0),
            kt("mainScrollAnimStart"),
            Zt("mainScroll", ce.x, u, h, n.easing.cubic.out, Ot, function () {
              Xt(),
                (it = !1),
                (re = -1),
                (i || re !== c) && o.updateCurrItem(),
                kt("mainScrollAnimComplete");
            }),
            i && o.updateCurrItem(!0),
            i
          );
        },
        De = function (t) {
          return (1 / J) * t * v;
        },
        Me = function () {
          var t = g,
            e = Bt(),
            i = Rt();
          g < e ? (t = e) : g > i && (t = i);
          var s,
            a = at;
          return ot && !$ && !rt && g < e
            ? (o.close(), !0)
            : (ot &&
                (s = function (t) {
                  Tt((1 - a) * t + a);
                }),
              o.zoomTo(t, 0, 200, n.easing.cubic.out, s),
              !0);
        };
      Ct("Gestures", {
        publicMethods: {
          initGestures: function () {
            var t = function (t, e, i, s, n) {
              (S = t + e), (k = t + i), (I = t + s), (T = n ? t + n : "");
            };
            (L = F.pointerEvent) && F.touch && (F.touch = !1),
              L
                ? navigator.pointerEnabled
                  ? t("pointer", "down", "move", "up", "cancel")
                  : t("MSPointer", "Down", "Move", "Up", "Cancel")
                : F.touch
                ? (t("touch", "start", "move", "end", "cancel"), (E = !0))
                : t("mouse", "down", "move", "up"),
              (p = k + " " + I + " " + T),
              (f = S),
              L &&
                !E &&
                (E =
                  navigator.maxTouchPoints > 1 ||
                  navigator.msMaxTouchPoints > 1),
              (o.likelyTouchDevice = E),
              (m[S] = Te),
              (m[k] = ze),
              (m[I] = Ee),
              T && (m[T] = m[I]),
              F.touch &&
                ((f += " mousedown"),
                (p += " mousemove mouseup"),
                (m.mousedown = m[S]),
                (m.mousemove = m[k]),
                (m.mouseup = m[I])),
              E || (a.allowPanToNext = !1);
          },
        },
      });
      var He,
        Fe,
        We,
        Be,
        Re,
        je,
        $e = function (e, i, s, r) {
          var l;
          He && clearTimeout(He),
            (Be = !0),
            (We = !0),
            e.initialLayout
              ? ((l = e.initialLayout), (e.initialLayout = null))
              : (l = a.getThumbBoundsFn && a.getThumbBoundsFn(c));
          var h = s ? a.hideAnimationDuration : a.showAnimationDuration,
            u = function () {
              Ut("initialZoom"),
                s
                  ? (o.template.removeAttribute("style"),
                    o.bg.removeAttribute("style"))
                  : (Tt(1),
                    i && (i.style.display = "block"),
                    n.addClass(t, "pswp--animated-in"),
                    kt("initialZoom" + (s ? "OutEnd" : "InEnd"))),
                r && r(),
                (Be = !1);
            };
          if (!h || !l || void 0 === l.x)
            return (
              kt("initialZoom" + (s ? "Out" : "In")),
              (g = e.initialZoomLevel),
              Dt(ht, e.initialPosition),
              Lt(),
              (t.style.opacity = s ? 0 : 1),
              Tt(1),
              void (h
                ? setTimeout(function () {
                    u();
                  }, h)
                : u())
            );
          !(function () {
            var i = d,
              r = !o.currItem.src || o.currItem.loadError || a.showHideOpacity;
            e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"),
              s ||
                ((g = l.w / e.w),
                (ht.x = l.x),
                (ht.y = l.y - D),
                (o[r ? "template" : "bg"].style.opacity = 0.001),
                Lt()),
              Vt("initialZoom"),
              s && !i && n.removeClass(t, "pswp--animated-in"),
              r &&
                (s
                  ? n[(i ? "remove" : "add") + "Class"](
                      t,
                      "pswp--animate_opacity"
                    )
                  : setTimeout(function () {
                      n.addClass(t, "pswp--animate_opacity");
                    }, 30)),
              (He = setTimeout(
                function () {
                  if ((kt("initialZoom" + (s ? "Out" : "In")), s)) {
                    var o = l.w / e.w,
                      a = { x: ht.x, y: ht.y },
                      d = g,
                      c = at,
                      p = function (e) {
                        1 === e
                          ? ((g = o), (ht.x = l.x), (ht.y = l.y - H))
                          : ((g = (o - d) * e + d),
                            (ht.x = (l.x - a.x) * e + a.x),
                            (ht.y = (l.y - H - a.y) * e + a.y)),
                          Lt(),
                          r ? (t.style.opacity = 1 - e) : Tt(c - e * c);
                      };
                    i
                      ? Zt("initialZoom", 0, 1, h, n.easing.cubic.out, p, u)
                      : (p(1), (He = setTimeout(u, h + 20)));
                  } else
                    (g = e.initialZoomLevel),
                      Dt(ht, e.initialPosition),
                      Lt(),
                      Tt(1),
                      r ? (t.style.opacity = 1) : Tt(1),
                      (He = setTimeout(u, h + 20));
                },
                s ? 25 : 90
              ));
          })();
        },
        Ge = {},
        Ye = [],
        Ne = {
          index: 0,
          errorMsg:
            '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Fe.length;
          },
        },
        qe = function (t, e, i) {
          if (t.src && !t.loadError) {
            var s = !i;
            if (
              (s &&
                (t.vGap || (t.vGap = { top: 0, bottom: 0 }),
                kt("parseVerticalMargin", t)),
              (Ge.x = e.x),
              (Ge.y = e.y - t.vGap.top - t.vGap.bottom),
              s)
            ) {
              var n = Ge.x / t.w,
                o = Ge.y / t.h;
              t.fitRatio = n < o ? n : o;
              var r = a.scaleMode;
              "orig" === r ? (i = 1) : "fit" === r && (i = t.fitRatio),
                i > 1 && (i = 1),
                (t.initialZoomLevel = i),
                t.bounds ||
                  (t.bounds = {
                    center: { x: 0, y: 0 },
                    max: { x: 0, y: 0 },
                    min: { x: 0, y: 0 },
                  });
            }
            if (!i) return;
            return (
              (function (t, e, i) {
                var s = t.bounds;
                (s.center.x = Math.round((Ge.x - e) / 2)),
                  (s.center.y = Math.round((Ge.y - i) / 2) + t.vGap.top),
                  (s.max.x = e > Ge.x ? Math.round(Ge.x - e) : s.center.x),
                  (s.max.y =
                    i > Ge.y ? Math.round(Ge.y - i) + t.vGap.top : s.center.y),
                  (s.min.x = e > Ge.x ? 0 : s.center.x),
                  (s.min.y = i > Ge.y ? t.vGap.top : s.center.y);
              })(t, t.w * i, t.h * i),
              s &&
                i === t.initialZoomLevel &&
                (t.initialPosition = t.bounds.center),
              t.bounds
            );
          }
          return (
            (t.w = t.h = 0),
            (t.initialZoomLevel = t.fitRatio = 1),
            (t.bounds = {
              center: { x: 0, y: 0 },
              max: { x: 0, y: 0 },
              min: { x: 0, y: 0 },
            }),
            (t.initialPosition = t.bounds.center),
            t.bounds
          );
        },
        Ue = function (t, e, i, s, n, a) {
          e.loadError ||
            (s &&
              ((e.imageAppended = !0),
              Ze(e, s, e === o.currItem && bt),
              i.appendChild(s),
              a &&
                setTimeout(function () {
                  e &&
                    e.loaded &&
                    e.placeholder &&
                    ((e.placeholder.style.display = "none"),
                    (e.placeholder = null));
                }, 500)));
        },
        Ve = function (t) {
          (t.loading = !0), (t.loaded = !1);
          var e = (t.img = n.createEl("pswp__img", "img")),
            i = function () {
              (t.loading = !1),
                (t.loaded = !0),
                t.loadComplete ? t.loadComplete(t) : (t.img = null),
                (e.onload = e.onerror = null),
                (e = null);
            };
          return (
            (e.onload = i),
            (e.onerror = function () {
              (t.loadError = !0), i();
            }),
            (e.src = t.src),
            e
          );
        },
        Xe = function (t, e) {
          if (t.src && t.loadError && t.container)
            return (
              e && (t.container.innerHTML = ""),
              (t.container.innerHTML = a.errorMsg.replace("%url%", t.src)),
              !0
            );
        },
        Ze = function (t, e, i) {
          if (t.src) {
            e || (e = t.container.lastChild);
            var s = i ? t.w : Math.round(t.w * t.fitRatio),
              n = i ? t.h : Math.round(t.h * t.fitRatio);
            t.placeholder &&
              !t.loaded &&
              ((t.placeholder.style.width = s + "px"),
              (t.placeholder.style.height = n + "px")),
              (e.style.width = s + "px"),
              (e.style.height = n + "px");
          }
        },
        Qe = function () {
          if (Ye.length) {
            for (var t, e = 0; e < Ye.length; e++)
              (t = Ye[e]).holder.index === t.index &&
                Ue(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
            Ye = [];
          }
        };
      Ct("Controller", {
        publicMethods: {
          lazyLoadItem: function (t) {
            t = _t(t);
            var e = Re(t);
            e &&
              ((!e.loaded && !e.loading) || C) &&
              (kt("gettingData", t, e), e.src && Ve(e));
          },
          initController: function () {
            n.extend(a, Ne, !0),
              (o.items = Fe = i),
              (Re = o.getItemAt),
              (je = a.getNumItemsFn),
              a.loop,
              je() < 3 && (a.loop = !1),
              St("beforeChange", function (t) {
                var e,
                  i = a.preload,
                  s = null === t || t >= 0,
                  n = Math.min(i[0], je()),
                  r = Math.min(i[1], je());
                for (e = 1; e <= (s ? r : n); e++) o.lazyLoadItem(c + e);
                for (e = 1; e <= (s ? n : r); e++) o.lazyLoadItem(c - e);
              }),
              St("initialLayout", function () {
                o.currItem.initialLayout =
                  a.getThumbBoundsFn && a.getThumbBoundsFn(c);
              }),
              St("mainScrollAnimComplete", Qe),
              St("initialZoomInEnd", Qe),
              St("destroy", function () {
                for (var t, e = 0; e < Fe.length; e++)
                  (t = Fe[e]).container && (t.container = null),
                    t.placeholder && (t.placeholder = null),
                    t.img && (t.img = null),
                    t.preloader && (t.preloader = null),
                    t.loadError && (t.loaded = t.loadError = !1);
                Ye = null;
              });
          },
          getItemAt: function (t) {
            return t >= 0 && void 0 !== Fe[t] && Fe[t];
          },
          allowProgressiveImg: function () {
            return (
              a.forceProgressiveLoading ||
              !E ||
              a.mouseUsed ||
              screen.width > 1200
            );
          },
          setContent: function (t, e) {
            a.loop && (e = _t(e));
            var i = o.getItemAt(t.index);
            i && (i.container = null);
            var s,
              l = o.getItemAt(e);
            if (l) {
              kt("gettingData", e, l), (t.index = e), (t.item = l);
              var d = (l.container = n.createEl("pswp__zoom-wrap"));
              if (
                (!l.src &&
                  l.html &&
                  (l.html.tagName
                    ? d.appendChild(l.html)
                    : (d.innerHTML = l.html)),
                Xe(l),
                qe(l, ut),
                !l.src || l.loadError || l.loaded)
              )
                l.src &&
                  !l.loadError &&
                  (((s = n.createEl("pswp__img", "img")).style.opacity = 1),
                  (s.src = l.src),
                  Ze(l, s),
                  Ue(0, l, d, s));
              else {
                if (
                  ((l.loadComplete = function (i) {
                    if (r) {
                      if (t && t.index === e) {
                        if (Xe(i, !0))
                          return (
                            (i.loadComplete = i.img = null),
                            qe(i, ut),
                            Et(i),
                            void (t.index === c && o.updateCurrZoomItem())
                          );
                        i.imageAppended
                          ? !Be &&
                            i.placeholder &&
                            ((i.placeholder.style.display = "none"),
                            (i.placeholder = null))
                          : F.transform && (it || Be)
                          ? Ye.push({
                              item: i,
                              baseDiv: d,
                              img: i.img,
                              index: e,
                              holder: t,
                              clearPlaceholder: !0,
                            })
                          : Ue(0, i, d, i.img, 0, !0);
                      }
                      (i.loadComplete = null),
                        (i.img = null),
                        kt("imageLoadComplete", e, i);
                    }
                  }),
                  n.features.transform)
                ) {
                  var h = "pswp__img pswp__img--placeholder";
                  h += l.msrc ? "" : " pswp__img--placeholder--blank";
                  var u = n.createEl(h, l.msrc ? "img" : "");
                  l.msrc && (u.src = l.msrc),
                    Ze(l, u),
                    d.appendChild(u),
                    (l.placeholder = u);
                }
                l.loading || Ve(l),
                  o.allowProgressiveImg() &&
                    (!We && F.transform
                      ? Ye.push({
                          item: l,
                          baseDiv: d,
                          img: l.img,
                          index: e,
                          holder: t,
                        })
                      : Ue(0, l, d, l.img, 0, !0));
              }
              We || e !== c ? Et(l) : ((et = d.style), $e(l, s || l.img)),
                (t.el.innerHTML = ""),
                t.el.appendChild(d);
            } else t.el.innerHTML = "";
          },
          cleanSlide: function (t) {
            t.img && (t.img.onload = t.img.onerror = null),
              (t.loaded = t.loading = t.img = t.imageAppended = !1);
          },
        },
      });
      var Ke,
        Je,
        ti = {},
        ei = function (t, e, i) {
          var s = document.createEvent("CustomEvent"),
            n = {
              origEvent: t,
              target: t.target,
              releasePoint: e,
              pointerType: i || "touch",
            };
          s.initCustomEvent("pswpTap", !0, !0, n), t.target.dispatchEvent(s);
        };
      Ct("Tap", {
        publicMethods: {
          initTap: function () {
            St("firstTouchStart", o.onTapStart),
              St("touchRelease", o.onTapRelease),
              St("destroy", function () {
                (ti = {}), (Ke = null);
              });
          },
          onTapStart: function (t) {
            t.length > 1 && (clearTimeout(Ke), (Ke = null));
          },
          onTapRelease: function (t, e) {
            if (e && !V && !q && !qt) {
              var i = e;
              if (
                Ke &&
                (clearTimeout(Ke),
                (Ke = null),
                (function (t, e) {
                  return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25;
                })(i, ti))
              )
                return void kt("doubleTap", i);
              if ("mouse" === e.type) return void ei(t, e, "mouse");
              if (
                "BUTTON" === t.target.tagName.toUpperCase() ||
                n.hasClass(t.target, "pswp__single-tap")
              )
                return void ei(t, e);
              Dt(ti, i),
                (Ke = setTimeout(function () {
                  ei(t, e), (Ke = null);
                }, 300));
            }
          },
        },
      }),
        Ct("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function () {
              M ||
                (E
                  ? St("mouseUsed", function () {
                      o.setupDesktopZoom();
                    })
                  : o.setupDesktopZoom(!0));
            },
            setupDesktopZoom: function (e) {
              Je = {};
              var i = "wheel mousewheel DOMMouseScroll";
              St("bindEvents", function () {
                n.bind(t, i, o.handleMouseWheel);
              }),
                St("unbindEvents", function () {
                  Je && n.unbind(t, i, o.handleMouseWheel);
                }),
                (o.mouseZoomedIn = !1);
              var s,
                a = function () {
                  o.mouseZoomedIn &&
                    (n.removeClass(t, "pswp--zoomed-in"),
                    (o.mouseZoomedIn = !1)),
                    g < 1
                      ? n.addClass(t, "pswp--zoom-allowed")
                      : n.removeClass(t, "pswp--zoom-allowed"),
                    r();
                },
                r = function () {
                  s && (n.removeClass(t, "pswp--dragging"), (s = !1));
                };
              St("resize", a),
                St("afterChange", a),
                St("pointerDown", function () {
                  o.mouseZoomedIn &&
                    ((s = !0), n.addClass(t, "pswp--dragging"));
                }),
                St("pointerUp", r),
                e || a();
            },
            handleMouseWheel: function (t) {
              if (g <= o.currItem.fitRatio)
                return (
                  a.modal &&
                    (!a.closeOnScroll || qt || N
                      ? t.preventDefault()
                      : z && Math.abs(t.deltaY) > 2 && ((d = !0), o.close())),
                  !0
                );
              if ((t.stopPropagation(), (Je.x = 0), "deltaX" in t))
                1 === t.deltaMode
                  ? ((Je.x = 18 * t.deltaX), (Je.y = 18 * t.deltaY))
                  : ((Je.x = t.deltaX), (Je.y = t.deltaY));
              else if ("wheelDelta" in t)
                t.wheelDeltaX && (Je.x = -0.16 * t.wheelDeltaX),
                  t.wheelDeltaY
                    ? (Je.y = -0.16 * t.wheelDeltaY)
                    : (Je.y = -0.16 * t.wheelDelta);
              else {
                if (!("detail" in t)) return;
                Je.y = t.detail;
              }
              Wt(g, !0);
              var e = ht.x - Je.x,
                i = ht.y - Je.y;
              (a.modal ||
                (e <= tt.min.x &&
                  e >= tt.max.x &&
                  i <= tt.min.y &&
                  i >= tt.max.y)) &&
                t.preventDefault(),
                o.panTo(e, i);
            },
            toggleDesktopZoom: function (e) {
              e = e || { x: ut.x / 2 + ft.x, y: ut.y / 2 + ft.y };
              var i = a.getDoubleTapZoom(!0, o.currItem),
                s = g === i;
              (o.mouseZoomedIn = !s),
                o.zoomTo(s ? o.currItem.initialZoomLevel : i, e, 333),
                n[(s ? "remove" : "add") + "Class"](t, "pswp--zoomed-in");
            },
          },
        });
      var ii,
        si,
        ni,
        oi,
        ai,
        ri,
        li,
        di,
        ci,
        hi,
        ui,
        pi,
        fi = { history: !0, galleryUID: 1 },
        mi = function () {
          return ui.hash.substring(1);
        },
        gi = function () {
          ii && clearTimeout(ii), ni && clearTimeout(ni);
        },
        vi = function () {
          var t = mi(),
            e = {};
          if (t.length < 5) return e;
          var i,
            s = t.split("&");
          for (i = 0; i < s.length; i++)
            if (s[i]) {
              var n = s[i].split("=");
              n.length < 2 || (e[n[0]] = n[1]);
            }
          if (a.galleryPIDs) {
            var o = e.pid;
            for (e.pid = 0, i = 0; i < Fe.length; i++)
              if (Fe[i].pid === o) {
                e.pid = i;
                break;
              }
          } else e.pid = parseInt(e.pid, 10) - 1;
          return e.pid < 0 && (e.pid = 0), e;
        },
        wi = function () {
          if ((ni && clearTimeout(ni), qt || N)) ni = setTimeout(wi, 500);
          else {
            oi ? clearTimeout(si) : (oi = !0);
            var t = c + 1,
              e = Re(c);
            e.hasOwnProperty("pid") && (t = e.pid);
            var i = li + "&gid=" + a.galleryUID + "&pid=" + t;
            di || (-1 === ui.hash.indexOf(i) && (hi = !0));
            var s = ui.href.split("#")[0] + "#" + i;
            pi
              ? "#" + i !== window.location.hash &&
                history[di ? "replaceState" : "pushState"](
                  "",
                  document.title,
                  s
                )
              : di
              ? ui.replace(s)
              : (ui.hash = i),
              (di = !0),
              (si = setTimeout(function () {
                oi = !1;
              }, 60));
          }
        };
      Ct("History", {
        publicMethods: {
          initHistory: function () {
            if ((n.extend(a, fi, !0), a.history)) {
              (ui = window.location),
                (hi = !1),
                (ci = !1),
                (di = !1),
                (li = mi()),
                (pi = "pushState" in history),
                li.indexOf("gid=") > -1 &&
                  (li = (li = li.split("&gid=")[0]).split("?gid=")[0]),
                St("afterChange", o.updateURL),
                St("unbindEvents", function () {
                  n.unbind(window, "hashchange", o.onHashChange);
                });
              var t = function () {
                (ri = !0),
                  ci ||
                    (hi
                      ? history.back()
                      : li
                      ? (ui.hash = li)
                      : pi
                      ? history.pushState(
                          "",
                          document.title,
                          ui.pathname + ui.search
                        )
                      : (ui.hash = "")),
                  gi();
              };
              St("unbindEvents", function () {
                d && t();
              }),
                St("destroy", function () {
                  ri || t();
                }),
                St("firstUpdate", function () {
                  c = vi().pid;
                });
              var e = li.indexOf("pid=");
              e > -1 &&
                "&" === (li = li.substring(0, e)).slice(-1) &&
                (li = li.slice(0, -1)),
                setTimeout(function () {
                  r && n.bind(window, "hashchange", o.onHashChange);
                }, 40);
            }
          },
          onHashChange: function () {
            return mi() === li
              ? ((ci = !0), void o.close())
              : void (oi || ((ai = !0), o.goTo(vi().pid), (ai = !1)));
          },
          updateURL: function () {
            gi(), ai || (di ? (ii = setTimeout(wi, 800)) : wi());
          },
        },
      }),
        n.extend(o, Qt);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(e)
      : "object" == typeof exports
      ? (module.exports = e())
      : (t.PhotoSwipeUI_Default = e());
  })(this, function () {
    "use strict";
    return function (t, e) {
      var i,
        s,
        n,
        o,
        a,
        r,
        l,
        d,
        c,
        h,
        u,
        p,
        f,
        m,
        g,
        v,
        w,
        y,
        b = this,
        C = !1,
        _ = !0,
        x = !0,
        S = {
          barsSize: { top: 44, bottom: "auto" },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (t, e) {
            return t.title
              ? ((e.children[0].innerHTML = t.title), !0)
              : ((e.children[0].innerHTML = ""), !1);
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [
            {
              id: "facebook",
              label: "Share on Facebook",
              url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
            },
            {
              id: "twitter",
              label: "Tweet",
              url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
            },
            {
              id: "pinterest",
              label: "Pin it",
              url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
            },
            {
              id: "download",
              label: "Download image",
              url: "{{raw_image_url}}",
              download: !0,
            },
          ],
          getImageURLForShare: function () {
            return t.currItem.src || "";
          },
          getPageURLForShare: function () {
            return window.location.href;
          },
          getTextForShare: function () {
            return t.currItem.title || "";
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200,
        },
        k = function (t) {
          if (v) return !0;
          (t = t || window.event), g.timeToIdle && g.mouseUsed && !c && M();
          for (
            var i,
              s,
              n = (t.target || t.srcElement).getAttribute("class") || "",
              o = 0;
            o < B.length;
            o++
          )
            (i = B[o]).onTap &&
              n.indexOf("pswp__" + i.name) > -1 &&
              (i.onTap(), (s = !0));
          if (s) {
            t.stopPropagation && t.stopPropagation(), (v = !0);
            var a = e.features.isOldAndroid ? 600 : 30;
            setTimeout(function () {
              v = !1;
            }, a);
          }
        },
        I = function () {
          return (
            !t.likelyTouchDevice ||
            g.mouseUsed ||
            screen.width > g.fitControlsWidth
          );
        },
        T = function (t, i, s) {
          e[(s ? "add" : "remove") + "Class"](t, "pswp__" + i);
        },
        z = function () {
          var t = 1 === g.getNumItemsFn();
          t !== m && (T(s, "ui--one-slide", t), (m = t));
        },
        L = function () {
          T(l, "share-modal--hidden", x);
        },
        E = function () {
          return (
            (x = !x)
              ? (e.removeClass(l, "pswp__share-modal--fade-in"),
                setTimeout(function () {
                  x && L();
                }, 300))
              : (L(),
                setTimeout(function () {
                  x || e.addClass(l, "pswp__share-modal--fade-in");
                }, 30)),
            x || O(),
            !1
          );
        },
        P = function (e) {
          var i = (e = e || window.event).target || e.srcElement;
          return (
            t.shout("shareLinkClick", e, i),
            !(
              !i.href ||
              (!i.hasAttribute("download") &&
                (window.open(
                  i.href,
                  "pswp_share",
                  "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                ),
                x || E(),
                1))
            )
          );
        },
        O = function () {
          for (var t, e, i, s, n = "", o = 0; o < g.shareButtons.length; o++)
            (t = g.shareButtons[o]),
              (e = g.getImageURLForShare(t)),
              (i = g.getPageURLForShare(t)),
              (s = g.getTextForShare(t)),
              (n +=
                '<a href="' +
                t.url
                  .replace("{{url}}", encodeURIComponent(i))
                  .replace("{{image_url}}", encodeURIComponent(e))
                  .replace("{{raw_image_url}}", e)
                  .replace("{{text}}", encodeURIComponent(s)) +
                '" target="_blank" class="pswp__share--' +
                t.id +
                '"' +
                (t.download ? "download" : "") +
                ">" +
                t.label +
                "</a>"),
              g.parseShareButtonOut && (n = g.parseShareButtonOut(t, n));
          (l.children[0].innerHTML = n), (l.children[0].onclick = P);
        },
        A = function (t) {
          for (var i = 0; i < g.closeElClasses.length; i++)
            if (e.hasClass(t, "pswp__" + g.closeElClasses[i])) return !0;
        },
        D = 0,
        M = function () {
          clearTimeout(y), (D = 0), c && b.setIdle(!1);
        },
        H = function (t) {
          var e = (t = t || window.event).relatedTarget || t.toElement;
          (e && "HTML" !== e.nodeName) ||
            (clearTimeout(y),
            (y = setTimeout(function () {
              b.setIdle(!0);
            }, g.timeToIdleOutside)));
        },
        F = function (t) {
          p !== t && (T(u, "preloader--active", !t), (p = t));
        },
        W = function (t) {
          var i = t.vGap;
          if (I()) {
            var a = g.barsSize;
            if (g.captionEl && "auto" === a.bottom)
              if (
                (o ||
                  ((o = e.createEl(
                    "pswp__caption pswp__caption--fake"
                  )).appendChild(e.createEl("pswp__caption__center")),
                  s.insertBefore(o, n),
                  e.addClass(s, "pswp__ui--fit")),
                g.addCaptionHTMLFn(t, o, !0))
              ) {
                var r = o.clientHeight;
                i.bottom = parseInt(r, 10) || 44;
              } else i.bottom = a.top;
            else i.bottom = "auto" === a.bottom ? 0 : a.bottom;
            i.top = a.top;
          } else i.top = i.bottom = 0;
        },
        B = [
          {
            name: "caption",
            option: "captionEl",
            onInit: function (t) {
              n = t;
            },
          },
          {
            name: "share-modal",
            option: "shareEl",
            onInit: function (t) {
              l = t;
            },
            onTap: function () {
              E();
            },
          },
          {
            name: "button--share",
            option: "shareEl",
            onInit: function (t) {
              r = t;
            },
            onTap: function () {
              E();
            },
          },
          {
            name: "button--zoom",
            option: "zoomEl",
            onTap: t.toggleDesktopZoom,
          },
          {
            name: "counter",
            option: "counterEl",
            onInit: function (t) {
              a = t;
            },
          },
          { name: "button--close", option: "closeEl", onTap: t.close },
          { name: "button--arrow--left", option: "arrowEl", onTap: t.prev },
          { name: "button--arrow--right", option: "arrowEl", onTap: t.next },
          {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
              i.isFullscreen() ? i.exit() : i.enter();
            },
          },
          {
            name: "preloader",
            option: "preloaderEl",
            onInit: function (t) {
              u = t;
            },
          },
        ];
      (b.init = function () {
        e.extend(t.options, S, !0),
          (g = t.options),
          (s = e.getChildByClass(t.scrollWrap, "pswp__ui")),
          (h = t.listen),
          (function () {
            var t;
            h("onVerticalDrag", function (t) {
              _ && t < 0.95
                ? b.hideControls()
                : !_ && t >= 0.95 && b.showControls();
            }),
              h("onPinchClose", function (e) {
                _ && e < 0.9
                  ? (b.hideControls(), (t = !0))
                  : t && !_ && e > 0.9 && b.showControls();
              }),
              h("zoomGestureEnded", function () {
                (t = !1) && !_ && b.showControls();
              });
          })(),
          h("beforeChange", b.update),
          h("doubleTap", function (e) {
            var i = t.currItem.initialZoomLevel;
            t.getZoomLevel() !== i
              ? t.zoomTo(i, e, 333)
              : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333);
          }),
          h("preventDragEvent", function (t, e, i) {
            var s = t.target || t.srcElement;
            s &&
              s.getAttribute("class") &&
              t.type.indexOf("mouse") > -1 &&
              (s.getAttribute("class").indexOf("__caption") > 0 ||
                /(SMALL|STRONG|EM)/i.test(s.tagName)) &&
              (i.prevent = !1);
          }),
          h("bindEvents", function () {
            e.bind(s, "pswpTap click", k),
              e.bind(t.scrollWrap, "pswpTap", b.onGlobalTap),
              t.likelyTouchDevice ||
                e.bind(t.scrollWrap, "mouseover", b.onMouseOver);
          }),
          h("unbindEvents", function () {
            x || E(),
              w && clearInterval(w),
              e.unbind(document, "mouseout", H),
              e.unbind(document, "mousemove", M),
              e.unbind(s, "pswpTap click", k),
              e.unbind(t.scrollWrap, "pswpTap", b.onGlobalTap),
              e.unbind(t.scrollWrap, "mouseover", b.onMouseOver),
              i &&
                (e.unbind(document, i.eventK, b.updateFullscreen),
                i.isFullscreen() && ((g.hideAnimationDuration = 0), i.exit()),
                (i = null));
          }),
          h("destroy", function () {
            g.captionEl &&
              (o && s.removeChild(o), e.removeClass(n, "pswp__caption--empty")),
              l && (l.children[0].onclick = null),
              e.removeClass(s, "pswp__ui--over-close"),
              e.addClass(s, "pswp__ui--hidden"),
              b.setIdle(!1);
          }),
          g.showAnimationDuration || e.removeClass(s, "pswp__ui--hidden"),
          h("initialZoomIn", function () {
            g.showAnimationDuration && e.removeClass(s, "pswp__ui--hidden");
          }),
          h("initialZoomOut", function () {
            e.addClass(s, "pswp__ui--hidden");
          }),
          h("parseVerticalMargin", W),
          (function () {
            var t,
              i,
              n,
              o = function (s) {
                if (s)
                  for (var o = s.length, a = 0; a < o; a++) {
                    (t = s[a]), (i = t.className);
                    for (var r = 0; r < B.length; r++)
                      (n = B[r]),
                        i.indexOf("pswp__" + n.name) > -1 &&
                          (g[n.option]
                            ? (e.removeClass(t, "pswp__element--disabled"),
                              n.onInit && n.onInit(t))
                            : e.addClass(t, "pswp__element--disabled"));
                  }
              };
            o(s.children);
            var a = e.getChildByClass(s, "pswp__top-bar");
            a && o(a.children);
          })(),
          g.shareEl && r && l && (x = !0),
          z(),
          g.timeToIdle &&
            h("mouseUsed", function () {
              e.bind(document, "mousemove", M),
                e.bind(document, "mouseout", H),
                (w = setInterval(function () {
                  2 == ++D && b.setIdle(!0);
                }, g.timeToIdle / 2));
            }),
          g.fullscreenEl &&
            !e.features.isOldAndroid &&
            (i || (i = b.getFullscreenAPI()),
            i
              ? (e.bind(document, i.eventK, b.updateFullscreen),
                b.updateFullscreen(),
                e.addClass(t.template, "pswp--supports-fs"))
              : e.removeClass(t.template, "pswp--supports-fs")),
          g.preloaderEl &&
            (F(!0),
            h("beforeChange", function () {
              clearTimeout(f),
                (f = setTimeout(function () {
                  t.currItem && t.currItem.loading
                    ? (!t.allowProgressiveImg() ||
                        (t.currItem.img && !t.currItem.img.naturalWidth)) &&
                      F(!1)
                    : F(!0);
                }, g.loadingIndicatorDelay));
            }),
            h("imageLoadComplete", function (e, i) {
              t.currItem === i && F(!0);
            }));
      }),
        (b.setIdle = function (t) {
          (c = t), T(s, "ui--idle", t);
        }),
        (b.update = function () {
          _ && t.currItem
            ? (b.updateIndexIndicator(),
              g.captionEl &&
                (g.addCaptionHTMLFn(t.currItem, n),
                T(n, "caption--empty", !t.currItem.title)),
              (C = !0))
            : (C = !1),
            x || E(),
            z();
        }),
        (b.updateFullscreen = function (s) {
          s &&
            setTimeout(function () {
              t.setScrollOffset(0, e.getScrollY());
            }, 50),
            e[(i.isFullscreen() ? "add" : "remove") + "Class"](
              t.template,
              "pswp--fs"
            );
        }),
        (b.updateIndexIndicator = function () {
          g.counterEl &&
            (a.innerHTML =
              t.getCurrentIndex() +
              1 +
              g.indexIndicatorSep +
              g.getNumItemsFn());
        }),
        (b.onGlobalTap = function (i) {
          var s = (i = i || window.event).target || i.srcElement;
          if (!v)
            if (i.detail && "mouse" === i.detail.pointerType) {
              if (A(s)) return void t.close();
              e.hasClass(s, "pswp__img") &&
                (1 === t.getZoomLevel() &&
                t.getZoomLevel() <= t.currItem.fitRatio
                  ? g.clickToCloseNonZoomable && t.close()
                  : t.toggleDesktopZoom(i.detail.releasePoint));
            } else if (
              (g.tapToToggleControls &&
                (_ ? b.hideControls() : b.showControls()),
              g.tapToClose && (e.hasClass(s, "pswp__img") || A(s)))
            )
              return void t.close();
        }),
        (b.onMouseOver = function (t) {
          var e = (t = t || window.event).target || t.srcElement;
          T(s, "ui--over-close", A(e));
        }),
        (b.hideControls = function () {
          e.addClass(s, "pswp__ui--hidden"), (_ = !1);
        }),
        (b.showControls = function () {
          (_ = !0), C || b.update(), e.removeClass(s, "pswp__ui--hidden");
        }),
        (b.supportsFullscreen = function () {
          var t = document;
          return !!(
            t.exitFullscreen ||
            t.mozCancelFullScreen ||
            t.webkitExitFullscreen ||
            t.msExitFullscreen
          );
        }),
        (b.getFullscreenAPI = function () {
          var e,
            i = document.documentElement,
            s = "fullscreenchange";
          return (
            i.requestFullscreen
              ? (e = {
                  enterK: "requestFullscreen",
                  exitK: "exitFullscreen",
                  elementK: "fullscreenElement",
                  eventK: s,
                })
              : i.mozRequestFullScreen
              ? (e = {
                  enterK: "mozRequestFullScreen",
                  exitK: "mozCancelFullScreen",
                  elementK: "mozFullScreenElement",
                  eventK: "moz" + s,
                })
              : i.webkitRequestFullscreen
              ? (e = {
                  enterK: "webkitRequestFullscreen",
                  exitK: "webkitExitFullscreen",
                  elementK: "webkitFullscreenElement",
                  eventK: "webkit" + s,
                })
              : i.msRequestFullscreen &&
                (e = {
                  enterK: "msRequestFullscreen",
                  exitK: "msExitFullscreen",
                  elementK: "msFullscreenElement",
                  eventK: "MSFullscreenChange",
                }),
            e &&
              ((e.enter = function () {
                return (
                  (d = g.closeOnScroll),
                  (g.closeOnScroll = !1),
                  "webkitRequestFullscreen" !== this.enterK
                    ? t.template[this.enterK]()
                    : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                );
              }),
              (e.exit = function () {
                return (g.closeOnScroll = d), document[this.exitK]();
              }),
              (e.isFullscreen = function () {
                return document[this.elementK];
              })),
            e
          );
        });
    };
  }),
  /*!-Before After*/
  jQuery(document).ready(function (t) {
    t(".twentytwenty-container").length > 0 &&
      (t.fn.twentytwenty = function (e) {
        e = t.extend(
          {
            default_offset_pct: 0.5,
            orientation: "horizontal",
            navigation_follow: !1,
          },
          e
        );
        return this.each(function () {
          var i = e.default_offset_pct,
            s = t(this),
            n = e.orientation,
            o = "vertical" === n ? "down" : "left",
            a = "vertical" === n ? "up" : "right",
            r = e.navigation_follow;
          s.wrap(
            "<div class='twentytwenty-wrapper twentytwenty-" + n + "'></div>"
          );
          var l = s.find("img:first"),
            d = s.find("img:last"),
            c = l.attr("title"),
            h = d.attr("title");
          s.append("<div class='twentytwenty-handle'></div>");
          var u = s.find(".twentytwenty-handle");
          u.append("<span class='twentytwenty-" + o + "-arrow'></span>"),
            u.append("<span class='twentytwenty-" + a + "-arrow'></span>"),
            s.addClass("twentytwenty-container"),
            l.addClass("twentytwenty-before"),
            d.addClass("twentytwenty-after"),
            void 0 !== c &&
              c &&
              c.length > 0 &&
              s.append(
                "<div class='twentytwenty-before-label'>" + c + "</div>"
              ),
            void 0 !== h &&
              h &&
              h.length > 0 &&
              s.append("<div class='twentytwenty-after-label'>" + h + "</div>");
          var p = function (t) {
            var e,
              i,
              o,
              a =
                ((e = t),
                (i = l.width()),
                (o = l.height()),
                {
                  w: i + "px",
                  h: o + "px",
                  cw: e * i + "px",
                  ch: e * o + "px",
                });
            u.css(
              "vertical" === n ? "top" : "left",
              "vertical" === n ? a.ch : a.cw
            ),
              (function (t) {
                "vertical" === n
                  ? l.css("clip", "rect(0," + t.w + "," + t.ch + ",0)")
                  : l.css("clip", "rect(0," + t.cw + "," + t.h + ",0)"),
                  s.css("height", t.h);
              })(a);
          };
          t(window).on("resize.twentytwenty", function (t) {
            p(i);
          });
          var f = 0,
            m = 0;
          u.on("movestart", function (t) {
            ((((t.distX > t.distY && t.distX < -t.distY) ||
              (t.distX < t.distY && t.distX > -t.distY)) &&
              "vertical" !== n) ||
              (((t.distX < t.distY && t.distX < -t.distY) ||
                (t.distX > t.distY && t.distX > -t.distY)) &&
                "vertical" === n)) &&
              t.preventDefault(),
              s.addClass("active"),
              s.removeClass("active-click"),
              (f = s.offset().left),
              (offsetY = s.offset().top),
              (m = l.width()),
              (imgHeight = l.height());
          }),
            u.on("moveend", function (t) {
              s.removeClass("active");
            }),
            u.on("move", function (t) {
              s.hasClass("active") &&
                ((i =
                  "vertical" === n
                    ? (t.pageY - offsetY) / imgHeight
                    : (t.pageX - f) / m) < 0 && (i = 0),
                i > 1 && (i = 1),
                p(i));
            }),
            r ||
              s.hasClass("active") ||
              (s.on("mouseup", function (t) {
                s.removeClass("active-click");
              }),
              s.on("mousedown", function (t) {
                s.addClass("active-click"),
                  (f = s.offset().left),
                  (offsetY = s.offset().top),
                  (m = l.width()),
                  (imgHeight = l.height()),
                  (i =
                    "vertical" === n
                      ? (t.pageY - offsetY) / imgHeight
                      : (t.pageX - f) / m) < 0 && (i = 0),
                  i > 1 && (i = 1),
                  p(i);
              })),
            s.find("img").on("mousedown", function (t) {
              t.preventDefault();
            }),
            r &&
              (s.on("mouseenter", function (t) {
                s.addClass("active"),
                  (f = s.offset().left),
                  (offsetY = s.offset().top),
                  (m = l.width()),
                  (imgHeight = l.height());
              }),
              s.on("mouseleave", function (t) {
                s.removeClass("active");
              }),
              s.on("mousemove", function (t) {
                s.hasClass("active") &&
                  ((i =
                    "vertical" === n
                      ? (t.pageY - offsetY) / imgHeight
                      : (t.pageX - f) / m) < 0 && (i = 0),
                  i > 1 && (i = 1),
                  p(i));
              })),
            t(window).trigger("resize.twentytwenty");
        });
      });
  }),
  jQuery(document).ready(function (t) {
    !("ontouchstart" in window) &&
      ("on" == dtLocal.themeSettings.smoothScroll ||
        ("on_parallax" == dtLocal.themeSettings.smoothScroll &&
          t(".stripe-parallax-bg").length > 0)) &&
      t("body").css({ "scroll-behavior": "smooth" });
  }),
  jQuery(document).ready(function (t) {
    var e = t(window),
      i = e.height();
    e.on("the7-resize-height", function () {
      i = e.height();
    }),
      (t.fn.parallax = function (s, n, o) {
        var a,
          r,
          l = t(this);
        function d() {
          var e = dtGlobals.winScrollTop;
          l.each(function () {
            var o = t(this),
              r = o.offset().top;
            r + a(o) < e ||
              r > e + i ||
              l.css(
                "backgroundPosition",
                s + " " + Math.round((r - e) * n) + "px"
              );
          });
        }
        l.each(function () {
          l.offset().top;
        }),
          (a = o
            ? function (t) {
                return t.outerHeight(!0);
              }
            : function (t) {
                return t.height();
              }),
          (arguments.length < 1 || null === s) && (s = "50%"),
          (arguments.length < 2 || null === n) && (n = 0.1),
          (arguments.length < 3 || null === o) && (o = !0),
          e
            .bind("scroll", d)
            .on("resize", function () {
              d();
            })
            .bind("debouncedresize", function () {
              clearTimeout(r),
                (r = setTimeout(function () {
                  d();
                }, 20));
            }),
          d();
      });
  }),
  jQuery(document).ready(function (t) {
    t.fn.extend({
      customSelect: function (e) {
        if (void 0 === document.body.style.maxHeight) return this;
        var i = (e = t.extend(
            { customClass: "customSelect", mapClass: !0, mapStyle: !0 },
            e
          )).customClass,
          s = function (e, i) {
            var s = e.find(":selected"),
              o = i.children(":first"),
              a = s.html() || "&nbsp;";
            o.html(a),
              s.attr("disabled")
                ? i.addClass(n("DisabledOption"))
                : i.removeClass(n("DisabledOption")),
              setTimeout(function () {
                i.removeClass(n("Open")),
                  t(document).off("mouseup." + n("Open"));
              }, 60);
          },
          n = function (t) {
            return i + t;
          };
        return this.each(function () {
          var o = t(this),
            a = t("<span />").addClass(n("Inner")),
            r = t("<span />");
          o.after(r.append(a)),
            r.addClass(i),
            e.mapClass && r.addClass(o.attr("class")),
            e.mapStyle && r.attr("style", o.attr("style")),
            o
              .addClass("hasCustomSelect")
              .on("update", function () {
                s(o, r);
                var t =
                  parseInt(o.outerWidth(), 10) -
                  (parseInt(r.outerWidth(), 10) - parseInt(r.width(), 10));
                r.css({ display: "inline-block" });
                var e = r.outerHeight();
                o.attr("disabled")
                  ? r.addClass(n("Disabled"))
                  : r.removeClass(n("Disabled")),
                  a.css({ width: t, display: "inline-block" }),
                  o.css({
                    "-webkit-appearance": "menulist-button",
                    width: r.outerWidth(),
                    position: "absolute",
                    opacity: 0,
                    height: e,
                    fontSize: r.css("font-size"),
                  });
              })
              .on("change", function () {
                r.addClass(n("Changed")), s(o, r);
              })
              .on("keyup", function (t) {
                r.hasClass(n("Open"))
                  ? (13 != t.which && 27 != t.which) || s(o, r)
                  : (o.blur(), o.focus());
              })
              .on("mousedown", function (t) {
                r.removeClass(n("Changed"));
              })
              .on("mouseup", function (e) {
                r.hasClass(n("Open")) ||
                  (t("." + n("Open")).not(r).length > 0 &&
                  "undefined" != typeof InstallTrigger
                    ? o.focus()
                    : (r.addClass(n("Open")),
                      e.stopPropagation(),
                      t(document).one("mouseup." + n("Open"), function (e) {
                        e.target != o.get(0) &&
                        t.inArray(e.target, o.find("*").get()) < 0
                          ? o.blur()
                          : s(o, r);
                      })));
              })
              .focus(function () {
                r.removeClass(n("Changed")).addClass(n("Focus"));
              })
              .blur(function () {
                r.removeClass(n("Focus") + " " + n("Open"));
              })
              .hover(
                function () {
                  r.addClass(n("Hover"));
                },
                function () {
                  r.removeClass(n("Hover"));
                }
              )
              .trigger("update");
        });
      },
    });
  }),
  /*!
   * Isotope PACKAGED v3.0.0
   *
   * Licensed GPLv3 for open source use
   * or Isotope Commercial License for commercial use
   *
   * http://isotope.metafizzy.co
   * Copyright 2016 Metafizzy
   */
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
          e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function (t, e) {
    "use strict";
    var i = Array.prototype.slice,
      s = t.console,
      n =
        void 0 === s
          ? function () {}
          : function (t) {
              s.error(t);
            };
    function o(s, o, r) {
      (r = r || e || t.jQuery) &&
        (o.prototype.option ||
          (o.prototype.option = function (t) {
            r.isPlainObject(t) &&
              (this.options = r.extend(!0, this.options, t));
          }),
        (r.fn[s] = function (t) {
          var e;
          return "string" == typeof t
            ? (function (t, e, i) {
                var o,
                  a = "$()." + s + '("' + e + '")';
                return (
                  t.each(function (t, l) {
                    var d = r.data(l, s);
                    if (d) {
                      var c = d[e];
                      if (c && "_" != e.charAt(0)) {
                        var h = c.apply(d, i);
                        o = void 0 === o ? h : o;
                      } else n(a + " is not a valid method");
                    } else n(s + " not initialized. Cannot call methods, i.e. " + a);
                  }),
                  void 0 !== o ? o : t
                );
              })(this, t, i.call(arguments, 1))
            : ((e = t),
              this.each(function (t, i) {
                var n = r.data(i, s);
                n
                  ? (n.option(e), n._init())
                  : ((n = new o(i, e)), r.data(i, s, n));
              }),
              this);
        }),
        a(r));
    }
    function a(t) {
      !t || (t && t.bridget) || (t.bridget = o);
    }
    return a(e || t.jQuery), o;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })(this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            s = (i[t] = i[t] || []);
          return -1 == s.indexOf(e) && s.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var s = i.indexOf(e);
          return -1 != s && i.splice(s, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var s = 0,
            n = i[s];
          e = e || [];
          for (var o = this._onceEvents && this._onceEvents[t]; n; ) {
            var a = o && o[n];
            a && (this.off(t, n), delete o[n]),
              n.apply(this, e),
              (n = i[(s += a ? 0 : 1)]);
          }
          return this;
        }
      }),
      t
    );
  }),
  /*!
   * getSize v2.0.2
   * measure size of elements
   * MIT license
   */
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var e =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      i = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      s = i.length;
    function n(t) {
      var i = getComputedStyle(t);
      return (
        i ||
          e(
            "Style returned " +
              i +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        i
      );
    }
    var o,
      a = !1;
    function r(e) {
      if (
        ((function () {
          if (!a) {
            a = !0;
            var e = document.createElement("div");
            (e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style.boxSizing = "border-box");
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var s = n(e);
            (r.isBoxSizeOuter = o = 200 == t(s.width)), i.removeChild(e);
          }
        })(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var l = n(e);
        if ("none" == l.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < s;
              e++
            )
              t[i[e]] = 0;
            return t;
          })();
        var d = {};
        (d.width = e.offsetWidth), (d.height = e.offsetHeight);
        for (
          var c = (d.isBorderBox = "border-box" == l.boxSizing), h = 0;
          h < s;
          h++
        ) {
          var u = i[h],
            p = l[u],
            f = parseFloat(p);
          d[u] = isNaN(f) ? 0 : f;
        }
        var m = d.paddingLeft + d.paddingRight,
          g = d.paddingTop + d.paddingBottom,
          v = d.marginLeft + d.marginRight,
          w = d.marginTop + d.marginBottom,
          y = d.borderLeftWidth + d.borderRightWidth,
          b = d.borderTopWidth + d.borderBottomWidth,
          C = c && o,
          _ = t(l.width);
        !1 !== _ && (d.width = _ + (C ? 0 : m + y));
        var x = t(l.height);
        return (
          !1 !== x && (d.height = x + (C ? 0 : g + b)),
          (d.innerWidth = d.width - (m + y)),
          (d.innerHeight = d.height - (g + b)),
          (d.outerWidth = d.width + v),
          (d.outerHeight = d.height + w),
          d
        );
      }
    }
    return r;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var s = e[i] + "MatchesSelector";
        if (t[s]) return s;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {
      extend: function (t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      },
      modulo: function (t, e) {
        return ((t % e) + e) % e;
      },
      makeArray: function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      },
      removeFrom: function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      },
      getParent: function (t, i) {
        for (; t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      },
      getQueryElement: function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      },
      handleEvent: function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      },
    };
    (i.filterFindElements = function (t, s) {
      t = i.makeArray(t);
      var n = [];
      return (
        t.forEach(function (t) {
          if (
            (function (t) {
              return "object" == typeof HTMLElement
                ? t instanceof HTMLElement
                : t &&
                    "object" == typeof t &&
                    null !== t &&
                    1 === t.nodeType &&
                    "string" == typeof t.nodeName;
            })(t)
          )
            if (s) {
              e(t, s) && n.push(t);
              for (var i = t.querySelectorAll(s), o = 0; o < i.length; o++)
                n.push(i[o]);
            } else n.push(t);
        }),
        n
      );
    }),
      (i.debounceMethod = function (t, e, i) {
        var s = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          t && clearTimeout(t);
          var e = arguments,
            o = this;
          this[n] = setTimeout(function () {
            s.apply(o, e), delete o[n];
          }, i || 100);
        };
      }),
      (i.docReady = function (t) {
        "complete" == document.readyState
          ? t()
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var s = t.console;
    return (
      (i.htmlInit = function (e, n) {
        i.docReady(function () {
          var o = i.toDashed(n),
            a = "data-" + o,
            r = document.querySelectorAll("[" + a + "]"),
            l = document.querySelectorAll(".js-" + o),
            d = i.makeArray(r).concat(i.makeArray(l)),
            c = a + "-options",
            h = t.jQuery;
          d.forEach(function (t) {
            var i,
              o = t.getAttribute(a) || t.getAttribute(c);
            try {
              i = o && JSON.parse(o);
            } catch (e) {
              return void (
                s &&
                s.error("Error parsing " + a + " on " + t.className + ": " + e)
              );
            }
            var r = new e(t, i);
            h && h.data(t, n, r);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    var i = document.documentElement.style,
      s = "string" == typeof i.transition ? "transition" : "WebkitTransition",
      n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
      o = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[s],
      a = {
        transform: n,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay",
      };
    function r(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var l = (r.prototype = Object.create(t.prototype));
    (l.constructor = r),
      (l._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (l.getSize = function () {
        this.size = e(this.element);
      }),
      (l.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          e[a[i] || i] = t[i];
        }
      }),
      (l.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          s = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          o = this.layout.size,
          a =
            -1 != s.indexOf("%")
              ? (parseFloat(s) / 100) * o.width
              : parseInt(s, 10),
          r =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * o.height
              : parseInt(n, 10);
        (a = isNaN(a) ? 0 : a),
          (r = isNaN(r) ? 0 : r),
          (a -= e ? o.paddingLeft : o.paddingRight),
          (r -= i ? o.paddingTop : o.paddingBottom),
          (this.position.x = a),
          (this.position.y = r);
      }),
      (l.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          s = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          o = i ? "left" : "right",
          a = i ? "right" : "left",
          r = this.position.x + t[n];
        (e[o] = this.getXValue(r)), (e[a] = "");
        var l = s ? "paddingTop" : "paddingBottom",
          d = s ? "top" : "bottom",
          c = s ? "bottom" : "top",
          h = this.position.y + t[l];
        (e[d] = this.getYValue(h)),
          (e[c] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (l.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (l.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (l._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          s = this.position.y,
          n = parseInt(t, 10),
          o = parseInt(e, 10),
          a = n === this.position.x && o === this.position.y;
        if ((this.setPosition(t, e), !a || this.isTransitioning)) {
          var r = t - i,
            l = e - s,
            d = {};
          (d.transform = this.getTranslate(r, l)),
            this.transition({
              to: d,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0,
            });
        } else this.layoutPosition();
      }),
      (l.getTranslate = function (t, e) {
        return (
          "translate3d(" +
          (t = this.layout._getOption("originLeft") ? t : -t) +
          "px, " +
          (e = this.layout._getOption("originTop") ? e : -e) +
          "px, 0)"
        );
      }),
      (l.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (l.moveTo = l._transitionTo),
      (l.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (l._nonTransition = function (t) {
        for (var e in (this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd))
          t.onTransitionEnd[e].call(this);
      }),
      (l.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var d =
      "opacity," +
      n.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    (l.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: d,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(o, this, !1);
      }
    }),
      (l.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (l.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var c = { "-webkit-transform": "transform" };
    (l.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          i = c[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[i],
          (function (t) {
            for (var e in t) return !1;
            return !0;
          })(e.ingProperties) && this.disableTransition(),
          i in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
          i in e.onEnd)
        )
          e.onEnd[i].call(this), delete e.onEnd[i];
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (l.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(o, this, !1),
          (this.isTransitioning = !1);
      }),
      (l._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var h = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (l.removeTransitionStyles = function () {
        this.css(h);
      }),
      (l.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (l.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (l.remove = function () {
        s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            this.hide())
          : this.removeElem();
      }),
      (l.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (l.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (l.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (l.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (l.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (l.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      r
    );
  }),
  /*!
   * Outlayer v2.1.0
   * the brains and guts of a layout library
   * MIT license
   */
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, s, n, o) {
            return e(t, i, s, n, o);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, s, n) {
    "use strict";
    var o = t.console,
      a = t.jQuery,
      r = function () {},
      l = 0,
      d = {};
    function c(t, e) {
      var i = s.getQueryElement(t);
      if (i) {
        (this.element = i),
          a && (this.$element = a(this.element)),
          (this.options = s.extend({}, this.constructor.defaults)),
          this.option(e);
        var n = ++l;
        (this.element.outlayerGUID = n),
          (d[n] = this),
          this._create(),
          this._getOption("initLayout") && this.layout();
      } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
    }
    (c.namespace = "outlayer"),
      (c.Item = n),
      (c.defaults = {
        customSorters: {},
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        equalheight: !1,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var h = c.prototype;
    function u(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    s.extend(h, e.prototype),
      (h.option = function (t) {
        s.extend(this.options, t);
      }),
      (h._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (c.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (h._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          s.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (h.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (h._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            s = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var o = new i(e[n], this);
          s.push(o);
        }
        return s;
      }),
      (h._filterFindItemElements = function (t) {
        return s.filterFindElements(t, this.options.itemSelector);
      }),
      (h.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (h.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (h._init = h.layout),
      (h._resetLayout = function () {
        this.getSize();
      }),
      (h.getSize = function () {
        this.size = i(this.element);
      }),
      (h._getMeasurement = function (t, e) {
        var s,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (s = this.element.querySelector(n))
              : n instanceof HTMLElement && (s = n),
            (this[t] = s ? i(s)[e] : n))
          : (this[t] = 0);
      }),
      (h.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (h._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (h._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var s = this._getItemLayoutPosition(t);
            (s.item = t), (s.isInstant = e || t.isLayoutInstant), i.push(s);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (h._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (h._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (h.updateStagger = function () {
        var t = this.options.stagger;
        if (null != t)
          return (
            (this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                s = e && e[2];
              if (!i.length) return 0;
              i = parseFloat(i);
              var n = p[s] || 1;
              return i * n;
            })(t)),
            this.stagger
          );
        this.stagger = 0;
      }),
      (h._positionItem = function (t, e, i, s, n) {
        s ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (h._postLayout = function () {
        this.resizeContainer();
      }),
      (h.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }
      }),
      (h._getContainerSize = r),
      (h._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (h._emitCompleteOnItems = function (t, e) {
        var i = this;
        function s() {
          i.dispatchEvent(t + "Complete", null, [e]);
        }
        var n = e.length;
        if (e && n) {
          var o = 0;
          e.forEach(function (e) {
            e.once(t, a);
          });
        } else s();
        function a() {
          ++o == n && s();
        }
      }),
      (h.dispatchEvent = function (t, e, i) {
        var s = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, s), a))
          if (((this.$element = this.$element || a(this.element)), e)) {
            var n = a.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (h.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (h.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (h.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (h.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            s.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (h._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = s.makeArray(t))
          );
      }),
      (h._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (h._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (h._manageStamp = r),
      (h._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          s = this._boundingRect,
          n = i(t);
        return {
          left: e.left - s.left - n.marginLeft,
          top: e.top - s.top - n.marginTop,
          right: s.right - e.right - n.marginRight,
          bottom: s.bottom - e.bottom - n.marginBottom,
        };
      }),
      (h.handleEvent = s.handleEvent),
      (h.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (h.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (h.onresize = function () {
        this.resize();
      }),
      s.debounceMethod(c, "onresize", 100),
      (h.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (h.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (h.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (h.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (h.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (h.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (h.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (h.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (h.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (h.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (h.getItems = function (t) {
        t = s.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (h.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), s.removeFrom(this.items, t);
            }, this);
      }),
      (h.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete d[e],
          delete this.element.outlayerGUID,
          a && a.removeData(this.element, this.constructor.namespace);
      }),
      (c.data = function (t) {
        var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
        return e && d[e];
      }),
      (c.create = function (t, e) {
        var i = u(c);
        return (
          (i.defaults = s.extend({}, c.defaults)),
          s.extend(i.defaults, e),
          (i.compatOptions = s.extend({}, c.compatOptions)),
          (i.namespace = t),
          (i.data = c.data),
          (i.Item = u(n)),
          s.htmlInit(i, t),
          a && a.bridget && a.bridget(t, i),
          i
        );
      });
    var p = { ms: 1, s: 1e3 };
    return (c.Item = n), c;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      s = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), s.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var s = e[i];
            this.sortData[i] = s(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var s = i.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (t) {
        s[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (s.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        return (
          this.isotope.size &&
          e &&
          e.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (s._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (s.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (s.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (s.getSegmentSize = function (t, e) {
        var i = t + e,
          s = "outer" + e;
        if ((this._getMeasurement(i, s), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[s]) || this.isotope.size["inner" + e];
        }
      }),
      (s.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (s.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (s.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(s)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  /*!
   * Masonry v4.1.0
   * Cascading grid layout library
   * http://masonry.desandro.com
   * MIT License
   * by David DeSandro
   */
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    return (
      (i.compatOptions.fitWidth = "isFitWidth"),
      (i.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0;
      }),
      (i.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var s = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          o = n / s,
          a = s - (n % s);
        (o = Math[a && a < 1 ? "round" : "floor"](o)),
          (this.cols = Math.max(o, 1));
      }),
      (i.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          i = e(t);
        this.containerWidth = i && i.innerWidth;
      }),
      (i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = Math[e && e < 1 ? "round" : "ceil"](
            t.size.outerWidth / this.columnWidth
          );
        i = Math.min(i, this.cols);
        for (
          var s = this._getColGroup(i),
            n = Math.min.apply(Math, s),
            o = s.indexOf(n),
            a = { x: this.columnWidth * o, y: n },
            r = n + t.size.outerHeight,
            l = this.cols + 1 - s.length,
            d = 0;
          d < l;
          d++
        )
          this.colYs[o + d] = r;
        return a;
      }),
      (i.prototype._getColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, s = 0; s < i; s++) {
          var n = this.colYs.slice(s, s + t);
          e[s] = Math.max.apply(Math, n);
        }
        return e;
      }),
      (i.prototype._manageStamp = function (t) {
        var i = e(t),
          s = this._getElementOffset(t),
          n = this._getOption("originLeft") ? s.left : s.right,
          o = n + i.outerWidth,
          a = Math.floor(n / this.columnWidth);
        a = Math.max(0, a);
        var r = Math.floor(o / this.columnWidth);
        (r -= o % this.columnWidth ? 0 : 1), (r = Math.min(this.cols - 1, r));
        for (
          var l =
              (this._getOption("originTop") ? s.top : s.bottom) + i.outerHeight,
            d = a;
          d <= r;
          d++
        )
          this.colYs[d] = Math.max(l, this.colYs[d]);
      }),
      (i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  /*!
   * Masonry layout mode
   * sub-classes Masonry
   * http://masonry.desandro.com
   */
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      s = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var o in e.prototype) n[o] || (s[o] = e.prototype[o]);
    var a = s.measureColumns;
    s.measureColumns = function () {
      (this.items = this.isotope.filteredItems), a.call(this);
    };
    var r = s._getOption;
    return (
      (s._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : r.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var s = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          s
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  /*!
   * Isotope v3.0.0
   *
   * Licensed GPLv3 for open source use
   * or Isotope Commercial License for commercial use
   *
   * http://isotope.metafizzy.co
   * Copyright 2016 Metafizzy
   */
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "./item",
            "./layout-mode",
            "./layout-modes/masonry",
            "./layout-modes/fit-rows",
            "./layout-modes/vertical",
          ],
          function (i, s, n, o, a, r) {
            return e(t, i, s, n, o, a, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("./item"),
          require("./layout-mode"),
          require("./layout-modes/masonry"),
          require("./layout-modes/fit-rows"),
          require("./layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, s, n, o, a) {
    var r = t.jQuery,
      l = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = o), (d.LayoutMode = a);
    var c = d.prototype;
    (c._create = function () {
      for (var t in ((this.itemGUID = 0),
      (this._sorters = {}),
      this._getSorters(),
      e.prototype._create.call(this),
      (this.modes = {}),
      (this.filteredItems = this.items),
      (this.sortHistory = ["original-order"]),
      a.modes))
        this._initLayoutMode(t);
    }),
      (c.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (c._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          t[i].id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (c._initLayoutMode = function (t) {
        var e = a.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (c.layout = function () {
        this._isLayoutInited || !this._getOption("initLayout")
          ? this._layout()
          : this.arrange();
      }),
      (c._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (c.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (c._init = c.arrange),
      (c._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (c._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (c._bindArrangeComplete = function () {
        var t,
          e,
          i,
          s = this;
        function n() {
          t &&
            e &&
            i &&
            s.dispatchEvent("arrangeComplete", null, [s.filteredItems]);
        }
        this.once("layoutComplete", function () {
          (t = !0), n();
        }),
          this.once("hideComplete", function () {
            (e = !0), n();
          }),
          this.once("revealComplete", function () {
            (i = !0), n();
          });
      }),
      (c._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], s = [], n = [], o = this._getFilterTest(e), a = 0;
          a < t.length;
          a++
        ) {
          var r = t[a];
          if (!r.isIgnored) {
            var l = o(r);
            l && i.push(r),
              l && r.isHidden ? s.push(r) : l || r.isHidden || n.push(r);
          }
        }
        return { matches: i, needReveal: s, needHide: n };
      }),
      (c._getFilterTest = function (t) {
        return r && this.options.isJQueryFiltering
          ? function (e) {
              return r(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return s(e.element, t);
            };
      }),
      (c.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (c._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = h(i);
        }
      }),
      (c._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          t[i].updateSortData();
        }
      });
    var h = function (t) {
      if ("string" != typeof t) return t;
      var e = l(t).split(" "),
        i = e[0],
        s = i.match(/^\[(.+)\]$/),
        n = (function (t, e) {
          return t
            ? function (e) {
                return e.getAttribute(t);
              }
            : function (t) {
                var i = t.querySelector(e);
                return i && i.textContent;
              };
        })(s && s[1], i),
        o = d.sortDataParsers[e[1]];
      return (t = o
        ? function (t) {
            return t && o(n(t));
          }
        : function (t) {
            return t && n(t);
          });
    };
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (c._sort = function () {
        var t = this.options.sortBy;
        if (t) {
          var e = (function (t, e) {
            return function (i, s) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n],
                  a = i.sortData[o],
                  r = s.sortData[o],
                  l = 0;
                if (
                  (i.layout.options.customSorters[o] instanceof Function
                    ? (l = i.layout.options.customSorters[o].call(this, a, r))
                    : a !== r && (l = a > r ? 1 : -1),
                  0 !== l)
                )
                  return l * ((void 0 !== e[o] ? e[o] : e) ? 1 : -1);
              }
              return 0;
            };
          })([].concat.apply(t, this.sortHistory), this.options.sortAscending);
          this.filteredItems.sort(e),
            t != this.sortHistory[0] && this.sortHistory.unshift(t);
        }
      }),
      (c._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (c._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (c._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (c._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (c._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (c.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (c._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (c.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            s,
            n = e.length;
          for (i = 0; i < n; i++)
            (s = e[i]), this.element.appendChild(s.element);
          var o = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(o);
        }
      });
    var u = c.remove;
    function p(t) {
      var e = t.create("fitRows");
      return (
        (e.prototype._resetLayout = function () {
          if (
            ((this.x = 0),
            (this.y = 0),
            (this.maxY = 0),
            (this.row = 0),
            (this.rows = []),
            this._getMeasurement("gutter", "outerWidth"),
            this.isotope.options.equalheight)
          )
            for (var t = 0; t < this.isotope.items.length; t++)
              this.isotope.items[t].css({ height: "auto" });
        }),
        (e.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth,
            i = Math.ceil(this.isotope.size.innerWidth + 1);
          0 !== this.x &&
            e + this.x > i &&
            ((this.x = 0), (this.y = this.maxY)),
            0 == this.x && 0 != this.y && this.row++;
          var s = { x: this.x, y: this.y };
          return (
            (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
            (this.x += e),
            void 0 === this.rows[this.row]
              ? ((this.rows[this.row] = []),
                (this.rows[this.row].start = this.y),
                (this.rows[this.row].end = this.maxY))
              : (this.rows[this.row].end = Math.max(
                  this.rows[this.row].end,
                  this.maxY
                )),
            (t.row = this.row),
            s
          );
        }),
        (e.prototype._equalHeight = function () {
          for (var t = 0; t < this.isotope.items.length; t++) {
            var e = this.isotope.items[t].row,
              i = this.rows[e];
            if (i) {
              var s = i.end - i.start;
              (s -=
                this.isotope.items[t].size.borderTopWidth +
                this.isotope.items[t].size.borderBottomWidth),
                (s -=
                  this.isotope.items[t].size.marginTop +
                  this.isotope.items[t].size.marginBottom),
                (s -= this.gutter.height || 0),
                0 == this.isotope.items[t].size.isBorderBox &&
                  (s -=
                    this.isotope.items[t].size.paddingTop +
                    this.isotope.items[t].size.paddingBottom),
                (this.isotope.items[t].size.height = s),
                this.isotope.items[t].css({ height: s.toString() + "px" });
            }
          }
        }),
        (e.prototype._getContainerSize = function () {
          return (
            this.isotope.options.equalheight && this._equalHeight(),
            { height: this.maxY }
          );
        }),
        e
      );
    }
    return (
      (c.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        u.call(this, t);
        for (var i = e && e.length, s = 0; i && s < i; s++) {
          var o = e[s];
          n.removeFrom(this.filteredItems, o);
        }
      }),
      (c.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          this.items[t].sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (c._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var s = t.apply(this, e);
        return (this.options.transitionDuration = i), s;
      }),
      (c.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      "function" == typeof define && define.amd
        ? define(["../layout-mode"], p)
        : "object" == typeof exports
        ? (module.exports = p(require("../layout-mode")))
        : p(t.Isotope.LayoutMode),
      d
    );
  }),
  (function (t, e, i, s) {
    t(i);
    var n = t(e);
    t.fn.Filterade = function (e) {
      var i,
        s,
        o,
        a,
        r,
        l,
        d,
        c,
        h,
        u,
        p,
        f,
        m,
        g,
        v,
        w,
        y,
        b,
        C,
        _,
        x,
        S,
        k,
        I,
        T = !1;
      (l = {
        useFilters: !1,
        useSorting: !1,
        filterControls: ".filter-controls",
        sortControls: ".sort-controls",
        orderControls: ".order-controls",
        controlsSelecter: "input",
        controlsSelecterChecked: 'input[checked="checked"]',
        defaultFilter: "all",
        defaultSort: "date",
        defaultOrder: "desc",
        selectAll: "all",
        paginationMode: "pages",
        pageLimit: 15,
        pageControls: ".page-controls",
        previousButtonClass: "nav-prev",
        previousButtonLabel: "â†",
        nextButtonClass: "nav-next",
        nextButtonLabel: "â†’",
        loadMoreButtonClass: "button-load-more",
        loadMoreButtonLabel: "Load more",
        pagerClass: "page",
        activeClass: "act",
        log: !1,
      }),
        (r = t(this)),
        (k = e.customSorters || {}),
        (w = e.paginationMode || l.paginationMode),
        (y = t(e.pageControls || l.pageControls)),
        (d = t(e.filterControls || l.filterControls)),
        (c = t(e.sortControls || l.sortControls)),
        (h = t(e.orderControls || l.orderControls)),
        (u = e.controlsSelecter || l.controlsSelecter),
        (p = e.controlsSelecterChecked || l.controlsSelecterChecked),
        (s = 1),
        (S = r.parent().hasClass("show-all-pages") ? 999 : 5);
      var z = t(".phantom-sticky").exists(),
        L = t(".sticky-top-line").exists(),
        E = t(".phantom-fade").exists(),
        P = t(".phantom-slide").exists(),
        O = (t(".split-header").exists(), 0);
      return (
        z || L
          ? (O = t(".masthead").height())
          : (E || P) && (O = t("#phantom").height()),
        ((v = t([])).$nodesCache = t([])),
        r.find("> article, .wf-cell").each(function () {
          var e = t(this);
          v.push({
            node: this,
            $node: e,
            name: e.attr("data-name"),
            date: new Date(e.attr("data-date")),
          }),
            v.$nodesCache.push(this);
        }),
        (b = Math.ceil(v.length / e.pageLimit)),
        (g = function () {
          var t;
          ("pages" !== w && "load-more" !== w) ||
            ((t = 0),
            v.each(function () {
              if (this.$node.hasClass("visible")) return t++;
            }),
            (b = Math.ceil(t / (e.pageLimit || l.pageLimit))));
        }),
        (C = function () {
          var i, n;
          if ("pages" === w) {
            if ((y.empty(), y.addClass("hidden"), b > 1)) {
              y.removeClass("hidden"),
                1 !== s &&
                  y.prepend(
                    '<a href="#" class="filter-item ' +
                      (e.previousButtonClass || l.previousButtonClass) +
                      '">' +
                      (e.previousButtonLabel || l.previousButtonLabel) +
                      "</a>"
                  );
              var o = S - 1,
                a = Math.floor(o / 2),
                r = Math.ceil(o / 2),
                d = Math.max(s - a, 1),
                c = s + r;
              d <= a && (c = d + o),
                c > b && ((d = Math.max(b - o, 1)), (c = b));
              var h = '<a href="javascript:void(0);" class="dots">â€¦</a>',
                u = t('<div style="display: none;"></div>'),
                p = t('<div style="display: none;"></div>');
              for (
                i = n = 1;
                1 <= b ? n <= b : n >= b;
                i = 1 <= b ? ++n : --n
              ) {
                var m =
                  '<a href="#" class="' +
                  (e.pagerClass || l.pagerClass) +
                  '" data-page="' +
                  +i +
                  '">' +
                  i +
                  "</a>";
                i < d && 1 != i
                  ? u.append(m)
                  : (i == d && u.children().length && y.append(u).append(t(h)),
                    i > c && i != b
                      ? p.append(m)
                      : (i == b &&
                          p.children().length &&
                          y.append(p).append(t(h)),
                        y.append(m)));
              }
              s < b &&
                y.append(
                  '<a href="#" class="filter-item ' +
                    (e.nextButtonClass || l.nextButtonClass) +
                    '">' +
                    (e.nextButtonLabel || l.nextButtonLabel) +
                    "</a>"
                ),
                y
                  .find('a[data-page="' + s + '"]')
                  .addClass(e.activeClass || l.activeClass);
              var g = e.pagerClass || l.pagerClass;
              (g = g.trim().replace(" ", ".")),
                y.find("a.dots").click(function (e) {
                  y.find("div:hidden a").unwrap(), t(this).remove();
                }),
                y.find("a." + g).click(function (i) {
                  i.preventDefault(),
                    (s = parseInt(t(this).attr("data-page"))),
                    y
                      .find("a." + (e.activeClass || l.activeClass))
                      .removeClass(e.activeClass || l.activeClass),
                    y
                      .find('a[data-page="' + s + '"]')
                      .addClass(e.activeClass || l.activeClass),
                    f();
                }),
                y
                  .find("a." + (e.previousButtonClass || l.previousButtonClass))
                  .click(function (t) {
                    t.preventDefault(), s--, f();
                  }),
                y
                  .find("a." + (e.nextButtonClass || l.nextButtonClass))
                  .click(function (t) {
                    t.preventDefault(), s++, f();
                  });
            }
          } else if ("load-more" === w && (y.addClass("hidden"), b > 1)) {
            s < b && y.removeClass("hidden");
            var v = e.loadMoreButtonClass || l.loadMoreButtonClass;
            return (
              (v = v.trim().replace(" ", ".")),
              y.find("a:not(.filtrade-ready)." + v).click(function (e) {
                return (
                  e.preventDefault(),
                  t(this).addClass("filtrade-ready"),
                  !(s >= b) && (s++, x())
                );
              })
            );
          }
        }),
        (f = function () {
          var e = r.parent().attr("data-scroll-offset")
              ? parseInt(r.parent().attr("data-scroll-offset"))
              : 0,
            i = r;
          r.hasClass("dt-css-grid") && (i = r.parent());
          var s = i.offset().top - 40;
          (!r.parent().hasClass("enable-pagination-scroll") &&
            r.parent().hasClass("the7-elementor-widget")) ||
            t("html, body").animate({ scrollTop: s - O + e }, 400),
            x();
        }),
        (_ = function () {
          const i = r.attr("data-columns")
            ? JSON.parse(r.attr("data-columns"))
            : {};
          if ("pages" === w || "load-more" === w) {
            var n = 0,
              o = t([]),
              a = t([]);
            v.each(function (t) {
              this.$node.hasClass("visible") &&
                (n++,
                ("pages" === w &&
                  n >
                    s * (e.pageLimit || l.pageLimit) -
                      (e.pageLimit || l.pageLimit) &&
                  n <= (e.pageLimit || l.pageLimit) * s) ||
                ("load-more" === w && n <= (e.pageLimit || l.pageLimit) * s)
                  ? a.push(this.node)
                  : o.push(this.node));
            }),
              o.removeClass("visible").addClass("hidden"),
              a.removeClass("hidden").addClass("visible"),
              a.removeClass("first"),
              a.first().addClass("first"),
              i.d && a.slice(0, i.d).addClass("d-hide-divider"),
              i.t && a.slice(0, i.t).addClass("t-hide-divider"),
              i.p && a.slice(0, i.p).addClass("m-hide-divider"),
              i.wd && a.slice(0, i.wd).addClass("wd-hide-divider"),
              (T || ("pages" === w && "function" == typeof r.resetEffects)) &&
                r.resetEffects();
          }
        }),
        (m = function () {
          var s = t([]),
            n = t([]);
          e.useFilters || l.useFilters
            ? i === (e.selectAll || l.selectAll)
              ? (n = v.$nodesCache)
              : v.each(function (t) {
                  this.$node.hasClass(i.replace(/^\./, ""))
                    ? n.push(this.node)
                    : s.push(this.node);
                })
            : (n = v.$nodesCache),
            s.removeClass("visible").addClass("hidden"),
            n.removeClass("hidden").addClass("visible");
        }),
        (I = function () {
          var e = "asc" === a ? 1 : -1;
          k[o] instanceof Function
            ? v.sort(function (t, i) {
                return e * k[o].call(this, t, i);
              })
            : "date" === o
            ? v.sort(function (t, i) {
                return e * (t.date - i.date);
              })
            : "name" === o &&
              v.sort(function (t, i) {
                var s = t.name.toLowerCase(),
                  n = i.name.toLowerCase(),
                  o = 0;
                return s !== n && (o = s > n ? 1 : -1), e * o;
              }),
            (v.$nodesCache = t([])),
            v.each(function () {
              v.$nodesCache.push(this.node);
            }),
            r.find(".paginator").length > 0
              ? v.$nodesCache.detach().insertBefore(r.find(".paginator"))
              : v.$nodesCache.detach().appendTo(r);
        }),
        (x = function () {
          if ((m(), g(), _(), C(), r.hasClass("lazy-loading-mode"))) {
            var e = r.find(".button-load-more").offset();
            e &&
              dtGlobals.winScrollTop > (e.top - n.height()) / 2 &&
              r.find(".button-load-more").trigger("click");
          }
          t(
            ".layzr-loading-on .blog-shortcode.jquery-filter.mode-list .visible:not(.shown)"
          ).layzrBlogInitialisation(),
            t(
              ".layzr-loading-on .jquery-filter.dt-css-grid-wrap .wf-cell.visible"
            ).layzrBlogInitialisation(),
            r.trigger("updateReady");
        }),
        (function () {
          return (
            (e.useFilters || l.useFilters) &&
              ((i =
                d.find(p).attr("data-filter") ||
                e.defaultFilter ||
                l.defaultFilter),
              d.find(u).click(function (e) {
                (i = t(this).attr("data-filter")),
                  (s = 1),
                  (T = !0),
                  x(),
                  (T = !1);
              })),
            (e.useSorting || l.useSorting) &&
              ((o =
                c.find(p).attr("data-by") || e.defaultSort || l.defaultSort),
              (a =
                h.find(p).attr("data-sort") ||
                e.defaultOrder ||
                l.defaultOrder),
              c.find(u).click(function (t) {
                (o = "date" === this.getAttribute("data-by") ? "date" : "name"),
                  I(),
                  (s = 1),
                  x();
              }),
              h.find(u).click(function (t) {
                (a =
                  "desc" === this.getAttribute("data-sort") ? "desc" : "asc"),
                  I(),
                  (s = 1),
                  x();
              })),
            x()
          );
        })()
      );
    };
  })(jQuery, window, document),
  (function (t) {
    var e = function (e, i) {
      var s,
        n,
        o,
        a,
        r,
        l,
        d,
        c,
        h,
        u,
        p,
        f,
        m = !1,
        g = null,
        v = {},
        w = {},
        y = { isUpdating: !1 },
        b = {
          useFilters: !1,
          useSorting: !1,
          nodesSelector: "> article, .wf-cell",
          filterControls: ".filter-controls",
          sortControls: ".sort-controls",
          orderControls: ".order-controls",
          controlsSelecter: "input",
          controlsSelecterChecked: 'input[checked="checked"]',
          defaultFilter: "all",
          defaultSort: "date",
          defaultOrder: "desc",
          selectAll: "all",
          paginationMode: "pages",
          pageLimit: 15,
          pageControls: ".page-controls",
          previousButtonClass: "nav-prev",
          previousButtonLabel: "â†",
          nextButtonClass: "nav-next",
          nextButtonLabel: "â†’",
          loadMoreButtonClass: "button-load-more",
          loadMoreButtonLabel: "Load more",
          pagerClass: "page",
          activeClass: "act",
          pagesToShow: 5,
          usePaginationScroll: !1,
          scrollPagesOffset: 0,
          infinityScroll: !1,
          classes: { visible: "visible", hidden: "hidden", first: "first" },
        },
        C = function () {
          return !(n >= p) && (n++, k(), !0);
        },
        _ = function (t) {
          r.trigger("beforeSwitchPage"),
            x(t),
            k(),
            r.trigger("afterSwitchPage", [n]);
        },
        x = function (t) {
          w.usePaginationScroll &&
            void 0 !== window.the7ScrollToTargetEl &&
            window.the7ScrollToTargetEl(r, "", t, !1, w.scrollPagesOffset);
        },
        S = function () {
          var e = "asc" === a ? 1 : -1;
          w.customSorters[o] instanceof Function
            ? h.sort(function (t, i) {
                return e * w.customSorters[o].call(this, t, i);
              })
            : "date" === o
            ? h.sort(function (t, i) {
                return e * (t.date - i.date);
              })
            : "name" === o &&
              h.sort(function (t, i) {
                var s = t.name.toLowerCase(),
                  n = i.name.toLowerCase(),
                  o = 0;
                return s !== n && (o = s > n ? 1 : -1), e * o;
              }),
            (h.$nodesCache = t([])),
            h.each(function () {
              h.$nodesCache.push(this.node);
            }),
            r.find(".paginator").length > 0
              ? h.$nodesCache.detach().insertBefore(r.find(".paginator"))
              : h.$nodesCache.detach().appendTo(r);
        },
        k = function () {
          var e, i;
          (e = t([])),
            (i = t([])),
            w.useFilters
              ? s === w.selectAll
                ? (i = h.$nodesCache)
                : h.each(function (t) {
                    this.$node.hasClass(s.replace(/^\./, ""))
                      ? i.push(this.node)
                      : e.push(this.node);
                  })
              : (i = h.$nodesCache),
            e.removeClass(w.classes.visible).addClass(w.classes.hidden),
            i.removeClass(w.classes.hidden).addClass(w.classes.visible),
            (function () {
              if (
                ((p = Math.ceil(h.length / w.pageLimit)),
                "pages" === w.paginationMode ||
                  "load-more" === w.paginationMode)
              ) {
                var t = 0;
                h.each(function () {
                  if (this.$node.hasClass(w.classes.visible)) return t++;
                }),
                  (p = Math.ceil(t / w.pageLimit));
              }
            })(),
            (function () {
              if (
                "pages" === w.paginationMode ||
                "load-more" === w.paginationMode
              ) {
                var e = 0,
                  i = t([]),
                  s = t([]);
                h.each(function (t) {
                  this.$node.hasClass(w.classes.visible) &&
                    (e++,
                    ("pages" === w.paginationMode &&
                      e > n * w.pageLimit - w.pageLimit &&
                      e <= w.pageLimit * n) ||
                    ("load-more" === w.paginationMode && e <= w.pageLimit * n)
                      ? s.push(this.node)
                      : i.push(this.node));
                }),
                  i.removeClass(w.classes.visible).addClass(w.classes.hidden),
                  s.removeClass(w.classes.hidden).addClass(w.classes.visible),
                  s.removeClass(w.classes.first),
                  s.first().addClass(w.classes.first),
                  y.isUpdating ||
                    ((m ||
                      ("pages" === w.paginationMode &&
                        "function" == typeof r.resetEffects)) &&
                      r.resetEffects()),
                  r.trigger("paginateResults", [s]);
              }
            })(),
            (function () {
              var e, i;
              if ("pages" === w.paginationMode) {
                if ((u.empty(), u.addClass(w.classes.hidden), p > 1)) {
                  u.removeClass(w.classes.hidden),
                    1 !== n &&
                      u.prepend(
                        '<a href="#" class="filter-item ' +
                          w.previousButtonClass +
                          '">' +
                          w.previousButtonLabel +
                          "</a>"
                      );
                  var s = w.pagesToShow - 1,
                    o = Math.floor(s / 2),
                    a = Math.ceil(s / 2),
                    r = Math.max(n - o, 1),
                    l = n + a;
                  r <= o && (l = r + s),
                    l > p && ((r = Math.max(p - s, 1)), (l = p));
                  var d = '<a href="javascript:void(0);" class="dots">â€¦</a>',
                    c = t('<div style="display: none;"></div>'),
                    h = t('<div style="display: none;"></div>');
                  for (
                    e = i = 1;
                    1 <= p ? i <= p : i >= p;
                    e = 1 <= p ? ++i : --i
                  ) {
                    var m =
                      '<a href="#" class="' +
                      w.pagerClass +
                      '" data-page="' +
                      +e +
                      '">' +
                      e +
                      "</a>";
                    e < r && 1 !== e
                      ? c.append(m)
                      : (e === r &&
                          c.children().length &&
                          u.append(c).append(t(d)),
                        e > l && e !== p
                          ? h.append(m)
                          : (e === p &&
                              h.children().length &&
                              u.append(h).append(t(d)),
                            u.append(m)));
                  }
                  n < p &&
                    u.append(
                      '<a href="#" class="filter-item ' +
                        w.nextButtonClass +
                        '">' +
                        w.nextButtonLabel +
                        "</a>"
                    ),
                    u.find('a[data-page="' + n + '"]').addClass(w.activeClass);
                  var g = w.pagerClass;
                  (g = g.trim().replace(" ", ".")),
                    T("pagesDots", u.find("a.dots"), "click", function (e) {
                      u.find("div:hidden a").unwrap(), t(this).remove();
                    }),
                    T(
                      "pagesPagerClass",
                      u.find("a." + g),
                      "click",
                      function (e) {
                        e.preventDefault(),
                          (n = parseInt(t(this).attr("data-page"))),
                          u
                            .find("a." + w.activeClass)
                            .removeClass(w.activeClass),
                          u
                            .find('a[data-page="' + n + '"]')
                            .addClass(w.activeClass),
                          _(t(this));
                      }
                    ),
                    T(
                      "pagesPrev",
                      u.find("a." + w.previousButtonClass),
                      "click",
                      function (e) {
                        e.preventDefault(), n--, _(t(this));
                      }
                    ),
                    T(
                      "pagesNext",
                      u.find("a." + w.nextButtonClass),
                      "click",
                      function (e) {
                        e.preventDefault(), n++, _(t(this));
                      }
                    );
                }
              } else
                "load-more" === w.paginationMode &&
                  (u.addClass(w.classes.hidden),
                  p > 1 &&
                    (n < p && u.removeClass(w.classes.hidden),
                    T("paginateLoadMore", f, "click", function (t) {
                      t.preventDefault(), C();
                    })));
            })(),
            r.trigger("updateReady");
        },
        I = function (i) {
          (r = t(e)),
            (function (e) {
              (w = t.extend(!0, b, e)),
                (u = t(w.pageControls)),
                (l = t(w.filterControls)),
                (d = t(w.sortControls)),
                (c = t(w.orderControls)),
                (f = u.find("." + w.loadMoreButtonClass));
            })(i),
            (n = 1),
            ((h = t([])).$nodesCache = t([])),
            r.find(w.nodesSelector).each(function () {
              var e = t(this);
              h.push({
                node: this,
                $node: e,
                name: e.attr("data-name"),
                date: new Date(e.attr("data-date")),
              }),
                h.$nodesCache.push(this);
            }),
            w.useFilters &&
              ((s =
                l.find(w.controlsSelecterChecked).attr("data-filter") ||
                w.defaultFilter),
              T(
                "filtersFilterControl",
                l.find(w.controlsSelecter),
                "click",
                function (e) {
                  (s = t(this).attr("data-filter")),
                    (n = 1),
                    (m = !0),
                    k(),
                    (m = !1);
                }
              )),
            w.useSorting &&
              ((o =
                d.find(w.controlsSelecterChecked).attr("data-by") ||
                w.defaultSort),
              (a =
                c.find(w.controlsSelecterChecked).attr("data-sort") ||
                w.defaultOrder),
              T(
                "sortSortControls",
                d.find(w.controlsSelecter),
                "click",
                function (t) {
                  (o =
                    "date" === this.getAttribute("data-by") ? "date" : "name"),
                    S(),
                    (n = 1),
                    k();
                }
              ),
              T(
                "sortOrderControls",
                c.find(w.controlsSelecter),
                "click",
                function (t) {
                  (a =
                    "desc" === this.getAttribute("data-sort") ? "desc" : "asc"),
                    S(),
                    (n = 1),
                    k();
                }
              )),
            w.infinityScroll &&
              (g = new The7Scroll({
                offset: "0% 0% 25%",
                callback: (t) => {
                  t.isInViewport && (g.unobserve(f[0]), C() && g.observe(f[0]));
                },
              }).getScrollObserver()).observe(f[0]),
            k();
        },
        T = function (t, e, i, s) {
          e.length &&
            (z(t),
            e.on(i, s),
            (v[t] = { element: e, eventName: i, callback: s }));
        },
        z = function (t) {
          if (t in v) {
            var e = v[t];
            e.element.off(e.eventName, e.callback), delete v[t];
          }
        };
      (this.paginationScroll = function (t) {
        x(t);
      }),
        (this.update = function (t) {
          this.destroy(), (y.isUpdating = !0), I(t), (y.isUpdating = !1);
        }),
        (this.destroy = function () {
          Object.values(v).forEach((t) => {
            t.element.off(t.eventName, t.callback);
          }),
            (v = {}),
            null != g && (g.unobserve(f[0]), (g = null));
        }),
        I(i);
    };
    t.fn.The7SimpleFilterade = function (i) {
      var s = "string" == typeof i,
        n = Array.prototype.slice.call(arguments, 1);
      return (
        this.each(function () {
          var o = t(this);
          if (s) {
            var a = o.data("the7-simple-filterade");
            if (!a)
              throw Error(
                "Trying to perform the `" +
                  i +
                  "` method prior to initialization"
              );
            if (!a[i])
              throw ReferenceError("Method `" + i + "` not found in instance");
            a[i].apply(a, n),
              "destroy" === i && o.removeData("the7-simple-filterade");
          } else o.data("the7-simple-filterade", new e(this, i));
        }),
        this
      );
    };
  })(jQuery),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(e)
      : "object" == typeof exports
      ? (module.exports = e())
      : (t.ResizeSensor = e());
  })("undefined" != typeof window ? window : this, function () {
    if ("undefined" == typeof window) return null;
    var t =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (t) {
        return window.setTimeout(t, 20);
      };
    function e(t, e) {
      var i = Object.prototype.toString.call(t),
        s =
          "[object Array]" === i ||
          "[object NodeList]" === i ||
          "[object HTMLCollection]" === i ||
          "[object Object]" === i ||
          ("undefined" != typeof jQuery && t instanceof jQuery) ||
          ("undefined" != typeof Elements && t instanceof Elements),
        n = 0,
        o = t.length;
      if (s) for (; n < o; n++) e(t[n]);
      else e(t);
    }
    function i(t) {
      if (!t.getBoundingClientRect)
        return { width: t.offsetWidth, height: t.offsetHeight };
      var e = t.getBoundingClientRect();
      return { width: Math.round(e.width), height: Math.round(e.height) };
    }
    var s = function (n, o) {
      function a() {
        var t,
          e,
          i = [];
        (this.add = function (t) {
          i.push(t);
        }),
          (this.call = function (s) {
            for (t = 0, e = i.length; t < e; t++) i[t].call(this, s);
          }),
          (this.remove = function (s) {
            var n = [];
            for (t = 0, e = i.length; t < e; t++) i[t] !== s && n.push(i[t]);
            i = n;
          }),
          (this.length = function () {
            return i.length;
          });
      }
      function r(e, s) {
        if (e)
          if (e.resizedAttached) e.resizedAttached.add(s);
          else {
            (e.resizedAttached = new a()),
              e.resizedAttached.add(s),
              (e.resizeSensor = document.createElement("div")),
              (e.resizeSensor.dir = "ltr"),
              (e.resizeSensor.className = "resize-sensor");
            var n =
                "pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;",
              o = "position: absolute; left: 0; top: 0; transition: 0s;";
            (e.resizeSensor.style.cssText = n),
              (e.resizeSensor.innerHTML =
                '<div class="resize-sensor-expand" style="' +
                n +
                '"><div style="' +
                o +
                '"></div></div><div class="resize-sensor-shrink" style="' +
                n +
                '"><div style="' +
                o +
                ' width: 200%; height: 200%"></div></div>'),
              e.appendChild(e.resizeSensor);
            var r = window.getComputedStyle(e),
              l = r ? r.getPropertyValue("position") : null;
            "absolute" !== l &&
              "relative" !== l &&
              "fixed" !== l &&
              (e.style.position = "relative");
            var d,
              c,
              h = e.resizeSensor.childNodes[0],
              u = h.childNodes[0],
              p = e.resizeSensor.childNodes[1],
              f = i(e),
              m = f.width,
              g = f.height,
              v = !0,
              w = 0,
              y = function () {
                if (v) {
                  if (0 === e.offsetWidth && 0 === e.offsetHeight)
                    return void (
                      w ||
                      (w = t(function () {
                        (w = 0), y();
                      }))
                    );
                  v = !1;
                }
                var i, s;
                (i = e.offsetWidth),
                  (s = e.offsetHeight),
                  (u.style.width = i + 10 + "px"),
                  (u.style.height = s + 10 + "px"),
                  (h.scrollLeft = i + 10),
                  (h.scrollTop = s + 10),
                  (p.scrollLeft = i + 10),
                  (p.scrollTop = s + 10);
              };
            e.resizeSensor.resetSensor = y;
            var b = function () {
                (c = 0),
                  d &&
                    ((m = f.width),
                    (g = f.height),
                    e.resizedAttached && e.resizedAttached.call(f));
              },
              C = function () {
                (f = i(e)),
                  (d = f.width !== m || f.height !== g) && !c && (c = t(b)),
                  y();
              },
              _ = function (t, e, i) {
                t.attachEvent
                  ? t.attachEvent("on" + e, i)
                  : t.addEventListener(e, i);
              };
            _(h, "scroll", C), _(p, "scroll", C), t(y);
          }
      }
      e(n, function (t) {
        r(t, o);
      }),
        (this.detach = function (t) {
          s.detach(n, t);
        }),
        (this.reset = function () {
          n.resizeSensor.resetSensor();
        });
    };
    if (
      ((s.reset = function (t) {
        e(t, function (t) {
          t.resizeSensor.resetSensor();
        });
      }),
      (s.detach = function (t, i) {
        e(t, function (t) {
          t &&
            ((t.resizedAttached &&
              "function" == typeof i &&
              (t.resizedAttached.remove(i), t.resizedAttached.length())) ||
              (t.resizeSensor &&
                (t.contains(t.resizeSensor) && t.removeChild(t.resizeSensor),
                delete t.resizeSensor,
                delete t.resizedAttached)));
        });
      }),
      "undefined" != typeof MutationObserver)
    ) {
      var n = new MutationObserver(function (t) {
        for (var e in t)
          if (t.hasOwnProperty(e))
            for (var i = t[e].addedNodes, n = 0; n < i.length; n++)
              i[n].resizeSensor && s.reset(i[n]);
      });
      document.addEventListener("DOMContentLoaded", function (t) {
        n.observe(document.body, { childList: !0, subtree: !0 });
      });
    }
    return s;
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e((t.StickySidebar = {}));
  })(this, function (t) {
    "use strict";
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self && self;
    var e,
      i,
      s =
        ((function (t, e) {
          !(function (t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var e,
              i,
              s = (function () {
                function t(t, e) {
                  for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      "value" in s && (s.writable = !0),
                      Object.defineProperty(t, s.key, s);
                  }
                }
                return function (e, i, s) {
                  return i && t(e.prototype, i), s && t(e, s), e;
                };
              })(),
              n =
                ((e = ".stickySidebar"),
                (i = {
                  topSpacing: 0,
                  bottomSpacing: 0,
                  containerSelector: !1,
                  innerWrapperSelector: ".inner-wrapper-sticky",
                  stickyClass: "is-affixed",
                  resizeSensor: !0,
                  minWidth: !1,
                }),
                (function () {
                  function t(e) {
                    var s = this,
                      n =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    if (
                      ((function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                      (this.options = t.extend(i, n)),
                      (this.sidebar =
                        "string" == typeof e ? document.querySelector(e) : e),
                      void 0 === this.sidebar)
                    )
                      throw new Error("There is no specific sidebar element.");
                    (this.sidebarInner = !1),
                      (this.container = this.sidebar.parentElement),
                      (this.affixedType = "STATIC"),
                      (this.direction = "down"),
                      (this.support = { transform: !1, transform3d: !1 }),
                      (this._initialized = !1),
                      (this._reStyle = !1),
                      (this._breakpoint = !1),
                      (this.dimensions = {
                        translateY: 0,
                        maxTranslateY: 0,
                        topSpacing: 0,
                        lastTopSpacing: 0,
                        bottomSpacing: 0,
                        lastBottomSpacing: 0,
                        sidebarHeight: 0,
                        sidebarWidth: 0,
                        containerTop: 0,
                        containerHeight: 0,
                        viewportHeight: 0,
                        viewportTop: 0,
                        lastViewportTop: 0,
                      }),
                      ["handleEvent"].forEach(function (t) {
                        s[t] = s[t].bind(s);
                      }),
                      this.initialize();
                  }
                  return (
                    s(
                      t,
                      [
                        {
                          key: "initialize",
                          value: function () {
                            var t = this;
                            if (
                              (this._setSupportFeatures(),
                              this.options.innerWrapperSelector &&
                                ((this.sidebarInner =
                                  this.sidebar.querySelector(
                                    this.options.innerWrapperSelector
                                  )),
                                null === this.sidebarInner &&
                                  (this.sidebarInner = !1)),
                              !this.sidebarInner)
                            ) {
                              var e = document.createElement("div");
                              for (
                                e.setAttribute("class", "inner-wrapper-sticky"),
                                  this.sidebar.appendChild(e);
                                this.sidebar.firstChild != e;

                              )
                                e.appendChild(this.sidebar.firstChild);
                              this.sidebarInner = this.sidebar.querySelector(
                                ".inner-wrapper-sticky"
                              );
                            }
                            if (this.options.containerSelector) {
                              var i = document.querySelectorAll(
                                this.options.containerSelector
                              );
                              if (
                                ((i = Array.prototype.slice.call(i)).forEach(
                                  function (e, i) {
                                    e.contains(t.sidebar) && (t.container = e);
                                  }
                                ),
                                !i.length)
                              )
                                throw new Error(
                                  "The container does not contains on the sidebar."
                                );
                            }
                            "function" != typeof this.options.topSpacing &&
                              (this.options.topSpacing =
                                parseInt(this.options.topSpacing) || 0),
                              "function" != typeof this.options.bottomSpacing &&
                                (this.options.bottomSpacing =
                                  parseInt(this.options.bottomSpacing) || 0),
                              this._widthBreakpoint(),
                              this.calcDimensions(),
                              this.stickyPosition(),
                              this.bindEvents(),
                              (this._initialized = !0);
                          },
                        },
                        {
                          key: "bindEvents",
                          value: function () {
                            window.addEventListener("resize", this, {
                              passive: !0,
                              capture: !1,
                            }),
                              window.addEventListener("scroll", this, {
                                passive: !0,
                                capture: !1,
                              }),
                              this.sidebar.addEventListener("update" + e, this),
                              this.options.resizeSensor &&
                                "undefined" != typeof ResizeSensor &&
                                (new ResizeSensor(
                                  this.sidebarInner,
                                  this.handleEvent
                                ),
                                new ResizeSensor(
                                  this.container,
                                  this.handleEvent
                                ));
                          },
                        },
                        {
                          key: "handleEvent",
                          value: function (t) {
                            this.updateSticky(t);
                          },
                        },
                        {
                          key: "calcDimensions",
                          value: function () {
                            if (!this._breakpoint) {
                              var e = this.dimensions;
                              (e.containerTop = t.offsetRelative(
                                this.container
                              ).top),
                                (e.containerHeight =
                                  this.container.clientHeight),
                                (e.containerBottom =
                                  e.containerTop + e.containerHeight),
                                (e.sidebarHeight =
                                  this.sidebarInner.offsetHeight),
                                (e.sidebarWidth =
                                  this.sidebarInner.offsetWidth),
                                (e.viewportHeight = window.innerHeight),
                                (e.maxTranslateY =
                                  e.containerHeight - e.sidebarHeight),
                                this._calcDimensionsWithScroll();
                            }
                          },
                        },
                        {
                          key: "_calcDimensionsWithScroll",
                          value: function () {
                            var e = this.dimensions;
                            (e.sidebarLeft = t.offsetRelative(
                              this.sidebar
                            ).left),
                              (e.viewportTop =
                                document.documentElement.scrollTop ||
                                document.body.scrollTop),
                              (e.viewportBottom =
                                e.viewportTop + e.viewportHeight),
                              (e.viewportLeft =
                                document.documentElement.scrollLeft ||
                                document.body.scrollLeft),
                              (e.topSpacing = this.options.topSpacing),
                              (e.bottomSpacing = this.options.bottomSpacing),
                              "function" == typeof e.topSpacing &&
                                (e.topSpacing =
                                  parseInt(e.topSpacing(this.sidebar)) || 0),
                              "function" == typeof e.bottomSpacing &&
                                (e.bottomSpacing =
                                  parseInt(e.bottomSpacing(this.sidebar)) || 0),
                              "VIEWPORT-TOP" === this.affixedType
                                ? e.topSpacing < e.lastTopSpacing &&
                                  ((e.translateY +=
                                    e.lastTopSpacing - e.topSpacing),
                                  (this._reStyle = !0))
                                : "VIEWPORT-BOTTOM" === this.affixedType &&
                                  e.bottomSpacing < e.lastBottomSpacing &&
                                  ((e.translateY +=
                                    e.lastBottomSpacing - e.bottomSpacing),
                                  (this._reStyle = !0)),
                              (e.lastTopSpacing = e.topSpacing),
                              (e.lastBottomSpacing = e.bottomSpacing);
                          },
                        },
                        {
                          key: "isSidebarFitsViewport",
                          value: function () {
                            var t = this.dimensions,
                              e =
                                "down" === this.scrollDirection
                                  ? t.lastBottomSpacing
                                  : t.lastTopSpacing;
                            return (
                              this.dimensions.sidebarHeight + e <
                              this.dimensions.viewportHeight
                            );
                          },
                        },
                        {
                          key: "observeScrollDir",
                          value: function () {
                            var t = this.dimensions;
                            if (t.lastViewportTop !== t.viewportTop) {
                              var e =
                                "down" === this.direction ? Math.min : Math.max;
                              t.viewportTop ===
                                e(t.viewportTop, t.lastViewportTop) &&
                                (this.direction =
                                  "down" === this.direction ? "up" : "down");
                            }
                          },
                        },
                        {
                          key: "getAffixType",
                          value: function () {
                            this._calcDimensionsWithScroll();
                            var t = this.dimensions,
                              e = t.viewportTop + t.topSpacing,
                              i = this.affixedType;
                            return (
                              e <= t.containerTop ||
                              t.containerHeight <= t.sidebarHeight
                                ? ((t.translateY = 0), (i = "STATIC"))
                                : (i =
                                    "up" === this.direction
                                      ? this._getAffixTypeScrollingUp()
                                      : this._getAffixTypeScrollingDown()),
                              (t.translateY = Math.max(0, t.translateY)),
                              (t.translateY = Math.min(
                                t.containerHeight,
                                t.translateY
                              )),
                              (t.translateY = Math.round(t.translateY)),
                              (t.lastViewportTop = t.viewportTop),
                              i
                            );
                          },
                        },
                        {
                          key: "_getAffixTypeScrollingDown",
                          value: function () {
                            var t = this.dimensions,
                              e = t.sidebarHeight + t.containerTop,
                              i = t.viewportTop + t.topSpacing,
                              s = t.viewportBottom - t.bottomSpacing,
                              n = this.affixedType;
                            return (
                              this.isSidebarFitsViewport()
                                ? t.sidebarHeight + i >= t.containerBottom
                                  ? ((t.translateY = t.containerBottom - e),
                                    (n = "CONTAINER-BOTTOM"))
                                  : i >= t.containerTop &&
                                    ((t.translateY = i - t.containerTop),
                                    (n = "VIEWPORT-TOP"))
                                : t.containerBottom <= s
                                ? ((t.translateY = t.containerBottom - e),
                                  (n = "CONTAINER-BOTTOM"))
                                : e + t.translateY <= s
                                ? ((t.translateY = s - e),
                                  (n = "VIEWPORT-BOTTOM"))
                                : t.containerTop + t.translateY <= i &&
                                  0 !== t.translateY &&
                                  t.maxTranslateY !== t.translateY &&
                                  (n = "VIEWPORT-UNBOTTOM"),
                              n
                            );
                          },
                        },
                        {
                          key: "_getAffixTypeScrollingUp",
                          value: function () {
                            var t = this.dimensions,
                              e = t.sidebarHeight + t.containerTop,
                              i = t.viewportTop + t.topSpacing,
                              s = t.viewportBottom - t.bottomSpacing,
                              n = this.affixedType;
                            return (
                              i <= t.translateY + t.containerTop
                                ? ((t.translateY = i - t.containerTop),
                                  (n = "VIEWPORT-TOP"))
                                : t.containerBottom <= s
                                ? ((t.translateY = t.containerBottom - e),
                                  (n = "CONTAINER-BOTTOM"))
                                : this.isSidebarFitsViewport() ||
                                  (t.containerTop <= i &&
                                    0 !== t.translateY &&
                                    t.maxTranslateY !== t.translateY &&
                                    (n = "VIEWPORT-UNBOTTOM")),
                              n
                            );
                          },
                        },
                        {
                          key: "_getStyle",
                          value: function (e) {
                            if (void 0 !== e) {
                              var i = { inner: {}, outer: {} },
                                s = this.dimensions;
                              switch (e) {
                                case "VIEWPORT-TOP":
                                  i.inner = {
                                    position: "fixed",
                                    top: s.topSpacing,
                                    left: s.sidebarLeft - s.viewportLeft,
                                    width: s.sidebarWidth,
                                  };
                                  break;
                                case "VIEWPORT-BOTTOM":
                                  i.inner = {
                                    position: "fixed",
                                    top: "auto",
                                    left: s.sidebarLeft,
                                    bottom: s.bottomSpacing,
                                    width: s.sidebarWidth,
                                  };
                                  break;
                                case "CONTAINER-BOTTOM":
                                case "VIEWPORT-UNBOTTOM":
                                  var n = this._getTranslate(
                                    0,
                                    s.translateY + "px"
                                  );
                                  i.inner = n
                                    ? { transform: n }
                                    : {
                                        position: "absolute",
                                        top: s.translateY,
                                        width: s.sidebarWidth,
                                      };
                              }
                              switch (e) {
                                case "VIEWPORT-TOP":
                                case "VIEWPORT-BOTTOM":
                                case "VIEWPORT-UNBOTTOM":
                                case "CONTAINER-BOTTOM":
                                  i.outer = {
                                    height: s.sidebarHeight,
                                    position: "relative",
                                  };
                              }
                              return (
                                (i.outer = t.extend(
                                  { height: "", position: "" },
                                  i.outer
                                )),
                                (i.inner = t.extend(
                                  {
                                    position: "relative",
                                    top: "",
                                    left: "",
                                    bottom: "",
                                    width: "",
                                    transform: "",
                                  },
                                  i.inner
                                )),
                                i
                              );
                            }
                          },
                        },
                        {
                          key: "stickyPosition",
                          value: function (i) {
                            if (!this._breakpoint) {
                              (i = this._reStyle || i || !1),
                                this.options.topSpacing,
                                this.options.bottomSpacing;
                              var s = this.getAffixType(),
                                n = this._getStyle(s);
                              if ((this.affixedType != s || i) && s) {
                                var o =
                                  "affix." +
                                  s.toLowerCase().replace("viewport-", "") +
                                  e;
                                for (var a in (t.eventTrigger(this.sidebar, o),
                                "STATIC" === s
                                  ? t.removeClass(
                                      this.sidebar,
                                      this.options.stickyClass
                                    )
                                  : t.addClass(
                                      this.sidebar,
                                      this.options.stickyClass
                                    ),
                                n.outer)) {
                                  var r =
                                    "number" == typeof n.outer[a] ? "px" : "";
                                  this.sidebar.style[a] = n.outer[a] + r;
                                }
                                for (var l in n.inner) {
                                  var d =
                                    "number" == typeof n.inner[l] ? "px" : "";
                                  this.sidebarInner.style[l] = n.inner[l] + d;
                                }
                                var c =
                                  "affixed." +
                                  s.toLowerCase().replace("viewport-", "") +
                                  e;
                                t.eventTrigger(this.sidebar, c);
                              } else
                                this._initialized &&
                                  (this.sidebarInner.style.left = n.inner.left);
                              this.affixedType = s;
                            }
                          },
                        },
                        {
                          key: "_widthBreakpoint",
                          value: function () {
                            window.innerWidth <= this.options.minWidth
                              ? ((this._breakpoint = !0),
                                (this.affixedType = "STATIC"),
                                this.sidebar.removeAttribute("style"),
                                t.removeClass(
                                  this.sidebar,
                                  this.options.stickyClass
                                ),
                                this.sidebarInner.removeAttribute("style"))
                              : (this._breakpoint = !1);
                          },
                        },
                        {
                          key: "updateSticky",
                          value: function () {
                            var t,
                              e = this,
                              i =
                                0 < arguments.length && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                            this._running ||
                              ((this._running = !0),
                              (t = i.type),
                              requestAnimationFrame(function () {
                                if ("scroll" === t)
                                  e._calcDimensionsWithScroll(),
                                    e.observeScrollDir(),
                                    e.stickyPosition();
                                else
                                  e._widthBreakpoint(),
                                    e.calcDimensions(),
                                    e.stickyPosition(!0);
                                e._running = !1;
                              }));
                          },
                        },
                        {
                          key: "_setSupportFeatures",
                          value: function () {
                            var e = this.support;
                            (e.transform = t.supportTransform()),
                              (e.transform3d = t.supportTransform(!0));
                          },
                        },
                        {
                          key: "_getTranslate",
                          value: function () {
                            var t =
                                0 < arguments.length && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0,
                              e =
                                1 < arguments.length && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              i =
                                2 < arguments.length && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : 0;
                            return this.support.transform3d
                              ? "translate3d(" + t + ", " + e + ", " + i + ")"
                              : !!this.support.translate &&
                                  "translate(" + t + ", " + e + ")";
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            window.removeEventListener("resize", this, {
                              capture: !1,
                            }),
                              window.removeEventListener("scroll", this, {
                                capture: !1,
                              }),
                              this.sidebar.classList.remove(
                                this.options.stickyClass
                              ),
                              (this.sidebar.style.minHeight = ""),
                              this.sidebar.removeEventListener(
                                "update" + e,
                                this
                              );
                            var t = { inner: {}, outer: {} };
                            for (var i in ((t.inner = {
                              position: "",
                              top: "",
                              left: "",
                              bottom: "",
                              width: "",
                              transform: "",
                            }),
                            (t.outer = { height: "", position: "" }),
                            t.outer))
                              this.sidebar.style[i] = t.outer[i];
                            for (var s in t.inner)
                              this.sidebarInner.style[s] = t.inner[s];
                            this.options.resizeSensor &&
                              "undefined" != typeof ResizeSensor &&
                              (ResizeSensor.detach(
                                this.sidebarInner,
                                this.handleEvent
                              ),
                              ResizeSensor.detach(
                                this.container,
                                this.handleEvent
                              ));
                          },
                        },
                      ],
                      [
                        {
                          key: "supportTransform",
                          value: function (t) {
                            var e = !1,
                              i = t ? "perspective" : "transform",
                              s = i.charAt(0).toUpperCase() + i.slice(1),
                              n = document.createElement("support").style;
                            return (
                              (
                                i +
                                " " +
                                ["Webkit", "Moz", "O", "ms"].join(s + " ") +
                                s
                              )
                                .split(" ")
                                .forEach(function (t, i) {
                                  if (void 0 !== n[t]) return (e = t), !1;
                                }),
                              e
                            );
                          },
                        },
                        {
                          key: "eventTrigger",
                          value: function (t, e, i) {
                            try {
                              var s = new CustomEvent(e, { detail: i });
                            } catch (t) {
                              (s =
                                document.createEvent(
                                  "CustomEvent"
                                )).initCustomEvent(e, !0, !0, i);
                            }
                            t.dispatchEvent(s);
                          },
                        },
                        {
                          key: "extend",
                          value: function (t, e) {
                            var i = {};
                            for (var s in t)
                              void 0 !== e[s] ? (i[s] = e[s]) : (i[s] = t[s]);
                            return i;
                          },
                        },
                        {
                          key: "offsetRelative",
                          value: function (t) {
                            var e = { left: 0, top: 0 };
                            do {
                              var i = t.offsetTop,
                                s = t.offsetLeft;
                              isNaN(i) || (e.top += i),
                                isNaN(s) || (e.left += s),
                                (t =
                                  "BODY" === t.tagName
                                    ? t.parentElement
                                    : t.offsetParent);
                            } while (t);
                            return e;
                          },
                        },
                        {
                          key: "addClass",
                          value: function (e, i) {
                            t.hasClass(e, i) ||
                              (e.classList
                                ? e.classList.add(i)
                                : (e.className += " " + i));
                          },
                        },
                        {
                          key: "removeClass",
                          value: function (e, i) {
                            t.hasClass(e, i) &&
                              (e.classList
                                ? e.classList.remove(i)
                                : (e.className = e.className.replace(
                                    new RegExp(
                                      "(^|\\b)" +
                                        i.split(" ").join("|") +
                                        "(\\b|$)",
                                      "gi"
                                    ),
                                    " "
                                  )));
                          },
                        },
                        {
                          key: "hasClass",
                          value: function (t, e) {
                            return t.classList
                              ? t.classList.contains(e)
                              : new RegExp("(^| )" + e + "( |$)", "gi").test(
                                  t.className
                                );
                          },
                        },
                        {
                          key: "defaults",
                          get: function () {
                            return i;
                          },
                        },
                      ]
                    ),
                    t
                  );
                })());
            (t.default = n), (window.StickySidebar = n);
          })(e);
        })((e = { exports: {} }), e.exports),
        e.exports),
      n =
        (i = s) &&
        i.__esModule &&
        Object.prototype.hasOwnProperty.call(i, "default")
          ? i.default
          : i;
    (t.default = n),
      (t.__moduleExports = s),
      Object.defineProperty(t, "__esModule", { value: !0 });
  });
var the7Utils = {};
function showLazyImg(t) {
  t.hasClass("is-loaded") ||
    setTimeout(function () {
      t.parent().removeClass("layzr-bg");
    }, 350);
}
(the7Utils.parseIntParam = function (t, e) {
  return (e = void 0 !== e ? e : 0), t ? parseInt(t) : e;
}),
  (the7Utils.parseFloatParam = function (t, e) {
    return (e = void 0 !== e ? e : 0), t ? parseFloat(t) : e;
  }),
  (the7Utils.parseParam = function (t, e) {
    return (e = void 0 !== e ? e : ""), void 0 !== t ? t : e;
  }),
  (the7Utils.isFunction = function (t) {
    return "function" == typeof t;
  }),
  (function (t, e, i, s) {
    "use strict";
    var n = "rcrumbs",
      o = {
        version: "1.1.0",
        callback: {
          preCrumbsListDisplay: t.noop,
          preCrumbDisplay: t.noop,
          postCrumbsListDisplay: t.noop,
          postCrumbDisplay: t.noop,
        },
        ellipsis: !0,
        windowResize: !0,
        nbUncollapsableCrumbs: 2,
        nbFixedCrumbs: 0,
        animation: { activated: !0, speed: 400 },
      };
    function a(e, i) {
      (this.element = e),
        (this.$element = t(e)),
        (this.options = t.extend(!0, {}, o, i)),
        (this._defaults = o),
        (this._name = n),
        (a.prototype.plugin = this),
        this._init();
    }
    (a.prototype = {
      version: function () {
        return this.options.version;
      },
      _init: function () {
        if (
          (this.$element.hasClass("rcrumbs") ||
            this.$element.addClass("rcrumbs"),
          (this.nbCrumbDisplayed = 0),
          (this.$crumbsList = t(this.element)),
          (this.$crumbs = t("li", this.$crumbsList)),
          (this.$lastCrumb = this.$crumbs.last()),
          (this.reversedCrumbs = t("li", this.$crumbsList).get().reverse()),
          (this.lastNbCrumbDisplayed = 0),
          (this.totalCrumbsWidth = 0),
          (this.fixedCrumbsWidth = 0),
          this._initCrumbs(),
          this.options.nbFixedCrumbs > 0)
        ) {
          var e = this.$crumbs.length;
          (this.$crumbs = t("li", this.$crumbsList).slice(
            this.options.nbFixedCrumbs,
            e
          )),
            (this.reversedCrumbs = t("li", this.$crumbsList)
              .slice(this.options.nbFixedCrumbs, e)
              .get()
              .reverse());
          var i = this;
          t("li", this.$crumbsList)
            .slice(0, this.options.nbFixedCrumbs)
            .each(function (e, s) {
              (i.totalCrumbsWidth += t(s).data("width")), t(s).addClass("show");
            });
        }
        this._showOrHideCrumbsList(!0),
          this.options.windowResize &&
            this._showOrHideCrumbsListOnWindowResize();
      },
      _getHiddenElWidth: function (e) {
        var i,
          s = t(e).clone(!1);
        return (
          s.css({ visibility: "hidden", position: "absolute" }),
          s.appendTo(this.$crumbsList),
          (i = s.width()),
          s.remove(),
          i
        );
      },
      _initCrumbs: function () {
        var e = this;
        t(this.$crumbsList)
          .contents()
          .filter(function () {
            return 3 === this.nodeType;
          })
          .remove(),
          t.each(this.$crumbs, function (i, s) {
            var n = t(this);
            e._storeCrumbWidth(n);
          }),
          this.options.nbFixedCrumbs > 0 &&
            t(this.$crumbs)
              .slice(0, this.options.nbFixedCrumbs)
              .each(function (i, s) {
                e.fixedCrumbsWidth += t(s).data("width");
              });
      },
      _storeCrumbWidth: function (t) {
        var e = this._getHiddenElWidth(t);
        return t.data("width", e), e;
      },
      _showOrHideCrumbsList: function (e) {
        var i = this;
        (this.remainingSpaceToDisplayCrumbs = this.$element.width()),
          (this.nbCrumbDisplayed = 0),
          (this.totalCrumbsWidth = 0),
          this.options.nbFixedCrumbs > 0 &&
            ((this.remainingSpaceToDisplayCrumbs -= this.fixedCrumbsWidth),
            t("li", this.$crumbsList)
              .slice(0, this.options.nbFixedCrumbs)
              .each(function (e, s) {
                i.totalCrumbsWidth += t(s).data("width");
              })),
          (this.nextCrumbToShowWidth = undefined),
          this.options.callback.preCrumbsListDisplay(this),
          t.each(this.reversedCrumbs, function (s, n) {
            var o = t(this),
              a = t(i.reversedCrumbs[s + 1]);
            i._showOrHideCrumb(o, a, s, e);
          }),
          (this.lastNbCrumbDisplayed = this.nbCrumbDisplayed),
          this.options.callback.postCrumbsListDisplay(this);
      },
      _showOrHideCrumb: function (t, e, i, s) {
        this.options.callback.preCrumbDisplay(t);
        var n = this;
        function o() {
          t.addClass("show"),
            n.lastNbCrumbDisplayed < n.nbCrumbDisplayed + 1 &&
            n.options.animation.activated &&
            !s
              ? (t.width(0),
                t.animate(
                  { width: t.data("width") },
                  n.options.animation.speed,
                  function () {
                    n.options.callback.postCrumbDisplay(t);
                  }
                ))
              : n.options.callback.postCrumbDisplay(t),
            (n.nbCrumbDisplayed += 1);
        }
        (this.remainingSpaceToDisplayCrumbs -= t.data("width")),
          i < this.options.nbUncollapsableCrumbs
            ? (o(),
              this.remainingSpaceToDisplayCrumbs < 0 &&
                (function (t) {
                  t.css({
                    width:
                      n.remainingSpaceToDisplayCrumbs + t.data("width") + "px",
                  }),
                    t.addClass("ellipsis");
                })(this.$lastCrumb),
              (this.totalCrumbsWidth += t.data("width")))
            : this.remainingSpaceToDisplayCrumbs >= 0
            ? (o(), (this.totalCrumbsWidth += t.data("width")))
            : (this.lastNbCrumbDisplayed > this.nbCrumbDisplayed - 1 &&
              this.options.animation.activated
                ? t.animate(
                    { width: 0 },
                    n.options.animation.speed,
                    function () {
                      t.removeClass("show");
                    }
                  )
                : t.removeClass("show"),
              this.nextCrumbToShowWidth ||
                (this.nextCrumbToShowWidth = t.data("width")));
      },
      _showOrHideCrumbsListOnWindowResize: function () {
        var i = this;
        t(e).resize(function () {
          var e = i.$element.width();
          (e < i.totalCrumbsWidth ||
            i.totalCrumbsWidth + i.nextCrumbToShowWidth < e) &&
            (t.each(i.reversedCrumbs, function (e, i) {
              t(this).stop(!0, !0);
            }),
            i._showOrHideCrumbsList()),
            e >= i.totalCrumbsWidth &&
              i.$lastCrumb.hasClass("ellipsis") &&
              i._disableEllipsis(i.$lastCrumb);
        });
      },
      _disableEllipsis: function (t) {
        t.css({ width: "auto" }), t.removeClass("ellipsis");
      },
    }),
      (t.fn[n] = function (e) {
        if (a.prototype[e] && -1 === e.indexOf("_")) {
          var i = t.data(this[0], "plugin_" + n);
          if (i)
            return a.prototype[e].apply(
              i,
              Array.prototype.slice.call(arguments, 1)
            );
          t.error(
            "jquery." + n + " plugin must be initialized first on the element"
          );
        } else {
          if ("object" == typeof e || !e)
            return this.each(function () {
              t.data(this, "plugin_" + n)
                ? t.error(
                    "jquery." +
                      n +
                      " plugin cannot be instantiated multiple times on same element"
                  )
                : t.data(this, "plugin_" + n, new a(this, e));
            });
          t.error("Method " + e + " does not exist on jquery." + n);
        }
      });
  })(jQuery, window, document),
  (function (t) {
    function e() {
      return t(
        '<span class="avatar no-avatar"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path d="M8,8c2.2,0,4-1.8,4-4s-1.8-4-4-4S4,1.8,4,4S5.8,8,8,8z M8,10c-2.7,0-8,1.3-8,4v1c0,0.5,0.4,1,1,1h14c0.5,0,1-0.5,1-1v-1 C16,11.3,10.7,10,8,10z"/></svg></span>'
      );
    }
    var i;
    function s(e, i, s) {
      e.addClass("animation-triggered"),
        setTimeout(function () {
          e.hasClass("animation-triggered") &&
            (e.removeClass("animation-triggered").addClass("shown"),
            t().layzrInitialisation(),
            "function" == typeof s && s.call(e));
        }, i);
    }
    (t.fn.exists = function () {
      return t(this).length > 0;
    }),
      (t.fn.loaded = function (e, i, s) {
        var n = this.length;
        return n > 0
          ? this.each(function () {
              var s = this,
                o = t(s);
              o.on("load.dt", function (s) {
                t(this).off("load.dt"),
                  "function" == typeof e && e.call(this),
                  --n <= 0 && "function" == typeof i && i.call(this);
              }),
                s.complete && void 0 !== s.complete && o.trigger("load.dt");
            })
          : s
          ? ("function" == typeof i && i.call(this), this)
          : void 0;
      }),
      (dtGlobals.isInViewport = function (e) {
        var i = t(window),
          s = e,
          n = i.scrollTop(),
          o = i.scrollTop() + i.height(),
          a = s.offset().top + 20;
        return o >= a && n <= a;
      }),
      (t.fn.layzrInitialisation = function () {
        void 0 !== i
          ? (this.each(function () {
              var e = t(this);
              i.addItems(e[0]);
            }),
            i.update())
          : (i = new Layzr({
              selector: ".lazy-load",
              attr: "data-src",
              attrSrcSet: "data-srcset",
              retinaAttr: "data-src-retina",
              hiddenAttr: "data-src-hidden",
              threshold: 0,
              callback: function () {
                var i = t(this);
                if (i.hasClass("the7-avatar") && 1 === this.naturalWidth) {
                  const t = e();
                  i.replaceWith(t), (i = t);
                }
                showLazyImg(i),
                  i
                    .parents(".fancy-media-wrap.photoswipe-wrapper")
                    .initPhotoswipe();
              },
              before: function () {
                var i = t(this);
                i.hasClass("the7-avatar") &&
                  i.on("error", function () {
                    const t = e();
                    i.replaceWith(t), showLazyImg(t);
                  });
              },
              after: function () {
                var e = t(this);
                this.complete && showLazyImg(e);
              },
            }));
      }),
      (dtGlobals.addOnloadEvent = function (e) {
        if (
          ("object" == typeof t.ready || "function" == typeof t.ready) &&
          "function" == typeof t.ready.then
        )
          t.ready.then(function () {
            e();
          });
        else if (void 0 !== window.addEventListener)
          window.addEventListener("load", e, !1);
        else if (void 0 !== window.attachEvent) window.attachEvent("onload", e);
        else if (null != window.onload) {
          var i = window.onload;
          window.onload = function (t) {
            i(t), window[e]();
          };
        } else window.onload = e;
      }),
      (t.fn.the7ImageRatio = function (e) {
        var i = function () {
            return !(
              (void 0 !== Modernizr.objectfit && Modernizr.objectfit) ||
              void 0 === Modernizr.objectfit
            );
          },
          s = {
            init: function () {
              return i()
                ? this.each(function () {
                    var e = t(this),
                      i = e.parent(),
                      s = e.prop("src");
                    s &&
                      !e.hasClass("compat-object-fit") &&
                      i
                        .css("backgroundImage", "url(" + s + ")")
                        .addClass("compat-object-fit");
                  })
                : this;
            },
            update: function (e) {
              var s = i();
              return this.each(function () {
                var i = t(this),
                  n = i.find("img").first();
                if (!s) {
                  var o = { width: "", height: "" };
                  if (e) {
                    var a = i.width(),
                      r = i.height(),
                      l = n.width() / n.height(),
                      d = a / r;
                    (o = { width: "auto", height: "auto" }),
                      l < d ? (o.height = "100%") : l > d && (o.width = "100%");
                  }
                  n.css(o);
                }
              });
            },
          };
        return s[e]
          ? s[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? void 0
          : s.init.apply(this, arguments);
      }),
      (t.fn.the7WidgetImageRatio = function (e) {
        var i = t(this),
          s = i.find(".img-ratio-wrapper"),
          n = {
            init: function () {
              s.find("img").the7ImageRatio(),
                n.refresh(),
                t(window).on("debouncedresize", function () {
                  n.refresh();
                });
            },
            refresh: function () {
              var t = i.hasClass("preserve-img-ratio-y");
              s.the7ImageRatio("update", t);
            },
          };
        return (
          n[e]
            ? n[e].apply(this, Array.prototype.slice.call(arguments, 1))
            : ("object" != typeof e && e) || n.init.apply(this, arguments),
          i
        );
      }),
      (window.the7ApplyWidgetImageRatio = function (t) {
        t.the7WidgetImageRatio();
      }),
      (window.the7GetHiddenHeight = function (t, e) {
        if (!t.length) return 0;
        var i = t.attr("style");
        t.css({ visibility: "hidden", display: "block" });
        var s = t;
        "" !== e && (s = t.find(e));
        var n = s.height();
        return t.attr("style", i || ""), n;
      }),
      (window.the7LocaleSensitiveStringsCompare = function (t, e) {
        return new Intl.Collator(document.documentElement.lang, {
          sensitivity: "base",
        }).compare(t, e);
      }),
      (window.the7ProcessEffects = function (e, i) {
        var n = 0;
        0 !== e.length
          ? e.each(function () {
              var e = t(this);
              t(".mobile-true").length > 0 ||
              e.parents(".loading-effect-none").length > 0
                ? e.hasClass("shown") ||
                  e.hasClass("animation-triggered") ||
                  s(e, 200, i)
                : e.hasClass("shown") ||
                  e.hasClass("animation-triggered") ||
                  !dtGlobals.isInViewport(e) ||
                  e.hasClass("hidden") ||
                  s(e, 100 * ++n, i);
            })
          : t().layzrInitialisation();
      });
  })(jQuery),
  jQuery(function (t) {
    var i = t(document),
      s = t(window),
      n = t("html"),
      o = t("body"),
      a = t("#page"),
      r = function (t, e, i = !1) {
        let s;
        return function () {
          const n = this,
            o = arguments;
          clearTimeout(s),
            (s = setTimeout(() => {
              (s = null), t.apply(n, o);
            }, e)),
            i && t.apply(n, o);
        };
      };
    /*!- Custom resize function*/
    !dtGlobals.isMobile || dtGlobals.isWindowsPhone || dtGlobals.isAndroid
      ? s.on("resize", function () {
          l();
        })
      : s.bind("orientationchange", function () {
          l();
        });
    var l = r(function () {
      t(window).trigger("debouncedresize"),
        t(window).trigger("the7_widget_resize");
    }, 200);
    s.trigger("debouncedresize");
    var d,
      c,
      h = window.innerWidth,
      u = window.innerHeight;
    function p() {
      if (dtGlobals.isMobile)
        t(".skills").length > 0 &&
          "undefined" != typeof animateSkills &&
          the7Utils.isFunction(animateSkills) &&
          t(".skills").animateSkills();
      else if (
        t(".animation-at-the-same-time").length > 0 ||
        t(".animate-element").length > 0
      ) {
        var e = -1;
        t(".animation-at-the-same-time:in-viewport").each(function () {
          var e = t(this);
          e.find(".animate-element").addClass("animation-triggered"),
            e
              .find(".animate-element:not(.start-animation)")
              .addClass("start-animation");
        }),
          t(".animate-element:not(.start-animation):in-viewport").each(
            function () {
              var i = t(this);
              !i.parents(".animation-at-the-same-time").length > 0 &&
                (i.hasClass("start-animation") ||
                  i.hasClass("animation-triggered") ||
                  (i.addClass("animation-triggered"),
                  e++,
                  setTimeout(function () {
                    i.addClass("start-animation"),
                      i.hasClass("skills") && i.animateSkills();
                  }, 200 * e)));
            }
          );
      }
    }
    (onWindowWidthResizeDebounced = r(function () {
      s.trigger("the7-resize-width-debounce");
    }, 250)),
      (onWindowHeightResizeDebounced = r(function () {
        s.trigger("the7-resize-height-debounce");
      }, 250)),
      s.on("resize", function () {
        var t = window.innerWidth,
          e = window.innerHeight;
        h !== t &&
          ((h = t),
          s.trigger("the7-resize-width"),
          onWindowWidthResizeDebounced()),
          u !== e &&
            ((u = e),
            s.trigger("the7-resize-height"),
            onWindowHeightResizeDebounced());
      }),
      (t.fn.layzrCarouselUpdate = function () {
        var e = t(this),
          i = e.find(".dt-owl-item.active"),
          s = ".owl-thumb-lazy-load-show",
          n = !1,
          o = i.last().next().find("img").not(s);
        (o = (o = (o = o.add(i.first().prev().find("img").not(s))).add(
          i.find("img").not(s)
        )).filter(":not(.is-loaded)")).each(function () {
          var i = t(this).attr("data-src");
          if (void 0 !== i) {
            n = !0;
            var o = e.find('.dt-owl-item img[data-src="' + i + '"]').not(s);
            o.addClass("owl-thumb-lazy-load-show"), o.attr("loading", "eager");
          }
        }),
          n && (d.updateSelector(), d.update());
      }),
      t(
        ".elementor-owl-carousel-call img.lazy, .elementor-owl-carousel-call img.lazy-load"
      )
        .removeClass("lazy-load")
        .addClass("lazy-scroll"),
      t(".layzr-loading-on, .vc_single_image-img").layzrInitialisation(),
      (window.vc_rowBehaviour = function () {
        function t() {
          a('[data-vc-full-width="true"]').each(function () {
            var t,
              e,
              i = a(this),
              n = i.next(".vc_row-full-width"),
              r = i.parent(),
              l = parseInt(i.css("margin-left"), 10),
              d = parseInt(i.css("margin-right"), 10),
              c = window.innerWidth,
              h = s.width(),
              u = a("#content").width(),
              p = c > dtLocal.themeSettings.mobileHeader.firstSwitchPoint,
              f = Math.max(u, h),
              m = a("#main > .wf-wrap"),
              g = parseInt(m.css("width")),
              v = parseInt(m.css("padding-left")),
              w = o.hasClass("responsive-off"),
              y = o.hasClass("sticky-header"),
              b = o.hasClass("header-side-left"),
              C = o.hasClass("header-side-right"),
              _ = "rtl" === jQuery(document).attr("dir") ? "right" : "left";
            if (
              (i.addClass("vc_hidden"),
              n.length ||
                (n = i
                  .closest(".vc_ie-flexbox-fixer")
                  .next(".vc_row-full-width")),
              n.length)
            ) {
              r.hasClass("vc_section") &&
                ((l = parseInt(r.css("margin-left"), 10)),
                (d = parseInt(r.css("margin-right"), 10))),
                a(".boxed").length > 0
                  ? (f = a("#main").width())
                  : w ||
                    (p &&
                      a(".side-header-v-stroke").length &&
                      "none" !== a(".side-header-v-stroke").css("display"))
                  ? (f = c <= u ? u : h - a(".side-header-v-stroke").width())
                  : !y &&
                    (b || C) &&
                    p &&
                    a(".side-header").length &&
                    "none" !== a(".side-header").css("display") &&
                    (f = c <= u ? u : h - a(".side-header").width()),
                (t = Math.ceil((f - g + 2 * v) / 2)),
                a(".sidebar-left").length > 0 || a(".sidebar-right").length > 0
                  ? ((e = a("#content").width()), (t = 0))
                  : (e = a("#main").innerWidth());
              var x = 0 - t - l;
              if (
                (i.css(_, x),
                i.css({
                  position: "relative",
                  "box-sizing": "border-box",
                  width: e,
                }),
                !i.data("vcStretchContent"))
              ) {
                var S = -1 * x;
                0 > S && (S = 0);
                var k = e - S - n.width() + l + d;
                0 > k && (k = 0),
                  i.css({
                    "padding-left": S + "px",
                    "padding-right": k + "px",
                  });
              }
              i.data("vcStretchContent") &&
                i.find(".upb_row_bg").length > 0 &&
                i.find(".upb_row_bg").each(function () {
                  var t = a(this);
                  "full" === t.data("bg-override") &&
                    (t.css({ "min-width": e + "px" }), t.css(_, 0));
                }),
                i.attr("data-vc-full-width-init", "true"),
                i.removeClass("vc_hidden"),
                i.find(".ts-wrap").each(function () {
                  var t = a(this).data("thePhotoSlider");
                  void 0 !== t && t.update();
                });
            }
          });
        }
        function e() {
          a(".vc_row-o-full-height:first").each(function () {
            var t, e, i;
            (t = a(window).height()) > (e = a(this).offset().top) &&
              ((i = 100 - e / (t / 100)), a(this).css("min-height", i + "vh"));
          });
        }
        var i,
          n,
          a = window.jQuery;
        a(window)
          .off("resize.vcRowBehaviour")
          .on("resize.vcRowBehaviour", t)
          .on("resize.vcRowBehaviour", e),
          t(),
          e(),
          (window.navigator.userAgent.indexOf("MSIE ") > 0 ||
            navigator.userAgent.match(/Trident.*rv\:11\./)) &&
            a(".vc_row-o-full-height").each(function () {
              var t = a(this);
              t.data("the7VCRowFixedInIE") ||
                "flex" !== t.css("display") ||
                (t.wrap('<div class="vc_ie-flexbox-fixer"></div>'),
                t.data("the7VCRowFixedInIE", !0));
            }),
          vc_initVideoBackgrounds(),
          (n = !1),
          window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
          a(".vc_parallax-inner").remove(),
          a("[data-5p-top-bottom]").removeAttr(
            "data-5p-top-bottom data-30p-top-bottom"
          ),
          a("[data-vc-parallax]").each(function () {
            var t, e, i, s, o;
            (n = !0),
              "on" === a(this).data("vcParallaxOFade") &&
                a(this)
                  .children()
                  .attr("data-5p-top-bottom", "opacity:0;")
                  .attr("data-30p-top-bottom", "opacity:1;"),
              (t = 100 * a(this).data("vcParallax")),
              (i = a("<div />")
                .addClass("vc_parallax-inner")
                .appendTo(a(this))).height(t + "%"),
              (s = a(this).data("vcParallaxImage")),
              (o = vcExtractYoutubeId(s))
                ? insertYoutubeVideoAsBackground(i, o)
                : void 0 !== s && i.css("background-image", "url(" + s + ")"),
              (e = -(t - 100)),
              i
                .attr("data-bottom-top", "top: " + e + "%;")
                .attr("data-top-bottom", "top: 0%;");
          }),
          n &&
            window.skrollr &&
            ((i = {
              forceHeight: !1,
              smoothScrolling: !1,
              mobileCheck: function () {
                return !1;
              },
            }),
            (window.vcParallaxSkroll = skrollr.init(i)),
            window.vcParallaxSkroll);
      }),
      t('div[data-vc-full-width="true"][data-vc-full-width-init="false"]')
        .length > 0 && vc_rowBehaviour(),
      (t.fn.clickOverlayGradient = function () {
        return this.each(function () {
          var e = t(this),
            i = 0,
            s = e.find(".entry-excerpt"),
            n = e.find(".post-details, .box-button");
          s.exists() && (i += s.height()),
            n.exists() && (i += n.innerHeight()),
            e.data("the7OverlayLayoutContentOffset", i),
            e.css({ transform: "translateY(" + i + "px)" }),
            e.data("overlayLayoutEventsWasAdded") ||
              dtGlobals.isMobile ||
              (e.data("overlayLayoutEventsWasAdded", !0),
              e
                .parents(".post")
                .first()
                .on("mouseenter tap", function () {
                  e.css("transform", "translateY(0px)");
                })
                .on("mouseleave tap", function () {
                  e.css(
                    "transform",
                    "translateY(" +
                      e.data("the7OverlayLayoutContentOffset") +
                      "px)"
                  );
                }));
        });
      }),
      dtGlobals.addOnloadEvent(function () {
        t(
          ".content-rollover-layout-list:not(.disable-layout-hover) .dt-css-grid .post-entry-wrapper"
        ).clickOverlayGradient();
      }),
      (dtGlobals.touches = {}),
      (dtGlobals.touches.touching = !1),
      (dtGlobals.touches.touch = !1),
      (dtGlobals.touches.currX = 0),
      (dtGlobals.touches.currY = 0),
      (dtGlobals.touches.cachedX = 0),
      (dtGlobals.touches.cachedY = 0),
      (dtGlobals.touches.count = 0),
      (dtGlobals.resizeCounter = 0),
      i.on("touchstart", function (e) {
        1 == e.originalEvent.touches.length &&
          ((dtGlobals.touches.touch = e.originalEvent.touches[0]),
          (dtGlobals.touches.cachedX = dtGlobals.touches.touch.pageX),
          (dtGlobals.touches.cachedY = dtGlobals.touches.touch.pageY),
          (dtGlobals.touches.touching = !0),
          setTimeout(function () {
            (dtGlobals.touches.currX = dtGlobals.touches.touch.pageX),
              (dtGlobals.touches.currY = dtGlobals.touches.touch.pageY),
              dtGlobals.touches.cachedX !== dtGlobals.touches.currX ||
                dtGlobals.touches.touching ||
                dtGlobals.touches.cachedY !== dtGlobals.touches.currY ||
                (dtGlobals.touches.count++, t(e.target).trigger("tap"));
          }, 200));
      }),
      i.on("touchend touchcancel", function (t) {
        dtGlobals.touches.touching = !1;
      }),
      i.on("touchmove", function (t) {
        (dtGlobals.touches.touch = t.originalEvent.touches[0]),
          dtGlobals.touches.touching;
      }),
      i.on("tap", function (e) {
        t(".dt-hovered").trigger("mouseout");
      }),
      (function (t) {
        "function" == typeof define && define.amd
          ? define(["jquery"], t)
          : t(jQuery);
      })(function (t, e) {
        var i = 6,
          s = t.event.add,
          n = t.event.remove,
          o = function (e, i, s) {
            t.event.trigger(i, s, e);
          },
          a =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (t, e) {
              return window.setTimeout(function () {
                t();
              }, 25);
            },
          r = { textarea: !0, input: !0, select: !0, button: !0 },
          l = {
            move: "mousemove",
            cancel: "mouseup dragstart",
            end: "mouseup",
          },
          d = "touchmove",
          c = "touchend",
          h = "touchend";
        function u(t) {
          var e = t,
            i = !1,
            s = !1;
          function n(t) {
            i ? (e(), a(n), (s = !0), (i = !1)) : (s = !1);
          }
          (this.kick = function (t) {
            (i = !0), s || n();
          }),
            (this.end = function (t) {
              var n = e;
              t &&
                (s
                  ? ((e = i
                      ? function () {
                          n(), t();
                        }
                      : t),
                    (i = !0))
                  : t());
            });
        }
        function p() {
          return !0;
        }
        function f() {
          return !1;
        }
        function m(t) {
          t.preventDefault();
        }
        function g(t) {
          r[t.target.tagName.toLowerCase()] || t.preventDefault();
        }
        function v(t, e) {
          var i, s;
          if (t.identifiedTouch) return t.identifiedTouch(e);
          for (i = -1, s = t.length; ++i < s; )
            if (t[i].identifier === e) return t[i];
        }
        function w(t, e) {
          var i = v(t.changedTouches, e.identifier);
          if (i && (i.pageX !== e.pageX || i.pageY !== e.pageY)) return i;
        }
        function y(t) {
          k(t, t.data, t, C);
        }
        function b(t) {
          C();
        }
        function C() {
          n(document, l.move, y), n(document, l.cancel, b);
        }
        function _(t) {
          var e = t.data,
            i = w(t, e);
          i && k(t, e, i, S);
        }
        function x(t) {
          var e = t.data;
          v(t.changedTouches, e.identifier) && S(e.identifier);
        }
        function S(t) {
          n(document, "." + t, _), n(document, "." + t, x);
        }
        function k(t, e, s, n) {
          var a = s.pageX - e.startX,
            r = s.pageY - e.startY;
          a * a + r * r < i * i ||
            (function (t, e, i, s, n, a) {
              var r, l;
              e.target;
              (r = t.targetTouches),
                (l = t.timeStamp - e.timeStamp),
                (e.type = "movestart"),
                (e.distX = s),
                (e.distY = n),
                (e.deltaX = s),
                (e.deltaY = n),
                (e.pageX = i.pageX),
                (e.pageY = i.pageY),
                (e.velocityX = s / l),
                (e.velocityY = n / l),
                (e.targetTouches = r),
                (e.finger = r ? r.length : 1),
                (e._handled = I),
                (e._preventTouchmoveDefault = function () {
                  t.preventDefault();
                }),
                o(e.target, e),
                a(e.identifier);
            })(t, e, s, a, r, n);
        }
        function I() {
          return (this._handled = p), !1;
        }
        function T(t) {
          t._handled();
        }
        function z(t) {
          var e = t.data.timer;
          (t.data.touch = t), (t.data.timeStamp = t.timeStamp), e.kick();
        }
        function L(t) {
          var e = t.data.event,
            i = t.data.timer;
          n(document, l.move, z),
            n(document, l.end, L),
            O(e, i, function () {
              setTimeout(function () {
                n(e.target, "click", f);
              }, 0);
            });
        }
        function E(t) {
          var e = t.data.event,
            i = t.data.timer,
            s = w(t, e);
          s &&
            (t.preventDefault(),
            (e.targetTouches = t.targetTouches),
            (t.data.touch = s),
            (t.data.timeStamp = t.timeStamp),
            i.kick());
        }
        function P(t) {
          var e = t.data.event,
            i = t.data.timer;
          v(t.changedTouches, e.identifier) &&
            (!(function (t) {
              n(document, "." + t.identifier, E),
                n(document, "." + t.identifier, P);
            })(e),
            O(e, i));
        }
        function O(t, e, i) {
          e.end(function () {
            return (t.type = "moveend"), o(t.target, t), i && i();
          });
        }
        (t.event.special.movestart = {
          setup: function (t, e, i) {
            return s(this, "movestart.move", T), !0;
          },
          teardown: function (t) {
            return (
              n(this, "dragstart drag", m),
              n(this, "mousedown touchstart", g),
              n(this, "movestart", T),
              !0
            );
          },
          add: function (t) {
            "move" !== t.namespace &&
              "moveend" !== t.namespace &&
              (s(
                this,
                "dragstart." + t.guid + " drag." + t.guid,
                m,
                e,
                t.selector
              ),
              s(this, "mousedown." + t.guid, g, e, t.selector));
          },
          remove: function (t) {
            "move" !== t.namespace &&
              "moveend" !== t.namespace &&
              (n(this, "dragstart." + t.guid + " drag." + t.guid),
              n(this, "mousedown." + t.guid));
          },
          _default: function (t) {
            var i, n;
            t._handled() &&
              ((i = {
                target: t.target,
                startX: t.startX,
                startY: t.startY,
                pageX: t.pageX,
                pageY: t.pageY,
                distX: t.distX,
                distY: t.distY,
                deltaX: t.deltaX,
                deltaY: t.deltaY,
                velocityX: t.velocityX,
                velocityY: t.velocityY,
                timeStamp: t.timeStamp,
                identifier: t.identifier,
                targetTouches: t.targetTouches,
                finger: t.finger,
              }),
              (n = {
                event: i,
                timer: new u(function (e) {
                  !(function (t, e, i, s) {
                    var n = i - t.timeStamp;
                    (t.type = "move"),
                      (t.distX = e.pageX - t.startX),
                      (t.distY = e.pageY - t.startY),
                      (t.deltaX = e.pageX - t.pageX),
                      (t.deltaY = e.pageY - t.pageY),
                      (t.velocityX = 0.3 * t.velocityX + (0.7 * t.deltaX) / n),
                      (t.velocityY = 0.3 * t.velocityY + (0.7 * t.deltaY) / n),
                      (t.pageX = e.pageX),
                      (t.pageY = e.pageY);
                  })(i, n.touch, n.timeStamp),
                    o(t.target, i);
                }),
                touch: e,
                timeStamp: e,
              }),
              t.identifier === e
                ? (s(t.target, "click", f),
                  s(document, l.move, z, n),
                  s(document, l.end, L, n))
                : (t._preventTouchmoveDefault(),
                  s(document, d + "." + t.identifier, E, n),
                  s(document, h + "." + t.identifier, P, n)));
          },
        }),
          (t.event.special.move = {
            setup: function () {
              s(this, "movestart.move", t.noop);
            },
            teardown: function () {
              n(this, "movestart.move", t.noop);
            },
          }),
          (t.event.special.moveend = {
            setup: function () {
              s(this, "movestart.moveend", t.noop);
            },
            teardown: function () {
              n(this, "movestart.moveend", t.noop);
            },
          }),
          s(document, "mousedown.move", function (t) {
            var e;
            (function (t) {
              return 1 === t.which && !t.ctrlKey && !t.altKey;
            })(t) &&
              ((e = {
                target: t.target,
                startX: t.pageX,
                startY: t.pageY,
                timeStamp: t.timeStamp,
              }),
              s(document, l.move, y, e),
              s(document, l.cancel, b, e));
          }),
          s(document, "touchstart.move", function (t) {
            var e, i;
            r[t.target.tagName.toLowerCase()] ||
              ((i = {
                target: (e = t.changedTouches[0]).target,
                startX: e.pageX,
                startY: e.pageY,
                timeStamp: t.timeStamp,
                identifier: e.identifier,
              }),
              s(document, d + "." + e.identifier, _, i),
              s(document, c + "." + e.identifier, x, i));
          }),
          "function" == typeof Array.prototype.indexOf &&
            (function (t, e) {
              for (
                var i = ["changedTouches", "targetTouches"], s = i.length;
                s--;

              )
                -1 === t.event.props.indexOf(i[s]) && t.event.props.push(i[s]);
            })(t);
      }),
      (t.belowthefold = function (e, i) {
        return s.height() + s.scrollTop() <= t(e).offset().top - i.threshold;
      }),
      (t.abovethetop = function (e, i) {
        return s.scrollTop() >= t(e).offset().top + t(e).height() - i.threshold;
      }),
      (t.rightofscreen = function (e, i) {
        return s.width() + s.scrollLeft() <= t(e).offset().left - i.threshold;
      }),
      (t.leftofscreen = function (e, i) {
        return (
          s.scrollLeft() >= t(e).offset().left + t(e).width() - i.threshold
        );
      }),
      (t.inviewport = function (e, i) {
        return !(
          t.rightofscreen(e, i) ||
          t.leftofscreen(e, i) ||
          t.belowthefold(e, i) ||
          t.abovethetop(e, i)
        );
      }),
      t.extend(t.expr.pseudos, {
        "below-the-fold": function (e, i, s) {
          return t.belowthefold(e, { threshold: 0 });
        },
        "above-the-top": function (e, i, s) {
          return t.abovethetop(e, { threshold: 0 });
        },
        "left-of-screen": function (e, i, s) {
          return t.leftofscreen(e, { threshold: 0 });
        },
        "right-of-screen": function (e, i, s) {
          return t.rightofscreen(e, { threshold: 0 });
        },
        "in-viewport": function (e, i, s) {
          return t.inviewport(e, { threshold: -30 });
        },
      }),
      (t.fn.checkInViewport = function () {
        if (!dtGlobals.isMobile) {
          var e = -1;
          return this.each(function () {
            var i = t(this);
            i.hasClass("animation-ready") ||
              (i.parents(".animation-at-the-same-time").length > 0
                ? (($thisElem = i.find(".animate-element")),
                  $thisElem.addClass("animation-triggered"),
                  i
                    .find(".animate-element:not(.start-animation)")
                    .addClass("start-animation"))
                : i.hasClass("start-animation") ||
                  i.hasClass("animation-triggered") ||
                  (i.addClass("animation-triggered"),
                  e++,
                  setTimeout(function () {
                    i.addClass("start-animation"),
                      i.hasClass("skills") && i.animateSkills();
                  }, 200 * e)),
              i.addClass("animation-ready"));
          });
        }
        "undefined" != typeof animateSkills &&
          the7Utils.isFunction(animateSkills) &&
          t(".skills").animateSkills();
      }),
      clearTimeout(c),
      (c = setTimeout(function () {
        p();
      }, 50)),
      dtGlobals.isMobile ||
        s.on("scroll", function () {
          p();
        });
    var f = t(
      ".dt-owl-carousel-call, .related-projects, .elementor-owl-carousel-call"
    );
    s.on("scroll", function () {
      f.each(function () {
        var e = t(this);
        if ("true" === e.attr("data-autoplay"))
          if (dtGlobals.isInViewport(e)) {
            var i = e.attr("data-autoplay_speed")
              ? parseInt(e.attr("data-autoplay_speed"))
              : 6e3;
            e.trigger("play.owl.autoplay", [i]);
          } else e.trigger("stop.owl.autoplay");
      });
    }),
      (t.fn.addPhotoswipeWrap = function () {
        return this.each(function (e, i) {
          var s = t(this);
          s.on("click", function (t) {
            t.preventDefault();
          }),
            s.parents("figure").first().addClass("photoswipe-item"),
            s.hasClass("pspw-wrap-ready") ||
              (s.parents().hasClass("dt-gallery-container") ||
                s.parent().addClass("photoswipe-wrapper"),
              s.addClass("pspw-wrap-ready"));
        });
      }),
      t(".dt-pswp-item, figure .dt-gallery-container a").addPhotoswipeWrap();
    var m = [
      {
        id: "facebook",
        label:
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg> ' +
          dtShare.shareButtonText.facebook,
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}&picture={{raw_image_url}}&description={{text}}",
      },
      {
        id: "twitter",
        label:
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>' +
          dtShare.shareButtonText.twitter,
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
      },
      {
        id: "pinterest",
        label:
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/></svg> ' +
          dtShare.shareButtonText.pinterest,
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
      },
      {
        id: "linkedin",
        label:
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg> ' +
          dtShare.shareButtonText.linkedin,
        url: "http://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{text}}",
      },
      {
        id: "whatsapp",
        label:
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>' +
          dtShare.shareButtonText.whatsapp,
        url: "whatsapp://send?text={{url}}",
      },
    ];
    dtShare.shareButtonText.download &&
      m.push({
        id: "download",
        label:
          '<i class="dt-icon-the7-misc-006-244" aria-hidden="true"></i> ' +
          dtShare.shareButtonText.download,
        url: "{{raw_image_url}}",
        download: !0,
      });
    var g = {
      youtube: {
        index: "youtube.com",
        id: "v=",
        src: "//www.youtube.com/embed/%id%",
        type: "youtube",
      },
      vimeo: {
        index: "vimeo.com/",
        id: "/",
        src: "//player.vimeo.com/video/%id%",
        type: "vimeo",
      },
      gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
    };
    function v(e) {
      for (var i in e) {
        var s = e[i],
          n = t(".pswp__share-tooltip");
        switch (s) {
          case "facebook":
            n.addClass("show-share-fb");
            break;
          case "twitter":
            n.addClass("show-share-tw");
            break;
          case "pinterest":
            n.addClass("show-share-pin");
            break;
          case "linkedin":
            n.addClass("show-share-in");
            break;
          case "whatsapp":
            n.addClass("show-share-wp");
            break;
          case "download":
            n.addClass("show-share-d");
            break;
          default:
            n.removeClass(
              "show-share-in show-share-pin show-share-tw show-share-fb show-share-g show-share-wp"
            );
        }
      }
    }
    function w(e, i) {
      var s = [],
        n = e;
      n = t.extend({ target: ".dt-pswp-item", embedType: "" }, n);
      var o = function (e, i, o) {
        var a = document.querySelectorAll(".pswp")[0],
          r = s[e - 1].items,
          l = {
            index: i,
            galleryUID: e,
            shareEl: !0,
            closeOnScroll: !1,
            history: !1,
            shareButtons: m,
            getImageURLForShare: function (t) {
              return c.currItem.src || "";
            },
            getPageURLForShare: function (t) {
              return c.currItem.shareLink || window.location.href;
            },
            getTextForShare: function (t) {
              var e = c.currItem.title;
              return (void 0 !== e ? e.replace(/<[^>]+>/g, "") : "") || "";
            },
            parseShareButtonOut: function (t, e) {
              return e;
            },
          },
          d = "";
        void 0 !==
          t(o).next(".dt-gallery-container").attr("data-pretty-share") &&
          (d = t(o)
            .next(".dt-gallery-container")
            .attr("data-pretty-share")
            .split(",")),
          void 0 !==
          t(o).parents(".dt-gallery-container").attr("data-pretty-share")
            ? (d = t(o)
                .parents(".dt-gallery-container")
                .attr("data-pretty-share")
                .split(","))
            : void 0 !==
              t(o)
                .parents(".shortcode-single-image-wrap")
                .attr("data-pretty-share")
            ? (d = t(o)
                .parents(".shortcode-single-image-wrap")
                .attr("data-pretty-share")
                .split(","))
            : void 0 !== t(o).attr("data-pretty-share") &&
              (d = t(o).attr("data-pretty-share").split(",")),
          d.length <= 0 || void 0 === d
            ? t(".pswp__scroll-wrap").addClass("hide-pspw-share")
            : d.push("download"),
          v(d),
          t.extend(l, n);
        var c = new PhotoSwipe(a, PhotoSwipeUI_Default, r, l);
        c.init(), t(".pswp__video").removeClass("active");
        var h = t(c.currItem.container);
        h.find(".pswp__video").length > 0 &&
          h.parents(".pswp").addClass("video-active"),
          t(".pswp__zoom-wrap").removeClass("active-item"),
          h.addClass("active-item");
        var u,
          p,
          f = h.find(".pswp__video");
        if (f.length > 0)
          if (
            (f.addClass("active"),
            h.parents(".pswp").addClass("video-active"),
            "hosted" == f.parents(".pswp-video-wrap ").attr("data-type"))
          )
            f.get(0).play();
          else {
            var g = f.prop("src");
            (g += "?autoplay=1"), f.prop("src", g);
          }
        c.listen("beforeChange", function () {
          var e = t(c.currItem.container);
          t(".pswp__zoom-wrap").removeClass("active-item"),
            e.addClass("active-item"),
            t(".pswp__video").removeClass("active"),
            t(".pswp").removeClass("video-active");
          e.find(".pswp__video").addClass("active");
          e.find(".pswp__video").length > 0 &&
            e.parents(".pswp").addClass("video-active"),
            t(".pswp__video").each(function () {
              var e = t(this);
              if (e.hasClass("active"))
                "hosted" == e.parents(".pswp-video-wrap ").attr("data-type") &&
                  e.get(0).play();
              else if (
                "hosted" == e.parents(".pswp-video-wrap ").attr("data-type")
              )
                e.get(0).pause();
              else {
                var i = e.prop("src");
                (i = i.replace("?autoplay=1", "?enablejsapi=1")),
                  e.prop("src", ""),
                  e.prop("src", i),
                  t(".pswp__video").removeClass("active");
                var s = t(this)[0].contentWindow;
                e.hasClass("active")
                  ? (func = "playVideo")
                  : (func = "pauseVideo"),
                  s.postMessage(
                    '{"event":"command","func":"' + func + '","args":""}',
                    "*"
                  );
              }
            });
        }),
          c.listen("close", function () {
            t(".pswp__video").each(function () {
              var e = t(this);
              if ("hosted" == e.parents(".pswp-video-wrap ").attr("data-type"))
                e.get(0).pause();
              else {
                e.attr("src", e.attr("src"));
                var i = e.prop("src");
                (i = i.replace("?autoplay=1", "?enablejsapi=1")),
                  e.prop("src", ""),
                  e.prop("src", i),
                  t(".pswp__video").removeClass("active");
                var s = t(this)[0].contentWindow;
                e.hasClass("active")
                  ? (func = "playVideo")
                  : (func = "stopVideo"),
                  s.postMessage(
                    '{"event":"command","func":"' + func + '","args":""}',
                    "*"
                  );
              }
              clearTimeout(u),
                (u = setTimeout(function () {
                  t(".pswp-video-wrap").remove();
                }, 200));
            });
          }),
          c.listen("destroy", function () {
            clearTimeout(p),
              (p = setTimeout(function () {
                t(".pswp").removeClass().addClass("pswp");
              }, 100));
          });
      };
      !(function (e, i) {
        (s = []),
          e.each(function (e, i) {
            s.push({ id: e, items: [] }),
              t(i)
                .find(n.target)
                .each(function (i, o) {
                  var a,
                    r = t(o),
                    l = r.attr("data-large_image_width"),
                    d =
                      void 0 !== l && l.length > 0 && "" != l && 0 != l
                        ? l
                        : r.find("img").attr("width"),
                    c = r.attr("data-large_image_height"),
                    h =
                      void 0 !== c && c.length > 0 && "" != c && 0 != c
                        ? c
                        : r.find("img").attr("height"),
                    u =
                      (void 0 !== r.attr("title") && r.attr("title").length > 0
                        ? "<h5>" + r.attr("title") + "</h5>"
                        : "") +
                        (void 0 !== r.attr("data-dt-img-description")
                          ? r.attr("data-dt-img-description")
                          : "") || "";
                  if (
                    (r.data("gallery-id", e + 1),
                    r.data("photo-id", i),
                    void 0 === d && (d = r.find("img").width()),
                    void 0 === h && (h = r.find("img").height()),
                    t(o).hasClass("pswp-video"))
                  ) {
                    var p = o.href,
                      f = n.embedType;
                    r.find("video") && (a = r.find("video").attr("poster")),
                      t.each(g, function () {
                        if (p.indexOf(this.index) > -1)
                          return (
                            this.id &&
                              ((p =
                                "string" == typeof this.id
                                  ? p.substr(
                                      p.lastIndexOf(this.id) + this.id.length,
                                      p.length
                                    )
                                  : this.id.call(this, p)),
                              (f = this.type)),
                            (p = this.src.replace("%id%", p)),
                            !1
                          );
                      });
                    var m = {
                      html:
                        '<div class="pswp-video-wrap " data-type="' +
                        f +
                        '"><div class="video-wrapper"><iframe allow="autoplay; fullscreen" class="pswp__video"src="' +
                        p +
                        ' " frameborder="0" allowfullscreen></iframe></div></div>',
                      title: u,
                      shareLink:
                        r.attr("data-dt-location") ||
                        r
                          .parents(".fancy-media-wrap")
                          .find("img")
                          .attr("data-dt-location") ||
                        "",
                    };
                    "hosted" == f &&
                      (m.html =
                        '<div class="pswp-video-wrap " data-type="' +
                        f +
                        '"><div class="video-wrapper"><video controls playsinline="yes" poster="' +
                        a +
                        ' " class="pswp__video" src="' +
                        p +
                        '" type="video/mp4"></video ></div></div>');
                  } else m = { src: o.href, w: d, h: h, title: u, shareLink: r.attr("data-dt-location") || r.find("img").attr("data-dt-location") || "" };
                  s[e].items.push(m);
                }),
              t(i).prev().hasClass("dt-gallery-pswp")
                ? t(i)
                    .prev(".dt-gallery-pswp")
                    .on("click", function (e) {
                      e.preventDefault();
                      var s = t(this),
                        a = t(this).next(t(i)).find(n.target),
                        r = a.data("gallery-id"),
                        l = a.data("photo-id");
                      s.parents(".ts-wrap").hasClass("ts-interceptClicks") ||
                        s.hasClass("dt-pswp-item-no-click") ||
                        o(r, l, s);
                    })
                : t(i).on("click", n.target, function (e) {
                    var i = t(this);
                    e.preventDefault();
                    var s = t(this).data("gallery-id"),
                      n = t(this).data("photo-id");
                    i.parents(".ts-wrap").hasClass("ts-interceptClicks") ||
                      i.hasClass("dt-pswp-item-no-click") ||
                      o(s, n, i);
                  });
          });
      })(i);
      var a = (function () {
        var t = window.location.hash.substring(1),
          e = {};
        if (t.length < 5) return e;
        for (var i = t.split("&"), s = 0; s < i.length; s++)
          if (i[s]) {
            var n = i[s].split("=");
            n.length < 2 || (e[n[0]] = n[1]);
          }
        return (
          e.gid && (e.gid = parseInt(e.gid, 10)),
          e.hasOwnProperty("pid") ? ((e.pid = parseInt(e.pid, 10)), e) : e
        );
      })();
      return a.pid > 0 && a.gid > 0 && o(a.gid, a.pid), this;
    }
    function y(e, i) {
      if (void 0 !== t.fn[i])
        return e.each(function () {
          t(this)[i]({
            bgOpacity: dtShare.overlayOpacity / 100,
            loop: !0,
            showHideOpacity: !0,
          });
        });
    }
    /**
     * Owl carousel
     * @version 2.3.4
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     * @todo Lazy Load Icon
     * @todo prevent animationend bubling
     * @todo itemsScaleUp
     * @todo Test Zepto
     * @todo stagePadding calculate wrong active classes
     */
    if (
      ((t.fn.photoswipeGallery = function (e) {
        var i = function t(e, i) {
          return e && (i(e) ? e : t(e.parentNode, i));
        };
        for (
          var s = function (e) {
              var s = e.target || e.srcElement,
                o = i(s, function (t) {
                  return (
                    (e = "photoswipe-item"),
                    (" " + t.className + " ").indexOf(" " + e + " ") > -1
                  );
                  var e;
                });
              if (o) {
                for (
                  var a,
                    r = t(o).closest(".dt-gallery-container")[0],
                    l = t(t(o).closest(".dt-gallery-container")[0])
                      .find(".photoswipe-item")
                      .get(),
                    d = l.length,
                    c = 0,
                    h = 0;
                  h < d;
                  h++
                )
                  if (1 === l[h].nodeType) {
                    if (l[h] === o) {
                      a = c;
                      break;
                    }
                    c++;
                  }
                return a >= 0 && n(a, r), !1;
              }
            },
            n = function (e, i, s, n) {
              var o,
                a,
                r,
                l = document.querySelectorAll(".pswp")[0];
              r = (function (e) {
                for (
                  var i,
                    s,
                    n = t(e).find(".photoswipe-item").get(),
                    o = n.length,
                    a = [],
                    r = 0;
                  r < o;
                  r++
                )
                  if (1 === (i = n[r]).nodeType) {
                    s = i.children[0];
                    var l =
                        void 0 !== t(s).attr("data-large_image_width") &&
                        t(s).attr("data-large_image_width").length > 0 &&
                        "" != t(s).attr("data-large_image_width")
                          ? t(s).attr("data-large_image_width")
                          : t(s).find("img").attr("width"),
                      d =
                        void 0 !== t(s).attr("data-large_image_height") &&
                        t(s).attr("data-large_image_height").length > 0 &&
                        "" != t(s).attr("data-large_image_height")
                          ? t(s).attr("data-large_image_height")
                          : t(s).find("img").attr("height"),
                      c =
                        (void 0 !== t(s).attr("title") &&
                        t(s).attr("title").length > 0
                          ? "<h5>" + t(s).attr("title") + "</h5>\n"
                          : "") +
                          (void 0 !== t(s).attr("data-dt-img-description")
                            ? t(s).attr("data-dt-img-description")
                            : "") || "";
                    if (t(s).hasClass("pswp-video")) {
                      var h,
                        u = s.href;
                      t.each(g, function () {
                        if (u.indexOf(this.index) > -1)
                          return (
                            this.id &&
                              ((u =
                                "string" == typeof this.id
                                  ? u.substr(
                                      u.lastIndexOf(this.id) + this.id.length,
                                      u.length
                                    )
                                  : this.id.call(this, u)),
                              (h = this.type)),
                            (u = this.src.replace("%id%", u)),
                            !1
                          );
                      });
                      var p = {
                        html:
                          '<div class="pswp-video-wrap " data-type="' +
                          h +
                          '"><div class="video-wrapper"><iframe allow="autoplay; fullscreen" class="pswp__video"src=" ' +
                          u +
                          ' " frameborder="0" allowfullscreen></iframe></div></div>',
                        title: c,
                      };
                    } else
                      p = { src: s.getAttribute("href"), w: l, h: d, title: c };
                    s.children.length > 0 &&
                      (p.msrc = s.children[0].getAttribute("src")),
                      (p.el = i),
                      a.push(p);
                  }
                return a;
              })(i);
              var d = t(i).attr("data-pretty-share")
                ? t(i).attr("data-pretty-share").split(",")
                : new Array();
              if (
                (d.length <= 0 || void 0 === d
                  ? t(".pswp__scroll-wrap").addClass("hide-pspw-share")
                  : d.push("download"),
                v(d),
                (a = {
                  closeOnScroll: !1,
                  galleryUID: i.getAttribute("data-pswp-uid"),
                  bgOpacity: dtShare.overlayOpacity / 100,
                  loop: !0,
                  history: !1,
                  showHideOpacity: !0,
                  showAnimationDuration: 0,
                  shareButtons: m,
                  getImageURLForShare: function (e) {
                    return (
                      o.currItem.src ||
                      t(o.currItem.el).find("a").attr("data-dt-location") ||
                      ""
                    );
                  },
                  getPageURLForShare: function (e) {
                    return (
                      t(o.currItem.el).find("a").attr("data-dt-location") ||
                      window.location.href
                    );
                  },
                  getTextForShare: function (t) {
                    var e = o.currItem.title;
                    return (
                      (void 0 !== e ? e.replace(/<[^>]+>/g, "") : "") || ""
                    );
                  },
                  parseShareButtonOut: function (t, e) {
                    return e;
                  },
                }),
                n)
              )
                if (a.galleryPIDs) {
                  for (var c = 0; c < r.length; c++)
                    if (r[c].pid == e) {
                      a.index = c;
                      break;
                    }
                } else a.index = parseInt(e, 10) - 1;
              else a.index = parseInt(e, 10);
              if (!isNaN(a.index)) {
                s && (a.showAnimationDuration = 0),
                  (o = new PhotoSwipe(l, PhotoSwipeUI_Default, r, a)).init(),
                  t(".pswp__zoom-wrap").removeClass("active-item"),
                  t(".pswp__video").removeClass("active");
                var h,
                  u,
                  p = t(o.currItem.container);
                if (
                  (p.addClass("active-item"), p.find(".pswp__video").length > 0)
                ) {
                  p.find(".pswp__video").addClass("active"),
                    p.parents(".pswp").addClass("video-active");
                  var f = p.find(".pswp__video").prop("src");
                  (f += "?autoplay=1"), p.find(".pswp__video").prop("src", f);
                }
                o.listen("beforeChange", function () {
                  var e = t(o.currItem.container);
                  t(".pswp__zoom-wrap").removeClass("active-item"),
                    e.addClass("active-item"),
                    t(".pswp__video").removeClass("active"),
                    t(".pswp").removeClass("video-active"),
                    e.find(".pswp__video").addClass("active");
                  e.find(".pswp__video");
                  e.find(".pswp__video").length > 0 &&
                    (e.parents(".pswp").addClass("video-active"),
                    ($runVideo = 0)),
                    t(".pswp__video").each(function () {
                      var e = t(this);
                      if (!e.hasClass("active")) {
                        var i = e.prop("src");
                        (i =
                          "youtube" ==
                            e.parents(".pswp-video-wrap ").attr("data-type") ||
                          "vimeo" ==
                            e.parents(".pswp-video-wrap ").attr("data-type")
                            ? i.replace("?autoplay=1", "?enablejsapi=1")
                            : i.replace("?autoplay=1", "")),
                          e.prop("src", ""),
                          e.prop("src", i);
                        var s = e[0].contentWindow;
                        e.hasClass("active")
                          ? (func = "playVideo")
                          : (func = "pauseVideo"),
                          s.postMessage(
                            '{"event":"command","func":"' +
                              func +
                              '","args":""}',
                            "*"
                          );
                      }
                    });
                }),
                  o.listen("close", function () {
                    t(".pswp__video").each(function () {
                      var e = t(this);
                      e.attr("src", t(this).attr("src"));
                      var i = e.prop("src");
                      (i =
                        "youtube" ==
                          e.parents(".pswp-video-wrap ").attr("data-type") ||
                        "vimeo" ==
                          e.parents(".pswp-video-wrap ").attr("data-type")
                          ? i.replace("?autoplay=1", "?enablejsapi=1")
                          : i.replace("?autoplay=1", "")),
                        e.prop("src", ""),
                        e.prop("src", i),
                        t(".pswp__video").removeClass("active");
                      var s = e[0].contentWindow;
                      t(this).hasClass("active")
                        ? (func = "playVideo")
                        : (func = "pauseVideo"),
                        s.postMessage(
                          '{"event":"command","func":"' + func + '","args":""}',
                          "*"
                        ),
                        clearTimeout(h),
                        (h = setTimeout(function () {
                          t(".pswp-video-wrap").remove();
                        }, 200));
                    });
                  }),
                  o.listen("destroy", function () {
                    clearTimeout(u),
                      (u = setTimeout(function () {
                        t(".pswp").removeClass().addClass("pswp");
                      }, 100));
                  });
              }
            },
            o = document.querySelectorAll(e),
            a = 0,
            r = o.length;
          a < r;
          a++
        )
          o[a].setAttribute("data-pswp-uid", a + 1), (o[a].onclick = s);
        var l = (function () {
          var t = window.location.hash.substring(1),
            e = {};
          if (t.length < 5) return e;
          for (var i = t.split("&"), s = 0; s < i.length; s++)
            if (i[s]) {
              var n = i[s].split("=");
              n.length < 2 || (e[n[0]] = n[1]);
            }
          return e.gid && (e.gid = parseInt(e.gid, 10)), e;
        })();
        l.pid && l.gid && n(l.pid, o[l.gid - 1], !0, !0);
      }),
      t(".dt-gallery-container.wf-container").photoswipeGallery(
        ".dt-gallery-container.wf-container"
      ),
      (t.fn.photoswipe = function (t) {
        return (t.embedType = "hosted"), w(t, this);
      }),
      dtGlobals.addOnloadEvent(function () {
        t(
          ".photoswipe-wrapper, .photoswipe-item .dt-gallery-container, .shortcode-gallery.dt-gallery-container:not(.owl-carousel), .dt-gallery-container.gallery, .instagram-photos.dt-gallery-container, .images-container .dt-gallery-container, .shortcode-instagram.dt-gallery-container, .gallery-shortcode:not(.owl-carousel)"
        ).initPhotoswipe();
      }),
      (t.fn.photoswipeCarousel = function (t) {
        return (t.target = ".dt-owl-item.cloned .dt-pswp-item"), w(t, this);
      }),
      (t.fn.initCarouselClonedPhotoswipe = function () {
        return y(this, "photoswipeCarousel");
      }),
      (t.fn.initPhotoswipe = function () {
        return y(this, "photoswipe");
      }),
      t(
        ".shortcode-gallery.dt-gallery-container:not(.owl-loaded), .gallery-shortcode:not(.owl-loaded)"
      ).initPhotoswipe(),
      t(".dt-trigger-first-pswp")
        .addClass("pspw-ready")
        .on("click", function (e) {
          var i = t(this),
            s = i.parents("article.post").first();
          if (!i.parents(".ts-wrap").hasClass("ts-interceptClicks")) {
            if (s.length > 0)
              (s.find(".dt-gallery-container").length > 0
                ? s.find(".dt-gallery-container a.dt-pswp-item")
                : s.find("a.dt-pswp-item")
              ).length > 0 && s.find(".rollover-click-target").trigger("click");
            return !1;
          }
        }),
      t(".dt-owl-carousel-call").length > 0 ||
        t(".slider-content").length > 0 ||
        t(".dt-owl-carousel-init").length > 0 ||
        t("body").is('[class*="elementor-page"]'))
    ) {
      var b = t.fn.owlCarousel;
      !(function (t, e, i, s) {
        function n(e, i) {
          (this.settings = null),
            (this.options = t.extend({}, n.Defaults, i)),
            (this.$element = t(e)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = {
              time: null,
              target: null,
              pointer: null,
              stage: { start: null, current: null },
              direction: null,
            }),
            (this._states = {
              current: {},
              tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"],
              },
            }),
            t.each(
              ["onResize", "onThrottledResize"],
              t.proxy(function (e, i) {
                this._handlers[i] = t.proxy(this[i], this);
              }, this)
            ),
            t.each(
              n.Plugins,
              t.proxy(function (t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
                  this
                );
              }, this)
            ),
            t.each(
              n.Workers,
              t.proxy(function (e, i) {
                this._pipe.push({
                  filter: i.filter,
                  run: t.proxy(i.run, this),
                });
              }, this)
            ),
            this.setup(),
            this.initialize();
        }
        (n.Defaults = {
          items: 3,
          loop: !1,
          center: !1,
          rewind: !1,
          checkVisibility: !0,
          mouseDrag: !0,
          touchDrag: !0,
          pullDrag: !0,
          freeDrag: !1,
          margin: 0,
          stagePadding: 0,
          merge: !1,
          mergeFit: !0,
          autoWidth: !1,
          startPosition: 0,
          rtl: !1,
          smartSpeed: 250,
          fluidSpeed: !1,
          dragEndSpeed: !1,
          responsive: {},
          responsiveRefreshRate: 200,
          responsiveBaseElement: e,
          fallbackEasing: "swing",
          slideTransition: "",
          info: !1,
          nestedItemSelector: !1,
          itemElement: "div",
          stageElement: "div",
          refreshClass: "owl-refresh",
          loadedClass: "owl-loaded",
          loadingClass: "owl-loading",
          rtlClass: "owl-rtl",
          responsiveClass: "owl-responsive",
          dragClass: "owl-drag",
          itemClass: "dt-owl-item",
          stageClass: "owl-stage",
          stageOuterClass: "owl-stage-outer",
          grabClass: "owl-grab",
        }),
          (n.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
          (n.Type = { Event: "event", State: "state" }),
          (n.Plugins = {}),
          (n.Workers = [
            {
              filter: ["width", "settings"],
              run: function () {
                this._width = this.$element.width();
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                t.current =
                  this._items && this._items[this.relative(this._current)];
              },
            },
            {
              filter: ["items", "settings"],
              run: function () {
                this.$stage.children(".cloned").remove();
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                var e = this.settings.margin || "",
                  i = !this.settings.autoWidth,
                  s = this.settings.rtl,
                  n = {
                    width: "auto",
                    "margin-left": s ? e : "",
                    "margin-right": s ? "" : e,
                  };
                !i && this.$stage.children().css(n), (t.css = n);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                var e = parseInt(
                    getComputedStyle(this.$stage.get(0)).getPropertyValue(
                      "--stage-left-gap"
                    )
                  ),
                  i = parseInt(
                    getComputedStyle(this.$stage.get(0)).getPropertyValue(
                      "--stage-right-gap"
                    )
                  ),
                  s =
                    ((this.width() - e - i) / this.settings.items).toFixed(3) -
                    this.settings.margin,
                  n = null,
                  o = this._items.length,
                  a = !this.settings.autoWidth,
                  r = [];
                for (t.items = { merge: !1, width: s }; o--; )
                  (n = this._mergers[o]),
                    (n =
                      (this.settings.mergeFit &&
                        Math.min(n, this.settings.items)) ||
                      n),
                    (t.items.merge = n > 1 || t.items.merge),
                    (r[o] = a ? s * n : this._items[o].width());
                this._widths = r;
              },
            },
            {
              filter: ["items", "settings"],
              run: function () {
                var e = [],
                  i = this._items,
                  s = this.settings,
                  n = Math.max(2 * s.items, 4),
                  o = 2 * Math.ceil(i.length / 2),
                  a = s.loop && i.length ? (s.rewind ? n : Math.max(n, o)) : 0,
                  r = "",
                  l = "";
                for (a /= 2; a > 0; )
                  e.push(this.normalize(e.length / 2, !0)),
                    (r += i[e[e.length - 1]][0].outerHTML),
                    e.push(
                      this.normalize(i.length - 1 - (e.length - 1) / 2, !0)
                    ),
                    (l = i[e[e.length - 1]][0].outerHTML + l),
                    (a -= 1);
                (this._clones = e),
                  t(r).addClass("cloned").appendTo(this.$stage),
                  t(l).addClass("cloned").prependTo(this.$stage);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function () {
                for (
                  var t = this.settings.rtl ? 1 : -1,
                    e = this._clones.length + this._items.length,
                    i = -1,
                    s = 0,
                    n = 0,
                    o = [];
                  ++i < e;

                )
                  (s = o[i - 1] || 0),
                    (n = this._widths[this.relative(i)] + this.settings.margin),
                    o.push(s + n * t);
                this._coordinates = o;
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function () {
                var t = this.settings.stagePadding,
                  e = this._coordinates,
                  i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || "",
                  };
                this.$stage.css(i);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                var e = this._coordinates.length,
                  i = !this.settings.autoWidth,
                  s = this.$stage.children();
                if (i && t.items.merge)
                  for (; e--; )
                    (t.css.width = this._widths[this.relative(e)]),
                      s.eq(e).css(t.css);
                else i && ((t.css.width = t.items.width), s.css(t.css));
              },
            },
            {
              filter: ["items"],
              run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style");
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                (t.current = t.current
                  ? this.$stage.children().index(t.current)
                  : 0),
                  (t.current = Math.max(
                    this.minimum(),
                    Math.min(this.maximum(), t.current)
                  )),
                  this.reset(t.current);
              },
            },
            {
              filter: ["position"],
              run: function () {
                this.animate(this.coordinates(this._current));
              },
            },
            {
              filter: ["width", "position", "items", "settings"],
              run: function () {
                var t,
                  e,
                  i,
                  s,
                  n = this.settings.rtl ? 1 : -1,
                  o = 2 * this.settings.stagePadding,
                  a = this.coordinates(this.current()) + o,
                  r = a + this.width() * n,
                  l = [];
                for (i = 0, s = this._coordinates.length; i < s; i++)
                  (t = this._coordinates[i - 1] || 0),
                    (e = Math.abs(this._coordinates[i]) + o * n),
                    ((this.op(t, "<=", a) && this.op(t, ">", r)) ||
                      (this.op(e, "<", a) && this.op(e, ">", r))) &&
                      l.push(i);
                this.$stage.children(".active").removeClass("active"),
                  this.$stage
                    .children(":eq(" + l.join("), :eq(") + ")")
                    .addClass("active"),
                  this.$stage.children(".center").removeClass("center"),
                  this.settings.center &&
                    this.$stage
                      .children()
                      .eq(this.current())
                      .addClass("center");
              },
            },
          ]),
          (n.prototype.initializeStage = function () {
            (this.$stage = this.$element.find("." + this.settings.stageClass)),
              this.$stage.length ||
                (this.$element.addClass(this.options.loadingClass),
                (this.$stage = t("<" + this.settings.stageElement + ">", {
                  class: this.settings.stageClass,
                }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
                this.$element.append(this.$stage.parent()));
          }),
          (n.prototype.initializeItems = function () {
            var e = this.$element.find(".dt-owl-item");
            if (e.length)
              return (
                (this._items = e.get().map(function (e) {
                  return t(e);
                })),
                (this._mergers = this._items.map(function () {
                  return 1;
                })),
                void this.refresh()
              );
            this.replace(this.$element.children().not(this.$stage.parent())),
              this.isVisible() ? this.refresh() : this.invalidate("width"),
              this.$element
                .removeClass(this.options.loadingClass)
                .addClass(this.options.loadedClass);
          }),
          (n.prototype.initialize = function () {
            var t, e, i;
            (this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(
              this.settings.rtlClass,
              this.settings.rtl
            ),
            this.settings.autoWidth && !this.is("pre-loading")) &&
              ((t = this.$element.find("img")),
              (e = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : s),
              (i = this.$element.children(e).width()),
              t.length && i <= 0 && this.preloadAutoWidthImages(t));
            this.initializeStage(),
              this.initializeItems(),
              this.registerEventHandlers(),
              this.leave("initializing"),
              this.trigger("initialized");
          }),
          (n.prototype.isVisible = function () {
            return (
              !this.settings.checkVisibility || this.$element.is(":visible")
            );
          }),
          (n.prototype.setup = function () {
            var e = this.viewport(),
              i = this.options.responsive,
              s = -1,
              n = null;
            i
              ? (t.each(i, function (t) {
                  t <= e && t > s && (s = Number(t));
                }),
                "function" ==
                  typeof (n = t.extend({}, this.options, i[s])).stagePadding &&
                  (n.stagePadding = n.stagePadding()),
                delete n.responsive,
                n.responsiveClass &&
                  this.$element.attr(
                    "class",
                    this.$element
                      .attr("class")
                      .replace(
                        new RegExp(
                          "(" + this.options.responsiveClass + "-)\\S+\\s",
                          "g"
                        ),
                        "$1" + s
                      )
                  ))
              : (n = t.extend({}, this.options)),
              this.trigger("change", {
                property: { name: "settings", value: n },
              }),
              (this._breakpoint = s),
              (this.settings = n),
              this.invalidate("settings"),
              this.trigger("changed", {
                property: { name: "settings", value: this.settings },
              });
          }),
          (n.prototype.optionsLogic = function () {
            this.settings.autoWidth &&
              ((this.settings.stagePadding = !1), (this.settings.merge = !1));
          }),
          (n.prototype.prepare = function (e) {
            var i = this.trigger("prepare", { content: e });
            return (
              i.data ||
                (i.data = t("<" + this.settings.itemElement + "/>")
                  .addClass(this.options.itemClass)
                  .append(e)),
              this.trigger("prepared", { content: i.data }),
              i.data
            );
          }),
          (n.prototype.update = function () {
            for (
              var e = 0,
                i = this._pipe.length,
                s = t.proxy(function (t) {
                  return this[t];
                }, this._invalidated),
                n = {};
              e < i;

            )
              (this._invalidated.all ||
                t.grep(this._pipe[e].filter, s).length > 0) &&
                this._pipe[e].run(n),
                e++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
          }),
          (n.prototype.width = function (t) {
            switch ((t = t || n.Width.Default)) {
              case n.Width.Inner:
              case n.Width.Outer:
                return this._width;
              default:
                return (
                  this._width -
                  2 * this.settings.stagePadding +
                  this.settings.margin
                );
            }
          }),
          (n.prototype.refresh = function () {
            this.enter("refreshing"),
              this.trigger("refresh"),
              this.setup(),
              this.optionsLogic(),
              this.$element.addClass(this.options.refreshClass),
              this.update(),
              this.$element.removeClass(this.options.refreshClass),
              this.leave("refreshing"),
              this.trigger("refreshed");
          }),
          (n.prototype.onThrottledResize = function () {
            e.clearTimeout(this.resizeTimer),
              (this.resizeTimer = e.setTimeout(
                this._handlers.onResize,
                this.settings.responsiveRefreshRate
              ));
          }),
          (n.prototype.onResize = function () {
            return (
              !!this._items.length &&
              this._width !== this.$element.width() &&
              !!this.isVisible() &&
              (this.enter("resizing"),
              this.trigger("resize").isDefaultPrevented()
                ? (this.leave("resizing"), !1)
                : (this.invalidate("width"),
                  this.refresh(),
                  this.leave("resizing"),
                  void this.trigger("resized")))
            );
          }),
          (n.prototype.registerEventHandlers = function () {
            t.support.transition &&
              this.$stage.on(
                t.support.transition.end + ".owl.core",
                t.proxy(this.onTransitionEnd, this)
              ),
              !1 !== this.settings.responsive &&
                this.on(e, "resize", this._handlers.onThrottledResize),
              this.settings.mouseDrag &&
                (this.$element.addClass(this.options.dragClass),
                this.$stage.on(
                  "mousedown.owl.core",
                  t.proxy(this.onDragStart, this)
                ),
                this.$stage.on(
                  "dragstart.owl.core selectstart.owl.core",
                  function () {
                    return !1;
                  }
                )),
              this.settings.touchDrag &&
                (this.$stage.on(
                  "touchstart.owl.core",
                  t.proxy(this.onDragStart, this)
                ),
                this.$stage.on(
                  "touchcancel.owl.core",
                  t.proxy(this.onDragEnd, this)
                ));
          }),
          (n.prototype.onDragStart = function (e) {
            var s = null;
            3 !== e.which &&
              (t.support.transform
                ? (s = {
                    x: (s = this.$stage
                      .css("transform")
                      .replace(/.*\(|\)| /g, "")
                      .split(","))[16 === s.length ? 12 : 4],
                    y: s[16 === s.length ? 13 : 5],
                  })
                : ((s = this.$stage.position()),
                  (s = {
                    x: this.settings.rtl
                      ? s.left +
                        this.$stage.width() -
                        this.width() +
                        this.settings.margin
                      : s.left,
                    y: s.top,
                  })),
              this.is("animating") &&
                (t.support.transform ? this.animate(s.x) : this.$stage.stop(),
                this.invalidate("position")),
              this.$element.toggleClass(
                this.options.grabClass,
                "mousedown" === e.type
              ),
              this.speed(0),
              (this._drag.time = new Date().getTime()),
              (this._drag.target = t(e.target)),
              (this._drag.stage.start = s),
              (this._drag.stage.current = s),
              (this._drag.pointer = this.pointer(e)),
              t(i).on(
                "mouseup.owl.core touchend.owl.core",
                t.proxy(this.onDragEnd, this)
              ),
              t(i).one(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(function (e) {
                  var s = this.difference(this._drag.pointer, this.pointer(e));
                  t(i).on(
                    "mousemove.owl.core touchmove.owl.core",
                    t.proxy(this.onDragMove, this)
                  ),
                    (Math.abs(s.x) < Math.abs(s.y) && this.is("valid")) ||
                      (e.preventDefault(),
                      this.enter("dragging"),
                      this.trigger("drag"));
                }, this)
              ));
          }),
          (n.prototype.onDragMove = function (t) {
            var e = null,
              i = null,
              s = null,
              n = this.difference(this._drag.pointer, this.pointer(t)),
              o = this.difference(this._drag.stage.start, n);
            this.is("dragging") &&
              (t.preventDefault(),
              this.settings.loop
                ? ((e = this.coordinates(this.minimum())),
                  (i = this.coordinates(this.maximum() + 1) - e),
                  (o.x = ((((o.x - e) % i) + i) % i) + e))
                : ((e = this.settings.rtl
                    ? this.coordinates(this.maximum())
                    : this.coordinates(this.minimum())),
                  (i = this.settings.rtl
                    ? this.coordinates(this.minimum())
                    : this.coordinates(this.maximum())),
                  (s = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
                  (o.x = Math.max(Math.min(o.x, e + s), i + s))),
              (this._drag.stage.current = o),
              this.animate(o.x));
          }),
          (n.prototype.onDragEnd = function (e) {
            var s = this.difference(this._drag.pointer, this.pointer(e)),
              n = this._drag.stage.current,
              o = (s.x > 0) ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"),
              this.$element.removeClass(this.options.grabClass),
              ((0 !== s.x && this.is("dragging")) || !this.is("valid")) &&
                (this.speed(
                  this.settings.dragEndSpeed || this.settings.smartSpeed
                ),
                this.current(
                  this.closest(n.x, 0 !== s.x ? o : this._drag.direction)
                ),
                this.invalidate("position"),
                this.update(),
                (this._drag.direction = o),
                (Math.abs(s.x) > 3 ||
                  new Date().getTime() - this._drag.time > 300) &&
                  this._drag.target.one("click.owl.core", function () {
                    return !1;
                  })),
              this.is("dragging") &&
                (this.leave("dragging"), this.trigger("dragged"));
          }),
          (n.prototype.closest = function (e, i) {
            var n = -1,
              o = this.width(),
              a = this.coordinates();
            return (
              this.settings.freeDrag ||
                t.each(
                  a,
                  t.proxy(function (t, r) {
                    return (
                      "left" === i && e > r - 30 && e < r + 30
                        ? (n = t)
                        : "right" === i && e > r - o - 30 && e < r - o + 30
                        ? (n = t + 1)
                        : this.op(e, "<", r) &&
                          this.op(e, ">", a[t + 1] !== s ? a[t + 1] : r - o) &&
                          (n = "left" === i ? t + 1 : t),
                      -1 === n
                    );
                  }, this)
                ),
              this.settings.loop ||
                (this.op(e, ">", a[this.minimum()])
                  ? (n = e = this.minimum())
                  : this.op(e, "<", a[this.maximum()]) &&
                    (n = e = this.maximum())),
              n
            );
          }),
          (n.prototype.animate = function (e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
              i && (this.enter("animating"), this.trigger("translate")),
              t.support.transform3d && t.support.transition
                ? this.$stage.css({
                    transform: "translate3d(" + e + "px,0px,0px)",
                    transition:
                      this.speed() / 1e3 +
                      "s" +
                      (this.settings.slideTransition
                        ? " " + this.settings.slideTransition
                        : ""),
                  })
                : i
                ? this.$stage.animate(
                    { left: e + "px" },
                    this.speed(),
                    this.settings.fallbackEasing,
                    t.proxy(this.onTransitionEnd, this)
                  )
                : this.$stage.css({ left: e + "px" });
          }),
          (n.prototype.is = function (t) {
            return this._states.current[t] && this._states.current[t] > 0;
          }),
          (n.prototype.current = function (t) {
            if (t === s) return this._current;
            if (0 === this._items.length) return s;
            if (((t = this.normalize(t)), this._current !== t)) {
              var e = this.trigger("change", {
                property: { name: "position", value: t },
              });
              e.data !== s && (t = this.normalize(e.data)),
                (this._current = t),
                this.invalidate("position"),
                this.trigger("changed", {
                  property: { name: "position", value: this._current },
                });
            }
            return this._current;
          }),
          (n.prototype.invalidate = function (e) {
            return (
              "string" === t.type(e) &&
                ((this._invalidated[e] = !0),
                this.is("valid") && this.leave("valid")),
              t.map(this._invalidated, function (t, e) {
                return e;
              })
            );
          }),
          (n.prototype.reset = function (t) {
            (t = this.normalize(t)) !== s &&
              ((this._speed = 0),
              (this._current = t),
              this.suppress(["translate", "translated"]),
              this.animate(this.coordinates(t)),
              this.release(["translate", "translated"]));
          }),
          (n.prototype.normalize = function (t, e) {
            var i = this._items.length,
              n = e ? 0 : this._clones.length;
            return (
              !this.isNumeric(t) || i < 1
                ? (t = s)
                : (t < 0 || t >= i + n) &&
                  (t = ((((t - n / 2) % i) + i) % i) + n / 2),
              t
            );
          }),
          (n.prototype.relative = function (t) {
            return (t -= this._clones.length / 2), this.normalize(t, !0);
          }),
          (n.prototype.maximum = function (t) {
            var e,
              i,
              s,
              n = this.settings,
              o = this._coordinates.length;
            if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (n.autoWidth || n.merge) {
              if ((e = this._items.length))
                for (
                  i = this._items[--e].width(), s = this.$element.width();
                  e-- &&
                  !((i += this._items[e].width() + this.settings.margin) > s);

                );
              o = e + 1;
            } else
              o = n.center
                ? this._items.length - 1
                : this._items.length - n.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0);
          }),
          (n.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2;
          }),
          (n.prototype.items = function (t) {
            return t === s
              ? this._items.slice()
              : ((t = this.normalize(t, !0)), this._items[t]);
          }),
          (n.prototype.mergers = function (t) {
            return t === s
              ? this._mergers.slice()
              : ((t = this.normalize(t, !0)), this._mergers[t]);
          }),
          (n.prototype.clones = function (e) {
            var i = this._clones.length / 2,
              n = i + this._items.length,
              o = function (t) {
                return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2;
              };
            return e === s
              ? t.map(this._clones, function (t, e) {
                  return o(e);
                })
              : t.map(this._clones, function (t, i) {
                  return t === e ? o(i) : null;
                });
          }),
          (n.prototype.speed = function (t) {
            return t !== s && (this._speed = t), this._speed;
          }),
          (n.prototype.coordinates = function (e) {
            var i,
              n = 1,
              o = e - 1;
            return e === s
              ? t.map(
                  this._coordinates,
                  t.proxy(function (t, e) {
                    return this.coordinates(e);
                  }, this)
                )
              : (this.settings.center
                  ? (this.settings.rtl && ((n = -1), (o = e + 1)),
                    (i = this._coordinates[e]),
                    (i +=
                      ((this.width() - i + (this._coordinates[o] || 0)) / 2) *
                      n))
                  : (i = this._coordinates[o] || 0),
                (i = Math.ceil(i)));
          }),
          (n.prototype.duration = function (t, e, i) {
            return 0 === i
              ? 0
              : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                  Math.abs(i || this.settings.smartSpeed);
          }),
          (n.prototype.to = function (t, e) {
            var i = this.current(),
              s = null,
              n = t - this.relative(i),
              o = (n > 0) - (n < 0),
              a = this._items.length,
              r = this.minimum(),
              l = this.maximum();
            this.settings.loop
              ? (!this.settings.rewind &&
                  Math.abs(n) > a / 2 &&
                  (n += -1 * o * a),
                (s = (((((t = i + n) - r) % a) + a) % a) + r) !== t &&
                  s - n <= l &&
                  s - n > 0 &&
                  ((i = s - n), (t = s), this.reset(i)))
              : (t = this.settings.rewind
                  ? ((t % (l += 1)) + l) % l
                  : Math.max(r, Math.min(l, t))),
              this.speed(this.duration(i, t, e)),
              this.current(t),
              this.isVisible() && this.update();
          }),
          (n.prototype.next = function (t) {
            (t = t || !1), this.to(this.relative(this.current()) + 1, t);
          }),
          (n.prototype.prev = function (t) {
            (t = t || !1), this.to(this.relative(this.current()) - 1, t);
          }),
          (n.prototype.onTransitionEnd = function (t) {
            if (
              t !== s &&
              (t.stopPropagation(),
              (t.target || t.srcElement || t.originalTarget) !==
                this.$stage.get(0))
            )
              return !1;
            this.leave("animating"), this.trigger("translated");
          }),
          (n.prototype.viewport = function () {
            var s;
            return (
              this.options.responsiveBaseElement !== e
                ? (s = t(this.options.responsiveBaseElement).width())
                : e.innerWidth
                ? (s = e.innerWidth)
                : i.documentElement && i.documentElement.clientWidth
                ? (s = i.documentElement.clientWidth)
                : console.warn("Can not detect viewport width."),
              s
            );
          }),
          (n.prototype.replace = function (e) {
            this.$stage.empty(),
              (this._items = []),
              e && (e = e instanceof jQuery ? e : t(e)),
              this.settings.nestedItemSelector &&
                (e = e.find("." + this.settings.nestedItemSelector)),
              e
                .filter(function () {
                  return 1 === this.nodeType;
                })
                .each(
                  t.proxy(function (t, e) {
                    (e = this.prepare(e)),
                      this.$stage.append(e),
                      this._items.push(e),
                      this._mergers.push(
                        1 *
                          e
                            .find("[data-merge]")
                            .addBack("[data-merge]")
                            .attr("data-merge") || 1
                      );
                  }, this)
                ),
              this.reset(
                this.isNumeric(this.settings.startPosition)
                  ? this.settings.startPosition
                  : 0
              ),
              this.invalidate("items");
          }),
          (n.prototype.add = function (e, i) {
            var n = this.relative(this._current);
            (i = i === s ? this._items.length : this.normalize(i, !0)),
              (e = e instanceof jQuery ? e : t(e)),
              this.trigger("add", { content: e, position: i }),
              (e = this.prepare(e)),
              0 === this._items.length || i === this._items.length
                ? (0 === this._items.length && this.$stage.append(e),
                  0 !== this._items.length && this._items[i - 1].after(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  ))
                : (this._items[i].before(e),
                  this._items.splice(i, 0, e),
                  this._mergers.splice(
                    i,
                    0,
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  )),
              this._items[n] && this.reset(this._items[n].index()),
              this.invalidate("items"),
              this.trigger("added", { content: e, position: i });
          }),
          (n.prototype.remove = function (t) {
            (t = this.normalize(t, !0)) !== s &&
              (this.trigger("remove", { content: this._items[t], position: t }),
              this._items[t].remove(),
              this._items.splice(t, 1),
              this._mergers.splice(t, 1),
              this.invalidate("items"),
              this.trigger("removed", { content: null, position: t }));
          }),
          (n.prototype.preloadAutoWidthImages = function (e) {
            e.each(
              t.proxy(function (e, i) {
                this.enter("pre-loading"),
                  (i = t(i)),
                  t(new Image())
                    .one(
                      "load",
                      t.proxy(function (t) {
                        i.attr("src", t.target.src),
                          i.css("opacity", 1),
                          this.leave("pre-loading"),
                          !this.is("pre-loading") &&
                            !this.is("initializing") &&
                            this.refresh();
                      }, this)
                    )
                    .attr(
                      "src",
                      i.attr("src") ||
                        i.attr("data-src") ||
                        i.attr("data-src-retina")
                    );
              }, this)
            );
          }),
          (n.prototype.destroy = function () {
            for (var s in (this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            t(i).off(".owl.core"),
            !1 !== this.settings.responsive &&
              (e.clearTimeout(this.resizeTimer),
              this.off(e, "resize", this._handlers.onThrottledResize)),
            this._plugins))
              this._plugins[s].destroy();
            this.$stage.children(".cloned").remove(),
              this.$stage.unwrap(),
              this.$stage.children().contents().unwrap(),
              this.$stage.children().unwrap(),
              this.$stage.remove(),
              this.$element
                .removeClass(this.options.refreshClass)
                .removeClass(this.options.loadingClass)
                .removeClass(this.options.loadedClass)
                .removeClass(this.options.rtlClass)
                .removeClass(this.options.dragClass)
                .removeClass(this.options.grabClass)
                .attr(
                  "class",
                  this.$element
                    .attr("class")
                    .replace(
                      new RegExp(
                        this.options.responsiveClass + "-\\S+\\s",
                        "g"
                      ),
                      ""
                    )
                )
                .removeData("owl.carousel");
          }),
          (n.prototype.op = function (t, e, i) {
            var s = this.settings.rtl;
            switch (e) {
              case "<":
                return s ? t > i : t < i;
              case ">":
                return s ? t < i : t > i;
              case ">=":
                return s ? t <= i : t >= i;
              case "<=":
                return s ? t >= i : t <= i;
            }
          }),
          (n.prototype.on = function (t, e, i, s) {
            t.addEventListener
              ? t.addEventListener(e, i, s)
              : t.attachEvent && t.attachEvent("on" + e, i);
          }),
          (n.prototype.off = function (t, e, i, s) {
            t.removeEventListener
              ? t.removeEventListener(e, i, s)
              : t.detachEvent && t.detachEvent("on" + e, i);
          }),
          (n.prototype.trigger = function (e, i, s, o, a) {
            var r = {
                item: { count: this._items.length, index: this.current() },
              },
              l = t.camelCase(
                t
                  .grep(["on", e, s], function (t) {
                    return t;
                  })
                  .join("-")
                  .toLowerCase()
              ),
              d = t.Event(
                [e, "owl", s || "carousel"].join(".").toLowerCase(),
                t.extend({ relatedTarget: this }, r, i)
              );
            return (
              this._supress[e] ||
                (t.each(this._plugins, function (t, e) {
                  e.onTrigger && e.onTrigger(d);
                }),
                this.register({ type: n.Type.Event, name: e }),
                this.$element.trigger(d),
                this.settings &&
                  "function" == typeof this.settings[l] &&
                  this.settings[l].call(this, d)),
              d
            );
          }),
          (n.prototype.enter = function (e) {
            t.each(
              [e].concat(this._states.tags[e] || []),
              t.proxy(function (t, e) {
                this._states.current[e] === s && (this._states.current[e] = 0),
                  this._states.current[e]++;
              }, this)
            );
          }),
          (n.prototype.leave = function (e) {
            t.each(
              [e].concat(this._states.tags[e] || []),
              t.proxy(function (t, e) {
                this._states.current[e]--;
              }, this)
            );
          }),
          (n.prototype.register = function (e) {
            if (e.type === n.Type.Event) {
              if (
                (t.event.special[e.name] || (t.event.special[e.name] = {}),
                !t.event.special[e.name].owl)
              ) {
                var i = t.event.special[e.name]._default;
                (t.event.special[e.name]._default = function (t) {
                  return !i ||
                    !i.apply ||
                    (t.namespace && -1 !== t.namespace.indexOf("owl"))
                    ? t.namespace && t.namespace.indexOf("owl") > -1
                    : i.apply(this, arguments);
                }),
                  (t.event.special[e.name].owl = !0);
              }
            } else
              e.type === n.Type.State &&
                (this._states.tags[e.name]
                  ? (this._states.tags[e.name] = this._states.tags[
                      e.name
                    ].concat(e.tags))
                  : (this._states.tags[e.name] = e.tags),
                (this._states.tags[e.name] = t.grep(
                  this._states.tags[e.name],
                  t.proxy(function (i, s) {
                    return t.inArray(i, this._states.tags[e.name]) === s;
                  }, this)
                )));
          }),
          (n.prototype.suppress = function (e) {
            t.each(
              e,
              t.proxy(function (t, e) {
                this._supress[e] = !0;
              }, this)
            );
          }),
          (n.prototype.release = function (e) {
            t.each(
              e,
              t.proxy(function (t, e) {
                delete this._supress[e];
              }, this)
            );
          }),
          (n.prototype.pointer = function (t) {
            var i = { x: null, y: null };
            return (
              (t =
                (t = t.originalEvent || t || e.event).touches &&
                t.touches.length
                  ? t.touches[0]
                  : t.changedTouches && t.changedTouches.length
                  ? t.changedTouches[0]
                  : t).pageX
                ? ((i.x = t.pageX), (i.y = t.pageY))
                : ((i.x = t.clientX), (i.y = t.clientY)),
              i
            );
          }),
          (n.prototype.isNumeric = function (t) {
            return !isNaN(parseFloat(t));
          }),
          (n.prototype.difference = function (t, e) {
            return { x: t.x - e.x, y: t.y - e.y };
          }),
          (t.fn.owlCarousel = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
              var s = t(this),
                o = s.data("owl.carousel");
              o ||
                ((o = new n(this, "object" == typeof e && e)),
                s.data("owl.carousel", o),
                t.each(
                  [
                    "next",
                    "prev",
                    "to",
                    "destroy",
                    "refresh",
                    "replace",
                    "add",
                    "remove",
                  ],
                  function (e, i) {
                    o.register({ type: n.Type.Event, name: i }),
                      o.$element.on(
                        i + ".owl.carousel.core",
                        t.proxy(function (t) {
                          t.namespace &&
                            t.relatedTarget !== this &&
                            (this.suppress([i]),
                            o[i].apply(this, [].slice.call(arguments, 1)),
                            this.release([i]));
                        }, o)
                      );
                  }
                )),
                "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
            });
          }),
          (t.fn.owlCarousel.Constructor = n);
      })(window.Zepto || window.jQuery, window, document),
        (function (t, e, i, s) {
          var n = function (e) {
            (this._core = e),
              (this._interval = null),
              (this._visible = null),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoRefresh &&
                    this.watch();
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                n.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          };
          (n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (n.prototype.watch = function () {
              this._interval ||
                ((this._visible = this._core.isVisible()),
                (this._interval = e.setInterval(
                  t.proxy(this.refresh, this),
                  this._core.settings.autoRefreshInterval
                )));
            }),
            (n.prototype.refresh = function () {
              this._core.isVisible() !== this._visible &&
                ((this._visible = !this._visible),
                this._core.$element.toggleClass("owl-hidden", !this._visible),
                this._visible &&
                  this._core.invalidate("width") &&
                  this._core.refresh());
            }),
            (n.prototype.destroy = function () {
              var t, i;
              for (t in (e.clearInterval(this._interval), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, i, s) {
          var n = function (e) {
            (this._core = e),
              (this._loaded = []),
              (this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                  t.proxy(function (e) {
                    if (
                      e.namespace &&
                      this._core.settings &&
                      this._core.settings.lazyLoad &&
                      ((e.property && "position" == e.property.name) ||
                        "initialized" == e.type)
                    ) {
                      var i = this._core.settings,
                        s = (i.center && Math.ceil(i.items / 2)) || i.items,
                        n = (i.center && -1 * s) || 0,
                        o =
                          (e.property && undefined !== e.property.value
                            ? e.property.value
                            : this._core.current()) + n,
                        a = this._core.clones().length,
                        r = t.proxy(function (t, e) {
                          this.load(e);
                        }, this);
                      for (
                        i.lazyLoadEager > 0 &&
                        ((s += i.lazyLoadEager),
                        i.loop && ((o -= i.lazyLoadEager), s++));
                        n++ < s;

                      )
                        this.load(a / 2 + this._core.relative(o)),
                          a &&
                            t.each(
                              this._core.clones(this._core.relative(o)),
                              r
                            ),
                          o++;
                    }
                  }, this),
              }),
              (this._core.options = t.extend(
                {},
                n.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          };
          (n.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (n.prototype.load = function (i) {
              var s = this._core.$stage.children().eq(i),
                n = s && s.find(".owl-lazy");
              !n ||
                t.inArray(s.get(0), this._loaded) > -1 ||
                (n.each(
                  t.proxy(function (i, s) {
                    var n,
                      o = t(s),
                      a =
                        (e.devicePixelRatio > 1 && o.attr("data-src-retina")) ||
                        o.attr("data-src") ||
                        o.attr("data-srcset");
                    this._core.trigger("load", { element: o, url: a }, "lazy"),
                      o.is("img")
                        ? o
                            .one(
                              "load.owl.lazy",
                              t.proxy(function () {
                                o.css("opacity", 1),
                                  this._core.trigger(
                                    "loaded",
                                    { element: o, url: a },
                                    "lazy"
                                  );
                              }, this)
                            )
                            .attr("src", a)
                        : o.is("source")
                        ? o
                            .one(
                              "load.owl.lazy",
                              t.proxy(function () {
                                this._core.trigger(
                                  "loaded",
                                  { element: o, url: a },
                                  "lazy"
                                );
                              }, this)
                            )
                            .attr("srcset", a)
                        : (((n = new Image()).onload = t.proxy(function () {
                            o.css({
                              "background-image": 'url("' + a + '")',
                              opacity: "1",
                            }),
                              this._core.trigger(
                                "loaded",
                                { element: o, url: a },
                                "lazy"
                              );
                          }, this)),
                          (n.src = a));
                  }, this)
                ),
                this._loaded.push(s.get(0)));
            }),
            (n.prototype.destroy = function () {
              var t, e;
              for (t in this.handlers)
                this._core.$element.off(t, this.handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Lazy = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, i, s) {
          var n = function (i) {
            (this._core = i),
              (this._previousHeight = null),
              (this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(
                  function (t) {
                    t.namespace &&
                      this._core.settings.autoHeight &&
                      this.update();
                  },
                  this
                ),
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    "position" === t.property.name &&
                    this.update();
                }, this),
                "loaded.owl.lazy": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    t.element
                      .closest("." + this._core.settings.itemClass)
                      .index() === this._core.current() &&
                    this.update();
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                n.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              (this._intervalId = null);
            var s = this;
            t(e).on("load", function () {
              s._core.settings.autoHeight && s.update();
            }),
              t(e).on("resize", function () {
                s._core.settings.autoHeight &&
                  (null != s._intervalId && clearTimeout(s._intervalId),
                  (s._intervalId = setTimeout(function () {
                    s.update();
                  }, 250)));
              });
          };
          (n.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (n.prototype.update = function () {
              var e = this._core._current,
                i = e + this._core.settings.items,
                s = this._core.settings.lazyLoad,
                n = this._core.$stage.children().toArray().slice(e, i),
                o = [],
                a = 0;
              t.each(n, function (e, i) {
                o.push(t(i).height());
              }),
                (a = Math.max.apply(null, o)) <= 1 &&
                  s &&
                  this._previousHeight &&
                  (a = this._previousHeight),
                (this._previousHeight = a),
                this._core.$stage
                  .parent()
                  .height(a)
                  .addClass(this._core.settings.autoHeightClass);
            }),
            (n.prototype.destroy = function () {
              var t, e;
              for (t in this._handlers)
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, i, s) {
          var n = function (e) {
            (this._core = e),
              (this._videos = {}),
              (this._playing = null),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.register({
                      type: "state",
                      name: "playing",
                      tags: ["interacting"],
                    });
                }, this),
                "resize.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.video &&
                    this.isInFullScreen() &&
                    t.preventDefault();
                }, this),
                "refreshed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.is("resizing") &&
                    this._core.$stage.find(".cloned .owl-video-frame").remove();
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    "position" === t.property.name &&
                    this._playing &&
                    this.stop();
                }, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                  if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length &&
                      (i.css("display", "none"), this.fetch(i, t(e.content)));
                  }
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                n.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              this._core.$element.on(
                "click.owl.video",
                ".owl-video-play-icon",
                t.proxy(function (t) {
                  this.play(t);
                }, this)
              );
          };
          (n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (n.prototype.fetch = function (t, e) {
              var i = t.attr("data-vimeo-id")
                  ? "vimeo"
                  : t.attr("data-vzaar-id")
                  ? "vzaar"
                  : "youtube",
                s =
                  t.attr("data-vimeo-id") ||
                  t.attr("data-youtube-id") ||
                  t.attr("data-vzaar-id"),
                n = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                a = t.attr("href");
              if (!a) throw new Error("Missing video URL.");
              if (
                (s = a.match(
                  /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                ))[3].indexOf("youtu") > -1
              )
                i = "youtube";
              else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
              else {
                if (!(s[3].indexOf("vzaar") > -1))
                  throw new Error("Video URL not supported.");
                i = "vzaar";
              }
              (s = s[6]),
                (this._videos[a] = { type: i, id: s, width: n, height: o }),
                e.attr("data-video", a),
                this.thumbnail(t, this._videos[a]);
            }),
            (n.prototype.thumbnail = function (e, i) {
              var s,
                n,
                o =
                  i.width && i.height
                    ? "width:" + i.width + "px;height:" + i.height + "px;"
                    : "",
                a = e.find("img"),
                r = "src",
                l = "",
                d = this._core.settings,
                c = function (i) {
                  '<div class="owl-video-play-icon"></div>',
                    (s = d.lazyLoad
                      ? t("<div/>", { class: "owl-video-tn " + l, srcType: i })
                      : t("<div/>", {
                          class: "owl-video-tn",
                          style: "opacity:1;background-image:url(" + i + ")",
                        })),
                    e.after(s),
                    e.after('<div class="owl-video-play-icon"></div>');
                };
              if (
                (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: o })),
                this._core.settings.lazyLoad &&
                  ((r = "data-src"), (l = "owl-lazy")),
                a.length)
              )
                return c(a.attr(r)), a.remove(), !1;
              "youtube" === i.type
                ? ((n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"),
                  c(n))
                : "vimeo" === i.type
                ? t.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (t) {
                      (n = t[0].thumbnail_large), c(n);
                    },
                  })
                : "vzaar" === i.type &&
                  t.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + i.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (t) {
                      (n = t.framegrab_url), c(n);
                    },
                  });
            }),
            (n.prototype.stop = function () {
              this._core.trigger("stop", null, "video"),
                this._playing.find(".owl-video-frame").remove(),
                this._playing.removeClass("owl-video-playing"),
                (this._playing = null),
                this._core.leave("playing"),
                this._core.trigger("stopped", null, "video");
            }),
            (n.prototype.play = function (e) {
              var i,
                s = t(e.target).closest("." + this._core.settings.itemClass),
                n = this._videos[s.attr("data-video")],
                o = n.width || "100%",
                a = n.height || this._core.$stage.height();
              this._playing ||
                (this._core.enter("playing"),
                this._core.trigger("play", null, "video"),
                (s = this._core.items(this._core.relative(s.index()))),
                this._core.reset(s.index()),
                (i = t(
                  '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                )).attr("height", a),
                i.attr("width", o),
                "youtube" === n.type
                  ? i.attr(
                      "src",
                      "//www.youtube.com/embed/" +
                        n.id +
                        "?autoplay=1&rel=0&v=" +
                        n.id
                    )
                  : "vimeo" === n.type
                  ? i.attr(
                      "src",
                      "//player.vimeo.com/video/" + n.id + "?autoplay=1"
                    )
                  : "vzaar" === n.type &&
                    i.attr(
                      "src",
                      "//view.vzaar.com/" + n.id + "/player?autoplay=true"
                    ),
                t(i)
                  .wrap('<div class="owl-video-frame" />')
                  .insertAfter(s.find(".owl-video")),
                (this._playing = s.addClass("owl-video-playing")));
            }),
            (n.prototype.isInFullScreen = function () {
              var e =
                i.fullscreenElement ||
                i.mozFullScreenElement ||
                i.webkitFullscreenElement;
              return e && t(e).parent().hasClass("owl-video-frame");
            }),
            (n.prototype.destroy = function () {
              var t, e;
              for (t in (this._core.$element.off("click.owl.video"),
              this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Video = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, i, s) {
          var n = function (e) {
            (this.core = e),
              (this.core.options = t.extend({}, n.Defaults, this.core.options)),
              (this.swapping = !0),
              (this.previous = s),
              (this.next = s),
              (this.handlers = {
                "change.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    "position" == t.property.name &&
                    ((this.previous = this.core.current()),
                    (this.next = t.property.value));
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                  t.proxy(function (t) {
                    t.namespace && (this.swapping = "translated" == t.type);
                  }, this),
                "translate.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this.swapping &&
                    (this.core.options.animateOut ||
                      this.core.options.animateIn) &&
                    this.swap();
                }, this),
              }),
              this.core.$element.on(this.handlers);
          };
          (n.Defaults = { animateOut: !1, animateIn: !1 }),
            (n.prototype.swap = function () {
              if (
                1 === this.core.settings.items &&
                t.support.animation &&
                t.support.transition
              ) {
                this.core.speed(0);
                var e,
                  i = t.proxy(this.clear, this),
                  s = this.core.$stage.children().eq(this.previous),
                  n = this.core.$stage.children().eq(this.next),
                  o = this.core.settings.animateIn,
                  a = this.core.settings.animateOut;
                this.core.current() !== this.previous &&
                  (a &&
                    ((e =
                      this.core.coordinates(this.previous) -
                      this.core.coordinates(this.next)),
                    s
                      .one(t.support.animation.end, i)
                      .css({ left: e + "px" })
                      .addClass("animated owl-animated-out")
                      .addClass(a)),
                  o &&
                    n
                      .one(t.support.animation.end, i)
                      .addClass("animated owl-animated-in")
                      .addClass(o));
              }
            }),
            (n.prototype.clear = function (e) {
              t(e.target)
                .css({ left: "" })
                .removeClass("animated owl-animated-out owl-animated-in")
                .removeClass(this.core.settings.animateIn)
                .removeClass(this.core.settings.animateOut),
                this.core.onTransitionEnd();
            }),
            (n.prototype.destroy = function () {
              var t, e;
              for (t in this.handlers)
                this.core.$element.off(t, this.handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Animate = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, i, s) {
          var n = function (e) {
            (this._core = e),
              (this._call = null),
              (this._time = 0),
              (this._timeout = 0),
              (this._paused = !0),
              (this._handlers = {
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace && "settings" === t.property.name
                    ? this._core.settings.autoplay
                      ? this.play()
                      : this.stop()
                    : t.namespace &&
                      "position" === t.property.name &&
                      this._paused &&
                      (this._time = 0);
                }, this),
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace && this._core.settings.autoplay && this.play();
                }, this),
                "play.owl.autoplay": t.proxy(function (t, e, i) {
                  t.namespace && this.play(e, i);
                }, this),
                "stop.owl.autoplay": t.proxy(function (t) {
                  t.namespace && this.stop();
                }, this),
                "mouseover.owl.autoplay": t.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.play();
                }, this),
                "touchstart.owl.core": t.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "touchend.owl.core": t.proxy(function () {
                  this._core.settings.autoplayHoverPause && this.play();
                }, this),
              }),
              this._core.$element.on(this._handlers),
              (this._core.options = t.extend(
                {},
                n.Defaults,
                this._core.options
              ));
          };
          (n.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1,
          }),
            (n.prototype._next = function (s) {
              (this._call = e.setTimeout(
                t.proxy(this._next, this, s),
                this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                  this.read()
              )),
                this._core.is("interacting") ||
                  i.hidden ||
                  this._core.next(s || this._core.settings.autoplaySpeed);
            }),
            (n.prototype.read = function () {
              return new Date().getTime() - this._time;
            }),
            (n.prototype.play = function (i, s) {
              var n;
              this._core.is("rotating") || this._core.enter("rotating"),
                (i = i || this._core.settings.autoplayTimeout),
                (n = Math.min(this._time % (this._timeout || i), i)),
                this._paused
                  ? ((this._time = this.read()), (this._paused = !1))
                  : e.clearTimeout(this._call),
                (this._time += (this.read() % i) - n),
                (this._timeout = i),
                (this._call = e.setTimeout(
                  t.proxy(this._next, this, s),
                  i - n
                ));
            }),
            (n.prototype.stop = function () {
              this._core.is("rotating") &&
                ((this._time = 0),
                (this._paused = !0),
                e.clearTimeout(this._call),
                this._core.leave("rotating"));
            }),
            (n.prototype.pause = function () {
              this._core.is("rotating") &&
                !this._paused &&
                ((this._time = this.read()),
                (this._paused = !0),
                e.clearTimeout(this._call));
            }),
            (n.prototype.destroy = function () {
              var t, e;
              for (t in (this.stop(), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.autoplay = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, i, s) {
          "use strict";
          var n = function (e) {
            (this._core = e),
              (this._initialized = !1),
              (this._pages = []),
              (this._controls = {}),
              (this._templates = []),
              (this.$element = this._core.$element),
              (this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to,
              }),
              (this._handlers = {
                "prepared.owl.carousel": t.proxy(function (e) {
                  e.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.push(
                      '<div class="' +
                        this._core.settings.dotClass +
                        '">' +
                        t(e.content)
                          .find("[data-dot]")
                          .addBack("[data-dot]")
                          .attr("data-dot") +
                        "</div>"
                    );
                }, this),
                "added.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(
                      t.position,
                      0,
                      this._templates.pop()
                    );
                }, this),
                "remove.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(t.position, 1);
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace && "position" == t.property.name && this.draw();
                }, this),
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    !this._initialized &&
                    (this._core.trigger("initialize", null, "navigation"),
                    this.initialize(),
                    this.update(),
                    this.draw(),
                    (this._initialized = !0),
                    this._core.trigger("initialized", null, "navigation"));
                }, this),
                "refreshed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._initialized &&
                    (this._core.trigger("refresh", null, "navigation"),
                    this.update(),
                    this.draw(),
                    this._core.trigger("refreshed", null, "navigation"));
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                n.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers);
          };
          (n.Defaults = {
            nav: !1,
            navText: [
              '<span aria-label="Previous">&#x2039;</span>',
              '<span aria-label="Next">&#x203a;</span>',
            ],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
          }),
            (n.prototype.initialize = function () {
              var e,
                i = this._core.settings;
              for (e in ((this._controls.$relative = (
                i.navContainer
                  ? t(i.navContainer)
                  : t("<div>")
                      .addClass(i.navContainerClass)
                      .appendTo(this.$element)
              ).addClass("disabled")),
              (this._controls.$previous = t("<" + i.navElement + ">")
                .addClass(i.navClass[0])
                .html(i.navText[0])
                .prependTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.prev(i.navSpeed);
                  }, this)
                )),
              (this._controls.$next = t("<" + i.navElement + ">")
                .addClass(i.navClass[1])
                .html(i.navText[1])
                .appendTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.next(i.navSpeed);
                  }, this)
                )),
              i.dotsData ||
                (this._templates = [
                  t('<button role="button">')
                    .addClass(i.dotClass)
                    .append(t("<span>"))
                    .prop("outerHTML"),
                ]),
              (this._controls.$absolute = (
                i.dotsContainer
                  ? t(i.dotsContainer)
                  : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
              ).addClass("disabled")),
              this._controls.$absolute.on(
                "click",
                "button",
                t.proxy(function (e) {
                  var s = t(e.target).parent().is(this._controls.$absolute)
                    ? t(e.target).index()
                    : t(e.target).parent().index();
                  e.preventDefault(), this.to(s, i.dotsSpeed);
                }, this)
              ),
              this._overrides))
                this._core[e] = t.proxy(this[e], this);
            }),
            (n.prototype.destroy = function () {
              var t, e, i, s, n;
              for (t in ((n = this._core.settings), this._handlers))
                this.$element.off(t, this._handlers[t]);
              for (e in this._controls)
                "$relative" === e && n.navContainer
                  ? this._controls[e].html("")
                  : this._controls[e].remove();
              for (s in this.overides) this._core[s] = this._overrides[s];
              for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null);
            }),
            (n.prototype.update = function () {
              var t,
                e,
                i = this._core.clones().length / 2,
                s = i + this._core.items().length,
                n = this._core.maximum(!0),
                o = this._core.settings,
                a =
                  o.center || o.autoWidth || o.dotsData
                    ? 1
                    : o.dotsEach || o.items;
              if (
                ("page" !== o.slideBy &&
                  (o.slideBy = Math.min(o.slideBy, o.items)),
                o.dots || "page" == o.slideBy)
              )
                for (this._pages = [], t = i, e = 0, 0; t < s; t++) {
                  if (e >= a || 0 === e) {
                    if (
                      (this._pages.push({
                        start: Math.min(n, t - i),
                        end: t - i + a - 1,
                      }),
                      Math.min(n, t - i) === n)
                    )
                      break;
                    e = 0;
                  }
                  e += this._core.mergers(this._core.relative(t));
                }
            }),
            (n.prototype.draw = function () {
              var e,
                i = this._core.settings,
                s = this._core.items().length <= i.items,
                n = this._core.relative(this._core.current()),
                o = i.loop || i.rewind;
              this._controls.$relative.toggleClass("disabled", !i.nav || s),
                i.nav &&
                  (this._controls.$previous.toggleClass(
                    "disabled",
                    !o && n <= this._core.minimum(!0)
                  ),
                  this._controls.$next.toggleClass(
                    "disabled",
                    !o && n >= this._core.maximum(!0)
                  )),
                this._controls.$absolute.toggleClass("disabled", !i.dots || s),
                i.dots &&
                  ((e =
                    this._pages.length -
                    this._controls.$absolute.children().length),
                  i.dotsData && 0 !== e
                    ? this._controls.$absolute.html(this._templates.join(""))
                    : e > 0
                    ? this._controls.$absolute.append(
                        new Array(e + 1).join(this._templates[0])
                      )
                    : e < 0 &&
                      this._controls.$absolute.children().slice(e).remove(),
                  this._controls.$absolute
                    .find(".active")
                    .removeClass("active"),
                  this._controls.$absolute
                    .children()
                    .eq(t.inArray(this.current(), this._pages))
                    .addClass("active"));
            }),
            (n.prototype.onTrigger = function (e) {
              var i = this._core.settings;
              e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size:
                  i &&
                  (i.center || i.autoWidth || i.dotsData
                    ? 1
                    : i.dotsEach || i.items),
              };
            }),
            (n.prototype.current = function () {
              var e = this._core.relative(this._core.current());
              return t
                .grep(
                  this._pages,
                  t.proxy(function (t, i) {
                    return t.start <= e && t.end >= e;
                  }, this)
                )
                .pop();
            }),
            (n.prototype.getPosition = function (e) {
              var i,
                s,
                n = this._core.settings;
              return (
                "page" == n.slideBy
                  ? ((i = t.inArray(this.current(), this._pages)),
                    (s = this._pages.length),
                    e ? ++i : --i,
                    (i = this._pages[((i % s) + s) % s].start))
                  : ((i = this._core.relative(this._core.current())),
                    (s = this._core.items().length),
                    e ? (i += n.slideBy) : (i -= n.slideBy)),
                i
              );
            }),
            (n.prototype.next = function (e) {
              t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
            }),
            (n.prototype.prev = function (e) {
              t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
            }),
            (n.prototype.to = function (e, i, s) {
              var n;
              !s && this._pages.length
                ? ((n = this._pages.length),
                  t.proxy(this._overrides.to, this._core)(
                    this._pages[((e % n) + n) % n].start,
                    i
                  ))
                : t.proxy(this._overrides.to, this._core)(e, i);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Navigation = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, i, s) {
          "use strict";
          var n = function (i) {
            (this._core = i),
              (this._hashes = {}),
              (this.$element = this._core.$element),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (i) {
                  i.namespace &&
                    "URLHash" === this._core.settings.startPosition &&
                    t(e).trigger("hashchange.owl.navigation");
                }, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                  if (e.namespace) {
                    var i = t(e.content)
                      .find("[data-hash]")
                      .addBack("[data-hash]")
                      .attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content;
                  }
                }, this),
                "changed.owl.carousel": t.proxy(function (i) {
                  if (i.namespace && "position" === i.property.name) {
                    var s = this._core.items(
                        this._core.relative(this._core.current())
                      ),
                      n = t
                        .map(this._hashes, function (t, e) {
                          return t === s ? e : null;
                        })
                        .join();
                    if (!n || e.location.hash.slice(1) === n) return;
                    e.location.hash = n;
                  }
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                n.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers),
              t(e).on(
                "hashchange.owl.navigation",
                t.proxy(function (t) {
                  var i = e.location.hash.substring(1),
                    s = this._core.$stage.children(),
                    n = this._hashes[i] && s.index(this._hashes[i]);
                  undefined !== n &&
                    n !== this._core.current() &&
                    this._core.to(this._core.relative(n), !1, !0);
                }, this)
              );
          };
          (n.Defaults = { URLhashListener: !1 }),
            (n.prototype.destroy = function () {
              var i, s;
              for (i in (t(e).off("hashchange.owl.navigation"), this._handlers))
                this._core.$element.off(i, this._handlers[i]);
              for (s in Object.getOwnPropertyNames(this))
                "function" != typeof this[s] && (this[s] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Hash = n);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, i, s) {
          var n = t("<support>").get(0).style,
            o = "Webkit Moz O ms".split(" "),
            a = {
              transition: {
                end: {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd",
                  transition: "transitionend",
                },
              },
              animation: {
                end: {
                  WebkitAnimation: "webkitAnimationEnd",
                  MozAnimation: "animationend",
                  OAnimation: "oAnimationEnd",
                  animation: "animationend",
                },
              },
            },
            r = function () {
              return !!c("transform");
            },
            l = function () {
              return !!c("perspective");
            },
            d = function () {
              return !!c("animation");
            };
          function c(e, i) {
            var a = !1,
              r = e.charAt(0).toUpperCase() + e.slice(1);
            return (
              t.each(
                (e + " " + o.join(r + " ") + r).split(" "),
                function (t, e) {
                  if (n[e] !== s) return (a = !i || e), !1;
                }
              ),
              a
            );
          }
          function h(t) {
            return c(t, !0);
          }
          (function () {
            return !!c("transition");
          })() &&
            ((t.support.transition = new String(h("transition"))),
            (t.support.transition.end =
              a.transition.end[t.support.transition])),
            d() &&
              ((t.support.animation = new String(h("animation"))),
              (t.support.animation.end = a.animation.end[t.support.animation])),
            r() &&
              ((t.support.transform = new String(h("transform"))),
              (t.support.transform3d = l()));
        })(window.Zepto || window.jQuery, window, document);
    }
    (t.fn.scrollerSlideSize = function () {
      return this.each(function () {
        var e = t(this),
          i = e.find("img").eq(0),
          s = parseInt(i.attr("width")),
          n = e.parents(".slider-wrapper"),
          o = n.width(),
          a = n.attr("data-max-width"),
          r = parseInt(n.attr("data-padding-side")),
          l = parseInt(i.parents(".wf-td").eq(0).css("paddingLeft")),
          d = parseInt(i.parents(".wf-td").eq(0).css("paddingRight")),
          c = 0;
        if ((l > 0 && d > 0 && (c = l + d), void 0 !== a))
          var h = (o * parseFloat(a)) / 100 - c - r;
        if (s > h) var u = h;
        else {
          u = parseInt(i.attr("width"));
          i.exists() || (u = 280);
        }
        e.parents(".slider-wrapper").attr("data-width", u + c),
          e.css({ width: u + c });
      });
    }),
      t(
        ".slider-wrapper.description-under-image:not(.related-projects) article"
      ).scrollerSlideSize();
    var C = t(".slider-wrapper.owl-carousel:not(.related-projects)");
    C.each(function () {
      var e,
        i = t(this),
        s = i.attr("data-padding-side")
          ? parseInt(i.attr("data-padding-side"))
          : 0,
        n = "true" === i.attr("data-autoslide"),
        o = i.attr("data-delay") ? parseInt(i.attr("data-delay")) : 6e3,
        a = "true" === i.attr("data-arrows"),
        r = i.attr("data-width")
          ? C.width() / parseInt(i.attr("data-width"))
          : C.width() / C.find("article img").attr("width"),
        l = "rtl" == jQuery(document).attr("dir"),
        d = i.attr("data-next-icon")
          ? i.attr("data-next-icon")
          : "icon-ar-018-r",
        c = i.attr("data-prev-icon")
          ? i.attr("data-prev-icon")
          : "icon-ar-018-l";
      function h(t) {
        var e,
          s = i.find(".owl-stage"),
          n = s.width(),
          o = i.find(".dt-owl-item");
        (e = (o.width() + parseInt(o.css("margin-right"))) * t.item.count) >
          n && s.width(e);
      }
      (r = i.attr("data-width")
        ? C.width() / parseInt(i.attr("data-width"))
        : i.attr("data-max-width")
        ? C.width() / parseInt(i.attr("data-max-width"))
        : C.width() / C.find("article img").attr("width")),
        i
          .owlCarousel({
            rtl: l,
            items: r,
            autoHeight: !1,
            margin: s,
            loadedClass: "owl-loaded",
            slideBy: "page",
            loop: !1,
            smartSpeed: 600,
            merge: !0,
            autoWidth: !0,
            responsive: { 678: { mergeFit: !0 }, 1e3: { mergeFit: !1 } },
            autoplay: n,
            autoplayTimeout: o,
            nav: a,
            navElement: "a",
            navText: ['<i class="' + c + '"></i>', '<i class="' + d + '"></i>'],
            dots: !1,
            onInitialize: function (t) {
              var e = parseInt(i.attr("data-max-width")),
                n = (C.width() * parseFloat(e)) / 100 - s,
                o = parseInt(i.find("img").attr("width")),
                a = parseInt(i.find("img").attr("height"));
              e &&
                n < o &&
                (i.find("article").css({ "max-width": n + "px" }),
                i
                  .find("img")
                  .css({ "max-width": n + "px", height: (n * a) / o }));
            },
            onInitialized: h,
            onRefreshed: h,
          })
          .trigger("refresh.owl.carousel"),
        i.on("drag.owl.carousel translate.owl.carousel", function (t) {
          i.addClass("ts-interceptClicks");
        }),
        i.on("dragged.owl.carousel translated.owl.carousel", function (t) {
          clearTimeout(e),
            (e = setTimeout(function () {
              i.removeClass("ts-interceptClicks");
            }, 400));
        }),
        i.on("changed.owl.carousel", function (e) {
          t(".dt-owl-item.cloned .is-loaded", i)
            .parents()
            .hasClass("layzr-bg") &&
            t(".dt-owl-item.cloned .is-loaded", i)
              .parents()
              .removeClass("layzr-bg"),
            t(
              ".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container",
              i
            ).initPhotoswipe(),
            t(
              ".animate-element:not(.start-animation):in-viewport",
              i
            ).checkInViewport();
        }),
        i.find(".dt-owl-item").on("mouseenter", function (t) {
          n && i.trigger("stop.owl.autoplay");
        }),
        i.find(".dt-owl-item").on("mouseleave", function (t) {
          n && i.trigger("play.owl.autoplay", [o]);
        }),
        i.find(".owl-nav a").on("mouseenter", function (t) {
          n && i.trigger("stop.owl.autoplay");
        }),
        i.find(".owl-nav a").on("mouseleave", function (t) {
          n && i.trigger("play.owl.autoplay", [o]);
        }),
        i.on("mouseenter", function (t) {
          i.addClass("show-arrows");
        }),
        i.on("mouseleave", function (t) {
          i.removeClass("show-arrows");
        });
    }),
      (t.fn.postTypeScroller = function () {
        var e = t(this),
          i = "rtl" == jQuery(document).attr("dir"),
          n = e.attr("data-next-icon")
            ? e.attr("data-next-icon")
            : "icon-ar-018-r",
          o = e.attr("data-prev-icon")
            ? e.attr("data-prev-icon")
            : "icon-ar-018-l",
          a =
            (e.attr("data-padding-side") &&
              parseInt(e.attr("data-padding-side")),
            "true" != e.attr("data-paused") &&
              void 0 !== e.attr("data-autoslide")),
          r =
            (e.attr("data-paused"),
            e.attr("data-autoslide") && parseInt(e.attr("data-autoslide")) > 999
              ? parseInt(e.attr("data-autoslide"))
              : 5e3),
          l =
            (e.attr("data-autoslide"),
            e.attr("data-width") ? parseInt(e.attr("data-width")) : 800),
          d = e.attr("data-height") ? parseInt(e.attr("data-height")) : 400,
          c = e.attr("data-img-mode") ? e.attr("data-img-mode") : "fill";
        e.owlCarousel({
          rtl: i,
          items: 1,
          autoHeight: !1,
          center: !1,
          margin: 0,
          loadedClass: "owl-loaded",
          slideBy: 1,
          loop: !0,
          smartSpeed: 600,
          autoplay: a,
          autoplayTimeout: r,
          nav: !0,
          navElement: "a",
          navText: ['<i class="' + o + '"></i>', '<i class="' + n + '"></i>'],
          dots: !1,
        }),
          s.on("debouncedresize", function () {
            e.find(".dt-owl-item").each(function (i) {
              var s = t(this),
                n = s.find("img");
              if ((n.css({ opacity: 0 }), !n)) return !1;
              var o;
              (o = d / l),
                "fit" == c
                  ? s.css({ height: o * s.width() })
                  : s.css({ height: o * e.width() });
              var a,
                r,
                h,
                u,
                p,
                f = parseInt(n.attr("width")),
                m = parseInt(n.attr("height")),
                g = {};
              (a = s.width() / f),
                (r = (o * s.width()) / m),
                (h =
                  "fill" == e.attr("data-img-mode")
                    ? a > r
                      ? a
                      : r
                    : "fit" == e.attr("data-img-mode")
                    ? a < r
                      ? a
                      : r
                    : a > r
                    ? a
                    : r),
                (u = Math.ceil(f * h, 10)),
                (p = Math.ceil(m * h, 10)),
                (g.width = u),
                (g.height = p),
                (g.opacity = 1),
                n.css(g);
            });
          }),
          void 0 !== e.attr("data-autoslide") &&
            t('<div class="psPlay"></div>').appendTo(e),
          "true" === e.attr("data-paused") &&
            (t(".psPlay", e).addClass("paused"),
            e.trigger("stop.owl.autoplay")),
          t(".psPlay", e).on("click", function (e) {
            e.preventDefault();
            var i = t(this);
            i.hasClass("paused")
              ? (i.removeClass("paused"),
                (a = !0),
                i.trigger("play.owl.autoplay", [r, 600]))
              : (i.addClass("paused"), i.trigger("stop.owl.autoplay"));
          });
      }),
      t(".slider-simple:not(.slider-masonry)").each(function () {
        t(this).postTypeScroller();
      });
    var _,
      x = t(
        "#main .slider-content, #footer .slider-content, .side-header:not(.sub-downwards) .mega-full-width > .dt-mega-menu-wrap  .slider-content, .side-header:not(.sub-downwards) .mega-auto-width > .dt-mega-menu-wrap  .slider-content"
      );
    (t.fn.widgetScroller = function () {
      return this.each(function () {
        var e = t(this),
          i = void 0 !== e.attr("data-autoslide"),
          s = e.attr("data-autoslide")
            ? parseInt(e.attr("data-autoslide"))
            : 6e3,
          n = "rtl" == jQuery(document).attr("dir");
        e.owlCarousel({
          rtl: n,
          items: 1,
          autoHeight: !0,
          margin: 0,
          loadedClass: "owl-loaded",
          slideBy: "page",
          loop: e.children().length > 1,
          smartSpeed: 600,
          autoplay: i,
          autoplayTimeout: s,
          autoplayHoverPause: !1,
          nav: !1,
          dots: !0,
          dotsEach: !0,
        });
      });
    }),
      x.widgetScroller().css("visibility", "visible");
    var S;
    function k() {
      clearTimeout(S),
        (S = setTimeout(function () {
          t(
            ".dt-owl-carousel-call, .elementor-owl-carousel-call, .related-projects, .slider-simple:not(.slider-masonry)"
          ).trigger("refresh.owl.carousel");
        }, 200));
    }
    (t.fn.the7OwlCarousel = function () {
      var e = t(this);
      if (e.length) {
        var i,
          s = e.attr("data-col-gap") ? parseInt(e.attr("data-col-gap")) : 0,
          n = "true" === e.attr("data-auto-height"),
          o = e.attr("data-speed") ? parseInt(e.attr("data-speed")) : 600,
          a = "true" === e.attr("data-autoplay"),
          r = e.attr("data-autoplay_speed")
            ? parseInt(e.attr("data-autoplay_speed"))
            : 6e3,
          l = "true" === e.attr("data-arrows"),
          d = "true" === e.attr("data-bullet"),
          c = e.attr("data-wide-col-num")
            ? parseInt(e.attr("data-wide-col-num"))
            : 3,
          h = e.attr("data-col-num") ? parseInt(e.attr("data-col-num")) : 3,
          u = e.attr("data-laptop-col")
            ? parseInt(e.attr("data-laptop-col"))
            : 3,
          p = e.attr("data-h-tablet-columns-num")
            ? parseInt(e.attr("data-h-tablet-columns-num"))
            : 3,
          f = e.attr("data-v-tablet-columns-num")
            ? parseInt(e.attr("data-v-tablet-columns-num"))
            : 2,
          m = e.attr("data-phone-columns-num")
            ? parseInt(e.attr("data-phone-columns-num"))
            : 1,
          g = "rtl" == jQuery(document).attr("dir"),
          v =
            "1" == e.attr("data-scroll-mode")
              ? parseInt(e.attr("data-scroll-mode"))
              : "page",
          w = e.attr("data-next-icon")
            ? e.attr("data-next-icon")
            : "icon-ar-002-r",
          y = e.attr("data-prev-icon")
            ? e.attr("data-prev-icon")
            : "icon-ar-001-l",
          b = !("1" != e.attr("data-scroll-mode") || !d);
        if (void 0 !== e.attr("data-stage-padding"))
          var C = e.hasClass("enable-img-shadow")
            ? parseInt(e.attr("data-stage-padding")) +
              parseInt(e.attr("data-col-gap")) / 2
            : parseInt(e.attr("data-stage-padding"));
        else C = 0;
        (s = e.attr("data-col-gap")
          ? parseInt(e.attr("data-col-gap"))
          : e.attr("data-padding-side")
          ? parseInt(e.attr("data-padding-side"))
          : 0),
          e.on("initialize.owl.carousel", function (i) {
            t(e[0])
              .find("script, style")
              .each(function () {
                var e = t(this);
                e.siblings().first();
                t(e).prev().length > 0
                  ? t(e)
                      .prev()
                      .addBack()
                      .wrapAll("<div class='carousel-item-wrap' />")
                  : t(e).next().length > 0 &&
                    t(e)
                      .next()
                      .addBack()
                      .wrapAll("<div class='carousel-item-wrap' />");
              });
          });
        var x = {};
        t(this).hasClass("products-carousel-shortcode") &&
        e.parent(".elementor-widget-container").length &&
        elementorFrontendConfig
          ? ((x[0] = {
              items: m,
              loop: e.children().length > m,
              stagePadding: 0,
            }),
            (x[elementorFrontendConfig.breakpoints.md] = {
              loop: e.children().length > p,
              items: p,
              stagePadding: 0,
            }),
            (x[elementorFrontendConfig.breakpoints.lg] = {
              loop: e.children().length > h,
              items: h,
            }))
          : (x = {
              0: { items: m, loop: e.children().length > m, stagePadding: 0 },
              481: { loop: e.children().length > f, items: f, stagePadding: 0 },
              769: { loop: e.children().length > p, items: p, stagePadding: 0 },
              992: { loop: e.children().length > u, items: u },
              1199: { loop: e.children().length > h, items: h },
              1450: { loop: e.children().length > c, items: c },
            }),
          e.owlCarousel({
            rtl: g,
            items: c,
            autoHeight: n,
            margin: s,
            stagePadding: C,
            loadedClass: "owl-loaded",
            slideBy: v,
            loop: !0,
            smartSpeed: o,
            responsive: x,
            autoplay: a,
            autoplayTimeout: r,
            nav: l,
            navElement: "a",
            navText: [
              '<i class="' + y + '" ></i>',
              '<i class="' + w + '"></i>',
            ],
            dots: d,
            dotsEach: b,
          }),
          e.hasClass("content-rollover-layout-list") &&
            !e.hasClass("disable-layout-hover") &&
            e.find(".post-entry-wrapper").clickOverlayGradient(),
          dtGlobals.addOnloadEvent(function () {
            !(function (e) {
              if (
                (e.hasClass("refreshed") ||
                  (e.addClass("refreshed"), e.trigger("refresh.owl.carousel")),
                e.hasClass("content-rollover-layout-list") &&
                  !e.hasClass("disable-layout-hover") &&
                  e.find(".post-entry-wrapper").clickOverlayGradient(),
                clearTimeout(_),
                (_ = setTimeout(function () {
                  t(
                    ".dt-owl-item.cloned .animate-element.animation-triggered:not(.start-animation)"
                  ).addClass("start-animation");
                }, 50)),
                "true" === e.attr("data-autoplay"))
              )
                if (dtGlobals.isInViewport(e)) {
                  const t = e.attr("data-autoplay_speed")
                    ? parseInt(e.attr("data-autoplay_speed"))
                    : 6e3;
                  e.trigger("play.owl.autoplay", [t]);
                } else e.trigger("stop.owl.autoplay");
            })(e);
          }),
          e.on("changed.owl.carousel", function (i) {
            t(
              ".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container",
              e
            ).initPhotoswipe(),
              the7Utils.isFunction(t.fn.triggerClonedHoverClick) &&
                t(
                  " .dt-owl-item.cloned .buttons-on-img:not(.rollover-active) .rollover-content",
                  e
                ).triggerClonedHoverClick();
            var s = t(" .dt-owl-item.cloned .post-thumbnail-wrap", e);
            e.hasClass("albums-shortcode") &&
              (e.hasClass("gradient-overlay-layout-list") ||
              e.hasClass("content-rollover-layout-list")
                ? the7Utils.isFunction(t.fn.triggerClonedOverlayAlbumsClick) &&
                  t(
                    " .dt-owl-item.cloned .post-entry-content",
                    e
                  ).triggerClonedOverlayAlbumsClick()
                : the7Utils.isFunction(t.fn.triggerClonedAlbumsClick) &&
                  s.triggerClonedAlbumsClick()),
              e.hasClass("gallery-shortcode") &&
                t(e).initCarouselClonedPhotoswipe();
          }),
          e.on("change.owl.carousel", function (s) {
            clearTimeout(i),
              (i = setTimeout(function () {
                e.layzrCarouselUpdate(),
                  t(".dt-owl-item.cloned .lazy-load", e)
                    .parent()
                    .removeClass("layzr-bg");
              }, 20));
          }),
          e.on("resized.owl.carousel", function (t) {
            e.hasClass("content-rollover-layout-list") &&
              !e.hasClass("disable-layout-hover") &&
              e.find(".post-entry-wrapper").clickOverlayGradient();
          }),
          e.find(".dt-owl-item").on("mouseenter", function (t) {
            a && e.trigger("stop.owl.autoplay");
          }),
          e.find(".dt-owl-item").on("mouseleave", function (t) {
            a && e.trigger("play.owl.autoplay", [r]);
          }),
          e.find(".owl-nav a").on("mouseenter", function (t) {
            a && e.trigger("stop.owl.autoplay");
          }),
          e.find(".owl-nav a").on("mouseleave", function (t) {
            a && e.trigger("play.owl.autoplay", [r]);
          });
      }
    }),
      t(".dt-owl-carousel-call, .related-projects").each(function () {
        t(this).the7OwlCarousel();
      }),
      (t.fn.the7ElementorOwlCarousel = function () {
        var e = t(this);
        if (!e.length || e.hasClass("owl-loaded")) return;
        var i,
          s = "true" === e.attr("data-auto-height"),
          n = e.attr("data-speed") ? parseInt(e.attr("data-speed")) : 600,
          o = "true" === e.attr("data-autoplay"),
          a = e.attr("data-autoplay_speed")
            ? parseInt(e.attr("data-autoplay_speed"))
            : 6e3,
          r = "rtl" == jQuery(document).attr("dir"),
          l =
            "1" == e.attr("data-scroll-mode")
              ? parseInt(e.attr("data-scroll-mode"))
              : "page",
          d =
            (e.attr("data-next-icon") && e.attr("data-next-icon"),
            e.attr("data-prev-icon") && e.attr("data-prev-icon"),
            "1" == e.attr("data-scroll-mode")),
          c = e.next(".owl-nav").find(".owl-prev").html(),
          h = e.next(".owl-nav").find(".owl-next").html();
        const u = e.children().length;
        var p = function () {
            var t = e.find(".dt-owl-item img");
            t.length > 0 && e.css("--dynamic-img-height", t.height() + "px");
          },
          f = function (t) {
            o &&
              (t
                ? e.trigger("play.owl.autoplay", [a])
                : e.trigger("stop.owl.autoplay"));
          },
          m = function () {
            clearTimeout(i),
              (i = setTimeout(function () {
                e.layzrCarouselUpdate();
              }, 20));
          },
          g = function () {
            m(),
              p(),
              e.hasClass("content-rollover-layout-list") &&
                !e.hasClass("disable-layout-hover") &&
                e.find(".post-entry-wrapper").clickOverlayGradient(),
              t(
                ".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container",
                e
              ).initPhotoswipe();
            var i = t(" .dt-owl-item.cloned .post-thumbnail-wrap", e);
            e.hasClass("albums-shortcode") &&
              (e.hasClass("gradient-overlay-layout-list") ||
              e.hasClass("content-rollover-layout-list")
                ? the7Utils.isFunction(t.fn.triggerClonedOverlayAlbumsClick) &&
                  t(
                    " .dt-owl-item.cloned .post-entry-content",
                    e
                  ).triggerClonedOverlayAlbumsClick()
                : the7Utils.isFunction(t.fn.triggerClonedAlbumsClick) &&
                  i.triggerClonedAlbumsClick()),
              e.hasClass("gallery-shortcode") &&
                t(e).initCarouselClonedPhotoswipe();
          };
        e.on("initialized.owl.carousel", function (t) {
          g();
        });
        const v = e.closest(".elementor-widget"),
          w = new The7ElementorSettings(v);
        $spg = new (class {
          constructor(t) {
            (this.config = Object.assign(
              {
                widgetSettingsObj: null,
                columnsKey: "widget_columns",
                gapKey: "gap_between_posts",
                itemsLen: 0,
                the7WideDesktopColKey: "wide_desk_columns",
                the7WideDesktopBreakpointKey:
                  "widget_columns_wide_desktop_breakpoint",
              },
              t
            )),
              (this.switchPoints = {}),
              (this.widgetSettings = {}),
              this.config.widgetSettingsObj &&
                (this.widgetSettings =
                  this.config.widgetSettingsObj.getSettings());
          }
          generateSwitchPointData(t) {
            const e = The7ElementorSettings.getResponsiveControlValue(
                this.widgetSettings,
                this.config.columnsKey,
                "",
                t
              ),
              i = The7ElementorSettings.getResponsiveControlValue(
                this.widgetSettings,
                this.config.gapKey,
                "size",
                t
              );
            return e
              ? {
                  loop: this.config.itemsLen > e,
                  items: e,
                  margin: the7Utils.parseIntParam(i),
                }
              : null;
          }
          getSwitchPoints() {
            return (
              0 === Object.keys(this.switchPoints).length &&
                this.generateSwitchPoints(),
              this.switchPoints
            );
          }
          generateSwitchPoints() {
            if (!this.generateSwitchPointData("desktop")) return;
            const t = elementorFrontend.config.responsive.activeBreakpoints;
            let e = 0;
            for (const [i, s] of Object.entries(t))
              "widescreen" !== i &&
                ((this.switchPoints[e] = this.generateSwitchPointData(i)),
                (e = s.value));
            if (
              ((this.switchPoints[e] = this.generateSwitchPointData("desktop")),
              t.widescreen)
            )
              this.switchPoints[t.widescreen.value] =
                this.generateSwitchPointData("widescreen");
            else {
              const t = this.config.widgetSettingsObj.getSettings(
                this.config.the7WideDesktopColKey
              );
              if (t) {
                const e = this.getThe7WideDesktopBreakpointWidth();
                this.switchPoints[e] = Object.assign(
                  this.generateSwitchPointData("desktop"),
                  { loop: this.config.itemsLen > t, items: t }
                );
              }
            }
          }
          getThe7WideDesktopBreakpointWidth() {
            let t =
              void 0 !== dtLocal.elementor.settings.container_width
                ? dtLocal.elementor.settings.container_width + 1
                : 1450;
            const e = this.config.widgetSettingsObj.getSettings(
              this.config.the7WideDesktopBreakpointKey
            );
            return e && (t = e + 1), t;
          }
        })({
          widgetSettingsObj: w,
          the7WideDesktopColKey: w.getSettings("widget_columns_wide_desktop")
            ? "widget_columns_wide_desktop"
            : "wide_desk_columns",
          itemsLen: u,
        });
        const y = $spg.getSwitchPoints(),
          b = y[Object.keys(y).pop()];
        e.owlCarousel({
          rtl: r,
          items: b.items,
          autoHeight: s,
          margin: b.margin,
          loadedClass: "owl-loaded",
          slideBy: l,
          loop: !0,
          smartSpeed: n,
          autoplay: o,
          autoplayTimeout: a,
          nav: !0,
          responsive: y,
          navElement: "a",
          navText: [c, h],
          dots: !0,
          dotsEach: d,
          autoRefreshInterval: 180,
        }),
          dtGlobals.addOnloadEvent(function () {
            f(dtGlobals.isInViewport(e));
          }),
          e.on("refreshed.owl.carousel", function (t) {
            g();
          }),
          e.on("change.owl.carousel", function (i) {
            "position" === i.property.name &&
              (m(),
              t(
                ".animate-element:not(.start-animation):in-viewport",
                e
              ).checkInViewport());
          }),
          e.on("resized.owl.carousel", function (t) {
            p();
          });
        var C = e.find(".dt-owl-item");
        C.on("mouseenter", function (t) {
          f(!1);
        }),
          C.on("mouseleave", function (t) {
            f(!0);
          });
        var _ = e.find(".owl-nav a");
        _.on("mouseenter", function (t) {
          f(!1);
        }),
          _.on("mouseleave", function (t) {
            f(!0);
          });
      }),
      s.on("elementor/frontend/init", function () {
        var e = 1e3,
          n = e;
        t(
          ".elementor-owl-carousel-call:not(.the7-woocommerce-loop-product-image)"
        ).each(function () {
          var i = this,
            o = t(this),
            a = o.closest(".elementor-widget-container");
          if (a.length) {
            var r = s.height();
            if (s.scrollTop() + r + r > a.offset().top)
              o.the7ElementorOwlCarousel();
            else {
              var l = elementorModules.utils.Scroll.scrollObserver({
                offset: "0% 0% 100%",
                callback: (t) => {
                  t.isInViewport &&
                    (l.unobserve(i), o.the7ElementorOwlCarousel());
                },
              });
              o.addClass("owl-loading"),
                setTimeout(function () {
                  l.unobserve(i), o.the7ElementorOwlCarousel(), (n += 500);
                }, e),
                (e += 500),
                l.observe(i);
            }
          } else o.the7ElementorOwlCarousel();
        });
        i.one("click", 'a[href^="#"]', function (i) {
          if (e !== n) {
            i.preventDefault(),
              i.stopImmediatePropagation(),
              t(
                ".elementor-owl-carousel-call:not(.the7-woocommerce-loop-product-image)"
              ).each(function () {
                t(this).the7ElementorOwlCarousel();
              });
            var s = t(this);
            return (
              setTimeout(function () {
                s.click();
              }, 100),
              !1
            );
          }
        });
      }),
      dtGlobals.isMobile && !dtGlobals.isWindowsPhone
        ? s.bind("orientationchange", function (t) {
            k();
          })
        : dtGlobals.isAndroid &&
          s.bind("debouncedresize", function (t) {
            k();
          }),
      void 0 === d &&
        (d = new Layzr({
          selector: ".owl-thumb-lazy-load-show",
          attr: "data-src",
          attrSrcSet: "data-srcset",
          retinaAttr: "data-src-retina",
          hiddenAttr: "data-src-hidden",
          threshold: 30,
          callback: function () {
            showLazyImg(t(this));
          },
        }));
    var I = t(".top-bar"),
      T = t(".masthead"),
      z = t(".overlay-navigation"),
      L = t(".sticky-header"),
      E = t(".sticky-top-line"),
      P = t("#main-slideshow, .photo-scroller"),
      O =
        (t(".header-side-left").length,
        t(".header-side-right").length,
        t(
          "#main, #main-slideshow, .photo-scroller, .page-title, .fancy-header, .footer"
        ),
        t(
          ".floating-logo.side-header-menu-icon .branding, .side-header-h-stroke, #phantom"
        ),
        t(".side-header")),
      A =
        (t(".page-template-template-microsite").length,
        o.hasClass("transparent")),
      D = t(".floating-navigation-below-slider").exists();
    if (t(".side-header-v-stroke").length > 0)
      O.width(), t(".side-header-v-stroke").width();
    else O.width();
    /*!-Show Hide side header*/
    if (
      ((t.closeSideHeader = function () {
        a.removeClass("show-header"),
          a.addClass("closed-header"),
          t(".sticky-header-overlay").removeClass("active");
      }),
      (t.closeMobileHeader = function () {
        a.removeClass("show-mobile-header"),
          a.addClass("closed-mobile-header"),
          o
            .removeClass("show-sticky-mobile-header show-overlay-mobile-header")
            .addClass("closed-overlay-mobile-header"),
          t(
            ".mobile-sticky-header-overlay, .dt-mobile-menu-icon, .menu-toggle, .menu-close-toggle"
          ).removeClass("active");
      }),
      L.length > 0 || z.length > 0)
    ) {
      t(
        '<div class="lines-button x"><span class="menu-line"></span><span class="menu-line"></span><span class="menu-line"></span></div>'
      ).appendTo(".menu-toggle");
      var M = dtLocal.themeSettings.ToggleCaptionEnabled;
      (ToggleCaption =
        "disabled" != M
          ? "<span class='menu-toggle-caption'>" +
            dtLocal.themeSettings.ToggleCaption +
            "</span>"
          : ""),
        L.length > 0 && o.append('<div class="sticky-header-overlay"></div>');
      var H = t(".menu-toggle"),
        F = t(".menu-close-toggle"),
        W = t(".menu-toggle:not(.active), .menu-close-toggle:not(.active)"),
        B = t(".sticky-header-overlay");
      H.on("click", function () {
        if (!t(".header-under-side-line").length > 0)
          var e = t(".side-header .menu-toggle");
        else e = t(".menu-toggle");
        e.hasClass("active")
          ? (e.removeClass("active"),
            a.removeClass("show-header").addClass("closed-header"),
            B.removeClass("active"),
            t(".hide-overlay").removeClass("active"))
          : (W.removeClass("active"),
            e.addClass("active").css({ left: "", right: "" }),
            a.addClass("show-header").removeClass("closed-header"),
            F.addClass("active"),
            B.addClass("active"),
            t(".hide-overlay").addClass("active"));
      }),
        F.on("click", function () {
          var e = t(this);
          e.hasClass("active")
            ? (e.removeClass("active"),
              a.removeClass("show-header").addClass("closed-header"),
              B.removeClass("active"),
              t(".hide-overlay").removeClass("active"))
            : (W.removeClass("active"),
              e.addClass("active").css({ left: "", right: "" }),
              a.addClass("show-header").removeClass("closed-header"),
              B.addClass("active"),
              t(".hide-overlay").addClass("active"));
        }),
        B.on("click", function () {
          t(this).hasClass("active") &&
            (W.removeClass("active"),
            a.removeClass("show-header").addClass("closed-header"),
            B.removeClass("active"));
        }),
        t(".hide-overlay").on("click", function () {
          t(this).hasClass("active") &&
            (W.removeClass("active"),
            a.removeClass("show-header"),
            a.addClass("closed-header"),
            B.removeClass("active"));
        });
    }
    function R() {
      var e = s.width(),
        i = "",
        n = t(".side-header-menu-icon").length > 0;
      if (
        ((e - a.innerWidth()) / 2 > 0 && (i = (e - a.innerWidth()) / 2),
        o.hasClass("header-side-right") &&
          a.hasClass("boxed") &&
          !L.length > 0 &&
          O.css({ right: i }),
        navigator.userAgent.match(/Trident.*rv\:11\./) && D && A)
      ) {
        T.insertAfter(P);
        var r = T.attr("style");
        T.not(".sticky-on").attr(
          "style",
          r + "; top:" + P.height() + "px !important;"
        );
      }
      var l = t(".floating-menu-icon-right");
      l.length > 0 &&
        a.hasClass("boxed") &&
        (W.css({ right: i }), t(".branding").css({ left: i })),
        a.hasClass("boxed") &&
          n &&
          !l.length > 0 &&
          (t(".floating-logo .branding").css({ right: i }), W.css({ left: i })),
        z.length > 0 &&
          n &&
          a.hasClass("boxed") &&
          (W.css({ right: i }), t(".floating-logo .branding").css({ left: i }));
    }
    if (
      (R(),
      s.on("the7-resize-width-debounce", function () {
        R();
      }),
      D && o.hasClass("footer-overlap") && T.insertAfter(P),
      navigator.userAgent.match(/Trident.*rv\:11\./) && D && A)
    ) {
      T.insertAfter(P);
      var j = T.attr("style");
      T.attr("style", j + "; top:" + P.height() + "px !important;");
    }
    var $ = T;
    if (
      (t(".mixed-header").length > 0 && ($ = t(".mixed-header")),
      t(".side-header .header-bar").wrap(
        "<div class='header-scrollbar-wrap'></div>"
      ),
      O.length > 0 &&
        "function" == typeof t.fn.mCustomScrollbar &&
        !dtGlobals.isMobile &&
        (t(".header-scrollbar-wrap").mCustomScrollbar({
          scrollInertia: 150,
          callbacks: {
            whileScrolling: function () {
              t(".header-scrollbar-wrap").layzrInitialisation();
            },
          },
        }),
        t(".sub-downwards .main-nav")
          .find(".slider-content")
          .widgetScroller()
          .css("visibility", "visible")),
      O.length > 0 &&
        !t(".mCSB_container").length > 0 &&
        t(".side-header .header-scrollbar-wrap .header-bar").wrap(
          "<div class='mCSB_container'></div>"
        ),
      !o.hasClass("responsive-off"))
    ) {
      var G = t(".mixed-header"),
        Y = t(".masthead .near-logo-first-switch")
          .clone(!0)
          .addClass("show-on-first-switch"),
        N = t(".masthead .near-logo-second-switch")
          .clone(!0)
          .addClass("show-on-second-switch"),
        q = T.find(".in-menu-first-switch")
          .clone(!0)
          .addClass(
            "hide-on-desktop hide-on-second-switch show-on-first-switch"
          ),
        U = T.find(".in-menu-second-switch")
          .clone(!0)
          .addClass(
            "hide-on-desktop hide-on-first-switch show-on-second-switch"
          ),
        V = T.find(".in-top-bar")
          .clone(!0)
          .addClass(
            "hide-on-desktop hide-on-first-switch show-on-second-switch"
          ),
        X = T.find(".in-top-bar-left")
          .clone(!0)
          .addClass("hide-on-desktop show-on-first-switch"),
        Z = T.find(".in-top-bar-right")
          .clone(!0)
          .addClass("hide-on-desktop  show-on-first-switch");
      if (G.length > 0) {
        var Q = G.find(".branding > a, .branding > img").clone(!0);
        $ = G;
      } else
        (Q = t(".masthead:not(.mixed-header)")
          .find(".branding > a, .branding > img")
          .clone(!0)),
          ($ = T);
      if (I.length > 0 && "none" != I.css("display")) var K = I.innerHeight();
      else K = 0;
      var J = dtLocal.themeSettings.mobileHeader.mobileToggleCaptionEnabled;
      (mobileToggleCaption =
        "disabled" != J
          ? "<span class='menu-toggle-caption'>" +
            dtLocal.themeSettings.mobileHeader.mobileToggleCaption +
            "</span>"
          : ""),
        t(
          "<div class='mobile-header-bar'><div class='mobile-navigation'></div><div class='mobile-mini-widgets'></div><div class='mobile-branding'></div></div>"
        ).appendTo(".masthead"),
        t(".mobile-header-bar .mobile-navigation").append(
          "<a href='#' class='dt-mobile-menu-icon' aria-label='Mobile menu icon'>" +
            mobileToggleCaption +
            "<div class='lines-button '><span class='menu-line'></span><span class='menu-line'></span><span class='menu-line'></span></div></a>"
        ),
        t(Y).appendTo(".mobile-header-bar .mobile-mini-widgets"),
        t(N).appendTo(".mobile-header-bar .mobile-mini-widgets"),
        t(".left-widgets", I).append(V),
        t(".left-widgets", I).append(X),
        t(".right-widgets", I)
          .append(Z)
          .removeClass(
            "select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"
          ),
        t(".right-widgets", I)
          .append(Z)
          .removeClass(
            "select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"
          ),
        t(q).appendTo(".mobile-mini-widgets-in-menu"),
        t(U).appendTo(".mobile-mini-widgets-in-menu"),
        q.removeClass(
          "select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"
        ),
        U.removeClass(
          "select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch"
        ),
        t(".mobile-header-bar .mobile-branding").append(Q);
      var tt = t(".dt-mobile-header");
      /*!-Show Hide mobile header*/
      if (
        (tt.siblings().hasClass("dt-parent-menu-clickable") &&
          tt.addClass("dt-parent-menu-clickable"),
        !t(".mobile-mini-widgets-in-menu").find(".in-menu-first-switch ")
          .length > 0 &&
          t(".mobile-mini-widgets-in-menu").addClass("first-switch-no-widgets"),
        !t(".mobile-mini-widgets-in-menu").find(".in-menu-second-switch ")
          .length > 0 &&
          t(".mobile-mini-widgets-in-menu").addClass(
            "second-switch-no-widgets"
          ),
        Y.removeClass(
          "select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"
        ),
        N.removeClass(
          "select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch"
        ),
        V.removeClass(
          "show-on-desktop select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch in-top-bar-left"
        ).addClass("hide-on-desktop hide-on-first-switch"),
        X.removeClass(
          "show-on-desktop select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch in-top-bar"
        ).addClass("hide-on-desktop hide-on-second-switch"),
        Z.removeClass(
          "show-on-desktop select-type-menu list-type-menu  select-type-menu-second-switch list-type-menu-second-switch"
        ).addClass("hide-on-desktop"),
        t(".header-bar .mini-widgets > .mini-nav ").removeClass(
          "select-type-menu-second-switch list-type-menu-second-switch select-type-menu-first-switch list-type-menu-first-switch"
        ),
        t(
          ".mini-nav.show-on-desktop:not(.show-on-first-switch):not(.show-on-second-switch)",
          I
        ).removeClass(
          "select-type-menu-second-switch list-type-menu-second-switch select-type-menu-first-switch list-type-menu-first-switch"
        ),
        t(".masthead .hide-on-desktop").addClass("display-none"),
        t(".mobile-main-nav ")
          .find("li")
          .each(function () {
            var e = t(this),
              i = e.find(" > .dt-mega-menu-wrap > .sub-nav");
            if (e.hasClass("new-column")) {
              var s = e.prev().find(" > .sub-nav");
              t(" > .sub-nav > *", e).appendTo(s);
            }
            i.unwrap();
          })
          .removeClass("dt-mega-menu dt-mega-parent hide-mega-title")
          .find(" > .sub-nav")
          .removeClass(" hover-style-bg"),
        tt.length > 0)
      ) {
        dtGlobals.mobileMenuPoint = 50;
        var et = t(".dt-mobile-menu-icon"),
          it = !1,
          st = $.offset().top;
        if (
          !t(".floating-btn").length > 0 &&
          t(".floating-mobile-menu-icon").length > 0
        )
          et.first().clone(!0).insertBefore(et).addClass("floating-btn");
        var nt = t(".floating-btn");
        s.scroll(function () {
          (dtGlobals.mobileMenuPoint = st + $.height() + 50),
            dtGlobals.winScrollTop > dtGlobals.mobileMenuPoint && !1 === it
              ? (nt.parents(".masthead").addClass("show-floating-icon"),
                (it = !0))
              : dtGlobals.winScrollTop <= dtGlobals.mobileMenuPoint &&
                !0 === it &&
                (nt.parents(".masthead").removeClass("show-floating-icon"),
                (it = !1));
        });
        et = t(".dt-mobile-menu-icon");
        !t(".mobile-sticky-header-overlay").length > 0 &&
          o.append('<div class="mobile-sticky-header-overlay"></div>');
        var ot = t(".mobile-sticky-header-overlay");
        et.on("click", function (e) {
          e.preventDefault();
          var i = t(this);
          i.hasClass("active")
            ? (i.removeClass("active"),
              a
                .removeClass("show-mobile-header")
                .addClass("closed-mobile-header"),
              o
                .removeClass("show-mobile-overlay-header")
                .addClass("closed-overlay-mobile-header"),
              i.parents("body").removeClass("show-sticky-mobile-header"),
              ot.removeClass("active"))
            : (et.removeClass("active"),
              i.addClass("active"),
              a
                .addClass("show-mobile-header")
                .removeClass("closed-mobile-header"),
              o
                .removeClass("closed-overlay-mobile-header")
                .addClass("show-overlay-mobile-header"),
              ot.removeClass("active"),
              i.parents("body").addClass("show-sticky-mobile-header"),
              ot.addClass("active"));
        }),
          ot.on("click", function () {
            t(this).hasClass("active") &&
              (et.removeClass("active"),
              a
                .removeClass("show-mobile-header")
                .addClass("closed-mobile-header"),
              o
                .removeClass("show-sticky-mobile-header")
                .addClass("closed-overlay-mobile-header")
                .addClass("closed-overlay-mobile-header"),
              ot.removeClass("active"),
              a.removeClass("show-mobile-sidebar"));
          }),
          t(".dt-close-mobile-menu-icon").on("click", function () {
            a.removeClass("show-mobile-header"),
              a.addClass("closed-mobile-header"),
              o.removeClass("show-sticky-mobile-header"),
              o
                .removeClass("show-overlay-mobile-header")
                .addClass("closed-overlay-mobile-header"),
              ot.removeClass("active"),
              et.removeClass("active");
          }),
          t(".dt-mobile-header").wrapInner(
            "<div class='mobile-header-scrollbar-wrap'></div>"
          ),
          t(".mobile-header-scrollbar-wrap").layzrInitialisation(),
          tt
            .find(".slider-content")
            .widgetScroller()
            .css("visibility", "visible"),
          !t(".touchevents").length > 0 &&
            (tt.on("mouseenter", function (t) {
              tt.css("overflow-y", "auto");
            }),
            tt.on("mouseleave", function (t) {
              tt.css("overflow-y", "hidden");
            }));
      }
    }
    t(".l-to-r-line > li:not(.menu-item-language) > a > span:last-child")
      .not(".l-to-r-line > li > a > span.mega-icon")
      .append("<i class='underline'></i>"),
      t(".not-clickable-item").on("click", function (t) {
        t.preventDefault(), t.stopPropagation();
      }),
      (t(".active-line-decoration").length > 0 ||
        t(".hover-line-decoration").length > 0) &&
        t(".main-nav > .menu-item > a").append(
          "<span class='decoration-line'></span>"
        );
    var at = t(
        ".main-nav, .mini-nav, .mini-wpml .wpml-ls-item-legacy-dropdown"
      ),
      rt = t(
        ".masthead:not(.sub-downwards) .main-nav, .mini-nav, .mini-wpml .wpml-ls-item-legacy-dropdown"
      ),
      lt = t(".main-nav");
    O = t(".side-header");
    t(".menu-item-language").each(function () {
      var e = t(this);
      e.children(".submenu-languages").length > 0 && e.addClass("has-children");
    });
    lt.clone(), t(".mini-nav").clone();
    t(".mini-nav select").change(function () {
      window.location.href = t(this).val();
    }),
      (dtGlobals.isHovering = !1),
      t(".main-nav li", O).each(function () {
        var e = t(this);
        if (e.hasClass("new-column")) {
          var i = e.prev().find(" > .sub-nav");
          t(" > .sub-nav > *", e).appendTo(i);
        }
      }),
      t(".sub-downwards .main-nav > li").each(function () {
        t(this).find(" > .dt-mega-menu-wrap > .sub-nav").unwrap();
      });
    var dt,
      ct,
      ht = t(
        ".select-type-menu, .select-type-menu-first-switch, .select-type-menu-second-switch, .mini-wpml .wpml-ls-item-legacy-dropdown"
      ),
      ut = "mini-sub-nav";
    ht.find("> ul").addClass(ut),
      t(".mini-wpml .wpml-ls-item-legacy-dropdown").find("> ul").addClass(ut),
      rt.each(function () {
        var e = t(this);
        t(".act", e).parents("li").addClass("act"),
          t(" li.has-children ", e).each(function () {
            var e,
              i,
              n = t(this),
              r = n.find("> a");
            if (
              n.parent().hasClass("main-nav") &&
              !n.parents().hasClass("side-header") &&
              t(".masthead").hasClass("show-sub-menu-on-hover")
            )
              r = n.find("> a");
            else if (
              n.parent().hasClass("main-nav") &&
              n.parents().hasClass("side-header") &&
              t(".masthead").hasClass("show-sub-menu-on-hover")
            )
              r = n;
            else if (
              (n.parent().hasClass("sub-nav") ||
                n.parents().hasClass("mini-nav")) &&
              t(".masthead").hasClass("show-sub-menu-on-hover")
            )
              r = n;
            if (
              ((dtGlobals.isMobile || dtGlobals.isWindowsPhone) &&
                n.find("> a").on("click", function (e) {
                  t(this).hasClass("dt-clicked")
                    ? e.stopPropagation()
                    : (e.preventDefault(),
                      at.find(".dt-clicked").removeClass("dt-clicked"),
                      t(this).addClass("dt-clicked"));
                }),
              at.parents().hasClass("full-width") &&
                n.hasClass("mega-full-width"))
            ) {
              if (at.parents(".header-bar").length > 0)
                var l = at.parents(".header-bar").innerWidth();
              else l = at.parents(".ph-wrap").innerWidth();
              !O.length > 0 && n.find(".sub-nav-widgets").css({ width: l });
            }
            function d(n) {
              if (n.parent("li").length > 0)
                var o = n.parent(),
                  r = n.siblings("div.dt-mega-menu-wrap, ul");
              else
                (o = n),
                  (r = (d = n.find("> a")).siblings(
                    "div.dt-mega-menu-wrap, ul"
                  ));
              var l = n.offset().left,
                d = n.offset().left,
                c = n.parents(".masthead");
              if (
                (o.addClass("dt-hovered"),
                o.hasClass("dt-mega-menu") && o.addClass("show-mega-menu"),
                (dtGlobals.isHovering = !0),
                r.length > 0 &&
                  (a.width() - (r.offset().left - a.offset().left) - r.width() <
                    0 && r.addClass("right-overflow"),
                  s.height() -
                    (r.offset().top - dtGlobals.winScrollTop) -
                    r.innerHeight() <
                    0 &&
                    !r.parents().hasClass("sub-sideways") &&
                    r.addClass("bottom-overflow"),
                  s.height() -
                    (r.offset().top - dtGlobals.winScrollTop) -
                    r.innerHeight() <
                    0 &&
                    !o.hasClass("dt-mega-menu") &&
                    r.addClass("bottom-overflow")),
                (o.find(".dt-mega-menu-wrap").length > 0 &&
                  o.find(".dt-mega-menu-wrap").offset().top +
                    o.find(".dt-mega-menu-wrap").innerHeight()) > s.height() &&
                  r.parents().hasClass("sub-sideways") &&
                  o.hasClass("dt-mega-menu") &&
                  (n.find(".dt-mega-menu-wrap").height() <= s.height()
                    ? o
                        .find(".dt-mega-menu-wrap")
                        .css({
                          top: -(
                            o.position().top +
                            o.height() +
                            n.find(".dt-mega-menu-wrap").height() -
                            s.height()
                          ),
                        })
                    : o
                        .find(".dt-mega-menu-wrap")
                        .css({ top: -(n.position().top - 5) })),
                !O.length > 0 && r.not(".right-overflow").css({ left: d - l }),
                n.parents(".dt-mobile-header").length > 0 &&
                  r.css({ top: n.position().top - 13 - r.height() }),
                o.hasClass("mega-auto-width"))
              ) {
                o.width();
                var h = c.offset().left,
                  u = o.offset().left;
                if ((($_this_parents_ofs = o.offset().left - h), !O.length)) {
                  var p = a.width();
                  if (t(".boxed").length > 0) {
                    u = o.position().left;
                    r.innerWidth() > p - o.position().left &&
                      r.css({ left: -(r.innerWidth() - (p - u) + 20) });
                  } else {
                    u = o.offset().left;
                    r.innerWidth() > p - o.offset().left &&
                      r.css({ left: -(r.innerWidth() - (p - u) + 20) });
                  }
                  r.innerWidth() > p &&
                    (t(".boxed").length > 0
                      ? r.css({
                          width: c.width() - 40,
                          left: -(o.position().left + 20),
                        })
                      : r.css({ width: c.width() - 40, left: -(u - h + 20) }));
                }
                null != typeof r.find(".slider-content") &&
                  r
                    .find(".slider-content")
                    .widgetScroller()
                    .css("visibility", "visible"),
                  r.layzrInitialisation();
              }
              if (o.hasClass("mega-full-width")) {
                u = o.offset().left;
                if (n.parents(".header-bar").length > 0)
                  if (n.parents(".masthead").hasClass("full-width")) {
                    var f = n.parents(".header-bar").innerWidth() - 40;
                    h = n.parents(".header-bar").offset().left + 20;
                  } else
                    (f = n.parents(".header-bar").innerWidth()),
                      (h = n.parents(".header-bar").offset().left);
                else if (n.parents(".masthead").hasClass("full-width"))
                  (f = n.parents(".ph-wrap").innerWidth() - 40),
                    (h = n.parents(".ph-wrap").offset().left + 20);
                else
                  (f = n.parents(".ph-wrap").innerWidth()),
                    (h = n.parents(".ph-wrap").offset().left);
                !O.length > 0 && r.css({ width: f, left: -(u - h) }),
                  null != typeof r.find(".slider-content") &&
                    r
                      .find(".slider-content")
                      .widgetScroller()
                      .css("visibility", "visible"),
                  r.layzrInitialisation();
              }
              clearTimeout(e),
                clearTimeout(i),
                (e = setTimeout(function () {
                  o.hasClass("dt-hovered") &&
                    (r
                      .stop()
                      .css("visibility", "visible")
                      .animate({ opacity: 1 }, 150, function () {
                        o.addClass("show-mega-menu-content");
                      }),
                    t(".searchform .submit", le).removeClass("act"),
                    t(".mini-search").removeClass("act"),
                    t(".mini-search.popup-search .popup-search-wrap", le)
                      .stop()
                      .animate({ opacity: 0 }, 150, function () {
                        t(this).css("visibility", "hidden");
                      }));
                }, 100));
            }
            function c(s) {
              var n = s.find("> a").siblings("div.dt-mega-menu-wrap, ul");
              s.removeClass("dt-hovered"),
                (dtGlobals.isHovering = !1),
                clearTimeout(e),
                clearTimeout(i),
                (i = setTimeout(function () {
                  s.hasClass("dt-hovered") ||
                    (n.stop().animate({ opacity: 0 }, 150, function () {
                      t(this).css("visibility", "hidden");
                    }),
                    s.removeClass("show-mega-menu"),
                    s.removeClass("show-mega-menu-content"),
                    setTimeout(function () {
                      s.hasClass("dt-hovered") ||
                        (n.removeClass("right-overflow"),
                        n.removeClass("bottom-overflow"),
                        s.find(".dt-mega-menu-wrap").css({ top: "" }),
                        s.hasClass("mega-auto-width") &&
                          n.css({ width: "", left: "" }));
                    }, 400));
                }, 150)),
                s.find("> a").removeClass("dt-clicked");
            }
            n.find("> a").on("focus", function (e) {
              "tap" == e.type && e.stopPropagation();
              var i = t(this);
              d(i),
                t(" li.has-children").removeClass("parent-clicked"),
                i.parent().addClass("parent-clicked"),
                t(e.target).parents().hasClass("sub-nav") ||
                  (t(" li.has-children").removeClass("dt-hovered"),
                  i.parent().addClass("dt-hovered")),
                t(
                  ".main-nav > li:not(.dt-hovered) > .sub-nav, .main-nav >  li:not(.dt-hovered) > .dt-mega-menu-wrap"
                )
                  .stop()
                  .animate({ opacity: 0 }, 150, function () {
                    t(this).css("visibility", "hidden");
                  }),
                t(" .main-nav .sub-nav li:not(.parent-clicked) .sub-nav")
                  .stop()
                  .animate({ opacity: 0 }, 150, function () {
                    t(this).css("visibility", "hidden");
                  });
            }),
              n.find("> a").on("focusout", function (s) {
                var n = t(this),
                  o = t("this").siblings("div.dt-mega-menu-wrap, ul");
                (dtGlobals.isHovering = !1),
                  clearTimeout(e),
                  clearTimeout(i),
                  (i = setTimeout(function () {
                    n.parent().hasClass("dt-hovered") ||
                      (o.stop().animate({ opacity: 0 }, 150, function () {
                        t(this).css("visibility", "hidden");
                      }),
                      n.parent().removeClass("show-mega-menu"),
                      n.parent().removeClass("show-mega-menu-content"),
                      setTimeout(function () {
                        n.parent().hasClass("dt-hovered") ||
                          (o.removeClass("right-overflow"),
                          o.removeClass("bottom-overflow"),
                          n
                            .parent()
                            .find(".dt-mega-menu-wrap")
                            .css({ top: "" }),
                          n.parent().hasClass("mega-auto-width") &&
                            o.css({ width: "", left: "" }));
                      }, 400));
                  }, 150)),
                  n.parent().removeClass("parent-clicked");
              }),
              t(".masthead").hasClass("show-sub-menu-on-hover")
                ? (r.on("mouseenter tap", function (e) {
                    "tap" == e.type && e.stopPropagation(), d(t(this));
                  }),
                  n.on("mouseleave", function (e) {
                    c(t(this));
                  }))
                : (o.on("click", function (e) {
                    (t(e.target).hasClass("sub-nav") &&
                      t(e.target).hasClass("dt-mega-menu-wrap")) ||
                      (t(
                        " #primary-menu li.dt-hovered:not(.dt-mega-menu) > .sub-nav"
                      ).animate({ opacity: 0 }, 100, function () {
                        t(this).css("visibility", "hidden");
                      }),
                      t(" #primary-menu li.dt-mega-menu > .is-clicked")
                        .siblings(" .dt-mega-menu-wrap")
                        .animate({ opacity: 0 }, 100, function () {
                          t(this).css("visibility", "hidden");
                        }),
                      t("#primary-menu  li.has-children").removeClass(
                        "dt-hovered"
                      ),
                      t("#primary-menu  li.has-children > a").removeClass(
                        "is-clicked"
                      ));
                  }),
                  r.on("click", function (e) {
                    if (!t(this).parents().hasClass("mobile-main-nav")) {
                      "tap" == e.type && e.stopPropagation();
                      var i = t(this),
                        s = i.parent("li");
                      if (!i.hasClass("is-clicked"))
                        return (
                          d(i),
                          t(" li.has-children > a").removeClass("is-clicked"),
                          t(" li.has-children").removeClass("parent-clicked"),
                          i.parent().addClass("parent-clicked"),
                          t(e.target).parents().hasClass("sub-nav") ||
                            (t(" li.has-children").removeClass("dt-hovered"),
                            i.parent().addClass("dt-hovered")),
                          t(
                            ".main-nav > li:not(.dt-hovered) > .sub-nav, .main-nav >  li:not(.dt-hovered) > .dt-mega-menu-wrap"
                          )
                            .stop()
                            .animate({ opacity: 0 }, 150, function () {
                              t(this).css("visibility", "hidden");
                            }),
                          t(
                            ".main-nav .sub-nav li:not(.parent-clicked) .sub-nav"
                          )
                            .stop()
                            .animate({ opacity: 0 }, 150, function () {
                              t(this).css("visibility", "hidden");
                            }),
                          i.addClass("is-clicked"),
                          !1
                        );
                      c(s),
                        i.removeClass("is-clicked"),
                        i.parent().removeClass("parent-clicked");
                    }
                  }));
          });
      }),
      (t.fn.touchMenuItem = function () {
        return this.each(function () {
          var e = t(this);
          if (!e.hasClass("item-ready")) {
            o.on("touchend", function (e) {
              t(".mobile-true .has-children > a").removeClass("is-clicked");
            });
            var i = t(this),
              s = i.attr("target") ? i.attr("target") : "_self";
            i.on("touchstart", function (t) {
              (origY = t.originalEvent.touches[0].pageY),
                (origX = t.originalEvent.touches[0].pageX);
            }),
              i.on("touchend", function (e) {
                var n = e.originalEvent.changedTouches[0].pageX,
                  o = e.originalEvent.changedTouches[0].pageY;
                if (origY == o || origX == n)
                  if (i.hasClass("is-clicked"));
                  else if (i.parent().hasClass("dt-hovered"))
                    return (
                      e.preventDefault(),
                      t(".mobile-true .has-children > a").removeClass(
                        "is-clicked"
                      ),
                      i.addClass("is-clicked"),
                      window.open(i.attr("href"), s),
                      !1
                    );
              }),
              e.addClass("item-ready");
          }
        });
      }),
      t(".mobile-true .main-nav .has-children > a").touchMenuItem(),
      ht.on("mouseenter tap", function (e) {
        "tap" == e.type && e.stopPropagation();
        var i = t(this);
        i.addClass("dt-hovered"),
          a.width() -
            (i.children(".mini-sub-nav").offset().left - a.offset().left) -
            i.find(" > .mini-sub-nav").width() <
            0 && i.children(".mini-sub-nav").addClass("right-overflow"),
          s.height() -
            (i.children(".mini-sub-nav").offset().top -
              dtGlobals.winScrollTop) -
            i.children(".mini-sub-nav").height() <
            0 &&
            !i.parents(".dt-mobile-header").length > 0 &&
            i.children(".mini-sub-nav").addClass("bottom-overflow"),
          i.parents(".dt-mobile-header").length > 0 &&
            i
              .children(".mini-sub-nav")
              .css({
                top:
                  i.position().top - 13 - i.children(".mini-sub-nav").height(),
              }),
          (dtGlobals.isHovering = !0),
          clearTimeout(dt),
          clearTimeout(ct),
          (dt = setTimeout(function () {
            i.hasClass("dt-hovered") &&
              (t(".mini-sub-nav")
                .stop()
                .animate({ opacity: 0 }, 50, function () {
                  t(this).css("visibility", "hidden");
                }),
              i
                .children(".mini-sub-nav")
                .stop()
                .css("visibility", "visible")
                .animate({ opacity: 1 }, 150));
          }, 100));
      }),
      ht.on("mouseleave", function (e) {
        var i = t(this);
        i.removeClass("dt-hovered"),
          (dtGlobals.isHovering = !1),
          clearTimeout(dt),
          clearTimeout(ct),
          (ct = setTimeout(function () {
            i.hasClass("dt-hovered") ||
              (i.parents().hasClass("dt-mega-menu") ||
                i
                  .children(".mini-sub-nav")
                  .stop()
                  .animate({ opacity: 0 }, 150, function () {
                    t(this).css("visibility", "hidden");
                  }),
              setTimeout(function () {
                i.hasClass("dt-hovered") ||
                  (i.children(".mini-sub-nav").removeClass("right-overflow"),
                  i.children(".mini-sub-nav").removeClass("bottom-overflow"));
              }, 400));
          }, 150));
      }),
      (dtGlobals.desktopProcessed = !1),
      (dtGlobals.mobileProcessed = !1);
    var pt = t(".sticky-mobile-header").exists();
    window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
      !o.hasClass("responsive-off") &&
      (t(".masthead:not(.side-header):not(#phantom)").addClass(
        "masthead-mobile-header"
      ),
      t(
        "body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
      )
        .addClass("masthead-mobile-header")
        .addClass("desktop-side-header")),
      window.innerWidth <=
        dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
      window.innerWidth >
        dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
      !o.hasClass("responsive-off")
        ? t(".left-widgets", I).find(".in-top-bar-left").length > 0 ||
          t(".right-widgets", I).find(".in-top-bar-right").length > 0
          ? I.removeClass("top-bar-empty")
          : I.addClass("top-bar-empty")
        : window.innerWidth <=
            dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
          !o.hasClass("responsive-off")
        ? t(".left-widgets", I).find(".in-top-bar").length > 0
          ? I.removeClass("top-bar-empty")
          : I.addClass("top-bar-empty")
        : !t(".mini-widgets", I).find(".show-on-desktop").length > 0
        ? I.addClass("top-bar-empty")
        : I.removeClass("top-bar-empty");
    var ft = t(".floating-navigation-below-slider").exists();
    if (t(".sticky-mobile-header").exists() && !o.hasClass("responsive-off")) {
      var mt = t(
          ".masthead:not(.side-header):not(#phantom), body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
        ),
        gt = mt.find(".mobile-header-bar");
      ($stickyMobileLogo = mt.find(".mobile-branding")),
        (mobileLogoURL = t(".mobile-branding a").attr("href")),
        t(".sticky-mobile-logo-first-switch").exists() ||
          (dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html &&
            (null == mobileLogoURL
              ? t(dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html)
                  .addClass("sticky-mobile-logo-first-switch")
                  .prependTo($stickyMobileLogo)
              : t(
                  '<a class="sticky-mobile-logo-first-switch" href="' +
                    mobileLogoURL +
                    '">' +
                    dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo
                      .html +
                    " </a>"
                ).prependTo($stickyMobileLogo))),
        t(".sticky-mobile-logo-second-switch").exists() ||
          (dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html &&
            (null == mobileLogoURL
              ? t(
                  dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html
                )
                  .addClass("sticky-mobile-logo-second-switch")
                  .prependTo($stickyMobileLogo)
              : t(
                  '<a class="sticky-mobile-logo-second-switch" href="' +
                    mobileLogoURL +
                    '">' +
                    dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo
                      .html +
                    " </a>"
                ).prependTo($stickyMobileLogo)));
      var vt = 0,
        wt = 0,
        yt = P.height(),
        bt = 0,
        Ct = 0,
        _t = !1;
      if (!A) {
        t("<div class='mobile-header-space'></div>").insertBefore(mt);
        var xt = t(".mobile-header-space");
      }
      t(".no-cssgridlegacy.no-cssgrid").length > 0 &&
        ft &&
        (A
          ? (mt.css({ top: yt }), xt.css({ top: yt }))
          : (xt.insertAfter(P), mt.insertAfter(P))),
        (dtGlobals.resetMobileSizes = function (e) {
          if (
            window.innerWidth >
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint
          )
            return (
              t(".is-safari").length > 0 &&
                mt.css({ width: "", "max-width": "" }),
              mt.removeClass("sticky-mobile-off sticky-mobile-on"),
              (_t = !1),
              !1
            );
          (wt =
            t("#wpadminbar").exists() &&
            !Modernizr.mq("only screen and (max-width:600px)")
              ? t("#wpadminbar").height()
              : 0),
            window.innerWidth <=
              dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
            window.innerWidth >
              dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
            !o.hasClass("responsive-off")
              ? t(".left-widgets", I).find(".in-top-bar-left").length > 0 ||
                t(".top-bar .right-widgets").find(".in-top-bar-right").length >
                  0
                ? I.removeClass("top-bar-empty")
                : I.addClass("top-bar-empty")
              : t(".left-widgets", I).find(".in-top-bar").length > 0
              ? I.removeClass("top-bar-empty")
              : I.addClass("top-bar-empty"),
            (vt =
              !I.exists() ||
              I.is(":hidden") ||
              I.hasClass("top-bar-empty") ||
              I.hasClass("hide-top-bar")
                ? 0
                : I.innerHeight()),
            window.innerWidth <
              dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
            window.innerWidth >
              dtLocal.themeSettings.mobileHeader.secondSwitchPoint
              ? ((bt =
                  dtLocal.themeSettings.mobileHeader.firstSwitchPointHeight +
                  vt),
                dtLocal.themeSettings.mobileHeader.firstSwitchPointHeight)
              : ((bt =
                  dtLocal.themeSettings.mobileHeader.secondSwitchPointHeight +
                  vt),
                dtLocal.themeSettings.mobileHeader.secondSwitchPointHeight),
            ft
              ? ft && !A
                ? (Ct = e)
                : ft && A
                ? (Ct = e - bt + vt)
                : gt.offset().top
              : (Ct = vt),
            mt.hasClass("sticky-mobile-on") && mt.css({ top: wt - vt }),
            A || (xt.css({ height: bt }), xt.css({ top: e })),
            t(".is-safari").length > 0 &&
              mt.css({
                width: document.documentElement.clientWidth,
                "max-width": document.documentElement.clientWidth,
              });
        }),
        dtGlobals.resetMobileSizes(P.height()),
        s.on("resize debouncedresize", function () {
          dtGlobals.resetMobileSizes(P.height());
        }),
        s.on("scroll", function () {
          if (
            window.innerWidth >
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint
          )
            return !1;
          var e = dtGlobals.winScrollTop;
          e > Ct && !_t && t(document).height() > t(window).height()
            ? (mt.removeClass("sticky-mobile-off").addClass("sticky-mobile-on"),
              D && pt && mt.addClass("fixed-mobile-header"),
              mt.css({ top: wt - vt }),
              (_t = !0))
            : e <= Ct &&
              _t &&
              (mt.removeClass("sticky-mobile-on").addClass("sticky-mobile-off"),
              D && pt && mt.removeClass("fixed-mobile-header"),
              mt.css({ top: 0 }),
              t(".no-cssgridlegacy.no-cssgrid").length > 0 &&
                ft &&
                mt.css({ top: yt }),
              (_t = !1));
        });
    }
    dtGlobals.isMobile &&
      window.innerWidth <=
        dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
      !dtGlobals.isiPad &&
      !o.hasClass("responsive-off") &&
      (dtLocal.themeSettings.floatingHeader.showMenu &&
        t(".phantom-sticky").exists() &&
        A &&
        T.addClass("fixed-masthead"),
      (dtLocal.themeSettings.floatingHeader.showMenu = !1));
    A = o.hasClass("transparent");
    var St = t(".phantom-sticky").exists();
    t(".side-header").exists();
    if (dtLocal.themeSettings.floatingHeader.showMenu && St) {
      var kt = t(".branding a", T).attr("href"),
        It = (L = T).find(".header-bar");
      (Wt = L.find(".branding")).find("img");
      Wt.find("a.same-logo").length > 0 ||
        t(".sticky-logo").exists() ||
        (dtLocal.themeSettings.floatingHeader.logo.html &&
          dtLocal.themeSettings.floatingHeader.logo.showLogo &&
          (null == kt
            ? t(dtLocal.themeSettings.floatingHeader.logo.html)
                .addClass("sticky-logo")
                .prependTo(Wt)
            : t(
                '<a class="sticky-logo" href="' +
                  kt +
                  '">' +
                  dtLocal.themeSettings.floatingHeader.logo.html +
                  " </a>"
              ).prependTo(Wt)));
      K = 0;
      var Tt = 0,
        zt = 0,
        Lt = 0,
        Et = 0,
        Pt = !1,
        Ot = "";
      if (!A) {
        t("<div class='header-space'></div>").insertAfter(L);
        var At = t(".header-space");
      }
      L.addClass("sticky-off fixed-masthead");
      var Dt = !1;
      function Mt() {
        if (
          window.innerWidth <=
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
          !o.hasClass("responsive-off")
        )
          return !1;
        var t = dtGlobals.winScrollTop;
        if (t > Et + 1 && !Pt && !dtGlobals.isHovering) {
          if (
            (L.removeClass("sticky-off").addClass("sticky-on"),
            A || At.removeClass("sticky-space-off").addClass("sticky-space-on"),
            o.hasClass("floating-top-bar")
              ? L.css({ top: Tt })
              : L.css({ top: Tt - K }),
            (Pt = !0),
            ft &&
              A &&
              (L.css({ transform: "translateY(0)" }),
              navigator.userAgent.match(/Trident.*rv\:11\./)))
          ) {
            var e = L.attr("style");
            L.attr("style", e + "; top:" + K + "px !important;");
          }
        } else if (
          t <= Et + 1 &&
          Pt &&
          (L.removeClass("sticky-on").addClass("sticky-off"),
          A || At.removeClass("sticky-space-on").addClass("sticky-space-off"),
          L.css({ top: 0 }),
          (Pt = !1),
          ft &&
            A &&
            (L.css({ transform: "translateY(-100%)" }),
            navigator.userAgent.match(/Trident.*rv\:11\./)))
        ) {
          e = L.attr("style");
          L.not(".sticky-on").attr(
            "style",
            e + "; top:" + P.height() + "px !important;"
          );
        }
        t > Et + 1 &&
        t <= Et + 1 + Lt - dtLocal.themeSettings.floatingHeader.height
          ? ((Ot = "changing"),
            It.css({ transition: "none", height: Et + Lt - t }))
          : t > Et + 1 + dtLocal.themeSettings.floatingHeader.height &&
            "end" !== Ot
          ? ((Ot = "end"),
            It.css({
              height: dtLocal.themeSettings.floatingHeader.height,
              transition: "all 0.3s ease",
            }))
          : t <= Et + 1 &&
            "start" !== Ot &&
            ((Ot = "start"),
            It.css({ height: Lt, transition: "all 0.1s ease" }));
      }
      (dtGlobals.resetSizes = function (e) {
        if (
          window.innerWidth <=
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
          !o.hasClass("responsive-off")
        )
          return (
            Dt ||
              ((Dt = !0),
              L.removeClass("sticky-off sticky-on"),
              A || At.removeClass("sticky-space-off sticky-space-on"),
              L.css({ top: "", transform: "" }),
              (Pt = !1),
              (Ot = ""),
              t(".is-safari").length > 0 &&
                L.css({ width: "", "max-width": "" })),
            !1
          );
        Dt && (Dt = !1),
          Pt ||
            "" !== Ot ||
            (L.addClass("sticky-off"), A || At.addClass("sticky-space-off")),
          (Tt = t("#wpadminbar").exists() ? t("#wpadminbar").height() : 0),
          (K =
            !I.exists() ||
            I.is(":hidden") ||
            I.hasClass("top-bar-empty") ||
            I.hasClass("hide-top-bar")
              ? 0
              : I.innerHeight()),
          (zt = dtLocal.themeSettings.desktopHeader.height + K),
          (Lt = dtLocal.themeSettings.desktopHeader.height),
          ft
            ? ft && !A
              ? (Et = o.hasClass("floating-top-bar") ? e - K : e)
              : ft && A
              ? (Et = o.hasClass("floating-top-bar") ? e - Lt - K : e - Lt)
              : It.offset().top
            : (Et = o.hasClass("floating-top-bar") ? 0 : K),
          A || At.css({ height: zt }),
          t(".is-safari").length > 0 &&
            (a.hasClass("boxed")
              ? L.css({ width: a.width(), "max-width": a.width() })
              : L.css({
                  width: document.documentElement.clientWidth,
                  "max-width": document.documentElement.clientWidth,
                }));
      }),
        dtGlobals.resetSizes(P.height()),
        s.on(" debouncedresize", function () {
          dtGlobals.resetSizes(P.height());
        }),
        Mt(),
        s.on("scroll", function () {
          Mt();
        });
    }
    if (E.exists()) {
      var Ht = 0,
        Ft = ((Tt = 0), (K = 0), !1);
      E.addClass("sticky-top-line-off"),
        t(".top-line-space").exists() ||
          A ||
          t("<div class='top-line-space'></div>").insertBefore(E);
      var Wt;
      (kt = t(".branding a", E).attr("href")),
        (Wt = E.find(".branding")).find("img");
      Wt.find("a.same-logo").length > 0 ||
        t(".sticky-logo").exists() ||
        (dtLocal.themeSettings.topLine.floatingTopLine.logo.html &&
          dtLocal.themeSettings.topLine.floatingTopLine.logo.showLogo &&
          (null == kt
            ? t(dtLocal.themeSettings.topLine.floatingTopLine.logo.html)
                .addClass("sticky-logo")
                .prependTo(Wt)
            : t(
                '<a class="sticky-logo" href="' +
                  kt +
                  '">' +
                  dtLocal.themeSettings.topLine.floatingTopLine.logo.html +
                  " </a>"
              ).prependTo(Wt)));
      Dt = !1;
      (dtGlobals.resetTopLineSizes = function (e) {
        if (
          window.innerWidth <=
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
          !o.hasClass("responsive-off")
        )
          return (
            Dt ||
              ((Dt = !0),
              E.removeClass("sticky-top-line-on"),
              E.css({ top: "" }),
              (Ft = !1)),
            !1
          );
        Dt && (Dt = !1),
          (Tt = t("#wpadminbar").exists() ? t("#wpadminbar").height() : 0),
          (K =
            !I.exists() ||
            I.is(":hidden") ||
            I.hasClass("top-bar-empty") ||
            I.hasClass("hide-top-bar")
              ? 0
              : I.innerHeight()),
          (Ht = E.find(".header-bar").height() + K),
          t(".top-line-space").css({ height: Ht }),
          t(".is-safari").length > 0 &&
            (a.hasClass("boxed")
              ? E.css({ width: a.width(), "max-width": a.width() })
              : E.css({
                  width: document.documentElement.clientWidth,
                  "max-width": document.documentElement.clientWidth,
                }));
      }),
        dtGlobals.resetTopLineSizes(P.height()),
        s.on("resize debouncedresize", function () {
          dtGlobals.resetTopLineSizes(P.height());
        }),
        s.on("scroll", function () {
          if (
            window.innerWidth <=
              dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
            !o.hasClass("responsive-off")
          )
            return !1;
          var t = dtGlobals.winScrollTop > E.height();
          t && !Ft
            ? (E.removeClass("sticky-top-line-off").addClass(
                "sticky-top-line-on"
              ),
              E.hasClass("mixed-floating-top-bar")
                ? E.css({ top: Tt })
                : E.css({ top: Tt - K }),
              (Ft = !0))
            : !t &&
              Ft &&
              (E.removeClass("sticky-top-line-on").addClass(
                "sticky-top-line-off"
              ),
              E.css({ top: Tt }),
              (Ft = !1));
        });
    }
    if (
      dtLocal.themeSettings.floatingHeader.showMenu &&
      dtLocal.themeSettings.floatingHeader.showMenu &&
      !St
    ) {
      var Bt = t(".phantom-fade").exists(),
        Rt = t(".phantom-slide").exists(),
        jt = t(".split-header").exists();
      if (Bt || Rt) {
        var $t = t(".masthead:not(#phantom) .main-nav")
            .clone(!0)
            .removeAttr("id"),
          Gt =
            ((kt = t(".branding a", T).attr("href")),
            o.hasClass("floating-top-bar")
              ? t(".masthead:not(#phantom) .top-bar").clone(!0)
              : ""),
          Yt = !1;
        if (jt) {
          var Nt = T.attr("class"),
            qt = t(".side-header-h-stroke, .split-header"),
            Ut = (He = t(
              '<div id="phantom" class="' +
                Nt +
                '"><div class="ph-wrap"></div></div>'
            ).appendTo("body")).find(".ph-wrap"),
            Vt = He.find(".widget-box"),
            Xt = $t.find(".mini-widgets"),
            Zt = qt.find(".branding");
          t(".phantom-custom-logo-on").length > 0 &&
            dtLocal.themeSettings.floatingHeader.logo.html &&
            dtLocal.themeSettings.floatingHeader.logo.showLogo &&
            (null == kt
              ? t(dtLocal.themeSettings.floatingHeader.logo.html).prependTo(Zt)
              : t(
                  '<a class="phantom-top-line-logo" href="' +
                    kt +
                    '">' +
                    dtLocal.themeSettings.floatingHeader.logo.html +
                    " </a>"
                ).prependTo(Zt)),
            ($t = t(".split-header .header-bar").clone(!0))
              .appendTo(Ut)
              .find(".main-nav")
              .removeAttr("id"),
            o.hasClass("floating-top-bar") && Gt.insertBefore(Ut);
        } else {
          (Nt = T.attr("class")),
            (Ut = (He = t(
              '<div id="phantom" class="' +
                Nt +
                '"><div class="ph-wrap"><div class="logo-box"></div><div class="menu-box"></div><div class="widget-box"></div></div></div>'
            ).appendTo("body")).find(".menu-box")),
            (Vt = He.find(".widget-box"));
          if (t(".classic-header").length > 0)
            Xt = t(".header-bar .navigation .mini-widgets").clone(!0);
          else if (jt);
          else Xt = t(".header-bar .mini-widgets").clone(!0);
          $t.appendTo(Ut),
            Xt.appendTo(Vt),
            o.hasClass("floating-top-bar") && Gt.prependTo(He),
            dtLocal.themeSettings.floatingHeader.logo.html &&
              dtLocal.themeSettings.floatingHeader.logo.showLogo &&
              (He.find(".ph-wrap").addClass("with-logo"),
              null == kt
                ? He.find(".logo-box").html(
                    '<a href="' +
                      dtLocal.themeSettings.floatingHeader.logo.url +
                      '">' +
                      dtLocal.themeSettings.floatingHeader.logo.html +
                      " </a>"
                  )
                : He.find(".logo-box").html(
                    '<a href="' +
                      kt +
                      '">' +
                      dtLocal.themeSettings.floatingHeader.logo.html +
                      " </a>"
                  ));
        }
        var Qt,
          Kt = t("#phantom");
        a.hasClass("boxed") &&
          He.addClass("boxed").find(".ph-wrap").addClass("boxed"),
          Kt.removeClass("show-phantom")
            .addClass("hide-phantom")
            .css("visibility", "hidden"),
          dtGlobals.addOnloadEvent(function () {
            clearTimeout(Qt),
              (Qt = setTimeout(function () {
                Kt.css("visibility", "");
              }, 150));
          }),
          Ut.find(".is-loading").removeClass("is-loading"),
          Ut.layzrInitialisation();
        var Jt = !1,
          te = dtGlobals.winScrollTop;
        (yt = P.height()), T.height();
        if (ft && A);
        else if (ft);
        else dtLocal.themeSettings.floatingHeader.showAfter;
        s.on("scroll", function () {
          if (
            window.innerWidth <=
              dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
            !o.hasClass("responsive-off")
          )
            return !1;
          var t = dtGlobals.winScrollTop,
            e = P.height(),
            i = T.height();
          if (ft && A)
            var s = t > e && !1 === Yt,
              a = t <= e && !0 === Yt;
          else if (ft)
            (s = t > e + i && !1 === Yt), (a = t <= e + i && !0 === Yt);
          else
            (s =
              t > dtLocal.themeSettings.floatingHeader.showAfter && !1 === Yt),
              (a =
                t <= dtLocal.themeSettings.floatingHeader.showAfter &&
                !0 === Yt);
          s
            ? n.hasClass("menu-open") ||
              dtGlobals.isHovering ||
              Jt ||
              ((Jt = !0),
              Kt.removeClass("hide-phantom").addClass("show-phantom"),
              (Yt = !0))
            : a &&
              Jt &&
              (n.hasClass("menu-open") ||
                ((Jt = !1),
                Kt.removeClass("show-phantom").addClass("hide-phantom"),
                (Yt = !1)));
        });
      }
    }
    var ee = t(
      ".side-header:not(.sub-sideways ) .main-nav li.has-children > a:not(.not-clickable-item), .side-header:not(.sub-sideways ) .level-arrows-on > li.has-children > a, .mobile-main-nav li.has-children > a"
    );
    t(
      '<i class="next-level-button"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path d="M13.5,7H9V2.5c0-0.6-0.4-1-1-1s-1,0.4-1,1V7H2.5c-0.6,0-1,0.4-1,1s0.4,1,1,1H7v4.5c0,0.6,0.4,1,1,1s1-0.4,1-1V9h4.5c0.6,0,1-0.4,1-1S14.1,7,13.5,7z"/></svg></i>'
    ).insertAfter(ee),
      t(
        ".sub-downwards .main-nav li.has-children, .mobile-main-nav li.has-children"
      ).each(function () {
        var e = t(this),
          i = e.find(" > .sub-nav, .sub-menu");
        e.find(".sub-nav li, .sub-menu li").hasClass("act") &&
          e.addClass("active"),
          e.find(".sub-nav li.act, .sub-menu li.act").hasClass("act") &&
            (e.addClass("open-sub"),
            i.stop(!0, !0).slideDown(100),
            i.layzrInitialisation()),
          e.find(" > .next-level-button").on("click", function (e) {
            var s = t(this).parent();
            s.hasClass("active")
              ? (i.stop(!0, !0).slideUp(500, function () {
                  t(" .main-nav").layzrInitialisation();
                }),
                s.removeClass("active"),
                s.removeClass("open-sub"),
                s.find("a").removeClass("act"))
              : (s
                  .siblings()
                  .find(" .sub-nav, .dt-mega-menu-wrap, .sub-menu")
                  .stop(!0, !0)
                  .slideUp(400),
                i.stop(!0, !0).slideDown(500),
                s.siblings().removeClass("active"),
                s.addClass("active"),
                s.siblings().removeClass("open-sub"),
                s.addClass("open-sub"),
                s.siblings().find("> a").removeClass("act"),
                s.find("a").addClass("act"),
                t(" .main-nav").layzrInitialisation());
          });
      }),
      !t(".dt-parent-menu-clickable").length > 0 &&
        t(
          ".sub-downwards .main-nav li > a, .mobile-main-nav li.has-children > a"
        ).each(function () {
          var e = t(this);
          e.parent("li").find(".sub-nav li, .sub-menu li").hasClass("act") &&
            e.addClass("act"),
            e
              .parent("li")
              .find(".sub-nav li.act, .sub-menu li.act")
              .hasClass("act") &&
              (e.parent("li").addClass("open-sub"),
              e
                .siblings(".sub-nav, .sub-menu")
                .stop(!0, !0)
                .slideDown(100, function () {
                  e.siblings(".sub-nav, .sub-menu").layzrInitialisation();
                })),
            e.on("click", function (i) {
              ($menuItem = e.parent()),
                $menuItem.hasClass("has-children menu-item-language") &&
                  i.preventDefault(),
                e.hasClass("act")
                  ? (e
                      .siblings(".sub-nav, .sub-menu")
                      .stop(!0, !0)
                      .slideUp(500),
                    e.removeClass("act"),
                    e.parent("li").removeClass("open-sub"))
                  : (e
                      .parent()
                      .siblings()
                      .find(".sub-nav, .dt-mega-menu-wrap, .sub-menu")
                      .stop(!0, !0)
                      .slideUp(400),
                    e
                      .siblings(".sub-nav, .sub-menu")
                      .stop(!0, !0)
                      .slideDown(500),
                    e.parent().siblings().find("> a").removeClass("act"),
                    e.addClass("act"),
                    e.parent("li").siblings().removeClass("open-sub active"),
                    e.parent("li").addClass("open-sub active")),
                "function" == typeof t.fn.mCustomScrollbar &&
                  t(".header-bar").mCustomScrollbar("update");
            });
        }),
      t(".custom-nav > li > a").click(function (e) {
        var i = t(this).parent(),
          s = t(this);
        i.hasClass("has-children") && e.preventDefault(),
          s.hasClass("active")
            ? (s.next().stop(!0).slideUp(500), s.removeClass("active"))
            : (t(".custom-nav > li > ul").stop(!0).slideUp(400),
              s.next().stop(!0).slideDown(500),
              t(".custom-nav > li > a").removeClass("active"),
              s.addClass("active")),
          i.siblings().removeClass("act"),
          i.addClass("act");
      }),
      t(".custom-nav > li > ul").each(function () {
        clearTimeout(undefined),
          ($this = t(this)),
          ($thisChildren = $this.find("li")),
          $thisChildren.hasClass("act") &&
            ($this.prev().addClass("active"),
            $this.parent().siblings().removeClass("act"),
            $this.parent().addClass("act"),
            $this.slideDown(500));
      }),
      (t.HoverDir = function (e, i) {
        (this.$el = t(i)), this._init(e);
      }),
      (t.HoverDir.defaults = {
        speed: 300,
        easing: "ease",
        hoverDelay: 0,
        inverse: !1,
      }),
      (t.HoverDir.prototype = {
        _init: function (e) {
          (this.options = t.extend(!0, {}, t.HoverDir.defaults, e)),
            (this.transitionProp =
              "all " + this.options.speed + "ms " + this.options.easing),
            (this.support = Modernizr.csstransitions),
            this._loadEvents();
        },
        _loadEvents: function () {
          var e = this;
          this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (i) {
            var s = t(this),
              n = s.find(
                ".rollover-content, .gallery-rollover, .post-entry-content"
              ),
              o = e._getDir(s, { x: i.pageX, y: i.pageY }),
              a = e._getStyle(o);
            "mouseenter" === i.type
              ? (n.hide().css(a.from),
                clearTimeout(e.tmhover),
                (e.tmhover = setTimeout(function () {
                  n.show(0, function () {
                    var i = t(this);
                    e.support && i.css("transition", e.transitionProp),
                      e._applyAnimation(i, a.to, e.options.speed);
                  });
                }, e.options.hoverDelay)))
              : (e.support && n.css("transition", e.transitionProp),
                clearTimeout(e.tmhover),
                e._applyAnimation(n, a.from, e.options.speed));
          });
        },
        _getDir: function (t, e) {
          var i = t.width(),
            s = t.height(),
            n = (e.x - t.offset().left - i / 2) * (i > s ? s / i : 1),
            o = (e.y - t.offset().top - s / 2) * (s > i ? i / s : 1);
          return (
            Math.round((Math.atan2(o, n) * (180 / Math.PI) + 180) / 90 + 3) % 4
          );
        },
        _getStyle: function (t) {
          var e,
            i,
            s = { left: "0px", top: "-100%" },
            n = { left: "0px", top: "100%" },
            o = { left: "-100%", top: "0px" },
            a = { left: "100%", top: "0px" },
            r = { top: "0px" },
            l = { left: "0px" };
          switch (t) {
            case 0:
              (e = this.options.inverse ? n : s), (i = r);
              break;
            case 1:
              (e = this.options.inverse ? o : a), (i = l);
              break;
            case 2:
              (e = this.options.inverse ? s : n), (i = r);
              break;
            case 3:
              (e = this.options.inverse ? a : o), (i = l);
          }
          return { from: e, to: i };
        },
        _applyAnimation: function (e, i, s) {
          (t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate),
            e.stop().applyStyle(i, t.extend(!0, [], { duration: s + "ms" }));
        },
      });
    var ie = function (t) {
      window.console && window.console.error(t);
    };
    (t.fn.hoverdir = function (e) {
      var i = t.data(this, "hoverdir");
      if ("string" == typeof e) {
        var s = Array.prototype.slice.call(arguments, 1);
        this.each(function () {
          i
            ? the7Utils.isFunction(i[e]) && "_" !== e.charAt(0)
              ? i[e].apply(i, s)
              : ie("no such method '" + e + "' for hoverdir instance")
            : ie(
                "cannot call methods on hoverdir prior to initialization; attempted to call method '" +
                  e +
                  "'"
              );
        });
      } else
        this.each(function () {
          i
            ? i._init()
            : (i = t.data(this, "hoverdir", new t.HoverDir(e, this)));
        });
      return i;
    }),
      (t.fn.addRollover = function () {
        return this.each(function () {
          var e = t(this);
          e.hasClass("this-ready") ||
            (e.append("<i></i>"),
            e.find(".rollover-thumbnails").length &&
              e.addClass("rollover-thumbnails-on"),
            e.parent().find(".links-container").length &&
              e.addClass("rollover-buttons-on"),
            e.addClass("this-ready"));
        });
      }),
      /*!-Scale in hover*/
      (t.fn.scaleInHover = function () {
        return this.each(function () {
          var e = t(this);
          if (!e.hasClass("scale-ready")) {
            var i = e.find("img.preload-me"),
              s = parseInt(i.attr("width")) / parseInt(i.attr("height"));
            s < 2 && s >= 1.5
              ? e.addClass("ratio_3-2")
              : s < 1.5 && s >= 1
              ? e.addClass("ratio_4-3")
              : s < 1 && s >= 0.75
              ? e.addClass("ratio_3-4")
              : s < 0.75 && s >= 0.6
              ? e.addClass("ratio_2-3")
              : e
                  .removeClass("ratio_2-3")
                  .removeClass("ratio_3-2")
                  .removeClass("ratio-2")
                  .removeClass("ratio_4-3")
                  .removeClass("ratio_3-4"),
              s >= 2 && e.addClass("ratio-2"),
              0.5 == s && e.addClass("ratio_0-5"),
              1 == s &&
                e
                  .removeClass("ratio_2-3")
                  .removeClass("ratio-2")
                  .removeClass("ratio_3-2")
                  .removeClass("ratio_4-3")
                  .removeClass("ratio_3-4"),
              e.addClass("scale-ready");
          }
        });
      }),
      (t.fn.touchNewHover = function () {
        return this.each(function () {
          var e = t(this);
          e.hasClass("this-ready") ||
            (t(".rollover-content", this).length > 0 &&
              (o.on("touchend", function (e) {
                t(
                  ".mobile-true .rollover-content, .mobile-true .rollover-project, .mobile-true .woocom-project"
                ).removeClass("is-clicked");
              }),
              e.on("touchstart", function (t) {
                (origY = t.originalEvent.touches[0].pageY),
                  (origX = t.originalEvent.touches[0].pageX);
              }),
              e.on("touchend", function (i) {
                var s = i.originalEvent.changedTouches[0].pageX,
                  n = i.originalEvent.changedTouches[0].pageY;
                if (origY == n || origX == s) {
                  if (!e.hasClass("is-clicked"))
                    return (
                      t(".links-container > a", e).on("touchend", function (t) {
                        t.stopPropagation(), e.addClass("is-clicked");
                      }),
                      i.preventDefault(),
                      t(
                        ".mobile-true .rollover-content, .mobile-true .rollover-project,.mobile-true .woocom-project"
                      ).removeClass("is-clicked"),
                      e.addClass("is-clicked"),
                      e.find(".rollover-content").addClass("is-clicked"),
                      !1
                    );
                  if (
                    (e.find(".dt-gallery-container").length > 0 &&
                      e
                        .find(".rollover-content")
                        .on("click.dtAlbums", function (i) {
                          e.find(".rollover-content").off("click.dtAlbums"),
                            t(this)
                              .find(
                                "a.dt-gallery-pspw, .dt-trigger-first-pspw, .dt-pswp-item"
                              )
                              .first()
                              .trigger("click");
                        }),
                    t(this).find(".rollover-click-target.go-to").length > 0)
                  )
                    window.location.href = t(this)
                      .find(".rollover-click-target.go-to")
                      .attr("href");
                  else if (t(this).hasClass("woocom-project")) {
                    if (t(i.target).is(".add_to_cart_button")) return !0;
                    window.location.href = t(this).find(" > a").attr("href");
                  }
                }
              })),
            e.addClass("this-ready"));
        });
      }),
      /*!Trigger post click for blog Overlay (background)/Overlay (gradient) layouts */
      (t.fn.triggerPostClick = function () {
        return this.each(function () {
          var e = t(this);
          if (!e.hasClass("blog-post-ready")) {
            var i = e.siblings().find(".post-thumbnail-rollover").first(),
              s = e.find(".entry-meta a, .fancy-date a, .fancy-categories a");
            if (i.length > 0) {
              i.on("click", function (t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  i.parents(".ts-wrap").hasClass("ts-interceptClicks");
              });
              var n = !1;
              e.on("click", function (t) {
                if (!e.parents(".ts-wrap").hasClass("ts-interceptClicks"))
                  return (
                    n ||
                      ((n = !0),
                      (window.location.href = i.attr("href")),
                      (n = !1)),
                    !1
                  );
              }),
                e.find(s).click(function (t) {
                  t.stopPropagation(), (window.location.href = s.attr("href"));
                });
            }
            e.addClass("blog-post-ready");
          }
        });
      }),
      (t.fn.touchTriggerPostClick = function () {
        return this.each(function () {
          var e = t(this);
          if (!e.hasClass("touch-post-ready")) {
            var i = e.find(".post-thumbnail-rollover").first();
            e.find(".entry-meta a, .fancy-date a, .fancy-categories a"),
              e.find(".entry-excerpt").height(),
              e.find(".post-details").height();
            o.on("touchend", function (e) {
              t(".mobile-true .post").removeClass("is-clicked");
            }),
              e.on("touchstart", function (t) {
                (origY = t.originalEvent.touches[0].pageY),
                  (origX = t.originalEvent.touches[0].pageX);
              }),
              e.on("touchend", function (s) {
                var n = s.originalEvent.changedTouches[0].pageX,
                  o = s.originalEvent.changedTouches[0].pageY;
                if (origY == o || origX == n)
                  if (e.parents().hasClass("disable-layout-hover"))
                    "a" === s.target.tagName.toLowerCase()
                      ? t(s.target).trigger("click")
                      : (window.location.href = i.attr("href"));
                  else {
                    if (!e.hasClass("is-clicked"))
                      return (
                        s.preventDefault(),
                        "a" === s.target.tagName.toLowerCase() &&
                          t(s.target).trigger("click"),
                        t(".mobile-ture .post").removeClass("is-clicked"),
                        e.addClass("is-clicked"),
                        e
                          .parent()
                          .siblings()
                          .find(".post")
                          .removeClass("is-clicked"),
                        !1
                      );
                    window.location.href = i.attr("href");
                  }
              }),
              e.addClass("touch-post-ready");
          }
        });
      }),
      (t.fn.triggerPostClickOnBefore = function () {
        return this.each(function () {
          var e = t(this),
            i = e.parents(".post");
          if (!e.hasClass("post-before-ready")) {
            var s = i.find(".post-thumbnail-rollover").first(),
              n = i.find(".entry-meta a, .fancy-date a, .fancy-categories a");
            if (s.length > 0) {
              s.on("click", function (t) {
                s.parents(".ts-wrap").hasClass("ts-interceptClicks");
              });
              var o = !1;
              e.on("mouseenter mousemove", function (t) {
                var s = e.offset().top,
                  n = t.pageY;
                s - 10 <= n && s + 125 >= n
                  ? i.hasClass("on-hover") || i.addClass("on-hover")
                  : i.removeClass("on-hover");
              }),
                e.on("mouseleave", function (t) {
                  e.offset().top, t.pageY;
                  i.removeClass("on-hover");
                }),
                e.on("click", function () {
                  if (i.hasClass("on-hover"))
                    return (
                      o ||
                        ((o = !0),
                        (window.location.href = s.attr("href")),
                        (o = !1)),
                      !1
                    );
                }),
                e.find(n).click(function (t) {
                  i.hasClass("on-hover") &&
                    (t.stopPropagation(),
                    (window.location.href = n.attr("href")));
                });
            }
            e.addClass("post-before-ready");
          }
        });
      }),
      /*!Trigger click (direct to post) */
      (t.fn.forwardToPost = function () {
        return this.each(function () {
          var i = t(this);
          i.hasClass("this-ready") ||
            (i.on("click tap", function () {
              var i = t(this),
                s = i.find("a").first(),
                n = s.attr("href");
              if (!i.parents(".ts-wrap").hasClass("ts-interceptClicks")) {
                if ("a" !== e.target.tagName.toLowerCase()) {
                  if ("_blank" === s.attr("target"))
                    return window.open(n, "_blank"), !1;
                  window.location.href = n;
                }
                return !1;
              }
            }),
            i.addClass("this-ready"));
        });
      }),
      (window.the7AddHovers = function (e) {
        t(
          ".rollover, .rollover-video, .post-rollover, .rollover-project .show-content, .vc-item .vc-inner > a",
          e
        ).addRollover(),
          t(".filter-grayscale .slider-masonry", e).on(
            "mouseenter tap",
            function (e) {
              "tap" == e.type && e.stopPropagation(),
                t(this).addClass("dt-hovered");
            }
          ),
          t(".filter-grayscale .slider-masonry", e).on(
            "mouseleave",
            function (e) {
              t(this).removeClass("dt-hovered");
            }
          ),
          t(
            ".hover-scale .rollover-project, .hover-scale .post",
            e
          ).scaleInHover();
      }),
      (window.the7AddMobileHovers = function (e) {
        /*!Description on hover show content on click(albums projects touch device)*/
        t(".rollover-project, .woocom-project", e).touchNewHover(),
          t(
            ".content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post, .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode)  .post",
            e
          ).touchTriggerPostClick();
      }),
      (window.the7AddDesktopHovers = function (e) {
        /*!-Hover Direction aware init*/
        t(
          ".hover-grid.gallery-shortcode figure, .hover-grid .rollover-project, .hover-grid.portfolio-shortcode .post",
          e
        ).each(function () {
          t(this).hoverdir();
        }),
          t(
            ".hover-grid-reverse.gallery-shortcode figure, .hover-grid-reverse .rollover-project, .hover-grid-reverse.portfolio-shortcode .post",
            e
          ).each(function () {
            t(this).hoverdir({ inverse: !0 });
          }),
          t(
            ".albums .rollover-content a:not(.portfolio-categories a), .media .rollover-content, .dt-gallery-container .rollover-content",
            e
          ).on("click", function (e) {
            if (t(e.target).is("a")) return !0;
            t(this).siblings("a.dt-pswp-item").first().click();
          }),
          t(
            ".content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post,  .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post",
            e
          ).triggerPostClick(),
          t(
            ".gradient-overlap-layout-list:not(.portfolio-shortcode):not(.albums-shortcode)  .post-entry-content",
            e
          ).triggerPostClickOnBefore(),
          t(".the7-elementor-widget .forward-post", e).forwardToPost();
      }),
      the7AddMobileHovers(t("html.mobile-true")),
      the7AddDesktopHovers(t("html.mobile-false")),
      the7AddHovers(document);
    var se = t("#commentform");
    function ne() {
      t(".full-width-wrap").length > 0 &&
        t(".full-width-wrap").each(function () {
          var e,
            i,
            n = t(this),
            a = window.innerWidth,
            r = s.width(),
            l = t(".content").width();
          if (t(".boxed").length > 0)
            e = (parseInt(t("#main").width()) - parseInt(l)) / 2;
          else if (
            (t(".side-header-v-stroke").length &&
              a > dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
              !o.hasClass("responsive-off")) ||
            (t(".side-header-v-stroke").length && o.hasClass("responsive-off"))
          ) {
            var d =
              a <= parseInt(l)
                ? parseInt(l)
                : r - t(".side-header-v-stroke").width();
            e = Math.ceil((d - parseInt(l)) / 2);
          } else if (
            (t(".sticky-header .side-header").length &&
              a > dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
              !o.hasClass("responsive-off")) ||
            (t(".sticky-header .side-header").length &&
              o.hasClass("responsive-off"))
          ) {
            d = r <= parseInt(l) ? parseInt(l) : r;
            e = Math.ceil((r - parseInt(l)) / 2);
          } else if (
            ((t(".header-side-left").length && a) ||
              (t(".header-side-right").length && a)) >
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint
          ) {
            d = a <= parseInt(l) ? parseInt(l) : r - t(".side-header").width();
            e = Math.ceil((d - parseInt(l)) / 2);
          } else {
            d = r <= parseInt(l) ? parseInt(l) : r;
            e = Math.ceil((r - parseInt(l)) / 2);
          }
          t(".sidebar-left").length > 0 || t(".sidebar-right").length > 0
            ? ((i = t(".content").width()), (e = 0))
            : (i = t("#main").innerWidth());
          var c = o.hasClass("rtl") ? "margin-right" : "margin-left";
          n.css({ width: i, opacity: 1 }),
            n.css(c, -e),
            n
              .find(".full-width-wrap")
              .css({ width: "", opacity: 1, "padding-left": e }),
            n.find(".full-width-wrap").css(c, ""),
            n.find(".ts-wrap").each(function () {
              var e = t(this).data("thePhotoSlider");
              void 0 !== e && e.update();
            });
        });
    }
    se.on("click", "a.clear-form", function (t) {
      return (
        t.preventDefault(), se.find('input[type="text"], textarea').val(""), !1
      );
    }),
      se.on("click", " a.dt-btn.dt-btn-m", function (t) {
        return t.preventDefault(), se.find("#submit").trigger("click"), !1;
      }),
      t(".full-width-wrap").length > 0 &&
        (dtGlobals.isiOS
          ? s
              .bind("orientationchange", function () {
                ne();
              })
              .trigger("orientationchange")
          : (s.on("resize", function () {
              ne();
            }),
            ne())),
      s.trigger("dt.removeLoading");
    var oe = t("#main-slideshow");
    !oe.find("> div").length > 0 && oe.addClass("empty-slider"),
      /*!-Revolution slider*/
      oe.is(":parent") || oe.siblings(".masthead").addClass("no-slider"),
      t(".rev_slider_wrapper").length > 0 &&
        (oe.find("> .rev_slider_wrapper") && oe.addClass("fix rv-slider"),
        (t(".rev_slider_wrapper").hasClass("fullscreen-container") ||
          t(".rev_slider_wrapper").hasClass("fullwidthbanner-container")) &&
          oe.removeClass("fix"));
    /*!-Search*/
    var ae,
      re,
      le = t(".masthead, .dt-mobile-header"),
      de = t(".popup-search", le);
    if (
      (de.length > 0 &&
        (o.on("click", function (e) {
          t(e.target).is(".field", de) ||
            (t(".searchform .submit", le).removeClass("act"),
            de.removeClass("act"),
            t(".popup-search-wrap", de)
              .stop()
              .animate({ opacity: 0 }, 150, function () {
                t(this).css("visibility", "hidden");
              }),
            setTimeout(function () {
              t(".popup-search-wrap", de)
                .removeClass("right-overflow bottom-overflow left-overflow")
                .css({ right: "", left: "", "max-width": "" });
            }, 400));
        }),
        t(".searchform .submit", le).on("click", function (e) {
          e.preventDefault(), e.stopPropagation();
          var i = t(this);
          i.hasClass("act")
            ? (i.removeClass("act"),
              i.parents(".mini-search").removeClass("act"),
              i
                .siblings(".popup-search-wrap")
                .stop()
                .animate({ opacity: 0 }, 150, function () {
                  t(this).css("visibility", "hidden");
                }),
              setTimeout(function () {
                i.siblings(".popup-search-wrap")
                  .removeClass("right-overflow bottom-overflow left-overflow")
                  .css({ right: "", left: "", "max-width": "" });
              }, 400))
            : (i.addClass("act"),
              i.parents(".mini-search").addClass("act"),
              i.parents(".dt-mobile-header").length > 0 &&
                i
                  .siblings(".popup-search-wrap")
                  .css({
                    top:
                      i.parents(".mini-search").position().top -
                      i.siblings(".popup-search-wrap").innerHeight(),
                  }),
              i.parents(".searchform").offset().left -
                i.siblings(".popup-search-wrap").innerWidth() <
                0 && i.siblings(".popup-search-wrap").addClass("left-overflow"),
              a.width() -
                (i.parents(".searchform").offset().left - a.offset().left) -
                i.siblings(".popup-search-wrap").innerWidth() <
                0 &&
                (i.siblings(".popup-search-wrap").addClass("right-overflow"),
                i.siblings(".popup-search-wrap").removeClass("left-overflow")),
              a.width() -
                (i.parents(".searchform").offset().left - a.offset().left) -
                i.siblings(".popup-search-wrap").innerWidth() <
                0 &&
                i.parents(".searchform").offset().left -
                  i.siblings(".popup-search-wrap").innerWidth() <
                  0 &&
                i
                  .siblings(".popup-search-wrap")
                  .css({ "max-width": i.parents(".searchform").offset().left }),
              s.height() -
                (i.siblings(".popup-search-wrap").offset().top -
                  dtGlobals.winScrollTop) -
                i.siblings(".popup-search-wrap").innerHeight() <
                0 &&
                i.siblings(".popup-search-wrap").addClass("bottom-overflow"),
              i
                .siblings(".popup-search-wrap")
                .stop()
                .css("visibility", "visible")
                .animate({ opacity: 1 }, 150),
              i
                .siblings(".popup-search-wrap")
                .find("input.searchform-s")
                .focus());
        })),
      t(".overlay-search").length > 0)
    ) {
      var ce = t(".overlay-search .searchform").first().clone();
      t("body").append(
        "<div class='overlay-search-microwidget'><i class='overlay-close icomoon-the7-font-the7-cross-01'></i></div>"
      );
      var he = t(".overlay-search-microwidget");
      he.append(ce),
        t(".overlay-search").hasClass("default-icon") &&
          he.addClass("default-icon"),
        t(".mini-search .submit").on("click", function (e) {
          e.preventDefault(),
            he.addClass("open"),
            t("#page").addClass("overlay-open"),
            he.find("input.searchform-s").focus();
        }),
        t(".overlay-close", he).on("click", function () {
          t("#page").removeClass("overlay-open"),
            t(this).parent(he).removeClass("open");
        });
    }
    /*!-Before After*/
    /*!-Isotope fix for tabs*/
    (dtGlobals.addOnloadEvent(function () {
      t(".twentytwenty-container").each(function () {
        var e = t(this),
          i =
            e.attr("data-orientation").length > 0
              ? e.attr("data-orientation")
              : "horizontal",
          s =
            void 0 !== e.attr("data-offset") && e.attr("data-offset").length > 0
              ? e.attr("data-offset")
              : 0.5,
          n = !!e.attr("data-navigation");
        e.twentytwenty({
          default_offset_pct: s,
          orientation: i,
          navigation_follow: n,
        });
      });
    }),
    t(".wpb_tabs .iso-container").length > 0) &&
      t(".wpb_tour_tabs_wrapper").each(function () {
        var e = t(this),
          i = e.parents(".wpb_tabs").find(".iso-container");
        e.tabs({
          activate: function (t, e) {
            i.isotope("layout");
          },
        }),
          e.find("li").each(function () {
            t(this).on("click", function () {
              clearTimeout(undefined),
                s.trigger("debouncedresize"),
                t(this)
                  .parents(".wpb_tabs")
                  .find(".iso-container")
                  .isotope("layout");
            });
          });
      });
    (t.fn.calcPics = function () {
      return (
        !(t(".instagram-photos").length < 1) &&
        this.each(function () {
          var e = e || parseInt(t(this).attr("data-image-max-width"));
          parseInt(t(this).find("> a").css("margin-left"));
          t(this).find(" > a").css({ "max-width": e, opacity: 1 });
          var i = t(this),
            s = i.width(),
            n = 100 / Math.ceil(s / e);
          i.find("a").css({ width: n + "%" });
        })
      );
    }),
      t(".instagram-photos").calcPics(),
      t(".st-accordion").each(function () {
        var e = t(this);
        e.find("ul > li > a").on("click", function (i) {
          i.preventDefault();
          var s = t(this).next();
          t(".st-content", e).not(s).slideUp("fast"), s.slideToggle("fast");
        });
      }),
      simple_tooltip(".shortcode-tooltip", "shortcode-tooltip-content"),
      /*!-search widget*/
      t(
        ".widget .searchform .submit, .search-icon, form.searchform:not(.mini-widget-searchform) .submit"
      ).on("click", function (e) {
        return (
          e.preventDefault(),
          t(this).closest("form").find("input.searchsubmit").click(),
          !1
        );
      }),
      (t.fn.animateSkills = function () {
        t(".skill-value", this).each(function () {
          var e = t(this),
            i = e.data("width");
          e.css({ width: i + "%" });
        });
      }),
      dtGlobals.isMobile && t(".skills").animateSkills(),
      /*!-Show share buttons*/
      t(".project-share-overlay.allways-visible-icons .share-button").on(
        "click",
        function (t) {
          t.preventDefault();
        }
      ),
      dtGlobals.addOnloadEvent(function () {
        t(
          ".album-share-overlay, .project-share-overlay:not(.allways-visible-icons)"
        ).each(function () {
          var e = t(this);
          e.find(".share-button").on("click", function (t) {
            t.preventDefault();
          }),
            e.on("mouseover tap", function (e) {
              "tap" == e.type && e.stopPropagation();
              var i = t(this);
              i.addClass("dt-hovered"),
                clearTimeout(ae),
                clearTimeout(re),
                (ae = setTimeout(function () {
                  i.hasClass("dt-hovered") &&
                    (i.find(".soc-ico a").css("display", "inline-flex"),
                    i
                      .find(".soc-ico")
                      .stop()
                      .css("visibility", "visible")
                      .animate({ opacity: 1 }, 200));
                }, 100));
            }),
            e.on("mouseleave ", function (e) {
              var i = t(this);
              i.removeClass("dt-hovered"),
                clearTimeout(ae),
                clearTimeout(re),
                (re = setTimeout(function () {
                  i.hasClass("dt-hovered") ||
                    i
                      .find(".soc-ico")
                      .stop()
                      .animate({ opacity: 0 }, 150, function () {
                        i.find(".soc-ico a").css("display", "none"),
                          t(this).css("visibility", "hidden");
                      });
                }, 50));
            });
        });
      });
    var ue = t(".transparent #fancy-header").exists(),
      pe = t(".transparent .page-title").exists();
    t(".transparent .checkout-page-title").exists();
    t.fancyFeaderCalc = function () {
      t(".branding .preload-me").loaded(
        null,
        function () {
          ue &&
            t(".transparent #fancy-header").css({
              "padding-top": t(".masthead:not(.side-header)").height(),
            }),
            pe &&
              (t(".transparent .page-title").css({
                "padding-top": t(".masthead:not(.side-header)").height(),
              }),
              t(".transparent .page-title").css("visibility", "visible"));
        },
        !0
      );
    };
    /*!-Paginator*/
    var fe = t('.paginator[role="navigation"]'),
      me = fe.find("a.dots");
    me.on("click", function () {
      fe.find("div:hidden").show().find("a").unwrap(), me.remove();
    }),
      t(".share-buttons a.pinit-marklet").click(function (e) {
        e.preventDefault(), t("#pinmarklet").remove();
        var i = document.createElement("script");
        i.setAttribute("type", "text/javascript"),
          i.setAttribute("charset", "UTF-8"),
          i.setAttribute("id", "pinmarklet"),
          i.setAttribute("async", "async"),
          i.setAttribute("defer", "defer"),
          i.setAttribute(
            "src",
            "//assets.pinterest.com/js/pinmarklet.js?r=" +
              99999999 * Math.random()
          ),
          document.body.appendChild(i);
      }),
      /*!-Scroll to Top*/
      s.on("debouncedresize", function () {
        (window.innerWidth >
          dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
          !o.hasClass("responsive-off")) ||
        o.hasClass("responsive-off")
          ? t(".masthead:not(.side-header):not(.mixed-header)").length > 0
            ? (dtGlobals.showTopBtn =
                t(".masthead:not(.side-header):not(.mixed-header)").height() +
                150)
            : t(".masthead.side-header-h-stroke").length > 0
            ? (dtGlobals.showTopBtn = t(".side-header-h-stroke").height() + 150)
            : (dtGlobals.showTopBtn = 500)
          : (dtGlobals.showTopBtn = 500);
      }),
      s.scroll(function () {
        dtGlobals.winScrollTop > dtGlobals.showTopBtn
          ? t(".scroll-top").removeClass("off").addClass("on")
          : t(".scroll-top").removeClass("on").addClass("off");
      }),
      t(".scroll-top").click(function (t) {
        return t.preventDefault(), $e("up"), !1;
      });
    var ge = t(
      ".woocommerce-NoticeGroup-updateOrderReview, .woocommerce-NoticeGroup-checkout"
    );
    !ge.length &&
      t("form.checkout").exists() &&
      (ge = t("form.checkout").parents(".content").offset().top),
      t(document.body).on("checkout_error", function () {
        t("html, body").animate({ scrollTop: ge - He.height() }, "slow");
      }),
      /*!-Custom select*/
      t(
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path class="st0" d="M2.5,12c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5H3C2.7,12.5,2.5,12.3,2.5,12z M2.5,8c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.2,0.5-0.5,0.5H3C2.7,8.5,2.5,8.3,2.5,8z M2.5,4c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5S13.3,4.5,13,4.5H3C2.7,4.5,2.5,4.3,2.5,4z"/></svg><select aria-label="Dropdown menu"/>'
      ).prependTo("#bottom-bar .mini-nav .menu-select"),
      t("<option />", {
        selected: "selected",
        value: "",
        text: "â€”â€”â€”",
      }).appendTo(".mini-nav .menu-select select"),
      t("#bottom-bar .mini-nav").each(function () {
        var e = t(this),
          i = e.find("select");
        t("a", e).each(function () {
          var e = t(this);
          t("<option />", {
            value: e.attr("href"),
            text: e.text(),
            "data-level": e.attr("data-level"),
          }).appendTo(i);
        });
      }),
      t(".mini-nav select").change(function () {
        window.location = t(this).find("option:selected").val();
      }),
      t(".mini-nav select option").each(function () {
        var e = t(this),
          i = window.location.href;
        e.attr("value") == i && e.attr("selected", "selected");
      }),
      /*!-Appearance for custom select*/ t(
        " #bottom-bar .mini-nav select"
      ).each(function () {
        t(this).customSelect();
      }),
      t(
        ".menu-select select, .mini-nav .customSelect1, .vc_pie_chart .vc_pie_wrapper"
      ).css("visibility", "visible"),
      t(".mini-nav option").each(function () {
        var e = t(this),
          i = e.text(),
          s = "";
        switch (parseInt(e.attr("data-level"))) {
          case 1:
            s = "";
            break;
          case 2:
            s = "â€” ";
            break;
          case 3:
            s = "â€”â€” ";
            break;
          case 4:
            s = "â€”â€”â€” ";
            break;
          case 5:
            s = "â€”â€”â€”â€” ";
        }
        e.text(s + i);
      });
    /*!-Material click for menu and buttons*/
    var ve = navigator.userAgent.match(/iPhone/i) ? "touchstart" : "click";
    if (
      (t(".project-navigation a, .mobile-sticky-header-overlay").bind(
        ve,
        function (t) {}
      ),
      t(function () {
        (t.fn.clickMaterialEffect = function () {
          return this.each(function () {
            var e,
              i,
              s,
              n,
              o = t(this);
            0 === o.find(".ink").length &&
              o.prepend("<span class='ink'></span>"),
              o.addClass("ripplelink"),
              (e = o.find(".ink")).removeClass("animate"),
              e.height() ||
                e.width() ||
                ((i = Math.max(t(this).outerWidth(), o.outerHeight())),
                e.css({ height: i, width: i })),
              o.bind("mousedown", function (t) {
                clearTimeout(null),
                  (s = t.pageX - o.offset().left - e.width() / 2),
                  (n = t.pageY - o.offset().top - e.height() / 2),
                  e.css({ top: n + "px", left: s + "px" }).addClass("animate");
              }),
              o.bind("mouseup mouseleave", function (t) {
                clearTimeout(null),
                  clearTimeout(null),
                  (o._timer = setTimeout(function () {
                    e.removeClass("animate");
                  }, 400));
              });
          });
        }),
          t(
            ".rollover.material-click-effect, .post-rollover.material-click-effect, .rollover-video.material-click-effect"
          ).clickMaterialEffect();
      }),
      !dtGlobals.isMobile)
    ) {
      /*!-parallax initialisation*/
      t(
        ".stripe-parallax-bg, .fancy-parallax-bg, .page-title-parallax-bg"
      ).each(function () {
        var e = t(this),
          i = e.data("prlx-speed");
        e.parallax("50%", i),
          e.addClass("parallax-bg-done"),
          e.css("opacity", "1");
      });
      /*!-Animate fancy header elements*/
      var we = -1;
      t(
        "#fancy-header .fancy-title:not(.start-animation), #fancy-header .fancy-subtitle:not(.start-animation), #fancy-header .breadcrumbs:not(.start-animation)"
      ).each(function () {
        var e = t(this);
        e.hasClass("start-animation") ||
          e.hasClass("start-animation-done") ||
          (e.addClass("start-animation-done"),
          we++,
          setTimeout(function () {
            e.addClass("start-animation");
          }, 300 * we));
      });
    }
    if (
      (jQuery(".wpcf7").each(function () {
        var e = t(this);
        e.on("wpcf7submit", function (t) {
          e
            .find(".wpcf7-response-output")
            .wrapInner("<div class='wpcf7-not-valid-tip-text'></div>")
            .addClass("run-animation"),
            setTimeout(function () {
              e.find(".wpcf7-response-output").removeClass("run-animation");
            }, 12e3);
        }),
          e.on("wpcf7invalid", function (t) {
            setTimeout(function () {
              e.find(".wpcf7-response-output").wrapInner(
                "<div class='wpcf7-not-valid-tip-text'></div>"
              );
            }, 100);
          }),
          e.on("wpcf7mailsent", function (t) {
            setTimeout(function () {
              e.find(".wpcf7-response-output")
                .wrapInner("<div class='wpcf7-valid-tip-text'></div>")
                .addClass("wpcf7-mail-sent-ok");
            }, 100),
              setTimeout(function () {
                e.find(".wpcf7-response-output").removeClass(
                  "wpcf7-mail-sent-ok"
                );
              }, 12e3);
          }),
          e.on("invalid.wpcf7", function (t) {
            setTimeout(function () {
              e.find(".wpcf7-validation-errors").wrapInner(
                "<div class='wpcf7-not-valid-tip-text'></div>"
              );
            }, 100);
          }),
          e.on("mailsent.wpcf7", function (t) {
            setTimeout(function () {
              e.find(".wpcf7-mail-sent-ok").wrapInner(
                "<div class='wpcf7-valid-tip-text'></div>"
              );
            }, 100);
          });
      }),
      t(".dt-sticky-sidebar").length > 0)
    ) {
      if (Pt) var ye = t(".sticky-on");
      else
        ye = t(
          ".masthead:not(.side-header):not(.side-header-v-stroke) .header-bar"
        );
      if (
        ((K =
          !I.exists() ||
          I.is(":hidden") ||
          I.hasClass("top-bar-empty") ||
          I.hasClass("hide-top-bar")
            ? 0
            : I.innerHeight()),
        Bt || Rt)
      )
        var be = t(He).height() + 20;
      else if (dtLocal.themeSettings.floatingHeader.showMenu && St)
        if (o.hasClass("floating-top-bar"))
          be = dtLocal.themeSettings.floatingHeader.height + K + 20;
        else be = dtLocal.themeSettings.floatingHeader.height + 20;
      else if (E.exists()) be = E.find(".header-bar").height() + K + 20;
      else be = 0;
      new StickySidebar("#sidebar", {
        topSpacing: be,
        bottomSpacing: 20,
        viewportTop: 0,
        containerSelector: ".wf-container-main",
        innerWrapperSelector: ".sidebar-content",
        minWidth: dtLocal.themeSettings.sidebar.switchPoint,
      });
    }
    t("#mphb-booking-details")
      .find(
        ".mphb-booking-details-title, .mphb-check-in-date, .mphb-check-out-date"
      )
      .wrapAll('<div class="mphb-details-sidebar"></div>'),
      t("#mphb-price-details").appendTo(".mphb-details-sidebar"),
      !t(".footer .widget").length > 0 && t(".footer").addClass("empty-footer"),
      dtGlobals.addOnloadEvent(function () {
        t(".the7-elementor-widget:not(.the7-elementor-product-comments)").each(
          function () {
            var e = t(this),
              i = e.find(".stars a");
            i.length
              ? (i.length > 5 &&
                  (i.slice(5, i.length).remove(), (i = e.find(".stars a"))),
                e.find(".stars span").append(i.get().reverse()))
              : e
                  .find("#rating")
                  .hide()
                  .before(
                    '<p class="stars">                            <span>                                <a class="star-5" href="#">5</a>                                <a class="star-4" href="#">4</a>                                <a class="star-3" href="#">3</a>                                <a class="star-2" href="#">2</a>                                <a class="star-1" href="#">1</a>                            </span>                        </p>'
                  ),
              i.on("click", function () {
                var e = t(this),
                  i = t(this).closest("#respond").find("#rating"),
                  s = t(this).closest(".stars");
                return (
                  i.val(e.text()),
                  e.siblings("a").removeClass("active"),
                  e.addClass("active"),
                  s.addClass("selected"),
                  !1
                );
              });
          }
        ),
          t(".dt-tab-accordion-title").each(function () {
            var e = t(this);
            e.parents().hasClass("hide-tab-description") &&
            !e.parents().hasClass("hide-tab-additional")
              ? t(
                  "#tab-title-additional_information.dt-tab-accordion-title"
                ).addClass("first")
              : (e.parents().hasClass("hide-tab-additional") &&
                  !e.parents().hasClass("hide-tab-description")) ||
                (e.parents().hasClass("hide-tab-additional") &&
                  e.parents().hasClass("hide-tab-description"))
              ? t("#tab-title-reviews.dt-tab-accordion-title").addClass("first")
              : t("#tab-title-description.dt-tab-accordion-title").addClass(
                  "first"
                ),
              t(".dt-tab-accordion-title.first").next().css("display", "block"),
              e.on("click", function (e) {
                var i = t(this),
                  s = i.next();
                t(".dt-tab-accordion-title").removeClass("active"),
                  i.hasClass("active")
                    ? t(".woocommerce-Tabs-panel").slideUp("fast")
                    : (i.addClass("active"),
                      t(".woocommerce-Tabs-panel").not(s).hide(),
                      je(i.parent()),
                      s.slideDown("fast"));
              });
          }),
          t(".the7-elementor-widget.elementor-widget-tabs").each(function () {
            var e = t(this),
              i = e.find(".wc-tabs li:visible").first().attr("aria-controls");
            e.find(".wc-tabs li").removeClass("active"),
              e.find(".wc-tabs li:visible").first().addClass("active"),
              "none" !== e.find(".wc-tabs").css("display") &&
                (e.find(".panel").css("display", "none"),
                e.find("#" + i).css("display", "block")),
              window.location.hash &&
                !t(".hide-tab-eviews").length > 0 &&
                (e.find(".wc-tabs li").removeClass("active"),
                e.find(".wc-tabs li.reviews_tab").addClass("active"),
                e.find(".panel").css("display", "none"),
                e
                  .find(".woocommerce-Tabs-panel--reviews")
                  .css("display", "block")),
              e.find(".comment-form-rating .stars").length > 1 &&
                e.find(".comment-respond .stars").not(":first").remove(),
              e.find(".wc-tabs li").on("click", function () {
                var i = t(this).attr("aria-controls");
                t(this).siblings().removeClass("active"),
                  t(this).addClass("active"),
                  e.find("> .woocommerce-tabs > .panel").css("display", "none"),
                  e.find("#" + i).css("display", "block");
              });
          });
      });
    var Ce = t(".elementor-popup-modal .dialog-message");
    i.on("elementor/popup/show", Ce, function (e, i, s) {
      "undefined" === elementorFrontend ||
        elementorFrontend.isEditMode() ||
        ("yes" == s.getDocumentSettings("the7_scrollbar") &&
          s.$element.closest(".dialog-message").addClass("the7-custom-scroll")),
        t(document.body).trigger("init_price_filter"),
        s.$element
          .find(
            " .dt-sub-menu-display-on_click li.has-children, .dt-sub-menu-display-on_item_click li.has-children"
          )
          .each(function () {
            "undefined" != typeof the7ElementorMenu &&
              the7Utils.isFunction(the7ElementorMenu) &&
              t(this).the7ElementorMenu();
          }),
        s.$element
          .find(".dt-css-grid .wf-cell img, .menu-item img, .lazy-load")
          .each(function () {
            var e = t(this);
            e.attr("data-src") && e.prop("src", e.attr("data-src")),
              e.attr("data-srcset") && e.prop("srcset", e.attr("data-srcset")),
              e.removeAttr("data-src"),
              e.removeAttr("data-srcset"),
              e.removeClass("lazy-load"),
              setTimeout(function () {
                e.parent().removeClass("layzr-bg");
              }, 200);
          });
    }),
      (window.the7GetMasonryColumnsConfig = function (t) {
        var e = t.parent().hasClass("mode-masonry") ? t.parent() : t,
          i = t.width() - 1,
          s = {
            mobile: parseInt(e.attr("data-phone-columns-num")),
            desktop: parseInt(e.attr("data-desktop-columns-num")),
            tabletV: parseInt(e.attr("data-v-tablet-columns-num")),
            tabletH: parseInt(e.attr("data-h-tablet-columns-num")),
          };
        return (
          Modernizr.mq("only screen and (max-width:767px)")
            ? ((singleWidth = Math.floor(i / s.mobile) + "px"),
              (doubleWidth = 2 * Math.floor(i / s.mobile) + "px"),
              (columnsNum = s.mobile))
            : Modernizr.mq("(min-width:768px) and (max-width:991px)")
            ? ((singleWidth = Math.floor(i / s.tabletV) + "px"),
              (doubleWidth = 2 * Math.floor(i / s.tabletV) + "px"),
              (columnsNum = s.tabletV))
            : Modernizr.mq("(min-width:992px) and (max-width:1199px)")
            ? ((singleWidth = Math.floor(i / s.tabletH) + "px"),
              (doubleWidth = 2 * Math.floor(i / s.tabletH) + "px"),
              (columnsNum = s.tabletH))
            : ((singleWidth = Math.floor(i / s.desktop) + "px"),
              (doubleWidth = 2 * Math.floor(i / s.desktop) + "px"),
              (columnsNum = s.desktop)),
          {
            singleWidth: singleWidth,
            doubleWidth: doubleWidth,
            columnsNum: columnsNum,
          }
        );
      }),
      (t.fn.simpleCalculateColumns = function (t, e, i) {
        var s = parseInt(t.attr("data-width")),
          n = parseInt(t.attr("data-columns")),
          o = parseInt(t.attr("data-padding"));
        void 0 === i && (i = "px"),
          this.calculateColumns(s, n, o, null, null, null, null, i, e);
      }),
      (t.fn.calculateColumns = function (e, i, s, n, o, a, r, l, d) {
        return this.each(function () {
          var n,
            o,
            a,
            r,
            c,
            h = "",
            u = t(this),
            p = u,
            f = u.attr("data-cont-id"),
            m = t(".cont-id-" + f),
            g = !1 !== s ? s : 20,
            v = -g,
            w = g - 10,
            y = g - 5;
          g < 10 && ((w = 0), (y = 0)),
            0 === g && (v = 0),
            u.parent().hasClass("products-shortcode") && (w = g),
            u.parent().hasClass("mode-masonry") &&
              ((p = p.parent()), (m = m.parent()));
          var b = m
            .not(".bg-under-post, .content-bg-on")
            .hasClass("description-under-image");
          if (t("#col-style-id-" + f).exists())
            var C = document.getElementById("col-style-id-" + f);
          else
            ((C = document.createElement("style")).id = "col-style-id-" + f),
              C.appendChild(document.createTextNode("")),
              document.head.appendChild(C);
          var _ = t("#col-style-id-" + f);
          if (
            ((h = b
              ? " \t\t\t\t\t\t\t.cont-id-" +
                f +
                " { margin: -" +
                y +
                "px  -" +
                g +
                "px -" +
                w +
                "px ; } \t\t\t\t\t\t\t.full-width-wrap .cont-id-" +
                f +
                " { margin: " +
                -y +
                "px " +
                g +
                "px " +
                -w +
                "px ; }"
              : " \t\t\t\t\t\t\t.cont-id-" +
                f +
                " { margin: -" +
                g +
                "px; } \t\t\t\t\t\t\t.full-width-wrap .cont-id-" +
                f +
                " { margin: " +
                v +
                "px  " +
                g +
                "px; } \t\t\t\t\t\t"),
            _.html(h),
            p.hasClass("resize-by-browser-width"))
          )
            void 0 === d && (d = the7GetMasonryColumnsConfig),
              (a = (n = d.call(this, u)).singleWidth),
              (r = n.doubleWidth),
              (c = n.columnsNum);
          else {
            for (
              o = u.width() - 1, e = e || 200, i = i || 6;
              Math.floor(o / i) < e && !(--i <= 1);

            );
            "px" === l
              ? ((a = Math.floor(o / i) + "px"),
                (r = 2 * Math.floor(o / i) + "px"),
                (c = i))
              : ((a = Math.floor(1e5 / i) / 1e3 + "%"),
                (r = (2 * Math.floor(1e5 / i)) / 1e3 + "%"));
          }
          (h += b
            ? c > 1
              ? " \t\t\t\t\t\t\t.cont-id-" +
                f +
                "  .wf-cell { width: " +
                a +
                "; padding: " +
                y +
                "px " +
                g +
                "px " +
                w +
                "px; } \t\t\t\t\t\t\t.cont-id-" +
                f +
                "  .wf-cell.double-width { width: " +
                r +
                "; } \t\t\t\t\t\t"
              : " \t\t\t\t\t\t\t.cont-id-" +
                f +
                "  .wf-cell { width: " +
                a +
                "; padding: " +
                y +
                "px " +
                w +
                "px " +
                g +
                "px; } \t\t\t\t\t\t"
            : c > 1
            ? " \t\t\t\t\t\t\t.cont-id-" +
              f +
              " .wf-cell { width: " +
              a +
              ";  padding: " +
              g +
              "px; } \t\t\t\t\t\t\t.cont-id-" +
              f +
              " .wf-cell.double-width { width: " +
              r +
              "; } \t\t\t\t\t\t"
            : " \t\t\t\t\t\t\t.cont-id-" +
              f +
              " .wf-cell { width: " +
              a +
              "; padding: " +
              g +
              "px; } \t\t\t\t\t\t"),
            _.html(h);
          var x = C.sheet.cssRules.length;
          C.sheet.insertRule(".webkit-hack { }", x),
            C.sheet.deleteRule(x),
            u.trigger("columnsReady");
        });
      }),
      (t.fn.initSlider = function () {
        return this.each(function () {
          var e = t(this);
          e.data("width"), e.data("height");
          e.hasClass("royalReady") ||
            (e.postTypeScroller(), e.addClass("royalReady"));
        });
      });
    var _e = Isotope.prototype._positionItem;
    function xe(t, e, i, s) {
      t.find(i).addClass("lazy-load").addClass(s), t.layzrInitialisation();
    }
    (Isotope.prototype._positionItem = function (t, e, i, s) {
      _e(t, e, i, !0);
    }),
      (t.fn.IsoLayzrInitialisation = function (t) {
        return xe(this, t, "img[class*=iso-]", "iso-item-lazy-load");
      }),
      (t.fn.IsoLayzrJqInitialisation = function (t) {
        return xe(this, t, "img", "thumb-lazy-load-show");
      }),
      (t.fn.layzrBlogInitialisation = function (t) {
        return xe(this, t, "img", "blog-thumb-lazy-load-show");
      }),
      t(
        ".layzr-loading-on .blog-shortcode.jquery-filter.mode-list .visible"
      ).layzrBlogInitialisation();
    var Se = t(".iso-container"),
      ke = t(
        ".iso-grid:not(.jg-container, .iso-container), .blog.layout-grid .wf-container.description-under-image:not(.jg-container, .iso-container), .grid-masonry:not(.iso-container), .shortcode-blog-posts.iso-grid"
      ),
      Ie = Se.add(ke),
      Te = (dtGlobals.isoPreloader = t(
        '<div class="iso-preloader dt-posts-preload dt-posts-preload-active"><div class="dt-posts-preload-activity"></div></div>'
      )
        .appendTo("body")
        .hide());
    Ie.not(".blog-grid-shortcode").addClass("dt-isotope"),
      (window.the7ApplyColumns = function (t, e, i) {
        var n, o;
        e &&
          e.length &&
          ((t = t || 0),
          (n = e.parent().hasClass("mode-masonry") ? e.parent() : e),
          (o = parseInt(n.attr("data-padding"))),
          e.addClass("cont-id-" + t).attr("data-cont-id", t),
          e.simpleCalculateColumns(n, i),
          o > 10 && e.addClass("mobile-paddings"),
          s.on("debouncedresize", function () {
            e.simpleCalculateColumns(n, i),
              o > 10 && e.addClass("mobile-paddings");
          }));
      }),
      Ie.exists() &&
        Ie.not(".custom-iso-columns").each(function (e) {
          the7ApplyColumns(e, t(this), the7GetMasonryColumnsConfig);
        }),
      (t.fn.heightHack = function () {
        return this.each(function () {
          var e,
            i = t(this).not(".back-image");
          i.exists() &&
            (i.hasClass("height-ready") ||
              i.parents(".testimonial-thumb").exists() ||
              i.parents(".post-rollover").exists() ||
              i.parents(".slider-masonry").exists() ||
              i.parents(".rollover-thumbnails").exists() ||
              ((e = parseInt(i.attr("width")) / parseInt(i.attr("height"))),
              i
                .parents(
                  ".testimonial-vcard, .dt-format-gallery, .shortcode-blog-posts.iso-grid "
                )
                .exists() && i.wrap("<div />"),
              isNaN(e) && i[0] && (e = i[0].naturalWidth / i[0].naturalHeight),
              i
                .parent()
                .not(".img-ratio-wrapper")
                .css({
                  "padding-bottom": 100 / e + "%",
                  height: 0,
                  display: "block",
                }),
              i.parents(".dt-team-masonry-shortcode").exists() &&
                "none" !== i.parent().css("max-width") &&
                i.parents(".team-media").addClass("apply-max-width"),
              i.attr("data-ratio", e).addClass("height-ready")));
        });
      }),
      (t.fn.IsoInitialisation = function (e, i, s, n) {
        return this.each(function () {
          var s = t(this);
          s.hasClass("iso-item-ready") ||
            (s.isotope({
              itemSelector: e,
              layoutMode: i,
              stagger: 30,
              resize: !1,
              transitionDuration: 0,
              equalheight: n,
              hiddenStyle: { opacity: 0 },
              visibleStyle: { opacity: 1 },
              masonry: { columnWidth: 1 },
              getSortData: {
                date: function (e) {
                  return t(e).attr("data-date");
                },
                name: function (e) {
                  return t(e).attr("data-name");
                },
              },
              customSorters: { name: window.the7LocaleSensitiveStringsCompare },
            }),
            s.addClass("iso-item-ready"));
        });
      }),
      t(".iso-container, .portfolio-grid").each(function () {
        if (t(this).parent().hasClass("mode-masonry")) var e = null;
        else e = t(this);
        t(
          ".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-categories a"
        ).on("click.presscorFilterCategories", function (i) {
          var s = t(this).attr("data-filter");
          return null != e && e.isotope({ filter: s }), !1;
        }),
          t(
            ".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-extras .filter-by a"
          ).on("click", function (i) {
            var s = t(this).attr("data-by"),
              n = t(this)
                .parents(".filter-extras")
                .find(".filter-sorting > a.act")
                .first()
                .attr("data-sort");
            return (
              null != e && e.isotope({ sortBy: s, sortAscending: "asc" == n }),
              !1
            );
          }),
          t(
            ".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-extras .filter-sorting a"
          ).on("click", function (i) {
            var s = t(this).attr("data-sort"),
              n = t(this)
                .parents(".filter-extras")
                .find(".filter-by > a.act")
                .first()
                .attr("data-by");
            return (
              null != e && e.isotope({ sortBy: n, sortAscending: "asc" == s }),
              !1
            );
          });
      }),
      t(".dt-css-grid .wf-cell.visible").IsoLayzrJqInitialisation(),
      (Se.exists() || ke.exists()) &&
        (Te.fadeIn(50),
        Ie.not(".blog-grid-shortcode").each(function () {
          var e = t(this),
            i = e;
          e.hasClass("mode-masonry") && (i = e.find(".dt-isotope")),
            i.parent().hasClass("the7-elementor-widget") ||
              t(".preload-me", i).heightHack(),
            t(".slider-masonry", i).initSlider(),
            i.one("columnsReady", function () {
              if (i.hasClass("iso-container"))
                i.IsoInitialisation(".iso-item", "masonry", 400);
              else {
                var e = !0;
                (i.parent().hasClass("gradient-overlay-layout-list") ||
                  i.parent().hasClass("content-rollover-layout-list")) &&
                  (e = !1),
                  i.IsoInitialisation(".wf-cell", "fitRows", 400, e);
              }
              i.isotope("on", "layoutComplete", function (e) {
                for (var s = 0; s < e.length; s++) {
                  e[s], t(this);
                  i.trigger("IsoReady");
                }
              }),
                i
                  .parent(
                    ".content-rollover-layout-list:not(.disable-layout-hover)"
                  )
                  .find(".post-entry-wrapper")
                  .clickOverlayGradient(),
                i.one("IsoReady", function () {
                  var t = i;
                  i.parent().hasClass("jquery-filter") &&
                    "none" != i.parent().attr("data-pagination-mode") &&
                    (t = i.find(".wf-cell.visible")),
                    t.IsoLayzrJqInitialisation(),
                    setTimeout(function () {
                      i.isotope("layout");
                    }, 350);
                });
            }),
            i.on("columnsReady", function () {
              t(".slider-masonry", i).hasClass("royalReady") &&
                t(".slider-masonry", i).each(function () {
                  var e = t(this).parents(".ts-wrap").data("thePhotoSlider");
                  void 0 !== e && e.update();
                }),
                i
                  .parent(
                    ".content-rollover-layout-list:not(.disable-layout-hover)"
                  )
                  .find(".post-entry-wrapper")
                  .clickOverlayGradient(),
                i.isotope("layout");
            });
        }),
        Te.stop().fadeOut(300)),
      /*!-categories filter*/ (window.the7ApplyGeneralFilterHandlers =
        function (e) {
          e.exists() &&
            e.find("> a").on("click", function (e) {
              var i = t(this);
              if (void 0 === arguments.callee.dtPreventD) {
                var s = i.parents(".filter").first();
                (arguments.callee.dtPreventD = !0),
                  s.hasClass("without-isotope") &&
                    (arguments.callee.dtPreventD = s.hasClass("with-ajax"));
              }
              e.preventDefault(),
                i.trigger("mouseleave"),
                i.hasClass("act") && !i.hasClass("show-all")
                  ? (e.stopImmediatePropagation(),
                    i.removeClass("act"),
                    i.siblings("a.show-all").trigger("click"))
                  : (i.siblings().removeClass("act"),
                    i.addClass("act"),
                    arguments.callee.dtPreventD ||
                      (window.location.href = i.attr("href")));
            });
        }),
      (window.the7ApplyGeneralOrderingSwitchHandlers = function (t) {
        if (t.exists()) {
          t.prev(".act").length > 0
            ? t.addClass("left-act")
            : t.next(".act").length > 0
            ? t.addClass("right-act")
            : (t.removeClass("right-act"), t.removeClass("left-act"));
          var e = t.parents(".filter").first();
          t.on("click", function () {
            e.hasClass("without-isotope")
              ? t.hasClass("right-act")
                ? t.prev("a")[0].click()
                : t.hasClass("left-act") && t.next("a")[0].click()
              : t.hasClass("right-act")
              ? t.prev("a").trigger("click")
              : t.hasClass("left-act") && t.next("a").trigger("click");
          });
        }
      }),
      (window.the7ApplyGeneralOrderingSwitchEffects = function (e) {
        if (e.exists()) {
          var i = t(".filter-switch", e);
          i.append("<span class='filter-switch-toggle'></span>"),
            i.each(function () {
              the7ApplyGeneralOrderingSwitchHandlers(t(this));
            }),
            t(".filter-switch .filter-switch-toggle", e).on(
              "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
              function (e) {
                t(this).parent().removeClass("pressed");
              }
            ),
            t(".filter-extras a", e).on(
              "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
              function (e) {
                t(this).removeClass("pressed");
              }
            ),
            Modernizr.touch
              ? (i.on("touchstart", function (e) {
                  t(".filter-switch").removeClass("pressed"),
                    t(this).addClass("pressed");
                }),
                t(".filter-extras a", e).on("touchstart", function (e) {
                  t(".filter-extras").removeClass("pressed"),
                    t(this).parent(".filter-extras").addClass("pressed");
                }))
              : (i.on("mousedown", function (e) {
                  t(".filter-switch").removeClass("pressed"),
                    t(this).addClass("pressed"),
                    setTimeout(function () {
                      t(this).removeClass("pressed");
                    }, 600);
                }),
                t(".filter-extras a", e).each(function () {
                  t(this).on("mousedown", function (e) {
                    t(".filter-extras").removeClass("pressed"),
                      t(this).addClass("pressed"),
                      setTimeout(function () {
                        t(this).removeClass("pressed");
                      }, 600);
                  });
                })),
            t(".filter-extras a", e).on("click", function (e) {
              var s = t(this);
              if (void 0 === arguments.callee.dtPreventD) {
                var n = s.parents(".filter").first();
                (arguments.callee.dtPreventD = !0),
                  n.hasClass("without-isotope") &&
                    (arguments.callee.dtPreventD = n.hasClass("with-ajax"));
              }
              arguments.callee.dtPreventD && e.preventDefault(),
                s.siblings().removeClass("act"),
                s.addClass("act"),
                i.each(function () {
                  var e = t(this);
                  e.prev(s).hasClass("act")
                    ? (e.addClass("left-act"), e.removeClass("right-act"))
                    : e.next(s).hasClass("act")
                    ? (e.addClass("right-act"), e.removeClass("left-act"))
                    : (e.removeClass("right-act"), e.removeClass("left-act"));
                });
            });
        }
      }),
      t(".filter-categories").each(function () {
        the7ApplyGeneralFilterHandlers(t(this));
      }),
      t(".filter").each(function () {
        the7ApplyGeneralOrderingSwitchEffects(t(this));
      }),
      t(
        ".mode-list .filter-categories > a:not(.show-all), .dt-css-grid-wrap .filter-categories > a:not(.show-all)"
      ).each(function () {
        ($this = t(this)),
          ($dataFiltr = $this.attr("data-filter")),
          ($newDataFilter = $dataFiltr.substring(1, $dataFiltr.length)),
          $this.attr("data-filter", $newDataFilter),
          $this.parents().removeClass("iso-filter");
      }),
      (window.the7ShortcodesFilterConfig = function (t) {
        var e = {},
          i = t;
        return (
          t.hasClass("dt-css-grid") && (i = t.parent()),
          (e.filterControls = i.find(".filter-categories")),
          (e.pageControls = i.find(".paginator")),
          (e.sortControls = i.find(".filter-by")),
          (e.orderControls = i.find(".filter-sorting")),
          (e.defaultSort = i.find(".filter-by .act").attr("data-by")),
          (e.defaultOrder = i.find(".filter-sorting .act").attr("data-sort")),
          (e.paginationMode = i.attr("data-pagination-mode")),
          (e.pageLimit = i.attr("data-post-limit")),
          (e.useFilters = !0),
          (e.useSorting = !0),
          (e.controlsSelecter = "a"),
          (e.controlsSelecterChecked = "a.act"),
          (e.defaultFilter = "*"),
          (e.selectAll = "*"),
          (e.loadMoreButtonLabel = dtLocal.moreButtonText.loadMore),
          (e.customSorters = {
            name: function (t, e) {
              return window.the7LocaleSensitiveStringsCompare(
                t.name.toLowerCase(),
                e.name.toLowerCase()
              );
            },
          }),
          e
        );
      }),
      (t.fn.shortcodesFilter = function (e) {
        var i = t(this);
        function n() {
          if (
            (i.hasClass("dt-css-grid")
              ? ($element = i.parent())
              : ($element = i),
            $element.length && $element.hasClass("lazy-loading-mode"))
          ) {
            var t = $element.find(".button-load-more");
            if (!t.parent().hasClass("hidden")) {
              var e = t.offset();
              e &&
                s.scrollTop() + s.height() > e.top - 2 * s.height() &&
                t.trigger("click");
            }
          }
        }
        i.Filterade(e),
          i.on("updateReady", function () {
            ti(),
              i
                .parent(
                  ".content-rollover-layout-list:not(.disable-layout-hover)"
                )
                .find(".post-entry-wrapper")
                .clickOverlayGradient();
          }),
          s.on("scroll", function () {
            n();
          }),
          n();
      }),
      t(
        ".blog-shortcode.mode-list.jquery-filter, .jquery-filter .dt-css-grid:not(.custom-pagination-handler)"
      ).each(function () {
        var e = t(this);
        e.shortcodesFilter(the7ShortcodesFilterConfig(e));
      }),
      (window.the7ApplyMasonryWidgetCSSGridFiltering = function (t) {
        var e;
        t &&
          t.length &&
          (((e = the7ShortcodesFilterConfig(t)).pagerClass =
            "page-numbers filter-item"),
          (e.previousButtonLabel = "â†"),
          (e.nextButtonLabel = "â†’"),
          t.shortcodesFilter(e));
      });
    var ze = t(
      ".content-rollover-layout-list:not(.disable-layout-hover) .dt-css-grid .post-entry-wrapper"
    );
    function Le() {
      var t = 0.01 * window.innerHeight;
      document.documentElement.style.setProperty("--the7-vh", t + "px");
    }
    s
      .on("debouncedresize", function (e) {
        if (
          (dtGlobals.resizeCounter++,
          the7Utils.isFunction(t.fn.calcPics) &&
            t(".instagram-photos").calcPics(),
          a.hasClass("boxed"))
        ) {
          var i = a.css("maxWidth"),
            r = i.indexOf("px") >= 0,
            l = i.indexOf("%") >= 0;
          r &&
            (T.addClass("width-in-pixel"),
            void 0 !== He && He.addClass("width-in-pixel")),
            l &&
              (t(".masthead.full-width:not(.side-header)").css({
                width: a.width(),
              }),
              void 0 !== He &&
                He.find(".top-bar-bg").length > 0 &&
                He.find(".top-bar-bg").css({ width: a.width() }),
              o.hasClass("phantom-sticky") &&
                t(".top-bar-bg").length > 0 &&
                t(".top-bar-bg").css({ width: a.width() }));
        }
        var d;
        ze.clickOverlayGradient(),
          window.innerWidth >=
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
            (a.removeClass("show-mobile-header"),
            a.addClass("closed-mobile-header"),
            o.removeClass("show-sticky-mobile-header"),
            o
              .removeClass("show-overlay-mobile-header")
              .addClass("closed-overlay-mobile-header"),
            t(".mobile-sticky-header-overlay").removeClass("active"),
            t(".dt-mobile-menu-icon").removeClass("active"),
            n.removeClass("menu-open")),
          window.innerWidth <=
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
          !o.hasClass("responsive-off")
            ? (t(".masthead").hasClass("masthead-mobile") ||
                t(".masthead:not(.mixed-header):not(#phantom)").addClass(
                  "masthead-mobile"
                ),
              t(".masthead").hasClass("masthead-mobile-header") ||
                (t(".masthead:not(.side-header):not(#phantom)").addClass(
                  "masthead-mobile-header"
                ),
                t(
                  "body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
                ).addClass("masthead-mobile-header")),
              E.exists() &&
                (E.removeClass("sticky-top-line-on sticky-top-line-on"),
                (Ft = !1)),
              t(".mobile-header-scrollbar-wrap").css({
                "max-width": t(".dt-mobile-header ").width() - 13,
              }))
            : (t(".masthead:not(.mixed-header):not(#phantom)").removeClass(
                "masthead-mobile"
              ),
              t(".masthead:not(.side-header):not(#phantom)").removeClass(
                "masthead-mobile-header"
              ),
              t(
                "body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
              ).removeClass("masthead-mobile-header"),
              t(".masthead").hasClass("desktop-side-header") ||
                t(
                  "body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"
                ).addClass("desktop-side-header")),
          window.innerWidth <=
            dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
          window.innerWidth >
            dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
          !o.hasClass("responsive-off")
            ? t(".left-widgets", I).find(".in-top-bar-left").length > 0 ||
              t(".top-bar .right-widgets").find(".in-top-bar-right").length > 0
              ? I.removeClass("top-bar-empty")
              : I.addClass("top-bar-empty")
            : window.innerWidth <=
                dtLocal.themeSettings.mobileHeader.secondSwitchPoint &&
              !o.hasClass("responsive-off")
            ? t(".left-widgets", I).find(".in-top-bar").length > 0
              ? I.removeClass("top-bar-empty")
              : I.addClass("top-bar-empty")
            : !t(".mini-widgets", I).find(".show-on-desktop").length > 0
            ? I.addClass("top-bar-empty")
            : I.removeClass("top-bar-empty"),
          t(".mini-nav select").trigger("render"),
          t.fancyFeaderCalc(),
          t(".dt-default").each(function () {
            var e = t(this),
              i = e.attr("data-min-height");
            t.isNumeric(i)
              ? e.css({ minHeight: i + "px" })
              : i
              ? i.search("%") > 0
                ? e.css({ minHeight: s.height() * (parseInt(i) / 100) + "px" })
                : e.css({ minHeight: i })
              : e.css({ minHeight: 0 });
          }),
          (d = t(".floating-content")).exists() &&
            t(".preload-me").loaded(
              null,
              function () {
                var e = d.siblings(".project-wide-col").height(),
                  i = d.height(),
                  n = d.offset(),
                  o = 0;
                I.length > 0 &&
                  t(".phantom-sticky").length > 0 &&
                  (o = I.height());
                var a = t(".project-post").offset();
                s.on("scroll", function () {
                  var t = "0";
                  window.innerWidth > 1050 &&
                    dtGlobals.winScrollTop + He.height() > n.top &&
                    (t =
                      dtGlobals.winScrollTop + He.height() + i + 40 < a.top + e
                        ? dtGlobals.winScrollTop -
                          n.top +
                          He.height() +
                          5 -
                          o +
                          "px)"
                        : e - i - 40 - o + "px)"),
                    d.css({ transform: "translateY(" + t + ")" });
                });
              },
              !0
            );
        var c = t(".boxed");
        c.length > 0 &&
          t(
            ".header-side-left.footer-overlap:not(.sticky-header) .boxed .footer, .left-side-line.footer-overlap .boxed .footer"
          ).css({ right: s.width() - (c.offset().left + c.outerWidth()) }),
          t(".footer-overlap .footer").css({ opacity: 1 }),
          t(".mobile-false .footer-overlap .page-inner").css({
            "min-height": window.innerHeight - t(".footer").innerHeight(),
            "margin-bottom": t(".footer").innerHeight(),
          }),
          t(".mobile-false .footer-overlap .footer").css({
            bottom:
              parseInt(o.css("padding-bottom")) +
              parseInt(o.css("margin-bottom")),
          });
      })
      .trigger("debouncedresize"),
      t(window).trigger("the7_widget_resize"),
      Le(),
      s.on("the7-resize-height-debounce", Le),
      window.addEventListener("orientationchange", Le);
    var Ee = t("html, body"),
      Pe = t(".phantom-sticky"),
      Oe = t(".sticky-top-line"),
      Ae = ((St = Pe.exists()), Oe.exists()),
      De = t(".sticky-mobile-header").exists(),
      Me = St || Ae,
      He = null;
    ye = null;
    function Fe() {
      window.innerWidth < dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
      !o.hasClass("responsive-off")
        ? De && (He = t(".masthead-mobile-header"))
        : (He = Me
            ? t(".masthead")
            : De && !t(".mobile-false").length > 0
            ? t(".masthead-mobile-header")
            : t("#phantom"));
      var e = t(".mobile-header-bar");
      e.length > 0 && "none" !== e.css("display")
        ? ((ye = e),
          Ae &&
            (ye = t(
              ".sticky-top-line.masthead-mobile-header .mobile-header-bar"
            )),
          (St || Ae) &&
            (He =
              t(".sticky-header .masthead.side-header").length > 0 ||
              t(".overlay-navigation .masthead.side-header").length > 0
                ? e.parent(".masthead:not(.side-header)")
                : e.parent()))
        : ((ye = t(".masthead:not(.side-header):not(.side-header-v-stroke)")),
          o.hasClass("floating-top-bar") || (ye = ye.find(".header-bar")));
    }
    Fe();
    var We = function (t, e, i, s) {
        void 0 === s && (s = "easeInOutQuad"),
          Ee.stop().animate(
            { scrollTop: t },
            { duration: e, easing: s, complete: i }
          );
      },
      Be = function () {
        var e = (function () {
          var t = NaN;
          try {
            t = parseInt(o.css("--the7-anchor-scroll-offset"));
          } catch (t) {}
          return t;
        })();
        if (!isNaN(e)) return e;
        var i = null,
          s = 0,
          n = o.hasClass("overlay-navigation");
        window.innerWidth <
          dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
          !o.hasClass("responsive-off") &&
          De &&
          (_t
            ? (i = t(".masthead-mobile-header .mobile-header-bar"))
            : Ft
            ? (i = Oe)
            : ((i = t(ye, He)),
              Me &&
                "solid" === He.css("border-bottom-style") &&
                (s = parseInt(He.css("border-bottom-width"))))),
          n
            ? null == i && Ae && (i = Oe)
            : null == i &&
              (i =
                St && Pt
                  ? o.hasClass("floating-top-bar")
                    ? t(".masthead")
                    : t(".header-bar")
                  : Ae
                  ? t(".masthead").hasClass("mixed-floating-top-bar")
                    ? Oe
                    : Oe.find(".header-bar")
                  : He);
        var a = 0;
        return i && i.length && (a = i.height()), a + s;
      },
      Re = function (t, e = 0) {
        return t.offset().top + 1 + e - Be();
      },
      je = function (e, i, n, a = !1, r = 0) {
        void 0 !== i && "" !== i && (location.hash = i),
          Fe(),
          t(".elementor-owl-carousel-call").each(function () {
            t(this).the7ElementorOwlCarousel();
          });
        var l,
          d = 0,
          c = o.hasClass("overlay-navigation"),
          h = "easeInOutQuad";
        a || (d = Re(e, r)),
          (l = void 0 === n ? s.scrollTop() : n.offset().top);
        var u,
          p = d - l;
        Math.abs(p) > window.innerHeight &&
          ((u = p > 0 ? d - window.innerHeight : d + window.innerHeight),
          s.scrollTop(u),
          (h = "easeOutQuart"));
        t.closeMobileHeader(),
          c && t.closeSideHeader(),
          We(
            d,
            600,
            function () {
              if (
                (c ||
                  setTimeout(function () {
                    t.closeSideHeader();
                  }, 50),
                !a)
              ) {
                var i = Re(e, r);
                d.toFixed() !== i.toFixed() &&
                  (!(function (t, e, i, s) {
                    t.one("animationend", function () {
                      var n = i(t, s);
                      n !== e && We(n);
                    });
                  })(e, i, Re, r),
                  We(i));
              }
            },
            h
          );
      };
    window.the7ScrollToTargetEl = je;
    var $e = function (e, i, s) {
        if (!e) return !1;
        var n = t("#" + e),
          o = !1;
        if (!n.length) {
          if ("up" !== e) return !1;
          o = !0;
        }
        return je(n, i, s, o), !0;
      },
      Ge = function (t) {
        return t.match("^#!")
          ? t.substring(3)
          : t.match("^#")
          ? t.substring(1)
          : t.substring(t.indexOf("#")).substring(3);
      };
    function Ye(e) {
      e.on("click", function (e) {
        if (
          !t(e.target).parent().hasClass("next-level-button") &&
          clickAnchorLink(t(this))
        )
          return e.preventDefault(), !1;
      });
    }
    dtGlobals.addOnloadEvent(function () {
      var e = window.location.hash,
        i = Ge(e);
      setTimeout(function () {
        if (i) {
          t(".menu-item a").parent("li").removeClass("act"),
            t(".dt-nav-menu a").removeClass("active-item");
          var s = t(".menu-item a[href='" + e + "']"),
            n = t(".dt-nav-menu a[href='" + e + "']");
          s.parent("li").addClass("act"),
            n.addClass("active-item"),
            t(".menu-item a[href*='" + e + "']")
              .parent("li")
              .addClass("act"),
            t(".dt-nav-menu a[href*='" + e + "']").addClass("active-item");
          var o = s.parents("li");
          if (
            o.find(
              ".sub-nav li.act, .sub-menu li.act, .vertical-sub-nav li.act"
            ).length
          ) {
            var a = o.find(" > .sub-nav, .sub-menu, .vertical-sub-nav");
            o.addClass("open-sub"), a.stop(!0, !0).slideDown(100);
          }
          setTimeout(function () {
            $e(i);
          }, 300);
        } else {
          var r = t(".menu-item > a[href='#!/up']");
          r.length > 0 && r.parent("li").addClass("act");
        }
      }, 300);
    }),
      s.on("the7-resize-width", function () {
        Fe();
      }),
      /*!-scroll to anchor*/
      (window.clickAnchorLink = function (e) {
        const i = e.attr("href"),
          s = Ge(i),
          n = $e(s, i, e);
        if (
          (n && t(window).trigger("the7.anchorScrolling", [s, i, e]),
          e.parents().hasClass("elementor-popup-modal"))
        ) {
          const t = e
            .parents(".elementor-location-popup")
            .attr("data-elementor-id");
          elementorFrontend.documentsManager.documents[t].getModal().hide();
        }
        return (
          t(".menu-item a").parent("li").removeClass("act"),
          t(".dt-nav-menu a").removeClass("active-item"),
          e.parents("li.menu-item ").addClass("act"),
          e.parents().hasClass("dt-nav-menu") && e.addClass("active-item"),
          n
        );
      }),
      o.on(
        "click",
        '.anchor-link[href^="#!"], .anchor-link a[href^="#!"], .logo-box a[href^="#!"], .branding a[href^="#!"], #branding-bottom a[href^="#!"], .mobile-branding a[href^="#!"],  .woocommerce-product-rating a.woocommerce-review-link[href^="#"]',
        function (e) {
          if (clickAnchorLink(t(this))) return e.preventDefault(), !1;
        }
      ),
      Ye(t('.menu-item > a[href*="#!"]')),
      i.on(
        "elementor/popup/show",
        t(".elementor-popup-modal .dialog-message"),
        function (t, e, i) {
          Ye(i.$element.find('.menu-item > a[href*="#!"]'));
        }
      );
    Ce = t(".elementor-popup-modal .dialog-message");
    i.on("elementor/popup/show", Ce, function (e, i, s) {
      t("#elementor-popup-modal-" + i + " .elementor-location-popup");
      s.$element.find('.menu-item > a[href*="#!"]').on("click", function (e) {
        if (
          !t(e.target).parent().hasClass("next-level-button") &&
          clickAnchorLink(t(this))
        )
          return e.preventDefault(), !1;
      });
    }),
      i.on("elementor/popup/show", function (e, i, s) {
        var n = window.location.hash;
        if (Ge(n)) {
          t(".menu-item a").parent("li").removeClass("act"),
            t(".dt-nav-menu a").removeClass("active-item");
          var o = t(".menu-item a[href='" + n + "']"),
            a = t(".dt-nav-menu a[href='" + n + "']");
          o.parent("li").addClass("act"),
            a.addClass("active-item"),
            t(".menu-item a[href*='" + n + "']")
              .parent("li")
              .addClass("act"),
            t(".dt-nav-menu a[href*='" + n + "']").addClass("active-item");
          var r = o.parents("li");
          if (
            r.find(
              ".sub-nav li.act, .sub-menu li.act, .vertical-sub-nav li.act"
            ).length
          ) {
            var l = r.find(" > .sub-nav, .sub-menu, .vertical-sub-nav");
            r.addClass("open-sub"), l.stop(!0, !0).slideDown(100);
          }
          elementorFrontend.elements.$window.one(
            "the7.anchorScrolling.elementorPopup",
            function () {
              s.getModal() && s.getModal().hide();
            }
          );
        } else {
          var d = t(".menu-item > a[href='#!/up']");
          d.length > 0 && d.parent("li").addClass("act");
        }
      }),
      i.on("elementor/popup/hide", function () {
        elementorFrontend.elements.$window.off(
          "the7.anchorScrolling.elementorPopup"
        );
      });
    var Ne = t(".one-page-row div[data-anchor^='#']"),
      qe = t(
        ".one-page-row .vc_row[id], .one-page-row .vc_section[id], .elementor-element[id], .elementor-menu-anchor[id]"
      ),
      Ue = t.merge(Ne, qe),
      Ve = null;
    function Xe(e) {
      if (
        (t('.menu-item a[href^="#!"]').parents("li").removeClass("act"),
        t('.dt-nav-menu a[href^="#!"]').removeClass("active-item"),
        e)
      ) {
        var i = t('.menu-item a[href="' + e + '"]'),
          s = t('.dt-nav-menu a[href="' + e + '"]');
        i.parents("li").addClass("act"), s.addClass("active-item");
      }
    }
    Ne.length > 0 ? (Ve = Ne.first()) : qe.length > 0 && (Ve = qe.first()),
      (Ne = null),
      (qe = null);
    var Ze = t('.menu-item > a[href="#!/up"]'),
      Qe = o.hasClass("is-scroll"),
      Ke = null;
    function Je(t, e) {
      var i;
      return (
        t.is(":visible") &&
          dtGlobals.winScrollTop >= Math.floor(t.offset().top - e) &&
          (i = "#!/" + t.attr("id")),
        i
      );
    }
    /*!-set active menu item on scroll*/ function ti() {
      var e = t(".dt-isotope"),
        i = t(
          ".iso-grid .wf-cell:not(.shown), .dt-css-grid .wf-cell:not(.shown)"
        );
      if ((i.exists() && window.the7ProcessEffects(i), e.exists())) {
        e.each(function () {
          0;
          var e = t(this).find(".wf-cell");
          e.exists() && window.the7ProcessEffects(e);
        });
      } else {
        var s = t(".iso-item:not(.shown)");
        if (!s.exists()) return;
        window.the7ProcessEffects(s);
      }
    }
    s.scroll(function (e) {
      if (!Qe) {
        var i,
          s = Be();
        Ue.each(function () {
          var e = t(this);
          e.hasClass("wpb_animate_when_almost_visible") &&
            e.one(
              "webkitAnimationEnd oanimationend msAnimationEnd animationend",
              function (t) {
                Xe(Je(e, s));
              }
            );
          var n = Je(e, s);
          n && (i = n);
        }),
          Ze.length > 0 &&
            null !== Ve &&
            dtGlobals.winScrollTop < Ve.offset().top - s &&
            (i = "#!/up"),
          i !== Ke && ((Ke = i), Xe(i));
      }
    }),
      (t.fn.resetEffects = function (e) {
        return this.each(function () {
          t(this)
            .find(".iso-item.shown, .wf-cell.shown")
            .removeClass("start-animation")
            .removeClass("animation-triggered")
            .removeClass("shown");
        });
      });
    var ei = {
      xhr: !1,
      settings: !1,
      launch: function (e) {
        var i = this;
        e && (this.settings = e), this.xhr && this.xhr.abort();
        var n = "presscore_template_ajax";
        "action" in this.settings && (n = this.settings.action),
          (this.xhr = t.post(
            e.ajaxurl,
            {
              action: n,
              postID: e.postID,
              paged: e.paged,
              targetPage: e.targetPage,
              term: e.term,
              orderby: e.orderBy,
              order: e.order,
              nonce: e.nonce,
              visibleItems: e.visibleItems,
              contentType: e.contentType,
              pageData: e.pageData,
              sender: e.sender,
            },
            function (n) {
              if (n.success) {
                var o = jQuery(n.html),
                  a = e.targetContainer;
                parseInt(a.attr("data-width")),
                  parseInt(a.attr("data-max-width")),
                  parseInt(a.attr("data-padding"));
                if (
                  ((isIsotope = "grid" == e.layout || "masonry" == e.layout),
                  (itemsToDeleteLength = 0),
                  (trashItems = new Array()),
                  (sortBy = n.orderby.replace("title", "name")),
                  (sortAscending = "asc" == n.order.toString()),
                  n.newNonce && (dtLocal.ajaxNonce = n.newNonce),
                  void 0 !== n.itemsToDelete &&
                    (itemsToDeleteLength = n.itemsToDelete.length),
                  isIsotope && itemsToDeleteLength > 0)
                ) {
                  for (let t = 0; t < n.itemsToDelete.length; t++)
                    trashItems.push(
                      '.wf-cell[data-post-id="' + n.itemsToDelete[t] + '"]'
                    );
                  a.isotope("remove", a.find(trashItems.join(",")));
                } else
                  isIsotope ||
                    ("filter" != e.sender && "paginator" != e.sender) ||
                    a.find(".wf-cell, article").remove();
                o.length > 0
                  ? (a.append(o),
                    (dtGlobals.ajaxContainerItems = a
                      .find("div.wf-cell, .project-even, .project-odd")
                      .not(".animation-triggered")),
                    isIsotope
                      ? (t(".preload-me", a).heightHack(),
                        t(".slider-masonry", a).initSlider(),
                        t(".slider-masonry", a).css("visibility", "visible"),
                        a.isotope("addItems", o),
                        "media" != e.contentType
                          ? a.isotope({
                              sortBy: sortBy,
                              sortAscending: sortAscending,
                            })
                          : a.isotope({ sortBy: "original-order" }),
                        a.isotope("layout"),
                        i.init(),
                        a.IsoLayzrInitialisation(),
                        a.layzrInitialisation())
                      : (t(".slider-masonry", a).initSlider(),
                        t("ul.photoSlider:not(.slider-masonry)").each(
                          function () {
                            t(this).postTypeScroller();
                          }
                        ),
                        t("ul.photoSlider").css("visibility", "visible"),
                        "jgrid" == e.layout && a.collagePlus(dtGlobals.jGrid),
                        i.init(),
                        a.IsoLayzrInitialisation(".mobile-true"),
                        a.layzrInitialisation()),
                    void 0 !== e.afterSuccessInit && e.afterSuccessInit(n),
                    s.trigger("dt.ajax.content.appended"))
                  : isIsotope &&
                    a.isotope({ sortBy: sortBy, sortAscending: sortAscending });
              }
              void 0 !== e.afterResponce && e.afterResponce(n), ti();
            }
          ));
      },
      init: function () {
        switch (this.settings.contentType) {
          case "portfolio":
            this.initPortfolio();
            break;
          case "albums":
            this.initAlbums();
            break;
          case "media":
            this.initMedia();
            break;
          case "blog":
          case "testimonials":
            this.basicInit();
        }
      },
      initPortfolio: function () {
        this.basicInit();
      },
      initAlbums: function () {
        this.basicInit();
      },
      initMedia: function () {
        this.basicInit();
      },
      basicInit: function () {
        var e = this.settings.targetContainer;
        t(".dt-pswp-item, .dt-gallery-container a", e).addPhotoswipeWrap(),
          t(".dt-gallery-container", e).initPhotoswipe(),
          t(".photoswipe-wrapper", e).initPhotoswipe(),
          e.photoswipeGallery(".dt-gallery-container.wf-container"),
          t(
            ".rollover, .rollover-video, .post-rollover, .rollover-project .show-content",
            e
          ).addRollover(),
          the7Utils.isFunction(t.fn.hoverdir) &&
            (t(".mobile-false .hover-grid .rollover-project").each(function () {
              t(this).hoverdir();
            }),
            t(".mobile-false .hover-grid-reverse .rollover-project ").each(
              function () {
                t(this).hoverdir({ inverse: !0 });
              }
            )),
          t(
            ".mobile-true .rollover-project a.link.show-content, .hover-style-one article:not(.description-off) .rollover-project > a, .hover-style-two article:not(.description-off) .rollover-project > a, .hover-style-three article:not(.description-off) .rollover-project > a"
          ).on("click", function (t) {
            t.preventDefault();
          }),
          t(".dt-trigger-first-pswp", e)
            .not(".pspw-ready")
            .on("click", function () {
              var e = t(this).parents("article.post");
              if (e.length > 0) {
                var i = e.find("a.dt-pswp-item");
                i.length > 0 && i.first().trigger("click");
              }
              return !1;
            })
            .addClass("mfp-ready"),
          t(".mobile-true .rollover-project").touchNewHover(),
          the7Utils.isFunction(t.fn.triggerHoverClick) &&
            t(
              ".mobile-false .rollover-project:not(.rollover-active) .rollover-content, .buttons-on-img:not(.rollover-active) .rollover-content"
            ).triggerHoverClick(),
          the7Utils.isFunction(t.fn.triggerHoverClick) &&
            t(
              ".mobile-false .rollover-project.forward-post"
            ).triggerHoverClick(),
          the7Utils.isFunction(t.fn.triggerHoverClick) &&
            t(
              ".mobile-false .rollover-project.rollover-active, .mobile-false .buttons-on-img.rollover-active"
            ).followCurentLink(),
          the7Utils.isFunction(t.fn.triggerAlbumsClick) &&
            t(
              ".mobile-false .albums .rollover-project, .mobile-false .albums .buttons-on-img, .mobile-false .archive .type-dt_gallery .buttons-on-img"
            ).triggerAlbumsClick(),
          the7Utils.isFunction(t.fn.triggerAlbumsTouch) &&
            t(
              ".mobile-true .albums .rollover-project, .mobile-true .albums .buttons-on-img, .mobile-true .archive .type-dt_gallery .buttons-on-img"
            ).triggerAlbumsTouch(),
          the7Utils.isFunction(t.fn.triggerPostClick) &&
            t(
              ".mobile-false .content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post, .mobile-false .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post"
            ).triggerPostClick(),
          the7Utils.isFunction(t.fn.touchforwardToPost) &&
            t(
              ".mobile-true .rollover-project.forward-post"
            ).touchforwardToPost(),
          the7Utils.isFunction(t.fn.touchHoverImage) &&
            t(".mobile-true .buttons-on-img").touchHoverImage(),
          t(".hover-scale .rollover-project").scaleInHover(),
          the7Utils.isFunction(t.fn.addIconToLinks) &&
            t(".links-container a").addIconToLinks();
      },
    };
    function ii(e) {
      var i = e.find(".filter.with-ajax").first(),
        s = e.find(".wf-container.with-ajax, .articles-list.with-ajax").first(),
        n = i.find(".filter-categories a.act"),
        o = i.find(".filter-by a.act"),
        a = i.find(".filter-sorting a.act"),
        r = parseInt(s.attr("data-cur-page")),
        l = new Array(),
        d =
          n.length > 0
            ? n.attr("data-filter").replace(".category-", "").replace("*", "")
            : "";
      return (
        "0" == d && (d = "none"),
        s.hasClass("dt-isotope") &&
          t(".wf-cell", s).each(function () {
            l.push(t(this).attr("data-post-id"));
          }),
        {
          visibleItems: l,
          postID: dtLocal.postID,
          paged: r,
          term: d,
          orderBy: o.length > 0 ? o.attr("data-by") : "",
          order: a.length > 0 ? a.attr("data-sort") : "",
          ajaxurl: dtLocal.ajaxurl,
          nonce: dtLocal.ajaxNonce,
          pageData: dtLocal.pageData,
          layout: dtLocal.pageData.layout,
          targetContainer: s,
          isPhone: dtGlobals.isPhone,
        }
      );
    }
    function si() {
      if (dtGlobals.loadMoreButton && dtGlobals.loadMoreButton.exists()) {
        var t = dtGlobals.loadMoreButton.offset();
        t &&
          s.scrollTop() > (t.top - s.height()) / 2 &&
          !dtGlobals.loadMoreButton.hasClass("animate-load") &&
          dtGlobals.loadMoreButton.trigger("click");
      }
    }
    t("#content").on("click", ".paginator.with-ajax a", function (e) {
      if (
        (e.preventDefault(),
        !t(e.target).hasClass("dots") && !t(e.target).hasClass("disabled"))
      ) {
        var i = t(this),
          n = i.closest(".paginator"),
          o = n.parent(),
          a = o
            .find(".wf-container.with-ajax, .articles-list.with-ajax")
            .first(),
          r = t(".button-load-more"),
          l = r.find(".button-caption").text(),
          d = n.hasClass("paginator-more-button") ? "more" : "paginator",
          c = "more" == d,
          h = ii(o),
          u = c ? h.paged + 1 : i.attr("data-page-num"),
          p = dtGlobals.isoPreloader;
        if (
          (r
            .addClass("animate-load")
            .find(".button-caption")
            .text(dtLocal.moreButtonText.loading),
          p &&
            !t(".paginator-more-button").length &&
            dtGlobals.isoPreloader.fadeIn(50),
          c)
        )
          t("html, body").scrollTop(s.scrollTop() + 1);
        else {
          var f = o.find(".filter.with-ajax").first(),
            m = 44;
          f.exists() || ((f = a), (m = 50)),
            t("html, body").animate(
              { scrollTop: f.offset().top - t("#phantom").height() - m },
              400
            );
        }
        ei.launch(
          t.extend({}, h, {
            contentType: h.pageData.template,
            targetPage: u,
            sender: d,
            visibleItems: c ? new Array() : h.visibleItems,
            afterResponce: function (e) {
              n.length > 0
                ? (e.paginationHtml
                    ? n.html(t(e.paginationHtml).html()).show()
                    : n.html("").hide(),
                  setTimeout(function () {
                    t(".button-load-more")
                      .removeClass("animate-load")
                      .find(".button-caption")
                      .text(l);
                  }, 200))
                : e.paginationHtml && a.parent().append(t(e.paginationHtml)),
                n.find(".dots").on("click", function () {
                  n.find("div:hidden").show().find("a").unwrap(),
                    t(this).remove();
                }),
                a.attr("data-cur-page", e.currentPage),
                dtGlobals.isoPreloader.stop().fadeOut(300),
                (dtGlobals.loadMoreButton = t(".button-load-more"));
            },
          })
        );
      }
    }),
      t(
        ".filter.with-ajax .filter-categories a, .filter.with-ajax .filter-extras a"
      ).on("click", function (e) {
        e.preventDefault();
        var i = t(this).closest(".filter").parent(),
          s = i.find(".wf-container.with-ajax").first(),
          n = i.find(".paginator").first(),
          o = ii(i),
          a = dtGlobals.isoPreloader;
        s.resetEffects(),
          a && dtGlobals.isoPreloader.fadeIn(50),
          ei.launch(
            t.extend({}, o, {
              contentType: o.pageData.template,
              targetPage: 1,
              paged: 1,
              sender: "filter",
              afterResponce: function (e) {
                n.length > 0
                  ? e.paginationHtml
                    ? n.html(t(e.paginationHtml).html()).show()
                    : n.html("").hide()
                  : e.paginationHtml && s.parent().append(t(e.paginationHtml)),
                  n.find(".dots").on("click", function () {
                    n.find("div:hidden").show().find("a").unwrap(),
                      t(this).remove();
                  }),
                  s.attr("data-cur-page", e.currentPage),
                  dtGlobals.isoPreloader.stop().fadeOut(300),
                  (dtGlobals.loadMoreButton = t(".button-load-more"));
              },
            })
          );
      }),
      void 0 !== dtLocal.themeSettings.lazyLoading &&
        dtLocal.themeSettings.lazyLoading &&
        ((dtGlobals.loadMoreButton = t(".button-load-more")),
        s.on("scroll", function () {
          si();
        }),
        si());
    var ni,
      oi =
        ((ni = {}),
        function (t, e, i) {
          i || (i = "Don't call this twice without a uniqueId"),
            ni[i] && clearTimeout(ni[i]),
            (ni[i] = setTimeout(t, e));
        });
    s.on("the7-resize-width", function () {
      var e = t(".iso-item, .iso-grid .wf-cell");
      e.addClass("animate-position"),
        oi(
          function () {
            e.removeClass("animate-position");
          },
          2500,
          ""
        );
    });
    var ai = t(".dt-isotope"),
      ri = t(".iso-item:not(.shown):not(.is-visible)"),
      li = t(
        ".iso-grid .wf-cell:not(.shown):not(.is-visible), .dt-css-grid .wf-cell:not(.shown):not(.is-visible)"
      );
    (ai.exists() || ri.exists() || li.exists()) &&
      (setTimeout(function () {
        ti();
      }, 100),
      s.on("scroll", function () {
        ti();
      }));
    var di = (function () {
        function e(e) {
          this.config = t.extend(
            {
              paginatorContainer: null,
              postLimit: 1,
              curPage: 1,
              items: [],
              filter: null,
              onPaginate: function () {},
            },
            e
          );
        }
        return (
          (e.prototype.setCurPage = function (t) {
            this.config.curPage = parseInt(t);
          }),
          (e.prototype.getCurPage = function () {
            return this.config.curPage;
          }),
          (e.prototype.reset = function (t) {
            (this.config.items = t),
              this.setCurPage(1),
              this.appendControls(),
              this._filterByCurPage();
          }),
          (e.prototype.appendControls = function () {}),
          (e.prototype._filterByCurPage = function () {
            this.showItem(this.config.items);
          }),
          (e.prototype.hideItem = function (t) {
            t.removeClass("visible").addClass("hidden").hide();
          }),
          (e.prototype.showItem = function (t) {
            t.addClass("visible").removeClass("hidden").show();
          }),
          (e.prototype.applyLoadingEffects = function () {
            this.lazyLoadImages(), ti();
          }),
          (e.prototype.lazyLoadImages = function () {
            this.config.items &&
              this.config.items.filter(".visible").IsoLayzrJqInitialisation();
          }),
          (e.prototype.layoutItems = function () {
            this._filterByCurPage(),
              this.config.filter &&
                "function" == typeof this.config.filter.layoutItems &&
                this.config.filter.layoutItems();
          }),
          e
        );
      })(),
      ci = (function () {
        function e(e) {
          di.call(this, e);
          (this.config = t.extend(
            {
              previousButtonClass: "",
              previousButtonLabel: "",
              pagerClass: "",
              nextButtonClass: "",
              nextButtonLabel: "",
              activeClass: "act",
              pagesToShow: 5,
            },
            this.config
          )),
            this.appendControls(),
            t("a.act", this.config.paginatorContainer).trigger(
              "click.dtPostsPaginationFilter",
              { onSetup: !0 }
            );
        }
        return (
          (e.prototype = new di()),
          (e.prototype.addEvents = function () {
            var e = this;
            t("a", this.config.paginatorContainer)
              .not(".dots")
              .on(
                "click.dtPostsPaginationFilter",
                { self: this },
                function (t, i) {
                  e.config.onPaginate.call(this, t, i);
                }
              ),
              t("a.dots", this.config.paginatorContainer).on(
                "click.dtPostsPaginationDots",
                { self: this },
                function (t) {
                  t.preventDefault(),
                    t.data.self.config.paginatorContainer
                      .find("div:hidden a")
                      .unwrap(),
                    t.data.self.config.paginatorContainer
                      .find("a.dots")
                      .remove();
                }
              );
          }),
          (e.prototype.appendControls = function () {
            var e = this.config.paginatorContainer,
              i = Math.ceil(this.config.items.length / this.config.postLimit),
              s = this.config.curPage;
            if ((e.empty(), i <= 1)) e.addClass("hidden");
            else {
              var n, o;
              e.removeClass("hidden"),
                1 !== s &&
                  e.prepend(
                    '<a href="#" class="' +
                      this.config.previousButtonClass +
                      '" data-page-num="' +
                      (s - 1) +
                      '">' +
                      this.config.previousButtonLabel +
                      "</a>"
                  );
              var a = (5 | this.config.pagesToShow) - 1,
                r = Math.floor(a / 2),
                l = Math.ceil(a / 2),
                d = Math.max(s - r, 1),
                c = s + l;
              d <= r && (c = d + a),
                c > i && ((d = Math.max(i - a, 1)), (c = i));
              var h = '<a href="javascript:void(0);" class="dots">â€¦</a>',
                u = t('<div style="display: none;"></div>'),
                p = t('<div style="display: none;"></div>');
              for (n = o = 1; 1 <= i ? o <= i : o >= i; n = 1 <= i ? ++o : --o)
                n < d && 1 != n
                  ? u.append(
                      '<a href="#" class="' +
                        this.config.pagerClass +
                        '" data-page-num="' +
                        +n +
                        '">' +
                        n +
                        "</a>"
                    )
                  : (n == d && u.children().length && e.append(u).append(t(h)),
                    n > c && n != i
                      ? p.append(
                          '<a href="#" class="' +
                            this.config.pagerClass +
                            '" data-page-num="' +
                            +n +
                            '">' +
                            n +
                            "</a>"
                        )
                      : (n == i &&
                          p.children().length &&
                          e.append(p).append(t(h)),
                        e.append(
                          '<a href="#" class="' +
                            this.config.pagerClass +
                            '" data-page-num="' +
                            +n +
                            '">' +
                            n +
                            "</a>"
                        )));
              s < i &&
                e.append(
                  '<a href="#" class="' +
                    this.config.nextButtonClass +
                    '" data-page-num="' +
                    (s + 1) +
                    '">' +
                    this.config.nextButtonLabel +
                    "</a>"
                ),
                e
                  .find('a[data-page-num="' + s + '"]')
                  .addClass(this.config.activeClass),
                this.addEvents();
            }
          }),
          (e.prototype._filterByCurPage = function () {
            var e = this;
            this.config.items.get().map(function (i, s) {
              e._showOnCurPage(s + 1) ? e.showItem(t(i)) : e.hideItem(t(i));
            });
          }),
          (e.prototype._showOnCurPage = function (t) {
            return (
              this.config.postLimit <= 0 ||
              (this.config.postLimit * (this.getCurPage() - 1) < t &&
                t <= this.config.postLimit * this.getCurPage())
            );
          }),
          (e.prototype._setAsActive = function (t) {
            t.addClass("act").siblings().removeClass("act");
          }),
          e
        );
      })(),
      hi = (function () {
        function e(t) {
          di.call(this, t),
            this.appendControls(),
            this.addEvents(),
            this.layoutItems(),
            this.applyLoadingEffects();
        }
        return (
          (e.prototype = new di()),
          (e.prototype.addEvents = function () {
            t("a", this.config.paginatorContainer).on(
              "click.dtPostsPaginationFilter",
              { self: this },
              this.config.onPaginate
            );
          }),
          (e.prototype.appendControls = function () {
            var t = this.config.paginatorContainer,
              e = Math.ceil(this.config.items.length / this.config.postLimit);
            this.config.curPage < e
              ? t.removeClass("hidden")
              : t.addClass("hidden");
          }),
          (e.prototype._filterByCurPage = function () {
            var e = this,
              i = e.getCurPage() * e.config.postLimit;
            this.config.items.get().map(function (s, n) {
              n < i ? e.showItem(t(s)) : e.hideItem(t(s));
            });
          }),
          e
        );
      })(),
      ui = (function () {
        function e(e) {
          (this.config = t.extend(
            {
              onCategoryFilter: function () {},
              onOrderFilter: function () {},
              onOrderByFilter: function () {},
              categoryContainer: null,
              orderContainer: null,
              orderByContainer: null,
              postsContainer: null,
              order: "desc",
              orderBy: "date",
              curCategory: "*",
            },
            e
          )),
            this.addEvents(),
            "*" !== this.config.curCategory && this._filterPosts();
        }
        return (
          (e.prototype.addEvents = function () {
            var e = this;
            this.config.categoryContainer &&
              t("a", this.config.categoryContainer).on(
                "click.dtPostsCategoryFilter",
                { self: this },
                function (t) {
                  e.config.onCategoryFilter.call(this, t);
                }
              ),
              this.config.orderContainer &&
                t("a", this.config.orderContainer).on(
                  "click.dtPostsOrderFilter",
                  { self: this },
                  function (t) {
                    e.config.onOrderFilter.call(this, t);
                  }
                ),
              this.config.orderByContainer &&
                t("a", this.config.orderByContainer).on(
                  "click.dtPostsOrderByFilter",
                  { self: this },
                  function (t) {
                    e.config.onOrderByFilter.call(this, t);
                  }
                );
          }),
          (e.prototype.setOrder = function (t) {
            this.config.order = t;
          }),
          (e.prototype.setOrderBy = function (t) {
            this.config.orderBy = t;
          }),
          (e.prototype.setCurCategory = function (t) {
            this.config.curCategory = t;
          }),
          (e.prototype.getFilteredItems = function () {
            return t(
              this.config.postsContainer.isotope("getFilteredItemElements")
            );
          }),
          (e.prototype.getItems = function () {
            return t(this.config.postsContainer.isotope("getItemElements"));
          }),
          (e.prototype.layoutItems = function () {
            this.layout(), this.config.postsContainer.trigger("updateReady");
          }),
          (e.prototype.layout = function () {
            this.config.postsContainer.isotope("layout");
          }),
          (e.prototype.scrollToTopOfContainer = function (e, i) {
            var s = this.config.postsContainer.parent(),
              n = t(".phantom-sticky").exists(),
              o = t(".sticky-top-line").exists(),
              a = s.attr("data-scroll-offset")
                ? parseInt(s.attr("data-scroll-offset"))
                : 0;
            if (n || o) var r = t(".masthead:not(.side-header)").height();
            else if (
              t(".phantom-fade").exists() ||
              t(".phantom-slide").exists()
            )
              r = t("#phantom").height();
            else r = 0;
            (!s.hasClass("enable-pagination-scroll") &&
              s.hasClass("the7-elementor-widget")) ||
              t("html, body").animate(
                { scrollTop: s.offset().top - r - 50 + a },
                400,
                e ? e.bind(i | this) : void 0
              );
          }),
          (e.prototype._filterPosts = function () {
            this.config.postsContainer &&
              this.config.postsContainer.isotope({
                filter: this.config.curCategory,
                sortAscending: "asc" == this.config.order,
                sortBy: this.config.orderBy,
              });
          }),
          (e.prototype._setAsActive = function (t) {
            t.addClass("act").siblings().removeClass("act");
          }),
          e
        );
      })(),
      pi = (function () {
        function e(e) {
          ui.call(this, e);
          (this.config = t.extend(
            { showOnCurPage: function () {} },
            this.config
          )),
            (this.items = this.config.postsContainer.find(".wf-cell")),
            (this.filteredItems = this.items);
        }
        return (
          (e.prototype = new ui()),
          (e.prototype.getFilteredItems = function () {
            return this.filteredItems;
          }),
          (e.prototype.getItems = function () {
            return this.items;
          }),
          (e.prototype.layout = function () {
            var e = this;
            e.items.css("display", "none");
            var i = 0,
              s = [];
            e.filteredItems.each(function () {
              e.config.showOnCurPage(++i) &&
                (t(this).css("display", "block"), s.push(this));
            }),
              (s = t(s)),
              e.config.postsContainer.data("visibleItems", s),
              e.config.postsContainer.collage({ images: s });
          }),
          (e.prototype._filterPosts = function () {
            var t = this;
            t.filteredItems = t.items.filter(t.config.curCategory);
          }),
          e
        );
      })();
    !(function () {
      function e(t) {
        ui.call(this, t),
          (this.items = this.config.postsContainer.find(".wf-cell")),
          (this.filteredItems = this.items);
      }
      (e.prototype = new ui()),
        (e.prototype.getFilteredItems = function () {
          return this.filteredItems;
        }),
        (e.prototype.getItems = function () {
          return this.items;
        }),
        (e.prototype.layout = function () {}),
        (e.prototype._filterPosts = function () {
          this.items.hide(),
            (this.filteredItems = this._sortItems(
              this.items.filter(this.config.curCategory)
            )),
            this.filteredItems.detach().prependTo(this.config.postsContainer),
            this.filteredItems.show();
        }),
        (e.prototype._sortItems = function (e) {
          var i = this.config.orderBy,
            s = this.config.order,
            n = t([]);
          return (
            (n.$nodesCache = t([])),
            e.each(function () {
              var e = t(this);
              n.push({
                node: this,
                $node: e,
                name: e.attr("data-name"),
                date: new Date(e.attr("data-date")),
              });
            }),
            "date" === i && "desc" === s
              ? n.sort(function (t, e) {
                  return e.date - t.date;
                })
              : "date" === i && "asc" === s
              ? n.sort(function (t, e) {
                  return t.date - e.date;
                })
              : "name" === i && "desc" === s
              ? n.sort(function (t, e) {
                  var i = t.name.toLowerCase(),
                    s = e.name.toLowerCase();
                  return i > s ? -1 : i < s ? 1 : 0;
                })
              : "name" === i &&
                "asc" === s &&
                n.sort(function (t, e) {
                  var i = t.name.toLowerCase(),
                    s = e.name.toLowerCase();
                  return i < s ? -1 : i > s ? 1 : 0;
                }),
            n.each(function () {
              n.$nodesCache.push(this.node);
            }),
            n.$nodesCache
          );
        });
    })();
    t(".dt-shortcode.with-isotope").each(function () {
      var e = t(this),
        i = e.find(".iso-grid, .iso-container"),
        s = i.hasClass("dt-isotope"),
        n = {
          postsContainer: i,
          categoryContainer: e.find(".filter-categories"),
          curCategory: e.find(".filter-categories a.act").attr("data-filter"),
        };
      if (s) {
        var o = e
          .find(".filter-extras .filter-sorting a.act")
          .attr("data-sort");
        o || (o = e.find(".filter-categories").attr("data-default-order"));
        var a = e.find(".filter-extras .filter-by a.act").attr("data-by");
        a || (a = e.find(".filter-categories").attr("data-default-orderby")),
          t.extend(n, {
            order: o,
            orderBy: a,
            orderByContainer: e.find(".filter-extras .filter-by"),
            orderContainer: e.find(".filter-extras .filter-sorting"),
            onCategoryFilter: function (e) {
              e.preventDefault();
              var i = t(this),
                s = e.data.self;
              s.config.postsContainer.resetEffects(),
                s._setAsActive(i),
                s.setCurCategory(i.attr("data-filter")),
                s._filterPosts(),
                l.hideItem(s.getItems()),
                l.reset(s.getFilteredItems()),
                s.layout(),
                s.config.postsContainer.IsoLayzrInitialisation(),
                si(),
                ti();
            },
            onOrderFilter: function (e) {
              e.preventDefault();
              var i = t(this),
                s = e.data.self;
              s.config.postsContainer.resetEffects(),
                s._setAsActive(i),
                s.setOrder(i.attr("data-sort")),
                s._filterPosts(),
                l.hideItem(s.getItems()),
                l.reset(s.getFilteredItems()),
                s.layout(),
                s.config.postsContainer.IsoLayzrInitialisation(),
                si(),
                ti();
            },
            onOrderByFilter: function (e) {
              e.preventDefault();
              var i = t(this),
                s = e.data.self;
              s.config.postsContainer.resetEffects(),
                s._setAsActive(i),
                s.setOrderBy(i.attr("data-by")),
                s._filterPosts(),
                l.hideItem(s.getItems()),
                l.reset(s.getFilteredItems()),
                s.layout(),
                s.config.postsContainer.IsoLayzrInitialisation(),
                si(),
                ti();
            },
          });
        var r = new ui(n),
          l = new ci({
            previousButtonClass: "nav-prev filter-item",
            previousButtonLabel: "â†",
            nextButtonClass: "nav-next filter-item",
            nextButtonLabel: "â†’",
            postLimit: i.attr("data-posts-per-page"),
            curPage: 1,
            pagesToShow: i.hasClass("show-all-pages") ? 999 : 5,
            items: r.getFilteredItems(),
            paginatorContainer: e.find(".paginator"),
            onPaginate: function (e, i) {
              e.preventDefault();
              var s = t(this),
                n = e.data.self;
              n._setAsActive(s),
                n.setCurPage(s.attr("data-page-num")),
                n._filterByCurPage(),
                r.layout(),
                i || (n.appendControls(), r.scrollToTopOfContainer());
            },
          });
      } else {
        (r = new pi(n)),
          (l = new ci({
            previousButtonClass: "nav-prev filter-item",
            previousButtonLabel: "â†",
            nextButtonClass: "nav-next filter-item",
            nextButtonLabel: "â†’",
            postLimit: i.attr("data-posts-per-page"),
            curPage: 1,
            pagesToShow: i.hasClass("show-all-pages") ? 999 : 5,
            items: r.getFilteredItems(),
            paginatorContainer: e.find(".paginator"),
          }));
        (r.config.onCategoryFilter = function (e) {
          e.preventDefault();
          var i = t(this),
            s = e.data.self;
          s.config.postsContainer.resetEffects(),
            s._setAsActive(i),
            s.setCurCategory(i.attr("data-filter")),
            s._filterPosts(),
            l.hideItem(s.getItems()),
            l.reset(s.getFilteredItems()),
            s.layout(),
            si(),
            ti();
        }),
          (r.config.showOnCurPage = function (t) {
            return l._showOnCurPage(t);
          }),
          (l.config.onPaginate = function (e, i) {
            e.preventDefault();
            var s = t(this),
              n = e.data.self;
            n._setAsActive(s),
              n.setCurPage(s.attr("data-page-num")),
              n._filterByCurPage(),
              r.layout(),
              i || (n.appendControls(), r.scrollToTopOfContainer());
          }),
          t("a.act", l.config.paginatorContainer).trigger(
            "click.dtPostsPaginationFilter",
            { onSetup: !0 }
          );
      }
    }),
      (window.the7ApplyMasonryJsFiltering = function (e) {
        var i = e.find(".iso-grid, .iso-container"),
          n = e.find(".paginator"),
          o = e.hasClass("lazy-loading-mode"),
          a = e.find(".filter-extras .filter-sorting a.act").attr("data-sort");
        a || (a = e.find(".filter-categories").attr("data-default-order"));
        var r = e.find(".filter-extras .filter-by a.act").attr("data-by");
        r || (r = e.find(".filter-categories").attr("data-default-orderby")),
          e.is(".content-rollover-layout-list:not(.disable-layout-hover)") &&
            i.on("updateReady", function () {
              t(this)
                .find(".wf-cell.visible .post-entry-wrapper")
                .clickOverlayGradient();
            });
        var l = {
            order: a,
            orderBy: r,
            curCategory: e.find(".filter-categories a.act").attr("data-filter"),
            postsContainer: i,
            categoryContainer: e.find(".filter-categories"),
            orderByContainer: e.find(".filter-extras .filter-by"),
            orderContainer: e.find(".filter-extras .filter-sorting"),
            onCategoryFilter: function (e) {
              e.preventDefault();
              var i = t(this),
                s = e.data.self;
              s.config.postsContainer.resetEffects(),
                s._setAsActive(i),
                s.setCurCategory(i.attr("data-filter")),
                s._filterPosts(),
                c.hideItem(s.getItems()),
                c.reset(s.getFilteredItems()),
                s.layoutItems(),
                s.config.postsContainer.IsoLayzrInitialisation(),
                g(),
                ti();
            },
            onOrderFilter: function (e) {
              e.preventDefault();
              var i = t(this),
                s = e.data.self;
              s.config.postsContainer.resetEffects(),
                s._setAsActive(i),
                s.setOrder(i.attr("data-sort")),
                s._filterPosts(),
                c.hideItem(s.getItems()),
                c.reset(s.getFilteredItems()),
                s.layoutItems(),
                s.config.postsContainer.IsoLayzrInitialisation(),
                g(),
                ti();
            },
            onOrderByFilter: function (e) {
              e.preventDefault();
              var i = t(this),
                s = e.data.self;
              s.config.postsContainer.resetEffects(),
                s._setAsActive(i),
                s.setOrderBy(i.attr("data-by")),
                s._filterPosts(),
                c.hideItem(s.getItems()),
                c.reset(s.getFilteredItems()),
                s.layoutItems(),
                s.config.postsContainer.IsoLayzrInitialisation(),
                g(),
                ti();
            },
          },
          d = new ui(l);
        switch (e.attr("data-pagination-mode")) {
          case "load-more":
            var c = new hi({
              postLimit: e.attr("data-post-limit"),
              curPage: 1,
              items: d.getFilteredItems(),
              filter: d,
              paginatorContainer: n,
              onPaginate: function (t) {
                var e = t.data.self;
                t.preventDefault(),
                  e.setCurPage(e.getCurPage() + 1),
                  e.layoutItems(),
                  e.applyLoadingEffects(),
                  e.appendControls();
              },
            });
            break;
          case "pages":
            var h = "â†",
              u = "â†’",
              p = "page";
            e.is("[class*='the7_elements-']") &&
              ((h = "â†"), (u = "â†’"), (p = "page-numbers filter-item"));
            c = new ci({
              previousButtonClass: "nav-prev filter-item",
              previousButtonLabel: h,
              nextButtonClass: "nav-next filter-item",
              nextButtonLabel: u,
              pagerClass: p,
              postLimit: e.attr("data-post-limit"),
              curPage: 1,
              pagesToShow: e.hasClass("show-all-pages") ? 999 : 5,
              items: d.getFilteredItems(),
              filter: d,
              paginatorContainer: n,
              onPaginate: function (e, i) {
                var s = t(this),
                  n = e.data.self;
                e.preventDefault(),
                  n._setAsActive(s),
                  n.setCurPage(s.attr("data-page-num")),
                  n.layoutItems(),
                  i || (n.appendControls(), d.scrollToTopOfContainer()),
                  n.applyLoadingEffects();
              },
            });
            break;
          default:
            c = new di();
        }
        function f() {
          var t = n.find(".button-load-more"),
            e = t.offset();
          n.hasClass("hidden") && m(),
            e && s.scrollTop() > (e.top - s.height()) / 2 && t.trigger("click");
        }
        function m() {
          s.off("scroll", f);
        }
        function g() {
          o && (m(), s.on("scroll", f), f());
        }
        g();
      }),
      t(
        ".mode-masonry.jquery-filter, .mode-grid.jquery-filter:not(.dt-css-grid-wrap)"
      ).one("IsoReady", function () {
        the7ApplyMasonryJsFiltering(t(this));
      }),
      void 0 !== b && (t.fn.owlCarousel = b);
  });
