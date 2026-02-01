import { _jsx, _jsxs, ResetConfirmModal, _0xac743b } from '../utils.js';

const { useState, useEffect, useRef } = React;

function BrightnessCalculator() {
    const [e, t] = useState(500),
        [s, a] = useState("lcd"),
        [r, l] = useState(null),
        [i, n] = useState(!1),
        o = [
            { value: "lcd", label: "LCD/LED Display", typicalNits: "300-500", maxNits: 700 },
            { value: "led", label: "Commercial LED", typicalNits: "500-1000", maxNits: 1500 },
            { value: "dvled", label: "Direct View LED", typicalNits: "800-2000", maxNits: 5e3 },
            { value: "projector", label: "Projector", typicalNits: "100-300", maxNits: 500 },
        ],
        d =
            (c = e) < 100
                ? { label: "Dark", color: "purple" }
                : c < 300
                  ? { label: "Dim", color: "indigo" }
                  : c < 500
                    ? { label: "Moderate", color: "blue" }
                    : c < 750
                      ? { label: "Bright", color: "yellow" }
                      : c < 1500
                        ? { label: "Very Bright", color: "orange" }
                        : { label: "Outdoor", color: "red" };
    var c;
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-4 sm:mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-900",
                        children: "Display Brightness Calculator",
                    }),
                    r !== null &&
                        _jsx("button", {
                            onClick: () => n(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: i,
                onConfirm: () => {
                    t(500), a("lcd"), l(null), n(!1);
                },
                onCancel: () => n(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Determines the minimum display brightness (nits) required for your environment based on ambient light levels. Uses AVIXA standards to ensure adequate contrast ratio for content visibility in different lighting conditions.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-blue-50 rounded-xl p-4 sm:p-5 mb-6 border border-blue-200",
                children: [
                    _jsx("h2", {
                        className: "text-base sm:text-lg font-semibold text-blue-800 mb-2 sm:mb-3",
                        children: "AVIXA Display Brightness Standards",
                    }),
                    _jsxs("p", {
                        className: "text-xs sm:text-sm text-blue-700 mb-3",
                        children: [
                            "AVIXA recommends display brightness based on ambient light conditions to ensure optimal viewing. The minimum recommended brightness should be approximately ",
                            _jsx("strong", { children: "3× the ambient light level" }),
                            " (in nits) to maintain adequate contrast for content visibility.",
                        ],
                    }),
                    _jsx("div", {
                        className: "bg-white rounded-lg p-3 border border-blue-200 mb-3",
                        children: _jsxs("p", {
                            className: "text-xs sm:text-sm font-mono text-blue-800",
                            children: [
                                _jsx("strong", { children: "Formula:" }),
                                " Minimum Nits = (Ambient Lux ÷ π) × 3",
                            ],
                        }),
                    }),
                    _jsxs("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",
                        children: [
                            _jsxs("div", {
                                className: "bg-white p-2 rounded border border-blue-200 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "7:1" }),
                                    _jsx("div", { className: "text-blue-600", children: "Min Contrast (Text)" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-2 rounded border border-blue-200 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "20:1" }),
                                    _jsx("div", { className: "text-blue-600", children: "Good Contrast" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-2 rounded border border-blue-200 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "100:1+" }),
                                    _jsx("div", { className: "text-blue-600", children: "Excellent Contrast" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-2 rounded border border-blue-200 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "3-5×" }),
                                    _jsx("div", { className: "text-blue-600", children: "Brightness vs Ambient" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 border",
                children: [
                    _jsx("h2", {
                        className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                        children: "Environment & Display Settings",
                    }),
                    _jsxs("div", {
                        className: "mb-6",
                        children: [
                            _jsxs("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    "Ambient Light: ",
                                    _jsxs("span", { className: "font-bold text-blue-600", children: [e, " lux"] }),
                                    _jsx("span", {
                                        className:
                                            "ml-2 px-2 py-0.5 text-xs rounded " +
                                            ("purple" === d.color
                                                ? "bg-purple-100 text-purple-700"
                                                : "indigo" === d.color
                                                  ? "bg-indigo-100 text-indigo-700"
                                                  : "blue" === d.color
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "yellow" === d.color
                                                      ? "bg-yellow-100 text-yellow-700"
                                                      : "orange" === d.color
                                                        ? "bg-orange-100 text-orange-700"
                                                        : "bg-red-100 text-red-700"),
                                        children: d.label,
                                    }),
                                ],
                            }),
                            _jsx("input", {
                                type: "range",
                                min: "0",
                                max: "2000",
                                step: "25",
                                value: Math.min(e, 2e3),
                                onChange: (e) => t("" === e.target.value ? "" : parseFloat(e.target.value)),
                                className:
                                    "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                            }),
                            _jsxs("div", {
                                className: "flex justify-between text-xs text-gray-400 mt-1",
                                children: [
                                    _jsx("span", { children: "0" }),
                                    _jsx("span", { children: "500" }),
                                    _jsx("span", { children: "1000" }),
                                    _jsx("span", { children: "1500" }),
                                    _jsx("span", { children: "2000+" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "mt-3",
                                children: [
                                    _jsx("label", {
                                        className: "block text-xs text-gray-500 mb-2",
                                        children: "Quick Select Environment:",
                                    }),
                                    _jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            { label: "Dark Room", lux: 50, icon: "🌙" },
                                            { label: "Dim/Theater", lux: 150, icon: "🎬" },
                                            { label: "Conference Room", lux: 300, icon: "🏢" },
                                            { label: "Office (Typical)", lux: 500, icon: "💼" },
                                            { label: "Bright Office", lux: 750, icon: "☀️" },
                                            { label: "Lobby/Retail", lux: 1e3, icon: "🏪" },
                                            { label: "Outdoor (Shade)", lux: 1500, icon: "🌤️" },
                                            { label: "Outdoor (Direct)", lux: 5e3, icon: "☀️" },
                                        ].map((s) =>
                                            _jsxs(
                                                "button",
                                                {
                                                    onClick: () => t(s.lux),
                                                    className:
                                                        "px-2 py-1 text-xs rounded border transition-colors cursor-pointer " +
                                                        (e === s.lux
                                                            ? "bg-blue-600 text-white border-blue-600"
                                                            : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50"),
                                                    children: [s.icon, " ", s.label],
                                                },
                                                s.label
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mb-6",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Display Type",
                            }),
                            _jsx("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                children: o.map((e) =>
                                    _jsxs(
                                        "button",
                                        {
                                            onClick: () => a(e.value),
                                            className:
                                                "p-3 rounded-lg border-2 text-center transition-colors " +
                                                (s === e.value
                                                    ? "bg-blue-50 border-blue-500 text-blue-700"
                                                    : "bg-white border-gray-200 text-gray-600 hover:border-blue-300"),
                                            children: [
                                                _jsx("div", { className: "font-medium text-sm", children: e.label }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: [e.typicalNits, " nits"],
                                                }),
                                            ],
                                        },
                                        e.value
                                    )
                                ),
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => {
                            const t = _0xac743b(e),
                                a = o.find((e) => e.value === s),
                                r = t.nits,
                                i = Math.round(1.5 * r),
                                n = a.maxNits >= r,
                                d = a.maxNits >= i,
                                c = 0.01 * e,
                                m = a.maxNits / (c + 1),
                                x = [],
                                u = [];
                            n && d
                                ? x.push({
                                      type: "success",
                                      title: "Brightness Adequate",
                                      text: `${a.label} can achieve required ${r} nits with headroom for optimal viewing.`,
                                  })
                                : n && !d
                                  ? x.push({
                                        type: "warning",
                                        title: "Marginal Brightness",
                                        text: `${a.label} meets minimum requirements but may lack headroom. Consider a brighter display for better performance.`,
                                    })
                                  : u.push({
                                        type: "error",
                                        title: "Insufficient Brightness",
                                        text: `${a.label} (max ${a.maxNits} nits) cannot achieve required ${r} nits. Consider Direct View LED or reducing ambient light.`,
                                    }),
                                e < 100
                                    ? x.push({
                                          type: "info",
                                          title: "Dark Environment",
                                          text: "Per AVIXA, reduce display brightness to 100-200 nits in dark rooms to prevent eye strain and improve perceived contrast.",
                                      })
                                    : e > 1e3 &&
                                      x.push({
                                          type: "info",
                                          title: "High Ambient Light",
                                          text: "For bright environments, AVIXA recommends Direct View LED displays or high-brightness commercial displays with anti-glare coating.",
                                      }),
                                m >= 100
                                    ? x.push({
                                          type: "success",
                                          title: "Excellent Contrast",
                                          text: `Estimated contrast ratio of ${Math.round(m)}:1 exceeds AVIXA minimum of 7:1 for text readability.`,
                                      })
                                    : m >= 20
                                      ? x.push({
                                            type: "info",
                                            title: "Good Contrast",
                                            text: `Estimated contrast ratio of ${Math.round(m)}:1 is suitable for video and presentations.`,
                                        })
                                      : m >= 7
                                        ? x.push({
                                              type: "warning",
                                              title: "Minimum Contrast",
                                              text: `Estimated contrast ratio of ${Math.round(m)}:1 meets AVIXA minimum but may cause eye strain with prolonged viewing.`,
                                          })
                                        : u.push({
                                              type: "error",
                                              title: "Poor Contrast",
                                              text: `Estimated contrast ratio of ${Math.round(m)}:1 is below AVIXA minimum of 7:1. Content may be difficult to read.`,
                                          }),
                                "projector" === s &&
                                    x.push({
                                        type: "info",
                                        title: "Projector Consideration",
                                        text: "AVIXA recommends ALR (Ambient Light Rejecting) screens for environments above 300 lux. Consider screen gain factor for accurate brightness calculations.",
                                    }),
                                "dvled" === s &&
                                    e < 200 &&
                                    x.push({
                                        type: "info",
                                        title: "LED Brightness Control",
                                        text: "Direct View LED in dark environments should use reduced brightness (10-30%) to prevent eye fatigue and improve color accuracy.",
                                    }),
                                x.push({
                                    type: "info",
                                    title: "AVIXA Viewing Guidelines",
                                    text:
                                        e > 500
                                            ? "For extended viewing in bright environments, ensure display brightness exceeds ambient by at least 3:1 ratio."
                                            : "For comfortable extended viewing, AVIXA recommends matching display brightness to ambient conditions with a 3:1 to 5:1 contrast ratio.",
                                }),
                                l({
                                    ...t,
                                    ambientLux: e,
                                    minRecommendedNits: r,
                                    optimalNits: i,
                                    displayType: a,
                                    displaySuitable: n,
                                    displayOptimal: d,
                                    estimatedCR: Math.round(m),
                                    tips: x,
                                    warnings: u,
                                });
                        },
                        className:
                            "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors",
                        children: "Calculate Brightness Requirements",
                    }),
                ],
            }),
            r &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "Brightness Requirements",
                                }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-blue-50 p-4 rounded-lg border-2 border-blue-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-blue-600 font-medium",
                                                    children: "Minimum Required",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-blue-700",
                                                    children: r.nits,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-blue-600",
                                                    children: "nits (cd/m²)",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-green-50 p-4 rounded-lg border-2 border-green-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-green-600 font-medium",
                                                    children: "Optimal Brightness",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-green-700",
                                                    children: r.optimalNits,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-green-600",
                                                    children: "nits (+50% headroom)",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600 font-medium",
                                                    children: "Projector Equiv.",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-purple-700",
                                                    children: r.lumens,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600",
                                                    children: "lumens (approx.)",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "p-4 rounded-lg border-2 text-center " +
                                                (r.estimatedCR >= 100
                                                    ? "bg-green-50 border-green-300"
                                                    : r.estimatedCR >= 20
                                                      ? "bg-blue-50 border-blue-300"
                                                      : r.estimatedCR >= 7
                                                        ? "bg-yellow-50 border-yellow-300"
                                                        : "bg-red-50 border-red-300"),
                                            children: [
                                                _jsx("div", {
                                                    className:
                                                        "text-xs font-medium " +
                                                        (r.estimatedCR >= 100
                                                            ? "text-green-600"
                                                            : r.estimatedCR >= 20
                                                              ? "text-blue-600"
                                                              : r.estimatedCR >= 7
                                                                ? "text-yellow-600"
                                                                : "text-red-600"),
                                                    children: "Est. Contrast Ratio",
                                                }),
                                                _jsxs("div", {
                                                    className:
                                                        "text-3xl font-bold " +
                                                        (r.estimatedCR >= 100
                                                            ? "text-green-700"
                                                            : r.estimatedCR >= 20
                                                              ? "text-blue-700"
                                                              : r.estimatedCR >= 7
                                                                ? "text-yellow-700"
                                                                : "text-red-700"),
                                                    children: [r.estimatedCR, ":1"],
                                                }),
                                                _jsx("div", {
                                                    className:
                                                        "text-xs " +
                                                        (r.estimatedCR >= 100
                                                            ? "text-green-600"
                                                            : r.estimatedCR >= 20
                                                              ? "text-blue-600"
                                                              : r.estimatedCR >= 7
                                                                ? "text-yellow-600"
                                                                : "text-red-600"),
                                                    children:
                                                        r.estimatedCR >= 100
                                                            ? "Excellent"
                                                            : r.estimatedCR >= 20
                                                              ? "Good"
                                                              : r.estimatedCR >= 7
                                                                ? "Minimum"
                                                                : "Poor",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className:
                                        "p-4 rounded-lg border-2 mb-4 " +
                                        (r.displaySuitable && r.displayOptimal
                                            ? "bg-green-50 border-green-300"
                                            : r.displaySuitable
                                              ? "bg-yellow-50 border-yellow-300"
                                              : "bg-red-50 border-red-300"),
                                    children: [
                                        _jsxs("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                _jsx("span", {
                                                    className: "text-xl",
                                                    children:
                                                        r.displaySuitable && r.displayOptimal
                                                            ? "✅"
                                                            : r.displaySuitable
                                                              ? "⚠️"
                                                              : "❌",
                                                }),
                                                _jsxs("h3", {
                                                    className:
                                                        "font-semibold " +
                                                        (r.displaySuitable && r.displayOptimal
                                                            ? "text-green-800"
                                                            : r.displaySuitable
                                                              ? "text-yellow-800"
                                                              : "text-red-800"),
                                                    children: [
                                                        r.displayType.label,
                                                        " - ",
                                                        r.displaySuitable && r.displayOptimal
                                                            ? "Excellent Choice"
                                                            : r.displaySuitable
                                                              ? "Acceptable"
                                                              : "Not Recommended",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("p", {
                                            className:
                                                "text-sm " +
                                                (r.displaySuitable && r.displayOptimal
                                                    ? "text-green-700"
                                                    : r.displaySuitable
                                                      ? "text-yellow-700"
                                                      : "text-red-700"),
                                            children: [
                                                r.displayType.label,
                                                " typical brightness: ",
                                                r.displayType.typicalNits,
                                                " nits (max ~",
                                                r.displayType.maxNits,
                                                " nits).",
                                                r.displaySuitable &&
                                                    r.displayOptimal &&
                                                    " This exceeds your required brightness with room for adjustment.",
                                                r.displaySuitable &&
                                                    !r.displayOptimal &&
                                                    " This meets minimum requirements but has limited headroom.",
                                                !r.displaySuitable &&
                                                    ` Required ${r.nits} nits exceeds maximum capability.`,
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "p-3 bg-gray-50 rounded-lg text-sm",
                                    children: _jsxs("div", {
                                        className: "grid sm:grid-cols-3 gap-2",
                                        children: [
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", { className: "text-gray-500", children: "Ambient:" }),
                                                    " ",
                                                    _jsxs("strong", { children: [r.ambientLux, " lux"] }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", {
                                                        className: "text-gray-500",
                                                        children: "Display Type:",
                                                    }),
                                                    " ",
                                                    _jsx("strong", { children: r.displayType.label }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", {
                                                        className: "text-gray-500",
                                                        children: "Brightness Factor:",
                                                    }),
                                                    " ",
                                                    _jsx("strong", { children: "3× ambient" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        r.warnings.length > 0 &&
                            _jsxs("div", {
                                className: "bg-red-50 rounded-xl shadow-md p-4 sm:p-6 border border-red-300",
                                children: [
                                    _jsxs("h2", {
                                        className: "text-lg font-semibold text-red-800 mb-3 flex items-center gap-2",
                                        children: [_jsx("span", { children: "⚠️" }), " Warnings"],
                                    }),
                                    _jsx("div", {
                                        className: "space-y-3",
                                        children: r.warnings.map((e, t) =>
                                            _jsxs(
                                                "div",
                                                {
                                                    className: "p-3 bg-white rounded-lg border border-red-200",
                                                    children: [
                                                        _jsx("h3", {
                                                            className: "font-semibold text-red-700 mb-1",
                                                            children: e.title,
                                                        }),
                                                        _jsx("p", {
                                                            className: "text-sm text-red-600",
                                                            children: e.text,
                                                        }),
                                                    ],
                                                },
                                                t
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "AVIXA Tips & Recommendations",
                                }),
                                _jsx("div", {
                                    className: "space-y-3",
                                    children: r.tips.map((e, t) =>
                                        _jsxs(
                                            "div",
                                            {
                                                className:
                                                    "p-3 rounded-lg border " +
                                                    ("success" === e.type
                                                        ? "bg-green-50 border-green-200"
                                                        : "warning" === e.type
                                                          ? "bg-yellow-50 border-yellow-200"
                                                          : "error" === e.type
                                                            ? "bg-red-50 border-red-200"
                                                            : "bg-blue-50 border-blue-200"),
                                                children: [
                                                    _jsxs("h3", {
                                                        className:
                                                            "font-semibold mb-1 " +
                                                            ("success" === e.type
                                                                ? "text-green-800"
                                                                : "warning" === e.type
                                                                  ? "text-yellow-800"
                                                                  : "error" === e.type
                                                                    ? "text-red-800"
                                                                    : "text-blue-800"),
                                                        children: [
                                                            "success" === e.type
                                                                ? "✅"
                                                                : "warning" === e.type
                                                                  ? "⚠️"
                                                                  : "error" === e.type
                                                                    ? "❌"
                                                                    : "ℹ️",
                                                            " ",
                                                            e.title,
                                                        ],
                                                    }),
                                                    _jsx("p", {
                                                        className:
                                                            "text-sm " +
                                                            ("success" === e.type
                                                                ? "text-green-700"
                                                                : "warning" === e.type
                                                                  ? "text-yellow-700"
                                                                  : "error" === e.type
                                                                    ? "text-red-700"
                                                                    : "text-blue-700"),
                                                        children: e.text,
                                                    }),
                                                ],
                                            },
                                            t
                                        )
                                    ),
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Environment Brightness Reference (AVIXA)",
                                }),
                                _jsx("div", {
                                    className: "overflow-x-auto",
                                    children: _jsxs("table", {
                                        className: "w-full text-sm",
                                        children: [
                                            _jsx("thead", {
                                                children: _jsxs("tr", {
                                                    className: "bg-gray-100",
                                                    children: [
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Environment",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Typical Lux",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Min Nits Required",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Recommended Display",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            _jsx("tbody", {
                                                children: [
                                                    {
                                                        env: "Dark Room / Theater",
                                                        lux: "50-150",
                                                        nits: "50-150",
                                                        display: "Any display type",
                                                    },
                                                    {
                                                        env: "Conference Room",
                                                        lux: "300-500",
                                                        nits: "300-500",
                                                        display: "LCD/Commercial LED",
                                                    },
                                                    {
                                                        env: "Office / Classroom",
                                                        lux: "500-750",
                                                        nits: "500-750",
                                                        display: "Commercial LED / DVLED",
                                                    },
                                                    {
                                                        env: "Retail / Lobby",
                                                        lux: "750-1500",
                                                        nits: "750-1500",
                                                        display: "Direct View LED",
                                                    },
                                                    {
                                                        env: "Outdoor (Covered)",
                                                        lux: "1500-5000",
                                                        nits: "1500-3000",
                                                        display: "High-brightness DVLED",
                                                    },
                                                    {
                                                        env: "Outdoor (Direct Sun)",
                                                        lux: "5000+",
                                                        nits: "3000-5000+",
                                                        display: "Outdoor-rated DVLED",
                                                    },
                                                ].map((t, s) =>
                                                    _jsxs(
                                                        "tr",
                                                        {
                                                            className:
                                                                "border-b " +
                                                                (e >= parseInt(t.lux) &&
                                                                e < (parseInt(t.lux.split("-")[1]) || 1e4)
                                                                    ? "bg-blue-50"
                                                                    : ""),
                                                            children: [
                                                                _jsx("td", {
                                                                    className: "px-3 py-2 font-medium",
                                                                    children: t.env,
                                                                }),
                                                                _jsx("td", { className: "px-3 py-2", children: t.lux }),
                                                                _jsx("td", {
                                                                    className: "px-3 py-2",
                                                                    children: t.nits,
                                                                }),
                                                                _jsx("td", {
                                                                    className: "px-3 py-2",
                                                                    children: t.display,
                                                                }),
                                                            ],
                                                        },
                                                        s
                                                    )
                                                ),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}

export default BrightnessCalculator;
