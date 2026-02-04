// Camera Distance Calculator Tool
// Dependencies: React, Core (global)

function calculateCameraWithZoom(e, t, s, a) {
    (!e || e <= 0) && (e = 1920),
        (!t || t <= 0) && (t = 1),
        (!s || s < 1) && (s = 1),
        s > 100 && (s = 100),
        (!a || a <= 0) && (a = 90),
        a >= 180 && (a = 179);
    var r = e / t,
        l = 0.3048 * r,
        i = (a * Math.PI) / 180,
        n = 2 * Math.atan(Math.tan(i / 2) / s),
        o = Math.round(((180 * n) / Math.PI) * 10) / 10;
    (!isFinite(o) || o <= 0) && (o = 0.1);
    var d = Math.round(r * s * 10) / 10,
        c = Math.round(0.3048 * d * 10) / 10,
        m = Math.round((t / s) * 100) / 100,
        x = Math.round(3.28084 * m * 100) / 100,
        u = function (e) {
            return e >= 250
                ? {
                      level: "Identification",
                      color: "green",
                      ppm: 250,
                      description: "Identity established beyond reasonable doubt",
                  }
                : e >= 125
                  ? { level: "Recognition", color: "yellow", ppm: 125, description: "Recognize known individual" }
                  : e >= 62
                    ? { level: "Observation", color: "orange", ppm: 62, description: "See characteristic details" }
                    : e >= 25
                      ? { level: "Detection", color: "red", ppm: 25, description: "Detect human presence" }
                      : { level: "Monitoring", color: "gray", ppm: 0, description: "General scene monitoring" };
        },
        h = u(r),
        p = u(d),
        g = Math.round((e / 25) * 100) / 100,
        b = Math.round((e / 62) * 100) / 100,
        f = Math.round((e / 125) * 100) / 100,
        y = Math.round((e / 250) * 100) / 100,
        j = Math.round(g * s * 100) / 100,
        _ = Math.round(b * s * 100) / 100,
        v = Math.round(f * s * 100) / 100,
        N = Math.round(y * s * 100) / 100;
    return {
        basePPM: Math.round(10 * r) / 10,
        basePPF: Math.round(10 * l) / 10,
        baseDORI: h,
        baseHFOV: a,
        zoomFactor: s,
        effectiveHFOV: o,
        effectivePPM: d,
        effectivePPF: c,
        effectiveDORI: p,
        effectiveCoverageWidthM: m,
        effectiveCoverageWidthFt: x,
        doriImproved: h.level !== p.level,
        maxCoverages: {
            detect: { base: g, zoomed: j },
            observe: { base: b, zoomed: _ },
            recognize: { base: f, zoomed: v },
            identify: { base: y, zoomed: N },
        },
        standards: "IEC 62676-4:2014",
    };
}

function calculateCameraDistance(e, t, s = "m") {
    (!e || e <= 0) && (e = 1), (!t || t <= 0) && (t = 90), t >= 180 && (t = 179);
    const a = (t * Math.PI) / 180;
    let r = e / (2 * Math.tan(a / 2));
    (!isFinite(r) || r < 0) && (r = 0);
    let l = r;
    "ft" === s && (l = 0.3048 * r);
    const i = "ft" === s ? 0.3048 * e : e,
        n = [
            { name: "720p HD", horizontal: 1280, vertical: 720 },
            { name: "1080p Full HD", horizontal: 1920, vertical: 1080 },
            { name: "2K QHD", horizontal: 2560, vertical: 1440 },
            { name: "4MP", horizontal: 2688, vertical: 1520 },
            { name: "5MP", horizontal: 2592, vertical: 1944 },
            { name: "4K UHD / 8MP", horizontal: 3840, vertical: 2160 },
            { name: "12MP", horizontal: 4e3, vertical: 3e3 },
        ].map((e) => {
            const t = i > 0 ? Math.round(e.horizontal / i) : 0,
                s = Math.round(0.3048 * t);
            return { ...e, ppm: t, ppf: s };
        });
    return {
        distance: Math.round(100 * r) / 100,
        distanceMeters: Math.round(100 * l) / 100,
        coverageWidth: e,
        coverageWidthMeters: Math.round(100 * i) / 100,
        hfov: t,
        unit: s,
        ppmByResolution: n,
        doriLevels: {
            detection: { ppm: 25, ppf: 8, description: "Detect presence of person/vehicle" },
            observation: { ppm: 62, ppf: 19, description: "See characteristic details (clothing)" },
            recognition: { ppm: 125, ppf: 38, description: "Recognize if person seen before" },
            identification: { ppm: 250, ppf: 76, description: "Positively identify individual" },
        },
        oodpcvsLevels: {
            overview: { ppm: 20, description: "Display moving objects at far distances" },
            outline: { ppm: 50, description: "Determine general outline and movement" },
            discern: { ppm: 100, description: "Discern individuals in a group" },
            perceive: { ppm: 200, description: "Perceive distinguishing features" },
            characterize: { ppm: 400, description: "Characterize specific details" },
            validate: { ppm: 500, description: "Validate known persons / read license plates" },
            scrutinize: { ppm: 1500, description: "Scrutinize with passport-photo detail" },
        },
    };
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
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
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
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
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
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
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
                                            "w-full max-w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm",
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
