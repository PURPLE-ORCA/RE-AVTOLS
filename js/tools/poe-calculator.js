// POE Calculator Tool
// Dependencies: React, Core (global)

function calculatePOE(e, t) {
    const s = 0.85,
        a = e * t;
    let r = a / s;
    return (
        r > 15.4 && r <= 30 && (r = a / 0.8),
        r > 30 && (r = a / 0.75),
        { totalPowerNeeded: Math.round(100 * r) / 100, rawPower: a }
    );
}

function POECalculator() {
    const [e, t] = useState([
            { id: 1, name: "WiFi AP", power: 15, count: 5, standard: "af" },
            { id: 2, name: "IP Camera", power: 7, count: 10, standard: "af" },
            { id: 3, name: "VoIP Phone", power: 5, count: 20, standard: "af" },
            { id: 4, name: "PTZ Camera", power: 25, count: 2, standard: "at" },
            { id: 5, name: "Touch Panel", power: 12, count: 4, standard: "af" },
        ]),
        [s, a] = useState(20),
        [r, l] = useState(null),
        [i, n] = useState(!1),
        o = (s, a) => {
            const r = e.map((e) => (e.id === s ? { ...e, count: Math.max(0, parseInt(a) || 0) } : e));
            t(r);
        },
        d = (s, a) => {
            const r = e.map((e) => (e.id === s ? { ...e, power: Math.max(0, parseFloat(a) || 0) } : e));
            t(r);
        },
        c = (s) => {
            const a = e.filter((e) => e.id !== s);
            t(a);
        },
        m = (s, a) => {
            const r = e.map((e) => (e.id === s ? { ...e, name: a } : e));
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
                        children: "PoE Budget Calculator",
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
                        { id: 1, name: "WiFi AP", power: 15, count: 5, standard: "af" },
                        { id: 2, name: "IP Camera", power: 7, count: 10, standard: "af" },
                        { id: 3, name: "VoIP Phone", power: 5, count: 20, standard: "af" },
                        { id: 4, name: "PTZ Camera", power: 25, count: 2, standard: "at" },
                        { id: 5, name: "Touch Panel", power: 12, count: 4, standard: "af" },
                    ]),
                        a(20),
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
                        " Calculates the total Power over Ethernet (PoE) budget required for a network switch based on connected devices. Accounts for cable loss and standard power classes (PoE, PoE+, PoE++).",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Device Inventory" }),
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
                                                    children: "Device Name",
                                                }),
                                                _jsx("input", {
                                                    type: "text",
                                                    value: e.name,
                                                    onChange: (t) => m(e.id, t.target.value),
                                                    className:
                                                        "w-full px-3 py-2 border rounded text-sm bg-white dark:bg-gray-800",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "w-24",
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                    children: "Watts/Dev",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "0",
                                                    step: "0.1",
                                                    value: e.power,
                                                    onChange: (t) => d(e.id, t.target.value),
                                                    className:
                                                        "w-full px-2 py-2 border rounded text-sm text-center",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "w-24",
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
                                                        "w-full px-2 py-2 border rounded text-sm text-center font-bold text-blue-600",
                                                }),
                                            ],
                                        }),
                                        _jsx("button", {
                                            onClick: () => c(e.id),
                                            className:
                                                "text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:bg-red-900/20 rounded mt-4 sm:mt-0",
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
                        className: "flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6",
                        children: [
                            _jsx("button", {
                                onClick: () =>
                                    t([
                                        ...e,
                                        {
                                            id: Date.now(),
                                            name: "New Device",
                                            power: 15,
                                            count: 1,
                                            standard: "af",
                                        },
                                    ]),
                                className:
                                    "px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors border border-gray-300 dark:border-gray-600",
                                children: "+ Add Device",
                            }),
                            _jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    _jsx("label", {
                                        className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                        children: "Safety Margin (%):",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        max: "50",
                                        value: s,
                                        onChange: (e) => a(Number(e.target.value)),
                                        className: "w-20 px-2 py-1 border rounded text-center",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => {
                            let t = 0;
                            e.forEach((e) => {
                                t += calculatePOE(e.power, e.count).totalPowerNeeded;
                            });
                            const r = t * (1 + s / 100);
                            l({
                                rawTotal: Math.round(100 * t) / 100,
                                recommendedTotal: Math.round(r),
                                deviceCount: e.reduce((e, t) => e + t.count, 0),
                            });
                        },
                        className:
                            "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate PoE Budget",
                    }),
                ],
            }),
            r &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Budget Results" }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: [
                                _jsxs("div", {
                                    className: "p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-200 dark:border-green-800",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                            children: "Recommended Switch Budget",
                                        }),
                                        _jsxs("div", {
                                            className: "text-4xl font-bold text-green-700",
                                            children: [r.recommendedTotal, " W"],
                                        }),
                                        _jsxs("div", {
                                            className: "text-sm text-gray-500 dark:text-gray-400 mt-2",
                                            children: ["Includes ", s, "% safety margin & cable loss"],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "space-y-4",
                                    children: [
                                        _jsxs("div", {
                                            className: "flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                                            children: [
                                                _jsx("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Total Devices:",
                                                }),
                                                _jsx("span", {
                                                    className: "font-bold",
                                                    children: r.deviceCount,
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                                            children: [
                                                _jsx("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Raw Consumption:",
                                                }),
                                                _jsxs("span", {
                                                    className: "font-bold",
                                                    children: [r.rawTotal, " W"],
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
