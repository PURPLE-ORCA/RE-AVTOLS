# AV Tools Pro: Technical Architecture

This document outlines the architectural strategy used for the AV Tools Pro website refactor (Feb 2026).

## 1. Modularization Strategy: "Smart Separation"

To maintain compatibility with legacy browsers and satisfy the "No Build Tools" requirement, the application uses a **Global Scope Script Concatenation** pattern. 

Unlike modern ES Modules (`import/export`), which require a local server and specific MIME types, this approach loads scripts sequentially in the global memory space.

### Load Order Diagram

```mermaid
graph TD
    A[index.html] --> B(js/security.js)
    B --> C(js/core.js)
    C --> D(js/components/ResetConfirmModal.js)
    D --> E(js/calculators-all.js)
    E --> F(js/components/calculators-video.js)
    F --> G(js/components/calculators-audio-it.js)
    G --> H(AVToolsWebsite.js)
    H --> I{checkAndMount}
    I --> J[React Root Render]
```

## 2. Page Refresh Architecture (Ad Optimization)

The application has moved away from a Single Page Application (SPA) routing model to a **Standard Multi-Page Navigation** model via URL Query Parameters.

- **URL Pattern:** `avtoolspro.com/?tool=bandwidth`
- **Mechanism:** When a user clicks a tool link, the browser performs a full HTTP request and page reload.
- **Benefit:** This forces a refresh of the Google AdSense units on every navigation, maximizing ad impressions and revenue per session.

## 3. Component Hierarchy

1.  **React Globals:** Provided via Unpkg CDN.
2.  **Core Layer:** Defines the `_jsx` and `_jsxs` primitives used by the React components.
3.  **Logic Layer:** Contains pure JavaScript functions (math/formulas) independent of the UI.
4.  **UI Layer:** React functional components that handle user input and display results.
5.  **Shell Layer:** The `AVToolsWebsite` component which manages the overall layout, theme, and routing.

---
*Prepared by Antigravity AI - Google DeepMind*
