# File Structure Reference

This document provides a detailed breakdown of the files within the AV Tools Pro project.

## Root Directory

| File | Description |
| :--- | :--- |
| `index.html` | The main entry point. Loads all 16 tool scripts sequentially. |
| `AVToolsWebsite.js` | The main application shell. Handles routing, theme switching, and layout. |
| `AV_TOOLS_LOGO.svg` | Primary logo asset. |
| `ads.txt` | Authorized Digital Sellers file for AdSense. |
| `sitemap.xml` | Search engine navigation map. |

## `js/` Directory

| File | Purpose |
| :--- | :--- |
| `js/core.js` | **Foundational.** Contains React JSX helpers and global utilities. |
| `js/security.js` | **Protection.** Contains anti-debug and anti-tamper logic. |

## `js/tools/` Directory (The Calculators)

Each file contains the complete Logic + UI for one specific tool.

| File | Tool Name |
| :--- | :--- |
| `bandwidth-calculator.js` | AVoIP Bandwidth |
| `projector-calculator.js` | Projector Throw & Brightness |
| `brightness-calculator.js` | Display Brightness (Nits) |
| `viewing-angle-calculator.js` | Viewing Angle (DISCAS) |
| `dvled-calculator.js` | DvLED Pixel Pitch |
| `videowall-controller.js` | Controller Loading |
| `videowall-builder.js` | Video Wall Design |
| `display-size-calculator.js` | Display Size (DISCAS) |
| `camera-calculator.js` | Camera Distance (DORI) |
| `conduit-calculator.js` | Conduit Fill |
| `audio-calculator.js` | Audio Data Rate |
| `poe-calculator.js` | PoE Budget |
| `cooling-calculator.js` | BTU Cooling |
| `speaker-calculator.js` | Speaker Impedance |
| `dsp-calculator.js` | DSP Resources |
| `rack-builder.js` | Rack Builder (Visualizer) |

## `js/components/` Directory

| File | Purpose |
| :--- | :--- |
| `ResetConfirmModal.js` | Shared modal component for confirming tool resets. |

## Assets

- `icons/`: SVG icons for all calculator tools.
- `images/`: Static image assets for the website.

---
*Prepared by Antigravity AI - Google DeepMind*
