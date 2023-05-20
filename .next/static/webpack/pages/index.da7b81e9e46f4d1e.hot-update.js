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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n//import styles from './page.module.css'\n\n\nfunction Home() {\n    _s();\n    //THis is the user input value\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    //This is the converstation history. Starts as empty array \n    const [chatLog, setChatLog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    //Waiting for api response\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    //function to handle when the user submits a message \n    const handleSubmit = (event)=>{\n        //we don't want the page to default\n        event.preventDefault();\n        //adding new chatlong into\n        setChatLog((prevChatLog)=>[\n                ...prevChatLog,\n                {\n                    type: \"user\",\n                    message: inputValue\n                }\n            ]);\n        //So whenever userclicks on submit it calls it \n        sendMessage(inputValue);\n        //Clear out for new message \n        setInputValue(\"\");\n    };\n    //this is the api call information\n    const sendMessage = (message)=>{\n        const url = \"\\n    https://api.openai.com/v1/chat/completions\";\n        const headers = {\n            \"Content-type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(\"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\")\n        };\n        const data = {\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    \"role\": \"user\",\n                    \"content\": message\n                }\n            ]\n        };\n        setIsLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(url, data, {\n            headers: headers\n        }).then((response)=>{\n            console.log(response);\n            //We are using setchatlog to take the previous chat and adding to it from the response \n            setChatLog((prevChatLog)=>[\n                    ...prevChatLog,\n                    {\n                        type: \"bot\",\n                        message: response.data.choices[0].message.content\n                    }\n                ]);\n            setIsLoading(false);\n        }).catch((error)=>{\n            setIsLoading(false);\n            console.log(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto max-w- 700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"ChatGPT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, this),\n            //This is the chatlog and we are displaying all the messages one after the other\n            chatLog.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: message.message\n                }, \"index\", false, {\n                    fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Please type your message here...\",\n                        value: inputValue,\n                        onChange: (e)=>setInputValue(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ah328\\\\Desktop\\\\dev\\\\chatgpt-2\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dR31odR98Szj8uuTMrZbEeaBRaM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUM5Qix3Q0FBd0M7QUFDQztBQUNoQjtBQUVWLFNBQVNJLE9BQU87O0lBRTdCLDhCQUE4QjtJQUM5QixNQUFNLENBQUNDLFlBQVdDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFHNUMsMkRBQTJEO0lBQzNELE1BQU0sQ0FBQ00sU0FBUUMsV0FBVyxHQUFFUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDLDBCQUEwQjtJQUMxQixNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUVoRCxxREFBcUQ7SUFDckQsTUFBTVUsZUFBZSxDQUFDQyxRQUFRO1FBRTVCLG1DQUFtQztRQUNuQ0EsTUFBTUMsY0FBYztRQUVwQiwwQkFBMEI7UUFDMUJMLFdBQVcsQ0FBQ00sY0FBYzttQkFBSUE7Z0JBQWE7b0JBQUNDLE1BQUs7b0JBQU9DLFNBQVFYO2dCQUFVO2FBQUU7UUFFNUUsK0NBQStDO1FBQy9DWSxZQUFZWjtRQUVaLDRCQUE0QjtRQUM1QkMsY0FBYztJQUVoQjtJQUVBLGtDQUFrQztJQUNsQyxNQUFNVyxjQUFjLENBQUNELFVBQVc7UUFDOUIsTUFBTUUsTUFBTztRQUdiLE1BQU1DLFVBQVU7WUFDZCxnQkFBZ0I7WUFDaEIsaUJBQWlCLFVBQStDLE9BQXJDQyxxREFBb0M7UUFDakU7UUFFQSxNQUFNRyxPQUFPO1lBQ1hDLE9BQU87WUFDUEMsVUFBVTtnQkFBQztvQkFBQyxRQUFPO29CQUFPLFdBQVVUO2dCQUFPO2FBQUU7UUFDL0M7UUFFQU4sYUFBYSxJQUFJO1FBQ2pCUCxrREFBVSxDQUFDZSxLQUFJSyxNQUFLO1lBQUVKLFNBQVNBO1FBQVEsR0FBR1EsSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDN0RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFFWix1RkFBdUY7WUFDdkZwQixXQUFXLENBQUNNLGNBQWM7dUJBQUlBO29CQUFhO3dCQUFDQyxNQUFLO3dCQUFNQyxTQUFRWSxTQUFTTCxJQUFJLENBQUNRLE9BQU8sQ0FBQyxFQUFFLENBQUNmLE9BQU8sQ0FBQ2dCLE9BQU87b0JBQUE7aUJBQUU7WUFDekd0QixhQUFhLEtBQUs7UUFDbEIsR0FBR3VCLEtBQUssQ0FBQyxDQUFDQyxRQUFRO1lBQ2hCeEIsYUFBYSxLQUFLO1lBQ2xCbUIsUUFBUUMsR0FBRyxDQUFDSTtRQUNkO0lBRUY7SUFJQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2YsOERBQUNDOzBCQUFHOzs7Ozs7WUFLRixnRkFBZ0Y7WUFDaEY5QixRQUFRK0IsR0FBRyxDQUFDLENBQUN0QixTQUFRdUIsc0JBQ25CLDhEQUFDSjs4QkFDRW5CLFFBQVFBLE9BQU87bUJBRFQ7Ozs7OzBCQU9iLDhEQUFDd0I7Z0JBQUtDLFVBQVU5Qjs7a0NBQ2QsOERBQUMrQjt3QkFBTTNCLE1BQUs7d0JBQU80QixhQUFZO3dCQUFtQ0MsT0FBT3ZDO3dCQUFZd0MsVUFBVSxDQUFDQyxJQUFJeEMsY0FBY3dDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUNoSSw4REFBQ0k7d0JBQU9qQyxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUIsQ0FBQztHQXBGdUJYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuLy9pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAvL1RIaXMgaXMgdGhlIHVzZXIgaW5wdXQgdmFsdWVcbiAgY29uc3QgW2lucHV0VmFsdWUsc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuXG4gIC8vVGhpcyBpcyB0aGUgY29udmVyc3RhdGlvbiBoaXN0b3J5LiBTdGFydHMgYXMgZW1wdHkgYXJyYXkgXG4gIGNvbnN0IFtjaGF0TG9nLHNldENoYXRMb2ddPSB1c2VTdGF0ZShbXSlcbiAgXG4gIC8vV2FpdGluZyBmb3IgYXBpIHJlc3BvbnNlXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvL2Z1bmN0aW9uIHRvIGhhbmRsZSB3aGVuIHRoZSB1c2VyIHN1Ym1pdHMgYSBtZXNzYWdlIFxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpPT57XG5cbiAgICAvL3dlIGRvbid0IHdhbnQgdGhlIHBhZ2UgdG8gZGVmYXVsdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBcbiAgICAvL2FkZGluZyBuZXcgY2hhdGxvbmcgaW50b1xuICAgIHNldENoYXRMb2coKHByZXZDaGF0TG9nKT0+Wy4uLnByZXZDaGF0TG9nLCB7dHlwZTondXNlcicsbWVzc2FnZTppbnB1dFZhbHVlfV0pXG4gICAgXG4gICAgLy9TbyB3aGVuZXZlciB1c2VyY2xpY2tzIG9uIHN1Ym1pdCBpdCBjYWxscyBpdCBcbiAgICBzZW5kTWVzc2FnZShpbnB1dFZhbHVlKVxuXG4gICAgLy9DbGVhciBvdXQgZm9yIG5ldyBtZXNzYWdlIFxuICAgIHNldElucHV0VmFsdWUoJycpO1xuXG4gIH1cbiAgXG4gIC8vdGhpcyBpcyB0aGUgYXBpIGNhbGwgaW5mb3JtYXRpb25cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT57XG4gICAgY29uc3QgdXJsID0gYFxuICAgIGh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9uc2BcblxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1BFTl9BUElfS0VZfWBcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbW9kZWw6ICdncHQtMy41LXR1cmJvJyxcbiAgICAgIG1lc3NhZ2VzOiBbe1wicm9sZVwiOlwidXNlclwiLFwiY29udGVudFwiOm1lc3NhZ2V9XVxuICAgIH1cblxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBheGlvcy5wb3N0KHVybCxkYXRhLHsgaGVhZGVyczogaGVhZGVycyB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXG4gICAgLy9XZSBhcmUgdXNpbmcgc2V0Y2hhdGxvZyB0byB0YWtlIHRoZSBwcmV2aW91cyBjaGF0IGFuZCBhZGRpbmcgdG8gaXQgZnJvbSB0aGUgcmVzcG9uc2UgXG4gICAgc2V0Q2hhdExvZygocHJldkNoYXRMb2cpPT5bLi4ucHJldkNoYXRMb2csIHt0eXBlOidib3QnLG1lc3NhZ2U6cmVzcG9uc2UuZGF0YS5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudH1dKVxuICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpPT57XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuXG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8gbWF4LXctIDcwMCc+XG4gICAgPGgxPlxuICAgICAgQ2hhdEdQVFxuICAgIDwvaDE+XG5cbiAgICB7IFxuICAgICAgLy9UaGlzIGlzIHRoZSBjaGF0bG9nIGFuZCB3ZSBhcmUgZGlzcGxheWluZyBhbGwgdGhlIG1lc3NhZ2VzIG9uZSBhZnRlciB0aGUgb3RoZXJcbiAgICAgIGNoYXRMb2cubWFwKChtZXNzYWdlLGluZGV4KT0+KFxuICAgICAgICA8ZGl2IGtleT0naW5kZXgnPlxuICAgICAgICAgIHttZXNzYWdlLm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApKVxuICAgIH1cblxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdQbGVhc2UgdHlwZSB5b3VyIG1lc3NhZ2UgaGVyZS4uLicgdmFsdWU9e2lucHV0VmFsdWV9IG9uQ2hhbmdlPXsoZSk9PnNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlNlbmQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgXG4gICAgPC9kaXY+XG4gIClcblxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkhvbWUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImNoYXRMb2ciLCJzZXRDaGF0TG9nIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZDaGF0TG9nIiwidHlwZSIsIm1lc3NhZ2UiLCJzZW5kTWVzc2FnZSIsInVybCIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfT1BFTl9BUElfS0VZIiwiZGF0YSIsIm1vZGVsIiwibWVzc2FnZXMiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNob2ljZXMiLCJjb250ZW50IiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaW5kZXgiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});