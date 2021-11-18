/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");
/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/index.js */ "./src/pages/index.js");
/* harmony import */ var _PopupWithImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupWithImages */ "./src/components/PopupWithImages.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var previewImageModalWindow = document.querySelector("#js-preview-modal");
var previewImageElement = document.querySelector(".modal__preview-image");
var previewImageCaption = document.querySelector(".modal__preview-caption");

var Card = /*#__PURE__*/function () {
  function Card(card, cardSelector, handleCardClick) {
    _classCallCheck(this, Card);

    this._name = card.name;
    this._link = card.link;
    this._alt = card.alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector(".photo-grid__post").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_handleActiveLikeBtn",
    value: function _handleActiveLikeBtn() {
      this._element.querySelector(".photo-grid__like-btn").classList.toggle("photo-grid__like-btn_active");
    }
  }, {
    key: "_deleteCard",
    value: function _deleteCard() {
      this._element.querySelector(".photo-grid__trash-btn").closest(".photo-grid__post").remove();
    }
    /* _handlePreviewPicture() {
         previewImageElement.src = this._link;
         previewImageCaption.textContent = this._name;
         previewImageElement.alt = this._name;
          openModal(previewImageModalWindow);
     }*/

  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      //this is where we set up the events
      this._element.querySelector(".photo-grid__photo").addEventListener('click', function () {
        _this._handleCardClick({
          link: _this._link,
          title: _this._name
        });
      });

      this._element.querySelector(".photo-grid__like-btn").addEventListener("click", function () {
        _this._handleActiveLikeBtn();
      });

      this._element.querySelector(".photo-grid__trash-btn").addEventListener("click", function () {
        _this._deleteCard();
      });

      this._element.querySelector(".photo-grid__photo").addEventListener("click", function () {
        _this._handlePreviewPicture();
      }); //modalAddForm.addEventListener('submit', addFormSubmit);

    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();

      this._setEventListeners();

      this._element.querySelector(".photo-grid__photo").style.backgroundImage = "url(".concat(this._link, ")");
      this._element.querySelector(".photo-grid__caption").textContent = this._name;
      return this._element;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    _classCallCheck(this, FormValidator);

    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement) {
      var errorSpan = this._formElement.querySelector('#' + inputElement.id + '-error');

      inputElement.classList.add(this._inputErrorClass);
      errorSpan.classList.add(this._errorClass);
      errorSpan.textContent = inputElement.validationMessage;
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorSpan = this._formElement.querySelector('#' + inputElement.id + '-error');

      inputElement.classList.remove(this._inputErrorClass);
      errorSpan.textContent = '';
      errorSpan.classList.remove(this._errorClass);
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
      } else {
        this._hideInputError(inputElement);
      }
    }
  }, {
    key: "_hasValidInputs",
    value: function _hasValidInputs(inputList) {
      return inputList.every(function (inputElement) {
        return inputElement.validity.valid === true;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList, submitButton) {
      if (this._hasValidInputs(inputList)) {
        submitButton.disabled = false;
        submitButton.classList.remove(this._inactiveButtonClass);
      } else {
        submitButton.disabled = true;
        submitButton.classList.add(this._inactiveButtonClass);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      var inputList = _toConsumableArray(this._formElement.querySelectorAll(this._inputSelector));

      var submitButton = this._formElement.querySelector(this._submitButtonSelector);

      inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement);

          _this._toggleButtonState(inputList, submitButton);
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener("submit", function (e) {
        return e.preventDefault();
      });

      this._setEventListeners();
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupElement = document.querySelector(popupSelector);
    this._closeModalOnEscape = this._closeModalOnEscape.bind(this);
  }

  _createClass(Popup, [{
    key: "_closeModalOnEscape",
    value: function _closeModalOnEscape(evt) {
      if (evt.key === "Escape") {
        return closeModal(document.querySelector(".modal_open"));
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._popupElement.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("modal_open")) {
          return closeModal(evt.target);
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      this._popupElement.classList.add("modal_open");

      document.addEventListener("keydown", this._closeModalOnEscape);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove("modal_open");

      document.addEventListener("keydown", this._closeModalOnEscape);
    }
  }]);

  return Popup;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/components/PopupWithImages.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithImages.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImages = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImages, _Popup);

  var _super = _createSuper(PopupWithImages);

  function PopupWithImages() {
    _classCallCheck(this, PopupWithImages);

    return _super.apply(this, arguments);
  }

  _createClass(PopupWithImages, [{
    key: "open",
    value: function open(_ref) {
      var link = _ref.link,
          name = _ref.name;
      this._popupElement.querySelector('.modal__preview-caption').textContent = name;

      var image = this._popupElement.querySelector('.modal__preview-image');

      image.src = link;
      image.alt = "image of ".concat(name);

      _get(_getPrototypeOf(PopupWithImages.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImages;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithImages);

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "closeModalOnClick": () => (/* binding */ closeModalOnClick),
/* harmony export */   "closeModalOnEscape": () => (/* binding */ closeModalOnEscape)
/* harmony export */ });
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.js */ "./src/components/Card.js");

function openModal(modal) {
  modal.classList.add("modal_open");
  document.addEventListener("click", closeModalOnClick);
  document.addEventListener("keydown", closeModalOnEscape);
}
function closeModal(modal) {
  modal.classList.remove("modal_open");
  document.removeEventListener("click", closeModalOnClick);
  document.removeEventListener("keydown", closeModalOnEscape);
}
function closeModalOnClick(evt) {
  if (evt.target.classList.contains("modal_open")) {
    return closeModal(evt.target);
  }
}
function closeModalOnEscape(evt) {
  if (evt.key === "Escape") {
    return closeModal(document.querySelector(".modal_open"));
  }
}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formValidationConfig": () => (/* binding */ formValidationConfig)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils.js */ "./src/components/utils.js");




var initialCards = [{
  name: "Yosemite Valley",
  link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  alt: ""
}, {
  name: "Lake Louise",
  link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  alt: ""
}, {
  name: "Bald Mountains",
  link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  alt: ""
}, {
  name: "Latemar",
  link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  alt: ""
}, {
  name: "Vanoise National Park",
  link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  alt: ""
}, {
  name: "Lago di Braies",
  link: "https://code.s3.yandex.net/web-code/lago.jpg",
  alt: ""
}]; // =====
// Wrappers
// =====

var editModalWindow = document.querySelector("#js-edit-modal");
var previewImageModalWindow = document.querySelector("#js-preview-modal");
var modalEditFormElement = document.querySelector("#modal-edit-form");
var placesList = document.querySelector(".photo-grid__gallery");
var addModalWindow = document.querySelector("#js-add-modal");
var modalAddForm = document.querySelector("#modal-add-form"); // =====
// Buttons
// =====

var modalEditBtn = document.querySelector("#profile-edit-btn");
var editModalCloseBtn = editModalWindow.querySelector("#modal-close-btn");
var addModalButton = document.querySelector(".profile__add-button");
var addModalCloseBtn = addModalWindow.querySelector("#add-close-btn");
var previewImageCloseBtn = previewImageModalWindow.querySelector("#preview-close-btn");
var saveModalBtn = document.querySelector(".modal__save-btn");
var createModalBtn = document.querySelector(".modal__create-btn"); // =====
// Inputs
// =====

var modalNameInput = document.querySelector(".modal-name-input");
var modalBioInput = document.querySelector(".modal-bio-input");
var profileName = document.querySelector(".profile__name");
var profileBio = document.querySelector(".profile__bio");
var postTitle = document.querySelector(".modal__input-text_title");
var postLink = document.querySelector(".modal__input-text_link"); // =====
// Templates
// =====

var cardTemplate = document.querySelector("#card-template").content.querySelector(".photo-grid__post"); // =====
// Handlers
// =====
//Submits edited profile

var submitEditForm = function submitEditForm(e) {
  e.preventDefault();
  profileName.textContent = modalNameInput.value;
  profileBio.textContent = modalBioInput.value;
}; //Fills in information inputted


function openEditModal() {
  modalNameInput.value = profileName.textContent;
  modalBioInput.value = profileBio.textContent;
  (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(editModalWindow);
}

function renderCard(card, container) {
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"](card, '#card-template').generateCard(); //append it to list

  container.append(newCard);
}

function addRenderCard(card, container) {
  //append it to list
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"](card, '#card-template').generateCard();
  container.prepend(newCard);
}

function addFormSubmit(evt) {
  createModalBtn.disabled = true;
  createModalBtn.classList.add("popup__button_disabled");
  evt.preventDefault();
  var cardData = {
    name: postTitle.value,
    link: postLink.value
  };
  addRenderCard(cardData, placesList);
  evt.target.reset();
}

modalAddForm.addEventListener("submit", addFormSubmit); // =====
// Event Listeners
// =====

modalEditBtn.addEventListener("click", openEditModal);
editModalCloseBtn.addEventListener("click", function () {
  return (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(editModalWindow);
});
modalEditFormElement.addEventListener("submit", submitEditForm);
addModalButton.addEventListener("click", function () {
  return (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(addModalWindow);
});
addModalCloseBtn.addEventListener("click", function () {
  return (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(addModalWindow);
});
previewImageCloseBtn.addEventListener("click", function () {
  return (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(previewImageModalWindow);
});
saveModalBtn.addEventListener("click", function () {
  return (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(editModalWindow);
});
createModalBtn.addEventListener("click", function () {
  return (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(addModalWindow);
});
initialCards.forEach(function (cardElement) {
  renderCard(cardElement, placesList);
}); //=====
//Validation
//=====

var addFormEl = addModalWindow.querySelector('.popup__form');
var editFormEl = editModalWindow.querySelector('.popup__form');
var formValidationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"](formValidationConfig, addFormEl);
addFormValidator.enableValidation();
var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"](formValidationConfig, editFormEl);
editFormValidator.enableValidation();

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBOUIsQ0FBbkI7QUFFTyxJQUFNSixvQkFBb0IsR0FBRztBQUNoQ3lDLEVBQUFBLGFBQWEsRUFBRSxlQURpQjtBQUVoQ0UsRUFBQUEsb0JBQW9CLEVBQUUsZ0JBRlU7QUFHaENFLEVBQUFBLG1CQUFtQixFQUFFLHdCQUhXO0FBSWhDRSxFQUFBQSxlQUFlLEVBQUUseUJBSmU7QUFLaENFLEVBQUFBLFVBQVUsRUFBRTtBQUxvQixDQUE3QjtBQVFQLElBQU13RSxnQkFBZ0IsR0FBRyxJQUFJcEYsb0VBQUosQ0FBa0JyQyxvQkFBbEIsRUFBd0N1SCxTQUF4QyxDQUF6QjtBQUNBRSxnQkFBZ0IsQ0FBQ0MsZ0JBQWpCO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsSUFBSXRGLG9FQUFKLENBQWtCckMsb0JBQWxCLEVBQXdDd0gsVUFBeEMsQ0FBMUI7QUFDQUcsaUJBQWlCLENBQUNELGdCQUFsQjs7Ozs7Ozs7Ozs7QUNoS0E7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuaW1wb3J0IHsgZm9ybVZhbGlkYXRpb25Db25maWcgfSBmcm9tIFwiLi4vcGFnZXMvaW5kZXguanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZXMgZnJvbSAnLi9Qb3B1cFdpdGhJbWFnZXMnO1xuXG5jb25zdCBwcmV2aWV3SW1hZ2VNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtcHJldmlldy1tb2RhbFwiKTtcbmNvbnN0IHByZXZpZXdJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xuY29uc3QgcHJldmlld0ltYWdlQ2FwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctY2FwdGlvblwiKTtcblxuY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FyZCwgY2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IGNhcmQubmFtZTtcbiAgICAgICAgdGhpcy5fbGluayA9IGNhcmQubGluaztcbiAgICAgICAgdGhpcy5fYWx0ID0gY2FyZC5hbHQ7XG5cbiAgICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgfVxuXG4gICAgX2dldFRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxuICAgICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX3Bvc3RcIikuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgICB9XG5cbiAgICBfaGFuZGxlQWN0aXZlTGlrZUJ0bigpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX2xpa2UtYnRuXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1ncmlkX19saWtlLWJ0bl9hY3RpdmVcIik7XG4gICAgfVxuXG4gICAgX2RlbGV0ZUNhcmQoKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX190cmFzaC1idG5cIikuY2xvc2VzdChcIi5waG90by1ncmlkX19wb3N0XCIpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgLyogX2hhbmRsZVByZXZpZXdQaWN0dXJlKCkge1xuICAgICAgICBwcmV2aWV3SW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX2xpbms7XG4gICAgICAgIHByZXZpZXdJbWFnZUNhcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICAgICAgICBwcmV2aWV3SW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX25hbWU7XG5cbiAgICAgICAgb3Blbk1vZGFsKHByZXZpZXdJbWFnZU1vZGFsV2luZG93KTtcbiAgICB9Ki9cblxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgLy90aGlzIGlzIHdoZXJlIHdlIHNldCB1cCB0aGUgZXZlbnRzXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19waG90b1wiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLl9oYW5kbGVDYXJkQ2xpY2soeyBsaW5rOiB0aGlzLl9saW5rLCB0aXRsZTogdGhpcy5fbmFtZSB9KX0pO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ3JpZF9fbGlrZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgdGhpcy5faGFuZGxlQWN0aXZlTGlrZUJ0bigpIH0pO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ3JpZF9fdHJhc2gtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IHRoaXMuX2RlbGV0ZUNhcmQoKSB9KTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX3Bob3RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IHRoaXMuX2hhbmRsZVByZXZpZXdQaWN0dXJlKCkgfSk7XG5cbiAgICAgICAgLy9tb2RhbEFkZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkRm9ybVN1Ym1pdCk7XG4gICAgfVxuICAgIFxuICAgIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ3JpZF9fcGhvdG9cIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuX2xpbmt9KWA7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19jYXB0aW9uXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcblxuXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50ICkge1xuICAgICAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gY29uZmlnLmlucHV0U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGNvbmZpZy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcblxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIH1cblxuICAgIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JTcGFuID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjJyArIGlucHV0RWxlbWVudC5pZCArICctZXJyb3InXG4gICAgICAgICAgKTtcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICAgICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9XG5cbiAgICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVycm9yU3BhbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaW5wdXRFbGVtZW50LmlkICsgJy1lcnJvcicpO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhc1ZhbGlkSW5wdXRzKGlucHV0TGlzdCkge1xuICAgICAgICByZXR1cm4gaW5wdXRMaXN0LmV2ZXJ5KChpbnB1dEVsZW1lbnQpID0+IGlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCA9PT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgc3VibWl0QnV0dG9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNWYWxpZElucHV0cyhpbnB1dExpc3QpKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBpbnB1dExpc3QgPSBbLi4udGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKV07XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgICAgICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuXG5cblxuXG4iLCJjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsT25Fc2NhcGUgPSB0aGlzLl9jbG9zZU1vZGFsT25Fc2NhcGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfY2xvc2VNb2RhbE9uRXNjYXBlKGV2dCkge1xuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgcmV0dXJuIGNsb3NlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuXCIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX29wZW5cIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvc2VNb2RhbChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9jbG9zZU1vZGFsT25Fc2NhcGUpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2Nsb3NlTW9kYWxPbkVzY2FwZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDsiLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5cbmNsYXNzIFBvcHVwV2l0aEltYWdlcyBleHRlbmRzIFBvcHVwIHtcbiAgIG9wZW4oe2xpbmssIG5hbWV9KXtcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcHJldmlldy1jYXB0aW9uJykudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3ByZXZpZXctaW1hZ2UnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gbGluaztcbiAgICAgICAgaW1hZ2UuYWx0ID0gYGltYWdlIG9mICR7bmFtZX1gO1xuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEltYWdlczsiLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbE9uQ2xpY2spO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTW9kYWxPbkVzY2FwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWxPbkNsaWNrKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU1vZGFsT25Fc2NhcGUpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsT25DbGljayhldnQpIHtcbiAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9vcGVuXCIpKSB7XG4gICAgICAgIHJldHVybiBjbG9zZU1vZGFsKGV2dC50YXJnZXQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWxPbkVzY2FwZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICByZXR1cm4gY2xvc2VNb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5cIikpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZC5qcyc7XG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGNsb3NlTW9kYWxPbkNsaWNrLCBjbG9zZU1vZGFsT25Fc2NhcGV9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzLmpzXCI7XG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXG4gICAgICAgIGFsdDogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkxhdGVtYXJcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgIH0sXG5dO1xuXG4vLyA9PT09PVxuLy8gV3JhcHBlcnNcbi8vID09PT09XG5jb25zdCBlZGl0TW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLWVkaXQtbW9kYWxcIik7XG5jb25zdCBwcmV2aWV3SW1hZ2VNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtcHJldmlldy1tb2RhbFwiKTtcbmNvbnN0IG1vZGFsRWRpdEZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1lZGl0LWZvcm1cIik7XG5jb25zdCBwbGFjZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19nYWxsZXJ5XCIpO1xuY29uc3QgYWRkTW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLWFkZC1tb2RhbFwiKTtcbmNvbnN0IG1vZGFsQWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtYWRkLWZvcm1cIik7XG5cblxuXG5cbi8vID09PT09XG4vLyBCdXR0b25zXG4vLyA9PT09PVxuY29uc3QgbW9kYWxFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWVkaXQtYnRuXCIpO1xuY29uc3QgZWRpdE1vZGFsQ2xvc2VCdG4gPSBlZGl0TW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1jbG9zZS1idG5cIik7XG5jb25zdCBhZGRNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcbmNvbnN0IGFkZE1vZGFsQ2xvc2VCdG4gPSBhZGRNb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jbG9zZS1idG5cIik7XG5jb25zdCBwcmV2aWV3SW1hZ2VDbG9zZUJ0biA9IHByZXZpZXdJbWFnZU1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlldy1jbG9zZS1idG5cIik7XG5jb25zdCBzYXZlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zYXZlLWJ0blwiKTtcbmNvbnN0IGNyZWF0ZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY3JlYXRlLWJ0blwiKTtcblxuXG4vLyA9PT09PVxuLy8gSW5wdXRzXG4vLyA9PT09PVxuY29uc3QgbW9kYWxOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW5hbWUtaW5wdXRcIik7XG5jb25zdCBtb2RhbEJpb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iaW8taW5wdXRcIik7XG5jb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcbmNvbnN0IHByb2ZpbGVCaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Jpb1wiKTtcbmNvbnN0IHBvc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2lucHV0LXRleHRfdGl0bGVcIik7IFxuY29uc3QgcG9zdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbnB1dC10ZXh0X2xpbmtcIik7IFxuXG5cbi8vID09PT09XG4vLyBUZW1wbGF0ZXNcbi8vID09PT09XG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIikuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX3Bvc3RcIik7XG5cbi8vID09PT09XG4vLyBIYW5kbGVyc1xuLy8gPT09PT1cblxuXG4vL1N1Ym1pdHMgZWRpdGVkIHByb2ZpbGVcbmNvbnN0IHN1Ym1pdEVkaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IG1vZGFsTmFtZUlucHV0LnZhbHVlO1xuICAgIHByb2ZpbGVCaW8udGV4dENvbnRlbnQgPSBtb2RhbEJpb0lucHV0LnZhbHVlO1xufTtcblxuLy9GaWxscyBpbiBpbmZvcm1hdGlvbiBpbnB1dHRlZFxuZnVuY3Rpb24gb3BlbkVkaXRNb2RhbCgpIHtcbiAgICBtb2RhbE5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVOYW1lLnRleHRDb250ZW50O1xuICAgIG1vZGFsQmlvSW5wdXQudmFsdWUgPSBwcm9maWxlQmlvLnRleHRDb250ZW50O1xuICAgIG9wZW5Nb2RhbChlZGl0TW9kYWxXaW5kb3cpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDYXJkKGNhcmQsIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChjYXJkLCAnI2NhcmQtdGVtcGxhdGUnKS5nZW5lcmF0ZUNhcmQoKTtcbiAgICAvL2FwcGVuZCBpdCB0byBsaXN0XG4gICAgY29udGFpbmVyLmFwcGVuZChuZXdDYXJkKTtcbn1cblxuZnVuY3Rpb24gYWRkUmVuZGVyQ2FyZChjYXJkLCBjb250YWluZXIpIHtcbiAgICAvL2FwcGVuZCBpdCB0byBsaXN0XG4gICAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKGNhcmQsICcjY2FyZC10ZW1wbGF0ZScpLmdlbmVyYXRlQ2FyZCgpO1xuICAgIGNvbnRhaW5lci5wcmVwZW5kKG5ld0NhcmQpO1xufVxuXG5mdW5jdGlvbiBhZGRGb3JtU3VibWl0KGV2dCkge1xuICAgIGNyZWF0ZU1vZGFsQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjcmVhdGVNb2RhbEJ0bi5jbGFzc0xpc3QuYWRkKFwicG9wdXBfX2J1dHRvbl9kaXNhYmxlZFwiKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjYXJkRGF0YSA9IHtcbiAgICAgICAgbmFtZTogcG9zdFRpdGxlLnZhbHVlLFxuICAgICAgICBsaW5rOiBwb3N0TGluay52YWx1ZSxcbiAgICAgIH1cbiAgICAgIGFkZFJlbmRlckNhcmQoY2FyZERhdGEsIHBsYWNlc0xpc3QpO1xuICAgIGV2dC50YXJnZXQucmVzZXQoKTtcbn1cblxubW9kYWxBZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkRm9ybVN1Ym1pdCk7XG5cbi8vID09PT09XG4vLyBFdmVudCBMaXN0ZW5lcnNcbi8vID09PT09XG5tb2RhbEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0TW9kYWwpO1xuZWRpdE1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlTW9kYWwoZWRpdE1vZGFsV2luZG93KSk7XG5tb2RhbEVkaXRGb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEVkaXRGb3JtKTtcbmFkZE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBvcGVuTW9kYWwoYWRkTW9kYWxXaW5kb3cpKTtcbmFkZE1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlTW9kYWwoYWRkTW9kYWxXaW5kb3cpKTtcbnByZXZpZXdJbWFnZUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZU1vZGFsKHByZXZpZXdJbWFnZU1vZGFsV2luZG93KSk7XG5zYXZlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlTW9kYWwoZWRpdE1vZGFsV2luZG93KSk7XG5jcmVhdGVNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VNb2RhbChhZGRNb2RhbFdpbmRvdykpO1xuXG5pbml0aWFsQ2FyZHMuZm9yRWFjaChmdW5jdGlvbiAoY2FyZEVsZW1lbnQpIHtcbiAgICByZW5kZXJDYXJkKGNhcmRFbGVtZW50LCBwbGFjZXNMaXN0KTtcbn0pO1xuXG4vLz09PT09XG4vL1ZhbGlkYXRpb25cbi8vPT09PT1cbmNvbnN0IGFkZEZvcm1FbCA9IGFkZE1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xuY29uc3QgZWRpdEZvcm1FbCA9IGVkaXRNb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcblxuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0aW9uQ29uZmlnID0ge1xuICAgIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fYnV0dG9uXCIsXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnV0dG9uX2Rpc2FibGVkXCIsXG4gICAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gICAgZXJyb3JDbGFzczogXCJwb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxufVxuXG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRpb25Db25maWcsIGFkZEZvcm1FbCk7XG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdGlvbkNvbmZpZywgZWRpdEZvcm1FbCk7XG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJmb3JtVmFsaWRhdGlvbkNvbmZpZyIsIlBvcHVwV2l0aEltYWdlcyIsInByZXZpZXdJbWFnZU1vZGFsV2luZG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJldmlld0ltYWdlRWxlbWVudCIsInByZXZpZXdJbWFnZUNhcHRpb24iLCJDYXJkIiwiY2FyZCIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl9hbHQiLCJhbHQiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VzdCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aXRsZSIsIl9oYW5kbGVBY3RpdmVMaWtlQnRuIiwiX2RlbGV0ZUNhcmQiLCJfaGFuZGxlUHJldmlld1BpY3R1cmUiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInRleHRDb250ZW50IiwiRm9ybVZhbGlkYXRvciIsImNvbmZpZyIsImZvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JTcGFuIiwiaWQiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJfaGlkZUlucHV0RXJyb3IiLCJpbnB1dExpc3QiLCJldmVyeSIsInN1Ym1pdEJ1dHRvbiIsIl9oYXNWYWxpZElucHV0cyIsImRpc2FibGVkIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsIl9jbG9zZU1vZGFsT25Fc2NhcGUiLCJiaW5kIiwiZXZ0Iiwia2V5IiwidGFyZ2V0IiwiY29udGFpbnMiLCJpbWFnZSIsInNyYyIsIm1vZGFsIiwiY2xvc2VNb2RhbE9uQ2xpY2siLCJjbG9zZU1vZGFsT25Fc2NhcGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5pdGlhbENhcmRzIiwiZWRpdE1vZGFsV2luZG93IiwibW9kYWxFZGl0Rm9ybUVsZW1lbnQiLCJwbGFjZXNMaXN0IiwiYWRkTW9kYWxXaW5kb3ciLCJtb2RhbEFkZEZvcm0iLCJtb2RhbEVkaXRCdG4iLCJlZGl0TW9kYWxDbG9zZUJ0biIsImFkZE1vZGFsQnV0dG9uIiwiYWRkTW9kYWxDbG9zZUJ0biIsInByZXZpZXdJbWFnZUNsb3NlQnRuIiwic2F2ZU1vZGFsQnRuIiwiY3JlYXRlTW9kYWxCdG4iLCJtb2RhbE5hbWVJbnB1dCIsIm1vZGFsQmlvSW5wdXQiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVCaW8iLCJwb3N0VGl0bGUiLCJwb3N0TGluayIsImNhcmRUZW1wbGF0ZSIsInN1Ym1pdEVkaXRGb3JtIiwidmFsdWUiLCJvcGVuRWRpdE1vZGFsIiwicmVuZGVyQ2FyZCIsImNvbnRhaW5lciIsIm5ld0NhcmQiLCJnZW5lcmF0ZUNhcmQiLCJhcHBlbmQiLCJhZGRSZW5kZXJDYXJkIiwicHJlcGVuZCIsImFkZEZvcm1TdWJtaXQiLCJjYXJkRGF0YSIsInJlc2V0IiwiYWRkRm9ybUVsIiwiZWRpdEZvcm1FbCIsImFkZEZvcm1WYWxpZGF0b3IiLCJlbmFibGVWYWxpZGF0aW9uIiwiZWRpdEZvcm1WYWxpZGF0b3IiXSwic291cmNlUm9vdCI6IiJ9