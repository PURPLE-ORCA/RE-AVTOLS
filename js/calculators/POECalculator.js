import { _jsx, _jsxs, ResetConfirmModal, _0x78d92f } from '../utils.js';

const { useState, useEffect, useRef } = React;

function POECalculator() {
    const [e, t] = useState(0),
        [s, a] = useState(0),
        [r, l] = useState(0),
        [i, n] = useState(0),
        [o, d] = useState(20),
        [c, m] = useState(50),
        [x, u] = useState(null),
        [h, p] = useState(!1),
        [cableLength, setCableLength] = useState(50),
        [cableType, setCableType] = useState("cat6"),
        [lengthUnit, setLengthUnit] = useState("m"),
        g = (e) => (t) => {
            if ("" === t.target.value) return void e("");
            const s = "" === t.target.value ? "" : parseInt(t.target.value);
            e(Math.max(0, s));
        },
        b = e + s + r + i,
        // Convert display length to meters for calculation
        cableLengthM = lengthUnit === "ft" ? cableLength / 3.28084 : cableLength,
        // Convert meters to feet for display
        displayLengthFt = Math.round(cableLength * 3.28084),
        displayLengthM = Math.round(cableLength / 3.28084);
    return _jsxs("div", {
        className: "max-w-4xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "POE Budget Calculator" }),
                    b > 0 &&
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
                    t(0), a(0), l(0), n(0), d(20), m(50), u(null), p(!1), setCableLength(50), setCableType("cat6"), setLengthUnit("m");
                },
                onCancel: () => p(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Calculates total Power over Ethernet requirements for your network. Enter the count of devices by PoE type (PoE, PoE+, PoE++, 4PPoE) to determine the total wattage needed and recommended switch power budget with headroom.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl shadow-md p-8 mb-8 border",
                children: [
                    _jsx("h2", {
                        className: "text-lg font-semibold text-gray-800 mb-4",
                        children: "Device Count by POE Type",
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "POE Devices (15.4W each)",
                                    }),
                                    _jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            _jsx("input", {
                                                type: "number",
                                                min: "0",
                                                value: e,
                                                onChange: g(t),
                                                className: "w-full px-4 py-2 border rounded-lg text-lg font-medium",
                                                placeholder: "0",
                                            }),
                                            _jsxs("span", {
                                                className: "text-sm text-gray-500 whitespace-nowrap",
                                                children: ["= ", (15.4 * e).toFixed(1), "W"],
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "IP phones, basic cameras, small APs",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "POE+ Devices (30W each)",
                                    }),
                                    _jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            _jsx("input", {
                                                type: "number",
                                                min: "0",
                                                value: s,
                                                onChange: g(a),
                                                className: "w-full px-4 py-2 border rounded-lg text-lg font-medium",
                                                placeholder: "0",
                                            }),
                                            _jsxs("span", {
                                                className: "text-sm text-gray-500 whitespace-nowrap",
                                                children: ["= ", (30 * s).toFixed(1), "W"],
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "PTZ cameras, video phones, advanced APs",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "POE++ Devices (60W each)",
                                    }),
                                    _jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            _jsx("input", {
                                                type: "number",
                                                min: "0",
                                                value: r,
                                                onChange: g(l),
                                                className: "w-full px-4 py-2 border rounded-lg text-lg font-medium",
                                                placeholder: "0",
                                            }),
                                            _jsxs("span", {
                                                className: "text-sm text-gray-500 whitespace-nowrap",
                                                children: ["= ", (60 * r).toFixed(1), "W"],
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Video conferencing, multi-radio APs, small displays",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "4PPoE / Type 4 Devices (90W each)",
                                    }),
                                    _jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            _jsx("input", {
                                                type: "number",
                                                min: "0",
                                                value: i,
                                                onChange: g(n),
                                                className: "w-full px-4 py-2 border rounded-lg text-lg font-medium",
                                                placeholder: "0",
                                            }),
                                            _jsxs("span", {
                                                className: "text-sm text-gray-500 whitespace-nowrap",
                                                children: ["= ", (90 * i).toFixed(1), "W"],
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Large displays, thin clients, high-power devices",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("div", {
                        className: "mt-6 p-4 bg-gray-50 rounded-lg border",
                        children: _jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                                _jsx("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "Total Devices:",
                                }),
                                _jsx("span", { className: "text-lg font-bold text-blue-700", children: b }),
                            ],
                        }),
                    }),
                    _jsxs("div", {
                        className: "mt-6",
                        children: [
                            _jsxs("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: ["Headroom: ", o, "%"],
                            }),
                            _jsx("input", {
                                type: "range",
                                min: "0",
                                max: "50",
                                step: "5",
                                value: o,
                                onChange: (e) => d("" === e.target.value ? "" : parseFloat(e.target.value)),
                                className: "w-full",
                            }),
                            _jsx("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: "Additional power buffer for future expansion and safety margin",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200",
                        children: [
                            _jsxs("label", {
                                className: "block text-sm font-medium text-orange-800 mb-2",
                                children: ["Switch Base Power: ", c, "W"],
                            }),
                            _jsx("input", {
                                type: "range",
                                min: "0",
                                max: "200",
                                step: "10",
                                value: c,
                                onChange: (e) => m(Number(e.target.value) || 0),
                                className: "w-full accent-orange-500",
                            }),
                            _jsxs("div", {
                                className: "flex justify-between text-xs text-orange-600 mt-1",
                                children: [
                                    _jsx("span", { children: "0W" }),
                                    _jsx("span", { children: "50W" }),
                                    _jsx("span", { children: "100W" }),
                                    _jsx("span", { children: "150W" }),
                                    _jsx("span", { children: "200W" }),
                                ],
                            }),
                            _jsx("p", {
                                className: "text-xs text-orange-700 mt-2",
                                children:
                                    "Power consumed by the switch itself (not PoE). Typical: 20-80W for managed switches, 50-150W for enterprise.",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-purple-800 mb-3",
                                children: "Average Cable Run Length",
                            }),
                            _jsxs("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                    _jsxs("div", {
                                        className: "flex-1",
                                        children: [
                                            _jsxs("div", {
                                                className: "flex items-center gap-2 mb-2",
                                                children: [
                                                    _jsx("input", {
                                                        type: "number",
                                                        min: "1",
                                                        max: lengthUnit === "m" ? "100" : "328",
                                                        value: cableLength,
                                                        onChange: (ev) => {
                                                            const val = parseInt(ev.target.value) || 0;
                                                            const max = lengthUnit === "m" ? 100 : 328;
                                                            setCableLength(Math.min(Math.max(1, val), max));
                                                        },
                                                        className: "w-24 px-3 py-2 border rounded-lg text-lg font-medium",
                                                    }),
                                                    _jsxs("select", {
                                                        value: lengthUnit,
                                                        onChange: (ev) => {
                                                            const newUnit = ev.target.value;
                                                            if (newUnit !== lengthUnit) {
                                                                // Convert the value
                                                                if (newUnit === "ft") {
                                                                    setCableLength(Math.round(cableLength * 3.28084));
                                                                } else {
                                                                    setCableLength(Math.round(cableLength / 3.28084));
                                                                }
                                                                setLengthUnit(newUnit);
                                                            }
                                                        },
                                                        className: "px-3 py-2 border rounded-lg bg-white",
                                                        children: [
                                                            _jsx("option", { value: "m", children: "meters" }),
                                                            _jsx("option", { value: "ft", children: "feet" }),
                                                        ],
                                                    }),
                                                    _jsx("span", {
                                                        className: "text-sm text-purple-600",
                                                        children: lengthUnit === "m" 
                                                            ? `(${displayLengthFt} ft)` 
                                                            : `(${displayLengthM} m)`,
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "flex gap-2 flex-wrap",
                                                children: [
                                                    _jsx("button", {
                                                        onClick: () => { setCableLength(lengthUnit === "m" ? 30 : 98); },
                                                        className: "px-3 py-1 text-xs rounded-full border border-purple-300 hover:bg-purple-100 transition-colors " + 
                                                            ((lengthUnit === "m" && cableLength === 30) || (lengthUnit === "ft" && cableLength === 98) ? "bg-purple-200" : "bg-white"),
                                                        children: "30m / 98ft",
                                                    }),
                                                    _jsx("button", {
                                                        onClick: () => { setCableLength(lengthUnit === "m" ? 50 : 164); },
                                                        className: "px-3 py-1 text-xs rounded-full border border-purple-300 hover:bg-purple-100 transition-colors " +
                                                            ((lengthUnit === "m" && cableLength === 50) || (lengthUnit === "ft" && cableLength === 164) ? "bg-purple-200" : "bg-white"),
                                                        children: "50m / 164ft",
                                                    }),
                                                    _jsx("button", {
                                                        onClick: () => { setCableLength(lengthUnit === "m" ? 75 : 246); },
                                                        className: "px-3 py-1 text-xs rounded-full border border-purple-300 hover:bg-purple-100 transition-colors " +
                                                            ((lengthUnit === "m" && cableLength === 75) || (lengthUnit === "ft" && cableLength === 246) ? "bg-purple-200" : "bg-white"),
                                                        children: "75m / 246ft",
                                                    }),
                                                    _jsx("button", {
                                                        onClick: () => { setCableLength(lengthUnit === "m" ? 100 : 328); },
                                                        className: "px-3 py-1 text-xs rounded-full border border-purple-300 hover:bg-purple-100 transition-colors " +
                                                            ((lengthUnit === "m" && cableLength === 100) || (lengthUnit === "ft" && cableLength === 328) ? "bg-purple-200" : "bg-white"),
                                                        children: "100m / 328ft (max)",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    _jsx("label", {
                                        className: "text-sm font-medium text-purple-800",
                                        children: "Cable Type:",
                                    }),
                                    _jsxs("select", {
                                        value: cableType,
                                        onChange: (ev) => setCableType(ev.target.value),
                                        className: "px-3 py-2 border rounded-lg bg-white",
                                        children: [
                                            _jsx("option", { value: "cat5e", children: "Cat5e (24 AWG)" }),
                                            _jsx("option", { value: "cat6", children: "Cat6 (23 AWG)" }),
                                            _jsx("option", { value: "cat6a", children: "Cat6A (22 AWG)" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsx("p", {
                                className: "text-xs text-purple-700 mt-2",
                                children:
                                    "Cable length affects power loss (IEEE 802.3). Longer runs and thinner cables result in more power dissipation. Max Ethernet distance: 100m (328ft).",
                            }),
                        ],
                    }),
                    _jsx("button", {
                        type: "button",
                        onClick: () => u(_0x78d92f({ poe: e, poePlus: s, poePlusPlus: r, fourPPOE: i }, o, c, cableLengthM, cableType)),
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg cursor-pointer",
                        children: "Calculate POE Budget",
                    }),
                ],
            }),
            x &&
                _jsxs("div", {
                    className: "bg-white rounded-xl shadow-md p-8 border",
                    children: [
                        _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Results" }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-4 gap-4 mb-6",
                            children: [
                                _jsxs("div", {
                                    className: "bg-blue-50 p-5 rounded-lg border-2 border-blue-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: "PSE Power Required",
                                        }),
                                        _jsxs("div", {
                                            className: "text-2xl font-bold text-blue-700",
                                            children: [x.totalWatts, " W"],
                                        }),
                                        _jsxs("div", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: [
                                                "Incl. cable loss",
                                                x.cableLoss && x.cableLoss.totalLossWatts > 0 
                                                    ? ` (+${x.cableLoss.totalLossWatts}W)` 
                                                    : "",
                                                ` + ${x.headroomPercent}% headroom`
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-orange-50 p-5 rounded-lg border-2 border-orange-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Switch Base Power",
                                        }),
                                        _jsxs("div", {
                                            className: "text-2xl font-bold text-orange-700",
                                            children: [x.switchBasePower, " W"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Switch operating power",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-purple-50 p-5 rounded-lg border-2 border-purple-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Total System Power",
                                        }),
                                        _jsxs("div", {
                                            className: "text-2xl font-bold text-purple-700",
                                            children: [x.totalSystemPower, " W"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "PSE + Switch power",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-green-50 p-5 rounded-lg border-2 border-green-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Minimum PoE Standard",
                                        }),
                                        _jsx("div", {
                                            className: "text-lg font-bold text-green-700",
                                            children: x.minStandardShort,
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: x.minStandardIEEE,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        x.cableLoss && x.cableLoss.totalLossWatts > 0 && _jsxs("div", {
                            className: "bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-200 mb-6",
                            children: [
                                _jsx("h3", {
                                    className: "text-sm font-semibold text-purple-800 mb-3",
                                    children: "⚡ Cable Power Loss Analysis (IEEE 802.3)",
                                }),
                                _jsx("div", {
                                    className: "bg-white/80 rounded-lg p-3 mb-3 text-xs text-center",
                                    children: _jsxs("div", {
                                        className: "flex items-center justify-center gap-2 flex-wrap",
                                        children: [
                                            _jsxs("span", {
                                                className: "font-semibold text-blue-700",
                                                children: ["PD: ", x.cableLoss.powerAtDevices, "W"]
                                            }),
                                            _jsx("span", { className: "text-gray-400", children: "+" }),
                                            _jsxs("span", {
                                                className: "font-semibold " + (x.cableLoss.lossPercent > 15 ? "text-red-600" : x.cableLoss.lossPercent > 10 ? "text-orange-600" : "text-green-600"),
                                                children: ["Cable Loss: ", x.cableLoss.totalLossWatts, "W"]
                                            }),
                                            _jsx("span", { className: "text-gray-400", children: "=" }),
                                            _jsxs("span", {
                                                className: "font-semibold text-purple-700",
                                                children: ["PSE Output: ", x.subtotalWatts, "W"]
                                            }),
                                            _jsx("span", { className: "text-gray-400", children: "+" }),
                                            _jsxs("span", {
                                                className: "font-semibold text-gray-600",
                                                children: [x.headroomPercent, "% Headroom"]
                                            }),
                                            _jsx("span", { className: "text-gray-400", children: "=" }),
                                            _jsxs("span", {
                                                className: "font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded",
                                                children: ["Budget: ", x.totalWatts, "W"]
                                            }),
                                        ],
                                    }),
                                }),
                                _jsxs("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-3 text-center mb-3",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-white p-3 rounded-lg shadow-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "text-xl font-bold text-purple-600",
                                                    children: [x.cableLoss.cableLengthM, "m"],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: ["Cable Length (", x.cableLoss.cableLengthFt, " ft)"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-white p-3 rounded-lg shadow-sm",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xl font-bold text-orange-600",
                                                    children: x.cableLoss.cableType.toUpperCase(),
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: "Cable Type",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-white p-3 rounded-lg shadow-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "text-xl font-bold " + (x.cableLoss.lossPercent > 15 ? "text-red-600" : x.cableLoss.lossPercent > 10 ? "text-orange-600" : "text-green-600"),
                                                    children: [x.cableLoss.totalLossWatts, "W"],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: ["Total Cable Loss (", x.cableLoss.lossPercent, "%)"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-white p-3 rounded-lg shadow-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "text-xl font-bold text-blue-600",
                                                    children: [x.cableLoss.powerAtDevices, "W"],
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: "Power at Devices (PD)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-white/70 rounded-lg p-3",
                                    children: [
                                        _jsx("div", {
                                            className: "text-xs font-medium text-purple-800 mb-2",
                                            children: "Loss per PoE Type:",
                                        }),
                                        _jsxs("div", {
                                            className: "grid grid-cols-2 md:grid-cols-4 gap-2 text-xs",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        _jsx("span", { className: "text-gray-600", children: "PoE (802.3af):" }),
                                                        _jsxs("span", { className: "font-medium", children: [x.cableLoss.perType.poe.lossWatts, "W (", x.cableLoss.perType.poe.lossPercent, "%)"] }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        _jsx("span", { className: "text-gray-600", children: "PoE+ (802.3at):" }),
                                                        _jsxs("span", { className: "font-medium", children: [x.cableLoss.perType.poePlus.lossWatts, "W (", x.cableLoss.perType.poePlus.lossPercent, "%)"] }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        _jsx("span", { className: "text-gray-600", children: "PoE++ Type 3:" }),
                                                        _jsxs("span", { className: "font-medium", children: [x.cableLoss.perType.poePlusPlus.lossWatts, "W (", x.cableLoss.perType.poePlusPlus.lossPercent, "%)"] }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        _jsx("span", { className: "text-gray-600", children: "PoE++ Type 4:" }),
                                                        _jsxs("span", { className: "font-medium", children: [x.cableLoss.perType.fourPPOE.lossWatts, "W (", x.cableLoss.perType.fourPPOE.lossPercent, "%)"] }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 gap-4 mb-6",
                            children: [
                                _jsxs("div", {
                                    className: "bg-gray-50 p-5 rounded-lg border",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Switch Configuration",
                                        }),
                                        _jsx("div", {
                                            className: "text-lg font-bold text-gray-800",
                                            children: x.switchRequirement,
                                        }),
                                        _jsxs("div", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: [x.recommendedPorts, " total ports (", x.unusedPorts, " spare)"],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className:
                                "bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border-2 border-gray-300 mb-6",
                            children: [
                                _jsx("h3", {
                                    className: "text-sm font-semibold text-gray-700 mb-3",
                                    children: "🔌 Switch Requirements Summary",
                                }),
                                _jsxs("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-3 text-center",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-white p-3 rounded-lg shadow-sm",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-2xl font-bold text-blue-600",
                                                    children: x.numSwitches,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: "Switch(es) Needed",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-white p-3 rounded-lg shadow-sm",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-2xl font-bold text-green-600",
                                                    children: x.minStandardShort,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: "PoE Standard",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-white p-3 rounded-lg shadow-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "text-2xl font-bold text-purple-600",
                                                    children: [x.totalWatts, "W"],
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: "PSE Budget Required",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-white p-3 rounded-lg shadow-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "text-2xl font-bold text-orange-600",
                                                    children: [x.switchSize, "-port"],
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: "Switch Size",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 gap-4 mb-6",
                            children: [
                                _jsxs("div", {
                                    className: "bg-orange-50 p-4 rounded-lg border border-orange-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm font-medium text-orange-800 mb-1",
                                            children: "🔌 UPS Sizing",
                                        }),
                                        _jsxs("div", {
                                            className: "text-lg font-bold text-orange-700",
                                            children: [x.upsVA, " VA minimum"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-orange-600",
                                            children: "For PoE switch + 25% headroom",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-red-50 p-4 rounded-lg border border-red-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm font-medium text-red-800 mb-1",
                                            children: "🌡️ Heat Output",
                                        }),
                                        _jsxs("div", {
                                            className: "text-lg font-bold text-red-700",
                                            children: [x.btuPerHour, " BTU/hr"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-red-600",
                                            children: "Consider rack cooling requirements",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-6",
                            children: [
                                _jsx("div", {
                                    className: "text-sm font-medium text-indigo-800 mb-2",
                                    children: "📋 Suggested Switch Brands",
                                }),
                                _jsx("div", { className: "text-sm text-indigo-700", children: x.recommendedBrands }),
                                _jsxs("div", {
                                    className: "text-xs text-indigo-600 mt-1",
                                    children: ["Cable: ", x.cableRecommendation],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "p-4 bg-gray-50 rounded-lg mb-4",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold mb-2",
                                    children: "Power Breakdown (IEEE Standards):",
                                }),
                                _jsxs("div", {
                                    className: "space-y-1 text-sm",
                                    children: [
                                        x.deviceCounts.poe > 0 &&
                                            _jsxs("p", {
                                                children: [
                                                    "• PoE 802.3af (",
                                                    x.deviceCounts.poe,
                                                    " × 15.4W): ",
                                                    _jsxs("strong", { children: [x.breakdown.poe, "W"] }),
                                                ],
                                            }),
                                        x.deviceCounts.poePlus > 0 &&
                                            _jsxs("p", {
                                                children: [
                                                    "• PoE+ 802.3at (",
                                                    x.deviceCounts.poePlus,
                                                    " × 30W): ",
                                                    _jsxs("strong", { children: [x.breakdown.poePlus, "W"] }),
                                                ],
                                            }),
                                        x.deviceCounts.poePlusPlus > 0 &&
                                            _jsxs("p", {
                                                children: [
                                                    "• PoE++ 802.3bt Type 3 (",
                                                    x.deviceCounts.poePlusPlus,
                                                    " × 60W): ",
                                                    _jsxs("strong", { children: [x.breakdown.poePlusPlus, "W"] }),
                                                ],
                                            }),
                                        x.deviceCounts.fourPPOE > 0 &&
                                            _jsxs("p", {
                                                children: [
                                                    "• 4PPoE 802.3bt Type 4 (",
                                                    x.deviceCounts.fourPPOE,
                                                    " × 90W): ",
                                                    _jsxs("strong", { children: [x.breakdown.fourPPOE, "W"] }),
                                                ],
                                            }),
                                        _jsxs("div", {
                                            className: "pt-2 border-t mt-2",
                                            children: [
                                                _jsxs("p", {
                                                    children: [
                                                        "Subtotal (at devices): ",
                                                        _jsx("strong", { children: [x.subtotalWatts, "W"] }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        "Headroom (",
                                                        x.headroomPercent,
                                                        "%): ",
                                                        _jsxs("strong", { children: [x.headroomWatts, "W"] }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    className: "text-blue-700 font-medium",
                                                    children: [
                                                        "Total PSE Budget: ",
                                                        _jsxs("strong", { children: [x.totalWatts, "W"] }),
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

export default POECalculator;
