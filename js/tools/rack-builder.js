// Rack Builder Tool
// Dependencies: React, Core (global)

function RackBuilder() {
    const e = [
            { id: "server-1u", name: "1U Server", ru: 1, type: "equipment", depth: 28, weight: 25, power: 300 },
            { id: "server-2u", name: "2U Server", ru: 2, type: "equipment", depth: 28, weight: 45, power: 500 },
            { id: "switch-1u", name: "Network Switch", ru: 1, type: "equipment", depth: 15, weight: 12, power: 150 },
            { id: "patch-1u", name: "Patch Panel", ru: 1, type: "equipment", depth: 6, weight: 5, power: 0 },
            { id: "ups-2u", name: "2U UPS", ru: 2, type: "equipment", depth: 24, weight: 65, power: 0 },
            { id: "pdu-1u", name: "1U PDU", ru: 1, type: "equipment", depth: 4, weight: 8, power: 0 },
            { id: "shelf-1u", name: "1U Shelf", ru: 1, type: "equipment", depth: 18, weight: 10, power: 0 },
            { id: "blank-1u", name: "1U Blank", ru: 1, type: "equipment", depth: 0, weight: 1, power: 0 },
            { id: "blank-2u", name: "2U Blank", ru: 2, type: "equipment", depth: 0, weight: 2, power: 0 },
            { id: "vent-1u", name: "1U Vent", ru: 1, type: "equipment", depth: 0, weight: 1, power: 0 },
            { id: "drawer-2u", name: "2U Drawer", ru: 2, type: "equipment", depth: 18, weight: 15, power: 0 },
            { id: "monitor-1u", name: "1U Monitor", ru: 1, type: "equipment", depth: 20, weight: 20, power: 45 },
        ],
        [t, s] = useState([
            { id: "rack-1", name: "Main Rack", height: 42, items: [] }
        ]),
        [a, r] = useState(0),
        [l, i] = useState(null),
        [n, o] = useState(!1),
        d = (e) => {
            const a = [...t];
            a[r].items.push({ ...e, uniqueId: Date.now() + Math.random() });
            s(a);
        },
        c = (e) => {
            const a = [...t];
            a[r].items = a[r].items.filter((t) => t.uniqueId !== e);
            s(a);
        },
        m = () => {
            const e = t[r],
                s = e.items.reduce((e, t) => e + t.ru, 0),
                a = e.items.reduce((e, t) => e + t.weight, 0),
                l = e.items.reduce((e, t) => e + t.power, 0);
            return { usedRU: s, totalRU: e.height, weight: a, power: l, utilization: Math.round((s / e.height) * 100) };
        };
    return _jsxs("div", {
        className: "max-w-6xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Rack Builder",
                    }),
                    _jsx("button", {
                        onClick: () => o(!0),
                        className:
                            "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm dark:shadow-gray-950/10",
                        children: "⟲ Reset Tool",
                    }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: n,
                onConfirm: () => {
                    s([{ id: "rack-1", name: "Main Rack", height: 42, items: [] }]), r(0), i(null), o(!1);
                },
                onCancel: () => o(!1),
            }),
            _jsxs("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [
                    _jsxs("div", {
                        className: "lg:col-span-1 space-y-6",
                        children: [
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-6 border",
                                children: [
                                    _jsx("h2", { className: "text-lg font-semibold mb-4", children: "Equipment Library" }),
                                    _jsx("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: e.map((e) =>
                                            _jsxs(
                                                "button",
                                                {
                                                    onClick: () => d(e),
                                                    className:
                                                        "p-3 text-left border rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-colors",
                                                    children: [
                                                        _jsx("div", { className: "font-medium text-sm", children: e.name }),
                                                        _jsxs("div", {
                                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                            children: [e.ru, "U • ", e.power, "W"],
                                                        }),
                                                    ],
                                                },
                                                e.id
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-6 border",
                                children: [
                                    _jsx("h2", { className: "text-lg font-semibold mb-4", children: "Rack Stats" }),
                                    _jsxs("div", {
                                        className: "space-y-4",
                                        children: [
                                            _jsxs("div", {
                                                children: [
                                                    _jsxs("div", {
                                                        className: "flex justify-between text-sm mb-1",
                                                        children: [
                                                            _jsx("span", { children: "Space Used" }),
                                                            _jsxs("span", {
                                                                className: "font-medium",
                                                                children: [m().usedRU, " / ", m().totalRU, " RU"],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsx("div", {
                                                        className: "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700",
                                                        children: _jsx("div", {
                                                            className:
                                                                "bg-blue-600 h-2.5 rounded-full transition-all duration-500",
                                                            style: { width: `${Math.min(100, m().utilization)}%` },
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                                children: "Total Power",
                                                            }),
                                                            _jsxs("div", {
                                                                className: "text-lg font-bold text-gray-800 dark:text-gray-100",
                                                                children: [m().power, " W"],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                                children: "Total Weight",
                                                            }),
                                                            _jsxs("div", {
                                                                className: "text-lg font-bold text-gray-800 dark:text-gray-100",
                                                                children: [m().weight, " lbs"],
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
                    _jsx("div", {
                        className: "lg:col-span-2",
                        children: _jsxs("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-6 border min-h-[600px]",
                            children: [
                                _jsx("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: _jsx("h2", {
                                        className: "text-lg font-semibold",
                                        children: "Rack Visualization",
                                    }),
                                }),
                                _jsx("div", {
                                    className: "border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-100 dark:bg-gray-900",
                                    style: { minHeight: "500px" },
                                    children: _jsxs("div", {
                                        className: "relative w-full max-w-md mx-auto bg-gray-800 border-x-8 border-gray-900 shadow-2xl",
                                        style: { height: `${20 * t[r].height}px` },
                                        children: [
                                            Array.from({ length: t[r].height }).map((e, s) =>
                                                _jsxs(
                                                    "div",
                                                    {
                                                        className:
                                                            "absolute w-full border-b border-gray-700/50 flex items-center px-2",
                                                        style: {
                                                            height: "20px",
                                                            top: `${20 * s}px`,
                                                            color: "rgba(255,255,255,0.1)",
                                                            fontSize: "10px",
                                                        },
                                                        children: [
                                                            _jsx("span", { children: t[r].height - s }),
                                                            _jsx("div", {
                                                                className: "flex-1 mx-2 border-b border-dashed border-gray-700/30",
                                                            }),
                                                            _jsx("span", { children: t[r].height - s }),
                                                        ],
                                                    },
                                                    s
                                                )
                                            ),
                                            t[r].items.map((e, t) => {
                                                const s = 0; 
                                                return _jsxs(
                                                    "div",
                                                    {
                                                        className:
                                                            "absolute left-1 right-1 bg-blue-600 border border-blue-400 rounded flex items-center justify-between px-3 shadow-sm z-10 group cursor-pointer hover:bg-blue-500 transition-colors",
                                                        style: {
                                                            height: `${20 * e.ru - 2}px`,
                                                            top: `${20 * t}px`, 
                                                        },
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-xs text-white font-medium truncate",
                                                                children: e.name,
                                                            }),
                                                            _jsx("button", {
                                                                onClick: (t) => {
                                                                    t.stopPropagation(), c(e.uniqueId);
                                                                },
                                                                className:
                                                                    "text-white opacity-0 group-hover:opacity-100 hover:text-red-200 transition-opacity",
                                                                children: "×",
                                                            }),
                                                        ],
                                                    },
                                                    e.uniqueId
                                                );
                                            }),
                                        ],
                                    }),
                                }),
                                _jsx("p", {
                                    className: "text-center text-sm text-gray-500 mt-4",
                                    children: "Visualization is simplified. Items stack from top for this demo.",
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
