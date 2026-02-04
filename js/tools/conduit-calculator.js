// Conduit Calculator Tool
// Dependencies: React, Core (global)

function calculateConduitSize(e, t) {
    const s = {
            "Cat5e/Cat6": 6,
            "Cat6A": 7.5,
            "Cat7": 8.4,
            "RG6/U Coax": 6.9,
            "RG59/U Coax": 6.15,
            "Speaker 16AWG": 4.6,
            "Speaker 14AWG": 5.8,
            "Speaker 12AWG": 7.2,
            "Fiber Duplex": 3,
            "Fiber Multi": 12,
            "HDMI (Active)": 8,
            "Power 14/3": 9.5,
            "Power 12/3": 11,
        },
        a = {
            "1/2": { name: '1/2" (16mm)', id: 16, area: 186, max30: 55, max40: 74, max53: 98, max60: 111 },
            "3/4": { name: '3/4" (21mm)', id: 21, area: 337, max30: 101, max40: 134, max53: 178, max60: 202 },
            1: { name: '1" (27mm)', id: 27, area: 553, max30: 165, max40: 221, max53: 293, max60: 331 },
            "1-1/4": { name: '1-1/4" (35mm)', id: 35, area: 955, max30: 286, max40: 382, max53: 506, max60: 573 },
            "1-1/2": { name: '1-1/2" (41mm)', id: 41, area: 1307, max30: 392, max40: 522, max53: 692, max60: 784 },
            2: { name: '2" (53mm)', id: 53, area: 2162, max30: 648, max40: 864, max53: 1145, max60: 1297 },
            "2-1/2": { name: '2-1/2" (63mm)', id: 63, area: 3085, max30: 925, max40: 1234, max53: 1635, max60: 1851 },
            3: { name: '3" (78mm)', id: 78, area: 4768, max30: 1430, max40: 1907, max53: 2527, max60: 2860 },
            "3-1/2": { name: '3-1/2" (91mm)', id: 91, area: 6363, max30: 1908, max40: 2545, max53: 3372, max60: 3817 },
            4: { name: '4" (103mm)', id: 103, area: 8192, max30: 2457, max40: 3276, max53: 4341, max60: 4915 },
        };
    let r = 0;
    const l = [],
        i = (e, t) => (Math.PI * Math.pow(e / 2, 2)).toFixed(2);
    e.forEach((e) => {
        if (e.count > 0) {
            const t = e.isCustom ? e.diameter : s[e.type],
                a = i(t),
                n = a * e.count;
            (r += n), l.push({ ...e, diameter: t, area: a, totalArea: n });
        }
    });
    const n = Math.ceil(r / 0.4),
        o = Math.ceil(r / 0.53);
    let d = null,
        c = null,
        m = 0;
    for (const [e, s] of Object.entries(a)) {
        let a;
        if (
            ("NEC" === t
                ? (a = s.max40)
                : "BICSI" === t
                  ? (a = s.max53)
                  : "AVIXA" === t
                    ? (a = s.max60)
                    : "Zero" === t && (a = s.max30),
            r <= a)
        ) {
            (d = s.name), (c = s), (m = Math.round((r / s.area) * 100));
            break;
        }
    }
    return {
        totalCableArea: Math.round(100 * r) / 100,
        minConduitArea40: n,
        minConduitArea53: o,
        recommendedSize: d,
        conduitSpec: c,
        fillRatio: m,
        cableDetails: l,
    };
}

