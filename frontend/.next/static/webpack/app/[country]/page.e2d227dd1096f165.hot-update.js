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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _LineGraf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LineGraf */ \"(app-pages-browser)/./src/app/[country]/LineGraf.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page(param) {\n    let { params } = param;\n    var _countryData_population, _countryData_population1, _countryData_borders, _countryData_population2;\n    _s();\n    const { country } = params;\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const code = searchParams.get(\"code\");\n    const [countryData, setCountryData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function getCountrieData() {\n            const rowCountryInfo = await fetch(\"http://localhost:4000/country?name=\".concat(country, \"&code=\").concat(code));\n            const countryInfo = await rowCountryInfo.json();\n            setCountryData(countryInfo);\n            setLoading(false);\n        }\n        getCountrieData();\n    }, []);\n    const dataForGraf = {\n        year: (countryData === null || countryData === void 0 ? void 0 : (_countryData_population = countryData.population) === null || _countryData_population === void 0 ? void 0 : _countryData_population.map((el)=>el.value)) || [],\n        population: (countryData === null || countryData === void 0 ? void 0 : (_countryData_population1 = countryData.population) === null || _countryData_population1 === void 0 ? void 0 : _countryData_population1.map((el)=>el.year)) || \"\"\n    };\n    const lineChartData = {\n        labels: dataForGraf.population,\n        datasets: [\n            {\n                label: \"Population\",\n                data: dataForGraf.year,\n                borderColor: \"rgb(75, 192, 192)\",\n                color: \"white\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-row justify-center py-4 \",\n                children: [\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl px-3\",\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 20\n                    }, this) : null,\n                    countryData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl px-3\",\n                                children: country\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            (countryData === null || countryData === void 0 ? void 0 : countryData.flag) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: countryData.flag,\n                                alt: \"flag of \".concat(country),\n                                width: 45,\n                                height: 30,\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"px-2 md:px-8 xl:px-24\",\n                children: [\n                    (countryData === null || countryData === void 0 ? void 0 : countryData.borders) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: 'text-2xl \"px-1 xl:py-18 px-24\"',\n                        children: \"Border Countries\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 34\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: countryData === null || countryData === void 0 ? void 0 : (_countryData_borders = countryData.borders) === null || _countryData_borders === void 0 ? void 0 : _countryData_borders.map((border)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-700 min-w-20 p-1 m-2 rounded-md flex justify-center hover:bg-red-950\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/\".concat(border.commonName, \"?code=\").concat(border.countryCode),\n                                    children: border.commonName\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 19\n                                }, this)\n                            }, border.commonName, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-1 md:p-8 xl:p-24\",\n                children: (countryData === null || countryData === void 0 ? void 0 : (_countryData_population2 = countryData.population) === null || _countryData_population2 === void 0 ? void 0 : _countryData_population2.length) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LineGraf__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    lineChartData: lineChartData\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                    lineNumber: 85,\n                    columnNumber: 46\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Cursos NO CODERHOUSE\\\\NODE\\\\DevelopsToday-challenge\\\\frontend\\\\src\\\\app\\\\[country]\\\\page.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"+mVzdl57mpVo2UgUVAygvJvqdAo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2NvdW50cnldL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNGO0FBQ29CO0FBQ0w7QUFDVjtBQUVuQixTQUFTTSxLQUFLLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtRQW1CbkJDLHlCQUNNQSwwQkF3Q0pBLHNCQWlCRkE7O0lBNUVSLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdGO0lBQ3BCLE1BQU1HLGVBQWVSLGdFQUFlQTtJQUNwQyxNQUFNUyxPQUFPRCxhQUFhRSxHQUFHLENBQUM7SUFDOUIsTUFBTSxDQUFDSixhQUFhSyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFFUixlQUFlYTtZQUNiLE1BQU1DLGlCQUFpQixNQUFNQyxNQUFNLHNDQUFzRFAsT0FBaEJGLFNBQVEsVUFBYSxPQUFMRTtZQUN6RixNQUFNUSxjQUFjLE1BQU1GLGVBQWVHLElBQUk7WUFDN0NQLGVBQWVNO1lBQ2ZKLFdBQVc7UUFDYjtRQUNBQztJQUNGLEdBQUUsRUFBRTtJQUVKLE1BQU1LLGNBQWM7UUFDbEJDLE1BQU1kLENBQUFBLHdCQUFBQSxtQ0FBQUEsMEJBQUFBLFlBQWFlLFVBQVUsY0FBdkJmLDhDQUFBQSx3QkFBeUJnQixHQUFHLENBQUMsQ0FBQ0MsS0FBT0EsR0FBR0MsS0FBSyxNQUFLLEVBQUU7UUFDMURILFlBQVlmLENBQUFBLHdCQUFBQSxtQ0FBQUEsMkJBQUFBLFlBQWFlLFVBQVUsY0FBdkJmLCtDQUFBQSx5QkFBeUJnQixHQUFHLENBQUMsQ0FBQ0MsS0FBT0EsR0FBR0gsSUFBSSxNQUFLO0lBQy9EO0lBRUEsTUFBTUssZ0JBQWdCO1FBQ3BCQyxRQUFRUCxZQUFZRSxVQUFVO1FBQzlCTSxVQUFVO1lBQ1I7Z0JBQ0FDLE9BQU87Z0JBQ0xDLE1BQU1WLFlBQVlDLElBQUk7Z0JBQ3RCVSxhQUFhO2dCQUNiQyxPQUFNO1lBQ1I7U0FDRDtJQUNIO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQVFDLFdBQVU7O29CQUNoQnRCLHdCQUFVLDhEQUFDdUI7d0JBQUdELFdBQVU7a0NBQWdCOzs7OzsrQkFBa0I7b0JBRXpENUIsNEJBQ0E7OzBDQUNFLDhEQUFDNkI7Z0NBQUdELFdBQVU7MENBQWlCM0I7Ozs7Ozs0QkFDOUJELENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYThCLElBQUksbUJBRWhCLDhEQUFDdEMsa0RBQUtBO2dDQUNKdUMsS0FBSy9CLFlBQVk4QixJQUFJO2dDQUNyQkUsS0FBSyxXQUFtQixPQUFSL0I7Z0NBQ2hCZ0MsT0FBTztnQ0FBSUMsUUFBUTtnQ0FBSUMsUUFBUTs7Ozs7Ozt1Q0FLbkM7Ozs7Ozs7MEJBR04sOERBQUNSO2dCQUFRQyxXQUFVOztvQkFDaEI1QixDQUFBQSx3QkFBQUEsa0NBQUFBLFlBQWFvQyxPQUFPLG1CQUFJLDhEQUFDQzt3QkFBR1QsV0FBVTtrQ0FBaUM7Ozs7OztrQ0FDeEUsOERBQUNGO3dCQUFJRSxXQUFVO2tDQUVYNUIsd0JBQUFBLG1DQUFBQSx1QkFBQUEsWUFBYW9DLE9BQU8sY0FBcEJwQywyQ0FBQUEscUJBQXNCZ0IsR0FBRyxDQUFDLENBQUNzQjs0QkFDekIscUJBQ0UsOERBQUNaO2dDQUVDRSxXQUFVOzBDQUVWLDRFQUFDbkMsaURBQUlBO29DQUFDOEMsTUFBTSxJQUE4QkQsT0FBMUJBLE9BQU9FLFVBQVUsRUFBQyxVQUEyQixPQUFuQkYsT0FBT0csV0FBVzs4Q0FDekRILE9BQU9FLFVBQVU7Ozs7OzsrQkFKZkYsT0FBT0UsVUFBVTs7Ozs7d0JBUTVCOzs7Ozs7Ozs7Ozs7MEJBSU4sOERBQUNiO2dCQUFRQyxXQUFVOzBCQUVmNUIsQ0FBQUEsd0JBQUFBLG1DQUFBQSwyQkFBQUEsWUFBYWUsVUFBVSxjQUF2QmYsK0NBQUFBLHlCQUF5QjBDLE1BQU0sbUJBQUksOERBQUM3QyxpREFBUUE7b0JBQUNzQixlQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEU7R0FsRndCckI7O1FBRURKLDREQUFlQTs7O0tBRmRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvW2NvdW50cnldL3BhZ2UuanM/ZjA0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmVHcmFmIGZyb20gJy4vTGluZUdyYWYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgeyBjb3VudHJ5IH0gPSBwYXJhbXM7XHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcclxuICBjb25zdCBjb2RlID0gc2VhcmNoUGFyYW1zLmdldCgnY29kZScpXHJcbiAgY29uc3QgW2NvdW50cnlEYXRhLCBzZXRDb3VudHJ5RGF0YV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnRyaWVEYXRhICgpIHtcclxuICAgICAgY29uc3Qgcm93Q291bnRyeUluZm8gPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2NvdW50cnk/bmFtZT0ke2NvdW50cnl9JmNvZGU9JHtjb2RlfWApIFxyXG4gICAgICBjb25zdCBjb3VudHJ5SW5mbyA9IGF3YWl0IHJvd0NvdW50cnlJbmZvLmpzb24oKVxyXG4gICAgICBzZXRDb3VudHJ5RGF0YShjb3VudHJ5SW5mbylcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuICAgIGdldENvdW50cmllRGF0YSgpXHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3QgZGF0YUZvckdyYWYgPSB7XHJcbiAgICB5ZWFyOiBjb3VudHJ5RGF0YT8ucG9wdWxhdGlvbj8ubWFwKChlbCkgPT4gZWwudmFsdWUpIHx8IFtdLFxyXG4gICAgcG9wdWxhdGlvbjogY291bnRyeURhdGE/LnBvcHVsYXRpb24/Lm1hcCgoZWwpID0+IGVsLnllYXIpIHx8IFwiXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpbmVDaGFydERhdGEgPSB7XHJcbiAgICBsYWJlbHM6IGRhdGFGb3JHcmFmLnBvcHVsYXRpb24sIFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICBsYWJlbDogXCJQb3B1bGF0aW9uXCIsXHJcbiAgICAgICAgZGF0YTogZGF0YUZvckdyYWYueWVhciwgXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDc1LCAxOTIsIDE5MilcIixcclxuICAgICAgICBjb2xvcjpcIndoaXRlXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgcHktNCAnPlxyXG4gICAgICAgIHtsb2FkaW5nID8gPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgcHgtMyc+TG9hZGluZy4uLjwvaDE+IDogbnVsbH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb3VudHJ5RGF0YT8gXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTR4bCBweC0zJz57Y291bnRyeX08L2gxPlxyXG4gICAgICAgICAgICB7Y291bnRyeURhdGE/LmZsYWcgXHJcbiAgICAgICAgICAgICAgJiYgXHJcbiAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtjb3VudHJ5RGF0YS5mbGFnfSBcclxuICAgICAgICAgICAgICAgIGFsdD17YGZsYWcgb2YgJHtjb3VudHJ5fWB9IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezQ1fSBoZWlnaHQ9ezMwfSBwcmlvcml0eSBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgICA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdweC0yIG1kOnB4LTggeGw6cHgtMjQnPlxyXG4gICAgICAgIHtjb3VudHJ5RGF0YT8uYm9yZGVycyAmJiA8aDIgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBcInB4LTEgeGw6cHktMTggcHgtMjRcIic+Qm9yZGVyIENvdW50cmllczwvaDI+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93Jz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY291bnRyeURhdGE/LmJvcmRlcnM/Lm1hcCgoYm9yZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgIGtleT17Ym9yZGVyLmNvbW1vbk5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXNsYXRlLTcwMCBtaW4tdy0yMCBwLTEgbS0yIHJvdW5kZWQtbWQgZmxleCBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1yZWQtOTUwJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7Ym9yZGVyLmNvbW1vbk5hbWV9P2NvZGU9JHtib3JkZXIuY291bnRyeUNvZGV9YH0+IFxyXG4gICAgICAgICAgICAgICAgICAgIHtib3JkZXIuY29tbW9uTmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncC0xIG1kOnAtOCB4bDpwLTI0JyA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY291bnRyeURhdGE/LnBvcHVsYXRpb24/Lmxlbmd0aCAmJiA8TGluZUdyYWYgbGluZUNoYXJ0RGF0YT17bGluZUNoYXJ0RGF0YX0gLz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmVHcmFmIiwiUGFnZSIsInBhcmFtcyIsImNvdW50cnlEYXRhIiwiY291bnRyeSIsInNlYXJjaFBhcmFtcyIsImNvZGUiLCJnZXQiLCJzZXRDb3VudHJ5RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0Q291bnRyaWVEYXRhIiwicm93Q291bnRyeUluZm8iLCJmZXRjaCIsImNvdW50cnlJbmZvIiwianNvbiIsImRhdGFGb3JHcmFmIiwieWVhciIsInBvcHVsYXRpb24iLCJtYXAiLCJlbCIsInZhbHVlIiwibGluZUNoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZsYWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwiYm9yZGVycyIsImgyIiwiYm9yZGVyIiwiaHJlZiIsImNvbW1vbk5hbWUiLCJjb3VudHJ5Q29kZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[country]/page.js\n"));

/***/ })

});