import { _jsx, _jsxs, ResetConfirmModal } from '../utils.js';

const { useState, useEffect, useRef } = React;

function RackBuilderCalculator() {
    const [e, t] = useState([]),
        [s, a] = useState(""),
        [r, l] = useState("1"),
        [i, n] = useState("rack"),
        [o, d] = useState("full"),
        [c, m] = useState(25),
        [x, u] = useState(!1),
        [h, p] = useState([]),
        [g, b] = useState(null),
        [f, y] = useState(null),
        [j, _] = useState(null),
        [v, N] = useState({}),
        [w, C] = useState(null),
        [M, k] = useState(""),
        [S, R] = useState(null),
        [P, A] = useState(""),
        [D, I] = useState(null),
        [E, F] = useState(0),
        [B, T] = useState(0),
        [L, H] = useState("auto"),
        [U, q] = useState([]),
        [$, W] = useState(0),
        [V, O] = useState(null),
        [z, G] = useState(null),
        [X, J] = useState(!1),
        [Q, K] = useState(42),
        [Y, Z] = useState(!1),
        [ee, te] = useState(null),
        [se, ae] = useState(""),
        [re, le] = useState("1"),
        [ie, ne] = useState("rack"),
        [oe, de] = useState("full"),
        // Cache for PDF logo to avoid re-fetching on each export
        pdfLogoCacheRef = useRef(null),
        pdfLogoLoadingRef = useRef(false),
        ce = (useRef(null), [8, 12, 15, 18, 22, 25, 27, 32, 37, 42, 45]),
        me = 45,
        xe = [
            { bg: "bg-blue-500", border: "border-blue-600", text: "text-white" },
            { bg: "bg-emerald-500", border: "border-emerald-600", text: "text-white" },
            { bg: "bg-violet-500", border: "border-violet-600", text: "text-white" },
            { bg: "bg-amber-500", border: "border-amber-600", text: "text-white" },
            { bg: "bg-rose-500", border: "border-rose-600", text: "text-white" },
            { bg: "bg-cyan-500", border: "border-cyan-600", text: "text-white" },
            { bg: "bg-fuchsia-500", border: "border-fuchsia-600", text: "text-white" },
            { bg: "bg-lime-600", border: "border-lime-700", text: "text-white" },
        ],
        ue = (e) => {
            const t = "rack" === e.type,
                s = e.isHalfWidth || "half" === e.width,
                a = e.ru || 1;
            let r;
            return (
                (r = a <= 2 ? "small" : a <= 4 ? "medium" : "large"),
                t
                    ? s
                        ? "small" === r
                            ? {
                                  bg: "bg-blue-400",
                                  border: "border-blue-500 border-dashed",
                                  text: "text-white",
                                  label: "Rack Half 1-2U",
                              }
                            : "medium" === r
                              ? {
                                    bg: "bg-indigo-400",
                                    border: "border-indigo-500 border-dashed",
                                    text: "text-white",
                                    label: "Rack Half 3-4U",
                                }
                              : {
                                    bg: "bg-violet-400",
                                    border: "border-violet-500 border-dashed",
                                    text: "text-white",
                                    label: "Rack Half 5+U",
                                }
                        : "small" === r
                          ? {
                                bg: "bg-blue-600",
                                border: "border-blue-700",
                                text: "text-white",
                                label: "Rack Full 1-2U",
                            }
                          : "medium" === r
                            ? {
                                  bg: "bg-indigo-600",
                                  border: "border-indigo-700",
                                  text: "text-white",
                                  label: "Rack Full 3-4U",
                              }
                            : {
                                  bg: "bg-violet-600",
                                  border: "border-violet-700",
                                  text: "text-white",
                                  label: "Rack Full 5+U",
                              }
                    : s
                      ? "small" === r
                          ? {
                                bg: "bg-emerald-400",
                                border: "border-emerald-500 border-dashed",
                                text: "text-white",
                                label: "Shelf Half 1-2U",
                            }
                          : "medium" === r
                            ? {
                                  bg: "bg-teal-400",
                                  border: "border-teal-500 border-dashed",
                                  text: "text-white",
                                  label: "Shelf Half 3-4U",
                              }
                            : {
                                  bg: "bg-cyan-400",
                                  border: "border-cyan-500 border-dashed",
                                  text: "text-white",
                                  label: "Shelf Half 5+U",
                              }
                      : "small" === r
                        ? {
                              bg: "bg-emerald-600",
                              border: "border-emerald-700",
                              text: "text-white",
                              label: "Shelf Full 1-2U",
                          }
                        : "medium" === r
                          ? {
                                bg: "bg-teal-600",
                                border: "border-teal-700",
                                text: "text-white",
                                label: "Shelf Full 3-4U",
                            }
                          : {
                                bg: "bg-cyan-600",
                                border: "border-cyan-700",
                                text: "text-white",
                                label: "Shelf Full 5+U",
                            }
            );
        },
        [he, pe] = useState(!1);
    useEffect(() => {
        if (D) {
            F((e) => e + 1);
            const e = setTimeout(() => I(null), 4e3);
            return () => clearTimeout(e);
        }
    }, [D]);
    
    // Preload jsPDF library and logo on component mount for faster PDF export
    useEffect(() => {
        // Preload jsPDF library
        if (!window.jspdf) {
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
            script.async = true;
            document.head.appendChild(script);
        }
        
        // Preload logo
        if (!pdfLogoCacheRef.current && !pdfLogoLoadingRef.current) {
            pdfLogoLoadingRef.current = true;
            const logoUrl = "https://avtoolspro.com/AV_TOOLS_LOGO.png";
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = () => {
                try {
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    canvas.getContext("2d").drawImage(img, 0, 0);
                    pdfLogoCacheRef.current = canvas.toDataURL("image/png");
                } catch (e) {
                    console.log("Could not preload logo:", e);
                }
                pdfLogoLoadingRef.current = false;
            };
            img.onerror = () => {
                pdfLogoLoadingRef.current = false;
            };
            img.src = logoUrl;
        }
    }, []);
    
    const ge = ((e) => {
            const t = e.filter((e) => "rack" === e.type),
                s = e.filter((e) => "shelf" === e.type),
                a = t.filter((e) => "full" === e.width),
                r = t.filter((e) => "half" === e.width),
                l = s.filter((e) => "full" === e.width),
                i = s.filter((e) => "half" === e.width),
                n = {};
            r.forEach((e) => {
                n[e.ru] || (n[e.ru] = []), n[e.ru].push(e);
            });
            const o = {};
            i.forEach((e) => {
                o[e.ru] || (o[e.ru] = []), o[e.ru].push(e);
            });
            let d = 0,
                c = 0;
            Object.entries(n).forEach(([e, t]) => {
                const s = parseInt(e),
                    a = Math.floor(t.length / 2),
                    r = t.length % 2;
                (d += a * s + r * s), (c += a * s);
            });
            let m = 0,
                x = 0;
            Object.entries(o).forEach(([e, t]) => {
                const s = parseInt(e),
                    a = Math.floor(t.length / 2),
                    r = t.length % 2;
                (m += a * s + r * s), (x += a * s);
            });
            const u = a.reduce((e, t) => e + t.ru, 0),
                h = l.reduce((e, t) => e + t.ru, 0);
            let p = 0;
            Object.values(n).forEach((e) => {
                e.length % 2 == 1 && (p += e[0].ru);
            }),
                Object.values(o).forEach((e) => {
                    e.length % 2 == 1 && (p += e[0].ru);
                });
            const g = l.length + Object.values(o).reduce((e, t) => e + Math.ceil(t.length / 2), 0);
            return {
                effectiveRU: u + d + h + m,
                totalRUWithoutPairing: e.reduce((e, t) => e + t.ru, 0),
                ruSaved: c + x,
                halfBlanksNeeded: p,
                shelvesNeeded: g,
                halfRackCount: r.length,
                halfShelfCount: i.length,
                hasHeavyEquipment: e.some((e) => e.ru >= 4),
                halfRackByRU: n,
                halfShelfByRU: o,
            };
        })(e),
        be = ge.effectiveRU,
        fe = (() => {
            if (0 === be) return { rackSizes: [45], totalCapacity: 45, blanksNeeded: 45, actualSparePercent: 100 };
            const e = 1 - c / 100;
            let t = [];
            const s = Math.floor(45 * e);
            if (be <= Math.floor(me * e)) {
                const s = Math.ceil(be / e);
                t = [ce.find((e) => e >= s) || me];
            } else {
                let a = be;
                for (; a > 0; ) {
                    if (a > s) t.push(45), (a -= s);
                    else {
                        const s = Math.ceil(a / e),
                            r = ce.find((e) => e >= s) || me;
                        t.push(r), (a = 0);
                    }
                    if (t.length > 10) break;
                }
            }
            const a = t.reduce((e, t) => e + t, 0),
                r = a - be;
            return {
                rackSizes: t,
                totalCapacity: a,
                blanksNeeded: r,
                actualSparePercent: Math.round((r / a) * 100),
                needsMultipleRacks: t.length > 1,
            };
        })(),
        { rackSizes: ye, totalCapacity: je, blanksNeeded: _e, actualSparePercent: ve, needsMultipleRacks: Ne } = fe,
        we = [...ye],
        Ce = we.reduce((e, t) => e + t, 0),
        Me = Ce - be,
        ke =
            (Ce > 0 && Math.round((Me / Ce) * 100),
            () => {
                const t = [],
                    s = [];
                let a = 1;
                e.forEach((e, t) => {
                    s.push({ ...e, colorIndex: t % xe.length, isHalfWidth: "half" === e.width });
                });
                const r = we.length,
                    l = c / 100,
                    i = we.map((e) => Math.floor(e * (1 - l))),
                    n = [...s],
                    o = we.map(() => []),
                    d = we.map(() => 0);
                for (const e of n) {
                    let t = !1;
                    for (let s = 0; s < r && !t; s++) {
                        i[s] - d[s] >= e.ru && (o[s].push(e), (d[s] += e.ru), (t = !0));
                    }
                    if (!t)
                        for (let s = 0; s < r && !t; s++) {
                            we[s] - d[s] >= e.ru && (o[s].push(e), (d[s] += e.ru), (t = !0));
                        }
                }
                return (
                    we.forEach((e, s) => {
                        const r = [];
                        let l = 1,
                            i = 0;
                        for (
                            o[s].forEach((e) => {
                                r.push({ id: e.id, startRU: l, endRU: l + e.ru - 1, type: "equipment", item: e }),
                                    (l += e.ru),
                                    (i += e.ru);
                            });
                            l <= e;

                        )
                            r.push({ id: `blank-${s}-${a++}`, startRU: l, endRU: l, type: "blank", ru: 1 }), l++;
                        t.push({ rackIndex: s, rackSize: e, layout: r, equipmentRU: i, blanksRU: e - i });
                    }),
                    t
                );
            }),
        Se = useRef(""),
        Re = (useRef(""), useRef(c)),
        [Pe, Ae] = useState(!1),
        De = useRef(!1),
        Ie = useRef([]),
        Ee = useRef(h);
    useEffect(() => {
        Ee.current = h;
    }, [h]);
    const Fe = [8, 12, 15, 18, 22, 25, 27, 32, 37, 42, 45],
        Be = (e, t = 45) => {
            for (const s of Fe) if (s >= e && s <= t) return s;
            return t;
        },
        Te = (e, t) => (t >= 100 ? 0 : t <= 0 ? e : Math.floor(e * (1 - t / 100))),
        Le = (e, t) => (t <= 0 || e <= 0 ? 0 : t >= 100 ? 45 : Math.ceil((e * t) / (100 - t))),
        He = (e, t, s = 45) => {
            const a = ((e, t) => e + Le(e, t))(e, t);
            return Be(a, s);
        },
        Ue = (e) => {
            let t = 0,
                s = 0;
            return (
                e.forEach((e) => {
                    "equipment" === e.type && e.item ? (t += e.item.ru || 1) : "blank" === e.type && s++;
                }),
                { equipRU: t, blanksRU: s, totalRU: t + s }
            );
        },
        qe = (e, t, s, a = null) => {
            const r = ((e, t, s, a = null) => {
                for (let r = 0; r < e.length; r++) {
                    const l = e[r];
                    if ("equipment" !== l.type || !l.item) continue;
                    const i = l.item;
                    if (a && i.id === a) continue;
                    const n = i.isHalfWidth || "half" === i.width,
                        o = !0 === i.isHalfPair || null != i.pairItem;
                    if (n && !o && i.type === t && (i.ru || 1) === s) return { layoutIdx: r, item: l };
                }
                return null;
            })(e.layout, t, s, a);
            if (r)
                return {
                    canPlace: !0,
                    method: "pair",
                    layoutIdx: r.layoutIdx,
                    details: "Can pair with existing half-width item",
                };
            let l = 0,
                i = -1;
            for (let t = 0; t < e.layout.length; t++) {
                if ("blank" === e.layout[t].type) {
                    if ((-1 === i && (i = t), l++, l >= s))
                        return {
                            canPlace: !0,
                            method: "blanks",
                            startIdx: i,
                            blanksCount: l,
                            details: `Can use ${s}U of blank space`,
                        };
                } else (i = -1), (l = 0);
            }
            return {
                canPlace: !1,
                method: "none",
                details: `No compatible half-width to pair with and insufficient blanks (need ${s}U)`,
            };
        },
        $e = (e, t) => {
            const s = [];
            for (let a = 1; a <= e; a++)
                s.push({ id: `blank-${t}-${Date.now()}-${a}`, type: "blank", ru: 1, startRU: a, endRU: a });
            return { rackSize: e, rackIndex: t, name: "", equipmentRU: 0, blanksRU: e, layout: s };
        },
        We = (e, t) => (e.name && e.name.trim() ? e.name.trim() : `Rack ${t + 1}`),
        Ve = (e) => {
            if ("manual" !== L) return;
            const t = h.length,
                s = $e(e, t);
            p((e) => [...e, s]), T(t), J(!1);
        },
        Oe = (e, t, s = 45) => {
            const a = [8, 12, 15, 18, 22, 25, 27, 32, 37, 42, 45];
            return e.map((e, r) => {
                const l = {
                    ...e,
                    layout: e.layout.map((e) =>
                        "equipment" === e.type && e.item
                            ? { ...e, item: { ...e.item, pairItem: e.item.pairItem ? { ...e.item.pairItem } : null } }
                            : { ...e }
                    ),
                };
                let i = 0;
                l.layout.forEach((e) => {
                    "equipment" === e.type && e.item && (i += e.item.ru || 1);
                });
                let n = 0;
                for (let e = l.layout.length - 1; e >= 0 && "blank" === l.layout[e].type; e--) n++;
                let o = 0;
                l.layout.forEach((e) => {
                    "blank" === e.type && o++;
                });
                const d = o - n,
                    c = Le(i, t),
                    m = Math.max(d, c),
                    x = i + m;
                let u = a.find((e) => e >= x);
                u || (u = s), (u = Math.min(u, s));
                const h = u - i,
                    p = Math.max(0, h - d);
                for (let e = 0; e < n; e++)
                    l.layout.length > 0 && "blank" === l.layout[l.layout.length - 1].type && l.layout.pop();
                for (let e = 0; e < p; e++)
                    l.layout.push({
                        id: `blank-${r}-spare-${Date.now()}-${e}-${Math.random().toString(36).substr(2, 5)}`,
                        startRU: 0,
                        endRU: 0,
                        type: "blank",
                        ru: 1,
                        isUserGap: !1,
                    });
                let g = 0;
                for (
                    l.layout.forEach((e) => {
                        "equipment" === e.type && e.item ? (g += e.item.ru || 1) : "blank" === e.type && g++;
                    });
                    g > s && l.layout.length > 0 && "blank" === l.layout[l.layout.length - 1].type;

                )
                    l.layout.pop(), g--;
                let b = 1,
                    f = 0,
                    y = 0;
                l.layout.forEach((e) => {
                    if ("equipment" === e.type && e.item) {
                        const t = e.item.ru || 1;
                        (e.startRU = b), (e.endRU = b + t - 1), (b += t), (f += t);
                    } else "blank" === e.type && ((e.startRU = b), (e.endRU = b), b++, y++);
                });
                const j = f + y;
                return (l.rackSize = Math.min(j, s)), (l.equipmentRU = f), (l.blanksRU = y), (l.rackIndex = r), l;
            });
        },
        ze = (e, t, s = 45) => {
            const a = [8, 12, 15, 18, 22, 25, 27, 32, 37, 42, 45],
                r = Te(s, t),
                l = [];
            e.forEach((e) => {
                e.layout.forEach((e) => {
                    "equipment" === e.type &&
                        e.item &&
                        (l.push({
                            ...e,
                            item: {
                                ...e.item,
                                isHalfWidth: e.item.isHalfWidth || "half" === e.item.width,
                                isHalfPair: !1,
                                pairItem: null,
                            },
                        }),
                        e.item.isHalfPair &&
                            e.item.pairItem &&
                            l.push({
                                id: e.item.pairItem.id,
                                type: "equipment",
                                startRU: 0,
                                endRU: 0,
                                item: { ...e.item.pairItem, isHalfWidth: !0, isHalfPair: !1, pairItem: null },
                            }));
                });
            });
            const i = l.filter((e) => !e.item.isHalfWidth),
                n = l.filter((e) => e.item.isHalfWidth),
                o = {};
            n.forEach((e) => {
                const t = `${e.item.type}-${e.item.ru || 1}`;
                o[t] || (o[t] = []), o[t].push(e);
            });
            const d = [];
            Object.values(o).forEach((e) => {
                for (let t = 0; t < e.length; t += 2)
                    t + 1 < e.length ? d.push({ item1: e[t], item2: e[t + 1] }) : d.push({ item1: e[t], item2: null });
            });
            const c = [];
            i.forEach((e) => {
                c.push({ type: "full", effectiveRU: e.item.ru || 1, items: [e] });
            }),
                d.forEach((e) => {
                    const t = e.item1.item.ru || 1;
                    c.push({
                        type: e.item2 ? "paired-half" : "unpaired-half",
                        effectiveRU: t,
                        items: e.item2 ? [e.item1, e.item2] : [e.item1],
                    });
                }),
                c.sort((e, t) => t.effectiveRU - e.effectiveRU);
            const m = [];
            let x = [],
                u = 0;
            c.forEach((e) => {
                u + e.effectiveRU <= r
                    ? (x.push(e), (u += e.effectiveRU))
                    : (x.length > 0 && m.push({ items: x, equipRU: u }), (x = [e]), (u = e.effectiveRU));
            }),
                x.length > 0 && m.push({ items: x, equipRU: u });
            const h = m.map((e, a) => {
                const { items: r, equipRU: l } = e,
                    i = He(l, t, s),
                    n = i - l,
                    o = [];
                let d = 1;
                r.forEach((e) => {
                    if ("full" === e.type) {
                        const t = e.items[0],
                            s = t.item.ru || 1;
                        o.push({
                            ...t,
                            startRU: d,
                            endRU: d + s - 1,
                            item: { ...t.item, isHalfPair: !1, pairItem: null },
                        }),
                            (d += s);
                    } else if ("paired-half" === e.type) {
                        const t = e.items[0],
                            s = e.items[1],
                            a = t.item.ru || 1;
                        o.push({
                            ...t,
                            startRU: d,
                            endRU: d + a - 1,
                            item: {
                                ...t.item,
                                isHalfWidth: !0,
                                isHalfPair: !0,
                                pairItem: { ...s.item, isHalfWidth: !0 },
                            },
                        }),
                            (d += a);
                    } else {
                        const t = e.items[0],
                            s = t.item.ru || 1;
                        o.push({
                            ...t,
                            startRU: d,
                            endRU: d + s - 1,
                            item: { ...t.item, isHalfWidth: !0, isHalfPair: !1, pairItem: null },
                        }),
                            (d += s);
                    }
                });
                for (let e = 0; e < n; e++)
                    o.push({
                        id: `blank-${a}-opt-${Date.now()}-${e}-${Math.random().toString(36).substr(2, 5)}`,
                        startRU: d,
                        endRU: d,
                        type: "blank",
                        ru: 1,
                        isUserGap: !1,
                    }),
                        d++;
                return { rackIndex: a, rackSize: i, layout: o, equipmentRU: l, blanksRU: n };
            });
            return h.length > 0 ? h : [{ rackIndex: 0, rackSize: a[0], layout: [], equipmentRU: 0, blanksRU: a[0] }];
        },
        Ge = (e, t = 45) =>
            e.map((e, s) => {
                const a = {
                    ...e,
                    layout: e.layout.map((e) =>
                        "equipment" === e.type && e.item
                            ? { ...e, item: { ...e.item, pairItem: e.item.pairItem ? { ...e.item.pairItem } : null } }
                            : { ...e }
                    ),
                };
                let r = 0,
                    l = 0;
                a.layout.forEach((e) => {
                    "equipment" === e.type && e.item ? (r += e.item.ru || 1) : "blank" === e.type && l++;
                });
                let i = r + l;
                for (; i > t && a.layout.length > 0; ) {
                    if ("blank" !== a.layout[a.layout.length - 1].type) break;
                    a.layout.pop(), l--, i--;
                }
                let n = 1;
                return (
                    (r = 0),
                    (l = 0),
                    a.layout.forEach((e) => {
                        if ("equipment" === e.type && e.item) {
                            const t = e.item.ru || 1;
                            (e.startRU = n), (e.endRU = n + t - 1), (n += t), (r += t);
                        } else "blank" === e.type && ((e.startRU = n), (e.endRU = n), n++, l++);
                    }),
                    (a.rackSize = Math.min(r + l, t)),
                    (a.equipmentRU = r),
                    (a.blanksRU = l),
                    (a.rackIndex = s),
                    a
                );
            }),
        Xe = (e, t) =>
            t && 0 !== t.length
                ? e.map((e, s) =>
                      s < t.length && t[s].name ? { ...e, name: t[s].name } : { ...e, name: e.name || "" }
                  )
                : e;
    useEffect(() => {
        if ("manual" === L) return;
        const t = JSON.stringify(e);
        if (t !== Se.current) {
            if (((Se.current = t), e.length > 0)) {
                const t = Ie.current;
                Ie.current = e.map((e) => ({ ...e }));
                const s = Ee.current;
                if (De.current && s.length > 0 && t.length > 0) {
                    const a = new Set(t.map((e) => e.id)),
                        r = new Set(e.map((e) => e.id)),
                        l = e.filter((e) => !a.has(e.id)),
                        i = [...a].filter((e) => !r.has(e)),
                        n = new Map(e.map((e) => [e.id, e]));
                    let o = s.map((e) => ({
                        ...e,
                        layout: e.layout.map((e) =>
                            "equipment" === e.type && e.item
                                ? {
                                      ...e,
                                      item: { ...e.item, pairItem: e.item.pairItem ? { ...e.item.pairItem } : null },
                                  }
                                : { ...e }
                        ),
                    }));
                    i.forEach((e) => {
                        o.forEach((t, s) => {
                            const a = t.layout.findIndex((t) => "equipment" === t.type && t.item && t.item.id === e);
                            if (-1 !== a) {
                                const e = t.layout[a].item?.ru || 1,
                                    r = [];
                                for (let t = 0; t < e; t++)
                                    r.push({
                                        id: `blank-${s}-rep-${Date.now()}-${t}`,
                                        startRU: 0,
                                        endRU: 0,
                                        type: "blank",
                                        ru: 1,
                                    });
                                t.layout.splice(a, 1, ...r);
                            }
                            t.layout.forEach((t) => {
                                "equipment" === t.type &&
                                    t.item &&
                                    t.item.pairItem &&
                                    t.item.pairItem.id === e &&
                                    ((t.item.isHalfPair = !1), (t.item.pairItem = null));
                            });
                        });
                    });
                    const d = [];
                    for (
                        o.forEach((e, t) => {
                            e.layout.forEach((e, s) => {
                                if ("equipment" === e.type && e.item) {
                                    const s = n.get(e.item.id);
                                    if (s) {
                                        const a = e.item.isHalfWidth || "half" === e.item.width,
                                            r = "full" === s.width;
                                        if (a && r && e.item.isHalfPair && e.item.pairItem) {
                                            const s = {
                                                ...e.item.pairItem,
                                                isHalfWidth: !0,
                                                isHalfPair: !1,
                                                pairItem: null,
                                            };
                                            d.push({ item: s, originalRackIdx: t }),
                                                (e.item.isHalfPair = !1),
                                                (e.item.pairItem = null);
                                        }
                                        (e.item.name = s.name),
                                            (e.item.ru = s.ru),
                                            (e.item.type = s.type),
                                            (e.item.width = s.width),
                                            (e.item.isHalfWidth = "half" === s.width),
                                            r && ((e.item.isHalfPair = !1), (e.item.pairItem = null));
                                        const l = !a,
                                            i = "half" === s.width;
                                        l && i && (e.item.needsPairingCheck = !0);
                                    }
                                    if (e.item.pairItem) {
                                        const s = n.get(e.item.pairItem.id);
                                        if (s) {
                                            if ("full" === s.width) {
                                                const a = {
                                                    ...e.item.pairItem,
                                                    ...s,
                                                    isHalfWidth: !1,
                                                    isHalfPair: !1,
                                                    pairItem: null,
                                                };
                                                (e.item.isHalfPair = !1),
                                                    (e.item.pairItem = null),
                                                    d.push({ item: a, originalRackIdx: t, isNowFull: !0 });
                                            } else
                                                (e.item.pairItem.name = s.name),
                                                    (e.item.pairItem.ru = s.ru),
                                                    (e.item.pairItem.type = s.type),
                                                    (e.item.pairItem.width = s.width);
                                        }
                                    }
                                }
                            });
                        }),
                            d.forEach(({ item: t, originalRackIdx: s, isNowFull: a }) => {
                                const r = e.findIndex((e) => e.id === t.id),
                                    l = r >= 0 ? r % xe.length : 0;
                                if (a) {
                                    let e = !1;
                                    const s = Te(me, c);
                                    for (let a = 0; a < o.length && !e; a++) {
                                        const r = o[a];
                                        let i = 0;
                                        if (
                                            (r.layout.forEach((e) => {
                                                "equipment" === e.type && e.item && (i += e.item.ru || 1);
                                            }),
                                            i + (t.ru || 1) <= s)
                                        ) {
                                            let s = r.layout.length;
                                            for (
                                                let e = r.layout.length - 1;
                                                e >= 0 && "blank" === r.layout[e].type;
                                                e--
                                            )
                                                s = e;
                                            let a = t.ru || 1;
                                            for (
                                                let e = r.layout.length - 1;
                                                e >= 0 && a > 0 && "blank" === r.layout[e].type;
                                                e--
                                            )
                                                r.layout.splice(e, 1), a--;
                                            r.layout.splice(Math.min(s, r.layout.length), 0, {
                                                id: t.id,
                                                type: "equipment",
                                                startRU: 0,
                                                endRU: 0,
                                                item: { ...t, colorIndex: l },
                                            }),
                                                (e = !0);
                                        }
                                    }
                                    if (!e) {
                                        const e = o.length,
                                            s = He(t.ru || 1, c, me),
                                            a = [
                                                {
                                                    id: t.id,
                                                    type: "equipment",
                                                    startRU: 1,
                                                    endRU: t.ru || 1,
                                                    item: { ...t, colorIndex: l },
                                                },
                                            ];
                                        for (let r = t.ru || 1; r < s; r++)
                                            a.push({
                                                id: `blank-${e}-${Date.now()}-${r}`,
                                                type: "blank",
                                                startRU: r + 1,
                                                endRU: r + 1,
                                                ru: 1,
                                            });
                                        o.push({
                                            rackIndex: e,
                                            rackSize: s,
                                            layout: a,
                                            equipmentRU: t.ru || 1,
                                            blanksRU: s - (t.ru || 1),
                                        });
                                    }
                                } else {
                                    let e = !1;
                                    for (let s = 0; s < o.length && !e; s++) {
                                        const a = o[s];
                                        for (let s = 0; s < a.layout.length && !e; s++) {
                                            const r = a.layout[s];
                                            if ("equipment" !== r.type || !r.item) continue;
                                            if (r.item.id === t.id) continue;
                                            !(r.item.isHalfWidth || "half" === r.item.width) ||
                                                r.item.isHalfPair ||
                                                r.item.pairItem ||
                                                (r.item.type === t.type &&
                                                    (r.item.ru || 1) === (t.ru || 1) &&
                                                    ((r.item.isHalfPair = !0),
                                                    (r.item.pairItem = { ...t, colorIndex: l, isHalfWidth: !0 }),
                                                    (e = !0)));
                                        }
                                    }
                                    if (!e) {
                                        const e = Te(me, c);
                                        let s = !1;
                                        for (let a = 0; a < o.length && !s; a++) {
                                            const r = o[a];
                                            let i = 0;
                                            if (
                                                (r.layout.forEach((e) => {
                                                    "equipment" === e.type && e.item && (i += e.item.ru || 1);
                                                }),
                                                i + (t.ru || 1) <= e)
                                            ) {
                                                let e = r.layout.length;
                                                for (
                                                    let t = r.layout.length - 1;
                                                    t >= 0 && "blank" === r.layout[t].type;
                                                    t--
                                                )
                                                    e = t;
                                                let a = t.ru || 1;
                                                for (
                                                    let e = r.layout.length - 1;
                                                    e >= 0 && a > 0 && "blank" === r.layout[e].type;
                                                    e--
                                                )
                                                    r.layout.splice(e, 1), a--;
                                                r.layout.splice(Math.min(e, r.layout.length), 0, {
                                                    id: t.id,
                                                    type: "equipment",
                                                    startRU: 0,
                                                    endRU: 0,
                                                    item: {
                                                        ...t,
                                                        colorIndex: l,
                                                        isHalfWidth: !0,
                                                        isHalfPair: !1,
                                                        pairItem: null,
                                                    },
                                                }),
                                                    (s = !0);
                                            }
                                        }
                                        if (!s) {
                                            const e = o.length,
                                                s = He(t.ru || 1, c, me),
                                                a = [
                                                    {
                                                        id: t.id,
                                                        type: "equipment",
                                                        startRU: 1,
                                                        endRU: t.ru || 1,
                                                        item: {
                                                            ...t,
                                                            colorIndex: l,
                                                            isHalfWidth: !0,
                                                            isHalfPair: !1,
                                                            pairItem: null,
                                                        },
                                                    },
                                                ];
                                            for (let r = t.ru || 1; r < s; r++)
                                                a.push({
                                                    id: `blank-${e}-${Date.now()}-${r}`,
                                                    type: "blank",
                                                    startRU: r + 1,
                                                    endRU: r + 1,
                                                    ru: 1,
                                                });
                                            o.push({
                                                rackIndex: e,
                                                rackSize: s,
                                                layout: a,
                                                equipmentRU: t.ru || 1,
                                                blanksRU: s - (t.ru || 1),
                                            });
                                        }
                                    }
                                }
                            }),
                            o.forEach((e) => {
                                for (let t = 0; t < e.layout.length; t++) {
                                    const s = e.layout[t];
                                    if ("equipment" !== s.type || !s.item || !s.item.needsPairingCheck) continue;
                                    const a = s.item,
                                        r = a.type,
                                        l = a.ru || 1;
                                    delete s.item.needsPairingCheck;
                                    let i = !1;
                                    for (let s = 0; s < o.length && !i; s++) {
                                        const n = o[s];
                                        for (let s = 0; s < n.layout.length; s++) {
                                            if (n === e && t === s) continue;
                                            const o = n.layout[s];
                                            if ("equipment" !== o.type || !o.item) continue;
                                            const d = o.item,
                                                c = d.isHalfWidth || "half" === d.width,
                                                m = !0 === d.isHalfPair || null != d.pairItem;
                                            if (c && !m && d.type === r && (d.ru || 1) === l && !d.needsPairingCheck) {
                                                (n.layout[s] = {
                                                    ...o,
                                                    item: {
                                                        ...d,
                                                        isHalfPair: !0,
                                                        pairItem: {
                                                            ...a,
                                                            isHalfWidth: !0,
                                                            isHalfPair: !1,
                                                            pairItem: null,
                                                            needsPairingCheck: void 0,
                                                        },
                                                    },
                                                }),
                                                    (e.layout[t] = {
                                                        id: `blank-paired-${Date.now()}-${t}`,
                                                        type: "blank",
                                                        ru: l,
                                                        startRU: 0,
                                                        endRU: 0,
                                                    }),
                                                    (i = !0);
                                                break;
                                            }
                                        }
                                    }
                                }
                            });
                        o.length < we.length;

                    ) {
                        const e = o.length,
                            t = we[e] || 45,
                            s = [];
                        for (let a = 0; a < t; a++)
                            s.push({
                                id: `blank-${e}-new-${Date.now()}-${a}`,
                                startRU: a + 1,
                                endRU: a + 1,
                                type: "blank",
                                ru: 1,
                            });
                        o.push({ rackIndex: e, rackSize: t, layout: s, equipmentRU: 0, blanksRU: t });
                    }
                    for (
                        l.forEach((t) => {
                            const s = e.indexOf(t) % xe.length,
                                a = "half" === t.width;
                            let r = !1;
                            const l = Te(me, c);
                            if (a) {
                                const e = [...o.keys()].sort((e, t) => (e === B ? -1 : t === B ? 1 : 0));
                                for (const a of e) {
                                    if (r) break;
                                    const e = o[a];
                                    for (let a = 0; a < e.layout.length; a++) {
                                        const l = e.layout[a];
                                        if ("equipment" !== l.type || !l.item) continue;
                                        const i = l.item;
                                        if ((i.isHalfWidth || "half" === i.width) && !i.isHalfPair && !i.pairItem) {
                                            const e = i.type === t.type,
                                                a = (i.ru || 1) === (t.ru || 1);
                                            if (e && a) {
                                                (l.item = {
                                                    ...i,
                                                    isHalfWidth: !0,
                                                    isHalfPair: !0,
                                                    pairItem: { ...t, colorIndex: s, isHalfWidth: !0 },
                                                }),
                                                    (r = !0);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            if (!r) {
                                const e = {
                                        id: t.id,
                                        startRU: 0,
                                        endRU: 0,
                                        type: "equipment",
                                        item: { ...t, colorIndex: s, isHalfWidth: a, isHalfPair: !1, pairItem: null },
                                    },
                                    i = [];
                                for (let e = 0; e < o.length; e++) {
                                    const s = o[e];
                                    let a = 0;
                                    s.layout.forEach((e) => {
                                        "equipment" === e.type && e.item && (a += e.item.ru || 1);
                                    });
                                    const r = a + t.ru,
                                        n = l - a;
                                    r <= l && i.push({ rackIdx: e, availableCapacity: n, isTarget: e === B });
                                }
                                i.sort((e, t) =>
                                    e.isTarget && !t.isTarget
                                        ? -1
                                        : !e.isTarget && t.isTarget
                                          ? 1
                                          : t.availableCapacity - e.availableCapacity
                                );
                                for (let s = 0; s < i.length && !r; s++) {
                                    const { rackIdx: a } = i[s],
                                        l = o[a];
                                    let n = l.layout.length;
                                    for (let e = l.layout.length - 1; e >= 0 && "blank" === l.layout[e].type; e--)
                                        n = e;
                                    let d = t.ru;
                                    for (
                                        let e = l.layout.length - 1;
                                        e >= 0 && d > 0 && "blank" === l.layout[e].type;
                                        e--
                                    )
                                        l.layout.splice(e, 1), d--;
                                    const c = Math.min(n, l.layout.length);
                                    l.layout.splice(c, 0, e), (r = !0);
                                }
                                if (!r) {
                                    const s = o.length,
                                        a = He(t.ru, c, me),
                                        l = [];
                                    l.push(e);
                                    for (let e = t.ru; e < a; e++)
                                        l.push({
                                            id: `blank-${s}-new-${Date.now()}-${e}`,
                                            startRU: e + 1,
                                            endRU: e + 1,
                                            type: "blank",
                                            ru: 1,
                                        });
                                    o.push({
                                        rackIndex: s,
                                        rackSize: a,
                                        layout: l,
                                        equipmentRU: t.ru,
                                        blanksRU: a - t.ru,
                                    }),
                                        (r = !0);
                                }
                            }
                        }),
                            o = Oe(o, c, me);
                        o.length > 1;

                    ) {
                        if (o[o.length - 1].layout.some((e) => "equipment" === e.type)) break;
                        o.pop();
                    }
                    if (
                        (((e) => {
                            for (const t of e)
                                for (const e of t.layout)
                                    if (
                                        "equipment" === e.type &&
                                        e.item &&
                                        e.item.pairItem &&
                                        e.item.type !== e.item.pairItem.type
                                    )
                                        return (
                                            console.error(
                                                "INVALID: Mixed mount types detected",
                                                e.item.type,
                                                e.item.pairItem.type
                                            ),
                                            !1
                                        );
                            return !0;
                        })(o) || console.error("ERROR: Mixed mount types detected in layout - this should not happen"),
                        p(Xe(Ge(o, me), Ee.current)),
                        g)
                    ) {
                        const e = g.layoutId;
                        if ("string" == typeof e && e.endsWith(":pair")) {
                            const t = e.slice(0, -5),
                                s = isNaN(t) ? t : Number(t),
                                a = o[g.rackIdx]?.layout.find((e) => e.id === s);
                            (a && a.item && a.item.pairItem) || b(null);
                        } else i.includes(e) && b(null);
                    }
                } else {
                    const e = ke(),
                        t = ze(e, c, me);
                    if ((p(Xe(Ge(t, me), h)), g))
                        if (t.some((e) => e.layout.some((e) => e.id === g.layoutId))) {
                            for (let e = 0; e < t.length; e++)
                                if (t[e].layout.find((e) => e.id === g.layoutId)) {
                                    e !== g.rackIdx && b({ rackIdx: e, layoutId: g.layoutId });
                                    break;
                                }
                        } else b(null);
                }
            } else p([]), b(null), (De.current = !1);
            u(!1);
        }
    }, [e, L]),
        useEffect(() => {
            if ("manual" !== L && c !== Re.current && e.length > 0)
                if (((Re.current = c), De.current && h.length > 0)) {
                    const e = Te(me, c);
                    let t = !1;
                    if (
                        (h.forEach((s) => {
                            let a = 0;
                            s.layout.forEach((e) => {
                                "equipment" === e.type && e.item && (a += e.item.ru || 1);
                            }),
                                a > e && (t = !0);
                        }),
                        t)
                    ) {
                        const e = ze(h, c, me);
                        p(Xe(Ge(e, me), h));
                    } else {
                        let e = Oe(h, c, me);
                        for (; e.length > 1; ) {
                            if (e[e.length - 1].layout.some((e) => "equipment" === e.type)) break;
                            e.pop();
                        }
                        p(Xe(Ge(e, me), h));
                    }
                    Ae(!1), u(!0);
                } else {
                    const e = ke(),
                        t = ze(e, c, me);
                    p(Xe(Ge(t, me), h)), Ae(!1), u(!1);
                }
        }, [c, e.length, L]),
        useEffect(() => {
            h.length > 0 && B >= h.length && T(Math.max(0, h.length - 1));
        }, [h.length, B]);
    const Je = () => {
            const n = parseInt(r) || 1;
            if (n < 1) return I("Equipment must be at least 1U");
            if (n > me) return I("Equipment cannot exceed 45U (max rack size)");
            if (
                (n > 20 && console.warn(`Adding large equipment: ${n}U - may require special mounting considerations`),
                "manual" === L)
            ) {
                if (0 === h.length) {
                    const r = Math.max(8, n),
                        d = $e(r, 0),
                        c = {
                            id: Date.now(),
                            name: s.trim() || `Equipment ${e.length + 1}`,
                            ru: n,
                            type: i,
                            width: o,
                            isHalfWidth: "half" === o,
                        };
                    t([...e, c]);
                    const m = {
                        id: `layout-${Date.now()}`,
                        type: "equipment",
                        item: { ...c, isHalfPair: !1, pairItem: null },
                        startRU: 1,
                        endRU: n,
                        ru: n,
                    };
                    d.layout.splice(0, n, m);
                    let x = 1;
                    return (
                        d.layout.forEach((e) => {
                            const t = "equipment" === e.type ? e.item?.ru || 1 : e.ru || 1;
                            (e.startRU = x), (e.endRU = x + t - 1), (x += t);
                        }),
                        p([d]),
                        T(0),
                        a(""),
                        void l("1")
                    );
                }
                const r = h[B];
                if (!r) return void I("Please add a rack first");
                const d = "half" === o;
                if (d) {
                    const d = qe(r, i, n);
                    if (d.canPlace && "pair" === d.method) {
                        const r = {
                            id: Date.now(),
                            name: s.trim() || `Equipment ${e.length + 1}`,
                            ru: n,
                            type: i,
                            width: o,
                            isHalfWidth: !0,
                        };
                        return (
                            t([...e, r]),
                            p((e) =>
                                e.map((e, t) => {
                                    if (t !== B) return e;
                                    const s = e.layout.map((e, t) =>
                                        t === d.layoutIdx && "equipment" === e.type && e.item
                                            ? {
                                                  ...e,
                                                  item: {
                                                      ...e.item,
                                                      isHalfPair: !0,
                                                      pairItem: { ...r, isHalfWidth: !0 },
                                                  },
                                              }
                                            : { ...e }
                                    );
                                    return { ...e, layout: s };
                                })
                            ),
                            a(""),
                            void l("1")
                        );
                    }
                    if (!d.canPlace)
                        return void I(
                            `Not enough space in Rack ${B + 1}. Need ${n}U of blanks, or an unpaired ${"rack" === i ? "rack-mounted" : "shelf-mounted"} half-width ${n}U item to pair with.`
                        );
                }
                let c = 0,
                    m = -1;
                for (let e = 0; e < r.layout.length; e++) {
                    if ("blank" === r.layout[e].type) {
                        if ((-1 === m && (m = e), c++, c >= n)) break;
                    } else (m = -1), (c = 0);
                }
                if (c < n)
                    return void I(
                        d
                            ? `Not enough space in Rack ${B + 1}. Need ${n}U of blanks, or an unpaired ${"rack" === i ? "rack-mounted" : "shelf-mounted"} half-width ${n}U item to pair with.`
                            : `Not enough space in Rack ${B + 1}. Need ${n}U of consecutive blanks.`
                    );
                const x = {
                    id: Date.now(),
                    name: s.trim() || `Equipment ${e.length + 1}`,
                    ru: n,
                    type: i,
                    width: o,
                    isHalfWidth: "half" === o,
                };
                return (
                    t([...e, x]),
                    p((e) => {
                        const t = [...e],
                            s = { ...t[B], layout: [...t[B].layout] },
                            a = s.layout[m].startRU,
                            r = {
                                id: `layout-${Date.now()}`,
                                type: "equipment",
                                item: { ...x, isHalfPair: !1, pairItem: null },
                                startRU: a,
                                endRU: a + n - 1,
                                ru: n,
                            };
                        s.layout.splice(m, n, r);
                        let l = 1;
                        return (
                            s.layout.forEach((e) => {
                                const t = "equipment" === e.type ? e.item?.ru || 1 : e.ru || 1;
                                (e.startRU = l), (e.endRU = l + t - 1), (l += t);
                            }),
                            (t[B] = s),
                            t
                        );
                    }),
                    a(""),
                    void l("1")
                );
            }
            const d = be + n;
            if (d > 337.5)
                return I(`Total equipment (${d}U) exceeds practical limit. Consider splitting into separate systems.`);
            t([...e, { id: Date.now(), name: s.trim() || `Equipment ${e.length + 1}`, ru: n, type: i, width: o }]),
                a(""),
                l("1"),
                u(!1);
        },
        Qe = (s) => {
            t(e.filter((e) => e.id !== s)), b(null), u(!1);
        },
        Ke = (s, a) => {
            a.trim() &&
                (t(e.map((e) => (e.id === s ? { ...e, name: a.trim() } : e))),
                p((e) =>
                    e.map((e) => ({
                        ...e,
                        layout: e.layout.map((e) =>
                            "equipment" === e.type && e.item && e.item.id === s
                                ? { ...e, item: { ...e.item, name: a.trim() } }
                                : "equipment" === e.type && e.item && e.item.pairItem && e.item.pairItem.id === s
                                  ? { ...e, item: { ...e.item, pairItem: { ...e.item.pairItem, name: a.trim() } } }
                                  : e
                        ),
                    }))
                ));
        },
        Ye = (s, a) => {
            const r = parseInt(a);
            if (isNaN(r) || r < 1 || r > me) return;
            let l = !1,
                i = 1,
                n = "rack",
                o = !1,
                d = null,
                c = -1;
            const m = e.find((e) => e.id === s);
            if (
                (m && ((i = m.ru || 1), (n = m.type || "rack"), (o = m.isHalfWidth || "half" === m.width)),
                h.forEach((e, t) => {
                    e.layout.forEach((e) => {
                        "equipment" === e.type &&
                            e.item &&
                            (e.item.id === s &&
                                ((c = t),
                                (n = e.item.type || "rack"),
                                (o = e.item.isHalfWidth || "half" === e.item.width),
                                e.item.pairItem && (d = e.item.pairItem.ru || 1)),
                            e.item.pairItem &&
                                e.item.pairItem.id === s &&
                                ((l = !0),
                                (c = t),
                                (i = e.item.pairItem.ru || 1),
                                (n = e.item.pairItem.type || "rack"),
                                (o = e.item.pairItem.isHalfWidth || "half" === e.item.pairItem.width),
                                (d = e.item.ru || 1)));
                    });
                }),
                "manual" === L && c >= 0)
            ) {
                const e = h[c];
                if (e && r > i) {
                    const t = r - i;
                    if (o) {
                        if (!qe(e, n, r, s).canPlace) {
                            let s = !1;
                            if ((d === r && (s = !0), !s)) {
                                if (e.layout.filter((e) => "blank" === e.type).length < t)
                                    return void I(
                                        `Cannot increase size: need ${t}U of blank space or a compatible unpaired ${"shelf" === n ? "shelf" : "rack"}-mounted ${r}U half-width item.`
                                    );
                            }
                        }
                    } else {
                        const s = e.layout.filter((e) => "blank" === e.type).length;
                        if (s < t)
                            return void I(`Cannot increase size: need ${t}U of blank space, only ${s}U available.`);
                    }
                }
            }
            l || t(e.map((e) => (e.id === s ? { ...e, ru: r } : e))),
                p((e) =>
                    e.map((e) => {
                        const t = [];
                        let a = !1,
                            l = null;
                        if (
                            (e.layout.forEach((e) => {
                                if ("equipment" === e.type && e.item)
                                    if (e.item.id === s) {
                                        a = !0;
                                        const s = e.item.isHalfWidth || "half" === e.item.width;
                                        e.item.pairItem && (e.item.pairItem.ru || 1) !== r
                                            ? (t.push({
                                                  ...e,
                                                  item: { ...e.item, ru: r, isHalfPair: !1, pairItem: null },
                                                  ru: r,
                                              }),
                                              (l = { ...e.item.pairItem, isHalfPair: !1, pairItem: null }))
                                            : (s && e.item.pairItem,
                                              t.push({ ...e, item: { ...e.item, ru: r }, ru: r }));
                                    } else
                                        e.item.pairItem && e.item.pairItem.id === s
                                            ? ((a = !0),
                                              (e.item.ru || 1) !== r
                                                  ? (t.push({
                                                        ...e,
                                                        item: { ...e.item, isHalfPair: !1, pairItem: null },
                                                    }),
                                                    (l = { ...e.item.pairItem, ru: r, isHalfPair: !1, pairItem: null }))
                                                  : t.push({
                                                        ...e,
                                                        item: { ...e.item, pairItem: { ...e.item.pairItem, ru: r } },
                                                    }))
                                            : t.push(e);
                                else t.push(e);
                            }),
                            a)
                        ) {
                            if (l) {
                                const e = l,
                                    a = e.ru || 1;
                                let r = !1;
                                if (e.isHalfWidth || "half" === e.width)
                                    for (let l = 0; l < t.length; l++) {
                                        const i = t[l];
                                        if ("equipment" === i.type && i.item) {
                                            const n = i.item,
                                                o = n.isHalfWidth || "half" === n.width,
                                                d = n.isHalfPair && n.pairItem;
                                            if (o && !d && n.type === e.type && (n.ru || 1) === a && n.id !== s) {
                                                (t[l] = {
                                                    ...i,
                                                    item: { ...n, isHalfPair: !0, pairItem: { ...e, isHalfWidth: !0 } },
                                                }),
                                                    (r = !0);
                                                break;
                                            }
                                        }
                                    }
                                if (!r) {
                                    let s = -1,
                                        r = 0;
                                    for (let e = 0; e < t.length; e++)
                                        if ("blank" === t[e].type) {
                                            if ((-1 === s && (s = e), r++, r >= a)) break;
                                        } else (s = -1), (r = 0);
                                    r >= a && s >= 0
                                        ? t.splice(s, a, {
                                              id: `layout-orphan-${Date.now()}`,
                                              type: "equipment",
                                              item: e,
                                              startRU: 0,
                                              endRU: 0,
                                              ru: a,
                                          })
                                        : t.push({
                                              id: `layout-orphan-${Date.now()}`,
                                              type: "equipment",
                                              item: e,
                                              startRU: 0,
                                              endRU: 0,
                                              ru: a,
                                          });
                                }
                            }
                            let a = -1;
                            for (let e = 0; e < t.length; e++) {
                                const r = t[e];
                                if ("equipment" === r.type && r.item && r.item.id === s) {
                                    a = e;
                                    break;
                                }
                            }
                            if (a >= 0) {
                                const e = t[a].item,
                                    s = e.isHalfWidth || "half" === e.width,
                                    l = e.isHalfPair && e.pairItem;
                                if (s && !l)
                                    for (let s = 0; s < t.length; s++) {
                                        if (s === a) continue;
                                        const l = t[s];
                                        if ("equipment" === l.type && l.item) {
                                            const i = l.item,
                                                n = i.isHalfWidth || "half" === i.width,
                                                o = i.isHalfPair && i.pairItem;
                                            if (n && !o && i.type === e.type && (i.ru || 1) === r) {
                                                (t[s] = {
                                                    ...l,
                                                    item: { ...i, isHalfPair: !0, pairItem: { ...e, isHalfWidth: !0 } },
                                                }),
                                                    t.splice(a, 1),
                                                    t.push({
                                                        id: `blank-freed-${Date.now()}`,
                                                        type: "blank",
                                                        ru: 1,
                                                        startRU: 0,
                                                        endRU: 0,
                                                    });
                                                break;
                                            }
                                        }
                                    }
                            }
                            if ("manual" === L) {
                                let s = 0;
                                t.forEach((e) => {
                                    s += "equipment" === e.type ? e.item?.ru || 1 : e.ru || 1;
                                });
                                const a = e.rackSize || 42;
                                if (s > a) {
                                    let e = s - a;
                                    for (let s = t.length - 1; s >= 0 && e > 0; s--)
                                        "blank" === t[s].type && (t.splice(s, 1), e--);
                                } else if (s < a) {
                                    const r = a - s;
                                    for (let s = 0; s < r; s++)
                                        t.push({
                                            id: `blank-${e.rackIndex}-${Date.now()}-${s}`,
                                            type: "blank",
                                            ru: 1,
                                            startRU: 0,
                                            endRU: 0,
                                        });
                                }
                            }
                            let i = 1;
                            t.forEach((e) => {
                                const t = "equipment" === e.type ? e.item?.ru || 1 : e.ru || 1;
                                (e.startRU = i), (e.endRU = i + t - 1), (i += t);
                            });
                        }
                        return { ...e, layout: t };
                    })
                ),
                u(!1);
        },
        Ze = (e) => {
            if (!g) return;
            const { rackIdx: t, layoutId: s } = g,
                a = h[t];
            if (!a) return;
            const { totalRU: r } = Ue(a.layout);
            if ("manual" === L) {
                const e = a.rackSize || r;
                if (r >= e) return void I(`Cannot add blank: Rack ${t + 1} is full (${e}U). Increase rack size first.`);
            } else {
                if (r >= me) return void I("Cannot add blank: rack is at maximum size (45U)");
                if (r + 1 > me) return void I("Cannot add blank: would exceed maximum rack size (45U)");
            }
            const l = h.map((e) => ({
                    ...e,
                    layout: e.layout.map((e) =>
                        "equipment" === e.type && e.item
                            ? { ...e, item: { ...e.item, pairItem: e.item.pairItem ? { ...e.item.pairItem } : null } }
                            : { ...e }
                    ),
                })),
                i = l[t];
            if (!i) return;
            const n = i.layout.findIndex((e) => e.id === s);
            if (n < 0) return;
            let o = 0;
            i.layout.forEach((e) => {
                "equipment" === e.type && e.item && (o += e.item.ru || 1);
            });
            let d = 0;
            i.layout.forEach((e) => {
                "blank" === e.type && d++;
            });
            const c = ("manual" === L && a.rackSize) || me;
            if (o + d + 1 > c) return void I(`Cannot add blank: would exceed rack size (${c}U)`);
            const m = {
                id: `blank-${t}-user-${Date.now()}`,
                type: "blank",
                startRU: 0,
                endRU: 0,
                ru: 1,
                isUserGap: !0,
            };
            "above" === e ? i.layout.splice(n + 1, 0, m) : i.layout.splice(n, 0, m);
            const x = Ue(i.layout).totalRU;
            if (x > me) {
                let e = x - me;
                for (let t = i.layout.length - 1; t >= 0 && e > 0; t--)
                    "blank" !== i.layout[t].type || i.layout[t].isUserGap || (i.layout.splice(t, 1), e--);
            }
            st(i), p(Ge(l, me)), u(!1), (De.current = !0);
        },
        et = (e) => {
            C(e.id), k(e.name);
        },
        tt = () => {
            w && M.trim() && Ke(w, M), C(null), k("");
        },
        st = (e) => {
            let t = 0,
                s = 0;
            e.layout.forEach((e) => {
                "equipment" === e.type && e.item ? (t += e.item.ru || 1) : "blank" === e.type && s++;
            });
            let a = t + s;
            for (; a > me && e.layout.length > 0; ) {
                if ("blank" !== e.layout[e.layout.length - 1].type) break;
                e.layout.pop(), s--, a--;
            }
            let r = 1;
            (t = 0),
                (s = 0),
                e.layout.forEach((e) => {
                    if ("equipment" === e.type && e.item) {
                        const s = e.item.ru || 1;
                        (e.startRU = r), (e.endRU = r + s - 1), (r += s), (t += s);
                    } else "blank" === e.type && ((e.startRU = r), (e.endRU = r), r++, s++);
                }),
                (e.rackSize = Math.min(t + s, me)),
                (e.equipmentRU = t),
                (e.blanksRU = s);
        },
        at = (e, t) => {
            b({ rackIdx: e, layoutId: t }), e !== B && T(e);
        },
        rt = (e, t) => {
            y({ rackIdx: e, item: t }), at(e, t.id);
        },
        lt = (e, t, s) => {
            e.preventDefault(), _({ rackIdx: t, ru: s });
        },
        it = (e, t, s) => {
            if ((e.preventDefault(), !f)) return;
            const a = h.map((e) => ({
                    ...e,
                    layout: e.layout.map((e) =>
                        "equipment" === e.type && e.item
                            ? { ...e, item: { ...e.item, pairItem: e.item.pairItem ? { ...e.item.pairItem } : null } }
                            : { ...e }
                    ),
                })),
                r = f.item && f.item.id;
            if ("string" == typeof r && r.endsWith(":pair")) {
                const e = r.slice(0, -5),
                    l = isNaN(e) ? e : Number(e),
                    i = a[f.rackIdx],
                    n = i.layout.findIndex((e) => e.id === l);
                if (n >= 0 && i.layout[n].item && i.layout[n].item.pairItem) {
                    const e = i.layout[n].item.pairItem,
                        r = e.ru || 1;
                    (i.layout[n].item.isHalfPair = !1), (i.layout[n].item.pairItem = null);
                    const l = {
                        id: e.id,
                        startRU: 0,
                        endRU: 0,
                        type: "equipment",
                        item: { ...e, isHalfWidth: !0, isHalfPair: !1, pairItem: null },
                    };
                    if (f.rackIdx === t) {
                        const e = Math.max(0, Math.min(s - 1, i.layout.length));
                        i.layout.splice(e, 0, l), st(i);
                    } else {
                        const n = a[t],
                            o = n.layout.filter((e) => "blank" === e.type).length;
                        if (o < r)
                            return (
                                I(`Cannot move "${e.name}" (${r}U) to Rack ${t + 1}. Only ${o}U available.`),
                                y(null),
                                void _(null)
                            );
                        let d = 0;
                        for (let e = n.layout.length - 1; e >= 0 && d < r; e--)
                            "blank" === n.layout[e].type && (n.layout.splice(e, 1), d++);
                        const c = Math.max(0, Math.min(s - 1, n.layout.length));
                        n.layout.splice(c, 0, l), st(i), st(n);
                    }
                    if ("manual" === L) p([...a]), y(null), _(null);
                    else {
                        const e = Oe(a, c, me);
                        p(Ge(e, me)), y(null), _(null), u(!1), (De.current = !0);
                    }
                    return void at(t, e.id);
                }
            }
            if (f.rackIdx === t) {
                const e = a[t],
                    r = e.layout.findIndex((e) => e.id === f.item.id),
                    l = Math.max(0, Math.min(s - 1, e.layout.length - 1));
                if (r !== l) {
                    const [t] = e.layout.splice(r, 1);
                    "blank" === t.type && (t.isUserGap = !0), e.layout.splice(l, 0, t), st(e);
                }
            } else {
                const e = a[f.rackIdx],
                    r = a[t],
                    l = f.item,
                    i = "equipment" === l.type ? l.item.ru : 1;
                if ("equipment" === l.type) {
                    const e = r.layout.filter((e) => "blank" === e.type).length;
                    if (e < i) {
                        const s = l.item?.name || "Item";
                        return (
                            I(`Cannot move "${s}" (${i}U) to Rack ${t + 1}. Only ${e}U available.`),
                            y(null),
                            void _(null)
                        );
                    }
                }
                const n = e.layout.findIndex((e) => e.id === l.id),
                    [o] = e.layout.splice(n, 1);
                if (("blank" === o.type && (o.isUserGap = !0), "equipment" === l.type)) {
                    for (let t = 0; t < i; t++)
                        e.layout.splice(n + t, 0, {
                            id: `blank-${f.rackIdx}-${Date.now()}-${t}`,
                            startRU: 0,
                            endRU: 0,
                            type: "blank",
                            ru: 1,
                        });
                    let t = 0;
                    for (let e = r.layout.length - 1; e >= 0 && t < i; e--)
                        "blank" === r.layout[e].type && (r.layout.splice(e, 1), t++);
                }
                const d = Math.max(0, Math.min(s - 1, r.layout.length));
                r.layout.splice(d, 0, o), st(e), st(r), at(t, o.id);
            }
            if ("manual" === L) p([...a]), y(null), _(null);
            else {
                const e = Oe(a, c, me);
                p(Ge(e, me)), y(null), _(null), u(!1), (De.current = !0);
            }
        },
        nt =
            e.length > 0
                ? (() => {
                      const t = [];
                      let s = 0,
                          a = 0;
                      h.forEach((e) => {
                          e.layout.forEach((e) => {
                              if ("equipment" === e.type && e.item) {
                                  const t = "shelf" === e.item.type,
                                      r = e.item.pairItem && "shelf" === e.item.pairItem.type,
                                      l = e.item.ru || 1;
                                  (t || r) && (s++, (a += l));
                              }
                          });
                      }),
                          s > 0 &&
                              t.push({
                                  type: "info",
                                  text: `🗄️ ${s} shelf${s > 1 ? " slots" : ""} needed (${a}U total).`,
                              }),
                          ge.ruSaved > 0 &&
                              t.push({ type: "success", text: `✅ Half-width pairing saves ${ge.ruSaved}U.` }),
                          ge.halfBlanksNeeded > 0 &&
                              t.push({
                                  type: "warning",
                                  text: `Need ${ge.halfBlanksNeeded}U half-rack filler panels.`,
                              }),
                          ge.hasHeavyEquipment &&
                              t.push({
                                  type: "info",
                                  text: "⚖️ Heavy equipment (4U+) should be mounted at bottom for stability.",
                              });
                      const r = e.filter((e) => e.ru >= 10);
                      if (
                          (r.length > 0 &&
                              t.push({
                                  type: "warning",
                                  text: `🔧 ${r.length} item(s) ≥10U - verify rail support and weight capacity.`,
                              }),
                          h.length > 1)
                      ) {
                          const e = h
                              .map((e, t) => {
                                  const { equipRU: s, blanksRU: a, totalRU: r } = Ue(e.layout);
                                  return {
                                      idx: t + 1,
                                      equipRU: s,
                                      blanksRU: a,
                                      rackSize: r,
                                      spare: r > 0 ? Math.round((a / r) * 100) : 0,
                                  };
                              })
                              .map((e) => `R${e.idx}: ${e.equipRU}/${e.rackSize}U (${e.spare}%)`)
                              .join(" • ");
                          t.push({ type: "info", text: `📦 ${e}` });
                      }
                      if (h.length > 0) {
                          const e = h.map((e, t) => {
                                  const { equipRU: s, blanksRU: a, totalRU: r } = Ue(e.layout),
                                      l = r > 0 ? Math.round((a / r) * 100) : 0;
                                  return {
                                      idx: t + 1,
                                      shortName:
                                          e.name && e.name.trim()
                                              ? e.name.trim().length > 8
                                                  ? e.name.trim().substring(0, 8) + "…"
                                                  : e.name.trim()
                                              : `R${t + 1}`,
                                      equipRU: s,
                                      blanksRU: a,
                                      rackSize: r,
                                      spare: l,
                                      meetsTarget: l >= c,
                                  };
                              }),
                              s = e.reduce((e, t) => e + t.blanksRU, 0);
                          t.push({ type: "info", text: `EIA-310: ${s}U blank panels for airflow management.` });
                          const a = e.every((e) => e.meetsTarget),
                              r = e.filter((e) => !e.meetsTarget);
                          if (a)
                              h.length > 1
                                  ? t.push({ type: "success", text: `✅ All ${h.length} racks maintain ≥${c}% spare.` })
                                  : t.push({
                                        type: "success",
                                        text: `✅ ${e[0]?.spare || 0}% spare capacity (target: ${c}%).`,
                                    });
                          else {
                              const e = r.map((e) => `${e.shortName}: ${e.spare}%`).join(", ");
                              t.push({ type: "warning", text: `⚠️ Below ${c}% target: ${e}. Consider adding racks.` });
                          }
                      }
                      h.length > 5 &&
                          t.push({
                              type: "warning",
                              text: `📊 ${h.length} racks - consider cable management and power distribution.`,
                          });
                      const l = Math.round(50 * be);
                      let i = 0,
                          n = 0;
                      h.forEach((e) => {
                          const t = Ue(e.layout);
                          (i += t.equipRU), (n += t.blanksRU);
                      });
                      const o = i + n,
                          d = o > 0 ? Math.round((n / o) * 100) : 0;
                      return (
                          be > 20 && t.push({ type: "info", text: `⚡ Estimated power: ~${l}W. Verify PDU capacity.` }),
                          d >= c
                              ? t.push({ type: "success", text: `✅ Overall: ${d}% spare (target: ${c}%).` })
                              : t.push({ type: "warning", text: `⚠️ Overall: ${d}% spare < ${c}% target.` }),
                          t
                      );
                  })()
                : [],
        ot = (() => {
            if (!g) return null;
            const e = h[g.rackIdx];
            if (!e) return null;
            const t = g.layoutId;
            if ("string" == typeof t && t.endsWith(":pair")) {
                const s = t.slice(0, -5),
                    a = isNaN(s) ? s : Number(s),
                    r = e.layout.find((e) => e.id === a);
                if (r && r.item && r.item.pairItem)
                    return {
                        id: t,
                        type: "equipment",
                        item: r.item.pairItem,
                        startRU: r.startRU,
                        endRU: r.endRU,
                        isPairItem: !0,
                        mainEntryId: a,
                    };
            }
            return e.layout.find((e) => e.id === t) || null;
        })(),
        dt = (e, t, s) => {
            const { layout: a } = e,
                { equipRU: r, blanksRU: l, totalRU: i } = Ue(a),
                n = i,
                o = r,
                d = l,
                m = n > 0 ? Math.round((o / n) * 100) : 0,
                x = n > 0 ? Math.round((d / n) * 100) : 0,
                u = g?.rackIdx === t,
                f = h.length > 1,
                y = a.some((e) => "equipment" === e.type),
                rackDisplayName = We(e, t);
            return _jsxs("div", {
                key: t,
                className: "flex-shrink-0 flex flex-col " + (f ? "w-56" : "flex-1 max-w-md"),
                style: { alignSelf: "flex-end" },
                children: [
                    _jsxs("div", {
                        className:
                            "mb-2 p-2 rounded-lg transition-all cursor-pointer " +
                            (u
                                ? "bg-yellow-100 border-2 border-yellow-400 shadow-md"
                                : B === t
                                  ? "bg-blue-50 border-2 border-blue-300"
                                  : "bg-gray-100 border-2 border-transparent hover:bg-gray-200"),
                        onClick: () => {
                            T(t), e.layout && e.layout.length > 0 && b({ rackIdx: t, layoutId: e.layout[0].id });
                        },
                        children: [
                            _jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center justify-between gap-1",
                                        children: [
                                            _jsx("div", {
                                                className: "rack-name-container flex-1 min-w-0 overflow-hidden",
                                                children: _jsx("input", {
                                                    type: "text",
                                                    value: e.name || "",
                                                    placeholder: f ? `Rack ${t + 1}` : "Rack",
                                                    onChange: (ev) => {
                                                        ev.stopPropagation();
                                                        const idx = t;
                                                        const val = ev.target.value;
                                                        p((racks) => racks.map((r, i) => (i === idx ? { ...r, name: val } : r)));
                                                    },
                                                    onClick: (ev) => ev.stopPropagation(),
                                                    onFocus: (ev) => {
                                                        ev.target.select();
                                                        ev.target.style.animation = 'none';
                                                    },
                                                    onBlur: (ev) => {
                                                        if (e.name && e.name.length > 15) {
                                                            ev.target.style.animation = '';
                                                        }
                                                    },
                                                    className:
                                                        "font-semibold text-sm bg-transparent border-none outline-none w-full placeholder-gray-700 focus:bg-white focus:ring-1 focus:ring-blue-400 focus:rounded px-1 " +
                                                        (e.name && e.name.length > 15 ? "rack-name-marquee" : ""),
                                                    style: e.name && e.name.length > 15 ? { width: 'max-content', minWidth: '100%' } : {},
                                                    title: e.name ? e.name : "Click to edit rack name",
                                                }),
                                            }),
                                            _jsxs("div", {
                                                className: "flex items-center gap-1 flex-shrink-0",
                                                children: [
                                                    _jsx("span", {
                                                        className: "text-xs text-gray-500 whitespace-nowrap",
                                                        children: `(${n}U)`,
                                                    }),
                                                    B === t &&
                                                        f &&
                                                        _jsx("span", {
                                                            className:
                                                                "text-xs bg-blue-500 text-white px-1 py-0.5 rounded whitespace-nowrap",
                                                            children: "Target",
                                                        }),
                                                    _jsxs("span", {
                                                        className:
                                                            "text-xs px-1.5 py-0.5 rounded font-medium whitespace-nowrap " +
                                                            (m <= 75
                                                                ? "bg-green-100 text-green-700"
                                                                : m <= 85
                                                                  ? "bg-yellow-100 text-yellow-700"
                                                                  : "bg-red-100 text-red-700"),
                                                        children: [m, "%"],
                                                    }),
                                                    "manual" === L &&
                                                        h.length > 1 &&
                                                        _jsx("button", {
                                                            onClick: (e) => {
                                                                e.stopPropagation(), te({ index: t, hasEquipment: y }), Z(!0);
                                                            },
                                                            className:
                                                                "text-red-500 hover:text-red-700 hover:bg-red-50 rounded p-0.5 transition-colors flex-shrink-0",
                                                            title: "Delete Rack",
                                                            children: _jsx("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 2,
                                                                children: _jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                                }),
                                                            }),
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "flex items-center justify-between mt-1 text-xs text-gray-500",
                                children: [
                                    _jsxs("span", { className: "whitespace-nowrap", children: [o, "U equip"] }),
                                    _jsxs("span", {
                                        className: "whitespace-nowrap",
                                        children: [d, "U spare (", x, "%)"],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "flex gap-1",
                        children: [
                            _jsx("div", {
                                className: "flex flex-col-reverse text-xs text-gray-400 w-6 pt-1 pb-1",
                                children: Array.from({ length: n }, (e, t) => t + 1).map((e, t) =>
                                    _jsx(
                                        "div",
                                        {
                                            className: "flex items-center justify-end pr-1",
                                            style: { height: "22px", marginTop: t < n - 1 ? "1px" : "0" },
                                            children: e,
                                        },
                                        e
                                    )
                                ),
                            }),
                            _jsx("div", {
                                className:
                                    "flex-1 bg-gray-900 rounded-lg p-1 border-2 transition-all " +
                                    (u ? "border-yellow-400 shadow-lg shadow-yellow-200/50" : "border-gray-700"),
                                style: { minHeight: 22 * n + (n - 1) + 8 + "px" },
                                onDragOver: (e) => lt(e, t, 1),
                                onDrop: (e) => it(e, t, 1),
                                children: _jsx("div", {
                                    className: "flex flex-col-reverse gap-px",
                                    children: a.map((e) => {
                                        const s = g?.rackIdx === t && g?.layoutId === e.id,
                                            a = j?.rackIdx === t && e.startRU <= j.ru && j.ru <= e.endRU;
                                        if ("equipment" === e.type) {
                                            const r = e.item,
                                                l = ue(r),
                                                i = 22 * r.ru + (r.ru - 1),
                                                n = g?.layoutId === `${e.id}:pair`;
                                            return r.isHalfWidth
                                                ? _jsxs(
                                                      "div",
                                                      {
                                                          key: e.id,
                                                          className: "flex gap-px",
                                                          style: { height: `${i}px` },
                                                          onDragOver: (s) => lt(s, t, e.startRU),
                                                          onDrop: (s) => it(s, t, e.startRU),
                                                          children: [
                                                              _jsxs("div", {
                                                                  className: `flex-1 ${l.bg} ${l.border} ${l.text} border rounded flex items-center justify-center px-1 cursor-grab ${s ? "ring-2 ring-yellow-400" : ""} ${a ? "ring-2 ring-purple-400" : ""}`,
                                                                  draggable: !0,
                                                                  onDragStart: () => rt(t, e),
                                                                  onClick: (s) => {
                                                                      s.stopPropagation(), at(t, e.id);
                                                                  },
                                                                  children: [
                                                                      _jsx("span", {
                                                                          className: "text-xs truncate",
                                                                          children: r.name,
                                                                      }),
                                                                      _jsxs("span", {
                                                                          className: "text-xs ml-1 opacity-75",
                                                                          children: [r.ru, "U"],
                                                                      }),
                                                                  ],
                                                              }),
                                                              r.isHalfPair && r.pairItem
                                                                  ? (() => {
                                                                        const s = ue(r.pairItem);
                                                                        return _jsxs("div", {
                                                                            className: `flex-1 ${s.bg} ${s.border} ${s.text} border rounded flex items-center justify-center px-1 cursor-grab ${n ? "ring-2 ring-yellow-400" : ""}`,
                                                                            draggable: !0,
                                                                            onDragStart: () => {
                                                                                const s = {
                                                                                    id: `${e.id}:pair`,
                                                                                    type: "equipment",
                                                                                    item: r.pairItem,
                                                                                    startRU: e.startRU,
                                                                                    endRU: e.endRU,
                                                                                };
                                                                                rt(t, s);
                                                                            },
                                                                            onClick: (s) => {
                                                                                s.stopPropagation(),
                                                                                    at(t, `${e.id}:pair`);
                                                                            },
                                                                            children: [
                                                                                _jsx("span", {
                                                                                    className: "text-xs truncate",
                                                                                    children: r.pairItem.name,
                                                                                }),
                                                                                _jsxs("span", {
                                                                                    className:
                                                                                        "text-xs ml-1 opacity-75",
                                                                                    children: [r.pairItem.ru, "U"],
                                                                                }),
                                                                            ],
                                                                        });
                                                                    })()
                                                                  : _jsx("div", {
                                                                        className:
                                                                            "flex-1 bg-gray-600 border border-dashed border-gray-500 rounded flex items-center justify-center",
                                                                        children: _jsx("span", {
                                                                            className: "text-gray-400 text-xs",
                                                                            children: "½▭",
                                                                        }),
                                                                    }),
                                                          ],
                                                      },
                                                      e.id
                                                  )
                                                : _jsxs("div", {
                                                      key: e.id,
                                                      draggable: !0,
                                                      onDragStart: () => rt(t, e),
                                                      onDragOver: (s) => lt(s, t, e.startRU),
                                                      onDrop: (s) => it(s, t, e.startRU),
                                                      onClick: () => at(t, e.id),
                                                      className: `${l.bg} ${l.border} ${l.text} border rounded flex items-center justify-between px-2 cursor-grab ${s ? "ring-2 ring-yellow-400" : ""} ${a ? "ring-2 ring-purple-400" : ""}`,
                                                      style: { height: `${i}px`, minHeight: "20px" },
                                                      children: [
                                                          _jsxs("div", {
                                                              className: "flex items-center gap-1 overflow-hidden",
                                                              children: [
                                                                  _jsx("span", {
                                                                      className: "text-xs opacity-75",
                                                                      children: "shelf" === r.type ? "📦" : "🔧",
                                                                  }),
                                                                  _jsx("span", {
                                                                      className: "text-xs font-medium truncate",
                                                                      children: r.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          _jsxs("span", {
                                                              className: "text-xs font-bold",
                                                              children: [r.ru, "U"],
                                                          }),
                                                      ],
                                                  });
                                        }
                                        return _jsx("div", {
                                            key: e.id,
                                            draggable: !0,
                                            onDragStart: () => rt(t, e),
                                            onDragOver: (s) => lt(s, t, e.startRU),
                                            onDrop: (s) => it(s, t, e.startRU),
                                            onClick: () => at(t, e.id),
                                            className: `bg-gray-700 border border-dashed border-gray-500 rounded flex items-center justify-center cursor-grab ${s ? "ring-2 ring-yellow-400" : ""} ${a ? "ring-2 ring-purple-400" : ""}`,
                                            style: { height: "22px" },
                                            children: _jsx("span", {
                                                className: "text-gray-400 text-xs",
                                                children: "▭ 1U",
                                            }),
                                        });
                                    }),
                                }),
                            }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "mt-2 flex flex-col items-center gap-1 text-xs",
                        children: [
                            _jsxs("div", {
                                className: "flex gap-3",
                                children: [
                                    _jsxs("span", { className: "text-blue-600", children: ["⚡", o, "U"] }),
                                    _jsxs("span", { className: "text-gray-500", children: ["▭", d, "U"] }),
                                ],
                            }),
                            _jsx("div", {
                                className:
                                    "px-2 py-0.5 rounded " +
                                    (n > 0 && Math.round((d / n) * 100) >= c
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"),
                                children: `${n > 0 ? Math.round((d / n) * 100) : 0}% spare`,
                            }),
                        ],
                    }),
                ],
            });
        };
    return _jsxs("div", {
        className: "max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6",
        children: [
            _jsx("h1", {
                className: "text-xl sm:text-2xl font-bold text-gray-900 mb-4",
                children: "Professional Rack Builder",
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl p-4 mb-4 border shadow-sm",
                children: [
                    _jsxs("div", {
                        className: "flex flex-col sm:flex-row sm:items-center gap-4",
                        children: [
                            _jsxs("div", {
                                className: "flex-1",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            _jsx("span", {
                                                className: "text-lg",
                                                children: "auto" === L ? "⚡" : "🔧",
                                            }),
                                            _jsx("h2", {
                                                className: "font-semibold text-gray-800 text-base",
                                                children: "Design Mode",
                                            }),
                                            _jsx("span", {
                                                className:
                                                    "text-xs px-2 py-0.5 rounded-full font-medium " +
                                                    ("auto" === L
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-indigo-100 text-indigo-700"),
                                                children: "auto" === L ? "Automatic" : "Manual",
                                            }),
                                        ],
                                    }),
                                    _jsx("p", {
                                        className: "text-xs text-gray-500 leading-relaxed",
                                        children:
                                            "auto" === L
                                                ? "Equipment is automatically distributed across racks based on spare capacity target."
                                                : "Full control over rack sizes, equipment placement, and arrangement. No auto-optimization.",
                                    }),
                                ],
                            }),
                            _jsx("div", {
                                className: "flex-shrink-0",
                                children: _jsxs("div", {
                                    className: "inline-flex rounded-lg p-1 bg-gray-100",
                                    children: [
                                        _jsxs("button", {
                                            onClick: () => H("auto"),
                                            className:
                                                "flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all " +
                                                ("auto" === L
                                                    ? "bg-white text-blue-700 shadow-sm"
                                                    : "text-gray-500 hover:text-gray-700"),
                                            children: [
                                                _jsx("span", { children: "⚡" }),
                                                _jsx("span", { children: "Automatic" }),
                                            ],
                                        }),
                                        _jsxs("button", {
                                            onClick: () => {
                                                H("manual"), 0 === e.length && p([]);
                                            },
                                            className:
                                                "flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all " +
                                                ("manual" === L
                                                    ? "bg-white text-indigo-700 shadow-sm"
                                                    : "text-gray-500 hover:text-gray-700"),
                                            children: [
                                                _jsx("span", { children: "🔧" }),
                                                _jsx("span", { children: "Manual" }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    _jsx("div", {
                        className: "mt-3 pt-3 border-t border-gray-100",
                        children: _jsxs("div", {
                            className: "flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500",
                            children:
                                "auto" === L
                                    ? [
                                          _jsxs("span", {
                                              key: "f1",
                                              className: "flex items-center gap-1",
                                              children: [
                                                  _jsx("span", { className: "text-green-500", children: "✓" }),
                                                  "Auto rack sizing",
                                              ],
                                          }),
                                          _jsxs("span", {
                                              key: "f2",
                                              className: "flex items-center gap-1",
                                              children: [
                                                  _jsx("span", { className: "text-green-500", children: "✓" }),
                                                  "Spare capacity optimization",
                                              ],
                                          }),
                                          _jsxs("span", {
                                              key: "f3",
                                              className: "flex items-center gap-1",
                                              children: [
                                                  _jsx("span", { className: "text-green-500", children: "✓" }),
                                                  "Equipment redistribution",
                                              ],
                                          }),
                                          _jsxs("span", {
                                              key: "f4",
                                              className: "flex items-center gap-1",
                                              children: [
                                                  _jsx("span", { className: "text-green-500", children: "✓" }),
                                                  "Automatic racks addition",
                                              ],
                                          }),
                                      ]
                                    : [
                                          _jsxs("span", {
                                              key: "f1",
                                              className: "flex items-center gap-1",
                                              children: [
                                                  _jsx("span", { className: "text-indigo-500", children: "✓" }),
                                                  "Custom rack sizes",
                                              ],
                                          }),
                                          _jsxs("span", {
                                              key: "f2",
                                              className: "flex items-center gap-1",
                                              children: [
                                                  _jsx("span", { className: "text-indigo-500", children: "✓" }),
                                                  "Manual placement",
                                              ],
                                          }),
                                          _jsxs("span", {
                                              key: "f3",
                                              className: "flex items-center gap-1",
                                              children: [
                                                  _jsx("span", { className: "text-indigo-500", children: "✓" }),
                                                  "Manual arrange",
                                              ],
                                          }),
                                          _jsxs("span", {
                                              key: "f4",
                                              className: "flex items-center gap-1",
                                              children: [
                                                  _jsx("span", { className: "text-indigo-500", children: "✓" }),
                                                  "Fixed rack layout",
                                              ],
                                          }),
                                      ],
                        }),
                    }),
                ],
            }),
            D &&
                _jsxs("div", {
                    key: E,
                    className:
                        "fixed top-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-xl shadow-2xl border border-red-400/30",
                    children: [
                        _jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [
                                _jsx("div", {
                                    className:
                                        "flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center",
                                    children: _jsx("span", { className: "text-lg", children: "⚠️" }),
                                }),
                                _jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        _jsx("div", {
                                            className: "font-semibold text-sm text-white/90 mb-0.5",
                                            children: "Action Required",
                                        }),
                                        _jsx("div", { className: "text-sm text-white/95 leading-snug", children: D }),
                                    ],
                                }),
                                _jsx("button", {
                                    onClick: () => I(null),
                                    className:
                                        "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors",
                                    children: "×",
                                }),
                            ],
                        }),
                        _jsx("div", {
                            className: "mt-2 h-1 bg-white/20 rounded-full overflow-hidden",
                            children: _jsx("div", {
                                className: "h-full bg-white/60 rounded-full",
                                style: { animation: "shrink 4s linear forwards", width: "100%" },
                            }),
                        }),
                    ],
                }),
            _jsxs("div", {
                className: "bg-purple-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-purple-200",
                children: [
                    _jsx("h2", {
                        className: "font-semibold text-purple-800 mb-2 text-sm sm:text-base",
                        children: "AVIXA/EIA-310-E Compliant Design",
                    }),
                    _jsxs("div", {
                        className: "grid grid-cols-5 gap-1 sm:gap-2 text-xs",
                        children: [
                            _jsxs("div", {
                                className: "bg-white p-1.5 sm:p-2 rounded border text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-purple-700", children: "1U" }),
                                    _jsx("div", {
                                        className: "text-purple-600 text-[10px] sm:text-xs",
                                        children: "44.45mm",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-1.5 sm:p-2 rounded border text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-purple-700", children: '19"' }),
                                    _jsx("div", {
                                        className: "text-purple-600 text-[10px] sm:text-xs",
                                        children: "Full",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-1.5 sm:p-2 rounded border text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-purple-700", children: '9.5"' }),
                                    _jsx("div", {
                                        className: "text-purple-600 text-[10px] sm:text-xs",
                                        children: "Half",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-1.5 sm:p-2 rounded border text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-purple-700", children: "45U" }),
                                    _jsx("div", {
                                        className: "text-purple-600 text-[10px] sm:text-xs",
                                        children: "Max",
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "bg-white p-1.5 sm:p-2 rounded border text-center",
                                children: [
                                    _jsx("div", { className: "font-bold text-purple-700", children: `${c}%` }),
                                    _jsx("div", {
                                        className: "text-purple-600 text-[10px] sm:text-xs",
                                        children: "Target",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            _jsxs("div", {
                className: "bg-white rounded-xl shadow-md p-3 sm:p-4 mb-4 sm:mb-6 border",
                children: [
                    _jsxs("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            _jsx("h3", {
                                className: "font-semibold text-gray-800 text-sm",
                                children: "🎨 Color Legend",
                            }),
                            _jsx("span", {
                                className: "text-xs text-gray-500",
                                children: "Equipment is color-coded by type, width & size",
                            }),
                        ],
                    }),
                    _jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: [
                            {
                                category: "Rack-Mounted",
                                items: [
                                    {
                                        bg: "bg-blue-600",
                                        border: "border-blue-700",
                                        label: "Full 1-2U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-indigo-600",
                                        border: "border-indigo-700",
                                        label: "Full 3-4U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-violet-600",
                                        border: "border-violet-700",
                                        label: "Full 5+U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-blue-400",
                                        border: "border-blue-500 border-dashed",
                                        label: "Half 1-2U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-indigo-400",
                                        border: "border-indigo-500 border-dashed",
                                        label: "Half 3-4U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-violet-400",
                                        border: "border-violet-500 border-dashed",
                                        label: "Half 5+U",
                                        text: "text-white",
                                    },
                                ],
                            },
                            {
                                category: "Shelf-Mounted",
                                items: [
                                    {
                                        bg: "bg-emerald-600",
                                        border: "border-emerald-700",
                                        label: "Full 1-2U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-teal-600",
                                        border: "border-teal-700",
                                        label: "Full 3-4U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-cyan-600",
                                        border: "border-cyan-700",
                                        label: "Full 5+U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-emerald-400",
                                        border: "border-emerald-500 border-dashed",
                                        label: "Half 1-2U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-teal-400",
                                        border: "border-teal-500 border-dashed",
                                        label: "Half 3-4U",
                                        text: "text-white",
                                    },
                                    {
                                        bg: "bg-cyan-400",
                                        border: "border-cyan-500 border-dashed",
                                        label: "Half 5+U",
                                        text: "text-white",
                                    },
                                ],
                            },
                        ].map((e, t) =>
                            _jsxs("div", {
                                key: t,
                                className: "bg-gray-50 rounded-lg p-2",
                                children: [
                                    _jsxs("div", {
                                        className: "text-xs font-medium text-gray-700 mb-1.5 flex items-center gap-1",
                                        children: [
                                            _jsx("span", { children: "Rack-Mounted" === e.category ? "🔧" : "📦" }),
                                            _jsx("span", { children: e.category }),
                                        ],
                                    }),
                                    _jsx("div", {
                                        className: "grid grid-cols-3 gap-1",
                                        children: e.items.map((e, t) =>
                                            _jsx("div", {
                                                key: t,
                                                className: `${e.bg} ${e.border} ${e.text} border rounded px-1.5 py-1 text-center`,
                                                children: _jsx("div", {
                                                    className: "text-[10px] font-medium truncate",
                                                    children: e.label,
                                                }),
                                            })
                                        ),
                                    }),
                                ],
                            })
                        ),
                    }),
                ],
            }),
            _jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6",
                children: [
                    _jsxs("div", {
                        className: "space-y-4",
                        children: [
                            _jsxs("div", {
                                className: "bg-white rounded-xl shadow-md p-3 sm:p-4 border",
                                children: [
                                    _jsx("h2", {
                                        className: "text-base sm:text-lg font-semibold mb-3",
                                        children: "Add Equipment",
                                    }),
                                    _jsxs("div", {
                                        className: "space-y-3",
                                        children: [
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("label", {
                                                        className: "block text-xs font-medium text-gray-600 mb-1",
                                                        children: "Equipment Name",
                                                    }),
                                                    _jsx("input", {
                                                        type: "text",
                                                        value: s,
                                                        onChange: (e) => a(e.target.value),
                                                        onKeyPress: (e) => "Enter" === e.key && Je(),
                                                        placeholder: "e.g. Server, Switch, UPS...",
                                                        className: "w-full px-3 py-2.5 border rounded-lg text-sm",
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "grid grid-cols-3 gap-2",
                                                children: [
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("label", {
                                                                className:
                                                                    "block text-xs font-medium text-gray-600 mb-1",
                                                                children: "Rack Units",
                                                            }),
                                                            _jsx("input", {
                                                                type: "number",
                                                                min: "1",
                                                                max: me,
                                                                value: r,
                                                                onChange: (e) =>
                                                                    l(
                                                                        "" === e.target.value
                                                                            ? ""
                                                                            : String(
                                                                                  Math.min(
                                                                                      me,
                                                                                      Math.max(
                                                                                          1,
                                                                                          parseInt(e.target.value) || 1
                                                                                      )
                                                                                  )
                                                                              )
                                                                    ),
                                                                placeholder: "RU",
                                                                className:
                                                                    "w-full px-2 py-2.5 border rounded-lg text-sm",
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("label", {
                                                                className:
                                                                    "block text-xs font-medium text-gray-600 mb-1",
                                                                children: "Mount Type",
                                                            }),
                                                            _jsxs("select", {
                                                                value: i,
                                                                onChange: (e) => n(e.target.value),
                                                                className:
                                                                    "w-full px-2 py-2.5 border rounded-lg text-sm bg-white",
                                                                children: [
                                                                    _jsx("option", { value: "rack", children: "Rack" }),
                                                                    _jsx("option", {
                                                                        value: "shelf",
                                                                        children: "Shelf",
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("label", {
                                                                className:
                                                                    "block text-xs font-medium text-gray-600 mb-1",
                                                                children: "Width",
                                                            }),
                                                            _jsxs("select", {
                                                                value: o,
                                                                onChange: (e) => d(e.target.value),
                                                                className:
                                                                    "w-full px-2 py-2.5 border rounded-lg text-sm bg-white",
                                                                children: [
                                                                    _jsx("option", {
                                                                        value: "full",
                                                                        children: 'Full (19")',
                                                                    }),
                                                                    _jsx("option", {
                                                                        value: "half",
                                                                        children: 'Half (9.5")',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            _jsxs("div", {
                                                className: "mb-3",
                                                children: [
                                                    _jsx("label", {
                                                        className: "block text-xs font-medium text-gray-600 mb-1",
                                                        children:
                                                            h.length > 1 ? "Target Rack for New Items" : "Current Rack",
                                                    }),
                                                    _jsx("select", {
                                                        value: B,
                                                        onChange: (e) => {
                                                            const t = parseInt(e.target.value) || 0;
                                                            if ((T(t), h[t] && h[t].layout.length > 0)) {
                                                                const e = h[t].layout[0];
                                                                e && b({ rackIdx: t, layoutId: e.id });
                                                            } else b(null);
                                                        },
                                                        disabled: h.length <= 1,
                                                        className:
                                                            "w-full px-2 py-2 border rounded-lg text-sm bg-white" +
                                                            (h.length <= 1 ? " bg-gray-50 text-gray-500" : "") +
                                                            (g?.rackIdx === B ? " ring-2 ring-purple-300" : ""),
                                                        children: h.map((e, t) => {
                                                            const {
                                                                equipRU: s,
                                                                blanksRU: a,
                                                                totalRU: r,
                                                            } = Ue(e.layout);
                                                            let l = 0;
                                                            for (
                                                                let t = e.layout.length - 1;
                                                                t >= 0 && "blank" === e.layout[t].type;
                                                                t--
                                                            )
                                                                l++;
                                                            const i = r > 0 ? Math.round((a / r) * 100) : 0,
                                                                n = B === t,
                                                                o = 0 === l,
                                                                d = We(e, t);
                                                            return _jsx(
                                                                "option",
                                                                {
                                                                    value: t,
                                                                    children: `${n ? "● " : ""}${d}${o ? " (Full)" : ` (${l}U avail, ${i}%)`}`,
                                                                },
                                                                t
                                                            );
                                                        }),
                                                    }),
                                                    _jsx("p", {
                                                        className: "text-xs text-gray-500 mt-1",
                                                        children:
                                                            (h.length,
                                                            "Choose Target rack where new equipment will be added."),
                                                    }),
                                                ],
                                            }),
                                            _jsx("button", {
                                                onClick: Je,
                                                className:
                                                    "w-full py-2.5 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base transition-colors",
                                                children: "+ Add Equipment",
                                            }),
                                            e.length > 0 &&
                                                _jsxs("div", {
                                                    className: "flex gap-2 mt-2",
                                                    children: [
                                                        _jsx("button", {
                                                            onClick: () => pe(!0),
                                                            className:
                                                                "flex-1 py-2 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                                                            children: "⟲ Reset",
                                                        }),
                                                        _jsx("button", {
                                                            onClick: async () => {
                                                                const t = h,
                                                                    s = e;
                                                                if (0 === t.length)
                                                                    return void I(
                                                                        "Add a rack and equipment before exporting."
                                                                    );
                                                                let a = !1;
                                                                if (
                                                                    (t.forEach((e) => {
                                                                        e.layout.some((e) => "equipment" === e.type) &&
                                                                            (a = !0);
                                                                    }),
                                                                    a)
                                                                )
                                                                    try {
                                                                        window.jspdf ||
                                                                            (await new Promise((e, t) => {
                                                                                const s =
                                                                                    document.createElement("script");
                                                                                (s.src =
                                                                                    "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"),
                                                                                    (s.onload = e),
                                                                                    (s.onerror = t),
                                                                                    document.head.appendChild(s);
                                                                            }));
                                                                        const { jsPDF: a } = window.jspdf,
                                                                            r = new a({
                                                                                orientation: "landscape",
                                                                                unit: "mm",
                                                                                format: [609.6, 914.4],
                                                                            }),
                                                                            l = r.internal.pageSize.getWidth(),
                                                                            i = r.internal.pageSize.getHeight(),
                                                                            n = 25,
                                                                            o = [37, 99, 235],
                                                                            d = [17, 24, 39],
                                                                            m = [107, 114, 128],
                                                                            x = [55, 65, 81],
                                                                            u = (e) => {
                                                                                if (!e)
                                                                                    return {
                                                                                        fill: [100, 100, 100],
                                                                                        border: [80, 80, 80],
                                                                                    };
                                                                                const t = "rack" === e.type,
                                                                                    s =
                                                                                        e.isHalfWidth ||
                                                                                        "half" === e.width,
                                                                                    a = e.ru || 1,
                                                                                    r = a <= 2 ? 0 : a <= 4 ? 1 : 2;
                                                                                if (t) {
                                                                                    return s
                                                                                        ? [
                                                                                              {
                                                                                                  fill: [96, 165, 250],
                                                                                                  border: [
                                                                                                      59, 130, 246,
                                                                                                  ],
                                                                                              },
                                                                                              {
                                                                                                  fill: [129, 140, 248],
                                                                                                  border: [
                                                                                                      99, 102, 241,
                                                                                                  ],
                                                                                              },
                                                                                              {
                                                                                                  fill: [167, 139, 250],
                                                                                                  border: [
                                                                                                      139, 92, 246,
                                                                                                  ],
                                                                                              },
                                                                                          ][r]
                                                                                        : [
                                                                                              {
                                                                                                  fill: [37, 99, 235],
                                                                                                  border: [29, 78, 216],
                                                                                              },
                                                                                              {
                                                                                                  fill: [79, 70, 229],
                                                                                                  border: [67, 56, 202],
                                                                                              },
                                                                                              {
                                                                                                  fill: [124, 58, 237],
                                                                                                  border: [
                                                                                                      109, 40, 217,
                                                                                                  ],
                                                                                              },
                                                                                          ][r];
                                                                                }
                                                                                return s
                                                                                    ? [
                                                                                          {
                                                                                              fill: [52, 211, 153],
                                                                                              border: [16, 185, 129],
                                                                                          },
                                                                                          {
                                                                                              fill: [45, 212, 191],
                                                                                              border: [20, 184, 166],
                                                                                          },
                                                                                          {
                                                                                              fill: [34, 211, 238],
                                                                                              border: [6, 182, 212],
                                                                                          },
                                                                                      ][r]
                                                                                    : [
                                                                                          {
                                                                                              fill: [5, 150, 105],
                                                                                              border: [4, 120, 87],
                                                                                          },
                                                                                          {
                                                                                              fill: [13, 148, 136],
                                                                                              border: [15, 118, 110],
                                                                                          },
                                                                                          {
                                                                                              fill: [8, 145, 178],
                                                                                              border: [14, 116, 144],
                                                                                          },
                                                                                      ][r];
                                                                            };
                                                                        let p = 0,
                                                                            g = 0,
                                                                            b = 0;
                                                                        t.forEach((e) => {
                                                                            const t = Ue(e.layout);
                                                                            (p += t.equipRU),
                                                                                (g += t.blanksRU),
                                                                                (b += t.totalRU);
                                                                        });
                                                                        const f = b > 0 ? Math.round((g / b) * 100) : 0,
                                                                            y = b > 0 ? Math.round((p / b) * 100) : 0,
                                                                            j = s.filter((e) => "shelf" === e.type),
                                                                            _ = j.filter(
                                                                                (e) =>
                                                                                    "full" === e.width ||
                                                                                    (!e.width && !e.isHalfWidth)
                                                                            ),
                                                                            v = j.filter(
                                                                                (e) =>
                                                                                    "half" === e.width || e.isHalfWidth
                                                                            ),
                                                                            N = _.length + Math.ceil(v.length / 2),
                                                                            w = s.filter(
                                                                                (e) =>
                                                                                    "half" === e.width || e.isHalfWidth
                                                                            ).length,
                                                                            C = 6,
                                                                            M = Math.ceil(t.length / C) + 1,
                                                                            k =
                                                                                "https://avtoolspro.com/AV_TOOLS_LOGO.png",
                                                                            S = (e) =>
                                                                                new Promise((t, s) => {
                                                                                    const a = new Image();
                                                                                    (a.crossOrigin = "Anonymous"),
                                                                                        (a.onload = () => {
                                                                                            try {
                                                                                                const e =
                                                                                                    document.createElement(
                                                                                                        "canvas"
                                                                                                    );
                                                                                                (e.width = a.width),
                                                                                                    (e.height =
                                                                                                        a.height);
                                                                                                e
                                                                                                    .getContext("2d")
                                                                                                    .drawImage(a, 0, 0),
                                                                                                    t(
                                                                                                        e.toDataURL(
                                                                                                            "image/png"
                                                                                                        )
                                                                                                    );
                                                                                            } catch (e) {
                                                                                                s(e);
                                                                                            }
                                                                                        }),
                                                                                        (a.onerror = () =>
                                                                                            s(
                                                                                                new Error(
                                                                                                    "Failed to load logo"
                                                                                                )
                                                                                            )),
                                                                                        (a.src = e);
                                                                                });
                                                                        // Use cached logo if available, otherwise load and cache it
                                                                        let R = pdfLogoCacheRef.current;
                                                                        if (!R && !pdfLogoLoadingRef.current) {
                                                                            pdfLogoLoadingRef.current = true;
                                                                            try {
                                                                                R = await S(k);
                                                                                pdfLogoCacheRef.current = R;
                                                                            } catch (e) {
                                                                                console.log(
                                                                                    "Could not load logo from URL:",
                                                                                    e
                                                                                );
                                                                            }
                                                                            pdfLogoLoadingRef.current = false;
                                                                        }
                                                                        const P = (e) => {
                                                                                if (
                                                                                    (r.setFillColor(o[0], o[1], o[2]),
                                                                                    r.rect(0, 0, l, 52, "F"),
                                                                                    R)
                                                                                )
                                                                                    try {
                                                                                        r.addImage(
                                                                                            R,
                                                                                            "PNG",
                                                                                            n + 5,
                                                                                            10,
                                                                                            110,
                                                                                            32
                                                                                        );
                                                                                    } catch (e) {
                                                                                        r.setTextColor(255, 255, 255),
                                                                                            r.setFontSize(28),
                                                                                            r.setFont(
                                                                                                "helvetica",
                                                                                                "bold"
                                                                                            ),
                                                                                            r.text(
                                                                                                "AV TOOLS PRO",
                                                                                                n + 10,
                                                                                                32
                                                                                            );
                                                                                    }
                                                                                else
                                                                                    r.setTextColor(255, 255, 255),
                                                                                        r.setFontSize(28),
                                                                                        r.setFont("helvetica", "bold"),
                                                                                        r.text("AV TOOLS", n + 10, 32);
                                                                                r.setTextColor(255, 255, 255),
                                                                                    r.setFontSize(32),
                                                                                    r.setFont("helvetica", "bold"),
                                                                                    r.text(
                                                                                        "Rack Layout Report",
                                                                                        n + 135,
                                                                                        20
                                                                                    ),
                                                                                    r.setFontSize(22),
                                                                                    r.setFont("helvetica", "normal"),
                                                                                    r.text(
                                                                                        "Professional Equipment Configuration",
                                                                                        n + 135,
                                                                                        38
                                                                                    );
                                                                                const t = new Date().toLocaleDateString(
                                                                                        "en-US",
                                                                                        {
                                                                                            year: "numeric",
                                                                                            month: "short",
                                                                                            day: "numeric",
                                                                                        }
                                                                                    ),
                                                                                    s = 32;
                                                                                r.setFontSize(24),
                                                                                    r.setFont("helvetica", "bold"),
                                                                                    r.setTextColor(200, 220, 255),
                                                                                    r.text("DATE:", l - n - 240, s),
                                                                                    r.setTextColor(255, 255, 255),
                                                                                    r.text(t, l - n - 210, s),
                                                                                    r.setDrawColor(150, 180, 220),
                                                                                    r.setLineWidth(0.5),
                                                                                    r.line(
                                                                                        l - n - 105,
                                                                                        20,
                                                                                        l - n - 105,
                                                                                        38
                                                                                    ),
                                                                                    r.setFontSize(24),
                                                                                    r.setFont("helvetica", "bold"),
                                                                                    r.setTextColor(200, 220, 255),
                                                                                    r.text("PAGE:", l - n - 95, s),
                                                                                    r.setTextColor(255, 255, 255),
                                                                                    r.text(
                                                                                        e + " of " + M,
                                                                                        l - n - 60,
                                                                                        s
                                                                                    );
                                                                            },
                                                                            A = () => {
                                                                                r.setFillColor(d[0], d[1], d[2]),
                                                                                    r.rect(0, i - 24, l, 24, "F"),
                                                                                    r.setTextColor(220, 220, 220),
                                                                                    r.setFontSize(12),
                                                                                    r.setFont("helvetica", "bold"),
                                                                                    r.text(
                                                                                        "Generated by AV Tools Pro",
                                                                                        n,
                                                                                        i - 9
                                                                                    ),
                                                                                    r.setFontSize(11),
                                                                                    r.setFont("helvetica", "normal"),
                                                                                    r.text(
                                                                                        '1U = 44.45mm (1.75")  •  Standard 19" EIA Rack Mount',
                                                                                        l / 2,
                                                                                        i - 9,
                                                                                        { align: "center" }
                                                                                    ),
                                                                                    r.setFont("helvetica", "bold"),
                                                                                    r.setFontSize(12),
                                                                                    r.text(
                                                                                        "www.avtoolspro.com",
                                                                                        l - n,
                                                                                        i - 9,
                                                                                        { align: "right" }
                                                                                    );
                                                                            },
                                                                            D = (e, t, s, a, l, i, n, d) => {
                                                                                const c = Ue(e.layout),
                                                                                    m = Math.min(12, n / c.totalRU),
                                                                                    h = c.totalRU * m,
                                                                                    p = 20,
                                                                                    g =
                                                                                        e.name && e.name.trim()
                                                                                            ? e.name
                                                                                                  .trim()
                                                                                                  .toUpperCase()
                                                                                            : "RACK " + (t + 1),
                                                                                    b = a + i - 28 - 5,
                                                                                    f = b - h,
                                                                                    y = void 0 !== d ? d : f - 18 - 2;
                                                                                r.setFillColor(o[0], o[1], o[2]),
                                                                                    r.roundedRect(
                                                                                        s - p,
                                                                                        y,
                                                                                        l + p,
                                                                                        18,
                                                                                        2,
                                                                                        2,
                                                                                        "F"
                                                                                    ),
                                                                                    r.setTextColor(255, 255, 255),
                                                                                    r.setFontSize(
                                                                                        g.length > 12 ? 16 : 22
                                                                                    ),
                                                                                    r.setFont("helvetica", "bold"),
                                                                                    r.text(g, s + (l - p) / 2, y + 13, {
                                                                                        align: "center",
                                                                                    }),
                                                                                    r.setFillColor(250, 250, 250),
                                                                                    r.setDrawColor(180, 180, 180),
                                                                                    r.setLineWidth(0.5),
                                                                                    r.rect(s - p, f, 18, h, "FD"),
                                                                                    r.setFillColor(245, 245, 245),
                                                                                    r.setDrawColor(100, 100, 100),
                                                                                    r.setLineWidth(1),
                                                                                    r.rect(s, f, l, h, "FD"),
                                                                                    r.setFillColor(65, 65, 65),
                                                                                    r.rect(s, f, 8, h, "F"),
                                                                                    r.rect(s + l - 8, f, 8, h, "F");
                                                                                for (let e = 1; e <= c.totalRU; e++) {
                                                                                    const t = f + h - e * m,
                                                                                        a = t + m / 2;
                                                                                    r.setDrawColor(200, 200, 200),
                                                                                        r.setLineWidth(0.2),
                                                                                        r.line(s + 8, t, s + l - 8, t),
                                                                                        r.setTextColor(60, 60, 60),
                                                                                        r.setFontSize(9),
                                                                                        r.setFont("helvetica", "bold"),
                                                                                        r.text(
                                                                                            String(e),
                                                                                            s - 10 - 1,
                                                                                            a + 3,
                                                                                            { align: "center" }
                                                                                        ),
                                                                                        r.setDrawColor(220, 220, 220),
                                                                                        r.setLineWidth(0.1),
                                                                                        r.line(s - p, t, s - 2, t),
                                                                                        r.setFillColor(45, 45, 45),
                                                                                        r.circle(s + 4, a, 1, "F"),
                                                                                        r.circle(s + l - 4, a, 1, "F");
                                                                                }
                                                                                r.setDrawColor(200, 200, 200),
                                                                                    r.setLineWidth(0.2),
                                                                                    r.line(s + 8, b, s + l - 8, b);
                                                                                const j = l - 16 - 4,
                                                                                    _ = s + 8 + 2;
                                                                                e.layout.forEach((e) => {
                                                                                    const t = f + h - e.endRU * m,
                                                                                        s =
                                                                                            f +
                                                                                            h -
                                                                                            (e.startRU - 1) * m -
                                                                                            t;
                                                                                    if (
                                                                                        "equipment" === e.type &&
                                                                                        e.item
                                                                                    ) {
                                                                                        const a = u(e.item),
                                                                                            l =
                                                                                                e.item.isHalfWidth ||
                                                                                                "half" === e.item.width,
                                                                                            i = e.item.pairItem;
                                                                                        let n = _,
                                                                                            o = j;
                                                                                        l &&
                                                                                            ((o = j / 2 - 2),
                                                                                            i ||
                                                                                                "right" !== e.side ||
                                                                                                (n = _ + j / 2 + 2));
                                                                                        const d = 1;
                                                                                        r.setFillColor(
                                                                                            a.fill[0],
                                                                                            a.fill[1],
                                                                                            a.fill[2]
                                                                                        ),
                                                                                            r.setDrawColor(
                                                                                                a.border[0],
                                                                                                a.border[1],
                                                                                                a.border[2]
                                                                                            ),
                                                                                            r.setLineWidth(0.6),
                                                                                            r.roundedRect(
                                                                                                n,
                                                                                                t + d,
                                                                                                o,
                                                                                                s - 2 * d,
                                                                                                2,
                                                                                                2,
                                                                                                "FD"
                                                                                            ),
                                                                                            r.setTextColor(
                                                                                                255,
                                                                                                255,
                                                                                                255
                                                                                            );
                                                                                        const c = Math.min(
                                                                                            12,
                                                                                            Math.max(9, 0.55 * s)
                                                                                        );
                                                                                        r.setFontSize(c),
                                                                                            r.setFont(
                                                                                                "helvetica",
                                                                                                "bold"
                                                                                            );
                                                                                        let m =
                                                                                            e.item.name || "Equipment";
                                                                                        const x = o - 6;
                                                                                        for (
                                                                                            ;
                                                                                            r.getTextWidth(m) > x &&
                                                                                            m.length > 3;

                                                                                        )
                                                                                            m = m.slice(0, -1);
                                                                                        if (
                                                                                            (m !== e.item.name &&
                                                                                                m.length > 2 &&
                                                                                                (m =
                                                                                                    m.slice(0, -2) +
                                                                                                    ".."),
                                                                                            r.text(
                                                                                                m,
                                                                                                n + o / 2,
                                                                                                t + s / 2 + c / 3,
                                                                                                { align: "center" }
                                                                                            ),
                                                                                            i)
                                                                                        ) {
                                                                                            const a = u(
                                                                                                    e.item.pairItem
                                                                                                ),
                                                                                                l = j / 2 - 2,
                                                                                                i = _ + j / 2 + 2;
                                                                                            r.setFillColor(
                                                                                                a.fill[0],
                                                                                                a.fill[1],
                                                                                                a.fill[2]
                                                                                            ),
                                                                                                r.setDrawColor(
                                                                                                    a.border[0],
                                                                                                    a.border[1],
                                                                                                    a.border[2]
                                                                                                ),
                                                                                                r.setLineWidth(0.6),
                                                                                                r.roundedRect(
                                                                                                    i,
                                                                                                    t + d,
                                                                                                    l,
                                                                                                    s - 2 * d,
                                                                                                    2,
                                                                                                    2,
                                                                                                    "FD"
                                                                                                ),
                                                                                                r.setTextColor(
                                                                                                    255,
                                                                                                    255,
                                                                                                    255
                                                                                                ),
                                                                                                r.setFontSize(c),
                                                                                                r.setFont(
                                                                                                    "helvetica",
                                                                                                    "bold"
                                                                                                );
                                                                                            let n =
                                                                                                e.item.pairItem.name ||
                                                                                                "Equipment";
                                                                                            const o = l - 6;
                                                                                            for (
                                                                                                ;
                                                                                                r.getTextWidth(n) > o &&
                                                                                                n.length > 3;

                                                                                            )
                                                                                                n = n.slice(0, -1);
                                                                                            n !==
                                                                                                e.item.pairItem.name &&
                                                                                                n.length > 2 &&
                                                                                                (n =
                                                                                                    n.slice(0, -2) +
                                                                                                    ".."),
                                                                                                r.text(
                                                                                                    n,
                                                                                                    i + l / 2,
                                                                                                    t + s / 2 + c / 3,
                                                                                                    { align: "center" }
                                                                                                );
                                                                                        } else if (l && !i) {
                                                                                            const a = j / 2 - 2,
                                                                                                l =
                                                                                                    "right" === e.side
                                                                                                        ? _
                                                                                                        : _ + j / 2 + 2;
                                                                                            r.setFillColor(50, 50, 50),
                                                                                                r.roundedRect(
                                                                                                    l,
                                                                                                    t + d,
                                                                                                    a,
                                                                                                    s - 2 * d,
                                                                                                    2,
                                                                                                    2,
                                                                                                    "F"
                                                                                                ),
                                                                                                r.setDrawColor(
                                                                                                    70,
                                                                                                    70,
                                                                                                    70
                                                                                                ),
                                                                                                r.setLineWidth(0.15);
                                                                                            for (
                                                                                                let e = l + 4;
                                                                                                e < l + a - 4;
                                                                                                e += 3
                                                                                            )
                                                                                                r.line(
                                                                                                    e,
                                                                                                    t + d + 2,
                                                                                                    e,
                                                                                                    t + s - d - 2
                                                                                                );
                                                                                            r.setTextColor(
                                                                                                120,
                                                                                                120,
                                                                                                120
                                                                                            ),
                                                                                                r.setFontSize(
                                                                                                    Math.max(7, 0.7 * c)
                                                                                                ),
                                                                                                r.setFont(
                                                                                                    "helvetica",
                                                                                                    "normal"
                                                                                                ),
                                                                                                r.text(
                                                                                                    "BLANK",
                                                                                                    l + a / 2,
                                                                                                    t + s / 2 + 2,
                                                                                                    { align: "center" }
                                                                                                );
                                                                                        }
                                                                                    } else if ("blank" === e.type) {
                                                                                        const e = 1;
                                                                                        r.setFillColor(50, 50, 50),
                                                                                            r.rect(
                                                                                                _,
                                                                                                t + e,
                                                                                                j,
                                                                                                s - 2 * e,
                                                                                                "F"
                                                                                            ),
                                                                                            r.setDrawColor(70, 70, 70),
                                                                                            r.setLineWidth(0.15);
                                                                                        for (
                                                                                            let a = _ + 5;
                                                                                            a < _ + j - 5;
                                                                                            a += 3
                                                                                        )
                                                                                            r.line(
                                                                                                a,
                                                                                                t + e + 1,
                                                                                                a,
                                                                                                t + s - e - 1
                                                                                            );
                                                                                    }
                                                                                });
                                                                                const v =
                                                                                        c.totalRU > 0
                                                                                            ? Math.round(
                                                                                                  (c.blanksRU /
                                                                                                      c.totalRU) *
                                                                                                      100
                                                                                              )
                                                                                            : 0,
                                                                                    N = b + 4;
                                                                                r.setFillColor(252, 252, 252),
                                                                                    r.setDrawColor(200, 200, 200),
                                                                                    r.setLineWidth(0.5),
                                                                                    r.roundedRect(
                                                                                        s - p,
                                                                                        N,
                                                                                        l + p,
                                                                                        22,
                                                                                        2,
                                                                                        2,
                                                                                        "FD"
                                                                                    );
                                                                                const w = N + 11 + 4;
                                                                                r.setFontSize(14),
                                                                                    r.setFont("helvetica", "bold"),
                                                                                    r.setTextColor(o[0], o[1], o[2]),
                                                                                    r.text(c.totalRU + "U", s - 10, w, {
                                                                                        align: "center",
                                                                                    }),
                                                                                    r.setTextColor(x[0], x[1], x[2]),
                                                                                    r.setFontSize(14),
                                                                                    r.text("Used: ", s + l / 5, w, {
                                                                                        align: "right",
                                                                                    }),
                                                                                    r.setFont("helvetica", "bold"),
                                                                                    r.text(
                                                                                        c.equipRU + "U",
                                                                                        s + l / 5 + 2,
                                                                                        w
                                                                                    ),
                                                                                    r.setFont("helvetica", "normal"),
                                                                                    r.text(
                                                                                        "Blank: ",
                                                                                        s + (2 * l) / 3 - 15,
                                                                                        w,
                                                                                        { align: "right" }
                                                                                    ),
                                                                                    r.setFont("helvetica", "bold"),
                                                                                    r.text(
                                                                                        c.blanksRU + "U (" + v + "%)",
                                                                                        s + (2 * l) / 3 - 13,
                                                                                        w
                                                                                    );
                                                                            };
                                                                        for (let e = 0; e < M - 1; e++) {
                                                                            e > 0 &&
                                                                                r.addPage([609.6, 914.4], "landscape"),
                                                                                P(e + 1),
                                                                                A();
                                                                            const s = e * C,
                                                                                a = Math.min(s + C, t.length),
                                                                                o = a - s;
                                                                            let d = 0;
                                                                            for (let e = s; e < a; e++) {
                                                                                const s = Ue(t[e].layout);
                                                                                s.totalRU > d && (d = s.totalRU);
                                                                            }
                                                                            const c = 56,
                                                                                m = i - c - 30 - 42 - 22,
                                                                                x = Math.min(m - 60, 12 * d),
                                                                                u = c + m - 28 - 5 - x - 18 - 2,
                                                                                h = l - 2 * n - 40,
                                                                                p = 35,
                                                                                g = 20,
                                                                                b = Math.min(
                                                                                    110,
                                                                                    (h - p * (o - 1) - g * o) / o
                                                                                );
                                                                            let f =
                                                                                (l - ((b + g) * o + p * (o - 1))) / 2 +
                                                                                g;
                                                                            for (let e = s; e < a; e++)
                                                                                D(t[e], e, f, c, b, m, x, u),
                                                                                    (f += b + p + g);
                                                                        }
                                                                        r.addPage([609.6, 914.4], "landscape"),
                                                                            P(M),
                                                                            A();
                                                                        const I = l / 2,
                                                                            E = l - 2 * n;
                                                                        let F = 58;
                                                                        r.setFillColor(d[0], d[1], d[2]),
                                                                            r.rect(n, F, E, 32, "F"),
                                                                            r.setTextColor(255, 255, 255),
                                                                            r.setFontSize(28),
                                                                            r.setFont("helvetica", "bold"),
                                                                            r.text("CONFIGURATION SUMMARY", I, F + 22, {
                                                                                align: "center",
                                                                            }),
                                                                            (F += 44);
                                                                        const B = E,
                                                                            T = B / 4;
                                                                        r.setFillColor(o[0], o[1], o[2]),
                                                                            r.rect(n, F, B, 26, "F"),
                                                                            r.setTextColor(255, 255, 255),
                                                                            r.setFontSize(22),
                                                                            r.setFont("helvetica", "bold"),
                                                                            r.text("PROJECT STATISTICS", I, F + 18, {
                                                                                align: "center",
                                                                            }),
                                                                            (F += 26),
                                                                            r.setFillColor(245, 245, 245),
                                                                            r.rect(n, F, B, 24, "F"),
                                                                            r.setDrawColor(200, 200, 200),
                                                                            r.setLineWidth(0.5),
                                                                            r.rect(n, F, B, 24, "S"),
                                                                            r.line(n + T, F, n + T, F + 24),
                                                                            r.line(n + 2 * T, F, n + 2 * T, F + 24),
                                                                            r.line(n + 3 * T, F, n + 3 * T, F + 24),
                                                                            r.setTextColor(x[0], x[1], x[2]),
                                                                            r.setFontSize(22),
                                                                            r.setFont("helvetica", "bold"),
                                                                            r.text(
                                                                                "TOTAL CAPACITY",
                                                                                n + T / 2,
                                                                                F + 16,
                                                                                { align: "center" }
                                                                            ),
                                                                            r.text("USED UNITS", n + 1.5 * T, F + 16, {
                                                                                align: "center",
                                                                            }),
                                                                            r.text("BLANK UNITS", n + 2.5 * T, F + 16, {
                                                                                align: "center",
                                                                            }),
                                                                            r.text(
                                                                                "SHELVES NEEDED",
                                                                                n + 3.5 * T,
                                                                                F + 16,
                                                                                { align: "center" }
                                                                            ),
                                                                            (F += 24),
                                                                            r.setFillColor(255, 255, 255),
                                                                            r.rect(n, F, B, 44, "F"),
                                                                            r.setDrawColor(200, 200, 200),
                                                                            r.rect(n, F, B, 44, "S"),
                                                                            r.line(n + T, F, n + T, F + 44),
                                                                            r.line(n + 2 * T, F, n + 2 * T, F + 44),
                                                                            r.line(n + 3 * T, F, n + 3 * T, F + 44),
                                                                            r.setFontSize(28),
                                                                            r.setFont("helvetica", "bold"),
                                                                            r.setTextColor(o[0], o[1], o[2]),
                                                                            r.text(b + "U", n + T / 2, F + 20, {
                                                                                align: "center",
                                                                            }),
                                                                            r.setTextColor(79, 70, 229),
                                                                            r.text(p + "U", n + 1.5 * T, F + 20, {
                                                                                align: "center",
                                                                            }),
                                                                            r.setTextColor(
                                                                                f >= c ? 5 : 245,
                                                                                f >= c ? 150 : 158,
                                                                                f >= c ? 105 : 11
                                                                            ),
                                                                            r.text(g + "U", n + 2.5 * T, F + 20, {
                                                                                align: "center",
                                                                            }),
                                                                            r.setTextColor(
                                                                                N > 0 ? 139 : 107,
                                                                                N > 0 ? 92 : 114,
                                                                                N > 0 ? 246 : 128
                                                                            ),
                                                                            r.text(
                                                                                N > 0 ? String(N) : "0",
                                                                                n + 3.5 * T,
                                                                                F + 20,
                                                                                { align: "center" }
                                                                            ),
                                                                            r.setFontSize(18),
                                                                            r.setFont("helvetica", "normal"),
                                                                            r.setTextColor(m[0], m[1], m[2]),
                                                                            r.text(
                                                                                t.length +
                                                                                    " Rack" +
                                                                                    (t.length > 1 ? "s" : ""),
                                                                                n + T / 2,
                                                                                F + 36,
                                                                                { align: "center" }
                                                                            ),
                                                                            r.text(
                                                                                y + "% Utilized",
                                                                                n + 1.5 * T,
                                                                                F + 36,
                                                                                { align: "center" }
                                                                            ),
                                                                            r.text(
                                                                                f + "% (Target: " + c + "%)",
                                                                                n + 2.5 * T,
                                                                                F + 36,
                                                                                { align: "center" }
                                                                            ),
                                                                            r.text(
                                                                                N > 0
                                                                                    ? "For shelf-mount items"
                                                                                    : "All rack-mountable",
                                                                                n + 3.5 * T,
                                                                                F + 36,
                                                                                { align: "center" }
                                                                            ),
                                                                            (F += 56);
                                                                        const L = 135;
                                                                        r.setFillColor(o[0], o[1], o[2]),
                                                                            r.rect(n, F, E, 26, "F"),
                                                                            r.setTextColor(255, 255, 255),
                                                                            r.setFontSize(22),
                                                                            r.setFont("helvetica", "bold"),
                                                                            r.text("COLOR REFERENCE", I, F + 18, {
                                                                                align: "center",
                                                                            }),
                                                                            (F += 26);
                                                                        const H = L - 26;
                                                                        r.setFillColor(255, 255, 255),
                                                                            r.setDrawColor(200, 200, 200),
                                                                            r.setLineWidth(0.5),
                                                                            r.rect(n, F, E, H, "FD");
                                                                        const U = 180,
                                                                            q = (E - U) / 3,
                                                                            $ = 24;
                                                                        r.setFillColor(245, 245, 245),
                                                                            r.rect(n, F, E, $, "F"),
                                                                            r.setDrawColor(200, 200, 200),
                                                                            r.rect(n, F, E, $, "S"),
                                                                            r.line(n + U, F, n + U, F + $),
                                                                            r.line(n + U + q, F, n + U + q, F + $),
                                                                            r.line(
                                                                                n + U + 2 * q,
                                                                                F,
                                                                                n + U + 2 * q,
                                                                                F + $
                                                                            ),
                                                                            r.setTextColor(x[0], x[1], x[2]),
                                                                            r.setFontSize(14),
                                                                            r.setFont("helvetica", "bold"),
                                                                            r.text(
                                                                                "EQUIPMENT TYPE",
                                                                                n + U / 2,
                                                                                F + 16,
                                                                                { align: "center" }
                                                                            ),
                                                                            r.text("1-2U", n + U + q / 2, F + 16, {
                                                                                align: "center",
                                                                            }),
                                                                            r.text("3-4U", n + U + 1.5 * q, F + 16, {
                                                                                align: "center",
                                                                            }),
                                                                            r.text("5+U", n + U + 2.5 * q, F + 16, {
                                                                                align: "center",
                                                                            }),
                                                                            (F += $);
                                                                        const W = (H - $) / 5,
                                                                            V = 36,
                                                                            O = 14;
                                                                        [
                                                                            {
                                                                                type: "Rack Mount - Full Width",
                                                                                colors: [
                                                                                    [37, 99, 235],
                                                                                    [79, 70, 229],
                                                                                    [124, 58, 237],
                                                                                ],
                                                                            },
                                                                            {
                                                                                type: "Rack Mount - Half Width",
                                                                                colors: [
                                                                                    [96, 165, 250],
                                                                                    [129, 140, 248],
                                                                                    [167, 139, 250],
                                                                                ],
                                                                            },
                                                                            {
                                                                                type: "Shelf Mount - Full Width",
                                                                                colors: [
                                                                                    [5, 150, 105],
                                                                                    [13, 148, 136],
                                                                                    [8, 145, 178],
                                                                                ],
                                                                            },
                                                                            {
                                                                                type: "Shelf Mount - Half Width",
                                                                                colors: [
                                                                                    [52, 211, 153],
                                                                                    [45, 212, 191],
                                                                                    [34, 211, 238],
                                                                                ],
                                                                            },
                                                                            {
                                                                                type: "Blank Panel",
                                                                                colors: [[55, 55, 55], null, null],
                                                                            },
                                                                        ].forEach(function (e, t) {
                                                                            const s = F + t * W;
                                                                            t % 2 == 1 &&
                                                                                (r.setFillColor(250, 250, 250),
                                                                                r.rect(n, s, E, W, "F")),
                                                                                r.setDrawColor(220, 220, 220),
                                                                                r.setLineWidth(0.3),
                                                                                r.line(n, s + W, n + E, s + W),
                                                                                r.line(n + U, s, n + U, s + W),
                                                                                r.line(n + U + q, s, n + U + q, s + W),
                                                                                r.line(
                                                                                    n + U + 2 * q,
                                                                                    s,
                                                                                    n + U + 2 * q,
                                                                                    s + W
                                                                                ),
                                                                                r.setTextColor(x[0], x[1], x[2]),
                                                                                r.setFontSize(14),
                                                                                r.setFont("helvetica", "normal"),
                                                                                r.text(
                                                                                    e.type,
                                                                                    n + U / 2,
                                                                                    s + W / 2 + 4,
                                                                                    { align: "center" }
                                                                                ),
                                                                                e.colors.forEach(function (e, t) {
                                                                                    if (e) {
                                                                                        const a =
                                                                                                n +
                                                                                                U +
                                                                                                q * t +
                                                                                                (q - V) / 2,
                                                                                            l = s + (W - O) / 2;
                                                                                        r.setFillColor(
                                                                                            e[0],
                                                                                            e[1],
                                                                                            e[2]
                                                                                        ),
                                                                                            r.roundedRect(
                                                                                                a,
                                                                                                l,
                                                                                                V,
                                                                                                O,
                                                                                                2,
                                                                                                2,
                                                                                                "F"
                                                                                            );
                                                                                    }
                                                                                });
                                                                        }),
                                                                            (F += H + 14);
                                                                        const z = e.filter(
                                                                                (e) =>
                                                                                    "rack" === e.type &&
                                                                                    ("half" === e.width ||
                                                                                        e.isHalfWidth)
                                                                            ),
                                                                            G = e.filter(
                                                                                (e) =>
                                                                                    "shelf" === e.type &&
                                                                                    ("half" === e.width ||
                                                                                        e.isHalfWidth)
                                                                            ),
                                                                            X = (e) => {
                                                                                const t = {};
                                                                                return (
                                                                                    e.forEach((e) => {
                                                                                        const s = e.ru || 1;
                                                                                        t[s] || (t[s] = []),
                                                                                            t[s].push(e);
                                                                                    }),
                                                                                    t
                                                                                );
                                                                            },
                                                                            J = X(z),
                                                                            Q = X(G);
                                                                        let K = 0;
                                                                        Object.values(J).forEach((e) => {
                                                                            e.length % 2 == 1 && K++;
                                                                        }),
                                                                            Object.values(Q).forEach((e) => {
                                                                                e.length % 2 == 1 && K++;
                                                                            });
                                                                        const Y = [];
                                                                        f >= c
                                                                            ? Y.push(
                                                                                  "Blank capacity (" +
                                                                                      f +
                                                                                      "%) meets target of " +
                                                                                      c +
                                                                                      "%. Adequate expansion space."
                                                                              )
                                                                            : Y.push(
                                                                                  "Blank capacity (" +
                                                                                      f +
                                                                                      "%) below target of " +
                                                                                      c +
                                                                                      "%. Consider additional rack space."
                                                                              ),
                                                                            h.length > 1 &&
                                                                                Y.push(
                                                                                    "Multi-rack configuration (" +
                                                                                        h.length +
                                                                                        " racks). Ensure proper cable management."
                                                                                ),
                                                                            w > 0 &&
                                                                                Y.push(
                                                                                    w +
                                                                                        " half-width item(s). Use filler panels for proper airflow."
                                                                                ),
                                                                            K > 0 &&
                                                                                Y.push(
                                                                                    K +
                                                                                        " half-RU blank panel(s) recommended for unpaired half-width equipment."
                                                                                ),
                                                                            N > 0 &&
                                                                                Y.push(
                                                                                    N +
                                                                                        " shelf/shelves needed for non-rack-mountable equipment."
                                                                                ),
                                                                            Y.push(
                                                                                "Compliant with EIA-310-E (1U = 44.45mm). Verify ventilation and weight capacity."
                                                                            );
                                                                        const Z = 20,
                                                                            ee = 26,
                                                                            te = 24,
                                                                            se = Y.length * Z + te;
                                                                        r.setFillColor(o[0], o[1], o[2]),
                                                                            r.rect(n, F, E, ee, "F"),
                                                                            r.setTextColor(255, 255, 255),
                                                                            r.setFontSize(22),
                                                                            r.setFont("helvetica", "bold"),
                                                                            r.text("RECOMMENDATIONS", I, F + 18, {
                                                                                align: "center",
                                                                            }),
                                                                            (F += ee),
                                                                            r.setFillColor(255, 255, 255),
                                                                            r.setDrawColor(200, 200, 200),
                                                                            r.setLineWidth(0.5),
                                                                            r.rect(n, F, E, se, "FD");
                                                                        let ae = F + 20;
                                                                        Y.forEach(function (e) {
                                                                            r.setTextColor(x[0], x[1], x[2]),
                                                                                r.setFontSize(33),
                                                                                r.setFont("helvetica", "bold"),
                                                                                r.text("•", n + 20, ae + 4),
                                                                                r.setFontSize(22),
                                                                                r.setFont("helvetica", "normal"),
                                                                                r.text(e, n + 32, ae + 4),
                                                                                (ae += Z);
                                                                        }),
                                                                            r.save(
                                                                                "AVTOOLS PRO-rack-layout-" +
                                                                                    new Date()
                                                                                        .toISOString()
                                                                                        .split("T")[0] +
                                                                                    ".pdf"
                                                                            );
                                                                    } catch (e) {
                                                                        console.error("PDF export error:", e),
                                                                            I(
                                                                                "Failed to generate PDF. Please try again."
                                                                            );
                                                                    }
                                                                else I("Add equipment to your rack before exporting.");
                                                            },
                                                            className:
                                                                "flex-1 py-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm transition-colors shadow-sm",
                                                            children: "📄 Export PDF",
                                                        }),
                                                    ],
                                                }),
                                            _jsx(ResetConfirmModal, {
                                                isOpen: he,
                                                onConfirm: () => {
                                                    t([]),
                                                        a(""),
                                                        l("1"),
                                                        n("rack"),
                                                        d("full"),
                                                        m(25),
                                                        u(!1),
                                                        p([]),
                                                        b(null),
                                                        y(null),
                                                        _(null),
                                                        N({}),
                                                        C(null),
                                                        k(""),
                                                        R(null),
                                                        A(""),
                                                        I(null),
                                                        T(0),
                                                        (De.current = !1),
                                                        (Ie.current = []),
                                                        (Se.current = ""),
                                                        q([]),
                                                        W(0),
                                                        O(null),
                                                        G(null),
                                                        ae(""),
                                                        le("1"),
                                                        ne("rack"),
                                                        de("full"),
                                                        pe(!1);
                                                },
                                                onCancel: () => pe(!1),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            "manual" === L &&
                                _jsxs("div", {
                                    className: "bg-white rounded-xl shadow-md p-3 sm:p-4 border",
                                    children: [
                                        _jsx("h2", {
                                            className: "text-base sm:text-lg font-semibold mb-2",
                                            children: "🗄️ Rack Configuration",
                                        }),
                                        _jsx("p", {
                                            className: "text-xs text-gray-500 mb-3",
                                            children: "Configure your rack size and add additional racks",
                                        }),
                                        h.length > 0 &&
                                            _jsxs("div", {
                                                className: "mb-3",
                                                children: [
                                                    _jsx("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: `Rack ${B + 1} Size`,
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            _jsx("select", {
                                                                value: h[B]?.rackSize || 42,
                                                                onChange: (e) => {
                                                                    const t = parseInt(e.target.value);
                                                                    ((e, t) => {
                                                                        "manual" === L &&
                                                                            p((s) => {
                                                                                const a = [...s],
                                                                                    r = {
                                                                                        ...a[e],
                                                                                        layout: [...a[e].layout],
                                                                                    },
                                                                                    l = r.rackSize || r.layout.length;
                                                                                if (t === l) return s;
                                                                                let i = 0;
                                                                                if (
                                                                                    (r.layout.forEach((e) => {
                                                                                        "equipment" === e.type &&
                                                                                            e.item &&
                                                                                            (i += e.item.ru || 1);
                                                                                    }),
                                                                                    t < i)
                                                                                )
                                                                                    return (
                                                                                        I(
                                                                                            `Cannot reduce rack to ${t}U. Equipment requires ${i}U.`
                                                                                        ),
                                                                                        s
                                                                                    );
                                                                                if (t > l) {
                                                                                    const s = t - l;
                                                                                    for (let t = 0; t < s; t++)
                                                                                        r.layout.push({
                                                                                            id: `blank-${e}-${Date.now()}-${t}`,
                                                                                            type: "blank",
                                                                                            ru: 1,
                                                                                            startRU: 0,
                                                                                            endRU: 0,
                                                                                        });
                                                                                } else {
                                                                                    let e = l - t;
                                                                                    for (
                                                                                        ;
                                                                                        e > 0 &&
                                                                                        r.layout.length > 0 &&
                                                                                        "blank" ===
                                                                                            r.layout[
                                                                                                r.layout.length - 1
                                                                                            ].type;

                                                                                    )
                                                                                        r.layout.pop(), e--;
                                                                                }
                                                                                let n = 1;
                                                                                return (
                                                                                    r.layout.forEach((e) => {
                                                                                        const t =
                                                                                            "equipment" === e.type
                                                                                                ? e.item?.ru || 1
                                                                                                : e.ru || 1;
                                                                                        (e.startRU = n),
                                                                                            (e.endRU = n + t - 1),
                                                                                            (n += t);
                                                                                    }),
                                                                                    (r.rackSize = t),
                                                                                    (a[e] = r),
                                                                                    a
                                                                                );
                                                                            });
                                                                    })(B, t);
                                                                },
                                                                className: "flex-1 px-3 py-2 border rounded-lg text-sm",
                                                                children: ce.map((e) =>
                                                                    _jsx("option", {
                                                                        key: e,
                                                                        value: e,
                                                                        children: `${e}U`,
                                                                    })
                                                                ),
                                                            }),
                                                            h.length > 1 &&
                                                                _jsx("select", {
                                                                    value: B,
                                                                    onChange: (e) => T(parseInt(e.target.value)),
                                                                    className: "px-3 py-2 border rounded-lg text-sm",
                                                                    children: h.map((e, t) =>
                                                                        _jsx("option", {
                                                                            key: t,
                                                                            value: t,
                                                                            children: We(e, t),
                                                                        })
                                                                    ),
                                                                }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        _jsx("button", {
                                            onClick: () => J(!0),
                                            className:
                                                "w-full py-2 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors",
                                            children: "+ Add New Rack",
                                        }),
                                        0 === h.length &&
                                            _jsxs("div", {
                                                className: "mt-3 pt-3 border-t",
                                                children: [
                                                    _jsx("p", {
                                                        className: "text-xs text-gray-500 mb-2",
                                                        children: "Or start with a standard size:",
                                                    }),
                                                    _jsx("div", {
                                                        className: "grid grid-cols-4 gap-2",
                                                        children: [8, 12, 22, 42].map((e) =>
                                                            _jsx("button", {
                                                                key: e,
                                                                onClick: () => Ve(e),
                                                                className:
                                                                    "py-2 rounded-lg font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors border",
                                                                children: `${e}U`,
                                                            })
                                                        ),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            "auto" === L &&
                                _jsxs("div", {
                                    className: "bg-white rounded-xl shadow-md p-3 sm:p-4 border",
                                    children: [
                                        _jsx("h2", {
                                            className: "text-base sm:text-lg font-semibold mb-2",
                                            children: "🎯 Target Spare Capacity",
                                        }),
                                        _jsx("p", {
                                            className: "text-xs text-gray-500 mb-2",
                                            children: "Spare % = Blanks ÷ Total Capacity",
                                        }),
                                        _jsx("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                { val: 20, label: "20% - Standard" },
                                                { val: 25, label: "25% - AVIXA Recommended" },
                                                { val: 30, label: "30% - Growth Planning" },
                                            ].map((e) =>
                                                _jsxs(
                                                    "label",
                                                    {
                                                        className: `flex items-center p-2.5 rounded border-2 cursor-pointer text-xs sm:text-sm ${c === e.val ? "bg-purple-50 border-purple-500" : "border-gray-200 hover:border-purple-300"} transition-colors`,
                                                        children: [
                                                            _jsx("input", {
                                                                type: "radio",
                                                                checked: c === e.val,
                                                                onChange: () => m(e.val),
                                                                className: "mr-2 w-4 h-4",
                                                            }),
                                                            _jsx("span", { children: e.label }),
                                                        ],
                                                    },
                                                    e.val
                                                )
                                            ),
                                        }),
                                        Pe &&
                                            _jsxs("div", {
                                                className:
                                                    "mt-3 p-2 bg-amber-50 border border-amber-300 rounded-lg text-xs text-amber-700",
                                                children: [
                                                    _jsx("div", {
                                                        className: "font-medium",
                                                        children: "⚠️ Spare capacity changed",
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            "Current layout uses ",
                                                            Re.current,
                                                            '%. Click "Optimize Layout" to apply ',
                                                            c,
                                                            "%.",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        e.length > 0 &&
                                            _jsx("button", {
                                                onClick: () => {
                                                    if (0 === e.length) return;
                                                    const t = h.length > 0 ? h : ke(),
                                                        s = ze(t, c, me);
                                                    for (; s.length > 1; ) {
                                                        if (s[s.length - 1].layout.some((e) => "equipment" === e.type))
                                                            break;
                                                        s.pop();
                                                    }
                                                    p(Ge(s, me)),
                                                        (Se.current = JSON.stringify(e)),
                                                        (Re.current = c),
                                                        Ae(!1),
                                                        u(!0),
                                                        b(null),
                                                        (De.current = !0);
                                                },
                                                className:
                                                    "w-full mt-3 py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-colors " +
                                                    (Pe
                                                        ? "bg-green-600 hover:bg-green-700 text-white animate-pulse"
                                                        : "bg-green-600 hover:bg-green-700 text-white"),
                                                children: Pe
                                                    ? "✨ Optimize Layout (Apply New Spare %)"
                                                    : "✨ Optimize Layout",
                                            }),
                                    ],
                                }),
                            e.length > 0 &&
                                _jsxs("div", {
                                    className: "bg-white rounded-xl shadow-md p-3 sm:p-4 border",
                                    children: [
                                        _jsxs("h2", {
                                            className: "text-base sm:text-lg font-semibold mb-2",
                                            children: ["Equipment (", e.length, ")"],
                                        }),
                                        _jsx("div", {
                                            className: "space-y-2 max-h-48 overflow-y-auto",
                                            children: e.map((e, t) => {
                                                const s = ue(e),
                                                    a = w === e.id;
                                                return _jsxs(
                                                    "div",
                                                    {
                                                        className:
                                                            "flex items-center justify-between p-2 rounded border text-sm gap-2 " +
                                                            (a ? "bg-blue-50 border-blue-300" : "bg-gray-50"),
                                                        children: [
                                                            _jsxs("div", {
                                                                className: "flex items-center gap-2 min-w-0 flex-1",
                                                                children: [
                                                                    _jsx("div", {
                                                                        className: `w-3 h-3 flex-shrink-0 rounded ${s.bg} ${s.border} border`,
                                                                    }),
                                                                    a
                                                                        ? _jsx("input", {
                                                                              type: "text",
                                                                              value: M,
                                                                              onChange: (e) => k(e.target.value),
                                                                              onKeyDown: (e) => {
                                                                                  "Enter" === e.key && tt(),
                                                                                      "Escape" === e.key &&
                                                                                          (C(null), k(""));
                                                                              },
                                                                              onBlur: tt,
                                                                              autoFocus: !0,
                                                                              className:
                                                                                  "flex-1 min-w-0 px-2 py-1 text-sm border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                          })
                                                                        : _jsx("span", {
                                                                              className:
                                                                                  "truncate cursor-pointer hover:text-blue-600",
                                                                              onClick: () => et(e),
                                                                              title: "Click to rename",
                                                                              children: e.name,
                                                                          }),
                                                                    _jsxs("span", {
                                                                        className:
                                                                            "text-xs bg-gray-200 px-1.5 py-0.5 rounded flex-shrink-0",
                                                                        children: [e.ru, "U"],
                                                                    }),
                                                                    _jsx("span", {
                                                                        className:
                                                                            "text-xs px-1.5 py-0.5 rounded flex-shrink-0 " +
                                                                            ("shelf" === e.type
                                                                                ? "bg-emerald-100 text-emerald-700"
                                                                                : "bg-blue-100 text-blue-700"),
                                                                        children: "shelf" === e.type ? "📦" : "🔧",
                                                                    }),
                                                                    "half" === e.width &&
                                                                        _jsx("span", {
                                                                            className:
                                                                                "text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded flex-shrink-0",
                                                                            children: "½W",
                                                                        }),
                                                                ],
                                                            }),
                                                            _jsxs("div", {
                                                                className: "flex items-center gap-1 flex-shrink-0",
                                                                children: [
                                                                    !a &&
                                                                        _jsx("button", {
                                                                            onClick: () => et(e),
                                                                            className:
                                                                                "w-8 h-8 flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-800 rounded-lg text-sm transition-colors",
                                                                            title: "Rename item",
                                                                            children: "✏️",
                                                                        }),
                                                                    _jsx("button", {
                                                                        onClick: () => Qe(e.id),
                                                                        className:
                                                                            "w-8 h-8 flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-800 rounded-lg font-bold text-lg transition-colors",
                                                                        title: "Remove item",
                                                                        children: "×",
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    },
                                                    e.id
                                                );
                                            }),
                                        }),
                                        _jsxs("div", {
                                            className: "mt-3 pt-2 border-t text-sm",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        _jsx("span", { children: "Effective:" }),
                                                        _jsxs("span", { className: "font-bold", children: [be, "U"] }),
                                                    ],
                                                }),
                                                ge.ruSaved > 0 &&
                                                    _jsxs("div", {
                                                        className: "flex justify-between text-green-600",
                                                        children: [
                                                            _jsx("span", { children: "Saved:" }),
                                                            _jsxs("span", { children: ["-", ge.ruSaved, "U"] }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            (e.length > 0 || ("manual" === L && h.length > 0)) &&
                                _jsxs("div", {
                                    className: "bg-white rounded-xl shadow-md p-4 border",
                                    children: [
                                        _jsx("h2", {
                                            className: "text-lg font-semibold mb-3",
                                            children: "📋 Configuration",
                                        }),
                                        _jsxs("div", {
                                            className: "p-3 bg-purple-100 rounded-lg border border-purple-300 mb-3",
                                            children: [
                                                _jsx("div", {
                                                    className: "text-xs text-purple-600",
                                                    children:
                                                        h.length > 1
                                                            ? "Multiple Racks"
                                                            : "manual" === L
                                                              ? "Manual Rack"
                                                              : "Recommended Rack",
                                                }),
                                                _jsx("div", {
                                                    className: "text-xl font-bold text-purple-700",
                                                    children: (() => {
                                                        const e = h.map((e) => {
                                                                const { totalRU: t } = Ue(e.layout);
                                                                return t;
                                                            }),
                                                            t = {};
                                                        e.forEach((e) => {
                                                            t[e] = (t[e] || 0) + 1;
                                                        });
                                                        const s = Object.entries(t).sort(
                                                            (e, t) => parseInt(t[0]) - parseInt(e[0])
                                                        );
                                                        return (
                                                            s
                                                                .map(([e, t]) => (t > 1 ? `${t}×${e}U` : `${e}U`))
                                                                .join(" + ") || "No racks"
                                                        );
                                                    })(),
                                                }),
                                                _jsxs("div", {
                                                    className: "text-sm text-purple-600",
                                                    children: [
                                                        "Total: ",
                                                        (() => {
                                                            let e = 0;
                                                            return (
                                                                h.forEach((t) => {
                                                                    const { totalRU: s } = Ue(t.layout);
                                                                    e += s;
                                                                }),
                                                                e
                                                            );
                                                        })(),
                                                        "U capacity",
                                                    ],
                                                }),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "grid grid-cols-3 gap-2 text-center mb-3",
                                            children: [
                                                _jsxs("div", {
                                                    className: "bg-blue-50 p-2 rounded",
                                                    children: [
                                                        _jsx("div", {
                                                            className: "text-xs text-blue-600",
                                                            children: "Equipment",
                                                        }),
                                                        _jsxs("div", {
                                                            className: "text-lg font-bold text-blue-800",
                                                            children: [
                                                                (() => {
                                                                    let e = 0;
                                                                    return (
                                                                        h.forEach((t) => {
                                                                            t.layout.forEach((t) => {
                                                                                "equipment" === t.type &&
                                                                                    t.item &&
                                                                                    (e += t.item.ru || 1);
                                                                            });
                                                                        }),
                                                                        e
                                                                    );
                                                                })(),
                                                                "U",
                                                            ],
                                                        }),
                                                        _jsxs("div", {
                                                            className: "text-[10px] text-blue-500 mt-1",
                                                            children: [
                                                                (() => {
                                                                    let e = 0,
                                                                        t = 0;
                                                                    return (
                                                                        h.forEach((s) => {
                                                                            s.layout.forEach((s) => {
                                                                                if ("equipment" === s.type && s.item) {
                                                                                    const a = s.item.ru || 1,
                                                                                        r = "shelf" === s.item.type,
                                                                                        l = s.item.pairItem,
                                                                                        i =
                                                                                            l &&
                                                                                            "shelf" ===
                                                                                                s.item.pairItem.type;
                                                                                    l
                                                                                        ? r && i
                                                                                            ? (t += a)
                                                                                            : r || i
                                                                                              ? (r || i) && (t += a)
                                                                                              : (e += a)
                                                                                        : r
                                                                                          ? (t += a)
                                                                                          : (e += a);
                                                                                }
                                                                            });
                                                                        }),
                                                                        `🔧${e}U 📦${t}U`
                                                                    );
                                                                })(),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                _jsxs("div", {
                                                    className: "bg-orange-50 p-2 rounded",
                                                    children: [
                                                        _jsx("div", {
                                                            className: "text-xs text-orange-600",
                                                            children: "Blanks",
                                                        }),
                                                        _jsxs("div", {
                                                            className: "text-lg font-bold text-orange-800",
                                                            children: [
                                                                (() => {
                                                                    let e = 0;
                                                                    return (
                                                                        h.forEach((t) => {
                                                                            t.layout.forEach((t) => {
                                                                                "blank" === t.type && (e += t.ru || 1);
                                                                            });
                                                                        }),
                                                                        e
                                                                    );
                                                                })(),
                                                                "U",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (() => {
                                                    let e = 0,
                                                        t = 0;
                                                    h.forEach((s) => {
                                                        const a = Ue(s.layout);
                                                        (e += a.equipRU), (t += a.blanksRU);
                                                    });
                                                    const s = e + t,
                                                        a = s > 0 ? Math.round((t / s) * 100) : 0;
                                                    return _jsxs("div", {
                                                        className:
                                                            "p-2 rounded " + (a >= c ? "bg-green-50" : "bg-yellow-50"),
                                                        children: [
                                                            _jsx("div", {
                                                                className:
                                                                    "text-xs " +
                                                                    (a >= c ? "text-green-600" : "text-yellow-600"),
                                                                children: "Actual Spare",
                                                            }),
                                                            _jsxs("div", {
                                                                className:
                                                                    "text-lg font-bold " +
                                                                    (a >= c ? "text-green-800" : "text-yellow-800"),
                                                                children: [a, "%"],
                                                            }),
                                                        ],
                                                    });
                                                })(),
                                            ],
                                        }),
                                        _jsxs("div", {
                                            className: "text-xs p-2 bg-gray-50 rounded mb-3",
                                            children: [
                                                _jsx("div", {
                                                    className: "font-medium mb-1",
                                                    children: "Calculation:",
                                                }),
                                                (() => {
                                                    let e = 0,
                                                        t = 0;
                                                    h.forEach((s) => {
                                                        const a = Ue(s.layout);
                                                        (e += a.equipRU), (t += a.blanksRU);
                                                    });
                                                    const s = e + t,
                                                        a = s > 0 ? Math.round((t / s) * 100) : 0;
                                                    return _jsxs("div", {
                                                        className: "text-gray-600",
                                                        children: [t, "U ÷ ", s, "U = ", a, "% spare"],
                                                    });
                                                })(),
                                            ],
                                        }),
                                        _jsx("div", {
                                            className: "space-y-1",
                                            children: nt.map((e, t) =>
                                                _jsx(
                                                    "div",
                                                    {
                                                        className:
                                                            "p-2 rounded text-xs " +
                                                            ("success" === e.type
                                                                ? "bg-green-50 text-green-800"
                                                                : "warning" === e.type
                                                                  ? "bg-yellow-50 text-yellow-800"
                                                                  : "bg-blue-50 text-blue-800"),
                                                        children: e.text,
                                                    },
                                                    t
                                                )
                                            ),
                                        }),
                                        x &&
                                            _jsx("div", {
                                                className:
                                                    "mt-2 p-2 bg-green-100 rounded text-xs text-green-800 text-center",
                                                children: "✅ Layout Optimized",
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    _jsxs("div", {
                        className: "lg:col-span-2 bg-white rounded-xl shadow-md p-3 sm:p-4 border",
                        children: [
                            _jsxs("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2",
                                children: [
                                    _jsxs("h2", {
                                        className: "text-base sm:text-lg font-semibold",
                                        children: ["🗄️ Rack Layout", h.length > 1 ? ` (${h.length} Racks)` : ""],
                                    }),
                                    _jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            "manual" === L &&
                                                _jsx("button", {
                                                    onClick: () => J(!0),
                                                    className:
                                                        "px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-medium hover:bg-indigo-700",
                                                    children: "+ Add Rack",
                                                }),
                                            _jsx("span", {
                                                className: "text-xs text-gray-500",
                                                children: "Tap item to select • Use floating bar to edit",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            "manual" === L && 0 === h.length
                                ? _jsx("div", {
                                      className:
                                          "flex flex-col items-center justify-center h-48 sm:h-64 bg-gray-100 rounded-lg border-2 border-dashed",
                                      children: _jsxs("div", {
                                          className: "text-center px-4",
                                          children: [
                                              _jsx("div", { className: "text-4xl mb-3", children: "🗄️" }),
                                              _jsx("p", {
                                                  className: "text-gray-600 font-medium mb-2",
                                                  children: "No Rack Configured",
                                              }),
                                              _jsx("p", {
                                                  className: "text-gray-500 text-sm mb-4",
                                                  children:
                                                      "Add equipment to auto-create an 8U rack, or choose a rack size from the configuration panel",
                                              }),
                                              _jsxs("div", {
                                                  className: "flex flex-wrap justify-center gap-2",
                                                  children: [8, 12, 22, 42].map((e) =>
                                                      _jsx("button", {
                                                          key: e,
                                                          onClick: () => Ve(e),
                                                          className:
                                                              "px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700",
                                                          children: `${e}U`,
                                                      })
                                                  ),
                                              }),
                                          ],
                                      }),
                                  })
                                : 0 === e.length && "manual" !== L
                                  ? _jsx("div", {
                                        className:
                                            "flex items-center justify-center h-48 sm:h-64 bg-gray-100 rounded-lg border-2 border-dashed",
                                        children: _jsx("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "Add equipment to see visualization",
                                        }),
                                    })
                                  : _jsxs("div", {
                                        children: [
                                            _jsx("div", {
                                                className: "overflow-x-auto pb-4 -mx-3 px-3 sm:mx-0 sm:px-0",
                                                children: (() => {
                                                    Math.max(
                                                        ...h.map((e) => {
                                                            const { totalRU: t } = Ue(e.layout);
                                                            return t;
                                                        }),
                                                        1
                                                    );
                                                    return _jsx("div", {
                                                        className:
                                                            "flex items-end " +
                                                            (h.length > 1 ? "gap-6 sm:gap-8" : "justify-center"),
                                                        style: h.length > 1 ? { minWidth: 220 * h.length + "px" } : {},
                                                        children: h.map((e, t) => dt(e, t)),
                                                    });
                                                })(),
                                            }),
                                            _jsxs("div", {
                                                className:
                                                    "mt-4 pt-3 border-t flex flex-wrap gap-3 sm:gap-4 text-xs justify-center",
                                                children: [
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            _jsx("div", { className: "w-4 h-4 bg-blue-500 rounded" }),
                                                            _jsx("span", { children: "Full" }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            _jsxs("div", {
                                                                className: "flex w-4 h-4",
                                                                children: [
                                                                    _jsx("div", {
                                                                        className: "w-2 h-4 bg-blue-500 rounded-l",
                                                                    }),
                                                                    _jsx("div", {
                                                                        className: "w-2 h-4 bg-emerald-500 rounded-r",
                                                                    }),
                                                                ],
                                                            }),
                                                            _jsx("span", { children: "Half pair" }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            _jsx("div", {
                                                                className:
                                                                    "w-4 h-4 bg-gray-700 rounded border border-dashed border-gray-500",
                                                            }),
                                                            _jsx("span", { children: "Blank" }),
                                                        ],
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            _jsx("div", {
                                                                className:
                                                                    "w-4 h-4 bg-gray-300 rounded ring-2 ring-yellow-400",
                                                            }),
                                                            _jsx("span", { children: "Selected" }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            !g &&
                                                _jsx("div", {
                                                    className:
                                                        "mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700 text-center",
                                                    children:
                                                        "💡 Tap any item to select it, then use the floating control bar at the bottom.",
                                                }),
                                        ],
                                    }),
                        ],
                    }),
                ],
            }),
            g &&
                ot &&
                "undefined" != typeof ReactDOM &&
                ReactDOM.createPortal(
                    _jsx("div", {
                        className: "floating-toolbar-portal",
                        style: {
                            position: "fixed",
                            bottom: "16px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 99999,
                            pointerEvents: "auto",
                            maxWidth: "calc(100vw - 16px)",
                            width: "auto",
                            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                            borderRadius: "20px",
                        },
                        children: _jsx("div", {
                            style: {
                                overflowX: "auto",
                                overflowY: "hidden",
                                WebkitOverflowScrolling: "touch",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            },
                            children: _jsxs("div", {
                                className:
                                    "bg-white rounded-2xl border border-gray-200 px-1.5 sm:px-2 py-1.5 sm:py-2 flex items-center gap-0.5 sm:gap-1",
                                style: {
                                    backdropFilter: "blur(8px)",
                                    backgroundColor: "rgba(255,255,255,0.97)",
                                    minWidth: "fit-content",
                                },
                                children: [
                                    _jsxs("div", {
                                        className:
                                            "flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-500 text-white rounded-lg sm:rounded-xl",
                                        children: [
                                            _jsx("div", {
                                                className:
                                                    "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded " +
                                                    ("equipment" === ot?.type ? "bg-white/30" : "bg-white/50"),
                                            }),
                                            "equipment" === ot?.type && ot?.item
                                                ? S === ot.item.id
                                                    ? _jsx("input", {
                                                          type: "text",
                                                          value: P,
                                                          onChange: (e) => A(e.target.value),
                                                          onBlur: () => {
                                                              P.trim() && Ke(ot.item.id, P), R(null), A("");
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Enter" === e.key &&
                                                                  (P.trim() && Ke(ot.item.id, P), R(null), A("")),
                                                                  "Escape" === e.key && (R(null), A(""));
                                                          },
                                                          autoFocus: !0,
                                                          className:
                                                              "bg-white text-gray-800 text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 rounded w-20 sm:w-28 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                                      })
                                                    : _jsx("span", {
                                                          className:
                                                              "text-xs sm:text-sm font-medium truncate max-w-16 sm:max-w-28 cursor-pointer",
                                                          onClick: () => {
                                                              R(ot.item.id), A(ot.item.name);
                                                          },
                                                          title: "Click to rename",
                                                          children: ot.item.name,
                                                      })
                                                : _jsx("span", {
                                                      className: "text-xs sm:text-sm font-medium",
                                                      children: "Blank",
                                                  }),
                                        ],
                                    }),
                                    _jsx("div", { className: "w-px h-5 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1" }),
                                    _jsx("button", {
                                        onClick: () => {
                                            if (!g) return;
                                            const { rackIdx: e, layoutId: t } = g,
                                                s = h.map((e) => ({
                                                    ...e,
                                                    layout: e.layout.map((e) =>
                                                        "equipment" === e.type && e.item
                                                            ? {
                                                                  ...e,
                                                                  item: {
                                                                      ...e.item,
                                                                      pairItem: e.item.pairItem
                                                                          ? { ...e.item.pairItem }
                                                                          : null,
                                                                  },
                                                              }
                                                            : { ...e }
                                                    ),
                                                })),
                                                a = s[e];
                                            if (!a) return;
                                            const r = a.layout.findIndex((e) => e.id === t);
                                            r >= 0 &&
                                                r < a.layout.length - 1 &&
                                                (([a.layout[r], a.layout[r + 1]] = [a.layout[r + 1], a.layout[r]]),
                                                st(a),
                                                "manual" === L
                                                    ? p([...s])
                                                    : (p(Ge(Oe(s, c, me), me)), u(!1), (De.current = !0)));
                                        },
                                        className:
                                            "p-1.5 sm:p-2.5 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors group",
                                        title: "Move Up",
                                        children: _jsx("svg", {
                                            className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-900",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: _jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M5 15l7-7 7 7",
                                            }),
                                        }),
                                    }),
                                    _jsx("button", {
                                        onClick: () => {
                                            if (!g) return;
                                            const { rackIdx: e, layoutId: t } = g,
                                                s = h.map((e) => ({
                                                    ...e,
                                                    layout: e.layout.map((e) =>
                                                        "equipment" === e.type && e.item
                                                            ? {
                                                                  ...e,
                                                                  item: {
                                                                      ...e.item,
                                                                      pairItem: e.item.pairItem
                                                                          ? { ...e.item.pairItem }
                                                                          : null,
                                                                  },
                                                              }
                                                            : { ...e }
                                                    ),
                                                })),
                                                a = s[e];
                                            if (!a) return;
                                            const r = a.layout.findIndex((e) => e.id === t);
                                            r > 0 &&
                                                (([a.layout[r], a.layout[r - 1]] = [a.layout[r - 1], a.layout[r]]),
                                                st(a),
                                                "manual" === L
                                                    ? p([...s])
                                                    : (p(Ge(Oe(s, c, me), me)), u(!1), (De.current = !0)));
                                        },
                                        className:
                                            "p-1.5 sm:p-2.5 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors group",
                                        title: "Move Down",
                                        children: _jsx("svg", {
                                            className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-900",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: _jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19 9l-7 7-7-7",
                                            }),
                                        }),
                                    }),
                                    "manual" !== L &&
                                        _jsx("div", { className: "w-px h-5 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1" }),
                                    "manual" !== L &&
                                        (() => {
                                            const e = g ? h[g.rackIdx] : null,
                                                t = !!e && Ue(e.layout).totalRU >= me;
                                            return _jsx("button", {
                                                onClick: () => !t && Ze("above"),
                                                className:
                                                    "p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-colors group " +
                                                    (t ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"),
                                                title: t ? "Rack at max size (45U)" : "Add Blank Above",
                                                disabled: t,
                                                children: _jsx("span", {
                                                    className:
                                                        "text-xs sm:text-sm font-bold " +
                                                        (t
                                                            ? "text-gray-400"
                                                            : "text-gray-600 group-hover:text-gray-900"),
                                                    children: "B▲",
                                                }),
                                            });
                                        })(),
                                    "manual" !== L &&
                                        (() => {
                                            const e = g ? h[g.rackIdx] : null,
                                                t = !!e && Ue(e.layout).totalRU >= me;
                                            return _jsx("button", {
                                                onClick: () => !t && Ze("below"),
                                                className:
                                                    "p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-colors group " +
                                                    (t ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"),
                                                title: t ? "Rack at max size (45U)" : "Add Blank Below",
                                                disabled: t,
                                                children: _jsx("span", {
                                                    className:
                                                        "text-xs sm:text-sm font-bold " +
                                                        (t
                                                            ? "text-gray-400"
                                                            : "text-gray-600 group-hover:text-gray-900"),
                                                    children: "B▼",
                                                }),
                                            });
                                        })(),
                                    "equipment" === ot?.type &&
                                        (() => {
                                            let t;
                                            if (
                                                ((t = ot.isPairItem ? ot.item : e.find((e) => e.id === ot.item?.id)),
                                                !t)
                                            )
                                                return null;
                                            const s = t.id,
                                                a = t.ru || 1;
                                            return _jsxs(_Fragment, {
                                                children: [
                                                    _jsx("div", {
                                                        className: "w-px h-5 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1",
                                                    }),
                                                    _jsx("button", {
                                                        onClick: () => Ye(s, a - 1),
                                                        disabled: a <= 1,
                                                        className:
                                                            "p-1.5 sm:p-2.5 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors group " +
                                                            (a <= 1 ? "opacity-30 cursor-not-allowed" : ""),
                                                        title: "Decrease Size",
                                                        children: _jsx("svg", {
                                                            className:
                                                                "w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-900",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2,
                                                            children: _jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M20 12H4",
                                                            }),
                                                        }),
                                                    }),
                                                    _jsxs("span", {
                                                        className:
                                                            "text-xs sm:text-sm font-semibold text-gray-700 min-w-6 sm:min-w-8 text-center",
                                                        children: [a, "U"],
                                                    }),
                                                    _jsx("button", {
                                                        onClick: () => Ye(s, a + 1),
                                                        disabled: a >= me,
                                                        className:
                                                            "p-1.5 sm:p-2.5 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors group " +
                                                            (a >= me ? "opacity-30 cursor-not-allowed" : ""),
                                                        title: "Increase Size",
                                                        children: _jsx("svg", {
                                                            className:
                                                                "w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-900",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2,
                                                            children: _jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M12 4v16m8-8H4",
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            });
                                        })(),
                                    "equipment" === ot?.type &&
                                        (() => {
                                            let s;
                                            if (
                                                ((s = ot.isPairItem ? ot.item : e.find((e) => e.id === ot.item?.id)),
                                                !s)
                                            )
                                                return null;
                                            const a = s.id,
                                                r = s.type || "rack",
                                                l = s.width || "full";
                                            return _jsxs(_Fragment, {
                                                children: [
                                                    _jsx("div", {
                                                        className: "w-px h-5 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1",
                                                    }),
                                                    _jsx("button", {
                                                        onClick: () =>
                                                            ((s) => {
                                                                let a = !1,
                                                                    r = 0,
                                                                    l = null,
                                                                    i = -1;
                                                                if (
                                                                    (h.forEach((e, t) => {
                                                                        e.layout.forEach((e) => {
                                                                            if ("equipment" === e.type && e.item) {
                                                                                if (
                                                                                    e.item.id === s &&
                                                                                    e.item.pairItem
                                                                                ) {
                                                                                    const s =
                                                                                        "rack" === e.item.type
                                                                                            ? "shelf"
                                                                                            : "rack";
                                                                                    e.item.pairItem.type !== s &&
                                                                                        ((a = !0),
                                                                                        (r = e.item.pairItem.ru || 1),
                                                                                        (l = e.item.pairItem.type),
                                                                                        (i = t));
                                                                                }
                                                                                if (
                                                                                    e.item.pairItem &&
                                                                                    e.item.pairItem.id === s
                                                                                ) {
                                                                                    const s =
                                                                                        "rack" === e.item.pairItem.type
                                                                                            ? "shelf"
                                                                                            : "rack";
                                                                                    e.item.type !== s &&
                                                                                        ((a = !0),
                                                                                        (r = e.item.pairItem.ru || 1),
                                                                                        (l = s),
                                                                                        (i = t));
                                                                                }
                                                                            }
                                                                        });
                                                                    }),
                                                                    "manual" === L && a && i >= 0)
                                                                ) {
                                                                    const e = h[i];
                                                                    if (!qe(e, l, r, s).canPlace)
                                                                        return void I(
                                                                            `Cannot change mount type: Rack ${i + 1} is full. Need ${r}U of blank space or a compatible unpaired half-width ${"shelf" === l ? "shelf" : "rack"}-mounted ${r}U item to pair with.`
                                                                        );
                                                                }
                                                                t(
                                                                    e.map((e) =>
                                                                        e.id === s
                                                                            ? {
                                                                                  ...e,
                                                                                  type:
                                                                                      "rack" === e.type
                                                                                          ? "shelf"
                                                                                          : "rack",
                                                                              }
                                                                            : e
                                                                    )
                                                                ),
                                                                    p((e) =>
                                                                        e.map((e) => {
                                                                            const t = [];
                                                                            let a = !1;
                                                                            if (
                                                                                (e.layout.forEach((e) => {
                                                                                    if (
                                                                                        "equipment" === e.type &&
                                                                                        e.item
                                                                                    )
                                                                                        if (e.item.id === s) {
                                                                                            const s =
                                                                                                "rack" === e.item.type
                                                                                                    ? "shelf"
                                                                                                    : "rack";
                                                                                            if (
                                                                                                e.item.pairItem &&
                                                                                                e.item.pairItem.type !==
                                                                                                    s
                                                                                            ) {
                                                                                                (a = !0),
                                                                                                    t.push({
                                                                                                        ...e,
                                                                                                        item: {
                                                                                                            ...e.item,
                                                                                                            type: s,
                                                                                                            isHalfPair:
                                                                                                                !1,
                                                                                                            pairItem:
                                                                                                                null,
                                                                                                        },
                                                                                                    });
                                                                                                const r =
                                                                                                        e.item.pairItem,
                                                                                                    l = r.ru || 1;
                                                                                                let i = !1;
                                                                                                for (
                                                                                                    let e = 0;
                                                                                                    e < t.length;
                                                                                                    e++
                                                                                                ) {
                                                                                                    const s = t[e];
                                                                                                    if (
                                                                                                        "equipment" ===
                                                                                                            s.type &&
                                                                                                        s.item
                                                                                                    ) {
                                                                                                        const a =
                                                                                                                s.item,
                                                                                                            n =
                                                                                                                a.isHalfWidth ||
                                                                                                                "half" ===
                                                                                                                    a.width,
                                                                                                            o =
                                                                                                                a.isHalfPair &&
                                                                                                                a.pairItem;
                                                                                                        if (
                                                                                                            n &&
                                                                                                            !o &&
                                                                                                            a.type ===
                                                                                                                r.type &&
                                                                                                            (a.ru ||
                                                                                                                1) === l
                                                                                                        ) {
                                                                                                            (t[e] = {
                                                                                                                ...s,
                                                                                                                item: {
                                                                                                                    ...a,
                                                                                                                    isHalfPair:
                                                                                                                        !0,
                                                                                                                    pairItem:
                                                                                                                        {
                                                                                                                            ...r,
                                                                                                                        },
                                                                                                                },
                                                                                                            }),
                                                                                                                (i =
                                                                                                                    !0);
                                                                                                            break;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                                if (!i) {
                                                                                                    let e = -1,
                                                                                                        s = 0;
                                                                                                    for (
                                                                                                        let a = 0;
                                                                                                        a < t.length;
                                                                                                        a++
                                                                                                    )
                                                                                                        if (
                                                                                                            "blank" ===
                                                                                                            t[a].type
                                                                                                        ) {
                                                                                                            if (
                                                                                                                (-1 ===
                                                                                                                    e &&
                                                                                                                    (e =
                                                                                                                        a),
                                                                                                                s++,
                                                                                                                s >= l)
                                                                                                            )
                                                                                                                break;
                                                                                                        } else
                                                                                                            (e = -1),
                                                                                                                (s = 0);
                                                                                                    s >= l && e >= 0
                                                                                                        ? t.splice(
                                                                                                              e,
                                                                                                              l,
                                                                                                              {
                                                                                                                  id: `layout-unpair-${Date.now()}`,
                                                                                                                  type: "equipment",
                                                                                                                  item: {
                                                                                                                      ...r,
                                                                                                                      isHalfPair:
                                                                                                                          !1,
                                                                                                                      pairItem:
                                                                                                                          null,
                                                                                                                  },
                                                                                                                  startRU: 0,
                                                                                                                  endRU: 0,
                                                                                                                  ru: l,
                                                                                                              }
                                                                                                          )
                                                                                                        : t.push({
                                                                                                              id: `layout-unpair-${Date.now()}`,
                                                                                                              type: "equipment",
                                                                                                              item: {
                                                                                                                  ...r,
                                                                                                                  isHalfPair:
                                                                                                                      !1,
                                                                                                                  pairItem:
                                                                                                                      null,
                                                                                                              },
                                                                                                              startRU: 0,
                                                                                                              endRU: 0,
                                                                                                              ru: l,
                                                                                                          });
                                                                                                }
                                                                                            } else {
                                                                                                const r =
                                                                                                        e.item
                                                                                                            .isHalfWidth ||
                                                                                                        "half" ===
                                                                                                            e.item
                                                                                                                .width,
                                                                                                    l =
                                                                                                        e.item
                                                                                                            .isHalfPair &&
                                                                                                        e.item.pairItem;
                                                                                                r && !l
                                                                                                    ? (t.push({
                                                                                                          ...e,
                                                                                                          item: {
                                                                                                              ...e.item,
                                                                                                              type: s,
                                                                                                              needsPairing:
                                                                                                                  !0,
                                                                                                          },
                                                                                                      }),
                                                                                                      (a = !0))
                                                                                                    : t.push({
                                                                                                          ...e,
                                                                                                          item: {
                                                                                                              ...e.item,
                                                                                                              type: s,
                                                                                                          },
                                                                                                      });
                                                                                            }
                                                                                        } else if (
                                                                                            e.item.pairItem &&
                                                                                            e.item.pairItem.id === s
                                                                                        ) {
                                                                                            const s =
                                                                                                "rack" ===
                                                                                                e.item.pairItem.type
                                                                                                    ? "shelf"
                                                                                                    : "rack";
                                                                                            if (e.item.type !== s) {
                                                                                                (a = !0),
                                                                                                    t.push({
                                                                                                        ...e,
                                                                                                        item: {
                                                                                                            ...e.item,
                                                                                                            isHalfPair:
                                                                                                                !1,
                                                                                                            pairItem:
                                                                                                                null,
                                                                                                        },
                                                                                                    });
                                                                                                const r = {
                                                                                                        ...e.item
                                                                                                            .pairItem,
                                                                                                        type: s,
                                                                                                    },
                                                                                                    l = r.ru || 1;
                                                                                                let i = !1;
                                                                                                for (
                                                                                                    let e = 0;
                                                                                                    e < t.length;
                                                                                                    e++
                                                                                                ) {
                                                                                                    const s = t[e];
                                                                                                    if (
                                                                                                        "equipment" ===
                                                                                                            s.type &&
                                                                                                        s.item
                                                                                                    ) {
                                                                                                        const a =
                                                                                                                s.item,
                                                                                                            n =
                                                                                                                a.isHalfWidth ||
                                                                                                                "half" ===
                                                                                                                    a.width,
                                                                                                            o =
                                                                                                                a.isHalfPair &&
                                                                                                                a.pairItem;
                                                                                                        if (
                                                                                                            n &&
                                                                                                            !o &&
                                                                                                            a.type ===
                                                                                                                r.type &&
                                                                                                            (a.ru ||
                                                                                                                1) === l
                                                                                                        ) {
                                                                                                            (t[e] = {
                                                                                                                ...s,
                                                                                                                item: {
                                                                                                                    ...a,
                                                                                                                    isHalfPair:
                                                                                                                        !0,
                                                                                                                    pairItem:
                                                                                                                        r,
                                                                                                                },
                                                                                                            }),
                                                                                                                (i =
                                                                                                                    !0);
                                                                                                            break;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                                if (!i) {
                                                                                                    let e = -1,
                                                                                                        s = 0;
                                                                                                    for (
                                                                                                        let a = 0;
                                                                                                        a < t.length;
                                                                                                        a++
                                                                                                    )
                                                                                                        if (
                                                                                                            "blank" ===
                                                                                                            t[a].type
                                                                                                        ) {
                                                                                                            if (
                                                                                                                (-1 ===
                                                                                                                    e &&
                                                                                                                    (e =
                                                                                                                        a),
                                                                                                                s++,
                                                                                                                s >= l)
                                                                                                            )
                                                                                                                break;
                                                                                                        } else
                                                                                                            (e = -1),
                                                                                                                (s = 0);
                                                                                                    s >= l && e >= 0
                                                                                                        ? t.splice(
                                                                                                              e,
                                                                                                              l,
                                                                                                              {
                                                                                                                  id: `layout-unpair-${Date.now()}`,
                                                                                                                  type: "equipment",
                                                                                                                  item: {
                                                                                                                      ...r,
                                                                                                                      isHalfPair:
                                                                                                                          !1,
                                                                                                                      pairItem:
                                                                                                                          null,
                                                                                                                  },
                                                                                                                  startRU: 0,
                                                                                                                  endRU: 0,
                                                                                                                  ru: l,
                                                                                                              }
                                                                                                          )
                                                                                                        : t.push({
                                                                                                              id: `layout-unpair-${Date.now()}`,
                                                                                                              type: "equipment",
                                                                                                              item: {
                                                                                                                  ...r,
                                                                                                                  isHalfPair:
                                                                                                                      !1,
                                                                                                                  pairItem:
                                                                                                                      null,
                                                                                                              },
                                                                                                              startRU: 0,
                                                                                                              endRU: 0,
                                                                                                              ru: l,
                                                                                                          });
                                                                                                }
                                                                                            } else
                                                                                                t.push({
                                                                                                    ...e,
                                                                                                    item: {
                                                                                                        ...e.item,
                                                                                                        pairItem: {
                                                                                                            ...e.item
                                                                                                                .pairItem,
                                                                                                            type: s,
                                                                                                        },
                                                                                                    },
                                                                                                });
                                                                                        } else t.push(e);
                                                                                    else t.push(e);
                                                                                }),
                                                                                a)
                                                                            ) {
                                                                                let e = 1;
                                                                                t.forEach((t) => {
                                                                                    const s =
                                                                                        "equipment" === t.type
                                                                                            ? t.item?.ru || 1
                                                                                            : t.ru || 1;
                                                                                    (t.startRU = e),
                                                                                        (t.endRU = e + s - 1),
                                                                                        (e += s);
                                                                                });
                                                                            }
                                                                            for (let e = 0; e < t.length; e++) {
                                                                                const s = t[e];
                                                                                if (
                                                                                    "equipment" !== s.type ||
                                                                                    !s.item ||
                                                                                    !s.item.needsPairing
                                                                                )
                                                                                    continue;
                                                                                const a = s.item,
                                                                                    r = a.type,
                                                                                    l = a.ru || 1;
                                                                                delete t[e].item.needsPairing;
                                                                                for (let s = 0; s < t.length; s++) {
                                                                                    if (e === s) continue;
                                                                                    const i = t[s];
                                                                                    if (
                                                                                        "equipment" !== i.type ||
                                                                                        !i.item
                                                                                    )
                                                                                        continue;
                                                                                    const n = i.item,
                                                                                        o =
                                                                                            n.isHalfWidth ||
                                                                                            "half" === n.width,
                                                                                        d =
                                                                                            !0 === n.isHalfPair ||
                                                                                            null != n.pairItem;
                                                                                    if (
                                                                                        o &&
                                                                                        !d &&
                                                                                        n.type === r &&
                                                                                        (n.ru || 1) === l &&
                                                                                        !n.needsPairing
                                                                                    ) {
                                                                                        (t[s] = {
                                                                                            ...i,
                                                                                            item: {
                                                                                                ...n,
                                                                                                isHalfPair: !0,
                                                                                                pairItem: {
                                                                                                    ...a,
                                                                                                    isHalfWidth: !0,
                                                                                                    isHalfPair: !1,
                                                                                                    pairItem: null,
                                                                                                },
                                                                                            },
                                                                                        }),
                                                                                            (t[e] = {
                                                                                                id: `blank-freed-${Date.now()}-${e}`,
                                                                                                type: "blank",
                                                                                                ru: l,
                                                                                                startRU: 0,
                                                                                                endRU: 0,
                                                                                            });
                                                                                        break;
                                                                                    }
                                                                                }
                                                                            }
                                                                            if (a) {
                                                                                let e = 1;
                                                                                t.forEach((t) => {
                                                                                    const s =
                                                                                        "equipment" === t.type
                                                                                            ? t.item?.ru || 1
                                                                                            : t.ru || 1;
                                                                                    (t.startRU = e),
                                                                                        (t.endRU = e + s - 1),
                                                                                        (e += s);
                                                                                });
                                                                            }
                                                                            return { ...e, layout: t };
                                                                        })
                                                                    ),
                                                                    u(!1);
                                                            })(a),
                                                        className:
                                                            "p-1.5 sm:p-2.5 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors group",
                                                        title:
                                                            "rack" === r
                                                                ? "Change to Shelf Mount"
                                                                : "Change to Rack Mount",
                                                        children: _jsx("span", {
                                                            className: "text-sm sm:text-base",
                                                            children: "rack" === r ? "🔧" : "📦",
                                                        }),
                                                    }),
                                                    _jsx("button", {
                                                        onClick: () =>
                                                            ((s) => {
                                                                let a = !1,
                                                                    r = 0,
                                                                    l = null,
                                                                    i = -1;
                                                                if (
                                                                    (h.forEach((e, t) => {
                                                                        e.layout.forEach((e) => {
                                                                            "equipment" === e.type &&
                                                                                e.item &&
                                                                                (e.item.id === s &&
                                                                                    ("half" === e.item.width ||
                                                                                        e.item.isHalfWidth) &&
                                                                                    e.item.pairItem &&
                                                                                    ((a = !0),
                                                                                    (r = e.item.pairItem.ru || 1),
                                                                                    (l = e.item.pairItem.type),
                                                                                    (i = t)),
                                                                                e.item.pairItem &&
                                                                                    e.item.pairItem.id === s &&
                                                                                    ("half" === e.item.pairItem.width ||
                                                                                        e.item.pairItem.isHalfWidth) &&
                                                                                    ((a = !0),
                                                                                    (r = e.item.pairItem.ru || 1),
                                                                                    (l = e.item.pairItem.type),
                                                                                    (i = t)));
                                                                        });
                                                                    }),
                                                                    "manual" === L && a && i >= 0)
                                                                ) {
                                                                    const e = h[i];
                                                                    if (!qe(e, l, r, s).canPlace)
                                                                        return void I(
                                                                            `Cannot convert to full width: Rack ${i + 1} is full. Need ${r}U of blank space or a compatible unpaired half-width ${"shelf" === l ? "shelf" : "rack"}-mounted ${r}U item to pair with.`
                                                                        );
                                                                }
                                                                t(
                                                                    e.map((e) => {
                                                                        if (e.id !== s) return e;
                                                                        const t = "half" === e.width ? "full" : "half";
                                                                        return {
                                                                            ...e,
                                                                            width: t,
                                                                            isHalfWidth: "half" === t,
                                                                        };
                                                                    })
                                                                ),
                                                                    p((e) => {
                                                                        const t = e.map((e) => {
                                                                            const t = [];
                                                                            let a = [];
                                                                            e.layout.forEach((e) => {
                                                                                if ("equipment" === e.type && e.item)
                                                                                    if (e.item.id === s) {
                                                                                        const s =
                                                                                            "half" === e.item.width
                                                                                                ? "full"
                                                                                                : "half";
                                                                                        "full" === s && e.item.pairItem
                                                                                            ? (a.push({
                                                                                                  ...e.item.pairItem,
                                                                                                  isHalfPair: !1,
                                                                                                  pairItem: null,
                                                                                              }),
                                                                                              t.push({
                                                                                                  ...e,
                                                                                                  item: {
                                                                                                      ...e.item,
                                                                                                      width: s,
                                                                                                      isHalfWidth: !1,
                                                                                                      isHalfPair: !1,
                                                                                                      pairItem: null,
                                                                                                  },
                                                                                              }))
                                                                                            : "half" === s
                                                                                              ? t.push({
                                                                                                    ...e,
                                                                                                    item: {
                                                                                                        ...e.item,
                                                                                                        width: s,
                                                                                                        isHalfWidth: !0,
                                                                                                        isHalfPair: !1,
                                                                                                        pairItem: null,
                                                                                                        needsPairing:
                                                                                                            !0,
                                                                                                    },
                                                                                                })
                                                                                              : t.push({
                                                                                                    ...e,
                                                                                                    item: {
                                                                                                        ...e.item,
                                                                                                        width: s,
                                                                                                        isHalfWidth:
                                                                                                            "half" ===
                                                                                                            s,
                                                                                                    },
                                                                                                });
                                                                                    } else if (
                                                                                        e.item.pairItem &&
                                                                                        e.item.pairItem.id === s
                                                                                    ) {
                                                                                        const s =
                                                                                            "half" ===
                                                                                            e.item.pairItem.width
                                                                                                ? "full"
                                                                                                : "half";
                                                                                        "full" === s
                                                                                            ? (a.push({
                                                                                                  ...e.item.pairItem,
                                                                                                  width: s,
                                                                                                  isHalfWidth: !1,
                                                                                                  isHalfPair: !1,
                                                                                                  pairItem: null,
                                                                                              }),
                                                                                              t.push({
                                                                                                  ...e,
                                                                                                  item: {
                                                                                                      ...e.item,
                                                                                                      isHalfPair: !1,
                                                                                                      pairItem: null,
                                                                                                  },
                                                                                              }))
                                                                                            : t.push({
                                                                                                  ...e,
                                                                                                  item: {
                                                                                                      ...e.item,
                                                                                                      pairItem: {
                                                                                                          ...e.item
                                                                                                              .pairItem,
                                                                                                          width: s,
                                                                                                          isHalfWidth:
                                                                                                              "half" ===
                                                                                                              s,
                                                                                                      },
                                                                                                  },
                                                                                              });
                                                                                    } else t.push(e);
                                                                                else t.push(e);
                                                                            }),
                                                                                a.forEach((e) => {
                                                                                    const s = e.ru || 1;
                                                                                    if (
                                                                                        e.isHalfWidth ||
                                                                                        "half" === e.width
                                                                                    ) {
                                                                                        let a = !1;
                                                                                        for (
                                                                                            let r = 0;
                                                                                            r < t.length;
                                                                                            r++
                                                                                        ) {
                                                                                            const l = t[r];
                                                                                            if (
                                                                                                "equipment" ===
                                                                                                    l.type &&
                                                                                                l.item
                                                                                            ) {
                                                                                                const i = l.item,
                                                                                                    n =
                                                                                                        i.isHalfWidth ||
                                                                                                        "half" ===
                                                                                                            i.width,
                                                                                                    o =
                                                                                                        i.isHalfPair &&
                                                                                                        i.pairItem;
                                                                                                if (
                                                                                                    n &&
                                                                                                    !o &&
                                                                                                    (i.ru || 1) === s &&
                                                                                                    i.type === e.type
                                                                                                ) {
                                                                                                    (t[r] = {
                                                                                                        ...l,
                                                                                                        item: {
                                                                                                            ...i,
                                                                                                            isHalfPair:
                                                                                                                !0,
                                                                                                            pairItem: {
                                                                                                                ...e,
                                                                                                                isHalfWidth:
                                                                                                                    !0,
                                                                                                            },
                                                                                                        },
                                                                                                    }),
                                                                                                        (a = !0);
                                                                                                    break;
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                        if (a) return;
                                                                                    }
                                                                                    let a = 0,
                                                                                        r = -1;
                                                                                    for (let e = 0; e < t.length; e++)
                                                                                        if ("blank" === t[e].type) {
                                                                                            if (
                                                                                                (-1 === r && (r = e),
                                                                                                a++,
                                                                                                a >= s)
                                                                                            )
                                                                                                break;
                                                                                        } else (a = 0), (r = -1);
                                                                                    a >= s && r >= 0
                                                                                        ? t.splice(r, s, {
                                                                                              id: `layout-relocated-${Date.now()}-${e.id}`,
                                                                                              type: "equipment",
                                                                                              item: e,
                                                                                              startRU: 0,
                                                                                              endRU: 0,
                                                                                              ru: s,
                                                                                          })
                                                                                        : t.push({
                                                                                              id: `layout-relocated-${Date.now()}-${e.id}`,
                                                                                              type: "equipment",
                                                                                              item: e,
                                                                                              startRU: 0,
                                                                                              endRU: 0,
                                                                                              ru: s,
                                                                                          });
                                                                                });
                                                                            for (let e = 0; e < t.length; e++) {
                                                                                const s = t[e];
                                                                                if (
                                                                                    "equipment" !== s.type ||
                                                                                    !s.item ||
                                                                                    !s.item.needsPairing
                                                                                )
                                                                                    continue;
                                                                                const a = s.item,
                                                                                    r = a.type,
                                                                                    l = a.ru || 1;
                                                                                delete t[e].item.needsPairing;
                                                                                for (let s = 0; s < t.length; s++) {
                                                                                    if (e === s) continue;
                                                                                    const i = t[s];
                                                                                    if (
                                                                                        "equipment" !== i.type ||
                                                                                        !i.item
                                                                                    )
                                                                                        continue;
                                                                                    const n = i.item,
                                                                                        o =
                                                                                            n.isHalfWidth ||
                                                                                            "half" === n.width,
                                                                                        d =
                                                                                            !0 === n.isHalfPair ||
                                                                                            null != n.pairItem;
                                                                                    if (
                                                                                        o &&
                                                                                        !d &&
                                                                                        n.type === r &&
                                                                                        (n.ru || 1) === l &&
                                                                                        !n.needsPairing
                                                                                    ) {
                                                                                        (t[s] = {
                                                                                            ...i,
                                                                                            item: {
                                                                                                ...n,
                                                                                                isHalfPair: !0,
                                                                                                pairItem: {
                                                                                                    ...a,
                                                                                                    isHalfWidth: !0,
                                                                                                    isHalfPair: !1,
                                                                                                    pairItem: null,
                                                                                                },
                                                                                            },
                                                                                        }),
                                                                                            (t[e] = {
                                                                                                id: `blank-freed-${Date.now()}-${e}`,
                                                                                                type: "blank",
                                                                                                ru: l,
                                                                                                startRU: 0,
                                                                                                endRU: 0,
                                                                                            });
                                                                                        break;
                                                                                    }
                                                                                }
                                                                            }
                                                                            let r = 1;
                                                                            return (
                                                                                t.forEach((e) => {
                                                                                    const t =
                                                                                        "equipment" === e.type
                                                                                            ? e.item?.ru || 1
                                                                                            : e.ru || 1;
                                                                                    (e.startRU = r),
                                                                                        (e.endRU = r + t - 1),
                                                                                        (r += t);
                                                                                }),
                                                                                { ...e, layout: t }
                                                                            );
                                                                        });
                                                                        return t;
                                                                    }),
                                                                    u(!1);
                                                            })(a),
                                                        className:
                                                            "p-1.5 sm:p-2.5 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors group",
                                                        title:
                                                            "half" === l
                                                                ? "Change to Full Width"
                                                                : "Change to Half Width",
                                                        children: _jsx("span", {
                                                            className: "text-sm sm:text-base",
                                                            children: "half" === l ? "◧" : "■",
                                                        }),
                                                    }),
                                                ],
                                            });
                                        })(),
                                    h.length > 1 &&
                                        "equipment" === ot?.type &&
                                        !ot?.isPairItem &&
                                        (() => {
                                            const e = g?.rackIdx,
                                                t = ot.item?.ru || 1,
                                                s = ot.item?.name || "Item",
                                                a = [];
                                            if (
                                                (h.forEach((s, r) => {
                                                    if (r === e) return;
                                                    // Count maximum consecutive blanks anywhere in the rack
                                                    let maxConsecutiveBlanks = 0;
                                                    let currentConsecutive = 0;
                                                    s.layout.forEach(li => {
                                                        if (li.type === "blank") {
                                                            currentConsecutive++;
                                                            if (currentConsecutive > maxConsecutiveBlanks) {
                                                                maxConsecutiveBlanks = currentConsecutive;
                                                            }
                                                        } else {
                                                            currentConsecutive = 0;
                                                        }
                                                    });
                                                    // Also count trailing blanks for backward compatibility
                                                    let trailingBlanks = 0;
                                                    for (
                                                        let e = s.layout.length - 1;
                                                        e >= 0 && "blank" === s.layout[e].type;
                                                        e--
                                                    )
                                                        trailingBlanks++;
                                                    // Use the larger of maxConsecutive or trailing
                                                    const availableSpace = Math.max(maxConsecutiveBlanks, trailingBlanks);
                                                    availableSpace >= t && a.push({ idx: r, availableBlanks: availableSpace, rack: s });
                                                }),
                                                0 === a.length)
                                            )
                                                return _jsxs(_Fragment, {
                                                    children: [
                                                        _jsx("div", {
                                                            className: "w-px h-5 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1",
                                                        }),
                                                        _jsx("span", {
                                                            className: "text-xs text-gray-400 px-2",
                                                            title: "No other racks have enough space for this item",
                                                            children: "No transfer options",
                                                        }),
                                                    ],
                                                });
                                            return _jsxs(_Fragment, {
                                                children: [
                                                    _jsx("div", {
                                                        className: "w-px h-5 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1",
                                                    }),
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            _jsx("svg", {
                                                                className: "w-4 h-4 text-gray-500",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 2,
                                                                children: _jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                                                                }),
                                                            }),
                                                            _jsx("select", {
                                                                onChange: (e) => {
                                                                    const r = parseInt(e.target.value);
                                                                    if (
                                                                        ((e.target.selectedIndex = 0),
                                                                        isNaN(r) || r < 0)
                                                                    )
                                                                        return;
                                                                    if (!g || !ot?.item) return;
                                                                    const l = g.rackIdx;
                                                                    if (l === r)
                                                                        return void I(
                                                                            "Cannot transfer to the same rack"
                                                                        );
                                                                    if (r >= h.length)
                                                                        return void I(`Rack ${r + 1} does not exist`);
                                                                    const i = a.find((e) => e.idx === r);
                                                                    if (!i)
                                                                        return void I(
                                                                            `Cannot transfer "${s}" (${t}U) to Rack ${r + 1}: not enough space`
                                                                        );
                                                                    const n = h.map((e) => ({
                                                                            ...e,
                                                                            layout: e.layout.map((e) =>
                                                                                "equipment" === e.type && e.item
                                                                                    ? {
                                                                                          ...e,
                                                                                          item: {
                                                                                              ...e.item,
                                                                                              pairItem: e.item.pairItem
                                                                                                  ? {
                                                                                                        ...e.item
                                                                                                            .pairItem,
                                                                                                    }
                                                                                                  : null,
                                                                                          },
                                                                                      }
                                                                                    : { ...e }
                                                                            ),
                                                                        })),
                                                                        o = n[l],
                                                                        d = n[r];
                                                                    if (!o || !d)
                                                                        return void I("Transfer failed: invalid rack");
                                                                    const m = g.layoutId,
                                                                        x = o.layout.findIndex((e) => e.id === m);
                                                                    if (x < 0)
                                                                        return void I(
                                                                            "Transfer failed: item not found in source rack"
                                                                        );
                                                                    const f = { ...o.layout[x] };
                                                                    f.item &&
                                                                        ((f.item = { ...f.item }),
                                                                        f.item.pairItem &&
                                                                            (f.item.pairItem = { ...f.item.pairItem }));
                                                                    const y = f.item?.ru || 1;
                                                                    
                                                                    // Find best position for insertion - look for consecutive blanks anywhere
                                                                    let bestBlankStart = -1;
                                                                    let bestBlankCount = 0;
                                                                    let currentStart = -1;
                                                                    let currentCount = 0;
                                                                    
                                                                    for (let idx = 0; idx < d.layout.length; idx++) {
                                                                        if (d.layout[idx].type === "blank") {
                                                                            if (currentStart === -1) currentStart = idx;
                                                                            currentCount++;
                                                                            if (currentCount >= y && currentCount > bestBlankCount) {
                                                                                bestBlankStart = currentStart;
                                                                                bestBlankCount = currentCount;
                                                                            }
                                                                        } else {
                                                                            currentStart = -1;
                                                                            currentCount = 0;
                                                                        }
                                                                    }
                                                                    
                                                                    // Also check trailing blanks as fallback
                                                                    let trailingStart = d.layout.length;
                                                                    let trailingCount = 0;
                                                                    for (let idx = d.layout.length - 1; idx >= 0 && d.layout[idx].type === "blank"; idx--) {
                                                                        trailingStart = idx;
                                                                        trailingCount++;
                                                                    }
                                                                    
                                                                    // Use trailing blanks if they're sufficient, otherwise use best consecutive
                                                                    let insertPos, blanksToRemove;
                                                                    if (trailingCount >= y) {
                                                                        insertPos = trailingStart;
                                                                        blanksToRemove = { start: trailingStart, count: y };
                                                                    } else if (bestBlankStart >= 0 && bestBlankCount >= y) {
                                                                        insertPos = bestBlankStart;
                                                                        blanksToRemove = { start: bestBlankStart, count: y };
                                                                    } else {
                                                                        return void I(
                                                                            `Cannot transfer "${s}" (${y}U) to Rack ${r + 1}: not enough consecutive space`
                                                                        );
                                                                    }
                                                                    
                                                                    // Remove item from source rack and add blanks
                                                                    o.layout.splice(x, 1);
                                                                    for (let e = 0; e < y; e++)
                                                                        o.layout.splice(x + e, 0, {
                                                                            id: `blank-${l}-transfer-${Date.now()}-${e}`,
                                                                            startRU: 0,
                                                                            endRU: 0,
                                                                            type: "blank",
                                                                            ru: 1,
                                                                        });
                                                                    
                                                                    // Remove blanks from target rack and insert equipment
                                                                    d.layout.splice(blanksToRemove.start, blanksToRemove.count);
                                                                    d.layout.splice(blanksToRemove.start, 0, f);
                                                                    
                                                                    st(o);
                                                                    st(d);
                                                                    if ("manual" === L)
                                                                        p([...n]);
                                                                    else {
                                                                        const e = Oe(n, c, me);
                                                                        p(Ge(e, me));
                                                                    }
                                                                    b({ rackIdx: r, layoutId: f.id }),
                                                                        T(r),
                                                                        u(!1),
                                                                        (De.current = !0);
                                                                },
                                                                defaultValue: "-1",
                                                                className:
                                                                    "text-xs sm:text-sm bg-transparent border border-gray-300 rounded-lg px-1 py-1 pr-6 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300",
                                                                title: "Transfer to another rack",
                                                                children: [
                                                                    _jsx(
                                                                        "option",
                                                                        { value: "-1", children: "Transfer →" },
                                                                        "default"
                                                                    ),
                                                                    ...a.map(({ idx: e, availableBlanks: t, rack: s }) =>
                                                                        _jsx(
                                                                            "option",
                                                                            {
                                                                                value: String(e),
                                                                                children: `${We(s, e)} (${t}U free)`,
                                                                            },
                                                                            `rack-${e}`
                                                                        )
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            });
                                        })(),
                                    _jsx("div", { className: "w-px h-5 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1" }),
                                    _jsx("button", {
                                        onClick: () => {
                                            if (g)
                                                if ("blank" === ot?.type) {
                                                    const e = h.map((e) => ({
                                                            ...e,
                                                            layout: e.layout.map((e) =>
                                                                "equipment" === e.type && e.item
                                                                    ? { ...e, item: { ...e.item } }
                                                                    : { ...e }
                                                            ),
                                                        })),
                                                        t = e[g.rackIdx],
                                                        s = t.layout.findIndex((e) => e.id === g.layoutId);
                                                    s >= 0 &&
                                                        (t.layout.splice(s, 1),
                                                        st(t),
                                                        p("manual" === L ? [...e] : Ge(Oe(e, c, me), me)),
                                                        b(null),
                                                        u(!1),
                                                        (De.current = !0));
                                                } else ot?.item?.id && (Qe(ot.item.id), b(null));
                                        },
                                        className:
                                            "p-1.5 sm:p-2.5 hover:bg-red-50 rounded-lg sm:rounded-xl transition-colors group",
                                        title: "Remove Item",
                                        children: _jsx("svg", {
                                            className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-red-500",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: _jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                            }),
                                        }),
                                    }),
                                    _jsx("button", {
                                        onClick: () => b(null),
                                        className:
                                            "p-1.5 sm:p-2.5 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors group",
                                        title: "Deselect",
                                        children: _jsx("svg", {
                                            className: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600",
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
                                ],
                            }),
                        }),
                    }),
                    document.body
                ),
            g && ot && _jsx("div", { className: "h-24 sm:h-28" }),
            X &&
                _jsx("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                    style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                    onClick: (e) => {
                        e.target === e.currentTarget && J(!1);
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
                                        className:
                                            "h-24 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700",
                                        style: { borderRadius: "0 0 50% 50% / 0 0 30px 30px" },
                                    }),
                                    _jsx("button", {
                                        onClick: () => J(!1),
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
                                            children: _jsx("span", { className: "text-3xl", children: "🗄️" }),
                                        }),
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "px-6 pt-12 pb-6 text-center",
                                children: [
                                    _jsx("h3", {
                                        className: "text-xl font-bold text-gray-900 mb-3",
                                        children: "Add New Rack",
                                    }),
                                    _jsx("p", {
                                        className: "text-gray-600 text-sm leading-relaxed mb-4",
                                        children: "Select the size for your new rack",
                                    }),
                                    _jsx("select", {
                                        value: Q,
                                        onChange: (e) => K(parseInt(e.target.value)),
                                        className:
                                            "w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-indigo-500 focus:outline-none mb-6",
                                        children: ce.map((e) =>
                                            _jsx("option", { key: e, value: e, children: `${e}U Rack` })
                                        ),
                                    }),
                                    _jsxs("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            _jsx("button", {
                                                onClick: () => {
                                                    Ve(Q), J(!1);
                                                },
                                                className:
                                                    "w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg",
                                                children: "Add Rack",
                                            }),
                                            _jsx("button", {
                                                onClick: () => J(!1),
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
                }),
            Y &&
                ee &&
                _jsx("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                    style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                    onClick: (e) => {
                        e.target === e.currentTarget && (Z(!1), te(null));
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
                                        className: "h-24 bg-gradient-to-br from-red-500 via-red-600 to-red-700",
                                        style: { borderRadius: "0 0 50% 50% / 0 0 30px 30px" },
                                    }),
                                    _jsx("button", {
                                        onClick: () => {
                                            Z(!1), te(null);
                                        },
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
                                                className: "w-9 h-9 text-red-600",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: _jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                                }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            _jsxs("div", {
                                className: "px-6 pt-12 pb-6 text-center",
                                children: [
                                    _jsx("h3", {
                                        className: "text-xl font-bold text-gray-900 mb-3",
                                        children: `Delete Rack ${ee.index + 1}?`,
                                    }),
                                    _jsx("p", {
                                        className: "text-gray-600 text-sm leading-relaxed mb-6",
                                        children: ee.hasEquipment
                                            ? "This rack contains equipment. All equipment in this rack will be permanently removed. This action cannot be undone."
                                            : "Are you sure you want to delete this empty rack? This action cannot be undone.",
                                    }),
                                    _jsxs("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            _jsx("button", {
                                                onClick: () => {
                                                    ((e) => {
                                                        if ("manual" !== L) return;
                                                        if (h.length <= 1) return void I("Cannot remove the last rack");
                                                        const s = h[e];
                                                        if (s) {
                                                            const e = new Set();
                                                            s.layout.forEach((t) => {
                                                                "equipment" === t.type &&
                                                                    t.item &&
                                                                    t.item.id &&
                                                                    e.add(t.item.id);
                                                            }),
                                                                e.size > 0 && t((t) => t.filter((t) => !e.has(t.id)));
                                                        }
                                                        p((t) => t.filter((t, s) => s !== e)),
                                                            B >= e && B > 0 && T(B - 1);
                                                    })(ee.index),
                                                        Z(!1),
                                                        te(null);
                                                },
                                                className:
                                                    "w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg",
                                                children: "Yes, Delete Rack",
                                            }),
                                            _jsx("button", {
                                                onClick: () => {
                                                    Z(!1), te(null);
                                                },
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
                }),
        ],
    });
}

export default RackBuilderCalculator;
