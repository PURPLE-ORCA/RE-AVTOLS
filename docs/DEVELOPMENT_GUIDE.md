# Development & Maintenance Guide

A comprehensive guide to modifying and expanding the AV Tools Pro application.

## 1. The "No-Build" React System

This project runs **React directly in the browser** without Webpack, Vite, or Babel. This means we cannot use standard JSX syntax (like `<div />`). Instead, we use custom wrapper functions defined in `js/core.js`.

### The Core Primitives
- **`_jsx(type, props, key)`**: Used for elements with **zero or one** child.
- **`_jsxs(type, props, key)`**: Used for elements with **multiple** children (passed as an array).

#### Examples
**Standard JSX:**
```jsx
<div className="card">
  <h1>Title</h1>
  <p>Content</p>
</div>
```

**Our System:**
```javascript
_jsxs("div", {
    className: "card",
    children: [
        _jsx("h1", { children: "Title" }),
        _jsx("p", { children: "Content" })
    ]
})
```

### Global Hooks
Standard React hooks are exposed globally. You do not need to import them.
- `useState`
- `useEffect`
- `useRef`

## 2. Working with Components

All components are standard JavaScript functions. They are **not** exported (no `export default`); they simply exist in the global scope.

### Component Template
```javascript
function MyNewCalculator() {
    // 1. State
    const [value, setValue] = useState(0);

    // 2. Calculation Logic (Call pure functions from calculators-all.js)
    const result = calculateMyFormula(value);

    // 3. Render
    return _jsxs("div", {
        className: "p-4 bg-white dark:bg-gray-800 rounded-xl",
        children: [
            _jsx("h2", { children: "Calculator Title" }),
            _jsx("input", {
                type: "number",
                value: value,
                onChange: (e) => setValue(parseFloat(e.target.value)),
                className: "border p-2 rounded"
            }),
            _jsxs("p", {
                children: ["Result: ", result]
            })
        ]
    });
}
```

## 3. Styling & Theming

The application uses **Tailwind CSS**. 
- **Default Theme:** Light Mode.
- **Dark Mode Strategy:** We use the `dark:` prefix class.
- **Requirement:** Every component **must** look good in both modes.

**Common Pattern:**
```javascript
className: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700"
```

## 4. How to Add a New Calculator

Follow these 4 steps to add a new tool to the platform.

### Step 1: Add the Logic
Open `js/calculators-all.js` and add your pure mathematical function.
```javascript
function calculateMyTool(input) {
    return input * 2;
}
```

### Step 2: Create the UI Component
Open the relevant file in `js/components/` (e.g., `calculators-video.js`) and add your React component function using the template above.

### Step 3: Register the Route
Open `AVToolsWebsite.js`:

1.  **Add to Routing Map:**
    Find the `i` object (around line 30) and add your tool key:
    ```javascript
    mytool: "my-new-tool-component"
    ```

2.  **Add to Navigation Data:**
    Find the `d` object (around line 85) and add your tool details to the correct category:
    ```javascript
    {
        id: "mytool",
        name: "My New Tool",
        icon: "icons/My_Icon.svg",
        desc: "Description for the card"
    }
    ```

3.  **Add to Switch Case:**
    Find the main render switch (around line 520) and add the component:
    ```javascript
    mytool: _jsx(MyNewCalculator, {}),
    ```

### Step 4: Verify
Open `index.html?tool=mytool` in your browser to test.

---
*Prepared by Antigravity AI - Google DeepMind*
