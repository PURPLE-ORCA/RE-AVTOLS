// Projector Calculator Tool
// Dependencies: React, Core (global)

function calculateProjectorThrow(e, t, s = "in") {
    const a = e * t;
    return { throwDistance: Math.round(100 * a) / 100, unit: s };
}

function ProjectorCalculator() {
    const [e, t] = useState(10),
        [s, a] = useState(1.5),
        [r, l] = useState("ft"),
        [i, n] = useState(300),
        [o, d] = useState(5.625),
        [c, m] = useState("16:9"),
        [x, u] = useState(1),
        [h, p] = useState(null),
        [g, b] = useState(!1),
        f = [
            { label: "16:9", w: 16, h: 9, decimal: 16 / 9 },
            { label: "16:10", w: 16, h: 10, decimal: 1.6 },
            { label: "4:3", w: 4, h: 3, decimal: 4 / 3 },
            { label: "21:9", w: 21, h: 9, decimal: 21 / 9 },
            { label: "2.35:1", w: 2.35, h: 1, decimal: 2.35 },
        ],
        y = (e, t) => {
            if ("custom" === t) return o;
            const [s, a] = t.split(":").map(Number);
            return Math.round(((e * a) / s) * 1e3) / 1e3;
        },
        j = (e, t) => {
            if (!e || !t || e <= 0 || t <= 0) return "custom";
            const s = e / t;
            for (const e of f) if (Math.abs(e.decimal - s) / e.decimal < 0.02) return e.label;
            return "custom";
        };
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Projector Brightness & Throw Calculator",
                    }),
                    h !== null &&
                        _jsx("button", {
                            onClick: () => b(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm dark:shadow-gray-950/10",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: g,
                onConfirm: () => {
                    t(10), a(1.5), l("ft"), n(300), d(5.625), m("16:9"), u(1), p(null), b(!1);
                },
                onCancel: () => b(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates the required projector brightness (lumens) and throw distance based on your screen size, ambient lighting conditions, and screen gain. Helps you select the right projector and determine optimal mounting distance.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsxs("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                        children: [_jsx("span", { className: "text-blue-600", children: "📐" }), " Screen Size"],
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Unit",
                                    }),
                                    _jsxs("select", {
                                        value: r,
                                        onChange: (e) => l(e.target.value),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            _jsx("option", { value: "ft", children: "Feet" }),
                                            _jsx("option", { value: "in", children: "Inches" }),
                                            _jsx("option", { value: "m", children: "Meters" }),
                                            _jsx("option", { value: "mm", children: "Millimeters" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Aspect Ratio",
                                    }),
                                    _jsxs("select", {
                                        value: c,
                                        onChange: (t) => {
                                            return (s = t.target.value), m(s), void ("custom" !== s && d(y(e, s)));
                                            var s;
                                        },
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            _jsx("option", { value: "16:9", children: "16:9 (Widescreen)" }),
                                            _jsx("option", { value: "16:10", children: "16:10 (WXGA)" }),
                                            _jsx("option", { value: "4:3", children: "4:3 (Standard)" }),
                                            _jsx("option", { value: "21:9", children: "21:9 (Ultrawide)" }),
                                            _jsx("option", { value: "2.35:1", children: "2.35:1 (Cinemascope)" }),
                                            _jsx("option", { value: "custom", children: "Custom" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Screen Width (", r, ")"],
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        min: "0.1",
                                        value: e,
                                        onChange: (e) =>
                                            ((e) => {
                                                if ((t(e), "custom" !== c)) d(y(e, c));
                                                else {
                                                    const t = j(e, o);
                                                    "custom" !== t && m(t);
                                                }
                                            })("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Screen Height (", r, ")"],
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        min: "0.1",
                                        value: o,
                                        onChange: (t) =>
                                            ((t) => {
                                                d(t);
                                                const s = j(e, t);
                                                m(s);
                                            })("" === t.target.value ? "" : parseFloat(t.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                            ("custom" === c ? "" : "bg-gray-50 dark:bg-gray-900/50"),
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children:
                                            "custom" === c
                                                ? "Enter custom height - aspect ratio will auto-detect"
                                                : "Auto-calculated from aspect ratio (edit to customize)",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsxs("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                        children: [_jsx("span", { className: "text-green-600", children: "📏" }), " Throw Distance"],
                    }),
                    _jsx("div", {
                        className: "grid md:grid-cols-1 gap-6",
                        children: _jsxs("div", {
                            children: [
                                _jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                    children: "Throw Ratio",
                                }),
                                _jsx("input", {
                                    type: "number",
                                    step: "0.1",
                                    min: "0.1",
                                    value: s,
                                    onChange: (e) => a("" === e.target.value ? "" : parseFloat(e.target.value)),
                                    className:
                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                }),
                                _jsx("p", {
                                    className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                    children: "From projector specifications (e.g., 1.5 means 1.5× screen width)",
                                }),
                            ],
                        }),
                    }),
                    _jsxs("div", {
                        className: "mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                        children: [
                            _jsx("div", {
                                className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Common Throw Ratios:",
                            }),
                            _jsxs("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-3 text-sm",
                                children: [
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-2 rounded border",
                                        children: [
                                            _jsx("div", {
                                                className: "font-semibold text-purple-600",
                                                children: "0.3 - 0.5",
                                            }),
                                            _jsx("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "Ultra Short Throw",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-2 rounded border",
                                        children: [
                                            _jsx("div", {
                                                className: "font-semibold text-blue-600",
                                                children: "0.5 - 1.0",
                                            }),
                                            _jsx("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "Short Throw",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-2 rounded border",
                                        children: [
                                            _jsx("div", {
                                                className: "font-semibold text-green-600",
                                                children: "1.0 - 2.0",
                                            }),
                                            _jsx("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "Standard Throw",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-2 rounded border",
                                        children: [
                                            _jsx("div", {
                                                className: "font-semibold text-orange-600",
                                                children: "2.0+",
                                            }),
                                            _jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Long Throw" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsxs("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                        children: [
                            _jsx("span", { className: "text-yellow-600", children: "💡" }),
                            " Projector Brightness",
                        ],
                    }),
                    _jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400 mb-6",
                        children:
                            "Calculate the required projector brightness (lumens) based on ambient light conditions and screen size.",
                    }),
                    _jsxs("div", {
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Ambient Light (lux)",
                            }),
                            _jsx("input", {
                                type: "number",
                                min: "0",
                                value: i,
                                onChange: (e) => n("" === e.target.value ? "" : parseFloat(e.target.value)),
                                className:
                                    "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-4",
                        children: [
                            _jsx("label", {
                                className: "block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2",
                                children: "Quick Presets:",
                            }),
                            _jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    { label: "Theater Dark", lux: 20, desc: "Dedicated theater" },
                                    { label: "Dim", lux: 150, desc: "Controlled lighting" },
                                    { label: "Office", lux: 300, desc: "Standard office" },
                                    { label: "Bright", lux: 500, desc: "Well-lit room" },
                                    { label: "Very Bright", lux: 750, desc: "Near windows" },
                                ].map((e) =>
                                    _jsxs(
                                        "button",
                                        {
                                            type: "button",
                                            onClick: () => n(e.lux),
                                            className:
                                                "px-3 py-2 text-xs rounded-lg border transition-colors " +
                                                (i === e.lux
                                                    ? "bg-blue-600 text-white border-blue-600"
                                                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:text-blue-600"),
                                            children: [
                                                _jsx("div", { className: "font-semibold", children: e.label }),
                                                _jsxs("div", {
                                                    className: "text-xs opacity-75",
                                                    children: [e.lux, " lux"],
                                                }),
                                            ],
                                        },
                                        e.label
                                    )
                                ),
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-6",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Screen Gain",
                            }),
                            _jsx("input", {
                                type: "number",
                                min: "0.5",
                                max: "2.5",
                                step: "0.1",
                                value: x,
                                onChange: (e) => u("" === e.target.value ? 1 : parseFloat(e.target.value) || 1),
                                className:
                                    "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            }),
                            _jsxs("div", {
                                className: "flex flex-wrap gap-2 mt-2",
                                children: [
                                    { label: "Matte (1.0)", gain: 1 },
                                    { label: "Standard (1.3)", gain: 1.3 },
                                    { label: "High Gain (1.8)", gain: 1.8 },
                                    { label: "ALR (0.8)", gain: 0.8 },
                                ].map((e) =>
                                    _jsx(
                                        "button",
                                        {
                                            type: "button",
                                            onClick: () => u(e.gain),
                                            className:
                                                "px-3 py-1 text-xs rounded-lg border transition-colors cursor-pointer " +
                                                (x === e.gain
                                                    ? "bg-blue-600 text-white border-blue-600"
                                                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-blue-400"),
                                            children: e.label,
                                        },
                                        e.label
                                    )
                                ),
                            }),
                            _jsx("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                children:
                                    "Screen gain affects brightness efficiency. Higher gain = brighter but narrower viewing angle. ALR screens reject ambient light.",
                            }),
                        ],
                    }),
                    _jsx("div", {
                        className: "mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800",
                        children: _jsxs("p", {
                            className: "text-xs text-blue-700",
                            children: [
                                _jsx("strong", { children: "AVIXA Formula:" }),
                                " Lumens = (Target ft-L × Screen Area ft² × π) ÷ Screen Gain",
                            ],
                        }),
                    }),
                ],
            }),
            _jsx("button", {
                onClick: () => {
                    const t = e * s;
                    let a = e,
                        l = o;
                    "in" === r
                        ? ((a = e / 12), (l = o / 12))
                        : "mm" === r
                          ? ((a = e / 304.8), (l = o / 304.8))
                          : "m" === r && ((a = 3.28084 * e), (l = 3.28084 * o));
                    const n = a * l,
                        d = n / 10.764;
                    let c;
                    c = i <= 20 ? 14 : i <= 50 ? 20 : i <= 150 ? 35 : i <= 300 ? 50 : i <= 500 ? 60 : 80;
                    const m = (c * n * Math.PI) / x,
                        u = Math.max(2e3, 35 * n),
                        h = Math.max(m, u),
                        g = (h * x) / (n * Math.PI),
                        b = 3.426 * g;
                    let f = "",
                        y = "";
                    i <= 20
                        ? ((f = "Dedicated Theater"), (y = "Full light control, cinema experience"))
                        : i <= 50
                          ? ((f = "Dark Room"), (y = "Home theater, dedicated AV rooms"))
                          : i <= 150
                            ? ((f = "Dim Room"), (y = "Conference rooms with controlled lighting"))
                            : i <= 300
                              ? ((f = "Moderate Light"), (y = "Standard office, meeting rooms"))
                              : i <= 500
                                ? ((f = "Bright Room"), (y = "Well-lit offices, classrooms"))
                                : ((f = "Very Bright"), (y = "High ambient light, ALR screen recommended"));
                    let j = "";
                    j = s < 0.5 ? "Ultra Short Throw" : s < 1 ? "Short Throw" : s < 2 ? "Standard Throw" : "Long Throw";
                    let _ = null;
                    if (h > 1e4) {
                        let e, t, s, r, i;
                        if (h <= 2e4)
                            (e = "Large Venue Laser"),
                                (t = 1),
                                (s = h),
                                (r = "Single large venue projector recommended"),
                                (i = null);
                        else if (h <= 4e4)
                            (e = "High-End Laser"),
                                (t = 1),
                                (s = h),
                                (r = "Single high-end projector. Consider 2× stacked for redundancy."),
                                (i = "Edge blending optional for brightness stacking");
                        else {
                            const n = 2e4,
                                o = 0.12,
                                d = n * (1 - o);
                            if (((t = Math.ceil(h / d)), t <= 2 && h <= 75e3))
                                (e = "Ultra High Output (Barco/Christie)"),
                                    (t = 1),
                                    (s = h),
                                    (r = "Single ultra-high-output projector (Barco UDX or Christie equivalent)"),
                                    (i = null);
                            else if (t <= 3)
                                (s = Math.ceil(h / t / (1 - o))),
                                    (e = s > 3e4 ? "Large Venue Laser" : "Professional Laser"),
                                    (r = `${t}× projector edge-blended configuration`),
                                    (i = `Edge blending with ${Math.round(100 * o)}% overlap. Each projector: ${s.toLocaleString()} lumens.`);
                            else {
                                (t = Math.ceil(h / d)), (s = n), (e = "Large Venue Laser Array");
                                const o = a / l;
                                let c, m;
                                o >= 2
                                    ? ((c = Math.ceil(Math.sqrt(t * o))), (m = Math.ceil(t / c)))
                                    : ((c = Math.ceil(Math.sqrt(t))), (m = Math.ceil(t / c))),
                                    (t = c * m),
                                    (r = `${t}× projector array (${c}×${m} grid)`),
                                    (i = `Professional edge-blending system required. Each zone: ~${Math.round(a / c)}'×${Math.round(l / m)}' coverage.`);
                            }
                            const c = [];
                            t > 1 &&
                                (c.push("Edge blending processor (Analog Way, Barco, or Christie)"),
                                c.push("Precision mounting system with micro-adjustment"),
                                c.push("Professional calibration required")),
                                h > 5e4 &&
                                    (c.push("Dedicated power circuits (20A+ per projector)"),
                                    c.push("Active cooling/ventilation planning")),
                                (_ = {
                                    required: t > 1 || h > 4e4,
                                    projectorCount: t,
                                    lumensPerProjector: Math.round(s),
                                    projectorClass: e,
                                    recommendation: r,
                                    blendingNote: i,
                                    equipmentNeeded: c,
                                    totalSystemLumens: t * s,
                                    isExtreme: h > 1e5,
                                });
                        }
                        h > 2e5 &&
                            (_ = {
                                required: !0,
                                projectorCount: Math.ceil(h / 2e4),
                                lumensPerProjector: 2e4,
                                projectorClass: "Stadium/Arena Class",
                                recommendation: "Consider LED video wall instead of projection for this scale",
                                blendingNote:
                                    "At this scale, direct-view LED typically provides better uniformity and lower maintenance",
                                equipmentNeeded: [
                                    "Professional AV integration firm required",
                                    "LED wall evaluation recommended",
                                ],
                                totalSystemLumens: h,
                                isExtreme: !0,
                                ledRecommended: !0,
                            });
                    }
                    let v = null;
                    const N = 12 * Math.sqrt(a * a + l * l);
                    N > 600 &&
                        (v = {
                            level: "info",
                            message: "Very large screen - consider seamless projection screen or LED wall",
                            diagonal: Math.round(N),
                        }),
                        N > 1200 &&
                            (v = {
                                level: "warning",
                                message: "Stadium-scale display - LED video wall strongly recommended over projection",
                                diagonal: Math.round(N),
                            }),
                        p({
                            throwDistance: Math.round(100 * t) / 100,
                            throwCategory: j,
                            requiredLumens: Math.round(h),
                            recommendedMin: Math.round(0.9 * h),
                            recommendedMax: Math.round(1.3 * h),
                            screenAreaFt: Math.round(100 * n) / 100,
                            screenAreaM2: Math.round(100 * d) / 100,
                            screenDiagonalIn: Math.round(N),
                            targetFtL: Math.round(c),
                            resultingFtL: Math.round(10 * g) / 10,
                            resultingNits: Math.round(b),
                            screenGain: x,
                            brightnessCategory: f,
                            brightnessDescription: y,
                            unit: r,
                            multiProjector: _,
                            screenSizeWarning: v,
                        });
                },
                className:
                    "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg mb-8 cursor-pointer",
                children: "Calculate Brightness & Throw",
            }),
            h &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                            children: [
                                _jsx("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Throw Distance Result",
                                }),
                                _jsxs("div", {
                                    className: "bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                            children: "Required Throw Distance",
                                        }),
                                        _jsxs("div", {
                                            className: "text-4xl font-bold text-green-700",
                                            children: [h.throwDistance, " ", h.unit],
                                        }),
                                        _jsxs("div", {
                                            className: "text-sm text-gray-500 dark:text-gray-400 mt-2",
                                            children: [
                                                e,
                                                " ",
                                                r,
                                                " × ",
                                                s,
                                                " throw ratio = ",
                                                h.throwDistance,
                                                " ",
                                                r,
                                                " (",
                                                h.throwCategory,
                                                ")",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                            children: [
                                _jsx("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Brightness Calculation Results",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-6 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-2 border-yellow-200 dark:border-yellow-800",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Required Projector Brightness",
                                                }),
                                                _jsx("div", {
                                                    className: "text-4xl font-bold text-yellow-700",
                                                    children: h.requiredLumens.toLocaleString(),
                                                }),
                                                _jsx("div", {
                                                    className: "text-lg text-yellow-600",
                                                    children: "Lumens",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400 mt-2",
                                                    children: [
                                                        "Recommended range: ",
                                                        h.recommendedMin.toLocaleString(),
                                                        " - ",
                                                        h.recommendedMax.toLocaleString(),
                                                        " lumens",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Screen Area",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-3xl font-bold text-blue-700",
                                                    children: [h.screenAreaFt, " ft²"],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                                    children: [h.screenAreaM2, " m²"],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-3 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className:
                                                "bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                    children: "Target Brightness",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xl font-bold text-purple-700",
                                                    children: [h.targetFtL, " ft-L"],
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                    children: "SMPTE Standard",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-indigo-50 p-4 rounded-lg border border-indigo-200 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                    children: "Resulting Brightness",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xl font-bold text-indigo-700",
                                                    children: [h.resultingNits, " nits"],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                    children: [h.resultingFtL, " ft-L"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-teal-50 p-4 rounded-lg border border-teal-200 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                    children: "Screen Gain",
                                                }),
                                                _jsx("div", {
                                                    className: "text-xl font-bold text-teal-700",
                                                    children: h.screenGain,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                    children:
                                                        h.screenGain >= 1.3
                                                            ? "High Gain"
                                                            : h.screenGain <= 0.9
                                                              ? "ALR Screen"
                                                              : "Standard",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className:
                                        "bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800",
                                    children: [
                                        _jsxs("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Environment Type",
                                                }),
                                                _jsxs("span", {
                                                    className:
                                                        "text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full",
                                                    children: [i, " lux"],
                                                }),
                                            ],
                                        }),
                                        _jsx("div", {
                                            className: "text-2xl font-bold text-purple-700",
                                            children: h.brightnessCategory,
                                        }),
                                        _jsx("p", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                            children: h.brightnessDescription,
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                                    children: [
                                        _jsx("h4", {
                                            className: "font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                            children: "Projector Recommendations",
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                h.requiredLumens <= 3e3 &&
                                                    _jsx("p", {
                                                        className: "text-green-700",
                                                        children:
                                                            "✓ Standard home theater or portable projectors should work well",
                                                    }),
                                                h.requiredLumens > 3e3 &&
                                                    h.requiredLumens <= 5e3 &&
                                                    _jsx("p", {
                                                        className: "text-blue-700",
                                                        children:
                                                            "✓ Look for business/conference room projectors (3,000-5,000 lumens)",
                                                    }),
                                                h.requiredLumens > 5e3 &&
                                                    h.requiredLumens <= 1e4 &&
                                                    _jsx("p", {
                                                        className: "text-orange-700",
                                                        children:
                                                            "✓ Consider laser projectors or high-brightness installation projectors",
                                                    }),
                                                h.requiredLumens > 1e4 &&
                                                    _jsx("p", {
                                                        className: "text-red-700",
                                                        children:
                                                            "✓ Large venue projector required (10,000+ lumens) - consider multiple projectors or ALR screen",
                                                    }),
                                                i > 500 &&
                                                    _jsx("p", {
                                                        className: "text-purple-700",
                                                        children:
                                                            "💡 Consider an ALR (Ambient Light Rejecting) screen to improve image quality",
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                                    children: [
                                        _jsx("h4", {
                                            className: "font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Calculation Breakdown",
                                        }),
                                        _jsxs("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 space-y-1",
                                            children: [
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("strong", { children: "Screen Area:" }),
                                                        " ",
                                                        e,
                                                        " × ",
                                                        o,
                                                        " = ",
                                                        h.screenAreaFt,
                                                        " ft²",
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("strong", { children: "Area in m²:" }),
                                                        " ",
                                                        h.screenAreaFt,
                                                        " ÷ 10.764 = ",
                                                        h.screenAreaM2,
                                                        " m²",
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("strong", { children: "Required Lumens:" }),
                                                        " ",
                                                        i,
                                                        " lux × ",
                                                        h.screenAreaM2,
                                                        " m² × 3 = ",
                                                        _jsxs("strong", {
                                                            children: [h.requiredLumens.toLocaleString(), " lumens"],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        h.multiProjector &&
                            h.multiProjector.required &&
                            _jsxs("div", {
                                className:
                                    "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border-2 " +
                                    (h.multiProjector.ledRecommended ? "border-orange-400" : "border-purple-400"),
                                children: [
                                    _jsxs("h3", {
                                        className: "text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                        children: [
                                            _jsx("span", { children: h.multiProjector.ledRecommended ? "⚠️" : "🎬" }),
                                            h.multiProjector.ledRecommended
                                                ? " Scale Advisory"
                                                : " Multi-Projector Configuration",
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className:
                                            "p-4 rounded-lg mb-4 " +
                                            (h.multiProjector.ledRecommended
                                                ? "bg-orange-50 border border-orange-200"
                                                : "bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800"),
                                        children: [
                                            _jsxs("div", {
                                                className: "grid md:grid-cols-3 gap-4 mb-4",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "text-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "Projectors Required",
                                                            }),
                                                            _jsx("div", {
                                                                className: "text-3xl font-bold text-purple-700",
                                                                children: h.multiProjector.projectorCount,
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "Lumens per Projector",
                                                            }),
                                                            _jsx("div", {
                                                                className: "text-2xl font-bold text-purple-600",
                                                                children:
                                                                    h.multiProjector.lumensPerProjector.toLocaleString(),
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "Projector Class",
                                                            }),
                                                            _jsx("div", {
                                                                className: "text-lg font-semibold text-purple-600",
                                                                children: h.multiProjector.projectorClass,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded border",
                                                children: [
                                                    _jsx("div", {
                                                        className: "font-medium text-gray-800",
                                                        children: h.multiProjector.recommendation,
                                                    }),
                                                    h.multiProjector.blendingNote &&
                                                        _jsx("div", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                                            children: h.multiProjector.blendingNote,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    h.multiProjector.equipmentNeeded &&
                                        h.multiProjector.equipmentNeeded.length > 0 &&
                                        _jsxs("div", {
                                            className: "bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                    children: "Equipment & Considerations:",
                                                }),
                                                _jsx("ul", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400 space-y-1",
                                                    children: h.multiProjector.equipmentNeeded.map((e, t) =>
                                                        _jsxs(
                                                            "li",
                                                            {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    _jsx("span", {
                                                                        className: "text-purple-500",
                                                                        children: "•",
                                                                    }),
                                                                    e,
                                                                ],
                                                            },
                                                            t
                                                        )
                                                    ),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        h.screenSizeWarning &&
                            _jsxs("div", {
                                className: `bg-${"warning" === h.screenSizeWarning.level ? "orange" : "blue"}-50 p-4 rounded-lg border border-${"warning" === h.screenSizeWarning.level ? "orange" : "blue"}-200 mt-4`,
                                children: [
                                    _jsxs("div", {
                                        className: `font-medium text-${"warning" === h.screenSizeWarning.level ? "orange" : "blue"}-800`,
                                        children: [
                                            "Screen Diagonal: ",
                                            h.screenSizeWarning.diagonal,
                                            '" (',
                                            Math.round(h.screenSizeWarning.diagonal / 12),
                                            " ft)",
                                        ],
                                    }),
                                    _jsx("div", {
                                        className: `text-sm text-${"warning" === h.screenSizeWarning.level ? "orange" : "blue"}-700`,
                                        children: h.screenSizeWarning.message,
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
