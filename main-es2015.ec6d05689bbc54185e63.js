(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n("zUnb");
    },
    zUnb: function (t, e, n) {
      "use strict";
      function r(t) {
        return "function" == typeof t;
      }
      n.r(e);
      let s = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack
            );
          } else
            s &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          s = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function o(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      const a = {
          closed: !0,
          next(t) {},
          error(t) {
            if (i.useDeprecatedSynchronousErrorHandling) throw t;
            o(t);
          },
          complete() {},
        },
        l = (() =>
          Array.isArray || ((t) => t && "number" == typeof t.length))();
      function u(t) {
        return null !== t && "object" == typeof t;
      }
      const c = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      let h = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: s,
              _unsubscribe: i,
              _subscriptions: o,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof t)
            )
              n.remove(this);
            else if (null !== n)
              for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (r(i)) {
              s && (this._unsubscribe = void 0);
              try {
                i.call(this);
              } catch (a) {
                e = a instanceof c ? d(a.errors) : [a];
              }
            }
            if (l(o)) {
              let t = -1,
                n = o.length;
              for (; ++t < n; ) {
                const n = o[t];
                if (u(n))
                  try {
                    n.unsubscribe();
                  } catch (a) {
                    (e = e || []),
                      a instanceof c ? (e = e.concat(d(a.errors))) : e.push(a);
                  }
              }
            }
            if (e) throw new c(e);
          }
          add(e) {
            let n = e;
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
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + e + " added to Subscription."
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        return (
          (t.EMPTY = (function (t) {
            return (t.closed = !0), t;
          })(new t())),
          t
        );
      })();
      function d(t) {
        return t.reduce((t, e) => t.concat(e instanceof c ? e.errors : e), []);
      }
      const p = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())();
      class f extends h {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!t) {
                this.destination = a;
                break;
              }
              if ("object" == typeof t) {
                t instanceof f
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable),
                    (this.destination = t),
                    t.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new g(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new g(this, t, e, n));
          }
        }
        [p]() {
          return this;
        }
        static create(t, e, n) {
          const r = new f(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class g extends f {
        constructor(t, e, n, s) {
          let i;
          super(), (this._parentSubscriber = t);
          let o = this;
          r(e)
            ? (i = e)
            : e &&
              ((i = e.next),
              (n = e.error),
              (s = e.complete),
              e !== a &&
                ((o = Object.create(e)),
                r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = n),
            (this._complete = s);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : o(t),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              o(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!i.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            e.call(this._context, n);
          } catch (r) {
            return i.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            t.unsubscribe();
        }
      }
      const m = (() =>
        ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
      function _(t) {
        return t;
      }
      let y = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: r } = this,
              s = (function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]();
                }
                return t || e || n ? new f(t, e, n) : new f(a);
              })(t, e, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (i.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              i.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: r } = t;
                    if (e || r) return !1;
                    t = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = v(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [m]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length
              ? this
              : (0 === (e = t).length
                  ? _
                  : 1 === e.length
                  ? e[0]
                  : function (t) {
                      return e.reduce((t, e) => e(t), t);
                    })(this);
            var e;
          }
          toPromise(t) {
            return new (t = v(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function v(t) {
        if ((t || (t = i.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
      const w = (() => {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      class b extends h {
        constructor(t, e) {
          super(),
            (this.subject = t),
            (this.subscriber = e),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (
            ((this.subject = null),
            !e || 0 === e.length || t.isStopped || t.closed)
          )
            return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      class C extends f {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let S = (() => {
        class t extends y {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new C(this);
          }
          lift(t) {
            const e = new x(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new w();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new w();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new w();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new w();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new w();
            return this.hasError
              ? (t.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (t.complete(), h.EMPTY)
              : (this.observers.push(t), new b(this, t));
          }
          asObservable() {
            const t = new y();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new x(t, e)), t;
      })();
      class x extends S {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : h.EMPTY;
        }
      }
      function E(t) {
        return t && "function" == typeof t.schedule;
      }
      function A(t, e) {
        return function (n) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new T(t, e));
        };
      }
      class T {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new k(t, this.project, this.thisArg));
        }
      }
      class k extends f {
        constructor(t, e, n) {
          super(t),
            (this.project = e),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const O = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
      function I() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const R = I(),
        V = (t) => t && "number" == typeof t.length && "function" != typeof t;
      function P(t) {
        return (
          !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      const j = (t) => {
        if (t && "function" == typeof t[m])
          return (
            (r = t),
            (t) => {
              const e = r[m]();
              if ("function" != typeof e.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return e.subscribe(t);
            }
          );
        if (V(t)) return O(t);
        if (P(t))
          return (
            (n = t),
            (t) => (
              n
                .then(
                  (e) => {
                    t.closed || (t.next(e), t.complete());
                  },
                  (e) => t.error(e)
                )
                .then(null, o),
              t
            )
          );
        if (t && "function" == typeof t[R])
          return (
            (e = t),
            (t) => {
              const n = e[R]();
              for (;;) {
                let e;
                try {
                  e = n.next();
                } catch (r) {
                  return t.error(r), t;
                }
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = u(t) ? "an invalid object" : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var e, n, r;
      };
      function D(t, e) {
        return new y((n) => {
          const r = new h();
          let s = 0;
          return (
            r.add(
              e.schedule(function () {
                s !== t.length
                  ? (n.next(t[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function N(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && "function" == typeof t[m];
                  })(t)
                )
                  return (function (t, e) {
                    return new y((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[m]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (P(t))
                  return (function (t, e) {
                    return new y((n) => {
                      const r = new h();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t),
                                      r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (V(t)) return D(t, e);
                if (
                  (function (t) {
                    return t && "function" == typeof t[R];
                  })(t) ||
                  "string" == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new y((n) => {
                      const r = new h();
                      let s;
                      return (
                        r.add(() => {
                          s && "function" == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[R]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e
                                    ? n.complete()
                                    : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + " is not observable"
              );
            })(t, e)
          : t instanceof y
          ? t
          : new y(j(t));
      }
      class U extends f {
        constructor(t) {
          super(), (this.parent = t);
        }
        _next(t) {
          this.parent.notifyNext(t);
        }
        _error(t) {
          this.parent.notifyError(t), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class M extends f {
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyError(t) {
          this.destination.error(t);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function F(t, e) {
        if (e.closed) return;
        if (t instanceof y) return t.subscribe(e);
        let n;
        try {
          n = j(t)(e);
        } catch (r) {
          e.error(r);
        }
        return n;
      }
      function L(t, e, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof e
          ? (r) =>
              r.pipe(
                L((n, r) => N(t(n, r)).pipe(A((t, s) => e(n, t, r, s))), n)
              )
          : ("number" == typeof e && (n = e), (e) => e.lift(new H(t, n)));
      }
      class H {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new $(t, this.project, this.concurrent));
        }
      }
      class $ extends M {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent
            ? this._tryNext(t)
            : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e);
        }
        _innerSub(t) {
          const e = new U(this),
            n = this.destination;
          n.add(e);
          const r = F(t, e);
          r !== e && n.add(r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
        notifyComplete() {
          const t = this.buffer;
          this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function z(t = Number.POSITIVE_INFINITY) {
        return L(_, t);
      }
      function B(t, e) {
        return e ? D(t, e) : new y(O(t));
      }
      function q() {
        return function (t) {
          return t.lift(new G(t));
        };
      }
      class G {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new Z(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class Z extends f {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class W extends y {
        constructor(t, e) {
          super(),
            (this.source = t),
            (this.subjectFactory = e),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (t && !t.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new h()),
              t.add(this.source.subscribe(new J(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = h.EMPTY))),
            t
          );
        }
        refCount() {
          return q()(this);
        }
      }
      const Q = (() => {
        const t = W.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount },
        };
      })();
      class J extends C {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0),
              (t._subject = null),
              (t._connection = null),
              e && e.unsubscribe();
          }
        }
      }
      function K() {
        return new S();
      }
      function Y(t) {
        for (let e in t) if (t[e] === Y) return e;
        throw Error("Could not find renamed property on target object.");
      }
      function X(t, e) {
        for (const n in e)
          e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
      }
      function tt(t) {
        if ("string" == typeof t) return t;
        if (Array.isArray(t)) return "[" + t.map(tt).join(", ") + "]";
        if (null == t) return "" + t;
        if (t.overriddenName) return `${t.overriddenName}`;
        if (t.name) return `${t.name}`;
        const e = t.toString();
        if (null == e) return "" + e;
        const n = e.indexOf("\n");
        return -1 === n ? e : e.substring(0, n);
      }
      function et(t, e) {
        return null == t || "" === t
          ? null === e
            ? ""
            : e
          : null == e || "" === e
          ? t
          : t + " " + e;
      }
      const nt = Y({ __forward_ref__: Y });
      function rt(t) {
        return (
          (t.__forward_ref__ = rt),
          (t.toString = function () {
            return tt(this());
          }),
          t
        );
      }
      function st(t) {
        return it(t) ? t() : t;
      }
      function it(t) {
        return (
          "function" == typeof t &&
          t.hasOwnProperty(nt) &&
          t.__forward_ref__ === rt
        );
      }
      class ot extends Error {
        constructor(t, e) {
          super(
            (function (t, e) {
              return `${t ? `NG0${t}: ` : ""}${e}`;
            })(t, e)
          ),
            (this.code = t);
        }
      }
      function at(t) {
        return "string" == typeof t ? t : null == t ? "" : String(t);
      }
      function lt(t) {
        return "function" == typeof t
          ? t.name || t.toString()
          : "object" == typeof t && null != t && "function" == typeof t.type
          ? t.type.name || t.type.toString()
          : at(t);
      }
      function ut(t, e) {
        const n = e ? ` in ${e}` : "";
        throw new ot("201", `No provider for ${lt(t)} found${n}`);
      }
      function ct(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function ht(t) {
        return { providers: t.providers || [], imports: t.imports || [] };
      }
      function dt(t) {
        return pt(t, gt) || pt(t, _t);
      }
      function pt(t, e) {
        return t.hasOwnProperty(e) ? t[e] : null;
      }
      function ft(t) {
        return t && (t.hasOwnProperty(mt) || t.hasOwnProperty(yt))
          ? t[mt]
          : null;
      }
      const gt = Y({ "\u0275prov": Y }),
        mt = Y({ "\u0275inj": Y }),
        _t = Y({ ngInjectableDef: Y }),
        yt = Y({ ngInjectorDef: Y });
      var vt = (function (t) {
        return (
          (t[(t.Default = 0)] = "Default"),
          (t[(t.Host = 1)] = "Host"),
          (t[(t.Self = 2)] = "Self"),
          (t[(t.SkipSelf = 4)] = "SkipSelf"),
          (t[(t.Optional = 8)] = "Optional"),
          t
        );
      })({});
      let wt;
      function bt(t) {
        const e = wt;
        return (wt = t), e;
      }
      function Ct(t, e, n) {
        const r = dt(t);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & vt.Optional
          ? null
          : void 0 !== e
          ? e
          : void ut(tt(t), "Injector");
      }
      function St(t) {
        return { toString: t }.toString();
      }
      var xt = (function (t) {
          return (
            (t[(t.OnPush = 0)] = "OnPush"), (t[(t.Default = 1)] = "Default"), t
          );
        })({}),
        Et = (function (t) {
          return (
            (t[(t.Emulated = 0)] = "Emulated"),
            (t[(t.None = 2)] = "None"),
            (t[(t.ShadowDom = 3)] = "ShadowDom"),
            t
          );
        })({});
      const At = "undefined" != typeof globalThis && globalThis,
        Tt = "undefined" != typeof window && window,
        kt =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Ot = "undefined" != typeof global && global,
        It = At || Ot || Tt || kt,
        Rt = {},
        Vt = [],
        Pt = [],
        jt = Y({ "\u0275cmp": Y }),
        Dt = Y({ "\u0275dir": Y }),
        Nt = Y({ "\u0275pipe": Y }),
        Ut = Y({ "\u0275mod": Y }),
        Mt = Y({ "\u0275loc": Y }),
        Ft = Y({ "\u0275fac": Y }),
        Lt = Y({ __NG_ELEMENT_ID__: Y });
      let Ht = 0;
      function $t(t) {
        return St(() => {
          const e = {},
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
              onPush: t.changeDetection === xt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: t.selectors || Pt,
              viewQuery: t.viewQuery || null,
              features: t.features || null,
              data: t.data || {},
              encapsulation: t.encapsulation || Et.Emulated,
              id: "c",
              styles: t.styles || Pt,
              _: null,
              setInput: null,
              schemas: t.schemas || null,
              tView: null,
            },
            r = t.directives,
            s = t.features,
            i = t.pipes;
          return (
            (n.id += Ht++),
            (n.inputs = Zt(t.inputs, e)),
            (n.outputs = Zt(t.outputs)),
            s && s.forEach((t) => t(n)),
            (n.directiveDefs = r
              ? () => ("function" == typeof r ? r() : r).map(zt)
              : null),
            (n.pipeDefs = i
              ? () => ("function" == typeof i ? i() : i).map(Bt)
              : null),
            n
          );
        });
      }
      function zt(t) {
        return (
          Qt(t) ||
          (function (t) {
            return t[Dt] || null;
          })(t)
        );
      }
      function Bt(t) {
        return (function (t) {
          return t[Nt] || null;
        })(t);
      }
      const qt = {};
      function Gt(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || Pt,
          declarations: t.declarations || Pt,
          imports: t.imports || Pt,
          exports: t.exports || Pt,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null,
        };
        return (
          null != t.id &&
            St(() => {
              qt[t.id] = t.type;
            }),
          e
        );
      }
      function Zt(t, e) {
        if (null == t) return Rt;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              e && (e[s] = i);
          }
        return n;
      }
      const Wt = $t;
      function Qt(t) {
        return t[jt] || null;
      }
      function Jt(t, e) {
        const n = t[Ut] || null;
        if (!n && !0 === e)
          throw new Error(`Type ${tt(t)} does not have '\u0275mod' property.`);
        return n;
      }
      function Kt(t) {
        return Array.isArray(t) && "object" == typeof t[1];
      }
      function Yt(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function Xt(t) {
        return 0 != (8 & t.flags);
      }
      function te(t) {
        return 2 == (2 & t.flags);
      }
      function ee(t) {
        return 1 == (1 & t.flags);
      }
      function ne(t) {
        return null !== t.template;
      }
      function re(t, e) {
        return t.hasOwnProperty(Ft) ? t[Ft] : null;
      }
      class se {
        constructor(t, e, n) {
          (this.previousValue = t),
            (this.currentValue = e),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function ie() {
        return oe;
      }
      function oe(t) {
        return t.type.prototype.ngOnChanges && (t.setInput = le), ae;
      }
      function ae() {
        const t = ue(this),
          e = null == t ? void 0 : t.current;
        if (e) {
          const n = t.previous;
          if (n === Rt) t.previous = e;
          else for (let t in e) n[t] = e[t];
          (t.current = null), this.ngOnChanges(e);
        }
      }
      function le(t, e, n, r) {
        const s =
            ue(t) ||
            (function (t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: Rt, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new se(l && l.currentValue, e, o === Rt)), (t[r] = e);
      }
      function ue(t) {
        return t.__ngSimpleChanges__ || null;
      }
      let ce;
      function he(t) {
        return !!t.listen;
      }
      ie.ngInherit = !0;
      const de = {
        createRenderer: (t, e) =>
          void 0 !== ce
            ? ce
            : "undefined" != typeof document
            ? document
            : void 0,
      };
      function pe(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function fe(t, e) {
        return pe(e[t]);
      }
      function ge(t, e) {
        return pe(e[t.index]);
      }
      function me(t, e) {
        return t.data[e];
      }
      function _e(t, e) {
        const n = e[t];
        return Kt(n) ? n : n[0];
      }
      function ye(t) {
        const e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function ve(t) {
        return 128 == (128 & t[2]);
      }
      function we(t, e) {
        return null == e ? null : t[e];
      }
      function be(t) {
        t[18] = 0;
      }
      function Ce(t, e) {
        t[5] += e;
        let n = t,
          r = t[3];
        for (
          ;
          null !== r && ((1 === e && 1 === n[5]) || (-1 === e && 0 === n[5]));

        )
          (r[5] += e), (n = r), (r = r[3]);
      }
      const Se = {
        lFrame: $e(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function xe() {
        return Se.bindingsEnabled;
      }
      function Ee() {
        return Se.lFrame.lView;
      }
      function Ae() {
        return Se.lFrame.tView;
      }
      function Te(t) {
        Se.lFrame.contextLView = t;
      }
      function ke() {
        let t = Oe();
        for (; null !== t && 64 === t.type; ) t = t.parent;
        return t;
      }
      function Oe() {
        return Se.lFrame.currentTNode;
      }
      function Ie(t, e) {
        const n = Se.lFrame;
        (n.currentTNode = t), (n.isParent = e);
      }
      function Re() {
        return Se.lFrame.isParent;
      }
      function Ve() {
        return Se.isInCheckNoChangesMode;
      }
      function Pe(t) {
        Se.isInCheckNoChangesMode = t;
      }
      function je() {
        return Se.lFrame.bindingIndex++;
      }
      function De(t, e) {
        const n = Se.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), Ne(e);
      }
      function Ne(t) {
        Se.lFrame.currentDirectiveIndex = t;
      }
      function Ue(t) {
        Se.lFrame.currentQueryIndex = t;
      }
      function Me(t) {
        const e = t[1];
        return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null;
      }
      function Fe(t, e, n) {
        if (n & vt.SkipSelf) {
          let r = e,
            s = t;
          for (
            ;
            (r = r.parent),
              !(
                null !== r ||
                n & vt.Host ||
                ((r = Me(s)), null === r) ||
                ((s = s[15]), 10 & r.type)
              );

          );
          if (null === r) return !1;
          (e = r), (t = s);
        }
        const r = (Se.lFrame = He());
        return (r.currentTNode = e), (r.lView = t), !0;
      }
      function Le(t) {
        const e = He(),
          n = t[1];
        (Se.lFrame = e),
          (e.currentTNode = n.firstChild),
          (e.lView = t),
          (e.tView = n),
          (e.contextLView = t),
          (e.bindingIndex = n.bindingStartIndex),
          (e.inI18n = !1);
      }
      function He() {
        const t = Se.lFrame,
          e = null === t ? null : t.child;
        return null === e ? $e(t) : e;
      }
      function $e(t) {
        const e = {
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
      function ze() {
        const t = Se.lFrame;
        return (
          (Se.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t
        );
      }
      const Be = ze;
      function qe() {
        const t = ze();
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
      function Ge() {
        return Se.lFrame.selectedIndex;
      }
      function Ze(t) {
        Se.lFrame.selectedIndex = t;
      }
      function We() {
        const t = Se.lFrame;
        return me(t.tView, t.selectedIndex);
      }
      function Qe(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: s,
              ngAfterViewInit: i,
              ngAfterViewChecked: o,
              ngOnDestroy: a,
            } = e;
          r && (t.contentHooks || (t.contentHooks = [])).push(-n, r),
            s &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, s),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, s)),
            i && (t.viewHooks || (t.viewHooks = [])).push(-n, i),
            o &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, o),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o)),
            null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a);
        }
      }
      function Je(t, e, n) {
        Xe(t, e, 3, n);
      }
      function Ke(t, e, n, r) {
        (3 & t[2]) === n && Xe(t, e, n, r);
      }
      function Ye(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 2047), (n += 1), (t[2] = n));
      }
      function Xe(t, e, n, r) {
        const s = null != r ? r : -1,
          i = e.length - 1;
        let o = 0;
        for (let a = void 0 !== r ? 65535 & t[18] : 0; a < i; a++)
          if ("number" == typeof e[a + 1]) {
            if (((o = e[a]), null != r && o >= r)) break;
          } else
            e[a] < 0 && (t[18] += 65536),
              (o < s || -1 == s) &&
                (tn(t, n, e, a), (t[18] = (4294901760 & t[18]) + a + 2)),
              a++;
      }
      function tn(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        if (s) {
          if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
            t[2] += 2048;
            try {
              i.call(o);
            } finally {
            }
          }
        } else
          try {
            i.call(o);
          } finally {
          }
      }
      class en {
        constructor(t, e, n) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = e),
            (this.injectImpl = n);
        }
      }
      function nn(t, e, n) {
        const r = he(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              l = n[s++];
            r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++s];
            sn(o)
              ? r && t.setProperty(e, o, a)
              : r
              ? t.setAttribute(e, o, a)
              : e.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function rn(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function sn(t) {
        return 64 === t.charCodeAt(0);
      }
      function on(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            "number" == typeof s
              ? (n = s)
              : 0 === n ||
                an(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function an(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ("number" == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ("number" == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function ln(t) {
        return -1 !== t;
      }
      function un(t) {
        return 32767 & t;
      }
      function cn(t, e) {
        let n = t >> 16,
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let hn = !0;
      function dn(t) {
        const e = hn;
        return (hn = t), e;
      }
      let pn = 0;
      function fn(t, e) {
        const n = mn(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          gn(r.data, t),
          gn(e, null),
          gn(r.blueprint, null));
        const s = _n(t, e),
          i = t.injectorIndex;
        if (ln(s)) {
          const t = un(s),
            n = cn(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function gn(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function mn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null === e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function _n(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        let n = 0,
          r = null,
          s = e;
        for (; null !== s; ) {
          const t = s[1],
            e = t.type;
          if (((r = 2 === e ? t.declTNode : 1 === e ? s[6] : null), null === r))
            return -1;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function yn(t, e, n) {
        !(function (t, e, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Lt) && (r = n[Lt]),
            null == r && (r = n[Lt] = pn++);
          const s = 255 & r;
          e.data[t + (s >> 5)] |= 1 << s;
        })(t, e, n);
      }
      function vn(t, e, n) {
        if (n & vt.Optional) return t;
        ut(e, "NodeInjector");
      }
      function wn(t, e, n, r) {
        if (
          (n & vt.Optional && void 0 === r && (r = null),
          0 == (n & (vt.Self | vt.Host)))
        ) {
          const s = t[9],
            i = bt(void 0);
          try {
            return s ? s.get(e, r, n & vt.Optional) : Ct(e, r, n & vt.Optional);
          } finally {
            bt(i);
          }
        }
        return vn(r, e, n);
      }
      function bn(t, e, n, r = vt.Default, s) {
        if (null !== t) {
          const i = (function (t) {
            if ("string" == typeof t) return t.charCodeAt(0) || 0;
            const e = t.hasOwnProperty(Lt) ? t[Lt] : void 0;
            return "number" == typeof e ? (e >= 0 ? 255 & e : Sn) : e;
          })(n);
          if ("function" == typeof i) {
            if (!Fe(e, t, r)) return r & vt.Host ? vn(s, n, r) : wn(e, n, r, s);
            try {
              const t = i();
              if (null != t || r & vt.Optional) return t;
              ut(n);
            } finally {
              Be();
            }
          } else if ("number" == typeof i) {
            let s = null,
              o = mn(t, e),
              a = -1,
              l = r & vt.Host ? e[16][6] : null;
            for (
              (-1 === o || r & vt.SkipSelf) &&
              ((a = -1 === o ? _n(t, e) : e[o + 8]),
              -1 !== a && Tn(r, !1)
                ? ((s = e[1]), (o = un(a)), (e = cn(a, e)))
                : (o = -1));
              -1 !== o;

            ) {
              const t = e[1];
              if (An(i, o, t.data)) {
                const t = xn(o, e, n, s, r, l);
                if (t !== Cn) return t;
              }
              (a = e[o + 8]),
                -1 !== a && Tn(r, e[1].data[o + 8] === l) && An(i, o, e)
                  ? ((s = t), (o = un(a)), (e = cn(a, e)))
                  : (o = -1);
            }
          }
        }
        return wn(e, n, r, s);
      }
      const Cn = {};
      function Sn() {
        return new kn(ke(), Ee());
      }
      function xn(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          l = (function (t, e, n, r, s) {
            const i = t.providerIndexes,
              o = e.data,
              a = 1048575 & i,
              l = t.directiveStart,
              u = i >> 20,
              c = s ? a + u : t.directiveEnd;
            for (let h = r ? a : a + u; h < c; h++) {
              const t = o[h];
              if ((h < l && n === t) || (h >= l && t.type === n)) return h;
            }
            if (s) {
              const t = o[l];
              if (t && ne(t) && t.type === n) return l;
            }
            return null;
          })(
            a,
            o,
            n,
            null == r ? te(a) && hn : r != o && 0 != (3 & a.type),
            s & vt.Host && i === a
          );
        return null !== l ? En(e, o, l, a) : Cn;
      }
      function En(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof en) {
          const o = s;
          o.resolving &&
            (function (t, e) {
              throw new ot(
                "200",
                `Circular dependency in DI detected for ${t}`
              );
            })(lt(i[n]));
          const a = dn(o.canSeeViewProviders);
          o.resolving = !0;
          const l = o.injectImpl ? bt(o.injectImpl) : null;
          Fe(t, r, vt.Default);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i,
                  } = e.type.prototype;
                  if (r) {
                    const r = oe(e);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, r);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, i));
                })(n, i[n], e);
          } finally {
            null !== l && bt(l), dn(a), (o.resolving = !1), Be();
          }
        }
        return s;
      }
      function An(t, e, n) {
        return !!(n[e + (t >> 5)] & (1 << t));
      }
      function Tn(t, e) {
        return !(t & vt.Self || (t & vt.Host && e));
      }
      class kn {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return bn(this._tNode, this._lView, t, void 0, e);
        }
      }
      function On(t) {
        return St(() => {
          const e = t.prototype.constructor,
            n = e[Ft] || In(e),
            r = Object.prototype;
          let s = Object.getPrototypeOf(t.prototype).constructor;
          for (; s && s !== r; ) {
            const t = s[Ft] || In(s);
            if (t && t !== n) return t;
            s = Object.getPrototypeOf(s);
          }
          return (t) => new t();
        });
      }
      function In(t) {
        return it(t)
          ? () => {
              const e = In(st(t));
              return e && e();
            }
          : re(t);
      }
      function Rn(t, e, n) {
        return St(() => {
          const r = (function (t) {
            return function (...e) {
              if (t) {
                const n = t(...e);
                for (const t in n) this[t] = n[t];
              }
            };
          })(e);
          function s(...t) {
            if (this instanceof s) return r.apply(this, t), this;
            const e = new s(...t);
            return (n.annotation = e), n;
            function n(t, n, r) {
              const s = t.hasOwnProperty("__parameters__")
                ? t.__parameters__
                : Object.defineProperty(t, "__parameters__", { value: [] })
                    .__parameters__;
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(e), t;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = t),
            (s.annotationCls = s),
            s
          );
        });
      }
      class Vn {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = ct({
                  token: this,
                  providedIn: e.providedIn || "root",
                  factory: e.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Pn = new Vn("AnalyzeForEntryComponents"),
        jn = Function;
      function Dn(t, e) {
        t.forEach((t) => (Array.isArray(t) ? Dn(t, e) : e(t)));
      }
      function Nn(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function Un(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function Mn(t, e, n) {
        let r = Ln(t, e);
        return (
          r >= 0
            ? (t[1 | r] = n)
            : ((r = ~r),
              (function (t, e, n, r) {
                let s = t.length;
                if (s == e) t.push(n, r);
                else if (1 === s) t.push(r, t[0]), (t[0] = n);
                else {
                  for (s--, t.push(t[s - 1], t[s]); s > e; )
                    (t[s] = t[s - 2]), s--;
                  (t[e] = n), (t[e + 1] = r);
                }
              })(t, r, e, n)),
          r
        );
      }
      function Fn(t, e) {
        const n = Ln(t, e);
        if (n >= 0) return t[1 | n];
      }
      function Ln(t, e) {
        return (function (t, e, n) {
          let r = 0,
            s = t.length >> 1;
          for (; s !== r; ) {
            const n = r + ((s - r) >> 1),
              i = t[n << 1];
            if (e === i) return n << 1;
            i > e ? (s = n) : (r = n + 1);
          }
          return ~(s << 1);
        })(t, e);
      }
      const Hn = {},
        $n = /\n/gm,
        zn = Y({ provide: String, useValue: Y });
      let Bn;
      function qn(t) {
        const e = Bn;
        return (Bn = t), e;
      }
      function Gn(t, e = vt.Default) {
        if (void 0 === Bn)
          throw new Error("inject() must be called from an injection context");
        return null === Bn
          ? Ct(t, void 0, e)
          : Bn.get(t, e & vt.Optional ? null : void 0, e);
      }
      function Zn(t, e = vt.Default) {
        return (wt || Gn)(st(t), e);
      }
      const Wn = Zn;
      function Qn(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = st(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            let t,
              n = vt.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e],
                i = s.__NG_DI_FLAG__;
              "number" == typeof i
                ? -1 === i
                  ? (t = s.token)
                  : (n |= i)
                : (t = s);
            }
            e.push(Zn(t, n));
          } else e.push(Zn(r));
        }
        return e;
      }
      function Jn(t, e) {
        return (t.__NG_DI_FLAG__ = e), (t.prototype.__NG_DI_FLAG__ = e), t;
      }
      const Kn = Jn(
          Rn("Inject", (t) => ({ token: t })),
          -1
        ),
        Yn = Jn(Rn("Optional"), 8),
        Xn = Jn(Rn("SkipSelf"), 4);
      class tr {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      function er(t) {
        return t instanceof tr ? t.changingThisBreaksApplicationSecurity : t;
      }
      const nr =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        rr =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      var sr = (function (t) {
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
      function ir(t) {
        const e = (function () {
          const t = Ee();
          return t && t[12];
        })();
        return e
          ? e.sanitize(sr.URL, t) || ""
          : (function (t, e) {
              const n = (function (t) {
                return (t instanceof tr && t.getTypeName()) || null;
              })(t);
              if (null != n && n !== e) {
                if ("ResourceURL" === n && "URL" === e) return !0;
                throw new Error(
                  `Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`
                );
              }
              return n === e;
            })(t, "URL")
          ? er(t)
          : ((n = at(t)),
            (n = String(n)).match(nr) || n.match(rr) ? n : "unsafe:" + n);
        var n;
      }
      function or(t) {
        return t.ngDebugContext;
      }
      function ar(t) {
        return t.ngOriginalError;
      }
      function lr(t, ...e) {
        t.error(...e);
      }
      class ur {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || lr;
            })(t);
          r(this._console, "ERROR", t),
            e && r(this._console, "ORIGINAL ERROR", e),
            n && r(this._console, "ERROR CONTEXT", n);
        }
        _findContext(t) {
          return t ? (or(t) ? or(t) : this._findContext(ar(t))) : null;
        }
        _findOriginalError(t) {
          let e = ar(t);
          for (; e && ar(e); ) e = ar(e);
          return e;
        }
      }
      function cr(t, e) {
        t.__ngContext__ = e;
      }
      const hr = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(It))();
      function dr(t) {
        return t instanceof Function ? t() : t;
      }
      var pr = (function (t) {
        return (
          (t[(t.Important = 1)] = "Important"),
          (t[(t.DashCase = 2)] = "DashCase"),
          t
        );
      })({});
      function fr(t, e) {
        return (void 0)(t, e);
      }
      function gr(t) {
        const e = t[3];
        return Yt(e) ? e[3] : e;
      }
      function mr(t) {
        return yr(t[13]);
      }
      function _r(t) {
        return yr(t[4]);
      }
      function yr(t) {
        for (; null !== t && !Yt(t); ) t = t[4];
        return t;
      }
      function vr(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          Yt(r) ? (i = r) : Kt(r) && ((o = !0), (r = r[0]));
          const a = pe(r);
          0 === t && null !== n
            ? null == s
              ? Ar(e, n, a)
              : Er(e, n, a, s || null, !0)
            : 1 === t && null !== n
            ? Er(e, n, a, s || null, !0)
            : 2 === t
            ? (function (t, e, n) {
                const r = kr(t, e);
                r &&
                  (function (t, e, n, r) {
                    he(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                  })(t, r, e, n);
              })(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function (t, e, n, r, s) {
                const i = n[7];
                i !== pe(n) && vr(e, t, r, i, s);
                for (let o = 10; o < n.length; o++) {
                  const s = n[o];
                  jr(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function wr(t, e, n) {
        return he(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e);
      }
      function br(t, e) {
        const n = t[9],
          r = n.indexOf(e),
          s = e[3];
        1024 & e[2] && ((e[2] &= -1025), Ce(s, -1)), n.splice(r, 1);
      }
      function Cr(t, e) {
        if (t.length <= 10) return;
        const n = 10 + e,
          r = t[n];
        if (r) {
          const i = r[17];
          null !== i && i !== t && br(i, r), e > 0 && (t[n - 1][4] = r[4]);
          const o = Un(t, 10 + e);
          jr(r[1], (s = r), s[11], 2, null, null), (s[0] = null), (s[6] = null);
          const a = o[19];
          null !== a && a.detachView(o[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        var s;
        return r;
      }
      function Sr(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          he(n) && n.destroyNode && jr(t, e, n, 3, null, null),
            (function (t) {
              let e = t[13];
              if (!e) return xr(t[1], t);
              for (; e; ) {
                let n = null;
                if (Kt(e)) n = e[13];
                else {
                  const t = e[10];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    Kt(e) && xr(e[1], e), (e = e[3]);
                  null === e && (e = t), Kt(e) && xr(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function xr(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  if (!(t instanceof en)) {
                    const e = n[r + 1];
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n += 2)
                        e[n + 1].call(t[e[n]]);
                    else e.call(t);
                  }
                }
            })(t, e),
            (function (t, e) {
              const n = t.cleanup,
                r = e[7];
              let s = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const t = n[i + 1],
                      o = "function" == typeof t ? t(e) : pe(e[t]),
                      a = r[(s = n[i + 2])],
                      l = n[i + 3];
                    "boolean" == typeof l
                      ? o.removeEventListener(n[i], a, l)
                      : l >= 0
                      ? r[(s = l)]()
                      : r[(s = -l)].unsubscribe(),
                      (i += 2);
                  } else {
                    const t = r[(s = n[i + 1])];
                    n[i].call(t);
                  }
              if (null !== r) {
                for (let t = s + 1; t < r.length; t++) (0, r[t])();
                e[7] = null;
              }
            })(t, e),
            1 === e[1].type && he(e[11]) && e[11].destroy();
          const n = e[17];
          if (null !== n && Yt(e[3])) {
            n !== e[3] && br(n, e);
            const r = e[19];
            null !== r && r.detachView(t);
          }
        }
      }
      function Er(t, e, n, r, s) {
        he(t) ? t.insertBefore(e, n, r, s) : e.insertBefore(n, r, s);
      }
      function Ar(t, e, n) {
        he(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function Tr(t, e, n, r, s) {
        null !== r ? Er(t, e, n, r, s) : Ar(t, e, n);
      }
      function kr(t, e) {
        return he(t) ? t.parentNode(e) : e.parentNode;
      }
      function Or(t, e, n, r) {
        const s = (function (t, e, n) {
            return (function (t, e, n) {
              let r = e;
              for (; null !== r && 40 & r.type; ) r = (e = r).parent;
              if (null === r) return n[0];
              if (2 & r.flags) {
                const e = t.data[r.directiveStart].encapsulation;
                if (e === Et.None || e === Et.Emulated) return null;
              }
              return ge(r, n);
            })(t, e.parent, n);
          })(t, r, e),
          i = e[11],
          o = (function (t, e, n) {
            return (function (t, e, n) {
              return 40 & t.type ? ge(t, n) : null;
            })(t, 0, n);
          })(r.parent || e[6], 0, e);
        if (null != s)
          if (Array.isArray(n))
            for (let a = 0; a < n.length; a++) Tr(i, s, n[a], o, !1);
          else Tr(i, s, n, o, !1);
      }
      function Ir(t, e) {
        if (null !== e) {
          const n = e.type;
          if (3 & n) return ge(e, t);
          if (4 & n) return Vr(-1, t[e.index]);
          if (8 & n) {
            const n = e.child;
            if (null !== n) return Ir(t, n);
            {
              const n = t[e.index];
              return Yt(n) ? Vr(-1, n) : pe(n);
            }
          }
          if (32 & n) return fr(e, t)() || pe(t[e.index]);
          {
            const n = Rr(t, e);
            return null !== n
              ? Array.isArray(n)
                ? n[0]
                : Ir(gr(t[16]), n)
              : Ir(t, e.next);
          }
        }
        return null;
      }
      function Rr(t, e) {
        return null !== e ? t[16][6].projection[e.projection] : null;
      }
      function Vr(t, e) {
        const n = 10 + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r) return Ir(t, r);
        }
        return e[7];
      }
      function Pr(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          if (
            (o && 0 === e && (a && cr(pe(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & l) Pr(t, e, n.child, r, s, i, !1), vr(e, t, s, a, i);
            else if (32 & l) {
              const o = fr(n, r);
              let l;
              for (; (l = o()); ) vr(e, t, s, l, i);
              vr(e, t, s, a, i);
            } else 16 & l ? Dr(t, e, r, n, s, i) : vr(e, t, s, a, i);
          n = o ? n.projectionNext : n.next;
        }
      }
      function jr(t, e, n, r, s, i) {
        Pr(n, r, t.firstChild, e, s, i, !1);
      }
      function Dr(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) vr(e, t, s, a[l], i);
        else Pr(t, e, a, o[3], s, i, !0);
      }
      function Nr(t, e, n) {
        he(t) ? t.setAttribute(e, "style", n) : (e.style.cssText = n);
      }
      function Ur(t, e, n) {
        he(t)
          ? "" === n
            ? t.removeAttribute(e, "class")
            : t.setAttribute(e, "class", n)
          : (e.className = n);
      }
      function Mr(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function Fr(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && "class" === s) {
            if (((s = t[r]), -1 !== Mr(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && "string" == typeof (s = t[r++]); )
              if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Lr(t) {
        return 4 === t.type && "ng-template" !== t.value;
      }
      function Hr(t, e, n) {
        return e === (4 !== t.type || n ? t.value : "ng-template");
      }
      function $r(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function (t) {
            for (let e = 0; e < t.length; e++) if (rn(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ("number" != typeof l) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== l && !Hr(t, l, n)) || ("" === l && 1 === e.length))
                ) {
                  if (zr(r)) return !1;
                  o = !0;
                }
              } else {
                const u = 8 & r ? l : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!Fr(t.attrs, u, n)) {
                    if (zr(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const c = Br(8 & r ? "class" : l, s, Lr(t), n);
                if (-1 === c) {
                  if (zr(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== u) {
                  let t;
                  t = c > i ? "" : s[c + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== Mr(e, u, 0)) || (2 & r && u !== t)) {
                    if (zr(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !zr(r) && !zr(l)) return !1;
            if (o && zr(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return zr(r) || o;
      }
      function zr(t) {
        return 0 == (1 & t);
      }
      function Br(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; "string" == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              const r = t[n];
              if ("number" == typeof r) return -1;
              if (r === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function qr(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if ($r(t, e[r], n)) return !0;
        return !1;
      }
      function Gr(t, e) {
        return t ? ":not(" + e.trim() + ")" : e;
      }
      function Zr(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ("string" == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]";
            } else 8 & r ? (s += "." + o) : 4 & r && (s += " " + o);
          else
            "" === s || zr(o) || ((e += Gr(i, s)), (s = "")),
              (r = o),
              (i = i || !zr(r));
          n++;
        }
        return "" !== s && (e += Gr(i, s)), e;
      }
      const Wr = {};
      function Qr(t) {
        Jr(Ae(), Ee(), Ge() + t, Ve());
      }
      function Jr(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && Je(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && Ke(e, r, 0, n);
          }
        Ze(n);
      }
      function Kr(t, e) {
        return (t << 17) | (e << 2);
      }
      function Yr(t) {
        return (t >> 17) & 32767;
      }
      function Xr(t) {
        return 2 | t;
      }
      function ts(t) {
        return (131068 & t) >> 2;
      }
      function es(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function ns(t) {
        return 1 | t;
      }
      function rs(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              Ue(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function ss(t, e, n, r, s, i, o, a, l, u) {
        const c = e.blueprint.slice();
        return (
          (c[0] = s),
          (c[2] = 140 | r),
          be(c),
          (c[3] = c[15] = t),
          (c[8] = n),
          (c[10] = o || (t && t[10])),
          (c[11] = a || (t && t[11])),
          (c[12] = l || (t && t[12]) || null),
          (c[9] = u || (t && t[9]) || null),
          (c[6] = i),
          (c[16] = 2 == e.type ? t[16] : c),
          c
        );
      }
      function is(t, e, n, r, s) {
        let i = t.data[e];
        if (null === i)
          (i = (function (t, e, n, r, s) {
            const i = Oe(),
              o = Re(),
              a = (t.data[e] = (function (t, e, n, r, s, i) {
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
                  value: s,
                  attrs: i,
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
              })(0, o ? i : i && i.parent, n, e, r, s));
            return (
              null === t.firstChild && (t.firstChild = a),
              null !== i &&
                (o
                  ? null == i.child && null !== a.parent && (i.child = a)
                  : null === i.next && (i.next = a)),
              a
            );
          })(t, e, n, r, s)),
            Se.lFrame.inI18n && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const t = (function () {
            const t = Se.lFrame,
              e = t.currentTNode;
            return t.isParent ? e : e.parent;
          })();
          i.injectorIndex = null === t ? -1 : t.injectorIndex;
        }
        return Ie(i, !0), i;
      }
      function os(t, e, n, r) {
        if (0 === n) return -1;
        const s = e.length;
        for (let i = 0; i < n; i++)
          e.push(r), t.blueprint.push(r), t.data.push(null);
        return s;
      }
      function as(t, e, n) {
        Le(e);
        try {
          const r = t.viewQuery;
          null !== r && Ds(1, r, n);
          const s = t.template;
          null !== s && cs(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && rs(t, e),
            t.staticViewQueries && Ds(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) Is(t, e[n]);
            })(e, i);
        } catch (r) {
          throw (t.firstCreatePass && (t.incompleteFirstPass = !0), r);
        } finally {
          (e[2] &= -5), qe();
        }
      }
      function ls(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        Le(e);
        const i = Ve();
        try {
          be(e),
            (Se.lFrame.bindingIndex = t.bindingStartIndex),
            null !== n && cs(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && Je(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && Ke(e, n, 0, null), Ye(e, 0);
            }
          if (
            ((function (t) {
              for (let e = mr(t); null !== e; e = _r(e)) {
                if (!e[2]) continue;
                const t = e[9];
                for (let e = 0; e < t.length; e++) {
                  const n = t[e],
                    r = n[3];
                  0 == (1024 & n[2]) && Ce(r, 1), (n[2] |= 1024);
                }
              }
            })(e),
            (function (t) {
              for (let e = mr(t); null !== e; e = _r(e))
                for (let t = 10; t < e.length; t++) {
                  const n = e[t],
                    r = n[1];
                  ve(n) && ls(r, n, r.template, n[8]);
                }
            })(e),
            null !== t.contentQueries && rs(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && Je(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && Ke(e, n, 1), Ye(e, 1);
            }
          !(function (t, e) {
            const n = t.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let t = 0; t < n.length; t++) {
                  const r = n[t];
                  if (r < 0) Ze(~r);
                  else {
                    const s = r,
                      i = n[++t],
                      o = n[++t];
                    De(i, s), o(2, e[s]);
                  }
                }
              } finally {
                Ze(-1);
              }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function (t, e) {
              for (let n = 0; n < e.length; n++) ks(t, e[n]);
            })(e, a);
          const l = t.viewQuery;
          if ((null !== l && Ds(2, l, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && Je(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && Ke(e, n, 2), Ye(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
            i || (e[2] &= -73),
            1024 & e[2] && ((e[2] &= -1025), Ce(e[3], -1));
        } finally {
          qe();
        }
      }
      function us(t, e, n, r) {
        const s = e[10],
          i = !Ve(),
          o = 4 == (4 & e[2]);
        try {
          i && !o && s.begin && s.begin(), o && as(t, e, r), ls(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function cs(t, e, n, r, s) {
        const i = Ge(),
          o = 2 & r;
        try {
          Ze(-1), o && e.length > 20 && Jr(t, e, 20, Ve()), n(r, s);
        } finally {
          Ze(i);
        }
      }
      function hs(t, e, n) {
        xe() &&
          ((function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || fn(n, e), cr(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = ne(r);
              i && xs(e, n, r);
              const l = En(e, t, a, n);
              cr(l, e),
                null !== o && Es(0, a - s, l, r, 0, o),
                i && (_e(n.index, e)[8] = l);
            }
          })(t, e, n, ge(n, e)),
          128 == (128 & n.flags) &&
            (function (t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = n.index,
                o = Se.lFrame.currentDirectiveIndex;
              try {
                Ze(i);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  Ne(n),
                    (null === r.hostBindings &&
                      0 === r.hostVars &&
                      null === r.hostAttrs) ||
                      vs(r, s);
                }
              } finally {
                Ze(-1), Ne(o);
              }
            })(t, e, n));
      }
      function ds(t, e, n = ge) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function ps(t) {
        const e = t.tView;
        return null === e || e.incompleteFirstPass
          ? (t.tView = fs(
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
      function fs(t, e, n, r, s, i, o, a, l, u) {
        const c = 20 + r,
          h = c + s,
          d = (function (t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : Wr);
            return n;
          })(c, h),
          p = "function" == typeof u ? u() : u;
        return (d[1] = {
          type: t,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: e,
          data: d.slice().fill(null, c),
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
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: p,
          incompleteFirstPass: !1,
        });
      }
      function gs(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, s)
              : (n[r] = [e, s]);
          }
        return n;
      }
      function ms(t, e, n, r, s, i, o, a) {
        const l = ge(e, n);
        let u,
          c = e.inputs;
        var h;
        !a && null != c && (u = c[r])
          ? (Ls(t, n, u, r, s),
            te(e) &&
              (function (t, e) {
                const n = _e(e, t);
                16 & n[2] || (n[2] |= 64);
              })(n, e.index))
          : 3 & e.type &&
            ((r =
              "class" === (h = r)
                ? "className"
                : "for" === h
                ? "htmlFor"
                : "formaction" === h
                ? "formAction"
                : "innerHtml" === h
                ? "innerHTML"
                : "readonly" === h
                ? "readOnly"
                : "tabindex" === h
                ? "tabIndex"
                : h),
            (s = null != o ? o(s, e.value || "", r) : s),
            he(i)
              ? i.setProperty(l, r, s)
              : sn(r) || (l.setProperty ? l.setProperty(r, s) : (l[r] = s)));
      }
      function _s(t, e, n, r) {
        let s = !1;
        if (xe()) {
          const i = (function (t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  qr(n, o.selectors, !1) &&
                    (s || (s = []),
                    yn(fn(n, e), t, o.type),
                    ne(o) ? (ws(t, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { "": -1 };
          if (null !== i) {
            (s = !0), Cs(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            let r = !1,
              a = !1,
              l = os(t, e, i.length, null);
            for (let s = 0; s < i.length; s++) {
              const u = i[s];
              (n.mergedAttrs = on(n.mergedAttrs, u.hostAttrs)),
                Ss(t, n, e, l, u),
                bs(l, u, o),
                null !== u.contentQueries && (n.flags |= 8),
                (null === u.hostBindings &&
                  null === u.hostAttrs &&
                  0 === u.hostVars) ||
                  (n.flags |= 128);
              const c = u.type.prototype;
              !r &&
                (c.ngOnChanges || c.ngOnInit || c.ngDoCheck) &&
                ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index),
                (r = !0)),
                a ||
                  (!c.ngOnChanges && !c.ngDoCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (a = !0)),
                l++;
            }
            !(function (t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = e.directiveStart; l < n; l++) {
                const t = r[l],
                  n = t.inputs,
                  u = null === s || Lr(e) ? null : As(n, s);
                i.push(u), (o = gs(n, l, o)), (a = gs(t.outputs, l, a));
              }
              null !== o &&
                (o.hasOwnProperty("class") && (e.flags |= 16),
                o.hasOwnProperty("style") && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n);
          }
          o &&
            (function (t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s)
                    throw new ot(
                      "301",
                      `Export of name '${e[t + 1]}' not found!`
                    );
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = on(n.mergedAttrs, n.attrs)), s;
      }
      function ys(t, e, n, r, s, i) {
        const o = i.hostBindings;
        if (o) {
          let n = t.hostBindingOpCodes;
          null === n && (n = t.hostBindingOpCodes = []);
          const i = ~e.index;
          (function (t) {
            let e = t.length;
            for (; e > 0; ) {
              const n = t[--e];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(n) != i && n.push(i),
            n.push(r, s, o);
        }
      }
      function vs(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function ws(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function bs(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          ne(e) && (n[""] = t);
        }
      }
      function Cs(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function Ss(t, e, n, r, s) {
        t.data[r] = s;
        const i = s.factory || (s.factory = re(s.type)),
          o = new en(i, ne(s), null);
        (t.blueprint[r] = o),
          (n[r] = o),
          ys(t, e, 0, r, os(t, n, s.hostVars, Wr), s);
      }
      function xs(t, e, n) {
        const r = ge(e, t),
          s = ps(n),
          i = t[10],
          o = Rs(
            t,
            ss(
              t,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              e,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        t[e.index] = o;
      }
      function Es(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function As(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              t.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, t[s], e[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Ts(t, e, n, r) {
        return new Array(t, !0, !1, e, null, 0, r, n, null, null);
      }
      function ks(t, e) {
        const n = _e(e, t);
        if (ve(n)) {
          const t = n[1];
          80 & n[2] ? ls(t, n, t.template, n[8]) : n[5] > 0 && Os(n);
        }
      }
      function Os(t) {
        for (let n = mr(t); null !== n; n = _r(n))
          for (let t = 10; t < n.length; t++) {
            const e = n[t];
            if (1024 & e[2]) {
              const t = e[1];
              ls(t, e, t.template, e[8]);
            } else e[5] > 0 && Os(e);
          }
        const e = t[1].components;
        if (null !== e)
          for (let n = 0; n < e.length; n++) {
            const r = _e(e[n], t);
            ve(r) && r[5] > 0 && Os(r);
          }
      }
      function Is(t, e) {
        const n = _e(e, t),
          r = n[1];
        !(function (t, e) {
          for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(r, n),
          as(r, n, n[8]);
      }
      function Rs(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function Vs(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = gr(t);
          if (0 != (512 & t[2]) && !e) return t;
          t = e;
        }
        return null;
      }
      function Ps(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          ls(t, e, t.template, n);
        } catch (s) {
          throw (Fs(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function js(t) {
        !(function (t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = ye(n),
              s = r[1];
            us(s, r, s.template, n);
          }
        })(t[8]);
      }
      function Ds(t, e, n) {
        Ue(0), e(t, n);
      }
      const Ns = (() => Promise.resolve(null))();
      function Us(t) {
        return t[7] || (t[7] = []);
      }
      function Ms(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function Fs(t, e) {
        const n = t[9],
          r = n ? n.get(ur, null) : null;
        r && r.handleError(e);
      }
      function Ls(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = e[o],
            u = t.data[o];
          null !== u.setInput ? u.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function Hs(t, e, n) {
        let r = n ? t.styles : null,
          s = n ? t.classes : null,
          i = 0;
        if (null !== e)
          for (let o = 0; o < e.length; o++) {
            const t = e[o];
            "number" == typeof t
              ? (i = t)
              : 1 == i
              ? (s = et(s, t))
              : 2 == i && (r = et(r, t + ": " + e[++o] + ";"));
          }
        n ? (t.styles = r) : (t.stylesWithoutHost = r),
          n ? (t.classes = s) : (t.classesWithoutHost = s);
      }
      const $s = new Vn("INJECTOR", -1);
      class zs {
        get(t, e = Hn) {
          if (e === Hn) {
            const e = new Error(`NullInjectorError: No provider for ${tt(t)}!`);
            throw ((e.name = "NullInjectorError"), e);
          }
          return e;
        }
      }
      const Bs = new Vn("Set Injector scope."),
        qs = {},
        Gs = {},
        Zs = [];
      let Ws;
      function Qs() {
        return void 0 === Ws && (Ws = new zs()), Ws;
      }
      function Js(t, e = null, n = null, r) {
        return new Ks(t, n, e || Qs(), r);
      }
      class Ks {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && Dn(e, (n) => this.processProvider(n, t, e)),
            Dn([t], (t) => this.processInjectorType(t, [], s)),
            this.records.set($s, ti(void 0, this));
          const i = this.records.get(Bs);
          (this.scope = null != i ? i.value : null),
            (this.source = r || ("object" == typeof t ? null : tt(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, e = Hn, n = vt.Default) {
          this.assertNotDestroyed();
          const r = qn(this);
          try {
            if (!(n & vt.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n =
                  ("function" == typeof (s = t) ||
                    ("object" == typeof s && s instanceof Vn)) &&
                  dt(t);
                (e = n && this.injectableDefInScope(n) ? ti(Ys(t), qs) : null),
                  this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & vt.Self ? Qs() : this.parent).get(
              t,
              (e = n & vt.Optional && e === Hn ? null : e)
            );
          } catch (i) {
            if ("NullInjectorError" === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(tt(t)),
                r)
              )
                throw i;
              return (function (t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (
                  (e.__source && s.unshift(e.__source),
                  (t.message = (function (t, e, n, r = null) {
                    t =
                      t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1)
                        ? t.substr(2)
                        : t;
                    let s = tt(e);
                    if (Array.isArray(e)) s = e.map(tt).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(
                            n +
                              ":" +
                              ("string" == typeof r ? JSON.stringify(r) : tt(r))
                          );
                        }
                      s = `{${t.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${t.replace(
                      $n,
                      "\n  "
                    )}`;
                  })("\n" + t.message, s, n, r)),
                  (t.ngTokenPath = s),
                  (t.ngTempTokenPath = null),
                  t)
                );
              })(i, t, "R3InjectorError", this.source);
            }
            throw i;
          } finally {
            qn(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((e, n) => t.push(tt(n))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(t, e, n) {
          if (!(t = st(t))) return !1;
          let r = ft(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = ft(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let t;
            n.push(i);
            try {
              Dn(r.imports, (r) => {
                this.processInjectorType(r, e, n) &&
                  (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                Dn(r, (t) => this.processProvider(t, n, r || Zs));
              }
          }
          this.injectorDefTypes.add(i);
          const a = re(i) || (() => new i());
          this.records.set(i, ti(a, qs));
          const l = r.providers;
          if (null != l && !o) {
            const e = t;
            Dn(l, (t) => this.processProvider(t, e, l));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = ni((t = st(t))) ? t : st(t && t.provide);
          const s = (function (t, e, n) {
            return ei(t) ? ti(void 0, t.useValue) : ti(Xs(t), qs);
          })(t);
          if (ni(t) || !0 !== t.multi) this.records.get(r);
          else {
            let e = this.records.get(r);
            e ||
              ((e = ti(void 0, qs, !0)),
              (e.factory = () => Qn(e.multi)),
              this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === qs && ((e.value = Gs), (e.value = e.factory())),
            "object" == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              "object" == typeof n &&
              "function" == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ("string" == typeof t.providedIn
              ? "any" === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function Ys(t) {
        const e = dt(t),
          n = null !== e ? e.factory : re(t);
        if (null !== n) return n;
        if (t instanceof Vn)
          throw new Error(`Token ${tt(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function (t) {
            const e = t.length;
            if (e > 0) {
              const n = (function (t, e) {
                const n = [];
                for (let r = 0; r < t; r++) n.push("?");
                return n;
              })(e);
              throw new Error(
                `Can't resolve all parameters for ${tt(t)}: (${n.join(", ")}).`
              );
            }
            const n = (function (t) {
              const e = t && (t[gt] || t[_t]);
              if (e) {
                const n = (function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error("unreachable");
      }
      function Xs(t, e, n) {
        let r;
        if (ni(t)) {
          const e = st(t);
          return re(e) || Ys(e);
        }
        if (ei(t)) r = () => st(t.useValue);
        else if ((s = t) && s.useFactory)
          r = () => t.useFactory(...Qn(t.deps || []));
        else if (
          (function (t) {
            return !(!t || !t.useExisting);
          })(t)
        )
          r = () => Zn(st(t.useExisting));
        else {
          const e = st(t && (t.useClass || t.provide));
          if (
            !(function (t) {
              return !!t.deps;
            })(t)
          )
            return re(e) || Ys(e);
          r = () => new e(...Qn(t.deps));
        }
        var s;
        return r;
      }
      function ti(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function ei(t) {
        return null !== t && "object" == typeof t && zn in t;
      }
      function ni(t) {
        return "function" == typeof t;
      }
      const ri = function (t, e, n) {
        return (function (t, e = null, n = null, r) {
          const s = Js(t, e, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, e, t, n);
      };
      let si = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t)
              ? ri(t, e, "")
              : ri(t.providers, t.parent, t.name || "");
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Hn),
          (t.NULL = new zs()),
          (t.ɵprov = ct({
            token: t,
            providedIn: "any",
            factory: () => Zn($s),
          })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      function ii(t, e) {
        Qe(ye(t)[1], ke());
      }
      function oi(t) {
        let e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0;
        const r = [t];
        for (; e; ) {
          let s;
          if (ne(t)) s = e.ɵcmp || e.ɵdir;
          else {
            if (e.ɵcmp) throw new Error("Directives cannot inherit Components");
            s = e.ɵdir;
          }
          if (s) {
            if (n) {
              r.push(s);
              const e = t;
              (e.inputs = ai(t.inputs)),
                (e.declaredInputs = ai(t.declaredInputs)),
                (e.outputs = ai(t.outputs));
              const n = s.hostBindings;
              n && ci(t, n);
              const i = s.viewQuery,
                o = s.contentQueries;
              if (
                (i && li(t, i),
                o && ui(t, o),
                X(t.inputs, s.inputs),
                X(t.declaredInputs, s.declaredInputs),
                X(t.outputs, s.outputs),
                ne(s) && s.data.animation)
              ) {
                const e = t.data;
                e.animation = (e.animation || []).concat(s.data.animation);
              }
            }
            const e = s.features;
            if (e)
              for (let r = 0; r < e.length; r++) {
                const s = e[r];
                s && s.ngInherit && s(t), s === oi && (n = !1);
              }
          }
          e = Object.getPrototypeOf(e);
        }
        !(function (t) {
          let e = 0,
            n = null;
          for (let r = t.length - 1; r >= 0; r--) {
            const s = t[r];
            (s.hostVars = e += s.hostVars),
              (s.hostAttrs = on(s.hostAttrs, (n = on(n, s.hostAttrs))));
          }
        })(r);
      }
      function ai(t) {
        return t === Rt ? {} : t === Pt ? [] : t;
      }
      function li(t, e) {
        const n = t.viewQuery;
        t.viewQuery = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      function ui(t, e) {
        const n = t.contentQueries;
        t.contentQueries = n
          ? (t, r, s) => {
              e(t, r, s), n(t, r, s);
            }
          : e;
      }
      function ci(t, e) {
        const n = t.hostBindings;
        t.hostBindings = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      let hi = null;
      function di() {
        if (!hi) {
          const t = It.Symbol;
          if (t && t.iterator) hi = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (hi = n);
            }
          }
        }
        return hi;
      }
      function pi(t) {
        return (
          !!fi(t) && (Array.isArray(t) || (!(t instanceof Map) && di() in t))
        );
      }
      function fi(t) {
        return null !== t && ("function" == typeof t || "object" == typeof t);
      }
      function gi(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function mi(t, e, n, r) {
        const s = Ee();
        return (
          gi(s, je(), e) &&
            (Ae(),
            (function (t, e, n, r, s, i) {
              const o = ge(t, e);
              !(function (t, e, n, r, s, i, o) {
                if (null == i)
                  he(t) ? t.removeAttribute(e, s, n) : e.removeAttribute(s);
                else {
                  const a = null == o ? at(i) : o(i, r || "", s);
                  he(t)
                    ? t.setAttribute(e, s, a, n)
                    : n
                    ? e.setAttributeNS(n, s, a)
                    : e.setAttribute(s, a);
                }
              })(e[11], o, i, t.value, n, r, s);
            })(We(), s, t, e, n, r)),
          mi
        );
      }
      function _i(t, e, n, r) {
        return gi(t, je(), n) ? e + at(n) + r : Wr;
      }
      function yi(t, e, n, r, s, i, o, a) {
        const l = Ee(),
          u = Ae(),
          c = t + 20,
          h = u.firstCreatePass
            ? (function (t, e, n, r, s, i, o, a, l) {
                const u = e.consts,
                  c = is(e, t, 4, o || null, we(u, a));
                _s(e, n, c, we(u, l)), Qe(e, c);
                const h = (c.tViews = fs(
                  2,
                  c,
                  r,
                  s,
                  i,
                  e.directiveRegistry,
                  e.pipeRegistry,
                  null,
                  e.schemas,
                  u
                ));
                return (
                  null !== e.queries &&
                    (e.queries.template(e, c),
                    (h.queries = e.queries.embeddedTView(c))),
                  c
                );
              })(c, u, l, e, n, r, s, i, o)
            : u.data[c];
        Ie(h, !1);
        const d = l[11].createComment("");
        Or(u, l, d, h),
          cr(d, l),
          Rs(l, (l[c] = Ts(d, l, d, h))),
          ee(h) && hs(u, l, h),
          null != o && ds(l, h, a);
      }
      function vi(t, e = vt.Default) {
        const n = Ee();
        return null === n ? Zn(t, e) : bn(ke(), n, st(t), e);
      }
      function wi(t, e, n) {
        const r = Ee();
        return gi(r, je(), e) && ms(Ae(), We(), r, t, e, r[11], n, !1), wi;
      }
      function bi(t, e, n, r, s) {
        const i = s ? "class" : "style";
        Ls(t, n, e.inputs[i], i, r);
      }
      function Ci(t, e, n, r) {
        const s = Ee(),
          i = Ae(),
          o = 20 + t,
          a = s[11],
          l = (s[o] = wr(a, e, Se.lFrame.currentNamespace)),
          u = i.firstCreatePass
            ? (function (t, e, n, r, s, i, o) {
                const a = e.consts,
                  l = is(e, t, 2, s, we(a, i));
                return (
                  _s(e, n, l, we(a, o)),
                  null !== l.attrs && Hs(l, l.attrs, !1),
                  null !== l.mergedAttrs && Hs(l, l.mergedAttrs, !0),
                  null !== e.queries && e.queries.elementStart(e, l),
                  l
                );
              })(o, i, s, 0, e, n, r)
            : i.data[o];
        Ie(u, !0);
        const c = u.mergedAttrs;
        null !== c && nn(a, l, c);
        const h = u.classes;
        null !== h && Ur(a, l, h);
        const d = u.styles;
        null !== d && Nr(a, l, d),
          64 != (64 & u.flags) && Or(i, s, l, u),
          0 === Se.lFrame.elementDepthCount && cr(l, s),
          Se.lFrame.elementDepthCount++,
          ee(u) &&
            (hs(i, s, u),
            (function (t, e, n) {
              if (Xt(e)) {
                const r = e.directiveEnd;
                for (let s = e.directiveStart; s < r; s++) {
                  const e = t.data[s];
                  e.contentQueries && e.contentQueries(1, n[s], s);
                }
              }
            })(i, u, s)),
          null !== r && ds(s, u);
      }
      function Si() {
        let t = ke();
        Re() ? (Se.lFrame.isParent = !1) : ((t = t.parent), Ie(t, !1));
        const e = t;
        Se.lFrame.elementDepthCount--;
        const n = Ae();
        n.firstCreatePass && (Qe(n, t), Xt(t) && n.queries.elementEnd(t)),
          null != e.classesWithoutHost &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            bi(n, e, Ee(), e.classesWithoutHost, !0),
          null != e.stylesWithoutHost &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            bi(n, e, Ee(), e.stylesWithoutHost, !1);
      }
      function xi(t, e, n, r) {
        Ci(t, e, n, r), Si();
      }
      function Ei(t) {
        return !!t && "function" == typeof t.then;
      }
      const Ai = function (t) {
        return !!t && "function" == typeof t.subscribe;
      };
      function Ti(t, e, n = !1, r) {
        const s = Ee(),
          i = Ae(),
          o = ke();
        return (
          (function (t, e, n, r, s, i, o = !1, a) {
            const l = ee(r),
              u = t.firstCreatePass && Ms(t),
              c = Us(e);
            let h = !0;
            if (3 & r.type) {
              const d = ge(r, e),
                p = a ? a(d) : Rt,
                f = p.target || d,
                g = c.length,
                m = a ? (t) => a(pe(t[r.index])).target : r.index;
              if (he(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function (t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          "string" == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                    (o.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = Oi(r, e, 0, i, !1);
                  const t = n.listen(p.name || f, s, i);
                  c.push(i, t), u && u.push(s, m, g, g + 1);
                }
              } else
                (i = Oi(r, e, 0, i, !0)),
                  f.addEventListener(s, i, o),
                  c.push(i),
                  u && u.push(s, m, g, o);
            } else i = Oi(r, e, 0, i, !1);
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = c.length;
                  c.push(i, t), u && u.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, n, r),
          Ti
        );
      }
      function ki(t, e, n, r) {
        try {
          return !1 !== n(r);
        } catch (s) {
          return Fs(t, s), !1;
        }
      }
      function Oi(t, e, n, r, s) {
        return function n(i) {
          if (i === Function) return r;
          const o = 2 & t.flags ? _e(t.index, e) : e;
          0 == (32 & e[2]) && Vs(o);
          let a = ki(e, 0, r, i),
            l = n.__ngNextListenerFn__;
          for (; l; ) (a = ki(e, 0, l, i) && a), (l = l.__ngNextListenerFn__);
          return s && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function Ii(t = 1) {
        return (function (t) {
          return (Se.lFrame.contextLView = (function (t, e) {
            for (; t > 0; ) (e = e[15]), t--;
            return e;
          })(t, Se.lFrame.contextLView))[8];
        })(t);
      }
      function Ri(t, e, n, r, s) {
        const i = Ee(),
          o = _i(i, e, n, r);
        return o !== Wr && ms(Ae(), We(), i, t, o, i[11], s, !1), Ri;
      }
      function Vi(t, e, n, r, s) {
        const i = t[n + 1],
          o = null === e;
        let a = r ? Yr(i) : ts(i),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const n = t[a + 1];
          Pi(t[a], e) && ((l = !0), (t[a + 1] = r ? ns(n) : Xr(n))),
            (a = r ? Yr(n) : ts(n));
        }
        l && (t[n + 1] = r ? Xr(i) : ns(i));
      }
      function Pi(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || "string" != typeof e) && Ln(t, e) >= 0)
        );
      }
      function ji(t, e) {
        return (
          (function (t, e, n, r) {
            const s = Ee(),
              i = Ae(),
              o = (function (t) {
                const e = Se.lFrame,
                  n = e.bindingIndex;
                return (e.bindingIndex = e.bindingIndex + 2), n;
              })();
            i.firstUpdatePass &&
              (function (t, e, n, r) {
                const s = t.data;
                if (null === s[n + 1]) {
                  const r = s[Ge()],
                    i = (function (t, e) {
                      return e >= t.expandoStartIndex;
                    })(t, n);
                  (function (t, e) {
                    return 0 != (16 & t.flags);
                  })(r) &&
                    null === e &&
                    !i &&
                    (e = !1),
                    (e = (function (t, e, n, r) {
                      const s = (function (t) {
                        const e = Se.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e];
                      })(t);
                      let i = e.residualClasses;
                      if (null === s)
                        0 === e.classBindings &&
                          ((n = Ni(
                            (n = Di(null, t, e, n, true)),
                            e.attrs,
                            true
                          )),
                          (i = null));
                      else {
                        const r = e.directiveStylingLast;
                        if (-1 === r || t[r] !== s)
                          if (((n = Di(s, t, e, n, true)), null === i)) {
                            let n = (function (t, e, n) {
                              const r = e.classBindings;
                              if (0 !== ts(r)) return t[Yr(r)];
                            })(t, e);
                            void 0 !== n &&
                              Array.isArray(n) &&
                              ((n = Di(null, t, e, n[1], true)),
                              (n = Ni(n, e.attrs, true)),
                              (function (t, e, n, r) {
                                t[Yr(e.classBindings)] = r;
                              })(t, e, 0, n));
                          } else
                            i = (function (t, e, n) {
                              let r;
                              const s = e.directiveEnd;
                              for (
                                let i = 1 + e.directiveStylingLast;
                                i < s;
                                i++
                              )
                                r = Ni(r, t[i].hostAttrs, true);
                              return Ni(r, e.attrs, true);
                            })(t, e);
                      }
                      return void 0 !== i && (e.residualClasses = i), n;
                    })(s, r, e)),
                    (function (t, e, n, r, s, i) {
                      let o = e.classBindings,
                        a = Yr(o),
                        l = ts(o);
                      t[r] = n;
                      let u,
                        c = !1;
                      if (Array.isArray(n)) {
                        const t = n;
                        (u = t[1]), (null === u || Ln(t, u) > 0) && (c = !0);
                      } else u = n;
                      if (s)
                        if (0 !== l) {
                          const e = Yr(t[a + 1]);
                          (t[r + 1] = Kr(e, a)),
                            0 !== e && (t[e + 1] = es(t[e + 1], r)),
                            (t[a + 1] = (131071 & t[a + 1]) | (r << 17));
                        } else
                          (t[r + 1] = Kr(a, 0)),
                            0 !== a && (t[a + 1] = es(t[a + 1], r)),
                            (a = r);
                      else
                        (t[r + 1] = Kr(l, 0)),
                          0 === a ? (a = r) : (t[l + 1] = es(t[l + 1], r)),
                          (l = r);
                      c && (t[r + 1] = Xr(t[r + 1])),
                        Vi(t, u, r, !0),
                        Vi(t, u, r, !1),
                        (function (t, e, n, r, s) {
                          const i = t.residualClasses;
                          null != i &&
                            "string" == typeof e &&
                            Ln(i, e) >= 0 &&
                            (n[r + 1] = ns(n[r + 1]));
                        })(e, u, t, r),
                        (o = Kr(a, l)),
                        (e.classBindings = o);
                    })(s, r, e, n, i);
                }
              })(i, t, o),
              e !== Wr &&
                gi(s, o, e) &&
                (function (t, e, n, r, s, i, o, a) {
                  if (!(3 & e.type)) return;
                  const l = t.data,
                    u = l[a + 1];
                  Mi(1 == (1 & u) ? Ui(l, e, n, s, ts(u), true) : void 0) ||
                    (Mi(i) ||
                      ((function (t) {
                        return 2 == (2 & t);
                      })(u) &&
                        (i = Ui(l, null, n, s, a, true))),
                    (function (t, e, n, r, s) {
                      const i = he(t);
                      s
                        ? i
                          ? t.addClass(n, r)
                          : n.classList.add(r)
                        : i
                        ? t.removeClass(n, r)
                        : n.classList.remove(r);
                    })(r, 0, fe(Ge(), n), s, i));
                })(
                  i,
                  i.data[Ge()],
                  s,
                  s[11],
                  t,
                  (s[o + 1] = (function (t, e) {
                    return (
                      null == t || ("object" == typeof t && (t = tt(er(t)))), t
                    );
                  })(e)),
                  0,
                  o
                );
          })(t, e),
          ji
        );
      }
      function Di(t, e, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((i = e[a]), (r = Ni(r, i.hostAttrs, s)), i !== t);

        )
          a++;
        return null !== t && (n.directiveStylingLast = a), r;
      }
      function Ni(t, e, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            "number" == typeof o
              ? (s = o)
              : s === r &&
                (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]),
                Mn(t, o, !!n || e[++i]));
          }
        return void 0 === t ? null : t;
      }
      function Ui(t, e, n, r, s, i) {
        const o = null === e;
        let a;
        for (; s > 0; ) {
          const e = t[s],
            i = Array.isArray(e),
            l = i ? e[1] : e,
            u = null === l;
          let c = n[s + 1];
          c === Wr && (c = u ? Vt : void 0);
          let h = u ? Fn(c, r) : l === r ? c : void 0;
          if ((i && !Mi(h) && (h = Fn(e, r)), Mi(h) && ((a = h), o))) return a;
          const d = t[s + 1];
          s = o ? Yr(d) : ts(d);
        }
        if (null !== e) {
          let t = i ? e.residualClasses : e.residualStyles;
          null != t && (a = Fn(t, r));
        }
        return a;
      }
      function Mi(t) {
        return void 0 !== t;
      }
      function Fi(t, e = "") {
        const n = Ee(),
          r = Ae(),
          s = t + 20,
          i = r.firstCreatePass ? is(r, s, 1, e, null) : r.data[s],
          o = (n[s] = (function (t, e) {
            return he(t) ? t.createText(e) : t.createTextNode(e);
          })(n[11], e));
        Or(r, n, o, i), Ie(i, !1);
      }
      function Li(t) {
        return Hi("", t, ""), Li;
      }
      function Hi(t, e, n) {
        const r = Ee(),
          s = _i(r, t, e, n);
        return (
          s !== Wr &&
            (function (t, e, n) {
              const r = fe(e, t);
              !(function (t, e, n) {
                he(t) ? t.setValue(e, n) : (e.textContent = n);
              })(t[11], r, n);
            })(r, Ge(), s),
          Hi
        );
      }
      function $i(t, e, n) {
        const r = Ee();
        return gi(r, je(), e) && ms(Ae(), We(), r, t, e, r[11], n, !0), $i;
      }
      const zi = void 0;
      var Bi = [
        "en",
        [["a", "p"], ["AM", "PM"], zi],
        [["AM", "PM"], zi, zi],
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
        zi,
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
        zi,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", zi, "{1} 'at' {0}", zi],
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
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === e && 0 === n ? 1 : 5;
        },
      ];
      let qi = {};
      function Gi(t) {
        return (
          t in qi ||
            (qi[t] =
              It.ng &&
              It.ng.common &&
              It.ng.common.locales &&
              It.ng.common.locales[t]),
          qi[t]
        );
      }
      var Zi = (function (t) {
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
      let Wi = "en-US";
      function Qi(t) {
        var e, n;
        (n = "Expected localeId to be defined"),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                `ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`
              );
            })(n, e),
          "string" == typeof t && (Wi = t.toLowerCase().replace(/_/g, "-"));
      }
      function Ji(t, e, n, r, s) {
        if (((t = st(t)), Array.isArray(t)))
          for (let i = 0; i < t.length; i++) Ji(t[i], e, n, r, s);
        else {
          const i = Ae(),
            o = Ee();
          let a = ni(t) ? t : st(t.provide),
            l = Xs(t);
          const u = ke(),
            c = 1048575 & u.providerIndexes,
            h = u.directiveStart,
            d = u.providerIndexes >> 20;
          if (ni(t) || !t.multi) {
            const r = new en(l, s, vi),
              p = Xi(a, e, s ? c : c + d, h);
            -1 === p
              ? (yn(fn(u, o), i, a),
                Ki(i, t, e.length),
                e.push(a),
                u.directiveStart++,
                u.directiveEnd++,
                s && (u.providerIndexes += 1048576),
                n.push(r),
                o.push(r))
              : ((n[p] = r), (o[p] = r));
          } else {
            const p = Xi(a, e, c + d, h),
              f = Xi(a, e, c, c + d),
              g = p >= 0 && n[p],
              m = f >= 0 && n[f];
            if ((s && !m) || (!s && !g)) {
              yn(fn(u, o), i, a);
              const c = (function (t, e, n, r, s) {
                const i = new en(t, n, vi);
                return (
                  (i.multi = []),
                  (i.index = e),
                  (i.componentProviders = 0),
                  Yi(i, s, r && !n),
                  i
                );
              })(s ? eo : to, n.length, s, r, l);
              !s && m && (n[f].providerFactory = c),
                Ki(i, t, e.length, 0),
                e.push(a),
                u.directiveStart++,
                u.directiveEnd++,
                s && (u.providerIndexes += 1048576),
                n.push(c),
                o.push(c);
            } else Ki(i, t, p > -1 ? p : f, Yi(n[s ? f : p], l, !s && r));
            !s && r && m && n[f].componentProviders++;
          }
        }
      }
      function Ki(t, e, n, r) {
        const s = ni(e);
        if (s || e.useClass) {
          const i = (e.useClass || e).prototype.ngOnDestroy;
          if (i) {
            const o = t.destroyHooks || (t.destroyHooks = []);
            if (!s && e.multi) {
              const t = o.indexOf(n);
              -1 === t ? o.push(n, [r, i]) : o[t + 1].push(r, i);
            } else o.push(n, i);
          }
        }
      }
      function Yi(t, e, n) {
        return n && t.componentProviders++, t.multi.push(e) - 1;
      }
      function Xi(t, e, n, r) {
        for (let s = n; s < r; s++) if (e[s] === t) return s;
        return -1;
      }
      function to(t, e, n, r) {
        return no(this.multi, []);
      }
      function eo(t, e, n, r) {
        const s = this.multi;
        let i;
        if (this.providerFactory) {
          const t = this.providerFactory.componentProviders,
            e = En(n, n[1], this.providerFactory.index, r);
          (i = e.slice(0, t)), no(s, i);
          for (let n = t; n < e.length; n++) i.push(e[n]);
        } else (i = []), no(s, i);
        return i;
      }
      function no(t, e) {
        for (let n = 0; n < t.length; n++) e.push((0, t[n])());
        return e;
      }
      function ro(t, e = []) {
        return (n) => {
          n.providersResolver = (n, r) =>
            (function (t, e, n) {
              const r = Ae();
              if (r.firstCreatePass) {
                const s = ne(t);
                Ji(n, r.data, r.blueprint, s, !0),
                  Ji(e, r.data, r.blueprint, s, !1);
              }
            })(n, r ? r(t) : t, e);
        };
      }
      class so {}
      class io {
        resolveComponentFactory(t) {
          throw (function (t) {
            const e = Error(
              `No component factory found for ${tt(
                t
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let oo = (() => {
        class t {}
        return (t.NULL = new io()), t;
      })();
      function ao(...t) {}
      function lo(t, e) {
        return new co(ge(t, e));
      }
      const uo = function () {
        return lo(ke(), Ee());
      };
      let co = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (t.__NG_ELEMENT_ID__ = uo), t;
      })();
      class ho {}
      let po = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => fo()), t;
      })();
      const fo = function () {
        const t = Ee(),
          e = _e(ke().index, t);
        return (function (t) {
          return t[11];
        })(Kt(e) ? e : t);
      };
      let go = (() => {
        class t {}
        return (
          (t.ɵprov = ct({ token: t, providedIn: "root", factory: () => null })),
          t
        );
      })();
      class mo {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const _o = new mo("11.2.9");
      class yo {
        constructor() {}
        supports(t) {
          return pi(t);
        }
        create(t) {
          return new wo(t);
        }
      }
      const vo = (t, e) => e;
      class wo {
        constructor(t) {
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
            (this._trackByFn = t || vo);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < xo(n, r, s)) ? e : n,
              o = xo(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (
            e = this._identityChangesHead;
            null !== e;
            e = e._nextIdentityChange
          )
            t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !pi(t)))
            throw new Error(
              `Error trying to diff '${tt(
                t
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Object.is(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)),
                    Object.is(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[di()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== s && Object.is(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)),
                      Object.is(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
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
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(n, null))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._reinsertAfter(t, s, r))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(n, r))
              ? (Object.is(t.item, e) || this._addIdentityChange(t, e),
                this._moveAfter(t, s, r))
              : (t = this._addAfter(new bo(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return (
            this._unlink(t),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new So()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return (
            null === e ? (this._itHead = n) : (e._next = n),
            null === n ? (this._itTail = e) : (n._prev = e),
            t
          );
        }
        _addToMoves(t, e) {
          return (
            t.previousIndex === e ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new So()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class bo {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
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
        }
      }
      class Co {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === e || e <= n.currentIndex) &&
              Object.is(n.trackById, t)
            )
              return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class So {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new Co()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function xo(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class Eo {
        constructor() {}
        supports(t) {
          return t instanceof Map || fi(t);
        }
        create() {
          return new Ao();
        }
      }
      class Ao {
        constructor() {
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
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || fi(t)))
              throw new Error(
                `Error trying to diff '${tt(
                  t
                )}'. Only maps and objects are allowed`
              );
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n)
                this._maybeAddToChanges(e, t),
                  (this._appendAfter = e),
                  (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
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
              ? ((this._appendAfter._next = e), (e._prev = this._appendAfter))
              : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new To(t);
          return (
            this._records.set(t, n),
            (n.currentValue = e),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Object.is(e, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = e),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map
            ? t.forEach(e)
            : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class To {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function ko() {
        return new Oo([new yo()]);
      }
      let Oo = (() => {
        class t {
          constructor(t) {
            this.factories = t;
          }
          static create(e, n) {
            if (null != n) {
              const t = n.factories.slice();
              e = e.concat(t);
            }
            return new t(e);
          }
          static extend(e) {
            return {
              provide: t,
              useFactory: (n) => t.create(e, n || ko()),
              deps: [[t, new Xn(), new Yn()]],
            };
          }
          find(t) {
            const e = this.factories.find((e) => e.supports(t));
            if (null != e) return e;
            throw new Error(
              `Cannot find a differ supporting object '${t}' of type '${
                ((n = t), n.name || typeof n)
              }'`
            );
            var n;
          }
        }
        return (t.ɵprov = ct({ token: t, providedIn: "root", factory: ko })), t;
      })();
      function Io() {
        return new Ro([new Eo()]);
      }
      let Ro = (() => {
        class t {
          constructor(t) {
            this.factories = t;
          }
          static create(e, n) {
            if (n) {
              const t = n.factories.slice();
              e = e.concat(t);
            }
            return new t(e);
          }
          static extend(e) {
            return {
              provide: t,
              useFactory: (n) => t.create(e, n || Io()),
              deps: [[t, new Xn(), new Yn()]],
            };
          }
          find(t) {
            const e = this.factories.find((e) => e.supports(t));
            if (e) return e;
            throw new Error(`Cannot find a differ supporting object '${t}'`);
          }
        }
        return (t.ɵprov = ct({ token: t, providedIn: "root", factory: Io })), t;
      })();
      function Vo(t, e, n, r, s = !1) {
        for (; null !== n; ) {
          const i = e[n.index];
          if ((null !== i && r.push(pe(i)), Yt(i)))
            for (let t = 10; t < i.length; t++) {
              const e = i[t],
                n = e[1].firstChild;
              null !== n && Vo(e[1], e, n, r);
            }
          const o = n.type;
          if (8 & o) Vo(t, e, n.child, r);
          else if (32 & o) {
            const t = fr(n, e);
            let s;
            for (; (s = t()); ) r.push(s);
          } else if (16 & o) {
            const t = Rr(e, n);
            if (Array.isArray(t)) r.push(...t);
            else {
              const n = gr(e[16]);
              Vo(n[1], n, t, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class Po {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            e = t[1];
          return Vo(e, t, e.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Yt(t)) {
              const e = t[8],
                n = e ? e.indexOf(this) : -1;
              n > -1 && (Cr(t, n), Un(e, n));
            }
            this._attachedToViewContainer = !1;
          }
          Sr(this._lView[1], this._lView);
        }
        onDestroy(t) {
          !(function (t, e, n, r) {
            const s = Us(e);
            s.push(r);
          })(0, this._lView, 0, t);
        }
        markForCheck() {
          Vs(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Ps(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (t, e, n) {
            Pe(!0);
            try {
              Ps(t, e, n);
            } finally {
              Pe(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null),
            jr(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = t;
        }
      }
      class jo extends Po {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          js(this._view);
        }
        checkNoChanges() {
          !(function (t) {
            Pe(!0);
            try {
              js(t);
            } finally {
              Pe(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const Do = function (t = !1) {
        return (function (t, e, n) {
          if (!n && te(t)) {
            const n = _e(t.index, e);
            return new Po(n, n);
          }
          return 47 & t.type ? new Po(e[16], e) : null;
        })(ke(), Ee(), t);
      };
      let No = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Do), (t.__ChangeDetectorRef__ = !0), t;
      })();
      const Uo = [new Eo()],
        Mo = new Oo([new yo()]),
        Fo = new Ro(Uo),
        Lo = function () {
          return Bo(ke(), Ee());
        };
      let Ho = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Lo), t;
      })();
      const $o = Ho,
        zo = class extends $o {
          constructor(t, e, n) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = e),
              (this.elementRef = n);
          }
          createEmbeddedView(t) {
            const e = this._declarationTContainer.tViews,
              n = ss(
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
            n[17] = this._declarationLView[this._declarationTContainer.index];
            const r = this._declarationLView[19];
            return (
              null !== r && (n[19] = r.createEmbeddedView(e)),
              as(e, n, t),
              new Po(n)
            );
          }
        };
      function Bo(t, e) {
        return 4 & t.type ? new zo(e, t, lo(t, e)) : null;
      }
      class qo {}
      class Go {}
      const Zo = function () {
        return (function (t, e) {
          let n;
          const r = e[t.index];
          if (Yt(r)) n = r;
          else {
            let s;
            if (8 & t.type) s = pe(r);
            else {
              const n = e[11];
              s = n.createComment("");
              const r = ge(t, e);
              Er(
                n,
                kr(n, r),
                s,
                (function (t, e) {
                  return he(t) ? t.nextSibling(e) : e.nextSibling;
                })(n, r),
                !1
              );
            }
            (e[t.index] = n = Ts(r, e, s, t)), Rs(e, n);
          }
          return new Jo(n, t, e);
        })(ke(), Ee());
      };
      let Wo = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Zo), t;
      })();
      const Qo = Wo,
        Jo = class extends Qo {
          constructor(t, e, n) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = e),
              (this._hostLView = n);
          }
          get element() {
            return lo(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new kn(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = _n(this._hostTNode, this._hostLView);
            if (ln(t)) {
              const e = cn(t, this._hostLView),
                n = un(t);
              return new kn(e[1].data[n + 8], e);
            }
            return new kn(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const e = Ko(this._lContainer);
            return (null !== e && e[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, e, n) {
            const r = t.createEmbeddedView(e || {});
            return this.insert(r, n), r;
          }
          createComponent(t, e, n, r, s) {
            const i = n || this.parentInjector;
            if (!s && null == t.ngModule && i) {
              const t = i.get(qo, null);
              t && (s = t);
            }
            const o = t.create(i, r, void 0, s);
            return this.insert(o.hostView, e), o;
          }
          insert(t, e) {
            const n = t._lView,
              r = n[1];
            if (Yt(n[3])) {
              const e = this.indexOf(t);
              if (-1 !== e) this.detach(e);
              else {
                const e = n[3],
                  r = new Jo(e, e[6], e[3]);
                r.detach(r.indexOf(t));
              }
            }
            const s = this._adjustIndex(e),
              i = this._lContainer;
            !(function (t, e, n, r) {
              const s = 10 + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = e),
                r < i - 10
                  ? ((e[4] = n[s]), Nn(n, 10 + r, e))
                  : (n.push(e), (e[4] = null)),
                (e[3] = n);
              const o = e[17];
              null !== o &&
                n !== o &&
                (function (t, e) {
                  const n = t[9];
                  e[16] !== e[3][3][16] && (t[2] = !0),
                    null === n ? (t[9] = [e]) : n.push(e);
                })(o, e);
              const a = e[19];
              null !== a && a.insertView(t), (e[2] |= 128);
            })(r, n, i, s);
            const o = Vr(s, i),
              a = n[11],
              l = kr(a, i[7]);
            return (
              null !== l &&
                (function (t, e, n, r, s, i) {
                  (r[0] = s), (r[6] = e), jr(t, r, n, 1, s, i);
                })(r, i[6], a, n, l, o),
              t.attachToViewContainerRef(),
              Nn(Yo(i), s, t),
              t
            );
          }
          move(t, e) {
            return this.insert(t, e);
          }
          indexOf(t) {
            const e = Ko(this._lContainer);
            return null !== e ? e.indexOf(t) : -1;
          }
          remove(t) {
            const e = this._adjustIndex(t, -1),
              n = Cr(this._lContainer, e);
            n && (Un(Yo(this._lContainer), e), Sr(n[1], n));
          }
          detach(t) {
            const e = this._adjustIndex(t, -1),
              n = Cr(this._lContainer, e);
            return n && null != Un(Yo(this._lContainer), e) ? new Po(n) : null;
          }
          _adjustIndex(t, e = 0) {
            return null == t ? this.length + e : t;
          }
        };
      function Ko(t) {
        return t[8];
      }
      function Yo(t) {
        return t[8] || (t[8] = []);
      }
      const Xo = {};
      class ta extends oo {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const e = Qt(t);
          return new ra(e, this.ngModule);
        }
      }
      function ea(t) {
        const e = [];
        for (let n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const na = new Vn("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => hr,
      });
      class ra extends so {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(Zr).join(",")),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return ea(this.componentDef.inputs);
        }
        get outputs() {
          return ea(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, Xo, s);
                      return i !== Xo || r === Xo ? i : e.get(n, r, s);
                    },
                  };
                })(t, r.injector)
              : t,
            i = s.get(ho, de),
            o = s.get(go, null),
            a = i.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || "div",
            u = n
              ? (function (t, e, n) {
                  if (he(t)) return t.selectRootElement(e, n === Et.ShadowDom);
                  let r = "string" == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ""), r;
                })(a, n, this.componentDef.encapsulation)
              : wr(
                  i.createRenderer(null, this.componentDef),
                  l,
                  (function (t) {
                    const e = t.toLowerCase();
                    return "svg" === e
                      ? "http://www.w3.org/2000/svg"
                      : "math" === e
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(l)
                ),
            c = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: hr,
              clean: Ns,
              playerHandler: null,
              flags: 0,
            },
            d = fs(0, null, null, 1, 0, null, null, null, null, null),
            p = ss(null, d, h, c, null, null, i, a, o, s);
          let f, g;
          Le(p);
          try {
            const t = (function (t, e, n, r, s, i) {
              const o = n[1];
              n[20] = t;
              const a = is(o, 20, 2, "#host", null),
                l = (a.mergedAttrs = e.hostAttrs);
              null !== l &&
                (Hs(a, l, !0),
                null !== t &&
                  (nn(s, t, l),
                  null !== a.classes && Ur(s, t, a.classes),
                  null !== a.styles && Nr(s, t, a.styles)));
              const u = r.createRenderer(t, e),
                c = ss(
                  n,
                  ps(e),
                  null,
                  e.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  u,
                  null,
                  null
                );
              return (
                o.firstCreatePass &&
                  (yn(fn(a, n), o, e.type), ws(o, a), Cs(a, n.length, 1)),
                Rs(n, c),
                (n[20] = c)
              );
            })(u, this.componentDef, p, i, a);
            if (u)
              if (n) nn(a, u, ["ng-version", _o.full]);
              else {
                const { attrs: t, classes: e } = (function (t) {
                  const e = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < t.length; ) {
                    let i = t[r];
                    if ("string" == typeof i)
                      2 === s
                        ? "" !== i && e.push(i, t[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!zr(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: e, classes: n };
                })(this.componentDef.selectors[0]);
                t && nn(a, u, t), e && e.length > 0 && Ur(a, u, e.join(" "));
              }
            if (((g = me(d, 20)), void 0 !== e)) {
              const t = (g.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = e[n];
                t.push(null != r ? Array.from(r) : null);
              }
            }
            (f = (function (t, e, n, r, s) {
              const i = n[1],
                o = (function (t, e, n) {
                  const r = ke();
                  t.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Ss(t, r, e, os(t, e, 1, null), n));
                  const s = En(e, t, r.directiveStart, r);
                  cr(s, e);
                  const i = ge(r, e);
                  return i && cr(i, e), s;
                })(i, n, e);
              if (
                (r.components.push(o),
                (t[8] = o),
                s && s.forEach((t) => t(o, e)),
                e.contentQueries)
              ) {
                const t = ke();
                e.contentQueries(1, o, t.directiveStart);
              }
              const a = ke();
              return (
                !i.firstCreatePass ||
                  (null === e.hostBindings && null === e.hostAttrs) ||
                  (Ze(a.index),
                  ys(n[1], a, 0, a.directiveStart, a.directiveEnd, e),
                  vs(e, o)),
                o
              );
            })(t, this.componentDef, p, h, [ii])),
              as(d, p, null);
          } finally {
            qe();
          }
          return new sa(this.componentType, f, lo(g, p), p, g);
        }
      }
      class sa extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new jo(r)),
            (this.componentType = t);
        }
        get injector() {
          return new kn(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      const ia = new Map();
      class oa extends qo {
        constructor(t, e) {
          super(),
            (this._parent = e),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new ta(this));
          const n = Jt(t),
            r = t[Mt] || null;
          r && Qi(r),
            (this._bootstrapComponents = dr(n.bootstrap)),
            (this._r3Injector = Js(
              t,
              e,
              [
                { provide: qo, useValue: this },
                { provide: oo, useValue: this.componentFactoryResolver },
              ],
              tt(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, e = si.THROW_IF_NOT_FOUND, n = vt.Default) {
          return t === si || t === qo || t === $s
            ? this
            : this._r3Injector.get(t, e, n);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class aa extends Go {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Jt(t) &&
              (function (t) {
                const e = new Set();
                !(function t(n) {
                  const r = Jt(n, !0),
                    s = r.id;
                  null !== s &&
                    ((function (t, e, n) {
                      if (e && e !== n)
                        throw new Error(
                          `Duplicate module registered for ${t} - ${tt(
                            e
                          )} vs ${tt(e.name)}`
                        );
                    })(s, ia.get(s), n),
                    ia.set(s, n));
                  const i = dr(r.imports);
                  for (const o of i) e.has(o) || (e.add(o), t(o));
                })(t);
              })(t);
        }
        create(t) {
          return new oa(this.moduleType, t);
        }
      }
      function la(t, e, n, r) {
        return (function (t, e, n, r, s, i) {
          const o = e + n;
          return gi(t, o, s)
            ? (function (t, e, n) {
                return (t[e] = n);
              })(t, o + 1, i ? r.call(i, s) : r(s))
            : (function (t, e) {
                const n = t[e];
                return n === Wr ? void 0 : n;
              })(t, o + 1);
        })(
          Ee(),
          (function () {
            const t = Se.lFrame;
            let e = t.bindingRootIndex;
            return (
              -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex),
              e
            );
          })(),
          t,
          e,
          n,
          r
        );
      }
      const ua = class extends S {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            s = (t) => null,
            i = () => null;
          t && "object" == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (s = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (s = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(r, s, i);
          return t instanceof h && t.add(o), o;
        }
      };
      function ca(t, e) {
        return Bo(t, e);
      }
      const ha = new Vn("Application Initializer");
      let da = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.resolve = ao),
              (this.reject = ao),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                Ei(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch((t) => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(ha, 8));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const pa = new Vn("AppId"),
        fa = {
          provide: pa,
          useFactory: function () {
            return `${ga()}${ga()}${ga()}`;
          },
          deps: [],
        };
      function ga() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const ma = new Vn("Platform Initializer"),
        _a = new Vn("Platform ID"),
        ya = new Vn("appBootstrapListener");
      let va = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const wa = new Vn("LocaleId"),
        ba = new Vn("DefaultCurrencyCode");
      class Ca {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const Sa = function (t) {
          return new aa(t);
        },
        xa = Sa,
        Ea = function (t) {
          return Promise.resolve(Sa(t));
        },
        Aa = function (t) {
          const e = Sa(t),
            n = dr(Jt(t).declarations).reduce((t, e) => {
              const n = Qt(e);
              return n && t.push(new ra(n)), t;
            }, []);
          return new Ca(e, n);
        },
        Ta = Aa,
        ka = function (t) {
          return Promise.resolve(Aa(t));
        };
      let Oa = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = xa),
              (this.compileModuleAsync = Ea),
              (this.compileModuleAndAllComponentsSync = Ta),
              (this.compileModuleAndAllComponentsAsync = ka);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Ia = (() => Promise.resolve(0))();
      function Ra(t) {
        "undefined" == typeof Zone
          ? Ia.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", t);
      }
      class Va {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: e = !1,
          shouldCoalesceRunChangeDetection: n = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ua(!1)),
            (this.onMicrotaskEmpty = new ua(!1)),
            (this.onStable = new ua(!1)),
            (this.onError = new ua(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = !n && e),
            (this.shouldCoalesceRunChangeDetection = n),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              let t = It.requestAnimationFrame,
                e = It.cancelAnimationFrame;
              if ("undefined" != typeof Zone && t && e) {
                const n = t[Zone.__symbol__("OriginalDelegate")];
                n && (t = n);
                const r = e[Zone.__symbol__("OriginalDelegate")];
                r && (e = r);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e,
              };
            })().nativeRequestAnimationFrame),
            (function (t) {
              const e = () => {
                !(function (t) {
                  -1 === t.lastRequestAnimationFrameId &&
                    ((t.lastRequestAnimationFrameId =
                      t.nativeRequestAnimationFrame.call(It, () => {
                        t.fakeTopEventTask ||
                          (t.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (t.lastRequestAnimationFrameId = -1),
                                Da(t),
                                ja(t);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          t.fakeTopEventTask.invoke();
                      })),
                    Da(t));
                })(t);
              };
              t._inner = t._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return Na(t), n.invokeTask(s, i, o, a);
                  } finally {
                    ((t.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      t.shouldCoalesceRunChangeDetection) &&
                      e(),
                      Ua(t);
                  }
                },
                onInvoke: (n, r, s, i, o, a, l) => {
                  try {
                    return Na(t), n.invoke(s, i, o, a, l);
                  } finally {
                    t.shouldCoalesceRunChangeDetection && e(), Ua(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ("microTask" == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask),
                          Da(t),
                          ja(t))
                        : "macroTask" == s.change &&
                          (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (
                  e.handleError(r, s),
                  t.runOutsideAngular(() => t.onError.emit(s)),
                  !1
                ),
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Va.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (Va.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, t, Pa, ao, ao);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const Pa = {};
      function ja(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Da(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          ((t.shouldCoalesceEventChangeDetection ||
            t.shouldCoalesceRunChangeDetection) &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function Na(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Ua(t) {
        t._nesting--, ja(t);
      }
      class Ma {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ua()),
            (this.onMicrotaskEmpty = new ua()),
            (this.onStable = new ua()),
            (this.onError = new ua());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let Fa = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Va.assertNotInAngularZone(),
                        Ra(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Ra(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (e) =>
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (t) => t.timeoutId !== r
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Zn(Va));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        La = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), za.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return za.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class Ha {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      let $a,
        za = new Ha(),
        Ba = !0,
        qa = !1;
      function Ga() {
        return (qa = !0), Ba;
      }
      const Za = new Vn("AllowMultipleToken");
      class Wa {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function Qa(t, e, n = []) {
        const r = `Platform: ${e}`,
          s = new Vn(r);
        return (e = []) => {
          let i = Ja();
          if (!i || i.injector.get(Za, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n
                .concat(e)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: Bs, useValue: "platform" }
                );
              !(function (t) {
                if ($a && !$a.destroyed && !$a.injector.get(Za, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                $a = t.get(Ka);
                const e = t.get(ma, null);
                e && e.forEach((t) => t());
              })(si.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = Ja();
            if (!e) throw new Error("No platform exists!");
            if (!e.injector.get(t, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return e;
          })(s);
        };
      }
      function Ja() {
        return $a && !$a.destroyed ? $a : null;
      }
      let Ka = (() => {
        class t {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function (t, e) {
                let n;
                return (
                  (n =
                    "noop" === t
                      ? new Ma()
                      : ("zone.js" === t ? void 0 : t) ||
                        new Va({
                          enableLongStackTrace: Ga(),
                          shouldCoalesceEventChangeDetection: !!(null == e
                            ? void 0
                            : e.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == e
                            ? void 0
                            : e.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(e ? e.ngZone : void 0, {
                ngZoneEventCoalescing: (e && e.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (e && e.ngZoneRunCoalescing) || !1,
              }),
              r = [{ provide: Va, useValue: n }];
            return n.run(() => {
              const e = si.create({
                  providers: r,
                  parent: this.injector,
                  name: t.moduleType.name,
                }),
                s = t.create(e),
                i = s.injector.get(ur, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                n.runOutsideAngular(() => {
                  const t = n.onError.subscribe({
                    next: (t) => {
                      i.handleError(t);
                    },
                  });
                  s.onDestroy(() => {
                    tl(this._modules, s), t.unsubscribe();
                  });
                }),
                (function (t, e, n) {
                  try {
                    const r = n();
                    return Ei(r)
                      ? r.catch((n) => {
                          throw (
                            (e.runOutsideAngular(() => t.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(da);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (
                        Qi(s.injector.get(wa, "en-US") || "en-US"),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = Ya({}, e);
            return (function (t, e, n) {
              const r = new aa(n);
              return Promise.resolve(r);
            })(0, 0, t).then((t) => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(Xa);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((t) => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${tt(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(si));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Ya(t, e) {
        return Array.isArray(e)
          ? e.reduce(Ya, t)
          : Object.assign(Object.assign({}, t), e);
      }
      let Xa = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this._zone = t),
              (this._injector = e),
              (this._exceptionHandler = n),
              (this._componentFactoryResolver = r),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const i = new y((t) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              o = new y((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    Va.assertNotInAngularZone(),
                      Ra(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  Va.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = (function (...t) {
              let e = Number.POSITIVE_INFINITY,
                n = null,
                r = t[t.length - 1];
              return (
                E(r)
                  ? ((n = t.pop()),
                    t.length > 1 &&
                      "number" == typeof t[t.length - 1] &&
                      (e = t.pop()))
                  : "number" == typeof r && (e = t.pop()),
                null === n && 1 === t.length && t[0] instanceof y
                  ? t[0]
                  : z(e)(B(t, n))
              );
            })(
              i,
              o.pipe((t) => {
                return q()(
                  ((e = K),
                  function (t) {
                    let n;
                    n =
                      "function" == typeof e
                        ? e
                        : function () {
                            return e;
                          };
                    const r = Object.create(t, Q);
                    return (r.source = t), (r.subjectFactory = n), r;
                  })(t)
                );
                var e;
              })
            );
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              t instanceof so
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(qo),
              s = n.create(si.NULL, [], e || n.selector, r),
              i = s.location.nativeElement,
              o = s.injector.get(Fa, null),
              a = o && s.injector.get(La);
            return (
              o && a && a.registerApplication(i, o),
              s.onDestroy(() => {
                this.detachView(s.hostView),
                  tl(this.components, s),
                  a && a.unregisterApplication(i);
              }),
              this._loadComponent(s),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(t)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            tl(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(ya, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(Va), Zn(si), Zn(ur), Zn(oo), Zn(da));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function tl(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class el {}
      class nl {}
      const rl = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let sl = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || rl);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split("#");
            return (
              void 0 === r && (r = "default"),
              n("zn8P")(e)
                .then((t) => t[r])
                .then((t) => il(t, e, r))
                .then((t) => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split("#"),
              s = "NgFactory";
            return (
              void 0 === r && ((r = "default"), (s = "")),
              n("zn8P")(
                this._config.factoryPathPrefix +
                  e +
                  this._config.factoryPathSuffix
              )
                .then((t) => t[r + s])
                .then((t) => il(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(Oa), Zn(nl, 8));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function il(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const ol = Qa(null, "core", [
          { provide: _a, useValue: "unknown" },
          { provide: Ka, deps: [si] },
          { provide: La, deps: [] },
          { provide: va, deps: [] },
        ]),
        al = [
          { provide: Xa, useClass: Xa, deps: [Va, si, ur, oo, da] },
          {
            provide: na,
            deps: [Va],
            useFactory: function (t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            },
          },
          { provide: da, useClass: da, deps: [[new Yn(), ha]] },
          { provide: Oa, useClass: Oa, deps: [] },
          fa,
          {
            provide: Oo,
            useFactory: function () {
              return Mo;
            },
            deps: [],
          },
          {
            provide: Ro,
            useFactory: function () {
              return Fo;
            },
            deps: [],
          },
          {
            provide: wa,
            useFactory: function (t) {
              return (
                Qi(
                  (t =
                    t ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    "en-US")
                ),
                t
              );
            },
            deps: [[new Kn(wa), new Yn(), new Xn()]],
          },
          { provide: ba, useValue: "USD" },
        ];
      let ll = (() => {
          class t {
            constructor(t) {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Zn(Xa));
            }),
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = ht({ providers: al })),
            t
          );
        })(),
        ul = null;
      function cl() {
        return ul;
      }
      const hl = new Vn("DocumentToken");
      let dl = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ factory: pl, token: t, providedIn: "platform" })),
          t
        );
      })();
      function pl() {
        return Zn(gl);
      }
      const fl = new Vn("Location Initialized");
      let gl = (() => {
        class t extends dl {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = cl().getLocation()),
              (this._history = cl().getHistory());
          }
          getBaseHrefFromDOM() {
            return cl().getBaseHref(this._doc);
          }
          onPopState(t) {
            cl()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("popstate", t, !1);
          }
          onHashChange(t) {
            cl()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("hashchange", t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            ml() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            ml()
              ? this._history.replaceState(t, e, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(hl));
          }),
          (t.ɵprov = ct({ factory: _l, token: t, providedIn: "platform" })),
          t
        );
      })();
      function ml() {
        return !!window.history.pushState;
      }
      function _l() {
        return new gl(Zn(hl));
      }
      function yl(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith("/") && n++,
          e.startsWith("/") && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        );
      }
      function vl(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function wl(t) {
        return t && "?" !== t[0] ? "?" + t : t;
      }
      let bl = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = ct({ factory: Cl, token: t, providedIn: "root" })),
          t
        );
      })();
      function Cl(t) {
        const e = Zn(hl).location;
        return new xl(Zn(dl), (e && e.origin) || "");
      }
      const Sl = new Vn("appBaseHref");
      let xl = (() => {
          class t extends bl {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return yl(this._baseHref, t);
            }
            path(t = !1) {
              const e =
                  this._platformLocation.pathname +
                  wl(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + wl(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + wl(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Zn(dl), Zn(Sl, 8));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        El = (() => {
          class t extends bl {
            constructor(t, e) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ""),
                null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = yl(this._baseHref, t);
              return e.length > 0 ? "#" + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + wl(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + wl(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Zn(dl), Zn(Sl, 8));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Al = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new ua()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = vl(kl(n))),
                this._platformStrategy.onPopState((t) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type,
                  });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = "") {
              return this.path() == this.normalize(t + wl(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, kl(e))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && "/" !== t[0] && (t = "/" + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }
            go(t, e = "", n = null) {
              this._platformStrategy.pushState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + wl(e)),
                  n
                );
            }
            replaceState(t, e = "", n = null) {
              this._platformStrategy.replaceState(n, "", t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + wl(e)),
                  n
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((t) => {
                    this._notifyUrlChangeListeners(t.url, t.state);
                  }));
            }
            _notifyUrlChangeListeners(t = "", e) {
              this._urlChangeListeners.forEach((n) => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n,
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Zn(bl), Zn(dl));
            }),
            (t.normalizeQueryParams = wl),
            (t.joinWithSlash = yl),
            (t.stripTrailingSlash = vl),
            (t.ɵprov = ct({ factory: Tl, token: t, providedIn: "root" })),
            t
          );
        })();
      function Tl() {
        return new Al(Zn(bl), Zn(dl));
      }
      function kl(t) {
        return t.replace(/\/index.html$/, "");
      }
      var Ol = (function (t) {
        return (
          (t[(t.Zero = 0)] = "Zero"),
          (t[(t.One = 1)] = "One"),
          (t[(t.Two = 2)] = "Two"),
          (t[(t.Few = 3)] = "Few"),
          (t[(t.Many = 4)] = "Many"),
          (t[(t.Other = 5)] = "Other"),
          t
        );
      })({});
      class Il {}
      let Rl = (() => {
          class t extends Il {
            constructor(t) {
              super(), (this.locale = t);
            }
            getPluralCategory(t, e) {
              switch (
                (function (t) {
                  return (function (t) {
                    const e = (function (t) {
                      return t.toLowerCase().replace(/_/g, "-");
                    })(t);
                    let n = Gi(e);
                    if (n) return n;
                    const r = e.split("-")[0];
                    if (((n = Gi(r)), n)) return n;
                    if ("en" === r) return Bi;
                    throw new Error(
                      `Missing locale data for the locale "${t}".`
                    );
                  })(t)[Zi.PluralCase];
                })(e || this.locale)(t)
              ) {
                case Ol.Zero:
                  return "zero";
                case Ol.One:
                  return "one";
                case Ol.Two:
                  return "two";
                case Ol.Few:
                  return "few";
                case Ol.Many:
                  return "many";
                default:
                  return "other";
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Zn(wa));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Vl = (() => {
          class t {
            constructor(t, e, n, r) {
              (this._iterableDiffers = t),
                (this._keyValueDiffers = e),
                (this._ngEl = n),
                (this._renderer = r),
                (this._iterableDiffer = null),
                (this._keyValueDiffer = null),
                (this._initialClasses = []),
                (this._rawClass = null);
            }
            set klass(t) {
              this._removeClasses(this._initialClasses),
                (this._initialClasses =
                  "string" == typeof t ? t.split(/\s+/) : []),
                this._applyClasses(this._initialClasses),
                this._applyClasses(this._rawClass);
            }
            set ngClass(t) {
              this._removeClasses(this._rawClass),
                this._applyClasses(this._initialClasses),
                (this._iterableDiffer = null),
                (this._keyValueDiffer = null),
                (this._rawClass = "string" == typeof t ? t.split(/\s+/) : t),
                this._rawClass &&
                  (pi(this._rawClass)
                    ? (this._iterableDiffer = this._iterableDiffers
                        .find(this._rawClass)
                        .create())
                    : (this._keyValueDiffer = this._keyValueDiffers
                        .find(this._rawClass)
                        .create()));
            }
            ngDoCheck() {
              if (this._iterableDiffer) {
                const t = this._iterableDiffer.diff(this._rawClass);
                t && this._applyIterableChanges(t);
              } else if (this._keyValueDiffer) {
                const t = this._keyValueDiffer.diff(this._rawClass);
                t && this._applyKeyValueChanges(t);
              }
            }
            _applyKeyValueChanges(t) {
              t.forEachAddedItem((t) =>
                this._toggleClass(t.key, t.currentValue)
              ),
                t.forEachChangedItem((t) =>
                  this._toggleClass(t.key, t.currentValue)
                ),
                t.forEachRemovedItem((t) => {
                  t.previousValue && this._toggleClass(t.key, !1);
                });
            }
            _applyIterableChanges(t) {
              t.forEachAddedItem((t) => {
                if ("string" != typeof t.item)
                  throw new Error(
                    `NgClass can only toggle CSS classes expressed as strings, got ${tt(
                      t.item
                    )}`
                  );
                this._toggleClass(t.item, !0);
              }),
                t.forEachRemovedItem((t) => this._toggleClass(t.item, !1));
            }
            _applyClasses(t) {
              t &&
                (Array.isArray(t) || t instanceof Set
                  ? t.forEach((t) => this._toggleClass(t, !0))
                  : Object.keys(t).forEach((e) =>
                      this._toggleClass(e, !!t[e])
                    ));
            }
            _removeClasses(t) {
              t &&
                (Array.isArray(t) || t instanceof Set
                  ? t.forEach((t) => this._toggleClass(t, !1))
                  : Object.keys(t).forEach((t) => this._toggleClass(t, !1)));
            }
            _toggleClass(t, e) {
              (t = t.trim()) &&
                t.split(/\s+/g).forEach((t) => {
                  e
                    ? this._renderer.addClass(this._ngEl.nativeElement, t)
                    : this._renderer.removeClass(this._ngEl.nativeElement, t);
                });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(vi(Oo), vi(Ro), vi(co), vi(po));
            }),
            (t.ɵdir = Wt({
              type: t,
              selectors: [["", "ngClass", ""]],
              inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
            })),
            t
          );
        })();
      class Pl {
        constructor(t, e, n, r) {
          (this.$implicit = t),
            (this.ngForOf = e),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let jl = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((t = n), t.name || typeof t)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new Pl(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new Dl(t, n);
                e.push(s);
              } else if (null == r)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new Dl(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++)
              this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n),
                (t.context.count = r),
                (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((t) => {
              this._viewContainer.get(t.currentIndex).context.$implicit =
                t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(vi(Wo), vi(Ho), vi(Oo));
          }),
          (t.ɵdir = Wt({
            type: t,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          t
        );
      })();
      class Dl {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let Nl = (() => {
        class t {
          constructor(t, e) {
            (this._viewContainer = t),
              (this._context = new Ul()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t),
              this._updateView();
          }
          set ngIfThen(t) {
            Ml("ngIfThen", t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            Ml("ngIfElse", t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(vi(Wo), vi(Ho));
          }),
          (t.ɵdir = Wt({
            type: t,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          t
        );
      })();
      class Ul {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Ml(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(
            `${t} must be a TemplateRef, but received '${tt(e)}'.`
          );
      }
      let Fl = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = ht({ providers: [{ provide: Il, useClass: Rl }] })),
            t
          );
        })(),
        Ll = (() => {
          class t {}
          return (
            (t.ɵprov = ct({
              token: t,
              providedIn: "root",
              factory: () => new Hl(Zn(hl), window),
            })),
            t
          );
        })();
      class Hl {
        constructor(t, e) {
          (this.document = t), (this.window = e), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportsScrolling() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          var e;
          if (!this.supportsScrolling()) return;
          const n =
            null !== (e = this.document.getElementById(t)) && void 0 !== e
              ? e
              : this.document.getElementsByName(t)[0];
          void 0 !== n && (this.scrollToElement(n), this.attemptFocus(n));
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        attemptFocus(t) {
          return t.focus(), this.document.activeElement === t;
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const t =
              $l(this.window.history) ||
              $l(Object.getPrototypeOf(this.window.history));
            return !(!t || (!t.writable && !t.set));
          } catch (t) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch (t) {
            return !1;
          }
        }
      }
      function $l(t) {
        return Object.getOwnPropertyDescriptor(t, "scrollRestoration");
      }
      class zl extends class extends class {} {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      } {
        static makeCurrent() {
          var t;
          (t = new zl()), ul || (ul = t);
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return "window" === e
            ? window
            : "document" === e
            ? t
            : "body" === e
            ? t.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e =
            ql || ((ql = document.querySelector("base")), ql)
              ? ql.getAttribute("href")
              : null;
          return null == e
            ? null
            : ((n = e),
              Bl || (Bl = document.createElement("a")),
              Bl.setAttribute("href", n),
              "/" === Bl.pathname.charAt(0) ? Bl.pathname : "/" + Bl.pathname);
          var n;
        }
        resetBaseElement() {
          ql = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return (function (t, e) {
            e = encodeURIComponent(e);
            for (const n of t.split(";")) {
              const t = n.indexOf("="),
                [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
              if (r.trim() === e) return decodeURIComponent(s);
            }
            return null;
          })(document.cookie, t);
        }
      }
      let Bl,
        ql = null;
      const Gl = new Vn("TRANSITION_ID"),
        Zl = [
          {
            provide: ha,
            useFactory: function (t, e, n) {
              return () => {
                n.get(da).donePromise.then(() => {
                  const n = cl();
                  Array.prototype.slice
                    .apply(e.querySelectorAll("style[ng-transition]"))
                    .filter((e) => e.getAttribute("ng-transition") === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [Gl, hl, si],
            multi: !0,
          },
        ];
      class Wl {
        static init() {
          var t;
          (t = new Wl()), (za = t);
        }
        addToWindow(t) {
          (It.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r)
              throw new Error("Could not find testability for element.");
            return r;
          }),
            (It.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (It.getAllAngularRootElements = () => t.getAllRootElements()),
            It.frameworkStabilizers || (It.frameworkStabilizers = []),
            It.frameworkStabilizers.push((t) => {
              const e = It.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const s = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(s);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const r = t.getTestability(e);
          return null != r
            ? r
            : n
            ? cl().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const Ql = new Vn("EventManagerPlugins");
      let Jl = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach((t) => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error(`No event manager plugin found for event ${t}`);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(Ql), Zn(Va));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Kl {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const r = cl().getGlobalEventTarget(this._doc, t);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${e}`);
          return this.addEventListener(r, e, n);
        }
      }
      let Yl = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach((t) => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Xl = (() => {
          class t extends Yl {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach((t) => {
                const n = this._doc.createElement("style");
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((t) => cl().remove(t));
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Zn(hl));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const tu = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        eu = /%COMP%/g;
      function nu(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? nu(t, s, n) : ((s = s.replace(eu, t)), n.push(s));
        }
        return n;
      }
      function ru(t) {
        return (e) => {
          if ("__ngUnwrap__" === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let su = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new iu(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case Et.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new ou(
                      this.eventManager,
                      this.sharedStylesHost,
                      e,
                      this.appId
                    )),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case 1:
              case Et.ShadowDom:
                return new au(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = nu(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t),
                    this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(Jl), Zn(Xl), Zn(pa));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class iu {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e
            ? document.createElementNS(tu[e] || e, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = "string" == typeof t ? document.querySelector(t) : t;
          if (!n)
            throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ""), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ":" + e;
            const s = tu[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = tu[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & (pr.DashCase | pr.Important)
            ? t.style.setProperty(e, n, r & pr.Important ? "important" : "")
            : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & pr.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return "string" == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, ru(n))
            : this.eventManager.addEventListener(t, e, ru(n));
        }
      }
      class ou extends iu {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = nu(r + "-" + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              eu,
              r + "-" + n.id
            )),
            (this.hostAttr = "_nghost-%COMP%".replace(eu, r + "-" + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class au extends iu {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.shadowRoot = n.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = nu(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const t = document.createElement("style");
            (t.textContent = s[i]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      let lu = (() => {
        class t extends Kl {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return (
              t.addEventListener(e, n, !1),
              () => this.removeEventListener(t, e, n)
            );
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(hl));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const uu = ["alt", "control", "meta", "shift"],
        cu = {
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
        hu = {
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
        du = {
          alt: (t) => t.altKey,
          control: (t) => t.ctrlKey,
          meta: (t) => t.metaKey,
          shift: (t) => t.shiftKey,
        };
      let pu = (() => {
        class t extends Kl {
          constructor(t) {
            super(t);
          }
          supports(e) {
            return null != t.parseEventName(e);
          }
          addEventListener(e, n, r) {
            const s = t.parseEventName(n),
              i = t.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => cl().onAndCancel(e, s.domEventName, i));
          }
          static parseEventName(e) {
            const n = e.toLowerCase().split("."),
              r = n.shift();
            if (0 === n.length || ("keydown" !== r && "keyup" !== r))
              return null;
            const s = t._normalizeKey(n.pop());
            let i = "";
            if (
              (uu.forEach((t) => {
                const e = n.indexOf(t);
                e > -1 && (n.splice(e, 1), (i += t + "."));
              }),
              (i += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const o = {};
            return (o.domEventName = r), (o.fullKey = i), o;
          }
          static getEventFullKey(t) {
            let e = "",
              n = (function (t) {
                let e = t.key;
                if (null == e) {
                  if (((e = t.keyIdentifier), null == e)) return "Unidentified";
                  e.startsWith("U+") &&
                    ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                    3 === t.location && hu.hasOwnProperty(e) && (e = hu[e]));
                }
                return cu[e] || e;
              })(t);
            return (
              (n = n.toLowerCase()),
              " " === n ? (n = "space") : "." === n && (n = "dot"),
              uu.forEach((r) => {
                r != n && (0, du[r])(t) && (e += r + ".");
              }),
              (e += n),
              e
            );
          }
          static eventCallback(e, n, r) {
            return (s) => {
              t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(t) {
            switch (t) {
              case "esc":
                return "escape";
              default:
                return t;
            }
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(hl));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const fu = Qa(ol, "browser", [
          { provide: _a, useValue: "browser" },
          {
            provide: ma,
            useValue: function () {
              zl.makeCurrent(), Wl.init();
            },
            multi: !0,
          },
          {
            provide: hl,
            useFactory: function () {
              return (
                (function (t) {
                  ce = t;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        gu = [
          [],
          { provide: Bs, useValue: "root" },
          {
            provide: ur,
            useFactory: function () {
              return new ur();
            },
            deps: [],
          },
          { provide: Ql, useClass: lu, multi: !0, deps: [hl, Va, _a] },
          { provide: Ql, useClass: pu, multi: !0, deps: [hl] },
          [],
          { provide: su, useClass: su, deps: [Jl, Xl, pa] },
          { provide: ho, useExisting: su },
          { provide: Yl, useExisting: Xl },
          { provide: Xl, useClass: Xl, deps: [hl] },
          { provide: Fa, useClass: Fa, deps: [Va] },
          { provide: Jl, useClass: Jl, deps: [Ql, Va] },
          [],
        ];
      let mu = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [
                { provide: pa, useValue: e.appId },
                { provide: Gl, useExisting: pa },
                Zl,
              ],
            };
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(t, 12));
          }),
          (t.ɵmod = Gt({ type: t })),
          (t.ɵinj = ht({ providers: gu, imports: [Fl, ll] })),
          t
        );
      })();
      function _u(...t) {
        let e = t[t.length - 1];
        return E(e) ? (t.pop(), D(t, e)) : B(t);
      }
      "undefined" != typeof window && window;
      class yu extends S {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new w();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      class vu extends f {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
      class wu extends f {
        constructor(t, e, n) {
          super(),
            (this.parent = t),
            (this.outerValue = e),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      function bu(t, e, n, r, s = new wu(t, n, r)) {
        if (!s.closed) return e instanceof y ? e.subscribe(s) : j(e)(s);
      }
      const Cu = {};
      class Su {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new xu(t, this.resultSelector));
        }
      }
      class xu extends vu {
        constructor(t, e) {
          super(t),
            (this.resultSelector = e),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(t) {
          this.values.push(Cu), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) this.add(bu(this, t[n], void 0, n));
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n) {
          const r = this.values,
            s = this.toRespond
              ? r[n] === Cu
                ? --this.toRespond
                : this.toRespond
              : 0;
          (r[n] = e),
            0 === s &&
              (this.resultSelector
                ? this._tryResultSelector(r)
                : this.destination.next(r.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      const Eu = (() => {
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
      function Au(...t) {
        return z(1)(_u(...t));
      }
      const Tu = new y((t) => t.complete());
      function ku(t) {
        return t
          ? (function (t) {
              return new y((e) => t.schedule(() => e.complete()));
            })(t)
          : Tu;
      }
      function Ou(t) {
        return new y((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? N(n) : ku()).subscribe(e);
        });
      }
      function Iu(t, e) {
        return "function" == typeof e
          ? (n) =>
              n.pipe(Iu((n, r) => N(t(n, r)).pipe(A((t, s) => e(n, t, r, s)))))
          : (e) => e.lift(new Ru(t));
      }
      class Ru {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new Vu(t, this.project));
        }
      }
      class Vu extends M {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e);
        }
        _innerSub(t) {
          const e = this.innerSubscription;
          e && e.unsubscribe();
          const n = new U(this),
            r = this.destination;
          r.add(n),
            (this.innerSubscription = F(t, n)),
            this.innerSubscription !== n && r.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(t) {
          this.destination.next(t);
        }
      }
      const Pu = (() => {
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
      function ju(t) {
        return (e) => (0 === t ? ku() : e.lift(new Du(t)));
      }
      class Du {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Pu();
        }
        call(t, e) {
          return e.subscribe(new Nu(t, this.total));
        }
      }
      class Nu extends f {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e &&
            (this.destination.next(t),
            n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Uu(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Mu(t, e, n));
          }
        );
      }
      class Mu {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(
            new Fu(t, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class Fu extends f {
        constructor(t, e, n, r) {
          super(t),
            (this.accumulator = e),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Lu(t, e) {
        return function (n) {
          return n.lift(new Hu(t, e));
        };
      }
      class Hu {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new $u(t, this.predicate, this.thisArg));
        }
      }
      class $u extends f {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      function zu(t) {
        return function (e) {
          const n = new Bu(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class Bu {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new qu(t, this.selector, this.caught));
        }
      }
      class qu extends M {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new U(this);
            this.add(r);
            const s = F(n, r);
            s !== r && this.add(s);
          }
        }
      }
      function Gu(t, e) {
        return L(t, e, 1);
      }
      function Zu(t) {
        return function (e) {
          return 0 === t ? ku() : e.lift(new Wu(t));
        };
      }
      class Wu {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new Pu();
        }
        call(t, e) {
          return e.subscribe(new Qu(t, this.total));
        }
      }
      class Qu extends f {
        constructor(t, e) {
          super(t),
            (this.total = e),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function Ju(t = Xu) {
        return (e) => e.lift(new Ku(t));
      }
      class Ku {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new Yu(t, this.errorFactory));
        }
      }
      class Yu extends f {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function Xu() {
        return new Eu();
      }
      function tc(t = null) {
        return (e) => e.lift(new ec(t));
      }
      class ec {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new nc(t, this.defaultValue));
        }
      }
      class nc extends f {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function rc(t, e) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            t ? Lu((e, n) => t(e, n, r)) : _,
            ju(1),
            n ? tc(e) : Ju(() => new Eu())
          );
      }
      function sc() {}
      function ic(t, e, n) {
        return function (r) {
          return r.lift(new oc(t, e, n));
        };
      }
      class oc {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(
            new ac(t, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class ac extends f {
        constructor(t, e, n, s) {
          super(t),
            (this._tapNext = sc),
            (this._tapError = sc),
            (this._tapComplete = sc),
            (this._tapError = n || sc),
            (this._tapComplete = s || sc),
            r(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || sc),
                (this._tapError = e.error || sc),
                (this._tapComplete = e.complete || sc));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      class lc {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new uc(t, this.callback));
        }
      }
      class uc extends f {
        constructor(t, e) {
          super(t), this.add(new h(e));
        }
      }
      class cc {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class hc extends cc {
        constructor(t, e, n = "imperative", r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class dc extends cc {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class pc extends cc {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class fc extends cc {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class gc extends cc {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class mc extends cc {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class _c extends cc {
        constructor(t, e, n, r, s) {
          super(t, e),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class yc extends cc {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class vc extends cc {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class wc {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class bc {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Cc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Sc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class xc {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Ec {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Ac {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Tc {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function kc(t) {
        return new Tc(t);
      }
      function Oc(t) {
        const e = Error("NavigationCancelingError: " + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function Ic(t, e, n) {
        const r = n.path.split("/");
        if (r.length > t.length) return null;
        if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(":")) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      function Rc(t, e) {
        const n = t ? Object.keys(t) : void 0,
          r = e ? Object.keys(e) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), !Vc(t[s], e[s]))) return !1;
        return !0;
      }
      function Vc(t, e) {
        if (Array.isArray(t) && Array.isArray(e)) {
          if (t.length !== e.length) return !1;
          const n = [...t].sort(),
            r = [...e].sort();
          return n.every((t, e) => r[e] === t);
        }
        return t === e;
      }
      function Pc(t) {
        return Array.prototype.concat.apply([], t);
      }
      function jc(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function Dc(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function Nc(t) {
        return Ai(t) ? t : Ei(t) ? N(Promise.resolve(t)) : _u(t);
      }
      function Uc(t, e, n) {
        return n
          ? (function (t, e) {
              return Rc(t, e);
            })(t.queryParams, e.queryParams) && Mc(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every((n) => Vc(t[n], e[n]))
              );
            })(t.queryParams, e.queryParams) && Fc(t.root, e.root);
      }
      function Mc(t, e) {
        if (!Bc(t.segments, e.segments)) return !1;
        if (t.numberOfChildren !== e.numberOfChildren) return !1;
        for (const n in e.children) {
          if (!t.children[n]) return !1;
          if (!Mc(t.children[n], e.children[n])) return !1;
        }
        return !0;
      }
      function Fc(t, e) {
        return Lc(t, e, e.segments);
      }
      function Lc(t, e, n) {
        if (t.segments.length > n.length)
          return !!Bc(t.segments.slice(0, n.length), n) && !e.hasChildren();
        if (t.segments.length === n.length) {
          if (!Bc(t.segments, n)) return !1;
          for (const n in e.children) {
            if (!t.children[n]) return !1;
            if (!Fc(t.children[n], e.children[n])) return !1;
          }
          return !0;
        }
        {
          const r = n.slice(0, t.segments.length),
            s = n.slice(t.segments.length);
          return (
            !!Bc(t.segments, r) &&
            !!t.children.primary &&
            Lc(t.children.primary, e, s)
          );
        }
      }
      class Hc {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = kc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Zc.serialize(this);
        }
      }
      class $c {
        constructor(t, e) {
          (this.segments = t),
            (this.children = e),
            (this.parent = null),
            Dc(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Wc(this);
        }
      }
      class zc {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = kc(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return eh(this);
        }
      }
      function Bc(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      class qc {}
      class Gc {
        parse(t) {
          const e = new oh(t);
          return new Hc(
            e.parseRootSegment(),
            e.parseQueryParams(),
            e.parseFragment()
          );
        }
        serialize(t) {
          var e;
          return `/${Qc(t.root, !0)}${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((t) => `${Kc(e)}=${Kc(t)}`).join("&")
                : `${Kc(e)}=${Kc(n)}`;
            });
            return e.length ? `?${e.join("&")}` : "";
          })(t.queryParams)}${
            "string" == typeof t.fragment
              ? `#${((e = t.fragment), encodeURI(e))}`
              : ""
          }`;
        }
      }
      const Zc = new Gc();
      function Wc(t) {
        return t.segments.map((t) => eh(t)).join("/");
      }
      function Qc(t, e) {
        if (!t.hasChildren()) return Wc(t);
        if (e) {
          const e = t.children.primary ? Qc(t.children.primary, !1) : "",
            n = [];
          return (
            Dc(t.children, (t, e) => {
              "primary" !== e && n.push(`${e}:${Qc(t, !1)}`);
            }),
            n.length > 0 ? `${e}(${n.join("//")})` : e
          );
        }
        {
          const e = (function (t, e) {
            let n = [];
            return (
              Dc(t.children, (t, r) => {
                "primary" === r && (n = n.concat(e(t, r)));
              }),
              Dc(t.children, (t, r) => {
                "primary" !== r && (n = n.concat(e(t, r)));
              }),
              n
            );
          })(t, (e, n) =>
            "primary" === n
              ? [Qc(t.children.primary, !1)]
              : [`${n}:${Qc(e, !1)}`]
          );
          return 1 === Object.keys(t.children).length &&
            null != t.children.primary
            ? `${Wc(t)}/${e[0]}`
            : `${Wc(t)}/(${e.join("//")})`;
        }
      }
      function Jc(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Kc(t) {
        return Jc(t).replace(/%3B/gi, ";");
      }
      function Yc(t) {
        return Jc(t)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Xc(t) {
        return decodeURIComponent(t);
      }
      function th(t) {
        return Xc(t.replace(/\+/g, "%20"));
      }
      function eh(t) {
        return `${Yc(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${Yc(t)}=${Yc(e[t])}`)
            .join(""))
        }`;
        var e;
      }
      const nh = /^[^\/()?;=#]+/;
      function rh(t) {
        const e = t.match(nh);
        return e ? e[0] : "";
      }
      const sh = /^[^=?&#]+/,
        ih = /^[^?&#]+/;
      class oh {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new $c([], {})
              : new $c([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional("&"));
          return t;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const t = [];
          for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) &&
              (n.primary = new $c(t, e)),
            n
          );
        }
        parseSegment() {
          const t = rh(this.remaining);
          if ("" === t && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new zc(Xc(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(";"); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = rh(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = rh(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[Xc(e)] = Xc(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(sh);
            return e ? e[0] : "";
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = "";
          if (this.consumeOptional("=")) {
            const t = (function (t) {
              const e = t.match(ih);
              return e ? e[0] : "";
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = th(e),
            s = th(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = rh(this.remaining),
              r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s;
            n.indexOf(":") > -1
              ? ((s = n.substr(0, n.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : t && (s = "primary");
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new $c([], i)),
              this.consumeOptional("//");
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class ah {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = lh(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = lh(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = uh(t, this._root);
          return e.length < 2
            ? []
            : e[e.length - 2].children
                .map((t) => t.value)
                .filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return uh(t, this._root).map((t) => t.value);
        }
      }
      function lh(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = lh(t, n);
          if (e) return e;
        }
        return null;
      }
      function uh(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = uh(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class ch {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function hh(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class dh extends ah {
        constructor(t, e) {
          super(t), (this.snapshot = e), yh(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function ph(t, e) {
        const n = (function (t, e) {
            const n = new mh(
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
            return new _h("", new ch(n, []));
          })(t, e),
          r = new yu([new zc("", {})]),
          s = new yu({}),
          i = new yu({}),
          o = new yu({}),
          a = new yu(""),
          l = new fh(r, s, o, a, i, "primary", e, n.root);
        return (l.snapshot = n.root), new dh(new ch(l, []), n);
      }
      class fh {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(A((t) => kc(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(A((t) => kc(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function gh(t, e = "emptyOnly") {
        const n = t.pathFromRoot;
        let r = 0;
        if ("always" !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && "" === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                e._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class mh {
        constructor(t, e, n, r, s, i, o, a, l, u, c) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = u),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = kc(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = kc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((t) => t.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class _h extends ah {
        constructor(t, e) {
          super(e), (this.url = t), yh(this, e);
        }
        toString() {
          return vh(this._root);
        }
      }
      function yh(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => yh(t, e));
      }
      function vh(t) {
        const e =
          t.children.length > 0 ? ` { ${t.children.map(vh).join(", ")} } ` : "";
        return `${t.value}${e}`;
      }
      function wh(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            Rc(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            Rc(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!Rc(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            Rc(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function bh(t, e) {
        var n, r;
        return (
          Rc(t.params, e.params) &&
          Bc((n = t.url), (r = e.url)) &&
          n.every((t, e) => Rc(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || bh(t.parent, e.parent))
        );
      }
      function Ch(t, e, n) {
        if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = e.value;
          const s = (function (t, e, n) {
            return e.children.map((e) => {
              for (const r of n.children)
                if (t.shouldReuseRoute(e.value, r.value.snapshot))
                  return Ch(t, e, r);
              return Ch(t, e);
            });
          })(t, e, n);
          return new ch(r, s);
        }
        {
          const n = t.retrieve(e.value);
          if (n) {
            const t = n.route;
            return Sh(e, t), t;
          }
          {
            const n = new fh(
                new yu((r = e.value).url),
                new yu(r.params),
                new yu(r.queryParams),
                new yu(r.fragment),
                new yu(r.data),
                r.outlet,
                r.component,
                r
              ),
              s = e.children.map((e) => Ch(t, e));
            return new ch(n, s);
          }
        }
        var r;
      }
      function Sh(t, e) {
        if (t.value.routeConfig !== e.value.routeConfig)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot created from a different route"
          );
        if (t.children.length !== e.children.length)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot with a different number of children"
          );
        e.value._futureSnapshot = t.value;
        for (let n = 0; n < t.children.length; ++n)
          Sh(t.children[n], e.children[n]);
      }
      function xh(t) {
        return (
          "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function Eh(t) {
        return "object" == typeof t && null != t && t.outlets;
      }
      function Ah(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            Dc(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map((t) => `${t}`) : `${t}`;
            }),
          new Hc(n.root === t ? e : Th(n.root, t, e), i, s)
        );
      }
      function Th(t, e, n) {
        const r = {};
        return (
          Dc(t.children, (t, s) => {
            r[s] = t === e ? n : Th(t, e, n);
          }),
          new $c(t.segments, r)
        );
      }
      class kh {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = n),
            t && n.length > 0 && xh(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const r = n.find(Eh);
          if (r && r !== jc(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Oh {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function Ih(t, e, n) {
        if (
          (t || (t = new $c([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return Rh(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = n[r];
              if (Eh(o)) break;
              const a = `${o}`,
                l = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === a) break;
              if (a && l && "object" == typeof l && void 0 === l.outlets) {
                if (!Dh(a, l, e)) return i;
                r += 2;
              } else {
                if (!Dh(a, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new $c(t.segments.slice(0, r.pathIndex), {});
          return (
            (e.children.primary = new $c(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            Rh(e, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new $c(t.segments, {})
          : r.match && !t.hasChildren()
          ? Vh(t, e, n)
          : r.match
          ? Rh(t, 0, s)
          : Vh(t, e, n);
      }
      function Rh(t, e, n) {
        if (0 === n.length) return new $c(t.segments, {});
        {
          const r = (function (t) {
              return Eh(t[0]) ? t[0].outlets : { primary: t };
            })(n),
            s = {};
          return (
            Dc(r, (n, r) => {
              "string" == typeof n && (n = [n]),
                null !== n && (s[r] = Ih(t.children[r], e, n));
            }),
            Dc(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new $c(t.segments, s)
          );
        }
      }
      function Vh(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if (Eh(i)) {
            const t = Ph(i.outlets);
            return new $c(r, t);
          }
          if (0 === s && xh(n[0])) {
            r.push(new zc(t.segments[e].path, jh(n[0]))), s++;
            continue;
          }
          const o = Eh(i) ? i.outlets.primary : `${i}`,
            a = s < n.length - 1 ? n[s + 1] : null;
          o && a && xh(a)
            ? (r.push(new zc(o, jh(a))), (s += 2))
            : (r.push(new zc(o, {})), s++);
        }
        return new $c(r, {});
      }
      function Ph(t) {
        const e = {};
        return (
          Dc(t, (t, n) => {
            "string" == typeof t && (t = [t]),
              null !== t && (e[n] = Vh(new $c([], {}), 0, t));
          }),
          e
        );
      }
      function jh(t) {
        const e = {};
        return Dc(t, (t, n) => (e[n] = `${t}`)), e;
      }
      function Dh(t, e, n) {
        return t == n.path && Rc(e, n.parameters);
      }
      class Nh {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t),
            wh(this.futureState.root),
            this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = hh(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            Dc(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: e,
              route: t,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet),
            r = n && t.value.component ? n.children : e,
            s = hh(t);
          for (const i of Object.keys(s))
            this.deactivateRouteAndItsChildren(s[i], r);
          n &&
            n.outlet &&
            (n.outlet.deactivate(), n.children.onOutletDeactivated());
        }
        activateChildRoutes(t, e, n) {
          const r = hh(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n),
              this.forwardEvent(new Ec(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new Sc(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((wh(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                Uh(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function Uh(t) {
        wh(t.value), t.children.forEach(Uh);
      }
      class Mh {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function Fh(t) {
        return "function" == typeof t;
      }
      function Lh(t) {
        return t instanceof Hc;
      }
      const Hh = Symbol("INITIAL_VALUE");
      function $h() {
        return Iu((t) =>
          (function (...t) {
            let e, n;
            return (
              E(t[t.length - 1]) && (n = t.pop()),
              "function" == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && l(t[0]) && (t = t[0]),
              B(t, n).lift(new Su(e))
            );
          })(
            t.map((t) =>
              t.pipe(
                ju(1),
                (function (...t) {
                  const e = t[t.length - 1];
                  return E(e) ? (t.pop(), (n) => Au(t, n, e)) : (e) => Au(t, e);
                })(Hh)
              )
            )
          ).pipe(
            Uu((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== Hh) return t;
                if ((r === Hh && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || Lh(r)) return r;
                }
                return t;
              }, t);
            }, Hh),
            Lu((t) => t !== Hh),
            A((t) => (Lh(t) ? t : !0 === t)),
            ju(1)
          )
        );
      }
      let zh = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = $t({
            type: t,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && xi(0, "router-outlet");
            },
            directives: function () {
              return [Nd];
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      function Bh(t, e = "") {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          qh(r, Gh(e, r));
        }
      }
      function qh(t, e) {
        t.children && Bh(t.children, e);
      }
      function Gh(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? `${t}/`
              : !t && e.path
              ? e.path
              : `${t}/${e.path}`
            : ""
          : t;
      }
      function Zh(t) {
        const e = t.children && t.children.map(Zh),
          n = e
            ? Object.assign(Object.assign({}, t), { children: e })
            : Object.assign({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            "primary" !== n.outlet &&
            (n.component = zh),
          n
        );
      }
      function Wh(t) {
        return t.outlet || "primary";
      }
      function Qh(t, e) {
        const n = t.filter((t) => Wh(t) === e);
        return n.push(...t.filter((t) => Wh(t) !== e)), n;
      }
      const Jh = {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        parameters: {},
        positionalParamSegments: {},
      };
      function Kh(t, e, n) {
        var r;
        if ("" === e.path)
          return "full" === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? Object.assign({}, Jh)
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {},
              };
        const s = (e.matcher || Ic)(n, t, e);
        if (!s) return Object.assign({}, Jh);
        const i = {};
        Dc(s.posParams, (t, e) => {
          i[e] = t.path;
        });
        const o =
          s.consumed.length > 0
            ? Object.assign(
                Object.assign({}, i),
                s.consumed[s.consumed.length - 1].parameters
              )
            : i;
        return {
          matched: !0,
          consumedSegments: s.consumed,
          lastChild: s.consumed.length,
          parameters: o,
          positionalParamSegments:
            null !== (r = s.posParams) && void 0 !== r ? r : {},
        };
      }
      function Yh(t, e, n, r, s = "corrected") {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => Xh(t, e, n) && "primary" !== Wh(n));
          })(t, n, r)
        ) {
          const s = new $c(
            e,
            (function (t, e, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              for (const i of n)
                if ("" === i.path && "primary" !== Wh(i)) {
                  const n = new $c([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = e.length),
                    (s[Wh(i)] = n);
                }
              return s;
            })(t, e, r, new $c(n, t.children))
          );
          return (
            (s._sourceSegment = t),
            (s._segmentIndexShift = e.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => Xh(t, e, n));
          })(t, n, r)
        ) {
          const i = new $c(
            t.segments,
            (function (t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (Xh(t, n, a) && !s[Wh(a)]) {
                  const n = new $c([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift =
                      "legacy" === i ? t.segments.length : e.length),
                    (o[Wh(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (
            (i._sourceSegment = t),
            (i._segmentIndexShift = e.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new $c(t.segments, t.children);
        return (
          (i._sourceSegment = t),
          (i._segmentIndexShift = e.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function Xh(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path
        );
      }
      function td(t, e, n, r) {
        return (
          !!(Wh(t) === r || ("primary" !== r && Xh(e, n, t))) &&
          ("**" === t.path || Kh(e, t, n).matched)
        );
      }
      function ed(t, e, n) {
        return 0 === e.length && !t.children[n];
      }
      class nd {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class rd {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function sd(t) {
        return new y((e) => e.error(new nd(t)));
      }
      function id(t) {
        return new y((e) => e.error(new rd(t)));
      }
      function od(t) {
        return new y((e) =>
          e.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${t}'`
            )
          )
        );
      }
      class ad {
        constructor(t, e, n, r, s) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(qo));
        }
        apply() {
          const t = Yh(this.urlTree.root, [], [], this.config).segmentGroup,
            e = new $c(t.segments, t.children);
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            e,
            "primary"
          )
            .pipe(
              A((t) =>
                this.createUrlTree(
                  ld(t),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              zu((t) => {
                if (t instanceof rd)
                  return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof nd) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            t.root,
            "primary"
          )
            .pipe(
              A((e) => this.createUrlTree(ld(e), t.queryParams, t.fragment))
            )
            .pipe(
              zu((t) => {
                if (t instanceof nd) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new $c([], { primary: t }) : t;
          return new Hc(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(A((t) => new $c([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          const r = [];
          for (const s of Object.keys(n.children))
            "primary" === s ? r.unshift(s) : r.push(s);
          return N(r).pipe(
            Gu((r) => {
              const s = n.children[r],
                i = Qh(e, r);
              return this.expandSegmentGroup(t, i, s, r).pipe(
                A((t) => ({ segment: t, outlet: r }))
              );
            }),
            Uu((t, e) => ((t[e.outlet] = e.segment), t), {}),
            (function (t, e) {
              const n = arguments.length >= 2;
              return (r) =>
                r.pipe(
                  t ? Lu((e, n) => t(e, n, r)) : _,
                  Zu(1),
                  n ? tc(e) : Ju(() => new Eu())
                );
            })()
          );
        }
        expandSegment(t, e, n, r, s, i) {
          return N(n).pipe(
            Gu((o) =>
              this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(
                zu((t) => {
                  if (t instanceof nd) return _u(null);
                  throw t;
                })
              )
            ),
            rc((t) => !!t),
            zu((t, n) => {
              if (t instanceof Eu || "EmptyError" === t.name) {
                if (ed(e, r, s)) return _u(new $c([], {}));
                throw new nd(e);
              }
              throw t;
            })
          );
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return td(r, e, s, i)
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, e, r, s, i)
              : o && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
              : sd(e)
            : sd(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return "**" === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                e,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? id(s)
            : this.lineralizeSegments(n, s).pipe(
                L((n) => {
                  const s = new $c(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: u,
          } = Kh(e, r, s);
          if (!o) return sd(e);
          const c = this.applyRedirectCommands(a, r.redirectTo, u);
          return r.redirectTo.startsWith("/")
            ? id(c)
            : this.lineralizeSegments(r, c).pipe(
                L((r) =>
                  this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(t, e, n, r, s) {
          if ("**" === n.path)
            return n.loadChildren
              ? (n._loadedConfig
                  ? _u(n._loadedConfig)
                  : this.configLoader.load(t.injector, n)
                ).pipe(A((t) => ((n._loadedConfig = t), new $c(r, {}))))
              : _u(new $c(r, {}));
          const { matched: i, consumedSegments: o, lastChild: a } = Kh(e, n, r);
          if (!i) return sd(e);
          const l = r.slice(a);
          return this.getChildConfig(t, n, r).pipe(
            L((t) => {
              const r = t.module,
                i = t.routes,
                { segmentGroup: a, slicedSegments: u } = Yh(e, o, l, i),
                c = new $c(a.segments, a.children);
              if (0 === u.length && c.hasChildren())
                return this.expandChildren(r, i, c).pipe(
                  A((t) => new $c(o, t))
                );
              if (0 === i.length && 0 === u.length) return _u(new $c(o, {}));
              const h = Wh(n) === s;
              return this.expandSegment(r, c, i, u, h ? "primary" : s, !0).pipe(
                A((t) => new $c(o.concat(t.segments), t.children))
              );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? _u(new Mh(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? _u(e._loadedConfig)
              : this.runCanLoadGuards(t.injector, e, n).pipe(
                  L((n) =>
                    n
                      ? this.configLoader
                          .load(t.injector, e)
                          .pipe(A((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new y((e) =>
                            e.error(
                              Oc(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : _u(new Mh([], t));
        }
        runCanLoadGuards(t, e, n) {
          const r = e.canLoad;
          return r && 0 !== r.length
            ? _u(
                r.map((r) => {
                  const s = t.get(r);
                  let i;
                  if (
                    (function (t) {
                      return t && Fh(t.canLoad);
                    })(s)
                  )
                    i = s.canLoad(e, n);
                  else {
                    if (!Fh(s)) throw new Error("Invalid CanLoad guard");
                    i = s(e, n);
                  }
                  return Nc(i);
                })
              ).pipe(
                $h(),
                ic((t) => {
                  if (!Lh(t)) return;
                  const e = Oc(
                    `Redirecting to "${this.urlSerializer.serialize(t)}"`
                  );
                  throw ((e.url = t), e);
                }),
                A((t) => !0 === t)
              )
            : _u(!0);
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return _u(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return od(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(
            e,
            this.urlSerializer.parse(e),
            t,
            n
          );
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new Hc(
            s,
            this.createQueryParams(e.queryParams, this.urlTree.queryParams),
            e.fragment
          );
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            Dc(t, (t, r) => {
              if ("string" == typeof t && t.startsWith(":")) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            Dc(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new $c(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) =>
            e.path.startsWith(":")
              ? this.findPosParam(t, e, r)
              : this.findOrReturn(e, n)
          );
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${e.path}'.`
            );
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function ld(t) {
        const e = {};
        for (const n of Object.keys(t.children)) {
          const r = ld(t.children[n]);
          (r.segments.length > 0 || r.hasChildren()) && (e[n] = r);
        }
        return (function (t) {
          if (1 === t.numberOfChildren && t.children.primary) {
            const e = t.children.primary;
            return new $c(t.segments.concat(e.segments), e.children);
          }
          return t;
        })(new $c(t.segments, e));
      }
      class ud {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class cd {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function hd(t, e, n) {
        const r = t._root;
        return pd(r, e ? e._root : null, n, [r.value]);
      }
      function dd(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function pd(
        t,
        e,
        n,
        r,
        s = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const i = hh(e);
        return (
          t.children.forEach((t) => {
            !(function (
              t,
              e,
              n,
              r,
              s = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const i = t.value,
                o = e ? e.value : null,
                a = n ? n.getContext(t.value.outlet) : null;
              if (o && i.routeConfig === o.routeConfig) {
                const l = (function (t, e, n) {
                  if ("function" == typeof n) return n(t, e);
                  switch (n) {
                    case "pathParamsChange":
                      return !Bc(t.url, e.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !Bc(t.url, e.url) || !Rc(t.queryParams, e.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !bh(t, e) || !Rc(t.queryParams, e.queryParams);
                    case "paramsChange":
                    default:
                      return !bh(t, e);
                  }
                })(o, i, i.routeConfig.runGuardsAndResolvers);
                l
                  ? s.canActivateChecks.push(new ud(r))
                  : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                  pd(t, e, i.component ? (a ? a.children : null) : n, r, s),
                  l &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    s.canDeactivateChecks.push(new cd(a.outlet.component, o));
              } else
                o && fd(e, a, s),
                  s.canActivateChecks.push(new ud(r)),
                  pd(t, null, i.component ? (a ? a.children : null) : n, r, s);
            })(t, i[t.value.outlet], n, r.concat([t.value]), s),
              delete i[t.value.outlet];
          }),
          Dc(i, (t, e) => fd(t, n.getContext(e), s)),
          s
        );
      }
      function fd(t, e, n) {
        const r = hh(t),
          s = t.value;
        Dc(r, (t, r) => {
          fd(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new cd(
              s.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              s
            )
          );
      }
      class gd {}
      function md(t) {
        return new y((e) => e.error(t));
      }
      class _d {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          const t = Yh(
              this.urlTree.root,
              [],
              [],
              this.config.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            e = this.processSegmentGroup(this.config, t, "primary");
          if (null === e) return null;
          const n = new mh(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              "primary",
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            r = new ch(n, e),
            s = new _h(this.url, r);
          return this.inheritParamsAndData(s._root), s;
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = gh(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = [];
          for (const s of Object.keys(e.children)) {
            const r = e.children[s],
              i = Qh(t, s),
              o = this.processSegmentGroup(i, r, s);
            if (null === o) return null;
            n.push(...o);
          }
          const r = (function (t) {
            const e = [];
            for (const n of t) {
              if (!yd(n)) {
                e.push(n);
                continue;
              }
              const t = e.find(
                (t) => n.value.routeConfig === t.value.routeConfig
              );
              void 0 !== t ? t.children.push(...n.children) : e.push(n);
            }
            return e;
          })(n);
          return (
            r.sort((t, e) =>
              "primary" === t.value.outlet
                ? -1
                : "primary" === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            r
          );
        }
        processSegment(t, e, n, r) {
          for (const s of t) {
            const t = this.processSegmentAgainstRoute(s, e, n, r);
            if (null !== t) return t;
          }
          return ed(e, n, r) ? [] : null;
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo || !td(t, e, n, r)) return null;
          let s,
            i = [],
            o = [];
          if ("**" === t.path) {
            const r = n.length > 0 ? jc(n).parameters : {};
            s = new mh(
              n,
              r,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              bd(t),
              Wh(t),
              t.component,
              t,
              vd(e),
              wd(e) + n.length,
              Cd(t)
            );
          } else {
            const r = Kh(e, t, n);
            if (!r.matched) return null;
            (i = r.consumedSegments),
              (o = n.slice(r.lastChild)),
              (s = new mh(
                i,
                r.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                bd(t),
                Wh(t),
                t.component,
                t,
                vd(e),
                wd(e) + i.length,
                Cd(t)
              ));
          }
          const a = (function (t) {
              return t.children
                ? t.children
                : t.loadChildren
                ? t._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: l, slicedSegments: u } = Yh(
              e,
              i,
              o,
              a.filter((t) => void 0 === t.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === u.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return null === t ? null : [new ch(s, t)];
          }
          if (0 === a.length && 0 === u.length) return [new ch(s, [])];
          const c = Wh(t) === r,
            h = this.processSegment(a, l, u, c ? "primary" : r);
          return null === h ? null : [new ch(s, h)];
        }
      }
      function yd(t) {
        const e = t.value.routeConfig;
        return e && "" === e.path && void 0 === e.redirectTo;
      }
      function vd(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function wd(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; )
          (e = e._sourceSegment),
            (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function bd(t) {
        return t.data || {};
      }
      function Cd(t) {
        return t.resolve || {};
      }
      function Sd(t) {
        return Iu((e) => {
          const n = t(e);
          return n ? N(n).pipe(A(() => e)) : _u(e);
        });
      }
      class xd extends class {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      } {}
      const Ed = new Vn("ROUTES");
      class Ad {
        constructor(t, e, n, r) {
          (this.loader = t),
            (this.compiler = e),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(t, e) {
          if (e._loader$) return e._loader$;
          this.onLoadStartListener && this.onLoadStartListener(e);
          const n = this.loadModuleFactory(e.loadChildren).pipe(
            A((n) => {
              this.onLoadEndListener && this.onLoadEndListener(e);
              const r = n.create(t);
              return new Mh(
                Pc(r.injector.get(Ed, void 0, vt.Self | vt.Optional)).map(Zh),
                r
              );
            }),
            zu((t) => {
              throw ((e._loader$ = void 0), t);
            })
          );
          return (e._loader$ = new W(n, () => new S()).pipe(q())), e._loader$;
        }
        loadModuleFactory(t) {
          return "string" == typeof t
            ? N(this.loader.load(t))
            : Nc(t()).pipe(
                L((t) =>
                  t instanceof Go
                    ? _u(t)
                    : N(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class Td {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new kd()),
            (this.attachRef = null);
        }
      }
      class kd {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new Td()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class Od {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function Id(t) {
        throw t;
      }
      function Rd(t, e, n) {
        return e.parse("/");
      }
      function Vd(t, e) {
        return _u(null);
      }
      let Pd = (() => {
          class t {
            constructor(t, e, n, r, s, i, o, a) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = a),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.disposed = !1),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new S()),
                (this.errorHandler = Id),
                (this.malformedUriErrorHandler = Rd),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: Vd,
                  afterPreactivation: Vd,
                }),
                (this.urlHandlingStrategy = new Od()),
                (this.routeReuseStrategy = new xd()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "corrected"),
                (this.ngModule = s.get(qo)),
                (this.console = s.get(va));
              const l = s.get(Va);
              (this.isNgZoneEnabled = l instanceof Va && Va.isInAngularZone()),
                this.resetConfig(a),
                (this.currentUrlTree = new Hc(new $c([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new Ad(
                  i,
                  o,
                  (t) => this.triggerEvent(new wc(t)),
                  (t) => this.triggerEvent(new bc(t))
                )),
                (this.routerState = ph(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new yu({
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
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                Lu((t) => 0 !== t.id),
                A((t) =>
                  Object.assign(Object.assign({}, t), {
                    extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl),
                  })
                ),
                Iu((t) => {
                  let n = !1,
                    r = !1;
                  return _u(t).pipe(
                    ic((t) => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null,
                      };
                    }),
                    Iu((t) => {
                      const n =
                        !this.navigated ||
                        t.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ("reload" === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return _u(t).pipe(
                          Iu((t) => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(
                                new hc(
                                  t.id,
                                  this.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              n !== this.transitions.getValue()
                                ? Tu
                                : Promise.resolve(t)
                            );
                          }),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (o = this.config),
                          Iu((t) =>
                            (function (t, e, n, r, s) {
                              return new ad(t, e, n, r, s).apply();
                            })(r, s, i, t.extractedUrl, o).pipe(
                              A((e) =>
                                Object.assign(Object.assign({}, t), {
                                  urlAfterRedirects: e,
                                })
                              )
                            )
                          )),
                          ic((t) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            );
                          }),
                          (function (t, e, n, r, s) {
                            return L((i) =>
                              (function (
                                t,
                                e,
                                n,
                                r,
                                s = "emptyOnly",
                                i = "legacy"
                              ) {
                                try {
                                  const o = new _d(
                                    t,
                                    e,
                                    n,
                                    r,
                                    s,
                                    i
                                  ).recognize();
                                  return null === o ? md(new gd()) : _u(o);
                                } catch (o) {
                                  return md(o);
                                }
                              })(
                                t,
                                e,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                s
                              ).pipe(
                                A((t) =>
                                  Object.assign(Object.assign({}, i), {
                                    targetSnapshot: t,
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (t) => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          ic((t) => {
                            "eager" === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state
                                ),
                              (this.browserUrlTree = t.urlAfterRedirects));
                            const n = new gc(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var r, s, i, o;
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: s,
                            restoredState: i,
                            extras: o,
                          } = t,
                          a = new hc(n, this.serializeUrl(r), s, i);
                        e.next(a);
                        const l = ph(r, this.rootComponentType).snapshot;
                        return _u(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl),
                        (this.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        Tu
                      );
                    }),
                    Sd((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    ic((t) => {
                      const e = new mc(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    A((t) =>
                      Object.assign(Object.assign({}, t), {
                        guards: hd(
                          t.targetSnapshot,
                          t.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                    ),
                    (function (t, e) {
                      return L((n) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: i,
                            canDeactivateChecks: o,
                          },
                        } = n;
                        return 0 === o.length && 0 === i.length
                          ? _u(
                              Object.assign(Object.assign({}, n), {
                                guardsResult: !0,
                              })
                            )
                          : (function (t, e, n, r) {
                              return N(t).pipe(
                                L((t) =>
                                  (function (t, e, n, r, s) {
                                    const i =
                                      e && e.routeConfig
                                        ? e.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? _u(
                                          i.map((i) => {
                                            const o = dd(i, e, s);
                                            let a;
                                            if (
                                              (function (t) {
                                                return t && Fh(t.canDeactivate);
                                              })(o)
                                            )
                                              a = Nc(
                                                o.canDeactivate(t, e, n, r)
                                              );
                                            else {
                                              if (!Fh(o))
                                                throw new Error(
                                                  "Invalid CanDeactivate guard"
                                                );
                                              a = Nc(o(t, e, n, r));
                                            }
                                            return a.pipe(rc());
                                          })
                                        ).pipe($h())
                                      : _u(!0);
                                  })(t.component, t.route, n, e, r)
                                ),
                                rc((t) => !0 !== t, !0)
                              );
                            })(o, r, s, t).pipe(
                              L((n) =>
                                n && "boolean" == typeof n
                                  ? (function (t, e, n, r) {
                                      return N(e).pipe(
                                        Gu((e) =>
                                          Au(
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new Cc(t)),
                                                _u(!0)
                                              );
                                            })(e.route.parent, r),
                                            (function (t, e) {
                                              return (
                                                null !== t && e && e(new xc(t)),
                                                _u(!0)
                                              );
                                            })(e.route, r),
                                            (function (t, e, n) {
                                              const r = e[e.length - 1],
                                                s = e
                                                  .slice(0, e.length - 1)
                                                  .reverse()
                                                  .map((t) =>
                                                    (function (t) {
                                                      const e = t.routeConfig
                                                        ? t.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return e && 0 !== e.length
                                                        ? { node: t, guards: e }
                                                        : null;
                                                    })(t)
                                                  )
                                                  .filter((t) => null !== t)
                                                  .map((e) =>
                                                    Ou(() =>
                                                      _u(
                                                        e.guards.map((s) => {
                                                          const i = dd(
                                                            s,
                                                            e.node,
                                                            n
                                                          );
                                                          let o;
                                                          if (
                                                            (function (t) {
                                                              return (
                                                                t &&
                                                                Fh(
                                                                  t.canActivateChild
                                                                )
                                                              );
                                                            })(i)
                                                          )
                                                            o = Nc(
                                                              i.canActivateChild(
                                                                r,
                                                                t
                                                              )
                                                            );
                                                          else {
                                                            if (!Fh(i))
                                                              throw new Error(
                                                                "Invalid CanActivateChild guard"
                                                              );
                                                            o = Nc(i(r, t));
                                                          }
                                                          return o.pipe(rc());
                                                        })
                                                      ).pipe($h())
                                                    )
                                                  );
                                              return _u(s).pipe($h());
                                            })(t, e.path, n),
                                            (function (t, e, n) {
                                              const r = e.routeConfig
                                                ? e.routeConfig.canActivate
                                                : null;
                                              return r && 0 !== r.length
                                                ? _u(
                                                    r.map((r) =>
                                                      Ou(() => {
                                                        const s = dd(r, e, n);
                                                        let i;
                                                        if (
                                                          (function (t) {
                                                            return (
                                                              t &&
                                                              Fh(t.canActivate)
                                                            );
                                                          })(s)
                                                        )
                                                          i = Nc(
                                                            s.canActivate(e, t)
                                                          );
                                                        else {
                                                          if (!Fh(s))
                                                            throw new Error(
                                                              "Invalid CanActivate guard"
                                                            );
                                                          i = Nc(s(e, t));
                                                        }
                                                        return i.pipe(rc());
                                                      })
                                                    )
                                                  ).pipe($h())
                                                : _u(!0);
                                            })(t, e.route, n)
                                          )
                                        ),
                                        rc((t) => !0 !== t, !0)
                                      );
                                    })(r, i, t, e)
                                  : _u(n)
                              ),
                              A((t) =>
                                Object.assign(Object.assign({}, n), {
                                  guardsResult: t,
                                })
                              )
                            );
                      });
                    })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                    ic((t) => {
                      if (Lh(t.guardsResult)) {
                        const e = Oc(
                          `Redirecting to "${this.serializeUrl(
                            t.guardsResult
                          )}"`
                        );
                        throw ((e.url = t.guardsResult), e);
                      }
                      const e = new _c(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    Lu((t) => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new pc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          ""
                        );
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    Sd((t) => {
                      if (t.guards.canActivateChecks.length)
                        return _u(t).pipe(
                          ic((t) => {
                            const e = new yc(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          Iu((t) => {
                            let n = !1;
                            return _u(t).pipe(
                              ((r = this.paramsInheritanceStrategy),
                              (s = this.ngModule.injector),
                              L((t) => {
                                const {
                                  targetSnapshot: e,
                                  guards: { canActivateChecks: n },
                                } = t;
                                if (!n.length) return _u(t);
                                let i = 0;
                                return N(n).pipe(
                                  Gu((t) =>
                                    (function (t, e, n, r) {
                                      return (function (t, e, n, r) {
                                        const s = Object.keys(t);
                                        if (0 === s.length) return _u({});
                                        const i = {};
                                        return N(s).pipe(
                                          L((s) =>
                                            (function (t, e, n, r) {
                                              const s = dd(t, e, r);
                                              return Nc(
                                                s.resolve
                                                  ? s.resolve(e, n)
                                                  : s(e, n)
                                              );
                                            })(t[s], e, n, r).pipe(
                                              ic((t) => {
                                                i[s] = t;
                                              })
                                            )
                                          ),
                                          Zu(1),
                                          L(() =>
                                            Object.keys(i).length === s.length
                                              ? _u(i)
                                              : Tu
                                          )
                                        );
                                      })(t._resolve, t, e, r).pipe(
                                        A(
                                          (e) => (
                                            (t._resolvedData = e),
                                            (t.data = Object.assign(
                                              Object.assign({}, t.data),
                                              gh(t, n).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(t.route, e, r, s)
                                  ),
                                  ic(() => i++),
                                  Zu(1),
                                  L((e) => (i === n.length ? _u(t) : Tu))
                                );
                              })),
                              ic({
                                next: () => (n = !0),
                                complete: () => {
                                  if (!n) {
                                    const n = new pc(
                                      t.id,
                                      this.serializeUrl(t.extractedUrl),
                                      "At least one route resolver didn't emit any value."
                                    );
                                    e.next(n), t.resolve(!1);
                                  }
                                },
                              })
                            );
                            var r, s;
                          }),
                          ic((t) => {
                            const e = new vc(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                    }),
                    Sd((t) => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    A((t) => {
                      const e = (function (t, e, n) {
                        const r = Ch(t, e._root, n ? n._root : void 0);
                        return new dh(r, e);
                      })(
                        this.routeReuseStrategy,
                        t.targetSnapshot,
                        t.currentRouterState
                      );
                      return Object.assign(Object.assign({}, t), {
                        targetRouterState: e,
                      });
                    }),
                    ic((t) => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          t.rawUrl
                        )),
                        (this.routerState = t.targetRouterState),
                        "deferred" === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((i = this.rootContexts),
                    (o = this.routeReuseStrategy),
                    (a = (t) => this.triggerEvent(t)),
                    A(
                      (t) => (
                        new Nh(
                          o,
                          t.targetRouterState,
                          t.currentRouterState,
                          a
                        ).activate(i),
                        t
                      )
                    )),
                    ic({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      },
                    }),
                    ((s = () => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new pc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    (t) => t.lift(new lc(s))),
                    zu((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = Lh(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ));
                        const s = new pc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n.message
                        );
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                );
                                this.scheduleNavigation(
                                  e,
                                  "imperative",
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl:
                                      "eager" === this.urlUpdateStrategy,
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
                        this.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        const r = new fc(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          n
                        );
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return Tu;
                    })
                  );
                  var s, i, o, a;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), t)
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  const e = this.extractLocationChangeInfoFromEvent(t);
                  this.shouldScheduleNavigation(
                    this.lastLocationChangeInfo,
                    e
                  ) &&
                    setTimeout(() => {
                      const { source: t, state: n, urlTree: r } = e,
                        s = { replaceUrl: !0 };
                      if (n) {
                        const t = Object.assign({}, n);
                        delete t.navigationId,
                          0 !== Object.keys(t).length && (s.state = t);
                      }
                      this.scheduleNavigation(r, t, n, s);
                    }, 0),
                    (this.lastLocationChangeInfo = e);
                }));
            }
            extractLocationChangeInfoFromEvent(t) {
              var e;
              return {
                source: "popstate" === t.type ? "popstate" : "hashchange",
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
            }
            shouldScheduleNavigation(t, e) {
              if (!t) return !0;
              const n = e.urlTree.toString() === t.urlTree.toString();
              return !(
                e.transitionId === t.transitionId &&
                n &&
                (("hashchange" === e.source && "popstate" === t.source) ||
                  ("popstate" === e.source && "hashchange" === t.source))
              );
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              Bh(t),
                (this.config = t.map(Zh)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.transitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(t, e = {}) {
              const {
                  relativeTo: n,
                  queryParams: r,
                  fragment: s,
                  queryParamsHandling: i,
                  preserveFragment: o,
                } = e,
                a = n || this.routerState.root,
                l = o ? this.currentUrlTree.fragment : s;
              let u = null;
              switch (i) {
                case "merge":
                  u = Object.assign(
                    Object.assign({}, this.currentUrlTree.queryParams),
                    r
                  );
                  break;
                case "preserve":
                  u = this.currentUrlTree.queryParams;
                  break;
                default:
                  u = r || null;
              }
              return (
                null !== u && (u = this.removeEmptyProps(u)),
                (function (t, e, n, r, s) {
                  if (0 === n.length) return Ah(e.root, e.root, e, r, s);
                  const i = (function (t) {
                    if (
                      "string" == typeof t[0] &&
                      1 === t.length &&
                      "/" === t[0]
                    )
                      return new kh(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ("object" == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            Dc(r.outlets, (t, n) => {
                              e[n] = "string" == typeof t ? t.split("/") : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return "string" != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split("/").forEach((r, s) => {
                            (0 == s && "." === r) ||
                              (0 == s && "" === r
                                ? (n = !0)
                                : ".." === r
                                ? e++
                                : "" != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new kh(n, e, r);
                  })(n);
                  if (i.toRoot()) return Ah(e.root, new $c([], {}), e, r, s);
                  const o = (function (t, e, n) {
                      if (t.isAbsolute) return new Oh(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) {
                        const t = n.snapshot._urlSegment;
                        return new Oh(t, t === e.root, 0);
                      }
                      const r = xh(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new Oh(r, !1, s - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots
                      );
                    })(i, e, t),
                    a = o.processChildren
                      ? Rh(o.segmentGroup, o.index, i.commands)
                      : Ih(o.segmentGroup, o.index, i.commands);
                  return Ah(o.segmentGroup, a, e, r, s);
                })(a, this.currentUrlTree, t, u, l)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              const n = Lh(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, "imperative", null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function (t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${e}`
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (Lh(t)) return Uc(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return Uc(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (t) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new dc(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                (t) => {
                  this.console.warn("Unhandled Navigation Error: ");
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              if (this.disposed) return Promise.resolve(!1);
              const i = this.getTransition(),
                o =
                  "imperative" !== e &&
                  "imperative" === (null == i ? void 0 : i.source),
                a =
                  (this.lastSuccessfulId === i.id || this.currentNavigation
                    ? i.rawUrl
                    : i.urlAfterRedirects
                  ).toString() === t.toString();
              if (o && a) return Promise.resolve(!0);
              let l, u, c;
              s
                ? ((l = s.resolve), (u = s.reject), (c = s.promise))
                : (c = new Promise((t, e) => {
                    (l = t), (u = e);
                  }));
              const h = ++this.navigationId;
              return (
                this.setTransition({
                  id: h,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: l,
                  reject: u,
                  promise: c,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                c.catch((t) => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    )
                  : this.location.go(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    );
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                { navigationId: this.lastSuccessfulId }
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                Zn(jn),
                Zn(qc),
                Zn(kd),
                Zn(Al),
                Zn(si),
                Zn(el),
                Zn(Oa),
                Zn(void 0)
              );
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        jd = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.onChanges = new S()),
                (this.subscription = t.events.subscribe((t) => {
                  t instanceof dc && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, r, s) {
              if (0 !== t || e || n || r || s) return !0;
              if ("string" == typeof this.target && "_self" != this.target)
                return !0;
              const i = {
                skipLocationChange: Dd(this.skipLocationChange),
                replaceUrl: Dd(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, i), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree)
              );
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo:
                  void 0 !== this.relativeTo ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Dd(this.preserveFragment),
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(vi(Pd), vi(fh), vi(bl));
            }),
            (t.ɵdir = Wt({
              type: t,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                1 & t &&
                  Ti("click", function (t) {
                    return e.onClick(
                      t.button,
                      t.ctrlKey,
                      t.shiftKey,
                      t.altKey,
                      t.metaKey
                    );
                  }),
                  2 & t && ($i("href", e.href, ir), mi("target", e.target));
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
              features: [ie],
            })),
            t
          );
        })();
      function Dd(t) {
        return "" === t || !!t;
      }
      let Nd = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = s),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new ua()),
              (this.deactivateEvents = new ua()),
              (this.name = r || "primary"),
              t.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const t = this.parentContexts.getContext(this.name);
              t &&
                t.route &&
                (t.attachRef
                  ? this.attach(t.attachRef, t.route)
                  : this.activateWith(t.route, t.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const t = this.activated;
            return (this.activated = null), (this._activatedRoute = null), t;
          }
          attach(t, e) {
            (this.activated = t),
              (this._activatedRoute = e),
              this.location.insert(t.hostView);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, e) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = t;
            const n = (e = e || this.resolver).resolveComponentFactory(
                t._futureSnapshot.routeConfig.component
              ),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              s = new Ud(t, r, this.location.injector);
            (this.activated = this.location.createComponent(
              n,
              this.location.length,
              s
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              vi(kd),
              vi(Wo),
              vi(oo),
              ("name",
              (function (t, e) {
                const n = t.attrs;
                if (n) {
                  const t = n.length;
                  let e = 0;
                  for (; e < t; ) {
                    const r = n[e];
                    if (rn(r)) break;
                    if (0 === r) e += 2;
                    else if ("number" == typeof r)
                      for (e++; e < t && "string" == typeof n[e]; ) e++;
                    else {
                      if ("name" === r) return n[e + 1];
                      e += 2;
                    }
                  }
                }
                return null;
              })(ke())),
              vi(No)
            );
          }),
          (t.ɵdir = Wt({
            type: t,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
            },
            exportAs: ["outlet"],
          })),
          t
        );
      })();
      class Ud {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === fh
            ? this.route
            : t === kd
            ? this.childContexts
            : this.parent.get(t, e);
        }
      }
      class Md {}
      class Fd {
        preload(t, e) {
          return _u(null);
        }
      }
      let Ld = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new Ad(
                  e,
                  n,
                  (e) => t.triggerEvent(new wc(e)),
                  (e) => t.triggerEvent(new bc(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  Lu((t) => t instanceof dc),
                  Gu(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(qo);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return N(n).pipe(
                z(),
                A((t) => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                (e._loadedConfig
                  ? _u(e._loadedConfig)
                  : this.loader.load(t.injector, e)
                ).pipe(
                  L(
                    (t) => (
                      (e._loadedConfig = t),
                      this.processRoutes(t.module, t.routes)
                    )
                  )
                )
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Zn(Pd), Zn(el), Zn(Oa), Zn(si), Zn(Md));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Hd = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || "disabled"),
                (n.anchorScrolling = n.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof hc
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState
                      ? t.restoredState.navigationId
                      : 0))
                  : t instanceof dc &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(
                      t,
                      this.router.parseUrl(t.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((t) => {
                t instanceof Ac &&
                  (t.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new Ac(
                  t,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(Zn(Pd), Zn(Ll), Zn(void 0));
            }),
            (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const $d = new Vn("ROUTER_CONFIGURATION"),
        zd = new Vn("ROUTER_FORROOT_GUARD"),
        Bd = [
          Al,
          { provide: qc, useClass: Gc },
          {
            provide: Pd,
            useFactory: function (t, e, n, r, s, i, o, a = {}, l, u) {
              const c = new Pd(null, t, e, n, r, s, i, Pc(o));
              if (
                (l && (c.urlHandlingStrategy = l),
                u && (c.routeReuseStrategy = u),
                (function (t, e) {
                  t.errorHandler && (e.errorHandler = t.errorHandler),
                    t.malformedUriErrorHandler &&
                      (e.malformedUriErrorHandler = t.malformedUriErrorHandler),
                    t.onSameUrlNavigation &&
                      (e.onSameUrlNavigation = t.onSameUrlNavigation),
                    t.paramsInheritanceStrategy &&
                      (e.paramsInheritanceStrategy =
                        t.paramsInheritanceStrategy),
                    t.relativeLinkResolution &&
                      (e.relativeLinkResolution = t.relativeLinkResolution),
                    t.urlUpdateStrategy &&
                      (e.urlUpdateStrategy = t.urlUpdateStrategy);
                })(a, c),
                a.enableTracing)
              ) {
                const t = cl();
                c.events.subscribe((e) => {
                  t.logGroup(`Router Event: ${e.constructor.name}`),
                    t.log(e.toString()),
                    t.log(e),
                    t.logGroupEnd();
                });
              }
              return c;
            },
            deps: [
              qc,
              kd,
              Al,
              si,
              el,
              Oa,
              Ed,
              $d,
              [class {}, new Yn()],
              [class {}, new Yn()],
            ],
          },
          kd,
          {
            provide: fh,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [Pd],
          },
          { provide: el, useClass: sl },
          Ld,
          Fd,
          class {
            preload(t, e) {
              return e().pipe(zu(() => _u(null)));
            }
          },
          { provide: $d, useValue: { enableTracing: !1 } },
        ];
      function qd() {
        return new Wa("Router", Pd);
      }
      let Gd = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                Bd,
                Jd(e),
                {
                  provide: zd,
                  useFactory: Qd,
                  deps: [[Pd, new Yn(), new Xn()]],
                },
                { provide: $d, useValue: n || {} },
                {
                  provide: bl,
                  useFactory: Wd,
                  deps: [dl, [new Kn(Sl), new Yn()], $d],
                },
                { provide: Hd, useFactory: Zd, deps: [Pd, Ll, $d] },
                {
                  provide: Md,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : Fd,
                },
                { provide: Wa, multi: !0, useFactory: qd },
                [
                  Kd,
                  { provide: ha, multi: !0, useFactory: Yd, deps: [Kd] },
                  { provide: tp, useFactory: Xd, deps: [Kd] },
                  { provide: ya, multi: !0, useExisting: tp },
                ],
              ],
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [Jd(e)] };
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(zd, 8), Zn(Pd, 8));
          }),
          (t.ɵmod = Gt({ type: t })),
          (t.ɵinj = ht({})),
          t
        );
      })();
      function Zd(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Hd(t, e, n);
      }
      function Wd(t, e, n = {}) {
        return n.useHash ? new El(t, e) : new xl(t, e);
      }
      function Qd(t) {
        return "guarded";
      }
      function Jd(t) {
        return [
          { provide: Pn, multi: !0, useValue: t },
          { provide: Ed, multi: !0, useValue: t },
        ];
      }
      let Kd = (() => {
        class t {
          constructor(t) {
            (this.injector = t),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new S());
          }
          appInitializer() {
            return this.injector.get(fl, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise((e) => (t = e)),
                n = this.injector.get(Pd),
                r = this.injector.get($d);
              return (
                "disabled" === r.initialNavigation
                  ? (n.setUpLocationChangeListener(), t(!0))
                  : "enabled" === r.initialNavigation ||
                    "enabledBlocking" === r.initialNavigation
                  ? ((n.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? _u(null)
                        : ((this.initNavigation = !0),
                          t(!0),
                          this.resultOfPreactivationDone)),
                    n.initialNavigation())
                  : t(!0),
                e
              );
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get($d),
              n = this.injector.get(Ld),
              r = this.injector.get(Hd),
              s = this.injector.get(Pd),
              i = this.injector.get(Xa);
            t === i.components[0] &&
              (("enabledNonBlocking" !== e.initialNavigation &&
                void 0 !== e.initialNavigation) ||
                s.initialNavigation(),
              n.setUpPreloading(),
              r.init(),
              s.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(Zn(si));
          }),
          (t.ɵprov = ct({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Yd(t) {
        return t.appInitializer.bind(t);
      }
      function Xd(t) {
        return t.bootstrapListener.bind(t);
      }
      const tp = new Vn("Router Initializer");
      let ep = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = $t({
            type: t,
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
                (Ci(0, "div", 0),
                Ci(1, "div", 1),
                Ci(2, "h1", 2),
                Fi(3, "About This Angular App"),
                Si(),
                Ci(4, "p", 3),
                Fi(
                  5,
                  "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
                ),
                Si(),
                xi(6, "hr", 4),
                Ci(7, "p"),
                Fi(
                  8,
                  "It uses utility classes for typography and spacing to space content out within the larger container."
                ),
                Si(),
                Ci(9, "a", 5),
                Fi(10, "Learn more"),
                Si(),
                Si(),
                Si());
            },
            styles: [""],
          })),
          t
        );
      })();
      function np(t, e) {
        return new y((n) => {
          const r = t.length;
          if (0 === r) return void n.complete();
          const s = new Array(r);
          let i = 0,
            o = 0;
          for (let a = 0; a < r; a++) {
            const l = N(t[a]);
            let u = !1;
            n.add(
              l.subscribe({
                next: (t) => {
                  u || ((u = !0), o++), (s[a] = t);
                },
                error: (t) => n.error(t),
                complete: () => {
                  i++,
                    (i !== r && u) ||
                      (o === r &&
                        n.next(
                          e ? e.reduce((t, e, n) => ((t[e] = s[n]), t), {}) : s
                        ),
                      n.complete());
                },
              })
            );
          }
        });
      }
      const rp = new Vn("NgValueAccessor"),
        sp = { provide: rp, useExisting: rt(() => op), multi: !0 },
        ip = new Vn("CompositionEventMode");
      let op = (() => {
        class t {
          constructor(t, e, n) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._compositionMode = n),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function () {
                  const t = cl() ? cl().getUserAgent() : "";
                  return /android (\d+)/.test(t.toLowerCase());
                })());
          }
          writeValue(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "value",
              null == t ? "" : t
            );
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              "disabled",
              t
            );
          }
          _handleInput(t) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(t);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(t) {
            (this._composing = !1), this._compositionMode && this.onChange(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(vi(po), vi(co), vi(ip, 8));
          }),
          (t.ɵdir = Wt({
            type: t,
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
                Ti("input", function (t) {
                  return e._handleInput(t.target.value);
                })("blur", function () {
                  return e.onTouched();
                })("compositionstart", function () {
                  return e._compositionStart();
                })("compositionend", function (t) {
                  return e._compositionEnd(t.target.value);
                });
            },
            features: [ro([sp])],
          })),
          t
        );
      })();
      const ap = new Vn("NgValidators"),
        lp = new Vn("NgAsyncValidators");
      function up(t) {
        return null != t;
      }
      function cp(t) {
        const e = Ei(t) ? N(t) : t;
        return Ai(e), e;
      }
      function hp(t) {
        let e = {};
        return (
          t.forEach((t) => {
            e = null != t ? Object.assign(Object.assign({}, e), t) : e;
          }),
          0 === Object.keys(e).length ? null : e
        );
      }
      function dp(t, e) {
        return e.map((e) => e(t));
      }
      function pp(t) {
        return t.map((t) =>
          (function (t) {
            return !t.validate;
          })(t)
            ? t
            : (e) => t.validate(e)
        );
      }
      function fp(t) {
        return null != t
          ? (function (t) {
              if (!t) return null;
              const e = t.filter(up);
              return 0 == e.length
                ? null
                : function (t) {
                    return hp(dp(t, e));
                  };
            })(pp(t))
          : null;
      }
      function gp(t) {
        return null != t
          ? (function (t) {
              if (!t) return null;
              const e = t.filter(up);
              return 0 == e.length
                ? null
                : function (t) {
                    return (function (...t) {
                      if (1 === t.length) {
                        const e = t[0];
                        if (l(e)) return np(e, null);
                        if (
                          u(e) &&
                          Object.getPrototypeOf(e) === Object.prototype
                        ) {
                          const t = Object.keys(e);
                          return np(
                            t.map((t) => e[t]),
                            t
                          );
                        }
                      }
                      if ("function" == typeof t[t.length - 1]) {
                        const e = t.pop();
                        return np(
                          (t = 1 === t.length && l(t[0]) ? t[0] : t),
                          null
                        ).pipe(A((t) => e(...t)));
                      }
                      return np(t, null);
                    })(dp(t, e).map(cp)).pipe(A(hp));
                  };
            })(pp(t))
          : null;
      }
      function mp(t, e) {
        return null === t ? [e] : Array.isArray(t) ? [...t, e] : [t, e];
      }
      let _p = (() => {
          class t {
            constructor() {
              (this._rawValidators = []),
                (this._rawAsyncValidators = []),
                (this._onDestroyCallbacks = []);
            }
            get value() {
              return this.control ? this.control.value : null;
            }
            get valid() {
              return this.control ? this.control.valid : null;
            }
            get invalid() {
              return this.control ? this.control.invalid : null;
            }
            get pending() {
              return this.control ? this.control.pending : null;
            }
            get disabled() {
              return this.control ? this.control.disabled : null;
            }
            get enabled() {
              return this.control ? this.control.enabled : null;
            }
            get errors() {
              return this.control ? this.control.errors : null;
            }
            get pristine() {
              return this.control ? this.control.pristine : null;
            }
            get dirty() {
              return this.control ? this.control.dirty : null;
            }
            get touched() {
              return this.control ? this.control.touched : null;
            }
            get status() {
              return this.control ? this.control.status : null;
            }
            get untouched() {
              return this.control ? this.control.untouched : null;
            }
            get statusChanges() {
              return this.control ? this.control.statusChanges : null;
            }
            get valueChanges() {
              return this.control ? this.control.valueChanges : null;
            }
            get path() {
              return null;
            }
            _setValidators(t) {
              (this._rawValidators = t || []),
                (this._composedValidatorFn = fp(this._rawValidators));
            }
            _setAsyncValidators(t) {
              (this._rawAsyncValidators = t || []),
                (this._composedAsyncValidatorFn = gp(this._rawAsyncValidators));
            }
            get validator() {
              return this._composedValidatorFn || null;
            }
            get asyncValidator() {
              return this._composedAsyncValidatorFn || null;
            }
            _registerOnDestroy(t) {
              this._onDestroyCallbacks.push(t);
            }
            _invokeOnDestroyCallbacks() {
              this._onDestroyCallbacks.forEach((t) => t()),
                (this._onDestroyCallbacks = []);
            }
            reset(t) {
              this.control && this.control.reset(t);
            }
            hasError(t, e) {
              return !!this.control && this.control.hasError(t, e);
            }
            getError(t, e) {
              return this.control ? this.control.getError(t, e) : null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = Wt({ type: t })),
            t
          );
        })(),
        yp = (() => {
          class t extends _p {
            get formDirective() {
              return null;
            }
            get path() {
              return null;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return vp(e || t);
            }),
            (t.ɵdir = Wt({ type: t, features: [oi] })),
            t
          );
        })();
      const vp = On(yp);
      class wp extends _p {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class bp {
        constructor(t) {
          this._cd = t;
        }
        is(t) {
          var e, n;
          return !!(null ===
            (n =
              null === (e = this._cd) || void 0 === e ? void 0 : e.control) ||
          void 0 === n
            ? void 0
            : n[t]);
        }
      }
      let Cp = (() => {
          class t extends bp {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(vi(wp, 2));
            }),
            (t.ɵdir = Wt({
              type: t,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (t, e) {
                2 & t &&
                  ji("ng-untouched", e.is("untouched"))(
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
              features: [oi],
            })),
            t
          );
        })(),
        Sp = (() => {
          class t extends bp {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(vi(yp, 10));
            }),
            (t.ɵdir = Wt({
              type: t,
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
                  ji("ng-untouched", e.is("untouched"))(
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
              features: [oi],
            })),
            t
          );
        })();
      function xp(t, e) {
        Ap(t, e, !0),
          e.valueAccessor.writeValue(t.value),
          (function (t, e) {
            e.valueAccessor.registerOnChange((n) => {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                "change" === t.updateOn && Tp(t, e);
            });
          })(t, e),
          (function (t, e) {
            const n = (t, n) => {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            };
            t.registerOnChange(n),
              e._registerOnDestroy(() => {
                t._unregisterOnChange(n);
              });
          })(t, e),
          (function (t, e) {
            e.valueAccessor.registerOnTouched(() => {
              (t._pendingTouched = !0),
                "blur" === t.updateOn && t._pendingChange && Tp(t, e),
                "submit" !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          (function (t, e) {
            if (e.valueAccessor.setDisabledState) {
              const n = (t) => {
                e.valueAccessor.setDisabledState(t);
              };
              t.registerOnDisabledChange(n),
                e._registerOnDestroy(() => {
                  t._unregisterOnDisabledChange(n);
                });
            }
          })(t, e);
      }
      function Ep(t, e) {
        t.forEach((t) => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(e);
        });
      }
      function Ap(t, e, n) {
        const r = (function (t) {
          return t._rawValidators;
        })(t);
        null !== e.validator
          ? t.setValidators(mp(r, e.validator))
          : "function" == typeof r && t.setValidators([r]);
        const s = (function (t) {
          return t._rawAsyncValidators;
        })(t);
        if (
          (null !== e.asyncValidator
            ? t.setAsyncValidators(mp(s, e.asyncValidator))
            : "function" == typeof s && t.setAsyncValidators([s]),
          n)
        ) {
          const n = () => t.updateValueAndValidity();
          Ep(e._rawValidators, n), Ep(e._rawAsyncValidators, n);
        }
      }
      function Tp(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function kp(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      function Op(t) {
        return (Pp(t) ? t.validators : t) || null;
      }
      function Ip(t) {
        return Array.isArray(t) ? fp(t) : t || null;
      }
      function Rp(t, e) {
        return (Pp(e) ? e.asyncValidators : t) || null;
      }
      function Vp(t) {
        return Array.isArray(t) ? gp(t) : t || null;
      }
      function Pp(t) {
        return null != t && !Array.isArray(t) && "object" == typeof t;
      }
      class jp {
        constructor(t, e) {
          (this._hasOwnPendingAsyncValidator = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = t),
            (this._rawAsyncValidators = e),
            (this._composedValidatorFn = Ip(this._rawValidators)),
            (this._composedAsyncValidatorFn = Vp(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return "VALID" === this.status;
        }
        get invalid() {
          return "INVALID" === this.status;
        }
        get pending() {
          return "PENDING" == this.status;
        }
        get disabled() {
          return "DISABLED" === this.status;
        }
        get enabled() {
          return "DISABLED" !== this.status;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(t) {
          (this._rawValidators = t), (this._composedValidatorFn = Ip(t));
        }
        setAsyncValidators(t) {
          (this._rawAsyncValidators = t),
            (this._composedAsyncValidatorFn = Vp(t));
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = "PENDING"),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = "DISABLED"),
            (this.errors = null),
            this._forEachChild((e) => {
              e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = "VALID"),
            this._forEachChild((e) => {
              e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: e })
            ),
            this._onDisabledChange.forEach((t) => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              ("VALID" !== this.status && "PENDING" !== this.status) ||
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? "DISABLED" : "VALID";
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            (this.status = "PENDING"), (this._hasOwnPendingAsyncValidator = !0);
            const e = cp(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((e) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(e, { emitEvent: t });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function (t, e, n) {
            if (null == e) return null;
            if (
              (Array.isArray(e) || (e = e.split(".")),
              Array.isArray(e) && 0 === e.length)
            )
              return null;
            let r = t;
            return (
              e.forEach((t) => {
                r =
                  r instanceof Np
                    ? r.controls.hasOwnProperty(t)
                      ? r.controls[t]
                      : null
                    : (r instanceof Up && r.at(t)) || null;
              }),
              r
            );
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new ua()), (this.statusChanges = new ua());
        }
        _calculateStatus() {
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
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            "object" == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            "value" in t &&
            "disabled" in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          Pp(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class Dp extends jp {
        constructor(t = null, e, n) {
          super(Op(e), Rp(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this._initObservables(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!n });
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach((t) =>
                t(this.value, !1 !== e.emitViewToModelChange)
              ),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _unregisterOnChange(t) {
          kp(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          kp(this._onDisabledChange, t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
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
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class Np extends jp {
        constructor(t, e, n) {
          super(Op(e), Rp(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!n });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(t, e) {
          this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach((n) => {
              this._throwIfControlMissing(n),
                this.controls[n].setValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (Object.keys(t).forEach((n) => {
              this.controls[n] &&
                this.controls[n].patchValue(t[n], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => (
              (t[n] = e instanceof Dp ? e.value : e.getRawValue()), t
            )
          );
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (t, e) => !!e._syncPendingControls() || t
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t])
            throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((e) => {
            const n = this.controls[e];
            n && t(n, e);
          });
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const e of Object.keys(this.controls)) {
            const n = this.controls[e];
            if (this.contains(e) && t(n)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t)
          );
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, r) => {
              n = e(n, t, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control with name: '${n}'.`
              );
          });
        }
      }
      class Up extends jp {
        constructor(t, e, n) {
          super(Op(e), Rp(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!n });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(t, e) {
          this.controls.splice(t, 0, e),
            this._registerControl(e),
            this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, e) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n),
                this.at(n).setValue(t, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (t.forEach((t, n) => {
              this.at(n) &&
                this.at(n).patchValue(t, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent,
                });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map((t) =>
            t instanceof Dp ? t.value : t.getRawValue()
          );
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (t, e) => !!e._syncPendingControls() || t,
            !1
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t))
            throw new Error(`Cannot find form control at index ${t}`);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((t) => t.enabled || this.disabled)
            .map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((e) => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n])
              throw new Error(
                `Must supply a value for form control at index: ${n}.`
              );
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const Mp = { provide: yp, useExisting: rt(() => Lp) },
        Fp = (() => Promise.resolve(null))();
      let Lp = (() => {
        class t extends yp {
          constructor(t, e) {
            super(),
              (this.submitted = !1),
              (this._directives = []),
              (this.ngSubmit = new ua()),
              (this.form = new Np({}, fp(t), gp(e)));
          }
          ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          get controls() {
            return this.form.controls;
          }
          addControl(t) {
            Fp.then(() => {
              const e = this._findContainer(t.path);
              (t.control = e.registerControl(t.name, t.control)),
                xp(t.control, t),
                t.control.updateValueAndValidity({ emitEvent: !1 }),
                this._directives.push(t);
            });
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            Fp.then(() => {
              const e = this._findContainer(t.path);
              e && e.removeControl(t.name), kp(this._directives, t);
            });
          }
          addFormGroup(t) {
            Fp.then(() => {
              const e = this._findContainer(t.path),
                n = new Np({});
              (function (t, e) {
                Ap(t, e, !1);
              })(n, t),
                e.registerControl(t.name, n),
                n.updateValueAndValidity({ emitEvent: !1 });
            });
          }
          removeFormGroup(t) {
            Fp.then(() => {
              const e = this._findContainer(t.path);
              e && e.removeControl(t.name);
            });
          }
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          updateModel(t, e) {
            Fp.then(() => {
              this.form.get(t.path).setValue(e);
            });
          }
          setValue(t) {
            this.control.setValue(t);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              (e = this._directives),
              this.form._syncPendingControls(),
              e.forEach((t) => {
                const e = t.control;
                "submit" === e.updateOn &&
                  e._pendingChange &&
                  (t.viewToModelUpdate(e._pendingValue),
                  (e._pendingChange = !1));
              }),
              this.ngSubmit.emit(t),
              !1
            );
            var e;
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _setUpdateStrategy() {
            this.options &&
              null != this.options.updateOn &&
              (this.form._updateOn = this.options.updateOn);
          }
          _findContainer(t) {
            return t.pop(), t.length ? this.form.get(t) : this.form;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(vi(ap, 10), vi(lp, 10));
          }),
          (t.ɵdir = Wt({
            type: t,
            selectors: [
              ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
              ["ng-form"],
              ["", "ngForm", ""],
            ],
            hostBindings: function (t, e) {
              1 & t &&
                Ti("submit", function (t) {
                  return e.onSubmit(t);
                })("reset", function () {
                  return e.onReset();
                });
            },
            inputs: { options: ["ngFormOptions", "options"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [ro([Mp]), oi],
          })),
          t
        );
      })();
      const Hp = { provide: wp, useExisting: rt(() => zp) },
        $p = (() => Promise.resolve(null))();
      let zp = (() => {
          class t extends wp {
            constructor(t, e, n, r) {
              super(),
                (this.control = new Dp()),
                (this._registered = !1),
                (this.update = new ua()),
                (this._parent = t),
                this._setValidators(e),
                this._setAsyncValidators(n),
                (this.valueAccessor = (function (t, e) {
                  if (!e) return null;
                  let n, r, s;
                  return (
                    Array.isArray(e),
                    e.forEach((t) => {
                      t.constructor === op
                        ? (n = t)
                        : Object.getPrototypeOf(t.constructor) === class {}
                        ? (r = t)
                        : (s = t);
                    }),
                    s || r || n || null
                  );
                })(0, r));
            }
            ngOnChanges(t) {
              this._checkForErrors(),
                this._registered || this._setUpControl(),
                "isDisabled" in t && this._updateDisabled(t),
                (function (t, e) {
                  if (!t.hasOwnProperty("model")) return !1;
                  const n = t.model;
                  return !!n.isFirstChange() || !Object.is(e, n.currentValue);
                })(t, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._parent
                ? [...this._parent.path, this.name]
                : [this.name];
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(t) {
              (this.viewModel = t), this.update.emit(t);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              xp(this.control, this),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(t) {
              $p.then(() => {
                this.control.setValue(t, { emitViewToModelChange: !1 });
              });
            }
            _updateDisabled(t) {
              const e = t.isDisabled.currentValue,
                n = "" === e || (e && "false" !== e);
              $p.then(() => {
                n && !this.control.disabled
                  ? this.control.disable()
                  : !n && this.control.disabled && this.control.enable();
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                vi(yp, 9),
                vi(ap, 10),
                vi(lp, 10),
                vi(rp, 10)
              );
            }),
            (t.ɵdir = Wt({
              type: t,
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
              features: [ro([Hp]), oi, ie],
            })),
            t
          );
        })(),
        Bp = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = Wt({
              type: t,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            })),
            t
          );
        })(),
        qp = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = ht({})),
            t
          );
        })(),
        Gp = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = ht({ imports: [[qp]] })),
            t
          );
        })(),
        Zp = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = ht({ imports: [Gp] })),
            t
          );
        })(),
        Wp = (() => {
          class t {
            constructor() {
              this.todoAdd = new ua();
            }
            ngOnInit() {}
            onSubmit() {
              this.todoAdd.emit({
                sno: 8,
                title: this.title,
                desc: this.desc,
                active: !0,
              });
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = $t({
              type: t,
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
                  (Ci(0, "div", 0),
                  Ci(1, "h4"),
                  Fi(2, "Add a Todo"),
                  Si(),
                  Ci(3, "form", 1),
                  Ti("ngSubmit", function () {
                    return e.onSubmit();
                  }),
                  Ci(4, "div", 2),
                  Ci(5, "label", 3),
                  Fi(6, "Todo Title"),
                  Si(),
                  Ci(7, "input", 4),
                  Ti("ngModelChange", function (t) {
                    return (e.title = t);
                  }),
                  Si(),
                  Si(),
                  Ci(8, "div", 2),
                  Ci(9, "label", 5),
                  Fi(10, "Todo Description"),
                  Si(),
                  Ci(11, "input", 6),
                  Ti("ngModelChange", function (t) {
                    return (e.desc = t);
                  }),
                  Si(),
                  Si(),
                  Ci(12, "button", 7),
                  Fi(13, "Add Todo"),
                  Si(),
                  Si(),
                  Si()),
                  2 & t &&
                    (Qr(7),
                    wi("ngModel", e.title),
                    Qr(4),
                    wi("ngModel", e.desc));
              },
              directives: [Bp, Sp, Lp, op, Cp, zp],
              styles: [""],
            })),
            t
          );
        })();
      const Qp = function (t) {
        return { strike: t };
      };
      let Jp = (() => {
        class t {
          constructor() {
            (this.todoDelete = new ua()), (this.todoCheckbox = new ua());
          }
          ngOnInit() {}
          onClick(t) {
            this.todoDelete.emit(t), console.log("onClick has been triggerd");
          }
          onCheckboxClick(t) {
            console.log(t), this.todoCheckbox.emit(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = $t({
            type: t,
            selectors: [["app-todo-item"]],
            inputs: { todo: "todo", i: "i" },
            outputs: { todoDelete: "todoDelete", todoCheckbox: "todoCheckbox" },
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
                (Ci(0, "div", 0),
                Ci(1, "h5", 1),
                Fi(2),
                Si(),
                Ci(3, "p", 1),
                Fi(4),
                Si(),
                Ci(5, "div", 2),
                Ci(6, "input", 3),
                Ti("click", function () {
                  return e.onCheckboxClick(e.todo);
                }),
                Si(),
                Ci(7, "label", 4),
                Fi(8, "Done"),
                Si(),
                Si(),
                Ci(9, "button", 5),
                Ti("click", function () {
                  return e.onClick(e.todo);
                }),
                Fi(10, "Delete"),
                Si(),
                Si()),
                2 & t &&
                  (Qr(1),
                  wi("ngClass", la(7, Qp, !e.todo.active)),
                  Qr(1),
                  Li(e.todo.title),
                  Qr(1),
                  wi("ngClass", la(9, Qp, !e.todo.active)),
                  Qr(1),
                  Li(e.todo.desc),
                  Qr(2),
                  Ri("id", "todo", e.i, ""),
                  wi("checked", !e.todo.active),
                  Qr(1),
                  Ri("for", "todo", e.i, ""));
            },
            directives: [Vl],
            styles: [
              ".strike[_ngcontent-%COMP%]{text-decoration:line-through}",
            ],
          })),
          t
        );
      })();
      function Kp(t, e) {
        1 & t && (Ci(0, "div"), Fi(1, "No Todos to display"), Si());
      }
      function Yp(t, e) {
        if (1 & t) {
          const t = Ee();
          Ci(0, "div"),
            Ci(1, "app-todo-item", 6),
            Ti("todoDelete", function (e) {
              return Te(t), Ii(2).deleteTodo(e);
            })("todoCheckbox", function (e) {
              return Te(t), Ii(2).toggleTodo(e);
            }),
            Si(),
            Si();
        }
        if (2 & t) {
          const t = e.$implicit,
            n = e.index;
          Qr(1), wi("todo", t)("i", n);
        }
      }
      function Xp(t, e) {
        1 & t && yi(0, Yp, 2, 2, "div", 5), 2 & t && wi("ngForOf", Ii().todos);
      }
      const tf = [
        {
          path: "",
          component: (() => {
            class t {
              constructor() {
                (this.localItem = localStorage.getItem("todos")),
                  (this.todos =
                    null == this.localItem ? [] : JSON.parse(this.localItem));
              }
              ngOnInit() {}
              deleteTodo(t) {
                console.log(t);
                const e = this.todos.indexOf(t);
                this.todos.splice(e, 1),
                  localStorage.setItem("todos", JSON.stringify(this.todos));
              }
              addTodo(t) {
                console.log(t),
                  this.todos.push(t),
                  localStorage.setItem("todos", JSON.stringify(this.todos));
              }
              toggleTodo(t) {
                const e = this.todos.indexOf(t);
                console.log(e),
                  (this.todos[e].active = !this.todos[e].active),
                  localStorage.setItem("todos", JSON.stringify(this.todos)),
                  console.log(t);
              }
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)();
              }),
              (t.ɵcmp = $t({
                type: t,
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
                      (Ci(0, "div", 0),
                      Ci(1, "h1", 1),
                      Fi(2, "Todo List"),
                      Si(),
                      Ci(3, "app-add-todo", 2),
                      Ti("todoAdd", function (t) {
                        return e.addTodo(t);
                      }),
                      Si(),
                      Ci(4, "h4"),
                      Fi(5, "Your Todos"),
                      Si(),
                      yi(6, Kp, 2, 0, "div", 3),
                      yi(7, Xp, 1, 1, "ng-template", null, 4, ca),
                      Si()),
                    2 & t)
                  ) {
                    const t = Se.lFrame.contextLView[28];
                    Qr(6), wi("ngIf", 0 === e.todos.length)("ngIfElse", t);
                  }
                },
                directives: [Wp, Nl, jl, Jp],
                styles: [""],
              })),
              t
            );
          })(),
        },
        { path: "about", component: ep },
      ];
      let ef = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = ht({ imports: [[Gd.forRoot(tf)], Gd] })),
            t
          );
        })(),
        nf = (() => {
          class t {
            constructor() {
              this.title = "cwh-todo-list";
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = $t({
              type: t,
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
                  (Ci(0, "nav", 0),
                  Ci(1, "div", 1),
                  Ci(2, "a", 2),
                  Fi(3, "Todos List"),
                  Si(),
                  Ci(4, "button", 3),
                  xi(5, "span", 4),
                  Si(),
                  Ci(6, "div", 5),
                  Ci(7, "ul", 6),
                  Ci(8, "li", 7),
                  Ci(9, "a", 8),
                  Fi(10, "Home"),
                  Si(),
                  Si(),
                  Ci(11, "li", 7),
                  Ci(12, "a", 9),
                  Fi(13, "About"),
                  Si(),
                  Si(),
                  Si(),
                  Si(),
                  Si(),
                  Si(),
                  xi(14, "router-outlet"));
              },
              directives: [jd, Nd],
              styles: [""],
            })),
            t
          );
        })();
      function rf(t, e, n, r) {
        return new (n || (n = Promise))(function (s, i) {
          function o(t) {
            try {
              l(r.next(t));
            } catch (e) {
              i(e);
            }
          }
          function a(t) {
            try {
              l(r.throw(t));
            } catch (e) {
              i(e);
            }
          }
          function l(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(o, a);
          }
          l((r = r.apply(t, e || [])).next());
        });
      }
      const sf = new Vn("hj-window", {
          factory: () => ("browser" === Wn(_a) ? window : null),
        }),
        of = new Vn("ngx-hj-fn", {
          providedIn: "root",
          factory: () =>
            (function (t) {
              return t ? t.hj : null;
            })(Wn(sf)),
        }),
        af = new Vn("ngx-hotjar-settings", {
          factory: () => ({ trackingCode: "", version: 6, ennableTracing: !1 }),
        }),
        lf = {
          provide: ya,
          multi: !0,
          useFactory: function (t) {
            return (e) =>
              rf(this, void 0, void 0, function* () {
                const n = e.injector.get(Pd).events.subscribe((e) => {
                  e instanceof dc && t.stateChange(e.urlAfterRedirects);
                });
                e.onDestroy(() => n.unsubscribe());
              });
          },
          deps: [
            (() => {
              class t {
                constructor(t, e) {
                  (this._hj = t), (this.settings = e);
                }
                get lib() {
                  return this._hj;
                }
                hj(...t) {
                  try {
                    this._hj(...t);
                  } catch (e) {
                    (Ga() || this.settings.ennableTracing) &&
                      console.error(e.message);
                  }
                }
                virtualPageView(t) {
                  this.hj("vpv", t);
                }
                trigger(t) {
                  this.hj("trigger", t);
                }
                tagRecording(t, ...e) {
                  Array.isArray(t) || (t = [t]),
                    this.hj("tagRecording", t.concat(...e));
                }
                stateChange(t) {
                  this.hj("stateChange", t);
                }
                formSubmitSuccessful() {
                  this.hj("formSubmitSuccessful");
                }
                formSubmitFailed() {
                  this.hj("formSubmitFailed");
                }
              }
              return (
                (t.ɵfac = function (e) {
                  return new (e || t)(Zn(of), Zn(af));
                }),
                (t.ɵprov = ct({
                  factory: function () {
                    return new t(Zn(of), Zn(af));
                  },
                  token: t,
                  providedIn: "root",
                })),
                t
              );
            })(),
          ],
        },
        uf = {
          provide: ha,
          multi: !0,
          useFactory: function (t, e, n) {
            return () =>
              rf(this, void 0, void 0, function* () {
                if (!t.trackingCode)
                  return void (
                    Ga() &&
                    console.error(
                      "Empty tracking code for Hotjar. Make sure to provide one when initializing NgxHotjarModule."
                    )
                  );
                if (!e)
                  return void (
                    Ga() &&
                    console.error(
                      "Was not possible to access `document` instance. Make shure this environment works on a Broser like API"
                    )
                  );
                if (!n)
                  return void (
                    Ga() &&
                    console.error(
                      "Was not possible to access `window` api. Make sure this environment works like a browser."
                    )
                  );
                Object.defineProperty(n, "hj", {
                  value:
                    n.hj ||
                    function () {
                      (n.hj.q = n.hj.q || []).push(arguments);
                    },
                  configurable: !0,
                  writable: !0,
                }),
                  Object.defineProperty(n, "_hjSettings", {
                    value: { hjid: t.trackingCode, hjsv: t.version || 6 },
                    configurable: !0,
                    writable: !0,
                  });
                const r = e.querySelector("head"),
                  s = e.createElement("script"),
                  i = `https://static.hotjar.com/c/hotjar-${n._hjSettings.hjid}.js?sv=${n._hjSettings.hjsv}`;
                (s.async = !0), (s.src = t.uri || i), r.appendChild(s);
              });
          },
          deps: [af, hl, sf],
        };
      let cf = (() => {
          class t {
            static forRoot(e, n = 6, r) {
              return {
                ngModule: t,
                providers: [
                  {
                    provide: af,
                    useValue: { trackingCode: e, version: n, uri: r },
                  },
                  uf,
                ],
              };
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = ht({ imports: [[]] })),
            t
          );
        })(),
        hf = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = Gt({ type: t })),
            (t.ɵinj = ht({ providers: [lf], imports: [[Fl, cf]] })),
            t
          );
        })(),
        df = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵmod = Gt({ type: t, bootstrap: [nf] })),
            (t.ɵinj = ht({
              providers: [],
              imports: [[mu, ef, Zp, cf.forRoot("2915094"), hf]],
            })),
            t
          );
        })();
      (function () {
        if (qa)
          throw new Error("Cannot enable prod mode after platform setup.");
        Ba = !1;
      })(),
        fu()
          .bootstrapModule(df)
          .catch((t) => console.error(t));
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
