// Video Wall Controller Calculator Tool
// Dependencies: React, Core (global)

function calculateVideoWallController(e, t, s, a, r, l, i = 60, n = 8) {
    const o = Math.round(s / r),
        d = Math.round(a / r),
        c = o * d,
        m = 3 * n,
        x = Math.floor(936e6 / (i * m)),
        u = Math.min(x, l),
        h = Math.floor(u / c),
        p = Math.floor(e / c),
        g = h * t,
        b = (c * i * m) / 1e6,
        f = ((c * h) / u) * 100;
    return {
        cabinetResolution: c,
        widthPixels: o,
        heightPixels: d,
        cabinetsPerPort: h,
        maxCabinetsTotal: Math.min(p, g),
        maxByControllerCapacity: p,
        maxByPorts: g,
        refreshRate: i,
        bitDepth: n,
        bitsPerPixel: m,
        bandwidthPerCabinet: Math.round(100 * b) / 100,
        effectivePortCapacity: u,
        calculatedPortCapacity: x,
        portUtilization: Math.round(10 * f) / 10,
    };
}

function VideoWallCalculator() {
    const [e, t] = useState(8294400),
        [s, a] = useState(4),
        [r, l] = useState("8bit"),
        [i, n] = useState(60),
        [o, d] = useState(500),
        [c, m] = useState(500),
        [x, u] = useState(2.5),
        [h, p] = useState(null),
        [g, b] = useState(!1),
        f = [
            { label: "LG CVCA", capacity: 8294400, ports: 16, brand: "LG" },
            { label: "LG CVBA", capacity: 8294400, ports: 16, brand: "LG" },
            { label: "Novastar H2", capacity: 26e6, ports: 32, brand: "Novastar" },
            { label: "Novastar H5", capacity: 312e5, ports: 48, brand: "Novastar" },
            { label: "Novastar H9", capacity: 65e6, ports: 100, brand: "Novastar" },
            { label: "Novastar H15", capacity: 104e6, ports: 160, brand: "Novastar" },
            { label: "Novastar H20", capacity: 26e7, ports: 400, brand: "Novastar" },
            { label: "Samsung S-Box", capacity: 8294400, ports: 4, brand: "Samsung" },
            { label: "Christie E510", capacity: 8294400, ports: 8, brand: "Christie" },
            { label: "Christie E600", capacity: 8e7, ports: 16, brand: "Christie" },
        ];
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-4 sm:mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Video Wall Controller Calculator",
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
                    t(8294400), a(4), l("8bit"), n(60), d(500), m(500), u(2.5), p(null), b(!1);
                },
                onCancel: () => b(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates how many LED cabinets can be connected per output port based on controller capacity and cabinet resolution. Helps plan daisy-chain configurations and determine if your LED video wall fits within controller limits.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-5 mb-6 border border-blue-200 dark:border-blue-800",
                children: [
                    _jsx("h2", {
                        className: "text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2 sm:mb-3",
                        children: "LED Video Wall Data Distribution",
                    }),
                    _jsx("p", {
                        className: "text-xs sm:text-sm text-blue-700 mb-3",
                        children:
                            "LED video wall controllers distribute pixel data to cabinets via RJ45 Ethernet ports. Each port has a maximum pixel loading capacity. This calculator helps determine how many LED cabinets can be daisy-chained per output port.",
                    }),
                    _jsxs("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",
                        children: [
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-2 rounded border border-blue-200 dark:border-blue-800 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "Loading" }),
                                    _jsx("div", { className: "text-blue-600", children: "Pixels per port" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-2 rounded border border-blue-200 dark:border-blue-800 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "Cat5e/Cat6" }),
                                    _jsx("div", { className: "text-blue-600", children: "Max 100m runs" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-2 rounded border border-blue-200 dark:border-blue-800 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "Daisy Chain" }),
                                    _jsx("div", { className: "text-blue-600", children: "Cabinet to cabinet" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-2 rounded border border-blue-200 dark:border-blue-800 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "Redundancy" }),
                                    _jsx("div", { className: "text-blue-600", children: "Backup data paths" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 mb-6 border",
                children: [
                    _jsx("h2", {
                        className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                        children: "Controller & Cabinet Configuration",
                    }),
                    _jsxs("div", {
                        className: "mb-6",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",
                                children: "Quick Select Controller",
                            }),
                            _jsxs("div", {
                                className: "mb-3",
                                children: [
                                    _jsx("span", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 font-medium mr-2",
                                        children: "LG:",
                                    }),
                                    _jsx("div", {
                                        className: "inline-flex flex-wrap gap-2",
                                        children: f
                                            .filter((e) => "LG" === e.brand)
                                            .map((r) =>
                                                _jsx(
                                                    "button",
                                                    {
                                                        onClick: () => {
                                                            t(r.capacity), a(r.ports);
                                                        },
                                                        className:
                                                            "px-3 py-1.5 text-xs rounded border transition-colors cursor-pointer " +
                                                            (e === r.capacity && s === r.ports
                                                                ? "bg-red-600 text-white border-red-600"
                                                                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-red-50 dark:bg-red-900/20"),
                                                        children: r.label,
                                                    },
                                                    r.label
                                                )
                                            ),
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "mb-3",
                                children: [
                                    _jsx("span", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 font-medium mr-2",
                                        children: "Novastar:",
                                    }),
                                    _jsx("div", {
                                        className: "inline-flex flex-wrap gap-2",
                                        children: f
                                            .filter((e) => "Novastar" === e.brand)
                                            .map((r) =>
                                                _jsx(
                                                    "button",
                                                    {
                                                        onClick: () => {
                                                            t(r.capacity), a(r.ports);
                                                        },
                                                        className:
                                                            "px-3 py-1.5 text-xs rounded border transition-colors cursor-pointer " +
                                                            (e === r.capacity && s === r.ports
                                                                ? "bg-blue-600 text-white border-blue-600"
                                                                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:bg-blue-900/20"),
                                                        children: r.label,
                                                    },
                                                    r.label
                                                )
                                            ),
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "mb-3",
                                children: [
                                    _jsx("span", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 font-medium mr-2",
                                        children: "Samsung:",
                                    }),
                                    _jsx("div", {
                                        className: "inline-flex flex-wrap gap-2",
                                        children: f
                                            .filter((e) => "Samsung" === e.brand)
                                            .map((r) =>
                                                _jsx(
                                                    "button",
                                                    {
                                                        onClick: () => {
                                                            t(r.capacity), a(r.ports);
                                                        },
                                                        className:
                                                            "px-3 py-1.5 text-xs rounded border transition-colors cursor-pointer " +
                                                            (e === r.capacity && s === r.ports
                                                                ? "bg-blue-800 text-white border-blue-800"
                                                                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:bg-blue-900/20"),
                                                        children: r.label,
                                                    },
                                                    r.label
                                                )
                                            ),
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "mb-3",
                                children: [
                                    _jsx("span", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 font-medium mr-2",
                                        children: "Christie:",
                                    }),
                                    _jsx("div", {
                                        className: "inline-flex flex-wrap gap-2",
                                        children: f
                                            .filter((e) => "Christie" === e.brand)
                                            .map((r) =>
                                                _jsx(
                                                    "button",
                                                    {
                                                        onClick: () => {
                                                            t(r.capacity), a(r.ports);
                                                        },
                                                        className:
                                                            "px-3 py-1.5 text-xs rounded border transition-colors cursor-pointer " +
                                                            (e === r.capacity && s === r.ports
                                                                ? "bg-purple-600 text-white border-purple-600"
                                                                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-purple-50 dark:bg-purple-900/20"),
                                                        children: r.label,
                                                    },
                                                    r.label
                                                )
                                            ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-4 sm:gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Controller Max Capacity (pixels)",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        value: e,
                                        onChange: (e) => t("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children:
                                            "Total pixels the controller can handle (e.g., 1920×1200 = 2,304,000)",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "RJ45 Output Ports Available",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        value: s,
                                        onChange: (e) => a("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Number of Ethernet output ports on the controller",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Cabinet Width (mm)",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        value: o,
                                        onChange: (e) => d("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Physical width of each LED cabinet",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Cabinet Height (mm)",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        value: c,
                                        onChange: (e) => m("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Physical height of each LED cabinet",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Pixel Pitch (mm)",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        value: x,
                                        onChange: (e) => u("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Distance between pixel centers (common: 1.5, 2.5, 2.9, 3.9mm)",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Bit Depth",
                                    }),
                                    _jsxs("select", {
                                        value: r,
                                        onChange: (e) => l(e.target.value),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            _jsx("option", {
                                                value: "8bit",
                                                children: "8-bit (Standard - 650K px/port)",
                                            }),
                                            _jsx("option", { value: "10bit", children: "10-bit (HDR - 520K px/port)" }),
                                            _jsx("option", {
                                                value: "12bit",
                                                children: "12-bit (Cinema - 433K px/port)",
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "10-bit reduces port capacity but improves color",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Refresh Rate",
                                    }),
                                    _jsxs("select", {
                                        value: i,
                                        onChange: (e) => n(Number(e.target.value)),
                                        className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            _jsx("option", { value: 60, children: "60 Hz (Standard)" }),
                                            _jsx("option", { value: 75, children: "75 Hz" }),
                                            _jsx("option", { value: 90, children: "90 Hz" }),
                                            _jsx("option", { value: 120, children: "120 Hz (Broadcast/High-Speed)" }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children:
                                            "Higher refresh rates reduce pixel capacity but eliminate flicker on camera",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("button", {
                        type: "button",
                        onClick: () => {
                            let t, a;
                            "12bit" === r
                                ? ((t = 433333), (a = 12))
                                : "10bit" === r
                                  ? ((t = 52e4), (a = 10))
                                  : ((t = 65e4), (a = 8));
                            const l = calculateVideoWallController(e, s, o, c, x, t, i, a),
                                n = l.widthPixels * l.heightPixels,
                                d = l.maxCabinetsTotal,
                                m = 25e7 / i,
                                u = (Math.floor(m), []),
                                h = Math.floor(e / n),
                                g = l.cabinetsPerPort * s;
                            if (h < g) {
                                const t = (e / 1e6).toFixed(1),
                                    a = s - Math.ceil(h / l.cabinetsPerPort);
                                u.push({
                                    type: "warning",
                                    title: "Controller Capacity Limited",
                                    text: `This controller's total capacity (${t}MP) limits you to ${h} cabinets, even though the ${s} ports could theoretically support ${g} cabinets. ${a > 0 ? `Approximately ${a} port(s) will remain unused or partially used.` : ""} Consider a higher-capacity controller if you need more cabinets.`,
                                });
                            } else
                                u.push({
                                    type: "success",
                                    title: "Port-Limited Configuration",
                                    text: `This controller has sufficient pixel capacity. Your ${s} ports × ${l.cabinetsPerPort} cabinets/port = ${g} cabinets is the limiting factor. The controller can handle this load comfortably.`,
                                });
                            if (i > 60) {
                                const e = Math.round(100 * (1 - 60 / i));
                                u.push({
                                    type: "info",
                                    title: "High Refresh Rate Mode",
                                    text: `Running at ${i}Hz reduces pixel capacity by ~${e}% compared to 60Hz. This is ideal for broadcast/camera capture applications.`,
                                });
                            }
                            const b = ((l.cabinetsPerPort * n) / t) * 100;
                            b < 50
                                ? u.push({
                                      type: "info",
                                      title: "Low Port Utilization",
                                      text: `Each port is only ${b.toFixed(0)}% utilized. You could potentially use fewer ports or add more cabinets per chain.`,
                                  })
                                : b > 90
                                  ? u.push({
                                        type: "warning",
                                        title: "High Port Utilization",
                                        text: `Ports are ${b.toFixed(0)}% utilized. Consider leaving 10-20% headroom for signal integrity.`,
                                    })
                                  : u.push({
                                        type: "success",
                                        title: "Good Port Utilization",
                                        text: `Port utilization at ${b.toFixed(0)}% is within optimal range (50-90%).`,
                                    }),
                                u.push({
                                    type: "info",
                                    title: "Cable Length Guideline",
                                    text: "Per industry standards, Cat6 data cables to LED cabinets should not exceed 100m. For longer runs, use fiber converters.",
                                }),
                                s >= 4 &&
                                    u.push({
                                        type: "info",
                                        title: "Redundancy Option",
                                        text: `With ${s} ports available, consider configuring backup/redundant data paths for critical displays.`,
                                    }),
                                p({
                                    ...l,
                                    totalPixelsPerCabinet: n,
                                    maxCabinetsTotal: d,
                                    loadingEfficiency: b.toFixed(1),
                                    tips: u,
                                });
                        },
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Port Loading",
                    }),
                ],
            }),
            h &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "Calculation Results",
                                }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-4 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-2 border-blue-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-blue-600 font-medium",
                                                    children: "Cabinet Resolution",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xl font-bold text-blue-700",
                                                    children: [h.widthPixels, " × ", h.heightPixels],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-blue-600",
                                                    children: [h.totalPixelsPerCabinet.toLocaleString(), " px/cabinet"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-2 border-purple-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600 font-medium",
                                                    children: "Cabinets Per Port",
                                                }),
                                                _jsx("div", {
                                                    className: "text-2xl font-bold text-purple-700",
                                                    children: h.cabinetsPerPort,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600",
                                                    children: "max daisy-chain",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-orange-50 p-4 rounded-lg border-2 border-orange-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-orange-600 font-medium",
                                                    children: "Refresh Rate",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-2xl font-bold text-orange-700",
                                                    children: [i, " Hz"],
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-orange-600",
                                                    children: i > 60 ? "High refresh mode" : "Standard",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-green-600 font-medium",
                                                    children: "Total Cabinets",
                                                }),
                                                _jsx("div", {
                                                    className: "text-2xl font-bold text-green-700",
                                                    children: h.maxCabinetsTotal,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-green-600",
                                                    children: "controller max",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg mb-4",
                                    children: [
                                        _jsx("h3", {
                                            className: "font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Configuration Summary",
                                        }),
                                        _jsxs("div", {
                                            className: "grid sm:grid-cols-2 gap-2 text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Controller Capacity:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [e.toLocaleString(), " pixels"] }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Output Ports:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [s, " × RJ45"] }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Cabinet Size:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [o, "mm × ", c, "mm"] }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Pixel Pitch:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [x, "mm"] }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Max Total Cabinets:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", {
                                                            children: [h.maxCabinetsTotal, " cabinets"],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: ["With ", s, " ports:"],
                                                        }),
                                                        " ",
                                                        _jsxs("strong", {
                                                            children: [h.cabinetsPerPort * s, " cabinets possible"],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800",
                                    children: [
                                        _jsx("h3", {
                                            className: "font-semibold text-blue-800 dark:text-blue-200 mb-2",
                                            children: "💡 Wiring Configuration",
                                        }),
                                        _jsxs("p", {
                                            className: "text-sm text-blue-700",
                                            children: [
                                                "Each RJ45 port can drive up to ",
                                                _jsxs("strong", { children: [h.cabinetsPerPort, " cabinets"] }),
                                                " in a daisy-chain configuration. Connect Port 1 → Cabinet 1 → Cabinet 2 → ... → Cabinet ",
                                                h.cabinetsPerPort,
                                                ". Repeat for each port. Total wall capacity with this controller: ",
                                                _jsxs("strong", { children: [h.cabinetsPerPort * s, " cabinets"] }),
                                                ".",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        h.tips &&
                            h.tips.length > 0 &&
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 border",
                                children: [
                                    _jsx("h2", {
                                        className: "text-lg font-semibold text-gray-800 mb-4",
                                        children: "Tips & Recommendations",
                                    }),
                                    _jsx("div", {
                                        className: "space-y-3",
                                        children: h.tips.map((e, t) =>
                                            _jsxs(
                                                "div",
                                                {
                                                    className:
                                                        "p-3 rounded-lg border " +
                                                        ("success" === e.type
                                                            ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                                                            : "warning" === e.type
                                                              ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
                                                              : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"),
                                                    children: [
                                                        _jsxs("h3", {
                                                            className:
                                                                "font-semibold mb-1 " +
                                                                ("success" === e.type
                                                                    ? "text-green-800 dark:text-green-200"
                                                                    : "warning" === e.type
                                                                      ? "text-yellow-800 dark:text-yellow-200"
                                                                      : "text-blue-800 dark:text-blue-200"),
                                                            children: [
                                                                "success" === e.type
                                                                    ? "✅"
                                                                    : "warning" === e.type
                                                                      ? "⚠️"
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
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Common LED Cabinet Sizes Reference",
                                }),
                                _jsx("div", {
                                    className: "overflow-x-auto",
                                    children: _jsxs("table", {
                                        className: "w-full text-sm",
                                        children: [
                                            _jsx("thead", {
                                                children: _jsxs("tr", {
                                                    className: "bg-gray-100 dark:bg-gray-700",
                                                    children: [
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Cabinet Size",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Common Pitch",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Resolution",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Pixels",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            _jsx("tbody", {
                                                children: [
                                                    {
                                                        size: "500×500mm",
                                                        pitch: "2.5-2.9mm",
                                                        res: "200×200 or 172×172",
                                                        pixels: "40,000 or 29,584",
                                                    },
                                                    {
                                                        size: "500×1000mm",
                                                        pitch: "2.5-2.9mm",
                                                        res: "200×400 or 172×344",
                                                        pixels: "80,000 or 59,168",
                                                    },
                                                    {
                                                        size: "600×337.5mm",
                                                        pitch: "2.5mm",
                                                        res: "240×135",
                                                        pixels: "32,400",
                                                    },
                                                    {
                                                        size: "640×480mm",
                                                        pitch: "2.5-4mm",
                                                        res: "256×192 or 160×120",
                                                        pixels: "49,152 or 19,200",
                                                    },
                                                    {
                                                        size: "960×960mm",
                                                        pitch: "2.5-3mm",
                                                        res: "384×384 or 320×320",
                                                        pixels: "147,456 or 102,400",
                                                    },
                                                ].map((e, t) =>
                                                    _jsxs(
                                                        "tr",
                                                        {
                                                            className: "border-b",
                                                            children: [
                                                                _jsx("td", {
                                                                    className: "px-3 py-2 font-medium",
                                                                    children: e.size,
                                                                }),
                                                                _jsx("td", {
                                                                    className: "px-3 py-2",
                                                                    children: e.pitch,
                                                                }),
                                                                _jsx("td", { className: "px-3 py-2", children: e.res }),
                                                                _jsx("td", {
                                                                    className: "px-3 py-2",
                                                                    children: e.pixels,
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
                            ],
                        }),
                    ],
                }),
        ],
    });
}
