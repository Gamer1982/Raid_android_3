function lang() {
  switch ((console.log(langg.value), langg.value)) {
    case "en":
      langArray = enArray.concat();
      break;
    case "ru":
      langArray = ruArray.concat();
      break;
    case "fr":
      langArray = frArray.concat();
      break;
    case "du":
      langArray = duArray.concat();
      break;
    case "it":
      langArray = itArray.concat();
      break;
    case "es":
      langArray = esArray.concat();
      break;
    case "pt":
      langArray = ptArray.concat();
      break;
    case "ko":
      langArray = koArray.concat();
      break;
    case "zh":
      langArray = zhArray.concat();
      break;
    case "ja":
      langArray = jaArray.concat();
      break;
    case "tr":
      langArray = trArray.concat();
      break;
    case "uk":
      langArray = ukArray.concat();
  }
  for (
    var e = Array.from(document.querySelectorAll("*")), t = 0;
    t < e.length;
    t++
  )
    ("option" != e[t].localName &&
      "h2" != e[t].localName &&
      "p" != e[t].localName &&
      "span" != e[t].localName) ||
      ((e[t].textContent = langArray[k]), k++);
  k = 0;
}
function fyf2() {
  for (var e = 0; e < bonus2.length; e++)
    if (!0 === bonus2[e].selected) {
      (bonus2[e].value = +input[x].value), (x += 1);
      for (var t = 0; t < bonus2.length; t++)
        bonus2[e].text == bonus2[t].text && (bonus2[t].disabled = !0);
    } else {
      t = [];
      for (var r = 0; r < bonus2.length; r++)
        bonus2[e].text == bonus2[r].text && t.push(bonus2[r]);
      void 0 !== t[1] &&
        (t[0].selected == t[1].selected &&
        t[1].selected == t[2].selected &&
        t[2].selected == t[3].selected
          ? (bonus2[e].disabled = !1)
          : t[0].selected == t[1].selected &&
            t[1].selected == t[2].selected &&
            t[2].selected == t[3].selected &&
            void 0 === t[4]
          ? (bonus2[e].disabled = !1)
          : t[0].selected == t[1].selected &&
            t[1].selected == t[2].selected &&
            t[2].selected == t[3].selected &&
            t[3].selected == t[4].selected &&
            (bonus2[e].disabled = !1));
    }
}
function result1(e) {
  return Array.from(e)
    .filter(function (e, t) {
      if (1 == e.selected) return !0;
    })
    .map(function (e, t) {
      return +e.value;
    })
    .reduce(function (e, t) {
      return e + t;
    }, 0);
}
function color() {
  for (var e = this.children, t = 0; t < e.length; t++)
    if (1 == e[t].selected && 1 != e[t].disabled)
      switch (t) {
        case 1:
          (this.parentElement.style.borderColor = "#95c11f"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 2:
          (this.parentElement.style.borderColor = "#db0203"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 3:
          (this.parentElement.style.borderColor = "#ffbf6a"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 4:
          (this.parentElement.style.borderColor = "#d59400"),
            (this.parentElement.style.borderWidth = "0.14em"),
            (this.parentElement.style.borderStyle = "double");
          break;
        case 5:
          (this.parentElement.style.borderColor = "#0786f6"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 6:
          (this.parentElement.style.borderColor = "#05d2eb"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 7:
          (this.parentElement.style.borderColor = "#b3a400"),
            (this.parentElement.style.borderWidth = "0.14em"),
            (this.parentElement.style.borderStyle = "double");
          break;
        case 8:
          (this.parentElement.style.borderColor = "#c21600"),
            (this.parentElement.style.borderWidth = "0.14em"),
            (this.parentElement.style.borderStyle = "double");
          break;
        case 9:
          (this.parentElement.style.borderColor = "#d30646"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "dashed");
          break;
        case 10:
          (this.parentElement.style.borderColor = "#bd4e8e"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 11:
          (this.parentElement.style.borderColor = "#84ff0f"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 12:
          (this.parentElement.style.borderColor = "#93556a"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 13:
          (this.parentElement.style.borderColor = "#d73281"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "double");
          break;
        case 14:
          (this.parentElement.style.borderColor = "#aa6a45"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 15:
          (this.parentElement.style.borderColor = "#c20530"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "double");
          break;
        case 16:
          (this.parentElement.style.borderColor = "#dfcc00"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 17:
          (this.parentElement.style.borderColor = "#a0ceff"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 18:
          (this.parentElement.style.borderColor = "#ffe562"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 19:
          (this.parentElement.style.borderColor = "#c74d0e"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 20:
          (this.parentElement.style.borderColor = "#54045a"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 21:
          (this.parentElement.style.borderColor = "#f90fe1"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 22:
          (this.parentElement.style.borderColor = "#b69330"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "double");
          break;
        case 23:
          (this.parentElement.style.borderColor = "#5219ed"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 24:
          (this.parentElement.style.borderColor = "#46a92a"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 25:
          (this.parentElement.style.borderColor = "#bad800"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "double");
          break;
        case 26:
          (this.parentElement.style.borderColor = "#19c588"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 27:
          (this.parentElement.style.borderColor = "#ad0d10"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 28:
          (this.parentElement.style.borderColor = "#e24a33"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "solid");
          break;
        case 29:
          (this.parentElement.style.borderColor = "#fb4600"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "dashed");
          break;
        case 30:
          (this.parentElement.style.borderColor = "#00b06b"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "dashed");
          break;
        case 31:
          (this.parentElement.style.borderColor = "#45bfc4"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "dashed");
          break;
        case 32:
          (this.parentElement.style.borderColor = "#ac547d"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "dashed");
          break;
        case 33:
          (this.parentElement.style.borderColor = "#fc0000"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "dashed");
          break;
        case 34:
          (this.parentElement.style.borderColor = "#b1d065"),
            (this.parentElement.style.borderWidth = "0.1em"),
            (this.parentElement.style.borderStyle = "dashed");
          break;
        case 35:
          (this.parentElement.style.borderColor = "#614e7f"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "dashed");
          break;
        case 36:
          (this.parentElement.style.borderColor = "#91bd45"),
            (this.parentElement.style.borderWidth = "0.2em"),
            (this.parentElement.style.borderStyle = "dashed");
      }
}
function big() {
  (this.parentElement.style.transform = "scale(2)"),
    (this.parentElement.style.width = "16vw"),
    (this.parentElement.style.position = "fixed"),
    (this.parentElement.style.left = "26vw"),
    (this.parentElement.style.top = "25vh"),
    (this.parentElement.style.zIndex = "11"),
    (this.parentElement.style.background = "#162850"),
    (this.style.display = "none"),
    (this.nextElementSibling.style.display = "block"),
    console.log("100%");
}
function big2() {
  (this.parentElement.style.transform = "scale(1)"),
    (this.parentElement.style.position = "relative"),
    (this.style.display = "none"),
    (this.parentElement.style.left = "0"),
    (this.parentElement.style.top = "0"),
    (this.parentElement.style.zIndex = "1"),
    (this.parentElement.style.background = "none"),
    (this.previousElementSibling.style.display = "block"),
    console.log("200%");
}
var $jscomp = $jscomp || {};
($jscomp.scope = {}),
  ($jscomp.arrayIteratorImpl = function (e) {
    var t = 0;
    return function () {
      return t < e.length ? { done: !1, value: e[t++] } : { done: !0 };
    };
  }),
  ($jscomp.arrayIterator = function (e) {
    return { next: $jscomp.arrayIteratorImpl(e) };
  }),
  ($jscomp.makeIterator = function (e) {
    var t =
      "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
    return t ? t.call(e) : $jscomp.arrayIterator(e);
  }),
  ($jscomp.arrayFromIterator = function (e) {
    for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
    return r;
  }),
  ($jscomp.arrayFromIterable = function (e) {
    return e instanceof Array
      ? e
      : $jscomp.arrayFromIterator($jscomp.makeIterator(e));
  }),
  ($jscomp.ASSUME_ES5 = !1),
  ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
  ($jscomp.ASSUME_NO_NATIVE_SET = !1),
  ($jscomp.SIMPLE_FROUND_POLYFILL = !1),
  ($jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (e, t, r) {
          e != Array.prototype && e != Object.prototype && (e[t] = r.value);
        }),
  ($jscomp.getGlobal = function (e) {
    return "undefined" != typeof window && window === e
      ? e
      : "undefined" != typeof global && null != global
      ? global
      : e;
  }),
  ($jscomp.global = $jscomp.getGlobal(this)),
  ($jscomp.polyfill = function (e, t, r, i) {
    if (t) {
      for (r = $jscomp.global, e = e.split("."), i = 0; i < e.length - 1; i++) {
        var a = e[i];
        a in r || (r[a] = {}), (r = r[a]);
      }
      (t = t((i = r[(e = e[e.length - 1])]))) != i &&
        null != t &&
        $jscomp.defineProperty(r, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
    }
  }),
  $jscomp.polyfill(
    "Array.from",
    function (e) {
      return (
        e ||
        function (e, t, r) {
          t =
            null != t
              ? t
              : function (e) {
                  return e;
                };
          var i = [],
            a =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              e[Symbol.iterator];
          if ("function" == typeof a) {
            e = a.call(e);
            for (var n = 0; !(a = e.next()).done; )
              i.push(t.call(r, a.value, n++));
          } else
            for (a = e.length, n = 0; n < a; n++) i.push(t.call(r, e[n], n));
          return i;
        }
      );
    },
    "es6",
    "es3"
  ),
  ($jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var e = {},
        t = Object.create(
          new $jscomp.global.Proxy(e, {
            get: function (r, i, a) {
              return r == e && "q" == i && a == t;
            },
          })
        );
      return !0 === t.q;
    } catch (e) {
      return !1;
    }
  }),
  ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1),
  ($jscomp.ES6_CONFORMANCE =
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS &&
    $jscomp.checkEs6ConformanceViaProxy()),
  ($jscomp.SYMBOL_PREFIX = "jscomp_symbol_"),
  ($jscomp.initSymbol = function () {
    ($jscomp.initSymbol = function () {}),
      $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
  }),
  ($jscomp.SymbolClass = function (e, t) {
    (this.$jscomp$symbol$id_ = e),
      $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: t,
      });
  }),
  ($jscomp.SymbolClass.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  }),
  ($jscomp.Symbol = (function () {
    function e(r) {
      if (this instanceof e) throw new TypeError("Symbol is not a constructor");
      return new $jscomp.SymbolClass(
        $jscomp.SYMBOL_PREFIX + (r || "") + "_" + t++,
        r
      );
    }
    var t = 0;
    return e;
  })()),
  ($jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.iterator;
    e ||
      (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol(
        "Symbol.iterator"
      )),
      "function" != typeof Array.prototype[e] &&
        $jscomp.defineProperty(Array.prototype, e, {
          configurable: !0,
          writable: !0,
          value: function () {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
          },
        }),
      ($jscomp.initSymbolIterator = function () {});
  }),
  ($jscomp.initSymbolAsyncIterator = function () {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.asyncIterator;
    e ||
      (e = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol(
        "Symbol.asyncIterator"
      )),
      ($jscomp.initSymbolAsyncIterator = function () {});
  }),
  ($jscomp.iteratorPrototype = function (e) {
    return (
      $jscomp.initSymbolIterator(),
      (e = { next: e }),
      (e[$jscomp.global.Symbol.iterator] = function () {
        return this;
      }),
      e
    );
  }),
  ($jscomp.owns = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  $jscomp.polyfill(
    "WeakMap",
    function (e) {
      function t() {}
      function r(e) {
        if (!$jscomp.owns(e, a)) {
          var r = new t();
          $jscomp.defineProperty(e, a, { value: r });
        }
      }
      function i(e) {
        var i = Object[e];
        i &&
          (Object[e] = function (e) {
            return e instanceof t ? e : (r(e), i(e));
          });
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (e && $jscomp.ES6_CONFORMANCE) return e;
      } else if (
        (function () {
          if (!e || !Object.seal) return !1;
          try {
            var t = Object.seal({}),
              r = Object.seal({}),
              i = new e([
                [t, 2],
                [r, 3],
              ]);
            return (
              2 == i.get(t) &&
              3 == i.get(r) &&
              (i.delete(t), i.set(r, 4), !i.has(t) && 4 == i.get(r))
            );
          } catch (e) {
            return !1;
          }
        })()
      )
        return e;
      var a = "$jscomp_hidden_" + Math.random();
      i("freeze"), i("preventExtensions"), i("seal");
      var n = 0,
        o = function (e) {
          if (((this.id_ = (n += Math.random() + 1).toString()), e)) {
            e = $jscomp.makeIterator(e);
            for (var t; !(t = e.next()).done; )
              (t = t.value), this.set(t[0], t[1]);
          }
        };
      return (
        (o.prototype.set = function (e, t) {
          if ((r(e), !$jscomp.owns(e, a)))
            throw Error("WeakMap key fail: " + e);
          return (e[a][this.id_] = t), this;
        }),
        (o.prototype.get = function (e) {
          return $jscomp.owns(e, a) ? e[a][this.id_] : void 0;
        }),
        (o.prototype.has = function (e) {
          return $jscomp.owns(e, a) && $jscomp.owns(e[a], this.id_);
        }),
        (o.prototype.delete = function (e) {
          return (
            !(!$jscomp.owns(e, a) || !$jscomp.owns(e[a], this.id_)) &&
            delete e[a][this.id_]
          );
        }),
        o
      );
    },
    "es6",
    "es3"
  ),
  ($jscomp.MapEntry = function () {}),
  $jscomp.polyfill(
    "Map",
    function (e) {
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (e && $jscomp.ES6_CONFORMANCE) return e;
      } else if (
        (function () {
          if (
            $jscomp.ASSUME_NO_NATIVE_MAP ||
            !e ||
            "function" != typeof e ||
            !e.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var t = Object.seal({ x: 4 }),
              r = new e($jscomp.makeIterator([[t, "s"]]));
            if (
              "s" != r.get(t) ||
              1 != r.size ||
              r.get({ x: 4 }) ||
              r.set({ x: 4 }, "t") != r ||
              2 != r.size
            )
              return !1;
            var i = r.entries(),
              a = i.next();
            return (
              !a.done &&
              a.value[0] == t &&
              "s" == a.value[1] &&
              !(
                (a = i.next()).done ||
                4 != a.value[0].x ||
                "t" != a.value[1] ||
                !i.next().done
              )
            );
          } catch (e) {
            return !1;
          }
        })()
      )
        return e;
      $jscomp.initSymbolIterator();
      var t = new WeakMap(),
        r = function (e) {
          if (((this.data_ = {}), (this.head_ = n()), (this.size = 0), e)) {
            e = $jscomp.makeIterator(e);
            for (var t; !(t = e.next()).done; )
              (t = t.value), this.set(t[0], t[1]);
          }
        };
      (r.prototype.set = function (e, t) {
        var r = i(this, (e = 0 === e ? 0 : e));
        return (
          r.list || (r.list = this.data_[r.id] = []),
          r.entry
            ? (r.entry.value = t)
            : ((r.entry = {
                next: this.head_,
                previous: this.head_.previous,
                head: this.head_,
                key: e,
                value: t,
              }),
              r.list.push(r.entry),
              (this.head_.previous.next = r.entry),
              (this.head_.previous = r.entry),
              this.size++),
          this
        );
      }),
        (r.prototype.delete = function (e) {
          return !(
            !(e = i(this, e)).entry ||
            !e.list ||
            (e.list.splice(e.index, 1),
            e.list.length || delete this.data_[e.id],
            (e.entry.previous.next = e.entry.next),
            (e.entry.next.previous = e.entry.previous),
            (e.entry.head = null),
            this.size--,
            0)
          );
        }),
        (r.prototype.clear = function () {
          (this.data_ = {}),
            (this.head_ = this.head_.previous = n()),
            (this.size = 0);
        }),
        (r.prototype.has = function (e) {
          return !!i(this, e).entry;
        }),
        (r.prototype.get = function (e) {
          return (e = i(this, e).entry) && e.value;
        }),
        (r.prototype.entries = function () {
          return a(this, function (e) {
            return [e.key, e.value];
          });
        }),
        (r.prototype.keys = function () {
          return a(this, function (e) {
            return e.key;
          });
        }),
        (r.prototype.values = function () {
          return a(this, function (e) {
            return e.value;
          });
        }),
        (r.prototype.forEach = function (e, t) {
          for (var r, i = this.entries(); !(r = i.next()).done; )
            (r = r.value), e.call(t, r[1], r[0], this);
        }),
        (r.prototype[Symbol.iterator] = r.prototype.entries);
      var i = function (e, r) {
          var i = r && typeof r;
          "object" == i || "function" == i
            ? t.has(r)
              ? (i = t.get(r))
              : ((i = "" + ++o), t.set(r, i))
            : (i = "p_" + r);
          var a = e.data_[i];
          if (a && $jscomp.owns(e.data_, i))
            for (e = 0; e < a.length; e++) {
              var n = a[e];
              if ((r !== r && n.key !== n.key) || r === n.key)
                return { id: i, list: a, index: e, entry: n };
            }
          return { id: i, list: a, index: -1, entry: void 0 };
        },
        a = function (e, t) {
          var r = e.head_;
          return $jscomp.iteratorPrototype(function () {
            if (r) {
              for (; r.head != e.head_; ) r = r.previous;
              for (; r.next != r.head; )
                return (r = r.next), { done: !1, value: t(r) };
              r = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        n = function () {
          var e = {};
          return (e.previous = e.next = e.head = e);
        },
        o = 0;
      return r;
    },
    "es6",
    "es3"
  ),
  $jscomp.polyfill(
    "Set",
    function (e) {
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (e && $jscomp.ES6_CONFORMANCE) return e;
      } else if (
        (function () {
          if (
            $jscomp.ASSUME_NO_NATIVE_SET ||
            !e ||
            "function" != typeof e ||
            !e.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var t = Object.seal({ x: 4 }),
              r = new e($jscomp.makeIterator([t]));
            if (
              !r.has(t) ||
              1 != r.size ||
              r.add(t) != r ||
              1 != r.size ||
              r.add({ x: 4 }) != r ||
              2 != r.size
            )
              return !1;
            var i = r.entries(),
              a = i.next();
            return (
              !a.done &&
              a.value[0] == t &&
              a.value[1] == t &&
              !(a = i.next()).done &&
              a.value[0] != t &&
              4 == a.value[0].x &&
              a.value[1] == a.value[0] &&
              i.next().done
            );
          } catch (e) {
            return !1;
          }
        })()
      )
        return e;
      $jscomp.initSymbolIterator();
      var t = function (e) {
        if (((this.map_ = new Map()), e)) {
          e = $jscomp.makeIterator(e);
          for (var t; !(t = e.next()).done; ) this.add(t.value);
        }
        this.size = this.map_.size;
      };
      return (
        (t.prototype.add = function (e) {
          return (
            (e = 0 === e ? 0 : e),
            this.map_.set(e, e),
            (this.size = this.map_.size),
            this
          );
        }),
        (t.prototype.delete = function (e) {
          return (e = this.map_.delete(e)), (this.size = this.map_.size), e;
        }),
        (t.prototype.clear = function () {
          this.map_.clear(), (this.size = 0);
        }),
        (t.prototype.has = function (e) {
          return this.map_.has(e);
        }),
        (t.prototype.entries = function () {
          return this.map_.entries();
        }),
        (t.prototype.values = function () {
          return this.map_.values();
        }),
        (t.prototype.keys = t.prototype.values),
        (t.prototype[Symbol.iterator] = t.prototype.values),
        (t.prototype.forEach = function (e, t) {
          var r = this;
          this.map_.forEach(function (i) {
            return e.call(t, i, i, r);
          });
        }),
        t
      );
    },
    "es6",
    "es3"
  );
var bonus2,
  input,
  x = 0,
  k = 0,
  enArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;Choose a set;Life(2) +15%HP;Offense(2) +15%ATK;Defense(2) +15%DEF;C.Rate(2) +12%;Accuracy(2) +40ACC;Speed(2) +12%SPD;Resistance(2) +40;C.Damage(2) +20%;Lifesteal(4);Destroy(4);Retaliation(4);Fury(4);Curing(4);Reflex(4);Cursed(4);Toxic(4);Frost(4);Daze(4);Immunity(4);Avenging(4);Shield(4);Stalwart(4);Frenzy(4);Regeneration(4);Stun(4);Relentless(4);Savage(4);Taunting(4);Cruel(2) +15%ATK;Immortal(2) +15%HP;D.Life(2) +15%HP;D.Offense(2) +15%ATK;D.C.Rate(2) +12%;D.Speed(2)+12%SPD;Swift parry(4)+18%SPD+30%C.Dmg;Deflection(4)+20HP%+20DEF%;ATK+;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;Choose a set;Life(2) +15%HP;Offense(2) +15%ATK;Defense(2) +15%DEF;C.Rate(2) +12%;Accuracy(2) +40ACC;Speed(2) +12%SPD;Resistance(2) +40;C.Damage(2) +20%;Lifesteal(4);Destroy(4);Retaliation(4);Fury(4);Curing(4);Reflex(4);Cursed(4);Toxic(4);Frost(4);Daze(4);Immunity(4);Avenging(4);Shield(4);Stalwart(4);Frenzy(4);Regeneration(4);Stun(4);Relentless(4);Savage(4);Taunting(4);Cruel(2) +15%ATK;Immortal(2) +15%HP;D.Life(2) +15%HP;D.Offense(2) +15%ATK;D.C.Rate(2) +12%;D.Speed(2)+12%SPD;Swift parry(4)+18%SPD+30%C.Dmg;Deflection(4)+20HP%+20DEF%;HP+;ATK+;DEF+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;DEF%;ATK+;DEF+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;DEF%;ATK+;DEF+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;DEF%;ATK+;DEF+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;DEF%;Choose a set;Life(2) +15%HP;Offense(2) +15%ATK;Defense(2) +15%DEF;C.Rate(2) +12%;Accuracy(2) +40ACC;Speed(2) +12%SPD;Resistance(2) +40;C.Damage(2) +20%;Lifesteal(4);Destroy(4);Retaliation(4);Fury(4);Curing(4);Reflex(4);Cursed(4);Toxic(4);Frost(4);Daze(4);Immunity(4);Avenging(4);Shield(4);Stalwart(4);Frenzy(4);Regeneration(4);Stun(4);Relentless(4);Savage(4);Taunting(4);Cruel(2) +15%ATK;Immortal(2) +15%HP;D.Life(2) +15%HP;D.Offense(2) +15%ATK;D.C.Rate(2) +12%;D.Speed(2)+12%SPD;Swift parry(4)+18%SPD+30%C.Dmg;Deflection(4)+20HP%+20DEF%;DEF+;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;HP%;DEF%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;HP%;DEF%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;HP%;DEF%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;HP%;DEF%;Great Hall;HP;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ATK;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;DEF;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;C.DMG;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;RES;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;ACC;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;Arena;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;Masteries;SKILL;ATK 75;C.R 5%;DEF 75;RES 10;SKILL;DEF 75;RES 10;M.HP 810;ACC 10;SKILL;C.DMG 10%;SKILL;SET +15%;SKILL;C.DMG 20%;DEF 200;RESIST 50;M.HP 3000;ACC 50;HP-;0; ATK-;0;DEF-;0;SPD-;0;C.R-;0%;C.D-;0%;RES-;0;ACC-;0;Choose a set;Life(2) +15%HP;Offense(2) +15%ATK;Defense(2) +15%DEF;C.Rate(2) +12%;Accuracy(2) +40ACC;Speed(2) +12%SPD;Resistance(2) +40;C.Damage(2) +20%;Lifesteal(4);Destroy(4);Retaliation(4);Fury(4);Curing(4);Reflex(4);Cursed(4);Toxic(4);Frost(4);Daze(4);Immunity(4);Avenging(4);Shield(4);Stalwart(4);Frenzy(4);Regeneration(4);Stun(4);Relentless(4);Savage(4);Taunting(4);Cruel(2) +15%ATK;Immortal(2) +15%HP;D.Life(2) +15%HP;D.Offense(2) +15%ATK;D.C.Rate(2) +12%;D.Speed(2)+12%SPD;Swift parry(4)+18%SPD+30%C.Dmg;Deflection(4)+20HP%+20DEF%;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;SPD;RESIST;ACC;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;SPD;RESIST;ACC;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;SPD;RESIST;ACC;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;SPD;RESIST;ACC;Choose a set;Life(2) +15%HP;Offense(2) +15%ATK;Defense(2) +15%DEF;C.Rate(2) +12%;Accuracy(2) +40ACC;Speed(2) +12%SPD;Resistance(2) +40;C.Damage(2) +20%;Lifesteal(4);Destroy(4);Retaliation(4);Fury(4);Curing(4);Reflex(4);Cursed(4);Toxic(4);Frost(4);Daze(4);Immunity(4);Avenging(4);Shield(4);Stalwart(4);Frenzy(4);Regeneration(4);Stun(4);Relentless(4);Savage(4);Taunting(4);Cruel(2) +15%ATK;Immortal(2) +15%HP;D.Life(2) +15%HP;D.Offense(2) +15%ATK;D.C.Rate(2) +12%;D.Speed(2)+12%SPD;Swift parry(4)+18%SPD+30%C.Dmg;Deflection(4)+20HP%+20DEF%;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;SPD;C.RATE;C.DMG;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;SPD;C.RATE;C.DMG;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;SPD;C.RATE;C.DMG;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;SPD;C.RATE;C.DMG;Choose a set;Life(2) +15%HP;Offense(2) +15%ATK;Defense(2) +15%DEF;C.Rate(2) +12%;Accuracy(2) +40ACC;Speed(2) +12%SPD;Resistance(2) +40;C.Damage(2) +20%;Lifesteal(4);Destroy(4);Retaliation(4);Fury(4);Curing(4);Reflex(4);Cursed(4);Toxic(4);Frost(4);Daze(4);Immunity(4);Avenging(4);Shield(4);Stalwart(4);Frenzy(4);Regeneration(4);Stun(4);Relentless(4);Savage(4);Taunting(4);Cruel(2) +15%ATK;Immortal(2) +15%HP;D.Life(2) +15%HP;D.Offense(2) +15%ATK;D.C.Rate(2) +12%;D.Speed(2)+12%SPD;Swift parry(4)+18%SPD+30%C.Dmg;Deflection(4)+20HP%+20DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ACC;C.RATE;C.DMG;RESIST;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ACC;C.RATE;C.DMG;RESIST;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ACC;C.RATE;C.DMG;RESIST;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ACC;C.RATE;C.DMG;RESIST;ATK+;HP+;DEF+;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;C.DMG;ATK+;HP+;DEF+;C.DMG;RESIST;ACC;ATK+;HP+;DEF+;C.DMG;RESIST;ACC;ATK+;HP+;DEF+;C.DMG;RESIST;ACC;ATK+;HP+;DEF+;C.DMG;RESIST;ACC;ATK+;HP+;DEF+;RESIST;ACC;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%".split(
    ";"
  ),
  ruArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;Выберите сет;Жизнь(2) +15%Здр;Атака(2) +15%Атк;Защита(2) +15%Зщт;Крит.Шанс(2) +12%;Меткость(2) +40Метк;Скорость(2) +12%Скр;Сопротивление(2) +40;Крит.Урон(2) +20%;Кража Жизни(4);Гибель(4);Месть(4);Ярость(4);Исцеление(4);Реакция(4);Проклятие(4);Отрава(4);Мороз(4);Ступор(4);Иммунитет(4);Возмездие(4);Щит(4);Доблесть(4);Бешенство(4);Регенерация(4);Оглушение(4);Свирепость(4);Жестокость(4);Насмешка(4);Беспощадность(2) +15%Атк;Бессмертие(2) +15%Здр;Небесная Жизнь(2) +15%Здр;Небесная атака(2) +15%Атк;Небесный крит.шанс(2) +12%;Небесная скорость(2)+12%Скр;Парирование(4)+18%Скр+30%Крит.ур;Отражение(4)+20Здр%+20Зщт%;АТК+;ЗДР+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;АТК%;ЗДР%;ЗДР+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;АТК%;ЗДР%;ЗДР+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;АТК%;ЗДР%;ЗДР+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;АТК%;ЗДР%;Выберите сет;Жизнь(2) +15%Здр;Атака(2) +15%Атк;Защита(2) +15%Зщт;Крит.Шанс(2) +12%;Меткость(2) +40Метк;Скорость(2) +12%Скр;Сопротивление(2) +40;Крит.Урон(2) +20%;Кража Жизни(4);Гибель(4);Месть(4);Ярость(4);Исцеление(4);Реакция(4);Проклятие(4);Отрава(4);Мороз(4);Ступор(4);Иммунитет(4);Возмездие(4);Щит(4);Доблесть(4);Бешенство(4);Регенерация(4);Оглушение(4);Свирепость(4);Жестокость(4);Насмешка(4);Беспощадность(2) +15%Атк;Бессмертие(2) +15%Здр;Небесная Жизнь(2) +15%Здр;Небесная атака(2) +15%Атк;Небесный крит.шанс(2) +12%;Небесная скорость(2)+12%Скр;Парирование(4)+18%Скр+30%Крит.ур;Отражение(4)+20Здр%+20Зщт%;ЗДР+;АТК+;ЗЩТ+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗЩТ+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗЩТ+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗЩТ+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;АТК%;ЗДР%;ЗЩТ%;Выберите сет;Жизнь(2) +15%Здр;Атака(2) +15%Атк;Защита(2) +15%Зщт;Крит.Шанс(2) +12%;Меткость(2) +40Метк;Скорость(2) +12%Скр;Сопротивление(2) +40;Крит.Урон(2) +20%;Кража Жизни(4);Гибель(4);Месть(4);Ярость(4);Исцеление(4);Реакция(4);Проклятие(4);Отрава(4);Мороз(4);Ступор(4);Иммунитет(4);Возмездие(4);Щит(4);Доблесть(4);Бешенство(4);Регенерация(4);Оглушение(4);Свирепость(4);Жестокость(4);Насмешка(4);Беспощадность(2) +15%Атк;Бессмертие(2) +15%Здр;Небесная Жизнь(2) +15%Здр;Небесная атака(2) +15%Атк;Небесный крит.шанс(2) +12%;Небесная скорость(2)+12%Скр;Парирование(4)+18%Скр+30%Крит.ур;Отражение(4)+20Здр%+20Зщт%;ЗЩТ+;ЗДР+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;ЗДР%;ЗЩТ%;ЗДР+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;ЗДР%;ЗЩТ%;ЗДР+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;ЗДР%;ЗЩТ%;ЗДР+;СКР;К.ШАНС;К.УРОН;СОПР;МЕТК;ЗДР%;ЗЩТ%;БОЛЬШОЙ ЗАЛ;ЗДР;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;АТК;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ЗЩТ;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;К.УР;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;СОПР;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;МЕТК;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;АРЕНА;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;ТАЛАНТЫ;СКИЛ;АТК 75;К.Ш 5%;ЗЩТ 75;СОПР 10;СКИЛ;ЗЩТ 75;СОПР 10;М.ЗДР 810;МЕТК 10;СКИЛ;К.УРОН 10%;СКИЛ;СЕТ +15%;СКИЛ;К.УРОН 20%;ЗЩТ 200;СОПР 50;М.ЗДР 3000;МЕТК 50;ЗДР-;0; АТК-;0;ЗЩТ-;0;СКР-;0;К.Ш-;0%;К.У-;0%;СОПР-;0;МЕТК-;0;Выберите сет;Жизнь(2) +15%Здр;Атака(2) +15%Атк;Защита(2) +15%Зщт;Крит.Шанс(2) +12%;Меткость(2) +40Метк;Скорость(2) +12%Скр;Сопротивление(2) +40;Крит.Урон(2) +20%;Кража Жизни(4);Гибель(4);Месть(4);Ярость(4);Исцеление(4);Реакция(4);Проклятие(4);Отрава(4);Мороз(4);Ступор(4);Иммунитет(4);Возмездие(4);Щит(4);Доблесть(4);Бешенство(4);Регенерация(4);Оглушение(4);Свирепость(4);Жестокость(4);Насмешка(4);Беспощадность(2) +15%Атк;Бессмертие(2) +15%Здр;Небесная Жизнь(2) +15%Здр;Небесная атака(2) +15%Атк;Небесный крит.шанс(2) +12%;Небесная скорость(2)+12%Скр;Парирование(4)+18%Скр+30%Крит.ур;Отражение(4)+20Здр%+20Зщт%;АТК+;ЗДР+;ЗЩТ+;К.ШАНС;К.УРОН;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;К.ШАНС;К.УРОН;АТК%;ЗДР%;ЗЩТ%;СКР;СОПР;МЕТК;АТК+;ЗДР+;ЗЩТ+;К.ШАНС;К.УРОН;АТК%;ЗДР%;ЗЩТ%;СКР;СОПР;МЕТК;АТК+;ЗДР+;ЗЩТ+;К.ШАНС;К.УРОН;АТК%;ЗДР%;ЗЩТ%;СКР;СОПР;МЕТК;АТК+;ЗДР+;ЗЩТ+;К.ШАНС;К.УРОН;АТК%;ЗДР%;ЗЩТ%;СКР;СОПР;МЕТК;Выберите сет;Жизнь(2) +15%Здр;Атака(2) +15%Атк;Защита(2) +15%Зщт;Крит.Шанс(2) +12%;Меткость(2) +40Метк;Скорость(2) +12%Скр;Сопротивление(2) +40;Крит.Урон(2) +20%;Кража Жизни(4);Гибель(4);Месть(4);Ярость(4);Исцеление(4);Реакция(4);Проклятие(4);Отрава(4);Мороз(4);Ступор(4);Иммунитет(4);Возмездие(4);Щит(4);Доблесть(4);Бешенство(4);Регенерация(4);Оглушение(4);Свирепость(4);Жестокость(4);Насмешка(4);Беспощадность(2) +15%Атк;Бессмертие(2) +15%Здр;Небесная Жизнь(2) +15%Здр;Небесная атака(2) +15%Атк;Небесный крит.шанс(2) +12%;Небесная скорость(2)+12%Скр;Парирование(4)+18%Скр+30%Крит.ур;Отражение(4)+20Здр%+20Зщт%;АТК+;ЗДР+;ЗЩТ+;СОПР;МЕТК;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;СОПР;МЕТК;АТК%;ЗДР%;ЗЩТ%;СКР;К.ШАНС;К.УРОН;АТК+;ЗДР+;ЗЩТ+;СОПР;МЕТК;АТК%;ЗДР%;ЗЩТ%;СКР;К.ШАНС;К.УРОН;АТК+;ЗДР+;ЗЩТ+;СОПР;МЕТК;АТК%;ЗДР%;ЗЩТ%;СКР;К.ШАНС;К.УРОН;АТК+;ЗДР+;ЗЩТ+;СОПР;МЕТК;АТК%;ЗДР%;ЗЩТ%;СКР;К.ШАНС;К.УРОН;Выберите сет;Жизнь(2) +15%Здр;Атака(2) +15%Атк;Защита(2) +15%Зщт;Крит.Шанс(2) +12%;Меткость(2) +40Метк;Скорость(2) +12%Скр;Сопротивление(2) +40;Крит.Урон(2) +20%;Кража Жизни(4);Гибель(4);Месть(4);Ярость(4);Исцеление(4);Реакция(4);Проклятие(4);Отрава(4);Мороз(4);Ступор(4);Иммунитет(4);Возмездие(4);Щит(4);Доблесть(4);Бешенство(4);Регенерация(4);Оглушение(4);Свирепость(4);Жестокость(4);Насмешка(4);Беспощадность(2) +15%Атк;Бессмертие(2) +15%Здр;Небесная Жизнь(2) +15%Здр;Небесная атака(2) +15%Атк;Небесный крит.шанс(2) +12%;Небесная скорость(2)+12%Скр;Парирование(4)+18%Скр+30%Крит.ур;Отражение(4)+20Здр%+20Зщт%;АТК+;ЗДР+;ЗЩТ+;СКР;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;СКР;АТК%;ЗДР%;ЗЩТ%;МЕТК;К.ШАНС;К.УРОН;СОПР;АТК+;ЗДР+;ЗЩТ+;СКР;АТК%;ЗДР%;ЗЩТ%;МЕТК;К.ШАНС;К.УРОН;СОПР;АТК+;ЗДР+;ЗЩТ+;СКР;АТК%;ЗДР%;ЗЩТ%;МЕТК;К.ШАНС;К.УРОН;СОПР;АТК+;ЗДР+;ЗЩТ+;СКР;АТК%;ЗДР%;ЗЩТ%;МЕТК;К.ШАНС;К.УРОН;СОПР;АТК+;ЗДР+;ЗЩТ+;АТК+;ЗДР+;ЗЩТ+;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;К.УРОН;АТК+;ЗДР+;ЗЩТ+;К.УРОН;СОПР;МЕТК;АТК+;ЗДР+;ЗЩТ+;К.УРОН;СОПР;МЕТК;АТК+;ЗДР+;ЗЩТ+;К.УРОН;СОПР;МЕТК;АТК+;ЗДР+;ЗЩТ+;К.УРОН;СОПР;МЕТК;АТК+;ЗДР+;ЗЩТ+;СОПР;МЕТК;АТК+;ЗДР+;ЗЩТ+;СКР;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;СКР;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;СКР;АТК%;ЗДР%;ЗЩТ%;АТК+;ЗДР+;ЗЩТ+;СКР;АТК%;ЗДР%;ЗЩТ%".split(
    ";"
  ),
  frArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;Choisissez un ensemble;Vie (2) + 15% de PV;Attaque(2)+15%d'ATQ;Défense(2) +15% de DÉF;TAUX C.(2) +12%;Précision(2) +40 de PRÉ;Vitesse (2) +12% de VIT;Résistance(2) +40;Dégâts C.(2) +20%;Vol de vie(4);Déstruction(4);Représailles (4);Furie(4);Guérison(4);Réflexe (4);Maudit (4);Toxique (4);Gel(4);Hébétement(4);Immunité (4);Vengeur(4);Bouclier (4);Vaillant(4);Frénésie (4);Régénération  (4);Étourdissement  (4);Implacable (4);Sauvage (4);Raillerie (4);Cruel(2) +15% d'ATQ;Immortel(2) +15% de PV;Vie Divine(2) + 15% qe  PV;Attaque Divine(2) +15% d'ATQ;D.TAUX C.(2) +12%;D.Vitesse (2)+12% de VIT;Parade  Vivace(4)+18% de VIT+30% de DÉG C.;DÉFlection(4)+20 de PV%+20 de DÉF%;ATQ+;PV+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;ATQ%;PV%;PV+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;ATQ%;PV%;PV+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;ATQ%;PV%;PV+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;ATQ%;PV%;Choisissez un ensemble;Vie (2) + 15% de PV;Attaque(2)+15%d'ATQ;Défense(2) +15% de DÉF;TAUX C.(2) +12%;Précision(2) +40 de PRÉ;Vitesse (2) +12% de VIT;Résistance(2) +40;Dégâts C.(2) +20%;Vol de vie(4);Déstruction(4);Représailles (4);Furie(4);Guérison(4);Réflexe (4);Maudit (4);Toxique (4);Gel(4);Hébétement(4);Immunité (4);Vengeur(4);Bouclier (4);Vaillant(4);Frénésie (4);Régénération  (4);Étourdissement  (4);Implacable (4);Sauvage (4);Raillerie (4);Cruel(2) +15% d'ATQ;Immortel(2) +15% de PV;Vie Divine(2) + 15% qe  PV;Attaque Divine(2) +15% d'ATQ;D.TAUX C.(2) +12%;D.Vitesse (2)+12% de VIT;Parade  Vivace(4)+18% de VIT+30% de DÉG C.;DÉFlection(4)+20 de PV%+20 de DÉF%;PV+;ATQ+;DÉF+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;ATQ%;PV%;DÉF%;ATQ+;DÉF+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;ATQ%;PV%;DÉF%;ATQ+;DÉF+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;ATQ%;PV%;DÉF%;ATQ+;DÉF+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;ATQ%;PV%;DÉF%;Choisissez un ensemble;Vie (2) + 15% de PV;Attaque(2)+15%d'ATQ;Défense(2) +15% de DÉF;TAUX C.(2) +12%;Précision(2) +40 de PRÉ;Vitesse (2) +12% de VIT;Résistance(2) +40;Dégâts C.(2) +20%;Vol de vie(4);Déstruction(4);Représailles (4);Furie(4);Guérison(4);Réflexe (4);Maudit (4);Toxique (4);Gel(4);Hébétement(4);Immunité (4);Vengeur(4);Bouclier (4);Vaillant(4);Frénésie (4);Régénération  (4);Étourdissement  (4);Implacable (4);Sauvage (4);Raillerie (4);Cruel(2) +15% d'ATQ;Immortel(2) +15% de PV;Vie Divine(2) + 15% qe  PV;Attaque Divine(2) +15% d'ATQ;D.TAUX C.(2) +12%;D.Vitesse (2)+12% de VIT;Parade  Vivace(4)+18% de VIT+30% de DÉG C.;DÉFlection(4)+20 de PV%+20 de DÉF%;DÉF+;PV+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;PV%;DÉF%;PV+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;PV%;DÉF%;PV+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;PV%;DÉF%;PV+;VIT;TAUX C.;DÉG C.;RÉSIST;PRÉ;PV%;DÉF%;Grand Hall;PV;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ATQ;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;DÉF;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;D.C.;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;RÉS;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;PRÉ;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;Aréne;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;Maîtrises;SKILL;ATQ 75;T.C. 5%;DÉF 75;RÉS 10;SKILL;DÉF 75;RÉS 10;M.PV 810;PRÉ 10;SKILL;DÉG C. 10%;SKILL;SET +15%;SKILL;DÉG C. 20%;DÉF 200;RÉSIST 50;M.PV 3000;PRÉ 50;PV-;0; ATQ-;0;DÉF-;0;VIT-;0;T.C.-;0%;D.C.-;0%;RÉS-;0;PRÉ-;0;Choisissez un ensemble;Vie (2) + 15% de PV;Attaque(2)+15%d'ATQ;Défense(2) +15% de DÉF;TAUX C.(2) +12%;Précision(2) +40 de PRÉ;Vitesse (2) +12% de VIT;Résistance(2) +40;Dégâts C.(2) +20%;Vol de vie(4);Déstruction(4);Représailles (4);Furie(4);Guérison(4);Réflexe (4);Maudit (4);Toxique (4);Gel(4);Hébétement(4);Immunité (4);Vengeur(4);Bouclier (4);Vaillant(4);Frénésie (4);Régénération  (4);Étourdissement  (4);Implacable (4);Sauvage (4);Raillerie (4);Cruel(2) +15% d'ATQ;Immortel(2) +15% de PV;Vie Divine(2) + 15% qe  PV;Attaque Divine(2) +15% d'ATQ;D.TAUX C.(2) +12%;D.Vitesse (2)+12% de VIT;Parade  Vivace(4)+18% de VIT+30% de DÉG C.;DÉFlection(4)+20 de PV%+20 de DÉF%;ATQ+;PV+;DÉF+;TAUX C.;DÉG C.;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;TAUX C.;DÉG C.;ATQ%;PV%;DÉF%;VIT;RÉSIST;PRÉ;ATQ+;PV+;DÉF+;TAUX C.;DÉG C.;ATQ%;PV%;DÉF%;VIT;RÉSIST;PRÉ;ATQ+;PV+;DÉF+;TAUX C.;DÉG C.;ATQ%;PV%;DÉF%;VIT;RÉSIST;PRÉ;ATQ+;PV+;DÉF+;TAUX C.;DÉG C.;ATQ%;PV%;DÉF%;VIT;RÉSIST;PRÉ;Choisissez un ensemble;Vie (2) + 15% de PV;Attaque(2)+15%d'ATQ;Défense(2) +15% de DÉF;TAUX C.(2) +12%;Précision(2) +40 de PRÉ;Vitesse (2) +12% de VIT;Résistance(2) +40;Dégâts C.(2) +20%;Vol de vie(4);Déstruction(4);Représailles (4);Furie(4);Guérison(4);Réflexe (4);Maudit (4);Toxique (4);Gel(4);Hébétement(4);Immunité (4);Vengeur(4);Bouclier (4);Vaillant(4);Frénésie (4);Régénération  (4);Étourdissement  (4);Implacable (4);Sauvage (4);Raillerie (4);Cruel(2) +15% d'ATQ;Immortel(2) +15% de PV;Vie Divine(2) + 15% qe  PV;Attaque Divine(2) +15% d'ATQ;D.TAUX C.(2) +12%;D.Vitesse (2)+12% de VIT;Parade  Vivace(4)+18% de VIT+30% de DÉG C.;DÉFlection(4)+20 de PV%+20 de DÉF%;ATQ+;PV+;DÉF+;RÉSIST;PRÉ;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;RÉSIST;PRÉ;ATQ%;PV%;DÉF%;VIT;TAUX C.;DÉG C.;ATQ+;PV+;DÉF+;RÉSIST;PRÉ;ATQ%;PV%;DÉF%;VIT;TAUX C.;DÉG C.;ATQ+;PV+;DÉF+;RÉSIST;PRÉ;ATQ%;PV%;DÉF%;VIT;TAUX C.;DÉG C.;ATQ+;PV+;DÉF+;RÉSIST;PRÉ;ATQ%;PV%;DÉF%;VIT;TAUX C.;DÉG C.;Choisissez un ensemble;Vie (2) + 15% de PV;Attaque(2)+15%d'ATQ;Défense(2) +15% de DÉF;TAUX C.(2) +12%;Précision(2) +40 de PRÉ;Vitesse (2) +12% de VIT;Résistance(2) +40;Dégâts C.(2) +20%;Vol de vie(4);Déstruction(4);Représailles (4);Furie(4);Guérison(4);Réflexe (4);Maudit (4);Toxique (4);Gel(4);Hébétement(4);Immunité (4);Vengeur(4);Bouclier (4);Vaillant(4);Frénésie (4);Régénération  (4);Étourdissement  (4);Implacable (4);Sauvage (4);Raillerie (4);Cruel(2) +15% d'ATQ;Immortel(2) +15% de PV;Vie Divine(2) + 15% qe  PV;Attaque Divine(2) +15% d'ATQ;D.TAUX C.(2) +12%;D.Vitesse (2)+12% de VIT;Parade  Vivace(4)+18% de VIT+30% de DÉG C.;DÉFlection(4)+20 de PV%+20 de DÉF%;ATQ+;PV+;DÉF+;VIT;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;VIT;ATQ%;PV%;DÉF%;PRÉ;TAUX C.;DÉG C.;RÉSIST;ATQ+;PV+;DÉF+;VIT;ATQ%;PV%;DÉF%;PRÉ;TAUX C.;DÉG C.;RÉSIST;ATQ+;PV+;DÉF+;VIT;ATQ%;PV%;DÉF%;PRÉ;TAUX C.;DÉG C.;RÉSIST;ATQ+;PV+;DÉF+;VIT;ATQ%;PV%;DÉF%;PRÉ;TAUX C.;DÉG C.;RÉSIST;ATQ+;PV+;DÉF+;ATQ+;PV+;DÉF+;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;DÉG C.;ATQ+;PV+;DÉF+;DÉG C.;RÉSIST;PRÉ;ATQ+;PV+;DÉF+;DÉG C.;RÉSIST;PRÉ;ATQ+;PV+;DÉF+;DÉG C.;RÉSIST;PRÉ;ATQ+;PV+;DÉF+;DÉG C.;RÉSIST;PRÉ;ATQ+;PV+;DÉF+;RÉSIST;PRÉ;ATQ+;PV+;DÉF+;VIT;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;VIT;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;VIT;ATQ%;PV%;DÉF%;ATQ+;PV+;DÉF+;VIT;ATQ%;PV%;DÉF%".split(
    ";"
  ),
  duArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;Wählen Sie einen Satz;Leben(2) +15%LP;Offensive(2) +15%ANG;Defensive(2) +15%DEF;Krit-Quote(2) +12%;Genauigkeit(2) +40GEN;Geschwindigkeit(2) +12%GSW;Widerstand(2) +40;Krit-Schaden(2) +20%;Lebensraub(4);Vernichten(4);Vergeltung;Wut(4);Heilend(4);Reflex(4);Verflucht(4);Giftig(4);Frost(4);Betäuben(4);Immunität(4);Rache(4);Schild(4);Unerschütterlich(4);Wahnsinn(4);Regeneration(4);Lähmung(4);Unnachgiebig(4);Wild(4);Verhöhnen(4);Grausam(2) +15%ANG;Unsterblich(2) +15%LP;G.Leben(2) +15%LP;G.Offensive(2) +15%ANG;G.Krit-Quote(2) +12%;G.Geschwindigkeit(2)+12%GSW;Flottes Parieren(4)+18%GSW+30%C.Dmg;Umlenkung(4)+20LP%+20DEF%;ANG+;LP+;GSW;K.-QUCTE;C.-DMG;WID;GEN;ANG%;LP%;LP+;GSW;K.-QUCTE;C.-DMG;WID;GEN;ANG%;LP%;LP+;GSW;K.-QUCTE;C.-DMG;WID;GEN;ANG%;LP%;LP+;GSW;K.-QUCTE;C.-DMG;WID;GEN;ANG%;LP%;Wählen Sie einen Satz;Leben(2) +15%LP;Offensive(2) +15%ANG;Defensive(2) +15%DEF;Krit-Quote(2) +12%;Genauigkeit(2) +40GEN;Geschwindigkeit(2) +12%GSW;Widerstand(2) +40;Krit-Schaden(2) +20%;Lebensraub(4);Vernichten(4);Vergeltung;Wut(4);Heilend(4);Reflex(4);Verflucht(4);Giftig(4);Frost(4);Betäuben(4);Immunität(4);Rache(4);Schild(4);Unerschütterlich(4);Wahnsinn(4);Regeneration(4);Lähmung(4);Unnachgiebig(4);Wild(4);Verhöhnen(4);Grausam(2) +15%ANG;Unsterblich(2) +15%LP;G.Leben(2) +15%LP;G.Offensive(2) +15%ANG;G.Krit-Quote(2) +12%;G.Geschwindigkeit(2)+12%GSW;Flottes Parieren(4)+18%GSW+30%C.Dmg;Umlenkung(4)+20LP%+20DEF%;LP+;ANG+;DEF+;GSW;K.-QUCTE;C.-DMG;WID;GEN;ANG%;LP%;DEF%;ANG+;DEF+;GSW;K.-QUCTE;C.-DMG;WID;GEN;ANG%;LP%;DEF%;ANG+;DEF+;GSW;K.-QUCTE;C.-DMG;WID;GEN;ANG%;LP%;DEF%;ANG+;DEF+;GSW;K.-QUCTE;C.-DMG;WID;GEN;ANG%;LP%;DEF%;Wählen Sie einen Satz;Leben(2) +15%LP;Offensive(2) +15%ANG;Defensive(2) +15%DEF;Krit-Quote(2) +12%;Genauigkeit(2) +40GEN;Geschwindigkeit(2) +12%GSW;Widerstand(2) +40;Krit-Schaden(2) +20%;Lebensraub(4);Vernichten(4);Vergeltung;Wut(4);Heilend(4);Reflex(4);Verflucht(4);Giftig(4);Frost(4);Betäuben(4);Immunität(4);Rache(4);Schild(4);Unerschütterlich(4);Wahnsinn(4);Regeneration(4);Lähmung(4);Unnachgiebig(4);Wild(4);Verhöhnen(4);Grausam(2) +15%ANG;Unsterblich(2) +15%LP;G.Leben(2) +15%LP;G.Offensive(2) +15%ANG;G.Krit-Quote(2) +12%;G.Geschwindigkeit(2)+12%GSW;Flottes Parieren(4)+18%GSW+30%C.Dmg;Umlenkung(4)+20LP%+20DEF%;DEF+;LP+;GSW;K.-QUCTE;C.-DMG;WID;GEN;LP%;DEF%;LP+;GSW;K.-QUCTE;C.-DMG;WID;GEN;LP%;DEF%;LP+;GSW;K.-QUCTE;C.-DMG;WID;GEN;LP%;DEF%;LP+;GSW;K.-QUCTE;C.-DMG;WID;GEN;LP%;DEF%;Großer Saal;LP;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ANG;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;DEF;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;C.-D;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;WID;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;GEN;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;Arena;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;Fertigkeiten;SKILL;ANG 75;K.Q. 5%;DEF 75;WID 10;SKILL;DEF 75;WID 10;M.LP 810;GEN 10;SKILL;C.-DMG 10%;SKILL;SET +15%;SKILL;C.-DMG 20%;DEF 200;WID 50;M.LP 3000;GEN 50;LP-;0; ANG-;0;DEF-;0;GSW-;0;K.-Q.-;0%;K.-D.-;0%;WID-;0;GEN-;0;Wählen Sie einen Satz;Leben(2) +15%LP;Offensive(2) +15%ANG;Defensive(2) +15%DEF;Krit-Quote(2) +12%;Genauigkeit(2) +40GEN;Geschwindigkeit(2) +12%GSW;Widerstand(2) +40;Krit-Schaden(2) +20%;Lebensraub(4);Vernichten(4);Vergeltung;Wut(4);Heilend(4);Reflex(4);Verflucht(4);Giftig(4);Frost(4);Betäuben(4);Immunität(4);Rache(4);Schild(4);Unerschütterlich(4);Wahnsinn(4);Regeneration(4);Lähmung(4);Unnachgiebig(4);Wild(4);Verhöhnen(4);Grausam(2) +15%ANG;Unsterblich(2) +15%LP;G.Leben(2) +15%LP;G.Offensive(2) +15%ANG;G.Krit-Quote(2) +12%;G.Geschwindigkeit(2)+12%GSW;Flottes Parieren(4)+18%GSW+30%C.Dmg;Umlenkung(4)+20LP%+20DEF%;ANG+;LP+;DEF+;K.-QUCTE;C.-DMG;ANG%;LP%;DEF%;ANG+;LP+;DEF+;K.-QUCTE;C.-DMG;ANG%;LP%;DEF%;GSW;WID;GEN;ANG+;LP+;DEF+;K.-QUCTE;C.-DMG;ANG%;LP%;DEF%;GSW;WID;GEN;ANG+;LP+;DEF+;K.-QUCTE;C.-DMG;ANG%;LP%;DEF%;GSW;WID;GEN;ANG+;LP+;DEF+;K.-QUCTE;C.-DMG;ANG%;LP%;DEF%;GSW;WID;GEN;Wählen Sie einen Satz;Leben(2) +15%LP;Offensive(2) +15%ANG;Defensive(2) +15%DEF;Krit-Quote(2) +12%;Genauigkeit(2) +40GEN;Geschwindigkeit(2) +12%GSW;Widerstand(2) +40;Krit-Schaden(2) +20%;Lebensraub(4);Vernichten(4);Vergeltung;Wut(4);Heilend(4);Reflex(4);Verflucht(4);Giftig(4);Frost(4);Betäuben(4);Immunität(4);Rache(4);Schild(4);Unerschütterlich(4);Wahnsinn(4);Regeneration(4);Lähmung(4);Unnachgiebig(4);Wild(4);Verhöhnen(4);Grausam(2) +15%ANG;Unsterblich(2) +15%LP;G.Leben(2) +15%LP;G.Offensive(2) +15%ANG;G.Krit-Quote(2) +12%;G.Geschwindigkeit(2)+12%GSW;Flottes Parieren(4)+18%GSW+30%C.Dmg;Umlenkung(4)+20LP%+20DEF%;ANG+;LP+;DEF+;WID;GEN;ANG%;LP%;DEF%;ANG+;LP+;DEF+;WID;GEN;ANG%;LP%;DEF%;GSW;K.-QUCTE;C.-DMG;ANG+;LP+;DEF+;WID;GEN;ANG%;LP%;DEF%;GSW;K.-QUCTE;C.-DMG;ANG+;LP+;DEF+;WID;GEN;ANG%;LP%;DEF%;GSW;K.-QUCTE;C.-DMG;ANG+;LP+;DEF+;WID;GEN;ANG%;LP%;DEF%;GSW;K.-QUCTE;C.-DMG;Wählen Sie einen Satz;Leben(2) +15%LP;Offensive(2) +15%ANG;Defensive(2) +15%DEF;Krit-Quote(2) +12%;Genauigkeit(2) +40GEN;Geschwindigkeit(2) +12%GSW;Widerstand(2) +40;Krit-Schaden(2) +20%;Lebensraub(4);Vernichten(4);Vergeltung;Wut(4);Heilend(4);Reflex(4);Verflucht(4);Giftig(4);Frost(4);Betäuben(4);Immunität(4);Rache(4);Schild(4);Unerschütterlich(4);Wahnsinn(4);Regeneration(4);Lähmung(4);Unnachgiebig(4);Wild(4);Verhöhnen(4);Grausam(2) +15%ANG;Unsterblich(2) +15%LP;G.Leben(2) +15%LP;G.Offensive(2) +15%ANG;G.Krit-Quote(2) +12%;G.Geschwindigkeit(2)+12%GSW;Flottes Parieren(4)+18%GSW+30%C.Dmg;Umlenkung(4)+20LP%+20DEF%;ANG+;LP+;DEF+;GSW;ANG%;LP%;DEF%;ANG+;LP+;DEF+;GSW;ANG%;LP%;DEF%;GEN;K.-QUCTE;C.-DMG;WID;ANG+;LP+;DEF+;GSW;ANG%;LP%;DEF%;GEN;K.-QUCTE;C.-DMG;WID;ANG+;LP+;DEF+;GSW;ANG%;LP%;DEF%;GEN;K.-QUCTE;C.-DMG;WID;ANG+;LP+;DEF+;GSW;ANG%;LP%;DEF%;GEN;K.-QUCTE;C.-DMG;WID;ANG+;LP+;DEF+;ANG+;LP+;DEF+;ANG%;LP%;DEF%;ANG+;LP+;DEF+;ANG%;LP%;DEF%;ANG+;LP+;DEF+;ANG%;LP%;DEF%;ANG+;LP+;DEF+;ANG%;LP%;DEF%;ANG+;LP+;DEF+;C.-DMG;ANG+;LP+;DEF+;C.-DMG;WID;GEN;ANG+;LP+;DEF+;C.-DMG;WID;GEN;ANG+;LP+;DEF+;C.-DMG;WID;GEN;ANG+;LP+;DEF+;C.-DMG;WID;GEN;ANG+;LP+;DEF+;WID;GEN;ANG+;LP+;DEF+;GSW;ANG%;LP%;DEF%;ANG+;LP+;DEF+;GSW;ANG%;LP%;DEF%;ANG+;LP+;DEF+;GSW;ANG%;LP%;DEF%;ANG+;LP+;DEF+;GSW;ANG%;LP%;DEF%".split(
    ";"
  ),
  itArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;Scegli un set;Vita(2) +15%HP;Attacco(2) +15%ATT;Difesa(2) +15%DIF;Tasso Decisività(2) +12%;Precisione(2) +40PREC;Velocità(2) +12%VEL;Resistenza(2) +40;Danno Decisivo(2) +20%;Rubavita(4);Distruzione(4);Rappresaglia(4);Furia(4);Cura(4);Riflesso(4);Maledetto(4);Tossico(4);Brina(4);Stupore(4);Immunità(4);Vendetta(4);Scudo(4);Sostenitore(4);Frenesia(4);Rigenerazione(4);Stordimento(4);Implacabile(4);Selvaggio(4);Derisione(4);Crudele(2) +15%ATT;Immortale(2) +15%HP;D.Vita(2) +15%HP;D.Attacco(2) +15%ATT;D.Tasso Decisività(2) +12%;D.Velocità(2)+12%VEL;Parata Repentina(4)+18%VEL+30%C.Dmg;Diversione(4)+20HP%+20DIF%;ATT+;HP+;VEL;TASSO D;DANNO D;RESIST;PREC;ATT%;HP%;HP+;VEL;TASSO D;DANNO D;RESIST;PREC;ATT%;HP%;HP+;VEL;TASSO D;DANNO D;RESIST;PREC;ATT%;HP%;HP+;VEL;TASSO D;DANNO D;RESIST;PREC;ATT%;HP%;Scegli un set;Vita(2) +15%HP;Attacco(2) +15%ATT;Difesa(2) +15%DIF;Tasso Decisività(2) +12%;Precisione(2) +40PREC;Velocità(2) +12%VEL;Resistenza(2) +40;Danno Decisivo(2) +20%;Rubavita(4);Distruzione(4);Rappresaglia(4);Furia(4);Cura(4);Riflesso(4);Maledetto(4);Tossico(4);Brina(4);Stupore(4);Immunità(4);Vendetta(4);Scudo(4);Sostenitore(4);Frenesia(4);Rigenerazione(4);Stordimento(4);Implacabile(4);Selvaggio(4);Derisione(4);Crudele(2) +15%ATT;Immortale(2) +15%HP;D.Vita(2) +15%HP;D.Attacco(2) +15%ATT;D.Tasso Decisività(2) +12%;D.Velocità(2)+12%VEL;Parata Repentina(4)+18%VEL+30%C.Dmg;Diversione(4)+20HP%+20DIF%;HP+;ATT+;DIF+;VEL;TASSO D;DANNO D;RESIST;PREC;ATT%;HP%;DIF%;ATT+;DIF+;VEL;TASSO D;DANNO D;RESIST;PREC;ATT%;HP%;DIF%;ATT+;DIF+;VEL;TASSO D;DANNO D;RESIST;PREC;ATT%;HP%;DIF%;ATT+;DIF+;VEL;TASSO D;DANNO D;RESIST;PREC;ATT%;HP%;DIF%;Scegli un set;Vita(2) +15%HP;Attacco(2) +15%ATT;Difesa(2) +15%DIF;Tasso Decisività(2) +12%;Precisione(2) +40PREC;Velocità(2) +12%VEL;Resistenza(2) +40;Danno Decisivo(2) +20%;Rubavita(4);Distruzione(4);Rappresaglia(4);Furia(4);Cura(4);Riflesso(4);Maledetto(4);Tossico(4);Brina(4);Stupore(4);Immunità(4);Vendetta(4);Scudo(4);Sostenitore(4);Frenesia(4);Rigenerazione(4);Stordimento(4);Implacabile(4);Selvaggio(4);Derisione(4);Crudele(2) +15%ATT;Immortale(2) +15%HP;D.Vita(2) +15%HP;D.Attacco(2) +15%ATT;D.Tasso Decisività(2) +12%;D.Velocità(2)+12%VEL;Parata Repentina(4)+18%VEL+30%C.Dmg;Diversione(4)+20HP%+20DIF%;DIF+;HP+;VEL;TASSO D;DANNO D;RESIST;PREC;HP%;DIF%;HP+;VEL;TASSO D;DANNO D;RESIST;PREC;HP%;DIF%;HP+;VEL;TASSO D;DANNO D;RESIST;PREC;HP%;DIF%;HP+;VEL;TASSO D;DANNO D;RESIST;PREC;HP%;DIF%;Sala Maggiore;HP;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ATT;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;DIF;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;D.D.;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;RES;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;PREC;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;Arena;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;Maestrie;SKILL;ATT 75;T.D. 5%;DIF 75;RES 10;SKILL;DIF 75;RES 10;MAX HP 810;PREC 10;SKILL;DANNO D 10%;SKILL;SET +15%;SKILL;DANNO D 20%;DIF 200;RESIST 50;MAX HP 3000;PREC 50;HP-;0; ATT-;0;DIF-;0;VEL-;0;T.D.-;0%;D.D.-;0%;RES-;0;PREC-;0;Scegli un set;Vita(2) +15%HP;Attacco(2) +15%ATT;Difesa(2) +15%DIF;Tasso Decisività(2) +12%;Precisione(2) +40PREC;Velocità(2) +12%VEL;Resistenza(2) +40;Danno Decisivo(2) +20%;Rubavita(4);Distruzione(4);Rappresaglia(4);Furia(4);Cura(4);Riflesso(4);Maledetto(4);Tossico(4);Brina(4);Stupore(4);Immunità(4);Vendetta(4);Scudo(4);Sostenitore(4);Frenesia(4);Rigenerazione(4);Stordimento(4);Implacabile(4);Selvaggio(4);Derisione(4);Crudele(2) +15%ATT;Immortale(2) +15%HP;D.Vita(2) +15%HP;D.Attacco(2) +15%ATT;D.Tasso Decisività(2) +12%;D.Velocità(2)+12%VEL;Parata Repentina(4)+18%VEL+30%C.Dmg;Diversione(4)+20HP%+20DIF%;ATT+;HP+;DIF+;TASSO D;DANNO D;ATT%;HP%;DIF%;ATT+;HP+;DIF+;TASSO D;DANNO D;ATT%;HP%;DIF%;VEL;RESIST;PREC;ATT+;HP+;DIF+;TASSO D;DANNO D;ATT%;HP%;DIF%;VEL;RESIST;PREC;ATT+;HP+;DIF+;TASSO D;DANNO D;ATT%;HP%;DIF%;VEL;RESIST;PREC;ATT+;HP+;DIF+;TASSO D;DANNO D;ATT%;HP%;DIF%;VEL;RESIST;PREC;Scegli un set;Vita(2) +15%HP;Attacco(2) +15%ATT;Difesa(2) +15%DIF;Tasso Decisività(2) +12%;Precisione(2) +40PREC;Velocità(2) +12%VEL;Resistenza(2) +40;Danno Decisivo(2) +20%;Rubavita(4);Distruzione(4);Rappresaglia(4);Furia(4);Cura(4);Riflesso(4);Maledetto(4);Tossico(4);Brina(4);Stupore(4);Immunità(4);Vendetta(4);Scudo(4);Sostenitore(4);Frenesia(4);Rigenerazione(4);Stordimento(4);Implacabile(4);Selvaggio(4);Derisione(4);Crudele(2) +15%ATT;Immortale(2) +15%HP;D.Vita(2) +15%HP;D.Attacco(2) +15%ATT;D.Tasso Decisività(2) +12%;D.Velocità(2)+12%VEL;Parata Repentina(4)+18%VEL+30%C.Dmg;Diversione(4)+20HP%+20DIF%;ATT+;HP+;DIF+;RESIST;PREC;ATT%;HP%;DIF%;ATT+;HP+;DIF+;RESIST;PREC;ATT%;HP%;DIF%;VEL;TASSO D;DANNO D;ATT+;HP+;DIF+;RESIST;PREC;ATT%;HP%;DIF%;VEL;TASSO D;DANNO D;ATT+;HP+;DIF+;RESIST;PREC;ATT%;HP%;DIF%;VEL;TASSO D;DANNO D;ATT+;HP+;DIF+;RESIST;PREC;ATT%;HP%;DIF%;VEL;TASSO D;DANNO D;Scegli un set;Vita(2) +15%HP;Attacco(2) +15%ATT;Difesa(2) +15%DIF;Tasso Decisività(2) +12%;Precisione(2) +40PREC;Velocità(2) +12%VEL;Resistenza(2) +40;Danno Decisivo(2) +20%;Rubavita(4);Distruzione(4);Rappresaglia(4);Furia(4);Cura(4);Riflesso(4);Maledetto(4);Tossico(4);Brina(4);Stupore(4);Immunità(4);Vendetta(4);Scudo(4);Sostenitore(4);Frenesia(4);Rigenerazione(4);Stordimento(4);Implacabile(4);Selvaggio(4);Derisione(4);Crudele(2) +15%ATT;Immortale(2) +15%HP;D.Vita(2) +15%HP;D.Attacco(2) +15%ATT;D.Tasso Decisività(2) +12%;D.Velocità(2)+12%VEL;Parata Repentina(4)+18%VEL+30%C.Dmg;Diversione(4)+20HP%+20DIF%;ATT+;HP+;DIF+;VEL;ATT%;HP%;DIF%;ATT+;HP+;DIF+;VEL;ATT%;HP%;DIF%;PREC;TASSO D;DANNO D;RESIST;ATT+;HP+;DIF+;VEL;ATT%;HP%;DIF%;PREC;TASSO D;DANNO D;RESIST;ATT+;HP+;DIF+;VEL;ATT%;HP%;DIF%;PREC;TASSO D;DANNO D;RESIST;ATT+;HP+;DIF+;VEL;ATT%;HP%;DIF%;PREC;TASSO D;DANNO D;RESIST;ATT+;HP+;DIF+;ATT+;HP+;DIF+;ATT%;HP%;DIF%;ATT+;HP+;DIF+;ATT%;HP%;DIF%;ATT+;HP+;DIF+;ATT%;HP%;DIF%;ATT+;HP+;DIF+;ATT%;HP%;DIF%;ATT+;HP+;DIF+;DANNO D;ATT+;HP+;DIF+;DANNO D;RESIST;PREC;ATT+;HP+;DIF+;DANNO D;RESIST;PREC;ATT+;HP+;DIF+;DANNO D;RESIST;PREC;ATT+;HP+;DIF+;DANNO D;RESIST;PREC;ATT+;HP+;DIF+;RESIST;PREC;ATT+;HP+;DIF+;VEL;ATT%;HP%;DIF%;ATT+;HP+;DIF+;VEL;ATT%;HP%;DIF%;ATT+;HP+;DIF+;VEL;ATT%;HP%;DIF%;ATT+;HP+;DIF+;VEL;ATT%;HP%;DIF%".split(
    ";"
  ),
  esArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;Choose a set;Vida (2) +15%HP;Ataque(2) +15%ATK;Defensa(2) +15%DEF;Probabilidad de Critico(2) +12%;Precisión(2) +40PUNT;Velocidad(2) +12%VEL;Resistencia(2) +40;Daño Critico(2) +20%;Robar vida(4);Destruir(4);Represalia(4);Furia(4);Curación(4);Reflejo(4);Maldito(4);Tóxico(4);Escarcha(4);Aturdir(4);Inmunidad(4);Vengador(4);Escudo(4);Incondicional(4);Frenesí(4);Regeneración(4);Aturdir(4);Incansable(4);Salvaje(4);Provocar(4);Cruel(2) +15%ATK;Inmortal(2) +15%HP;D.Vida (2) +15%HP;Atague Divino(2) +15%ATK;P. Critico Divina(2) +12%;Velocidad Divina(2)+12%VEL;Parada Rápida(4)+18%VEL+30%C.Dmg;Redirigir(4)+20HP%+20DEF%;ATK+;HP+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;ATK%;HP%;HP+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;ATK%;HP%;HP+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;ATK%;HP%;HP+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;ATK%;HP%;Choose a set;Vida (2) +15%HP;Ataque(2) +15%ATK;Defensa(2) +15%DEF;Probabilidad de Critico(2) +12%;Precisión(2) +40PUNT;Velocidad(2) +12%VEL;Resistencia(2) +40;Daño Critico(2) +20%;Robar vida(4);Destruir(4);Represalia(4);Furia(4);Curación(4);Reflejo(4);Maldito(4);Tóxico(4);Escarcha(4);Aturdir(4);Inmunidad(4);Vengador(4);Escudo(4);Incondicional(4);Frenesí(4);Regeneración(4);Aturdir(4);Incansable(4);Salvaje(4);Provocar(4);Cruel(2) +15%ATK;Inmortal(2) +15%HP;D.Vida (2) +15%HP;Atague Divino(2) +15%ATK;P. Critico Divina(2) +12%;Velocidad Divina(2)+12%VEL;Parada Rápida(4)+18%VEL+30%C.Dmg;Redirigir(4)+20HP%+20DEF%;HP+;ATK+;DEF+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;ATK%;HP%;DEF%;ATK+;DEF+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;ATK%;HP%;DEF%;ATK+;DEF+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;ATK%;HP%;DEF%;ATK+;DEF+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;ATK%;HP%;DEF%;Choose a set;Vida (2) +15%HP;Ataque(2) +15%ATK;Defensa(2) +15%DEF;Probabilidad de Critico(2) +12%;Precisión(2) +40PUNT;Velocidad(2) +12%VEL;Resistencia(2) +40;Daño Critico(2) +20%;Robar vida(4);Destruir(4);Represalia(4);Furia(4);Curación(4);Reflejo(4);Maldito(4);Tóxico(4);Escarcha(4);Aturdir(4);Inmunidad(4);Vengador(4);Escudo(4);Incondicional(4);Frenesí(4);Regeneración(4);Aturdir(4);Incansable(4);Salvaje(4);Provocar(4);Cruel(2) +15%ATK;Inmortal(2) +15%HP;D.Vida (2) +15%HP;Atague Divino(2) +15%ATK;P. Critico Divina(2) +12%;Velocidad Divina(2)+12%VEL;Parada Rápida(4)+18%VEL+30%C.Dmg;Redirigir(4)+20HP%+20DEF%;DEF+;HP+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;HP%;DEF%;HP+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;HP%;DEF%;HP+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;HP%;DEF%;HP+;VEL;P.CRIT;D.CRIT;RESIST;PUNT;HP%;DEF%;Gran Salón;HP;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ATK;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;DEF;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;D.C.;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;RES;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;PUNT;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;Arena;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;Maestrías;SKILL;ATK 75;P.C. 5%;DEF 75;RES 10;SKILL;DEF 75;RES 10;M.HP 810;PUNT 10;SKILL;D.CRIT 10%;SKILL;SET +15%;SKILL;D.CRIT 20%;DEF 200;RESIST 50;M.HP 3000;PUNT 50;HP-;0; ATK-;0;DEF-;0;VEL-;0;P.C.-;0%;D.C.-;0%;RES-;0;PUNT-;0;Choose a set;Vida (2) +15%HP;Ataque(2) +15%ATK;Defensa(2) +15%DEF;Probabilidad de Critico(2) +12%;Precisión(2) +40PUNT;Velocidad(2) +12%VEL;Resistencia(2) +40;Daño Critico(2) +20%;Robar vida(4);Destruir(4);Represalia(4);Furia(4);Curación(4);Reflejo(4);Maldito(4);Tóxico(4);Escarcha(4);Aturdir(4);Inmunidad(4);Vengador(4);Escudo(4);Incondicional(4);Frenesí(4);Regeneración(4);Aturdir(4);Incansable(4);Salvaje(4);Provocar(4);Cruel(2) +15%ATK;Inmortal(2) +15%HP;D.Vida (2) +15%HP;Atague Divino(2) +15%ATK;P. Critico Divina(2) +12%;Velocidad Divina(2)+12%VEL;Parada Rápida(4)+18%VEL+30%C.Dmg;Redirigir(4)+20HP%+20DEF%;ATK+;HP+;DEF+;P.CRIT;D.CRIT;ATK%;HP%;DEF%;ATK+;HP+;DEF+;P.CRIT;D.CRIT;ATK%;HP%;DEF%;VEL;RESIST;PUNT;ATK+;HP+;DEF+;P.CRIT;D.CRIT;ATK%;HP%;DEF%;VEL;RESIST;PUNT;ATK+;HP+;DEF+;P.CRIT;D.CRIT;ATK%;HP%;DEF%;VEL;RESIST;PUNT;ATK+;HP+;DEF+;P.CRIT;D.CRIT;ATK%;HP%;DEF%;VEL;RESIST;PUNT;Choose a set;Vida (2) +15%HP;Ataque(2) +15%ATK;Defensa(2) +15%DEF;Probabilidad de Critico(2) +12%;Precisión(2) +40PUNT;Velocidad(2) +12%VEL;Resistencia(2) +40;Daño Critico(2) +20%;Robar vida(4);Destruir(4);Represalia(4);Furia(4);Curación(4);Reflejo(4);Maldito(4);Tóxico(4);Escarcha(4);Aturdir(4);Inmunidad(4);Vengador(4);Escudo(4);Incondicional(4);Frenesí(4);Regeneración(4);Aturdir(4);Incansable(4);Salvaje(4);Provocar(4);Cruel(2) +15%ATK;Inmortal(2) +15%HP;D.Vida (2) +15%HP;Atague Divino(2) +15%ATK;P. Critico Divina(2) +12%;Velocidad Divina(2)+12%VEL;Parada Rápida(4)+18%VEL+30%C.Dmg;Redirigir(4)+20HP%+20DEF%;ATK+;HP+;DEF+;RESIST;PUNT;ATK%;HP%;DEF%;ATK+;HP+;DEF+;RESIST;PUNT;ATK%;HP%;DEF%;VEL;P.CRIT;D.CRIT;ATK+;HP+;DEF+;RESIST;PUNT;ATK%;HP%;DEF%;VEL;P.CRIT;D.CRIT;ATK+;HP+;DEF+;RESIST;PUNT;ATK%;HP%;DEF%;VEL;P.CRIT;D.CRIT;ATK+;HP+;DEF+;RESIST;PUNT;ATK%;HP%;DEF%;VEL;P.CRIT;D.CRIT;Choose a set;Vida (2) +15%HP;Ataque(2) +15%ATK;Defensa(2) +15%DEF;Probabilidad de Critico(2) +12%;Precisión(2) +40PUNT;Velocidad(2) +12%VEL;Resistencia(2) +40;Daño Critico(2) +20%;Robar vida(4);Destruir(4);Represalia(4);Furia(4);Curación(4);Reflejo(4);Maldito(4);Tóxico(4);Escarcha(4);Aturdir(4);Inmunidad(4);Vengador(4);Escudo(4);Incondicional(4);Frenesí(4);Regeneración(4);Aturdir(4);Incansable(4);Salvaje(4);Provocar(4);Cruel(2) +15%ATK;Inmortal(2) +15%HP;D.Vida (2) +15%HP;Atague Divino(2) +15%ATK;P. Critico Divina(2) +12%;Velocidad Divina(2)+12%VEL;Parada Rápida(4)+18%VEL+30%C.Dmg;Redirigir(4)+20HP%+20DEF%;ATK+;HP+;DEF+;VEL;ATK%;HP%;DEF%;ATK+;HP+;DEF+;VEL;ATK%;HP%;DEF%;PUNT;P.CRIT;D.CRIT;RESIST;ATK+;HP+;DEF+;VEL;ATK%;HP%;DEF%;PUNT;P.CRIT;D.CRIT;RESIST;ATK+;HP+;DEF+;VEL;ATK%;HP%;DEF%;PUNT;P.CRIT;D.CRIT;RESIST;ATK+;HP+;DEF+;VEL;ATK%;HP%;DEF%;PUNT;P.CRIT;D.CRIT;RESIST;ATK+;HP+;DEF+;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;D.CRIT;ATK+;HP+;DEF+;D.CRIT;RESIST;PUNT;ATK+;HP+;DEF+;D.CRIT;RESIST;PUNT;ATK+;HP+;DEF+;D.CRIT;RESIST;PUNT;ATK+;HP+;DEF+;D.CRIT;RESIST;PUNT;ATK+;HP+;DEF+;RESIST;PUNT;ATK+;HP+;DEF+;VEL;ATK%;HP%;DEF%;ATK+;HP+;DEF+;VEL;ATK%;HP%;DEF%;ATK+;HP+;DEF+;VEL;ATK%;HP%;DEF%;ATK+;HP+;DEF+;VEL;ATK%;HP%;DEF%".split(
    ";"
  ),
  ptArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;Escolha um conjunto;Vida(2) +15%Vida;Ataque(2) +15%ATQ;Defesa(2) +15%DEF;Taxa de Critico(2) +12%;Precisão(2) +40PRECI.;Velocidade(2) +12%VEL;Resistência(2) +40;Dano Critico(2) +20%;Suga-vida(4);Destruir(4);Retaliação(4);Fúria(4);Cura(4);Reflexo(4);Amaldiçoado(4);Tóxico(4);Gelo(4);Confundir(4);Imunidade(4);Vingança(4);Escudo(4);Robusto(4);Frenesi(4);Regeneração(4);Atordoar(4);Implacável(4);Selvagem(4);Provocação(4);Cruel(2) +15%ATQ;Imortal(2) +15%Vida;D.Vida(2) +15%Vida;Ataque Divino(2) +15%ATQ;Taxa de Critico Divino(2) +12%;Velocidade Divina(2)+12%VEL;Desvio Rápido(4)+18%VEL+30%C.Dmg;Deflexão(4)+20Vida%+20DEF%;ATQ+;Vida+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;ATQ%;Vida%;Vida+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;ATQ%;Vida%;Vida+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;ATQ%;Vida%;Vida+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;ATQ%;Vida%;Escolha um conjunto;Vida(2) +15%Vida;Ataque(2) +15%ATQ;Defesa(2) +15%DEF;Taxa de Critico(2) +12%;Precisão(2) +40PRECI.;Velocidade(2) +12%VEL;Resistência(2) +40;Dano Critico(2) +20%;Suga-vida(4);Destruir(4);Retaliação(4);Fúria(4);Cura(4);Reflexo(4);Amaldiçoado(4);Tóxico(4);Gelo(4);Confundir(4);Imunidade(4);Vingança(4);Escudo(4);Robusto(4);Frenesi(4);Regeneração(4);Atordoar(4);Implacável(4);Selvagem(4);Provocação(4);Cruel(2) +15%ATQ;Imortal(2) +15%Vida;D.Vida(2) +15%Vida;Ataque Divino(2) +15%ATQ;Taxa de Critico Divino(2) +12%;Velocidade Divina(2)+12%VEL;Desvio Rápido(4)+18%VEL+30%C.Dmg;Deflexão(4)+20Vida%+20DEF%;Vida+;ATQ+;DEF+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;ATQ%;Vida%;DEF%;ATQ+;DEF+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;ATQ%;Vida%;DEF%;ATQ+;DEF+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;ATQ%;Vida%;DEF%;ATQ+;DEF+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;ATQ%;Vida%;DEF%;Escolha um conjunto;Vida(2) +15%Vida;Ataque(2) +15%ATQ;Defesa(2) +15%DEF;Taxa de Critico(2) +12%;Precisão(2) +40PRECI.;Velocidade(2) +12%VEL;Resistência(2) +40;Dano Critico(2) +20%;Suga-vida(4);Destruir(4);Retaliação(4);Fúria(4);Cura(4);Reflexo(4);Amaldiçoado(4);Tóxico(4);Gelo(4);Confundir(4);Imunidade(4);Vingança(4);Escudo(4);Robusto(4);Frenesi(4);Regeneração(4);Atordoar(4);Implacável(4);Selvagem(4);Provocação(4);Cruel(2) +15%ATQ;Imortal(2) +15%Vida;D.Vida(2) +15%Vida;Ataque Divino(2) +15%ATQ;Taxa de Critico Divino(2) +12%;Velocidade Divina(2)+12%VEL;Desvio Rápido(4)+18%VEL+30%C.Dmg;Deflexão(4)+20Vida%+20DEF%;DEF+;Vida+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;Vida%;DEF%;Vida+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;Vida%;DEF%;Vida+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;Vida%;DEF%;Vida+;VEL;TAXA C.;DANO C.;RESIST;PRECI.;Vida%;DEF%;Grd. Salão;Vida;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ATQ;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;DEF;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;D.C.;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;RES;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;PRECI.;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;Arena;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;Maestrias;SKILL;ATQ 75;T.C.5%;DEF 75;RES 10;SKILL;DEF 75;RES 10;M.Vida 810;PRECI. 10;SKILL;DANO C. 10%;SKILL;SET +15%;SKILL;DANO C. 20%;DEF 200;RESIST 50;M.Vida 3000;PRECI. 50;Vida-;0; ATQ-;0;DEF-;0;VEL-;0;T.C.-;0%;D.C.-;0%;RES-;0;PRECI.-;0;Escolha um conjunto;Vida(2) +15%Vida;Ataque(2) +15%ATQ;Defesa(2) +15%DEF;Taxa de Critico(2) +12%;Precisão(2) +40PRECI.;Velocidade(2) +12%VEL;Resistência(2) +40;Dano Critico(2) +20%;Suga-vida(4);Destruir(4);Retaliação(4);Fúria(4);Cura(4);Reflexo(4);Amaldiçoado(4);Tóxico(4);Gelo(4);Confundir(4);Imunidade(4);Vingança(4);Escudo(4);Robusto(4);Frenesi(4);Regeneração(4);Atordoar(4);Implacável(4);Selvagem(4);Provocação(4);Cruel(2) +15%ATQ;Imortal(2) +15%Vida;D.Vida(2) +15%Vida;Ataque Divino(2) +15%ATQ;Taxa de Critico Divino(2) +12%;Velocidade Divina(2)+12%VEL;Desvio Rápido(4)+18%VEL+30%C.Dmg;Deflexão(4)+20Vida%+20DEF%;ATQ+;Vida+;DEF+;TAXA C.;DANO C.;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;TAXA C.;DANO C.;ATQ%;Vida%;DEF%;VEL;RESIST;PRECI.;ATQ+;Vida+;DEF+;TAXA C.;DANO C.;ATQ%;Vida%;DEF%;VEL;RESIST;PRECI.;ATQ+;Vida+;DEF+;TAXA C.;DANO C.;ATQ%;Vida%;DEF%;VEL;RESIST;PRECI.;ATQ+;Vida+;DEF+;TAXA C.;DANO C.;ATQ%;Vida%;DEF%;VEL;RESIST;PRECI.;Escolha um conjunto;Vida(2) +15%Vida;Ataque(2) +15%ATQ;Defesa(2) +15%DEF;Taxa de Critico(2) +12%;Precisão(2) +40PRECI.;Velocidade(2) +12%VEL;Resistência(2) +40;Dano Critico(2) +20%;Suga-vida(4);Destruir(4);Retaliação(4);Fúria(4);Cura(4);Reflexo(4);Amaldiçoado(4);Tóxico(4);Gelo(4);Confundir(4);Imunidade(4);Vingança(4);Escudo(4);Robusto(4);Frenesi(4);Regeneração(4);Atordoar(4);Implacável(4);Selvagem(4);Provocação(4);Cruel(2) +15%ATQ;Imortal(2) +15%Vida;D.Vida(2) +15%Vida;Ataque Divino(2) +15%ATQ;Taxa de Critico Divino(2) +12%;Velocidade Divina(2)+12%VEL;Desvio Rápido(4)+18%VEL+30%C.Dmg;Deflexão(4)+20Vida%+20DEF%;ATQ+;Vida+;DEF+;RESIST;PRECI.;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;RESIST;PRECI.;ATQ%;Vida%;DEF%;VEL;TAXA C.;DANO C.;ATQ+;Vida+;DEF+;RESIST;PRECI.;ATQ%;Vida%;DEF%;VEL;TAXA C.;DANO C.;ATQ+;Vida+;DEF+;RESIST;PRECI.;ATQ%;Vida%;DEF%;VEL;TAXA C.;DANO C.;ATQ+;Vida+;DEF+;RESIST;PRECI.;ATQ%;Vida%;DEF%;VEL;TAXA C.;DANO C.;Escolha um conjunto;Vida(2) +15%Vida;Ataque(2) +15%ATQ;Defesa(2) +15%DEF;Taxa de Critico(2) +12%;Precisão(2) +40PRECI.;Velocidade(2) +12%VEL;Resistência(2) +40;Dano Critico(2) +20%;Suga-vida(4);Destruir(4);Retaliação(4);Fúria(4);Cura(4);Reflexo(4);Amaldiçoado(4);Tóxico(4);Gelo(4);Confundir(4);Imunidade(4);Vingança(4);Escudo(4);Robusto(4);Frenesi(4);Regeneração(4);Atordoar(4);Implacável(4);Selvagem(4);Provocação(4);Cruel(2) +15%ATQ;Imortal(2) +15%Vida;D.Vida(2) +15%Vida;Ataque Divino(2) +15%ATQ;Taxa de Critico Divino(2) +12%;Velocidade Divina(2)+12%VEL;Desvio Rápido(4)+18%VEL+30%C.Dmg;Deflexão(4)+20Vida%+20DEF%;ATQ+;Vida+;DEF+;VEL;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;VEL;ATQ%;Vida%;DEF%;PRECI.;TAXA C.;DANO C.;RESIST;ATQ+;Vida+;DEF+;VEL;ATQ%;Vida%;DEF%;PRECI.;TAXA C.;DANO C.;RESIST;ATQ+;Vida+;DEF+;VEL;ATQ%;Vida%;DEF%;PRECI.;TAXA C.;DANO C.;RESIST;ATQ+;Vida+;DEF+;VEL;ATQ%;Vida%;DEF%;PRECI.;TAXA C.;DANO C.;RESIST;ATQ+;Vida+;DEF+;ATQ+;Vida+;DEF+;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;DANO C.;ATQ+;Vida+;DEF+;DANO C.;RESIST;PRECI.;ATQ+;Vida+;DEF+;DANO C.;RESIST;PRECI.;ATQ+;Vida+;DEF+;DANO C.;RESIST;PRECI.;ATQ+;Vida+;DEF+;DANO C.;RESIST;PRECI.;ATQ+;Vida+;DEF+;RESIST;PRECI.;ATQ+;Vida+;DEF+;VEL;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;VEL;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;VEL;ATQ%;Vida%;DEF%;ATQ+;Vida+;DEF+;VEL;ATQ%;Vida%;DEF%".split(
    ";"
  ),
  koArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;세트 정보;생명력(2)-+15%HP;공격력(2) +15%ATK;방어력(2) +15%DEF;크리티컬 확률(2) +12%;명중률(2) +40ACC;속도(2) +12%SPD;저항력(2) +40;크리 티 컬 데미지(2) +20%;흡혈(4);파괴(4);보복(4);분노(4);치료(4);순발력(4);저주(4);독(4);서리(4);혼돈(4);면역(4);복수(4);실드(4);철통(4);광란(4);신생(4);스턴(4);끈기(4);야수(4);조롱(4);잔혹(2) +15%ATK;불멸(2) +15%HP;신성한생명력(2)-+15%HP;신성한공격력(2) +15%ATK;신성한 크리 티 컬 확률(2) +12%;신성한 속도(2)+12%SPD;신속한 패링(4)+18%SPD+30%C.Dmg;굴절(4)+20HP%+20DEF%;ATK+;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;세트 정보;생명력(2)-+15%HP;공격력(2) +15%ATK;방어력(2) +15%DEF;크리티컬 확률(2) +12%;명중률(2) +40ACC;속도(2) +12%SPD;저항력(2) +40;크리 티 컬 데미지(2) +20%;흡혈(4);파괴(4);보복(4);분노(4);치료(4);순발력(4);저주(4);독(4);서리(4);혼돈(4);면역(4);복수(4);실드(4);철통(4);광란(4);신생(4);스턴(4);끈기(4);야수(4);조롱(4);잔혹(2) +15%ATK;불멸(2) +15%HP;신성한생명력(2)-+15%HP;신성한공격력(2) +15%ATK;신성한 크리 티 컬 확률(2) +12%;신성한 속도(2)+12%SPD;신속한 패링(4)+18%SPD+30%C.Dmg;굴절(4)+20HP%+20DEF%;HP+;ATK+;DEF+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;DEF%;ATK+;DEF+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;DEF%;ATK+;DEF+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;DEF%;ATK+;DEF+;SPD;C.RATE;C.DMG;RESIST;ACC;ATK%;HP%;DEF%;세트 정보;생명력(2)-+15%HP;공격력(2) +15%ATK;방어력(2) +15%DEF;크리티컬 확률(2) +12%;명중률(2) +40ACC;속도(2) +12%SPD;저항력(2) +40;크리 티 컬 데미지(2) +20%;흡혈(4);파괴(4);보복(4);분노(4);치료(4);순발력(4);저주(4);독(4);서리(4);혼돈(4);면역(4);복수(4);실드(4);철통(4);광란(4);신생(4);스턴(4);끈기(4);야수(4);조롱(4);잔혹(2) +15%ATK;불멸(2) +15%HP;신성한생명력(2)-+15%HP;신성한공격력(2) +15%ATK;신성한 크리 티 컬 확률(2) +12%;신성한 속도(2)+12%SPD;신속한 패링(4)+18%SPD+30%C.Dmg;굴절(4)+20HP%+20DEF%;DEF+;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;HP%;DEF%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;HP%;DEF%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;HP%;DEF%;HP+;SPD;C.RATE;C.DMG;RESIST;ACC;HP%;DEF%;연회장;HP;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ATK;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;DEF;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;C.DMG;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;RES;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;ACC;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;아레나;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;마스터리;SKILL;ATK 75;C.R 5%;DEF 75;RES 10;SKILL;DEF 75;RES 10;M.HP 810;ACC 10;SKILL;C.DMG 10%;SKILL;SET +15%;SKILL;C.DMG 20%;DEF 200;RESIST 50;M.HP 3000;ACC 50;HP-;0; ATK-;0;DEF-;0;SPD-;0;C.R-;0%;C.D-;0%;RES-;0;ACC-;0;세트 정보;생명력(2)-+15%HP;공격력(2) +15%ATK;방어력(2) +15%DEF;크리티컬 확률(2) +12%;명중률(2) +40ACC;속도(2) +12%SPD;저항력(2) +40;크리 티 컬 데미지(2) +20%;흡혈(4);파괴(4);보복(4);분노(4);치료(4);순발력(4);저주(4);독(4);서리(4);혼돈(4);면역(4);복수(4);실드(4);철통(4);광란(4);신생(4);스턴(4);끈기(4);야수(4);조롱(4);잔혹(2) +15%ATK;불멸(2) +15%HP;신성한생명력(2)-+15%HP;신성한공격력(2) +15%ATK;신성한 크리 티 컬 확률(2) +12%;신성한 속도(2)+12%SPD;신속한 패링(4)+18%SPD+30%C.Dmg;굴절(4)+20HP%+20DEF%;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;SPD;RESIST;ACC;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;SPD;RESIST;ACC;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;SPD;RESIST;ACC;ATK+;HP+;DEF+;C.RATE;C.DMG;ATK%;HP%;DEF%;SPD;RESIST;ACC;세트 정보;생명력(2)-+15%HP;공격력(2) +15%ATK;방어력(2) +15%DEF;크리티컬 확률(2) +12%;명중률(2) +40ACC;속도(2) +12%SPD;저항력(2) +40;크리 티 컬 데미지(2) +20%;흡혈(4);파괴(4);보복(4);분노(4);치료(4);순발력(4);저주(4);독(4);서리(4);혼돈(4);면역(4);복수(4);실드(4);철통(4);광란(4);신생(4);스턴(4);끈기(4);야수(4);조롱(4);잔혹(2) +15%ATK;불멸(2) +15%HP;신성한생명력(2)-+15%HP;신성한공격력(2) +15%ATK;신성한 크리 티 컬 확률(2) +12%;신성한 속도(2)+12%SPD;신속한 패링(4)+18%SPD+30%C.Dmg;굴절(4)+20HP%+20DEF%;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;SPD;C.RATE;C.DMG;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;SPD;C.RATE;C.DMG;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;SPD;C.RATE;C.DMG;ATK+;HP+;DEF+;RESIST;ACC;ATK%;HP%;DEF%;SPD;C.RATE;C.DMG;세트 정보;생명력(2)-+15%HP;공격력(2) +15%ATK;방어력(2) +15%DEF;크리티컬 확률(2) +12%;명중률(2) +40ACC;속도(2) +12%SPD;저항력(2) +40;크리 티 컬 데미지(2) +20%;흡혈(4);파괴(4);보복(4);분노(4);치료(4);순발력(4);저주(4);독(4);서리(4);혼돈(4);면역(4);복수(4);실드(4);철통(4);광란(4);신생(4);스턴(4);끈기(4);야수(4);조롱(4);잔혹(2) +15%ATK;불멸(2) +15%HP;신성한생명력(2)-+15%HP;신성한공격력(2) +15%ATK;신성한 크리 티 컬 확률(2) +12%;신성한 속도(2)+12%SPD;신속한 패링(4)+18%SPD+30%C.Dmg;굴절(4)+20HP%+20DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ACC;C.RATE;C.DMG;RESIST;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ACC;C.RATE;C.DMG;RESIST;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ACC;C.RATE;C.DMG;RESIST;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ACC;C.RATE;C.DMG;RESIST;ATK+;HP+;DEF+;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;C.DMG;ATK+;HP+;DEF+;C.DMG;RESIST;ACC;ATK+;HP+;DEF+;C.DMG;RESIST;ACC;ATK+;HP+;DEF+;C.DMG;RESIST;ACC;ATK+;HP+;DEF+;C.DMG;RESIST;ACC;ATK+;HP+;DEF+;RESIST;ACC;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%;ATK+;HP+;DEF+;SPD;ATK%;HP%;DEF%".split(
    ";"
  ),
  zhArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;套組資訊;生命〔2〉-+15%生命;攻翳(2) -+15%攻擊;防麵(2)-+15防禦;暴驗率(2)-+12%暴擊率;精準(2) +40精準;速度(2)-+12%速度;抗性(2)-+40抗性;暴翟傷害(2)-+20%;吸血(4);摧毀(4);報復(4);狂暴(4);治癒(4);反射(4);詛咒(4);中毒(4);冰凍(4);迷茫(4);免疫(4);復仇(4);謹盾(4);忠誠(4);狂怒(4);悔悟(4);眩晕(4);躁勳(4);野蠻(4);嘲諷(4);冷酷(2)-+15%攻擊力;永生(2)-生命值+15%;神聖生命-+生命值+15%;神聖攻擊(2)-+攻擊+15%;神聖暴擊率(2)-+暴轚率+12%;神聖速度(2)-+速度+12%;迅速格擋(4)-+速度+18% 暴擊傷害+30%;反弹(4)-生命值+20% 防禦+20%;攻擊力+;生命值+;速度;暴擊率;暴擊傷害;抗性;精準;攻擊力%;生命值%;生命值+;速度;暴擊率;暴擊傷害;抗性;精準;攻擊力%;生命值%;生命值+;速度;暴擊率;暴擊傷害;抗性;精準;攻擊力%;生命值%;生命值+;速度;暴擊率;暴擊傷害;抗性;精準;攻擊力%;生命值%;套組資訊;生命〔2〉-+15%生命;攻翳(2) -+15%攻擊;防麵(2)-+15防禦;暴驗率(2)-+12%暴擊率;精準(2) +40精準;速度(2)-+12%速度;抗性(2)-+40抗性;暴翟傷害(2)-+20%;吸血(4);摧毀(4);報復(4);狂暴(4);治癒(4);反射(4);詛咒(4);中毒(4);冰凍(4);迷茫(4);免疫(4);復仇(4);謹盾(4);忠誠(4);狂怒(4);悔悟(4);眩晕(4);躁勳(4);野蠻(4);嘲諷(4);冷酷(2)-+15%攻擊力;永生(2)-生命值+15%;神聖生命-+生命值+15%;神聖攻擊(2)-+攻擊+15%;神聖暴擊率(2)-+暴轚率+12%;神聖速度(2)-+速度+12%;迅速格擋(4)-+速度+18% 暴擊傷害+30%;反弹(4)-生命值+20% 防禦+20%;生命值+;攻擊力+;防禦力+;速度;暴擊率;暴擊傷害;抗性;精準;攻擊力%;生命值%;防禦力%;攻擊力+;防禦力+;速度;暴擊率;暴擊傷害;抗性;精準;攻擊力%;生命值%;防禦力%;攻擊力+;防禦力+;速度;暴擊率;暴擊傷害;抗性;精準;攻擊力%;生命值%;防禦力%;攻擊力+;防禦力+;速度;暴擊率;暴擊傷害;抗性;精準;攻擊力%;生命值%;防禦力%;套組資訊;生命〔2〉-+15%生命;攻翳(2) -+15%攻擊;防麵(2)-+15防禦;暴驗率(2)-+12%暴擊率;精準(2) +40精準;速度(2)-+12%速度;抗性(2)-+40抗性;暴翟傷害(2)-+20%;吸血(4);摧毀(4);報復(4);狂暴(4);治癒(4);反射(4);詛咒(4);中毒(4);冰凍(4);迷茫(4);免疫(4);復仇(4);謹盾(4);忠誠(4);狂怒(4);悔悟(4);眩晕(4);躁勳(4);野蠻(4);嘲諷(4);冷酷(2)-+15%攻擊力;永生(2)-生命值+15%;神聖生命-+生命值+15%;神聖攻擊(2)-+攻擊+15%;神聖暴擊率(2)-+暴轚率+12%;神聖速度(2)-+速度+12%;迅速格擋(4)-+速度+18% 暴擊傷害+30%;反弹(4)-生命值+20% 防禦+20%;防禦力+;生命值+;速度;暴擊率;暴擊傷害;抗性;精準;生命值%;防禦力%;生命值+;速度;暴擊率;暴擊傷害;抗性;精準;生命值%;防禦力%;生命值+;速度;暴擊率;暴擊傷害;抗性;精準;生命值%;防禦力%;生命值+;速度;暴擊率;暴擊傷害;抗性;精準;生命值%;防禦力%;大殿;生命值;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;攻擊力;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;防禦力;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;暴擊傷害;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;抗性;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;精準;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;競技場;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;天賦;SKILL;攻擊力 75;暴擊率+ 5%;防禦力 75;抗性 10;SKILL;防禦力 75;抗性 10;最大生命值 810;精準 10;SKILL;暴擊傷害 10%;SKILL;套組資訊 +15%;SKILL;暴擊傷害 20%;防禦力 200;抗性 50;最大生命值 3000;精準 50;生命值-;0; 攻擊力-;0;防禦力-;0;速度-;0;暴擊率-;0%;暴擊傷害-;0%;抗性-;0;精準-;0;套組資訊;生命〔2〉-+15%生命;攻翳(2) -+15%攻擊;防麵(2)-+15防禦;暴驗率(2)-+12%暴擊率;精準(2) +40精準;速度(2)-+12%速度;抗性(2)-+40抗性;暴翟傷害(2)-+20%;吸血(4);摧毀(4);報復(4);狂暴(4);治癒(4);反射(4);詛咒(4);中毒(4);冰凍(4);迷茫(4);免疫(4);復仇(4);謹盾(4);忠誠(4);狂怒(4);悔悟(4);眩晕(4);躁勳(4);野蠻(4);嘲諷(4);冷酷(2)-+15%攻擊力;永生(2)-生命值+15%;神聖生命-+生命值+15%;神聖攻擊(2)-+攻擊+15%;神聖暴擊率(2)-+暴轚率+12%;神聖速度(2)-+速度+12%;迅速格擋(4)-+速度+18% 暴擊傷害+30%;反弹(4)-生命值+20% 防禦+20%;攻擊力+;生命值+;防禦力+;暴擊率;暴擊傷害;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;暴擊率;暴擊傷害;攻擊力%;生命值%;防禦力%;速度;抗性;精準;攻擊力+;生命值+;防禦力+;暴擊率;暴擊傷害;攻擊力%;生命值%;防禦力%;速度;抗性;精準;攻擊力+;生命值+;防禦力+;暴擊率;暴擊傷害;攻擊力%;生命值%;防禦力%;速度;抗性;精準;攻擊力+;生命值+;防禦力+;暴擊率;暴擊傷害;攻擊力%;生命值%;防禦力%;速度;抗性;精準;套組資訊;生命〔2〉-+15%生命;攻翳(2) -+15%攻擊;防麵(2)-+15防禦;暴驗率(2)-+12%暴擊率;精準(2) +40精準;速度(2)-+12%速度;抗性(2)-+40抗性;暴翟傷害(2)-+20%;吸血(4);摧毀(4);報復(4);狂暴(4);治癒(4);反射(4);詛咒(4);中毒(4);冰凍(4);迷茫(4);免疫(4);復仇(4);謹盾(4);忠誠(4);狂怒(4);悔悟(4);眩晕(4);躁勳(4);野蠻(4);嘲諷(4);冷酷(2)-+15%攻擊力;永生(2)-生命值+15%;神聖生命-+生命值+15%;神聖攻擊(2)-+攻擊+15%;神聖暴擊率(2)-+暴轚率+12%;神聖速度(2)-+速度+12%;迅速格擋(4)-+速度+18% 暴擊傷害+30%;反弹(4)-生命值+20% 防禦+20%;攻擊力+;生命值+;防禦力+;抗性;精準;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;抗性;精準;攻擊力%;生命值%;防禦力%;速度;暴擊率;暴擊傷害;攻擊力+;生命值+;防禦力+;抗性;精準;攻擊力%;生命值%;防禦力%;速度;暴擊率;暴擊傷害;攻擊力+;生命值+;防禦力+;抗性;精準;攻擊力%;生命值%;防禦力%;速度;暴擊率;暴擊傷害;攻擊力+;生命值+;防禦力+;抗性;精準;攻擊力%;生命值%;防禦力%;速度;暴擊率;暴擊傷害;套組資訊;生命〔2〉-+15%生命;攻翳(2) -+15%攻擊;防麵(2)-+15防禦;暴驗率(2)-+12%暴擊率;精準(2) +40精準;速度(2)-+12%速度;抗性(2)-+40抗性;暴翟傷害(2)-+20%;吸血(4);摧毀(4);報復(4);狂暴(4);治癒(4);反射(4);詛咒(4);中毒(4);冰凍(4);迷茫(4);免疫(4);復仇(4);謹盾(4);忠誠(4);狂怒(4);悔悟(4);眩晕(4);躁勳(4);野蠻(4);嘲諷(4);冷酷(2)-+15%攻擊力;永生(2)-生命值+15%;神聖生命-+生命值+15%;神聖攻擊(2)-+攻擊+15%;神聖暴擊率(2)-+暴轚率+12%;神聖速度(2)-+速度+12%;迅速格擋(4)-+速度+18% 暴擊傷害+30%;反弹(4)-生命值+20% 防禦+20%;攻擊力+;生命值+;防禦力+;速度;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;速度;攻擊力%;生命值%;防禦力%;精準;暴擊率;暴擊傷害;抗性;攻擊力+;生命值+;防禦力+;速度;攻擊力%;生命值%;防禦力%;精準;暴擊率;暴擊傷害;抗性;攻擊力+;生命值+;防禦力+;速度;攻擊力%;生命值%;防禦力%;精準;暴擊率;暴擊傷害;抗性;攻擊力+;生命值+;防禦力+;速度;攻擊力%;生命值%;防禦力%;精準;暴擊率;暴擊傷害;抗性;攻擊力+;生命值+;防禦力+;攻擊力+;生命值+;防禦力+;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;暴擊傷害;攻擊力+;生命值+;防禦力+;暴擊傷害;抗性;精準;攻擊力+;生命值+;防禦力+;暴擊傷害;抗性;精準;攻擊力+;生命值+;防禦力+;暴擊傷害;抗性;精準;攻擊力+;生命值+;防禦力+;暴擊傷害;抗性;精準;攻擊力+;生命值+;防禦力+;抗性;精準;攻擊力+;生命值+;防禦力+;速度;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;速度;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;速度;攻擊力%;生命值%;防禦力%;攻擊力+;生命值+;防禦力+;速度;攻擊力%;生命值%;防禦力%".split(
    ";"
  ),
  jaArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;キット;ライフ(2) +15%HP;攻撃(2) +15%攻撃力;防御(2) +15%防御力;クリティカル率(2) +12%;精度(2) +40精度;スピード(2) +12%スピード;耐性(2) +40;クリティカルダメージ(2) +20%;ライフスチール(4);破壊(4);報復(4);底力(4);治癒(4);反射(4);呪い(4);毒性(4);凍結(4);当惑(4);無敵(4);逆襲(4);防盾(4);強靱(4);混乱(4);リジェネレーション(4);気絶(4);追擊(4);猛攻(4);挑発(4);残糖(2)-攻御力十15%;不死(2) +15%HP;ディヴァインライフ(2) +15%HP;ディヴァインオフェンス(2) +15%攻撃力;ディヴァインクリティカル率(2) +12%;ディヴァインスピード(2)+12%スピード;スイフトパリィ（4)-スピード+18%+30%Cダメージ;デフレクシヨン(4)+20HP%+20防御力%;攻撃力+;HP+;スピード;Crit率;Cダメージ;耐性;精度;攻撃力%;HP%;HP+;スピード;Crit率;Cダメージ;耐性;精度;攻撃力%;HP%;HP+;スピード;Crit率;Cダメージ;耐性;精度;攻撃力%;HP%;HP+;スピード;Crit率;Cダメージ;耐性;精度;攻撃力%;HP%;キット;ライフ(2) +15%HP;攻撃(2) +15%攻撃力;防御(2) +15%防御力;クリティカル率(2) +12%;精度(2) +40精度;スピード(2) +12%スピード;耐性(2) +40;クリティカルダメージ(2) +20%;ライフスチール(4);破壊(4);報復(4);底力(4);治癒(4);反射(4);呪い(4);毒性(4);凍結(4);当惑(4);無敵(4);逆襲(4);防盾(4);強靱(4);混乱(4);リジェネレーション(4);気絶(4);追擊(4);猛攻(4);挑発(4);残糖(2)-攻御力十15%;不死(2) +15%HP;ディヴァインライフ(2) +15%HP;ディヴァインオフェンス(2) +15%攻撃力;ディヴァインクリティカル率(2) +12%;ディヴァインスピード(2)+12%スピード;スイフトパリィ（4)-スピード+18%+30%Cダメージ;デフレクシヨン(4)+20HP%+20防御力%;HP+;攻撃力+;防御力+;スピード;Crit率;Cダメージ;耐性;精度;攻撃力%;HP%;防御力%;攻撃力+;防御力+;スピード;Crit率;Cダメージ;耐性;精度;攻撃力%;HP%;防御力%;攻撃力+;防御力+;スピード;Crit率;Cダメージ;耐性;精度;攻撃力%;HP%;防御力%;攻撃力+;防御力+;スピード;Crit率;Cダメージ;耐性;精度;攻撃力%;HP%;防御力%;キット;ライフ(2) +15%HP;攻撃(2) +15%攻撃力;防御(2) +15%防御力;クリティカル率(2) +12%;精度(2) +40精度;スピード(2) +12%スピード;耐性(2) +40;クリティカルダメージ(2) +20%;ライフスチール(4);破壊(4);報復(4);底力(4);治癒(4);反射(4);呪い(4);毒性(4);凍結(4);当惑(4);無敵(4);逆襲(4);防盾(4);強靱(4);混乱(4);リジェネレーション(4);気絶(4);追擊(4);猛攻(4);挑発(4);残糖(2)-攻御力十15%;不死(2) +15%HP;ディヴァインライフ(2) +15%HP;ディヴァインオフェンス(2) +15%攻撃力;ディヴァインクリティカル率(2) +12%;ディヴァインスピード(2)+12%スピード;スイフトパリィ（4)-スピード+18%+30%Cダメージ;デフレクシヨン(4)+20HP%+20防御力%;防御力+;HP+;スピード;Crit率;Cダメージ;耐性;精度;HP%;防御力%;HP+;スピード;Crit率;Cダメージ;耐性;精度;HP%;防御力%;HP+;スピード;Crit率;Cダメージ;耐性;精度;HP%;防御力%;HP+;スピード;Crit率;Cダメージ;耐性;精度;HP%;防御力%;大広間;HP;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;攻撃力;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;防御力;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;Cダメージ;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;耐性;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;精度;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;アリーナ;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;秘伝;SKILL;攻撃力 75;C.率 5%;防御力 75;耐性 10;SKILL;防御力 75;耐性 10;M.HP 810;精度 10;SKILL;Cダメージ 10%;SKILL;SET +15%;SKILL;Cダメージ 20%;防御力 200;耐性 50;M.HP 3000;精度 50;HP-;0; 攻撃力-;0;防御力-;0;スピード;0;C.率-;0%;C.ダメージ;0%;耐性-;0;精度-;0;キット;ライフ(2) +15%HP;攻撃(2) +15%攻撃力;防御(2) +15%防御力;クリティカル率(2) +12%;精度(2) +40精度;スピード(2) +12%スピード;耐性(2) +40;クリティカルダメージ(2) +20%;ライフスチール(4);破壊(4);報復(4);底力(4);治癒(4);反射(4);呪い(4);毒性(4);凍結(4);当惑(4);無敵(4);逆襲(4);防盾(4);強靱(4);混乱(4);リジェネレーション(4);気絶(4);追擊(4);猛攻(4);挑発(4);残糖(2)-攻御力十15%;不死(2) +15%HP;ディヴァインライフ(2) +15%HP;ディヴァインオフェンス(2) +15%攻撃力;ディヴァインクリティカル率(2) +12%;ディヴァインスピード(2)+12%スピード;スイフトパリィ（4)-スピード+18%+30%Cダメージ;デフレクシヨン(4)+20HP%+20防御力%;攻撃力+;HP+;防御力+;Crit率;Cダメージ;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;Crit率;Cダメージ;攻撃力%;HP%;防御力%;スピード;耐性;精度;攻撃力+;HP+;防御力+;Crit率;Cダメージ;攻撃力%;HP%;防御力%;スピード;耐性;精度;攻撃力+;HP+;防御力+;Crit率;Cダメージ;攻撃力%;HP%;防御力%;スピード;耐性;精度;攻撃力+;HP+;防御力+;Crit率;Cダメージ;攻撃力%;HP%;防御力%;スピード;耐性;精度;キット;ライフ(2) +15%HP;攻撃(2) +15%攻撃力;防御(2) +15%防御力;クリティカル率(2) +12%;精度(2) +40精度;スピード(2) +12%スピード;耐性(2) +40;クリティカルダメージ(2) +20%;ライフスチール(4);破壊(4);報復(4);底力(4);治癒(4);反射(4);呪い(4);毒性(4);凍結(4);当惑(4);無敵(4);逆襲(4);防盾(4);強靱(4);混乱(4);リジェネレーション(4);気絶(4);追擊(4);猛攻(4);挑発(4);残糖(2)-攻御力十15%;不死(2) +15%HP;ディヴァインライフ(2) +15%HP;ディヴァインオフェンス(2) +15%攻撃力;ディヴァインクリティカル率(2) +12%;ディヴァインスピード(2)+12%スピード;スイフトパリィ（4)-スピード+18%+30%Cダメージ;デフレクシヨン(4)+20HP%+20防御力%;攻撃力+;HP+;防御力+;耐性;精度;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;耐性;精度;攻撃力%;HP%;防御力%;スピード;Crit率;Cダメージ;攻撃力+;HP+;防御力+;耐性;精度;攻撃力%;HP%;防御力%;スピード;Crit率;Cダメージ;攻撃力+;HP+;防御力+;耐性;精度;攻撃力%;HP%;防御力%;スピード;Crit率;Cダメージ;攻撃力+;HP+;防御力+;耐性;精度;攻撃力%;HP%;防御力%;スピード;Crit率;Cダメージ;キット;ライフ(2) +15%HP;攻撃(2) +15%攻撃力;防御(2) +15%防御力;クリティカル率(2) +12%;精度(2) +40精度;スピード(2) +12%スピード;耐性(2) +40;クリティカルダメージ(2) +20%;ライフスチール(4);破壊(4);報復(4);底力(4);治癒(4);反射(4);呪い(4);毒性(4);凍結(4);当惑(4);無敵(4);逆襲(4);防盾(4);強靱(4);混乱(4);リジェネレーション(4);気絶(4);追擊(4);猛攻(4);挑発(4);残糖(2)-攻御力十15%;不死(2) +15%HP;ディヴァインライフ(2) +15%HP;ディヴァインオフェンス(2) +15%攻撃力;ディヴァインクリティカル率(2) +12%;ディヴァインスピード(2)+12%スピード;スイフトパリィ（4)-スピード+18%+30%Cダメージ;デフレクシヨン(4)+20HP%+20防御力%;攻撃力+;HP+;防御力+;スピード;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;スピード;攻撃力%;HP%;防御力%;精度;Crit率;Cダメージ;耐性;攻撃力+;HP+;防御力+;スピード;攻撃力%;HP%;防御力%;精度;Crit率;Cダメージ;耐性;攻撃力+;HP+;防御力+;スピード;攻撃力%;HP%;防御力%;精度;Crit率;Cダメージ;耐性;攻撃力+;HP+;防御力+;スピード;攻撃力%;HP%;防御力%;精度;Crit率;Cダメージ;耐性;攻撃力+;HP+;防御力+;攻撃力+;HP+;防御力+;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;Cダメージ;攻撃力+;HP+;防御力+;Cダメージ;耐性;精度;攻撃力+;HP+;防御力+;Cダメージ;耐性;精度;攻撃力+;HP+;防御力+;Cダメージ;耐性;精度;攻撃力+;HP+;防御力+;Cダメージ;耐性;精度;攻撃力+;HP+;防御力+;耐性;精度;攻撃力+;HP+;防御力+;スピード;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;スピード;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;スピード;攻撃力%;HP%;防御力%;攻撃力+;HP+;防御力+;スピード;攻撃力%;HP%;防御力%".split(
    ";"
  ),
  trArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;Bilgiler;Can(2) +15%HP;Saldırı(2) +15%ATK;Savunma(2)+15%DEF;Kritik Oranı(2) +12%;Isabet(2) +40ISBT;Hız(2) +12%HIZ;Direnç(2) +40;K.Hasar (2) +20%;CanÇalma (4);Yok Et (4);Misilleme (4);Öfke(4);Tedavi(4);Refleks(4);Lanetli(4);Zehirli(4);Don(4);Şaşırtma(4);Dokunulmazlık(4);İntikam(4);Kalkan(4);Gözüpek(4);Çılgınlık(4);Yenilenme(4);Sersemletme(4);Acımasız(4);Zalim(4);Alay(4);Cani(2) +15%ATK; Ölümsüz(2) +15%HP;İlahı Can(2) +15%HP;İlahı Saldırı(2) +15%ATK;İlahı Kritik Oran(2) +12%;İlahı Hız(2)+12%HIZ;Hızlı Savuşturma(4)+18%HIZ+30%C.Dmg;Saptırma(4)+20HP%+20DEF%;ATK+;HP+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;ATK%;HP%;HP+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;ATK%;HP%;HP+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;ATK%;HP%;HP+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;ATK%;HP%;Bilgiler;Can(2) +15%HP;Saldırı(2) +15%ATK;Savunma(2)+15%DEF;Kritik Oranı(2) +12%;Isabet(2) +40ISBT;Hız(2) +12%HIZ;Direnç(2) +40;K.Hasar (2) +20%;CanÇalma (4);Yok Et (4);Misilleme (4);Öfke(4);Tedavi(4);Refleks(4);Lanetli(4);Zehirli(4);Don(4);Şaşırtma(4);Dokunulmazlık(4);İntikam(4);Kalkan(4);Gözüpek(4);Çılgınlık(4);Yenilenme(4);Sersemletme(4);Acımasız(4);Zalim(4);Alay(4);Cani(2) +15%ATK; Ölümsüz(2) +15%HP;İlahı Can(2) +15%HP;İlahı Saldırı(2) +15%ATK;İlahı Kritik Oran(2) +12%;İlahı Hız(2)+12%HIZ;Hızlı Savuşturma(4)+18%HIZ+30%C.Dmg;Saptırma(4)+20HP%+20DEF%;HP+;ATK+;DEF+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;ATK%;HP%;DEF%;ATK+;DEF+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;ATK%;HP%;DEF%;ATK+;DEF+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;ATK%;HP%;DEF%;ATK+;DEF+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;ATK%;HP%;DEF%;Bilgiler;Can(2) +15%HP;Saldırı(2) +15%ATK;Savunma(2)+15%DEF;Kritik Oranı(2) +12%;Isabet(2) +40ISBT;Hız(2) +12%HIZ;Direnç(2) +40;K.Hasar (2) +20%;CanÇalma (4);Yok Et (4);Misilleme (4);Öfke(4);Tedavi(4);Refleks(4);Lanetli(4);Zehirli(4);Don(4);Şaşırtma(4);Dokunulmazlık(4);İntikam(4);Kalkan(4);Gözüpek(4);Çılgınlık(4);Yenilenme(4);Sersemletme(4);Acımasız(4);Zalim(4);Alay(4);Cani(2) +15%ATK; Ölümsüz(2) +15%HP;İlahı Can(2) +15%HP;İlahı Saldırı(2) +15%ATK;İlahı Kritik Oran(2) +12%;İlahı Hız(2)+12%HIZ;Hızlı Savuşturma(4)+18%HIZ+30%C.Dmg;Saptırma(4)+20HP%+20DEF%;DEF+;HP+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;HP%;DEF%;HP+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;HP%;DEF%;HP+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;HP%;DEF%;HP+;HIZ;K.OR;K.DMG;DİRENÇ;ISBT;HP%;DEF%;Büyük Salon;HP;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ATK;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;DEF;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;K.DMG;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;DIR;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;ISBT;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;Arena;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;Ustalıklar;SKILL;ATK 75;K.OR 5%;DEF 75;DIR 10;SKILL;DEF 75;DIR 10;M.HP 810;ISBT 10;SKILL;K.DMG 10%;SKILL;SET +15%;SKILL;K.DMG 20%;DEF 200;DİRENÇ 50;M.HP 3000;ISBT 50;HP-;0; ATK-;0;DEF-;0;HIZ-;0;K.OR-;0%;K.DMG-;0%;DIR-;0;ISBT-;0;Bilgiler;Can(2) +15%HP;Saldırı(2) +15%ATK;Savunma(2)+15%DEF;Kritik Oranı(2) +12%;Isabet(2) +40ISBT;Hız(2) +12%HIZ;Direnç(2) +40;K.Hasar (2) +20%;CanÇalma (4);Yok Et (4);Misilleme (4);Öfke(4);Tedavi(4);Refleks(4);Lanetli(4);Zehirli(4);Don(4);Şaşırtma(4);Dokunulmazlık(4);İntikam(4);Kalkan(4);Gözüpek(4);Çılgınlık(4);Yenilenme(4);Sersemletme(4);Acımasız(4);Zalim(4);Alay(4);Cani(2) +15%ATK; Ölümsüz(2) +15%HP;İlahı Can(2) +15%HP;İlahı Saldırı(2) +15%ATK;İlahı Kritik Oran(2) +12%;İlahı Hız(2)+12%HIZ;Hızlı Savuşturma(4)+18%HIZ+30%C.Dmg;Saptırma(4)+20HP%+20DEF%;ATK+;HP+;DEF+;K.OR;K.DMG;ATK%;HP%;DEF%;ATK+;HP+;DEF+;K.OR;K.DMG;ATK%;HP%;DEF%;HIZ;DİRENÇ;ISBT;ATK+;HP+;DEF+;K.OR;K.DMG;ATK%;HP%;DEF%;HIZ;DİRENÇ;ISBT;ATK+;HP+;DEF+;K.OR;K.DMG;ATK%;HP%;DEF%;HIZ;DİRENÇ;ISBT;ATK+;HP+;DEF+;K.OR;K.DMG;ATK%;HP%;DEF%;HIZ;DİRENÇ;ISBT;Bilgiler;Can(2) +15%HP;Saldırı(2) +15%ATK;Savunma(2)+15%DEF;Kritik Oranı(2) +12%;Isabet(2) +40ISBT;Hız(2) +12%HIZ;Direnç(2) +40;K.Hasar (2) +20%;CanÇalma (4);Yok Et (4);Misilleme (4);Öfke(4);Tedavi(4);Refleks(4);Lanetli(4);Zehirli(4);Don(4);Şaşırtma(4);Dokunulmazlık(4);İntikam(4);Kalkan(4);Gözüpek(4);Çılgınlık(4);Yenilenme(4);Sersemletme(4);Acımasız(4);Zalim(4);Alay(4);Cani(2) +15%ATK; Ölümsüz(2) +15%HP;İlahı Can(2) +15%HP;İlahı Saldırı(2) +15%ATK;İlahı Kritik Oran(2) +12%;İlahı Hız(2)+12%HIZ;Hızlı Savuşturma(4)+18%HIZ+30%C.Dmg;Saptırma(4)+20HP%+20DEF%;ATK+;HP+;DEF+;DİRENÇ;ISBT;ATK%;HP%;DEF%;ATK+;HP+;DEF+;DİRENÇ;ISBT;ATK%;HP%;DEF%;HIZ;K.OR;K.DMG;ATK+;HP+;DEF+;DİRENÇ;ISBT;ATK%;HP%;DEF%;HIZ;K.OR;K.DMG;ATK+;HP+;DEF+;DİRENÇ;ISBT;ATK%;HP%;DEF%;HIZ;K.OR;K.DMG;ATK+;HP+;DEF+;DİRENÇ;ISBT;ATK%;HP%;DEF%;HIZ;K.OR;K.DMG;Bilgiler;Can(2) +15%HP;Saldırı(2) +15%ATK;Savunma(2)+15%DEF;Kritik Oranı(2) +12%;Isabet(2) +40ISBT;Hız(2) +12%HIZ;Direnç(2) +40;K.Hasar (2) +20%;CanÇalma (4);Yok Et (4);Misilleme (4);Öfke(4);Tedavi(4);Refleks(4);Lanetli(4);Zehirli(4);Don(4);Şaşırtma(4);Dokunulmazlık(4);İntikam(4);Kalkan(4);Gözüpek(4);Çılgınlık(4);Yenilenme(4);Sersemletme(4);Acımasız(4);Zalim(4);Alay(4);Cani(2) +15%ATK; Ölümsüz(2) +15%HP;İlahı Can(2) +15%HP;İlahı Saldırı(2) +15%ATK;İlahı Kritik Oran(2) +12%;İlahı Hız(2)+12%HIZ;Hızlı Savuşturma(4)+18%HIZ+30%C.Dmg;Saptırma(4)+20HP%+20DEF%;ATK+;HP+;DEF+;HIZ;ATK%;HP%;DEF%;ATK+;HP+;DEF+;HIZ;ATK%;HP%;DEF%;ISBT;K.OR;K.DMG;DİRENÇ;ATK+;HP+;DEF+;HIZ;ATK%;HP%;DEF%;ISBT;K.OR;K.DMG;DİRENÇ;ATK+;HP+;DEF+;HIZ;ATK%;HP%;DEF%;ISBT;K.OR;K.DMG;DİRENÇ;ATK+;HP+;DEF+;HIZ;ATK%;HP%;DEF%;ISBT;K.OR;K.DMG;DİRENÇ;ATK+;HP+;DEF+;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;ATK%;HP%;DEF%;ATK+;HP+;DEF+;K.DMG;ATK+;HP+;DEF+;K.DMG;DİRENÇ;ISBT;ATK+;HP+;DEF+;K.DMG;DİRENÇ;ISBT;ATK+;HP+;DEF+;K.DMG;DİRENÇ;ISBT;ATK+;HP+;DEF+;K.DMG;DİRENÇ;ISBT;ATK+;HP+;DEF+;DİRENÇ;ISBT;ATK+;HP+;DEF+;HIZ;ATK%;HP%;DEF%;ATK+;HP+;DEF+;HIZ;ATK%;HP%;DEF%;ATK+;HP+;DEF+;HIZ;ATK%;HP%;DEF%;ATK+;HP+;DEF+;HIZ;ATK%;HP%;DEF%".split(
    ";"
  ),
  ukArray = "en;ru;fr;de;it;es;pt;ko;zh;ja;tr;uk;Виберіть сет;Життя(2)+15%зДР;Атака(2) +15%ATK;Захист(2) +15%зАХ;Критичний шанс(2) +12%;Точність(2) +40ТОЧН;Швидкість(2) +12%ШВД;Опір(2) +40;Крит.Шкода(2) +20%;Крадіж життя(4);Нищення(4);Відплата(4);Лють(4);Зцілення(4);Реакція(4);Прокляття(4);Отруєння(4);Мороз(4);Ступор(4);Імунітет(4);Помста(4);Оборона(4);Стійкість(4);Божевілля(4);Регенерація(4);Оглушення(4);Невтомність(4);Жорстокість(4);Глузування(4);Запеклість(2) +15%ATK;Безсмертя(2) +15%зДР;Небесне життя(2)+15%зДР;Небесна атака(2) +15%ATK;Небесний Крит.шанс(2) +12%;Небесна швидкість(2)+12%ШВД;Блискавичний випад(4)+18%ШВД+30%C.Dmg;Відбиття(4)+20зДР%+20зАХ%;ATK+;зДР+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;ATK%;зДР%;зДР+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;ATK%;зДР%;зДР+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;ATK%;зДР%;зДР+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;ATK%;зДР%;Виберіть сет;Життя(2)+15%зДР;Атака(2) +15%ATK;Захист(2) +15%зАХ;Критичний шанс(2) +12%;Точність(2) +40ТОЧН;Швидкість(2) +12%ШВД;Опір(2) +40;Крит.Шкода(2) +20%;Крадіж життя(4);Нищення(4);Відплата(4);Лють(4);Зцілення(4);Реакція(4);Прокляття(4);Отруєння(4);Мороз(4);Ступор(4);Імунітет(4);Помста(4);Оборона(4);Стійкість(4);Божевілля(4);Регенерація(4);Оглушення(4);Невтомність(4);Жорстокість(4);Глузування(4);Запеклість(2) +15%ATK;Безсмертя(2) +15%зДР;Небесне життя(2)+15%зДР;Небесна атака(2) +15%ATK;Небесний Крит.шанс(2) +12%;Небесна швидкість(2)+12%ШВД;Блискавичний випад(4)+18%ШВД+30%C.Dmg;Відбиття(4)+20зДР%+20зАХ%;зДР+;ATK+;зАХ+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;ATK%;зДР%;зАХ%;ATK+;зАХ+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;ATK%;зДР%;зАХ%;ATK+;зАХ+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;ATK%;зДР%;зАХ%;ATK+;зАХ+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;ATK%;зДР%;зАХ%;Виберіть сет;Життя(2)+15%зДР;Атака(2) +15%ATK;Захист(2) +15%зАХ;Критичний шанс(2) +12%;Точність(2) +40ТОЧН;Швидкість(2) +12%ШВД;Опір(2) +40;Крит.Шкода(2) +20%;Крадіж життя(4);Нищення(4);Відплата(4);Лють(4);Зцілення(4);Реакція(4);Прокляття(4);Отруєння(4);Мороз(4);Ступор(4);Імунітет(4);Помста(4);Оборона(4);Стійкість(4);Божевілля(4);Регенерація(4);Оглушення(4);Невтомність(4);Жорстокість(4);Глузування(4);Запеклість(2) +15%ATK;Безсмертя(2) +15%зДР;Небесне життя(2)+15%зДР;Небесна атака(2) +15%ATK;Небесний Крит.шанс(2) +12%;Небесна швидкість(2)+12%ШВД;Блискавичний випад(4)+18%ШВД+30%C.Dmg;Відбиття(4)+20зДР%+20зАХ%;зАХ+;зДР+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;зДР%;зАХ%;зДР+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;зДР%;зАХ%;зДР+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;зДР%;зАХ%;зДР+;ШВД;К.ШАНС;К.УРОН;ОПІР;ТОЧН;зДР%;зАХ%;ВЕЛИКА ЗАЛА;зДР;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;ATK;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;зАХ;+0%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+17%;+20%;К.УРОН;+0%;+2%;+4%;+6%;+8%;+10%;+13%;+15%;+18%;+21%;+25%;ОПІР;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;ТОЧН;+0;+5;+10;+15;+20;+30;+40;+50;+60;+70;+80;АРЕНА;+1%;+2%;+3%;+4%;+6%;+8%;+10%;+12%;+14%;+16%;+18%;+20%;+25%;ТАЛАНТИ;SKILL;ATK 75;К.Ш. 5%;зАХ 75;ОПІР 10;SKILL;зАХ 75;ОПІР 10;M.зДР 810;ТОЧН 10;SKILL;К.УРОН 10%;SKILL;SET +15%;SKILL;К.УРОН 20%;зАХ 200;ОПІР 50;M.зДР 3000;ТОЧН 50;зДР-;0; ATK-;0;зАХ-;0;ШВД-;0;К.ШАНС-;0%;К.УРОН-;0%;ОПІР-;0;ТОЧН-;0;Виберіть сет;Життя(2)+15%зДР;Атака(2) +15%ATK;Захист(2) +15%зАХ;Критичний шанс(2) +12%;Точність(2) +40ТОЧН;Швидкість(2) +12%ШВД;Опір(2) +40;Крит.Шкода(2) +20%;Крадіж життя(4);Нищення(4);Відплата(4);Лють(4);Зцілення(4);Реакція(4);Прокляття(4);Отруєння(4);Мороз(4);Ступор(4);Імунітет(4);Помста(4);Оборона(4);Стійкість(4);Божевілля(4);Регенерація(4);Оглушення(4);Невтомність(4);Жорстокість(4);Глузування(4);Запеклість(2) +15%ATK;Безсмертя(2) +15%зДР;Небесне життя(2)+15%зДР;Небесна атака(2) +15%ATK;Небесний Крит.шанс(2) +12%;Небесна швидкість(2)+12%ШВД;Блискавичний випад(4)+18%ШВД+30%C.Dmg;Відбиття(4)+20зДР%+20зАХ%;ATK+;зДР+;зАХ+;К.ШАНС;К.УРОН;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;К.ШАНС;К.УРОН;ATK%;зДР%;зАХ%;ШВД;ОПІР;ТОЧН;ATK+;зДР+;зАХ+;К.ШАНС;К.УРОН;ATK%;зДР%;зАХ%;ШВД;ОПІР;ТОЧН;ATK+;зДР+;зАХ+;К.ШАНС;К.УРОН;ATK%;зДР%;зАХ%;ШВД;ОПІР;ТОЧН;ATK+;зДР+;зАХ+;К.ШАНС;К.УРОН;ATK%;зДР%;зАХ%;ШВД;ОПІР;ТОЧН;Виберіть сет;Життя(2)+15%зДР;Атака(2) +15%ATK;Захист(2) +15%зАХ;Критичний шанс(2) +12%;Точність(2) +40ТОЧН;Швидкість(2) +12%ШВД;Опір(2) +40;Крит.Шкода(2) +20%;Крадіж життя(4);Нищення(4);Відплата(4);Лють(4);Зцілення(4);Реакція(4);Прокляття(4);Отруєння(4);Мороз(4);Ступор(4);Імунітет(4);Помста(4);Оборона(4);Стійкість(4);Божевілля(4);Регенерація(4);Оглушення(4);Невтомність(4);Жорстокість(4);Глузування(4);Запеклість(2) +15%ATK;Безсмертя(2) +15%зДР;Небесне життя(2)+15%зДР;Небесна атака(2) +15%ATK;Небесний Крит.шанс(2) +12%;Небесна швидкість(2)+12%ШВД;Блискавичний випад(4)+18%ШВД+30%C.Dmg;Відбиття(4)+20зДР%+20зАХ%;ATK+;зДР+;зАХ+;ОПІР;ТОЧН;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;ОПІР;ТОЧН;ATK%;зДР%;зАХ%;ШВД;К.ШАНС;К.УРОН;ATK+;зДР+;зАХ+;ОПІР;ТОЧН;ATK%;зДР%;зАХ%;ШВД;К.ШАНС;К.УРОН;ATK+;зДР+;зАХ+;ОПІР;ТОЧН;ATK%;зДР%;зАХ%;ШВД;К.ШАНС;К.УРОН;ATK+;зДР+;зАХ+;ОПІР;ТОЧН;ATK%;зДР%;зАХ%;ШВД;К.ШАНС;К.УРОН;Виберіть сет;Життя(2)+15%зДР;Атака(2) +15%ATK;Захист(2) +15%зАХ;Критичний шанс(2) +12%;Точність(2) +40ТОЧН;Швидкість(2) +12%ШВД;Опір(2) +40;Крит.Шкода(2) +20%;Крадіж життя(4);Нищення(4);Відплата(4);Лють(4);Зцілення(4);Реакція(4);Прокляття(4);Отруєння(4);Мороз(4);Ступор(4);Імунітет(4);Помста(4);Оборона(4);Стійкість(4);Божевілля(4);Регенерація(4);Оглушення(4);Невтомність(4);Жорстокість(4);Глузування(4);Запеклість(2) +15%ATK;Безсмертя(2) +15%зДР;Небесне життя(2)+15%зДР;Небесна атака(2) +15%ATK;Небесний Крит.шанс(2) +12%;Небесна швидкість(2)+12%ШВД;Блискавичний випад(4)+18%ШВД+30%C.Dmg;Відбиття(4)+20зДР%+20зАХ%;ATK+;зДР+;зАХ+;ШВД;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;ШВД;ATK%;зДР%;зАХ%;ТОЧН;К.ШАНС;К.УРОН;ОПІР;ATK+;зДР+;зАХ+;ШВД;ATK%;зДР%;зАХ%;ТОЧН;К.ШАНС;К.УРОН;ОПІР;ATK+;зДР+;зАХ+;ШВД;ATK%;зДР%;зАХ%;ТОЧН;К.ШАНС;К.УРОН;ОПІР;ATK+;зДР+;зАХ+;ШВД;ATK%;зДР%;зАХ%;ТОЧН;К.ШАНС;К.УРОН;ОПІР;ATK+;зДР+;зАХ+;ATK+;зДР+;зАХ+;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;К.УРОН;ATK+;зДР+;зАХ+;К.УРОН;ОПІР;ТОЧН;ATK+;зДР+;зАХ+;К.УРОН;ОПІР;ТОЧН;ATK+;зДР+;зАХ+;К.УРОН;ОПІР;ТОЧН;ATK+;зДР+;зАХ+;К.УРОН;ОПІР;ТОЧН;ATK+;зДР+;зАХ+;ОПІР;ТОЧН;ATK+;зДР+;зАХ+;ШВД;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;ШВД;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;ШВД;ATK%;зДР%;зАХ%;ATK+;зДР+;зАХ+;ШВД;ATK%;зДР%;зАХ%".split(
    ";"
  ),
  langArray = [],
  langg = document.querySelector(".langg");
