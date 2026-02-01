export const _jsx = (e, t, s) => {
        const { children: a, ...r } = t || {};
        return void 0 !== s && (r.key = s), React.createElement(e, r, a);
    },
    _jsxs = (e, t, s) => {
        const { children: a, ...r } = t || {};
        return (
            void 0 !== s && (r.key = s),
            Array.isArray(a) ? React.createElement(e, r, ...a) : React.createElement(e, r, a)
        );
    },
    _Fragment = React.Fragment,
    ResetConfirmModal = ({
        isOpen: e,
        onConfirm: t,
        onCancel: s,
        title: a = "Reset Tool?",
        message: r = "This will reset all configurations to their default values. This action cannot be undone.",
    }) =>
        e
            ? _jsx("div", {
                  className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                  style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                  onClick: (e) => {
                      e.target === e.currentTarget && s();
                  },
                  children: _jsxs("div", {
                      className:
                          "bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all",
                      style: { animation: "modalFadeIn 0.2s ease-out" },
                      children: [
                          _jsxs("div", {
                              className: "relative",
                              children: [
                                  _jsx("div", {
                                      className: "h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
                                      style: { borderRadius: "0 0 50% 50% / 0 0 30px 30px" },
                                  }),
                                  _jsx("button", {
                                      onClick: s,
                                      className:
                                          "absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors",
                                      children: _jsx("svg", {
                                          className: "w-5 h-5 text-white",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          strokeWidth: 2,
                                          children: _jsx("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M6 18L18 6M6 6l12 12",
                                          }),
                                      }),
                                  }),
                                  _jsx("div", {
                                      className:
                                          "absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2",
                                      children: _jsx("div", {
                                          className:
                                              "w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center",
                                          children: _jsx("svg", {
                                              className: "w-9 h-9 text-blue-600",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              strokeWidth: 2,
                                              children: _jsx("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                                              }),
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                          _jsxs("div", {
                              className: "px-6 pt-12 pb-6 text-center",
                              children: [
                                  _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: a }),
                                  _jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-6", children: r }),
                                  _jsxs("div", {
                                      className: "flex flex-col gap-3",
                                      children: [
                                          _jsx("button", {
                                              onClick: t,
                                              className:
                                                  "w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg",
                                              children: "Yes, Reset Tool",
                                          }),
                                          _jsx("button", {
                                              onClick: s,
                                              className:
                                                  "w-full py-2.5 px-4 text-gray-600 hover:text-gray-800 font-medium transition-colors",
                                              children: "Cancel",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          _jsx("div", {
                              className: "px-6 pb-4 text-center",
                              children: _jsx("p", { className: "text-xs text-gray-400", children: "AV Tools Pro" }),
                          }),
                      ],
                  }),
              })
            : null,
    { useState: useState, useEffect: useEffect, useRef: useRef } = React,
    _0x99bba9 = (e, t = 0, s = null) => {
        if ("" === e || null == e) return t;
        const a = "string" == typeof e ? parseFloat(e) : e;
        return isNaN(a) ? t : null !== s && a < s ? s : a;
    };
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
function calculateMixedConduitFill(e, t) {
    var s = e.reduce(function (e, t) {
            return e + t.quantity;
        }, 0),
        a = 1 === s ? 53 : 2 === s ? 31 : 40,
        r = 0,
        l = e.map(function (e) {
            var t = Math.PI * Math.pow(e.diameter / 2, 2),
                s = t * e.quantity;
            return (
                (r += s),
                {
                    type: e.type,
                    description: e.description || e.type,
                    quantity: e.quantity,
                    diameter: e.diameter.toFixed(3),
                    areaPerCable: Math.round(1e4 * t) / 1e4,
                    totalArea: Math.round(1e4 * s) / 1e4,
                }
            );
        }),
        i = [
            { trade: '1/2"', id: 0.622 },
            { trade: '3/4"', id: 0.824 },
            { trade: '1"', id: 1.049 },
            { trade: '1-1/4"', id: 1.38 },
            { trade: '1-1/2"', id: 1.61 },
            { trade: '2"', id: 2.067 },
            { trade: '2-1/2"', id: 2.731 },
            { trade: '3"', id: 3.356 },
            { trade: '4"', id: 4.334 },
        ],
        n = i.map(function (t) {
            var l = Math.PI * Math.pow(t.id / 2, 2),
                i = Math.round((r / l) * 100 * 10) / 10,
                n = i <= a,
                o =
                    e.length > 0
                        ? e.reduce(function (e, t) {
                              return e + t.diameter * t.quantity;
                          }, 0) / s
                        : 0,
                d = s >= 3 ? Math.round((t.id / o) * 100) / 100 : null,
                c = "N/A";
            return (
                s >= 3 && d && (c = d < 2.8 ? "High Risk" : d <= 3.2 ? "Borderline" : "Low Risk"),
                {
                    trade: t.trade,
                    id: t.id,
                    area: Math.round(1e4 * l) / 1e4,
                    actualFillPercent: i,
                    compliant: n,
                    jamRatio: d,
                    jamStatus: c,
                    recommended: !1,
                }
            );
        }),
        o = n.find(function (e) {
            return e.compliant;
        });
    o && (o.recommended = !0);
    var d = !o,
        c = [],
        m = [];
    if (d) {
        for (
            var x = i[i.length - 1], u = Math.PI * Math.pow(x.id / 2, 2) * (a / 100), h = Math.ceil(r / u), p = h;
            p <= Math.min(h + 3, 20);
            p++
        ) {
            var g = r / p,
                b = g / (a / 100),
                f = 2 * Math.sqrt(b / Math.PI),
                y = i.find(function (e) {
                    return e.id >= f;
                });
            if (y) {
                var j = Math.PI * Math.pow(y.id / 2, 2),
                    _ = Math.round((g / j) * 100 * 10) / 10,
                    v = Math.ceil(s / p),
                    N =
                        e.reduce(function (e, t) {
                            return e + t.diameter * t.quantity;
                        }, 0) / s,
                    w = v >= 3 ? Math.round((y.id / N) * 100) / 100 : null,
                    C = "N/A";
                v >= 3 && w && (C = w < 2.8 ? "High Risk" : w <= 3.2 ? "Borderline" : "Low Risk"),
                    c.push({
                        conduitCount: p,
                        conduitSize: y.trade,
                        conduitID: y.id,
                        cablesPerConduit: v,
                        fillPercent: _,
                        compliant: _ <= a,
                        jamRatio: w,
                        jamStatus: C,
                        totalConduitArea: Math.round(j * p * 1e3) / 1e3,
                    });
            }
        }
        m =
            0 === c.length
                ? [
                      "⚠️ EXTREME CASE: " + s + " cables require " + h + "+ conduits",
                      "Cable tray is strongly recommended for this cable volume (NEC Article 392)",
                      "Consider ladder tray or solid-bottom tray based on cable type",
                      "Consult with electrical engineer for proper cable management design",
                      "May require multiple parallel cable tray runs",
                      "Ensure proper support spacing per NEC requirements",
                  ]
                : [
                      'Cable quantity exceeds maximum single 4" conduit capacity per NEC Chapter 9',
                      "Use multiple parallel conduits to distribute cables while maintaining fill compliance",
                      "Consider cable tray for large cable bundles (NEC Article 392)",
                      "Ensure equal distribution of cables across conduits for balanced fills",
                      "Maintain proper separation between conduits per NEC spacing requirements",
                      "Label conduits clearly to indicate cable routing for future maintenance",
                      "Consider future expansion needs when selecting conduit configuration",
                  ];
    }
    return {
        totalCables: s,
        totalCableArea: Math.round(1e4 * r) / 1e4,
        fillPercentAllowed: a,
        cableBreakdown: l,
        conduitOptions: n,
        recommendedConduit: o || n[n.length - 1],
        conduitType: t || "EMT",
        standards: "NEC 2023 Chapter 9, AVIXA F502.01:2018",
        exceedsMaximum: d,
        multiConduitRecommendations: c,
        bestPractices: m,
    };
}
function _0xb9cb50(e, t, s = "in") {
    const a = [
            { trade: '1/2"', id: 0.622, metric: "16mm" },
            { trade: '3/4"', id: 0.824, metric: "21mm" },
            { trade: '1"', id: 1.049, metric: "27mm" },
            { trade: '1-1/4"', id: 1.38, metric: "35mm" },
            { trade: '1-1/2"', id: 1.61, metric: "41mm" },
            { trade: '2"', id: 2.067, metric: "53mm" },
            { trade: '2-1/2"', id: 2.731, metric: "69mm" },
            { trade: '3"', id: 3.356, metric: "85mm" },
            { trade: '4"', id: 4.334, metric: "110mm" },
        ],
        r = "mm" === s ? t / 25.4 : t;
    let l;
    l = 1 === e ? 0.53 : 2 === e ? 0.31 : 0.4;
    const i = Math.sqrt((e * Math.pow(r, 2)) / l),
        n = a.find((e) => e.id >= i),
        o = a[a.length - 1],
        d = n ? n.id : o.id,
        c = (n && n.id, d / r);
    let m, x;
    e < 3
        ? ((m = "N/A"), (x = "gray"))
        : c < 2.8
          ? ((m = "High Risk"), (x = "red"))
          : c <= 3.2
            ? ((m = "Borderline"), (x = "yellow"))
            : ((m = "Low Risk"), (x = "green"));
    const u = e * Math.PI * Math.pow(r / 2, 2),
        h = (u / (Math.PI * Math.pow(d / 2, 2))) * 100;
    let p = null,
        g = 0;
    if (e >= 3) {
        const e = 3.2 * r;
        (p = a.find((t) => t.id >= e)), p && (g = p.id / r);
    }
    let b = [];
    if (e >= 3 && c < 3.2) {
        const t = Math.ceil(e / 2),
            s = Math.sqrt((t * Math.pow(r, 2)) / l),
            i = a.find((e) => e.id >= s);
        if (i) {
            const e = i.id / r;
            b.push({
                count: 2,
                cablesEach: t,
                conduit: i,
                jamRatio: Math.round(100 * e) / 100,
                jamRisk: e < 2.8 ? "High Risk" : e <= 3.2 ? "Borderline" : "Low Risk",
                fillPercent:
                    Math.round(((t * Math.PI * Math.pow(r / 2, 2)) / (Math.PI * Math.pow(i.id / 2, 2))) * 1e3) / 10,
            });
        }
        if (e >= 6) {
            const t = Math.ceil(e / 3),
                s = Math.sqrt((t * Math.pow(r, 2)) / l),
                i = a.find((e) => e.id >= s);
            if (i) {
                const e = i.id / r;
                b.push({
                    count: 3,
                    cablesEach: t,
                    conduit: i,
                    jamRatio: Math.round(100 * e) / 100,
                    jamRisk: e < 2.8 ? "High Risk" : e <= 3.2 ? "Borderline" : "Low Risk",
                    fillPercent:
                        Math.round(((t * Math.PI * Math.pow(r / 2, 2)) / (Math.PI * Math.pow(i.id / 2, 2))) * 1e3) / 10,
                });
            }
        }
    }
    const f = !n;
    let y = [],
        j = [];
    if (f) {
        const t = a[a.length - 1],
            s = Math.PI * Math.pow(t.id / 2, 2) * l,
            i = Math.ceil(u / s);
        for (let t = i; t <= Math.min(i + 3, 20); t++) {
            const s = Math.ceil(e / t),
                l = s * Math.PI * Math.pow(r / 2, 2),
                i = 1 === s ? 0.53 : 2 === s ? 0.31 : 0.4,
                n = Math.sqrt((s * Math.pow(r, 2)) / i),
                o = a.find((e) => e.id >= n);
            if (o) {
                const e = Math.PI * Math.pow(o.id / 2, 2),
                    a = Math.round((l / e) * 100 * 10) / 10,
                    n = s >= 3 ? Math.round((o.id / r) * 100) / 100 : null;
                let d = "N/A";
                s >= 3 && n && (d = n < 2.8 ? "High Risk" : n <= 3.2 ? "Borderline" : "Low Risk"),
                    y.push({
                        count: t,
                        cablesEach: s,
                        conduit: o,
                        jamRatio: n,
                        jamRisk: d,
                        fillPercent: a,
                        compliant: a <= 100 * i,
                    });
            }
        }
        j =
            0 === y.length
                ? [
                      `⚠️ EXTREME CASE: ${e} cables require ${i}+ conduits`,
                      "Cable tray is strongly recommended for this cable volume (NEC Article 392)",
                      "Consider ladder tray or solid-bottom tray based on cable type",
                      "Consult with electrical engineer for proper cable management design",
                      "May require multiple parallel cable tray runs",
                      "Ensure proper support spacing per NEC requirements",
                  ]
                : [
                      'Cable quantity exceeds maximum single 4" conduit capacity per NEC Chapter 9',
                      "Use multiple parallel conduits to distribute cables while maintaining fill compliance",
                      "Consider cable tray for large cable bundles (NEC Article 392)",
                      "Ensure equal distribution of cables across conduits for balanced fills",
                      "Maintain proper separation between conduits per NEC spacing requirements",
                      "Label conduits clearly to indicate cable routing for future maintenance",
                      "Consider future expansion needs when selecting conduit configuration",
                  ];
    }
    const _ = "mm" === s ? 25.4 : 1,
        v = s;
    return {
        minRequiredID: Math.round(i * _ * 1e3) / 1e3,
        minRequiredIDInches: Math.round(1e3 * i) / 1e3,
        _0xd93e1a: n,
        recommendedConduitID: n ? Math.round(n.id * _ * 100) / 100 : null,
        fillPercentage: 100 * l,
        actualFillPercent: Math.round(10 * h) / 10,
        jamRatio: Math.round(100 * c) / 100,
        jamRisk: m,
        jamRiskColor: x,
        safeJamConduit: p,
        safeJamRatio: Math.round(100 * g) / 100,
        multiConduitOptions: b,
        exceedsMaximum: f,
        exceedsMultiConduitOptions: y,
        bestPractices: j,
        unit: v,
        cableQty: e,
        outerDiameter: t,
        outerDiameterInches: r,
        _0xf639dc: a,
    };
}
function _0xae89d3(e, t, s, a = 0, r = 0) {
    if (e <= 0 || t <= 0 || s <= 0)
        return {
            dataRateBps: 0,
            dataRateKbps: 0,
            dataRateMbps: 0,
            fileSizeMB: 0,
            fileSizeGB: 0,
            fileSizeFormatted: "0 MB",
            totalSeconds: 0,
        };
    const l = Math.max(0, 60 * (a || 0) + (r || 0)),
        i = e * t * s,
        n = i / 1e3,
        o = n / 1e3,
        d = (i * l) / 8,
        c = d / 1048576,
        m = c / 1024;
    let x;
    if (m >= 1) x = Math.round(100 * m) / 100 + " GB";
    else if (c >= 1) x = Math.round(100 * c) / 100 + " MB";
    else {
        const e = d / 1024;
        x = Math.round(100 * e) / 100 + " KB";
    }
    return {
        dataRateBps: Math.round(i),
        dataRateKbps: Math.round(100 * n) / 100,
        dataRateMbps: Math.round(1e3 * o) / 1e3,
        fileSizeMB: Math.round(100 * c) / 100,
        fileSizeGB: Math.round(1e3 * m) / 1e3,
        fileSizeFormatted: x,
        totalSeconds: l,
    };
}
function calculateProjectorThrow(e, t, s = "in") {
    const a = e * t;
    return { throwDistance: Math.round(100 * a) / 100, unit: s };
}
function _0x78d92f(e, t = 20, s = 0, cableLengthM = 50, cableType = "cat6") {
    // Cable resistance per meter (loop resistance for one pairset) - IEEE values
    const cableResistance = {
        cat5e: 0.188,  // ~0.188 Ω/m loop resistance (24 AWG)
        cat6: 0.125,   // ~0.125 Ω/m loop resistance (23 AWG)
        cat6a: 0.09    // ~0.09 Ω/m loop resistance (22 AWG)
    };
    
    // PoE voltage (typical PSE output voltage)
    const poeVoltage = 52; // Volts (IEEE standard range is 44-57V, typical is 52V)
    
    // Calculate power requirements at PD (device) side
    const pdPowerPoe = 12.95;      // IEEE 802.3af - power at PD
    const pdPowerPoePlus = 25.5;   // IEEE 802.3at - power at PD  
    const pdPowerPoePlusPlus = 51; // IEEE 802.3bt Type 3 - power at PD
    const pdPower4PPOE = 71.3;     // IEEE 802.3bt Type 4 - power at PD
    
    // PSE power (what switch provides)
    const psePowerPoe = 15.4;
    const psePowerPoePlus = 30;
    const psePowerPoePlusPlus = 60;
    const psePower4PPOE = 90;
    
    // Get cable resistance for selected type
    const Rc = cableResistance[cableType] || cableResistance.cat6;
    
    // Calculate cable losses for each PoE type
    // Power loss formula: P_loss = I² × R × L / Np
    // Where I = P / V, R = cable resistance, L = length, Np = number of pairs
    
    const calculateCableLoss = (pdPower, psePower, numPairs) => {
        if (pdPower === 0) return { lossWatts: 0, lossPercent: 0, actualPsePower: psePower };
        
        // Current at PD: I = P / V
        const current = pdPower / poeVoltage;
        
        // Cable resistance for the run (loop = there and back)
        // For 2-pair: full resistance, for 4-pair: halved (parallel paths)
        const effectiveResistance = (Rc * cableLengthM) / numPairs;
        
        // Power loss in cable: P = I² × R
        const powerLoss = Math.pow(current, 2) * effectiveResistance * 2; // *2 for both directions
        
        // Calculate what PSE actually needs to provide
        const actualPsePower = pdPower + powerLoss;
        
        // Loss percentage
        const lossPercent = (powerLoss / actualPsePower) * 100;
        
        return {
            lossWatts: Math.round(powerLoss * 100) / 100,
            lossPercent: Math.round(lossPercent * 10) / 10,
            actualPsePower: Math.round(actualPsePower * 100) / 100
        };
    };
    
    // Calculate losses for each type (PoE/PoE+ use 2 pairs, PoE++ uses 4 pairs)
    const poeLoss = calculateCableLoss(pdPowerPoe, psePowerPoe, 2);
    const poePlusLoss = calculateCableLoss(pdPowerPoePlus, psePowerPoePlus, 2);
    const poePlusPlusLoss = calculateCableLoss(pdPowerPoePlusPlus, psePowerPoePlusPlus, 4);
    const fourPPoeLoss = calculateCableLoss(pdPower4PPOE, psePower4PPOE, 4);
    
    // Use actual PSE power requirements (accounting for cable loss)
    const a = poeLoss.actualPsePower * e.poe,
        r = poePlusLoss.actualPsePower * e.poePlus,
        l = poePlusPlusLoss.actualPsePower * e.poePlusPlus,
        i = fourPPoeLoss.actualPsePower * e.fourPPOE,
        n = a + r + l + i,
        o = n * (t / 100),
        d = n + o,
        c = d + s,
        m = e.poe + e.poePlus + e.poePlusPlus + e.fourPPOE,
        x = Math.ceil(1.2 * m);
    
    // Calculate total cable losses
    const totalCableLoss = (poeLoss.lossWatts * e.poe) + 
                           (poePlusLoss.lossWatts * e.poePlus) + 
                           (poePlusPlusLoss.lossWatts * e.poePlusPlus) + 
                           (fourPPoeLoss.lossWatts * e.fourPPOE);
    
    // Power at devices (what they actually receive)
    const powerAtDevices = (pdPowerPoe * e.poe) + 
                           (pdPowerPoePlus * e.poePlus) + 
                           (pdPowerPoePlusPlus * e.poePlusPlus) + 
                           (pdPower4PPOE * e.fourPPOE);
    
    let u = "",
        h = 0,
        p = 1,
        g = 24;
    x <= 48
        ? ((g = [8, 12, 16, 24, 48].find((e) => e >= x) || 48), (h = g), (p = 1), (u = `${g}-port switch`))
        : ((p = Math.ceil(x / 48)), (g = 48), (h = 48 * p), (u = `${p} × 48-port switches`));
    const b = h - m,
        f = Math.round((b / h) * 100);
    let y = "Non-PoE",
        j = "N/A",
        _ = "";
    e.fourPPOE > 0
        ? ((y = "PoE++ (802.3bt Type 4)"), (j = "PoE++ Type 4"), (_ = "802.3bt"))
        : e.poePlusPlus > 0
          ? ((y = "PoE++ (802.3bt Type 3)"), (j = "PoE++ Type 3"), (_ = "802.3bt"))
          : e.poePlus > 0
            ? ((y = "PoE+ (802.3at)"), (j = "PoE+"), (_ = "802.3at"))
            : e.poe > 0 && ((y = "PoE (802.3af)"), (j = "PoE"), (_ = "802.3af"));
    let v = `${p} × ${g}-port ${j} switch${p > 1 ? "es" : ""}`;
    const N = [
        { model: "Netgear M4250-9G1F-PoE+ (GSM4210PD)", budget: 110, ports: 8, type: "PoE+", brand: "Netgear M4250" },
        { model: "Netgear M4250-10G2F-PoE+ (GSM4212P)", budget: 125, ports: 8, type: "PoE+", brand: "Netgear M4250" },
        { model: "Netgear M4250-8G2XF-PoE+ (GSM4210PX)", budget: 220, ports: 8, type: "PoE+", brand: "Netgear M4250" },
        { model: "Netgear M4250-10G2XF-PoE+ (GSM4212PX)", budget: 240, ports: 8, type: "PoE+", brand: "Netgear M4250" },
        { model: "Netgear M4250-26G4F-PoE+ (GSM4230P)", budget: 300, ports: 24, type: "PoE+", brand: "Netgear M4250" },
        {
            model: "Netgear M4250-26G4XF-PoE+ (GSM4230PX)",
            budget: 480,
            ports: 24,
            type: "PoE+",
            brand: "Netgear M4250",
        },
        { model: "Netgear M4250-40G8F-PoE+ (GSM4248P)", budget: 480, ports: 40, type: "PoE+", brand: "Netgear M4250" },
        {
            model: "Netgear M4250-40G8XF-PoE+ (GSM4248PX)",
            budget: 960,
            ports: 40,
            type: "PoE+",
            brand: "Netgear M4250",
        },
        {
            model: "Netgear M4250-40G8XF-PoE++ (GSM4248UX)",
            budget: 2880,
            ports: 40,
            type: "PoE++",
            brand: "Netgear M4250",
        },
        {
            model: "Netgear M4250-26G4F-PoE++ (GSM4230UP)",
            budget: 1440,
            ports: 24,
            type: "PoE++",
            brand: "Netgear M4250",
        },
        { model: "Ubiquiti USW-Pro-24-PoE", budget: 400, ports: 24, type: "PoE++", brand: "Ubiquiti" },
        { model: "Ubiquiti USW-Pro-48-PoE", budget: 600, ports: 48, type: "PoE++", brand: "Ubiquiti" },
        { model: "Ubiquiti USW-Pro-Max-24-PoE", budget: 400, ports: 24, type: "PoE++", brand: "Ubiquiti" },
        { model: "Ubiquiti USW-Pro-Max-48-PoE", budget: 720, ports: 48, type: "PoE++", brand: "Ubiquiti" },
        { model: "Ubiquiti USW-Enterprise-48-PoE", budget: 720, ports: 48, type: "PoE++", brand: "Ubiquiti" },
    ];
    N.sort((e, t) => e.budget - t.budget);
    let w = null,
        C = 1,
        M = p;
    Math.ceil(d);
    for (const e of N)
        if (e.budget >= d && e.ports >= m) {
            (w = e), (C = 1);
            break;
        }
    if (!w) {
        const e = N.filter((e) => e.budget >= 400).sort((e, t) => t.budget - e.budget)[0] || N[N.length - 1];
        (C = Math.ceil(d / e.budget)), (M = Math.ceil(m / e.ports));
        const t = Math.max(C, M);
        (w = {
            model: `${t} × ${e.model}`,
            budget: e.budget * t,
            budgetPerSwitch: e.budget,
            ports: e.ports * t,
            type: e.type,
            brand: e.brand,
            isMultiple: !0,
            count: t,
        }),
            (C = t);
    }
    (p = Math.max(M, C)),
        (v = w.isMultiple ? `${w.count} × ${g}-port ${j} switches` : `1 × ${w.ports}-port ${j} switch`);
    const k = N.filter((e) => e.budget >= d / p && e.ports >= Math.ceil(m / p))
        .slice(0, 3)
        .map((e) => e.model);
    let S = "Cat5e or better";
    (e.fourPPOE > 0 || e.poePlusPlus > 0) && (S = "Cat6 or Cat6A recommended for Type 3/4 devices");
    const R = [];
    R.push({
        type: "success",
        title: "Recommended Switch",
        text: w.isMultiple
            ? `${w.count} × ${w.model.split(" × ")[1]} (${w.budgetPerSwitch}W each = ${w.budget}W poeTotal)`
            : `${w.model} with ${w.budget}W PoE budget`,
    }),
        k.length > 1 &&
            R.push({ type: "info", title: "Alternative Models", text: `Also consider: ${k.slice(0, 3).join(", ")}` }),
        (d > 200 || m > 10) &&
            R.push({
                type: "info",
                title: "Redundancy Consideration",
                text: `For mission-critical AV systems, consider dual power supplies or stacked switches with ${Math.round(1.5 * d)}W combined budget for N+1 redundancy.`,
            });
    const P = Math.round(1.6 * c * 1.25);
    R.push({
        type: "info",
        title: "UPS Sizing",
        text: `Minimum UPS capacity: ${P}VA (includes ${Math.round(d)}W PoE + ${s}W switch). For 15-min runtime, consider ${Math.round(1.5 * P)}VA or higher.`,
    });
    const A = Math.round(3.412 * c);
    
    // Add cable loss warning if significant
    const avgLossPercent = n > 0 ? (totalCableLoss / n) * 100 : 0;
    if (avgLossPercent > 10) {
        R.push({
            type: "warning",
            title: "High Cable Loss",
            text: `Cable losses are ${avgLossPercent.toFixed(1)}% at ${cableLengthM}m. Consider shorter runs or upgrading to Cat6A cable to reduce power waste.`,
        });
    }
    
    return (
        A > 500 &&
            R.push({
                type: "warning",
                title: "Thermal Management",
                text: `Total heat output: ~${A} BTU/hr (PoE: ${Math.round(3.412 * d)} + Switch: ${Math.round(3.412 * s)}). Ensure adequate rack ventilation or cooling for enclosed spaces.`,
            }),
        (e.fourPPOE > 0 || e.poePlusPlus > 0) &&
            R.push({
                type: "warning",
                title: "Cable Distance",
                text: "High-power PoE (Type 3/4) experiences significant voltage drop over distance. Keep cable runs under 75m for optimal performance, or use Cat6A for runs up to 100m.",
            }),
        m > 0.8 * h &&
            R.push({
                type: "warning",
                title: "Port Density",
                text: "Port utilization exceeds 80%. Industry best practice recommends 20% spare capacity for maintenance and growth.",
            }),
        {
            totalWatts: Math.round(100 * d) / 100,
            subtotalWatts: Math.round(100 * n) / 100,
            headroomWatts: Math.round(100 * o) / 100,
            headroomPercent: t,
            switchBasePower: s,
            totalSystemPower: Math.round(100 * c) / 100,
            minStandard: y,
            minStandardShort: j,
            minStandardIEEE: _,
            totalDevices: m,
            recommendedPorts: h,
            numSwitches: p,
            switchSize: g,
            switchConfig: u,
            switchRequirement: v,
            unusedPorts: b,
            unusedPercent: f,
            recommendedTier: w.brand || "Multi-Switch",
            recommendedBudget: w.budget,
            recommendedBudgetPerSwitch: w.budgetPerSwitch || w.budget,
            recommendedModel: w.model,
            recommendedBrands: k.length > 0 ? k.join(", ") : w.model,
            isMultiSwitch: w.isMultiple || !1,
            switchCount: w.count || 1,
            cableRecommendation: S,
            upsVA: P,
            btuPerHour: A,
            recommendations: R,
            breakdown: {
                poe: Math.round(100 * a) / 100,
                poePlus: Math.round(100 * r) / 100,
                poePlusPlus: Math.round(100 * l) / 100,
                fourPPOE: Math.round(100 * i) / 100,
            },
            deviceCounts: e,
            // Cable loss data
            cableLoss: {
                totalLossWatts: Math.round(100 * totalCableLoss) / 100,
                powerAtDevices: Math.round(100 * powerAtDevices) / 100,
                cableLengthM: cableLengthM,
                cableLengthFt: Math.round(cableLengthM * 3.28084),
                cableType: cableType,
                lossPercent: n > 0 ? Math.round((totalCableLoss / n) * 1000) / 10 : 0,
                perType: {
                    poe: poeLoss,
                    poePlus: poePlusLoss,
                    poePlusPlus: poePlusPlusLoss,
                    fourPPOE: fourPPoeLoss
                }
            }
        }
    );
}
function _0xac743b(e) {
    const t = (e / 3.1415926358973) * 3,
        s = 3.426 * e;
    return { nits: Math.round(100 * t) / 100, lumens: Math.round(100 * s) / 100 };
}
function _0x9860ed(e, t, s = "in") {
    const a = (2 * Math.atan(e / 2 / t) * 180) / Math.PI;
    return { angle: Math.round(100 * a) / 100, unit: s };
}
function calculateDvLEDPixelPitch(e, t = "ft") {
    const s = "m" === t ? 3.28084 * e : e,
        a = "ft" === t ? e / 3.28084 : e,
        r = s / 10,
        l = s / 11.28,
        i = s / 2,
        n = a / 2;
    return {
        pixelPitchMm: Math.round(100 * r) / 100,
        pixelPitchMmExact: Math.round(100 * l) / 100,
        closestViewerFt: Math.round(100 * s) / 100,
        closestViewerM: Math.round(100 * a) / 100,
        comfortableViewingFt: Math.round(100 * i) / 100,
        comfortableViewingM: Math.round(100 * n) / 100,
    };
}
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
function calculateRackCooling(e, t, s, a = 1.25) {
    const r = 3.412 * e + 400 * t + 3.412 * s,
        l = r * a,
        i = l / 12e3,
        n = Math.round(l / (1.08 * 15));
    return {
        totalBTU: Math.round(l),
        subtotalBTU: Math.round(r),
        coolingTons: Math.round(100 * i) / 100,
        cfmRequired: n,
        coolingKW: Math.round(3.517 * i * 100) / 100,
    };
}
function calculateSpeakerPower(e, t, s, a, r, l = 1) {
    const i = a / r,
        n = Math.log10(i),
        o = 20 * n,
        d = e + t - s + o,
        c = d / 10,
        m = Math.pow(10, c),
        x = m * l;
    return {
        requiredWatts: x < 0.01 ? 0.01 : Math.round(100 * x) / 100,
        powerBase: Math.round(100 * m) / 100,
        exponent: Math.round(1e3 * c) / 1e3,
        numerator: Math.round(100 * d) / 100,
        distanceLoss: Math.round(100 * o) / 100,
        logDistanceRatio: Math.round(1e3 * n) / 1e3,
        distanceRatio: Math.round(100 * i) / 100,
    };
}
function _0xb402b0(e, t, s, a, r, l, i = "in") {
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
function calculateDSP(e) {
    const {
            micCount: t = 4,
            micLevelDbv: s = -50,
            nominalSystemLevelDbu: a = 4,
            maxInputLevelDbu: r = 24,
            maxOutputLevelDbu: l = 24,
            rt60Seconds: i = 0.6,
            listenerDistanceM: n = 3,
            micToSpeakerDistanceM: o = 2.5,
            targetSplType: d = "presentation",
            roomAbsorptionLossDb: c = 2,
            noiseFloorDba: m = 35,
            roomLengthM: x = 10,
            roomWidthM: u = 8,
            roomHeightM: h = 3,
            talkerToMicM: p = 0.5,
            talkerToFarthestListenerM: g = 8,
            nearestListenerToSpeakerM: b = 2,
            talkerToNearestListenerM: f = 3,
            micPattern: y = "cardioid",
            speakerDirectivityQ: j = 2,
            useAutomixer: _ = !1,
            spl95Percentile: v = null,
            spl5Percentile: N = null,
            dspBlocks: w = ["aec", "eq", "compressor", "matrix", "delay"],
            sampleRate: C = 48e3,
            bitDepth: M = 24,
            danteChannelCount: k = 16,
            networkType: S = "dante",
            inputs: R = { mics: 4, programAudio: 2, usbVoip: 2, playback: 1, wireless: 2, hdmiAudio: 2 },
            outputs: P = { loudspeakers: 4, amplifiers: 2, ucCodec: 1, overflow: 2, recording: 2 },
            adDaLatencyMs: A = 1,
            networkLatencyMs: D = 1,
        } = e,
        I = {},
        E = [],
        F = [],
        B = (e, t, s = 0.1, a = 100) =>
            e < s
                ? (E.push(`${t} (${e}m) is below minimum ${s}m - using ${s}m`), s)
                : e > a
                  ? (E.push(`${t} (${e}m) exceeds maximum ${a}m - using ${a}m`), a)
                  : e,
        T = x * u * h,
        L = 2 * (x * u + x * h + u * h),
        H = (4 * T) / L,
        U = Math.max(1, j),
        q = 0.057 * Math.sqrt((U * T) / Math.max(0.1, i));
    let $, W, V;
    i <= 0.4
        ? (($ = "Excellent"), (W = "Optimal for speech intelligibility and conferencing"))
        : i <= 0.6
          ? (($ = "Good"), (W = "Suitable for conferencing with proper DSP"))
          : i <= 0.8
            ? (($ = "Acceptable"), (W = "Consider acoustic treatment for better AEC performance"))
            : i <= 1.2
              ? (($ = "Challenging"), (W = "Acoustic treatment strongly recommended"))
              : (($ = "Difficult"), (W = "Significant acoustic treatment required before system design")),
        (V = T < 80 ? "huddle" : T < 200 ? "small" : T < 500 ? "medium" : T < 1500 ? "large" : "very-large"),
        (I.room = {
            volumeM3: Math.round(10 * T) / 10,
            surfaceAreaM2: Math.round(10 * L) / 10,
            meanFreePathM: Math.round(100 * H) / 100,
            criticalDistanceM: Math.round(100 * q) / 100,
            speakerDirectivityQ: U,
            rt60Seconds: i,
            roomSizeCategory: V,
            roomAcousticsRating: $,
            roomAcousticsAdvice: W,
            listenerBeyondCriticalDistance: n > q,
            micWithinCriticalDistance: p <= q,
            recommendedRT60: T < 200 ? "0.3-0.5s" : T < 500 ? "0.4-0.6s" : "0.5-0.8s",
        });
    const O = s + 2.2,
        z = r - a,
        G = a - O,
        X = l - a,
        J = "voice" === d ? 10 : 20,
        Q = X >= J;
    Q ||
        E.push(
            `System headroom (${X.toFixed(1)} dB) is below ${"voice" === d ? "speech" : "program audio"} requirement of ${J} dB`
        );
    const K = G > 0 && G < 60 ? "Normal" : G <= 0 ? "Pad Required" : "Excessive Gain Required";
    I.gainStructure = {
        inputHeadroomDb: Math.round(10 * z) / 10,
        requiredInputGainDb: Math.round(10 * G) / 10,
        systemHeadroomDb: Math.round(10 * X) / 10,
        headroomPass: Q,
        headroomTarget: J,
        headroomRating: X >= 20 ? "Excellent" : X >= 15 ? "Good" : X >= 10 ? "Acceptable" : "Insufficient",
        gainStagingStatus: K,
        referenceLevels: { micLevelDbu: Math.round(10 * O) / 10, nominalLevelDbu: a, maxInputDbu: r, maxOutputDbu: l },
    };
    const Y = _ ? 1 : Math.max(1, t),
        Z = 10 * Math.log10(Y),
        ee = {
            omni: { ree: 1, gainBonus: 0, description: "Equal pickup all directions" },
            cardioid: { ree: 0.333, gainBonus: 4.8, description: "Heart-shaped, -6dB at 90°" },
            supercardioid: { ree: 0.268, gainBonus: 5.7, description: "Narrower, -8.6dB at 90°" },
            hypercardioid: { ree: 0.25, gainBonus: 6, description: "Tightest, -12dB at 90°" },
            bidirectional: { ree: 0.333, gainBonus: 4.8, description: "Figure-8 pattern" },
        },
        te = ee[y] || ee.omni,
        se = te.gainBonus;
    I.nom = {
        micCount: t,
        effectiveNom: Y,
        useAutomixer: _,
        nomPenaltyDb: Math.round(10 * Z) / 10,
        automixerBenefit: _ ? Math.round(10 * Math.log10(t) * 10) / 10 : 0,
        micPattern: y,
        micDirectivityBonus: se,
        micDirectivityDescription: te.description,
        recommendation:
            Y > 6
                ? "Automixer essential - NOM penalty exceeds 7.8dB"
                : Y > 4
                  ? "Automixer strongly recommended to reduce NOM penalty"
                  : Y > 2
                    ? "Consider automixer for multi-mic environments"
                    : "NOM acceptable",
    };
    const ae = B(g, "D0 (talker to farthest listener)", 1, 50),
        re = B(o, "D1 (mic to speaker)", 0.3, 20),
        le = B(b, "D2 (speaker to nearest listener)", 0.5, 20),
        ie = B(p, "Ds (talker to mic)", 0.1, 5),
        ne = B(f || 0.4 * ae, "D3 (talker to nearest listener)", 0.5, 30),
        oe = 20 * Math.log10((ae * re) / (le * ie)),
        de = oe - 10 * Math.log10(Y) - 6 + se,
        ce = 20 * Math.log10(ae / ne),
        me = de - ce,
        xe = me >= 0;
    let ue, he;
    me >= 10
        ? ((ue = "Excellent"), (he = "System has comfortable margin - no feedback concerns"))
        : me >= 6
          ? ((ue = "Good"), (he = "Adequate margin for typical operation"))
          : me >= 3
            ? ((ue = "Marginal"), (he = "Limited margin - may ring at high gain settings"))
            : me >= 0
              ? ((ue = "At Risk"), (he = "Very limited margin - feedback likely at normal operating levels"))
              : ((ue = "Will Feedback"),
                (he = "System cannot achieve needed gain without feedback - redesign required")),
        me < 0
            ? F.push(
                  `CRITICAL: PAG (${de.toFixed(1)} dB) < NAG (${ce.toFixed(1)} dB). System will feedback before achieving needed gain. Deficit: ${Math.abs(me).toFixed(1)} dB`
              )
            : me < 6 &&
              E.push(`Low feedback margin (${me.toFixed(1)} dB). Target minimum is 6dB for stable operation.`),
        (I.pagNag = {
            pagDb: Math.round(10 * de) / 10,
            nagDb: Math.round(10 * ce) / 10,
            feedbackMarginDb: Math.round(10 * me) / 10,
            feedbackMarginPass: xe,
            feedbackRiskRating: ue,
            feedbackRiskAdvice: he,
            calculation: {
                pagRaw: Math.round(10 * oe) / 10,
                nomPenalty: Math.round(10 * Math.log10(Y) * 10) / 10,
                fsmApplied: 6,
                directivityBonus: se,
                pagFinal: Math.round(10 * de) / 10,
            },
            distances: {
                d0_talkerToFarthestListener: ae,
                d1_micToSpeaker: re,
                d2_speakerToNearestListener: le,
                ds_talkerToMic: ie,
                d3_talkerToNearestListener: ne,
            },
            improvements:
                me < 6
                    ? [
                          { action: "Halve talker-to-mic distance (Ds)", impact: "+6 dB PAG" },
                          { action: "Double mic-to-speaker distance (D1)", impact: "+6 dB PAG" },
                          { action: "Halve speaker-to-listener distance (D2)", impact: "+6 dB PAG" },
                          { action: "Enable automixer", impact: `+${Math.round(10 * Math.log10(t) * 10) / 10} dB PAG` },
                          { action: "Use supercardioid mics", impact: "+5.7 dB PAG vs omni" },
                      ]
                    : [],
        });
    const pe = "voice" === d ? 70 : 78,
        ge = 20 * Math.log10(Math.max(1, n) / 1),
        be = Math.min(6, Math.max(0, c)),
        fe = pe + ge + be;
    let ye, je, _e, ve, Ne;
    if (
        ((ye =
            fe < 85
                ? "Standard sensitivity (85-90 dB) speakers sufficient"
                : fe < 95
                  ? "High sensitivity (90-95 dB) speakers recommended"
                  : "Professional/PA grade (95+ dB) speakers required"),
        (I.splCalculation = {
            targetSplDb: pe,
            targetSplType: d,
            distanceLossDb: Math.round(10 * ge) / 10,
            roomAbsorptionLossDb: be,
            requiredSpeakerOutputDb: Math.round(10 * fe) / 10,
            listenerDistanceM: n,
            speakerSensitivityRecommendation: ye,
            splAtHalfDistance: Math.round(10 * (fe - ge + 20 * Math.log10(n / 2))) / 10,
            splAtDoubleDistance: Math.round(10 * (fe - ge + 20 * Math.log10(2 * n))) / 10,
        }),
        null !== v && null !== N)
    )
        (je = v - N), (_e = !1);
    else {
        const e = Math.max(x, u) / Math.min(x, u),
            t = e > 2 ? 2 : e > 1.5 ? 1 : 0,
            s = (P.loudspeakers || 1) / (x * u);
        (je = s > 0.1 ? 2 + t : s > 0.03 ? 4 + t : 6 + t), (_e = !0);
    }
    je <= 3
        ? ((ve = "A1 (Excellent)"), (Ne = "Uniform coverage - all listeners receive similar SPL"))
        : je <= 6
          ? ((ve = "A2 (Good)"), (Ne = "Acceptable coverage for most conferencing applications"))
          : je <= 9
            ? ((ve = "A3 (Acceptable)"), (Ne = "Noticeable variation - consider additional speakers"))
            : ((ve = "A4 (Poor)"), (Ne = "Significant coverage issues - system redesign recommended"));
    const we = je <= 6;
    we || E.push(`ACR (${je.toFixed(1)} dB) exceeds AVIXA A2 category maximum of 6 dB`),
        (I.acr = {
            acrDb: Math.round(10 * je) / 10,
            acrCalculated: _e,
            spl95Percentile: v || "estimated",
            spl5Percentile: N || "estimated",
            acrPass: we,
            acrRating: ve,
            acrAdvice: Ne,
            acrCategories: {
                A1: "≤3 dB (Excellent)",
                A2: "≤6 dB (Good)",
                A3: "≤9 dB (Acceptable)",
                A4: ">9 dB (Poor)",
            },
        });
    const Ce = Math.round(1e3 * i * 1.5);
    let Me, ke, Se;
    i <= 0.3
        ? ((Me = 100), (ke = "Excellent"), (Se = "Short RT60 - 100ms tail sufficient, fast convergence expected"))
        : i <= 0.5
          ? ((Me = 150), (ke = "Good"), (Se = "Standard conferencing room - 150ms tail recommended"))
          : i <= 0.7
            ? ((Me = 200), (ke = "Acceptable"), (Se = "Use 200ms tail (QSC recommended maximum for best performance)"))
            : i <= 1
              ? ((Me = 250), (ke = "Challenging"), (Se = "Extended tail needed - acoustic treatment strongly advised"))
              : ((Me = 300),
                (ke = "Difficult"),
                (Se = "Maximum tail length required - room treatment essential for acceptable AEC"));
    const Re = Math.min(400, Math.max(100, Me)),
        Pe = 20 * Math.log10(re / Math.max(0.5, le)),
        Ae = Math.min(6, 6 * Math.log10(U)),
        De = Math.min(4, be),
        Ie = Math.max(0, ((i - 0.4) / 0.3) * 3),
        Ee = Pe + Ae + De - Ie,
        Fe = Math.max(0, Math.min(20, Math.round(10 * Ee) / 10));
    let Be, Te;
    Fe >= 12
        ? ((Be = "Excellent"), (Te = "AEC will perform optimally with good double-talk handling"))
        : Fe >= 8
          ? ((Be = "Good"), (Te = "AEC should perform well in typical conditions"))
          : Fe >= 6
            ? ((Be = "Acceptable"), (Te = "AEC will work but may exhibit artifacts during double-talk"))
            : Fe >= 3
              ? ((Be = "Poor"), (Te = "Echo artifacts likely - increase mic/speaker separation"))
              : ((Be = "Critical"), (Te = "Severe echo expected - redesign mic and speaker placement"));
    const Le = Fe >= 6;
    Le ||
        (Fe < 3
            ? F.push(`Critical: ERL (${Fe} dB) is very low. AEC cannot function properly. Minimum 6dB required.`)
            : E.push(`ERL (${Fe} dB) is marginal. AEC may struggle. Target: ≥10dB for optimal performance.`)),
        (I.aec = {
            aecTailLengthMs: Re,
            aecTailCalculated: Ce,
            aecTailRating: ke,
            aecTailAdvice: Se,
            erlDb: Fe,
            erlPass: Le,
            erlRating: Be,
            erlAdvice: Te,
            erlBreakdown: {
                distanceComponent: Math.round(10 * Pe) / 10,
                directivityBonus: Math.round(10 * Ae) / 10,
                treatmentBonus: Math.round(10 * De) / 10,
                rt60Penalty: Math.round(10 * Ie) / 10,
            },
            thresholds: { excellent: "≥12 dB", good: "≥8 dB", acceptable: "≥6 dB", minimum: "6 dB" },
            micToSpeakerDistanceM: re,
            speakerToListenerDistanceM: le,
            rt60Seconds: i,
        });
    const He = pe,
        Ue = He - m;
    let qe, $e;
    Ue >= 35
        ? ((qe = "Excellent"), ($e = "Premium speech quality with excellent clarity"))
        : Ue >= 25
          ? ((qe = "Good"), ($e = "Good speech intelligibility for conferencing"))
          : Ue >= 15
            ? ((qe = "Acceptable"), ($e = "Basic intelligibility - reduce noise for better quality"))
            : ((qe = "Poor"), ($e = "Speech will be difficult to understand - noise reduction required"));
    const We = Ue >= 25;
    let Ve;
    We ||
        (Ue < 15
            ? F.push(`Critical: SNR (${Ue.toFixed(1)} dB) is too low for intelligible speech. Minimum 15dB required.`)
            : E.push(`SNR (${Ue.toFixed(1)} dB) is below optimal 25 dB target. Consider noise reduction measures.`)),
        (Ve =
            m <= 25
                ? "NC-20 or better"
                : m <= 30
                  ? "NC-25"
                  : m <= 35
                    ? "NC-30"
                    : m <= 40
                      ? "NC-35"
                      : m <= 45
                        ? "NC-40"
                        : "NC-45+");
    const Oe = 1e3 * Math.pow(10, s / 20),
        ze = s < -45 ? 22 : s < -35 ? 18 : 15;
    I.noiseAndSensitivity = {
        snrDb: Math.round(10 * Ue) / 10,
        snrPass: We,
        snrRating: qe,
        snrAdvice: $e,
        noiseFloorDba: m,
        estimatedNcRating: Ve,
        recommendedNcForConferencing: "NC-30 or better (≤35 dBA)",
        micSensitivityDbv: s,
        micSensitivityMvPa: Math.round(100 * Oe) / 100,
        estimatedMicSelfNoise: ze,
        desiredSpeechLevel: He,
        typicalSpeechLevel: "65-70 dB SPL at 1m",
        thresholds: { minimum: 15, target: 25, excellent: 35 },
    };
    const Ge = {
            aec: { base: 5, perChannel: 2, perTailMs: 0.02, description: "Acoustic Echo Cancellation" },
            eq: { perChannel: 1.5, description: "Parametric EQ (8-band)" },
            compressor: { perChannel: 0.8, description: "Dynamics processing" },
            limiter: { perChannel: 0.5, description: "Peak limiting" },
            gate: { perChannel: 0.4, description: "Noise gate" },
            agc: { perChannel: 1.2, description: "Automatic Gain Control" },
            noise_reduction: { perChannel: 2, description: "Adaptive noise reduction" },
            feedback_suppressor: { perChannel: 3, description: "Feedback suppression" },
            delay: { base: 0.3, description: "Delay/alignment" },
            automixer: { perChannel: 1, description: "Automixer/gating" },
            matrix: { perCrosspoint: 0.005, description: "Matrix mixer routing" },
            filter: { perChannel: 0.2, description: "Crossover/HP/LP filters" },
        },
        Xe = Object.values(R).reduce((e, t) => e + t, 0),
        Je = Object.values(P).reduce((e, t) => e + t, 0),
        Qe = Xe * Je;
    let Ke = 0;
    const Ye = {};
    w.forEach((e) => {
        const s = e.toLowerCase().replace(/\s+/g, "_"),
            a = Ge[s];
        if (a) {
            let r = a.base || 0;
            "aec" === s
                ? (r += a.perChannel * t + a.perTailMs * Re)
                : "matrix" === s
                  ? (r = a.perCrosspoint * Qe)
                  : "automixer" === s
                    ? (r = a.perChannel * t)
                    : a.perChannel && (r = a.perChannel * (Xe + Je)),
                (Ye[e] = { mips: Math.round(100 * r) / 100, description: a.description }),
                (Ke += r);
        }
    });
    const Ze = 0.3 * (Xe + Je);
    let et, tt, st;
    (Ye.system_overhead = { mips: Math.round(100 * Ze) / 100, description: "I/O and routing overhead" }),
        (Ke += Ze),
        Ke < 50
            ? ((et = "Light"), (tt = "Entry-level DSP sufficient"), (st = !0))
            : Ke < 150
              ? ((et = "Moderate"), (tt = "Mid-range DSP recommended"), (st = !0))
              : Ke < 400
                ? ((et = "Heavy"),
                  (tt = "Professional-grade DSP required"),
                  (st = !1),
                  E.push(
                      `DSP load is Heavy (${Math.round(Ke)} MIPS) - may cause audio dropouts or increased latency if DSP capacity is exceeded`
                  ))
                : ((et = "Very Heavy"),
                  (tt = "Enterprise DSP or distributed processing needed"),
                  (st = !1),
                  F.push(
                      `CRITICAL: DSP load is Very Heavy (${Math.round(Ke)} MIPS) - high risk of audio dropouts, glitches, and system instability`
                  )),
        (I.dspLoad = {
            totalMips: Math.round(10 * Ke) / 10,
            mipsBreakdown: Ye,
            loadRating: et,
            loadAdvice: tt,
            loadPass: st,
            dspBlocks: w,
            ioSummary: { totalInputs: Xe, totalOutputs: Je, matrixCrosspoints: Qe },
        });
    const at = Qe;
    let rt;
    (rt =
        at <= 64
            ? "Small (up to 8×8)"
            : at <= 256
              ? "Medium (up to 16×16)"
              : at <= 1024
                ? "Large (up to 32×32)"
                : "Enterprise (>32×32)"),
        (I.matrix = {
            totalInputs: Xe,
            totalOutputs: Je,
            matrixSize: at,
            matrixSizeRating: rt,
            inputBreakdown: R,
            outputBreakdown: P,
        });
    const lt = A / 2,
        it = A / 2,
        nt = Math.min(5, 0.8 * w.length),
        ot = {
            dante: { typical: 1, range: "0.15-5ms", description: "Dante (layer 3)" },
            avb: { typical: 2, range: "2ms guaranteed", description: "AVB/TSN (layer 2)" },
            aes67: { typical: 1, range: "1-4ms", description: "AES67 (layer 3)" },
        },
        dt = ot[S] || ot.dante,
        ct = D || dt.typical,
        mt = w.includes("aec") ? 10 : 0,
        xt = lt + nt + ct + mt + it,
        ut = 2 * xt + 50;
    let ht, pt;
    xt < 10
        ? ((ht = "Excellent"), (pt = "Imperceptible for all applications"))
        : xt < 20
          ? ((ht = "Good"), (pt = "Suitable for live reinforcement and conferencing"))
          : xt < 40
            ? ((ht = "Acceptable"), (pt = "Acceptable for conferencing, may notice in reinforcement"))
            : ((ht = "High"), (pt = "May cause echo perception - consider latency reduction"));
    const gt = xt < 20;
    gt || E.push(`Total latency (${xt.toFixed(1)}ms) exceeds 20ms target for live reinforcement`),
        (I.latency = {
            totalLatencyMs: Math.round(10 * xt) / 10,
            conferenceRoundTripMs: Math.round(ut),
            latencyPass: gt,
            latencyRating: ht,
            latencyAdvice: pt,
            breakdown: {
                adConversion: Math.round(10 * lt) / 10,
                dspProcessing: Math.round(10 * nt) / 10,
                networkTransport: Math.round(10 * ct) / 10,
                aecProcessing: mt,
                daConversion: Math.round(10 * it) / 10,
            },
            networkType: S,
            networkSpec: dt.description,
            thresholds: { excellent: "<10ms", good: "<20ms", acceptable: "<40ms", problematic: ">40ms" },
        });
    const bt = Math.pow(10, O / 20),
        ft = Math.pow(10, a / 20),
        yt = 20 * Math.log10(ft / bt),
        jt = 2 * yt;
    I.gain = {
        voltageGainDb: Math.round(10 * yt) / 10,
        powerGainDb: Math.round(10 * jt) / 10,
        inputLevelDbu: Math.round(10 * O) / 10,
        outputLevelDbu: a,
        gainStages: yt > 60 ? "May require multiple gain stages" : "Single preamp stage sufficient",
    };
    const _t = (C * M * k) / 1e6,
        vt = 1.25 * _t,
        Nt = (C * M * 1.25) / 1e3;
    let wt, Ct;
    vt < 10
        ? ((wt = "100 Mbps (Fast Ethernet)"), (Ct = Math.round(((100 - vt) / 100) * 100)))
        : vt < 100
          ? ((wt = "1 Gbps (Gigabit Ethernet)"), (Ct = Math.round(((1e3 - vt) / 1e3) * 100)))
          : ((wt = "10 Gbps Ethernet"), (Ct = Math.round(((1e4 - vt) / 1e4) * 100)));
    const Mt = Math.ceil(k / 4),
        kt = 6 * Mt;
    I.networkAudio = {
        totalBandwidthMbps: Math.round(100 * vt) / 100,
        rawBandwidthMbps: Math.round(100 * _t) / 100,
        perChannelBandwidthKbps: Math.round(10 * Nt) / 10,
        channelCount: k,
        sampleRate: C,
        bitDepth: M,
        networkType: S,
        danteFlows: Mt,
        flowBandwidthMbps: Math.round(10 * kt) / 10,
        recommendedSwitch: wt,
        networkHeadroomPercent: Ct,
        reference: {
            singleChannel48k24bit: "1.44 Mbps raw, ~1.8 Mbps with overhead",
            typicalFlow: "~6 Mbps per 4-channel flow",
            maxDanteChannels: "512×512 per network",
        },
    };
    const St = [
            { name: "Feedback Stability (PAG>NAG)", pass: I.pagNag.feedbackMarginPass, weight: 25, critical: !0 },
            { name: "Echo Control (ERL ≥6dB)", pass: I.aec.erlPass, weight: 20, critical: !0 },
            {
                name: "Speech Intelligibility (SNR ≥25dB)",
                pass: I.noiseAndSensitivity.snrPass,
                weight: 20,
                critical: !1,
            },
            { name: "System Headroom", pass: I.gainStructure.headroomPass, weight: 15, critical: !1 },
            { name: "Coverage Uniformity (ACR ≤6dB)", pass: I.acr.acrPass, weight: 10, critical: !1 },
            { name: "System Latency (<20ms)", pass: I.latency.latencyPass, weight: 10, critical: !1 },
        ],
        Rt = [];
    I.pagNag.feedbackMarginPass &&
        I.pagNag.feedbackMarginDb < 6 &&
        Rt.push({
            name: "Low Feedback Margin",
            deduction: 10,
            reason: `Feedback margin (${I.pagNag.feedbackMarginDb} dB) is below recommended 6dB safety margin`,
        }),
        I.aec.erlPass &&
            I.aec.erlDb < 8 &&
            Rt.push({
                name: "Marginal ERL",
                deduction: 5,
                reason: `ERL (${I.aec.erlDb} dB) is below optimal 10dB for reliable AEC`,
            }),
        i > 0.7 &&
            Rt.push({
                name: "High RT60",
                deduction: i > 1 ? 10 : 5,
                reason: `RT60 (${i}s) exceeds 0.6s recommended for conferencing`,
            }),
        ("Heavy" !== I.dspLoad.loadRating && "Very Heavy" !== I.dspLoad.loadRating) ||
            Rt.push({
                name: "High DSP Load",
                deduction: "Very Heavy" === I.dspLoad.loadRating ? 10 : 5,
                reason: `DSP load is ${I.dspLoad.loadRating} (${I.dspLoad.totalMips} MIPS) - ensure DSP can handle processing`,
            }),
        !_ &&
            t > 6 &&
            Rt.push({
                name: "High NOM Without Automixer",
                deduction: 5,
                reason: `${t} mics without automixer causes ${I.nom.nomPenaltyDb} dB NOM penalty`,
            }),
        I.latency.latencyPass &&
            I.latency.totalLatencyMs > 18 &&
            Rt.push({
                name: "Elevated Latency",
                deduction: 3,
                reason: `Latency (${I.latency.totalLatencyMs}ms) is approaching 20ms limit`,
            }),
        I.noiseAndSensitivity.snrPass &&
            I.noiseAndSensitivity.snrDb < 30 &&
            Rt.push({
                name: "Marginal SNR",
                deduction: 3,
                reason: `SNR (${I.noiseAndSensitivity.snrDb} dB) is passing but below optimal 30dB`,
            });
    const Pt = St.filter((e) => e.pass).length,
        At = St.length,
        Dt = St.reduce((e, t) => e + t.weight, 0),
        It = St.filter((e) => e.pass).reduce((e, t) => e + t.weight, 0),
        Et = Math.round((It / Dt) * 100),
        Ft = Rt.reduce((e, t) => e + t.deduction, 0),
        Bt = Math.max(0, Et - Ft),
        Tt = St.filter((e) => e.critical && !e.pass),
        Lt = Tt.length > 0;
    let Ht, Ut;
    Lt
        ? ((Ht = "Critical Issues"),
          (Ut = `System has critical failures: ${Tt.map((e) => e.name).join(", ")}. These must be addressed before deployment.`))
        : Bt >= 90 && 0 === Rt.length
          ? ((Ht = "Excellent"), (Ut = "System meets all design criteria with good margins - ready for deployment"))
          : Bt >= 80
            ? ((Ht = "Good"), (Ut = "System meets requirements but has some areas for optimization"))
            : Bt >= 65
              ? ((Ht = "Acceptable"), (Ut = "System is functional but review warnings for reliability improvements"))
              : Bt >= 50
                ? ((Ht = "Marginal"),
                  (Ut = "System has significant concerns - improvements recommended before deployment"))
                : ((Ht = "Needs Improvement"),
                  (Ut = "Multiple issues detected - significant design modifications required")),
        Rt.forEach((e) => {
            E.some((t) => t.includes(e.name)) || E.push(`${e.name}: ${e.reason}`);
        }),
        (I.summary = {
            overallScore: Bt,
            baseScore: Et,
            qualityDeductions: Ft,
            overallRating: Ht,
            overallAdvice: Ut,
            checksPass: Pt,
            checksTotal: At,
            hasCriticalFailure: Lt,
            criticalFailures: Tt.map((e) => e.name),
            assessmentDetails: St.map((e) => ({
                criterion: e.name,
                status: e.pass ? "PASS" : "FAIL",
                weight: e.weight,
                critical: e.critical,
            })),
            qualityFactors: Rt.map((e) => ({ factor: e.name, deduction: e.deduction, reason: e.reason })),
        });
    const qt = {},
        $t = {
            ioCount: Xe + Je,
            matrixSize: Qe,
            processingBlocks: w.length,
            aecChannels: w.includes("aec") ? t : 0,
            danteChannels: k,
            needsAutomixer: _ || t > 4,
        };
    let Wt = "entry",
        Vt = [];
    $t.ioCount > 32 || $t.matrixSize > 512 || $t.aecChannels > 16
        ? ((Wt = "enterprise"), Vt.push("High I/O, matrix, or AEC channel count requires enterprise-class DSP"))
        : $t.ioCount > 20 || $t.aecChannels > 8 || $t.matrixSize > 128
          ? ((Wt = "professional"), Vt.push("Medium-high I/O or processing requirements"))
          : $t.ioCount > 10 || $t.aecChannels > 4
            ? ((Wt = "mid-range"), Vt.push("Standard conferencing requirements"))
            : Vt.push("Basic conferencing needs - compact DSP suitable");
    const Ot = [];
    w.includes("aec") && Ot.push(`AEC (≥${Re}ms tail)`),
        (_ || w.includes("automixer")) && Ot.push("Automixer/gating"),
        "dante" === S && Ot.push("Dante connectivity"),
        "avb" === S && Ot.push("AVB connectivity"),
        "aes67" === S && Ot.push("AES67 connectivity"),
        R.usbVoip > 0 && Ot.push("USB audio interface"),
        w.includes("feedback_suppressor") && Ot.push("Feedback suppression"),
        w.includes("noise_reduction") && Ot.push("Noise reduction"),
        (qt.tier = Wt),
        (qt.tierReason = Vt),
        (qt.options = {
            entry: [
                {
                    brand: "Shure",
                    model: "IntelliMix P300",
                    channels: "8 AEC + 10 Dante in",
                    useCase: "Small-medium huddle rooms, fixed architecture, USB/Dante",
                },
                {
                    brand: "QSC",
                    model: "Core Nano",
                    channels: "64×64 network, 8×8 Dante",
                    useCase: "Small rooms, network-only I/O, Q-SYS ecosystem",
                },
                {
                    brand: "QSC",
                    model: "Core 8 Flex",
                    channels: "64×64 network + 8 flex I/O",
                    useCase: "Small rooms with analog + network endpoints",
                },
                {
                    brand: "Biamp",
                    model: "TesiraFORTÉ X 400",
                    channels: "4×4 + USB",
                    useCase: "Small meeting rooms, Teams/Zoom certified",
                },
            ],
            "mid-range": [
                {
                    brand: "Biamp",
                    model: "TesiraFORTÉ X 800",
                    channels: "8×8 + USB + Dante",
                    useCase: "Medium conference rooms, Teams certified",
                },
                {
                    brand: "Biamp",
                    model: "TesiraFORTÉ X 1600",
                    channels: "16×8 + USB + Dante",
                    useCase: "Larger meeting rooms with multiple mics",
                },
                {
                    brand: "QSC",
                    model: "Core 24f",
                    channels: "160×160 network + 24 I/O",
                    useCase: "Medium-large rooms, current flagship mid-range",
                },
                {
                    brand: "QSC",
                    model: "NV-32-H (Core Capable)",
                    channels: "64×32 + HDMI switching",
                    useCase: "Rooms needing local HDMI + audio processing",
                },
            ],
            professional: [
                {
                    brand: "Biamp",
                    model: "Tesira SERVER-IO",
                    channels: "Up to 3× DSP-2 cards + AVB/Dante",
                    useCase: "Large conference, divisible rooms, expandable",
                },
                {
                    brand: "Biamp",
                    model: "TesiraFORTÉ AVB VT4",
                    channels: "4×4 + AVB + VoIP",
                    useCase: "Conference rooms with AVB and telephony",
                },
                {
                    brand: "QSC",
                    model: "Server Core X10",
                    channels: "256×256 network, 64ch AEC",
                    useCase: "Large distributed systems, enterprise COTS server",
                },
            ],
            enterprise: [
                {
                    brand: "Biamp",
                    model: "Tesira SERVER",
                    channels: "Up to 8× DSP-2 cards",
                    useCase: "Campus-wide, large venues, max scalability",
                },
                {
                    brand: "QSC",
                    model: "Core 5200",
                    channels: "512×512 network, 160ch AEC",
                    useCase: "Enterprise scale, heavy processing",
                },
                {
                    brand: "QSC",
                    model: "Server Core X20r",
                    channels: "384×384 + redundancy",
                    useCase: "Mission-critical, dual power, 128ch AEC",
                },
            ],
        }[Wt]),
        (qt.featuresNeeded = Ot),
        (qt.roomSizeCategory = I.room.roomSizeCategory),
        (qt.complexityFactors = $t);
    const zt = [];
    return (
        I.pagNag.feedbackMarginPass ||
            zt.push({
                priority: "critical",
                category: "Feedback",
                issue: `System will feedback before achieving needed gain (deficit: ${Math.abs(I.pagNag.feedbackMarginDb).toFixed(1)} dB)`,
                actions: [
                    `Halve talker-to-mic distance (Ds: ${ie}m → ${(ie / 2).toFixed(2)}m) = +6 dB`,
                    `Double mic-to-speaker distance (D1: ${re}m → ${(2 * re).toFixed(1)}m) = +6 dB`,
                    "Use supercardioid microphones = +5.7 dB vs omni",
                    `Enable automixer = +${Math.round(10 * Math.log10(t) * 10) / 10} dB`,
                    "Consider distributed ceiling speakers to reduce D2",
                ],
            }),
        I.aec.erlDb < 3 &&
            zt.push({
                priority: "critical",
                category: "Echo",
                issue: `Very low ERL (${I.aec.erlDb} dB) - AEC cannot function properly`,
                actions: [
                    "Increase physical distance between microphones and speakers",
                    `Reduce RT60 from ${i}s to <0.5s with acoustic treatment`,
                    "Use directional ceiling speakers aimed away from microphones",
                    "Consider beamforming microphone arrays (Shure MXA, Sennheiser TeamConnect)",
                ],
            }),
        I.gainStructure.headroomPass ||
            zt.push({
                priority: "high",
                category: "Gain Structure",
                issue: `Insufficient headroom (${I.gainStructure.systemHeadroomDb} dB < ${I.gainStructure.headroomTarget} dB target)`,
                actions: [
                    "Reduce nominal operating level",
                    "Select equipment with higher maximum output capability",
                    "Review gain staging throughout signal chain",
                ],
            }),
        I.noiseAndSensitivity.snrPass ||
            zt.push({
                priority: "high",
                category: "Signal Quality",
                issue: `SNR below target (${I.noiseAndSensitivity.snrDb} dB < 25 dB)`,
                actions: [
                    `Reduce ambient noise (current: ${m} dBA, target: NC-30 or ≤35 dBA)`,
                    "Address HVAC noise with duct silencers or diffusers",
                    "Use higher sensitivity microphones",
                    "Position microphones closer to talkers",
                ],
            }),
        !I.aec.erlPass &&
            I.aec.erlDb >= 3 &&
            zt.push({
                priority: "high",
                category: "Echo",
                issue: `ERL below minimum (${I.aec.erlDb} dB < 6 dB)`,
                actions: [
                    "Increase mic-to-speaker separation",
                    `Reduce RT60 with acoustic panels (current: ${i}s)`,
                    "Use ceiling speakers with controlled directivity",
                    `Configure AEC tail length to ${Re}ms`,
                ],
            }),
        I.acr.acrPass ||
            zt.push({
                priority: "medium",
                category: "Coverage",
                issue: `Uneven coverage (ACR ${I.acr.acrDb} dB exceeds 6 dB limit)`,
                actions: [
                    "Add additional speakers for better distribution",
                    "Adjust speaker aiming and coverage patterns",
                    "Consider line array or distributed ceiling system",
                    "Use DSP delay alignment for distributed speakers",
                ],
            }),
        I.latency.latencyPass ||
            zt.push({
                priority: "medium",
                category: "Latency",
                issue: `Total latency (${I.latency.totalLatencyMs}ms) exceeds 20ms target`,
                actions: [
                    "Reduce DSP processing chain complexity",
                    "Configure Dante for lower latency (0.25ms or 0.5ms)",
                    "Minimize A/D and D/A conversion stages",
                    "Use dedicated audio network (separate from data traffic)",
                ],
            }),
        I.pagNag.feedbackMarginDb >= 0 &&
            I.pagNag.feedbackMarginDb < 6 &&
            zt.push({
                priority: "medium",
                category: "Feedback Margin",
                issue: `Low feedback margin (${I.pagNag.feedbackMarginDb} dB) - system may ring at high levels`,
                actions: [
                    "Apply PAG improvement recommendations",
                    "Add parametric feedback suppression to DSP",
                    "Implement proper automixer gating thresholds",
                    "Consider notch filtering for problematic frequencies",
                ],
            }),
        t > 4 &&
            !_ &&
            zt.push({
                priority: "recommendation",
                category: "Best Practice",
                issue: `Multiple open mics (${t}) without automixer`,
                actions: [
                    `Enable automixer to recover ${I.nom.nomPenaltyDb} dB of feedback margin`,
                    "Configure proper gating thresholds for room noise floor",
                    "Consider last-mic-on or chairman override for priority speakers",
                ],
            }),
        i > 0.6 &&
            zt.push({
                priority: "recommendation",
                category: "Room Acoustics",
                issue: `RT60 (${i}s) exceeds 0.6s recommended for conferencing`,
                actions: [
                    "Install acoustic absorption panels on walls",
                    "Add ceiling clouds or baffles",
                    "Consider carpet or acoustic flooring",
                    "Target RT60 of 0.4-0.5s per industry standards",
                ],
            }),
        "Very Heavy" === I.dspLoad.loadRating
            ? zt.push({
                  priority: "critical",
                  category: "DSP Processing",
                  issue: `DSP load is Very Heavy (${I.dspLoad.totalMips} MIPS) - system instability likely`,
                  actions: [
                      "Upgrade to enterprise-class DSP (QSC Core 5200, Biamp Tesira SERVER, QSC Server Core X20r)",
                      "Distribute processing across multiple DSP units",
                      "Reduce processing blocks - prioritize essential functions (AEC, automixer)",
                      "Remove per-channel processing from unused channels",
                      "Consider dedicated DSP for AEC if using many microphones",
                      "Keep total DSP utilization under 70% for headroom and stability",
                  ],
              })
            : "Heavy" === I.dspLoad.loadRating &&
              zt.push({
                  priority: "high",
                  category: "DSP Processing",
                  issue: `DSP load is Heavy (${I.dspLoad.totalMips} MIPS) - ensure adequate DSP capacity`,
                  actions: [
                      "Select professional-grade DSP (Biamp Tesira SERVER-IO, QSC Server Core X10, QSC Core 24f)",
                      "Keep DSP utilization under 70% to avoid dropouts during peak processing",
                      "Review processing chain - disable unused blocks",
                      "Consider reducing EQ bands or compression stages if not essential",
                      "Monitor DSP CPU usage after deployment",
                      "Plan for future expansion - select DSP with 30% capacity buffer",
                  ],
              }),
        (I.dspRecommendation = qt),
        (I.actionItems = zt),
        (I.warnings = E),
        (I.errors = F),
        I
    );
}

export { _jsxs, _Fragment, ResetConfirmModal, _0x99bba9, calculateCameraWithZoom, calculateMixedConduitFill, _0xb9cb50, _0xae89d3, calculateProjectorThrow, _0x78d92f, _0xac743b, _0x9860ed, calculateDvLEDPixelPitch, calculateVideoWallController, calculateRackCooling, calculateSpeakerPower, _0xb402b0, calculateCameraDistance, calculateDSP };
