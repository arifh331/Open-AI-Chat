"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/chat.js":
/*!*******************************!*\
  !*** ./src/pages/api/chat.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n//This is own api call endpoint that calls open ai\n\nasync function handler(req, res) {\n    //handling if the method is not a post method\n    if (req.method !== \"POST\") {\n        //Respond with 405 message \n        res.status(405).json({\n            message: \"The Method should be POST\"\n        });\n    } else {\n        try {\n            const { body  } = req;\n            const url = `https://api.openai.com/v1/chat/completions`;\n            const headers = {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": `Bearer ${process.env.OPEN_API_KEY}`\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, body, {\n                headers: headers\n            });\n            res.status(200).json(response.data);\n        } catch (error) {\n            console.log(error);\n            res.status(500).json({\n                message: \"Something went wrong\"\n            });\n        }\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFDN0Usa0RBQWtEO0FBQ3hCO0FBRVgsZUFBZUMsUUFBUUMsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDNUMsNkNBQTZDO0lBQzdDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLDJCQUEyQjtRQUMzQkQsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxTQUFTO1FBQTJCO0lBRTVELE9BQ0s7UUFDSCxJQUFJO1lBR0osTUFBTSxFQUFDQyxLQUFJLEVBQUMsR0FBR047WUFFZixNQUFNTyxNQUFNLENBQUMsMENBQTBDLENBQUM7WUFFeEQsTUFBTUMsVUFBVTtnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGlCQUFpQixDQUFDLE9BQU8sRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZLENBQUMsQ0FBQztZQUN2RDtZQUlFLE1BQU1DLFdBQVcsTUFBTWQsa0RBQVUsQ0FBQ1MsS0FBSUQsTUFBSztnQkFBRUUsU0FBU0E7WUFBUTtZQUM5RFAsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1EsU0FBU0UsSUFBSTtRQUNwQyxFQUNBLE9BQU9DLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaZCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFDQyxTQUFRO1lBQXNCO1FBQ3REO0lBSUYsQ0FBQztBQUdILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Z3B0LWFwaS8uL3NyYy9wYWdlcy9hcGkvY2hhdC5qcz8zNTY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG4vL1RoaXMgaXMgb3duIGFwaSBjYWxsIGVuZHBvaW50IHRoYXQgY2FsbHMgb3BlbiBhaVxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcbiAgLy9oYW5kbGluZyBpZiB0aGUgbWV0aG9kIGlzIG5vdCBhIHBvc3QgbWV0aG9kXG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAvL1Jlc3BvbmQgd2l0aCA0MDUgbWVzc2FnZSBcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7bWVzc2FnZTogJ1RoZSBNZXRob2Qgc2hvdWxkIGJlIFBPU1QnfSlcblxuICB9XG4gIGVsc2Uge1xuICAgIHRyeSB7XG4gICAgXG5cbiAgICBjb25zdCB7Ym9keX0gPSByZXE7ICBcblxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNgXG5cbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk9QRU5fQVBJX0tFWX1gXG4gICAgfVxuXG4gICAgXG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsYm9keSx7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLmRhdGEpXG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7bWVzc2FnZTonU29tZXRoaW5nIHdlbnQgd3JvbmcnfSlcbiAgICB9XG5cblxuXG4gIH1cblxuICBcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJib2R5IiwidXJsIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJPUEVOX0FQSV9LRVkiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/chat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/chat.js"));
module.exports = __webpack_exports__;

})();