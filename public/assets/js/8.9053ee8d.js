;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    415: function(t, e, n) {
      'use strict'
      var s = n(2)
      e.a = new s.a()
    },
    445: function(t, e, n) {},
    458: function(t, e, n) {
      'use strict'
      var s = n(445)
      n.n(s).a
    },
    468: function(t, e, n) {
      'use strict'
      n.r(e)
      n(236)
      var s = n(415),
        u = n(140),
        i = {
          data: function() {
            return { submitEvent: null }
          },
          computed: {
            enabled: function() {
              return Boolean(this.submitEvent)
            },
            message: function() {
              return this.submitEvent
                ? 'success' === this.submitEvent.result
                  ? 'Thank you for subscribing!'
                  : 'Request failed!'
                : ''
            },
            isError: function() {
              return !(!this.submitEvent || 'error' !== this.submitEvent.result)
            },
          },
          created: function() {
            s.a.$on('submited', this.onSubmited)
          },
          methods: {
            onSubmited: function(t) {
              var e = this
              ;(this.submitEvent = t),
                setTimeout(function() {
                  e.submitEvent = null
                }, u.popupTimeout)
            },
          },
        },
        r = (n(458), n(8)),
        o = Object(r.a)(
          i,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'transition',
              { attrs: { name: 'submit-popup' } },
              [
                t._t(
                  'default',
                  [
                    t.enabled
                      ? n(
                          'div',
                          {
                            staticClass: 'submit-popup',
                            class: { error: t.isError },
                            attrs: { 'data-cy': 'popup' },
                          },
                          [t._v('\n      ' + t._s(t.message) + '\n    ')]
                        )
                      : t._e(),
                  ],
                  { enabled: t.enabled, message: t.message, isError: t.isError }
                ),
              ],
              2
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = o.exports
    },
  },
])
