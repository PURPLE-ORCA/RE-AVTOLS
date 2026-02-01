import { _jsx, _jsxs, ResetConfirmModal } from '../utils.js';

const { useState, useEffect, useRef } = React;

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
                        className: "text-3xl font-bold text-gray-900",
                        children: "AVoIP Bandwidth Calculator",
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
                    a("1920x1080"), l(7), n(10), d("4:2:2"), m(1), u(1), p(8), b(null), y(!1);
                },
                onCancel: () => y(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700", children: "What this tool does:" }),
                        " Calculates the network bandwidth required for uncompressed or compressed video streams over IP. Enter your video resolution, frame rate, color settings, and number of streams to determine the total bandwidth needed and recommended network infrastructure.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200",
                children: [
                    _jsx("h2", {
                        className: "text-sm font-semibold text-blue-800 mb-2",
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
                className: "bg-white rounded-xl shadow-md p-8 mb-8 border",
                children: [
                    _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Video Signal Configuration" }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Resolution",
                                    }),
                                    _jsxs("select", {
                                        value: s,
                                        onChange: (e) => a(e.target.value),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
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
                                        className: "block text-sm font-medium text-gray-700 mb-2",
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
                                            "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
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
                                                ? "text-green-600 bg-green-50"
                                                : "NTSC" === v
                                                  ? "text-blue-600 bg-blue-50"
                                                  : "Film" === v
                                                    ? "text-amber-600 bg-amber-50"
                                                    : "text-purple-600 bg-purple-50"),
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
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Color Bit Depth",
                                    }),
                                    _jsxs("select", {
                                        value: i,
                                        onChange: (e) => n(Number(e.target.value)),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
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
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Chroma Subsampling",
                                    }),
                                    _jsx("select", {
                                        value: o,
                                        onChange: (e) => d(e.target.value),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
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
                                    _jsx("p", { className: "text-xs text-gray-500 mt-1", children: _.description }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Compression",
                                    }),
                                    _jsxs("select", {
                                        value: c,
                                        onChange: (e) => m(Number(e.target.value)),
                                        className:
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
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
                                        className: "text-xs text-gray-500 mt-1",
                                        children:
                                            "Compression ratio = original size ÷ compressed size. Higher ratios = smaller files but more quality loss.",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
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
                                            "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "IP headers, encapsulation (typically 3-10%)",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "md:col-span-2",
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: ["Number of Streams: ", x],
                                    }),
                                    _jsx("input", {
                                        type: "range",
                                        min: "1",
                                        max: "32",
                                        value: x,
                                        onChange: (e) => u(Number(e.target.value)),
                                        className:
                                            "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
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
                            "mt-6 p-4 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 rounded-lg border border-gray-200",
                        children: [
                            _jsx("h3", {
                                className: "text-sm font-semibold text-gray-700 mb-3",
                                children: "📺 Broadcast Standards Frame Rates",
                            }),
                            _jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-4 gap-3 text-xs",
                                children: [
                                    _jsxs("div", {
                                        className: "bg-white p-3 rounded-lg border border-blue-200",
                                        children: [
                                            _jsx("p", {
                                                className: "font-semibold text-blue-600 mb-2",
                                                children: "🇺🇸 ATSC (Americas/Korea)",
                                            }),
                                            _jsxs("ul", {
                                                className: "text-gray-600 space-y-1",
                                                children: [
                                                    _jsx("li", { children: "• 23.976/24 fps - Film" }),
                                                    _jsx("li", { children: "• 29.97/30 fps - SD/HD" }),
                                                    _jsx("li", { children: "• 59.94/60 fps - Sports" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white p-3 rounded-lg border border-green-200",
                                        children: [
                                            _jsx("p", {
                                                className: "font-semibold text-green-600 mb-2",
                                                children: "🇪🇺 DVB (Europe/Africa/ME)",
                                            }),
                                            _jsxs("ul", {
                                                className: "text-gray-600 space-y-1",
                                                children: [
                                                    _jsx("li", { children: "• 25 fps - SD/HD" }),
                                                    _jsx("li", { children: "• 50 fps - Sports/HFR" }),
                                                    _jsx("li", { children: "• 100 fps - Premium" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white p-3 rounded-lg border border-orange-200",
                                        children: [
                                            _jsx("p", {
                                                className: "font-semibold text-orange-600 mb-2",
                                                children: "🇯🇵 ISDB (Japan/S.America)",
                                            }),
                                            _jsxs("ul", {
                                                className: "text-gray-600 space-y-1",
                                                children: [
                                                    _jsx("li", { children: "• 29.97 fps - SD" }),
                                                    _jsx("li", { children: "• 59.94 fps - HD" }),
                                                    _jsx("li", { children: "• 119.88 fps - 8K" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "bg-white p-3 rounded-lg border border-purple-200",
                                        children: [
                                            _jsx("p", {
                                                className: "font-semibold text-purple-600 mb-2",
                                                children: "🇨🇳 DTMB (China/Cuba/Pak)",
                                            }),
                                            _jsxs("ul", {
                                                className: "text-gray-600 space-y-1",
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
                    className: "bg-white rounded-xl shadow-md p-8 border",
                    children: [
                        _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Bandwidth Results" }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-4 gap-4 mb-6",
                            children: [
                                _jsxs("div", {
                                    className: "bg-blue-50 p-5 rounded-lg border-2 border-blue-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-xs text-gray-600",
                                            children: "Raw Uncompressed",
                                        }),
                                        _jsx("div", {
                                            className: "text-2xl font-bold text-blue-700",
                                            children:
                                                g.rawBitrateGbps >= 1
                                                    ? `${g.rawBitrateGbps} Gbps`
                                                    : `${g.rawBitrateMbps} Mbps`,
                                        }),
                                        _jsx("div", { className: "text-xs text-gray-500", children: "per stream" }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-green-50 p-5 rounded-lg border-2 border-green-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-xs text-gray-600",
                                            children: "Per Stream (w/ overhead)",
                                        }),
                                        _jsxs("div", {
                                            className: "text-2xl font-bold text-green-700",
                                            children: [g.perStreamBitrate, " Mbps"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: c > 1 ? `${c}:1 compression` : "uncompressed",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-purple-50 p-5 rounded-lg border-2 border-purple-200",
                                    children: [
                                        _jsxs("div", {
                                            className: "text-xs text-gray-600",
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
                                    className: "bg-yellow-50 p-5 rounded-lg border-2 border-yellow-200",
                                    children: [
                                        _jsx("div", {
                                            className: "text-xs text-gray-600",
                                            children: "Recommended Port",
                                        }),
                                        _jsx("div", {
                                            className: "text-2xl font-bold text-yellow-700",
                                            children: g.switchType,
                                        }),
                                        _jsxs("div", {
                                            className: "text-xs text-gray-500",
                                            children: [g.utilization, "% utilization"],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsxs("div", {
                            className: "p-4 bg-gray-50 rounded-lg mb-6",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-gray-700 mb-3",
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
                                                            className: "text-gray-500",
                                                            children: "Resolution:",
                                                        }),
                                                        " ",
                                                        _jsx("strong", { children: s }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500",
                                                            children: "Total Pixels:",
                                                        }),
                                                        " ",
                                                        _jsx("strong", { children: g.totalPixels.toLocaleString() }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500",
                                                            children: "Frame Rate:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [j.value, " fps"] }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500",
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
                                                            className: "text-gray-500",
                                                            children: "Color Depth:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [i, "-bit"] }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500",
                                                            children: "Chroma Subsampling:",
                                                        }),
                                                        " ",
                                                        _jsx("strong", { children: o }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500",
                                                            children: "Bits per Pixel:",
                                                        }),
                                                        " ",
                                                        _jsxs("strong", { children: [g.bitsPerPixel, " bpp"] }),
                                                    ],
                                                }),
                                                _jsxs("p", {
                                                    children: [
                                                        _jsx("span", {
                                                            className: "text-gray-500",
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
                                    className: "mt-4 pt-4 border-t border-gray-200",
                                    children: [
                                        _jsxs("p", {
                                            className: "text-xs text-gray-600 font-mono",
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
                                                className: "text-xs text-gray-600 font-mono mt-1",
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
                            className: "p-4 bg-yellow-50 rounded-lg border border-yellow-200",
                            children: [
                                _jsx("h3", {
                                    className: "font-semibold text-yellow-800 mb-2",
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

export default BandwidthCalculator;
