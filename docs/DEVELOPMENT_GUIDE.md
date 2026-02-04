# Development & Maintenance Guide

How to modify and expand the AV Tools Pro application.

## 1. Modifying an Existing Calculator

Since the refactor (Feb 2026), each calculator is fully self-contained in `js/tools/`.

1.  **Locate the File:** Find the relevant file in `js/tools/` (e.g., `bandwidth-calculator.js`).
2.  **Edit Logic:** The math function is at the top of the file (e.g., `calculateBandwidth`).
3.  **Edit UI:** The React component function is below the math logic (e.g., `function BandwidthCalculator()`).
4.  **Save:** No build step is required. Just save the file and refresh your browser.

## 2. Adding a New Calculator

1.  **Create File:** Create a new file in `js/tools/` (e.g., `my-new-tool.js`).
2.  **Implement:**
    *   Write your math function.
    *   Write your React component using `_jsx` and `_jsxs` helpers (copy the pattern from an existing tool).
3.  **Register Script:** Open `index.html` and add a `<script>` tag for your new file in the "Tools" section.
4.  **Register Route:** 
    *   Open `AVToolsWebsite.js`.
    *   Add the tool key to the mapping object.
    *   Add a new `_jsx` entry to the main `switch` statement to render your component.
5.  **Update Homepage:** Add a link to `index.html` using the `?tool=[key]` format.

## 3. Best Practices

- **Avoid ES Modules:** Do not use `import` or `export` statements. Scripts are loaded globally.
- **Naming Conventions:**
    - Files: `kebab-case.js` (e.g., `my-tool.js`)
    - Functions: `PascalCase` for Components, `camelCase` for logic.
- **Dependencies:** All tools rely on `js/core.js` being loaded first. Do not remove it.

---
*Prepared by Antigravity AI - Google DeepMind*
