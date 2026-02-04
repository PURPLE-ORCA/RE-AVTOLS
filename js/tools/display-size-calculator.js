// Display Size Calculator Tool
// Dependencies: React, Core (global)

function calculateDisplaySizeMath(e, t, s, a, r, l, i = "in") {
    let n;
    n = "BDM" === l ? e / ((t / 100) * 200) : (e * s) / 3438;
    const o = n * (a / r),
        d = Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2));
    let c = d;
    return (
        "ft" === i ? (c = 12 * d) : "m" === i && (c = 39.3701 * d),
        {
            imageHeight: Math.round(100 * n) / 100,
            imageWidth: Math.round(100 * o) / 100,
            diagonalSize: Math.round(100 * d) / 100,
            diagonalInches: Math.round(100 * c) / 100,
            method: l,
            unit: i,
            acuityFactor: "BDM" === l ? 200 : 3438,
        }
    );
}

function DisplaySizeCalculator() {
    const [e, t] = useState(20),
        [s, a] = useState(2.5),
        [r, l] = useState(1080),
        [i, n] = useState(16),
        [o, d] = useState(9),
        [c, m] = useState("BDM"),
        [x, u] = useState("ft"),
        [h, p] = useState(null),
        [g, b] = useState(!1);
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-4 sm:mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Display Size Calculator (AVIXA DISCAS)",
                    }),
                    h !== null &&
                        _jsx("button", {
                            onClick: () => b(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm dark:shadow-gray-950/10",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: g,
                onConfirm: () => {
                    t(20), a(2.5), l(1080), n(16), d(9), m("BDM"), u("ft"), p(null), b(!1);
                },
                onCancel: () => b(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates the minimum display size needed for your farthest viewer using AVIXA's DISCAS standard. Choose between BDM (Basic Decision Making) for general content or ADM (Analytical Decision Making) for detailed content like spreadsheets.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 mb-6 border",
                children: [
                    _jsx("h2", {
                        className: "text-base sm:text-lg font-semibold text-gray-800 mb-4",
                        children: "AVIXA DISCAS Standard Overview",
                    }),
                    _jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                        children:
                            "DISCAS (Display Image Size for 2D Content in Audiovisual Systems) is the AVIXA/ANSI standard for calculating optimal display sizes based on viewing distance and content type.",
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-4",
                        children: [
                            _jsxs("div", {
                                className:
                                    "p-4 rounded-lg border-2 cursor-pointer transition-all " +
                                    ("BDM" === c
                                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:border-gray-600"),
                                onClick: () => m("BDM"),
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            _jsx("span", { className: "text-2xl", children: "📊" }),
                                            _jsx("h3", {
                                                className: "font-semibold text-gray-800",
                                                children: "Basic Decision Making (BDM)",
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children:
                                            "For content where viewers need to understand overall information but not every fine detail.",
                                    }),
                                    _jsxs("div", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 space-y-1",
                                        children: [
                                            _jsx("p", { children: _jsx("strong", { children: "Use Cases:" }) }),
                                            _jsxs("ul", {
                                                className: "list-disc list-inside ml-2",
                                                children: [
                                                    _jsx("li", { children: "PowerPoint presentations" }),
                                                    _jsx("li", { children: "Word processing documents" }),
                                                    _jsx("li", { children: "Spreadsheets" }),
                                                    _jsx("li", { children: "Classrooms & training rooms" }),
                                                    _jsx("li", { children: "Boardrooms & conference rooms" }),
                                                    _jsx("li", { children: "Information displays" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "mt-3 pt-3 border-t border-gray-200 dark:border-gray-700",
                                        children: [
                                            _jsxs("p", {
                                                className: "text-xs font-mono text-gray-500 dark:text-gray-400",
                                                children: [
                                                    _jsx("strong", { children: "Formula:" }),
                                                    " Image Height = Farthest Viewer ÷ (200 × %Element Height)",
                                                ],
                                            }),
                                            _jsx("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                children: "Acuity Factor: 200",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className:
                                    "p-4 rounded-lg border-2 cursor-pointer transition-all " +
                                    ("ADM" === c
                                        ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:border-gray-600"),
                                onClick: () => m("ADM"),
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            _jsx("span", { className: "text-2xl", children: "🔬" }),
                                            _jsx("h3", {
                                                className: "font-semibold text-gray-800",
                                                children: "Analytical Decision Making (ADM)",
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children:
                                            "For specialist viewing where pixel-level detail is critical for decision making.",
                                    }),
                                    _jsxs("div", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 space-y-1",
                                        children: [
                                            _jsx("p", { children: _jsx("strong", { children: "Use Cases:" }) }),
                                            _jsxs("ul", {
                                                className: "list-disc list-inside ml-2",
                                                children: [
                                                    _jsx("li", { children: "Medical imagery (X-rays, MRI, CT)" }),
                                                    _jsx("li", { children: "Engineering & CAD drawings" }),
                                                    _jsx("li", { children: "Architectural plans" }),
                                                    _jsx("li", { children: "Electrical schematics" }),
                                                    _jsx("li", { children: "Forensic evidence review" }),
                                                    _jsx("li", { children: "Photographic evaluation" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "mt-3 pt-3 border-t border-gray-200 dark:border-gray-700",
                                        children: [
                                            _jsxs("p", {
                                                className: "text-xs font-mono text-gray-500 dark:text-gray-400",
                                                children: [
                                                    _jsx("strong", { children: "Formula:" }),
                                                    " Image Height = (Farthest Viewer × Vertical Pixels) ÷ 3438",
                                                ],
                                            }),
                                            _jsx("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                children: "Acuity Factor: 3438",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("div", {
                        className: "mt-4 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                        children: _jsxs("p", {
                            className: "text-xs text-gray-600 dark:text-gray-400",
                            children: [
                                _jsx("strong", { children: "Legacy 4/6/8 Rule:" }),
                                " Before DISCAS, designers divided farthest viewer distance by 6 (BDM) or 4 (ADM) to get image height. DISCAS provides more accurate calculations based on visual acuity standards and accounts for display resolution.",
                            ],
                        }),
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-8 mb-6 sm:mb-8 border",
                children: [
                    _jsx("h2", {
                        className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                        children:
                            "BDM" === c
                                ? "📊 Basic Decision Making Calculator"
                                : "🔬 Analytical Decision Making Calculator",
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-4 sm:gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Viewing Method",
                                    }),
                                    _jsxs("select", {
                                        value: c,
                                        onChange: (e) => m(e.target.value),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
                                        children: [
                                            _jsx("option", { value: "BDM", children: "BDM (Basic Decision Making)" }),
                                            _jsx("option", {
                                                value: "ADM",
                                                children: "ADM (Analytical Decision Making)",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Distance Unit",
                                    }),
                                    _jsxs("select", {
                                        value: x,
                                        onChange: (e) => u(e.target.value),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
                                        children: [
                                            _jsx("option", { value: "in", children: "Inches" }),
                                            _jsx("option", { value: "ft", children: "Feet" }),
                                            _jsx("option", { value: "m", children: "Meters" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Farthest Viewer Distance (", x, ")"],
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        value: e,
                                        onChange: (e) => t("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Horizontal distance from display to farthest viewer",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Aspect Ratio",
                                    }),
                                    _jsxs("div", {
                                        className: "flex flex-wrap gap-2 items-center",
                                        children: [
                                            _jsxs("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    _jsx("input", {
                                                        type: "number",
                                                        value: i,
                                                        onChange: (e) =>
                                                            n("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                        className:
                                                            "w-16 sm:w-20 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
                                                    }),
                                                    _jsx("span", { className: "text-gray-500 dark:text-gray-400", children: ":" }),
                                                    _jsx("input", {
                                                        type: "number",
                                                        value: o,
                                                        onChange: (e) =>
                                                            d("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                        className:
                                                            "w-16 sm:w-20 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    _jsx("button", {
                                                        onClick: () => {
                                                            n(16), d(9);
                                                        },
                                                        className:
                                                            "px-2 py-1 text-xs rounded " +
                                                            (16 === i && 9 === o
                                                                ? "bg-blue-600 text-white"
                                                                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-700"),
                                                        children: "16:9",
                                                    }),
                                                    _jsx("button", {
                                                        onClick: () => {
                                                            n(16), d(10);
                                                        },
                                                        className:
                                                            "px-2 py-1 text-xs rounded " +
                                                            (16 === i && 10 === o
                                                                ? "bg-blue-600 text-white"
                                                                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-700"),
                                                        children: "16:10",
                                                    }),
                                                    _jsx("button", {
                                                        onClick: () => {
                                                            n(4), d(3);
                                                        },
                                                        className:
                                                            "px-2 py-1 text-xs rounded " +
                                                            (4 === i && 3 === o
                                                                ? "bg-blue-600 text-white"
                                                                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-700"),
                                                        children: "4:3",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            "BDM" === c &&
                                _jsxs("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "% Element Height",
                                        }),
                                        _jsx("input", {
                                            type: "number",
                                            step: "0.1",
                                            value: s,
                                            onChange: (e) => a("" === e.target.value ? "" : parseFloat(e.target.value)),
                                            className:
                                                "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
                                        }),
                                        _jsx("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                            children:
                                                "Ratio of smallest critical element to screen height. Typical values: 1.5% (small text) to 3% (large text/graphics). A 20pt font on 1080p content is approximately 2.5%.",
                                        }),
                                        _jsxs("div", {
                                            className: "flex flex-wrap gap-2 mt-2",
                                            children: [
                                                _jsx("button", {
                                                    onClick: () => a(1.5),
                                                    className:
                                                        "px-3 py-1 text-xs rounded " +
                                                        (1.5 === s
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-700"),
                                                    children: "1.5% (Fine)",
                                                }),
                                                _jsx("button", {
                                                    onClick: () => a(2.5),
                                                    className:
                                                        "px-3 py-1 text-xs rounded " +
                                                        (2.5 === s
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-700"),
                                                    children: "2.5% (Standard)",
                                                }),
                                                _jsx("button", {
                                                    onClick: () => a(3.5),
                                                    className:
                                                        "px-3 py-1 text-xs rounded " +
                                                        (3.5 === s
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-700"),
                                                    children: "3.5% (Large)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            "ADM" === c &&
                                _jsxs("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Vertical Resolution (pixels)",
                                        }),
                                        _jsxs("select", {
                                            value: r,
                                            onChange: (e) => l("" === e.target.value ? "" : parseFloat(e.target.value)),
                                            className:
                                                "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
                                            children: [
                                                _jsx("option", { value: "720", children: "720p (HD)" }),
                                                _jsx("option", { value: "1080", children: "1080p (Full HD)" }),
                                                _jsx("option", { value: "1440", children: "1440p (QHD)" }),
                                                _jsx("option", { value: "2160", children: "2160p (4K UHD)" }),
                                                _jsx("option", { value: "4320", children: "4320p (8K UHD)" }),
                                            ],
                                        }),
                                        _jsx("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                            children:
                                                "Higher resolution allows viewers to sit closer while resolving pixel-level detail. ADM requires every pixel to be individually distinguishable.",
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => p(calculateDisplaySizeMath(e, s, r, i, o, c, x)),
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Display Size",
                    }),
                ],
            }),
            h &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsxs("h3", {
                            className: "text-lg font-semibold text-gray-800 mb-4",
                            children: ["BDM" === c ? "BDM" : "ADM", " Calculation Results"],
                        }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6 mb-6",
                            children: [
                                _jsxs("div", {
                                    className:
                                        "p-8 rounded-lg border-2 text-center " +
                                        ("BDM" === c ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800" : "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"),
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                            children: "Recommended Display Size",
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "text-6xl font-bold " +
                                                ("BDM" === c ? "text-blue-700" : "text-purple-700"),
                                            children: [h.diagonalInches, '"'],
                                        }),
                                        _jsx("div", { className: "text-gray-600 dark:text-gray-400 mt-2", children: "diagonal" }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                            children: "Display Dimensions",
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                                _jsxs("p", {
                                                    className: "text-lg",
                                                    children: [
                                                        _jsx("strong", { children: "Width:" }),
                                                        " ",
                                                        h.imageWidth,
                                                        " ",
                                                        h.unit,
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    className: "text-lg",
                                                    children: [
                                                        _jsx("strong", { children: "Height:" }),
                                                        " ",
                                                        h.imageHeight,
                                                        " ",
                                                        h.unit,
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                                    children: ["Aspect Ratio: ", i, ":", o],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg overflow-hidden",
                            children: [
                                _jsx("h4", {
                                    className: "font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                    children: "AVIXA Formula Breakdown",
                                }),
                                _jsx("div", {
                                    className: "text-sm text-gray-600 dark:text-gray-400 space-y-2 font-mono",
                                    children: _jsxs(
                                        _Fragment,
                                        "BDM" === c
                                            ? {
                                                  children: [
                                                      _jsx("p", {
                                                          children:
                                                              "Image Height = Farthest Viewer ÷ (Acuity Factor × %Element Height)",
                                                      }),
                                                      _jsxs("p", {
                                                          children: ["Image Height = ", e, " ÷ (200 × ", s / 100, ")"],
                                                      }),
                                                      _jsxs("p", {
                                                          children: [
                                                              "Image Height = ",
                                                              e,
                                                              " ÷ ",
                                                              ((s / 100) * 200).toFixed(2),
                                                              " = ",
                                                              _jsxs("strong", {
                                                                  children: [h.imageHeight, " ", h.unit],
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }
                                            : {
                                                  children: [
                                                      _jsx("p", {
                                                          children:
                                                              "Image Height = (Farthest Viewer × Vertical Pixels) ÷ Acuity Factor",
                                                      }),
                                                      _jsxs("p", {
                                                          children: ["Image Height = (", e, " × ", r, ") ÷ 3438"],
                                                      }),
                                                      _jsxs("p", {
                                                          children: [
                                                              "Image Height = ",
                                                              e * r,
                                                              " ÷ 3438 = ",
                                                              _jsxs("strong", {
                                                                  children: [h.imageHeight, " ", h.unit],
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }
                                    ),
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",
                            children: [
                                _jsx("h4", {
                                    className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2",
                                    children: "Common Display Sizes Reference",
                                }),
                                _jsxs("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-yellow-700",
                                    children: [
                                        _jsx("span", { children: '• 55" = 48"×27"' }),
                                        _jsx("span", { children: '• 65" = 57"×32"' }),
                                        _jsx("span", { children: '• 75" = 65"×37"' }),
                                        _jsx("span", { children: '• 86" = 75"×42"' }),
                                        _jsx("span", { children: '• 98" = 85"×48"' }),
                                        _jsx("span", { children: '• 100" = 87"×49"' }),
                                        _jsx("span", { children: '• 110" = 96"×54"' }),
                                        _jsx("span", { children: '• 120" = 105"×59"' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
