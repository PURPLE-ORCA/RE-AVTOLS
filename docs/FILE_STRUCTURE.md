# File Structure Reference

This document provides a detailed breakdown of the files within the AV Tools Pro project.

## Root Directory

| File | Description |
| :--- | :--- |
| `index.html` | The main entry point. Contains the SEO metadata, pre-rendered static content, and script loading logic. |
| `AVToolsWebsite.js` | The main application shell. Handles routing, theme switching (Dark/Light), and the high-level layout. |
| `AV_TOOLS_LOGO.svg` | Primary logo asset. |
| `ads.txt` | Authorized Digital Sellers file for AdSense. |
| `sitemap.xml` | Search engine navigation map. |

## `js/` Directory

| File | Purpose |
| :--- | :--- |
| `js/core.js` | **Foundational.** Contains React JSX helpers and the `_0x99bba9` global number parser. |
| `js/calculators-all.js` | **The Brain.** 1,700+ lines of pure mathematical formulas for every calculator. |
| `js/security.js` | **Protection.** Contains anti-debug and anti-tamper logic to protect proprietary code. |

## `js/components/` Directory

| File | Purpose |
| :--- | :--- |
| `ResetConfirmModal.js` | Shared modal component for confirming tool resets. |
| `calculators-video.js` | UI components for the 9 video calculators (Bandwidth, Projector, Display, etc.). |
| `calculators-audio-it.js` | UI components for the 7 audio/IT calculators (Speaker, DSP, Conduit, PoE, etc.). |

## Assets

- `icons/`: SVG icons for all calculator tools.
- `images/`: Static image assets for the website.
- `api/`: Backend PHP scripts for server-side operations (if any).

---
*Prepared by Antigravity AI - Google DeepMind*
