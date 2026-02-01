import { _jsx, _jsxs, ResetConfirmModal, calculateRackCooling } from '../utils.js';

const { useState, useEffect, useRef } = React;

function CoolingCalculator() {
    const [e, t] = useState(10),
        [s, a] = useState(20),
        [r, l] = useState(9),
        [i, n] = useState("ft"),
        [o, d] = useState(1500),
        [c, m] = useState(1),
        [x, u] = useState(100),
        [h, p] = useState(1.25),
        [g, b] = useState(null),
        [f, y] = useState(!1);
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-4 sm:mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-900",
                        children: "Rack Cooling Calculator",
                    }),
                    g !== null &&
                        _jsx("button", {
                            onClick: () => y(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: f,
                onConfirm: () => {
                    t(10), a(20), l(9), n("ft"), d(1500), m(1), u(100), p(1.25), b(null), y(!1);
                },
                onCancel: () => y(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Calculates cooling requirements (BTU/hr and tons) based on your equipment's power consumption. Simply enter the total wattage of all equipment — the heat output equals the power consumed. Room size is only used for heat density analysis.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-blue-50 rounded-xl p-4 sm:p-5 mb-6 border border-blue-200",
                children: [
                    _jsx("h2", {
                        className: "text-base sm:text-lg font-semibold text-blue-800 mb-2 sm:mb-3",
                        children: "ASHRAE Thermal Guidelines",
                    }),
                    _jsx("p", {
                        className: "text-xs sm:text-sm text-blue-700 mb-3",
                        children:
                            "All electrical power consumed by equipment is converted to heat. ASHRAE provides thermal guidelines to ensure equipment reliability.",
                    }),
                    _jsxs("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",
                        children: [
                            _jsxs("div", {
                                className: "bg-white p-2 rounded border border-blue-200 text-center",
                                children: [
                                    _jsx("div", {
                                        className: "font-bold text-blue-700",
                                        children: "1W = 3.412 BTU/hr",
                                    }),
                                    _jsx("div", { className: "text-blue-600", children: "Conversion Factor" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-2 rounded border border-blue-200 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "64-80°F" }),
                                    _jsx("div", { className: "text-blue-600", children: "Inlet Temp Range" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-2 rounded border border-blue-200 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "40-60%" }),
                                    _jsx("div", { className: "text-blue-600", children: "Humidity Range" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-2 rounded border border-blue-200 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "12,000 BTU/hr" }),
                                    _jsx("div", { className: "text-blue-600", children: "= 1 Ton Cooling" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 border",
                children: [
                    _jsx("h2", {
                        className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                        children: "Equipment Heat Load",
                    }),
                    _jsxs("div", {
                        className: "bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200",
                        children: [
                            _jsx("h3", {
                                className: "text-sm font-semibold text-blue-800 mb-2",
                                children: "ASHRAE/Industry Standard Formula",
                            }),
                            _jsx("p", {
                                className: "text-xs text-blue-700 font-mono mb-2",
                                children:
                                    "Total BTU/hr = (Equipment Watts × 3.412) + (People × 400) + (Lighting Watts × 3.412)",
                            }),
                            _jsx("p", {
                                className: "text-xs text-blue-600",
                                children:
                                    "Room size does NOT add heat — it's only used to calculate heat density (W/ft²) for cooling system type recommendations.",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-4 sm:gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Equipment Power (Watts)",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        value: o,
                                        onChange: (e) => d("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("div", {
                                        className: "flex flex-wrap gap-1 mt-2",
                                        children: [
                                            { label: "Small AV Rack (500W)", watts: 500 },
                                            { label: "Medium AV Rack (1.5kW)", watts: 1500 },
                                            { label: "Large AV Rack (3kW)", watts: 3e3 },
                                            { label: "Server Rack (5kW)", watts: 5e3 },
                                            { label: "High-Density Rack (10kW)", watts: 1e4 },
                                            { label: "AV Processor (150W)", watts: 150 },
                                            { label: "Amplifier 1000W Class AB", watts: 1500 },
                                            { label: "Amplifier 1000W Class D", watts: 400 },
                                            { label: "Video Wall Controller", watts: 400 },
                                            { label: "Matrix Switcher", watts: 200 },
                                            { label: "DSP Processor", watts: 100 },
                                            { label: "Network Switch 24-port", watts: 50 },
                                        ]
                                            .slice(0, 6)
                                            .map((e) =>
                                                _jsx(
                                                    "button",
                                                    {
                                                        onClick: () => d(e.watts),
                                                        className:
                                                            "px-2 py-1 text-xs rounded border transition-colors cursor-pointer " +
                                                            (o === e.watts
                                                                ? "bg-blue-600 text-white border-blue-600"
                                                                : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50"),
                                                        children: e.label,
                                                    },
                                                    e.label
                                                )
                                            ),
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-2",
                                        children:
                                            "Sum total wattage of all equipment (servers, amps, processors, etc.)",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Active People in Room",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        value: c,
                                        onChange: (e) => m("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "ASHRAE: 400 BTU/hr per person (sedentary office work)",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Lighting Power (Watts)",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        value: x,
                                        onChange: (e) => u("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsxs("div", {
                                        className: "mt-2 p-2 bg-yellow-50 rounded border border-yellow-200",
                                        children: [
                                            _jsx("p", {
                                                className: "text-xs text-yellow-800 font-medium mb-1",
                                                children: "💡 How to calculate lighting watts:",
                                            }),
                                            _jsx("p", {
                                                className: "text-xs text-yellow-700",
                                                children:
                                                    "Count fixtures × Watts per bulb. Example: 4 LED tubes × 18W = 72W total. Check bulb labels or: LED (8-18W), Fluorescent (32-40W), Incandescent (60-100W per bulb).",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Safety Factor",
                                    }),
                                    _jsxs("select", {
                                        value: h,
                                        onChange: (e) => p(Number(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            _jsx("option", { value: 1, children: "1.0× (No margin)" }),
                                            _jsx("option", { value: 1.15, children: "1.15× (15% margin)" }),
                                            _jsx("option", {
                                                value: 1.25,
                                                children: "1.25× (25% margin - Recommended)",
                                            }),
                                            _jsx("option", {
                                                value: 1.5,
                                                children: "1.5× (50% margin - Future expansion)",
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "HVAC consultants typically recommend 1.25-1.5× for growth",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-6 pt-4 border-t",
                        children: [
                            _jsx("h3", {
                                className: "text-sm font-medium text-gray-700 mb-3",
                                children: "Room Dimensions (for heat density calculation only)",
                            }),
                            _jsxs("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                children: [
                                    _jsxs("div", {
                                        children: [
                                            _jsx("label", {
                                                className: "block text-xs text-gray-600 mb-1",
                                                children: "Unit",
                                            }),
                                            _jsxs("select", {
                                                value: i,
                                                onChange: (e) => n(e.target.value),
                                                className:
                                                    "w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500",
                                                children: [
                                                    _jsx("option", { value: "ft", children: "Feet (ft)" }),
                                                    _jsx("option", { value: "m", children: "Meters (m)" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        children: [
                                            _jsxs("label", {
                                                className: "block text-xs text-gray-600 mb-1",
                                                children: ["Width (", i, ")"],
                                            }),
                                            _jsx("input", {
                                                type: "number",
                                                min: "0.1",
                                                step: "0.1",
                                                value: e,
                                                onChange: (e) =>
                                                    t("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                className:
                                                    "w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        children: [
                                            _jsxs("label", {
                                                className: "block text-xs text-gray-600 mb-1",
                                                children: ["Length (", i, ")"],
                                            }),
                                            _jsx("input", {
                                                type: "number",
                                                min: "0.1",
                                                step: "0.1",
                                                value: s,
                                                onChange: (e) =>
                                                    a("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                className:
                                                    "w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        children: [
                                            _jsxs("label", {
                                                className: "block text-xs text-gray-600 mb-1",
                                                children: ["Height (", i, ")"],
                                            }),
                                            _jsx("input", {
                                                type: "number",
                                                min: "0.1",
                                                step: "0.1",
                                                value: r,
                                                onChange: (e) =>
                                                    l("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                className:
                                                    "w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200",
                                children: [
                                    _jsxs("div", {
                                        className: "flex flex-wrap gap-4 text-sm",
                                        children: [
                                            _jsxs("span", {
                                                className: "text-gray-600",
                                                children: [
                                                    "Floor Area: ",
                                                    _jsx("span", {
                                                        className: "font-semibold text-gray-800",
                                                        children:
                                                            "m" === i
                                                                ? `${(e * s).toFixed(1)} m² (${(e * s * 10.764).toFixed(1)} ft²)`
                                                                : `${(e * s).toFixed(1)} ft² (${((e * s) / 10.764).toFixed(1)} m²)`,
                                                    }),
                                                ],
                                            }),
                                            _jsxs("span", {
                                                className: "text-gray-600",
                                                children: [
                                                    "Volume: ",
                                                    _jsx("span", {
                                                        className: "font-semibold text-gray-800",
                                                        children:
                                                            "m" === i
                                                                ? `${(e * s * r).toFixed(1)} m³ (${(e * s * r * 35.315).toFixed(0)} ft³)`
                                                                : `${(e * s * r).toFixed(0)} ft³ (${((e * s * r) / 35.315).toFixed(1)} m³)`,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsx("p", {
                                className: "text-xs text-gray-500 mt-2",
                                children:
                                    "Room dimensions are used to calculate W/ft² and W/ft³ density to determine cooling system type needed — they do NOT add to the heat load.",
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => {
                            const t = e > 0 ? e : 1,
                                a = s > 0 ? s : 1,
                                l = r > 0 ? r : 1,
                                n = o >= 0 ? o : 0,
                                d = t * a,
                                m = d * l,
                                u = "m" === i ? 10.764 * d : d,
                                p = "m" === i ? 35.315 * m : m,
                                g = 3.412 * n,
                                f = 400 * (c >= 0 ? c : 0),
                                y = 3.412 * (x >= 0 ? x : 0),
                                j = g + f + y,
                                _ = j * h,
                                v = _ / 12e3,
                                N = 3.517 * v,
                                w = Math.round(_ / (1.08 * 15)),
                                C = Math.round(450 * v),
                                M = _ / (1.08 * Math.max(w, C)),
                                k = n / u,
                                S = _ / u,
                                R = n / p,
                                P = [],
                                A = [];
                            k > 100
                                ? A.push({
                                      type: "error",
                                      title: "Very High Heat Density",
                                      text: `At ${k.toFixed(1)} W/ft², this exceeds typical high-density thresholds. Consider in-row cooling, hot/cold aisle containment, or liquid cooling per ASHRAE guidelines.`,
                                  })
                                : k > 50
                                  ? A.push({
                                        type: "warning",
                                        title: "High Heat Density",
                                        text: `Heat density of ${k.toFixed(1)} W/ft² is above average. Ensure adequate airflow management and consider supplemental cooling.`,
                                    })
                                  : k < 10 &&
                                    u > 100 &&
                                    P.push({
                                        type: "info",
                                        title: "Low Heat Density",
                                        text: `Heat density of ${k.toFixed(1)} W/ft² is low. Standard room ventilation may be adequate, but dedicated cooling is still recommended for reliability.`,
                                    }),
                                C < w &&
                                    P.push({
                                        type: "info",
                                        title: "Airflow Sizing",
                                        text: `Standard 450 CFM/ton provides ${C} CFM. For optimal 15°F delta, ${w} CFM is recommended.`,
                                    }),
                                P.push({
                                    type: "info",
                                    title: "ASHRAE Temperature Guidelines",
                                    text: "ASHRAE recommends inlet air temperature of 64-80°F (18-27°C) with 40-60% relative humidity for IT/AV equipment.",
                                }),
                                v < 0.5
                                    ? P.push({
                                          type: "info",
                                          title: "Small Space Cooling",
                                          text: "For small heat loads, consider a mini-split AC, portable AC unit, or enhanced ventilation with exhaust fans.",
                                      })
                                    : v >= 2 &&
                                      P.push({
                                          type: "info",
                                          title: "Redundancy Recommendation",
                                          text: `For ${v.toFixed(1)} tons of cooling, ASHRAE recommends N+1 redundancy for critical spaces. Consider two ${(v / 2).toFixed(1)}-ton units.`,
                                      }),
                                P.push({
                                    type: "info",
                                    title: "Airflow Management",
                                    text: "Per EIA-310 and ASHRAE, use blank panels in all unused rack positions to prevent hot air recirculation.",
                                }),
                                b({
                                    totalBTU: Math.round(_),
                                    subtotalBTU: Math.round(j),
                                    equipmentBTU: Math.round(g),
                                    peopleBTU: Math.round(f),
                                    lightingBTU: Math.round(y),
                                    safetyFactor: h,
                                    coolingTons: Math.round(100 * v) / 100,
                                    coolingKW: Math.round(100 * N) / 100,
                                    cfmRequired: Math.round(w),
                                    actualCFM: Math.round(C),
                                    tempRise: Math.round(10 * M) / 10,
                                    wattsPerSqFt: Math.round(10 * k) / 10,
                                    btuPerSqFt: Math.round(10 * S) / 10,
                                    wattsPerCuFt: Math.round(100 * R) / 100,
                                    areaInSqFt: Math.round(100 * u) / 100,
                                    areaInSqM: Math.round((u / 10.764) * 100) / 100,
                                    volumeCuFt: Math.round(100 * p) / 100,
                                    volumeCuM: Math.round((p / 35.315) * 100) / 100,
                                    roomWidth: t,
                                    roomLength: a,
                                    roomHeight: l,
                                    dimensionUnit: i,
                                    equipmentWatts: n,
                                    tips: P,
                                    warnings: A,
                                });
                        },
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Cooling Requirements",
                    }),
                ],
            }),
            g &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className: "bg-white rounded-xl shadow-md p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "Cooling Requirements",
                                }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-3 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-blue-50 p-4 rounded-lg border-2 border-blue-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-blue-600 font-medium",
                                                    children: "Total Heat Load",
                                                }),
                                                _jsx("div", {
                                                    className: "text-2xl font-bold text-blue-700",
                                                    children: g.totalBTU.toLocaleString(),
                                                }),
                                                _jsx("div", { className: "text-xs text-blue-600", children: "BTU/h" }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-green-50 p-4 rounded-lg border-2 border-green-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-green-600 font-medium",
                                                    children: "Cooling Required",
                                                }),
                                                _jsx("div", {
                                                    className: "text-2xl font-bold text-green-700",
                                                    children: g.coolingTons,
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-green-600",
                                                    children: ["Tons (", g.coolingKW, " kW)"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600 font-medium",
                                                    children: "Airflow Required",
                                                }),
                                                _jsx("div", {
                                                    className: "text-2xl font-bold text-purple-700",
                                                    children: g.cfmRequired.toLocaleString(),
                                                }),
                                                _jsx("div", { className: "text-xs text-purple-600", children: "CFM" }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-2 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className:
                                                "p-4 rounded-lg border " +
                                                (g.wattsPerSqFt < 50
                                                    ? "bg-green-50 border-green-200"
                                                    : g.wattsPerSqFt < 100
                                                      ? "bg-yellow-50 border-yellow-200"
                                                      : "bg-red-50 border-red-200"),
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-sm font-medium text-gray-700",
                                                            children: "Heat Density",
                                                        }),
                                                        _jsxs("span", {
                                                            className:
                                                                "font-bold " +
                                                                (g.wattsPerSqFt < 50
                                                                    ? "text-green-700"
                                                                    : g.wattsPerSqFt < 100
                                                                      ? "text-yellow-700"
                                                                      : "text-red-700"),
                                                            children: [g.wattsPerSqFt, " W/ft²"],
                                                        }),
                                                    ],
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children:
                                                        g.wattsPerSqFt < 50
                                                            ? "Standard density - conventional cooling adequate"
                                                            : g.wattsPerSqFt < 100
                                                              ? "Medium density - ensure good airflow"
                                                              : "High density - specialized cooling recommended",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "p-4 rounded-lg border bg-gray-50 border-gray-200",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-sm font-medium text-gray-700",
                                                            children: "Equipment Power",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-bold text-gray-700",
                                                            children: [g.equipmentWatts.toLocaleString(), " W"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        "= ",
                                                        g.equipmentBTU.toLocaleString(),
                                                        " BTU/hr (×3.412 conversion)",
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "p-4 bg-gray-50 rounded-lg mb-4",
                                    children: [
                                        _jsx("h3", {
                                            className: "font-semibold text-gray-700 mb-3",
                                            children: "Heat Load Breakdown",
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        _jsxs("span", {
                                                            className: "text-gray-600",
                                                            children: ["Equipment (", g.equipmentWatts, "W × 3.412):"],
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-medium text-blue-600",
                                                            children: [g.equipmentBTU.toLocaleString(), " BTU/hr"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        _jsxs("span", {
                                                            className: "text-gray-600",
                                                            children: ["People (", c, " × 400 BTU):"],
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-medium",
                                                            children: [g.peopleBTU.toLocaleString(), " BTU/hr"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        _jsxs("span", {
                                                            className: "text-gray-600",
                                                            children: ["Lighting (", x, "W × 3.412):"],
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-medium",
                                                            children: [g.lightingBTU.toLocaleString(), " BTU/hr"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between text-sm border-t pt-2",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-700",
                                                            children: "Subtotal:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-medium",
                                                            children: [g.subtotalBTU.toLocaleString(), " BTU/hr"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        _jsxs("span", {
                                                            className: "text-gray-600",
                                                            children: ["Safety Factor (×", g.safetyFactor, "):"],
                                                        }),
                                                        _jsxs("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                "+",
                                                                Math.round(
                                                                    g.subtotalBTU * (g.safetyFactor - 1)
                                                                ).toLocaleString(),
                                                                " BTU/hr",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className:
                                                        "flex justify-between text-sm border-t pt-2 font-semibold",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-800",
                                                            children: "Total Heat Load:",
                                                        }),
                                                        _jsxs("span", {
                                                            className: "text-blue-700",
                                                            children: [g.totalBTU.toLocaleString(), " BTU/hr"],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "p-3 bg-gray-50 rounded-lg text-sm",
                                    children: _jsxs("div", {
                                        className: "grid sm:grid-cols-3 gap-2",
                                        children: [
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", {
                                                        className: "text-gray-500",
                                                        children: "Room Area:",
                                                    }),
                                                    " ",
                                                    _jsxs("strong", {
                                                        children: [g.areaInSqFt, " ft² (", g.areaInSqM, " m²)"],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", {
                                                        className: "text-gray-500",
                                                        children: "Cooling Capacity:",
                                                    }),
                                                    " ",
                                                    _jsx("strong", { children: "1 ton = 12,000 BTU/h" }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", {
                                                        className: "text-gray-500",
                                                        children: "Estimated CFM:",
                                                    }),
                                                    " ",
                                                    _jsxs("strong", { children: [g.actualCFM, " (at 400 CFM/ton)"] }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        g.warnings.length > 0 &&
                            _jsxs("div", {
                                className: "bg-red-50 rounded-xl shadow-md p-4 sm:p-6 border border-red-300",
                                children: [
                                    _jsxs("h2", {
                                        className: "text-lg font-semibold text-red-800 mb-3 flex items-center gap-2",
                                        children: [_jsx("span", { children: "⚠️" }), " Warnings"],
                                    }),
                                    _jsx("div", {
                                        className: "space-y-3",
                                        children: g.warnings.map((e, t) =>
                                            _jsxs(
                                                "div",
                                                {
                                                    className:
                                                        "p-3 bg-white rounded-lg border " +
                                                        ("error" === e.type ? "border-red-200" : "border-yellow-200"),
                                                    children: [
                                                        _jsx("h3", {
                                                            className:
                                                                "font-semibold mb-1 " +
                                                                ("error" === e.type
                                                                    ? "text-red-700"
                                                                    : "text-yellow-700"),
                                                            children: e.title,
                                                        }),
                                                        _jsx("p", {
                                                            className:
                                                                "text-sm " +
                                                                ("error" === e.type
                                                                    ? "text-red-600"
                                                                    : "text-yellow-600"),
                                                            children: e.text,
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
                            className: "bg-white rounded-xl shadow-md p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "ASHRAE/AVIXA Tips & Recommendations",
                                }),
                                _jsx("div", {
                                    className: "space-y-3",
                                    children: g.tips.map((e, t) =>
                                        _jsxs(
                                            "div",
                                            {
                                                className:
                                                    "p-3 rounded-lg border " +
                                                    ("success" === e.type
                                                        ? "bg-green-50 border-green-200"
                                                        : "warning" === e.type
                                                          ? "bg-yellow-50 border-yellow-200"
                                                          : "error" === e.type
                                                            ? "bg-red-50 border-red-200"
                                                            : "bg-blue-50 border-blue-200"),
                                                children: [
                                                    _jsxs("h3", {
                                                        className:
                                                            "font-semibold mb-1 " +
                                                            ("success" === e.type
                                                                ? "text-green-800"
                                                                : "warning" === e.type
                                                                  ? "text-yellow-800"
                                                                  : "error" === e.type
                                                                    ? "text-red-800"
                                                                    : "text-blue-800"),
                                                        children: [
                                                            "success" === e.type
                                                                ? "✅"
                                                                : "warning" === e.type
                                                                  ? "⚠️"
                                                                  : "error" === e.type
                                                                    ? "❌"
                                                                    : "ℹ️",
                                                            " ",
                                                            e.title,
                                                        ],
                                                    }),
                                                    _jsx("p", {
                                                        className:
                                                            "text-sm " +
                                                            ("success" === e.type
                                                                ? "text-green-700"
                                                                : "warning" === e.type
                                                                  ? "text-yellow-700"
                                                                  : "error" === e.type
                                                                    ? "text-red-700"
                                                                    : "text-blue-700"),
                                                        children: e.text,
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
                            className: "bg-white rounded-xl shadow-md p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "ASHRAE Temperature Guidelines",
                                }),
                                _jsx("div", {
                                    className: "overflow-x-auto",
                                    children: _jsxs("table", {
                                        className: "w-full text-sm",
                                        children: [
                                            _jsx("thead", {
                                                children: _jsxs("tr", {
                                                    className: "bg-gray-100",
                                                    children: [
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Class",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Inlet Temp (Recommended)",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Inlet Temp (Allowable)",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Humidity Range",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            _jsx("tbody", {
                                                children: [
                                                    {
                                                        class: "A1 (Recommended)",
                                                        recTemp: "64-75°F (18-24°C)",
                                                        allowTemp: "59-90°F (15-32°C)",
                                                        humidity: "40-60%",
                                                    },
                                                    {
                                                        class: "A2 (Standard)",
                                                        recTemp: "64-75°F (18-24°C)",
                                                        allowTemp: "50-95°F (10-35°C)",
                                                        humidity: "20-80%",
                                                    },
                                                    {
                                                        class: "A3 (Relaxed)",
                                                        recTemp: "64-75°F (18-24°C)",
                                                        allowTemp: "41-104°F (5-40°C)",
                                                        humidity: "8-85%",
                                                    },
                                                    {
                                                        class: "A4 (Extended)",
                                                        recTemp: "64-75°F (18-24°C)",
                                                        allowTemp: "41-113°F (5-45°C)",
                                                        humidity: "8-90%",
                                                    },
                                                ].map((e, t) =>
                                                    _jsxs(
                                                        "tr",
                                                        {
                                                            className: "border-b " + (0 === t ? "bg-blue-50" : ""),
                                                            children: [
                                                                _jsx("td", {
                                                                    className: "px-3 py-2 font-medium",
                                                                    children: e.class,
                                                                }),
                                                                _jsx("td", {
                                                                    className: "px-3 py-2",
                                                                    children: e.recTemp,
                                                                }),
                                                                _jsx("td", {
                                                                    className: "px-3 py-2",
                                                                    children: e.allowTemp,
                                                                }),
                                                                _jsx("td", {
                                                                    className: "px-3 py-2",
                                                                    children: e.humidity,
                                                                }),
                                                            ],
                                                        },
                                                        t
                                                    )
                                                ),
                                            }),
                                        ],
                                    }),
                                }),
                                _jsx("p", {
                                    className: "text-xs text-gray-500 mt-3",
                                    children:
                                        "Source: ASHRAE TC 9.9 - Thermal Guidelines for Data Processing Environments",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}

export default CoolingCalculator;
