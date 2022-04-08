!(function () {
  function t(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
          return;
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var a, u = t[Symbol.iterator]();
            !(r = (a = u.next()).done) &&
            (n.push(a.value), !e || n.length !== e);
            r = !0
          );
        } catch (s) {
          (i = !0), (o = s);
        } finally {
          try {
            r || null == u.return || u.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      })(t, e) ||
      r(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function e(t, e) {
    var n;
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
      if (
        Array.isArray(t) ||
        (n = r(t)) ||
        (e && t && "number" == typeof t.length)
      ) {
        n && (t = n);
        var i = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
          },
          e: function (t) {
            throw t;
          },
          f: o,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var a,
      u = !0,
      s = !1;
    return {
      s: function () {
        n = t[Symbol.iterator]();
      },
      n: function () {
        var t = n.next();
        return (u = t.done), t;
      },
      e: function (t) {
        (s = !0), (a = t);
      },
      f: function () {
        try {
          u || null == n.return || n.return();
        } finally {
          if (s) throw a;
        }
      },
    };
  }
  function n(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return i(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      })(t) ||
      r(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function r(t, e) {
    if (t) {
      if ("string" == typeof t) return i(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(t)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? i(t, e)
          : void 0
      );
    }
  }
  function i(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function o(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (o = function (t) {
      if (
        null === t ||
        ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
      )
        return t;
      var n;
      if ("function" != typeof t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== e) {
        if (e.has(t)) return e.get(t);
        e.set(t, r);
      }
      function r() {
        return a(t, arguments, v(this).constructor);
      }
      return (
        (r.prototype = Object.create(t.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        l(r, t)
      );
    })(t);
  }
  function a(t, e, n) {
    return (a = d()
      ? Reflect.construct
      : function (t, e, n) {
          var r = [null];
          r.push.apply(r, e);
          var i = new (Function.bind.apply(t, r))();
          return n && l(i, n.prototype), i;
        }).apply(null, arguments);
  }
  function u(t, e, n) {
    return (u =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            var r = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = v(t));

              );
              return t;
            })(t, e);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, e);
              return i.get ? i.get.call(n) : i.value;
            }
          })(t, e, n || t);
  }
  function s(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && l(t, e);
  }
  function l(t, e) {
    return (l =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function c(t) {
    var e = d();
    return function () {
      var n,
        r = v(t);
      if (e) {
        var i = v(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return h(this, n);
    };
  }
  function h(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e) ? f(t) : e;
  }
  function f(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function v(t) {
    return (v = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function p(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function y(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function g(t, e, n) {
    return e && y(t.prototype, e), n && y(t, n), t;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
      0: function (t, e, n) {
        t.exports = n("zUnb");
      },
      zUnb: function (r, i, l) {
        "use strict";
        function d(t) {
          return "function" == typeof t;
        }
        l.r(i);
        var y = !1,
          m = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(t) {
              if (t) {
                var e = new Error();
                console.warn(
                  "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                    e.stack
                );
              } else
                y &&
                  console.log(
                    "RxJS: Back to a better error behavior. Thank you. <3"
                  );
              y = t;
            },
            get useDeprecatedSynchronousErrorHandling() {
              return y;
            },
          };
        function _(t) {
          setTimeout(function () {
            throw t;
          }, 0);
        }
        var k = {
            closed: !0,
            next: function (t) {},
            error: function (t) {
              if (m.useDeprecatedSynchronousErrorHandling) throw t;
              _(t);
            },
            complete: function () {},
          },
          w =
            Array.isArray ||
            function (t) {
              return t && "number" == typeof t.length;
            };
        function b(t) {
          return null !== t && "object" == typeof t;
        }
        var C,
          S = (function () {
            function t(t) {
              return (
                Error.call(this),
                (this.message = t
                  ? ""
                      .concat(
                        t.length,
                        " errors occurred during unsubscription:\n"
                      )
                      .concat(
                        t
                          .map(function (t, e) {
                            return "".concat(e + 1, ") ").concat(t.toString());
                          })
                          .join("\n  ")
                      )
                  : ""),
                (this.name = "UnsubscriptionError"),
                (this.errors = t),
                this
              );
            }
            return (t.prototype = Object.create(Error.prototype)), t;
          })(),
          E =
            (((C = (function () {
              function t(e) {
                p(this, t),
                  (this.closed = !1),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
              }
              return (
                g(t, [
                  {
                    key: "unsubscribe",
                    value: function () {
                      var e;
                      if (!this.closed) {
                        var n = this._parentOrParents,
                          r = this._ctorUnsubscribe,
                          i = this._unsubscribe,
                          o = this._subscriptions;
                        if (
                          ((this.closed = !0),
                          (this._parentOrParents = null),
                          (this._subscriptions = null),
                          n instanceof t)
                        )
                          n.remove(this);
                        else if (null !== n)
                          for (var a = 0; a < n.length; ++a) n[a].remove(this);
                        if (d(i)) {
                          r && (this._unsubscribe = void 0);
                          try {
                            i.call(this);
                          } catch (c) {
                            e = c instanceof S ? x(c.errors) : [c];
                          }
                        }
                        if (w(o))
                          for (var u = -1, s = o.length; ++u < s; ) {
                            var l = o[u];
                            if (b(l))
                              try {
                                l.unsubscribe();
                              } catch (c) {
                                (e = e || []),
                                  c instanceof S
                                    ? (e = e.concat(x(c.errors)))
                                    : e.push(c);
                              }
                          }
                        if (e) throw new S(e);
                      }
                    },
                  },
                  {
                    key: "add",
                    value: function (e) {
                      var n = e;
                      if (!e) return t.EMPTY;
                      switch (typeof e) {
                        case "function":
                          n = new t(e);
                        case "object":
                          if (
                            n === this ||
                            n.closed ||
                            "function" != typeof n.unsubscribe
                          )
                            return n;
                          if (this.closed) return n.unsubscribe(), n;
                          if (!(n instanceof t)) {
                            var r = n;
                            (n = new t())._subscriptions = [r];
                          }
                          break;
                        default:
                          throw new Error(
                            "unrecognized teardown " +
                              e +
                              " added to Subscription."
                          );
                      }
                      var i = n._parentOrParents;
                      if (null === i) n._parentOrParents = this;
                      else if (i instanceof t) {
                        if (i === this) return n;
                        n._parentOrParents = [i, this];
                      } else {
                        if (-1 !== i.indexOf(this)) return n;
                        i.push(this);
                      }
                      var o = this._subscriptions;
                      return (
                        null === o ? (this._subscriptions = [n]) : o.push(n), n
                      );
                    },
                  },
                  {
                    key: "remove",
                    value: function (t) {
                      var e = this._subscriptions;
                      if (e) {
                        var n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1);
                      }
                    },
                  },
                ]),
                t
              );
            })()).EMPTY = (function (t) {
              return (t.closed = !0), t;
            })(new C())),
            C);
        function x(t) {
          return t.reduce(function (t, e) {
            return t.concat(e instanceof S ? e.errors : e);
          }, []);
        }
        var A =
            "function" == typeof Symbol
              ? Symbol("rxSubscriber")
              : "@@rxSubscriber_" + Math.random(),
          T = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              switch (
                (p(this, n),
                ((o = e.call(this)).syncErrorValue = null),
                (o.syncErrorThrown = !1),
                (o.syncErrorThrowable = !1),
                (o.isStopped = !1),
                arguments.length)
              ) {
                case 0:
                  o.destination = k;
                  break;
                case 1:
                  if (!t) {
                    o.destination = k;
                    break;
                  }
                  if ("object" == typeof t) {
                    t instanceof n
                      ? ((o.syncErrorThrowable = t.syncErrorThrowable),
                        (o.destination = t),
                        t.add(f(o)))
                      : ((o.syncErrorThrowable = !0),
                        (o.destination = new O(f(o), t)));
                    break;
                  }
                default:
                  (o.syncErrorThrowable = !0),
                    (o.destination = new O(f(o), t, r, i));
              }
              return o;
            }
            return (
              g(
                n,
                [
                  {
                    key: A,
                    value: function () {
                      return this;
                    },
                  },
                  {
                    key: "next",
                    value: function (t) {
                      this.isStopped || this._next(t);
                    },
                  },
                  {
                    key: "error",
                    value: function (t) {
                      this.isStopped || ((this.isStopped = !0), this._error(t));
                    },
                  },
                  {
                    key: "complete",
                    value: function () {
                      this.isStopped ||
                        ((this.isStopped = !0), this._complete());
                    },
                  },
                  {
                    key: "unsubscribe",
                    value: function () {
                      this.closed ||
                        ((this.isStopped = !0),
                        u(v(n.prototype), "unsubscribe", this).call(this));
                    },
                  },
                  {
                    key: "_next",
                    value: function (t) {
                      this.destination.next(t);
                    },
                  },
                  {
                    key: "_error",
                    value: function (t) {
                      this.destination.error(t), this.unsubscribe();
                    },
                  },
                  {
                    key: "_complete",
                    value: function () {
                      this.destination.complete(), this.unsubscribe();
                    },
                  },
                  {
                    key: "_unsubscribeAndRecycle",
                    value: function () {
                      var t = this._parentOrParents;
                      return (
                        (this._parentOrParents = null),
                        this.unsubscribe(),
                        (this.closed = !1),
                        (this.isStopped = !1),
                        (this._parentOrParents = t),
                        this
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (t, e, r) {
                      var i = new n(t, e, r);
                      return (i.syncErrorThrowable = !1), i;
                    },
                  },
                ]
              ),
              n
            );
          })(E),
          O = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o) {
              var a, u;
              p(this, n), ((a = e.call(this))._parentSubscriber = t);
              var s = f(a);
              return (
                d(r)
                  ? (u = r)
                  : r &&
                    ((u = r.next),
                    (i = r.error),
                    (o = r.complete),
                    r !== k &&
                      (d((s = Object.create(r)).unsubscribe) &&
                        a.add(s.unsubscribe.bind(s)),
                      (s.unsubscribe = a.unsubscribe.bind(f(a))))),
                (a._context = s),
                (a._next = u),
                (a._error = i),
                (a._complete = o),
                a
              );
            }
            return (
              g(n, [
                {
                  key: "next",
                  value: function (t) {
                    if (!this.isStopped && this._next) {
                      var e = this._parentSubscriber;
                      m.useDeprecatedSynchronousErrorHandling &&
                      e.syncErrorThrowable
                        ? this.__tryOrSetError(e, this._next, t) &&
                          this.unsubscribe()
                        : this.__tryOrUnsub(this._next, t);
                    }
                  },
                },
                {
                  key: "error",
                  value: function (t) {
                    if (!this.isStopped) {
                      var e = this._parentSubscriber,
                        n = m.useDeprecatedSynchronousErrorHandling;
                      if (this._error)
                        n && e.syncErrorThrowable
                          ? (this.__tryOrSetError(e, this._error, t),
                            this.unsubscribe())
                          : (this.__tryOrUnsub(this._error, t),
                            this.unsubscribe());
                      else if (e.syncErrorThrowable)
                        n
                          ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                          : _(t),
                          this.unsubscribe();
                      else {
                        if ((this.unsubscribe(), n)) throw t;
                        _(t);
                      }
                    }
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    var t = this;
                    if (!this.isStopped) {
                      var e = this._parentSubscriber;
                      if (this._complete) {
                        var n = function () {
                          return t._complete.call(t._context);
                        };
                        m.useDeprecatedSynchronousErrorHandling &&
                        e.syncErrorThrowable
                          ? (this.__tryOrSetError(e, n), this.unsubscribe())
                          : (this.__tryOrUnsub(n), this.unsubscribe());
                      } else this.unsubscribe();
                    }
                  },
                },
                {
                  key: "__tryOrUnsub",
                  value: function (t, e) {
                    try {
                      t.call(this._context, e);
                    } catch (n) {
                      if (
                        (this.unsubscribe(),
                        m.useDeprecatedSynchronousErrorHandling)
                      )
                        throw n;
                      _(n);
                    }
                  },
                },
                {
                  key: "__tryOrSetError",
                  value: function (t, e, n) {
                    if (!m.useDeprecatedSynchronousErrorHandling)
                      throw new Error("bad call");
                    try {
                      e.call(this._context, n);
                    } catch (r) {
                      return m.useDeprecatedSynchronousErrorHandling
                        ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                        : (_(r), !0);
                    }
                    return !1;
                  },
                },
                {
                  key: "_unsubscribe",
                  value: function () {
                    var t = this._parentSubscriber;
                    (this._context = null),
                      (this._parentSubscriber = null),
                      t.unsubscribe();
                  },
                },
              ]),
              n
            );
          })(T),
          I =
            ("function" == typeof Symbol && Symbol.observable) ||
            "@@observable";
        function R(t) {
          return t;
        }
        var P,
          V =
            (((P = (function () {
              function t(e) {
                p(this, t), (this._isScalar = !1), e && (this._subscribe = e);
              }
              return (
                g(t, [
                  {
                    key: "lift",
                    value: function (e) {
                      var n = new t();
                      return (n.source = this), (n.operator = e), n;
                    },
                  },
                  {
                    key: "subscribe",
                    value: function (t, e, n) {
                      var r = this.operator,
                        i = (function (t, e, n) {
                          if (t) {
                            if (t instanceof T) return t;
                            if (t[A]) return t[A]();
                          }
                          return t || e || n ? new T(t, e, n) : new T(k);
                        })(t, e, n);
                      if (
                        (i.add(
                          r
                            ? r.call(i, this.source)
                            : this.source ||
                              (m.useDeprecatedSynchronousErrorHandling &&
                                !i.syncErrorThrowable)
                            ? this._subscribe(i)
                            : this._trySubscribe(i)
                        ),
                        m.useDeprecatedSynchronousErrorHandling &&
                          i.syncErrorThrowable &&
                          ((i.syncErrorThrowable = !1), i.syncErrorThrown))
                      )
                        throw i.syncErrorValue;
                      return i;
                    },
                  },
                  {
                    key: "_trySubscribe",
                    value: function (t) {
                      try {
                        return this._subscribe(t);
                      } catch (e) {
                        m.useDeprecatedSynchronousErrorHandling &&
                          ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                          (function (t) {
                            for (; t; ) {
                              var e = t,
                                n = e.closed,
                                r = e.destination,
                                i = e.isStopped;
                              if (n || i) return !1;
                              t = r && r instanceof T ? r : null;
                            }
                            return !0;
                          })(t)
                            ? t.error(e)
                            : console.warn(e);
                      }
                    },
                  },
                  {
                    key: "forEach",
                    value: function (t, e) {
                      var n = this;
                      return new (e = j(e))(function (e, r) {
                        var i;
                        i = n.subscribe(
                          function (e) {
                            try {
                              t(e);
                            } catch (n) {
                              r(n), i && i.unsubscribe();
                            }
                          },
                          r,
                          e
                        );
                      });
                    },
                  },
                  {
                    key: "_subscribe",
                    value: function (t) {
                      var e = this.source;
                      return e && e.subscribe(t);
                    },
                  },
                  {
                    key: I,
                    value: function () {
                      return this;
                    },
                  },
                  {
                    key: "pipe",
                    value: function () {
                      for (
                        var t = arguments.length, e = new Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      return 0 === e.length
                        ? this
                        : (0 === (r = e).length
                            ? R
                            : 1 === r.length
                            ? r[0]
                            : function (t) {
                                return r.reduce(function (t, e) {
                                  return e(t);
                                }, t);
                              })(this);
                      var r;
                    },
                  },
                  {
                    key: "toPromise",
                    value: function (t) {
                      var e = this;
                      return new (t = j(t))(function (t, n) {
                        var r;
                        e.subscribe(
                          function (t) {
                            return (r = t);
                          },
                          function (t) {
                            return n(t);
                          },
                          function () {
                            return t(r);
                          }
                        );
                      });
                    },
                  },
                ]),
                t
              );
            })()).create = function (t) {
              return new P(t);
            }),
            P);
        function j(t) {
          if ((t || (t = m.Promise || Promise), !t))
            throw new Error("no Promise impl found");
          return t;
        }
        var D,
          N = (function () {
            function t() {
              return (
                Error.call(this),
                (this.message = "object unsubscribed"),
                (this.name = "ObjectUnsubscribedError"),
                this
              );
            }
            return (t.prototype = Object.create(Error.prototype)), t;
          })(),
          U = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n),
                ((i = e.call(this)).subject = t),
                (i.subscriber = r),
                (i.closed = !1),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "unsubscribe",
                  value: function () {
                    if (!this.closed) {
                      this.closed = !0;
                      var t = this.subject,
                        e = t.observers;
                      if (
                        ((this.subject = null),
                        e && 0 !== e.length && !t.isStopped && !t.closed)
                      ) {
                        var n = e.indexOf(this.subscriber);
                        -1 !== n && e.splice(n, 1);
                      }
                    }
                  },
                },
              ]),
              n
            );
          })(E),
          M = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t) {
              var r;
              return p(this, n), ((r = e.call(this, t)).destination = t), r;
            }
            return n;
          })(T),
          F =
            (((D = (function (t) {
              s(n, t);
              var e = c(n);
              function n() {
                var t;
                return (
                  p(this, n),
                  ((t = e.call(this)).observers = []),
                  (t.closed = !1),
                  (t.isStopped = !1),
                  (t.hasError = !1),
                  (t.thrownError = null),
                  t
                );
              }
              return (
                g(n, [
                  {
                    key: A,
                    value: function () {
                      return new M(this);
                    },
                  },
                  {
                    key: "lift",
                    value: function (t) {
                      var e = new L(this, this);
                      return (e.operator = t), e;
                    },
                  },
                  {
                    key: "next",
                    value: function (t) {
                      if (this.closed) throw new N();
                      if (!this.isStopped)
                        for (
                          var e = this.observers,
                            n = e.length,
                            r = e.slice(),
                            i = 0;
                          i < n;
                          i++
                        )
                          r[i].next(t);
                    },
                  },
                  {
                    key: "error",
                    value: function (t) {
                      if (this.closed) throw new N();
                      (this.hasError = !0),
                        (this.thrownError = t),
                        (this.isStopped = !0);
                      for (
                        var e = this.observers,
                          n = e.length,
                          r = e.slice(),
                          i = 0;
                        i < n;
                        i++
                      )
                        r[i].error(t);
                      this.observers.length = 0;
                    },
                  },
                  {
                    key: "complete",
                    value: function () {
                      if (this.closed) throw new N();
                      this.isStopped = !0;
                      for (
                        var t = this.observers,
                          e = t.length,
                          n = t.slice(),
                          r = 0;
                        r < e;
                        r++
                      )
                        n[r].complete();
                      this.observers.length = 0;
                    },
                  },
                  {
                    key: "unsubscribe",
                    value: function () {
                      (this.isStopped = !0),
                        (this.closed = !0),
                        (this.observers = null);
                    },
                  },
                  {
                    key: "_trySubscribe",
                    value: function (t) {
                      if (this.closed) throw new N();
                      return u(v(n.prototype), "_trySubscribe", this).call(
                        this,
                        t
                      );
                    },
                  },
                  {
                    key: "_subscribe",
                    value: function (t) {
                      if (this.closed) throw new N();
                      return this.hasError
                        ? (t.error(this.thrownError), E.EMPTY)
                        : this.isStopped
                        ? (t.complete(), E.EMPTY)
                        : (this.observers.push(t), new U(this, t));
                    },
                  },
                  {
                    key: "asObservable",
                    value: function () {
                      var t = new V();
                      return (t.source = this), t;
                    },
                  },
                ]),
                n
              );
            })(V)).create = function (t, e) {
              return new L(t, e);
            }),
            D),
          L = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n),
                ((i = e.call(this)).destination = t),
                (i.source = r),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "next",
                  value: function (t) {
                    var e = this.destination;
                    e && e.next && e.next(t);
                  },
                },
                {
                  key: "error",
                  value: function (t) {
                    var e = this.destination;
                    e && e.error && this.destination.error(t);
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    var t = this.destination;
                    t && t.complete && this.destination.complete();
                  },
                },
                {
                  key: "_subscribe",
                  value: function (t) {
                    return this.source ? this.source.subscribe(t) : E.EMPTY;
                  },
                },
              ]),
              n
            );
          })(F);
        function H(t) {
          return t && "function" == typeof t.schedule;
        }
        function z(t, e) {
          return function (n) {
            if ("function" != typeof t)
              throw new TypeError(
                "argument is not a function. Are you looking for `mapTo()`?"
              );
            return n.lift(new B(t, e));
          };
        }
        var B = (function () {
            function t(e, n) {
              p(this, t), (this.project = e), (this.thisArg = n);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new q(t, this.project, this.thisArg));
                  },
                },
              ]),
              t
            );
          })(),
          q = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return (
                p(this, n),
                ((o = e.call(this, t)).project = r),
                (o.count = 0),
                (o.thisArg = i || f(o)),
                o
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    var e;
                    try {
                      e = this.project.call(this.thisArg, t, this.count++);
                    } catch (n) {
                      return void this.destination.error(n);
                    }
                    this.destination.next(e);
                  },
                },
              ]),
              n
            );
          })(T),
          G = function (t) {
            return function (e) {
              for (var n = 0, r = t.length; n < r && !e.closed; n++)
                e.next(t[n]);
              e.complete();
            };
          };
        var Z =
            "function" == typeof Symbol && Symbol.iterator
              ? Symbol.iterator
              : "@@iterator",
          W = function (t) {
            return t && "number" == typeof t.length && "function" != typeof t;
          };
        function Q(t) {
          return (
            !!t &&
            "function" != typeof t.subscribe &&
            "function" == typeof t.then
          );
        }
        var $ = function (t) {
          if (t && "function" == typeof t[I])
            return (
              (r = t),
              function (t) {
                var e = r[I]();
                if ("function" != typeof e.subscribe)
                  throw new TypeError(
                    "Provided object does not correctly implement Symbol.observable"
                  );
                return e.subscribe(t);
              }
            );
          if (W(t)) return G(t);
          if (Q(t))
            return (
              (n = t),
              function (t) {
                return (
                  n
                    .then(
                      function (e) {
                        t.closed || (t.next(e), t.complete());
                      },
                      function (e) {
                        return t.error(e);
                      }
                    )
                    .then(null, _),
                  t
                );
              }
            );
          if (t && "function" == typeof t[Z])
            return (
              (e = t),
              function (t) {
                for (var n = e[Z](); ; ) {
                  var r = void 0;
                  try {
                    r = n.next();
                  } catch (i) {
                    return t.error(i), t;
                  }
                  if (r.done) {
                    t.complete();
                    break;
                  }
                  if ((t.next(r.value), t.closed)) break;
                }
                return (
                  "function" == typeof n.return &&
                    t.add(function () {
                      n.return && n.return();
                    }),
                  t
                );
              }
            );
          var e,
            n,
            r,
            i = b(t) ? "an invalid object" : "'".concat(t, "'");
          throw new TypeError(
            "You provided ".concat(
              i,
              " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
            )
          );
        };
        function J(t, e) {
          return new V(function (n) {
            var r = new E(),
              i = 0;
            return (
              r.add(
                e.schedule(function () {
                  i !== t.length
                    ? (n.next(t[i++]), n.closed || r.add(this.schedule()))
                    : n.complete();
                })
              ),
              r
            );
          });
        }
        function K(t, e) {
          return e
            ? (function (t, e) {
                if (null != t) {
                  if (
                    (function (t) {
                      return t && "function" == typeof t[I];
                    })(t)
                  )
                    return (function (t, e) {
                      return new V(function (n) {
                        var r = new E();
                        return (
                          r.add(
                            e.schedule(function () {
                              var i = t[I]();
                              r.add(
                                i.subscribe({
                                  next: function (t) {
                                    r.add(
                                      e.schedule(function () {
                                        return n.next(t);
                                      })
                                    );
                                  },
                                  error: function (t) {
                                    r.add(
                                      e.schedule(function () {
                                        return n.error(t);
                                      })
                                    );
                                  },
                                  complete: function () {
                                    r.add(
                                      e.schedule(function () {
                                        return n.complete();
                                      })
                                    );
                                  },
                                })
                              );
                            })
                          ),
                          r
                        );
                      });
                    })(t, e);
                  if (Q(t))
                    return (function (t, e) {
                      return new V(function (n) {
                        var r = new E();
                        return (
                          r.add(
                            e.schedule(function () {
                              return t.then(
                                function (t) {
                                  r.add(
                                    e.schedule(function () {
                                      n.next(t),
                                        r.add(
                                          e.schedule(function () {
                                            return n.complete();
                                          })
                                        );
                                    })
                                  );
                                },
                                function (t) {
                                  r.add(
                                    e.schedule(function () {
                                      return n.error(t);
                                    })
                                  );
                                }
                              );
                            })
                          ),
                          r
                        );
                      });
                    })(t, e);
                  if (W(t)) return J(t, e);
                  if (
                    (function (t) {
                      return t && "function" == typeof t[Z];
                    })(t) ||
                    "string" == typeof t
                  )
                    return (function (t, e) {
                      if (!t) throw new Error("Iterable cannot be null");
                      return new V(function (n) {
                        var r,
                          i = new E();
                        return (
                          i.add(function () {
                            r && "function" == typeof r.return && r.return();
                          }),
                          i.add(
                            e.schedule(function () {
                              (r = t[Z]()),
                                i.add(
                                  e.schedule(function () {
                                    if (!n.closed) {
                                      var t, e;
                                      try {
                                        var i = r.next();
                                        (t = i.value), (e = i.done);
                                      } catch (o) {
                                        return void n.error(o);
                                      }
                                      e
                                        ? n.complete()
                                        : (n.next(t), this.schedule());
                                    }
                                  })
                                );
                            })
                          ),
                          i
                        );
                      });
                    })(t, e);
                }
                throw new TypeError(
                  ((null !== t && typeof t) || t) + " is not observable"
                );
              })(t, e)
            : t instanceof V
            ? t
            : new V($(t));
        }
        var Y = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t) {
              var r;
              return p(this, n), ((r = e.call(this)).parent = t), r;
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    this.parent.notifyNext(t);
                  },
                },
                {
                  key: "_error",
                  value: function (t) {
                    this.parent.notifyError(t), this.unsubscribe();
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    this.parent.notifyComplete(), this.unsubscribe();
                  },
                },
              ]),
              n
            );
          })(T),
          X = (function (t) {
            s(n, t);
            var e = c(n);
            function n() {
              return p(this, n), e.apply(this, arguments);
            }
            return (
              g(n, [
                {
                  key: "notifyNext",
                  value: function (t) {
                    this.destination.next(t);
                  },
                },
                {
                  key: "notifyError",
                  value: function (t) {
                    this.destination.error(t);
                  },
                },
                {
                  key: "notifyComplete",
                  value: function () {
                    this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(T);
        function tt(t, e) {
          if (!e.closed) {
            if (t instanceof V) return t.subscribe(e);
            var n;
            try {
              n = $(t)(e);
            } catch (r) {
              e.error(r);
            }
            return n;
          }
        }
        function et(t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Number.POSITIVE_INFINITY;
          return "function" == typeof e
            ? function (r) {
                return r.pipe(
                  et(function (n, r) {
                    return K(t(n, r)).pipe(
                      z(function (t, i) {
                        return e(n, t, r, i);
                      })
                    );
                  }, n)
                );
              }
            : ("number" == typeof e && (n = e),
              function (e) {
                return e.lift(new nt(t, n));
              });
        }
        var nt = (function () {
            function t(e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Number.POSITIVE_INFINITY;
              p(this, t), (this.project = e), (this.concurrent = n);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(
                      new rt(t, this.project, this.concurrent)
                    );
                  },
                },
              ]),
              t
            );
          })(),
          rt = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : Number.POSITIVE_INFINITY;
              return (
                p(this, n),
                ((i = e.call(this, t)).project = r),
                (i.concurrent = o),
                (i.hasCompleted = !1),
                (i.buffer = []),
                (i.active = 0),
                (i.index = 0),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    this.active < this.concurrent
                      ? this._tryNext(t)
                      : this.buffer.push(t);
                  },
                },
                {
                  key: "_tryNext",
                  value: function (t) {
                    var e,
                      n = this.index++;
                    try {
                      e = this.project(t, n);
                    } catch (r) {
                      return void this.destination.error(r);
                    }
                    this.active++, this._innerSub(e);
                  },
                },
                {
                  key: "_innerSub",
                  value: function (t) {
                    var e = new Y(this),
                      n = this.destination;
                    n.add(e);
                    var r = tt(t, e);
                    r !== e && n.add(r);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    (this.hasCompleted = !0),
                      0 === this.active &&
                        0 === this.buffer.length &&
                        this.destination.complete(),
                      this.unsubscribe();
                  },
                },
                {
                  key: "notifyNext",
                  value: function (t) {
                    this.destination.next(t);
                  },
                },
                {
                  key: "notifyComplete",
                  value: function () {
                    var t = this.buffer;
                    this.active--,
                      t.length > 0
                        ? this._next(t.shift())
                        : 0 === this.active &&
                          this.hasCompleted &&
                          this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(X);
        function it() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Number.POSITIVE_INFINITY;
          return et(R, t);
        }
        function ot(t, e) {
          return e ? J(t, e) : new V(G(t));
        }
        function at() {
          return function (t) {
            return t.lift(new st(t));
          };
        }
        var ut,
          st = (function () {
            function t(e) {
              p(this, t), (this.connectable = e);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    var n = this.connectable;
                    n._refCount++;
                    var r = new lt(t, n),
                      i = e.subscribe(r);
                    return r.closed || (r.connection = n.connect()), i;
                  },
                },
              ]),
              t
            );
          })(),
          lt = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return p(this, n), ((i = e.call(this, t)).connectable = r), i;
            }
            return (
              g(n, [
                {
                  key: "_unsubscribe",
                  value: function () {
                    var t = this.connectable;
                    if (t) {
                      this.connectable = null;
                      var e = t._refCount;
                      if (e <= 0) this.connection = null;
                      else if (((t._refCount = e - 1), e > 1))
                        this.connection = null;
                      else {
                        var n = this.connection,
                          r = t._connection;
                        (this.connection = null),
                          !r || (n && r !== n) || r.unsubscribe();
                      }
                    } else this.connection = null;
                  },
                },
              ]),
              n
            );
          })(T),
          ct = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n),
                ((i = e.call(this)).source = t),
                (i.subjectFactory = r),
                (i._refCount = 0),
                (i._isComplete = !1),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "_subscribe",
                  value: function (t) {
                    return this.getSubject().subscribe(t);
                  },
                },
                {
                  key: "getSubject",
                  value: function () {
                    var t = this._subject;
                    return (
                      (t && !t.isStopped) ||
                        (this._subject = this.subjectFactory()),
                      this._subject
                    );
                  },
                },
                {
                  key: "connect",
                  value: function () {
                    var t = this._connection;
                    return (
                      t ||
                        ((this._isComplete = !1),
                        (t = this._connection = new E()).add(
                          this.source.subscribe(new ft(this.getSubject(), this))
                        ),
                        t.closed && ((this._connection = null), (t = E.EMPTY))),
                      t
                    );
                  },
                },
                {
                  key: "refCount",
                  value: function () {
                    return at()(this);
                  },
                },
              ]),
              n
            );
          })(V),
          ht = {
            operator: { value: null },
            _refCount: { value: 0, writable: !0 },
            _subject: { value: null, writable: !0 },
            _connection: { value: null, writable: !0 },
            _subscribe: { value: (ut = ct.prototype)._subscribe },
            _isComplete: { value: ut._isComplete, writable: !0 },
            getSubject: { value: ut.getSubject },
            connect: { value: ut.connect },
            refCount: { value: ut.refCount },
          },
          ft = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return p(this, n), ((i = e.call(this, t)).connectable = r), i;
            }
            return (
              g(n, [
                {
                  key: "_error",
                  value: function (t) {
                    this._unsubscribe(),
                      u(v(n.prototype), "_error", this).call(this, t);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    (this.connectable._isComplete = !0),
                      this._unsubscribe(),
                      u(v(n.prototype), "_complete", this).call(this);
                  },
                },
                {
                  key: "_unsubscribe",
                  value: function () {
                    var t = this.connectable;
                    if (t) {
                      this.connectable = null;
                      var e = t._connection;
                      (t._refCount = 0),
                        (t._subject = null),
                        (t._connection = null),
                        e && e.unsubscribe();
                    }
                  },
                },
              ]),
              n
            );
          })(M);
        function dt() {
          return new F();
        }
        function vt(t) {
          for (var e in t) if (t[e] === vt) return e;
          throw Error("Could not find renamed property on target object.");
        }
        function pt(t, e) {
          for (var n in e)
            e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
        }
        function yt(t) {
          if ("string" == typeof t) return t;
          if (Array.isArray(t)) return "[" + t.map(yt).join(", ") + "]";
          if (null == t) return "" + t;
          if (t.overriddenName) return "".concat(t.overriddenName);
          if (t.name) return "".concat(t.name);
          var e = t.toString();
          if (null == e) return "" + e;
          var n = e.indexOf("\n");
          return -1 === n ? e : e.substring(0, n);
        }
        function gt(t, e) {
          return null == t || "" === t
            ? null === e
              ? ""
              : e
            : null == e || "" === e
            ? t
            : t + " " + e;
        }
        var mt = vt({ __forward_ref__: vt });
        function _t(t) {
          return (
            (t.__forward_ref__ = _t),
            (t.toString = function () {
              return yt(this());
            }),
            t
          );
        }
        function kt(t) {
          return wt(t) ? t() : t;
        }
        function wt(t) {
          return (
            "function" == typeof t &&
            t.hasOwnProperty(mt) &&
            t.__forward_ref__ === _t
          );
        }
        var bt = (function (t) {
          s(n, t);
          var e = c(n);
          function n(t, r) {
            var i;
            return (
              p(this, n),
              ((i = e.call(
                this,
                (function (t, e) {
                  return "".concat(t ? "NG0".concat(t, ": ") : "").concat(e);
                })(t, r)
              )).code = t),
              i
            );
          }
          return n;
        })(o(Error));
        function Ct(t) {
          return "string" == typeof t ? t : null == t ? "" : String(t);
        }
        function St(t) {
          return "function" == typeof t
            ? t.name || t.toString()
            : "object" == typeof t && null != t && "function" == typeof t.type
            ? t.type.name || t.type.toString()
            : Ct(t);
        }
        function Et(t, e) {
          var n = e ? " in ".concat(e) : "";
          throw new bt(
            "201",
            "No provider for ".concat(St(t), " found").concat(n)
          );
        }
        function xt(t) {
          return {
            token: t.token,
            providedIn: t.providedIn || null,
            factory: t.factory,
            value: void 0,
          };
        }
        function At(t) {
          return { providers: t.providers || [], imports: t.imports || [] };
        }
        function Tt(t) {
          return Ot(t, Pt) || Ot(t, jt);
        }
        function Ot(t, e) {
          return t.hasOwnProperty(e) ? t[e] : null;
        }
        function It(t) {
          return t && (t.hasOwnProperty(Vt) || t.hasOwnProperty(Dt))
            ? t[Vt]
            : null;
        }
        var Rt,
          Pt = vt({ "\u0275prov": vt }),
          Vt = vt({ "\u0275inj": vt }),
          jt = vt({ ngInjectableDef: vt }),
          Dt = vt({ ngInjectorDef: vt }),
          Nt = (function (t) {
            return (
              (t[(t.Default = 0)] = "Default"),
              (t[(t.Host = 1)] = "Host"),
              (t[(t.Self = 2)] = "Self"),
              (t[(t.SkipSelf = 4)] = "SkipSelf"),
              (t[(t.Optional = 8)] = "Optional"),
              t
            );
          })({});
        function Ut(t) {
          var e = Rt;
          return (Rt = t), e;
        }
        function Mt(t, e, n) {
          var r = Tt(t);
          return r && "root" == r.providedIn
            ? void 0 === r.value
              ? (r.value = r.factory())
              : r.value
            : n & Nt.Optional
            ? null
            : void 0 !== e
            ? e
            : void Et(yt(t), "Injector");
        }
        function Ft(t) {
          return { toString: t }.toString();
        }
        var Lt = (function (t) {
            return (
              (t[(t.OnPush = 0)] = "OnPush"),
              (t[(t.Default = 1)] = "Default"),
              t
            );
          })({}),
          Ht = (function (t) {
            return (
              (t[(t.Emulated = 0)] = "Emulated"),
              (t[(t.None = 2)] = "None"),
              (t[(t.ShadowDom = 3)] = "ShadowDom"),
              t
            );
          })({}),
          zt = "undefined" != typeof globalThis && globalThis,
          Bt = "undefined" != typeof window && window,
          qt =
            "undefined" != typeof self &&
            "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            self,
          Gt = "undefined" != typeof global && global,
          Zt = zt || Gt || Bt || qt,
          Wt = {},
          Qt = [],
          $t = [],
          Jt = vt({ "\u0275cmp": vt }),
          Kt = vt({ "\u0275dir": vt }),
          Yt = vt({ "\u0275pipe": vt }),
          Xt = vt({ "\u0275mod": vt }),
          te = vt({ "\u0275loc": vt }),
          ee = vt({ "\u0275fac": vt }),
          ne = vt({ __NG_ELEMENT_ID__: vt }),
          re = 0;
        function ie(t) {
          return Ft(function () {
            var e = {},
              n = {
                type: t.type,
                providersResolver: null,
                decls: t.decls,
                vars: t.vars,
                factory: null,
                template: t.template || null,
                consts: t.consts || null,
                ngContentSelectors: t.ngContentSelectors,
                hostBindings: t.hostBindings || null,
                hostVars: t.hostVars || 0,
                hostAttrs: t.hostAttrs || null,
                contentQueries: t.contentQueries || null,
                declaredInputs: e,
                inputs: null,
                outputs: null,
                exportAs: t.exportAs || null,
                onPush: t.changeDetection === Lt.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                selectors: t.selectors || $t,
                viewQuery: t.viewQuery || null,
                features: t.features || null,
                data: t.data || {},
                encapsulation: t.encapsulation || Ht.Emulated,
                id: "c",
                styles: t.styles || $t,
                _: null,
                setInput: null,
                schemas: t.schemas || null,
                tView: null,
              },
              r = t.directives,
              i = t.features,
              o = t.pipes;
            return (
              (n.id += re++),
              (n.inputs = le(t.inputs, e)),
              (n.outputs = le(t.outputs)),
              i &&
                i.forEach(function (t) {
                  return t(n);
                }),
              (n.directiveDefs = r
                ? function () {
                    return ("function" == typeof r ? r() : r).map(oe);
                  }
                : null),
              (n.pipeDefs = o
                ? function () {
                    return ("function" == typeof o ? o() : o).map(ae);
                  }
                : null),
              n
            );
          });
        }
        function oe(t) {
          return (
            he(t) ||
            (function (t) {
              return t[Kt] || null;
            })(t)
          );
        }
        function ae(t) {
          return (function (t) {
            return t[Yt] || null;
          })(t);
        }
        var ue = {};
        function se(t) {
          var e = {
            type: t.type,
            bootstrap: t.bootstrap || $t,
            declarations: t.declarations || $t,
            imports: t.imports || $t,
            exports: t.exports || $t,
            transitiveCompileScopes: null,
            schemas: t.schemas || null,
            id: t.id || null,
          };
          return (
            null != t.id &&
              Ft(function () {
                ue[t.id] = t.type;
              }),
            e
          );
        }
        function le(t, e) {
          if (null == t) return Wt;
          var n = {};
          for (var r in t)
            if (t.hasOwnProperty(r)) {
              var i = t[r],
                o = i;
              Array.isArray(i) && ((o = i[1]), (i = i[0])),
                (n[i] = r),
                e && (e[i] = o);
            }
          return n;
        }
        var ce = ie;
        function he(t) {
          return t[Jt] || null;
        }
        function fe(t, e) {
          var n = t[Xt] || null;
          if (!n && !0 === e)
            throw new Error(
              "Type ".concat(yt(t), " does not have '\u0275mod' property.")
            );
          return n;
        }
        function de(t) {
          return Array.isArray(t) && "object" == typeof t[1];
        }
        function ve(t) {
          return Array.isArray(t) && !0 === t[1];
        }
        function pe(t) {
          return 0 != (8 & t.flags);
        }
        function ye(t) {
          return 2 == (2 & t.flags);
        }
        function ge(t) {
          return 1 == (1 & t.flags);
        }
        function me(t) {
          return null !== t.template;
        }
        function _e(t, e) {
          return t.hasOwnProperty(ee) ? t[ee] : null;
        }
        var ke,
          we = (function () {
            function t(e, n, r) {
              p(this, t),
                (this.previousValue = e),
                (this.currentValue = n),
                (this.firstChange = r);
            }
            return (
              g(t, [
                {
                  key: "isFirstChange",
                  value: function () {
                    return this.firstChange;
                  },
                },
              ]),
              t
            );
          })();
        function be() {
          return Ce;
        }
        function Ce(t) {
          return t.type.prototype.ngOnChanges && (t.setInput = Ee), Se;
        }
        function Se() {
          var t = xe(this),
            e = null == t ? void 0 : t.current;
          if (e) {
            var n = t.previous;
            if (n === Wt) t.previous = e;
            else for (var r in e) n[r] = e[r];
            (t.current = null), this.ngOnChanges(e);
          }
        }
        function Ee(t, e, n, r) {
          var i =
              xe(t) ||
              (function (t, e) {
                return (t.__ngSimpleChanges__ = e);
              })(t, { previous: Wt, current: null }),
            o = i.current || (i.current = {}),
            a = i.previous,
            u = this.declaredInputs[n],
            s = a[u];
          (o[u] = new we(s && s.currentValue, e, a === Wt)), (t[r] = e);
        }
        function xe(t) {
          return t.__ngSimpleChanges__ || null;
        }
        function Ae(t) {
          return !!t.listen;
        }
        be.ngInherit = !0;
        var Te = {
          createRenderer: function (t, e) {
            return void 0 !== ke
              ? ke
              : "undefined" != typeof document
              ? document
              : void 0;
          },
        };
        function Oe(t) {
          for (; Array.isArray(t); ) t = t[0];
          return t;
        }
        function Ie(t, e) {
          return Oe(e[t]);
        }
        function Re(t, e) {
          return Oe(e[t.index]);
        }
        function Pe(t, e) {
          return t.data[e];
        }
        function Ve(t, e) {
          var n = e[t];
          return de(n) ? n : n[0];
        }
        function je(t) {
          var e = (function (t) {
            return t.__ngContext__ || null;
          })(t);
          return e ? (Array.isArray(e) ? e : e.lView) : null;
        }
        function De(t) {
          return 128 == (128 & t[2]);
        }
        function Ne(t, e) {
          return null == e ? null : t[e];
        }
        function Ue(t) {
          t[18] = 0;
        }
        function Me(t, e) {
          t[5] += e;
          for (
            var n = t, r = t[3];
            null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

          )
            (r[5] += e), (n = r), (r = r[3]);
        }
        var Fe = {
          lFrame: rn(null),
          bindingsEnabled: !0,
          isInCheckNoChangesMode: !1,
        };
        function Le() {
          return Fe.bindingsEnabled;
        }
        function He() {
          return Fe.lFrame.lView;
        }
        function ze() {
          return Fe.lFrame.tView;
        }
        function Be(t) {
          Fe.lFrame.contextLView = t;
        }
        function qe() {
          for (var t = Ge(); null !== t && 64 === t.type; ) t = t.parent;
          return t;
        }
        function Ge() {
          return Fe.lFrame.currentTNode;
        }
        function Ze(t, e) {
          var n = Fe.lFrame;
          (n.currentTNode = t), (n.isParent = e);
        }
        function We() {
          return Fe.lFrame.isParent;
        }
        function Qe() {
          return Fe.isInCheckNoChangesMode;
        }
        function $e(t) {
          Fe.isInCheckNoChangesMode = t;
        }
        function Je() {
          return Fe.lFrame.bindingIndex++;
        }
        function Ke(t) {
          Fe.lFrame.currentDirectiveIndex = t;
        }
        function Ye(t) {
          Fe.lFrame.currentQueryIndex = t;
        }
        function Xe(t) {
          var e = t[1];
          return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null;
        }
        function tn(t, e, n) {
          if (n & Nt.SkipSelf) {
            for (
              var r = e, i = t;
              !(
                null !== (r = r.parent) ||
                n & Nt.Host ||
                ((r = Xe(i)), null === r) ||
                ((i = i[15]), 10 & r.type)
              );

            );
            if (null === r) return !1;
            (e = r), (t = i);
          }
          var o = (Fe.lFrame = nn());
          return (o.currentTNode = e), (o.lView = t), !0;
        }
        function en(t) {
          var e = nn(),
            n = t[1];
          (Fe.lFrame = e),
            (e.currentTNode = n.firstChild),
            (e.lView = t),
            (e.tView = n),
            (e.contextLView = t),
            (e.bindingIndex = n.bindingStartIndex),
            (e.inI18n = !1);
        }
        function nn() {
          var t = Fe.lFrame,
            e = null === t ? null : t.child;
          return null === e ? rn(t) : e;
        }
        function rn(t) {
          var e = {
            currentTNode: null,
            isParent: !0,
            lView: null,
            tView: null,
            selectedIndex: -1,
            contextLView: null,
            elementDepthCount: 0,
            currentNamespace: null,
            currentDirectiveIndex: -1,
            bindingRootIndex: -1,
            bindingIndex: -1,
            currentQueryIndex: 0,
            parent: t,
            child: null,
            inI18n: !1,
          };
          return null !== t && (t.child = e), e;
        }
        function on() {
          var t = Fe.lFrame;
          return (
            (Fe.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t
          );
        }
        var an = on;
        function un() {
          var t = on();
          (t.isParent = !0),
            (t.tView = null),
            (t.selectedIndex = -1),
            (t.contextLView = null),
            (t.elementDepthCount = 0),
            (t.currentDirectiveIndex = -1),
            (t.currentNamespace = null),
            (t.bindingRootIndex = -1),
            (t.bindingIndex = -1),
            (t.currentQueryIndex = 0);
        }
        function sn() {
          return Fe.lFrame.selectedIndex;
        }
        function ln(t) {
          Fe.lFrame.selectedIndex = t;
        }
        function cn() {
          var t = Fe.lFrame;
          return Pe(t.tView, t.selectedIndex);
        }
        function hn(t, e) {
          for (var n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
            var i = t.data[n].type.prototype,
              o = i.ngAfterContentInit,
              a = i.ngAfterContentChecked,
              u = i.ngAfterViewInit,
              s = i.ngAfterViewChecked,
              l = i.ngOnDestroy;
            o && (t.contentHooks || (t.contentHooks = [])).push(-n, o),
              a &&
                ((t.contentHooks || (t.contentHooks = [])).push(n, a),
                (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, a)),
              u && (t.viewHooks || (t.viewHooks = [])).push(-n, u),
              s &&
                ((t.viewHooks || (t.viewHooks = [])).push(n, s),
                (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, s)),
              null != l && (t.destroyHooks || (t.destroyHooks = [])).push(n, l);
          }
        }
        function fn(t, e, n) {
          pn(t, e, 3, n);
        }
        function dn(t, e, n, r) {
          (3 & t[2]) === n && pn(t, e, n, r);
        }
        function vn(t, e) {
          var n = t[2];
          (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
        }
        function pn(t, e, n, r) {
          for (
            var i = null != r ? r : -1,
              o = e.length - 1,
              a = 0,
              u = void 0 !== r ? 65535 & t[18] : 0;
            u < o;
            u++
          )
            if ("number" == typeof e[u + 1]) {
              if (((a = e[u]), null != r && a >= r)) break;
            } else
              e[u] < 0 && (t[18] += 65536),
                (a < i || -1 == i) &&
                  (yn(t, n, e, u), (t[18] = (4294901760 & t[18]) + u + 2)),
                u++;
        }
        function yn(t, e, n, r) {
          var i = n[r] < 0,
            o = n[r + 1],
            a = t[i ? -n[r] : n[r]];
          if (i) {
            if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
              t[2] += 2048;
              try {
                o.call(a);
              } finally {
              }
            }
          } else
            try {
              o.call(a);
            } finally {
            }
        }
        var gn = function t(e, n, r) {
          p(this, t),
            (this.factory = e),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        };
        function mn(t, e, n) {
          for (var r = Ae(t), i = 0; i < n.length; ) {
            var o = n[i];
            if ("number" == typeof o) {
              if (0 !== o) break;
              i++;
              var a = n[i++],
                u = n[i++],
                s = n[i++];
              r ? t.setAttribute(e, u, s, a) : e.setAttributeNS(a, u, s);
            } else {
              var l = o,
                c = n[++i];
              kn(l)
                ? r && t.setProperty(e, l, c)
                : r
                ? t.setAttribute(e, l, c)
                : e.setAttribute(l, c),
                i++;
            }
          }
          return i;
        }
        function _n(t) {
          return 3 === t || 4 === t || 6 === t;
        }
        function kn(t) {
          return 64 === t.charCodeAt(0);
        }
        function wn(t, e) {
          if (null === e || 0 === e.length);
          else if (null === t || 0 === t.length) t = e.slice();
          else
            for (var n = -1, r = 0; r < e.length; r++) {
              var i = e[r];
              "number" == typeof i
                ? (n = i)
                : 0 === n ||
                  bn(t, n, i, null, -1 === n || 2 === n ? e[++r] : null);
            }
          return t;
        }
        function bn(t, e, n, r, i) {
          var o = 0,
            a = t.length;
          if (-1 === e) a = -1;
          else
            for (; o < t.length; ) {
              var u = t[o++];
              if ("number" == typeof u) {
                if (u === e) {
                  a = -1;
                  break;
                }
                if (u > e) {
                  a = o - 1;
                  break;
                }
              }
            }
          for (; o < t.length; ) {
            var s = t[o];
            if ("number" == typeof s) break;
            if (s === n) {
              if (null === r) return void (null !== i && (t[o + 1] = i));
              if (r === t[o + 1]) return void (t[o + 2] = i);
            }
            o++, null !== r && o++, null !== i && o++;
          }
          -1 !== a && (t.splice(a, 0, e), (o = a + 1)),
            t.splice(o++, 0, n),
            null !== r && t.splice(o++, 0, r),
            null !== i && t.splice(o++, 0, i);
        }
        function Cn(t) {
          return -1 !== t;
        }
        function Sn(t) {
          return 32767 & t;
        }
        function En(t, e) {
          for (var n = t >> 16, r = e; n > 0; ) (r = r[15]), n--;
          return r;
        }
        var xn = !0;
        function An(t) {
          var e = xn;
          return (xn = t), e;
        }
        var Tn = 0;
        function On(t, e) {
          var n = Rn(t, e);
          if (-1 !== n) return n;
          var r = e[1];
          r.firstCreatePass &&
            ((t.injectorIndex = e.length),
            In(r.data, t),
            In(e, null),
            In(r.blueprint, null));
          var i = Pn(t, e),
            o = t.injectorIndex;
          if (Cn(i))
            for (var a = Sn(i), u = En(i, e), s = u[1].data, l = 0; l < 8; l++)
              e[o + l] = u[a + l] | s[a + l];
          return (e[o + 8] = i), o;
        }
        function In(t, e) {
          t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
        }
        function Rn(t, e) {
          return -1 === t.injectorIndex ||
            (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
            null === e[t.injectorIndex + 8]
            ? -1
            : t.injectorIndex;
        }
        function Pn(t, e) {
          if (t.parent && -1 !== t.parent.injectorIndex)
            return t.parent.injectorIndex;
          for (var n = 0, r = null, i = e; null !== i; ) {
            var o = i[1],
              a = o.type;
            if (null === (r = 2 === a ? o.declTNode : 1 === a ? i[6] : null))
              return -1;
            if ((n++, (i = i[15]), -1 !== r.injectorIndex))
              return r.injectorIndex | (n << 16);
          }
          return -1;
        }
        function Vn(t, e, n) {
          !(function (t, e, n) {
            var r;
            "string" == typeof n
              ? (r = n.charCodeAt(0) || 0)
              : n.hasOwnProperty(ne) && (r = n[ne]),
              null == r && (r = n[ne] = Tn++);
            var i = 255 & r;
            e.data[t + (i >> 5)] |= 1 << i;
          })(t, e, n);
        }
        function jn(t, e, n) {
          if (n & Nt.Optional) return t;
          Et(e, "NodeInjector");
        }
        function Dn(t, e, n, r) {
          if (
            (n & Nt.Optional && void 0 === r && (r = null),
            0 == (n & (Nt.Self | Nt.Host)))
          ) {
            var i = t[9],
              o = Ut(void 0);
            try {
              return i
                ? i.get(e, r, n & Nt.Optional)
                : Mt(e, r, n & Nt.Optional);
            } finally {
              Ut(o);
            }
          }
          return jn(r, e, n);
        }
        function Nn(t, e, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : Nt.Default,
            i = arguments.length > 4 ? arguments[4] : void 0;
          if (null !== t) {
            var o = (function (t) {
              if ("string" == typeof t) return t.charCodeAt(0) || 0;
              var e = t.hasOwnProperty(ne) ? t[ne] : void 0;
              return "number" == typeof e ? (e >= 0 ? 255 & e : Mn) : e;
            })(n);
            if ("function" == typeof o) {
              if (!tn(e, t, r))
                return r & Nt.Host ? jn(i, n, r) : Dn(e, n, r, i);
              try {
                var a = o();
                if (null != a || r & Nt.Optional) return a;
                Et(n);
              } finally {
                an();
              }
            } else if ("number" == typeof o) {
              var u = null,
                s = Rn(t, e),
                l = -1,
                c = r & Nt.Host ? e[16][6] : null;
              for (
                (-1 === s || r & Nt.SkipSelf) &&
                (-1 !== (l = -1 === s ? Pn(t, e) : e[s + 8]) && zn(r, !1)
                  ? ((u = e[1]), (s = Sn(l)), (e = En(l, e)))
                  : (s = -1));
                -1 !== s;

              ) {
                var h = e[1];
                if (Hn(o, s, h.data)) {
                  var f = Fn(s, e, n, u, r, c);
                  if (f !== Un) return f;
                }
                -1 !== (l = e[s + 8]) &&
                zn(r, e[1].data[s + 8] === c) &&
                Hn(o, s, e)
                  ? ((u = h), (s = Sn(l)), (e = En(l, e)))
                  : (s = -1);
              }
            }
          }
          return Dn(e, n, r, i);
        }
        var Un = {};
        function Mn() {
          return new Bn(qe(), He());
        }
        function Fn(t, e, n, r, i, o) {
          var a = e[1],
            u = a.data[t + 8],
            s = (function (t, e, n, r, i) {
              for (
                var o = t.providerIndexes,
                  a = e.data,
                  u = 1048575 & o,
                  s = t.directiveStart,
                  l = o >> 20,
                  c = i ? u + l : t.directiveEnd,
                  h = r ? u : u + l;
                h < c;
                h++
              ) {
                var f = a[h];
                if ((h < s && n === f) || (h >= s && f.type === n)) return h;
              }
              if (i) {
                var d = a[s];
                if (d && me(d) && d.type === n) return s;
              }
              return null;
            })(
              u,
              a,
              n,
              null == r ? ye(u) && xn : r != a && 0 != (3 & u.type),
              i & Nt.Host && o === u
            );
          return null !== s ? Ln(e, a, s, u) : Un;
        }
        function Ln(t, e, n, r) {
          var i = t[n],
            o = e.data;
          if (i instanceof gn) {
            var a = i;
            a.resolving &&
              (function (t, e) {
                throw new bt(
                  "200",
                  "Circular dependency in DI detected for ".concat(t)
                );
              })(St(o[n]));
            var u = An(a.canSeeViewProviders);
            a.resolving = !0;
            var s = a.injectImpl ? Ut(a.injectImpl) : null;
            tn(t, r, Nt.Default);
            try {
              (i = t[n] = a.factory(void 0, o, t, r)),
                e.firstCreatePass &&
                  n >= r.directiveStart &&
                  (function (t, e, n) {
                    var r = e.type.prototype,
                      i = r.ngOnChanges,
                      o = r.ngOnInit,
                      a = r.ngDoCheck;
                    if (i) {
                      var u = Ce(e);
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(t, u),
                        (
                          n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                        ).push(t, u);
                    }
                    o &&
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(
                        0 - t,
                        o
                      ),
                      a &&
                        ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, a),
                        (
                          n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                        ).push(t, a));
                  })(n, o[n], e);
            } finally {
              null !== s && Ut(s), An(u), (a.resolving = !1), an();
            }
          }
          return i;
        }
        function Hn(t, e, n) {
          return !!(n[e + (t >> 5)] & (1 << t));
        }
        function zn(t, e) {
          return !(t & Nt.Self || (t & Nt.Host && e));
        }
        var Bn = (function () {
          function t(e, n) {
            p(this, t), (this._tNode = e), (this._lView = n);
          }
          return (
            g(t, [
              {
                key: "get",
                value: function (t, e) {
                  return Nn(this._tNode, this._lView, t, void 0, e);
                },
              },
            ]),
            t
          );
        })();
        function qn(t) {
          return wt(t)
            ? function () {
                var e = qn(kt(t));
                return e && e();
              }
            : _e(t);
        }
        function Gn(t, e, n) {
          return Ft(function () {
            var r = (function (t) {
              return function () {
                if (t) {
                  var e = t.apply(void 0, arguments);
                  for (var n in e) this[n] = e[n];
                }
              };
            })(e);
            function i() {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              if (this instanceof i) return r.apply(this, e), this;
              var o = a(i, e);
              return (u.annotation = o), u;
              function u(t, e, n) {
                for (
                  var r = t.hasOwnProperty("__parameters__")
                    ? t.__parameters__
                    : Object.defineProperty(t, "__parameters__", { value: [] })
                        .__parameters__;
                  r.length <= n;

                )
                  r.push(null);
                return (r[n] = r[n] || []).push(o), t;
              }
            }
            return (
              n && (i.prototype = Object.create(n.prototype)),
              (i.prototype.ngMetadataName = t),
              (i.annotationCls = i),
              i
            );
          });
        }
        var Zn = (function () {
            function t(e, n) {
              p(this, t),
                (this._desc = e),
                (this.ngMetadataName = "InjectionToken"),
                (this.ɵprov = void 0),
                "number" == typeof n
                  ? (this.__NG_ELEMENT_ID__ = n)
                  : void 0 !== n &&
                    (this.ɵprov = xt({
                      token: this,
                      providedIn: n.providedIn || "root",
                      factory: n.factory,
                    }));
            }
            return (
              g(t, [
                {
                  key: "toString",
                  value: function () {
                    return "InjectionToken ".concat(this._desc);
                  },
                },
              ]),
              t
            );
          })(),
          Wn = new Zn("AnalyzeForEntryComponents"),
          Qn = Function;
        function $n(t, e) {
          t.forEach(function (t) {
            return Array.isArray(t) ? $n(t, e) : e(t);
          });
        }
        function Jn(t, e, n) {
          e >= t.length ? t.push(n) : t.splice(e, 0, n);
        }
        function Kn(t, e) {
          return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
        }
        function Yn(t, e) {
          var n = Xn(t, e);
          if (n >= 0) return t[1 | n];
        }
        function Xn(t, e) {
          return (function (t, e, n) {
            for (var r = 0, i = t.length >> 1; i !== r; ) {
              var o = r + ((i - r) >> 1),
                a = t[o << 1];
              if (e === a) return o << 1;
              a > e ? (i = o) : (r = o + 1);
            }
            return ~(i << 1);
          })(t, e);
        }
        var tr,
          er = {},
          nr = /\n/gm,
          rr = vt({ provide: String, useValue: vt });
        function ir(t) {
          var e = tr;
          return (tr = t), e;
        }
        function or(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Nt.Default;
          if (void 0 === tr)
            throw new Error(
              "inject() must be called from an injection context"
            );
          return null === tr
            ? Mt(t, void 0, e)
            : tr.get(t, e & Nt.Optional ? null : void 0, e);
        }
        function ar(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Nt.Default;
          return (Rt || or)(kt(t), e);
        }
        function ur(t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var r = kt(t[n]);
            if (Array.isArray(r)) {
              if (0 === r.length)
                throw new Error("Arguments array must have arguments.");
              for (var i = void 0, o = Nt.Default, a = 0; a < r.length; a++) {
                var u = r[a],
                  s = u.__NG_DI_FLAG__;
                "number" == typeof s
                  ? -1 === s
                    ? (i = u.token)
                    : (o |= s)
                  : (i = u);
              }
              e.push(ar(i, o));
            } else e.push(ar(r));
          }
          return e;
        }
        function sr(t, e) {
          return (t.__NG_DI_FLAG__ = e), (t.prototype.__NG_DI_FLAG__ = e), t;
        }
        var lr = sr(
            Gn("Inject", function (t) {
              return { token: t };
            }),
            -1
          ),
          cr = sr(Gn("Optional"), 8),
          hr = sr(Gn("SkipSelf"), 4),
          fr = (function () {
            function t(e) {
              p(this, t), (this.changingThisBreaksApplicationSecurity = e);
            }
            return (
              g(t, [
                {
                  key: "toString",
                  value: function () {
                    return "SafeValue must use [property]=binding: ".concat(
                      this.changingThisBreaksApplicationSecurity,
                      " (see https://g.co/ng/security#xss)"
                    );
                  },
                },
              ]),
              t
            );
          })();
        function dr(t) {
          return t instanceof fr ? t.changingThisBreaksApplicationSecurity : t;
        }
        var vr =
            /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
          pr =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
          yr = (function (t) {
            return (
              (t[(t.NONE = 0)] = "NONE"),
              (t[(t.HTML = 1)] = "HTML"),
              (t[(t.STYLE = 2)] = "STYLE"),
              (t[(t.SCRIPT = 3)] = "SCRIPT"),
              (t[(t.URL = 4)] = "URL"),
              (t[(t.RESOURCE_URL = 5)] = "RESOURCE_URL"),
              t
            );
          })({});
        function gr(t) {
          var e,
            n,
            r = (e = He()) && e[12];
          return r
            ? r.sanitize(yr.URL, t) || ""
            : (function (t, e) {
                var n = (function (t) {
                  return (t instanceof fr && t.getTypeName()) || null;
                })(t);
                if (null != n && n !== e) {
                  if ("ResourceURL" === n) return !0;
                  throw new Error(
                    "Required a safe "
                      .concat(e, ", got a ")
                      .concat(n, " (see https://g.co/ng/security#xss)")
                  );
                }
                return n === e;
              })(t, "URL")
            ? dr(t)
            : ((n = Ct(t)),
              (n = String(n)).match(vr) || n.match(pr) ? n : "unsafe:" + n);
        }
        function mr(t) {
          return t.ngDebugContext;
        }
        function _r(t) {
          return t.ngOriginalError;
        }
        function kr(t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          t.error.apply(t, n);
        }
        var wr = (function () {
          function t() {
            p(this, t), (this._console = console);
          }
          return (
            g(t, [
              {
                key: "handleError",
                value: function (t) {
                  var e = this._findOriginalError(t),
                    n = this._findContext(t),
                    r = (function (t) {
                      return t.ngErrorLogger || kr;
                    })(t);
                  r(this._console, "ERROR", t),
                    e && r(this._console, "ORIGINAL ERROR", e),
                    n && r(this._console, "ERROR CONTEXT", n);
                },
              },
              {
                key: "_findContext",
                value: function (t) {
                  return t ? (mr(t) ? mr(t) : this._findContext(_r(t))) : null;
                },
              },
              {
                key: "_findOriginalError",
                value: function (t) {
                  for (var e = _r(t); e && _r(e); ) e = _r(e);
                  return e;
                },
              },
            ]),
            t
          );
        })();
        function br(t, e) {
          t.__ngContext__ = e;
        }
        var Cr = (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Zt);
        function Sr(t) {
          return t instanceof Function ? t() : t;
        }
        var Er = (function (t) {
          return (
            (t[(t.Important = 1)] = "Important"),
            (t[(t.DashCase = 2)] = "DashCase"),
            t
          );
        })({});
        function xr(t, e) {
          return (void 0)(t, e);
        }
        function Ar(t) {
          var e = t[3];
          return ve(e) ? e[3] : e;
        }
        function Tr(t) {
          return Ir(t[13]);
        }
        function Or(t) {
          return Ir(t[4]);
        }
        function Ir(t) {
          for (; null !== t && !ve(t); ) t = t[4];
          return t;
        }
        function Rr(t, e, n, r, i) {
          if (null != r) {
            var o,
              a = !1;
            ve(r) ? (o = r) : de(r) && ((a = !0), (r = r[0]));
            var u = Oe(r);
            0 === t && null !== n
              ? null == i
                ? Mr(e, n, u)
                : Ur(e, n, u, i || null, !0)
              : 1 === t && null !== n
              ? Ur(e, n, u, i || null, !0)
              : 2 === t
              ? (function (t, e, n) {
                  var r = Lr(t, e);
                  r &&
                    (function (t, e, n, r) {
                      Ae(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                    })(t, r, e, n);
                })(e, u, a)
              : 3 === t && e.destroyNode(u),
              null != o &&
                (function (t, e, n, r, i) {
                  var o = n[7];
                  o !== Oe(n) && Rr(e, t, r, o, i);
                  for (var a = 10; a < n.length; a++) {
                    var u = n[a];
                    Zr(u[1], u, t, e, r, o);
                  }
                })(e, t, o, n, i);
          }
        }
        function Pr(t, e, n) {
          return Ae(t)
            ? t.createElement(e, n)
            : null === n
            ? t.createElement(e)
            : t.createElementNS(n, e);
        }
        function Vr(t, e) {
          var n = t[9],
            r = n.indexOf(e),
            i = e[3];
          1024 & e[2] && ((e[2] &= -1025), Me(i, -1)), n.splice(r, 1);
        }
        function jr(t, e) {
          if (!(t.length <= 10)) {
            var n,
              r = 10 + e,
              i = t[r];
            if (i) {
              var o = i[17];
              null !== o && o !== t && Vr(o, i), e > 0 && (t[r - 1][4] = i[4]);
              var a = Kn(t, 10 + e);
              Zr(i[1], (n = i), n[11], 2, null, null),
                (n[0] = null),
                (n[6] = null);
              var u = a[19];
              null !== u && u.detachView(a[1]),
                (i[3] = null),
                (i[4] = null),
                (i[2] &= -129);
            }
            return i;
          }
        }
        function Dr(t, e) {
          if (!(256 & e[2])) {
            var n = e[11];
            Ae(n) && n.destroyNode && Zr(t, e, n, 3, null, null),
              (function (t) {
                var e = t[13];
                if (!e) return Nr(t[1], t);
                for (; e; ) {
                  var n = null;
                  if (de(e)) n = e[13];
                  else {
                    var r = e[10];
                    r && (n = r);
                  }
                  if (!n) {
                    for (; e && !e[4] && e !== t; )
                      de(e) && Nr(e[1], e), (e = e[3]);
                    null === e && (e = t),
                      de(e) && Nr(e[1], e),
                      (n = e && e[4]);
                  }
                  e = n;
                }
              })(e);
          }
        }
        function Nr(t, e) {
          if (!(256 & e[2])) {
            (e[2] &= -129),
              (e[2] |= 256),
              (function (t, e) {
                var n;
                if (null != t && null != (n = t.destroyHooks))
                  for (var r = 0; r < n.length; r += 2) {
                    var i = e[n[r]];
                    if (!(i instanceof gn)) {
                      var o = n[r + 1];
                      if (Array.isArray(o))
                        for (var a = 0; a < o.length; a += 2)
                          o[a + 1].call(i[o[a]]);
                      else o.call(i);
                    }
                  }
              })(t, e),
              (function (t, e) {
                var n = t.cleanup,
                  r = e[7],
                  i = -1;
                if (null !== n)
                  for (var o = 0; o < n.length - 1; o += 2)
                    if ("string" == typeof n[o]) {
                      var a = n[o + 1],
                        u = "function" == typeof a ? a(e) : Oe(e[a]),
                        s = r[(i = n[o + 2])],
                        l = n[o + 3];
                      "boolean" == typeof l
                        ? u.removeEventListener(n[o], s, l)
                        : l >= 0
                        ? r[(i = l)]()
                        : r[(i = -l)].unsubscribe(),
                        (o += 2);
                    } else {
                      var c = r[(i = n[o + 1])];
                      n[o].call(c);
                    }
                if (null !== r) {
                  for (var h = i + 1; h < r.length; h++) (0, r[h])();
                  e[7] = null;
                }
              })(t, e),
              1 === e[1].type && Ae(e[11]) && e[11].destroy();
            var n = e[17];
            if (null !== n && ve(e[3])) {
              n !== e[3] && Vr(n, e);
              var r = e[19];
              null !== r && r.detachView(t);
            }
          }
        }
        function Ur(t, e, n, r, i) {
          Ae(t) ? t.insertBefore(e, n, r, i) : e.insertBefore(n, r, i);
        }
        function Mr(t, e, n) {
          Ae(t) ? t.appendChild(e, n) : e.appendChild(n);
        }
        function Fr(t, e, n, r, i) {
          null !== r ? Ur(t, e, n, r, i) : Mr(t, e, n);
        }
        function Lr(t, e) {
          return Ae(t) ? t.parentNode(e) : e.parentNode;
        }
        function Hr(t, e, n, r) {
          var i = (function (t, e, n) {
              return (function (t, e, n) {
                for (var r = e; null !== r && 40 & r.type; ) r = (e = r).parent;
                if (null === r) return n[0];
                if (2 & r.flags) {
                  var i = t.data[r.directiveStart].encapsulation;
                  if (i === Ht.None || i === Ht.Emulated) return null;
                }
                return Re(r, n);
              })(t, e.parent, n);
            })(t, r, e),
            o = e[11],
            a = (function (t, e, n) {
              return (function (t, e, n) {
                return 40 & t.type ? Re(t, n) : null;
              })(t, 0, n);
            })(r.parent || e[6], 0, e);
          if (null != i)
            if (Array.isArray(n))
              for (var u = 0; u < n.length; u++) Fr(o, i, n[u], a, !1);
            else Fr(o, i, n, a, !1);
        }
        function zr(t, e) {
          if (null !== e) {
            var n = e.type;
            if (3 & n) return Re(e, t);
            if (4 & n) return qr(-1, t[e.index]);
            if (8 & n) {
              var r = e.child;
              if (null !== r) return zr(t, r);
              var i = t[e.index];
              return ve(i) ? qr(-1, i) : Oe(i);
            }
            if (32 & n) return xr(e, t)() || Oe(t[e.index]);
            var o = Br(t, e);
            return null !== o
              ? Array.isArray(o)
                ? o[0]
                : zr(Ar(t[16]), o)
              : zr(t, e.next);
          }
          return null;
        }
        function Br(t, e) {
          return null !== e ? t[16][6].projection[e.projection] : null;
        }
        function qr(t, e) {
          var n = 10 + t + 1;
          if (n < e.length) {
            var r = e[n],
              i = r[1].firstChild;
            if (null !== i) return zr(r, i);
          }
          return e[7];
        }
        function Gr(t, e, n, r, i, o, a) {
          for (; null != n; ) {
            var u = r[n.index],
              s = n.type;
            if (
              (a && 0 === e && (u && br(Oe(u), r), (n.flags |= 4)),
              64 != (64 & n.flags))
            )
              if (8 & s) Gr(t, e, n.child, r, i, o, !1), Rr(e, t, i, u, o);
              else if (32 & s) {
                for (var l = xr(n, r), c = void 0; (c = l()); )
                  Rr(e, t, i, c, o);
                Rr(e, t, i, u, o);
              } else 16 & s ? Wr(t, e, r, n, i, o) : Rr(e, t, i, u, o);
            n = a ? n.projectionNext : n.next;
          }
        }
        function Zr(t, e, n, r, i, o) {
          Gr(n, r, t.firstChild, e, i, o, !1);
        }
        function Wr(t, e, n, r, i, o) {
          var a = n[16],
            u = a[6].projection[r.projection];
          if (Array.isArray(u))
            for (var s = 0; s < u.length; s++) Rr(e, t, i, u[s], o);
          else Gr(t, e, u, a[3], i, o, !0);
        }
        function Qr(t, e, n) {
          Ae(t) ? t.setAttribute(e, "style", n) : (e.style.cssText = n);
        }
        function $r(t, e, n) {
          Ae(t)
            ? "" === n
              ? t.removeAttribute(e, "class")
              : t.setAttribute(e, "class", n)
            : (e.className = n);
        }
        function Jr(t, e, n) {
          for (var r = t.length; ; ) {
            var i = t.indexOf(e, n);
            if (-1 === i) return i;
            if (0 === i || t.charCodeAt(i - 1) <= 32) {
              var o = e.length;
              if (i + o === r || t.charCodeAt(i + o) <= 32) return i;
            }
            n = i + 1;
          }
        }
        function Kr(t, e, n) {
          for (var r = 0; r < t.length; ) {
            var i = t[r++];
            if (n && "class" === i) {
              if (-1 !== Jr((i = t[r]).toLowerCase(), e, 0)) return !0;
            } else if (1 === i) {
              for (; r < t.length && "string" == typeof (i = t[r++]); )
                if (i.toLowerCase() === e) return !0;
              return !1;
            }
          }
          return !1;
        }
        function Yr(t) {
          return 4 === t.type && "ng-template" !== t.value;
        }
        function Xr(t, e, n) {
          return e === (4 !== t.type || n ? t.value : "ng-template");
        }
        function ti(t, e, n) {
          for (
            var r = 4,
              i = t.attrs || [],
              o = (function (t) {
                for (var e = 0; e < t.length; e++) if (_n(t[e])) return e;
                return t.length;
              })(i),
              a = !1,
              u = 0;
            u < e.length;
            u++
          ) {
            var s = e[u];
            if ("number" != typeof s) {
              if (!a)
                if (4 & r) {
                  if (
                    ((r = 2 | (1 & r)),
                    ("" !== s && !Xr(t, s, n)) || ("" === s && 1 === e.length))
                  ) {
                    if (ei(r)) return !1;
                    a = !0;
                  }
                } else {
                  var l = 8 & r ? s : e[++u];
                  if (8 & r && null !== t.attrs) {
                    if (!Kr(t.attrs, l, n)) {
                      if (ei(r)) return !1;
                      a = !0;
                    }
                    continue;
                  }
                  var c = ni(8 & r ? "class" : s, i, Yr(t), n);
                  if (-1 === c) {
                    if (ei(r)) return !1;
                    a = !0;
                    continue;
                  }
                  if ("" !== l) {
                    var h;
                    h = c > o ? "" : i[c + 1].toLowerCase();
                    var f = 8 & r ? h : null;
                    if ((f && -1 !== Jr(f, l, 0)) || (2 & r && l !== h)) {
                      if (ei(r)) return !1;
                      a = !0;
                    }
                  }
                }
            } else {
              if (!a && !ei(r) && !ei(s)) return !1;
              if (a && ei(s)) continue;
              (a = !1), (r = s | (1 & r));
            }
          }
          return ei(r) || a;
        }
        function ei(t) {
          return 0 == (1 & t);
        }
        function ni(t, e, n, r) {
          if (null === e) return -1;
          var i = 0;
          if (r || !n) {
            for (var o = !1; i < e.length; ) {
              var a = e[i];
              if (a === t) return i;
              if (3 === a || 6 === a) o = !0;
              else {
                if (1 === a || 2 === a) {
                  for (var u = e[++i]; "string" == typeof u; ) u = e[++i];
                  continue;
                }
                if (4 === a) break;
                if (0 === a) {
                  i += 4;
                  continue;
                }
              }
              i += o ? 1 : 2;
            }
            return -1;
          }
          return (function (t, e) {
            var n = t.indexOf(4);
            if (n > -1)
              for (n++; n < t.length; ) {
                var r = t[n];
                if ("number" == typeof r) return -1;
                if (r === e) return n;
                n++;
              }
            return -1;
          })(e, t);
        }
        function ri(t, e) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = 0;
            r < e.length;
            r++
          )
            if (ti(t, e[r], n)) return !0;
          return !1;
        }
        function ii(t, e) {
          return t ? ":not(" + e.trim() + ")" : e;
        }
        function oi(t) {
          for (var e = t[0], n = 1, r = 2, i = "", o = !1; n < t.length; ) {
            var a = t[n];
            if ("string" == typeof a)
              if (2 & r) {
                var u = t[++n];
                i += "[" + a + (u.length > 0 ? '="' + u + '"' : "") + "]";
              } else 8 & r ? (i += "." + a) : 4 & r && (i += " " + a);
            else
              "" === i || ei(a) || ((e += ii(o, i)), (i = "")),
                (r = a),
                (o = o || !ei(r));
            n++;
          }
          return "" !== i && (e += ii(o, i)), e;
        }
        var ai = {};
        function ui(t) {
          si(ze(), He(), sn() + t, Qe());
        }
        function si(t, e, n, r) {
          if (!r)
            if (3 == (3 & e[2])) {
              var i = t.preOrderCheckHooks;
              null !== i && fn(e, i, n);
            } else {
              var o = t.preOrderHooks;
              null !== o && dn(e, o, 0, n);
            }
          ln(n);
        }
        function li(t, e) {
          return (t << 17) | (e << 2);
        }
        function ci(t) {
          return (t >> 17) & 32767;
        }
        function hi(t) {
          return 2 | t;
        }
        function fi(t) {
          return (131068 & t) >> 2;
        }
        function di(t, e) {
          return (-131069 & t) | (e << 2);
        }
        function vi(t) {
          return 1 | t;
        }
        function pi(t, e) {
          var n = t.contentQueries;
          if (null !== n)
            for (var r = 0; r < n.length; r += 2) {
              var i = n[r],
                o = n[r + 1];
              if (-1 !== o) {
                var a = t.data[o];
                Ye(i), a.contentQueries(2, e[o], o);
              }
            }
        }
        function yi(t, e, n, r, i, o, a, u, s, l) {
          var c = e.blueprint.slice();
          return (
            (c[0] = i),
            (c[2] = 140 | r),
            Ue(c),
            (c[3] = c[15] = t),
            (c[8] = n),
            (c[10] = a || (t && t[10])),
            (c[11] = u || (t && t[11])),
            (c[12] = s || (t && t[12]) || null),
            (c[9] = l || (t && t[9]) || null),
            (c[6] = o),
            (c[16] = 2 == e.type ? t[16] : c),
            c
          );
        }
        function gi(t, e, n, r, i) {
          var o,
            a,
            u = t.data[e];
          if (null === u)
            (u = (function (t, e, n, r, i) {
              var o = Ge(),
                a = We(),
                u = (t.data[e] = (function (t, e, n, r, i, o) {
                  return {
                    type: n,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: e ? e.injectorIndex : -1,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    propertyBindings: null,
                    flags: 0,
                    providerIndexes: 0,
                    value: i,
                    attrs: o,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tViews: null,
                    next: null,
                    projectionNext: null,
                    child: null,
                    parent: e,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  };
                })(0, a ? o : o && o.parent, n, e, r, i));
              return (
                null === t.firstChild && (t.firstChild = u),
                null !== o &&
                  (a
                    ? null == o.child && null !== u.parent && (o.child = u)
                    : null === o.next && (o.next = u)),
                u
              );
            })(t, e, n, r, i)),
              Fe.lFrame.inI18n && (u.flags |= 64);
          else if (64 & u.type) {
            (u.type = n), (u.value = r), (u.attrs = i);
            var s =
              ((o = Fe.lFrame),
              (a = o.currentTNode),
              o.isParent ? a : a.parent);
            u.injectorIndex = null === s ? -1 : s.injectorIndex;
          }
          return Ze(u, !0), u;
        }
        function mi(t, e, n, r) {
          if (0 === n) return -1;
          for (var i = e.length, o = 0; o < n; o++)
            e.push(r), t.blueprint.push(r), t.data.push(null);
          return i;
        }
        function _i(t, e, n) {
          en(e);
          try {
            var r = t.viewQuery;
            null !== r && Wi(1, r, n);
            var i = t.template;
            null !== i && bi(t, e, i, 1, n),
              t.firstCreatePass && (t.firstCreatePass = !1),
              t.staticContentQueries && pi(t, e),
              t.staticViewQueries && Wi(2, t.viewQuery, n);
            var o = t.components;
            null !== o &&
              (function (t, e) {
                for (var n = 0; n < e.length; n++) zi(t, e[n]);
              })(e, o);
          } catch (a) {
            throw (t.firstCreatePass && (t.incompleteFirstPass = !0), a);
          } finally {
            (e[2] &= -5), un();
          }
        }
        function ki(t, e, n, r) {
          var i = e[2];
          if (256 != (256 & i)) {
            en(e);
            var o = Qe();
            try {
              Ue(e),
                (Fe.lFrame.bindingIndex = t.bindingStartIndex),
                null !== n && bi(t, e, n, 2, r);
              var a = 3 == (3 & i);
              if (!o)
                if (a) {
                  var u = t.preOrderCheckHooks;
                  null !== u && fn(e, u, null);
                } else {
                  var s = t.preOrderHooks;
                  null !== s && dn(e, s, 0, null), vn(e, 0);
                }
              if (
                ((function (t) {
                  for (var e = Tr(t); null !== e; e = Or(e))
                    if (e[2])
                      for (var n = e[9], r = 0; r < n.length; r++) {
                        var i = n[r],
                          o = i[3];
                        0 == (1024 & i[2]) && Me(o, 1), (i[2] |= 1024);
                      }
                })(e),
                (function (t) {
                  for (var e = Tr(t); null !== e; e = Or(e))
                    for (var n = 10; n < e.length; n++) {
                      var r = e[n],
                        i = r[1];
                      De(r) && ki(i, r, i.template, r[8]);
                    }
                })(e),
                null !== t.contentQueries && pi(t, e),
                !o)
              )
                if (a) {
                  var l = t.contentCheckHooks;
                  null !== l && fn(e, l);
                } else {
                  var c = t.contentHooks;
                  null !== c && dn(e, c, 1), vn(e, 1);
                }
              !(function (t, e) {
                var n,
                  r,
                  i,
                  o = t.hostBindingOpCodes;
                if (null !== o)
                  try {
                    for (var a = 0; a < o.length; a++) {
                      var u = o[a];
                      if (u < 0) ln(~u);
                      else {
                        var s = u,
                          l = o[++a],
                          c = o[++a];
                        (n = l),
                          (r = s),
                          (i = void 0),
                          ((i = Fe.lFrame).bindingIndex = i.bindingRootIndex =
                            n),
                          Ke(r),
                          c(2, e[s]);
                      }
                    }
                  } finally {
                    ln(-1);
                  }
              })(t, e);
              var h = t.components;
              null !== h &&
                (function (t, e) {
                  for (var n = 0; n < e.length; n++) Li(t, e[n]);
                })(e, h);
              var f = t.viewQuery;
              if ((null !== f && Wi(2, f, r), !o))
                if (a) {
                  var d = t.viewCheckHooks;
                  null !== d && fn(e, d);
                } else {
                  var v = t.viewHooks;
                  null !== v && dn(e, v, 2), vn(e, 2);
                }
              !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
                o || (e[2] &= -73),
                1024 & e[2] && ((e[2] &= -1025), Me(e[3], -1));
            } finally {
              un();
            }
          }
        }
        function wi(t, e, n, r) {
          var i = e[10],
            o = !Qe(),
            a = 4 == (4 & e[2]);
          try {
            o && !a && i.begin && i.begin(), a && _i(t, e, r), ki(t, e, n, r);
          } finally {
            o && !a && i.end && i.end();
          }
        }
        function bi(t, e, n, r, i) {
          var o = sn(),
            a = 2 & r;
          try {
            ln(-1), a && e.length > 20 && si(t, e, 20, Qe()), n(r, i);
          } finally {
            ln(o);
          }
        }
        function Ci(t, e, n) {
          Le() &&
            ((function (t, e, n, r) {
              var i = n.directiveStart,
                o = n.directiveEnd;
              t.firstCreatePass || On(n, e), br(r, e);
              for (var a = n.initialInputs, u = i; u < o; u++) {
                var s = t.data[u],
                  l = me(s);
                l && Ni(e, n, s);
                var c = Ln(e, t, u, n);
                br(c, e),
                  null !== a && Ui(0, u - i, c, s, 0, a),
                  l && (Ve(n.index, e)[8] = c);
              }
            })(t, e, n, Re(n, e)),
            128 == (128 & n.flags) &&
              (function (t, e, n) {
                var r = n.directiveStart,
                  i = n.directiveEnd,
                  o = n.index,
                  a = Fe.lFrame.currentDirectiveIndex;
                try {
                  ln(o);
                  for (var u = r; u < i; u++) {
                    var s = t.data[u],
                      l = e[u];
                    Ke(u),
                      (null === s.hostBindings &&
                        0 === s.hostVars &&
                        null === s.hostAttrs) ||
                        Ri(s, l);
                  }
                } finally {
                  ln(-1), Ke(a);
                }
              })(t, e, n));
        }
        function Si(t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : Re,
            r = e.localNames;
          if (null !== r)
            for (var i = e.index + 1, o = 0; o < r.length; o += 2) {
              var a = r[o + 1],
                u = -1 === a ? n(e, t) : t[a];
              t[i++] = u;
            }
        }
        function Ei(t) {
          var e = t.tView;
          return null === e || e.incompleteFirstPass
            ? (t.tView = xi(
                1,
                null,
                t.template,
                t.decls,
                t.vars,
                t.directiveDefs,
                t.pipeDefs,
                t.viewQuery,
                t.schemas,
                t.consts
              ))
            : e;
        }
        function xi(t, e, n, r, i, o, a, u, s, l) {
          var c = 20 + r,
            h = c + i,
            f = (function (t, e) {
              for (var n = [], r = 0; r < e; r++) n.push(r < t ? null : ai);
              return n;
            })(c, h),
            d = "function" == typeof l ? l() : l;
          return (f[1] = {
            type: t,
            blueprint: f,
            template: n,
            queries: null,
            viewQuery: u,
            declTNode: e,
            data: f.slice().fill(null, c),
            bindingStartIndex: c,
            expandoStartIndex: h,
            hostBindingOpCodes: null,
            firstCreatePass: !0,
            firstUpdatePass: !0,
            staticViewQueries: !1,
            staticContentQueries: !1,
            preOrderHooks: null,
            preOrderCheckHooks: null,
            contentHooks: null,
            contentCheckHooks: null,
            viewHooks: null,
            viewCheckHooks: null,
            destroyHooks: null,
            cleanup: null,
            contentQueries: null,
            components: null,
            directiveRegistry: "function" == typeof o ? o() : o,
            pipeRegistry: "function" == typeof a ? a() : a,
            firstChild: null,
            schemas: s,
            consts: d,
            incompleteFirstPass: !1,
          });
        }
        function Ai(t, e, n) {
          for (var r in t)
            if (t.hasOwnProperty(r)) {
              var i = t[r];
              (n = null === n ? {} : n).hasOwnProperty(r)
                ? n[r].push(e, i)
                : (n[r] = [e, i]);
            }
          return n;
        }
        function Ti(t, e, n, r, i, o, a, u) {
          var s,
            l,
            c = Re(e, n),
            h = e.inputs;
          !u && null != h && (s = h[r])
            ? (Yi(t, n, s, r, i),
              ye(e) &&
                (function (t, e) {
                  var n = Ve(e, t);
                  16 & n[2] || (n[2] |= 64);
                })(n, e.index))
            : 3 & e.type &&
              ((r =
                "class" === (l = r)
                  ? "className"
                  : "for" === l
                  ? "htmlFor"
                  : "formaction" === l
                  ? "formAction"
                  : "innerHtml" === l
                  ? "innerHTML"
                  : "readonly" === l
                  ? "readOnly"
                  : "tabindex" === l
                  ? "tabIndex"
                  : l),
              (i = null != a ? a(i, e.value || "", r) : i),
              Ae(o)
                ? o.setProperty(c, r, i)
                : kn(r) || (c.setProperty ? c.setProperty(r, i) : (c[r] = i)));
        }
        function Oi(t, e, n, r) {
          var i = !1;
          if (Le()) {
            var o = (function (t, e, n) {
                var r = t.directiveRegistry,
                  i = null;
                if (r)
                  for (var o = 0; o < r.length; o++) {
                    var a = r[o];
                    ri(n, a.selectors, !1) &&
                      (i || (i = []),
                      Vn(On(n, e), t, a.type),
                      me(a) ? (Pi(t, n), i.unshift(a)) : i.push(a));
                  }
                return i;
              })(t, e, n),
              a = null === r ? null : { "": -1 };
            if (null !== o) {
              (i = !0), ji(n, t.data.length, o.length);
              for (var u = 0; u < o.length; u++) {
                var s = o[u];
                s.providersResolver && s.providersResolver(s);
              }
              for (
                var l = !1, c = !1, h = mi(t, e, o.length, null), f = 0;
                f < o.length;
                f++
              ) {
                var d = o[f];
                (n.mergedAttrs = wn(n.mergedAttrs, d.hostAttrs)),
                  Di(t, n, e, h, d),
                  Vi(h, d, a),
                  null !== d.contentQueries && (n.flags |= 8),
                  (null === d.hostBindings &&
                    null === d.hostAttrs &&
                    0 === d.hostVars) ||
                    (n.flags |= 128);
                var v = d.type.prototype;
                !l &&
                  (v.ngOnChanges || v.ngOnInit || v.ngDoCheck) &&
                  ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index),
                  (l = !0)),
                  c ||
                    (!v.ngOnChanges && !v.ngDoCheck) ||
                    ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                      n.index
                    ),
                    (c = !0)),
                  h++;
              }
              !(function (t, e) {
                for (
                  var n = e.directiveEnd,
                    r = t.data,
                    i = e.attrs,
                    o = [],
                    a = null,
                    u = null,
                    s = e.directiveStart;
                  s < n;
                  s++
                ) {
                  var l = r[s],
                    c = l.inputs,
                    h = null === i || Yr(e) ? null : Mi(c, i);
                  o.push(h), (a = Ai(c, s, a)), (u = Ai(l.outputs, s, u));
                }
                null !== a &&
                  (a.hasOwnProperty("class") && (e.flags |= 16),
                  a.hasOwnProperty("style") && (e.flags |= 32)),
                  (e.initialInputs = o),
                  (e.inputs = a),
                  (e.outputs = u);
              })(t, n);
            }
            a &&
              (function (t, e, n) {
                if (e)
                  for (
                    var r = (t.localNames = []), i = 0;
                    i < e.length;
                    i += 2
                  ) {
                    var o = n[e[i + 1]];
                    if (null == o)
                      throw new bt(
                        "301",
                        "Export of name '".concat(e[i + 1], "' not found!")
                      );
                    r.push(e[i], o);
                  }
              })(n, r, a);
          }
          return (n.mergedAttrs = wn(n.mergedAttrs, n.attrs)), i;
        }
        function Ii(t, e, n, r, i, o) {
          var a = o.hostBindings;
          if (a) {
            var u = t.hostBindingOpCodes;
            null === u && (u = t.hostBindingOpCodes = []);
            var s = ~e.index;
            (function (t) {
              for (var e = t.length; e > 0; ) {
                var n = t[--e];
                if ("number" == typeof n && n < 0) return n;
              }
              return 0;
            })(u) != s && u.push(s),
              u.push(r, i, a);
          }
        }
        function Ri(t, e) {
          null !== t.hostBindings && t.hostBindings(1, e);
        }
        function Pi(t, e) {
          (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
        }
        function Vi(t, e, n) {
          if (n) {
            if (e.exportAs)
              for (var r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
            me(e) && (n[""] = t);
          }
        }
        function ji(t, e, n) {
          (t.flags |= 1),
            (t.directiveStart = e),
            (t.directiveEnd = e + n),
            (t.providerIndexes = e);
        }
        function Di(t, e, n, r, i) {
          t.data[r] = i;
          var o = i.factory || (i.factory = _e(i.type)),
            a = new gn(o, me(i), null);
          (t.blueprint[r] = a),
            (n[r] = a),
            Ii(t, e, 0, r, mi(t, n, i.hostVars, ai), i);
        }
        function Ni(t, e, n) {
          var r = Re(e, t),
            i = Ei(n),
            o = t[10],
            a = Bi(
              t,
              yi(
                t,
                i,
                null,
                n.onPush ? 64 : 16,
                r,
                e,
                o,
                o.createRenderer(r, n),
                null,
                null
              )
            );
          t[e.index] = a;
        }
        function Ui(t, e, n, r, i, o) {
          var a = o[e];
          if (null !== a)
            for (var u = r.setInput, s = 0; s < a.length; ) {
              var l = a[s++],
                c = a[s++],
                h = a[s++];
              null !== u ? r.setInput(n, h, l, c) : (n[c] = h);
            }
        }
        function Mi(t, e) {
          for (var n = null, r = 0; r < e.length; ) {
            var i = e[r];
            if (0 !== i)
              if (5 !== i) {
                if ("number" == typeof i) break;
                t.hasOwnProperty(i) &&
                  (null === n && (n = []), n.push(i, t[i], e[r + 1])),
                  (r += 2);
              } else r += 2;
            else r += 4;
          }
          return n;
        }
        function Fi(t, e, n, r) {
          return new Array(t, !0, !1, e, null, 0, r, n, null, null);
        }
        function Li(t, e) {
          var n = Ve(e, t);
          if (De(n)) {
            var r = n[1];
            80 & n[2] ? ki(r, n, r.template, n[8]) : n[5] > 0 && Hi(n);
          }
        }
        function Hi(t) {
          for (var e = Tr(t); null !== e; e = Or(e))
            for (var n = 10; n < e.length; n++) {
              var r = e[n];
              if (1024 & r[2]) {
                var i = r[1];
                ki(i, r, i.template, r[8]);
              } else r[5] > 0 && Hi(r);
            }
          var o = t[1].components;
          if (null !== o)
            for (var a = 0; a < o.length; a++) {
              var u = Ve(o[a], t);
              De(u) && u[5] > 0 && Hi(u);
            }
        }
        function zi(t, e) {
          var n = Ve(e, t),
            r = n[1];
          !(function (t, e) {
            for (var n = e.length; n < t.blueprint.length; n++)
              e.push(t.blueprint[n]);
          })(r, n),
            _i(r, n, n[8]);
        }
        function Bi(t, e) {
          return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
        }
        function qi(t) {
          for (; t; ) {
            t[2] |= 64;
            var e = Ar(t);
            if (0 != (512 & t[2]) && !e) return t;
            t = e;
          }
          return null;
        }
        function Gi(t, e, n) {
          var r = e[10];
          r.begin && r.begin();
          try {
            ki(t, e, t.template, n);
          } catch (i) {
            throw (Ki(e, i), i);
          } finally {
            r.end && r.end();
          }
        }
        function Zi(t) {
          !(function (t) {
            for (var e = 0; e < t.components.length; e++) {
              var n = t.components[e],
                r = je(n),
                i = r[1];
              wi(i, r, i.template, n);
            }
          })(t[8]);
        }
        function Wi(t, e, n) {
          Ye(0), e(t, n);
        }
        var Qi = Promise.resolve(null);
        function $i(t) {
          return t[7] || (t[7] = []);
        }
        function Ji(t) {
          return t.cleanup || (t.cleanup = []);
        }
        function Ki(t, e) {
          var n = t[9],
            r = n ? n.get(wr, null) : null;
          r && r.handleError(e);
        }
        function Yi(t, e, n, r, i) {
          for (var o = 0; o < n.length; ) {
            var a = n[o++],
              u = n[o++],
              s = e[a],
              l = t.data[a];
            null !== l.setInput ? l.setInput(s, i, r, u) : (s[u] = i);
          }
        }
        function Xi(t, e, n) {
          var r = n ? t.styles : null,
            i = n ? t.classes : null,
            o = 0;
          if (null !== e)
            for (var a = 0; a < e.length; a++) {
              var u = e[a];
              "number" == typeof u
                ? (o = u)
                : 1 == o
                ? (i = gt(i, u))
                : 2 == o && (r = gt(r, u + ": " + e[++a] + ";"));
            }
          n ? (t.styles = r) : (t.stylesWithoutHost = r),
            n ? (t.classes = i) : (t.classesWithoutHost = i);
        }
        var to,
          eo = new Zn("INJECTOR", -1),
          no = (function () {
            function t() {
              p(this, t);
            }
            return (
              g(t, [
                {
                  key: "get",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : er;
                    if (e === er) {
                      var n = new Error(
                        "NullInjectorError: No provider for ".concat(yt(t), "!")
                      );
                      throw ((n.name = "NullInjectorError"), n);
                    }
                    return e;
                  },
                },
              ]),
              t
            );
          })(),
          ro = new Zn("Set Injector scope."),
          io = {},
          oo = {},
          ao = [];
        function uo() {
          return void 0 === to && (to = new no()), to;
        }
        function so(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            r = arguments.length > 3 ? arguments[3] : void 0;
          return new lo(t, n, e || uo(), r);
        }
        var lo = (function () {
          function t(e, n, r) {
            var i = this,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            p(this, t),
              (this.parent = r),
              (this.records = new Map()),
              (this.injectorDefTypes = new Set()),
              (this.onDestroy = new Set()),
              (this._destroyed = !1);
            var a = [];
            n &&
              $n(n, function (t) {
                return i.processProvider(t, e, n);
              }),
              $n([e], function (t) {
                return i.processInjectorType(t, [], a);
              }),
              this.records.set(eo, fo(void 0, this));
            var u = this.records.get(ro);
            (this.scope = null != u ? u.value : null),
              (this.source = o || ("object" == typeof e ? null : yt(e)));
          }
          return (
            g(t, [
              {
                key: "destroyed",
                get: function () {
                  return this._destroyed;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.assertNotDestroyed(), (this._destroyed = !0);
                  try {
                    this.onDestroy.forEach(function (t) {
                      return t.ngOnDestroy();
                    });
                  } finally {
                    this.records.clear(),
                      this.onDestroy.clear(),
                      this.injectorDefTypes.clear();
                  }
                },
              },
              {
                key: "get",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : er,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : Nt.Default;
                  this.assertNotDestroyed();
                  var r,
                    i = ir(this);
                  try {
                    if (!(n & Nt.SkipSelf)) {
                      var o = this.records.get(t);
                      if (void 0 === o) {
                        var a =
                          ("function" == typeof (r = t) ||
                            ("object" == typeof r && r instanceof Zn)) &&
                          Tt(t);
                        (o =
                          a && this.injectableDefInScope(a)
                            ? fo(co(t), io)
                            : null),
                          this.records.set(t, o);
                      }
                      if (null != o) return this.hydrate(t, o);
                    }
                    return (n & Nt.Self ? uo() : this.parent).get(
                      t,
                      (e = n & Nt.Optional && e === er ? null : e)
                    );
                  } catch (u) {
                    if ("NullInjectorError" === u.name) {
                      if (
                        ((u.ngTempTokenPath = u.ngTempTokenPath || []).unshift(
                          yt(t)
                        ),
                        i)
                      )
                        throw u;
                      return (function (t, e, n, r) {
                        var i = t.ngTempTokenPath;
                        throw (
                          (e.__source && i.unshift(e.__source),
                          (t.message = (function (t, e, n) {
                            var r =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : null;
                            t =
                              t &&
                              "\n" === t.charAt(0) &&
                              "\u0275" == t.charAt(1)
                                ? t.substr(2)
                                : t;
                            var i = yt(e);
                            if (Array.isArray(e)) i = e.map(yt).join(" -> ");
                            else if ("object" == typeof e) {
                              var o = [];
                              for (var a in e)
                                if (e.hasOwnProperty(a)) {
                                  var u = e[a];
                                  o.push(
                                    a +
                                      ":" +
                                      ("string" == typeof u
                                        ? JSON.stringify(u)
                                        : yt(u))
                                  );
                                }
                              i = "{".concat(o.join(", "), "}");
                            }
                            return ""
                              .concat(n)
                              .concat(r ? "(" + r + ")" : "", "[")
                              .concat(i, "]: ")
                              .concat(t.replace(nr, "\n  "));
                          })("\n" + t.message, i, "R3InjectorError", r)),
                          (t.ngTokenPath = i),
                          (t.ngTempTokenPath = null),
                          t)
                        );
                      })(u, t, 0, this.source);
                    }
                    throw u;
                  } finally {
                    ir(i);
                  }
                },
              },
              {
                key: "_resolveInjectorDefTypes",
                value: function () {
                  var t = this;
                  this.injectorDefTypes.forEach(function (e) {
                    return t.get(e);
                  });
                },
              },
              {
                key: "toString",
                value: function () {
                  var t = [];
                  return (
                    this.records.forEach(function (e, n) {
                      return t.push(yt(n));
                    }),
                    "R3Injector[".concat(t.join(", "), "]")
                  );
                },
              },
              {
                key: "assertNotDestroyed",
                value: function () {
                  if (this._destroyed)
                    throw new Error("Injector has already been destroyed.");
                },
              },
              {
                key: "processInjectorType",
                value: function (t, e, n) {
                  var r = this;
                  if (!(t = kt(t))) return !1;
                  var i = It(t),
                    o = (null == i && t.ngModule) || void 0,
                    a = void 0 === o ? t : o,
                    u = -1 !== n.indexOf(a);
                  if ((void 0 !== o && (i = It(o)), null == i)) return !1;
                  if (null != i.imports && !u) {
                    var s;
                    n.push(a);
                    try {
                      $n(i.imports, function (t) {
                        r.processInjectorType(t, e, n) &&
                          (void 0 === s && (s = []), s.push(t));
                      });
                    } finally {
                    }
                    if (void 0 !== s)
                      for (
                        var l = function (t) {
                            var e = s[t],
                              n = e.ngModule,
                              i = e.providers;
                            $n(i, function (t) {
                              return r.processProvider(t, n, i || ao);
                            });
                          },
                          c = 0;
                        c < s.length;
                        c++
                      )
                        l(c);
                  }
                  this.injectorDefTypes.add(a);
                  var h =
                    _e(a) ||
                    function () {
                      return new a();
                    };
                  this.records.set(a, fo(h, io));
                  var f = i.providers;
                  if (null != f && !u) {
                    var d = t;
                    $n(f, function (t) {
                      return r.processProvider(t, d, f);
                    });
                  }
                  return void 0 !== o && void 0 !== t.providers;
                },
              },
              {
                key: "processProvider",
                value: function (t, e, n) {
                  var r = po((t = kt(t))) ? t : kt(t && t.provide),
                    i = (function (t, e, n) {
                      return vo(t) ? fo(void 0, t.useValue) : fo(ho(t), io);
                    })(t);
                  if (po(t) || !0 !== t.multi) this.records.get(r);
                  else {
                    var o = this.records.get(r);
                    o ||
                      (((o = fo(void 0, io, !0)).factory = function () {
                        return ur(o.multi);
                      }),
                      this.records.set(r, o)),
                      (r = t),
                      o.multi.push(t);
                  }
                  this.records.set(r, i);
                },
              },
              {
                key: "hydrate",
                value: function (t, e) {
                  var n;
                  return (
                    e.value === io && ((e.value = oo), (e.value = e.factory())),
                    "object" == typeof e.value &&
                      e.value &&
                      null !== (n = e.value) &&
                      "object" == typeof n &&
                      "function" == typeof n.ngOnDestroy &&
                      this.onDestroy.add(e.value),
                    e.value
                  );
                },
              },
              {
                key: "injectableDefInScope",
                value: function (t) {
                  return (
                    !!t.providedIn &&
                    ("string" == typeof t.providedIn
                      ? "any" === t.providedIn || t.providedIn === this.scope
                      : this.injectorDefTypes.has(t.providedIn))
                  );
                },
              },
            ]),
            t
          );
        })();
        function co(t) {
          var e = Tt(t),
            n = null !== e ? e.factory : _e(t);
          if (null !== n) return n;
          if (t instanceof Zn)
            throw new Error(
              "Token ".concat(yt(t), " is missing a \u0275prov definition.")
            );
          if (t instanceof Function)
            return (function (t) {
              var e = t.length;
              if (e > 0) {
                var n = (function (t, e) {
                  for (var n = [], r = 0; r < t; r++) n.push("?");
                  return n;
                })(e);
                throw new Error(
                  "Can't resolve all parameters for "
                    .concat(yt(t), ": (")
                    .concat(n.join(", "), ").")
                );
              }
              var r = (function (t) {
                var e = t && (t[Pt] || t[jt]);
                if (e) {
                  var n = (function (t) {
                    if (t.hasOwnProperty("name")) return t.name;
                    var e = ("" + t).match(/^function\s*([^\s(]+)/);
                    return null === e ? "" : e[1];
                  })(t);
                  return (
                    console.warn(
                      'DEPRECATED: DI is instantiating a token "'
                        .concat(
                          n,
                          '" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "'
                        )
                        .concat(n, '" class.')
                    ),
                    e
                  );
                }
                return null;
              })(t);
              return null !== r
                ? function () {
                    return r.factory(t);
                  }
                : function () {
                    return new t();
                  };
            })(t);
          throw new Error("unreachable");
        }
        function ho(t, e, r) {
          var i, o;
          if (po(t)) {
            var u = kt(t);
            return _e(u) || co(u);
          }
          if (vo(t))
            i = function () {
              return kt(t.useValue);
            };
          else if ((o = t) && o.useFactory)
            i = function () {
              return t.useFactory.apply(t, n(ur(t.deps || [])));
            };
          else if (
            (function (t) {
              return !(!t || !t.useExisting);
            })(t)
          )
            i = function () {
              return ar(kt(t.useExisting));
            };
          else {
            var s = kt(t && (t.useClass || t.provide));
            if (
              !(function (t) {
                return !!t.deps;
              })(t)
            )
              return _e(s) || co(s);
            i = function () {
              return a(s, n(ur(t.deps)));
            };
          }
          return i;
        }
        function fo(t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return { factory: t, value: e, multi: n ? [] : void 0 };
        }
        function vo(t) {
          return null !== t && "object" == typeof t && rr in t;
        }
        function po(t) {
          return "function" == typeof t;
        }
        var yo = function (t, e, n) {
            return (function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = so(t, e, n, r);
              return i._resolveInjectorDefTypes(), i;
            })({ name: n }, e, t, n);
          },
          go = (function () {
            var t = (function () {
              function t() {
                p(this, t);
              }
              return (
                g(t, null, [
                  {
                    key: "create",
                    value: function (t, e) {
                      return Array.isArray(t)
                        ? yo(t, e, "")
                        : yo(t.providers, t.parent, t.name || "");
                    },
                  },
                ]),
                t
              );
            })();
            return (
              (t.THROW_IF_NOT_FOUND = er),
              (t.NULL = new no()),
              (t.ɵprov = xt({
                token: t,
                providedIn: "any",
                factory: function () {
                  return ar(eo);
                },
              })),
              (t.__NG_ELEMENT_ID__ = -1),
              t
            );
          })();
        function mo(t, e) {
          hn(je(t)[1], qe());
        }
        function _o(t) {
          for (
            var e = Object.getPrototypeOf(t.type.prototype).constructor,
              n = !0,
              r = [t];
            e;

          ) {
            var i = void 0;
            if (me(t)) i = e.ɵcmp || e.ɵdir;
            else {
              if (e.ɵcmp)
                throw new Error("Directives cannot inherit Components");
              i = e.ɵdir;
            }
            if (i) {
              if (n) {
                r.push(i);
                var o = t;
                (o.inputs = ko(t.inputs)),
                  (o.declaredInputs = ko(t.declaredInputs)),
                  (o.outputs = ko(t.outputs));
                var a = i.hostBindings;
                a && Co(t, a);
                var u = i.viewQuery,
                  s = i.contentQueries;
                if (
                  (u && wo(t, u),
                  s && bo(t, s),
                  pt(t.inputs, i.inputs),
                  pt(t.declaredInputs, i.declaredInputs),
                  pt(t.outputs, i.outputs),
                  me(i) && i.data.animation)
                ) {
                  var l = t.data;
                  l.animation = (l.animation || []).concat(i.data.animation);
                }
              }
              var c = i.features;
              if (c)
                for (var h = 0; h < c.length; h++) {
                  var f = c[h];
                  f && f.ngInherit && f(t), f === _o && (n = !1);
                }
            }
            e = Object.getPrototypeOf(e);
          }
          !(function (t) {
            for (var e = 0, n = null, r = t.length - 1; r >= 0; r--) {
              var i = t[r];
              (i.hostVars = e += i.hostVars),
                (i.hostAttrs = wn(i.hostAttrs, (n = wn(n, i.hostAttrs))));
            }
          })(r);
        }
        function ko(t) {
          return t === Wt ? {} : t === $t ? [] : t;
        }
        function wo(t, e) {
          var n = t.viewQuery;
          t.viewQuery = n
            ? function (t, r) {
                e(t, r), n(t, r);
              }
            : e;
        }
        function bo(t, e) {
          var n = t.contentQueries;
          t.contentQueries = n
            ? function (t, r, i) {
                e(t, r, i), n(t, r, i);
              }
            : e;
        }
        function Co(t, e) {
          var n = t.hostBindings;
          t.hostBindings = n
            ? function (t, r) {
                e(t, r), n(t, r);
              }
            : e;
        }
        var So = null;
        function Eo() {
          if (!So) {
            var t = Zt.Symbol;
            if (t && t.iterator) So = t.iterator;
            else
              for (
                var e = Object.getOwnPropertyNames(Map.prototype), n = 0;
                n < e.length;
                ++n
              ) {
                var r = e[n];
                "entries" !== r &&
                  "size" !== r &&
                  Map.prototype[r] === Map.prototype.entries &&
                  (So = r);
              }
          }
          return So;
        }
        function xo(t) {
          return (
            !!Ao(t) && (Array.isArray(t) || (!(t instanceof Map) && Eo() in t))
          );
        }
        function Ao(t) {
          return null !== t && ("function" == typeof t || "object" == typeof t);
        }
        function To(t, e, n) {
          return !Object.is(t[e], n) && ((t[e] = n), !0);
        }
        function Oo(t, e, n, r) {
          var i = He();
          return (
            To(i, Je(), e) &&
              (ze(),
              (function (t, e, n, r, i, o) {
                var a = Re(t, e);
                !(function (t, e, n, r, i, o, a) {
                  if (null == o)
                    Ae(t) ? t.removeAttribute(e, i, n) : e.removeAttribute(i);
                  else {
                    var u = null == a ? Ct(o) : a(o, r || "", i);
                    Ae(t)
                      ? t.setAttribute(e, i, u, n)
                      : n
                      ? e.setAttributeNS(n, i, u)
                      : e.setAttribute(i, u);
                  }
                })(e[11], a, o, t.value, n, r, i);
              })(cn(), i, t, e, n, r)),
            Oo
          );
        }
        function Io(t, e, n, r) {
          return To(t, Je(), n) ? e + Ct(n) + r : ai;
        }
        function Ro(t, e, n, r, i, o, a, u) {
          var s = He(),
            l = ze(),
            c = t + 20,
            h = l.firstCreatePass
              ? (function (t, e, n, r, i, o, a, u, s) {
                  var l = e.consts,
                    c = gi(e, t, 4, a || null, Ne(l, u));
                  Oi(e, n, c, Ne(l, s)), hn(e, c);
                  var h = (c.tViews = xi(
                    2,
                    c,
                    r,
                    i,
                    o,
                    e.directiveRegistry,
                    e.pipeRegistry,
                    null,
                    e.schemas,
                    l
                  ));
                  return (
                    null !== e.queries &&
                      (e.queries.template(e, c),
                      (h.queries = e.queries.embeddedTView(c))),
                    c
                  );
                })(c, l, s, e, n, r, i, o, a)
              : l.data[c];
          Ze(h, !1);
          var f = s[11].createComment("");
          Hr(l, s, f, h),
            br(f, s),
            Bi(s, (s[c] = Fi(f, s, f, h))),
            ge(h) && Ci(l, s, h),
            null != a && Si(s, h, u);
        }
        function Po(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Nt.Default,
            n = He();
          return null === n ? ar(t, e) : Nn(qe(), n, kt(t), e);
        }
        function Vo(t, e, n) {
          var r = He();
          return To(r, Je(), e) && Ti(ze(), cn(), r, t, e, r[11], n, !1), Vo;
        }
        function jo(t, e, n, r, i) {
          var o = i ? "class" : "style";
          Yi(t, n, e.inputs[o], o, r);
        }
        function Do(t, e, n, r) {
          var i = He(),
            o = ze(),
            a = 20 + t,
            u = i[11],
            s = (i[a] = Pr(u, e, Fe.lFrame.currentNamespace)),
            l = o.firstCreatePass
              ? (function (t, e, n, r, i, o, a) {
                  var u = e.consts,
                    s = gi(e, t, 2, i, Ne(u, o));
                  return (
                    Oi(e, n, s, Ne(u, a)),
                    null !== s.attrs && Xi(s, s.attrs, !1),
                    null !== s.mergedAttrs && Xi(s, s.mergedAttrs, !0),
                    null !== e.queries && e.queries.elementStart(e, s),
                    s
                  );
                })(a, o, i, 0, e, n, r)
              : o.data[a];
          Ze(l, !0);
          var c = l.mergedAttrs;
          null !== c && mn(u, s, c);
          var h = l.classes;
          null !== h && $r(u, s, h);
          var f = l.styles;
          null !== f && Qr(u, s, f),
            64 != (64 & l.flags) && Hr(o, i, s, l),
            0 === Fe.lFrame.elementDepthCount && br(s, i),
            Fe.lFrame.elementDepthCount++,
            ge(l) &&
              (Ci(o, i, l),
              (function (t, e, n) {
                if (pe(e))
                  for (
                    var r = e.directiveEnd, i = e.directiveStart;
                    i < r;
                    i++
                  ) {
                    var o = t.data[i];
                    o.contentQueries && o.contentQueries(1, n[i], i);
                  }
              })(o, l, i)),
            null !== r && Si(i, l);
        }
        function No() {
          var t = qe();
          We() ? (Fe.lFrame.isParent = !1) : Ze((t = t.parent), !1);
          var e = t;
          Fe.lFrame.elementDepthCount--;
          var n = ze();
          n.firstCreatePass && (hn(n, t), pe(t) && n.queries.elementEnd(t)),
            null != e.classesWithoutHost &&
              (function (t) {
                return 0 != (16 & t.flags);
              })(e) &&
              jo(n, e, He(), e.classesWithoutHost, !0),
            null != e.stylesWithoutHost &&
              (function (t) {
                return 0 != (32 & t.flags);
              })(e) &&
              jo(n, e, He(), e.stylesWithoutHost, !1);
        }
        function Uo(t, e, n, r) {
          Do(t, e, n, r), No();
        }
        function Mo(t) {
          return !!t && "function" == typeof t.then;
        }
        var Fo = function (t) {
          return !!t && "function" == typeof t.subscribe;
        };
        function Lo(t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = He(),
            o = ze(),
            a = qe();
          return (
            (function (t, e, n, r, i, o) {
              var a =
                  arguments.length > 6 &&
                  void 0 !== arguments[6] &&
                  arguments[6],
                u = arguments.length > 7 ? arguments[7] : void 0,
                s = ge(r),
                l = t.firstCreatePass && Ji(t),
                c = $i(e),
                h = !0;
              if (3 & r.type) {
                var f = Re(r, e),
                  d = u ? u(f) : Wt,
                  v = d.target || f,
                  p = c.length,
                  y = u
                    ? function (t) {
                        return u(Oe(t[r.index])).target;
                      }
                    : r.index;
                if (Ae(n)) {
                  var g = null;
                  if (
                    (!u &&
                      s &&
                      (g = (function (t, e, n, r) {
                        var i = t.cleanup;
                        if (null != i)
                          for (var o = 0; o < i.length - 1; o += 2) {
                            var a = i[o];
                            if (a === n && i[o + 1] === r) {
                              var u = e[7],
                                s = i[o + 2];
                              return u.length > s ? u[s] : null;
                            }
                            "string" == typeof a && (o += 2);
                          }
                        return null;
                      })(t, e, i, r.index)),
                    null !== g)
                  )
                    ((g.__ngLastListenerFn__ || g).__ngNextListenerFn__ = o),
                      (g.__ngLastListenerFn__ = o),
                      (h = !1);
                  else {
                    o = zo(r, e, 0, o, !1);
                    var m = n.listen(d.name || v, i, o);
                    c.push(o, m), l && l.push(i, y, p, p + 1);
                  }
                } else
                  (o = zo(r, e, 0, o, !0)),
                    v.addEventListener(i, o, a),
                    c.push(o),
                    l && l.push(i, y, p, a);
              } else o = zo(r, e, 0, o, !1);
              var _,
                k = r.outputs;
              if (h && null !== k && (_ = k[i])) {
                var w = _.length;
                if (w)
                  for (var b = 0; b < w; b += 2) {
                    var C = e[_[b]][_[b + 1]].subscribe(o),
                      S = c.length;
                    c.push(o, C), l && l.push(i, r.index, S, -(S + 1));
                  }
              }
            })(o, i, i[11], a, t, e, n, r),
            Lo
          );
        }
        function Ho(t, e, n, r) {
          try {
            return !1 !== n(r);
          } catch (i) {
            return Ki(t, i), !1;
          }
        }
        function zo(t, e, n, r, i) {
          return function n(o) {
            if (o === Function) return r;
            var a = 2 & t.flags ? Ve(t.index, e) : e;
            0 == (32 & e[2]) && qi(a);
            for (var u = Ho(e, 0, r, o), s = n.__ngNextListenerFn__; s; )
              (u = Ho(e, 0, s, o) && u), (s = s.__ngNextListenerFn__);
            return (
              i && !1 === u && (o.preventDefault(), (o.returnValue = !1)), u
            );
          };
        }
        function Bo() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          return (function (t) {
            return (Fe.lFrame.contextLView = (function (t, e) {
              for (; t > 0; ) (e = e[15]), t--;
              return e;
            })(t, Fe.lFrame.contextLView))[8];
          })(t);
        }
        function qo(t, e, n, r, i) {
          var o = He(),
            a = Io(o, e, n, r);
          return a !== ai && Ti(ze(), cn(), o, t, a, o[11], i, !1), qo;
        }
        function Go(t, e, n, r, i) {
          for (
            var o = t[n + 1], a = null === e, u = r ? ci(o) : fi(o), s = !1;
            0 !== u && (!1 === s || a);

          ) {
            var l = t[u + 1];
            Zo(t[u], e) && ((s = !0), (t[u + 1] = r ? vi(l) : hi(l))),
              (u = r ? ci(l) : fi(l));
          }
          s && (t[n + 1] = r ? hi(o) : vi(o));
        }
        function Zo(t, e) {
          return (
            null === t ||
            null == e ||
            (Array.isArray(t) ? t[1] : t) === e ||
            (!(!Array.isArray(t) || "string" != typeof e) && Xn(t, e) >= 0)
          );
        }
        function Wo(t, e) {
          return (
            (function (t, e, n, r) {
              var i,
                o,
                a = He(),
                u = ze(),
                s =
                  ((i = Fe.lFrame),
                  (o = i.bindingIndex),
                  (i.bindingIndex = i.bindingIndex + 2),
                  o);
              u.firstUpdatePass &&
                (function (t, e, n, r) {
                  var i = t.data;
                  if (null === i[n + 1]) {
                    var o = i[sn()],
                      a = (function (t, e) {
                        return e >= t.expandoStartIndex;
                      })(t, n);
                    (function (t, e) {
                      return 0 != (16 & t.flags);
                    })(o) &&
                      null === e &&
                      !a &&
                      (e = !1),
                      (e = (function (t, e, n, r) {
                        var i = (function (t) {
                            var e = Fe.lFrame.currentDirectiveIndex;
                            return -1 === e ? null : t[e];
                          })(t),
                          o = e.residualClasses;
                        if (null === i)
                          0 === e.classBindings &&
                            ((n = $o((n = Qo(null, t, e, n, !0)), e.attrs, !0)),
                            (o = null));
                        else {
                          var a = e.directiveStylingLast;
                          if (-1 === a || t[a] !== i)
                            if (((n = Qo(i, t, e, n, !0)), null === o)) {
                              var u = (function (t, e, n) {
                                var r = e.classBindings;
                                if (0 !== fi(r)) return t[ci(r)];
                              })(t, e);
                              void 0 !== u &&
                                Array.isArray(u) &&
                                (function (t, e, n, r) {
                                  t[ci(e.classBindings)] = r;
                                })(
                                  t,
                                  e,
                                  0,
                                  (u = $o(
                                    (u = Qo(null, t, e, u[1], !0)),
                                    e.attrs,
                                    !0
                                  ))
                                );
                            } else
                              o = (function (t, e, n) {
                                for (
                                  var r,
                                    i = e.directiveEnd,
                                    o = 1 + e.directiveStylingLast;
                                  o < i;
                                  o++
                                )
                                  r = $o(r, t[o].hostAttrs, !0);
                                return $o(r, e.attrs, !0);
                              })(t, e);
                        }
                        return void 0 !== o && (e.residualClasses = o), n;
                      })(i, o, e)),
                      (function (t, e, n, r, i, o) {
                        var a = e.classBindings,
                          u = ci(a),
                          s = fi(a);
                        t[r] = n;
                        var l,
                          c = !1;
                        if (Array.isArray(n)) {
                          var h = n;
                          (null === (l = h[1]) || Xn(h, l) > 0) && (c = !0);
                        } else l = n;
                        if (i)
                          if (0 !== s) {
                            var f = ci(t[u + 1]);
                            (t[r + 1] = li(f, u)),
                              0 !== f && (t[f + 1] = di(t[f + 1], r)),
                              (t[u + 1] = (131071 & t[u + 1]) | (r << 17));
                          } else
                            (t[r + 1] = li(u, 0)),
                              0 !== u && (t[u + 1] = di(t[u + 1], r)),
                              (u = r);
                        else
                          (t[r + 1] = li(s, 0)),
                            0 === u ? (u = r) : (t[s + 1] = di(t[s + 1], r)),
                            (s = r);
                        c && (t[r + 1] = hi(t[r + 1])),
                          Go(t, l, r, !0),
                          Go(t, l, r, !1),
                          (function (t, e, n, r, i) {
                            var o = t.residualClasses;
                            null != o &&
                              "string" == typeof e &&
                              Xn(o, e) >= 0 &&
                              (n[r + 1] = vi(n[r + 1]));
                          })(e, l, t, r),
                          (a = li(u, s)),
                          (e.classBindings = a);
                      })(i, o, e, n, a);
                  }
                })(u, t, s),
                e !== ai &&
                  To(a, s, e) &&
                  (function (t, e, n, r, i, o, a, u) {
                    if (3 & e.type) {
                      var s = t.data,
                        l = s[u + 1];
                      Ko(1 == (1 & l) ? Jo(s, e, n, i, fi(l), !0) : void 0) ||
                        (Ko(o) ||
                          (2 == (2 & l) && (o = Jo(s, null, n, i, u, !0))),
                        (function (t, e, n, r, i) {
                          var o = Ae(t);
                          i
                            ? o
                              ? t.addClass(n, r)
                              : n.classList.add(r)
                            : o
                            ? t.removeClass(n, r)
                            : n.classList.remove(r);
                        })(r, 0, Ie(sn(), n), i, o));
                    }
                  })(
                    u,
                    u.data[sn()],
                    a,
                    a[11],
                    t,
                    (a[s + 1] = (function (t, e) {
                      return (
                        null == t || ("object" == typeof t && (t = yt(dr(t)))),
                        t
                      );
                    })(e)),
                    0,
                    s
                  );
            })(t, e),
            Wo
          );
        }
        function Qo(t, e, n, r, i) {
          var o = null,
            a = n.directiveEnd,
            u = n.directiveStylingLast;
          for (
            -1 === u ? (u = n.directiveStart) : u++;
            u < a && ((r = $o(r, (o = e[u]).hostAttrs, i)), o !== t);

          )
            u++;
          return null !== t && (n.directiveStylingLast = u), r;
        }
        function $o(t, e, n) {
          var r,
            i,
            o,
            a,
            u = n ? 1 : 2,
            s = -1;
          if (null !== e)
            for (var l = 0; l < e.length; l++) {
              var c = e[l];
              "number" == typeof c
                ? (s = c)
                : s === u &&
                  (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]),
                  (r = t),
                  (i = c),
                  (o = !!n || e[++l]),
                  (a = void 0),
                  (a = Xn(r, i)) >= 0
                    ? (r[1 | a] = o)
                    : (function (t, e, n, r) {
                        var i = t.length;
                        if (i == e) t.push(n, r);
                        else if (1 === i) t.push(r, t[0]), (t[0] = n);
                        else {
                          for (i--, t.push(t[i - 1], t[i]); i > e; )
                            (t[i] = t[i - 2]), i--;
                          (t[e] = n), (t[e + 1] = r);
                        }
                      })(r, (a = ~a), i, o));
            }
          return void 0 === t ? null : t;
        }
        function Jo(t, e, n, r, i, o) {
          for (var a, u = null === e; i > 0; ) {
            var s = t[i],
              l = Array.isArray(s),
              c = l ? s[1] : s,
              h = null === c,
              f = n[i + 1];
            f === ai && (f = h ? Qt : void 0);
            var d = h ? Yn(f, r) : c === r ? f : void 0;
            if ((l && !Ko(d) && (d = Yn(s, r)), Ko(d) && ((a = d), u)))
              return a;
            var v = t[i + 1];
            i = u ? ci(v) : fi(v);
          }
          if (null !== e) {
            var p = o ? e.residualClasses : e.residualStyles;
            null != p && (a = Yn(p, r));
          }
          return a;
        }
        function Ko(t) {
          return void 0 !== t;
        }
        function Yo(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = He(),
            r = ze(),
            i = t + 20,
            o = r.firstCreatePass ? gi(r, i, 1, e, null) : r.data[i],
            a = (n[i] = (function (t, e) {
              return Ae(t) ? t.createText(e) : t.createTextNode(e);
            })(n[11], e));
          Hr(r, n, a, o), Ze(o, !1);
        }
        function Xo(t) {
          return ta("", t, ""), Xo;
        }
        function ta(t, e, n) {
          var r = He(),
            i = Io(r, t, e, n);
          return (
            i !== ai &&
              (function (t, e, n) {
                var r = Ie(e, t);
                !(function (t, e, n) {
                  Ae(t) ? t.setValue(e, n) : (e.textContent = n);
                })(t[11], r, n);
              })(r, sn(), i),
            ta
          );
        }
        function ea(t, e, n) {
          var r = He();
          return To(r, Je(), e) && Ti(ze(), cn(), r, t, e, r[11], n, !0), ea;
        }
        var na = void 0,
          ra = [
            "en",
            [["a", "p"], ["AM", "PM"], na],
            [["AM", "PM"], na, na],
            [
              ["S", "M", "T", "W", "T", "F", "S"],
              ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            ],
            na,
            [
              ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
              [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            ],
            na,
            [
              ["B", "A"],
              ["BC", "AD"],
              ["Before Christ", "Anno Domini"],
            ],
            0,
            [6, 0],
            ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
            ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
            ["{1}, {0}", na, "{1} 'at' {0}", na],
            [
              ".",
              ",",
              ";",
              "%",
              "+",
              "-",
              "E",
              "\xd7",
              "\u2030",
              "\u221e",
              "NaN",
              ":",
            ],
            ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
            "USD",
            "$",
            "US Dollar",
            {},
            "ltr",
            function (t) {
              var e = Math.floor(Math.abs(t)),
                n = t.toString().replace(/^[^.]*\.?/, "").length;
              return 1 === e && 0 === n ? 1 : 5;
            },
          ],
          ia = {};
        function oa(t) {
          return (
            t in ia ||
              (ia[t] =
                Zt.ng &&
                Zt.ng.common &&
                Zt.ng.common.locales &&
                Zt.ng.common.locales[t]),
            ia[t]
          );
        }
        var aa = (function (t) {
          return (
            (t[(t.LocaleId = 0)] = "LocaleId"),
            (t[(t.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
            (t[(t.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
            (t[(t.DaysFormat = 3)] = "DaysFormat"),
            (t[(t.DaysStandalone = 4)] = "DaysStandalone"),
            (t[(t.MonthsFormat = 5)] = "MonthsFormat"),
            (t[(t.MonthsStandalone = 6)] = "MonthsStandalone"),
            (t[(t.Eras = 7)] = "Eras"),
            (t[(t.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
            (t[(t.WeekendRange = 9)] = "WeekendRange"),
            (t[(t.DateFormat = 10)] = "DateFormat"),
            (t[(t.TimeFormat = 11)] = "TimeFormat"),
            (t[(t.DateTimeFormat = 12)] = "DateTimeFormat"),
            (t[(t.NumberSymbols = 13)] = "NumberSymbols"),
            (t[(t.NumberFormats = 14)] = "NumberFormats"),
            (t[(t.CurrencyCode = 15)] = "CurrencyCode"),
            (t[(t.CurrencySymbol = 16)] = "CurrencySymbol"),
            (t[(t.CurrencyName = 17)] = "CurrencyName"),
            (t[(t.Currencies = 18)] = "Currencies"),
            (t[(t.Directionality = 19)] = "Directionality"),
            (t[(t.PluralCase = 20)] = "PluralCase"),
            (t[(t.ExtraData = 21)] = "ExtraData"),
            t
          );
        })({});
        function ua(t) {
          var e;
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                "ASSERTION ERROR: "
                  .concat(
                    "Expected localeId to be defined",
                    " [Expected=> null != "
                  )
                  .concat(e, " <=Actual]")
              );
            })(0, e),
            "string" == typeof t && t.toLowerCase().replace(/_/g, "-");
        }
        function sa(t, e, n, r, i) {
          if (((t = kt(t)), Array.isArray(t)))
            for (var o = 0; o < t.length; o++) sa(t[o], e, n, r, i);
          else {
            var a = ze(),
              u = He(),
              s = po(t) ? t : kt(t.provide),
              l = ho(t),
              c = qe(),
              h = 1048575 & c.providerIndexes,
              f = c.directiveStart,
              d = c.providerIndexes >> 20;
            if (po(t) || !t.multi) {
              var v = new gn(l, i, Po),
                p = ha(s, e, i ? h : h + d, f);
              -1 === p
                ? (Vn(On(c, u), a, s),
                  la(a, t, e.length),
                  e.push(s),
                  c.directiveStart++,
                  c.directiveEnd++,
                  i && (c.providerIndexes += 1048576),
                  n.push(v),
                  u.push(v))
                : ((n[p] = v), (u[p] = v));
            } else {
              var y = ha(s, e, h + d, f),
                g = ha(s, e, h, h + d),
                m = y >= 0 && n[y],
                _ = g >= 0 && n[g];
              if ((i && !_) || (!i && !m)) {
                Vn(On(c, u), a, s);
                var k = (function (t, e, n, r, i) {
                  var o = new gn(t, n, Po);
                  return (
                    (o.multi = []),
                    (o.index = e),
                    (o.componentProviders = 0),
                    ca(o, i, r && !n),
                    o
                  );
                })(i ? da : fa, n.length, i, r, l);
                !i && _ && (n[g].providerFactory = k),
                  la(a, t, e.length, 0),
                  e.push(s),
                  c.directiveStart++,
                  c.directiveEnd++,
                  i && (c.providerIndexes += 1048576),
                  n.push(k),
                  u.push(k);
              } else la(a, t, y > -1 ? y : g, ca(n[i ? g : y], l, !i && r));
              !i && r && _ && n[g].componentProviders++;
            }
          }
        }
        function la(t, e, n, r) {
          var i = po(e);
          if (i || e.useClass) {
            var o = (e.useClass || e).prototype.ngOnDestroy;
            if (o) {
              var a = t.destroyHooks || (t.destroyHooks = []);
              if (!i && e.multi) {
                var u = a.indexOf(n);
                -1 === u ? a.push(n, [r, o]) : a[u + 1].push(r, o);
              } else a.push(n, o);
            }
          }
        }
        function ca(t, e, n) {
          return n && t.componentProviders++, t.multi.push(e) - 1;
        }
        function ha(t, e, n, r) {
          for (var i = n; i < r; i++) if (e[i] === t) return i;
          return -1;
        }
        function fa(t, e, n, r) {
          return va(this.multi, []);
        }
        function da(t, e, n, r) {
          var i,
            o = this.multi;
          if (this.providerFactory) {
            var a = this.providerFactory.componentProviders,
              u = Ln(n, n[1], this.providerFactory.index, r);
            va(o, (i = u.slice(0, a)));
            for (var s = a; s < u.length; s++) i.push(u[s]);
          } else va(o, (i = []));
          return i;
        }
        function va(t, e) {
          for (var n = 0; n < t.length; n++) e.push((0, t[n])());
          return e;
        }
        function pa(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return function (n) {
            n.providersResolver = function (n, r) {
              return (function (t, e, n) {
                var r = ze();
                if (r.firstCreatePass) {
                  var i = me(t);
                  sa(n, r.data, r.blueprint, i, !0),
                    sa(e, r.data, r.blueprint, i, !1);
                }
              })(n, r ? r(t) : t, e);
            };
          };
        }
        var ya = function t() {
            p(this, t);
          },
          ga = (function () {
            function t() {
              p(this, t);
            }
            return (
              g(t, [
                {
                  key: "resolveComponentFactory",
                  value: function (t) {
                    throw (function (t) {
                      var e = Error(
                        "No component factory found for ".concat(
                          yt(t),
                          ". Did you add it to @NgModule.entryComponents?"
                        )
                      );
                      return (e.ngComponent = t), e;
                    })(t);
                  },
                },
              ]),
              t
            );
          })(),
          ma = (function () {
            var t = function t() {
              p(this, t);
            };
            return (t.NULL = new ga()), t;
          })();
        function _a() {}
        function ka(t, e) {
          return new ba(Re(t, e));
        }
        var wa = function () {
            return ka(qe(), He());
          },
          ba = (function () {
            var t = function t(e) {
              p(this, t), (this.nativeElement = e);
            };
            return (t.__NG_ELEMENT_ID__ = wa), t;
          })(),
          Ca = function t() {
            p(this, t);
          },
          Sa = (function () {
            var t = function t() {
              p(this, t);
            };
            return (
              (t.__NG_ELEMENT_ID__ = function () {
                return Ea();
              }),
              t
            );
          })(),
          Ea = function () {
            var t = He(),
              e = Ve(qe().index, t);
            return (function (t) {
              return t[11];
            })(de(e) ? e : t);
          },
          xa = (function () {
            var t = function t() {
              p(this, t);
            };
            return (
              (t.ɵprov = xt({
                token: t,
                providedIn: "root",
                factory: function () {
                  return null;
                },
              })),
              t
            );
          })(),
          Aa = new (function t(e) {
            p(this, t),
              (this.full = e),
              (this.major = e.split(".")[0]),
              (this.minor = e.split(".")[1]),
              (this.patch = e.split(".").slice(2).join("."));
          })("11.2.9"),
          Ta = (function () {
            function t() {
              p(this, t);
            }
            return (
              g(t, [
                {
                  key: "supports",
                  value: function (t) {
                    return xo(t);
                  },
                },
                {
                  key: "create",
                  value: function (t) {
                    return new Ia(t);
                  },
                },
              ]),
              t
            );
          })(),
          Oa = function (t, e) {
            return e;
          },
          Ia = (function () {
            function t(e) {
              p(this, t),
                (this.length = 0),
                (this._linkedRecords = null),
                (this._unlinkedRecords = null),
                (this._previousItHead = null),
                (this._itHead = null),
                (this._itTail = null),
                (this._additionsHead = null),
                (this._additionsTail = null),
                (this._movesHead = null),
                (this._movesTail = null),
                (this._removalsHead = null),
                (this._removalsTail = null),
                (this._identityChangesHead = null),
                (this._identityChangesTail = null),
                (this._trackByFn = e || Oa);
            }
            return (
              g(t, [
                {
                  key: "forEachItem",
                  value: function (t) {
                    var e;
                    for (e = this._itHead; null !== e; e = e._next) t(e);
                  },
                },
                {
                  key: "forEachOperation",
                  value: function (t) {
                    for (
                      var e = this._itHead,
                        n = this._removalsHead,
                        r = 0,
                        i = null;
                      e || n;

                    ) {
                      var o = !n || (e && e.currentIndex < ja(n, r, i)) ? e : n,
                        a = ja(o, r, i),
                        u = o.currentIndex;
                      if (o === n) r--, (n = n._nextRemoved);
                      else if (((e = e._next), null == o.previousIndex)) r++;
                      else {
                        i || (i = []);
                        var s = a - r,
                          l = u - r;
                        if (s != l) {
                          for (var c = 0; c < s; c++) {
                            var h = c < i.length ? i[c] : (i[c] = 0),
                              f = h + c;
                            l <= f && f < s && (i[c] = h + 1);
                          }
                          i[o.previousIndex] = l - s;
                        }
                      }
                      a !== u && t(o, a, u);
                    }
                  },
                },
                {
                  key: "forEachPreviousItem",
                  value: function (t) {
                    var e;
                    for (
                      e = this._previousItHead;
                      null !== e;
                      e = e._nextPrevious
                    )
                      t(e);
                  },
                },
                {
                  key: "forEachAddedItem",
                  value: function (t) {
                    var e;
                    for (e = this._additionsHead; null !== e; e = e._nextAdded)
                      t(e);
                  },
                },
                {
                  key: "forEachMovedItem",
                  value: function (t) {
                    var e;
                    for (e = this._movesHead; null !== e; e = e._nextMoved)
                      t(e);
                  },
                },
                {
                  key: "forEachRemovedItem",
                  value: function (t) {
                    var e;
                    for (e = this._removalsHead; null !== e; e = e._nextRemoved)
                      t(e);
                  },
                },
                {
                  key: "forEachIdentityChange",
                  value: function (t) {
                    var e;
                    for (
                      e = this._identityChangesHead;
                      null !== e;
                      e = e._nextIdentityChange
                    )
                      t(e);
                  },
                },
                {
                  key: "diff",
                  value: function (t) {
                    if ((null == t && (t = []), !xo(t)))
                      throw new Error(
                        "Error trying to diff '".concat(
                          yt(t),
                          "'. Only arrays and iterables are allowed"
                        )
                      );
                    return this.check(t) ? this : null;
                  },
                },
                { key: "onDestroy", value: function () {} },
                {
                  key: "check",
                  value: function (t) {
                    var e = this;
                    this._reset();
                    var n,
                      r,
                      i,
                      o = this._itHead,
                      a = !1;
                    if (Array.isArray(t)) {
                      this.length = t.length;
                      for (var u = 0; u < this.length; u++)
                        (r = t[u]),
                          (i = this._trackByFn(u, r)),
                          null !== o && Object.is(o.trackById, i)
                            ? (a && (o = this._verifyReinsertion(o, r, i, u)),
                              Object.is(o.item, r) ||
                                this._addIdentityChange(o, r))
                            : ((o = this._mismatch(o, r, i, u)), (a = !0)),
                          (o = o._next);
                    } else
                      (n = 0),
                        (function (t, e) {
                          if (Array.isArray(t))
                            for (var n = 0; n < t.length; n++) e(t[n]);
                          else
                            for (var r, i = t[Eo()](); !(r = i.next()).done; )
                              e(r.value);
                        })(t, function (t) {
                          (i = e._trackByFn(n, t)),
                            null !== o && Object.is(o.trackById, i)
                              ? (a && (o = e._verifyReinsertion(o, t, i, n)),
                                Object.is(o.item, t) ||
                                  e._addIdentityChange(o, t))
                              : ((o = e._mismatch(o, t, i, n)), (a = !0)),
                            (o = o._next),
                            n++;
                        }),
                        (this.length = n);
                    return (
                      this._truncate(o), (this.collection = t), this.isDirty
                    );
                  },
                },
                {
                  key: "isDirty",
                  get: function () {
                    return (
                      null !== this._additionsHead ||
                      null !== this._movesHead ||
                      null !== this._removalsHead ||
                      null !== this._identityChangesHead
                    );
                  },
                },
                {
                  key: "_reset",
                  value: function () {
                    if (this.isDirty) {
                      var t;
                      for (
                        t = this._previousItHead = this._itHead;
                        null !== t;
                        t = t._next
                      )
                        t._nextPrevious = t._next;
                      for (
                        t = this._additionsHead;
                        null !== t;
                        t = t._nextAdded
                      )
                        t.previousIndex = t.currentIndex;
                      for (
                        this._additionsHead = this._additionsTail = null,
                          t = this._movesHead;
                        null !== t;
                        t = t._nextMoved
                      )
                        t.previousIndex = t.currentIndex;
                      (this._movesHead = this._movesTail = null),
                        (this._removalsHead = this._removalsTail = null),
                        (this._identityChangesHead = this._identityChangesTail =
                          null);
                    }
                  },
                },
                {
                  key: "_mismatch",
                  value: function (t, e, n, r) {
                    var i;
                    return (
                      null === t
                        ? (i = this._itTail)
                        : ((i = t._prev), this._remove(t)),
                      null !==
                      (t =
                        null === this._unlinkedRecords
                          ? null
                          : this._unlinkedRecords.get(n, null))
                        ? (Object.is(t.item, e) ||
                            this._addIdentityChange(t, e),
                          this._reinsertAfter(t, i, r))
                        : null !==
                          (t =
                            null === this._linkedRecords
                              ? null
                              : this._linkedRecords.get(n, r))
                        ? (Object.is(t.item, e) ||
                            this._addIdentityChange(t, e),
                          this._moveAfter(t, i, r))
                        : (t = this._addAfter(new Ra(e, n), i, r)),
                      t
                    );
                  },
                },
                {
                  key: "_verifyReinsertion",
                  value: function (t, e, n, r) {
                    var i =
                      null === this._unlinkedRecords
                        ? null
                        : this._unlinkedRecords.get(n, null);
                    return (
                      null !== i
                        ? (t = this._reinsertAfter(i, t._prev, r))
                        : t.currentIndex != r &&
                          ((t.currentIndex = r), this._addToMoves(t, r)),
                      t
                    );
                  },
                },
                {
                  key: "_truncate",
                  value: function (t) {
                    for (; null !== t; ) {
                      var e = t._next;
                      this._addToRemovals(this._unlink(t)), (t = e);
                    }
                    null !== this._unlinkedRecords &&
                      this._unlinkedRecords.clear(),
                      null !== this._additionsTail &&
                        (this._additionsTail._nextAdded = null),
                      null !== this._movesTail &&
                        (this._movesTail._nextMoved = null),
                      null !== this._itTail && (this._itTail._next = null),
                      null !== this._removalsTail &&
                        (this._removalsTail._nextRemoved = null),
                      null !== this._identityChangesTail &&
                        (this._identityChangesTail._nextIdentityChange = null);
                  },
                },
                {
                  key: "_reinsertAfter",
                  value: function (t, e, n) {
                    null !== this._unlinkedRecords &&
                      this._unlinkedRecords.remove(t);
                    var r = t._prevRemoved,
                      i = t._nextRemoved;
                    return (
                      null === r
                        ? (this._removalsHead = i)
                        : (r._nextRemoved = i),
                      null === i
                        ? (this._removalsTail = r)
                        : (i._prevRemoved = r),
                      this._insertAfter(t, e, n),
                      this._addToMoves(t, n),
                      t
                    );
                  },
                },
                {
                  key: "_moveAfter",
                  value: function (t, e, n) {
                    return (
                      this._unlink(t),
                      this._insertAfter(t, e, n),
                      this._addToMoves(t, n),
                      t
                    );
                  },
                },
                {
                  key: "_addAfter",
                  value: function (t, e, n) {
                    return (
                      this._insertAfter(t, e, n),
                      (this._additionsTail =
                        null === this._additionsTail
                          ? (this._additionsHead = t)
                          : (this._additionsTail._nextAdded = t)),
                      t
                    );
                  },
                },
                {
                  key: "_insertAfter",
                  value: function (t, e, n) {
                    var r = null === e ? this._itHead : e._next;
                    return (
                      (t._next = r),
                      (t._prev = e),
                      null === r ? (this._itTail = t) : (r._prev = t),
                      null === e ? (this._itHead = t) : (e._next = t),
                      null === this._linkedRecords &&
                        (this._linkedRecords = new Va()),
                      this._linkedRecords.put(t),
                      (t.currentIndex = n),
                      t
                    );
                  },
                },
                {
                  key: "_remove",
                  value: function (t) {
                    return this._addToRemovals(this._unlink(t));
                  },
                },
                {
                  key: "_unlink",
                  value: function (t) {
                    null !== this._linkedRecords &&
                      this._linkedRecords.remove(t);
                    var e = t._prev,
                      n = t._next;
                    return (
                      null === e ? (this._itHead = n) : (e._next = n),
                      null === n ? (this._itTail = e) : (n._prev = e),
                      t
                    );
                  },
                },
                {
                  key: "_addToMoves",
                  value: function (t, e) {
                    return (
                      t.previousIndex === e ||
                        (this._movesTail =
                          null === this._movesTail
                            ? (this._movesHead = t)
                            : (this._movesTail._nextMoved = t)),
                      t
                    );
                  },
                },
                {
                  key: "_addToRemovals",
                  value: function (t) {
                    return (
                      null === this._unlinkedRecords &&
                        (this._unlinkedRecords = new Va()),
                      this._unlinkedRecords.put(t),
                      (t.currentIndex = null),
                      (t._nextRemoved = null),
                      null === this._removalsTail
                        ? ((this._removalsTail = this._removalsHead = t),
                          (t._prevRemoved = null))
                        : ((t._prevRemoved = this._removalsTail),
                          (this._removalsTail =
                            this._removalsTail._nextRemoved =
                              t)),
                      t
                    );
                  },
                },
                {
                  key: "_addIdentityChange",
                  value: function (t, e) {
                    return (
                      (t.item = e),
                      (this._identityChangesTail =
                        null === this._identityChangesTail
                          ? (this._identityChangesHead = t)
                          : (this._identityChangesTail._nextIdentityChange =
                              t)),
                      t
                    );
                  },
                },
              ]),
              t
            );
          })(),
          Ra = function t(e, n) {
            p(this, t),
              (this.item = e),
              (this.trackById = n),
              (this.currentIndex = null),
              (this.previousIndex = null),
              (this._nextPrevious = null),
              (this._prev = null),
              (this._next = null),
              (this._prevDup = null),
              (this._nextDup = null),
              (this._prevRemoved = null),
              (this._nextRemoved = null),
              (this._nextAdded = null),
              (this._nextMoved = null),
              (this._nextIdentityChange = null);
          },
          Pa = (function () {
            function t() {
              p(this, t), (this._head = null), (this._tail = null);
            }
            return (
              g(t, [
                {
                  key: "add",
                  value: function (t) {
                    null === this._head
                      ? ((this._head = this._tail = t),
                        (t._nextDup = null),
                        (t._prevDup = null))
                      : ((this._tail._nextDup = t),
                        (t._prevDup = this._tail),
                        (t._nextDup = null),
                        (this._tail = t));
                  },
                },
                {
                  key: "get",
                  value: function (t, e) {
                    var n;
                    for (n = this._head; null !== n; n = n._nextDup)
                      if (
                        (null === e || e <= n.currentIndex) &&
                        Object.is(n.trackById, t)
                      )
                        return n;
                    return null;
                  },
                },
                {
                  key: "remove",
                  value: function (t) {
                    var e = t._prevDup,
                      n = t._nextDup;
                    return (
                      null === e ? (this._head = n) : (e._nextDup = n),
                      null === n ? (this._tail = e) : (n._prevDup = e),
                      null === this._head
                    );
                  },
                },
              ]),
              t
            );
          })(),
          Va = (function () {
            function t() {
              p(this, t), (this.map = new Map());
            }
            return (
              g(t, [
                {
                  key: "put",
                  value: function (t) {
                    var e = t.trackById,
                      n = this.map.get(e);
                    n || ((n = new Pa()), this.map.set(e, n)), n.add(t);
                  },
                },
                {
                  key: "get",
                  value: function (t, e) {
                    var n = this.map.get(t);
                    return n ? n.get(t, e) : null;
                  },
                },
                {
                  key: "remove",
                  value: function (t) {
                    var e = t.trackById;
                    return this.map.get(e).remove(t) && this.map.delete(e), t;
                  },
                },
                {
                  key: "isEmpty",
                  get: function () {
                    return 0 === this.map.size;
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this.map.clear();
                  },
                },
              ]),
              t
            );
          })();
        function ja(t, e, n) {
          var r = t.previousIndex;
          if (null === r) return r;
          var i = 0;
          return n && r < n.length && (i = n[r]), r + e + i;
        }
        var Da = (function () {
            function t() {
              p(this, t);
            }
            return (
              g(t, [
                {
                  key: "supports",
                  value: function (t) {
                    return t instanceof Map || Ao(t);
                  },
                },
                {
                  key: "create",
                  value: function () {
                    return new Na();
                  },
                },
              ]),
              t
            );
          })(),
          Na = (function () {
            function t() {
              p(this, t),
                (this._records = new Map()),
                (this._mapHead = null),
                (this._appendAfter = null),
                (this._previousMapHead = null),
                (this._changesHead = null),
                (this._changesTail = null),
                (this._additionsHead = null),
                (this._additionsTail = null),
                (this._removalsHead = null),
                (this._removalsTail = null);
            }
            return (
              g(t, [
                {
                  key: "isDirty",
                  get: function () {
                    return (
                      null !== this._additionsHead ||
                      null !== this._changesHead ||
                      null !== this._removalsHead
                    );
                  },
                },
                {
                  key: "forEachItem",
                  value: function (t) {
                    var e;
                    for (e = this._mapHead; null !== e; e = e._next) t(e);
                  },
                },
                {
                  key: "forEachPreviousItem",
                  value: function (t) {
                    var e;
                    for (
                      e = this._previousMapHead;
                      null !== e;
                      e = e._nextPrevious
                    )
                      t(e);
                  },
                },
                {
                  key: "forEachChangedItem",
                  value: function (t) {
                    var e;
                    for (e = this._changesHead; null !== e; e = e._nextChanged)
                      t(e);
                  },
                },
                {
                  key: "forEachAddedItem",
                  value: function (t) {
                    var e;
                    for (e = this._additionsHead; null !== e; e = e._nextAdded)
                      t(e);
                  },
                },
                {
                  key: "forEachRemovedItem",
                  value: function (t) {
                    var e;
                    for (e = this._removalsHead; null !== e; e = e._nextRemoved)
                      t(e);
                  },
                },
                {
                  key: "diff",
                  value: function (t) {
                    if (t) {
                      if (!(t instanceof Map || Ao(t)))
                        throw new Error(
                          "Error trying to diff '".concat(
                            yt(t),
                            "'. Only maps and objects are allowed"
                          )
                        );
                    } else t = new Map();
                    return this.check(t) ? this : null;
                  },
                },
                { key: "onDestroy", value: function () {} },
                {
                  key: "check",
                  value: function (t) {
                    var e = this;
                    this._reset();
                    var n = this._mapHead;
                    if (
                      ((this._appendAfter = null),
                      this._forEach(t, function (t, r) {
                        if (n && n.key === r)
                          e._maybeAddToChanges(n, t),
                            (e._appendAfter = n),
                            (n = n._next);
                        else {
                          var i = e._getOrCreateRecordForKey(r, t);
                          n = e._insertBeforeOrAppend(n, i);
                        }
                      }),
                      n)
                    ) {
                      n._prev && (n._prev._next = null),
                        (this._removalsHead = n);
                      for (var r = n; null !== r; r = r._nextRemoved)
                        r === this._mapHead && (this._mapHead = null),
                          this._records.delete(r.key),
                          (r._nextRemoved = r._next),
                          (r.previousValue = r.currentValue),
                          (r.currentValue = null),
                          (r._prev = null),
                          (r._next = null);
                    }
                    return (
                      this._changesTail &&
                        (this._changesTail._nextChanged = null),
                      this._additionsTail &&
                        (this._additionsTail._nextAdded = null),
                      this.isDirty
                    );
                  },
                },
                {
                  key: "_insertBeforeOrAppend",
                  value: function (t, e) {
                    if (t) {
                      var n = t._prev;
                      return (
                        (e._next = t),
                        (e._prev = n),
                        (t._prev = e),
                        n && (n._next = e),
                        t === this._mapHead && (this._mapHead = e),
                        (this._appendAfter = t),
                        t
                      );
                    }
                    return (
                      this._appendAfter
                        ? ((this._appendAfter._next = e),
                          (e._prev = this._appendAfter))
                        : (this._mapHead = e),
                      (this._appendAfter = e),
                      null
                    );
                  },
                },
                {
                  key: "_getOrCreateRecordForKey",
                  value: function (t, e) {
                    if (this._records.has(t)) {
                      var n = this._records.get(t);
                      this._maybeAddToChanges(n, e);
                      var r = n._prev,
                        i = n._next;
                      return (
                        r && (r._next = i),
                        i && (i._prev = r),
                        (n._next = null),
                        (n._prev = null),
                        n
                      );
                    }
                    var o = new Ua(t);
                    return (
                      this._records.set(t, o),
                      (o.currentValue = e),
                      this._addToAdditions(o),
                      o
                    );
                  },
                },
                {
                  key: "_reset",
                  value: function () {
                    if (this.isDirty) {
                      var t;
                      for (
                        this._previousMapHead = this._mapHead,
                          t = this._previousMapHead;
                        null !== t;
                        t = t._next
                      )
                        t._nextPrevious = t._next;
                      for (
                        t = this._changesHead;
                        null !== t;
                        t = t._nextChanged
                      )
                        t.previousValue = t.currentValue;
                      for (t = this._additionsHead; null != t; t = t._nextAdded)
                        t.previousValue = t.currentValue;
                      (this._changesHead = this._changesTail = null),
                        (this._additionsHead = this._additionsTail = null),
                        (this._removalsHead = null);
                    }
                  },
                },
                {
                  key: "_maybeAddToChanges",
                  value: function (t, e) {
                    Object.is(e, t.currentValue) ||
                      ((t.previousValue = t.currentValue),
                      (t.currentValue = e),
                      this._addToChanges(t));
                  },
                },
                {
                  key: "_addToAdditions",
                  value: function (t) {
                    null === this._additionsHead
                      ? (this._additionsHead = this._additionsTail = t)
                      : ((this._additionsTail._nextAdded = t),
                        (this._additionsTail = t));
                  },
                },
                {
                  key: "_addToChanges",
                  value: function (t) {
                    null === this._changesHead
                      ? (this._changesHead = this._changesTail = t)
                      : ((this._changesTail._nextChanged = t),
                        (this._changesTail = t));
                  },
                },
                {
                  key: "_forEach",
                  value: function (t, e) {
                    t instanceof Map
                      ? t.forEach(e)
                      : Object.keys(t).forEach(function (n) {
                          return e(t[n], n);
                        });
                  },
                },
              ]),
              t
            );
          })(),
          Ua = function t(e) {
            p(this, t),
              (this.key = e),
              (this.previousValue = null),
              (this.currentValue = null),
              (this._nextPrevious = null),
              (this._next = null),
              (this._prev = null),
              (this._nextAdded = null),
              (this._nextRemoved = null),
              (this._nextChanged = null);
          };
        function Ma() {
          return new Fa([new Ta()]);
        }
        var Fa = (function () {
          var t = (function () {
            function t(e) {
              p(this, t), (this.factories = e);
            }
            return (
              g(
                t,
                [
                  {
                    key: "find",
                    value: function (t) {
                      var e,
                        n = this.factories.find(function (e) {
                          return e.supports(t);
                        });
                      if (null != n) return n;
                      throw new Error(
                        "Cannot find a differ supporting object '"
                          .concat(t, "' of type '")
                          .concat((e = t).name || typeof e, "'")
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (e, n) {
                      if (null != n) {
                        var r = n.factories.slice();
                        e = e.concat(r);
                      }
                      return new t(e);
                    },
                  },
                  {
                    key: "extend",
                    value: function (e) {
                      return {
                        provide: t,
                        useFactory: function (n) {
                          return t.create(e, n || Ma());
                        },
                        deps: [[t, new hr(), new cr()]],
                      };
                    },
                  },
                ]
              ),
              t
            );
          })();
          return (
            (t.ɵprov = xt({ token: t, providedIn: "root", factory: Ma })), t
          );
        })();
        function La() {
          return new Ha([new Da()]);
        }
        var Ha = (function () {
          var t = (function () {
            function t(e) {
              p(this, t), (this.factories = e);
            }
            return (
              g(
                t,
                [
                  {
                    key: "find",
                    value: function (t) {
                      var e = this.factories.find(function (e) {
                        return e.supports(t);
                      });
                      if (e) return e;
                      throw new Error(
                        "Cannot find a differ supporting object '".concat(
                          t,
                          "'"
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (e, n) {
                      if (n) {
                        var r = n.factories.slice();
                        e = e.concat(r);
                      }
                      return new t(e);
                    },
                  },
                  {
                    key: "extend",
                    value: function (e) {
                      return {
                        provide: t,
                        useFactory: function (n) {
                          return t.create(e, n || La());
                        },
                        deps: [[t, new hr(), new cr()]],
                      };
                    },
                  },
                ]
              ),
              t
            );
          })();
          return (
            (t.ɵprov = xt({ token: t, providedIn: "root", factory: La })), t
          );
        })();
        function za(t, e, r, i) {
          for (
            var o =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            null !== r;

          ) {
            var a = e[r.index];
            if ((null !== a && i.push(Oe(a)), ve(a)))
              for (var u = 10; u < a.length; u++) {
                var s = a[u],
                  l = s[1].firstChild;
                null !== l && za(s[1], s, l, i);
              }
            var c = r.type;
            if (8 & c) za(t, e, r.child, i);
            else if (32 & c)
              for (var h = xr(r, e), f = void 0; (f = h()); ) i.push(f);
            else if (16 & c) {
              var d = Br(e, r);
              if (Array.isArray(d)) i.push.apply(i, n(d));
              else {
                var v = Ar(e[16]);
                za(v[1], v, d, i, !0);
              }
            }
            r = o ? r.projectionNext : r.next;
          }
          return i;
        }
        var Ba = (function () {
            function t(e, n) {
              p(this, t),
                (this._lView = e),
                (this._cdRefInjectingView = n),
                (this._appRef = null),
                (this._attachedToViewContainer = !1);
            }
            return (
              g(t, [
                {
                  key: "rootNodes",
                  get: function () {
                    var t = this._lView,
                      e = t[1];
                    return za(e, t, e.firstChild, []);
                  },
                },
                {
                  key: "context",
                  get: function () {
                    return this._lView[8];
                  },
                },
                {
                  key: "destroyed",
                  get: function () {
                    return 256 == (256 & this._lView[2]);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    if (this._appRef) this._appRef.detachView(this);
                    else if (this._attachedToViewContainer) {
                      var t = this._lView[3];
                      if (ve(t)) {
                        var e = t[8],
                          n = e ? e.indexOf(this) : -1;
                        n > -1 && (jr(t, n), Kn(e, n));
                      }
                      this._attachedToViewContainer = !1;
                    }
                    Dr(this._lView[1], this._lView);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (t) {
                    var e, n;
                    (e = this._lView), (n = t), $i(e).push(n);
                  },
                },
                {
                  key: "markForCheck",
                  value: function () {
                    qi(this._cdRefInjectingView || this._lView);
                  },
                },
                {
                  key: "detach",
                  value: function () {
                    this._lView[2] &= -129;
                  },
                },
                {
                  key: "reattach",
                  value: function () {
                    this._lView[2] |= 128;
                  },
                },
                {
                  key: "detectChanges",
                  value: function () {
                    Gi(this._lView[1], this._lView, this.context);
                  },
                },
                {
                  key: "checkNoChanges",
                  value: function () {
                    !(function (t, e, n) {
                      $e(!0);
                      try {
                        Gi(t, e, n);
                      } finally {
                        $e(!1);
                      }
                    })(this._lView[1], this._lView, this.context);
                  },
                },
                {
                  key: "attachToViewContainerRef",
                  value: function () {
                    if (this._appRef)
                      throw new Error(
                        "This view is already attached directly to the ApplicationRef!"
                      );
                    this._attachedToViewContainer = !0;
                  },
                },
                {
                  key: "detachFromAppRef",
                  value: function () {
                    var t;
                    (this._appRef = null),
                      Zr(
                        this._lView[1],
                        (t = this._lView),
                        t[11],
                        2,
                        null,
                        null
                      );
                  },
                },
                {
                  key: "attachToAppRef",
                  value: function (t) {
                    if (this._attachedToViewContainer)
                      throw new Error(
                        "This view is already attached to a ViewContainer!"
                      );
                    this._appRef = t;
                  },
                },
              ]),
              t
            );
          })(),
          qa = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t) {
              var r;
              return p(this, n), ((r = e.call(this, t))._view = t), r;
            }
            return (
              g(n, [
                {
                  key: "detectChanges",
                  value: function () {
                    Zi(this._view);
                  },
                },
                {
                  key: "checkNoChanges",
                  value: function () {
                    !(function (t) {
                      $e(!0);
                      try {
                        Zi(t);
                      } finally {
                        $e(!1);
                      }
                    })(this._view);
                  },
                },
                {
                  key: "context",
                  get: function () {
                    return null;
                  },
                },
              ]),
              n
            );
          })(Ba),
          Ga = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (function (t, e, n) {
              if (!n && ye(t)) {
                var r = Ve(t.index, e);
                return new Ba(r, r);
              }
              return 47 & t.type ? new Ba(e[16], e) : null;
            })(qe(), He(), t);
          },
          Za = (function () {
            var t = function t() {
              p(this, t);
            };
            return (
              (t.__NG_ELEMENT_ID__ = Ga), (t.__ChangeDetectorRef__ = !0), t
            );
          })(),
          Wa = [new Da()],
          Qa = new Fa([new Ta()]),
          $a = new Ha(Wa),
          Ja = function () {
            return Xa(qe(), He());
          },
          Ka = (function () {
            var t = function t() {
              p(this, t);
            };
            return (t.__NG_ELEMENT_ID__ = Ja), t;
          })(),
          Ya = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return (
                p(this, n),
                ((o = e.call(this))._declarationLView = t),
                (o._declarationTContainer = r),
                (o.elementRef = i),
                o
              );
            }
            return (
              g(n, [
                {
                  key: "createEmbeddedView",
                  value: function (t) {
                    var e = this._declarationTContainer.tViews,
                      n = yi(
                        this._declarationLView,
                        e,
                        t,
                        16,
                        null,
                        e.declTNode,
                        null,
                        null,
                        null,
                        null
                      );
                    n[17] =
                      this._declarationLView[this._declarationTContainer.index];
                    var r = this._declarationLView[19];
                    return (
                      null !== r && (n[19] = r.createEmbeddedView(e)),
                      _i(e, n, t),
                      new Ba(n)
                    );
                  },
                },
              ]),
              n
            );
          })(Ka);
        function Xa(t, e) {
          return 4 & t.type ? new Ya(e, t, ka(t, e)) : null;
        }
        var tu = function t() {
            p(this, t);
          },
          eu = function t() {
            p(this, t);
          },
          nu = function () {
            return (function (t, e) {
              var n,
                r = e[t.index];
              if (ve(r)) n = r;
              else {
                var i;
                if (8 & t.type) i = Oe(r);
                else {
                  var o = e[11];
                  i = o.createComment("");
                  var a = Re(t, e);
                  Ur(
                    o,
                    Lr(o, a),
                    i,
                    (function (t, e) {
                      return Ae(t) ? t.nextSibling(e) : e.nextSibling;
                    })(o, a),
                    !1
                  );
                }
                (e[t.index] = n = Fi(r, e, i, t)), Bi(e, n);
              }
              return new iu(n, t, e);
            })(qe(), He());
          },
          ru = (function () {
            var t = function t() {
              p(this, t);
            };
            return (t.__NG_ELEMENT_ID__ = nu), t;
          })(),
          iu = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return (
                p(this, n),
                ((o = e.call(this))._lContainer = t),
                (o._hostTNode = r),
                (o._hostLView = i),
                o
              );
            }
            return (
              g(n, [
                {
                  key: "element",
                  get: function () {
                    return ka(this._hostTNode, this._hostLView);
                  },
                },
                {
                  key: "injector",
                  get: function () {
                    return new Bn(this._hostTNode, this._hostLView);
                  },
                },
                {
                  key: "parentInjector",
                  get: function () {
                    var t = Pn(this._hostTNode, this._hostLView);
                    if (Cn(t)) {
                      var e = En(t, this._hostLView),
                        n = Sn(t);
                      return new Bn(e[1].data[n + 8], e);
                    }
                    return new Bn(null, this._hostLView);
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    for (; this.length > 0; ) this.remove(this.length - 1);
                  },
                },
                {
                  key: "get",
                  value: function (t) {
                    var e = ou(this._lContainer);
                    return (null !== e && e[t]) || null;
                  },
                },
                {
                  key: "length",
                  get: function () {
                    return this._lContainer.length - 10;
                  },
                },
                {
                  key: "createEmbeddedView",
                  value: function (t, e, n) {
                    var r = t.createEmbeddedView(e || {});
                    return this.insert(r, n), r;
                  },
                },
                {
                  key: "createComponent",
                  value: function (t, e, n, r, i) {
                    var o = n || this.parentInjector;
                    if (!i && null == t.ngModule && o) {
                      var a = o.get(tu, null);
                      a && (i = a);
                    }
                    var u = t.create(o, r, void 0, i);
                    return this.insert(u.hostView, e), u;
                  },
                },
                {
                  key: "insert",
                  value: function (t, e) {
                    var r = t._lView,
                      i = r[1];
                    if (ve(r[3])) {
                      var o = this.indexOf(t);
                      if (-1 !== o) this.detach(o);
                      else {
                        var a = r[3],
                          u = new n(a, a[6], a[3]);
                        u.detach(u.indexOf(t));
                      }
                    }
                    var s = this._adjustIndex(e),
                      l = this._lContainer;
                    !(function (t, e, n, r) {
                      var i = 10 + r,
                        o = n.length;
                      r > 0 && (n[i - 1][4] = e),
                        r < o - 10
                          ? ((e[4] = n[i]), Jn(n, 10 + r, e))
                          : (n.push(e), (e[4] = null)),
                        (e[3] = n);
                      var a = e[17];
                      null !== a &&
                        n !== a &&
                        (function (t, e) {
                          var n = t[9];
                          e[16] !== e[3][3][16] && (t[2] = !0),
                            null === n ? (t[9] = [e]) : n.push(e);
                        })(a, e);
                      var u = e[19];
                      null !== u && u.insertView(t), (e[2] |= 128);
                    })(i, r, l, s);
                    var c = qr(s, l),
                      h = r[11],
                      f = Lr(h, l[7]);
                    return (
                      null !== f &&
                        (function (t, e, n, r, i, o) {
                          (r[0] = i), (r[6] = e), Zr(t, r, n, 1, i, o);
                        })(i, l[6], h, r, f, c),
                      t.attachToViewContainerRef(),
                      Jn(au(l), s, t),
                      t
                    );
                  },
                },
                {
                  key: "move",
                  value: function (t, e) {
                    return this.insert(t, e);
                  },
                },
                {
                  key: "indexOf",
                  value: function (t) {
                    var e = ou(this._lContainer);
                    return null !== e ? e.indexOf(t) : -1;
                  },
                },
                {
                  key: "remove",
                  value: function (t) {
                    var e = this._adjustIndex(t, -1),
                      n = jr(this._lContainer, e);
                    n && (Kn(au(this._lContainer), e), Dr(n[1], n));
                  },
                },
                {
                  key: "detach",
                  value: function (t) {
                    var e = this._adjustIndex(t, -1),
                      n = jr(this._lContainer, e);
                    return n && null != Kn(au(this._lContainer), e)
                      ? new Ba(n)
                      : null;
                  },
                },
                {
                  key: "_adjustIndex",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                    return null == t ? this.length + e : t;
                  },
                },
              ]),
              n
            );
          })(ru);
        function ou(t) {
          return t[8];
        }
        function au(t) {
          return t[8] || (t[8] = []);
        }
        var uu = {},
          su = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t) {
              var r;
              return p(this, n), ((r = e.call(this)).ngModule = t), r;
            }
            return (
              g(n, [
                {
                  key: "resolveComponentFactory",
                  value: function (t) {
                    var e = he(t);
                    return new hu(e, this.ngModule);
                  },
                },
              ]),
              n
            );
          })(ma);
        function lu(t) {
          var e = [];
          for (var n in t)
            t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
          return e;
        }
        var cu = new Zn("SCHEDULER_TOKEN", {
            providedIn: "root",
            factory: function () {
              return Cr;
            },
          }),
          hu = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n),
                ((i = e.call(this)).componentDef = t),
                (i.ngModule = r),
                (i.componentType = t.type),
                (i.selector = t.selectors.map(oi).join(",")),
                (i.ngContentSelectors = t.ngContentSelectors
                  ? t.ngContentSelectors
                  : []),
                (i.isBoundToModule = !!r),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "inputs",
                  get: function () {
                    return lu(this.componentDef.inputs);
                  },
                },
                {
                  key: "outputs",
                  get: function () {
                    return lu(this.componentDef.outputs);
                  },
                },
                {
                  key: "create",
                  value: function (t, e, n, r) {
                    var i,
                      o,
                      a = (r = r || this.ngModule)
                        ? (function (t, e) {
                            return {
                              get: function (n, r, i) {
                                var o = t.get(n, uu, i);
                                return o !== uu || r === uu
                                  ? o
                                  : e.get(n, r, i);
                              },
                            };
                          })(t, r.injector)
                        : t,
                      u = a.get(Ca, Te),
                      s = a.get(xa, null),
                      l = u.createRenderer(null, this.componentDef),
                      c = this.componentDef.selectors[0][0] || "div",
                      h = n
                        ? (function (t, e, n) {
                            if (Ae(t))
                              return t.selectRootElement(e, n === Ht.ShadowDom);
                            var r =
                              "string" == typeof e ? t.querySelector(e) : e;
                            return (r.textContent = ""), r;
                          })(l, n, this.componentDef.encapsulation)
                        : Pr(
                            u.createRenderer(null, this.componentDef),
                            c,
                            (function (t) {
                              var e = t.toLowerCase();
                              return "svg" === e
                                ? "http://www.w3.org/2000/svg"
                                : "math" === e
                                ? "http://www.w3.org/1998/MathML/"
                                : null;
                            })(c)
                          ),
                      f = this.componentDef.onPush ? 576 : 528,
                      d = {
                        components: [],
                        scheduler: Cr,
                        clean: Qi,
                        playerHandler: null,
                        flags: 0,
                      },
                      v = xi(0, null, null, 1, 0, null, null, null, null, null),
                      p = yi(null, v, d, f, null, null, u, l, s, a);
                    en(p);
                    try {
                      var y = (function (t, e, n, r, i, o) {
                        var a = n[1];
                        n[20] = t;
                        var u = gi(a, 20, 2, "#host", null),
                          s = (u.mergedAttrs = e.hostAttrs);
                        null !== s &&
                          (Xi(u, s, !0),
                          null !== t &&
                            (mn(i, t, s),
                            null !== u.classes && $r(i, t, u.classes),
                            null !== u.styles && Qr(i, t, u.styles)));
                        var l = r.createRenderer(t, e),
                          c = yi(
                            n,
                            Ei(e),
                            null,
                            e.onPush ? 64 : 16,
                            n[20],
                            u,
                            r,
                            l,
                            null,
                            null
                          );
                        return (
                          a.firstCreatePass &&
                            (Vn(On(u, n), a, e.type),
                            Pi(a, u),
                            ji(u, n.length, 1)),
                          Bi(n, c),
                          (n[20] = c)
                        );
                      })(h, this.componentDef, p, u, l);
                      if (h)
                        if (n) mn(l, h, ["ng-version", Aa.full]);
                        else {
                          var g = (function (t) {
                              for (
                                var e = [], n = [], r = 1, i = 2;
                                r < t.length;

                              ) {
                                var o = t[r];
                                if ("string" == typeof o)
                                  2 === i
                                    ? "" !== o && e.push(o, t[++r])
                                    : 8 === i && n.push(o);
                                else {
                                  if (!ei(i)) break;
                                  i = o;
                                }
                                r++;
                              }
                              return { attrs: e, classes: n };
                            })(this.componentDef.selectors[0]),
                            m = g.attrs,
                            _ = g.classes;
                          m && mn(l, h, m),
                            _ && _.length > 0 && $r(l, h, _.join(" "));
                        }
                      if (((o = Pe(v, 20)), void 0 !== e))
                        for (
                          var k = (o.projection = []), w = 0;
                          w < this.ngContentSelectors.length;
                          w++
                        ) {
                          var b = e[w];
                          k.push(null != b ? Array.from(b) : null);
                        }
                      (i = (function (t, e, n, r, i) {
                        var o = n[1],
                          a = (function (t, e, n) {
                            var r = qe();
                            t.firstCreatePass &&
                              (n.providersResolver && n.providersResolver(n),
                              Di(t, r, e, mi(t, e, 1, null), n));
                            var i = Ln(e, t, r.directiveStart, r);
                            br(i, e);
                            var o = Re(r, e);
                            return o && br(o, e), i;
                          })(o, n, e);
                        if (
                          (r.components.push(a),
                          (t[8] = a),
                          i &&
                            i.forEach(function (t) {
                              return t(a, e);
                            }),
                          e.contentQueries)
                        ) {
                          var u = qe();
                          e.contentQueries(1, a, u.directiveStart);
                        }
                        var s = qe();
                        return (
                          !o.firstCreatePass ||
                            (null === e.hostBindings && null === e.hostAttrs) ||
                            (ln(s.index),
                            Ii(n[1], s, 0, s.directiveStart, s.directiveEnd, e),
                            Ri(e, a)),
                          a
                        );
                      })(y, this.componentDef, p, d, [mo])),
                        _i(v, p, null);
                    } finally {
                      un();
                    }
                    return new fu(this.componentType, i, ka(o, p), p, o);
                  },
                },
              ]),
              n
            );
          })(ya),
          fu = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o, a) {
              var u;
              return (
                p(this, n),
                ((u = e.call(this)).location = i),
                (u._rootLView = o),
                (u._tNode = a),
                (u.instance = r),
                (u.hostView = u.changeDetectorRef = new qa(o)),
                (u.componentType = t),
                u
              );
            }
            return (
              g(n, [
                {
                  key: "injector",
                  get: function () {
                    return new Bn(this._tNode, this._rootLView);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.hostView.destroy();
                  },
                },
                {
                  key: "onDestroy",
                  value: function (t) {
                    this.hostView.onDestroy(t);
                  },
                },
              ]),
              n
            );
          })(
            (function () {
              return function t() {
                p(this, t);
              };
            })()
          ),
          du = new Map(),
          vu = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              p(this, n),
                ((i = e.call(this))._parent = r),
                (i._bootstrapComponents = []),
                (i.injector = f(i)),
                (i.destroyCbs = []),
                (i.componentFactoryResolver = new su(f(i)));
              var o = fe(t),
                a = t[te] || null;
              return (
                a && ua(a),
                (i._bootstrapComponents = Sr(o.bootstrap)),
                (i._r3Injector = so(
                  t,
                  r,
                  [
                    { provide: tu, useValue: f(i) },
                    { provide: ma, useValue: i.componentFactoryResolver },
                  ],
                  yt(t)
                )),
                i._r3Injector._resolveInjectorDefTypes(),
                (i.instance = i.get(t)),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "get",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : go.THROW_IF_NOT_FOUND,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : Nt.Default;
                    return t === go || t === tu || t === eo
                      ? this
                      : this._r3Injector.get(t, e, n);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var t = this._r3Injector;
                    !t.destroyed && t.destroy(),
                      this.destroyCbs.forEach(function (t) {
                        return t();
                      }),
                      (this.destroyCbs = null);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (t) {
                    this.destroyCbs.push(t);
                  },
                },
              ]),
              n
            );
          })(tu),
          pu = (function (t) {
            s(r, t);
            var n = c(r);
            function r(t) {
              var i, o, a;
              return (
                p(this, r),
                ((i = n.call(this)).moduleType = t),
                null !== fe(t) &&
                  ((o = t),
                  (a = new Set()),
                  (function t(n) {
                    var r = fe(n, !0),
                      i = r.id;
                    null !== i &&
                      ((function (t, e, n) {
                        if (e && e !== n)
                          throw new Error(
                            "Duplicate module registered for "
                              .concat(t, " - ")
                              .concat(yt(e), " vs ")
                              .concat(yt(e.name))
                          );
                      })(i, du.get(i), n),
                      du.set(i, n));
                    var o,
                      u = e(Sr(r.imports));
                    try {
                      for (u.s(); !(o = u.n()).done; ) {
                        var s = o.value;
                        a.has(s) || (a.add(s), t(s));
                      }
                    } catch (l) {
                      u.e(l);
                    } finally {
                      u.f();
                    }
                  })(o)),
                i
              );
            }
            return (
              g(r, [
                {
                  key: "create",
                  value: function (t) {
                    return new vu(this.moduleType, t);
                  },
                },
              ]),
              r
            );
          })(eu);
        function yu(t, e, n, r) {
          return (function (t, e, n, r, i, o) {
            var a = e + n;
            return To(t, a, i)
              ? (function (t, e, n) {
                  return (t[e] = n);
                })(t, a + 1, o ? r.call(o, i) : r(i))
              : (function (t, e) {
                  var n = t[e];
                  return n === ai ? void 0 : n;
                })(t, a + 1);
          })(
            He(),
            ((i = Fe.lFrame),
            -1 === (o = i.bindingRootIndex) &&
              (o = i.bindingRootIndex = i.tView.bindingStartIndex),
            o),
            t,
            e,
            n,
            r
          );
          var i, o;
        }
        var gu = (function (t) {
          s(n, t);
          var e = c(n);
          function n() {
            var t,
              r =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return p(this, n), ((t = e.call(this)).__isAsync = r), t;
          }
          return (
            g(n, [
              {
                key: "emit",
                value: function (t) {
                  u(v(n.prototype), "next", this).call(this, t);
                },
              },
              {
                key: "subscribe",
                value: function (t, e, r) {
                  var i,
                    o = function (t) {
                      return null;
                    },
                    a = function () {
                      return null;
                    };
                  t && "object" == typeof t
                    ? ((i = this.__isAsync
                        ? function (e) {
                            setTimeout(function () {
                              return t.next(e);
                            });
                          }
                        : function (e) {
                            t.next(e);
                          }),
                      t.error &&
                        (o = this.__isAsync
                          ? function (e) {
                              setTimeout(function () {
                                return t.error(e);
                              });
                            }
                          : function (e) {
                              t.error(e);
                            }),
                      t.complete &&
                        (a = this.__isAsync
                          ? function () {
                              setTimeout(function () {
                                return t.complete();
                              });
                            }
                          : function () {
                              t.complete();
                            }))
                    : ((i = this.__isAsync
                        ? function (e) {
                            setTimeout(function () {
                              return t(e);
                            });
                          }
                        : function (e) {
                            t(e);
                          }),
                      e &&
                        (o = this.__isAsync
                          ? function (t) {
                              setTimeout(function () {
                                return e(t);
                              });
                            }
                          : function (t) {
                              e(t);
                            }),
                      r &&
                        (a = this.__isAsync
                          ? function () {
                              setTimeout(function () {
                                return r();
                              });
                            }
                          : function () {
                              r();
                            }));
                  var s = u(v(n.prototype), "subscribe", this).call(
                    this,
                    i,
                    o,
                    a
                  );
                  return t instanceof E && t.add(s), s;
                },
              },
            ]),
            n
          );
        })(F);
        function mu(t, e) {
          return Xa(t, e);
        }
        var _u = new Zn("Application Initializer"),
          ku = (function () {
            var t = (function () {
              function t(e) {
                var n = this;
                p(this, t),
                  (this.appInits = e),
                  (this.resolve = _a),
                  (this.reject = _a),
                  (this.initialized = !1),
                  (this.done = !1),
                  (this.donePromise = new Promise(function (t, e) {
                    (n.resolve = t), (n.reject = e);
                  }));
              }
              return (
                g(t, [
                  {
                    key: "runInitializers",
                    value: function () {
                      var t = this;
                      if (!this.initialized) {
                        var e = [],
                          n = function () {
                            (t.done = !0), t.resolve();
                          };
                        if (this.appInits)
                          for (var r = 0; r < this.appInits.length; r++) {
                            var i = this.appInits[r]();
                            Mo(i) && e.push(i);
                          }
                        Promise.all(e)
                          .then(function () {
                            n();
                          })
                          .catch(function (e) {
                            t.reject(e);
                          }),
                          0 === e.length && n(),
                          (this.initialized = !0);
                      }
                    },
                  },
                ]),
                t
              );
            })();
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(ar(_u, 8));
              }),
              (t.ɵprov = xt({ token: t, factory: t.ɵfac })),
              t
            );
          })(),
          wu = new Zn("AppId"),
          bu = {
            provide: wu,
            useFactory: function () {
              return "".concat(Cu()).concat(Cu()).concat(Cu());
            },
            deps: [],
          };
        function Cu() {
          return String.fromCharCode(97 + Math.floor(25 * Math.random()));
        }
        var Su = new Zn("Platform Initializer"),
          Eu = new Zn("Platform ID"),
          xu = new Zn("appBootstrapListener"),
          Au = (function () {
            var t = (function () {
              function t() {
                p(this, t);
              }
              return (
                g(t, [
                  {
                    key: "log",
                    value: function (t) {
                      console.log(t);
                    },
                  },
                  {
                    key: "warn",
                    value: function (t) {
                      console.warn(t);
                    },
                  },
                ]),
                t
              );
            })();
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵprov = xt({ token: t, factory: t.ɵfac })),
              t
            );
          })(),
          Tu = new Zn("LocaleId"),
          Ou = new Zn("DefaultCurrencyCode"),
          Iu = function t(e, n) {
            p(this, t),
              (this.ngModuleFactory = e),
              (this.componentFactories = n);
          },
          Ru = function (t) {
            return new pu(t);
          },
          Pu = Ru,
          Vu = function (t) {
            return Promise.resolve(Ru(t));
          },
          ju = function (t) {
            var e = Ru(t),
              n = Sr(fe(t).declarations).reduce(function (t, e) {
                var n = he(e);
                return n && t.push(new hu(n)), t;
              }, []);
            return new Iu(e, n);
          },
          Du = ju,
          Nu = function (t) {
            return Promise.resolve(ju(t));
          },
          Uu = (function () {
            var t = (function () {
              function t() {
                p(this, t),
                  (this.compileModuleSync = Pu),
                  (this.compileModuleAsync = Vu),
                  (this.compileModuleAndAllComponentsSync = Du),
                  (this.compileModuleAndAllComponentsAsync = Nu);
              }
              return (
                g(t, [
                  { key: "clearCache", value: function () {} },
                  { key: "clearCacheFor", value: function (t) {} },
                  { key: "getModuleId", value: function (t) {} },
                ]),
                t
              );
            })();
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵprov = xt({ token: t, factory: t.ɵfac })),
              t
            );
          })(),
          Mu = Promise.resolve(0);
        function Fu(t) {
          "undefined" == typeof Zone
            ? Mu.then(function () {
                t && t.apply(null, null);
              })
            : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
        }
        var Lu = (function () {
            function t(e) {
              var n,
                r,
                i = e.enableLongStackTrace,
                o = void 0 !== i && i,
                a = e.shouldCoalesceEventChangeDetection,
                u = void 0 !== a && a,
                s = e.shouldCoalesceRunChangeDetection,
                l = void 0 !== s && s;
              if (
                (p(this, t),
                (this.hasPendingMacrotasks = !1),
                (this.hasPendingMicrotasks = !1),
                (this.isStable = !0),
                (this.onUnstable = new gu(!1)),
                (this.onMicrotaskEmpty = new gu(!1)),
                (this.onStable = new gu(!1)),
                (this.onError = new gu(!1)),
                "undefined" == typeof Zone)
              )
                throw new Error(
                  "In this configuration Angular requires Zone.js"
                );
              Zone.assertZonePatched(),
                (this._nesting = 0),
                (this._outer = this._inner = Zone.current),
                Zone.TaskTrackingZoneSpec &&
                  (this._inner = this._inner.fork(
                    new Zone.TaskTrackingZoneSpec()
                  )),
                o &&
                  Zone.longStackTraceZoneSpec &&
                  (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
                (this.shouldCoalesceEventChangeDetection = !l && u),
                (this.shouldCoalesceRunChangeDetection = l),
                (this.lastRequestAnimationFrameId = -1),
                (this.nativeRequestAnimationFrame = (function () {
                  var t = Zt.requestAnimationFrame,
                    e = Zt.cancelAnimationFrame;
                  if ("undefined" != typeof Zone && t && e) {
                    var n = t[Zone.__symbol__("OriginalDelegate")];
                    n && (t = n);
                    var r = e[Zone.__symbol__("OriginalDelegate")];
                    r && (e = r);
                  }
                  return {
                    nativeRequestAnimationFrame: t,
                    nativeCancelAnimationFrame: e,
                  };
                })().nativeRequestAnimationFrame),
                (r = function () {
                  !(function (t) {
                    -1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId =
                        t.nativeRequestAnimationFrame.call(Zt, function () {
                          t.fakeTopEventTask ||
                            (t.fakeTopEventTask = Zone.root.scheduleEventTask(
                              "fakeTopEventTask",
                              function () {
                                (t.lastRequestAnimationFrameId = -1),
                                  Bu(t),
                                  zu(t);
                              },
                              void 0,
                              function () {},
                              function () {}
                            )),
                            t.fakeTopEventTask.invoke();
                        })),
                      Bu(t));
                  })(n);
                }),
                ((n = this)._inner = n._inner.fork({
                  name: "angular",
                  properties: { isAngularZone: !0 },
                  onInvokeTask: function (t, e, i, o, a, u) {
                    try {
                      return qu(n), t.invokeTask(i, o, a, u);
                    } finally {
                      ((n.shouldCoalesceEventChangeDetection &&
                        "eventTask" === o.type) ||
                        n.shouldCoalesceRunChangeDetection) &&
                        r(),
                        Gu(n);
                    }
                  },
                  onInvoke: function (t, e, i, o, a, u, s) {
                    try {
                      return qu(n), t.invoke(i, o, a, u, s);
                    } finally {
                      n.shouldCoalesceRunChangeDetection && r(), Gu(n);
                    }
                  },
                  onHasTask: function (t, e, r, i) {
                    t.hasTask(r, i),
                      e === r &&
                        ("microTask" == i.change
                          ? ((n._hasPendingMicrotasks = i.microTask),
                            Bu(n),
                            zu(n))
                          : "macroTask" == i.change &&
                            (n.hasPendingMacrotasks = i.macroTask));
                  },
                  onHandleError: function (t, e, r, i) {
                    return (
                      t.handleError(r, i),
                      n.runOutsideAngular(function () {
                        return n.onError.emit(i);
                      }),
                      !1
                    );
                  },
                }));
            }
            return (
              g(
                t,
                [
                  {
                    key: "run",
                    value: function (t, e, n) {
                      return this._inner.run(t, e, n);
                    },
                  },
                  {
                    key: "runTask",
                    value: function (t, e, n, r) {
                      var i = this._inner,
                        o = i.scheduleEventTask(
                          "NgZoneEvent: " + r,
                          t,
                          Hu,
                          _a,
                          _a
                        );
                      try {
                        return i.runTask(o, e, n);
                      } finally {
                        i.cancelTask(o);
                      }
                    },
                  },
                  {
                    key: "runGuarded",
                    value: function (t, e, n) {
                      return this._inner.runGuarded(t, e, n);
                    },
                  },
                  {
                    key: "runOutsideAngular",
                    value: function (t) {
                      return this._outer.run(t);
                    },
                  },
                ],
                [
                  {
                    key: "isInAngularZone",
                    value: function () {
                      return !0 === Zone.current.get("isAngularZone");
                    },
                  },
                  {
                    key: "assertInAngularZone",
                    value: function () {
                      if (!t.isInAngularZone())
                        throw new Error(
                          "Expected to be in Angular Zone, but it is not!"
                        );
                    },
                  },
                  {
                    key: "assertNotInAngularZone",
                    value: function () {
                      if (t.isInAngularZone())
                        throw new Error(
                          "Expected to not be in Angular Zone, but it is!"
                        );
                    },
                  },
                ]
              ),
              t
            );
          })(),
          Hu = {};
        function zu(t) {
          if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
            try {
              t._nesting++, t.onMicrotaskEmpty.emit(null);
            } finally {
              if ((t._nesting--, !t.hasPendingMicrotasks))
                try {
                  t.runOutsideAngular(function () {
                    return t.onStable.emit(null);
                  });
                } finally {
                  t.isStable = !0;
                }
            }
        }
        function Bu(t) {
          t.hasPendingMicrotasks = !!(
            t._hasPendingMicrotasks ||
            ((t.shouldCoalesceEventChangeDetection ||
              t.shouldCoalesceRunChangeDetection) &&
              -1 !== t.lastRequestAnimationFrameId)
          );
        }
        function qu(t) {
          t._nesting++,
            t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
        }
        function Gu(t) {
          t._nesting--, zu(t);
        }
        var Zu,
          Wu = (function () {
            function t() {
              p(this, t),
                (this.hasPendingMicrotasks = !1),
                (this.hasPendingMacrotasks = !1),
                (this.isStable = !0),
                (this.onUnstable = new gu()),
                (this.onMicrotaskEmpty = new gu()),
                (this.onStable = new gu()),
                (this.onError = new gu());
            }
            return (
              g(t, [
                {
                  key: "run",
                  value: function (t, e, n) {
                    return t.apply(e, n);
                  },
                },
                {
                  key: "runGuarded",
                  value: function (t, e, n) {
                    return t.apply(e, n);
                  },
                },
                {
                  key: "runOutsideAngular",
                  value: function (t) {
                    return t();
                  },
                },
                {
                  key: "runTask",
                  value: function (t, e, n, r) {
                    return t.apply(e, n);
                  },
                },
              ]),
              t
            );
          })(),
          Qu = (function () {
            var t = (function () {
              function t(e) {
                var n = this;
                p(this, t),
                  (this._ngZone = e),
                  (this._pendingCount = 0),
                  (this._isZoneStable = !0),
                  (this._didWork = !1),
                  (this._callbacks = []),
                  (this.taskTrackingZone = null),
                  this._watchAngularEvents(),
                  e.run(function () {
                    n.taskTrackingZone =
                      "undefined" == typeof Zone
                        ? null
                        : Zone.current.get("TaskTrackingZone");
                  });
              }
              return (
                g(t, [
                  {
                    key: "_watchAngularEvents",
                    value: function () {
                      var t = this;
                      this._ngZone.onUnstable.subscribe({
                        next: function () {
                          (t._didWork = !0), (t._isZoneStable = !1);
                        },
                      }),
                        this._ngZone.runOutsideAngular(function () {
                          t._ngZone.onStable.subscribe({
                            next: function () {
                              Lu.assertNotInAngularZone(),
                                Fu(function () {
                                  (t._isZoneStable = !0),
                                    t._runCallbacksIfReady();
                                });
                            },
                          });
                        });
                    },
                  },
                  {
                    key: "increasePendingRequestCount",
                    value: function () {
                      return (
                        (this._pendingCount += 1),
                        (this._didWork = !0),
                        this._pendingCount
                      );
                    },
                  },
                  {
                    key: "decreasePendingRequestCount",
                    value: function () {
                      if (((this._pendingCount -= 1), this._pendingCount < 0))
                        throw new Error("pending async requests below zero");
                      return this._runCallbacksIfReady(), this._pendingCount;
                    },
                  },
                  {
                    key: "isStable",
                    value: function () {
                      return (
                        this._isZoneStable &&
                        0 === this._pendingCount &&
                        !this._ngZone.hasPendingMacrotasks
                      );
                    },
                  },
                  {
                    key: "_runCallbacksIfReady",
                    value: function () {
                      var t = this;
                      if (this.isStable())
                        Fu(function () {
                          for (; 0 !== t._callbacks.length; ) {
                            var e = t._callbacks.pop();
                            clearTimeout(e.timeoutId), e.doneCb(t._didWork);
                          }
                          t._didWork = !1;
                        });
                      else {
                        var e = this.getPendingTasks();
                        (this._callbacks = this._callbacks.filter(function (t) {
                          return (
                            !t.updateCb ||
                            !t.updateCb(e) ||
                            (clearTimeout(t.timeoutId), !1)
                          );
                        })),
                          (this._didWork = !0);
                      }
                    },
                  },
                  {
                    key: "getPendingTasks",
                    value: function () {
                      return this.taskTrackingZone
                        ? this.taskTrackingZone.macroTasks.map(function (t) {
                            return {
                              source: t.source,
                              creationLocation: t.creationLocation,
                              data: t.data,
                            };
                          })
                        : [];
                    },
                  },
                  {
                    key: "addCallback",
                    value: function (t, e, n) {
                      var r = this,
                        i = -1;
                      e &&
                        e > 0 &&
                        (i = setTimeout(function () {
                          (r._callbacks = r._callbacks.filter(function (t) {
                            return t.timeoutId !== i;
                          })),
                            t(r._didWork, r.getPendingTasks());
                        }, e)),
                        this._callbacks.push({
                          doneCb: t,
                          timeoutId: i,
                          updateCb: n,
                        });
                    },
                  },
                  {
                    key: "whenStable",
                    value: function (t, e, n) {
                      if (n && !this.taskTrackingZone)
                        throw new Error(
                          'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                        );
                      this.addCallback(t, e, n), this._runCallbacksIfReady();
                    },
                  },
                  {
                    key: "getPendingRequestCount",
                    value: function () {
                      return this._pendingCount;
                    },
                  },
                  {
                    key: "findProviders",
                    value: function (t, e, n) {
                      return [];
                    },
                  },
                ]),
                t
              );
            })();
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(ar(Lu));
              }),
              (t.ɵprov = xt({ token: t, factory: t.ɵfac })),
              t
            );
          })(),
          $u = (function () {
            var t = (function () {
              function t() {
                p(this, t),
                  (this._applications = new Map()),
                  Ju.addToWindow(this);
              }
              return (
                g(t, [
                  {
                    key: "registerApplication",
                    value: function (t, e) {
                      this._applications.set(t, e);
                    },
                  },
                  {
                    key: "unregisterApplication",
                    value: function (t) {
                      this._applications.delete(t);
                    },
                  },
                  {
                    key: "unregisterAllApplications",
                    value: function () {
                      this._applications.clear();
                    },
                  },
                  {
                    key: "getTestability",
                    value: function (t) {
                      return this._applications.get(t) || null;
                    },
                  },
                  {
                    key: "getAllTestabilities",
                    value: function () {
                      return Array.from(this._applications.values());
                    },
                  },
                  {
                    key: "getAllRootElements",
                    value: function () {
                      return Array.from(this._applications.keys());
                    },
                  },
                  {
                    key: "findTestabilityInTree",
                    value: function (t) {
                      var e =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                      return Ju.findTestabilityInTree(this, t, e);
                    },
                  },
                ]),
                t
              );
            })();
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵprov = xt({ token: t, factory: t.ɵfac })),
              t
            );
          })(),
          Ju = new ((function () {
            function t() {
              p(this, t);
            }
            return (
              g(t, [
                { key: "addToWindow", value: function (t) {} },
                {
                  key: "findTestabilityInTree",
                  value: function (t, e, n) {
                    return null;
                  },
                },
              ]),
              t
            );
          })())(),
          Ku = !0,
          Yu = !1,
          Xu = new Zn("AllowMultipleToken"),
          ts = function t(e, n) {
            p(this, t), (this.name = e), (this.token = n);
          };
        function es(t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r = "Platform: ".concat(e),
            i = new Zn(r);
          return function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              o = ns();
            if (!o || o.injector.get(Xu, !1))
              if (t) t(n.concat(e).concat({ provide: i, useValue: !0 }));
              else {
                var a = n
                  .concat(e)
                  .concat(
                    { provide: i, useValue: !0 },
                    { provide: ro, useValue: "platform" }
                  );
                !(function (t) {
                  if (Zu && !Zu.destroyed && !Zu.injector.get(Xu, !1))
                    throw new Error(
                      "There can be only one platform. Destroy the previous one to create a new one."
                    );
                  Zu = t.get(rs);
                  var e = t.get(Su, null);
                  e &&
                    e.forEach(function (t) {
                      return t();
                    });
                })(go.create({ providers: a, name: r }));
              }
            return (function (t) {
              var e = ns();
              if (!e) throw new Error("No platform exists!");
              if (!e.injector.get(t, null))
                throw new Error(
                  "A platform with a different configuration has been created. Please destroy it first."
                );
              return e;
            })(i);
          };
        }
        function ns() {
          return Zu && !Zu.destroyed ? Zu : null;
        }
        var rs = (function () {
          var t = (function () {
            function t(e) {
              p(this, t),
                (this._injector = e),
                (this._modules = []),
                (this._destroyListeners = []),
                (this._destroyed = !1);
            }
            return (
              g(t, [
                {
                  key: "bootstrapModuleFactory",
                  value: function (t, e) {
                    var n,
                      r,
                      i = this,
                      o =
                        ((n = e ? e.ngZone : void 0),
                        (r = {
                          ngZoneEventCoalescing:
                            (e && e.ngZoneEventCoalescing) || !1,
                          ngZoneRunCoalescing:
                            (e && e.ngZoneRunCoalescing) || !1,
                        }),
                        "noop" === n
                          ? new Wu()
                          : ("zone.js" === n ? void 0 : n) ||
                            new Lu({
                              enableLongStackTrace: ((Yu = !0), Ku),
                              shouldCoalesceEventChangeDetection: !!(null == r
                                ? void 0
                                : r.ngZoneEventCoalescing),
                              shouldCoalesceRunChangeDetection: !!(null == r
                                ? void 0
                                : r.ngZoneRunCoalescing),
                            })),
                      a = [{ provide: Lu, useValue: o }];
                    return o.run(function () {
                      var e = go.create({
                          providers: a,
                          parent: i.injector,
                          name: t.moduleType.name,
                        }),
                        n = t.create(e),
                        r = n.injector.get(wr, null);
                      if (!r)
                        throw new Error(
                          "No ErrorHandler. Is platform module (BrowserModule) included?"
                        );
                      return (
                        o.runOutsideAngular(function () {
                          var t = o.onError.subscribe({
                            next: function (t) {
                              r.handleError(t);
                            },
                          });
                          n.onDestroy(function () {
                            us(i._modules, n), t.unsubscribe();
                          });
                        }),
                        (function (t, e, r) {
                          try {
                            var o =
                              ((a = n.injector.get(ku)).runInitializers(),
                              a.donePromise.then(function () {
                                return (
                                  ua(n.injector.get(Tu, "en-US") || "en-US"),
                                  i._moduleDoBootstrap(n),
                                  n
                                );
                              }));
                            return Mo(o)
                              ? o.catch(function (n) {
                                  throw (
                                    (e.runOutsideAngular(function () {
                                      return t.handleError(n);
                                    }),
                                    n)
                                  );
                                })
                              : o;
                          } catch (u) {
                            throw (
                              (e.runOutsideAngular(function () {
                                return t.handleError(u);
                              }),
                              u)
                            );
                          }
                          var a;
                        })(r, o)
                      );
                    });
                  },
                },
                {
                  key: "bootstrapModule",
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      r = is({}, n);
                    return (function (t, e, n) {
                      var r = new pu(n);
                      return Promise.resolve(r);
                    })(0, 0, t).then(function (t) {
                      return e.bootstrapModuleFactory(t, r);
                    });
                  },
                },
                {
                  key: "_moduleDoBootstrap",
                  value: function (t) {
                    var e = t.injector.get(as);
                    if (t._bootstrapComponents.length > 0)
                      t._bootstrapComponents.forEach(function (t) {
                        return e.bootstrap(t);
                      });
                    else {
                      if (!t.instance.ngDoBootstrap)
                        throw new Error(
                          "The module ".concat(
                            yt(t.instance.constructor),
                            ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
                          )
                        );
                      t.instance.ngDoBootstrap(e);
                    }
                    this._modules.push(t);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (t) {
                    this._destroyListeners.push(t);
                  },
                },
                {
                  key: "injector",
                  get: function () {
                    return this._injector;
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    if (this._destroyed)
                      throw new Error(
                        "The platform has already been destroyed!"
                      );
                    this._modules.slice().forEach(function (t) {
                      return t.destroy();
                    }),
                      this._destroyListeners.forEach(function (t) {
                        return t();
                      }),
                      (this._destroyed = !0);
                  },
                },
                {
                  key: "destroyed",
                  get: function () {
                    return this._destroyed;
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(ar(go));
            }),
            (t.ɵprov = xt({ token: t, factory: t.ɵfac })),
            t
          );
        })();
        function is(t, e) {
          return Array.isArray(e)
            ? e.reduce(is, t)
            : Object.assign(Object.assign({}, t), e);
        }
        var os,
          as =
            (((os = (function () {
              function t(e, n, r, i, o) {
                var a = this;
                p(this, t),
                  (this._zone = e),
                  (this._injector = n),
                  (this._exceptionHandler = r),
                  (this._componentFactoryResolver = i),
                  (this._initStatus = o),
                  (this._bootstrapListeners = []),
                  (this._views = []),
                  (this._runningTick = !1),
                  (this._stable = !0),
                  (this.componentTypes = []),
                  (this.components = []),
                  (this._onMicrotaskEmptySubscription =
                    this._zone.onMicrotaskEmpty.subscribe({
                      next: function () {
                        a._zone.run(function () {
                          a.tick();
                        });
                      },
                    }));
                var u = new V(function (t) {
                    (a._stable =
                      a._zone.isStable &&
                      !a._zone.hasPendingMacrotasks &&
                      !a._zone.hasPendingMicrotasks),
                      a._zone.runOutsideAngular(function () {
                        t.next(a._stable), t.complete();
                      });
                  }),
                  s = new V(function (t) {
                    var e;
                    a._zone.runOutsideAngular(function () {
                      e = a._zone.onStable.subscribe(function () {
                        Lu.assertNotInAngularZone(),
                          Fu(function () {
                            a._stable ||
                              a._zone.hasPendingMacrotasks ||
                              a._zone.hasPendingMicrotasks ||
                              ((a._stable = !0), t.next(!0));
                          });
                      });
                    });
                    var n = a._zone.onUnstable.subscribe(function () {
                      Lu.assertInAngularZone(),
                        a._stable &&
                          ((a._stable = !1),
                          a._zone.runOutsideAngular(function () {
                            t.next(!1);
                          }));
                    });
                    return function () {
                      e.unsubscribe(), n.unsubscribe();
                    };
                  });
                this.isStable = (function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  var r = Number.POSITIVE_INFINITY,
                    i = null,
                    o = e[e.length - 1];
                  return (
                    H(o)
                      ? ((i = e.pop()),
                        e.length > 1 &&
                          "number" == typeof e[e.length - 1] &&
                          (r = e.pop()))
                      : "number" == typeof o && (r = e.pop()),
                    null === i && 1 === e.length && e[0] instanceof V
                      ? e[0]
                      : it(r)(ot(e, i))
                  );
                })(
                  u,
                  s.pipe(function (t) {
                    return at()(
                      ((e = dt),
                      function (t) {
                        var n;
                        n =
                          "function" == typeof e
                            ? e
                            : function () {
                                return e;
                              };
                        var r = Object.create(t, ht);
                        return (r.source = t), (r.subjectFactory = n), r;
                      })(t)
                    );
                    var e;
                  })
                );
              }
              return (
                g(t, [
                  {
                    key: "bootstrap",
                    value: function (t, e) {
                      var n,
                        r = this;
                      if (!this._initStatus.done)
                        throw new Error(
                          "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
                        );
                      (n =
                        t instanceof ya
                          ? t
                          : this._componentFactoryResolver.resolveComponentFactory(
                              t
                            )),
                        this.componentTypes.push(n.componentType);
                      var i = n.isBoundToModule
                          ? void 0
                          : this._injector.get(tu),
                        o = n.create(go.NULL, [], e || n.selector, i),
                        a = o.location.nativeElement,
                        u = o.injector.get(Qu, null),
                        s = u && o.injector.get($u);
                      return (
                        u && s && s.registerApplication(a, u),
                        o.onDestroy(function () {
                          r.detachView(o.hostView),
                            us(r.components, o),
                            s && s.unregisterApplication(a);
                        }),
                        this._loadComponent(o),
                        o
                      );
                    },
                  },
                  {
                    key: "tick",
                    value: function () {
                      var t = this;
                      if (this._runningTick)
                        throw new Error(
                          "ApplicationRef.tick is called recursively"
                        );
                      try {
                        this._runningTick = !0;
                        var n,
                          r = e(this._views);
                        try {
                          for (r.s(); !(n = r.n()).done; )
                            n.value.detectChanges();
                        } catch (i) {
                          r.e(i);
                        } finally {
                          r.f();
                        }
                      } catch (o) {
                        this._zone.runOutsideAngular(function () {
                          return t._exceptionHandler.handleError(o);
                        });
                      } finally {
                        this._runningTick = !1;
                      }
                    },
                  },
                  {
                    key: "attachView",
                    value: function (t) {
                      var e = t;
                      this._views.push(e), e.attachToAppRef(this);
                    },
                  },
                  {
                    key: "detachView",
                    value: function (t) {
                      var e = t;
                      us(this._views, e), e.detachFromAppRef();
                    },
                  },
                  {
                    key: "_loadComponent",
                    value: function (t) {
                      this.attachView(t.hostView),
                        this.tick(),
                        this.components.push(t),
                        this._injector
                          .get(xu, [])
                          .concat(this._bootstrapListeners)
                          .forEach(function (e) {
                            return e(t);
                          });
                    },
                  },
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this._views.slice().forEach(function (t) {
                        return t.destroy();
                      }),
                        this._onMicrotaskEmptySubscription.unsubscribe();
                    },
                  },
                  {
                    key: "viewCount",
                    get: function () {
                      return this._views.length;
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || os)(ar(Lu), ar(go), ar(wr), ar(ma), ar(ku));
            }),
            (os.ɵprov = xt({ token: os, factory: os.ɵfac })),
            os);
        function us(t, e) {
          var n = t.indexOf(e);
          n > -1 && t.splice(n, 1);
        }
        var ss = function t() {
            p(this, t);
          },
          ls = function t() {
            p(this, t);
          },
          cs = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
          hs = (function () {
            var e = (function () {
              function e(t, n) {
                p(this, e), (this._compiler = t), (this._config = n || cs);
              }
              return (
                g(e, [
                  {
                    key: "load",
                    value: function (t) {
                      return this.loadAndCompile(t);
                    },
                  },
                  {
                    key: "loadAndCompile",
                    value: function (e) {
                      var n = this,
                        r = t(e.split("#"), 2),
                        i = r[0],
                        o = r[1];
                      return (
                        void 0 === o && (o = "default"),
                        l("zn8P")(i)
                          .then(function (t) {
                            return t[o];
                          })
                          .then(function (t) {
                            return fs(t, i, o);
                          })
                          .then(function (t) {
                            return n._compiler.compileModuleAsync(t);
                          })
                      );
                    },
                  },
                  {
                    key: "loadFactory",
                    value: function (e) {
                      var n = t(e.split("#"), 2),
                        r = n[0],
                        i = n[1],
                        o = "NgFactory";
                      return (
                        void 0 === i && ((i = "default"), (o = "")),
                        l("zn8P")(
                          this._config.factoryPathPrefix +
                            r +
                            this._config.factoryPathSuffix
                        )
                          .then(function (t) {
                            return t[i + o];
                          })
                          .then(function (t) {
                            return fs(t, r, i);
                          })
                      );
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(ar(Uu), ar(ls, 8));
              }),
              (e.ɵprov = xt({ token: e, factory: e.ɵfac })),
              e
            );
          })();
        function fs(t, e, n) {
          if (!t)
            throw new Error("Cannot find '".concat(n, "' in '").concat(e, "'"));
          return t;
        }
        var ds = es(null, "core", [
            { provide: Eu, useValue: "unknown" },
            { provide: rs, deps: [go] },
            { provide: $u, deps: [] },
            { provide: Au, deps: [] },
          ]),
          vs = [
            { provide: as, useClass: as, deps: [Lu, go, wr, ma, ku] },
            {
              provide: cu,
              deps: [Lu],
              useFactory: function (t) {
                var e = [];
                return (
                  t.onStable.subscribe(function () {
                    for (; e.length; ) e.pop()();
                  }),
                  function (t) {
                    e.push(t);
                  }
                );
              },
            },
            { provide: ku, useClass: ku, deps: [[new cr(), _u]] },
            { provide: Uu, useClass: Uu, deps: [] },
            bu,
            {
              provide: Fa,
              useFactory: function () {
                return Qa;
              },
              deps: [],
            },
            {
              provide: Ha,
              useFactory: function () {
                return $a;
              },
              deps: [],
            },
            {
              provide: Tu,
              useFactory: function (t) {
                return (
                  ua(
                    (t =
                      t ||
                      ("undefined" != typeof $localize && $localize.locale) ||
                      "en-US")
                  ),
                  t
                );
              },
              deps: [[new lr(Tu), new cr(), new hr()]],
            },
            { provide: Ou, useValue: "USD" },
          ],
          ps = (function () {
            var t = function t(e) {
              p(this, t);
            };
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(ar(as));
              }),
              (t.ɵmod = se({ type: t })),
              (t.ɵinj = At({ providers: vs })),
              t
            );
          })(),
          ys = null;
        function gs() {
          return ys;
        }
        var ms,
          _s = new Zn("DocumentToken"),
          ks =
            (((ms = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || ms)();
            }),
            (ms.ɵprov = xt({ factory: ws, token: ms, providedIn: "platform" })),
            ms);
        function ws() {
          return ar(Ss);
        }
        var bs,
          Cs = new Zn("Location Initialized"),
          Ss =
            (((bs = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t) {
                var r;
                return p(this, n), ((r = e.call(this))._doc = t), r._init(), r;
              }
              return (
                g(n, [
                  {
                    key: "_init",
                    value: function () {
                      (this.location = gs().getLocation()),
                        (this._history = gs().getHistory());
                    },
                  },
                  {
                    key: "getBaseHrefFromDOM",
                    value: function () {
                      return gs().getBaseHref(this._doc);
                    },
                  },
                  {
                    key: "onPopState",
                    value: function (t) {
                      gs()
                        .getGlobalEventTarget(this._doc, "window")
                        .addEventListener("popstate", t, !1);
                    },
                  },
                  {
                    key: "onHashChange",
                    value: function (t) {
                      gs()
                        .getGlobalEventTarget(this._doc, "window")
                        .addEventListener("hashchange", t, !1);
                    },
                  },
                  {
                    key: "href",
                    get: function () {
                      return this.location.href;
                    },
                  },
                  {
                    key: "protocol",
                    get: function () {
                      return this.location.protocol;
                    },
                  },
                  {
                    key: "hostname",
                    get: function () {
                      return this.location.hostname;
                    },
                  },
                  {
                    key: "port",
                    get: function () {
                      return this.location.port;
                    },
                  },
                  {
                    key: "pathname",
                    get: function () {
                      return this.location.pathname;
                    },
                    set: function (t) {
                      this.location.pathname = t;
                    },
                  },
                  {
                    key: "search",
                    get: function () {
                      return this.location.search;
                    },
                  },
                  {
                    key: "hash",
                    get: function () {
                      return this.location.hash;
                    },
                  },
                  {
                    key: "pushState",
                    value: function (t, e, n) {
                      Es()
                        ? this._history.pushState(t, e, n)
                        : (this.location.hash = n);
                    },
                  },
                  {
                    key: "replaceState",
                    value: function (t, e, n) {
                      Es()
                        ? this._history.replaceState(t, e, n)
                        : (this.location.hash = n);
                    },
                  },
                  {
                    key: "forward",
                    value: function () {
                      this._history.forward();
                    },
                  },
                  {
                    key: "back",
                    value: function () {
                      this._history.back();
                    },
                  },
                  {
                    key: "getState",
                    value: function () {
                      return this._history.state;
                    },
                  },
                ]),
                n
              );
            })(ks)).ɵfac = function (t) {
              return new (t || bs)(ar(_s));
            }),
            (bs.ɵprov = xt({ factory: xs, token: bs, providedIn: "platform" })),
            bs);
        function Es() {
          return !!window.history.pushState;
        }
        function xs() {
          return new Ss(ar(_s));
        }
        function As(t, e) {
          if (0 == t.length) return e;
          if (0 == e.length) return t;
          var n = 0;
          return (
            t.endsWith("/") && n++,
            e.startsWith("/") && n++,
            2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
          );
        }
        function Ts(t) {
          var e = t.match(/#|\?|$/),
            n = (e && e.index) || t.length;
          return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
        }
        function Os(t) {
          return t && "?" !== t[0] ? "?" + t : t;
        }
        var Is,
          Rs =
            (((Is = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || Is)();
            }),
            (Is.ɵprov = xt({ factory: Ps, token: Is, providedIn: "root" })),
            Is);
        function Ps(t) {
          var e = ar(_s).location;
          return new Us(ar(ks), (e && e.origin) || "");
        }
        var Vs,
          js,
          Ds,
          Ns = new Zn("appBaseHref"),
          Us =
            (((Ds = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t, r) {
                var i;
                if (
                  (p(this, n),
                  ((i = e.call(this))._platformLocation = t),
                  null == r && (r = i._platformLocation.getBaseHrefFromDOM()),
                  null == r)
                )
                  throw new Error(
                    "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                  );
                return (i._baseHref = r), h(i);
              }
              return (
                g(n, [
                  {
                    key: "onPopState",
                    value: function (t) {
                      this._platformLocation.onPopState(t),
                        this._platformLocation.onHashChange(t);
                    },
                  },
                  {
                    key: "getBaseHref",
                    value: function () {
                      return this._baseHref;
                    },
                  },
                  {
                    key: "prepareExternalUrl",
                    value: function (t) {
                      return As(this._baseHref, t);
                    },
                  },
                  {
                    key: "path",
                    value: function () {
                      var t =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0],
                        e =
                          this._platformLocation.pathname +
                          Os(this._platformLocation.search),
                        n = this._platformLocation.hash;
                      return n && t ? "".concat(e).concat(n) : e;
                    },
                  },
                  {
                    key: "pushState",
                    value: function (t, e, n, r) {
                      var i = this.prepareExternalUrl(n + Os(r));
                      this._platformLocation.pushState(t, e, i);
                    },
                  },
                  {
                    key: "replaceState",
                    value: function (t, e, n, r) {
                      var i = this.prepareExternalUrl(n + Os(r));
                      this._platformLocation.replaceState(t, e, i);
                    },
                  },
                  {
                    key: "forward",
                    value: function () {
                      this._platformLocation.forward();
                    },
                  },
                  {
                    key: "back",
                    value: function () {
                      this._platformLocation.back();
                    },
                  },
                ]),
                n
              );
            })(Rs)).ɵfac = function (t) {
              return new (t || Ds)(ar(ks), ar(Ns, 8));
            }),
            (Ds.ɵprov = xt({ token: Ds, factory: Ds.ɵfac })),
            Ds),
          Ms =
            (((js = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t, r) {
                var i;
                return (
                  p(this, n),
                  ((i = e.call(this))._platformLocation = t),
                  (i._baseHref = ""),
                  null != r && (i._baseHref = r),
                  i
                );
              }
              return (
                g(n, [
                  {
                    key: "onPopState",
                    value: function (t) {
                      this._platformLocation.onPopState(t),
                        this._platformLocation.onHashChange(t);
                    },
                  },
                  {
                    key: "getBaseHref",
                    value: function () {
                      return this._baseHref;
                    },
                  },
                  {
                    key: "path",
                    value: function () {
                      var t = this._platformLocation.hash;
                      return (
                        null == t && (t = "#"),
                        t.length > 0 ? t.substring(1) : t
                      );
                    },
                  },
                  {
                    key: "prepareExternalUrl",
                    value: function (t) {
                      var e = As(this._baseHref, t);
                      return e.length > 0 ? "#" + e : e;
                    },
                  },
                  {
                    key: "pushState",
                    value: function (t, e, n, r) {
                      var i = this.prepareExternalUrl(n + Os(r));
                      0 == i.length && (i = this._platformLocation.pathname),
                        this._platformLocation.pushState(t, e, i);
                    },
                  },
                  {
                    key: "replaceState",
                    value: function (t, e, n, r) {
                      var i = this.prepareExternalUrl(n + Os(r));
                      0 == i.length && (i = this._platformLocation.pathname),
                        this._platformLocation.replaceState(t, e, i);
                    },
                  },
                  {
                    key: "forward",
                    value: function () {
                      this._platformLocation.forward();
                    },
                  },
                  {
                    key: "back",
                    value: function () {
                      this._platformLocation.back();
                    },
                  },
                ]),
                n
              );
            })(Rs)).ɵfac = function (t) {
              return new (t || js)(ar(ks), ar(Ns, 8));
            }),
            (js.ɵprov = xt({ token: js, factory: js.ɵfac })),
            js),
          Fs =
            (((Vs = (function () {
              function t(e, n) {
                var r = this;
                p(this, t),
                  (this._subject = new gu()),
                  (this._urlChangeListeners = []),
                  (this._platformStrategy = e);
                var i = this._platformStrategy.getBaseHref();
                (this._platformLocation = n),
                  (this._baseHref = Ts(Hs(i))),
                  this._platformStrategy.onPopState(function (t) {
                    r._subject.emit({
                      url: r.path(!0),
                      pop: !0,
                      state: t.state,
                      type: t.type,
                    });
                  });
              }
              return (
                g(t, [
                  {
                    key: "path",
                    value: function () {
                      var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      return this.normalize(this._platformStrategy.path(t));
                    },
                  },
                  {
                    key: "getState",
                    value: function () {
                      return this._platformLocation.getState();
                    },
                  },
                  {
                    key: "isCurrentPathEqualTo",
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "";
                      return this.path() == this.normalize(t + Os(e));
                    },
                  },
                  {
                    key: "normalize",
                    value: function (e) {
                      return t.stripTrailingSlash(
                        (function (t, e) {
                          return t && e.startsWith(t)
                            ? e.substring(t.length)
                            : e;
                        })(this._baseHref, Hs(e))
                      );
                    },
                  },
                  {
                    key: "prepareExternalUrl",
                    value: function (t) {
                      return (
                        t && "/" !== t[0] && (t = "/" + t),
                        this._platformStrategy.prepareExternalUrl(t)
                      );
                    },
                  },
                  {
                    key: "go",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "",
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null;
                      this._platformStrategy.pushState(n, "", t, e),
                        this._notifyUrlChangeListeners(
                          this.prepareExternalUrl(t + Os(e)),
                          n
                        );
                    },
                  },
                  {
                    key: "replaceState",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "",
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null;
                      this._platformStrategy.replaceState(n, "", t, e),
                        this._notifyUrlChangeListeners(
                          this.prepareExternalUrl(t + Os(e)),
                          n
                        );
                    },
                  },
                  {
                    key: "forward",
                    value: function () {
                      this._platformStrategy.forward();
                    },
                  },
                  {
                    key: "back",
                    value: function () {
                      this._platformStrategy.back();
                    },
                  },
                  {
                    key: "onUrlChange",
                    value: function (t) {
                      var e = this;
                      this._urlChangeListeners.push(t),
                        this._urlChangeSubscription ||
                          (this._urlChangeSubscription = this.subscribe(
                            function (t) {
                              e._notifyUrlChangeListeners(t.url, t.state);
                            }
                          ));
                    },
                  },
                  {
                    key: "_notifyUrlChangeListeners",
                    value: function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "",
                        e = arguments.length > 1 ? arguments[1] : void 0;
                      this._urlChangeListeners.forEach(function (n) {
                        return n(t, e);
                      });
                    },
                  },
                  {
                    key: "subscribe",
                    value: function (t, e, n) {
                      return this._subject.subscribe({
                        next: t,
                        error: e,
                        complete: n,
                      });
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || Vs)(ar(Rs), ar(ks));
            }),
            (Vs.normalizeQueryParams = Os),
            (Vs.joinWithSlash = As),
            (Vs.stripTrailingSlash = Ts),
            (Vs.ɵprov = xt({ factory: Ls, token: Vs, providedIn: "root" })),
            Vs);
        function Ls() {
          return new Fs(ar(Rs), ar(ks));
        }
        function Hs(t) {
          return t.replace(/\/index.html$/, "");
        }
        var zs,
          Bs,
          qs,
          Gs,
          Zs = (function (t) {
            return (
              (t[(t.Zero = 0)] = "Zero"),
              (t[(t.One = 1)] = "One"),
              (t[(t.Two = 2)] = "Two"),
              (t[(t.Few = 3)] = "Few"),
              (t[(t.Many = 4)] = "Many"),
              (t[(t.Other = 5)] = "Other"),
              t
            );
          })({}),
          Ws = function t() {
            p(this, t);
          },
          Qs =
            (((Bs = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t) {
                var r;
                return p(this, n), ((r = e.call(this)).locale = t), r;
              }
              return (
                g(n, [
                  {
                    key: "getPluralCategory",
                    value: function (t, e) {
                      switch (
                        (function (t) {
                          return (function (t) {
                            var e = (function (t) {
                                return t.toLowerCase().replace(/_/g, "-");
                              })(t),
                              n = oa(e);
                            if (n) return n;
                            var r = e.split("-")[0];
                            if ((n = oa(r))) return n;
                            if ("en" === r) return ra;
                            throw new Error(
                              'Missing locale data for the locale "'.concat(
                                t,
                                '".'
                              )
                            );
                          })(t)[aa.PluralCase];
                        })(e || this.locale)(t)
                      ) {
                        case Zs.Zero:
                          return "zero";
                        case Zs.One:
                          return "one";
                        case Zs.Two:
                          return "two";
                        case Zs.Few:
                          return "few";
                        case Zs.Many:
                          return "many";
                        default:
                          return "other";
                      }
                    },
                  },
                ]),
                n
              );
            })(Ws)).ɵfac = function (t) {
              return new (t || Bs)(ar(Tu));
            }),
            (Bs.ɵprov = xt({ token: Bs, factory: Bs.ɵfac })),
            Bs),
          $s =
            (((zs = (function () {
              function t(e, n, r, i) {
                p(this, t),
                  (this._iterableDiffers = e),
                  (this._keyValueDiffers = n),
                  (this._ngEl = r),
                  (this._renderer = i),
                  (this._iterableDiffer = null),
                  (this._keyValueDiffer = null),
                  (this._initialClasses = []),
                  (this._rawClass = null);
              }
              return (
                g(t, [
                  {
                    key: "klass",
                    set: function (t) {
                      this._removeClasses(this._initialClasses),
                        (this._initialClasses =
                          "string" == typeof t ? t.split(/\s+/) : []),
                        this._applyClasses(this._initialClasses),
                        this._applyClasses(this._rawClass);
                    },
                  },
                  {
                    key: "ngClass",
                    set: function (t) {
                      this._removeClasses(this._rawClass),
                        this._applyClasses(this._initialClasses),
                        (this._iterableDiffer = null),
                        (this._keyValueDiffer = null),
                        (this._rawClass =
                          "string" == typeof t ? t.split(/\s+/) : t),
                        this._rawClass &&
                          (xo(this._rawClass)
                            ? (this._iterableDiffer = this._iterableDiffers
                                .find(this._rawClass)
                                .create())
                            : (this._keyValueDiffer = this._keyValueDiffers
                                .find(this._rawClass)
                                .create()));
                    },
                  },
                  {
                    key: "ngDoCheck",
                    value: function () {
                      if (this._iterableDiffer) {
                        var t = this._iterableDiffer.diff(this._rawClass);
                        t && this._applyIterableChanges(t);
                      } else if (this._keyValueDiffer) {
                        var e = this._keyValueDiffer.diff(this._rawClass);
                        e && this._applyKeyValueChanges(e);
                      }
                    },
                  },
                  {
                    key: "_applyKeyValueChanges",
                    value: function (t) {
                      var e = this;
                      t.forEachAddedItem(function (t) {
                        return e._toggleClass(t.key, t.currentValue);
                      }),
                        t.forEachChangedItem(function (t) {
                          return e._toggleClass(t.key, t.currentValue);
                        }),
                        t.forEachRemovedItem(function (t) {
                          t.previousValue && e._toggleClass(t.key, !1);
                        });
                    },
                  },
                  {
                    key: "_applyIterableChanges",
                    value: function (t) {
                      var e = this;
                      t.forEachAddedItem(function (t) {
                        if ("string" != typeof t.item)
                          throw new Error(
                            "NgClass can only toggle CSS classes expressed as strings, got ".concat(
                              yt(t.item)
                            )
                          );
                        e._toggleClass(t.item, !0);
                      }),
                        t.forEachRemovedItem(function (t) {
                          return e._toggleClass(t.item, !1);
                        });
                    },
                  },
                  {
                    key: "_applyClasses",
                    value: function (t) {
                      var e = this;
                      t &&
                        (Array.isArray(t) || t instanceof Set
                          ? t.forEach(function (t) {
                              return e._toggleClass(t, !0);
                            })
                          : Object.keys(t).forEach(function (n) {
                              return e._toggleClass(n, !!t[n]);
                            }));
                    },
                  },
                  {
                    key: "_removeClasses",
                    value: function (t) {
                      var e = this;
                      t &&
                        (Array.isArray(t) || t instanceof Set
                          ? t.forEach(function (t) {
                              return e._toggleClass(t, !1);
                            })
                          : Object.keys(t).forEach(function (t) {
                              return e._toggleClass(t, !1);
                            }));
                    },
                  },
                  {
                    key: "_toggleClass",
                    value: function (t, e) {
                      var n = this;
                      (t = t.trim()) &&
                        t.split(/\s+/g).forEach(function (t) {
                          e
                            ? n._renderer.addClass(n._ngEl.nativeElement, t)
                            : n._renderer.removeClass(n._ngEl.nativeElement, t);
                        });
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || zs)(Po(Fa), Po(Ha), Po(ba), Po(Sa));
            }),
            (zs.ɵdir = ce({
              type: zs,
              selectors: [["", "ngClass", ""]],
              inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
            })),
            zs),
          Js = (function () {
            function t(e, n, r, i) {
              p(this, t),
                (this.$implicit = e),
                (this.ngForOf = n),
                (this.index = r),
                (this.count = i);
            }
            return (
              g(t, [
                {
                  key: "first",
                  get: function () {
                    return 0 === this.index;
                  },
                },
                {
                  key: "last",
                  get: function () {
                    return this.index === this.count - 1;
                  },
                },
                {
                  key: "even",
                  get: function () {
                    return this.index % 2 == 0;
                  },
                },
                {
                  key: "odd",
                  get: function () {
                    return !this.even;
                  },
                },
              ]),
              t
            );
          })(),
          Ks =
            (((qs = (function () {
              function t(e, n, r) {
                p(this, t),
                  (this._viewContainer = e),
                  (this._template = n),
                  (this._differs = r),
                  (this._ngForOf = null),
                  (this._ngForOfDirty = !0),
                  (this._differ = null);
              }
              return (
                g(
                  t,
                  [
                    {
                      key: "ngForOf",
                      set: function (t) {
                        (this._ngForOf = t), (this._ngForOfDirty = !0);
                      },
                    },
                    {
                      key: "ngForTrackBy",
                      get: function () {
                        return this._trackByFn;
                      },
                      set: function (t) {
                        this._trackByFn = t;
                      },
                    },
                    {
                      key: "ngForTemplate",
                      set: function (t) {
                        t && (this._template = t);
                      },
                    },
                    {
                      key: "ngDoCheck",
                      value: function () {
                        if (this._ngForOfDirty) {
                          this._ngForOfDirty = !1;
                          var t = this._ngForOf;
                          if (!this._differ && t)
                            try {
                              this._differ = this._differs
                                .find(t)
                                .create(this.ngForTrackBy);
                            } catch (r) {
                              throw new Error(
                                "Cannot find a differ supporting object '"
                                  .concat(t, "' of type '")
                                  .concat(
                                    (e = t).name || typeof e,
                                    "'. NgFor only supports binding to Iterables such as Arrays."
                                  )
                              );
                            }
                        }
                        var e;
                        if (this._differ) {
                          var n = this._differ.diff(this._ngForOf);
                          n && this._applyChanges(n);
                        }
                      },
                    },
                    {
                      key: "_applyChanges",
                      value: function (t) {
                        var e = this,
                          n = [];
                        t.forEachOperation(function (t, r, i) {
                          if (null == t.previousIndex) {
                            var o = e._viewContainer.createEmbeddedView(
                                e._template,
                                new Js(null, e._ngForOf, -1, -1),
                                null === i ? void 0 : i
                              ),
                              a = new Ys(t, o);
                            n.push(a);
                          } else if (null == i)
                            e._viewContainer.remove(null === r ? void 0 : r);
                          else if (null !== r) {
                            var u = e._viewContainer.get(r);
                            e._viewContainer.move(u, i);
                            var s = new Ys(t, u);
                            n.push(s);
                          }
                        });
                        for (var r = 0; r < n.length; r++)
                          this._perViewChange(n[r].view, n[r].record);
                        for (
                          var i = 0, o = this._viewContainer.length;
                          i < o;
                          i++
                        ) {
                          var a = this._viewContainer.get(i);
                          (a.context.index = i),
                            (a.context.count = o),
                            (a.context.ngForOf = this._ngForOf);
                        }
                        t.forEachIdentityChange(function (t) {
                          e._viewContainer.get(
                            t.currentIndex
                          ).context.$implicit = t.item;
                        });
                      },
                    },
                    {
                      key: "_perViewChange",
                      value: function (t, e) {
                        t.context.$implicit = e.item;
                      },
                    },
                  ],
                  [
                    {
                      key: "ngTemplateContextGuard",
                      value: function (t, e) {
                        return !0;
                      },
                    },
                  ]
                ),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || qs)(Po(ru), Po(Ka), Po(Fa));
            }),
            (qs.ɵdir = ce({
              type: qs,
              selectors: [["", "ngFor", "", "ngForOf", ""]],
              inputs: {
                ngForOf: "ngForOf",
                ngForTrackBy: "ngForTrackBy",
                ngForTemplate: "ngForTemplate",
              },
            })),
            qs),
          Ys = function t(e, n) {
            p(this, t), (this.record = e), (this.view = n);
          },
          Xs =
            (((Gs = (function () {
              function t(e, n) {
                p(this, t),
                  (this._viewContainer = e),
                  (this._context = new tl()),
                  (this._thenTemplateRef = null),
                  (this._elseTemplateRef = null),
                  (this._thenViewRef = null),
                  (this._elseViewRef = null),
                  (this._thenTemplateRef = n);
              }
              return (
                g(
                  t,
                  [
                    {
                      key: "ngIf",
                      set: function (t) {
                        (this._context.$implicit = this._context.ngIf = t),
                          this._updateView();
                      },
                    },
                    {
                      key: "ngIfThen",
                      set: function (t) {
                        el("ngIfThen", t),
                          (this._thenTemplateRef = t),
                          (this._thenViewRef = null),
                          this._updateView();
                      },
                    },
                    {
                      key: "ngIfElse",
                      set: function (t) {
                        el("ngIfElse", t),
                          (this._elseTemplateRef = t),
                          (this._elseViewRef = null),
                          this._updateView();
                      },
                    },
                    {
                      key: "_updateView",
                      value: function () {
                        this._context.$implicit
                          ? this._thenViewRef ||
                            (this._viewContainer.clear(),
                            (this._elseViewRef = null),
                            this._thenTemplateRef &&
                              (this._thenViewRef =
                                this._viewContainer.createEmbeddedView(
                                  this._thenTemplateRef,
                                  this._context
                                )))
                          : this._elseViewRef ||
                            (this._viewContainer.clear(),
                            (this._thenViewRef = null),
                            this._elseTemplateRef &&
                              (this._elseViewRef =
                                this._viewContainer.createEmbeddedView(
                                  this._elseTemplateRef,
                                  this._context
                                )));
                      },
                    },
                  ],
                  [
                    {
                      key: "ngTemplateContextGuard",
                      value: function (t, e) {
                        return !0;
                      },
                    },
                  ]
                ),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || Gs)(Po(ru), Po(Ka));
            }),
            (Gs.ɵdir = ce({
              type: Gs,
              selectors: [["", "ngIf", ""]],
              inputs: {
                ngIf: "ngIf",
                ngIfThen: "ngIfThen",
                ngIfElse: "ngIfElse",
              },
            })),
            Gs),
          tl = function t() {
            p(this, t), (this.$implicit = null), (this.ngIf = null);
          };
        function el(t, e) {
          if (e && !e.createEmbeddedView)
            throw new Error(
              ""
                .concat(t, " must be a TemplateRef, but received '")
                .concat(yt(e), "'.")
            );
        }
        var nl,
          rl,
          il =
            (((rl = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || rl)();
            }),
            (rl.ɵmod = se({ type: rl })),
            (rl.ɵinj = At({ providers: [{ provide: Ws, useClass: Qs }] })),
            rl),
          ol =
            (((nl = function t() {
              p(this, t);
            }).ɵprov = xt({
              token: nl,
              providedIn: "root",
              factory: function () {
                return new al(ar(_s), window);
              },
            })),
            nl),
          al = (function () {
            function t(e, n) {
              p(this, t),
                (this.document = e),
                (this.window = n),
                (this.offset = function () {
                  return [0, 0];
                });
            }
            return (
              g(t, [
                {
                  key: "setOffset",
                  value: function (t) {
                    this.offset = Array.isArray(t)
                      ? function () {
                          return t;
                        }
                      : t;
                  },
                },
                {
                  key: "getScrollPosition",
                  value: function () {
                    return this.supportsScrolling()
                      ? [this.window.pageXOffset, this.window.pageYOffset]
                      : [0, 0];
                  },
                },
                {
                  key: "scrollToPosition",
                  value: function (t) {
                    this.supportsScrolling() &&
                      this.window.scrollTo(t[0], t[1]);
                  },
                },
                {
                  key: "scrollToAnchor",
                  value: function (t) {
                    var e;
                    if (this.supportsScrolling()) {
                      var n =
                        null !== (e = this.document.getElementById(t)) &&
                        void 0 !== e
                          ? e
                          : this.document.getElementsByName(t)[0];
                      void 0 !== n &&
                        (this.scrollToElement(n), this.attemptFocus(n));
                    }
                  },
                },
                {
                  key: "setHistoryScrollRestoration",
                  value: function (t) {
                    if (this.supportScrollRestoration()) {
                      var e = this.window.history;
                      e && e.scrollRestoration && (e.scrollRestoration = t);
                    }
                  },
                },
                {
                  key: "scrollToElement",
                  value: function (t) {
                    var e = t.getBoundingClientRect(),
                      n = e.left + this.window.pageXOffset,
                      r = e.top + this.window.pageYOffset,
                      i = this.offset();
                    this.window.scrollTo(n - i[0], r - i[1]);
                  },
                },
                {
                  key: "attemptFocus",
                  value: function (t) {
                    return t.focus(), this.document.activeElement === t;
                  },
                },
                {
                  key: "supportScrollRestoration",
                  value: function () {
                    try {
                      if (!this.supportsScrolling()) return !1;
                      var t =
                        ul(this.window.history) ||
                        ul(Object.getPrototypeOf(this.window.history));
                      return !(!t || (!t.writable && !t.set));
                    } catch (e) {
                      return !1;
                    }
                  },
                },
                {
                  key: "supportsScrolling",
                  value: function () {
                    try {
                      return (
                        !!this.window &&
                        !!this.window.scrollTo &&
                        "pageXOffset" in this.window
                      );
                    } catch (t) {
                      return !1;
                    }
                  },
                },
              ]),
              t
            );
          })();
        function ul(t) {
          return Object.getOwnPropertyDescriptor(t, "scrollRestoration");
        }
        var sl,
          ll,
          cl,
          hl,
          fl = (function (n) {
            s(i, n);
            var r = c(i);
            function i() {
              return p(this, i), r.apply(this, arguments);
            }
            return (
              g(
                i,
                [
                  {
                    key: "getProperty",
                    value: function (t, e) {
                      return t[e];
                    },
                  },
                  {
                    key: "log",
                    value: function (t) {
                      window.console &&
                        window.console.log &&
                        window.console.log(t);
                    },
                  },
                  {
                    key: "logGroup",
                    value: function (t) {
                      window.console &&
                        window.console.group &&
                        window.console.group(t);
                    },
                  },
                  {
                    key: "logGroupEnd",
                    value: function () {
                      window.console &&
                        window.console.groupEnd &&
                        window.console.groupEnd();
                    },
                  },
                  {
                    key: "onAndCancel",
                    value: function (t, e, n) {
                      return (
                        t.addEventListener(e, n, !1),
                        function () {
                          t.removeEventListener(e, n, !1);
                        }
                      );
                    },
                  },
                  {
                    key: "dispatchEvent",
                    value: function (t, e) {
                      t.dispatchEvent(e);
                    },
                  },
                  {
                    key: "remove",
                    value: function (t) {
                      return t.parentNode && t.parentNode.removeChild(t), t;
                    },
                  },
                  {
                    key: "getValue",
                    value: function (t) {
                      return t.value;
                    },
                  },
                  {
                    key: "createElement",
                    value: function (t, e) {
                      return (e = e || this.getDefaultDocument()).createElement(
                        t
                      );
                    },
                  },
                  {
                    key: "createHtmlDocument",
                    value: function () {
                      return document.implementation.createHTMLDocument(
                        "fakeTitle"
                      );
                    },
                  },
                  {
                    key: "getDefaultDocument",
                    value: function () {
                      return document;
                    },
                  },
                  {
                    key: "isElementNode",
                    value: function (t) {
                      return t.nodeType === Node.ELEMENT_NODE;
                    },
                  },
                  {
                    key: "isShadowRoot",
                    value: function (t) {
                      return t instanceof DocumentFragment;
                    },
                  },
                  {
                    key: "getGlobalEventTarget",
                    value: function (t, e) {
                      return "window" === e
                        ? window
                        : "document" === e
                        ? t
                        : "body" === e
                        ? t.body
                        : null;
                    },
                  },
                  {
                    key: "getHistory",
                    value: function () {
                      return window.history;
                    },
                  },
                  {
                    key: "getLocation",
                    value: function () {
                      return window.location;
                    },
                  },
                  {
                    key: "getBaseHref",
                    value: function (t) {
                      var e,
                        n =
                          dl || (dl = document.querySelector("base"))
                            ? dl.getAttribute("href")
                            : null;
                      return null == n
                        ? null
                        : ((e = n),
                          sl || (sl = document.createElement("a")),
                          sl.setAttribute("href", e),
                          "/" === sl.pathname.charAt(0)
                            ? sl.pathname
                            : "/" + sl.pathname);
                    },
                  },
                  {
                    key: "resetBaseElement",
                    value: function () {
                      dl = null;
                    },
                  },
                  {
                    key: "getUserAgent",
                    value: function () {
                      return window.navigator.userAgent;
                    },
                  },
                  {
                    key: "performanceNow",
                    value: function () {
                      return window.performance && window.performance.now
                        ? window.performance.now()
                        : new Date().getTime();
                    },
                  },
                  {
                    key: "supportsCookies",
                    value: function () {
                      return !0;
                    },
                  },
                  {
                    key: "getCookie",
                    value: function (n) {
                      return (function (n, r) {
                        r = encodeURIComponent(r);
                        var i,
                          o = e(n.split(";"));
                        try {
                          for (o.s(); !(i = o.n()).done; ) {
                            var a = i.value,
                              u = a.indexOf("="),
                              s = t(
                                -1 == u
                                  ? [a, ""]
                                  : [a.slice(0, u), a.slice(u + 1)],
                                2
                              ),
                              l = s[0],
                              c = s[1];
                            if (l.trim() === r) return decodeURIComponent(c);
                          }
                        } catch (h) {
                          o.e(h);
                        } finally {
                          o.f();
                        }
                        return null;
                      })(document.cookie, n);
                    },
                  },
                ],
                [
                  {
                    key: "makeCurrent",
                    value: function () {
                      var t;
                      (t = new i()), ys || (ys = t);
                    },
                  },
                ]
              ),
              i
            );
          })(
            (function (t) {
              s(n, t);
              var e = c(n);
              function n() {
                return p(this, n), e.call(this);
              }
              return (
                g(n, [
                  {
                    key: "supportsDOMEvents",
                    value: function () {
                      return !0;
                    },
                  },
                ]),
                n
              );
            })(
              (function () {
                return function t() {
                  p(this, t);
                };
              })()
            )
          ),
          dl = null,
          vl = new Zn("TRANSITION_ID"),
          pl = [
            {
              provide: _u,
              useFactory: function (t, e, n) {
                return function () {
                  n.get(ku).donePromise.then(function () {
                    var n = gs();
                    Array.prototype.slice
                      .apply(e.querySelectorAll("style[ng-transition]"))
                      .filter(function (e) {
                        return e.getAttribute("ng-transition") === t;
                      })
                      .forEach(function (t) {
                        return n.remove(t);
                      });
                  });
                };
              },
              deps: [vl, _s, go],
              multi: !0,
            },
          ],
          yl = (function () {
            function t() {
              p(this, t);
            }
            return (
              g(
                t,
                [
                  {
                    key: "addToWindow",
                    value: function (t) {
                      (Zt.getAngularTestability = function (e) {
                        var n =
                            !(
                              arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1],
                          r = t.findTestabilityInTree(e, n);
                        if (null == r)
                          throw new Error(
                            "Could not find testability for element."
                          );
                        return r;
                      }),
                        (Zt.getAllAngularTestabilities = function () {
                          return t.getAllTestabilities();
                        }),
                        (Zt.getAllAngularRootElements = function () {
                          return t.getAllRootElements();
                        }),
                        Zt.frameworkStabilizers ||
                          (Zt.frameworkStabilizers = []),
                        Zt.frameworkStabilizers.push(function (t) {
                          var e = Zt.getAllAngularTestabilities(),
                            n = e.length,
                            r = !1,
                            i = function (e) {
                              (r = r || e), 0 == --n && t(r);
                            };
                          e.forEach(function (t) {
                            t.whenStable(i);
                          });
                        });
                    },
                  },
                  {
                    key: "findTestabilityInTree",
                    value: function (t, e, n) {
                      if (null == e) return null;
                      var r = t.getTestability(e);
                      return null != r
                        ? r
                        : n
                        ? gs().isShadowRoot(e)
                          ? this.findTestabilityInTree(t, e.host, !0)
                          : this.findTestabilityInTree(t, e.parentElement, !0)
                        : null;
                    },
                  },
                ],
                [
                  {
                    key: "init",
                    value: function () {
                      var e;
                      (e = new t()), (Ju = e);
                    },
                  },
                ]
              ),
              t
            );
          })(),
          gl = new Zn("EventManagerPlugins"),
          ml =
            (((ll = (function () {
              function t(e, n) {
                var r = this;
                p(this, t),
                  (this._zone = n),
                  (this._eventNameToPlugin = new Map()),
                  e.forEach(function (t) {
                    return (t.manager = r);
                  }),
                  (this._plugins = e.slice().reverse());
              }
              return (
                g(t, [
                  {
                    key: "addEventListener",
                    value: function (t, e, n) {
                      return this._findPluginFor(e).addEventListener(t, e, n);
                    },
                  },
                  {
                    key: "addGlobalEventListener",
                    value: function (t, e, n) {
                      return this._findPluginFor(e).addGlobalEventListener(
                        t,
                        e,
                        n
                      );
                    },
                  },
                  {
                    key: "getZone",
                    value: function () {
                      return this._zone;
                    },
                  },
                  {
                    key: "_findPluginFor",
                    value: function (t) {
                      var e = this._eventNameToPlugin.get(t);
                      if (e) return e;
                      for (var n = this._plugins, r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (i.supports(t))
                          return this._eventNameToPlugin.set(t, i), i;
                      }
                      throw new Error(
                        "No event manager plugin found for event ".concat(t)
                      );
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || ll)(ar(gl), ar(Lu));
            }),
            (ll.ɵprov = xt({ token: ll, factory: ll.ɵfac })),
            ll),
          _l = (function () {
            function t(e) {
              p(this, t), (this._doc = e);
            }
            return (
              g(t, [
                {
                  key: "addGlobalEventListener",
                  value: function (t, e, n) {
                    var r = gs().getGlobalEventTarget(this._doc, t);
                    if (!r)
                      throw new Error(
                        "Unsupported event target "
                          .concat(r, " for event ")
                          .concat(e)
                      );
                    return this.addEventListener(r, e, n);
                  },
                },
              ]),
              t
            );
          })(),
          kl =
            (((hl = (function () {
              function t() {
                p(this, t), (this._stylesSet = new Set());
              }
              return (
                g(t, [
                  {
                    key: "addStyles",
                    value: function (t) {
                      var e = this,
                        n = new Set();
                      t.forEach(function (t) {
                        e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t));
                      }),
                        this.onStylesAdded(n);
                    },
                  },
                  { key: "onStylesAdded", value: function (t) {} },
                  {
                    key: "getAllStyles",
                    value: function () {
                      return Array.from(this._stylesSet);
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || hl)();
            }),
            (hl.ɵprov = xt({ token: hl, factory: hl.ɵfac })),
            hl),
          wl =
            (((cl = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t) {
                var r;
                return (
                  p(this, n),
                  ((r = e.call(this))._doc = t),
                  (r._hostNodes = new Set()),
                  (r._styleNodes = new Set()),
                  r._hostNodes.add(t.head),
                  r
                );
              }
              return (
                g(n, [
                  {
                    key: "_addStylesToHost",
                    value: function (t, e) {
                      var n = this;
                      t.forEach(function (t) {
                        var r = n._doc.createElement("style");
                        (r.textContent = t),
                          n._styleNodes.add(e.appendChild(r));
                      });
                    },
                  },
                  {
                    key: "addHost",
                    value: function (t) {
                      this._addStylesToHost(this._stylesSet, t),
                        this._hostNodes.add(t);
                    },
                  },
                  {
                    key: "removeHost",
                    value: function (t) {
                      this._hostNodes.delete(t);
                    },
                  },
                  {
                    key: "onStylesAdded",
                    value: function (t) {
                      var e = this;
                      this._hostNodes.forEach(function (n) {
                        return e._addStylesToHost(t, n);
                      });
                    },
                  },
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this._styleNodes.forEach(function (t) {
                        return gs().remove(t);
                      });
                    },
                  },
                ]),
                n
              );
            })(kl)).ɵfac = function (t) {
              return new (t || cl)(ar(_s));
            }),
            (cl.ɵprov = xt({ token: cl, factory: cl.ɵfac })),
            cl),
          bl = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/",
          },
          Cl = /%COMP%/g;
        function Sl(t, e, n) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            Array.isArray(i)
              ? Sl(t, i, n)
              : ((i = i.replace(Cl, t)), n.push(i));
          }
          return n;
        }
        function El(t) {
          return function (e) {
            if ("__ngUnwrap__" === e) return t;
            !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
          };
        }
        var xl,
          Al,
          Tl,
          Ol,
          Il =
            (((xl = (function () {
              function t(e, n, r) {
                p(this, t),
                  (this.eventManager = e),
                  (this.sharedStylesHost = n),
                  (this.appId = r),
                  (this.rendererByCompId = new Map()),
                  (this.defaultRenderer = new Rl(e));
              }
              return (
                g(t, [
                  {
                    key: "createRenderer",
                    value: function (t, e) {
                      if (!t || !e) return this.defaultRenderer;
                      switch (e.encapsulation) {
                        case Ht.Emulated:
                          var n = this.rendererByCompId.get(e.id);
                          return (
                            n ||
                              ((n = new Pl(
                                this.eventManager,
                                this.sharedStylesHost,
                                e,
                                this.appId
                              )),
                              this.rendererByCompId.set(e.id, n)),
                            n.applyToHost(t),
                            n
                          );
                        case 1:
                        case Ht.ShadowDom:
                          return new Vl(
                            this.eventManager,
                            this.sharedStylesHost,
                            t,
                            e
                          );
                        default:
                          if (!this.rendererByCompId.has(e.id)) {
                            var r = Sl(e.id, e.styles, []);
                            this.sharedStylesHost.addStyles(r),
                              this.rendererByCompId.set(
                                e.id,
                                this.defaultRenderer
                              );
                          }
                          return this.defaultRenderer;
                      }
                    },
                  },
                  { key: "begin", value: function () {} },
                  { key: "end", value: function () {} },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || xl)(ar(ml), ar(wl), ar(wu));
            }),
            (xl.ɵprov = xt({ token: xl, factory: xl.ɵfac })),
            xl),
          Rl = (function () {
            function t(e) {
              p(this, t),
                (this.eventManager = e),
                (this.data = Object.create(null));
            }
            return (
              g(t, [
                { key: "destroy", value: function () {} },
                {
                  key: "createElement",
                  value: function (t, e) {
                    return e
                      ? document.createElementNS(bl[e] || e, t)
                      : document.createElement(t);
                  },
                },
                {
                  key: "createComment",
                  value: function (t) {
                    return document.createComment(t);
                  },
                },
                {
                  key: "createText",
                  value: function (t) {
                    return document.createTextNode(t);
                  },
                },
                {
                  key: "appendChild",
                  value: function (t, e) {
                    t.appendChild(e);
                  },
                },
                {
                  key: "insertBefore",
                  value: function (t, e, n) {
                    t && t.insertBefore(e, n);
                  },
                },
                {
                  key: "removeChild",
                  value: function (t, e) {
                    t && t.removeChild(e);
                  },
                },
                {
                  key: "selectRootElement",
                  value: function (t, e) {
                    var n =
                      "string" == typeof t ? document.querySelector(t) : t;
                    if (!n)
                      throw new Error(
                        'The selector "'.concat(
                          t,
                          '" did not match any elements'
                        )
                      );
                    return e || (n.textContent = ""), n;
                  },
                },
                {
                  key: "parentNode",
                  value: function (t) {
                    return t.parentNode;
                  },
                },
                {
                  key: "nextSibling",
                  value: function (t) {
                    return t.nextSibling;
                  },
                },
                {
                  key: "setAttribute",
                  value: function (t, e, n, r) {
                    if (r) {
                      e = r + ":" + e;
                      var i = bl[r];
                      i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n);
                    } else t.setAttribute(e, n);
                  },
                },
                {
                  key: "removeAttribute",
                  value: function (t, e, n) {
                    if (n) {
                      var r = bl[n];
                      r
                        ? t.removeAttributeNS(r, e)
                        : t.removeAttribute("".concat(n, ":").concat(e));
                    } else t.removeAttribute(e);
                  },
                },
                {
                  key: "addClass",
                  value: function (t, e) {
                    t.classList.add(e);
                  },
                },
                {
                  key: "removeClass",
                  value: function (t, e) {
                    t.classList.remove(e);
                  },
                },
                {
                  key: "setStyle",
                  value: function (t, e, n, r) {
                    r & (Er.DashCase | Er.Important)
                      ? t.style.setProperty(
                          e,
                          n,
                          r & Er.Important ? "important" : ""
                        )
                      : (t.style[e] = n);
                  },
                },
                {
                  key: "removeStyle",
                  value: function (t, e, n) {
                    n & Er.DashCase
                      ? t.style.removeProperty(e)
                      : (t.style[e] = "");
                  },
                },
                {
                  key: "setProperty",
                  value: function (t, e, n) {
                    t[e] = n;
                  },
                },
                {
                  key: "setValue",
                  value: function (t, e) {
                    t.nodeValue = e;
                  },
                },
                {
                  key: "listen",
                  value: function (t, e, n) {
                    return "string" == typeof t
                      ? this.eventManager.addGlobalEventListener(t, e, El(n))
                      : this.eventManager.addEventListener(t, e, El(n));
                  },
                },
              ]),
              t
            );
          })(),
          Pl = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o) {
              var a;
              p(this, n), ((a = e.call(this, t)).component = i);
              var u = Sl(o + "-" + i.id, i.styles, []);
              return (
                r.addStyles(u),
                (a.contentAttr = "_ngcontent-%COMP%".replace(
                  Cl,
                  o + "-" + i.id
                )),
                (a.hostAttr = "_nghost-%COMP%".replace(Cl, o + "-" + i.id)),
                a
              );
            }
            return (
              g(n, [
                {
                  key: "applyToHost",
                  value: function (t) {
                    u(v(n.prototype), "setAttribute", this).call(
                      this,
                      t,
                      this.hostAttr,
                      ""
                    );
                  },
                },
                {
                  key: "createElement",
                  value: function (t, e) {
                    var r = u(v(n.prototype), "createElement", this).call(
                      this,
                      t,
                      e
                    );
                    return (
                      u(v(n.prototype), "setAttribute", this).call(
                        this,
                        r,
                        this.contentAttr,
                        ""
                      ),
                      r
                    );
                  },
                },
              ]),
              n
            );
          })(Rl),
          Vl = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o) {
              var a;
              p(this, n),
                ((a = e.call(this, t)).sharedStylesHost = r),
                (a.hostEl = i),
                (a.shadowRoot = i.attachShadow({ mode: "open" })),
                a.sharedStylesHost.addHost(a.shadowRoot);
              for (var u = Sl(o.id, o.styles, []), s = 0; s < u.length; s++) {
                var l = document.createElement("style");
                (l.textContent = u[s]), a.shadowRoot.appendChild(l);
              }
              return a;
            }
            return (
              g(n, [
                {
                  key: "nodeOrShadowRoot",
                  value: function (t) {
                    return t === this.hostEl ? this.shadowRoot : t;
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.sharedStylesHost.removeHost(this.shadowRoot);
                  },
                },
                {
                  key: "appendChild",
                  value: function (t, e) {
                    return u(v(n.prototype), "appendChild", this).call(
                      this,
                      this.nodeOrShadowRoot(t),
                      e
                    );
                  },
                },
                {
                  key: "insertBefore",
                  value: function (t, e, r) {
                    return u(v(n.prototype), "insertBefore", this).call(
                      this,
                      this.nodeOrShadowRoot(t),
                      e,
                      r
                    );
                  },
                },
                {
                  key: "removeChild",
                  value: function (t, e) {
                    return u(v(n.prototype), "removeChild", this).call(
                      this,
                      this.nodeOrShadowRoot(t),
                      e
                    );
                  },
                },
                {
                  key: "parentNode",
                  value: function (t) {
                    return this.nodeOrShadowRoot(
                      u(v(n.prototype), "parentNode", this).call(
                        this,
                        this.nodeOrShadowRoot(t)
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(Rl),
          jl =
            (((Al = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t) {
                return p(this, n), e.call(this, t);
              }
              return (
                g(n, [
                  {
                    key: "supports",
                    value: function (t) {
                      return !0;
                    },
                  },
                  {
                    key: "addEventListener",
                    value: function (t, e, n) {
                      var r = this;
                      return (
                        t.addEventListener(e, n, !1),
                        function () {
                          return r.removeEventListener(t, e, n);
                        }
                      );
                    },
                  },
                  {
                    key: "removeEventListener",
                    value: function (t, e, n) {
                      return t.removeEventListener(e, n);
                    },
                  },
                ]),
                n
              );
            })(_l)).ɵfac = function (t) {
              return new (t || Al)(ar(_s));
            }),
            (Al.ɵprov = xt({ token: Al, factory: Al.ɵfac })),
            Al),
          Dl = ["alt", "control", "meta", "shift"],
          Nl = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS",
          },
          Ul = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock",
          },
          Ml = {
            alt: function (t) {
              return t.altKey;
            },
            control: function (t) {
              return t.ctrlKey;
            },
            meta: function (t) {
              return t.metaKey;
            },
            shift: function (t) {
              return t.shiftKey;
            },
          },
          Fl =
            (((Tl = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t) {
                return p(this, n), e.call(this, t);
              }
              return (
                g(
                  n,
                  [
                    {
                      key: "supports",
                      value: function (t) {
                        return null != n.parseEventName(t);
                      },
                    },
                    {
                      key: "addEventListener",
                      value: function (t, e, r) {
                        var i = n.parseEventName(e),
                          o = n.eventCallback(
                            i.fullKey,
                            r,
                            this.manager.getZone()
                          );
                        return this.manager
                          .getZone()
                          .runOutsideAngular(function () {
                            return gs().onAndCancel(t, i.domEventName, o);
                          });
                      },
                    },
                  ],
                  [
                    {
                      key: "parseEventName",
                      value: function (t) {
                        var e = t.toLowerCase().split("."),
                          r = e.shift();
                        if (
                          0 === e.length ||
                          ("keydown" !== r && "keyup" !== r)
                        )
                          return null;
                        var i = n._normalizeKey(e.pop()),
                          o = "";
                        if (
                          (Dl.forEach(function (t) {
                            var n = e.indexOf(t);
                            n > -1 && (e.splice(n, 1), (o += t + "."));
                          }),
                          (o += i),
                          0 != e.length || 0 === i.length)
                        )
                          return null;
                        var a = {};
                        return (a.domEventName = r), (a.fullKey = o), a;
                      },
                    },
                    {
                      key: "getEventFullKey",
                      value: function (t) {
                        var e = "",
                          n = (function (t) {
                            var e = t.key;
                            if (null == e) {
                              if (null == (e = t.keyIdentifier))
                                return "Unidentified";
                              e.startsWith("U+") &&
                                ((e = String.fromCharCode(
                                  parseInt(e.substring(2), 16)
                                )),
                                3 === t.location &&
                                  Ul.hasOwnProperty(e) &&
                                  (e = Ul[e]));
                            }
                            return Nl[e] || e;
                          })(t);
                        return (
                          " " === (n = n.toLowerCase())
                            ? (n = "space")
                            : "." === n && (n = "dot"),
                          Dl.forEach(function (r) {
                            r != n && (0, Ml[r])(t) && (e += r + ".");
                          }),
                          (e += n)
                        );
                      },
                    },
                    {
                      key: "eventCallback",
                      value: function (t, e, r) {
                        return function (i) {
                          n.getEventFullKey(i) === t &&
                            r.runGuarded(function () {
                              return e(i);
                            });
                        };
                      },
                    },
                    {
                      key: "_normalizeKey",
                      value: function (t) {
                        switch (t) {
                          case "esc":
                            return "escape";
                          default:
                            return t;
                        }
                      },
                    },
                  ]
                ),
                n
              );
            })(_l)).ɵfac = function (t) {
              return new (t || Tl)(ar(_s));
            }),
            (Tl.ɵprov = xt({ token: Tl, factory: Tl.ɵfac })),
            Tl),
          Ll = es(ds, "browser", [
            { provide: Eu, useValue: "browser" },
            {
              provide: Su,
              useValue: function () {
                fl.makeCurrent(), yl.init();
              },
              multi: !0,
            },
            {
              provide: _s,
              useFactory: function () {
                return (
                  (function (t) {
                    ke = t;
                  })(document),
                  document
                );
              },
              deps: [],
            },
          ]),
          Hl = [
            [],
            { provide: ro, useValue: "root" },
            {
              provide: wr,
              useFactory: function () {
                return new wr();
              },
              deps: [],
            },
            { provide: gl, useClass: jl, multi: !0, deps: [_s, Lu, Eu] },
            { provide: gl, useClass: Fl, multi: !0, deps: [_s] },
            [],
            { provide: Il, useClass: Il, deps: [ml, wl, wu] },
            { provide: Ca, useExisting: Il },
            { provide: kl, useExisting: wl },
            { provide: wl, useClass: wl, deps: [_s] },
            { provide: Qu, useClass: Qu, deps: [Lu] },
            { provide: ml, useClass: ml, deps: [gl, Lu] },
            [],
          ],
          zl =
            (((Ol = (function () {
              function t(e) {
                if ((p(this, t), e))
                  throw new Error(
                    "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
                  );
              }
              return (
                g(t, null, [
                  {
                    key: "withServerTransition",
                    value: function (e) {
                      return {
                        ngModule: t,
                        providers: [
                          { provide: wu, useValue: e.appId },
                          { provide: vl, useExisting: wu },
                          pl,
                        ],
                      };
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || Ol)(ar(Ol, 12));
            }),
            (Ol.ɵmod = se({ type: Ol })),
            (Ol.ɵinj = At({ providers: Hl, imports: [il, ps] })),
            Ol);
        function Bl() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[e.length - 1];
          return H(r) ? (e.pop(), J(e, r)) : ot(e);
        }
        "undefined" != typeof window && window;
        var ql = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t) {
              var r;
              return p(this, n), ((r = e.call(this))._value = t), r;
            }
            return (
              g(n, [
                {
                  key: "value",
                  get: function () {
                    return this.getValue();
                  },
                },
                {
                  key: "_subscribe",
                  value: function (t) {
                    var e = u(v(n.prototype), "_subscribe", this).call(this, t);
                    return e && !e.closed && t.next(this._value), e;
                  },
                },
                {
                  key: "getValue",
                  value: function () {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new N();
                    return this._value;
                  },
                },
                {
                  key: "next",
                  value: function (t) {
                    u(v(n.prototype), "next", this).call(
                      this,
                      (this._value = t)
                    );
                  },
                },
              ]),
              n
            );
          })(F),
          Gl = (function (t) {
            s(n, t);
            var e = c(n);
            function n() {
              return p(this, n), e.apply(this, arguments);
            }
            return (
              g(n, [
                {
                  key: "notifyNext",
                  value: function (t, e, n, r, i) {
                    this.destination.next(e);
                  },
                },
                {
                  key: "notifyError",
                  value: function (t, e) {
                    this.destination.error(t);
                  },
                },
                {
                  key: "notifyComplete",
                  value: function (t) {
                    this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(T),
          Zl = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return (
                p(this, n),
                ((o = e.call(this)).parent = t),
                (o.outerValue = r),
                (o.outerIndex = i),
                (o.index = 0),
                o
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    this.parent.notifyNext(
                      this.outerValue,
                      t,
                      this.outerIndex,
                      this.index++,
                      this
                    );
                  },
                },
                {
                  key: "_error",
                  value: function (t) {
                    this.parent.notifyError(t, this), this.unsubscribe();
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    this.parent.notifyComplete(this), this.unsubscribe();
                  },
                },
              ]),
              n
            );
          })(T);
        function Wl(t, e, n, r) {
          var i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : new Zl(t, n, r);
          if (!i.closed) return e instanceof V ? e.subscribe(i) : $(e)(i);
        }
        var Ql = {},
          $l = (function () {
            function t(e) {
              p(this, t), (this.resultSelector = e);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new Jl(t, this.resultSelector));
                  },
                },
              ]),
              t
            );
          })(),
          Jl = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n),
                ((i = e.call(this, t)).resultSelector = r),
                (i.active = 0),
                (i.values = []),
                (i.observables = []),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    this.values.push(Ql), this.observables.push(t);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    var t = this.observables,
                      e = t.length;
                    if (0 === e) this.destination.complete();
                    else {
                      (this.active = e), (this.toRespond = e);
                      for (var n = 0; n < e; n++)
                        this.add(Wl(this, t[n], void 0, n));
                    }
                  },
                },
                {
                  key: "notifyComplete",
                  value: function (t) {
                    0 == (this.active -= 1) && this.destination.complete();
                  },
                },
                {
                  key: "notifyNext",
                  value: function (t, e, n) {
                    var r = this.values,
                      i = this.toRespond
                        ? r[n] === Ql
                          ? --this.toRespond
                          : this.toRespond
                        : 0;
                    (r[n] = e),
                      0 === i &&
                        (this.resultSelector
                          ? this._tryResultSelector(r)
                          : this.destination.next(r.slice()));
                  },
                },
                {
                  key: "_tryResultSelector",
                  value: function (t) {
                    var e;
                    try {
                      e = this.resultSelector.apply(this, t);
                    } catch (n) {
                      return void this.destination.error(n);
                    }
                    this.destination.next(e);
                  },
                },
              ]),
              n
            );
          })(Gl),
          Kl = (function () {
            function t() {
              return (
                Error.call(this),
                (this.message = "no elements in sequence"),
                (this.name = "EmptyError"),
                this
              );
            }
            return (t.prototype = Object.create(Error.prototype)), t;
          })();
        function Yl() {
          return it(1)(Bl.apply(void 0, arguments));
        }
        var Xl = new V(function (t) {
          return t.complete();
        });
        function tc(t) {
          return t
            ? (function (t) {
                return new V(function (e) {
                  return t.schedule(function () {
                    return e.complete();
                  });
                });
              })(t)
            : Xl;
        }
        function ec(t) {
          return new V(function (e) {
            var n;
            try {
              n = t();
            } catch (r) {
              return void e.error(r);
            }
            return (n ? K(n) : tc()).subscribe(e);
          });
        }
        function nc(t, e) {
          return "function" == typeof e
            ? function (n) {
                return n.pipe(
                  nc(function (n, r) {
                    return K(t(n, r)).pipe(
                      z(function (t, i) {
                        return e(n, t, r, i);
                      })
                    );
                  })
                );
              }
            : function (e) {
                return e.lift(new rc(t));
              };
        }
        var rc = (function () {
            function t(e) {
              p(this, t), (this.project = e);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new ic(t, this.project));
                  },
                },
              ]),
              t
            );
          })(),
          ic = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n),
                ((i = e.call(this, t)).project = r),
                (i.index = 0),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    var e,
                      n = this.index++;
                    try {
                      e = this.project(t, n);
                    } catch (r) {
                      return void this.destination.error(r);
                    }
                    this._innerSub(e);
                  },
                },
                {
                  key: "_innerSub",
                  value: function (t) {
                    var e = this.innerSubscription;
                    e && e.unsubscribe();
                    var n = new Y(this),
                      r = this.destination;
                    r.add(n),
                      (this.innerSubscription = tt(t, n)),
                      this.innerSubscription !== n &&
                        r.add(this.innerSubscription);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    var t = this.innerSubscription;
                    (t && !t.closed) ||
                      u(v(n.prototype), "_complete", this).call(this),
                      this.unsubscribe();
                  },
                },
                {
                  key: "_unsubscribe",
                  value: function () {
                    this.innerSubscription = void 0;
                  },
                },
                {
                  key: "notifyComplete",
                  value: function () {
                    (this.innerSubscription = void 0),
                      this.isStopped &&
                        u(v(n.prototype), "_complete", this).call(this);
                  },
                },
                {
                  key: "notifyNext",
                  value: function (t) {
                    this.destination.next(t);
                  },
                },
              ]),
              n
            );
          })(X),
          oc = (function () {
            function t() {
              return (
                Error.call(this),
                (this.message = "argument out of range"),
                (this.name = "ArgumentOutOfRangeError"),
                this
              );
            }
            return (t.prototype = Object.create(Error.prototype)), t;
          })();
        function ac(t) {
          return function (e) {
            return 0 === t ? tc() : e.lift(new uc(t));
          };
        }
        var uc = (function () {
            function t(e) {
              if ((p(this, t), (this.total = e), this.total < 0))
                throw new oc();
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new sc(t, this.total));
                  },
                },
              ]),
              t
            );
          })(),
          sc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n), ((i = e.call(this, t)).total = r), (i.count = 0), i
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    var e = this.total,
                      n = ++this.count;
                    n <= e &&
                      (this.destination.next(t),
                      n === e &&
                        (this.destination.complete(), this.unsubscribe()));
                  },
                },
              ]),
              n
            );
          })(T);
        function lc(t, e) {
          var n = !1;
          return (
            arguments.length >= 2 && (n = !0),
            function (r) {
              return r.lift(new cc(t, e, n));
            }
          );
        }
        var cc = (function () {
            function t(e, n) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              p(this, t),
                (this.accumulator = e),
                (this.seed = n),
                (this.hasSeed = r);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(
                      new hc(t, this.accumulator, this.seed, this.hasSeed)
                    );
                  },
                },
              ]),
              t
            );
          })(),
          hc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o) {
              var a;
              return (
                p(this, n),
                ((a = e.call(this, t)).accumulator = r),
                (a._seed = i),
                (a.hasSeed = o),
                (a.index = 0),
                a
              );
            }
            return (
              g(n, [
                {
                  key: "seed",
                  get: function () {
                    return this._seed;
                  },
                  set: function (t) {
                    (this.hasSeed = !0), (this._seed = t);
                  },
                },
                {
                  key: "_next",
                  value: function (t) {
                    if (this.hasSeed) return this._tryNext(t);
                    (this.seed = t), this.destination.next(t);
                  },
                },
                {
                  key: "_tryNext",
                  value: function (t) {
                    var e,
                      n = this.index++;
                    try {
                      e = this.accumulator(this.seed, t, n);
                    } catch (r) {
                      this.destination.error(r);
                    }
                    (this.seed = e), this.destination.next(e);
                  },
                },
              ]),
              n
            );
          })(T);
        function fc(t, e) {
          return function (n) {
            return n.lift(new dc(t, e));
          };
        }
        var dc = (function () {
            function t(e, n) {
              p(this, t), (this.predicate = e), (this.thisArg = n);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new vc(t, this.predicate, this.thisArg));
                  },
                },
              ]),
              t
            );
          })(),
          vc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return (
                p(this, n),
                ((o = e.call(this, t)).predicate = r),
                (o.thisArg = i),
                (o.count = 0),
                o
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    var e;
                    try {
                      e = this.predicate.call(this.thisArg, t, this.count++);
                    } catch (n) {
                      return void this.destination.error(n);
                    }
                    e && this.destination.next(t);
                  },
                },
              ]),
              n
            );
          })(T);
        function pc(t) {
          return function (e) {
            var n = new yc(t),
              r = e.lift(n);
            return (n.caught = r);
          };
        }
        var yc = (function () {
            function t(e) {
              p(this, t), (this.selector = e);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new gc(t, this.selector, this.caught));
                  },
                },
              ]),
              t
            );
          })(),
          gc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return (
                p(this, n),
                ((o = e.call(this, t)).selector = r),
                (o.caught = i),
                o
              );
            }
            return (
              g(n, [
                {
                  key: "error",
                  value: function (t) {
                    if (!this.isStopped) {
                      var e;
                      try {
                        e = this.selector(t, this.caught);
                      } catch (o) {
                        return void u(v(n.prototype), "error", this).call(
                          this,
                          o
                        );
                      }
                      this._unsubscribeAndRecycle();
                      var r = new Y(this);
                      this.add(r);
                      var i = tt(e, r);
                      i !== r && this.add(i);
                    }
                  },
                },
              ]),
              n
            );
          })(X);
        function mc(t, e) {
          return et(t, e, 1);
        }
        function _c(t) {
          return function (e) {
            return 0 === t ? tc() : e.lift(new kc(t));
          };
        }
        var kc = (function () {
            function t(e) {
              if ((p(this, t), (this.total = e), this.total < 0))
                throw new oc();
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new wc(t, this.total));
                  },
                },
              ]),
              t
            );
          })(),
          wc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n),
                ((i = e.call(this, t)).total = r),
                (i.ring = new Array()),
                (i.count = 0),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    var e = this.ring,
                      n = this.total,
                      r = this.count++;
                    e.length < n ? e.push(t) : (e[r % n] = t);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    var t = this.destination,
                      e = this.count;
                    if (e > 0)
                      for (
                        var n =
                            this.count >= this.total ? this.total : this.count,
                          r = this.ring,
                          i = 0;
                        i < n;
                        i++
                      ) {
                        var o = e++ % n;
                        t.next(r[o]);
                      }
                    t.complete();
                  },
                },
              ]),
              n
            );
          })(T);
        function bc() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ec;
          return function (e) {
            return e.lift(new Cc(t));
          };
        }
        var Cc = (function () {
            function t(e) {
              p(this, t), (this.errorFactory = e);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new Sc(t, this.errorFactory));
                  },
                },
              ]),
              t
            );
          })(),
          Sc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n),
                ((i = e.call(this, t)).errorFactory = r),
                (i.hasValue = !1),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    (this.hasValue = !0), this.destination.next(t);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    if (this.hasValue) return this.destination.complete();
                    var t;
                    try {
                      t = this.errorFactory();
                    } catch (e) {
                      t = e;
                    }
                    this.destination.error(t);
                  },
                },
              ]),
              n
            );
          })(T);
        function Ec() {
          return new Kl();
        }
        function xc() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return function (e) {
            return e.lift(new Ac(t));
          };
        }
        var Ac = (function () {
            function t(e) {
              p(this, t), (this.defaultValue = e);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new Tc(t, this.defaultValue));
                  },
                },
              ]),
              t
            );
          })(),
          Tc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n),
                ((i = e.call(this, t)).defaultValue = r),
                (i.isEmpty = !0),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    (this.isEmpty = !1), this.destination.next(t);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    this.isEmpty && this.destination.next(this.defaultValue),
                      this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(T);
        function Oc(t, e) {
          var n = arguments.length >= 2;
          return function (r) {
            return r.pipe(
              t
                ? fc(function (e, n) {
                    return t(e, n, r);
                  })
                : R,
              ac(1),
              n
                ? xc(e)
                : bc(function () {
                    return new Kl();
                  })
            );
          };
        }
        function Ic() {}
        function Rc(t, e, n) {
          return function (r) {
            return r.lift(new Pc(t, e, n));
          };
        }
        var Pc = (function () {
            function t(e, n, r) {
              p(this, t),
                (this.nextOrObserver = e),
                (this.error = n),
                (this.complete = r);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(
                      new Vc(t, this.nextOrObserver, this.error, this.complete)
                    );
                  },
                },
              ]),
              t
            );
          })(),
          Vc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o) {
              var a;
              return (
                p(this, n),
                ((a = e.call(this, t))._tapNext = Ic),
                (a._tapError = Ic),
                (a._tapComplete = Ic),
                (a._tapError = i || Ic),
                (a._tapComplete = o || Ic),
                d(r)
                  ? ((a._context = f(a)), (a._tapNext = r))
                  : r &&
                    ((a._context = r),
                    (a._tapNext = r.next || Ic),
                    (a._tapError = r.error || Ic),
                    (a._tapComplete = r.complete || Ic)),
                a
              );
            }
            return (
              g(n, [
                {
                  key: "_next",
                  value: function (t) {
                    try {
                      this._tapNext.call(this._context, t);
                    } catch (e) {
                      return void this.destination.error(e);
                    }
                    this.destination.next(t);
                  },
                },
                {
                  key: "_error",
                  value: function (t) {
                    try {
                      this._tapError.call(this._context, t);
                    } catch (t) {
                      return void this.destination.error(t);
                    }
                    this.destination.error(t);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    try {
                      this._tapComplete.call(this._context);
                    } catch (t) {
                      return void this.destination.error(t);
                    }
                    return this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(T),
          jc = (function () {
            function t(e) {
              p(this, t), (this.callback = e);
            }
            return (
              g(t, [
                {
                  key: "call",
                  value: function (t, e) {
                    return e.subscribe(new Dc(t, this.callback));
                  },
                },
              ]),
              t
            );
          })(),
          Dc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return p(this, n), (i = e.call(this, t)).add(new E(r)), i;
            }
            return n;
          })(T),
          Nc = function t(e, n) {
            p(this, t), (this.id = e), (this.url = n);
          },
          Uc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "imperative",
                a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null;
              return (
                p(this, n),
                ((i = e.call(this, t, r)).navigationTrigger = o),
                (i.restoredState = a),
                i
              );
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return "NavigationStart(id: "
                      .concat(this.id, ", url: '")
                      .concat(this.url, "')");
                  },
                },
              ]),
              n
            );
          })(Nc),
          Mc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return (
                p(this, n), ((o = e.call(this, t, r)).urlAfterRedirects = i), o
              );
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return "NavigationEnd(id: "
                      .concat(this.id, ", url: '")
                      .concat(this.url, "', urlAfterRedirects: '")
                      .concat(this.urlAfterRedirects, "')");
                  },
                },
              ]),
              n
            );
          })(Nc),
          Fc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return p(this, n), ((o = e.call(this, t, r)).reason = i), o;
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return "NavigationCancel(id: "
                      .concat(this.id, ", url: '")
                      .concat(this.url, "')");
                  },
                },
              ]),
              n
            );
          })(Nc),
          Lc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return p(this, n), ((o = e.call(this, t, r)).error = i), o;
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return "NavigationError(id: "
                      .concat(this.id, ", url: '")
                      .concat(this.url, "', error: ")
                      .concat(this.error, ")");
                  },
                },
              ]),
              n
            );
          })(Nc),
          Hc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o) {
              var a;
              return (
                p(this, n),
                ((a = e.call(this, t, r)).urlAfterRedirects = i),
                (a.state = o),
                a
              );
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return "RoutesRecognized(id: "
                      .concat(this.id, ", url: '")
                      .concat(this.url, "', urlAfterRedirects: '")
                      .concat(this.urlAfterRedirects, "', state: ")
                      .concat(this.state, ")");
                  },
                },
              ]),
              n
            );
          })(Nc),
          zc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o) {
              var a;
              return (
                p(this, n),
                ((a = e.call(this, t, r)).urlAfterRedirects = i),
                (a.state = o),
                a
              );
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return "GuardsCheckStart(id: "
                      .concat(this.id, ", url: '")
                      .concat(this.url, "', urlAfterRedirects: '")
                      .concat(this.urlAfterRedirects, "', state: ")
                      .concat(this.state, ")");
                  },
                },
              ]),
              n
            );
          })(Nc),
          Bc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o, a) {
              var u;
              return (
                p(this, n),
                ((u = e.call(this, t, r)).urlAfterRedirects = i),
                (u.state = o),
                (u.shouldActivate = a),
                u
              );
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return "GuardsCheckEnd(id: "
                      .concat(this.id, ", url: '")
                      .concat(this.url, "', urlAfterRedirects: '")
                      .concat(this.urlAfterRedirects, "', state: ")
                      .concat(this.state, ", shouldActivate: ")
                      .concat(this.shouldActivate, ")");
                  },
                },
              ]),
              n
            );
          })(Nc),
          qc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o) {
              var a;
              return (
                p(this, n),
                ((a = e.call(this, t, r)).urlAfterRedirects = i),
                (a.state = o),
                a
              );
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return "ResolveStart(id: "
                      .concat(this.id, ", url: '")
                      .concat(this.url, "', urlAfterRedirects: '")
                      .concat(this.urlAfterRedirects, "', state: ")
                      .concat(this.state, ")");
                  },
                },
              ]),
              n
            );
          })(Nc),
          Gc = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i, o) {
              var a;
              return (
                p(this, n),
                ((a = e.call(this, t, r)).urlAfterRedirects = i),
                (a.state = o),
                a
              );
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return "ResolveEnd(id: "
                      .concat(this.id, ", url: '")
                      .concat(this.url, "', urlAfterRedirects: '")
                      .concat(this.urlAfterRedirects, "', state: ")
                      .concat(this.state, ")");
                  },
                },
              ]),
              n
            );
          })(Nc),
          Zc = (function () {
            function t(e) {
              p(this, t), (this.route = e);
            }
            return (
              g(t, [
                {
                  key: "toString",
                  value: function () {
                    return "RouteConfigLoadStart(path: ".concat(
                      this.route.path,
                      ")"
                    );
                  },
                },
              ]),
              t
            );
          })(),
          Wc = (function () {
            function t(e) {
              p(this, t), (this.route = e);
            }
            return (
              g(t, [
                {
                  key: "toString",
                  value: function () {
                    return "RouteConfigLoadEnd(path: ".concat(
                      this.route.path,
                      ")"
                    );
                  },
                },
              ]),
              t
            );
          })(),
          Qc = (function () {
            function t(e) {
              p(this, t), (this.snapshot = e);
            }
            return (
              g(t, [
                {
                  key: "toString",
                  value: function () {
                    return "ChildActivationStart(path: '".concat(
                      (this.snapshot.routeConfig &&
                        this.snapshot.routeConfig.path) ||
                        "",
                      "')"
                    );
                  },
                },
              ]),
              t
            );
          })(),
          $c = (function () {
            function t(e) {
              p(this, t), (this.snapshot = e);
            }
            return (
              g(t, [
                {
                  key: "toString",
                  value: function () {
                    return "ChildActivationEnd(path: '".concat(
                      (this.snapshot.routeConfig &&
                        this.snapshot.routeConfig.path) ||
                        "",
                      "')"
                    );
                  },
                },
              ]),
              t
            );
          })(),
          Jc = (function () {
            function t(e) {
              p(this, t), (this.snapshot = e);
            }
            return (
              g(t, [
                {
                  key: "toString",
                  value: function () {
                    return "ActivationStart(path: '".concat(
                      (this.snapshot.routeConfig &&
                        this.snapshot.routeConfig.path) ||
                        "",
                      "')"
                    );
                  },
                },
              ]),
              t
            );
          })(),
          Kc = (function () {
            function t(e) {
              p(this, t), (this.snapshot = e);
            }
            return (
              g(t, [
                {
                  key: "toString",
                  value: function () {
                    return "ActivationEnd(path: '".concat(
                      (this.snapshot.routeConfig &&
                        this.snapshot.routeConfig.path) ||
                        "",
                      "')"
                    );
                  },
                },
              ]),
              t
            );
          })(),
          Yc = (function () {
            function t(e, n, r) {
              p(this, t),
                (this.routerEvent = e),
                (this.position = n),
                (this.anchor = r);
            }
            return (
              g(t, [
                {
                  key: "toString",
                  value: function () {
                    return "Scroll(anchor: '"
                      .concat(this.anchor, "', position: '")
                      .concat(
                        this.position
                          ? ""
                              .concat(this.position[0], ", ")
                              .concat(this.position[1])
                          : null,
                        "')"
                      );
                  },
                },
              ]),
              t
            );
          })(),
          Xc = (function () {
            function t(e) {
              p(this, t), (this.params = e || {});
            }
            return (
              g(t, [
                {
                  key: "has",
                  value: function (t) {
                    return Object.prototype.hasOwnProperty.call(this.params, t);
                  },
                },
                {
                  key: "get",
                  value: function (t) {
                    if (this.has(t)) {
                      var e = this.params[t];
                      return Array.isArray(e) ? e[0] : e;
                    }
                    return null;
                  },
                },
                {
                  key: "getAll",
                  value: function (t) {
                    if (this.has(t)) {
                      var e = this.params[t];
                      return Array.isArray(e) ? e : [e];
                    }
                    return [];
                  },
                },
                {
                  key: "keys",
                  get: function () {
                    return Object.keys(this.params);
                  },
                },
              ]),
              t
            );
          })();
        function th(t) {
          return new Xc(t);
        }
        function eh(t) {
          var e = Error("NavigationCancelingError: " + t);
          return (e.ngNavigationCancelingError = !0), e;
        }
        function nh(t, e, n) {
          var r = n.path.split("/");
          if (r.length > t.length) return null;
          if (
            "full" === n.pathMatch &&
            (e.hasChildren() || r.length < t.length)
          )
            return null;
          for (var i = {}, o = 0; o < r.length; o++) {
            var a = r[o],
              u = t[o];
            if (a.startsWith(":")) i[a.substring(1)] = u;
            else if (a !== u.path) return null;
          }
          return { consumed: t.slice(0, r.length), posParams: i };
        }
        function rh(t, e) {
          var n,
            r = t ? Object.keys(t) : void 0,
            i = e ? Object.keys(e) : void 0;
          if (!r || !i || r.length != i.length) return !1;
          for (var o = 0; o < r.length; o++)
            if (!ih(t[(n = r[o])], e[n])) return !1;
          return !0;
        }
        function ih(t, e) {
          if (Array.isArray(t) && Array.isArray(e)) {
            if (t.length !== e.length) return !1;
            var r = n(t).sort(),
              i = n(e).sort();
            return r.every(function (t, e) {
              return i[e] === t;
            });
          }
          return t === e;
        }
        function oh(t) {
          return Array.prototype.concat.apply([], t);
        }
        function ah(t) {
          return t.length > 0 ? t[t.length - 1] : null;
        }
        function uh(t, e) {
          for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
        }
        function sh(t) {
          return Fo(t) ? t : Mo(t) ? K(Promise.resolve(t)) : Bl(t);
        }
        function lh(t, e, n) {
          return n
            ? (function (t, e) {
                return rh(t, e);
              })(t.queryParams, e.queryParams) && ch(t.root, e.root)
            : (function (t, e) {
                return (
                  Object.keys(e).length <= Object.keys(t).length &&
                  Object.keys(e).every(function (n) {
                    return ih(t[n], e[n]);
                  })
                );
              })(t.queryParams, e.queryParams) && hh(t.root, e.root);
        }
        function ch(t, e) {
          if (!yh(t.segments, e.segments)) return !1;
          if (t.numberOfChildren !== e.numberOfChildren) return !1;
          for (var n in e.children) {
            if (!t.children[n]) return !1;
            if (!ch(t.children[n], e.children[n])) return !1;
          }
          return !0;
        }
        function hh(t, e) {
          return fh(t, e, e.segments);
        }
        function fh(t, e, n) {
          if (t.segments.length > n.length)
            return !!yh(t.segments.slice(0, n.length), n) && !e.hasChildren();
          if (t.segments.length === n.length) {
            if (!yh(t.segments, n)) return !1;
            for (var r in e.children) {
              if (!t.children[r]) return !1;
              if (!hh(t.children[r], e.children[r])) return !1;
            }
            return !0;
          }
          var i = n.slice(0, t.segments.length),
            o = n.slice(t.segments.length);
          return (
            !!yh(t.segments, i) &&
            !!t.children.primary &&
            fh(t.children.primary, e, o)
          );
        }
        var dh = (function () {
            function t(e, n, r) {
              p(this, t),
                (this.root = e),
                (this.queryParams = n),
                (this.fragment = r);
            }
            return (
              g(t, [
                {
                  key: "queryParamMap",
                  get: function () {
                    return (
                      this._queryParamMap ||
                        (this._queryParamMap = th(this.queryParams)),
                      this._queryParamMap
                    );
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return _h.serialize(this);
                  },
                },
              ]),
              t
            );
          })(),
          vh = (function () {
            function t(e, n) {
              var r = this;
              p(this, t),
                (this.segments = e),
                (this.children = n),
                (this.parent = null),
                uh(n, function (t, e) {
                  return (t.parent = r);
                });
            }
            return (
              g(t, [
                {
                  key: "hasChildren",
                  value: function () {
                    return this.numberOfChildren > 0;
                  },
                },
                {
                  key: "numberOfChildren",
                  get: function () {
                    return Object.keys(this.children).length;
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return kh(this);
                  },
                },
              ]),
              t
            );
          })(),
          ph = (function () {
            function t(e, n) {
              p(this, t), (this.path = e), (this.parameters = n);
            }
            return (
              g(t, [
                {
                  key: "parameterMap",
                  get: function () {
                    return (
                      this._parameterMap ||
                        (this._parameterMap = th(this.parameters)),
                      this._parameterMap
                    );
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return Ah(this);
                  },
                },
              ]),
              t
            );
          })();
        function yh(t, e) {
          return (
            t.length === e.length &&
            t.every(function (t, n) {
              return t.path === e[n].path;
            })
          );
        }
        var gh = function t() {
            p(this, t);
          },
          mh = (function () {
            function t() {
              p(this, t);
            }
            return (
              g(t, [
                {
                  key: "parse",
                  value: function (t) {
                    var e = new Ph(t);
                    return new dh(
                      e.parseRootSegment(),
                      e.parseQueryParams(),
                      e.parseFragment()
                    );
                  },
                },
                {
                  key: "serialize",
                  value: function (t) {
                    var e, n, r;
                    return "/"
                      .concat(wh(t.root, !0))
                      .concat(
                        ((n = t.queryParams),
                        (r = Object.keys(n).map(function (t) {
                          var e = n[t];
                          return Array.isArray(e)
                            ? e
                                .map(function (e) {
                                  return "".concat(Ch(t), "=").concat(Ch(e));
                                })
                                .join("&")
                            : "".concat(Ch(t), "=").concat(Ch(e));
                        })),
                        r.length ? "?".concat(r.join("&")) : "")
                      )
                      .concat(
                        "string" == typeof t.fragment
                          ? "#".concat(((e = t.fragment), encodeURI(e)))
                          : ""
                      );
                  },
                },
              ]),
              t
            );
          })(),
          _h = new mh();
        function kh(t) {
          return t.segments
            .map(function (t) {
              return Ah(t);
            })
            .join("/");
        }
        function wh(t, e) {
          if (!t.hasChildren()) return kh(t);
          if (e) {
            var n = t.children.primary ? wh(t.children.primary, !1) : "",
              r = [];
            return (
              uh(t.children, function (t, e) {
                "primary" !== e && r.push("".concat(e, ":").concat(wh(t, !1)));
              }),
              r.length > 0 ? "".concat(n, "(").concat(r.join("//"), ")") : n
            );
          }
          var i = (function (t, e) {
            var n = [];
            return (
              uh(t.children, function (t, r) {
                "primary" === r && (n = n.concat(e(t, r)));
              }),
              uh(t.children, function (t, r) {
                "primary" !== r && (n = n.concat(e(t, r)));
              }),
              n
            );
          })(t, function (e, n) {
            return "primary" === n
              ? [wh(t.children.primary, !1)]
              : ["".concat(n, ":").concat(wh(e, !1))];
          });
          return 1 === Object.keys(t.children).length &&
            null != t.children.primary
            ? "".concat(kh(t), "/").concat(i[0])
            : "".concat(kh(t), "/(").concat(i.join("//"), ")");
        }
        function bh(t) {
          return encodeURIComponent(t)
            .replace(/%40/g, "@")
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",");
        }
        function Ch(t) {
          return bh(t).replace(/%3B/gi, ";");
        }
        function Sh(t) {
          return bh(t)
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29")
            .replace(/%26/gi, "&");
        }
        function Eh(t) {
          return decodeURIComponent(t);
        }
        function xh(t) {
          return Eh(t.replace(/\+/g, "%20"));
        }
        function Ah(t) {
          return "".concat(Sh(t.path)).concat(
            ((e = t.parameters),
            Object.keys(e)
              .map(function (t) {
                return ";".concat(Sh(t), "=").concat(Sh(e[t]));
              })
              .join(""))
          );
          var e;
        }
        var Th = /^[^\/()?;=#]+/;
        function Oh(t) {
          var e = t.match(Th);
          return e ? e[0] : "";
        }
        var Ih = /^[^=?&#]+/,
          Rh = /^[^?&#]+/,
          Ph = (function () {
            function t(e) {
              p(this, t), (this.url = e), (this.remaining = e);
            }
            return (
              g(t, [
                {
                  key: "parseRootSegment",
                  value: function () {
                    return (
                      this.consumeOptional("/"),
                      "" === this.remaining ||
                      this.peekStartsWith("?") ||
                      this.peekStartsWith("#")
                        ? new vh([], {})
                        : new vh([], this.parseChildren())
                    );
                  },
                },
                {
                  key: "parseQueryParams",
                  value: function () {
                    var t = {};
                    if (this.consumeOptional("?"))
                      do {
                        this.parseQueryParam(t);
                      } while (this.consumeOptional("&"));
                    return t;
                  },
                },
                {
                  key: "parseFragment",
                  value: function () {
                    return this.consumeOptional("#")
                      ? decodeURIComponent(this.remaining)
                      : null;
                  },
                },
                {
                  key: "parseChildren",
                  value: function () {
                    if ("" === this.remaining) return {};
                    this.consumeOptional("/");
                    var t = [];
                    for (
                      this.peekStartsWith("(") || t.push(this.parseSegment());
                      this.peekStartsWith("/") &&
                      !this.peekStartsWith("//") &&
                      !this.peekStartsWith("/(");

                    )
                      this.capture("/"), t.push(this.parseSegment());
                    var e = {};
                    this.peekStartsWith("/(") &&
                      (this.capture("/"), (e = this.parseParens(!0)));
                    var n = {};
                    return (
                      this.peekStartsWith("(") && (n = this.parseParens(!1)),
                      (t.length > 0 || Object.keys(e).length > 0) &&
                        (n.primary = new vh(t, e)),
                      n
                    );
                  },
                },
                {
                  key: "parseSegment",
                  value: function () {
                    var t = Oh(this.remaining);
                    if ("" === t && this.peekStartsWith(";"))
                      throw new Error(
                        "Empty path url segment cannot have parameters: '".concat(
                          this.remaining,
                          "'."
                        )
                      );
                    return (
                      this.capture(t), new ph(Eh(t), this.parseMatrixParams())
                    );
                  },
                },
                {
                  key: "parseMatrixParams",
                  value: function () {
                    for (var t = {}; this.consumeOptional(";"); )
                      this.parseParam(t);
                    return t;
                  },
                },
                {
                  key: "parseParam",
                  value: function (t) {
                    var e = Oh(this.remaining);
                    if (e) {
                      this.capture(e);
                      var n = "";
                      if (this.consumeOptional("=")) {
                        var r = Oh(this.remaining);
                        r && ((n = r), this.capture(n));
                      }
                      t[Eh(e)] = Eh(n);
                    }
                  },
                },
                {
                  key: "parseQueryParam",
                  value: function (t) {
                    var e = (function (t) {
                      var e = t.match(Ih);
                      return e ? e[0] : "";
                    })(this.remaining);
                    if (e) {
                      this.capture(e);
                      var n = "";
                      if (this.consumeOptional("=")) {
                        var r = (function (t) {
                          var e = t.match(Rh);
                          return e ? e[0] : "";
                        })(this.remaining);
                        r && ((n = r), this.capture(n));
                      }
                      var i = xh(e),
                        o = xh(n);
                      if (t.hasOwnProperty(i)) {
                        var a = t[i];
                        Array.isArray(a) || ((a = [a]), (t[i] = a)), a.push(o);
                      } else t[i] = o;
                    }
                  },
                },
                {
                  key: "parseParens",
                  value: function (t) {
                    var e = {};
                    for (
                      this.capture("(");
                      !this.consumeOptional(")") && this.remaining.length > 0;

                    ) {
                      var n = Oh(this.remaining),
                        r = this.remaining[n.length];
                      if ("/" !== r && ")" !== r && ";" !== r)
                        throw new Error(
                          "Cannot parse url '".concat(this.url, "'")
                        );
                      var i = void 0;
                      n.indexOf(":") > -1
                        ? ((i = n.substr(0, n.indexOf(":"))),
                          this.capture(i),
                          this.capture(":"))
                        : t && (i = "primary");
                      var o = this.parseChildren();
                      (e[i] =
                        1 === Object.keys(o).length
                          ? o.primary
                          : new vh([], o)),
                        this.consumeOptional("//");
                    }
                    return e;
                  },
                },
                {
                  key: "peekStartsWith",
                  value: function (t) {
                    return this.remaining.startsWith(t);
                  },
                },
                {
                  key: "consumeOptional",
                  value: function (t) {
                    return (
                      !!this.peekStartsWith(t) &&
                      ((this.remaining = this.remaining.substring(t.length)),
                      !0)
                    );
                  },
                },
                {
                  key: "capture",
                  value: function (t) {
                    if (!this.consumeOptional(t))
                      throw new Error('Expected "'.concat(t, '".'));
                  },
                },
              ]),
              t
            );
          })(),
          Vh = (function () {
            function t(e) {
              p(this, t), (this._root = e);
            }
            return (
              g(t, [
                {
                  key: "root",
                  get: function () {
                    return this._root.value;
                  },
                },
                {
                  key: "parent",
                  value: function (t) {
                    var e = this.pathFromRoot(t);
                    return e.length > 1 ? e[e.length - 2] : null;
                  },
                },
                {
                  key: "children",
                  value: function (t) {
                    var e = jh(t, this._root);
                    return e
                      ? e.children.map(function (t) {
                          return t.value;
                        })
                      : [];
                  },
                },
                {
                  key: "firstChild",
                  value: function (t) {
                    var e = jh(t, this._root);
                    return e && e.children.length > 0
                      ? e.children[0].value
                      : null;
                  },
                },
                {
                  key: "siblings",
                  value: function (t) {
                    var e = Dh(t, this._root);
                    return e.length < 2
                      ? []
                      : e[e.length - 2].children
                          .map(function (t) {
                            return t.value;
                          })
                          .filter(function (e) {
                            return e !== t;
                          });
                  },
                },
                {
                  key: "pathFromRoot",
                  value: function (t) {
                    return Dh(t, this._root).map(function (t) {
                      return t.value;
                    });
                  },
                },
              ]),
              t
            );
          })();
        function jh(t, n) {
          if (t === n.value) return n;
          var r,
            i = e(n.children);
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var o = jh(t, r.value);
              if (o) return o;
            }
          } catch (a) {
            i.e(a);
          } finally {
            i.f();
          }
          return null;
        }
        function Dh(t, n) {
          if (t === n.value) return [n];
          var r,
            i = e(n.children);
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var o = Dh(t, r.value);
              if (o.length) return o.unshift(n), o;
            }
          } catch (a) {
            i.e(a);
          } finally {
            i.f();
          }
          return [];
        }
        var Nh = (function () {
          function t(e, n) {
            p(this, t), (this.value = e), (this.children = n);
          }
          return (
            g(t, [
              {
                key: "toString",
                value: function () {
                  return "TreeNode(".concat(this.value, ")");
                },
              },
            ]),
            t
          );
        })();
        function Uh(t) {
          var e = {};
          return (
            t &&
              t.children.forEach(function (t) {
                return (e[t.value.outlet] = t);
              }),
            e
          );
        }
        var Mh = (function (t) {
          s(n, t);
          var e = c(n);
          function n(t, r) {
            var i;
            return (
              p(this, n), ((i = e.call(this, t)).snapshot = r), qh(f(i), t), i
            );
          }
          return (
            g(n, [
              {
                key: "toString",
                value: function () {
                  return this.snapshot.toString();
                },
              },
            ]),
            n
          );
        })(Vh);
        function Fh(t, e) {
          var n = (function (t, e) {
              var n = new zh(
                [],
                {},
                {},
                "",
                {},
                "primary",
                e,
                null,
                t.root,
                -1,
                {}
              );
              return new Bh("", new Nh(n, []));
            })(t, e),
            r = new ql([new ph("", {})]),
            i = new ql({}),
            o = new ql({}),
            a = new ql({}),
            u = new ql(""),
            s = new Lh(r, i, a, u, o, "primary", e, n.root);
          return (s.snapshot = n.root), new Mh(new Nh(s, []), n);
        }
        var Lh = (function () {
          function t(e, n, r, i, o, a, u, s) {
            p(this, t),
              (this.url = e),
              (this.params = n),
              (this.queryParams = r),
              (this.fragment = i),
              (this.data = o),
              (this.outlet = a),
              (this.component = u),
              (this._futureSnapshot = s);
          }
          return (
            g(t, [
              {
                key: "routeConfig",
                get: function () {
                  return this._futureSnapshot.routeConfig;
                },
              },
              {
                key: "root",
                get: function () {
                  return this._routerState.root;
                },
              },
              {
                key: "parent",
                get: function () {
                  return this._routerState.parent(this);
                },
              },
              {
                key: "firstChild",
                get: function () {
                  return this._routerState.firstChild(this);
                },
              },
              {
                key: "children",
                get: function () {
                  return this._routerState.children(this);
                },
              },
              {
                key: "pathFromRoot",
                get: function () {
                  return this._routerState.pathFromRoot(this);
                },
              },
              {
                key: "paramMap",
                get: function () {
                  return (
                    this._paramMap ||
                      (this._paramMap = this.params.pipe(
                        z(function (t) {
                          return th(t);
                        })
                      )),
                    this._paramMap
                  );
                },
              },
              {
                key: "queryParamMap",
                get: function () {
                  return (
                    this._queryParamMap ||
                      (this._queryParamMap = this.queryParams.pipe(
                        z(function (t) {
                          return th(t);
                        })
                      )),
                    this._queryParamMap
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return this.snapshot
                    ? this.snapshot.toString()
                    : "Future(".concat(this._futureSnapshot, ")");
                },
              },
            ]),
            t
          );
        })();
        function Hh(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "emptyOnly",
            n = t.pathFromRoot,
            r = 0;
          if ("always" !== e)
            for (r = n.length - 1; r >= 1; ) {
              var i = n[r],
                o = n[r - 1];
              if (i.routeConfig && "" === i.routeConfig.path) r--;
              else {
                if (o.component) break;
                r--;
              }
            }
          return (function (t) {
            return t.reduce(
              function (t, e) {
                return {
                  params: Object.assign(Object.assign({}, t.params), e.params),
                  data: Object.assign(Object.assign({}, t.data), e.data),
                  resolve: Object.assign(
                    Object.assign({}, t.resolve),
                    e._resolvedData
                  ),
                };
              },
              { params: {}, data: {}, resolve: {} }
            );
          })(n.slice(r));
        }
        var zh = (function () {
            function t(e, n, r, i, o, a, u, s, l, c, h) {
              p(this, t),
                (this.url = e),
                (this.params = n),
                (this.queryParams = r),
                (this.fragment = i),
                (this.data = o),
                (this.outlet = a),
                (this.component = u),
                (this.routeConfig = s),
                (this._urlSegment = l),
                (this._lastPathIndex = c),
                (this._resolve = h);
            }
            return (
              g(t, [
                {
                  key: "root",
                  get: function () {
                    return this._routerState.root;
                  },
                },
                {
                  key: "parent",
                  get: function () {
                    return this._routerState.parent(this);
                  },
                },
                {
                  key: "firstChild",
                  get: function () {
                    return this._routerState.firstChild(this);
                  },
                },
                {
                  key: "children",
                  get: function () {
                    return this._routerState.children(this);
                  },
                },
                {
                  key: "pathFromRoot",
                  get: function () {
                    return this._routerState.pathFromRoot(this);
                  },
                },
                {
                  key: "paramMap",
                  get: function () {
                    return (
                      this._paramMap || (this._paramMap = th(this.params)),
                      this._paramMap
                    );
                  },
                },
                {
                  key: "queryParamMap",
                  get: function () {
                    return (
                      this._queryParamMap ||
                        (this._queryParamMap = th(this.queryParams)),
                      this._queryParamMap
                    );
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return "Route(url:'"
                      .concat(
                        this.url
                          .map(function (t) {
                            return t.toString();
                          })
                          .join("/"),
                        "', path:'"
                      )
                      .concat(
                        this.routeConfig ? this.routeConfig.path : "",
                        "')"
                      );
                  },
                },
              ]),
              t
            );
          })(),
          Bh = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r) {
              var i;
              return (
                p(this, n), ((i = e.call(this, r)).url = t), qh(f(i), r), i
              );
            }
            return (
              g(n, [
                {
                  key: "toString",
                  value: function () {
                    return Gh(this._root);
                  },
                },
              ]),
              n
            );
          })(Vh);
        function qh(t, e) {
          (e.value._routerState = t),
            e.children.forEach(function (e) {
              return qh(t, e);
            });
        }
        function Gh(t) {
          var e =
            t.children.length > 0
              ? " { ".concat(t.children.map(Gh).join(", "), " } ")
              : "";
          return "".concat(t.value).concat(e);
        }
        function Zh(t) {
          if (t.snapshot) {
            var e = t.snapshot,
              n = t._futureSnapshot;
            (t.snapshot = n),
              rh(e.queryParams, n.queryParams) ||
                t.queryParams.next(n.queryParams),
              e.fragment !== n.fragment && t.fragment.next(n.fragment),
              rh(e.params, n.params) || t.params.next(n.params),
              (function (t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; ++n)
                  if (!rh(t[n], e[n])) return !1;
                return !0;
              })(e.url, n.url) || t.url.next(n.url),
              rh(e.data, n.data) || t.data.next(n.data);
          } else
            (t.snapshot = t._futureSnapshot),
              t.data.next(t._futureSnapshot.data);
        }
        function Wh(t, e) {
          var n, r;
          return (
            rh(t.params, e.params) &&
            yh((n = t.url), (r = e.url)) &&
            n.every(function (t, e) {
              return rh(t.parameters, r[e].parameters);
            }) &&
            !(!t.parent != !e.parent) &&
            (!t.parent || Wh(t.parent, e.parent))
          );
        }
        function Qh(t, n, r) {
          if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
            var i = r.value;
            i._futureSnapshot = n.value;
            var o = (function (t, n, r) {
              return n.children.map(function (n) {
                var i,
                  o = e(r.children);
                try {
                  for (o.s(); !(i = o.n()).done; ) {
                    var a = i.value;
                    if (t.shouldReuseRoute(n.value, a.value.snapshot))
                      return Qh(t, n, a);
                  }
                } catch (u) {
                  o.e(u);
                } finally {
                  o.f();
                }
                return Qh(t, n);
              });
            })(t, n, r);
            return new Nh(i, o);
          }
          var a = t.retrieve(n.value);
          if (a) {
            var u = a.route;
            return $h(n, u), u;
          }
          var s,
            l = new Lh(
              new ql((s = n.value).url),
              new ql(s.params),
              new ql(s.queryParams),
              new ql(s.fragment),
              new ql(s.data),
              s.outlet,
              s.component,
              s
            ),
            c = n.children.map(function (e) {
              return Qh(t, e);
            });
          return new Nh(l, c);
        }
        function $h(t, e) {
          if (t.value.routeConfig !== e.value.routeConfig)
            throw new Error(
              "Cannot reattach ActivatedRouteSnapshot created from a different route"
            );
          if (t.children.length !== e.children.length)
            throw new Error(
              "Cannot reattach ActivatedRouteSnapshot with a different number of children"
            );
          e.value._futureSnapshot = t.value;
          for (var n = 0; n < t.children.length; ++n)
            $h(t.children[n], e.children[n]);
        }
        function Jh(t) {
          return (
            "object" == typeof t && null != t && !t.outlets && !t.segmentPath
          );
        }
        function Kh(t) {
          return "object" == typeof t && null != t && t.outlets;
        }
        function Yh(t, e, n, r, i) {
          var o = {};
          return (
            r &&
              uh(r, function (t, e) {
                o[e] = Array.isArray(t)
                  ? t.map(function (t) {
                      return "".concat(t);
                    })
                  : "".concat(t);
              }),
            new dh(n.root === t ? e : Xh(n.root, t, e), o, i)
          );
        }
        function Xh(t, e, n) {
          var r = {};
          return (
            uh(t.children, function (t, i) {
              r[i] = t === e ? n : Xh(t, e, n);
            }),
            new vh(t.segments, r)
          );
        }
        var tf = (function () {
            function t(e, n, r) {
              if (
                (p(this, t),
                (this.isAbsolute = e),
                (this.numberOfDoubleDots = n),
                (this.commands = r),
                e && r.length > 0 && Jh(r[0]))
              )
                throw new Error("Root segment cannot have matrix parameters");
              var i = r.find(Kh);
              if (i && i !== ah(r))
                throw new Error("{outlets:{}} has to be the last command");
            }
            return (
              g(t, [
                {
                  key: "toRoot",
                  value: function () {
                    return (
                      this.isAbsolute &&
                      1 === this.commands.length &&
                      "/" == this.commands[0]
                    );
                  },
                },
              ]),
              t
            );
          })(),
          ef = function t(e, n, r) {
            p(this, t),
              (this.segmentGroup = e),
              (this.processChildren = n),
              (this.index = r);
          };
        function nf(t, e, n) {
          if (
            (t || (t = new vh([], {})),
            0 === t.segments.length && t.hasChildren())
          )
            return rf(t, e, n);
          var r = (function (t, e, n) {
              for (
                var r = 0,
                  i = e,
                  o = { match: !1, pathIndex: 0, commandIndex: 0 };
                i < t.segments.length;

              ) {
                if (r >= n.length) return o;
                var a = t.segments[i],
                  u = n[r];
                if (Kh(u)) break;
                var s = "".concat(u),
                  l = r < n.length - 1 ? n[r + 1] : null;
                if (i > 0 && void 0 === s) break;
                if (s && l && "object" == typeof l && void 0 === l.outlets) {
                  if (!sf(s, l, a)) return o;
                  r += 2;
                } else {
                  if (!sf(s, {}, a)) return o;
                  r++;
                }
                i++;
              }
              return { match: !0, pathIndex: i, commandIndex: r };
            })(t, e, n),
            i = n.slice(r.commandIndex);
          if (r.match && r.pathIndex < t.segments.length) {
            var o = new vh(t.segments.slice(0, r.pathIndex), {});
            return (
              (o.children.primary = new vh(
                t.segments.slice(r.pathIndex),
                t.children
              )),
              rf(o, 0, i)
            );
          }
          return r.match && 0 === i.length
            ? new vh(t.segments, {})
            : r.match && !t.hasChildren()
            ? of(t, e, n)
            : r.match
            ? rf(t, 0, i)
            : of(t, e, n);
        }
        function rf(t, e, n) {
          if (0 === n.length) return new vh(t.segments, {});
          var r = (function (t) {
              return Kh(t[0]) ? t[0].outlets : { primary: t };
            })(n),
            i = {};
          return (
            uh(r, function (n, r) {
              "string" == typeof n && (n = [n]),
                null !== n && (i[r] = nf(t.children[r], e, n));
            }),
            uh(t.children, function (t, e) {
              void 0 === r[e] && (i[e] = t);
            }),
            new vh(t.segments, i)
          );
        }
        function of(t, e, n) {
          for (var r = t.segments.slice(0, e), i = 0; i < n.length; ) {
            var o = n[i];
            if (Kh(o)) {
              var a = af(o.outlets);
              return new vh(r, a);
            }
            if (0 === i && Jh(n[0]))
              r.push(new ph(t.segments[e].path, uf(n[0]))), i++;
            else {
              var u = Kh(o) ? o.outlets.primary : "".concat(o),
                s = i < n.length - 1 ? n[i + 1] : null;
              u && s && Jh(s)
                ? (r.push(new ph(u, uf(s))), (i += 2))
                : (r.push(new ph(u, {})), i++);
            }
          }
          return new vh(r, {});
        }
        function af(t) {
          var e = {};
          return (
            uh(t, function (t, n) {
              "string" == typeof t && (t = [t]),
                null !== t && (e[n] = of(new vh([], {}), 0, t));
            }),
            e
          );
        }
        function uf(t) {
          var e = {};
          return (
            uh(t, function (t, n) {
              return (e[n] = "".concat(t));
            }),
            e
          );
        }
        function sf(t, e, n) {
          return t == n.path && rh(e, n.parameters);
        }
        var lf = (function () {
          function t(e, n, r, i) {
            p(this, t),
              (this.routeReuseStrategy = e),
              (this.futureState = n),
              (this.currState = r),
              (this.forwardEvent = i);
          }
          return (
            g(t, [
              {
                key: "activate",
                value: function (t) {
                  var e = this.futureState._root,
                    n = this.currState ? this.currState._root : null;
                  this.deactivateChildRoutes(e, n, t),
                    Zh(this.futureState.root),
                    this.activateChildRoutes(e, n, t);
                },
              },
              {
                key: "deactivateChildRoutes",
                value: function (t, e, n) {
                  var r = this,
                    i = Uh(e);
                  t.children.forEach(function (t) {
                    var e = t.value.outlet;
                    r.deactivateRoutes(t, i[e], n), delete i[e];
                  }),
                    uh(i, function (t, e) {
                      r.deactivateRouteAndItsChildren(t, n);
                    });
                },
              },
              {
                key: "deactivateRoutes",
                value: function (t, e, n) {
                  var r = t.value,
                    i = e ? e.value : null;
                  if (r === i)
                    if (r.component) {
                      var o = n.getContext(r.outlet);
                      o && this.deactivateChildRoutes(t, e, o.children);
                    } else this.deactivateChildRoutes(t, e, n);
                  else i && this.deactivateRouteAndItsChildren(e, n);
                },
              },
              {
                key: "deactivateRouteAndItsChildren",
                value: function (t, e) {
                  this.routeReuseStrategy.shouldDetach(t.value.snapshot)
                    ? this.detachAndStoreRouteSubtree(t, e)
                    : this.deactivateRouteAndOutlet(t, e);
                },
              },
              {
                key: "detachAndStoreRouteSubtree",
                value: function (t, e) {
                  var n = e.getContext(t.value.outlet);
                  if (n && n.outlet) {
                    var r = n.outlet.detach(),
                      i = n.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(t.value.snapshot, {
                      componentRef: r,
                      route: t,
                      contexts: i,
                    });
                  }
                },
              },
              {
                key: "deactivateRouteAndOutlet",
                value: function (t, e) {
                  for (
                    var n = e.getContext(t.value.outlet),
                      r = n && t.value.component ? n.children : e,
                      i = Uh(t),
                      o = 0,
                      a = Object.keys(i);
                    o < a.length;
                    o++
                  ) {
                    var u = a[o];
                    this.deactivateRouteAndItsChildren(i[u], r);
                  }
                  n &&
                    n.outlet &&
                    (n.outlet.deactivate(), n.children.onOutletDeactivated());
                },
              },
              {
                key: "activateChildRoutes",
                value: function (t, e, n) {
                  var r = this,
                    i = Uh(e);
                  t.children.forEach(function (t) {
                    r.activateRoutes(t, i[t.value.outlet], n),
                      r.forwardEvent(new Kc(t.value.snapshot));
                  }),
                    t.children.length &&
                      this.forwardEvent(new $c(t.value.snapshot));
                },
              },
              {
                key: "activateRoutes",
                value: function (t, e, n) {
                  var r = t.value,
                    i = e ? e.value : null;
                  if ((Zh(r), r === i))
                    if (r.component) {
                      var o = n.getOrCreateContext(r.outlet);
                      this.activateChildRoutes(t, e, o.children);
                    } else this.activateChildRoutes(t, e, n);
                  else if (r.component) {
                    var a = n.getOrCreateContext(r.outlet);
                    if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                      var u = this.routeReuseStrategy.retrieve(r.snapshot);
                      this.routeReuseStrategy.store(r.snapshot, null),
                        a.children.onOutletReAttached(u.contexts),
                        (a.attachRef = u.componentRef),
                        (a.route = u.route.value),
                        a.outlet &&
                          a.outlet.attach(u.componentRef, u.route.value),
                        cf(u.route);
                    } else {
                      var s = (function (t) {
                          for (var e = t.parent; e; e = e.parent) {
                            var n = e.routeConfig;
                            if (n && n._loadedConfig) return n._loadedConfig;
                            if (n && n.component) return null;
                          }
                          return null;
                        })(r.snapshot),
                        l = s ? s.module.componentFactoryResolver : null;
                      (a.attachRef = null),
                        (a.route = r),
                        (a.resolver = l),
                        a.outlet && a.outlet.activateWith(r, l),
                        this.activateChildRoutes(t, null, a.children);
                    }
                  } else this.activateChildRoutes(t, null, n);
                },
              },
            ]),
            t
          );
        })();
        function cf(t) {
          Zh(t.value), t.children.forEach(cf);
        }
        var hf = function t(e, n) {
          p(this, t), (this.routes = e), (this.module = n);
        };
        function ff(t) {
          return "function" == typeof t;
        }
        function df(t) {
          return t instanceof dh;
        }
        var vf = Symbol("INITIAL_VALUE");
        function pf() {
          return nc(function (t) {
            return (function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              var r, i;
              return (
                H(e[e.length - 1]) && (i = e.pop()),
                "function" == typeof e[e.length - 1] && (r = e.pop()),
                1 === e.length && w(e[0]) && (e = e[0]),
                ot(e, i).lift(new $l(r))
              );
            })(
              t.map(function (t) {
                return t.pipe(
                  ac(1),
                  (function () {
                    for (
                      var t = arguments.length, e = new Array(t), n = 0;
                      n < t;
                      n++
                    )
                      e[n] = arguments[n];
                    var r = e[e.length - 1];
                    return H(r)
                      ? (e.pop(),
                        function (t) {
                          return Yl(e, t, r);
                        })
                      : function (t) {
                          return Yl(e, t);
                        };
                  })(vf)
                );
              })
            ).pipe(
              lc(function (t, e) {
                var n = !1;
                return e.reduce(function (t, r, i) {
                  if (t !== vf) return t;
                  if ((r === vf && (n = !0), !n)) {
                    if (!1 === r) return r;
                    if (i === e.length - 1 || df(r)) return r;
                  }
                  return t;
                }, t);
              }, vf),
              fc(function (t) {
                return t !== vf;
              }),
              z(function (t) {
                return df(t) ? t : !0 === t;
              }),
              ac(1)
            );
          });
        }
        var yf,
          gf =
            (((yf = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || yf)();
            }),
            (yf.ɵcmp = ie({
              type: yf,
              selectors: [["ng-component"]],
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && Uo(0, "router-outlet");
              },
              directives: function () {
                return [vd];
              },
              encapsulation: 2,
            })),
            yf);
        function mf(t) {
          for (
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n];
            _f(r, kf(e, r));
          }
        }
        function _f(t, e) {
          t.children && mf(t.children, e);
        }
        function kf(t, e) {
          return e
            ? t || e.path
              ? t && !e.path
                ? "".concat(t, "/")
                : !t && e.path
                ? e.path
                : "".concat(t, "/").concat(e.path)
              : ""
            : t;
        }
        function wf(t) {
          var e = t.children && t.children.map(wf),
            n = e
              ? Object.assign(Object.assign({}, t), { children: e })
              : Object.assign({}, t);
          return (
            !n.component &&
              (e || n.loadChildren) &&
              n.outlet &&
              "primary" !== n.outlet &&
              (n.component = gf),
            n
          );
        }
        function bf(t) {
          return t.outlet || "primary";
        }
        function Cf(t, e) {
          var r = t.filter(function (t) {
            return bf(t) === e;
          });
          return (
            r.push.apply(
              r,
              n(
                t.filter(function (t) {
                  return bf(t) !== e;
                })
              )
            ),
            r
          );
        }
        var Sf = {
          matched: !1,
          consumedSegments: [],
          lastChild: 0,
          parameters: {},
          positionalParamSegments: {},
        };
        function Ef(t, e, n) {
          var r;
          if ("" === e.path)
            return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
              ? Object.assign({}, Sf)
              : {
                  matched: !0,
                  consumedSegments: [],
                  lastChild: 0,
                  parameters: {},
                  positionalParamSegments: {},
                };
          var i = (e.matcher || nh)(n, t, e);
          if (!i) return Object.assign({}, Sf);
          var o = {};
          uh(i.posParams, function (t, e) {
            o[e] = t.path;
          });
          var a =
            i.consumed.length > 0
              ? Object.assign(
                  Object.assign({}, o),
                  i.consumed[i.consumed.length - 1].parameters
                )
              : o;
          return {
            matched: !0,
            consumedSegments: i.consumed,
            lastChild: i.consumed.length,
            parameters: a,
            positionalParamSegments:
              null !== (r = i.posParams) && void 0 !== r ? r : {},
          };
        }
        function xf(t, n, r, i) {
          var o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : "corrected";
          if (
            r.length > 0 &&
            (function (t, e, n) {
              return n.some(function (n) {
                return Af(t, e, n) && "primary" !== bf(n);
              });
            })(t, r, i)
          ) {
            var a = new vh(
              n,
              (function (t, n, r, i) {
                var o = {};
                (o.primary = i),
                  (i._sourceSegment = t),
                  (i._segmentIndexShift = n.length);
                var a,
                  u = e(r);
                try {
                  for (u.s(); !(a = u.n()).done; ) {
                    var s = a.value;
                    if ("" === s.path && "primary" !== bf(s)) {
                      var l = new vh([], {});
                      (l._sourceSegment = t),
                        (l._segmentIndexShift = n.length),
                        (o[bf(s)] = l);
                    }
                  }
                } catch (c) {
                  u.e(c);
                } finally {
                  u.f();
                }
                return o;
              })(t, n, i, new vh(r, t.children))
            );
            return (
              (a._sourceSegment = t),
              (a._segmentIndexShift = n.length),
              { segmentGroup: a, slicedSegments: [] }
            );
          }
          if (
            0 === r.length &&
            (function (t, e, n) {
              return n.some(function (n) {
                return Af(t, e, n);
              });
            })(t, r, i)
          ) {
            var u = new vh(
              t.segments,
              (function (t, n, r, i, o, a) {
                var u,
                  s = {},
                  l = e(i);
                try {
                  for (l.s(); !(u = l.n()).done; ) {
                    var c = u.value;
                    if (Af(t, r, c) && !o[bf(c)]) {
                      var h = new vh([], {});
                      (h._sourceSegment = t),
                        (h._segmentIndexShift =
                          "legacy" === a ? t.segments.length : n.length),
                        (s[bf(c)] = h);
                    }
                  }
                } catch (f) {
                  l.e(f);
                } finally {
                  l.f();
                }
                return Object.assign(Object.assign({}, o), s);
              })(t, n, r, i, t.children, o)
            );
            return (
              (u._sourceSegment = t),
              (u._segmentIndexShift = n.length),
              { segmentGroup: u, slicedSegments: r }
            );
          }
          var s = new vh(t.segments, t.children);
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = n.length),
            { segmentGroup: s, slicedSegments: r }
          );
        }
        function Af(t, e, n) {
          return (
            (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
            "" === n.path
          );
        }
        function Tf(t, e, n, r) {
          return (
            !!(bf(t) === r || ("primary" !== r && Af(e, n, t))) &&
            ("**" === t.path || Ef(e, t, n).matched)
          );
        }
        function Of(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        var If = function t(e) {
            p(this, t), (this.segmentGroup = e || null);
          },
          Rf = function t(e) {
            p(this, t), (this.urlTree = e);
          };
        function Pf(t) {
          return new V(function (e) {
            return e.error(new If(t));
          });
        }
        function Vf(t) {
          return new V(function (e) {
            return e.error(new Rf(t));
          });
        }
        function jf(t) {
          return new V(function (e) {
            return e.error(
              new Error(
                "Only absolute redirects can have named outlets. redirectTo: '".concat(
                  t,
                  "'"
                )
              )
            );
          });
        }
        var Df = (function () {
          function t(e, n, r, i, o) {
            p(this, t),
              (this.configLoader = n),
              (this.urlSerializer = r),
              (this.urlTree = i),
              (this.config = o),
              (this.allowRedirects = !0),
              (this.ngModule = e.get(tu));
          }
          return (
            g(t, [
              {
                key: "apply",
                value: function () {
                  var t = this,
                    e = xf(this.urlTree.root, [], [], this.config).segmentGroup,
                    n = new vh(e.segments, e.children);
                  return this.expandSegmentGroup(
                    this.ngModule,
                    this.config,
                    n,
                    "primary"
                  )
                    .pipe(
                      z(function (e) {
                        return t.createUrlTree(
                          Nf(e),
                          t.urlTree.queryParams,
                          t.urlTree.fragment
                        );
                      })
                    )
                    .pipe(
                      pc(function (e) {
                        if (e instanceof Rf)
                          return (t.allowRedirects = !1), t.match(e.urlTree);
                        if (e instanceof If) throw t.noMatchError(e);
                        throw e;
                      })
                    );
                },
              },
              {
                key: "match",
                value: function (t) {
                  var e = this;
                  return this.expandSegmentGroup(
                    this.ngModule,
                    this.config,
                    t.root,
                    "primary"
                  )
                    .pipe(
                      z(function (n) {
                        return e.createUrlTree(
                          Nf(n),
                          t.queryParams,
                          t.fragment
                        );
                      })
                    )
                    .pipe(
                      pc(function (t) {
                        if (t instanceof If) throw e.noMatchError(t);
                        throw t;
                      })
                    );
                },
              },
              {
                key: "noMatchError",
                value: function (t) {
                  return new Error(
                    "Cannot match any routes. URL Segment: '".concat(
                      t.segmentGroup,
                      "'"
                    )
                  );
                },
              },
              {
                key: "createUrlTree",
                value: function (t, e, n) {
                  var r =
                    t.segments.length > 0 ? new vh([], { primary: t }) : t;
                  return new dh(r, e, n);
                },
              },
              {
                key: "expandSegmentGroup",
                value: function (t, e, n, r) {
                  return 0 === n.segments.length && n.hasChildren()
                    ? this.expandChildren(t, e, n).pipe(
                        z(function (t) {
                          return new vh([], t);
                        })
                      )
                    : this.expandSegment(t, n, e, n.segments, r, !0);
                },
              },
              {
                key: "expandChildren",
                value: function (t, e, n) {
                  for (
                    var r = this, i = [], o = 0, a = Object.keys(n.children);
                    o < a.length;
                    o++
                  ) {
                    var u = a[o];
                    "primary" === u ? i.unshift(u) : i.push(u);
                  }
                  return K(i).pipe(
                    mc(function (i) {
                      var o = n.children[i],
                        a = Cf(e, i);
                      return r.expandSegmentGroup(t, a, o, i).pipe(
                        z(function (t) {
                          return { segment: t, outlet: i };
                        })
                      );
                    }),
                    lc(function (t, e) {
                      return (t[e.outlet] = e.segment), t;
                    }, {}),
                    (function (t, e) {
                      var n = arguments.length >= 2;
                      return function (r) {
                        return r.pipe(
                          t
                            ? fc(function (e, n) {
                                return t(e, n, r);
                              })
                            : R,
                          _c(1),
                          n
                            ? xc(e)
                            : bc(function () {
                                return new Kl();
                              })
                        );
                      };
                    })()
                  );
                },
              },
              {
                key: "expandSegment",
                value: function (t, e, n, r, i, o) {
                  var a = this;
                  return K(n).pipe(
                    mc(function (u) {
                      return a
                        .expandSegmentAgainstRoute(t, e, n, u, r, i, o)
                        .pipe(
                          pc(function (t) {
                            if (t instanceof If) return Bl(null);
                            throw t;
                          })
                        );
                    }),
                    Oc(function (t) {
                      return !!t;
                    }),
                    pc(function (t, n) {
                      if (t instanceof Kl || "EmptyError" === t.name) {
                        if (Of(e, r, i)) return Bl(new vh([], {}));
                        throw new If(e);
                      }
                      throw t;
                    })
                  );
                },
              },
              {
                key: "expandSegmentAgainstRoute",
                value: function (t, e, n, r, i, o, a) {
                  return Tf(r, e, i, o)
                    ? void 0 === r.redirectTo
                      ? this.matchSegmentAgainstRoute(t, e, r, i, o)
                      : a && this.allowRedirects
                      ? this.expandSegmentAgainstRouteUsingRedirect(
                          t,
                          e,
                          n,
                          r,
                          i,
                          o
                        )
                      : Pf(e)
                    : Pf(e);
                },
              },
              {
                key: "expandSegmentAgainstRouteUsingRedirect",
                value: function (t, e, n, r, i, o) {
                  return "**" === r.path
                    ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(
                        t,
                        n,
                        r,
                        o
                      )
                    : this.expandRegularSegmentAgainstRouteUsingRedirect(
                        t,
                        e,
                        n,
                        r,
                        i,
                        o
                      );
                },
              },
              {
                key: "expandWildCardWithParamsAgainstRouteUsingRedirect",
                value: function (t, e, n, r) {
                  var i = this,
                    o = this.applyRedirectCommands([], n.redirectTo, {});
                  return n.redirectTo.startsWith("/")
                    ? Vf(o)
                    : this.lineralizeSegments(n, o).pipe(
                        et(function (n) {
                          var o = new vh(n, {});
                          return i.expandSegment(t, o, e, n, r, !1);
                        })
                      );
                },
              },
              {
                key: "expandRegularSegmentAgainstRouteUsingRedirect",
                value: function (t, e, n, r, i, o) {
                  var a = this,
                    u = Ef(e, r, i),
                    s = u.matched,
                    l = u.consumedSegments,
                    c = u.lastChild,
                    h = u.positionalParamSegments;
                  if (!s) return Pf(e);
                  var f = this.applyRedirectCommands(l, r.redirectTo, h);
                  return r.redirectTo.startsWith("/")
                    ? Vf(f)
                    : this.lineralizeSegments(r, f).pipe(
                        et(function (r) {
                          return a.expandSegment(
                            t,
                            e,
                            n,
                            r.concat(i.slice(c)),
                            o,
                            !1
                          );
                        })
                      );
                },
              },
              {
                key: "matchSegmentAgainstRoute",
                value: function (t, e, n, r, i) {
                  var o = this;
                  if ("**" === n.path)
                    return n.loadChildren
                      ? (n._loadedConfig
                          ? Bl(n._loadedConfig)
                          : this.configLoader.load(t.injector, n)
                        ).pipe(
                          z(function (t) {
                            return (n._loadedConfig = t), new vh(r, {});
                          })
                        )
                      : Bl(new vh(r, {}));
                  var a = Ef(e, n, r),
                    u = a.matched,
                    s = a.consumedSegments,
                    l = a.lastChild;
                  if (!u) return Pf(e);
                  var c = r.slice(l);
                  return this.getChildConfig(t, n, r).pipe(
                    et(function (t) {
                      var r = t.module,
                        a = t.routes,
                        u = xf(e, s, c, a),
                        l = u.segmentGroup,
                        h = u.slicedSegments,
                        f = new vh(l.segments, l.children);
                      if (0 === h.length && f.hasChildren())
                        return o.expandChildren(r, a, f).pipe(
                          z(function (t) {
                            return new vh(s, t);
                          })
                        );
                      if (0 === a.length && 0 === h.length)
                        return Bl(new vh(s, {}));
                      var d = bf(n) === i;
                      return o
                        .expandSegment(r, f, a, h, d ? "primary" : i, !0)
                        .pipe(
                          z(function (t) {
                            return new vh(s.concat(t.segments), t.children);
                          })
                        );
                    })
                  );
                },
              },
              {
                key: "getChildConfig",
                value: function (t, e, n) {
                  var r = this;
                  return e.children
                    ? Bl(new hf(e.children, t))
                    : e.loadChildren
                    ? void 0 !== e._loadedConfig
                      ? Bl(e._loadedConfig)
                      : this.runCanLoadGuards(t.injector, e, n).pipe(
                          et(function (n) {
                            return n
                              ? r.configLoader.load(t.injector, e).pipe(
                                  z(function (t) {
                                    return (e._loadedConfig = t), t;
                                  })
                                )
                              : (function (t) {
                                  return new V(function (e) {
                                    return e.error(
                                      eh(
                                        "Cannot load children because the guard of the route \"path: '".concat(
                                          t.path,
                                          "'\" returned false"
                                        )
                                      )
                                    );
                                  });
                                })(e);
                          })
                        )
                    : Bl(new hf([], t));
                },
              },
              {
                key: "runCanLoadGuards",
                value: function (t, e, n) {
                  var r = this,
                    i = e.canLoad;
                  return i && 0 !== i.length
                    ? Bl(
                        i.map(function (r) {
                          var i,
                            o = t.get(r);
                          if (
                            (function (t) {
                              return t && ff(t.canLoad);
                            })(o)
                          )
                            i = o.canLoad(e, n);
                          else {
                            if (!ff(o))
                              throw new Error("Invalid CanLoad guard");
                            i = o(e, n);
                          }
                          return sh(i);
                        })
                      ).pipe(
                        pf(),
                        Rc(function (t) {
                          if (df(t)) {
                            var e = eh(
                              'Redirecting to "'.concat(
                                r.urlSerializer.serialize(t),
                                '"'
                              )
                            );
                            throw ((e.url = t), e);
                          }
                        }),
                        z(function (t) {
                          return !0 === t;
                        })
                      )
                    : Bl(!0);
                },
              },
              {
                key: "lineralizeSegments",
                value: function (t, e) {
                  for (var n = [], r = e.root; ; ) {
                    if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
                      return Bl(n);
                    if (r.numberOfChildren > 1 || !r.children.primary)
                      return jf(t.redirectTo);
                    r = r.children.primary;
                  }
                },
              },
              {
                key: "applyRedirectCommands",
                value: function (t, e, n) {
                  return this.applyRedirectCreatreUrlTree(
                    e,
                    this.urlSerializer.parse(e),
                    t,
                    n
                  );
                },
              },
              {
                key: "applyRedirectCreatreUrlTree",
                value: function (t, e, n, r) {
                  var i = this.createSegmentGroup(t, e.root, n, r);
                  return new dh(
                    i,
                    this.createQueryParams(
                      e.queryParams,
                      this.urlTree.queryParams
                    ),
                    e.fragment
                  );
                },
              },
              {
                key: "createQueryParams",
                value: function (t, e) {
                  var n = {};
                  return (
                    uh(t, function (t, r) {
                      if ("string" == typeof t && t.startsWith(":")) {
                        var i = t.substring(1);
                        n[r] = e[i];
                      } else n[r] = t;
                    }),
                    n
                  );
                },
              },
              {
                key: "createSegmentGroup",
                value: function (t, e, n, r) {
                  var i = this,
                    o = this.createSegments(t, e.segments, n, r),
                    a = {};
                  return (
                    uh(e.children, function (e, o) {
                      a[o] = i.createSegmentGroup(t, e, n, r);
                    }),
                    new vh(o, a)
                  );
                },
              },
              {
                key: "createSegments",
                value: function (t, e, n, r) {
                  var i = this;
                  return e.map(function (e) {
                    return e.path.startsWith(":")
                      ? i.findPosParam(t, e, r)
                      : i.findOrReturn(e, n);
                  });
                },
              },
              {
                key: "findPosParam",
                value: function (t, e, n) {
                  var r = n[e.path.substring(1)];
                  if (!r)
                    throw new Error(
                      "Cannot redirect to '"
                        .concat(t, "'. Cannot find '")
                        .concat(e.path, "'.")
                    );
                  return r;
                },
              },
              {
                key: "findOrReturn",
                value: function (t, n) {
                  var r,
                    i = 0,
                    o = e(n);
                  try {
                    for (o.s(); !(r = o.n()).done; ) {
                      var a = r.value;
                      if (a.path === t.path) return n.splice(i), a;
                      i++;
                    }
                  } catch (u) {
                    o.e(u);
                  } finally {
                    o.f();
                  }
                  return t;
                },
              },
            ]),
            t
          );
        })();
        function Nf(t) {
          for (
            var e = {}, n = 0, r = Object.keys(t.children);
            n < r.length;
            n++
          ) {
            var i = r[n],
              o = Nf(t.children[i]);
            (o.segments.length > 0 || o.hasChildren()) && (e[i] = o);
          }
          return (function (t) {
            if (1 === t.numberOfChildren && t.children.primary) {
              var e = t.children.primary;
              return new vh(t.segments.concat(e.segments), e.children);
            }
            return t;
          })(new vh(t.segments, e));
        }
        var Uf = function t(e) {
            p(this, t),
              (this.path = e),
              (this.route = this.path[this.path.length - 1]);
          },
          Mf = function t(e, n) {
            p(this, t), (this.component = e), (this.route = n);
          };
        function Ff(t, e, n) {
          var r = t._root;
          return Hf(r, e ? e._root : null, n, [r.value]);
        }
        function Lf(t, e, n) {
          var r = (function (t) {
            if (!t) return null;
            for (var e = t.parent; e; e = e.parent) {
              var n = e.routeConfig;
              if (n && n._loadedConfig) return n._loadedConfig;
            }
            return null;
          })(e);
          return (r ? r.module.injector : n).get(t);
        }
        function Hf(t, e, n, r) {
          var i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { canDeactivateChecks: [], canActivateChecks: [] },
            o = Uh(e);
          return (
            t.children.forEach(function (t) {
              !(function (t, e, n, r) {
                var i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : { canDeactivateChecks: [], canActivateChecks: [] },
                  o = t.value,
                  a = e ? e.value : null,
                  u = n ? n.getContext(t.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  var s = (function (t, e, n) {
                    if ("function" == typeof n) return n(t, e);
                    switch (n) {
                      case "pathParamsChange":
                        return !yh(t.url, e.url);
                      case "pathParamsOrQueryParamsChange":
                        return (
                          !yh(t.url, e.url) || !rh(t.queryParams, e.queryParams)
                        );
                      case "always":
                        return !0;
                      case "paramsOrQueryParamsChange":
                        return !Wh(t, e) || !rh(t.queryParams, e.queryParams);
                      case "paramsChange":
                      default:
                        return !Wh(t, e);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  s
                    ? i.canActivateChecks.push(new Uf(r))
                    : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    Hf(t, e, o.component ? (u ? u.children : null) : n, r, i),
                    s &&
                      u &&
                      u.outlet &&
                      u.outlet.isActivated &&
                      i.canDeactivateChecks.push(new Mf(u.outlet.component, a));
                } else
                  a && zf(e, u, i),
                    i.canActivateChecks.push(new Uf(r)),
                    Hf(
                      t,
                      null,
                      o.component ? (u ? u.children : null) : n,
                      r,
                      i
                    );
              })(t, o[t.value.outlet], n, r.concat([t.value]), i),
                delete o[t.value.outlet];
            }),
            uh(o, function (t, e) {
              return zf(t, n.getContext(e), i);
            }),
            i
          );
        }
        function zf(t, e, n) {
          var r = Uh(t),
            i = t.value;
          uh(r, function (t, r) {
            zf(t, i.component ? (e ? e.children.getContext(r) : null) : e, n);
          }),
            n.canDeactivateChecks.push(
              new Mf(
                i.component && e && e.outlet && e.outlet.isActivated
                  ? e.outlet.component
                  : null,
                i
              )
            );
        }
        var Bf = function t() {
          p(this, t);
        };
        function qf(t) {
          return new V(function (e) {
            return e.error(t);
          });
        }
        var Gf = (function () {
          function t(e, n, r, i, o, a) {
            p(this, t),
              (this.rootComponentType = e),
              (this.config = n),
              (this.urlTree = r),
              (this.url = i),
              (this.paramsInheritanceStrategy = o),
              (this.relativeLinkResolution = a);
          }
          return (
            g(t, [
              {
                key: "recognize",
                value: function () {
                  var t = xf(
                      this.urlTree.root,
                      [],
                      [],
                      this.config.filter(function (t) {
                        return void 0 === t.redirectTo;
                      }),
                      this.relativeLinkResolution
                    ).segmentGroup,
                    e = this.processSegmentGroup(this.config, t, "primary");
                  if (null === e) return null;
                  var n = new zh(
                      [],
                      Object.freeze({}),
                      Object.freeze(
                        Object.assign({}, this.urlTree.queryParams)
                      ),
                      this.urlTree.fragment,
                      {},
                      "primary",
                      this.rootComponentType,
                      null,
                      this.urlTree.root,
                      -1,
                      {}
                    ),
                    r = new Nh(n, e),
                    i = new Bh(this.url, r);
                  return this.inheritParamsAndData(i._root), i;
                },
              },
              {
                key: "inheritParamsAndData",
                value: function (t) {
                  var e = this,
                    n = t.value,
                    r = Hh(n, this.paramsInheritanceStrategy);
                  (n.params = Object.freeze(r.params)),
                    (n.data = Object.freeze(r.data)),
                    t.children.forEach(function (t) {
                      return e.inheritParamsAndData(t);
                    });
                },
              },
              {
                key: "processSegmentGroup",
                value: function (t, e, n) {
                  return 0 === e.segments.length && e.hasChildren()
                    ? this.processChildren(t, e)
                    : this.processSegment(t, e, e.segments, n);
                },
              },
              {
                key: "processChildren",
                value: function (t, r) {
                  for (
                    var i = [], o = 0, a = Object.keys(r.children);
                    o < a.length;
                    o++
                  ) {
                    var u = a[o],
                      s = r.children[u],
                      l = Cf(t, u),
                      c = this.processSegmentGroup(l, s, u);
                    if (null === c) return null;
                    i.push.apply(i, n(c));
                  }
                  var h = (function (t) {
                    var r,
                      i = [],
                      o = e(t);
                    try {
                      var a = function () {
                        var t,
                          e = r.value;
                        if (
                          !(function (t) {
                            var e = t.value.routeConfig;
                            return (
                              e && "" === e.path && void 0 === e.redirectTo
                            );
                          })(e)
                        )
                          return i.push(e), "continue";
                        var o = i.find(function (t) {
                          return e.value.routeConfig === t.value.routeConfig;
                        });
                        void 0 !== o
                          ? (t = o.children).push.apply(t, n(e.children))
                          : i.push(e);
                      };
                      for (o.s(); !(r = o.n()).done; ) a();
                    } catch (u) {
                      o.e(u);
                    } finally {
                      o.f();
                    }
                    return i;
                  })(i);
                  return (
                    h.sort(function (t, e) {
                      return "primary" === t.value.outlet
                        ? -1
                        : "primary" === e.value.outlet
                        ? 1
                        : t.value.outlet.localeCompare(e.value.outlet);
                    }),
                    h
                  );
                },
              },
              {
                key: "processSegment",
                value: function (t, n, r, i) {
                  var o,
                    a = e(t);
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      var u = o.value,
                        s = this.processSegmentAgainstRoute(u, n, r, i);
                      if (null !== s) return s;
                    }
                  } catch (l) {
                    a.e(l);
                  } finally {
                    a.f();
                  }
                  return Of(n, r, i) ? [] : null;
                },
              },
              {
                key: "processSegmentAgainstRoute",
                value: function (t, e, n, r) {
                  if (t.redirectTo || !Tf(t, e, n, r)) return null;
                  var i,
                    o = [],
                    a = [];
                  if ("**" === t.path) {
                    var u = n.length > 0 ? ah(n).parameters : {};
                    i = new zh(
                      n,
                      u,
                      Object.freeze(
                        Object.assign({}, this.urlTree.queryParams)
                      ),
                      this.urlTree.fragment,
                      Qf(t),
                      bf(t),
                      t.component,
                      t,
                      Zf(e),
                      Wf(e) + n.length,
                      $f(t)
                    );
                  } else {
                    var s = Ef(e, t, n);
                    if (!s.matched) return null;
                    (o = s.consumedSegments),
                      (a = n.slice(s.lastChild)),
                      (i = new zh(
                        o,
                        s.parameters,
                        Object.freeze(
                          Object.assign({}, this.urlTree.queryParams)
                        ),
                        this.urlTree.fragment,
                        Qf(t),
                        bf(t),
                        t.component,
                        t,
                        Zf(e),
                        Wf(e) + o.length,
                        $f(t)
                      ));
                  }
                  var l = (function (t) {
                      return t.children
                        ? t.children
                        : t.loadChildren
                        ? t._loadedConfig.routes
                        : [];
                    })(t),
                    c = xf(
                      e,
                      o,
                      a,
                      l.filter(function (t) {
                        return void 0 === t.redirectTo;
                      }),
                      this.relativeLinkResolution
                    ),
                    h = c.segmentGroup,
                    f = c.slicedSegments;
                  if (0 === f.length && h.hasChildren()) {
                    var d = this.processChildren(l, h);
                    return null === d ? null : [new Nh(i, d)];
                  }
                  if (0 === l.length && 0 === f.length) return [new Nh(i, [])];
                  var v = bf(t) === r,
                    p = this.processSegment(l, h, f, v ? "primary" : r);
                  return null === p ? null : [new Nh(i, p)];
                },
              },
            ]),
            t
          );
        })();
        function Zf(t) {
          for (var e = t; e._sourceSegment; ) e = e._sourceSegment;
          return e;
        }
        function Wf(t) {
          for (
            var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0;
            e._sourceSegment;

          )
            n += (e = e._sourceSegment)._segmentIndexShift
              ? e._segmentIndexShift
              : 0;
          return n - 1;
        }
        function Qf(t) {
          return t.data || {};
        }
        function $f(t) {
          return t.resolve || {};
        }
        function Jf(t) {
          return nc(function (e) {
            var n = t(e);
            return n
              ? K(n).pipe(
                  z(function () {
                    return e;
                  })
                )
              : Bl(e);
          });
        }
        var Kf = (function (t) {
            s(n, t);
            var e = c(n);
            function n() {
              return p(this, n), e.apply(this, arguments);
            }
            return n;
          })(
            (function () {
              function t() {
                p(this, t);
              }
              return (
                g(t, [
                  {
                    key: "shouldDetach",
                    value: function (t) {
                      return !1;
                    },
                  },
                  { key: "store", value: function (t, e) {} },
                  {
                    key: "shouldAttach",
                    value: function (t) {
                      return !1;
                    },
                  },
                  {
                    key: "retrieve",
                    value: function (t) {
                      return null;
                    },
                  },
                  {
                    key: "shouldReuseRoute",
                    value: function (t, e) {
                      return t.routeConfig === e.routeConfig;
                    },
                  },
                ]),
                t
              );
            })()
          ),
          Yf = new Zn("ROUTES"),
          Xf = (function () {
            function t(e, n, r, i) {
              p(this, t),
                (this.loader = e),
                (this.compiler = n),
                (this.onLoadStartListener = r),
                (this.onLoadEndListener = i);
            }
            return (
              g(t, [
                {
                  key: "load",
                  value: function (t, e) {
                    var n = this;
                    if (e._loader$) return e._loader$;
                    this.onLoadStartListener && this.onLoadStartListener(e);
                    var r = this.loadModuleFactory(e.loadChildren).pipe(
                      z(function (r) {
                        n.onLoadEndListener && n.onLoadEndListener(e);
                        var i = r.create(t);
                        return new hf(
                          oh(
                            i.injector.get(Yf, void 0, Nt.Self | Nt.Optional)
                          ).map(wf),
                          i
                        );
                      }),
                      pc(function (t) {
                        throw ((e._loader$ = void 0), t);
                      })
                    );
                    return (
                      (e._loader$ = new ct(r, function () {
                        return new F();
                      }).pipe(at())),
                      e._loader$
                    );
                  },
                },
                {
                  key: "loadModuleFactory",
                  value: function (t) {
                    var e = this;
                    return "string" == typeof t
                      ? K(this.loader.load(t))
                      : sh(t()).pipe(
                          et(function (t) {
                            return t instanceof eu
                              ? Bl(t)
                              : K(e.compiler.compileModuleAsync(t));
                          })
                        );
                  },
                },
              ]),
              t
            );
          })(),
          td = function t() {
            p(this, t),
              (this.outlet = null),
              (this.route = null),
              (this.resolver = null),
              (this.children = new ed()),
              (this.attachRef = null);
          },
          ed = (function () {
            function t() {
              p(this, t), (this.contexts = new Map());
            }
            return (
              g(t, [
                {
                  key: "onChildOutletCreated",
                  value: function (t, e) {
                    var n = this.getOrCreateContext(t);
                    (n.outlet = e), this.contexts.set(t, n);
                  },
                },
                {
                  key: "onChildOutletDestroyed",
                  value: function (t) {
                    var e = this.getContext(t);
                    e && (e.outlet = null);
                  },
                },
                {
                  key: "onOutletDeactivated",
                  value: function () {
                    var t = this.contexts;
                    return (this.contexts = new Map()), t;
                  },
                },
                {
                  key: "onOutletReAttached",
                  value: function (t) {
                    this.contexts = t;
                  },
                },
                {
                  key: "getOrCreateContext",
                  value: function (t) {
                    var e = this.getContext(t);
                    return e || ((e = new td()), this.contexts.set(t, e)), e;
                  },
                },
                {
                  key: "getContext",
                  value: function (t) {
                    return this.contexts.get(t) || null;
                  },
                },
              ]),
              t
            );
          })(),
          nd = (function () {
            function t() {
              p(this, t);
            }
            return (
              g(t, [
                {
                  key: "shouldProcessUrl",
                  value: function (t) {
                    return !0;
                  },
                },
                {
                  key: "extract",
                  value: function (t) {
                    return t;
                  },
                },
                {
                  key: "merge",
                  value: function (t, e) {
                    return t;
                  },
                },
              ]),
              t
            );
          })();
        function rd(t) {
          throw t;
        }
        function id(t, e, n) {
          return e.parse("/");
        }
        function od(t, e) {
          return Bl(null);
        }
        var ad,
          ud,
          sd =
            (((ud = (function () {
              function t(e, n, r, i, o, a, u, s) {
                var l = this;
                p(this, t),
                  (this.rootComponentType = e),
                  (this.urlSerializer = n),
                  (this.rootContexts = r),
                  (this.location = i),
                  (this.config = s),
                  (this.lastSuccessfulNavigation = null),
                  (this.currentNavigation = null),
                  (this.disposed = !1),
                  (this.lastLocationChangeInfo = null),
                  (this.navigationId = 0),
                  (this.isNgZoneEnabled = !1),
                  (this.events = new F()),
                  (this.errorHandler = rd),
                  (this.malformedUriErrorHandler = id),
                  (this.navigated = !1),
                  (this.lastSuccessfulId = -1),
                  (this.hooks = {
                    beforePreactivation: od,
                    afterPreactivation: od,
                  }),
                  (this.urlHandlingStrategy = new nd()),
                  (this.routeReuseStrategy = new Kf()),
                  (this.onSameUrlNavigation = "ignore"),
                  (this.paramsInheritanceStrategy = "emptyOnly"),
                  (this.urlUpdateStrategy = "deferred"),
                  (this.relativeLinkResolution = "corrected"),
                  (this.ngModule = o.get(tu)),
                  (this.console = o.get(Au));
                var c = o.get(Lu);
                (this.isNgZoneEnabled =
                  c instanceof Lu && Lu.isInAngularZone()),
                  this.resetConfig(s),
                  (this.currentUrlTree = new dh(new vh([], {}), {}, null)),
                  (this.rawUrlTree = this.currentUrlTree),
                  (this.browserUrlTree = this.currentUrlTree),
                  (this.configLoader = new Xf(
                    a,
                    u,
                    function (t) {
                      return l.triggerEvent(new Zc(t));
                    },
                    function (t) {
                      return l.triggerEvent(new Wc(t));
                    }
                  )),
                  (this.routerState = Fh(
                    this.currentUrlTree,
                    this.rootComponentType
                  )),
                  (this.transitions = new ql({
                    id: 0,
                    currentUrlTree: this.currentUrlTree,
                    currentRawUrl: this.currentUrlTree,
                    extractedUrl: this.urlHandlingStrategy.extract(
                      this.currentUrlTree
                    ),
                    urlAfterRedirects: this.urlHandlingStrategy.extract(
                      this.currentUrlTree
                    ),
                    rawUrl: this.currentUrlTree,
                    extras: {},
                    resolve: null,
                    reject: null,
                    promise: Promise.resolve(!0),
                    source: "imperative",
                    restoredState: null,
                    currentSnapshot: this.routerState.snapshot,
                    targetSnapshot: null,
                    currentRouterState: this.routerState,
                    targetRouterState: null,
                    guards: { canActivateChecks: [], canDeactivateChecks: [] },
                    guardsResult: null,
                  })),
                  (this.navigations = this.setupNavigations(this.transitions)),
                  this.processNavigations();
              }
              return (
                g(t, [
                  {
                    key: "setupNavigations",
                    value: function (t) {
                      var e = this,
                        n = this.events;
                      return t.pipe(
                        fc(function (t) {
                          return 0 !== t.id;
                        }),
                        z(function (t) {
                          return Object.assign(Object.assign({}, t), {
                            extractedUrl: e.urlHandlingStrategy.extract(
                              t.rawUrl
                            ),
                          });
                        }),
                        nc(function (t) {
                          var r,
                            i,
                            o,
                            a,
                            u = !1,
                            s = !1;
                          return Bl(t).pipe(
                            Rc(function (t) {
                              e.currentNavigation = {
                                id: t.id,
                                initialUrl: t.currentRawUrl,
                                extractedUrl: t.extractedUrl,
                                trigger: t.source,
                                extras: t.extras,
                                previousNavigation: e.lastSuccessfulNavigation
                                  ? Object.assign(
                                      Object.assign(
                                        {},
                                        e.lastSuccessfulNavigation
                                      ),
                                      { previousNavigation: null }
                                    )
                                  : null,
                              };
                            }),
                            nc(function (t) {
                              var r,
                                i,
                                o,
                                a,
                                u =
                                  !e.navigated ||
                                  t.extractedUrl.toString() !==
                                    e.browserUrlTree.toString();
                              if (
                                ("reload" === e.onSameUrlNavigation || u) &&
                                e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                              )
                                return Bl(t).pipe(
                                  nc(function (t) {
                                    var r = e.transitions.getValue();
                                    return (
                                      n.next(
                                        new Uc(
                                          t.id,
                                          e.serializeUrl(t.extractedUrl),
                                          t.source,
                                          t.restoredState
                                        )
                                      ),
                                      r !== e.transitions.getValue()
                                        ? Xl
                                        : Promise.resolve(t)
                                    );
                                  }),
                                  ((r = e.ngModule.injector),
                                  (i = e.configLoader),
                                  (o = e.urlSerializer),
                                  (a = e.config),
                                  nc(function (t) {
                                    return (function (t, e, n, r, i) {
                                      return new Df(t, e, n, r, i).apply();
                                    })(r, i, o, t.extractedUrl, a).pipe(
                                      z(function (e) {
                                        return Object.assign(
                                          Object.assign({}, t),
                                          { urlAfterRedirects: e }
                                        );
                                      })
                                    );
                                  })),
                                  Rc(function (t) {
                                    e.currentNavigation = Object.assign(
                                      Object.assign({}, e.currentNavigation),
                                      { finalUrl: t.urlAfterRedirects }
                                    );
                                  }),
                                  (function (t, n, r, i, o) {
                                    return et(function (r) {
                                      return (function (t, e, n, r) {
                                        var i =
                                            arguments.length > 4 &&
                                            void 0 !== arguments[4]
                                              ? arguments[4]
                                              : "emptyOnly",
                                          o =
                                            arguments.length > 5 &&
                                            void 0 !== arguments[5]
                                              ? arguments[5]
                                              : "legacy";
                                        try {
                                          var a = new Gf(
                                            t,
                                            e,
                                            n,
                                            r,
                                            i,
                                            o
                                          ).recognize();
                                          return null === a
                                            ? qf(new Bf())
                                            : Bl(a);
                                        } catch (u) {
                                          return qf(u);
                                        }
                                      })(
                                        t,
                                        n,
                                        r.urlAfterRedirects,
                                        ((a = r.urlAfterRedirects),
                                        e.serializeUrl(a)),
                                        i,
                                        o
                                      ).pipe(
                                        z(function (t) {
                                          return Object.assign(
                                            Object.assign({}, r),
                                            { targetSnapshot: t }
                                          );
                                        })
                                      );
                                      var a;
                                    });
                                  })(
                                    e.rootComponentType,
                                    e.config,
                                    0,
                                    e.paramsInheritanceStrategy,
                                    e.relativeLinkResolution
                                  ),
                                  Rc(function (t) {
                                    "eager" === e.urlUpdateStrategy &&
                                      (t.extras.skipLocationChange ||
                                        e.setBrowserUrl(
                                          t.urlAfterRedirects,
                                          !!t.extras.replaceUrl,
                                          t.id,
                                          t.extras.state
                                        ),
                                      (e.browserUrlTree = t.urlAfterRedirects));
                                    var r = new Hc(
                                      t.id,
                                      e.serializeUrl(t.extractedUrl),
                                      e.serializeUrl(t.urlAfterRedirects),
                                      t.targetSnapshot
                                    );
                                    n.next(r);
                                  })
                                );
                              if (
                                u &&
                                e.rawUrlTree &&
                                e.urlHandlingStrategy.shouldProcessUrl(
                                  e.rawUrlTree
                                )
                              ) {
                                var s = t.id,
                                  l = t.extractedUrl,
                                  c = t.source,
                                  h = t.restoredState,
                                  f = t.extras,
                                  d = new Uc(s, e.serializeUrl(l), c, h);
                                n.next(d);
                                var v = Fh(l, e.rootComponentType).snapshot;
                                return Bl(
                                  Object.assign(Object.assign({}, t), {
                                    targetSnapshot: v,
                                    urlAfterRedirects: l,
                                    extras: Object.assign(
                                      Object.assign({}, f),
                                      { skipLocationChange: !1, replaceUrl: !1 }
                                    ),
                                  })
                                );
                              }
                              return (
                                (e.rawUrlTree = t.rawUrl),
                                (e.browserUrlTree = t.urlAfterRedirects),
                                t.resolve(null),
                                Xl
                              );
                            }),
                            Jf(function (t) {
                              var n = t.targetSnapshot,
                                r = t.id,
                                i = t.extractedUrl,
                                o = t.rawUrl,
                                a = t.extras,
                                u = a.skipLocationChange,
                                s = a.replaceUrl;
                              return e.hooks.beforePreactivation(n, {
                                navigationId: r,
                                appliedUrlTree: i,
                                rawUrlTree: o,
                                skipLocationChange: !!u,
                                replaceUrl: !!s,
                              });
                            }),
                            Rc(function (t) {
                              var n = new zc(
                                t.id,
                                e.serializeUrl(t.extractedUrl),
                                e.serializeUrl(t.urlAfterRedirects),
                                t.targetSnapshot
                              );
                              e.triggerEvent(n);
                            }),
                            z(function (t) {
                              return Object.assign(Object.assign({}, t), {
                                guards: Ff(
                                  t.targetSnapshot,
                                  t.currentSnapshot,
                                  e.rootContexts
                                ),
                              });
                            }),
                            (function (t, e) {
                              return et(function (n) {
                                var r = n.targetSnapshot,
                                  i = n.currentSnapshot,
                                  o = n.guards,
                                  a = o.canActivateChecks,
                                  u = o.canDeactivateChecks;
                                return 0 === u.length && 0 === a.length
                                  ? Bl(
                                      Object.assign(Object.assign({}, n), {
                                        guardsResult: !0,
                                      })
                                    )
                                  : (function (t, e, n, r) {
                                      return K(t).pipe(
                                        et(function (t) {
                                          return (function (t, e, n, r, i) {
                                            var o =
                                              e && e.routeConfig
                                                ? e.routeConfig.canDeactivate
                                                : null;
                                            return o && 0 !== o.length
                                              ? Bl(
                                                  o.map(function (o) {
                                                    var a,
                                                      u = Lf(o, e, i);
                                                    if (
                                                      (function (t) {
                                                        return (
                                                          t &&
                                                          ff(t.canDeactivate)
                                                        );
                                                      })(u)
                                                    )
                                                      a = sh(
                                                        u.canDeactivate(
                                                          t,
                                                          e,
                                                          n,
                                                          r
                                                        )
                                                      );
                                                    else {
                                                      if (!ff(u))
                                                        throw new Error(
                                                          "Invalid CanDeactivate guard"
                                                        );
                                                      a = sh(u(t, e, n, r));
                                                    }
                                                    return a.pipe(Oc());
                                                  })
                                                ).pipe(pf())
                                              : Bl(!0);
                                          })(t.component, t.route, n, e, r);
                                        }),
                                        Oc(function (t) {
                                          return !0 !== t;
                                        }, !0)
                                      );
                                    })(u, r, i, t).pipe(
                                      et(function (n) {
                                        return n && "boolean" == typeof n
                                          ? (function (t, e, n, r) {
                                              return K(e).pipe(
                                                mc(function (e) {
                                                  return Yl(
                                                    (function (t, e) {
                                                      return (
                                                        null !== t &&
                                                          e &&
                                                          e(new Qc(t)),
                                                        Bl(!0)
                                                      );
                                                    })(e.route.parent, r),
                                                    (function (t, e) {
                                                      return (
                                                        null !== t &&
                                                          e &&
                                                          e(new Jc(t)),
                                                        Bl(!0)
                                                      );
                                                    })(e.route, r),
                                                    (function (t, e, n) {
                                                      var r = e[e.length - 1],
                                                        i = e
                                                          .slice(
                                                            0,
                                                            e.length - 1
                                                          )
                                                          .reverse()
                                                          .map(function (t) {
                                                            return (function (
                                                              t
                                                            ) {
                                                              var e =
                                                                t.routeConfig
                                                                  ? t
                                                                      .routeConfig
                                                                      .canActivateChild
                                                                  : null;
                                                              return e &&
                                                                0 !== e.length
                                                                ? {
                                                                    node: t,
                                                                    guards: e,
                                                                  }
                                                                : null;
                                                            })(t);
                                                          })
                                                          .filter(function (t) {
                                                            return null !== t;
                                                          })
                                                          .map(function (e) {
                                                            return ec(
                                                              function () {
                                                                return Bl(
                                                                  e.guards.map(
                                                                    function (
                                                                      i
                                                                    ) {
                                                                      var o,
                                                                        a = Lf(
                                                                          i,
                                                                          e.node,
                                                                          n
                                                                        );
                                                                      if (
                                                                        (function (
                                                                          t
                                                                        ) {
                                                                          return (
                                                                            t &&
                                                                            ff(
                                                                              t.canActivateChild
                                                                            )
                                                                          );
                                                                        })(a)
                                                                      )
                                                                        o = sh(
                                                                          a.canActivateChild(
                                                                            r,
                                                                            t
                                                                          )
                                                                        );
                                                                      else {
                                                                        if (
                                                                          !ff(a)
                                                                        )
                                                                          throw new Error(
                                                                            "Invalid CanActivateChild guard"
                                                                          );
                                                                        o = sh(
                                                                          a(
                                                                            r,
                                                                            t
                                                                          )
                                                                        );
                                                                      }
                                                                      return o.pipe(
                                                                        Oc()
                                                                      );
                                                                    }
                                                                  )
                                                                ).pipe(pf());
                                                              }
                                                            );
                                                          });
                                                      return Bl(i).pipe(pf());
                                                    })(t, e.path, n),
                                                    (function (t, e, n) {
                                                      var r = e.routeConfig
                                                        ? e.routeConfig
                                                            .canActivate
                                                        : null;
                                                      return r && 0 !== r.length
                                                        ? Bl(
                                                            r.map(function (r) {
                                                              return ec(
                                                                function () {
                                                                  var i,
                                                                    o = Lf(
                                                                      r,
                                                                      e,
                                                                      n
                                                                    );
                                                                  if (
                                                                    (function (
                                                                      t
                                                                    ) {
                                                                      return (
                                                                        t &&
                                                                        ff(
                                                                          t.canActivate
                                                                        )
                                                                      );
                                                                    })(o)
                                                                  )
                                                                    i = sh(
                                                                      o.canActivate(
                                                                        e,
                                                                        t
                                                                      )
                                                                    );
                                                                  else {
                                                                    if (!ff(o))
                                                                      throw new Error(
                                                                        "Invalid CanActivate guard"
                                                                      );
                                                                    i = sh(
                                                                      o(e, t)
                                                                    );
                                                                  }
                                                                  return i.pipe(
                                                                    Oc()
                                                                  );
                                                                }
                                                              );
                                                            })
                                                          ).pipe(pf())
                                                        : Bl(!0);
                                                    })(t, e.route, n)
                                                  );
                                                }),
                                                Oc(function (t) {
                                                  return !0 !== t;
                                                }, !0)
                                              );
                                            })(r, a, t, e)
                                          : Bl(n);
                                      }),
                                      z(function (t) {
                                        return Object.assign(
                                          Object.assign({}, n),
                                          { guardsResult: t }
                                        );
                                      })
                                    );
                              });
                            })(e.ngModule.injector, function (t) {
                              return e.triggerEvent(t);
                            }),
                            Rc(function (t) {
                              if (df(t.guardsResult)) {
                                var n = eh(
                                  'Redirecting to "'.concat(
                                    e.serializeUrl(t.guardsResult),
                                    '"'
                                  )
                                );
                                throw ((n.url = t.guardsResult), n);
                              }
                              var r = new Bc(
                                t.id,
                                e.serializeUrl(t.extractedUrl),
                                e.serializeUrl(t.urlAfterRedirects),
                                t.targetSnapshot,
                                !!t.guardsResult
                              );
                              e.triggerEvent(r);
                            }),
                            fc(function (t) {
                              if (!t.guardsResult) {
                                e.resetUrlToCurrentUrlTree();
                                var r = new Fc(
                                  t.id,
                                  e.serializeUrl(t.extractedUrl),
                                  ""
                                );
                                return n.next(r), t.resolve(!1), !1;
                              }
                              return !0;
                            }),
                            Jf(function (t) {
                              if (t.guards.canActivateChecks.length)
                                return Bl(t).pipe(
                                  Rc(function (t) {
                                    var n = new qc(
                                      t.id,
                                      e.serializeUrl(t.extractedUrl),
                                      e.serializeUrl(t.urlAfterRedirects),
                                      t.targetSnapshot
                                    );
                                    e.triggerEvent(n);
                                  }),
                                  nc(function (t) {
                                    var r,
                                      i,
                                      o = !1;
                                    return Bl(t).pipe(
                                      ((r = e.paramsInheritanceStrategy),
                                      (i = e.ngModule.injector),
                                      et(function (t) {
                                        var e = t.targetSnapshot,
                                          n = t.guards.canActivateChecks;
                                        if (!n.length) return Bl(t);
                                        var o = 0;
                                        return K(n).pipe(
                                          mc(function (t) {
                                            return (function (t, e, n, r) {
                                              return (function (t, e, n, r) {
                                                var i = Object.keys(t);
                                                if (0 === i.length)
                                                  return Bl({});
                                                var o = {};
                                                return K(i).pipe(
                                                  et(function (i) {
                                                    return (function (
                                                      t,
                                                      e,
                                                      n,
                                                      r
                                                    ) {
                                                      var i = Lf(t, e, r);
                                                      return sh(
                                                        i.resolve
                                                          ? i.resolve(e, n)
                                                          : i(e, n)
                                                      );
                                                    })(t[i], e, n, r).pipe(
                                                      Rc(function (t) {
                                                        o[i] = t;
                                                      })
                                                    );
                                                  }),
                                                  _c(1),
                                                  et(function () {
                                                    return Object.keys(o)
                                                      .length === i.length
                                                      ? Bl(o)
                                                      : Xl;
                                                  })
                                                );
                                              })(t._resolve, t, e, r).pipe(
                                                z(function (e) {
                                                  return (
                                                    (t._resolvedData = e),
                                                    (t.data = Object.assign(
                                                      Object.assign({}, t.data),
                                                      Hh(t, n).resolve
                                                    )),
                                                    null
                                                  );
                                                })
                                              );
                                            })(t.route, e, r, i);
                                          }),
                                          Rc(function () {
                                            return o++;
                                          }),
                                          _c(1),
                                          et(function (e) {
                                            return o === n.length ? Bl(t) : Xl;
                                          })
                                        );
                                      })),
                                      Rc({
                                        next: function () {
                                          return (o = !0);
                                        },
                                        complete: function () {
                                          if (!o) {
                                            var r = new Fc(
                                              t.id,
                                              e.serializeUrl(t.extractedUrl),
                                              "At least one route resolver didn't emit any value."
                                            );
                                            n.next(r), t.resolve(!1);
                                          }
                                        },
                                      })
                                    );
                                  }),
                                  Rc(function (t) {
                                    var n = new Gc(
                                      t.id,
                                      e.serializeUrl(t.extractedUrl),
                                      e.serializeUrl(t.urlAfterRedirects),
                                      t.targetSnapshot
                                    );
                                    e.triggerEvent(n);
                                  })
                                );
                            }),
                            Jf(function (t) {
                              var n = t.targetSnapshot,
                                r = t.id,
                                i = t.extractedUrl,
                                o = t.rawUrl,
                                a = t.extras,
                                u = a.skipLocationChange,
                                s = a.replaceUrl;
                              return e.hooks.afterPreactivation(n, {
                                navigationId: r,
                                appliedUrlTree: i,
                                rawUrlTree: o,
                                skipLocationChange: !!u,
                                replaceUrl: !!s,
                              });
                            }),
                            z(function (t) {
                              var n = (function (t, e, n) {
                                var r = Qh(t, e._root, n ? n._root : void 0);
                                return new Mh(r, e);
                              })(
                                e.routeReuseStrategy,
                                t.targetSnapshot,
                                t.currentRouterState
                              );
                              return Object.assign(Object.assign({}, t), {
                                targetRouterState: n,
                              });
                            }),
                            Rc(function (t) {
                              (e.currentUrlTree = t.urlAfterRedirects),
                                (e.rawUrlTree = e.urlHandlingStrategy.merge(
                                  e.currentUrlTree,
                                  t.rawUrl
                                )),
                                (e.routerState = t.targetRouterState),
                                "deferred" === e.urlUpdateStrategy &&
                                  (t.extras.skipLocationChange ||
                                    e.setBrowserUrl(
                                      e.rawUrlTree,
                                      !!t.extras.replaceUrl,
                                      t.id,
                                      t.extras.state
                                    ),
                                  (e.browserUrlTree = t.urlAfterRedirects));
                            }),
                            ((i = e.rootContexts),
                            (o = e.routeReuseStrategy),
                            (a = function (t) {
                              return e.triggerEvent(t);
                            }),
                            z(function (t) {
                              return (
                                new lf(
                                  o,
                                  t.targetRouterState,
                                  t.currentRouterState,
                                  a
                                ).activate(i),
                                t
                              );
                            })),
                            Rc({
                              next: function () {
                                u = !0;
                              },
                              complete: function () {
                                u = !0;
                              },
                            }),
                            ((r = function () {
                              if (!u && !s) {
                                e.resetUrlToCurrentUrlTree();
                                var r = new Fc(
                                  t.id,
                                  e.serializeUrl(t.extractedUrl),
                                  "Navigation ID "
                                    .concat(
                                      t.id,
                                      " is not equal to the current navigation id "
                                    )
                                    .concat(e.navigationId)
                                );
                                n.next(r), t.resolve(!1);
                              }
                              e.currentNavigation = null;
                            }),
                            function (t) {
                              return t.lift(new jc(r));
                            }),
                            pc(function (r) {
                              if (
                                ((s = !0),
                                (u = r) && u.ngNavigationCancelingError)
                              ) {
                                var i = df(r.url);
                                i ||
                                  ((e.navigated = !0),
                                  e.resetStateAndUrl(
                                    t.currentRouterState,
                                    t.currentUrlTree,
                                    t.rawUrl
                                  ));
                                var o = new Fc(
                                  t.id,
                                  e.serializeUrl(t.extractedUrl),
                                  r.message
                                );
                                n.next(o),
                                  i
                                    ? setTimeout(function () {
                                        var n = e.urlHandlingStrategy.merge(
                                          r.url,
                                          e.rawUrlTree
                                        );
                                        e.scheduleNavigation(
                                          n,
                                          "imperative",
                                          null,
                                          {
                                            skipLocationChange:
                                              t.extras.skipLocationChange,
                                            replaceUrl:
                                              "eager" === e.urlUpdateStrategy,
                                          },
                                          {
                                            resolve: t.resolve,
                                            reject: t.reject,
                                            promise: t.promise,
                                          }
                                        );
                                      }, 0)
                                    : t.resolve(!1);
                              } else {
                                e.resetStateAndUrl(
                                  t.currentRouterState,
                                  t.currentUrlTree,
                                  t.rawUrl
                                );
                                var a = new Lc(
                                  t.id,
                                  e.serializeUrl(t.extractedUrl),
                                  r
                                );
                                n.next(a);
                                try {
                                  t.resolve(e.errorHandler(r));
                                } catch (l) {
                                  t.reject(l);
                                }
                              }
                              var u;
                              return Xl;
                            })
                          );
                        })
                      );
                    },
                  },
                  {
                    key: "resetRootComponentType",
                    value: function (t) {
                      (this.rootComponentType = t),
                        (this.routerState.root.component =
                          this.rootComponentType);
                    },
                  },
                  {
                    key: "getTransition",
                    value: function () {
                      var t = this.transitions.value;
                      return (t.urlAfterRedirects = this.browserUrlTree), t;
                    },
                  },
                  {
                    key: "setTransition",
                    value: function (t) {
                      this.transitions.next(
                        Object.assign(
                          Object.assign({}, this.getTransition()),
                          t
                        )
                      );
                    },
                  },
                  {
                    key: "initialNavigation",
                    value: function () {
                      this.setUpLocationChangeListener(),
                        0 === this.navigationId &&
                          this.navigateByUrl(this.location.path(!0), {
                            replaceUrl: !0,
                          });
                    },
                  },
                  {
                    key: "setUpLocationChangeListener",
                    value: function () {
                      var t = this;
                      this.locationSubscription ||
                        (this.locationSubscription = this.location.subscribe(
                          function (e) {
                            var n = t.extractLocationChangeInfoFromEvent(e);
                            t.shouldScheduleNavigation(
                              t.lastLocationChangeInfo,
                              n
                            ) &&
                              setTimeout(function () {
                                var e = n.source,
                                  r = n.state,
                                  i = n.urlTree,
                                  o = { replaceUrl: !0 };
                                if (r) {
                                  var a = Object.assign({}, r);
                                  delete a.navigationId,
                                    0 !== Object.keys(a).length &&
                                      (o.state = a);
                                }
                                t.scheduleNavigation(i, e, r, o);
                              }, 0),
                              (t.lastLocationChangeInfo = n);
                          }
                        ));
                    },
                  },
                  {
                    key: "extractLocationChangeInfoFromEvent",
                    value: function (t) {
                      var e;
                      return {
                        source:
                          "popstate" === t.type ? "popstate" : "hashchange",
                        urlTree: this.parseUrl(t.url),
                        state: (
                          null === (e = t.state) || void 0 === e
                            ? void 0
                            : e.navigationId
                        )
                          ? t.state
                          : null,
                        transitionId: this.getTransition().id,
                      };
                    },
                  },
                  {
                    key: "shouldScheduleNavigation",
                    value: function (t, e) {
                      if (!t) return !0;
                      var n = e.urlTree.toString() === t.urlTree.toString();
                      return !(
                        e.transitionId === t.transitionId &&
                        n &&
                        (("hashchange" === e.source &&
                          "popstate" === t.source) ||
                          ("popstate" === e.source &&
                            "hashchange" === t.source))
                      );
                    },
                  },
                  {
                    key: "url",
                    get: function () {
                      return this.serializeUrl(this.currentUrlTree);
                    },
                  },
                  {
                    key: "getCurrentNavigation",
                    value: function () {
                      return this.currentNavigation;
                    },
                  },
                  {
                    key: "triggerEvent",
                    value: function (t) {
                      this.events.next(t);
                    },
                  },
                  {
                    key: "resetConfig",
                    value: function (t) {
                      mf(t),
                        (this.config = t.map(wf)),
                        (this.navigated = !1),
                        (this.lastSuccessfulId = -1);
                    },
                  },
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this.dispose();
                    },
                  },
                  {
                    key: "dispose",
                    value: function () {
                      this.transitions.complete(),
                        this.locationSubscription &&
                          (this.locationSubscription.unsubscribe(),
                          (this.locationSubscription = void 0)),
                        (this.disposed = !0);
                    },
                  },
                  {
                    key: "createUrlTree",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = e.relativeTo,
                        i = e.queryParams,
                        o = e.fragment,
                        a = e.queryParamsHandling,
                        u = e.preserveFragment,
                        s = r || this.routerState.root,
                        l = u ? this.currentUrlTree.fragment : o,
                        c = null;
                      switch (a) {
                        case "merge":
                          c = Object.assign(
                            Object.assign({}, this.currentUrlTree.queryParams),
                            i
                          );
                          break;
                        case "preserve":
                          c = this.currentUrlTree.queryParams;
                          break;
                        default:
                          c = i || null;
                      }
                      return (
                        null !== c && (c = this.removeEmptyProps(c)),
                        (function (t, e, r, i, o) {
                          if (0 === r.length)
                            return Yh(e.root, e.root, e, i, o);
                          var a = (function (t) {
                            if (
                              "string" == typeof t[0] &&
                              1 === t.length &&
                              "/" === t[0]
                            )
                              return new tf(!0, 0, t);
                            var e = 0,
                              r = !1,
                              i = t.reduce(function (t, i, o) {
                                if ("object" == typeof i && null != i) {
                                  if (i.outlets) {
                                    var a = {};
                                    return (
                                      uh(i.outlets, function (t, e) {
                                        a[e] =
                                          "string" == typeof t
                                            ? t.split("/")
                                            : t;
                                      }),
                                      [].concat(n(t), [{ outlets: a }])
                                    );
                                  }
                                  if (i.segmentPath)
                                    return [].concat(n(t), [i.segmentPath]);
                                }
                                return "string" != typeof i
                                  ? [].concat(n(t), [i])
                                  : 0 === o
                                  ? (i.split("/").forEach(function (n, i) {
                                      (0 == i && "." === n) ||
                                        (0 == i && "" === n
                                          ? (r = !0)
                                          : ".." === n
                                          ? e++
                                          : "" != n && t.push(n));
                                    }),
                                    t)
                                  : [].concat(n(t), [i]);
                              }, []);
                            return new tf(r, e, i);
                          })(r);
                          if (a.toRoot())
                            return Yh(e.root, new vh([], {}), e, i, o);
                          var u = (function (t, e, n) {
                              if (t.isAbsolute) return new ef(e.root, !0, 0);
                              if (-1 === n.snapshot._lastPathIndex) {
                                var r = n.snapshot._urlSegment;
                                return new ef(r, r === e.root, 0);
                              }
                              var i = Jh(t.commands[0]) ? 0 : 1;
                              return (function (t, e, n) {
                                for (var r = t, i = e, o = n; o > i; ) {
                                  if (((o -= i), !(r = r.parent)))
                                    throw new Error("Invalid number of '../'");
                                  i = r.segments.length;
                                }
                                return new ef(r, !1, i - o);
                              })(
                                n.snapshot._urlSegment,
                                n.snapshot._lastPathIndex + i,
                                t.numberOfDoubleDots
                              );
                            })(a, e, t),
                            s = u.processChildren
                              ? rf(u.segmentGroup, u.index, a.commands)
                              : nf(u.segmentGroup, u.index, a.commands);
                          return Yh(u.segmentGroup, s, e, i, o);
                        })(s, this.currentUrlTree, t, c, l)
                      );
                    },
                  },
                  {
                    key: "navigateByUrl",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : { skipLocationChange: !1 },
                        n = df(t) ? t : this.parseUrl(t),
                        r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                      return this.scheduleNavigation(r, "imperative", null, e);
                    },
                  },
                  {
                    key: "navigate",
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : { skipLocationChange: !1 };
                      return (
                        (function (t) {
                          for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            if (null == n)
                              throw new Error(
                                "The requested path contains "
                                  .concat(n, " segment at index ")
                                  .concat(e)
                              );
                          }
                        })(t),
                        this.navigateByUrl(this.createUrlTree(t, e), e)
                      );
                    },
                  },
                  {
                    key: "serializeUrl",
                    value: function (t) {
                      return this.urlSerializer.serialize(t);
                    },
                  },
                  {
                    key: "parseUrl",
                    value: function (t) {
                      var e;
                      try {
                        e = this.urlSerializer.parse(t);
                      } catch (n) {
                        e = this.malformedUriErrorHandler(
                          n,
                          this.urlSerializer,
                          t
                        );
                      }
                      return e;
                    },
                  },
                  {
                    key: "isActive",
                    value: function (t, e) {
                      if (df(t)) return lh(this.currentUrlTree, t, e);
                      var n = this.parseUrl(t);
                      return lh(this.currentUrlTree, n, e);
                    },
                  },
                  {
                    key: "removeEmptyProps",
                    value: function (t) {
                      return Object.keys(t).reduce(function (e, n) {
                        var r = t[n];
                        return null != r && (e[n] = r), e;
                      }, {});
                    },
                  },
                  {
                    key: "processNavigations",
                    value: function () {
                      var t = this;
                      this.navigations.subscribe(
                        function (e) {
                          (t.navigated = !0),
                            (t.lastSuccessfulId = e.id),
                            t.events.next(
                              new Mc(
                                e.id,
                                t.serializeUrl(e.extractedUrl),
                                t.serializeUrl(t.currentUrlTree)
                              )
                            ),
                            (t.lastSuccessfulNavigation = t.currentNavigation),
                            (t.currentNavigation = null),
                            e.resolve(!0);
                        },
                        function (e) {
                          t.console.warn("Unhandled Navigation Error: ");
                        }
                      );
                    },
                  },
                  {
                    key: "scheduleNavigation",
                    value: function (t, e, n, r, i) {
                      if (this.disposed) return Promise.resolve(!1);
                      var o,
                        a,
                        u,
                        s = this.getTransition(),
                        l =
                          "imperative" !== e &&
                          "imperative" === (null == s ? void 0 : s.source),
                        c =
                          (this.lastSuccessfulId === s.id ||
                          this.currentNavigation
                            ? s.rawUrl
                            : s.urlAfterRedirects
                          ).toString() === t.toString();
                      if (l && c) return Promise.resolve(!0);
                      i
                        ? ((o = i.resolve), (a = i.reject), (u = i.promise))
                        : (u = new Promise(function (t, e) {
                            (o = t), (a = e);
                          }));
                      var h = ++this.navigationId;
                      return (
                        this.setTransition({
                          id: h,
                          source: e,
                          restoredState: n,
                          currentUrlTree: this.currentUrlTree,
                          currentRawUrl: this.rawUrlTree,
                          rawUrl: t,
                          extras: r,
                          resolve: o,
                          reject: a,
                          promise: u,
                          currentSnapshot: this.routerState.snapshot,
                          currentRouterState: this.routerState,
                        }),
                        u.catch(function (t) {
                          return Promise.reject(t);
                        })
                      );
                    },
                  },
                  {
                    key: "setBrowserUrl",
                    value: function (t, e, n, r) {
                      var i = this.urlSerializer.serialize(t);
                      (r = r || {}),
                        this.location.isCurrentPathEqualTo(i) || e
                          ? this.location.replaceState(
                              i,
                              "",
                              Object.assign(Object.assign({}, r), {
                                navigationId: n,
                              })
                            )
                          : this.location.go(
                              i,
                              "",
                              Object.assign(Object.assign({}, r), {
                                navigationId: n,
                              })
                            );
                    },
                  },
                  {
                    key: "resetStateAndUrl",
                    value: function (t, e, n) {
                      (this.routerState = t),
                        (this.currentUrlTree = e),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          n
                        )),
                        this.resetUrlToCurrentUrlTree();
                    },
                  },
                  {
                    key: "resetUrlToCurrentUrlTree",
                    value: function () {
                      this.location.replaceState(
                        this.urlSerializer.serialize(this.rawUrlTree),
                        "",
                        { navigationId: this.lastSuccessfulId }
                      );
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || ud)(
                ar(Qn),
                ar(gh),
                ar(ed),
                ar(Fs),
                ar(go),
                ar(ss),
                ar(Uu),
                ar(void 0)
              );
            }),
            (ud.ɵprov = xt({ token: ud, factory: ud.ɵfac })),
            ud),
          ld =
            (((ad = (function () {
              function t(e, n, r) {
                var i = this;
                p(this, t),
                  (this.router = e),
                  (this.route = n),
                  (this.locationStrategy = r),
                  (this.commands = []),
                  (this.onChanges = new F()),
                  (this.subscription = e.events.subscribe(function (t) {
                    t instanceof Mc && i.updateTargetUrlAndHref();
                  }));
              }
              return (
                g(t, [
                  {
                    key: "routerLink",
                    set: function (t) {
                      this.commands =
                        null != t ? (Array.isArray(t) ? t : [t]) : [];
                    },
                  },
                  {
                    key: "ngOnChanges",
                    value: function (t) {
                      this.updateTargetUrlAndHref(), this.onChanges.next(this);
                    },
                  },
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this.subscription.unsubscribe();
                    },
                  },
                  {
                    key: "onClick",
                    value: function (t, e, n, r, i) {
                      if (0 !== t || e || n || r || i) return !0;
                      if (
                        "string" == typeof this.target &&
                        "_self" != this.target
                      )
                        return !0;
                      var o = {
                        skipLocationChange: cd(this.skipLocationChange),
                        replaceUrl: cd(this.replaceUrl),
                        state: this.state,
                      };
                      return this.router.navigateByUrl(this.urlTree, o), !1;
                    },
                  },
                  {
                    key: "updateTargetUrlAndHref",
                    value: function () {
                      this.href = this.locationStrategy.prepareExternalUrl(
                        this.router.serializeUrl(this.urlTree)
                      );
                    },
                  },
                  {
                    key: "urlTree",
                    get: function () {
                      return this.router.createUrlTree(this.commands, {
                        relativeTo:
                          void 0 !== this.relativeTo
                            ? this.relativeTo
                            : this.route,
                        queryParams: this.queryParams,
                        fragment: this.fragment,
                        queryParamsHandling: this.queryParamsHandling,
                        preserveFragment: cd(this.preserveFragment),
                      });
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || ad)(Po(sd), Po(Lh), Po(Rs));
            }),
            (ad.ɵdir = ce({
              type: ad,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  Lo("click", function (t) {
                    return e.onClick(
                      t.button,
                      t.ctrlKey,
                      t.shiftKey,
                      t.altKey,
                      t.metaKey
                    );
                  }),
                  2 & t && (ea("href", e.href, gr), Oo("target", e.target));
              },
              inputs: {
                routerLink: "routerLink",
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
                relativeTo: "relativeTo",
              },
              features: [be],
            })),
            ad);
        function cd(t) {
          return "" === t || !!t;
        }
        var hd,
          fd,
          dd,
          vd =
            (((hd = (function () {
              function t(e, n, r, i, o) {
                p(this, t),
                  (this.parentContexts = e),
                  (this.location = n),
                  (this.resolver = r),
                  (this.changeDetector = o),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  (this.activateEvents = new gu()),
                  (this.deactivateEvents = new gu()),
                  (this.name = i || "primary"),
                  e.onChildOutletCreated(this.name, this);
              }
              return (
                g(t, [
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this.parentContexts.onChildOutletDestroyed(this.name);
                    },
                  },
                  {
                    key: "ngOnInit",
                    value: function () {
                      if (!this.activated) {
                        var t = this.parentContexts.getContext(this.name);
                        t &&
                          t.route &&
                          (t.attachRef
                            ? this.attach(t.attachRef, t.route)
                            : this.activateWith(t.route, t.resolver || null));
                      }
                    },
                  },
                  {
                    key: "isActivated",
                    get: function () {
                      return !!this.activated;
                    },
                  },
                  {
                    key: "component",
                    get: function () {
                      if (!this.activated)
                        throw new Error("Outlet is not activated");
                      return this.activated.instance;
                    },
                  },
                  {
                    key: "activatedRoute",
                    get: function () {
                      if (!this.activated)
                        throw new Error("Outlet is not activated");
                      return this._activatedRoute;
                    },
                  },
                  {
                    key: "activatedRouteData",
                    get: function () {
                      return this._activatedRoute
                        ? this._activatedRoute.snapshot.data
                        : {};
                    },
                  },
                  {
                    key: "detach",
                    value: function () {
                      if (!this.activated)
                        throw new Error("Outlet is not activated");
                      this.location.detach();
                      var t = this.activated;
                      return (
                        (this.activated = null),
                        (this._activatedRoute = null),
                        t
                      );
                    },
                  },
                  {
                    key: "attach",
                    value: function (t, e) {
                      (this.activated = t),
                        (this._activatedRoute = e),
                        this.location.insert(t.hostView);
                    },
                  },
                  {
                    key: "deactivate",
                    value: function () {
                      if (this.activated) {
                        var t = this.component;
                        this.activated.destroy(),
                          (this.activated = null),
                          (this._activatedRoute = null),
                          this.deactivateEvents.emit(t);
                      }
                    },
                  },
                  {
                    key: "activateWith",
                    value: function (t, e) {
                      if (this.isActivated)
                        throw new Error(
                          "Cannot activate an already activated outlet"
                        );
                      this._activatedRoute = t;
                      var n = (e = e || this.resolver).resolveComponentFactory(
                          t._futureSnapshot.routeConfig.component
                        ),
                        r = this.parentContexts.getOrCreateContext(
                          this.name
                        ).children,
                        i = new pd(t, r, this.location.injector);
                      (this.activated = this.location.createComponent(
                        n,
                        this.location.length,
                        i
                      )),
                        this.changeDetector.markForCheck(),
                        this.activateEvents.emit(this.activated.instance);
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || hd)(
                Po(ed),
                Po(ru),
                Po(ma),
                (function (t, e) {
                  var n = t.attrs;
                  if (n)
                    for (var r = n.length, i = 0; i < r; ) {
                      var o = n[i];
                      if (_n(o)) break;
                      if (0 === o) i += 2;
                      else if ("number" == typeof o)
                        for (i++; i < r && "string" == typeof n[i]; ) i++;
                      else {
                        if ("name" === o) return n[i + 1];
                        i += 2;
                      }
                    }
                  return null;
                })(qe()),
                Po(Za)
              );
            }),
            (hd.ɵdir = ce({
              type: hd,
              selectors: [["router-outlet"]],
              outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
              },
              exportAs: ["outlet"],
            })),
            hd),
          pd = (function () {
            function t(e, n, r) {
              p(this, t),
                (this.route = e),
                (this.childContexts = n),
                (this.parent = r);
            }
            return (
              g(t, [
                {
                  key: "get",
                  value: function (t, e) {
                    return t === Lh
                      ? this.route
                      : t === ed
                      ? this.childContexts
                      : this.parent.get(t, e);
                  },
                },
              ]),
              t
            );
          })(),
          yd = function t() {
            p(this, t);
          },
          gd = (function () {
            function t() {
              p(this, t);
            }
            return (
              g(t, [
                {
                  key: "preload",
                  value: function (t, e) {
                    return Bl(null);
                  },
                },
              ]),
              t
            );
          })(),
          md =
            (((dd = (function () {
              function t(e, n, r, i, o) {
                p(this, t),
                  (this.router = e),
                  (this.injector = i),
                  (this.preloadingStrategy = o),
                  (this.loader = new Xf(
                    n,
                    r,
                    function (t) {
                      return e.triggerEvent(new Zc(t));
                    },
                    function (t) {
                      return e.triggerEvent(new Wc(t));
                    }
                  ));
              }
              return (
                g(t, [
                  {
                    key: "setUpPreloading",
                    value: function () {
                      var t = this;
                      this.subscription = this.router.events
                        .pipe(
                          fc(function (t) {
                            return t instanceof Mc;
                          }),
                          mc(function () {
                            return t.preload();
                          })
                        )
                        .subscribe(function () {});
                    },
                  },
                  {
                    key: "preload",
                    value: function () {
                      var t = this.injector.get(tu);
                      return this.processRoutes(t, this.router.config);
                    },
                  },
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this.subscription && this.subscription.unsubscribe();
                    },
                  },
                  {
                    key: "processRoutes",
                    value: function (t, n) {
                      var r,
                        i = [],
                        o = e(n);
                      try {
                        for (o.s(); !(r = o.n()).done; ) {
                          var a = r.value;
                          if (a.loadChildren && !a.canLoad && a._loadedConfig) {
                            var u = a._loadedConfig;
                            i.push(this.processRoutes(u.module, u.routes));
                          } else
                            a.loadChildren && !a.canLoad
                              ? i.push(this.preloadConfig(t, a))
                              : a.children &&
                                i.push(this.processRoutes(t, a.children));
                        }
                      } catch (s) {
                        o.e(s);
                      } finally {
                        o.f();
                      }
                      return K(i).pipe(
                        it(),
                        z(function (t) {})
                      );
                    },
                  },
                  {
                    key: "preloadConfig",
                    value: function (t, e) {
                      var n = this;
                      return this.preloadingStrategy.preload(e, function () {
                        return (
                          e._loadedConfig
                            ? Bl(e._loadedConfig)
                            : n.loader.load(t.injector, e)
                        ).pipe(
                          et(function (t) {
                            return (
                              (e._loadedConfig = t),
                              n.processRoutes(t.module, t.routes)
                            );
                          })
                        );
                      });
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || dd)(ar(sd), ar(ss), ar(Uu), ar(go), ar(yd));
            }),
            (dd.ɵprov = xt({ token: dd, factory: dd.ɵfac })),
            dd),
          _d =
            (((fd = (function () {
              function t(e, n) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                p(this, t),
                  (this.router = e),
                  (this.viewportScroller = n),
                  (this.options = r),
                  (this.lastId = 0),
                  (this.lastSource = "imperative"),
                  (this.restoredId = 0),
                  (this.store = {}),
                  (r.scrollPositionRestoration =
                    r.scrollPositionRestoration || "disabled"),
                  (r.anchorScrolling = r.anchorScrolling || "disabled");
              }
              return (
                g(t, [
                  {
                    key: "init",
                    value: function () {
                      "disabled" !== this.options.scrollPositionRestoration &&
                        this.viewportScroller.setHistoryScrollRestoration(
                          "manual"
                        ),
                        (this.routerEventsSubscription =
                          this.createScrollEvents()),
                        (this.scrollEventsSubscription =
                          this.consumeScrollEvents());
                    },
                  },
                  {
                    key: "createScrollEvents",
                    value: function () {
                      var t = this;
                      return this.router.events.subscribe(function (e) {
                        e instanceof Uc
                          ? ((t.store[t.lastId] =
                              t.viewportScroller.getScrollPosition()),
                            (t.lastSource = e.navigationTrigger),
                            (t.restoredId = e.restoredState
                              ? e.restoredState.navigationId
                              : 0))
                          : e instanceof Mc &&
                            ((t.lastId = e.id),
                            t.scheduleScrollEvent(
                              e,
                              t.router.parseUrl(e.urlAfterRedirects).fragment
                            ));
                      });
                    },
                  },
                  {
                    key: "consumeScrollEvents",
                    value: function () {
                      var t = this;
                      return this.router.events.subscribe(function (e) {
                        e instanceof Yc &&
                          (e.position
                            ? "top" === t.options.scrollPositionRestoration
                              ? t.viewportScroller.scrollToPosition([0, 0])
                              : "enabled" ===
                                  t.options.scrollPositionRestoration &&
                                t.viewportScroller.scrollToPosition(e.position)
                            : e.anchor &&
                              "enabled" === t.options.anchorScrolling
                            ? t.viewportScroller.scrollToAnchor(e.anchor)
                            : "disabled" !==
                                t.options.scrollPositionRestoration &&
                              t.viewportScroller.scrollToPosition([0, 0]));
                      });
                    },
                  },
                  {
                    key: "scheduleScrollEvent",
                    value: function (t, e) {
                      this.router.triggerEvent(
                        new Yc(
                          t,
                          "popstate" === this.lastSource
                            ? this.store[this.restoredId]
                            : null,
                          e
                        )
                      );
                    },
                  },
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this.routerEventsSubscription &&
                        this.routerEventsSubscription.unsubscribe(),
                        this.scrollEventsSubscription &&
                          this.scrollEventsSubscription.unsubscribe();
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || fd)(ar(sd), ar(ol), ar(void 0));
            }),
            (fd.ɵprov = xt({ token: fd, factory: fd.ɵfac })),
            fd),
          kd = new Zn("ROUTER_CONFIGURATION"),
          wd = new Zn("ROUTER_FORROOT_GUARD"),
          bd = [
            Fs,
            { provide: gh, useClass: mh },
            {
              provide: sd,
              useFactory: function (t, e, n, r, i, o, a) {
                var u =
                    arguments.length > 7 && void 0 !== arguments[7]
                      ? arguments[7]
                      : {},
                  s = arguments.length > 8 ? arguments[8] : void 0,
                  l = arguments.length > 9 ? arguments[9] : void 0,
                  c = new sd(null, t, e, n, r, i, o, oh(a));
                if (
                  (s && (c.urlHandlingStrategy = s),
                  l && (c.routeReuseStrategy = l),
                  (function (t, e) {
                    t.errorHandler && (e.errorHandler = t.errorHandler),
                      t.malformedUriErrorHandler &&
                        (e.malformedUriErrorHandler =
                          t.malformedUriErrorHandler),
                      t.onSameUrlNavigation &&
                        (e.onSameUrlNavigation = t.onSameUrlNavigation),
                      t.paramsInheritanceStrategy &&
                        (e.paramsInheritanceStrategy =
                          t.paramsInheritanceStrategy),
                      t.relativeLinkResolution &&
                        (e.relativeLinkResolution = t.relativeLinkResolution),
                      t.urlUpdateStrategy &&
                        (e.urlUpdateStrategy = t.urlUpdateStrategy);
                  })(u, c),
                  u.enableTracing)
                ) {
                  var h = gs();
                  c.events.subscribe(function (t) {
                    h.logGroup("Router Event: ".concat(t.constructor.name)),
                      h.log(t.toString()),
                      h.log(t),
                      h.logGroupEnd();
                  });
                }
                return c;
              },
              deps: [
                gh,
                ed,
                Fs,
                go,
                ss,
                Uu,
                Yf,
                kd,
                [
                  (function () {
                    return function t() {
                      p(this, t);
                    };
                  })(),
                  new cr(),
                ],
                [
                  (function () {
                    return function t() {
                      p(this, t);
                    };
                  })(),
                  new cr(),
                ],
              ],
            },
            ed,
            {
              provide: Lh,
              useFactory: function (t) {
                return t.routerState.root;
              },
              deps: [sd],
            },
            { provide: ss, useClass: hs },
            md,
            gd,
            (function () {
              function t() {
                p(this, t);
              }
              return (
                g(t, [
                  {
                    key: "preload",
                    value: function (t, e) {
                      return e().pipe(
                        pc(function () {
                          return Bl(null);
                        })
                      );
                    },
                  },
                ]),
                t
              );
            })(),
            { provide: kd, useValue: { enableTracing: !1 } },
          ];
        function Cd() {
          return new ts("Router", sd);
        }
        var Sd,
          Ed =
            (((Sd = (function () {
              function t(e, n) {
                p(this, t);
              }
              return (
                g(t, null, [
                  {
                    key: "forRoot",
                    value: function (e, n) {
                      return {
                        ngModule: t,
                        providers: [
                          bd,
                          Od(e),
                          {
                            provide: wd,
                            useFactory: Td,
                            deps: [[sd, new cr(), new hr()]],
                          },
                          { provide: kd, useValue: n || {} },
                          {
                            provide: Rs,
                            useFactory: Ad,
                            deps: [ks, [new lr(Ns), new cr()], kd],
                          },
                          { provide: _d, useFactory: xd, deps: [sd, ol, kd] },
                          {
                            provide: yd,
                            useExisting:
                              n && n.preloadingStrategy
                                ? n.preloadingStrategy
                                : gd,
                          },
                          { provide: ts, multi: !0, useFactory: Cd },
                          [
                            Rd,
                            {
                              provide: _u,
                              multi: !0,
                              useFactory: Pd,
                              deps: [Rd],
                            },
                            { provide: Dd, useFactory: Vd, deps: [Rd] },
                            { provide: xu, multi: !0, useExisting: Dd },
                          ],
                        ],
                      };
                    },
                  },
                  {
                    key: "forChild",
                    value: function (e) {
                      return { ngModule: t, providers: [Od(e)] };
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || Sd)(ar(wd, 8), ar(sd, 8));
            }),
            (Sd.ɵmod = se({ type: Sd })),
            (Sd.ɵinj = At({})),
            Sd);
        function xd(t, e, n) {
          return n.scrollOffset && e.setOffset(n.scrollOffset), new _d(t, e, n);
        }
        function Ad(t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return n.useHash ? new Ms(t, e) : new Us(t, e);
        }
        function Td(t) {
          return "guarded";
        }
        function Od(t) {
          return [
            { provide: Wn, multi: !0, useValue: t },
            { provide: Yf, multi: !0, useValue: t },
          ];
        }
        var Id,
          Rd =
            (((Id = (function () {
              function t(e) {
                p(this, t),
                  (this.injector = e),
                  (this.initNavigation = !1),
                  (this.resultOfPreactivationDone = new F());
              }
              return (
                g(t, [
                  {
                    key: "appInitializer",
                    value: function () {
                      var t = this;
                      return this.injector
                        .get(Cs, Promise.resolve(null))
                        .then(function () {
                          var e = null,
                            n = new Promise(function (t) {
                              return (e = t);
                            }),
                            r = t.injector.get(sd),
                            i = t.injector.get(kd);
                          return (
                            "disabled" === i.initialNavigation
                              ? (r.setUpLocationChangeListener(), e(!0))
                              : "enabled" === i.initialNavigation ||
                                "enabledBlocking" === i.initialNavigation
                              ? ((r.hooks.afterPreactivation = function () {
                                  return t.initNavigation
                                    ? Bl(null)
                                    : ((t.initNavigation = !0),
                                      e(!0),
                                      t.resultOfPreactivationDone);
                                }),
                                r.initialNavigation())
                              : e(!0),
                            n
                          );
                        });
                    },
                  },
                  {
                    key: "bootstrapListener",
                    value: function (t) {
                      var e = this.injector.get(kd),
                        n = this.injector.get(md),
                        r = this.injector.get(_d),
                        i = this.injector.get(sd),
                        o = this.injector.get(as);
                      t === o.components[0] &&
                        (("enabledNonBlocking" !== e.initialNavigation &&
                          void 0 !== e.initialNavigation) ||
                          i.initialNavigation(),
                        n.setUpPreloading(),
                        r.init(),
                        i.resetRootComponentType(o.componentTypes[0]),
                        this.resultOfPreactivationDone.next(null),
                        this.resultOfPreactivationDone.complete());
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || Id)(ar(go));
            }),
            (Id.ɵprov = xt({ token: Id, factory: Id.ɵfac })),
            Id);
        function Pd(t) {
          return t.appInitializer.bind(t);
        }
        function Vd(t) {
          return t.bootstrapListener.bind(t);
        }
        var jd,
          Dd = new Zn("Router Initializer"),
          Nd =
            (((jd = (function () {
              function t() {
                p(this, t);
              }
              return g(t, [{ key: "ngOnInit", value: function () {} }]), t;
            })()).ɵfac = function (t) {
              return new (t || jd)();
            }),
            (jd.ɵcmp = ie({
              type: jd,
              selectors: [["app-about"]],
              decls: 11,
              vars: 0,
              consts: [
                [1, "container", "my-3"],
                [1, "jumbotron"],
                [1, "display-4"],
                [1, "lead"],
                [1, "my-4"],
                [
                  "href",
                  "#",
                  "role",
                  "button",
                  1,
                  "btn",
                  "btn-primary",
                  "btn-lg",
                ],
              ],
              template: function (t, e) {
                1 & t &&
                  (Do(0, "div", 0),
                  Do(1, "div", 1),
                  Do(2, "h1", 2),
                  Yo(3, "About This Angular App"),
                  No(),
                  Do(4, "p", 3),
                  Yo(
                    5,
                    "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
                  ),
                  No(),
                  Uo(6, "hr", 4),
                  Do(7, "p"),
                  Yo(
                    8,
                    "It uses utility classes for typography and spacing to space content out within the larger container."
                  ),
                  No(),
                  Do(9, "a", 5),
                  Yo(10, "Learn more"),
                  No(),
                  No(),
                  No());
              },
              styles: [""],
            })),
            jd);
        function Ud(t, e) {
          return new V(function (n) {
            var r = t.length;
            if (0 !== r)
              for (
                var i = new Array(r),
                  o = 0,
                  a = 0,
                  u = function (u) {
                    var s = K(t[u]),
                      l = !1;
                    n.add(
                      s.subscribe({
                        next: function (t) {
                          l || ((l = !0), a++), (i[u] = t);
                        },
                        error: function (t) {
                          return n.error(t);
                        },
                        complete: function () {
                          (++o !== r && l) ||
                            (a === r &&
                              n.next(
                                e
                                  ? e.reduce(function (t, e, n) {
                                      return (t[e] = i[n]), t;
                                    }, {})
                                  : i
                              ),
                            n.complete());
                        },
                      })
                    );
                  },
                  s = 0;
                s < r;
                s++
              )
                u(s);
            else n.complete();
          });
        }
        var Md,
          Fd = new Zn("NgValueAccessor"),
          Ld = {
            provide: Fd,
            useExisting: _t(function () {
              return zd;
            }),
            multi: !0,
          },
          Hd = new Zn("CompositionEventMode"),
          zd =
            (((Md = (function () {
              function t(e, n, r) {
                var i;
                p(this, t),
                  (this._renderer = e),
                  (this._elementRef = n),
                  (this._compositionMode = r),
                  (this.onChange = function (t) {}),
                  (this.onTouched = function () {}),
                  (this._composing = !1),
                  null == this._compositionMode &&
                    (this._compositionMode =
                      ((i = gs() ? gs().getUserAgent() : ""),
                      !/android (\d+)/.test(i.toLowerCase())));
              }
              return (
                g(t, [
                  {
                    key: "writeValue",
                    value: function (t) {
                      this._renderer.setProperty(
                        this._elementRef.nativeElement,
                        "value",
                        null == t ? "" : t
                      );
                    },
                  },
                  {
                    key: "registerOnChange",
                    value: function (t) {
                      this.onChange = t;
                    },
                  },
                  {
                    key: "registerOnTouched",
                    value: function (t) {
                      this.onTouched = t;
                    },
                  },
                  {
                    key: "setDisabledState",
                    value: function (t) {
                      this._renderer.setProperty(
                        this._elementRef.nativeElement,
                        "disabled",
                        t
                      );
                    },
                  },
                  {
                    key: "_handleInput",
                    value: function (t) {
                      (!this._compositionMode ||
                        (this._compositionMode && !this._composing)) &&
                        this.onChange(t);
                    },
                  },
                  {
                    key: "_compositionStart",
                    value: function () {
                      this._composing = !0;
                    },
                  },
                  {
                    key: "_compositionEnd",
                    value: function (t) {
                      (this._composing = !1),
                        this._compositionMode && this.onChange(t);
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || Md)(Po(Sa), Po(ba), Po(Hd, 8));
            }),
            (Md.ɵdir = ce({
              type: Md,
              selectors: [
                ["input", "formControlName", "", 3, "type", "checkbox"],
                ["textarea", "formControlName", ""],
                ["input", "formControl", "", 3, "type", "checkbox"],
                ["textarea", "formControl", ""],
                ["input", "ngModel", "", 3, "type", "checkbox"],
                ["textarea", "ngModel", ""],
                ["", "ngDefaultControl", ""],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  Lo("input", function (t) {
                    return e._handleInput(t.target.value);
                  })("blur", function () {
                    return e.onTouched();
                  })("compositionstart", function () {
                    return e._compositionStart();
                  })("compositionend", function (t) {
                    return e._compositionEnd(t.target.value);
                  });
              },
              features: [pa([Ld])],
            })),
            Md),
          Bd = new Zn("NgValidators"),
          qd = new Zn("NgAsyncValidators");
        function Gd(t) {
          return null != t;
        }
        function Zd(t) {
          var e = Mo(t) ? K(t) : t;
          return Fo(e), e;
        }
        function Wd(t) {
          var e = {};
          return (
            t.forEach(function (t) {
              e = null != t ? Object.assign(Object.assign({}, e), t) : e;
            }),
            0 === Object.keys(e).length ? null : e
          );
        }
        function Qd(t, e) {
          return e.map(function (e) {
            return e(t);
          });
        }
        function $d(t) {
          return t.map(function (t) {
            return (function (t) {
              return !t.validate;
            })(t)
              ? t
              : function (e) {
                  return t.validate(e);
                };
          });
        }
        function Jd(t) {
          return null != t
            ? (function (t) {
                if (!t) return null;
                var e = t.filter(Gd);
                return 0 == e.length
                  ? null
                  : function (t) {
                      return Wd(Qd(t, e));
                    };
              })($d(t))
            : null;
        }
        function Kd(t) {
          return null != t
            ? (function (t) {
                if (!t) return null;
                var e = t.filter(Gd);
                return 0 == e.length
                  ? null
                  : function (t) {
                      return (function () {
                        for (
                          var t = arguments.length, e = new Array(t), r = 0;
                          r < t;
                          r++
                        )
                          e[r] = arguments[r];
                        if (1 === e.length) {
                          var i = e[0];
                          if (w(i)) return Ud(i, null);
                          if (
                            b(i) &&
                            Object.getPrototypeOf(i) === Object.prototype
                          ) {
                            var o = Object.keys(i);
                            return Ud(
                              o.map(function (t) {
                                return i[t];
                              }),
                              o
                            );
                          }
                        }
                        if ("function" == typeof e[e.length - 1]) {
                          var a = e.pop();
                          return Ud(
                            (e = 1 === e.length && w(e[0]) ? e[0] : e),
                            null
                          ).pipe(
                            z(function (t) {
                              return a.apply(void 0, n(t));
                            })
                          );
                        }
                        return Ud(e, null);
                      })(Qd(t, e).map(Zd)).pipe(z(Wd));
                    };
              })($d(t))
            : null;
        }
        function Yd(t, e) {
          return null === t
            ? [e]
            : Array.isArray(t)
            ? [].concat(n(t), [e])
            : [t, e];
        }
        var Xd,
          tv,
          ev,
          nv,
          rv,
          iv =
            (((tv = (function () {
              function t() {
                p(this, t),
                  (this._rawValidators = []),
                  (this._rawAsyncValidators = []),
                  (this._onDestroyCallbacks = []);
              }
              return (
                g(t, [
                  {
                    key: "value",
                    get: function () {
                      return this.control ? this.control.value : null;
                    },
                  },
                  {
                    key: "valid",
                    get: function () {
                      return this.control ? this.control.valid : null;
                    },
                  },
                  {
                    key: "invalid",
                    get: function () {
                      return this.control ? this.control.invalid : null;
                    },
                  },
                  {
                    key: "pending",
                    get: function () {
                      return this.control ? this.control.pending : null;
                    },
                  },
                  {
                    key: "disabled",
                    get: function () {
                      return this.control ? this.control.disabled : null;
                    },
                  },
                  {
                    key: "enabled",
                    get: function () {
                      return this.control ? this.control.enabled : null;
                    },
                  },
                  {
                    key: "errors",
                    get: function () {
                      return this.control ? this.control.errors : null;
                    },
                  },
                  {
                    key: "pristine",
                    get: function () {
                      return this.control ? this.control.pristine : null;
                    },
                  },
                  {
                    key: "dirty",
                    get: function () {
                      return this.control ? this.control.dirty : null;
                    },
                  },
                  {
                    key: "touched",
                    get: function () {
                      return this.control ? this.control.touched : null;
                    },
                  },
                  {
                    key: "status",
                    get: function () {
                      return this.control ? this.control.status : null;
                    },
                  },
                  {
                    key: "untouched",
                    get: function () {
                      return this.control ? this.control.untouched : null;
                    },
                  },
                  {
                    key: "statusChanges",
                    get: function () {
                      return this.control ? this.control.statusChanges : null;
                    },
                  },
                  {
                    key: "valueChanges",
                    get: function () {
                      return this.control ? this.control.valueChanges : null;
                    },
                  },
                  {
                    key: "path",
                    get: function () {
                      return null;
                    },
                  },
                  {
                    key: "_setValidators",
                    value: function (t) {
                      (this._rawValidators = t || []),
                        (this._composedValidatorFn = Jd(this._rawValidators));
                    },
                  },
                  {
                    key: "_setAsyncValidators",
                    value: function (t) {
                      (this._rawAsyncValidators = t || []),
                        (this._composedAsyncValidatorFn = Kd(
                          this._rawAsyncValidators
                        ));
                    },
                  },
                  {
                    key: "validator",
                    get: function () {
                      return this._composedValidatorFn || null;
                    },
                  },
                  {
                    key: "asyncValidator",
                    get: function () {
                      return this._composedAsyncValidatorFn || null;
                    },
                  },
                  {
                    key: "_registerOnDestroy",
                    value: function (t) {
                      this._onDestroyCallbacks.push(t);
                    },
                  },
                  {
                    key: "_invokeOnDestroyCallbacks",
                    value: function () {
                      this._onDestroyCallbacks.forEach(function (t) {
                        return t();
                      }),
                        (this._onDestroyCallbacks = []);
                    },
                  },
                  {
                    key: "reset",
                    value: function (t) {
                      this.control && this.control.reset(t);
                    },
                  },
                  {
                    key: "hasError",
                    value: function (t, e) {
                      return !!this.control && this.control.hasError(t, e);
                    },
                  },
                  {
                    key: "getError",
                    value: function (t, e) {
                      return this.control ? this.control.getError(t, e) : null;
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || tv)();
            }),
            (tv.ɵdir = ce({ type: tv })),
            tv),
          ov =
            (((Xd = (function (t) {
              s(n, t);
              var e = c(n);
              function n() {
                return p(this, n), e.apply(this, arguments);
              }
              return (
                g(n, [
                  {
                    key: "formDirective",
                    get: function () {
                      return null;
                    },
                  },
                  {
                    key: "path",
                    get: function () {
                      return null;
                    },
                  },
                ]),
                n
              );
            })(iv)).ɵfac = function (t) {
              return av(t || Xd);
            }),
            (Xd.ɵdir = ce({ type: Xd, features: [_o] })),
            Xd),
          av =
            ((ev = ov),
            Ft(function () {
              for (
                var t = ev.prototype.constructor,
                  e = t[ee] || qn(t),
                  n = Object.prototype,
                  r = Object.getPrototypeOf(ev.prototype).constructor;
                r && r !== n;

              ) {
                var i = r[ee] || qn(r);
                if (i && i !== e) return i;
                r = Object.getPrototypeOf(r);
              }
              return function (t) {
                return new t();
              };
            })),
          uv = (function (t) {
            s(n, t);
            var e = c(n);
            function n() {
              var t;
              return (
                p(this, n),
                ((t = e.apply(this, arguments))._parent = null),
                (t.name = null),
                (t.valueAccessor = null),
                t
              );
            }
            return n;
          })(iv),
          sv = (function () {
            function t(e) {
              p(this, t), (this._cd = e);
            }
            return (
              g(t, [
                {
                  key: "is",
                  value: function (t) {
                    var e, n;
                    return !!(null ===
                      (n =
                        null === (e = this._cd) || void 0 === e
                          ? void 0
                          : e.control) || void 0 === n
                      ? void 0
                      : n[t]);
                  },
                },
              ]),
              t
            );
          })(),
          lv =
            (((rv = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t) {
                return p(this, n), e.call(this, t);
              }
              return n;
            })(sv)).ɵfac = function (t) {
              return new (t || rv)(Po(uv, 2));
            }),
            (rv.ɵdir = ce({
              type: rv,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  Wo("ng-untouched", e.is("untouched"))(
                    "ng-touched",
                    e.is("touched")
                  )("ng-pristine", e.is("pristine"))("ng-dirty", e.is("dirty"))(
                    "ng-valid",
                    e.is("valid")
                  )("ng-invalid", e.is("invalid"))(
                    "ng-pending",
                    e.is("pending")
                  );
              },
              features: [_o],
            })),
            rv),
          cv =
            (((nv = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t) {
                return p(this, n), e.call(this, t);
              }
              return n;
            })(sv)).ɵfac = function (t) {
              return new (t || nv)(Po(ov, 10));
            }),
            (nv.ɵdir = ce({
              type: nv,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  Wo("ng-untouched", e.is("untouched"))(
                    "ng-touched",
                    e.is("touched")
                  )("ng-pristine", e.is("pristine"))("ng-dirty", e.is("dirty"))(
                    "ng-valid",
                    e.is("valid")
                  )("ng-invalid", e.is("invalid"))(
                    "ng-pending",
                    e.is("pending")
                  );
              },
              features: [_o],
            })),
            nv);
        function hv(t, e) {
          dv(t, e, !0),
            e.valueAccessor.writeValue(t.value),
            (function (t, e) {
              e.valueAccessor.registerOnChange(function (n) {
                (t._pendingValue = n),
                  (t._pendingChange = !0),
                  (t._pendingDirty = !0),
                  "change" === t.updateOn && vv(t, e);
              });
            })(t, e),
            (function (t, e) {
              var n = function (t, n) {
                e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
              };
              t.registerOnChange(n),
                e._registerOnDestroy(function () {
                  t._unregisterOnChange(n);
                });
            })(t, e),
            (function (t, e) {
              e.valueAccessor.registerOnTouched(function () {
                (t._pendingTouched = !0),
                  "blur" === t.updateOn && t._pendingChange && vv(t, e),
                  "submit" !== t.updateOn && t.markAsTouched();
              });
            })(t, e),
            (function (t, e) {
              if (e.valueAccessor.setDisabledState) {
                var n = function (t) {
                  e.valueAccessor.setDisabledState(t);
                };
                t.registerOnDisabledChange(n),
                  e._registerOnDestroy(function () {
                    t._unregisterOnDisabledChange(n);
                  });
              }
            })(t, e);
        }
        function fv(t, e) {
          t.forEach(function (t) {
            t.registerOnValidatorChange && t.registerOnValidatorChange(e);
          });
        }
        function dv(t, e, n) {
          var r = (function (t) {
            return t._rawValidators;
          })(t);
          null !== e.validator
            ? t.setValidators(Yd(r, e.validator))
            : "function" == typeof r && t.setValidators([r]);
          var i = (function (t) {
            return t._rawAsyncValidators;
          })(t);
          if (
            (null !== e.asyncValidator
              ? t.setAsyncValidators(Yd(i, e.asyncValidator))
              : "function" == typeof i && t.setAsyncValidators([i]),
            n)
          ) {
            var o = function () {
              return t.updateValueAndValidity();
            };
            fv(e._rawValidators, o), fv(e._rawAsyncValidators, o);
          }
        }
        function vv(t, e) {
          t._pendingDirty && t.markAsDirty(),
            t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
            e.viewToModelUpdate(t._pendingValue),
            (t._pendingChange = !1);
        }
        function pv(t, e) {
          var n = t.indexOf(e);
          n > -1 && t.splice(n, 1);
        }
        function yv(t) {
          return (kv(t) ? t.validators : t) || null;
        }
        function gv(t) {
          return Array.isArray(t) ? Jd(t) : t || null;
        }
        function mv(t, e) {
          return (kv(e) ? e.asyncValidators : t) || null;
        }
        function _v(t) {
          return Array.isArray(t) ? Kd(t) : t || null;
        }
        function kv(t) {
          return null != t && !Array.isArray(t) && "object" == typeof t;
        }
        var wv,
          bv,
          Cv,
          Sv,
          Ev,
          xv,
          Av,
          Tv,
          Ov = (function () {
            function t(e, n) {
              p(this, t),
                (this._hasOwnPendingAsyncValidator = !1),
                (this._onCollectionChange = function () {}),
                (this._parent = null),
                (this.pristine = !0),
                (this.touched = !1),
                (this._onDisabledChange = []),
                (this._rawValidators = e),
                (this._rawAsyncValidators = n),
                (this._composedValidatorFn = gv(this._rawValidators)),
                (this._composedAsyncValidatorFn = _v(this._rawAsyncValidators));
            }
            return (
              g(t, [
                {
                  key: "validator",
                  get: function () {
                    return this._composedValidatorFn;
                  },
                  set: function (t) {
                    this._rawValidators = this._composedValidatorFn = t;
                  },
                },
                {
                  key: "asyncValidator",
                  get: function () {
                    return this._composedAsyncValidatorFn;
                  },
                  set: function (t) {
                    this._rawAsyncValidators = this._composedAsyncValidatorFn =
                      t;
                  },
                },
                {
                  key: "parent",
                  get: function () {
                    return this._parent;
                  },
                },
                {
                  key: "valid",
                  get: function () {
                    return "VALID" === this.status;
                  },
                },
                {
                  key: "invalid",
                  get: function () {
                    return "INVALID" === this.status;
                  },
                },
                {
                  key: "pending",
                  get: function () {
                    return "PENDING" == this.status;
                  },
                },
                {
                  key: "disabled",
                  get: function () {
                    return "DISABLED" === this.status;
                  },
                },
                {
                  key: "enabled",
                  get: function () {
                    return "DISABLED" !== this.status;
                  },
                },
                {
                  key: "dirty",
                  get: function () {
                    return !this.pristine;
                  },
                },
                {
                  key: "untouched",
                  get: function () {
                    return !this.touched;
                  },
                },
                {
                  key: "updateOn",
                  get: function () {
                    return this._updateOn
                      ? this._updateOn
                      : this.parent
                      ? this.parent.updateOn
                      : "change";
                  },
                },
                {
                  key: "setValidators",
                  value: function (t) {
                    (this._rawValidators = t),
                      (this._composedValidatorFn = gv(t));
                  },
                },
                {
                  key: "setAsyncValidators",
                  value: function (t) {
                    (this._rawAsyncValidators = t),
                      (this._composedAsyncValidatorFn = _v(t));
                  },
                },
                {
                  key: "clearValidators",
                  value: function () {
                    this.validator = null;
                  },
                },
                {
                  key: "clearAsyncValidators",
                  value: function () {
                    this.asyncValidator = null;
                  },
                },
                {
                  key: "markAsTouched",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.touched = !0),
                      this._parent &&
                        !t.onlySelf &&
                        this._parent.markAsTouched(t);
                  },
                },
                {
                  key: "markAllAsTouched",
                  value: function () {
                    this.markAsTouched({ onlySelf: !0 }),
                      this._forEachChild(function (t) {
                        return t.markAllAsTouched();
                      });
                  },
                },
                {
                  key: "markAsUntouched",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.touched = !1),
                      (this._pendingTouched = !1),
                      this._forEachChild(function (t) {
                        t.markAsUntouched({ onlySelf: !0 });
                      }),
                      this._parent &&
                        !t.onlySelf &&
                        this._parent._updateTouched(t);
                  },
                },
                {
                  key: "markAsDirty",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.pristine = !1),
                      this._parent &&
                        !t.onlySelf &&
                        this._parent.markAsDirty(t);
                  },
                },
                {
                  key: "markAsPristine",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.pristine = !0),
                      (this._pendingDirty = !1),
                      this._forEachChild(function (t) {
                        t.markAsPristine({ onlySelf: !0 });
                      }),
                      this._parent &&
                        !t.onlySelf &&
                        this._parent._updatePristine(t);
                  },
                },
                {
                  key: "markAsPending",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.status = "PENDING"),
                      !1 !== t.emitEvent &&
                        this.statusChanges.emit(this.status),
                      this._parent &&
                        !t.onlySelf &&
                        this._parent.markAsPending(t);
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      e = this._parentMarkedDirty(t.onlySelf);
                    (this.status = "DISABLED"),
                      (this.errors = null),
                      this._forEachChild(function (e) {
                        e.disable(
                          Object.assign(Object.assign({}, t), { onlySelf: !0 })
                        );
                      }),
                      this._updateValue(),
                      !1 !== t.emitEvent &&
                        (this.valueChanges.emit(this.value),
                        this.statusChanges.emit(this.status)),
                      this._updateAncestors(
                        Object.assign(Object.assign({}, t), {
                          skipPristineCheck: e,
                        })
                      ),
                      this._onDisabledChange.forEach(function (t) {
                        return t(!0);
                      });
                  },
                },
                {
                  key: "enable",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      e = this._parentMarkedDirty(t.onlySelf);
                    (this.status = "VALID"),
                      this._forEachChild(function (e) {
                        e.enable(
                          Object.assign(Object.assign({}, t), { onlySelf: !0 })
                        );
                      }),
                      this.updateValueAndValidity({
                        onlySelf: !0,
                        emitEvent: t.emitEvent,
                      }),
                      this._updateAncestors(
                        Object.assign(Object.assign({}, t), {
                          skipPristineCheck: e,
                        })
                      ),
                      this._onDisabledChange.forEach(function (t) {
                        return t(!1);
                      });
                  },
                },
                {
                  key: "_updateAncestors",
                  value: function (t) {
                    this._parent &&
                      !t.onlySelf &&
                      (this._parent.updateValueAndValidity(t),
                      t.skipPristineCheck || this._parent._updatePristine(),
                      this._parent._updateTouched());
                  },
                },
                {
                  key: "setParent",
                  value: function (t) {
                    this._parent = t;
                  },
                },
                {
                  key: "updateValueAndValidity",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    this._setInitialStatus(),
                      this._updateValue(),
                      this.enabled &&
                        (this._cancelExistingSubscription(),
                        (this.errors = this._runValidator()),
                        (this.status = this._calculateStatus()),
                        ("VALID" !== this.status &&
                          "PENDING" !== this.status) ||
                          this._runAsyncValidator(t.emitEvent)),
                      !1 !== t.emitEvent &&
                        (this.valueChanges.emit(this.value),
                        this.statusChanges.emit(this.status)),
                      this._parent &&
                        !t.onlySelf &&
                        this._parent.updateValueAndValidity(t);
                  },
                },
                {
                  key: "_updateTreeValidity",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : { emitEvent: !0 };
                    this._forEachChild(function (e) {
                      return e._updateTreeValidity(t);
                    }),
                      this.updateValueAndValidity({
                        onlySelf: !0,
                        emitEvent: t.emitEvent,
                      });
                  },
                },
                {
                  key: "_setInitialStatus",
                  value: function () {
                    this.status = this._allControlsDisabled()
                      ? "DISABLED"
                      : "VALID";
                  },
                },
                {
                  key: "_runValidator",
                  value: function () {
                    return this.validator ? this.validator(this) : null;
                  },
                },
                {
                  key: "_runAsyncValidator",
                  value: function (t) {
                    var e = this;
                    if (this.asyncValidator) {
                      (this.status = "PENDING"),
                        (this._hasOwnPendingAsyncValidator = !0);
                      var n = Zd(this.asyncValidator(this));
                      this._asyncValidationSubscription = n.subscribe(function (
                        n
                      ) {
                        (e._hasOwnPendingAsyncValidator = !1),
                          e.setErrors(n, { emitEvent: t });
                      });
                    }
                  },
                },
                {
                  key: "_cancelExistingSubscription",
                  value: function () {
                    this._asyncValidationSubscription &&
                      (this._asyncValidationSubscription.unsubscribe(),
                      (this._hasOwnPendingAsyncValidator = !1));
                  },
                },
                {
                  key: "setErrors",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    (this.errors = t),
                      this._updateControlsErrors(!1 !== e.emitEvent);
                  },
                },
                {
                  key: "get",
                  value: function (t) {
                    return (function (t, e, n) {
                      if (null == e) return null;
                      if (
                        (Array.isArray(e) || (e = e.split(".")),
                        Array.isArray(e) && 0 === e.length)
                      )
                        return null;
                      var r = t;
                      return (
                        e.forEach(function (t) {
                          r =
                            r instanceof Rv
                              ? r.controls.hasOwnProperty(t)
                                ? r.controls[t]
                                : null
                              : (r instanceof Pv && r.at(t)) || null;
                        }),
                        r
                      );
                    })(this, t);
                  },
                },
                {
                  key: "getError",
                  value: function (t, e) {
                    var n = e ? this.get(e) : this;
                    return n && n.errors ? n.errors[t] : null;
                  },
                },
                {
                  key: "hasError",
                  value: function (t, e) {
                    return !!this.getError(t, e);
                  },
                },
                {
                  key: "root",
                  get: function () {
                    for (var t = this; t._parent; ) t = t._parent;
                    return t;
                  },
                },
                {
                  key: "_updateControlsErrors",
                  value: function (t) {
                    (this.status = this._calculateStatus()),
                      t && this.statusChanges.emit(this.status),
                      this._parent && this._parent._updateControlsErrors(t);
                  },
                },
                {
                  key: "_initObservables",
                  value: function () {
                    (this.valueChanges = new gu()),
                      (this.statusChanges = new gu());
                  },
                },
                {
                  key: "_calculateStatus",
                  value: function () {
                    return this._allControlsDisabled()
                      ? "DISABLED"
                      : this.errors
                      ? "INVALID"
                      : this._hasOwnPendingAsyncValidator ||
                        this._anyControlsHaveStatus("PENDING")
                      ? "PENDING"
                      : this._anyControlsHaveStatus("INVALID")
                      ? "INVALID"
                      : "VALID";
                  },
                },
                {
                  key: "_anyControlsHaveStatus",
                  value: function (t) {
                    return this._anyControls(function (e) {
                      return e.status === t;
                    });
                  },
                },
                {
                  key: "_anyControlsDirty",
                  value: function () {
                    return this._anyControls(function (t) {
                      return t.dirty;
                    });
                  },
                },
                {
                  key: "_anyControlsTouched",
                  value: function () {
                    return this._anyControls(function (t) {
                      return t.touched;
                    });
                  },
                },
                {
                  key: "_updatePristine",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.pristine = !this._anyControlsDirty()),
                      this._parent &&
                        !t.onlySelf &&
                        this._parent._updatePristine(t);
                  },
                },
                {
                  key: "_updateTouched",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.touched = this._anyControlsTouched()),
                      this._parent &&
                        !t.onlySelf &&
                        this._parent._updateTouched(t);
                  },
                },
                {
                  key: "_isBoxedValue",
                  value: function (t) {
                    return (
                      "object" == typeof t &&
                      null !== t &&
                      2 === Object.keys(t).length &&
                      "value" in t &&
                      "disabled" in t
                    );
                  },
                },
                {
                  key: "_registerOnCollectionChange",
                  value: function (t) {
                    this._onCollectionChange = t;
                  },
                },
                {
                  key: "_setUpdateStrategy",
                  value: function (t) {
                    kv(t) &&
                      null != t.updateOn &&
                      (this._updateOn = t.updateOn);
                  },
                },
                {
                  key: "_parentMarkedDirty",
                  value: function (t) {
                    return (
                      !t &&
                      !(!this._parent || !this._parent.dirty) &&
                      !this._parent._anyControlsDirty()
                    );
                  },
                },
              ]),
              t
            );
          })(),
          Iv = (function (t) {
            s(n, t);
            var e = c(n);
            function n() {
              var t,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                i = arguments.length > 1 ? arguments[1] : void 0,
                o = arguments.length > 2 ? arguments[2] : void 0;
              return (
                p(this, n),
                ((t = e.call(this, yv(i), mv(o, i)))._onChange = []),
                t._applyFormState(r),
                t._setUpdateStrategy(i),
                t._initObservables(),
                t.updateValueAndValidity({ onlySelf: !0, emitEvent: !!o }),
                t
              );
            }
            return (
              g(n, [
                {
                  key: "setValue",
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    (this.value = this._pendingValue = t),
                      this._onChange.length &&
                        !1 !== n.emitModelToViewChange &&
                        this._onChange.forEach(function (t) {
                          return t(e.value, !1 !== n.emitViewToModelChange);
                        }),
                      this.updateValueAndValidity(n);
                  },
                },
                {
                  key: "patchValue",
                  value: function (t) {
                    var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    this.setValue(t, e);
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    this._applyFormState(t),
                      this.markAsPristine(e),
                      this.markAsUntouched(e),
                      this.setValue(this.value, e),
                      (this._pendingChange = !1);
                  },
                },
                { key: "_updateValue", value: function () {} },
                {
                  key: "_anyControls",
                  value: function (t) {
                    return !1;
                  },
                },
                {
                  key: "_allControlsDisabled",
                  value: function () {
                    return this.disabled;
                  },
                },
                {
                  key: "registerOnChange",
                  value: function (t) {
                    this._onChange.push(t);
                  },
                },
                {
                  key: "_unregisterOnChange",
                  value: function (t) {
                    pv(this._onChange, t);
                  },
                },
                {
                  key: "registerOnDisabledChange",
                  value: function (t) {
                    this._onDisabledChange.push(t);
                  },
                },
                {
                  key: "_unregisterOnDisabledChange",
                  value: function (t) {
                    pv(this._onDisabledChange, t);
                  },
                },
                { key: "_forEachChild", value: function (t) {} },
                {
                  key: "_syncPendingControls",
                  value: function () {
                    return !(
                      "submit" !== this.updateOn ||
                      (this._pendingDirty && this.markAsDirty(),
                      this._pendingTouched && this.markAsTouched(),
                      !this._pendingChange) ||
                      (this.setValue(this._pendingValue, {
                        onlySelf: !0,
                        emitModelToViewChange: !1,
                      }),
                      0)
                    );
                  },
                },
                {
                  key: "_applyFormState",
                  value: function (t) {
                    this._isBoxedValue(t)
                      ? ((this.value = this._pendingValue = t.value),
                        t.disabled
                          ? this.disable({ onlySelf: !0, emitEvent: !1 })
                          : this.enable({ onlySelf: !0, emitEvent: !1 }))
                      : (this.value = this._pendingValue = t);
                  },
                },
              ]),
              n
            );
          })(Ov),
          Rv = (function (t) {
            s(n, t);
            var e = c(n);
            function n(t, r, i) {
              var o;
              return (
                p(this, n),
                ((o = e.call(this, yv(r), mv(i, r))).controls = t),
                o._initObservables(),
                o._setUpdateStrategy(r),
                o._setUpControls(),
                o.updateValueAndValidity({ onlySelf: !0, emitEvent: !!i }),
                o
              );
            }
            return (
              g(n, [
                {
                  key: "registerControl",
                  value: function (t, e) {
                    return this.controls[t]
                      ? this.controls[t]
                      : ((this.controls[t] = e),
                        e.setParent(this),
                        e._registerOnCollectionChange(this._onCollectionChange),
                        e);
                  },
                },
                {
                  key: "addControl",
                  value: function (t, e) {
                    this.registerControl(t, e),
                      this.updateValueAndValidity(),
                      this._onCollectionChange();
                  },
                },
                {
                  key: "removeControl",
                  value: function (t) {
                    this.controls[t] &&
                      this.controls[t]._registerOnCollectionChange(
                        function () {}
                      ),
                      delete this.controls[t],
                      this.updateValueAndValidity(),
                      this._onCollectionChange();
                  },
                },
                {
                  key: "setControl",
                  value: function (t, e) {
                    this.controls[t] &&
                      this.controls[t]._registerOnCollectionChange(
                        function () {}
                      ),
                      delete this.controls[t],
                      e && this.registerControl(t, e),
                      this.updateValueAndValidity(),
                      this._onCollectionChange();
                  },
                },
                {
                  key: "contains",
                  value: function (t) {
                    return (
                      this.controls.hasOwnProperty(t) &&
                      this.controls[t].enabled
                    );
                  },
                },
                {
                  key: "setValue",
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    this._checkAllValuesPresent(t),
                      Object.keys(t).forEach(function (r) {
                        e._throwIfControlMissing(r),
                          e.controls[r].setValue(t[r], {
                            onlySelf: !0,
                            emitEvent: n.emitEvent,
                          });
                      }),
                      this.updateValueAndValidity(n);
                  },
                },
                {
                  key: "patchValue",
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    null != t &&
                      (Object.keys(t).forEach(function (r) {
                        e.controls[r] &&
                          e.controls[r].patchValue(t[r], {
                            onlySelf: !0,
                            emitEvent: n.emitEvent,
                          });
                      }),
                      this.updateValueAndValidity(n));
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    this._forEachChild(function (n, r) {
                      n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                    }),
                      this._updatePristine(e),
                      this._updateTouched(e),
                      this.updateValueAndValidity(e);
                  },
                },
                {
                  key: "getRawValue",
                  value: function () {
                    return this._reduceChildren({}, function (t, e, n) {
                      return (
                        (t[n] = e instanceof Iv ? e.value : e.getRawValue()), t
                      );
                    });
                  },
                },
                {
                  key: "_syncPendingControls",
                  value: function () {
                    var t = this._reduceChildren(!1, function (t, e) {
                      return !!e._syncPendingControls() || t;
                    });
                    return (
                      t && this.updateValueAndValidity({ onlySelf: !0 }), t
                    );
                  },
                },
                {
                  key: "_throwIfControlMissing",
                  value: function (t) {
                    if (!Object.keys(this.controls).length)
                      throw new Error(
                        "\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                      );
                    if (!this.controls[t])
                      throw new Error(
                        "Cannot find form control with name: ".concat(t, ".")
                      );
                  },
                },
                {
                  key: "_forEachChild",
                  value: function (t) {
                    var e = this;
                    Object.keys(this.controls).forEach(function (n) {
                      var r = e.controls[n];
                      r && t(r, n);
                    });
                  },
                },
                {
                  key: "_setUpControls",
                  value: function () {
                    var t = this;
                    this._forEachChild(function (e) {
                      e.setParent(t),
                        e._registerOnCollectionChange(t._onCollectionChange);
                    });
                  },
                },
                {
                  key: "_updateValue",
                  value: function () {
                    this.value = this._reduceValue();
                  },
                },
                {
                  key: "_anyControls",
                  value: function (t) {
                    for (
                      var e = 0, n = Object.keys(this.controls);
                      e < n.length;
                      e++
                    ) {
                      var r = n[e],
                        i = this.controls[r];
                      if (this.contains(r) && t(i)) return !0;
                    }
                    return !1;
                  },
                },
                {
                  key: "_reduceValue",
                  value: function () {
                    var t = this;
                    return this._reduceChildren({}, function (e, n, r) {
                      return (n.enabled || t.disabled) && (e[r] = n.value), e;
                    });
                  },
                },
                {
                  key: "_reduceChildren",
                  value: function (t, e) {
                    var n = t;
                    return (
                      this._forEachChild(function (t, r) {
                        n = e(n, t, r);
                      }),
                      n
                    );
                  },
                },
                {
                  key: "_allControlsDisabled",
                  value: function () {
                    for (
                      var t = 0, e = Object.keys(this.controls);
                      t < e.length;
                      t++
                    ) {
                      var n = e[t];
                      if (this.controls[n].enabled) return !1;
                    }
                    return (
                      Object.keys(this.controls).length > 0 || this.disabled
                    );
                  },
                },
                {
                  key: "_checkAllValuesPresent",
                  value: function (t) {
                    this._forEachChild(function (e, n) {
                      if (void 0 === t[n])
                        throw new Error(
                          "Must supply a value for form control with name: '".concat(
                            n,
                            "'."
                          )
                        );
                    });
                  },
                },
              ]),
              n
            );
          })(Ov),
          Pv = (function (t) {
            s(r, t);
            var n = c(r);
            function r(t, e, i) {
              var o;
              return (
                p(this, r),
                ((o = n.call(this, yv(e), mv(i, e))).controls = t),
                o._initObservables(),
                o._setUpdateStrategy(e),
                o._setUpControls(),
                o.updateValueAndValidity({ onlySelf: !0, emitEvent: !!i }),
                o
              );
            }
            return (
              g(r, [
                {
                  key: "at",
                  value: function (t) {
                    return this.controls[t];
                  },
                },
                {
                  key: "push",
                  value: function (t) {
                    this.controls.push(t),
                      this._registerControl(t),
                      this.updateValueAndValidity(),
                      this._onCollectionChange();
                  },
                },
                {
                  key: "insert",
                  value: function (t, e) {
                    this.controls.splice(t, 0, e),
                      this._registerControl(e),
                      this.updateValueAndValidity();
                  },
                },
                {
                  key: "removeAt",
                  value: function (t) {
                    this.controls[t] &&
                      this.controls[t]._registerOnCollectionChange(
                        function () {}
                      ),
                      this.controls.splice(t, 1),
                      this.updateValueAndValidity();
                  },
                },
                {
                  key: "setControl",
                  value: function (t, e) {
                    this.controls[t] &&
                      this.controls[t]._registerOnCollectionChange(
                        function () {}
                      ),
                      this.controls.splice(t, 1),
                      e &&
                        (this.controls.splice(t, 0, e),
                        this._registerControl(e)),
                      this.updateValueAndValidity(),
                      this._onCollectionChange();
                  },
                },
                {
                  key: "length",
                  get: function () {
                    return this.controls.length;
                  },
                },
                {
                  key: "setValue",
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    this._checkAllValuesPresent(t),
                      t.forEach(function (t, r) {
                        e._throwIfControlMissing(r),
                          e.at(r).setValue(t, {
                            onlySelf: !0,
                            emitEvent: n.emitEvent,
                          });
                      }),
                      this.updateValueAndValidity(n);
                  },
                },
                {
                  key: "patchValue",
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    null != t &&
                      (t.forEach(function (t, r) {
                        e.at(r) &&
                          e.at(r).patchValue(t, {
                            onlySelf: !0,
                            emitEvent: n.emitEvent,
                          });
                      }),
                      this.updateValueAndValidity(n));
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    this._forEachChild(function (n, r) {
                      n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
                    }),
                      this._updatePristine(e),
                      this._updateTouched(e),
                      this.updateValueAndValidity(e);
                  },
                },
                {
                  key: "getRawValue",
                  value: function () {
                    return this.controls.map(function (t) {
                      return t instanceof Iv ? t.value : t.getRawValue();
                    });
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this.controls.length < 1 ||
                      (this._forEachChild(function (t) {
                        return t._registerOnCollectionChange(function () {});
                      }),
                      this.controls.splice(0),
                      this.updateValueAndValidity());
                  },
                },
                {
                  key: "_syncPendingControls",
                  value: function () {
                    var t = this.controls.reduce(function (t, e) {
                      return !!e._syncPendingControls() || t;
                    }, !1);
                    return (
                      t && this.updateValueAndValidity({ onlySelf: !0 }), t
                    );
                  },
                },
                {
                  key: "_throwIfControlMissing",
                  value: function (t) {
                    if (!this.controls.length)
                      throw new Error(
                        "\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                      );
                    if (!this.at(t))
                      throw new Error(
                        "Cannot find form control at index ".concat(t)
                      );
                  },
                },
                {
                  key: "_forEachChild",
                  value: function (t) {
                    this.controls.forEach(function (e, n) {
                      t(e, n);
                    });
                  },
                },
                {
                  key: "_updateValue",
                  value: function () {
                    var t = this;
                    this.value = this.controls
                      .filter(function (e) {
                        return e.enabled || t.disabled;
                      })
                      .map(function (t) {
                        return t.value;
                      });
                  },
                },
                {
                  key: "_anyControls",
                  value: function (t) {
                    return this.controls.some(function (e) {
                      return e.enabled && t(e);
                    });
                  },
                },
                {
                  key: "_setUpControls",
                  value: function () {
                    var t = this;
                    this._forEachChild(function (e) {
                      return t._registerControl(e);
                    });
                  },
                },
                {
                  key: "_checkAllValuesPresent",
                  value: function (t) {
                    this._forEachChild(function (e, n) {
                      if (void 0 === t[n])
                        throw new Error(
                          "Must supply a value for form control at index: ".concat(
                            n,
                            "."
                          )
                        );
                    });
                  },
                },
                {
                  key: "_allControlsDisabled",
                  value: function () {
                    var t,
                      n = e(this.controls);
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        if (t.value.enabled) return !1;
                      }
                    } catch (r) {
                      n.e(r);
                    } finally {
                      n.f();
                    }
                    return this.controls.length > 0 || this.disabled;
                  },
                },
                {
                  key: "_registerControl",
                  value: function (t) {
                    t.setParent(this),
                      t._registerOnCollectionChange(this._onCollectionChange);
                  },
                },
              ]),
              r
            );
          })(Ov),
          Vv = {
            provide: ov,
            useExisting: _t(function () {
              return Dv;
            }),
          },
          jv = Promise.resolve(null),
          Dv =
            (((wv = (function (t) {
              s(n, t);
              var e = c(n);
              function n(t, r) {
                var i;
                return (
                  p(this, n),
                  ((i = e.call(this)).submitted = !1),
                  (i._directives = []),
                  (i.ngSubmit = new gu()),
                  (i.form = new Rv({}, Jd(t), Kd(r))),
                  i
                );
              }
              return (
                g(n, [
                  {
                    key: "ngAfterViewInit",
                    value: function () {
                      this._setUpdateStrategy();
                    },
                  },
                  {
                    key: "formDirective",
                    get: function () {
                      return this;
                    },
                  },
                  {
                    key: "control",
                    get: function () {
                      return this.form;
                    },
                  },
                  {
                    key: "path",
                    get: function () {
                      return [];
                    },
                  },
                  {
                    key: "controls",
                    get: function () {
                      return this.form.controls;
                    },
                  },
                  {
                    key: "addControl",
                    value: function (t) {
                      var e = this;
                      jv.then(function () {
                        var n = e._findContainer(t.path);
                        (t.control = n.registerControl(t.name, t.control)),
                          hv(t.control, t),
                          t.control.updateValueAndValidity({ emitEvent: !1 }),
                          e._directives.push(t);
                      });
                    },
                  },
                  {
                    key: "getControl",
                    value: function (t) {
                      return this.form.get(t.path);
                    },
                  },
                  {
                    key: "removeControl",
                    value: function (t) {
                      var e = this;
                      jv.then(function () {
                        var n = e._findContainer(t.path);
                        n && n.removeControl(t.name), pv(e._directives, t);
                      });
                    },
                  },
                  {
                    key: "addFormGroup",
                    value: function (t) {
                      var e = this;
                      jv.then(function () {
                        var n = e._findContainer(t.path),
                          r = new Rv({});
                        (function (t, e) {
                          dv(t, e, !1);
                        })(r, t),
                          n.registerControl(t.name, r),
                          r.updateValueAndValidity({ emitEvent: !1 });
                      });
                    },
                  },
                  {
                    key: "removeFormGroup",
                    value: function (t) {
                      var e = this;
                      jv.then(function () {
                        var n = e._findContainer(t.path);
                        n && n.removeControl(t.name);
                      });
                    },
                  },
                  {
                    key: "getFormGroup",
                    value: function (t) {
                      return this.form.get(t.path);
                    },
                  },
                  {
                    key: "updateModel",
                    value: function (t, e) {
                      var n = this;
                      jv.then(function () {
                        n.form.get(t.path).setValue(e);
                      });
                    },
                  },
                  {
                    key: "setValue",
                    value: function (t) {
                      this.control.setValue(t);
                    },
                  },
                  {
                    key: "onSubmit",
                    value: function (t) {
                      return (
                        (this.submitted = !0),
                        (e = this._directives),
                        this.form._syncPendingControls(),
                        e.forEach(function (t) {
                          var e = t.control;
                          "submit" === e.updateOn &&
                            e._pendingChange &&
                            (t.viewToModelUpdate(e._pendingValue),
                            (e._pendingChange = !1));
                        }),
                        this.ngSubmit.emit(t),
                        !1
                      );
                      var e;
                    },
                  },
                  {
                    key: "onReset",
                    value: function () {
                      this.resetForm();
                    },
                  },
                  {
                    key: "resetForm",
                    value: function (t) {
                      this.form.reset(t), (this.submitted = !1);
                    },
                  },
                  {
                    key: "_setUpdateStrategy",
                    value: function () {
                      this.options &&
                        null != this.options.updateOn &&
                        (this.form._updateOn = this.options.updateOn);
                    },
                  },
                  {
                    key: "_findContainer",
                    value: function (t) {
                      return t.pop(), t.length ? this.form.get(t) : this.form;
                    },
                  },
                ]),
                n
              );
            })(ov)).ɵfac = function (t) {
              return new (t || wv)(Po(Bd, 10), Po(qd, 10));
            }),
            (wv.ɵdir = ce({
              type: wv,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
                ["ng-form"],
                ["", "ngForm", ""],
              ],
              hostBindings: function (t, e) {
                1 & t &&
                  Lo("submit", function (t) {
                    return e.onSubmit(t);
                  })("reset", function () {
                    return e.onReset();
                  });
              },
              inputs: { options: ["ngFormOptions", "options"] },
              outputs: { ngSubmit: "ngSubmit" },
              exportAs: ["ngForm"],
              features: [pa([Vv]), _o],
            })),
            wv),
          Nv = {
            provide: uv,
            useExisting: _t(function () {
              return Mv;
            }),
          },
          Uv = Promise.resolve(null),
          Mv =
            (((Av = (function (t) {
              s(r, t);
              var e = c(r);
              function r(t, n, i, o) {
                var a;
                return (
                  p(this, r),
                  ((a = e.call(this)).control = new Iv()),
                  (a._registered = !1),
                  (a.update = new gu()),
                  (a._parent = t),
                  a._setValidators(n),
                  a._setAsyncValidators(i),
                  (a.valueAccessor = (function (t, e) {
                    return e
                      ? (Array.isArray(e),
                        e.forEach(function (t) {
                          t.constructor === zd
                            ? (n = t)
                            : Object.getPrototypeOf(t.constructor) ===
                              (function () {
                                return function t() {
                                  p(this, t);
                                };
                              })()
                            ? (r = t)
                            : (i = t);
                        }),
                        i || r || n || null)
                      : null;
                    var n, r, i;
                  })(0, o)),
                  a
                );
              }
              return (
                g(r, [
                  {
                    key: "ngOnChanges",
                    value: function (t) {
                      this._checkForErrors(),
                        this._registered || this._setUpControl(),
                        "isDisabled" in t && this._updateDisabled(t),
                        (function (t, e) {
                          if (!t.hasOwnProperty("model")) return !1;
                          var n = t.model;
                          return (
                            !!n.isFirstChange() || !Object.is(e, n.currentValue)
                          );
                        })(t, this.viewModel) &&
                          (this._updateValue(this.model),
                          (this.viewModel = this.model));
                    },
                  },
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this.formDirective &&
                        this.formDirective.removeControl(this);
                    },
                  },
                  {
                    key: "path",
                    get: function () {
                      return this._parent
                        ? [].concat(n(this._parent.path), [this.name])
                        : [this.name];
                    },
                  },
                  {
                    key: "formDirective",
                    get: function () {
                      return this._parent ? this._parent.formDirective : null;
                    },
                  },
                  {
                    key: "viewToModelUpdate",
                    value: function (t) {
                      (this.viewModel = t), this.update.emit(t);
                    },
                  },
                  {
                    key: "_setUpControl",
                    value: function () {
                      this._setUpdateStrategy(),
                        this._isStandalone()
                          ? this._setUpStandalone()
                          : this.formDirective.addControl(this),
                        (this._registered = !0);
                    },
                  },
                  {
                    key: "_setUpdateStrategy",
                    value: function () {
                      this.options &&
                        null != this.options.updateOn &&
                        (this.control._updateOn = this.options.updateOn);
                    },
                  },
                  {
                    key: "_isStandalone",
                    value: function () {
                      return (
                        !this._parent ||
                        !(!this.options || !this.options.standalone)
                      );
                    },
                  },
                  {
                    key: "_setUpStandalone",
                    value: function () {
                      hv(this.control, this),
                        this.control.updateValueAndValidity({ emitEvent: !1 });
                    },
                  },
                  {
                    key: "_checkForErrors",
                    value: function () {
                      this._isStandalone() || this._checkParentType(),
                        this._checkName();
                    },
                  },
                  { key: "_checkParentType", value: function () {} },
                  {
                    key: "_checkName",
                    value: function () {
                      this.options &&
                        this.options.name &&
                        (this.name = this.options.name),
                        this._isStandalone();
                    },
                  },
                  {
                    key: "_updateValue",
                    value: function (t) {
                      var e = this;
                      Uv.then(function () {
                        e.control.setValue(t, { emitViewToModelChange: !1 });
                      });
                    },
                  },
                  {
                    key: "_updateDisabled",
                    value: function (t) {
                      var e = this,
                        n = t.isDisabled.currentValue,
                        r = "" === n || (n && "false" !== n);
                      Uv.then(function () {
                        r && !e.control.disabled
                          ? e.control.disable()
                          : !r && e.control.disabled && e.control.enable();
                      });
                    },
                  },
                ]),
                r
              );
            })(uv)).ɵfac = function (t) {
              return new (t || Av)(
                Po(ov, 9),
                Po(Bd, 10),
                Po(qd, 10),
                Po(Fd, 10)
              );
            }),
            (Av.ɵdir = ce({
              type: Av,
              selectors: [
                [
                  "",
                  "ngModel",
                  "",
                  3,
                  "formControlName",
                  "",
                  3,
                  "formControl",
                  "",
                ],
              ],
              inputs: {
                name: "name",
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
                options: ["ngModelOptions", "options"],
              },
              outputs: { update: "ngModelChange" },
              exportAs: ["ngModel"],
              features: [pa([Nv]), _o, be],
            })),
            Av),
          Fv =
            (((xv = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || xv)();
            }),
            (xv.ɵdir = ce({
              type: xv,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            })),
            xv),
          Lv =
            (((Ev = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || Ev)();
            }),
            (Ev.ɵmod = se({ type: Ev })),
            (Ev.ɵinj = At({})),
            Ev),
          Hv =
            (((Sv = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || Sv)();
            }),
            (Sv.ɵmod = se({ type: Sv })),
            (Sv.ɵinj = At({ imports: [[Lv]] })),
            Sv),
          zv =
            (((Cv = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || Cv)();
            }),
            (Cv.ɵmod = se({ type: Cv })),
            (Cv.ɵinj = At({ imports: [Hv] })),
            Cv),
          Bv =
            (((bv = (function () {
              function t() {
                p(this, t), (this.todoAdd = new gu());
              }
              return (
                g(t, [
                  { key: "ngOnInit", value: function () {} },
                  {
                    key: "onSubmit",
                    value: function () {
                      this.todoAdd.emit({
                        sno: 8,
                        title: this.title,
                        desc: this.desc,
                        active: !0,
                      });
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || bv)();
            }),
            (bv.ɵcmp = ie({
              type: bv,
              selectors: [["app-add-todo"]],
              outputs: { todoAdd: "todoAdd" },
              decls: 14,
              vars: 2,
              consts: [
                [1, "my-3"],
                [3, "ngSubmit"],
                [1, "form-group"],
                ["for", "title"],
                [
                  "type",
                  "text",
                  "id",
                  "title",
                  "name",
                  "title",
                  "aria-describedby",
                  "emailHelp",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["for", "desc"],
                [
                  "type",
                  "text",
                  "name",
                  "desc",
                  "id",
                  "desc",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["type", "submit", 1, "btn", "btn-sm", "btn-primary"],
              ],
              template: function (t, e) {
                1 & t &&
                  (Do(0, "div", 0),
                  Do(1, "h4"),
                  Yo(2, "Add a Todo"),
                  No(),
                  Do(3, "form", 1),
                  Lo("ngSubmit", function () {
                    return e.onSubmit();
                  }),
                  Do(4, "div", 2),
                  Do(5, "label", 3),
                  Yo(6, "Todo Title"),
                  No(),
                  Do(7, "input", 4),
                  Lo("ngModelChange", function (t) {
                    return (e.title = t);
                  }),
                  No(),
                  No(),
                  Do(8, "div", 2),
                  Do(9, "label", 5),
                  Yo(10, "Todo Description"),
                  No(),
                  Do(11, "input", 6),
                  Lo("ngModelChange", function (t) {
                    return (e.desc = t);
                  }),
                  No(),
                  No(),
                  Do(12, "button", 7),
                  Yo(13, "Add Todo"),
                  No(),
                  No(),
                  No()),
                  2 & t &&
                    (ui(7),
                    Vo("ngModel", e.title),
                    ui(4),
                    Vo("ngModel", e.desc));
              },
              directives: [Fv, cv, Dv, zd, lv, Mv],
              styles: [""],
            })),
            bv),
          qv = function (t) {
            return { strike: t };
          },
          Gv =
            (((Tv = (function () {
              function t() {
                p(this, t),
                  (this.todoDelete = new gu()),
                  (this.todoCheckbox = new gu());
              }
              return (
                g(t, [
                  { key: "ngOnInit", value: function () {} },
                  {
                    key: "onClick",
                    value: function (t) {
                      this.todoDelete.emit(t),
                        console.log("onClick has been triggerd");
                    },
                  },
                  {
                    key: "onCheckboxClick",
                    value: function (t) {
                      console.log(t), this.todoCheckbox.emit(t);
                    },
                  },
                ]),
                t
              );
            })()).ɵfac = function (t) {
              return new (t || Tv)();
            }),
            (Tv.ɵcmp = ie({
              type: Tv,
              selectors: [["app-todo-item"]],
              inputs: { todo: "todo", i: "i" },
              outputs: {
                todoDelete: "todoDelete",
                todoCheckbox: "todoCheckbox",
              },
              decls: 11,
              vars: 11,
              consts: [
                [1, "my-3"],
                [3, "ngClass"],
                [1, "form-group", "form-check"],
                [
                  "type",
                  "checkbox",
                  1,
                  "form-check-input",
                  3,
                  "id",
                  "checked",
                  "click",
                ],
                [1, "form-check-label", 3, "for"],
                [1, "btn", "btn-sm", "btn-danger", 3, "click"],
              ],
              template: function (t, e) {
                1 & t &&
                  (Do(0, "div", 0),
                  Do(1, "h5", 1),
                  Yo(2),
                  No(),
                  Do(3, "p", 1),
                  Yo(4),
                  No(),
                  Do(5, "div", 2),
                  Do(6, "input", 3),
                  Lo("click", function () {
                    return e.onCheckboxClick(e.todo);
                  }),
                  No(),
                  Do(7, "label", 4),
                  Yo(8, "Done"),
                  No(),
                  No(),
                  Do(9, "button", 5),
                  Lo("click", function () {
                    return e.onClick(e.todo);
                  }),
                  Yo(10, "Delete"),
                  No(),
                  No()),
                  2 & t &&
                    (ui(1),
                    Vo("ngClass", yu(7, qv, !e.todo.active)),
                    ui(1),
                    Xo(e.todo.title),
                    ui(1),
                    Vo("ngClass", yu(9, qv, !e.todo.active)),
                    ui(1),
                    Xo(e.todo.desc),
                    ui(2),
                    qo("id", "todo", e.i, ""),
                    Vo("checked", !e.todo.active),
                    ui(1),
                    qo("for", "todo", e.i, ""));
              },
              directives: [$s],
              styles: [
                ".strike[_ngcontent-%COMP%]{text-decoration:line-through}",
              ],
            })),
            Tv);
        function Zv(t, e) {
          1 & t && (Do(0, "div"), Yo(1, "No Todos to display"), No());
        }
        function Wv(t, e) {
          if (1 & t) {
            var n = He();
            Do(0, "div"),
              Do(1, "app-todo-item", 6),
              Lo("todoDelete", function (t) {
                return Be(n), Bo(2).deleteTodo(t);
              })("todoCheckbox", function (t) {
                return Be(n), Bo(2).toggleTodo(t);
              }),
              No(),
              No();
          }
          if (2 & t) {
            var r = e.$implicit,
              i = e.index;
            ui(1), Vo("todo", r)("i", i);
          }
        }
        function Qv(t, e) {
          1 & t && Ro(0, Wv, 2, 2, "div", 5),
            2 & t && Vo("ngForOf", Bo().todos);
        }
        var $v,
          Jv,
          Kv,
          Yv,
          Xv = [
            {
              path: "",
              component:
                (($v = (function () {
                  function t() {
                    p(this, t),
                      (this.localItem = localStorage.getItem("todos")),
                      (this.todos =
                        null == this.localItem
                          ? []
                          : JSON.parse(this.localItem));
                  }
                  return (
                    g(t, [
                      { key: "ngOnInit", value: function () {} },
                      {
                        key: "deleteTodo",
                        value: function (t) {
                          console.log(t);
                          var e = this.todos.indexOf(t);
                          this.todos.splice(e, 1),
                            localStorage.setItem(
                              "todos",
                              JSON.stringify(this.todos)
                            );
                        },
                      },
                      {
                        key: "addTodo",
                        value: function (t) {
                          console.log(t),
                            this.todos.push(t),
                            localStorage.setItem(
                              "todos",
                              JSON.stringify(this.todos)
                            );
                        },
                      },
                      {
                        key: "toggleTodo",
                        value: function (t) {
                          var e = this.todos.indexOf(t);
                          console.log(e),
                            (this.todos[e].active = !this.todos[e].active),
                            localStorage.setItem(
                              "todos",
                              JSON.stringify(this.todos)
                            ),
                            console.log(t);
                        },
                      },
                    ]),
                    t
                  );
                })()),
                ($v.ɵfac = function (t) {
                  return new (t || $v)();
                }),
                ($v.ɵcmp = ie({
                  type: $v,
                  selectors: [["app-todos"]],
                  decls: 9,
                  vars: 2,
                  consts: [
                    [1, "container"],
                    [1, "text-center", "mb-3"],
                    [3, "todoAdd"],
                    [4, "ngIf", "ngIfElse"],
                    ["elseBlock", ""],
                    [4, "ngFor", "ngForOf"],
                    [3, "todo", "i", "todoDelete", "todoCheckbox"],
                  ],
                  template: function (t, e) {
                    if (
                      (1 & t &&
                        (Do(0, "div", 0),
                        Do(1, "h1", 1),
                        Yo(2, "Todo List"),
                        No(),
                        Do(3, "app-add-todo", 2),
                        Lo("todoAdd", function (t) {
                          return e.addTodo(t);
                        }),
                        No(),
                        Do(4, "h4"),
                        Yo(5, "Your Todos"),
                        No(),
                        Ro(6, Zv, 2, 0, "div", 3),
                        Ro(7, Qv, 1, 1, "ng-template", null, 4, mu),
                        No()),
                      2 & t)
                    ) {
                      var n = Fe.lFrame.contextLView[28];
                      ui(6), Vo("ngIf", 0 === e.todos.length)("ngIfElse", n);
                    }
                  },
                  directives: [Bv, Xs, Ks, Gv],
                  styles: [""],
                })),
                $v),
            },
            { path: "about", component: Nd },
          ],
          tp =
            (((Yv = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || Yv)();
            }),
            (Yv.ɵmod = se({ type: Yv })),
            (Yv.ɵinj = At({ imports: [[Ed.forRoot(Xv)], Ed] })),
            Yv),
          ep =
            (((Kv = function t() {
              p(this, t), (this.title = "cwh-todo-list");
            }).ɵfac = function (t) {
              return new (t || Kv)();
            }),
            (Kv.ɵcmp = ie({
              type: Kv,
              selectors: [["app-root"]],
              decls: 15,
              vars: 0,
              consts: [
                [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"],
                [1, "container-fluid"],
                ["routerLink", "/", 1, "navbar-brand"],
                [
                  "type",
                  "button",
                  "data-bs-toggle",
                  "collapse",
                  "data-bs-target",
                  "#navbarSupportedContent",
                  "aria-controls",
                  "navbarSupportedContent",
                  "aria-expanded",
                  "false",
                  "aria-label",
                  "Toggle navigation",
                  1,
                  "navbar-toggler",
                ],
                [1, "navbar-toggler-icon"],
                [
                  "id",
                  "navbarSupportedContent",
                  1,
                  "collapse",
                  "navbar-collapse",
                ],
                [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"],
                [1, "nav-item"],
                [
                  "aria-current",
                  "page",
                  "routerLink",
                  "/",
                  1,
                  "nav-link",
                  "active",
                ],
                ["routerLink", "/about", 1, "nav-link"],
              ],
              template: function (t, e) {
                1 & t &&
                  (Do(0, "nav", 0),
                  Do(1, "div", 1),
                  Do(2, "a", 2),
                  Yo(3, "Todos List"),
                  No(),
                  Do(4, "button", 3),
                  Uo(5, "span", 4),
                  No(),
                  Do(6, "div", 5),
                  Do(7, "ul", 6),
                  Do(8, "li", 7),
                  Do(9, "a", 8),
                  Yo(10, "Home"),
                  No(),
                  No(),
                  Do(11, "li", 7),
                  Do(12, "a", 9),
                  Yo(13, "About"),
                  No(),
                  No(),
                  No(),
                  No(),
                  No(),
                  No(),
                  Uo(14, "router-outlet"));
              },
              directives: [ld, vd],
              styles: [""],
            })),
            Kv),
          np =
            (((Jv = function t() {
              p(this, t);
            }).ɵfac = function (t) {
              return new (t || Jv)();
            }),
            (Jv.ɵmod = se({ type: Jv, bootstrap: [ep] })),
            (Jv.ɵinj = At({ providers: [], imports: [[zl, tp, zv]] })),
            Jv);
        (function () {
          if (Yu)
            throw new Error("Cannot enable prod mode after platform setup.");
          Ku = !1;
        })(),
          Ll()
            .bootstrapModule(np)
            .catch(function (t) {
              return console.error(t);
            });
      },
      zn8P: function (t, e) {
        function n(t) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        }
        (n.keys = function () {
          return [];
        }),
          (n.resolve = n),
          (t.exports = n),
          (n.id = "zn8P");
      },
    },
    [[0, 0]],
  ]);
})();
