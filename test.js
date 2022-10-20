function getIframeWindow(a) {
  var b;
  return a.contentWindow
    ? a.contentWindow
    : a.window
    ? a.window
    : (!b && a.contentDocument && (b = a.contentDocument),
      !b && a.document && (b = a.document),
      b && b.defaultView
        ? b.defaultView
        : b && b.parentWindow
        ? b.parentWindow
        : void 0);
}
if (
  ("object" != typeof JSON && (JSON = {}),
  (function () {
    "use strict";
    function f(a) {
      return 10 > a ? "0" + a : a;
    }
    function quote(a) {
      return (
        (escapable.lastIndex = 0),
        escapable.test(a)
          ? '"' +
            a.replace(escapable, function (a) {
              var b = meta[a];
              return "string" == typeof b
                ? b
                : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + a + '"'
      );
    }
    function str(a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = gap,
        i = b[a];
      switch (
        (i &&
          "object" == typeof i &&
          "function" == typeof i.toJSON &&
          (i = i.toJSON(a)),
        "function" == typeof rep && (i = rep.call(b, a, i)),
        typeof i)
      ) {
        case "string":
          return quote(i);
        case "number":
          return isFinite(i) ? String(i) : "null";
        case "boolean":
        case "null":
          return String(i);
        case "object":
          if (!i) return "null";
          if (
            ((gap += indent),
            (g = []),
            "[object Array]" === Object.prototype.toString.apply(i))
          ) {
            for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
            return (
              (e =
                0 === g.length
                  ? "[]"
                  : gap
                  ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]"
                  : "[" + g.join(",") + "]"),
              (gap = h),
              e
            );
          }
          if (rep && "object" == typeof rep)
            for (f = rep.length, c = 0; f > c; c += 1)
              "string" == typeof rep[c] &&
                ((d = rep[c]),
                (e = str(d, i)),
                e && g.push(quote(d) + (gap ? ": " : ":") + e));
          else
            for (d in i)
              Object.prototype.hasOwnProperty.call(i, d) &&
                ((e = str(d, i)),
                e && g.push(quote(d) + (gap ? ": " : ":") + e));
          return (
            (e =
              0 === g.length
                ? "{}"
                : gap
                ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}"
                : "{" + g.join(",") + "}"),
            (gap = h),
            e
          );
      }
    }
    "function" != typeof Date.prototype.toJSON &&
      ((Date.prototype.toJSON = function () {
        return isFinite(this.valueOf())
          ? this.getUTCFullYear() +
              "-" +
              f(this.getUTCMonth() + 1) +
              "-" +
              f(this.getUTCDate()) +
              "T" +
              f(this.getUTCHours()) +
              ":" +
              f(this.getUTCMinutes()) +
              ":" +
              f(this.getUTCSeconds()) +
              "Z"
          : null;
      }),
      (String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON =
          function () {
            return this.valueOf();
          }));
    var cx =
        /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      },
      rep;
    "function" != typeof JSON.stringify &&
      (JSON.stringify = function (a, b, c) {
        var d;
        if (((gap = ""), (indent = ""), "number" == typeof c))
          for (d = 0; c > d; d += 1) indent += " ";
        else "string" == typeof c && (indent = c);
        if (
          ((rep = b),
          b &&
            "function" != typeof b &&
            ("object" != typeof b || "number" != typeof b.length))
        )
          throw new Error("JSON.stringify");
        return str("", { "": a });
      }),
      "function" != typeof JSON.parse &&
        (JSON.parse = function (text, reviver) {
          function walk(a, b) {
            var c,
              d,
              e = a[b];
            if (e && "object" == typeof e)
              for (c in e)
                Object.prototype.hasOwnProperty.call(e, c) &&
                  ((d = walk(e, c)), void 0 !== d ? (e[c] = d) : delete e[c]);
            return reviver.call(a, b, e);
          }
          var j;
          if (
            ((text = String(text)),
            (cx.lastIndex = 0),
            cx.test(text) &&
              (text = text.replace(cx, function (a) {
                return (
                  "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                );
              })),
            /^[\],:{}\s]*$/.test(
              text
                .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                .replace(
                  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
            ))
          )
            return (
              (j = eval("(" + text + ")")),
              "function" == typeof reviver ? walk({ "": j }, "") : j
            );
          throw new SyntaxError("JSON.parse");
        });
  })(),
  void 0 === window.getIframeWindow,
  "undefined" == typeof XD)
)
  var XD = (function () {
    var a,
      b,
      c,
      d = 1,
      e = this;
    return {
      postMessage: function (a, b, c) {
        if (b)
          if (((c = c || parent), e.postMessage)) {
            var f = b.replace(/([^:]+:\/\/[^\/]+).*/, "$1");
            if (("postMessage" in c || (c = getIframeWindow(c)), !c)) return;
            0 === f.indexOf("file://") && (f = "*"), c.postMessage(a, f);
          } else
            b &&
              (c.location =
                b.replace(/#.*$/, "") + "#" + +new Date() + d++ + "&" + a);
      },
      receiveMessage: function (d, f) {
        e.postMessage
          ? (d &&
              (c = function (a) {
                var b = e.location.search.split("?").join(""),
                  c =
                    b.indexOf("offline_forms=true") > -1 ||
                    b.indexOf("offline_forms=si") > -1;
                return !c &&
                  (("string" == typeof f && a.origin !== f) ||
                    ("[object Function]" ===
                      Object.prototype.toString.call(f) &&
                      f(a.origin) === !1))
                  ? !1
                  : (d(a), void 0);
              }),
            e.addEventListener
              ? e[d ? "addEventListener" : "removeEventListener"](
                  "message",
                  c,
                  !1
                )
              : e[d ? "attachEvent" : "detachEvent"]("onmessage", c))
          : (a && clearInterval(a),
            (a = null),
            d &&
              (a = setInterval(function () {
                var a = document.location.hash,
                  c = /^#?\d+&/;
                a !== b &&
                  c.test(a) &&
                  ((b = a), d({ data: a.replace(c, "") }));
              }, 100)));
      },
    };
  })();
!(function (a, b) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define(b)
    : ((a = a || self), (a.DOMPurify = b()));
})(this, function () {
  "use strict";
  function a(a) {
    if (Array.isArray(a)) {
      for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
      return c;
    }
    return Array.from(a);
  }
  function b(a) {
    return function (b) {
      for (
        var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), e = 1;
        c > e;
        e++
      )
        d[e - 1] = arguments[e];
      return o(a, b, d);
    };
  }
  function c(a) {
    return function () {
      for (var b = arguments.length, c = Array(b), d = 0; b > d; d++)
        c[d] = arguments[d];
      return p(a, c);
    };
  }
  function d(a, b) {
    i && i(a, null);
    for (var c = b.length; c--; ) {
      var d = b[c];
      if ("string" == typeof d) {
        var e = t(d);
        e !== d && (j(b) || (b[c] = e), (d = e));
      }
      a[d] = !0;
    }
    return a;
  }
  function e(a) {
    var b = m(null),
      c = void 0;
    for (c in a) o(h, a, [c]) && (b[c] = a[c]);
    return b;
  }
  function f(a) {
    if (Array.isArray(a)) {
      for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
      return c;
    }
    return Array.from(a);
  }
  function g() {
    var a =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R(),
      b = function (a) {
        return g(a);
      };
    if (
      ((b.version = "2.2.0"),
      (b.removed = []),
      !a || !a.document || 9 !== a.document.nodeType)
    )
      return (b.isSupported = !1), b;
    var c = a.document,
      h = a.document,
      i = a.DocumentFragment,
      j = a.HTMLTemplateElement,
      l = a.Node,
      m = a.NodeFilter,
      n = a.NamedNodeMap,
      o = void 0 === n ? a.NamedNodeMap || a.MozNamedAttrMap : n,
      p = a.Text,
      T = a.Comment,
      U = a.DOMParser,
      V = a.trustedTypes;
    if ("function" == typeof j) {
      var W = h.createElement("template");
      W.content && W.content.ownerDocument && (h = W.content.ownerDocument);
    }
    var X = S(V, c),
      Y = X && Db ? X.createHTML("") : "",
      Z = h,
      $ = Z.implementation,
      _ = Z.createNodeIterator,
      ab = Z.getElementsByTagName,
      bb = Z.createDocumentFragment,
      cb = c.importNode,
      db = {};
    try {
      db = e(h).documentMode ? h.documentMode : {};
    } catch (eb) {}
    var fb = {};
    b.isSupported = $ && "undefined" != typeof $.createHTMLDocument && 9 !== db;
    var gb = J,
      hb = K,
      ib = L,
      jb = M,
      kb = O,
      lb = P,
      mb = N,
      nb = null,
      ob = d({}, [].concat(f(A), f(B), f(C), f(D), f(E))),
      pb = null,
      qb = d({}, [].concat(f(F), f(G), f(H), f(I))),
      rb = null,
      sb = null,
      tb = !0,
      ub = !0,
      vb = !1,
      wb = !1,
      xb = !1,
      yb = !1,
      zb = !1,
      Ab = !1,
      Bb = !1,
      Cb = !0,
      Db = !1,
      Eb = !0,
      Fb = !0,
      Gb = !1,
      Hb = {},
      Ib = d({}, [
        "annotation-xml",
        "audio",
        "colgroup",
        "desc",
        "foreignobject",
        "head",
        "iframe",
        "math",
        "mi",
        "mn",
        "mo",
        "ms",
        "mtext",
        "noembed",
        "noframes",
        "plaintext",
        "script",
        "style",
        "svg",
        "template",
        "thead",
        "title",
        "video",
        "xmp",
      ]),
      Jb = null,
      Kb = d({}, ["audio", "video", "img", "source", "image", "track"]),
      Lb = null,
      Mb = d({}, [
        "alt",
        "class",
        "for",
        "id",
        "label",
        "name",
        "pattern",
        "placeholder",
        "summary",
        "title",
        "value",
        "style",
        "xmlns",
      ]),
      Nb = null,
      Ob = h.createElement("form"),
      Pb = function (a) {
        (Nb && Nb === a) ||
          ((a && "object" === ("undefined" == typeof a ? "undefined" : Q(a))) ||
            (a = {}),
          (a = e(a)),
          (nb = "ALLOWED_TAGS" in a ? d({}, a.ALLOWED_TAGS) : ob),
          (pb = "ALLOWED_ATTR" in a ? d({}, a.ALLOWED_ATTR) : qb),
          (Lb = "ADD_URI_SAFE_ATTR" in a ? d(e(Mb), a.ADD_URI_SAFE_ATTR) : Mb),
          (Jb = "ADD_DATA_URI_TAGS" in a ? d(e(Kb), a.ADD_DATA_URI_TAGS) : Kb),
          (rb = "FORBID_TAGS" in a ? d({}, a.FORBID_TAGS) : {}),
          (sb = "FORBID_ATTR" in a ? d({}, a.FORBID_ATTR) : {}),
          (Hb = "USE_PROFILES" in a ? a.USE_PROFILES : !1),
          (tb = a.ALLOW_ARIA_ATTR !== !1),
          (ub = a.ALLOW_DATA_ATTR !== !1),
          (vb = a.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (wb = a.SAFE_FOR_TEMPLATES || !1),
          (xb = a.WHOLE_DOCUMENT || !1),
          (Ab = a.RETURN_DOM || !1),
          (Bb = a.RETURN_DOM_FRAGMENT || !1),
          (Cb = a.RETURN_DOM_IMPORT !== !1),
          (Db = a.RETURN_TRUSTED_TYPE || !1),
          (zb = a.FORCE_BODY || !1),
          (Eb = a.SANITIZE_DOM !== !1),
          (Fb = a.KEEP_CONTENT !== !1),
          (Gb = a.IN_PLACE || !1),
          (mb = a.ALLOWED_URI_REGEXP || mb),
          wb && (ub = !1),
          Bb && (Ab = !0),
          Hb &&
            ((nb = d({}, [].concat(f(E)))),
            (pb = []),
            Hb.html === !0 && (d(nb, A), d(pb, F)),
            Hb.svg === !0 && (d(nb, B), d(pb, G), d(pb, I)),
            Hb.svgFilters === !0 && (d(nb, C), d(pb, G), d(pb, I)),
            Hb.mathMl === !0 && (d(nb, D), d(pb, H), d(pb, I))),
          a.ADD_TAGS && (nb === ob && (nb = e(nb)), d(nb, a.ADD_TAGS)),
          a.ADD_ATTR && (pb === qb && (pb = e(pb)), d(pb, a.ADD_ATTR)),
          a.ADD_URI_SAFE_ATTR && d(Lb, a.ADD_URI_SAFE_ATTR),
          Fb && (nb["#text"] = !0),
          xb && d(nb, ["html", "head", "body"]),
          nb.table && (d(nb, ["tbody"]), delete rb.tbody),
          k && k(a),
          (Nb = a));
      },
      Qb = function (a) {
        s(b.removed, { element: a });
        try {
          a.parentNode.removeChild(a);
        } catch (c) {
          a.outerHTML = Y;
        }
      },
      Rb = function (a, c) {
        try {
          s(b.removed, { attribute: c.getAttributeNode(a), from: c });
        } catch (d) {
          s(b.removed, { attribute: null, from: c });
        }
        c.removeAttribute(a);
      },
      Sb = function (a) {
        var b = void 0,
          c = void 0;
        if (zb) a = "<remove></remove>" + a;
        else {
          var d = u(a, /^[\r\n\t ]+/);
          c = d && d[0];
        }
        var e = X ? X.createHTML(a) : a;
        try {
          b = new U().parseFromString(e, "text/html");
        } catch (f) {}
        if (!b || !b.documentElement) {
          b = $.createHTMLDocument("");
          var g = b,
            i = g.body;
          i.parentNode.removeChild(i.parentNode.firstElementChild),
            (i.outerHTML = e);
        }
        return (
          a &&
            c &&
            b.body.insertBefore(
              h.createTextNode(c),
              b.body.childNodes[0] || null
            ),
          ab.call(b, xb ? "html" : "body")[0]
        );
      },
      Tb = function (a) {
        return _.call(
          a.ownerDocument || a,
          a,
          m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT,
          function () {
            return m.FILTER_ACCEPT;
          },
          !1
        );
      },
      Ub = function (a) {
        return a instanceof p || a instanceof T
          ? !1
          : "string" == typeof a.nodeName &&
            "string" == typeof a.textContent &&
            "function" == typeof a.removeChild &&
            a.attributes instanceof o &&
            "function" == typeof a.removeAttribute &&
            "function" == typeof a.setAttribute &&
            "string" == typeof a.namespaceURI
          ? !1
          : !0;
      },
      Vb = function (a) {
        return "object" === ("undefined" == typeof l ? "undefined" : Q(l))
          ? a instanceof l
          : a &&
              "object" === ("undefined" == typeof a ? "undefined" : Q(a)) &&
              "number" == typeof a.nodeType &&
              "string" == typeof a.nodeName;
      },
      Wb = function (a, c, d) {
        fb[a] &&
          q(fb[a], function (a) {
            a.call(b, c, d, Nb);
          });
      },
      Xb = function (a) {
        var c = void 0;
        if ((Wb("beforeSanitizeElements", a, null), Ub(a))) return Qb(a), !0;
        if (u(a.nodeName, /[\u0080-\uFFFF]/)) return Qb(a), !0;
        var d = t(a.nodeName);
        if (
          (Wb("uponSanitizeElement", a, { tagName: d, allowedTags: nb }),
          ("svg" === d || "math" === d) &&
            0 !== a.querySelectorAll("p, br").length)
        )
          return Qb(a), !0;
        if (
          !Vb(a.firstElementChild) &&
          (!Vb(a.content) || !Vb(a.content.firstElementChild)) &&
          y(/<[!\/\w]/g, a.innerHTML) &&
          y(/<[!\/\w]/g, a.textContent)
        )
          return Qb(a), !0;
        if (!nb[d] || rb[d]) {
          if (Fb && !Ib[d] && "function" == typeof a.insertAdjacentHTML)
            try {
              var e = a.innerHTML;
              a.insertAdjacentHTML("AfterEnd", X ? X.createHTML(e) : e);
            } catch (f) {}
          return Qb(a), !0;
        }
        return ("noscript" !== d && "noembed" !== d) ||
          !y(/<\/no(script|embed)/i, a.innerHTML)
          ? (wb &&
              3 === a.nodeType &&
              ((c = a.textContent),
              (c = v(c, gb, " ")),
              (c = v(c, hb, " ")),
              a.textContent !== c &&
                (s(b.removed, { element: a.cloneNode() }),
                (a.textContent = c))),
            Wb("afterSanitizeElements", a, null),
            !1)
          : (Qb(a), !0);
      },
      Yb = function (a, b, c) {
        if (Eb && ("id" === b || "name" === b) && (c in h || c in Ob))
          return !1;
        if (ub && y(ib, b));
        else if (tb && y(jb, b));
        else {
          if (!pb[b] || sb[b]) return !1;
          if (Lb[b]);
          else if (y(mb, v(c, lb, "")));
          else if (
            ("src" !== b && "xlink:href" !== b && "href" !== b) ||
            "script" === a ||
            0 !== w(c, "data:") ||
            !Jb[a]
          )
            if (vb && !y(kb, v(c, lb, "")));
            else if (c) return !1;
        }
        return !0;
      },
      Zb = function (a) {
        var c = void 0,
          d = void 0,
          e = void 0,
          f = void 0;
        Wb("beforeSanitizeAttributes", a, null);
        var g = a.attributes;
        if (g) {
          var h = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: pb,
          };
          for (f = g.length; f--; ) {
            c = g[f];
            var i = c,
              j = i.name,
              k = i.namespaceURI;
            if (
              ((d = x(c.value)),
              (e = t(j)),
              (h.attrName = e),
              (h.attrValue = d),
              (h.keepAttr = !0),
              (h.forceKeepAttr = void 0),
              Wb("uponSanitizeAttribute", a, h),
              (d = h.attrValue),
              !h.forceKeepAttr && (Rb(j, a), h.keepAttr))
            )
              if (y(/\/>/i, d)) Rb(j, a);
              else {
                wb && ((d = v(d, gb, " ")), (d = v(d, hb, " ")));
                var l = a.nodeName.toLowerCase();
                if (Yb(l, e, d))
                  try {
                    k ? a.setAttributeNS(k, j, d) : a.setAttribute(j, d),
                      r(b.removed);
                  } catch (m) {}
              }
          }
          Wb("afterSanitizeAttributes", a, null);
        }
      },
      $b = function _b(a) {
        var b = void 0,
          c = Tb(a);
        for (Wb("beforeSanitizeShadowDOM", a, null); (b = c.nextNode()); )
          Wb("uponSanitizeShadowNode", b, null),
            Xb(b) || (b.content instanceof i && _b(b.content), Zb(b));
        Wb("afterSanitizeShadowDOM", a, null);
      };
    return (
      (b.sanitize = function (d, e) {
        var f = void 0,
          g = void 0,
          h = void 0,
          j = void 0,
          k = void 0;
        if ((d || (d = "<!-->"), "string" != typeof d && !Vb(d))) {
          if ("function" != typeof d.toString)
            throw z("toString is not a function");
          if (((d = d.toString()), "string" != typeof d))
            throw z("dirty is not a string, aborting");
        }
        if (!b.isSupported) {
          if (
            "object" === Q(a.toStaticHTML) ||
            "function" == typeof a.toStaticHTML
          ) {
            if ("string" == typeof d) return a.toStaticHTML(d);
            if (Vb(d)) return a.toStaticHTML(d.outerHTML);
          }
          return d;
        }
        if (
          (yb || Pb(e), (b.removed = []), "string" == typeof d && (Gb = !1), Gb)
        );
        else if (d instanceof l)
          (f = Sb("<!---->")),
            (g = f.ownerDocument.importNode(d, !0)),
            1 === g.nodeType && "BODY" === g.nodeName
              ? (f = g)
              : "HTML" === g.nodeName
              ? (f = g)
              : f.appendChild(g);
        else {
          if (!Ab && !wb && !xb && -1 === d.indexOf("<"))
            return X && Db ? X.createHTML(d) : d;
          if (((f = Sb(d)), !f)) return Ab ? null : Y;
        }
        f && zb && Qb(f.firstChild);
        for (var m = Tb(Gb ? d : f); (h = m.nextNode()); )
          (3 !== h.nodeType || h !== j) &&
            (Xb(h) ||
              (h.content instanceof i && $b(h.content), Zb(h), (j = h)));
        if (((j = null), Gb)) return d;
        if (Ab) {
          if (Bb)
            for (k = bb.call(f.ownerDocument); f.firstChild; )
              k.appendChild(f.firstChild);
          else k = f;
          return Cb && (k = cb.call(c, k, !0)), k;
        }
        var n = xb ? f.outerHTML : f.innerHTML;
        return (
          wb && ((n = v(n, gb, " ")), (n = v(n, hb, " "))),
          X && Db ? X.createHTML(n) : n
        );
      }),
      (b.setConfig = function (a) {
        Pb(a), (yb = !0);
      }),
      (b.clearConfig = function () {
        (Nb = null), (yb = !1);
      }),
      (b.isValidAttribute = function (a, b, c) {
        Nb || Pb({});
        var d = t(a),
          e = t(b);
        return Yb(d, e, c);
      }),
      (b.addHook = function (a, b) {
        "function" == typeof b && ((fb[a] = fb[a] || []), s(fb[a], b));
      }),
      (b.removeHook = function (a) {
        fb[a] && r(fb[a]);
      }),
      (b.removeHooks = function (a) {
        fb[a] && (fb[a] = []);
      }),
      (b.removeAllHooks = function () {
        fb = {};
      }),
      b
    );
  }
  var h = Object.hasOwnProperty,
    i = Object.setPrototypeOf,
    j = Object.isFrozen,
    k = Object.freeze,
    l = Object.seal,
    m = Object.create,
    n = "undefined" != typeof Reflect && Reflect,
    o = n.apply,
    p = n.construct;
  o ||
    (o = function (a, b, c) {
      return a.apply(b, c);
    }),
    k ||
      (k = function (a) {
        return a;
      }),
    l ||
      (l = function (a) {
        return a;
      }),
    p ||
      (p = function (b, c) {
        return new (Function.prototype.bind.apply(b, [null].concat(a(c))))();
      });
  var q = b(Array.prototype.forEach),
    r = b(Array.prototype.pop),
    s = b(Array.prototype.push),
    t = b(String.prototype.toLowerCase),
    u = b(String.prototype.match),
    v = b(String.prototype.replace),
    w = b(String.prototype.indexOf),
    x = b(String.prototype.trim),
    y = b(RegExp.prototype.test),
    z = c(TypeError),
    A = k([
      "a",
      "abbr",
      "acronym",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "content",
      "data",
      "datalist",
      "dd",
      "decorator",
      "del",
      "details",
      "dfn",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "nobr",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
    ]),
    B = k([
      "svg",
      "a",
      "altglyph",
      "altglyphdef",
      "altglyphitem",
      "animatecolor",
      "animatemotion",
      "animatetransform",
      "audio",
      "canvas",
      "circle",
      "clippath",
      "defs",
      "desc",
      "ellipse",
      "filter",
      "font",
      "g",
      "glyph",
      "glyphref",
      "hkern",
      "image",
      "line",
      "lineargradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialgradient",
      "rect",
      "stop",
      "style",
      "switch",
      "symbol",
      "text",
      "textpath",
      "title",
      "tref",
      "tspan",
      "video",
      "view",
      "vkern",
    ]),
    C = k([
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
    ]),
    D = k([
      "math",
      "menclose",
      "merror",
      "mfenced",
      "mfrac",
      "mglyph",
      "mi",
      "mlabeledtr",
      "mmultiscripts",
      "mn",
      "mo",
      "mover",
      "mpadded",
      "mphantom",
      "mroot",
      "mrow",
      "ms",
      "mspace",
      "msqrt",
      "mstyle",
      "msub",
      "msup",
      "msubsup",
      "mtable",
      "mtd",
      "mtext",
      "mtr",
      "munder",
      "munderover",
    ]),
    E = k(["#text"]),
    F = k([
      "accept",
      "action",
      "align",
      "alt",
      "autocapitalize",
      "autocomplete",
      "autopictureinpicture",
      "autoplay",
      "background",
      "bgcolor",
      "border",
      "capture",
      "cellpadding",
      "cellspacing",
      "checked",
      "cite",
      "class",
      "clear",
      "color",
      "cols",
      "colspan",
      "controls",
      "controlslist",
      "coords",
      "crossorigin",
      "datetime",
      "decoding",
      "default",
      "dir",
      "disabled",
      "disablepictureinpicture",
      "disableremoteplayback",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "face",
      "for",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "id",
      "inputmode",
      "integrity",
      "ismap",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "loop",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "multiple",
      "muted",
      "name",
      "noshade",
      "novalidate",
      "nowrap",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "playsinline",
      "poster",
      "preload",
      "pubdate",
      "radiogroup",
      "readonly",
      "rel",
      "required",
      "rev",
      "reversed",
      "role",
      "rows",
      "rowspan",
      "spellcheck",
      "scope",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "srclang",
      "start",
      "src",
      "srcset",
      "step",
      "style",
      "summary",
      "tabindex",
      "title",
      "translate",
      "type",
      "usemap",
      "valign",
      "value",
      "width",
      "xmlns",
    ]),
    G = k([
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "ascent",
      "attributename",
      "attributetype",
      "azimuth",
      "basefrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "class",
      "clip",
      "clippathunits",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "cx",
      "cy",
      "d",
      "dx",
      "dy",
      "diffuseconstant",
      "direction",
      "display",
      "divisor",
      "dur",
      "edgemode",
      "elevation",
      "end",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterunits",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyphref",
      "gradientunits",
      "gradienttransform",
      "height",
      "href",
      "id",
      "image-rendering",
      "in",
      "in2",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kerning",
      "keypoints",
      "keysplines",
      "keytimes",
      "lang",
      "lengthadjust",
      "letter-spacing",
      "kernelmatrix",
      "kernelunitlength",
      "lighting-color",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerheight",
      "markerunits",
      "markerwidth",
      "maskcontentunits",
      "maskunits",
      "max",
      "mask",
      "media",
      "method",
      "mode",
      "min",
      "name",
      "numoctaves",
      "offset",
      "operator",
      "opacity",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "paint-order",
      "path",
      "pathlength",
      "patterncontentunits",
      "patterntransform",
      "patternunits",
      "points",
      "preservealpha",
      "preserveaspectratio",
      "primitiveunits",
      "r",
      "rx",
      "ry",
      "radius",
      "refx",
      "refy",
      "repeatcount",
      "repeatdur",
      "restart",
      "result",
      "rotate",
      "scale",
      "seed",
      "shape-rendering",
      "specularconstant",
      "specularexponent",
      "spreadmethod",
      "startoffset",
      "stddeviation",
      "stitchtiles",
      "stop-color",
      "stop-opacity",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke",
      "stroke-width",
      "style",
      "surfacescale",
      "systemlanguage",
      "tabindex",
      "targetx",
      "targety",
      "transform",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textlength",
      "type",
      "u1",
      "u2",
      "unicode",
      "values",
      "viewbox",
      "visibility",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "width",
      "word-spacing",
      "wrap",
      "writing-mode",
      "xchannelselector",
      "ychannelselector",
      "x",
      "x1",
      "x2",
      "xmlns",
      "y",
      "y1",
      "y2",
      "z",
      "zoomandpan",
    ]),
    H = k([
      "accent",
      "accentunder",
      "align",
      "bevelled",
      "close",
      "columnsalign",
      "columnlines",
      "columnspan",
      "denomalign",
      "depth",
      "dir",
      "display",
      "displaystyle",
      "encoding",
      "fence",
      "frame",
      "height",
      "href",
      "id",
      "largeop",
      "length",
      "linethickness",
      "lspace",
      "lquote",
      "mathbackground",
      "mathcolor",
      "mathsize",
      "mathvariant",
      "maxsize",
      "minsize",
      "movablelimits",
      "notation",
      "numalign",
      "open",
      "rowalign",
      "rowlines",
      "rowspacing",
      "rowspan",
      "rspace",
      "rquote",
      "scriptlevel",
      "scriptminsize",
      "scriptsizemultiplier",
      "selection",
      "separator",
      "separators",
      "stretchy",
      "subscriptshift",
      "supscriptshift",
      "symmetric",
      "voffset",
      "width",
      "xmlns",
    ]),
    I = k(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    J = l(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
    K = l(/<%[\s\S]*|[\s\S]*%>/gm),
    L = l(/^data-[\-\w.\u00B7-\uFFFF]/),
    M = l(/^aria-[\-\w]+$/),
    N = l(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    O = l(/^(?:\w+script|data):/i),
    P = l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    Q =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              "function" == typeof Symbol &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          },
    R = function () {
      return "undefined" == typeof window ? null : window;
    },
    S = function (a, b) {
      if (
        "object" !== ("undefined" == typeof a ? "undefined" : Q(a)) ||
        "function" != typeof a.createPolicy
      )
        return null;
      var c = null,
        d = "data-tt-policy-suffix";
      b.currentScript &&
        b.currentScript.hasAttribute(d) &&
        (c = b.currentScript.getAttribute(d));
      var e = "dompurify" + (c ? "#" + c : "");
      try {
        return a.createPolicy(e, {
          createHTML: function (a) {
            return a;
          },
        });
      } catch (f) {
        return (
          console.warn("TrustedTypes policy " + e + " could not be created."),
          null
        );
      }
    },
    T = g();
  return T;
}),
  (function () {
    function a(a) {
      return a.call.apply(a.bind, arguments);
    }
    function b(a, b) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 2);
        return function () {
          var d = Array.prototype.slice.call(arguments);
          return Array.prototype.unshift.apply(d, c), a.apply(b, d);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    }
    function c() {
      return (
        (c =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf("native code")
            ? a
            : b),
        c.apply(null, arguments)
      );
    }
    function d(a, b) {
      (this.a = a), (this.o = b || a), (this.c = this.o.document);
    }
    function e(a, b, c, d) {
      if (((b = a.c.createElement(b)), c))
        for (var e in c)
          c.hasOwnProperty(e) &&
            ("style" == e ? (b.style.cssText = c[e]) : b.setAttribute(e, c[e]));
      return d && b.appendChild(a.c.createTextNode(d)), b;
    }
    function f(a, b, c) {
      (a = a.c.getElementsByTagName(b)[0]),
        a || (a = document.documentElement),
        a.insertBefore(c, a.lastChild);
    }
    function g(a) {
      a.parentNode && a.parentNode.removeChild(a);
    }
    function h(a, b, c) {
      (b = b || []), (c = c || []);
      for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
        for (var f = !1, g = 0; g < d.length; g += 1)
          if (b[e] === d[g]) {
            f = !0;
            break;
          }
        f || d.push(b[e]);
      }
      for (b = [], e = 0; e < d.length; e += 1) {
        for (f = !1, g = 0; g < c.length; g += 1)
          if (d[e] === c[g]) {
            f = !0;
            break;
          }
        f || b.push(d[e]);
      }
      a.className = b
        .join(" ")
        .replace(/\s+/g, " ")
        .replace(/^\s+|\s+$/, "");
    }
    function i(a, b) {
      for (var c = a.className.split(/\s+/), d = 0, e = c.length; e > d; d++)
        if (c[d] == b) return !0;
      return !1;
    }
    function j(a) {
      return a.o.location.hostname || a.a.location.hostname;
    }
    function k(a, b, c) {
      function d() {
        j && g && h && (j(i), (j = null));
      }
      b = e(a, "link", { rel: "stylesheet", href: b, media: "all" });
      var g = !1,
        h = !0,
        i = null,
        j = c || null;
      bb
        ? ((b.onload = function () {
            (g = !0), d();
          }),
          (b.onerror = function () {
            (g = !0), (i = Error("Stylesheet failed to load")), d();
          }))
        : setTimeout(function () {
            (g = !0), d();
          }, 0),
        f(a, "head", b);
    }
    function l(a, b, c, d) {
      var f = a.c.getElementsByTagName("head")[0];
      if (f) {
        var g = e(a, "script", { src: b }),
          h = !1;
        return (
          (g.onload = g.onreadystatechange =
            function () {
              h ||
                (this.readyState &&
                  "loaded" != this.readyState &&
                  "complete" != this.readyState) ||
                ((h = !0),
                c && c(null),
                (g.onload = g.onreadystatechange = null),
                "HEAD" == g.parentNode.tagName && f.removeChild(g));
            }),
          f.appendChild(g),
          setTimeout(function () {
            h || ((h = !0), c && c(Error("Script load timeout")));
          }, d || 5e3),
          g
        );
      }
      return null;
    }
    function m() {
      (this.a = 0), (this.c = null);
    }
    function n(a) {
      return (
        a.a++,
        function () {
          a.a--, p(a);
        }
      );
    }
    function o(a, b) {
      (a.c = b), p(a);
    }
    function p(a) {
      0 == a.a && a.c && (a.c(), (a.c = null));
    }
    function q(a) {
      this.a = a || "-";
    }
    function r(a, b) {
      (this.c = a), (this.f = 4), (this.a = "n");
      var c = (b || "n4").match(/^([nio])([1-9])$/i);
      c && ((this.a = c[1]), (this.f = parseInt(c[2], 10)));
    }
    function s(a) {
      return v(a) + " " + (a.f + "00") + " 300px " + t(a.c);
    }
    function t(a) {
      var b = [];
      a = a.split(/,\s*/);
      for (var c = 0; c < a.length; c++) {
        var d = a[c].replace(/['"]/g, "");
        -1 != d.indexOf(" ") || /^\d/.test(d)
          ? b.push("'" + d + "'")
          : b.push(d);
      }
      return b.join(",");
    }
    function u(a) {
      return a.a + a.f;
    }
    function v(a) {
      var b = "normal";
      return "o" === a.a ? (b = "oblique") : "i" === a.a && (b = "italic"), b;
    }
    function w(a) {
      var b = 4,
        c = "n",
        d = null;
      return (
        a &&
          ((d = a.match(/(normal|oblique|italic)/i)) &&
            d[1] &&
            (c = d[1].substr(0, 1).toLowerCase()),
          (d = a.match(/([1-9]00|normal|bold)/i)) &&
            d[1] &&
            (/bold/i.test(d[1])
              ? (b = 7)
              : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10)))),
        c + b
      );
    }
    function x(a, b) {
      (this.c = a),
        (this.f = a.o.document.documentElement),
        (this.h = b),
        (this.a = new q("-")),
        (this.j = !1 !== b.events),
        (this.g = !1 !== b.classes);
    }
    function y(a) {
      a.g && h(a.f, [a.a.c("wf", "loading")]), A(a, "loading");
    }
    function z(a) {
      if (a.g) {
        var b = i(a.f, a.a.c("wf", "active")),
          c = [],
          d = [a.a.c("wf", "loading")];
        b || c.push(a.a.c("wf", "inactive")), h(a.f, c, d);
      }
      A(a, "inactive");
    }
    function A(a, b, c) {
      a.j && a.h[b] && (c ? a.h[b](c.c, u(c)) : a.h[b]());
    }
    function B() {
      this.c = {};
    }
    function C(a, b, c) {
      var d,
        e = [];
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var f = a.c[d];
          f && e.push(f(b[d], c));
        }
      return e;
    }
    function D(a, b) {
      (this.c = a),
        (this.f = b),
        (this.a = e(this.c, "span", { "aria-hidden": "true" }, this.f));
    }
    function E(a) {
      f(a.c, "body", a.a);
    }
    function F(a) {
      return (
        "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
        t(a.c) +
        ";" +
        ("font-style:" + v(a) + ";font-weight:" + (a.f + "00") + ";")
      );
    }
    function G(a, b, c, d, e, f) {
      (this.g = a),
        (this.j = b),
        (this.a = d),
        (this.c = c),
        (this.f = e || 3e3),
        (this.h = f || void 0);
    }
    function H(a, b, c, d, e, f, g) {
      (this.v = a),
        (this.B = b),
        (this.c = c),
        (this.a = d),
        (this.s = g || "BESbswy"),
        (this.f = {}),
        (this.w = e || 3e3),
        (this.u = f || null),
        (this.m = this.j = this.h = this.g = null),
        (this.g = new D(this.c, this.s)),
        (this.h = new D(this.c, this.s)),
        (this.j = new D(this.c, this.s)),
        (this.m = new D(this.c, this.s)),
        (a = new r(this.a.c + ",serif", u(this.a))),
        (a = F(a)),
        (this.g.a.style.cssText = a),
        (a = new r(this.a.c + ",sans-serif", u(this.a))),
        (a = F(a)),
        (this.h.a.style.cssText = a),
        (a = new r("serif", u(this.a))),
        (a = F(a)),
        (this.j.a.style.cssText = a),
        (a = new r("sans-serif", u(this.a))),
        (a = F(a)),
        (this.m.a.style.cssText = a),
        E(this.g),
        E(this.h),
        E(this.j),
        E(this.m);
    }
    function I() {
      if (null === db) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
          window.navigator.userAgent
        );
        db =
          !!a &&
          (536 > parseInt(a[1], 10) ||
            (536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10)));
      }
      return db;
    }
    function J(a, b, c) {
      for (var d in cb)
        if (cb.hasOwnProperty(d) && b === a.f[cb[d]] && c === a.f[cb[d]])
          return !0;
      return !1;
    }
    function K(a) {
      var b,
        c = a.g.a.offsetWidth,
        d = a.h.a.offsetWidth;
      (b = c === a.f.serif && d === a.f["sans-serif"]) ||
        (b = I() && J(a, c, d)),
        b
          ? ab() - a.A >= a.w
            ? I() && J(a, c, d) && (null === a.u || a.u.hasOwnProperty(a.a.c))
              ? M(a, a.v)
              : M(a, a.B)
            : L(a)
          : M(a, a.v);
    }
    function L(a) {
      setTimeout(
        c(function () {
          K(this);
        }, a),
        50
      );
    }
    function M(a, b) {
      setTimeout(
        c(function () {
          g(this.g.a), g(this.h.a), g(this.j.a), g(this.m.a), b(this.a);
        }, a),
        0
      );
    }
    function N(a, b, c) {
      (this.c = a),
        (this.a = b),
        (this.f = 0),
        (this.m = this.j = !1),
        (this.s = c);
    }
    function O(a) {
      0 == --a.f &&
        a.j &&
        (a.m
          ? ((a = a.a),
            a.g &&
              h(
                a.f,
                [a.a.c("wf", "active")],
                [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]
              ),
            A(a, "active"))
          : z(a.a));
    }
    function P(a) {
      (this.j = a), (this.a = new B()), (this.h = 0), (this.f = this.g = !0);
    }
    function Q(a, b, d, e, f) {
      var g = 0 == --a.h;
      (a.f || a.g) &&
        setTimeout(function () {
          var a = f || null,
            i = e || null || {};
          if (0 === d.length && g) z(b.a);
          else {
            (b.f += d.length), g && (b.j = g);
            var j,
              k = [];
            for (j = 0; j < d.length; j++) {
              var l = d[j],
                m = i[l.c],
                n = b.a,
                o = l;
              if (
                (n.g && h(n.f, [n.a.c("wf", o.c, u(o).toString(), "loading")]),
                A(n, "fontloading", o),
                (n = null),
                null === eb)
              )
                if (window.FontFace) {
                  var o = /Gecko.*Firefox\/(\d+)/.exec(
                      window.navigator.userAgent
                    ),
                    p =
                      /OS X.*Version\/10\..*Safari/.exec(
                        window.navigator.userAgent
                      ) && /Apple/.exec(window.navigator.vendor);
                  eb = o ? 42 < parseInt(o[1], 10) : p ? !1 : !0;
                } else eb = !1;
              (n = eb
                ? new G(c(b.g, b), c(b.h, b), b.c, l, b.s, m)
                : new H(c(b.g, b), c(b.h, b), b.c, l, b.s, a, m)),
                k.push(n);
            }
            for (j = 0; j < k.length; j++) k[j].start();
          }
        }, 0);
    }
    function R(a, b, c) {
      var d = [],
        e = c.timeout;
      y(b);
      var d = C(a.a, c, a.c),
        f = new N(a.c, b, e);
      for (a.h = d.length, b = 0, c = d.length; c > b; b++)
        d[b].load(function (b, c, d) {
          Q(a, f, b, c, d);
        });
    }
    function S(a, b) {
      (this.c = a), (this.a = b);
    }
    function T(a, b) {
      (this.c = a), (this.a = b);
    }
    function U(a, b) {
      (this.c = a ? a : fb), (this.a = []), (this.f = []), (this.g = b || "");
    }
    function V(a, b) {
      for (var c = b.length, d = 0; c > d; d++) {
        var e = b[d].split(":");
        3 == e.length && a.f.push(e.pop());
        var f = "";
        2 == e.length && "" != e[1] && (f = ":"), a.a.push(e.join(f));
      }
    }
    function W(a) {
      if (0 == a.a.length) throw Error("No fonts to load!");
      if (-1 != a.c.indexOf("kit=")) return a.c;
      for (var b = a.a.length, c = [], d = 0; b > d; d++)
        c.push(a.a[d].replace(/ /g, "+"));
      return (
        (b = a.c + "?family=" + c.join("%7C")),
        0 < a.f.length && (b += "&subset=" + a.f.join(",")),
        0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g)),
        b
      );
    }
    function X(a) {
      (this.f = a), (this.a = []), (this.c = {});
    }
    function Y(a) {
      for (var b = a.f.length, c = 0; b > c; c++) {
        var d = a.f[c].split(":"),
          e = d[0].replace(/\+/g, " "),
          f = ["n4"];
        if (2 <= d.length) {
          var g,
            h = d[1];
          if (((g = []), h))
            for (var h = h.split(","), i = h.length, j = 0; i > j; j++) {
              var k;
              if (((k = h[j]), k.match(/^[\w-]+$/))) {
                var l = jb.exec(k.toLowerCase());
                if (null == l) k = "";
                else {
                  if (
                    ((k = l[2]),
                    (k = null == k || "" == k ? "n" : ib[k]),
                    (l = l[1]),
                    null == l || "" == l)
                  )
                    l = "4";
                  else
                    var m = hb[l],
                      l = m ? m : isNaN(l) ? "4" : l.substr(0, 1);
                  k = [k, l].join("");
                }
              } else k = "";
              k && g.push(k);
            }
          0 < g.length && (f = g),
            3 == d.length &&
              ((d = d[2]),
              (g = []),
              (d = d ? d.split(",") : g),
              0 < d.length && (d = gb[d[0]]) && (a.c[e] = d));
        }
        for (
          a.c[e] || ((d = gb[e]) && (a.c[e] = d)), d = 0;
          d < f.length;
          d += 1
        )
          a.a.push(new r(e, f[d]));
      }
    }
    function Z(a, b) {
      (this.c = a), (this.a = b);
    }
    function $(a, b) {
      (this.c = a), (this.a = b);
    }
    function _(a, b) {
      (this.c = a), (this.f = b), (this.a = []);
    }
    var ab =
        Date.now ||
        function () {
          return +new Date();
        },
      bb = !!window.FontFace;
    (q.prototype.c = function () {
      for (var a = [], b = 0; b < arguments.length; b++)
        a.push(arguments[b].replace(/[\W_]+/g, "").toLowerCase());
      return a.join(this.a);
    }),
      (G.prototype.start = function () {
        var a = this.c.o.document,
          b = this,
          c = ab(),
          d = new Promise(function (d, e) {
            function f() {
              ab() - c >= b.f
                ? e()
                : a.fonts.load(s(b.a), b.h).then(
                    function (a) {
                      1 <= a.length ? d() : setTimeout(f, 25);
                    },
                    function () {
                      e();
                    }
                  );
            }
            f();
          }),
          e = null,
          f = new Promise(function (a, c) {
            e = setTimeout(c, b.f);
          });
        Promise.race([f, d]).then(
          function () {
            e && (clearTimeout(e), (e = null)), b.g(b.a);
          },
          function () {
            b.j(b.a);
          }
        );
      });
    var cb = { D: "serif", C: "sans-serif" },
      db = null;
    H.prototype.start = function () {
      (this.f.serif = this.j.a.offsetWidth),
        (this.f["sans-serif"] = this.m.a.offsetWidth),
        (this.A = ab()),
        K(this);
    };
    var eb = null;
    (N.prototype.g = function (a) {
      var b = this.a;
      b.g &&
        h(
          b.f,
          [b.a.c("wf", a.c, u(a).toString(), "active")],
          [
            b.a.c("wf", a.c, u(a).toString(), "loading"),
            b.a.c("wf", a.c, u(a).toString(), "inactive"),
          ]
        ),
        A(b, "fontactive", a),
        (this.m = !0),
        O(this);
    }),
      (N.prototype.h = function (a) {
        var b = this.a;
        if (b.g) {
          var c = i(b.f, b.a.c("wf", a.c, u(a).toString(), "active")),
            d = [],
            e = [b.a.c("wf", a.c, u(a).toString(), "loading")];
          c || d.push(b.a.c("wf", a.c, u(a).toString(), "inactive")),
            h(b.f, d, e);
        }
        A(b, "fontinactive", a), O(this);
      }),
      (P.prototype.load = function (a) {
        (this.c = new d(this.j, a.context || this.j)),
          (this.g = !1 !== a.events),
          (this.f = !1 !== a.classes),
          R(this, new x(this.c, a), a);
      }),
      (S.prototype.load = function (a) {
        function b() {
          if (f["__mti_fntLst" + d]) {
            var c,
              e = f["__mti_fntLst" + d](),
              g = [];
            if (e)
              for (var h = 0; h < e.length; h++) {
                var i = e[h].fontfamily;
                void 0 != e[h].fontStyle && void 0 != e[h].fontWeight
                  ? ((c = e[h].fontStyle + e[h].fontWeight),
                    g.push(new r(i, c)))
                  : g.push(new r(i));
              }
            a(g);
          } else
            setTimeout(function () {
              b();
            }, 50);
        }
        var c = this,
          d = c.a.projectId,
          e = c.a.version;
        if (d) {
          var f = c.c.o;
          l(
            this.c,
            (c.a.api || "https://fast.fonts.net/jsapi") +
              "/" +
              d +
              ".js" +
              (e ? "?v=" + e : ""),
            function (e) {
              e
                ? a([])
                : ((f["__MonotypeConfiguration__" + d] = function () {
                    return c.a;
                  }),
                  b());
            }
          ).id = "__MonotypeAPIScript__" + d;
        } else a([]);
      }),
      (T.prototype.load = function (a) {
        var b,
          c,
          d = this.a.urls || [],
          e = this.a.families || [],
          f = this.a.testStrings || {},
          g = new m();
        for (b = 0, c = d.length; c > b; b++) k(this.c, d[b], n(g));
        var h = [];
        for (b = 0, c = e.length; c > b; b++)
          if (((d = e[b].split(":")), d[1]))
            for (var i = d[1].split(","), j = 0; j < i.length; j += 1)
              h.push(new r(d[0], i[j]));
          else h.push(new r(d[0]));
        o(g, function () {
          a(h, f);
        });
      });
    var fb = "https://fonts.googleapis.com/css",
      gb = {
        latin: "BESbswy",
        "latin-ext": "Ã§Ã¶Ã¼ÄŸÅŸ",
        cyrillic: "Ð¹ÑÐ–",
        greek: "Î±Î²Î£",
        khmer: "áž€ážáž‚",
        Hanuman: "áž€ážáž‚",
      },
      hb = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7",
      },
      ib = { i: "i", italic: "i", n: "n", normal: "n" },
      jb =
        /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,
      kb = { Arimo: !0, Cousine: !0, Tinos: !0 };
    (Z.prototype.load = function (a) {
      var b = new m(),
        c = this.c,
        d = new U(this.a.api, this.a.text),
        e = this.a.families;
      V(d, e);
      var f = new X(e);
      Y(f),
        k(c, W(d), n(b)),
        o(b, function () {
          a(f.a, f.c, kb);
        });
    }),
      ($.prototype.load = function (a) {
        var b = this.a.id,
          c = this.c.o;
        b
          ? l(
              this.c,
              (this.a.api || "https://use.typekit.net") + "/" + b + ".js",
              function (b) {
                if (b) a([]);
                else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
                  b = c.Typekit.config.fn;
                  for (var d = [], e = 0; e < b.length; e += 2)
                    for (var f = b[e], g = b[e + 1], h = 0; h < g.length; h++)
                      d.push(new r(f, g[h]));
                  try {
                    c.Typekit.load({ events: !1, classes: !1, async: !0 });
                  } catch (i) {}
                  a(d);
                }
              },
              2e3
            )
          : a([]);
      }),
      (_.prototype.load = function (a) {
        var b = this.f.id,
          c = this.c.o,
          d = this;
        b
          ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}),
            (c.__webfontfontdeckmodule__[b] = function (b, c) {
              for (var e = 0, f = c.fonts.length; f > e; ++e) {
                var g = c.fonts[e];
                d.a.push(
                  new r(
                    g.name,
                    w("font-weight:" + g.weight + ";font-style:" + g.style)
                  )
                );
              }
              a(d.a);
            }),
            l(
              this.c,
              (this.f.api || "https://f.fontdeck.com/s/css/js/") +
                j(this.c) +
                "/" +
                b +
                ".js",
              function (b) {
                b && a([]);
              }
            ))
          : a([]);
      });
    var lb = new P(window);
    (lb.a.c.custom = function (a, b) {
      return new T(b, a);
    }),
      (lb.a.c.fontdeck = function (a, b) {
        return new _(b, a);
      }),
      (lb.a.c.monotype = function (a, b) {
        return new S(b, a);
      }),
      (lb.a.c.typekit = function (a, b) {
        return new $(b, a);
      }),
      (lb.a.c.google = function (a, b) {
        return new Z(b, a);
      });
    var mb = { load: c(lb.load, lb) };
    "function" == typeof define && define.amd
      ? define(function () {
          return mb;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = mb)
      : ((window.WebFont = mb),
        window.WebFontConfig && lb.load(window.WebFontConfig));
  })();
