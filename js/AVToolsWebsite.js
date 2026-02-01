import { _jsx, _jsxs } from './utils.js';
import BandwidthCalculator from './calculators/BandwidthCalculator.js';
import ConduitCalculator from './calculators/ConduitCalculator.js';
import AudioCalculator from './calculators/AudioCalculator.js';
import ProjectorCalculator from './calculators/ProjectorCalculator.js';
import POECalculator from './calculators/POECalculator.js';
import BrightnessCalculator from './calculators/BrightnessCalculator.js';
import ViewingAngleCalculator from './calculators/ViewingAngleCalculator.js';
import DvLEDCalculator from './calculators/DvLEDCalculator.js';
import VideoWallCalculator from './calculators/VideoWallCalculator.js';
import CoolingCalculator from './calculators/CoolingCalculator.js';
import SpeakerCalculator from './calculators/SpeakerCalculator.js';
import DisplaySizeCalculator from './calculators/DisplaySizeCalculator.js';
import CameraCalculator from './calculators/CameraCalculator.js';
import DSPCalculator from './calculators/DSPCalculator.js';
import RackBuilderCalculator from './calculators/RackBuilderCalculator.js';
import VideoWallBuilderCalculator from './calculators/VideoWallBuilderCalculator.js';
const { useState, useEffect, useRef } = React;

