import { _jsx, _jsxs, ResetConfirmModal, calculateDSP } from '../utils.js';

const { useState, useEffect, useRef } = React;

function DSPCalculator() {
    const [e, t] = useState("metric"),
        [s, a] = useState("medium_conference"),
        r = {
            huddle: {
                name: "Huddle Room (2-4 people)",
                lengthM: 3,
                widthM: 3,
                heightM: 2.7,
                rt60: 0.4,
                noiseFloor: 30,
                micCount: 1,
                talkerToMic: 0.4,
                talkerToFarthest: 3,
                speakerToListener: 1.5,
                micToSpeaker: 2,
                description: "~100 sq ft / 9 m² - Quick meetings, 1-on-1s",
            },
            small_conference: {
                name: "Small Conference (4-6 people)",
                lengthM: 5,
                widthM: 4,
                heightM: 2.7,
                rt60: 0.5,
                noiseFloor: 32,
                micCount: 2,
                talkerToMic: 0.5,
                talkerToFarthest: 4,
                speakerToListener: 1.5,
                micToSpeaker: 2.5,
                description: "~150 sq ft / 14 m² - Team meetings",
            },
            medium_conference: {
                name: "Medium Conference (8-12 people)",
                lengthM: 8,
                widthM: 6,
                heightM: 3,
                rt60: 0.5,
                noiseFloor: 35,
                micCount: 4,
                talkerToMic: 0.5,
                talkerToFarthest: 7,
                speakerToListener: 2,
                micToSpeaker: 3,
                description: "~300 sq ft / 28 m² - Department meetings",
            },
            large_boardroom: {
                name: "Large Boardroom (12-20 people)",
                lengthM: 12,
                widthM: 8,
                heightM: 3,
                rt60: 0.6,
                noiseFloor: 35,
                micCount: 8,
                talkerToMic: 0.6,
                talkerToFarthest: 10,
                speakerToListener: 2.5,
                micToSpeaker: 4,
                description: "~500 sq ft / 46 m² - Board meetings, presentations",
            },
            training_room: {
                name: "Training Room (20-30 people)",
                lengthM: 15,
                widthM: 10,
                heightM: 3.5,
                rt60: 0.7,
                noiseFloor: 38,
                micCount: 2,
                talkerToMic: 0.4,
                talkerToFarthest: 14,
                speakerToListener: 3,
                micToSpeaker: 5,
                description: "~750 sq ft / 70 m² - Training, workshops",
            },
            auditorium: {
                name: "Auditorium (50+ people)",
                lengthM: 25,
                widthM: 15,
                heightM: 5,
                rt60: 1,
                noiseFloor: 40,
                micCount: 4,
                talkerToMic: 0.3,
                talkerToFarthest: 22,
                speakerToListener: 4,
                micToSpeaker: 8,
                description: "~2000 sq ft / 185 m² - Large presentations, lectures",
            },
            custom: {
                name: "Custom (Manual Entry)",
                lengthM: 10,
                widthM: 8,
                heightM: 3,
                rt60: 0.6,
                noiseFloor: 35,
                micCount: 4,
                talkerToMic: 0.5,
                talkerToFarthest: 8,
                speakerToListener: 2,
                micToSpeaker: 2.5,
                description: "Enter your own room specifications",
            },
        },
        l = (t) => ("" === t || null == t ? "" : "imperial" === e ? Math.round(10 * ((e) => 3.28084 * e)(t)) / 10 : t),
        i = (t, s) => {
            if ("" === t || null == t) return void s("");
            const a = parseFloat(t);
            isNaN(a) ? s("") : s("imperial" === e ? a / 3.28084 : a);
        },
        [n, o] = useState(4),
        [d, c] = useState(-50),
        [m, x] = useState(4),
        [u, h] = useState(24),
        [p, g] = useState(24),
        [b, f] = useState(0.5),
        [y, j] = useState(3),
        [_, v] = useState(3),
        [N, w] = useState("presentation"),
        [C, M] = useState(2),
        [k, S] = useState(35),
        [R, P] = useState(8),
        [A, D] = useState(6),
        [I, E] = useState(3),
        [F, B] = useState(0.5),
        [T, L] = useState(7),
        [H, U] = useState(2),
        [q, $] = useState("cardioid"),
        [W, V] = useState(!1),
        [O, z] = useState(78),
        [G, X] = useState(74),
        [J, Q] = useState(["aec", "eq", "compressor", "matrix", "delay"]),
        [K, Y] = useState(48e3),
        [Z, ee] = useState(24),
        [te, se] = useState(16),
        [ae, re] = useState("dante"),
        [le, ie] = useState({ mics: 4, programAudio: 2, usbVoip: 2, playback: 1, wireless: 2, hdmiAudio: 2 }),
        [ne, oe] = useState({ loudspeakers: 4, amplifiers: 2, ucCodec: 1, overflow: 2, recording: 2 }),
        [de, ce] = useState(1),
        [me, xe] = useState(1),
        [ue, he] = useState(null),
        [pe, ge] = useState("input"),
        [be, fe] = useState(!1),
        ye = (e, t) => {
            ie("" !== t ? (s) => ({ ...s, [e]: Math.max(0, parseInt(t) || 0) }) : (t) => ({ ...t, [e]: "" }));
        },
        je = (e, t) => {
            oe("" !== t ? (s) => ({ ...s, [e]: Math.max(0, parseInt(t) || 0) }) : (t) => ({ ...t, [e]: "" }));
        },
        _e = (e, t, s = !1) =>
            _jsxs("span", {
                className:
                    "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium " +
                    (e
                        ? "bg-green-100 text-green-700"
                        : s
                          ? "bg-orange-100 text-orange-700"
                          : "bg-red-100 text-red-700"),
                children: [e ? "✅" : s ? "⚠️" : "❌", " ", t],
            });
    return _jsxs("div", {
        className: "max-w-7xl mx-auto px-6 py-8",
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
                    _jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "DSP System Calculator" }),
                    ue !== null &&
                        _jsx("button", {
                            onClick: () => fe(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: be,
                onConfirm: () => {
                    t("metric"),
                        a("medium_conference"),
                        v(3),
                        w("presentation"),
                        M(2),
                        S(35),
                        P(8),
                        D(6),
                        E(3),
                        B(0.5),
                        L(7),
                        U(2),
                        $("cardioid"),
                        V(!1),
                        z(78),
                        X(74),
                        Q(["aec", "eq", "compressor", "matrix", "delay"]),
                        Y(48e3),
                        ee(24),
                        se(16),
                        re("dante"),
                        ie({ mics: 4, programAudio: 2, usbVoip: 2, playback: 1, wireless: 2, hdmiAudio: 2 }),
                        oe({ loudspeakers: 4, amplifiers: 2, ucCodec: 1, overflow: 2, recording: 2 }),
                        ce(1),
                        xe(1),
                        he(null),
                        ge("input"),
                        fe(!1);
                },
                onCancel: () => fe(!1),
            }),
            _jsx("p", {
                className: "text-gray-600 mb-4",
                children: "Professional DSP design tool based on AVIXA standards, IEC 60268, and industry practices",
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Comprehensive DSP system design tool covering gain structure analysis, I/O matrix routing, AEC (acoustic echo cancellation) configuration, system latency calculation, and network audio requirements. Navigate sections using the tabs below.",
                    ],
                }),
            }),
            _jsx("div", {
                className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border border-blue-200",
                children: _jsxs("div", {
                    className: "grid md:grid-cols-4 gap-4 text-xs",
                    children: [
                        _jsxs("div", {
                            className: "bg-white p-3 rounded-lg border",
                            children: [
                                _jsx("div", { className: "font-semibold text-blue-700", children: "AVIXA ACR" }),
                                _jsx("div", { className: "text-gray-600", children: "Coverage ≤ 6 dB" }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-white p-3 rounded-lg border",
                            children: [
                                _jsx("div", { className: "font-semibold text-green-700", children: "Headroom" }),
                                _jsx("div", { className: "text-gray-600", children: "≥ 20 dB (best practice)" }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-white p-3 rounded-lg border",
                            children: [
                                _jsx("div", { className: "font-semibold text-purple-700", children: "Latency" }),
                                _jsx("div", { className: "text-gray-600", children: "< 20 ms (live sound)" }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-white p-3 rounded-lg border",
                            children: [
                                _jsx("div", { className: "font-semibold text-orange-700", children: "SNR Target" }),
                                _jsx("div", { className: "text-gray-600", children: "≥ 25 dB (optimal)" }),
                            ],
                        }),
                    ],
                }),
            }),
            _jsx("div", {
                className: "flex flex-wrap gap-2 mb-6",
                children: [
                    { id: "input", name: "Input/Gain", icon: "🎤" },
                    { id: "room", name: "Room/SPL", icon: "🏠" },
                    { id: "feedback", name: "PAG/NAG", icon: "🔊" },
                    { id: "dsp", name: "DSP Blocks", icon: "🎛️" },
                    { id: "io", name: "I/O Matrix", icon: "🔀" },
                    { id: "network", name: "Network", icon: "🌐" },
                ].map((e) =>
                    _jsxs(
                        "button",
                        {
                            onClick: () => ge(e.id),
                            className:
                                "px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 " +
                                (pe === e.id
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-white text-gray-700 border hover:bg-blue-50"),
                            children: [_jsx("span", { children: e.icon }), e.name],
                        },
                        e.id
                    )
                ),
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl shadow-md p-6 mb-6 border",
                children: [
                    "input" === pe &&
                        _jsxs("div", {
                            children: [
                                _jsxs("h2", {
                                    className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [_jsx("span", { children: "🎤" }), " Input & Gain Structure"],
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Mic Count",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "1",
                                                    max: "64",
                                                    value: n,
                                                    onChange: (e) =>
                                                        o(
                                                            "" === e.target.value || "" === e.target.value
                                                                ? ""
                                                                : parseInt(e.target.value)
                                                        ),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Mic Level (dBV)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "1",
                                                    value: d,
                                                    onChange: (e) =>
                                                        c("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Typical: -60 to -40 dBV",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Nominal System Level (dBu)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "1",
                                                    value: m,
                                                    onChange: (e) =>
                                                        x("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Pro audio: +4 dBu",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Max Input Level (dBu)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "1",
                                                    value: u,
                                                    onChange: (e) =>
                                                        h("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Max Output Level (dBu)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "1",
                                                    value: p,
                                                    onChange: (e) =>
                                                        g("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "mt-4 p-3 bg-blue-50 rounded-lg",
                                    children: _jsxs("p", {
                                        className: "text-xs text-blue-700",
                                        children: [
                                            _jsx("strong", { children: "IEC 60268:" }),
                                            " Voltage Gain (dB) = 20 × log₁₀(V_out / V_in) | Power Gain (dB) = 10 × log₁₀(P_out / P_in)",
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    "room" === pe &&
                        _jsxs("div", {
                            children: [
                                _jsxs("h2", {
                                    className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [_jsx("span", { children: "🏠" }), " Room Acoustics & SPL"],
                                }),
                                _jsxs("div", {
                                    className: "flex flex-wrap gap-4 mb-6 items-end",
                                    children: [
                                        _jsxs("div", {
                                            className: "flex-1 min-w-[200px]",
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Room Type Preset",
                                                }),
                                                _jsxs("select", {
                                                    value: s,
                                                    onChange: (e) =>
                                                        ((e) => {
                                                            const t = r[e];
                                                            t &&
                                                                "custom" !== e &&
                                                                (P(t.lengthM),
                                                                D(t.widthM),
                                                                E(t.heightM),
                                                                f(t.rt60),
                                                                S(t.noiseFloor),
                                                                o(t.micCount),
                                                                B(t.talkerToMic),
                                                                L(t.talkerToFarthest),
                                                                U(t.speakerToListener),
                                                                v(t.micToSpeaker),
                                                                j(0.8 * t.talkerToFarthest),
                                                                ie((e) => ({ ...e, mics: t.micCount }))),
                                                                a(e);
                                                        })(e.target.value),
                                                    className:
                                                        "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white",
                                                    children: [
                                                        _jsx("option", {
                                                            value: "huddle",
                                                            children: "Huddle Room (2-4 people)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "small_conference",
                                                            children: "Small Conference (4-6 people)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "medium_conference",
                                                            children: "Medium Conference (8-12 people)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "large_boardroom",
                                                            children: "Large Boardroom (12-20 people)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "training_room",
                                                            children: "Training Room (20-30 people)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "auditorium",
                                                            children: "Auditorium (50+ people)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "custom",
                                                            children: "Custom (Manual Entry)",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg",
                                            children: [
                                                _jsx("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Units:",
                                                }),
                                                _jsx("button", {
                                                    onClick: () => t("metric"),
                                                    className:
                                                        "px-3 py-1 rounded text-sm font-medium transition-all " +
                                                        ("metric" === e
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-white text-gray-600 hover:bg-gray-200"),
                                                    children: "Meters",
                                                }),
                                                _jsx("button", {
                                                    onClick: () => t("imperial"),
                                                    className:
                                                        "px-3 py-1 rounded text-sm font-medium transition-all " +
                                                        ("imperial" === e
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-white text-gray-600 hover:bg-gray-200"),
                                                    children: "Feet",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                "custom" !== s &&
                                    _jsx("div", {
                                        className: "mb-4 p-3 bg-green-50 rounded-lg border border-green-200",
                                        children: _jsxs("p", {
                                            className: "text-sm text-green-700",
                                            children: [
                                                _jsx("strong", { children: "Preset Applied: " }),
                                                r[s].description,
                                                " • Values auto-populated based on industry standards (Biamp, AVIXA).",
                                            ],
                                        }),
                                    }),
                                _jsxs("h3", {
                                    className: "text-md font-semibold text-gray-700 mb-3",
                                    children: ["Room Dimensions ", "imperial" === e ? "(feet)" : "(meters)"],
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-lg",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: ["Room Length (", "imperial" === e ? "ft" : "m", ")"],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "imperial" === e ? "1" : "0.5",
                                                    min: "imperial" === e ? "6" : "2",
                                                    max: "imperial" === e ? "330" : "100",
                                                    value: l(R),
                                                    onChange: (e) => {
                                                        i(e.target.value, P), a("custom");
                                                    },
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: ["Room Width (", "imperial" === e ? "ft" : "m", ")"],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "imperial" === e ? "1" : "0.5",
                                                    min: "imperial" === e ? "6" : "2",
                                                    max: "imperial" === e ? "330" : "100",
                                                    value: l(A),
                                                    onChange: (e) => {
                                                        i(e.target.value, D), a("custom");
                                                    },
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: ["Room Height (", "imperial" === e ? "ft" : "m", ")"],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "imperial" === e ? "0.5" : "0.1",
                                                    min: "imperial" === e ? "7" : "2",
                                                    max: "imperial" === e ? "65" : "20",
                                                    value: l(I),
                                                    onChange: (e) => {
                                                        i(e.target.value, E), a("custom");
                                                    },
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("h3", {
                                    className: "text-md font-semibold text-gray-700 mb-3",
                                    children: "Acoustic Parameters",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "RT60 (seconds)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "0.1",
                                                    min: "0.1",
                                                    max: "5",
                                                    value: b,
                                                    onChange: (e) => {
                                                        f("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                            a("custom");
                                                    },
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Conference: 0.4-0.6s | Worship: 1.0-2.0s",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: [
                                                        "Listener Distance (",
                                                        "imperial" === e ? "ft" : "m",
                                                        ")",
                                                    ],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "imperial" === e ? "1" : "0.5",
                                                    min: "imperial" === e ? "2" : "0.5",
                                                    value: l(y),
                                                    onChange: (e) => {
                                                        i(e.target.value, j), a("custom");
                                                    },
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Speaker to farthest listener",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: [
                                                        "Mic-to-Speaker Distance (",
                                                        "imperial" === e ? "ft" : "m",
                                                        ")",
                                                    ],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "imperial" === e ? "1" : "0.5",
                                                    min: "imperial" === e ? "2" : "0.5",
                                                    max: "imperial" === e ? "65" : "20",
                                                    value: l(_),
                                                    onChange: (e) => {
                                                        i(e.target.value, v), a("custom");
                                                    },
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "For ERL: Closer = worse echo",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Target SPL Application",
                                                }),
                                                _jsxs("select", {
                                                    value: N,
                                                    onChange: (e) => w(e.target.value),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                    children: [
                                                        _jsx("option", {
                                                            value: "voice",
                                                            children: "Voice/Conferencing (65 dBA)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "presentation",
                                                            children: "Presentation (75 dBA)",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Room Absorption Loss (dB)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "0.5",
                                                    min: "0",
                                                    max: "10",
                                                    value: C,
                                                    onChange: (e) =>
                                                        M("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Noise Floor (dBA)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "1",
                                                    value: k,
                                                    onChange: (e) =>
                                                        S("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "NC-25: ~35 dBA | NC-35: ~45 dBA",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "SPL 95th Percentile (dB)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "1",
                                                    value: O,
                                                    onChange: (e) =>
                                                        z("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "SPL 5th Percentile (dB)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "1",
                                                    value: G,
                                                    onChange: (e) =>
                                                        X("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "mt-4 p-3 bg-green-50 rounded-lg",
                                    children: _jsxs("p", {
                                        className: "text-xs text-green-700",
                                        children: [
                                            _jsx("strong", { children: "AVIXA ACR:" }),
                                            " ACR = SPL_95% - SPL_5% | Pass: ACR ≤ 6 dB",
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    "feedback" === pe &&
                        _jsxs("div", {
                            children: [
                                _jsxs("h2", {
                                    className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [_jsx("span", { children: "🔊" }), " PAG/NAG Feedback Analysis"],
                                }),
                                _jsx("div", {
                                    className: "bg-blue-50 p-4 rounded-lg mb-4 border border-blue-200",
                                    children: _jsxs("p", {
                                        className: "text-sm text-blue-800",
                                        children: [
                                            _jsx("strong", { children: "Shure PAG/NAG:" }),
                                            " PAG (Potential Acoustic Gain) must exceed NAG (Needed Acoustic Gain) to avoid feedback. Formula: PAG = 20log(D1) - 20log(D2) + 20log(D0) - 20log(Ds) - 10log(NOM) - 6dB FSM",
                                        ],
                                    }),
                                }),
                                _jsx("h3", {
                                    className: "text-md font-semibold text-gray-700 mb-3",
                                    children: "Microphone Configuration",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-3 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Microphone Pattern",
                                                }),
                                                _jsxs("select", {
                                                    value: q,
                                                    onChange: (e) => $(e.target.value),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                    children: [
                                                        _jsx("option", {
                                                            value: "omni",
                                                            children: "Omnidirectional (+0 dB)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "cardioid",
                                                            children: "Cardioid (+4.8 dB)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "supercardioid",
                                                            children: "Supercardioid (+5.7 dB)",
                                                        }),
                                                        _jsx("option", {
                                                            value: "hypercardioid",
                                                            children: "Hypercardioid (+6 dB)",
                                                        }),
                                                    ],
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Directivity bonus improves PAG",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: [
                                                        "Talker to Mic Distance (",
                                                        "imperial" === e ? "ft" : "m",
                                                        ")",
                                                    ],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "imperial" === e ? "0.5" : "0.1",
                                                    min: "imperial" === e ? "0.5" : "0.1",
                                                    max: "imperial" === e ? "16" : "5",
                                                    value: l(F),
                                                    onChange: (e) => {
                                                        i(e.target.value, B), a("custom");
                                                    },
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Ds: Closer = better gain",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "flex items-center gap-3 pt-6",
                                            children: [
                                                _jsx("input", {
                                                    type: "checkbox",
                                                    id: "useAutomixer",
                                                    checked: W,
                                                    onChange: (e) => {
                                                        const t = e.target.checked;
                                                        V(t),
                                                            t && !J.includes("automixer")
                                                                ? Q((e) => [...e, "automixer"])
                                                                : !t &&
                                                                  J.includes("automixer") &&
                                                                  Q((e) => e.filter((e) => "automixer" !== e));
                                                    },
                                                    className: "w-4 h-4 text-blue-600 rounded focus:ring-blue-500",
                                                }),
                                                _jsxs("label", {
                                                    htmlFor: "useAutomixer",
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: [
                                                        "Use Automixer ",
                                                        _jsx("span", {
                                                            className: "text-green-600",
                                                            children: "(NOM=1)",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("h3", {
                                    className: "text-md font-semibold text-gray-700 mb-3",
                                    children: ["System Distances (PAG/NAG) ", "imperial" === e ? "- feet" : "- meters"],
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-4 mb-4",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: [
                                                        "Talker to Farthest Listener (",
                                                        "imperial" === e ? "ft" : "m",
                                                        ")",
                                                    ],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "imperial" === e ? "1" : "0.5",
                                                    min: "imperial" === e ? "3" : "1",
                                                    max: "imperial" === e ? "165" : "50",
                                                    value: l(T),
                                                    onChange: (e) => {
                                                        i(e.target.value, L), a("custom");
                                                    },
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "D0: Distance without reinforcement",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: [
                                                        "Nearest Listener to Speaker (",
                                                        "imperial" === e ? "ft" : "m",
                                                        ")",
                                                    ],
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "imperial" === e ? "1" : "0.5",
                                                    min: "imperial" === e ? "2" : "0.5",
                                                    max: "imperial" === e ? "65" : "20",
                                                    value: l(H),
                                                    onChange: (e) => {
                                                        i(e.target.value, U), a("custom");
                                                    },
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "D2: Speaker to audience front row",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200",
                                    children: _jsxs("p", {
                                        className: "text-xs text-orange-700",
                                        children: [
                                            _jsx("strong", { children: "Feedback Stability Margin (FSM):" }),
                                            " A 6 dB margin is automatically included in PAG calculation. PAG - NAG should be ≥ 0 for stable operation.",
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    "dsp" === pe &&
                        _jsxs("div", {
                            children: [
                                _jsxs("h2", {
                                    className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [_jsx("span", { children: "🎛️" }), " DSP Processing Blocks"],
                                }),
                                _jsx("div", {
                                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4",
                                    children: [
                                        {
                                            id: "aec",
                                            name: "AEC (Echo Cancellation)",
                                            mips: "Variable",
                                            perChannel: 2,
                                            note: "base 5 + 2/ch + 0.02/ms tail",
                                        },
                                        { id: "eq", name: "Parametric EQ", mips: "1.5", perChannel: 1.5 },
                                        { id: "compressor", name: "Compressor", mips: "0.8", perChannel: 0.8 },
                                        { id: "limiter", name: "Limiter", mips: "0.5", perChannel: 0.5 },
                                        { id: "gate", name: "Noise Gate", mips: "0.4", perChannel: 0.4 },
                                        { id: "delay", name: "Delay", mips: "0.3", isBase: !0 },
                                        { id: "matrix", name: "Matrix Router", mips: "Variable", perCrosspoint: 0.005 },
                                        { id: "filter", name: "Crossover/Filter", mips: "0.2", perChannel: 0.2 },
                                        { id: "agc", name: "AGC", mips: "1.2", perChannel: 1.2 },
                                        {
                                            id: "feedback_suppressor",
                                            name: "Feedback Suppressor",
                                            mips: "3.0",
                                            perChannel: 3,
                                        },
                                        { id: "noise_reduction", name: "Noise Reduction", mips: "2.0", perChannel: 2 },
                                        { id: "automixer", name: "Automixer", mips: "Variable", perChannel: 1 },
                                    ].map((e) => {
                                        let t = e.mips,
                                            s = !1,
                                            a = 0;
                                        try {
                                            const r = Object.values(le).reduce((e, t) => e + (Number(t) || 0), 0),
                                                l = Object.values(ne).reduce((e, t) => e + (Number(t) || 0), 0),
                                                i = r + l;
                                            if ("aec" === e.id) {
                                                const e = Math.min(
                                                    400,
                                                    Math.max(100, 50 * Math.ceil((1e3 * (b || 0.5) * 1.5) / 50))
                                                );
                                                (a = 5 + 2 * (n || 4) + 0.02 * e), (t = a.toFixed(1)), (s = !0);
                                            } else
                                                "matrix" === e.id
                                                    ? ((a = 0.005 * r * l), (t = a.toFixed(1)), (s = !0))
                                                    : "automixer" === e.id
                                                      ? ((a = 1 * (n || 4)), (t = a.toFixed(1)), (s = !0))
                                                      : e.isBase
                                                        ? (t = e.mips)
                                                        : e.perChannel &&
                                                          ((a = e.perChannel * i), (t = a.toFixed(1)), (s = !0));
                                        } catch (s) {
                                            t = e.mips;
                                        }
                                        return _jsxs(
                                            "button",
                                            {
                                                onClick: () =>
                                                    ((e) => {
                                                        const t = !J.includes(e);
                                                        Q((t) =>
                                                            t.includes(e) ? t.filter((t) => t !== e) : [...t, e]
                                                        ),
                                                            "automixer" === e && V(t);
                                                    })(e.id),
                                                className:
                                                    "p-3 rounded-lg border text-left transition-all " +
                                                    (J.includes(e.id)
                                                        ? "bg-blue-50 border-blue-300 text-blue-800"
                                                        : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"),
                                                children: [
                                                    _jsxs("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "font-medium text-sm",
                                                                children: e.name,
                                                            }),
                                                            _jsx("span", {
                                                                className:
                                                                    "w-5 h-5 rounded flex items-center justify-center text-xs " +
                                                                    (J.includes(e.id)
                                                                        ? "bg-blue-600 text-white"
                                                                        : "bg-gray-300 text-gray-600"),
                                                                children: J.includes(e.id) ? "✓" : "",
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className:
                                                            "text-xs mt-1 " + (s ? "text-blue-500" : "text-gray-500"),
                                                        children: ["~", t, " MIPS", s ? "" : "/ch"],
                                                    }),
                                                ],
                                            },
                                            e.id
                                        );
                                    }),
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-4 mt-4",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Sample Rate",
                                                }),
                                                _jsxs("select", {
                                                    value: K,
                                                    onChange: (e) => Y(Number(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                    children: [
                                                        _jsx("option", { value: "44100", children: "44.1 kHz" }),
                                                        _jsx("option", {
                                                            value: "48000",
                                                            children: "48 kHz (Standard)",
                                                        }),
                                                        _jsx("option", { value: "96000", children: "96 kHz" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Bit Depth",
                                                }),
                                                _jsxs("select", {
                                                    value: Z,
                                                    onChange: (e) =>
                                                        ee("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                    children: [
                                                        _jsx("option", { value: "16", children: "16-bit" }),
                                                        _jsx("option", { value: "24", children: "24-bit (Standard)" }),
                                                        _jsx("option", { value: "32", children: "32-bit float" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    "io" === pe &&
                        _jsxs("div", {
                            children: [
                                _jsxs("h2", {
                                    className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [_jsx("span", { children: "🔀" }), " I/O Matrix Configuration"],
                                }),
                                _jsx("div", {
                                    className: "bg-blue-50 p-4 rounded-lg mb-4 border border-blue-200",
                                    children: _jsxs("p", {
                                        className: "text-sm text-blue-800",
                                        children: [
                                            _jsx("strong", { children: "About I/O Matrix:" }),
                                            " Define all audio inputs and outputs for your DSP system. The matrix size (inputs × outputs) determines routing complexity and DSP resource requirements. Each input can potentially be routed to any output.",
                                        ],
                                    }),
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("h3", {
                                                    className:
                                                        "font-semibold text-gray-700 mb-3 flex items-center gap-2",
                                                    children: [
                                                        _jsx("span", { className: "text-green-600", children: "📥" }),
                                                        " Inputs",
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "Microphones",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children:
                                                                                "Wired mics (table, ceiling, handheld)",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: le.mics,
                                                                    onChange: (e) => ye("mics", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "Program Audio",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children:
                                                                                "Background music, paging sources",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: le.programAudio,
                                                                    onChange: (e) => ye("programAudio", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "USB/VoIP",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Soft codec, Teams/Zoom inputs",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: le.usbVoip,
                                                                    onChange: (e) => ye("usbVoip", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "Playback",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Media players, Blu-ray, signage",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: le.playback,
                                                                    onChange: (e) => ye("playback", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "Wireless Mics",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Bodypack, handheld receivers",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: le.wireless,
                                                                    onChange: (e) => ye("wireless", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "HDMI Audio",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "De-embedded from video sources",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: le.hdmiAudio,
                                                                    onChange: (e) => ye("hdmiAudio", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "mt-3 p-2 bg-green-50 rounded text-sm text-green-700",
                                                    children: [
                                                        "Total Inputs: ",
                                                        Object.values(le).reduce((e, t) => e + t, 0),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("h3", {
                                                    className:
                                                        "font-semibold text-gray-700 mb-3 flex items-center gap-2",
                                                    children: [
                                                        _jsx("span", { className: "text-blue-600", children: "📤" }),
                                                        " Outputs",
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "Loudspeakers",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Ceiling, wall, floor monitors",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: ne.loudspeakers,
                                                                    onChange: (e) => je("loudspeakers", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "Amplifier Channels",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Feeds to external power amps",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: ne.amplifiers,
                                                                    onChange: (e) => je("amplifiers", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "UC Codec",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "USB to Teams/Zoom/WebEx",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: ne.ucCodec,
                                                                    onChange: (e) => je("ucCodec", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "Overflow/Lobby",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Adjacent rooms, lobby feeds",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: ne.overflow,
                                                                    onChange: (e) => je("overflow", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsxs("div", {
                                                                    className: "w-40",
                                                                    children: [
                                                                        _jsx("label", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-700",
                                                                            children: "Recording",
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Archive, broadcast, streaming",
                                                                        }),
                                                                    ],
                                                                }),
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: "64",
                                                                    value: ne.recording,
                                                                    onChange: (e) => je("recording", e.target.value),
                                                                    className:
                                                                        "w-20 px-2 py-1 border rounded text-center",
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "mt-3 p-2 bg-blue-50 rounded text-sm text-blue-700",
                                                    children: [
                                                        "Total Outputs: ",
                                                        Object.values(ne).reduce((e, t) => e + t, 0),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "mt-4 p-3 bg-purple-50 rounded-lg",
                                    children: _jsxs("p", {
                                        className: "text-sm text-purple-700",
                                        children: [
                                            _jsx("strong", { children: "Matrix Size:" }),
                                            " ",
                                            Object.values(le).reduce((e, t) => e + t, 0),
                                            " × ",
                                            Object.values(ne).reduce((e, t) => e + t, 0),
                                            " = ",
                                            Object.values(le).reduce((e, t) => e + t, 0) *
                                                Object.values(ne).reduce((e, t) => e + t, 0),
                                            " crosspoints",
                                        ],
                                    }),
                                }),
                                _jsx("div", {
                                    className: "mt-3 p-3 bg-gray-50 rounded-lg border",
                                    children: _jsxs("p", {
                                        className: "text-xs text-gray-600",
                                        children: [
                                            _jsx("strong", { children: "💡 Tip:" }),
                                            " Count stereo sources as 2 channels. Network audio (Dante/AVB) channels are configured in the Network tab. The matrix size affects DSP resource requirements - larger matrices need more powerful processors.",
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    "network" === pe &&
                        _jsxs("div", {
                            children: [
                                _jsxs("h2", {
                                    className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [_jsx("span", { children: "🌐" }), " Network Audio & Latency"],
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Network Type",
                                                }),
                                                _jsxs("select", {
                                                    value: ae,
                                                    onChange: (e) => re(e.target.value),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                    children: [
                                                        _jsx("option", { value: "dante", children: "Dante" }),
                                                        _jsx("option", { value: "avb", children: "AVB/Milan" }),
                                                        _jsx("option", { value: "ndi", children: "NDI" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Channel Count",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "1",
                                                    max: "512",
                                                    value: te,
                                                    onChange: (e) =>
                                                        se(
                                                            "" === e.target.value || "" === e.target.value
                                                                ? ""
                                                                : parseInt(e.target.value)
                                                        ),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "A/D & D/A Latency (ms)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "0.1",
                                                    min: "0.1",
                                                    value: de,
                                                    onChange: (e) =>
                                                        ce("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Typical: 0.6-1.4 ms",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Network Latency (ms)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "0.1",
                                                    min: "0.1",
                                                    value: me,
                                                    onChange: (e) =>
                                                        xe("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Dante/AVB: 0.25-2 ms",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "mt-4 p-3 bg-orange-50 rounded-lg",
                                    children: _jsxs("p", {
                                        className: "text-xs text-orange-700",
                                        children: [
                                            _jsx("strong", { children: "Dante Bandwidth:" }),
                                            " (Sample Rate × Bit Depth × Channels × 2) ÷ 1,000,000 Mbps",
                                        ],
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            _jsx("button", {
                onClick: () => {
                    he(
                        calculateDSP({
                            micCount: n,
                            micLevelDbv: d,
                            nominalSystemLevelDbu: m,
                            maxInputLevelDbu: u,
                            maxOutputLevelDbu: p,
                            rt60Seconds: b,
                            listenerDistanceM: y,
                            micToSpeakerDistanceM: _,
                            targetSplType: N,
                            roomAbsorptionLossDb: C,
                            noiseFloorDba: k,
                            roomLengthM: R,
                            roomWidthM: A,
                            roomHeightM: I,
                            talkerToMicM: F,
                            talkerToFarthestListenerM: T,
                            nearestListenerToSpeakerM: H,
                            micPattern: q,
                            useAutomixer: W,
                            spl95Percentile: O,
                            spl5Percentile: G,
                            dspBlocks: J,
                            sampleRate: K,
                            bitDepth: Z,
                            danteChannelCount: te,
                            networkType: ae,
                            inputs: le,
                            outputs: ne,
                            adDaLatencyMs: de,
                            networkLatencyMs: me,
                        })
                    );
                },
                className:
                    "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl mb-8",
                children: "🔬 Calculate DSP System Requirements",
            }),
            ue &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className:
                                "rounded-xl p-6 border-2 " +
                                (ue.summary.overallScore >= 80
                                    ? "bg-green-50 border-green-300"
                                    : ue.summary.overallScore >= 60
                                      ? "bg-orange-50 border-orange-300"
                                      : "bg-red-50 border-red-300"),
                            children: [
                                _jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("h2", {
                                                    className: "text-2xl font-bold text-gray-800",
                                                    children: ["System Score: ", ue.summary.overallScore, "%"],
                                                }),
                                                _jsxs("p", {
                                                    className: "text-gray-600",
                                                    children: [
                                                        ue.summary.checksPass,
                                                        "/",
                                                        ue.summary.checksTotal,
                                                        " checks passed • ",
                                                        ue.summary.overallRating,
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsx("div", {
                                            className: "text-6xl",
                                            children:
                                                ue.summary.overallScore >= 80
                                                    ? "✅"
                                                    : ue.summary.overallScore >= 60
                                                      ? "⚠️"
                                                      : "❌",
                                        }),
                                    ],
                                }),
                                ue.errors &&
                                    ue.errors.length > 0 &&
                                    _jsxs("div", {
                                        className: "mt-4 p-4 bg-red-100 rounded-lg border border-red-300",
                                        children: [
                                            _jsx("p", {
                                                className: "text-sm font-semibold text-red-800 mb-3",
                                                children: "❌ Critical Issues - Must Resolve:",
                                            }),
                                            _jsx("div", {
                                                className: "space-y-3",
                                                children: ue.errors.map((e, t) => {
                                                    const s = ((e) => {
                                                        const t = e.toLowerCase();
                                                        return (t.includes("pag") && t.includes("nag")) ||
                                                            t.includes("feedback")
                                                            ? {
                                                                  tip: "System will feedback before achieving needed gain. Halve talker-to-mic distance (+6dB), double mic-to-speaker distance (+6dB), use directional mics (+5dB), or enable automixer.",
                                                                  actions: [
                                                                      "Move mics closer to talkers",
                                                                      "Increase speaker-to-mic distance",
                                                                      "Switch to cardioid/supercardioid mics",
                                                                      "Enable automixer/gating",
                                                                  ],
                                                              }
                                                            : t.includes("erl") || t.includes("aec")
                                                              ? {
                                                                    tip: "AEC cannot function with low Echo Return Loss. Increase physical separation between mics and speakers, add acoustic treatment.",
                                                                    actions: [
                                                                        "Increase mic-speaker separation",
                                                                        "Reduce RT60 with acoustic panels",
                                                                        "Use beamforming microphone arrays",
                                                                        "Consider ceiling speakers aimed away from mics",
                                                                    ],
                                                                }
                                                              : t.includes("snr") || t.includes("signal")
                                                                ? {
                                                                      tip: "SNR too low for intelligible speech. Reduce ambient noise or increase signal level.",
                                                                      actions: [
                                                                          "Address HVAC/mechanical noise",
                                                                          "Use higher sensitivity microphones",
                                                                          "Position mics closer to sources",
                                                                          "Add acoustic isolation",
                                                                      ],
                                                                  }
                                                                : t.includes("dsp") ||
                                                                    t.includes("mips") ||
                                                                    t.includes("very heavy")
                                                                  ? {
                                                                        tip: "DSP is overloaded and will cause audio dropouts, glitches, and system instability. Reduce processing or upgrade hardware.",
                                                                        actions: [
                                                                            "Upgrade to enterprise DSP",
                                                                            "Distribute across multiple units",
                                                                            "Remove non-essential processing",
                                                                            "Keep utilization under 70%",
                                                                        ],
                                                                    }
                                                                  : {
                                                                        tip: "This issue must be resolved before the system can function properly.",
                                                                        actions: [
                                                                            "Consult with acoustic engineer",
                                                                            "Review system design parameters",
                                                                        ],
                                                                    };
                                                    })(e);
                                                    return _jsxs(
                                                        "div",
                                                        {
                                                            className: "p-3 bg-white rounded-lg border border-red-200",
                                                            children: [
                                                                _jsxs("p", {
                                                                    className: "text-sm text-red-800 font-medium",
                                                                    children: ["❌ ", e],
                                                                }),
                                                                _jsxs("div", {
                                                                    className: "mt-2 pl-3 border-l-2 border-red-300",
                                                                    children: [
                                                                        _jsxs("p", {
                                                                            className:
                                                                                "text-xs text-red-700 font-medium mb-1",
                                                                            children: ["🔧 Fix: ", s.tip],
                                                                        }),
                                                                        _jsx("div", {
                                                                            className: "flex flex-wrap gap-1 mt-1",
                                                                            children: s.actions.map((e, t) =>
                                                                                _jsx(
                                                                                    "span",
                                                                                    {
                                                                                        className:
                                                                                            "px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded",
                                                                                        children: e,
                                                                                    },
                                                                                    t
                                                                                )
                                                                            ),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        },
                                                        t
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                                ue.warnings &&
                                    ue.warnings.length > 0 &&
                                    _jsxs("div", {
                                        className: "mt-4 p-4 bg-white rounded-lg",
                                        children: [
                                            _jsx("p", {
                                                className: "text-sm font-semibold text-orange-700 mb-3",
                                                children: "⚠️ Warnings & Recommendations:",
                                            }),
                                            _jsx("div", {
                                                className: "space-y-3",
                                                children: ue.warnings.map((e, t) => {
                                                    const s = ((e) => {
                                                        const t = e.toLowerCase();
                                                        return t.includes("headroom")
                                                            ? {
                                                                  tip: "Increase amplifier power or reduce nominal operating level. Target 10-12dB headroom for speech, 15-20dB for music.",
                                                                  standard: "AVIXA Standard",
                                                              }
                                                            : t.includes("feedback") ||
                                                                t.includes("pag") ||
                                                                t.includes("nag")
                                                              ? {
                                                                    tip: "Move mics closer to talkers, increase mic-to-speaker distance, use directional mics, or enable automixer.",
                                                                    standard: "Industry Best Practice",
                                                                }
                                                              : t.includes("acr") || t.includes("coverage")
                                                                ? {
                                                                      tip: "Add distributed speakers or adjust aiming. Target ≤6dB variation per AVIXA A2 category.",
                                                                      standard: "AVIXA A102.01",
                                                                  }
                                                                : t.includes("erl") || t.includes("echo")
                                                                  ? {
                                                                        tip: "Increase mic-speaker separation, add acoustic treatment, or use beamforming microphones.",
                                                                        standard: "AEC Best Practice",
                                                                    }
                                                                  : t.includes("snr") ||
                                                                      t.includes("signal") ||
                                                                      t.includes("noise")
                                                                    ? {
                                                                          tip: "Reduce ambient noise (target NC-30/35dBA), use higher sensitivity mics, or position mics closer to sources.",
                                                                          standard: "ANSI/ASA S12.60",
                                                                      }
                                                                    : t.includes("latency")
                                                                      ? {
                                                                            tip: "Reduce processing blocks, configure network audio for lower latency, minimize conversion stages.",
                                                                            standard: "Live Sound < 20ms",
                                                                        }
                                                                      : t.includes("rt60") || t.includes("reverb")
                                                                        ? {
                                                                              tip: "Install acoustic panels, ceiling clouds, or carpet. Target RT60 of 0.4-0.6s for conferencing.",
                                                                              standard: "AVIXA/ASA",
                                                                          }
                                                                        : t.includes("dsp load") ||
                                                                            t.includes("processing") ||
                                                                            t.includes("heavy") ||
                                                                            t.includes("mips")
                                                                          ? {
                                                                                tip: "Reduce active processing blocks, remove processing from unused channels, or upgrade to higher-capacity DSP. Keep utilization under 70% for stability and headroom.",
                                                                                standard: "DSP Best Practice",
                                                                            }
                                                                          : t.includes("nom") ||
                                                                              t.includes("automixer") ||
                                                                              t.includes("open mic")
                                                                            ? {
                                                                                  tip: "Enable automixer to improve PAG. Each doubling of open mics costs 3dB of gain before feedback.",
                                                                                  standard: "NOM Equation",
                                                                              }
                                                                            : t.includes("distance") ||
                                                                                t.includes("critical")
                                                                              ? {
                                                                                    tip: "Position microphones within the critical distance for best direct-to-reverberant ratio.",
                                                                                    standard: "Acoustic Design",
                                                                                }
                                                                              : {
                                                                                    tip: "Review system design parameters and consult manufacturer specifications.",
                                                                                    standard: "General",
                                                                                };
                                                    })(e);
                                                    return _jsxs(
                                                        "div",
                                                        {
                                                            className:
                                                                "p-3 bg-orange-50 rounded-lg border border-orange-200",
                                                            children: [
                                                                _jsxs("p", {
                                                                    className: "text-sm text-orange-800 font-medium",
                                                                    children: ["⚠️ ", e],
                                                                }),
                                                                _jsxs("div", {
                                                                    className: "mt-2 flex items-start gap-2",
                                                                    children: [
                                                                        _jsx("span", {
                                                                            className: "text-blue-500 mt-0.5",
                                                                            children: "💡",
                                                                        }),
                                                                        _jsxs("div", {
                                                                            children: [
                                                                                _jsx("p", {
                                                                                    className: "text-xs text-gray-700",
                                                                                    children: s.tip,
                                                                                }),
                                                                                _jsx("p", {
                                                                                    className:
                                                                                        "text-xs text-gray-400 mt-1",
                                                                                    children: s.standard,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        },
                                                        t
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: [
                                _jsxs("div", {
                                    className: "bg-white rounded-xl p-5 border shadow-sm",
                                    children: [
                                        _jsxs("h3", {
                                            className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                            children: [_jsx("span", { children: "🎚️" }), " Gain Structure"],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Input Headroom:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.gainStructure.inputHeadroomDb, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Required Input Gain:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.gainStructure.requiredInputGainDb, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "System Headroom:",
                                                        }),
                                                        _jsxs("span", {
                                                            className:
                                                                "font-bold truncate " +
                                                                (ue.gainStructure.systemHeadroomDb >=
                                                                ue.gainStructure.headroomTarget
                                                                    ? "text-green-600"
                                                                    : ue.gainStructure.systemHeadroomDb >=
                                                                        ue.gainStructure.headroomTarget - 3
                                                                      ? "text-orange-600"
                                                                      : "text-red-600"),
                                                            children: [ue.gainStructure.systemHeadroomDb, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsx("div", {
                                                    className: "pt-2 border-t",
                                                    children: _e(
                                                        ue.gainStructure.headroomPass,
                                                        `≥${ue.gainStructure.headroomTarget} dB`
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                ue.nom &&
                                    _jsxs("div", {
                                        className: "bg-white rounded-xl p-5 border shadow-sm",
                                        children: [
                                            _jsxs("h3", {
                                                className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                                children: [_jsx("span", { children: "🎤" }), " NOM (Open Mics)"],
                                            }),
                                            _jsxs("div", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "Mic Count:",
                                                            }),
                                                            _jsx("span", {
                                                                className: "font-bold truncate",
                                                                children: ue.nom.micCount,
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "Effective NOM:",
                                                            }),
                                                            _jsxs("span", {
                                                                className: "font-bold truncate",
                                                                children: [
                                                                    ue.nom.effectiveNom,
                                                                    ue.nom.useAutomixer ? " (automixer)" : "",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "NOM Penalty:",
                                                            }),
                                                            _jsxs("span", {
                                                                className: "font-bold truncate text-orange-600",
                                                                children: ["-", ue.nom.nomPenaltyDb, " dB"],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "Mic Pattern:",
                                                            }),
                                                            _jsxs("span", {
                                                                className: "font-bold truncate text-green-600",
                                                                children: [
                                                                    ue.nom.micPattern,
                                                                    " (+",
                                                                    ue.nom.micDirectivityBonus,
                                                                    " dB)",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsx("div", {
                                                        className: "pt-2 border-t text-xs text-gray-500",
                                                        children: ue.nom.recommendation,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ue.pagNag &&
                                    _jsxs("div", {
                                        className:
                                            "bg-white rounded-xl p-5 border shadow-sm " +
                                            (ue.pagNag.feedbackMarginPass ? "" : "border-red-300 bg-red-50"),
                                        children: [
                                            _jsxs("h3", {
                                                className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                                children: [_jsx("span", { children: "🔊" }), " PAG/NAG (Feedback)"],
                                            }),
                                            _jsxs("div", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "PAG (w/directivity):",
                                                            }),
                                                            _jsxs("span", {
                                                                className: "font-bold truncate",
                                                                children: [ue.pagNag.pagDb, " dB"],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "NAG (Needed):",
                                                            }),
                                                            _jsxs("span", {
                                                                className: "font-bold truncate",
                                                                children: [ue.pagNag.nagDb, " dB"],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600 font-semibold",
                                                                children: "Feedback Margin:",
                                                            }),
                                                            _jsxs("span", {
                                                                className:
                                                                    "font-bold truncate " +
                                                                    (ue.pagNag.feedbackMarginDb >= 6
                                                                        ? "text-green-600"
                                                                        : ue.pagNag.feedbackMarginDb >= 0
                                                                          ? "text-orange-600"
                                                                          : "text-red-600"),
                                                                children: [ue.pagNag.feedbackMarginDb, " dB"],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsx("div", {
                                                        className: "pt-2 border-t",
                                                        children: _jsxs("span", {
                                                            className:
                                                                "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium " +
                                                                ("Excellent" === ue.pagNag.feedbackRiskRating ||
                                                                "Good" === ue.pagNag.feedbackRiskRating
                                                                    ? "bg-green-100 text-green-700"
                                                                    : "Marginal" === ue.pagNag.feedbackRiskRating ||
                                                                        "At Risk" === ue.pagNag.feedbackRiskRating
                                                                      ? "bg-orange-100 text-orange-700"
                                                                      : "bg-red-100 text-red-700"),
                                                            children: [
                                                                "Excellent" === ue.pagNag.feedbackRiskRating ||
                                                                "Good" === ue.pagNag.feedbackRiskRating
                                                                    ? "✅"
                                                                    : "Marginal" === ue.pagNag.feedbackRiskRating ||
                                                                        "At Risk" === ue.pagNag.feedbackRiskRating
                                                                      ? "⚠️"
                                                                      : "❌",
                                                                " ",
                                                                ue.pagNag.feedbackRiskRating,
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ue.room &&
                                    _jsxs("div", {
                                        className: "bg-white rounded-xl p-5 border shadow-sm",
                                        children: [
                                            _jsxs("h3", {
                                                className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                                children: [_jsx("span", { children: "🏠" }), " Room Analysis"],
                                            }),
                                            _jsxs("div", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "Volume:",
                                                            }),
                                                            _jsxs("span", {
                                                                className: "font-bold truncate",
                                                                children: [ue.room.volumeM3, " m³"],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "Critical Distance:",
                                                            }),
                                                            _jsxs("span", {
                                                                className: "font-bold truncate",
                                                                children: [ue.room.criticalDistanceM, " m"],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex justify-between min-w-0",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "Dc Rating:",
                                                            }),
                                                            _jsx("span", {
                                                                className:
                                                                    "font-bold truncate " +
                                                                    ("Excellent" === ue.room.roomAcousticsRating ||
                                                                    "Good" === ue.room.roomAcousticsRating
                                                                        ? "text-green-600"
                                                                        : "Acceptable" ===
                                                                                ue.room.roomAcousticsRating ||
                                                                            "Challenging" ===
                                                                                ue.room.roomAcousticsRating
                                                                          ? "text-orange-600"
                                                                          : "text-red-600"),
                                                                children: ue.room.roomAcousticsRating,
                                                            }),
                                                        ],
                                                    }),
                                                    _jsx("div", {
                                                        className: "pt-2 border-t text-xs",
                                                        children: _jsxs("span", {
                                                            className: ue.room.micWithinCriticalDistance
                                                                ? "text-green-600"
                                                                : "text-orange-600",
                                                            children: [
                                                                ue.room.micWithinCriticalDistance ? "✅" : "⚠️",
                                                                " Mic ",
                                                                ue.room.micWithinCriticalDistance
                                                                    ? "within"
                                                                    : "outside",
                                                                " critical zone",
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                _jsxs("div", {
                                    className: "bg-white rounded-xl p-5 border shadow-sm",
                                    children: [
                                        _jsxs("h3", {
                                            className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                            children: [_jsx("span", { children: "🔊" }), " SPL Requirements"],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Target SPL:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [
                                                                ue.splCalculation.targetSplDb,
                                                                " dBA (",
                                                                ue.splCalculation.targetSplType,
                                                                ")",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Distance Loss:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.splCalculation.distanceLossDb, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Room Absorption:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.splCalculation.roomAbsorptionLossDb, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsx("div", {
                                                    className: "pt-2 border-t",
                                                    children: _jsxs("span", {
                                                        className: "text-lg font-bold text-blue-700",
                                                        children: [
                                                            "Required: ",
                                                            ue.splCalculation.requiredSpeakerOutputDb,
                                                            " dB SPL",
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-white rounded-xl p-5 border shadow-sm",
                                    children: [
                                        _jsxs("h3", {
                                            className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                            children: [_jsx("span", { children: "📊" }), " ACR (AVIXA)"],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "95th Percentile:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.acr.spl95Percentile, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "5th Percentile:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.acr.spl5Percentile, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "ACR Value:",
                                                        }),
                                                        _jsxs("span", {
                                                            className:
                                                                "font-bold text-lg truncate " +
                                                                (ue.acr.acrDb <= 3
                                                                    ? "text-green-600"
                                                                    : ue.acr.acrDb <= 6
                                                                      ? "text-blue-600"
                                                                      : ue.acr.acrDb <= 10
                                                                        ? "text-orange-600"
                                                                        : "text-red-600"),
                                                            children: [ue.acr.acrDb, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "pt-2 border-t flex items-center justify-between",
                                                    children: [
                                                        _e(ue.acr.acrPass, "≤6 dB"),
                                                        _jsx("span", {
                                                            className:
                                                                "text-xs font-medium " +
                                                                (ue.acr.acrRating.includes("Excellent") ||
                                                                ue.acr.acrRating.includes("Good")
                                                                    ? "text-green-600"
                                                                    : ue.acr.acrRating.includes("Acceptable")
                                                                      ? "text-orange-600"
                                                                      : "text-red-600"),
                                                            children: ue.acr.acrRating,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-white rounded-xl p-5 border shadow-sm",
                                    children: [
                                        _jsxs("h3", {
                                            className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                            children: [_jsx("span", { children: "🔇" }), " AEC (Echo Cancellation)"],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Mic-to-Speaker:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.aec.micToSpeakerDistanceM, " m"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", { className: "text-gray-600", children: "RT60:" }),
                                                        _jsxs("span", {
                                                            className:
                                                                "font-bold truncate " +
                                                                (ue.aec.rt60Seconds <= 0.5
                                                                    ? "text-green-600"
                                                                    : ue.aec.rt60Seconds <= 0.8
                                                                      ? "text-orange-600"
                                                                      : "text-red-600"),
                                                            children: [ue.aec.rt60Seconds, "s"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Recommended Tail:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.aec.aecTailLengthMs, " ms"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", { className: "text-gray-600", children: "ERL:" }),
                                                        _jsxs("span", {
                                                            className:
                                                                "font-bold " +
                                                                (ue.aec.erlDb >= 10
                                                                    ? "text-green-600"
                                                                    : ue.aec.erlDb >= 6
                                                                      ? "text-blue-600"
                                                                      : ue.aec.erlDb >= 3
                                                                        ? "text-orange-600"
                                                                        : "text-red-600"),
                                                            children: [ue.aec.erlDb, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "pt-2 border-t flex items-center justify-between",
                                                    children: [
                                                        _e(ue.aec.erlPass, "ERL ≥6 dB"),
                                                        _jsx("span", {
                                                            className:
                                                                "text-xs font-medium " +
                                                                ("Excellent" === ue.aec.erlRating ||
                                                                "Good" === ue.aec.erlRating
                                                                    ? "text-green-600"
                                                                    : "Acceptable" === ue.aec.erlRating
                                                                      ? "text-blue-600"
                                                                      : "Poor" === ue.aec.erlRating
                                                                        ? "text-orange-600"
                                                                        : "text-red-600"),
                                                            children: ue.aec.erlRating,
                                                        }),
                                                    ],
                                                }),
                                                _jsx("div", {
                                                    className:
                                                        "mt-2 p-2 rounded text-xs " +
                                                        (ue.aec.erlPass
                                                            ? "bg-blue-50 text-blue-700"
                                                            : "bg-red-50 text-red-700"),
                                                    children: ue.aec.erlPass
                                                        ? ue.aec.erlAdvice
                                                        : "💡 To improve: Increase mic-to-speaker distance, reduce RT60, or add acoustic treatment.",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-white rounded-xl p-5 border shadow-sm",
                                    children: [
                                        _jsxs("h3", {
                                            className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                            children: [_jsx("span", { children: "📉" }), " Noise & SNR"],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Noise Floor:",
                                                        }),
                                                        _jsxs("span", {
                                                            className:
                                                                "font-bold truncate " +
                                                                (ue.noiseAndSensitivity.noiseFloorDba <= 35
                                                                    ? "text-green-600"
                                                                    : ue.noiseAndSensitivity.noiseFloorDba <= 45
                                                                      ? "text-orange-600"
                                                                      : "text-red-600"),
                                                            children: [ue.noiseAndSensitivity.noiseFloorDba, " dBA"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", { className: "text-gray-600", children: "SNR:" }),
                                                        _jsxs("span", {
                                                            className:
                                                                "font-bold text-lg truncate " +
                                                                (ue.noiseAndSensitivity.snrDb >= 25
                                                                    ? "text-green-600"
                                                                    : ue.noiseAndSensitivity.snrDb >= 15
                                                                      ? "text-orange-600"
                                                                      : "text-red-600"),
                                                            children: [ue.noiseAndSensitivity.snrDb, " dB"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Mic Sensitivity:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [
                                                                ue.noiseAndSensitivity.micSensitivityMvPa,
                                                                " mV/Pa",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "pt-2 border-t flex items-center justify-between",
                                                    children: [
                                                        _e(ue.noiseAndSensitivity.snrPass, "≥25 dB"),
                                                        _jsx("span", {
                                                            className:
                                                                "text-xs font-medium " +
                                                                ("Excellent" === ue.noiseAndSensitivity.snrRating ||
                                                                "Good" === ue.noiseAndSensitivity.snrRating
                                                                    ? "text-green-600"
                                                                    : "Acceptable" === ue.noiseAndSensitivity.snrRating
                                                                      ? "text-orange-600"
                                                                      : "text-red-600"),
                                                            children: ue.noiseAndSensitivity.snrRating,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-white rounded-xl p-5 border shadow-sm",
                                    children: [
                                        _jsxs("h3", {
                                            className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                            children: [_jsx("span", { children: "💻" }), " DSP Load"],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Total MIPS:",
                                                        }),
                                                        _jsx("span", {
                                                            className: "font-bold text-lg truncate",
                                                            children: ue.dspLoad.totalMips,
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Load Rating:",
                                                        }),
                                                        _jsx("span", {
                                                            className:
                                                                "font-bold truncate " +
                                                                ("Light" === ue.dspLoad.loadRating
                                                                    ? "text-green-600"
                                                                    : "Moderate" === ue.dspLoad.loadRating
                                                                      ? "text-blue-600"
                                                                      : "Heavy" === ue.dspLoad.loadRating
                                                                        ? "text-orange-600"
                                                                        : "text-red-600"),
                                                            children: ue.dspLoad.loadRating,
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Active Blocks:",
                                                        }),
                                                        _jsx("span", {
                                                            className: "font-bold truncate",
                                                            children: ue.dspLoad.dspBlocks.length,
                                                        }),
                                                    ],
                                                }),
                                                _jsx("div", {
                                                    className: "pt-2 border-t",
                                                    children: _jsx("div", {
                                                        className: "w-full bg-gray-200 rounded-full h-2",
                                                        children: _jsx("div", {
                                                            className:
                                                                "h-2 rounded-full " +
                                                                (ue.dspLoad.totalMips < 100
                                                                    ? "bg-green-500"
                                                                    : ue.dspLoad.totalMips < 500
                                                                      ? "bg-orange-500"
                                                                      : "bg-red-500"),
                                                            style: {
                                                                width: `${Math.min(100, ue.dspLoad.totalMips / 10)}%`,
                                                            },
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-white rounded-xl p-5 border shadow-sm",
                                    children: [
                                        _jsxs("h3", {
                                            className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                            children: [_jsx("span", { children: "🔀" }), " Matrix"],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Inputs:",
                                                        }),
                                                        _jsx("span", {
                                                            className: "font-bold truncate",
                                                            children: ue.matrix.totalInputs,
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Outputs:",
                                                        }),
                                                        _jsx("span", {
                                                            className: "font-bold truncate",
                                                            children: ue.matrix.totalOutputs,
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Matrix Size:",
                                                        }),
                                                        _jsx("span", {
                                                            className: "font-bold text-lg truncate",
                                                            children: ue.matrix.matrixSize,
                                                        }),
                                                    ],
                                                }),
                                                _jsx("div", {
                                                    className: "pt-2 border-t",
                                                    children: _jsxs("span", {
                                                        className:
                                                            "px-2 py-1 rounded text-xs font-medium " +
                                                            ("Small" === ue.matrix.matrixSizeRating
                                                                ? "bg-green-100 text-green-700"
                                                                : "Medium" === ue.matrix.matrixSizeRating
                                                                  ? "bg-blue-100 text-blue-700"
                                                                  : "bg-purple-100 text-purple-700"),
                                                        children: [ue.matrix.matrixSizeRating, " System"],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-white rounded-xl p-5 border shadow-sm",
                                    children: [
                                        _jsxs("h3", {
                                            className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                            children: [_jsx("span", { children: "⏱️" }), " Latency Budget"],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "DSP Processing:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.latency.breakdown.dspProcessingMs, " ms"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsxs("span", {
                                                            className: "text-gray-600",
                                                            children: ["Network (", ue.latency.networkType, "):"],
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [ue.latency.breakdown.networkTransportMs, " ms"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "A/D + D/A:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [
                                                                ue.latency.breakdown.adConversion +
                                                                    ue.latency.breakdown.daConversion,
                                                                " ms",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className:
                                                        "flex justify-between font-bold " +
                                                        (ue.latency.totalLatencyMs <= 10
                                                            ? "text-green-700"
                                                            : ue.latency.totalLatencyMs <= 20
                                                              ? "text-blue-700"
                                                              : ue.latency.totalLatencyMs <= 30
                                                                ? "text-orange-700"
                                                                : "text-red-700"),
                                                    children: [
                                                        _jsx("span", { children: "Total:" }),
                                                        _jsxs("span", {
                                                            className: "text-lg",
                                                            children: [ue.latency.totalLatencyMs, " ms"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "pt-2 border-t flex items-center justify-between",
                                                    children: [
                                                        _e(ue.latency.latencyPass, "<20 ms"),
                                                        _jsx("span", {
                                                            className:
                                                                "text-xs font-medium " +
                                                                ("Excellent" === ue.latency.latencyRating ||
                                                                "Good" === ue.latency.latencyRating
                                                                    ? "text-green-600"
                                                                    : "Acceptable" === ue.latency.latencyRating
                                                                      ? "text-orange-600"
                                                                      : "text-red-600"),
                                                            children: ue.latency.latencyRating,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-white rounded-xl p-5 border shadow-sm",
                                    children: [
                                        _jsxs("h3", {
                                            className: "font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                            children: [_jsx("span", { children: "🌐" }), " Network Audio"],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Channels:",
                                                        }),
                                                        _jsx("span", {
                                                            className: "font-bold truncate",
                                                            children: ue.networkAudio.channelCount,
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Per Channel:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold truncate",
                                                            children: [
                                                                ue.networkAudio.perChannelBandwidthKbps,
                                                                " Kbps",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between min-w-0",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600",
                                                            children: "Total Bandwidth:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold text-lg truncate",
                                                            children: [ue.networkAudio.totalBandwidthMbps, " Mbps"],
                                                        }),
                                                    ],
                                                }),
                                                _jsx("div", {
                                                    className: "pt-2 border-t",
                                                    children: _jsxs("span", {
                                                        className:
                                                            "px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium",
                                                        children: [
                                                            "Recommended: ",
                                                            ue.networkAudio.recommendedSwitch,
                                                            " Switch",
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-gray-50 rounded-xl p-6 border",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-4",
                                    children: "📐 Formulas Used (AVIXA / IEC 60268)",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-4 text-xs font-mono text-gray-600",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("strong", { children: "Input Headroom:" }),
                                                " max_input - nominal_input",
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("strong", { children: "Required Gain:" }),
                                                " nominal_level - mic_level",
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("strong", { children: "System Headroom:" }),
                                                " max_output - nominal_level",
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("strong", { children: "Required SPL:" }),
                                                " target + 20×log₁₀(d/1) + absorption",
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [_jsx("strong", { children: "ACR:" }), " SPL_95% - SPL_5%"],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("strong", { children: "AEC Tail:" }),
                                                " 2 × RT60 × 1000 ms",
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("strong", { children: "SNR:" }),
                                                " desired_speech - noise_floor",
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("strong", { children: "Mic Sensitivity:" }),
                                                " 10^((dBV + 94) / 20) mV/Pa",
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("strong", { children: "Voltage Gain:" }),
                                                " 20 × log₁₀(V_out / V_in)",
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("strong", { children: "Dante BW:" }),
                                                " SR × bits × ch × 1.25 / 10⁶ Mbps",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        ue.actionItems &&
                            ue.actionItems.length > 0 &&
                            _jsxs("div", {
                                className: "bg-white rounded-xl p-6 border shadow-sm",
                                children: [
                                    _jsx("h3", {
                                        className: "text-xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                        children: "📋 Action Items & Recommendations",
                                    }),
                                    _jsx("div", {
                                        className: "space-y-4",
                                        children: ue.actionItems.map((e, t) =>
                                            _jsxs(
                                                "div",
                                                {
                                                    className:
                                                        "p-4 rounded-lg border-l-4 " +
                                                        ("critical" === e.priority
                                                            ? "bg-red-50 border-red-500"
                                                            : "high" === e.priority
                                                              ? "bg-orange-50 border-orange-500"
                                                              : "medium" === e.priority
                                                                ? "bg-yellow-50 border-yellow-400"
                                                                : "bg-blue-50 border-blue-400"),
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-2 mb-2",
                                                            children: [
                                                                _jsx("span", {
                                                                    className:
                                                                        "px-2 py-0.5 rounded text-xs font-bold uppercase " +
                                                                        ("critical" === e.priority
                                                                            ? "bg-red-200 text-red-800"
                                                                            : "high" === e.priority
                                                                              ? "bg-orange-200 text-orange-800"
                                                                              : "medium" === e.priority
                                                                                ? "bg-yellow-200 text-yellow-800"
                                                                                : "bg-blue-200 text-blue-800"),
                                                                    children: e.priority,
                                                                }),
                                                                _jsx("span", {
                                                                    className: "font-semibold text-gray-700",
                                                                    children: e.category,
                                                                }),
                                                            ],
                                                        }),
                                                        _jsx("p", {
                                                            className: "text-sm text-gray-700 font-medium mb-2",
                                                            children: e.issue,
                                                        }),
                                                        _jsx("ul", {
                                                            className: "text-sm text-gray-600 space-y-1 ml-4",
                                                            children: e.actions.map((e, t) =>
                                                                _jsxs("li", { className: "list-disc", children: e }, t)
                                                            ),
                                                        }),
                                                    ],
                                                },
                                                t
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        ue.dspRecommendation &&
                            _jsxs("div", {
                                className:
                                    "bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200 shadow-sm",
                                children: [
                                    _jsxs("h3", {
                                        className: "text-xl font-bold text-purple-800 mb-4 flex items-center gap-2",
                                        children: [_jsx("span", { children: "🎛️" }), " DSP Selection Recommendation"],
                                    }),
                                    _jsxs("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: [
                                            _jsxs("div", {
                                                children: [
                                                    _jsxs("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            _jsx("p", {
                                                                className: "text-sm text-gray-600 mb-1",
                                                                children: "Recommended DSP Tier",
                                                            }),
                                                            _jsx("p", {
                                                                className:
                                                                    "text-2xl font-bold capitalize " +
                                                                    ("enterprise" === ue.dspRecommendation.tier
                                                                        ? "text-purple-700"
                                                                        : "professional" === ue.dspRecommendation.tier
                                                                          ? "text-indigo-700"
                                                                          : "mid-range" === ue.dspRecommendation.tier
                                                                            ? "text-blue-700"
                                                                            : "text-green-700"),
                                                                children: ue.dspRecommendation.tier,
                                                            }),
                                                            _jsx("p", {
                                                                className: "text-xs text-gray-500 mt-1",
                                                                children: ue.dspRecommendation.tierReason.join("; "),
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            _jsx("p", {
                                                                className: "text-sm font-medium text-gray-700 mb-2",
                                                                children: "Required Features:",
                                                            }),
                                                            _jsx("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: ue.dspRecommendation.featuresNeeded.map(
                                                                    (e, t) =>
                                                                        _jsx(
                                                                            "span",
                                                                            {
                                                                                className:
                                                                                    "px-2 py-1 bg-white rounded border text-xs text-gray-700",
                                                                                children: e,
                                                                            },
                                                                            t
                                                                        )
                                                                ),
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            _jsxs("p", {
                                                                children: [
                                                                    "Room Size: ",
                                                                    _jsx("span", {
                                                                        className: "font-medium capitalize",
                                                                        children: ue.dspRecommendation.roomSizeCategory,
                                                                    }),
                                                                ],
                                                            }),
                                                            _jsxs("p", {
                                                                children: [
                                                                    "I/O Count: ",
                                                                    ue.dspRecommendation.complexityFactors.ioCount,
                                                                    " channels",
                                                                ],
                                                            }),
                                                            _jsxs("p", {
                                                                children: [
                                                                    "Matrix: ",
                                                                    ue.dspRecommendation.complexityFactors.matrixSize,
                                                                    " crosspoints",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("p", {
                                                        className: "text-sm font-medium text-gray-700 mb-2",
                                                        children: "Recommended Products:",
                                                    }),
                                                    _jsx("div", {
                                                        className: "space-y-2",
                                                        children: ue.dspRecommendation.options.map((e, t) =>
                                                            _jsxs(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "bg-white p-3 rounded-lg border shadow-sm",
                                                                    children: [
                                                                        _jsxs("div", {
                                                                            className:
                                                                                "flex justify-between items-start",
                                                                            children: [
                                                                                _jsxs("div", {
                                                                                    children: [
                                                                                        _jsx("p", {
                                                                                            className:
                                                                                                "font-semibold text-gray-800 text-sm",
                                                                                            children:
                                                                                                e.brand + " " + e.model,
                                                                                        }),
                                                                                        _jsx("p", {
                                                                                            className:
                                                                                                "text-xs text-gray-500",
                                                                                            children: e.channels,
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        _jsx("p", {
                                                                            className: "text-xs text-gray-600 mt-1",
                                                                            children: e.useCase,
                                                                        }),
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
                                    _jsxs("div", {
                                        className: "mt-4 p-3 bg-white/50 rounded-lg",
                                        children: [
                                            _jsxs("p", {
                                                className: "text-xs text-gray-600 mb-3",
                                                children: [
                                                    _jsx("strong", { children: "Note:" }),
                                                    " DSP recommendations are based on your I/O requirements, processing needs, and room characteristics. Always verify specific product capabilities against your exact requirements and consult manufacturer specifications.",
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "border-t pt-3",
                                                children: [
                                                    _jsx("p", {
                                                        className: "text-xs font-semibold text-purple-700 mb-2",
                                                        children: "💡 DSP Selection Best Practices:",
                                                    }),
                                                    _jsxs("ul", {
                                                        className: "text-xs text-gray-600 space-y-1 ml-4",
                                                        children: [
                                                            _jsx("li", {
                                                                className: "list-disc",
                                                                children:
                                                                    "Plan for 30% I/O expansion - choose DSP with room to grow",
                                                            }),
                                                            _jsx("li", {
                                                                className: "list-disc",
                                                                children:
                                                                    "Ensure AEC tail length exceeds RT60 × 1.5 for effective echo cancellation",
                                                            }),
                                                            _jsx("li", {
                                                                className: "list-disc",
                                                                children:
                                                                    "Match network audio protocol (Dante/AES67/AVB) to existing infrastructure",
                                                            }),
                                                            _jsx("li", {
                                                                className: "list-disc",
                                                                children:
                                                                    "Verify USB audio support if soft codec integration is required",
                                                            }),
                                                            _jsx("li", {
                                                                className: "list-disc",
                                                                children:
                                                                    "Keep DSP processing load under 70% for stability and future expansion",
                                                            }),
                                                            _jsx("li", {
                                                                className: "list-disc",
                                                                children:
                                                                    "Consider redundancy options for mission-critical applications",
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
        ],
    });
}

export default DSPCalculator;
