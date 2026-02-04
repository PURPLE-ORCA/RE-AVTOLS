# Development & Maintenance Guide

How to modify and expand the AV Tools Pro application.

## 1. Modifying an Existing Calculator

### UI Changes
- To change how a calculator looks (inputs, sliders, labels), find the corresponding component in:
    - `js/components/calculators-video.js`
    - `js/components/calculators-audio-it.js`
- Look for the component function name (e.g., `BandwidthCalculator`).

### Logic/Formula Changes
- If a calculation result is incorrect, the math logic is likely in:
    - `js/calculators-all.js`
- All logic functions follow the `calculate[ToolName]` naming convention.

## 2. Adding a New Calculator

1.  **Add Logic:** Write the math function in `js/calculators-all.js`.
2.  **Create UI:** Add a new React component to the relevant file in `js/components/`.
3.  **Register Route:** 
    - Open `AVToolsWebsite.js`.
    - Add the tool key to the `i` mapping object.
    - Add a new `_jsx` entry to the main `switch` (around line 530).
4.  **Update Homepage:** Add a link to `index.html` using the `?tool=[key]` format.

## 3. Best Practices

- **Avoid ES Modules:** Do not use `import` or `export` statements. Scripts are loaded globally.
- **Naming Conventions:** Use the `_jsx` and `_jsxs` helpers instead of raw `React.createElement` for consistency with existing code.
- **Cache Busting:** When deploying changes to JS files, update the version number in `index.html` (e.g., `?v=dev3`) to ensure users see the latest version.

---
*Prepared by Antigravity AI - Google DeepMind*
