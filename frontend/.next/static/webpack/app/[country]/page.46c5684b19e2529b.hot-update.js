"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[country]/page",{

/***/ "(app-pages-browser)/./src/app/[country]/page.js":
/*!***********************************!*\
  !*** ./src/app/[country]/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _LineGraf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LineGraf */ \"(app-pages-browser)/./src/app/[country]/LineGraf.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page(param) {\n    let { params } = param;\n    var _countryData_population, _countryData_population1, _countryData_borders, _countryData_population2;\n    _s();\n    const { country } = params;\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const code = searchParams.get(\"code\");\n    const [countryData, setCountryData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function getCountrieData() {\n            const rowCountryInfo = await fetch(\"http://localhost:4000/country?name=\".concat(country, \"&code=\").concat(code));\n            const countryInfo = await rowCountryInfo.json();\n            setCountryData(countryInfo);\n            setLoading(false);\n        }\n        getCountrieData();\n    }, []);\n    const dataForGraf = {\n        year: (countryData === null || countryData === void 0 ? void 0 : (_countryData_population = countryData.population) === null || _countryData_population === void 0 ? void 0 : _countryData_population.map((el)=>el.value)) || [],\n        population: (countryData === null || countryData === void 0 ? void 0 : (_countryData_population1 = countryData.population) === null || _countryData_population1 === void 0 ? void 0 : _countryData_population1.map((el)=>el.year)) || \"\"\n    };\n    const lineChartData = {\n        labels: dataForGraf.population,\n        datasets: [\n            {\n                label: \"Population\",\n                data: dataForGraf.year,\n                borderColor: \"rgb(75, 192, 192)\",\n                color: \"white\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-row justify-center py-4 \",\n                children: [\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl px-3\",\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this) : null,\n                    countryData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl px-3\",\n                                children: country\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            (countryData === null || countryData === void 0 ? void 0 : countryData.flag) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: countryData.flag,\n                                alt: \"flag of \".concat(country),\n                                width: 45,\n                                height: 30,\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"px-2 md:px-8 xl:px-24\",\n                children: [\n                    (countryData === null || countryData === void 0 ? void 0 : countryData.borders) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: 'text-2xl \"px-1 xl:py-18 px-24\"',\n                        children: \"Border Countries\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 34\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: countryData === null || countryData === void 0 ? void 0 : (_countryData_borders = countryData.borders) === null || _countryData_borders === void 0 ? void 0 : _countryData_borders.map((border)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-700 min-w-20 p-1 m-2 rounded-md flex justify-center hover:bg-red-950\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/\".concat(border.commonName, \"?code=\").concat(border.countryCode),\n                                    children: border.commonName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 19\n                                }, this)\n                            }, border.commonName, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-1 md:p-8 xl:p-24\",\n                children: (countryData === null || countryData === void 0 ? void 0 : (_countryData_population2 = countryData.population) === null || _countryData_population2 === void 0 ? void 0 : _countryData_population2.length) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LineGraf__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    lineChartData: lineChartData\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                    lineNumber: 88,\n                    columnNumber: 46\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"+mVzdl57mpVo2UgUVAygvJvqdAo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2NvdW50cnldL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNGO0FBQ29CO0FBQ0w7QUFDVjtBQUVuQixTQUFTTSxLQUFLLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtRQW1CbkJDLHlCQUNNQSwwQkEyQ0pBLHNCQWlCRkE7O0lBL0VSLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdGO0lBQ3BCLE1BQU1HLGVBQWVSLGdFQUFlQTtJQUNwQyxNQUFNUyxPQUFPRCxhQUFhRSxHQUFHLENBQUM7SUFDOUIsTUFBTSxDQUFDSixhQUFhSyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFFUixlQUFlYTtZQUNiLE1BQU1DLGlCQUFpQixNQUFNQyxNQUFNLHNDQUFzRFAsT0FBaEJGLFNBQVEsVUFBYSxPQUFMRTtZQUN6RixNQUFNUSxjQUFjLE1BQU1GLGVBQWVHLElBQUk7WUFDN0NQLGVBQWVNO1lBQ2ZKLFdBQVc7UUFDYjtRQUNBQztJQUNGLEdBQUUsRUFBRTtJQUVKLE1BQU1LLGNBQWM7UUFDbEJDLE1BQU1kLENBQUFBLHdCQUFBQSxtQ0FBQUEsMEJBQUFBLFlBQWFlLFVBQVUsY0FBdkJmLDhDQUFBQSx3QkFBeUJnQixHQUFHLENBQUMsQ0FBQ0MsS0FBT0EsR0FBR0MsS0FBSyxNQUFLLEVBQUU7UUFDMURILFlBQVlmLENBQUFBLHdCQUFBQSxtQ0FBQUEsMkJBQUFBLFlBQWFlLFVBQVUsY0FBdkJmLCtDQUFBQSx5QkFBeUJnQixHQUFHLENBQUMsQ0FBQ0MsS0FBT0EsR0FBR0gsSUFBSSxNQUFLO0lBQy9EO0lBRUEsTUFBTUssZ0JBQWdCO1FBQ3BCQyxRQUFRUCxZQUFZRSxVQUFVO1FBQzlCTSxVQUFVO1lBQ1I7Z0JBQ0FDLE9BQU87Z0JBQ0xDLE1BQU1WLFlBQVlDLElBQUk7Z0JBQ3RCVSxhQUFhO2dCQUNiQyxPQUFNO1lBQ1I7U0FDRDtJQUNIO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQVFDLFdBQVU7O29CQUVmdEIsd0JBQVUsOERBQUN1Qjt3QkFBR0QsV0FBVTtrQ0FBZ0I7Ozs7OytCQUN0QztvQkFHRjVCLDRCQUNBOzswQ0FDRSw4REFBQzZCO2dDQUFHRCxXQUFVOzBDQUFpQjNCOzs7Ozs7NEJBQzlCRCxDQUFBQSx3QkFBQUEsa0NBQUFBLFlBQWE4QixJQUFJLG1CQUVoQiw4REFBQ3RDLGtEQUFLQTtnQ0FDSnVDLEtBQUsvQixZQUFZOEIsSUFBSTtnQ0FDckJFLEtBQUssV0FBbUIsT0FBUi9CO2dDQUNoQmdDLE9BQU87Z0NBQUlDLFFBQVE7Z0NBQUlDLFFBQVE7Ozs7Ozs7dUNBS25DOzs7Ozs7OzBCQUdOLDhEQUFDUjtnQkFBUUMsV0FBVTs7b0JBQ2hCNUIsQ0FBQUEsd0JBQUFBLGtDQUFBQSxZQUFhb0MsT0FBTyxtQkFBSSw4REFBQ0M7d0JBQUdULFdBQVU7a0NBQWlDOzs7Ozs7a0NBQ3hFLDhEQUFDRjt3QkFBSUUsV0FBVTtrQ0FFWDVCLHdCQUFBQSxtQ0FBQUEsdUJBQUFBLFlBQWFvQyxPQUFPLGNBQXBCcEMsMkNBQUFBLHFCQUFzQmdCLEdBQUcsQ0FBQyxDQUFDc0I7NEJBQ3pCLHFCQUNFLDhEQUFDWjtnQ0FFQ0UsV0FBVTswQ0FFViw0RUFBQ25DLGlEQUFJQTtvQ0FBQzhDLE1BQU0sSUFBOEJELE9BQTFCQSxPQUFPRSxVQUFVLEVBQUMsVUFBMkIsT0FBbkJGLE9BQU9HLFdBQVc7OENBQ3pESCxPQUFPRSxVQUFVOzs7Ozs7K0JBSmZGLE9BQU9FLFVBQVU7Ozs7O3dCQVE1Qjs7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDYjtnQkFBUUMsV0FBVTswQkFFZjVCLENBQUFBLHdCQUFBQSxtQ0FBQUEsMkJBQUFBLFlBQWFlLFVBQVUsY0FBdkJmLCtDQUFBQSx5QkFBeUIwQyxNQUFNLG1CQUFJLDhEQUFDN0MsaURBQVFBO29CQUFDc0IsZUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RFO0dBckZ3QnJCOztRQUVESiw0REFBZUE7OztLQUZkSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1tjb3VudHJ5XS9wYWdlLmpzP2YwNGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5lR3JhZiBmcm9tICcuL0xpbmVHcmFmJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHsgY291bnRyeSB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXHJcbiAgY29uc3QgY29kZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ2NvZGUnKVxyXG4gIGNvbnN0IFtjb3VudHJ5RGF0YSwgc2V0Q291bnRyeURhdGFdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENvdW50cmllRGF0YSAoKSB7XHJcbiAgICAgIGNvbnN0IHJvd0NvdW50cnlJbmZvID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9jb3VudHJ5P25hbWU9JHtjb3VudHJ5fSZjb2RlPSR7Y29kZX1gKSBcclxuICAgICAgY29uc3QgY291bnRyeUluZm8gPSBhd2FpdCByb3dDb3VudHJ5SW5mby5qc29uKClcclxuICAgICAgc2V0Q291bnRyeURhdGEoY291bnRyeUluZm8pXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgICBnZXRDb3VudHJpZURhdGEoKVxyXG4gIH0sW10pXHJcblxyXG4gIGNvbnN0IGRhdGFGb3JHcmFmID0ge1xyXG4gICAgeWVhcjogY291bnRyeURhdGE/LnBvcHVsYXRpb24/Lm1hcCgoZWwpID0+IGVsLnZhbHVlKSB8fCBbXSxcclxuICAgIHBvcHVsYXRpb246IGNvdW50cnlEYXRhPy5wb3B1bGF0aW9uPy5tYXAoKGVsKSA9PiBlbC55ZWFyKSB8fCBcIlwiXHJcbiAgfVxyXG5cclxuICBjb25zdCBsaW5lQ2hhcnREYXRhID0ge1xyXG4gICAgbGFiZWxzOiBkYXRhRm9yR3JhZi5wb3B1bGF0aW9uLCBcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgbGFiZWw6IFwiUG9wdWxhdGlvblwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGFGb3JHcmFmLnllYXIsIFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYig3NSwgMTkyLCAxOTIpXCIsXHJcbiAgICAgICAgY29sb3I6XCJ3aGl0ZVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIHB5LTQgJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBsb2FkaW5nID8gPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgcHgtMyc+TG9hZGluZy4uLjwvaDE+IFxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdW50cnlEYXRhPyBcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIHB4LTMnPntjb3VudHJ5fTwvaDE+XHJcbiAgICAgICAgICAgIHtjb3VudHJ5RGF0YT8uZmxhZyBcclxuICAgICAgICAgICAgICAmJiBcclxuICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2NvdW50cnlEYXRhLmZsYWd9IFxyXG4gICAgICAgICAgICAgICAgYWx0PXtgZmxhZyBvZiAke2NvdW50cnl9YH0gXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NDV9IGhlaWdodD17MzB9IHByaW9yaXR5IFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3B4LTIgbWQ6cHgtOCB4bDpweC0yNCc+XHJcbiAgICAgICAge2NvdW50cnlEYXRhPy5ib3JkZXJzICYmIDxoMiBjbGFzc05hbWU9J3RleHQtMnhsIFwicHgtMSB4bDpweS0xOCBweC0yNFwiJz5Cb3JkZXIgQ291bnRyaWVzPC9oMj59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cnPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjb3VudHJ5RGF0YT8uYm9yZGVycz8ubWFwKChib3JkZXIpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAga2V5PXtib3JkZXIuY29tbW9uTmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctc2xhdGUtNzAwIG1pbi13LTIwIHAtMSBtLTIgcm91bmRlZC1tZCBmbGV4IGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLXJlZC05NTAnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtib3JkZXIuY29tbW9uTmFtZX0/Y29kZT0ke2JvcmRlci5jb3VudHJ5Q29kZX1gfT4gXHJcbiAgICAgICAgICAgICAgICAgICAge2JvcmRlci5jb21tb25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwLTEgbWQ6cC04IHhsOnAtMjQnID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb3VudHJ5RGF0YT8ucG9wdWxhdGlvbj8ubGVuZ3RoICYmIDxMaW5lR3JhZiBsaW5lQ2hhcnREYXRhPXtsaW5lQ2hhcnREYXRhfSAvPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVNlYXJjaFBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluZUdyYWYiLCJQYWdlIiwicGFyYW1zIiwiY291bnRyeURhdGEiLCJjb3VudHJ5Iiwic2VhcmNoUGFyYW1zIiwiY29kZSIsImdldCIsInNldENvdW50cnlEYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRDb3VudHJpZURhdGEiLCJyb3dDb3VudHJ5SW5mbyIsImZldGNoIiwiY291bnRyeUluZm8iLCJqc29uIiwiZGF0YUZvckdyYWYiLCJ5ZWFyIiwicG9wdWxhdGlvbiIsIm1hcCIsImVsIiwidmFsdWUiLCJsaW5lQ2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJib3JkZXJDb2xvciIsImNvbG9yIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZmxhZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJib3JkZXJzIiwiaDIiLCJib3JkZXIiLCJocmVmIiwiY29tbW9uTmFtZSIsImNvdW50cnlDb2RlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[country]/page.js\n"));

/***/ })

});