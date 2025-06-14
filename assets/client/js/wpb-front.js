/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2022 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

(document.documentElement.className += " js_active "),
  (document.documentElement.className +=
    "ontouchstart" in document.documentElement
      ? " vc_mobile "
      : " vc_desktop "),
  (function () {
    for (
      var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0;
      i < prefix.length;
      i++
    )
      prefix[i] + "transform" in document.documentElement.style &&
        (document.documentElement.className += " vc_transform ");
  })(),
  (function ($) {
    "function" != typeof window.vc_js &&
      (window.vc_js = function () {
        "use strict";
        vc_toggleBehaviour(),
          vc_tabsBehaviour(),
          vc_accordionBehaviour(),
          vc_teaserGrid(),
          vc_carouselBehaviour(),
          vc_slidersBehaviour(),
          vc_prettyPhoto(),
          vc_pinterest(),
          vc_progress_bar(),
          vc_plugin_flexslider(),
          vc_gridBehaviour(),
          vc_rowBehaviour(),
          vc_prepareHoverBox(),
          vc_googleMapsPointer(),
          vc_ttaActivation(),
          jQuery(document).trigger("vc_js"),
          window.setTimeout(vc_waypoints, 500);
      }),
      "function" != typeof window.vc_plugin_flexslider &&
        (window.vc_plugin_flexslider = function ($parent) {
          ($parent
            ? $parent.find(".wpb_flexslider")
            : jQuery(".wpb_flexslider")
          ).each(function () {
            var this_element = jQuery(this),
              sliderTimeout =
                1e3 * parseInt(this_element.attr("data-interval"), 10),
              sliderFx = this_element.attr("data-flex_fx"),
              slideshow = 0 == sliderTimeout ? !1 : !0;
            this_element.is(":visible") &&
              this_element.flexslider({
                animation: sliderFx,
                slideshow: slideshow,
                slideshowSpeed: sliderTimeout,
                sliderSpeed: 800,
                smoothHeight: !0,
              });
          });
        }),
      "function" != typeof window.vc_googleplus &&
        (window.vc_googleplus = function () {
          var po, s;
          0 < jQuery(".wpb_googleplus").length &&
            (((po = document.createElement("script")).type = "text/javascript"),
            (po.async = !0),
            (po.src = "https://apis.google.com/js/plusone.js"),
            (s =
              document.getElementsByTagName(
                "script"
              )[0]).parentNode.insertBefore(po, s));
        }),
      "function" != typeof window.vc_pinterest &&
        (window.vc_pinterest = function () {
          var po, s;
          0 < jQuery(".wpb_pinterest").length &&
            (((po = document.createElement("script")).type = "text/javascript"),
            (po.async = !0),
            (po.src = "https://assets.pinterest.com/js/pinit.js"),
            (s =
              document.getElementsByTagName(
                "script"
              )[0]).parentNode.insertBefore(po, s));
        }),
      "function" != typeof window.vc_progress_bar &&
        (window.vc_progress_bar = function () {
          void 0 !== jQuery.fn.vcwaypoint &&
            jQuery(".vc_progress_bar").each(function () {
              var $el = jQuery(this);
              $el.vcwaypoint(
                function () {
                  $el.find(".vc_single_bar").each(function (index) {
                    var bar = jQuery(this).find(".vc_bar"),
                      val = bar.data("percentage-value");
                    setTimeout(function () {
                      bar.css({ width: val + "%" });
                    }, 200 * index);
                  });
                },
                { offset: "85%" }
              );
            });
        }),
      "function" != typeof window.vc_waypoints &&
        (window.vc_waypoints = function () {
          void 0 !== jQuery.fn.vcwaypoint &&
            jQuery(
              ".wpb_animate_when_almost_visible:not(.wpb_start_animation)"
            ).each(function () {
              var $el = jQuery(this);
              $el.vcwaypoint(
                function () {
                  $el.addClass("wpb_start_animation animated");
                },
                { offset: "85%" }
              );
            });
        }),
      "function" != typeof window.vc_toggleBehaviour &&
        (window.vc_toggleBehaviour = function ($el) {
          function event(e) {
            e && e.preventDefault && e.preventDefault();
            var element = jQuery(this).closest(".vc_toggle"),
              e = element.find(".vc_toggle_content");
            element.hasClass("vc_toggle_active")
              ? e.slideUp({
                  duration: 300,
                  complete: function () {
                    element.removeClass("vc_toggle_active");
                  },
                })
              : e.slideDown({
                  duration: 300,
                  complete: function () {
                    element.addClass("vc_toggle_active");
                  },
                });
          }
          ($el
            ? $el.hasClass("vc_toggle_title")
              ? $el.unbind("click")
              : $el.find(".vc_toggle_title").off("click")
            : jQuery(".vc_toggle_title").off("click")
          ).on("click", event);
        }),
      "function" != typeof window.vc_tabsBehaviour &&
        (window.vc_tabsBehaviour = function ($tab) {
          var ver, old_version;
          jQuery.ui &&
            (($tab = $tab || jQuery(".wpb_tabs, .wpb_tour")),
            (ver =
              jQuery.ui && jQuery.ui.version
                ? jQuery.ui.version.split(".")
                : "1.10"),
            (old_version =
              1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9),
            $tab.each(function (index) {
              var interval = jQuery(this).attr("data-interval"),
                tabs_array = [],
                $tabs = jQuery(this)
                  .find(".wpb_tour_tabs_wrapper")
                  .tabs({
                    show: function (event, ui) {
                      wpb_prepare_tab_content(event, ui);
                    },
                    activate: function (event, ui) {
                      wpb_prepare_tab_content(event, ui);
                    },
                  });
              if (interval && 0 < interval)
                try {
                  $tabs.tabs("rotate", 1e3 * interval);
                } catch (err) {
                  window.console &&
                    window.console.warn &&
                    console.warn("tabs behaviours error", err);
                }
              jQuery(this)
                .find(".wpb_tab")
                .each(function () {
                  tabs_array.push(this.id);
                }),
                jQuery(this)
                  .find(".wpb_tabs_nav li")
                  .on("click", function (e) {
                    return (
                      e && e.preventDefault && e.preventDefault(),
                      old_version
                        ? $tabs.tabs("select", jQuery("a", this).attr("href"))
                        : $tabs.tabs("option", "active", jQuery(this).index()),
                      !1
                    );
                  }),
                jQuery(this)
                  .find(".wpb_prev_slide a, .wpb_next_slide a")
                  .on("click", function (e) {
                    var index;
                    e && e.preventDefault && e.preventDefault(),
                      old_version
                        ? ((index = $tabs.tabs("option", "selected")),
                          jQuery(this).parent().hasClass("wpb_next_slide")
                            ? index++
                            : index--,
                          index < 0
                            ? (index = $tabs.tabs("length") - 1)
                            : index >= $tabs.tabs("length") && (index = 0),
                          $tabs.tabs("select", index))
                        : ((index = $tabs.tabs("option", "active")),
                          (e = $tabs.find(".wpb_tab").length),
                          (index = jQuery(this)
                            .parent()
                            .hasClass("wpb_next_slide")
                            ? e <= index + 1
                              ? 0
                              : index + 1
                            : index - 1 < 0
                            ? e - 1
                            : index - 1),
                          $tabs.tabs("option", "active", index));
                  });
            }));
        }),
      "function" != typeof window.vc_accordionBehaviour &&
        (window.vc_accordionBehaviour = function () {
          jQuery(".wpb_accordion").each(function (index) {
            var $this = jQuery(this),
              active_tab =
                ($this.attr("data-interval"),
                !isNaN(jQuery(this).data("active-tab")) &&
                  0 < parseInt($this.data("active-tab"), 10) &&
                  parseInt($this.data("active-tab"), 10) - 1),
              collapsible =
                !1 === active_tab || "yes" === $this.data("collapsible"),
              active_tab = $this.find(".wpb_accordion_wrapper").accordion({
                header: "> div > h3",
                autoHeight: !1,
                heightStyle: "content",
                active: active_tab,
                collapsible: collapsible,
                navigation: !0,
                activate: vc_accordionActivate,
                change: function (event, ui) {
                  void 0 !== jQuery.fn.isotope &&
                    ui.newContent.find(".isotope").isotope("layout"),
                    vc_carouselBehaviour(ui.newPanel);
                },
              });
            !0 === $this.data("vcDisableKeydown") &&
              (active_tab.data("uiAccordion")._keydown = function () {});
          });
        }),
      "function" != typeof window.vc_teaserGrid &&
        (window.vc_teaserGrid = function () {
          var layout_modes = { fitrows: "fitRows", masonry: "masonry" };
          jQuery(
            ".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)"
          ).each(function () {
            var $container = jQuery(this),
              $thumbs = $container.find(".wpb_thumbnails"),
              layout_mode = $thumbs.attr("data-layout-mode");
            $thumbs.isotope({
              itemSelector: ".isotope-item",
              layoutMode:
                void 0 === layout_modes[layout_mode]
                  ? "fitRows"
                  : layout_modes[layout_mode],
            }),
              $container
                .find(".categories_filter a")
                .data("isotope", $thumbs)
                .on("click", function (e) {
                  e && e.preventDefault && e.preventDefault();
                  e = jQuery(this).data("isotope");
                  jQuery(this)
                    .parent()
                    .parent()
                    .find(".active")
                    .removeClass("active"),
                    jQuery(this).parent().addClass("active"),
                    e.isotope({ filter: jQuery(this).attr("data-filter") });
                }),
              jQuery(window).on("load resize", function () {
                $thumbs.isotope("layout");
              });
          });
        }),
      "function" != typeof window.vc_carouselBehaviour &&
        (window.vc_carouselBehaviour = function ($parent) {
          ($parent
            ? $parent.find(".wpb_carousel")
            : jQuery(".wpb_carousel")
          ).each(function () {
            var $this = jQuery(this);
            !0 !== $this.data("carousel_enabled") &&
              $this.is(":visible") &&
              ($this.data("carousel_enabled", !0),
              getColumnsCount(jQuery(this)),
              jQuery(this).hasClass("columns_count_1"),
              ($this = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
                "margin-right": $this.css("margin-left"),
                "margin-left": 0,
              }),
              ($this = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(
                $this.width() + 300
              ));
          });
        }),
      "function" != typeof window.vc_slidersBehaviour &&
        (window.vc_slidersBehaviour = function () {
          jQuery(".wpb_gallery_slides").each(function (index) {
            var $imagesGrid,
              sliderTimeout,
              this_element = jQuery(this);
            this_element.hasClass("wpb_slider_nivo")
              ? (0 ===
                  (sliderTimeout = 1e3 * this_element.attr("data-interval")) &&
                  (sliderTimeout = 9999999999),
                this_element
                  .find(".nivoSlider")
                  .nivoSlider({
                    effect:
                      "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next",
                  }))
              : this_element.hasClass("wpb_image_grid") &&
                (jQuery.fn.imagesLoaded
                  ? ($imagesGrid = this_element
                      .find(".wpb_image_grid_ul")
                      .imagesLoaded(function () {
                        $imagesGrid.isotope({
                          itemSelector: ".isotope-item",
                          layoutMode: "fitRows",
                        });
                      }))
                  : this_element
                      .find(".wpb_image_grid_ul")
                      .isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows",
                      }));
          });
        }),
      "function" != typeof window.vc_prettyPhoto &&
        (window.vc_prettyPhoto = function () {
          try {
            jQuery &&
              jQuery.fn &&
              jQuery.fn.prettyPhoto &&
              jQuery(
                'a.prettyphoto, .gallery-icon a[href*=".jpg"]'
              ).prettyPhoto({
                animationSpeed: "normal",
                hook: "data-rel",
                padding: 15,
                opacity: 0.7,
                showTitle: !0,
                allowresize: !0,
                counter_separator_label: "/",
                hideflash: !1,
                deeplinking: !1,
                modal: !1,
                callback: function () {
                  -1 < location.href.indexOf("#!prettyPhoto") &&
                    (location.hash = "");
                },
                social_tools: "",
              });
          } catch (err) {
            window.console &&
              window.console.warn &&
              window.console.warn("vc_prettyPhoto initialize error", err);
          }
        }),
      "function" != typeof window.vc_google_fonts &&
        (window.vc_google_fonts = function () {
          return (
            window.console &&
              window.console.warn &&
              window.console.warn(
                "function vc_google_fonts is deprecated, no need to use it"
              ),
            !1
          );
        }),
      (window.vcParallaxSkroll = !1),
      "function" != typeof window.vc_rowBehaviour &&
        (window.vc_rowBehaviour = function () {
          var $ = window.jQuery,
            currentThemeSlug = window.vcData.currentTheme.slug;
          function fullWidthRow() {
            var $elements;
            (void 0 !== window.wpb_disable_full_width_row_js &&
              window.wpb_disable_full_width_row_js) ||
              (($elements = $('[data-vc-full-width="true"]')),
              $.each($elements, function (key, item) {
                var el_margin_left,
                  el_margin_right,
                  offset,
                  width,
                  cssProps,
                  padding,
                  paddingRight,
                  $el = $(this),
                  $el_full =
                    ($el.addClass("vc_hidden"), $el.next(".vc_row-full-width"));
                ($el_full = $el_full.length
                  ? $el_full
                  : $el.parent().next(".vc_row-full-width")).length &&
                  ((el_margin_left = parseInt($el.css("margin-left"), 10)),
                  (el_margin_right = parseInt($el.css("margin-right"), 10)),
                  (offset = 0 - $el_full.offset().left - el_margin_left),
                  (width = $(window).width()),
                  (cssProps = {
                    position: "relative",
                    left: (offset =
                      "rtl" === $el.css("direction")
                        ? (offset = offset - $el_full.width() + width) +
                          el_margin_left +
                          el_margin_right
                        : offset),
                    "box-sizing": "border-box",
                    width: width,
                    "max-width": width,
                  }),
                  "twentytwenty" === currentThemeSlug
                    ? ((cssProps.left = 0), (cssProps.marginLeft = 0))
                    : "twentytwentyone" === currentThemeSlug
                    ? (cssProps.left = 0)
                    : "twentytwentytwo" === currentThemeSlug &&
                      (cssProps.left = -$el_full.position().left + "px"),
                  $el.css(cssProps),
                  $el.data("vcStretchContent") ||
                    ("rtl" === $el.css("direction")
                      ? ((padding = offset) < 0 && (padding = 0),
                        (paddingRight = offset) < 0 && (paddingRight = 0))
                      : (paddingRight =
                          width -
                          (padding =
                            (padding = -1 * offset) < 0 ? 0 : padding) -
                          $el_full.width() +
                          el_margin_left +
                          el_margin_right) < 0 && (paddingRight = 0),
                    $el.css({
                      "padding-left": padding + "px",
                      "padding-right": paddingRight + "px",
                    })),
                  $el.attr("data-vc-full-width-init", "true"),
                  $el.removeClass("vc_hidden"),
                  $(document).trigger("vc-full-width-row-single", {
                    el: $el,
                    offset: offset,
                    marginLeft: el_margin_left,
                    marginRight: el_margin_right,
                    elFull: $el_full,
                    width: width,
                    maxWidth: width,
                  }));
              }),
              $(document).trigger("vc-full-width-row", $elements));
          }
          function fullHeightRow() {
            var windowHeight,
              offsetTop,
              $element = $(".vc_row-o-full-height:first");
            $element.length &&
              ((windowHeight = $(window).height()),
              (offsetTop = $element.offset().top) < windowHeight &&
                $element.css(
                  "min-height",
                  100 - offsetTop / (windowHeight / 100) + "vh"
                )),
              $(document).trigger("vc-full-height-row", $element);
          }
          $(window)
            .off("resize.vcRowBehaviour")
            .on("resize.vcRowBehaviour", fullWidthRow)
            .on("resize.vcRowBehaviour", fullHeightRow),
            fullWidthRow(),
            fullHeightRow(),
            (0 < window.navigator.userAgent.indexOf("MSIE ") ||
              navigator.userAgent.match(/Trident.*rv\:11\./)) &&
              $(".vc_row-o-full-height").each(function () {
                "flex" === $(this).css("display") &&
                  $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>');
              }),
            vc_initVideoBackgrounds();
          var callSkrollInit = !1;
          if (
            (window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
            $(".vc_parallax-inner").remove(),
            $("[data-5p-top-bottom]").removeAttr(
              "data-5p-top-bottom data-30p-top-bottom"
            ),
            $("[data-vc-parallax]").each(function () {
              var skrollrSize, $parallaxElement, parallaxImage, youtubeId;
              (callSkrollInit = !0),
                "on" === $(this).data("vcParallaxOFade") &&
                  $(this)
                    .children()
                    .attr("data-5p-top-bottom", "opacity:0;")
                    .attr("data-30p-top-bottom", "opacity:1;"),
                (skrollrSize = 100 * $(this).data("vcParallax")),
                ($parallaxElement = $("<div />")
                  .addClass("vc_parallax-inner")
                  .appendTo($(this))).height(skrollrSize + "%"),
                (parallaxImage = $(this).data("vcParallaxImage")),
                (youtubeId = vcExtractYoutubeId(parallaxImage))
                  ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId)
                  : void 0 !== parallaxImage &&
                    $parallaxElement.css(
                      "background-image",
                      "url(" + parallaxImage + ")"
                    ),
                $parallaxElement
                  .attr(
                    "data-bottom-top",
                    "top: " + -(skrollrSize - 100) + "%;"
                  )
                  .attr("data-top-bottom", "top: 0%;");
            }),
            callSkrollInit && window.skrollr)
          )
            (window.vcParallaxSkroll = skrollr.init({
              forceHeight: !1,
              smoothScrolling: !1,
              mobileCheck: function () {
                return !1;
              },
            })),
              window.vcParallaxSkroll;
        }),
      "function" != typeof window.vc_gridBehaviour &&
        (window.vc_gridBehaviour = function () {
          jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid();
        }),
      "function" != typeof window.getColumnsCount &&
        (window.getColumnsCount = function (el) {
          for (var find = !1, i = 1; !1 === find; ) {
            if (el.hasClass("columns_count_" + i)) return (find = !0), i;
            i++;
          }
        }),
      "function" != typeof window.wpb_prepare_tab_content &&
        (window.wpb_prepare_tab_content = function (event, ui) {
          var panel = ui.panel || ui.newPanel,
            $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
            $round_charts = panel.find(".vc_round-chart"),
            $line_charts = panel.find(".vc_line-chart"),
            $carousel = panel.find('[data-ride="vc_carousel"]');
          vc_carouselBehaviour(),
            vc_plugin_flexslider(panel),
            ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid")
              .length &&
              ui.newPanel
                .find(".vc_masonry_media_grid, .vc_masonry_grid")
                .each(function () {
                  var grid = jQuery(this).data("vcGrid");
                  grid &&
                    grid.gridBuilder &&
                    grid.gridBuilder.setMasonry &&
                    grid.gridBuilder.setMasonry();
                }),
            panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length &&
              panel
                .find(".vc_masonry_media_grid, .vc_masonry_grid")
                .each(function () {
                  var grid = jQuery(this).data("vcGrid");
                  grid &&
                    grid.gridBuilder &&
                    grid.gridBuilder.setMasonry &&
                    grid.gridBuilder.setMasonry();
                }),
            $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
            $round_charts.length &&
              jQuery.fn.vcRoundChart &&
              $round_charts.vcRoundChart({ reload: !1 }),
            $line_charts.length &&
              jQuery.fn.vcLineChart &&
              $line_charts.vcLineChart({ reload: !1 }),
            $carousel.length &&
              jQuery.fn.carousel &&
              $carousel.carousel("resizeAction"),
            (ui = panel.find(".isotope, .wpb_image_grid_ul")),
            ($pie_charts = panel.find(".wpb_gmaps_widget")),
            0 < ui.length && ui.isotope("layout"),
            $pie_charts.length &&
              !$pie_charts.is(".map_ready") &&
              (($round_charts = $pie_charts.find("iframe")).attr(
                "src",
                $round_charts.attr("src")
              ),
              $pie_charts.addClass("map_ready")),
            panel.parents(".isotope").length &&
              panel.parents(".isotope").each(function () {
                jQuery(this).isotope("layout");
              }),
            $(document).trigger("wpb_prepare_tab_content", panel);
        }),
      "function" != typeof window.vc_ttaActivation &&
        (window.vc_ttaActivation = function () {
          jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
            var $ = window.jQuery,
              ui = {};
            (ui.newPanel = $(this).data("vc.accordion").getTarget()),
              window.wpb_prepare_tab_content(e, ui);
          });
        }),
      "function" != typeof window.vc_accordionActivate &&
        (window.vc_accordionActivate = function (event, ui) {
          var $pie_charts, $round_charts, $line_charts, $carousel;
          ui.newPanel.length &&
            ui.newHeader.length &&
            (($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")),
            ($round_charts = ui.newPanel.find(".vc_round-chart")),
            ($line_charts = ui.newPanel.find(".vc_line-chart")),
            ($carousel = ui.newPanel.find('[data-ride="vc_carousel"]')),
            void 0 !== jQuery.fn.isotope &&
              ui.newPanel
                .find(".isotope, .wpb_image_grid_ul")
                .isotope("layout"),
            ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid")
              .length &&
              ui.newPanel
                .find(".vc_masonry_media_grid, .vc_masonry_grid")
                .each(function () {
                  var grid = jQuery(this).data("vcGrid");
                  grid &&
                    grid.gridBuilder &&
                    grid.gridBuilder.setMasonry &&
                    grid.gridBuilder.setMasonry();
                }),
            vc_carouselBehaviour(ui.newPanel),
            vc_plugin_flexslider(ui.newPanel),
            $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
            $round_charts.length &&
              jQuery.fn.vcRoundChart &&
              $round_charts.vcRoundChart({ reload: !1 }),
            $line_charts.length &&
              jQuery.fn.vcLineChart &&
              $line_charts.vcLineChart({ reload: !1 }),
            $carousel.length &&
              jQuery.fn.carousel &&
              $carousel.carousel("resizeAction"),
            ui.newPanel.parents(".isotope").length &&
              ui.newPanel.parents(".isotope").each(function () {
                jQuery(this).isotope("layout");
              }));
        }),
      "function" != typeof window.initVideoBackgrounds &&
        (window.initVideoBackgrounds = function () {
          return (
            window.console &&
              window.console.warn &&
              window.console.warn(
                "this function is deprecated use vc_initVideoBackgrounds"
              ),
            vc_initVideoBackgrounds()
          );
        }),
      "function" != typeof window.vc_initVideoBackgrounds &&
        (window.vc_initVideoBackgrounds = function () {
          jQuery("[data-vc-video-bg]").each(function () {
            var youtubeUrl,
              $element = jQuery(this);
            $element.data("vcVideoBg")
              ? ((youtubeUrl = $element.data("vcVideoBg")),
                (youtubeUrl = vcExtractYoutubeId(youtubeUrl)) &&
                  ($element.find(".vc_video-bg").remove(),
                  insertYoutubeVideoAsBackground($element, youtubeUrl)),
                jQuery(window).on("grid:items:added", function (event, $grid) {
                  $element.has($grid).length &&
                    vcResizeVideoBackground($element);
                }))
              : $element.find(".vc_video-bg").remove();
          });
        }),
      "function" != typeof window.insertYoutubeVideoAsBackground &&
        (window.insertYoutubeVideoAsBackground = function (
          $element,
          youtubeId,
          counter
        ) {
          if ("undefined" == typeof YT || void 0 === YT.Player)
            return 100 < (counter = void 0 === counter ? 0 : counter)
              ? void console.warn("Too many attempts to load YouTube api")
              : void setTimeout(function () {
                  insertYoutubeVideoAsBackground(
                    $element,
                    youtubeId,
                    counter++
                  );
                }, 100);
          var $container = $element
            .prepend(
              '<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>'
            )
            .find(".inner");
          new YT.Player($container[0], {
            width: "100%",
            height: "100%",
            videoId: youtubeId,
            playerVars: {
              playlist: youtubeId,
              iv_load_policy: 3,
              enablejsapi: 1,
              disablekb: 1,
              autoplay: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              loop: 1,
              wmode: "transparent",
            },
            events: {
              onReady: function (event) {
                event.target.mute().setLoop(!0);
              },
            },
          }),
            vcResizeVideoBackground($element),
            jQuery(window).on("resize", function () {
              vcResizeVideoBackground($element);
            });
        }),
      "function" != typeof window.vcResizeVideoBackground &&
        (window.vcResizeVideoBackground = function ($element) {
          var iframeW,
            iframeH,
            marginLeft,
            marginTop,
            containerW = $element.innerWidth(),
            containerH = $element.innerHeight();
          containerW / containerH < 16 / 9
            ? ((iframeW = containerH * (16 / 9)),
              (iframeH = containerH),
              (marginLeft = -Math.round((iframeW - containerW) / 2) + "px"),
              (marginTop = -Math.round((iframeH - containerH) / 2) + "px"))
            : ((iframeH = (iframeW = containerW) * (9 / 16)),
              (marginTop = -Math.round((iframeH - containerH) / 2) + "px"),
              (marginLeft = -Math.round((iframeW - containerW) / 2) + "px")),
            (iframeW += "px"),
            (iframeH += "px"),
            $element
              .find(".vc_video-bg iframe")
              .css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH,
              });
        }),
      "function" != typeof window.vcExtractYoutubeId &&
        (window.vcExtractYoutubeId = function (url) {
          if (void 0 === url) return !1;
          url = url.match(
            /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
          );
          return null !== url && url[1];
        }),
      "function" != typeof window.vc_googleMapsPointer &&
        (window.vc_googleMapsPointer = function () {
          var $ = window.jQuery,
            $wpbGmapsWidget = $(".wpb_gmaps_widget");
          $wpbGmapsWidget.on("click", function () {
            $("iframe", this).css("pointer-events", "auto");
          }),
            $wpbGmapsWidget.on("mouseleave", function () {
              $("iframe", this).css("pointer-events", "none");
            }),
            $(".wpb_gmaps_widget iframe").css("pointer-events", "none");
        }),
      "function" != typeof window.vc_setHoverBoxPerspective &&
        (window.vc_setHoverBoxPerspective = function (hoverBox) {
          hoverBox.each(function () {
            var $this = jQuery(this),
              width = $this.width();
            $this.css("perspective", 4 * width + "px");
          });
        }),
      "function" != typeof window.vc_setHoverBoxHeight &&
        (window.vc_setHoverBoxHeight = function (hoverBox) {
          hoverBox.each(function () {
            var $this = jQuery(this),
              hoverBoxInner = $this.find(".vc-hoverbox-inner"),
              frontHeight =
                (hoverBoxInner.css("min-height", 0),
                $this.find(".vc-hoverbox-front-inner").outerHeight()),
              $this = $this.find(".vc-hoverbox-back-inner").outerHeight(),
              frontHeight = $this < frontHeight ? frontHeight : $this;
            hoverBoxInner.css(
              "min-height",
              (frontHeight = frontHeight < 250 ? 250 : frontHeight) + "px"
            );
          });
        }),
      "function" != typeof window.vc_prepareHoverBox &&
        (window.vc_prepareHoverBox = function () {
          var hoverBox = jQuery(".vc-hoverbox");
          vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox);
        }),
      jQuery(document).ready(window.vc_prepareHoverBox),
      jQuery(window).on("resize", window.vc_prepareHoverBox),
      jQuery(document).ready(function ($) {
        window.vc_js();
      });
  })(window.jQuery);
