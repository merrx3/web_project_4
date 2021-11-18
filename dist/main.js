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
      this._element.querySelector('.elements__image').addEventListener('click', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBOUIsQ0FBbkI7QUFFTyxJQUFNSixvQkFBb0IsR0FBRztBQUNoQ3lDLEVBQUFBLGFBQWEsRUFBRSxlQURpQjtBQUVoQ0UsRUFBQUEsb0JBQW9CLEVBQUUsZ0JBRlU7QUFHaENFLEVBQUFBLG1CQUFtQixFQUFFLHdCQUhXO0FBSWhDRSxFQUFBQSxlQUFlLEVBQUUseUJBSmU7QUFLaENFLEVBQUFBLFVBQVUsRUFBRTtBQUxvQixDQUE3QjtBQVFQLElBQU13RSxnQkFBZ0IsR0FBRyxJQUFJcEYsb0VBQUosQ0FBa0JyQyxvQkFBbEIsRUFBd0N1SCxTQUF4QyxDQUF6QjtBQUNBRSxnQkFBZ0IsQ0FBQ0MsZ0JBQWpCO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsSUFBSXRGLG9FQUFKLENBQWtCckMsb0JBQWxCLEVBQXdDd0gsVUFBeEMsQ0FBMUI7QUFDQUcsaUJBQWlCLENBQUNELGdCQUFsQjs7Ozs7Ozs7Ozs7QUNoS0E7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuaW1wb3J0IHsgZm9ybVZhbGlkYXRpb25Db25maWcgfSBmcm9tIFwiLi4vcGFnZXMvaW5kZXguanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZXMgZnJvbSAnLi9Qb3B1cFdpdGhJbWFnZXMnO1xuXG5jb25zdCBwcmV2aWV3SW1hZ2VNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtcHJldmlldy1tb2RhbFwiKTtcbmNvbnN0IHByZXZpZXdJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xuY29uc3QgcHJldmlld0ltYWdlQ2FwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctY2FwdGlvblwiKTtcblxuY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FyZCwgY2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IGNhcmQubmFtZTtcbiAgICAgICAgdGhpcy5fbGluayA9IGNhcmQubGluaztcbiAgICAgICAgdGhpcy5fYWx0ID0gY2FyZC5hbHQ7XG5cbiAgICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgfVxuXG4gICAgX2dldFRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxuICAgICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX3Bvc3RcIikuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgICB9XG5cbiAgICBfaGFuZGxlQWN0aXZlTGlrZUJ0bigpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX2xpa2UtYnRuXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1ncmlkX19saWtlLWJ0bl9hY3RpdmVcIik7XG4gICAgfVxuXG4gICAgX2RlbGV0ZUNhcmQoKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX190cmFzaC1idG5cIikuY2xvc2VzdChcIi5waG90by1ncmlkX19wb3N0XCIpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgLyogX2hhbmRsZVByZXZpZXdQaWN0dXJlKCkge1xuICAgICAgICBwcmV2aWV3SW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX2xpbms7XG4gICAgICAgIHByZXZpZXdJbWFnZUNhcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICAgICAgICBwcmV2aWV3SW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX25hbWU7XG5cbiAgICAgICAgb3Blbk1vZGFsKHByZXZpZXdJbWFnZU1vZGFsV2luZG93KTtcbiAgICB9Ki9cblxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgLy90aGlzIGlzIHdoZXJlIHdlIHNldCB1cCB0aGUgZXZlbnRzXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19pbWFnZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3RoaXMuX2hhbmRsZUNhcmRDbGljayh7IGxpbms6IHRoaXMuX2xpbmssIHRpdGxlOiB0aGlzLl9uYW1lIH0pfSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19saWtlLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLl9oYW5kbGVBY3RpdmVMaWtlQnRuKCkgfSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX190cmFzaC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgdGhpcy5fZGVsZXRlQ2FyZCgpIH0pO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ3JpZF9fcGhvdG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgdGhpcy5faGFuZGxlUHJldmlld1BpY3R1cmUoKSB9KTtcblxuICAgICAgICAvL21vZGFsQWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRGb3JtU3VibWl0KTtcbiAgICB9XG4gICAgXG4gICAgZ2VuZXJhdGVDYXJkKCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19waG90b1wiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5fbGlua30pYDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX2NhcHRpb25cIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQgKSB7XG4gICAgICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICAgICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gY29uZmlnLmlucHV0RXJyb3JDbGFzcztcbiAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlcnJvclNwYW4gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyMnICsgaW5wdXRFbGVtZW50LmlkICsgJy1lcnJvcidcbiAgICAgICAgICApO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvclNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICAgICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIH1cblxuICAgIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JTcGFuID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBpbnB1dEVsZW1lbnQuaWQgKyAnLWVycm9yJyk7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBlcnJvclNwYW4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFzVmFsaWRJbnB1dHMoaW5wdXRMaXN0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dExpc3QuZXZlcnkoKGlucHV0RWxlbWVudCkgPT4gaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc1ZhbGlkSW5wdXRzKGlucHV0TGlzdCkpIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TGlzdCA9IFsuLi50aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgICAgIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG5cblxuXG5cbiIsImNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWxPbkVzY2FwZSA9IHRoaXMuX2Nsb3NlTW9kYWxPbkVzY2FwZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9jbG9zZU1vZGFsT25Fc2NhcGUoZXZ0KSB7XG4gICAgICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xvc2VNb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5cIikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfb3BlblwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9zZU1vZGFsKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2Nsb3NlTW9kYWxPbkVzY2FwZSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fY2xvc2VNb2RhbE9uRXNjYXBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwOyIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcblxuY2xhc3MgUG9wdXBXaXRoSW1hZ2VzIGV4dGVuZHMgUG9wdXAge1xuICAgb3Blbih7bGluaywgbmFtZX0pe1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19wcmV2aWV3LWNhcHRpb24nKS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcHJldmlldy1pbWFnZScpO1xuICAgICAgICBpbWFnZS5zcmMgPSBsaW5rO1xuICAgICAgICBpbWFnZS5hbHQgPSBgaW1hZ2Ugb2YgJHtuYW1lfWA7XG4gICAgICAgIHN1cGVyLm9wZW4oKTtcbiAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoSW1hZ2VzOyIsImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsT25DbGljayk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNb2RhbE9uRXNjYXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlblwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbE9uQ2xpY2spO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTW9kYWxPbkVzY2FwZSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWxPbkNsaWNrKGV2dCkge1xuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX29wZW5cIikpIHtcbiAgICAgICAgcmV0dXJuIGNsb3NlTW9kYWwoZXZ0LnRhcmdldCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbE9uRXNjYXBlKGV2dCkge1xuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHJldHVybiBjbG9zZU1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlblwiKSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCwgY2xvc2VNb2RhbE9uQ2xpY2ssIGNsb3NlTW9kYWxPbkVzY2FwZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHMuanNcIjtcblxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIixcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXG4gICAgICAgIGFsdDogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXG4gICAgICAgIGFsdDogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbl07XG5cbi8vID09PT09XG4vLyBXcmFwcGVyc1xuLy8gPT09PT1cbmNvbnN0IGVkaXRNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtZWRpdC1tb2RhbFwiKTtcbmNvbnN0IHByZXZpZXdJbWFnZU1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1wcmV2aWV3LW1vZGFsXCIpO1xuY29uc3QgbW9kYWxFZGl0Rm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWVkaXQtZm9ybVwiKTtcbmNvbnN0IHBsYWNlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX2dhbGxlcnlcIik7XG5jb25zdCBhZGRNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtYWRkLW1vZGFsXCIpO1xuY29uc3QgbW9kYWxBZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1hZGQtZm9ybVwiKTtcblxuXG5cblxuLy8gPT09PT1cbi8vIEJ1dHRvbnNcbi8vID09PT09XG5jb25zdCBtb2RhbEVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1idG5cIik7XG5jb25zdCBlZGl0TW9kYWxDbG9zZUJ0biA9IGVkaXRNb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWNsb3NlLWJ0blwiKTtcbmNvbnN0IGFkZE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xuY29uc3QgYWRkTW9kYWxDbG9zZUJ0biA9IGFkZE1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNsb3NlLWJ0blwiKTtcbmNvbnN0IHByZXZpZXdJbWFnZUNsb3NlQnRuID0gcHJldmlld0ltYWdlTW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcihcIiNwcmV2aWV3LWNsb3NlLWJ0blwiKTtcbmNvbnN0IHNhdmVNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3NhdmUtYnRuXCIpO1xuY29uc3QgY3JlYXRlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jcmVhdGUtYnRuXCIpO1xuXG5cbi8vID09PT09XG4vLyBJbnB1dHNcbi8vID09PT09XG5jb25zdCBtb2RhbE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtbmFtZS1pbnB1dFwiKTtcbmNvbnN0IG1vZGFsQmlvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJpby1pbnB1dFwiKTtcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuY29uc3QgcHJvZmlsZUJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYmlvXCIpO1xuY29uc3QgcG9zdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW5wdXQtdGV4dF90aXRsZVwiKTsgXG5jb25zdCBwb3N0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2lucHV0LXRleHRfbGlua1wiKTsgXG5cblxuLy8gPT09PT1cbi8vIFRlbXBsYXRlc1xuLy8gPT09PT1cbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ3JpZF9fcG9zdFwiKTtcblxuLy8gPT09PT1cbi8vIEhhbmRsZXJzXG4vLyA9PT09PVxuXG5cbi8vU3VibWl0cyBlZGl0ZWQgcHJvZmlsZVxuY29uc3Qgc3VibWl0RWRpdEZvcm0gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gbW9kYWxOYW1lSW5wdXQudmFsdWU7XG4gICAgcHJvZmlsZUJpby50ZXh0Q29udGVudCA9IG1vZGFsQmlvSW5wdXQudmFsdWU7XG59O1xuXG4vL0ZpbGxzIGluIGluZm9ybWF0aW9uIGlucHV0dGVkXG5mdW5jdGlvbiBvcGVuRWRpdE1vZGFsKCkge1xuICAgIG1vZGFsTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7XG4gICAgbW9kYWxCaW9JbnB1dC52YWx1ZSA9IHByb2ZpbGVCaW8udGV4dENvbnRlbnQ7XG4gICAgb3Blbk1vZGFsKGVkaXRNb2RhbFdpbmRvdyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNhcmQoY2FyZCwgY29udGFpbmVyKSB7XG4gICAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKGNhcmQsICcjY2FyZC10ZW1wbGF0ZScpLmdlbmVyYXRlQ2FyZCgpO1xuICAgIC8vYXBwZW5kIGl0IHRvIGxpc3RcbiAgICBjb250YWluZXIuYXBwZW5kKG5ld0NhcmQpO1xufVxuXG5mdW5jdGlvbiBhZGRSZW5kZXJDYXJkKGNhcmQsIGNvbnRhaW5lcikge1xuICAgIC8vYXBwZW5kIGl0IHRvIGxpc3RcbiAgICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoY2FyZCwgJyNjYXJkLXRlbXBsYXRlJykuZ2VuZXJhdGVDYXJkKCk7XG4gICAgY29udGFpbmVyLnByZXBlbmQobmV3Q2FyZCk7XG59XG5cbmZ1bmN0aW9uIGFkZEZvcm1TdWJtaXQoZXZ0KSB7XG4gICAgY3JlYXRlTW9kYWxCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNyZWF0ZU1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9fYnV0dG9uX2Rpc2FibGVkXCIpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNhcmREYXRhID0ge1xuICAgICAgICBuYW1lOiBwb3N0VGl0bGUudmFsdWUsXG4gICAgICAgIGxpbms6IHBvc3RMaW5rLnZhbHVlLFxuICAgICAgfVxuICAgICAgYWRkUmVuZGVyQ2FyZChjYXJkRGF0YSwgcGxhY2VzTGlzdCk7XG4gICAgZXZ0LnRhcmdldC5yZXNldCgpO1xufVxuXG5tb2RhbEFkZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRGb3JtU3VibWl0KTtcblxuLy8gPT09PT1cbi8vIEV2ZW50IExpc3RlbmVyc1xuLy8gPT09PT1cbm1vZGFsRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRNb2RhbCk7XG5lZGl0TW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VNb2RhbChlZGl0TW9kYWxXaW5kb3cpKTtcbm1vZGFsRWRpdEZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0RWRpdEZvcm0pO1xuYWRkTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG9wZW5Nb2RhbChhZGRNb2RhbFdpbmRvdykpO1xuYWRkTW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VNb2RhbChhZGRNb2RhbFdpbmRvdykpO1xucHJldmlld0ltYWdlQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlTW9kYWwocHJldmlld0ltYWdlTW9kYWxXaW5kb3cpKTtcbnNhdmVNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VNb2RhbChlZGl0TW9kYWxXaW5kb3cpKTtcbmNyZWF0ZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZU1vZGFsKGFkZE1vZGFsV2luZG93KSk7XG5cbmluaXRpYWxDYXJkcy5mb3JFYWNoKGZ1bmN0aW9uIChjYXJkRWxlbWVudCkge1xuICAgIHJlbmRlckNhcmQoY2FyZEVsZW1lbnQsIHBsYWNlc0xpc3QpO1xufSk7XG5cbi8vPT09PT1cbi8vVmFsaWRhdGlvblxuLy89PT09PVxuY29uc3QgYWRkRm9ybUVsID0gYWRkTW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XG5jb25zdCBlZGl0Rm9ybUVsID0gZWRpdE1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xuXG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRpb25Db25maWcgPSB7XG4gICAgaW5wdXRTZWxlY3RvcjogXCIucG9wdXBfX2lucHV0XCIsXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19idXR0b25cIixcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcbiAgICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXG59XG5cbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdGlvbkNvbmZpZywgYWRkRm9ybUVsKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0aW9uQ29uZmlnLCBlZGl0Rm9ybUVsKTtcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImZvcm1WYWxpZGF0aW9uQ29uZmlnIiwiUG9wdXBXaXRoSW1hZ2VzIiwicHJldmlld0ltYWdlTW9kYWxXaW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2aWV3SW1hZ2VFbGVtZW50IiwicHJldmlld0ltYWdlQ2FwdGlvbiIsIkNhcmQiLCJjYXJkIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX2FsdCIsImFsdCIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiY2FyZEVsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjbG9zZXN0IiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRpdGxlIiwiX2hhbmRsZUFjdGl2ZUxpa2VCdG4iLCJfZGVsZXRlQ2FyZCIsIl9oYW5kbGVQcmV2aWV3UGljdHVyZSIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwidGV4dENvbnRlbnQiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwiZm9ybUVsZW1lbnQiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJlcnJvclNwYW4iLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsIl9oaWRlSW5wdXRFcnJvciIsImlucHV0TGlzdCIsImV2ZXJ5Iiwic3VibWl0QnV0dG9uIiwiX2hhc1ZhbGlkSW5wdXRzIiwiZGlzYWJsZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2Nsb3NlTW9kYWxPbkVzY2FwZSIsImJpbmQiLCJldnQiLCJrZXkiLCJ0YXJnZXQiLCJjb250YWlucyIsImltYWdlIiwic3JjIiwibW9kYWwiLCJjbG9zZU1vZGFsT25DbGljayIsImNsb3NlTW9kYWxPbkVzY2FwZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbml0aWFsQ2FyZHMiLCJlZGl0TW9kYWxXaW5kb3ciLCJtb2RhbEVkaXRGb3JtRWxlbWVudCIsInBsYWNlc0xpc3QiLCJhZGRNb2RhbFdpbmRvdyIsIm1vZGFsQWRkRm9ybSIsIm1vZGFsRWRpdEJ0biIsImVkaXRNb2RhbENsb3NlQnRuIiwiYWRkTW9kYWxCdXR0b24iLCJhZGRNb2RhbENsb3NlQnRuIiwicHJldmlld0ltYWdlQ2xvc2VCdG4iLCJzYXZlTW9kYWxCdG4iLCJjcmVhdGVNb2RhbEJ0biIsIm1vZGFsTmFtZUlucHV0IiwibW9kYWxCaW9JbnB1dCIsInByb2ZpbGVOYW1lIiwicHJvZmlsZUJpbyIsInBvc3RUaXRsZSIsInBvc3RMaW5rIiwiY2FyZFRlbXBsYXRlIiwic3VibWl0RWRpdEZvcm0iLCJ2YWx1ZSIsIm9wZW5FZGl0TW9kYWwiLCJyZW5kZXJDYXJkIiwiY29udGFpbmVyIiwibmV3Q2FyZCIsImdlbmVyYXRlQ2FyZCIsImFwcGVuZCIsImFkZFJlbmRlckNhcmQiLCJwcmVwZW5kIiwiYWRkRm9ybVN1Ym1pdCIsImNhcmREYXRhIiwicmVzZXQiLCJhZGRGb3JtRWwiLCJlZGl0Rm9ybUVsIiwiYWRkRm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJlZGl0Rm9ybVZhbGlkYXRvciJdLCJzb3VyY2VSb290IjoiIn0=