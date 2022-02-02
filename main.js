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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(card, cardSelector, handleCardClick) {
    _classCallCheck(this, Card);

    this._name = card.name;
    this._image = card.image;
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
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      //this is where we set up the events
      this._element.querySelector(".photo-grid__like-btn").addEventListener("click", function () {
        _this._handleActiveLikeBtn();
      });

      this._element.querySelector(".photo-grid__trash-btn").addEventListener("click", function () {
        _this._deleteCard();
      });

      this._element.querySelector(".photo-grid__photo").addEventListener("click", function () {
        return _this._handleCardClick(_this._image, _this._name);
      });
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();

      this._setEventListeners();

      this._element.querySelector(".photo-grid__photo").style.backgroundImage = "url(".concat(this._image, ")");
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
    this._closeModalOnClick = this._closeModalOnClick.bind(this);
    this._closeModalOnEscape = this._closeModalOnEscape.bind(this);
  }

  _createClass(Popup, [{
    key: "_closeModalOnClick",
    value: function _closeModalOnClick(evt) {
      if (evt.target.classList.contains("modal__preview-image") || evt.target.classList.contains("modal__close-img")) {
        return this.close();
      }
    }
  }, {
    key: "_closeModalOnEscape",
    value: function _closeModalOnEscape(evt) {
      if (evt.key === "Escape") {
        return this.close();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this._popupElement.classList.add("modal_open");

      document.addEventListener("click", this._closeModalOnClick);
      document.addEventListener("keydown", this._closeModalOnEscape);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove("modal_open");

      document.removeEventListener("click", this._closeModalOnClick);
      document.removeEventListener("keydown", this._closeModalOnEscape);
    }
  }]);

  return Popup;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
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



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref, popupSelector) {
    var _this;

    var handleFormSubmit = _ref.handleFormSubmit;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._popupForm = _this._popupElement.querySelector('.popup__form');
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._inputList = this._popupElement.querySelectorAll('.popup__input');
      this._inputValues = {};

      this._inputList.forEach(function (input) {
        return _this2._inputValues[input.name.toLowerCase()] = input.value;
      });

      return this._inputValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      this._popupForm.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this3._handleFormSubmit(_this3._getInputValues());

        _this3.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      this._popupForm.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithForm);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
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



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._popupImage = _this._popupElement.querySelector('.modal__preview-image');
    _this._popupCaption = _this._popupElement.querySelector('.modal__preview-caption');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var name = _ref.name,
          image = _ref.image;
      this._popupImage.src = name;
      this._popupImage.alt = name;
      this._popupCaption.textContent = image;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithImage);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this._container.innerHTML = "";
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._clear();

      this._renderedItems.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var userName = _ref.userName,
        userJob = _ref.userJob;

    _classCallCheck(this, UserInfo);

    this._userName = userName;
    this._userJob = userJob;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._userName.textContent,
        job: this._userJob.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
          job = _ref2.job;
      this._userName.textContent = name;
      this._userJob.textContent = job;
    }
  }]);

  return UserInfo;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "editModalWindowSelector": () => (/* binding */ editModalWindowSelector),
