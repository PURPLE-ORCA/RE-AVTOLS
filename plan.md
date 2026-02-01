# Plan: Refactor AVToolsWebsite for Security and Ad Refresh

## Objective
Refactor the single-file `AVToolsWebsite.js` application into a modular structure to enhance security and enforce page refreshes on navigation (to trigger ad impressions).

## Constraints
- **No Build Tools:** Use native ES Modules (`<script type="module">`).
- **Full Page Refresh:** Remove SPA navigation for tools to allow ads to reload.
- **Maintain Functionality:** Preserve exact existing features and design.

## 1. Directory Structure Setup
We will organize the code into the following structure:
```
/
├── js/
│   ├── security.js           # Isolated anti-tamper code
│   ├── utils.js              # Shared helpers (_jsx, calculations, modal)
│   ├── index.js              # Entry point (mounting logic)
│   ├── AVToolsWebsite.js     # Main React Shell Component
│   └── calculators/          # Individual tool components
│       ├── BandwidthCalculator.js
│       ├── ConduitCalculator.js
│       ├── ... (16 tools total)
└── index.html                # Updated to load modules
```

## 2. Execution Steps

### Step 1: Backup
- Create a backup of `AVToolsWebsite.js` to `AVToolsWebsite.bak.js`.

### Step 2: Extract Security Logic (`js/security.js`)
- Extract the top-level IIFEs (Immediate Invoked Function Expressions) responsible for:
  - `_avp` property definition.
  - Debugger protection.
  - Environment checks (PhantomJS, WebDriver, etc.).
  - `_$avIntegrity` checks.
- This file will be loaded as a standard script (non-module) to run immediately.

### Step 3: Extract Utilities and Shared Logic (`js/utils.js`)
- Extract React helpers: `_jsx`, `_jsxs`, `_Fragment`.
- Extract shared components: `ResetConfirmModal`.
- Extract all standalone calculation functions:
  - `calculateCameraWithZoom`
  - `calculateMixedConduitFill`
  - `_0xb9cb50` (Conduit helper)
  - `_0xae89d3` (Audio helper)
  - `calculateProjectorThrow`
  - `_0x78d92f` (PoE helper)
  - `_0xac743b` (Brightness helper)
  - `_0x9860ed` (Viewing Angle helper)
  - `calculateDvLEDPixelPitch`
  - `calculateVideoWallController`
  - `calculateRackCooling`
  - `calculateSpeakerPower`
  - `_0xb402b0` (Display Size helper)
  - `calculateCameraDistance`
  - `calculateDSP`
- Export these functions using named exports.

### Step 4: Extract Calculator Components (`js/calculators/*.js`)
For each of the 16 calculators, create a dedicated file (e.g., `js/calculators/BandwidthCalculator.js`):
- **Imports:** Import `_jsx`, `_jsxs`, `ResetConfirmModal` and relevant calculation functions from `../utils.js`.
- **React Access:** Destructure hooks at the top: `const { useState, useEffect, useRef } = React;`.
- **Component:** Copy the specific calculator function code.
- **Export:** Use `export default function Name() { ... }`.

**List of Calculators to Extract:**
1.  `BandwidthCalculator`
2.  `ConduitCalculator`
3.  `AudioCalculator`
4.  `ProjectorCalculator`
5.  `POECalculator`
6.  `BrightnessCalculator`
7.  `ViewingAngleCalculator`
8.  `DvLEDCalculator`
9.  `VideoWallCalculator`
10. `VideoWallBuilderCalculator`
11. `CoolingCalculator`
12. `SpeakerCalculator`
13. `DisplaySizeCalculator`
14. `CameraCalculator`
15. `DSPCalculator`
16. `RackBuilderCalculator`

### Step 5: Refactor Main Component (`js/AVToolsWebsite.js`)
- **Imports:**
  - Import all 16 calculator components.
  - Import utils (`_jsx`, `_jsxs`).
- **Navigation Logic Change (Critical for Ads):**
  - Locate the tool grid/links in the `home` view.
  - **Remove** the `onClick` handler that calls `preventDefault()` and `pushState`.
  - **Keep** the `href` attribute.
  - *Result:* Clicking a tool will cause a standard browser navigation (page reload), triggering ads to refresh.
- **State Logic:**
  - Keep the `useEffect` that checks `window.location.pathname` on mount. This ensures that when the page reloads (e.g., to `/bandwidth-calculator`), the app correctly initializes in the "tool" view.

### Step 6: Create Entry Point (`js/index.js`)
- Import `AVToolsWebsite`.
- Implement the `checkAndMount` logic to wait for React/DOM and mount the app using `ReactDOM.createRoot`.

### Step 7: Update `index.html`
- Remove the old monolithic script reference.
- Add `<script src="js/security.js"></script>` (blocking, for security).
- Add `<script type="module" src="js/index.js"></script>`.

## 3. Verification
- **Functional Check:** Navigate to a tool. Verify page reloads. Verify tool renders correctly after reload.
- **Calculation Check:** Spot check a few complex calculators (e.g., DSP, PoE) to ensure shared calculation functions are imported correctly.
- **Security Check:** Verify the console logs "Protected by avtoolspro.com" or similar indicators from `security.js`.
