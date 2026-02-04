// Speaker Impedance Calculator Tool
// Dependencies: React, Core (global)

function calculateSpeakerImpedance(e, t) {
    if ("series" === t) {
        const t = e * e,
            s = t;
        return { totalImpedance: Math.round(100 * t) / 100, ampLoad: s, type: "Series" };
    }
    {
        const t = e / e,
            s = t;
        return { totalImpedance: Math.round(100 * t) / 100, ampLoad: s, type: "Parallel" };
    }
}

function SpeakerCalculator() {
    const [e, t] = useState(2),
        [s, a] = useState(8),
        [r, l] = useState(null),
        [i, n] = useState(!1);
    return _jsxs("div", {
        className: "max-w-4xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Speaker Impedance Calculator",
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
                    t(2), a(8), l(null), n(!1);
                },
                onCancel: () => n(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates the total impedance load on an amplifier when connecting multiple speakers in Series or Parallel configurations.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Configuration" }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Number of Speakers",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "1",
                                        value: e,
                                        onChange: (e) => t(Number(e.target.value)),
                                        className:
                                            "w-full px-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-blue-500",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Impedance per Speaker (Ω)",
                                    }),
                                    _jsxs("select", {
                                        value: s,
                                        onChange: (e) => a(Number(e.target.value)),
                                        className:
                                            "w-full px-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-blue-500",
                                        children: [
                                            _jsx("option", { value: "4", children: "4 Ohm" }),
                                            _jsx("option", { value: "8", children: "8 Ohm" }),
                                            _jsx("option", { value: "16", children: "16 Ohm" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-4 mt-6",
                        children: [
                            _jsx("button", {
                                onClick: () => {
                                    const t = e * s;
                                    l({ totalImpedance: t, type: "Series" });
                                },
                                className:
                                    "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm dark:shadow-gray-950/10",
                                children: "Calculate Series",
                            }),
                            _jsx("button", {
                                onClick: () => {
                                    const t = s / e;
                                    l({ totalImpedance: Math.round(100 * t) / 100, type: "Parallel" });
                                },
                                className:
                                    "w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm dark:shadow-gray-950/10",
                                children: "Calculate Parallel",
                            }),
                        ],
                    }),
                ],
            }),
            r &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Impedance Result" }),
                        _jsxs("div", {
                            className: "p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-center",
                            children: [
                                _jsx("div", {
                                    className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                    children: r.type,
                                }),
                                _jsxs("div", {
                                    className: "text-5xl font-bold text-gray-800 dark:text-gray-100",
                                    children: [r.totalImpedance, " Ω"],
                                }),
                                _jsx("div", {
                                    className: "text-sm text-gray-500 dark:text-gray-400 mt-2",
                                    children: "Total Load",
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "mt-6 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2",
                                    children: "Safety Check",
                                }),
                                r.totalImpedance < 2
                                    ? _jsx("p", {
                                          className: "text-red-600",
                                          children:
                                              "⚠️ DANGER: Impedance is dangerously low. Most amplifiers cannot handle loads below 2Ω and may overheat or fail.",
                                      })
                                    : r.totalImpedance < 4
                                      ? _jsx("p", {
                                            className: "text-orange-600",
                                            children:
                                                "⚠️ CAUTION: Low impedance. Ensure your amplifier is rated for 2Ω loads. Many standard amps are only stable down to 4Ω.",
                                        })
                                      : r.totalImpedance > 16
                                        ? _jsx("p", {
                                              className: "text-blue-600",
                                              children:
                                                  "ℹ️ High impedance. Safe for amplifier, but total power output may be reduced significantly.",
                                          })
                                        : _jsx("p", {
                                              className: "text-green-600",
                                              children:
                                                  "✅ Safe Load: This impedance is within the normal operating range for most professional amplifiers (4-16Ω).",
                                          }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
