/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flip-cards/index.js":
/*!*********************************!*\
  !*** ./src/flip-cards/index.js ***!
  \*********************************/
/***/ (function() {

const FLIP_CARDS = 'loop-patterns/flip-cards';
wp.domReady(function () {
  wp.blocks.registerBlockVariation('core/query', {
    name: FLIP_CARDS,
    title: 'Flip Cards',
    description: 'Flip Cards Query',
    isActive: _ref => {
      let {
        namespace,
        query
      } = _ref;
      return namespace === FLIP_CARDS && query.postType === 'post';
    },
    icon: 'format-gallery',
    attributes: {
      namespace: FLIP_CARDS,
      className: 'lp-flip-cards',
      tagName: 'section',
      query: {
        perPage: 3,
        pages: 0,
        offset: 0,
        postType: 'post',
        order: 'desc',
        orderBy: 'date',
        author: '',
        search: '',
        exclude: [],
        sticky: '',
        inherit: false
      }
    },
    scope: ['inserter'],
    innerBlocks: [['core/post-template', {
      lock: 'all',
      className: 'lp-flip-card__card is-flex-container columns-3'
    }, [['core/group', {
      className: 'lp-flip-card'
    }, [['core/columns', {
      className: 'lp-flip-card__inner'
    }, [['core/column', {
      className: 'lp-flip-cards__front'
    }, [['core/post-featured-image']]], ['core/column', {
      className: 'lp-flip-cards__back'
    }, [['core/post-title', {
      isLink: true,
      style: {
        typography: {
          textTransform: 'uppercase',
          fontStyle: 'normal',
          fontWeight: '700'
        }
      }
    }], ['core/post-date', {
      textColor: 'secondary',
      fontSize: 'small'
    }], ['core/post-author', {
      textColor: 'secondary',
      fontSize: 'small',
      showAvatar: false
    }], ['core/post-excerpt', {
      moreText: 'Read More',
      textColor: 'secondary',
      fontSize: 'small'
    }]]]]]]]]]]
  });
});

/***/ }),

/***/ "./src/simple-query/index.js":
/*!***********************************!*\
  !*** ./src/simple-query/index.js ***!
  \***********************************/
/***/ (function() {

const SIMPLE_QUERY = 'loop-patterns/simple-query';
wp.domReady(function () {
  wp.blocks.registerBlockVariation('core/query', {
    name: SIMPLE_QUERY,
    title: 'Simple Query',
    description: 'Displays a Simple Query',
    isActive: _ref => {
      let {
        namespace,
        query
      } = _ref;
      return namespace === SIMPLE_QUERY && query.postType === 'post';
    },
    icon: 'edit-large',
    attributes: {
      namespace: SIMPLE_QUERY,
      query: {
        perPage: 3,
        pages: 0,
        offset: 0,
        postType: 'post',
        order: 'desc',
        orderBy: 'date',
        author: '',
        search: '',
        exclude: [],
        sticky: '',
        inherit: false
      }
    },
    scope: ['inserter'],
    innerBlocks: [['core/post-template', {}, [['core/post-title'], ['core/post-excerpt']]], ['core/query-pagination'], ['core/query-no-results']]
  });
});

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-query */ "./src/simple-query/index.js");
/* harmony import */ var _simple_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simple_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flip_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flip-cards */ "./src/flip-cards/index.js");
/* harmony import */ var _flip_cards__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_flip_cards__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");



}();
/******/ })()
;
//# sourceMappingURL=index.js.map