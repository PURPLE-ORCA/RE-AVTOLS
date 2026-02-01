import { _jsx, _jsxs, ResetConfirmModal, calculateDvLEDPixelPitch } from '../utils.js';

const { useState, useEffect, useRef } = React;

function DvLEDCalculator() {
    const [e, t] = useState(10),
        [s, a] = useState("ft"),
        [r, l] = useState(null),
        [i, n] = useState(!1),
        o = [
            {
                maxPitch: 1.2,
                label: "Broadcast / Virtual Production",
                description: "Professional broadcast studios, virtual production stages, close-up camera work",
                examples: ["TV studios", "Film production", "XR stages", "News desks"],
                color: "purple",
                icon: "🎬",
            },
            {
                maxPitch: 1.5,
                label: "Control Rooms / Command Centers",
                description: "Mission-critical environments requiring extended viewing of detailed content",
                examples: ["Security operations", "Traffic management", "Network operations", "911 centers"],
                color: "indigo",
                icon: "🖥️",
            },
            {
                maxPitch: 2,
                label: "Corporate / Boardrooms",
                description: "Executive boardrooms, conference rooms, high-end corporate lobbies",
                examples: ["Boardrooms", "Executive briefing centers", "Premium lobbies", "Showrooms"],
                color: "blue",
                icon: "🏢",
            },
            {
                maxPitch: 2.5,
                label: "Conference / Meeting Rooms",
                description: "Standard meeting rooms, huddle spaces, presentation areas",
                examples: ["Conference rooms", "Training rooms", "Classrooms", "Huddle spaces"],
                color: "cyan",
                icon: "👥",
            },
            {
                maxPitch: 3,
                label: "Retail / Indoor Signage",
                description: "Retail displays, indoor advertising, museum exhibits",
                examples: ["Retail stores", "Shopping malls", "Museums", "Airports"],
                color: "green",
                icon: "🛍️",
            },
            {
                maxPitch: 4,
                label: "Large Venues / Houses of Worship",
                description: "Auditoriums, theaters, churches, large event spaces",
                examples: ["Churches", "Auditoriums", "Theaters", "Concert halls"],
                color: "yellow",
                icon: "⛪",
            },
            {
                maxPitch: 6,
                label: "Arenas / Stadiums (Indoor)",
                description: "Sports arenas, large concert venues, convention centers",
                examples: ["Indoor arenas", "Convention centers", "Large theaters", "Sports venues"],
                color: "orange",
                icon: "🏟️",
            },
            {
                maxPitch: 10,
                label: "Outdoor Displays",
                description: "Outdoor advertising, stadium displays, building facades",
                examples: ["Billboards", "Stadium scoreboards", "Building wraps", "Outdoor events"],
                color: "red",
                icon: "🌆",
            },
            {
                maxPitch: 1 / 0,
                label: "Large Format Outdoor",
                description: "Highway billboards, large building displays, distant viewing",
                examples: ["Highway signs", "Skyscraper displays", "Large outdoor venues"],
                color: "gray",
                icon: "🛣️",
            },
        ],
        d = r ? ((c = r.pixelPitchMm), o.find((e) => c <= e.maxPitch) || o[o.length - 1]) : null;
    var c;
    const m = r ? ((e) => o.filter((t) => e <= t.maxPitch))(r.pixelPitchMm) : [],
        x = (e) => {
            const t = {
                purple: {
                    bg: "bg-purple-50",
                    border: "border-purple-300",
                    text: "text-purple-700",
                    badge: "bg-purple-100 text-purple-800",
                },
                indigo: {
                    bg: "bg-indigo-50",
                    border: "border-indigo-300",
                    text: "text-indigo-700",
                    badge: "bg-indigo-100 text-indigo-800",
                },
                blue: {
                    bg: "bg-blue-50",
                    border: "border-blue-300",
                    text: "text-blue-700",
                    badge: "bg-blue-100 text-blue-800",
                },
                cyan: {
                    bg: "bg-cyan-50",
                    border: "border-cyan-300",
                    text: "text-cyan-700",
                    badge: "bg-cyan-100 text-cyan-800",
                },
                green: {
                    bg: "bg-green-50",
                    border: "border-green-300",
                    text: "text-green-700",
                    badge: "bg-green-100 text-green-800",
                },
                yellow: {
                    bg: "bg-yellow-50",
                    border: "border-yellow-300",
                    text: "text-yellow-700",
                    badge: "bg-yellow-100 text-yellow-800",
                },
                orange: {
                    bg: "bg-orange-50",
                    border: "border-orange-300",
                    text: "text-orange-700",
                    badge: "bg-orange-100 text-orange-800",
                },
                red: {
                    bg: "bg-red-50",
                    border: "border-red-300",
                    text: "text-red-700",
                    badge: "bg-red-100 text-red-800",
                },
                gray: {
                    bg: "bg-gray-50",
                    border: "border-gray-300",
                    text: "text-gray-700",
                    badge: "bg-gray-100 text-gray-800",
                },
            };
            return t[e] || t.gray;
        };
    return _jsxs("div", {
        className: "max-w-4xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "DvLED Pixel Pitch Calculator",
                    }),
                    r !== null &&
                        _jsx("button", {
                            onClick: () => n(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: i,
                onConfirm: () => {
                    t(10), a("ft"), l(null), n(!1);
                },
                onCancel: () => n(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Determines the optimal LED pixel pitch based on viewing distance, or calculates the minimum viewing distance for a given pixel pitch. Provides recommendations for different applications (broadcast, corporate, retail, venues).",
                    ],
                }),
            }),
            _jsxs("div", {
                className:
                    "bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-md p-6 mb-8 border border-purple-200",
                children: [
                    _jsxs("h2", {
                        className: "text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2",
                        children: [
                            _jsx("span", { className: "text-purple-600", children: "📊" }),
                            " Pixel Pitch Use Case Guide",
                        ],
                    }),
                    _jsx("p", {
                        className: "text-sm text-gray-600 mb-4",
                        children:
                            "Pixel pitch determines the minimum viewing distance and suitable applications. Smaller pitch = higher resolution = closer viewing.",
                    }),
                    _jsx("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                        children: [
                            { pitch: "≤1.2mm", use: "Broadcast", color: "purple" },
                            { pitch: "≤2.0mm", use: "Corporate", color: "blue" },
                            { pitch: "≤3.0mm", use: "Retail", color: "green" },
                            { pitch: "≤6.0mm", use: "Venues", color: "orange" },
                        ].map((e) =>
                            _jsxs(
                                "div",
                                {
                                    className: `${x(e.color).bg} p-3 rounded-lg border ${x(e.color).border}`,
                                    children: [
                                        _jsx("div", { className: `font-bold ${x(e.color).text}`, children: e.pitch }),
                                        _jsx("div", { className: "text-xs text-gray-600", children: e.use }),
                                    ],
                                },
                                e.pitch
                            )
                        ),
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl shadow-md p-8 mb-8 border",
                children: [
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Closest Viewer Distance",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        min: "0.1",
                                        value: e,
                                        onChange: (e) => t("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Unit",
                                    }),
                                    _jsxs("select", {
                                        value: s,
                                        onChange: (e) => a(e.target.value),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            _jsx("option", { value: "ft", children: "Feet" }),
                                            _jsx("option", { value: "m", children: "Meters" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => l(calculateDvLEDPixelPitch(e, s)),
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Pixel Pitch",
                    }),
                ],
            }),
            r &&
                d &&
                _jsxs("div", {
                    className: "bg-white rounded-xl shadow-md p-8 border",
                    children: [
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6 mb-6",
                            children: [
                                _jsxs("div", {
                                    className: "bg-blue-50 p-6 rounded-lg border-2 border-blue-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Recommended Pixel Pitch",
                                        }),
                                        _jsxs("div", {
                                            className: "text-4xl font-bold text-blue-700",
                                            children: [r.pixelPitchMm, " mm"],
                                        }),
                                        _jsx("div", {
                                            className: "text-sm text-gray-500 mt-1",
                                            children: "or finer for optimal clarity",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-green-50 p-6 rounded-lg border-2 border-green-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Comfortable Viewing Distance",
                                        }),
                                        _jsxs("div", {
                                            className: "text-3xl font-bold text-green-700",
                                            children: [
                                                "ft" === s ? r.comfortableViewingFt : r.comfortableViewingM,
                                                " ",
                                                s,
                                            ],
                                        }),
                                        _jsx("div", {
                                            className: "text-sm text-gray-500 mt-1",
                                            children: "viewers can be this close comfortably",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsx("div", {
                            className: `p-6 rounded-lg border-2 ${x(d.color).bg} ${x(d.color).border} mb-6`,
                            children: _jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    _jsx("div", { className: "text-4xl", children: d.icon }),
                                    _jsxs("div", {
                                        className: "flex-1",
                                        children: [
                                            _jsxs("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    _jsxs("span", {
                                                        className: `text-lg font-semibold ${x(d.color).text}`,
                                                        children: ["Primary Recommendation: ", d.label],
                                                    }),
                                                    _jsxs("span", {
                                                        className: `text-xs px-2 py-1 rounded-full ${x(d.color).badge}`,
                                                        children: [
                                                            "≤",
                                                            d.maxPitch === 1 / 0 ? "10+" : d.maxPitch,
                                                            "mm",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsx("p", {
                                                className: "text-sm text-gray-600 mb-3",
                                                children: d.description,
                                            }),
                                            _jsx("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: d.examples.map((e, t) =>
                                                    _jsx(
                                                        "span",
                                                        {
                                                            className:
                                                                "text-xs bg-white px-2 py-1 rounded border border-gray-200",
                                                            children: e,
                                                        },
                                                        t
                                                    )
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        _jsxs("div", {
                            className: "mb-6",
                            children: [
                                _jsxs("h3", {
                                    className: "font-semibold text-gray-700 mb-3",
                                    children: ["✓ All Suitable Applications for ", r.pixelPitchMm, "mm Pixel Pitch"],
                                }),
                                _jsx("div", {
                                    className: "grid md:grid-cols-2 gap-3",
                                    children: m.map((e, t) =>
                                        _jsxs(
                                            "div",
                                            {
                                                className:
                                                    "p-4 rounded-lg border " +
                                                    (e === d
                                                        ? `${x(e.color).bg} ${x(e.color).border} border-2`
                                                        : "bg-gray-50 border-gray-200"),
                                                children: [
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            _jsx("span", { className: "text-xl", children: e.icon }),
                                                            _jsx("span", {
                                                                className: `font-medium ${e === d ? x(e.color).text : "text-gray-700"}`,
                                                                children: e.label,
                                                            }),
                                                            e === d &&
                                                                _jsx("span", {
                                                                    className:
                                                                        "text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-auto",
                                                                    children: "Best Match",
                                                                }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xs text-gray-500 mt-1 ml-7",
                                                        children: [
                                                            "Typical pitch: ≤",
                                                            e.maxPitch === 1 / 0 ? "10+" : e.maxPitch,
                                                            "mm",
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
                            className: "p-4 bg-gray-50 rounded-lg mb-6",
                            children: [
                                _jsx("div", {
                                    className: "text-sm font-medium text-gray-700 mb-3",
                                    children: "Pixel Pitch Scale",
                                }),
                                _jsxs("div", {
                                    className:
                                        "relative h-6 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 via-yellow-400 to-red-400 rounded-full overflow-hidden",
                                    children: [
                                        _jsx("div", {
                                            className: "absolute inset-0 flex justify-between px-2 items-center",
                                            children: [1, 2, 3, 4, 6, 10].map((e) =>
                                                _jsx("div", { className: "w-px h-full bg-white/50" }, e)
                                            ),
                                        }),
                                        _jsx("div", {
                                            className: "absolute top-0 bottom-0 w-1 bg-gray-900 shadow-lg",
                                            style: {
                                                left: `${Math.min(100, Math.max(0, (r.pixelPitchMm / 12) * 100))}%`,
                                                transform: "translateX(-50%)",
                                            },
                                            children: _jsxs("div", {
                                                className:
                                                    "absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap",
                                                children: [r.pixelPitchMm, "mm"],
                                            }),
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "flex justify-between text-xs text-gray-500 mt-1 px-1",
                                    children: [
                                        _jsx("span", { children: "0.9mm" }),
                                        _jsx("span", { children: "1.5mm" }),
                                        _jsx("span", { children: "2.5mm" }),
                                        _jsx("span", { children: "4mm" }),
                                        _jsx("span", { children: "6mm" }),
                                        _jsx("span", { children: "10mm+" }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "flex justify-between text-xs text-gray-400 mt-1 px-1",
                                    children: [
                                        _jsx("span", { children: "Broadcast" }),
                                        _jsx("span", { children: "Corporate" }),
                                        _jsx("span", { children: "Retail" }),
                                        _jsx("span", { children: "Venues" }),
                                        _jsx("span", { children: "Arenas" }),
                                        _jsx("span", { children: "Outdoor" }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "p-4 bg-gray-50 rounded-lg overflow-hidden",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-gray-700 mb-3",
                                    children: "Viewing Distance Summary",
                                }),
                                _jsxs("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", {
                                                    className: "text-gray-500",
                                                    children: "Closest Viewer:",
                                                }),
                                                _jsxs("p", { className: "font-medium", children: [e, " ", s] }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", { className: "text-gray-500", children: "In Feet:" }),
                                                _jsxs("p", {
                                                    className: "font-medium",
                                                    children: [r.closestViewerFt, " ft"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", { className: "text-gray-500", children: "In Meters:" }),
                                                _jsxs("p", {
                                                    className: "font-medium",
                                                    children: [r.closestViewerM, " m"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", {
                                                    className: "text-gray-500",
                                                    children: "Comfortable Distance:",
                                                }),
                                                _jsxs("p", {
                                                    className: "font-medium",
                                                    children: [
                                                        r.comfortableViewingFt,
                                                        " ft / ",
                                                        r.comfortableViewingM,
                                                        " m",
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "mt-3 pt-3 border-t border-gray-200",
                                    children: [
                                        _jsxs("p", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                _jsx("strong", { children: "Formula:" }),
                                                " Pixel Pitch (mm) = Closest Viewing Distance (ft) ÷ 10",
                                            ],
                                        }),
                                        _jsxs("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: [
                                                _jsx("strong", { children: "Rule of thumb:" }),
                                                " Comfortable viewing distance is approximately 3× the closest viewing distance",
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

export default DvLEDCalculator;
