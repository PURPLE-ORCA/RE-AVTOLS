// @license Proprietary - avtoolspro.com
// Reset Confirmation Modal Component
// Used by all calculator tools to confirm reset actions

const ResetConfirmModal = ({
    isOpen: e,
    onConfirm: t,
    onCancel: s,
    title: a = "Reset Tool?",
    message: r = "This will reset all configurations to their default values. This action cannot be undone.",
}) =>
    e
        ? _jsx("div", {
              className: "fixed inset-0 z-50 flex items-center justify-center p-4",
              style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
              onClick: (e) => {
                  e.target === e.currentTarget && s();
              },
              children: _jsxs("div", {
                  className:
                      "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all",
                  style: { animation: "modalFadeIn 0.2s ease-out" },
                  children: [
                      _jsxs("div", {
                          className: "relative",
                          children: [
                              _jsx("div", {
                                  className: "h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
                                  style: { borderRadius: "0 0 50% 50% / 0 0 30px 30px" },
                              }),
                              _jsx("button", {
                                  onClick: s,
                                  className:
                                      "absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-800/20 hover:bg-white dark:bg-gray-800/30 transition-colors",
                                  children: _jsx("svg", {
                                      className: "w-5 h-5 text-gray-500 dark:text-white",
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
                                          "w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-950/30 flex items-center justify-center",
                                      children: _jsx("svg", {
                                          className: "w-9 h-9 text-blue-600 dark:text-white",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          strokeWidth: 2,
                                          children: _jsx("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      _jsxs("div", {
                          className: "px-6 pt-12 pb-6 text-center",
                          children: [
                              _jsx("h3", { className: "text-xl font-bold text-gray-900 dark:text-gray-100 mb-3", children: a }),
                              _jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6", children: r }),
                              _jsxs("div", {
                                  className: "flex flex-col gap-3",
                                  children: [
                                      _jsx("button", {
                                          onClick: t,
                                          className:
                                              "w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors shadow-md dark:shadow-gray-950/20 hover:shadow-lg dark:shadow-gray-950/30",
                                          children: "Yes, Reset Tool",
                                      }),
                                      _jsx("button", {
                                          onClick: s,
                                          className:
                                              "w-full py-2.5 px-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 font-medium transition-colors",
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
          })
        : null;
