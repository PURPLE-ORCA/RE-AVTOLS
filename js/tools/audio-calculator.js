// Audio Data Rate Calculator Tool
// Dependencies: React, Core (global)

function calculateAudioDataRate(e, t, s, a) {
    var r = e * t * s,
        l = r * a;
    return {
        bitrateMbps: Math.round((l / 1e6) * 100) / 100,
        bitrateGbps: Math.round((l / 1e9) * 1e3) / 1e3,
        streamSizeMB: Math.round((l / 8 / 1024 / 1024) * 60 * 100) / 100,
    };
}

function AudioCalculator() {
    const [e, t] = useState(48e3),
        [s, a] = useState(24),
        [r, l] = useState(64),
        [i, n] = useState(null),
        [o, d] = useState(!1);
    return _jsxs("div", {
        className: "max-w-4xl mx-auto px-6 py-8",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    _jsx("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Network Audio Bandwidth Calculator",
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
                    t(48e3), a(24), l(64), n(null), d(!1);
                },
                onCancel: () => d(!1),
            }),
            _jsx("div", {
                className: "bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700",
                children: _jsxs("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        _jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "What this tool does:" }),
                        " Calculates the network bandwidth required for uncompressed multi-channel audio (Dante, AES67, AVB). Helps plan network switch capacity for audio-over-IP systems.",
                    ],
                }),
            }),
            _jsxs("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 mb-8 border",
                children: [
                    _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Audio Stream Configuration" }),
                    _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs("div", {
                                children: [
                                    _jsx("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Sample Rate",
                                    }),
                                    _jsxs("select", {
                                        value: e,
                                        onChange: (e) => t(Number(e.target.value)),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                        children: [
                                            _jsx("option", { value: "44100", children: "44.1 kHz (CD Quality)" }),
                                            _jsx("option", { value: "48000", children: "48 kHz (Pro Video/Dante)" }),
                                            _jsx("option", { value: "88200", children: "88.2 kHz (High Res)" }),
                                            _jsx("option", { value: "96000", children: "96 kHz (Studio Master)" }),
                                            _jsx("option", { value: "192000", children: "192 kHz (Audiophile)" }),
                                        ],
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
                                        value: s,
                                        onChange: (e) => a(Number(e.target.value)),
                                        className:
                                            "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
                                        children: [
                                            _jsx("option", { value: "16", children: "16-bit (CD Standard)" }),
                                            _jsx("option", { value: "24", children: "24-bit (Pro Audio/Dante)" }),
                                            _jsx("option", { value: "32", children: "32-bit (Float/High Dynamic)" }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "md:col-span-2",
                                children: [
                                    _jsxs("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: ["Channel Count: ", r],
                                    }),
                                    _jsx("input", {
                                        type: "range",
                                        min: "1",
                                        max: "512",
                                        value: r,
                                        onChange: (e) => l(Number(e.target.value)),
                                        className:
                                            "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                    }),
                                    _jsxs("div", {
                                        className: "flex justify-between text-xs text-gray-400 mt-1",
                                        children: [
                                            _jsx("span", { children: "2 (Stereo)" }),
                                            _jsx("span", { children: "64 (Dante)" }),
                                            _jsx("span", { children: "128" }),
                                            _jsx("span", { children: "256" }),
                                            _jsx("span", { children: "512 (MADI/AVB)" }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("button", {
                        onClick: () => n(calculateAudioDataRate(e, s, r, 1)),
                        className:
                            "w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer",
                        children: "Calculate Audio Bandwidth",
                    }),
                ],
            }),
            i &&
                _jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-950/20 p-8 border",
                    children: [
                        _jsx("h2", { className: "text-xl font-semibold mb-6", children: "Bandwidth Results" }),
                        _jsxs("div", {
                            className: "grid md:grid-cols-3 gap-6",
                            children: [
                                _jsxs("div", {
                                    className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 text-center",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                            children: "Total Bitrate",
                                        }),
                                        _jsxs("div", {
                                            className: "text-3xl font-bold text-blue-700",
                                            children: [i.bitrateMbps, " Mbps"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                            children: "Uncompressed",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800 text-center",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                            children: "Gigabit Link Usage",
                                        }),
                                        _jsxs("div", {
                                            className: "text-3xl font-bold text-purple-700",
                                            children: [Math.round((i.bitrateMbps / 1e3) * 100), "%"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                            children: "of 1GbE Port",
                                        }),
                                    ],
                                }),
                                _jsxs("div", {
                                    className: "bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-center",
                                    children: [
                                        _jsx("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                            children: "Storage per Minute",
                                        }),
                                        _jsxs("div", {
                                            className: "text-3xl font-bold text-gray-700 dark:text-gray-300",
                                            children: [i.streamSizeMB, " MB"],
                                        }),
                                        _jsx("div", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                            children: "Recording size",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _jsx("div", {
                            className: "mt-6 text-sm text-gray-600 dark:text-gray-400 text-center",
                            children:
                                "Note: This calculation represents raw audio data. Protocol overhead (IP/UDP/RTP) typically adds 5-10% to the total bandwidth.",
                        }),
                    ],
                }),
        ],
    });
}
