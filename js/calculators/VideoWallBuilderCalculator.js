import { _jsx, _jsxs, ResetConfirmModal, _0x99bba9 } from '../utils.js';

const { useState, useEffect, useRef } = React;

function VideoWallBuilderCalculator() {
    const [e, t] = useState(47.6),
        [s, a] = useState(26.8),
        [r, l] = useState("in"),
        [i, n] = useState(1920),
        [o, d] = useState(1080),
        [c, m] = useState("preset"),
        [x, u] = useState(0),
        [h, p] = useState("dimension"),
        [g, b] = useState("width"),
        [f, y] = useState(10),
        [j, _] = useState("ft"),
        [v, N] = useState(16),
        [w, C] = useState(9),
        [M, k] = useState(12),
        [S, R] = useState(6.75),
        [P, A] = useState("ft"),
        [D, I] = useState(2),
        [E, F] = useState(2),
        [B, T] = useState(null),
        [L, H] = useState(!1),
        U = (e) => {
            const t = j,
                s = P,
                a = 0.3048,
                r = 3.28084;
            t !== e &&
                ("ft" === t && "m" === e
                    ? y((e) => Math.round(e * a * 100) / 100)
                    : "m" === t && "ft" === e && y((e) => Math.round(e * r * 100) / 100),
                _(e)),
                s !== e &&
                    ("ft" === s && "m" === e
                        ? (k((e) => Math.round(e * a * 100) / 100), R((e) => Math.round(e * a * 100) / 100))
                        : "m" === s &&
                          "ft" === e &&
                          (k((e) => Math.round(e * r * 100) / 100), R((e) => Math.round(e * r * 100) / 100)),
                    A(e));
        },
        q = (e, t) => {
            const s = _0x99bba9(e, 1, 0.001);
            return "mm" === t ? s / 25.4 : "ft" === t ? 12 * s : "m" === t ? 39.3701 * s : s;
        },
        $ = (e, t, s, a) => {
            const r = (x || 0) / 25.4,
                l = (t - 1) * r,
                n = (e - 1) * r,
                d = t * s + l,
                c = e * a + n,
                m = Math.sqrt(d * d + c * c),
                u = d / c;
            let h, p;
            const g = [
                { w: 1, h: 1, decimal: 1 },
                { w: 4, h: 3, decimal: 4 / 3 },
                { w: 5, h: 4, decimal: 5 / 4 },
                { w: 3, h: 2, decimal: 1.5 },
                { w: 16, h: 10, decimal: 1.6 },
                { w: 16, h: 9, decimal: 16 / 9 },
                { w: 2, h: 1, decimal: 2 },
                { w: 21, h: 9, decimal: 21 / 9 },
                { w: 32, h: 9, decimal: 32 / 9 },
                { w: 32, h: 10, decimal: 3.2 },
                { w: 48, h: 9, decimal: 48 / 9 },
                { w: 64, h: 9, decimal: 64 / 9 },
                { w: 9, h: 16, decimal: 9 / 16 },
                { w: 3, h: 4, decimal: 3 / 4 },
                { w: 2, h: 3, decimal: 2 / 3 },
            ].find((e) => Math.abs(e.decimal - u) / u < 0.02);
            if (g) (h = g.w), (p = g.h);
            else {
                const e = (t, s) => (0 === s ? t : e(s, t % s));
                let t = Math.round(9 * u),
                    s = 9;
                for (const a of [9, 10, 16, 8, 12]) {
                    const r = Math.round(u * a),
                        l = e(r, a),
                        i = r / l,
                        n = a / l;
                    i <= 64 && n <= 64 && i > 0 && i + n < t + s && ((t = i), (s = n));
                }
                (h = t), (p = s);
            }
            const b = t * _0x99bba9(i, 1920, 1),
                f = e * _0x99bba9(o, 1080, 1),
                y = (25.4 * d) / b,
                j = 4 * y,
                _ = 6 * y,
                v = 8 * y;
            T({
                rows: e,
                cols: t,
                totalDisplays: e * t,
                totalWidthIn: d,
                totalHeightIn: c,
                totalWidthFt: d / 12,
                totalHeightFt: c / 12,
                totalWidthM: d / 39.3701,
                totalHeightM: c / 39.3701,
                diagonalIn: m,
                diagonalFt: m / 12,
                aspectRatio: `${h}:${p}`,
                aspectDecimal: u.toFixed(2),
                totalResWidth: b,
                totalResHeight: f,
                totalPixels: b * f,
                configuration: `${t}×${e}`,
                bezelGapMM: x || 0,
                totalBezelWidthMM: Math.round(25.4 * l * 10) / 10,
                totalBezelHeightMM: Math.round(25.4 * n * 10) / 10,
                pixelPitchMM: Math.round(100 * y) / 100,
                minViewingAnalyticalM: Math.round((j / 1e3) * 10) / 10,
                minViewingBasicM: Math.round((_ / 1e3) * 10) / 10,
                minViewingVideoM: Math.round((v / 1e3) * 10) / 10,
                minViewingAnalyticalFt: Math.round((j / 304.8) * 10) / 10,
                minViewingBasicFt: Math.round((_ / 304.8) * 10) / 10,
                minViewingVideoFt: Math.round((v / 304.8) * 10) / 10,
            });
        },
        W = (t, a) => {
            I(t), F(a);
            const l = q(e, r),
                i = q(s, r);
            $(t, a, l, i);
        };
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-4 sm:mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-900",
                        children: "Video Wall Builder",
                    }),
                    B !== null &&
                        _jsx("button", {
                            onClick: () => H(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: L,
                onConfirm: () => {
                    t(47.6),
                        a(26.8),
                        l("in"),
                        n(1920),
                        d(1080),
                        m("preset"),
                        u(0),
                        p("dimension"),
                        b("width"),
                        y(10),
                        _("ft"),
                        N(16),
                        C(9),
                        k(12),
                        R(6.75),
                        A("ft"),
                        I(2),
                        F(2),
                        T(null),
                        H(!1);
                },
                onCancel: () => H(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Design video wall configurations by entering individual display dimensions and resolution. Adjust rows and columns to achieve your target wall size or aspect ratio. Calculates total dimensions, resolution, and pixel count.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-blue-50 rounded-xl p-4 sm:p-5 mb-6 border border-blue-200",
                children: [
                    _jsx("h2", {
                        className: "text-base sm:text-lg font-semibold text-blue-800 mb-2 sm:mb-3",
                        children: "Video Wall Design Tool",
                    }),
                    _jsx("p", {
                        className: "text-xs sm:text-sm text-blue-700",
                        children:
                            "Design your video wall by specifying display dimensions and target size. Adjust rows and columns using the sliders to fine-tune your configuration.",
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 border",
                children: [
                    _jsx("h2", {
                        className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                        children: "Display Specifications",
                    }),
                    _jsxs("div", {
                        className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Display Width",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        value: e,
                                        onChange: (e) =>
                                            t("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Display Height",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        value: s,
                                        onChange: (e) =>
                                            a("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Dimension Unit",
                                    }),
                                    _jsxs("select", {
                                        value: r,
                                        onChange: (e) => l(e.target.value),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white",
                                        children: [
                                            _jsx("option", { value: "in", children: "Inches (in)" }),
                                            _jsx("option", { value: "mm", children: "Millimeters (mm)" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Resolution",
                                    }),
                                    _jsxs("select", {
                                        value: "custom" === c ? "custom" : `${i}x${o}`,
                                        onChange: (e) => {
                                            if ("custom" === e.target.value) m("custom");
                                            else {
                                                m("preset");
                                                const [t, s] = e.target.value.split("x").map(Number);
                                                n(t), d(s);
                                            }
                                        },
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white",
                                        children: [
                                            _jsx("option", { value: "1920x1080", children: "1920×1080 (FHD)" }),
                                            _jsx("option", { value: "2560x1440", children: "2560×1440 (QHD)" }),
                                            _jsx("option", { value: "3840x2160", children: "3840×2160 (4K)" }),
                                            _jsx("option", { value: "1280x720", children: "1280×720 (HD)" }),
                                            _jsx("option", { value: "1366x768", children: "1366×768 (WXGA)" }),
                                            _jsx("option", { value: "custom", children: "Custom Resolution" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    "custom" === c &&
                        _jsxs("div", {
                            className: "mt-4 p-4 bg-gray-50 rounded-lg border",
                            children: [
                                _jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-3",
                                    children: "Custom Resolution",
                                }),
                                _jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        _jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-xs text-gray-500 mb-1",
                                                    children: "Width (px)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "1",
                                                    value: i,
                                                    onChange: (e) =>
                                                        n(
                                                            "" === e.target.value || "" === e.target.value
                                                                ? ""
                                                                : parseInt(e.target.value)
                                                        ),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                    placeholder: "Width",
                                                }),
                                            ],
                                        }),
                                        _jsx("span", { className: "text-gray-400 font-medium pt-5", children: "×" }),
                                        _jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-xs text-gray-500 mb-1",
                                                    children: "Height (px)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "1",
                                                    value: o,
                                                    onChange: (e) =>
                                                        d(
                                                            "" === e.target.value || "" === e.target.value
                                                                ? ""
                                                                : parseInt(e.target.value)
                                                        ),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                    placeholder: "Height",
                                                }),
                                            ],
                                        }),
                                        _jsx("div", {
                                            className: "pt-5",
                                            children: _jsxs("span", {
                                                className: "text-sm text-gray-600 bg-white px-2 py-1 rounded border",
                                                children: [((i * o) / 1e6).toFixed(2), " MP"],
                                            }),
                                        }),
                                    ],
                                }),
                                _jsx("p", {
                                    className: "text-xs text-gray-500 mt-2",
                                    children: "Enter your display's native resolution in pixels",
                                }),
                            ],
                        }),
                    _jsxs("div", {
                        className: "mt-4",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Bezel-to-Bezel Gap (optional)",
                            }),
                            _jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        step: "0.1",
                                        value: x,
                                        onChange: (e) => u("" === e.target.value ? 0 : parseFloat(e.target.value) || 0),
                                        className: "w-32 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                    _jsx("span", { className: "text-sm text-gray-600", children: "mm" }),
                                    _jsxs("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: [
                                            { label: "0mm (LED)", value: 0 },
                                            { label: "1.8mm", value: 1.8 },
                                            { label: "3.5mm", value: 3.5 },
                                            { label: "5mm", value: 5 },
                                        ].map((e) =>
                                            _jsx(
                                                "button",
                                                {
                                                    onClick: () => u(e.value),
                                                    className:
                                                        "px-2 py-1 text-xs rounded border transition-colors cursor-pointer " +
                                                        (x === e.value
                                                            ? "bg-blue-600 text-white border-blue-600"
                                                            : "bg-gray-50 hover:bg-blue-50 border-gray-300"),
                                                    children: e.label,
                                                },
                                                e.label
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            _jsx("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: "Total gap between adjacent display edges. Set to 0 for LED walls.",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-4",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Quick Select - Common Displays",
                            }),
                            _jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    { label: '55" FHD', w: 47.6, h: 26.8, rw: 1920, rh: 1080 },
                                    { label: '49" FHD', w: 42.5, h: 23.9, rw: 1920, rh: 1080 },
                                    { label: '46" FHD', w: 39.9, h: 22.5, rw: 1920, rh: 1080 },
                                    { label: '55" 4K', w: 47.6, h: 26.8, rw: 3840, rh: 2160 },
                                    { label: '65" 4K', w: 56.7, h: 31.9, rw: 3840, rh: 2160 },
                                ].map((e) =>
                                    _jsx(
                                        "button",
                                        {
                                            onClick: () => {
                                                t(e.w), a(e.h), n(e.rw), d(e.rh), l("in"), m("preset");
                                            },
                                            className:
                                                "px-3 py-1.5 text-xs rounded-lg border bg-white text-gray-700 border-gray-300 hover:bg-blue-50 transition-colors cursor-pointer",
                                            children: e.label,
                                        },
                                        e.label
                                    )
                                ),
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
                        children: "Video Wall Target Size",
                    }),
                    _jsxs("div", {
                        className: "mb-4",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Input Mode",
                            }),
                            _jsxs("div", {
                                className: "flex flex-col sm:flex-row gap-3 sm:gap-4",
                                children: [
                                    _jsxs("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            _jsx("input", {
                                                type: "radio",
                                                checked: "dimension" === h,
                                                onChange: () => p("dimension"),
                                                className: "text-blue-600",
                                            }),
                                            _jsx("span", {
                                                className: "text-sm",
                                                children: "Dimension + Aspect Ratio",
                                            }),
                                        ],
                                    }),
                                    _jsxs("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            _jsx("input", {
                                                type: "radio",
                                                checked: "size" === h,
                                                onChange: () => p("size"),
                                                className: "text-blue-600",
                                            }),
                                            _jsx("span", { className: "text-sm", children: "Width × Height" }),
                                        ],
                                    }),
                                    _jsxs("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            _jsx("input", {
                                                type: "radio",
                                                checked: "manual" === h,
                                                onChange: () => p("manual"),
                                                className: "text-blue-600",
                                            }),
                                            _jsx("span", { className: "text-sm", children: "Manual Grid" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    "dimension" === h &&
                        _jsxs("div", {
                            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                            children: [
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Specify",
                                        }),
                                        _jsxs("select", {
                                            value: g,
                                            onChange: (e) => b(e.target.value),
                                            className:
                                                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white",
                                            children: [
                                                _jsx("option", { value: "width", children: "Width" }),
                                                _jsx("option", { value: "height", children: "Height" }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    children: [
                                        _jsxs("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: ["Target ", "width" === g ? "Width" : "Height"],
                                        }),
                                        _jsxs("div", {
                                            className: "flex gap-2",
                                            children: [
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "0.1",
                                                    value: f,
                                                    onChange: (e) =>
                                                        y("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                                    className:
                                                        "flex-1 min-w-0 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsxs("select", {
                                                    value: j,
                                                    onChange: (e) => {
                                                        return (t = e.target.value), void U(t);
                                                        var t;
                                                    },
                                                    className:
                                                        "px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white",
                                                    children: [
                                                        _jsx("option", { value: "ft", children: "ft" }),
                                                        _jsx("option", { value: "m", children: "m" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "col-span-2",
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Target Aspect Ratio",
                                        }),
                                        _jsxs("div", {
                                            className: "flex flex-wrap gap-2 items-center",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        _jsx("input", {
                                                            type: "number",
                                                            value: v,
                                                            onChange: (e) =>
                                                                N(
                                                                    "" === e.target.value
                                                                        ? ""
                                                                        : parseFloat(e.target.value) || 0
                                                                ),
                                                            className:
                                                                "w-16 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-center",
                                                        }),
                                                        _jsx("span", {
                                                            className: "font-bold truncate",
                                                            children: ":",
                                                        }),
                                                        _jsx("input", {
                                                            type: "number",
                                                            value: w,
                                                            onChange: (e) =>
                                                                C(
                                                                    "" === e.target.value
                                                                        ? ""
                                                                        : parseFloat(e.target.value) || 0
                                                                ),
                                                            className:
                                                                "w-16 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-center",
                                                        }),
                                                    ],
                                                }),
                                                _jsx("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: [
                                                        { label: "16:9", w: 16, h: 9 },
                                                        { label: "16:10", w: 16, h: 10 },
                                                        { label: "4:3", w: 4, h: 3 },
                                                        { label: "21:9", w: 21, h: 9 },
                                                        { label: "2.39:1", w: 239, h: 100 },
                                                        { label: "3:4", w: 3, h: 4 },
                                                        { label: "9:16", w: 9, h: 16 },
                                                    ].map((e) =>
                                                        _jsx(
                                                            "button",
                                                            {
                                                                onClick: () => {
                                                                    N(e.w), C(e.h);
                                                                },
                                                                className:
                                                                    "px-2 py-1 text-xs rounded border transition-colors cursor-pointer " +
                                                                    (v === e.w && w === e.h
                                                                        ? "bg-blue-600 text-white border-blue-600"
                                                                        : "bg-gray-50 hover:bg-blue-50 border-gray-300"),
                                                                children: e.label,
                                                            },
                                                            e.label
                                                        )
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    "size" === h &&
                        _jsxs("div", {
                            className: "grid grid-cols-2 lg:grid-cols-3 gap-4",
                            children: [
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Total Width",
                                        }),
                                        _jsx("input", {
                                            type: "number",
                                            step: "0.1",
                                            value: M,
                                            onChange: (e) =>
                                                k("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                            className:
                                                "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Total Height",
                                        }),
                                        _jsx("input", {
                                            type: "number",
                                            step: "0.1",
                                            value: S,
                                            onChange: (e) =>
                                                R("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                            className:
                                                "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Unit",
                                        }),
                                        _jsxs("select", {
                                            value: P,
                                            onChange: (e) => {
                                                return (t = e.target.value), void U(t);
                                                var t;
                                            },
                                            className:
                                                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white",
                                            children: [
                                                _jsx("option", { value: "ft", children: "Feet (ft)" }),
                                                _jsx("option", { value: "m", children: "Meters (m)" }),
                                                _jsx("option", { value: "in", children: "Inches (in)" }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "col-span-2 lg:col-span-3",
                                    children: _jsxs("p", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            "Aspect ratio will be automatically calculated: ",
                                            _jsxs("strong", { children: [(M / S).toFixed(2), ":1"] }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    "manual" === h &&
                        _jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                _jsxs("div", {
                                    children: [
                                        _jsxs("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: ["Columns: ", E],
                                        }),
                                        _jsx("input", {
                                            type: "range",
                                            min: "1",
                                            max: "20",
                                            value: E,
                                            onChange: (e) => F(parseInt(e.target.value)),
                                            className:
                                                "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    children: [
                                        _jsxs("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: ["Rows: ", D],
                                        }),
                                        _jsx("input", {
                                            type: "range",
                                            min: "1",
                                            max: "20",
                                            value: D,
                                            onChange: (e) => I(parseInt(e.target.value)),
                                            className:
                                                "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    _jsx("button", {
                        onClick: () => {
                            const t = q(_0x99bba9(e, 47.6, 1), r),
                                a = q(_0x99bba9(s, 26.8, 1), r);
                            let l, i;
                            if ("dimension" === h) {
                                const e = q(_0x99bba9(f, 10, 1), j),
                                    s = _0x99bba9(v, 16, 1) / _0x99bba9(w, 9, 1),
                                    r = t / a;
                                let n, o;
                                if ("width" === g) {
                                    n = Math.ceil(e / t);
                                    const r = (n * t) / s;
                                    o = Math.max(1, Math.round(r / a));
                                } else {
                                    o = Math.ceil(e / a);
                                    const r = o * a * s;
                                    n = Math.max(1, Math.round(r / t));
                                }
                                const d = n * o,
                                    c = Math.abs(s - r) / r > 0.3 ? 8 : 6;
                                let m = n,
                                    x = o,
                                    u = 1 / 0;
                                for (let r = Math.max(1, n - 2); r <= n + c; r++)
                                    for (let l = Math.max(1, o - 2); l <= o + c; l++) {
                                        const i = r * t,
                                            n = l * a;
                                        if ("width" === g && i < e) continue;
                                        if ("height" === g && n < e) continue;
                                        const o = i / n,
                                            c = r * l,
                                            h = c / d;
                                        let p = (Math.abs(o - s) / s) * 100;
                                        h > 1 &&
                                            (p +=
                                                h <= 1.5
                                                    ? 3 * (h - 1)
                                                    : h <= 2.5
                                                      ? 1.5 + 8 * (h - 1.5)
                                                      : h <= 4
                                                        ? 9.5 + 20 * (h - 2.5)
                                                        : 39.5 + 50 * (h - 4)),
                                            (p += 0.001 * c),
                                            p < u && ((u = p), (m = r), (x = l));
                                    }
                                (i = m), (l = x);
                            } else if ("size" === h) {
                                const e = q(_0x99bba9(M, 12, 1), P),
                                    s = q(_0x99bba9(S, 6.75, 1), P);
                                (i = Math.ceil(e / t)), (l = Math.ceil(s / a));
                            } else (l = D), (i = E);
                            (l = Math.max(1, l)), (i = Math.max(1, i)), I(l), F(i), $(l, i, t, a);
                        },
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Video Wall",
                    }),
                ],
            }),
            B &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "Adjust Configuration",
                                }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-2 gap-6",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        "Columns: ",
                                                        _jsx("span", {
                                                            className: "font-bold text-blue-600",
                                                            children: E,
                                                        }),
                                                    ],
                                                }),
                                                _jsx("input", {
                                                    type: "range",
                                                    min: "1",
                                                    max: "20",
                                                    value: E,
                                                    onChange: (e) => W(D, parseInt(e.target.value)),
                                                    className:
                                                        "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between text-xs text-gray-400 mt-1",
                                                    children: [
                                                        _jsx("span", { children: "1" }),
                                                        _jsx("span", { children: "5" }),
                                                        _jsx("span", { children: "10" }),
                                                        _jsx("span", { children: "15" }),
                                                        _jsx("span", { children: "20" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        "Rows: ",
                                                        _jsx("span", {
                                                            className: "font-bold text-blue-600",
                                                            children: D,
                                                        }),
                                                    ],
                                                }),
                                                _jsx("input", {
                                                    type: "range",
                                                    min: "1",
                                                    max: "20",
                                                    value: D,
                                                    onChange: (e) => W(parseInt(e.target.value), E),
                                                    className:
                                                        "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between text-xs text-gray-400 mt-1",
                                                    children: [
                                                        _jsx("span", { children: "1" }),
                                                        _jsx("span", { children: "5" }),
                                                        _jsx("span", { children: "10" }),
                                                        _jsx("span", { children: "15" }),
                                                        _jsx("span", { children: "20" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "Video Wall Specifications",
                                }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-blue-50 p-4 rounded-lg border-2 border-blue-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-blue-600 font-medium",
                                                    children: "Configuration",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-blue-700",
                                                    children: B.configuration,
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-blue-600",
                                                    children: [B.cols, " cols × ", B.rows, " rows"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-green-50 p-4 rounded-lg border-2 border-green-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-green-600 font-medium",
                                                    children: "Total Displays",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-green-700",
                                                    children: B.totalDisplays,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-green-600",
                                                    children: "displays needed",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600 font-medium",
                                                    children: "Diagonal Size",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-3xl font-bold text-purple-700",
                                                    children: [Math.round(B.diagonalIn), '"'],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-purple-600",
                                                    children: [B.diagonalFt.toFixed(1), " ft"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-orange-50 p-4 rounded-lg border-2 border-orange-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-orange-600 font-medium",
                                                    children: "Actual Aspect Ratio",
                                                }),
                                                _jsx("div", {
                                                    className: "text-2xl font-bold text-orange-700",
                                                    children: B.aspectRatio,
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-orange-600",
                                                    children: ["≈ ", B.aspectDecimal, ":1"],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                "dimension" === h &&
                                    _jsx("div", {
                                        className: "p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-6",
                                        children: _jsxs("p", {
                                            className: "text-sm text-yellow-800",
                                            children: [
                                                _jsx("strong", { children: "Note:" }),
                                                " Target aspect ratio was ",
                                                v,
                                                ":",
                                                w,
                                                ". The actual wall aspect ratio (",
                                                B.aspectRatio,
                                                ") may differ slightly because displays must be arranged in whole units.",
                                            ],
                                        }),
                                    }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-2 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "p-4 bg-gray-50 rounded-lg overflow-hidden",
                                            children: [
                                                _jsx("h3", {
                                                    className: "font-semibold text-gray-700 mb-3",
                                                    children: "Physical Dimensions",
                                                }),
                                                _jsxs("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Width:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [
                                                                        B.totalWidthFt.toFixed(2),
                                                                        " ft (",
                                                                        B.totalWidthM.toFixed(2),
                                                                        " m)",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Height:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [
                                                                        B.totalHeightFt.toFixed(2),
                                                                        " ft (",
                                                                        B.totalHeightM.toFixed(2),
                                                                        " m)",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Diagonal:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [
                                                                        B.diagonalFt.toFixed(2),
                                                                        " ft (",
                                                                        Math.round(B.diagonalIn),
                                                                        '")',
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "p-4 bg-gray-50 rounded-lg overflow-hidden",
                                            children: [
                                                _jsx("h3", {
                                                    className: "font-semibold text-gray-700 mb-3",
                                                    children: "Total Resolution",
                                                }),
                                                _jsxs("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Resolution:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [
                                                                        B.totalResWidth,
                                                                        " × ",
                                                                        B.totalResHeight,
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Total Pixels:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [(B.totalPixels / 1e6).toFixed(2), " MP"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Aspect Ratio:",
                                                                }),
                                                                _jsx("span", {
                                                                    className: "font-medium",
                                                                    children: B.aspectRatio,
                                                                }),
                                                            ],
                                                        }),
                                                        B.bezelGapMM > 0 &&
                                                            _jsxs("div", {
                                                                className:
                                                                    "flex justify-between min-w-0 pt-2 border-t border-gray-200 mt-2",
                                                                children: [
                                                                    _jsx("span", {
                                                                        className: "text-gray-600",
                                                                        children: "Bezel Gaps:",
                                                                    }),
                                                                    _jsxs("span", {
                                                                        className: "font-medium text-orange-600",
                                                                        children: [
                                                                            "+",
                                                                            B.totalBezelWidthMM,
                                                                            "×",
                                                                            B.totalBezelHeightMM,
                                                                            " mm",
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "p-4 bg-purple-50 rounded-lg border border-purple-200",
                                            children: [
                                                _jsx("h3", {
                                                    className: "font-semibold text-purple-800 mb-3",
                                                    children: "Viewing Distance (AVIXA DISCAS)",
                                                }),
                                                _jsxs("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Pixel Pitch:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium",
                                                                    children: [B.pixelPitchMM, " mm"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Analytical (data/text):",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium text-red-600",
                                                                    children: [
                                                                        "≥ ",
                                                                        B.minViewingAnalyticalFt,
                                                                        "' / ",
                                                                        B.minViewingAnalyticalM,
                                                                        "m",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Basic (presentations):",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium text-yellow-600",
                                                                    children: [
                                                                        "≥ ",
                                                                        B.minViewingBasicFt,
                                                                        "' / ",
                                                                        B.minViewingBasicM,
                                                                        "m",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Video content:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium text-green-600",
                                                                    children: [
                                                                        "≥ ",
                                                                        B.minViewingVideoFt,
                                                                        "' / ",
                                                                        B.minViewingVideoM,
                                                                        "m",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-purple-600 mt-2",
                                                    children:
                                                        "Minimum viewing distances for comfortable viewing without visible pixels",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "p-4 bg-gray-900 rounded-lg",
                                    children: [
                                        _jsx("h3", {
                                            className: "font-semibold text-white mb-3 text-center",
                                            children: "Visual Preview",
                                        }),
                                        _jsx("div", {
                                            className: "flex justify-center items-center px-2 sm:px-4",
                                            children: _jsx("div", {
                                                className: "grid gap-0.5 sm:gap-1 p-2 bg-gray-800 rounded w-full",
                                                style: {
                                                    gridTemplateColumns: `repeat(${B.cols}, 1fr)`,
                                                    maxWidth: `min(100%, ${Math.min(600, 80 * B.cols)}px)`,
                                                    aspectRatio: `${B.cols * i} / ${B.rows * o}`,
                                                },
                                                children: Array.from({ length: B.totalDisplays }).map((e, t) =>
                                                    _jsx(
                                                        "div",
                                                        {
                                                            className:
                                                                "bg-blue-500 rounded-sm flex items-center justify-center text-white font-bold border border-blue-400 overflow-hidden",
                                                            style: {
                                                                aspectRatio: `${i} / ${o}`,
                                                                fontSize: `clamp(8px, ${Math.min(2, 20 / Math.max(B.cols, B.rows))}vw, 14px)`,
                                                            },
                                                            children: B.totalDisplays <= 50 ? t + 1 : "",
                                                        },
                                                        t
                                                    )
                                                ),
                                            }),
                                        }),
                                        _jsxs("p", {
                                            className: "text-center text-gray-400 text-xs mt-3",
                                            children: [
                                                B.cols,
                                                " columns × ",
                                                B.rows,
                                                " rows = ",
                                                B.totalDisplays,
                                                " displays",
                                            ],
                                        }),
                                        _jsxs("p", {
                                            className: "text-center text-gray-500 text-xs mt-1",
                                            children: [
                                                B.totalWidthFt.toFixed(1),
                                                "' × ",
                                                B.totalHeightFt.toFixed(1),
                                                "' (",
                                                B.aspectRatio,
                                                ")",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
window.AVToolsWebsite = AVToolsWebsite;

export default VideoWallBuilderCalculator;