/* harmony export */   "editModalWindow": () => (/* binding */ editModalWindow),
/* harmony export */   "previewImageModalWindow": () => (/* binding */ previewImageModalWindow),
/* harmony export */   "modalEditFormElement": () => (/* binding */ modalEditFormElement),
/* harmony export */   "placesList": () => (/* binding */ placesList),
/* harmony export */   "addModalWindowSelector": () => (/* binding */ addModalWindowSelector),
/* harmony export */   "addModalWindow": () => (/* binding */ addModalWindow),
/* harmony export */   "modalAddForm": () => (/* binding */ modalAddForm),
/* harmony export */   "addFormEl": () => (/* binding */ addFormEl),
/* harmony export */   "editFormEl": () => (/* binding */ editFormEl),
/* harmony export */   "modalEditBtn": () => (/* binding */ modalEditBtn),
/* harmony export */   "editModalCloseBtn": () => (/* binding */ editModalCloseBtn),
/* harmony export */   "addModalButton": () => (/* binding */ addModalButton),
/* harmony export */   "addModalCloseBtn": () => (/* binding */ addModalCloseBtn),
/* harmony export */   "previewImageCloseBtn": () => (/* binding */ previewImageCloseBtn),
/* harmony export */   "saveModalBtn": () => (/* binding */ saveModalBtn),
/* harmony export */   "createModalBtn": () => (/* binding */ createModalBtn),
/* harmony export */   "modalNameInput": () => (/* binding */ modalNameInput),
/* harmony export */   "modalBioInput": () => (/* binding */ modalBioInput),
/* harmony export */   "profileName": () => (/* binding */ profileName),
/* harmony export */   "profileBio": () => (/* binding */ profileBio),
/* harmony export */   "postTitle": () => (/* binding */ postTitle),
/* harmony export */   "postLink": () => (/* binding */ postLink),
/* harmony export */   "cardTemplate": () => (/* binding */ cardTemplate),
/* harmony export */   "formValidationConfig": () => (/* binding */ formValidationConfig)
/* harmony export */ });
// ====================  //
//    Initial Cards      //
// ====================  //
var initialCards = [{
  name: "Yosemite Valley",
  image: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  alt: ""
}, {
  name: "Lake Louise",
  image: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  alt: ""
}, {
  name: "Bald Mountains",
  image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  alt: ""
}, {
  name: "Latemar",
  image: "https://code.s3.yandex.net/web-code/latemar.jpg",
  alt: ""
}, {
  name: "Vanoise National Park",
  image: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  alt: ""
}, {
  name: "Lago di Braies",
  image: "https://code.s3.yandex.net/web-code/lago.jpg",
  alt: ""
}]; // ====================  //
//       Wrappers        //
// ====================  //

var editModalWindowSelector = "#js-edit-modal";
var editModalWindow = document.querySelector(editModalWindowSelector);
var previewImageModalWindow = document.querySelector("#js-preview-modal");
var modalEditFormElement = document.querySelector("#modal-edit-form");
var placesList = ".photo-grid__gallery";
var addModalWindowSelector = "#js-add-modal";
var addModalWindow = document.querySelector(addModalWindowSelector);
var modalAddForm = document.querySelector("#modal-add-form");
var addFormEl = addModalWindow.querySelector('.popup__form');
var editFormEl = editModalWindow.querySelector('.popup__form'); // ====================  //
//        Buttons        //
// ====================  //

var modalEditBtn = document.querySelector("#profile-edit-btn");
var editModalCloseBtn = editModalWindow.querySelector("#modal-close-btn");
var addModalButton = document.querySelector(".profile__add-button");
var addModalCloseBtn = addModalWindow.querySelector("#add-close-btn");
var previewImageCloseBtn = previewImageModalWindow.querySelector("#preview-close-btn");
var saveModalBtn = document.querySelector(".modal__save-btn");
var createModalBtn = document.querySelector(".modal__create-btn"); // ====================  //
//        Inputs         //
// ====================  //

var modalNameInput = document.querySelector(".modal-name-input");
var modalBioInput = document.querySelector(".modal-bio-input");
var profileName = document.querySelector(".profile__name");
var profileBio = document.querySelector(".profile__bio");
var postTitle = document.querySelector(".modal__input-text_title");
var postLink = document.querySelector(".modal__input-text_link"); // ====================  //
//       Templates       //
// ====================  //

var cardTemplate = document.querySelector("#card-template").content.querySelector(".photo-grid__post");
var formValidationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");







 // Create new instances

var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.formValidationConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.addFormEl);
var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.formValidationConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.editFormEl);

function renderCard(item) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"](item, '#card-template', function (name, image) {
    imagePopup.open({
      name: name,
      image: image
    });
  });
  var cardElement = card.generateCard();
  defaultCardList.addItem(cardElement);
}

