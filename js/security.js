// @license Proprietary - avtoolspro.com
!(function () {
    "use strict";
    var e = window;
    try {
        Object.defineProperty(e, "_avp", { value: 1, writable: !1, configurable: !1 });
    } catch (e) {}
    // Debugger trap disabled for development
    // setInterval(function () {
    //     try {
    //         (function () {}).constructor("debugger")();
    //     } catch (e) {}
    // }, 2e3),
        (e.navigator.webdriver || e.callPhantom || e._phantom) && (document.body.innerHTML = "<h1>Access Denied</h1>");
})(),
    /* @preserve Protected by avtoolspro.com - Unauthorized use prohibited */
    (function () {
        if ("undefined" != typeof window) {
            Object.defineProperty(window, "_$av", { value: "protected", writable: !1, configurable: !1 });
            var e = "avtoolspro_" + Date.now().toString(36);
            if (
                (Object.defineProperty(window, "_$avIntegrity", {
                    get: function () {
                        return e;
                    },
                    set: function () {
                        console.warn("Tampering detected");
                    },
                    configurable: !1,
                }),
                "undefined" != typeof process || "undefined" != typeof require)
            )
                throw new Error("Invalid environment");
            setTimeout(function () {
                return (
                    !!(
                        window.navigator.webdriver ||
                        window.document.documentElement.getAttribute("webdriver") ||
                        window.callPhantom ||
                        window._phantom ||
                        window.__nightmare ||
                        window.Buffer ||
                        (window.navigator.plugins &&
                            0 === window.navigator.plugins.length &&
                            -1 !== navigator.userAgent.indexOf("HeadlessChrome"))
                    ) && ((document.body.innerHTML = "<h1>Access Denied</h1>"), !0)
                );
            }, 1e3);
        }
    })();
