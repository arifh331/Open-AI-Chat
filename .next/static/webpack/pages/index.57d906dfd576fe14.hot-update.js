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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n//import styles from './page.module.css'\n\n\nfunction Home() {\n    _s();\n    //THis is the user input value\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    //This is the converstation history. Starts as empty array \n    const [chatLog, setChatLog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    //Waiting for api response\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    //function to handle when the user submits a message \n    const handleSubmit = (event)=>{\n        //we don't want the page to default\n        event.preventDefault();\n        //adding new chatlong into\n        setChatLog((prevChatLog)=>[\n                ...prevChatLog,\n                {\n                    type: \"user\",\n                    message: inputValue\n                }\n            ]);\n        //So whenever userclicks on submit it calls it \n        sendMessage(inputValue);\n        //Clear out for new message \n        setInputValue(\"\");\n    };\n    //this is the api call information\n    const sendMessage = (message)=>{\n        const url = \"\\n    https://api.openai.com/v1/chat/completions\";\n        const headers = {\n            \"Content-type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(\"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\")\n        };\n        const data = {\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    \"role\": \"user\",\n                    \"content\": message\n                }\n            ]\n        };\n        setIsLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(url, data, {\n            headers: headers\n        }).then((response)=>{\n            console.log(response);\n            //We are using setchatlog to take the previous chat and adding to it from the response \n            setChatLog((prevChatLog)=>[\n                    ...prevChatLog,\n                    {\n                        type: \"bot\",\n                        message: response.data.choices[0].message.content\n                    }\n                ]);\n            setIsLoading(false);\n        }).catch((error)=>{\n            setIsLoading(false);\n            console.log(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto max-w- 700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col h-screen bg-gray-900\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl\",\n                    children: \"Chat with A.I\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 69,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-grow p-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: //This is the chatlog and we are displaying all the messages one after the other\n                        chatLog.map((message, index)=>//div for the chat bubbles and where they would be placed if they are user or ai\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex \".concat(message.type === \"user\" ? \"justify-end\" : \"justify-start\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\".concat(message.type === \"user\" ? \"bg-blue-700\" : \"bg-red-400\", \" rounded-lg p-4 text-white max-w-sm\"),\n                                    children: message.message\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 11\n                                }, this)\n                            }, \"index\", false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 81,\n                                columnNumber: 9\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"flex-none p-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex rounded-lg border border-gray-700 bg-gray-800\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"flex-grow px-4 py-2 bg-transparent text-white\",\n                                placeholder: \"Please type your message here...\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 104,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 105,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 101,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 100,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dR31odR98Szj8uuTMrZbEeaBRaM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIC8vVEhpcyBpcyB0aGUgdXNlciBpbnB1dCB2YWx1ZVxuICBjb25zdCBbaW5wdXRWYWx1ZSxzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgXG5cbiAgLy9UaGlzIGlzIHRoZSBjb252ZXJzdGF0aW9uIGhpc3RvcnkuIFN0YXJ0cyBhcyBlbXB0eSBhcnJheSBcbiAgY29uc3QgW2NoYXRMb2csc2V0Q2hhdExvZ109IHVzZVN0YXRlKFtdKVxuICBcbiAgLy9XYWl0aW5nIGZvciBhcGkgcmVzcG9uc2VcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW4gdGhlIHVzZXIgc3VibWl0cyBhIG1lc3NhZ2UgXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCk9PntcblxuICAgIC8vd2UgZG9uJ3Qgd2FudCB0aGUgcGFnZSB0byBkZWZhdWx0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIFxuICAgIC8vYWRkaW5nIG5ldyBjaGF0bG9uZyBpbnRvXG4gICAgc2V0Q2hhdExvZygocHJldkNoYXRMb2cpPT5bLi4ucHJldkNoYXRMb2csIHt0eXBlOid1c2VyJyxtZXNzYWdlOmlucHV0VmFsdWV9XSlcbiAgICBcbiAgICAvL1NvIHdoZW5ldmVyIHVzZXJjbGlja3Mgb24gc3VibWl0IGl0IGNhbGxzIGl0IFxuICAgIHNlbmRNZXNzYWdlKGlucHV0VmFsdWUpXG5cbiAgICAvL0NsZWFyIG91dCBmb3IgbmV3IG1lc3NhZ2UgXG4gICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG5cbiAgfVxuICBcbiAgLy90aGlzIGlzIHRoZSBhcGkgY2FsbCBpbmZvcm1hdGlvblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChtZXNzYWdlKSA9PntcbiAgICBjb25zdCB1cmwgPSBgXG4gICAgaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zYFxuXG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOX0FQSV9LRVl9YFxuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBtb2RlbDogJ2dwdC0zLjUtdHVyYm8nLFxuICAgICAgbWVzc2FnZXM6IFt7XCJyb2xlXCI6XCJ1c2VyXCIsXCJjb250ZW50XCI6bWVzc2FnZX1dXG4gICAgfVxuXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGF4aW9zLnBvc3QodXJsLGRhdGEseyBoZWFkZXJzOiBoZWFkZXJzIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgICAvL1dlIGFyZSB1c2luZyBzZXRjaGF0bG9nIHRvIHRha2UgdGhlIHByZXZpb3VzIGNoYXQgYW5kIGFkZGluZyB0byBpdCBmcm9tIHRoZSByZXNwb25zZSBcbiAgICBzZXRDaGF0TG9nKChwcmV2Q2hhdExvZyk9PlsuLi5wcmV2Q2hhdExvZywge3R5cGU6J2JvdCcsbWVzc2FnZTpyZXNwb25zZS5kYXRhLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50fV0pXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH0pLmNhdGNoKChlcnJvcik9PntcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG5cbiAgfVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbXgtYXV0byBtYXgtdy0gNzAwJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGJnLWdyYXktOTAwJz5cbiAgICA8aDEgY2xhc3NOYW1lPSdiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdG8tcHVycGxlLTUwMCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCB0ZXh0LWNlbnRlciBweS0zIGZvbnQtYm9sZCB0ZXh0LTZ4bCc+XG4gICAgICBDaGF0IHdpdGggQS5JXG4gICAgPC9oMT5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cgcC02Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktNCc+XG5cbiAgICAgIHsgXG4gICAgICAvL1RoaXMgaXMgdGhlIGNoYXRsb2cgYW5kIHdlIGFyZSBkaXNwbGF5aW5nIGFsbCB0aGUgbWVzc2FnZXMgb25lIGFmdGVyIHRoZSBvdGhlclxuICAgICAgY2hhdExvZy5tYXAoKG1lc3NhZ2UsaW5kZXgpPT4oXG5cbiAgICAgICAgLy9kaXYgZm9yIHRoZSBjaGF0IGJ1YmJsZXMgYW5kIHdoZXJlIHRoZXkgd291bGQgYmUgcGxhY2VkIGlmIHRoZXkgYXJlIHVzZXIgb3IgYWlcbiAgICAgICAgPGRpdiBrZXk9J2luZGV4JyBjbGFzc05hbWU9e2BmbGV4ICR7bWVzc2FnZS50eXBlID09PSAndXNlcicgPyAnanVzdGlmeS1lbmQnOiAnanVzdGlmeS1zdGFydCd9YH0+XG5cbiAgICAgICAgICB7LyogVGhpcyB0aGUgZGl2IGRlY2lkaW5nIHRoZSBhY3R1YWwgbWVzc2FnZXMgaW5zaWRlIHRoZSBjaGF0LCB0aGVpciBzdHlsZXMgZGVwZW5kaW5nIG9uIGlmIHRoZWlyIHVzZXIgb3IgQUkgICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHttZXNzYWdlLnR5cGUgPT09ICd1c2VyJyA/ICdiZy1ibHVlLTcwMCcgOiAnYmctcmVkLTQwMCd9IHJvdW5kZWQtbGcgcC00IHRleHQtd2hpdGUgbWF4LXctc21gfT4gXG4gICAgICAgICAge21lc3NhZ2UubWVzc2FnZX1cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKSlcbiAgICB9XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICBcblxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nZmxleC1ub25lIHAtNic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS03MDAgYmctZ3JheS04MDAnPlxuXG4gICAgICBcbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBweC00IHB5LTIgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZScgcGxhY2Vob2xkZXI9J1BsZWFzZSB0eXBlIHlvdXIgbWVzc2FnZSBoZXJlLi4uJyB2YWx1ZT17aW5wdXRWYWx1ZX0gb25DaGFuZ2U9eyhlKT0+c2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcblxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkhvbWUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImNoYXRMb2ciLCJzZXRDaGF0TG9nIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZDaGF0TG9nIiwidHlwZSIsIm1lc3NhZ2UiLCJzZW5kTWVzc2FnZSIsInVybCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfT1BFTl9BUElfS0VZIiwiZGF0YSIsIm1vZGVsIiwibWVzc2FnZXMiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNob2ljZXMiLCJjb250ZW50IiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaW5kZXgiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});