function AVToolsWebsite() {
    const [e, t] = useState("home"),
        [s, a] = useState(null),
        [r, l] = useState("all"),
        i = {
            bandwidth: "bandwidth-calculator",
            projector: "projector-calculator",
            brightness: "brightness-calculator",
            "viewing-angle": "viewing-angle-calculator",
            dvled: "dvled-calculator",
            videowall: "videowall-controller",
            "videowall-builder": "videowall-builder",
            "display-size": "display-size-calculator",
            camera: "camera-calculator",
            audio: "audio-calculator",
            speaker: "speaker-calculator",
            dsp: "dsp-calculator",
            conduit: "conduit-calculator",
            poe: "poe-calculator",
            cooling: "cooling-calculator",
            "rack-builder": "rack-builder",
        },
        o = () => {
            window.location.href = "/";
        };
    useEffect(() => {
        console.log('[AVToolsWebsite] useEffect running, URL:', window.location.href);
        "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0);
        const toolParam = new URLSearchParams(window.location.search).get("tool");
        console.log('[AVToolsWebsite] toolParam:', toolParam, 'i object:', i);
        if (toolParam && i[toolParam]) {
            console.log('[AVToolsWebsite] Setting tool:', toolParam);
            t("tool");
            a(toolParam);
        } else {
            console.log('[AVToolsWebsite] Setting home');
            t("home");
            a(null);
        }
    }, []),
        useEffect(() => {
            const t = "AV Tools - Professional AV/IT Calculators | AVIXA & IEC Compliant";
            if (s && "tool" === e) {
                let e = "";
                Object.values(d).forEach((t) => {
                    const a = t.tools.find((e) => e.id === s);
                    a && (e = a.name);
                }),
                    e && (document.title = t + " - " + e);
            } else document.title = t;
        }, [s, e]);
    const d = {
            video: {
                name: "Video",
                icon: "🎬",
                color: "blue",
                tools: [
                    {
                        id: "bandwidth",
                        name: "AVoIP Bandwidth Calculator",
                        icon: "icons/AVoIP_Bandwidth.svg",
                        desc: "Calculate bandwidth for AV over IP systems",
                    },
                    {
                        id: "projector",
                        name: "Projector Brightness & Throw",
                        icon: "icons/Projector_Throw___brightness.svg",
                        desc: "Calculate projector brightness and throw distance",
                    },
                    {
                        id: "brightness",
                        name: "Display Brightness Calculator",
                        icon: "icons/Display_Brightness.svg",
                        desc: "Calculate required display brightness",
                    },
                    {
                        id: "viewing-angle",
                        name: "Display Viewing Angle",
                        icon: "icons/Display_viewing_angle.svg",
                        desc: "Calculate optimal viewing angles (AVIXA)",
                    },
                    {
                        id: "dvled",
                        name: "DvLED Pixel Pitch Calculator",
                        icon: "icons/DvLED_Pixel_Pitch.svg",
                        desc: "Determine optimal LED pixel pitch",
                    },
                    {
                        id: "videowall",
                        name: "Video Wall Controller",
                        icon: "icons/Video_Wall_Controller.svg",
                        desc: "Calculate video wall configurations",
                    },
                    {
                        id: "videowall-builder",
                        name: "Video Wall Builder",
                        icon: "icons/Videowall-builder.svg",
                        desc: "Design video walls with display configuration and sizing",
                    },
                    {
                        id: "display-size",
                        name: "Display Size Calculator",
                        icon: "icons/Display_Size.svg",
                        desc: "Calculate optimal display size (BDM/ADM)",
                    },
                    {
                        id: "camera",
                        name: "Camera Distance Calculator",
                        icon: "icons/Camera_Distance.svg",
                        desc: "Calculate camera placement with DORI standards (IEC 62676-4)",
                    },
                ],
            },
            audio: {
                name: "Audio",
                icon: "🔊",
                color: "green",
                tools: [
                    {
                        id: "audio",
                        name: "Audio Calculator",
                        icon: "icons/Audio_Data_rate_Bandwidth.svg",
                        desc: "Data rate, Dante/AES67 bandwidth, and wavelength calculations",
                    },
                    {
                        id: "speaker",
                        name: "Speaker Design Calculator",
                        icon: "icons/Speaker_Design.svg",
                        desc: "EPR, amplifier sizing, and ceiling layout (AVIXA)",
                        advanced: !0,
                    },
                    {
                        id: "dsp",
                        name: "DSP System Calculator",
                        icon: "icons/DSP_Calculator.svg",
                        desc: "Professional DSP design: gain, AEC, latency, matrix (AVIXA/IEC)",
                        advanced: !0,
                    },
                ],
            },
            it: {
                name: "IT Infrastructure",
                icon: "🖧",
                color: "purple",
                tools: [
                    {
                        id: "conduit",
                        name: "Cable Conduit Capacity",
                        icon: "icons/Cable_Conduit_Capacity.svg",
                        desc: "Calculate required conduit size for cable runs",
                    },
                    {
                        id: "poe",
                        name: "POE Budget Calculator",
                        icon: "icons/POE_Calculator.svg",
                        desc: "Plan power over ethernet requirements",
                    },
                    {
                        id: "cooling",
                        name: "Rack Cooling Calculator",
                        icon: "icons/Rack_cooling.svg",
                        desc: "Calculate cooling requirements for equipment rooms",
                    },
                    {
                        id: "rack-builder",
                        name: "Rack Builder",
                        icon: "icons/Rack-builder.svg",
                        desc: "Design equipment racks with AVIXA best practices",
                    },
                ],
            },
        },
        c = () => Object.values(d).flatMap((e) => e.tools),
        m = (e) => {
            const t = {
                blue: {
                    bg: "bg-blue-50",
                    border: "border-blue-200",
                    text: "text-blue-700",
                    hover: "hover:bg-blue-100",
                },
                green: {
                    bg: "bg-green-50",
                    border: "border-green-200",
                    text: "text-green-700",
                    hover: "hover:bg-green-100",
                },
                purple: {
                    bg: "bg-purple-50",
                    border: "border-purple-200",
                    text: "text-purple-700",
                    hover: "hover:bg-purple-100",
                },
            };
            return t[e] || t.blue;
        },
        x = () => {
            const e = "all" === r ? c() : d[r]?.tools || [];
            return _jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12",
                children: [
                    _jsxs("div", {
                        className: "text-center mb-8 sm:mb-12",
                        children: [
                            _jsx("h1", {
                                className:
                                    "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent leading-tight",
                                children: "Professional AV/IT Calculation Tools",
                            }),
                            _jsx("p", {
                                className: "text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2",
                                children:
                                    "Complete suite of precision calculators for audiovisual and IT professionals. Built on AVIXA standards.",
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2",
                        children: [
                            _jsxs("button", {
                                onClick: () => l("all"),
                                className:
                                    "px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer " +
                                    ("all" === r
                                        ? "bg-gray-900 text-white shadow-lg"
                                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"),
                                children: ["All Tools (", c().length, ")"],
                            }),
                            Object.entries(d).map(([e, t]) => {
                                const s = m(t.color);
                                return _jsxs(
                                    "button",
                                    {
                                        onClick: () => l(e),
                                        className:
                                            "px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer flex items-center gap-1 sm:gap-2 " +
                                            (r === e
                                                ? `${s.bg} ${s.text} ${s.border} border-2 shadow-md`
                                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"),
                                        children: [
                                            _jsx("span", { children: t.icon }),
                                            _jsx("span", { className: "hidden md:inline", children: t.name }),
                                            " (",
                                            t.tools.length,
                                            ")",
                                        ],
                                    },
                                    e
                                );
                            }),
                        ],
                    }),
                    "all" !== r &&
                        _jsx("div", {
                            className: `text-center mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl ${m(d[r].color).bg}`,
                            children: _jsxs("h2", {
                                className: `text-xl sm:text-2xl font-semibold ${m(d[r].color).text}`,
                                children: [d[r].icon, " ", d[r].name, " Tools"],
                            }),
                        }),
                    _jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6",
                        children: e.map((e) => {
                            const s = Object.entries(d).find(([t, s]) => s.tools.some((t) => t.id === e.id)),
                                r = m(s ? s[1].color : "blue"),
                                l = s ? s[1].name : "";
                            return _jsxs(
                                "a",
                                {
                                     href: "?tool=" + e.id,
                                    className:
                                        "bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all text-left group relative overflow-visible flex flex-col cursor-pointer no-underline",
                                    children: [
                                        e.advanced &&
                                            _jsx("span", {
                                                className:
                                                    "absolute -top-2 -right-2 text-xs px-2 sm:px-3 py-1 rounded-full bg-red-600 text-white font-bold shadow-lg z-10",
                                                children: "Advanced",
                                            }),
                                        _jsx("div", {
                                            className: "flex justify-end mb-2 sm:mb-3",
                                            children: _jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${r.bg} ${r.text}`,
                                                children: l,
                                            }),
                                        }),
                                        _jsx("div", {
                                            className: "flex justify-center items-center mb-3 sm:mb-4",
                                            children: _jsx("img", {
                                                src: e.icon,
                                                alt: e.name,
                                                className: "w-12 h-12 sm:w-16 sm:h-16 object-contain",
                                            }),
                                        }),
                                        _jsx("h3", {
                                            className:
                                                "text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center",
                                            children: e.name,
                                        }),
                                        _jsx("p", {
                                            className: "text-xs sm:text-sm text-gray-600 text-center flex-grow",
                                            children: e.desc,
                                        }),
                                    ],
                                },
                                e.id
                            );
                        }),
                    }),
                    _jsxs("div", {
                        className: "mt-10 sm:mt-16 grid grid-cols-3 gap-2 sm:gap-6 max-w-2xl mx-auto",
                        children: [
                            _jsxs("div", {
                                className: "text-center p-3 sm:p-6 bg-white rounded-xl shadow-sm border",
                                children: [
                                    _jsx("div", {
                                        className: "text-2xl sm:text-3xl font-bold text-blue-600",
                                        children: c().length,
                                    }),
                                    _jsx("div", {
                                        className: "text-xs sm:text-sm text-gray-600",
                                        children: "Calculators",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "text-center p-3 sm:p-6 bg-white rounded-xl shadow-sm border",
                                children: [
                                    _jsx("div", {
                                        className: "text-2xl sm:text-3xl font-bold text-green-600",
                                        children: "3",
                                    }),
                                    _jsx("div", {
                                        className: "text-xs sm:text-sm text-gray-600",
                                        children: "Categories",
                                    }),
                                ],
                            }),
                            _jsxs("a", {
                                href: "https://www.avixa.org/standards",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                    "text-center p-3 sm:p-6 bg-white rounded-xl shadow-sm border hover:shadow-md hover:border-purple-300 transition-all cursor-pointer block",
                                children: [
                                    _jsx("div", {
                                        className: "text-2xl sm:text-3xl font-bold text-purple-600",
                                        children: "AVIXA",
                                    }),
                                    _jsx("div", {
                                        className: "text-xs sm:text-sm text-gray-600",
                                        children: "Standards",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsx("div", {
                        className: "mt-10 sm:mt-16 text-center px-2",
                        children: _jsxs("div", {
                            className:
                                "bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-blue-100 max-w-3xl mx-auto",
                            children: [
                                _jsx("div", { className: "text-4xl sm:text-5xl mb-3 sm:mb-4", children: "🚀" }),
                                _jsx("h2", {
                                    className: "text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3",
                                    children: "More Tools Coming Soon",
                                }),
                                _jsx("p", {
                                    className: "text-sm sm:text-base text-gray-600 max-w-xl mx-auto",
                                    children:
                                        "We're continuously expanding our toolkit with new professional calculators. Stay tuned for additional AVIXA-compliant tools to help streamline your AV/IT projects.",
                                }),
                            ],
                        }),
                    }),
                    _jsx("div", {
                        className: "mt-10 sm:mt-16 px-2",
                        children: _jsx("div", {
                            className: "bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6 max-w-4xl mx-auto",
                            children: _jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    _jsx("span", { className: "text-xl sm:text-2xl", children: "⚠️" }),
                                    _jsxs("div", {
                                        children: [
                                            _jsx("h3", {
                                                className: "font-semibold text-amber-800 text-sm sm:text-base mb-1",
                                                children: "Important Disclaimer",
                                            }),
                                            _jsx("p", {
                                                className: "text-xs sm:text-sm text-amber-700 leading-relaxed",
                                                children:
                                                    "These calculators are based on best practices and formulas provided by AVIXA and industry standards leaders. For any project design, please verify all results and final decisions with qualified Consultants, Senior Design Teams, and/or Manufacturers.",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                ],
            });
        };
    return _jsxs("div", {
        className: "min-h-screen bg-gray-50 flex flex-col",
        children: [
            _jsx("style", {
                children:
                    '\n        button { cursor: pointer !important; }\n        [role="button"] { cursor: pointer !important; }\n        a { cursor: pointer !important; }\n        select { cursor: pointer !important; }\n        input[type="range"] { cursor: pointer !important; }\n        input[type="checkbox"] { cursor: pointer !important; }\n        input[type="radio"] { cursor: pointer !important; }\n        label { cursor: pointer !important; }\n        .cursor-pointer { cursor: pointer !important; }\n        input[type="number"] { cursor: text !important; }\n        input[type="text"] { cursor: text !important; }\n        textarea { cursor: text !important; }\n        \n        /* Prevent layout shifts and scroll jumping */\n        * { overflow-anchor: none; }\n        html { overflow-anchor: none; scroll-behavior: auto; }\n        \n        /* Stable containers for dynamic content */\n        .calculator-container { \n          min-height: 100vh;\n        }\n        \n        /* Floating toolbar styles */\n        .floating-toolbar-portal {\n          position: fixed !important;\n          bottom: 24px !important;\n          left: 50% !important;\n          transform: translateX(-50%) !important;\n          z-index: 99999 !important;\n          pointer-events: auto !important;\n        }\n        \n        /* Error message progress bar animation */\n        @keyframes shrink {\n          from { width: 100%; }\n          to { width: 0%; }\n        }\n        \n        /* Reset confirmation modal animation */\n        @keyframes modalFadeIn {\n          from {\n            opacity: 0;\n            transform: scale(0.95) translateY(-10px);\n          }\n          to {\n            opacity: 1;\n            transform: scale(1) translateY(0);\n          }\n        }\n        \n        /* Marquee animation for long rack names */\n        @keyframes marquee {\n          0%, 10% { transform: translateX(0); }\n          90%, 100% { transform: translateX(calc(-100% + 100p...
            }),
            _jsx(
                () =>
                    _jsx("header", {
                        className: "bg-white shadow-sm border-b sticky top-0 z-50",
                        children: _jsx("nav", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4",
                            children: _jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    _jsx("button", {
                                        onClick: () => o(),
                                        className:
                                            "flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer",
                                        children: _jsx("img", {
                                            src: "AV_TOOLS_LOGO.svg",
                                            alt: "AV Tools Logo",
                                            className: "h-8 sm:h-10 w-auto",
                                        }),
                                    }),
                                    _jsx("div", {
                                        className: "flex gap-4 sm:gap-6",
                                        children:
                                            "tool" === e &&
                                            _jsxs("button", {
                                                onClick: () => o(),
                                                className:
                                                    "text-sm sm:text-base font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1 sm:gap-2 cursor-pointer",
                                                children: [
                                                    _jsx("span", { children: "←" }),
                                                    " ",
                                                    _jsx("span", {
                                                        className: "hidden sm:inline",
                                                        children: "Back to",
                                                    }),
                                                    " Tools",
                                                ],
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                {}
            ),
            _jsxs("main", {
                className: "flex-grow calculator-container",
                children: [
                    "home" === e && _jsx(x, {}),
                    "tool" === e &&
                        _jsx(
                            () =>
                                ({
                                    bandwidth: _jsx(BandwidthCalculator, {}),
                                    conduit: _jsx(ConduitCalculator, {}),
                                    audio: _jsx(AudioCalculator, {}),
                                    projector: _jsx(ProjectorCalculator, {}),
                                    poe: _jsx(POECalculator, {}),
                                    brightness: _jsx(BrightnessCalculator, {}),
                                    "viewing-angle": _jsx(ViewingAngleCalculator, {}),
                                    dvled: _jsx(DvLEDCalculator, {}),
                                    videowall: _jsx(VideoWallCalculator, {}),
                                    "videowall-builder": _jsx(VideoWallBuilderCalculator, {}),
                                    cooling: _jsx(CoolingCalculator, {}),
                                    speaker: _jsx(SpeakerCalculator, {}),
                                    "display-size": _jsx(DisplaySizeCalculator, {}),
                                    camera: _jsx(CameraCalculator, {}),
                                    dsp: _jsx(DSPCalculator, {}),
                                    "rack-builder": _jsx(RackBuilderCalculator, {}),
                                })[s] ||
                                _jsxs("div", {
                                    className: "max-w-2xl mx-auto px-6 py-16 text-center",
                                    children: [
                                        _jsx("div", { className: "text-6xl mb-4", children: "🔍" }),
                                        _jsx("h2", {
                                            className: "text-2xl font-bold text-gray-900 mb-2",
                                            children: "Tool Not Found",
                                        }),
                                        _jsx("p", {
                                            className: "text-gray-600 mb-6",
                                            children: "The requested calculator could not be found.",
                                        }),
                                        _jsx("button", {
                                            onClick: () => o(),
                                            className:
                                                "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer",
                                            children: "Back to All Tools",
                                        }),
                                    ],
                                }),
                            {}
                        ),
                    "tools" === e && _jsx(x, {}),
                ],
            }),
            _jsx(
                () =>
                    _jsx("footer", {
                        className: "bg-gradient-to-r from-blue-600 to-blue-800 mt-10 sm:mt-16",
                        children: _jsx("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8",
                            children: _jsxs("div", {
                                className: "flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between",
                                children: [
                                    _jsx("div", {
                                        className: "flex items-center gap-3",
                                        children: _jsx("img", {
                                            src: "AV_TOOLS_LOGO.svg",
                                            alt: "AV Tools Logo",
                                            className: "h-6 sm:h-8 w-auto brightness-0 invert",
                                        }),
                                    }),
                                    _jsxs("div", {
                                        className:
                                            "flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-blue-200",
                                        children: [
                                            _jsx("span", { children: "Video" }),
                                            _jsx("span", { children: "•" }),
                                            _jsx("span", { children: "Audio" }),
                                            _jsx("span", { children: "•" }),
                                            _jsx("span", { children: "IT Infrastructure" }),
                                            _jsx("span", { children: "•" }),
                                            _jsx("a", {
                                                href: "/privacy-policy.html",
                                                className: "underline hover:text-white transition-colors",
                                                children: "Privacy Policy",
                                            }),
                                        ],
                                    }),
                                    _jsxs("div", {
                                        className: "text-center text-blue-100 text-xs sm:text-sm",
                                        children: [
                                            _jsx("p", { children: "AV Tools. All Rights Reserved." }),
                                            _jsx("a", {
                                                href: "mailto:contact@avtoolspro.com",
                                                className: "underline hover:text-white",
                                                children: "contact@avtoolspro.com",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                {}
            ),
        ],
    });
}

export default AVToolsWebsite;
