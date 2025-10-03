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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getSupabaseBrowserClient: () => (/* binding */ getSupabaseBrowserClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"@supabase/auth-helpers-nextjs\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://phtfqtumdtqrxvtlxwwq.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBodGZxdHVtZHRxcnh2dGx4d3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0ODg1MTAsImV4cCI6MjA3NTA2NDUxMH0.bE94zxx9V9JAJyCshiGEiUoN0CiRRI-eTT1Aa7O6RJM\";\nif (!supabaseUrl || !supabaseAnonKey) {\n    throw new Error(\"Defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY nas variaveis de ambiente.\");\n}\nlet client;\nfunction getSupabaseBrowserClient() {\n    if (!client) {\n        client = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createPagesBrowserClient)();\n    }\n    return client;\n}\nconst supabaseClient = getSupabaseBrowserClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabaseClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2VDbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5RTtBQUV6RSxNQUFNQyxjQUFjQywwQ0FBb0M7QUFDeEQsTUFBTUcsa0JBQWtCSCxrTkFBeUM7QUFFakUsSUFBSSxDQUFDRCxlQUFlLENBQUNJLGlCQUFpQjtJQUNwQyxNQUFNLElBQUlFLE1BQU07QUFDbEI7QUFFQSxJQUFJQztBQUVHLFNBQVNDO0lBQ2QsSUFBSSxDQUFDRCxRQUFRO1FBQ1hBLFNBQVNSLHVGQUF3QkE7SUFDbkM7SUFDQSxPQUFPUTtBQUNUO0FBRUEsTUFBTUUsaUJBQWlCRDtBQUV2QixpRUFBZUMsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGFiYXNlLW5leHQtdGFpbHdpbmQtYXV0aC8uL2xpYi9zdXBhYmFzZUNsaWVudC5qcz81ZjBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBhZ2VzQnJvd3NlckNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9hdXRoLWhlbHBlcnMtbmV4dGpzJztcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkw7XG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWTtcblxuaWYgKCFzdXBhYmFzZVVybCB8fCAhc3VwYWJhc2VBbm9uS2V5KSB7XG4gIHRocm93IG5ldyBFcnJvcignRGVmaW5hIE5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCBlIE5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIG5hcyB2YXJpYXZlaXMgZGUgYW1iaWVudGUuJyk7XG59XG5cbmxldCBjbGllbnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdXBhYmFzZUJyb3dzZXJDbGllbnQoKSB7XG4gIGlmICghY2xpZW50KSB7XG4gICAgY2xpZW50ID0gY3JlYXRlUGFnZXNCcm93c2VyQ2xpZW50KCk7XG4gIH1cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuY29uc3Qgc3VwYWJhc2VDbGllbnQgPSBnZXRTdXBhYmFzZUJyb3dzZXJDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3VwYWJhc2VDbGllbnQ7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlc0Jyb3dzZXJDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsIkVycm9yIiwiY2xpZW50IiwiZ2V0U3VwYWJhc2VCcm93c2VyQ2xpZW50Iiwic3VwYWJhc2VDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/supabaseClient.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/supabaseClient */ \"./lib/supabaseClient.js\");\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [supabaseClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>(0,_lib_supabaseClient__WEBPACK_IMPORTED_MODULE_4__.getSupabaseBrowserClient)());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.SessionContextProvider, {\n        supabaseClient: supabaseClient,\n        initialSession: pageProps.initialSession,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Thierry.Silva\\\\Documents\\\\Teste\\\\teste\\\\pages\\\\_app.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Thierry.Silva\\\\Documents\\\\Teste\\\\teste\\\\pages\\\\_app.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNFO0FBQ3FDO0FBQ0w7QUFFbEQsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxNQUFNLENBQUNDLGVBQWUsR0FBR04sK0NBQVFBLENBQUMsSUFBTUUsNkVBQXdCQTtJQUVoRSxxQkFDRSw4REFBQ0QsZ0ZBQXNCQTtRQUFDSyxnQkFBZ0JBO1FBQWdCQyxnQkFBZ0JGLFVBQVVFLGNBQWM7a0JBQzlGLDRFQUFDSDtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwYWJhc2UtbmV4dC10YWlsd2luZC1hdXRoLy4vcGFnZXMvX2FwcC5qc3g/NGNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0UHJvdmlkZXIgfSBmcm9tICdAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0JztcbmltcG9ydCB7IGdldFN1cGFiYXNlQnJvd3NlckNsaWVudCB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3N1cGFiYXNlQ2xpZW50XSA9IHVzZVN0YXRlKCgpID0+IGdldFN1cGFiYXNlQnJvd3NlckNsaWVudCgpKTtcblxuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uQ29udGV4dFByb3ZpZGVyIHN1cGFiYXNlQ2xpZW50PXtzdXBhYmFzZUNsaWVudH0gaW5pdGlhbFNlc3Npb249e3BhZ2VQcm9wcy5pbml0aWFsU2Vzc2lvbn0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TZXNzaW9uQ29udGV4dFByb3ZpZGVyPlxuICApO1xufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZXNzaW9uQ29udGV4dFByb3ZpZGVyIiwiZ2V0U3VwYWJhc2VCcm93c2VyQ2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3VwYWJhc2VDbGllbnQiLCJpbml0aWFsU2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/auth-helpers-nextjs":
/*!************************************************!*\
  !*** external "@supabase/auth-helpers-nextjs" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/auth-helpers-nextjs");

/***/ }),

/***/ "@supabase/auth-helpers-react":
/*!***********************************************!*\
  !*** external "@supabase/auth-helpers-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();