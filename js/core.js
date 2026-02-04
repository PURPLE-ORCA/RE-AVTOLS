// @license Proprietary - avtoolspro.com
// Core React Helpers and Utilities

const _jsx = (e, t, s) => {
    const { children: a, ...r } = t || {};
    return void 0 !== s && (r.key = s), React.createElement(e, r, a);
};

const _jsxs = (e, t, s) => {
    const { children: a, ...r } = t || {};
    return (
        void 0 !== s && (r.key = s),
        Array.isArray(a) ? React.createElement(e, r, ...a) : React.createElement(e, r, a)
    );
};

const _Fragment = React.Fragment;

// Expose React hooks globally
const { useState, useEffect, useRef } = React;

// Utility: Number parser/validator
// Used for safe float conversion with default value and optional minimum
const _0x99bba9 = (e, t = 0, s = null) => {
    if ("" === e || null == e) return t;
    const a = "string" == typeof e ? parseFloat(e) : e;
    return isNaN(a) ? t : null !== s && a < s ? s : a;
};