;
var defaultCardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  items: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.initialCards,
  renderer: function renderer(item) {
    renderCard(item);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.placesList);
var imagePopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_2__["default"]('#js-preview-modal');
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  userName: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.profileName,
  userJob: _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.profileBio
});
var editPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  handleFormSubmit: function handleFormSubmit(_ref) {
    var bio = _ref.bio,
        name = _ref.name;
    userInfo.setUserInfo({
      name: name,
      job: bio
    });
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.editModalWindowSelector);
var addCardPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  handleFormSubmit: function handleFormSubmit(item) {
    renderCard(item);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.addModalWindowSelector); // Setup classes

defaultCardList.renderItems();
editPopup.setEventListeners();
addCardPopup.setEventListeners();
addFormValidator.enableValidation();
editFormValidator.enableValidation(); // handle other

_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.modalEditBtn.addEventListener('click', function () {
  var _userInfo$getUserInfo = userInfo.getUserInfo(),
      name = _userInfo$getUserInfo.name,
      job = _userInfo$getUserInfo.job;

  _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.modalNameInput.value = name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.modalBioInput.value = job;
  editPopup.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_7__.addModalButton.addEventListener('click', function () {
  addCardPopup.open();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTlCLDhFQUFBLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0MsOEJBQXNCdUIsUUFBUSxDQUFDUSxXQUFULEVBQXRCO0FBQUEsTUFBUWxKLElBQVIseUJBQVFBLElBQVI7QUFBQSxNQUFjdUcsR0FBZCx5QkFBY0EsR0FBZDs7QUFDQW1CLEVBQUFBLHFFQUFBLEdBQXVCMUgsSUFBdkI7QUFDQTJILEVBQUFBLG9FQUFBLEdBQXNCcEIsR0FBdEI7QUFFQW9DLEVBQUFBLFNBQVMsQ0FBQ0wsSUFBVjtBQUNELENBTkQ7QUFRQWpCLGdGQUFBLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07QUFDN0N5QixFQUFBQSxZQUFZLENBQUNSLElBQWI7QUFDRCxDQUZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmQsIGNhcmRTZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBjYXJkLm5hbWU7XG4gICAgICAgIHRoaXMuX2ltYWdlID0gY2FyZC5pbWFnZTtcbiAgICAgICAgdGhpcy5fYWx0ID0gY2FyZC5hbHQ7XG5cbiAgICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgfVxuXG4gICAgX2dldFRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxuICAgICAgICAuY29udGVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19wb3N0XCIpXG4gICAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICAgIH1cblxuICAgIF9oYW5kbGVBY3RpdmVMaWtlQnRuKCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ3JpZF9fbGlrZS1idG5cIikuY2xhc3NMaXN0LnRvZ2dsZShcInBob3RvLWdyaWRfX2xpa2UtYnRuX2FjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBfZGVsZXRlQ2FyZCgpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX3RyYXNoLWJ0blwiKS5jbG9zZXN0KFwiLnBob3RvLWdyaWRfX3Bvc3RcIikucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAvL3RoaXMgaXMgd2hlcmUgd2Ugc2V0IHVwIHRoZSBldmVudHNcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX2xpa2UtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IHRoaXMuX2hhbmRsZUFjdGl2ZUxpa2VCdG4oKSB9KTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX3RyYXNoLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLl9kZWxldGVDYXJkKCkgfSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19waG90b1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX2ltYWdlLCB0aGlzLl9uYW1lKSk7XG4gICAgfVxuICAgIFxuICAgIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX3Bob3RvXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9pbWFnZX0pYDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX2NhcHRpb25cIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQgKSB7XG4gICAgICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICAgICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gY29uZmlnLmlucHV0RXJyb3JDbGFzcztcbiAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzO1xuXG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlcnJvclNwYW4gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyMnICsgaW5wdXRFbGVtZW50LmlkICsgJy1lcnJvcidcbiAgICAgICAgICApO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvclNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICAgICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIH1cblxuICAgIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JTcGFuID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBpbnB1dEVsZW1lbnQuaWQgKyAnLWVycm9yJyk7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBlcnJvclNwYW4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFzVmFsaWRJbnB1dHMoaW5wdXRMaXN0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dExpc3QuZXZlcnkoKGlucHV0RWxlbWVudCkgPT4gaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc1ZhbGlkSW5wdXRzKGlucHV0TGlzdCkpIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TGlzdCA9IFsuLi50aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgICAgIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG5cblxuXG5cbiIsImNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWxPbkNsaWNrID0gdGhpcy5fY2xvc2VNb2RhbE9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fY2xvc2VNb2RhbE9uRXNjYXBlID0gdGhpcy5fY2xvc2VNb2RhbE9uRXNjYXBlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2Nsb3NlTW9kYWxPbkNsaWNrKGV2dCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fcHJldmlldy1pbWFnZVwiKSB8fCBcbiAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19jbG9zZS1pbWdcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Nsb3NlTW9kYWxPbkVzY2FwZShldnQpIHtcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9jbG9zZU1vZGFsT25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2Nsb3NlTW9kYWxPbkVzY2FwZSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2Nsb3NlTW9kYWxPbkNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fY2xvc2VNb2RhbE9uRXNjYXBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwOyIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGhhbmRsZUZvcm1TdWJtaXQgfSwgcG9wdXBTZWxlY3Rvcikge1xuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgICAgIHRoaXMuX3BvcHVwRm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0Jyk7XG4gICAgICAgIHRoaXMuX2lucHV0VmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKFxuICAgICAgICAgICAgKGlucHV0KSA9PiAodGhpcy5faW5wdXRWYWx1ZXNbaW5wdXQubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGlucHV0LnZhbHVlKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRWYWx1ZXM7XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEZvcm0ucmVzZXQoKTtcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEZvcm07IiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuXG5jbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgIHRoaXMuX3BvcHVwSW1hZ2UgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19wcmV2aWV3LWltYWdlJyk7XG4gICAgIHRoaXMuX3BvcHVwQ2FwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3ByZXZpZXctY2FwdGlvbicpO1xuICAgfVxuIFxuICAgb3Blbih7IG5hbWUsIGltYWdlIH0pIHtcbiAgICAgdGhpcy5fcG9wdXBJbWFnZS5zcmMgPSBuYW1lO1xuICAgICB0aGlzLl9wb3B1cEltYWdlLmFsdCA9IG5hbWU7XG4gICAgIHRoaXMuX3BvcHVwQ2FwdGlvbi50ZXh0Q29udGVudCA9IGltYWdlO1xuICAgICBzdXBlci5vcGVuKCk7XG4gICB9XG4gfVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhJbWFnZTsiLCJjbGFzcyBTZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciAoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcyA9IGl0ZW1zO1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgX2NsZWFyKCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuaW5uZXJIVE1MID1cIlwiO1xuICAgIH1cblxuICAgIHJlbmRlckl0ZW1zKCkge1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247IiwiXG5jbGFzcyBVc2VySW5mbyB7XG4gICAgY29uc3RydWN0b3IoeyB1c2VyTmFtZSAsIHVzZXJKb2IgfSkge1xuICAgICAgdGhpcy5fdXNlck5hbWUgPSB1c2VyTmFtZSBcbiAgICAgIHRoaXMuX3VzZXJKb2IgPSB1c2VySm9iO1xuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQsXG4gICAgICAgIGpvYjogdGhpcy5fdXNlckpvYi50ZXh0Q29udGVudCxcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHNldFVzZXJJbmZvKHtuYW1lLCBqb2J9KSB7IFxuICAgICAgdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQgPSBuYW1lOyBcbiAgICAgIHRoaXMuX3VzZXJKb2IudGV4dENvbnRlbnQgPSBqb2I7IFxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvO1xuXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PSAgLy9cbi8vICAgIEluaXRpYWwgQ2FyZHMgICAgICAvL1xuLy8gPT09PT09PT09PT09PT09PT09PT0gIC8vXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXG4gICAgICAgIGFsdDogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgICAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgICAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gICAgICAgIGFsdDogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgICAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbl07XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gIC8vXG4vLyAgICAgICBXcmFwcGVycyAgICAgICAgLy9cbi8vID09PT09PT09PT09PT09PT09PT09ICAvL1xuZXhwb3J0IGNvbnN0IGVkaXRNb2RhbFdpbmRvd1NlbGVjdG9yID0gXCIjanMtZWRpdC1tb2RhbFwiO1xuZXhwb3J0IGNvbnN0IGVkaXRNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWRpdE1vZGFsV2luZG93U2VsZWN0b3IpO1xuZXhwb3J0IGNvbnN0IHByZXZpZXdJbWFnZU1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1wcmV2aWV3LW1vZGFsXCIpO1xuZXhwb3J0IGNvbnN0IG1vZGFsRWRpdEZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1lZGl0LWZvcm1cIik7XG5leHBvcnQgY29uc3QgcGxhY2VzTGlzdCA9IFwiLnBob3RvLWdyaWRfX2dhbGxlcnlcIjtcbmV4cG9ydCBjb25zdCBhZGRNb2RhbFdpbmRvd1NlbGVjdG9yID0gXCIjanMtYWRkLW1vZGFsXCI7XG5leHBvcnQgY29uc3QgYWRkTW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFkZE1vZGFsV2luZG93U2VsZWN0b3IpO1xuZXhwb3J0IGNvbnN0IG1vZGFsQWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtYWRkLWZvcm1cIik7XG5leHBvcnQgY29uc3QgYWRkRm9ybUVsID0gYWRkTW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XG5leHBvcnQgY29uc3QgZWRpdEZvcm1FbCA9IGVkaXRNb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gIC8vXG4vLyAgICAgICAgQnV0dG9ucyAgICAgICAgLy9cbi8vID09PT09PT09PT09PT09PT09PT09ICAvL1xuZXhwb3J0IGNvbnN0IG1vZGFsRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LWJ0blwiKTtcbmV4cG9ydCBjb25zdCBlZGl0TW9kYWxDbG9zZUJ0biA9IGVkaXRNb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWNsb3NlLWJ0blwiKTtcbmV4cG9ydCBjb25zdCBhZGRNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBhZGRNb2RhbENsb3NlQnRuID0gYWRkTW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcihcIiNhZGQtY2xvc2UtYnRuXCIpO1xuZXhwb3J0IGNvbnN0IHByZXZpZXdJbWFnZUNsb3NlQnRuID0gcHJldmlld0ltYWdlTW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcihcIiNwcmV2aWV3LWNsb3NlLWJ0blwiKTtcbmV4cG9ydCBjb25zdCBzYXZlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zYXZlLWJ0blwiKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NyZWF0ZS1idG5cIik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09ICAvL1xuLy8gICAgICAgIElucHV0cyAgICAgICAgIC8vXG4vLyA9PT09PT09PT09PT09PT09PT09PSAgLy9cbmV4cG9ydCBjb25zdCBtb2RhbE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtbmFtZS1pbnB1dFwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbEJpb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iaW8taW5wdXRcIik7XG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5leHBvcnQgY29uc3QgcHJvZmlsZUJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYmlvXCIpO1xuZXhwb3J0IGNvbnN0IHBvc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2lucHV0LXRleHRfdGl0bGVcIik7IFxuZXhwb3J0IGNvbnN0IHBvc3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW5wdXQtdGV4dF9saW5rXCIpOyBcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gIC8vXG4vLyAgICAgICBUZW1wbGF0ZXMgICAgICAgLy9cbi8vID09PT09PT09PT09PT09PT09PT09ICAvL1xuZXhwb3J0IGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ3JpZF9fcG9zdFwiKTtcbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdGlvbkNvbmZpZyA9IHtcbiAgICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX2J1dHRvblwiLFxuICAgIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX2J1dHRvbl9kaXNhYmxlZFwiLFxuICAgIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfdHlwZV9lcnJvclwiLFxuICAgIGVycm9yQ2xhc3M6IFwicG9wdXBfX2Vycm9yX3Zpc2libGVcIixcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQuanMnO1xuaW1wb3J0IHtcbiAgaW5pdGlhbENhcmRzLFxuICBlZGl0TW9kYWxXaW5kb3dTZWxlY3RvcixcbiAgcGxhY2VzTGlzdCxcbiAgbW9kYWxFZGl0QnRuLFxuICBhZGRNb2RhbEJ1dHRvbixcbiAgbW9kYWxOYW1lSW5wdXQsXG4gIG1vZGFsQmlvSW5wdXQsXG4gIGZvcm1WYWxpZGF0aW9uQ29uZmlnLFxuICBhZGRGb3JtRWwsXG4gIGVkaXRGb3JtRWwsXG4gIHByb2ZpbGVOYW1lLFxuICBwcm9maWxlQmlvLFxuICBhZGRNb2RhbFdpbmRvd1NlbGVjdG9yLFxufSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnO1xuLy8gQ3JlYXRlIG5ldyBpbnN0YW5jZXNcblxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0aW9uQ29uZmlnLCBhZGRGb3JtRWwpO1xuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdGlvbkNvbmZpZywgZWRpdEZvcm1FbCk7XG5mdW5jdGlvbiByZW5kZXJDYXJkKGl0ZW0pIHtcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaXRlbSwgJyNjYXJkLXRlbXBsYXRlJywgKG5hbWUsIGltYWdlKSA9PiB7XG4gICAgICAgIGltYWdlUG9wdXAub3Blbih7IG5hbWUsIGltYWdlIH0pO1xuICAgIH0pO1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICAgICAgZGVmYXVsdENhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xufTtcblxuY29uc3QgZGVmYXVsdENhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICBpdGVtczogaW5pdGlhbENhcmRzLFxuICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgICAgcmVuZGVyQ2FyZChpdGVtKTtcbiAgICB9LFxuICB9LFxuICBwbGFjZXNMaXN0LFxuKTtcblxuY29uc3QgaW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZSgnI2pzLXByZXZpZXctbW9kYWwnKTtcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZTogcHJvZmlsZU5hbWUsXG4gIHVzZXJKb2I6IHByb2ZpbGVCaW8sXG59KTtcblxuY29uc3QgZWRpdFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXG4gIHtcbiAgICBoYW5kbGVGb3JtU3VibWl0OiAoeyBiaW8sIG5hbWUgfSkgPT4ge1xuICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oeyBuYW1lOiBuYW1lLCBqb2I6IGJpbyB9KTtcbiAgICB9LFxuICB9LFxuICBlZGl0TW9kYWxXaW5kb3dTZWxlY3Rvcixcbik7XG5cbmNvbnN0IGFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICB7XG4gICAgaGFuZGxlRm9ybVN1Ym1pdDogKGl0ZW0pID0+IHtcbiAgICAgIHJlbmRlckNhcmQoaXRlbSk7XG4gICAgfSxcbiAgfSxcbiAgYWRkTW9kYWxXaW5kb3dTZWxlY3Rvcixcbik7XG5cbi8vIFNldHVwIGNsYXNzZXNcbmRlZmF1bHRDYXJkTGlzdC5yZW5kZXJJdGVtcygpO1xuZWRpdFBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5hZGRDYXJkUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4vLyBoYW5kbGUgb3RoZXJcbm1vZGFsRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBqb2IgfSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIG1vZGFsTmFtZUlucHV0LnZhbHVlID0gbmFtZTtcbiAgbW9kYWxCaW9JbnB1dC52YWx1ZSA9IGpvYjtcblxuICBlZGl0UG9wdXAub3BlbigpO1xufSk7XG5cbmFkZE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRDYXJkUG9wdXAub3BlbigpO1xufSk7XG4iXSwibmFtZXMiOlsiQ2FyZCIsImNhcmQiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJfbmFtZSIsIm5hbWUiLCJfaW1hZ2UiLCJpbWFnZSIsIl9hbHQiLCJhbHQiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VzdCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlQWN0aXZlTGlrZUJ0biIsIl9kZWxldGVDYXJkIiwiX2dldFRlbXBsYXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0ZXh0Q29udGVudCIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsImVycm9yU3BhbiIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwiX2hpZGVJbnB1dEVycm9yIiwiaW5wdXRMaXN0IiwiZXZlcnkiLCJzdWJtaXRCdXR0b24iLCJfaGFzVmFsaWRJbnB1dHMiLCJkaXNhYmxlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfY2xvc2VNb2RhbE9uQ2xpY2siLCJiaW5kIiwiX2Nsb3NlTW9kYWxPbkVzY2FwZSIsImV2dCIsInRhcmdldCIsImNvbnRhaW5zIiwiY2xvc2UiLCJrZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9wb3B1cEZvcm0iLCJfaW5wdXRMaXN0IiwiX2lucHV0VmFsdWVzIiwiaW5wdXQiLCJ0b0xvd2VyQ2FzZSIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltYWdlIiwiX3BvcHVwQ2FwdGlvbiIsInNyYyIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfcmVuZGVyZWRJdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJlbGVtZW50IiwicHJlcGVuZCIsImlubmVySFRNTCIsIl9jbGVhciIsIml0ZW0iLCJVc2VySW5mbyIsInVzZXJOYW1lIiwidXNlckpvYiIsIl91c2VyTmFtZSIsIl91c2VySm9iIiwiam9iIiwiaW5pdGlhbENhcmRzIiwiZWRpdE1vZGFsV2luZG93U2VsZWN0b3IiLCJlZGl0TW9kYWxXaW5kb3ciLCJwcmV2aWV3SW1hZ2VNb2RhbFdpbmRvdyIsIm1vZGFsRWRpdEZvcm1FbGVtZW50IiwicGxhY2VzTGlzdCIsImFkZE1vZGFsV2luZG93U2VsZWN0b3IiLCJhZGRNb2RhbFdpbmRvdyIsIm1vZGFsQWRkRm9ybSIsImFkZEZvcm1FbCIsImVkaXRGb3JtRWwiLCJtb2RhbEVkaXRCdG4iLCJlZGl0TW9kYWxDbG9zZUJ0biIsImFkZE1vZGFsQnV0dG9uIiwiYWRkTW9kYWxDbG9zZUJ0biIsInByZXZpZXdJbWFnZUNsb3NlQnRuIiwic2F2ZU1vZGFsQnRuIiwiY3JlYXRlTW9kYWxCdG4iLCJtb2RhbE5hbWVJbnB1dCIsIm1vZGFsQmlvSW5wdXQiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVCaW8iLCJwb3N0VGl0bGUiLCJwb3N0TGluayIsImNhcmRUZW1wbGF0ZSIsImZvcm1WYWxpZGF0aW9uQ29uZmlnIiwiYWRkRm9ybVZhbGlkYXRvciIsImVkaXRGb3JtVmFsaWRhdG9yIiwicmVuZGVyQ2FyZCIsImltYWdlUG9wdXAiLCJvcGVuIiwiZ2VuZXJhdGVDYXJkIiwiZGVmYXVsdENhcmRMaXN0IiwiYWRkSXRlbSIsInVzZXJJbmZvIiwiZWRpdFBvcHVwIiwiYmlvIiwic2V0VXNlckluZm8iLCJhZGRDYXJkUG9wdXAiLCJyZW5kZXJJdGVtcyIsInNldEV2ZW50TGlzdGVuZXJzIiwiZW5hYmxlVmFsaWRhdGlvbiIsImdldFVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==