function ConduitCalculator() {
    const [e, t] = useState([
            { id: 1, type: "Cat5e/Cat6", count: 0, isCustom: !1, diameter: 6 },
            { id: 2, type: "Cat6A", count: 0, isCustom: !1, diameter: 7.5 },
            { id: 3, type: "RG6/U Coax", count: 0, isCustom: !1, diameter: 6.9 },
            { id: 4, type: "Fiber Duplex", count: 0, isCustom: !1, diameter: 3 },
            { id: 5, type: "Speaker 16AWG", count: 0, isCustom: !1, diameter: 4.6 },
            { id: 6, type: "HDMI (Active)", count: 0, isCustom: !1, diameter: 8 },
        ]),
        [s, a] = useState("NEC"),
        [r, l] = useState(null),
        [i, n] = useState(!1),
        o = (s, a) => {
            const r = e.map((e) => (e.id === s ? { ...e, count: Math.max(0, parseInt(a) || 0) } : e));
            t(r);
        },
        d = (s) => {
            const a = e.filter((e) => e.id !== s);
            t(a);
        },
        c = (s, a) => {
            const r = e.map((e) => (e.id === s ? { ...e, diameter: Math.max(0, parseFloat(a) || 0) } : e));
            t(r);
        },
        m = (s, a) => {
            const r = e.map((e) => (e.id === s ? { ...e, type: a } : e));
            t(r);
        };
    return _jsxs("div", {
        className: "max-w-4xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Conduit Fill Calculator",
                    }),
                    r !== null &&
                        _jsx("button", {
                            onClick: () => n(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm dark:shadow-gray-950/10",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: i,
                onConfirm: () => {
                    t([
                        { id: 1, type: "Cat5e/Cat6", count: 0, isCustom: !1, diameter: 6 },
                        { id: 2, type: "Cat6A", count: 0, isCustom: !1, diameter: 7.5 },
                        { id: 3, type: "RG6/U Coax", count: 0, isCustom: !1, diameter: 6.9 },
                        { id: 4, type: "Fiber Duplex", count: 0, isCustom: !1, diameter: 3 },
                        { id: 5, type: "Speaker 16AWG", count: 0, isCustom: !1, diameter: 4.6 },
                        { id: 6, type: "HDMI (Active)", count: 0, isCustom: !1, diameter: 8 },
                    ]),
                        a("NEC"),
                        l(null),
                        n(!1);
                },
                onCancel: () => n(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates the required conduit size based on the number and type of cables. Complies with NEC (40% fill), BICSI (53% fill), and other industry standards.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsxs("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            _jsx("h2", { className: "text-xl font-semibold", children: "Cable Inventory" }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "mr-2 text-sm font-medium text-gray-700 dark:text-gray-300",
                                        children: "Standard:",
                                    }),
                                    _jsxs("select", {
                                        value: s,
                                        onChange: (e) => a(e.target.value),
                                        className:
                                            "px-3 py-1 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500",
                                        children: [
                                            _jsx("option", { value: "NEC", children: "NEC (40% max fill)" }),
                                            _jsx("option", { value: "BICSI", children: "BICSI (53% max fill)" }),
                                            _jsx("option", { value: "AVIXA", children: "AVIXA (60% max fill)" }),
                                            _jsx("option", { value: "Zero", children: "Zero Stress (30% fill)" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("div", {
                        className: "space-y-4 mb-6",
                        children: e.map((e) =>
                            _jsxs(
                                "div",
                                {
                                    className:
                                        "flex flex-wrap sm:flex-nowrap items-center gap-4 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700",
                                    children: [
                                        _jsxs("div", {
                                            className: "flex-1 min-w-[200px]",
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                    children: "Cable Type",
                                                }),
                                                e.isCustom
                                                    ? _jsx("input", {
                                                          type: "text",
                                                          value: e.type,
                                                          onChange: (t) => m(e.id, t.target.value),
                                                          className:
                                                              "w-full px-3 py-2 border rounded text-sm",
                                                          placeholder: "Custom Cable Name",
                                                      })
                                                    : _jsxs("div", {
                                                          className: "font-medium text-gray-800 dark:text-gray-200",
                                                          children: [
                                                              e.type,
                                                              " ",
                                                              _jsx("span", {
                                                                  className: "text-xs text-gray-500 font-normal",
                                                                  children: ["(", e.diameter, "mm OD)"],
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        e.isCustom &&
                                            _jsxs("div", {
                                                className: "w-24",
                                                children: [
                                                    _jsx("label", {
                                                        className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                        children: "OD (mm)",
                                                    }),
                                                    _jsx("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "0.1",
                                                        value: e.diameter,
                                                        onChange: (t) => c(e.id, t.target.value),
                                                        className:
                                                            "w-full px-2 py-2 border rounded text-sm text-center",
                                                    }),
                                                ],
                                            }),
                                        _jsxs("div", {
                                            className: "w-32",
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                    children: "Quantity",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: e.count,
                                                    onChange: (t) => o(e.id, t.target.value),
                                                    className:
                                                        "w-full px-3 py-2 border rounded text-sm text-center font-bold text-blue-600",
                                                }),
                                            ],
                                        }),
                                        e.isCustom &&
                                            _jsx("button", {
                                                onClick: () => d(e.id),
                                                className:
                                                    "text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:bg-red-900/20 rounded",
                                                title: "Remove",
                                                children: "✕",
                                            }),
                                    ],
                                },
                                e.id
                            )
                        ),
                    }),
                    _jsxs("div", {
                        className: "flex gap-4",
                        children: [
                            _jsx("button", {
                                onClick: () =>
                                    t([
                                        ...e,
                                        {
                                            id: Date.now(),
                                            type: "Custom Cable",
                                            count: 1,
                                            isCustom: !0,
                                            diameter: 5,
                                        },
                                    ]),
                                className:
                                    "px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors border border-gray-300 dark:border-gray-600",
                                children: "+ Add Custom Cable",
                            }),
                            _jsx("button", {
                                onClick: () => l(calculateConduitSize(e, s)),
                                className:
                                    "flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-sm dark:shadow-gray-950/10",
                                children: "Calculate Conduit Size",
                            }),
                        ],
                    }),
                ],
            }),
            r &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Calculation Results" }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: [
                                _jsxs("div", {
                                    children: [
                                        _jsxs("div", {
                                            className:
                                                "p-6 rounded-xl border-2 " +
                                                (r.recommendedSize
                                                    ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                                                    : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"),
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                                    children: "Recommended Conduit Size",
                                                }),
                                                _jsx("div", {
                                                    className:
                                                        "text-4xl font-bold " +
                                                        (r.recommendedSize ? "text-green-700" : "text-red-600"),
                                                    children: r.recommendedSize || "Exceeds 4 inch",
                                                }),
                                                r.recommendedSize &&
                                                    _jsxs("div", {
                                                        className: "mt-2 flex items-center gap-2",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-sm font-medium text-green-800 dark:text-green-200",
                                                                children: [r.fillRatio, "% Fill"],
                                                            }),
                                                            _jsx("span", {
                                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                                children: ["(Max allowed: ", "NEC" === s ? "40" : "53", "%)"],
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "mt-6 space-y-3",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-600 dark:text-gray-400",
                                                            children: "Total Cable Area:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-mono font-medium",
                                                            children: [r.totalCableArea, " mm²"],
                                                        }),
                                                    ],
                                                }),
                                                r.conduitSpec &&
                                                    _jsxs(_Fragment, {
                                                        children: [
                                                            _jsxs("div", {
                                                                className: "flex justify-between text-sm",
                                                                children: [
                                                                    _jsx("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Conduit Internal Area:",
                                                                    }),
                                                                    _jsxs("span", {
                                                                        className: "font-mono font-medium",
                                                                        children: [r.conduitSpec.area, " mm²"],
                                                                    }),
                                                                ],
                                                            }),
                                                            _jsxs("div", {
                                                                className: "flex justify-between text-sm",
                                                                children: [
                                                                    _jsx("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: ["Max Area (", s, "):"],
                                                                    }),
                                                                    _jsxs("span", {
                                                                        className: "font-mono font-medium",
                                                                        children: [
                                                                            "NEC" === s
                                                                                ? r.conduitSpec.max40
                                                                                : r.conduitSpec.max53,
                                                                            " mm²",
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
                                _jsxs("div", {
                                    className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 overflow-hidden",
                                    children: [
                                        _jsx("h3", {
                                            className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                            children: "Visual Fill Representation",
                                        }),
                                        _jsx("div", {
                                            className: "relative w-48 h-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full border-4 border-gray-400 flex items-center justify-center",
                                            children: r.recommendedSize
                                                ? _jsxs("div", {
                                                      className: "relative w-full h-full",
                                                      children: [
                                                          _jsx("div", {
                                                              className:
                                                                  "absolute inset-0 bg-blue-500 opacity-20 rounded-full",
                                                              style: {
                                                                  transform: `scale(${Math.sqrt(r.fillRatio / 100)})`,
                                                              },
                                                          }),
                                                          _jsx("div", {
                                                              className:
                                                                  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",
                                                              children: _jsxs("span", {
                                                                  className: "text-xs font-bold text-gray-600 dark:text-gray-400",
                                                                  children: [r.fillRatio, "%"],
                                                              }),
                                                          }),
                                                      ],
                                                  })
                                                : _jsx("span", {
                                                      className: "text-red-500 font-bold",
                                                      children: "OVERFILL",
                                                  }),
                                        }),
                                        _jsx("div", {
                                            className: "mt-4 text-xs text-center text-gray-500 dark:text-gray-400",
                                            children:
                                                "Note: This is a mathematical area representation, not actual cable packing. Real-world jamming probability is higher.",
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
