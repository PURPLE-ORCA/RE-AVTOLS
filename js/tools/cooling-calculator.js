// Cooling Calculator Tool
// Dependencies: React, Core (global)

function calculateBTU(e) {
    const t = 3.412141633,
        s = Math.round(e * t);
    return { btu: s, tons: Math.round((s / 12e3) * 100) / 100 };
}

function CoolingCalculator() {
    const [e, t] = useState(1e3),
        [s, a] = useState(null),
        [r, l] = useState(!1);
    return _jsxs("div", {
        className: "max-w-4xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "BTU Cooling Calculator",
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
                    t(1e3), a(null), l(!1);
                },
                onCancel: () => l(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Converts the total power consumption (Watts) of your AV rack equipment into BTU/hr (British Thermal Units) to help size cooling and HVAC systems.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Equipment Load" }),
                    _jsxs("div", {
                        className: "mb-6",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Total Watts Consumed",
                            }),
                            _jsx("input", {
                                type: "number",
                                min: "0",
                                value: e,
                                onChange: (e) => t(Number(e.target.value)),
                                className:
                                    "w-full px-4 py-3 border rounded-lg text-lg focus:ring-2 focus:ring-blue-500",
                                placeholder: "Enter total watts...",
                            }),
                            _jsx("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-2",
                                children: "Sum of max power rating for all devices in the rack/room.",
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => a(calculateBTU(e)),
                        className:
                            "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Cooling Load",
                    }),
                ],
            }),
            s &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Cooling Requirements" }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: [
                                _jsxs("div", {
                                    className: "p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800 text-center",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                            children: "Required Cooling",
                                        }),
                                        _jsxs("div", {
                                            className: "text-4xl font-bold text-blue-700",
                                            children: [s.btu.toLocaleString(), " BTU/hr"],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 text-center",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                            children: "HVAC Tonnage",
                                        }),
                                        _jsxs("div", {
                                            className: "text-4xl font-bold text-purple-700",
                                            children: [s.tons, " Tons"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-2",
                                            children: "1 Ton ≈ 12,000 BTU/hr",
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
