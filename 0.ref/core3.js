//test3
(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (Cu3x) {
        if (!Cu3x || !Cu3x.length) return null;
        var VA9r = window;
        for (var a = Cu3x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; VA9r = VA9r[a[i]] = VA9r[a[i]] || {}, i++);
        return VA9r
    };
    NEJ.Q = function (bN4R, Cu3x) {
        bN4R = bN4R || NEJ.O;
        var bs4w = Cu3x.split(".");
        for (var i = 0, l = bs4w.length; i < l; i++) {
            bN4R = bN4R[bs4w[i]];
            if (!bN4R) break
        }
        return bN4R
    };
    NEJ.C = function () {
        var bNm0x = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bHj9a = function (C4G, bu4y) {
            for (var x in bu4y)
                if (C4G == bu4y[x]) return x;
            return null
        };
        var buP6J = {
                cs5x: 0,
                bj4n: 1,
                bz4D: 2,
                bS5X: 3,
                bH4L: 4,
                eL6F: 5,
                jQ8I: 6,
                eq6k: 7
            },
            uT1x = {
                cw5B: 0,
                bk4o: 1,
                bF4J: 2,
                cd5i: 3,
                bM4Q: 4,
                gq6k: 5,
                kG8y: 6,
                fV6P: 7
            };
        return function () {
            var fx6r = function () {
                this.bHD9u();
                return this.cs5x.apply(this, arguments)
            };
            fx6r.prototype.bHD9u = NEJ.F;
            fx6r.prototype.cs5x = NEJ.F;
            fx6r.O4S = function (BW3x, bOC1x) {
                if (bNm0x(BW3x)) return;
                if (bOC1x == null || !!bOC1x) NEJ.X(this, BW3x, bNm0x);
                this.bRQ2x = BW3x;
                this.cl5q = BW3x.prototype;
                var bG4K = function () {};
                bG4K.prototype = BW3x.prototype;
                this.prototype = new bG4K;
                var Cm3x = this.prototype;
                Cm3x.constructor = this;
                var cf5k;
                for (var x in buP6J) {
                    cf5k = bHj9a(buP6J[x], uT1x);
                    if (!cf5k || !this.cl5q[x]) continue;
                    Cm3x[x] = function (T4X) {
                        return function () {
                            this[T4X].apply(this, arguments)
                        }
                    }(cf5k)
                }
                var Ed3x = {};
                for (var x in uT1x) {
                    cf5k = bHj9a(uT1x[x], buP6J);
                    if (!cf5k || !this.cl5q[cf5k]) continue;
                    Ed3x[cf5k] = BW3x;
                    Cm3x[x] = function (T4X) {
                        return function () {
                            var o4s, bG4K = this.buK6E[T4X],
                                Xh0x = bG4K.prototype[T4X];
                            this.buK6E[T4X] = bG4K.bRQ2x || BW3x;
                            if (!!Xh0x) o4s = Xh0x.apply(this, arguments);
                            this.buK6E[T4X] = BW3x;
                            return o4s
                        }
                    }(cf5k)
                }
                Cm3x.bHD9u = function () {
                    this.buK6E = NEJ.X({}, Ed3x)
                };
                Cm3x.cCZ1x = Cm3x.cw5B;
                return Cm3x
            };
            return fx6r
        }
    }();
    NEJ.X = function (fW6Q, bR5W, dS6M) {
        if (!fW6Q || !bR5W) return fW6Q;
        dS6M = dS6M || NEJ.F;
        for (var x in bR5W) {
            if (bR5W.hasOwnProperty(x) && !dS6M(bR5W[x], x)) fW6Q[x] = bR5W[x]
        }
        return fW6Q
    };
    NEJ.EX = function (fW6Q, bR5W) {
        if (!fW6Q || !bR5W) return fW6Q;
        for (var x in fW6Q) {
            if (fW6Q.hasOwnProperty(x) && bR5W[x] != null) fW6Q[x] = bR5W[x]
        }
        return fW6Q
    };
    var IO5T = Function.prototype;
    IO5T.es6m = function (lm8e, Lx6r) {
        var f = NEJ.F,
            Lx6r = Lx6r || f,
            lm8e = lm8e || f,
            dn5s = this;
        return function () {
            var d4h = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lm8e(d4h);
            if (!d4h.stopped) {
                d4h.value = dn5s.apply(this, d4h.args);
                Lx6r(d4h)
            }
            return d4h.value
        }
    };
    IO5T.g4k = function () {
        var bh4l = arguments,
            fW6Q = arguments[0],
            buF6z = this;
        return function () {
            var vV1x = NEJ.R.slice.call(bh4l, 1);
            NEJ.R.push.apply(vV1x, arguments);
            return buF6z.apply(fW6Q || window, vV1x)
        }
    };
    IO5T.eo6i = function () {
        var bh4l = arguments,
            fW6Q = NEJ.R.shift.call(bh4l),
            buF6z = this;
        return function () {
            NEJ.R.push.apply(arguments, bh4l);
            return buF6z.apply(fW6Q || window, arguments)
        }
    };
    var IO5T = String.prototype;
    if (!IO5T.trim) {
        IO5T.trim = function () {
            var cY5d = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(cY5d, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        N4R = c4g("nej.p"),
        bbr1x = window.navigator.platform,
        uO1x = window.navigator.userAgent;
    var kx8p = {
        mac: bbr1x,
        win: bbr1x,
        linux: bbr1x,
        ipad: uO1x,
        ipod: uO1x,
        iphone: bbr1x,
        android: uO1x
    };
    N4R.Gz4D = kx8p;
    for (var x in kx8p) kx8p[x] = (new RegExp(x, "i")).test(kx8p[x]);
    kx8p.ios = kx8p.ipad || kx8p.iphone || kx8p.ipod;
    kx8p.tablet = kx8p.ipad;
    kx8p.desktop = kx8p.mac || kx8p.win || kx8p.linux && !kx8p.android;
    var hQ7J = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    N4R.di5n = hQ7J;
    if (/msie\s+(.*?);/i.test(uO1x) || /trident\/.+rv:([\d\.]+)/i.test(uO1x)) {
        hQ7J.engine = "trident";
        hQ7J.browser = "ie";
        hQ7J.version = RegExp.$1;
        hQ7J.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var ow9n = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        hQ7J.release = ow9n[document.documentMode] || ow9n[parseInt(hQ7J.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(uO1x)) {
        hQ7J.engine = "webkit";
        hQ7J.release = RegExp.$1 || "";
        hQ7J.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(uO1x)) {
        hQ7J.engine = "gecko";
        hQ7J.release = RegExp.$1 || "";
        hQ7J.browser = "firefox";
        hQ7J.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(uO1x)) hQ7J.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(uO1x)) {
        hQ7J.engine = "presto";
        hQ7J.release = RegExp.$1 || "";
        hQ7J.browser = "opera";
        hQ7J.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(uO1x)) hQ7J.version = RegExp.$1 || ""
    }
    if (hQ7J.browser == "unknow") {
        var ow9n = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = ow9n.length, T4X; i < l; i++) {
            T4X = ow9n[i] == "safari" ? "version" : ow9n[i];
            if ((new RegExp(T4X + "/(.*?)(?=\\s|$)", "i")).test(uO1x)) {
                hQ7J.browser = ow9n[i];
                hQ7J.version = RegExp.$1.trim();
                break
            }
        }
    }
    N4R.buR6L = {};
    var Zl1x = hQ7J.engine != "trident";
    N4R.mC8u = {
        gecko: hQ7J.engine != "gecko",
        webkit: hQ7J.engine != "webkit",
        presto: hQ7J.engine != "presto",
        trident0: Zl1x || hQ7J.release > "2.0",
        trident1: Zl1x || hQ7J.release < "6.0",
        trident2: Zl1x || hQ7J.release > "3.0",
        trident: Zl1x || hQ7J.release >= "6.0"
    }
})();
(function () {
    var ia7T = NEJ.P("nej.c"),
        Q4U = {};
    var buw6q = function () {
        var cY5d = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V4Z) {
            V4Z = V4Z || "";
            if (cY5d.test(V4Z)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Ls6m = function () {
        var bvO6I = function (i4m, bu4y) {
            if (!i4m || !i4m.length) return;
            for (var i = 0, l = i4m.length, lp8h; i < l; i++) {
                lp8h = i4m[i];
                if (lp8h.indexOf("://") > 0) bu4y[buw6q(lp8h)] = lp8h
            }
        };
        var bd4h = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function (bR5W) {
            ia7T.GE4I("root", bR5W.root || "/res/");
            var bua6U, fJ6D = ia7T.B4F("root");
            for (var x in bd4h) {
                bua6U = bd4h[x];
                ia7T.GE4I(x, bR5W[bua6U.name] || fJ6D + bua6U.dft)
            }
            var BQ3x = bR5W.p_csrf;
            if (BQ3x == !0) {
                BQ3x = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            ia7T.GE4I("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, BQ3x));
            Q4U.frames = {};
            bvO6I(bR5W.p_frame, Q4U.frames);
            Q4U.flashs = {};
            bvO6I(bR5W.p_flash, Q4U.flashs)
        }
    }();
    ia7T.GE4I = function (K4O, C4G) {
        Q4U[K4O] = C4G
    };
    ia7T.B4F = function (K4O) {
        return Q4U[K4O]
    };
    ia7T.bRR2x = function (V4Z) {
        var rX0x = buw6q(V4Z);
        return Q4U.frames[rX0x] || rX0x + "/res/nej_proxy_frame.html"
    };
    ia7T.bRY2x = function (V4Z) {
        return Q4U.flashs[buw6q(V4Z)]
    };
    Ls6m(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        ia7T = c4g("nej.c"),
        bR5W = window.NEJ_CONF || NEJ.O;
    if (N4R.mC8u.trident) return;
    ia7T.GE4I("storage.swf", bR5W.storage || ia7T.B4F("root") + "nej_storage.swf");
    if (N4R.di5n.release < "4.0") {
        ia7T.GE4I("blank.png", bR5W.blank || ia7T.B4F("root") + "nej_blank.gif")
    }
    var i4m = bR5W.xdr,
        gm6g = /^(https?:\/\/.*?)(?=\/|$)/i,
        jE7x = /[\/?=&]/i;
    var bNy1x = function (V4Z) {
        return (gm6g.test(V4Z) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i4m && !!i4m.length)
        for (var i = i4m.length - 1, V4Z, K4O; i >= 0; i--) {
            V4Z = i4m[i];
            K4O = bNy1x(V4Z);
            if (!!K4O) ia7T.GE4I(K4O, V4Z)
        }
    ia7T.cCU1x = function (V4Z) {
        var K4O = bNy1x(V4Z);
        if (!K4O) {
            if (jE7x.test(V4Z)) {
                K4O = location.protocol + "//" + location.host
            } else if (V4Z.indexOf("://") < 0) {
                K4O = location.protocol + "//" + V4Z
            } else {
                K4O = V4Z
            }
        }
        return ia7T.B4F(K4O) || K4O + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c4g = NEJ.P,
        ia7T = c4g("nej.c"),
        N4R = c4g("nej.g"),
        gn6h = +(new Date);
    N4R.cCT1x = 1e4 - gn6h;
    N4R.btR6L = 10001 - gn6h;
    N4R.cCR1x = 10002 - gn6h;
    N4R.bxZ7S = 10003 - gn6h;
    N4R.bSd3x = 10004 - gn6h;
    N4R.cCP1x = 10005 - gn6h;
    N4R.btJ6D = 10006 - gn6h;
    N4R.bSi3x = 10007 - gn6h;
    N4R.wD1x = "Content-Type";
    N4R.cCL1x = "text/plain";
    N4R.Ea3x = "multipart/form-data";
    N4R.bSm3x = "application/x-www-form-urlencoded";
    N4R.btx6r = ia7T.B4F("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c4g = NEJ.P,
        fo6i = NEJ.R,
        N4R = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        bc4g = c4g("nej.h");
    var lt8l = N4R.di5n.prefix,
        bvX6R = N4R.buR6L,
        bSn3x = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        bSo3x = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        Rs8k = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var Ls6m = function () {
        var sc0x = bc4g.bCx8p();
        bvX6R.css3d = !!sc0x && sc0x.m41 != null;
        var cY5d = /-([a-z])/g;
        for (var x in Rs8k) {
            Rs8k[bCK8C(x)] = Rs8k[x]
        }
    };
    var bCK8C = function () {
        var cY5d = /-([a-z])/g;
        return function (T4X) {
            T4X = T4X || "";
            return T4X.replace(cY5d, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bDB8t = function (T4X) {
        return (!bvX6R.css3d ? bSn3x : bSo3x)[T4X]
    };
    var bEP8H = function () {
        var cY5d = /\s+/;
        return function (fx6r) {
            fx6r = (fx6r || "").trim();
            return !!fx6r ? fx6r.split(cY5d) : null
        }
    }();
    var ZB1x = function (G4K, t4x, fx6r) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return;
        k4o.bb4f(bEP8H(fx6r), function (dU6O) {
            G4K.classList[t4x](dU6O)
        })
    };
    bc4g.GP4T = function (i4m) {
        return fo6i.slice.call(i4m, 0)
    };
    bc4g.bth6b = function (G4K) {
        return bc4g.GP4T(G4K.children)
    };
    bc4g.btg6a = function (G4K, fx6r) {
        return bc4g.GP4T(G4K.getElementsByClassName(fx6r))
    };
    bc4g.btd6X = function (G4K, GQ4U) {
        ZB1x(G4K, "add", GQ4U)
    };
    bc4g.bsU6O = function (G4K, GS4W) {
        ZB1x(G4K, "remove", GS4W)
    };
    bc4g.LD6x = function (G4K, GS4W, GQ4U) {
        ZB1x(G4K, "remove", GS4W);
        ZB1x(G4K, "add", GQ4U)
    };
    bc4g.bsD6x = function (G4K, fx6r) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return !1;
        var i4m = G4K.classList;
        if (!i4m || !i4m.length) return !1;
        return k4o.dd5i(bEP8H(fx6r), function (dU6O) {
            return i4m.contains(dU6O)
        }) >= 0
    };
    bc4g.bsh5m = function (G4K, dU6O) {};
    bc4g.bsf5k = function (G4K) {};
    bc4g.bsa5f = function (fR6L, nA9r) {
        fR6L.selectionEnd = nA9r.end || 0;
        fR6L.selectionStart = nA9r.start || 0;
        fR6L.focus()
    };
    bc4g.brM5R = function (fR6L) {
        return {
            end: fR6L.selectionEnd,
            start: fR6L.selectionStart
        }
    };
    bc4g.brK5P = function () {
        var FO4S = function (dU6O, d4h) {
            var G4K = h4l.U4Y(d4h);
            if (!G4K.value) a3x.v4z(G4K, dU6O)
        };
        var Hf4j = function (dU6O, d4h) {
            a3x.w4A(h4l.U4Y(d4h), dU6O)
        };
        return function (G4K, eU6O, dU6O) {
            if (eU6O == 1) {
                h4l.s4w(G4K, "blur", FO4S.g4k(null, dU6O))
            }
            if (eU6O == 1 || eU6O == -1) {
                h4l.s4w(G4K, "focus", Hf4j.g4k(null, dU6O))
            }
        }
    }();
    bc4g.brD5I = function (I4M) {
        return (new XMLSerializer).serializeToString(I4M) || ""
    };
    bc4g.brz5E = function (BD3x) {
        var fJ6D = (new DOMParser).parseFromString(BD3x, "text/xml").documentElement;
        return fJ6D.nodeName == "parsererror" ? null : fJ6D
    };
    bc4g.bry5D = function (G4K) {};
    bc4g.nh9Y = function (G4K) {
        return null
    };
    bc4g.brx5C = function (G4K) {
        return null
    };
    bc4g.brw5B = function (dV6P) {};
    bc4g.brp5u = function () {
        var bh4l = bc4g.GP4T(arguments);
        bh4l[0] = a3x.B4F(bh4l[0]);
        if (!bh4l[0]) return null;
        bh4l[1] = (bh4l[1] || "").toLowerCase();
        if (!bh4l[1]) return null;
        return bh4l
    };
    bc4g.BB3x = function () {
        var vt1x = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            iO7H = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var bSp3x = function (t4x) {
            return (lt8l.evt || lt8l.pro) + t4x
        };
        return function () {
            var bh4l = bc4g.brp5u.apply(bc4g, arguments);
            if (!bh4l) return;
            var TR9I = iO7H[bh4l[1]],
                Ub9S = vt1x[bh4l[1]];
            if (!!TR9I) {
                bh4l[4] = bh4l[1];
                bh4l[1] = bSp3x(TR9I)
            } else if (!!Ub9S) {
                var T4X = "on" + bh4l[1];
                if (!(T4X in bh4l[0])) {
                    bh4l[4] = bh4l[1];
                    bh4l[1] = Ub9S
                }
            }
            return bh4l
        }
    }();
    bc4g.brl5q = function () {
        var bh4l = arguments;
        bh4l[0].addEventListener(bh4l[1], bh4l[2], !!bh4l[3])
    };
    bc4g.Um9d = function () {
        var bh4l = arguments;
        bh4l[0].removeEventListener(bh4l[1], bh4l[2], !!bh4l[3])
    };
    bc4g.brg5l = function (G4K, t4x, e4i) {
        var d4h = document.createEvent("Event");
        d4h.initEvent(t4x, !0, !0);
        NEJ.X(d4h, e4i);
        G4K.dispatchEvent(d4h)
    };
    bc4g.bCx8p = function () {
        var gm6g = /\((.*?)\)/,
            jE7x = /\s*,\s*/,
            i4m = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var Uu9l = function (sc0x) {
            var iE7x = {};
            if (gm6g.test(sc0x || "")) {
                k4o.bb4f(RegExp.$1.split(jE7x), function (C4G, r4v) {
                    iE7x[i4m[r4v]] = C4G || ""
                })
            }
            return iE7x
        };
        return function (sc0x) {
            if (!!window.CSSMatrix) return new CSSMatrix(sc0x);
            var T4X = lt8l.clz + "CSSMatrix";
            if (!!window[T4X]) return new window[T4X](sc0x || "");
            return Uu9l(sc0x)
        }
    }();
    bc4g.bKA0x = function () {
        var cY5d = /\{(.*?)\}/g;
        return function (T4X, bu4y) {
            bu4y = bu4y || o;
            var qy0x = bDB8t(T4X);
            return !qy0x ? "" : qy0x.replace(cY5d, function ($1, $2) {
                var bs4w = $2.split("|");
                return bu4y[bs4w[0]] || bs4w[1] || "0"
            })
        }
    }();
    bc4g.brd5i = function (G4K, T4X, C4G) {
        G4K.style[bc4g.bNj0x(T4X)] = C4G
    };
    bc4g.bNj0x = function () {
        var cY5d = /^[a-z]/,
            brc5h = lt8l.css;
        var bSq3x = function (T4X) {
            return T4X.replace(cY5d, function ($1) {
                return brc5h + $1.toUpperCase()
            })
        };
        return function (T4X) {
            T4X = bCK8C(T4X);
            var bSA3x = bc4g.bSB3x(T4X, Rs8k);
            return bSA3x ? bSq3x(T4X) : T4X
        }
    }();
    bc4g.bSB3x = function () {
        var cY5d = /^([a-z]+?)[A-Z]/;
        return function (T4X, bu4y) {
            if (!bu4y[T4X]) {
                if (cY5d.test(T4X)) T4X = RegExp.$1
            }
            return !!bu4y[T4X]
        }
    }();
    bc4g.bSC3x = function () {
        var cY5d = /\$<(.*?)>/gi,
            brc5h = "-" + lt8l.css.toLowerCase() + "-";
        return function (jN8F) {
            return jN8F.replace(cY5d, function ($1, $2) {
                var eG6A = $2,
                    bs4w = eG6A.split("|"),
                    qy0x = bDB8t(bs4w[0]);
                if (!!qy0x) {
                    return bc4g.bKA0x(bs4w[0], k4o.hE7x(bs4w[1]))
                }
                return !bc4g.bSF3x(eG6A, Rs8k) ? eG6A : brc5h + eG6A
            })
        }
    }();
    bc4g.bSF3x = function (T4X, bu4y) {
        return !!bu4y[T4X]
    };
    bc4g.bqX5c = function (cc5h, jN8F) {
        cc5h.textContent = jN8F
    };
    bc4g.bqW5b = function (cc5h, jN8F) {
        var wU1x = cc5h.sheet,
            bm4q = wU1x.cssRules.length;
        wU1x.insertRule(jN8F, bm4q);
        return wU1x.cssRules[bm4q]
    };
    bc4g.cCy1x = function (G4K, e4i) {};
    bc4g.UL9C = function (UY9P) {
        return (UY9P || "").toLowerCase() != "transparent"
    };
    bc4g.bSM3x = function (G4K) {};
    bc4g.bqO5T = function (G4K, T4X) {
        if (!!G4K.getAttribute) return G4K.getAttribute(T4X);
        return ""
    };
    bc4g.Vq9h = function (fr6l) {
        a3x.cB5G(fr6l)
    };
    Ls6m()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        N4R = c4g("nej.p"),
        bc4g = c4g("nej.h");
    if (N4R.mC8u.trident0) return;
    var gn6h = +(new Date);
    Q4U = {};
    bc4g.bsh5m = bc4g.bsh5m.es6m(function (d4h) {
        d4h.stopped = !0;
        var bh4l = d4h.args,
            D4H = a3x.ld8V(bh4l[0]),
            K4O = "hover-" + D4H;
        if (!D4H || !!Q4U[K4O]) return;
        Q4U[K4O] = !0;
        h4l.s4w(D4H, "mouseenter", a3x.w4A.g4k(a3x, D4H, bh4l[1]));
        h4l.s4w(D4H, "mouseleave", a3x.v4z.g4k(a3x, D4H, bh4l[1]))
    });
    bc4g.bsf5k = function () {
        var cCw1x = function () {};
        return bc4g.bsf5k.es6m(function (d4h) {
            d4h.stopped = !0;
            var G4K = d4h.args[0],
                D4H = "fixed-" + a3x.ld8V(G4K);
            if (!!Q4U[D4H]) return;
            var bd4h = {};
            Q4U[D4H] = bd4h
        })
    }();
    bc4g.bry5D = bc4g.bry5D.es6m(function (d4h) {
        d4h.stopped = !0;
        var G4K = d4h.args[0],
            cc5h = G4K.style,
            bJN0x = a3x.oQ9H();
        cc5h.width = bJN0x.scrollWidth + "px";
        cc5h.height = bJN0x.scrollHeight + "px"
    });
    bc4g.nh9Y = bc4g.nh9Y.es6m(function (d4h) {
        d4h.stopped = !0;
        var G4K = d4h.args[0],
            kJ8B = Q4U[G4K.msk];
        if (!kJ8B) {
            G4K.msk = gn6h++;
            kJ8B = a3x.cZ5e("iframe");
            kJ8B.style.position = "absolute";
            Q4U[G4K.msk] = kJ8B
        }
        d4h.value = kJ8B;
        var cc5h = kJ8B.style;
        cc5h.top = (parseInt(a3x.cX5c(G4K, "top")) || 0) + "px";
        cc5h.left = (parseInt(a3x.cX5c(G4K, "left")) || 0) + "px";
        cc5h.width = G4K.offsetWidth + "px";
        cc5h.height = G4K.offsetHeight + "px";
        G4K.insertAdjacentElement("beforeBegin", kJ8B)
    });
    bc4g.brx5C = bc4g.brx5C.es6m(function (d4h) {
        d4h.stopped = !0;
        var kJ8B = Q4U[d4h.args[0].msk];
        if (!!kJ8B) a3x.mN8F(kJ8B)
    })
})();
(function () {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        a3x = c4g("nej.e"),
        bc4g = c4g("nej.h");
    if (N4R.mC8u.trident1) return;
    bc4g.BB3x = function () {
        var vt1x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bc4g.BB3x.es6m(function (d4h) {
            var bh4l = bc4g.brp5u.apply(bc4g, d4h.args);
            if (!bh4l) {
                d4h.stopped = !0;
                return
            }
            var t4x = vt1x[bh4l[1]];
            if (!!t4x && ("on" + t4x).toLowerCase() in bh4l[0]) {
                bh4l[4] = bh4l[1];
                bh4l[1] = t4x;
                d4h.stopped = !0;
                d4h.value = bh4l
            }
        })
    }();
    bc4g.UL9C = function (UY9P) {
        return !0
    };
    bc4g.Vq9h = bc4g.Vq9h.es6m(function (d4h) {
        d4h.stopped = !0;
        var fr6l = d4h.args[0];
        a3x.Y4c(fr6l, "display", "none");
        try {
            fr6l.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        N4R = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        bc4g = c4g("nej.h"),
        bqJ5O = {};
    if (N4R.mC8u.trident) return;
    bc4g.GP4T = bc4g.GP4T.es6m(function (d4h) {
        d4h.stopped = !0;
        var i4m = d4h.args[0];
        if (!i4m) {
            d4h.value = null;
            return
        }
        var r4v = 0,
            o4s = [];
        while (!!i4m[r4v]) {
            o4s.push(i4m[r4v++])
        }
        d4h.value = o4s
    });
    bc4g.bth6b = bc4g.bth6b.es6m(function (d4h) {
        d4h.stopped = !0;
        var bs4w = [];
        k4o.bb4f(d4h.args[0].childNodes, function (f4j) {
            if (f4j.nodeType == 1) bs4w.push(f4j)
        });
        d4h.value = bs4w
    });
    bc4g.btg6a = bc4g.btg6a.es6m(function (d4h) {
        var G4K = d4h.args[0];
        if (!!G4K.getElementsByClassName) return;
        d4h.stopped = !0;
        var o4s = [],
            bqI5N = new RegExp("(\\s|^)(?:" + d4h.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k4o.bb4f(G4K.getElementsByTagName("*"), function (f4j) {
            if (bqI5N.test(f4j.className)) o4s.push(f4j)
        });
        d4h.value = o4s
    });
    bc4g.bsa5f = bc4g.bsa5f.es6m(function (d4h) {
        var fR6L = d4h.args[0],
            nA9r = d4h.args[1];
        if (fR6L.selectionStart == null) {
            d4h.stopped = !0;
            var cS5X = fR6L.createTextRange();
            cS5X.collapse(!0);
            cS5X.moveStart("character", nA9r.start);
            cS5X.moveEnd("character", nA9r.end - nA9r.start);
            cS5X.select();
            fR6L.focus()
        }
    });
    bc4g.brM5R = bc4g.brM5R.es6m(function (d4h) {
        var fR6L = d4h.args[0];
        fR6L.focus();
        if (fR6L.selectionStart == null) {
            d4h.stopped = !0;
            var bvg6a = document.selection.createRange();
            var bvx6r = fR6L.createTextRange();
            bvx6r.moveToBookmark(bvg6a.getBookmark());
            var bqG5L = fR6L.createTextRange();
            bqG5L.collapse(!0);
            bqG5L.setEndPoint("EndToStart", bvx6r);
            var hS7L = bqG5L.text.length;
            d4h.value = {
                start: hS7L,
                end: hS7L + bvg6a.text.length
            }
        }
    });
    bc4g.brD5I = bc4g.brD5I.es6m(function (d4h) {
        if (!!window.XMLSerializer) return;
        d4h.stopped = !0;
        var G4K = d4h.args[0];
        d4h.value = G4K.xml != null ? G4K.xml : G4K.outHTML
    });
    bc4g.brz5E = function () {
        var OH7A = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bSQ3x = function () {
            try {
                for (var i = 0, l = OH7A.length; i < l; i++) return new ActiveXObject(OH7A[i])
            } catch (ex) {
                return null
            }
        };
        return bc4g.brz5E.es6m(function (d4h) {
            if (!!window.DOMParser) return;
            d4h.stopped = !0;
            var ne9V = bSQ3x();
            if (!!ne9V && ne9V.loadXML(d4h.args[0]) && !ne9V.parseError.errorCode) d4h.value = ne9V.documentElement
        })
    }();
    bc4g.BB3x = function () {
        var iO7H = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in iO7H) bqJ5O[iO7H[x]] = !0;
        var bSR3x = function (G4K, t4x) {
            if ("on" + t4x in G4K) return null;
            return iO7H[t4x] || ""
        };
        var bTr3x = function (t4x, dn5s) {
            var dE5J = dn5s;
            switch (t4x) {
                case "readystatechange":
                    dE5J = function (d4h) {
                        var G4K = h4l.U4Y(d4h) || this;
                        if (G4K.readyState == "loaded" || G4K.readyState == "complete") {
                            d4h.target = G4K;
                            dn5s.call(G4K, d4h)
                        }
                    };
                    break;
                case "propertychange":
                    dE5J = function (d4h) {
                        var G4K = h4l.U4Y(d4h) || this;
                        if ("value" in G4K && d4h.propertyName == "value") {
                            d4h.target = G4K;
                            dn5s.call(G4K, d4h)
                        }
                    };
                    break
            }
            return dE5J
        };
        return bc4g.BB3x.es6m(function (d4h) {
            var bh4l = bc4g.brp5u.apply(bc4g, d4h.args);
            if (!bh4l) {
                d4h.stopped = !0;
                return
            }
            var t4x = bSR3x(bh4l[0], bh4l[1]);
            if (!!t4x) {
                d4h.stopped = !0;
                bh4l[4] = bh4l[1];
                bh4l[1] = t4x;
                if (!!bh4l[2]) {
                    bh4l[5] = bh4l[2];
                    bh4l[2] = bTr3x(bh4l[1], bh4l[2])
                }
                d4h.value = bh4l
            }
        }, function (d4h) {
            var bh4l = d4h.value;
            if (!bh4l[0] || !k4o.gr6l(bh4l[2])) return;
            if (!k4o.gr6l(bh4l[5])) bh4l[5] = bh4l[2];
            bh4l[2] = bh4l[2].g4k(bh4l[0])
        })
    }();
    bc4g.brl5q = bc4g.brl5q.es6m(function (d4h) {
        var bh4l = d4h.args;
        if (!!bqJ5O[bh4l[1]] || !document.addEventListener) {
            d4h.stopped = !0;
            bh4l[0].attachEvent("on" + bh4l[1], bh4l[2])
        }
    });
    bc4g.Um9d = bc4g.Um9d.es6m(function (d4h) {
        var bh4l = d4h.args;
        if (!!bqJ5O[bh4l[1]] || !document.removeEventListener) {
            d4h.stopped = !0;
            bh4l[0].detachEvent("on" + bh4l[1], bh4l[2])
        }
    });
    bc4g.brg5l = bc4g.brg5l.es6m(function (d4h) {
        if (!document.createEvent) {
            d4h.stopped = !0;
            var bh4l = d4h.args,
                bzr7k = document.createEventObject();
            NEJ.X(bzr7k, bh4l[2]);
            try {
                bh4l[0].fireEvent("on" + bh4l[1], bzr7k)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bc4g.brd5i = bc4g.brd5i.es6m(function (d4h) {
        var bh4l = d4h.args,
            T4X = bh4l[1].toLowerCase();
        if (T4X == "opacity" && !(T4X in document.body.style)) {
            bh4l[1] = "filter";
            bh4l[2] = "alpha(opacity=" + bh4l[2] * 100 + ")"
        }
    });
    bc4g.bqX5c = function () {
        var fb6V = 30;
        return bc4g.bqX5c.es6m(function (d4h) {
            var G4K = d4h.args[0];
            if (!G4K.styleSheet) return;
            d4h.stopped = !0;
            var jN8F = d4h.args[1];
            var i4m = document.styleSheets;
            if (i4m.length > fb6V) {
                G4K = i4m[fb6V];
                jN8F = G4K.cssText + jN8F
            } else {
                G4K = G4K.styleSheet
            }
            G4K.cssText = jN8F
        })
    }();
    bc4g.bqW5b = bc4g.bqW5b.es6m(function (d4h) {
        var bh4l = d4h.args,
            wU1x = bh4l[0].sheet;
        if (!!wU1x) return;
        d4h.stopped = !0;
        var wU1x = bh4l[0].styleSheet,
            bm4q = wU1x.rules.length,
            bs4w = bh4l[1].split(/[\{\}]/);
        wU1x.addRule(bs4w[0], bs4w[1], bm4q);
        d4h.value = wU1x.rules[bm4q]
    });
    bc4g.brK5P = function () {
        var FO4S = function (dU6O, d4h) {
            a3x.v4z(h4l.U4Y(d4h), dU6O)
        };
        return bc4g.brK5P.es6m(function (d4h) {
            if (N4R.di5n.release >= "4.0") return;
            var bh4l = d4h.args;
            if (bh4l[1] != 1) {
                h4l.s4w(bh4l[0], "blur", FO4S.g4k(null, bh4l[2]));
                bh4l[1] = -1
            }
        })
    }();
    bc4g.UL9C = function (UY9P) {
        return !0
    };
    bc4g.bqO5T = bc4g.bqO5T.es6m(function (d4h) {
        var bh4l = d4h.args,
            f4j = (bh4l[0].attributes || Z4d)[bh4l[1]];
        if (!!f4j) {
            d4h.stopped = !0;
            d4h.value = f4j.value
        }
    }, function (d4h) {
        var bh4l = d4h.args;
        if (bh4l[1] == "maxlength" && d4h.value == 2147483647) d4h.value = ""
    });
    if (N4R.di5n.release < 5) {
        bc4g.brw5B = function () {
            var eC6w, fr6l, jO8G = [],
                bqB5G = "cb-" + +(new Date),
                bl4p = '<script>parent.nej.h["' + bqB5G + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bDM8E = function () {
                eC6w = window.clearTimeout(eC6w);
                if (!jO8G.length) return;
                var dV6P = jO8G.shift();
                try {
                    var vO1x = fr6l.contentWindow.document;
                    vO1x.open();
                    vO1x.write("<head><title>");
                    vO1x.write(document.title);
                    vO1x.write("</title>");
                    vO1x.write(bl4p.replace("#<HASH>", encodeURIComponent(dV6P)));
                    vO1x.write("</head><body></body>");
                    if (location.hostname != document.domain) vO1x.domain = document.domain;
                    vO1x.close();
                    bc4g[bqB5G] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jO8G.unshift(dV6P)
                }
                eC6w = window.setTimeout(bDM8E, 50)
            };
            return bc4g.brw5B.es6m(function (d4h) {
                d4h.stopped = !0;
                var dV6P = d4h.args[0];
                if (!!bc4g[bqB5G] || !fr6l && !dV6P) return;
                jO8G.push(dV6P);
                if (!fr6l) fr6l = a3x.Wm0x();
                bDM8E()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        bc4g = c4g("nej.h"),
        N4R = c4g("nej.p"),
        Wt0x = N4R.buR6L;
    if (N4R.mC8u.gecko) return;
    var Ls6m = function () {
        Wt0x.css3d = Wt0x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (iq7j, G4K) {
            if (!iq7j || !G4K) return;
            switch (iq7j) {
                case "beforeEnd":
                    this.appendChild(G4K);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(G4K, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(G4K) : this.insertBefore(G4K, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(G4K) : this.parentNode.insertBefore(G4K, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bl4p) {
                this.textContent = bl4p
            })
        }
    };
    bc4g.BB3x = function () {
        var gm6g = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bc4g.BB3x.es6m(function (d4h) {
            var bh4l = d4h.args;
            if (gm6g.test(bh4l[1] || "")) {
                d4h.stopped = !0;
                d4h.value = bh4l
            }
        })
    }();
    bc4g.bSM3x = function () {
        var bTM3x = function (d4h) {
            h4l.bf4j(d4h);
            h4l.U4Y(d4h).control.click()
        };
        return function (G4K) {
            h4l.s4w(G4K, "click", bTM3x)
        }
    }();
    Ls6m()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        bc4g = c4g("nej.h");
    var WA0x = function () {
        var ow9n = !!document.body.classList;
        return function () {
            return ow9n
        }
    }();
    var bIJ9A = function () {
        var cY5d = /\s+/g;
        return function (fx6r) {
            fx6r = (fx6r || "").trim();
            return !fx6r ? null : new RegExp("(\\s|^)(?:" + fx6r.replace(cY5d, "|") + ")(?=\\s|$)", "g")
        }
    }();
    bc4g.LD6x = bc4g.LD6x.es6m(function (d4h) {
        if (WA0x()) return;
        d4h.stopped = !0;
        var bh4l = d4h.args,
            G4K = a3x.B4F(bh4l[0]);
        if (!G4K || !bh4l[1] && !bh4l[2]) return;
        var fx6r = G4K.className || "";
        var GQ4U = " " + (bh4l[2] || ""),
            GS4W = bIJ9A((bh4l[1] || "") + GQ4U);
        !!GS4W && (fx6r = fx6r.replace(GS4W, "$1"));
        G4K.className = (fx6r + GQ4U).replace(/\s+/g, " ").trim()
    });
    bc4g.btd6X = bc4g.btd6X.es6m(function (d4h) {
        if (WA0x()) return;
        d4h.stopped = !0;
        var bh4l = d4h.args;
        bc4g.LD6x(bh4l[0], "", bh4l[1])
    });
    bc4g.bsU6O = bc4g.bsU6O.es6m(function (d4h) {
        if (WA0x()) return;
        d4h.stopped = !0;
        var bh4l = d4h.args;
        bc4g.LD6x(bh4l[0], bh4l[1], "")
    });
    bc4g.bsD6x = bc4g.bsD6x.es6m(function (d4h) {
        if (WA0x()) return;
        d4h.stopped = !0;
        var bh4l = d4h.args,
            G4K = a3x.B4F(bh4l[0]);
        if (!G4K) {
            d4h.value = !1;
            return
        }
        var cY5d = bIJ9A(bh4l[1]);
        d4h.value = !cY5d ? !1 : cY5d.test(G4K.className || "")
    })
})();
(function () {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        bc4g = c4g("nej.h");
    if (N4R.mC8u.webkit) return;
    bc4g.UL9C = function (UY9P) {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        bc4g = c4g("nej.h"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        cP5U = c4g("nej.x"),
        Q4U = {};
    var bJT0x = function (G4K) {
        G4K = a3x.B4F(G4K);
        if (!G4K || !Q4U[G4K.id]) return;
        var WD0x = !0,
            D4H = G4K.id;
        k4o.ex6r(Q4U[D4H], function () {
            WD0x = !1;
            return !0
        });
        if (WD0x) delete Q4U[D4H]
    };
    h4l.s4w = cP5U.s4w = function () {
        var bUt3x = function () {
            var bh4l = bc4g.BB3x.apply(bc4g, arguments);
            if (!bh4l || !bh4l[2]) return;
            var tJ0x = a3x.ld8V(bh4l[0]),
                nZ9Q = Q4U[tJ0x] || {};
            Q4U[tJ0x] = nZ9Q;
            tJ0x = bh4l[4] || bh4l[1];
            var Bq3x = nZ9Q[tJ0x] || [];
            nZ9Q[tJ0x] = Bq3x;
            Bq3x.push({
                type: bh4l[1],
                func: bh4l[2],
                capt: !!bh4l[3],
                sfun: bh4l[5] || bh4l[2]
            });
            return bh4l.slice(0, 4)
        };
        return function () {
            var bh4l = bUt3x.apply(null, arguments);
            if (!!bh4l) bc4g.brl5q.apply(bc4g, bh4l);
            return this
        }
    }();
    h4l.mH8z = cP5U.mH8z = function () {
        var bUJ3x = function () {
            var vV1x = arguments,
                tJ0x = a3x.ld8V(vV1x[0]),
                nZ9Q = Q4U[tJ0x],
                t4x = (vV1x[1] || "").toLowerCase(),
                d4h = vV1x[2];
            if (!nZ9Q || !t4x || !d4h) return;
            nZ9Q = nZ9Q[t4x];
            if (!nZ9Q) return;
            var bUK3x = !!vV1x[3],
                r4v = k4o.dd5i(nZ9Q, function (iO7H) {
                    return d4h == iO7H.sfun && bUK3x == iO7H.capt
                });
            if (r4v < 0) return;
            var iO7H = nZ9Q.splice(r4v, 1)[0];
            return !iO7H ? null : [a3x.B4F(tJ0x), iO7H.type, iO7H.func, iO7H.capt]
        };
        return function () {
            var bh4l = bUJ3x.apply(null, arguments);
            if (!!bh4l) {
                bc4g.Um9d.apply(bc4g, bh4l);
                bJT0x(bh4l[0])
            }
            return this
        }
    }();
    h4l.gF7y = cP5U.gF7y = function () {
        var bOO1x = function () {
            var vV1x = arguments,
                tJ0x = a3x.ld8V(vV1x[0]),
                nZ9Q = Q4U[tJ0x],
                Bq3x = (vV1x[1] || "").toLowerCase();
            if (!nZ9Q || !Bq3x) return;
            var G4K = a3x.B4F(tJ0x);
            k4o.mD8v(nZ9Q[Bq3x], function (iO7H, r4v, i4m) {
                bc4g.Um9d(G4K, iO7H.type, iO7H.func, iO7H.capt);
                i4m.splice(r4v, 1)
            });
            delete nZ9Q[Bq3x]
        };
        var bUM3x = function (G4K) {
            G4K = a3x.B4F(G4K);
            if (!G4K) return;
            var D4H = G4K.id;
            k4o.ex6r(Q4U[D4H], function (i4m, t4x) {
                bOO1x(D4H, t4x)
            });
            delete Q4U[D4H]
        };
        return function (G4K, t4x) {
            !t4x ? bUM3x(G4K) : bOO1x(G4K, t4x);
            bJT0x(G4K);
            return this
        }
    }();
    h4l.U4Y = function () {
        var bqg5l;
        var Ht4x = function (T4X, G4K) {
            var bs4w = T4X.split(":");
            if (bs4w.length > 1) {
                if (!bqg5l) bqg5l = {
                    c: a3x.bA4E,
                    d: a3x.u4y,
                    a: a3x.fT6N
                };
                var Hw4A = bqg5l[bs4w[0]];
                if (!!Hw4A) return !!Hw4A(G4K, bs4w[1]);
                T4X = bs4w[1]
            }
            return !!a3x.fT6N(G4K, T4X) || !!a3x.u4y(G4K, T4X) || a3x.bA4E(G4K, T4X)
        };
        return function (d4h) {
            if (!d4h) return null;
            var G4K = d4h.target || d4h.srcElement,
                dS6M = arguments[1];
            if (!dS6M) return G4K;
            if (k4o.fA6u(dS6M)) dS6M = Ht4x.g4k(null, dS6M);
            if (k4o.gr6l(dS6M)) {
                while (G4K) {
                    if (!!dS6M(G4K)) return G4K;
                    G4K = G4K.parentNode
                }
                return null
            }
            return G4K
        }
    }();
    h4l.bf4j = function (d4h) {
        h4l.sF0x(d4h);
        h4l.cm5r(d4h);
        return this
    };
    h4l.sF0x = function (d4h) {
        if (!!d4h) {
            !!d4h.stopPropagation ? d4h.stopPropagation() : d4h.cancelBubble = !0
        }
        return this
    };
    h4l.cm5r = function (d4h) {
        if (!!d4h) {
            !!d4h.preventDefault ? d4h.preventDefault() : d4h.returnValue = !1
        }
        return this
    };
    h4l.cCm1x = function () {
        var qj9a = !1;
        var bUZ3x = function () {
            if (qj9a) return;
            qj9a = !0;
            h4l.s4w(document, "click", bVo3x, !0)
        };
        var bVo3x = function (d4h) {
            var G4K = h4l.U4Y(d4h),
                bVz3x = a3x.u4y(G4K, "stopped");
            if (bVz3x == "true") {
                h4l.bf4j(d4h);
                a3x.u4y(G4K, "stopped", "false")
            }
        };
        return function (d4h) {
            if (!d4h) return;
            if (d4h.type == "click") {
                h4l.bf4j(d4h);
                return
            }
            bUZ3x();
            a3x.u4y(h4l.U4Y(d4h), "stopped", "true")
        }
    }();
    h4l.iX7Q = function (d4h) {
        return d4h.pageX != null ? d4h.pageX : d4h.clientX + a3x.oQ9H().scrollLeft
    };
    h4l.lK8C = function (d4h) {
        return d4h.pageY != null ? d4h.pageY : d4h.clientY + a3x.oQ9H().scrollTop
    };
    h4l.z4D = cP5U.z4D = function (G4K, t4x, e4i) {
        var bh4l = bc4g.BB3x(G4K, t4x);
        if (!!bh4l) bc4g.brg5l(bh4l[0], bh4l[1], e4i);
        return this
    };
    c4g("dbg").dumpEV = function () {
        return Q4U
    };
    cP5U.isChange = !0
})();
(function () {
    var o = !0,
        w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {}
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {},
                    c;
                if ((f.__proto__ = w, f.__proto__ = {
                        toString: 1
                    }, f).toString != m) p = function (a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function (a, f) {
                var c = 0,
                    b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {},
                        b = m.call(a) == "[object Function]",
                        d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function (a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function (a, b, c, d, h, n, e) {
                        var g = b[a],
                            i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {}
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]") h = b;
                        else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ");
                            }
                        } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b, A, j = function () {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j();
                                        else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    },
                    F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "]" && j()
                                        } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "}" && j()
                                        } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function (a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;) I(d, h, c);
                            else C(d, function (a) {
                                I(d, a, c)
                            });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c4g = NEJ.P,
        N4R = c4g("nej.p");
    if (N4R.mC8u.trident0) return;
    JSON.parse = JSON.parse.es6m(function (d4h) {
        var cG5L = d4h.args[0] || "";
        if (cG5L.length >= 5e5) {
            d4h.stopped = !0;
            d4h.value = eval("(" + cG5L + ")")
        }
    })
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        ec6W = c4g("nej.g"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        bc4g = c4g("nej.h"),
        cP5U = c4g("nej.x"),
        HA4E, bpI5N = {},
        Q4U = document.createDocumentFragment();
    a3x.ld8V = cP5U.ld8V = function (G4K) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return;
        var D4H = !!G4K.id ? G4K.id : "auto-id-" + k4o.QP8H(16);
        G4K.id = D4H;
        if (a3x.B4F(D4H) != G4K) bpI5N[D4H] = G4K;
        return D4H
    };
    a3x.B4F = cP5U.B4F = function (G4K) {
        var f4j = bpI5N["" + G4K];
        if (!!f4j) return f4j;
        if (!k4o.fA6u(G4K) && !k4o.uW1x(G4K)) return G4K;
        return document.getElementById(G4K)
    };
    a3x.da5f = cP5U.da5f = function (G4K, dU6O) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return null;
        var i4m = bc4g.bth6b(G4K);
        if (!!dU6O) k4o.mD8v(i4m, function (f4j, r4v) {
            if (!a3x.bA4E(f4j, dU6O)) i4m.splice(r4v, 1)
        });
        return i4m
    };
    a3x.F4J = cP5U.F4J = function (G4K, fx6r) {
        G4K = a3x.B4F(G4K);
        return !G4K ? null : bc4g.btg6a(G4K, fx6r.trim())
    };
    a3x.bIs9j = cP5U.bIs9j = function (G4K) {
        G4K = a3x.B4F(G4K);
        if (!!G4K) {
            G4K = G4K.parentNode;
            while (!!G4K) {
                if (G4K.scrollHeight > G4K.clientHeight) break;
                G4K = G4K.parentNode
            }
            if (!!G4K) return G4K
        }
        var nZ9Q = document.body.scrollHeight,
            Bq3x = document.documentElement.scrollHeight;
        return Bq3x >= nZ9Q ? document.documentElement : document.body
    };
    a3x.oQ9H = function () {
        var bID9u = function (i4m) {
            var o4s = 0;
            k4o.bb4f(i4m, function (eT6N) {
                if (!eT6N) return;
                if (!o4s) {
                    o4s = eT6N
                } else {
                    o4s = Math.min(o4s, eT6N)
                }
            });
            return o4s
        };
        return function (vO1x) {
            var HB4F = vO1x || document,
                Bh3x = HB4F.body,
                Bg3x = HB4F.documentElement,
                o4s = {
                    scrollTop: Math.max(Bh3x.scrollTop, Bg3x.scrollTop),
                    scrollLeft: Math.max(Bh3x.scrollLeft, Bg3x.scrollLeft),
                    clientWidth: bID9u([Bh3x.clientWidth, Bh3x.offsetWidth, Bg3x.clientWidth, Bg3x.offsetWidth]),
                    clientHeight: bID9u([Bh3x.clientHeight, Bh3x.offsetHeight, Bg3x.clientHeight, Bg3x.offsetHeight])
                };
            o4s.scrollWidth = Math.max(o4s.clientWidth, Bh3x.scrollWidth, Bg3x.scrollWidth);
            o4s.scrollHeight = Math.max(o4s.clientHeight, Bh3x.scrollHeight, Bg3x.scrollHeight);
            return o4s
        }
    }();
    a3x.cCg1x = function (fb6V, oe9V) {
        var o4s = NEJ.X({}, oe9V),
            bMe0x = fb6V.width / fb6V.height,
            bab1x = oe9V.width / oe9V.height;
        if (bMe0x > bab1x && oe9V.height > fb6V.height) {
            o4s.height = fb6V.height;
            o4s.width = o4s.height * bab1x
        }
        if (bMe0x < bab1x && oe9V.width > fb6V.width) {
            o4s.width = fb6V.width;
            o4s.height = o4s.width / bab1x
        }
        return o4s
    };
    a3x.cCf1x = function () {
        var cY5d = /\s+/;
        var tC0x = {
            left: function () {
                return 0
            },
            center: function (hb7U, oe9V) {
                return (hb7U.width - oe9V.width) / 2
            },
            right: function (hb7U, oe9V) {
                return hb7U.width - oe9V.width
            },
            top: function () {
                return 0
            },
            middle: function (hb7U, oe9V) {
                return (hb7U.height - oe9V.height) / 2
            },
            bottom: function (hb7U, oe9V) {
                return hb7U.height - oe9V.height
            }
        };
        return function (hb7U, oe9V, nE9v) {
            var o4s = {},
                bs4w = (nE9v || "").split(cY5d),
                gk6e = tC0x[bs4w[1]] || tC0x.middle,
                gx7q = tC0x[bs4w[0]] || tC0x.center;
            o4s.top = gk6e(hb7U, oe9V);
            o4s.left = gx7q(hb7U, oe9V);
            return o4s
        }
    }();
    a3x.sI0x = cP5U.sI0x = function (G4K, dU6O) {
        bc4g.bsh5m(G4K, dU6O || a3x.u4y(G4K, "hover") || "js-hover");
        return this
    };
    a3x.HM4Q = cP5U.HM4Q = function (G4K) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return;
        bc4g.bsf5k(G4K)
    };
    a3x.bWb3x = cP5U.bWb3x = function () {
        var Q4U = {},
            bQK2x = 2;
        var bWj3x = function (D4H, dU6O, d4h) {
            Q4U[D4H] = [h4l.iX7Q(d4h), h4l.lK8C(d4h)];
            a3x.w4A(D4H, dU6O)
        };
        var bWA4E = function (D4H, dU6O, d4h) {
            var bI4M = Q4U[D4H];
            if (!k4o.eE6y(bI4M)) return;
            var bWQ4U = Math.abs(h4l.iX7Q(d4h) - bI4M[0]),
                bWR4V = Math.abs(h4l.lK8C(d4h) - bI4M[1]);
            if (bWQ4U > bQK2x || bWR4V > bQK2x) boN5S(D4H, dU6O)
        };
        var boN5S = function (D4H, dU6O) {
            if (k4o.eE6y(Q4U[D4H])) {
                Q4U[D4H] = -1;
                a3x.v4z(D4H, dU6O)
            }
        };
        return function (G4K, dU6O) {
            var D4H = a3x.ld8V(G4K);
            if (!D4H || Q4U[D4H] != null) return;
            Q4U[D4H] = -1;
            dU6O = dU6O || a3x.u4y(D4H, "highlight") || "js-highlight";
            h4l.s4w(D4H, "touchstart", bWj3x.g4k(null, D4H, dU6O));
            h4l.s4w(document, "touchmove", bWA4E.g4k(null, D4H, dU6O));
            h4l.s4w(document, "touchend", boN5S.g4k(null, D4H, dU6O));
            h4l.s4w(document, "touchcancel", boN5S.g4k(null, D4H, dU6O))
        }
    }();
    a3x.Be3x = cP5U.Be3x = function () {
        var bWS4W = function (D4H, dU6O, bXi4m) {
            var G4K = a3x.B4F(D4H),
                d4h = {
                    clazz: dU6O,
                    target: G4K
                };
            if (a3x.bA4E(G4K, dU6O)) {
                d4h.toggled = !1;
                a3x.v4z(G4K, dU6O)
            } else {
                d4h.toggled = !0;
                a3x.w4A(G4K, dU6O)
            }
            bXi4m.call(null, d4h)
        };
        return function (G4K, e4i) {
            G4K = a3x.B4F(G4K);
            if (!!G4K) {
                var iE7x = {
                    ontoggle: bn4r,
                    clazz: "js-toggle",
                    element: G4K.parentNode
                };
                if (k4o.fA6u(e4i)) {
                    var f4j = a3x.B4F(e4i);
                    !!f4j ? iE7x.element = f4j : iE7x.clazz = e4i
                } else {
                    NEJ.EX(iE7x, e4i);
                    iE7x.element = a3x.B4F(iE7x.element)
                }
                var D4H = a3x.ld8V(iE7x.element);
                h4l.s4w(G4K, "click", bWS4W.g4k(null, D4H, iE7x.clazz, iE7x.ontoggle || bn4r))
            }
            return this
        }
    }();
    a3x.mo8g = cP5U.mo8g = function (G4K, e4i) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return;
        var eU6O = 0,
            dU6O = "js-focus";
        if (k4o.uW1x(e4i)) {
            eU6O = e4i
        } else if (k4o.fA6u(e4i)) {
            dU6O = e4i
        } else if (k4o.kU8M(e4i)) {
            eU6O = e4i.mode || eU6O;
            dU6O = e4i.clazz || dU6O
        }
        var C4G = parseInt(a3x.u4y(G4K, "mode"));
        if (!isNaN(C4G)) eU6O = C4G;
        C4G = a3x.u4y(G4K, "focus");
        if (!!C4G) dU6O = C4G;
        bc4g.brK5P(G4K, eU6O, dU6O);
        return this
    };
    a3x.cZ5e = function () {
        var bu4y = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function (fi6c, fx6r, bG4K) {
            var G4K = document.createElement(fi6c);
            NEJ.X(G4K, bu4y[fi6c.toLowerCase()]);
            if (!!fx6r) G4K.className = fx6r;
            bG4K = a3x.B4F(bG4K);
            if (!!bG4K) bG4K.appendChild(G4K);
            return G4K
        }
    }();
    a3x.Wm0x = function () {
        var bXx4B = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var bXX4b = function (T4X) {
            T4X = T4X.trim();
            if (!T4X) return a3x.cZ5e("iframe");
            var fr6l;
            try {
                fr6l = document.createElement('<iframe name="' + T4X + '"></iframe>');
                fr6l.frameBorder = 0
            } catch (e) {
                fr6l = a3x.cZ5e("iframe");
                fr6l.name = T4X
            }
            return fr6l
        };
        return function (e4i) {
            e4i = e4i || Z4d;
            var fr6l = bXX4b(e4i.name || "");
            if (!e4i.visible) fr6l.style.display = "none";
            if (k4o.gr6l(e4i.onload)) h4l.s4w(fr6l, "load", function (d4h) {
                if (!fr6l.src) return;
                h4l.gF7y(fr6l, "load");
                e4i.onload(d4h)
            });
            var bG4K = e4i.parent;
            if (k4o.gr6l(bG4K)) {
                try {
                    bG4K(fr6l)
                } catch (e) {}
            } else {
                (a3x.B4F(bG4K) || document.body).appendChild(fr6l)
            }
            var ds5x = e4i.src || bXx4B();
            window.setTimeout(function () {
                fr6l.src = ds5x
            }, 0);
            return fr6l
        }
    }();
    a3x.cB5G = cP5U.cB5G = function () {
        var byS7L = function (xl1x) {
            xl1x.src = ec6W.btx6r
        };
        var bzu7n = function (vr1x) {
            vr1x.src = "about:blank"
        };
        return function (G4K, bYm4q) {
            G4K = a3x.B4F(G4K);
            if (!G4K) return this;
            if (!bYm4q) h4l.gF7y(G4K);
            delete bpI5N[G4K.id];
            var fi6c = G4K.tagName;
            if (fi6c == "IFRAME") {
                bzu7n(G4K)
            } else if (fi6c == "IMG") {
                byS7L(G4K)
            } else if (!!G4K.getElementsByTagName) {
                k4o.bb4f(G4K.getElementsByTagName("img"), byS7L);
                k4o.bb4f(G4K.getElementsByTagName("iframe"), bzu7n)
            }
            if (!!G4K.parentNode) {
                G4K.parentNode.removeChild(G4K)
            }
            return this
        }
    }();
    a3x.mN8F = cP5U.mN8F = function (G4K) {
        G4K = a3x.B4F(G4K);
        if (!!G4K) Q4U.appendChild(G4K);
        return this
    };
    a3x.bAH7A = cP5U.bAH7A = function (G4K) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return;
        k4o.mD8v(G4K.childNodes, function (f4j) {
            a3x.cB5G(f4j)
        })
    };
    a3x.HW4a = cP5U.HW4a = function () {
        var dU6O, gm6g = /\s+/;
        var bYy4C = function () {
            if (!!dU6O) return;
            dU6O = a3x.sN0x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a3x.bCg8Y()
        };
        return function (G4K, e4i) {
            G4K = a3x.B4F(G4K);
            if (!G4K) return;
            bYy4C();
            e4i = e4i || Z4d;
            var bG4K = G4K.parentNode;
            if (!a3x.bA4E(bG4K, dU6O)) {
                bG4K = a3x.cZ5e("span", dU6O);
                G4K.insertAdjacentElement("beforeBegin", bG4K);
                bG4K.appendChild(G4K)
            }
            var bCu8m = e4i.nid || "",
                f4j = a3x.F4J(bG4K, bCu8m || dU6O + "-show")[0];
            if (!f4j) {
                var dT6N = ((e4i.clazz || "") + " " + bCu8m).trim();
                dT6N = dU6O + "-show" + (!dT6N ? "" : " ") + dT6N;
                f4j = a3x.cZ5e(e4i.tag || "span", dT6N);
                bG4K.appendChild(f4j)
            }
            var dT6N = e4i.clazz;
            if (!!dT6N) {
                dT6N = (dT6N || "").trim().split(gm6g)[0] + "-parent";
                a3x.w4A(bG4K, dT6N)
            }
            return f4j
        }
    }();
    a3x.u4y = cP5U.u4y = function () {
        var bol4p = {},
            fi6c = "data-",
            cY5d = /\-(.{1})/gi;
        var FV4Z = function (G4K) {
            var D4H = a3x.ld8V(G4K);
            if (!!bol4p[D4H]) return;
            var bu4y = {};
            k4o.bb4f(G4K.attributes, function (f4j) {
                var K4O = f4j.nodeName;
                if (K4O.indexOf(fi6c) != 0) return;
                K4O = K4O.replace(fi6c, "").replace(cY5d, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bu4y[K4O] = f4j.nodeValue || ""
            });
            bol4p[D4H] = bu4y
        };
        return function (G4K, K4O, C4G) {
            G4K = a3x.B4F(G4K);
            if (!G4K) return null;
            var UG9x = G4K.dataset;
            if (!UG9x) {
                FV4Z(G4K);
                UG9x = bol4p[G4K.id]
            }
            if (C4G !== undefined) UG9x[K4O] = C4G;
            return UG9x[K4O]
        }
    }();
    a3x.fT6N = cP5U.fT6N = function (G4K, T4X, C4G) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return "";
        if (C4G !== undefined && !!G4K.setAttribute) G4K.setAttribute(T4X, C4G);
        return bc4g.bqO5T(G4K, T4X)
    };
    a3x.nl9c = function (dK5P) {
        var rC0x = document.createElement("div");
        rC0x.innerHTML = dK5P;
        var i4m = a3x.da5f(rC0x);
        return i4m.length > 1 ? rC0x : i4m[0]
    };
    a3x.bYZ4d = cP5U.bYZ4d = function (G4K) {
        G4K = a3x.B4F(G4K);
        return !G4K ? "" : bc4g.brD5I(G4K)
    };
    a3x.bGN9E = function (BD3x) {
        BD3x = (BD3x || "").trim();
        return !BD3x ? null : bc4g.brz5E(BD3x)
    };
    a3x.bZh4l = function (cL5Q, t4x) {
        cL5Q = cL5Q || "";
        switch (t4x) {
            case "xml":
                cL5Q = a3x.bGN9E(cL5Q);
                break;
            case "json":
                try {
                    cL5Q = JSON.parse(cL5Q)
                } catch (ex) {
                    cL5Q = null
                }
                break
        }
        return cL5Q
    };
    a3x.hM7F = cP5U.hM7F = function () {
        var cau4y = function (G4K) {
            return G4K == document.body || G4K == document.documentElement
        };
        return function (dZ6T, of9W) {
            dZ6T = a3x.B4F(dZ6T);
            if (!dZ6T) return null;
            of9W = a3x.B4F(of9W) || null;
            var o4s = {
                    x: 0,
                    y: 0
                },
                bnL4P, dl5q, Vo9f;
            while (!!dZ6T && dZ6T != of9W) {
                bnL4P = cau4y(dZ6T);
                dl5q = bnL4P ? 0 : dZ6T.scrollLeft;
                Vo9f = parseInt(a3x.cX5c(dZ6T, "borderLeftWidth")) || 0;
                o4s.x += dZ6T.offsetLeft + Vo9f - dl5q;
                dl5q = bnL4P ? 0 : dZ6T.scrollTop;
                Vo9f = parseInt(a3x.cX5c(dZ6T, "borderTopWidth")) || 0;
                o4s.y += dZ6T.offsetTop + Vo9f - dl5q;
                dZ6T = dZ6T.offsetParent
            }
            return o4s
        }
    }();
    a3x.mJ8B = cP5U.mJ8B = function (G4K) {
        var be4i = a3x.hM7F(G4K);
        window.scrollTo(be4i.x, be4i.y);
        return this
    };
    a3x.cBE1x = function (sc0x) {
        sc0x = (sc0x || "").trim();
        return bc4g.bCx8p(sc0x)
    };
    a3x.cax4B = cP5U.cax4B = function (G4K, T4X, bu4y) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return this;
        var C4G = bc4g.bKA0x(T4X, bu4y);
        if (!C4G) return this;
        a3x.Y4c(G4K, "transform", C4G);
        return this
    };
    a3x.eY6S = cP5U.eY6S = function (G4K, bu4y) {
        G4K = a3x.B4F(G4K);
        if (!!G4K) k4o.ex6r(bu4y, function (C4G, T4X) {
            a3x.Y4c(G4K, T4X, C4G)
        });
        return this
    };
    a3x.caB4F = cP5U.caB4F = function (fR6L, e4i) {
        fR6L = a3x.B4F(fR6L);
        if (!fR6L) return {
            start: 0,
            end: 0
        };
        if (k4o.uW1x(e4i)) e4i = {
            start: e4i,
            end: e4i
        };
        if (e4i != null) {
            if (e4i.end == null) e4i.end = e4i.start || 0;
            bc4g.bsa5f(fR6L, e4i)
        } else {
            e4i = bc4g.brM5R(fR6L)
        }
        return e4i
    };
    a3x.Y4c = cP5U.Y4c = function (G4K, T4X, C4G) {
        G4K = a3x.B4F(G4K);
        if (!!G4K) bc4g.brd5i(G4K, T4X, C4G);
        return this
    };
    a3x.cX5c = cP5U.cX5c = function (G4K, T4X) {
        G4K = a3x.B4F(G4K);
        if (!G4K) return "";
        var gI7B = !window.getComputedStyle ? G4K.currentStyle || Z4d : window.getComputedStyle(G4K, null);
        return gI7B[bc4g.bNj0x(T4X)] || ""
    };
    a3x.bMt0x = function () {
        var cY5d = /[\s\r\n]+/gi;
        return function (cc5h) {
            cc5h = (cc5h || "").trim().replace(cY5d, " ");
            if (!cc5h) return;
            var f4j = a3x.cZ5e("style");
            document.head.appendChild(f4j);
            bc4g.bqX5c(f4j, bc4g.bSC3x(cc5h));
            return f4j
        }
    }();
    a3x.bMO0x = function (xn1x) {
        try {
            xn1x = xn1x.trim();
            if (!!xn1x) return (new Function(xn1x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a3x.sN0x = function () {
        var cY5d = /#<.*?>/g,
            gn6h = +(new Date);
        return function (jN8F) {
            if (!HA4E) HA4E = [];
            var fx6r = "auto-" + gn6h++;
            HA4E.push(jN8F.replace(cY5d, fx6r));
            return fx6r
        }
    }();
    a3x.bCg8Y = function () {
        if (!!HA4E) {
            a3x.bMt0x(HA4E.join(""));
            HA4E = null
        }
        return this
    };
    a3x.cBB1x = function (cc5h, jN8F) {
        cc5h = a3x.B4F(cc5h);
        return !cc5h ? null : bc4g.bqW5b(cc5h, jN8F)
    };
    a3x.w4A = cP5U.w4A = function () {
        bc4g.btd6X.apply(bc4g, arguments);
        return this
    };
    a3x.v4z = cP5U.v4z = function () {
        bc4g.bsU6O.apply(bc4g, arguments);
        return this
    };
    a3x.eQ6K = cP5U.eQ6K = function () {
        bc4g.LD6x.apply(bc4g, arguments);
        return this
    };
    a3x.bA4E = cP5U.bA4E = function () {
        return bc4g.bsD6x.apply(bc4g, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cP5U.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        fo6i = NEJ.R,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        bc4g = c4g("nej.h"),
        k4o = c4g("nej.u");
    var EV4Z = function (j4n, t4x) {
        try {
            t4x = t4x.toLowerCase();
            if (j4n === null) return t4x == "null";
            if (j4n === undefined) return t4x == "undefined";
            return Z4d.toString.call(j4n).toLowerCase() == "[object " + t4x + "]"
        } catch (e) {
            return !1
        }
    };
    k4o.gr6l = function (j4n) {
        return EV4Z(j4n, "function")
    };
    k4o.fA6u = function (j4n) {
        return EV4Z(j4n, "string")
    };
    k4o.uW1x = function (j4n) {
        return EV4Z(j4n, "number")
    };
    k4o.cBA1x = function (j4n) {
        return EV4Z(j4n, "boolean")
    };
    k4o.Fw4A = function (j4n) {
        return EV4Z(j4n, "date")
    };
    k4o.eE6y = function (j4n) {
        return EV4Z(j4n, "array")
    };
    k4o.kU8M = function (j4n) {
        return EV4Z(j4n, "object")
    };
    k4o.fm6g = function () {
        var cY5d = /[^\x00-\xfff]/g;
        return function (bl4p) {
            return ("" + (bl4p || "")).replace(cY5d, "**").length
        }
    }();
    k4o.dd5i = function (i4m, p4t) {
        var dS6M = k4o.gr6l(p4t) ? p4t : function (C4G) {
                return C4G === p4t
            },
            r4v = k4o.ex6r(i4m, dS6M);
        return r4v != null ? r4v : -1
    };
    k4o.cBw1x = function () {
        var bPr1x;
        var Lr6l = function (i4m, oh9Y, oj9a) {
            if (oh9Y > oj9a) return -1;
            var Ga4e = Math.ceil((oh9Y + oj9a) / 2),
                o4s = bPr1x(i4m[Ga4e], Ga4e, i4m);
            if (o4s == 0) return Ga4e;
            if (o4s < 0) return Lr6l(i4m, oh9Y, Ga4e - 1);
            return Lr6l(i4m, Ga4e + 1, oj9a)
        };
        return function (i4m, Hw4A) {
            bPr1x = Hw4A || bn4r;
            return Lr6l(i4m, 0, i4m.length - 1)
        }
    }();
    k4o.mD8v = function (i4m, dE5J, iB7u) {
        if (!i4m || !i4m.length || !k4o.gr6l(dE5J)) return null;
        for (var i = i4m.length - 1; i >= 0; i--)
            if (!!dE5J.call(iB7u, i4m[i], i, i4m)) return i;
        return null
    };
    k4o.bb4f = function (i4m, dE5J, iB7u) {
        if (!i4m || !i4m.length || !k4o.gr6l(dE5J)) return this;
        if (!!i4m.forEach) {
            i4m.forEach(dE5J, iB7u);
            return this
        }
        for (var i = 0, l = i4m.length; i < l; i++) dE5J.call(iB7u, i4m[i], i, i4m);
        return this
    };
    k4o.ex6r = function (i4m, dE5J, iB7u) {
        if (!i4m || !k4o.gr6l(dE5J)) return null;
        if (i4m.length != null) {
            if (i4m.length > 0)
                for (var i = 0, l = i4m.length; i < l; i++)
                    if (!!dE5J.call(iB7u, i4m[i], i, i4m)) return i
        }
        if (k4o.kU8M(i4m)) {
            for (var x in i4m)
                if (i4m.hasOwnProperty(x) && !!dE5J.call(iB7u, i4m[x], x, i4m)) return x
        }
        return null
    };
    k4o.cbk5p = function (iG7z, cbA5F, e4i) {
        iG7z = iG7z || [];
        e4i = e4i || Z4d;
        var bvS6M = !!e4i.union,
            wn1x = !!e4i.begin,
            VN9E = e4i.compare,
            cbE5J = bvS6M && wn1x ? k4o.mD8v : k4o.bb4f;
        cbE5J(cbA5F, function (p4t) {
            if (!!VN9E) VN9E = VN9E.eo6i(p4t);
            var r4v = k4o.dd5i(iG7z, VN9E || p4t);
            if (r4v >= 0) iG7z.splice(r4v, 1);
            if (bvS6M) iG7z[wn1x ? "unshift" : "push"](p4t)
        });
        return iG7z
    };
    k4o.CV3x = function (bu4y, bl4p) {
        if (!bu4y || !bl4p || !bl4p.replace) return bl4p || "";
        return bl4p.replace(bu4y.r, function ($1) {
            var o4s = bu4y[!bu4y.i ? $1.toLowerCase() : $1];
            return o4s != null ? o4s : $1
        })
    };
    k4o.dQ5V = function () {
        var bu4y = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bl4p) {
            return k4o.CV3x(bu4y, bl4p)
        }
    }();
    k4o.Ii5n = function () {
        var bu4y = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bl4p) {
            return k4o.CV3x(bu4y, bl4p)
        }
    }();
    k4o.hL7E = function () {
        var bu4y = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            ccb5g = ["上午", "下午"],
            cch5m = ["A.M.", "P.M."],
            bnn4r = ["日", "一", "二", "三", "四", "五", "六"],
            ccj5o = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            ccP5U = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var LI6C = function (gz7s) {
            gz7s = parseInt(gz7s) || 0;
            return (gz7s < 10 ? "0" : "") + gz7s
        };
        var ccU5Z = function (oF9w) {
            return oF9w < 12 ? 0 : 1
        };
        return function (bw4A, Ij5o, cdk5p) {
            if (!bw4A || !Ij5o) return "";
            bw4A = k4o.WH0x(bw4A);
            bu4y.yyyy = bw4A.getFullYear();
            bu4y.yy = ("" + bu4y.yyyy).substr(2);
            bu4y.M = bw4A.getMonth() + 1;
            bu4y.MM = LI6C(bu4y.M);
            bu4y.eM = ccP5U[bu4y.M - 1];
            bu4y.cM = ccj5o[bu4y.M - 1];
            bu4y.d = bw4A.getDate();
            bu4y.dd = LI6C(bu4y.d);
            bu4y.H = bw4A.getHours();
            bu4y.HH = LI6C(bu4y.H);
            bu4y.m = bw4A.getMinutes();
            bu4y.mm = LI6C(bu4y.m);
            bu4y.s = bw4A.getSeconds();
            bu4y.ss = LI6C(bu4y.s);
            bu4y.ms = bw4A.getMilliseconds();
            bu4y.w = bnn4r[bw4A.getDay()];
            var bBO8G = ccU5Z(bu4y.H);
            bu4y.ct = ccb5g[bBO8G];
            bu4y.et = cch5m[bBO8G];
            if (!!cdk5p) {
                bu4y.H = bu4y.H % 12
            }
            return k4o.CV3x(bu4y, Ij5o)
        }
    }();
    k4o.WH0x = function (bw4A) {
        var cR5W = bw4A;
        if (k4o.fA6u(bw4A)) cR5W = new Date(Date.parse(bw4A));
        if (!k4o.Fw4A(bw4A)) cR5W = new Date(bw4A);
        return cR5W
    };
    k4o.HM4Q = function (cdm5r, cdu5z) {
        return (new Number(cdm5r)).toFixed(cdu5z)
    };
    k4o.bmQ4U = function () {
        var gm6g = /([^\/:])\/.*$/,
            jE7x = /\/[^\/]+$/,
            EU4Y = /[#\?]/,
            bmL4P = location.href.split(/[?#]/)[0],
            sX0x = document.createElement("a");
        var bmI4M = function (ln8f) {
            return (ln8f || "").indexOf("://") > 0
        };
        var bEq8i = function (ln8f) {
            return (ln8f || "").split(EU4Y)[0].replace(jE7x, "/")
        };
        var cdP5U = function (ln8f, fJ6D) {
            if (ln8f.indexOf("/") == 0) return fJ6D.replace(gm6g, "$1") + ln8f;
            return bEq8i(fJ6D) + ln8f
        };
        bmL4P = bEq8i(bmL4P);
        return function (ln8f, fJ6D) {
            ln8f = (ln8f || "").trim();
            if (!bmI4M(fJ6D)) fJ6D = bmL4P;
            if (!ln8f) return fJ6D;
            if (bmI4M(ln8f)) return ln8f;
            ln8f = cdP5U(ln8f, fJ6D);
            sX0x.href = ln8f;
            ln8f = sX0x.href;
            return bmI4M(ln8f) ? ln8f : sX0x.getAttribute("href", 4)
        }
    }();
    k4o.cdT5Y = function () {
        var cY5d = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V4Z) {
            if (cY5d.test(V4Z || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k4o.bFg9X = function (I4M, iE7x) {
        if (!I4M) return iE7x;
        var T4X = I4M.tagName.toLowerCase(),
            i4m = a3x.da5f(I4M);
        if (!i4m || !i4m.length) {
            iE7x[T4X] = I4M.textContent || I4M.text || "";
            return iE7x
        }
        var cf5k = {};
        iE7x[T4X] = cf5k;
        k4o.bb4f(i4m, function (f4j) {
            k4o.bFg9X(f4j, cf5k)
        });
        return iE7x
    };
    k4o.cAZ1x = function (BD3x) {
        try {
            return k4o.bFg9X(a3x.bGN9E(BD3x), {})
        } catch (ex) {
            return null
        }
    };
    k4o.bFl9c = function (ii7b, Mi6c) {
        var iE7x = {};
        k4o.bb4f((ii7b || "").split(Mi6c), function (T4X) {
            var XR0x = T4X.split("=");
            if (!XR0x || !XR0x.length) return;
            var K4O = XR0x.shift();
            if (!K4O) return;
            iE7x[decodeURIComponent(K4O)] = decodeURIComponent(XR0x.join("="))
        });
        return iE7x
    };
    k4o.sZ0x = function (fW6Q, Mi6c, ceX5c) {
        if (!fW6Q) return "";
        var bs4w = [];
        for (var x in fW6Q) {
            bs4w.push(encodeURIComponent(x) + "=" + (!!ceX5c ? encodeURIComponent(fW6Q[x]) : fW6Q[x]))
        }
        return bs4w.join(Mi6c || ",")
    };
    k4o.hE7x = function (bx4B) {
        return k4o.bFl9c(bx4B, "&")
    };
    k4o.de5j = function (fW6Q) {
        return k4o.sZ0x(fW6Q, "&", !0)
    };
    k4o.cAX1x = function (fW6Q) {
        return bc4g.GP4T(fW6Q)
    };
    k4o.cAW1x = function (i4m, dS6M) {
        var o4s = {};
        k4o.bb4f(i4m, function (p4t) {
            var K4O = p4t;
            if (!!dS6M) {
                K4O = dS6M(p4t)
            }
            o4s[K4O] = p4t
        });
        return o4s
    };
    k4o.cAV1x = function (gz7s, gd6X) {
        var cfs6m = ("" + gz7s).length,
            cft6n = Math.max(1, parseInt(gd6X) || 0),
            dl5q = cft6n - cfs6m;
        if (dl5q > 0) {
            gz7s = (new Array(dl5q + 1)).join("0") + gz7s
        }
        return "" + gz7s
    };
    k4o.Yd0x = function (fW6Q, T4X) {
        if (!k4o.eE6y(T4X)) {
            try {
                delete fW6Q[T4X]
            } catch (e) {
                fW6Q[T4X] = undefined
            }
            return this
        }
        k4o.bb4f(T4X, k4o.Yd0x.g4k(k4o, fW6Q));
        return this
    };
    k4o.QP8H = function () {
        var bKM0x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bm4q) {
            bm4q = bm4q || 10;
            var o4s = [];
            for (var i = 0, bKT0x; i < bm4q; ++i) {
                bKT0x = Math.floor(Math.random() * bKM0x.length);
                o4s.push(bKM0x.charAt(bKT0x))
            }
            return o4s.join("")
        }
    }();
    k4o.AO2x = function (fq6k, fb6V) {
        return Math.floor(Math.random() * (fb6V - fq6k) + fq6k)
    };
    k4o.ny9p = function (bm4q) {
        bm4q = Math.max(0, Math.min(bm4q || 8, 30));
        var fq6k = Math.pow(10, bm4q - 1),
            fb6V = fq6k * 10;
        return k4o.AO2x(fq6k, fb6V).toString()
    };
    k4o.Yv0x = function () {
        var gn6h = +(new Date);
        return function () {
            return "" + gn6h++
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        fo6i = NEJ.R,
        bn4r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        oz9q;
    if (!!N4R.cC5H) return;
    N4R.cC5H = NEJ.C();
    oz9q = N4R.cC5H.prototype;
    N4R.cC5H.A4E = function (e4i) {
        e4i = e4i || {};
        var cv5A = !!this.AM2x && this.AM2x.shift();
        if (!cv5A) {
            cv5A = new this(e4i);
            this.cfB6v = (this.cfB6v || 0) + 1
        }
        cv5A.bj4n(e4i);
        return cv5A
    };
    N4R.cC5H.S4W = function () {
        var MB6v = function (p4t, r4v, i4m) {
            p4t.S4W();
            i4m.splice(r4v, 1)
        };
        return function (cv5A) {
            if (!cv5A) return null;
            if (!k4o.eE6y(cv5A)) {
                if (!(cv5A instanceof this)) {
                    var fx6r = cv5A.constructor;
                    if (!!fx6r.S4W) fx6r.S4W(cv5A);
                    return null
                }
                if (cv5A == this.eR6L) delete this.eR6L;
                if (cv5A == this.AI2x) delete this.AI2x;
                cv5A.bz4D();
                if (!this.AM2x) this.AM2x = [];
                if (k4o.dd5i(this.AM2x, cv5A) < 0) {
                    this.AM2x.push(cv5A)
                }
                return null
            }
            k4o.mD8v(cv5A, MB6v, this)
        }
    }();
    N4R.cC5H.gf6Z = function (e4i) {
        e4i = e4i || {};
        if (!this.eR6L) this.eR6L = this.A4E(e4i);
        return this.eR6L
    };
    N4R.cC5H.cfI6C = function (e4i, qW0x) {
        e4i = e4i || {};
        if (!!qW0x && !!this.AI2x) {
            this.AI2x.S4W();
            delete this.AI2x
        }
        if (!this.AI2x) {
            this.AI2x = this.A4E(e4i)
        } else {
            this.AI2x.bj4n(e4i)
        }
        return this.AI2x
    };
    oz9q.cs5x = function () {
        var gn6h = +(new Date);
        return function () {
            this.id = gn6h++;
            this.lu8m = {};
            this.bPp1x = {}
        }
    }();
    oz9q.bj4n = function (e4i) {
        this.blU4Y(e4i)
    };
    oz9q.bz4D = function () {
        this.gF7y();
        this.IE5J()
    };
    oz9q.bT5Y = function () {
        var gn6h = +(new Date);
        var cfT6N = function (bh4l) {
            if (!bh4l || bh4l.length < 3) return;
            this.bPp1x["de-" + gn6h++] = bh4l;
            h4l.s4w.apply(h4l, bh4l)
        };
        return function (i4m) {
            k4o.bb4f(i4m, cfT6N, this)
        }
    }();
    oz9q.IE5J = function () {
        var cgf6Z = function (bh4l, K4O, bu4y) {
            delete bu4y[K4O];
            h4l.mH8z.apply(h4l, bh4l)
        };
        return function () {
            k4o.ex6r(this.bPp1x, cgf6Z)
        }
    }();
    oz9q.cAJ1x = function (dS6M) {
        dS6M = dS6M || bn4r;
        k4o.ex6r(this, function (ES4W, K4O, bu4y) {
            if (!!ES4W && !!ES4W.S4W && !dS6M(ES4W)) {
                delete bu4y[K4O];
                ES4W.S4W()
            }
        })
    };
    oz9q.S4W = function () {
        this.constructor.S4W(this)
    };
    oz9q.bvt6n = function (t4x) {
        var d4h = this.lu8m[t4x.toLowerCase()];
        return !!d4h && d4h !== bn4r
    };
    oz9q.s4w = function (t4x, d4h) {
        this.wl1x.apply(this, arguments);
        return this
    };
    oz9q.mH8z = function (t4x, d4h) {
        var t4x = (t4x || "").toLowerCase(),
            dW6Q = this.lu8m[t4x];
        if (!k4o.eE6y(dW6Q)) {
            if (dW6Q == d4h) delete this.lu8m[t4x];
            return
        }
        k4o.mD8v(dW6Q, function (eF6z, r4v, i4m) {
            if (eF6z == d4h) i4m.splice(r4v, 1)
        })
    };
    oz9q.wl1x = function (t4x, d4h) {
        if (!!t4x && k4o.gr6l(d4h)) this.lu8m[t4x.toLowerCase()] = d4h;
        return this
    };
    oz9q.blU4Y = function () {
        var chQ6K = function (d4h, t4x) {
            this.wl1x(t4x, d4h)
        };
        return function (dW6Q) {
            k4o.ex6r(dW6Q, chQ6K, this);
            return this
        }
    }();
    oz9q.gF7y = function () {
        var blK4O = function (d4h, t4x) {
            this.gF7y(t4x)
        };
        return function (t4x) {
            var t4x = (t4x || "").toLowerCase();
            if (!!t4x) {
                delete this.lu8m[t4x]
            } else {
                k4o.ex6r(this.lu8m, blK4O, this)
            }
            return this
        }
    }();
    oz9q.blJ4N = function (t4x, d4h) {
        if (!t4x || !k4o.gr6l(d4h)) return this;
        t4x = t4x.toLowerCase();
        var dW6Q = this.lu8m[t4x];
        if (!dW6Q) {
            this.lu8m[t4x] = d4h;
            return this
        }
        if (!k4o.eE6y(dW6Q)) {
            this.lu8m[t4x] = [dW6Q]
        }
        this.lu8m[t4x].push(d4h);
        return this
    };
    oz9q.z4D = function (t4x) {
        var d4h = this.lu8m[(t4x || "").toLowerCase()];
        if (!d4h) return this;
        var bh4l = fo6i.slice.call(arguments, 1);
        if (!k4o.eE6y(d4h)) return d4h.apply(this, bh4l);
        k4o.bb4f(d4h, function (dn5s) {
            try {
                dn5s.apply(this, bh4l)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N4R.ZH1x = function () {
        var Q4U = {};
        return function (D4H, fx6r, e4i) {
            var eS6M = fx6r.chT6N;
            if (!eS6M) {
                eS6M = k4o.QP8H(10);
                fx6r.chT6N = eS6M
            }
            var K4O = D4H + "-" + eS6M,
                cv5A = Q4U[K4O];
            if (!!e4i && !cv5A) {
                cv5A = fx6r.A4E(e4i);
                cv5A.S4W = cv5A.S4W.es6m(function (d4h) {
                    delete Q4U[K4O];
                    delete cv5A.S4W
                });
                Q4U[K4O] = cv5A
            }
            return cv5A
        }
    }()
})();
(function () {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gV7O = function () {
        var cR5W = new Date,
            ciB6v = +cR5W,
            blB4F = 864e5;
        var cjM7F = function (T4X) {
            var rH0x = document.cookie,
                sK0x = "\\b" + T4X + "=",
                ZY1x = rH0x.search(sK0x);
            if (ZY1x < 0) return "";
            ZY1x += sK0x.length - 2;
            var AB2x = rH0x.indexOf(";", ZY1x);
            if (AB2x < 0) AB2x = rH0x.length;
            return rH0x.substring(ZY1x, AB2x) || ""
        };
        return function (T4X, j4n) {
            if (j4n === undefined) return cjM7F(T4X);
            if (u.fA6u(j4n)) {
                if (!!j4n) {
                    document.cookie = T4X + "=" + j4n + ";";
                    return j4n
                }
                j4n = {
                    expires: -100
                }
            }
            j4n = j4n || o;
            var rH0x = T4X + "=" + (j4n.value || "") + ";";
            delete j4n.value;
            if (j4n.expires !== undefined) {
                cR5W.setTime(ciB6v + j4n.expires * blB4F);
                j4n.expires = cR5W.toGMTString()
            }
            rH0x += u.sZ0x(j4n, ";");
            document.cookie = rH0x
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        ia7T = c4g("nej.c"),
        ec6W = c4g("nej.g"),
        a3x = c4g("nej.e"),
        x4B = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        N4R = c4g("nej.ut.j"),
        k4o = c4g("nej.u"),
        b3x;
    if (!!N4R.IM5R) return;
    N4R.IM5R = NEJ.C();
    b3x = N4R.IM5R.O4S(H4L.cC5H);
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.pl9c = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pl9c, e4i);
        var BQ3x = ia7T.B4F("csrf");
        if ((/^\/[^\/]/.test(this.pl9c.url) || this.pl9c.url.indexOf(location.protocol + "//" + location.host) == 0) && !!BQ3x.cookie && !!BQ3x.param) {
            var bx4B = encodeURIComponent(BQ3x.param) + "=" + encodeURIComponent(x4B.gV7O(BQ3x.cookie) || ""),
                Mi6c = this.pl9c.url.indexOf("?") < 0 ? "?" : "&";
            this.pl9c.url += Mi6c + bx4B
        }
        this.bap1x = e4i.headers || {};
        var bl4p = this.bap1x[ec6W.wD1x];
        if (bl4p == null) this.bap1x[ec6W.wD1x] = ec6W.bSm3x
    };
    b3x.bz4D = function () {
        this.bF4J();
        delete this.AA2x;
        delete this.pl9c;
        delete this.bap1x
    };
    b3x.cke7X = function (bl4p) {
        var bu4y = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.pl9c.noescape) {
            return k4o.CV3x(bu4y, bl4p)
        } else {
            return bl4p
        }
    };
    b3x.tH0x = function (d4h) {
        var ej6d = d4h.status;
        if (ej6d == -1) {
            this.z4D("onerror", {
                code: ec6W.bxZ7S,
                message: "请求[" + this.pl9c.url + "]超时！"
            });
            return
        }
        if (("" + ej6d).indexOf("2") != 0) {
            this.z4D("onerror", {
                data: ej6d,
                code: ec6W.btJ6D,
                message: "服务器返回异常状态[" + ej6d + "]!",
                extData: d4h.result
            });
            return
        }
        this.z4D("onload", a3x.bZh4l(this.cke7X(d4h.result), this.pl9c.type))
    };
    b3x.co5t = bn4r;
    b3x.bli4m = function (j4n) {
        var V4Z = this.pl9c.url;
        if (!V4Z) {
            this.z4D("onerror", {
                code: ec6W.btR6L,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pl9c.data = j4n == null ? null : j4n;
            var d4h = {
                request: this.pl9c,
                headers: this.bap1x
            };
            try {
                this.z4D("onbeforerequest", d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.co5t(d4h)
        } catch (e) {
            this.z4D("onerror", {
                code: ec6W.btJ6D,
                message: "请求[" + V4Z + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b3x.jD7w = bn4r
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        bc4g = c4g("nej.h"),
        ec6W = c4g("nej.g"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut.j"),
        Q4U = {},
        TK9B;
    if (!!N4R.baw1x) return;
    N4R.baw1x = NEJ.C();
    TK9B = N4R.baw1x.O4S(N4R.IM5R);
    TK9B.bz4D = function () {
        this.bF4J();
        window.clearTimeout(this.dY6S);
        delete this.dY6S;
        try {
            this.qX0x.onreadystatechange = bn4r;
            this.qX0x.abort()
        } catch (e) {}
        delete this.qX0x
    };
    TK9B.co5t = function () {
        var ckf7Y = function (C4G, K4O) {
            this.qX0x.setRequestHeader(K4O, C4G)
        };
        return function (e4i) {
            var fS6M = e4i.request,
                op9g = e4i.headers;
            this.qX0x = bc4g.ble4i();
            if (op9g[ec6W.wD1x] === ec6W.Ea3x) {
                delete op9g[ec6W.wD1x];
                this.qX0x.upload.onprogress = this.gc6W.g4k(this, 1);
                if (fS6M.data.tagName === "FORM") fS6M.data = new FormData(fS6M.data)
            }
            this.qX0x.onreadystatechange = this.gc6W.g4k(this, 2);
            if (fS6M.timeout != 0) {
                this.dY6S = window.setTimeout(this.gc6W.g4k(this, 3), fS6M.timeout)
            }
            this.qX0x.open(fS6M.method, fS6M.url, !fS6M.sync);
            k4o.ex6r(op9g, ckf7Y, this);
            if (!!this.pl9c.cookie && "withCredentials" in this.qX0x) this.qX0x.withCredentials = !0;
            this.qX0x.send(fS6M.data)
        }
    }();
    TK9B.gc6W = function (t4x) {
        switch (t4x) {
            case 1:
                this.z4D("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qX0x.readyState == 4) this.tH0x({
                    status: this.qX0x.status,
                    result: this.qX0x.responseText || ""
                });
                break;
            case 3:
                this.tH0x({
                    status: -1
                });
                break
        }
    };
    TK9B.jD7w = function () {
        this.tH0x({
            status: 0
        });
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Nk6e = {},
        baL1x = [],
        bFq9h = /\s+/g,
        gn6h = +(new Date),
        IR5W, bR5W, ke8W;
    var Ee3x = function () {
        var gm6g = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            jE7x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            EU4Y = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bkR4V = /^new\s+/,
            ckg7Z = /['"]/;
        var ckh7a = function (C4G) {
            if (gm6g.test(C4G)) return;
            C4G = C4G.split(".")[0].trim();
            if (!C4G || ckg7Z.test(C4G)) return;
            C4G = C4G.replace(bkR4V, "");
            try {
                if (EU4Y.test(C4G)) return;
                ke8W[C4G] = 1
            } catch (e) {}
        };
        return function (bl4p) {
            bl4p = bl4p || "";
            if (!bl4p || gm6g.test(bl4p)) return;
            var bs4w = bl4p.split(jE7x);
            for (var i = 0, l = bs4w.length; i < l; i++) ckh7a(bs4w[i])
        }
    }();
    var cki7b = function (dB5G) {
        if (dB5G[2] != "in") throw "bad for loop statement: " + dB5G.join(" ");
        baL1x.push(dB5G[1]);
        Ee3x(dB5G[3]);
        return "var __HASH__" + dB5G[1] + " = " + dB5G[3] + "," + dB5G[1] + "," + dB5G[1] + "_count=0;" + "if (!!__HASH__" + dB5G[1] + ")" + "for(var " + dB5G[1] + "_key in __HASH__" + dB5G[1] + "){" + dB5G[1] + " = __HASH__" + dB5G[1] + "[" + dB5G[1] + "_key];" + "if (typeof(" + dB5G[1] + ')=="function") continue;' + dB5G[1] + "_count++;"
    };
    var ckj7c = function () {
        var dB5G = baL1x[baL1x.length - 1];
        return "}; if(!__HASH__" + dB5G + "||!" + dB5G + "_count){"
    };
    var ckk7d = function () {
        baL1x.pop();
        return "};"
    };
    var ckm7f = function (dB5G) {
        if (dB5G[2] != "as") throw "bad for list loop statement: " + dB5G.join(" ");
        var NE7x = dB5G[1].split("..");
        if (NE7x.length > 1) {
            Ee3x(NE7x[0]);
            Ee3x(NE7x[1]);
            return "for(var " + dB5G[3] + "," + dB5G[3] + "_index=0," + dB5G[3] + "_beg=" + NE7x[0] + "," + dB5G[3] + "_end=" + NE7x[1] + "," + dB5G[3] + "_length=parseInt(" + dB5G[3] + "_end-" + dB5G[3] + "_beg+1);" + dB5G[3] + "_index<" + dB5G[3] + "_length;" + dB5G[3] + "_index++){" + dB5G[3] + " = " + dB5G[3] + "_beg+" + dB5G[3] + "_index;"
        } else {
            Ee3x(dB5G[1]);
            return "for(var __LIST__" + dB5G[3] + " = " + dB5G[1] + "," + dB5G[3] + "," + dB5G[3] + "_index=0," + dB5G[3] + "_length=__LIST__" + dB5G[3] + ".length;" + dB5G[3] + "_index<" + dB5G[3] + "_length;" + dB5G[3] + "_index++){" + dB5G[3] + " = __LIST__" + dB5G[3] + "[" + dB5G[3] + "_index];"
        }
    };
    var ckn7g = function (dB5G) {
        if (!dB5G || !dB5G.length) return;
        dB5G.shift();
        var T4X = dB5G[0].split("(")[0];
        return "var " + T4X + " = function" + dB5G.join("").replace(T4X, "") + "{var __OUT=[];"
    };
    var ckp7i = function (dB5G) {
        if (!dB5G[1]) throw "bad include statement: " + dB5G.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bkr4v = function (lt8l, dB5G) {
        Ee3x(dB5G.slice(1).join(" "));
        return lt8l
    };
    var ckq7j = function (dB5G) {
        return bkr4v("if(", dB5G)
    };
    var ckr7k = function (dB5G) {
        return bkr4v("}else if(", dB5G)
    };
    var ckG7z = function (dB5G) {
        return bkr4v("var ", dB5G)
    };
    bR5W = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: ckq7j,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: ckr7k,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cki7b,
                pmin: 3
            },
            forelse: {
                pfix: ckj7c
            },
            "/for": {
                pfix: ckk7d
            },
            list: {
                pfix: ckm7f,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: ckG7z,
                sfix: ";"
            },
            macro: {
                pfix: ckn7g
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function () {
                    IR5W = !0
                }
            },
            "/trim": {
                pfix: function () {
                    IR5W = null
                }
            },
            inline: {
                pfix: ckp7i,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function (lt8l) {
                return (lt8l || "") + "" + gn6h
            },
            "default": function (C4G, lq8i) {
                return C4G || lq8i
            }
        }
    };
    var ckH7A = function () {
        var ckK7D = /\\([\{\}])/g;
        return function (bl4p, ja7T) {
            bl4p = bl4p.replace(ckK7D, "$1");
            var dB5G = bl4p.slice(1, -1).split(bFq9h),
                bd4h = bR5W.def[dB5G[0]];
            if (!bd4h) {
                bcL2x(bl4p, ja7T);
                return
            }
            if (!!bd4h.pmin && bd4h.pmin >= dB5G.length) throw "Statement needs more parameters:" + bl4p;
            ja7T.push(!!bd4h.pfix && typeof bd4h.pfix != "string" ? bd4h.pfix(dB5G) : bd4h.pfix || "");
            if (!!bd4h.sfix) {
                if (dB5G.length <= 1) {
                    if (!!bd4h.pdft) ja7T.push(bd4h.pdft)
                } else {
                    for (var i = 1, l = dB5G.length; i < l; i++) {
                        if (i > 1) ja7T.push(" ");
                        ja7T.push(dB5G[i])
                    }
                }
                ja7T.push(bd4h.sfix)
            }
        }
    }();
    var bMr0x = function (Je5j, ja7T) {
        if (!Je5j || !Je5j.length) return;
        if (Je5j.length == 1) {
            var bka3x = Je5j.pop();
            Ee3x(bka3x);
            ja7T.push(bka3x == "" ? '""' : bka3x);
            return
        }
        var bjZ3x = Je5j.pop().split(":");
        ja7T.push("__MDF['" + bjZ3x.shift() + "'](");
        bMr0x(Je5j, ja7T);
        if (bjZ3x.length > 0) {
            var bh4l = bjZ3x.join(":");
            Ee3x(bh4l);
            ja7T.push("," + bh4l)
        }
        ja7T.push(")")
    };
    var bcL2x = function (bl4p, ja7T) {
        if (!bl4p) return;
        var vS1x = bl4p.split("\n");
        if (!vS1x || !vS1x.length) return;
        for (var i = 0, l = vS1x.length, hj7c; i < l; i++) {
            hj7c = vS1x[i];
            if (!!IR5W) {
                hj7c = hj7c.trim();
                if (!hj7c) continue
            }
            ckL7E(hj7c, ja7T);
            if (!!IR5W && i < l - 1) ja7T.push("__OUT.push('\\n');")
        }
    };
    var ckL7E = function () {
        var ckM7F = /\|\|/g,
            ckP7I = /#@@#/g;
        return function (bl4p, ja7T) {
            var Oz7s = "}",
                OA7t = -1,
                bm4q = bl4p.length,
                wn1x, gp6j, Jo5t, UH9y, OP7I;
            while (OA7t + Oz7s.length < bm4q) {
                wn1x = "${";
                gp6j = "}";
                Jo5t = bl4p.indexOf(wn1x, OA7t + Oz7s.length);
                if (Jo5t < 0) break;
                if (bl4p.charAt(Jo5t + 2) == "%") {
                    wn1x = "${%";
                    gp6j = "%}"
                }
                UH9y = bl4p.indexOf(gp6j, Jo5t + wn1x.length);
                if (UH9y < 0) break;
                UT9K(bl4p.substring(OA7t + Oz7s.length, Jo5t), ja7T);
                OP7I = bl4p.substring(Jo5t + wn1x.length, UH9y).replace(ckM7F, "#@@#").split("|");
                for (var i = 0, l = OP7I.length; i < l; OP7I[i] = OP7I[i].replace(ckP7I, "||"), i++);
                ja7T.push("__OUT.push(");
                bMr0x(OP7I, ja7T);
                ja7T.push(");");
                Oz7s = gp6j;
                OA7t = UH9y
            }
            UT9K(bl4p.substring(OA7t + Oz7s.length), ja7T)
        }
    }();
    var UT9K = function () {
        var bu4y = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var clo7h = function (bl4p) {
            return (bl4p || "").replace(bu4y.r, function ($1) {
                return bu4y[$1] || $1
            })
        };
        return function (bl4p, ja7T) {
            if (!bl4p) return;
            ja7T.push("__OUT.push('" + clo7h(bl4p) + "');")
        }
    }();
    var clu7n = function () {
        var clB7u = /\t/g,
            clP7I = /\n/g,
            cmP7I = /\r\n?/g;
        var bRq2x = function (bl4p, wn1x) {
            var r4v = bl4p.indexOf("}", wn1x + 1);
            while (bl4p.charAt(r4v - 1) == "\\") {
                r4v = bl4p.indexOf("}", r4v + 1)
            }
            return r4v
        };
        var cmY7R = function () {
            var bs4w = [],
                Dk3x = arguments[0];
            for (var x in Dk3x) {
                x = (x || "").trim();
                if (!x) continue;
                bs4w.push(x + "=$v('" + x + "')")
            }
            return bs4w.length > 0 ? "var " + bs4w.join(",") + ";" : ""
        };
        return function (bl4p) {
            ke8W = {};
            bl4p = bl4p.replace(cmP7I, "\n").replace(clB7u, "    ");
            var rB0x = ["if(!__CTX) return '';", ""];
            rB0x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            rB0x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            rB0x.push("__OUT=[];");
            var Dn3x = -1,
                bm4q = bl4p.length;
            var mU8M, Jv5A, Pb7U, Pe7X, Am2x, Pn7g, bja3x, Pq7j;
            while (Dn3x + 1 < bm4q) {
                mU8M = Dn3x;
                mU8M = bl4p.indexOf("{", mU8M + 1);
                while (mU8M >= 0) {
                    Jv5A = bRq2x(bl4p, mU8M);
                    Pb7U = bl4p.substring(mU8M, Jv5A);
                    Pe7X = Pb7U.match(bR5W.blk);
                    if (!!Pe7X) {
                        Am2x = Pe7X[1].length + 1;
                        Pn7g = bl4p.indexOf("}", mU8M + Am2x);
                        if (Pn7g >= 0) {
                            bja3x = Pn7g - mU8M - Am2x <= 0 ? "{/" + Pe7X[1] + "}" : Pb7U.substr(Am2x + 1);
                            Am2x = bl4p.indexOf(bja3x, Pn7g + 1);
                            if (Am2x >= 0) {
                                bcL2x(bl4p.substring(Dn3x + 1, mU8M), rB0x);
                                Pq7j = bl4p.substring(Pn7g + 1, Am2x);
                                switch (Pe7X[1]) {
                                    case "cdata":
                                        UT9K(Pq7j, rB0x);
                                        break;
                                    case "minify":
                                        UT9K(Pq7j.replace(clP7I, " ").replace(bFq9h, " "), rB0x);
                                        break;
                                    case "eval":
                                        if (!!Pq7j) rB0x.push("__OUT.push((function(){" + Pq7j + "})());");
                                        break
                                }
                                mU8M = Dn3x = Am2x + bja3x.length - 1
                            }
                        }
                    } else if (bl4p.charAt(mU8M - 1) != "$" && bl4p.charAt(mU8M - 1) != "\\" && Pb7U.substr(Pb7U.charAt(1) == "/" ? 2 : 1).search(bR5W.tag) == 0) {
                        break
                    }
                    mU8M = bl4p.indexOf("{", mU8M + 1)
                }
                if (mU8M < 0) break;
                Jv5A = bRq2x(bl4p, mU8M);
                if (Jv5A < 0) break;
                bcL2x(bl4p.substring(Dn3x + 1, mU8M), rB0x);
                ckH7A(bl4p.substring(mU8M, Jv5A + 1), rB0x);
                Dn3x = Jv5A
            }
            bcL2x(bl4p.substring(Dn3x + 1), rB0x);
            rB0x.push(';return __OUT.join("");');
            rB0x[1] = cmY7R(ke8W);
            ke8W = null;
            return new Function("__CTX", "__MDF", rB0x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gn6h
    };
    TrimPath.merge = function () {
        var Pt7m = {};
        TrimPath.dump = function () {
            return {
                func: Pt7m,
                text: Nk6e
            }
        };
        return function (eS6M, j4n, jt7m) {
            try {
                j4n = j4n || {};
                if (!Pt7m[eS6M] && !Nk6e[eS6M]) return "";
                if (!Pt7m[eS6M]) {
                    Pt7m[eS6M] = clu7n(Nk6e[eS6M]);
                    delete Nk6e[eS6M]
                }
                if (!!jt7m) {
                    for (var x in bR5W.ext)
                        if (!jt7m[x]) jt7m[x] = bR5W.ext[x]
                }
                return Pt7m[eS6M](j4n, jt7m || bR5W.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cmZ7S = +(new Date);
        return function (bl4p, eS6M) {
            if (!bl4p) return "";
            eS6M = eS6M || "ck_" + cmZ7S++;
            Nk6e[eS6M] = bl4p;
            return eS6M
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        eP6J = {},
        bxA7t = {};
    a3x.JC5H = TrimPath.seed;
    a3x.bW5b = function () {
        var bxR7K = function (D4H) {
            return !a3x.ik7d ? "" : a3x.ik7d(D4H)
        };
        return function (eS6M, j4n, jt7m) {
            j4n = NEJ.X(NEJ.X({}, bxA7t), j4n);
            j4n.inline = bxR7K;
            jt7m = NEJ.X(NEJ.X({}, eP6J), jt7m);
            jt7m.rand = k4o.ny9p;
            jt7m.format = k4o.hL7E;
            jt7m.escape = k4o.dQ5V;
            jt7m.inline = bxR7K;
            return TrimPath.merge(eS6M, j4n, jt7m)
        }
    }();
    a3x.er6l = function (bl4p, cnA8s) {
        if (!bl4p) return "";
        var eS6M, G4K = a3x.B4F(bl4p);
        if (!!G4K) {
            eS6M = G4K.id;
            bl4p = G4K.value || G4K.innerText;
            if (!cnA8s) a3x.cB5G(G4K)
        }
        return TrimPath.parse(bl4p, eS6M)
    };
    a3x.dI5N = function (bG4K, eS6M, j4n, jt7m) {
        bG4K = a3x.B4F(bG4K);
        if (!!bG4K) bG4K.innerHTML = a3x.bW5b(eS6M, j4n, jt7m);
        return this
    };
    a3x.cAa0x = function (bu4y) {
        NEJ.X(eP6J, bu4y)
    };
    a3x.cnJ8B = function (bu4y) {
        NEJ.X(bxA7t, bu4y)
    };
    c4g("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var dm5r = NEJ.P("nej.p"),
        N4R = window,
        kx8p = dm5r.Gz4D,
        bzM7F = kx8p.ipad || kx8p.iphone;
    if (!bzM7F && !!N4R.requestAnimationFrame && !!N4R.cancelRequestAnimationFrame) return;
    var lt8l = dm5r.di5n.prefix.pro;
    if (!bzM7F && !!N4R[lt8l + "RequestAnimationFrame"] && !!N4R[lt8l + "CancelRequestAnimationFrame"]) {
        N4R.requestAnimationFrame = N4R[lt8l + "RequestAnimationFrame"];
        N4R.cancelRequestAnimationFrame = N4R[lt8l + "CancelRequestAnimationFrame"];
        return
    }
    var Wn0x = kx8p.desktop ? 80 : kx8p.ios ? 50 : 30;
    N4R.requestAnimationFrame = function (dE5J) {
        return window.setTimeout(function () {
            try {
                dE5J(+(new Date))
            } catch (ex) {}
        }, 1e3 / Wn0x)
    };
    N4R.cancelRequestAnimationFrame = function (D4H) {
        window.clearTimeout(D4H);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        k4o = c4g("nej.u"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        bc4g = c4g("nej.h"),
        cP5U = c4g("nej.x"),
        Wo0x = c4g("nej.ut.j.cb"),
        gv7o;
    if (!!a3x.qz0x) return;
    a3x.qz0x = cP5U.qz0x = function () {
        var Q4U = {},
            gm6g = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d4h) {
            var D4H = decodeURIComponent(d4h.target),
                t4x = d4h.type.toLowerCase();
            var dn5s = Q4U[D4H + "-on" + t4x];
            if (!!dn5s) {
                try {
                    dn5s(d4h)
                } catch (e) {}
                return
            }
            var cE5J = Q4U[D4H + "-tgt"];
            if (!!cE5J && gm6g.test(t4x)) {
                bBo8g(cE5J, d4h)
            }
        };
        var biF3x = function (e4i) {
            var bG4K = a3x.B4F(e4i.parent) || document.body,
                dK5P = a3x.bW5b(gv7o, e4i);
            bG4K.insertAdjacentHTML(!e4i.hidden ? "beforeEnd" : "afterBegin", dK5P)
        };
        var bBo8g = function (D4H, d4h) {
            var t4x = d4h.type.toLowerCase();
            requestAnimationFrame(function () {
                h4l.z4D(D4H, t4x)
            })
        };
        var coU8M = function (ho7h) {
            return !!ho7h && !!ho7h.inited && !!ho7h.inited()
        };
        var PT8L = function (D4H) {
            var bs4w = [document.embeds[D4H], a3x.B4F(D4H), document[D4H], window[D4H]],
                r4v = k4o.ex6r(bs4w, coU8M),
                ho7h = bs4w[r4v],
                biD3x = D4H + "-count";
            Q4U[biD3x]++;
            if (!!ho7h || Q4U[biD3x] > 100) {
                Q4U[D4H](ho7h);
                delete Q4U[D4H];
                delete Q4U[biD3x];
                return
            }
            window.setTimeout(PT8L.g4k(null, D4H), 300)
        };
        var cpk8c = function (e4i) {
            var D4H = e4i.id,
                gj6d = e4i.params;
            if (!gj6d) {
                gj6d = {};
                e4i.params = gj6d
            }
            var ke8W = gj6d.flashvars || "";
            ke8W += (!ke8W ? "" : "&") + ("id=" + D4H);
            if (!e4i.hidden && (!!e4i.target || bc4g.UL9C(gj6d.wmode))) {
                var hv7o = a3x.ld8V(e4i.target) || a3x.ld8V(e4i.parent),
                    Ww0x = k4o.Yv0x();
                Wo0x["cb" + Ww0x] = bBo8g.g4k(null, hv7o);
                ke8W += "&onevent=nej.ut.j.cb.cb" + Ww0x;
                Q4U[D4H + "-tgt"] = hv7o
            }
            gj6d.flashvars = ke8W;
            k4o.ex6r(e4i, function (C4G, K4O) {
                if (k4o.gr6l(C4G) && K4O != "onready") {
                    Q4U[D4H + "-" + K4O] = C4G
                }
            })
        };
        return function (e4i) {
            e4i = NEJ.X({}, e4i);
            if (!e4i.src) return;
            var D4H = "flash_" + k4o.Yv0x();
            e4i.id = D4H;
            cpk8c(e4i);
            biF3x(e4i);
            if (!e4i.onready) return;
            Q4U[D4H] = e4i.onready;
            Q4U[D4H + "-count"] = 0;
            PT8L(D4H)
        }
    }();
    gv7o = a3x.er6l('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cP5U.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        ia7T = c4g("nej.c"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut.j"),
        Wo0x = c4g("nej.ut.j.cb"),
        Q4U = {},
        gn6h = +(new Date),
        biz3x;
    if (!!N4R.biv3x) return;
    Wo0x["ld" + gn6h] = function (K4O, cL5Q) {
        var jr7k = Q4U[K4O];
        if (!jr7k) return;
        delete Q4U[K4O];
        jr7k.tH0x({
            status: 200,
            result: cL5Q
        })
    };
    Wo0x["er" + gn6h] = function (K4O, ej6d) {
        var jr7k = Q4U[K4O];
        if (!jr7k) return;
        delete Q4U[K4O];
        jr7k.tH0x({
            status: ej6d || 0
        })
    };
    N4R.biv3x = NEJ.C();
    biz3x = N4R.biv3x.O4S(N4R.IM5R);
    biz3x.co5t = function (e4i) {
        var ho7h = Q4U.flash;
        if (k4o.eE6y(ho7h)) {
            ho7h.push(this.co5t.g4k(this, e4i));
            return
        }
        if (!ho7h) {
            Q4U.flash = [this.co5t.g4k(this, e4i)];
            a3x.qz0x({
                hidden: !0,
                src: ia7T.B4F("ajax.swf"),
                onready: function (ho7h) {
                    if (!ho7h) return;
                    var i4m = Q4U.flash;
                    Q4U.flash = ho7h;
                    k4o.mD8v(i4m, function (dn5s) {
                        try {
                            dn5s()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.AA2x = "swf-" + k4o.ny9p();
        Q4U[this.AA2x] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e4i.request);
        j4n.key = this.AA2x;
        j4n.headers = e4i.headers;
        j4n.onerror = "nej.ut.j.cb.er" + gn6h;
        j4n.onloaded = "nej.ut.j.cb.ld" + gn6h;
        var bDR8J = ia7T.bRY2x(j4n.url);
        if (!!bDR8J) j4n.policyURL = bDR8J;
        ho7h.request(j4n)
    };
    biz3x.jD7w = function () {
        delete Q4U[this.AA2x];
        this.tH0x({
            status: 0
        });
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bc4g = c4g("nej.h");
    bc4g.bDW8O = function () {
        var cY5d = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (kq8i) {
            kq8i = kq8i || "";
            if (cY5d.test(kq8i)) return RegExp.$1;
            return "*"
        }
    }();
    bc4g.bir3x = function (j4n) {
        return j4n
    };
    bc4g.biq3x = function (bFc9T, e4i) {
        if (!bFc9T.postMessage) return;
        e4i = e4i || Z4d;
        bFc9T.postMessage(bc4g.bir3x(e4i.data), bc4g.bDW8O(e4i.origin))
    }
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        b3x;
    if (!!N4R.fG6A) return;
    N4R.fG6A = NEJ.C();
    b3x = N4R.fG6A.O4S(N4R.cC5H);
    b3x.cs5x = function () {
        this.R4V = {};
        this.cw5B()
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.Qb8T = a3x.B4F(e4i.element) || window;
        this.bFo9f(e4i.event);
        this.cpm8e();
        this.z4D("oninit")
    };
    b3x.bz4D = function () {
        var Gq4u = function (C4G, K4O, bu4y) {
            if (!k4o.eE6y(C4G)) {
                k4o.Yd0x(this.Qb8T, K4O)
            }
            delete bu4y[K4O]
        };
        return function () {
            this.bF4J();
            k4o.ex6r(this.R4V, Gq4u, this);
            delete this.Qb8T
        }
    }();
    b3x.WK0x = function (G4K, t4x) {
        G4K = a3x.B4F(G4K);
        return G4K == this.Qb8T && (!t4x || !!this.R4V["on" + t4x])
    };
    b3x.bFo9f = function (d4h) {
        if (k4o.fA6u(d4h)) {
            var T4X = "on" + d4h;
            if (!this.R4V[T4X]) {
                this.R4V[T4X] = this.cps8k.g4k(this, d4h)
            }
            this.bGg9X(d4h);
            return
        }
        if (k4o.eE6y(d4h)) {
            k4o.bb4f(d4h, this.bFo9f, this)
        }
    };
    b3x.bGg9X = function (t4x) {
        var d4h = "on" + t4x,
            dn5s = this.Qb8T[d4h],
            bGx9o = this.R4V[d4h];
        if (dn5s != bGx9o) {
            this.WQ0x(t4x);
            if (!!dn5s && dn5s != bn4r) this.bHc9T(t4x, dn5s);
            this.Qb8T[d4h] = bGx9o
        }
    };
    b3x.bHc9T = function (t4x, dn5s, cpv8n) {
        var i4m = this.R4V[t4x];
        if (!i4m) {
            i4m = [];
            this.R4V[t4x] = i4m
        }
        if (k4o.gr6l(dn5s)) {
            !cpv8n ? i4m.push(dn5s) : i4m.unshift(dn5s)
        }
    };
    b3x.WQ0x = function (t4x, dn5s) {
        var i4m = this.R4V[t4x];
        if (!i4m || !i4m.length) return;
        if (!dn5s) {
            delete this.R4V[t4x];
            return
        }
        k4o.mD8v(i4m, function (C4G, r4v, JR5W) {
            if (dn5s === C4G) {
                JR5W.splice(r4v, 1);
                return !0
            }
        })
    };
    b3x.cps8k = function (t4x, d4h) {
        d4h = d4h || {
            noargs: !0
        };
        d4h.type = t4x;
        this.z4D("ondispatch", d4h);
        if (!!d4h.stopped) return;
        k4o.bb4f(this.R4V[t4x], function (dn5s) {
            try {
                dn5s(d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b3x.cpm8e = function () {
        var bhX3x = function (d4h) {
            var bh4l = d4h.args,
                t4x = bh4l[1].toLowerCase();
            if (this.WK0x(bh4l[0], t4x)) {
                d4h.stopped = !0;
                this.bGg9X(t4x);
                this.bHc9T(t4x, bh4l[2], bh4l[3]);
                this.z4D("oneventadd", {
                    type: t4x,
                    listener: bh4l[2]
                })
            }
        };
        var cpK8C = function (d4h) {
            var bh4l = d4h.args,
                t4x = bh4l[1].toLowerCase();
            if (this.WK0x(bh4l[0], t4x)) {
                d4h.stopped = !0;
                this.WQ0x(t4x, bh4l[2])
            }
        };
        var blK4O = function (d4h) {
            var bh4l = d4h.args,
                t4x = (bh4l[1] || "").toLowerCase();
            if (this.WK0x(bh4l[0])) {
                if (!!t4x) {
                    this.WQ0x(t4x);
                    return
                }
                k4o.ex6r(this.R4V, function (C4G, K4O) {
                    if (k4o.eE6y(C4G)) {
                        this.WQ0x(K4O)
                    }
                }, this)
            }
        };
        var cpZ8R = function (d4h) {
            var bh4l = d4h.args,
                t4x = bh4l[1].toLowerCase();
            if (this.WK0x(bh4l[0], t4x)) {
                d4h.stopped = !0;
                bh4l[0]["on" + t4x].apply(bh4l[0], bh4l.slice(2))
            }
        };
        return function () {
            if (!!this.cqa8S) return;
            this.cqa8S = true;
            h4l.s4w = h4l.s4w.es6m(bhX3x.g4k(this));
            h4l.mH8z = h4l.mH8z.es6m(cpK8C.g4k(this));
            h4l.gF7y = h4l.gF7y.es6m(blK4O.g4k(this));
            h4l.z4D = h4l.z4D.es6m(cpZ8R.g4k(this))
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        bc4g = c4g("nej.h"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut");
    if (N4R.mC8u.trident) return;
    if (!!window.postMessage) {
        bc4g.bir3x = bc4g.bir3x.es6m(function (d4h) {
            d4h.stopped = !0;
            d4h.value = JSON.stringify(d4h.args[0])
        });
        return
    }
    var K4O = "MSG|",
        jO8G = [];
    var cqp8h = function () {
        var T4X = unescape(window.name || "").trim();
        if (!T4X || T4X.indexOf(K4O) != 0) return;
        window.name = "";
        var o4s = k4o.bFl9c(T4X.replace(K4O, ""), "|"),
            kq8i = (o4s.origin || "").toLowerCase();
        if (!!kq8i && kq8i != "*" && location.href.toLowerCase().indexOf(kq8i) != 0) return;
        h4l.z4D(window, "message", {
            data: JSON.parse(o4s.data || "null"),
            source: window.frames[o4s.self] || o4s.self,
            origin: bc4g.bDW8O(o4s.ref || document.referrer)
        })
    };
    var cqt8l = function () {
        var Xr0x;
        var cqv8n = function (bu4y, r4v, i4m) {
            if (k4o.dd5i(Xr0x, bu4y.w) < 0) {
                Xr0x.push(bu4y.w);
                i4m.splice(r4v, 1);
                bu4y.w.name = bu4y.d
            }
        };
        return function () {
            Xr0x = [];
            k4o.mD8v(jO8G, cqv8n);
            Xr0x = null
        }
    }();
    bc4g.biq3x = function () {
        var cqM8E = function (j4n) {
            var o4s = {};
            j4n = j4n || Z4d;
            o4s.origin = j4n.origin || "";
            o4s.ref = location.href;
            o4s.self = j4n.source;
            o4s.data = JSON.stringify(j4n.data);
            return K4O + k4o.sZ0x(o4s, "|", !0)
        };
        return bc4g.biq3x.es6m(function (d4h) {
            d4h.stopped = !0;
            var bh4l = d4h.args;
            jO8G.unshift({
                w: bh4l[0],
                d: escape(cqM8E(bh4l[1]))
            })
        })
    }();
    H4L.fG6A.A4E({
        element: window,
        event: "message"
    });
    window.setInterval(cqt8l, 100);
    window.setInterval(cqp8h, 20)
})();
(function () {
    var c4g = NEJ.P,
        bc4g = c4g("nej.h"),
        a3x = c4g("nej.e"),
        x4B = c4g("nej.j");
    x4B.cqN8F = function () {
        var iN7G = window.name || "_parent",
            cqY8Q = {
                gk6e: window.top,
                iN7G: window,
                bG4K: window.parent
            };
        return function (cE5J, e4i) {
            if (typeof cE5J == "string") {
                cE5J = cqY8Q[cE5J] || window.frames[cE5J];
                if (!cE5J) return this
            }
            var j4n = NEJ.X({
                origin: "*",
                source: iN7G
            }, e4i);
            bc4g.biq3x(cE5J, j4n);
            return this
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        ia7T = c4g("nej.c"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        N4R = c4g("nej.ut.j"),
        Q4U = {},
        Ym0x;
    if (!!N4R.bhk3x) return;
    N4R.bhk3x = NEJ.C();
    Ym0x = N4R.bhk3x.O4S(N4R.IM5R);
    Ym0x.cs5x = function () {
        var eO6I = "NEJ-AJAX-DATA:",
            FV4Z = !1;
        var bhj3x = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eO6I) != 0) return;
            j4n = JSON.parse(j4n.replace(eO6I, ""));
            var jr7k = Q4U[j4n.key];
            if (!jr7k) return;
            delete Q4U[j4n.key];
            j4n.result = decodeURIComponent(j4n.result || "");
            jr7k.tH0x(j4n)
        };
        var bha3x = function () {
            if (!FV4Z) {
                FV4Z = !0;
                h4l.s4w(window, "message", bhj3x)
            }
        };
        return function () {
            this.cw5B();
            bha3x()
        }
    }();
    Ym0x.co5t = function (e4i) {
        var fS6M = e4i.request,
            jr7k = ia7T.bRR2x(fS6M.url),
            vr1x = Q4U[jr7k];
        if (k4o.eE6y(vr1x)) {
            vr1x.push(this.co5t.g4k(this, e4i));
            return
        }
        if (!vr1x) {
            Q4U[jr7k] = [this.co5t.g4k(this, e4i)];
            a3x.Wm0x({
                src: jr7k,
                visible: !1,
                onload: function (d4h) {
                    var i4m = Q4U[jr7k];
                    Q4U[jr7k] = h4l.U4Y(d4h).contentWindow;
                    k4o.mD8v(i4m, function (dn5s) {
                        try {
                            dn5s()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.AA2x = "frm-" + k4o.ny9p();
        Q4U[this.AA2x] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, fS6M);
        j4n.key = this.AA2x;
        j4n.headers = e4i.headers;
        x4B.cqN8F(Q4U[jr7k], {
            data: j4n
        })
    };
    Ym0x.jD7w = function () {
        delete Q4U[this.AA2x];
        this.tH0x({
            status: 0
        });
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        ec6W = c4g("nej.g"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        N4R = c4g("nej.ut.j"),
        Q4U = {},
        Ko5t;
    if (!!N4R.bgT3x) return;
    N4R.bgT3x = NEJ.C();
    Ko5t = N4R.bgT3x.O4S(N4R.IM5R);
    Ko5t.cs5x = function () {
        var eO6I = "NEJ-UPLOAD-RESULT:",
            FV4Z = !1;
        var bhj3x = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eO6I) != 0) return;
            j4n = JSON.parse(j4n.replace(eO6I, ""));
            var jr7k = Q4U[j4n.key];
            if (!jr7k) return;
            delete Q4U[j4n.key];
            jr7k.tH0x(decodeURIComponent(j4n.result))
        };
        var bha3x = function () {
            if (!FV4Z) {
                FV4Z = !0;
                h4l.s4w(window, "message", bhj3x)
            }
        };
        return function () {
            this.cw5B();
            bha3x()
        }
    }();
    Ko5t.bz4D = function () {
        this.bF4J();
        a3x.cB5G(this.bgS3x);
        delete this.bgS3x;
        window.clearTimeout(this.dY6S);
        delete this.dY6S
    };
    Ko5t.tH0x = function (cL5Q) {
        var P4T;
        try {
            P4T = JSON.parse(cL5Q);
            this.z4D("onload", P4T)
        } catch (e) {
            this.z4D("onerror", {
                code: ec6W.bSd3x,
                message: cL5Q
            })
        }
    };
    Ko5t.co5t = function () {
        var cqZ8R = function () {
            var mq8i, cL5Q;
            try {
                var mq8i = this.bgS3x.contentWindow.document.body,
                    cL5Q = mq8i.innerText || mq8i.textContent
            } catch (e) {
                return
            }
            this.tH0x(cL5Q)
        };
        var bgK3x = function (V4Z, eU6O, rH0x) {
            x4B.bo4s(V4Z, {
                type: "json",
                method: "POST",
                cookie: rH0x,
                mode: parseInt(eU6O) || 0,
                onload: function (j4n) {
                    if (!this.dY6S) return;
                    this.z4D("onuploading", j4n);
                    this.dY6S = window.setTimeout(bgK3x.g4k(this, V4Z, eU6O, rH0x), 1e3)
                }.g4k(this),
                onerror: function (bV5a) {
                    if (!this.dY6S) return;
                    this.dY6S = window.setTimeout(bgK3x.g4k(this, V4Z, eU6O, rH0x), 1e3)
                }.g4k(this)
            })
        };
        return function (e4i) {
            var fS6M = e4i.request,
                op9g = e4i.headers,
                eV6P = fS6M.data,
                T4X = "fom-" + k4o.ny9p();
            Q4U[T4X] = this;
            eV6P.target = T4X;
            eV6P.method = "POST";
            eV6P.enctype = ec6W.Ea3x;
            eV6P.encoding = ec6W.Ea3x;
            var V4Z = eV6P.action || "",
                lh8Z = V4Z.indexOf("?") <= 0 ? "?" : "&";
            eV6P.action = V4Z + lh8Z + "_proxy_=form";
            this.bgS3x = a3x.Wm0x({
                name: T4X,
                onload: function (d4h) {
                    var vr1x = h4l.U4Y(d4h);
                    h4l.s4w(vr1x, "load", cqZ8R.g4k(this));
                    eV6P.submit();
                    var bNN1x = (eV6P.nej_query || Z4d).value;
                    if (!bNN1x) return;
                    var eU6O = (eV6P.nej_mode || Z4d).value,
                        rH0x = (eV6P.nej_cookie || Z4d).value == "true";
                    this.dY6S = window.setTimeout(bgK3x.g4k(this, bNN1x, eU6O, rH0x), 100)
                }.g4k(this)
            })
        }
    }();
    Ko5t.jD7w = function () {
        this.z4D("onerror", {
            code: ec6W.bSi3x,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bc4g = c4g("nej.h"),
        N4R = c4g("nej.ut.j");
    bc4g.ble4i = function () {
        return new XMLHttpRequest
    };
    bc4g.bgI3x = function (eU6O, YK0x, e4i) {
        var bu4y = !!YK0x ? {
            2: N4R.bgT3x
        } : {
            2: N4R.bhk3x,
            3: N4R.biv3x
        };
        return (bu4y[eU6O] || N4R.baw1x).A4E(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        bc4g = c4g("nej.h");
    if (N4R.mC8u.trident) return;
    bc4g.ble4i = function () {
        var OH7A = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var crP9G = function () {
            for (var i = 0, l = OH7A.length; i < l; i++) {
                try {
                    return new ActiveXObject(OH7A[i])
                } catch (e) {}
            }
            return null
        };
        return bc4g.ble4i.es6m(function (d4h) {
            if (!!window.XMLHttpRequest) return;
            d4h.stopped = !0;
            d4h.value = crP9G()
        })
    }();
    bc4g.bgI3x = function () {
        var Ed3x = {
            0: 2,
            1: 3
        };
        return bc4g.bgI3x.es6m(function (d4h) {
            var bh4l = d4h.args,
                eU6O = bh4l[0] || 0;
            bh4l[0] = !!bh4l[1] ? 2 : Ed3x[eU6O] || eU6O
        })
    }()
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        bc4g = c4g("nej.h"),
        ec6W = c4g("nej.g"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        N4R = c4g("nej.ut.j"),
        nH9y = {},
        Ht4x = bn4r;
    x4B.jD7w = function (eS6M) {
        var Q4U = nH9y[eS6M];
        if (!Q4U) return this;
        Q4U.req.jD7w();
        return this
    };
    x4B.YN0x = function (dS6M) {
        Ht4x = dS6M || bn4r;
        return this
    };
    x4B.bo4s = function () {
        var jf7Y = (location.protocol + "//" + location.host).toLowerCase();
        var crQ9H = function (V4Z) {
            var kq8i = k4o.cdT5Y(V4Z);
            return !!kq8i && kq8i != jf7Y
        };
        var csz9q = function (op9g) {
            return (op9g || Z4d)[ec6W.wD1x] == ec6W.Ea3x
        };
        var csC9t = function (e4i) {
            var YK0x = csz9q(e4i.headers);
            if (!crQ9H(e4i.url) && !YK0x) return N4R.baw1x.A4E(e4i);
            return bc4g.bgI3x(e4i.mode, YK0x, e4i)
        };
        var Gq4u = function (eS6M) {
            var Q4U = nH9y[eS6M];
            if (!Q4U) return;
            if (!!Q4U.req) Q4U.req.S4W();
            delete nH9y[eS6M]
        };
        var bQS2x = function (eS6M, t4x) {
            var Q4U = nH9y[eS6M];
            if (!Q4U) return;
            Gq4u(eS6M);
            try {
                var d4h = {
                    type: t4x,
                    result: arguments[2]
                };
                Ht4x(d4h);
                if (!d4h.stopped)(Q4U[t4x] || bn4r)(d4h.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yh2x = function (eS6M, j4n) {
            bQS2x(eS6M, "onload", j4n)
        };
        var zW2x = function (eS6M, bV5a) {
            bQS2x(eS6M, "onerror", bV5a)
        };
        return function (V4Z, e4i) {
            e4i = e4i || {};
            var eS6M = k4o.ny9p(),
                Q4U = {
                    onload: e4i.onload || bn4r,
                    onerror: e4i.onerror || bn4r
                };
            nH9y[eS6M] = Q4U;
            e4i.onload = yh2x.g4k(null, eS6M);
            e4i.onerror = zW2x.g4k(null, eS6M);
            if (!!e4i.query) {
                var lh8Z = V4Z.indexOf("?") < 0 ? "?" : "&",
                    bx4B = e4i.query;
                if (k4o.kU8M(bx4B)) bx4B = k4o.de5j(bx4B);
                if (!!bx4B) V4Z += lh8Z + bx4B
            }
            e4i.url = V4Z;
            Q4U.req = csC9t(e4i);
            Q4U.req.bli4m(e4i.data);
            return eS6M
        }
    }();
    x4B.gD7w = function (eV6P, e4i) {
        var gP7I = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(gP7I, e4i);
        gP7I.data = eV6P;
        gP7I.method = "POST";
        gP7I.timeout = 0;
        gP7I.headers[ec6W.wD1x] = ec6W.Ea3x;
        return x4B.bo4s(eV6P.action, gP7I)
    }
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        ec6W = c4g("nej.g"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        N4R = c4g("nej.ut.j"),
        lR8J, jU8M = 6e4;
    if (!!N4R.RB8t) return;
    N4R.RB8t = NEJ.C();
    lR8J = N4R.RB8t.O4S(H4L.cC5H);
    lR8J.cs5x = function () {
        this.cw5B();
        this.RD8v = {
            onerror: this.csN9E.g4k(this),
            onloaded: this.csV9M.g4k(this)
        };
        if (!this.constructor.R4V) this.constructor.R4V = {
            loaded: {}
        }
    };
    lR8J.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.Kx5C = e4i.version;
        this.bgj3x = e4i.timeout;
        this.RD8v.version = this.Kx5C;
        this.RD8v.timeout = this.bgj3x
    };
    lR8J.bvW6Q = function (K4O) {
        delete this.constructor.R4V[K4O]
    };
    lR8J.zU2x = function (K4O) {
        return this.constructor.R4V[K4O]
    };
    lR8J.bvY6S = function (K4O, j4n) {
        this.constructor.R4V[K4O] = j4n
    };
    lR8J.Zt1x = bn4r;
    lR8J.bwy6s = function (fS6M) {
        h4l.gF7y(fS6M)
    };
    lR8J.bgg3x = function (fS6M) {
        fS6M.src = this.la8S;
        document.head.appendChild(fS6M)
    };
    lR8J.zT2x = function () {
        var Q4U = this.zU2x(this.la8S);
        if (!Q4U) return;
        window.clearTimeout(Q4U.timer);
        this.bwy6s(Q4U.request);
        delete Q4U.bind;
        delete Q4U.timer;
        delete Q4U.request;
        this.bvW6Q(this.la8S);
        this.zU2x("loaded")[this.la8S] = !0
    };
    lR8J.Zv1x = function (T4X) {
        var Q4U = this.zU2x(this.la8S);
        if (!Q4U) return;
        var i4m = Q4U.bind;
        this.zT2x();
        if (!!i4m && i4m.length > 0) {
            var cv5A;
            while (i4m.length) {
                cv5A = i4m.shift();
                try {
                    cv5A.z4D(T4X, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cv5A.S4W()
            }
        }
    };
    lR8J.ew6q = function (bV5a) {
        this.Zv1x("onerror", bV5a)
    };
    lR8J.bxq7j = function () {
        this.Zv1x("onloaded")
    };
    lR8J.ctb9S = function (V4Z) {
        this.constructor.A4E(this.RD8v).Ky5D(V4Z)
    };
    lR8J.bxD7w = function (bV5a) {
        var Q4U = this.zU2x(this.vI1x);
        if (!Q4U) return;
        if (!!bV5a) Q4U.error++;
        Q4U.loaded++;
        if (Q4U.loaded < Q4U.total) return;
        this.bvW6Q(this.vI1x);
        this.z4D(Q4U.error > 0 ? "onerror" : "onloaded")
    };
    lR8J.csN9E = function (bV5a) {
        this.bxD7w(!0)
    };
    lR8J.csV9M = function () {
        this.bxD7w()
    };
    lR8J.Ky5D = function (V4Z) {
        V4Z = k4o.bmQ4U(V4Z);
        if (!V4Z) {
            this.z4D("onerror", {
                code: ec6W.btR6L,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.la8S = V4Z;
        if (!!this.Kx5C) this.la8S += (this.la8S.indexOf("?") < 0 ? "?" : "&") + this.Kx5C;
        if (this.zU2x("loaded")[this.la8S]) {
            try {
                this.z4D("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S4W();
            return this
        }
        var Q4U = this.zU2x(this.la8S),
            fS6M;
        if (!!Q4U) {
            Q4U.bind.unshift(this);
            Q4U.timer = window.clearTimeout(Q4U.timer)
        } else {
            fS6M = this.Zt1x();
            Q4U = {
                request: fS6M,
                bind: [this]
            };
            this.bvY6S(this.la8S, Q4U);
            h4l.s4w(fS6M, "load", this.bxq7j.g4k(this));
            h4l.s4w(fS6M, "error", this.ew6q.g4k(this, {
                code: ec6W.btJ6D,
                message: "无法加载指定资源文件[" + this.la8S + "]！"
            }))
        }
        if (this.bgj3x != 0) Q4U.timer = window.setTimeout(this.ew6q.g4k(this, {
            code: ec6W.bxZ7S,
            message: "指定资源文件[" + this.la8S + "]载入超时！"
        }), this.bgj3x || jU8M);
        if (!!fS6M) this.bgg3x(fS6M);
        this.z4D("onloading");
        return this
    };
    lR8J.bxL7E = function (i4m) {
        if (!i4m || !i4m.length) {
            this.z4D("onerror", {
                code: ec6W.btR6L,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.vI1x = k4o.ny9p();
        var Q4U = {
            error: 0,
            loaded: 0,
            total: i4m.length
        };
        this.bvY6S(this.vI1x, Q4U);
        for (var i = 0, l = i4m.length; i < l; i++) {
            if (!i4m[i]) {
                Q4U.total--;
                continue
            }
            this.ctb9S(i4m[i])
        }
        this.z4D("onloading");
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        bc4g = c4g("nej.h"),
        N4R = c4g("nej.ut.j"),
        RS8K;
    if (!!N4R.bfV3x) return;
    N4R.bfV3x = NEJ.C();
    RS8K = N4R.bfV3x.O4S(N4R.RB8t);
    RS8K.Zt1x = function () {
        var fr6l = a3x.cZ5e("iframe");
        fr6l.width = 0;
        fr6l.height = 0;
        fr6l.style.display = "none";
        return fr6l
    };
    RS8K.bgg3x = function (fS6M) {
        fS6M.src = this.la8S;
        document.body.appendChild(fS6M)
    };
    RS8K.ew6q = function (bV5a) {
        var fr6l = (this.zU2x(this.la8S) || Z4d).request;
        this.Zv1x("onerror", bV5a);
        bc4g.Vq9h(fr6l)
    };
    RS8K.bxq7j = function () {
        var mq8i = null,
            fr6l = (this.zU2x(this.la8S) || Z4d).request;
        try {
            mq8i = fr6l.contentWindow.document.body
        } catch (ex) {}
        this.Zv1x("onloaded", mq8i);
        bc4g.Vq9h(fr6l)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ut.j"),
        bfU3x;
    if (!!N4R.ZM1x) return;
    N4R.ZM1x = NEJ.C();
    bfU3x = N4R.ZM1x.O4S(N4R.RB8t);
    bfU3x.Zt1x = function () {
        return a3x.cZ5e("link")
    };
    bfU3x.bgg3x = function (fS6M) {
        fS6M.href = this.la8S;
        document.head.appendChild(fS6M)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ut.j"),
        ZQ1x;
    if (!!N4R.ZT1x) return;
    N4R.ZT1x = NEJ.C();
    ZQ1x = N4R.ZT1x.O4S(N4R.RB8t);
    ZQ1x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.bzk7d = e4i.async;
        this.bfM2x = e4i.charset;
        this.RD8v.async = !1;
        this.RD8v.charset = this.bfM2x
    };
    ZQ1x.Zt1x = function () {
        var fS6M = a3x.cZ5e("script");
        if (this.bzk7d != null) fS6M.async = !!this.bzk7d;
        if (this.bfM2x != null) fS6M.charset = this.bfM2x;
        return fS6M
    };
    ZQ1x.bwy6s = function (fS6M) {
        a3x.cB5G(fS6M)
    }
})();
(function () {
    var c4g = NEJ.P,
        x4B = c4g("nej.j"),
        N4R = c4g("nej.ut.j");
    x4B.ctd9U = function (V4Z, e4i) {
        N4R.ZT1x.A4E(e4i).Ky5D(V4Z);
        return this
    };
    x4B.ctg9X = function (i4m, e4i) {
        N4R.ZT1x.A4E(e4i).bxL7E(i4m);
        return this
    };
    x4B.cyU0x = function (V4Z, e4i) {
        N4R.ZM1x.A4E(e4i).Ky5D(V4Z);
        return this
    };
    x4B.cuM9D = function (i4m, e4i) {
        N4R.ZM1x.A4E(e4i).bxL7E(i4m);
        return this
    };
    x4B.bzB7u = function (V4Z, e4i) {
        N4R.bfV3x.A4E(e4i).Ky5D(V4Z);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        Q4U = {},
        su0x = +(new Date) + "-";
    a3x.cN5S = function () {
        var cz5E = 0;
        var Sh8Z = function () {
            if (cz5E > 0) return;
            cz5E = 0;
            h4l.z4D(document, "templateready");
            h4l.gF7y(document, "templateready")
        };
        var baj1x = function (fR6L, e4i) {
            var ds5x = a3x.u4y(fR6L, "src");
            if (!ds5x) return;
            e4i = e4i || Z4d;
            var fJ6D = e4i.root;
            if (!fJ6D) {
                fJ6D = fR6L.ownerDocument.location.href
            } else {
                fJ6D = k4o.bmQ4U(fJ6D)
            }
            ds5x = ds5x.split(",");
            k4o.bb4f(ds5x, function (C4G, r4v, i4m) {
                i4m[r4v] = k4o.bmQ4U(C4G, fJ6D)
            });
            return ds5x
        };
        var cuY9P = function (fR6L, e4i) {
            if (!fR6L) return;
            var ds5x = baj1x(fR6L, e4i);
            if (!!ds5x) x4B.cuM9D(ds5x, {
                version: a3x.u4y(fR6L, "version")
            });
            a3x.bMt0x(fR6L.value)
        };
        var cvc9T = function (C4G) {
            cz5E--;
            a3x.bMO0x(C4G);
            Sh8Z()
        };
        var cve9V = function (fR6L, e4i) {
            if (!fR6L) return;
            var ds5x = baj1x(fR6L, e4i),
                eG6A = fR6L.value;
            if (!!ds5x) {
                cz5E++;
                var e4i = {
                    version: a3x.u4y(fR6L, "version"),
                    onloaded: cvc9T.g4k(null, eG6A)
                };
                window.setTimeout(x4B.ctg9X.g4k(x4B, ds5x, e4i), 0);
                return
            }
            a3x.bMO0x(eG6A)
        };
        var cvj9a = function (mq8i) {
            cz5E--;
            a3x.cN5S(mq8i);
            Sh8Z()
        };
        var cvo9f = function (fR6L, e4i) {
            if (!fR6L) return;
            var ds5x = baj1x(fR6L, e4i)[0];
            if (!!ds5x) {
                cz5E++;
                var e4i = {
                    version: a3x.u4y(fR6L, "version"),
                    onloaded: cvj9a
                };
                window.setTimeout(x4B.bzB7u.g4k(x4B, ds5x, e4i), 0)
            }
        };
        var cvs9j = function (D4H, cL5Q) {
            cz5E--;
            a3x.KH5M(D4H, cL5Q || "");
            Sh8Z()
        };
        var cvv9m = function (fR6L, e4i) {
            if (!fR6L || !fR6L.id) return;
            var D4H = fR6L.id,
                ds5x = baj1x(fR6L, e4i)[0];
            if (!!ds5x) {
                cz5E++;
                var V4Z = ds5x + (ds5x.indexOf("?") < 0 ? "?" : "&") + (a3x.u4y(fR6L, "version") || ""),
                    e4i = {
                        type: "text",
                        method: "GET",
                        onload: cvs9j.g4k(null, D4H)
                    };
                window.setTimeout(x4B.bo4s.g4k(x4B, V4Z, e4i), 0)
            }
        };
        var cvH9y = function (f4j, e4i) {
            var t4x = f4j.name.toLowerCase();
            switch (t4x) {
                case "jst":
                    a3x.er6l(f4j, !0);
                    return;
                case "txt":
                    a3x.KH5M(f4j.id, f4j.value || "");
                    return;
                case "ntp":
                    a3x.iz7s(f4j.value || "", f4j.id);
                    return;
                case "js":
                    cve9V(f4j, e4i);
                    return;
                case "css":
                    cuY9P(f4j, e4i);
                    return;
                case "html":
                    cvo9f(f4j, e4i);
                    return;
                case "res":
                    cvv9m(f4j, e4i);
                    return
            }
        };
        H4L.fG6A.A4E({
            element: document,
            event: "templateready",
            oneventadd: Sh8Z
        });
        return function (G4K, e4i) {
            G4K = a3x.B4F(G4K);
            if (!!G4K) {
                var i4m = G4K.tagName == "TEXTAREA" ? [G4K] : G4K.getElementsByTagName("textarea");
                k4o.bb4f(i4m, function (f4j) {
                    cvH9y(f4j, e4i)
                });
                a3x.cB5G(G4K, !0)
            }
            Sh8Z();
            return this
        }
    }();
    a3x.KH5M = function (K4O, C4G) {
        Q4U[K4O] = C4G || "";
        return this
    };
    a3x.ik7d = function (K4O) {
        return Q4U[K4O] || ""
    };
    a3x.iz7s = function (G4K, K4O) {
        K4O = K4O || k4o.ny9p();
        G4K = a3x.B4F(G4K) || G4K;
        a3x.KH5M(su0x + K4O, G4K);
        a3x.mN8F(G4K);
        return K4O
    };
    a3x.dq5v = function (K4O) {
        if (!K4O) return null;
        K4O = su0x + K4O;
        var C4G = a3x.ik7d(K4O);
        if (!C4G) return null;
        if (k4o.fA6u(C4G)) {
            C4G = a3x.nl9c(C4G);
            a3x.KH5M(K4O, C4G)
        }
        return C4G.cloneNode(!0)
    };
    a3x.zO2x = function () {
        var Ht4x = function (C4G, K4O) {
            return K4O == "offset" || K4O == "limit"
        };
        return function (i4m, p4t, e4i) {
            var bs4w = [];
            if (!i4m || !i4m.length || !p4t) return bs4w;
            e4i = e4i || Z4d;
            var dt5y = i4m.length,
                jw7p = parseInt(e4i.offset) || 0,
                gp6j = Math.min(dt5y, jw7p + (parseInt(e4i.limit) || dt5y)),
                cp5u = {
                    total: i4m.length,
                    range: [jw7p, gp6j]
                };
            NEJ.X(cp5u, e4i, Ht4x);
            for (var i = jw7p, cv5A; i < gp6j; i++) {
                cp5u.index = i;
                cp5u.data = i4m[i];
                cv5A = p4t.A4E(cp5u);
                var D4H = cv5A.CX3x();
                Q4U[D4H] = cv5A;
                cv5A.S4W = cv5A.S4W.es6m(function (D4H, cv5A) {
                    delete Q4U[D4H];
                    delete cv5A.S4W
                }.g4k(null, D4H, cv5A));
                bs4w.push(cv5A)
            }
            return bs4w
        }
    }();
    a3x.bDr8j = function (D4H) {
        return Q4U[D4H]
    };
    a3x.cyE0x = function (dT6N, e4i) {
        e4i = e4i || Z4d;
        a3x.cN5S(e4i.tid || "template-box");
        h4l.s4w(document, "templateready", function () {
            dT6N.A4E().z4D("onshow", e4i)
        })
    };
    c4g("dbg").dumpTC = function () {
        return Q4U
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        N4R = c4g("nej.ui"),
        b3x;
    if (!!N4R.ef6Z) return;
    N4R.ef6Z = NEJ.C();
    b3x = N4R.ef6Z.O4S(H4L.cC5H);
    b3x.cs5x = function () {
        this.cw5B();
        a3x.bCg8Y();
        this.ca5f();
        this.bS5X()
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.cvM0x(e4i.clazz);
        this.bEd8V(e4i.parent)
    };
    b3x.bz4D = function () {
        this.bF4J();
        this.bEf8X();
        delete this.fQ6K;
        a3x.mN8F(this.m4q);
        a3x.v4z(this.m4q, this.bfh2x);
        delete this.bfh2x
    };
    b3x.ca5f = bn4r;
    b3x.bS5X = function () {
        if (!this.cb5g) this.baG1x();
        this.m4q = a3x.dq5v(this.cb5g);
        if (!this.m4q) this.m4q = a3x.cZ5e("div", this.lD8v);
        a3x.w4A(this.m4q, this.lD8v)
    };
    b3x.baG1x = bn4r;
    b3x.cvM0x = function (dU6O) {
        this.bfh2x = dU6O || "";
        a3x.w4A(this.m4q, this.bfh2x)
    };
    b3x.cwq0x = function () {
        if (!this.lD8v) return;
        a3x.w4A(this.fQ6K, this.lD8v + "-parent")
    };
    b3x.bEf8X = function () {
        if (!this.lD8v) return;
        a3x.v4z(this.fQ6K, this.lD8v + "-parent")
    };
    b3x.kY8Q = function () {
        return this.m4q
    };
    b3x.bEd8V = function (bG4K) {
        if (!this.m4q) return this;
        this.bEf8X();
        if (k4o.gr6l(bG4K)) {
            this.fQ6K = bG4K(this.m4q)
        } else {
            this.fQ6K = a3x.B4F(bG4K);
            if (!!this.fQ6K) this.fQ6K.appendChild(this.m4q)
        }
        this.cwq0x();
        return this
    };
    b3x.L4P = function () {
        if (!this.fQ6K || !this.m4q || this.m4q.parentNode == this.fQ6K) return this;
        this.fQ6K.appendChild(this.m4q);
        return this
    };
    b3x.br4v = function () {
        a3x.mN8F(this.m4q);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        bc4g = c4g("nej.h"),
        N4R = c4g("nej.ui"),
        vU1x, bFX9O;
    if (!!N4R.Su8m) return;
    N4R.Su8m = NEJ.C();
    vU1x = N4R.Su8m.O4S(N4R.ef6Z);
    bFX9O = N4R.Su8m.cl5q;
    vU1x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.wl1x("oncontentready", e4i.oncontentready || this.cwz0x.g4k(this));
        this.cwI0x = !!e4i.nohack;
        this.cwN0x = !!e4i.destroyable;
        this.KM5R(e4i.content)
    };
    vU1x.bz4D = function () {
        this.z4D("onbeforerecycle");
        this.bF4J();
        this.baS1x();
        this.KM5R("");
        a3x.eY6S(this.m4q, {
            top: "",
            left: ""
        })
    };
    vU1x.cwz0x = bn4r;
    vU1x.KN5S = bn4r;
    vU1x.baS1x = function () {
        a3x.mN8F(this.m4q);
        if (!!this.nh9Y) {
            this.nh9Y = bc4g.brx5C(this.m4q);
            delete this.nh9Y
        }
    };
    vU1x.KM5R = function (bl4p) {
        if (!this.m4q || !this.zL2x || bl4p == null) return this;
        bl4p = bl4p || "";
        k4o.fA6u(bl4p) ? this.zL2x.innerHTML = bl4p : this.zL2x.appendChild(bl4p);
        this.z4D("oncontentready", this.zL2x);
        return this
    };
    vU1x.gs6m = function (be4i) {
        var C4G = be4i.top;
        if (C4G != null) {
            C4G += "px";
            a3x.Y4c(this.m4q, "top", C4G);
            a3x.Y4c(this.nh9Y, "top", C4G)
        }
        var C4G = be4i.left;
        if (C4G != null) {
            C4G += "px";
            a3x.Y4c(this.m4q, "left", C4G);
            a3x.Y4c(this.nh9Y, "left", C4G)
        }
        return this
    };
    vU1x.L4P = function () {
        a3x.Y4c(this.m4q, "visibility", "hidden");
        bFX9O.L4P.apply(this, arguments);
        this.KN5S();
        a3x.Y4c(this.m4q, "visibility", "");
        if (!this.cwI0x) {
            this.nh9Y = bc4g.nh9Y(this.m4q)
        }
        return this
    };
    vU1x.br4v = function () {
        this.cwN0x ? this.S4W() : this.baS1x();
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        k4o = c4g("nej.u"),
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ui"),
        zK2x;
    if (!!N4R.bbf1x) return;
    N4R.bbf1x = NEJ.C();
    zK2x = N4R.bbf1x.O4S(N4R.ef6Z);
    zK2x.bj4n = function (e4i) {
        this.SF9w();
        this.bk4o(this.cwW0x(e4i));
        this.bX5c.onbeforerecycle = this.S4W.g4k(this);
        this.oq9h = this.bey2x()
    };
    zK2x.bz4D = function () {
        this.z4D("onbeforerecycle");
        this.bF4J();
        delete this.bX5c;
        a3x.mN8F(this.m4q);
        var zH2x = this.oq9h;
        if (!!zH2x) {
            delete this.oq9h;
            zH2x.S4W()
        }
    };
    zK2x.bey2x = bn4r;
    zK2x.cwW0x = function (e4i) {
        var o4s = {};
        k4o.ex6r(e4i, function (p4t, K4O) {
            this.bX5c.hasOwnProperty(K4O) ? this.bX5c[K4O] = p4t : o4s[K4O] = p4t
        }, this);
        return o4s
    };
    zK2x.SF9w = function () {
        this.bX5c = {
            clazz: "",
            parent: null,
            content: this.m4q,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    zK2x.L4P = function () {
        if (!!this.oq9h) this.oq9h.L4P();
        this.z4D("onaftershow");
        return this
    };
    zK2x.br4v = function () {
        if (!!this.oq9h) this.oq9h.br4v();
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        ec6W = c4g("nej.g"),
        bc4g = c4g("nej.h"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        N4R = c4g("nej.ui"),
        SK9B, bKG0x;
    if (!!N4R.KP5U) return;
    var iw7p = a3x.sN0x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + ec6W.btx6r + ");}");
    N4R.KP5U = NEJ.C();
    SK9B = N4R.KP5U.O4S(N4R.ef6Z);
    bKG0x = N4R.KP5U.cl5q;
    SK9B.bj4n = function (e4i) {
        this.bk4o(e4i);
        var bl4p = e4i.content || "&nbsp;";
        k4o.fA6u(bl4p) ? this.m4q.innerHTML = bl4p : this.m4q.appendChild(bl4p)
    };
    SK9B.bz4D = function () {
        this.bF4J();
        this.m4q.innerHTML = "&nbsp;"
    };
    SK9B.ca5f = function () {
        this.lD8v = iw7p
    };
    SK9B.L4P = function () {
        bc4g.bry5D(this.m4q);
        bKG0x.L4P.apply(this, arguments);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        N4R = c4g("nej.ut"),
        vj1x;
    if (!!N4R.tG0x) return;
    N4R.tG0x = NEJ.C();
    vj1x = N4R.tG0x.O4S(N4R.cC5H);
    vj1x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.cxc0x = !!e4i.overflow;
        this.m4q = a3x.B4F(e4i.body);
        this.zG2x = a3x.B4F(e4i.view) || a3x.bIs9j(this.m4q);
        this.bLB0x = a3x.B4F(e4i.mbar) || this.m4q;
        this.bbt1x = parseInt(e4i.direction) || 0;
        if (!!e4i.isRelative) {
            this.m4q.style.position = "relative";
            this.beq2x = true;
            this.ben2x()
        }
        this.bT5Y([
            [document, "mouseup", this.bem2x.g4k(this)],
            [document, "mousemove", this.bek2x.g4k(this)],
            [this.bLB0x, "mousedown", this.SP9G.g4k(this)]
        ])
    };
    vj1x.ben2x = function () {
        if (!!this.beq2x) {
            this.KT5Y = a3x.hM7F(this.m4q, this.zG2x);
            this.KT5Y.x -= parseInt(a3x.cX5c(this.m4q, "left")) || 0;
            this.KT5Y.y -= parseInt(a3x.cX5c(this.m4q, "top")) || 0
        }
    };
    vj1x.bz4D = function () {
        this.bF4J();
        delete this.m4q;
        delete this.bLB0x;
        delete this.zG2x
    };
    vj1x.bdT2x = function () {
        return {
            x: Math.max(this.zG2x.clientWidth, this.zG2x.scrollWidth) - this.m4q.offsetWidth,
            y: Math.max(this.zG2x.clientHeight, this.zG2x.scrollHeight) - this.m4q.offsetHeight
        }
    };
    vj1x.SP9G = function (d4h) {
        h4l.bf4j(d4h);
        if (!!this.hr7k) return;
        this.hr7k = {
            x: h4l.iX7Q(d4h),
            y: h4l.lK8C(d4h)
        };
        this.bNa0x = this.bdT2x();
        this.z4D("ondragstart", d4h)
    };
    vj1x.bek2x = function (d4h) {
        if (!this.hr7k) return;
        var be4i = {
            x: h4l.iX7Q(d4h),
            y: h4l.lK8C(d4h)
        };
        var pn9e = be4i.x - this.hr7k.x,
            pm9d = be4i.y - this.hr7k.y,
            C4G = {
                top: (parseInt(a3x.cX5c(this.m4q, "top")) || 0) + pm9d,
                left: (parseInt(a3x.cX5c(this.m4q, "left")) || 0) + pn9e
            };
        if (this.beq2x) {
            this.ben2x();
            C4G.top = C4G.top + this.KT5Y.y;
            C4G.left = C4G.left + this.KT5Y.x
        }
        this.hr7k = be4i;
        this.gs6m(C4G)
    };
    vj1x.bem2x = function (d4h) {
        if (!this.hr7k) return;
        delete this.bNa0x;
        delete this.hr7k;
        this.z4D("ondragend", this.bdS2x())
    };
    vj1x.gs6m = function (d4h) {
        if (!this.cxc0x) {
            var bNo0x = this.bNa0x || this.bdT2x();
            d4h.top = Math.min(bNo0x.y, Math.max(0, d4h.top));
            d4h.left = Math.min(bNo0x.x, Math.max(0, d4h.left))
        }
        var cc5h = this.m4q.style;
        if (this.beq2x) {
            this.ben2x();
            d4h.top = d4h.top - this.KT5Y.y;
            d4h.left = d4h.left - this.KT5Y.x
        }
        if (this.bbt1x == 0 || this.bbt1x == 2) cc5h.top = d4h.top + "px";
        if (this.bbt1x == 0 || this.bbt1x == 1) cc5h.left = d4h.left + "px";
        this.z4D("onchange", d4h);
        return this
    };
    vj1x.bdS2x = function () {
        return {
            left: parseInt(a3x.cX5c(this.m4q, "left")) || 0,
            top: parseInt(a3x.cX5c(this.m4q, "top")) || 0
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = NEJ.P("nej.e"),
        h4l = NEJ.P("nej.v"),
        k4o = NEJ.P("nej.u"),
        H4L = NEJ.P("nej.ut"),
        N4R = NEJ.P("nej.ui"),
        iw7p, gv7o, b3x, J4N;
    if (!!N4R.UX9O) return;
    N4R.UX9O = NEJ.C();
    b3x = N4R.UX9O.O4S(N4R.Su8m);
    J4N = N4R.UX9O.cl5q;
    b3x.cs5x = function () {
        this.qN0x = {};
        this.kj8b = {
            onchange: this.bek2x.g4k(this)
        };
        this.cw5B()
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.cxd0x(e4i.mask);
        this.cxi0x(e4i.align);
        this.zB2x(e4i.title);
        if (!e4i.draggable) return;
        this.is7l = H4L.tG0x.A4E(this.kj8b)
    };
    b3x.bz4D = function () {
        this.bF4J();
        delete this.pZ9Q;
        delete this.Tb9S;
        if (!!this.zz2x) {
            this.zz2x.S4W();
            delete this.zz2x
        }
        if (!!this.is7l) {
            this.is7l.S4W();
            delete this.is7l
        }
    };
    b3x.ca5f = function () {
        this.lD8v = iw7p;
        this.cb5g = gv7o
    };
    b3x.bS5X = function () {
        this.cd5i();
        var i4m = a3x.da5f(this.m4q);
        this.zL2x = i4m[1];
        this.kj8b.mbar = i4m[0];
        this.kj8b.body = this.m4q;
        h4l.s4w(i4m[2], "mousedown", this.cxB0x.g4k(this));
        h4l.s4w(this.kj8b.mbar, "mousedown", this.SP9G.g4k(this));
        this.bQH2x = a3x.da5f(this.kj8b.mbar)[0]
    };
    b3x.cxB0x = function (d4h) {
        h4l.bf4j(d4h);
        this.z4D("onclose", d4h);
        if (!d4h.stopped) {
            this.br4v()
        }
    };
    b3x.SP9G = function (d4h) {
        h4l.z4D(document, "click")
    };
    b3x.bek2x = function (d4h) {
        if (!this.nh9Y) return;
        a3x.eY6S(this.nh9Y, {
            top: d4h.top + "px",
            left: d4h.left + "px"
        })
    };
    b3x.KN5S = function () {
        var eF6z = [function () {
                return 0
            }, function (nz9q, Gr4v, be4i, K4O) {
                if (K4O == "top" && window.top != window.self) {
                    var bbV2x = 0,
                        Gu4y = 0;
                    if (top.g_topBarHeight) bbV2x = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight) Gu4y = top.g_bottomBarHeight;
                    if (nz9q.top <= bbV2x) {
                        var bdG2x = Math.max(0, (Gr4v.height - (bbV2x - nz9q.top) - Gu4y - be4i.height) / 2);
                        return bdG2x + bbV2x
                    } else {
                        var bdG2x = Math.max(0, (Gr4v.height - Gu4y - be4i.height) / 2);
                        return bdG2x + nz9q.top
                    }
                }
                return Math.max(0, nz9q[K4O] + (Gr4v[hY7R[K4O]] - be4i[hY7R[K4O]]) / 2)
            }, function (nz9q, Gr4v, be4i, K4O) {
                return nz9q[K4O] + (Gr4v[hY7R[K4O]] - be4i[hY7R[K4O]])
            }],
            cyi0x = ["left", "top"],
            hY7R = {
                left: "width",
                top: "height"
            };
        return function () {
            var C4G = {},
                cc5h = this.m4q.style,
                jh7a = a3x.oQ9H(),
                nz9q = {
                    left: jh7a.scrollLeft,
                    top: jh7a.scrollTop
                },
                Gr4v = {
                    width: jh7a.clientWidth,
                    height: jh7a.clientHeight
                },
                be4i = {
                    width: this.m4q.offsetWidth,
                    height: this.m4q.offsetHeight
                },
                dl5q = {
                    left: jh7a.clientWidth - this.m4q.offsetWidth,
                    top: jh7a.clientHeight - this.m4q.offsetHeight
                };
            k4o.bb4f(cyi0x, function (K4O, r4v) {
                var dn5s = eF6z[this.pZ9Q[r4v]];
                if (!dn5s) return;
                C4G[K4O] = dn5s(nz9q, Gr4v, be4i, K4O)
            }, this);
            this.gs6m(C4G)
        }
    }();
    b3x.cyf0x = function () {
        if (!this.zz2x) {
            if (!this.Tb9S) return;
            this.qN0x.parent = this.fQ6K;
            this.zz2x = this.Tb9S.A4E(this.qN0x)
        }
        this.zz2x.L4P()
    };
    b3x.baS1x = function () {
        if (!!this.zz2x) this.zz2x.br4v();
        J4N.baS1x.apply(this, arguments)
    };
    b3x.cxd0x = function (kJ8B) {
        if (!!kJ8B) {
            if (kJ8B instanceof N4R.KP5U) {
                this.zz2x = kJ8B;
                return
            }
            if (k4o.gr6l(kJ8B)) {
                this.Tb9S = kJ8B;
                return
            }
            this.Tb9S = N4R.KP5U;
            if (k4o.fA6u(kJ8B)) this.qN0x.clazz = kJ8B;
            return
        }
        this.Tb9S = null
    };
    b3x.zB2x = function (eb6V, dK5P) {
        if (!!this.bQH2x) {
            var Xh0x = !dK5P ? "innerText" : "innerHTML";
            this.bQH2x[Xh0x] = eb6V || "标题"
        }
        return this
    };
    b3x.cxi0x = function () {
        var cY5d = /\s+/,
            cye0x = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            cyd0x = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function (nE9v) {
            this.pZ9Q = (nE9v || "").split(cY5d);
            var cf5k = cye0x[this.pZ9Q[0]];
            if (cf5k == null) cf5k = 1;
            this.pZ9Q[0] = cf5k;
            var cf5k = cyd0x[this.pZ9Q[1]];
            if (cf5k == null) cf5k = 1;
            this.pZ9Q[1] = cf5k;
            return this
        }
    }();
    b3x.L4P = function () {
        J4N.L4P.apply(this, arguments);
        this.cyf0x();
        return this
    };
    iw7p = a3x.sN0x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gv7o = a3x.iz7s('<div class="' + iw7p + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c4g = NEJ.P,
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ui"),
        bdE2x;
    if (!!N4R.bbY2x) return;
    N4R.bbY2x = NEJ.C();
    bdE2x = N4R.bbY2x.O4S(N4R.bbf1x);
    bdE2x.bey2x = function () {
        return N4R.UX9O.A4E(this.bX5c)
    };
    bdE2x.SF9w = function () {
        N4R.bbY2x.cl5q.SF9w.apply(this, arguments);
        this.bX5c.mask = null;
        this.bX5c.title = "标题";
        this.bX5c.align = "";
        this.bX5c.draggable = !1;
        this.bX5c.onclose = null
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        ba4e = c4g("nej.ui"),
        n4r = c4g("nm.l"),
        b3x, J4N;
    n4r.ee6Y = NEJ.C();
    b3x = n4r.ee6Y.O4S(ba4e.bbY2x);
    b3x.bj4n = function (e4i) {
        e4i.clazz = "m-layer z-show " + (e4i.clazz || "");
        e4i.nohack = true;
        e4i.draggable = true;
        this.bk4o(e4i)
    };
    b3x.dH5M = function (f4j, bE4I) {
        if (!f4j) return;
        a3x.Y4c(f4j, "display", !bE4I ? "none" : "");
        f4j.lastChild.innerText = bE4I || ""
    };
    b3x.dP5U = function (gt6n, cQ5V, To9f, Ts9j) {
        var dT6N = "js-lock";
        if (cQ5V === undefined) return a3x.bA4E(gt6n, dT6N);
        !cQ5V ? a3x.v4z(gt6n, dT6N) : a3x.w4A(gt6n, dT6N);
        gt6n.firstChild.innerText = !cQ5V ? To9f : Ts9j
    };
    n4r.ee6Y.L4P = function (e4i) {
        e4i = e4i || {};
        if (e4i.mask === undefined) e4i.mask = "m-mask";
        if (e4i.parent === undefined) e4i.parent = document.body;
        if (e4i.draggable === undefined) e4i.draggable = true;
        !!this.eR6L && this.eR6L.S4W();
        this.eR6L = this.A4E(e4i);
        this.eR6L.L4P(e4i);
        return this.eR6L
    };
    n4r.ee6Y.br4v = function () {
        !!this.eR6L && this.eR6L.S4W()
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        b3x, J4N;
    n4r.bdu2x = NEJ.C();
    b3x = n4r.bdu2x.O4S(n4r.ee6Y);
    J4N = n4r.bdu2x.cl5q;
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        if (e4i.bubble === undefined) e4i.bubble = true;
        this.Tt9k = e4i.bubble;
        this.pU9L = e4i.message || ""
    };
    b3x.ca5f = function () {
        this.cb5g = a3x.iz7s('<div class="lyct f-cb f-tc"></div>')
    };
    b3x.bS5X = function () {
        this.cd5i();
        h4l.s4w(this.m4q, "click", this.cF5K.g4k(this))
    };
    b3x.cF5K = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action");
        if (!f4j) return;
        if (f4j.href) h4l.cm5r(d4h);
        if (a3x.u4y(f4j, "action") == "close") this.br4v();
        if (this.Tt9k === !1) h4l.sF0x(d4h);
        this.z4D("onaction", a3x.u4y(f4j, "action"))
    };
    b3x.L4P = function () {
        J4N.L4P.call(this);
        this.m4q.innerHTML = this.pU9L
    };
    var gn6h = a3x.er6l('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l4p.mt8l = function () {
        var eC6w;
        var cv5A;
        var bds2x = function (fw6q, W4a) {
            if (k4o.gr6l(fw6q, "function") && fw6q(W4a) != -1) cv5A.S4W()
        };
        var zx2x = function () {
            !!cv5A && cv5A.br4v()
        };
        return function (e4i) {
            clearTimeout(eC6w);
            e4i = e4i || {};
            e4i.title = e4i.title || "提示";
            e4i.clazz = e4i.clazz || "";
            e4i.parent = e4i.parent || document.body;
            e4i.buttons = e4i.buttons || [];
            e4i.message = a3x.bW5b(gn6h, e4i);
            e4i.onaction = bds2x.g4k(null, e4i.action);
            if (e4i.mask === undefined) e4i.mask = true;
            if (e4i.draggable === undefined) e4i.draggable = true;
            !!cv5A && cv5A.S4W();
            cv5A = n4r.bdu2x.A4E(e4i);
            cv5A.L4P();
            if (e4i.autoclose) eC6w = setTimeout(zx2x.g4k(null), 2e3);
            return cv5A
        }
    }();
    l4p.fh6b = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w1";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e4i.btntxt || "确定"
        }];
        var cv5A = l4p.mt8l(e4i);
        return cv5A
    };
    l4p.gJ7C = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w2";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e4i.btnok || "确定",
            style: e4i.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e4i.btncc || "取消",
            style: e4i.ccstyle || ""
        }];
        var cv5A = l4p.mt8l(e4i);
        return cv5A
    }
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u");
    a3x.cyc0x = function () {
        var gm6g = /[\r\n]/gi,
            Q4U = {};
        var cyb0x = function (cG5L) {
            return (cG5L || "").replace(gm6g, "aa").length
        };
        var byJ7C = function (D4H) {
            var bd4h = Q4U[D4H],
                byP7I = a3x.B4F(D4H),
                pR9I = a3x.B4F(D4H + "-counter");
            if (!byP7I || !bd4h) return;
            var d4h = {
                input: byP7I.value
            };
            d4h.length = bd4h.onlength(d4h.input);
            d4h.delta = bd4h.max - d4h.length;
            bd4h.onchange(d4h);
            pR9I.innerHTML = d4h.value || "剩余" + d4h.delta + "个字"
        };
        return function (G4K, e4i) {
            var D4H = a3x.ld8V(G4K);
            if (!D4H || !!Q4U[D4H]) return;
            var bd4h = NEJ.X({}, e4i);
            bd4h.onchange = bd4h.onchange || bn4r;
            bd4h.onlength = cyb0x;
            if (!bd4h.max) {
                var bza7T = parseInt(a3x.fT6N(D4H, "maxlength")),
                    bzb7U = parseInt(a3x.u4y(D4H, "maxLength"));
                bd4h.max = bza7T || bzb7U || 100;
                if (!bza7T && !!bzb7U) bd4h.onlength = k4o.fm6g
            }
            Q4U[D4H] = bd4h;
            h4l.s4w(D4H, "input", byJ7C.g4k(null, D4H));
            var f4j = a3x.HW4a(D4H, {
                nid: bd4h.nid || "js-counter",
                clazz: bd4h.clazz
            });
            bd4h.xid = D4H + "-counter";
            f4j.id = bd4h.xid;
            byJ7C(D4H)
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        bc4g = c4g("nej.h");
    bc4g.bdr2x = function (G4K, dU6O) {}
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        N4R = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        bc4g = c4g("nej.h");
    if (N4R.mC8u.trident) return;
    bc4g.bdr2x = function () {
        var Q4U = {};
        var Hf4j = function (d4h) {
            var dc5h = h4l.U4Y(d4h);
            if (!!dc5h.value) return;
            a3x.Y4c(a3x.HW4a(dc5h), "display", "none")
        };
        var FO4S = function (d4h) {
            var dc5h = h4l.U4Y(d4h);
            if (!!dc5h.value) return;
            a3x.Y4c(a3x.HW4a(dc5h), "display", "")
        };
        var cya0x = function (dc5h, dU6O) {
            var D4H = a3x.ld8V(dc5h),
                ir7k = a3x.HW4a(dc5h, {
                    tag: "label",
                    clazz: dU6O
                });
            ir7k.htmlFor = D4H;
            var cL5Q = a3x.fT6N(dc5h, "placeholder") || "";
            ir7k.innerText = cL5Q == "null" ? "" : cL5Q;
            var ch5m = dc5h.offsetHeight + "px";
            a3x.eY6S(ir7k, {
                left: 0,
                display: !dc5h.value ? "" : "none"
            })
        };
        return bc4g.bdr2x.es6m(function (d4h) {
            d4h.stopped = !0;
            var bh4l = d4h.args,
                dc5h = a3x.B4F(bh4l[0]);
            if (!!Q4U[dc5h.id]) return;
            cya0x(dc5h, bh4l[1]);
            Q4U[dc5h.id] = !0;
            h4l.s4w(dc5h, "blur", FO4S.g4k(null));
            h4l.s4w(dc5h, "focus", Hf4j.g4k(null))
        })
    }()
})();
(function () {
    var c4g = NEJ.P,
        bc4g = c4g("nej.h"),
        a3x = c4g("nej.e"),
        cP5U = c4g("nej.x");
    a3x.gb6V = cP5U.gb6V = function (G4K, dU6O) {
        bc4g.bdr2x(G4K, a3x.u4y(G4K, "holder") || dU6O || "js-placeholder");
        return this
    };
    cP5U.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        hq7j;
    if (!!N4R.Tu9l) return;
    N4R.Tu9l = NEJ.C();
    hq7j = N4R.Tu9l.O4S(N4R.cC5H);
    hq7j.cs5x = function () {
        this.cw5B();
        this.DP3x = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    hq7j.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.fZ6T = document.forms[e4i.form] || a3x.B4F(e4i.form);
        this.bT5Y([
            [this.fZ6T, "keypress", this.cxZ0x.g4k(this)]
        ]);
        this.pU9L = e4i.message || {};
        this.pU9L.pass = this.pU9L.pass || "&nbsp;";
        var eU6O = this.pj9a(this.fZ6T, "focusMode", 1);
        if (!isNaN(eU6O)) {
            this.bAX8P = {
                mode: eU6O,
                clazz: e4i.focus
            }
        }
        this.zv2x = e4i.holder;
        this.DP3x.tp.clazz = "js-mhd " + (e4i.tip || "js-tip");
        this.DP3x.ok.clazz = "js-mhd " + (e4i.pass || "js-pass");
        this.DP3x.er.clazz = "js-mhd " + (e4i.error || "js-error");
        this.bBe8W = e4i.invalid || "js-invalid";
        this.cxX0x(e4i);
        this.gh6b();
        if (!!this.zu2x) this.zu2x.focus()
    };
    hq7j.bz4D = function () {
        this.bF4J();
        delete this.pU9L;
        delete this.zu2x;
        delete this.Ef3x;
        delete this.fZ6T;
        delete this.bBB8t;
        delete this.Tw9n
    };
    hq7j.pj9a = function (f4j, vh1x, t4x) {
        var C4G = a3x.u4y(f4j, vh1x);
        switch (t4x) {
            case 1:
                return parseInt(C4G);
            case 2:
                return (C4G || "").toLowerCase() == "true";
            case 3:
                return this.bdi2x(C4G)
        }
        return C4G
    };
    hq7j.zt2x = function (C4G, t4x) {
        if (t4x == "date") return this.bdi2x(C4G);
        return parseInt(C4G)
    };
    hq7j.bcC2x = function () {
        var jE7x = /^button|submit|reset|image|hidden|file$/i;
        return function (f4j) {
            f4j = this.B4F(f4j) || f4j;
            var t4x = f4j.type;
            return !!f4j.name && !jE7x.test(f4j.type || "")
        }
    }();
    hq7j.cxW0x = function () {
        var jE7x = /^hidden$/i;
        return function (f4j) {
            if (this.bcC2x(f4j)) return !0;
            f4j = this.B4F(f4j) || f4j;
            var t4x = f4j.type || "";
            return jE7x.test(t4x)
        }
    }();
    hq7j.bdi2x = function () {
        var cY5d = /[-\/]/;
        var cxS0x = function (C4G) {
            if (!C4G) return "";
            C4G = C4G.split(cY5d);
            C4G.push(C4G.shift());
            return C4G.join("/")
        };
        return function (C4G) {
            if ((C4G || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cxS0x(C4G))
        }
    }();
    hq7j.cxZ0x = function (d4h) {
        if (d4h.keyCode != 13) return;
        this.z4D("onenter", d4h)
    };
    hq7j.cxR0x = function (D4H, T4X) {
        var rs0x = this.Tw9n[T4X],
            C4G = this.pj9a(D4H, T4X);
        if (!C4G || !rs0x) return;
        this.bcQ2x(D4H, rs0x);
        this.blR4V(D4H, T4X, C4G)
    };
    hq7j.cxQ0x = function (D4H, T4X) {
        try {
            var bCv8n = this.pj9a(D4H, T4X);
            if (!bCv8n) return;
            var C4G = new RegExp(bCv8n);
            this.blR4V(D4H, T4X, C4G);
            this.bcQ2x(D4H, this.Tw9n[T4X])
        } catch (e) {}
    };
    hq7j.cxP0x = function (D4H, T4X) {
        var rs0x = this.Tw9n[T4X];
        if (!!rs0x && this.pj9a(D4H, T4X, 2)) this.bcQ2x(D4H, rs0x)
    };
    hq7j.bda2x = function (D4H, T4X, C4G) {
        C4G = parseInt(C4G);
        if (isNaN(C4G)) return;
        this.blR4V(D4H, T4X, C4G);
        this.bcQ2x(D4H, this.Tw9n[T4X])
    };
    hq7j.bDa8S = function (D4H, T4X) {
        this.bda2x(D4H, T4X, this.pj9a(D4H, T4X))
    };
    hq7j.bDb8T = function (D4H, T4X) {
        this.bda2x(D4H, T4X, a3x.fT6N(D4H, T4X))
    };
    hq7j.bDf8X = function (D4H, T4X, t4x) {
        var C4G = this.zt2x(this.pj9a(D4H, T4X), this.pj9a(D4H, "type"));
        this.bda2x(D4H, T4X, C4G)
    };
    hq7j.cxO0x = function () {
        var gm6g = /^input|textarea$/i;
        var Hf4j = function (d4h) {
            this.pg9X(h4l.U4Y(d4h))
        };
        var FO4S = function (d4h) {
            var f4j = h4l.U4Y(d4h);
            if (!this.pj9a(f4j, "ignore", 2)) {
                this.bDK8C(f4j)
            }
        };
        return function (f4j) {
            if (this.pj9a(f4j, "autoFocus", 2)) this.zu2x = f4j;
            var pK9B = a3x.fT6N(f4j, "placeholder");
            if (!!pK9B && pK9B != "null") a3x.gb6V(f4j, this.zv2x);
            if (!!this.bAX8P && gm6g.test(f4j.tagName)) a3x.mo8g(f4j, this.bAX8P);
            var D4H = a3x.ld8V(f4j);
            this.cxP0x(D4H, "required");
            this.cxR0x(D4H, "type");
            this.cxQ0x(D4H, "pattern");
            this.bDb8T(D4H, "maxlength");
            this.bDb8T(D4H, "minlength");
            this.bDa8S(D4H, "maxLength");
            this.bDa8S(D4H, "minLength");
            this.bDf8X(D4H, "min");
            this.bDf8X(D4H, "max");
            var T4X = f4j.name;
            this.pU9L[T4X + "-tip"] = this.pj9a(f4j, "tip");
            this.pU9L[T4X + "-error"] = this.pj9a(f4j, "message");
            this.pg9X(f4j);
            var bv4z = this.Ef3x[D4H],
                j4n = (bv4z || Z4d).data || Z4d,
                TC9t = this.pj9a(f4j, "counter", 2);
            if (TC9t && (j4n.maxlength || j4n.maxLength)) {
                a3x.cyc0x(D4H, {
                    nid: this.DP3x.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bv4z && gm6g.test(f4j.tagName)) {
                this.bT5Y([
                    [f4j, "focus", Hf4j.g4k(this)],
                    [f4j, "blur", FO4S.g4k(this)]
                ])
            } else if (this.pj9a(f4j, "focus", 2)) {
                this.bT5Y([
                    [f4j, "focus", Hf4j.g4k(this)]
                ])
            }
        }
    }();
    hq7j.cxX0x = function () {
        var Fk4o = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bdi2x(v))
            }
        };
        var cxN0x = {
            required: function (f4j) {
                var t4x = f4j.type,
                    cxM0x = !f4j.value,
                    cxK0x = (t4x == "checkbox" || t4x == "radio") && !f4j.checked;
                if (cxK0x || cxM0x) return -1
            },
            type: function (f4j, e4i) {
                var cY5d = this.bBB8t[e4i.type],
                    eG6A = f4j.value.trim(),
                    cxJ0x = !!cY5d.test && !cY5d.test(eG6A),
                    cxH0x = k4o.gr6l(cY5d) && !cY5d.call(this, eG6A);
                if (cxJ0x || cxH0x) return -2
            },
            pattern: function (f4j, e4i) {
                if (!e4i.pattern.test(f4j.value)) return -3
            },
            maxlength: function (f4j, e4i) {
                if (f4j.value.length > e4i.maxlength) return -4
            },
            minlength: function (f4j, e4i) {
                if (f4j.value.length < e4i.minlength) return -5
            },
            maxLength: function (f4j, e4i) {
                if (k4o.fm6g(f4j.value) > e4i.maxLength) return -4
            },
            minLength: function (f4j, e4i) {
                if (k4o.fm6g(f4j.value) < e4i.minLength) return -5
            },
            min: function (f4j, e4i) {
                var gz7s = this.zt2x(f4j.value, e4i.type);
                if (isNaN(gz7s) || gz7s < e4i.min) return -6
            },
            max: function (f4j, e4i) {
                var gz7s = this.zt2x(f4j.value, e4i.type);
                if (isNaN(gz7s) || gz7s > e4i.max) return -7
            }
        };
        return function (e4i) {
            this.bBB8t = NEJ.X(NEJ.X({}, Fk4o), e4i.type);
            this.Tw9n = NEJ.X(NEJ.X({}, cxN0x), e4i.attr)
        }
    }();
    hq7j.bcQ2x = function (D4H, wx1x) {
        if (!k4o.gr6l(wx1x)) return;
        var bv4z = this.Ef3x[D4H];
        if (!bv4z || !bv4z.func) {
            bv4z = bv4z || {};
            bv4z.func = [];
            this.Ef3x[D4H] = bv4z
        }
        bv4z.func.push(wx1x)
    };
    hq7j.blR4V = function (D4H, T4X, C4G) {
        if (!T4X) return;
        var bv4z = this.Ef3x[D4H];
        if (!bv4z || !bv4z.data) {
            bv4z = bv4z || {};
            bv4z.data = {};
            this.Ef3x[D4H] = bv4z
        }
        bv4z.data[T4X] = C4G
    };
    hq7j.bDK8C = function (f4j) {
        f4j = this.B4F(f4j) || f4j;
        var bv4z = this.Ef3x[a3x.ld8V(f4j)];
        if (!f4j || !bv4z || !this.bcC2x(f4j)) return !0;
        var o4s;
        k4o.ex6r(bv4z.func, function (eF6z) {
            o4s = eF6z.call(this, f4j, bv4z.data);
            return o4s != null
        }, this);
        if (o4s == null) {
            var d4h = {
                target: f4j,
                form: this.fZ6T
            };
            this.z4D("oncheck", d4h);
            o4s = d4h.value
        }
        var d4h = {
            target: f4j,
            form: this.fZ6T
        };
        if (o4s != null) {
            d4h.code = o4s;
            this.z4D("oninvalid", d4h);
            if (!d4h.stopped) {
                this.cxG0x(f4j, d4h.value || this.pU9L[f4j.name + o4s])
            }
        } else {
            this.z4D("onvalid", d4h);
            if (!d4h.stopped) this.cxF0x(f4j, d4h.value)
        }
        return o4s == null
    };
    hq7j.yQ2x = function () {
        var cxE0x = function (TR9I, Ub9S) {
            return TR9I == Ub9S ? "block" : "none"
        };
        var cxD0x = function (f4j, t4x, bE4I) {
            var pK9B = bFt9k.call(this, f4j, t4x);
            if (!pK9B && !!bE4I) pK9B = a3x.HW4a(f4j, this.DP3x[t4x]);
            return pK9B
        };
        var bFt9k = function (f4j, t4x) {
            var pK9B;
            if (t4x == "tp") pK9B = a3x.B4F(f4j.name + "-tip");
            if (!pK9B) pK9B = a3x.F4J(f4j.parentNode, this.DP3x[t4x].nid)[0];
            return pK9B
        };
        return function (f4j, bE4I, t4x) {
            f4j = this.B4F(f4j) || f4j;
            if (!f4j) return;
            t4x == "er" ? a3x.w4A(f4j, this.bBe8W) : a3x.v4z(f4j, this.bBe8W);
            var pK9B = cxD0x.call(this, f4j, t4x, bE4I);
            if (!!pK9B && !!bE4I) pK9B.innerHTML = bE4I;
            k4o.ex6r(this.DP3x, function (C4G, K4O) {
                a3x.Y4c(bFt9k.call(this, f4j, K4O), "display", cxE0x(t4x, K4O))
            }, this)
        }
    }();
    hq7j.pg9X = function (f4j, bE4I) {
        this.yQ2x(f4j, bE4I || this.pU9L[f4j.name + "-tip"], "tp");
        return this
    };
    hq7j.cxF0x = function (f4j, bE4I) {
        this.yQ2x(f4j, bE4I || this.pU9L[f4j.name + "-pass"] || this.pU9L.pass, "ok");
        return this
    };
    hq7j.cxG0x = function (f4j, bE4I) {
        this.yQ2x(f4j, bE4I || this.pU9L[f4j.name + "-error"], "er");
        return this
    };
    hq7j.ip7i = function () {
        var gm6g = /^(?:radio|checkbox)$/i;
        var cxC0x = function (C4G) {
            return C4G == null ? "" : C4G
        };
        var bFI9z = function (C4G, f4j) {
            if (gm6g.test(f4j.type || "")) {
                f4j.checked = C4G == f4j.value
            } else {
                f4j.value = cxC0x(C4G)
            }
        };
        return function (T4X, C4G) {
            var f4j = this.B4F(T4X);
            if (!f4j) return this;
            if (f4j.tagName == "SELECT" || !f4j.length) {
                bFI9z(C4G, f4j)
            } else {
                k4o.bb4f(f4j, bFI9z.g4k(null, C4G))
            }
            return this
        }
    }();
    hq7j.B4F = function (T4X) {
        return this.fZ6T.elements[T4X]
    };
    hq7j.cAF1x = function () {
        return this.fZ6T
    };
    hq7j.bcn2x = function () {
        var gm6g = /^radio|checkbox$/i,
            jE7x = /^number|date$/;
        var cxA0x = function (bu4y, f4j) {
            var T4X = f4j.name,
                C4G = f4j.value,
                bv4z = bu4y[T4X],
                t4x = this.pj9a(f4j, "type");
            if (jE7x.test(t4x)) C4G = this.zt2x(C4G, t4x);
            if (gm6g.test(f4j.type) && !f4j.checked) {
                C4G = this.pj9a(f4j, "value");
                if (!C4G) return
            }
            if (!!bv4z) {
                if (!k4o.eE6y(bv4z)) {
                    bv4z = [bv4z];
                    bu4y[T4X] = bv4z
                }
                bv4z.push(C4G)
            } else {
                bu4y[T4X] = C4G
            }
        };
        return function () {
            var o4s = {};
            k4o.bb4f(this.fZ6T.elements, function (f4j) {
                if (this.cxW0x(f4j)) cxA0x.call(this, o4s, f4j)
            }, this);
            return o4s
        }
    }();
    hq7j.Lb5g = function () {
        var cxz0x = function (f4j) {
            if (this.bcC2x(f4j)) this.pg9X(f4j)
        };
        return function () {
            this.fZ6T.reset();
            k4o.bb4f(this.fZ6T.elements, cxz0x, this);
            return this
        }
    }();
    hq7j.cyl0x = function () {
        this.fZ6T.submit();
        return this
    };
    hq7j.gh6b = function () {
        var cxm0x = function (f4j) {
            if (this.bcC2x(f4j)) this.cxO0x(f4j)
        };
        return function () {
            this.Ef3x = {};
            k4o.bb4f(this.fZ6T.elements, cxm0x, this);
            return this
        }
    }();
    hq7j.cxl0x = function (f4j) {
        f4j = this.B4F(f4j) || f4j;
        if (!!f4j) return this.bDK8C(f4j);
        var o4s = !0;
        k4o.bb4f(this.fZ6T.elements, function (f4j) {
            var kz8r = this.cxl0x(f4j);
            o4s = o4s && kz8r
        }, this);
        return o4s
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        b3x, J4N;
    n4r.bcb2x = NEJ.C();
    b3x = n4r.bcb2x.O4S(n4r.ee6Y);
    J4N = n4r.bcb2x.cl5q;
    b3x.bS5X = function () {
        this.cd5i();
        h4l.s4w(this.m4q, "click", this.cF5K.g4k(this));
        h4l.s4w(document, "mousewheel", this.ze2x.g4k(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.ze2x.g4k(this))
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        if (e4i.jst) {
            this.m4q.innerHTML = a3x.bW5b(e4i.jst, e4i.data)
        } else if (e4i.ntp) {
            this.m4q.appendChild(a3x.dq5v(e4i.ntp))
        } else if (e4i.txt) {
            this.m4q.innerHTML = a3x.ik7d(e4i.txt)
        } else if (e4i.html) {
            this.m4q.innerHTML = e4i.html
        }
        var Tj9a = this.m4q.getElementsByTagName("form");
        if (Tj9a.length) {
            this.fZ6T = H4L.Tu9l.A4E({
                form: Tj9a[0]
            })
        }
        this.Go4s = a3x.da5f(this.m4q)[0]
    };
    b3x.bz4D = function () {
        this.z4D("ondestroy");
        this.bF4J();
        this.m4q.innerHTML = "";
        delete this.Go4s
    };
    b3x.cF5K = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action"),
            j4n = this.fZ6T ? this.fZ6T.bcn2x() : null,
            d4h = {
                action: a3x.u4y(f4j, "action")
            };
        if (j4n) d4h.data = j4n;
        if (d4h.action) {
            this.z4D("onaction", d4h);
            if (d4h.stopped) return;
            this.br4v()
        }
    };
    b3x.ze2x = function (d4h) {
        if (!this.Go4s) return;
        h4l.bf4j(d4h);
        var dl5q = d4h.wheelDelta || -d4h.detail;
        this.Go4s.scrollTop -= dl5q
    };
    l4p.jR8J = function (e4i) {
        e4i.destroyable = e4i.destroyable || true;
        e4i.title = e4i.title || "提示";
        e4i.draggable = true;
        e4i.parent = document.body;
        e4i.mask = e4i.mask || true;
        var zH2x = n4r.bcb2x.A4E(e4i);
        zH2x.L4P();
        return zH2x
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bIh9Y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Th9Y = {},
        Gs4w = {};
    for (var i = 0, l = bIh9Y.length, c; i < l; i++) {
        c = bIh9Y.charAt(i);
        Th9Y[i] = c;
        Gs4w[c] = i
    }
    var cxh0x = function (hT7M) {
        var r4v = 0,
            c, o4s = [];
        while (r4v < hT7M.length) {
            c = hT7M[r4v];
            if (c < 128) {
                o4s.push(String.fromCharCode(c));
                r4v++
            } else if (c > 191 && c < 224) {
                o4s.push(String.fromCharCode((c & 31) << 6 | hT7M[r4v + 1] & 63));
                r4v += 2
            } else {
                o4s.push(String.fromCharCode((c & 15) << 12 | (hT7M[r4v + 1] & 63) << 6 | hT7M[r4v + 2] & 63));
                r4v += 3
            }
        }
        return o4s.join("")
    };
    var cxe0x = function () {
        var hj7c = /\r\n/g;
        return function (j4n) {
            j4n = j4n.replace(hj7c, "\n");
            var o4s = [],
                ow9n = String.fromCharCode(237);
            if (ow9n.charCodeAt(0) < 0)
                for (var i = 0, l = j4n.length, c; i < l; i++) {
                    c = j4n.charCodeAt(i);
                    c > 0 ? o4s.push(c) : o4s.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                } else
                    for (var i = 0, l = j4n.length, c; i < l; i++) {
                        c = j4n.charCodeAt(i);
                        if (c < 128) o4s.push(c);
                        else if (c > 127 && c < 2048) o4s.push(c >> 6 | 192, c & 63 | 128);
                        else o4s.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                    }
            return o4s
        }
    }();
    var KY5d = function (hT7M) {
        var r4v = 0,
            o4s = [],
            eU6O = hT7M.length % 3;
        if (eU6O == 1) hT7M.push(0, 0);
        if (eU6O == 2) hT7M.push(0);
        while (r4v < hT7M.length) {
            o4s.push(Th9Y[hT7M[r4v] >> 2], Th9Y[(hT7M[r4v] & 3) << 4 | hT7M[r4v + 1] >> 4], Th9Y[(hT7M[r4v + 1] & 15) << 2 | hT7M[r4v + 2] >> 6], Th9Y[hT7M[r4v + 2] & 63]);
            r4v += 3
        }
        if (eU6O == 1) o4s[o4s.length - 1] = o4s[o4s.length - 2] = "=";
        if (eU6O == 2) o4s[o4s.length - 1] = "=";
        return o4s.join("")
    };
    var bJS0x = function () {
        var qW0x = /\n|\r|=/g;
        return function (j4n) {
            var r4v = 0,
                o4s = [];
            j4n = j4n.replace(qW0x, "");
            for (var i = 0, l = j4n.length; i < l; i += 4) o4s.push(Gs4w[j4n.charAt(i)] << 2 | Gs4w[j4n.charAt(i + 1)] >> 4, (Gs4w[j4n.charAt(i + 1)] & 15) << 4 | Gs4w[j4n.charAt(i + 2)] >> 2, (Gs4w[j4n.charAt(i + 2)] & 3) << 6 | Gs4w[j4n.charAt(i + 3)]);
            var bm4q = o4s.length,
                eU6O = j4n.length % 4;
            if (eU6O == 2) o4s = o4s.slice(0, bm4q - 2);
            if (eU6O == 3) o4s = o4s.slice(0, bm4q - 1);
            return o4s
        }
    }();
    p.cys0x = function (j4n) {
        return cxh0x(bJS0x(j4n))
    };
    p.cxb0x = function (j4n) {
        var hT7M = bJS0x(j4n),
            dt5y = hT7M.length,
            ia7T;
        var r4v = 0;
        while (ia7T = hT7M[r4v]) {
            if (ia7T > 128) {
                hT7M[r4v] = ia7T - 256
            }
            r4v++
        }
        return hT7M
    };
    p.cxa0x = function (j4n) {
        try {
            return window.btoa(j4n)
        } catch (ex) {
            return KY5d(cxe0x(j4n))
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        x4B = c4g("nej.j"),
        N4R = c4g("nej.p"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        y4C = c4g("nm.w"),
        bB4F = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b3x, J4N;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n4r.bKP0x = NEJ.C();
    b3x = n4r.bKP0x.O4S(n4r.ee6Y);
    b3x.ca5f = function () {
        this.cb5g = "m-download-layer"
    };
    b3x.bS5X = function () {
        this.cd5i();
        var i4m = a3x.F4J(this.m4q, "j-flag");
        this.bdN2x = i4m[0];
        this.bdR2x = i4m[1];
        this.bLa0x = i4m[2];
        x4B.bo4s("/client/version/get", {
            type: "json",
            onload: this.cwZ0x.g4k(this)
        });
        if (N4R.Gz4D.mac) {
            a3x.v4z(this.bdN2x.parentNode, "f-hide");
            a3x.w4A(this.bdR2x.parentNode, "f-hide");
            a3x.w4A(this.bLa0x, "f-hide")
        } else {
            a3x.w4A(this.bdN2x.parentNode, "f-hide");
            a3x.v4z(this.bdR2x.parentNode, "f-hide");
            a3x.v4z(this.bLa0x, "f-hide")
        }
    };
    b3x.bj4n = function (e4i) {
        e4i.clazz = " m-layer-down";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "下载";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bk4o(e4i);
        this.bT5Y([
            [this.m4q, "click", this.bP4T.g4k(this)]
        ]);
        this.ev6p = TYPE_MAP[e4i.type];
        this.gO7H = e4i.id
    };
    b3x.bz4D = function () {
        this.bF4J()
    };
    b3x.zc2x = function () {
        this.br4v()
    };
    b3x.CD3x = function (d4h) {
        this.z4D("onok", C4G);
        this.br4v()
    };
    b3x.bP4T = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action");
        switch (a3x.u4y(f4j, "action")) {
            case "download":
                this.br4v();
                window.open(a3x.u4y(f4j, "src"));
                break;
            case "orpheus":
                this.br4v();
                location.href = "orpheus://" + k4o.cxa0x(JSON.stringify({
                    type: this.ev6p,
                    id: this.gO7H,
                    cmd: "download"
                }));
                break
        }
    };
    b3x.cwZ0x = function (d4h) {
        if ((d4h || Z4d).code == 200) {
            this.Kx5C = d4h.data;
            this.bdN2x.innerText = "V" + this.Kx5C.mac;
            this.bdR2x.innerText = "V" + this.Kx5C.pc
        }
    };
    l4p.KS5X = function (e4i) {
        n4r.bKP0x.A4E(e4i).L4P()
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        k4o = c4g("nej.u"),
        q4u = c4g("nm.d"),
        bR5W = {};
    q4u.B4F = function (K4O) {
        return bR5W[K4O]
    };
    q4u.mM8E = function (K4O, bd4h) {
        bR5W[K4O] = bd4h
    };
    q4u.fg6a = function (j4n) {
        k4o.ex6r(j4n, function (p4t, K4O) {
            var bd4h = bR5W[K4O] || {};
            NEJ.X(bd4h, p4t);
            bR5W[K4O] = bd4h
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        bc4g = c4g("nej.h");
    bc4g.bbz1x = function (K4O) {
        return localStorage.getItem(K4O)
    };
    bc4g.bbx1x = function (K4O, C4G) {
        localStorage.setItem(K4O, C4G)
    };
    bc4g.beo2x = function (K4O) {
        localStorage.removeItem(K4O)
    };
    bc4g.bes2x = function () {
        localStorage.clear()
    };
    bc4g.cwY0x = function () {
        var o4s = [];
        for (var i = 0, l = localStorage.length; i < l; i++) o4s.push(localStorage.key(i));
        return o4s
    };
    bc4g.beu2x = function () {
        (document.onstorageready || bn4r)()
    };
    bc4g.bew2x = function () {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        N4R = c4g("nej.p"),
        ia7T = c4g("nej.c"),
        bc4g = c4g("nej.h"),
        rI0x;
    if (N4R.mC8u.trident || !!window.localStorage) return;
    var cwX0x = function () {
        var rC0x, eC6w;
        var biF3x = function () {
            rC0x = document.createElement("div");
            NEJ.X(rC0x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rC0x);
            rC0x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + ia7T.B4F("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var PT8L = function () {
            eC6w = window.clearTimeout(eC6w);
            var ho7h = rC0x.getElementsByTagName("object")[0];
            if (!!ho7h.initStorage) {
                delete rC0x;
                rI0x = ho7h;
                rI0x.initStorage("nej-storage");
                (document.onstorageready || bn4r)();
                return
            }
            eC6w = window.setTimeout(PT8L, 500)
        };
        return function () {
            if (!!rI0x) return;
            biF3x();
            PT8L()
        }
    }();
    bc4g.bbz1x = bc4g.bbz1x.es6m(function (d4h) {
        d4h.stopped = !0;
        if (!rI0x) return;
        d4h.value = rI0x.getItem(d4h.args[0])
    });
    bc4g.bbx1x = bc4g.bbx1x.es6m(function (d4h) {
        d4h.stopped = !0;
        if (!rI0x) return;
        var bh4l = d4h.args;
        rI0x.setItem(bh4l[0], bh4l[1])
    });
    bc4g.beo2x = bc4g.beo2x.es6m(function (d4h) {
        d4h.stopped = !0;
        if (!rI0x) return;
        rI0x.removeItem(d4h.args[0])
    });
    bc4g.bes2x = bc4g.bes2x.es6m(function (d4h) {
        d4h.stopped = !0;
        if (!!rI0x) rI0x.clear()
    });
    bc4g.beu2x = bc4g.beu2x.es6m(function (d4h) {
        d4h.stopped = !0;
        cwX0x()
    });
    bc4g.bew2x = bc4g.bew2x.es6m(function (d4h) {
        d4h.stopped = !0;
        d4h.value = !!rI0x
    })
})();
(function () {
    var c4g = NEJ.P,
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        bc4g = c4g("nej.h"),
        x4B = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        Q4U = {};
    x4B.vv1x = function (K4O, C4G) {
        var bNx1x = JSON.stringify(C4G);
        try {
            bc4g.bbx1x(K4O, bNx1x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bNx1x != bc4g.bbz1x(K4O)) Q4U[K4O] = C4G;
        return this
    };
    x4B.tp0x = function (K4O) {
        var j4n = JSON.parse(bc4g.bbz1x(K4O) || "null");
        return j4n == null ? Q4U[K4O] : j4n
    };
    x4B.bNJ1x = function (K4O, C4G) {
        var j4n = x4B.tp0x(K4O);
        if (j4n == null) {
            j4n = C4G;
            x4B.vv1x(K4O, j4n)
        }
        return j4n
    };
    x4B.SH9y = function (K4O) {
        delete Q4U[K4O];
        bc4g.beo2x(K4O);
        return this
    };
    x4B.cyu0x = function () {
        var beF2x = function (p4t, K4O, bu4y) {
            delete bu4y[K4O]
        };
        return function () {
            k4o.ex6r(Q4U, beF2x);
            bc4g.bes2x();
            return this
        }
    }();
    x4B.cyv0x = function (o4s) {
        o4s = o4s || {};
        k4o.bb4f(bc4g.cwY0x(), function (K4O) {
            o4s[K4O] = x4B.tp0x(K4O)
        });
        return o4s
    };
    H4L.fG6A.A4E({
        element: document,
        event: "storageready",
        oneventadd: function () {
            if (bc4g.bew2x()) {
                document.onstorageready()
            }
        }
    });
    var cwT0x = function () {
        var cwS0x = function (C4G, K4O, bu4y) {
            bc4g.bbx1x(K4O, JSON.stringify(C4G));
            delete bu4y[K4O]
        };
        return function () {
            k4o.ex6r(Q4U, cwS0x)
        }
    }();
    h4l.s4w(document, "storageready", cwT0x);
    bc4g.beu2x()
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        KO5T;
    if (!!N4R.beG2x) return;
    N4R.beG2x = NEJ.C();
    KO5T = N4R.beG2x.O4S(N4R.cC5H);
    KO5T.cs5x = function () {
        var gn6h = +(new Date),
            mO8G = "dat-" + gn6h;
        return function () {
            this.cw5B();
            var Q4U = this.constructor[mO8G];
            if (!Q4U) {
                Q4U = {};
                this.constructor[mO8G] = Q4U
            }
            this.R4V = Q4U
        }
    }();
    KO5T.B4F = function (K4O) {
        return this.R4V[K4O]
    };
    KO5T.mM8E = function (K4O, C4G) {
        var mP8H = this.R4V[K4O];
        this.R4V[K4O] = C4G;
        h4l.z4D(localCache, "cachechange", {
            key: K4O,
            type: "set",
            oldValue: mP8H,
            newValue: C4G
        });
        return this
    };
    KO5T.cB5G = function (K4O) {
        var mP8H = this.R4V[K4O];
        k4o.Yd0x(this.R4V, K4O);
        h4l.z4D(localCache, "cachechange", {
            key: K4O,
            type: "delete",
            oldValue: mP8H,
            newValue: undefined
        });
        return mP8H
    };
    KO5T.baY1x = function (Cu3x) {
        return NEJ.Q(this.R4V, Cu3x)
    };
    window.localCache = N4R.beG2x.A4E();
    N4R.fG6A.A4E({
        element: localCache,
        event: "cachechange"
    })
})();
(function () {
    var c4g = NEJ.P,
        fo6i = NEJ.R,
        bn4r = NEJ.F,
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        N4R = c4g("nej.ut"),
        mO8G = "dat-" + +(new Date),
        mV8N;
    if (!!N4R.beL2x) return;
    N4R.beL2x = NEJ.C();
    mV8N = N4R.beL2x.O4S(N4R.cC5H);
    mV8N.cs5x = function () {
        this.cw5B();
        this.R4V = this.constructor[mO8G];
        if (!this.R4V) {
            this.R4V = {};
            this.R4V[mO8G + "-l"] = {};
            this.constructor[mO8G] = this.R4V
        }
    };
    mV8N.rl0x = function (K4O) {
        return this.R4V[K4O]
    };
    mV8N.pa9R = function (K4O, C4G) {
        this.R4V[K4O] = C4G
    };
    mV8N.ll8d = function (K4O, lq8i) {
        var j4n = this.rl0x(K4O);
        if (j4n == null) {
            j4n = lq8i;
            this.pa9R(K4O, j4n)
        }
        return j4n
    };
    mV8N.cwR0x = function (K4O) {
        if (K4O != null) {
            delete this.R4V[K4O];
            return
        }
        k4o.ex6r(this.R4V, function (p4t, K4O) {
            if (K4O == mO8G + "-l") return;
            this.cwR0x(K4O)
        }, this)
    };
    mV8N.cyw0x = function (K4O) {
        if (!!x4B.SH9y) return x4B.SH9y(K4O)
    };
    mV8N.cwM0x = function (K4O) {
        if (!!x4B.tp0x) return x4B.tp0x(K4O)
    };
    mV8N.cwK0x = function (K4O, C4G) {
        if (!!x4B.vv1x) x4B.vv1x(K4O, C4G)
    };
    mV8N.DT3x = function (K4O, lq8i) {
        var j4n = this.Ss8k(K4O);
        if (j4n == null) {
            j4n = lq8i;
            this.we1x(K4O, j4n)
        }
        return j4n
    };
    mV8N.Ss8k = function (K4O) {
        var j4n = this.rl0x(K4O);
        if (j4n != null) return j4n;
        j4n = this.cwM0x(K4O);
        if (j4n != null) this.pa9R(K4O, j4n);
        return j4n
    };
    mV8N.we1x = function (K4O, C4G) {
        this.cwK0x(K4O, C4G);
        this.pa9R(K4O, C4G)
    };
    mV8N.buW6Q = function (K4O) {
        if (K4O != null) {
            delete this.R4V[K4O];
            if (!!x4B.SH9y) x4B.SH9y(K4O);
            return
        }
        k4o.ex6r(this.R4V, function (p4t, K4O) {
            if (K4O == mO8G + "-l") return;
            this.buW6Q(K4O)
        }, this)
    };
    mV8N.cyx0x = function () {
        this.buW6Q();
        return this
    };
    mV8N.cyy0x = function (K4O) {
        var j4n = this.R4V[mO8G + "-l"];
        delete j4n[K4O]
    };
    mV8N.bfm2x = function (K4O) {
        var j4n = this.R4V[mO8G + "-l"],
            bh4l = fo6i.slice.call(arguments, 1);
        k4o.bb4f(j4n[K4O], function (dE5J) {
            try {
                dE5J.apply(null, bh4l)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j4n[K4O]
    };
    mV8N.bfo2x = function (K4O, dE5J) {
        dE5J = dE5J || bn4r;
        var i4m = this.R4V[mO8G + "-l"][K4O];
        if (!i4m) {
            i4m = [dE5J];
            this.R4V[mO8G + "-l"][K4O] = i4m;
            return !1
        }
        i4m.push(dE5J);
        return !0
    };
    mV8N.cwG0x = function (i4m, be4i, gd6X) {
        if (!i4m) return !1;
        be4i = parseInt(be4i) || 0;
        gd6X = parseInt(gd6X) || 0;
        if (!gd6X) {
            if (!i4m.loaded) return !1;
            gd6X = i4m.length
        }
        if (!!i4m.loaded) gd6X = Math.min(gd6X, i4m.length - be4i);
        for (var i = 0; i < gd6X; i++)
            if (!i4m[be4i + i]) return !1;
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        b3x, J4N;
    if (!!N4R.Sl8d) return;
    N4R.Sl8d = NEJ.C();
    b3x = N4R.Sl8d.O4S(N4R.beL2x);
    J4N = N4R.Sl8d.cl5q;
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.vI1x = e4i.key || "id";
        this.bi4m = e4i.data || Z4d;
        this.cwE0x = !!e4i.autogc;
        this.cwD0x(e4i.id)
    };
    b3x.bz4D = function () {
        this.bF4J();
        if (!!this.dY6S) {
            this.bvM6G()
        }
    };
    b3x.cwD0x = function (D4H) {
        var Q4U;
        if (!!D4H) {
            Q4U = this.R4V[D4H];
            if (!Q4U) {
                Q4U = {};
                this.R4V[D4H] = Q4U
            }
        }
        Q4U = Q4U || this.R4V;
        Q4U.hash = Q4U.hash || {};
        this.Sj8b = Q4U
    };
    b3x.bvM6G = function () {
        this.dY6S = window.clearTimeout(this.dY6S);
        var bu4y = {};
        k4o.ex6r(this.Sj8b, function (i4m, K4O) {
            if (K4O == "hash") return;
            if (!k4o.eE6y(i4m)) return;
            k4o.bb4f(i4m, function (p4t) {
                if (!p4t) return;
                bu4y[p4t[this.vI1x]] = !0
            }, this)
        }, this);
        k4o.ex6r(this.bao1x(), function (p4t, D4H, dV6P) {
            if (!bu4y[D4H]) {
                delete dV6P[D4H]
            }
        })
    };
    b3x.cwC0x = function () {
        if (!!this.dY6S) {
            this.dY6S = window.clearTimeout(this.dY6S)
        }
        this.dY6S = window.setTimeout(this.bvM6G.g4k(this), 150)
    };
    b3x.zi2x = function (p4t, bah1x) {
        p4t = this.bwd6X(p4t, bah1x) || p4t;
        if (!p4t) return null;
        var K4O = p4t[this.vI1x];
        if (K4O != null) {
            var hW7P = this.bao1x()[K4O];
            if (!!hW7P) p4t = NEJ.X(hW7P, p4t);
            this.bao1x()[K4O] = p4t
        }
        delete p4t.bwv6p;
        return p4t
    };
    b3x.bwd6X = bn4r;
    b3x.bfH2x = function (K4O, p4t) {
        if (!p4t) return;
        if (!k4o.eE6y(p4t)) {
            var i4m = this.hh7a(K4O),
                p4t = this.zi2x(p4t, K4O);
            if (!!p4t) i4m.unshift(p4t);
            return
        }
        k4o.mD8v(p4t, this.bfH2x.g4k(this, K4O))
    };
    b3x.Se8W = function (K4O, ct5y) {
        var i4m = this.hh7a(K4O);
        i4m.length = Math.max(i4m.length, ct5y);
        this.bfJ2x(K4O);
        return this
    };
    b3x.jl7e = function (K4O) {
        return this.hh7a(K4O).length
    };
    b3x.bfJ2x = function (K4O, ol9c) {
        this.hh7a(K4O).loaded = ol9c != !1;
        return this
    };
    b3x.ZZ1x = function (K4O) {
        return !!this.hh7a(K4O).loaded
    };
    b3x.tP0x = function (K4O, i4m) {
        this.tQ0x(K4O);
        this.bfK2x({
            key: K4O,
            offset: 0,
            limit: i4m.length + 1
        }, {
            list: i4m,
            total: i4m.length
        })
    };
    b3x.hh7a = function () {
        var Fh4l = function (K4O) {
            return (K4O || "") + (!K4O ? "" : "-") + "list"
        };
        return function (K4O) {
            var K4O = Fh4l(K4O),
                i4m = this.Sj8b[K4O];
            if (!i4m) {
                i4m = [];
                this.Sj8b[K4O] = i4m
            }
            return i4m
        }
    }();
    b3x.bao1x = function () {
        var dV6P = this.Sj8b.hash;
        if (!dV6P) {
            dV6P = {};
            this.Sj8b.hash = dV6P
        }
        return dV6P
    };
    b3x.bfL2x = function () {
        var Fh4l = function (e4i) {
            return "r-" + e4i.key
        };
        return function (e4i) {
            var iy7r = NEJ.X({}, e4i),
                nu9l = Fh4l(iy7r);
            if (!this.bfo2x(nu9l, this.z4D.g4k(this))) {
                iy7r.rkey = nu9l;
                iy7r.onload = this.cwA0x.g4k(this, iy7r);
                this.z4D("dopullrefresh", iy7r)
            }
            return this
        }
    }();
    b3x.cwA0x = function (e4i, i4m) {
        this.bfH2x(e4i.key, i4m);
        this.bfm2x(e4i.rkey, "onpullrefresh", e4i)
    };
    b3x.kQ8I = function () {
        var Fh4l = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.offset + "-" + e4i.limit
        };
        return function (e4i) {
            e4i = e4i || Z4d;
            var iy7r = {
                    key: "" + e4i.key || "",
                    ext: e4i.ext || null,
                    data: e4i.data || null,
                    offset: parseInt(e4i.offset) || 0,
                    limit: parseInt(e4i.limit) || 0
                },
                i4m = this.hh7a(iy7r.key);
            if (this.cwG0x(i4m, iy7r.offset, iy7r.limit)) {
                this.z4D("onlistload", iy7r);
                return this
            }
            var nu9l = Fh4l(iy7r);
            if (!this.bfo2x(nu9l, this.z4D.g4k(this))) {
                iy7r.rkey = nu9l;
                iy7r.onload = this.bfK2x.g4k(this, iy7r);
                this.z4D("doloadlist", iy7r)
            }
            return this
        }
    }();
    b3x.bfK2x = function () {
        var Gq4u = function (p4t, r4v, i4m) {
            if (!!p4t) {
                return !0
            }
            i4m.splice(r4v, 1)
        };
        return function (e4i, o4s) {
            e4i = e4i || Z4d;
            var K4O = e4i.key,
                be4i = e4i.offset,
                byt7m = this.hh7a(K4O);
            var i4m = o4s || [];
            if (!k4o.eE6y(i4m)) {
                i4m = o4s.result || o4s.list || [];
                var ct5y = parseInt(o4s.total);
                if (!isNaN(ct5y) || ct5y > i4m.length) {
                    this.Se8W(K4O, ct5y)
                }
            }
            k4o.bb4f(i4m, function (p4t, r4v) {
                byt7m[be4i + r4v] = this.zi2x(p4t, K4O)
            }, this);
            if (i4m.length < e4i.limit) {
                this.bfJ2x(K4O);
                k4o.mD8v(byt7m, Gq4u)
            }
            this.bfm2x(e4i.rkey, "onlistload", e4i)
        }
    }();
    b3x.tQ0x = function () {
        var Gq4u = function (p4t, r4v, i4m) {
            i4m.splice(r4v, 1)
        };
        return function (K4O) {
            var i4m = this.hh7a(K4O);
            k4o.mD8v(i4m, Gq4u);
            this.bfJ2x(K4O, !1);
            if (this.cwE0x) {
                this.cwC0x()
            }
            return this
        }
    }();
    b3x.byu7n = function (p4t, bah1x) {
        return !p4t.bwv6p
    };
    b3x.eu6o = function (D4H) {
        return this.bao1x()[D4H]
    };
    b3x.cyz0x = function (D4H) {
        var p4t = this.eu6o(D4H);
        if (!!p4t) p4t.bwv6p = !0
    };
    b3x.ZO1x = function () {
        var Fh4l = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.id
        };
        return function (e4i) {
            e4i = e4i || Z4d;
            var D4H = e4i[this.vI1x],
                iy7r = {
                    id: D4H,
                    ext: e4i.ext,
                    data: e4i.data || {},
                    key: "" + e4i.key || ""
                };
            p4t = this.eu6o(D4H);
            iy7r.data[this.vI1x] = D4H;
            if (!!p4t && this.byu7n(p4t, iy7r.key)) {
                this.z4D("onitemload", iy7r);
                return this
            }
            var nu9l = Fh4l(iy7r);
            if (!this.bfo2x(nu9l, this.z4D.g4k(this))) {
                iy7r.rkey = nu9l;
                iy7r.onload = this.cwy0x.g4k(this, iy7r);
                this.z4D("doloaditem", iy7r)
            }
            return this
        }
    }();
    b3x.cwy0x = function (e4i, p4t) {
        e4i = e4i || Z4d;
        this.zi2x(p4t, e4i.key);
        this.bfm2x(e4i.rkey, "onitemload", e4i)
    };
    b3x.iY7R = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.yN2x.g4k(this, e4i);
        this.z4D("doadditem", e4i)
    };
    b3x.yN2x = function (e4i, p4t) {
        var K4O = e4i.key;
        p4t = this.zi2x(p4t, K4O);
        if (!!p4t) {
            var eO6I = 0,
                i4m = this.hh7a(K4O);
            if (!e4i.push) {
                eO6I = -1;
                var be4i = e4i.offset || 0;
                i4m.splice(be4i, 0, p4t)
            } else if (i4m.loaded) {
                eO6I = 1;
                i4m.push(p4t)
            } else {
                i4m.length++
            }
        }
        var d4h = {
            key: K4O,
            flag: eO6I,
            data: p4t,
            action: "add",
            ext: e4i.ext
        };
        this.z4D("onitemadd", d4h);
        return d4h
    };
    b3x.KC5H = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.bfS3x.g4k(this, e4i);
        this.z4D("dodeleteitem", e4i)
    };
    b3x.bfS3x = function (e4i, bze7X) {
        var p4t, K4O = e4i.key;
        if (!!bze7X) {
            p4t = this.eu6o(e4i.id) || null;
            var D4H = e4i.id,
                cww0x = this.vI1x,
                i4m = this.hh7a(K4O),
                r4v = k4o.dd5i(i4m, function (hW7P) {
                    return !!hW7P && hW7P[cww0x] == D4H
                });
            if (r4v >= 0) i4m.splice(r4v, 1)
        }
        var d4h = {
            key: K4O,
            data: p4t,
            action: "delete",
            ext: e4i.ext
        };
        this.z4D("onitemdelete", d4h);
        return d4h
    };
    b3x.ZJ1x = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.cwv0x.g4k(this, e4i);
        this.z4D("doupdateitem", e4i)
    };
    b3x.cwv0x = function (e4i, p4t) {
        var K4O = e4i.key;
        if (!!p4t) p4t = this.zi2x(p4t, K4O);
        var d4h = {
            key: K4O,
            data: p4t,
            action: "update",
            ext: e4i.ext
        };
        this.z4D("onitemupdate", d4h);
        return d4h
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        b3x;
    if (!!N4R.bgd3x) return;
    N4R.bgd3x = NEJ.C();
    b3x = N4R.bgd3x.O4S(N4R.Sl8d);
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.blU4Y({
            doloadlist: this.Zx1x.g4k(this),
            doloaditem: this.bgf3x.g4k(this),
            doadditem: this.bzA7t.g4k(this),
            dodeleteitem: this.Zu1x.g4k(this),
            doupdateitem: this.Zn1x.g4k(this),
            dopullrefresh: this.bzQ7J.g4k(this)
        })
    };
    b3x.Zx1x = bn4r;
    b3x.bzQ7J = bn4r;
    b3x.bgf3x = bn4r;
    b3x.bzA7t = bn4r;
    b3x.Zu1x = bn4r;
    b3x.Zn1x = bn4r
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        b3x, J4N;
    q4u.hs7l = NEJ.C();
    b3x = q4u.hs7l.O4S(H4L.bgd3x);
    b3x.co5t = function () {
        var RF8x = location.protocol + "//" + location.host;
        var cwu0x = function (bs4w, j4n) {
            var bu4y = {
                conf: {},
                data: {},
                urls: []
            };
            k4o.bb4f(bs4w, function (K4O, r4v, i4m) {
                var bd4h = q4u.B4F(K4O);
                if (!bd4h) return;
                var bgr3x = bAr7k(bd4h.url, j4n[K4O]);
                bu4y.urls.push(bgr3x);
                bu4y.conf[bgr3x] = bd4h;
                bu4y.data[bgr3x] = JSON.stringify(j4n[K4O] == null ? "" : j4n[K4O])
            });
            return bu4y
        };
        var bAr7k = function (V4Z, j4n) {
            return V4Z.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j4n[$2] || $1
            })
        };
        var bAC7v = function (bd4h, e4i, d4h) {
            h4l.z4D(window, "requesterror", d4h);
            if (!!d4h.stopped) return;
            var Kw5B = bd4h.onerror || e4i.onerror;
            if (k4o.fA6u(Kw5B)) {
                this.z4D(Kw5B, d4h, e4i)
            } else {
                (Kw5B || bn4r).call(this, d4h, e4i)
            }
            var d4h = {
                result: d4h,
                option: e4i
            };
            this.z4D("onerror", d4h);
            if (!d4h.stopped)(bd4h.onmessage || bn4r).call(this, d4h.result.code, d4h.result)
        };
        var bAI7B = function (P4T, bd4h, e4i) {
            var o4s = P4T;
            if (k4o.gr6l(bd4h.format)) {
                o4s = bd4h.format.call(this, P4T, e4i)
            }
            return o4s
        };
        var yh2x = function (P4T, bd4h, e4i, uT1x) {
            if (k4o.gr6l(bd4h.beforeload)) {
                bd4h.beforeload.call(this, P4T, e4i, bd4h)
            }
            if (P4T && P4T.code != null && P4T.code != 200) {
                bAC7v.call(this, bd4h, e4i, {
                    key: e4i.key,
                    code: P4T.code,
                    message: P4T.message || "",
                    captchaId: P4T.captchaId,
                    ext: P4T
                });
                return
            }
            var o4s = P4T;
            if (!uT1x) {
                o4s = bAI7B.call(this, P4T, bd4h, e4i)
            } else if (k4o.gr6l(bd4h.format)) {
                var bgs3x = [];
                k4o.bb4f(uT1x.urls, function (V4Z) {
                    bgs3x.push(bAI7B.call(this, P4T[V4Z], uT1x.conf[V4Z], e4i))
                }, this);
                bgs3x.push(e4i);
                o4s = bd4h.format.apply(this, bgs3x)
            }
            var tZ1x = bd4h.onload || e4i.onload,
                bBd8V = bd4h.finaly || e4i.finaly || bn4r;
            if (k4o.fA6u(tZ1x)) {
                bBd8V.call(this, this.z4D(tZ1x, o4s), e4i)
            } else {
                bBd8V.call(this, (tZ1x || bn4r).call(this, o4s), e4i)
            }
        };
        var zW2x = function (bd4h, e4i, bV5a) {
            bAC7v.call(this, bd4h, e4i, {
                key: e4i.key,
                code: bV5a.code || -1,
                message: bV5a.message || ""
            })
        };
        return function (bd4h, e4i) {
            if (k4o.fA6u(bd4h)) {
                bd4h = q4u.B4F(bd4h)
            }
            delete e4i.value;
            (bd4h.filter || bn4r).call(this, e4i, bd4h);
            var P4T = e4i.value;
            if (!!P4T) {
                yh2x.call(this, P4T, bd4h, e4i);
                return
            }
            var V4Z, j4n = e4i.data || Z4d,
                yJ2x = {
                    cookie: !0,
                    type: bd4h.rtype || "json",
                    method: bd4h.type || "POST",
                    onerror: zW2x.g4k(this, bd4h, e4i),
                    noescape: bd4h.noescape
                };
            if (k4o.eE6y(bd4h.url)) {
                var uT1x = cwu0x(bd4h.url, j4n);
                V4Z = RF8x + "/api/batch";
                yJ2x.data = k4o.de5j(uT1x.data);
                yJ2x.onload = yh2x.eo6i(this, bd4h, e4i, uT1x);
                yJ2x.headers = {
                    "batch-method": "POST"
                };
                delete uT1x.data
            } else {
                var lt8l = bd4h.url.indexOf(":") < 0 ? RF8x : "";
                V4Z = bAr7k(lt8l + bd4h.url, j4n);
                yJ2x.data = k4o.de5j(e4i.data);
                yJ2x.onload = yh2x.eo6i(this, bd4h, e4i)
            }
            if (yJ2x.method == "GET") yJ2x.query = yJ2x.data;
            return x4B.bo4s(V4Z, yJ2x)
        }
    }();
    b3x.Gp4t = function () {
        var gm6g = /^get|list|pull$/i;
        return function (bBn8f, e4i) {
            var K4O = e4i.key,
                bd4h = q4u.B4F(K4O.split("-")[0] + "-" + bBn8f);
            if (gm6g.test(bBn8f) && K4O.indexOf("post-") < 0) bd4h.type = "GET";
            this.co5t(bd4h, e4i)
        }
    }();
    b3x.cyA0x = function (K4O, i4m) {
        var ct5y = i4m.length;
        this.bfK2x({
            key: K4O,
            offset: 0,
            limit: ct5y + 1
        }, {
            list: i4m,
            total: ct5y
        })
    };
    b3x.Zx1x = function (e4i) {
        this.Gp4t("list", e4i)
    };
    b3x.bgf3x = function (e4i) {
        this.Gp4t("get", e4i)
    };
    b3x.bzQ7J = function (e4i) {
        this.Gp4t("pull", e4i)
    };
    b3x.bzA7t = function (e4i) {
        this.Gp4t("add", e4i)
    };
    b3x.Zu1x = function (e4i) {
        this.Gp4t("del", e4i)
    };
    b3x.Zn1x = function (e4i) {
        this.Gp4t("update", e4i)
    };
    b3x.cwp0x = function (p4t) {
        this.zi2x(p4t)
    };
    H4L.fG6A.A4E({
        element: window,
        event: "requesterror"
    })
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        bgx3x = {},
        b3x, J4N;
    var ug1x = function (o4s, e4i) {
        o4s.conf = e4i.conf;
        return o4s
    };
    q4u.fg6a({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function (P4T, e4i) {
                return ug1x({
                    mv: P4T
                }, e4i)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function (o4s, e4i) {
                if (!!o4s.songs && o4s.songs.length > 0) o4s.song = o4s.songs[0];
                else o4s.song = bgx3x;
                delete o4s.songs;
                return ug1x(o4s, e4i)
            },
            filter: function (e4i) {
                e4i.data.ids = "[" + e4i.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: ug1x
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: ug1x
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function (o4s, e4i) {
                o4s.playlist = o4s.result;
                delete o4s.result;
                return ug1x(o4s, e4i)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: ug1x
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: ug1x
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: ug1x
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e4i) {
                var i4m = e4i.data.id.split("-");
                e4i.data.radioId = i4m[0];
                e4i.data.asc = i4m[1] == 2;
                e4i.data.limit = 1e3;
                delete e4i.data.id
            },
            format: function (P4T, e4i) {
                var cwn0x = {
                    id: e4i.data.radioId,
                    programs: P4T.programs
                };
                return ug1x({
                    djradio: cwn0x
                }, e4i)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: ug1x
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            },
            format: function (o4s, e4i) {
                var wa1x = {
                    lyric: "",
                    nolyric: true
                };
                if (o4s.code == 200 && o4s.lrc && o4s.lrc.lyric) {
                    wa1x.lyric = o4s.lrc.lyric;
                    wa1x.nolyric = false
                } else {
                    wa1x.nolyric = true
                }
                return ug1x({
                    lyric: wa1x
                }, e4i)
            }
        }
    });
    q4u.wc1x = NEJ.C();
    b3x = q4u.wc1x.O4S(q4u.hs7l);
    b3x.cwm0x = function (t4x, cH5M) {
        return this.rl0x(this.Za1x(t4x, cH5M))
    };
    b3x.Rz8r = function (t4x, cH5M, e4i) {
        e4i = e4i || {};
        var j4n = this.rl0x(this.Za1x(t4x, cH5M));
        if (j4n && (t4x != 13 && t4x != 19 || e4i.conf && e4i.conf.useCache)) {
            this.z4D("onresourceload", t4x, cH5M, j4n, e4i.conf);
            return
        }
        e4i.data = {
            id: cH5M
        };
        e4i.onload = this.cwl0x.g4k(this, t4x, cH5M);
        e4i.onerror = this.cwk0x.g4k(this, t4x, cH5M);
        this.co5t("res-" + this.zm2x(t4x) + "-get", e4i)
    };
    b3x.cwl0x = function (t4x, cH5M, o4s) {
        var j4n = o4s[this.zm2x(t4x)];
        this.pa9R(this.Za1x(t4x, cH5M), j4n);
        this.z4D("onresourceload", t4x, cH5M, j4n, o4s.conf)
    };
    b3x.cwk0x = function (t4x, cH5M, o4s, e4i) {
        if (o4s.code != 404) {
            this.z4D("onresourceerror", t4x, cH5M, o4s.code);
            return
        }
        this.pa9R(this.Za1x(t4x, cH5M), bgx3x);
        this.z4D("onresourceload", t4x, cH5M, bgx3x, e4i.conf)
    };
    b3x.cyB0x = function (t4x, e4i) {
        this.co5t("res-" + this.zm2x(t4x) + "-play", e4i)
    };
    b3x.Za1x = function (t4x, cH5M) {
        return "res-" + this.zm2x(t4x) + "-" + cH5M
    };
    b3x.zm2x = function (t4x) {
        var bu4y = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bu4y[t4x]
    };
    q4u.wc1x.Ku5z = function (t4x, cH5M) {
        if (!this.eR6L) this.eR6L = q4u.wc1x.A4E({});
        return this.eR6L.cwm0x(t4x, cH5M)
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        bgA3x = /^[1-9][0-9]*$/,
        b3x, J4N;
    var LOCAL_LOG_KEY = "local-log";
    q4u.fg6a({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    q4u.hO7H = NEJ.C();
    b3x = q4u.hO7H.O4S(q4u.hs7l);
    b3x.fu6o = function (W4a, bd4h) {
        if (!W4a || !bd4h) return;
        if (k4o.fA6u(bd4h)) {
            try {
                bd4h = JSON.parse(bd4h)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a3x)
                }
            }
        }
        if (!k4o.kU8M(bd4h)) return;
        this.co5t("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: W4a,
                    json: bd4h
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W4a + ", json=" + JSON.stringify(bd4h))
        }
    };
    b3x.YR1x = function (nm9d) {
        if (!k4o.eE6y(nm9d)) return;
        this.co5t("bi-batch-log", {
            data: {
                logs: JSON.stringify(nm9d)
            }
        })
    };
    b3x.bCV8N = function (bd4h) {
        if (!bd4h || !bd4h.type || !bd4h.rid) return;
        var nn9e = bd4h.type;
        if (bgA3x.test(nn9e)) {
            nn9e = this.zm2x(nn9e)
        }
        if (!nn9e) return;
        if (nn9e == "playlist") nn9e = "list";
        this.fu6o("search", {
            type: nn9e,
            id: bd4h.rid || null,
            keyword: bd4h.keyword || null
        })
    };
    b3x.Rv8n = function () {
        var cwd0x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bd4h) {
            if (!bd4h || !bd4h.type || !bd4h.rid) return;
            if (bd4h.play === undefined) bd4h.play = true;
            var nn9e = bd4h.type;
            if (bgA3x.test(nn9e)) {
                nn9e = this.zm2x(nn9e)
            }
            if (!nn9e) return;
            if (nn9e == "playlist") nn9e = "list";
            var P4T = {
                id: bd4h.rid,
                type: nn9e
            };
            if (nn9e == "song" && bd4h.source) {
                P4T.source = this.bDj8b(bd4h.source);
                if (!!bd4h.sourceid) P4T.sourceid = bd4h.sourceid
            }
            this.fu6o(!bd4h.play ? "addto" : "play", P4T);
            if (nn9e == "song" && bd4h.hash && bd4h.hash.match(cwd0x)) {
                this.fu6o(!bd4h.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b3x.bgN3x = function (D4H, bw4A, dZ6T, CN3x) {
        var P4T = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cwb0x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        P4T.id = D4H;
        P4T.time = Math.round(bw4A);
        P4T.end = k4o.fA6u(CN3x) ? CN3x : cwb0x[CN3x] || "";
        if (dZ6T && dZ6T.fid) {
            P4T.source = this.bDj8b(dZ6T.fid);
            P4T.sourceId = dZ6T.fdata
        }
        this.fu6o("play", P4T)
    };
    b3x.bDI8A = function (t4x, cH5M) {
        if (!t4x || !cH5M) return;
        if (bgA3x.test(t4x)) t4x = this.zm2x(t4x);
        if (t4x != "playlist" && t4x != "dj") return;
        var bd4h = q4u.B4F("plus-" + t4x + "-count");
        if (!bd4h) return !1;
        this.co5t(bd4h, {
            data: {
                id: cH5M
            }
        });
        var Q4U = this.ll8d("play-hist-" + t4x, []);
        if (k4o.dd5i(Q4U, cH5M) < 0) {
            Q4U.push(cH5M);
            return !0
        }
        return !1
    };
    b3x.zm2x = function (t4x) {
        var bu4y = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bu4y[t4x]
    };
    b3x.bDj8b = function (Kr5w) {
        var bu4y = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bu4y[Kr5w]
    };
    b3x.cvZ0x = function (hi7b) {
        var nm9d = this.DT3x(LOCAL_LOG_KEY, []);
        nm9d.unshift(hi7b);
        if (nm9d.length > 200) {
            nm9d.length = 200
        }
        this.we1x(LOCAL_LOG_KEY, nm9d)
    };
    b3x.cvY0x = function () {
        return this.Ss8k(LOCAL_LOG_KEY)
    };
    b3x.ez6t = function (P4T) {
        this.fu6o("play", P4T)
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d");
    if (!q4u.wc1x) return;
    var Q4U = q4u.wc1x.A4E({
        onresourceload: cvW0x
    });
    var uq1x = q4u.hO7H.gf6Z();

    function cvW0x(t4x, cH5M, j4n, bd4h) {
        var i4m = [];
        switch (parseInt(t4x)) {
            case 2:
                i4m = j4n;
                break;
            case 13:
                i4m = j4n.tracks;
                break;
            case 18:
                i4m.push(j4n);
                break;
            case 19:
                i4m = j4n.songs;
                break;
            case 21:
                if (j4n.mp && j4n.mp.fee && j4n.mp.pl <= 0) {
                    l4p.YA0x(j4n.data.id, j4n.mp.fee);
                    return
                }
                break
        }
        if (l4p.Kp5u(i4m, true, null, t4x == 19 ? {
                source: "album",
                sourceid: cH5M
            } : null) == 0) {
            return
        }
        l4p.fh6b({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bd4h.message
        })
    }

    function cvV0x(d4h, qG0x, yD2x, eP6J) {
        eP6J = eP6J || {};
        if (d4h.action == "ok") {
            if (yD2x) {
                location.dispatch2("/payfee?songId=" + yD2x)
            } else {
                location.dispatch2("/payfee?fee=" + qG0x || 1)
            }
            uq1x.fu6o("click", {
                type: "tobuyvip",
                name: "box",
                source: eP6J.source || "song",
                sourceid: eP6J.sourceid || yD2x || 0
            })
        } else if (d4h.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + yD2x);
            uq1x.fu6o("click", {
                type: "tobuyone",
                name: "box",
                source: eP6J.source || "song",
                sourceid: eP6J.sourceid || yD2x || 0
            })
        }
    }

    function Rj8b(bE4I) {
        l4p.fh6b({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bE4I,
            btntxt: "知道了"
        })
    }

    function Ri8a(bE4I, P4T) {
        Rj8b((P4T || Z4d).toast || bE4I)
    }
    l4p.if7Y = function (bE4I, D4H, t4x, cvS0x, bg4k) {
        bE4I = bE4I || "由于版权保护，您所在的地区暂时无法使用。";
        if (cvS0x && bg4k && bg4k.privilege && bg4k.privilege.toast) {
            x4B.bo4s("/api/song/toast", {
                query: {
                    id: bg4k.id
                },
                type: "json",
                onload: Ri8a.g4k(this, bE4I),
                onerror: Ri8a.g4k(this, bE4I)
            })
        } else if (D4H && t4x) {
            Q4U.Rz8r(t4x, D4H, {
                conf: {
                    message: bE4I,
                    useCache: t4x != 18
                }
            })
        } else {
            Rj8b(bE4I)
        }
    };
    l4p.uv1x = function (qG0x, yD2x, t4x, eP6J, mz8r) {
        var bR5W, qy0x = "m-popup-info",
            bhd3x = "单首购买",
            bhn3x = "马上去开通",
            cK5P = "唱片公司要求，当前歌曲须付费使用。",
            bFy9p = true;
        try {
            bR5W = top.api.feeMessage || {}
        } catch (e) {
            bR5W = {}
        }
        if (qG0x == 1 || qG0x == 8 || qG0x == 16) {
            if (t4x == "song") {
                qy0x = "m-popup-song-buy";
                cK5P = bR5W["vip2"] || cK5P;
                bhn3x = bR5W["vip2button"] || "包月购买";
                bhd3x = bR5W["vip2link"] || bhd3x;
                if (mz8r && mz8r.flag !== undefined) {
                    var bs4w = mz8r.flag.toString(2).split("");
                    if (parseInt(bs4w.pop(), 10) == 1) {
                        bFy9p = false
                    }
                }
            } else {
                cK5P = bR5W["vip"] || cK5P
            }
        } else if (qG0x == 4) {
            cK5P = bR5W["album"] || cK5P;
            bhn3x = "立即订购"
        } else {
            cK5P = bR5W["unknow"] || cK5P
        }
        l4p.jR8J({
            clazz: "m-layer-w5",
            html: a3x.bW5b(qy0x, {
                songTxt: bhd3x,
                tip: cK5P,
                oktext: bhn3x,
                cctext: "以后再说",
                showSongText: bFy9p
            }),
            onaction: cvV0x.eo6i(null, qG0x, yD2x, eP6J)
        })
    };
    l4p.bFz9q = function (hd7W, hc7V) {
        l4p.gJ7C({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (t4x) {
                if (t4x == "ok") {
                    l4p.KS5X({
                        id: hd7W,
                        type: hc7V
                    })
                }
            }
        })
    };
    l4p.YA0x = function (nR9I, qG0x) {
        var bR5W, cK5P = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bR5W = top.api.feeMessage || {}
        } catch (e) {
            bR5W = {}
        }
        if (qG0x == 1 || qG0x == 8) {
            cK5P = bR5W["vip"] || cK5P
        } else if (qG0x == 4) {
            cK5P = bR5W["album"] || cK5P
        } else {
            cK5P = bR5W["unknow"] || cK5P
        }
        return l4p.jR8J({
            clazz: "m-layer-w5",
            html: a3x.bW5b("m-popup-info", {
                tip: cK5P,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function (d4h) {
                if (d4h.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + nR9I);
                    uq1x.fu6o("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: nR9I || 0
                    })
                }
            }
        })
    };
    l4p.Kp5u = function () {
        function compareFee(cvQ0x, cvO0x) {
            var bu4y = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bu4y[cvQ0x] || 0) - (bu4y[cvO0x] || 0)
        }
        return function (i4m, cK5P, ux1x, eP6J) {
            ux1x = ux1x || {};
            var wx1x = [],
                Ke5j = {},
                bGy9p = 0,
                bGF9w = 0,
                Kd5i = null;
            if (!i4m || !i4m.length) return wx1x;
            k4o.bb4f(i4m, function (bg4k) {
                var fn6h = l4p.oJ9A(bg4k);
                if (fn6h == 0) {
                    wx1x.push(bg4k)
                } else if (fn6h == 10) {
                    if (bg4k.privilege) {
                        bg4k.fee = bg4k.privilege.fee
                    }
                    if (compareFee(bg4k.fee, Ke5j.fee) > 0) {
                        Ke5j = bg4k
                    }
                } else if (fn6h == 11) {
                    ++bGy9p;
                    if (!ux1x.play) wx1x.push(bg4k)
                } else if (fn6h == 1e3) {
                    ++bGF9w;
                    if (!ux1x.download) wx1x.push(bg4k)
                } else if (fn6h == 100) {
                    Kd5i = bg4k
                }
            });
            if (wx1x.length == 0 && cK5P) {
                if (bGy9p == i4m.length) {
                    var sb0x = i4m[0].privilege || {};
                    if (sb0x.payed) {
                        l4p.if7Y("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l4p.uv1x(sb0x.fee, null, null, eP6J)
                    }
                } else if (bGF9w == i4m.length) {
                    l4p.if7Y("因版权方要求，该歌曲不支持下载")
                } else if (Ke5j.id) {
                    l4p.uv1x(Ke5j.fee, Ke5j.id, null, eP6J, Ke5j.privilege)
                } else {
                    if (Kd5i && i4m.length == 1 && Kd5i.privilege && Kd5i.privilege.st < 0 && Kd5i.privilege.toast) {
                        l4p.if7Y(null, null, null, true, Kd5i)
                    } else {
                        l4p.if7Y()
                    }
                }
            }
            return wx1x
        }
    }();
    l4p.oJ9A = function (bg4k) {
        if (!bg4k) return 0;
        var fn6h = bg4k.privilege;
        if (bg4k.program) return 0;
        if (window.GAbroad) return 100;
        if (fn6h) {
            if (fn6h.st != null && fn6h.st < 0) {
                return 100
            }
            if (fn6h.fee > 0 && fn6h.fee != 8 && fn6h.payed == 0 && fn6h.pl <= 0) return 10;
            if (fn6h.fee == 16) return 11;
            if ((fn6h.fee == 0 || fn6h.payed) && fn6h.pl > 0 && fn6h.dl == 0) return 1e3;
            if (fn6h.pl == 0 && fn6h.dl == 0) return 100;
            return 0
        } else {
            var ej6d = bg4k.status != null ? bg4k.status : bg4k.st != null ? bg4k.st : 0;
            if (bg4k.status >= 0) return 0;
            if (bg4k.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        fo6i = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        y4C = c4g("nm.w"),
        b3x;
    if (!!y4C.bGO9F) return;
    var cf5k = ~[];
    cf5k = {
        bGV9M: ++cf5k,
        cvN0x: (![] + "")[cf5k],
        jL8D: ++cf5k,
        Ka5f: (![] + "")[cf5k],
        XN0x: (cf5k[cf5k] + "")[cf5k],
        bHV9M: ++cf5k,
        cyD0x: ({} + "")[cf5k],
        cvL0x: (cf5k[cf5k] + "")[cf5k],
        cvJ9A: (![] + "")[cf5k],
        QI8A: ++cf5k,
        XC0x: (!"" + "")[cf5k],
        cyF0x: ++cf5k,
        zC2x: ++cf5k,
        bIL9C: ({} + "")[cf5k],
        vW1x: ++cf5k,
        cvG9x: ++cf5k,
        cyG0x: ++cf5k,
        cyH0x: ++cf5k
    };
    cf5k.JY5d = (cf5k.JY5d = cf5k + "")[cf5k.zC2x] + (cf5k.JX5c = cf5k.JY5d[cf5k.jL8D]) + (cf5k.Xt0x = (cf5k.Eu3x + "")[cf5k.jL8D]) + (!cf5k + "")[cf5k.QI8A] + (cf5k.Ev3x = cf5k.JY5d[cf5k.vW1x]) + (cf5k.Eu3x = (!"" + "")[cf5k.jL8D]) + (cvB9s = (!"" + "")[cf5k.bHV9M]) + cf5k.JY5d[cf5k.zC2x] + cf5k.Ev3x + cf5k.JX5c + cf5k.Eu3x;
    cf5k.Xt0x = cf5k.Eu3x + (!"" + "")[cf5k.QI8A] + cf5k.Ev3x + cvB9s + cf5k.Eu3x + cf5k.Xt0x;
    cf5k.Eu3x = cf5k.bGV9M[cf5k.JY5d][cf5k.JY5d];
    y4C.bGO9F = cf5k
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ui"),
        b3x;
    if (!!N4R.Xq0x) return;
    var iw7p = a3x.sN0x(".#<uispace>{position:absolute;background:#fff;}");
    N4R.Xq0x = NEJ.C();
    b3x = N4R.Xq0x.O4S(N4R.Su8m);
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.bT5Y([
            [document, "click", this.rL0x.g4k(this)]
        ]);
        this.cvA9r = !!e4i.nostop;
        this.bLc0x = {
            top: e4i.top,
            left: e4i.left
        }
    };
    b3x.bz4D = function () {
        delete this.yt2x;
        delete this.bhP3x;
        delete this.pZ9Q;
        delete this.bLi0x;
        delete this.Xk0x;
        delete this.bLc0x;
        this.bF4J()
    };
    b3x.ca5f = function () {
        this.lD8v = iw7p
    };
    b3x.bS5X = function () {
        this.cd5i();
        this.zL2x = this.m4q;
        h4l.s4w(this.m4q, "click", this.cvz9q.g4k(this))
    };
    b3x.rL0x = function (d4h) {
        if (d4h.button != 2) this.br4v()
    };
    b3x.cvz9q = function (d4h) {
        if (this.cvA9r) return;
        h4l.sF0x(d4h);
        var G4K = h4l.U4Y(d4h);
        if (G4K.tagName == "A") h4l.cm5r(d4h)
    };
    b3x.cvy9p = function () {
        var cY5d = /\s+/i;
        return function (nE9v) {
            nE9v = (nE9v || "").trim().toLowerCase().split(cY5d);
            nE9v[0] = nE9v[0] || "bottom";
            nE9v[1] = nE9v[1] || "left";
            this.pZ9Q = nE9v
        }
    }();
    b3x.cvx9o = function (nE9v) {
        var o4s = {},
            mX8P = this.bhP3x,
            cyI0x = a3x.oQ9H(),
            cy5D = this.m4q.offsetWidth,
            ch5m = this.m4q.offsetHeight;
        switch (nE9v[0]) {
            case "top":
                o4s.top = mX8P.top - ch5m;
                o4s.left = nE9v[1] == "right" ? mX8P.left + mX8P.width - cy5D : mX8P.left;
                break;
            case "left":
                o4s.left = mX8P.left - cy5D;
                o4s.top = nE9v[1] == "bottom" ? mX8P.top + mX8P.height - ch5m : mX8P.top;
                break;
            case "right":
                o4s.left = mX8P.left + mX8P.width;
                o4s.top = nE9v[1] == "bottom" ? mX8P.top + mX8P.height - ch5m : mX8P.top;
                break;
            default:
                o4s.top = mX8P.top + mX8P.height;
                o4s.left = nE9v[1] == "right" ? mX8P.left + mX8P.width - cy5D : mX8P.left;
                break
        }
        return o4s
    };
    b3x.KN5S = function () {
        if (!this.bLi0x) {
            this.gs6m(this.bLc0x);
            return
        }
        if (!!this.Xk0x) {
            this.gs6m(this.yt2x);
            return
        }
        if (!!this.bhP3x) this.gs6m(this.cvx9o(this.pZ9Q))
    };
    b3x.cvu9l = function (G4K, dl5q, d4h) {
        dl5q = dl5q || Z4d;
        var bMn0x = a3x.oQ9H(),
            cP5U = h4l.iX7Q(d4h) + (dl5q.left || 0),
            gZ7S = h4l.lK8C(d4h) + (dl5q.top || 0),
            cy5D = G4K.offsetWidth + (dl5q.right || 0),
            ch5m = G4K.offsetHeight + (dl5q.bottom || 0),
            JT5Y = bMn0x.scrollWidth,
            bhW3x = bMn0x.scrollHeight,
            bhZ3x = cP5U + cy5D,
            bia3x = gZ7S + ch5m;
        switch (this.pZ9Q[0]) {
            case "top":
                gZ7S = bia3x > bhW3x ? gZ7S - ch5m : gZ7S;
                if (this.pZ9Q[1] == "right") {
                    cP5U = cP5U - cy5D < 0 ? 0 : cP5U - cy5D
                } else {
                    cP5U = bhZ3x > JT5Y ? JT5Y - cy5D : cP5U
                }
                break;
            case "left":
                cP5U = bhZ3x > JT5Y ? JT5Y - cy5D : cP5U;
                if (this.pZ9Q[1] == "top") {
                    gZ7S = bia3x > bhW3x ? gZ7S - ch5m : gZ7S
                } else {
                    gZ7S = gZ7S - ch5m < 0 ? gZ7S : gZ7S - ch5m
                }
                break;
            case "right":
                cP5U = cP5U - cy5D < 0 ? 0 : cP5U - cy5D;
                if (this.pZ9Q[1] == "top") {
                    gZ7S = bia3x > bhW3x ? gZ7S - ch5m : gZ7S
                } else {
                    gZ7S = gZ7S - ch5m < 0 ? gZ7S : gZ7S - ch5m
                }
                break;
            default:
                gZ7S = gZ7S - ch5m < 0 ? gZ7S : gZ7S - ch5m;
                if (this.pZ9Q[1] == "left") {
                    cP5U = bhZ3x > JT5Y ? JT5Y - cy5D : cP5U
                } else {
                    cP5U = cP5U - cy5D < 0 ? 0 : cP5U - cy5D
                }
                break
        }
        return {
            top: gZ7S,
            left: cP5U
        }
    };
    b3x.bic3x = function () {
        var cvt9k = function (G4K, dl5q) {
            G4K = a3x.B4F(G4K);
            if (!G4K) return;
            dl5q = dl5q || Z4d;
            var be4i = a3x.hM7F(G4K);
            return {
                top: be4i.y - (dl5q.top || 0),
                left: be4i.x - (dl5q.left || 0),
                width: G4K.offsetWidth + (dl5q.right || 0),
                height: G4K.offsetHeight + (dl5q.bottom || 0)
            }
        };
        return function (e4i) {
            e4i = e4i || Z4d;
            this.Xk0x = e4i.event;
            this.cvy9p(e4i.align);
            if (!!this.Xk0x) this.yt2x = this.cvu9l(e4i.target, e4i.delta, this.Xk0x);
            this.bhP3x = cvt9k(e4i.target, e4i.delta);
            this.bLi0x = !!e4i.fitable;
            this.L4P();
            return this
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ui"),
        b3x, J4N;
    if (!!N4R.zN2x) return;
    N4R.zN2x = NEJ.C();
    b3x = N4R.zN2x.O4S(N4R.bbf1x);
    J4N = N4R.zN2x.cl5q;
    N4R.zN2x.cyJ0x = function () {
        var cvr9i = function (d4h, D4H, fx6r, jF7y, Qn8f) {
            var cv5A, K4O = D4H + "-i",
                Q4U = fx6r.yo2x,
                bNr0x = !!jF7y.noclear,
                bNs0x = !!jF7y.toggled;
            if (k4o.gr6l(jF7y.onbeforeclick)) {
                var WX0x = jF7y.noclear,
                    cvp9g = jF7y.toggled;
                try {
                    jF7y.onbeforeclick(jF7y)
                } catch (e) {}
                bNr0x = !!jF7y.noclear;
                bNs0x = !!jF7y.toggled;
                jF7y.toggled = cvp9g;
                jF7y.noclear = WX0x
            }
            var ES4W = Q4U[K4O];
            if (bNs0x && !!ES4W) {
                ES4W.br4v();
                return
            }
            h4l.bf4j(d4h);
            if (!bNr0x) {
                h4l.z4D(document, "click");
                cv5A = fx6r.A4E(jF7y)
            } else {
                cv5A = fx6r.cfI6C(jF7y, !0)
            }
            Q4U[K4O] = cv5A;
            cv5A.wl1x("onbeforerecycle", function () {
                delete Q4U[K4O]
            });
            cv5A.bic3x(Qn8f)
        };
        return function (f4j, e4i) {
            f4j = a3x.B4F(f4j);
            if (!f4j) return this;
            if (!this.yo2x) this.yo2x = {};
            var D4H = a3x.ld8V(f4j);
            if (!!this.yo2x[D4H]) return this;
            e4i = NEJ.X({}, e4i);
            var Qn8f = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e4i);
            Qn8f.target = D4H;
            e4i.destroyable = !0;
            if (!e4i.fixed) {
                Qn8f.fitable = !0;
                e4i.parent = document.body
            }
            this.yo2x[D4H] = [D4H, e4i.event || "click", cvr9i.eo6i(null, D4H, this, e4i, Qn8f)];
            h4l.s4w.apply(h4l, this.yo2x[D4H]);
            return this
        }
    }();
    N4R.zN2x.cyK0x = function (f4j) {
        if (!this.yo2x) return this;
        var D4H = a3x.ld8V(f4j),
            d4h = this.yo2x[D4H];
        if (!d4h) return this;
        delete this.yo2x[D4H];
        h4l.mH8z.apply(h4l, d4h);
        var cv5A = this.yo2x[D4H + "-i"];
        if (!!cv5A) cv5A.br4v();
        return this
    };
    b3x.bey2x = function () {
        return N4R.Xq0x.A4E(this.bX5c)
    };
    b3x.SF9w = function () {
        J4N.SF9w.apply(this, arguments);
        this.bX5c.top = null;
        this.bX5c.left = null;
        this.bX5c.nostop = !1
    };
    b3x.bic3x = function (e4i) {
        if (!!this.oq9h) this.oq9h.bic3x(e4i);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        ba4e = c4g("nej.ui"),
        n4r = c4g("nm.l"),
        b3x, J4N;
    n4r.bij3x = NEJ.C();
    b3x = n4r.bij3x.O4S(ba4e.zN2x);
    b3x.bj4n = function (e4i) {
        e4i.nohack = true;
        this.bk4o(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        n4r = c4g("nm.l"),
        b3x, J4N;
    n4r.X4b = NEJ.C();
    b3x = n4r.X4b.O4S(n4r.bij3x);
    J4N = n4r.X4b.cl5q;
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.ev6p = e4i.type || 1
    };
    b3x.bS5X = function () {
        this.cd5i();
        this.m4q = a3x.nl9c(this.cvn9e());
        var i4m = a3x.da5f(this.m4q);
        this.pD9u = i4m[0];
        this.cn5s = i4m[1]
    };
    b3x.cvn9e = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b3x.KN5S = function () {
        var C4G = {},
            cc5h = this.m4q.style,
            jh7a = a3x.oQ9H(),
            nz9q = {
                left: jh7a.scrollLeft,
                top: jh7a.scrollTop
            },
            dl5q = {
                left: jh7a.clientWidth - this.m4q.offsetWidth,
                top: jh7a.clientHeight - this.m4q.offsetHeight
            };
        C4G.top = Math.max(0, nz9q.top + dl5q.top / 2);
        C4G.left = Math.max(0, nz9q.left + dl5q.left / 2);
        this.oq9h.gs6m(C4G)
    };
    b3x.L4P = function (e4i) {
        J4N.L4P.call(this);
        this.KN5S();
        this.ev6p == 1 ? a3x.eQ6K(this.pD9u, "u-icn-32", "u-icn-31") : a3x.eQ6K(this.pD9u, "u-icn-31", "u-icn-32");
        this.cn5s.innerHTML = e4i.tip || ""
    };
    window.g_showTipCard = n4r.X4b.L4P = function () {
        var eC6w;
        return function (e4i) {
            clearTimeout(eC6w);
            if (e4i.parent === undefined) e4i.parent = document.body;
            if (e4i.autoclose === undefined) e4i.autoclose = true;
            e4i.clazz = "m-sysmsg";
            !!this.eR6L && this.eR6L.S4W();
            this.eR6L = this.A4E(e4i);
            this.eR6L.L4P(e4i);
            if (e4i.autoclose) eC6w = setTimeout(this.br4v.g4k(this), 2e3)
        }.g4k(n4r.X4b)
    }();
    n4r.X4b.br4v = function () {
        !!this.eR6L && this.eR6L.br4v()
    }
})();
(function () {
    var c4g = NEJ.P,
        x4B = c4g("nej.j"),
        k4o = c4g("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        x4B.bo4s = x4B.bo4s.es6m(function (d4h) {
            e4i = d4h.args[1];
            e4i.query = e4i.query || {};
            if (k4o.fA6u(e4i.query)) e4i.query = k4o.hE7x(e4i.query);
            e4i.query.ref = "mail"
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        fo6i = NEJ.R,
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        q4u = c4g("nm.d"),
        n4r = c4g("nm.l"),
        K4O = "playlist-tracks_",
        b3x;
    q4u.fg6a({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function (P4T, e4i) {
                this.cvm9d(P4T.playlist);
                return {
                    total: 0,
                    list: fo6i
                }
            },
            onerror: function () {
                this.z4D("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function (P4T, e4i) {
                var mT8L = P4T.playlist;
                mT8L.creator = GUser;
                mT8L.isHost = !0;
                mT8L.typeFlag = "playlist";
                return mT8L
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.hx7q, "listchange", d4h)
            },
            onmessage: function () {
                var lT8L = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cg5l) {
                    n4r.X4b.L4P({
                        tip: lT8L[cg5l] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function (e4i) {
                e4i.id = e4i.data.pid
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.hx7q, "listchange", d4h)
            },
            onmessage: function () {
                var lT8L = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cg5l) {
                    n4r.X4b.L4P({
                        tip: lT8L[cg5l] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function (e4i) {
                var eP6J = e4i.ext || {};
                e4i.ext = NEJ.X(eP6J, e4i.data);
                e4i.data = {
                    id: e4i.ext.id
                }
            },
            format: function (P4T, e4i) {
                n4r.X4b.L4P({
                    tip: "收藏成功" + (P4T.point > 0 ? ' 获得<em class="s-fc6">' + P4T.point + "积分</em>" : "")
                });
                var p4t = e4i.ext;
                p4t.subscribedCount++;
                return p4t
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.cvl9c, "listchange", d4h);
                h4l.z4D(q4u.cvl9c, "itemchange", {
                    attr: "subscribedCount",
                    data: d4h.data
                })
            },
            onmessage: function () {
                var lT8L = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function (cg5l) {
                    n4r.X4b.L4P({
                        type: 2,
                        tip: lT8L[cg5l] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function (e4i) {
                e4i.id = e4i.data.id = e4i.data.pid
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.hx7q, "listchange", d4h)
            },
            onmessage: function () {
                var lT8L = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (cg5l) {
                    n4r.X4b.L4P({
                        tip: lT8L[cg5l],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e4i) {
                var j4n = e4i.data,
                    WM0x = {};
                WM0x["playlist-update-name"] = {
                    id: j4n.id,
                    name: j4n.name
                };
                WM0x["playlist-update-tag"] = {
                    id: j4n.id,
                    tags: j4n.tags.join(";")
                };
                WM0x["playlist-update-desc"] = {
                    id: j4n.id,
                    desc: j4n.description
                };
                e4i.data = WM0x;
                e4i.ext = j4n
            },
            format: function (T4X, qr9i, Qd8V, e4i) {
                if (T4X.code == 200 && qr9i.code == 200 && Qd8V.code == 200) {
                    e4i.ext.allSuccess = true;
                    n4r.X4b.L4P({
                        tip: "保存成功"
                    })
                } else if (T4X.code == 407 || qr9i.code == 407 || Qd8V.code == 407) {
                    e4i.ext.allSuccess = false;
                    n4r.X4b.L4P({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e4i.ext.allSuccess = false;
                    n4r.X4b.L4P({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eu6o(e4i.ext.id)
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.hx7q, "listchange", d4h)
            },
            onmessage: function (cg5l) {
                n4r.X4b.L4P({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function (P4T, e4i) {
                var p4t = this.eu6o(e4i.ext.id);
                if (P4T.code == 200) p4t.name = e4i.ext.name;
                return P4T
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function (P4T, e4i) {
                var p4t = this.eu6o(e4i.ext.id);
                if (P4T.code == 200) p4t.tags = e4i.ext.tags;
                return P4T
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function (P4T, e4i) {
                var p4t = this.eu6o(e4i.ext.id);
                if (P4T.code == 200) p4t.description = e4i.ext.description;
                return P4T
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function (e4i) {
                e4i.url = e4i.data.url;
                delete e4i.data.url
            },
            format: function (P4T, e4i) {
                n4r.X4b.L4P({
                    tip: "保存成功"
                });
                var p4t = this.eu6o(e4i.data.id);
                p4t.coverImgUrl = e4i.url;
                e4i.ext = p4t;
                return p4t
            },
            onmessage: function (cg5l) {
                n4r.X4b.L4P({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.hx7q, "itemchange", {
                    attr: "coverImgUrl",
                    data: e4i.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function (P4T, e4i) {
                var mT8L = this.eu6o(e4i.data.id);
                if (!mT8L) return;
                mT8L.playCount++;
                h4l.z4D(q4u.hx7q, "itemchange", {
                    attr: "playcount",
                    data: mT8L
                })
            }
        }
    });
    q4u.hx7q = NEJ.C();
    b3x = q4u.hx7q.O4S(q4u.hs7l);
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.bQD2x = function () {
        var df5k = GUser.userId;
        this.kQ8I({
            limit: 1001,
            key: "playlist_my-" + df5k,
            data: {
                offset: 0,
                limit: 1001,
                uid: df5k
            }
        })
    };
    b3x.cvm9d = function (i4m) {
        var df5k = GUser.userId,
            iA7t = [],
            bQQ2x = [];
        k4o.bb4f(i4m, function (p4t) {
            p4t.typeFlag = "playlist";
            if (p4t.creator && p4t.creator.userId == df5k) {
                if (p4t.specialType == 5) p4t.name = "我喜欢的音乐";
                p4t.isHost = !0;
                iA7t.push(p4t)
            } else {
                bQQ2x.push(p4t)
            }
        });
        this.tP0x("playlist_new-" + df5k, iA7t);
        this.tP0x("playlist_fav-" + df5k, bQQ2x)
    };
    b3x.cvk9b = function (j4n) {
        this.co5t("playlist-update-cover", {
            data: j4n
        })
    };
    b3x.cyL0x = function () {
        var Qa8S = this.cvi9Z.B4F("host-plist");
        if (Qa8S.length == 0) {
            return
        }
        if (Qa8S.length == 1 && Qa8S[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Qa8S.length; i < len; i++) {
            var p4t = Qa8S[i];
            if (p4t.trackCount > 0) return p4t.id
        }
        return this.cvi9Z.B4F("host-plist")[0].id
    };
    b3x.cvf9W = function (D4H) {
        if (GUser && GUser.userId > 0) {
            this.co5t("playlist-upcount", {
                data: {
                    id: D4H
                }
            })
        }
    };
    b3x.FZ4d = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b3x.cyM0x = function () {
        return GUser.userId
    };
    b3x.biu3x = function (p4t) {
        if (p4t.userId == GUser.userId && p4t.specialType == 5) p4t.name = "我喜欢的音乐";
        h4l.z4D(this.constructor, "itemchange", {
            data: this.zi2x(p4t)
        });
        return p4t
    };
    H4L.fG6A.A4E({
        element: q4u.hx7q,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        fo6i = NEJ.R,
        bn4r = NEJ.F,
        Z4d = NEJ.O,
        H4L = c4g("nej.ut"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        n4r = c4g("nm.l"),
        b3x, J4N;
    q4u.fg6a({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function (P4T) {
                return P4T.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e4i) {
                e4i.data.limit = 1e3;
                delete e4i.data.id
            },
            format: function (P4T, e4i) {
                var bRD2x = [],
                    oK9B = P4T.programs;
                if (oK9B) {
                    for (var i = 0, l = oK9B.length; i < l; i++) {
                        if (oK9B[i].programFeeType < 10 || oK9B[i].buyed) {
                            bRD2x.push(oK9B[i])
                        }
                    }
                }
                return bRD2x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function (P4T, e4i) {
                return P4T.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function (e4i) {
                e4i.ext = e4i.data;
                e4i.data = {
                    id: e4i.ext.id
                };
                e4i.id = e4i.data.id
            },
            format: function (P4T, e4i) {
                n4r.X4b.L4P({
                    tip: "收藏成功"
                });
                var p4t = e4i.ext;
                p4t.subscribedCount++;
                p4t.subscribed = !0;
                return p4t
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.pV9M, "listchange", d4h)
            },
            onmessage: function () {
                var lT8L = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function (cg5l) {
                    n4r.X4b.L4P({
                        type: 2,
                        tip: lT8L[cg5l] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.pV9M, "listchange", d4h)
            },
            onmessage: function () {
                var lT8L = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function (cg5l) {
                    l4p.bix3x({
                        txt: lT8L[cg5l] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function (e4i) {
                var p4t = this.eu6o(e4i.data.id) || Z4d;
                e4i.ext = (p4t.listenerCount || 0) + 1
            },
            format: function (P4T, e4i) {
                var p4t = this.eu6o(e4i.data.id);
                if (!!p4t) {
                    p4t.listenerCount = Math.max(e4i.ext, p4t.listenerCount || 0)
                }
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.pV9M, "itemchange", {
                    attr: "playCount",
                    data: this.eu6o(e4i.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function (e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            },
            format: function (P4T, e4i) {
                var p4t = e4i.ext.data || this.eu6o(e4i.id);
                p4t.liked = true;
                p4t.likedCount++;
                e4i.ext.data = p4t;
                try {
                    top.player.setLike(p4t)
                } catch (e) {}
                return p4t
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.pV9M, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function (e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            },
            format: function (P4T, e4i) {
                var p4t = e4i.ext.data || this.eu6o(e4i.id);
                p4t.liked = false;
                p4t.likedCount--;
                e4i.ext.data = p4t;
                try {
                    top.player.setLike(p4t)
                } catch (e) {}
                return p4t
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.pV9M, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        }
    });
    q4u.pV9M = NEJ.C();
    b3x = q4u.pV9M.O4S(q4u.hs7l);
    b3x.cyN0x = function () {
        var df5k = GUser.userId;
        this.kQ8I({
            limit: 1001,
            key: "program_fav-" + df5k,
            data: {
                offset: 0,
                limit: 1e3,
                uid: df5k
            }
        })
    };
    b3x.cyO0x = function (cU5Z) {
        var oL9C = cU5Z[this.vI1x];
        l4p.cva9R(4, function (Q4U) {
            Q4U.tP0x("track_program-" + oL9C, cU5Z.songs)
        });
        delete cU5Z.songs;
        var bJ4N = cU5Z.mainSong;
        l4p.cva9R(4, function (Q4U) {
            Q4U.tP0x("track_program_main-" + oL9C, !bJ4N ? [] : [bJ4N])
        });
        cU5Z.mainSong = (bJ4N || Z4d).id
    };
    b3x.cyP0x = function (D4H) {
        var cU5Z = this.eu6o(D4H),
            df5k = localCache.baY1x("host.profile.userId");
        return !!cU5Z && cU5Z.dj.userId == df5k
    };
    b3x.cyR0x = function (D4H) {
        return !1
    };
    b3x.biu3x = function (p4t) {
        h4l.z4D(this.constructor, "itemchange", {
            attr: "detail",
            data: this.zi2x(p4t)
        });
        return p4t
    };
    b3x.cvf9W = function (D4H) {
        this.co5t("program-update-count", {
            data: {
                id: D4H
            }
        })
    };
    l4p.bvv6p = function (e4i) {
        var Q4U = q4u.pV9M.A4E({
            onitemadd: function () {
                (e4i.onsuccess || bn4r)()
            },
            onerror: function () {
                (e4i.onerror || bn4r)()
            }
        });
        if (e4i.data.liked) {
            Q4U.PW8O(e4i.data)
        } else {
            Q4U.vJ1x(e4i.data)
        }
    };
    b3x.vJ1x = function (cU5Z) {
        if (!l4p.gQ7J()) return;
        var cp5u = {
            ext: {}
        };
        if (k4o.kU8M(cU5Z)) {
            cp5u.id = cU5Z.id;
            cp5u.ext.data = cU5Z
        } else {
            cp5u.id = cU5Z
        }
        this.co5t("program-like", cp5u)
    };
    b3x.PW8O = function (cU5Z) {
        if (!l4p.gQ7J()) return;
        var cp5u = {
            ext: {}
        };
        if (k4o.kU8M(cU5Z)) {
            cp5u.id = cU5Z.id;
            cp5u.ext.data = cU5Z
        } else {
            cp5u.id = cU5Z
        }
        this.co5t("program-unlike", cp5u)
    };
    H4L.fG6A.A4E({
        element: q4u.pV9M,
        event: ["listchange", "itemchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        fo6i = NEJ.R,
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        q4u = c4g("nm.d"),
        n4r = c4g("nm.l"),
        l4p = c4g("nm.x"),
        K4O = "playlist-tracks_",
        l4p = c4g("nm.x"),
        b3x;
    q4u.fg6a({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function (e4i) {
                e4i.data.c = JSON.stringify([{
                    id: e4i.data.id
                }])
            },
            format: function (P4T, e4i) {
                var bg4k = l4p.Cg3x(P4T.songs[0]);
                bg4k.privilege = P4T.privileges[0];
                return bg4k
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function (e4i) {
                e4i.data.n = 1e3
            },
            format: function (P4T, e4i) {
                var he7X = [];
                this.sp0x.biu3x(P4T.playlist);
                k4o.bb4f(P4T.playlist.tracks, function (bJ4N, r4v) {
                    var bvV6P = l4p.Cg3x(bJ4N);
                    bvV6P.privilege = P4T.privileges[r4v];
                    he7X.push(bvV6P)
                }, this);
                return he7X
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function (P4T, e4i) {
                var he7X = [];
                k4o.bb4f(P4T.songs, function (bg4k) {
                    he7X.push(l4p.Cg3x(bg4k))
                });
                return he7X
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e4i) {
                var bu4y = {},
                    j4n = e4i.data,
                    cuP9G = this.hh7a(e4i.key) || [];
                Cq3x = [];
                k4o.bb4f(cuP9G, function (bJ4N) {
                    var D4H = k4o.kU8M(bJ4N) ? bJ4N.id : bJ4N;
                    bu4y[D4H] = true
                });
                e4i.ext = [];
                k4o.bb4f(j4n.tracks, function (bJ4N) {
                    var D4H = k4o.kU8M(bJ4N) ? bJ4N.id : bJ4N;
                    if (!bu4y[D4H]) {
                        Cq3x.push(D4H);
                        bu4y[D4H] = true;
                        e4i.ext.push(bJ4N)
                    }
                });
                j4n.trackIds = JSON.stringify(Cq3x);
                j4n.op = "add";
                if (!Cq3x.length) {
                    e4i.value = {
                        code: 502
                    }
                }
            },
            format: function (P4T, e4i) {
                n4r.X4b.L4P({
                    tip: "已添加至歌单"
                });
                var mT8L = this.sp0x.eu6o(e4i.data.pid);
                if (!!P4T.coverImgUrl) mT8L.coverImgUrl = P4T.coverImgUrl;
                k4o.mD8v(e4i.ext, function (bJ4N) {
                    this.yN2x(e4i, k4o.kU8M(bJ4N) ? bJ4N : null);
                    if (!!mT8L) mT8L.trackCount++
                }, this);
                h4l.z4D(q4u.hx7q, "itemchange", {
                    data: mT8L || {},
                    cmd: "add"
                });
                this.z4D("onaddsuccess");
                return null
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.vQ1x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                });
                var oL9C = e4i.data.pid,
                    ct5y = this.jl7e(e4i.key)
            },
            onmessage: function () {
                var lT8L = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function (cg5l) {
                    setTimeout(function () {
                        n4r.X4b.L4P({
                            tip: lT8L[cg5l] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e4i) {
                var j4n = e4i.data;
                e4i.ext = j4n.trackIds;
                j4n.trackIds = JSON.stringify(j4n.trackIds);
                j4n.op = "del"
            },
            format: function (P4T, e4i) {
                var mT8L = this.sp0x.eu6o(e4i.data.pid);
                k4o.bb4f(e4i.ext, function (D4H) {
                    this.bfS3x({
                        id: D4H,
                        key: "track_playlist-" + e4i.data.pid
                    }, !0);
                    if (!!mT8L) mT8L.trackCount = Math.max(0, mT8L.trackCount - 1)
                }, this);
                h4l.z4D(q4u.hx7q, "itemchange", {
                    data: mT8L || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.vQ1x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                })
            },
            onmessage: function (cg5l) {
                l4p.bix3x({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function (P4T, e4i) {
                return this.bvZ6T.biu3x(P4T.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function (P4T, e4i) {
                var i4m = [];
                if (e4i.data.type == -1) {
                    if (P4T.weekData && P4T.weekData.length) {
                        e4i.data.type = 1
                    } else {
                        e4i.data.type = 0
                    }
                }
                if (e4i.data.type == 1) {
                    i4m = this.bwa6U(P4T.weekData)
                } else {
                    i4m = this.bwa6U(P4T.allData)
                }
                return i4m
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function (P4T, e4i) {
                var nm9d = [],
                    i4m = P4T.recommend || [];
                k4o.bb4f(i4m, function (bg4k, r4v) {
                    nm9d.push({
                        action: "recommendimpress",
                        json: {
                            alg: bg4k.alg,
                            scene: "user-song",
                            position: r4v,
                            id: bg4k.id
                        }
                    })
                });
                this.lf8X.YR1x(nm9d);
                e4i.limit = i4m.length;
                return i4m
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            },
            format: function (o4s, e4i) {
                return o4s
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q4u.vQ1x = NEJ.C();
    b3x = q4u.vQ1x.O4S(q4u.hs7l);
    b3x.cs5x = function () {
        this.cw5B();
        this.sp0x = q4u.hx7q.A4E();
        this.bvZ6T = q4u.pV9M.A4E();
        this.lf8X = q4u.hO7H.A4E()
    };
    b3x.bwa6U = function (i4m) {
        var o4s = [],
            fb6V = 0;
        k4o.bb4f(i4m, function (p4t, r4v) {
            var bg4k = l4p.Cg3x(p4t.song);
            if (r4v == 0) {
                fb6V = p4t.score
            }
            bg4k.max = fb6V;
            bg4k.playCount = p4t.playCount;
            bg4k.score = p4t.score;
            o4s.push(bg4k)
        });
        return o4s
    };
    H4L.fG6A.A4E({
        element: q4u.vQ1x,
        event: ["listchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        cV5a = c4g("nm.pc");
    var biE3x = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var rd0x = function (bR5W) {
        var RF8x = "orpheus://orpheus";
        if (GEnvType == "local") RF8x = "http://igame.163.com";
        window.top.postMessage(JSON.stringify(bR5W), RF8x)
    };
    var cuO9F = function (lC8u) {
        var kq8i = "http://" + location.host + "/",
            PS8K = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            fj6d = PS8K.exec(lC8u);
        if (!fj6d) return cuL9C(lC8u);
        var hc7V = fj6d[2],
            hd7W = fj6d[3],
            df5k = fj6d[4] || "",
            iC7v = "";
        switch (hc7V) {
            case "album":
                iC7v = "#/m/album/comment/?rid=" + biE3x[hc7V] + hd7W + "&id=" + hd7W;
                break;
            case "playlist":
                iC7v = "#/m/playlist/comment/?rid=" + biE3x[hc7V] + hd7W + "&id=" + hd7W;
                break;
            case "song":
            case "dj":
            case "program":
                iC7v = "#/m/song?rid=" + biE3x[hc7V] + hd7W;
                break;
            case "event":
                iC7v = "#/m/friend/event/?id=" + hd7W + "&uid=" + df5k;
                break;
            case "user/home":
                iC7v = "#/m/personal/?uid=" + hd7W;
                break;
            case "mv":
                iC7v = "#/m2/mv/?id=" + hd7W;
                break;
            case "activity":
                iC7v = "#/m/friend/activity?id=" + hd7W;
                break;
            case "video":
                iC7v = "#/m2/mv/?id=" + hd7W + "&type=1";
                break;
            default:
                iC7v = "#/m/" + hc7V + "/?id=" + hd7W
        }
        return kq8i + iC7v
    };
    var cuL9C = function (lC8u) {
        var cuK9B = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var fj6d = cuK9B.exec(lC8u);
        if (fj6d) return "http://v.youku.com/v_show/id_" + fj6d[1];
        return lC8u
    };
    cV5a.ez6t = function (hc7V, hd7W) {
        rd0x({
            name: "play",
            args: {
                type: hc7V,
                id: hd7W
            }
        })
    };
    cV5a.fK6E = function () {
        rd0x({
            name: "pause"
        })
    };
    cV5a.zX2x = function (lC8u) {
        rd0x({
            name: "open",
            args: {
                link: cuO9F(lC8u)
            }
        })
    };
    cV5a.mL8D = function (hc7V, hd7W) {
        rd0x({
            name: "share",
            args: {
                type: hc7V,
                id: hd7W
            }
        })
    };
    cV5a.bxF7y = function (hc7V, hd7W) {
        rd0x({
            name: "comment",
            args: {
                type: hc7V,
                id: hd7W
            }
        })
    };
    cV5a.cuJ9A = function () {
        rd0x({
            name: "init"
        })
    };
    cV5a.PL7E = function (ch5m) {
        rd0x({
            name: "setHeight",
            args: {
                height: ch5m
            }
        })
    };
    cV5a.ji7b = function (bE4I, dv5A) {
        rd0x({
            name: "toast",
            args: {
                message: bE4I || "",
                state: dv5A
            }
        })
    };
    cV5a.Wg0x = function (lC8u) {
        rd0x({
            name: "login",
            args: {
                link: lC8u
            }
        })
    };
    cV5a.byi7b = function (Ac2x) {
        rd0x({
            name: "topbar",
            args: {
                show: !!Ac2x
            }
        })
    };
    cV5a.cuG9x = function (bv4z) {
        rd0x({
            name: "refreshtopbar",
            args: {
                info: bv4z
            }
        })
    };
    cV5a.cuE9v = function (bs4w, r4v) {
        rd0x({
            name: "big",
            args: {
                arr: bs4w,
                index: r4v
            }
        })
    };
    cV5a.KS5X = function (cM5R) {
        rd0x({
            name: "download",
            args: {
                img: cM5R
            }
        })
    }
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z) b.forEach(h, void 0);
                            else if (b.length === +b.length)
                            for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else
                            for (c in b)
                                if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                        }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {})();
(function () {
    var byv7o;
    var tE0x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cuD9u = 0;
    var byA7t = 0;
    var byF7y = 1;
    var byI7B = 0;
    var biM3x = "";
    var byK7D = "";
    var byL7E = "";
    var VZ0x = "";
    var VS9J = "";
    var biQ3x = "";
    var byT7M = 0;
    var byU7N = "";
    var JD5I = "";
    var Do3x = 0;
    var biS3x = ntes_get_domain();
    var biU3x = null;
    var cyV0x = "//analytics.163.com";
    var cuv9m = function () {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + biS3x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + biS3x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + biS3x
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cuu9l = 0;
    var Pv7o = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Pv7o))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << Pv7o) - 1;
        for (var b = 0; b < d.length * Pv7o; b += Pv7o) {
            c[b >> 5] |= (d.charCodeAt(b / Pv7o) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cuu9l ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        VZ0x = "-";
        biQ3x = "-";
        VS9J = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            VZ0x = b.width + "x" + b.height;
            biQ3x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                VZ0x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            VS9J = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                VS9J = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        byT7M = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cyW0x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cuv9m;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || byv7o;
        biM3x = escape(a || document.location);
        byK7D = escape(m || document.title);
        byL7E = l === true ? "" : escape(l || document.referrer);
        byU7N = ntes_get_flashver();
        var b = (new Date).getTime();
        if (biU3x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            biU3x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (biM3x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (biU3x) {
                tE0x = fetch_visitor_hash();
                byA7t = 1;
                ntes_set_cookie_long("_ntes_nnid", tE0x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tE0x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            tE0x = h.substr(0, o);
            Do3x = h.substr(o + 1, p - o - 1);
            if (Do3x == 0) {
                Do3x = (new Date).getTime();
                f = true
            }
            if (!tE0x) {
                tE0x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", tE0x + "," + Do3x);
                ntes_set_cookie_long("_ntes_nuid", tE0x)
            }
            if (Do3x != 0 && b - Do3x > 365 * 86400 * 1e3) {
                Do3x = 0;
                ntes_set_cookie_long("_ntes_nnid", tE0x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tE0x)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        JD5I = c("P_INFO", "P_OINFO");
        JD5I = JD5I ? JD5I.substr(0, JD5I.indexOf("|")) : "";
        byI7B = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", tE0x, "&_nvtm=", cuD9u, "&_nvsf=", byF7y, "&_nvfi=", byA7t, "&_nlag=", VS9J, "&_nlmf=", byT7M, "&_nres=", VZ0x, "&_nscd=", biQ3x, "&_nstm=", byI7B, "&_nurl=", biM3x, "&_ntit=", byK7D, "&_nref=", byL7E, "&_nfla=", byU7N, "&_nssn=", JD5I, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        byF7y = 0;
        neteaseTracker.callback = null
    }
    byv7o = "iad";
    neteaseTracker()
})();
(function () {})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {},
        l = d.lib = {},
        s = function () {},
        t = l.Base = {
            extend: function (a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function () {},
            mixIn: function (a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function (a) {
                return (a || v).stringify(this)
            },
            concat: function (a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function () {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function (a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function (a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
                this.j4n = new r.init;
                this.bzH7A = 0
            },
            VH9y: function (a) {
                "string" == typeof a && (a = x.parse(a));
                this.j4n.concat(a);
                this.bzH7A += a.sigBytes
            },
            Ae2x: function (a) {
                var c = this.j4n,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bzC7v, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this.bzJ7C(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.j4n = this.j4n.clone();
                return a
            },
            bzC7v: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function () {
            q.reset.call(this);
            this.biW3x()
        },
        update: function (a) {
            this.VH9y(a);
            this.Ae2x();
            return this
        },
        finalize: function (a) {
            a && this.VH9y(a);
            return this.VC9t()
        },
        blockSize: 16,
        biV3x: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cun9e: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.bu4y;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function (d) {
            var l = d.length,
                s = this.bu4y,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bu4y: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        biW3x: function () {
            this.dV6P = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bzJ7C: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dV6P.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        VC9t: function () {
            var b = this.j4n,
                n = b.words,
                a = 8 * this.bzH7A,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Ae2x();
            b = this.dV6P;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function () {
            var b = v.clone.call(this);
            b.dV6P = this.dV6P.clone();
            return b
        }
    });
    t.MD5 = v.biV3x(r);
    t.HmacMD5 = v.cun9e(r)
})(Math);
(function () {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function (d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function (d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function (e, a) {
                return this.create(this.biY3x, e, a)
            },
            createDecryptor: function (e, a) {
                return this.create(this.cue9V, e, a)
            },
            init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bAc7V = e;
                this.K4O = a;
                this.reset()
            },
            reset: function () {
                t.reset.call(this);
                this.biW3x()
            },
            process: function (e) {
                this.VH9y(e);
                return this.Ae2x()
            },
            finalize: function (e) {
                e && this.VH9y(e);
                return this.VC9t()
            },
            keySize: 4,
            ivSize: 4,
            biY3x: 1,
            cue9V: 2,
            biV3x: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        VC9t: function () {
            return this.Ae2x(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function (e, a, b) {
            var c = this.bAf7Y;
            c ? this.bAf7Y = u : c = this.bAg7Z;
            for (var d = 0; d < b; d++) e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function (e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function (e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function (e, a) {
                this.bAk7d = e;
                this.bAf7Y = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bAk7d,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bAg7Z = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bAk7d,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bAg7Z = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function () {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.bAc7V == this.biY3x) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bzC7v = 1;
            this.eU6O = c.call(a, this, b && b.words)
        },
        bzJ7C: function (a, b) {
            this.eU6O.processBlock(a, b)
        },
        VC9t: function () {
            var a = this.cfg.padding;
            if (this.bAc7V == this.biY3x) {
                a.pad(this.j4n, this.blockSize);
                var b = this.Ae2x(!0)
            } else b = this.Ae2x(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function (a) {
                this.mixIn(a)
            },
            toString: function (a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function (a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.Uu9l(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            Uu9l: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function (a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.Uu9l(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            biW3x: function () {
                for (var a = this.K4O, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cuc9T = d + 6) + 1), e = this.cub9S = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.cua9R = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function (a, b) {
                this.bAm7f(a, b, this.cub9S, t, r, w, v, l)
            },
            decryptBlock: function (a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bAm7f(a, c, this.cua9R, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bAm7f: function (a, b, c, d, e, j, l, f) {
                for (var m = this.cuc9T, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.biV3x(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
! function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
            window.console.info("f result:"+f)
            window.console.info("fstring result:"+f.toString())
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), window.console.info("AES:"+a),window.console.info("RSA:"+b+"  "+c),e = encryptedString(d, a),window.console.info("result:"+e),e
    }

    function d(d, e, f, g) {
        var h = {},
            i = a(16);
            window.console.info("aes key:"+i)
            //i = "FFFFFFFFFFFFFFFF"
        return h.encText = b(d, g), window.console.info("AES result:"+h.encText),h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), window.console.info("AES result2:"+h.encText),h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c4g = NEJ.P,
        ec6W = c4g("nej.g"),
        x4B = c4g("nej.j"),
        k4o = c4g("nej.u"),
        Pr7k = c4g("nm.x.ek");
    Pr7k.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Pr7k.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c4g = NEJ.P,
        ec6W = c4g("nej.g"),
        x4B = c4g("nej.j"),
        k4o = c4g("nej.u"),
        Pr7k = c4g("nm.x.ek"),
        l4p = c4g("nm.x");
    if (x4B.bo4s.redefine) return;
    window.GEnc = true;
    var biZ3x = function (ctY9P) {
        var o4s = [];
        k4o.bb4f(ctY9P, function (ctX9O) {
            o4s.push(Pr7k.emj[ctX9O])
        });
        return o4s.join("")
    };
    var ctW9N = x4B.bo4s;
    x4B.bo4s = function (V4Z, e4i) {
        var j4n = {},
            e4i = NEJ.X({}, e4i),
            lh8Z = V4Z.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V4Z) && !(e4i.headers && e4i.headers[ec6W.wD1x] == ec6W.Ea3x) && !e4i.noEnc) {
            if (lh8Z != -1) {
                j4n = k4o.hE7x(V4Z.substring(lh8Z + 1));
                V4Z = V4Z.substring(0, lh8Z)
            }
            if (e4i.query) {
                j4n = NEJ.X(j4n, k4o.fA6u(e4i.query) ? k4o.hE7x(e4i.query) : e4i.query)
            }
            if (e4i.data) {
                j4n = NEJ.X(j4n, k4o.fA6u(e4i.data) ? k4o.hE7x(e4i.data) : e4i.data)
            }
            j4n["csrf_token"] = x4B.gV7O("__csrf");
            V4Z = V4Z.replace("api", "weapi");
            e4i.method = "post";
            delete e4i.query;
            window.console.info(j4n);
            var bAQ8I = window.asrsea(JSON.stringify(j4n), biZ3x(["流泪", "强"]), biZ3x(Pr7k.md), biZ3x(["爱心", "女孩", "惊恐", "大笑"]));
            e4i.data = k4o.de5j({
                params: bAQ8I.encText,
                encSecKey: bAQ8I.encSecKey
            })
        }
        ctW9N(V4Z, e4i)
    };
    x4B.bo4s.redefine = true
})();
(function () {
    window.setTimeout(function () {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function (tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function () {})();
(function () {})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        dm5r = c4g("nej.p"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        dz5E = c4g("nm.u"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        n4r = c4g("nm.l"),
        cV5a = c4g("nm.pc"),
        bjb3x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j4n = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        },
        ctS9J = function () {
            if (h4l && h4l.z4D) {
                h4l.dispatchEventalias = h4l.z4D
            }
        };
    ctS9J();
    l4p.bjc3x = function (bJ4N) {
        if (!bJ4N || bJ4N.copyrightId === undefined || !!bJ4N.program) return false;
        if (window.GAbroad) {
            bJ4N.fee = 0;
            return true
        }
        if (bJ4N.status < 0) return true;
        var Po7h;
        if (typeof GCopyrights !== "undefined") Po7h = GCopyrights;
        try {
            if (!Po7h && !!top.GCopyrights) Po7h = top.GCopyrights
        } catch (e) {}
        if (Po7h) {
            var r4v = k4o.dd5i(Po7h, bJ4N.copyrightId);
            if (r4v >= 0) return true
        }
        return false
    };
    l4p.bjd3x = function () {
        var Ah2x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            vt1x = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            },
            ctN9E = {
                song: "单曲",
                album: "专辑",
                artist: "歌手",
                playlist: "歌单",
                dj: "电台节目",
                searchsong: "单曲搜索",
                searchlyric: "歌词搜索",
                toplist: "榜单",
                event: "动态",
                djradio: "电台",
                day: "每日歌曲推荐",
                record: "听歌排行榜"
            };
        var ctM9D = function (K4O, j4n, Pl7e) {
            switch (K4O) {
                case "event":
                    j4n = j4n.split("|");
                    return "/event?id=" + j4n[0] + "&uid=" + j4n[1];
                case "searchsong":
                case "searchlyric":
                    var t4x = K4O == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j4n) + "&type=" + t4x;
                case "toplist":
                    return "/discover/toplist?id=" + j4n + "&_hash=songlist-" + Pl7e;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Pl7e;;
                case "record":
                    j4n = j4n.split("|");
                    return "/user/songs/rank?id=" + j4n[0] + "&cat=" + j4n[1];
                    break;
                default:
                    return "/" + K4O + "?id=" + j4n + "&_hash=songlist-" + Pl7e
            }
        };
        return function (dZ6T, Pl7e) {
            if (!dZ6T) return null;
            var Kr5w = dZ6T.fid || (dZ6T.type != 18 ? dZ6T.type : null),
                bje3x = dZ6T.fdata || dZ6T.rid,
                bBD8v = dZ6T.page || dZ6T.fhref;
            var K4O = vt1x[Kr5w];
            if (!K4O) {
                var xQ2x = (bBD8v || "").match(Ah2x);
                if (xQ2x) K4O = xQ2x[1]
            }
            if (!K4O) return null;
            return {
                title: ctN9E[K4O],
                link: !vt1x[Kr5w] ? bBD8v : ctM9D(K4O, bje3x, Pl7e),
                fid: Kr5w,
                fdata: bje3x
            }
        }
    }();
    l4p.Vr9i = function (lq8i) {
        var dg5l = lq8i;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dg5l = GUser;
        return dg5l
    };
    l4p.gQ7J = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l4p.Jz5E = function () {
        var Ah2x = /#(.*?)$/;
        return function (gk6e) {
            var jf7Y = gk6e === false ? location : top.location;
            return Ah2x.test(jf7Y.href) ? RegExp.$1 : ""
        }
    }();
    l4p.An2x = function () {
        var Ao2x = a3x.cZ5e("audio"),
            ctJ9A = Ao2x.canPlayType && Ao2x.canPlayType("audio/mpeg");
        if (ctJ9A) return 2;
        var ctH9y = l4p.bjg3x().supported;
        if (ctH9y) return 1;
        return 0
    };
    l4p.bjg3x = function () {
        var fW6Q, bji3x = !1,
            bjj3x = "";
        if (dm5r.di5n.browser == "ie") {
            try {
                fW6Q = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                fW6Q = null
            }
            if (fW6Q) {
                bji3x = !0;
                bjj3x = fW6Q.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                fW6Q = navigator.plugins["Shockwave Flash"];
                if (fW6Q) {
                    bji3x = !0;
                    bjj3x = fW6Q.description
                }
            }
        }
        return {
            supported: bji3x,
            version: bjj3x
        }
    };
    l4p.rp0x = function () {
        return "网易云音乐"
    };
    l4p.ctG9x = function () {
        return j4n
    };
    l4p.bCo8g = function (cL5Q) {
        var D4H = j4n[cL5Q];
        return D4H == null ? "" : bjb3x.replace("{ID}", D4H)
    };
    l4p.vR1x = function (bl4p, dT6N, Ap2x) {
        if (!bl4p) return "";
        if (!!Ap2x) {
            bl4p = l4p.ctF9w(bl4p)
        }
        return l4p.Vh9Y(l4p.ctE9v(bl4p, dT6N))
    };
    l4p.Vg9X = function () {
        var PS8K = {
                AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
                LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
                ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
                ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
                LING: /\n/g,
                BLANK: /\s/g,
                MLINE: /([ \f\r\t\v]*\n){2,}/g
            },
            bjl3x = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            },
            ctD9u = {
                r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                '"': "&quot;",
                "'": "&#39;",
                "&lt;": "&lt;",
                "&gt;": "&gt;"
            },
            ctz9q = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var ctw9n = function (dA5F, bjm3x) {
            dA5F = Jw5B(dA5F);
            if (!!bjm3x) {
                dA5F = dA5F.replace(PS8K.MLINE, "\n\n").replace(PS8K.LING, "</br>")
            }
            dA5F = l4p.Vh9Y(dA5F);
            return dA5F
        };
        var Jw5B = function (bl4p) {
            return k4o.CV3x(ctD9u, bl4p)
        };
        return function (dA5F, e4i, el6f) {
            e4i = e4i || {};
            el6f = el6f || {};
            el6f.actHash = {};
            var ctq9h = !!e4i.parseLink,
                ctl9c = !!e4i.parseAct,
                ctk9b = e4i.linkTpl || bjl3x.LINK,
                ctj9a = e4i.atTpl || bjl3x.AT,
                cti9Z = e4i.atUrl || "/user/home?nickname=",
                cth9Y = e4i.actTpl || bjl3x.ACT,
                bjm3x = !!e4i.keepSpace,
                bjn3x = e4i.linkKlass || "s-fc7";
            cza0x = e4i.actBiJson || "";
            if (!dA5F) return "";
            dA5F = dA5F.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lj8b = ctz9q[ctq9h + 2 * ctl9c],
                cY5d = PS8K[lj8b],
                bs4w = null,
                lB8t = null,
                gM7F = 0,
                czb0x = "",
                czc0x = "";
            var Aw2x = [];
            cY5d.lastIndex = 0;
            while (bs4w = cY5d.exec(dA5F)) {
                var fj6d = {
                    html: "",
                    before: bs4w.index - 1,
                    after: bs4w.index + bs4w[0].length
                };
                if (bs4w[1]) {
                    var lB8t = bs4w[2].replace(/[^\x00-\xff]/g, "**");
                    if (lB8t.length < 4 || lB8t.length > 32) {} else {
                        var OU7N = a3x.er6l(ctj9a);
                        fj6d.html = a3x.bW5b(OU7N, {
                            value: Jw5B(bs4w[2]),
                            url: encodeURI(cti9Z + bs4w[2]),
                            klass: bjn3x
                        });
                        Aw2x.push(fj6d)
                    }
                } else if (bs4w.length > 8 && bs4w[4]) {
                    var OU7N = a3x.er6l(ctk9b);
                    fj6d.html = a3x.bW5b(OU7N, {
                        value: Jw5B(bs4w[4]),
                        url: bs4w[4],
                        klass: bjn3x
                    });
                    Aw2x.push(fj6d)
                } else {
                    var bEB8t = lj8b == "ACT_NOLINK" ? 4 : 9;
                    var OU7N = a3x.er6l(cth9Y);
                    fj6d.html = a3x.bW5b(OU7N, {
                        value: Jw5B(bs4w[bEB8t]),
                        klass: bjn3x
                    });
                    Aw2x.push(fj6d);
                    el6f.actHash[bs4w[bEB8t].slice(1, -1)] = true
                }
            }
            var csX9O = Aw2x.length,
                lq8i = {
                    before: dA5F.length - 1,
                    after: 0
                },
                bjw3x = "";
            for (var i = 0; i <= csX9O; i++) {
                var hS7L, gp6j;
                hS7L = (Aw2x[i - 1] || lq8i).after;
                gp6j = (Aw2x[i] || lq8i).before;
                if (gp6j >= hS7L && hS7L >= 0 && gp6j <= dA5F.length - 1) {
                    bjw3x += ctw9n(dA5F.substring(hS7L, gp6j + 1), bjm3x)
                }
                if (Aw2x[i]) {
                    bjw3x += Aw2x[i].html
                }
            }
            return bjw3x
        }
    }();
    l4p.ctF9w = function () {
        var cY5d = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bl4p) {
            return (bl4p || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cY5d, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l4p.ctE9v = function () {
        var cY5d = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eF6z = function (lB8t, dT6N) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lB8t) + '" class="' + (dT6N || "") + '">@' + lB8t + "</a>"
        };
        return function (bl4p, dT6N) {
            return (bl4p || "").replace(cY5d, function ($0, $1) {
                return eF6z($1, dT6N)
            })
        }
    }();
    l4p.Vh9Y = function () {
        var cY5d = /\[(.*?)\]/g;
        return function (bl4p) {
            return (bl4p || "").replace(cY5d, function ($1, $2) {
                var V4Z = l4p.bCo8g($2);
                return !V4Z ? $1 : '<img src="' + V4Z + '"/>'
            })
        }
    }();
    l4p.Be3x = function (G4K, dT6N) {
        a3x.bA4E(G4K, dT6N) ? a3x.v4z(G4K, dT6N) : a3x.w4A(G4K, dT6N)
    };
    l4p.Jp5u = function (cE5J, kq8i) {
        cE5J = a3x.B4F(cE5J);
        kq8i = a3x.B4F(kq8i);
        if (!cE5J || !kq8i) return !1;
        for (kq8i = kq8i.parentNode; !!kq8i && kq8i != cE5J; kq8i = kq8i.parentNode);
        return kq8i == cE5J
    };
    l4p.kX8P = function () {
        var bFd9U = function (gz7s) {
            return (gz7s < 10 ? "0" : "") + gz7s
        };
        return function (kg8Y) {
            kg8Y = parseInt(kg8Y) || 0;
            if (!kg8Y) return "00:00";
            var xG2x = Math.floor(kg8Y % 60),
                csW9N = Math.floor(kg8Y / 60);
            return bFd9U(csW9N) + ":" + bFd9U(xG2x)
        }
    }();
    l4p.xF2x = function (fF6z, va1x) {
        if (!fF6z || fF6z.length == 0) return "";
        va1x = va1x || "/";
        var bs4w = [];
        for (var i = fF6z.length - 1; i >= 0; i--) {
            bs4w.unshift(fF6z[i].name)
        }
        return bs4w.join(va1x)
    };
    l4p.sB0x = function () {
        var OK7D = function (hC7v, dT6N, cE5J, UD9u) {
            var eF6z = UD9u ? l4p.bjA3x : k4o.dQ5V;
            if (!hC7v || !hC7v.name) return "";
            if (!hC7v.id) return '<span class="' + dT6N + '">' + eF6z(hC7v.name) + "</span>";
            return "<a" + (cE5J ? ' target="_blank"' : "") + ' class="' + dT6N + '" href="/artist?id=' + hC7v.id + '" hidefocus="true">' + eF6z(hC7v.name) + "</a>"
        };
        return function (fF6z, T4X, va1x, cE5J, bFH9y, UD9u) {
            if (!fF6z || !fF6z.length) return "";
            va1x = va1x || "/";
            T4X = T4X || "";
            Jn5s = "";
            var eb6V = [];
            for (var i = 0, i4m = [], sw0x = [], fy6s; i < fF6z.length; ++i) {
                eb6V.push(fF6z[i].name);
                if (!fF6z[i] || fF6z[i].id <= 0) {
                    sw0x.push(fF6z[i]);
                    continue
                }
                if (k4o.gr6l(T4X)) {
                    fy6s = T4X(fF6z[i])
                } else {
                    fy6s = OK7D(fF6z[i], T4X, cE5J, UD9u)
                }
                if (fy6s && bFH9y && fF6z[i].tns && fF6z[i].tns.length > 0) {
                    Jn5s = k4o.dQ5V(fF6z[i].tns[0]);
                    fy6s += '<span class="s-fc8" title="' + Jn5s + '"> - (' + Jn5s + ")</span>"
                }!!fy6s && i4m.push(fy6s)
            }
            for (var i = 0, fy6s; i < sw0x.length; ++i) {
                if (k4o.gr6l(T4X)) {
                    fy6s = T4X(sw0x[i])
                } else {
                    fy6s = OK7D(sw0x[i], T4X, cE5J, UD9u)
                }
                if (fy6s && bFH9y && sw0x[i].tns && sw0x[i].tns.length > 0) {
                    Jn5s = k4o.dQ5V(sw0x[i].tns[0]);
                    fy6s += '<span class="s-fc8" title="' + Jn5s + '"> - (' + Jn5s + ")</span>"
                }!!fy6s && i4m.push(fy6s)
            }
            return '<span title="' + eb6V.join(va1x) + '">' + i4m.join(va1x) + "</span>"
        }
    }();
    l4p.xE2x = function (fk6e, pr9i) {
        pr9i = pr9i || "86";
        return !!fk6e && (pr9i == "86" ? /^\d{11}$/ : /^\d+$/).test(fk6e)
    };
    l4p.czd0x = function (fk6e) {
        if (!l4p.xE2x(fk6e)) return fk6e;
        return fk6e.substring(0, 3) + "****" + fk6e.substr(7)
    };
    l4p.ju7n = function () {
        var cY5d = /^\s+$/g;
        return function (ii7b) {
            return !ii7b || cY5d.test(ii7b)
        }
    }();
    l4p.OD7w = function () {
        var bjC3x = /[^\x00-\xfff]/g;
        return function (ii7b) {
            var csT9K = ii7b.match(bjC3x) || [],
                dt5y = csT9K.length;
            return ii7b.length + dt5y
        }
    }();
    l4p.AG2x = function () {
        var bjC3x = /[^\x00-\xfff]/;
        return function (ii7b, eT6N) {
            for (var i = 0, len = ii7b.length; i < len && eT6N > 0; i++) {
                if (bjC3x.test(ii7b.charAt(i))) {
                    eT6N -= 2;
                    if (eT6N < 0) {
                        break
                    }
                } else {
                    eT6N -= 1
                }
            }
            return ii7b.substring(0, i)
        }
    }();
    l4p.AH2x = function (ii7b, eT6N, TC9t) {
        eT6N = eT6N || 10;
        TC9t = TC9t || nej.p.di5n.engine == "trident" && parseInt(nej.p.di5n.release) < 5;
        if (TC9t && l4p.OD7w(ii7b) > eT6N) {
            return l4p.AG2x(ii7b, eT6N) + "..."
        } else {
            return ii7b
        }
    };
    l4p.bGQ9H = function (f4j) {
        return f4j === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f4j.type || f4j.href || ~f4j.tabIndex)
    };
    l4p.csS9J = function (d4h, cE5J) {
        if (!d4h || !cE5J) return !0;
        var f4j, t4x = d4h.type.toLowerCase();
        if (t4x == "mouseout") {
            f4j = d4h.relatedTarget || d4h.toElement
        } else if (t4x == "mouseover") {
            f4j = d4h.relatedTarget || d4h.fromElement
        }
        return !f4j || f4j !== cE5J && !l4p.Jp5u(cE5J, f4j)
    };
    l4p.sI0x = function () {
        Q4U = {};
        return function (f4j, dU6O) {
            var D4H = a3x.ld8V(f4j),
                K4O = "hover-" + D4H;
            if (!dU6O || !D4H || !!Q4U[K4O]) return;
            Q4U[K4O] = !0;
            h4l.s4w(D4H, "mouseover", function () {
                var bjI3x = a3x.F4J(f4j, "hshow") || [];
                var bjJ3x = a3x.F4J(f4j, "icn-dislike") || [];
                a3x.w4A(D4H, "z-hover");
                a3x.Y4c(bjI3x[0], "display", "block");
                a3x.Y4c(bjJ3x[0], "display", "block")
            });
            h4l.s4w(D4H, "mouseout", function () {
                var bjI3x = a3x.F4J(f4j, "hshow") || [];
                var bjJ3x = a3x.F4J(f4j, "icn-dislike") || [];
                a3x.v4z(D4H, "z-hover");
                a3x.Y4c(bjI3x[0], "display", "none");
                a3x.Y4c(bjJ3x[0], "display", "none")
            })
        }
    }();
    l4p.bHA9r = function () {
        var bu4y = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (ii7b) {
            return k4o.CV3x(bu4y, ii7b)
        }
    }();
    l4p.xA2x = function (bw4A) {
        if (k4o.Fw4A(bw4A)) bw4A = bw4A.getTime();
        var fe6Y = new Date,
            jS8K = fe6Y.getTime() - bw4A;
        if (jS8K <= 6e4) return "刚刚";
        var mZ8R = fe6Y.getHours() * 36e5 + fe6Y.getMinutes() * 6e4 + fe6Y.getSeconds() * 1e3;
        if (jS8K <= mZ8R) {
            if (jS8K < 36e5) {
                var Ci3x = Math.floor(jS8K / 6e4);
                return Ci3x + "分钟前"
            }
            return k4o.hL7E(bw4A, "HH:mm")
        } else {
            if (jS8K < mZ8R + 864e5) {
                return "昨天" + k4o.hL7E(bw4A, "HH:mm")
            } else {
                var go6i = fe6Y.getFullYear(),
                    Oo7h = new Date(go6i, 0, 1);
                var mZ8R = fe6Y.getTime() - Oo7h.getTime();
                if (jS8K < mZ8R) {
                    return k4o.hL7E(bw4A, "M月d日 HH:mm")
                }
                return k4o.hL7E(bw4A, "yyyy年M月d日")
            }
        }
    };
    l4p.csR9I = function (bw4A) {
        if (k4o.Fw4A(bw4A)) bw4A = bw4A.getTime();
        var fe6Y = new Date,
            jS8K = fe6Y.getTime() - bw4A;
        var mZ8R = fe6Y.getHours() * 36e5 + fe6Y.getMinutes() * 6e4 + fe6Y.getSeconds() * 1e3;
        if (jS8K <= mZ8R) {
            return "今天" + k4o.hL7E(bw4A, "HH:mm")
        } else {
            if (jS8K < mZ8R + 864e5) {
                return "昨天" + k4o.hL7E(bw4A, "HH:mm")
            } else {
                return k4o.hL7E(bw4A, "yy-MM-dd HH:mm")
            }
        }
    };
    l4p.csQ9H = function (bw4A) {
        if (k4o.Fw4A(bw4A)) bw4A = bw4A.getTime();
        var fe6Y = new Date,
            jS8K = fe6Y.getTime() - bw4A;
        if (jS8K <= 6e4) return "刚刚";
        var mZ8R = fe6Y.getHours() * 36e5 + fe6Y.getMinutes() * 6e4 + fe6Y.getSeconds() * 1e3;
        if (jS8K <= mZ8R) {
            if (jS8K < 36e5) {
                var Ci3x = Math.floor(jS8K / 6e4);
                return Ci3x + "分钟前"
            }
            return k4o.hL7E(bw4A, "HH:mm")
        } else {
            if (jS8K < mZ8R + 864e5) {
                return "昨天" + k4o.hL7E(bw4A, "HH:mm")
            } else if (jS8K < mZ8R + 864e5 * 6) {
                var go6i = fe6Y.getFullYear(),
                    Oo7h = new Date(go6i, 0, 1);
                var mZ8R = fe6Y.getTime() - Oo7h.getTime();
                if (jS8K < mZ8R) {
                    return k4o.hL7E(bw4A, "M月d日 HH:mm")
                }
                return k4o.hL7E(bw4A, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l4p.Ua9R = function () {
        var cY5d = /\{(.*?)\}/gi;
        return function (qy0x, j4n) {
            return (qy0x || "").replace(cY5d, function ($1, $2) {
                var C4G = j4n[$2];
                return C4G == null ? $1 : C4G
            })
        }
    }();
    l4p.fg6a = function () {
        var bh4l = Array.prototype.slice.call(arguments, 0),
            qy0x = bh4l.shift();
        if (qy0x) {
            return qy0x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bh4l.length ? bh4l[$2] : $1
            })
        }
        return ""
    };
    l4p.Jj5o = function (i4m, dT6N, lt8l) {
        return "";
        lt8l = lt8l || " - ";
        if (i4m && i4m.length) {
            return lt8l + (!!dT6N ? '<span class="' + dT6N + '">' + i4m[0] + "</span>" : i4m[0])
        }
        return ""
    };
    l4p.bIO9F = function () {
        if (window.getSelection) {
            var rv0x = window.getSelection();
            if (rv0x && rv0x.focusNode && rv0x.focusNode.tagName) {
                var AL2x = a3x.da5f(rv0x.focusNode);
                for (var i = 0, xv2x; i < AL2x.length; ++i) {
                    xv2x = AL2x[i].tagName;
                    if (!xv2x) continue;
                    xv2x = xv2x.toLowerCase();
                    if (xv2x == "textarea" || xv2x == "input") return !0
                }
            }
        } else if (document.selection) {
            var cS5X = document.selection.createRange();
            if (cS5X) {
                var f4j = cS5X.parentElement();
                if (f4j && f4j.tagName) {
                    var xv2x = f4j.tagName.toLowerCase();
                    if (xv2x == "textarea" || xv2x == "input") return !0
                }
            }
        }
        return !1
    };
    l4p.AN2x = function (ft6n) {
        if (/^[A-Z]\:\\/i.test(ft6n)) {
            ft6n = ft6n.split("\\")
        } else {
            ft6n = ft6n.split("/")
        }
        ft6n = ft6n[ft6n.length - 1];
        return ft6n
    };
    l4p.csP9G = function () {
        var Fk4o = [13, 17, 34, 19, 18, 21];
        return function (D4H) {
            var bs4w = (D4H || "").split("_");
            return {
                type: Fk4o[bs4w[2]] || -1,
                id: bs4w[3] || ""
            }
        }
    }();
    l4p.bKh0x = function (fW6Q) {
        if (!fW6Q) {
            return true
        }
        for (var k in fW6Q) {
            return false
        }
        return true
    };
    l4p.bjU3x = function (dg5l) {
        if (!dg5l) {
            return ""
        }
        if (4 == dg5l.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dg5l.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dg5l.expertTags && dg5l.expertTags.length || !l4p.bKh0x(dg5l.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l4p.Ol7e = function (hk7d) {
        if (!hk7d) return "";
        var dt5y = hk7d.length,
            hF7y = [];
        hF7y[0] = dt5y / 3 | 0;
        hF7y[1] = hF7y[0] + ((dt5y - hF7y[0]) / 2 | 0);
        return hk7d.substring(0, hF7y[0]) + hk7d.substring(hF7y[0], hF7y[1]).replace(/\d/g, "*") + hk7d.substring(hF7y[1], dt5y)
    };
    l4p.cze0x = function (r4v, ct5y) {
        return (r4v % ct5y + ct5y) % ct5y
    };
    l4p.bjW3x = function () {
        var Fk4o = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function (D4H) {
            var bs4w = (D4H || "").split("_"),
                o4s = {
                    type: Fk4o[bs4w[2]] || -1,
                    id: bs4w[3] || ""
                };
            if (o4s.type == "event") {
                o4s.uid = bs4w[4] || "";
                return "/" + o4s.type + "?id=" + o4s.id + "&uid=" + o4s.uid
            }
            return "/" + o4s.type + "?id=" + o4s.id
        }
    }();
    l4p.bjX3x = function () {
        var Fk4o = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function (D4H) {
            var bs4w = (D4H || "").split("_");
            return Fk4o[bs4w[2]] || "资源"
        }
    }();
    l4p.csM9D = function (bx4B) {
        var qs = bx4B.length > 0 ? bx4B.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l4p.bjY3x = function (qB0x, Oi7b) {
        var TQ9H = 0,
            ej6d = new Array;
        k4o.bb4f(qB0x, function (V4Z, r4v) {
            var cM5R = a3x.cZ5e("img");
            cM5R.src = V4Z;
            h4l.s4w(cM5R, "load", function (r4v, d4h) {
                ej6d[r4v] = 1;
                TQ9H++;
                if (TQ9H == qB0x.length) Oi7b(qB0x, ej6d)
            }.g4k(this, r4v));
            h4l.s4w(cM5R, "error", function (d4h, r4v) {
                ej6d[r4v] = 0;
                TQ9H++;
                if (TQ9H == qB0x.length) Oi7b(qB0x, ej6d)
            }.g4k(this, r4v))
        })
    };
    l4p.Jh5m = function (i4m, dS6M) {
        var o4s = [];
        k4o.bb4f(i4m, function (p4t, r4v, iB7u) {
            o4s.push(dS6M(p4t, r4v, iB7u))
        });
        return o4s
    };
    l4p.YN0x = function (i4m, dS6M, iB7u) {
        var o4s = [];
        k4o.bb4f(i4m, function (p4t, r4v) {
            if (dS6M.call(iB7u, p4t, r4v, i4m)) {
                o4s.push(p4t)
            }
        });
        return o4s
    };
    l4p.bLo0x = function (bl4p) {
        return k4o.dQ5V((bl4p || "").replace(/\s{2,}/g, " ").trim())
    };
    l4p.bkd4h = function (bg4k) {
        if (bg4k.transNames && bg4k.transNames.length) {
            return bg4k.transNames[0]
        } else if (bg4k.alias && bg4k.alias.length) {
            return bg4k.alias[0]
        }
    };
    l4p.bkf4j = function (Qd8V) {
        if (Qd8V) {
            return Qd8V.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l4p.bkg4k = function (f4j) {
        var f4j = a3x.B4F(f4j),
            cL5Q = f4j && f4j.getElementsByTagName("textarea")[0],
            K4O = a3x.u4y(f4j, "key"),
            bkh4l = a3x.u4y(f4j, "simple") == "1",
            csJ9A = a3x.u4y(f4j, "pvnamed") == "1",
            csI9z = q4u.vQ1x.gf6Z();
        if (!(f4j && cL5Q && K4O)) return;
        var bcD2x, bkk4o, bcv2x;
        bcD2x = a3x.F4J(a3x.B4F("m-playlist"), "j-img");
        k4o.bb4f(bcD2x, function (it7m) {
            if (!bcv2x && a3x.u4y(it7m, "key")) {
                bcv2x = a3x.u4y(it7m, "key");
                it7m.removeAttribute("data-key")
            }
        });
        bcD2x = a3x.F4J(a3x.B4F("m-playlist"), "m-info");
        k4o.bb4f(bcD2x, function (it7m) {
            if (!bkk4o && it7m.id && it7m.id.indexOf("auto-id-") == 0) {
                bkk4o = it7m.id.slice(8, 12)
            }
        });
        var C4G = cL5Q.value || cL5Q.defaultValue;
        if (bcv2x) {
            C4G = decodeURIComponent(k4o.csH9y(C4G, "param=" + bkk4o + bcv2x))
        }
        C4G = JSON.parse(C4G);
        if (csJ9A) {
            l4p.csG9x(C4G)
        }
        if (bkh4l) {
            C4G = l4p.Cg3x(C4G)
        }
        csI9z.tP0x(K4O, C4G);
        f4j.innerHTML = "";
        return K4O
    };
    l4p.csF9w = function (py9p) {
        if (!py9p.onbeforelistload) {
            py9p.onbeforelistload = function (d4h) {
                d4h.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!py9p.onemptylist) {
            py9p.onemptylist = function (d4h) {
                d4h.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (py9p.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return py9p
    };
    l4p.csG9x = function (he7X) {
        k4o.bb4f(he7X, function (bJ4N) {
            bJ4N.privilege = bJ4N.pv;
            delete bJ4N.pv
        })
    };
    l4p.Cg3x = function (hH7A) {
        if (k4o.eE6y(hH7A)) {
            var el6f = [];
            k4o.bb4f(hH7A, function (bkh4l) {
                el6f.push(bMY0x(bkh4l))
            });
            return el6f
        } else {
            return bMY0x(hH7A)
        }

        function bMY0x(hH7A) {
            if (!hH7A) return null;
            var el6f = {
                album: hH7A.al,
                alias: hH7A.alia || hH7A.ala || [],
                artists: hH7A.ar || [],
                commentThreadId: "R_SO_4_" + hH7A.id,
                copyrightId: hH7A.cp || 0,
                duration: hH7A.dt || 0,
                id: hH7A.id,
                mvid: hH7A.mv || 0,
                name: hH7A.name || "",
                cd: hH7A.cd,
                position: hH7A.no || 0,
                ringtone: hH7A.rt,
                rtUrl: hH7A.rtUrl,
                status: hH7A.st || 0,
                pstatus: hH7A.pst || 0,
                fee: hH7A.fee || 0,
                version: hH7A.v || 0,
                eq: hH7A.eq,
                songType: hH7A.t || 0,
                mst: hH7A.mst,
                score: hH7A.pop || 0,
                ftype: hH7A.ftype,
                rtUrls: hH7A.rtUrls,
                transNames: hH7A.tns,
                privilege: hH7A.privilege,
                lyrics: hH7A.lyrics
            };
            return el6f
        }
    };
    l4p.czf0x = function () {
        var f4j = a3x.nl9c('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f4j);
        h4l.s4w(f4j, "click", function (d4h) {
            h4l.bf4j(d4h);
            a3x.cB5G(f4j)
        })
    };
    l4p.kw8o = function (cz5E) {
        if (cz5E < 1e5) {
            return cz5E
        } else {
            return Math.floor(cz5E / 1e4) + "万"
        }
    };
    l4p.uC1x = function (cz5E, cL5Q) {
        return "<i>" + (cz5E ? "(" + cz5E + ")" : cL5Q) + "</i>"
    };
    l4p.bNi0x = function (t4x, hB7u) {
        var e4i = {};
        if (!k4o.kU8M(hB7u)) {
            return e4i
        }
        switch (parseInt(t4x)) {
            case 17:
                e4i.title = hB7u.name;
                e4i.author = (hB7u.radio || []).name;
                e4i.picUrl = hB7u.coverUrl;
                e4i.category = hB7u.radio.category;
                break;
            case 19:
                e4i.title = hB7u.name;
                e4i.author = l4p.xF2x(hB7u.artists);
                e4i.authors = l4p.xF2x(hB7u.artists, " / ");
                e4i.picUrl = hB7u.picUrl;
                break;
            case 13:
                e4i.title = hB7u.name;
                e4i.author = (hB7u.creator || []).nickname;
                e4i.picUrl = hB7u.coverImgUrl;
                break;
            case 18:
                e4i.title = hB7u.name;
                e4i.author = l4p.xF2x(hB7u.artists);
                e4i.picUrl = (hB7u.album || []).picUrl;
                break;
            case 20:
                e4i.title = hB7u.name;
                e4i.author = "";
                e4i.picUrl = hB7u.img1v1Url;
                break;
            case 21:
                e4i.title = hB7u.name;
                e4i.author = hB7u.artistName;
                e4i.authors = l4p.xF2x(hB7u.artists, " / ");
                e4i.picUrl = hB7u.newCover || hB7u.cover;
                break;
            case 70:
                e4i.title = hB7u.name;
                e4i.author = (hB7u.dj || []).nickname;
                e4i.picUrl = hB7u.picUrl;
                e4i.category = hB7u.category;
                break;
            default:
                break
        }
        return e4i
    };
    l4p.bNl0x = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l4p.csB9s = function (eF6z, wr1x, e4i) {
        var bN4R, bh4l, o4s;
        var jU8M = null;
        var NO7H = 0;
        if (!e4i) e4i = {};
        var bcl2x = function () {
            NO7H = e4i.leading === false ? 0 : +(new Date);
            jU8M = null;
            o4s = eF6z.apply(bN4R, bh4l);
            if (!jU8M) bN4R = bh4l = null
        };
        return function () {
            var fe6Y = +(new Date);
            if (!NO7H && e4i.leading === false) NO7H = fe6Y;
            var bkp4t = wr1x - (fe6Y - NO7H);
            bN4R = this;
            bh4l = arguments;
            if (bkp4t <= 0 || bkp4t > wr1x) {
                if (jU8M) {
                    clearTimeout(jU8M);
                    jU8M = null
                }
                NO7H = fe6Y;
                o4s = eF6z.apply(bN4R, bh4l);
                if (!jU8M) bN4R = bh4l = null
            } else if (!jU8M && e4i.trailing !== false) {
                jU8M = setTimeout(bcl2x, bkp4t)
            }
            return o4s
        }
    };
    l4p.NM7F = function (eF6z, wr1x, rx0x) {
        var jU8M, bh4l, bN4R, NJ7C, o4s;
        var bcl2x = function () {
            var gM7F = new Date - NJ7C;
            if (gM7F < wr1x && gM7F >= 0) {
                jU8M = setTimeout(bcl2x, wr1x - gM7F)
            } else {
                jU8M = null;
                if (!rx0x) {
                    o4s = eF6z.apply(bN4R, bh4l);
                    if (!jU8M) bN4R = bh4l = null
                }
            }
        };
        return function () {
            bN4R = this;
            bh4l = arguments;
            NJ7C = new Date;
            var bkt4x = rx0x && !jU8M;
            if (!jU8M) jU8M = setTimeout(bcl2x, wr1x);
            if (bkt4x) {
                o4s = eF6z.apply(bN4R, bh4l);
                bN4R = bh4l = null
            }
            return o4s
        }
    };
    l4p.NG7z = function (f4j, hA7t) {
        if (f4j) {
            var f4j = f4j.firstElementChild;
            if (f4j) {
                f4j.firstElementChild && (f4j = f4j.firstElementChild);
                f4j.setAttribute("xlink:href", "/style/pc/svg/" + hA7t)
            }
        }
    };
    l4p.bOb1x = function (eb6V) {
        if (!eb6V || !eb6V.length) {
            return
        }
        eb6V = /^#(.+?)#$/.exec(eb6V)[1];
        eb6V = eb6V.replace(/\s/g, " ");
        x4B.bo4s("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.de5j({
                actname: eb6V
            }),
            onload: function (P4T) {
                if (!P4T || P4T.code != 200 || !P4T.act) {
                    n4r.X4b.L4P({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + P4T.act.actId)
                }
            },
            onerror: function (bV5a) {
                n4r.X4b.L4P({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l4p.csA9r = function (eb6V) {
        if (!eb6V || !eb6V.length) {
            return
        }
        var NF7y = location.host;
        eb6V = /^#(.+?)#$/.exec(eb6V)[1];
        eb6V = eb6V.replace(/\s/g, " ");
        x4B.bo4s("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.de5j({
                actname: eb6V
            }),
            onload: function (P4T) {
                if (!P4T || P4T.code != 200 || !P4T.act) {
                    cV5a.ji7b("该话题暂未创建")
                } else {
                    cV5a.zX2x(NF7y + "/activity?id=" + P4T.act.actId)
                }
            },
            onerror: function (bV5a) {
                cV5a.ji7b("操作失败，请稍后再试")
            }
        })
    };
    l4p.bky4C = function (ND7w, xj1x) {
        if (!ND7w || !xj1x) return false;
        if (ND7w == xj1x) return true;
        return l4p.bky4C(ND7w, xj1x.parentNode)
    };
    a3x.cu5z = function (bG4K, jk7d) {
        if (!bG4K) return null;
        if (!jk7d) return bG4K.firstChild;
        return a3x.F4J(bG4K, jk7d)[0]
    };
    l4p.bOX1x = function (ii7b) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(ii7b)
    };
    l4p.bPi1x = function (ii7b, NC7v) {
        NC7v = NC7v || "86";
        if (NC7v == "86") return /^\d{11}$/.test(ii7b);
        return /^\d+$/.test(ii7b)
    };
    l4p.czg0x = function (uj1x) {
        if (!uj1x) {
            return "0b"
        }
        var csx9o = ["Bytes", "KB", "MB", "GB"];
        var ba4e = Math.floor(Math.log(uj1x) / Math.log(1024));
        return (uj1x / Math.pow(1024, Math.floor(ba4e))).toFixed(ba4e == 1 ? 0 : 1) + csx9o[ba4e]
    };
    l4p.bPL1x = function (dA5F, fb6V, csw9n) {
        if (!dA5F) return dA5F;
        var dt5y = k4o.fm6g(dA5F);
        if (dt5y <= fb6V) return dA5F;
        var bkz4D = dt5y - dA5F.length,
            bkB4F = dA5F.length - bkz4D;
        var fq6k = Math.ceil(fb6V / 2),
            csv9m = fb6V,
            bQx1x = 0;
        if (bkz4D < fq6k) fq6k = fb6V - bkz4D;
        if (bkB4F < fb6V) fb6V = bkB4F + Math.ceil((fb6V - bkB4F) / 2);
        while (fq6k <= fb6V) {
            bQx1x = k4o.fm6g(dA5F.substr(0, fq6k));
            var bkC4G = csv9m - bQx1x;
            if (bkC4G == 0) break;
            if (bkC4G == 1) {
                var cst9k = k4o.fm6g(dA5F.charAt(fq6k));
                if (cst9k == 1) {
                    fq6k++;
                    break
                } else {
                    break
                }
            }
            fq6k += Math.floor(bkC4G / 2)
        }
        return dA5F.substr(0, fq6k) + (!!csw9n ? "" : "...")
    };
    l4p.css9j = function (bm4q) {
        bm4q = bm4q || 10;
        var cG5L = "";
        for (var i = 0; i < bm4q; i++) {
            cG5L += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cG5L
    };
    var csq9h = /([A-Za-z0-9 \.\-\(\)\!\?])/,
        csp9g = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        cso9f = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bQO2x = function (csn9e) {
        var bm4q = k4o.AO2x(1, 5),
            csm9d = Math.random() < .5,
            iA7t = "";
        if (csn9e) {
            if (csm9d) {
                while (bm4q >= 0) {
                    iA7t += cso9f[k4o.AO2x(0, 500)];
                    bm4q--
                }
            } else {
                iA7t = l4p.css9j(bm4q)
            }
        } else {
            iA7t = k4o.QP8H(bm4q)
        }
        return '<div class="soil">' + iA7t + "</div>"
    };
    l4p.bjA3x = function (eg6a) {
        eg6a = k4o.Ii5n(eg6a);
        try {
            var bm4q = eg6a.length,
                r4v = k4o.AO2x(1, bm4q - 1);
            while (r4v < bm4q) {
                if (csp9g.test(eg6a.charAt(r4v))) {
                    return k4o.dQ5V(eg6a.slice(0, r4v)) + bQO2x(true) + k4o.dQ5V(eg6a.slice(r4v))
                } else if (csq9h.test(eg6a.charAt(r4v))) {
                    return k4o.dQ5V(eg6a.slice(0, r4v)) + bQO2x() + k4o.dQ5V(eg6a.slice(r4v))
                } else {
                    r4v++
                }
            }
            return k4o.dQ5V(eg6a)
        } catch (e) {
            return k4o.dQ5V(eg6a)
        }
    };
    l4p.bbo1x = function (kL8D, md8V) {
        return "//nos.netease.com/" + kL8D + "/" + md8V
    };
    l4p.csl9c = function (ft6n) {
        var fj6d = /(.+)(\.[^\.]+$)/.exec(ft6n);
        return fj6d ? {
            filename: fj6d[1],
            suffix: fj6d[2]
        } : {
            filename: ft6n || "",
            suffix: ""
        }
    };
    l4p.csj9a = function (V4Z) {
        return (V4Z || "").replace(/^https?:/, "")
    }
})();
(function () {
    var k4o = NEJ.P("nej.u");

    function csg9X() {
        var Bi3x = function (jP8H) {
            if (jP8H < -128) {
                return Bi3x(128 - (-128 - jP8H))
            } else if (jP8H >= -128 && jP8H <= 127) {
                return jP8H
            } else if (jP8H > 127) {
                return Bi3x(-129 + jP8H - 127)
            } else {
                throw new Error("1001")
            }
        };
        var csf9W = function (jP8H, be4i) {
            return Bi3x(jP8H + be4i)
        };
        var csd9U = function (bbd1x, bkO4S) {
            if (bbd1x == null) {
                return null
            }
            if (bkO4S == null) {
                return bbd1x
            }
            var pY9P = [];
            var csa9R = bkO4S.length;
            for (var i = 0, bm4q = bbd1x.length; i < bm4q; i++) {
                pY9P[i] = csf9W(bbd1x[i], bkO4S[i % csa9R])
            }
            return pY9P
        };
        var crZ9Q = function (baU1x) {
            if (baU1x == null) {
                return baU1x
            }
            var pY9P = [];
            var crW9N = baU1x.length;
            for (var i = 0, bm4q = crW9N; i < bm4q; i++) {
                pY9P[i] = Bi3x(0 - baU1x[i])
            }
            return pY9P
        };
        var crV9M = function (bla4e, Ni6c) {
            bla4e = Bi3x(bla4e);
            Ni6c = Bi3x(Ni6c);
            return Bi3x(bla4e ^ Ni6c)
        };
        var bvs6m = function (Nh6b, bld4h) {
            if (Nh6b == null || bld4h == null || Nh6b.length != bld4h.length) {
                return Nh6b
            }
            var pY9P = [];
            var crU9L = Nh6b.length;
            for (var i = 0, bm4q = crU9L; i < bm4q; i++) {
                pY9P[i] = crV9M(Nh6b[i], bld4h[i])
            }
            return pY9P
        };
        var bvy6s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var crT9K = function (dm5r) {
            var IP5U = [];
            IP5U.push(bvy6s[dm5r >>> 4 & 15]);
            IP5U.push(bvy6s[dm5r & 15]);
            return IP5U.join("")
        };
        var bvH6B = function (uj1x) {
            var bm4q = uj1x.length;
            if (uj1x == null || bm4q < 0) {
                return new String("")
            }
            var IP5U = [];
            for (var i = 0; i < bm4q; i++) {
                IP5U.push(crT9K(uj1x[i]))
            }
            return IP5U.join("")
        };
        var bvJ6D = function (ban1x) {
            if (ban1x == null || ban1x.length == 0) {
                return ban1x
            }
            var blm4q = new String(ban1x);
            var pY9P = [];
            var bm4q = blm4q.length / 2;
            var be4i = 0;
            for (var i = 0; i < bm4q; i++) {
                var oj9a = parseInt(blm4q.charAt(be4i++), 16) << 4;
                var oh9Y = parseInt(blm4q.charAt(be4i++), 16);
                pY9P[i] = Bi3x(oj9a + oh9Y)
            }
            return pY9P
        };
        var bvQ6K = function (cG5L) {
            if (cG5L == null || cG5L == undefined) {
                return cG5L
            }
            var MW6Q = encodeURIComponent(cG5L);
            var uj1x = [];
            var bvT6N = MW6Q.length;
            for (var i = 0; i < bvT6N; i++) {
                if (MW6Q.charAt(i) == "%") {
                    if (i + 2 < bvT6N) {
                        uj1x.push(bvJ6D(MW6Q.charAt(++i) + "" + MW6Q.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    uj1x.push(MW6Q.charCodeAt(i))
                }
            }
            return uj1x
        };
        var crS9J = function (vN1x) {
            var ba4e = 0;
            ba4e += (vN1x[0] & 255) << 24;
            ba4e += (vN1x[1] & 255) << 16;
            ba4e += (vN1x[2] & 255) << 8;
            ba4e += vN1x[3] & 255;
            return ba4e
        };
        var czi0x = function (ba4e) {
            var vN1x = [];
            vN1x[0] = ba4e >>> 24 & 255;
            vN1x[1] = ba4e >>> 16 & 255;
            vN1x[2] = ba4e >>> 8 & 255;
            vN1x[3] = ba4e & 255;
            return vN1x
        };
        var crM9D = function (ds5x, blv4z, bm4q) {
            var el6f = [];
            if (ds5x == null || ds5x.length == 0) {
                return el6f
            }
            if (ds5x.length < bm4q) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm4q; i++) {
                el6f[i] = ds5x[blv4z + i]
            }
            return el6f
        };
        var blx4B = function (ds5x, blv4z, rf0x, crL9C, bm4q) {
            if (ds5x == null || ds5x.length == 0) {
                return rf0x
            }
            if (rf0x == null) {
                throw new Error("1004")
            }
            if (ds5x.length < bm4q) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm4q; i++) {
                rf0x[crL9C + i] = ds5x[blv4z + i]
            }
            return rf0x
        };
        var crK9B = function (bm4q) {
            var bs4w = [];
            for (var i = 0; i < bm4q; i++) {
                bs4w[i] = 0
            }
            return bs4w
        };
        var crH9y = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var IH5M = 64;
        var ZL1x = 64;
        var bwB6v = 4;
        var crG9x = function (pH9y) {
            var bwO7H = [];
            if (pH9y == null || pH9y == undefined || pH9y.length == 0) {
                return crK9B(ZL1x)
            }
            if (pH9y.length >= ZL1x) {
                return crM9D(pH9y, 0, ZL1x)
            } else {
                for (var i = 0; i < ZL1x; i++) {
                    bwO7H[i] = pH9y[i % pH9y.length]
                }
            }
            return bwO7H
        };
        var crD9u = function (ZC1x) {
            if (ZC1x == null || ZC1x.length % IH5M != 0) {
                throw new Error("1005")
            }
            var blP4T = [];
            var be4i = 0;
            var cry9p = ZC1x.length / IH5M;
            for (var i = 0; i < cry9p; i++) {
                blP4T[i] = [];
                for (var j = 0; j < IH5M; j++) {
                    blP4T[i][j] = ZC1x[be4i++]
                }
            }
            return blP4T
        };
        var crv9m = function (bxm7f) {
            var oj9a = bxm7f >>> 4 & 15;
            var oh9Y = bxm7f & 15;
            var be4i = oj9a * 16 + oh9Y;
            return crH9y[be4i]
        };
        var bxo7h = function (blQ4U) {
            if (blQ4U == null) {
                return null
            }
            var bxr7k = [];
            for (var i = 0, bm4q = blQ4U.length; i < bm4q; i++) {
                bxr7k[i] = crv9m(blQ4U[i])
            }
            return bxr7k
        };
        var bxu7n = function (IF5K, pH9y) {
            if (IF5K == null) {
                return null
            }
            if (IF5K.length == 0) {
                return []
            }
            if (IF5K.length % IH5M != 0) {
                throw new Error("1005")
            }
            pH9y = crG9x(pH9y);
            var bcS2x = pH9y;
            var blS4W = crD9u(IF5K);
            var MD6x = [];
            var cru8m = blS4W.length;
            for (var i = 0; i < cru8m; i++) {
                var blT4X = bxo7h(blS4W[i]);
                blT4X = bxo7h(blT4X);
                var blV4Z = bvs6m(blT4X, bcS2x);
                var crt8l = csd9U(blV4Z, crZ9Q(bcS2x));
                blV4Z = bvs6m(crt8l, pH9y);
                blx4B(blV4Z, 0, MD6x, i * IH5M, IH5M);
                bcS2x = blS4W[i]
            }
            var bxU7N = [];
            blx4B(MD6x, MD6x.length - bwB6v, bxU7N, 0, bwB6v);
            var bm4q = crS9J(bxU7N);
            if (bm4q > MD6x.length) {
                throw new Error("1006")
            }
            var pY9P = [];
            blx4B(MD6x, 0, pY9P, 0, bm4q);
            return pY9P
        };
        var crs8k = function (YG0x, K4O) {
            if (YG0x == null) {
                return null
            }
            var byg7Z = new String(YG0x);
            if (byg7Z.length == 0) {
                return []
            }
            var IF5K = bvJ6D(byg7Z);
            if (K4O == null || K4O == undefined) {
                throw new Error("1007")
            }
            var pH9y = bvQ6K(K4O);
            return bxu7n(IF5K, pH9y)
        };
        this.crr8j = function (YG0x, K4O) {
            var blZ4d = crs8k(YG0x, K4O);
            var FD4H = new String(bvH6B(blZ4d));
            var wN1x = [];
            var bmc4g = FD4H.length / 2;
            var be4i = 0;
            for (var i = 0; i < bmc4g; i++) {
                wN1x.push("%");
                wN1x.push(FD4H.charAt(be4i++));
                wN1x.push(FD4H.charAt(be4i++))
            }
            return wN1x.join("")
        };
        k4o.csH9y = function (bmd4h, K4O) {
            return k4o.crq8i(k4o.cxb0x(bmd4h), K4O)
        };
        k4o.crq8i = function (bmd4h, K4O) {
            var blZ4d = bxu7n(bmd4h, bvQ6K(K4O));
            var FD4H = new String(bvH6B(blZ4d));
            var wN1x = [];
            var bmc4g = FD4H.length / 2;
            var be4i = 0;
            for (var i = 0; i < bmc4g; i++) {
                wN1x.push("%");
                wN1x.push(FD4H.charAt(be4i++));
                wN1x.push(FD4H.charAt(be4i++))
            }
            return wN1x.join("")
        }
    }
    window.settmusic = (new csg9X).crr8j
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        K4O = "Search-tracks_",
        b3x;
    q4u.fg6a({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function (P4T) {
                return P4T
            },
            onerror: function (P4T, e4i) {
                if (P4T.code == 407) {
                    e4i.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function (e4i, bd4h) {
                window.log && window.log("searchkeywordclient", {
                    type: this.crp8h(parseInt(e4i.data.type)) || "suggest",
                    keyword: e4i.data.s,
                    offset: e4i.offset
                })
            },
            format: function (P4T, e4i) {
                if (P4T.abroad) {
                    try {
                        P4T.result = JSON.parse(decodeURIComponent(settmusic(P4T.result, q4u.sk)))
                    } catch (e) {}
                }
                P4T.result = P4T.result || {};
                var i4m, ct5y, jb7U = [],
                    ts0x = e4i.data.s || "",
                    gd6X = e4i.data.limit,
                    t4x = parseInt(e4i.data.type) || 1,
                    o4s = P4T.result;
                switch (t4x) {
                    case 1:
                        i4m = this.byH7A(o4s.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        ct5y = o4s.songCount;
                        break;
                    case 10:
                        i4m = o4s.albums;
                        ct5y = o4s.albumCount;
                        break;
                    case 100:
                        i4m = o4s.artists;
                        ct5y = o4s.artistCount;
                        break;
                    case 1e3:
                        i4m = o4s.playlists;
                        ct5y = o4s.playlistCount;
                        break;
                    case 1002:
                        i4m = o4s.userprofiles;
                        ct5y = o4s.userprofileCount;
                        break;
                    case 1004:
                        i4m = o4s.mvs;
                        ct5y = o4s.mvCount;
                        break;
                    case 1006:
                        i4m = this.byH7A(o4s.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        ct5y = o4s.songCount;
                        break;
                    case 1009:
                        var qx0x = o4s.djRadios;
                        if (!!qx0x) {
                            k4o.bb4f(qx0x, function (C4G, r4v, cro8g) {
                                C4G.xid = C4G.id;
                                C4G.id = C4G.id + "_rad"
                            });
                            if (qx0x.length) {
                                this.tP0x("radio_search-" + e4i.data.s, qx0x)
                            }
                        }
                        ct5y = Math.min(o4s.djprogramCount, 500);
                        i4m = o4s.djprograms || [];
                        if (e4i.data.isPub) {
                            k4o.mD8v(qx0x, function (C4G, r4v, cro8g) {
                                C4G.stype = 1;
                                i4m.unshift(C4G)
                            });
                            ct5y = Math.min(i4m.length, 500)
                        }
                        break
                }
                this.z4D("onsearchload", P4T);
                if (i4m && i4m.length) {
                    for (var i = 0; i < gd6X; i++) {
                        if (i < i4m.length) {
                            jb7U.push(i4m[i])
                        } else {
                            jb7U.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(ct5y || 0, ts0x.length < 3 ? 500 : 5e3),
                    list: jb7U
                }
            },
            onerror: function (P4T, e4i) {
                e4i.onload(e4i, []);
                if (k4o.gr6l(e4i.onerror)) {
                    e4i.onerror(P4T)
                }
            }
        }
    });
    q4u.FR4V = NEJ.C();
    b3x = q4u.FR4V.O4S(q4u.hs7l);
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.crn8f = function (K4O, e4i) {
        if (!K4O) return;
        if (!!this.byM7F) x4B.jD7w(this.byM7F);
        this.byM7F = this.co5t("search-suggest", NEJ.X({
            data: {
                s: K4O,
                limit: 8
            }
        }, e4i))
    };
    b3x.crm8e = function (K4O, e4i) {
        if (!K4O) return;
        this.co5t("search-multimatch", NEJ.X({
            data: {
                s: K4O
            }
        }, e4i))
    };
    b3x.byH7A = function () {
        var crl8d = function (hj7c, byQ7J, byR7K) {
            var crk8c = hj7c.match(new RegExp(byQ7J + "(.+?)" + byR7K, "gi")),
                cz5E = 0;
            k4o.bb4f(crk8c, function (p4t) {
                cz5E += p4t.replace(new RegExp(byQ7J, "g"), "").replace(new RegExp(byR7K, "g"), "").length
            });
            return cz5E
        };
        return function (iQ7J, crj8b, cri8a) {
            var byZ7S = [];
            k4o.bb4f(iQ7J, function (bg4k, ba4e) {
                bg4k = l4p.Cg3x(bg4k);
                var Yi0x = bg4k.lyrics || [],
                    dt5y = Yi0x.length,
                    jw7p = 0,
                    ct5y = 4,
                    XY0x = {
                        l: 0,
                        v: 0
                    },
                    bms4w;
                if (dt5y > 4) {
                    k4o.bb4f(Yi0x, function (hj7c, r4v) {
                        var bzf7Y = crl8d(hj7c, crj8b, cri8a);
                        if (bzf7Y > XY0x.v) {
                            XY0x.v = bzf7Y;
                            XY0x.l = r4v
                        }
                    });
                    jw7p = XY0x.l;
                    jw7p = Math.max(jw7p, 0);
                    bms4w = dt5y - jw7p - 4;
                    if (bms4w < 0) jw7p += bms4w;
                    bg4k.lrcAbstractEnd = jw7p + ct5y - 1
                } else {
                    bg4k.lrcAbstractEnd = dt5y - 1
                }
                bg4k.lrcAbstractStart = jw7p;
                bg4k.indexId = (Yi0x && Yi0x.length ? "L" : "NL") + bg4k.id;
                byZ7S.push(bg4k)
            });
            return byZ7S
        }
    }();
    b3x.crp8h = function (t4x) {
        switch (t4x) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        x4B = c4g("nej.j"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        E4I = c4g("nm.m"),
        n4r = c4g("nm.l"),
        dr5w = c4g("nm.i"),
        M4Q = c4g("nm.m.sch"),
        b3x, J4N;
    var XU0x = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M4Q.Mj6d = NEJ.C();
    b3x = M4Q.Mj6d.O4S(H4L.cC5H);
    b3x.cs5x = function (f4j) {
        this.cw5B();
        this.bS5X(f4j);
        this.R4V = q4u.FR4V.gf6Z()
    };
    b3x.bS5X = function (f4j) {
        this.m4q = f4j;
        var i4m = a3x.F4J(f4j, "j-flag");
        this.eI6C = i4m[0];
        this.bmy4C = i4m[1];
        this.ck5p = i4m[2];
        this.mF8x = i4m[3];
        h4l.s4w(this.eI6C, "input", this.fN6H.g4k(this));
        h4l.s4w(this.eI6C, "keyup", this.fN6H.g4k(this));
        h4l.s4w(this.eI6C, "focus", this.gu6o.g4k(this));
        h4l.s4w(this.bmy4C, "click", this.gu6o.g4k(this));
        h4l.s4w(this.eI6C, "blur", this.bmA4E.g4k(this));
        h4l.s4w(this.ck5p, "click", this.XL0x.g4k(this));
        h4l.s4w(this.m4q, "keydown", this.bmB4F.g4k(this));
        h4l.s4w(this.m4q, "keypress", this.XI0x.g4k(this));
        h4l.s4w(this.mF8x, "mouseover", this.Mg6a.g4k(this));
        h4l.s4w(this.mF8x, "mouseout", this.Mg6a.g4k(this));
        if (this.eI6C.value) {
            this.eI6C.value = ""
        }
        if (this.eI6C.style.opacity != null) {
            this.eI6C.style.opacity = 1
        }
    };
    b3x.fN6H = function (d4h) {
        if (d4h.type == "keyup" && d4h.keyCode == 8 || d4h.keyCode == 46) {
            this.Cc3x()
        } else if (d4h.type == "input" || d4h.type == "propertychange") {
            setTimeout(this.Cc3x.g4k(this), 0)
        }
    };
    b3x.gu6o = function () {
        this.wL1x(this.bmy4C, !1);
        a3x.w4A(this.m4q, "m-srch-fcs");
        this.eI6C.focus();
        this.Cc3x();
        a3x.w4A(a3x.F4J("g-topbar", "j-showoff")[0], "f-hide")
    };
    b3x.bmA4E = function () {
        if (!this.eI6C.value) {
            this.wL1x(this.bmy4C, !0)
        }
        var Cf3x = a3x.F4J(this.mF8x, "slt");
        if (this.XD0x(this.mF8x) && Cf3x.length > 0 && a3x.u4y(Cf3x[0], "type")) {
            var hA7t = Cf3x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hA7t)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eI6C.value
                })
            }
            this.bmE4I(Cf3x[0].href)
        }
        this.wL1x(this.mF8x, !1);
        a3x.v4z(this.m4q, "m-srch-fcs")
    };
    b3x.wL1x = function (f4j, lx8p) {
        a3x.Y4c(f4j, "display", !lx8p ? "none" : "")
    };
    b3x.XD0x = function (f4j) {
        return a3x.cX5c(f4j, "display") != "none"
    };
    b3x.Cc3x = function () {
        var Cj3x = function (tR0x, cL5Q) {
            if (!cL5Q) return;
            return cL5Q.replace(new RegExp(l4p.bHA9r(tR0x), "gi"), function ($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var crf8X = function (ii7b) {
            var eT6N = this.m4q.clientWidth > 250 ? 41 : 17;
            if (l4p.OD7w(ii7b) > eT6N) {
                return l4p.AG2x(ii7b, eT6N) + "..."
            } else {
                return ii7b
            }
        };
        var Xi0x = function (o4s) {
            return o4s.songs && o4s.songs.length || o4s.albums && o4s.albums.length || o4s.artists && o4s.artists.length || o4s.playlists && o4s.playlists.length
        };
        var tZ1x = function (tR0x, d4h) {
            if (!l4p.bGQ9H(this.eI6C) || l4p.ju7n(this.eI6C.value)) {
                this.wL1x(this.mF8x, !1);
                return
            }
            d4h.keyword = k4o.dQ5V(tR0x);
            var dK5P = a3x.bW5b("m-search-suggest", d4h, {
                    mark: Cj3x.g4k(this, tR0x),
                    cutStr: crf8X.g4k(this)
                }),
                st0x = d4h.result.order;
            this.mF8x.innerHTML = dK5P;
            this.wL1x(this.mF8x, Xi0x(d4h.result) ? !0 : !1);
            if (!!st0x && !!st0x.length && XU0x[st0x[0]]) {
                this.bmM4Q = {
                    keyword: tR0x,
                    type: XU0x[st0x[0]]
                }
            }
        };
        var cre8W = function () {
            this.wL1x(this.mF8x, !1);
            return
        };
        return function () {
            var C4G = this.eI6C.value;
            if (l4p.ju7n(C4G)) {
                this.wL1x(this.mF8x, !1);
                return
            }
            this.R4V.crn8f(C4G, {
                onload: tZ1x.g4k(this, C4G),
                onForbidden: cre8W.g4k(this)
            })
        }
    }();
    b3x.XI0x = function (d4h) {
        if (d4h.keyCode != 13) return;
        var Cf3x = a3x.F4J(this.mF8x, "slt");
        if (this.XD0x(this.mF8x) && Cf3x.length > 0) {
            this.bmE4I(Cf3x[0].href);
            this.wL1x(this.mF8x, !1);
            return
        }
        this.XL0x();
        this.wL1x(this.mF8x, !1)
    };
    b3x.bmB4F = function (d4h) {
        if (!this.XD0x(this.mF8x)) return;
        var i4m = a3x.F4J(this.mF8x, "xtag"),
            dt5y = i4m.length,
            r4v = k4o.dd5i(i4m, function (p4t) {
                return a3x.bA4E(p4t, "slt")
            });
        switch (d4h.keyCode) {
            case 38:
                if (r4v >= 0) a3x.v4z(i4m[r4v], "slt");
                a3x.w4A(i4m[r4v <= 0 ? dt5y - 1 : r4v - 1], "slt");
                break;
            case 40:
                if (r4v >= 0) a3x.v4z(i4m[r4v], "slt");
                a3x.w4A(i4m[(r4v + 1) % dt5y], "slt");
                break
        }
    };
    b3x.Mg6a = function (d4h) {
        if (!this.XD0x(this.mF8x)) return;
        var LS6M, G4K = h4l.U4Y(d4h),
            i4m = a3x.F4J(this.mF8x, "xtag");
        if (G4K.tagName.toLowerCase() == "a") LS6M = G4K;
        else if (G4K.parentNode.tagName.toLowerCase() == "a") LS6M = G4K.parentNode;
        if (!LS6M) return;
        k4o.bb4f(i4m, function (p4t) {
            a3x.v4z(p4t, "slt");
            a3x.u4y(p4t, "type", "")
        });
        if (d4h.type == "mouseout") return;
        a3x.w4A(LS6M, "slt");
        a3x.u4y(LS6M, "type", "mouse")
    };
    b3x.XL0x = function () {
        var dV6P = location.hash,
            r4v = dV6P.indexOf("?"),
            bx4B = k4o.hE7x(dV6P.substring(r4v + 1));
        bx4B.s = this.eI6C.value;
        if (l4p.ju7n(bx4B.s)) return;
        if (!bx4B.type && this.bmM4Q && this.bmM4Q.keyword == bx4B.s) {
            bx4B.type = this.bmM4Q.type
        }
        this.bmE4I("/search/#/?" + k4o.de5j(bx4B));
        this.eI6C.blur()
    };
    b3x.bmE4I = function (V4Z) {
        if (location.dispatch2) {
            location.dispatch2(V4Z)
        } else {
            location.href = V4Z
        }
    };
    M4Q.Mj6d.crd8V = function () {
        var i4m = a3x.F4J(document.body, "j-suggest");
        k4o.bb4f(i4m, function (p4t) {
            new M4Q.Mj6d(p4t)
        })
    };
    M4Q.Mj6d.crd8V()
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        q4u = c4g("nm.d"),
        b3x;
    q4u.fg6a({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function (P4T) {
                return {
                    total: P4T.size || 0,
                    list: P4T.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function (P4T) {
                return {
                    total: P4T.size || 0,
                    list: P4T.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function (P4T) {
                return P4T.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function (P4T, e4i) {
                if (e4i.offset == 0) {
                    var oR9I = P4T.data[0];
                    this.z4D("onfirstload", oR9I);
                    P4T.data.splice(0, 1);
                    return P4T.data
                } else {
                    return P4T.data
                }
            }
        }
    });
    q4u.Ct3x = NEJ.C();
    b3x = q4u.Ct3x.O4S(q4u.hs7l);
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.bmW4a = function () {
        var su0x = "LOCAL_FLAG";
        return function (t4x, crc8U) {
            var j4n = this.DT3x(su0x, {});
            if (j4n[t4x]) {
                return true
            } else {
                if (!crc8U) {
                    j4n[t4x] = true;
                    this.we1x(su0x, j4n)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        bmX4b;
    if (!!N4R.nq9h) return;
    N4R.nq9h = NEJ.C();
    bmX4b = N4R.nq9h.O4S(N4R.cC5H);
    bmX4b.bj4n = function () {
        var crb8T = function (d4h) {
            d4h.matched = d4h.source == d4h.target
        };
        return function (e4i) {
            e4i.oncheck = e4i.oncheck || crb8T;
            this.bk4o(e4i);
            this.bO4S = e4i.list;
            this.iL7E = e4i.dataset || "id";
            this.jX8P = e4i.selected || "js-selected"
        }
    }();
    bmX4b.np9g = function (C4G) {
        var G4K, d4h = {
            target: C4G
        };
        k4o.bb4f(this.bO4S, function (f4j) {
            delete d4h.matched;
            d4h.source = a3x.u4y(f4j, this.iL7E);
            this.z4D("oncheck", d4h);
            if (!d4h.matched) {
                a3x.v4z(f4j, this.jX8P)
            } else {
                G4K = f4j;
                a3x.w4A(f4j, this.jX8P)
            }
        }, this);
        return G4K
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ut"),
        oO9F;
    if (!!N4R.cW5b) return;
    N4R.cW5b = NEJ.C();
    oO9F = N4R.cW5b.O4S(N4R.cC5H);
    oO9F.cs5x = function () {
        this.iv7o = {};
        this.cw5B();
        this.bH4L()
    };
    oO9F.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.bmY4c = e4i.umi || "";
        this.BJ3x = e4i.dispatcher;
        this.Il5q = e4i.composite || Z4d;
        this.blU4Y({
            onshow: this.eL6F.g4k(this),
            onhide: this.jQ8I.g4k(this),
            onrefresh: this.eq6k.g4k(this),
            onmessage: this.pA9r.g4k(this),
            onbeforehide: this.cra8S.g4k(this)
        })
    };
    oO9F.bz4D = function () {
        delete this.bmY4c;
        this.iv7o = {};
        this.bF4J()
    };
    oO9F.uh1x = function (d4h) {
        if (!!d4h) d4h.stopped = !0
    };
    oO9F.bH4L = bn4r;
    oO9F.eL6F = bn4r;
    oO9F.jQ8I = bn4r;
    oO9F.eq6k = bn4r;
    oO9F.pA9r = bn4r;
    oO9F.cra8S = bn4r;
    oO9F.mS8K = function (of9W, bE4I, eU6O) {
        this.BJ3x.bmZ4d({
            to: of9W,
            mode: eU6O || 0,
            data: bE4I,
            from: this.bmY4c
        })
    };
    oO9F.czj0x = function (t4x, j4n) {
        this.BJ3x.BK3x(t4x, {
            from: this.bmY4c,
            data: j4n
        })
    };
    oO9F.czk0x = function () {
        this.BJ3x.mf8X.apply(this.BJ3x, arguments)
    };
    oO9F.cqW8O = function () {
        return this.iv7o
    };
    a3x.Wv0x = function () {
        if (!!window.dispatcher) {
            dispatcher.bCk8c.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        bn4r = NEJ.F,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        wH1x;
    if (!!N4R.dp5u) return;
    N4R.dp5u = NEJ.C();
    wH1x = N4R.dp5u.O4S(N4R.cW5b);
    wH1x.cqV8N = function (e4i) {
        var bG4K;
        if (!bG4K) {
            var j4n = e4i.input || Z4d;
            bG4K = a3x.B4F(j4n.parent)
        }
        if (!bG4K) {
            var j4n = e4i.data || Z4d;
            bG4K = a3x.B4F(j4n.parent)
        }
        if (!bG4K) {
            bG4K = a3x.B4F(e4i.parent)
        }
        return bG4K
    };
    wH1x.eL6F = function (e4i) {
        var bG4K = this.cqV8N(e4i);
        if (!!bG4K && !!this.m4q) bG4K.appendChild(this.m4q);
        this.gq6k(e4i);
        this.bCw8o("onshow", e4i);
        this.eq6k(e4i)
    };
    wH1x.eq6k = function (e4i) {
        this.fV6P(e4i);
        this.bCw8o("onrefresh", e4i)
    };
    wH1x.jQ8I = function () {
        this.kG8y();
        this.cqU8M();
        a3x.mN8F(this.m4q)
    };
    wH1x.bCJ8B = function () {
        var gm6g = /^onshow|onrefresh|delay$/;
        return function (ce5j) {
            return gm6g.test(ce5j)
        }
    }();
    wH1x.bCP8H = bn4r;
    wH1x.bCw8o = function () {
        var bCU8M = function (bx4B, e4i, ce5j, oL9C) {
            if (this.bCJ8B(oL9C)) return;
            if (!!bx4B) ce5j += (ce5j.indexOf("?") > 1 ? "&" : "?") + bx4B;
            var dc5h = this.bCP8H(oL9C, e4i) || {};
            dc5h.location = e4i;
            dc5h.parent = this.iv7o[oL9C];
            this.BJ3x.hP7I(ce5j, {
                input: dc5h
            })
        };
        return function (t4x, e4i) {
            if (!e4i.nodelay) {
                if (!!this.Il5q.delay) return;
                var bCX8P = this.Il5q[t4x] || Z4d;
                if (bCX8P.delay) return
            }
            var bx4B = k4o.de5j(e4i.param) || "";
            if (t4x == "onrefresh") {
                k4o.ex6r(this.Il5q, bCU8M.g4k(this, bx4B, e4i))
            }
            k4o.ex6r(bCX8P, bCU8M.g4k(this, bx4B, e4i))
        }
    }();
    wH1x.cqU8M = function () {
        var zx2x = function (ce5j, oL9C) {
            if (!this.bCJ8B(oL9C)) this.BJ3x.br4v(ce5j)
        };
        return function () {
            k4o.ex6r(this.Il5q, zx2x, this);
            k4o.ex6r(this.Il5q.onshow, zx2x, this);
            k4o.ex6r(this.Il5q.onrefresh, zx2x, this)
        }
    }()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        x4B = c4g("nej.j"),
        k4o = c4g("nej.u"),
        E4I = c4g("nm.m"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        b3x, J4N;
    E4I.LJ6D = NEJ.C();
    b3x = E4I.LJ6D.O4S(H4L.cC5H);
    b3x.cs5x = function () {
        this.cw5B();
        this.m4q = a3x.B4F("g-topbar");
        var i4m = a3x.F4J(this.m4q, "j-tflag");
        this.bnd4h = i4m[0];
        this.Df3x = i4m[1];
        this.bDi8a = i4m[2];
        this.bng4k = i4m[3];
        this.cqR8J = H4L.nq9h.A4E({
            list: this.bnd4h.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bnq4u = H4L.nq9h.A4E({
            list: this.bng4k.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bT5Y([
            [this.m4q, "click", this.LA6u.g4k(this)],
            [this.Df3x, "click", this.cF5K.g4k(this)],
            [this.Df3x, "mouseout", this.bDv8n.g4k(this, 0)],
            [this.Df3x, "mouseover", this.bDv8n.g4k(this, 1)]
        ]);
        window.scrollTopbar = this.cqP8H.g4k(this);
        window.matchNav = this.bDz8r.g4k(this);
        window.polling = this.uy1x.g4k(this);
        this.bnt4x = q4u.Ct3x.A4E();
        this.cqO8G();
        this.Ie5j();
        var bx4B = k4o.hE7x(location.href.split("?")[1]) || {};
        if (bx4B.market) {
            a3x.B4F("topbar-download-link").href = "/download?market=" + bx4B.market
        }
        var bnE4I = a3x.F4J(this.m4q, "j-showoff");
        if (bnE4I && !this.bnt4x.bmW4a("newMvSearch")) {
            a3x.v4z(bnE4I[0], "f-hide");
            window.setTimeout(function () {
                a3x.w4A(bnE4I[0], "f-hide")
            }, 5e3)
        }
    };
    b3x.uy1x = function (d4h) {
        var dV6P = l4p.Jz5E();
        if (!/^\/msg/.test(dV6P)) {
            var wb1x = 0;
            wb1x += d4h.comment;
            wb1x += d4h.forward;
            wb1x += d4h.msg;
            wb1x += d4h.notice;
            if (wb1x > 0) {
                wb1x = wb1x > 99 ? "99+" : wb1x;
                this.Lq6k.innerText = wb1x;
                this.Ic5h.innerText = wb1x;
                a3x.v4z(this.Lq6k, "f-hide");
                a3x.v4z(this.Ic5h, "f-hide");
                this.Vp9g = true
            } else {
                a3x.w4A(this.Lq6k, "f-hide");
                a3x.w4A(this.Ic5h, "f-hide");
                this.Vp9g = false
            }
            var eH6B = "/at";
            if (d4h.notice) eH6B = "/notify";
            if (d4h.comment) eH6B = "/comment";
            if (d4h.msg > 0) eH6B = "/private";
            if (d4h.forward > 0) eH6B = "/at";
            this.Ic5h.parentNode.href = "/msg/#" + eH6B
        } else {
            this.Ic5h.parentNode.href = "javascript:;";
            a3x.w4A(this.Lq6k, "f-hide");
            a3x.w4A(this.Ic5h, "f-hide");
            this.Vp9g = false
        }
        var i4m = a3x.F4J(this.bnd4h, "j-t");
        if (!/^\/friend/.test(dV6P)) {
            if (i4m && i4m.length) {
                a3x.Y4c(i4m[0], "display", d4h.event > 0 ? "" : "none")
            }
        } else {
            a3x.Y4c(i4m[0], "display", "none")
        }
    };
    b3x.cF5K = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action");
        if (f4j) {
            switch (a3x.u4y(f4j, "action")) {
                case "login":
                    h4l.cm5r(d4h);
                    var t4x = a3x.u4y(f4j, "type");
                    if (t4x) {
                        if (t4x == "sina" || t4x == "tencent") top.open(f4j.href);
                        else top.login(t4x == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    h4l.cm5r(d4h);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.bnt4x.bmW4a("storeNew")) {
                        a3x.w4A(this.czl0x, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.bnt4x.bmW4a("levelNew")) {
                        a3x.w4A(this.czm0x, "f-vhide")
                    }
                    break
            }
        }
    };
    b3x.LA6u = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action");
        if (!f4j) return;
        var W4a = a3x.u4y(f4j, "action");
        switch (W4a) {
            case "bilog":
                var bnK4O = a3x.u4y(f4j, "logAction"),
                    bnM4Q = a3x.u4y(f4j, "logJson");
                window.log(bnK4O, bnM4Q);
                break
        }
    };
    b3x.bDv8n = function (Ib5g, d4h) {
        if (this.bnT4X) {
            this.bnT4X.style.display = !Ib5g ? "none" : "";
            (Ib5g || !this.Vp9g ? a3x.w4A : a3x.v4z).call(window, this.Lq6k, "f-hide")
        }
    };
    b3x.cqP8H = function (fO6I) {
        a3x.Y4c(this.m4q, "top", -fO6I + "px")
    };
    b3x.bDz8r = function (eH6B, cqL8D) {
        this.cqR8J.np9g(eH6B);
        if (eH6B == "discover") {
            a3x.w4A(this.bDi8a, "f-hide");
            a3x.v4z(this.bng4k, "f-hide");
            window.g_topBarHeight = 105;
            this.bnq4u.np9g(cqL8D)
        } else {
            a3x.v4z(this.bDi8a, "f-hide");
            a3x.w4A(this.bng4k, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b3x.cqO8G = function () {
        var vr1x = a3x.B4F("g_iframe");
        if (!vr1x) return;
        var gk6e = vr1x.contentWindow.document.getElementById("g_top");
        this.bDz8r(a3x.u4y(gk6e, "module"), a3x.u4y(gk6e, "sub"))
    };
    var UV9M = {},
        bEr8j = /\/\/\w+/,
        cqK8C = {
            avatarUrl: function (a, b) {
                a = a || "";
                b = b || "";
                return a.replace(bEr8j, "") !== b.replace(bEr8j, "")
            },
            userId: true,
            nickname: true,
            reward: true,
            topic: true,
            djStatus: true
        };
    b3x.cqJ8B = function (UN9E) {
        var nj9a = k4o.dd5i(cqK8C, function (C4G, K4O) {
            if (k4o.gr6l(C4G)) {
                return C4G(UN9E[K4O], UV9M[K4O])
            } else {
                return UN9E[K4O] !== UV9M[K4O]
            }
        });
        UV9M = UN9E;
        return UN9E[nj9a]
    };
    b3x.Ie5j = function () {
        var dg5l = GUser || {},
            cqI8A = GUserAcc || {};
        if (dg5l && dg5l.userId) {
            var bEL8D = NEJ.X(dg5l, cqI8A);
            if (this.cqJ8B(bEL8D)) {
                a3x.dI5N(this.Df3x, "m-topbar-user-login", bEL8D)
            }
        } else {
            UV9M = {};
            this.Df3x.innerHTML = a3x.ik7d("m-topbar-user-unlogin");
            var i4m = a3x.F4J(this.bnd4h, "j-t");
            a3x.Y4c(i4m[0], "display", "none")
        }
        a3x.v4z(this.Df3x, "f-hide");
        this.Vp9g = false;
        var i4m = a3x.F4J(this.Df3x, "j-uflag");
        if (dg5l && dg5l.userId) {
            this.Lq6k = i4m.shift();
            this.bnT4X = i4m.shift();
            this.Ic5h = i4m.shift()
        } else {
            this.bnT4X = i4m.shift()
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        b3x, J4N;
    q4u.fg6a({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function (P4T) {
                h4l.z4D(q4u.rO0x, "message", P4T)
            }
        }
    });
    q4u.rO0x = NEJ.C();
    b3x = q4u.rO0x.O4S(q4u.hs7l);
    b3x.UM9D = function () {
        this.co5t("polling-get", {})
    };
    b3x.uP1x = function () {
        var eC6w;
        return function () {
            if (!!eC6w) return;
            eC6w = window.setInterval(this.UM9D.g4k(this), 1e5);
            this.UM9D()
        }
    }();
    H4L.fG6A.A4E({
        event: "message",
        element: q4u.rO0x
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {}
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {}
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function (fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this,
                args = arguments;
            WebSocket.UK9B(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this,
                args = arguments;
            WebSocket.UK9B(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.TF9w.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bok4o();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }(),
                k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function () {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function () {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {},
                error: function () {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gO7H = WebSocket.cqH8z++;
            WebSocket.bFm9d[self.gO7H] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lu8m = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.UK9B(function () {
                    WebSocket.pc9T.create(self.gO7H, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pc9T.send(this.gO7H, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.pc9T.close(this.gO7H)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.lu8m)) {
                this.lu8m[type] = []
            }
            this.lu8m[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.lu8m)) return;
            var events = this.lu8m[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.lu8m[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cqG8y = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bFs9j(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bFs9j("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cqF8x("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bFs9j = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.cqF8x = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.pc9T = null;
        WebSocket.bFm9d = {};
        WebSocket.TF9w = [];
        WebSocket.cqH8z = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.UK9B(function () {
                WebSocket.pc9T.loadManualPolicyFile(url)
            })
        };
        WebSocket.bok4o = function () {
            if (WebSocket.pc9T) return;
            if (WebSocket.cqB8t) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cqB8t
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cqA8s()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.czn0x = function () {
            setTimeout(function () {
                WebSocket.pc9T = document.getElementById("webSocketFlash");
                WebSocket.pc9T.setCallerUrl(location.href);
                WebSocket.pc9T.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.TF9w.length; ++i) {
                    WebSocket.TF9w[i]()
                }
                WebSocket.TF9w = []
            }, 0)
        };
        WebSocket.czo0x = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.pc9T.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bFm9d[events[i].webSocketId].cqG8y(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.czp0x = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dH5M = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.UK9B = function (task) {
            if (WebSocket.pc9T) {
                task()
            } else {
                WebSocket.TF9w.push(task)
            }
        };
        WebSocket.cqA8s = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bok4o()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bok4o()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c4g = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c4g(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c4g = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.dW6Q) this.dW6Q = {};
        this.bFE9v = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dW6Q || !this.dW6Q.error || isArray(this.dW6Q.error) && !this.dW6Q.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dW6Q) return false;
        var handler = this.dW6Q[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dW6Q) this.dW6Q = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dW6Q[type]) {
            this.dW6Q[type] = listener
        } else if (isArray(this.dW6Q[type])) {
            this.dW6Q[type].push(listener)
        } else {
            this.dW6Q[type] = [this.dW6Q[type], listener]
        }
        if (isArray(this.dW6Q[type]) && !this.dW6Q[type].warned) {
            var m;
            if (this.bFE9v !== undefined) {
                m = this.bFE9v
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dW6Q[type].length > m) {
                this.dW6Q[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dW6Q[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dW6Q || !this.dW6Q[type]) return this;
        var list = this.dW6Q[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dW6Q[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.dW6Q = {};
            return this
        }
        var events = this.dW6Q && this.dW6Q[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dW6Q[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.dW6Q) this.dW6Q = {};
        if (!this.dW6Q[type]) this.dW6Q[type] = [];
        if (!isArray(this.dW6Q[type])) {
            this.dW6Q[type] = [this.dW6Q[type]]
        }
        return this.dW6Q[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        dz5E = c4g("nm.u"),
        q4u = c4g("nm.d"),
        SY9P = c4g("pomelo"),
        dv5A = 0,
        b3x, J4N;
    q4u.fg6a({
        "polling-init": {
            url: "/api/push/init",
            format: function (P4T) {
                dv5A = 2;
                var rW0x = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey,
                        secret: "bec0b878892740c498505a85eb3dcec9"
                    },
                    j4n = P4T.account || Z4d,
                    df5k = GUser.userId;
                SY9P.init(rW0x.host, rW0x.port, true, this.cqu8m.g4k(this, {
                    user: df5k,
                    nonce: j4n.nonce,
                    domain: rW0x.domain,
                    productKey: rW0x.key,
                    signature: j4n.signature,
                    expire_time: j4n.expireTime
                }))
            },
            onerror: function () {
                return this.bot5y()
            }
        }
    });
    q4u.BM3x = NEJ.C();
    b3x = q4u.BM3x.O4S(q4u.hs7l);
    b3x.cs5x = function () {
        var qj9a = !1;
        return function (e4i) {
            if (!qj9a) {
                qj9a = !0
            }
            this.cw5B(e4i);
            SY9P.on("specify", this.pA9r.g4k(this));
            SY9P.on("broadcast", this.pA9r.g4k(this))
        }
    }();
    b3x.pA9r = function (d4h) {
        k4o.bb4f(d4h, function (bE4I) {
            h4l.z4D(q4u.BM3x, "message", bE4I)
        }, this)
    };
    b3x.bot5y = function () {
        var bw4A = 500;
        return function () {
            dv5A = 0;
            SY9P.disconnect();
            if (bw4A > 6e4) bw4A = 500;
            bw4A *= 2
        }
    }();
    b3x.cqu8m = function (e4i, bV5a) {
        if (!!bV5a) {
            return this.bot5y()
        }
        dv5A = 3;
        SY9P.registerAndBind(e4i, function (o4s) {
            if (o4s.code != 200) {
                return this.bot5y()
            }
            dv5A = 4
        }.g4k(this))
    };
    b3x.czq0x = function () {
        dz5E.cqr8j.gf6Z().czr0x()
    };
    b3x.czs0x = function () {
        dz5E.cqr8j.gf6Z().czu0x()
    };
    b3x.bow5B = function () {
        var qj9a = !1;
        return function () {
            if (qj9a) return;
            qj9a = !0;
            this.co5t("polling-init", {})
        }
    }();
    H4L.fG6A.A4E({
        event: "message",
        element: q4u.BM3x
    })
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        dm5r = c4g("nej.p"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        cV5a = c4g("api"),
        b3x, J4N;
    var gv7o = a3x.iz7s('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n4r.box5C = NEJ.C();
    b3x = n4r.box5C.O4S(n4r.ee6Y);
    J4N = n4r.box5C.cl5q;
    b3x.bj4n = function (e4i) {
        e4i.title = "意见反馈";
        this.bk4o(e4i)
    };
    b3x.ca5f = function () {
        this.cb5g = gv7o
    };
    b3x.bS5X = function () {
        this.cd5i();
        this.gX7Q = {};
        var HT4X = a3x.F4J;
        var Ek3x = h4l.s4w;
        this.gX7Q.submit_btn = HT4X(this.m4q, "u-btn2")[0];
        this.gX7Q.cancle_btn = HT4X(this.m4q, "u-btn2")[1];
        this.gX7Q.prompt_msg = HT4X(this.m4q, "u-err")[0];
        this.gX7Q.zs = HT4X(this.m4q, "zs")[0];
        a3x.Y4c(this.gX7Q.zs, "display", "none");
        this.gX7Q.fb_txt = HT4X(this.m4q, "u-txt")[0];
        this.gX7Q.contact = HT4X(this.m4q, "u-txt")[1];
        a3x.gb6V(this.gX7Q.fb_txt, "holder");
        a3x.gb6V(this.gX7Q.contact, "holder");
        if (a3x.bA4E(this.gX7Q.fb_txt.parentNode, "holder-parent")) {
            a3x.Y4c(this.gX7Q.fb_txt.parentNode, "display", "block")
        }
        if (a3x.bA4E(this.gX7Q.contact.parentNode, "holder-parent")) {
            a3x.Y4c(this.gX7Q.contact.parentNode, "display", "block")
        }
        Ek3x(this.gX7Q.submit_btn, "click", this.cqn8f.g4k(this));
        Ek3x(this.gX7Q.cancle_btn, "click", this.cqm8e.g4k(this));
        Ek3x(this.gX7Q.prompt_msg, "msgShow", this.cql8d.g4k(this));
        Ek3x(this.gX7Q.fb_txt, "keyup", this.tO0x.g4k(this));
        Ek3x(this.gX7Q.fb_txt, "input", this.fE6y.g4k(this));
        Ek3x(this.gX7Q.contact, "keyup", this.cqk8c.g4k(this));
        Ek3x(this.gX7Q.contact, "input", this.bGY9P.g4k(this));
        this.lf8X = q4u.hO7H.A4E()
    };
    b3x.cqn8f = function (d4h) {
        h4l.bf4j(d4h);
        if (this.cD5I()) return;
        var bl4p = this.gX7Q.fb_txt.value.trim();
        var bm4q = bl4p.length;
        var e4i = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bHg9X = this.gX7Q.contact.value.trim();
        var TZ9Q = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l4p.bjg3x(),
            contact: bHg9X
        };
        var j4n = {
                content: bl4p,
                client: "web",
                xInfo: JSON.stringify(TZ9Q)
            },
            nm9d = this.lf8X.cvY0x();
        if (nm9d && nm9d.length) {
            j4n.log = nm9d.join("\n")
        }
        if (bm4q == 0) {
            this.gX7Q.prompt_msg.innerHTML = "反馈内容不能为空";
            a3x.Y4c(this.gX7Q.prompt_msg, "display", "block");
            return
        }
        if (bHg9X.length > 100) {
            this.gX7Q.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a3x.Y4c(this.gX7Q.prompt_msg, "display", "block");
            return
        }
        this.cD5I(true);
        e4i.data = k4o.de5j(j4n);
        e4i.onload = this.cqj8b.g4k(this);
        e4i.onerror = this.im7f.g4k(this);
        x4B.bo4s("/api/feedback/web", e4i)
    };
    b3x.fE6y = function (d4h) {
        var bm4q = this.gX7Q.fb_txt.value.trim().length;
        if (bm4q > 0) a3x.Y4c(this.gX7Q.prompt_msg, "display", "none");
        dm5r.di5n.browser == "ie" && dm5r.di5n.version < "7.0" ? setTimeout(this.fN6H.g4k(this), 0) : this.fN6H()
    };
    b3x.tO0x = function (d4h) {
        if (d4h.keyCode === 8) this.fN6H()
    };
    b3x.fN6H = function () {
        var bm4q = this.gX7Q.fb_txt.value.trim().length;
        this.gX7Q.zs.innerHTML = !bm4q ? "0/140" : bm4q + "/140"
    };
    b3x.bGY9P = function (d4h) {
        var bm4q = this.gX7Q.contact.value.trim().length;
        if (bm4q > 0) a3x.Y4c(this.gX7Q.prompt_msg, "display", "none")
    };
    b3x.cqk8c = function (d4h) {
        if (d4h.keyCode === 8) this.bGY9P()
    };
    b3x.cqm8e = function (d4h) {
        h4l.cm5r(d4h);
        this.br4v()
    };
    b3x.cql8d = function (d4h) {
        var f4j = h4l.U4Y(d4h);
        f4j.innerHTML = "请输入反馈内容"
    };
    b3x.czv0x = function (czw0x) {
        var f4j = h4l.U4Y(d4h);
        f4j.innerHTML = ""
    };
    b3x.cqj8b = function (o4s) {
        this.cD5I(false);
        this.br4v();
        n4r.X4b.L4P({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b3x.im7f = function (o4s) {
        this.cD5I(false);
        n4r.X4b.L4P({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b3x.cD5I = function (cQ5V) {
        return this.dP5U(this.gX7Q.submit_btn, cQ5V, "发送意见", "发送中...")
    };
    b3x.L4P = function () {
        J4N.L4P.call(this);
        this.cD5I(false);
        this.gX7Q.fb_txt.value = "";
        this.gX7Q.contact.value = "";
        a3x.Y4c(this.gX7Q.prompt_msg, "display", "none");
        this.fN6H()
    };
    l4p.cqf8X = function (e4i) {
        e4i = e4i || {};
        if (e4i.title === undefined) e4i.title = "意见反馈";
        n4r.box5C.L4P(e4i)
    };
    cV5a.feedback = l4p.feedback = l4p.cqf8X
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        N4R = c4g("nej.ui"),
        b3x;
    if (!!N4R.wS1x) return;
    N4R.wS1x = NEJ.C();
    b3x = N4R.wS1x.O4S(N4R.ef6Z);
    b3x.cs5x = function () {
        this.gO7H = this.bHX9O();
        this.cw5B()
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.cq5v = e4i.index;
        this.gg6a = e4i.total;
        this.gY7R = e4i.range;
        this.gh6b(e4i.data)
    };
    b3x.bz4D = function () {
        this.bF4J();
        delete this.bi4m;
        delete this.cq5v;
        delete this.gg6a;
        delete this.gY7R
    };
    b3x.hG7z = bn4r;
    b3x.bHX9O = function () {
        var gn6h = +(new Date);
        return function () {
            return "itm-" + ++gn6h
        }
    }();
    b3x.CX3x = function () {
        return this.gO7H
    };
    b3x.hy7r = function () {
        return this.bi4m
    };
    b3x.gh6b = function (j4n) {
        this.bi4m = j4n || {};
        this.hG7z(this.bi4m)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        N4R = c4g("nej.ui"),
        b3x, J4N;
    if (!!N4R.tn0x) return;
    N4R.tn0x = NEJ.C();
    b3x = N4R.tn0x.O4S(N4R.wS1x);
    J4N = N4R.tn0x.cl5q;
    b3x.bj4n = function (e4i) {
        this.cqe8W = e4i.pkey || "id";
        this.bk4o(e4i)
    };
    b3x.EL4P = function (j4n) {
        this.z4D("ondelete", {
            ext: j4n,
            id: this.CX3x(),
            data: this.hy7r(),
            body: this.kY8Q()
        })
    };
    b3x.sO0x = function (j4n) {
        this.z4D("onupdate", {
            ext: j4n,
            id: this.CX3x(),
            data: this.hy7r(),
            body: this.kY8Q()
        })
    };
    b3x.gh6b = function (j4n) {
        J4N.gh6b.apply(this, arguments);
        this.gO7H = this.bi4m[this.cqe8W] || this.bHX9O()
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        fo6i = NEJ.R,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ui"),
        b3x, iw7p, boE5J;
    if (!!N4R.boJ5O) return;
    N4R.boJ5O = NEJ.C();
    b3x = N4R.boJ5O.O4S(N4R.ef6Z);
    b3x.bj4n = function (e4i) {
        this.TM9D = NEJ.X({}, e4i);
        this.fC6w = NEJ.X({}, e4i);
        delete this.TM9D.onchange;
        this.fC6w.onchange = this.fI6C.g4k(this);
        this.bk4o(e4i);
        this.cqd8V({
            number: e4i.number,
            label: e4i.label || Z4d
        })
    };
    b3x.bz4D = function () {
        this.bF4J();
        if (!!this.kF8x) {
            this.kF8x.S4W();
            delete this.kF8x
        }
        delete this.TM9D;
        delete this.fC6w;
        this.cqb8T();
        this.m4q.innerHTML = "&nbsp;"
    };
    b3x.ca5f = function () {
        this.lD8v = iw7p
    };
    b3x.cqd8V = function (j4n) {
        a3x.dI5N(this.m4q, boE5J, j4n);
        var gn6h = a3x.JC5H();
        this.fC6w.list = a3x.F4J(this.m4q, "js-i-" + gn6h);
        this.fC6w.pbtn = (a3x.F4J(this.m4q, "js-p-" + gn6h) || fo6i)[0];
        this.fC6w.nbtn = (a3x.F4J(this.m4q, "js-n-" + gn6h) || fo6i)[0]
    };
    b3x.bS5X = function () {
        this.cd5i()
    };
    b3x.czx0x = function (j4n) {
        return a3x.bW5b(boE5J, j4n)
    };
    b3x.fI6C = function (d4h) {
        if (this.Sp8h) return;
        var r4v = d4h.index,
            ct5y = d4h.total;
        this.Sp8h = !0;
        this.Sm8e(r4v, ct5y);
        k4o.bb4f(this.bcy2x, function (rT0x) {
            rT0x.Sm8e(r4v, ct5y)
        });
        this.Sp8h = !1;
        this.z4D("onchange", d4h)
    };
    b3x.g4k = function (bG4K) {
        bG4K = a3x.B4F(bG4K);
        if (!bG4K) return this;
        var cp5u = NEJ.X({}, this.TM9D);
        cp5u.parent = bG4K;
        cp5u.index = this.rP0x();
        cp5u.total = this.jl7e();
        var rT0x = this.constructor.A4E(cp5u);
        rT0x.wl1x("onchange", this.fC6w.onchange);
        if (!this.bcy2x) this.bcy2x = [];
        this.bcy2x.push(rT0x);
        return this
    };
    b3x.cqb8T = function () {
        var beF2x = function (rT0x, r4v, i4m) {
            rT0x.S4W();
            i4m.splice(r4v, 1)
        };
        return function () {
            k4o.mD8v(this.bcy2x, beF2x)
        }
    }();
    b3x.km8e = function (r4v) {
        if (!this.kF8x) return;
        this.kF8x.km8e(r4v)
    };
    b3x.rP0x = function () {
        if (!this.kF8x) return 1;
        return this.kF8x.rP0x()
    };
    b3x.jl7e = function () {
        if (!this.kF8x) return 1;
        return this.kF8x.jl7e()
    };
    b3x.Sm8e = function (r4v, ct5y) {
        if (!this.kF8x) return;
        this.kF8x.Sm8e(r4v, ct5y)
    };
    b3x.boO5T = function (ct5y) {
        if (!this.kF8x) return;
        this.kF8x.boO5T(ct5y)
    };
    iw7p = a3x.sN0x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    boE5J = a3x.er6l('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        N4R = c4g("nej.ut"),
        b3x;
    if (!!N4R.bct2x) return;
    N4R.bct2x = NEJ.C();
    b3x = N4R.bct2x.O4S(N4R.cC5H);
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.bci2x = e4i.pbtn;
        this.ck5p = e4i.nbtn;
        this.bcg2x = e4i.sbtn;
        this.bcf2x = e4i.ebtn;
        this.iL7E = e4i.event || "click";
        this.jX8P = e4i.selected || "js-selected";
        this.nI9z = e4i.disabled || "js-disabled";
        this.cpY8Q(e4i.list);
        this.Sm8e(e4i.index || 1, e4i.total || 1)
    };
    b3x.bz4D = function () {
        this.bF4J();
        delete this.bO4S;
        delete this.iL7E;
        delete this.bci2x;
        delete this.ck5p;
        delete this.bcg2x;
        delete this.bcf2x;
        delete this.bLr0x;
        delete this.gg6a;
        delete this.cq5v;
        delete this.jX8P;
        delete this.nI9z
    };
    b3x.cpY8Q = function () {
        var bpc5h = function (f4j) {
            this.bO4S.push(f4j);
            this.bT5Y([
                [f4j, this.iL7E, this.cr5w.eo6i(this, 0)]
            ])
        };
        return function (i4m) {
            this.bO4S = [];
            this.bT5Y([
                [this.bci2x, "click", this.cr5w.eo6i(this, -1)],
                [this.ck5p, "click", this.cr5w.eo6i(this, 1)],
                [this.bcg2x, "click", this.cr5w.eo6i(this, -2)],
                [this.bcf2x, "click", this.cr5w.eo6i(this, 2)]
            ]);
            k4o.bb4f(i4m, bpc5h, this)
        }
    }();
    b3x.Fr4v = function (f4j, r4v) {
        if (r4v == null) {
            f4j.innerText = "";
            a3x.Y4c(f4j, "display", "none");
            a3x.v4z(f4j, this.jX8P)
        } else {
            f4j.innerText = r4v;
            a3x.Y4c(f4j, "display", "");
            r4v == this.cq5v ? a3x.w4A(f4j, this.jX8P) : a3x.v4z(f4j, this.jX8P)
        }
    };
    b3x.bph5m = function () {
        if (this.cq5v <= 1) {
            a3x.w4A(this.bci2x, this.nI9z);
            a3x.w4A(this.bcg2x, this.nI9z)
        } else {
            a3x.v4z(this.bci2x, this.nI9z);
            a3x.v4z(this.bcg2x, this.nI9z)
        }
        if (this.cq5v >= this.gg6a) {
            a3x.w4A(this.ck5p, this.nI9z);
            a3x.w4A(this.bcf2x, this.nI9z)
        } else {
            a3x.v4z(this.ck5p, this.nI9z);
            a3x.v4z(this.bcf2x, this.nI9z)
        }
    };
    b3x.bbJ2x = bn4r;
    b3x.bpi5n = function () {
        this.bbJ2x();
        this.bph5m();
        this.z4D("onchange", {
            last: this.bLr0x,
            total: this.gg6a,
            index: this.cq5v,
            ext: this.bpj5o
        })
    };
    b3x.bMf0x = function (r4v) {
        r4v = parseInt(r4v);
        if (isNaN(r4v) || this.gg6a == null) return !1;
        r4v = Math.max(1, Math.min(r4v, this.gg6a));
        this.bLr0x = this.cq5v;
        this.cq5v = r4v;
        return !0
    };
    b3x.bpk5p = function (ct5y) {
        ct5y = parseInt(ct5y);
        if (isNaN(ct5y) || ct5y < 1) return !1;
        this.gg6a = ct5y;
        return !0
    };
    b3x.cr5w = function (d4h, eO6I) {
        h4l.cm5r(d4h);
        var G4K = h4l.U4Y(d4h);
        if (!G4K || a3x.bA4E(G4K, this.jX8P) || a3x.bA4E(G4K, this.nI9z)) return;
        var r4v = G4K.innerText;
        switch (eO6I) {
            case 1:
            case -1:
                r4v = this.cq5v + eO6I;
                break;
            case 2:
                r4v = this.gg6a;
                break;
            case -2:
                r4v = 1;
                break
        }
        this.km8e(r4v)
    };
    b3x.rP0x = function () {
        return this.cq5v
    };
    b3x.km8e = function (r4v) {
        var cpX8P = this.cq5v;
        this.bMf0x(r4v);
        if (cpX8P != this.cq5v) this.bpi5n();
        return this
    };
    b3x.jl7e = function () {
        return this.gg6a
    };
    b3x.Se8W = function (ct5y) {
        if (this.bpk5p(ct5y) && this.cq5v != null) {
            this.cq5v = 1;
            this.bpi5n()
        }
        return this
    };
    b3x.boO5T = function (ct5y) {
        if (this.bpk5p(ct5y)) {
            this.bbJ2x();
            this.bph5m()
        }
        return this
    };
    b3x.Sm8e = function (r4v, ct5y) {
        if (!this.bpk5p(ct5y) || !this.bMf0x(r4v)) return this;
        this.bpi5n();
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        cP5U = c4g("nej.x"),
        N4R = c4g("nej.ut"),
        b3x;
    if (!!N4R.Rq8i) return;
    N4R.Rq8i = NEJ.C();
    b3x = N4R.Rq8i.O4S(N4R.bct2x);
    b3x.cs5x = function () {
        this.cw5B();
        var f4j = a3x.cZ5e("span", "zdot");
        f4j.innerText = "...";
        this.baN1x = [f4j.cloneNode(true), f4j]
    };
    b3x.bz4D = function () {
        this.bF4J();
        this.bMM0x()
    };
    b3x.bMM0x = function () {
        a3x.mN8F(this.baN1x[0]);
        a3x.mN8F(this.baN1x[1])
    };
    b3x.bbJ2x = function () {
        this.bpj5o = {
            last: !1,
            first: !1,
            list: this.bO4S
        };
        this.bMM0x();
        this.Fr4v(this.bO4S[0], 1);
        var bI4M = 1,
            bm4q = this.bO4S.length;
        if (this.gg6a < bm4q) {
            for (var qe9V; bI4M < bm4q; bI4M++) {
                qe9V = bI4M + 1;
                this.Fr4v(this.bO4S[bI4M], qe9V > this.gg6a ? null : qe9V)
            }
            return
        }
        if (this.cq5v > 1) {
            var cz5E = Math.floor((bm4q - 2) / 2),
                cpW8O = this.gg6a - bm4q + 2,
                hS7L = Math.max(2, this.cq5v - cz5E);
            if (this.gg6a >= bm4q) {
                hS7L = Math.min(hS7L, cpW8O)
            }
            if (hS7L > 2) {
                this.bO4S[0].insertAdjacentElement("afterEnd", this.baN1x[0]);
                this.bpj5o.first = !0
            }
            for (var r4v;; bI4M++) {
                r4v = hS7L + bI4M - 1;
                if (r4v > this.cq5v) break;
                this.Fr4v(this.bO4S[bI4M], r4v)
            }
        }
        if (this.cq5v < this.gg6a) {
            var r4v, hS7L = this.cq5v + 1;
            for (var i = 0, l = bm4q - 2;; i++, bI4M++) {
                r4v = hS7L + i;
                if (bI4M > l || r4v > this.gg6a) break;
                this.Fr4v(this.bO4S[bI4M], r4v)
            }
            if (r4v < this.gg6a) {
                this.bO4S[bI4M].insertAdjacentElement("beforeBegin", this.baN1x[1]);
                this.bpj5o.last = !0
            }
            if (r4v <= this.gg6a) {
                this.Fr4v(this.bO4S[bI4M++], this.gg6a)
            }
        }
        for (; bI4M < bm4q; bI4M++) {
            this.Fr4v(this.bO4S[bI4M])
        }
    };
    a3x.cpV8N = cP5U.cpV8N = function (bG4K, e4i) {
        var D4H = a3x.ld8V(bG4K);
        if (!D4H) return null;
        if (!N4R.ZH1x(D4H, N4R.Rq8i)) {
            e4i = e4i || {};
            var i4m = !e4i.clazz ? a3x.da5f(D4H) : a3x.F4J(D4H, e4i.clazz);
            e4i.pbtn = i4m.shift();
            e4i.nbtn = i4m.pop();
            e4i.list = i4m;
            delete e4i.clazz
        }
        return N4R.ZH1x(D4H, N4R.Rq8i, e4i || Z4d)
    };
    cP5U.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        fo6i = NEJ.R,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        N4R = c4g("nej.ui"),
        b3x, J4N, gv7o;
    if (!!N4R.Rp8h) return;
    N4R.Rp8h = NEJ.C();
    b3x = N4R.Rp8h.O4S(N4R.boJ5O);
    J4N = N4R.Rp8h.cl5q;
    b3x.bj4n = function (e4i) {
        e4i.number = parseInt(e4i.number) || 9;
        this.bk4o(e4i);
        this.kF8x = H4L.Rq8i.A4E(this.fC6w)
    };
    b3x.fI6C = function (d4h) {
        if (!!this.TM9D.noend) {
            var bMX0x = d4h.ext || Z4d,
                i4m = bMX0x.list || fo6i;
            if (bMX0x.last) {
                a3x.Y4c(i4m[i4m.length - 1], "display", "none")
            }
        }
        J4N.fI6C.apply(this, arguments)
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        ba4e = c4g("nej.ui"),
        N4R = c4g("nej.ut"),
        b3x;
    if (!!N4R.baJ1x) return;
    N4R.baJ1x = NEJ.C();
    b3x = N4R.baJ1x.O4S(N4R.cC5H);
    b3x.bj4n = function (e4i) {
        this.iP7I = {};
        this.bk4o(e4i);
        this.hK7D = a3x.B4F(e4i.parent);
        this.fc6W = {
            parent: this.hK7D
        };
        this.nX9O = parseInt(e4i.limit) || 10;
        this.xN2x = parseInt(e4i.first) || this.nX9O;
        this.cpU8M(e4i.item);
        this.cpT8L(e4i.cache || Z4d);
        this.cpS8K(e4i.pager || Z4d);
        this.gh6b()
    };
    b3x.bz4D = function () {
        this.z4D("onbeforerecycle");
        this.Rd8V();
        this.bF4J();
        if (this.iP7I.clear) {
            this.R4V.tQ0x(this.iP7I.key)
        }
        this.R4V.S4W();
        if (!!this.iR7K) {
            this.iR7K.S4W();
            delete this.iR7K
        }
        delete this.bNw0x;
        delete this.fC6w;
        delete this.bat1x;
        delete this.R4V;
        delete this.hK7D;
        delete this.Rb8T;
        delete this.fc6W;
        delete this.iP7I
    };
    b3x.bNC1x = function () {
        var cY5d = /\{(.*?)\}/gi,
            cpR8J = function (qy0x, j4n) {
                return (qy0x || "{id}{seed}").replace(cY5d, function ($1, $2) {
                    var C4G = j4n[$2];
                    return C4G == null ? $1 : C4G
                })
            };
        return function (D4H) {
            var K4O = cpR8J(this.fc6W.jstIdTempalte, {
                id: D4H,
                seed: a3x.JC5H()
            });
            if (!this.fc6W.jstIdType) {
                return a3x.B4F(K4O)
            } else if (this.fc6W.jstIdType == 1) {
                return (a3x.F4J(this.hK7D, K4O) || [])[0]
            }
        }
    }();
    b3x.Ad2x = function (bI4M, be4i, gd6X, bm4q) {
        var o4s = {
            index: 1,
            total: 1
        };
        if (be4i >= bI4M) {
            o4s.index = Math.floor((be4i - bI4M) / gd6X) + 2
        }
        if (bm4q > bI4M) {
            o4s.total = Math.ceil((bm4q - bI4M) / gd6X) + 1
        }
        return o4s
    };
    b3x.bNI1x = function (K4O) {
        delete this.Rb8T;
        this.HF4J = K4O;
        this.bT5Y([
            [this.hK7D, "click", this.cpQ8I.g4k(this)]
        ])
    };
    b3x.cpU8M = function (p4t) {
        if (k4o.fA6u(p4t)) {
            this.bNI1x(p4t);
            return
        }
        NEJ.X(this.fc6W, p4t);
        var dT6N = this.fc6W.klass;
        delete this.fc6W.klass;
        if (k4o.fA6u(dT6N)) {
            this.bNI1x(dT6N);
            return
        }
        delete this.HF4J;
        this.Rb8T = dT6N;
        this.fc6W.ondelete = this.z4D.g4k(this, "ondelete");
        this.fc6W.onupdate = this.z4D.g4k(this, "onupdate")
    };
    b3x.cpT8L = function (Q4U) {
        var dT6N = Q4U.klass,
            jF7y = NEJ.X({}, Q4U);
        this.iP7I.key = jF7y.lkey;
        this.iP7I.data = jF7y.data || {};
        this.iP7I.clear = !!jF7y.clear;
        this.fc6W.pkey = jF7y.key || "id";
        jF7y.onlistload = this.bpy5D.g4k(this);
        jF7y.onpullrefresh = this.cpP8H.g4k(this);
        if (!!dT6N && "onlistchange" in dT6N) {
            this.bT5Y([
                [dT6N, "listchange", this.bpA5F.g4k(this)]
            ])
        } else {
            jF7y.onitemadd = this.ZX1x.g4k(this);
            jF7y.onitemdelete = this.ZP1x.g4k(this);
            jF7y.onitemupdate = this.bOu1x.g4k(this)
        }
        this.R4V = (dT6N || N4R.Sl8d).A4E(jF7y);
        if (Q4U.total != null) {
            this.R4V.Se8W(this.iP7I.key, Q4U.total)
        }
        if (!!Q4U.list) {
            this.R4V.tP0x(this.iP7I.key, Q4U.list)
        }
    };
    b3x.cpS8K = function (rT0x) {
        this.bNw0x = rT0x.klass || ba4e.Rp8h;
        this.fC6w = NEJ.X({}, rT0x);
        if (k4o.eE6y(rT0x.parent)) {
            this.fC6w.parent = rT0x.parent[0];
            this.QT8L = rT0x.parent.slice(1);
            if (!this.QT8L || !this.QT8L.length) {
                delete this.QT8L
            }
        }
        delete this.fC6w.klass
    };
    b3x.Rd8V = function () {
        var gm6g = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z4D("onbeforelistclear", {
                parent: this.hK7D
            });
            if (!!this.fz6t && this.fz6t.length > 0) {
                this.fz6t = this.Rb8T.S4W(this.fz6t);
                delete this.fz6t
            }
            if (gm6g.test(this.hK7D.tagName)) {
                a3x.bAH7A(this.hK7D)
            } else {
                this.hK7D.innerHTML = ""
            }
        }
    }();
    b3x.bpG5L = function (ZA1x) {
        if (!!this.fC6w.fixed) return;
        a3x.Y4c(this.fC6w.parent, "display", ZA1x);
        k4o.bb4f(this.QT8L, function (bG4K) {
            a3x.Y4c(bG4K, "display", ZA1x)
        }, this)
    };
    b3x.bpR5W = function () {
        var r4v = this.fC6w.index || 1;
        delete this.fC6w.index;
        if (!!this.iR7K) {
            r4v = this.iR7K.rP0x()
        }
        this.zY2x({
            last: r4v,
            index: r4v
        })
    };
    b3x.zY2x = function (d4h) {
        this.z4D("onpagechange", d4h)
    };
    b3x.bPc1x = function (be4i) {
        this.iP7I.offset = be4i;
        this.Zx1x()
    };
    b3x.bPe1x = function (e4i) {
        return e4i
    };
    b3x.Zx1x = function () {
        this.QB8t();
        var j4n = this.iP7I.data;
        j4n.offset = this.iP7I.offset;
        var oR9I = j4n.offset == 0;
        j4n.total = oR9I;
        this.iP7I.limit = oR9I ? this.xN2x : this.nX9O;
        j4n.limit = this.iP7I.limit;
        this.R4V.kQ8I(this.bPe1x(NEJ.X({}, this.iP7I)))
    };
    b3x.bpy5D = function (e4i) {
        if (e4i.key != this.iP7I.key || e4i.offset != this.iP7I.offset) return;
        this.Zf1x();
        var i4m = this.R4V.hh7a(e4i.key);
        if (!i4m || !i4m.length) {
            this.bqb5g();
            return
        }
        var gd6X = e4i.limit,
            be4i = e4i.offset;
        if (this.bqf5k(i4m, be4i, gd6X)) return;
        this.z4D("onbeforelistrender", {
            list: i4m,
            offset: be4i,
            parent: this.hK7D
        });
        if (!!this.HF4J) {
            this.fc6W.xlist = i4m;
            this.fc6W.beg = be4i;
            this.fc6W.end = Math.min(i4m.length, be4i + gd6X) - 1;
            this.fc6W.act = "list";
            var dK5P = a3x.bW5b(this.HF4J, this.fc6W);
            this.PY8Q(dK5P)
        } else {
            this.fc6W.limit = gd6X;
            this.fc6W.offset = be4i;
            var gU7N = a3x.zO2x(i4m, this.Rb8T, this.fc6W);
            this.PV8N(gU7N)
        }
        this.z4D("onafterlistrender", {
            list: i4m,
            offset: be4i,
            parent: this.hK7D
        })
    };
    b3x.cpP8H = function (e4i) {
        if (!this.bat1x) return;
        delete this.bat1x;
        this.Zf1x("onafterpullrefresh");
        this.gh6b()
    };
    b3x.bPR1x = function (r4v, ct5y) {
        if (!!this.iR7K) {
            var AB2x = this.iR7K.rP0x(),
                cpO8G = this.iR7K.jl7e();
            if (AB2x > ct5y || ct5y != cpO8G) {
                this.iR7K.S4W();
                delete this.iR7K;
                this.zY2x({
                    last: AB2x,
                    index: Math.min(r4v, ct5y)
                });
                return !0
            }
        } else {
            this.fC6w.index = r4v;
            this.fC6w.total = ct5y;
            this.iR7K = this.bNw0x.A4E(this.fC6w);
            this.iR7K.wl1x("onchange", this.zY2x.g4k(this));
            k4o.bb4f(this.QT8L, function (bG4K) {
                this.iR7K.g4k(bG4K)
            }, this)
        }
    };
    b3x.XZ0x = function () {
        var gn6h = +(new Date);
        return function (j4n) {
            var D4H = j4n[this.fc6W.pkey];
            if (!D4H) {
                j4n["dirty-data"] = !0;
                j4n[this.fc6W.pkey] = "dirty-" + gn6h++
            }
            return j4n
        }
    }();
    b3x.XO0x = function (j4n) {
        var D4H = j4n[this.fc6W.pkey];
        if (!!j4n["dirty-data"]) {
            delete j4n["dirty-data"];
            delete j4n[this.fc6W.pkey]
        }
        return D4H
    };
    b3x.XE0x = function () {
        var cpN8F = function (jY8Q, mq8i) {
            this.hK7D.insertAdjacentElement(jY8Q, mq8i)
        };
        return function (jY8Q, j4n) {
            var JR5W = [j4n];
            if (!!this.HF4J) {
                this.fc6W.xlist = JR5W;
                this.fc6W.beg = 0;
                this.fc6W.end = 0;
                this.fc6W.act = "add";
                this.PY8Q(a3x.bW5b(this.HF4J, this.fc6W), jY8Q)
            } else {
                this.fc6W.limit = 1;
                this.fc6W.offset = 0;
                this.fc6W.parent = cpN8F.g4k(this, jY8Q);
                var gU7N = a3x.zO2x(JR5W, this.Rb8T, this.fc6W);
                this.fc6W.parent = this.hK7D;
                this.PV8N(gU7N)
            }
        }
    }();
    b3x.QB8t = bn4r;
    b3x.Zf1x = function (T4X) {
        var d4h = {
            parent: this.hK7D
        };
        this.z4D(T4X || "onafterlistload", d4h);
        if (!d4h.stopped) {
            a3x.mN8F(this.cn5s)
        }
    };
    b3x.bqf5k = bn4r;
    b3x.Xx0x = function (bE4I, jY8Q) {
        if (k4o.fA6u(bE4I)) {
            if (!this.cn5s) this.cn5s = a3x.cZ5e("div");
            this.cn5s.innerHTML = bE4I
        } else {
            this.cn5s = bE4I
        }
        this.hK7D.insertAdjacentElement(jY8Q || "beforeEnd", this.cn5s)
    };
    b3x.yQ2x = function (T4X, lq8i, jY8Q) {
        var d4h = {
            parent: this.hK7D
        };
        this.z4D(T4X, d4h);
        if (!d4h.stopped) {
            this.Xx0x(d4h.value || lq8i, jY8Q)
        }
    };
    b3x.bqb5g = bn4r;
    b3x.PY8Q = bn4r;
    b3x.PV8N = bn4r;
    b3x.cpQ8I = function () {
        var gm6g = /^(?:delete|update)$/;
        return function (d4h) {
            var f4j = h4l.U4Y(d4h, "d:action");
            if (!f4j) return;
            var W4a = a3x.u4y(f4j, "action");
            if (!gm6g.test(W4a)) return;
            var D4H = a3x.u4y(f4j, "id");
            if (!D4H) return;
            var p4t = this.R4V.eu6o(D4H);
            if (!p4t) return;
            h4l.bf4j(d4h);
            this.z4D("on" + W4a, {
                data: p4t,
                id: p4t[this.fc6W.pkey],
                body: a3x.B4F(this.bNC1x(D4H))
            })
        }
    }();
    b3x.ZX1x = bn4r;
    b3x.Zu1x = function (d4h) {
        var j4n = d4h.data || {},
            e4i = {
                data: j4n,
                key: this.iP7I.key,
                id: j4n[this.fc6W.pkey]
            };
        this.z4D("onbeforedelete", e4i);
        this.R4V.KC5H(e4i)
    };
    b3x.ZP1x = bn4r;
    b3x.Zn1x = function (d4h) {
        var j4n = d4h.data || {},
            e4i = {
                data: j4n,
                key: this.iP7I.key
            };
        this.z4D("onbeforeupdate", e4i);
        this.R4V.ZJ1x(e4i)
    };
    b3x.bOu1x = function (d4h) {
        this.Py7r(d4h, "onafterupdate");
        if (d4h.stopped) return;
        var D4H = d4h.data[this.fc6W.pkey];
        if (!!this.fz6t) {
            var p4t = a3x.bDr8j(D4H);
            if (!!p4t) p4t.gh6b(d4h.data)
        } else {
            var f4j = a3x.B4F(D4H + "" + a3x.JC5H());
            if (!f4j) return;
            var i4m = this.R4V.hh7a(d4h.key),
                r4v = k4o.dd5i(i4m, d4h.data);
            if (r4v < 0) return;
            this.fc6W.list = i4m;
            this.fc6W.beg = r4v;
            this.fc6W.end = r4v;
            this.fc6W.act = "update";
            var dK5P = a3x.bW5b(this.HF4J, this.fc6W);
            f4j.insertAdjacentHTML("afterEnd", dK5P);
            a3x.cB5G(f4j)
        }
    };
    b3x.Py7r = function (d4h, T4X) {
        var p4t = d4h.data;
        if (!p4t || p4t[this.fc6W.pkey] == null) {
            this.z4D("onerror", d4h);
            d4h.stopped = !0
        }
        if (!d4h.stopped) {
            this.z4D(T4X, d4h)
        }
    };
    b3x.bqh5m = bn4r;
    b3x.bqi5n = bn4r;
    b3x.bpA5F = function (d4h) {
        if (d4h.key != this.iP7I.key) return;
        switch (d4h.action) {
            case "add":
                this.ZX1x(d4h);
                break;
            case "delete":
                this.ZP1x(d4h);
                break;
            case "update":
                this.bOu1x(d4h);
                break;
            case "refresh":
                this.gh6b();
                break;
            case "unshift":
                this.bqi5n(d4h.offset, d4h.limit);
                break;
            case "append":
                this.bqh5m(d4h.offset, d4h.limit);
                break
        }
    };
    b3x.oH9y = function (p4t) {
        this.Zn1x({
            data: p4t
        })
    };
    b3x.lX8P = function (p4t) {
        this.Zu1x({
            data: p4t
        })
    };
    b3x.rS0x = function (p4t) {
        this.R4V.iY7R({
            data: p4t,
            key: this.iP7I.key
        })
    };
    b3x.rV0x = function () {
        return this.R4V
    };
    b3x.bqk5p = function (j4n) {
        this.XE0x("afterBegin", this.XZ0x(j4n));
        return this.XO0x(j4n)
    };
    b3x.bQY2x = function (j4n) {
        this.XE0x("beforeEnd", this.XZ0x(j4n));
        return this.XO0x(j4n)
    };
    b3x.gh6b = function () {
        this.Rd8V();
        this.bpR5W()
    };
    b3x.czz0x = function () {
        this.R4V.tQ0x(this.iP7I.key);
        this.gh6b()
    };
    b3x.bfL2x = function () {
        if (!!this.bat1x) return;
        this.bat1x = !0;
        this.yQ2x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.R4V.bfL2x({
            key: this.iP7I.key,
            data: this.iP7I.data
        })
    };
    b3x.jl7e = function () {
        return this.R4V.jl7e(this.iP7I.key)
    };
    b3x.bRb2x = function () {
        return this.iR7K
    };
    b3x.ZZ1x = function () {
        return this.R4V.ZZ1x(this.iP7I.key)
    };
    b3x.cpL8D = function () {
        return this.fz6t
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        fo6i = NEJ.R,
        k4o = c4g("nej.u"),
        a3x = c4g("nej.e"),
        N4R = c4g("nej.ut"),
        b3x, J4N;
    if (!!N4R.jq7j) return;
    N4R.jq7j = NEJ.C();
    b3x = N4R.jq7j.O4S(N4R.baJ1x);
    J4N = N4R.jq7j.cl5q;
    b3x.Ad2x = function (be4i, bm4q) {
        return J4N.Ad2x.call(this, this.xN2x, be4i, this.nX9O, bm4q)
    };
    b3x.bqo5t = function (r4v) {
        var be4i = 0;
        if (r4v > 1) be4i = this.xN2x + (r4v - 2) * this.nX9O;
        return be4i
    };
    b3x.zY2x = function (d4h) {
        J4N.zY2x.apply(this, arguments);
        if (!d4h.stopped) {
            this.bPc1x(this.bqo5t(d4h.index))
        }
    };
    b3x.QB8t = function () {
        this.Rd8V();
        this.yQ2x("onbeforelistload", "列表加载中...")
    };
    b3x.Zf1x = function () {
        J4N.Zf1x.apply(this, arguments);
        this.Rd8V()
    };
    b3x.bqf5k = function (i4m, be4i, gd6X) {
        var bv4z = this.Ad2x(be4i, i4m.length);
        if (this.bPR1x(bv4z.index, bv4z.total)) return !0;
        this.bpG5L(bv4z.total > 1 ? "" : "none")
    };
    b3x.bqb5g = function () {
        this.yQ2x("onemptylist", "没有列表数据！")
    };
    b3x.Xx0x = function (bE4I, jY8Q) {
        if (!jY8Q && k4o.fA6u(bE4I)) {
            this.hK7D.innerHTML = bE4I;
            return
        }
        J4N.Xx0x.apply(this, arguments)
    };
    b3x.PY8Q = function (dK5P) {
        this.hK7D.innerHTML = dK5P
    };
    b3x.PV8N = function (gU7N) {
        this.fz6t = gU7N
    };
    b3x.ZX1x = function (d4h) {
        this.Py7r(d4h, "onafteradd");
        if (!d4h.stopped) this.gh6b()
    };
    b3x.ZP1x = function (d4h) {
        this.Py7r(d4h, "onafterdelete");
        if (!d4h.stopped) this.gh6b()
    };
    b3x.bqh5m = function (be4i, gd6X) {
        var r4v = 1;
        if (!!this.iR7K) {
            r4v = this.iR7K.rP0x()
        }
        var jw7p = this.bqo5t(r4v),
            gp6j = jw7p + (r4v > 1 ? this.nX9O : this.xN2x);
        if (be4i >= gp6j && !!this.iR7K) {
            var bv4z = this.Ad2x(0, this.jl7e());
            this.iR7K.boO5T(bv4z.total);
            this.bpG5L(bv4z.total > 1 ? "" : "none")
        } else {
            this.gh6b()
        }
    };
    b3x.bqi5n = function (be4i, gd6X) {
        var r4v = 1;
        if (!!this.iR7K) {
            r4v = this.iR7K.rP0x()
        }
        var jw7p = this.bqo5t(r4v),
            bv4z = this.Ad2x(jw7p, this.jl7e());
        this.zY2x({
            last: r4v,
            index: bv4z.index
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        y4C = c4g("nm.w"),
        fb6V = 40,
        b3x, J4N;
    y4C.WP0x = NEJ.C();
    b3x = y4C.WP0x.O4S(H4L.cC5H);
    J4N = y4C.WP0x.cl5q;
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.Pi7b = e4i.inputer;
        this.bqq5v = e4i.tipper;
        this.bT5Y([
            [this.Pi7b, "input", this.fE6y.g4k(this)]
        ])
    };
    b3x.bz4D = function () {
        this.bF4J();
        this.Ho4s(null, null)
    };
    b3x.fE6y = function (d4h) {
        if (d4h && d4h.type == "keyup" && (d4h.keyCode != 8 || d4h.keyCode != 68)) return;
        var T4X = this.Pi7b.value,
            czA0x;
        if (l4p.OD7w(T4X) > fb6V) {
            this.Pi7b.value = l4p.AG2x(T4X, fb6V);
            this.Ho4s("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g4k(this))
        } else if (T4X.indexOf("#") >= 0 || T4X.indexOf("@") >= 0) {
            this.Ho4s("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Ho4s(null, null);
            this.z4D("onchange", {
                value: T4X
            })
        }
    };
    b3x.cpI8A = function () {
        this.fE6y()
    };
    b3x.Ho4s = function () {
        var D4H = 0;
        return function (dA5F, bRE2x) {
            if (!!D4H) window.clearTimeout(D4H);
            if (!dA5F) {
                a3x.w4A(this.bqq5v, "f-vhide");
                this.bRF2x = !1;
                return
            }
            this.bqq5v.innerHTML = '<i class="u-icn u-icn-25"></i>' + dA5F;
            a3x.v4z(this.bqq5v, "f-vhide");
            this.bRF2x = !0;
            if (k4o.gr6l(bRE2x)) D4H = window.setTimeout(function () {
                this.Ho4s(null, null);
                bRE2x()
            }.g4k(this), 1e3)
        }
    }();
    b3x.bRJ2x = function () {
        if (this.bRF2x) return !1;
        if (l4p.ju7n(this.Pi7b.value)) {
            this.Ho4s("歌单名不能为空");
            return !1
        }
        return !0
    };
    b3x.fH6B = function () {
        return this.Pi7b.value
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        x4B = c4g("nej.j"),
        n4r = c4g("nm.l"),
        y4C = c4g("nm.w"),
        bB4F = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b3x, J4N;
    n4r.VI9z = NEJ.C();
    b3x = n4r.VI9z.O4S(n4r.ee6Y);
    J4N = n4r.VI9z.cl5q;
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.bS5X = function () {
        this.cd5i();
        var i4m = a3x.F4J(this.m4q, "j-flag");
        this.VD9u = {
            inputer: i4m[0],
            tipper: i4m[1]
        };
        this.ie7X = {
            onerror: this.buX6R.g4k(this),
            onitemadd: this.buX6R.g4k(this)
        };
        this.kW8O = i4m[2];
        h4l.s4w(i4m[2], "click", this.CA3x.g4k(this));
        h4l.s4w(i4m[3], "click", this.zc2x.g4k(this));
        h4l.s4w(this.m4q, "keypress", this.bNe0x.g4k(this))
    };
    b3x.ca5f = function () {
        this.cb5g = "m-wgt-create"
    };
    b3x.bj4n = function (e4i) {
        e4i.clazz = " m-layer-w2";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "新建歌单";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bk4o(e4i);
        this.VD9u.inputer.value = e4i.name || "";
        this.tS0x = y4C.WP0x.A4E(this.VD9u);
        this.tS0x.cpI8A();
        this.R4V = q4u.hx7q.A4E(this.ie7X);
        setTimeout(function () {
            this.VD9u.inputer.focus()
        }.g4k(this), 0)
    };
    b3x.bz4D = function () {
        this.bF4J();
        if (this.tS0x) {
            this.tS0x.S4W();
            delete this.tS0x
        }
        this.sG0x(!1);
        this.VD9u.inputer.value = ""
    };
    b3x.sG0x = function (Os7l) {
        this.nQ9H = Os7l;
        if (Os7l) {
            this.kW8O.innerHTML = "<i>新建中...</i>";
            a3x.w4A(this.kW8O, "u-btn2-dis")
        } else {
            this.kW8O.innerHTML = "<i>新 建</i>";
            a3x.v4z(this.kW8O, "u-btn2-dis")
        }
    };
    b3x.CA3x = function () {
        if (this.nQ9H || !this.tS0x.bRJ2x()) return;
        var cp5u = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.tS0x.fH6B()
            },
            offset: 1
        };
        this.R4V.iY7R(cp5u);
        this.sG0x(!0)
    };
    b3x.buX6R = function (d4h) {
        var cg5l = (d4h.result || Z4d).code;
        if (!cg5l) {
            this.z4D("onsuccess", d4h.data)
        } else {
            this.z4D("onerror", d4h)
        }
        this.br4v()
    };
    b3x.zc2x = function () {
        this.br4v()
    };
    b3x.bNe0x = function (d4h) {
        if (d4h.keyCode == 13) this.CA3x()
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        x4B = c4g("nej.j"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        n4r = c4g("nm.l"),
        b3x, J4N;
    n4r.bqK5P = NEJ.C();
    b3x = n4r.bqK5P.O4S(n4r.ee6Y);
    J4N = n4r.bqK5P.cl5q;
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.bS5X = function () {
        this.cd5i();
        var i4m = a3x.F4J(this.m4q, "j-flag");
        this.ih7a = {
            limit: 301,
            parent: i4m[1],
            cache: {
                klass: q4u.hx7q,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bqP5U.g4k(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l4p.AH2x,
                escape: k4o.dQ5V
            }
        };
        this.ie7X = {
            onsuccess: this.Vf9W.g4k(this),
            onerror: this.ew6q.g4k(this)
        };
        h4l.s4w(i4m[0], "click", this.CA3x.g4k(this));
        h4l.s4w(i4m[1], "click", this.lV8N.g4k(this))
    };
    b3x.ca5f = function () {
        this.cb5g = "m-wgt-subscribe"
    };
    b3x.bj4n = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.clazz = " m-layer-w2";
        e4i.title = "添加到歌单";
        e4i.draggable = !0;
        e4i.mask = !0;
        this.bk4o(e4i);
        this.Vd9U = (e4i.tracks || []).reverse();
        this.ih7a.item.size = this.Vd9U.length;
        this.ie7X.name = e4i.name || "";
        this.bvC6w = q4u.vQ1x.A4E({
            onaddsuccess: this.yY2x.g4k(this)
        });
        this.sp0x = q4u.hx7q.A4E({
            onlistload: this.cpH8z.g4k(this)
        });
        this.sp0x.bQD2x();
        k4o.bb4f(this.Vd9U, function (p4t, r4v, i4m) {
            if (!k4o.kU8M(p4t)) {
                i4m[r4v] = this.bvC6w.eu6o(p4t) || p4t
            }
        }, this)
    };
    b3x.cpH8z = function () {
        if (this.dD5I) this.dD5I.S4W();
        this.dD5I = H4L.jq7j.A4E(this.ih7a)
    };
    b3x.CA3x = function () {
        this.br4v();
        if (this.CP3x) this.CP3x.S4W();
        this.CP3x = n4r.VI9z.A4E(this.ie7X);
        this.CP3x.L4P()
    };
    b3x.lV8N = function () {
        var cpG8y = function (f4j) {
            while (f4j && f4j != document) {
                if (f4j.tagName.toLowerCase() == "li") {
                    return f4j
                }
                f4j = f4j.parentNode
            }
        };
        return function (d4h) {
            h4l.cm5r(d4h);
            var G4K = h4l.U4Y(d4h),
                bqT5Y = cpG8y(G4K);
            if (!!bqT5Y && !a3x.bA4E(bqT5Y, "dis")) {
                this.Vf9W({
                    id: a3x.u4y(bqT5Y, "id")
                })
            }
        }
    }();
    b3x.Vf9W = function (d4h) {
        var D4H = d4h.id;
        if (!D4H || !this.Vd9U.length) return;
        this.bvC6w.iY7R({
            key: "track_playlist-" + D4H,
            data: {
                tracks: this.Vd9U,
                pid: D4H
            }
        });
        this.br4v()
    };
    b3x.yY2x = function () {
        this.z4D("onsuccess");
        n4r.X4b.L4P({
            tip: "收藏成功"
        })
    };
    b3x.ew6q = function (d4h) {
        this.br4v();
        this.z4D("onerror", d4h);
        var cK5P = "收藏失败";
        switch (d4h.code) {
            case 405:
                cK5P = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cK5P = "歌单数量超过限制";
                break;
            case 502:
                cK5P = "歌曲已经存在"
        }
        n4r.X4b.L4P({
            tip: cK5P,
            type: 2
        })
    };
    b3x.bqP5U = function () {
        this.br4v();
        n4r.X4b.L4P({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l4p.mf8X = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n4r.bqK5P.L4P(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        dm5r = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x");
    var bqU5Z, ol9c, V4Z = decodeURIComponent(location.href),
        jr7k = /.+(https?:\/\/.+\/proxy.html)/.test(V4Z) ? RegExp.$1 : "";
    if (!!jr7k) {
        x4B.vv1x("mail_proxy_url", jr7k)
    } else {
        jr7k = x4B.tp0x("mail_proxy_url") || "about:blank"
    }
    bqU5Z = a3x.Wm0x({
        src: jr7k,
        onload: function () {
            ol9c = true
        }
    });
    var bvU6O = function () {
        x4B.gV7O("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cpF8x = function () {
        if (dm5r.di5n.browser == "ie" && parseInt(dm5r.di5n.version) < 9) {
            l4p.fh6b({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l4p.Hj4n = function (t4x, D4H, W4a) {
        if (!cpF8x()) return;
        bvU6O();
        if (W4a == "stop") {
            if (!ol9c) throw "proxy not loaded";
            bvU6O();
            bqU5Z.contentWindow.location.replace(jr7k + "#" + k4o.de5j({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bqU5Z.contentWindow.location.replace(jr7k + "#" + k4o.de5j({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: t4x,
                    id: D4H,
                    s: +(new Date),
                    action: W4a
                })
            }))
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        q4u = c4g("nm.d");
    var lf8X = q4u.hO7H.A4E();
    var ox9o = q4u.vQ1x.A4E({
        onlistload: cpE8w,
        onitemload: cpD8v,
        onerror: ew6q
    });
    var CY3x = q4u.pV9M.A4E({
        onlistload: cpC8u,
        onitemload: cpA8s,
        onerror: ew6q
    });
    var bwf6Z = {};

    function vD1x(d4h) {
        var f4j = h4l.U4Y(d4h, "d:resAction"),
            W4a = a3x.u4y(f4j, "resAction");
        if (f4j && (W4a == "play" || W4a == "addto")) {
            var t4x = parseInt(a3x.u4y(f4j, "resType"));
            bwk6e({
                action: W4a,
                type: t4x,
                id: a3x.u4y(f4j, "resId"),
                from: a3x.u4y(f4j, "resFrom"),
                data: a3x.u4y(f4j, "resData"),
                order: a3x.u4y(f4j, "resOrder"),
                node: f4j
            });
            if (t4x != 13) bwl6f(f4j)
        }
    }

    function bwk6e(bR5W) {
        var W4a = bR5W.action,
            t4x = bR5W.type,
            D4H = bR5W.id,
            dZ6T = bR5W.from,
            j4n = bR5W.data,
            st0x = bR5W.order,
            e4i = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: D4H
                },
                ext: {
                    id: D4H,
                    action: W4a,
                    type: t4x,
                    from: dZ6T,
                    data: j4n,
                    node: bR5W.node
                }
            };
        if (W4a != "play" && W4a != "addto" || !t4x) return;
        if (window.GRef && GRef == "mail") {
            l4p.Hj4n(t4x, D4H, W4a);
            return
        }
        switch (t4x) {
            case 13:
                e4i.key = "track_playlist-" + D4H;
                ox9o.kQ8I(e4i);
                break;
            case 17:
                e4i.key = "program";
                e4i.id = D4H;
                CY3x.ZO1x(e4i);
                if (W4a == "play") {
                    x4B.bo4s("/api/dj/program/listen", {
                        query: {
                            id: D4H
                        }
                    })
                }
                break;
            case 18:
                e4i.key = "track";
                e4i.id = D4H;
                ox9o.ZO1x(e4i);
                break;
            case 19:
                e4i.key = "track_album-" + D4H;
                ox9o.kQ8I(e4i);
                break;
            case 24:
                e4i.key = "track_day";
                ox9o.kQ8I(e4i);
                break;
            case 2:
                e4i.key = "track_artist_top-" + D4H;
                ox9o.kQ8I(e4i);
                break;
            case 70:
                e4i.key = "program_djradio-" + D4H + "-" + st0x;
                e4i.data.radioId = D4H;
                e4i.data.asc = st0x == 2;
                CY3x.kQ8I(e4i);
                break
        }
    }

    function bwo6i(i4m) {
        var o4s = [];
        k4o.bb4f(i4m, function (p4t) {
            if (p4t.mainSong) {
                p4t.mainSong.program = p4t;
                o4s.push(p4t.mainSong);
                p4t.localupdatetime = +(new Date);
                ox9o.cwp0x(p4t.mainSong);
                p4t.mainTrackId = p4t.mainSong.id;
                delete p4t.mainSong
            } else {
                var bwq6k = ox9o.eu6o(p4t.mainTrackId);
                bwq6k && o4s.push(bwq6k)
            }
        });
        return o4s
    }

    function Ui9Z(i4m, e4i) {
        var qW0x = e4i.action == "play" && e4i.type != 17 && e4i.type != 18,
            fL6F = e4i.action == "play";
        if (!i4m.length) return;
        if (e4i.type == 19) {
            i4m = l4p.Kp5u(i4m, true, {
                play: true
            }, {
                source: "album",
                sourceid: e4i.id
            })
        } else {
            i4m = l4p.Kp5u(i4m, true, {
                play: true
            })
        }
        k4o.bb4f(i4m, function (p4t) {
            p4t.source = l4p.bjd3x({
                fid: e4i.from,
                fdata: e4i.data,
                type: e4i.type,
                rid: e4i.id
            }, p4t.id)
        });
        top.player.addTo(i4m, qW0x, fL6F);
        lf8X.Rv8n({
            rid: e4i.id,
            type: e4i.type,
            hash: l4p.Jz5E(),
            play: fL6F,
            source: e4i.from,
            sourceid: e4i.data
        })
    }

    function cpE8w(d4h) {
        var eP6J = d4h.ext || {};
        i4m = ox9o.hh7a(d4h.key);
        Ui9Z(i4m, eP6J);
        if (eP6J.type == 13 && eP6J.action == "play" && i4m && i4m.length > 0) {
            bwl6f(eP6J.node);
            x4B.bo4s("/api/playlist/update/playcount", {
                query: {
                    id: eP6J.id
                }
            })
        }
    }

    function cpD8v(d4h) {
        var i4m = [ox9o.eu6o(d4h.id)],
            bg4k = i4m[0],
            pI9z = l4p.oJ9A(bg4k),
            sb0x = bg4k.privilege || {};
        if (pI9z == 10) {
            l4p.uv1x(sb0x.fee || bg4k.fee, bg4k.id, "song", null, sb0x)
        } else if (pI9z == 100) {
            l4p.if7Y(null, null, null, true, bg4k)
        } else if (pI9z == 11) {
            l4p.bFz9q(bg4k.id, 18)
        } else {
            Ui9Z(i4m, d4h.ext)
        }
    }

    function cpC8u(d4h) {
        var i4m = bwo6i(CY3x.hh7a(d4h.key));
        Ui9Z(i4m, d4h.ext)
    }

    function cpA8s(d4h) {
        var i4m = bwo6i([CY3x.eu6o(d4h.id)]);
        Ui9Z(i4m, d4h.ext)
    }

    function ew6q() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bwl6f(f4j) {
        var t4x = a3x.u4y(f4j, "resType"),
            D4H = a3x.u4y(f4j, "resId"),
            K4O = t4x + "-" + D4H;
        if (bwf6Z[K4O]) return;
        var bwz6t = a3x.B4F("play-count"),
            brk5p = a3x.F4J(f4j.parentNode, "nb"),
            NH7A = null;
        if (bwz6t) {
            NH7A = bwz6t
        } else {
            NH7A = !!brk5p && !!brk5p[0] ? brk5p[0] : null
        }
        if (NH7A) {
            var cz5E = NH7A.innerHTML;
            if (/^\d+$/.test(cz5E)) {
                NH7A.innerText = +cz5E + 1
            }
            bwf6Z[K4O] = true
        }
    }
    l4p.cpz8r = function (f4j) {
        h4l.s4w(f4j || document.body, "click", vD1x.g4k(this))
    };
    l4p.cpy8q = function (W4a, t4x, D4H) {
        bwk6e({
            action: W4a,
            type: t4x,
            id: D4H
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        b3x, J4N;
    q4u.fg6a({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function (o4s, e4i) {
                this.cpx8p(o4s, e4i)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function (o4s, e4i) {
                this.z4D("onshareall", e4i.result)
            },
            onerror: function (o4s, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function (o4s, e4i) {
                e4i.options.picUrl = o4s.picUrl;
                this.bwK7D(e4i.options, e4i.result)
            },
            onerror: function (o4s, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function (P4T, e4i) {
                this.pa9R("vid_info-" + e4i.data.nosKey, P4T);
                return P4T
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function (e4i) {},
            format: function (o4s, e4i) {
                e4i.data = e4i.data2;
                this.co5t("share-all", e4i)
            },
            onerror: "onshareerror"
        }
    });
    q4u.brs5x = NEJ.C();
    b3x = q4u.brs5x.O4S(q4u.hs7l);
    b3x.cpw8o = function () {
        var tj0x = function (P4T, e4i) {
            e4i.times++;
            if (e4i.times > 10) {
                this.z4D("onvinfoerror", e4i.key, P4T)
            } else {
                setTimeout(eF6z.g4k(this, e4i), e4i.times * 1e3)
            }
        };
        var yC2x = function (P4T, e4i) {
            this.z4D("onvinfo", e4i.key, P4T)
        };
        var eF6z = function (e4i) {
            var V4Z = e4i.url;
            x4B.bo4s(V4Z + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: yC2x.eo6i(this, e4i),
                onerror: tj0x.eo6i(this, e4i)
            })
        };
        return function (e4i) {
            e4i.times = 0;
            eF6z.call(this, e4i)
        }
    }();
    b3x.czB0x = function () {
        var Ns6m;
        var tj0x = function (P4T, e4i) {
            if (P4T.code > 0) {
                clearInterval(this.Dm3x);
                this.z4D("onviderror", e4i.data.nosKey)
            }
        };
        var yC2x = function (K4O, P4T) {
            if (P4T.vid && P4T.covers) {
                clearInterval(this.Dm3x);
                this.z4D("onvid", K4O, P4T)
            }
        };
        var eF6z = function (e4i) {
            if (+(new Date) - Ns6m > 60 * 60 * 1e3) {
                clearInterval(this.Dm3x);
                this.z4D("onviderror", e4i.data.nosKey);
                return
            }
            e4i.onload = yC2x.g4k(this, e4i.data.nosKey);
            e4i.onerror = tj0x.g4k(this);
            this.co5t("vid-get", e4i)
        };
        return function (e4i) {
            if (!e4i || !e4i.data) return;
            Ns6m = +(new Date);
            this.Dm3x = clearInterval(this.Dm3x);
            this.Dm3x = setInterval(eF6z.g4k(this, e4i), 1e4);
            eF6z.apply(this, arguments)
        }
    }();
    b3x.cpu8m = function () {
        this.Dm3x = clearInterval(this.Dm3x)
    };
    b3x.cpx8p = function (o4s, ns9j) {
        if (o4s.event && ns9j.snsTypes) {
            if (ns9j.pics) {
                var bxk7d = [];
                for (var i = 0, len = ns9j.pics.length; i < len; i++) {
                    bxk7d[i] = ns9j.pics[i].originId
                }
                this.co5t("share_img_compound", {
                    data: {
                        picIds: bxk7d.join(",")
                    },
                    options: ns9j,
                    result: o4s
                })
            } else {
                ns9j.picUrl = ns9j.picUrl;
                this.bwK7D(ns9j, o4s)
            }
        } else {
            this.z4D("onshareall", o4s)
        }
        var uq1x = q4u.hO7H.A4E();
        uq1x.fu6o(ns9j.isPub ? "pubevent" : "shareevent", {
            id: o4s.id
        })
    };
    b3x.bwK7D = function (ns9j, o4s) {
        var cp5u = {};
        cp5u.eventid = o4s.event.id;
        cp5u.eventtype = o4s.event.type;
        ns9j.picUrl && (cp5u.picUrl = ns9j.picUrl);
        cp5u.snsTypes = ns9j.snsTypes;
        cp5u.msg = ns9j.data.msg || "";
        cp5u.type = ns9j.data.type;
        ns9j.data.id && (cp5u.id = ns9j.data.id);
        this.co5t("share-sns", {
            data: cp5u,
            result: o4s
        })
    };
    b3x.cpt8l = function (e4i) {
        var j4n = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k4o.ny9p(5)
        };
        j4n = NEJ.EX(j4n, e4i);
        if (!(j4n.id > 0)) {
            delete j4n.id;
            j4n.type = "noresource"
        }
        if (!j4n.threadId) {
            delete j4n.threadId
        }
        if (!j4n.actId) {
            delete j4n.actId
        }
        if (!j4n.pics) {
            delete j4n.pics
        } else {
            j4n.pics = JSON.stringify(j4n.pics)
        }
        this.co5t("share-all", {
            data: j4n,
            snsTypes: e4i.snsTypes,
            picUrl: e4i.picUrl,
            pics: e4i.pics,
            isPub: e4i.isPub
        })
    };
    b3x.cpr8j = function (e4i) {
        this.co5t("share-private", e4i)
    };
    b3x.cpq8i = function (e4i) {
        this.co5t("video-submit", e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b3x, J4N;
    var cpp8h = {
        40: !0
    };
    q4u.fg6a({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function (e4i) {
                e4i.data.getcounts = true;
                e4i.data.pagesize = e4i.data.limit;
                if (e4i.data.offset == 0) {
                    e4i.data.lasttime = -1
                }
                delete e4i.data.offset
            },
            format: function (P4T, e4i) {
                P4T.event = l4p.YN0x(P4T.event, function (p4t, r4v) {
                    return !cpp8h[p4t.type]
                });
                this.cpn8f(P4T.event);
                e4i.data.lasttime = P4T.lasttime;
                if (P4T.event.length) {
                    P4T.event.length = e4i.limit
                }
                return {
                    list: P4T.event,
                    total: P4T.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function (P4T, e4i) {
                return {
                    list: P4T.events,
                    total: P4T.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function (e4i) {
                e4i.data.pagesize = 20
            },
            format: function (P4T, e4i) {
                return P4T.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function (e4i) {
                e4i.data.time = -1;
                e4i.data.getcounts = true
            },
            format: function (P4T, e4i) {
                P4T.events.length = e4i.limit;
                return {
                    list: P4T.events,
                    total: P4T.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function (o4s, e4i) {
                o4s.conf = e4i.conf;
                return o4s
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function (e4i, bd4h) {
                if (e4i.like) {
                    if (e4i.comment) {
                        bd4h.url = "/api/v1/comment/like"
                    } else {
                        bd4h.url = "/api/resource/like"
                    }
                    bd4h.onload = "oneventlike";
                    bd4h.onerror = "oneventlikeerr"
                } else {
                    if (e4i.comment) {
                        bd4h.url = "/api/v1/comment/unlike"
                    } else {
                        bd4h.url = "/api/resource/unlike"
                    }
                    bd4h.onload = "oneventunlike";
                    bd4h.onerror = "oneventunlikeerr"
                }
            },
            format: function (o4s, e4i) {
                o4s.eid = e4i.eid;
                o4s.origin = e4i.origin;
                o4s.ext = e4i.ext;
                return o4s
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function (o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function (e4i, bd4h) {
                if (e4i.data.type == "nointer") {
                    bd4h.url = "/api/event/rcmd/reject"
                } else if (e4i.data.transcoding) {
                    bd4h.url = "/api/event/video/transcoding/delete"
                } else {
                    bd4h.url = "/api/event/delete"
                }
            },
            format: function (o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function (o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function (e4i) {
                e4i.data.lasttime = e4i.data.lasttime || -1;
                e4i.data.pagesize = e4i.data.limit;
                e4i.data.getcounts = true;
                delete e4i.data.offset
            },
            format: function (P4T, e4i) {
                e4i.data.lasttime = P4T.lasttime;
                var i4m = P4T.events;
                if (P4T.more) i4m = this.brR5W(i4m, e4i.data.pagesize);
                return {
                    list: i4m,
                    total: P4T.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q4u.yA2x = NEJ.C();
    b3x = q4u.yA2x.O4S(q4u.hs7l);
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.brV5a = function (t4x, cH5M) {
        return t4x + "-" + cH5M
    };
    b3x.czE0x = function (e4i) {
        this.co5t("ievent-get", e4i)
    };
    b3x.czF0x = function (e4i) {
        this.co5t("ievent-new-get", e4i)
    };
    b3x.czG0x = function (e4i) {
        this.co5t("ievent-user-get", e4i)
    };
    b3x.czH0x = function (t4x, cH5M) {
        return this.rl0x(this.brV5a(t4x, cH5M))
    };
    b3x.czI0x = function (GY4c, e4i) {
        if (!GY4c || !GY4c.length) return;
        e4i = e4i || {};
        var bu4y = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, Cq3x = [], bxQ7J = [], j4n; i < GY4c.length; ++i) {
            j4n = GY4c[i];
            j4n = this.rl0x(this.brV5a(j4n.type, j4n.id));
            if (!j4n) {
                Cq3x.push(GY4c[i].id);
                bxQ7J.push(bu4y[GY4c[i].type] || 0)
            }
        }
        if (!Cq3x.length) {
            this.z4D("oneventresload", e4i.conf);
            return
        }
        e4i.data = {
            ids: JSON.stringify(Cq3x),
            types: JSON.stringify(bxQ7J)
        };
        e4i.onload = this.cpg8Y.g4k(this);
        this.co5t("ievent-res-get", e4i)
    };
    b3x.cpg8Y = function (o4s) {
        if (o4s.code != 200) {
            this.z4D("oneventreserror", o4s.code);
            return
        }
        var bu4y = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i4m = o4s.results; i < i4m.length; ++i) {
            this.pa9R(this.brV5a(bu4y[i4m[i].type], i4m[i].id), i4m[i])
        }
        this.z4D("oneventresload", o4s.conf)
    };
    b3x.bxS7L = function (j4n) {
        var K4O = "event-list";
        this.bfH2x(K4O, j4n);
        this.z4D("onitemadd", {
            key: K4O,
            action: "add",
            data: j4n,
            flag: -1
        })
    };
    b3x.vJ1x = function (e4i) {
        this.co5t("ievent-like", e4i)
    };
    b3x.lX8P = function (e4i) {
        this.co5t("ievent-delete", e4i)
    };
    b3x.brR5W = function (i4m, gd6X) {
        for (var i = i4m.length; i < gd6X; i++) i4m.push(null);
        return i4m
    };
    b3x.cpn8f = function (i4m) {
        var o4s = [];
        if (!i4m || !i4m.length) return;
        k4o.bb4f(i4m, function (d4h) {
            d4h.biData = this.bxT7M(d4h)
        }, this)
    };
    b3x.bxT7M = function () {
        var XU0x = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            cpf8X = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d4h) {
            var P4T = {
                id: d4h.id,
                sourceid: d4h.user.userId,
                alg: d4h.rcmdInfo ? d4h.rcmdInfo.alg : null,
                contentType: XU0x[d4h.type] || (k4o.dd5i(cpf8X, d4h.type) != -1 ? "user_event" : "other")
            };
            return P4T
        }
    }();
    b3x.DC3x = function (cpd8V, d4h) {
        var P4T = this.bxT7M(d4h);
        P4T.actionType = cpd8V;
        if (window.log) log("eventclick", P4T)
    };
    b3x.czL0x = function (e4i) {
        this.co5t("event_latest-list", e4i)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
            return a + b & 4294967295
        },
        hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "",
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.qY0x += contents;
        this.bm4q += contents.length;
        var length = this.qY0x.length,
            i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dV6P, md5blk(this.qY0x.substring(i - 64, i)))
        }
        this.qY0x = this.qY0x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.qY0x,
            length = buff.length,
            i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.oi9Z(tail, length);
        ret = hex(this.dV6P);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.qY0x = "";
        this.bm4q = 0;
        this.dV6P = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {
            buff: this.qY0x,
            length: this.bm4q,
            hash: this.dV6P
        }
    };
    SparkMD5.prototype.setState = function (state) {
        this.qY0x = state.buff;
        this.bm4q = state.length;
        this.dV6P = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dV6P;
        delete this.qY0x;
        delete this.bm4q
    };
    SparkMD5.prototype.oi9Z = function (tail, length) {
        var i = length,
            tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dV6P, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bm4q * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dV6P, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.qY0x.buffer, arr, true),
            length = buff.length,
            i;
        this.bm4q += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dV6P, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.qY0x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.qY0x,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.oi9Z(tail, length);
        ret = hex(this.dV6P);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.qY0x = new Uint8Array(0);
        this.bm4q = 0;
        this.dV6P = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.oi9Z = SparkMD5.prototype.oi9Z;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        ec6W = c4g("nej.g"),
        k4o = c4g("nej.u"),
        fy6s = c4g("nej.n"),
        H4L = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        iV7O = c4g("nm.x.nos"),
        y4C = c4g("nm.w");
    var cpa8S = 1024 * 256,
        coZ8R = 1024 * 1024 * 2,
        qk9b = {
            TOKEN_ERROR: -100,
            DNS_ERROR: -101
        },
        byw7p = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bn4r,
        ql9c = {
            MD5_DONE: .2,
            TOKEN_GET: .22,
            DNS_GET: .24,
            UPLOADED: 1
        },
        jc7V = {
            AUDIO: "audio",
            IMAGE: "image",
            TXT: "txt",
            RAR: "rar",
            OTHER: "other",
            VIDEO: "video"
        };
    var nH9y = {};
    var uq1x = q4u.hO7H.A4E();
    iV7O.czN0x = function () {
        return jc7V
    };
    var coW8O = function () {
        return k4o.ny9p(6) + +(new Date)
    };
    var GV4Z = function (ic7V, e4i) {
        if (!nH9y[e4i.taskId]) {
            return
        }(e4i.onuploading || bn4r).call(this, ic7V)
    };
    var bst5y = function (Q4U) {
        var coT8L = Q4U.md5,
            cO5T = Q4U.file,
            coS8K = coT8L + cO5T.size;
        return "nos_file_hash_" + coS8K
    };
    var coR8J = function (Q4U) {
        var K4O = bst5y(Q4U),
            j4n = x4B.bNJ1x(K4O, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        return j4n
    };
    var coQ8I = function (Q4U, e4i) {
        if (!Q4U.md5) {
            return
        }
        var K4O = bst5y(Q4U),
            j4n = x4B.bNJ1x(K4O, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        NEJ.X(j4n, e4i);
        x4B.vv1x(K4O, JSON.stringify(j4n))
    };
    var coN8F = function (Q4U) {
        var K4O = bst5y(Q4U);
        x4B.SH9y(K4O)
    };
    var coM8E = function (Q4U, fw6q) {
        var V4Z = Q4U.urls[Math.min(Q4U.urlIndex, Q4U.urls.length - 1)],
            cO5T = Q4U.file,
            kL8D = Q4U.bucket,
            md8V = Q4U.objectKey,
            eA6u = Q4U.token,
            bN4R = Q4U.context,
            op9g = {},
            LX6R = byw7p.call(cO5T, Q4U.beg, Q4U.end),
            bx4B = {
                offset: Q4U.beg,
                complete: Q4U.lastChunk || false,
                version: "1.0"
            };
        if (bN4R) {
            bx4B.context = bN4R
        }
        op9g["x-nos-token"] = eA6u;
        op9g[ec6W.wD1x] = cO5T.type;
        Q4U.reqId = x4B.bo4s(V4Z + "/" + kL8D + "/" + md8V, {
            type: "json",
            method: "POST",
            headers: op9g,
            query: bx4B,
            data: LX6R,
            onload: fw6q.onload,
            onerror: fw6q.onerror
        })
    };
    var coL8D = function (o4s, Q4U, e4i) {
        o4s = {
            code: 200,
            fileName: e4i.file.name,
            size: e4i.file.size,
            type: e4i.file.type,
            bucket: Q4U.bucket,
            docId: Q4U.docId,
            objectKey: Q4U.objectKey,
            url: "//nos.netease.com/" + Q4U.bucket + "/" + Q4U.objectKey
        };
        coN8F(Q4U);
        if (!nH9y[e4i.taskId]) {
            return
        }
        delete nH9y[e4i.taskId];
        uq1x.fu6o("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(o4s)
        });
        (e4i.onsuccess || bn4r).call(this, o4s)
    };
    var coK8C = function (o4s, e4i) {
        (e4i.onerror || bn4r).call(this, o4s)
    };
    var coJ8B = function (o4s, Q4U, e4i) {
        Q4U.context = o4s.context;
        Q4U.beg = o4s.offset;
        var ic7V = Q4U.beg / Q4U.file.size;
        coQ8I(Q4U, {
            bucket: Q4U.bucket,
            objectKey: Q4U.objectKey,
            token: Q4U.token,
            context: Q4U.context,
            beg: Q4U.beg,
            updateTime: +(new Date)
        });
        ic7V = ql9c.DNS_GET + (ql9c.UPLOADED - ql9c.DNS_GET) * ic7V;
        GV4Z(ic7V, e4i);
        if (Q4U.lastChunk) {
            coL8D(o4s, Q4U, e4i)
        } else {
            WI0x(Q4U, e4i)
        }
    };
    var coI8A = function (o4s, Q4U, e4i) {
        uq1x.fu6o("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o4s.data,
            body: o4s.extData,
            ext: JSON.stringify(Q4U),
            timging: +(new Date) - Q4U.chuckUploadStartTime
        });
        if (Q4U.urlIndex < Math.max(Q4U.urls.length - 1, 5)) {
            Q4U.urlIndex++;
            WI0x(Q4U, e4i)
        } else {
            coK8C(o4s, e4i)
        }
    };
    var WI0x = function (Q4U, e4i) {
        if (!Q4U || Q4U.step == -1) {
            return
        }
        Q4U.end = Q4U.beg + cpa8S;
        if (Q4U.end >= Q4U.file.size) {
            Q4U.end = Q4U.file.size;
            Q4U.lastChunk = true
        }
        Q4U.chuckUploadStartTime = +(new Date);
        coM8E(Q4U, {
            onload: coJ8B.eo6i(this, Q4U, e4i),
            onerror: coI8A.eo6i(this, Q4U, e4i)
        })
    };
    var coH8z = function (o4s, Q4U, e4i) {
        Q4U.beg = o4s.offset;
        var ic7V = Q4U.beg / Q4U.file.size;
        ic7V = ql9c.DNS_GET + (ql9c.UPLOADED - ql9c.DNS_GET) * ic7V;
        GV4Z(ic7V, e4i);
        WI0x(Q4U, e4i)
    };
    var coF8x = function (o4s, Q4U, e4i) {
        Q4U.beg = 0;
        delete Q4U.context;
        bsJ6D(Q4U, e4i)
    };
    var bzj7c = function (Lt6n, Q4U, e4i) {
        Q4U.lastChunk = false;
        Q4U.urls = Lt6n;
        Q4U.urlIndex = 0;
        GV4Z(ql9c.DNS_GET, e4i);
        if (Q4U.fromExist) {
            delete Q4U.fromExist;
            var V4Z = Q4U.urls[Math.min(Q4U.urlIndex, Q4U.urls.length - 1)],
                kL8D = Q4U.bucket,
                md8V = Q4U.objectKey,
                eA6u = Q4U.token,
                bN4R = Q4U.context,
                op9g = {},
                bx4B = {
                    context: bN4R,
                    version: "1.0"
                };
            op9g["x-nos-token"] = eA6u;
            Q4U.reqId = x4B.bo4s(V4Z + "/" + kL8D + "/" + md8V + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: op9g,
                query: bx4B,
                onload: coH8z.eo6i(this, Q4U, e4i),
                onerror: coF8x.eo6i(this, Q4U, e4i)
            })
        } else {
            Q4U.beg = 0;
            WI0x(Q4U, e4i)
        }
    };
    var coE8w = function (o4s, Q4U, e4i) {
        o4s.code = qk9b.DNS_ERROR;
        (e4i.onerror || bn4r).call(this, o4s)
    };
    var bzq7j = function (j4n, e4i) {
        var o4s = j4n.result || {},
            kL8D = o4s.bucket,
            md8V = o4s.objectKey,
            eA6u = o4s.token,
            Q4U = nH9y[e4i.taskId];
        if (!kL8D || !md8V || !eA6u || !Q4U) {
            o4s.code = qk9b.TOKEN_ERROR;
            (e4i.onerror || bn4r).call(this, o4s);
            return
        }
        Q4U.bucket = kL8D;
        Q4U.objectKey = md8V;
        Q4U.docId = o4s.docId;
        Q4U.token = eA6u;
        GV4Z(ql9c.TOKEN_GET, e4i);
        if (location.protocol == "https:") {
            bzj7c(["//nosup-hz1.127.net"], Q4U, e4i)
        } else {
            Q4U.reqId = iV7O.coD8v({
                bucket: kL8D,
                onload: bzj7c.eo6i(this, Q4U, e4i),
                onerror: coE8w.eo6i(this, Q4U, e4i)
            })
        }
        Q4U.step = 1
    };
    var coA8s = function (o4s, e4i) {
        o4s.code = qk9b.TOKEN_ERROR;
        (e4i.onerror || bn4r).call(this, o4s)
    };
    var bsJ6D = function (Q4U, e4i) {
        var cO5T = e4i.file,
            ff6Z = cO5T.name || "",
            eP6J = ff6Z.split(".").pop();
        iV7O.Ud9U(NEJ.X({
            filename: ff6Z,
            ext: eP6J,
            onload: bzq7j.eo6i(this, e4i),
            onerror: coA8s.eo6i(this, e4i)
        }, e4i, function (p4t) {
            return k4o.gr6l(p4t) || k4o.kU8M(p4t)
        }))
    };
    var coz8r = function (Q4U, e4i) {
        if (!Q4U || Q4U.step == -1) {
            return
        }
        Q4U.md5 = Q4U.spark.end();
        var GR4V = coR8J(Q4U) || {},
            kL8D = GR4V.bucket,
            md8V = GR4V.objectKey,
            eA6u = GR4V.token;
        if (!kL8D || !md8V || !eA6u) {
            bsJ6D(Q4U, e4i)
        } else {
            Q4U.context = GR4V.context;
            Q4U.beg = GR4V.beg;
            Q4U.fromExist = true;
            bzq7j({
                result: GR4V
            }, e4i)
        }
    };
    var cox8p = function (Eq3x, Q4U, e4i) {
        if (!Q4U || Q4U.step == -1) {
            return
        }
        Q4U.beg = Q4U.end;
        var ic7V = Q4U.beg / Q4U.file.size;
        ic7V = 0 + ql9c.MD5_DONE * ic7V;
        GV4Z(ic7V, e4i);
        Q4U.spark.append(Eq3x.result);
        if (Q4U.lastChunk) {
            coz8r(Q4U, e4i)
        } else {
            bzG7z(Q4U, e4i)
        }
    };
    var cow8o = function (o4s, Q4U, e4i) {
        Q4U.md5 = "";
        bsJ6D(Q4U, e4i)
    };
    var bzG7z = function (Q4U, e4i) {
        if (!Q4U || Q4U.step == -1) {
            return
        }
        Q4U.end = Q4U.beg + coZ8R;
        if (Q4U.end >= Q4U.file.size) {
            Q4U.end = Q4U.file.size;
            Q4U.lastChunk = true
        }
        var Eq3x = new FileReader;
        Eq3x.onload = cox8p.g4k(this, Eq3x, Q4U, e4i);
        Eq3x.onerror = cow8o.g4k(this, Eq3x, Q4U, e4i);
        Eq3x.readAsArrayBuffer(byw7p.call(Q4U.file, Q4U.beg, Q4U.end))
    };
    iV7O.gD7w = function (e4i) {
        var cO5T = e4i.file,
            ff6Z = cO5T.name || "",
            eP6J = ff6Z.split(".").pop(),
            Es3x = coW8O();
        e4i.taskId = Es3x;
        nH9y[Es3x] = {
            step: 0
        };
        GV4Z(0, e4i);
        var Q4U = nH9y[Es3x];
        Q4U.id = Es3x;
        Q4U.file = cO5T;
        Q4U.beg = 0;
        Q4U.lastChunk = false;
        Q4U.spark = new SparkMD5.ArrayBuffer;
        var cor8j = e4i.onerror || bn4r;
        e4i.onerror = function () {
            if (!nH9y[Es3x]) {
                return
            }
            delete nH9y[Es3x];
            cor8j.apply(this, arguments)
        };
        uq1x.fu6o("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bzG7z(Q4U, e4i);
        return Es3x
    };
    iV7O.jD7w = function (D4H) {
        var Q4U = nH9y[D4H];
        if (Q4U) {
            if (Q4U.step == 0) {
                delete nH9y[D4H]
            } else {
                Q4U.step = -1;
                if (Q4U.reqId) {
                    x4B.jD7w(Q4U.reqId)
                }
                delete nH9y[D4H]
            }
        }
    };
    iV7O.Ud9U = function () {
        var yh2x = function (o4s, e4i) {
            (e4i.onload || bn4r).call(this, o4s)
        };
        var zW2x = function (o4s, e4i) {
            (e4i.onerror || bn4r).call(this, o4s)
        };
        var bzP7I = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function (e4i) {
            var bbN2x = e4i.returnBody || bzP7I;
            if (k4o.kU8M(bbN2x)) {
                try {
                    JSON.stringify(bbN2x)
                } catch (e) {
                    bbN2x = bzP7I
                }
            }
            return x4B.bo4s("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e4i.filename || "",
                    ext: e4i.ext || "",
                    type: e4i.type || jc7V.OTHER,
                    bucket: e4i.bucket || "",
                    local: e4i.local || false,
                    nos_product: e4i.nosProduct || 0,
                    return_body: bbN2x
                },
                onload: yh2x.eo6i(this, e4i),
                onerror: zW2x.eo6i(this, e4i)
            })
        }
    }();
    iV7O.coD8v = function () {
        var coq8i = "//wanproxy.127.net/lbs";
        var yh2x = function (o4s, e4i) {
            if (o4s.lbs) {}
            var Lt6n = o4s.upload;
            if (!Lt6n || !Lt6n.length) {
                zW2x(o4s, e4i)
            }(e4i.onload || bn4r).call(this, Lt6n)
        };
        var zW2x = function (o4s, e4i) {
            (e4i.onerror || bn4r).call(this, o4s)
        };
        return function (e4i) {
            var kL8D = e4i.bucket;
            return x4B.bo4s(coq8i, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: kL8D
                },
                onload: yh2x.eo6i(this, e4i),
                onerror: zW2x.eo6i(this, e4i)
            })
        }
    }();
    iV7O.bbw1x = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        bY5d = c4g("nej.ut"),
        bB4F = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        iV7O = c4g("nm.x.nos"),
        E4I = c4g("nm.m"),
        n4r = c4g("nm.l"),
        y4C = c4g("nm.w"),
        b3x, J4N;
    var gv7o = a3x.iz7s('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    y4C.bzW7P = NEJ.C();
    b3x = y4C.bzW7P.O4S(bB4F.ef6Z);
    b3x.ca5f = function () {
        this.cb5g = gv7o
    };
    b3x.bS5X = function () {
        this.cd5i();
        this.by4C = this.m4q;
        this.hf7Y = a3x.F4J(this.m4q, "j-file")[0];
        h4l.s4w(this.hf7Y, "change", this.rh0x.g4k(this))
    };
    b3x.bj4n = function (e4i) {
        e4i = e4i || {};
        this.bk4o(e4i);
        this.hf7Y.accept = e4i.accept || "*";
        this.wq1x = e4i
    };
    b3x.bbk1x = function () {
        return a3x.ld8V(this.hf7Y)
    };
    b3x.rh0x = function (d4h) {
        if (this.hf7Y.value == "") return;
        var ka8S = this.hf7Y.value.split("\\"),
            ff6Z = ka8S.length > 0 ? ka8S[ka8S.length - 1] : ka8S[0],
            oD9u = (this.hf7Y.files || [{}])[0];
        var gj6d = {
            files: this.hf7Y.files,
            filename: ff6Z,
            size: oD9u.size,
            cancelUpload: false
        };
        this.z4D("onchange", gj6d);
        if (gj6d.cancelUpload) {
            this.hf7Y.value = "";
            return
        }
        if (gj6d.stopped) {
            return
        }
        this.Sk8c()
    };
    b3x.Sk8c = function () {
        if (this.hf7Y.value == "") return;
        var ka8S = this.hf7Y.value.split("\\"),
            ff6Z = ka8S.length > 0 ? ka8S[ka8S.length - 1] : ka8S[0],
            eP6J = (ff6Z.split(".") || []).pop(),
            oD9u = (this.hf7Y.files || [{}])[0],
            EG4K = (oD9u.type || "").split("/").shift();
        if (oD9u.size > 100 * 1024 * 1024) {
            return this.mE8w("onerror", {
                code: -200
            })
        }
        this.z4D("onuploading", 0);
        this.bAB7u = iV7O.Ud9U(NEJ.X({
            onload: this.RN8F.eo6i(this, ff6Z),
            onerror: this.mE8w.g4k(this)
        }, this.wq1x, function (p4t) {
            return k4o.gr6l(p4t) || k4o.kU8M(p4t)
        }))
    };
    b3x.RN8F = function (bQ4U, ff6Z) {
        var o4s = bQ4U.result || {},
            kL8D = o4s.bucket,
            md8V = o4s.objectKey,
            eA6u = o4s.token;
        if (!kL8D || !md8V || !eA6u) {
            bQ4U.code = -100;
            this.mE8w.call(this, bQ4U);
            return
        }
        var oD9u = (this.hf7Y.files || [{}])[0];
        var jb7U = a3x.da5f(this.by4C);
        jb7U[0].value = md8V;
        jb7U[1].value = eA6u;
        if (oD9u.type && oD9u.type.indexOf("audio") == 0) {
            jb7U[3].value = "audio/mpeg"
        } else {
            jb7U[3].value = oD9u.type || ""
        }
        this.by4C.action = "//nos.netease.com/" + kL8D;
        this.EK4O = o4s;
        this.pP9G = ff6Z;
        this.z4D("onuploading", .2);
        this.gD7w()
    };
    b3x.gD7w = function () {
        this.bAB7u = x4B.gD7w(this.by4C, {
            type: "json",
            onload: this.tl0x.g4k(this),
            onerror: this.mE8w.g4k(this),
            onuploading: this.bai1x.g4k(this)
        })
    };
    b3x.jD7w = function () {
        x4B.jD7w(this.bAB7u);
        this.by4C.reset()
    };
    b3x.tl0x = function (bQ4U) {
        var eA6u = this.EK4O,
            ff6Z = this.pP9G,
            oD9u = (this.hf7Y.files || [{}])[0],
            lq8i = {
                code: 200,
                fileName: ff6Z,
                size: oD9u.size,
                bucket: eA6u.bucket,
                docId: eA6u.docId,
                objectKey: eA6u.objectKey,
                url: "//nos.netease.com/" + eA6u.bucket + "/" + eA6u.objectKey
            };
        if (!bQ4U) {
            bQ4U = lq8i
        }
        if (!bQ4U.code || bQ4U.code == 200) {
            this.z4D("onsuccess", NEJ.X(lq8i, bQ4U))
        } else {
            this.z4D("onerror", bQ4U)
        }
        this.by4C.reset()
    };
    b3x.mE8w = function (bQ4U) {
        this.z4D("onerror", bQ4U);
        this.by4C.reset()
    };
    b3x.bai1x = function (ic7V) {
        this.z4D("onuploading", .2 + ic7V.loaded / ic7V.total * .8)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        bY5d = c4g("nej.ut"),
        bB4F = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        iV7O = c4g("nm.x.nos"),
        E4I = c4g("nm.m"),
        n4r = c4g("nm.l"),
        y4C = c4g("nm.w"),
        b3x, J4N;
    y4C.RL8D = NEJ.C();
    b3x = y4C.RL8D.O4S(bY5d.cC5H);
    b3x.bj4n = function (e4i) {
        e4i = e4i || {};
        this.bk4o(e4i);
        this.ZS1x = y4C.bzW7P.A4E(NEJ.X({
            parent: e4i.parent,
            onchange: this.rh0x.g4k(this),
            onuploading: this.z4D.g4k(this, "onuploading"),
            onsuccess: this.z4D.g4k(this, "onsuccess"),
            onerror: this.z4D.g4k(this, "onerror")
        }, e4i, function (p4t) {
            return k4o.gr6l(p4t) || k4o.kU8M(p4t)
        }));
        if (e4i.multiple && iV7O.bbw1x()) {
            a3x.fT6N(this.ZS1x.bbk1x(), "multiple", true)
        }
        this.wq1x = e4i
    };
    b3x.rh0x = function (e4i) {
        var ff6Z = e4i.filename,
            eP6J = (ff6Z.split(".") || []).pop();
        this.bAZ8R = (e4i.files || [{}])[0];
        this.z4D("onchange", e4i);
        if (iV7O.bbw1x() && !e4i.stopped && !e4i.cancelUpload) {
            this.Sk8c(true);
            e4i.stopped = true
        }
    };
    b3x.bbk1x = function () {
        return this.ZS1x.bbk1x()
    };
    b3x.cop8h = function () {
        return this.bAZ8R
    };
    b3x.Sk8c = function (eO6I, cO5T) {
        cO5T = cO5T || this.bAZ8R;
        if (iV7O.bbw1x()) {
            this.bBb8T = iV7O.gD7w(NEJ.X({
                file: cO5T,
                local: this.wq1x.bucket && this.wq1x.bucket.length,
                onuploading: this.z4D.g4k(this, "onuploading"),
                onsuccess: this.z4D.g4k(this, "onsuccess"),
                onerror: this.z4D.g4k(this, "onerror")
            }, this.wq1x, function (p4t) {
                return k4o.gr6l(p4t) || k4o.kU8M(p4t)
            }));
            return this.bBb8T
        } else if (!eO6I) {
            this.ZS1x.Sk8c()
        }
    };
    b3x.jD7w = function (D4H) {
        D4H = D4H || this.bBb8T;
        if (D4H) {
            iV7O.jD7w(D4H)
        }
        this.ZS1x.jD7w()
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        ec6W = c4g("nej.g"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        fy6s = c4g("nej.n"),
        H4L = c4g("nej.ut"),
        ba4e = c4g("nej.ui"),
        y4C = c4g("nm.w"),
        n4r = c4g("nm.l"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        M4Q = c4g("nm.x.f"),
        iV7O = c4g("nm.x.nos"),
        b3x, J4N, btk6e = {
            0: "",
            "-1": "不能添加重复图片",
            "-10": "最多只能添加9张",
            "-3": "请选择不超过5M的图片"
        },
        btl6f = 5 * 1024 * 1024,
        czR0x = 80,
        bBk8c = /\.(bmp|jpg|jpeg|png|gif)$/i;
    y4C.bBm8e = NEJ.C();
    b3x = y4C.bBm8e.O4S(H4L.tG0x);
    b3x.bdT2x = function () {
        return {
            x: this.zG2x.clientWidth - this.m4q.offsetWidth,
            y: this.zG2x.clientHeight - this.m4q.offsetHeight
        }
    };
    y4C.bts6m = NEJ.C();
    b3x = y4C.bts6m.O4S(ba4e.ef6Z);
    b3x.ca5f = function () {
        this.cb5g = "m-xwgt-share-upload"
    };
    b3x.bS5X = function () {
        this.cd5i();
        var i4m = a3x.F4J(this.m4q, "j-flag");
        this.XS0x = i4m.shift();
        this.GL4P = i4m.shift();
        this.QU8M = i4m.shift();
        this.bBw8o = {
            onchange: this.bBA8s.eo6i(this, 0),
            onerror: this.ew6q.g4k(this),
            onsuccess: this.tc0x.g4k(this),
            multiple: true,
            parent: this.GL4P,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.btF6z = {
            onchange: this.bBA8s.eo6i(this, 1),
            onerror: this.ew6q.g4k(this),
            onsuccess: this.tc0x.g4k(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.con8f = y4C.RL8D.A4E(this.bBw8o)
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.btF6z.parent = e4i.button;
        this.GJ4N && this.GJ4N.S4W();
        this.GJ4N = y4C.RL8D.A4E(this.btF6z);
        this.m4q.style.display = "none";
        if (!!this.eN6H) {
            for (var i = this.eN6H.length - 1; i >= 0; i--) {
                a3x.cB5G(this.eN6H[i].element, false);
                if (this.eN6H[i].dragger) this.eN6H[i].dragger.S4W()
            }
        }
        this.eN6H = [];
        if (this.AQ2x) {
            clearTimeout(this.AQ2x)
        }
        this.VU9L(0);
        this.Qx8p = 0;
        this.bT5Y([
            [this.bBw8o.parent, "click", this.bBQ8I.g4k(this)],
            [this.btF6z.parent, "click", this.bBQ8I.g4k(this)]
        ])
    };
    b3x.bz4D = function () {
        h4l.gF7y(this.sW0x, "click");
        if (!!this.eN6H) {
            for (var i = this.eN6H.length - 1; i >= 0; i--) {
                a3x.cB5G(this.eN6H[i].element, false);
                if (this.eN6H[i].dragger) this.eN6H[i].dragger.S4W()
            }
        }
        this.eN6H = [];
        if (this.AQ2x) {
            clearTimeout(this.AQ2x)
        }
        this.AQ2x = 0;
        this.GJ4N && this.GJ4N.S4W();
        delete this.GJ4N;
        this.bF4J()
    };
    b3x.bBQ8I = function (d4h) {
        if (!iV7O.bbw1x() && this.eN6H.doing) {
            h4l.bf4j(d4h)
        }
    };
    b3x.bBA8s = function (e4i, r4v) {
        var mu8m = e4i.files,
            id7W;
        e4i.stopped = true;
        if (!mu8m) {
            if (e4i.filename) {
                mu8m = [{
                    name: e4i.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = mu8m.length; i < len; i++) {
            if (!bBk8c.test(mu8m[i].name)) {
                this.btG6A({
                    path: mu8m[i].name,
                    index: r4v,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (mu8m[i].size > btl6f) {
                this.btH6B(-3);
                this.btG6A({
                    path: mu8m[i].name,
                    index: r4v,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.btG6A({
                    path: mu8m[i].name,
                    file: mu8m[i],
                    index: r4v,
                    status: 0
                })
            }
        }
    };
    b3x.btG6A = function (sR0x) {
        if (this.eN6H.length >= 9) {
            this.btH6B(-10, 3e3, this.bCa8S.g4k(this));
            return
        }
        this.com8e(sR0x);
        this.eN6H.push(sR0x);
        if (!!this.eN6H.length) {
            this.m4q.style.display = ""
        }
        if (this.eN6H.length >= 9) {
            this.GL4P.style.display = "none"
        } else {
            this.GL4P.style.display = ""
        }
        this.GG4K()
    };
    b3x.GG4K = function () {
        var btN6H = -1,
            bCh8Z = 0;
        for (var i = 0, l = this.eN6H.length; i < l; i++) {
            if (this.eN6H[i].status == 1) {
                return
            }
            if (this.eN6H[i].status == 0 && btN6H < 0) {
                btN6H = i
            }
            if (this.eN6H[i].status == 2 || this.eN6H[i].status < 0) {
                bCh8Z++
            }
        }
        var p4t = this.eN6H[btN6H];
        if (p4t) {
            (p4t.index == 0 ? this.con8f : this.GJ4N).Sk8c(false, p4t.file);
            p4t.status = 1;
            this.eN6H.doing = p4t;
            this.z4D("onstartupload", {})
        } else if (bCh8Z == this.eN6H.length) {
            this.z4D("onfinishupload", {})
        }
    };
    b3x.btS6M = function () {
        return this.eN6H.doing || {}
    };
    b3x.ew6q = function (d4h) {
        var sR0x = this.btS6M();
        sR0x.status = -4;
        sR0x.fail = "上传<br>失败";
        this.bCl8d(sR0x);
        this.eN6H.doing = null;
        this.GG4K()
    };
    b3x.tc0x = function (d4h) {
        var sR0x = this.btS6M(),
            fj6d = d4h.fileName.match(bBk8c);
        sR0x.picUrl = d4h.url;
        x4B.bo4s("/upload/event/img/v1", {
            query: {
                imgid: d4h.docId,
                format: fj6d[1]
            },
            type: "json",
            onload: this.bCn8f.g4k(this),
            onerror: this.bCn8f.g4k(this)
        })
    };
    b3x.bCn8f = function (d4h) {
        if (d4h && d4h.code == 200 && d4h.picInfo) {
            var sR0x = this.btS6M();
            sR0x.status = 2;
            var bv4z = NEJ.X({}, d4h.picInfo);
            bv4z.originId = bv4z.originIdStr;
            bv4z.squareId = bv4z.squareIdStr;
            bv4z.rectangleId = bv4z.rectangleIdStr;
            bv4z.pcSquareId = bv4z.pcSquareIdStr;
            bv4z.pcRectangleId = bv4z.pcRectangleIdStr;
            bv4z.originJpgId = bv4z.originJpgIdStr || bv4z.originJpgId;
            sR0x.picInfo = bv4z;
            this.bCl8d(sR0x);
            this.eN6H.doing = null;
            this.GG4K()
        } else {
            this.ew6q(d4h)
        }
    };
    b3x.btH6B = function (r4v, kg8Y, fw6q) {
        if (this.Qx8p < r4v) {
            return
        }
        if (this.AQ2x) {
            clearTimeout(this.AQ2x);
            this.AQ2x = 0
        }
        if (kg8Y) {
            this.QU8M.innerText = btk6e[r4v * 1];
            this.Qx8p = r4v;
            this.AQ2x = setTimeout(this.VU9L.g4k(this, r4v, fw6q), kg8Y)
        } else {
            this.QU8M.innerText = btk6e[r4v];
            this.Qx8p = r4v
        }
        this.QU8M.style.display = ""
    };
    b3x.VU9L = function (r4v, fw6q) {
        if (r4v && this.Qx8p !== r4v) {
            return
        }
        this.Qx8p = 0;
        this.QU8M.innerText = btk6e[0];
        this.QU8M.style.display = "none";
        fw6q && fw6q()
    };
    b3x.com8e = function (cO5T) {
        var j4n = {};
        if (cO5T.fail) {
            j4n.fail = cO5T.fail
        }
        var dK5P = a3x.bW5b("m-xwgt-share-upload-preview", j4n);
        cO5T.element = a3x.nl9c(dK5P);
        h4l.s4w(a3x.F4J(cO5T.element, "del")[0], "mousedown", this.col8d.g4k(this, cO5T), false);
        this.XS0x.insertBefore(cO5T.element, this.XS0x.lastElementChild);
        cO5T.dragger = y4C.bBm8e.A4E({
            view: this.XS0x.parentNode,
            body: cO5T.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.SP9G.g4k(this, cO5T),
            onchange: this.coh8Z.g4k(this, cO5T),
            ondragend: this.bem2x.g4k(this, cO5T)
        })
    };
    b3x.bCl8d = function (cO5T) {
        if (!cO5T || !cO5T.element) {
            return false
        }
        var j4n = {};
        if (cO5T.fail) {
            j4n.fail = cO5T.fail
        } else {
            j4n.url = cO5T.picUrl
        }
        a3x.w4A(cO5T.element, "z-fail");
        cO5T.element.firstChild.outerHTML = a3x.bW5b("m-xwgt-share-upload-preview-img", j4n)
    };
    b3x.SP9G = function (p4t, jY8Q) {
        a3x.w4A(p4t.element, "z-sel")
    };
    b3x.coh8Z = function (p4t, jY8Q) {
        var czT0x, gM7F = this.eN6H.length - 1,
            nj9a;
        for (var i = gM7F; i >= 0; i--) {
            a3x.v4z(this.eN6H[i].element, "z-jump");
            if (this.eN6H[i] == p4t) {
                nj9a = i
            } else {
                a3x.eY6S(this.eN6H[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var OY7R = {
            x: 46 + 92 * (nj9a % 5) + jY8Q.left,
            y: 46 + 92 * (nj9a / 5 >> 0) + jY8Q.top
        };
        var bub6V = OY7R.x / 92 >> 0,
            bud6X = OY7R.y / 92 >> 0,
            xf1x = Math.max(0, Math.min(gM7F, bud6X * 5 + bub6V));
        if (xf1x == nj9a) {
            return
        }
        var cof8X = xf1x < nj9a;
        for (var i = Math.min(xf1x, nj9a); i <= Math.max(xf1x, nj9a); i++) {
            if (i !== nj9a) {
                var bCz8r = i % 5;
                if (cof8X) {
                    if (bCz8r == 4) {
                        a3x.eY6S(this.eN6H[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a3x.eY6S(this.eN6H[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bCz8r == 0) {
                        a3x.eY6S(this.eN6H[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a3x.eY6S(this.eN6H[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b3x.bem2x = function (p4t, jY8Q) {
        var czV0x, gM7F = this.eN6H.length - 1,
            nj9a;
        for (var i = gM7F; i >= 0; i--) {
            a3x.eY6S(this.eN6H[i].element, {
                left: "",
                top: ""
            });
            if (this.eN6H[i] == p4t) {
                nj9a = i
            }
        }
        a3x.v4z(p4t.element, "z-sel");
        var OY7R = {
            x: 46 + 92 * (nj9a % 5) + jY8Q.left,
            y: 46 + 92 * (nj9a / 5 >> 0) + jY8Q.top
        };
        var bub6V = OY7R.x / 92 >> 0,
            bud6X = OY7R.y / 92 >> 0,
            xf1x = Math.max(0, Math.min(gM7F, bud6X * 5 + bub6V));
        if (xf1x == nj9a) {
            return
        }
        this.XS0x.insertBefore(p4t.element, (this.eN6H[xf1x + (xf1x > nj9a ? 1 : 0)] || {}).element || this.GL4P);
        this.eN6H.splice(nj9a, 1);
        this.eN6H.splice(xf1x, 0, p4t)
    };
    b3x.col8d = function (p4t, d4h) {
        a3x.cB5G(p4t.element, false);
        if (p4t.dragger) p4t.dragger.S4W();
        delete p4t.dragger;
        var r4v = -1;
        for (var i = this.eN6H.length - 1; i >= 0; i--) {
            if (this.eN6H[i] == p4t) {
                r4v = i;
                break
            }
        }
        this.eN6H.splice(r4v, r4v >= 0 ? 1 : 0);
        delete p4t;
        if (this.eN6H.length >= 9) {
            this.GL4P.style.display = "none"
        } else {
            this.GL4P.style.display = ""
        }
        if (!this.eN6H.length) {
            this.m4q.style.display = "none";
            this.VU9L(0)
        } else {
            this.bCa8S()
        }
        if (this.eN6H.doing == p4t) {
            this.eN6H.doing = null
        }
        this.GG4K()
    };
    b3x.bCa8S = function () {
        var bCH8z = false;
        for (var i = 0, len = this.eN6H.length; i < len; i++) {
            if (this.eN6H[i].status == -3) {
                bCH8z = true
            }
        }
        if (bCH8z) {
            this.btH6B(-3)
        } else {
            this.VU9L(-3)
        }
    };
    b3x.ON7G = function () {
        var el6f = [];
        for (var i = this.eN6H.length - 1; i >= 0; i--) {
            if (this.eN6H[i].status == 2) {
                el6f.unshift(this.eN6H[i].picInfo)
            }
        }
        return el6f
    };
    H4L.fG6A.A4E({
        element: y4C.bts6m,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        fo6i = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        ba4e = c4g("nej.ui"),
        N4R = c4g("nej.ut"),
        b3x, J4N;
    if (!!N4R.nC9t) return;
    N4R.nC9t = NEJ.C();
    b3x = N4R.nC9t.O4S(N4R.baJ1x);
    J4N = N4R.nC9t.cl5q;
    b3x.bj4n = function (e4i) {
        this.cod8V(e4i.more);
        this.Zs1x = a3x.B4F(e4i.sbody);
        this.bT5Y([
            [this.Zs1x, "scroll", this.coc8U.g4k(this)]
        ]);
        var dl5q = e4i.delta;
        if (dl5q == null) dl5q = 30;
        this.OI7B = Math.max(0, dl5q);
        var cz5E = parseInt(e4i.count) || 0;
        this.jd7W = Math.max(0, cz5E);
        var gz7s = parseInt(e4i.number) || 0;
        if (gz7s > 1 && gz7s <= cz5E) {
            this.zt2x = gz7s
        }
        this.bk4o(e4i)
    };
    b3x.bz4D = function () {
        this.bF4J();
        delete this.Bl3x;
        delete this.Zs1x;
        delete this.sD0x;
        delete this.XW0x
    };
    b3x.Ad2x = function (be4i, bm4q) {
        var bI4M = this.xN2x + (this.jd7W - 1) * this.nX9O,
            gd6X = this.jd7W * this.nX9O;
        return J4N.Ad2x.call(this, bI4M, be4i, gd6X, bm4q)
    };
    b3x.cod8V = function (WC0x) {
        this.Bl3x = a3x.B4F(WC0x);
        this.bT5Y([
            [this.Bl3x, "click", this.nW9N.g4k(this)]
        ])
    };
    b3x.buh6b = function (G4K) {
        G4K = G4K || {};
        if (this.sD0x || !G4K) return;
        if (!G4K.scrollHeight) G4K = a3x.oQ9H();
        var be4i = a3x.hM7F(this.hK7D),
            dl5q = be4i.y + this.hK7D.offsetHeight - G4K.scrollTop - G4K.clientHeight,
            buk6e = G4K.scrollHeight <= G4K.clientHeight;
        if (dl5q <= this.OI7B || buk6e && !this.sD0x) {
            this.nW9N()
        }
    };
    b3x.coc8U = function (d4h) {
        if (this.sD0x) return;
        this.buh6b(h4l.U4Y(d4h))
    };
    b3x.zY2x = function (d4h) {
        J4N.zY2x.apply(this, arguments);
        if (!d4h.stopped) {
            this.Rd8V();
            var be4i = 0;
            if (d4h.index > 1) {
                be4i = this.xN2x + ((d4h.index - 1) * this.jd7W - 1) * this.nX9O
            }
            this.hr7k = be4i;
            this.nW9N()
        }
    };
    b3x.bPe1x = function (e4i) {
        if (!!this.zt2x) {
            var dl5q = e4i.offset > 0 ? this.nX9O : this.xN2x,
                gd6X = dl5q + this.nX9O * (this.zt2x - 1);
            this.hr7k = e4i.offset + gd6X;
            e4i.data.limit = gd6X;
            e4i.limit = gd6X;
            delete this.zt2x
        }
        return e4i
    };
    b3x.bpy5D = function (e4i) {
        delete this.XW0x;
        J4N.bpy5D.apply(this, arguments);
        this.bDp8h()
    };
    b3x.bpA5F = function (d4h) {
        if (d4h.key != this.iP7I.key) return;
        switch (d4h.action) {
            case "refresh":
            case "append":
                delete this.XW0x;
                break
        }
        J4N.bpA5F.apply(this, arguments)
    };
    b3x.QB8t = function () {
        this.yQ2x("onbeforelistload", "列表加载中...");
        a3x.Y4c(this.Bl3x, "display", "none")
    };
    b3x.bqf5k = function (i4m, be4i, gd6X) {
        var bm4q = i4m.length,
            bul6f = i4m.loaded ? be4i + gd6X >= bm4q : be4i + gd6X > bm4q;
        this.hr7k = Math.min(this.hr7k, bm4q);
        a3x.Y4c(this.Bl3x, "display", bul6f ? "none" : "");
        if (bul6f) this.sD0x = !0;
        if (this.jd7W > 0) {
            var bv4z = this.Ad2x(be4i, i4m.length);
            if (this.bPR1x(bv4z.index, bv4z.total)) return !0;
            var dl5q = this.xN2x - this.nX9O,
                gz7s = this.jd7W * this.nX9O;
            this.sD0x = (be4i + gd6X - dl5q) % gz7s == 0 || bul6f;
            a3x.Y4c(this.Bl3x, "display", this.sD0x ? "none" : "");
            this.bpG5L(this.sD0x && bv4z.total > 1 ? "" : "none")
        }
    };
    b3x.bqb5g = function () {
        this.hr7k = 0;
        this.sD0x = !0;
        this.yQ2x("onemptylist", "没有列表数据！")
    };
    b3x.PY8Q = function (dK5P, jY8Q) {
        this.hK7D.insertAdjacentHTML(jY8Q || "beforeEnd", dK5P)
    };
    b3x.PV8N = function (gU7N) {
        this.fz6t = this.fz6t || [];
        if (k4o.eE6y(gU7N)) {
            fo6i.push.apply(this.fz6t, gU7N)
        } else {
            this.fz6t.push(gU7N)
        }
    };
    b3x.ZX1x = function (d4h) {
        a3x.mN8F(this.cn5s);
        this.Py7r(d4h, "onafteradd");
        var eO6I = d4h.flag;
        if (d4h.stopped || !eO6I) return;
        if (this.jd7W > 0) {
            this.bpR5W();
            return
        }
        this.hr7k += 1;
        eO6I == -1 ? this.bqk5p(d4h.data) : this.bQY2x(d4h.data)
    };
    b3x.ZP1x = function (d4h) {
        this.Py7r(d4h, "onafterdelete");
        if (d4h.stopped) return;
        if (this.jd7W > 0) {
            this.bpR5W();
            return
        }
        var D4H = d4h.data[this.fc6W.pkey];
        if (!!this.fz6t) {
            var p4t = a3x.bDr8j(D4H),
                r4v = k4o.dd5i(this.fz6t, p4t);
            if (r4v >= 0) {
                this.fz6t.splice(r4v, 1);
                this.hr7k -= 1
            }
            if (!!p4t) p4t.S4W()
        } else {
            var f4j = a3x.B4F(this.bNC1x(D4H));
            if (!!f4j) this.hr7k -= 1;
            a3x.cB5G(f4j)
        }
        if (this.hr7k <= 0) this.nW9N()
    };
    b3x.bqh5m = function (be4i, gd6X) {
        if (be4i != this.hr7k) return;
        if (this.ZZ1x()) {
            this.sD0x = !1;
            this.bDp8h()
        }
    };
    b3x.bqi5n = function (be4i, gd6X) {
        if (be4i != 0) return;
        var JR5W = this.R4V.hh7a(this.iP7I.key);
        for (var i = gd6X - 1; i >= 0; i--) {
            this.bqk5p(JR5W[i])
        }
    };
    b3x.bDp8h = function () {
        var G4K = this.Zs1x;
        if (!G4K || this.sD0x) return;
        this.buh6b(this.Zs1x)
    };
    b3x.gh6b = function () {
        delete this.sD0x;
        J4N.gh6b.apply(this, arguments)
    };
    b3x.nW9N = function () {
        if (!!this.XW0x) return;
        this.XW0x = !0;
        var be4i = this.hr7k;
        this.hr7k += be4i == 0 ? this.xN2x : this.nX9O;
        this.bPc1x(be4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        cP5U = c4g("nej.x"),
        N4R = c4g("nej.ut"),
        b3x;
    if (!!N4R.FI4M) return;
    N4R.FI4M = NEJ.C();
    b3x = N4R.FI4M.O4S(N4R.cC5H);
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.iL7E = e4i.event || "click";
        this.jX8P = e4i.selected || "js-selected";
        this.nI9z = e4i.disabled || "js-disabled";
        this.bDu8m = !!e4i.inverse;
        this.coa8S(e4i.list);
        this.Mz6t(e4i.index || 0)
    };
    b3x.bz4D = function () {
        var cnZ8R = function (f4j) {
            this.bum6g(f4j, !1)
        };
        return function () {
            this.bF4J();
            k4o.bb4f(this.bO4S, cnZ8R, this);
            delete this.bO4S;
            delete this.iL7E;
            delete this.cq5v;
            delete this.nI9z;
            delete this.jX8P;
            delete this.bDu8m
        }
    }();
    b3x.coa8S = function () {
        var bpc5h = function (p4t) {
            if (!p4t) return;
            this.bO4S.push(p4t);
            var r4v = this.bO4S.length - 1,
                dn5s = this.bun6h[r4v];
            if (!dn5s) {
                dn5s = this.Mz6t.g4k(this, r4v);
                this.bun6h[r4v] = dn5s
            }
            this.bT5Y([
                [p4t, this.iL7E, dn5s]
            ])
        };
        return function (i4m) {
            this.bO4S = [];
            if (!this.bun6h) this.bun6h = [];
            k4o.bb4f(i4m, bpc5h, this)
        }
    }();
    b3x.bum6g = function (G4K, cnX8P) {
        !!cnX8P && !this.bDu8m ? a3x.w4A(G4K, this.jX8P) : a3x.v4z(G4K, this.jX8P)
    };
    b3x.Mz6t = function (r4v, Ml6f, j4n) {
        var G4K = this.bO4S[r4v];
        if (Ml6f != !0 && (r4v == this.cq5v || !G4K || a3x.bA4E(G4K, this.nI9z))) {
            h4l.cm5r(arguments[1]);
            return this
        }
        var d4h = {
            index: r4v,
            last: this.cq5v,
            list: this.kQ8I(),
            data: j4n || a3x.u4y(G4K, "value")
        };
        this.cq5v = r4v;
        G4K = this.bO4S[d4h.last];
        if (!!G4K) this.bum6g(G4K, !1);
        G4K = this.bO4S[this.cq5v];
        this.bum6g(G4K, !0);
        this.z4D("onchange", d4h);
        if (!d4h.nostop) h4l.cm5r(arguments[1]);
        return this
    };
    b3x.rP0x = function () {
        return this.cq5v
    };
    b3x.kQ8I = function () {
        return this.bO4S
    };
    a3x.cnW8O = cP5U.cnW8O = function (bG4K, e4i) {
        var D4H = a3x.ld8V(bG4K);
        if (!D4H) return null;
        if (!N4R.ZH1x(D4H, N4R.FI4M)) {
            e4i = e4i || {};
            e4i.list = !e4i.clazz ? a3x.da5f(D4H) : a3x.F4J(D4H, e4i.clazz);
            delete e4i.clazz
        }
        return N4R.ZH1x(D4H, N4R.FI4M, e4i || Z4d)
    };
    cP5U.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        l4p = c4g("nm.x");
    var SETTING_KEY = "player-setting";
    var mv8n = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    mv8n = x4B.tp0x(SETTING_KEY) || mv8n;
    l4p.bur6l = function () {
        return mv8n
    };
    l4p.FS4W = function (FT4X) {
        if (FT4X) {
            mv8n = FT4X;
            x4B.vv1x(SETTING_KEY, FT4X)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        q4u = c4g("nm.d"),
        hi7b = c4g("nm.w.player.log");
    var lf8X = q4u.hO7H.A4E();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var kP8H = function (t4x, bE4I, pI9z) {
        var cL5Q = l4p.fg6a("{0} {1} {2}", k4o.hL7E(new Date, "yyyy-MM-dd HH:mm:ss"), t4x, bE4I);
        if (pI9z == LogLevel.ERROR) {
            lf8X.fu6o("playerror", {
                message: bE4I
            })
        }
        if (pI9z >= LogLevel.INFO) {
            lf8X.cvZ0x(cL5Q)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cL5Q)
        }
    };
    hi7b.bZ5e = function () {
        kP8H("PLAY_ERROR", l4p.fg6a.apply(null, arguments), LogLevel.ERROR)
    };
    hi7b.oM9D = function () {
        kP8H("PLAY_INFO", l4p.fg6a.apply(null, arguments), LogLevel.INFO)
    };
    hi7b.czX0x = function () {
        kP8H("PLAY_DEBUG", l4p.fg6a.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        y4C = c4g("nm.w"),
        fw6q = c4g("flash.cb");
    var dW6Q = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var FX4b, UB9s, up1x;
    y4C.cnS8K = function (t4x, dE5J) {
        if (t4x != "flash") {
            if (!FX4b) {
                FX4b = a3x.cZ5e("audio");
                k4o.bb4f(dW6Q, function (t4x) {
                    h4l.s4w(FX4b, t4x, onMediaCallBack)
                })
            }
            if (FX4b && FX4b.canPlayType && FX4b.canPlayType("audio/mpeg")) {
                dE5J(new MediaWrap("audio"));
                return
            }
        }
        if (!UB9s) {
            a3x.qz0x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function (ho7h) {
                    UB9s = ho7h;
                    k4o.bb4f(dW6Q, function (t4x) {
                        fw6q[t4x] = onMediaCallBack;
                        UB9s.addCallback(t4x, "flash.cb." + t4x)
                    });
                    dE5J(new MediaWrap("flash"))
                }.g4k(this)
            })
        } else {
            dE5J(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Gb4f) {
        var ml8d;
        H4L.fG6A.A4E({
            element: this,
            event: dW6Q.concat(["interrupt", "recover"])
        });
        ml8d = Gb4f == "audio" ? FX4b : UB9s;
        this.type = Gb4f;
        this.destroy = function () {};
        this.setSrc = function (V4Z) {
            if (up1x != this) {
                var gM7F = up1x;
                if (gM7F) {
                    gM7F.interrupt()
                }
                up1x = this
            }
            if (Gb4f == "flash") {
                ml8d.setSrc(V4Z)
            } else {
                ml8d.src = V4Z
            }
        };
        this.play = function () {
            if (up1x != this) {
                var gM7F = up1x;
                if (gM7F) {
                    gM7F.interrupt();
                    up1x = this;
                    this.recover()
                } else {
                    up1x = this
                }
            }
            if (Gb4f == "flash") {
                ml8d.as_play()
            } else {
                ml8d.play()
            }
        };
        this.pause = function () {
            if (up1x != this) return;
            if (Gb4f == "flash") {
                ml8d.as_pause()
            } else {
                ml8d.pause()
            }
        };
        this.load = function () {
            if (up1x != this) return;
            if (Gb4f == "flash") {
                ml8d.as_load()
            } else {
                ml8d.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function () {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function () {
            return ml8d
        };
        var nS9J = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k4o.bb4f(nS9J, function (T4X) {
            var Sx9o = "get" + T4X,
                RE8w = "set" + T4X;
            if (Gb4f == "flash") {
                if (!this[Sx9o]) {
                    this[Sx9o] = function () {
                        return ml8d[Sx9o]()
                    }
                }
                if (!this[RE8w]) {
                    this[RE8w] = function (value) {
                        ml8d[RE8w](value)
                    }
                }
            } else {
                var bEv8n = T4X.slice(0, 1).toLowerCase() + T4X.slice(1);
                if (!this[Sx9o]) {
                    this[Sx9o] = function () {
                        return ml8d[bEv8n]
                    }
                }
                if (!this[RE8w]) {
                    this[RE8w] = function (value) {
                        ml8d[bEv8n] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d4h) {
        if (up1x) {
            h4l.z4D(up1x, d4h.type, d4h)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        x4B = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        dm5r = c4g("nej.p"),
        y4C = c4g("nm.w"),
        l4p = c4g("nm.x"),
        hi7b = c4g("nm.w.player.log"),
        b3x;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bEw8o = false;
    y4C.fB6v = NEJ.C();
    b3x = y4C.fB6v.O4S(H4L.cC5H);
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.cA5F = {};
        this.Us9j(e4i.media);
        x4B.bo4s("/api/cdns", {
            type: "json",
            onload: function (d4h) {
                if (d4h.code) {
                    this.pJ9A = d4h.data
                }
            }.g4k(this)
        })
    };
    b3x.bz4D = function () {
        this.bF4J();
        delete this.cA5F
    };
    b3x.Uc9T = function (bg4k) {
        if (!bg4k) return;
        var BO3x = this.cA5F.volume;
        if (this.dN5S) {
            this.dN5S.pause()
        }
        this.cA5F = {
            time: 0,
            id: bg4k.id,
            duration: bg4k.duration / 1e3,
            play: this.cA5F.play,
            stalledRetryCount: 0
        };
        if (BO3x != null) {
            this.cA5F.volume = BO3x
        }
        this.cA5F.loadState = LoadState.LOAD_START;
        this.bEQ8I(bg4k.id);
        hi7b.oM9D("play song id: {0}", bg4k.id)
    };
    b3x.ez6t = function () {
        if (this.cA5F.error) {
            this.cA5F.error = null;
            if (this.cA5F.error == ErrorType.INFO_GET_ERR || this.bER8J()) {
                this.bFa9R()
            } else {
                this.Pm7f()
            }
        } else {
            if (this.dN5S) {
                this.dN5S.play()
            }
        }
        this.cA5F.play = true;
        this.oI9z("play")
    };
    b3x.fK6E = function () {
        if (this.dN5S) {
            this.dN5S.pause()
        }
        this.cA5F.play = false;
        this.oI9z("pause")
    };
    b3x.nM9D = function (bw4A) {
        if (this.dN5S) {
            this.dN5S.setCurrentTime(bw4A)
        }
        this.cA5F.time = bw4A;
        hi7b.oM9D("seek to: {0}", bw4A)
    };
    b3x.buE6y = function () {
        return this.cA5F.duration || 0
    };
    b3x.vM1x = function () {
        return !!this.cA5F.play
    };
    b3x.lS8K = function (NR7K) {
        this.cA5F.volume = NR7K;
        if (this.dN5S) {
            this.dN5S.setVolume(NR7K)
        }
    };
    b3x.bfD2x = function () {
        return this.cA5F.time
    };
    b3x.Us9j = function (t4x) {
        y4C.cnS8K(t4x, function (ml8d) {
            this.dN5S = ml8d;
            hi7b.oM9D("media loaded: {0}", ml8d.type);
            this.bT5Y([
                [this.dN5S, "loadedmetadata", this.cnR8J.g4k(this)],
                [this.dN5S, "ended", this.cnO8G.g4k(this)],
                [this.dN5S, "waiting", this.yW2x.g4k(this)],
                [this.dN5S, "play", this.uR1x.g4k(this)],
                [this.dN5S, "pause", this.buO6I.g4k(this)],
                [this.dN5S, "playing", this.Nd6X.g4k(this)],
                [this.dN5S, "timeupdate", this.cnN8F.g4k(this)],
                [this.dN5S, "progress", this.rM0x.g4k(this)],
                [this.dN5S, "stalled", this.buL6F.g4k(this)],
                [this.dN5S, "interrupt", this.fK6E.g4k(this)],
                [this.dN5S, "recover", this.cnM8E.g4k(this)],
                [this.dN5S, "error", this.ew6q.g4k(this)]
            ]);
            if (this.cA5F) {
                if (this.cA5F.loadState == LoadState.LOAD_START || this.cA5F.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.buJ6D();
                    if (this.cA5F.volume != null) {
                        this.dN5S.setVolume(this.cA5F.volume)
                    }
                }
            }
        }.g4k(this))
    };
    b3x.cnL8D = function (t4x) {
        this.IE5J();
        this.dN5S.destroy();
        this.cA5F.loadState = LoadState.IN_SWITCH_MEDIA;
        this.yW2x();
        this.Us9j(t4x);
        hi7b.oM9D("switch media")
    };
    b3x.czZ0x = function () {
        return this.dN5S
    };
    b3x.bEQ8I = function () {
        this.yW2x();
        x4B.bo4s("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cA5F.id]),
                br: DEFAULT_BR
            },
            onload: this.bFN9E.g4k(this),
            onerror: this.bFN9E.g4k(this)
        })
    };
    b3x.bFN9E = function (d4h) {
        if (d4h.code == 200 && d4h.data && d4h.data.length) {
            var bv4z = d4h.data[0];
            if (!bv4z.url) {
                this.cA5F.error = ErrorType.INFO_GET_ERR;
                this.oI9z("error", {
                    code: this.cA5F.error
                });
                return
            }
            this.cA5F.playUrl = bv4z.url;
            this.cA5F.expireTime = (new Date).getTime() + bv4z.expi * 1e3;
            this.buJ6D()
        } else {
            this.cA5F.error = ErrorType.INFO_GET_ERR;
            this.oI9z("error", {
                code: this.cA5F.error
            });
            hi7b.bZ5e("info load error")
        }
    };
    b3x.buJ6D = function () {
        if (this.dN5S) {
            var V4Z = this.cA5F.playUrl;
            if (this.cA5F.time > 0 && (this.cA5F.loadState == LoadState.IN_RE_GET_URL || this.cA5F.loadState == LoadState.IN_RE_GET_URL)) {
                V4Z += "#t=" + this.cA5F.time
            }
            this.dN5S.setSrc(V4Z);
            hi7b.oM9D("load mp3: {0},loadState: {1}.", V4Z, this.cA5F.loadState)
        }
    };
    b3x.bFR9I = function () {
        if (/#t=(\d+)$/.test(this.dN5S.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b3x.Pm7f = function () {
        var bw4A = parseInt(this.cA5F.time) || 0,
            cnH8z = this.bFR9I();
        if (bw4A === cnH8z) {
            this.dN5S.load()
        } else {
            this.dN5S.setSrc(this.cA5F.playUrl + "#t=" + bw4A)
        }
        this.cA5F.loadState = LoadState.IN_RELOAD;
        this.yW2x();
        hi7b.oM9D("reload from: {0}", bw4A)
    };
    b3x.bFa9R = function () {
        this.cA5F.loadState = LoadState.IN_RE_GET_URL;
        this.bEQ8I()
    };
    b3x.bFT9K = function () {
        var rX0x = getHost(this.cA5F.playUrl);
        if (rX0x) {
            for (var i = 0; i < this.pJ9A.length; i++) {
                var hF7y = this.pJ9A[i] || [],
                    r4v = hF7y.indexOf(rX0x);
                if (r4v >= 0 && hF7y.length > 1) {
                    return hF7y[(r4v + 1) % hF7y.length]
                }
            }
        }

        function getHost(V4Z) {
            if (CDN_HOST_REG.test(V4Z)) return RegExp.$1
        }
    };
    b3x.cnG8y = function () {
        this.cA5F.playUrl = this.cA5F.playUrl.replace(CDN_HOST_REG, this.bFT9K());
        this.cA5F.loadState = LoadState.IN_SWITCH_CDN;
        this.buJ6D();
        this.yW2x()
    };
    b3x.cnR8J = function () {
        if (this.cA5F.loadState == LoadState.LOAD_START) {
            this.cA5F.loadState = LoadState.LOADED_META;
            if (this.dN5S.type == "audio") {
                this.cA5F.duration = this.dN5S.getDuration()
            }
            this.oI9z("loadedmeta", {
                duration: this.cA5F.duration
            })
        } else {
            this.cA5F.loadState = LoadState.LOADED_META
        }
        if (this.cA5F.play) {
            this.dN5S.play()
        } else {
            this.dN5S.pause()
        }
        if (this.cA5F.time && parseInt(this.cA5F.time) != this.bFR9I()) {
            this.dN5S.setCurrentTime(this.cA5F.time)
        }
        this.Gy4C();
        this.Nd6X();
        bEw8o = true;
        hi7b.oM9D("loaded meta")
    };
    b3x.cnO8G = function () {
        this.cA5F.ended = true;
        this.oI9z("ended")
    };
    b3x.yW2x = function () {
        if (!this.cA5F.waiting) {
            this.cA5F.waiting = true;
            this.cA5F.waitTimestamp = +(new Date);
            this.oI9z("waiting")
        }
    };
    b3x.Nd6X = function () {
        this.cA5F.waiting = false;
        this.cA5F.waitTimestamp = 0;
        this.oI9z("playing")
    };
    b3x.uR1x = function () {
        this.oI9z("play")
    };
    b3x.buO6I = function () {
        this.oI9z("pause")
    };
    b3x.cnN8F = function () {
        if (this.cA5F.loadState != LoadState.LOADED_META) return;
        var bw4A = this.dN5S.getCurrentTime();
        if (this.cA5F.waiting && bw4A > this.cA5F.time) {
            this.Nd6X()
        }
        this.cA5F.time = bw4A;
        this.oI9z("timeupdate", {
            time: this.cA5F.time,
            duration: this.cA5F.duration
        })
    };
    b3x.rM0x = function (d4h) {
        if (this.cA5F.loadState != LoadState.LOADED_META) return;
        var o4s = {};
        if (d4h.data) {
            o4s.total = d4h.data.total;
            o4s.loaded = d4h.data.loaded
        } else {
            var wB1x = this.dN5S.getBuffered(),
                bw4A = this.dN5S.getCurrentTime(),
                ol9c = 0;
            for (var i = 0; i < wB1x.length; i++) {
                if (bw4A > wB1x.start(i) && bw4A < wB1x.end(i)) {
                    ol9c = wB1x.end(i);
                    break
                }
            }
            o4s.total = this.cA5F.duration;
            o4s.loaded = Math.min(ol9c, o4s.total)
        }
        this.oI9z("progress", o4s)
    };
    b3x.Gy4C = function () {
        if (this.cA5F.retry) {
            clearTimeout(this.cA5F.retry.tid);
            this.cA5F.retry = null
        }
    };
    b3x.ew6q = function () {
        var bV5a = this.dN5S.getError();
        hi7b.bZ5e("media error code: {0}, netState: {1}", bV5a.code, this.dN5S.getNetworkState());
        if (bV5a.code == MediaError.MEDIA_ERR_NETWORK || bV5a.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var FT4X = l4p.bur6l();
            if (!this.cA5F.retry) {
                this.cA5F.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cA5F.retry.tid)
            }
            if (this.cA5F.retry.level == RetryLevel.NONE) {
                if (this.bER8J()) {
                    this.cA5F.retry.level = RetryLevel.GET_URL;
                    this.bFa9R();
                    hi7b.oM9D("Url expired, get url.")
                } else {
                    this.cA5F.retry.level = RetryLevel.RELOAD;
                    this.cA5F.retry.tid = setTimeout(this.Pm7f.g4k(this), 3e3);
                    hi7b.oM9D("Reload mp3 3s later.")
                }
            } else if (this.cA5F.retry.level == RetryLevel.GET_URL) {
                this.cA5F.retry.level = RetryLevel.RELOAD;
                this.cA5F.retry.tid = setTimeout(this.Pm7f.g4k(this), 3e3);
                hi7b.oM9D("Reload mp3 3s later.")
            } else if (this.cA5F.retry.level == RetryLevel.RELOAD) {
                this.cA5F.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bFT9K()) {
                    this.cA5F.retry.tid = setTimeout(this.cnG8y.g4k(this), 5e3);
                    hi7b.oM9D("Switch CDN 5s later.")
                } else {
                    this.cA5F.retry.tid = setTimeout(this.Pm7f.g4k(this), 5e3);
                    hi7b.oM9D("Reload mp3 5s later.")
                }
            } else if (!bEw8o && this.dN5S.type == "audio" && !FT4X.useFlash && !dm5r.Gz4D.mac && l4p.bjg3x().supported) {
                FT4X.useFlash = true;
                l4p.FS4W(FT4X);
                this.cnL8D("flash")
            } else {
                this.Gy4C();
                this.fK6E();
                this.cA5F.error = ErrorType.NET_ERR;
                this.oI9z("error", {
                    code: this.cA5F.error
                });
                hi7b.bZ5e("error can not retry.")
            }
        } else {
            this.Gy4C();
            this.fK6E();
            this.cA5F.error = ErrorType.UNKNOWN_ERR;
            this.oI9z("error", {
                code: this.cA5F.error
            });
            hi7b.bZ5e("error can not retry.")
        }
    };
    b3x.buL6F = function () {
        var hv7o = 0,
            bGf9W = 5e3;
        return function () {
            this.yW2x();
            clearTimeout(hv7o);
            setTimeout(function () {
                var fe6Y = +(new Date);
                if (this.cA5F.waiting && fe6Y - this.cA5F.waitTimestamp >= bGf9W && this.cA5F.stalledRetryCount < MAX_STALLED_RETRY) {
                    hi7b.oM9D("stalled too long retry.");
                    this.cA5F.stalledRetryCount++;
                    this.Pm7f()
                }
            }.g4k(this), bGf9W);
            hi7b.oM9D("stalled")
        }
    }();
    b3x.bER8J = function () {
        var fe6Y = +(new Date);
        return fe6Y > this.cA5F.expireTime
    };
    b3x.cnM8E = function () {
        var bw4A = parseInt(this.cA5F.time) || 0;
        this.dN5S.setSrc(this.cA5F.playUrl + "#t=" + bw4A);
        this.cA5F.loadState = LoadState.IN_RELOAD;
        this.yW2x();
        hi7b.oM9D("recover from: {0}", bw4A)
    };
    b3x.oI9z = function (W4a, j4n) {
        h4l.z4D(y4C.fB6v, "playaction", {
            action: W4a,
            data: j4n || {}
        })
    };
    H4L.fG6A.A4E({
        element: y4C.fB6v,
        event: ["playaction"]
    })
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        y4C = c4g("nm.w"),
        b3x;
    y4C.Gn4r = NEJ.C();
    b3x = y4C.Gn4r.O4S(y4C.fB6v);
    J4N = y4C.Gn4r.cl5q;
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.cnF8x = function (bJ4N) {
        this.Uc9T(bJ4N);
        this.ez6t()
    };
    b3x.buD6x = function () {
        this.fK6E()
    };
    b3x.vD1x = function (d4h) {
        if (d4h.action == "play") {
            this.fK6E()
        }
    };
    b3x.oI9z = function (W4a, j4n) {
        h4l.z4D(y4C.Gn4r, "tmpplayaction", {
            action: W4a,
            data: j4n || {},
            tmp: true
        })
    };
    b3x.rY0x = function () {
        return this.cA5F
    };
    H4L.fG6A.A4E({
        element: y4C.Gn4r,
        event: ["tmpplayaction"]
    })
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        fy6s = c4g("nej.n"),
        x4B = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        ba4e = c4g("nej.ui"),
        y4C = c4g("nm.w"),
        n4r = c4g("nm.l"),
        ks8k = c4g("nm.c"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b3x, J4N, Uy9p = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }];
    var buB6v = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    y4C.buA6u = NEJ.C();
    b3x = y4C.buA6u.O4S(ba4e.ef6Z);
    b3x.cs5x = function (e4i) {
        this.cw5B(e4i);
        var i4m = a3x.F4J(this.m4q, "j-flag");
        this.cAb0x = i4m.shift();
        this.cnC8u = i4m.shift();
        this.GA4E = i4m.shift();
        this.buy6s = i4m.shift();
        this.buu6o = [i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift()];
        this.bax1x = i4m.shift();
        this.bGT9K = i4m.shift();
        this.qD0x = {
            list: this.buu6o,
            selected: "z-curr",
            onchange: this.bGW9N.g4k(this)
        };
        h4l.s4w(this.GA4E, "input", this.bbS2x.g4k(this));
        h4l.s4w(this.GA4E, "propertychange", this.bbS2x.g4k(this));
        h4l.s4w(this.GA4E, "keyup", this.bbS2x.g4k(this));
        h4l.s4w(this.cnC8u, "click", this.bbS2x.g4k(this));
        h4l.s4w(this.bax1x, "click", this.cF5K.g4k(this));
        h4l.s4w(this.bGT9K, "click", function () {
            this.z4D("oncancel", {})
        }.g4k(this));
        this.R4V = q4u.FR4V.gf6Z();
        this.RU8M = top.nm.w.Gn4r.gf6Z();
        H4L.fG6A.A4E({
            element: top.nm.w.Gn4r,
            event: ["tmpplayaction"]
        });
        this.qN0x = {
            limit: 100,
            offset: 0,
            parent: this.bax1x,
            onbeforelistload: this.qm9d.g4k(this)
        };
        q4u.sk = "fuck" + a3x.u4y(this.buy6s, "xname") + "458";
        h4l.s4w(top.nm.w.Gn4r, "tmpplayaction", this.vD1x.g4k(this))
    };
    b3x.ca5f = function () {
        this.cb5g = "m-xwgt-publish-search"
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        if (!!this.BE3x) {
            this.BE3x.S4W();
            delete this.BE3x
        }
        this.qD0x.index = buB6v[e4i.type || "song"];
        this.BE3x = H4L.FI4M.A4E(this.qD0x);
        this.GA4E.value = "";
        this.GA4E.focus();
        this.uo1x = "";
        this.cAc1x = 0;
        if (e4i.showMV == true) {
            this.buu6o[buB6v["mv"]].parentNode.style.display = "";
            a3x.w4A(this.buy6s, "srchtab-1")
        } else {
            this.buu6o[buB6v["mv"]].parentNode.style.display = "none";
            a3x.v4z(this.buy6s, "srchtab-1")
        }
        if (!!this.dD5I) {
            this.dD5I = this.dD5I.S4W()
        }
        if (e4i.hideBack) {
            a3x.w4A(this.bGT9K.parentNode, "f-hide")
        }
    };
    b3x.bz4D = function () {
        this.RU8M.buD6x();
        this.bF4J()
    };
    b3x.bbS2x = function () {
        var value = this.GA4E.value.trim();
        if (value && value.length) {
            if (value != this.uo1x) {
                this.uo1x = value;
                this.bGW9N({
                    index: this.BE3x.rP0x()
                })
            }
        } else {
            if (this.dD5I) {
                this.dD5I = this.dD5I.S4W()
            }
        }
        this.uo1x = value
    };
    b3x.cF5K = function () {
        var cnz8r = function (G4K) {
                return a3x.bA4E(G4K, "sitm") || a3x.bA4E(G4K, "itm") || a3x.bA4E(G4K, "mv-item")
            },
            cny8q = function (G4K) {
                return a3x.bA4E(G4K, "ply")
            },
            bHM9D = function () {
                n4r.X4b.L4P({
                    type: 2,
                    tip: "因合作方要求，该资源需付费使用"
                })
            },
            cnx8p = function () {
                n4r.X4b.L4P({
                    type: 2,
                    tip: "因合作方要求，该资源需下载后播放"
                })
            },
            buo6i = function (bg4k) {
                if (bg4k && bg4k.privilege && bg4k.privilege.toast) {
                    x4B.bo4s("/api/song/toast", {
                        query: {
                            id: bg4k.id
                        },
                        type: "json",
                        onload: Ri8a.g4k(this),
                        onerror: Ri8a.g4k(this)
                    })
                } else {
                    Rj8b()
                }
            },
            Ri8a = function (P4T) {
                Rj8b((P4T || Z4d).toast)
            },
            Rj8b = function (bE4I) {
                n4r.X4b.L4P({
                    type: 2,
                    tip: bE4I || "因合作方要求，该资源暂时下架>_<"
                })
            };
        return function (d4h) {
            var FP4T = h4l.U4Y(d4h, cny8q),
                i4m = h4l.U4Y(d4h, cnz8r),
                ej6d = this.RU8M.rY0x();
            if (!!i4m) {
                h4l.bf4j(d4h);
                this.LU6O = a3x.u4y(i4m, "id");
                this.Md6X = a3x.u4y(i4m, "type");
                if (this.Md6X == 18) {
                    var bJ4N = this.R4V.eu6o(this.LU6O),
                        pI9z = l4p.oJ9A(bJ4N);
                    if (!FP4T) {
                        if (pI9z == 10) {
                            bHM9D();
                            return
                        } else if (pI9z == 100) {
                            buo6i(bJ4N);
                            return
                        }
                    } else {
                        if (pI9z == 10) {
                            bHM9D();
                            return
                        } else if (pI9z == 100) {
                            buo6i(bJ4N);
                            return
                        } else if (pI9z == 11) {
                            cnx8p();
                            return
                        } else {
                            a3x.v4z(this.Bw3x, "z-pause z-loading");
                            if (FP4T == this.Bw3x && ej6d.play && !ej6d.ended) {
                                this.RU8M.buD6x()
                            } else {
                                this.Bw3x = FP4T;
                                this.RU8M.cnF8x(bJ4N)
                            }
                            return
                        }
                    }
                } else if (this.Md6X == 70) {
                    if (a3x.bA4E(i4m, "z-noprogram")) {
                        n4r.X4b.L4P({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cnw8o()
            }
        }
    }();
    b3x.cnw8o = function () {
        var hB7u = this.R4V.eu6o(this.LU6O),
            ss0x = l4p.bNi0x(this.Md6X, hB7u);
        ss0x.title = ss0x.title || "";
        ss0x.author = ss0x.author || "";
        ss0x.picUrl = ss0x.picUrl || "";
        ss0x.authors = ss0x.authors || "";
        if (this.Md6X == 70) {
            this.LU6O = this.LU6O.slice(0, -4)
        }
        this.z4D("onfinish", {
            id: this.LU6O,
            type: this.Md6X,
            data: ss0x
        })
    };
    b3x.vD1x = function (d4h) {
        var j4n = d4h.data;
        if (!this.Bw3x) {
            return
        }
        switch (d4h.action) {
            case "play":
                a3x.eQ6K(this.Bw3x, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a3x.v4z(this.Bw3x, "z-pause z-loading");
                break;
            case "error":
                n4r.X4b.L4P({
                    type: 2,
                    tip: "试听遇到问题，播放失败"
                });
                a3x.v4z(this.Bw3x, "z-pause z-loading");
                break;
            case "playing":
                a3x.eQ6K(this.Bw3x, "z-loading", "z-pause");
                break;
            case "waiting":
                a3x.eQ6K(this.Bw3x, "z-pause", "z-loading");
                break
        }
    };
    b3x.cnu8m = function (d4h) {
        if (d4h.result.code == 407) {
            this.bax1x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.bax1x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b3x.bGW9N = function (d4h) {
        if (!this.uo1x || d4h.index < 0 || d4h.index > 5) {
            return
        }
        this.RU8M.buD6x();
        var bd4h = Uy9p[d4h.index],
            e4i = NEJ.X({}, this.qN0x);
        e4i.cache = {
            klass: q4u.FR4V,
            clear: true,
            onerror: this.cnu8m.g4k(this)
        };
        e4i.cache.lkey = "search-publish-" + bd4h.type + "-" + this.uo1x;
        e4i.item = {
            klass: bd4h.item,
            getRestrictLevel: l4p.oJ9A,
            dur2time: l4p.kX8P
        };
        if (!e4i.cache.data) {
            e4i.cache.data = {}
        }
        e4i.cache.data.s = this.uo1x;
        e4i.cache.data.type = bd4h.type;
        e4i.cache.data.isPub = true;
        if (bd4h.type == 1) {
            e4i.cache.data.hlpretag = '<span class="s-fc7">';
            e4i.cache.data.hlposttag = "</span>"
        }
        e4i.onemptylist = this.cnt8l.g4k(this, this.uo1x);
        if (!!this.FL4P) this.R4V.tQ0x(this.FL4P);
        if (!!this.dD5I) {
            this.dD5I = this.dD5I.S4W()
        }
        this.dD5I = H4L.nC9t.A4E(e4i);
        this.FL4P = e4i.cache.lkey
    };
    b3x.qm9d = function (d4h) {
        d4h.value = a3x.ik7d("m-publish-search-loading")
    };
    b3x.cnt8l = function (K4O, d4h) {
        a3x.dI5N(d4h.parent, "m-publish-emtpy-message", {
            key: K4O
        });
        d4h.stopped = true
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        dm5r = c4g("nej.p"),
        x4B = c4g("nej.j"),
        bY5d = c4g("nej.ut"),
        bB4F = c4g("nej.ui"),
        y4C = c4g("nm.w"),
        b3x, J4N;
    var cns8k = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    y4C.FK4O = NEJ.C();
    b3x = y4C.FK4O.O4S(bB4F.ef6Z);
    var gv7o = a3x.er6l("m-wgt-receiverInput");
    var cnr8j = a3x.er6l("m-wgt-receiverList");
    var iw7p = a3x.sN0x(cns8k);
    var cnq8i = a3x.er6l('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b3x.cs5x = function (e4i) {
        this.bi4m = [];
        this.vx1x = e4i.receiver || null;
        this.cnp8h = e4i.unique || false;
        this.mK8C = e4i.err;
        this.bJF0x(this.bJJ0x, e4i.uid);
        this.cw5B(e4i)
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.MZ6T();
        this.Nc6W();
        this.Vs9j();
        if (e4i.receiver) this.buj6d(e4i.receiver.nickname, e4i.receiver.userId);
        a3x.Y4c(this.zv2x, "display", "block");
        a3x.Y4c(this.bui6c, "cursor", "text");
        a3x.Y4c(this.zv2x, "cursor", "text")
    };
    b3x.ca5f = function () {
        var j4n = this.bKi0x();
        this.cb5g = a3x.iz7s(a3x.bW5b(gv7o, {
            receiver: this.vx1x,
            users: j4n
        }));
        this.lD8v = iw7p
    };
    b3x.bS5X = function () {
        this.cd5i();
        var bL4P = a3x.F4J(this.m4q, "j-flag");
        var gU7N = a3x.F4J(this.m4q, "j-item");
        this.bui6c = bL4P[0];
        this.bKz0x = bL4P[1];
        this.dX6R = bL4P[2];
        this.zv2x = bL4P[3];
        this.WO0x = bL4P[4];
        this.bug6a = bL4P[5];
        this.fz6t = gU7N;
        a3x.w4A(this.fz6t[0], "j-selected");
        h4l.s4w(this.dX6R, "keyup", this.buf6Z.g4k(this));
        h4l.s4w(this.dX6R, "keydown", this.Og7Z.g4k(this));
        h4l.s4w(this.dX6R, "focus", this.kI8A.g4k(this));
        h4l.s4w(this.WO0x, "click", this.cnm8e.g4k(this));
        h4l.s4w(this.bui6c, "click", this.cnk8c.g4k(this));
        h4l.s4w(document.body, "click", this.oA9r.g4k(this));
        h4l.s4w(this.dX6R, "input", this.fE6y.g4k(this));
        h4l.s4w(this.dX6R, "blur", this.oX9O.g4k(this))
    };
    b3x.bz4D = function (e4i) {
        h4l.mH8z(document.body, "click", this.oA9r.g4k(this));
        this.bF4J();
        this.Vs9j();
        this.cnj8b();
        this.oA9r()
    };
    b3x.buf6Z = function (d4h) {
        h4l.bf4j(d4h);
        var jB7u = d4h.keyCode || d4h.which;
        var bl4p = this.dX6R.value;
        var bm4q = this.fz6t.length;
        var rb0x = a3x.F4J(this.m4q, "j-selected")[0];
        switch (jB7u) {
            case 13:
                var ky8q = a3x.fT6N(rb0x, "data-username");
                var hJ7C = a3x.fT6N(rb0x, "data-userId");
                this.buj6d(ky8q, hJ7C);
                this.oA9r();
                this.dX6R.value = "";
                break;
            case 38:
                var r4v = a3x.fT6N(rb0x, "data-index") - 1 < 0 ? bm4q - 1 : a3x.fT6N(rb0x, "data-index") - 1;
                a3x.v4z(rb0x, "j-selected");
                a3x.w4A(this.fz6t[r4v], "j-selected");
                break;
            case 40:
                var r4v = parseInt(a3x.fT6N(rb0x, "data-index")) + 1 >= bm4q ? 0 : parseInt(a3x.fT6N(rb0x, "data-index")) + 1;
                a3x.v4z(rb0x, "j-selected");
                a3x.w4A(this.fz6t[r4v], "j-selected");
                break;
            default:
                this.vq1x()
        }
    };
    b3x.Og7Z = function (d4h) {
        var jB7u = d4h.keyCode || d4h.which;
        var bl4p = this.dX6R.value;
        var r4v = a3x.F4J(this.m4q, "j-receiver").length - 1;
        if (jB7u === 8 && bl4p === "") this.cnh8Z(r4v)
    };
    b3x.fE6y = function (d4h) {
        var bl4p = this.dX6R.value;
        if (bl4p.length > 10) {
            this.dX6R.value = bl4p.substring(0, 10);
            return
        }
        dm5r.di5n.browser == "ie" && dm5r.di5n.version < "7.0" ? setTimeout(this.btX6R.g4k(this), 0) : this.btX6R();
        this.Nc6W()
    };
    b3x.kI8A = function () {
        if (this.bi4m[0]) this.vq1x();
        else this.bJF0x(this.cmW7P);
        a3x.Y4c(this.zv2x, "display", "none")
    };
    b3x.oX9O = function () {
        var bm4q = a3x.F4J(this.m4q, "j-receiver").length;
        if (this.dX6R.value.trim() == "" && bm4q <= 0) a3x.Y4c(this.zv2x, "display", "block")
    };
    b3x.buj6d = function (ky8q, hJ7C) {
        var GF4J = this.Ps7l();
        if (GF4J.length >= 10) {
            this.dH5M();
            return
        }
        var ba4e;
        for (ba4e = 0; ba4e < GF4J.length; ba4e++) {
            if (GF4J[ba4e] == hJ7C) {
                this.oA9r();
                return
            }
        }
        if (!ky8q || !hJ7C) return;
        var f4j = a3x.dq5v(a3x.iz7s(a3x.bW5b(cnq8i, {
            username: ky8q,
            userId: hJ7C
        })));
        var bG4K = this.bKz0x.parentNode;
        if (this.cnp8h) {
            this.Vs9j()
        }
        bG4K.insertBefore(f4j, this.bKz0x);
        this.dX6R.value = "";
        var bm4q = a3x.F4J(this.m4q, "j-receiver").length;
        if (bm4q > 1) a3x.Y4c(this.zv2x, "display", "none");
        this.btX6R();
        this.Nc6W()
    };
    b3x.Vs9j = function () {
        var PC7v = a3x.F4J(this.m4q, "j-receiver");
        var ba4e;
        if (PC7v.length > 0) {
            for (ba4e = 0; ba4e < PC7v.length; ba4e++) {
                a3x.cB5G(PC7v[ba4e], false)
            }
        }
    };
    b3x.cnj8b = function () {
        this.dX6R.value = ""
    };
    b3x.cnh8Z = function (r4v) {
        this.dH5M(!0);
        var PC7v = a3x.F4J(this.m4q, "j-receiver");
        a3x.cB5G(PC7v[r4v], false);
        this.Nc6W()
    };
    b3x.vq1x = function () {
        var bl4p = this.dX6R.value;
        var bx4B = bl4p.trim().toLowerCase();
        var j4n;
        bx4B = bx4B.replace(/\[/g, "\\[");
        bx4B = bx4B.replace(/\]/g, "\\]");
        j4n = this.bKi0x(bx4B);
        this.cmT7M(j4n)
    };
    b3x.oA9r = function (d4h) {
        a3x.Y4c(this.WO0x, "display", "none")
    };
    b3x.dH5M = function (gP7I) {
        if (gP7I && this.mK8C) {
            a3x.Y4c(this.mK8C, "display", "none");
            return
        }
        if (this.mK8C) a3x.Y4c(this.mK8C, "display", "block")
    };
    b3x.cnm8e = function (d4h) {
        h4l.cm5r(d4h);
        var dh5m = d4h.target || d4h.srcElement;
        if (a3x.bA4E(dh5m, "j-flag")) return;
        var bG4K = dh5m.nodeName.toLowerCase() == "a" ? dh5m.parentNode : dh5m.parentNode.parentNode;
        var ky8q = a3x.fT6N(bG4K, "data-username");
        var hJ7C = a3x.fT6N(bG4K, "data-userId");
        this.buj6d(ky8q, hJ7C);
        this.oA9r();
        a3x.Y4c(this.zv2x, "display", "none")
    };
    b3x.cnk8c = function (d4h) {
        h4l.bf4j(d4h);
        var dh5m = d4h.target || d4h.srcElement;
        if (a3x.bA4E(dh5m.parentNode, "j-receiver")) {
            a3x.cB5G(dh5m.parentNode, false);
            this.dH5M(!0);
            this.Nc6W()
        } else this.dX6R.focus()
    };
    b3x.btX6R = function () {
        this.bug6a.innerHTML = this.dX6R.value;
        var cy5D = this.bug6a.offsetWidth + 2;
        a3x.Y4c(this.dX6R, "width", cy5D + "px")
    };
    b3x.Nc6W = function () {
        var TP9G = a3x.hM7F(this.dX6R, this.m4q).y;
        var bMc0x = Math.floor((TP9G - 8) / 27);
        if (bMc0x < 0) return;
        a3x.Y4c(this.bui6c, "height", 19 + bMc0x * 29 + "px")
    };
    b3x.MZ6T = function () {
        var pb9S = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pb9S.length; i++) {
            a3x.Y4c(this.bug6a, pb9S[i], a3x.cX5c(this.dX6R, pb9S[i]))
        }
    };
    b3x.bJF0x = function (dE5J, D4H) {
        var df5k = D4H ? D4H : window.GUser.userId;
        var V4Z = "/api/user/getfollows/" + df5k;
        var fS6M = x4B.bo4s(V4Z, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dE5J.g4k(this),
            onerror: function (j4n) {
                this.bi4m = []
            },
            onbeforerequest: function (j4n) {}
        })
    };
    b3x.bJJ0x = function (j4n) {
        this.bi4m = JSON.parse(j4n).follow || [];
        var D4H = GUser.userId;
        for (var i = 0; i < this.bi4m.length; i++) {
            if (this.bi4m[i].userId == D4H) {
                this.bi4m.splice(i, 1);
                continue
            }
            this.bi4m[i].avatarUrl = this.bi4m[i].avatarUrl + "?param=30y30"
        }
    };
    b3x.cmW7P = function (j4n) {
        if (this.bi4m[0]) return;
        this.bJJ0x(j4n);
        this.vq1x()
    };
    b3x.bKi0x = function (bx4B) {
        var bx4B = bx4B ? bx4B : "";
        this.bi4m = this.bi4m[0] ? this.bi4m : [];
        var bm4q = this.bi4m.length;
        var Qe8W = this.Ps7l();
        var sQ0x = [];
        var Qg8Y, Qr8j, btM6G;
        if (!this.bi4m[0]) return sQ0x;
        for (var ba4e = 0; ba4e < bm4q; ba4e++) {
            btM6G = false;
            for (var x4B = 0; x4B < Qe8W.length; x4B++) {
                if (this.bi4m[ba4e].userId == Qe8W[x4B]) {
                    btM6G = true;
                    break
                }
            }
            if (btM6G) continue;
            Qg8Y = this.bi4m[ba4e].nickname.toLowerCase().search(bx4B);
            Qr8j = this.bi4m[ba4e].py ? this.bi4m[ba4e].py.toLowerCase().search(bx4B) : -1;
            if (Qg8Y !== -1 || Qr8j != -1) sQ0x.push(this.bi4m[ba4e])
        }
        return sQ0x
    };
    b3x.cmT7M = function (j4n) {
        a3x.dI5N(this.WO0x, cnr8j, {
            users: j4n
        });
        a3x.w4A(a3x.F4J(this.m4q, "j-item")[0], "j-selected");
        this.fz6t = a3x.F4J(this.m4q, "j-item");
        a3x.Y4c(this.WO0x, "display", "block")
    };
    b3x.Ps7l = function () {
        var sQ0x = a3x.F4J(this.m4q, "j-receiver") || [];
        var hJ7C = [];
        for (var i = 0; i < sQ0x.length; i++) {
            hJ7C.push(a3x.fT6N(sQ0x[i], "data-id"))
        }
        return hJ7C
    };
    b3x.cAf1x = function () {
        var hJ7C = this.Ps7l();
        var sQ0x = [];
        for (var i = 0; i < hJ7C.length; i++) {
            for (var j = 0; j < this.bi4m.length; j++) {
                if (hJ7C[i] == this.bi4m[j].userId) sQ0x.push(this.bi4m[j])
            }
        }
        return sQ0x
    };
    b3x.cmQ7J = function () {
        this.Vs9j()
    };
    y4C.FK4O.L4P = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n4r.oy9p.L4P({
                title: "登录"
            });
            return
        }
        e4i = e4i || {};
        if (e4i.parent === undefined) e4i.parent = document.body;
        !!this.eR6L && this.eR6L.S4W();
        this.eR6L = this.A4E(e4i)
    };
    y4C.FK4O.br4v = function () {
        !!this.eR6L && this.eR6L.S4W()
    };
    y4C.FK4O.Fj4n = function () {
        return this.oA9r()
    };
    y4C.FK4O.cAg1x = function () {
        return this.vq1x()
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        b3x, J4N;
    n4r.GI4M = NEJ.C();
    b3x = n4r.GI4M.O4S(n4r.bij3x);
    J4N = n4r.GI4M.cl5q;
    b3x.bj4n = function () {
        var Ff4j;
        var cmM7F = function (C4G, K4O) {
            Ff4j = Ff4j || [];
            if (K4O != "18") Ff4j.push({
                key: K4O,
                value: C4G
            })
        };
        return function (e4i) {
            this.bk4o(e4i);
            if (e4i.upwards) {
                a3x.w4A(this.m4q, "m-emts-up")
            } else {
                a3x.v4z(this.m4q, "m-emts-up")
            }
            if (e4i.rightwards) {
                a3x.w4A(this.m4q, "m-emts-right")
            } else {
                a3x.v4z(this.m4q, "m-emts-right")
            }
            if (!Ff4j) {
                var bu4y = l4p.ctG9x();
                k4o.ex6r(bu4y, cmM7F)
            }
            var bm4q = Ff4j.length;
            Ff4j.splice(bm4q - 2, 0, {
                key: "18",
                value: "186"
            });
            this.VT9K = Ff4j;
            this.cmL7E = !!e4i.autoHide
        }
    }();
    b3x.ca5f = function () {
        this.cb5g = "ntp-portrait"
    };
    b3x.bS5X = function () {
        this.cd5i();
        var i4m = a3x.F4J(this.m4q, "j-flag");
        this.bK4O = i4m[0];
        this.cmG7z = i4m[1];
        this.cmF7y = i4m[2];
        this.cmE7x = i4m[3];
        h4l.s4w(this.bK4O, "click", this.xw2x.g4k(this));
        h4l.s4w(this.cmG7z, "click", this.EW4a.g4k(this, 1));
        h4l.s4w(this.cmE7x, "click", this.EW4a.g4k(this, 2))
    };
    b3x.btE6y = function (r4v) {
        this.XJ0x = r4v;
        var be4i = (r4v - 1) * 50;
        var i4m = this.VT9K.slice(be4i, Math.min(be4i + 50, this.VT9K.length));
        this.bK4O.innerHTML = a3x.bW5b("jst-portrait", {
            plist: i4m
        }, {
            purl: l4p.bCo8g
        });
        this.cmF7y.innerText = r4v + "/" + Math.ceil(this.VT9K.length / 50)
    };
    b3x.EW4a = function (r4v) {
        var cmD7w = Math.ceil(this.VT9K.length / 50);
        if (r4v == 1 && this.XJ0x == 1 || r4v == 2 && this.XJ0x == cmD7w) return;
        r4v == 1 ? this.btE6y(this.XJ0x - 1) : this.btE6y(this.XJ0x + 1)
    };
    b3x.xw2x = function (d4h) {
        var G4K = h4l.U4Y(d4h, "d:text");
        if (!G4K) return;
        var d4h = {
            url: a3x.u4y(G4K, "url"),
            text: a3x.u4y(G4K, "text")
        };
        this.z4D("onselect", d4h);
        if (this.cmL7E && !d4h.stopped) {
            this.br4v()
        }
    };
    b3x.L4P = function () {
        J4N.L4P.call(this);
        this.btE6y(1)
    }
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        dm5r = c4g("nej.p"),
        bc4g = c4g("nej.h"),
        H4L = c4g("nej.ut"),
        jE7x = /^[#?]+/,
        EU4Y = /#(.*?)$/,
        xz2x = window,
        btD6x = !history.pushState || dm5r.Gz4D.android || !history.auto;
    var Yp0x = function (V4Z, bty6s) {
        xz2x.history[!bty6s ? "pushState" : "replaceState"](null, document.title, V4Z)
    };
    var Yt0x = function () {
        return location.parse(xz2x.location.href)
    };
    Yp0x = Yp0x.es6m(function (d4h) {
        if (!btD6x) return;
        var bh4l = d4h.args;
        d4h.stopped = !0;
        V4Z = bh4l[0].replace(jE7x, "");
        !bh4l[1] ? xz2x.location.hash = V4Z : xz2x.location.replace("#" + V4Z)
    });
    Yt0x = Yt0x.es6m(function (d4h) {
        if (!btD6x) return;
        d4h.stopped = !0;
        var dV6P = EU4Y.test(xz2x.location.href) ? RegExp.$1 : "";
        d4h.value = location.parse(dV6P.replace(jE7x, ""))
    });
    location.redirect = function (V4Z, bty6s) {
        Yp0x(V4Z, bty6s);
        return this
    };
    location.active = function () {
        var eC6w, V4Z, jf7Y, cQ5V, Oi7b;
        var btu6o = function (hA7t) {
            if (!!cQ5V) {
                cQ5V = !1;
                return
            }
            var d4h = {
                oldValue: jf7Y,
                newValue: Yt0x()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h4l.z4D(location, "beforeurlchange", d4h);
                if (d4h.stopped) {
                    if (!!jf7Y) {
                        cQ5V = !0;
                        Yp0x(jf7Y.href, !0)
                    }
                    return
                }
            }
            V4Z = xz2x.location.href;
            jf7Y = d4h.newValue;
            h4l.z4D(location, "urlchange", jf7Y);
            bc4g.brw5B(jf7Y.href)
        };
        var bNA1x = function () {
            if (V4Z != xz2x.location.href) btu6o();
            eC6w = requestAnimationFrame(bNA1x)
        };
        return function (bN4R) {
            if (!!Oi7b) return this;
            Oi7b = !0;
            xz2x = bN4R || window;
            if (btD6x && "onhashchange" in window && dm5r.mC8u.trident2) {
                h4l.s4w(xz2x, "hashchange", btu6o);
                btu6o()
            } else if (!eC6w) {
                eC6w = requestAnimationFrame(bNA1x)
            }
            return this
        }
    }();
    location.parse = function () {
        var gm6g = /^https?:\/\/.*?\//i,
            jE7x = /[?#]/;
        return function (V4Z) {
            var o4s = {
                href: V4Z
            };
            V4Z = (V4Z || "").replace(gm6g, "/").split(jE7x);
            var cz5E = 1;
            if (V4Z[0] == "/" && (V4Z[1] || "").indexOf("/") == 0) cz5E = 2;
            o4s.path = V4Z.splice(0, cz5E).join("?");
            o4s.query = k4o.hE7x(V4Z.join("&"));
            return o4s
        }
    }();
    location.same = function (V4Z) {
        return Yt0x().href == V4Z
    };
    H4L.fG6A.A4E({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        ge6Y = c4g("nm.ut");
    ge6Y.td0x = function (eg6a) {
        var gH7A = {
            text: "",
            start: 0,
            end: 0
        };
        if (eg6a.setSelectionRange) {
            gH7A.start = eg6a.selectionStart;
            gH7A.end = eg6a.selectionEnd;
            gH7A.text = gH7A.start != gH7A.end ? eg6a.value.substring(gH7A.start, gH7A.end) : ""
        } else if (document.selection) {
            var i, YS1x = document.selection.createRange(),
                xC2x = document.body.createTextRange();
            xC2x.moveToElementText(eg6a);
            gH7A.text = YS1x.text;
            gH7A.bookmark = YS1x.getBookmark();
            for (i = 0; xC2x.compareEndPoints("StartToStart", YS1x) < 0 && YS1x.moveStart("character", -1) !== 0; i++) {
                if (eg6a.value.charAt(i) == "\n") {
                    i++
                }
            }
            gH7A.start = i;
            gH7A.end = gH7A.text.length + gH7A.start
        }
        return gH7A
    };
    ge6Y.Zq1x = function (eg6a, gH7A) {
        var xC2x;
        if (!gH7A) {
            gH7A = {
                text: "",
                start: 0,
                end: 0
            }
        }
        eg6a.focus();
        if (eg6a.setSelectionRange) {
            eg6a.setSelectionRange(gH7A.start, gH7A.end)
        } else if (eg6a.createTextRange) {
            xC2x = eg6a.createTextRange();
            if (eg6a.value.length === gH7A.start) {
                xC2x.collapse(false);
                xC2x.select()
            } else {
                xC2x.moveToBookmark(gH7A.bookmark);
                xC2x.select()
            }
        }
    };
    ge6Y.GM4Q = function (eg6a, gH7A, cL5Q) {
        var gH7A = gH7A || {
            text: "",
            start: 0,
            end: 0
        };
        var btj6d, bNU1x, xC2x, RI8A, bOf1x, bOk1x, EP4T;
        this.Zq1x(eg6a, gH7A);
        if (eg6a.setSelectionRange) {
            btj6d = eg6a.value;
            bNU1x = btj6d.substring(0, gH7A.start) + cL5Q + btj6d.substring(gH7A.end);
            bOf1x = bOk1x = gH7A.start + cL5Q.length;
            EP4T = eg6a.scrollTop;
            eg6a.value = bNU1x;
            if (eg6a.scrollTop != EP4T) {
                eg6a.scrollTop = EP4T
            }
            eg6a.setSelectionRange(bOf1x, bOk1x)
        } else if (eg6a.createTextRange) {
            RI8A = document.selection.createRange();
            RI8A.text = cL5Q;
            RI8A.setEndPoint("StartToEnd", RI8A);
            RI8A.select()
        }
        h4l.z4D(eg6a, "keyup")
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        dm5r = c4g("nej.p"),
        k4o = c4g("nej.u"),
        bY5d = c4g("nej.ut"),
        y4C = c4g("nm.w"),
        ge6Y = c4g("nm.ut"),
        b3x;
    y4C.bOs1x = NEJ.C();
    b3x = y4C.bOs1x.O4S(bY5d.cC5H);
    b3x.cs5x = function (e4i) {
        this.cw5B(e4i)
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.ga6U = e4i.txt;
        this.EN4R = e4i.sgtsContainer;
        this.bOv1x = e4i.sgtsList[0];
        this.baq1x = e4i.sgtsItem;
        this.oo9f = e4i.rangeData;
        this.GN4R = e4i.atIndex;
        a3x.w4A(this.baq1x[0], "selected-item");
        this.RV8N()
    };
    b3x.bz4D = function () {
        this.bF4J();
        h4l.mH8z(document.body, "keyup", this.bOD1x.g4k(this));
        h4l.mH8z(document.body, "click", this.bOE1x.g4k(this))
    };
    b3x.RV8N = function () {
        this.bT5Y([
            [document.body, "keyup", this.bOD1x.g4k(this)],
            [document.body, "click", this.bOE1x.g4k(this)],
            [this.ga6U, "keydown", this.bOM1x.g4k(this)],
            [this.ga6U, "keypress", this.bOM1x.g4k(this)],
            [this.bOv1x, "click", this.bON1x.g4k(this)],
            [this.bOv1x, "mouseover", this.EF4J.g4k(this)]
        ])
    };
    b3x.EF4J = function (d4h) {
        var dh5m = h4l.U4Y(d4h);
        var p4t = a3x.F4J(this.EN4R, "selected-item");
        if (a3x.bA4E(dh5m, "j-sgt")) {
            a3x.v4z(p4t[0], "selected-item");
            a3x.w4A(dh5m, "selected-item")
        }
    };
    b3x.bOD1x = function (d4h) {
        var p4t = a3x.F4J(this.EN4R, "selected-item");
        var bm4q = this.baq1x.length;
        var jB7u = d4h.keyCode || d4h.which;
        var r4v, j4n;
        switch (jB7u) {
            case 38:
                r4v = a3x.fT6N(p4t[0], "data-index") - 1 < 0 ? bm4q - 1 : a3x.fT6N(p4t[0], "data-index") - 1;
                a3x.v4z(p4t[0], "selected-item");
                a3x.w4A(this.baq1x[r4v], "selected-item");
                break;
            case 40:
                r4v = parseInt(a3x.fT6N(p4t[0], "data-index")) + 1 >= bm4q ? 0 : parseInt(a3x.fT6N(p4t[0], "data-index")) + 1;
                a3x.v4z(p4t[0], "selected-item");
                a3x.w4A(this.baq1x[r4v], "selected-item");
                break;
            case 13:
                this.bON1x(d4h);
                break;
            case 27:
                this.oA9r();
                break;
            case 32:
                var bl4p = this.ga6U.value;
                var r4v = ge6Y.td0x(this.ga6U);
                if (bl4p.charAt(r4v.start - 1) !== " ") return;
                this.oA9r();
                break
        }
    };
    b3x.bOM1x = function (d4h) {
        var jB7u = d4h.keyCode || d4h.which;
        if (jB7u === 13 || jB7u === 38 || jB7u === 40) {
            h4l.cm5r(d4h);
            d4h.keyCode = 0;
            d4h.which = 0;
            d4h.returnvalue = false
        }
    };
    b3x.bOE1x = function (d4h) {
        var dh5m = d4h.target || d4h.srcElement;
        if (dh5m === this.ga6U) return;
        this.oA9r()
    };
    b3x.bON1x = function (d4h) {
        h4l.bf4j(d4h);
        var p4t = a3x.F4J(this.EN4R, "selected-item")[0];
        var rb0x = d4h.target || d4h.srcElement;
        var t4x = d4h.type;
        if (a3x.bA4E(rb0x, "lst")) return;
        if (t4x == "click") {
            a3x.v4z(p4t, "selected-item");
            a3x.w4A(rb0x, "selected-item")
        } else rb0x = p4t;
        var j4n = rb0x.innerHTML + " ";
        this.oA9r();
        var gH7A = this.oo9f;
        gH7A.start = this.GN4R + 1;
        if (dm5r.di5n.browser == "ie" && dm5r.di5n.version < "9.0") {
            this.ga6U.value = this.ga6U.value.substring(0, gH7A.start) + this.ga6U.value.substring(gH7A.end, this.ga6U.value.length);
            gH7A.end = gH7A.start
        }
        ge6Y.GM4Q(this.ga6U, gH7A, j4n);
        h4l.z4D(this.ga6U, "keyup")
    };
    b3x.oA9r = function (d4h) {
        if (!!this.EN4R) a3x.Y4c(this.EN4R, "display", "none");
        this.S4W()
    };
    b3x.vq1x = function (d4h) {
        if (!!this.EN4R) a3x.Y4c(this.EN4R, "display", "block")
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        y4C = c4g("nm.w"),
        bY5d = c4g("nej.ut"),
        bB4F = c4g("nej.ui"),
        b3x;
    var cmC7v = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var cmz7s = a3x.er6l("m-wgt-atlist");
    var iw7p = a3x.sN0x(cmC7v);
    y4C.bOT1x = NEJ.C();
    b3x = y4C.bOT1x.O4S(bB4F.ef6Z);
    b3x.cs5x = function (e4i) {
        this.fC6w = {};
        this.cw5B()
    };
    b3x.bj4n = function (e4i) {
        this.fC6w.txt = a3x.B4F(e4i.target);
        this.fC6w.data = e4i.data;
        this.fC6w.offset = e4i.offset;
        this.fC6w.rangeData = e4i.rangeData;
        this.fC6w.atIndex = e4i.atIndex;
        this.cmw7p(e4i);
        this.bk4o(e4i);
        this.fC6w.sgtsContainer = this.m4q;
        this.fC6w.sgtsList = a3x.F4J(this.m4q, "lst");
        this.fC6w.sgtsItem = a3x.F4J(this.m4q, "f-thide");
        this.Lb5g(e4i);
        this.cmt7m = y4C.bOs1x.A4E(this.fC6w)
    };
    b3x.bz4D = function (e4i) {
        this.bF4J();
        this.cmt7m.S4W()
    };
    b3x.ca5f = function () {
        this.lD8v = iw7p
    };
    b3x.bS5X = function () {
        this.cd5i()
    };
    b3x.cmw7p = function (e4i) {
        this.m4q = a3x.dq5v(a3x.iz7s(a3x.bW5b(cmz7s, e4i.data)))
    };
    b3x.Lb5g = function (e4i) {
        var bOY1x = a3x.F4J(this.m4q, "selected-item")[0];
        if (bOY1x) a3x.v4z(bOY1x, "selected-item");
        var cP5U = e4i.offset.x + "px";
        var gZ7S = e4i.offset.y + "px";
        a3x.Y4c(this.m4q, "left", cP5U);
        a3x.Y4c(this.m4q, "top", gZ7S)
    }
})();
(function () {
    var c4g = NEJ.P,
        x4B = c4g("nej.j"),
        ge6Y = c4g("nm.ut");
    ge6Y.bPa1x = function (bl4p) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var cY5d = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var GO4S = bl4p.match(cY5d) || [];
        for (var ba4e = 0; ba4e < GO4S.length; ba4e++) {
            GO4S[ba4e] = GO4S[ba4e].split("@")[1]
        }
        GO4S = GO4S.reverse();
        var hJ7C = GUser.userId;
        var cms7l = x4B.tp0x("mentioners" + hJ7C) || [];
        var jv7o = GO4S.concat(cms7l);
        if (jv7o.length > 10) jv7o = jv7o.slice(0, 10);
        x4B.vv1x("mentioners" + hJ7C, jv7o)
    };
    ge6Y.cmr7k = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hJ7C = GUser.userId;
        return x4B.tp0x("mentioners" + hJ7C) || []
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        dm5r = c4g("nej.p"),
        x4B = c4g("nej.j"),
        k4o = c4g("nej.u"),
        bY5d = c4g("nej.ut"),
        y4C = c4g("nm.w"),
        ge6Y = c4g("nm.ut"),
        b3x;
    y4C.bPm1x = NEJ.C();
    b3x = y4C.bPm1x.O4S(bY5d.cC5H);
    b3x.cs5x = function (e4i) {
        this.cw5B(e4i);
        this.bPn1x()
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.ga6U = e4i.txt;
        this.m4q = e4i.body;
        this.bPo1x = e4i.before;
        this.Sp8h = e4i.flag;
        this.cmo7h = e4i.after;
        this.qv0x = [];
        if (dm5r.di5n.browser != "ie") {
            setTimeout(function () {
                this.lM8E()
            }.g4k(this), 0)
        }
        this.RV8N()
    };
    b3x.bz4D = function () {
        this.bF4J();
        if (this.uB1x) this.uB1x.S4W();
        delete this.uB1x
    };
    b3x.RV8N = function () {
        this.bT5Y([
            [this.ga6U, "keyup", this.bPx1x.g4k(this, this.ga6U)],
            [this.ga6U, "click", this.bPx1x.g4k(this, this.ga6U)],
            [this.ga6U, "focus", this.lM8E.g4k(this)]
        ])
    };
    b3x.lM8E = function (d4h) {
        this.oo9f = ge6Y.td0x(this.ga6U)
    };
    b3x.bPn1x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var df5k = window.GUser.userId;
        var V4Z = "/api/user/getfollows/" + df5k;
        var fS6M = x4B.bo4s(V4Z, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j4n) {
                window.GFollowers = JSON.parse(j4n).follow
            }.g4k(this),
            onerror: function (j4n) {},
            onbeforerequest: function (j4n) {}
        })
    };
    b3x.bPD1x = function (index) {
        var C4G = this.ga6U.value,
            be4i, btb6V, bta6U, Tp9g;
        this.bPo1x.innerHTML = k4o.dQ5V(C4G.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var ow9n = a3x.F4J(this.bPo1x, "j-test");
        for (var ba4e = 0; ba4e < ow9n.length; ba4e++) {
            ow9n[ba4e].innerText = " "
        }
        this.Sp8h.innerHTML = C4G.charAt(index);
        this.cmo7h.innerHTML = k4o.dQ5V(C4G.substr(index + 1, C4G.length));
        Tp9g = parseInt(a3x.cX5c(this.ga6U, "lineHeight"));
        a3x.Y4c(this.m4q, "display", "block");
        btb6V = a3x.hM7F(this.Sp8h, this.m4q);
        bta6U = a3x.hM7F(this.ga6U);
        a3x.Y4c(this.m4q, "display", "none");
        var cP5U = btb6V.x + bta6U.x;
        var gZ7S = btb6V.y + bta6U.y + Tp9g;
        be4i = {
            x: cP5U,
            y: gZ7S
        };
        this.cmn7g(be4i)
    };
    b3x.bPx1x = function (eg6a, d4h) {
        h4l.cm5r(d4h);
        var eg6a = eg6a;
        var C4G = eg6a.value;
        var bm4q = C4G.length;
        var r4v = ge6Y.td0x(eg6a).start;
        var bQc1x = 0;
        var jB7u = d4h.keyCode || d4h.which;
        var jv7o;
        this.oo9f = ge6Y.td0x(eg6a);
        var bQd1x = false;
        for (var i = 1; i < 20; i++) {
            jv7o = r4v - i;
            if (C4G.charAt(jv7o) === " ") break;
            if (C4G.charAt(jv7o) === "@") {
                bQd1x = true;
                this.GN4R = bQc1x = jv7o;
                break
            }
        }
        if (bQd1x && d4h.shiftKey === false && jB7u !== 38 && jB7u !== 40) {
            if (jB7u !== 27 && jB7u !== 13) {
                this.uB1x ? this.uB1x.S4W() : null;
                this.bPD1x(bQc1x)
            }
        } else if (jB7u !== 38 && jB7u !== 40 && d4h.keyCode !== 32) {
            this.uB1x ? this.uB1x.S4W() : null
        }
    };
    b3x.cmn7g = function (be4i) {
        var be4i = be4i;
        var j4n = this.uJ1x();
        var e4i = {
            parent: document.body,
            offset: be4i,
            data: j4n,
            target: this.ga6U,
            rangeData: this.oo9f,
            atIndex: this.GN4R
        };
        this.uB1x ? this.uB1x.S4W() : null;
        this.uB1x = y4C.bOT1x.A4E(e4i)
    };
    b3x.uJ1x = function () {
        var cmm7f = ge6Y.td0x(this.ga6U).start;
        var cmj7c = this.GN4R + 1;
        var bQq1x = ge6Y.cmr7k() || [];
        var bQs1x = [];
        var bx4B = this.ga6U.value.substring(cmj7c, cmm7f).toLowerCase();
        bx4B = bx4B.replace(/\[/g, "\\[");
        bx4B = bx4B.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.qv0x = window.GFollowers[0] ? window.GFollowers : []
        } else this.qv0x = [];
        if (!this.qv0x[0]) this.bPn1x();
        for (var ba4e = 0; ba4e < bQq1x.length; ba4e++) {
            for (var x4B = 0; x4B < this.qv0x.length; x4B++) {
                if (this.qv0x[x4B].nickname == bQq1x[ba4e]) bQs1x.push(this.qv0x[x4B])
            }
        }
        this.qv0x = k4o.cbk5p(this.qv0x, bQs1x, {
            union: true,
            begin: true
        });
        var cmi7b = this.qv0x.length;
        var Ux9o = [];
        var Qg8Y, Qr8j;
        if (!this.qv0x[0]) return {
            suggests: Ux9o
        };
        for (var i = 0; i < cmi7b; i++) {
            Qg8Y = this.qv0x[i].nickname.toLowerCase().search(bx4B);
            Qr8j = this.qv0x[i].py ? this.qv0x[i].py.toLowerCase().search(bx4B) : -1;
            if (Qg8Y !== -1 || Qr8j != -1) Ux9o.push(this.qv0x[i]);
            if (Ux9o.length === 10) break
        }
        return {
            suggests: Ux9o
        }
    };
    b3x.Lk5p = function () {
        var gH7A = this.oo9f || {
            text: "",
            start: 0,
            end: 0
        };
        h4l.z4D(this.ga6U, "focus");
        ge6Y.GM4Q(this.ga6U, gH7A, "@");
        this.oo9f = ge6Y.td0x(this.ga6U);
        this.GN4R = gH7A.start;
        this.bPD1x(this.GN4R)
    };
    b3x.Fj4n = function () {
        if (this.uB1x) this.uB1x.S4W()
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        x4B = c4g("nej.j"),
        y4C = c4g("nm.w"),
        bY5d = c4g("nej.ut"),
        bB4F = c4g("nej.ui"),
        b3x;
    var cmh7a = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cmf7Y = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gv7o = a3x.iz7s(cmf7Y);
    var iw7p = a3x.sN0x(cmh7a);
    y4C.Ln5s = NEJ.C();
    b3x = y4C.Ln5s.O4S(bB4F.ef6Z);
    b3x.cs5x = function (e4i) {
        this.fC6w = {};
        this.cw5B()
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i);
        this.fC6w.txt = a3x.B4F(e4i.target);
        this.MZ6T();
        this.Lo5t = y4C.bPm1x.A4E(this.fC6w)
    };
    b3x.bz4D = function (e4i) {
        this.bF4J();
        this.Lo5t.S4W()
    };
    b3x.ca5f = function () {
        this.cb5g = gv7o;
        this.lD8v = iw7p
    };
    b3x.bS5X = function () {
        this.cd5i();
        var i4m = a3x.da5f(a3x.B4F(this.m4q));
        this.fC6w.body = this.m4q;
        this.fC6w.before = i4m[0];
        this.fC6w.flag = i4m[1];
        this.fC6w.after = i4m[2]
    };
    b3x.MZ6T = function () {
        var pb9S = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pb9S.length; i++) {
            if (pb9S[i] === "width" && a3x.cX5c(this.fC6w.txt, pb9S[i]) == "100%") {
                var cmd7W = this.fC6w.txt.offsetWidth;
                if (!cmd7W) {
                    setTimeout(function () {
                        a3x.Y4c(this.m4q, pb9S[i], this.fC6w.txt.offsetWidth + "px")
                    }.g4k(this), 300)
                } else {
                    a3x.Y4c(this.m4q, pb9S[i], this.fC6w.txt.offsetWidth + "px")
                }
                continue
            }
            a3x.Y4c(this.m4q, pb9S[i], a3x.cX5c(this.fC6w.txt, pb9S[i]))
        }
    };
    b3x.Lk5p = function () {
        this.Lo5t.Lk5p()
    };
    b3x.Fj4n = function () {
        this.Lo5t.Fj4n()
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        fo6i = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        ks8k = c4g("nm.c"),
        Q4U = {},
        b3x;
    if (!!ks8k.bsW6Q) return;
    ks8k.bsW6Q = NEJ.C();
    b3x = ks8k.bsW6Q.O4S(H4L.cC5H);
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i)
    };
    b3x.bz4D = function () {
        this.bF4J()
    };
    b3x.El3x = function (eS6M, dE5J, Vk9b) {
        if (Q4U[eS6M]) {
            this.gL7E("register commonJST[" + eS6M + "] duplicate");
            return
        }
        if (!k4o.gr6l(dE5J)) {
            dE5J = ctl.comJST.cmc7V(eS6M, dE5J, Vk9b)
        }
        Q4U[eS6M] = dE5J
    };
    b3x.cma7T = function (Vv9m) {
        if (k4o.eE6y(Vv9m)) {
            k4o.bb4f(Vv9m, function (p4t) {
                ctl.comJST.El3x.apply(this, p4t)
            }, this)
        } else if (k4o.kU8M(Vv9m)) {
            k4o.ex6r(Vv9m, function (eG6A, K4O) {
                ctl.comJST.El3x(K4O, eG6A)
            })
        }
    };
    b3x.cmc7V = function (eS6M, uM1x, Vk9b) {
        uM1x = uM1x || {};
        NEJ.X(uM1x, {
            comJST: this.mY8Q
        });
        if (uM1x.resetDataName && !k4o.eE6y(uM1x.resetDataName)) {
            uM1x.resetDataName = [uM1x.resetDataName]
        }
        return function () {
            var j4n = arguments[0],
                jt7m = arguments[1];
            if (uM1x.resetDataName) {
                var jv7o = {};
                for (var i = 0, ii = uM1x.resetDataName.length; i < ii; i++) {
                    jv7o[uM1x.resetDataName[i]] = arguments[i]
                }
                j4n = jv7o;
                jt7m = arguments[ii]
            }
            NEJ.X(j4n, uM1x, dS6M);
            if (Vk9b) {
                jt7m = jt7m || {};
                NEJ.X(jt7m, Vk9b)
            }
            return a3x.bW5b(eS6M, j4n, jt7m)
        }
    };
    b3x.mY8Q = function (eS6M) {
        if (!Q4U[eS6M]) {
            this.gL7E("commonJST[" + eS6M + "] is unregister");
            return ""
        } else {
            return Q4U[eS6M].apply(null, fo6i.slice.call(arguments, 1))
        }
    };
    b3x.dump = function () {
        return Q4U
    };
    b3x.gL7E = function (clZ7S) {
        if (console && console.log) {
            console.log(clZ7S)
        }
    };
    var dS6M = function (eG6A, K4O) {
        return K4O == "resetDataName"
    };
    c4g("ctl").comJST = ks8k.bsW6Q.gf6Z();
    a3x.cnJ8B({
        comJST: c4g("ctl").comJST.mY8Q
    })
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        bn4r = NEJ.F,
        fo6i = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        ks8k = c4g("nm.c"),
        l4p = c4g("nm.x"),
        Q4U = {},
        b3x;
    if (!!ks8k.bsP6J) return;
    ks8k.bsP6J = NEJ.C();
    b3x = ks8k.bsP6J.O4S(H4L.cC5H);
    b3x.cs5x = function () {
        this.cw5B();
        var e4i = {
            "com-mv-artists": function (fF6z, dU6O, Cj3x, bsO6I) {
                return a3x.bW5b("com-mv-artists", {
                    artists: fF6z,
                    clazz: dU6O,
                    boxClazz: bsO6I,
                    mark: Cj3x || function (cG5L) {
                        return cG5L
                    },
                    escape: k4o.dQ5V,
                    comJST: ctl.comJST.mY8Q
                })
            },
            "com-album-artists": function (fF6z, dU6O, Cj3x, bsO6I) {
                return a3x.bW5b("com-album-artists", {
                    artists: fF6z,
                    clazz: dU6O,
                    boxClazz: bsO6I,
                    mark: Cj3x || function (cG5L) {
                        return cG5L
                    },
                    escape: k4o.dQ5V,
                    comJST: ctl.comJST.mY8Q
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k4o.dQ5V
            },
            "com-user-type": function (dg5l, dU6O, lm8e, Lx6r, bRg2x) {
                return a3x.bW5b("com-user-type", {
                    x: dg5l,
                    clazz: dU6O || "",
                    clazz2: typeof bRg2x == "undefined" ? "icn" : bRg2x,
                    before: lm8e || "",
                    after: Lx6r || "",
                    isEmptyObject: l4p.bKh0x
                })
            }
        };
        for (var D4H in e4i) {
            ctl.comJST.El3x(D4H, e4i[D4H])
        }
    };
    b3x.bj4n = function (e4i) {
        this.bk4o(e4i)
    };
    b3x.bz4D = function () {
        this.bF4J()
    };
    c4g("ctl").comJSTUtil = ks8k.bsP6J.gf6Z()
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        a3x = c4g("nej.e"),
        dm5r = c4g("nej.p"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        x4B = c4g("nej.j"),
        y4C = c4g("nm.w"),
        ge6Y = c4g("nm.ut"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        bsL6F = [2, 3],
        dT6N = ["sn", "db"],
        b3x, J4N, clX7Q = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video"
        },
        Wc0x = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频"
        },
        bRm2x = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        },
        clW7P = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        Eh3x = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        };
    n4r.xR2x = NEJ.C();
    b3x = n4r.xR2x.O4S(n4r.ee6Y);
    J4N = n4r.xR2x.cl5q;
    b3x.bj4n = function (e4i) {
        if (e4i.onclose === undefined) {
            e4i.onclose = this.bRx2x.g4k(this)
        }
        this.bk4o(e4i);
        this.Af2x = e4i.isPub;
        this.jj7c = e4i.rid || -1;
        this.ev6p = e4i.type || -1;
        this.bsC6w = e4i.purl;
        this.LQ6K = e4i.name || "";
        this.LT6N = e4i.author || "";
        this.bsz6t = e4i.authors || "";
        this.Xp0x = e4i.actId;
        this.Xv0x = e4i.actName;
        this.buU6O = e4i.title;
        this.Xy0x = {};
        this.clV7O = e4i.mesg || "";
        this.clM7F = e4i.placeholder || "说点什么吧";
        this.bsx6r = e4i.hideTip;
        this.clK7D = e4i.videoJumpUrl;
        var i4m, fe6Y = +(new Date);
        try {
            i4m = top.localCache.B4F("user") || {}
        } catch (e) {
            i4m = {}
        }
        for (var i = 0, i4m = i4m.bindings || [], eA6u; i < i4m.length; ++i) {
            eA6u = !i4m[i].tokenJsonStr ? null : JSON.parse(i4m[i].tokenJsonStr);
            if (!eA6u || eA6u.expires_in === undefined) continue;
            var Ye0x = parseInt(eA6u.expires_in),
                Yf0x = parseInt(i4m[i].refreshTime),
                clG7z = (Ye0x + Yf0x) * 1e3 - 5 * 60 * 1e3;
            if (clG7z > fe6Y) this.Xy0x[i4m[i].type] = !0
        }
        this.vx1x = y4C.FK4O.A4E({
            parent: this.Yh0x,
            err: this.bvp6j
        });
        if (this.gW7P) {
            this.gW7P.S4W()
        }
        this.gW7P = y4C.Ln5s.A4E({
            parent: document.body,
            target: this.ek6e
        });
        if (this.ev6p == 24 || this.ev6p == 21 || this.DQ3x()) {
            this.ym2x.style.display = "none"
        } else {
            this.ym2x.style.display = "";
            this.nL9C = y4C.bts6m.A4E({
                parent: this.bss5x,
                button: this.ym2x,
                onstartupload: this.bvz6t.g4k(this, true),
                onfinishupload: this.bvz6t.g4k(this, false)
            })
        }
        if (this.DQ3x()) {
            this.pp9g.innerText = "";
            a3x.w4A(this.pp9g, "info-video");
            a3x.w4A(this.bsp5u, "f-hide")
        } else {
            a3x.v4z(this.bsp5u, "f-hide")
        }
    };
    b3x.bz4D = function () {
        this.bF4J();
        if (this.vx1x) {
            this.vx1x.S4W();
            delete this.vx1x
        }
        if (this.gW7P) {
            this.gW7P.S4W();
            delete this.gW7P
        }
        if (this.nL9C) {
            this.nL9C.S4W();
            delete this.nL9C
        }
        if (this.mg8Y) {
            this.mg8Y.S4W();
            delete this.mg8Y
        }
    };
    b3x.ca5f = function () {
        this.cb5g = "m-wgt-sharewin"
    };
    b3x.bS5X = function () {
        this.cd5i();
        this.bvE6y = a3x.da5f(this.m4q)[0];
        var bp4t = a3x.F4J(this.m4q, "j-flag");
        this.qc9T = bp4t.shift();
        this.bvp6j = bp4t.shift();
        this.Yh0x = bp4t.shift();
        this.ek6e = bp4t.shift();
        this.pp9g = bp4t.shift();
        this.bso5t = bp4t.shift();
        this.clF7y = bp4t.shift();
        this.ym2x = bp4t.shift();
        this.cn5s = bp4t.shift();
        this.bss5x = bp4t.shift();
        this.zE2x = bp4t.shift();
        this.cAi1x = bp4t.shift();
        this.bsp5u = bp4t.shift();
        this.ed6X = bp4t.shift();
        this.Zz1x = a3x.F4J(this.bsp5u, "j-t");
        this.BE3x = H4L.FI4M.A4E({
            list: a3x.da5f(this.qc9T),
            selected: "z-slt",
            onchange: this.bsg5l.g4k(this)
        });
        if (dm5r.di5n.browser == "ie" && dm5r.di5n.version < "8.0") {
            a3x.Y4c(this.Yh0x, "position", "relative");
            a3x.Y4c(this.Yh0x, "zIndex", "10")
        }
        h4l.s4w(window, "snsbind", this.MC6w.g4k(this));
        h4l.s4w(this.ek6e, "input", this.fE6y.g4k(this));
        h4l.s4w(this.ek6e, "keyup", this.tO0x.g4k(this));
        h4l.s4w(this.m4q, "click", this.cF5K.g4k(this));
        this.R4V = q4u.brs5x.A4E();
        this.R4V.s4w("onshareall", this.ZG1x.g4k(this, 0));
        this.R4V.s4w("onshareerror", this.im7f.g4k(this));
        this.R4V.s4w("onshareprivate", this.ZG1x.g4k(this, 1));
        this.ZI1x = q4u.yA2x.A4E();
        this.gL7E = q4u.hO7H.A4E();
        try {
            this.MH6B = top.api.sharePermission
        } catch (e) {}
        if (!this.MH6B) {
            this.MH6B = Eh3x;
            x4B.bo4s("/api/event/user/permission", {
                type: "json",
                onload: function (d4h) {
                    if (d4h.code == 200) {
                        this.MH6B = NEJ.EX(Eh3x, d4h)
                    }
                }.g4k(this)
            })
        }
    };
    b3x.bsg5l = function (d4h) {
        d4h.index == 0 ? a3x.v4z(this.bvE6y, "m-plshare") : a3x.w4A(this.bvE6y, "m-plshare");
        this.Yh0x.style.display = d4h.index == 0 ? "none" : "";
        this.clF7y.style.display = d4h.index == 0 ? "" : "none";
        this.ym2x.style.display = d4h.index == 0 ? "" : "none";
        if (this.ev6p == 24 || this.ev6p == 21) {
            this.ym2x.style.display = "none"
        }
        this.bvp6j.style.display = "none";
        this.ek6e.value = "";
        this.bZ5e();
        this.Dx3x();
        if (d4h.index == 0) {
            var cy5D = a3x.cX5c(this.ek6e, "width");
            if (cy5D == "auto" || !cy5D) {
                return
            } else {
                if (this.gW7P) {
                    this.gW7P.S4W()
                }
                this.gW7P = y4C.Ln5s.A4E({
                    parent: document.body,
                    target: this.ek6e
                })
            }
            this.bss5x.style.display = ""
        } else {
            if (this.gW7P) {
                this.gW7P.S4W();
                delete this.gW7P
            }
            this.bss5x.style.display = "none"
        }
    };
    b3x.cF5K = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action");
        if (!f4j) return;
        if (a3x.u4y(f4j, "action") == "search") {
            h4l.cm5r(d4h)
        } else if (a3x.u4y(f4j, "default") === undefined) {
            h4l.cm5r(d4h)
        }
        switch (a3x.u4y(f4j, "action")) {
            case "txt":
                this.lM8E();
                break;
            case "search":
                if (this.DQ3x()) {
                    top.location.href = this.clK7D
                } else if (this.Af2x && this.ev6p != 24) {
                    if (this.mg8Y) {
                        this.mg8Y.S4W()
                    }
                    this.mg8Y = y4C.buA6u.A4E({
                        parent: this.m4q.parentNode,
                        onfinish: this.bse5j.g4k(this),
                        oncancel: this.clA7t.g4k(this)
                    });
                    this.bsd5i = true;
                    this.m4q.style.display = "none";
                    this.Dw3x(this.jj7c < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case "at":
                h4l.sF0x(d4h);
                !!this.gT7M && this.gT7M.br4v();
                this.gW7P.Lk5p();
                this.fN6H();
                break;
            case "emot":
                h4l.sF0x(d4h);
                !!this.gW7P && this.gW7P.Fj4n();
                if (!this.gT7M) {
                    this.gT7M = n4r.GI4M.A4E({
                        parent: this.bso5t
                    });
                    this.gT7M.s4w("onselect", this.xw2x.g4k(this))
                }
                this.gT7M.L4P();
                break;
            case "upload":
                break;
            case "sns":
                h4l.bf4j(d4h);
                var bsb5g, bx4B, t4x = a3x.u4y(f4j, "type");
                if (!this.Xy0x[t4x]) {
                    bsb5g = f4j.href.split("?");
                    bx4B = k4o.hE7x(bsb5g[1]);
                    bx4B["csrf_token"] = x4B.gV7O("__csrf");
                    top.open(bsb5g[0] + "?" + k4o.de5j(bx4B));
                    return
                }
                var bu4y = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                l4p.Be3x(f4j, "u-slg-" + bu4y[t4x] + "-gray");
                break;
            case "close":
                !!this.gT7M && this.gT7M.br4v();
                this.bRx2x();
                break;
            case "share":
                h4l.bf4j(d4h);
                if (this.DQ3x()) {
                    if (!a3x.bA4E(f4j, "u-btn2-2-dis")) {
                        this.clz7s()
                    }
                } else if (a3x.bA4E(f4j, "u-btn2-2-dis")) {
                    if (!this.MH6B.pubEventWithoutResource && this.jj7c < 0) {
                        this.cly7r()
                    } else {}
                } else if (this.jj7c < 0 && !this.ek6e.value && this.nL9C && this.nL9C.ON7G().length == 0) {
                    n4r.X4b.L4P({
                        type: 2,
                        tip: "请输入内容"
                    })
                } else {
                    this.clx7q()
                }
                break
        }
    };
    b3x.cly7r = function () {
        var sH0x = 0,
            brQ5V = function () {
                if (sH0x % 2) {
                    a3x.v4z(this.pp9g, "z-show")
                } else {
                    a3x.w4A(this.pp9g, "z-show")
                }
                sH0x++;
                if (sH0x > 5) {
                    clearInterval(eC6w)
                }
            },
            eC6w;
        return function () {
            sH0x = 0;
            clearInterval(eC6w);
            eC6w = setInterval(brQ5V.g4k(this), 200)
        }
    }();
    b3x.MC6w = function (o4s) {
        o4s = o4s.result;
        this.Xy0x[o4s.type] = !0;
        var r4v = k4o.dd5i(bsL6F, o4s.type),
            cc5h = "u-slg-" + dT6N[r4v] + "-gray";
        a3x.v4z(this.Zz1x[r4v], cc5h)
    };
    b3x.bse5j = function (bv4z) {
        var j4n = bv4z.data;
        this.jj7c = bv4z.id;
        this.ev6p = bv4z.type;
        this.m4q.style.display = "";
        this.Dw3x(this.buU6O);
        this.mg8Y && this.mg8Y.S4W();
        this.bsd5i = false;
        this.bsC6w = j4n.picUrl;
        this.LQ6K = j4n.title || "";
        this.LT6N = j4n.author || "";
        this.bsz6t = j4n.authors || "";
        this.clw7p();
        this.bbe1x()
    };
    b3x.clA7t = function () {
        this.mg8Y && this.mg8Y.S4W();
        this.m4q.style.display = "";
        this.Dw3x(this.buU6O);
        this.bsd5i = false;
        this.bbe1x()
    };
    b3x.xw2x = function (d4h) {
        var bl4p = "[" + d4h.text + "]";
        ge6Y.GM4Q(this.ek6e, this.oo9f, bl4p);
        this.fN6H()
    };
    b3x.fE6y = function (d4h) {
        dm5r.di5n.browser == "ie" && dm5r.di5n.version < "7.0" ? setTimeout(this.fN6H.g4k(this), 0) : this.fN6H()
    };
    b3x.tO0x = function (d4h) {
        this.lM8E();
        if (d4h.keyCode == 8) this.fN6H()
    };
    b3x.fN6H = function () {
        this.lM8E();
        this.Dx3x()
    };
    b3x.Dx3x = function () {
        var bm4q = Math.ceil(k4o.fm6g(this.ek6e.value.trim()) / 2);
        this.cn5s.innerText = 140 - bm4q;
        bm4q > 140 ? a3x.eQ6K(this.cn5s, "s-fc4", "s-fc6") : a3x.eQ6K(this.cn5s, "s-fc6", "s-fc4")
    };
    b3x.clx7q = function () {
        if (this.cD5I()) return;
        if (k4o.fm6g(this.ek6e.value.trim()) > 280) {
            this.bZ5e("字数超过140个字符");
            return
        }
        var t4x = this.BE3x.rP0x(),
            j4n;
        if (t4x == 0) {
            for (var i = 0, Hd4h = []; i < this.Zz1x.length; ++i) {
                if (!a3x.bA4E(this.Zz1x[i], "u-slg-" + dT6N[i] + "-gray")) Hd4h.push(bsL6F[i])
            }
            this.cD5I(!0);
            j4n = {
                id: this.jj7c,
                msg: this.ek6e.value.trim(),
                type: this.bbn1x(this.ev6p),
                picUrl: this.bsC6w,
                snsTypes: Hd4h.join(","),
                isPub: this.Af2x
            };
            if (this.Xp0x > 0) {
                j4n.actId = this.Xp0x;
                if (this.Xv0x) {
                    j4n.msg = "#" + this.Xv0x + "#" + j4n.msg
                }
            }
            var nx9o = this.nL9C && this.nL9C.ON7G();
            if (nx9o && nx9o.length) {
                j4n.pics = nx9o
            }
            this.R4V.cpt8l(j4n)
        } else {
            var sQ0x = this.vx1x.Ps7l();
            if (sQ0x.length <= 0) {
                this.bZ5e("请至少选择一位好友");
                return
            }
            this.R4V.cpr8j({
                data: {
                    id: this.jj7c,
                    msg: this.ek6e.value.trim(),
                    type: this.bbn1x(this.ev6p),
                    userIds: "[" + sQ0x.join(",") + "]"
                }
            })
        }
    };
    b3x.clz7s = function () {
        if (this.cD5I()) {
            return
        }
        this.gL7E.fu6o("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k4o.fm6g(this.ek6e.value.trim()) > 280) {
            this.bZ5e("字数超过140个字符");
            return
        }
        this.cD5I(!0);
        var j4n = {
                msg: this.ek6e.value.trim() || "",
                type: "video"
            },
            clr7k = {
                videoId: this.jj7c
            };
        if (this.Xp0x > 0) {
            j4n.actId = this.Xp0x;
            if (this.Xv0x) {
                j4n.msg = "#" + this.Xv0x + "#" + j4n.msg
            }
        }
        j4n.videoinfo = JSON.stringify(clr7k);
        this.R4V.cpq8i({
            data: {
                videoId: this.jj7c,
                commit: true
            },
            data2: j4n,
            snsTypes: ""
        })
    };
    b3x.ZG1x = function (t4x, o4s) {
        this.cD5I(!1);
        this.br4v();
        if (!this.bsx6r) {
            if (this.DQ3x()) {
                n4r.X4b.L4P({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n4r.X4b.L4P({
                    tip: "分享成功" + (o4s.point > 0 ? ' 获得<em class="s-fc6">' + o4s.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h4l.z4D(n4r.xR2x, "sharesuccess", {
            isPrivate: t4x,
            rid: this.jj7c,
            rtype: this.ev6p,
            data: o4s.event
        });
        this.z4D("onshare")
    };
    b3x.im7f = function (o4s) {
        this.cD5I(!1);
        var bE4I = "分享失败";
        if (o4s.code) {
            switch (o4s.code) {
                case 404:
                    bE4I = "分享的资源不存在";
                    break;
                case 407:
                    bE4I = "输入内容包含有关键字";
                    break;
                case 408:
                    bE4I = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bE4I = o4s.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l4p.fh6b({
                        clazz: "m-layer-w2",
                        btntxt: "知道了",
                        message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                    })
            }
        }
        this.bZ5e(bE4I)
    };
    b3x.lM8E = function () {
        this.oo9f = ge6Y.td0x(this.ek6e)
    };
    b3x.bZ5e = function (bE4I) {
        this.dH5M(this.ed6X, bE4I)
    };
    b3x.cD5I = function (cQ5V) {
        return this.dP5U(this.zE2x, cQ5V, "分享", "分享中...")
    };
    b3x.bbn1x = function (jP8H) {
        return clX7Q[jP8H] || ""
    };
    b3x.clq7j = function () {
        var eg6a, tu0x = this.bbn1x(this.ev6p);
        this.pp9g.style.display = "";
        if (this.jj7c < 0) {
            this.pp9g.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.LQ6K) {
                this.pp9g.style.display = "none";
                return
            }
            var bbK2x = this.Af2x && this.ev6p != 24;
            eg6a = (Wc0x[tu0x] ? Wc0x[tu0x] + "：" : "") + this.LQ6K + (bRm2x[tu0x] || " ") + (tu0x == "mv" || tu0x == "album" ? this.bsz6t || this.LT6N : this.LT6N);
            a3x.dI5N(this.pp9g, "m-xwgt-share-infobar", {
                canChange: bbK2x,
                info: eg6a
            });
            if (bbK2x) {
                a3x.v4z(this.pp9g, "z-dis")
            } else {
                a3x.w4A(this.pp9g, "z-dis")
            }
        }
        a3x.v4z(this.pp9g, "info-video")
    };
    b3x.clw7p = function () {
        var tu0x = this.bbn1x(this.ev6p),
            eg6a = (Wc0x[tu0x] ? Wc0x[tu0x] + "：" : "") + this.LQ6K + (bRm2x[tu0x] || " ") + (tu0x == "mv" || tu0x == "album" ? this.bsz6t || this.LT6N : this.LT6N);
        bbK2x = this.Af2x && this.ev6p != 24;
        if (this.DQ3x()) {} else {
            a3x.v4z(this.pp9g, "info-video");
            a3x.dI5N(this.pp9g, "m-xwgt-share-infobar", {
                canChange: bbK2x,
                isPub: this.Af2x,
                info: eg6a
            })
        }
    };
    b3x.bRN2x = function () {
        var Hg4k = this.ek6e.value;
        if (this.Af2x) {
            if (!!this.bsd5i) {
                return !!Hg4k && !!Hg4k.length || !!this.nL9C && this.nL9C.ON7G().length > 0
            } else {
                return !(this.jj7c < 0) || !!Hg4k && !!Hg4k.length || !!this.nL9C && this.nL9C.ON7G().length > 0
            }
        } else {
            return !!Hg4k && !!Hg4k.length || !!this.nL9C && this.nL9C.ON7G().length > 0
        }
    };
    b3x.bbe1x = function () {
        var bwL7E = false;
        if (!this.Af2x || this.MH6B.pubEventWithoutResource || !(this.jj7c < 0)) {
            bwL7E = true
        }
        if (bwL7E) {
            a3x.v4z(this.zE2x, "u-btn2-2-dis")
        } else {
            a3x.w4A(this.zE2x, "u-btn2-2-dis")
        }
    };
    b3x.bvz6t = function (brF5K) {
        if (brF5K) {
            a3x.w4A(this.zE2x, "u-btn2-2-dis")
        } else {
            this.bbe1x()
        }
    };
    b3x.bRx2x = function (d4h) {
        if (d4h) {
            d4h.stopped = true
        }
        if (this.bRN2x()) {
            l4p.gJ7C({
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function (W4a) {
                    if (W4a == "ok") {
                        this.z4D("forceclose", {});
                        this.br4v()
                    }
                }.g4k(this)
            })
        } else {
            this.z4D("forceclose", {});
            this.br4v()
        }
    };
    b3x.Dw3x = function (eb6V, dK5P) {
        this.oq9h.zB2x(eb6V, dK5P)
    };
    b3x.bca2x = function (t4x) {
        this.gL7E.fu6o("page", {
            type: t4x
        })
    };
    b3x.DQ3x = function () {
        return this.ev6p == 39
    };
    b3x.L4P = function () {
        var cln7g = function (p4t, r4v) {
            var cc5h = "u-slg-" + dT6N[r4v] + "-gray";
            !this.Xy0x[bsL6F[r4v]] ? a3x.w4A(p4t, cc5h) : a3x.v4z(p4t, cc5h)
        };
        return function () {
            J4N.L4P.call(this);
            this.m4q.style.display = "";
            this.bZ5e();
            this.cD5I(!1);
            this.BE3x.Mz6t(0);
            this.ek6e.focus();
            this.ek6e.value = this.clV7O || "";
            this.ek6e.placeholder = this.clM7F || "";
            if (!this.DQ3x()) {
                this.clq7j()
            } else {
                a3x.w4A(this.pp9g, "info-video");
                a3x.dI5N(this.pp9g, "m-xwgt-share-videobar", {
                    title: this.LQ6K,
                    picUrl: this.bsC6w
                })
            }
            this.fN6H();
            this.vx1x.cmQ7J();
            k4o.bb4f(this.Zz1x, cln7g, this);
            this.lM8E();
            if (this.Af2x) {
                this.qc9T.style.display = "none"
            } else {
                this.qc9T.style.display = ""
            }
            this.bbe1x()
        }
    }();
    b3x.br4v = function (d4h) {
        J4N.br4v.call(this);
        !!this.gT7M && this.gT7M.br4v();
        if (this.vx1x) {
            this.vx1x.S4W();
            delete this.vx1x
        }
        if (this.gW7P) {
            this.gW7P.S4W();
            delete this.gW7P
        }
        if (this.nL9C) {
            this.nL9C.S4W();
            delete this.nL9C
        }
        if (this.bwW7P) {
            this.bwW7P = this.bwW7P.S4W()
        }
        if (this.mg8Y) {
            this.mg8Y.S4W();
            delete this.mg8Y
        }
    };
    l4p.mL8D = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e4i.title === undefined) {
            e4i.title = "分享"
        }
        if (e4i.actId && e4i.type != 39) {
            var t4x = clW7P[e4i.resourceType],
                ci5n = e4i.resourceJson,
                hB7u;
            if (k4o.fA6u(ci5n)) {
                try {
                    ci5n = JSON.parse(ci5n)
                } catch (e) {}
            }
            if (t4x) {
                hB7u = l4p.bNi0x(t4x, ci5n);
                e4i.name = hB7u.title;
                e4i.author = hB7u.author;
                e4i.picUrl = hB7u.picUrl;
                e4i.type = t4x;
                e4i.rid = (ci5n || []).id
            }
        }
        n4r.xR2x.L4P(e4i)
    };
    H4L.fG6A.A4E({
        element: n4r.xR2x,
        event: ["sharesuccess"]
    })
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        x4B = c4g("nej.j"),
        n4r = c4g("nm.l"),
        y4C = c4g("nm.w"),
        bB4F = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b3x, J4N;
    n4r.bcu2x = NEJ.C();
    b3x = n4r.bcu2x.O4S(n4r.ee6Y);
    J4N = n4r.bcu2x.cl5q;
    b3x.cs5x = function () {
        this.cw5B()
    };
    b3x.bS5X = function () {
        this.cd5i();
        var i4m = a3x.F4J(this.m4q, "j-flag");
        h4l.s4w(i4m[0], "click", this.CD3x.g4k(this))
    };
    b3x.ca5f = function () {
        this.cb5g = "m-import-ok"
    };
    b3x.bj4n = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.title = "歌曲同步完成";
        this.bk4o(e4i)
    };
    b3x.bz4D = function () {
        this.bF4J()
    };
    b3x.CD3x = function (d4h) {
        this.br4v();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b3x.zc2x = function () {
        this.br4v()
    };
    b3x.bNe0x = function (d4h) {
        if (d4h.keyCode == 13) this.CA3x()
    }
})();
(function () {
    var c4g = NEJ.P,
        Z4d = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        x4B = c4g("nej.j"),
        N4R = c4g("nej.p"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        y4C = c4g("nm.w"),
        bB4F = c4g("nej.ui"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b3x, J4N;
    n4r.bwZ7S = NEJ.C();
    b3x = n4r.bwZ7S.O4S(n4r.ee6Y);
    b3x.ca5f = function () {
        this.cb5g = "m-programtips-layer"
    };
    b3x.bS5X = function () {
        this.cd5i();
        this.bO4S = a3x.F4J(this.m4q, "j-flag")
    };
    b3x.bj4n = function (e4i) {
        e4i.clazz = " m-layer-programtips";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "付费内容提示";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bk4o(e4i);
        this.gO7H = e4i.id;
        this.clm7f = e4i.radiotype;
        this.la8S = location.protocol + "//" + (this.brv5A() || "music.163.com") + "/m/" + this.clm7f + "?id=" + this.gO7H;
        this.cll7e()
    };
    b3x.bz4D = function () {
        this.bF4J()
    };
    b3x.zc2x = function () {
        this.br4v()
    };
    b3x.CD3x = function (d4h) {
        this.z4D("onok", C4G);
        this.br4v()
    };
    l4p.bxf7Y = function (e4i) {
        n4r.bwZ7S.A4E(e4i).L4P()
    };
    b3x.cll7e = function () {
        x4B.bo4s("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k4o.de5j({
                url: this.la8S,
                size: 180
            }),
            onload: function (j4n) {
                if (j4n.code == 200) {
                    this.clj7c(j4n.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g4k(this)
        })
    };
    b3x.brv5A = function () {
        var NF7y = location.host;
        if (NF7y.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b3x.clj7c = function (jy7r) {
        this.bO4S[0].style.backgroundImage = "url(" + jy7r + ")"
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        dm5r = c4g("nej.p"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        x4B = c4g("nej.j"),
        q4u = c4g("nm.d"),
        l4p = c4g("nm.x"),
        E4I = c4g("nm.m"),
        n4r = c4g("nm.l"),
        M4Q = c4g("nm.m.f"),
        b3x, J4N;
    E4I.cW5b = NEJ.C();
    b3x = E4I.cW5b.O4S(H4L.dp5u);
    b3x.bH4L = function () {
        var qj9a = !1;
        return function () {
            if (qj9a) return;
            qj9a = !0;
            this.bM4Q();
            if (top == self) {
                return
            }
            this.sV0x = a3x.B4F("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bxj7c()
            }
            H4L.fG6A.A4E({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bT5Y([
                [window, "scroll", this.zp2x.g4k(this)],
                [document, "keyup", this.clh7a.g4k(this)],
                [document.body, "click", this.rL0x.g4k(this)],
                [document, "mouseup", this.clg7Z.g4k(this)],
                [this.sV0x, "click", this.NB7u.g4k(this)],
                [q4u.rO0x, "message", this.uy1x.g4k(this)]
            ]);
            l4p.cpz8r(document.body);
            this.zp2x();
            if (this.zo2x !== false && typeof GUser !== "undefined" && GUser.userId > 0) q4u.rO0x.gf6Z().uP1x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dm5r.di5n.browser == "ie" && parseInt(dm5r.di5n.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gI7B = top.player.getPlaying();
                    if (gI7B && gI7B.track && gI7B.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gI7B.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.yE2x.g4k(this);
            this.kC8u = q4u.hO7H.A4E();
            window.log = this.kP8H.g4k(this);
            var sK0x = location.search;
            if (sK0x) {
                var bx4B = sK0x.substr(sK0x.indexOf("?") + 1),
                    fW6Q = k4o.hE7x(bx4B);
                if (fW6Q && fW6Q["_hash"]) location.hash = fW6Q["_hash"]
            }
        }
    }();
    b3x.clh7a = function (d4h) {
        var f4j = h4l.U4Y(d4h);
        try {
            if (d4h.keyCode == 80 && l4p.bIO9F() || ["textarea", "input"].indexOf(f4j.tagName.toLowerCase()) >= 0) return;
            h4l.z4D(top.document, "keyup", {
                ctrlKey: d4h.ctrlKey,
                keyCode: d4h.keyCode
            })
        } catch (e) {}
    };
    b3x.rL0x = function (d4h) {
        var f4j = h4l.U4Y(d4h);
        if (f4j && f4j.tagName == "INPUT") return;
        var f4j = h4l.U4Y(d4h, "d:pid");
        if (f4j) {
            h4l.cm5r(d4h);
            var oL9C = a3x.u4y(f4j, "pid"),
                zj2x = a3x.u4y(f4j, "ptype"),
                W4a = a3x.u4y(f4j, "action") || "play";
            switch (W4a) {
                case "subscribe":
                    l4p.mf8X({
                        tracks: [oL9C]
                    });
                    break
            }
        }
        f4j = h4l.U4Y(d4h, "d:resAction");
        if (f4j && f4j.className.indexOf("-dis") == -1) {
            var cH5M = a3x.u4y(f4j, "resId"),
                t4x = a3x.u4y(f4j, "resType"),
                bri5n = a3x.u4y(f4j, "resRadiotype"),
                brh5m = a3x.u4y(f4j, "resRadioid"),
                dZ6T = a3x.u4y(f4j, "resFrom"),
                j4n = a3x.u4y(f4j, "resData"),
                W4a = a3x.u4y(f4j, "resAction"),
                buo6i = a3x.u4y(f4j, "resCopyright"),
                Up9g = a3x.u4y(f4j, "resAuditstatus");
            if (W4a != "log" && W4a != "bilog") h4l.cm5r(d4h);
            switch (W4a) {
                case "log":
                    j4n = (j4n || "").split("|");
                    if (!!j4n[0]) {
                        var bd4h = {
                            id: cH5M,
                            alg: j4n[2] || "itembased",
                            scene: j4n[3],
                            position: j4n[1] || 0
                        };
                        if (!!j4n[4]) bd4h.srcid = j4n[4];
                        window.log(j4n[0], bd4h)
                    }
                    break;
                case "bilog":
                    var bnK4O = a3x.u4y(f4j, "logAction"),
                        bnM4Q = a3x.u4y(f4j, "logJson");
                    window.log(bnK4O, bnM4Q);
                    break;
                case "share":
                    if (Up9g && Up9g == 1) {
                        l4p.if7Y("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cH5M, t4x, a3x.u4y(f4j, "resPic"), a3x.u4y(f4j, "resName"), a3x.u4y(f4j, "resAuthor"), a3x.u4y(f4j, "resAuthors"))
                    }
                    break;
                case "fav":
                case "subscribe":
                    if (t4x == 18) {
                        var pI9z = a3x.u4y(f4j, "resLevel"),
                            qG0x = a3x.u4y(f4j, "resFee");
                        if (pI9z == 10) {
                            l4p.uv1x(qG0x, cH5M, "song");
                            break
                        }
                        l4p.mf8X({
                            tracks: [cH5M]
                        })
                    }
                    break;
                case "download":
                    l4p.KS5X({
                        id: cH5M,
                        type: t4x
                    });
                    break;
                case "programtips":
                    if (Up9g && Up9g == 1) {
                        l4p.if7Y("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l4p.bxf7Y({
                            id: brh5m,
                            radiotype: bri5n
                        })
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d4h)
        } catch (e) {}
    };
    b3x.clg7Z = function (d4h) {
        try {
            h4l.z4D(top.document, "mouseup")
        } catch (e) {}
    };
    b3x.zp2x = function () {
        var clf7Y = function () {
            var ch5m = window.innerHeight;
            if (!k4o.uW1x(ch5m)) ch5m = (document.documentElement || document.body).clientHeight;
            return ch5m
        };
        return function (d4h) {
            if (!this.sV0x) return;
            var Ut9k = clf7Y(),
                fO6I = document.documentElement.scrollTop || document.body.scrollTop;
            a3x.Y4c(this.sV0x, "display", fO6I > 0 ? "" : "none");
            if (dm5r.di5n.browser == "ie" && dm5r.di5n.version < "7.0") {
                var gk6e = Math.min(document.body.clientHeight, Ut9k + fO6I) - 204;
                a3x.Y4c(this.sV0x, "top", gk6e + "px")
            }
        }
    }();
    b3x.NB7u = function (d4h) {
        h4l.cm5r(d4h);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b3x.yE2x = function () {
        var bre5j = function (d4h) {
            h4l.z4D(window, "share", d4h)
        };
        return function (cH5M, t4x, CZ3x, T4X, NY7R, NZ7S) {
            l4p.mL8D({
                rid: cH5M,
                type: t4x,
                purl: CZ3x,
                name: T4X,
                author: NY7R,
                authors: NZ7S,
                onshare: bre5j.g4k(this)
            })
        }
    }();
    b3x.kP8H = function (W4a, bd4h) {
        try {
            top.log(W4a, bd4h)
        } catch (e) {
            switch (W4a) {
                case "play":
                    this.kC8u.ez6t(bd4h);
                    break;
                case "search":
                    this.kC8u.bCV8N(bd4h);
                    break;
                default:
                    this.kC8u.fu6o(W4a, bd4h)
            }
        }
    };
    b3x.bxj7c = function () {
        var UE9v, bqY5d = false,
            bs4w = [45, 60];
        var cle7X = function (bE4I) {
            if (bE4I.title != "MailBoxImport") return;
            var P4T = JSON.parse(bE4I.content || "null") || Z4d;
            if (P4T.status == 10) {
                n4r.bcu2x.A4E().L4P();
                window.clearTimeout(UE9v)
            }
        };
        var tZ1x = function (d4h) {
            if (d4h.code == 200) {
                if (d4h.status == 1) {
                    h4l.s4w(q4u.BM3x, "message", cle7X.g4k(this));
                    q4u.BM3x.A4E().bow5B();
                    bqY5d = true
                } else {
                    if (bqY5d) {
                        if (d4h.status == 10) {
                            n4r.bcu2x.A4E().L4P();
                            h4l.gF7y(q4u.BM3x, "message");
                            window.clearTimeout(UE9v);
                            bqY5d = false
                        }
                    } else {
                        window.clearTimeout(UE9v)
                    }
                }
            }
        };
        return function () {
            var sY0x = bs4w.shift() * 1e3;
            x4B.bo4s("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: tZ1x.g4k(this)
            });
            if (sY0x) {
                UE9v = window.setTimeout(arguments.callee, sY0x)
            }
        }
    }();
    b3x.uy1x = function (d4h) {
        try {
            top.polling(d4h)
        } catch (e) {}
    }
})()