var JFCustomWidgetUtils = (function () {
  function a(a) {
    if ("undefined" != typeof a && ~a.indexOf("/jotformWidgets/")) {
      var b = a.split("/jotformWidgets/");
      a = "/widget-uploads/" + b[1];
    }
    return a;
  }
  function b(a) {
    var b = a.indexOf("/widget-uploads/");
    if ("undefined" != typeof a && ~b && b > 0) {
      var c = a.split("/widget-uploads/");
      a = "/widget-uploads/" + c[1];
    }
    return a;
  }
  function c(b) {
    var c = b.indexOf("/widget-uploads/");
    return (
      "undefined" != typeof b &&
        ~c &&
        0 === c &&
        ((b = a(b)), (b = JFCustomWidget.getParentOrigin() + b)),
      b
    );
  }
  function d() {
    return window.location.search.match(/ref=([^&]+)/)
      ? decodeURIComponent(window.location.search.match(/ref=([^&]+)/)[1]) + "/"
      : "https://www.jotform.com/";
  }
  function e() {
    var a = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return a ? parseInt(a[1]) : void 0;
  }
  function f() {
    var a = navigator.userAgent.toLowerCase().match(/chrome|crios/),
      b = navigator.userAgent.toLowerCase().match(/firefox|fxios/),
      c = navigator.userAgent.toLowerCase().indexOf("safari") > -1;
    return !c || a || b ? !1 : !0;
  }
  function g() {
    return navigator.userAgent.toLowerCase().match(/firefox|fxios/);
  }
  function h() {
    var a = navigator.userAgent.toLowerCase();
    return (
      /iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(
        a
      ) ||
      /ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(
        a
      ) ||
      (a.indexOf("macintosh") > -1 && navigator.maxTouchPoints > 1)
    );
  }
  function i(a) {
    try {
      var b = JSON.parse(a);
      if (b && "object" == typeof b && null !== b) return !0;
    } catch (c) {}
    return !1;
  }
  function j(a) {
    var b = Object.prototype.toString.call(a);
    return b.replace(/^\[object (\w+)\]$/, "$1");
  }
  function k(a) {
    return "Object" === j(a);
  }
  function l(a) {
    return "Array" === j(a);
  }
  function m(a, b) {
    if (
      "undefined" == typeof a ||
      "undefined" == typeof b ||
      a === !1 ||
      b === !1
    )
      return "";
    var c = {};
    return (c[z] = { type: a, value: b }), JSON.stringify(c);
  }
  function n(a) {
    var b = [];
    if (!i(a)) return b;
    var c = JSON.parse(a);
    return c.hasOwnProperty(z) && (b = c[z].value), b;
  }
  function o(a) {
    if (!i(a)) return !1;
    var b = JSON.parse(a);
    return b.hasOwnProperty(z) ? !0 : !1;
  }
  function p(a) {
    return "undefined" == typeof a || "" === a || "<empty>" === a;
  }
  function q(a) {
    var b = document.createElement("textarea");
    return (b.innerHTML = a), b.value;
  }
  function r(a) {
    var b = document.createElement("textarea");
    return (b.textContent = a), b.innerHTML;
  }
  function s(a, b) {
    var c = 5e3;
    "function" == typeof a
      ? ((c = !1), (b = a))
      : "number" == typeof a && (c = a),
      x && window.cancelAnimationFrame(x);
    var d = function () {
      b && b(), (x = window.requestAnimationFrame(d));
    };
    d(),
      c &&
        setTimeout(function () {
          x && window.cancelAnimationFrame(x);
        }, c);
  }
  function t() {
    s.apply(null, arguments);
  }
  function u(a) {
    "loading" != document.readyState
      ? a()
      : document.addEventListener
      ? document.addEventListener("DOMContentLoaded", a)
      : document.attachEvent("onreadystatechange", function () {
          "loading" != document.readyState && a();
        });
  }
  function v(a, b) {
    var c = document.createElement("script");
    (c.type = "text/javascript"), (c.async = !1), (c.src = a);
    var d = function (a, b) {
      "loaded" == a.readyState || "complete" == a.readyState
        ? b()
        : setTimeout(function () {
            d(a, b);
          }, 100);
    };
    "function" == typeof b &&
      ("undefined" != typeof c.addEventListener
        ? c.addEventListener(
            "load",
            function () {
              b(a);
            },
            !1
          )
        : (c.onreadystatechange = function () {
            (c.onreadystatechange = null),
              d(c, function () {
                b(a);
              });
          })),
      (
        document.getElementsByTagName("head")[0] || document.documentElement
      ).appendChild(c);
  }
  function w(a, b, c) {
    var d = document.createElement("link");
    if (
      (d.setAttribute("type", "text/css"),
      d.setAttribute("rel", "stylesheet"),
      d.setAttribute("media", "all"),
      d.setAttribute("href", a),
      "undefined" != typeof c && d.setAttribute("id", c),
      d.readyState)
    )
      d.onreadystatechange = function () {
        ("loaded" == d.readyState || "complete" == d.readyState) &&
          ((d.onreadystatechange = null), b && b());
      };
    else if (f() || g()) {
      (d = document.createElement("style")),
        (d.textContent = '@import "' + a + '"');
      var e = setInterval(function () {
        try {
          d.sheet.cssRules, b && b(), clearInterval(e);
        } catch (a) {}
      }, 10);
    } else
      d.addEventListener
        ? d.addEventListener("load", b)
        : d.attachEvent
        ? d.attachEvent("onload", b)
        : "isApplicationInstalled" in navigator &&
          "onloadcssdefined" in d &&
          d.onloadcssdefined(b);
    (
      document.getElementsByTagName("head")[0] || document.documentElement
    ).appendChild(d);
  }
  var x,
    y = {},
    z = "widget_metadata";
  return (
    (y.domReady = u),
    (y.loadJS = v),
    (y.loadCSS = w),
    (y.isJsonString = i),
    (y.getIE = e),
    (y.isSafari = f),
    (y.isFirefox = g),
    (y.isMobile = h),
    (y.buildMetadata = m),
    (y.extractMetadata = n),
    (y.hasMetadata = o),
    (y.decodeHtmlEntities = q),
    (y.encodeHtmlEntities = r),
    (y.getS3UriRelativePath = a),
    (y.fixS3UriOrigin = c),
    (y.resetS3UriOrigin = b),
    (y.executeUntil = s),
    (y.animateUntil = t),
    (y.isEmpty = p),
    (y.isObject = k),
    (y.isArray = l),
    (y.getFormDomain = d),
    y
  );
})();
!(function () {
  for (
    var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;
    c < b.length && !window.requestAnimationFrame;
    ++c
  )
    (window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"]),
      (window.cancelAnimationFrame =
        window[b[c] + "CancelAnimationFrame"] ||
        window[b[c] + "CancelRequestAnimationFrame"]);
  window.requestAnimationFrame ||
    (window.requestAnimationFrame = function (b) {
      var c = new Date().getTime(),
        d = Math.max(0, 16 - (c - a)),
        e = window.setTimeout(function () {
          b(c + d);
        }, d);
      return (a = c + d), e;
    }),
    window.cancelAnimationFrame ||
      (window.cancelAnimationFrame = function (a) {
        clearTimeout(a);
      });
})(),
  (function () {
    "use strict";
    "indexOf" in Array.prototype ||
      (Array.prototype.indexOf = function (a, b) {
        void 0 === b && (b = 0), 0 > b && (b += this.length), 0 > b && (b = 0);
        for (var c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      }),
      Array.prototype.lastIndexOf ||
        (Array.prototype.lastIndexOf = function (a) {
          if (void 0 === this || null === this) throw new TypeError();
          var b,
            c,
            d = Object(this),
            e = d.length >>> 0;
          if (0 === e) return -1;
          for (
            b = e - 1,
              arguments.length > 1 &&
                ((b = Number(arguments[1])),
                b != b
                  ? (b = 0)
                  : 0 != b &&
                    b != 1 / 0 &&
                    b != -(1 / 0) &&
                    (b = (b > 0 || -1) * Math.floor(Math.abs(b)))),
              c = b >= 0 ? Math.min(b, e - 1) : e - Math.abs(b);
            c >= 0;
            c--
          )
            if (c in d && d[c] === a) return c;
          return -1;
        });
  })(),
  "function" != typeof Object.assign &&
    !(function () {
      Object.assign = function (a) {
        "use strict";
        if (void 0 === a || null === a)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
          var d = arguments[c];
          if (void 0 !== d && null !== d)
            for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
        }
        return b;
      };
    })(),
  window.console || (console = { log: function () {} }),
  (function () {
    try {
      var a = "team=",
        b = ".jotform.pro",
        c = "theme_hackweek_widget_css";
      if (document.referrer && document.referrer.indexOf(a) > -1) {
        var d = !!document.getElementById(c);
        if (!d) {
          var e,
            f,
            g = document.referrer.split(a)[1].split("&")[0];
          if (document.referrer.indexOf(b) > -1) {
            var h = document.referrer.split(".jotform.pro")[0].split("://")[1];
            (e =
              "https://" +
              h +
              ".jotform.pro/hackweek/theme/" +
              g +
              "/widget.css"),
              (f =
                "https://" +
                h +
                ".jotform.pro/hackweek/theme/" +
                g +
                "/widget.js");
          } else
            (e = "https://cdn.jotfor.ms/hackweek/theme/" + g + "/widget.css"),
              (f = "https://cdn.jotfor.ms/hackweek/theme/" + g + "/widget.js");
          JFCustomWidgetUtils.loadCSS(
            e,
            function () {
              console.log("Theme hackweek custom css loaded!");
            },
            c
          ),
            JFCustomWidgetUtils.loadJS(f, function () {
              console.log("Theme hackweek custom js loaded!");
            });
        }
      }
    } catch (i) {
      console.log("Theme Hackweek: There is an error!"), console.error(i);
    }
  })();
var JFWidgetTranslation = (function () {
    function a(a) {
      var c = [];
      return (
        document.querySelectorAll(".translatable").forEach(function (a) {
          var d = b(a);
          d.forEach(function (a) {
            c.indexOf(a) > -1 || c.push(a);
          });
        }),
        a ? a(c) : c
      );
    }
    function b(a) {
      var b = [],
        c = a.tagName.toLowerCase(),
        d = m[c];
      return (
        void 0 !== d
          ? d.forEach(function (c) {
              var d = a[c];
              isNaN(d) && 0 !== d.length && "" !== d && b.push(d);
            })
          : isNaN(a.innerText) &&
            0 !== a.innerText.length &&
            "" !== a.innerText &&
            b.push(a.innerText),
        b
      );
    }
    function c(a) {
      l = a;
    }
    function d() {
      return l;
    }
    function e(a) {
      var b = {},
        c = {};
      "undefined" != typeof a && (l = a), (b = g(l.dictionary)), (c = b[l.to]);
      for (key in c) {
        var d = c[key];
        for (translationPropKey in d) {
          var e = d[translationPropKey],
            f = document.querySelector("." + e.id);
          if (null !== f) {
            var h = d[translationPropKey].translation,
              i = d[translationPropKey].property;
            void 0 !== h && "" !== h && (f[i] = h);
          }
        }
      }
    }
    function f(a, b, c) {
      if ("undefined" == typeof a || "undefined" == typeof b) return !1;
      var d = a.dictionary,
        e = "undefined" != typeof c ? c : "en",
        f = d[e];
      try {
        return f[b];
      } catch (g) {
        return !1;
      }
    }
    function g(a) {
      var b = {},
        c = {};
      if (
        (document.querySelectorAll(".translatable").forEach(function (a) {
          var c = a.tagName.toLowerCase(),
            d = m[c],
            e = i(),
            f = [];
          a.classList.contains("_uidset") === !1 &&
            (void 0 !== d
              ? d.forEach(function (b) {
                  var c = a[b];
                  "undefined" != typeof c &&
                    0 !== c.length &&
                    "" !== c &&
                    isNaN(c) &&
                    f.push({ id: e, property: b, text: c });
                })
              : "undefined" != typeof a.innerText &&
                0 !== a.innerText.length &&
                "" !== a.innerText &&
                isNaN(a.innerText) &&
                f.push({ id: e, property: "innerText", text: a.innerText }),
            0 !== f.length &&
              ((b[e] = f), a.classList.add(e), a.classList.add("_uidset")));
        }),
        0 === Object.keys(k).length)
      )
        (k = b), (c = h(b, a));
      else {
        var d = Object.assign(k, b);
        (k = d), (c = h(d, a));
      }
      return c;
    }
    function h(a, b) {
      var c = {};
      for (var d in b) {
        var e = b[d];
        c[d] = [];
        for (var f in a) {
          var g = a[f],
            h = [];
          for (var i in g) {
            var j = g[i];
            h.push({ translation: e[j.text], id: j.id, property: j.property });
          }
          c[d][f] = h;
        }
      }
      return c;
    }
    function i() {
      return "_" + Math.random().toString(36).substr(2, 9);
    }
    var j = {},
      k = {},
      l = {},
      m = {
        input: ["placeholder", "innerText"],
        button: ["innerText", "title"],
        textarea: ["placeholder", "innerText"],
        option: ["innerText"],
        img: ["title"],
      };
    return (
      (j.translate = e),
      (j.getTranslatables = a),
      (j.setDictionary = c),
      (j.getDictionary = d),
      (j.getTranslation = f),
      j
    );
  })(),
  JFCustomWidget = (function () {
    function a() {
      var a = arguments[0],
        b = [].slice.call(arguments, 1);
      if (!fb[a]) return !1;
      for (var c = fb[a], d = c ? c.length : 0; d--; ) c[d].func(b[0]);
    }
    function b(a, b) {
      "submit" === a && void 0 !== fb[a] && fb[a].pop(), fb[a] || (fb[a] = []);
      var c = (++eb).toString();
      return fb[a].push({ func: b, token: c }), c;
    }
    function c(a, c) {
      if (~a.indexOf(" ")) {
        for (var d = a.split(" "), e = [], f = 0; f < d.length; f++) {
          var g = b(d[f], c);
          e.push(g);
        }
        return e;
      }
      return b(a, c);
    }
    function d(a) {
      for (var b in fb)
        for (var c = fb[b], d = 0; d < c.length; d++) {
          var e = c[d];
          if (a === e.token) return c.splice(d, 1), a;
        }
      return mb;
    }
    function e(a) {
      return db()
        ? !1
        : ((a.type = "data"), (a.qid = mb.questionID), N(a), void 0);
    }
    function f(a) {
      if (db()) {
        var b = {
          type: "translation",
          qid: mb.questionID,
          formID: mb.formID,
          data: a,
        };
        N(b);
      }
    }
    function g(a) {
      return db()
        ? !1
        : ((a.type = "submit"), (a.qid = mb.questionID), N(a), void 0);
    }
    function h() {
      var a = document.querySelectorAll("input"),
        b = document.querySelectorAll("select");
      a.forEach(function (a) {
        "radio" === a.type || "checkbox" === a.type
          ? (a.checked = !1)
          : "button" !== a.type && (a.value = "");
      }),
        b.forEach(function (a) {
          a.selectedIndex = -1;
        });
    }
    function i(a) {
      (a.type = "ready"), N(a);
    }
    function j(a) {
      (a.type = "size"), (a.qid = mb.questionID), N(a);
    }
    function k(a) {
      N({ type: "styles", qid: mb.questionID, styles: a || {} });
    }
    function l(a) {
      var b = P();
      N({ eventID: b, type: "frame:move", qid: mb.questionID }),
        c("event:emitter:" + b, a);
    }
    function m(a) {
      var b = P();
      N({ type: "frame:getdata", eventID: b, qid: mb.questionID }),
        c("event:emitter:" + b, a);
    }
    function n(a, b, e) {
      var f = "undefined" != typeof e ? !0 : !1,
        g = P();
      if (
        (N({
          eventID: g,
          type: "event:store",
          field: a,
          value: b,
          qid: mb.questionID,
          hasCallback: f,
        }),
        f)
      )
        var h = c("event:emitter:" + g, function (a) {
          e(a.value), d(h);
        });
    }
    function o(a, b) {
      N({
        type: "fields:fill",
        fields: a,
        qid: mb.questionID,
        identifier: b || "",
      });
    }
    function p(a) {
      N({ type: "fields:clear", fields: a, qid: mb.questionID });
    }
    function q(a, b, d) {
      var e = P();
      N({
        fields: a,
        type: "fields:capture",
        eventID: e,
        identifier: b,
        qid: mb.questionID,
      }),
        c("event:emitter:" + e, d);
    }
    function r(a, b) {
      q(a, "id", b);
    }
    function s(a, b) {
      q(a, "name", b);
    }
    function t(a) {
      var b = P();
      N({ type: "form:trackerID", eventID: b, qid: mb.questionID }),
        c("event:emitter:" + b, a);
    }
    function u(a) {
      o(a, "label");
    }
    function v(a) {
      o(a, "id");
    }
    function w(a, b) {
      var d = P();
      (a.eventID = d),
        (a.type = "event:listener"),
        (a.qid = mb.questionID),
        N(a),
        "undefined" != typeof b && c("event:emitter:" + d, b);
    }
    function x(a, b, c) {
      w({ field: a, event: b }, function (a) {
        c && c(a.value);
      });
    }
    function y(a, b) {
      "undefined" != typeof b &&
        c("event:emitter:" + mb.questionID, function (a) {
          b(a.value);
        });
    }
    function z() {
      var a = { type: "submit:frame:remove", qid: mb.questionID };
      N(a);
    }
    function A(a, b) {
      return (
        "function" == typeof a ? (lb.callback = a) : B(a),
        "undefined" != typeof b &&
          (lb.options = Object.assign({}, lb.options, b)),
        mb
      );
    }
    function B(a) {
      if (
        ("string" == typeof a && (a = [a]),
        "[object Array]" !== Object.prototype.toString.call(a) && (a = []),
        a.length > 0)
      )
        for (var b = 0; b < a.length; b++) lb.list.push(a[b]);
    }
    function C() {
      return lb.list.length > 0;
    }
    function D(a) {
      if ("function" == typeof lb.callback) {
        var b = lb.callback(S());
        B(b), (lb.callback = !1);
      }
      if (C()) {
        var c = "parallel" in lb.options && !!lb.options.parallel;
        if ((c = c && lb.list.length > 1 ? !0 : !1))
          for (var d = [], e = 0; e < lb.list.length; e++) {
            var f = lb.list[e];
            JFCustomWidgetUtils.loadJS(f, function (b) {
              "function" == typeof lb.options.onLoad && lb.options.onLoad(b),
                d.push(b),
                d.length === lb.list.length && a && a();
            });
          }
        else {
          var f = lb.list.shift();
          JFCustomWidgetUtils.loadJS(f, function (b) {
            "function" == typeof lb.options.onLoad && lb.options.onLoad(b),
              D(a);
          });
        }
      } else a && a();
    }
    function E() {
      var a = { qid: mb.questionID, type: "field:hide" };
      N(a);
    }
    function F() {
      var a = { qid: mb.questionID, type: "field:show" };
      N(a);
    }
    function G(a) {
      var b = {
        qid: mb.questionID,
        type: "replace",
        inputType: a.type,
        mobile: a.isMobile || !1,
        required: "required" in a && a.required,
      };
      N(b);
    }
    function H(a, b) {
      return (
        N({
          type: "errors",
          qid: mb.questionID,
          action: "show",
          msg: a,
          resetForm: b || !1,
        }),
        mb.sendSubmit({ valid: !1, value: "" }),
        mb
      );
    }
    function I() {
      return N({ type: "errors", qid: mb.questionID, action: "hide" }), mb;
    }
    function J() {
      N({ type: "required", qid: mb.questionID, action: "set" });
    }
    function K() {
      N({ type: "required", qid: mb.questionID, action: "unset" });
    }
    function L() {
      return jb;
    }
    function M() {
      return jb && "cardform" in jb && jb.cardform === !0;
    }
    function N(a) {
      XD.postMessage(JSON.stringify(a), ob, parent);
    }
    function O(a, b) {
      null === b && (b = ""),
        (a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"));
      var c = new RegExp("[\\?&]" + a + "=([^&#]*)"),
        d = c.exec(window.location.href);
      return null === d ? b : decodeURIComponent(d[1]);
    }
    function P(a, b) {
      "undefined" == typeof a && (a = "");
      var c,
        d = function (a, b) {
          return (
            (a = parseInt(a, 10).toString(16)),
            b < a.length
              ? a.slice(a.length - b)
              : b > a.length
              ? Array(1 + (b - a.length)).join("0") + a
              : a
          );
        };
      return (
        this.php_js || (this.php_js = {}),
        this.php_js.uniqidSeed ||
          (this.php_js.uniqidSeed = Math.floor(123456789 * Math.random())),
        this.php_js.uniqidSeed++,
        (c = a),
        (c += d(parseInt(new Date().getTime() / 1e3, 10), 8)),
        (c += d(this.php_js.uniqidSeed, 5)),
        b && (c += (10 * Math.random()).toFixed(8).toString()),
        c
      );
    }
    function Q() {
      var a,
        b = {},
        c = window.location.search.substring(1);
      if (c) {
        var d = c.split("&");
        for (a = 0; a < d.length; a++) {
          var e = d[a].split("=");
          b[e[0]] = decodeURIComponent(e[1]);
        }
      }
      return b;
    }
    function R(a, b) {
      if (!hb) return O(a, b);
      if ((null === b && (b = ""), null === a)) return b;
      var c = S();
      return DOMPurify.sanitize(c[a]);
    }
    function S() {
      if (!hb) return Q();
      for (
        var a = JSON.parse(decodeURIComponent(hb)), b = {}, c = 0;
        c < a.length;
        c++
      ) {
        var d = a[c],
          e = JFCustomWidgetUtils.isJsonString(d.value)
            ? JSON.parse(d.value)
            : d.value;
        b[d.name] = "string" == typeof e ? DOMPurify.sanitize(e) : e;
      }
      var f = Q();
      for (var g in f) b[g] = f[g];
      return b;
    }
    function T() {
      return ib || "";
    }
    function U() {
      return kb;
    }
    function V(a, b, c) {
      if (a && b)
        try {
          var d = !!document.getElementById("cardform_widgets_css");
          if (!d) {
            var e =
                "92891840837975" === a
                  ? "https://aysenur.jotform.pro"
                  : "https://cdn.jotfor.ms",
              f = e + "/stylebuilder/" + a + ".widgets." + b + ".css",
              g = window.location.search.split("?").join(""),
              h =
                g.indexOf("offline_forms=true") > -1 ||
                g.indexOf("offline_forms=si") > -1,
              i =
                window &&
                window.location &&
                window.location.href &&
                0 === window.location.href.indexOf("file://"),
              j = window && window.navigator && window.navigator.onLine;
            h && !j && i
              ? setTimeout(function () {
                  c && c();
                }, 0)
              : JFCustomWidgetUtils.loadCSS(
                  f,
                  function () {
                    c && c(), mb.publish("cardform:widgetcss:active");
                  },
                  "cardform_widgets_css"
                );
          }
          var k = "cardFormWidget_" + b,
            l = "card-form-widget";
          "object" == typeof document.body.classList &&
          "function" == typeof document.body.classList.contains
            ? document.body.classList.contains(k) ||
              (document.body.classList.add(k), document.body.classList.add(l))
            : "string" == typeof documeny.body.className &&
              -1 === document.body.className.indexOf(k) &&
              ((document.body.className += " " + k),
              (document.body.className += " " + l));
        } catch (m) {
          console.error(m);
        }
    }
    function W() {
      function a() {
        var a = !!document.getElementById(e);
        if (
          (document.querySelector("body") &&
            document
              .querySelector("body")
              .setAttribute("data-theme", "upcoming"),
          !a)
        ) {
          var b = "https://cdn.jotfor.ms/themes/CSS/defaultV2.css";
          if (document.referrer.indexOf(d) > -1) {
            var c = document.referrer.split(".jotform.pro")[0].split("://")[1];
            b = "https://" + c + ".jotform.pro/themes/CSS/defaultV2.css";
          }
          JFCustomWidgetUtils.loadCSS(
            b,
            function () {
              console.log("New Default Theme custom CSS injected");
            },
            "new_default_theme_custom_css"
          );
        }
      }
      try {
        var b = ["image-preview"],
          c = [
            "smooth-signature",
            "terms-conditions",
            "take-photo",
            "multiple-text-fields",
            "image-slider",
            "date-picker",
            "checklist",
            "dynamic-textbox",
            "terms-scroll-widget",
            "image-preview",
          ],
          d = ".jotform.pro",
          e = "new_default_theme_custom_css",
          f = "ndt=",
          g = document.body.getAttribute("data-type"),
          h = document.location.search.indexOf("injectCSS=true");
        (document.referrer.indexOf(f) > -1 ||
          h > -1 ||
          (g && c.indexOf(g) > -1)) &&
          a(),
          document.referrer.indexOf(f) > -1 &&
            g &&
            b.indexOf(g) > -1 &&
            document.querySelector("body") &&
            document.querySelector("body").setAttribute("data-env", "test");
      } catch (i) {
        console.log("NewDefaultTheme Inject Css: ERROR, ", i);
      }
    }
    function X() {
      var a = function () {
        document.addEventListener(
          "focus",
          function () {
            var a = JFCustomWidget.getWidgetSettings();
            parent.postMessage({ type: "collapse", qid: a.qid }, "*");
          },
          !0
        );
      };
      "complete" === document.readyState ||
      ("loading" !== document.readyState && !document.documentElement.doScroll)
        ? a()
        : document.addEventListener("DOMContentLoaded", a);
    }
    function Y() {
      mb.subscribe("ready", function () {
        document.body.style.background = "transparent";
      }),
        mb.subscribe("submit", function () {
          mb.sendSubmit({ initial: !0, data: !1, valid: !0 });
        }),
        mb.subscribe("style", function (a) {
          if (void 0 !== a.font) {
            var b = a.font.family;
            $(b);
          }
        }),
        mb.subscribe("clear", mb.clearWidgetFields),
        X();
    }
    function Z() {
      var a = ab(R("customCSS"));
      if (a && a.length > 0 && "<empty>" !== a) {
        var b = document.head || document.getElementsByTagName("head")[0],
          c = document.createElement("style");
        (c.type = "text/css"),
          c.styleSheet
            ? (c.styleSheet.cssText = a)
            : c.appendChild(document.createTextNode(a)),
          b.appendChild(c);
      }
    }
    function $(a) {
      a = a.replace(/\'|\"|(\,\s*sans-serif)/gi, "");
      var b = [
        "Arial",
        "Arial Black",
        "Courier",
        "Courier New",
        "Comic Sans MS",
        "Gill Sans",
        "Helvetica",
        "Lucida",
        "Lucida Grande",
        "Trebuchet MS",
        "Tahoma",
        "Times New Roman",
        "Verdana",
        "Calibri",
      ];
      if (((a = a.split(",")[0]), b.indexOf(a) >= 0))
        (document.body.style.fontFamily = '"' + a + '", sans-serif'),
          mb.publish("customfont:active", a),
          mb.publish("customfont", a);
      else {
        document.body.style.fontFamily = '"' + a + '", sans-serif';
        var c = "https://cdn.jotfor.ms/opt/google-fonts/" + a + "/fontface.css";
        WebFont.load({
          custom: { urls: [c], families: [a] },
          active: function () {
            mb.publish("customfont:active", a), mb.publish("customfont", a);
          },
        });
      }
    }
    function _(a) {
      if (Object.keys) return Object.keys(a).length;
      var b = 0;
      for (var c in a) a.hasOwnProperty(c) && b++;
      return b;
    }
    function ab(a) {
      var b = document.createElement("div");
      return (
        a &&
          "string" == typeof a &&
          ((a = escape(a)
            .replace(/%26/g, "&")
            .replace(/%23/g, "#")
            .replace(/%3B/g, ";")),
          (b.innerHTML = a),
          b.innerText
            ? ((a = b.innerText), (b.innerText = ""))
            : ((a = b.textContent), (b.textContent = ""))),
        unescape(a)
      );
    }
    function bb() {
      var a = !1;
      return "required" in jb && (a = jb.required), a;
    }
    function cb() {
      return "static" in jb ? jb.static : !1;
    }
    function db() {
      var a = !1;
      return "onWizard" in jb && (a = jb.onWizard), a;
    }
    var eb = -1,
      fb = {},
      gb = !1,
      hb = !1,
      ib = !1,
      jb = {},
      kb = !1,
      lb = {
        callback: !1,
        list: [],
        options: { parallel: !1, onLoad: function () {} },
      },
      mb = { texts: {}, formID: -1, questionID: O("qid") };
    (mb.publish = a),
      (mb.subscribe = c),
      (mb.on = c),
      (mb.unsubscribe = d),
      (mb.off = d),
      (mb.sendData = e),
      (mb.sendTranslatables = f),
      (mb.sendSubmit = g),
      (mb.clearWidgetFields = h),
      (mb.sendReady = i),
      (mb.requestFrameResize = j),
      (mb.setFrameSize = j),
      (mb.setFrameStyles = k),
      (mb.detectFrameMovement = l),
      (mb.hideWidgetContainer = E),
      (mb.showWidgetContainer = F),
      (mb.replaceWidget = G),
      (mb.getWidgetData = L),
      (mb.getFrameData = m),
      (mb.isFromCardform = M),
      (mb.setupLibraries = A),
      (mb.removeSubmittedFrame = z),
      (mb.showWidgetError = H),
      (mb.hideWidgetError = I),
      (mb.makeWidgetRequired = J),
      (mb.makeWidgetNotRequired = K),
      (mb.listenFromField = x),
      (mb.listenFromWidget = y),
      (mb.storeToField = n),
      (mb.setFieldsValueByLabel = u),
      (mb.setFieldsValueById = v),
      (mb.clearFields = p),
      (mb.getFieldsValueById = r),
      (mb.getFieldsValueByName = s),
      (mb.getFormTrackerID = t),
      (mb.getQueryString = R),
      (mb.getAllQueryString = S),
      (mb.getWidgetSetting = R),
      (mb.getWidgetSettings = S),
      (mb.getParentOrigin = T),
      (mb.getEnterprise = U),
      (mb.isWidgetRequired = bb),
      (mb.isWidgetStatic = cb),
      (mb.isWidgetOnBuilder = db);
    var nb = O("ref"),
      ob = decodeURIComponent(nb);
    if ((!nb || "undefined" == typeof nb) && "undefined" == typeof O("qid")) {
      var pb = document.location.hash.replace(/^#/, ""),
        qb = pb.lastIndexOf("/");
      (ob = decodeURIComponent(pb.substr(0, qb))),
        (mb.questionID = Number(pb.substr(qb + 1)));
    }
    return (
      XD.receiveMessage(function (a) {
        if (!("data" in a && a.data.indexOf("/*framebus*/") > -1)) {
          var b = JSON.parse(a.data);
          switch (b.type) {
            case "ready":
              if (gb) return !1;
              b.fontFamily && b.fontFamily.length > 0 && $(b.fontFamily),
                b.enterprise && (kb = b.enterprise),
                b.settings && !hb && ((hb = b.settings), delete b.settings),
                "origin" in b && ((ib = b.origin), delete b.origin),
                Z(),
                (gb = !0),
                (jb = b),
                ("v2" !== b.themeVersion && !b.isExtendedTheme) || M() || W(),
                D(function () {
                  b.cardform === !0
                    ? V(b.formID, b.widgetID, function () {
                        mb.publish("ready", b);
                      })
                    : mb.publish("ready", b);
                });
              break;
            case "settings":
              b.settings && !hb && (hb = b.settings);
              break;
            case "event:receiver":
              "isWidget" in b && b.isWidget
                ? mb.publish("event:emitter:" + b.targetQID, b)
                : mb.publish("event:emitter:" + b.eventID, b);
              break;
            case "formstrings":
              "formTexts" in b && _(mb.texts) < 1 && (mb.texts = b.formTexts);
              break;
            case "widgetclear":
              mb.publish("clear", b);
              break;
            case "widgetpopulate":
              mb.publish("populate", b);
              break;
            case "widgetshift":
              mb.publish("shift", b);
              break;
            case "show":
              mb.publish("show", b);
              break;
            case "reload":
              "reload" in window.location && window.location.reload();
              break;
            case "submit":
              var c = !1;
              "method" in b &&
                "next" === b.method &&
                ((c = !0), mb.publish("next")),
                mb.publish("submit", c);
              break;
            case "style":
              mb.publish("style", b);
              break;
            case "frameresize":
              mb.publish("frameresize", b);
              break;
            case "translatable":
              (mb.formID = b.formID), mb.publish("translatable", b);
              break;
            case "translate":
              mb.publish("translate", b);
          }
        }
      }, ob),
      Y(),
      mb
    );
  })();
