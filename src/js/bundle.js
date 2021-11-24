/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const hamburger = function() {
    const menu = document.querySelector('.menu'),
          menuList = document.querySelector('.menu__list'),
          menuItem = document.querySelectorAll('.menu__item'),
          hamburgerBtn = document.querySelector('.hamburger'),
          close = document.querySelector('.menu__list .close');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        menuList.classList.toggle('menu__list_active');
        document.body.style.overflow = 'hidden';
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            menuList.classList.toggle('menu__list_active');
            document.body.style.overflow = 'scroll';
        })
    });

    close.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        menuList.classList.toggle('menu__list_active');
        document.body.style.overflow = 'scroll';
    })
}
hamburger();
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");

}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map