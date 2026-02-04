function BandwidthCalculator() {
    const e = [
            { value: 23.976, label: "23.976 fps", region: "ATSC Film (Americas)", standard: "ATSC" },
            { value: 24, label: "24 fps", region: "Cinema (Worldwide)", standard: "Film" },
            { value: 25, label: "25 fps", region: "DVB/DTMB (Europe/China)", standard: "DVB" },
            { value: 29.97, label: "29.97 fps", region: "ATSC/ISDB (Americas/Japan)", standard: "ATSC" },
            { value: 30, label: "30 fps", region: "Digital/Web (Worldwide)", standard: "Digital" },
            { value: 50, label: "50 fps", region: "DVB/DTMB HFR (Europe/China)", standard: "DVB" },
            { value: 59.94, label: "59.94 fps", region: "ATSC/ISDB HFR (Americas/Japan)", standard: "ATSC" },
            { value: 60, label: "60 fps", region: "DTMB 4K / Digital HFR", standard: "Digital" },
            { value: 100, label: "100 fps", region: "DVB Premium (Europe)", standard: "DVB" },
            { value: 119.88, label: "119.88 fps", region: "ISDB 8K (Japan)", standard: "ISDB" },
            { value: 120, label: "120 fps", region: "High Frame Rate", standard: "HFR" },
        ],
        t = [
            {
                value: "4:4:4",
                label: "4:4:4 (RGB/Full Color)",
                multiplier: 3,
                description: "No subsampling - full color resolution",
                reduction: "0%",
            },
            {
                value: "4:2:2",
                label: "4:2:2 (Professional)",
                multiplier: 2,
                description: "Professional video standard - 33% bandwidth reduction",
                reduction: "33%",
            },
            {
                value: "4:2:0",
                label: "4:2:0 (Consumer)",
                multiplier: 1.5,
                description: "Consumer video standard - 50% bandwidth reduction",
                reduction: "50%",
            },
        ],
        [s, a] = useState("1920x1080"),
        [r, l] = useState(7),
        [i, n] = useState(10),
        [o, d] = useState("4:2:2"),
        [c, m] = useState(1),
        [x, u] = useState(1),
        [h, p] = useState(8),
        [g, b] = useState(null),
        [f, y] = useState(!1),
        j = e[r],
        _ = t.find((e) => e.value === o);
    return _jsxs("div", {
        className: "max-w-7xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "AVoIP Bandwidth Calculator",
                    }),
                    g !== null &&
                        _jsx("button", {
                            onClick: () => y(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm dark:shadow-gray-950/10",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: f,
                onConfirm: () => {
                    a("1920x1080"), l(7), n(10), d("4:2:2"), m(1), u(1), p(8), b(null), y(!1);
                },
                onCancel: () => y(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates the network bandwidth required for uncompressed or compressed video streams over IP. Enter your video resolution, frame rate, color settings, and number of streams to determine the total bandwidth needed and recommended network infrastructure.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6 border border-blue-200 dark:border-blue-800",
                children: [
                    _jsx("h2", {
                        className: "text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2",
                        children: "AVIXA Standard Formula",
                    }),
                    _jsx("p", {
                        className: "text-sm text-blue-700 font-mono",
                        children: "Bandwidth (Mbps) = (Width × Height × Frame Rate × Bits per Pixel) ÷ 1,000,000",
                    }),
                    _jsx("p", {
                        className: "text-xs text-blue-600 mt-1",
                        children:
                            "Where: Bits per Pixel = Color Depth × Chroma Subsampling Multiplier (4:4:4=3, 4:2:2=2, 4:2:0=1.5)",
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Video Signal Configuration" }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Resolution",
                                    }),
                                    _jsxs("select", {
                                        value: s,
                                        onChange: (e) => a(e.target.value),
className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("option", { value: "1280x720", children: "720p HD (1280×720)" }),
                                            _jsx("option", {
                                                value: "1920x1080",
                                                children: "1080p Full HD (1920×1080)",
                                            }),
                                            _jsx("option", { value: "2560x1440", children: "1440p QHD (2560×1440)" }),
                                            _jsx("option", { value: "3840x2160", children: "4K UHD (3840×2160)" }),
                                            _jsx("option", { value: "4096x2160", children: "4K DCI (4096×2160)" }),
                                            _jsx("option", { value: "7680x4320", children: "8K UHD (7680×4320)" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: [
                                            "Frame Rate: ",
                                            _jsx("span", { className: "font-bold text-blue-700", children: j.label }),
                                        ],
                                    }),
                                    _jsx("input", {
                                        type: "range",
                                        min: "0",
                                        max: e.length - 1,
                                        step: "1",
                                        value: r,
                                        onChange: (e) => l(Number(e.target.value)),
                                        className:
                                            "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                    }),
                                    _jsxs("div", {
                                        className: "flex justify-between text-xs text-gray-400 mt-1 px-1",
                                        children: [
                                            _jsx("span", { children: "23.976" }),
                                            _jsx("span", { children: "30" }),
                                            _jsx("span", { children: "60" }),
                                            _jsx("span", { children: "120" }),
                                        ],
                                    }),
                                    _jsx("div", {
                                        className:
                                            "mt-3 p-3 rounded-lg border " +
                                            ((v = j.standard),
                                            "PAL" === v
                                                ? "text-green-600 bg-green-50 dark:bg-green-900/20"
                                                : "NTSC" === v
                                                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                                                  : "Film" === v
                                                    ? "text-amber-600 bg-amber-50 dark:bg-amber-900/20"
                                                    : "text-purple-600 bg-purple-50 dark:bg-purple-900/20"),
                                        children: _jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                _jsx("span", {
                                                    className: "text-xl",
                                                    children: ((e) =>
                                                        "PAL" === e
                                                            ? "🇪🇺"
                                                            : "NTSC" === e
                                                              ? "🇺🇸"
                                                              : "Film" === e
                                                                ? "🎬"
                                                                : "🌐")(j.standard),
                                                }),
                                                _jsxs("div", {
                                                    children: [
                                                        _jsx("p", {
                                                            className: "text-sm font-semibold",
                                                            children: j.standard,
                                                        }),
                                                        _jsx("p", {
                                                            className: "text-xs opacity-80",
                                                            children: j.region,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Color Bit Depth",
                                    }),
                                    _jsxs("select", {
                                        value: i,
                                        onChange: (e) => n(Number(e.target.value)),
className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("option", { value: "8", children: "8-bit (SDR, 16.7M colors)" }),
                                            _jsx("option", { value: "10", children: "10-bit (HDR, 1.07B colors)" }),
                                            _jsx("option", {
                                                value: "12",
                                                children: "12-bit (Professional, 68.7B colors)",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Chroma Subsampling",
                                    }),
                                    _jsx("select", {
                                        value: o,
                                        onChange: (e) => d(e.target.value),
className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        children: t.map((e) =>
                                            _jsxs(
                                                "option",
                                                {
                                                    value: e.value,
                                                    children: [e.label, " - ", e.reduction, " reduction"],
                                                },
                                                e.value
                                            )
                                        ),
                                    }),
                                    _jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-1", children: _.description }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Compression",
                                    }),
                                    _jsxs("select", {
                                        value: c,
                                        onChange: (e) => m(Number(e.target.value)),
className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("option", {
                                                value: "1",
                                                children: "Uncompressed (1:1) - SDI/SMPTE 2110",
                                            }),
                                            _jsx("option", { value: "2", children: "Mathematically Lossless (2:1)" }),
                                            _jsx("option", {
                                                value: "5",
                                                children: "Visually Lossless (5:1) - JPEG 2000/XS",
                                            }),
                                            _jsx("option", { value: "7", children: "ProRes 422 (7:1)" }),
                                            _jsx("option", { value: "15", children: "H.264 Low (15:1)" }),
                                            _jsx("option", { value: "30", children: "H.264 High / Blu-ray (30:1)" }),
                                            _jsx("option", { value: "50", children: "H.265/HEVC (50:1)" }),
                                            _jsx("option", { value: "100", children: "Streaming/Web (100:1)" }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children:
                                            "Compression ratio = original size ÷ compressed size. Higher ratios = smaller files but more quality loss.",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Network Overhead: ", h, "%"],
                                    }),
                                    _jsx("input", {
                                        type: "range",
                                        min: "0",
                                        max: "20",
                                        step: "1",
                                        value: h,
                                        onChange: (e) => p(Number(e.target.value)),
                                        className:
                                            "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "IP headers, encapsulation (typically 3-10%)",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "md:col-span-2",
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Number of Streams: ", x],
                                    }),
                                    _jsx("input", {
                                        type: "range",
                                        min: "1",
                                        max: "32",
                                        value: x,
                                        onChange: (e) => u(Number(e.target.value)),
                                        className:
                                            "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                    }),
                                    _jsxs("div", {
                                        className: "flex justify-between text-xs text-gray-400 mt-1",
                                        children: [
                                            _jsx("span", { children: "1" }),
                                            _jsx("span", { children: "8" }),
                                            _jsx("span", { children: "16" }),
                                            _jsx("span", { children: "24" }),
                                            _jsx("span", { children: "32" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className:
                            "mt-6 p-4 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 dark:from-blue-900/20 dark:via-green-900/20 dark:to-purple-900/20 rounded-lg border border-gray-200 dark:border-gray-700",
                        children: [
                            _jsx("h3", {
                                className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                children: "📺 Broadcast Standards Frame Rates",
                            }),
                            _jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-4 gap-3 text-xs",
                                children: [
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-3 rounded-lg border border-blue-200 dark:border-blue-800",
                                        children: [
                                            _jsx("p", {
                                                className: "font-semibold text-blue-600 mb-2",
                                                children: "🇺🇸 ATSC (Americas/Korea)",
                                            }),
                                            _jsxs("ul", {
                                                className: "text-gray-600 dark:text-gray-400 space-y-1",
                                                children: [
                                                    _jsx("li", { children: "• 23.976/24 fps - Film" }),
                                                    _jsx("li", { children: "• 29.97/30 fps - SD/HD" }),
                                                    _jsx("li", { children: "• 59.94/60 fps - Sports" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-3 rounded-lg border border-green-200 dark:border-green-800",
                                        children: [
                                            _jsx("p", {
                                                className: "font-semibold text-green-600 mb-2",
                                                children: "🇪🇺 DVB (Europe/Africa/ME)",
                                            }),
                                            _jsxs("ul", {
                                                className: "text-gray-600 dark:text-gray-400 space-y-1",
                                                children: [
                                                    _jsx("li", { children: "• 25 fps - SD/HD" }),
                                                    _jsx("li", { children: "• 50 fps - Sports/HFR" }),
                                                    _jsx("li", { children: "• 100 fps - Premium" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-3 rounded-lg border border-orange-200 dark:border-orange-800",
                                        children: [
                                            _jsx("p", {
                                                className: "font-semibold text-orange-600 mb-2",
                                                children: "🇯🇵 ISDB (Japan/S.America)",
                                            }),
                                            _jsxs("ul", {
                                                className: "text-gray-600 dark:text-gray-400 space-y-1",
                                                children: [
                                                    _jsx("li", { children: "• 29.97 fps - SD" }),
                                                    _jsx("li", { children: "• 59.94 fps - HD" }),
                                                    _jsx("li", { children: "• 119.88 fps - 8K" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-3 rounded-lg border border-purple-200 dark:border-purple-800",
                                        children: [
                                            _jsx("p", {
                                                className: "font-semibold text-purple-600 mb-2",
                                                children: "🇨🇳 DTMB (China/Cuba/Pak)",
                                            }),

                                            _jsxs("ul", {
                                                className: "text-gray-600 dark:text-gray-400 space-y-1",
                                                children: [
                                                    _jsx("li", { children: "• 25 fps - SD" }),
                                                    _jsx("li", { children: "• 50 fps - HD" }),
                                                    _jsx("li", { children: "• 60 fps - 4K UHD" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => {
                            const [e, t] = s.split("x").map(Number),
                                a = i * _.multiplier,
                                r = (e * t * j.value * a) / 1e6,
                                l = r / c,
                                n = l * (1 + h / 100),
                                o = n * x;
                            let d = "1Gb",
                                m = 1e3;
                            o >= 900 && ((d = "10Gb"), (m = 1e4)),
                                o >= 9e3 && ((d = "25Gb"), (m = 25e3)),
                                o >= 24e3 && ((d = "100Gb"), (m = 1e5));
                            const u = (o / m) * 100;
                            b({
                                rawBitrateMbps: Math.round(100 * r) / 100,
                                rawBitrateGbps: Math.round((r / 1e3) * 1e3) / 1e3,
                                compressedBitrate: Math.round(100 * l) / 100,
                                perStreamBitrate: Math.round(100 * n) / 100,
                                totalBitrate: Math.round(100 * o) / 100,
                                totalBitrateGbps: Math.round((o / 1e3) * 1e3) / 1e3,
                                switchType: d,
                                portSpeed: m,
                                utilization: Math.round(100 * u) / 100,
                                bitsPerPixel: Math.round(10 * a) / 10,
                                totalPixels: e * t,
                                pixelsPerSecond: e * t * j.value,
                            });
                        },
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Bandwidth",
                    }),
                ],
            }),
            g &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Bandwidth Results" }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-4 gap-4 mb-6",
                            children: [
                                _jsxs("div", {
                                    className: "bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-800",
                                    children: [
                                        _jsx("div", {
                                            className: "text-xs text-gray-600 dark:text-gray-400",
                                            children: "Raw Uncompressed",
                                        }),
                                        _jsx("div", {
                                            className: "text-2xl font-bold text-blue-700",
                                            children:
                                                g.rawBitrateGbps >= 1
                                                    ? `${g.rawBitrateGbps} Gbps`
                                                    : `${g.rawBitrateMbps} Mbps`,
                                        }),
                                        _jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "per stream" }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-2 border-green-200 dark:border-green-800",
                                    children: [
                                        _jsx("div", {
                                            className: "text-xs text-gray-600 dark:text-gray-400",
                                            children: "Per Stream (w/ overhead)",
                                        }),
                                        _jsxs("div", {
                                            className: "text-2xl font-bold text-green-700",
                                            children: [g.perStreamBitrate, " Mbps"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: c > 1 ? `${c}:1 compression` : "uncompressed",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800",
                                    children: [
                                        _jsxs("div", {
                                            className: "text-xs text-gray-600 dark:text-gray-400",
                                            children: ["Total (", x, " stream", x > 1 ? "s" : "", ")"],
                                        }),
                                        _jsx("div", {
                                            className: "text-2xl font-bold text-purple-700",
                                            children:
                                                g.totalBitrateGbps >= 1
                                                    ? `${g.totalBitrateGbps} Gbps`
                                                    : `${g.totalBitrate} Mbps`,
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-2 border-yellow-200 dark:border-yellow-800",
                                    children: [
                                        _jsx("div", {
                                            className: "text-xs text-gray-600 dark:text-gray-400",
                                            children: "Recommended Port",
                                        }),
                                        _jsx("div", {
                                            className: "text-2xl font-bold text-yellow-700",
                                            children: g.switchType,
                                        }),
                                        _jsxs("div", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: [g.utilization, "% utilization"],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg mb-6",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                    children: "AVIXA Calculation Breakdown",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-4 text-sm",
                                    children: [
                                        _jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Resolution:",
                                                        }),
                                                        " ",
                                                        _jsx("strong", { children: s }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Total Pixels:",
                                                        }),
                                                        " ",
                                                        _jsx("strong", { children: g.totalPixels.toLocaleString() }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Frame Rate:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [j.value, " fps"] }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Pixels/Second:",
                                                        }),
                                                        " ",
                                                        _jsx("strong", {
                                                            children: g.pixelsPerSecond.toLocaleString(),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Color Depth:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [i, "-bit"] }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Chroma Subsampling:",
                                                        }),
                                                        " ",
                                                        _jsx("strong", { children: o }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Bits per Pixel:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [g.bitsPerPixel, " bpp"] }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500 dark:text-gray-400",
                                                            children: "Network Overhead:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [h, "%"] }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "mt-4 pt-4 border-t border-gray-200 dark:border-gray-700",
                                    children: [
                                        _jsxs("p", {
                                            className: "text-xs text-gray-600 dark:text-gray-400 font-mono",
                                            children: [
                                                "Raw: ",
                                                s.split("x")[0],
                                                " × ",
                                                s.split("x")[1],
                                                " × ",
                                                j.value,
                                                " fps × ",
                                                g.bitsPerPixel,
                                                " bpp = ",
                                                _jsxs("strong", { children: [g.rawBitrateMbps, " Mbps"] }),
                                            ],
                                        }),
                                        c > 1 &&
                                            _jsxs("p", {
                                                className: "text-xs text-gray-600 dark:text-gray-400 font-mono mt-1",
                                                children: [
                                                    "Compressed: ",
                                                    g.rawBitrateMbps,
                                                    " ÷ ",
                                                    c,
                                                    " = ",
                                                    _jsxs("strong", { children: [g.compressedBitrate, " Mbps"] }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2",
                                    children: "Chroma Subsampling Reference (AVIXA)",
                                }),
                                _jsx("div", {
                                    className: "overflow-x-auto",
                                    children: _jsxs("table", {
                                        className: "w-full text-xs",
                                        children: [
                                            _jsx("thead", {
                                                children: _jsxs("tr", {
                                                    className: "border-b border-yellow-300",
                                                    children: [
                                                        _jsx("th", {
                                                            className: "text-left py-2 px-2",
                                                            children: "Format",
                                                        }),
                                                        _jsx("th", {
                                                            className: "text-left py-2 px-2",
                                                            children: "Multiplier",
                                                        }),
                                                        _jsx("th", {
                                                            className: "text-left py-2 px-2",
                                                            children: "8-bit",
                                                        }),
                                                        _jsx("th", {
                                                            className: "text-left py-2 px-2",
                                                            children: "10-bit",
                                                        }),
                                                        _jsx("th", {
                                                            className: "text-left py-2 px-2",
                                                            children: "12-bit",
                                                        }),
                                                        _jsx("th", {
                                                            className: "text-left py-2 px-2",
                                                            children: "Use Case",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            _jsxs("tbody", {
                                                className: "text-yellow-900",
                                                children: [
                                                    _jsxs("tr", {
                                                        className: "border-b " + ("4:4:4" === o ? "bg-yellow-100" : ""),
                                                        children: [
                                                            _jsx("td", {
                                                                className: "py-2 px-2 font-medium",
                                                                children: "4:4:4",
                                                            }),
                                                            _jsx("td", { className: "py-2 px-2", children: "×3" }),
                                                            _jsx("td", { className: "py-2 px-2", children: "24 bpp" }),
                                                            _jsx("td", { className: "py-2 px-2", children: "30 bpp" }),
                                                            _jsx("td", { className: "py-2 px-2", children: "36 bpp" }),
                                                            _jsx("td", {
                                                                className: "py-2 px-2",
                                                                children: "Graphics, Medical, Color-critical",
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("tr", {
                                                        className: "border-b " + ("4:2:2" === o ? "bg-yellow-100" : ""),
                                                        children: [
                                                            _jsx("td", {
                                                                className: "py-2 px-2 font-medium",
                                                                children: "4:2:2",
                                                            }),
                                                            _jsx("td", { className: "py-2 px-2", children: "×2" }),
                                                            _jsx("td", { className: "py-2 px-2", children: "16 bpp" }),
                                                            _jsx("td", { className: "py-2 px-2", children: "20 bpp" }),
                                                            _jsx("td", { className: "py-2 px-2", children: "24 bpp" }),
                                                            _jsx("td", {
                                                                className: "py-2 px-2",
                                                                children: "Professional video, Broadcast",
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("tr", {
                                                        className: "4:2:0" === o ? "bg-yellow-100" : "",
                                                        children: [
                                                            _jsx("td", {
                                                                className: "py-2 px-2 font-medium",
                                                                children: "4:2:0",
                                                            }),
                                                            _jsx("td", { className: "py-2 px-2", children: "×1.5" }),
                                                            _jsx("td", { className: "py-2 px-2", children: "12 bpp" }),
                                                            _jsx("td", { className: "py-2 px-2", children: "15 bpp" }),
                                                            _jsx("td", { className: "py-2 px-2", children: "18 bpp" }),
                                                            _jsx("td", {
                                                                className: "py-2 px-2",
                                                                children: "Consumer video, Streaming",
                                                            }),
                                                        ],
                                                    }),
                                                ],
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
    var v;
}
function ProjectorCalculator() {
    const [e, t] = useState(10),
        [s, a] = useState(1.5),
        [r, l] = useState("ft"),
        [i, n] = useState(300),
        [o, d] = useState(5.625),
        [c, m] = useState("16:9"),
        [x, u] = useState(1),
        [h, p] = useState(null),
        [g, b] = useState(!1),
        f = [
            { label: "16:9", w: 16, h: 9, decimal: 16 / 9 },
            { label: "16:10", w: 16, h: 10, decimal: 1.6 },
            { label: "4:3", w: 4, h: 3, decimal: 4 / 3 },
            { label: "21:9", w: 21, h: 9, decimal: 21 / 9 },
            { label: "2.35:1", w: 2.35, h: 1, decimal: 2.35 },
        ],
        y = (e, t) => {
            if ("custom" === t) return o;
            const [s, a] = t.split(":").map(Number);
            return Math.round(((e * a) / s) * 1e3) / 1e3;
        },
        j = (e, t) => {
            if (!e || !t || e <= 0 || t <= 0) return "custom";
            const s = e / t;
            for (const e of f) if (Math.abs(e.decimal - s) / e.decimal < 0.02) return e.label;
            return "custom";
        };
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Projector Brightness & Throw Calculator",
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
                    t(10), a(1.5), l("ft"), n(300), d(5.625), m("16:9"), u(1), p(null), b(!1);
                },
                onCancel: () => b(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates the required projector brightness (lumens) and throw distance based on your screen size, ambient lighting conditions, and screen gain. Helps you select the right projector and determine optimal mounting distance.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsxs("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                        children: [_jsx("span", { className: "text-blue-600", children: "📐" }), " Screen Size"],
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Unit",
                                    }),
                                    _jsxs("select", {
                                        value: r,
                                        onChange: (e) => l(e.target.value),
className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("option", { value: "ft", children: "Feet" }),
                                            _jsx("option", { value: "in", children: "Inches" }),
                                            _jsx("option", { value: "m", children: "Meters" }),
                                            _jsx("option", { value: "mm", children: "Millimeters" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Aspect Ratio",
                                    }),
                                    _jsxs("select", {
                                        value: c,
                                        onChange: (t) => {
                                            return (s = t.target.value), m(s), void ("custom" !== s && d(y(e, s)));
                                            var s;
                                        },
className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("option", { value: "16:9", children: "16:9 (Widescreen)" }),
                                            _jsx("option", { value: "16:10", children: "16:10 (WXGA)" }),
                                            _jsx("option", { value: "4:3", children: "4:3 (Standard)" }),
                                            _jsx("option", { value: "21:9", children: "21:9 (Ultrawide)" }),
                                            _jsx("option", { value: "2.35:1", children: "2.35:1 (Cinemascope)" }),
                                            _jsx("option", { value: "custom", children: "Custom" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Screen Width (", r, ")"],
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        min: "0.1",
                                        value: e,
                                        onChange: (e) =>
                                            ((e) => {
                                                if ((t(e), "custom" !== c)) d(y(e, c));
                                                else {
                                                    const t = j(e, o);
                                                    "custom" !== t && m(t);
                                                }
                                            })("" === e.target.value ? "" : parseFloat(e.target.value)),
className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Screen Height (", r, ")"],
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        min: "0.1",
                                        value: o,
                                        onChange: (t) =>
                                            ((t) => {
                                                d(t);
                                                const s = j(e, t);
                                                m(s);
                                            })("" === t.target.value ? "" : parseFloat(t.target.value)),
                                        className:
"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
                                            ("custom" === c ? "dark:bg-gray-700 dark:text-white dark:border-gray-600" : "bg-gray-50 dark:bg-gray-900/50 dark:text-gray-400 dark:border-gray-700"),
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children:
                                            "custom" === c
                                                ? "Enter custom height - aspect ratio will auto-detect"
                                                : "Auto-calculated from aspect ratio (edit to customize)",
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
                    _jsxs("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                        children: [_jsx("span", { className: "text-green-600", children: "📏" }), " Throw Distance"],
                    }),
                    _jsx("div", {
                        className: "grid md:grid-cols-1 gap-6",
                        children: _jsxs("div", {
                            children: [
                                _jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                    children: "Throw Ratio",
                                }),
                                _jsx("input", {
                                    type: "number",
                                    step: "0.1",
                                    min: "0.1",
                                    value: s,
                                    onChange: (e) => a("" === e.target.value ? "" : parseFloat(e.target.value)),
                                    className:
                                        "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                }),
                                _jsx("p", {
                                    className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                    children: "From projector specifications (e.g., 1.5 means 1.5× screen width)",
                                }),
                            ],
                        }),
                    }),
                    _jsxs("div", {
                        className: "mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                        children: [
                            _jsx("div", {
                                className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Common Throw Ratios:",
                            }),
                            _jsxs("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-3 text-sm",
                                children: [
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-2 rounded border",
                                        children: [
                                            _jsx("div", {
                                                className: "font-semibold text-purple-600",
                                                children: "0.3 - 0.5",
                                            }),
                                            _jsx("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "Ultra Short Throw",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-2 rounded border",
                                        children: [
                                            _jsx("div", {
                                                className: "font-semibold text-blue-600",
                                                children: "0.5 - 1.0",
                                            }),
                                            _jsx("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "Short Throw",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-2 rounded border",
                                        children: [
                                            _jsx("div", {
                                                className: "font-semibold text-green-600",
                                                children: "1.0 - 2.0",
                                            }),
                                            _jsx("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "Standard Throw",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white dark:bg-gray-800 p-2 rounded border",
                                        children: [
                                            _jsx("div", {
                                                className: "font-semibold text-orange-600",
                                                children: "2.0+",
                                            }),
                                            _jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Long Throw" }),
                                        ],
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
                    _jsxs("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2",
                        children: [
                            _jsx("span", { className: "text-yellow-600", children: "💡" }),
                            " Projector Brightness",
                        ],
                    }),
                    _jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400 mb-6",
                        children:
                            "Calculate the required projector brightness (lumens) based on ambient light conditions and screen size.",
                    }),
                    _jsxs("div", {
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Ambient Light (lux)",
                            }),
                            _jsx("input", {
                                type: "number",
                                min: "0",
                                value: i,
                                onChange: (e) => n("" === e.target.value ? "" : parseFloat(e.target.value)),
                                className:
                                    "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-4",
                        children: [
                            _jsx("label", {
                                className: "block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2",
                                children: "Quick Presets:",
                            }),
                            _jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    { label: "Theater Dark", lux: 20, desc: "Dedicated theater" },
                                    { label: "Dim", lux: 150, desc: "Controlled lighting" },
                                    { label: "Office", lux: 300, desc: "Standard office" },
                                    { label: "Bright", lux: 500, desc: "Well-lit room" },
                                    { label: "Very Bright", lux: 750, desc: "Near windows" },
                                ].map((e) =>
                                    _jsxs(
                                        "button",
                                        {
                                            type: "button",
                                            onClick: () => n(e.lux),
                                            className:
                                                "px-3 py-2 text-xs rounded-lg border transition-colors " +
                                                (i === e.lux
                                                    ? "bg-blue-600 text-white border-blue-600"
                                                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:text-blue-600"),
                                            children: [
                                                _jsx("div", { className: "font-semibold", children: e.label }),
                                                _jsxs("div", {
                                                    className: "text-xs opacity-75",
                                                    children: [e.lux, " lux"],
                                                }),
                                            ],
                                        },
                                        e.label
                                    )
                                ),
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-6",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Screen Gain",
                            }),
                            _jsx("input", {
                                type: "number",
                                min: "0.5",
                                max: "2.5",
                                step: "0.1",
                                value: x,
                                onChange: (e) => u("" === e.target.value ? 1 : parseFloat(e.target.value) || 1),
                                className:
                                    "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            }),
                            _jsxs("div", {
                                className: "flex flex-wrap gap-2 mt-2",
                                children: [
                                    { label: "Matte (1.0)", gain: 1 },
                                    { label: "Standard (1.3)", gain: 1.3 },
                                    { label: "High Gain (1.8)", gain: 1.8 },
                                    { label: "ALR (0.8)", gain: 0.8 },
                                ].map((e) =>
                                    _jsx(
                                        "button",
                                        {
                                            type: "button",
                                            onClick: () => u(e.gain),
                                            className:
                                                "px-3 py-1 text-xs rounded-lg border transition-colors cursor-pointer " +
                                                (x === e.gain
                                                    ? "bg-blue-600 text-white border-blue-600"
                                                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-blue-400"),
                                            children: e.label,
                                        },
                                        e.label
                                    )
                                ),
                            }),
                            _jsx("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                children:
                                    "Screen gain affects brightness efficiency. Higher gain = brighter but narrower viewing angle. ALR screens reject ambient light.",
                            }),
                        ],
                    }),
                    _jsx("div", {
                        className: "mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800",
                        children: _jsxs("p", {
                            className: "text-xs text-blue-700",
                            children: [
                                _jsx("strong", { children: "AVIXA Formula:" }),
                                " Lumens = (Target ft-L × Screen Area ft² × π) ÷ Screen Gain",
                            ],
                        }),
                    }),
                ],
            }),
            _jsx("button", {
                onClick: () => {
                    const t = e * s;
                    let a = e,
                        l = o;
                    "in" === r
                        ? ((a = e / 12), (l = o / 12))
                        : "mm" === r
                          ? ((a = e / 304.8), (l = o / 304.8))
                          : "m" === r && ((a = 3.28084 * e), (l = 3.28084 * o));
                    const n = a * l,
                        d = n / 10.764;
                    let c;
                    c = i <= 20 ? 14 : i <= 50 ? 20 : i <= 150 ? 35 : i <= 300 ? 50 : i <= 500 ? 60 : 80;
                    const m = (c * n * Math.PI) / x,
                        u = Math.max(2e3, 35 * n),
                        h = Math.max(m, u),
                        g = (h * x) / (n * Math.PI),
                        b = 3.426 * g;
                    let f = "",
                        y = "";
                    i <= 20
                        ? ((f = "Dedicated Theater"), (y = "Full light control, cinema experience"))
                        : i <= 50
                          ? ((f = "Dark Room"), (y = "Home theater, dedicated AV rooms"))
                          : i <= 150
                            ? ((f = "Dim Room"), (y = "Conference rooms with controlled lighting"))
                            : i <= 300
                              ? ((f = "Moderate Light"), (y = "Standard office, meeting rooms"))
                              : i <= 500
                                ? ((f = "Bright Room"), (y = "Well-lit offices, classrooms"))
                                : ((f = "Very Bright"), (y = "High ambient light, ALR screen recommended"));
                    let j = "";
                    j = s < 0.5 ? "Ultra Short Throw" : s < 1 ? "Short Throw" : s < 2 ? "Standard Throw" : "Long Throw";
                    let _ = null;
                    if (h > 1e4) {
                        let e, t, s, r, i;
                        if (h <= 2e4)
                            (e = "Large Venue Laser"),
                                (t = 1),
                                (s = h),
                                (r = "Single large venue projector recommended"),
                                (i = null);
                        else if (h <= 4e4)
                            (e = "High-End Laser"),
                                (t = 1),
                                (s = h),
                                (r = "Single high-end projector. Consider 2× stacked for redundancy."),
                                (i = "Edge blending optional for brightness stacking");
                        else {
                            const n = 2e4,
                                o = 0.12,
                                d = n * (1 - o);
                            if (((t = Math.ceil(h / d)), t <= 2 && h <= 75e3))
                                (e = "Ultra High Output (Barco/Christie)"),
                                    (t = 1),
                                    (s = h),
                                    (r = "Single ultra-high-output projector (Barco UDX or Christie equivalent)"),
                                    (i = null);
                            else if (t <= 3)
                                (s = Math.ceil(h / t / (1 - o))),
                                    (e = s > 3e4 ? "Large Venue Laser" : "Professional Laser"),
                                    (r = `${t}× projector edge-blended configuration`),
                                    (i = `Edge blending with ${Math.round(100 * o)}% overlap. Each projector: ${s.toLocaleString()} lumens.`);
                            else {
                                (t = Math.ceil(h / d)), (s = n), (e = "Large Venue Laser Array");
                                const o = a / l;
                                let c, m;
                                o >= 2
                                    ? ((c = Math.ceil(Math.sqrt(t * o))), (m = Math.ceil(t / c)))
                                    : ((c = Math.ceil(Math.sqrt(t))), (m = Math.ceil(t / c))),
                                    (t = c * m),
                                    (r = `${t}× projector array (${c}×${m} grid)`),
                                    (i = `Professional edge-blending system required. Each zone: ~${Math.round(a / c)}'×${Math.round(l / m)}' coverage.`);
                            }
                            const c = [];
                            t > 1 &&
                                (c.push("Edge blending processor (Analog Way, Barco, or Christie)"),
                                c.push("Precision mounting system with micro-adjustment"),
                                c.push("Professional calibration required")),
                                h > 5e4 &&
                                    (c.push("Dedicated power circuits (20A+ per projector)"),
                                    c.push("Active cooling/ventilation planning")),
                                (_ = {
                                    required: t > 1 || h > 4e4,
                                    projectorCount: t,
                                    lumensPerProjector: Math.round(s),
                                    projectorClass: e,
                                    recommendation: r,
                                    blendingNote: i,
                                    equipmentNeeded: c,
                                    totalSystemLumens: t * s,
                                    isExtreme: h > 1e5,
                                });
                        }
                        h > 2e5 &&
                            (_ = {
                                required: !0,
                                projectorCount: Math.ceil(h / 2e4),
                                lumensPerProjector: 2e4,
                                projectorClass: "Stadium/Arena Class",
                                recommendation: "Consider LED video wall instead of projection for this scale",
                                blendingNote:
                                    "At this scale, direct-view LED typically provides better uniformity and lower maintenance",
                                equipmentNeeded: [
                                    "Professional AV integration firm required",
                                    "LED wall evaluation recommended",
                                ],
                                totalSystemLumens: h,
                                isExtreme: !0,
                                ledRecommended: !0,
                            });
                    }
                    let v = null;
                    const N = 12 * Math.sqrt(a * a + l * l);
                    N > 600 &&
                        (v = {
                            level: "info",
                            message: "Very large screen - consider seamless projection screen or LED wall",
                            diagonal: Math.round(N),
                        }),
                        N > 1200 &&
                            (v = {
                                level: "warning",
                                message: "Stadium-scale display - LED video wall strongly recommended over projection",
                                diagonal: Math.round(N),
                            }),
                        p({
                            throwDistance: Math.round(100 * t) / 100,
                            throwCategory: j,
                            requiredLumens: Math.round(h),
                            recommendedMin: Math.round(0.9 * h),
                            recommendedMax: Math.round(1.3 * h),
                            screenAreaFt: Math.round(100 * n) / 100,
                            screenAreaM2: Math.round(100 * d) / 100,
                            screenDiagonalIn: Math.round(N),
                            targetFtL: Math.round(c),
                            resultingFtL: Math.round(10 * g) / 10,
                            resultingNits: Math.round(b),
                            screenGain: x,
                            brightnessCategory: f,
                            brightnessDescription: y,
                            unit: r,
                            multiProjector: _,
                            screenSizeWarning: v,
                        });
                },
                className:
                    "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg mb-8 cursor-pointer",
                children: "Calculate Brightness & Throw",
            }),
            h &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                            children: [
                                _jsx("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Throw Distance Result",
                                }),
                                _jsxs("div", {
                                    className: "bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                            children: "Required Throw Distance",
                                        }),
                                        _jsxs("div", {
                                            className: "text-4xl font-bold text-green-700",
                                            children: [h.throwDistance, " ", h.unit],
                                        }),
                                        _jsxs("div", {
                                            className: "text-sm text-gray-500 dark:text-gray-400 mt-2",
                                            children: [
                                                e,
                                                " ",
                                                r,
                                                " × ",
                                                s,
                                                " throw ratio = ",
                                                h.throwDistance,
                                                " ",
                                                r,
                                                " (",
                                                h.throwCategory,
                                                ")",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                            children: [
                                _jsx("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Brightness Calculation Results",
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-6 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-2 border-yellow-200 dark:border-yellow-800",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Required Projector Brightness",
                                                }),
                                                _jsx("div", {
                                                    className: "text-4xl font-bold text-yellow-700",
                                                    children: h.requiredLumens.toLocaleString(),
                                                }),
                                                _jsx("div", {
                                                    className: "text-lg text-yellow-600",
                                                    children: "Lumens",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400 mt-2",
                                                    children: [
                                                        "Recommended range: ",
                                                        h.recommendedMin.toLocaleString(),
                                                        " - ",
                                                        h.recommendedMax.toLocaleString(),
                                                        " lumens",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Screen Area",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-3xl font-bold text-blue-700",
                                                    children: [h.screenAreaFt, " ft²"],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                                    children: [h.screenAreaM2, " m²"],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-3 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className:
                                                "bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                    children: "Target Brightness",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xl font-bold text-purple-700",
                                                    children: [h.targetFtL, " ft-L"],
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                    children: "SMPTE Standard",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-indigo-50 p-4 rounded-lg border border-indigo-200 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                    children: "Resulting Brightness",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xl font-bold text-indigo-700",
                                                    children: [h.resultingNits, " nits"],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                    children: [h.resultingFtL, " ft-L"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-teal-50 p-4 rounded-lg border border-teal-200 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                    children: "Screen Gain",
                                                }),
                                                _jsx("div", {
                                                    className: "text-xl font-bold text-teal-700",
                                                    children: h.screenGain,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                    children:
                                                        h.screenGain >= 1.3
                                                            ? "High Gain"
                                                            : h.screenGain <= 0.9
                                                              ? "ALR Screen"
                                                              : "Standard",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className:
                                        "bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800",
                                    children: [
                                        _jsxs("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Environment Type",
                                                }),
                                                _jsxs("span", {
                                                    className:
                                                        "text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full",
                                                    children: [i, " lux"],
                                                }),
                                            ],
                                        }),
                                        _jsx("div", {
                                            className: "text-2xl font-bold text-purple-700",
                                            children: h.brightnessCategory,
                                        }),
                                        _jsx("p", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                            children: h.brightnessDescription,
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                                    children: [
                                        _jsx("h4", {
                                            className: "font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                            children: "Projector Recommendations",
                                        }),
                                        _jsxs("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                h.requiredLumens <= 3e3 &&
                                                    _jsx("p", {
                                                        className: "text-green-700",
                                                        children:
                                                            "✓ Standard home theater or portable projectors should work well",
                                                    }),
                                                h.requiredLumens > 3e3 &&
                                                    h.requiredLumens <= 5e3 &&
                                                    _jsx("p", {
                                                        className: "text-blue-700",
                                                        children:
                                                            "✓ Look for business/conference room projectors (3,000-5,000 lumens)",
                                                    }),
                                                h.requiredLumens > 5e3 &&
                                                    h.requiredLumens <= 1e4 &&
                                                    _jsx("p", {
                                                        className: "text-orange-700",
                                                        children:
                                                            "✓ Consider laser projectors or high-brightness installation projectors",
                                                    }),
                                                h.requiredLumens > 1e4 &&
                                                    _jsx("p", {
                                                        className: "text-red-700",
                                                        children:
                                                            "✓ Large venue projector required (10,000+ lumens) - consider multiple projectors or ALR screen",
                                                    }),
                                                i > 500 &&
                                                    _jsx("p", {
                                                        className: "text-purple-700",
                                                        children:
                                                            "💡 Consider an ALR (Ambient Light Rejecting) screen to improve image quality",
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",
                                    children: [
                                        _jsx("h4", {
                                            className: "font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Calculation Breakdown",
                                        }),
                                        _jsxs("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 space-y-1",
                                            children: [
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("strong", { children: "Screen Area:" }),
                                                        " ",
                                                        e,
                                                        " × ",
                                                        o,
                                                        " = ",
                                                        h.screenAreaFt,
                                                        " ft²",
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("strong", { children: "Area in m²:" }),
                                                        " ",
                                                        h.screenAreaFt,
                                                        " ÷ 10.764 = ",
                                                        h.screenAreaM2,
                                                        " m²",
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("strong", { children: "Required Lumens:" }),
                                                        " ",
                                                        i,
                                                        " lux × ",
                                                        h.screenAreaM2,
                                                        " m² × 3 = ",
                                                        _jsxs("strong", {
                                                            children: [h.requiredLumens.toLocaleString(), " lumens"],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        h.multiProjector &&
                            h.multiProjector.required &&
                            _jsxs("div", {
                                className:
                                    "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border-2 " +
                                    (h.multiProjector.ledRecommended ? "border-orange-400" : "border-purple-400"),
                                children: [
                                    _jsxs("h3", {
                                        className: "text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",
                                        children: [
                                            _jsx("span", { children: h.multiProjector.ledRecommended ? "⚠️" : "🎬" }),
                                            h.multiProjector.ledRecommended
                                                ? " Scale Advisory"
                                                : " Multi-Projector Configuration",
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className:
                                            "p-4 rounded-lg mb-4 " +
                                            (h.multiProjector.ledRecommended
                                                ? "bg-orange-50 border border-orange-200"
                                                : "bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800"),
                                        children: [
                                            _jsxs("div", {
                                                className: "grid md:grid-cols-3 gap-4 mb-4",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "text-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "Projectors Required",
                                                            }),
                                                            _jsx("div", {
                                                                className: "text-3xl font-bold text-purple-700",
                                                                children: h.multiProjector.projectorCount,
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "Lumens per Projector",
                                                            }),
                                                            _jsx("div", {
                                                                className: "text-2xl font-bold text-purple-600",
                                                                children:
                                                                    h.multiProjector.lumensPerProjector.toLocaleString(),
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-center",
                                                        children: [
                                                            _jsx("div", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "Projector Class",
                                                            }),
                                                            _jsx("div", {
                                                                className: "text-lg font-semibold text-purple-600",
                                                                children: h.multiProjector.projectorClass,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded border",
                                                children: [
                                                    _jsx("div", {
                                                        className: "font-medium text-gray-800",
                                                        children: h.multiProjector.recommendation,
                                                    }),
                                                    h.multiProjector.blendingNote &&
                                                        _jsx("div", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                                            children: h.multiProjector.blendingNote,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    h.multiProjector.equipmentNeeded &&
                                        h.multiProjector.equipmentNeeded.length > 0 &&
                                        _jsxs("div", {
                                            className: "bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                    children: "Equipment & Considerations:",
                                                }),
                                                _jsx("ul", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400 space-y-1",
                                                    children: h.multiProjector.equipmentNeeded.map((e, t) =>
                                                        _jsxs(
                                                            "li",
                                                            {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    _jsx("span", {
                                                                        className: "text-purple-500",
                                                                        children: "•",
                                                                    }),
                                                                    e,
                                                                ],
                                                            },
                                                            t
                                                        )
                                                    ),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        h.screenSizeWarning &&
                            _jsxs("div", {
                                className: `bg-${"warning" === h.screenSizeWarning.level ? "orange" : "blue"}-50 p-4 rounded-lg border border-${"warning" === h.screenSizeWarning.level ? "orange" : "blue"}-200 mt-4`,
                                children: [
                                    _jsxs("div", {
                                        className: `font-medium text-${"warning" === h.screenSizeWarning.level ? "orange" : "blue"}-800`,
                                        children: [
                                            "Screen Diagonal: ",
                                            h.screenSizeWarning.diagonal,
                                            '" (',
                                            Math.round(h.screenSizeWarning.diagonal / 12),
                                            " ft)",
                                        ],
                                    }),
                                    _jsx("div", {
                                        className: `text-sm text-${"warning" === h.screenSizeWarning.level ? "orange" : "blue"}-700`,
                                        children: h.screenSizeWarning.message,
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function BrightnessCalculator() {
    const [e, t] = useState(500),
        [s, a] = useState("lcd"),
        [r, l] = useState(null),
        [i, n] = useState(!1),
        o = [
            { value: "lcd", label: "LCD/LED Display", typicalNits: "300-500", maxNits: 700 },
            { value: "led", label: "Commercial LED", typicalNits: "500-1000", maxNits: 1500 },
            { value: "dvled", label: "Direct View LED", typicalNits: "800-2000", maxNits: 5e3 },
            { value: "projector", label: "Projector", typicalNits: "100-300", maxNits: 500 },
        ],
        d =
            (c = e) < 100
                ? { label: "Dark", color: "purple" }
                : c < 300
                  ? { label: "Dim", color: "indigo" }
                  : c < 500
                    ? { label: "Moderate", color: "blue" }
                    : c < 750
                      ? { label: "Bright", color: "yellow" }
                      : c < 1500
                        ? { label: "Very Bright", color: "orange" }
                        : { label: "Outdoor", color: "red" };
    var c;
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-4 sm:mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Display Brightness Calculator",
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
                    t(500), a("lcd"), l(null), n(!1);
                },
                onCancel: () => n(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Determines the minimum display brightness (nits) required for your environment based on ambient light levels. Uses AVIXA standards to ensure adequate contrast ratio for content visibility in different lighting conditions.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-5 mb-6 border border-blue-200 dark:border-blue-800",
                children: [
                    _jsx("h2", {
                        className: "text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2 sm:mb-3",
                        children: "AVIXA Display Brightness Standards",
                    }),
                    _jsxs("p", {
                        className: "text-xs sm:text-sm text-blue-700 mb-3",
                        children: [
                            "AVIXA recommends display brightness based on ambient light conditions to ensure optimal viewing. The minimum recommended brightness should be approximately ",
                            _jsx("strong", { children: "3× the ambient light level" }),
                            " (in nits) to maintain adequate contrast for content visibility.",
                        ],
                    }),
                    _jsx("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-200 dark:border-blue-800 mb-3",
                        children: _jsxs("p", {
                            className: "text-xs sm:text-sm font-mono text-blue-800 dark:text-blue-200",
                            children: [
                                _jsx("strong", { children: "Formula:" }),
                                " Minimum Nits = (Ambient Lux ÷ π) × 3",
                            ],
                        }),
                    }),
                    _jsxs("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",
                        children: [
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-2 rounded border border-blue-200 dark:border-blue-800 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "7:1" }),
                                    _jsx("div", { className: "text-blue-600", children: "Min Contrast (Text)" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-2 rounded border border-blue-200 dark:border-blue-800 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "20:1" }),
                                    _jsx("div", { className: "text-blue-600", children: "Good Contrast" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-2 rounded border border-blue-200 dark:border-blue-800 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "100:1+" }),
                                    _jsx("div", { className: "text-blue-600", children: "Excellent Contrast" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-2 rounded border border-blue-200 dark:border-blue-800 text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-blue-700", children: "3-5×" }),
                                    _jsx("div", { className: "text-blue-600", children: "Brightness vs Ambient" }),
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
                        children: "Environment & Display Settings",
                    }),
                    _jsxs("div", {
                        className: "mb-6",
                        children: [
                            _jsxs("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: [
                                    "Ambient Light: ",
                                    _jsxs("span", { className: "font-bold text-blue-600", children: [e, " lux"] }),
                                    _jsx("span", {
                                        className:
                                            "ml-2 px-2 py-0.5 text-xs rounded " +
                                            ("purple" === d.color
                                                ? "bg-purple-100 text-purple-700"
                                                : "indigo" === d.color
                                                  ? "bg-indigo-100 text-indigo-700"
                                                  : "blue" === d.color
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "yellow" === d.color
                                                      ? "bg-yellow-100 text-yellow-700"
                                                      : "orange" === d.color
                                                        ? "bg-orange-100 text-orange-700"
                                                        : "bg-red-100 text-red-700"),
                                        children: d.label,
                                    }),
                                ],
                            }),
                            _jsx("input", {
                                type: "range",
                                min: "0",
                                max: "2000",
                                step: "25",
                                value: Math.min(e, 2e3),
                                onChange: (e) => t("" === e.target.value ? "" : parseFloat(e.target.value)),
                                className:
                                    "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                            }),
                            _jsxs("div", {
                                className: "flex justify-between text-xs text-gray-400 mt-1",
                                children: [
                                    _jsx("span", { children: "0" }),
                                    _jsx("span", { children: "500" }),
                                    _jsx("span", { children: "1000" }),
                                    _jsx("span", { children: "1500" }),
                                    _jsx("span", { children: "2000+" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "mt-3",
                                children: [
                                    _jsx("label", {
                                        className: "block text-xs text-gray-500 dark:text-gray-400 mb-2",
                                        children: "Quick Select Environment:",
                                    }),
                                    _jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            { label: "Dark Room", lux: 50, icon: "🌙" },
                                            { label: "Dim/Theater", lux: 150, icon: "🎬" },
                                            { label: "Conference Room", lux: 300, icon: "🏢" },
                                            { label: "Office (Typical)", lux: 500, icon: "💼" },
                                            { label: "Bright Office", lux: 750, icon: "☀️" },
                                            { label: "Lobby/Retail", lux: 1e3, icon: "🏪" },
                                            { label: "Outdoor (Shade)", lux: 1500, icon: "🌤️" },
                                            { label: "Outdoor (Direct)", lux: 5e3, icon: "☀️" },
                                        ].map((s) =>
                                            _jsxs(
                                                "button",
                                                {
                                                    onClick: () => t(s.lux),
                                                    className:
                                                        "px-2 py-1 text-xs rounded border transition-colors cursor-pointer " +
                                                        (e === s.lux
                                                            ? "bg-blue-600 text-white border-blue-600"
                                                            : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:bg-blue-900/20"),
                                                    children: [s.icon, " ", s.label],
                                                },
                                                s.label
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mb-6",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Display Type",
                            }),
                            _jsx("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                children: o.map((e) =>
                                    _jsxs(
                                        "button",
                                        {
                                            onClick: () => a(e.value),
                                            className:
                                                "p-3 rounded-lg border-2 text-center transition-colors " +
                                                (s === e.value
                                                    ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700"
                                                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-300"),
                                            children: [
                                                _jsx("div", { className: "font-medium text-sm", children: e.label }),
                                                _jsxs("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                    children: [e.typicalNits, " nits"],
                                                }),
                                            ],
                                        },
                                        e.value
                                    )
                                ),
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => {
                            const t = _0xac743b(e),
                                a = o.find((e) => e.value === s),
                                r = t.nits,
                                i = Math.round(1.5 * r),
                                n = a.maxNits >= r,
                                d = a.maxNits >= i,
                                c = 0.01 * e,
                                m = a.maxNits / (c + 1),
                                x = [],
                                u = [];
                            n && d
                                ? x.push({
                                      type: "success",
                                      title: "Brightness Adequate",
                                      text: `${a.label} can achieve required ${r} nits with headroom for optimal viewing.`,
                                  })
                                : n && !d
                                  ? x.push({
                                        type: "warning",
                                        title: "Marginal Brightness",
                                        text: `${a.label} meets minimum requirements but may lack headroom. Consider a brighter display for better performance.`,
                                    })
                                  : u.push({
                                        type: "error",
                                        title: "Insufficient Brightness",
                                        text: `${a.label} (max ${a.maxNits} nits) cannot achieve required ${r} nits. Consider Direct View LED or reducing ambient light.`,
                                    }),
                                e < 100
                                    ? x.push({
                                          type: "info",
                                          title: "Dark Environment",
                                          text: "Per AVIXA, reduce display brightness to 100-200 nits in dark rooms to prevent eye strain and improve perceived contrast.",
                                      })
                                    : e > 1e3 &&
                                      x.push({
                                          type: "info",
                                          title: "High Ambient Light",
                                          text: "For bright environments, AVIXA recommends Direct View LED displays or high-brightness commercial displays with anti-glare coating.",
                                      }),
                                m >= 100
                                    ? x.push({
                                          type: "success",
                                          title: "Excellent Contrast",
                                          text: `Estimated contrast ratio of ${Math.round(m)}:1 exceeds AVIXA minimum of 7:1 for text readability.`,
                                      })
                                    : m >= 20
                                      ? x.push({
                                            type: "info",
                                            title: "Good Contrast",
                                            text: `Estimated contrast ratio of ${Math.round(m)}:1 is suitable for video and presentations.`,
                                        })
                                      : m >= 7
                                        ? x.push({
                                              type: "warning",
                                              title: "Minimum Contrast",
                                              text: `Estimated contrast ratio of ${Math.round(m)}:1 meets AVIXA minimum but may cause eye strain with prolonged viewing.`,
                                          })
                                        : u.push({
                                              type: "error",
                                              title: "Poor Contrast",
                                              text: `Estimated contrast ratio of ${Math.round(m)}:1 is below AVIXA minimum of 7:1. Content may be difficult to read.`,
                                          }),
                                "projector" === s &&
                                    x.push({
                                        type: "info",
                                        title: "Projector Consideration",
                                        text: "AVIXA recommends ALR (Ambient Light Rejecting) screens for environments above 300 lux. Consider screen gain factor for accurate brightness calculations.",
                                    }),
                                "dvled" === s &&
                                    e < 200 &&
                                    x.push({
                                        type: "info",
                                        title: "LED Brightness Control",
                                        text: "Direct View LED in dark environments should use reduced brightness (10-30%) to prevent eye fatigue and improve color accuracy.",
                                    }),
                                x.push({
                                    type: "info",
                                    title: "AVIXA Viewing Guidelines",
                                    text:
                                        e > 500
                                            ? "For extended viewing in bright environments, ensure display brightness exceeds ambient by at least 3:1 ratio."
                                            : "For comfortable extended viewing, AVIXA recommends matching display brightness to ambient conditions with a 3:1 to 5:1 contrast ratio.",
                                }),
                                l({
                                    ...t,
                                    ambientLux: e,
                                    minRecommendedNits: r,
                                    optimalNits: i,
                                    displayType: a,
                                    displaySuitable: n,
                                    displayOptimal: d,
                                    estimatedCR: Math.round(m),
                                    tips: x,
                                    warnings: u,
                                });
                        },
                        className:
                            "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors",
                        children: "Calculate Brightness Requirements",
                    }),
                ],
            }),
            r &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "Brightness Requirements",
                                }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-2 border-blue-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-blue-600 font-medium",
                                                    children: "Minimum Required",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-blue-700",
                                                    children: r.nits,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-blue-600",
                                                    children: "nits (cd/m²)",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-green-600 font-medium",
                                                    children: "Optimal Brightness",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-green-700",
                                                    children: r.optimalNits,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-green-600",
                                                    children: "nits (+50% headroom)",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-2 border-purple-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600 font-medium",
                                                    children: "Projector Equiv.",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-purple-700",
                                                    children: r.lumens,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600",
                                                    children: "lumens (approx.)",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "p-4 rounded-lg border-2 text-center " +
                                                (r.estimatedCR >= 100
                                                    ? "bg-green-50 dark:bg-green-900/20 border-green-300"
                                                    : r.estimatedCR >= 20
                                                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300"
                                                      : r.estimatedCR >= 7
                                                        ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300"
                                                        : "bg-red-50 dark:bg-red-900/20 border-red-300"),
                                            children: [
                                                _jsx("div", {
                                                    className:
                                                        "text-xs font-medium " +
                                                        (r.estimatedCR >= 100
                                                            ? "text-green-600"
                                                            : r.estimatedCR >= 20
                                                              ? "text-blue-600"
                                                              : r.estimatedCR >= 7
                                                                ? "text-yellow-600"
                                                                : "text-red-600"),
                                                    children: "Est. Contrast Ratio",
                                                }),
                                                _jsxs("div", {
                                                    className:
                                                        "text-3xl font-bold " +
                                                        (r.estimatedCR >= 100
                                                            ? "text-green-700"
                                                            : r.estimatedCR >= 20
                                                              ? "text-blue-700"
                                                              : r.estimatedCR >= 7
                                                                ? "text-yellow-700"
                                                                : "text-red-700"),
                                                    children: [r.estimatedCR, ":1"],
                                                }),
                                                _jsx("div", {
                                                    className:
                                                        "text-xs " +
                                                        (r.estimatedCR >= 100
                                                            ? "text-green-600"
                                                            : r.estimatedCR >= 20
                                                              ? "text-blue-600"
                                                              : r.estimatedCR >= 7
                                                                ? "text-yellow-600"
                                                                : "text-red-600"),
                                                    children:
                                                        r.estimatedCR >= 100
                                                            ? "Excellent"
                                                            : r.estimatedCR >= 20
                                                              ? "Good"
                                                              : r.estimatedCR >= 7
                                                                ? "Minimum"
                                                                : "Poor",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className:
                                        "p-4 rounded-lg border-2 mb-4 " +
                                        (r.displaySuitable && r.displayOptimal
                                            ? "bg-green-50 dark:bg-green-900/20 border-green-300"
                                            : r.displaySuitable
                                              ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300"
                                              : "bg-red-50 dark:bg-red-900/20 border-red-300"),
                                    children: [
                                        _jsxs("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                _jsx("span", {
                                                    className: "text-xl",
                                                    children:
                                                        r.displaySuitable && r.displayOptimal
                                                            ? "✅"
                                                            : r.displaySuitable
                                                              ? "⚠️"
                                                              : "❌",
                                                }),
                                                _jsxs("h3", {
                                                    className:
                                                        "font-semibold " +
                                                        (r.displaySuitable && r.displayOptimal
                                                            ? "text-green-800 dark:text-green-200"
                                                            : r.displaySuitable
                                                              ? "text-yellow-800 dark:text-yellow-200"
                                                              : "text-red-800 dark:text-red-200"),
                                                    children: [
                                                        r.displayType.label,
                                                        " - ",
                                                        r.displaySuitable && r.displayOptimal
                                                            ? "Excellent Choice"
                                                            : r.displaySuitable
                                                              ? "Acceptable"
                                                              : "Not Recommended",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("p", {
                                            className:
                                                "text-sm " +
                                                (r.displaySuitable && r.displayOptimal
                                                    ? "text-green-700"
                                                    : r.displaySuitable
                                                      ? "text-yellow-700"
                                                      : "text-red-700"),
                                            children: [
                                                r.displayType.label,
                                                " typical brightness: ",
                                                r.displayType.typicalNits,
                                                " nits (max ~",
                                                r.displayType.maxNits,
                                                " nits).",
                                                r.displaySuitable &&
                                                    r.displayOptimal &&
                                                    " This exceeds your required brightness with room for adjustment.",
                                                r.displaySuitable &&
                                                    !r.displayOptimal &&
                                                    " This meets minimum requirements but has limited headroom.",
                                                !r.displaySuitable &&
                                                    ` Required ${r.nits} nits exceeds maximum capability.`,
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-sm",
                                    children: _jsxs("div", {
                                        className: "grid sm:grid-cols-3 gap-2",
                                        children: [
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "Ambient:" }),
                                                    " ",
                                                    _jsxs("strong", { children: [r.ambientLux, " lux"] }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", {
                                                        className: "text-gray-500 dark:text-gray-400",
                                                        children: "Display Type:",
                                                    }),
                                                    " ",
                                                    _jsx("strong", { children: r.displayType.label }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("span", {
                                                        className: "text-gray-500 dark:text-gray-400",
                                                        children: "Brightness Factor:",
                                                    }),
                                                    " ",
                                                    _jsx("strong", { children: "3× ambient" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        r.warnings.length > 0 &&
                            _jsxs("div", {
                                className: "bg-red-50 dark:bg-red-900/20 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 border border-red-300",
                                children: [
                                    _jsxs("h2", {
                                        className: "text-lg font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2",
                                        children: [_jsx("span", { children: "⚠️" }), " Warnings"],
                                    }),
                                    _jsx("div", {
                                        className: "space-y-3",
                                        children: r.warnings.map((e, t) =>
                                            _jsxs(
                                                "div",
                                                {
                                                    className: "p-3 bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-800",
                                                    children: [
                                                        _jsx("h3", {
                                                            className: "font-semibold text-red-700 mb-1",
                                                            children: e.title,
                                                        }),
                                                        _jsx("p", {
                                                            className: "text-sm text-red-600",
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
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "AVIXA Tips & Recommendations",
                                }),
                                _jsx("div", {
                                    className: "space-y-3",
                                    children: r.tips.map((e, t) =>
                                        _jsxs(
                                            "div",
                                            {
                                                className:
                                                    "p-3 rounded-lg border " +
                                                    ("success" === e.type
                                                        ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                                                        : "warning" === e.type
                                                          ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
                                                          : "error" === e.type
                                                            ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                                                            : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"),
                                                children: [
                                                    _jsxs("h3", {
                                                        className:
                                                            "font-semibold mb-1 " +
                                                            ("success" === e.type
                                                                ? "text-green-800 dark:text-green-200"
                                                                : "warning" === e.type
                                                                  ? "text-yellow-800 dark:text-yellow-200"
                                                                  : "error" === e.type
                                                                    ? "text-red-800 dark:text-red-200"
                                                                    : "text-blue-800 dark:text-blue-200"),
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
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Environment Brightness Reference (AVIXA)",
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
                                                            children: "Environment",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Typical Lux",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Min Nits Required",
                                                        }),
                                                        _jsx("th", {
                                                            className: "px-3 py-2 text-left",
                                                            children: "Recommended Display",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            _jsx("tbody", {
                                                children: [
                                                    {
                                                        env: "Dark Room / Theater",
                                                        lux: "50-150",
                                                        nits: "50-150",
                                                        display: "Any display type",
                                                    },
                                                    {
                                                        env: "Conference Room",
                                                        lux: "300-500",
                                                        nits: "300-500",
                                                        display: "LCD/Commercial LED",
                                                    },
                                                    {
                                                        env: "Office / Classroom",
                                                        lux: "500-750",
                                                        nits: "500-750",
                                                        display: "Commercial LED / DVLED",
                                                    },
                                                    {
                                                        env: "Retail / Lobby",
                                                        lux: "750-1500",
                                                        nits: "750-1500",
                                                        display: "Direct View LED",
                                                    },
                                                    {
                                                        env: "Outdoor (Covered)",
                                                        lux: "1500-5000",
                                                        nits: "1500-3000",
                                                        display: "High-brightness DVLED",
                                                    },
                                                    {
                                                        env: "Outdoor (Direct Sun)",
                                                        lux: "5000+",
                                                        nits: "3000-5000+",
                                                        display: "Outdoor-rated DVLED",
                                                    },
                                                ].map((t, s) =>
                                                    _jsxs(
                                                        "tr",
                                                        {
                                                            className:
                                                                "border-b " +
                                                                (e >= parseInt(t.lux) &&
                                                                e < (parseInt(t.lux.split("-")[1]) || 1e4)
                                                                    ? "bg-blue-50 dark:bg-blue-900/20"
                                                                    : ""),
                                                            children: [
                                                                _jsx("td", {
                                                                    className: "px-3 py-2 font-medium",
                                                                    children: t.env,
                                                                }),
                                                                _jsx("td", { className: "px-3 py-2", children: t.lux }),
                                                                _jsx("td", {
                                                                    className: "px-3 py-2",
                                                                    children: t.nits,
                                                                }),
                                                                _jsx("td", {
                                                                    className: "px-3 py-2",
                                                                    children: t.display,
                                                                }),
                                                            ],
                                                        },
                                                        s
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
                    "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl shadow-md dark:shadow-gray-950/20 p-6 mb-8 border border-blue-200 dark:border-blue-800",
                children: [
                    _jsxs("h2", {
                        className: "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2",
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
                                        className: "text-sm font-medium text-gray-800 dark:text-gray-200",
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
                                        className: "text-sm font-medium text-gray-800 dark:text-gray-200",
                                        children: "SMPTE Standard",
                                    }),
                                    _jsx("div", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: "Professional, detailed",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border border-teal-200 dark:border-teal-800",
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
                                        className: "text-sm font-medium text-gray-800 dark:text-gray-200",
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
                                        className: "text-sm font-medium text-gray-800 dark:text-gray-200",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                        onClick: () => n(_0x9860ed(e, s, r)),
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
                                    ? "bg-teal-50 dark:bg-teal-900/20 border-teal-300 dark:border-teal-800"
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
                                                        ? "text-teal-800 dark:text-teal-200"
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
                                                        ? "text-teal-700 dark:text-teal-300"
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
                    bg: "bg-purple-50 dark:bg-purple-900/20",
                    border: "border-purple-300 dark:border-purple-800",
                    text: "text-purple-700 dark:text-purple-300",
                    badge: "bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-purple-200",
                },

                indigo: {
                    bg: "bg-indigo-50 dark:bg-indigo-900/20",
                    border: "border-indigo-300 dark:border-indigo-800",
                    text: "text-indigo-700 dark:text-indigo-300",
                    badge: "bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200",
                },
                blue: {
                    bg: "bg-blue-50 dark:bg-blue-900/20",
                    border: "border-blue-300 dark:border-blue-800",
                    text: "text-blue-700 dark:text-blue-300",
                    badge: "bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200",
                },
                cyan: {
                    bg: "bg-cyan-50 dark:bg-cyan-900/20",
                    border: "border-cyan-300 dark:border-cyan-800",
                    text: "text-cyan-700 dark:text-cyan-300",
                    badge: "bg-cyan-100 dark:bg-cyan-700 text-cyan-800 dark:text-cyan-200",
                },
                green: {
                    bg: "bg-green-50 dark:bg-green-900/20",
                    border: "border-green-300 dark:border-green-800",
                    text: "text-green-700 dark:text-green-300",
                    badge: "bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200",
                },
                yellow: {
                    bg: "bg-yellow-50 dark:bg-yellow-900/20",
                    border: "border-yellow-300 dark:border-yellow-800",
                    text: "text-yellow-700 dark:text-yellow-300",
                    badge: "bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200",
                },
                orange: {
                    bg: "bg-orange-50 dark:bg-orange-900/20",
                    border: "border-orange-300 dark:border-orange-800",
                    text: "text-orange-700 dark:text-orange-300",
                    badge: "bg-orange-100 dark:bg-orange-700 text-orange-800 dark:text-orange-200",
                },
                red: {
                    bg: "bg-red-50 dark:bg-red-900/20",
                    border: "border-red-300 dark:border-red-800",
                    text: "text-red-700 dark:text-red-300",
                    badge: "bg-red-100 dark:bg-red-700 text-red-800 dark:text-red-200",
                },

                gray: {
                    bg: "bg-gray-50 dark:bg-gray-900/50",
                    border: "border-gray-300 dark:border-gray-600",
                    text: "text-gray-700 dark:text-gray-300",
                    badge: "bg-gray-100 dark:bg-gray-700 text-gray-800",
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
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "DvLED Pixel Pitch Calculator",
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
                    t(10), a("ft"), l(null), n(!1);
                },
                onCancel: () => n(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Determines the optimal LED pixel pitch based on viewing distance, or calculates the minimum viewing distance for a given pixel pitch. Provides recommendations for different applications (broadcast, corporate, retail, venues).",
                    ],
                }),
            }),
            _jsxs("div", {
                className:
                    "bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl shadow-md dark:shadow-gray-950/20 p-6 mb-8 border border-purple-200 dark:border-purple-800",
                children: [
                    _jsxs("h2", {
                        className: "text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2",
                        children: [
                            _jsx("span", { className: "text-purple-600", children: "📊" }),
                            " Pixel Pitch Use Case Guide",
                        ],
                    }),

                    _jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
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
                                        _jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: e.use }),
                                    ],
                                },
                                e.pitch
                            )
                        ),
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
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Closest Viewer Distance",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        min: "0.1",
                                        value: e,
                                        onChange: (e) => t("" === e.target.value ? "" : parseFloat(e.target.value)),
className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Unit",
                                    }),
                                    _jsxs("select", {
                                        value: s,
                                        onChange: (e) => a(e.target.value),
className:
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsxs("div", {
                            className: "grid md:grid-cols-2 gap-6 mb-6",
                            children: [
                                _jsxs("div", {
                                    className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                            children: "Recommended Pixel Pitch",
                                        }),
                                        _jsxs("div", {
                                            className: "text-4xl font-bold text-blue-700",
                                            children: [r.pixelPitchMm, " mm"],
                                        }),
                                        _jsx("div", {
                                            className: "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                            children: "or finer for optimal clarity",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400",
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
                                            className: "text-sm text-gray-500 dark:text-gray-400 mt-1",
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
                                                className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                                children: d.description,
                                            }),
                                            _jsx("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: d.examples.map((e, t) =>
                                                    _jsx(
                                                        "span",
                                                        {
                                                            className:
                                                                "text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700",
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
                                    className: "font-semibold text-gray-700 dark:text-gray-300 mb-3",
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
                                                        : "bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"),
                                                children: [
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            _jsx("span", { className: "text-xl", children: e.icon }),
                                                            _jsx("span", {
                                                                className: `font-medium ${e === d ? x(e.color).text : "text-gray-700 dark:text-gray-300"}`,
                                                                children: e.label,
                                                            }),
                                                            e === d &&
                                                                _jsx("span", {
                                                                    className:
                                                                  "text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full ml-auto",

                                                                    children: "Best Match",
                                                                }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1 ml-7",
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
                            className: "p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg mb-6",
                            children: [
                                _jsx("div", {
                                    className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",
                                    children: "Pixel Pitch Scale",
                                }),
                                _jsxs("div", {
                                    className:
                                        "relative h-6 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 via-yellow-400 to-red-400 rounded-full overflow-hidden",
                                    children: [
                                        _jsx("div", {
                                            className: "absolute inset-0 flex justify-between px-2 items-center",
                                            children: [1, 2, 3, 4, 6, 10].map((e) =>
                                                _jsx("div", { className: "w-px h-full bg-white dark:bg-gray-800/50" }, e)
                                            ),
                                        }),
                                        _jsx("div", {
                                            className: "absolute top-0 bottom-0 w-1 bg-gray-900 shadow-lg dark:shadow-gray-950/30",
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
                                    className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1 px-1",
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
                            className: "p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg overflow-hidden",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                    children: "Viewing Distance Summary",
                                }),
                                _jsxs("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", {
                                                    className: "text-gray-500 dark:text-gray-400",
                                                    children: "Closest Viewer:",
                                                }),
                                                _jsxs("p", { className: "font-medium", children: [e, " ", s] }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "In Feet:" }),
                                                _jsxs("p", {
                                                    className: "font-medium",
                                                    children: [r.closestViewerFt, " ft"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", { className: "text-gray-500 dark:text-gray-400", children: "In Meters:" }),
                                                _jsxs("p", {
                                                    className: "font-medium",
                                                    children: [r.closestViewerM, " m"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", {
                                                    className: "text-gray-500 dark:text-gray-400",
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
                                    className: "mt-3 pt-3 border-t border-gray-200 dark:border-gray-700",
                                    children: [
                                        _jsxs("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: [
                                                _jsx("strong", { children: "Formula:" }),
                                                " Pixel Pitch (mm) = Closest Viewing Distance (ft) ÷ 10",
                                            ],
                                        }),
                                        _jsxs("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                                        _jsxs("span", {
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
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                                                            "w-16 sm:w-20 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                                    }),
                                                    _jsx("span", { className: "text-gray-500 dark:text-gray-400", children: ":" }),
                                                    _jsx("input", {
                                                        type: "number",
                                                        value: o,
                                                        onChange: (e) =>
                                                            d("" === e.target.value ? "" : parseFloat(e.target.value)),
                                                        className:
                                                            "w-16 sm:w-20 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
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
                        onClick: () => p(_0xb402b0(e, s, r, i, o, c, x)),
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
function CameraCalculator() {
    const [e, t] = useState(5),
        [s, a] = useState(90),
        [r, l] = useState("m"),
        [i, n] = useState("1080p"),
        [o, d] = useState(1),
        [c, m] = useState(null),
        [x, u] = useState(null),
        [h, p] = useState("security_indoor"),
        [g, b] = useState(!1),
        [f, y] = useState(!1),
        j = {
            conferencing_seated: {
                name: "Video Conferencing (Seated)",
                heightM: { min: 1.2, optimal: 1.3, max: 1.5 },
                heightFt: { min: 4, optimal: 4.3, max: 5 },
                tiltAngle: "0° to 5° down",
                description:
                    "Eye-level mounting for natural face-to-face collaboration. Position camera at or slightly above seated eye level.",
                standards: "Logitech/Poly/Cisco Best Practices",
                tips: [
                    "Mount camera between or below displays",
                    "Avoid extreme angles that distort faces",
                    "Ensure camera sees entire table width",
                ],
            },
            conferencing_standing: {
                name: "Video Conferencing (Standing/Presenter)",
                heightM: { min: 1.7, optimal: 1.8, max: 2 },
                heightFt: { min: 5.5, optimal: 6, max: 6.5 },
                tiltAngle: "0° to 5° down",
                description: "Elevated position for presenters at whiteboards or standing meetings.",
                standards: "Logitech/Poly Best Practices",
                tips: [
                    "Use adjustable mount for seated/standing modes",
                    "Consider PTZ camera for flexibility",
                    "Account for whiteboard visibility",
                ],
            },
            security_indoor: {
                name: "Security - Indoor (General)",
                heightM: { min: 2.5, optimal: 3, max: 3.7 },
                heightFt: { min: 8, optimal: 10, max: 12 },
                tiltAngle: "15° to 30° down",
                description: "Standard indoor security mounting. Balances facial capture with vandal resistance.",
                standards: "IEC 62676-4, Industry Best Practice",
                tips: [
                    "Mount in corner for maximum coverage",
                    "Avoid backlighting from windows",
                    "Ensure IR illumination reaches floor",
                ],
            },
            security_facial: {
                name: "Security - Facial Recognition",
                heightM: { min: 1.5, optimal: 1.7, max: 2 },
                heightFt: { min: 5, optimal: 5.5, max: 6.5 },
                tiltAngle: "0° to 10° down",
                description: "Low mounting optimized for facial capture and biometric identification.",
                standards: "IEC 62676-4 Identification Level",
                tips: [
                    "Position at doorways/chokepoints",
                    "Minimize downward angle",
                    "Ensure even facial lighting",
                    "Aim for 250+ PPM for identification",
                ],
            },
            security_entrance: {
                name: "Security - Entry Points",
                heightM: { min: 2.1, optimal: 2.4, max: 2.7 },
                heightFt: { min: 7, optimal: 8, max: 9 },
                tiltAngle: "10° to 20° down",
                description: "Entrance/exit monitoring for doors and gates. Captures faces while maintaining security.",
                standards: "UK Police Recommendations, IEC 62676-4",
                tips: [
                    "Mount to capture faces before entry",
                    "Avoid direct sunlight glare",
                    "Consider dual cameras: one facial, one overview",
                ],
            },
            security_outdoor: {
                name: "Security - Outdoor/Perimeter",
                heightM: { min: 3, optimal: 4, max: 5 },
                heightFt: { min: 10, optimal: 13, max: 16 },
                tiltAngle: "20° to 45° down",
                description: "Elevated outdoor mounting for wide area surveillance and vandal prevention.",
                standards: "IEC 62676-4, Commercial Security Standards",
                tips: [
                    "Use weatherproof housing",
                    "Consider lightning protection",
                    "Account for IR range at night",
                    "Higher = wider coverage but less facial detail",
                ],
            },
            security_parking: {
                name: "Security - Parking/LPR",
                heightM: { min: 1, optimal: 1.2, max: 1.5 },
                heightFt: { min: 3, optimal: 4, max: 5 },
                tiltAngle: "5° to 15° down",
                description: "Low mounting for license plate recognition (LPR/ANPR). Minimizes headlight glare.",
                standards: "LPR Industry Standards",
                tips: [
                    "Mount at bumper/plate height",
                    "Angle to avoid headlight reflection",
                    "Use IR illumination for night capture",
                ],
            },
            security_warehouse: {
                name: "Security - Warehouse/Industrial",
                heightM: { min: 3.7, optimal: 4.5, max: 6 },
                heightFt: { min: 12, optimal: 15, max: 20 },
                tiltAngle: "30° to 45° down",
                description: "High mounting for large open spaces with racking and equipment.",
                standards: "Commercial/Industrial Best Practice",
                tips: [
                    "Cover aisles from each end",
                    "Account for forklift and equipment height",
                    "Use varifocal lenses for flexibility",
                ],
            },
            security_retail: {
                name: "Security - Retail/POS",
                heightM: { min: 2.1, optimal: 2.5, max: 3 },
                heightFt: { min: 7, optimal: 8, max: 10 },
                tiltAngle: "15° to 25° down",
                description: "Retail environment balancing customer privacy with loss prevention.",
                standards: "Retail Security Best Practice",
                tips: [
                    "Cover POS terminals and high-value areas",
                    "Avoid capturing payment card details",
                    "Consider covert cameras for high-theft areas",
                ],
            },
        },
        _ = {
            "720p": { horizontal: 1280, vertical: 720, name: "720p HD" },
            "1080p": { horizontal: 1920, vertical: 1080, name: "1080p Full HD" },
            "2K": { horizontal: 2560, vertical: 1440, name: "2K QHD" },
            "4MP": { horizontal: 2688, vertical: 1520, name: "4MP" },
            "5MP": { horizontal: 2592, vertical: 1944, name: "5MP" },
            "4K": { horizontal: 3840, vertical: 2160, name: "4K UHD / 8MP" },
            "8MP": { horizontal: 3840, vertical: 2160, name: "4K UHD / 8MP" },
            "12MP": { horizontal: 4e3, vertical: 3e3, name: "12MP" },
        };
    useEffect(() => {
        if (c && c.selectedResolution && c.coverageWidthMeters > 0 && c.hfov > 0 && c.hfov < 180) {
            const e = c.coverageWidthMeters,
                t = c.selectedResolution;
            if (o >= 1 && o <= 100 && t.horizontal > 0) {
                const s = calculateCameraWithZoom(t.horizontal, e, o, c.hfov);
                u(s);
            } else o < 1 && u(null);
        }
    }, [o, c]);
    const v = (e) =>
        e >= 250
            ? { level: "Identification", color: "green", icon: "🟢" }
            : e >= 125
              ? { level: "Recognition", color: "yellow", icon: "🟡" }
              : e >= 62
                ? { level: "Observation", color: "orange", icon: "🟠" }
                : e >= 25
                  ? { level: "Detection", color: "red", icon: "🔴" }
                  : { level: "Monitoring", color: "gray", icon: "⚪" };
    return _jsxs("div", {
        className: "max-w-6xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Camera Distance Calculator",
                    }),
                    c !== null &&
                        _jsx("button", {
                            onClick: () => y(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm dark:shadow-gray-950/10",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: f,
                onConfirm: () => {
                    t(5), a(90), l("m"), n("1080p"), d(1), m(null), u(null), p("security_indoor"), b(!1), y(!1);
                },
                onCancel: () => y(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates maximum camera distances for each DORI level (Detection, Observation, Recognition, Identification) based on IEC 62676-4 standards. Enter camera resolution, lens field of view, and target coverage width to plan surveillance camera placement.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 mb-6 border border-blue-200 dark:border-blue-800",
                children: [
                    _jsx("h2", {
                        className: "text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3",
                        children: "IEC 62676-4 DORI Standard",
                    }),
                    _jsxs("p", {
                        className: "text-sm text-blue-700 mb-4",
                        children: [
                            "The ",
                            _jsx("strong", { children: "DORI" }),
                            " (Detection, Observation, Recognition, Identification) standard from IEC 62676-4 defines pixel density requirements for video surveillance systems based on operational needs.",
                        ],
                    }),
                    _jsxs("div", {
                        className: "bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-200 dark:border-blue-800 mb-4",
                        children: [
                            _jsx("p", {
                                className: "text-sm font-mono text-blue-800 dark:text-blue-200 mb-2",
                                children: _jsx("strong", { children: "Camera Distance Formula:" }),
                            }),
                            _jsx("p", {
                                className: "text-sm font-mono text-blue-700",
                                children: "Distance = Coverage Width ÷ (2 × tan(HFOV ÷ 2))",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-3 text-xs",
                        children: [
                            _jsxs("div", {
                                className: "bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-800 text-center",
                                children: [
                                    _jsx("div", { className: "text-2xl mb-1", children: "🔴" }),
                                    _jsx("div", { className: "font-bold text-red-700", children: "Detection" }),
                                    _jsx("div", { className: "text-red-600", children: "25 PPM / 8 PPF" }),
                                    _jsx("div", { className: "text-gray-500 dark:text-gray-400 mt-1", children: "Presence detected" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-orange-50 p-3 rounded border border-orange-200 text-center",
                                children: [
                                    _jsx("div", { className: "text-2xl mb-1", children: "🟠" }),
                                    _jsx("div", { className: "font-bold text-orange-700", children: "Observation" }),
                                    _jsx("div", { className: "text-orange-600", children: "62 PPM / 19 PPF" }),
                                    _jsx("div", { className: "text-gray-500 dark:text-gray-400 mt-1", children: "Clothing details" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded border border-yellow-200 dark:border-yellow-800 text-center",
                                children: [
                                    _jsx("div", { className: "text-2xl mb-1", children: "🟡" }),
                                    _jsx("div", { className: "font-bold text-yellow-700", children: "Recognition" }),
                                    _jsx("div", { className: "text-yellow-600", children: "125 PPM / 38 PPF" }),
                                    _jsx("div", {
                                        className: "text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Recognize if seen before",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800 text-center",
                                children: [
                                    _jsx("div", { className: "text-2xl mb-1", children: "🟢" }),
                                    _jsx("div", { className: "font-bold text-green-700", children: "Identification" }),
                                    _jsx("div", { className: "text-green-600", children: "250 PPM / 76 PPF" }),
                                    _jsx("div", { className: "text-gray-500 dark:text-gray-400 mt-1", children: "Positive ID" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsx("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-4",
                        children: "Camera Configuration",
                    }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Camera Application",
                                    }),
                                    _jsxs("select", {
                                        value: h,
                                        onChange: (e) => p(e.target.value),
className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("optgroup", {
                                                label: "Video Conferencing",
                                                children: [
                                                    _jsx("option", {
                                                        value: "conferencing_seated",
                                                        children: "Conferencing - Seated Meeting",
                                                    }),
                                                    _jsx("option", {
                                                        value: "conferencing_standing",
                                                        children: "Conferencing - Standing/Presenter",
                                                    }),
                                                ],
                                            }),
                                            _jsx("optgroup", {
                                                label: "Security & Surveillance",
                                                children: [
                                                    _jsx("option", {
                                                        value: "security_indoor",
                                                        children: "Security - Indoor (General)",
                                                    }),
                                                    _jsx("option", {
                                                        value: "security_facial",
                                                        children: "Security - Facial Recognition",
                                                    }),
                                                    _jsx("option", {
                                                        value: "security_entrance",
                                                        children: "Security - Entry Points",
                                                    }),
                                                    _jsx("option", {
                                                        value: "security_outdoor",
                                                        children: "Security - Outdoor/Perimeter",
                                                    }),
                                                    _jsx("option", {
                                                        value: "security_parking",
                                                        children: "Security - Parking/LPR",
                                                    }),
                                                    _jsx("option", {
                                                        value: "security_warehouse",
                                                        children: "Security - Warehouse/Industrial",
                                                    }),
                                                    _jsx("option", {
                                                        value: "security_retail",
                                                        children: "Security - Retail/POS",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Select application type for mounting height recommendations",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Unit",
                                    }),
                                    _jsxs("select", {
                                        value: r,
                                        onChange: (e) => l(e.target.value),
className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("option", { value: "m", children: "Meters (m)" }),
                                            _jsx("option", { value: "ft", children: "Feet (ft)" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Camera Max Resolution",
                                    }),
                                    _jsxs("select", {
                                        value: i,
                                        onChange: (e) => n(e.target.value),
className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("option", { value: "720p", children: "720p (1280×720)" }),
                                            _jsx("option", { value: "1080p", children: "1080p (1920×1080)" }),
                                            _jsx("option", { value: "2K", children: "2K QHD (2560×1440)" }),
                                            _jsx("option", { value: "4MP", children: "4MP (2688×1520)" }),
                                            _jsx("option", { value: "5MP", children: "5MP (2592×1944)" }),
                                            _jsx("option", { value: "4K", children: "4K UHD (3840×2160)" }),
                                            _jsx("option", { value: "8MP", children: "8MP (3840×2160)" }),
                                            _jsx("option", { value: "12MP", children: "12MP (4000×3000)" }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Select your camera's maximum resolution",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Coverage Width (", r, ")"],
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        min: "0.1",
                                        value: e,
                                        onChange: (e) => t("" === e.target.value ? "" : parseFloat(e.target.value)),
className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "The horizontal width of the area to be covered",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "md:col-span-2",
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: [
                                            "Horizontal Field of View (HFOV): ",
                                            _jsxs("span", { className: "font-bold text-blue-600", children: [s, "°"] }),
                                        ],
                                    }),
                                    _jsx("input", {
                                        type: "range",
                                        min: "5",
                                        max: "179",
                                        step: "1",
                                        value: s,
                                        onChange: (e) => a("" === e.target.value ? "" : parseFloat(e.target.value)),
                                        className:
                                            "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                    }),
                                    _jsxs("div", {
                                        className: "flex justify-between text-xs text-gray-400 mt-1",
                                        children: [
                                            _jsx("span", { children: "5° (Telephoto)" }),
                                            _jsx("span", { children: "90° (Standard)" }),
                                            _jsx("span", { children: "179° (Fisheye)" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "md:col-span-2",
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Quick Select - Common Lens Types",
                                    }),
                                    _jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            { hfov: 180, label: "180° (Fisheye)", type: "Fisheye" },
                                            { hfov: 120, label: "120° (Super Wide)", type: "Wide" },
                                            { hfov: 108, label: "108° (Wide)", type: "Wide" },
                                            { hfov: 90, label: "90° (Standard Wide)", type: "Standard" },
                                            { hfov: 72, label: "72° (Standard)", type: "Standard" },
                                            { hfov: 60, label: "60° (Narrow)", type: "Narrow" },
                                            { hfov: 45, label: "45° (Telephoto)", type: "Telephoto" },
                                            { hfov: 30, label: "30° (Long Telephoto)", type: "Telephoto" },
                                            { hfov: 15, label: "15° (Super Telephoto)", type: "Telephoto" },
                                        ].map((e) =>
                                            _jsx(
                                                "button",
                                                {
                                                    onClick: () => a(e.hfov),
                                                    className:
                                                        "px-3 py-1.5 text-xs rounded-lg border transition-colors " +
                                                        (s === e.hfov
                                                            ? "bg-blue-600 text-white border-blue-600"
                                                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:bg-blue-900/20"),
                                                    children: e.label,
                                                },
                                                e.hfov
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200",
                        children: [
                            _jsxs("label", {
                                className: "block text-sm font-medium text-indigo-800 mb-2",
                                children: [
                                    "🔍 Optical Zoom Factor: ",
                                    _jsxs("span", { className: "font-bold text-indigo-600", children: [o, "x"] }),
                                ],
                            }),
                            _jsx("input", {
                                type: "range",
                                min: "1",
                                max: "30",
                                step: "0.5",
                                value: o,
                                onChange: (e) => d(Number(e.target.value) || 1),
                                className:
                                    "w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600",
                            }),
                            _jsxs("div", {
                                className: "flex justify-between text-xs text-indigo-400 mt-1",
                                children: [
                                    _jsx("span", { children: "1x (No zoom)" }),
                                    _jsx("span", { children: "10x" }),
                                    _jsx("span", { children: "20x" }),
                                    _jsx("span", { children: "30x" }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "flex flex-wrap gap-2 mt-3",
                                children: [1, 2, 4, 8, 12, 20, 30].map((e) =>
                                    _jsxs(
                                        "button",
                                        {
                                            type: "button",
                                            onClick: () => d(e),
                                            className:
                                                "px-3 py-1 text-xs rounded border cursor-pointer transition-colors " +
                                                (o === e
                                                    ? "bg-indigo-600 text-white border-indigo-600"
                                                    : "bg-white dark:bg-gray-800 text-indigo-700 border-indigo-300 hover:bg-indigo-100"),
                                            children: [e, "x"],
                                        },
                                        e
                                    )
                                ),
                            }),
                            _jsx("p", {
                                className: "text-xs text-indigo-600 mt-2",
                                children:
                                    "Optical zoom increases effective pixel density (PPM), improving DORI capability at distance",
                            }),
                        ],
                    }),
                    _jsx("button", {
                        type: "button",
                        onClick: () => {
                            if (e > 0 && e <= 1e4 && s > 0 && s < 180) {
                                const t = calculateCameraDistance(e, s, r),
                                    a = _[i],
                                    l = "ft" === r ? 0.3048 * e : e,
                                    n = l > 0 ? Math.round(a.horizontal / l) : 0,
                                    d = Math.round(0.3048 * n);
                                if (
                                    (m({ ...t, selectedResolution: { ...a, key: i, ppm: n, ppf: d } }),
                                    o >= 1 && o <= 100)
                                ) {
                                    const e = calculateCameraWithZoom(a.horizontal, l, o, s);
                                    u(e);
                                } else u(null);
                            }
                        },
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Camera Distance",
                    }),
                ],
            }),
            c &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsx("h2", {
                            className: "text-xl font-semibold text-gray-800 mb-6",
                            children: "Camera Placement Results",
                        }),
                        o > 1 &&
                            x &&
                            _jsxs("div", {
                                className: "mb-6 p-4 bg-indigo-50 rounded-lg border-2 border-indigo-300",
                                children: [
                                    _jsxs("h3", {
                                        className: "font-semibold text-indigo-800 mb-3",
                                        children: ["🔍 Zoom Analysis (", o, "x Optical Zoom)"],
                                    }),
                                    x.doriImproved &&
                                        _jsxs("div", {
                                            className: "bg-green-100 p-3 rounded-lg mb-3 border border-green-300",
                                            children: [
                                                _jsx("span", {
                                                    className: "text-green-800 dark:text-green-200 font-semibold",
                                                    children: "✅ DORI Level Improved: ",
                                                }),
                                                _jsx("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: x.baseDORI.level,
                                                }),
                                                _jsx("span", {
                                                    className: "text-green-600 font-bold",
                                                    children: " → ",
                                                }),
                                                _jsx("span", {
                                                    className: "text-green-700 font-bold",
                                                    children: x.effectiveDORI.level,
                                                }),
                                            ],
                                        }),
                                    _jsxs("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                                        children: [
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                        children: "Effective PPM",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xl font-bold text-indigo-600",
                                                        children: x.effectivePPM,
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                        children: "Effective DORI",
                                                    }),
                                                    _jsx("div", {
                                                        className:
                                                            "text-lg font-bold " +
                                                            ("Identification" === x.effectiveDORI.level
                                                                ? "text-green-600"
                                                                : "Recognition" === x.effectiveDORI.level
                                                                  ? "text-yellow-600"
                                                                  : "Observation" === x.effectiveDORI.level
                                                                    ? "text-orange-600"
                                                                    : "Detection" === x.effectiveDORI.level
                                                                      ? "text-red-600"
                                                                      : "text-gray-500 dark:text-gray-400"),
                                                        children: x.effectiveDORI.level,
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                        children: "Effective HFOV",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xl font-bold text-indigo-600",
                                                        children: [x.effectiveHFOV, "°"],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                        children: "Effective Coverage",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xl font-bold text-indigo-600",
                                                        children: [
                                                            "ft" === r
                                                                ? x.effectiveCoverageWidthFt
                                                                : x.effectiveCoverageWidthM,
                                                            " ",
                                                            r,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-3 gap-4 mb-6",
                            children: [
                                _jsxs("div", {
                                    className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                            children: "Camera Distance",
                                        }),
                                        _jsx("div", {
                                            className: "text-4xl font-bold text-blue-700",
                                            children: c.distance,
                                        }),
                                        _jsx("div", { className: "text-lg text-blue-600", children: c.unit }),
                                        "ft" === r &&
                                            _jsxs("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                children: ["(", c.distanceMeters, " m)"],
                                            }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800 text-center",
                                    children: [
                                        _jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Coverage Width" }),
                                        _jsx("div", {
                                            className: "text-4xl font-bold text-green-700",
                                            children: c.coverageWidth,
                                        }),
                                        _jsx("div", { className: "text-lg text-green-600", children: c.unit }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800 text-center",
                                    children: [
                                        _jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Field of View" }),
                                        _jsxs("div", {
                                            className: "text-4xl font-bold text-purple-700",
                                            children: [c.hfov, "°"],
                                        }),
                                        _jsx("div", { className: "text-lg text-purple-600", children: "HFOV" }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg mb-6",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                    children: "Calculation Breakdown",
                                }),
                                _jsxs("p", {
                                    className: "text-sm text-gray-600 dark:text-gray-400 font-mono",
                                    children: [
                                        "Distance = ",
                                        c.coverageWidth,
                                        " ",
                                        c.unit,
                                        " ÷ (2 × tan(",
                                        c.hfov,
                                        "° ÷ 2))",
                                    ],
                                }),
                                _jsxs("p", {
                                    className: "text-sm text-gray-600 dark:text-gray-400 font-mono",
                                    children: ["Distance = ", c.coverageWidth, " ÷ (2 × tan(", c.hfov / 2, "°))"],
                                }),
                                _jsxs("p", {
                                    className: "text-sm text-gray-600 dark:text-gray-400 font-mono",
                                    children: [
                                        "Distance = ",
                                        c.coverageWidth,
                                        " ÷ ",
                                        (2 * Math.tan(((c.hfov / 2) * Math.PI) / 180)).toFixed(4),
                                        " = ",
                                        _jsxs("strong", { children: [c.distance, " ", c.unit] }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "mb-6",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                    children: "Pixel Density by Camera Resolution (IEC 62676-4)",
                                }),
                                _jsx("div", {
                                    className: "overflow-x-auto",
                                    children: _jsxs("table", {
                                        className: "w-full text-sm border-collapse",
                                        children: [
                                            _jsx("thead", {
                                                children: _jsxs("tr", {
                                                    className: "bg-gray-100 dark:bg-gray-700",
                                                    children: [
                                                        _jsx("th", {
                                                            className: "border p-2 text-left",
                                                            children: "Resolution",
                                                        }),
                                                        _jsx("th", {
                                                            className: "border p-2 text-center",
                                                            children: "Pixels",
                                                        }),
                                                        _jsx("th", {
                                                            className: "border p-2 text-center",
                                                            children: "PPM",
                                                        }),
                                                        _jsx("th", {
                                                            className: "border p-2 text-center",
                                                            children: "PPF",
                                                        }),
                                                        _jsx("th", {
                                                            className: "border p-2 text-center",
                                                            children: "DORI Level",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            _jsx("tbody", {
                                                children: c.ppmByResolution.map((e) => {
                                                    const t = v(e.ppm),
                                                        s =
                                                            c.selectedResolution &&
                                                            e.name === c.selectedResolution.name;
                                                    return _jsxs(
                                                        "tr",
                                                        {
                                                            className: s
                                                                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300"
                                                                : "hover:bg-gray-50 dark:bg-gray-900/50",
                                                            children: [
                                                                _jsxs("td", {
                                                                    className: "border p-2 font-medium",
                                                                    children: [
                                                                        e.name,
                                                                        s &&
                                                                            _jsx("span", {
                                                                                className:
                                                                                    "ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded",
                                                                                children: "Selected",
                                                                            }),
                                                                    ],
                                                                }),
                                                                _jsxs("td", {
                                                                    className: "border p-2 text-center text-gray-600 dark:text-gray-400",
                                                                    children: [e.horizontal, "×", e.vertical],
                                                                }),
                                                                _jsx("td", {
                                                                    className: "border p-2 text-center font-bold",
                                                                    children: e.ppm,
                                                                }),
                                                                _jsx("td", {
                                                                    className: "border p-2 text-center text-gray-600 dark:text-gray-400",
                                                                    children: e.ppf,
                                                                }),
                                                                _jsx("td", {
                                                                    className: "border p-2 text-center",
                                                                    children: _jsxs("span", {
                                                                        className:
                                                                            "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium " +
                                                                            ("red" === t.color
                                                                                ? "bg-red-100 text-red-700"
                                                                                : "orange" === t.color
                                                                                  ? "bg-orange-100 text-orange-700"
                                                                                  : "yellow" === t.color
                                                                                    ? "bg-yellow-100 text-yellow-700"
                                                                                    : "green" === t.color
                                                                                      ? "bg-green-100 text-green-700"
                                                                                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),
                                                                        children: [t.icon, " ", t.level],
                                                                    }),
                                                                }),
                                                            ],
                                                        },
                                                        e.name
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        c.selectedResolution &&
                            _jsxs("div", {
                                className: "p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mb-6",
                                children: [
                                    _jsxs("h3", {
                                        className: "font-semibold text-blue-800 dark:text-blue-200 mb-3",
                                        children: ["📷 Your Selected Camera Resolution: ", c.selectedResolution.name],
                                    }),
                                    _jsxs("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                                        children: [
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded border text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: "Resolution",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-lg font-bold text-blue-700",
                                                        children: [
                                                            c.selectedResolution.horizontal,
                                                            "×",
                                                            c.selectedResolution.vertical,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded border text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: "PPM",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xl font-bold text-blue-700",
                                                        children: c.selectedResolution.ppm,
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded border text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: "PPF",
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-xl font-bold text-blue-700",
                                                        children: c.selectedResolution.ppf,
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded border text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: "DORI Level",
                                                    }),
                                                    (() => {
                                                        const e = v(c.selectedResolution.ppm);
                                                        return _jsxs("div", {
                                                            className:
                                                                "text-lg font-bold " +
                                                                ("red" === e.color
                                                                    ? "text-red-700"
                                                                    : "orange" === e.color
                                                                      ? "text-orange-700"
                                                                      : "yellow" === e.color
                                                                        ? "text-yellow-700"
                                                                        : "green" === e.color
                                                                          ? "text-green-700"
                                                                          : "text-gray-700 dark:text-gray-300"),
                                                            children: [e.icon, " ", e.level],
                                                        });
                                                    })(),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        _jsxs("div", {
                            className: "p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-6",
                            children: [
                                _jsxs("h3", {
                                    className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-3",
                                    children: [
                                        "📏 Maximum Distance by DORI Level (",
                                        c.selectedResolution ? c.selectedResolution.name : "1080p",
                                        " Camera)",
                                    ],
                                }),
                                _jsxs("p", {
                                    className: "text-xs text-yellow-700 mb-3",
                                    children: [
                                        "For a ",
                                        c.selectedResolution ? c.selectedResolution.name : "1080p",
                                        " camera with ",
                                        c.hfov,
                                        "° HFOV, here are the maximum distances for each DORI level:",
                                    ],
                                }),
                                _jsx("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                                    children: Object.entries(c.doriLevels).map(([e, t]) => {
                                        const s =
                                                (c.selectedResolution ? c.selectedResolution.horizontal : 1920) /
                                                t.ppm /
                                                (2 * Math.tan(((c.hfov / 2) * Math.PI) / 180)),
                                            a = "ft" === r ? s / 0.3048 : s;
                                        return _jsxs(
                                            "div",
                                            {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded border text-center",
                                                children: [
                                                    _jsx("div", {
                                                        className: "font-semibold text-gray-800 capitalize",
                                                        children: e,
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xl font-bold text-yellow-700",
                                                        children: [Math.round(10 * a) / 10, " ", r],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                        children: [t.ppm, " PPM"],
                                                    }),
                                                ],
                                            },
                                            e
                                        );
                                    }),
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-purple-800 dark:text-purple-200 mb-3",
                                    children: "📋 IEC 62676-4:2025 OODPCVS Standard (New)",
                                }),
                                _jsx("p", {
                                    className: "text-xs text-purple-700 mb-3",
                                    children:
                                        "The updated 2025 standard introduces more granular levels for modern high-resolution cameras:",
                                }),
                                _jsx("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-2 text-xs",
                                    children: Object.entries(c.oodpcvsLevels).map(([e, t]) =>
                                        _jsxs(
                                            "div",
                                            {
                                                className: "bg-white dark:bg-gray-800 p-2 rounded border",
                                                children: [
                                                    _jsx("div", {
                                                        className: "font-semibold text-purple-700 capitalize",
                                                        children: e,
                                                    }),
                                                    _jsxs("div", {
                                                        className: "text-purple-600",
                                                        children: [t.ppm, " PPM"],
                                                    }),
                                                    _jsx("div", {
                                                        className: "text-gray-500 dark:text-gray-400 text-xs",
                                                        children: t.description,
                                                    }),
                                                ],
                                            },
                                            e
                                        )
                                    ),
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "mt-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-800",
                            children: [
                                _jsxs("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        _jsx("h3", {
                                            className: "font-semibold text-amber-800 dark:text-amber-200",
                                            children: "📐 Recommended Mounting Height",
                                        }),
                                        _jsx("button", {
                                            type: "button",
                                            onClick: () => b(!g),
                                            className:
                                                "text-xs bg-amber-200 hover:bg-amber-300 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full transition-colors cursor-pointer",
                                            children: g ? "Hide Details" : "Show Details",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "grid md:grid-cols-3 gap-4 mb-4",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-white dark:bg-gray-800 p-4 rounded-lg border text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                    children: "Minimum Height",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-2xl font-bold text-amber-600",
                                                    children: [
                                                        "ft" === r ? j[h].heightFt.min : j[h].heightM.min,
                                                        " ",
                                                        r,
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-amber-100 p-4 rounded-lg border-2 border-amber-400 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-amber-700 font-medium mb-1",
                                                    children: "✓ Optimal Height",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-2xl font-bold text-amber-700",
                                                    children: [
                                                        "ft" === r ? j[h].heightFt.optimal : j[h].heightM.optimal,
                                                        " ",
                                                        r,
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "bg-white dark:bg-gray-800 p-4 rounded-lg border text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                    children: "Maximum Height",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-2xl font-bold text-amber-600",
                                                    children: [
                                                        "ft" === r ? j[h].heightFt.max : j[h].heightM.max,
                                                        " ",
                                                        r,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "flex flex-wrap gap-3 text-sm",
                                    children: [
                                        _jsxs("span", {
                                            className: "bg-white dark:bg-gray-800 px-3 py-1 rounded-full border",
                                            children: ["🎯 Application: ", _jsx("strong", { children: j[h].name })],
                                        }),
                                        _jsxs("span", {
                                            className: "bg-white dark:bg-gray-800 px-3 py-1 rounded-full border",
                                            children: ["📐 Tilt Angle: ", _jsx("strong", { children: j[h].tiltAngle })],
                                        }),
                                        _jsxs("span", {
                                            className: "bg-white dark:bg-gray-800 px-3 py-1 rounded-full border text-xs",
                                            children: ["📋 Standard: ", j[h].standards],
                                        }),
                                    ],
                                }),
                                g &&
                                    _jsxs("div", {
                                        className: "mt-4 pt-4 border-t border-amber-200 dark:border-amber-800",
                                        children: [
                                            _jsx("p", {
                                                className: "text-sm text-amber-800 dark:text-amber-200 mb-3",
                                                children: j[h].description,
                                            }),
                                            _jsxs("div", {
                                                className: "bg-white dark:bg-gray-800 p-3 rounded-lg border",
                                                children: [
                                                    _jsx("h4", {
                                                        className: "text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "Installation Tips:",
                                                    }),
                                                    _jsx("ul", {
                                                        className: "text-xs text-gray-600 dark:text-gray-400 space-y-1",
                                                        children: j[h].tips.map((e, t) =>
                                                            _jsxs("li", { children: ["• ", e] }, t)
                                                        ),
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
function VideoWallBuilderCalculator() {
    const [e, t] = useState(47.6),
        [s, a] = useState(26.8),
        [r, l] = useState("in"),
        [i, n] = useState(1920),
        [o, d] = useState(1080),
        [c, m] = useState("preset"),
        [x, u] = useState(0),
        [h, p] = useState("dimension"),
        [g, b] = useState("width"),
        [f, y] = useState(10),
        [j, _] = useState("ft"),
        [v, N] = useState(16),
        [w, C] = useState(9),
        [M, k] = useState(12),
        [S, R] = useState(6.75),
        [P, A] = useState("ft"),
        [D, I] = useState(2),
        [E, F] = useState(2),
        [B, T] = useState(null),
        [L, H] = useState(!1),
        U = (e) => {
            const t = j,
                s = P,
                a = 0.3048,
                r = 3.28084;
            t !== e &&
                ("ft" === t && "m" === e
                    ? y((e) => Math.round(e * a * 100) / 100)
                    : "m" === t && "ft" === e && y((e) => Math.round(e * r * 100) / 100),
                _(e)),
                s !== e &&
                    ("ft" === s && "m" === e
                        ? (k((e) => Math.round(e * a * 100) / 100), R((e) => Math.round(e * a * 100) / 100))
                        : "m" === s &&
                          "ft" === e &&
                          (k((e) => Math.round(e * r * 100) / 100), R((e) => Math.round(e * r * 100) / 100)),
                    A(e));
        },
        q = (e, t) => {
            const s = _0x99bba9(e, 1, 0.001);
            return "mm" === t ? s / 25.4 : "ft" === t ? 12 * s : "m" === t ? 39.3701 * s : s;
        },
        $ = (e, t, s, a) => {
            const r = (x || 0) / 25.4,
                l = (t - 1) * r,
                n = (e - 1) * r,
                d = t * s + l,
                c = e * a + n,
                m = Math.sqrt(d * d + c * c),
                u = d / c;
            let h, p;
            const g = [
                { w: 1, h: 1, decimal: 1 },
                { w: 4, h: 3, decimal: 4 / 3 },
                { w: 5, h: 4, decimal: 5 / 4 },
                { w: 3, h: 2, decimal: 1.5 },
                { w: 16, h: 10, decimal: 1.6 },
                { w: 16, h: 9, decimal: 16 / 9 },
                { w: 2, h: 1, decimal: 2 },
                { w: 21, h: 9, decimal: 21 / 9 },
                { w: 32, h: 9, decimal: 32 / 9 },
                { w: 32, h: 10, decimal: 3.2 },
                { w: 48, h: 9, decimal: 48 / 9 },
                { w: 64, h: 9, decimal: 64 / 9 },
                { w: 9, h: 16, decimal: 9 / 16 },
                { w: 3, h: 4, decimal: 3 / 4 },
                { w: 2, h: 3, decimal: 2 / 3 },
            ].find((e) => Math.abs(e.decimal - u) / u < 0.02);
            if (g) (h = g.w), (p = g.h);
            else {
                const e = (t, s) => (0 === s ? t : e(s, t % s));
                let t = Math.round(9 * u),
                    s = 9;
                for (const a of [9, 10, 16, 8, 12]) {
                    const r = Math.round(u * a),
                        l = e(r, a),
                        i = r / l,
                        n = a / l;
                    i <= 64 && n <= 64 && i > 0 && i + n < t + s && ((t = i), (s = n));
                }
                (h = t), (p = s);
            }
            const b = t * _0x99bba9(i, 1920, 1),
                f = e * _0x99bba9(o, 1080, 1),
                y = (25.4 * d) / b,
                j = 4 * y,
                _ = 6 * y,
                v = 8 * y;
            T({
                rows: e,
                cols: t,
                totalDisplays: e * t,
                totalWidthIn: d,
                totalHeightIn: c,
                totalWidthFt: d / 12,
                totalHeightFt: c / 12,
                totalWidthM: d / 39.3701,
                totalHeightM: c / 39.3701,
                diagonalIn: m,
                diagonalFt: m / 12,
                aspectRatio: `${h}:${p}`,
                aspectDecimal: u.toFixed(2),
                totalResWidth: b,
                totalResHeight: f,
                totalPixels: b * f,
                configuration: `${t}×${e}`,
                bezelGapMM: x || 0,
                totalBezelWidthMM: Math.round(25.4 * l * 10) / 10,
                totalBezelHeightMM: Math.round(25.4 * n * 10) / 10,
                pixelPitchMM: Math.round(100 * y) / 100,
                minViewingAnalyticalM: Math.round((j / 1e3) * 10) / 10,
                minViewingBasicM: Math.round((_ / 1e3) * 10) / 10,
                minViewingVideoM: Math.round((v / 1e3) * 10) / 10,
                minViewingAnalyticalFt: Math.round((j / 304.8) * 10) / 10,
                minViewingBasicFt: Math.round((_ / 304.8) * 10) / 10,
                minViewingVideoFt: Math.round((v / 304.8) * 10) / 10,
            });
        },
        W = (t, a) => {
            I(t), F(a);
            const l = q(e, r),
                i = q(s, r);
            $(t, a, l, i);
        };
    return _jsxs("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-4 sm:mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Video Wall Builder",
                    }),
                    B !== null &&
                        _jsx("button", {
                            onClick: () => H(!0),
                            className:
                                "px-3 py-1.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm dark:shadow-gray-950/10",
                            children: "⟲ Reset Tool",
                        }),
                ],
            }),
            _jsx(ResetConfirmModal, {
                isOpen: L,
                onConfirm: () => {
                    t(47.6),
                        a(26.8),
                        l("in"),
                        n(1920),
                        d(1080),
                        m("preset"),
                        u(0),
                        p("dimension"),
                        b("width"),
                        y(10),
                        _("ft"),
                        N(16),
                        C(9),
                        k(12),
                        R(6.75),
                        A("ft"),
                        I(2),
                        F(2),
                        T(null),
                        H(!1);
                },
                onCancel: () => H(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Design video wall configurations by entering individual display dimensions and resolution. Adjust rows and columns to achieve your target wall size or aspect ratio. Calculates total dimensions, resolution, and pixel count.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-5 mb-6 border border-blue-200 dark:border-blue-800",
                children: [
                    _jsx("h2", {
                        className: "text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2 sm:mb-3",
                        children: "Video Wall Design Tool",
                    }),
                    _jsx("p", {
                        className: "text-xs sm:text-sm text-blue-700",
                        children:
                            "Design your video wall by specifying display dimensions and target size. Adjust rows and columns using the sliders to fine-tune your configuration.",
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 mb-6 border",
                children: [
                    _jsx("h2", {
                        className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                        children: "Display Specifications",
                    }),
                    _jsxs("div", {
                        className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Display Width",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        value: e,
                                        onChange: (e) =>
                                            t("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Display Height",
                                    }),
                                    _jsx("input", {
                                        type: "number",
                                        step: "0.1",
                                        value: s,
                                        onChange: (e) =>
                                            a("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Dimension Unit",
                                    }),
                                    _jsxs("select", {
                                        value: r,
                                        onChange: (e) => l(e.target.value),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("option", { value: "in", children: "Inches (in)" }),
                                            _jsx("option", { value: "mm", children: "Millimeters (mm)" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Resolution",
                                    }),
                                    _jsxs("select", {
                                        value: "custom" === c ? "custom" : `${i}x${o}`,
                                        onChange: (e) => {
                                            if ("custom" === e.target.value) m("custom");
                                            else {
                                                m("preset");
                                                const [t, s] = e.target.value.split("x").map(Number);
                                                n(t), d(s);
                                            }
                                        },
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600",
                                        children: [
                                            _jsx("option", { value: "1920x1080", children: "1920×1080 (FHD)" }),
                                            _jsx("option", { value: "2560x1440", children: "2560×1440 (QHD)" }),
                                            _jsx("option", { value: "3840x2160", children: "3840×2160 (4K)" }),
                                            _jsx("option", { value: "1280x720", children: "1280×720 (HD)" }),
                                            _jsx("option", { value: "1366x768", children: "1366×768 (WXGA)" }),
                                            _jsx("option", { value: "custom", children: "Custom Resolution" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    "custom" === c &&
                        _jsxs("div", {
                            className: "mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border",
                            children: [
                                _jsx("label", {
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",
                                    children: "Custom Resolution",
                                }),
                                _jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        _jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                    children: "Width (px)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "1",
                                                    value: i,
                                                    onChange: (e) =>
                                                        n(
                                                            "" === e.target.value || "" === e.target.value
                                                                ? ""
                                                                : parseInt(e.target.value)
                                                        ),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                                    placeholder: "Width",
                                                }),
                                            ],
                                        }),
                                        _jsx("span", { className: "text-gray-400 font-medium pt-5", children: "×" }),
                                        _jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                                _jsx("label", {
                                                    className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                    children: "Height (px)",
                                                }),
                                                _jsx("input", {
                                                    type: "number",
                                                    min: "1",
                                                    value: o,
                                                    onChange: (e) =>
                                                        d(
                                                            "" === e.target.value || "" === e.target.value
                                                                ? ""
                                                                : parseInt(e.target.value)
                                                        ),
                                                    className:
                                                        "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                                    placeholder: "Height",
                                                }),
                                            ],
                                        }),
                                        _jsx("div", {
                                            className: "pt-5",
                                            children: _jsxs("span", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded border",
                                                children: [((i * o) / 1e6).toFixed(2), " MP"],
                                            }),
                                        }),
                                    ],
                                }),
                                _jsx("p", {
                                    className: "text-xs text-gray-500 dark:text-gray-400 mt-2",
                                    children: "Enter your display's native resolution in pixels",
                                }),
                            ],
                        }),
                    _jsxs("div", {
                        className: "mt-4",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Bezel-to-Bezel Gap (optional)",
                            }),
                            _jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    _jsx("input", {
                                        type: "number",
                                        min: "0",
                                        step: "0.1",
                                        value: x,
                                        onChange: (e) => u("" === e.target.value ? 0 : parseFloat(e.target.value) || 0),
                                        className: "w-32 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                    }),
                                    _jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: "mm" }),
                                    _jsxs("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: [
                                            { label: "0mm (LED)", value: 0 },
                                            { label: "1.8mm", value: 1.8 },
                                            { label: "3.5mm", value: 3.5 },
                                            { label: "5mm", value: 5 },
                                        ].map((e) =>
                                            _jsx(
                                                "button",
                                                {
                                                    onClick: () => u(e.value),
                                                    className:
                                                        "px-2 py-1 text-xs rounded border transition-colors cursor-pointer " +
                                                        (x === e.value
                                                            ? "bg-blue-600 text-white border-blue-600"
                                                            : "bg-gray-50 dark:bg-gray-900/50 hover:bg-blue-50 dark:bg-blue-900/20 border-gray-300 dark:border-gray-600"),
                                                    children: e.label,
                                                },
                                                e.label
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            _jsx("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                children: "Total gap between adjacent display edges. Set to 0 for LED walls.",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-4",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Quick Select - Common Displays",
                            }),
                            _jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    { label: '55" FHD', w: 47.6, h: 26.8, rw: 1920, rh: 1080 },
                                    { label: '49" FHD', w: 42.5, h: 23.9, rw: 1920, rh: 1080 },
                                    { label: '46" FHD', w: 39.9, h: 22.5, rw: 1920, rh: 1080 },
                                    { label: '55" 4K', w: 47.6, h: 26.8, rw: 3840, rh: 2160 },
                                    { label: '65" 4K', w: 56.7, h: 31.9, rw: 3840, rh: 2160 },
                                ].map((e) =>
                                    _jsx(
                                        "button",
                                        {
                                            onClick: () => {
                                                t(e.w), a(e.h), n(e.rw), d(e.rh), l("in"), m("preset");
                                            },
                                            className:
                                                "px-3 py-1.5 text-xs rounded-lg border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:bg-blue-900/20 transition-colors cursor-pointer",
                                            children: e.label,
                                        },
                                        e.label
                                    )
                                ),
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
                        children: "Video Wall Target Size",
                    }),
                    _jsxs("div", {
                        className: "mb-4",
                        children: [
                            _jsx("label", {
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Input Mode",
                            }),
                            _jsxs("div", {
                                className: "flex flex-col sm:flex-row gap-3 sm:gap-4",
                                children: [
                                    _jsxs("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            _jsx("input", {
                                                type: "radio",
                                                checked: "dimension" === h,
                                                onChange: () => p("dimension"),
                                                className: "text-blue-600",
                                            }),
_jsx("span", {
                                                className: "text-sm dark:text-gray-300",
                                                children: "Dimension + Aspect Ratio",
                                            }),
                                        ],
                                    }),
                                    _jsxs("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            _jsx("input", {
                                                type: "radio",
                                                checked: "size" === h,
                                                onChange: () => p("size"),
                                                className: "text-blue-600",
                                            }),
                                            _jsx("span", { className: "text-sm dark:text-gray-300", children: "Width × Height" }),
                                        ],
                                    }),
                                    _jsxs("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            _jsx("input", {
                                                type: "radio",
                                                checked: "manual" === h,
                                                onChange: () => p("manual"),
                                                className: "text-blue-600",
                                            }),
                                            _jsx("span", { className: "text-sm dark:text-gray-300", children: "Manual Grid" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    "dimension" === h &&
                        _jsxs("div", {
                            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                            children: [
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Specify",
                                        }),
                                        _jsxs("select", {
                                            value: g,
                                            onChange: (e) => b(e.target.value),
                                            className:
                                                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600",
                                            children: [
                                                _jsx("option", { value: "width", children: "Width" }),
                                                _jsx("option", { value: "height", children: "Height" }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    children: [
                                        _jsxs("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: ["Target ", "width" === g ? "Width" : "Height"],
                                        }),
                                        _jsxs("div", {
                                            className: "flex gap-2",
                                            children: [
                                                _jsx("input", {
                                                    type: "number",
                                                    step: "0.1",
                                                    value: f,
                                                    onChange: (e) =>
                                                        y("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                                    className:
                                                        "flex-1 min-w-0 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                                }),
                                                _jsxs("select", {
                                                    value: j,
                                                    onChange: (e) => {
                                                        return (t = e.target.value), void U(t);
                                                        var t;
                                                    },
                                                    className:
                                                        "px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600",
                                                    children: [
                                                        _jsx("option", { value: "ft", children: "ft" }),
                                                        _jsx("option", { value: "m", children: "m" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "col-span-2",
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Target Aspect Ratio",
                                        }),
                                        _jsxs("div", {
                                            className: "flex flex-wrap gap-2 items-center",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        _jsx("input", {
                                                            type: "number",
                                                            value: v,
                                                            onChange: (e) =>
                                                                N(
                                                                    "" === e.target.value
                                                                        ? ""
                                                                        : parseFloat(e.target.value) || 0
                                                                ),
                                                            className:
                                                                "w-16 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                                        }),
                                                        _jsx("span", {
                                                            className: "font-bold truncate",
                                                            children: ":",
                                                        }),
                                                        _jsx("input", {
                                                            type: "number",
                                                            value: w,
                                                            onChange: (e) =>
                                                                C(
                                                                    "" === e.target.value
                                                                        ? ""
                                                                        : parseFloat(e.target.value) || 0
                                                                ),
                                                            className:
                                                                "w-16 px-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                                        }),
                                                    ],
                                                }),
                                                _jsx("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: [
                                                        { label: "16:9", w: 16, h: 9 },
                                                        { label: "16:10", w: 16, h: 10 },
                                                        { label: "4:3", w: 4, h: 3 },
                                                        { label: "21:9", w: 21, h: 9 },
                                                        { label: "2.39:1", w: 239, h: 100 },
                                                        { label: "3:4", w: 3, h: 4 },
                                                        { label: "9:16", w: 9, h: 16 },
                                                    ].map((e) =>
                                                        _jsx(
                                                            "button",
                                                            {
                                                                onClick: () => {
                                                                    N(e.w), C(e.h);
                                                                },
                                                                className:
                                                                    "px-2 py-1 text-xs rounded border transition-colors cursor-pointer " +
                                                                    (v === e.w && w === e.h
                                                                        ? "bg-blue-600 text-white border-blue-600"
                                                                        : "bg-gray-50 dark:bg-gray-900/50 hover:bg-blue-50 dark:bg-blue-900/20 border-gray-300 dark:border-gray-600"),
                                                                children: e.label,
                                                            },
                                                            e.label
                                                        )
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    "size" === h &&
                        _jsxs("div", {
                            className: "grid grid-cols-2 lg:grid-cols-3 gap-4",
                            children: [
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Total Width",
                                        }),
                                        _jsx("input", {
                                            type: "number",
                                            step: "0.1",
                                            value: M,
                                            onChange: (e) =>
                                                k("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                            className:
                                                "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Total Height",
                                        }),
                                        _jsx("input", {
                                            type: "number",
                                            step: "0.1",
                                            value: S,
                                            onChange: (e) =>
                                                R("" === e.target.value ? "" : parseFloat(e.target.value) || 0),
                                            className:
                                                "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    children: [
                                        _jsx("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Unit",
                                        }),
                                        _jsxs("select", {
                                            value: P,
                                            onChange: (e) => {
                                                return (t = e.target.value), void U(t);
                                                var t;
                                            },
                                            className:
                                                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600",
                                            children: [
                                                _jsx("option", { value: "ft", children: "Feet (ft)" }),
                                                _jsx("option", { value: "m", children: "Meters (m)" }),
                                                _jsx("option", { value: "in", children: "Inches (in)" }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsx("div", {
                                    className: "col-span-2 lg:col-span-3",
                                    children: _jsxs("p", {
                                        className: "text-sm text-gray-500 dark:text-gray-400",
                                        children: [
                                            "Aspect ratio will be automatically calculated: ",
                                            _jsxs("strong", { children: [(M / S).toFixed(2), ":1"] }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    "manual" === h &&
                        _jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                _jsxs("div", {
                                    children: [
                                        _jsxs("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: ["Columns: ", E],
                                        }),
                                        _jsx("input", {
                                            type: "range",
                                            min: "1",
                                            max: "20",
                                            value: E,
                                            onChange: (e) => F(parseInt(e.target.value)),
                                            className:
                                                "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    children: [
                                        _jsxs("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: ["Rows: ", D],
                                        }),
                                        _jsx("input", {
                                            type: "range",
                                            min: "1",
                                            max: "20",
                                            value: D,
                                            onChange: (e) => I(parseInt(e.target.value)),
                                            className:
                                                "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    _jsx("button", {
                        onClick: () => {
                            const t = q(_0x99bba9(e, 47.6, 1), r),
                                a = q(_0x99bba9(s, 26.8, 1), r);
                            let l, i;
                            if ("dimension" === h) {
                                const e = q(_0x99bba9(f, 10, 1), j),
                                    s = _0x99bba9(v, 16, 1) / _0x99bba9(w, 9, 1),
                                    r = t / a;
                                let n, o;
                                if ("width" === g) {
                                    n = Math.ceil(e / t);
                                    const r = (n * t) / s;
                                    o = Math.max(1, Math.round(r / a));
                                } else {
                                    o = Math.ceil(e / a);
                                    const r = o * a * s;
                                    n = Math.max(1, Math.round(r / t));
                                }
                                const d = n * o,
                                    c = Math.abs(s - r) / r > 0.3 ? 8 : 6;
                                let m = n,
                                    x = o,
                                    u = 1 / 0;
                                for (let r = Math.max(1, n - 2); r <= n + c; r++)
                                    for (let l = Math.max(1, o - 2); l <= o + c; l++) {
                                        const i = r * t,
                                            n = l * a;
                                        if ("width" === g && i < e) continue;
                                        if ("height" === g && n < e) continue;
                                        const o = i / n,
                                            c = r * l,
                                            h = c / d;
                                        let p = (Math.abs(o - s) / s) * 100;
                                        h > 1 &&
                                            (p +=
                                                h <= 1.5
                                                    ? 3 * (h - 1)
                                                    : h <= 2.5
                                                      ? 1.5 + 8 * (h - 1.5)
                                                      : h <= 4
                                                        ? 9.5 + 20 * (h - 2.5)
                                                        : 39.5 + 50 * (h - 4)),
                                            (p += 0.001 * c),
                                            p < u && ((u = p), (m = r), (x = l));
                                    }
                                (i = m), (l = x);
                            } else if ("size" === h) {
                                const e = q(_0x99bba9(M, 12, 1), P),
                                    s = q(_0x99bba9(S, 6.75, 1), P);
                                (i = Math.ceil(e / t)), (l = Math.ceil(s / a));
                            } else (l = D), (i = E);
                            (l = Math.max(1, l)), (i = Math.max(1, i)), I(l), F(i), $(l, i, t, a);
                        },
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Video Wall",
                    }),
                ],
            }),
            B &&
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        _jsxs("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "Adjust Configuration",
                                }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-2 gap-6",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                    children: [
                                                        "Columns: ",
                                                        _jsx("span", {
                                                            className: "font-bold text-blue-600",
                                                            children: E,
                                                        }),
                                                    ],
                                                }),
                                                _jsx("input", {
                                                    type: "range",
                                                    min: "1",
                                                    max: "20",
                                                    value: E,
                                                    onChange: (e) => W(D, parseInt(e.target.value)),
                                                    className:
                                                        "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between text-xs text-gray-400 mt-1",
                                                    children: [
                                                        _jsx("span", { children: "1" }),
                                                        _jsx("span", { children: "5" }),
                                                        _jsx("span", { children: "10" }),
                                                        _jsx("span", { children: "15" }),
                                                        _jsx("span", { children: "20" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            children: [
                                                _jsxs("label", {
                                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                    children: [
                                                        "Rows: ",
                                                        _jsx("span", {
                                                            className: "font-bold text-blue-600",
                                                            children: D,
                                                        }),
                                                    ],
                                                }),
                                                _jsx("input", {
                                                    type: "range",
                                                    min: "1",
                                                    max: "20",
                                                    value: D,
                                                    onChange: (e) => W(parseInt(e.target.value), E),
                                                    className:
                                                        "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                                }),
                                                _jsxs("div", {
                                                    className: "flex justify-between text-xs text-gray-400 mt-1",
                                                    children: [
                                                        _jsx("span", { children: "1" }),
                                                        _jsx("span", { children: "5" }),
                                                        _jsx("span", { children: "10" }),
                                                        _jsx("span", { children: "15" }),
                                                        _jsx("span", { children: "20" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-4 sm:p-6 border",
                            children: [
                                _jsx("h2", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-800 mb-4",
                                    children: "Video Wall Specifications",
                                }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-2 border-blue-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-blue-600 font-medium",
                                                    children: "Configuration",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-blue-700",
                                                    children: B.configuration,
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-blue-600",
                                                    children: [B.cols, " cols × ", B.rows, " rows"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-green-600 font-medium",
                                                    children: "Total Displays",
                                                }),
                                                _jsx("div", {
                                                    className: "text-3xl font-bold text-green-700",
                                                    children: B.totalDisplays,
                                                }),
                                                _jsx("div", {
                                                    className: "text-xs text-green-600",
                                                    children: "displays needed",
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-2 border-purple-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600 font-medium",
                                                    children: "Diagonal Size",
                                                }),
                                                _jsxs("div", {
                                                    className: "text-3xl font-bold text-purple-700",
                                                    children: [Math.round(B.diagonalIn), '"'],
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-purple-600",
                                                    children: [B.diagonalFt.toFixed(1), " ft"],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className:
                                                "bg-orange-50 p-4 rounded-lg border-2 border-orange-300 text-center",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-orange-600 font-medium",
                                                    children: "Actual Aspect Ratio",
                                                }),
                                                _jsx("div", {
                                                    className: "text-2xl font-bold text-orange-700",
                                                    children: B.aspectRatio,
                                                }),
                                                _jsxs("div", {
                                                    className: "text-xs text-orange-600",
                                                    children: ["≈ ", B.aspectDecimal, ":1"],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                "dimension" === h &&
                                    _jsx("div", {
                                        className: "p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-6",
                                        children: _jsxs("p", {
                                            className: "text-sm text-yellow-800 dark:text-yellow-200",
                                            children: [
                                                _jsx("strong", { children: "Note:" }),
                                                " Target aspect ratio was ",
                                                v,
                                                ":",
                                                w,
                                                ". The actual wall aspect ratio (",
                                                B.aspectRatio,
                                                ") may differ slightly because displays must be arranged in whole units.",
                                            ],
                                        }),
                                    }),
                                _jsxs("div", {
                                    className: "grid sm:grid-cols-2 gap-4 mb-6",
                                    children: [
                                        _jsxs("div", {
                                            className: "p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg overflow-hidden",
                                            children: [
                                                _jsx("h3", {
                                                    className: "font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                                    children: "Physical Dimensions",
                                                }),
                                                _jsxs("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Width:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [
                                                                        B.totalWidthFt.toFixed(2),
                                                                        " ft (",
                                                                        B.totalWidthM.toFixed(2),
                                                                        " m)",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Height:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [
                                                                        B.totalHeightFt.toFixed(2),
                                                                        " ft (",
                                                                        B.totalHeightM.toFixed(2),
                                                                        " m)",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Diagonal:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [
                                                                        B.diagonalFt.toFixed(2),
                                                                        " ft (",
                                                                        Math.round(B.diagonalIn),
                                                                        '")',
                                                                    ],
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
                                                _jsx("h3", {
                                                    className: "font-semibold text-gray-700 dark:text-gray-300 mb-3",
                                                    children: "Total Resolution",
                                                }),
                                                _jsxs("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Resolution:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [
                                                                        B.totalResWidth,
                                                                        " × ",
                                                                        B.totalResHeight,
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Total Pixels:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [(B.totalPixels / 1e6).toFixed(2), " MP"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between min-w-0",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Aspect Ratio:",
                                                                }),
                                                                _jsx("span", {
                                                                    className: "font-medium",
                                                                    children: B.aspectRatio,
                                                                }),
                                                            ],
                                                        }),
                                                        B.bezelGapMM > 0 &&
                                                            _jsxs("div", {
                                                                className:
                                                                    "flex justify-between min-w-0 pt-2 border-t border-gray-200 dark:border-gray-700 mt-2",
                                                                children: [
                                                                    _jsx("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Bezel Gaps:",
                                                                    }),
                                                                    _jsxs("span", {
                                                                        className: "font-medium text-orange-600",
                                                                        children: [
                                                                            "+",
                                                                            B.totalBezelWidthMM,
                                                                            "×",
                                                                            B.totalBezelHeightMM,
                                                                            " mm",
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800",
                                            children: [
                                                _jsx("h3", {
                                                    className: "font-semibold text-purple-800 dark:text-purple-200 mb-3",
                                                    children: "Viewing Distance (AVIXA DISCAS)",
                                                }),
                                                _jsxs("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Pixel Pitch:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium",
                                                                    children: [B.pixelPitchMM, " mm"],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Analytical (data/text):",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium text-red-600",
                                                                    children: [
                                                                        "≥ ",
                                                                        B.minViewingAnalyticalFt,
                                                                        "' / ",
                                                                        B.minViewingAnalyticalM,
                                                                        "m",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Basic (presentations):",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium text-yellow-600",
                                                                    children: [
                                                                        "≥ ",
                                                                        B.minViewingBasicFt,
                                                                        "' / ",
                                                                        B.minViewingBasicM,
                                                                        "m",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "text-gray-600 dark:text-gray-400",
                                                                    children: "Video content:",
                                                                }),
                                                                _jsxs("span", {
                                                                    className: "font-medium text-green-600",
                                                                    children: [
                                                                        "≥ ",
                                                                        B.minViewingVideoFt,
                                                                        "' / ",
                                                                        B.minViewingVideoM,
                                                                        "m",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsx("p", {
                                                    className: "text-xs text-purple-600 mt-2",
                                                    children:
                                                        "Minimum viewing distances for comfortable viewing without visible pixels",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "p-4 bg-gray-900 rounded-lg",
                                    children: [
                                        _jsx("h3", {
                                            className: "font-semibold text-white mb-3 text-center",
                                            children: "Visual Preview",
                                        }),
                                        _jsx("div", {
                                            className: "flex justify-center items-center px-2 sm:px-4",
                                            children: _jsx("div", {
                                                className: "grid gap-0.5 sm:gap-1 p-2 bg-gray-800 rounded w-full",
                                                style: {
                                                    gridTemplateColumns: `repeat(${B.cols}, 1fr)`,
                                                    maxWidth: `min(100%, ${Math.min(600, 80 * B.cols)}px)`,
                                                    aspectRatio: `${B.cols * i} / ${B.rows * o}`,
                                                },
                                                children: Array.from({ length: B.totalDisplays }).map((e, t) =>
                                                    _jsx(
                                                        "div",
                                                        {
                                                            className:
                                                                "bg-blue-50 dark:bg-blue-900/200 rounded-sm flex items-center justify-center text-white font-bold border border-blue-400 overflow-hidden",
                                                            style: {
                                                                aspectRatio: `${i} / ${o}`,
                                                                fontSize: `clamp(8px, ${Math.min(2, 20 / Math.max(B.cols, B.rows))}vw, 14px)`,
                                                            },
                                                            children: B.totalDisplays <= 50 ? t + 1 : "",
                                                        },
                                                        t
                                                    )
                                                ),
                                            }),
                                        }),
                                        _jsxs("p", {
                                            className: "text-center text-gray-400 text-xs mt-3",
                                            children: [
                                                B.cols,
                                                " columns × ",
                                                B.rows,
                                                " rows = ",
                                                B.totalDisplays,
                                                " displays",
                                            ],
                                        }),
                                        _jsxs("p", {
                                            className: "text-center text-gray-500 dark:text-gray-400 text-xs mt-1",
                                            children: [
                                                B.totalWidthFt.toFixed(1),
                                                "' × ",
                                                B.totalHeightFt.toFixed(1),
                                                "' (",
                                                B.aspectRatio,
                                                ")",
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
