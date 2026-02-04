// DSP Utilization Calculator Tool
// Dependencies: React, Core (global)

function calculateDSP(e, t) {
    let s = 0;
    return (
        (s += 1.5 * e.aec),
        (s += 0.5 * e.peq),
        (s += 0.2 * e.comp),
        (s += 0.3 * e.delay),
        (s += 0.1 * e.matrix),
        (s += 1 * e.dante),
        (s += 5 * e.voip),
        {
            utilization: Math.min(100, Math.round(s)),
            cores: Math.ceil(s / 100),
            details: {
                aecLoad: 1.5 * e.aec,
                peqLoad: 0.5 * e.peq,
                compLoad: 0.2 * e.comp,
                danteLoad: 1 * e.dante,
                voipLoad: 5 * e.voip,
            },
        }
    );
}

function DSPCalculator() {
    const [e, t] = useState({
            aec: 8,
            peq: 16,
            comp: 8,
            delay: 8,
            matrix: 16,
            dante: 32,
            voip: 1,
        }),
        [s, a] = useState(null),
        [r, l] = useState(!1),
        i = (s, a) => {
            t({ ...e, [s]: Math.max(0, parseInt(a) || 0) });
        };
    return _jsxs("div", {
        className: "max-w-4xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "DSP Resources Calculator",
                    }),
                    s !== null &&
                        _jsx("button", {
                            onClick: () => l(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm dark:shadow-gray-950/10",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: r,
                onConfirm: () => {
                    t({ aec: 8, peq: 16, comp: 8, delay: 8, matrix: 16, dante: 32, voip: 1 }), a(null), l(!1);
                },
                onCancel: () => l(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Estimates the DSP processing power required for common audio signal chain components. Helps determine if a specific DSP hardware platform has sufficient resources.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Processing Blocks" }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "AEC Channels (Echo Cancel)",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        value: e.aec,
                                        onChange: (e) => i("aec", e.target.value),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Heavy load (microphones)",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Parametric EQ Bands",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        value: e.peq,
                                        onChange: (e) => i("peq", e.target.value),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Total bands across all channels",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Compressors / Limiters",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        value: e.comp,
                                        onChange: (e) => i("comp", e.target.value),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Dante/Network Channels",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        value: e.dante,
                                        onChange: (e) => i("dante", e.target.value),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "VoIP Lines",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        value: e.voip,
                                        onChange: (e) => i("voip", e.target.value),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "SIP/VoIP instances (Very Heavy)",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Delay Blocks",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        value: e.delay,
                                        onChange: (e) => i("delay", e.target.value),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => a(calculateDSP(e)),
                        className:
                            "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate DSP Load",
                    }),
                ],
            }),
            s &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Estimated Load" }),
                        _jsxs("div", {
                            className: "flex flex-col md:flex-row items-center gap-8",
                            children: [
                                _jsx("div", {
                                    className: "relative w-48 h-48",
                                    children: _jsxs("svg", {
                                        className: "w-full h-full transform -rotate-90",
                                        children: [
                                            _jsx("circle", {
                                                cx: "96",
                                                cy: "96",
                                                r: "88",
                                                fill: "none",
                                                stroke: "#e5e7eb",
                                                strokeWidth: "16",
                                            }),
                                            _jsx("circle", {
                                                cx: "96",
                                                cy: "96",
                                                r: "88",
                                                fill: "none",
                                                stroke:
                                                    s.utilization > 90
                                                        ? "#ef4444"
                                                        : s.utilization > 75
                                                          ? "#f59e0b"
                                                          : "#3b82f6",
                                                strokeWidth: "16",
                                                strokeDasharray: 553,
                                                strokeDashoffset: 553 - (553 * s.utilization) / 100,
                                                className: "transition-all duration-1000 ease-out",
                                            }),
                                            _jsx("text", {
                                                x: "50%",
                                                y: "50%",
                                                dominantBaseline: "middle",
                                                textAnchor: "middle",
                                                transform: "rotate(90 96 96)",
                                                className: "text-3xl font-bold fill-gray-700 dark:fill-gray-300",
                                                children: [s.utilization, "%"],
                                            }),
                                        ],
                                    }),
                                }),
                                _jsxs("div", {
                                    className: "flex-1 space-y-4 w-full",
                                    children: [
                                        _jsxs("div", {
                                            className: "p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                                            children: [
                                                _jsx("h3", {
                                                    className: "font-semibold mb-2",
                                                    children: "Resource Breakdown",
                                                }),
                                                _jsxs("ul", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        _jsxs("li", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "AEC Load:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium",
                                                                    children: [s.details.aecLoad.toFixed(1), "%"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("li", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "VoIP/Network:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        (
                                                                            s.details.danteLoad + s.details.voipLoad
                                                                        ).toFixed(1),
                                                                        "%",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("li", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Signal Processing:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        (s.details.peqLoad + s.details.compLoad).toFixed(
                                                                            1
                                                                        ),
                                                                        "%",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        s.utilization > 100
                                            ? _jsxs("div", {
                                                  className:
                                                      "p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700",
                                                  children: [
                                                      _jsx("strong", { children: "⚠️ Overload Warning:" }),
                                                      " This configuration exceeds the capacity of a standard single-core DSP chip. Consider a multi-core device or split the load.",
                                                  ],
                                              })
                                            : _jsxs("div", {
                                                  className: "p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700",
                                                  children: [
                                                      _jsx("strong", { children: "✓ Feasible:" }),
                                                      " This configuration fits within standard DSP resource limits.",
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
