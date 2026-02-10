# File Structure Reference

This document provides a detailed breakdown of the files within the AV Tools Pro project.

## Root Directory

| File | Description |
| :--- | :--- |
| `index.html` | **Entry Point.** Contains SEO metadata, CDN links (React, Tailwind), and script loading order. |
| `AVToolsWebsite.js` | **App Shell.** The main React component that handles Routing, Theme toggling, and the global Layout. |
| `AV_TOOLS_LOGO.svg` | Primary logo asset. |
| `ads.txt` | Authorized Digital Sellers file for AdSense. |
| `sitemap.xml` | Search engine navigation map. |

## `js/` Directory

| File | Purpose |
| :--- | :--- |
| `js/core.js` | **Framework Core.** Defines the `_jsx` / `_jsxs` helpers and exposes React hooks globally. |
| `js/calculators-all.js` | **Logic Engine.** Contains all pure mathematical formulas. Decoupled from UI. |
| `js/security.js` | **Security.** Contains anti-debug and anti-tamper logic. |
| `js/components/` | **UI Components.** Folder containing the React components for specific tools. |

## `js/components/` Directory

| File | Purpose |
| :--- | :--- |
| `ResetConfirmModal.js` | Shared UI modal for confirming "Reset to Defaults" actions. |
| `calculators-video.js` | Contains all Video-related calculators (Bandwidth, Projector, Display, etc.). |
| `calculators-audio-it.js` | Contains all Audio and IT-related calculators (Speaker, DSP, PoE, Rack, etc.). |

## Assets

- `icons/`: SVG icons for all calculator tools (used on the Homepage cards).
- `images/`: Static image assets (OG tags, social sharing).
- `api/`: (Optional) PHP backend scripts for specific server-side formulas.

---
*Prepared by Antigravity AI - Google DeepMind*
