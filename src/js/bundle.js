/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const forms = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Мы скоро с вами свяжемся',
        failure: 'Ошибка'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        input.forEach(item => {
            item.value = '';
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            postData('server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                })
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

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
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modal() {
    function showModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.add('modal_active');
                document.body.style.overflow = 'hidden';
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('modal_active');
                document.body.style.overflow = '';
            }
        });

        close.addEventListener('click', () => {
            modal.classList.remove('modal_active');
            document.body.style.overflow = '';
        });
    }
    showModal('.button_main','.modal','.modal__main-close');
    showModal('.first-btn','.modal','.modal__main-close');
    showModal('.prices__btn','.modal','.modal__main-close');
    showModal('.footer__btn','.modal','.modal__main-close');
}
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = () => {
    const carousel = document.querySelector('.reviews__slider'),
          slides = document.querySelectorAll('.reviews__slider-item'),
          field = document.querySelector('.reviews__slider-wrapper'),
          left = document.querySelector('.reviews__slider-arrow-left'),
          right = document.querySelector('.reviews__slider-arrow-right'),
          width = window.getComputedStyle(carousel).width;
          let index = 1,
              offset = 0;

    field.style.display = 'flex';
    field.style.width = 100 * slides.length + '%';
    field.style.transition = '0.5s all';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    right.addEventListener('click', moveRight);
    left.addEventListener('click', moveLeft);

    (function() {
        if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        field.style.transform = `translateX(-${offset}px)`;
        active(index);
    }());

    function moveRight() {
        if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        field.style.transform = `translateX(-${offset}px)`;
        if(index == slides.length - 1){
            index = 0;
        } else{
            index++;
        }
        active(index);
    }

    function moveLeft() {
        if(offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        field.style.transform = `translateX(-${offset}px)`;

        if(index == 0){
            index = slides.length - 1;
        } else{
            index--;
        }
        active(index);
    }

    function active(a){
        slides.forEach((item, i) => {
            if(i === a) {
                slides[i].classList.add('reviews__slider-item_active');
            } else{
                item.classList.remove('reviews__slider-item_active');
            }
        });
    }   
}


/* harmony default export */ __webpack_exports__["default"] = (slider);

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
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");





window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map