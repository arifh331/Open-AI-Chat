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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TypingAnimation */ \"./src/components/TypingAnimation.jsx\");\n\nvar _s = $RefreshSig$();\n\n//import styles from './page.module.css'\n\n\n\nfunction Home() {\n    _s();\n    //THis is the user input value\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    //This is the converstation history. Starts as empty array \n    const [chatLog, setChatLog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    //Waiting for api response\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    //function to handle when the user submits a message \n    const handleSubmit = (event)=>{\n        //we don't want the page to default\n        event.preventDefault();\n        //adding new chatlong into\n        setChatLog((prevChatLog)=>[\n                ...prevChatLog,\n                {\n                    type: \"user\",\n                    message: inputValue\n                }\n            ]);\n        //So whenever userclicks on submit it calls it \n        sendMessage(inputValue);\n        //Clear out for new message \n        setInputValue(\"\");\n    };\n    //this is the api call information\n    const sendMessage = (message)=>{\n        const url = \"/api/chat\";\n        // const headers = {\n        //   'Content-type': 'application/json',\n        //   'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_KEY}`\n        // }\n        const data = {\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    \"role\": \"user\",\n                    \"content\": message\n                }\n            ]\n        };\n        setIsLoading(true);\n        //over here going into the other file to make the api call\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(url, data).then((response)=>{\n            console.log(response);\n            //We are using setchatlog to take the previous chat and adding to it from the response \n            setChatLog((prevChatLog)=>[\n                    ...prevChatLog,\n                    {\n                        type: \"bot\",\n                        message: response.data.choices[0].message.content\n                    }\n                ]);\n            setIsLoading(false);\n        }).catch((error)=>{\n            setIsLoading(false);\n            console.log(error);\n        });\n    };\n    return(//taking out the styling because it's breaking the app\n    //className='container mx-auto max-w-[700px]'>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl\",\n                    children: \"Chat with A.I\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-grow p-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            //This is the chatlog and we are displaying all the messages one after the other\n                            chatLog.map((message, index)=>//div for the chat bubbles and where they would be placed if they are user or ai\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex \".concat(message.type === \"user\" ? \"justify-end\" : \"justify-start\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat(message.type === \"user\" ? \"bg-blue-700\" : \"bg-red-400\", \" rounded-lg p-4 text-white max-w-sm\"),\n                                        children: message.message\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 11\n                                    }, this)\n                                }, \"index\", false, {\n                                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 9\n                                }, this)),\n                            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-start\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-red-400 rounded-lg p-4 text-white max-w-sm\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 10\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 9\n                                }, this)\n                            }, chatLog.length, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 100,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 78,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"flex-none p-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex rounded-lg border border-gray-700 bg-gray-800\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"flex-grow px-4 py-2 bg-transparent text-white focus:outline:none\",\n                                placeholder: \"Please type your message here...\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 117,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300 ml-2\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 121,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 114,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 113,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this));\n}\n_s(Home, \"dR31odR98Szj8uuTMrZbEeaBRaM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPOUIsTUFBSztnQ0FBU2tCLFdBQVU7MENBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVAsQ0FBQztHQTNIdUI3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbi8vaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcydcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVHlwaW5nQW5pbWF0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9UeXBpbmdBbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIC8vVEhpcyBpcyB0aGUgdXNlciBpbnB1dCB2YWx1ZVxuICBjb25zdCBbaW5wdXRWYWx1ZSxzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgXG5cbiAgLy9UaGlzIGlzIHRoZSBjb252ZXJzdGF0aW9uIGhpc3RvcnkuIFN0YXJ0cyBhcyBlbXB0eSBhcnJheSBcbiAgY29uc3QgW2NoYXRMb2csc2V0Q2hhdExvZ109IHVzZVN0YXRlKFtdKVxuICBcbiAgLy9XYWl0aW5nIGZvciBhcGkgcmVzcG9uc2VcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW4gdGhlIHVzZXIgc3VibWl0cyBhIG1lc3NhZ2UgXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCk9PntcblxuICAgIC8vd2UgZG9uJ3Qgd2FudCB0aGUgcGFnZSB0byBkZWZhdWx0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIFxuICAgIC8vYWRkaW5nIG5ldyBjaGF0bG9uZyBpbnRvXG4gICAgc2V0Q2hhdExvZygocHJldkNoYXRMb2cpPT5bLi4ucHJldkNoYXRMb2csIHt0eXBlOid1c2VyJyxtZXNzYWdlOmlucHV0VmFsdWV9XSlcbiAgICBcbiAgICAvL1NvIHdoZW5ldmVyIHVzZXJjbGlja3Mgb24gc3VibWl0IGl0IGNhbGxzIGl0IFxuICAgIHNlbmRNZXNzYWdlKGlucHV0VmFsdWUpXG5cbiAgICAvL0NsZWFyIG91dCBmb3IgbmV3IG1lc3NhZ2UgXG4gICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG5cbiAgfVxuICBcbiAgLy90aGlzIGlzIHRoZSBhcGkgY2FsbCBpbmZvcm1hdGlvblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChtZXNzYWdlKSA9PntcbiAgICBjb25zdCB1cmwgPSBgL2FwaS9jaGF0YFxuXG4gICAgLy8gY29uc3QgaGVhZGVycyA9IHtcbiAgICAvLyAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOX0FQSV9LRVl9YFxuICAgIC8vIH1cblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBtb2RlbDogJ2dwdC0zLjUtdHVyYm8nLFxuICAgICAgbWVzc2FnZXM6IFt7XCJyb2xlXCI6XCJ1c2VyXCIsXCJjb250ZW50XCI6bWVzc2FnZX1dXG4gICAgfVxuXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgLy9vdmVyIGhlcmUgZ29pbmcgaW50byB0aGUgb3RoZXIgZmlsZSB0byBtYWtlIHRoZSBhcGkgY2FsbFxuICAgIGF4aW9zLnBvc3QodXJsLGRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgICAvL1dlIGFyZSB1c2luZyBzZXRjaGF0bG9nIHRvIHRha2UgdGhlIHByZXZpb3VzIGNoYXQgYW5kIGFkZGluZyB0byBpdCBmcm9tIHRoZSByZXNwb25zZSBcbiAgICBzZXRDaGF0TG9nKChwcmV2Q2hhdExvZyk9PlsuLi5wcmV2Q2hhdExvZywge3R5cGU6J2JvdCcsbWVzc2FnZTpyZXNwb25zZS5kYXRhLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50fV0pXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH0pLmNhdGNoKChlcnJvcik9PntcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG5cbiAgfVxuXG5cblxuICByZXR1cm4gKFxuICAgIC8vdGFraW5nIG91dCB0aGUgc3R5bGluZyBiZWNhdXNlIGl0J3MgYnJlYWtpbmcgdGhlIGFwcFxuICAgIC8vY2xhc3NOYW1lPSdjb250YWluZXIgbXgtYXV0byBtYXgtdy1bNzAwcHhdJz5cbiAgICA8ZGl2ID5cbiAgICAgIHsvKiAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGJnLWdyYXktOTAwJyAqL31cbiAgICAgIDxkaXY+XG4gICAgPGgxIGNsYXNzTmFtZT0nYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLXB1cnBsZS01MDAgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgdGV4dC1jZW50ZXIgcHktMyBmb250LWJvbGQgdGV4dC02eGwnPlxuICAgICAgQ2hhdCB3aXRoIEEuSVxuICAgIDwvaDE+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1ncm93IHAtNic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTQnPlxuXG4gICAgICB7IFxuICAgICAgLy9UaGlzIGlzIHRoZSBjaGF0bG9nIGFuZCB3ZSBhcmUgZGlzcGxheWluZyBhbGwgdGhlIG1lc3NhZ2VzIG9uZSBhZnRlciB0aGUgb3RoZXJcbiAgICAgIGNoYXRMb2cubWFwKChtZXNzYWdlLGluZGV4KT0+KFxuXG4gICAgICAgIC8vZGl2IGZvciB0aGUgY2hhdCBidWJibGVzIGFuZCB3aGVyZSB0aGV5IHdvdWxkIGJlIHBsYWNlZCBpZiB0aGV5IGFyZSB1c2VyIG9yIGFpXG4gICAgICAgIDxkaXYga2V5PSdpbmRleCcgY2xhc3NOYW1lPXtgZmxleCAke21lc3NhZ2UudHlwZSA9PT0gJ3VzZXInID8gJ2p1c3RpZnktZW5kJzogJ2p1c3RpZnktc3RhcnQnfWB9PlxuXG4gICAgICAgICAgey8qIFRoaXMgdGhlIGRpdiBkZWNpZGluZyB0aGUgYWN0dWFsIG1lc3NhZ2VzIGluc2lkZSB0aGUgY2hhdCwgdGhlaXIgc3R5bGVzIGRlcGVuZGluZyBvbiBpZiB0aGVpciB1c2VyIG9yIEFJICAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bWVzc2FnZS50eXBlID09PSAndXNlcicgPyAnYmctYmx1ZS03MDAnIDogJ2JnLXJlZC00MDAnfSByb3VuZGVkLWxnIHAtNCB0ZXh0LXdoaXRlIG1heC13LXNtYH0+IFxuICAgICAgICAgIHttZXNzYWdlLm1lc3NhZ2V9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICkpXG4gICAgfVxuICAgIHtcbiAgICAgIGlzTG9hZGluZyAmJiBcbiAgICAgIDxkaXYga2V5PXtjaGF0TG9nLmxlbmd0aH0gY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktc3RhcnQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctcmVkLTQwMCByb3VuZGVkLWxnIHAtNCB0ZXh0LXdoaXRlIG1heC13LXNtJz5cbiAgICAgICAgIDxUeXBpbmdBbmltYXRpb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICBcblxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nZmxleC1ub25lIHAtNic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS03MDAgYmctZ3JheS04MDAnPlxuXG4gICAgICBcbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBweC00IHB5LTIgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lOm5vbmUnIFxuICAgICAgcGxhY2Vob2xkZXI9J1BsZWFzZSB0eXBlIHlvdXIgbWVzc2FnZSBoZXJlLi4uJyB2YWx1ZT17aW5wdXRWYWx1ZX0gb25DaGFuZ2U9eyhlKT0+c2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XG5cblxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYmctcHVycGxlLTUwMCByb3VuZGVkLWxnIHB4LTQgcHktMiB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLXB1cnBsZS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIG1sLTInXG4gICAgICA+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcblxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlR5cGluZ0FuaW1hdGlvbiIsIkhvbWUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImNoYXRMb2ciLCJzZXRDaGF0TG9nIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZDaGF0TG9nIiwidHlwZSIsIm1lc3NhZ2UiLCJzZW5kTWVzc2FnZSIsInVybCIsImRhdGEiLCJtb2RlbCIsIm1lc3NhZ2VzIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjaG9pY2VzIiwiY29udGVudCIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4IiwibGVuZ3RoIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});