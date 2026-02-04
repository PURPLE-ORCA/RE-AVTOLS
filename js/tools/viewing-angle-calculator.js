// Viewing Angle Calculator Tool
// Dependencies: React, Core (global)

function calculateViewingAngleMath(e, t, s = "in") {
    const a = (2 * Math.atan(e / 2 / t) * 180) / Math.PI;
    return { angle: Math.round(100 * a) / 100, unit: s };
}

function ViewingAngleCalculator() {
    const [e, t] = useState(60),
        [s, a] = useState(120),
        [r, l] = useState("in"),
        [i, n] = useState(null),
        [o, d] = useState(!1),
        c = i
            ? (m = i.angle) >= 36
                ? {
                      status: "excellent",
                      label: "THX Reference / Immersive",
                      description:
                          "Meets THX ideal viewing angle (36°). Optimal for cinema, immersive content, and detailed analytical work.",
                      color: "green",
                      icon: "✓",
                      standard: "THX 36°",
                  }
                : m >= 30
                  ? {
                        status: "very-good",
                        label: "SMPTE Cinema Standard",
                        description:
                            "Meets SMPTE EG-18 minimum (30°). Excellent for presentations, detailed content, and professional viewing.",
                        color: "blue",
                        icon: "✓",
                        standard: "SMPTE 30°",
                    }
                  : m >= 26
                    ? {
                          status: "good",
                          label: "THX Minimum Acceptable",
                          description:
                              "Meets THX minimum acceptable (26°). Suitable for general presentations and video content.",
                          color: "teal",
                          icon: "✓",
                          standard: "THX 26°",
                      }
                    : m >= 20
                      ? {
                            status: "acceptable",
                            label: "Basic Viewing",
                            description:
                                "Acceptable for general video content and basic presentations. Consider larger display for detailed work.",
                            color: "yellow",
                            icon: "⚠",
                            standard: "Basic",
                        }
                      : {
                            status: "poor",
                            label: "Below Industry Standards",
                            description:
                                "Display appears too small for comfortable viewing. Increase display size or reduce viewing distance.",
                            color: "red",
                            icon: "✗",
                            standard: "Insufficient",
                        }
            : null;
    var m;
    return _jsxs("div", {
        className: "max-w-4xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Display Viewing Angle Calculator",
                    }),
                    i !== null &&
                        _jsx("button", {
                            onClick: () => d(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm dark:shadow-gray-950/10",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: o,
                onConfirm: () => {
                    t(60), a(120), l("in"), n(null), d(!1);
                },
                onCancel: () => d(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates the horizontal viewing angle (field of view) from viewer to display. Verifies compliance with current industry standards: THX Reference (36°), SMPTE EG-18 Cinema (30°), and THX Minimum (26°).",
                    ],
                }),
            }),
            _jsxs("div", {
                className:
                    "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md dark:shadow-gray-950/20 p-6 mb-8 border border-blue-200 dark:border-blue-800",
                children: [
                    _jsxs("h2", {
                        className: "text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2",
                        children: [
                            _jsx("span", { className: "text-blue-600", children: "📐" }),
                            " Industry Viewing Standards",
                        ],
                    }),
                    _jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                        children: "Current standards from SMPTE EG-18, THX, and AVIXA DISCAS V202.01:2016:",
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-4 gap-3",
                        children: [
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border border-green-200 dark:border-green-800",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            _jsx("span", { className: "w-3 h-3 rounded-full bg-green-50 dark:bg-green-900/200" }),
                                            _jsx("span", {
                                                className: "font-semibold text-green-700",
                                                children: "≥ 36°",
                                            }),
                                        ],
                                    }),
                                    _jsx("div", {
                                        className: "text-sm font-medium text-gray-800",
                                        children: "THX Reference",
                                    }),
                                    _jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Cinema, immersive" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border border-blue-200 dark:border-blue-800",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            _jsx("span", { className: "w-3 h-3 rounded-full bg-blue-50 dark:bg-blue-900/200" }),
                                            _jsx("span", {
                                                className: "font-semibold text-blue-700",
                                                children: "≥ 30°",
                                            }),
                                        ],
                                    }),
                                    _jsx("div", {
                                        className: "text-sm font-medium text-gray-800",
                                        children: "SMPTE Standard",
                                    }),
                                    _jsx("div", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: "Professional, detailed",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border border-teal-200",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            _jsx("span", { className: "w-3 h-3 rounded-full bg-teal-500" }),
                                            _jsx("span", {
                                                className: "font-semibold text-teal-700",
                                                children: "≥ 26°",
                                            }),
                                        ],
                                    }),
                                    _jsx("div", {
                                        className: "text-sm font-medium text-gray-800",
                                        children: "THX Minimum",
                                    }),
                                    _jsx("div", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: "General presentations",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            _jsx("span", { className: "w-3 h-3 rounded-full bg-yellow-50 dark:bg-yellow-900/200" }),
                                            _jsx("span", {
                                                className: "font-semibold text-yellow-700",
                                                children: "≥ 20°",
                                            }),
                                        ],
                                    }),
                                    _jsx("div", {
                                        className: "text-sm font-medium text-gray-800",
                                        children: "Basic Viewing",
                                    }),
                                    _jsx("div", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: "Video, digital signage",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Image Width (", r, ")"],
                                    }),
                                    _jsx("input", {
                                        type: "number",
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
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Viewing Distance (", r, ")"],
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        min: "0.1",
                                        value: s,
                                        onChange: (e) => a("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "md:col-span-2",
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Unit",
                                    }),
                                    _jsxs("select", {
                                        value: r,
                                        onChange: (e) => l(e.target.value),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            _jsx("option", { value: "in", children: "Inches" }),
                                            _jsx("option", { value: "ft", children: "Feet" }),
                                            _jsx("option", { value: "m", children: "Meters" }),
                                            _jsx("option", { value: "mm", children: "Millimeters" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => n(calculateViewingAngleMath(e, s, r)),
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Viewing Angle",
                    }),
                ],
            }),
            i &&
                c &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsxs("div", {
                            className: "bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center mb-6",
                            children: [
                                _jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Viewing Angle" }),
                                _jsxs("div", {
                                    className: "text-5xl font-bold text-blue-700",
                                    children: [i.angle, "°"],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className:
                                "p-6 rounded-lg border-2 " +
                                ("green" === c.color
                                    ? "bg-green-50 dark:bg-green-900/20 border-green-300"
                                    : "blue" === c.color
                                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300"
                                      : "teal" === c.color
                                        ? "bg-teal-50 border-teal-300"
                                        : "yellow" === c.color
                                          ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300"
                                          : "bg-red-50 dark:bg-red-900/20 border-red-300"),
                            children: [
                                _jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        _jsx("div", {
                                            className:
                                                "text-3xl " +
                                                ("green" === c.color
                                                    ? "text-green-600"
                                                    : "blue" === c.color
                                                      ? "text-blue-600"
                                                      : "teal" === c.color
                                                        ? "text-teal-600"
                                                        : "yellow" === c.color
                                                          ? "text-yellow-600"
                                                          : "text-red-600"),
                                            children: c.icon,
                                        }),
                                        _jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                                _jsx("div", {
                                                    className:
                                                        "text-lg font-semibold " +
                                                        ("green" === c.color
                                                            ? "text-green-800 dark:text-green-200"
                                                            : "blue" === c.color
                                                              ? "text-blue-800 dark:text-blue-200"
                                                              : "teal" === c.color
                                                                ? "text-teal-800"
                                                                : "yellow" === c.color
                                                                  ? "text-yellow-800 dark:text-yellow-200"
                                                                  : "text-red-800 dark:text-red-200"),
                                                    children: c.label,
                                                }),
                                                _jsx("p", {
                                                    className:
                                                        "text-sm mt-1 " +
                                                        ("green" === c.color
                                                            ? "text-green-700"
                                                            : "blue" === c.color
                                                              ? "text-blue-700"
                                                              : "teal" === c.color
                                                                ? "text-teal-700"
                                                                : "yellow" === c.color
                                                                  ? "text-yellow-700"
                                                                  : "text-red-700"),
                                                    children: c.description,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "mt-4 pt-4 border-t border-gray-200 dark:border-gray-700",
                                    children: [
                                        _jsx("div", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mb-2",
                                            children: "SMPTE / THX Viewing Angle Scale",
                                        }),
                                        _jsxs("div", {
                                            className: "relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                                            children: [
                                                _jsx("div", {
                                                    className: "absolute inset-y-0 left-0 bg-red-400",
                                                    style: { width: "40%" },
                                                }),
                                                _jsx("div", {
                                                    className: "absolute inset-y-0 left-[40%] bg-yellow-400",
                                                    style: { width: "12%" },
                                                }),
                                                _jsx("div", {
                                                    className: "absolute inset-y-0 left-[52%] bg-teal-400",
                                                    style: { width: "8%" },
                                                }),
                                                _jsx("div", {
                                                    className: "absolute inset-y-0 left-[60%] bg-blue-400",
                                                    style: { width: "12%" },
                                                }),
                                                _jsx("div", {
                                                    className: "absolute inset-y-0 left-[72%] bg-green-400",
                                                    style: { width: "28%" },
                                                }),
                                                _jsx("div", {
                                                    className: "absolute top-0 bottom-0 w-1 bg-gray-800 shadow-lg dark:shadow-gray-950/30",
                                                    style: {
                                                        left: `${Math.min(100, Math.max(0, (i.angle / 50) * 100))}%`,
                                                        transform: "translateX(-50%)",
                                                    },
                                                    children: _jsxs("div", {
                                                        className:
                                                            "absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap",
                                                        children: [i.angle, "°"],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "relative text-xs text-gray-500 dark:text-gray-400 mt-1 h-4",
                                            children: [
                                                _jsx("span", { className: "absolute left-0", children: "0°" }),
                                                _jsx("span", {
                                                    className: "absolute left-[40%] -translate-x-1/2",
                                                    children: "20°",
                                                }),
                                                _jsx("span", {
                                                    className: "absolute left-[52%] -translate-x-1/2",
                                                    children: "26°",
                                                }),
                                                _jsx("span", {
                                                    className: "absolute left-[60%] -translate-x-1/2",
                                                    children: "30°",
                                                }),
                                                _jsx("span", {
                                                    className: "absolute left-[72%] -translate-x-1/2",
                                                    children: "36°",
                                                }),
                                                _jsx("span", { className: "absolute right-0", children: "50°+" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        "poor" === c.status &&
                            _jsxs("div", {
                                className: "mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                                children: [
                                    _jsx("h3", {
                                        className: "font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                        children: "💡 Recommendations",
                                    }),
                                    _jsxs("ul", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 space-y-1",
                                        children: [
                                            _jsx("li", { children: "• Increase the display/image width" }),
                                            _jsx("li", { children: "• Decrease the viewing distance" }),
                                            _jsx("li", { children: "• Consider using multiple displays" }),
                                        ],
                                    }),
                                ],
                            }),
                        _jsxs("div", {
                            className: "mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                    children: "Calculation Summary",
                                }),
                                _jsxs("div", {
                                    className: "grid grid-cols-2 gap-4 text-sm",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "Image Width:" }),
                                                _jsxs("p", { className: "font-medium", children: [e, " ", r] }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", {
                                                    className: "text-gray-500 dark:text-gray-400",
                                                    children: "Viewing Distance:",
                                                }),
                                                _jsxs("p", { className: "font-medium", children: [s, " ", r] }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "mt-3 pt-3 border-t border-gray-200 dark:border-gray-700",
                                    children: [
                                        _jsx("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: "Formula: θ = 2 × arctan(Width ÷ 2 ÷ Distance)",
                                        }),
                                        _jsx("p", {
                                            className: "text-xs text-gray-400 mt-1",
                                            children: "Standards: SMPTE EG-18-1994 (30°), THX (36° ideal, 26° min)",
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
