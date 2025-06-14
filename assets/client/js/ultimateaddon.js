!(function (B) {
  function N() {
    return !!jQuery("body").hasClass("rtl");
  }
  jQuery(document).ready(function () {
    function E() {
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
        jQuery(".enable-on-viewport").each(function (t, e) {
          var a = jQuery(this).isVdoOnScreen();
          jQuery(this).hasClass("hosted-video") &&
            !jQuery(this).hasClass("override-controls") &&
            (a
              ? (jQuery(this)[0].play(),
                jQuery(this)
                  .parent()
                  .parent()
                  .parent()
                  .find(".video-controls")
                  .attr("data-action", "play"),
                jQuery(this)
                  .parent()
                  .parent()
                  .parent()
                  .find(".video-controls")
                  .html('<i class="ult-vid-cntrlpause"></i>'))
              : (jQuery(this)[0].pause(),
                jQuery(this)
                  .parent()
                  .parent()
                  .parent()
                  .find(".video-controls")
                  .attr("data-action", "pause"),
                jQuery(this)
                  .parent()
                  .parent()
                  .parent()
                  .find(".video-controls")
                  .html('<i class="ult-vid-cntrlplay"></i>')));
        });
    }
    function W(a, r) {
      const t = a.data("seperator"),
        o = a.data("seperator-type");
      let s = a.data("seperator-shape-size");
      var i = a.data("seperator-background-color"),
        l = a.data("seperator-border"),
        d = a.data("seperator-border-color"),
        n = a.data("seperator-border-width"),
        p = a.data("seperator-svg-height"),
        c = a.data("seperator-full-width");
      let u = a.data("seperator-position");
      (void 0 !== u && "" != u) || (u = "top_seperator");
      let v = a.data("icon");
      v = void 0 === v ? "" : '<div class="separator-icon">' + v + "</div>";
      let h =
        (seperator_class =
        seperator_border_css =
        seperator_border_line_css =
        seperator_css =
          "");
      if (void 0 !== t && "true" == t.toString()) {
        var _ = (shape_css = svg = inner_html = seperator_css = "");
        let t = !1;
        var b = "uvc-seperator-" + Math.floor(9999999999999 * Math.random());
        (void 0 !== s && "" != s && "undefined" != s) || (s = 0),
          (s = parseInt(s));
        var g,
          m = s / 2;
        let e = 0;
        if ("triangle_seperator" == o)
          seperator_class = "ult-trinalge-seperator";
        else if ("circle_seperator" == o)
          seperator_class = "ult-circle-seperator";
        else if ("diagonal_seperator" == o)
          seperator_class = "ult-double-diagonal";
        else if ("triangle_svg_seperator" == o)
          (seperator_class = "ult-svg-triangle"),
            (svg =
              '<svg class="uvc-svg-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 0.156661 0.1"><polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 "/></svg>'),
            (t = !0);
        else if ("circle_svg_seperator" == o)
          (seperator_class = "ult-svg-circle"),
            (svg =
              '<svg class="uvc-svg-circle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 0.2 0.1"><path d="M0.200004 0c-3.93701e-006,0.0552205 -0.0447795,0.1 -0.100004,0.1 -0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1l0.200004 0z"/></svg>'),
            (t = !0);
        else if ("xlarge_triangle_seperator" == o)
          (seperator_class = "ult-xlarge-triangle"),
            (svg =
              '<svg class="uvc-x-large-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-0 0.333331l4.66666 0 0 -3.93701e-006 -2.33333 0 -2.33333 0 0 3.93701e-006zm0 -0.333331l4.66666 0 0 0.166661 -4.66666 0 0 -0.166661zm4.66666 0.332618l0 -0.165953 -4.66666 0 0 0.165953 1.16162 -0.0826181 1.17171 -0.0833228 1.17171 0.0833228 1.16162 0.0826181z"/></svg>'),
            (t = !0);
        else if ("xlarge_triangle_left_seperator" == o)
          (seperator_class = "ult-xlarge-triangle-left"),
            (svg =
              '<svg class="uvc-x-large-triangle-left" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 2000 90" preserveAspectRatio="none"><polygon xmlns="http://www.w3.org/2000/svg" points="535.084,64.886 0,0 0,90 2000,90 2000,0 "></polygon></svg>'),
            (t = !0);
        else if ("xlarge_triangle_right_seperator" == o)
          (seperator_class = "ult-xlarge-triangle-right"),
            (svg =
              '<svg class="uvc-x-large-triangle-right" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 2000 90" preserveAspectRatio="none"><polygon xmlns="http://www.w3.org/2000/svg" points="535.084,64.886 0,0 0,90 2000,90 2000,0 "></polygon></svg>'),
            (t = !0);
        else if ("xlarge_circle_seperator" == o)
          (seperator_class = "ult-xlarge-circle"),
            (svg =
              '<svg class="uvc-x-large-circle" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil1" d="M4.66666 0l0 7.87402e-006 -3.93701e-006 0c0,0.0920315 -1.04489,0.166665 -2.33333,0.166665 -1.28844,0 -2.33333,-0.0746339 -2.33333,-0.166665l-3.93701e-006 0 0 -7.87402e-006 4.66666 0z"/></svg>'),
            (t = !0);
        else if ("curve_up_seperator" == o)
          (seperator_class = "ult-curve-up-seperator"),
            (svg =
              '<svg class="curve-up-inner-seperator uvc-curve-up-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"/></svg>'),
            (t = !0);
        else if ("curve_down_seperator" == o)
          (seperator_class = "ult-curve-down-seperator"),
            (svg =
              '<svg class="curve-down-inner-seperator uvc-curve-down-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none"><path class="fil0" d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"/></svg>'),
            (t = !0);
        else if ("tilt_left_seperator" == o)
          (seperator_class = "ult-tilt-left-seperator"),
            (svg =
              '<svg class="uvc-tilt-left-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 4 0.266661" preserveAspectRatio="none"><polygon class="fil0" points="4,0 4,0.266661 -0,0.266661 "/></svg>'),
            (t = !0);
        else if ("tilt_right_seperator" == o)
          (seperator_class = "ult-tilt-right-seperator"),
            (svg =
              '<svg class="uvc-tilt-right-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 4 0.266661" preserveAspectRatio="none"><polygon class="fil0" points="4,0 4,0.266661 -0,0.266661 "/></svg>'),
            (t = !0);
        else if ("waves_seperator" == o)
          (seperator_class = "ult-wave-seperator"),
            (svg =
              '<svg class="wave-inner-seperator uvc-wave-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 6 0.1" preserveAspectRatio="none"><path d="M0.199945 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c-0.0541102,0 -0.0981929,-0.0430079 -0.0999409,-0.0967008l0 0.0967008 0.0999409 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm2.00004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm-0.1 0.1l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm1.90004 -0.1c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.199945 0.00329921l0 0.0967008 -0.0999409 0c0.0541102,0 0.0981929,-0.0430079 0.0999409,-0.0967008z"/></svg>'),
            (t = !0);
        else if ("clouds_seperator" == o)
          (seperator_class = "ult-cloud-seperator"),
            (svg =
              '<svg class="cloud-inner-seperator uvc-cloud-seperator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="' +
              i +
              '" width="100%" height="' +
              p +
              '" viewBox="0 0 2.23333 0.1" preserveAspectRatio="none"><path class="fil0" d="M2.23281 0.0372047c0,0 -0.0261929,-0.000389764 -0.0423307,-0.00584252 0,0 -0.0356181,0.0278268 -0.0865354,0.0212205 0,0 -0.0347835,-0.00524803 -0.0579094,-0.0283701 0,0 -0.0334252,0.0112677 -0.0773425,-0.00116929 0,0 -0.0590787,0.0524724 -0.141472,0.000779528 0,0 -0.0288189,0.0189291 -0.0762362,0.0111535 -0.00458268,0.0141024 -0.0150945,0.040122 -0.0656811,0.0432598 -0.0505866,0.0031378 -0.076126,-0.0226614 -0.0808425,-0.0308228 -0.00806299,0.000854331 -0.0819961,0.0186969 -0.111488,-0.022815 -0.0076378,0.0114843 -0.059185,0.0252598 -0.083563,-0.000385827 -0.0295945,0.0508661 -0.111996,0.0664843 -0.153752,0.019 -0.0179843,0.00227559 -0.0571181,0.00573622 -0.0732795,-0.0152953 -0.027748,0.0419646 -0.110602,0.0366654 -0.138701,0.00688189 0,0 -0.0771732,0.0395709 -0.116598,-0.0147677 0,0 -0.0497598,0.02 -0.0773346,-0.00166929 0,0 -0.0479646,0.0302756 -0.0998937,0.00944094 0,0 -0.0252638,0.0107874 -0.0839488,0.00884646 0,0 -0.046252,0.000775591 -0.0734567,-0.0237087 0,0 -0.046252,0.0101024 -0.0769567,-0.00116929 0,0 -0.0450827,0.0314843 -0.118543,0.0108858 0,0 -0.0715118,0.0609803 -0.144579,0.00423228 0,0 -0.0385787,0.00770079 -0.0646299,0.000102362 0,0 -0.0387559,0.0432205 -0.125039,0.0206811 0,0 -0.0324409,0.0181024 -0.0621457,0.0111063l-3.93701e-005 0.0412205 2.2323 0 0 -0.0627953z"/></svg>'),
            (t = !0);
        else if ("multi_triangle_seperator" == o) {
          seperator_class = "ult-multi-trianle";
          var f =
            ((f = (f = i).replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              function (t, e, a, r) {
                return e + e + a + a + r + r;
              }
            )),
            (f = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(f))
              ? {
                  r: parseInt(f[1], 16),
                  g: parseInt(f[2], 16),
                  b: parseInt(f[3], 16),
                }
              : null);
          (svg =
            '<svg class="uvc-multi-triangle-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="' +
            p +
            '">\t\t\t\t            <path class="large left" d="M0 0 L50 50 L0 100" fill="rgba(' +
            f.r +
            "," +
            f.g +
            "," +
            f.b +
            ', .1)"></path>\t\t\t\t            <path class="large right" d="M100 0 L50 50 L100 100" fill="rgba(' +
            f.r +
            "," +
            f.g +
            "," +
            f.b +
            ', .1)"></path>\t\t\t\t            <path class="medium left" d="M0 100 L50 50 L0 33.3" fill="rgba(' +
            f.r +
            "," +
            f.g +
            "," +
            f.b +
            ', .3)"></path>\t\t\t\t            <path class="medium right" d="M100 100 L50 50 L100 33.3" fill="rgba(' +
            f.r +
            "," +
            f.g +
            "," +
            f.b +
            ', .3)"></path>\t\t\t\t            <path class="small left" d="M0 100 L50 50 L0 66.6" fill="rgba(' +
            f.r +
            "," +
            f.g +
            "," +
            f.b +
            ', .5)"></path>\t\t\t\t            <path class="small right" d="M100 100 L50 50 L100 66.6" fill="rgba(' +
            f.r +
            "," +
            f.g +
            "," +
            f.b +
            ', .5)"></path>\t\t\t\t            <path d="M0 99.9 L50 49.9 L100 99.9 L0 99.9" fill="rgba(' +
            f.r +
            "," +
            f.g +
            "," +
            f.b +
            ', 1)"></path>\t\t\t\t            <path d="M48 52 L50 49 L52 52 L48 52" fill="rgba(' +
            f.r +
            "," +
            f.g +
            "," +
            f.b +
            ', 1)"></path>\t\t\t\t        </svg>'),
            (t = !0);
        } else if ("round_split_seperator" == o) {
          let t =
            (temp_border_before =
            temp_border_after =
            temp_border_line =
              "");
          (temp_padding = 0),
            (seperator_class = "ult-rounded-split-seperator-wrapper");
          var y, w, x, j, Q, z, k, C, M, I, P, A, L;
          jQuery(a).outerHeight();
          0 != s &&
            ((f = parseInt(jQuery(a).css("padding-bottom"))),
            jQuery(a).css({ "padding-bottom": s + "px" }),
            0 == f && (temp_padding = s)),
            "top_seperator" == u
              ? ((Q = "top-split-seperator"),
                (y = "0px"),
                (w = "auto"),
                (x = "border-radius: 0 0 " + s + "px 0 !important;"),
                (j = "border-radius: 0 0 0 " + s + "px !important;"))
              : "bottom_seperator" == u
              ? ((Q = "bottom-split-seperator"),
                (y = "auto"),
                (w = "0px"),
                (x = "border-radius: 0 " + s + "px 0 0 !important;"),
                (j = "border-radius: " + s + "px 0 0 0 !important;"))
              : ((Q = "top-bottom-split-seperator"),
                (C = k = "auto"),
                (M = z = "0px"),
                (I = "border-radius: 0 0 " + s + "px 0 !important;"),
                (P = "border-radius: 0 0 0 " + s + "px !important;"),
                (A = "border-radius: 0 " + s + "px 0 0 !important;"),
                (L = "border-radius: " + s + "px 0 0 0 !important;")),
            (inner_html =
              '<div class="ult-rounded-split-seperator ' + Q + '"></div>'),
            "none" != l &&
              ((temp_border_line = n + "px " + l + " " + d),
              (temp_border_before =
                "border-top: " +
                temp_border_line +
                "; border-right: " +
                temp_border_line +
                ";"),
              (temp_border_after =
                "border-top: " +
                temp_border_line +
                "; border-left: " +
                temp_border_line +
                ";")),
            "top_seperator" == u || "bottom_seperator" == u
              ? ((t =
                  "<style>." +
                  b +
                  " .ult-rounded-split-seperator." +
                  Q +
                  ":before { background-color:" +
                  i +
                  "; height:" +
                  s +
                  "px !important; top:" +
                  y +
                  "; bottom:" +
                  w +
                  "; " +
                  temp_border_before +
                  " " +
                  x +
                  " } ." +
                  b +
                  " .ult-rounded-split-seperator." +
                  Q +
                  ":after { background-color:" +
                  i +
                  "; left: 50%; height:" +
                  s +
                  "px !important; top:" +
                  y +
                  "; bottom:" +
                  w +
                  "; " +
                  temp_border_after +
                  " " +
                  j +
                  " }</style>"),
                jQuery("head").append(t))
              : ((t =
                  "<style>." +
                  b +
                  ".top_seperator .ult-rounded-split-seperator:before { background-color:" +
                  i +
                  "; height:" +
                  s +
                  "px !important; top:" +
                  z +
                  "; bottom:" +
                  k +
                  "; " +
                  temp_border_before +
                  " " +
                  I +
                  " } ." +
                  b +
                  ".top_seperator .ult-rounded-split-seperator:after { background-color:" +
                  i +
                  "; left: 50%; height:" +
                  s +
                  "px !important; top:" +
                  z +
                  "; bottom:" +
                  k +
                  "; " +
                  temp_border_after +
                  " " +
                  P +
                  " }</style>"),
                (temp_css_bottom =
                  "<style>." +
                  b +
                  ".bottom_seperator .ult-rounded-split-seperator:before { background-color:" +
                  i +
                  "; height:" +
                  s +
                  "px !important; top:" +
                  C +
                  "; bottom:" +
                  M +
                  "; " +
                  temp_border_before +
                  " " +
                  A +
                  " } ." +
                  b +
                  ".bottom_seperator .ult-rounded-split-seperator:after { background-color:" +
                  i +
                  "; left: 50%; height:" +
                  s +
                  "px !important; top:" +
                  C +
                  "; bottom:" +
                  M +
                  "; " +
                  temp_border_after +
                  " " +
                  L +
                  " }</style>"),
                jQuery("head").append(t + temp_css_bottom));
        } else seperator_class = "ult-no-shape-seperator";
        void 0 !== n && "" != n && 0 != n && (e = parseInt(n)),
          (shape_css =
            'content: "";width:' +
            s +
            "px; height:" +
            s +
            "px; bottom: -" +
            (m + e) +
            "px;"),
          "" != i && (shape_css += "background-color:" + i + ";"),
          "none" != l &&
            "ult-rounded-split-seperator-wrapper" != seperator_class &&
            0 == t &&
            ((seperator_border_line_css = n + "px " + l + " " + d),
            (shape_css +=
              "border-bottom:" +
              seperator_border_line_css +
              "; border-right:" +
              seperator_border_line_css +
              ";"),
            (seperator_css +=
              "border-bottom:" + seperator_border_line_css + ";"),
            (h = "bottom:" + n + "px !important")),
          "ult-no-shape-seperator" != seperator_class &&
            "ult-rounded-split-seperator-wrapper" != seperator_class &&
            0 == t &&
            ((_ =
              "<style>." +
              b +
              " .ult-main-seperator-inner:after { " +
              shape_css +
              " }</style>"),
            jQuery("head").append(_)),
          1 == t && (inner_html = svg),
          "top_bottom_seperator" == u
            ? ((g =
                '<div class="ult-vc-seperator top_seperator ' +
                seperator_class +
                " " +
                b +
                '" data-full-width="' +
                c +
                '" data-border="' +
                l +
                '" data-border-width="' +
                n +
                '"><div class="ult-main-seperator-inner">' +
                inner_html +
                "</div>" +
                v +
                "</div>"),
              (g +=
                '<div class="ult-vc-seperator bottom_seperator ' +
                seperator_class +
                " " +
                b +
                '" data-full-width="' +
                c +
                '" data-border="' +
                l +
                '" data-border-width="' +
                n +
                '"><div class="ult-main-seperator-inner">' +
                inner_html +
                "</div>" +
                v +
                "</div>"))
            : (g =
                '<div class="ult-vc-seperator ' +
                u +
                " " +
                seperator_class +
                " " +
                b +
                '" data-full-width="' +
                c +
                '" data-border="' +
                l +
                '" data-border-width="' +
                n +
                '"><div class="ult-main-seperator-inner">' +
                inner_html +
                "</div>" +
                v +
                "</div>"),
          r.prepend(g),
          (seperator_css =
            "<style>." +
            b +
            " .ult-main-seperator-inner { " +
            seperator_css +
            " }</style>"),
          "" != h &&
            ((h =
              "<style>." +
              b +
              " .ult-main-seperator-inner { " +
              h +
              " }</style>"),
            (seperator_css += h)),
          "" != v &&
            ((g = p / 2),
            "none_seperator" == o ||
            "circle_svg_seperator" == o ||
            "triangle_svg_seperator" == o
              ? (seperator_css +=
                  "<style>." +
                  b +
                  " .separator-icon { -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }</style>")
              : (seperator_css +=
                  "<style>." +
                  b +
                  ".top_seperator .separator-icon { -webkit-transform: translate(-50%, calc(-50% + " +
                  g +
                  "px)); -moz-transform: translate(-50%, calc(-50% + " +
                  g +
                  "px)); -ms-transform: translate(-50%, calc(-50% + " +
                  g +
                  "px)); -o-transform: translate(-50%, calc(-50% + " +
                  g +
                  "px)); transform: translate(-50%, calc(-50% + " +
                  g +
                  "px)); } ." +
                  b +
                  ".bottom_seperator .separator-icon { -webkit-transform: translate(-50%, calc(-50% - " +
                  g +
                  "px)); -moz-transform: translate(-50%, calc(-50% - " +
                  g +
                  "px)); -ms-transform: translate(-50%, calc(-50% - " +
                  g +
                  "px)); -o-transform: translate(-50%, calc(-50% - " +
                  g +
                  "px)); transform: translate(-50%, calc(-50% - " +
                  g +
                  "px)); }</style>")),
          1 == t &&
            (jQuery("." + b)
              .find("svg")
              .css("height", p),
            setTimeout(function () {
              "multi_triangle_seperator" == o &&
                jQuery(".ult-multi-trianle").each(function (t, e) {
                  var a = B(e).find("svg").height();
                  B(e).hasClass("top_seperator") ||
                    (B(e).hasClass("bottom_seperator") &&
                      B(e).css("bottom", a - 1));
                });
            }, 300)),
          jQuery("head").append(seperator_css);
      }
    }
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) && B("html").addClass("ult-remove-fixed-background"),
      jQuery(window).scroll(function () {
        E();
      }),
      jQuery(window).on("load", function () {
        E();
      }),
      (jQuery.fn.isVdoOnScreen = function () {
        const t = jQuery(window),
          e = { top: t.scrollTop(), left: t.scrollLeft() };
        (e.right = e.left + t.width()), (e.bottom = e.top + t.height() - 200);
        const a = this.parent().offset();
        return (
          (a.right = a.left + this.parent().outerWidth()),
          (a.bottom = a.top + this.parent().outerHeight() - 300),
          !(
            e.right < a.left ||
            e.left > a.right ||
            e.bottom < a.top ||
            e.top > a.bottom
          )
        );
      }),
      (jQuery.fn.ultimate_video_bg = function (T) {
        return (
          jQuery(this).each(function () {
            let d = jQuery(this),
              t = d.data("ultimate-video");
            const e = d.data("ultimate-video2");
            let a = d.data("ultimate-video-muted"),
              r = d.data("ultimate-video-loop");
            var o = d.data("ultimate-video-autoplay"),
              s = d.data("ultimate-video-poster");
            const n = d.data("bg-override");
            var i = d.data("start-time");
            let l = d.data("stop-time");
            var p = d.data("upb-bg-animation");
            const c = d.data("overlay");
            var u = d.data("overlay-color"),
              v = d.data("overlay-pattern"),
              h = d.data("overlay-pattern-opacity");
            let _ = d.data("overlay-pattern-size");
            var b = d.data("overlay-pattern-attachment"),
              g = d.data("viewport-video"),
              m = d.data("controls"),
              f = d.data("controls-color"),
              y = d.data("fadeout"),
              w = d.data("fadeout-percentage"),
              x = d.data("parallax-content"),
              j = d.data("parallax-content-sense"),
              Q = d.data("row-effect-mobile-disable"),
              z = d.data("hide-row"),
              k = d.data("rtl");
            const C = d.data("video_fixer");
            let M = "",
              I = "",
              P = d.data("custom-vc-row");
            d.data("vc");
            let A = d.data("theme-support"),
              L = d.data("is_old_vc");
            (void 0 !== P && "" !== P) || (P = "wpb_row"),
              void 0 === L && (L = !1),
              void 0 === A && (A = "disable"),
              d.data("multi-color-overlay") &&
                ((M = d.data("multi-color-overlay")),
                (I = d.data("multi-color-overlay-opacity")));
            let B =
              (overlay_color_html =
              overlay_pattern_html =
              overlay_multi_color_html =
              overlay_pattern_attachment_css =
                "");
            void 0 !== c &&
              "true" === c.toString() &&
              ("" != v &&
                ("" != _ && (_ = "background-size:" + _ + "px;"),
                void 0 !== b &&
                  "" != b &&
                  (overlay_pattern_attachment_css =
                    "background-attachment:" + b + ";"),
                (overlay_pattern_html =
                  '<div class="upb_bg_overlay_pattern" style="background-image:url(' +
                  v +
                  "); opacity:" +
                  h +
                  "; " +
                  _ +
                  "; " +
                  overlay_pattern_attachment_css +
                  '"></div>')),
              "" != u &&
                (overlay_color_html =
                  '<div class="upb_bg_overlay" style="background-color:' +
                  u +
                  ';"></div>'),
              "" != M &&
                (overlay_multi_color_html =
                  '<div class="upb_bg_overlay ' +
                  M +
                  '" style="opacity:' +
                  I +
                  ';"></div>'),
              (B =
                overlay_color_html +
                overlay_pattern_html +
                overlay_multi_color_html)),
              0 != l ? l : (l = ""),
              (h =
                1 == L || "enable" == A
                  ? (d.prev().is("p") || d.prev().is("style")
                      ? d.prev()
                      : d
                    ).prev()
                  : d.prevAll("." + P + ":first")).css("position", "relative");
            u = h.attr("class");
            const O = d;
            d = h;
            var N;
            !(function () {
              let t, e, a;
              if (
                ((a = d),
                (resize_selector = a.find(".upb_video-bg")),
                "full" == n && (a = jQuery("body")),
                "ex-full" == n && (a = jQuery("html")),
                !isNaN(n))
              )
                for (let t = 0; t < n && "HTML" != a.prop("tagName"); t++)
                  a = a.parent();
              (e = resize_selector.parents("upb_video_class").outerHeight()),
                (t = a.outerWidth()),
                "browser_size" == n &&
                  ((e = jQuery(window).height()),
                  (t = jQuery(window).width()),
                  a.css("min-height", e + "px")),
                resize_selector.css({
                  "min-height": e + "px",
                  "min-width": t + "px",
                }),
                a.offset() &&
                  (a.offset().left,
                  resize_selector.offset() && resize_selector.offset().left);
              let r = t,
                o,
                s = e,
                i,
                l = resize_selector.find(".upb_vimeo_iframe");
              (youvideoplayer = resize_selector.find(".upb_utube_iframe")),
                (embeddedvideoplayer = resize_selector.find(".upb_video-src"));
              l &&
                (r / (16 / 9) < s
                  ? ((o = Math.ceil(s * (16 / 9))),
                    l
                      .width(o)
                      .height(s)
                      .css({ left: (r - o) / 2, top: 0 }))
                  : ((i = Math.ceil(r / (16 / 9))),
                    l
                      .width(r)
                      .height(i)
                      .css({ left: 0, top: (s - i) / 2 }))),
                embeddedvideoplayer &&
                  (r / (16 / 9) < resize_selector.height()
                    ? (embeddedvideoplayer.css("width", "auto"),
                      embeddedvideoplayer.css("height", "100%"))
                    : (embeddedvideoplayer.css("width", "100%"),
                      embeddedvideoplayer.css("height", "auto")));
            })(),
              "" != z &&
                (d.addClass("ult-vc-hide-row"), d.attr("data-hide-row", z)),
              d.attr("data-rtl", k),
              d.addClass("upb_video_class"),
              d.attr("data-row-effect-mobile-disable", Q),
              "fadeout_row_value" == y &&
                (d.addClass("vc-row-fade"),
                d.attr("data-fadeout-percentage", w)),
              d.attr("data-upb_br_animation", p),
              t &&
                (-1 != t.indexOf("youtube.com")
                  ? (T = "youtube")
                  : -1 != t.indexOf("vimeo.com") && (T = "vimeo"));
            let S = "";
            "display_control" == m &&
              ((p =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                )
                  ? ((N = "ult-vid-cntrlplay"), "pause")
                  : ((N = "ult-vid-cntrlpause"), "play")),
              (S =
                '<span class="video-controls" data-action="' +
                p +
                '" style="color:' +
                f +
                '"><i class="' +
                N +
                '"></i></span>')),
              "browser_size" == n &&
                (d.wrapInner(
                  '<div class="upb_video-text-wrapper"><div class="upb_video-text"></div></div>'
                ),
                d
                  .find(".upb_video-text-wrapper")
                  .find(".upb_video-text")
                  .addClass(u)),
              "parallax_content_value" == x &&
                (d.addClass("vc-row-translate"),
                d.attr("data-parallax-content-sense", j),
                d.wrapInner(
                  '<div class="vc-row-translate-wrapper ' + u + '"></div>'
                ),
                (j = d.css("padding-top")),
                (u = d.css("padding-bottom")),
                d
                  .find(".vc-row-translate-wrapper")
                  .css({ "padding-top": j, "padding-bottom": u }),
                d[0].style.setProperty("padding-top", "0px", "important"),
                d[0].style.setProperty("padding-bottom", "0px", "important"));
            let R = "";
            if (
              ("true" == C.toString() && (R = "uvc-video-fixer"),
              "youtube" == T || "vimeo" == T
                ? d.prepend(
                    '<div class="upb_video-wrapper ' +
                      R +
                      '"><div class="upb_video-bg utube" data-rtl="' +
                      k +
                      '" data-bg-override="' +
                      n +
                      '" data-row="' +
                      P +
                      '" data-theme-support="' +
                      A +
                      '">' +
                      B +
                      "</div></div>"
                  )
                : d.prepend(
                    ' <div class="upb_video-wrapper"><div class="upb_video-bg" data-bg-override="' +
                      n +
                      '" data-rtl="' +
                      k +
                      '" data-row="' +
                      P +
                      '" data-theme-support="' +
                      A +
                      '"><video class="upb_video-src"></video>' +
                      S +
                      B +
                      "</div></div>"
                  ),
              W(O, d),
              O.remove(),
              "youtube" == T)
            ) {
              t = t.substring(
                t.indexOf("watch?v=") + 8,
                t.indexOf("watch?v=") + 19
              );
              var H = d.find(".upb_video-bg");
              "loop" == r && (r = !0),
                "muted" == a && (a = !0),
                H.attr("data-vdo", t),
                H.attr("data-loop", r),
                H.attr("data-poster", s),
                H.attr("data-muted", a),
                H.attr("data-start", i),
                H.attr("data-stop", l),
                !0 === g &&
                  (H.addClass("enable-on-viewport"),
                  H.addClass("youtube-video"),
                  E());
            } else if ("vimeo" == T)
              (t = t.substring(
                t.indexOf("vimeo.com/") + 10,
                t.indexOf("vimeo.com/") + 18
              )),
                (H = d.find(".upb_video-bg")).html(
                  '<iframe class="upb_vimeo_iframe" src="https://player.vimeo.com/video/' +
                    t +
                    '?portrait=0&amp;byline=0&amp;title=0&amp;badge=0&amp;loop=0&amp;autoplay=1&amp;api=1&amp;rel=0&amp;" height="1600" width="900" frameborder=""></iframe>'
                );
            else {
              H = d.find(".upb_video-src");
              if (
                ((hosted_wrapper = H.parent()),
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ) && "display_control" != m)
              )
                "display_control" != m &&
                  ("" != s && H.parent().find(".video-controls").hide(),
                  H.remove());
              else {
                if (
                  (jQuery("<source/>", { type: "video/mp4", src: t }).appendTo(
                    H
                  ),
                  void 0 !== e && "" !== e)
                ) {
                  let t = "";
                  e.match(/.ogg/i)
                    ? (t = "video/ogg")
                    : e.match(/.webm/i) && (t = "video/webm"),
                    "" != t &&
                      jQuery("<source/>", { type: t, src: e }).appendTo(H);
                }
                "muted" == a && H.attr({ "data-mute": "muted" }),
                  "loop" == r && H.attr({ loop: r }),
                  H.attr({ preload: "auto" }),
                  !0 === g
                    ? (H.addClass("enable-on-viewport"),
                      H.addClass("hosted-video"),
                      E())
                    : "autoplay" == o && H.attr({ autoplay: o });
              }
            }
            "" != s &&
              (H.is(".utube") ? H : hosted_wrapper).css({
                "background-image": "url(" + s + ")",
              }),
              jQuery(".upb_video-src").each(function (t, e) {
                let a = jQuery(e).attr("data-mute");
                if ((void 0 === a && (a = !1), "muted" === a)) {
                  const r = jQuery(e)[0];
                  r.muted = "muted";
                }
              });
          }),
          this
        );
      }),
      (jQuery.fn.ultimate_bg_shift = function () {
        return (
          jQuery(this).each(function () {
            let s = jQuery(this);
            var t = s.data("ultimate-bg"),
              e = s.data("ultimate-bg-style"),
              a = s.prev().css("background-color"),
              r = s.data("bg-img-repeat"),
              o = s.data("bg-img-size"),
              i = s.data("bg-img-position"),
              l = s.data("parallx_sense");
            const d = s.data("bg-override");
            var n = s.data("bg_img_attach"),
              p = s.data("upb-bg-animation"),
              c = "";
            const u = s.data("overlay");
            var c = s.data("overlay-color"),
              v = s.data("overlay-pattern"),
              h = s.data("overlay-pattern-opacity");
            let _ = s.data("overlay-pattern-size");
            var b = s.data("overlay-pattern-attachment"),
              g = s.data("fadeout"),
              m = s.data("fadeout-percentage"),
              f = s.data("parallax-content"),
              y = s.data("parallax-content-sense"),
              w = s.data("bg-animation"),
              x = s.data("bg-animation-type"),
              j = s.data("animation-repeat"),
              Q = s.data("row-effect-mobile-disable"),
              z = s.data("img-parallax-mobile-disable"),
              k = s.data("hide-row"),
              C = s.data("rtl");
            let M = "",
              I = "",
              P = s.data("custom-vc-row");
            s.data("vc");
            let A = s.data("theme-support"),
              L = s.data("is_old_vc");
            (void 0 !== P && "" !== P) || (P = "wpb_row"),
              void 0 === L && (L = !1),
              void 0 === A && (A = "disable"),
              s.data("multi-color-overlay") &&
                ((M = s.data("multi-color-overlay")),
                (I = s.data("multi-color-overlay-opacity")));
            let B =
              (overlay_color_html =
              overlay_pattern_html =
              overlay_multi_color_html =
              overlay_pattern_attachment_css =
                "");
            void 0 !== u &&
              "true" === u.toString() &&
              ("" != v &&
                ("" != _ && (_ = "background-size:" + _ + "px;"),
                void 0 !== b &&
                  "" != b &&
                  (overlay_pattern_attachment_css =
                    "background-attachment:" + b + ";"),
                (overlay_pattern_html =
                  '<div class="upb_bg_overlay_pattern" style="background-image:url(' +
                  v +
                  "); opacity:" +
                  h +
                  "; " +
                  _ +
                  "; " +
                  overlay_pattern_attachment_css +
                  '"></div>')),
              "" != c &&
                (overlay_color_html =
                  '<div class="upb_bg_overlay" style="background-color:' +
                  c +
                  ';"></div>'),
              "" != M &&
                (overlay_multi_color_html =
                  '<div class="upb_bg_overlay ' +
                  M +
                  '" style="opacity:' +
                  I +
                  ';"></div>'),
              (B =
                overlay_color_html +
                overlay_pattern_html +
                overlay_multi_color_html)),
              (h =
                1 == L || "enable" == A
                  ? (s.prev().is("p") || s.prev().is("style")
                      ? s.prev()
                      : s
                    ).prev()
                  : s.prevAll("." + P + ":first")).css("position", "relative");
            c = h.attr("class");
            "browser_size" == d &&
              (h.wrapInner(
                '<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'
              ),
              s
                .parent()
                .find(".upb-background-text-wrapper")
                .addClass("full-browser-size"),
              s
                .parent()
                .find(".upb-background-text-wrapper")
                .find(".upb-background-text")
                .addClass(c)),
              "parallax_content_value" == f &&
                (h.addClass("vc-row-translate"),
                h.attr("data-parallax-content-sense", y),
                h.wrapInner(
                  '<div class="vc-row-translate-wrapper ' + c + '"></div>'
                ),
                (y = h.css("padding-top")),
                (c = h.css("padding-bottom")),
                h
                  .find(".vc-row-translate-wrapper")
                  .css({ "padding-top": y, "padding-bottom": c }),
                void 0 !== h[0] &&
                  "" !== h &&
                  (h[0].style.setProperty("padding-top", "0px", "important"),
                  h[0].style.setProperty(
                    "padding-bottom",
                    "0px",
                    "important"
                  ))),
              "" != k &&
                (h.addClass("ult-vc-hide-row"), h.attr("data-hide-row", k)),
              h.attr("data-rtl", C),
              h.prepend('<div class="upb_row_bg">' + B + "</div>"),
              s.remove(),
              W(s, h),
              (s = h),
              s.attr("data-row-effect-mobile-disable", Q),
              s.attr("data-img-parallax-mobile-disable", z),
              "fadeout_row_value" == g &&
                (s.addClass("vc-row-fade"),
                s.attr("data-fadeout-percentage", m)),
              s.css("background-image", ""),
              (s = s.find(".upb_row_bg")),
              s.attr("data-upb_br_animation", p),
              "automatic" != o
                ? s.css({ "background-size": o })
                : s.addClass("upb_bg_size_automatic"),
              s.css({
                "background-repeat": r,
                "background-position": i,
                "background-color": a,
              }),
              "vcpb-fs-jquery" == e || "vcpb-mlvp-jquery" == e
                ? s.attr("data-img-array", t)
                : s.css({ "background-image": t, "background-attachment": n }),
              s.attr("data-parallax_sense", l),
              s.attr("data-bg-override", d),
              s.attr("data-bg-animation", w),
              s.attr("data-bg-animation-type", x),
              s.attr("data-animation-repeat", j),
              s.addClass(e);
            const O = function () {
              let t, e, a, r;
              if (
                ((e = s.parent()),
                "full" == d && ((e = jQuery("body")), (a = 0)),
                "ex-full" == d && ((e = jQuery("html")), (a = 0)),
                !isNaN(d))
              ) {
                for (let t = 0; t < d && "HTML" != e.prop("tagName"); t++)
                  e = e.parent();
                a = e.offset().left;
              }
              var o;
              (wh = jQuery(window).height()),
                s.parent().outerHeight(),
                (t = e.outerWidth()),
                s.css({ "min-width": t + "px" }),
                void 0 !== s.offset() && (r = s.offset().left),
                1 == N()
                  ? s.css({ right: -Math.abs(a - r) + "px" })
                  : s.css({ left: -Math.abs(a - r) + "px" }),
                "browser_size" == d &&
                  ((o = s.parent().find(".upb-background-text").height()) >
                    wh && (wh = o),
                  s.parent().css("height", wh + "px"),
                  s
                    .parent()
                    .find(".upb-background-text-wrapper")
                    .css("height", wh + "px"));
            };
            O(),
              jQuery(window).on("load", function () {
                O();
              }),
              jQuery(window).resize(function () {
                O();
              });
          }),
          this
        );
      }),
      (jQuery.fn.ultimate_grad_shift = function () {
        return (
          jQuery(this).each(function () {
            let s = jQuery(this),
              t = s.data("grad");
            s.data("grad-type"), s.data("grad-custom-degree");
            const i = jQuery(this).data("bg-override"),
              e = s.data("overlay");
            var a = s.data("overlay-color"),
              r = s.data("overlay-pattern"),
              o = s.data("overlay-pattern-opacity");
            let l = s.data("overlay-pattern-size");
            var d = s.data("overlay-pattern-attachment"),
              n = s.data("upb-bg-animation"),
              p = s.data("fadeout"),
              c = s.data("fadeout-percentage"),
              u = s.data("parallax-content"),
              v = s.data("parallax-content-sense"),
              h = s.data("row-effect-mobile-disable"),
              _ = s.data("hide-row"),
              b = s.data("rtl");
            let g = "",
              m = "",
              f = s.data("custom-vc-row");
            var y;
            s.data("vc");
            let w = s.data("theme-support"),
              x = s.data("is_old_vc");
            (void 0 !== f && "" !== f) || (f = "wpb_row"),
              void 0 === x && (x = !1),
              void 0 === w && (w = "disable"),
              s.data("multi-color-overlay") &&
                ((g = s.data("multi-color-overlay")),
                (m = s.data("multi-color-overlay-opacity"))),
              (y =
                1 == x || "enable" == w
                  ? (s.prev().is("p") || s.prev().is("style")
                      ? s.prev()
                      : s
                    ).prev()
                  : s.prevAll("." + f + ":first")).css("position", "relative");
            var j = y.attr("class");
            s.remove();
            let Q =
              (overlay_color_html =
              overlay_pattern_html =
              overlay_multi_color_html =
              overlay_pattern_attachment_css =
                "");
            void 0 !== e &&
              "true" === e.toString() &&
              ("" != r &&
                ("" != l && (l = "background-size:" + l + "px;"),
                void 0 !== d &&
                  "" != d &&
                  (overlay_pattern_attachment_css =
                    "background-attachment:" + d + ";"),
                (overlay_pattern_html =
                  '<div class="upb_bg_overlay_pattern" style="background-image:url(' +
                  r +
                  "); opacity:" +
                  o +
                  "; " +
                  l +
                  "; " +
                  overlay_pattern_attachment_css +
                  '"></div>')),
              "" != a &&
                (overlay_color_html =
                  '<div class="upb_bg_overlay" style="background-color:' +
                  a +
                  ';"></div>'),
              "" != g &&
                (overlay_multi_color_html =
                  '<div class="upb_bg_overlay ' +
                  g +
                  '" style="opacity:' +
                  m +
                  ';"></div>'),
              (Q =
                overlay_color_html +
                overlay_pattern_html +
                overlay_multi_color_html)),
              "browser_size" == i &&
                (y.wrapInner(
                  '<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'
                ),
                y
                  .find(".upb-background-text-wrapper")
                  .find(".upb-background-text")
                  .addClass(j),
                y.addClass("full-browser-size")),
              "parallax_content_value" == u &&
                (y.addClass("vc-row-translate"),
                y.attr("data-parallax-content-sense", v),
                y.wrapInner(
                  '<div class="vc-row-translate-wrapper ' + j + '"></div>'
                ),
                (v = y.css("padding-top")),
                (j = y.css("padding-bottom")),
                y
                  .find(".vc-row-translate-wrapper")
                  .css({ "padding-top": v, "padding-bottom": j }),
                void 0 !== y[0] &&
                  "" !== y &&
                  (y[0].style.setProperty("padding-top", "0px", "important"),
                  y[0].style.setProperty(
                    "padding-bottom",
                    "0px",
                    "important"
                  ))),
              "" != _ &&
                (y.addClass("ult-vc-hide-row"), y.attr("data-hide-row", _)),
              y.attr("data-rtl", b),
              y.prepend('<div class="upb_row_bg">' + Q + "</div>"),
              W(s, y),
              (s = y),
              s.attr("data-row-effect-mobile-disable", h),
              "fadeout_row_value" == p &&
                (s.addClass("vc-row-fade"),
                s.attr("data-fadeout-percentage", c)),
              s.css("background-image", ""),
              (s = s.find(".upb_row_bg")),
              s.attr("data-upb_br_animation", n),
              (t = t.replace("url(data:image/svg+xml;base64,", ""));
            n = t.indexOf(";");
            (t = t.substring(n + 1)),
              s.attr("style", t),
              s.attr("data-bg-override", i),
              "browser_size" == i &&
                s
                  .parent()
                  .find(".upb-background-text-wrapper")
                  .addClass("full-browser-size");
            const z = function () {
              let t, e, a, r;
              if (
                ((e = s.parent()),
                "full" == i && ((e = jQuery("body")), (a = 0)),
                "ex-full" == i && ((e = jQuery("html")), (a = 0)),
                !isNaN(i))
              ) {
                for (let t = 0; t < i && "HTML" != e.prop("tagName"); t++)
                  e = e.parent();
                a = e.offset().left;
              }
              var o;
              (wh = jQuery(window).height()),
                s.parent().outerHeight(),
                (t = e.outerWidth()),
                s.css({ "min-width": t + "px" }),
                (r = s.offset().left),
                1 == N()
                  ? s.css({ right: -Math.abs(a - r) + "px" })
                  : s.css({ left: -Math.abs(a - r) + "px" }),
                "browser_size" == i &&
                  ((o = s.parent().find(".upb-background-text").height()) >
                    wh && (wh = o),
                  s.parent().css("height", wh + "px"),
                  s
                    .parent()
                    .find(".upb-background-text-wrapper")
                    .css("height", wh + "px"));
            };
            z(),
              jQuery(window).on("load", function () {
                z();
              }),
              jQuery(window).resize(function () {
                z();
              });
          }),
          this
        );
      }),
      (jQuery.fn.ultimate_bg_color_shift = function () {
        return (
          jQuery(this).each(function () {
            let s = jQuery(this);
            const i = jQuery(this).data("bg-override");
            var t = jQuery(this).data("bg-color"),
              e = s.data("fadeout"),
              a = s.data("fadeout-percentage"),
              r = s.data("parallax-content"),
              o = s.data("parallax-content-sense"),
              l = s.data("row-effect-mobile-disable");
            const d = s.data("overlay");
            var n = s.data("overlay-color"),
              p = s.data("overlay-pattern"),
              c = s.data("overlay-pattern-opacity");
            let u = s.data("overlay-pattern-size");
            var v = s.data("overlay-pattern-attachment"),
              h = s.data("hide-row"),
              _ = s.data("rtl");
            let b = "",
              g = "";
            var m;
            s.data("vc");
            let f = s.data("theme-support"),
              y = s.data("custom-vc-row"),
              w = s.data("is_old_vc");
            (void 0 !== y && "" !== y) || (y = "wpb_row"),
              void 0 === w && (w = !1),
              void 0 === f && (f = "disable"),
              s.data("multi-color-overlay") &&
                ((b = s.data("multi-color-overlay")),
                (g = s.data("multi-color-overlay-opacity"))),
              (m =
                1 == w || "enable" == f
                  ? (s.prev().is("p") || s.prev().is("style")
                      ? s.prev()
                      : s
                    ).prev()
                  : s.prevAll("." + y + ":first")).css("position", "relative");
            var x = m.attr("class");
            let j =
              (overlay_color_html =
              overlay_pattern_html =
              overlay_multi_color_html =
              overlay_pattern_attachment_css =
                "");
            if (
              (void 0 !== d &&
                "true" === d.toString() &&
                ("" != p &&
                  ("" != u && (u = "background-size:" + u + "px;"),
                  void 0 !== v &&
                    "" != v &&
                    (overlay_pattern_attachment_css =
                      "background-attachment:" + v + ";"),
                  (overlay_pattern_html =
                    '<div class="upb_bg_overlay_pattern" style="background-image:url(' +
                    p +
                    "); opacity:" +
                    c +
                    "; " +
                    u +
                    "; " +
                    overlay_pattern_attachment_css +
                    '"></div>')),
                "" != n &&
                  (overlay_color_html =
                    '<div class="upb_bg_overlay" style="background-color:' +
                    n +
                    ';"></div>'),
                "" != b &&
                  (overlay_multi_color_html =
                    '<div class="upb_bg_overlay ' +
                    b +
                    '" style="opacity:' +
                    g +
                    ';"></div>'),
                (j =
                  overlay_color_html +
                  overlay_pattern_html +
                  overlay_multi_color_html)),
              "browser_size" == i
                ? (m.wrapInner(
                    '<div class="upb-background-text-wrapper"><div class="upb-background-text"></div></div>'
                  ),
                  m
                    .find(".upb-background-text-wrapper")
                    .find(".upb-background-text")
                    .addClass(x))
                : 0,
              "" != h &&
                (m.addClass("ult-vc-hide-row"), m.attr("data-hide-row", h)),
              m.attr("data-rtl", _),
              "parallax_content_value" == r &&
                (m.addClass("vc-row-translate"),
                m.wrapInner(
                  '<div class="vc-row-translate-wrapper ' + x + '"></div>'
                ),
                m.attr("data-parallax-content-sense", o),
                (x = m.css("padding-top")),
                (o = m.css("padding-bottom")),
                m
                  .find(".vc-row-translate-wrapper")
                  .css({ "padding-top": x, "padding-bottom": o }),
                void 0 !== m[0] &&
                  "" !== m &&
                  (m[0].style.setProperty("padding-top", "0px", "important"),
                  m[0].style.setProperty(
                    "padding-bottom",
                    "0px",
                    "important"
                  ))),
              m.prepend('<div class="upb_row_bg">' + j + "</div>"),
              W(s, m),
              s.remove(),
              (s = m),
              s.attr("data-row-effect-mobile-disable", l),
              "fadeout_row_value" == e &&
                (s.addClass("vc-row-fade"),
                s.attr("data-fadeout-percentage", a)),
              s.css("background-image", ""),
              (s = s.find(".upb_row_bg")),
              s.css({ background: t }),
              s.attr("data-bg-override", i),
              "browser_size" == i &&
                s
                  .parent()
                  .find(".upb-background-text-wrapper")
                  .addClass("full-browser-size"),
              0 !== s.length)
            ) {
              const Q = function () {
                let t, e, a, r;
                if (
                  ((e = s.parent()),
                  "full" == i && ((e = jQuery("body")), (a = 0)),
                  "ex-full" == i && ((e = jQuery("html")), (a = 0)),
                  !isNaN(i))
                ) {
                  for (let t = 0; t < i && "HTML" != e.prop("tagName"); t++)
                    e = e.parent();
                  a = e.offset().left;
                }
                var o;
                (wh = jQuery(window).height()),
                  s.parent().outerHeight(),
                  (t = e.outerWidth()),
                  s.css({ "min-width": t + "px" }),
                  (r = s.offset().left),
                  1 == N()
                    ? s.css({ right: -Math.abs(a - r) + "px" })
                    : s.css({ left: -Math.abs(a - r) + "px" }),
                  "browser_size" == i &&
                    ((o = s.parent().find(".upb-background-text").height()) >
                      wh && (wh = o),
                    s.parent().css("height", wh + "px"),
                    s
                      .parent()
                      .find(".upb-background-text-wrapper")
                      .css("height", wh + "px"));
              };
              Q(),
                jQuery(window).on("load", function () {
                  Q();
                }),
                jQuery(window).resize(function () {
                  Q();
                });
            }
          }),
          this
        );
      }),
      (jQuery.fn.ultimate_parallax_animation = function (l) {
        const d = jQuery(window).height(),
          n = function (t) {
            return t.height();
          },
          t = jQuery(this);
        let p = jQuery(window).scrollTop();
        function e() {
          let s;
          const i = jQuery(window).scrollTop();
          t.each(function () {
            if ("upb_fade_animation" == jQuery(this).data("upb_br_animation")) {
              s = jQuery(this).offset().top;
              const o = jQuery(this);
              var t,
                e,
                a = o.offset().top,
                r = n(o);
              a + r < i ||
                a > i + d - 100 ||
                ((t = p - i),
                a + r - d < i &&
                  ((t = t / d),
                  "parent" == l &&
                    ((e = parseInt(jQuery(this).css("opacity"))),
                    (e += t / 2.3),
                    jQuery(this).parents(".wpb_row").css({ opacity: e })),
                  "self" == l &&
                    ((e = parseInt(jQuery(this).css("opacity"))),
                    (e += t / 2.3),
                    jQuery(this).css({ opacity: e }))),
                (p = i));
            }
          });
        }
        jQuery(window).bind("scroll", e).resize(e), e();
      });
    let c = 0;
    (jQuery(".upb_content_video, .upb_content_iframe").prev().is("p")
      ? jQuery(".upb_content_video, .upb_content_iframe").prev()
      : jQuery(".upb_content_video, .upb_content_iframe")
    )
      .prev()
      .css("background-image", "")
      .css("background-repeat", ""),
      jQuery(".upb_content_video").ultimate_video_bg(),
      jQuery(".upb_bg_img").ultimate_bg_shift(),
      jQuery(".upb_content_iframe").ultimate_video_bg(),
      jQuery(".upb_grad").ultimate_grad_shift(),
      jQuery(".upb_color").ultimate_bg_color_shift(),
      jQuery(".upb_no_bg").each(function (t, e) {
        var a = jQuery(e).attr("data-fadeout"),
          r = jQuery(e).data("fadeout-percentage"),
          o = jQuery(e).data("parallax-content"),
          s = jQuery(e).data("parallax-content-sense"),
          i = jQuery(e).data("row-effect-mobile-disable");
        let l = jQuery(e).data("custom-vc-row"),
          d = jQuery(e).data("vc"),
          n = jQuery(e).data("theme-support");
        if (
          ((void 0 !== l && "" !== l) || (l = "wpb_row"),
          void 0 === d && (d = 0),
          void 0 === n && (n = "disable"),
          (d = parseFloat(d)),
          (e =
            d < 4.4 || "enable" == n
              ? (jQuery(e).prev().is("p") || jQuery(e).prev().is("style")
                  ? jQuery(e).prev()
                  : jQuery(e)
                ).prev()
              : jQuery(e).prevAll("." + l + ":first")).css(
            "position",
            "relative"
          ),
          void 0 === e[0])
        )
          return !1;
        e.attr("row-effect-mobile-disable", i),
          "fadeout_row_value" == a &&
            (e.addClass("vc-row-fade"), e.data("fadeout-percentage", r)),
          "parallax_content_value" == o &&
            (e.addClass("vc-row-translate"),
            e.attr("data-parallax-content-sense", s),
            e.wrapInner('<div class="vc-row-translate-wrapper"></div>'),
            (o = e.css("padding-top")),
            (s = e.css("padding-bottom")),
            e
              .find(".vc-row-translate-wrapper")
              .css({ "padding-top": o, "padding-bottom": s }),
            void 0 !== e[0] &&
              "" !== e &&
              (e[0].style.setProperty("padding-top", "0px", "important"),
              e[0].style.setProperty("padding-bottom", "0px", "important")));
      }),
      jQuery(".upb_no_bg").remove();
    const t = function () {
      jQuery(".upb_row_bg").each(function () {
        var e = jQuery(this).data("bg-override"),
          t = jQuery(this).data("theme-support"),
          a = jQuery(this).data("row");
        let r, o;
        if (
          ((o =
            void 0 !== t && "enable" !== t
              ? jQuery(this).parents("." + a + ":first")
              : jQuery(this).parent()),
          o.addClass("vc_row-has-fill"),
          "browser_size" == e && (r = jQuery("html")),
          "ex-full" == e)
        )
          r = jQuery("html");
        else if ("full" == e) r = jQuery("body");
        else if (!isNaN(e)) {
          r = o;
          for (let t = 0; t < e && !r.is("html"); t++) r = r.parent();
        }
        var s =
            parseInt(r.css("paddingLeft")) +
            parseInt(r.css("paddingRight")) +
            r.width(),
          t = -(o.offset().left - r.offset().left);
        0 < t && (left = 0),
          1 == N()
            ? jQuery(this).css({ width: s, right: t })
            : jQuery(this).css({ width: s, left: t }),
          "browser_size" == e &&
            (r.width(),
            r.height(),
            o.width(),
            (a = o.height()),
            (s = o.find(".upb-background-text").height()),
            (t = jQuery(window).height()),
            (t = a < s ? s : t),
            o.css("min-height", t + "px"),
            o.find(".upb-background-text-wrapper").css("min-height", t + "px"));
      }),
        jQuery(".upb_video-bg").each(function (t, e) {
          var a = jQuery(this).data("bg-override"),
            r = jQuery(this).attr("data-rtl"),
            o = jQuery(this).data("theme-support"),
            s = jQuery(this).data("row");
          let i, l;
          if (
            ((l =
              void 0 !== o && "enable" !== o
                ? jQuery(this).parents("." + s + ":first")
                : jQuery(this).parent()),
            "true" == l.attr("data-vc-full-width") ||
            1 == l.attr("data-vc-full-width")
              ? l.addClass("uvc-vc-full-width")
              : l.addClass("uvc-row"),
            "browser_size" == a)
          )
            (i = jQuery("html")),
              jQuery(this)
                .parents(".upb_video_class")
                .css("overflow", "visible");
          else if ("ex-full" == a)
            (i = jQuery("html")),
              jQuery(this)
                .parents(".upb_video_class")
                .css("overflow", "visible");
          else if ("full" == a)
            (i = jQuery("body")),
              jQuery(this)
                .parents(".upb_video_class")
                .css("overflow", "visible");
          else if (isNaN(a) || 0 == a) i = l;
          else {
            i = l;
            for (let t = 1; t <= a && !i.is("html"); t++) i = i.parent();
          }
          parseInt(i.css("paddingLeft")),
            parseInt(i.css("paddingRight")),
            parseInt(i.css("marginLeft"));
          let d = i.outerWidth();
          var n = d,
            o = jQuery(this).offset().left,
            s = jQuery(this).position().left;
          let p = i.offset().left - o;
          s < 0 && (p = s + p),
            0 == t && (c = s),
            0 < c && (p = c),
            0 < p && (p = 0),
            void 0 === r || (!0 !== r && "true" !== r)
              ? jQuery(this).css({ width: d, "min-width": d, left: p })
              : jQuery(this).css({ width: d, "min-width": d, right: p });
          jQuery(window).width();
          (s = jQuery(window).height()), l.find("video").height();
          (r = ("browser_size" == a ? l.find(".upb_video-text") : l).height()),
            d < 960 && (d = (16 / 9) * r + d),
            (pHeight = Math.ceil(d / (16 / 9))),
            (children = jQuery(this).children()),
            children.removeClass("ult-make-full-height"),
            n < r && children.addClass("ult-make-full-height");
          n = jQuery(this).css("background-image");
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
            ? (void 0 !== n && "none" != n) ||
              (children.css({ "max-height": "auto", height: "auto" }),
              l.css("min-height", "auto"))
            : "browser_size" == a &&
              ((s = s < r ? r : s),
              l.addClass("video-browser-size"),
              l
                .find(".upb-background-text-wrapper")
                .addClass("full-browser-size"),
              l.css("min-height", s + "px"),
              0 < l.find(".upb_video-text-wrapper").length &&
                (l
                  .find(".upb_video-text-wrapper")
                  .addClass("full-browser-size"),
                l.find(".upb_video-text-wrapper").css("min-height", s + "px")));
        });
    };
    function e() {
      jQuery(".ult-vc-seperator").each(function (t, e) {
        var a = jQuery(this).data("full-width");
        let r = jQuery(this).parent().data("rtl");
        void 0 === r && (r = "false");
        var o = jQuery(this).parent().find(".upb_row_bg").data("bg-override");
        if (
          ("ex-full" ==
            (o =
              void 0 === o
                ? jQuery(this)
                    .parent()
                    .find(".upb_video-bg")
                    .data("bg-override")
                : o) ||
            "full" == o ||
            "browser_size" == o) &&
          1 == a
        ) {
          let t = jQuery("html").width();
          jQuery(this).hasClass("ult-rounded-split-seperator-wrapper") &&
            ((a = jQuery(this).data("border")),
            (s = jQuery(this).data("border-width")),
            void 0 !== a && "none" != a && "undefined" != a && (t -= s));
          var s = jQuery(this).offset().left;
          jQuery(this).find(".ult-main-seperator-inner").width(t),
            "true" == r.toString()
              ? jQuery(this)
                  .find(".ult-main-seperator-inner")
                  .css({ "margin-right": -s + "px" })
              : jQuery(this)
                  .find(".ult-main-seperator-inner")
                  .css({ "margin-left": -s + "px" });
        }
      });
    }
    t(),
      jQuery(window).on("load", function () {
        t(), e();
      }),
      jQuery(window).resize(function () {
        t(), e();
      }),
      jQuery(document).ajaxComplete(function (t, e, a) {
        (jQuery(".upb_content_video, .upb_content_iframe").prev().is("p")
          ? jQuery(".upb_content_video, .upb_content_iframe").prev()
          : jQuery(".upb_content_video, .upb_content_iframe")
        )
          .prev()
          .css("background-image", "")
          .css("background-repeat", ""),
          jQuery(".upb_content_video").ultimate_video_bg(),
          jQuery(".upb_bg_img").ultimate_bg_shift(),
          jQuery(".upb_content_iframe").ultimate_video_bg(),
          jQuery(".upb_grad").ultimate_grad_shift(),
          jQuery(".upb_color").ultimate_bg_color_shift();
      }),
      jQuery(".video-controls").click(function (t) {
        var e = jQuery(this).attr("data-action");
        const a = jQuery(this).parent().find(".upb_video-src");
        "pause" == e
          ? (jQuery(this).attr("data-action", "play"),
            a[0].play(),
            jQuery(this).html('<i class="ult-vid-cntrlpause"></i>'))
          : (jQuery(this).attr("data-action", "pause"),
            a[0].pause(),
            jQuery(this).html('<i class="ult-vid-cntrlplay"></i>')),
          a.hasClass("enable-on-viewport") && a.addClass("override-controls");
      }),
      jQuery(".ult-vc-hide-row").each(function (t, e) {
        var a = jQuery(e).data("hide-row");
        "" != a && jQuery(e).addClass(a);
      }),
      e(),
      jQuery(".vcpb-animated").each(function (t, a) {
        var r = jQuery(a).data("animation-repeat");
        jQuery(this).css({ "background-repeat": r });
        let e = jQuery(a).parent().attr("data-img-parallax-mobile-disable");
        if (
          ((e = void 0 === e ? "false" : e.toString()),
          "false" ==
            ("true" ==
              (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? "true"
                : "false") && "true" == e
              ? "true"
              : "false"))
        ) {
          let t = 10;
          "" != jQuery(this).attr("data-parallax_sense") &&
            (t = jQuery(this).attr("data-parallax_sense")),
            (t = 100 - t);
          r = jQuery(this).attr("data-bg-animation-type");
          const o = jQuery(this).attr("data-bg-animation");
          let e = 0;
          const s = r;
          setInterval(function (t) {
            "right-animation" == o || "bottom-animation" == o ? --e : (e += 1),
              jQuery(a).css(
                "backgroundPosition",
                "h" == s ? e + "px 0" : "0 " + e + "px"
              );
          }, t);
        }
      });
  });
})(jQuery);
