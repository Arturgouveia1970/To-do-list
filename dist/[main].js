/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n// ### 1. Data\r\nconst taskList = [\r\n  {\r\n    description: 'Shopping',\r\n    completed: false,\r\n    index: 0,\r\n  },\r\n  {\r\n    description: 'Study ES6 - Webpack',\r\n    completed: true,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: 'Complete Awesome Books ES6',\r\n    completed: false,\r\n    index: 2,\r\n  },\r\n  {\r\n    description: 'Workout',\r\n    completed: true,\r\n    index: 3,\r\n  },\r\n];\r\n\r\n// ### 2. DOM Manipulations\r\nconst mainContainer = document.querySelector('.todo-list-container');\r\n\r\nmainContainer.innerHTML = `<div class=\"row\">\r\n<h1>Today's To Do</h1>\r\n<i class=\"fa-solid fa-rotate fa-lg font-awesome-icon\"></i>\r\n</div>\r\n<div>\r\n<input placeholder=\"Add to your list...\">\r\n</div>`;\r\n\r\ntaskList.forEach((e) => {\r\n  let isChecked;\r\n  let strikeThrough;\r\n  if (e.completed === true) {\r\n    isChecked = 'checked';\r\n    strikeThrough = 'strike-through';\r\n  }\r\n\r\n  mainContainer.innerHTML += `<div class=\"row\">\r\n  <input class=\"checkbox\" type=\"checkbox\" ${isChecked}>\r\n  <p class=\"${strikeThrough}\">${e.description}</p>\r\n  <i class=\"fa-solid fa-ellipsis-vertical fa-lg font-awesome-icon\"></i>\r\n  </div>`;\r\n});\r\n\r\nmainContainer.innerHTML += '<button class=\"button\">Clear all completed</button>';\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;