import { _jsx, _jsxs, ResetConfirmModal, calculateSpeakerPower } from '../utils.js';

const { useState, useEffect, useRef } = React;

function SpeakerCalculator() {
    const [e, t] = useState(75),
        [s, a] = useState(10),
        [r, l] = useState(90),
        [i, n] = useState(3),
        [o, d] = useState("m"),
        [c, m] = useState(!1),
        [x, u] = useState(10),
        [h, p] = useState(4),
        [g, b] = useState(90),
        [f, y] = useState("minimal"),
        [j, _] = useState("ft"),
        [v, N] = useState(40),
        [w, C] = useState(30),
        [M, k] = useState("ft"),
        [S, R] = useState(null),
        [P, A] = useState(!1),
        D = (e) => {
            const t = j,
                s = M,
                a = o,
                r = 0.3048,
                l = 3.28084;
            t !== e &&
                ("ft" === t && "m" === e
                    ? (u((e) => Math.round(e * r * 100) / 100), p((e) => Math.round(e * r * 100) / 100))
                    : "m" === t &&
                      "ft" === e &&
                      (u((e) => Math.round(e * l * 100) / 100), p((e) => Math.round(e * l * 100) / 100)),
                _(e)),
                s !== e &&
                    ("ft" === s && "m" === e
                        ? (N((e) => Math.round(e * r * 100) / 100), C((e) => Math.round(e * r * 100) / 100))
                        : "m" === s &&
                          "ft" === e &&
                          (N((e) => Math.round(e * l * 100) / 100), C((e) => Math.round(e * l * 100) / 100)),
                    k(e)),
                a !== e &&
                    ("ft" === a && "m" === e
                        ? n((e) => Math.round(e * r * 100) / 100)
                        : "m" === a && "ft" === e && n((e) => Math.round(e * l * 100) / 100),
                    d(e));
        };
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-6 py-8",
        children: [
            _jsx("div", {
                className: "mb-4",
                children: _jsxs("span", {
                    className:
                        "inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full border border-purple-200",
                    children: [_jsx("span", { className: "text-purple-600", children: "⚡" }), " Advanced Tool"],
                }),
            }),
            _jsxs("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "Speaker Design Calculator",
                    }),
                    S !== null &&
                        _jsx("button", {
                            onClick: () => A(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: P,
                onConfirm: () => {
                    t(75),
                        a(10),
                        l(90),
                        n(3),
                        d("m"),
                        m(!1),
                        u(10),
                        p(4),
                        b(90),
                        y("minimal"),
                        _("ft"),
                        N(40),
                        C(30),
                        k("ft"),
                        R(null),
                        A(!1);
                },
                onCancel: () => A(!1),
            }),
            _jsx("p", {
                className: "text-gray-600 mb-4",
                children:
                    "Professional speaker system design tool based on AVIXA CTS-D standards and industry practices",
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Calculates electrical power required (EPR) per speaker using the AVIXA formula, determines amplifier sizing, and designs ceiling speaker layouts with proper coverage spacing based on mounting height and coverage angle.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl shadow-md p-8 mb-8 border",
                children: [
                    _jsxs("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                        children: [
                            _jsx("span", { className: "text-blue-600", children: "🔊" }),
                            " EPR (Electrical Power Required) Calculator",
                        ],
                    }),
                    _jsx("p", {
                        className: "text-sm text-gray-600 mb-4",
                        children:
                            "Calculate the electrical power required per speaker using the AVIXA standard formula.",
                    }),
                    _jsxs("div", {
                        className: "mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200",
                        children: [
                            _jsxs("p", {
                                className: "text-sm text-blue-800 font-mono",
                                children: [
                                    _jsx("strong", { children: "AVIXA Formula:" }),
                                    " EPR = 10",
                                    _jsx("sup", { children: "((Lp + H - Ls + 20×log₁₀(D/1m)) / 10)" }),
                                    " × 1W",
                                ],
                            }),
                            _jsx("p", {
                                className: "text-xs text-blue-600 mt-1",
                                children:
                                    "Where: Lp = Target SPL, H = Headroom, Ls = Sensitivity (dB @ 1W/1m), D = Distance to listener",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Distance Unit",
                                    }),
                                    _jsxs("select", {
                                        value: o,
                                        onChange: (e) => {
                                            return (t = e.target.value), void D(t);
                                            var t;
                                        },
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            _jsx("option", { value: "m", children: "Meters (m)" }),
                                            _jsx("option", { value: "ft", children: "Feet (ft)" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: ["Distance to Listener (", o, ")"],
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        min: "0.1",
                                        value: i,
                                        onChange: (e) => n("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "D₂ in AVIXA formula",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Target SPL at Listener (dB)",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        value: e,
                                        onChange: (e) => t("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Lp in AVIXA formula - desired sound level at listener position",
                                    }),
                                    _jsx("div", {
                                        className: "flex flex-wrap gap-2 mt-2",
                                        children: [
                                            { spl: 65, label: "65 dB", color: "green" },
                                            { spl: 70, label: "70 dB", color: "green" },
                                            { spl: 75, label: "75 dB", color: "blue" },
                                            { spl: 80, label: "80 dB", color: "blue" },
                                            { spl: 85, label: "85 dB", color: "yellow" },
                                            { spl: 90, label: "90 dB", color: "orange" },
                                            { spl: 95, label: "95 dB", color: "red" },
                                        ].map((s) =>
                                            _jsx(
                                                "button",
                                                {
                                                    onClick: () => t(s.spl),
                                                    className:
                                                        "px-3 py-1 text-xs rounded transition-colors " +
                                                        (e === s.spl
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-gray-100 text-gray-700 hover:bg-blue-50"),
                                                    children: s.label,
                                                },
                                                s.spl
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Headroom (dB)",
                                    }),
                                    _jsxs("select", {
                                        value: s,
                                        onChange: (e) => a("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            _jsx("option", { value: "6", children: "6 dB (Paging Only)" }),
                                            _jsx("option", { value: "10", children: "10 dB (Speech / Paging)" }),
                                            _jsx("option", { value: "15", children: "15 dB (Speech + Music)" }),
                                            _jsx("option", { value: "20", children: "20 dB (Background Music)" }),
                                            _jsx("option", { value: "25", children: "25 dB (Foreground Music)" }),
                                            _jsx("option", { value: "40", children: "40 dB (Live Performance)" }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "H in AVIXA formula - headroom for peaks",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "md:col-span-2",
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Speaker Sensitivity (dB @ 1W/1m)",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        value: r,
                                        onChange: (e) => l("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children:
                                            "Ls in AVIXA formula - from speaker specifications (typical: 84-97 dB)",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className:
                            "mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200",
                        children: [
                            _jsx("h3", {
                                className: "text-sm font-semibold text-gray-800 mb-3",
                                children: "📊 Target SPL Reference Guide (AVIXA/Industry Standards)",
                            }),
                            _jsx("p", {
                                className: "text-xs text-gray-600 mb-4",
                                children:
                                    "Target SPL is the desired sound pressure level at the listener position. Choose based on ambient noise level (system should be 10-25 dB above ambient for intelligibility) and application requirements.",
                            }),
                            _jsxs("div", {
                                className: "grid md:grid-cols-2 gap-4",
                                children: [
                                    _jsxs("div", {
                                        className: "bg-white p-3 rounded-lg border border-green-200",
                                        children: [
                                            _jsxs("h4", {
                                                className:
                                                    "text-xs font-semibold text-green-700 mb-2 flex items-center gap-1",
                                                children: [_jsx("span", { children: "🟢" }), " Low Level (60-70 dB)"],
                                            }),
                                            _jsxs("ul", {
                                                className: "text-xs text-gray-600 space-y-1",
                                                children: [
                                                    _jsxs("li", {
                                                        children: [
                                                            _jsx("strong", { children: "60-65 dB:" }),
                                                            " Quiet BGM, libraries, spas, waiting rooms",
                                                        ],
                                                    }),
                                                    _jsxs("li", {
                                                        children: [
                                                            _jsx("strong", { children: "65-70 dB:" }),
                                                            " Retail BGM, restaurants, hotel lobbies, offices",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsx("p", {
                                                className: "text-xs text-green-600 mt-2 italic",
                                                children: "Ambient: 40-50 dB (quiet spaces)",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white p-3 rounded-lg border border-blue-200",
                                        children: [
                                            _jsxs("h4", {
                                                className:
                                                    "text-xs font-semibold text-blue-700 mb-2 flex items-center gap-1",
                                                children: [
                                                    _jsx("span", { children: "🔵" }),
                                                    " Medium Level (70-80 dB)",
                                                ],
                                            }),
                                            _jsxs("ul", {
                                                className: "text-xs text-gray-600 space-y-1",
                                                children: [
                                                    _jsxs("li", {
                                                        children: [
                                                            _jsx("strong", { children: "70-75 dB:" }),
                                                            " Paging, announcements, airports, transit",
                                                        ],
                                                    }),
                                                    _jsxs("li", {
                                                        children: [
                                                            _jsx("strong", { children: "75-80 dB:" }),
                                                            " Speech/presentations, classrooms, conference rooms",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsx("p", {
                                                className: "text-xs text-blue-600 mt-2 italic",
                                                children: "Ambient: 50-65 dB (moderate noise)",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white p-3 rounded-lg border border-yellow-200",
                                        children: [
                                            _jsxs("h4", {
                                                className:
                                                    "text-xs font-semibold text-yellow-700 mb-2 flex items-center gap-1",
                                                children: [_jsx("span", { children: "🟡" }), " High Level (80-90 dB)"],
                                            }),
                                            _jsxs("ul", {
                                                className: "text-xs text-gray-600 space-y-1",
                                                children: [
                                                    _jsxs("li", {
                                                        children: [
                                                            _jsx("strong", { children: "80-85 dB:" }),
                                                            " Foreground music, bars, fitness centers, worship",
                                                        ],
                                                    }),
                                                    _jsxs("li", {
                                                        children: [
                                                            _jsx("strong", { children: "85-90 dB:" }),
                                                            " Dance clubs, performance venues, cinema",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsx("p", {
                                                className: "text-xs text-yellow-600 mt-2 italic",
                                                children: "Ambient: 65-75 dB (noisy environments)",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white p-3 rounded-lg border border-red-200",
                                        children: [
                                            _jsxs("h4", {
                                                className:
                                                    "text-xs font-semibold text-red-700 mb-2 flex items-center gap-1",
                                                children: [
                                                    _jsx("span", { children: "🔴" }),
                                                    " Very High Level (90-105 dB)",
                                                ],
                                            }),
                                            _jsxs("ul", {
                                                className: "text-xs text-gray-600 space-y-1",
                                                children: [
                                                    _jsxs("li", {
                                                        children: [
                                                            _jsx("strong", { children: "90-95 dB:" }),
                                                            " Live music, DJ events, concerts",
                                                        ],
                                                    }),
                                                    _jsxs("li", {
                                                        children: [
                                                            _jsx("strong", { children: "95-105 dB:" }),
                                                            " Stadiums, large arenas, outdoor festivals",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsx("p", {
                                                className: "text-xs text-red-600 mt-2 italic",
                                                children: "⚠️ Hearing protection recommended >85 dB",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsx("div", {
                                className: "mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200",
                                children: _jsxs("p", {
                                    className: "text-xs text-yellow-800",
                                    children: [
                                        _jsx("strong", { children: "💡 AVIXA Tip:" }),
                                        " For speech intelligibility, target SPL should be at least ",
                                        _jsx("strong", { children: "10 dB above ambient noise" }),
                                        ". For excellent intelligibility (STI > 0.6), aim for ",
                                        _jsx("strong", { children: "15-25 dB above ambient" }),
                                        ". AVIXA recommends not exceeding 85 dB for extended periods without hearing protection considerations.",
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl shadow-md p-8 mb-8 border",
                children: [
                    _jsxs("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            _jsxs("h2", {
                                className: "text-xl font-semibold text-gray-800 flex items-center gap-2",
                                children: [
                                    _jsx("span", { className: "text-purple-600", children: "📍" }),
                                    " Ceiling Speaker Layout",
                                ],
                            }),
                            _jsxs("label", {
                                className: "flex items-center gap-3 cursor-pointer",
                                children: [
                                    _jsx("span", {
                                        className: "text-sm text-gray-600",
                                        children: "Enable ceiling mount calculations",
                                    }),
                                    _jsx("input", {
                                        type: "checkbox",
                                        checked: c,
                                        onChange: (e) => m(e.target.checked),
                                        className:
                                            "w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    c &&
                        _jsxs(_Fragment, {
                            children: [
                                _jsx("p", {
                                    className: "text-sm text-gray-600 mb-6",
                                    children:
                                        "Calculate speaker coverage pattern and optimal spacing for ceiling-mounted speakers.",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-6 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Unit",
                                                }),
                                                _jsxs("select", {
                                                    value: j,
                                                    onChange: (e) => {
                                                        return (t = e.target.value), void D(t);
                                                        var t;
                                                    },
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                    children: [
                                                        _jsx("option", { value: "ft", children: "Feet (ft)" }),
                                                        _jsx("option", { value: "m", children: "Meters (m)" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: ["Ceiling Height (", j, ")"],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "0.5",
                                                    min: "1",
                                                    value: x,
                                                    onChange: (e) =>
                                                        u("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: ["Listener Ear Height (", j, ")"],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "0.5",
                                                    min: "0",
                                                    value: h,
                                                    onChange: (e) =>
                                                        p("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children:
                                                        "ft" === j
                                                            ? "Typically 4ft seated, 5ft standing"
                                                            : "Typically 1.2m seated, 1.5m standing",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Speaker Coverage Angle (°)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "0",
                                                    max: "999",
                                                    value: g,
                                                    onChange: (e) =>
                                                        b(
                                                            "" === e.target.value
                                                                ? ""
                                                                : Math.min(999, Number(e.target.value) || "")
                                                        ),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                    placeholder: "90",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children:
                                                        "From speaker specifications (-6dB point). Common: 60°-180°",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Spacing Pattern",
                                                }),
                                                _jsxs("select", {
                                                    value: f,
                                                    onChange: (e) => y(e.target.value),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                    children: [
                                                        _jsx("option", {
                                                            value: "edge",
                                                            children: "Edge-to-Edge (1.0D) - Minimum speakers",
                                                        }),
                                                        _jsx("option", {
                                                            value: "minimal",
                                                            children: "Partial Overlap (0.75D) - Good uniformity ★",
                                                        }),
                                                        _jsx("option", {
                                                            value: "center",
                                                            children: "Edge-to-Center (0.52D) - Maximum uniformity",
                                                        }),
                                                    ],
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "★ Recommended for most applications",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-3 gap-4 mb-4",
                                    children: [
                                        _jsxs("div", {
                                            className:
                                                "p-4 rounded-lg border-2 cursor-pointer transition-all " +
                                                ("edge" === f
                                                    ? "border-orange-500 bg-orange-50"
                                                    : "border-gray-200 hover:border-gray-300"),
                                            onClick: () => y("edge"),
                                            children: [
                                                _jsx("div", {
                                                    className: "flex justify-center mb-2",
                                                    children: _jsxs("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className:
                                                                    "w-8 h-8 rounded-full border-2 border-orange-400 bg-orange-100",
                                                            }),
                                                            _jsx("div", {
                                                                className:
                                                                    "w-8 h-8 rounded-full border-2 border-orange-400 bg-orange-100 -ml-0",
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                _jsx("div", {
                                                    className: "text-sm font-medium text-center",
                                                    children: "Edge-to-Edge",
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 text-center",
                                                    children: "1.0D spacing",
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-orange-600 text-center font-medium",
                                                    children: "Fewest speakers",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "p-4 rounded-lg border-2 cursor-pointer transition-all " +
                                                ("minimal" === f
                                                    ? "border-green-500 bg-green-50"
                                                    : "border-gray-200 hover:border-gray-300"),
                                            onClick: () => y("minimal"),
                                            children: [
                                                _jsx("div", {
                                                    className: "flex justify-center mb-2",
                                                    children: _jsxs("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className:
                                                                    "w-8 h-8 rounded-full border-2 border-green-400 bg-green-100",
                                                            }),
                                                            _jsx("div", {
                                                                className:
                                                                    "w-8 h-8 rounded-full border-2 border-green-400 bg-green-100 -ml-3",
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                _jsx("div", {
                                                    className: "text-sm font-medium text-center",
                                                    children: "Partial Overlap ★",
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 text-center",
                                                    children: "0.75D spacing",
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-green-600 text-center font-medium",
                                                    children: "Good uniformity",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "p-4 rounded-lg border-2 cursor-pointer transition-all " +
                                                ("center" === f
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-gray-300"),
                                            onClick: () => y("center"),
                                            children: [
                                                _jsx("div", {
                                                    className: "flex justify-center mb-2",
                                                    children: _jsxs("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className:
                                                                    "w-8 h-8 rounded-full border-2 border-blue-400 bg-blue-100",
                                                            }),
                                                            _jsx("div", {
                                                                className:
                                                                    "w-8 h-8 rounded-full border-2 border-blue-400 bg-blue-100 -ml-5",
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                _jsx("div", {
                                                    className: "text-sm font-medium text-center",
                                                    children: "Edge-to-Center",
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 text-center",
                                                    children: "0.52D spacing",
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-blue-600 text-center font-medium",
                                                    children: "Best uniformity",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "mt-6 p-4 bg-green-50 rounded-lg border border-green-200",
                                    children: [
                                        _jsxs("h3", {
                                            className:
                                                "text-md font-semibold text-green-800 mb-3 flex items-center gap-2",
                                            children: [
                                                _jsx("span", { children: "📐" }),
                                                " Room Size (for Speaker Count Recommendation)",
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "grid md:grid-cols-3 gap-4",
                                            children: [
                                                _jsxs("div", {
                                                    children: [
                                                        _jsx("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "Unit",
                                                        }),
                                                        _jsxs("select", {
                                                            value: M,
                                                            onChange: (e) => {
                                                                return (t = e.target.value), void D(t);
                                                                var t;
                                                            },
                                                            className:
                                                                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",
                                                            children: [
                                                                _jsx("option", { value: "ft", children: "Feet (ft)" }),
                                                                _jsx("option", { value: "m", children: "Meters (m)" }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    children: [
                                                        _jsxs("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: ["Room Length (", M, ")"],
                                                        }),
                                                        _jsx("input", {
                                                            type: "number",
                                                            step: "1",
                                                            min: "1",
                                                            value: v,
                                                            onChange: (e) =>
                                                                N(
                                                                    "" === e.target.value
                                                                        ? ""
                                                                        : parseFloat(e.target.value)
                                                                ),
                                                            className:
                                                                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    children: [
                                                        _jsxs("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: ["Room Width (", M, ")"],
                                                        }),
                                                        _jsx("input", {
                                                            type: "number",
                                                            step: "1",
                                                            min: "1",
                                                            value: w,
                                                            onChange: (e) =>
                                                                C(
                                                                    "" === e.target.value
                                                                        ? ""
                                                                        : parseFloat(e.target.value)
                                                                ),
                                                            className:
                                                                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsx("p", {
                                            className: "text-xs text-green-700 mt-2",
                                            children:
                                                "Enter room dimensions to get speaker count and layout recommendations based on the ceiling speaker coverage pattern above.",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    !c &&
                        _jsx("p", {
                            className: "text-sm text-gray-500 italic",
                            children: "Enable the checkbox above to calculate ceiling speaker coverage and spacing.",
                        }),
                ],
            }),
            _jsx("button", {
                onClick: () => {
                    const t = ((e, t) => {
                            switch (t) {
                                case "ft":
                                    return 0.3048 * e;
                                case "in":
                                    return 0.0254 * e;
                                default:
                                    return e;
                            }
                        })(i, o),
                        a = t / 1,
                        l = 20 * Math.log10(a),
                        n = (e + s - r + l) / 10,
                        d = 1 * Math.pow(10, n),
                        m = {
                            requiredWatts: d < 0.01 ? 0.01 : Math.round(100 * d) / 100,
                            distanceLoss: Math.round(100 * l) / 100,
                            distanceM: Math.round(100 * t) / 100,
                            exponent: Math.round(1e3 * n) / 1e3,
                        };
                    let u = null,
                        p = null;
                    if (c) {
                        const e = x - h,
                            t = e <= 0.5,
                            s = "m" === j ? 1.2 : 4,
                            a = Math.max(s, e),
                            r = e < s && e > 0,
                            l = (Math.min(170, Math.max(10, g)) / 2) * (Math.PI / 180),
                            i = 2 * a * Math.tan(l),
                            n = i / 2;
                        let o, d, c, m;
                        switch (f) {
                            case "edge":
                                (o = i),
                                    (d = "Edge to Edge"),
                                    (c = "Coverage circles touch at edges (±4.4dB). Suitable for BGM/paging only."),
                                    (m = "±4.4 dB");
                                break;
                            case "minimal":
                            default:
                                (o = n * Math.sqrt(2)),
                                    (d = "Minimum Overlap"),
                                    (c = "AVIXA recommended (~29% overlap, ±2dB). Best balance of coverage and cost."),
                                    (m = "±2.0 dB");
                                break;
                            case "center":
                                (o = n),
                                    (d = "Full Overlap (Center-to-Center)"),
                                    (c =
                                        "Maximum uniformity (50% overlap, ±1.4dB). For critical listening applications."),
                                    (m = "±1.4 dB");
                        }
                        const u = Math.PI * Math.pow(n, 2),
                            b = "m" === j ? "m²" : "ft²";
                        p = {
                            effectiveHeight: Math.round(100 * a) / 100,
                            rawEffectiveHeight: Math.round(100 * e) / 100,
                            effectiveHeightWarning: t,
                            lowCeilingWarning: r,
                            coverageEfficiency: 1,
                            coverageDiameter: Math.round(100 * i) / 100,
                            rawCoverageDiameter: Math.round(100 * i) / 100,
                            coverageRadius: Math.round(100 * n) / 100,
                            coverageArea: Math.round(100 * u) / 100,
                            speakerSpacing: Math.round(100 * o) / 100,
                            spacingLabel: d,
                            spacingDescription: c,
                            dbVariation: m,
                            unit: j,
                            areaUnit: b,
                            coverageAdjusted: !1,
                        };
                    }
                    let b = null;
                    if (c && v > 0 && w > 0) {
                        const e =
                                M === j
                                    ? v
                                    : "ft" === M && "m" === j
                                      ? 0.3048 * v
                                      : "m" === M && "ft" === j
                                        ? 3.28084 * v
                                        : v,
                            t =
                                M === j
                                    ? w
                                    : "ft" === M && "m" === j
                                      ? 0.3048 * w
                                      : "m" === M && "ft" === j
                                        ? 3.28084 * w
                                        : w,
                            s = e * t,
                            a = p.coverageDiameter,
                            r = (p.coverageRadius, p.coverageArea),
                            l = { edge: 1, minimal: 0.75, center: 0.52 },
                            i = a * l[f],
                            n = Math.max(1, Math.round(e / i)),
                            o = Math.max(1, Math.round(t / i)),
                            d = n * o,
                            c = e / n,
                            x = t / o,
                            h = d * r,
                            g = Math.min(100, (h / s) * 100),
                            y = [],
                            _ = {
                                name:
                                    "edge" === f
                                        ? "Edge-to-Edge"
                                        : "minimal" === f
                                          ? "Partial Overlap"
                                          : "Edge-to-Center",
                                rows: o,
                                cols: n,
                                total: d,
                                spacingL: Math.round(100 * c) / 100,
                                spacingW: Math.round(100 * x) / 100,
                                coverage: Math.round(g),
                                description:
                                    "edge" === f
                                        ? "Coverage circles touch at edges (1.0D)"
                                        : "minimal" === f
                                          ? "Partial overlap for good uniformity (0.75D)"
                                          : "Maximum uniformity - edge to center (0.52D)",
                                isSelected: !0,
                                isAVIXA: !1,
                            };
                        y.push(_);
                        const N = a * l.edge,
                            C = a * l.minimal,
                            k = a * l.center,
                            S = Math.max(1, Math.round(e / N)),
                            R = Math.max(1, Math.round(t / N)),
                            P = S * R,
                            A = Math.max(1, Math.round(e / C)),
                            D = Math.max(1, Math.round(t / C)),
                            I = A * D,
                            E = Math.max(1, Math.round(e / k)),
                            F = Math.max(1, Math.round(t / k)),
                            B = E * F;
                        "edge" !== f &&
                            P !== d &&
                            y.push({
                                name: "Edge-to-Edge",
                                rows: R,
                                cols: S,
                                total: P,
                                spacingL: Math.round((e / S) * 100) / 100,
                                spacingW: Math.round((t / R) * 100) / 100,
                                coverage: Math.round(Math.min(100, ((P * r) / s) * 100)),
                                description: "Economy option - circles touch (1.0D)",
                                isSelected: !1,
                                isAVIXA: !1,
                            }),
                            "minimal" !== f &&
                                I !== d &&
                                y.push({
                                    name: "Partial Overlap",
                                    rows: D,
                                    cols: A,
                                    total: I,
                                    spacingL: Math.round((e / A) * 100) / 100,
                                    spacingW: Math.round((t / D) * 100) / 100,
                                    coverage: Math.round(Math.min(100, ((I * r) / s) * 100)),
                                    description: "Good uniformity (0.75D)",
                                    isSelected: !1,
                                    isAVIXA: !1,
                                }),
                            "center" !== f &&
                                B !== d &&
                                y.push({
                                    name: "Edge-to-Center",
                                    rows: F,
                                    cols: E,
                                    total: B,
                                    spacingL: Math.round((e / E) * 100) / 100,
                                    spacingW: Math.round((t / F) * 100) / 100,
                                    coverage: Math.round(Math.min(100, ((B * r) / s) * 100)),
                                    description: "Maximum uniformity (0.52D)",
                                    isSelected: !1,
                                    isAVIXA: !1,
                                }),
                            y.sort((e, t) => (e.isSelected ? -1 : t.isSelected ? 1 : e.total - t.total));
                        const T = M !== j,
                            L = s / d,
                            H = p.coverageDiameter,
                            U = H - c,
                            q = H - x,
                            $ = Math.round((U / H) * 100),
                            W = Math.round((q / H) * 100),
                            V = Math.round(($ + W) / 2),
                            O =
                                "m" === j
                                    ? { critical: 10, speech: 25, background: 50 }
                                    : { critical: 100, speech: 250, background: 500 };
                        let z, G, X, J, Q;
                        L <= O.critical
                            ? ((z = "High Density"),
                              (G = "blue"),
                              (X = [
                                  "Recording studios",
                                  "Performance venues",
                                  "Executive boardrooms",
                                  "Critical listening rooms",
                              ]),
                              (J =
                                  "Maximum uniformity with potential phase interaction. Best for applications requiring precise SPL control."))
                            : L <= O.speech
                              ? ((z = "Medium Density"),
                                (G = "green"),
                                (X = [
                                    "Conference rooms",
                                    "Classrooms",
                                    "Training facilities",
                                    "Houses of worship",
                                    "Retail spaces",
                                ]),
                                (J =
                                    "Optimal balance of coverage and cost. Suitable for speech intelligibility and general audio."))
                              : L <= O.background
                                ? ((z = "Standard Density"),
                                  (G = "yellow"),
                                  (X = ["Open offices", "Restaurants", "Lobbies", "Background music systems"]),
                                  (J =
                                      "Cost-effective coverage for background audio. May have minor SPL variations in overlap zones."))
                                : ((z = "Low Density"),
                                  (G = "orange"),
                                  (X = ["Warehouses", "Paging systems", "Large open areas", "Basic announcements"]),
                                  (J =
                                      "Minimum coverage configuration. Expect noticeable SPL drops between speakers. Not recommended for speech clarity."));
                        const K = y.find((e) => "Partial Overlap" === e.name);
                        Q =
                            "edge" === f
                                ? {
                                      verdict: V < 0 ? "Coverage gaps likely" : "Minimal redundancy",
                                      consideration:
                                          "Edge-to-edge provides minimum speaker count but may have audible gaps. Consider for paging/announcement systems only.",
                                      alternative: K
                                          ? `For better uniformity, partial overlap would use ${K.total} speakers.`
                                          : null,
                                  }
                                : "minimal" === f
                                  ? {
                                        verdict: "Recommended",
                                        consideration:
                                            "Partial overlap (0.75D) provides good uniformity with cost efficiency. Standard for most commercial applications.",
                                        alternative: null,
                                    }
                                  : {
                                        verdict: "Maximum Uniformity",
                                        consideration:
                                            "Edge-to-center provides best SPL uniformity for critical listening applications like boardrooms, courtrooms, and performance spaces.",
                                        alternative: K
                                            ? `Partial overlap would achieve adequate coverage with ${K.total} speakers.`
                                            : null,
                                    };
                        const Y = "m" === j ? p.effectiveHeight : 0.3048 * p.effectiveHeight,
                            Z = 20 * Math.log10(Math.max(1, Y) / 1);
                        let ee = null;
                        Z > 14
                            ? (ee = {
                                  level: "high",
                                  color: "red",
                                  title: "High SPL Loss",
                                  message: `At ${p.effectiveHeight}${j} effective height, SPL drops ${Z.toFixed(1)}dB. Consider higher-powered speakers or additional units for speech intelligibility.`,
                                  recommendation:
                                      "Increase amplifier power or consider adding more speakers for critical listening applications.",
                              })
                            : Z > 11
                              ? (ee = {
                                    level: "moderate",
                                    color: "yellow",
                                    title: "Moderate SPL Loss",
                                    message: `At ${p.effectiveHeight}${j} effective height, SPL drops ${Z.toFixed(1)}dB. Standard for commercial spaces.`,
                                    recommendation: "Ensure adequate amplifier headroom for speech applications.",
                                })
                              : Z > 8 &&
                                (ee = {
                                    level: "normal",
                                    color: "green",
                                    title: "Normal SPL Loss",
                                    message: `SPL loss of ${Z.toFixed(1)}dB is within normal range for ceiling speakers.`,
                                    recommendation: null,
                                }),
                            (b = {
                                inputLength: v,
                                inputWidth: w,
                                inputUnit: M,
                                roomLength: e,
                                roomWidth: t,
                                roomArea: Math.round(100 * s) / 100,
                                roomUnit: j,
                                areaUnit: "m" === j ? "m²" : "ft²",
                                recommendedTotal: d,
                                rows: o,
                                cols: n,
                                actualSpacingLength: Math.round(100 * c) / 100,
                                actualSpacingWidth: Math.round(100 * x) / 100,
                                coveragePercent: Math.round(g),
                                layouts: y,
                                unitsConverted: T,
                                sqPerSpeaker: Math.round(10 * L) / 10,
                                overlapPercentL: $,
                                overlapPercentW: W,
                                avgOverlap: V,
                                densityRating: z,
                                densityColor: G,
                                suitableApplications: X,
                                densityNote: J,
                                patternRecommendation: Q,
                                splLossFromHeight: Math.round(10 * Z) / 10,
                                splWarning: ee,
                            });
                        const te = d,
                            se = m.requiredWatts * te * 1.5;
                        u = {
                            speakerCount: te,
                            totalSpeakerPower: Math.round(m.requiredWatts * te * 100) / 100,
                            requiredAmpPower: Math.round(100 * se) / 100,
                            eprPerSpeaker: m.requiredWatts,
                        };
                    }
                    R({ ...m, ceilingCalcs: p, roomRecommendation: b, amplifierCalcs: u });
                },
                className:
                    "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg mb-8 cursor-pointer",
                children: "Calculate Speaker Design",
            }),
            S &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-8 border",
                            children: [
                                _jsx("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "EPR Calculation Results (AVIXA Standard)",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-blue-50 p-6 rounded-lg border-2 border-blue-200",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Required Power per Speaker (EPR)",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-4xl font-bold text-blue-700",
                                                    children: [S.requiredWatts, " W"],
                                                }),
                                                _jsx("div", {
                                                    className: "text-sm text-gray-500 mt-2",
                                                    children: "Electrical Power Required",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-gray-50 p-6 rounded-lg border",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm text-gray-600 mb-3",
                                                    children: "AVIXA Formula Breakdown",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-600 space-y-2 font-mono",
                                                    children: [
                                                        _jsxs("p", {
                                                            children: [
                                                                "Target SPL (Lp): ",
                                                                _jsxs("span", {
                                                                    className: "font-bold truncate",
                                                                    children: [e, " dB"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("p", {
                                                            children: [
                                                                "Headroom (H): ",
                                                                _jsxs("span", {
                                                                    className: "font-bold truncate",
                                                                    children: [s, " dB"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("p", {
                                                            children: [
                                                                "Sensitivity (Ls): ",
                                                                _jsxs("span", {
                                                                    className: "font-bold truncate",
                                                                    children: [r, " dB @ 1W/1m"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("p", {
                                                            children: [
                                                                "Distance: ",
                                                                _jsxs("span", {
                                                                    className: "font-bold truncate",
                                                                    children: [i, " ", o],
                                                                }),
                                                                " = ",
                                                                _jsxs("span", {
                                                                    className: "font-bold truncate",
                                                                    children: [S.distanceM, " m"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("p", {
                                                            children: [
                                                                "Distance Loss: ",
                                                                _jsxs("span", {
                                                                    className: "font-bold truncate",
                                                                    children: [
                                                                        "20×log₁₀(",
                                                                        S.distanceM,
                                                                        "/1) = ",
                                                                        S.distanceLoss,
                                                                        " dB",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("p", {
                                                            className: "pt-2 border-t",
                                                            children: [
                                                                "Exponent: (",
                                                                e,
                                                                " + ",
                                                                s,
                                                                " - ",
                                                                r,
                                                                " + ",
                                                                S.distanceLoss,
                                                                ") / 10 = ",
                                                                _jsx("span", {
                                                                    className: "font-bold truncate",
                                                                    children: S.exponent,
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("p", {
                                                            children: [
                                                                "EPR = 10",
                                                                _jsx("sup", { children: S.exponent }),
                                                                " × 1W = ",
                                                                _jsxs("span", {
                                                                    className: "font-bold truncate",
                                                                    children: [S.requiredWatts, " W"],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        S.ceilingCalcs &&
                            _jsxs("div", {
                                className: "bg-white rounded-xl shadow-md p-8 border",
                                children: [
                                    _jsx("h3", {
                                        className: "text-lg font-semibold text-gray-800 mb-4",
                                        children: "Ceiling Speaker Layout Results (AVIXA Standards)",
                                    }),
                                    S.ceilingCalcs.effectiveHeightWarning &&
                                        _jsxs("div", {
                                            className: "mb-4 p-4 bg-red-50 border-2 border-red-300 rounded-lg",
                                            children: [
                                                _jsx("div", {
                                                    className: "font-semibold text-red-700 flex items-center gap-2",
                                                    children: "⚠️ Warning: Invalid Configuration",
                                                }),
                                                _jsxs("p", {
                                                    className: "text-sm text-red-600 mt-1",
                                                    children: [
                                                        "Listener ear height (",
                                                        h,
                                                        " ",
                                                        j,
                                                        ") is too close to or exceeds ceiling height (",
                                                        x,
                                                        " ",
                                                        j,
                                                        "). This results in unrealistic coverage calculations.",
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    className: "text-sm text-red-600 mt-1",
                                                    children: [
                                                        "Effective height: ",
                                                        S.ceilingCalcs.rawEffectiveHeight,
                                                        " ",
                                                        j,
                                                        " → Minimum of 0.1 ",
                                                        j,
                                                        " used.",
                                                    ],
                                                }),
                                                _jsx("p", {
                                                    className: "text-sm text-red-700 font-medium mt-2",
                                                    children:
                                                        "m" === j
                                                            ? "Typical ear height: 1.2m (seated) or 1.5m (standing)"
                                                            : "Typical ear height: 4ft (seated) or 5ft (standing)",
                                                }),
                                            ],
                                        }),
                                    _jsxs("div", {
                                        className: "grid md:grid-cols-3 gap-6 mb-6",
                                        children: [
                                            _jsxs("div", {
                                                className: "bg-purple-50 p-6 rounded-lg border-2 border-purple-200",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Coverage Diameter",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-3xl font-bold text-purple-700",
                                                        children: [
                                                            S.ceilingCalcs.coverageDiameter,
                                                            " ",
                                                            S.ceilingCalcs.unit,
                                                        ],
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-500 mt-1",
                                                        children: "at ear level",
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Coverage Radius (r)",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-3xl font-bold text-indigo-700",
                                                        children: [
                                                            S.ceilingCalcs.coverageRadius,
                                                            " ",
                                                            S.ceilingCalcs.unit,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-pink-50 p-6 rounded-lg border-2 border-pink-200",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Coverage Area",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-3xl font-bold text-pink-700",
                                                        children: [
                                                            S.ceilingCalcs.coverageArea,
                                                            " ",
                                                            S.ceilingCalcs.areaUnit,
                                                        ],
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-500 mt-1",
                                                        children: "per speaker",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className:
                                            "bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200 mb-6",
                                        children: [
                                            _jsxs("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: [
                                                            "Speaker Spacing (",
                                                            S.ceilingCalcs.spacingLabel,
                                                            ")",
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            _jsxs("span", {
                                                                className:
                                                                    "text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full",
                                                                children: [S.ceilingCalcs.dbVariation, " variation"],
                                                            }),
                                                            _jsx("span", {
                                                                className:
                                                                    "text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full",
                                                                children:
                                                                    "minimal" === f
                                                                        ? "AVIXA Recommended"
                                                                        : "edge" === f
                                                                          ? "Economy"
                                                                          : "Premium",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "text-5xl font-bold text-blue-700 mb-2",
                                                children: [S.ceilingCalcs.speakerSpacing, " ", S.ceilingCalcs.unit],
                                            }),
                                            _jsx("p", {
                                                className: "text-sm text-gray-600",
                                                children: S.ceilingCalcs.spacingDescription,
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-gray-50 p-4 rounded-lg mb-6",
                                        children: [
                                            _jsx("h4", {
                                                className: "font-semibold text-gray-700 mb-3",
                                                children: "AVIXA Spacing Options Comparison",
                                            }),
                                            _jsx("div", {
                                                className: "overflow-x-auto",
                                                children: _jsxs("table", {
                                                    className: "w-full text-sm",
                                                    children: [
                                                        _jsx("thead", {
                                                            children: _jsxs("tr", {
                                                                className: "border-b border-gray-300",
                                                                children: [
                                                                    _jsx("th", {
                                                                        className: "text-left py-2 px-2",
                                                                        children: "Pattern",
                                                                    }),
                                                                    _jsx("th", {
                                                                        className: "text-left py-2 px-2",
                                                                        children: "Formula",
                                                                    }),
                                                                    _jsx("th", {
                                                                        className: "text-left py-2 px-2",
                                                                        children: "Spacing",
                                                                    }),
                                                                    _jsx("th", {
                                                                        className: "text-left py-2 px-2",
                                                                        children: "SPL Variation",
                                                                    }),
                                                                    _jsx("th", {
                                                                        className: "text-left py-2 px-2",
                                                                        children: "Use Case",
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        _jsxs("tbody", {
                                                            children: [
                                                                _jsxs("tr", {
                                                                    className:
                                                                        "border-b " +
                                                                        ("edge" === f ? "bg-blue-100" : ""),
                                                                    children: [
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 font-medium",
                                                                            children: "Edge-to-Edge",
                                                                        }),
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 font-mono text-xs",
                                                                            children: "D = 2r",
                                                                        }),
                                                                        _jsxs("td", {
                                                                            className: "py-2 px-2",
                                                                            children: [
                                                                                (
                                                                                    2 * S.ceilingCalcs.coverageRadius
                                                                                ).toFixed(2),
                                                                                " ",
                                                                                S.ceilingCalcs.unit,
                                                                            ],
                                                                        }),
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 text-orange-600",
                                                                            children: "±4.35 dB",
                                                                        }),
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 text-xs",
                                                                            children: "Paging, BGM",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsxs("tr", {
                                                                    className:
                                                                        "border-b " +
                                                                        ("minimal" === f ? "bg-blue-100" : ""),
                                                                    children: [
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 font-medium",
                                                                            children: "Minimum Overlap",
                                                                        }),
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 font-mono text-xs",
                                                                            children: "D = r√2",
                                                                        }),
                                                                        _jsxs("td", {
                                                                            className: "py-2 px-2",
                                                                            children: [
                                                                                (
                                                                                    S.ceilingCalcs.coverageRadius *
                                                                                    Math.sqrt(2)
                                                                                ).toFixed(2),
                                                                                " ",
                                                                                S.ceilingCalcs.unit,
                                                                            ],
                                                                        }),
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 text-green-600",
                                                                            children: "±2 dB",
                                                                        }),
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 text-xs",
                                                                            children: "Speech, Music",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsxs("tr", {
                                                                    className: "center" === f ? "bg-blue-100" : "",
                                                                    children: [
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 font-medium",
                                                                            children: "Full Overlap",
                                                                        }),
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 font-mono text-xs",
                                                                            children: "D = r",
                                                                        }),
                                                                        _jsxs("td", {
                                                                            className: "py-2 px-2",
                                                                            children: [
                                                                                S.ceilingCalcs.coverageRadius,
                                                                                " ",
                                                                                S.ceilingCalcs.unit,
                                                                            ],
                                                                        }),
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 text-blue-600",
                                                                            children: "±1.2 dB",
                                                                        }),
                                                                        _jsx("td", {
                                                                            className: "py-2 px-2 text-xs",
                                                                            children: "Critical Listening",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "p-4 bg-gray-50 rounded-lg overflow-hidden",
                                        children: [
                                            _jsx("h4", {
                                                className: "font-semibold text-gray-700 mb-3",
                                                children: "Calculation Details",
                                            }),
                                            _jsxs("div", {
                                                className: "grid md:grid-cols-2 gap-4 text-sm",
                                                children: [
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-500",
                                                                children: "Effective Height (H - h):",
                                                            }),
                                                            _jsxs("p", {
                                                                className: "font-mono text-gray-700",
                                                                children: [
                                                                    x,
                                                                    " - ",
                                                                    h,
                                                                    " = ",
                                                                    S.ceilingCalcs.effectiveHeight,
                                                                    " ",
                                                                    S.ceilingCalcs.unit,
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-500",
                                                                children: "Coverage Angle (C∠):",
                                                            }),
                                                            _jsxs("p", {
                                                                className: "font-mono text-gray-700",
                                                                children: [g, "° (nominal)"],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "mt-3 pt-3 border-t border-gray-200 space-y-2",
                                                children: [
                                                    _jsxs("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            _jsx("strong", {
                                                                children: "AVIXA Coverage Diameter Formula:",
                                                            }),
                                                            " D = 2 × (H - h) × tan(C∠ ÷ 2)",
                                                        ],
                                                    }),
                                                    _jsxs("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            _jsx("strong", { children: "Note:" }),
                                                            " Effective coverage angle is typically 70-80% of nominal. For critical applications, consider using 80% of the specified angle.",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        S.roomRecommendation &&
                            _jsxs("div", {
                                className: "bg-white rounded-xl shadow-md p-8 border",
                                children: [
                                    _jsxs("h3", {
                                        className: "text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                        children: [
                                            _jsx("span", { className: "text-green-600", children: "📐" }),
                                            " Speaker Count Recommendation",
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "grid md:grid-cols-4 gap-4 mb-6",
                                        children: [
                                            _jsxs("div", {
                                                className: "bg-gray-50 p-4 rounded-lg border",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Room Dimensions",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xl font-bold text-gray-800",
                                                        children: [
                                                            S.roomRecommendation.roomLength,
                                                            " × ",
                                                            S.roomRecommendation.roomWidth,
                                                            " ",
                                                            S.roomRecommendation.roomUnit,
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "Area: ",
                                                            S.roomRecommendation.roomArea,
                                                            " ",
                                                            S.roomRecommendation.areaUnit,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-green-50 p-4 rounded-lg border-2 border-green-300",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-green-700 font-medium",
                                                        children: "Recommended Speakers",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-4xl font-bold text-green-700",
                                                        children: S.roomRecommendation.recommendedTotal,
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-sm text-green-600",
                                                        children: [
                                                            S.roomRecommendation.rows,
                                                            " rows × ",
                                                            S.roomRecommendation.cols,
                                                            " columns",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-blue-50 p-4 rounded-lg border",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Actual Spacing",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xl font-bold text-blue-700",
                                                        children: [
                                                            S.roomRecommendation.actualSpacingLength,
                                                            " × ",
                                                            S.roomRecommendation.actualSpacingWidth,
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-sm text-gray-500",
                                                        children: ["L × W (", S.roomRecommendation.roomUnit, ")"],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-purple-50 p-4 rounded-lg border",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Est. Coverage",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xl font-bold text-purple-700",
                                                        children: [S.roomRecommendation.coveragePercent, "%"],
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-500",
                                                        children: "of room area",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    S.roomRecommendation.layouts &&
                                        S.roomRecommendation.layouts.length > 1 &&
                                        _jsxs("div", {
                                            className: "mb-6",
                                            children: [
                                                _jsx("h4", {
                                                    className: "font-semibold text-gray-700 mb-3",
                                                    children: "Layout Options Comparison",
                                                }),
                                                _jsx("div", {
                                                    className: "grid md:grid-cols-3 gap-4",
                                                    children: S.roomRecommendation.layouts.map((e, t) =>
                                                        _jsxs(
                                                            "div",
                                                            {
                                                                className:
                                                                    "p-4 rounded-lg border-2 " +
                                                                    (e.isSelected
                                                                        ? "bg-green-50 border-green-400"
                                                                        : e.isAVIXA
                                                                          ? "bg-blue-50 border-blue-300"
                                                                          : "bg-gray-50 border-gray-200"),
                                                                children: [
                                                                    e.isSelected &&
                                                                        _jsx("div", {
                                                                            className:
                                                                                "text-xs font-bold text-green-700 mb-1",
                                                                            children: "✓ YOUR SELECTION",
                                                                        }),
                                                                    !e.isSelected &&
                                                                        e.isAVIXA &&
                                                                        _jsx("div", {
                                                                            className:
                                                                                "text-xs font-bold text-blue-600 mb-1",
                                                                            children: "★ AVIXA STANDARD",
                                                                        }),
                                                                    !e.isSelected &&
                                                                        !e.isAVIXA &&
                                                                        _jsx("div", {
                                                                            className:
                                                                                "text-xs font-medium text-gray-500 mb-1",
                                                                            children: "ALTERNATIVE",
                                                                        }),
                                                                    _jsx("div", {
                                                                        className:
                                                                            "font-semibold " +
                                                                            (e.isSelected
                                                                                ? "text-green-800"
                                                                                : e.isAVIXA
                                                                                  ? "text-blue-800"
                                                                                  : "text-gray-800"),
                                                                        children: e.name,
                                                                    }),
                                                                    _jsxs("div", {
                                                                        className:
                                                                            "text-3xl font-bold my-2 " +
                                                                            (e.isSelected
                                                                                ? "text-green-700"
                                                                                : e.isAVIXA
                                                                                  ? "text-blue-700"
                                                                                  : "text-gray-800"),
                                                                        children: [e.total, " speakers"],
                                                                    }),
                                                                    _jsxs("div", {
                                                                        className: "text-sm text-gray-600 space-y-1",
                                                                        children: [
                                                                            _jsxs("div", {
                                                                                children: [
                                                                                    "Grid: ",
                                                                                    e.rows,
                                                                                    " × ",
                                                                                    e.cols,
                                                                                ],
                                                                            }),
                                                                            _jsxs("div", {
                                                                                children: [
                                                                                    "Spacing: ",
                                                                                    e.spacingL,
                                                                                    " × ",
                                                                                    e.spacingW,
                                                                                    " ",
                                                                                    S.roomRecommendation.roomUnit,
                                                                                ],
                                                                            }),
                                                                            _jsxs("div", {
                                                                                children: [
                                                                                    "Coverage: ~",
                                                                                    e.coverage,
                                                                                    "%",
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    _jsx("div", {
                                                                        className:
                                                                            "text-xs mt-2 " +
                                                                            (e.isSelected
                                                                                ? "text-green-600"
                                                                                : e.isAVIXA
                                                                                  ? "text-blue-600"
                                                                                  : "text-gray-500"),
                                                                        children: e.description,
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
                                        className: "p-3 sm:p-4 bg-yellow-50 rounded-lg border border-yellow-200",
                                        children: [
                                            _jsxs("h4", {
                                                className:
                                                    "font-semibold text-yellow-800 mb-2 flex items-center gap-2 text-sm sm:text-base",
                                                children: ["📋 Layout - ", S.ceilingCalcs.spacingLabel],
                                            }),
                                            _jsx("div", {
                                                className: "bg-white p-2 sm:p-4 rounded border overflow-x-auto",
                                                children: (() => {
                                                    const e = S.roomRecommendation.roomLength,
                                                        t = S.roomRecommendation.roomWidth,
                                                        s = e / t,
                                                        a = "undefined" != typeof window && window.innerWidth < 640,
                                                        r = a ? Math.min(280, window.innerWidth - 80) : 400,
                                                        l = a ? 220 : 300;
                                                    let i, n;
                                                    s > r / l ? ((i = r), (n = r / s)) : ((n = l), (i = l * s)),
                                                        (i = Math.max(i, a ? 100 : 120)),
                                                        (n = Math.max(n, a ? 60 : 80));
                                                    const o = S.roomRecommendation.rows,
                                                        d = S.roomRecommendation.cols,
                                                        c = S.roomRecommendation.recommendedTotal,
                                                        m = i / e,
                                                        x = n / t,
                                                        u = e / d,
                                                        h = t / o,
                                                        p = u / 2,
                                                        g = h / 2,
                                                        b = S.ceilingCalcs.coverageDiameter,
                                                        y = a ? 6 : 8,
                                                        j = a ? 18 : 28,
                                                        _ = Math.min(0.15 * b, 0.3 * u, 0.3 * h),
                                                        v = Math.max(y, Math.min(j, _ * Math.min(m, x))),
                                                        N = b * m,
                                                        w = c <= (a ? 20 : 50) && v >= 12;
                                                    let C, M;
                                                    "edge" === f
                                                        ? ((C = 0.08), (M = 0.4))
                                                        : "minimal" === f
                                                          ? ((C = 0.06), (M = 0.3))
                                                          : ((C = 0.04), (M = 0.25));
                                                    const k = [];
                                                    for (let e = 0; e < o; e++)
                                                        for (let t = 0; t < d; t++) {
                                                            const s = p + t * u,
                                                                a = g + e * h,
                                                                r = s * m,
                                                                l = a * x;
                                                            k.push({
                                                                roomX: s,
                                                                roomY: a,
                                                                pixelX: r,
                                                                pixelY: l,
                                                                index: e * d + t,
                                                            });
                                                        }
                                                    const R = a ? "9px" : "11px";
                                                    return _jsxs("div", {
                                                        style: {
                                                            position: "relative",
                                                            width: i + "px",
                                                            height: n + "px",
                                                            backgroundColor: "#f8fafc",
                                                            border: a ? "2px solid #64748b" : "3px solid #64748b",
                                                            borderRadius: "4px",
                                                            marginLeft: (a ? 28 : 40) + "px",
                                                            marginTop: (a ? 22 : 30) + "px",
                                                            marginBottom: "8px",
                                                            boxShadow: "inset 0 2px 6px rgba(0,0,0,0.08)",
                                                        },
                                                        children: [
                                                            _jsxs("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: a ? "-18px" : "-24px",
                                                                    left: "50%",
                                                                    transform: "translateX(-50%)",
                                                                    fontSize: R,
                                                                    fontWeight: "bold",
                                                                    color: "#475569",
                                                                    backgroundColor: "#f1f5f9",
                                                                    padding: a ? "1px 4px" : "2px 8px",
                                                                    borderRadius: "4px",
                                                                    whiteSpace: "nowrap",
                                                                },
                                                                children: [e, " ", S.roomRecommendation.roomUnit],
                                                            }),
                                                            _jsxs("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    left: a ? "-24px" : "-36px",
                                                                    top: "50%",
                                                                    transform: "translateY(-50%) rotate(-90deg)",
                                                                    fontSize: R,
                                                                    fontWeight: "bold",
                                                                    color: "#475569",
                                                                    backgroundColor: "#f1f5f9",
                                                                    padding: a ? "1px 4px" : "2px 8px",
                                                                    borderRadius: "4px",
                                                                    whiteSpace: "nowrap",
                                                                },
                                                                children: [t, " ", S.roomRecommendation.roomUnit],
                                                            }),
                                                            ...k.map((e, t) =>
                                                                _jsx(
                                                                    "div",
                                                                    {
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: e.pixelX - N / 2 + "px",
                                                                            top: e.pixelY - N / 2 + "px",
                                                                            width: N + "px",
                                                                            height: N + "px",
                                                                            borderRadius: "50%",
                                                                            border: `${a ? "1px" : "1.5px"} dashed rgba(34, 197, 94, ${M})`,
                                                                            backgroundColor: `rgba(34, 197, 94, ${C})`,
                                                                            pointerEvents: "none",
                                                                            zIndex: 1,
                                                                        },
                                                                    },
                                                                    "cov-" + t
                                                                )
                                                            ),
                                                            ...k.map((e, t) =>
                                                                _jsx(
                                                                    "div",
                                                                    {
                                                                        style: {
                                                                            position: "absolute",
                                                                            left: e.pixelX - v / 2 + "px",
                                                                            top: e.pixelY - v / 2 + "px",
                                                                            width: v + "px",
                                                                            height: v + "px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: "#10b981",
                                                                            border:
                                                                                (a ? "1px" : "2px") + " solid #047857",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center",
                                                                            fontSize: v > 14 ? "7px" : "5px",
                                                                            color: "white",
                                                                            fontWeight: "bold",
                                                                            boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                                                                            zIndex: 2,
                                                                        },
                                                                        children: w ? t + 1 : "",
                                                                    },
                                                                    "spk-" + t
                                                                )
                                                            ),
                                                        ],
                                                    });
                                                })(),
                                            }),
                                            _jsxs("div", {
                                                className:
                                                    "flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-3 text-xs text-gray-600",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            _jsx("div", {
                                                                style: {
                                                                    width: "10px",
                                                                    height: "10px",
                                                                    borderRadius: "50%",
                                                                    backgroundColor: "#10b981",
                                                                    border: "1px solid #047857",
                                                                },
                                                            }),
                                                            _jsx("span", { className: "text-xs", children: "Speaker" }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            _jsx("div", {
                                                                style: {
                                                                    width: "16px",
                                                                    height: "16px",
                                                                    borderRadius: "50%",
                                                                    border: "1px dashed rgba(34,197,94,0.5)",
                                                                    backgroundColor: "rgba(34,197,94,0.1)",
                                                                },
                                                            }),
                                                            _jsxs("span", {
                                                                className: "text-xs hidden sm:inline",
                                                                children: [
                                                                    "Coverage (",
                                                                    S.ceilingCalcs.coverageDiameter,
                                                                    " ",
                                                                    S.ceilingCalcs.unit,
                                                                    ")",
                                                                ],
                                                            }),
                                                            _jsx("span", {
                                                                className: "text-xs sm:hidden",
                                                                children: "Coverage",
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-1 text-gray-500",
                                                        children: [
                                                            _jsx("span", {
                                                                className:
                                                                    "edge" === f
                                                                        ? "text-orange-600 font-medium"
                                                                        : "minimal" === f
                                                                          ? "text-green-600 font-medium"
                                                                          : "text-blue-600 font-medium",
                                                                children: S.ceilingCalcs.dbVariation,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("p", {
                                                className: "text-xs text-yellow-700 mt-2 text-center",
                                                children: [
                                                    S.roomRecommendation.rows,
                                                    "×",
                                                    S.roomRecommendation.cols,
                                                    " = ",
                                                    S.roomRecommendation.recommendedTotal,
                                                    " speakers",
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200",
                                        children: [
                                            _jsx("h4", {
                                                className: "font-semibold text-blue-800 mb-2",
                                                children: "💡 Installation Best Practices",
                                            }),
                                            _jsxs("ul", {
                                                className: "text-sm text-blue-700 space-y-1",
                                                children: [
                                                    _jsx("li", {
                                                        children:
                                                            "• Position first row at half the calculated spacing from the front wall",
                                                    }),
                                                    _jsx("li", {
                                                        children:
                                                            "• Maintain consistent spacing throughout the grid pattern",
                                                    }),
                                                    _jsx("li", {
                                                        children:
                                                            "• Adjust layout for obstacles (columns, light fixtures, HVAC)",
                                                    }),
                                                    _jsx("li", {
                                                        children:
                                                            "• Consider asymmetric layouts for non-rectangular rooms",
                                                    }),
                                                    _jsx("li", {
                                                        children:
                                                            "• Verify acoustic modeling for critical applications",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className:
                                            "mt-4 p-4 rounded-lg border-2 " +
                                            ("blue" === S.roomRecommendation.densityColor
                                                ? "bg-blue-50 border-blue-300"
                                                : "green" === S.roomRecommendation.densityColor
                                                  ? "bg-green-50 border-green-300"
                                                  : "yellow" === S.roomRecommendation.densityColor
                                                    ? "bg-yellow-50 border-yellow-300"
                                                    : "bg-orange-50 border-orange-300"),
                                        children: [
                                            _jsxs("h4", {
                                                className:
                                                    "font-semibold mb-3 flex items-center gap-2 " +
                                                    ("blue" === S.roomRecommendation.densityColor
                                                        ? "text-blue-800"
                                                        : "green" === S.roomRecommendation.densityColor
                                                          ? "text-green-800"
                                                          : "yellow" === S.roomRecommendation.densityColor
                                                            ? "text-yellow-800"
                                                            : "text-orange-800"),
                                                children: ["📋 Professional Assessment"],
                                            }),
                                            _jsxs("div", {
                                                className: "grid md:grid-cols-2 gap-4 mb-4",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            _jsxs("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    _jsx("span", {
                                                                        className:
                                                                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " +
                                                                            ("blue" ===
                                                                            S.roomRecommendation.densityColor
                                                                                ? "bg-blue-200 text-blue-800"
                                                                                : "green" ===
                                                                                    S.roomRecommendation.densityColor
                                                                                  ? "bg-green-200 text-green-800"
                                                                                  : "yellow" ===
                                                                                      S.roomRecommendation.densityColor
                                                                                    ? "bg-yellow-200 text-yellow-800"
                                                                                    : "bg-orange-200 text-orange-800"),
                                                                        children: S.roomRecommendation.densityRating,
                                                                    }),
                                                                    _jsxs("span", {
                                                                        className: "text-sm text-gray-600",
                                                                        children: [
                                                                            S.roomRecommendation.sqPerSpeaker,
                                                                            " ",
                                                                            S.roomRecommendation.areaUnit,
                                                                            "/speaker",
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            _jsxs("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    _jsx("span", {
                                                                        className: "font-medium",
                                                                        children: "Overlap: ",
                                                                    }),
                                                                    S.roomRecommendation.avgOverlap,
                                                                    "% average (",
                                                                    S.roomRecommendation.overlapPercentL,
                                                                    "% × ",
                                                                    S.roomRecommendation.overlapPercentW,
                                                                    "%)",
                                                                ],
                                                            }),
                                                            _jsxs("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    _jsx("span", {
                                                                        className: "font-medium",
                                                                        children: "Pattern: ",
                                                                    }),
                                                                    S.roomRecommendation.patternRecommendation.verdict,
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("div", {
                                                                className: "text-sm font-medium text-gray-700 mb-1",
                                                                children: "Suitable Applications:",
                                                            }),
                                                            _jsx("div", {
                                                                className: "flex flex-wrap gap-1",
                                                                children: S.roomRecommendation.suitableApplications.map(
                                                                    (e, t) =>
                                                                        _jsx(
                                                                            "span",
                                                                            {
                                                                                className:
                                                                                    "inline-flex items-center px-2 py-0.5 rounded text-xs bg-white border border-gray-200 text-gray-700",
                                                                                children: e,
                                                                            },
                                                                            t
                                                                        )
                                                                ),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsx("p", {
                                                className:
                                                    "text-sm " +
                                                    ("blue" === S.roomRecommendation.densityColor
                                                        ? "text-blue-700"
                                                        : "green" === S.roomRecommendation.densityColor
                                                          ? "text-green-700"
                                                          : "yellow" === S.roomRecommendation.densityColor
                                                            ? "text-yellow-700"
                                                            : "text-orange-700"),
                                                children: S.roomRecommendation.densityNote,
                                            }),
                                            S.roomRecommendation.patternRecommendation.consideration &&
                                                _jsxs("p", {
                                                    className:
                                                        "text-sm text-gray-600 mt-2 pt-2 border-t border-gray-200",
                                                    children: [
                                                        _jsx("span", { className: "font-medium", children: "Note: " }),
                                                        S.roomRecommendation.patternRecommendation.consideration,
                                                    ],
                                                }),
                                            S.roomRecommendation.patternRecommendation.alternative &&
                                                _jsxs("p", {
                                                    className:
                                                        "text-sm text-amber-700 mt-2 font-semibold bg-amber-50 px-3 py-2 rounded-lg border border-amber-200",
                                                    children: [
                                                        "💡 ",
                                                        S.roomRecommendation.patternRecommendation.alternative,
                                                    ],
                                                }),
                                            S.roomRecommendation.splWarning &&
                                                _jsxs("div", {
                                                    className:
                                                        "mt-4 p-4 rounded-lg border-2 " +
                                                        ("high" === S.roomRecommendation.splWarning.level
                                                            ? "bg-red-50 border-red-300"
                                                            : "moderate" === S.roomRecommendation.splWarning.level
                                                              ? "bg-yellow-50 border-yellow-300"
                                                              : "bg-green-50 border-green-300"),
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-2 mb-2",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-lg",
                                                                    children:
                                                                        "high" === S.roomRecommendation.splWarning.level
                                                                            ? "⚠️"
                                                                            : "moderate" ===
                                                                                S.roomRecommendation.splWarning.level
                                                                              ? "📢"
                                                                              : "✓",
                                                                }),
                                                                _jsx("span", {
                                                                    className:
                                                                        "font-bold " +
                                                                        ("high" ===
                                                                        S.roomRecommendation.splWarning.level
                                                                            ? "text-red-700"
                                                                            : "moderate" ===
                                                                                S.roomRecommendation.splWarning.level
                                                                              ? "text-yellow-700"
                                                                              : "text-green-700"),
                                                                    children: S.roomRecommendation.splWarning.title,
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "text-sm text-gray-600 ml-2",
                                                                    children: [
                                                                        "(Inverse Square Law: -",
                                                                        S.roomRecommendation.splLossFromHeight,
                                                                        "dB)",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsx("p", {
                                                            className:
                                                                "text-sm " +
                                                                ("high" === S.roomRecommendation.splWarning.level
                                                                    ? "text-red-700"
                                                                    : "moderate" ===
                                                                        S.roomRecommendation.splWarning.level
                                                                      ? "text-yellow-700"
                                                                      : "text-green-700"),
                                                            children: S.roomRecommendation.splWarning.message,
                                                        }),
                                                        S.roomRecommendation.splWarning.recommendation &&
                                                            _jsx("p", {
                                                                className: "text-sm text-gray-600 mt-2 font-medium",
                                                                children:
                                                                    S.roomRecommendation.splWarning.recommendation,
                                                            }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        S.amplifierCalcs &&
                            _jsxs("div", {
                                className: "bg-white rounded-xl shadow-md p-8 border",
                                children: [
                                    _jsxs("h3", {
                                        className: "text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                        children: [
                                            _jsx("span", { className: "text-green-600", children: "⚡" }),
                                            " Amplifier Power Requirements",
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-sm text-gray-600 mb-4",
                                        children: "Based on the recommended speaker count and EPR calculation above.",
                                    }),
                                    _jsxs("div", {
                                        className: "grid md:grid-cols-4 gap-4 mb-4",
                                        children: [
                                            _jsxs("div", {
                                                className: "bg-gray-50 p-4 rounded-lg border",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Speakers",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-2xl font-bold text-gray-800",
                                                        children: S.amplifierCalcs.speakerCount,
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: "from layout above",
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-blue-50 p-4 rounded-lg border-2 border-blue-200",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Total Speaker Power",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-2xl font-bold text-blue-700",
                                                        children: [S.amplifierCalcs.totalSpeakerPower, " W"],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            S.amplifierCalcs.eprPerSpeaker,
                                                            "W × ",
                                                            S.amplifierCalcs.speakerCount,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-green-50 p-4 rounded-lg border-2 border-green-200",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Required Amp Power",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-2xl font-bold text-green-700",
                                                        children: [S.amplifierCalcs.requiredAmpPower, " W"],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [S.amplifierCalcs.totalSpeakerPower, "W × 1.5"],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Recommended Size",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-2xl font-bold text-yellow-700",
                                                        children: [
                                                            ((I = S.amplifierCalcs.requiredAmpPower),
                                                            [60, 120, 240, 500, 1e3, 2e3, 4e3, 8e3].find(
                                                                (e) => e >= I
                                                            ) || 1e3 * Math.ceil(I / 1e3) + "+"),
                                                            " W",
                                                        ],
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: "next standard size",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsx("div", {
                                        className: "p-3 bg-gray-50 rounded-lg",
                                        children: _jsxs("p", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                _jsx("strong", { children: "Calculation:" }),
                                                " ",
                                                S.amplifierCalcs.eprPerSpeaker,
                                                "W (EPR) × ",
                                                S.amplifierCalcs.speakerCount,
                                                " speakers × 1.5 (headroom) = ",
                                                _jsxs("strong", { children: [S.amplifierCalcs.requiredAmpPower, "W"] }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
    var I;
}

export default SpeakerCalculator;
