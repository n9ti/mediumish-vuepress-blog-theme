;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    412: function(t, e, n) {},
    413: function(t, e, n) {},
    420: function(t, e, n) {
      'use strict'
      var r = n(412)
      n.n(r).a
    },
    421: function(t, e, n) {
      'use strict'
      var r = n(413)
      n.n(r).a
    },
    422: function(t, e, n) {
      'use strict'
      var r = n(11),
        i = n(7),
        a = n(141),
        s = n(28),
        o = n(12),
        u = n(45),
        c = n(249),
        p = n(64),
        l = n(5),
        f = n(46),
        m = n(65).f,
        v = n(34).f,
        g = n(13).f,
        d = n(248).trim,
        h = i.Number,
        _ = h.prototype,
        b = 'Number' == u(f(_)),
        y = function(t) {
          var e,
            n,
            r,
            i,
            a,
            s,
            o,
            u,
            c = p(t, !1)
          if ('string' == typeof c && c.length > 2)
            if (43 === (e = (c = d(c)).charCodeAt(0)) || 45 === e) {
              if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
            } else if (48 === e) {
              switch (c.charCodeAt(1)) {
                case 66:
                case 98:
                  ;(r = 2), (i = 49)
                  break
                case 79:
                case 111:
                  ;(r = 8), (i = 55)
                  break
                default:
                  return +c
              }
              for (s = (a = c.slice(2)).length, o = 0; o < s; o++)
                if ((u = a.charCodeAt(o)) < 48 || u > i) return NaN
              return parseInt(a, r)
            }
          return +c
        }
      if (a('Number', !h(' 0o1') || !h('0b1') || h('+0x1'))) {
        for (
          var C,
            x = function(t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this
              return n instanceof x &&
                (b
                  ? l(function() {
                      _.valueOf.call(n)
                    })
                  : 'Number' != u(n))
                ? c(new h(y(e)), n, x)
                : y(e)
            },
            $ = r
              ? m(h)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                  ','
                ),
            N = 0;
          $.length > N;
          N++
        )
          o(h, (C = $[N])) && !o(x, C) && g(x, C, v(h, C))
        ;(x.prototype = _), (_.constructor = x), s(i, 'Number', x)
      }
    },
    423: function(t, e, n) {
      var r = n(245),
        i = n(238),
        a = n(424),
        s = n(428)
      t.exports = function(t, e) {
        if (null == t) return {}
        var n = r(s(t), function(t) {
          return [t]
        })
        return (
          (e = i(e)),
          a(t, n, function(t, n) {
            return e(t, n[0])
          })
        )
      }
    },
    424: function(t, e, n) {
      var r = n(146),
        i = n(425),
        a = n(139)
      t.exports = function(t, e, n) {
        for (var s = -1, o = e.length, u = {}; ++s < o; ) {
          var c = e[s],
            p = r(t, c)
          n(p, c) && i(u, a(c, t), p)
        }
        return u
      }
    },
    425: function(t, e, n) {
      var r = n(426),
        i = n(139),
        a = n(144),
        s = n(96),
        o = n(67)
      t.exports = function(t, e, n, u) {
        if (!s(t)) return t
        for (
          var c = -1, p = (e = i(e, t)).length, l = p - 1, f = t;
          null != f && ++c < p;

        ) {
          var m = o(e[c]),
            v = n
          if (c != l) {
            var g = f[m]
            void 0 === (v = u ? u(g, m, f) : void 0) &&
              (v = s(g) ? g : a(e[c + 1]) ? [] : {})
          }
          r(f, m, v), (f = f[m])
        }
        return t
      }
    },
    426: function(t, e, n) {
      var r = n(427),
        i = n(143),
        a = Object.prototype.hasOwnProperty
      t.exports = function(t, e, n) {
        var s = t[e]
        ;(a.call(t, e) && i(s, n) && (void 0 !== n || e in t)) || r(t, e, n)
      }
    },
    427: function(t, e, n) {
      var r = n(246)
      t.exports = function(t, e, n) {
        '__proto__' == e && r
          ? r(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n)
      }
    },
    428: function(t, e, n) {
      var r = n(239),
        i = n(429),
        a = n(431)
      t.exports = function(t) {
        return r(t, a, i)
      }
    },
    429: function(t, e, n) {
      var r = n(142),
        i = n(430),
        a = n(240),
        s = n(241),
        o = Object.getOwnPropertySymbols
          ? function(t) {
              for (var e = []; t; ) r(e, a(t)), (t = i(t))
              return e
            }
          : s
      t.exports = o
    },
    430: function(t, e, n) {
      var r = n(244)(Object.getPrototypeOf, Object)
      t.exports = r
    },
    431: function(t, e, n) {
      var r = n(242),
        i = n(432),
        a = n(145)
      t.exports = function(t) {
        return a(t) ? r(t, !0) : i(t)
      }
    },
    432: function(t, e, n) {
      var r = n(96),
        i = n(243),
        a = n(433),
        s = Object.prototype.hasOwnProperty
      t.exports = function(t) {
        if (!r(t)) return a(t)
        var e = i(t),
          n = []
        for (var o in t)
          ('constructor' != o || (!e && s.call(t, o))) && n.push(o)
        return n
      }
    },
    433: function(t, e) {
      t.exports = function(t) {
        var e = []
        if (null != t) for (var n in Object(t)) e.push(n)
        return e
      }
    },
    435: function(t, e, n) {},
    447: function(t, e, n) {
      'use strict'
      n.d(e, 'b', function() {
        return a
      }),
        n.d(e, 'c', function() {
          return s
        }),
        n.d(e, 'a', function() {
          return f
        })
      n(15)
      var r = {
          data: function() {
            return { comp: null }
          },
          computed: {
            page: function() {
              return this.$pagination.paginationIndex + 1
            },
          },
          mounted: function() {
            var t = this
            n.e(2)
              .then(n.t.bind(null, 460, 7))
              .then(function(e) {
                t.comp = e.default
              })
          },
          methods: {
            clickCallback: function(t) {
              var e = this.$pagination.getSpecificPageLink(t - 1)
              this.$router.push(e)
            },
          },
        },
        i = (n(420), n(8)),
        a = Object(i.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return t.comp
              ? n(t.comp, {
                  tag: 'component',
                  attrs: {
                    value: t.page,
                    'page-count': t.$pagination.length,
                    'click-handler': t.clickCallback,
                    'prev-text': t.$pagination.prevText,
                    'next-text': t.$pagination.nextText,
                    'container-class': 'pagination',
                    'page-class': 'page-item',
                  },
                })
              : t._e()
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        s =
          (n(421),
          Object(i.a)(
            {},
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e
              return n(
                'div',
                { staticClass: 'pagination simple-pagination' },
                [
                  t.$pagination.hasPrev
                    ? n(
                        'router-link',
                        { attrs: { to: t.$pagination.prevLink } },
                        [t._v('\n    ' + t._s(t.$pagination.prevText) + '\n  ')]
                      )
                    : t._e(),
                  t._v(' '),
                  t.$pagination.hasNext
                    ? n(
                        'router-link',
                        { attrs: { to: t.$pagination.nextLink } },
                        [t._v('\n    ' + t._s(t.$pagination.nextText) + '\n  ')]
                      )
                    : t._e(),
                ],
                1
              )
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        o = (n(422), n(97)),
        u = n.n(o),
        c = n(423),
        p = n.n(c),
        l = {
          props: {
            title: { type: [String, Function], required: !1 },
            issueId: { type: [String, Number], required: !1 },
            options: { type: Object, required: !1 },
            shortname: { type: String, required: !1 },
            identifier: { type: String, required: !1 },
            url: { type: String, required: !1 },
            remote_auth_s3: { type: String, required: !1 },
            api_key: { type: String, required: !1 },
            sso_config: { type: Object, required: !1 },
            language: { type: String, required: !1 },
          },
          computed: {
            propsWithoutEmptyProperties: function() {
              return p()(this.$props, u.a)
            },
            commentProps: function() {
              return Object.assign(
                {},
                this.propsWithoutEmptyProperties,
                this.$frontmatter.comment
              )
            },
            vssueProps: function() {
              return Object.assign(
                { title: this.$page.title },
                this.commentProps
              )
            },
            disqusProps: function() {
              return Object.assign(
                { identifier: this.$page.key },
                this.commentProps
              )
            },
          },
        },
        f = Object(i.a)(
          l,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return 'vssue' === this.$service.comment.service
              ? e('Vssue', this._b({}, 'Vssue', this.vssueProps, !1))
              : 'disqus' === this.$service.comment.service
              ? e('Disqus', this._b({}, 'Disqus', this.disqusProps, !1))
              : this._e()
          },
          [],
          !1,
          null,
          null,
          null
        ).exports
    },
    454: function(t, e, n) {
      'use strict'
      var r = n(435)
      n.n(r).a
    },
    464: function(t, e, n) {
      'use strict'
      n.r(e)
      n(66), n(2)
      var r = n(147),
        i = n.n(r),
        a = n(447),
        s = {
          data: function() {
            return { paginationComponent: null }
          },
          computed: {
            pages: function() {
              return this.$pagination.pages
            },
          },
          created: function() {
            this.paginationComponent = this.getPaginationComponent()
          },
          methods: {
            getPaginationComponent: function() {
              return a.b
            },
            resolvePostDate: function(t) {
              return i()(t).format(
                this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
              )
            },
            resolvePostTags: function(t) {
              return !t || Array.isArray(t) ? t : [t]
            },
          },
        },
        o = (n(454), n(8)),
        u = Object(o.a)(
          s,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              { attrs: { id: '' } },
              [
                n(
                  'div',
                  {
                    staticClass: 'card-panel-content row',
                    attrs: {
                      itemscope: '',
                      itemtype: 'http://schema.org/Blog',
                    },
                  },
                  t._l(t.pages, function(e) {
                    return n(
                      'article',
                      {
                        key: e.key,
                        staticClass: 'ui-post entry col-md-4 card-container',
                        attrs: {
                          itemprop: 'blogPost',
                          itemscope: '',
                          itemtype: 'https://schema.org/BlogPosting',
                        },
                      },
                      [
                        n('meta', {
                          attrs: {
                            itemprop: 'mainEntityOfPage',
                            content: e.path,
                          },
                        }),
                        t._v(' '),
                        n('div', { staticClass: 'entry card h-100' }, [
                          n(
                            'div',
                            { staticClass: 'card-header-image' },
                            [
                              n('NavLink', { attrs: { link: e.path } }, [
                                n('img', {
                                  attrs: { src: e.frontmatter.featuredimg },
                                }),
                              ]),
                            ],
                            1
                          ),
                          t._v(' '),
                          n('div', { staticClass: 'card-inside' }, [
                            n('div', { staticClass: 'card-subheading' }, [
                              e.frontmatter.tags
                                ? n(
                                    'div',
                                    {
                                      staticClass: 'ui-post-meta ui-post-tag',
                                      attrs: { itemprop: 'keywords' },
                                    },
                                    t._l(
                                      t.resolvePostTags(e.frontmatter.tags),
                                      function(e) {
                                        return n(
                                          'router-link',
                                          {
                                            key: e,
                                            attrs: { to: '/tag/' + e },
                                          },
                                          [
                                            t._v(
                                              '\n        ' +
                                                t._s(e) +
                                                '\n        '
                                            ),
                                          ]
                                        )
                                      }
                                    ),
                                    1
                                  )
                                : t._e(),
                            ]),
                            t._v(' '),
                            n(
                              'h2',
                              {
                                staticClass: 'heading',
                                attrs: { itemprop: 'name headline' },
                              },
                              [
                                n(
                                  'NavLink',
                                  {
                                    staticClass: 'heading',
                                    attrs: { link: e.path },
                                  },
                                  [t._v(t._s(e.title))]
                                ),
                              ],
                              1
                            ),
                            t._v(' '),
                            n('p', { attrs: { itemprop: 'description' } }, [
                              t._v(t._s(e.frontmatter.summary || e.summary)),
                            ]),
                          ]),
                          t._v(' '),
                          n('div', { staticClass: 'meta-bottom mt-auto' }, [
                            t.$themeConfig.authors
                              ? n(
                                  'div',
                                  t._l(t.$themeConfig.authors, function(r) {
                                    return n(
                                      'span',
                                      { key: r.name, staticClass: 'nav-item' },
                                      [
                                        n('div', { staticClass: 'd-flex' }, [
                                          n(
                                            'a',
                                            { staticClass: 'profile-avatar' },
                                            [
                                              r.name === e.frontmatter.author
                                                ? n('img', {
                                                    staticClass: 'avatar-image',
                                                    attrs: {
                                                      src: t.$withBase(
                                                        r.avatar
                                                      ),
                                                      alt: r.name,
                                                    },
                                                  })
                                                : t._e(),
                                            ]
                                          ),
                                          t._v(' '),
                                          n('div', { staticClass: 'meta' }, [
                                            r.name === e.frontmatter.author
                                              ? n('div', [
                                                  n(
                                                    'span',
                                                    { staticClass: 'username' },
                                                    [t._v(t._s(r.name))]
                                                  ),
                                                  t._v('  \n      '),
                                                ])
                                              : t._e(),
                                            t._v(' '),
                                            n('div'),
                                          ]),
                                        ]),
                                      ]
                                    )
                                  }),
                                  0
                                )
                              : t._e(),
                            t._v(' '),
                            e.frontmatter.date
                              ? n('div', { staticClass: 'date' }, [
                                  n(
                                    'time',
                                    {
                                      attrs: {
                                        pubdate: '',
                                        itemprop: 'datePublished',
                                        datetime: e.frontmatter.date,
                                      },
                                    },
                                    [
                                      t._v(
                                        '\n      ' +
                                          t._s(
                                            t.resolvePostDate(
                                              e.frontmatter.date
                                            )
                                          ) +
                                          '\n      '
                                      ),
                                    ]
                                  ),
                                ])
                              : t._e(),
                          ]),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
                t._v(' '),
                t.$pagination.length > 1 && t.paginationComponent
                  ? n(t.paginationComponent, { tag: 'component' })
                  : t._e(),
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = u.exports
    },
  },
])
