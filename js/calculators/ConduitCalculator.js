import { _jsx, _jsxs, ResetConfirmModal, calculateMixedConduitFill } from '../utils.js';

const { useState, useEffect, useRef } = React;

function ConduitCalculator() {
    const [e, t] = useState(4),
        [s, a] = useState(0.26),
        [r, l] = useState("in"),
        [i, n] = useState(null),
        [o, d] = useState(null),
        [c, m] = useState(null),
        [x, u] = useState("single"),
        [h, p] = useState(!1),
        g = [
            { type: "Cat5e UTP", category: "Data", diameter: 0.2, nec: "NEC 800" },
            { type: "Cat5e STP", category: "Data", diameter: 0.24, nec: "NEC 800" },
            { type: "Cat6 UTP", category: "Data", diameter: 0.25, nec: "NEC 800" },
            { type: "Cat6 STP", category: "Data", diameter: 0.28, nec: "NEC 800" },
            { type: "Cat6A UTP", category: "Data", diameter: 0.3, nec: "NEC 800" },
            { type: "Cat6A STP", category: "Data", diameter: 0.35, nec: "NEC 800" },
            { type: "RG59", category: "Coax", diameter: 0.24, nec: "NEC 820" },
            { type: "RG6", category: "Coax", diameter: 0.27, nec: "NEC 820" },
            { type: "RG6 Quad Shield", category: "Coax", diameter: 0.3, nec: "NEC 820" },
            { type: "RG11", category: "Coax", diameter: 0.41, nec: "NEC 820" },
            { type: "RG58", category: "Coax", diameter: 0.2, nec: "NEC 820" },
            { type: "HDMI Standard", category: "AV", diameter: 0.28, nec: "AVIXA" },
            { type: "HDMI Premium", category: "AV", diameter: 0.32, nec: "AVIXA" },
            { type: "HDMI Active Optical", category: "AV", diameter: 0.2, nec: "AVIXA" },
            { type: "DisplayPort", category: "AV", diameter: 0.28, nec: "AVIXA" },
            { type: "DVI Single Link", category: "AV", diameter: 0.3, nec: "AVIXA" },
            { type: "DVI Dual Link", category: "AV", diameter: 0.35, nec: "AVIXA" },
            { type: "VGA/HD15", category: "AV", diameter: 0.3, nec: "AVIXA" },
            { type: "SDI/HD-SDI", category: "AV", diameter: 0.28, nec: "AVIXA" },
            { type: "12G-SDI", category: "AV", diameter: 0.3, nec: "AVIXA" },
            { type: "USB 2.0", category: "AV", diameter: 0.2, nec: "AVIXA" },
            { type: "USB 3.0", category: "AV", diameter: 0.24, nec: "AVIXA" },
            { type: "USB-C", category: "AV", diameter: 0.22, nec: "AVIXA" },
            { type: "XLR Microphone", category: "Audio", diameter: 0.24, nec: "AVIXA" },
            { type: "Speaker 18AWG", category: "Audio", diameter: 0.18, nec: "NEC 725" },
            { type: "Speaker 16AWG", category: "Audio", diameter: 0.22, nec: "NEC 725" },
            { type: "Speaker 14AWG", category: "Audio", diameter: 0.26, nec: "NEC 725" },
            { type: "Speaker 12AWG", category: "Audio", diameter: 0.32, nec: "NEC 725" },
            { type: "Dante/AES67 (Cat6)", category: "Audio", diameter: 0.25, nec: "AES67" },
            { type: "Fiber Simplex", category: "Fiber", diameter: 0.1, nec: "NEC 770" },
            { type: "Fiber Duplex", category: "Fiber", diameter: 0.12, nec: "NEC 770" },
            { type: "Fiber 6-Strand", category: "Fiber", diameter: 0.2, nec: "NEC 770" },
            { type: "Fiber 12-Strand", category: "Fiber", diameter: 0.28, nec: "NEC 770" },
            { type: "Fiber 24-Strand", category: "Fiber", diameter: 0.35, nec: "NEC 770" },
            { type: "RS-232", category: "Control", diameter: 0.2, nec: "NEC 725" },
            { type: "RS-485", category: "Control", diameter: 0.22, nec: "NEC 725" },
            { type: "DMX 3-pin", category: "Control", diameter: 0.24, nec: "NEC 725" },
            { type: "DMX 5-pin", category: "Control", diameter: 0.26, nec: "NEC 725" },
            { type: "CEC/IR Control", category: "Control", diameter: 0.14, nec: "NEC 725" },
            { type: "12V DC 18AWG", category: "Power", diameter: 0.18, nec: "NEC 725" },
            { type: "24V DC 16AWG", category: "Power", diameter: 0.22, nec: "NEC 725" },
            { type: "48V DC 14AWG", category: "Power", diameter: 0.26, nec: "NEC 725" },
            { type: "Composite Video", category: "Legacy", diameter: 0.24, nec: "AVIXA" },
            { type: "S-Video", category: "Legacy", diameter: 0.28, nec: "AVIXA" },
            { type: "Component Video (3x)", category: "Legacy", diameter: 0.72, nec: "AVIXA" },
        ],
        [b, f] = useState([]),
        [y, j] = useState(""),
        [_, v] = useState(1),
        [N, w] = useState(0.25),
        [C, M] = useState("in"),
        [k, S] = useState(""),
        [R, P] = useState(null),
        [A, D] = useState(0),
        I = (e, t = i) => {
            if (!t || null === e || e < 0) return;
            const s = t._0xf639dc,
                a = s[e];
            if (!a) return;
            const r = t.cableQty * Math.PI * Math.pow(t.outerDiameterInches / 2, 2),
                l = Math.PI * Math.pow(a.id / 2, 2),
                n = Math.round((r / l) * 100),
                o = 1 === t.cableQty ? 53 : 2 === t.cableQty ? 31 : 40,
                d = n > o,
                c = t.cableQty >= 3 ? a.id / t.outerDiameterInches : null;
            let x = "N/A",
                u = "gray";
            t.cableQty >= 3 &&
                c &&
                (c < 2.8
                    ? ((x = "High Risk"), (u = "red"))
                    : c <= 3.2
                      ? ((x = "Borderline"), (u = "yellow"))
                      : ((x = "Low Risk"), (u = "green")));
            let h = [],
                p = "good";
            d &&
                ((p = "error"),
                h.push({
                    type: "error",
                    icon: "🚫",
                    title: "NEC Violation",
                    text: `${n}% fill exceeds NEC Chapter 9 limit of ${o}% for ${t.cableQty} cable(s). This installation would not pass inspection.`,
                }),
                h.push({
                    type: "error",
                    icon: "→",
                    title: "Required Action",
                    text: "Select a larger conduit size or reduce the number of cables.",
                })),
                t.cableQty >= 3 &&
                    ("High Risk" === x
                        ? ("error" !== p && (p = "warning"),
                          h.push({
                              type: "warning",
                              icon: "⚠️",
                              title: "High JAM Risk (AVIXA)",
                              text: `JAM ratio of ${c.toFixed(2)} is below 2.8. Per AVIXA guidelines, cables are likely to jam during pulling, potentially damaging cable jackets.`,
                          }),
                          h.push({
                              type: "info",
                              icon: "💡",
                              title: "Mitigation Options",
                              text: "Use cable pulling lubricant, pull slowly, or consider splitting into multiple conduit runs.",
                          }))
                        : "Borderline" === x
                          ? ("good" === p && (p = "caution"),
                            h.push({
                                type: "caution",
                                icon: "⚠️",
                                title: "Borderline JAM Risk (AVIXA)",
                                text: `JAM ratio of ${c.toFixed(2)} is in the borderline range (2.8-3.2). Cable pulling may be difficult.`,
                            }),
                            h.push({
                                type: "info",
                                icon: "💡",
                                title: "Recommendation",
                                text: "Use cable pulling lubricant and pull cables slowly to minimize risk.",
                            }))
                          : "Low Risk" === x &&
                            h.push({
                                type: "success",
                                icon: "✅",
                                title: "Safe JAM Ratio (AVIXA)",
                                text: `JAM ratio of ${c.toFixed(2)} exceeds 3.2. Cables should pull smoothly without jamming.`,
                            })),
                d ||
                    (n <= 0.5 * o
                        ? h.push({
                              type: "info",
                              icon: "ℹ️",
                              title: "Low Fill Percentage",
                              text: `${n}% fill is well below NEC limit. This provides room for future cable additions.`,
                          })
                        : n <= 0.75 * o
                          ? h.push({
                                type: "success",
                                icon: "✅",
                                title: "Good Fill Percentage",
                                text: `${n}% fill is within recommended range. Allows for easy pulling and some expansion.`,
                            })
                          : h.push({
                                type: "caution",
                                icon: "ℹ️",
                                title: "Near Maximum Fill",
                                text: `${n}% fill is close to NEC limit of ${o}%. Limited room for future cables.`,
                            }));
            const g = s.findIndex((e) => e.trade === t._0xd93e1a?.trade);
            let b = "";
            (b = e < g ? "undersized" : e > g ? "oversized" : "minimum"),
                m({
                    conduit: a,
                    conduitIndex: e,
                    fillPercent: n,
                    necLimit: o,
                    exceedsNEC: d,
                    jamRatio: c ? c.toFixed(2) : "N/A",
                    jamRisk: x,
                    jamRiskColor: u,
                    recommendations: h,
                    status: p,
                    comparison: b,
                    necMinConduit: t._0xd93e1a,
                });
        },
        E = (e) => {
            d(e), I(e);
        },
        F = (e) => {
            const t = {
                "High Risk": "bg-red-600 text-white",
                Borderline: "bg-yellow-500 text-white",
                "Low Risk": "bg-green-600 text-white",
                "N/A": "bg-gray-400 text-white",
            };
            return t[e] || t["N/A"];
        };
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-4 sm:mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-900",
                        children: "Cable Conduit Capacity Calculator",
                    }),
                    (i || b.length > 0) &&
                        _jsx("button", {
                            onClick: () => p(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: h,
                onConfirm: () => {
                    t(4),
                        a(0.26),
                        l("in"),
                        n(null),
                        d(null),
                        m(null),
                        u("single"),
                        f([]),
                        j(""),
                        v(1),
                        w(0.25),
                        M("in"),
                        S(""),
                        P(null),
                        D(0),
                        p(!1);
                },
                onCancel: () => p(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Determines the correct EMT conduit size for your cable runs based on NEC Chapter 9 fill requirements. Enter the number of cables and their outer diameter to get the recommended conduit size, fill percentage, and JAM ratio risk assessment for cable pulls with 3+ conductors.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "flex gap-2 mb-6",
                children: [
                    _jsx("button", {
                        type: "button",
                        onClick: () => u("single"),
                        className:
                            "flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer " +
                            ("single" === x ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"),
                        children: "📏 Single Cable Type",
                    }),
                    _jsx("button", {
                        type: "button",
                        onClick: () => u("mixed"),
                        className:
                            "flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer " +
                            ("mixed" === x ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"),
                        children: "🔀 Multiple Cable Types",
                    }),
                ],
            }),
            "mixed" === x &&
                _jsxs("div", {
                    className: "bg-white rounded-xl shadow-md p-6 mb-6 border",
                    children: [
                        _jsx("h2", {
                            className: "text-lg font-semibold text-gray-800 mb-4",
                            children: "Mixed Cable Configuration",
                        }),
                        _jsx("p", {
                            className: "text-sm text-gray-600 mb-4",
                            children: "Select cable types from the NEC/AVIXA database or add custom cables:",
                        }),
                        _jsxs("div", {
                            className: "bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4",
                            children: [
                                _jsx("h3", { className: "font-semibold text-blue-800 mb-3", children: "Add Cable" }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-3 gap-4",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Cable Type",
                                                }),
                                                _jsxs("select", {
                                                    value: y,
                                                    onChange: (e) => j(e.target.value),
                                                    className:
                                                        "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                    children: [
                                                        _jsx("option", { value: "", children: "-- Select Cable --" }),
                                                        _jsx("optgroup", {
                                                            label: "Data Cables",
                                                            children: g
                                                                .filter((e) => "Data" === e.category)
                                                                .map((e) =>
                                                                    _jsxs(
                                                                        "option",
                                                                        {
                                                                            value: e.type,
                                                                            children: [
                                                                                e.type,
                                                                                " (",
                                                                                e.diameter,
                                                                                '" OD)',
                                                                            ],
                                                                        },
                                                                        e.type
                                                                    )
                                                                ),
                                                        }),
                                                        _jsx("optgroup", {
                                                            label: "AV Cables",
                                                            children: g
                                                                .filter((e) => "AV" === e.category)
                                                                .map((e) =>
                                                                    _jsxs(
                                                                        "option",
                                                                        {
                                                                            value: e.type,
                                                                            children: [
                                                                                e.type,
                                                                                " (",
                                                                                e.diameter,
                                                                                '" OD)',
                                                                            ],
                                                                        },
                                                                        e.type
                                                                    )
                                                                ),
                                                        }),
                                                        _jsx("optgroup", {
                                                            label: "Audio Cables",
                                                            children: g
                                                                .filter((e) => "Audio" === e.category)
                                                                .map((e) =>
                                                                    _jsxs(
                                                                        "option",
                                                                        {
                                                                            value: e.type,
                                                                            children: [
                                                                                e.type,
                                                                                " (",
                                                                                e.diameter,
                                                                                '" OD)',
                                                                            ],
                                                                        },
                                                                        e.type
                                                                    )
                                                                ),
                                                        }),
                                                        _jsx("optgroup", {
                                                            label: "Coaxial Cables",
                                                            children: g
                                                                .filter((e) => "Coax" === e.category)
                                                                .map((e) =>
                                                                    _jsxs(
                                                                        "option",
                                                                        {
                                                                            value: e.type,
                                                                            children: [
                                                                                e.type,
                                                                                " (",
                                                                                e.diameter,
                                                                                '" OD)',
                                                                            ],
                                                                        },
                                                                        e.type
                                                                    )
                                                                ),
                                                        }),
                                                        _jsx("optgroup", {
                                                            label: "Fiber Optic",
                                                            children: g
                                                                .filter((e) => "Fiber" === e.category)
                                                                .map((e) =>
                                                                    _jsxs(
                                                                        "option",
                                                                        {
                                                                            value: e.type,
                                                                            children: [
                                                                                e.type,
                                                                                " (",
                                                                                e.diameter,
                                                                                '" OD)',
                                                                            ],
                                                                        },
                                                                        e.type
                                                                    )
                                                                ),
                                                        }),
                                                        _jsx("optgroup", {
                                                            label: "Control Cables",
                                                            children: g
                                                                .filter((e) => "Control" === e.category)
                                                                .map((e) =>
                                                                    _jsxs(
                                                                        "option",
                                                                        {
                                                                            value: e.type,
                                                                            children: [
                                                                                e.type,
                                                                                " (",
                                                                                e.diameter,
                                                                                '" OD)',
                                                                            ],
                                                                        },
                                                                        e.type
                                                                    )
                                                                ),
                                                        }),
                                                        _jsx("optgroup", {
                                                            label: "Power (Low Voltage)",
                                                            children: g
                                                                .filter((e) => "Power" === e.category)
                                                                .map((e) =>
                                                                    _jsxs(
                                                                        "option",
                                                                        {
                                                                            value: e.type,
                                                                            children: [
                                                                                e.type,
                                                                                " (",
                                                                                e.diameter,
                                                                                '" OD)',
                                                                            ],
                                                                        },
                                                                        e.type
                                                                    )
                                                                ),
                                                        }),
                                                        _jsx("option", {
                                                            value: "custom",
                                                            children: "📏 Custom Cable...",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Quantity",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "1",
                                                    value: _,
                                                    onChange: (e) =>
                                                        v("" === e.target.value ? "" : parseInt(e.target.value) || ""),
                                                    className:
                                                        "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                            ],
                                        }),
                                        _jsx("div", {
                                            className: "flex items-end",
                                            children: _jsx("button", {
                                                type: "button",
                                                onClick: () => {
                                                    if ("custom" === y) {
                                                        if (!k.trim())
                                                            return void alert(
                                                                "Please enter a name for the custom cable"
                                                            );
                                                        const e = "mm" === C ? N / 25.4 : N;
                                                        f([
                                                            ...b,
                                                            {
                                                                type: k || "Custom Cable",
                                                                description: `Custom (${N} ${C})`,
                                                                diameter: e,
                                                                quantity: _,
                                                            },
                                                        ]),
                                                            S("");
                                                    } else if (y) {
                                                        const e = g.find((e) => e.type === y);
                                                        if (e) {
                                                            const t = b.findIndex((t) => t.type === e.type);
                                                            if (t >= 0) {
                                                                const e = [...b];
                                                                (e[t].quantity += _), f(e);
                                                            } else
                                                                f([
                                                                    ...b,
                                                                    {
                                                                        type: e.type,
                                                                        description: `${e.category} - ${e.nec}`,
                                                                        diameter: e.diameter,
                                                                        quantity: _,
                                                                    },
                                                                ]);
                                                        }
                                                    }
                                                    v(1);
                                                },
                                                disabled: !y,
                                                className:
                                                    "w-full py-2 rounded-lg font-medium cursor-pointer " +
                                                    (y
                                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"),
                                                children: "+ Add Cable",
                                            }),
                                        }),
                                    ],
                                }),
                                "custom" === y &&
                                    _jsxs("div", {
                                        className: "mt-4 p-3 bg-white rounded-lg border",
                                        children: [
                                            _jsx("h4", {
                                                className: "font-medium text-gray-700 mb-2",
                                                children: "Custom Cable Details",
                                            }),
                                            _jsxs("div", {
                                                className: "grid grid-cols-3 gap-3",
                                                children: [
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("label", {
                                                                className: "block text-xs text-gray-600 mb-1",
                                                                children: "Cable Name",
                                                            }),
                                                            _jsx("input", {
                                                                type: "text",
                                                                value: k,
                                                                onChange: (e) => S(e.target.value),
                                                                placeholder: "e.g., Custom Cat7",
                                                                className: "w-full px-2 py-1 text-sm border rounded",
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("label", {
                                                                className: "block text-xs text-gray-600 mb-1",
                                                                children: "Outer Diameter",
                                                            }),
                                                            _jsx("input", {
                                                                type: "number",
                                                                step: "0.01",
                                                                min: "0.01",
                                                                value: N,
                                                                onChange: (e) =>
                                                                    w(
                                                                        "" === e.target.value
                                                                            ? ""
                                                                            : parseFloat(e.target.value) || ""
                                                                    ),
                                                                className: "w-full px-2 py-1 text-sm border rounded",
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("label", {
                                                                className: "block text-xs text-gray-600 mb-1",
                                                                children: "Unit",
                                                            }),
                                                            _jsxs("select", {
                                                                value: C,
                                                                onChange: (e) => M(e.target.value),
                                                                className: "w-full px-2 py-1 text-sm border rounded",
                                                                children: [
                                                                    _jsx("option", { value: "in", children: "inches" }),
                                                                    _jsx("option", { value: "mm", children: "mm" }),
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
                        b.length > 0 &&
                            _jsxs("div", {
                                className: "mb-4",
                                children: [
                                    _jsx("h3", {
                                        className: "font-semibold text-gray-700 mb-2",
                                        children: "Selected Cables",
                                    }),
                                    _jsx("div", {
                                        className: "space-y-2",
                                        children: b.map((e, t) =>
                                            _jsxs(
                                                "div",
                                                {
                                                    className:
                                                        "flex items-center justify-between bg-gray-50 p-3 rounded-lg border",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "font-medium",
                                                                    children: e.type,
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "text-gray-500 text-sm ml-2",
                                                                    children: ["(", e.diameter.toFixed(3), '" OD)'],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                _jsx("input", {
                                                                    type: "number",
                                                                    min: "1",
                                                                    value: e.quantity,
                                                                    onChange: (e) =>
                                                                        ((e, t) => {
                                                                            const s = [...b];
                                                                            if ("" === t || void 0 === t)
                                                                                s[e].quantity = "";
                                                                            else {
                                                                                const a = parseInt(t);
                                                                                s[e].quantity = isNaN(a) ? "" : a;
                                                                            }
                                                                            f(s);
                                                                        })(t, e.target.value),
                                                                    className:
                                                                        "w-16 px-2 py-1 text-sm border rounded text-center",
                                                                }),
                                                                _jsx("button", {
                                                                    type: "button",
                                                                    onClick: () => {
                                                                        return (
                                                                            (e = t), void f(b.filter((t, s) => s !== e))
                                                                        );
                                                                        var e;
                                                                    },
                                                                    className: "text-red-600 hover:text-red-800 px-2",
                                                                    children: "✕",
                                                                }),
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
                        _jsx("button", {
                            type: "button",
                            onClick: () => {
                                if (0 === b.length) return void alert("Please add at least one cable type");
                                const e = calculateMixedConduitFill(b, "EMT");
                                P(e);
                                const t = e.conduitOptions.findIndex((e) => e.recommended);
                                D(t >= 0 ? t : 0);
                            },
                            disabled: 0 === b.length,
                            className:
                                "w-full py-3 rounded-lg font-semibold cursor-pointer " +
                                (b.length > 0
                                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"),
                            children: "Calculate Conduit Size",
                        }),
                    ],
                }),
            "mixed" === x &&
                R &&
                _jsxs(_Fragment, {
                    children: [
                        R.exceedsMaximum &&
                            _jsxs("div", {
                                className: "bg-red-50 rounded-xl shadow-md p-6 mb-6 border-2 border-red-300",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-2 mb-3",
                                        children: [
                                            _jsx("span", { className: "text-2xl", children: "⚠️" }),
                                            _jsx("h2", {
                                                className: "text-xl font-bold text-red-800",
                                                children: "Exceeds Maximum Single Conduit Capacity",
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-sm text-red-700 mb-4",
                                        children:
                                            'The total cable area exceeds what can fit in a single 4" conduit per NEC Chapter 9. Multiple conduits are required.',
                                    }),
                                    R.multiConduitRecommendations &&
                                        R.multiConduitRecommendations.length > 0 &&
                                        _jsxs("div", {
                                            className: "mb-4",
                                            children: [
                                                _jsx("h3", {
                                                    className: "font-semibold text-red-800 mb-2",
                                                    children: "📋 Multi-Conduit Recommendations:",
                                                }),
                                                _jsx("div", {
                                                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3",
                                                    children: R.multiConduitRecommendations.map((e, t) =>
                                                        _jsxs(
                                                            "div",
                                                            {
                                                                className:
                                                                    "p-3 rounded-lg border-2 " +
                                                                    (0 === t
                                                                        ? "bg-green-50 border-green-400"
                                                                        : "bg-white border-gray-200"),
                                                                children: [
                                                                    0 === t &&
                                                                        _jsx("div", {
                                                                            className:
                                                                                "text-xs font-bold text-green-700 mb-1",
                                                                            children: "✓ RECOMMENDED",
                                                                        }),
                                                                    _jsxs("div", {
                                                                        className: "text-lg font-bold text-gray-800",
                                                                        children: [
                                                                            e.conduitCount,
                                                                            "× ",
                                                                            e.conduitSize,
                                                                            " Conduits",
                                                                        ],
                                                                    }),
                                                                    _jsxs("div", {
                                                                        className: "text-sm text-gray-600 space-y-1",
                                                                        children: [
                                                                            _jsxs("div", {
                                                                                children: [
                                                                                    "Cables per conduit: ~",
                                                                                    e.cablesPerConduit,
                                                                                ],
                                                                            }),
                                                                            _jsxs("div", {
                                                                                children: [
                                                                                    "Fill: ",
                                                                                    e.fillPercent,
                                                                                    "% ",
                                                                                    e.compliant ? "✓" : "⚠",
                                                                                ],
                                                                            }),
                                                                            e.jamRatio &&
                                                                                _jsxs("div", {
                                                                                    children: [
                                                                                        "JAM Ratio: ",
                                                                                        e.jamRatio,
                                                                                        " ",
                                                                                        e.jamRatio >= 3.2
                                                                                            ? "✓"
                                                                                            : e.jamRatio >= 2.8
                                                                                              ? "⚠"
                                                                                              : "❌",
                                                                                    ],
                                                                                }),
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
                                        className: "bg-white p-4 rounded-lg border border-red-200",
                                        children: [
                                            _jsx("h4", {
                                                className: "font-semibold text-red-800 mb-2",
                                                children: "Alternative Options:",
                                            }),
                                            _jsxs("ul", {
                                                className: "text-sm text-gray-700 space-y-1",
                                                children: [
                                                    _jsx("li", { children: "• Split cables across multiple conduits" }),
                                                    _jsx("li", { children: "• Use cable tray or wireway for large bundles" }),
                                                    _jsx("li", { children: "• Consider plenum-rated cables for open ceiling runs" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        !R.exceedsMaximum &&
                            _jsxs("div", {
                                className: "bg-white rounded-xl shadow-md p-6 mb-6 border",
                                children: [
                                    _jsx("h2", {
                                        className: "text-xl font-semibold text-gray-800 mb-4",
                                        children: "Mixed Cable Conduit Results",
                                    }),
                                    _jsxs("div", {
                                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: R.conduitOptions.map((e, t) =>
                                            _jsxs(
                                                "div",
                                                {
                                                    className:
                                                        "p-4 rounded-lg border-2 cursor-pointer transition-all " +
                                                        (e.recommended
                                                            ? "bg-blue-50 border-blue-500 shadow-md"
                                                            : "bg-white border-gray-200 hover:border-blue-300"),
                                                    children: [
                                                        e.recommended &&
                                                            _jsx("div", {
                                                                className:
                                                                    "text-xs font-bold text-blue-700 mb-1",
                                                                children: "✓ RECOMMENDED",
                                                            }),
                                                        _jsxs("div", {
                                                            className: "text-lg font-bold text-gray-800",
                                                            children: [e.trade, " ", e.nominal],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "text-sm text-gray-600 space-y-1",
                                                            children: [
                                                                _jsxs("div", {
                                                                    children: [
                                                                        "Fill: ",
                                                                        e.fillPercent,
                                                                        "% ",
                                                                        e.compliant ? "✓" : "⚠",
                                                                    ],
                                                                }),
                                                                e.jamRatio &&
                                                                    _jsxs("div", {
                                                                        children: [
                                                                            "JAM: ",
                                                                            e.jamRatio,
                                                                            " ",
                                                                            e.jamRatio >= 3.2
                                                                                ? "✓"
                                                                                : e.jamRatio >= 2.8
                                                                                  ? "⚠"
                                                                                  : "❌",
                                                                        ],
                                                                    }),
                                                                _jsxs("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: [e.id, '" ID'],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                t
                                            )
                                        ),
                                    }),
                                    R.selectedOption &&
                                        _jsxs("div", {
                                            className: "mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200",
                                            children: [
                                                _jsx("h3", {
                                                    className: "font-semibold text-blue-800 mb-2",
                                                    children: "Selected Conduit Details",
                                                }),
                                                _jsxs("div", {
                                                    className: "grid sm:grid-cols-2 gap-4 text-sm",
                                                    children: [
                                                        _jsxs("div", {
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Size: ",
                                                                }),
                                                                _jsx("strong", {
                                                                    children: R.selectedOption.display,
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Internal Diameter: ",
                                                                }),
                                                                _jsxs("strong", {
                                                                    children: [R.selectedOption.id, '"'],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Fill Percentage: ",
                                                                }),
                                                                _jsxs("strong", {
                                                                    children: [R.selectedOption.fillPercent, "%"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "JAM Ratio: ",
                                                                }),
                                                                _jsxs("strong", { children: [R.selectedOption.jamRatio, ":1"] }),
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
            "single" === x &&
                _jsxs("div", {
                    className: "bg-white rounded-xl shadow-md p-8 mb-8 border",
                    children: [
                        _jsx("h2", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Single Cable Type" }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: [
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Number of Cables",
                                        }),
                                        _jsx("input", {
                                            type: "number",
                                            min: "1",
                                            max: "100",
                                            value: e,
                                            onChange: (s) => {
                                                const a = parseInt(s.target.value) || 1;
                                                t(Math.min(100, Math.max(1, a)));
                                                const r = calculateConduitFill(e, s, "EMT");
                                                n(r);
                                                const l = r.conduitOptions.findIndex((e) => e.recommended);
                                                d(l >= 0 ? l : 0);
                                            },
                                            className:
                                                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Cable Outer Diameter",
                                        }),
                                        _jsxs("div", {
                                            className: "flex gap-2",
                                            children: [
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    min: "0.01",
                                                    value: s,
                                                    onChange: (e) => {
                                                        const s = parseFloat(e.target.value) || 0.1;
                                                        a(s);
                                                        const r = calculateConduitFill(t, s, "EMT");
                                                        n(r);
                                                        const l = r.conduitOptions.findIndex((e) => e.recommended);
                                                        d(l >= 0 ? l : 0);
                                                    },
                                                    className:
                                                        "flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                                }),
                                                _jsxs("select", {
                                                    value: r,
                                                    onChange: (s) => {
                                                        l(s.target.value);
                                                        const o = "mm" === s.target.value ? 25.4 : 1 / 25.4;
                                                        a((e) => Math.round(100 * e * o) / 100);
                                                        const d = calculateConduitFill(t, "mm" === s.target.value ? 25.4 : s, "EMT");
                                                        n(d);
                                                        const c = d.conduitOptions.findIndex((e) => e.recommended);
                                                        m(c >= 0 ? c : 0);
                                                    },
                                                    className: "px-3 py-2 border rounded-lg",
                                                    children: [
                                                        _jsx("option", { value: "in", children: 'inches' }),
                                                        _jsx("option", { value: "mm", children: "mm" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        i &&
                            _jsxs("div", {
                                className: "mt-6",
                                children: [
                                    _jsx("h3", { className: "font-semibold text-gray-800 mb-4", children: "Conduit Size Options" }),
                                    _jsx("div", {
                                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: i.conduitOptions.map((e, t) =>
                                            _jsxs(
                                                "div",
                                                {
                                                    className:
                                                        "p-4 rounded-lg border-2 cursor-pointer transition-all " +
                                                        (t === o
                                                            ? "bg-blue-50 border-blue-500 shadow-md"
                                                            : "bg-white border-gray-200 hover:border-blue-300"),
                                                    onClick: () => E(t),
                                                    children: [
                                                        e.recommended &&
                                                            _jsx("div", {
                                                                className:
                                                                    "text-xs font-bold text-blue-700 mb-1",
                                                                children: "✓ RECOMMENDED",
                                                            }),
                                                        _jsxs("div", {
                                                            className: "text-lg font-bold text-gray-800",
                                                            children: [e.trade, " ", e.nominal],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "text-sm text-gray-600 space-y-1",
                                                            children: [
                                                                _jsxs("div", {
                                                                    children: [
                                                                        "Fill: ",
                                                                        e.fillPercent,
                                                                        "% ",
                                                                        e.compliant ? "✓" : "⚠",
                                                                    ],
                                                                }),
                                                                _jsxs("div", { children: ["ID: ", e.id, '"'] }),
                                                                _jsxs("div", { children: ["OD: ", e.od, '"'] }),
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
                        c &&
                            _jsxs("div", {
                                className: "mt-6 p-4 bg-gray-50 rounded-lg",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-2 mb-3",
                                        children: [
                                            _jsx("span", {
                                                className: "text-xl",
                                                children: "error" === c.status ? "❌" : "✓" === c.icon ? "✅" : "⚠️",
                                            }),
                                            _jsx("h3", {
                                                className: "font-semibold text-gray-800",
                                                children: c.conduit.display,
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "grid sm:grid-cols-2 gap-4 text-sm",
                                        children: [
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", { className: "text-gray-600", children: "Fill: " }),
                                                    _jsxs("strong", {
                                                        className: c.exceedsNEC ? "text-red-600" : "text-green-600",
                                                        children: [c.fillPercent, "%"],
                                                    }),
                                                    _jsxs("span", { className: "text-gray-500", children: [" (limit: ", c.necLimit, "%)"] }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", { className: "text-gray-600", children: "JAM Ratio: " }),
                                                    _jsxs("strong", { children: [c.jamRatio, ":1"] }),
                                                    _jsxs("span", {
                                                        className: `ml-1 px-2 py-0.5 text-xs rounded ${F(c.jamRisk)}`,
                                                        children: c.jamRisk,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    c.recommendations.length > 0 &&
                                        _jsx("div", {
                                            className: "mt-4 space-y-2",
                                            children: c.recommendations.map((e, t) =>
                                                _jsxs(
                                                    "div",
                                                    {
                                                        className:
                                                            "flex items-start gap-2 text-sm " +
                                                            ("error" === e.type
                                                                ? "text-red-700"
                                                                : "warning" === e.type
                                                                  ? "text-yellow-700"
                                                                  : "caution" === e.type
                                                                    ? "text-orange-700"
                                                                    : "success" === e.type
                                                                      ? "text-green-700"
                                                                      : "text-blue-700"),
                                                        children: [
                                                            _jsx("span", { children: e.icon }),
                                                            _jsxs("div", {
                                                                children: [
                                                                    _jsx("strong", { children: e.title }),
                                                                    _jsx("p", { className: "text-xs mt-0.5", children: e.text }),
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
                    ],
                }),
        ],
    });
}

export default ConduitCalculator;
