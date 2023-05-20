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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TypingAnimation */ \"./src/components/TypingAnimation.jsx\");\n\nvar _s = $RefreshSig$();\n\n//import styles from './page.module.css'\n\n\n\nfunction Home() {\n    _s();\n    //THis is the user input value\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    //This is the converstation history. Starts as empty array \n    const [chatLog, setChatLog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    //Waiting for api response\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    //function to handle when the user submits a message \n    const handleSubmit = (event)=>{\n        //we don't want the page to default\n        event.preventDefault();\n        //adding new chatlong into\n        setChatLog((prevChatLog)=>[\n                ...prevChatLog,\n                {\n                    type: \"user\",\n                    message: inputValue\n                }\n            ]);\n        //So whenever userclicks on submit it calls it \n        sendMessage(inputValue);\n        //Clear out for new message \n        setInputValue(\"\");\n    };\n    //this is the api call information\n    const sendMessage = (message)=>{\n        const url = \"/api/chat\";\n        // const headers = {\n        //   'Content-type': 'application/json',\n        //   'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_KEY}`\n        // }\n        const data = {\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    \"role\": \"user\",\n                    \"content\": message\n                }\n            ]\n        };\n        setIsLoading(true);\n        //over here going into the other file to make the api call\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(url, data).then((response)=>{\n            console.log(response);\n            //We are using setchatlog to take the previous chat and adding to it from the response \n            setChatLog((prevChatLog)=>[\n                    ...prevChatLog,\n                    {\n                        type: \"bot\",\n                        message: response.data.choices[0].message.content\n                    }\n                ]);\n            setIsLoading(false);\n        }).catch((error)=>{\n            setIsLoading(false);\n            console.log(error);\n        });\n    };\n    return(//taking out the styling because it's \n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto max-w-[700px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col h-screen bg-gray-900\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl\",\n                    children: \"Chat with A.I\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 72,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-grow p-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            //This is the chatlog and we are displaying all the messages one after the other\n                            chatLog.map((message, index)=>//div for the chat bubbles and where they would be placed if they are user or ai\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex \".concat(message.type === \"user\" ? \"justify-end\" : \"justify-start\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat(message.type === \"user\" ? \"bg-blue-700\" : \"bg-red-400\", \" rounded-lg p-4 text-white max-w-sm\"),\n                                        children: message.message\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 11\n                                    }, this)\n                                }, \"index\", false, {\n                                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 9\n                                }, this)),\n                            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-start\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-red-400 rounded-lg p-4 text-white max-w-sm\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 10\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 9\n                                }, this)\n                            }, chatLog.length, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 98,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 76,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"flex-none p-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex rounded-lg border border-gray-700 bg-gray-800\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"flex-grow px-4 py-2 bg-transparent text-white focus:outline:none\",\n                                placeholder: \"Please type your message here...\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 115,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300 ml-2\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 119,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 112,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 111,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this));\n}\n_s(Home, \"dR31odR98Szj8uuTMrZbEeaBRaM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDSTtnQ0FBTzlCLE1BQUs7Z0NBQVNpQixXQUFVOzBDQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFQLENBQUM7R0F6SHVCNUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFR5cGluZ0FuaW1hdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvVHlwaW5nQW5pbWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAvL1RIaXMgaXMgdGhlIHVzZXIgaW5wdXQgdmFsdWVcbiAgY29uc3QgW2lucHV0VmFsdWUsc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuXG4gIC8vVGhpcyBpcyB0aGUgY29udmVyc3RhdGlvbiBoaXN0b3J5LiBTdGFydHMgYXMgZW1wdHkgYXJyYXkgXG4gIGNvbnN0IFtjaGF0TG9nLHNldENoYXRMb2ddPSB1c2VTdGF0ZShbXSlcbiAgXG4gIC8vV2FpdGluZyBmb3IgYXBpIHJlc3BvbnNlXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvL2Z1bmN0aW9uIHRvIGhhbmRsZSB3aGVuIHRoZSB1c2VyIHN1Ym1pdHMgYSBtZXNzYWdlIFxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpPT57XG5cbiAgICAvL3dlIGRvbid0IHdhbnQgdGhlIHBhZ2UgdG8gZGVmYXVsdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBcbiAgICAvL2FkZGluZyBuZXcgY2hhdGxvbmcgaW50b1xuICAgIHNldENoYXRMb2coKHByZXZDaGF0TG9nKT0+Wy4uLnByZXZDaGF0TG9nLCB7dHlwZTondXNlcicsbWVzc2FnZTppbnB1dFZhbHVlfV0pXG4gICAgXG4gICAgLy9TbyB3aGVuZXZlciB1c2VyY2xpY2tzIG9uIHN1Ym1pdCBpdCBjYWxscyBpdCBcbiAgICBzZW5kTWVzc2FnZShpbnB1dFZhbHVlKVxuXG4gICAgLy9DbGVhciBvdXQgZm9yIG5ldyBtZXNzYWdlIFxuICAgIHNldElucHV0VmFsdWUoJycpO1xuXG4gIH1cbiAgXG4gIC8vdGhpcyBpcyB0aGUgYXBpIGNhbGwgaW5mb3JtYXRpb25cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT57XG4gICAgY29uc3QgdXJsID0gYC9hcGkvY2hhdGBcblxuICAgIC8vIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgLy8gICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIC8vICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1BFTl9BUElfS0VZfWBcbiAgICAvLyB9XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbW9kZWw6ICdncHQtMy41LXR1cmJvJyxcbiAgICAgIG1lc3NhZ2VzOiBbe1wicm9sZVwiOlwidXNlclwiLFwiY29udGVudFwiOm1lc3NhZ2V9XVxuICAgIH1cblxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIC8vb3ZlciBoZXJlIGdvaW5nIGludG8gdGhlIG90aGVyIGZpbGUgdG8gbWFrZSB0aGUgYXBpIGNhbGxcbiAgICBheGlvcy5wb3N0KHVybCxkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXG4gICAgLy9XZSBhcmUgdXNpbmcgc2V0Y2hhdGxvZyB0byB0YWtlIHRoZSBwcmV2aW91cyBjaGF0IGFuZCBhZGRpbmcgdG8gaXQgZnJvbSB0aGUgcmVzcG9uc2UgXG4gICAgc2V0Q2hhdExvZygocHJldkNoYXRMb2cpPT5bLi4ucHJldkNoYXRMb2csIHt0eXBlOidib3QnLG1lc3NhZ2U6cmVzcG9uc2UuZGF0YS5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudH1dKVxuICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpPT57XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuXG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiAgICAvL3Rha2luZyBvdXQgdGhlIHN0eWxpbmcgYmVjYXVzZSBpdCdzIFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbXgtYXV0byBtYXgtdy1bNzAwcHhdJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGJnLWdyYXktOTAwJz5cbiAgICA8aDEgY2xhc3NOYW1lPSdiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdG8tcHVycGxlLTUwMCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCB0ZXh0LWNlbnRlciBweS0zIGZvbnQtYm9sZCB0ZXh0LTZ4bCc+XG4gICAgICBDaGF0IHdpdGggQS5JXG4gICAgPC9oMT5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cgcC02Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktNCc+XG5cbiAgICAgIHsgXG4gICAgICAvL1RoaXMgaXMgdGhlIGNoYXRsb2cgYW5kIHdlIGFyZSBkaXNwbGF5aW5nIGFsbCB0aGUgbWVzc2FnZXMgb25lIGFmdGVyIHRoZSBvdGhlclxuICAgICAgY2hhdExvZy5tYXAoKG1lc3NhZ2UsaW5kZXgpPT4oXG5cbiAgICAgICAgLy9kaXYgZm9yIHRoZSBjaGF0IGJ1YmJsZXMgYW5kIHdoZXJlIHRoZXkgd291bGQgYmUgcGxhY2VkIGlmIHRoZXkgYXJlIHVzZXIgb3IgYWlcbiAgICAgICAgPGRpdiBrZXk9J2luZGV4JyBjbGFzc05hbWU9e2BmbGV4ICR7bWVzc2FnZS50eXBlID09PSAndXNlcicgPyAnanVzdGlmeS1lbmQnOiAnanVzdGlmeS1zdGFydCd9YH0+XG5cbiAgICAgICAgICB7LyogVGhpcyB0aGUgZGl2IGRlY2lkaW5nIHRoZSBhY3R1YWwgbWVzc2FnZXMgaW5zaWRlIHRoZSBjaGF0LCB0aGVpciBzdHlsZXMgZGVwZW5kaW5nIG9uIGlmIHRoZWlyIHVzZXIgb3IgQUkgICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHttZXNzYWdlLnR5cGUgPT09ICd1c2VyJyA/ICdiZy1ibHVlLTcwMCcgOiAnYmctcmVkLTQwMCd9IHJvdW5kZWQtbGcgcC00IHRleHQtd2hpdGUgbWF4LXctc21gfT4gXG4gICAgICAgICAge21lc3NhZ2UubWVzc2FnZX1cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKSlcbiAgICB9XG4gICAge1xuICAgICAgaXNMb2FkaW5nICYmIFxuICAgICAgPGRpdiBrZXk9e2NoYXRMb2cubGVuZ3RofSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1zdGFydCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1yZWQtNDAwIHJvdW5kZWQtbGcgcC00IHRleHQtd2hpdGUgbWF4LXctc20nPlxuICAgICAgICAgPFR5cGluZ0FuaW1hdGlvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIFxuXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPSdmbGV4LW5vbmUgcC02Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCBiZy1ncmF5LTgwMCc+XG5cbiAgICAgIFxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nZmxleC1ncm93IHB4LTQgcHktMiBiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmU6bm9uZScgXG4gICAgICBwbGFjZWhvbGRlcj0nUGxlYXNlIHR5cGUgeW91ciBtZXNzYWdlIGhlcmUuLi4nIHZhbHVlPXtpbnB1dFZhbHVlfSBvbkNoYW5nZT17KGUpPT5zZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gLz5cblxuXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdiZy1wdXJwbGUtNTAwIHJvdW5kZWQtbGcgcHgtNCBweS0yIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctcHVycGxlLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgbWwtMidcbiAgICAgID5TZW5kPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxuXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiVHlwaW5nQW5pbWF0aW9uIiwiSG9tZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiY2hhdExvZyIsInNldENoYXRMb2ciLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJldkNoYXRMb2ciLCJ0eXBlIiwibWVzc2FnZSIsInNlbmRNZXNzYWdlIiwidXJsIiwiZGF0YSIsIm1vZGVsIiwibWVzc2FnZXMiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNob2ljZXMiLCJjb250ZW50IiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});