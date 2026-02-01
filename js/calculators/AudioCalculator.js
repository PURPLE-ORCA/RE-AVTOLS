import { _jsx, _jsxs, ResetConfirmModal, _0xae89d3 } from '../utils.js';

const { useState, useEffect, useRef } = React;

function AudioCalculator() {
    const [e, t] = useState("datarate"),
        [s, a] = useState(48e3),
        [r, l] = useState(24),
        [i, n] = useState(2),
        [o, d] = useState(1),
        [c, m] = useState(0),
        [x, u] = useState(null),
        [h, p] = useState("dante"),
        [g, b] = useState(16),
        [f, y] = useState(48e3),
        [j, _] = useState(24),
        [v, N] = useState(!1),
        [w, C] = useState(null),
        [M, k] = useState(1e3),
        [S, R] = useState(20),
        [P, A] = useState(10),
        [D, I] = useState(8),
        [E, F] = useState(3),
        [B, T] = useState("m"),
        [L, H] = useState("control-room"),
        [U, q] = useState(null),
        [$, W] = useState(!1);
    return _jsxs("div", {
        className: "max-w-4xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Audio Calculator" }),
                    (x !== null || w !== null || U !== null) &&
                        _jsx("button", {
                            onClick: () => W(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: $,
                onConfirm: () => {
                    t("datarate"),
                        a(48e3),
                        l(24),
                        n(2),
                        d(1),
                        m(0),
                        u(null),
                        p("dante"),
                        b(16),
                        y(48e3),
                        _(24),
                        N(!1),
                        C(null),
                        k(1e3),
                        R(20),
                        A(10),
                        I(8),
                        F(3),
                        T("m"),
                        H("control-room"),
                        q(null),
                        W(!1);
                },
                onCancel: () => W(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Comprehensive audio calculations including PCM data rate, Dante/AES67 network bandwidth, and acoustic wavelength with room mode analysis.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "flex gap-2 mb-6",
                children: [
                    _jsx("button", {
                        type: "button",
                        onClick: () => t("datarate"),
                        className:
                            "flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer " +
                            ("datarate" === e
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"),
                        children: "📊 Data Rate",
                    }),
                    _jsx("button", {
                        type: "button",
                        onClick: () => t("dante"),
                        className:
                            "flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer " +
                            ("dante" === e ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"),
                        children: "🌐 Dante/AES67",
                    }),
                    _jsx("button", {
                        type: "button",
                        onClick: () => t("wavelength"),
                        className:
                            "flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer " +
                            ("wavelength" === e
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"),
                        children: "🔊 Wavelength",
                    }),
                ],
            }),
            "datarate" === e &&
                _jsxs(_Fragment, {
                    children: [
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-8 mb-8 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Audio Configuration",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Sampling Rate",
                                                }),
                                                _jsxs("select", {
                                                    value: s,
                                                    onChange: (e) => a(Number(e.target.value)),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500",
                                                    children: [
                                                        _jsx("option", {
                                                            value: 44100,
                                                            children: "44.1 kHz (CD Quality)",
                                                        }),
                                                        _jsx("option", {
                                                            value: 48e3,
                                                            children: "48 kHz (Professional)",
                                                        }),
                                                        _jsx("option", {
                                                            value: 96e3,
                                                            children: "96 kHz (Hi-Res Audio)",
                                                        }),
                                                        _jsx("option", {
                                                            value: 192e3,
                                                            children: "192 kHz (Studio Master)",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Bit Depth",
                                                }),
                                                _jsxs("select", {
                                                    value: r,
                                                    onChange: (e) => l(Number(e.target.value)),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500",
                                                    children: [
                                                        _jsx("option", { value: 16, children: "16-bit (CD Quality)" }),
                                                        _jsx("option", {
                                                            value: 24,
                                                            children: "24-bit (Professional)",
                                                        }),
                                                        _jsx("option", { value: 32, children: "32-bit (Float)" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Channels",
                                                }),
                                                _jsxs("select", {
                                                    value: i,
                                                    onChange: (e) => n(Number(e.target.value)),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500",
                                                    children: [
                                                        _jsx("option", { value: 1, children: "1 (Mono)" }),
                                                        _jsx("option", { value: 2, children: "2 (Stereo)" }),
                                                        _jsx("option", { value: 6, children: "6 (5.1 Surround)" }),
                                                        _jsx("option", { value: 8, children: "8 (7.1 Surround)" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Duration",
                                                }),
                                                _jsxs("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        _jsx("input", {
                                                            type: "number",
                                                            min: "0",
                                                            value: o,
                                                            onChange: (e) =>
                                                                d(
                                                                    "" === e.target.value
                                                                        ? ""
                                                                        : parseInt(e.target.value) || ""
                                                                ),
                                                            placeholder: "Min",
                                                            className: "w-1/2 px-3 py-2 border rounded-lg",
                                                        }),
                                                        _jsx("input", {
                                                            type: "number",
                                                            min: "0",
                                                            max: "59",
                                                            value: c,
                                                            onChange: (e) =>
                                                                m(
                                                                    "" === e.target.value
                                                                        ? ""
                                                                        : Math.min(59, parseInt(e.target.value) || "")
                                                                ),
                                                            placeholder: "Sec",
                                                            className: "w-1/2 px-3 py-2 border rounded-lg",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                        u(_0xae89d3(s, r, i, o, c));
                                    },
                                    className:
                                        "w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg cursor-pointer",
                                    children: "Calculate Audio Data Rate",
                                }),
                            ],
                        }),
                        x &&
                            _jsxs("div", {
                                className: "bg-white rounded-xl shadow-md p-8 border",
                                children: [
                                    _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Results" }),
                                    _jsxs("div", {
                                        className: "grid md:grid-cols-3 gap-4 mb-6",
                                        children: [
                                            _jsxs("div", {
                                                className:
                                                    "bg-green-50 p-5 rounded-lg border-2 border-green-200 text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Data Rate",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-2xl font-bold text-green-700",
                                                        children: [x.dataRateMbps, " Mbps"],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [x.dataRateKbps, " Kbps"],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className:
                                                    "bg-blue-50 p-5 rounded-lg border-2 border-blue-200 text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "File Size",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-2xl font-bold text-blue-700",
                                                        children: x.fileSizeFormatted,
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: ((e, t) => {
                                                            if (0 === e && 0 === t) return "0 seconds";
                                                            const s = [];
                                                            return (
                                                                e > 0 && s.push(`${e} min`),
                                                                t > 0 && s.push(`${t} sec`),
                                                                s.join(" ")
                                                            );
                                                        })(o, c),
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className:
                                                    "bg-purple-50 p-5 rounded-lg border-2 border-purple-200 text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Bits per Second",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-lg font-bold text-purple-700",
                                                        children: x.dataRateBps.toLocaleString(),
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: "bps",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            "dante" === e &&
                _jsxs(_Fragment, {
                    children: [
                        _jsxs("div", {
                            className: "bg-green-50 rounded-xl p-4 mb-6 border border-green-200",
                            children: [
                                _jsx("h2", {
                                    className: "font-semibold text-green-800 mb-2",
                                    children: "Protocol Selection",
                                }),
                                _jsxs("div", {
                                    className: "flex gap-4",
                                    children: [
                                        _jsx("button", {
                                            type: "button",
                                            onClick: () => p("dante"),
                                            className:
                                                "flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer " +
                                                ("dante" === h
                                                    ? "bg-green-600 text-white"
                                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-green-50"),
                                            children: "🎛️ Dante (Audinate)",
                                        }),
                                        _jsx("button", {
                                            type: "button",
                                            onClick: () => p("aes67"),
                                            className:
                                                "flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer " +
                                                ("aes67" === h
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"),
                                            children: "🌐 AES67 (Open Standard)",
                                        }),
                                    ],
                                }),
                                _jsx("p", {
                                    className: "text-xs text-green-700 mt-2",
                                    children:
                                        "dante" === h
                                            ? "Dante: Proprietary Layer 3 protocol by Audinate. ~25% overhead, 4 channels per flow."
                                            : "AES67: Open interoperable standard (AES67-2018). ~20% overhead, 8 channels per stream.",
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-8 mb-8 border",
                            children: [
                                _jsxs("h2", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: ["dante" === h ? "Dante" : "AES67", " Configuration"],
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Channel Count",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "1",
                                                    max: "512",
                                                    value: g,
                                                    onChange: (e) =>
                                                        b("" === e.target.value ? "" : parseInt(e.target.value) || ""),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Total audio channels (1-512)",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Sample Rate",
                                                }),
                                                _jsxs("select", {
                                                    value: f,
                                                    onChange: (e) => y(Number(e.target.value)),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500",
                                                    children: [
                                                        _jsx("option", { value: 44100, children: "44.1 kHz" }),
                                                        _jsx("option", { value: 48e3, children: "48 kHz (Standard)" }),
                                                        _jsx("option", { value: 96e3, children: "96 kHz" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Bit Depth",
                                                }),
                                                _jsxs("select", {
                                                    value: j,
                                                    onChange: (e) => _(Number(e.target.value)),
                                                    className:
                                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500",
                                                    children: [
                                                        _jsx("option", { value: 16, children: "16-bit" }),
                                                        _jsx("option", { value: 24, children: "24-bit (Standard)" }),
                                                        _jsx("option", { value: 32, children: "32-bit float" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        "dante" === h &&
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Redundancy (Dante Only)",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            _jsxs("label", {
                                                                className: "flex items-center cursor-pointer",
                                                                children: [
                                                                    _jsx("input", {
                                                                        type: "radio",
                                                                        checked: !v,
                                                                        onChange: () => N(!1),
                                                                        className: "mr-2",
                                                                    }),
                                                                    "Primary Only",
                                                                ],
                                                            }),
                                                            _jsxs("label", {
                                                                className: "flex items-center cursor-pointer",
                                                                children: [
                                                                    _jsx("input", {
                                                                        type: "radio",
                                                                        checked: v,
                                                                        onChange: () => N(!0),
                                                                        className: "mr-2",
                                                                    }),
                                                                    "Primary + Secondary",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        "aes67" === h &&
                                            _jsx("div", {
                                                children: _jsx("p", {
                                                    className:
                                                        "text-xs text-blue-600 bg-blue-50 p-3 rounded-lg border border-blue-200",
                                                    children:
                                                        "Note: AES67 does not include built-in redundancy. For redundant streaming, SMPTE 2022-7 can be added externally.",
                                                }),
                                            }),
                                    ],
                                }),
                                _jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                        const e = (g * f * j) / 1e6,
                                            t = e * ("dante" === h ? 1.25 : 1.2),
                                            s = "dante" === h ? 4 : 8,
                                            a = Math.ceil(g / s),
                                            r = t / a,
                                            l = "dante" === h && v ? 2 * t : t;
                                        let i,
                                            n = "100 Mbps";
                                        l > 80 && (n = "1 Gbps"),
                                            l > 800 && (n = "10 Gbps"),
                                            (i =
                                                "dante" === h
                                                    ? 96e3 === f
                                                        ? "0.25-1 ms"
                                                        : "0.5-2 ms"
                                                    : 96e3 === f
                                                      ? "0.5-2 ms"
                                                      : "1-4 ms"),
                                            C({
                                                protocol: h,
                                                protocolName: "dante" === h ? "Dante" : "AES67",
                                                rawBandwidthMbps: Math.round(100 * e) / 100,
                                                protocolBandwidthMbps: Math.round(100 * t) / 100,
                                                overhead: "dante" === h ? "25%" : "20%",
                                                totalBandwidth: Math.round(100 * l) / 100,
                                                flowsNeeded: a,
                                                bandwidthPerFlow: Math.round(100 * r) / 100,
                                                networkRecommendation: n,
                                                latency: i,
                                                redundancy: v,
                                            });
                                    },
                                    className:
                                        "w-full mt-6 " +
                                        ("dante" === h
                                            ? "bg-green-600 hover:bg-green-700"
                                            : "bg-blue-600 hover:bg-blue-700") +
                                        " text-white font-semibold py-3 rounded-lg cursor-pointer",
                                    children: "Calculate " + ("dante" === h ? "Dante" : "AES67") + " Bandwidth",
                                }),
                            ],
                        }),
                        w &&
                            _jsxs("div", {
                                className: "bg-white rounded-xl shadow-md p-8 border",
                                children: [
                                    _jsxs("h2", {
                                        className: "text-xl font-semibold mb-6",
                                        children: [w.protocolName, " Bandwidth Results"],
                                    }),
                                    _jsxs("div", {
                                        className: "grid md:grid-cols-3 gap-4 mb-6",
                                        children: [
                                            _jsxs("div", {
                                                className:
                                                    ("dante" === w.protocol
                                                        ? "bg-green-50 border-green-200"
                                                        : "bg-blue-50 border-blue-200") +
                                                    " p-5 rounded-lg border-2 text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Total Bandwidth",
                                                    }),
                                                    _jsxs("div", {
                                                        className:
                                                            "text-2xl font-bold " +
                                                            ("dante" === w.protocol
                                                                ? "text-green-700"
                                                                : "text-blue-700"),
                                                        children: [w.totalBandwidth, " Mbps"],
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500",
                                                        children:
                                                            "dante" === w.protocol
                                                                ? w.redundancy
                                                                    ? "With redundancy"
                                                                    : "Primary only"
                                                                : "Single network",
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className:
                                                    "bg-purple-50 p-5 rounded-lg border-2 border-purple-200 text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Network Recommendation",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-2xl font-bold text-purple-700",
                                                        children: w.networkRecommendation,
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: "Minimum switch port speed",
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className:
                                                    "bg-orange-50 p-5 rounded-lg border-2 border-orange-200 text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Typical Latency",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-2xl font-bold text-orange-700",
                                                        children: w.latency,
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: w.protocolName,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-gray-50 p-4 rounded-lg border",
                                        children: [
                                            _jsxs("h3", {
                                                className: "font-semibold text-gray-700 mb-2",
                                                children: [w.protocolName, " Technical Details"],
                                            }),
                                            _jsxs("div", {
                                                className: "grid md:grid-cols-2 gap-4 text-sm",
                                                children: [
                                                    _jsxs("div", {
                                                        children: [
                                                            "Raw audio bandwidth: ",
                                                            _jsxs("span", {
                                                                className: "font-medium",
                                                                children: [w.rawBandwidthMbps, " Mbps"],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            "Protocol overhead: ",
                                                            _jsx("span", {
                                                                className: "font-medium",
                                                                children: w.overhead,
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            "dante" === w.protocol ? "Flows" : "Streams",
                                                            " needed: ",
                                                            _jsx("span", {
                                                                className: "font-medium",
                                                                children: w.flowsNeeded,
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            "Bandwidth per ",
                                                            "dante" === w.protocol ? "flow" : "stream",
                                                            ": ",
                                                            _jsxs("span", {
                                                                className: "font-medium",
                                                                children: [w.bandwidthPerFlow, " Mbps"],
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
            "wavelength" === e &&
                _jsxs(_Fragment, {
                    children: [
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-8 mb-8 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Frequency & Room Parameters",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Frequency (Hz)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "20",
                                                    max: "20000",
                                                    step: "1",
                                                    value: M,
                                                    onChange: (e) =>
                                                        k("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500",
                                                    placeholder: "Enter frequency (20-20000 Hz)",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Human hearing range: 20 Hz - 20,000 Hz",
                                                }),
                                                _jsx("div", {
                                                    className: "flex flex-wrap gap-2 mt-2",
                                                    children: [50, 100, 250, 500, 1e3, 2e3, 4e3, 8e3].map((e) =>
                                                        _jsxs(
                                                            "button",
                                                            {
                                                                type: "button",
                                                                onClick: () => k(e),
                                                                className:
                                                                    "px-2 py-1 text-xs rounded border cursor-pointer " +
                                                                    (M === e
                                                                        ? "bg-green-600 text-white border-green-600"
                                                                        : "bg-white text-gray-600 border-gray-300 hover:bg-green-50"),
                                                                children: [e >= 1e3 ? e / 1e3 + "k" : e, " Hz"],
                                                            },
                                                            e
                                                        )
                                                    ),
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Room Purpose (ISO 3382)",
                                                }),
                                                _jsxs("select", {
                                                    value: L,
                                                    onChange: (e) => H(e.target.value),
                                                    className:
                                                        "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500",
                                                    children: [
                                                        _jsx("option", {
                                                            value: "control-room",
                                                            children: "🎛️ Control Room / Mixing Studio",
                                                        }),
                                                        _jsx("option", {
                                                            value: "recording-studio",
                                                            children: "🎙️ Recording Studio",
                                                        }),
                                                        _jsx("option", {
                                                            value: "home-studio",
                                                            children: "🏠 Home Studio",
                                                        }),
                                                        _jsx("option", {
                                                            value: "podcast-studio",
                                                            children: "🎤 Podcast / Voice Studio",
                                                        }),
                                                        _jsx("option", {
                                                            value: "home-theater",
                                                            children: "🎬 Home Theater",
                                                        }),
                                                        _jsx("option", {
                                                            value: "living-room",
                                                            children: "🛋️ Living Room / Hi-Fi",
                                                        }),
                                                        _jsx("option", {
                                                            value: "conference-room",
                                                            children: "🏢 Conference Room",
                                                        }),
                                                        _jsx("option", {
                                                            value: "classroom",
                                                            children: "📚 Classroom / Lecture Hall",
                                                        }),
                                                        _jsx("option", {
                                                            value: "auditorium",
                                                            children: "🎭 Auditorium / Theater",
                                                        }),
                                                        _jsx("option", {
                                                            value: "gymnasium",
                                                            children: "🏟️ Gymnasium / Sports Arena",
                                                        }),
                                                        _jsx("option", {
                                                            value: "house-of-worship",
                                                            children: "⛪ House of Worship",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: ["Room Dimensions (", B, ")"],
                                                }),
                                                _jsxs("div", {
                                                    className: "grid grid-cols-3 gap-4",
                                                    children: [
                                                        _jsxs("div", {
                                                            children: [
                                                                _jsx("label", {
                                                                    className: "block text-xs text-gray-500 mb-1",
                                                                    children: "Length",
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0.1",
                                                                    step: "0.1",
                                                                    value: S,
                                                                    onChange: (e) =>
                                                                        R(
                                                                            "" === e.target.value
                                                                                ? ""
                                                                                : parseFloat(e.target.value) || ""
                                                                        ),
                                                                    className: "w-full px-3 py-2 border rounded-lg",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            children: [
                                                                _jsx("label", {
                                                                    className: "block text-xs text-gray-500 mb-1",
                                                                    children: "Width",
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0.1",
                                                                    step: "0.1",
                                                                    value: P,
                                                                    onChange: (e) =>
                                                                        A(
                                                                            "" === e.target.value
                                                                                ? ""
                                                                                : parseFloat(e.target.value) || ""
                                                                        ),
                                                                    className: "w-full px-3 py-2 border rounded-lg",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            children: [
                                                                _jsx("label", {
                                                                    className: "block text-xs text-gray-500 mb-1",
                                                                    children: "Height",
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0.1",
                                                                    step: "0.1",
                                                                    value: D,
                                                                    onChange: (e) =>
                                                                        I(
                                                                            "" === e.target.value
                                                                                ? ""
                                                                                : parseFloat(e.target.value) || ""
                                                                        ),
                                                                    className: "w-full px-3 py-2 border rounded-lg",
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Unit",
                                                }),
                                                _jsxs("select", {
                                                    value: B,
                                                    onChange: (e) => T(e.target.value),
                                                    className: "w-full px-3 py-2 border rounded-lg",
                                                    children: [
                                                        _jsx("option", { value: "m", children: "Meters" }),
                                                        _jsx("option", { value: "ft", children: "Feet" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                        const e = _0x5c4c2e(M, S, P, D, B, L);
                                        q(e);
                                    },
                                    className:
                                        "w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg cursor-pointer",
                                    children: "Calculate Acoustic Properties",
                                }),
                            ],
                        }),
                        U &&
                            _jsxs("div", {
                                className: "bg-white rounded-xl shadow-md p-8 border",
                                children: [
                                    _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Acoustic Analysis Results" }),
                                    _jsxs("div", {
                                        className: "grid md:grid-cols-3 gap-4 mb-6",
                                        children: [
                                            _jsxs("div", {
                                                className:
                                                    "bg-green-50 p-5 rounded-lg border-2 border-green-200 text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Wavelength",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-2xl font-bold text-green-700",
                                                        children: [U.wavelengthM.toFixed(2), " m"],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [U.wavelengthFt.toFixed(2), " ft"],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className:
                                                    "bg-blue-50 p-5 rounded-lg border-2 border-blue-200 text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Period",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-2xl font-bold text-blue-700",
                                                        children: U.periodMs.toFixed(2) + " ms",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [U.periodSamples, " samples @ 48kHz"],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className:
                                                    "bg-purple-50 p-5 rounded-lg border-2 border-purple-200 text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Frequency",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-2xl font-bold text-purple-700",
                                                        children: [U.frequency, " Hz"],
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: U.noteName || "",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    U.roomModes && U.roomModes.length > 0 &&
                                        _jsxs("div", {
                                            className: "mb-6",
                                            children: [
                                                _jsxs("h3", {
                                                    className: "font-semibold text-gray-800 mb-3",
                                                    children: ["Room Modes (", L.replace(/-/g, " "), ")"],
                                                }),
                                                _jsx("div", {
                                                    className: "grid md:grid-cols-2 gap-4",
                                                    children: U.roomModes.slice(0, 6).map((e, t) =>
                                                        _jsxs(
                                                            "div",
                                                            {
                                                                className: "bg-gray-50 p-4 rounded-lg border",
                                                                children: [
                                                                    _jsxs("div", {
                                                                        className: "flex justify-between items-center",
                                                                        children: [
                                                                            _jsxs("span", {
                                                                                className: "font-medium",
                                                                                children: [e.type, " ", e.order],
                                                                            }),
                                                                            _jsx("span", {
                                                                                className: "text-sm text-gray-600",
                                                                                children: e.frequency + " Hz",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    _jsxs("div", {
                                                                        className: "text-xs text-gray-500 mt-1",
                                                                        children: [
                                                                            "Wavelength: ",
                                                                            e.wavelengthM.toFixed(2),
                                                                            " m",
                                                                        ],
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
                                        className: "bg-gray-50 p-4 rounded-lg",
                                        children: [
                                            _jsx("h3", {
                                                className: "font-semibold text-gray-800 mb-2",
                                                children: "RT60 Estimates (Sabine)",
                                            }),
                                            _jsxs("div", {
                                                className: "grid grid-cols-3 gap-4 text-sm",
                                                children: [
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("span", { className: "text-gray-600", children: "125 Hz: " }),
                                                            _jsxs("strong", { children: [U.rt60Estimates["125"], " s"] }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("span", { className: "text-gray-600", children: "500 Hz: " }),
                                                            _jsxs("strong", { children: [U.rt60Estimates["500"], " s"] }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("span", { className: "text-gray-600", children: "2 kHz: " }),
                                                            _jsxs("strong", { children: [U.rt60Estimates["2000"], " s"] }),
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
        ],
    });
}

export default AudioCalculator;
