;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    436: function(t, s, n) {},
    455: function(t, s, n) {
      'use strict'
      var a = n(436)
      n.n(a).a
    },
    463: function(t, s, n) {
      'use strict'
      n.r(s)
      var a = { props: ['tag'] },
        i = (n(455), n(8)),
        e = Object(i.a)(
          a,
          function() {
            var t = this.$createElement
            return (this._self._c || t)(
              'router-link',
              { staticClass: 'blog-tag', attrs: { to: this.tag.path } },
              [
                this._v(
                  '\n  ' +
                    this._s(this.tag.name) +
                    ' (' +
                    this._s(this.tag.pages.length) +
                    ')\n'
                ),
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = e.exports
    },
  },
])