langg.oninput = lang;
var filterArray = new Set(enArray),
  backToArray = [].concat($jscomp.arrayFromIterable(filterArray));
(document.querySelector(".weapon").oninput = function () {
  (bonus2 = document.querySelectorAll(".weapon select option")),
    (input = document.querySelectorAll(".weapon input")),
    fyf2(),
    (x = 0);
}),
  (document.querySelector(".helmet").oninput = function () {
    (bonus2 = document.querySelectorAll(".helmet select option")),
      (input = document.querySelectorAll(".helmet input")),
      fyf2(),
      (x = 0);
  }),
  (document.querySelector(".shield9").oninput = function () {
    (bonus2 = document.querySelectorAll(".shield9 select option")),
      (input = document.querySelectorAll(".shield9 input")),
      fyf2(),
      (x = 0);
  }),
  (document.querySelector(".boxing").oninput = function () {
    (bonus2 = document.querySelectorAll(".boxing select option")),
      (input = document.querySelectorAll(".boxing input")),
      fyf2(),
      (x = 0);
  }),
  (document.querySelector(".armor").oninput = function () {
    (bonus2 = document.querySelectorAll(".armor select option")),
      (input = document.querySelectorAll(".armor input")),
      fyf2(),
      (x = 0);
  }),
  (document.querySelector(".sneakers").oninput = function () {
    (bonus2 = document.querySelectorAll(".sneakers select option")),
      (input = document.querySelectorAll(".sneakers input")),
      fyf2(),
      (x = 0);
  }),
  (document.querySelector(".ring").oninput = function () {
    (bonus2 = document.querySelectorAll(".ring select option")),
      (input = document.querySelectorAll(".ring input")),
      fyf2(),
      (x = 0);
  }),
  (document.querySelector(".earing").oninput = function () {
    (bonus2 = document.querySelectorAll(".earing select option")),
      (input = document.querySelectorAll(".earing input")),
      fyf2(),
      (x = 0);
  }),
  (document.querySelector(".necklace").oninput = function () {
    (bonus2 = document.querySelectorAll(".necklace select option")),
      (input = document.querySelectorAll(".necklace input")),
      fyf2(),
      (x = 0);
  }),
  (document.querySelector("body").oninput = function () {
    var e = result1(document.querySelectorAll(".baza option.hp_sum")),
      t = result1(document.querySelectorAll(".baza option.atk_sum")),
      r = result1(document.querySelectorAll(".baza option.def_sum")),
      i = result1(document.querySelectorAll(".baza option.spd")),
      a = result1(document.querySelectorAll(".baza option.cRate")),
      n = result1(document.querySelectorAll(".baza option.cDmg")),
      o = result1(document.querySelectorAll(".baza option.resist")),
      l = result1(document.querySelectorAll(".baza option.acc")),
      D = result1(document.querySelectorAll(".baza option.atk_100")),
      T = result1(document.querySelectorAll(".baza option.hp_100")),
      s = result1(document.querySelectorAll(".baza option.def_100")),
      A = result1(document.querySelectorAll(".baza option.set_"));
    console.log(A), console.log("gh");
    var E = result1(document.querySelectorAll("option.life")),
      P = result1(document.querySelectorAll("option.offense")),
      S = result1(document.querySelectorAll("option.defense")),
      d = result1(document.querySelectorAll("option.criticalRate")),
      u = result1(document.querySelectorAll("option.accuracy")),
      c = result1(document.querySelectorAll("option.speed")),
      C = result1(document.querySelectorAll("option.resistance")),
      F = result1(document.querySelectorAll("option.critDamage")),
      m = result1(document.querySelectorAll("option.cruel")),
      R = +result1(document.querySelectorAll("option.immortal")),
      I = result1(document.querySelectorAll("option.divineLive")),
      H = result1(document.querySelectorAll("option.divineOffense")),
      K = result1(document.querySelectorAll("option.divineCriticalRate")),
      p = result1(document.querySelectorAll("option.divineSpeed")),
      V = result1(document.querySelectorAll("option.swiftParry")),
      h = result1(document.querySelectorAll("option.deflection"));
    console.log(15 * Math.floor(E / 15));
    var y = +document.querySelector(".startHp>input").value,
      f = +document.querySelector(".startAtk>input").value,
      G = +document.querySelector(".startDef>input").value,
      b = +document.querySelector(".startSpeed>input").value,
      L = +document.querySelector(".startCrate>input").value,
      g = +document.querySelector(".startCdmg>input").value,
      v = +document.querySelector(".startAcc>input").value,
      N = +document.querySelector(".startResist>input").value;
    (e +=
      (y / 100) *
      (T +
        (1 + A) *
          (15 * Math.floor(E / 15) +
            15 * Math.floor(R / 15) +
            15 * Math.floor(I / 15) +
            20 * Math.floor(h / 20)))),
      (t +=
        (f / 100) *
        (D +
          (1 + A) *
            (15 * Math.floor(P / 15) +
              15 * Math.floor(m / 15) +
              15 * Math.floor(H / 15)))),
      (r +=
        (G / 100) *
        (s + (1 + A) * (15 * Math.floor(S / 15) + 20 * Math.floor(h / 20)))),
      (i +=
        (b / 100) *
        (1 + A) *
        (12 * Math.floor(c / 12) +
          12 * Math.floor(p / 12) +
          18 * Math.floor(V / 30))),
      (a += (1 + A) * (12 * Math.floor(d / 12) + 12 * Math.floor(K / 12))),
      (n += (1 + A) * (20 * Math.floor(F / 20) + 30 * Math.floor(V / 30))),
      (l += 40 * (1 + A) * Math.floor(u / 40)),
      (o += 40 * (1 + A) * Math.floor(C / 40)),
      (document.querySelector(".startHp>output").value = "+" + Math.round(e)),
      (document.querySelector(".startAtk>output").value = "+" + Math.round(t)),
      (document.querySelector(".startDef>output").value = "+" + Math.round(r)),
      (document.querySelector(".startSpeed>output").value =
        "+" + Math.round(i)),
      (document.querySelector(".startCrate>output").value =
        "+" + Math.round(a) + "%"),
      (document.querySelector(".startCdmg>output").value =
        "+" + Math.round(n) + "%"),
      (document.querySelector(".startAcc>output").value = "+" + Math.round(l)),
      (document.querySelector(".startResist>output").value =
        "+" + Math.round(o)),
      (document.querySelector(".startHp>p").innerText = Math.round(e + y)),
      (document.querySelector(".startAtk>p").innerText = Math.round(t + f)),
      (document.querySelector(".startDef>p").innerText = Math.round(r + G)),
      (document.querySelector(".startSpeed>p").innerText = Math.round(i + b)),
      (document.querySelector(".startCrate>p").innerText =
        Math.round(a + L) + "%"),
      (document.querySelector(".startCdmg>p").innerText =
        Math.round(n + g) + "%"),
      (document.querySelector(".startAcc>p").innerText = Math.round(l + v)),
      (document.querySelector(".startResist>p").innerText = Math.round(o + N));
  });
var border = document.querySelectorAll(".sett");
border.forEach(function (e) {
  e.oninput = color;
});
var win = document.querySelectorAll(".image");
win.forEach(function (e) {
  e.onclick = big;
});
var win2 = document.querySelectorAll(".image2");
win2.forEach(function (e) {
  e.onclick = big2;
});
