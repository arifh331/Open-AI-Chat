"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TypingAnimation */ \"./src/components/TypingAnimation.jsx\");\n\nvar _s = $RefreshSig$();\n\n//import styles from './page.module.css'\n\n\n\nfunction Home() {\n    _s();\n    //THis is the user input value\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    //This is the converstation history. Starts as empty array \n    const [chatLog, setChatLog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    //Waiting for api response\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    //function to handle when the user submits a message \n    const handleSubmit = (event)=>{\n        //we don't want the page to default\n        event.preventDefault();\n        //adding new chatlong into\n        setChatLog((prevChatLog)=>[\n                ...prevChatLog,\n                {\n                    type: \"user\",\n                    message: inputValue\n                }\n            ]);\n        //So whenever userclicks on submit it calls it \n        sendMessage(inputValue);\n        //Clear out for new message \n        setInputValue(\"\");\n    };\n    //this is the api call information\n    const sendMessage = (message)=>{\n        const url = \"\\n    https://api.openai.com/v1/chat/completions\";\n        const headers = {\n            \"Content-type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(\"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\")\n        };\n        const data = {\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    \"role\": \"user\",\n                    \"content\": message\n                }\n            ]\n        };\n        setIsLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(url, data, {\n            headers: headers\n        }).then((response)=>{\n            console.log(response);\n            //We are using setchatlog to take the previous chat and adding to it from the response \n            setChatLog((prevChatLog)=>[\n                    ...prevChatLog,\n                    {\n                        type: \"bot\",\n                        message: response.data.choices[0].message.content\n                    }\n                ]);\n            setIsLoading(false);\n        }).catch((error)=>{\n            setIsLoading(false);\n            console.log(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto max-w- 700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col h-screen bg-gray-900\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl\",\n                    children: \"Chat with A.I\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 70,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-grow p-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            //This is the chatlog and we are displaying all the messages one after the other\n                            chatLog.map((message, index)=>//div for the chat bubbles and where they would be placed if they are user or ai\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex \".concat(message.type === \"user\" ? \"justify-end\" : \"justify-start\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat(message.type === \"user\" ? \"bg-blue-700\" : \"bg-red-400\", \" rounded-lg p-4 text-white max-w-sm\"),\n                                        children: message.message\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 11\n                                    }, this)\n                                }, \"index\", false, {\n                                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 9\n                                }, this)),\n                            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-start\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-red-400 rounded-lg p-4 text-white max-w-sm\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 9\n                                }, this)\n                            }, chatLog.length, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 96,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"flex-none p-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex rounded-lg border border-gray-700 bg-gray-800\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"flex-grow px-4 py-2 bg-transparent text-white focus:outline:none\",\n                                placeholder: \"Please type your message here...\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 113,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 117,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 110,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 109,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dR31odR98Szj8uuTMrZbEeaBRaM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQU9sQyxNQUFLO2dDQUFTcUIsV0FBVTswQ0FDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRUCxDQUFDO0dBdkh1QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuLy9pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBUeXBpbmdBbmltYXRpb24gZnJvbSAnQC9jb21wb25lbnRzL1R5cGluZ0FuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgLy9USGlzIGlzIHRoZSB1c2VyIGlucHV0IHZhbHVlXG4gIGNvbnN0IFtpbnB1dFZhbHVlLHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBcblxuICAvL1RoaXMgaXMgdGhlIGNvbnZlcnN0YXRpb24gaGlzdG9yeS4gU3RhcnRzIGFzIGVtcHR5IGFycmF5IFxuICBjb25zdCBbY2hhdExvZyxzZXRDaGF0TG9nXT0gdXNlU3RhdGUoW10pXG4gIFxuICAvL1dhaXRpbmcgZm9yIGFwaSByZXNwb25zZVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgLy9mdW5jdGlvbiB0byBoYW5kbGUgd2hlbiB0aGUgdXNlciBzdWJtaXRzIGEgbWVzc2FnZSBcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KT0+e1xuXG4gICAgLy93ZSBkb24ndCB3YW50IHRoZSBwYWdlIHRvIGRlZmF1bHRcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgLy9hZGRpbmcgbmV3IGNoYXRsb25nIGludG9cbiAgICBzZXRDaGF0TG9nKChwcmV2Q2hhdExvZyk9PlsuLi5wcmV2Q2hhdExvZywge3R5cGU6J3VzZXInLG1lc3NhZ2U6aW5wdXRWYWx1ZX1dKVxuICAgIFxuICAgIC8vU28gd2hlbmV2ZXIgdXNlcmNsaWNrcyBvbiBzdWJtaXQgaXQgY2FsbHMgaXQgXG4gICAgc2VuZE1lc3NhZ2UoaW5wdXRWYWx1ZSlcblxuICAgIC8vQ2xlYXIgb3V0IGZvciBuZXcgbWVzc2FnZSBcbiAgICBzZXRJbnB1dFZhbHVlKCcnKTtcblxuICB9XG4gIFxuICAvL3RoaXMgaXMgdGhlIGFwaSBjYWxsIGluZm9ybWF0aW9uXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2UpID0+e1xuICAgIGNvbnN0IHVybCA9IGBcbiAgICBodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNgXG5cbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09QRU5fQVBJX0tFWX1gXG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG1vZGVsOiAnZ3B0LTMuNS10dXJibycsXG4gICAgICBtZXNzYWdlczogW3tcInJvbGVcIjpcInVzZXJcIixcImNvbnRlbnRcIjptZXNzYWdlfV1cbiAgICB9XG5cbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgYXhpb3MucG9zdCh1cmwsZGF0YSx7IGhlYWRlcnM6IGhlYWRlcnMgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcblxuICAgIC8vV2UgYXJlIHVzaW5nIHNldGNoYXRsb2cgdG8gdGFrZSB0aGUgcHJldmlvdXMgY2hhdCBhbmQgYWRkaW5nIHRvIGl0IGZyb20gdGhlIHJlc3BvbnNlIFxuICAgIHNldENoYXRMb2coKHByZXZDaGF0TG9nKT0+Wy4uLnByZXZDaGF0TG9nLCB7dHlwZTonYm90JyxtZXNzYWdlOnJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnR9XSlcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfSkuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcblxuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIG1heC13LSA3MDAnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaC1zY3JlZW4gYmctZ3JheS05MDAnPlxuICAgIDxoMSBjbGFzc05hbWU9J2JnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB0by1wdXJwbGUtNTAwIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IHRleHQtY2VudGVyIHB5LTMgZm9udC1ib2xkIHRleHQtNnhsJz5cbiAgICAgIENoYXQgd2l0aCBBLklcbiAgICA8L2gxPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBwLTYnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS00Jz5cblxuICAgICAgeyBcbiAgICAgIC8vVGhpcyBpcyB0aGUgY2hhdGxvZyBhbmQgd2UgYXJlIGRpc3BsYXlpbmcgYWxsIHRoZSBtZXNzYWdlcyBvbmUgYWZ0ZXIgdGhlIG90aGVyXG4gICAgICBjaGF0TG9nLm1hcCgobWVzc2FnZSxpbmRleCk9PihcblxuICAgICAgICAvL2RpdiBmb3IgdGhlIGNoYXQgYnViYmxlcyBhbmQgd2hlcmUgdGhleSB3b3VsZCBiZSBwbGFjZWQgaWYgdGhleSBhcmUgdXNlciBvciBhaVxuICAgICAgICA8ZGl2IGtleT0naW5kZXgnIGNsYXNzTmFtZT17YGZsZXggJHttZXNzYWdlLnR5cGUgPT09ICd1c2VyJyA/ICdqdXN0aWZ5LWVuZCc6ICdqdXN0aWZ5LXN0YXJ0J31gfT5cblxuICAgICAgICAgIHsvKiBUaGlzIHRoZSBkaXYgZGVjaWRpbmcgdGhlIGFjdHVhbCBtZXNzYWdlcyBpbnNpZGUgdGhlIGNoYXQsIHRoZWlyIHN0eWxlcyBkZXBlbmRpbmcgb24gaWYgdGhlaXIgdXNlciBvciBBSSAgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake21lc3NhZ2UudHlwZSA9PT0gJ3VzZXInID8gJ2JnLWJsdWUtNzAwJyA6ICdiZy1yZWQtNDAwJ30gcm91bmRlZC1sZyBwLTQgdGV4dC13aGl0ZSBtYXgtdy1zbWB9PiBcbiAgICAgICAgICB7bWVzc2FnZS5tZXNzYWdlfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApKVxuICAgIH1cbiAgICB7XG4gICAgICBpc0xvYWRpbmcgJiYgXG4gICAgICA8ZGl2IGtleT17Y2hhdExvZy5sZW5ndGh9IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LXN0YXJ0Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXJlZC00MDAgcm91bmRlZC1sZyBwLTQgdGV4dC13aGl0ZSBtYXgtdy1zbSc+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICBcblxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nZmxleC1ub25lIHAtNic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS03MDAgYmctZ3JheS04MDAnPlxuXG4gICAgICBcbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBweC00IHB5LTIgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lOm5vbmUnIFxuICAgICAgcGxhY2Vob2xkZXI9J1BsZWFzZSB0eXBlIHlvdXIgbWVzc2FnZSBoZXJlLi4uJyB2YWx1ZT17aW5wdXRWYWx1ZX0gb25DaGFuZ2U9eyhlKT0+c2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XG5cblxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYmctcHVycGxlLTUwMCByb3VuZGVkLWxnIHB4LTQgcHktMiB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLXB1cnBsZS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwJ1xuICAgICAgPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG5cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJUeXBpbmdBbmltYXRpb24iLCJIb21lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjaGF0TG9nIiwic2V0Q2hhdExvZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcmV2Q2hhdExvZyIsInR5cGUiLCJtZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJ1cmwiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX09QRU5fQVBJX0tFWSIsImRhdGEiLCJtb2RlbCIsIm1lc3NhZ2VzIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjaG9pY2VzIiwiY29udGVudCIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImluZGV4IiwibGVuZ3RoIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});