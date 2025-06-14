/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

/*!
Waypoints - 4.0.1
Copyright Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  "use strict";
  var e = 0,
    r = {};
  function i(t) {
    if (!t) throw new Error("No options passed to Waypoint constructor");
    if (!t.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!t.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = i.Adapter.extend({}, i.defaults, t)),
      (this.element = this.options.element),
      (this.adapter = new i.Adapter(this.element)),
      (this.callback = t.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = i.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = i.Context.findOrCreateByElement(this.options.context)),
      i.offsetAliases[this.options.offset] &&
        (this.options.offset = i.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (r[this.key] = this),
      (e += 1);
  }
  (i.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (i.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (i.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete r[this.key];
    }),
    (i.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (i.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (i.prototype.next = function () {
      return this.group.next(this);
    }),
    (i.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (i.invokeAll = function (t) {
      var e = [];
      for (var i in r) e.push(r[i]);
      for (var o = 0, n = e.length; o < n; o++) e[o][t]();
    }),
    (i.destroyAll = function () {
      i.invokeAll("destroy");
    }),
    (i.disableAll = function () {
      i.invokeAll("disable");
    }),
    (i.enableAll = function () {
      for (var t in (i.Context.refreshAll(), r)) r[t].enabled = !0;
      return this;
    }),
    (i.refreshAll = function () {
      i.Context.refreshAll();
    }),
    (i.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (i.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (i.adapters = []),
    (i.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (i.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.VcWaypoint = i);
})(),
  (function () {
    "use strict";
    function e(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    var i = 0,
      o = {},
      y = window.VcWaypoint,
      t = window.onload;
    function n(t) {
      (this.element = t),
        (this.Adapter = y.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        y.windowContext ||
          ((y.windowContext = !0), (y.windowContext = new n(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    (n.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (n.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".vcwaypoints"), delete o[this.key]);
      }),
      (n.prototype.createThrottledResizeHandler = function () {
        var t = this;
        function e() {
          t.handleResize(), (t.didResize = !1);
        }
        this.adapter.on("resize.vcwaypoints", function () {
          t.didResize || ((t.didResize = !0), y.requestAnimationFrame(e));
        });
      }),
      (n.prototype.createThrottledScrollHandler = function () {
        var t = this;
        function e() {
          t.handleScroll(), (t.didScroll = !1);
        }
        this.adapter.on("scroll.vcwaypoints", function () {
          (t.didScroll && !y.isTouch) ||
            ((t.didScroll = !0), y.requestAnimationFrame(e));
        });
      }),
      (n.prototype.handleResize = function () {
        y.Context.refreshAll();
      }),
      (n.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll ? o.forward : o.backward;
          for (var r in this.waypoints[i]) {
            var s = this.waypoints[i][r];
            if (null !== s.triggerPoint) {
              var a = o.oldScroll < s.triggerPoint,
                l = o.newScroll >= s.triggerPoint;
              ((a && l) || (!a && !l)) &&
                (s.queueTrigger(n), (t[s.group.id] = s.group));
            }
          }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (n.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? y.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (n.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (n.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? y.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (n.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; o < n; o++) t[o].destroy();
      }),
      (n.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        for (var n in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var r = t[n];
          for (var s in this.waypoints[n]) {
            var a,
              l,
              h,
              p,
              c = this.waypoints[n][s],
              u = c.options.offset,
              d = c.triggerPoint,
              f = 0,
              w = null == d;
            c.element !== c.element.window &&
              (f = c.adapter.offset()[r.offsetProp]),
              "function" == typeof u
                ? (u = u.apply(c))
                : "string" == typeof u &&
                  ((u = parseFloat(u)),
                  -1 < c.options.offset.indexOf("%") &&
                    (u = Math.ceil((r.contextDimension * u) / 100))),
              (a = r.contextScroll - r.contextOffset),
              (c.triggerPoint = Math.floor(f + a - u)),
              (l = d < r.oldScroll),
              (h = c.triggerPoint >= r.oldScroll),
              (p = !l && !h),
              !w && l && h
                ? (c.queueTrigger(r.backward), (o[c.group.id] = c.group))
                : !w && p
                ? (c.queueTrigger(r.forward), (o[c.group.id] = c.group))
                : w &&
                  r.oldScroll >= c.triggerPoint &&
                  (c.queueTrigger(r.forward), (o[c.group.id] = c.group));
          }
        }
        return (
          y.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (n.findOrCreateByElement = function (t) {
        return n.findByElement(t) || new n(t);
      }),
      (n.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (n.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        t && t(), n.refreshAll();
      }),
      (y.requestAnimationFrame = function (t) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          e
        ).call(window, t);
      }),
      (y.Context = n);
  })(),
  (function () {
    "use strict";
    function s(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function a(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    var e = { vertical: {}, horizontal: {} },
      i = window.VcWaypoint;
    function o(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (e[this.axis][this.name] = this);
    }
    (o.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (o.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (o.prototype.flushTriggers = function () {
        for (var t in this.triggerQueues) {
          var e = this.triggerQueues[t],
            i = "up" === t || "left" === t;
          e.sort(i ? a : s);
          for (var o = 0, n = e.length; o < n; o += 1) {
            var r = e[o];
            (r.options.continuous || o === e.length - 1) && r.trigger([t]);
          }
        }
        this.clearTriggerQueues();
      }),
      (o.prototype.next = function (t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1];
      }),
      (o.prototype.previous = function (t) {
        this.waypoints.sort(s);
        var e = i.Adapter.inArray(t, this.waypoints);
        return e ? this.waypoints[e - 1] : null;
      }),
      (o.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (o.prototype.remove = function (t) {
        var e = i.Adapter.inArray(t, this.waypoints);
        -1 < e && this.waypoints.splice(e, 1);
      }),
      (o.prototype.first = function () {
        return this.waypoints[0];
      }),
      (o.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (o.findOrCreate = function (t) {
        return e[t.axis][t.name] || new o(t);
      }),
      (i.Group = o);
  })(),
  (function () {
    "use strict";
    var i = window.jQuery,
      t = window.VcWaypoint;
    function o(t) {
      this.$element = i(t);
    }
    i.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (t, e) {
        o.prototype[e] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[e].apply(this.$element, t);
        };
      }
    ),
      i.each(["extend", "inArray", "isEmptyObject"], function (t, e) {
        o[e] = i[e];
      }),
      t.adapters.push({ name: "jquery", Adapter: o }),
      (t.Adapter = o);
  })(),
  (function () {
    "use strict";
    var n = window.VcWaypoint;
    function t(o) {
      return function () {
        var e = [],
          i = arguments[0];
        return (
          o.isFunction(arguments[0]) &&
            ((i = o.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var t = o.extend({}, i, { element: this });
            "string" == typeof t.context &&
              (t.context = o(this).closest(t.context)[0]),
              e.push(new n(t));
          }),
          e
        );
      };
    }
    window.jQuery && (window.jQuery.fn.vcwaypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.vcwaypoint = t(window.Zepto));
  })();
