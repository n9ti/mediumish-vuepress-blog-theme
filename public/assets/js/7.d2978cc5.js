;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    416: function(t, n, e) {
      'use strict'
      e.d(n, 'c', function() {
        return a
      }),
        e.d(n, 'd', function() {
          return u
        }),
        e.d(n, 'e', function() {
          return s
        }),
        e.d(n, 'a', function() {
          return c
        }),
        e.d(n, 'b', function() {
          return f
        })
      e(33), e(247), e(63)
      var r = /#.*$/,
        i = /\.(md|html)$/,
        l = /\/$/,
        o = /^(https?:|mailto:|tel:)/
      function a(t) {
        return o.test(t)
      }
      function u(t) {
        return /^mailto:/.test(t)
      }
      function s(t) {
        return /^tel:/.test(t)
      }
      function c(t) {
        if (a(t)) return t
        var n = t.match(r),
          e = n ? n[0] : '',
          o = (function(t) {
            return decodeURI(t)
              .replace(r, '')
              .replace(i, '')
          })(t)
        return l.test(o) ? t : o + '.html' + e
      }
      function f(t, n, e) {
        if (!t) return e
        for (var r, i = n; (i = i.$parent) && !r; ) r = i.$refs[t]
        return r && r.$el && (r = r.$el), r || e
      }
    },
    437: function(t, n, e) {},
    456: function(t, n, e) {
      'use strict'
      var r = e(437)
      e.n(r).a
    },
    469: function(t, n, e) {
      'use strict'
      e.r(n)
      e(150), e(98), e(250)
      var r = e(416),
        i = {
          props: { link: { required: !0 } },
          computed: {
            normalizedlink: function() {
              return Object(r.a)(this.link)
            },
            exact: function() {
              var t = this
              return this.$site.locales
                ? Object.keys(this.$site.locales).some(function(n) {
                    return n === t.normalizedlink
                  })
                : '/' === this.normalizedlink
            },
          },
          methods: { isExternal: r.c, isMailto: r.d, isTel: r.e },
        },
        l = (e(456), e(8)),
        o = Object(l.a)(
          i,
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n
            return t.isExternal(t.normalizedlink)
              ? e(
                  'a',
                  {
                    staticClass: 'external',
                    attrs: {
                      href: t.normalizedlink,
                      target:
                        t.isMailto(t.normalizedlink) ||
                        t.isTel(t.normalizedlink)
                          ? null
                          : '_blank',
                      rel:
                        t.isMailto(t.normalizedlink) ||
                        t.isTel(t.normalizedlink)
                          ? null
                          : 'noopener noreferrer',
                    },
                  },
                  [t._t('default')],
                  2
                )
              : e(
                  'router-link',
                  { attrs: { to: t.normalizedlink, exact: t.exact } },
                  [t._t('default')],
                  2
                )
          },
          [],
          !1,
          null,
          null,
          null
        )
      n.default = o.exports
    },
  },
])
