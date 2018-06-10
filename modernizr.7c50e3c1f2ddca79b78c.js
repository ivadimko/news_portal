/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas !*/
!function(e, n, t) {
    function o(e, n) {
        return typeof e === n;
    }
    function s() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : c ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
    }
    var a = [], i = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, n) {
            var t = this;
            setTimeout(function() {
                n(t[e]);
            }, 0);
        },
        addTest: function(e, n, t) {
            a.push({
                name: e,
                fn: n,
                options: t
            });
        },
        addAsyncTest: function(e) {
            a.push({
                name: null,
                fn: e
            });
        }
    }, r = function() {};
    r.prototype = i, r = new r();
    var f = [], l = n.documentElement, c = "svg" === l.nodeName.toLowerCase();
    r.addTest("canvas", function() {
        var e = s("canvas");
        return !(!e.getContext || !e.getContext("2d"));
    }), function() {
        var e, n, t, s, i, l, c;
        for (var u in a) if (a.hasOwnProperty(u)) {
            if (e = [], n = a[u], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
            for (s = o(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) l = e[i], 
            c = l.split("."), 1 === c.length ? r[c[0]] = s : (!r[c[0]] || r[c[0]] instanceof Boolean || (r[c[0]] = new Boolean(r[c[0]])), 
            r[c[0]][c[1]] = s), f.push((s ? "" : "no-") + c.join("-"));
        }
    }(), delete i.addTest, delete i.addAsyncTest;
    for (var u = 0; u < r._q.length; u++) r._q[u]();
    e.Modernizr = r;
}(window, document);