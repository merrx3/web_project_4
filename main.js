/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
        headers = _ref.headers;

    _classCallCheck(this, Api);

    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _createClass(Api, [{
    key: "_checkServerResponse",
    value: function _checkServerResponse(res) {
      return res.ok ? res.json() : Promise.reject("Error: ".concat(res.status));
    } // === 1. Load user information from the server === //

  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        headers: this._headers
      }).then(this._checkServerResponse);
    } // === 2. Load Cards from the server === //

  }]);

  return Api;
}();



/***/ }),

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
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");








 //API

var apiSetup = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  groupID: "group-12",
  headers: {
    authorization: "238e9991-52d4-4161-a913-f4692922eb00",
    "Content-Type": "application/json"
  }
}); // Create new instances

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixnRkFBQSxDQUFnQyxPQUFoQyxFQUF5QyxZQUFNO0FBQzdDNEIsRUFBQUEsWUFBWSxDQUFDUixJQUFiO0FBQ0QsQ0FGRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICAgY29uc3RydWN0b3Ioe2Jhc2VVcmwsIGhlYWRlcnN9KSB7XG4gICAgICAgdGhpcy5fYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gICB9IFxuXG5cbl9jaGVja1NlcnZlclJlc3BvbnNlKHJlcykge1xuICAgIHJldHVybiByZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gIH1cblxuLy8gPT09IDEuIExvYWQgdXNlciBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzZXJ2ZXIgPT09IC8vXG5nZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbih0aGlzLl9jaGVja1NlcnZlclJlc3BvbnNlKTtcbn1cblxuLy8gPT09IDIuIExvYWQgQ2FyZHMgZnJvbSB0aGUgc2VydmVyID09PSAvL1xuXG59IiwiXG5jbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihjYXJkLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xuICAgICAgICB0aGlzLl9uYW1lID0gY2FyZC5uYW1lO1xuICAgICAgICB0aGlzLl9pbWFnZSA9IGNhcmQuaW1hZ2U7XG4gICAgICAgIHRoaXMuX2FsdCA9IGNhcmQuYWx0O1xuXG4gICAgICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICAgIH1cblxuICAgIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcbiAgICAgICAgLmNvbnRlbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ3JpZF9fcG9zdFwiKVxuICAgICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgICB9XG5cbiAgICBfaGFuZGxlQWN0aXZlTGlrZUJ0bigpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX2xpa2UtYnRuXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJwaG90by1ncmlkX19saWtlLWJ0bl9hY3RpdmVcIik7XG4gICAgfVxuXG4gICAgX2RlbGV0ZUNhcmQoKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX190cmFzaC1idG5cIikuY2xvc2VzdChcIi5waG90by1ncmlkX19wb3N0XCIpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgLy90aGlzIGlzIHdoZXJlIHdlIHNldCB1cCB0aGUgZXZlbnRzXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19saWtlLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLl9oYW5kbGVBY3RpdmVMaWtlQnRuKCkgfSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX190cmFzaC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgdGhpcy5fZGVsZXRlQ2FyZCgpIH0pO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG8tZ3JpZF9fcGhvdG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9pbWFnZSwgdGhpcy5fbmFtZSkpO1xuICAgIH1cbiAgICBcbiAgICBnZW5lcmF0ZUNhcmQoKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19waG90b1wiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5faW1hZ2V9KWA7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90by1ncmlkX19jYXB0aW9uXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcblxuXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50ICkge1xuICAgICAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gY29uZmlnLmlucHV0U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgICAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGNvbmZpZy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcblxuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIH1cblxuICAgIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JTcGFuID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjJyArIGlucHV0RWxlbWVudC5pZCArICctZXJyb3InXG4gICAgICAgICAgKTtcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICAgICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9XG5cbiAgICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVycm9yU3BhbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaW5wdXRFbGVtZW50LmlkICsgJy1lcnJvcicpO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhc1ZhbGlkSW5wdXRzKGlucHV0TGlzdCkge1xuICAgICAgICByZXR1cm4gaW5wdXRMaXN0LmV2ZXJ5KChpbnB1dEVsZW1lbnQpID0+IGlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCA9PT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgc3VibWl0QnV0dG9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNWYWxpZElucHV0cyhpbnB1dExpc3QpKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBpbnB1dExpc3QgPSBbLi4udGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKV07XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgICAgICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuXG5cblxuXG4iLCJjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsT25DbGljayA9IHRoaXMuX2Nsb3NlTW9kYWxPbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWxPbkVzY2FwZSA9IHRoaXMuX2Nsb3NlTW9kYWxPbkVzY2FwZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9jbG9zZU1vZGFsT25DbGljayhldnQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX3ByZXZpZXctaW1hZ2VcIikgfHwgXG4gICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2UtaW1nXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jbG9zZU1vZGFsT25Fc2NhcGUoZXZ0KSB7XG4gICAgICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fY2xvc2VNb2RhbE9uQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9jbG9zZU1vZGFsT25Fc2NhcGUpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9jbG9zZU1vZGFsT25DbGljayk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2Nsb3NlTW9kYWxPbkVzY2FwZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDsiLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbmNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IoeyBoYW5kbGVGb3JtU3VibWl0IH0sIHBvcHVwU2VsZWN0b3IpIHtcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICAgICAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XG4gICAgfVxuXG4gICAgX2dldElucHV0VmFsdWVzKCkge1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19pbnB1dCcpO1xuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChcbiAgICAgICAgICAgIChpbnB1dCkgPT4gKHRoaXMuX2lucHV0VmFsdWVzW2lucHV0Lm5hbWUudG9Mb3dlckNhc2UoKV0gPSBpbnB1dC52YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0VmFsdWVzO1xuICAgIH1cblxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhGb3JtOyIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcblxuY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgICB0aGlzLl9wb3B1cEltYWdlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcHJldmlldy1pbWFnZScpO1xuICAgICB0aGlzLl9wb3B1cENhcHRpb24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19wcmV2aWV3LWNhcHRpb24nKTtcbiAgIH1cbiBcbiAgIG9wZW4oeyBuYW1lLCBpbWFnZSB9KSB7XG4gICAgIHRoaXMuX3BvcHVwSW1hZ2Uuc3JjID0gbmFtZTtcbiAgICAgdGhpcy5fcG9wdXBJbWFnZS5hbHQgPSBuYW1lO1xuICAgICB0aGlzLl9wb3B1cENhcHRpb24udGV4dENvbnRlbnQgPSBpbWFnZTtcbiAgICAgc3VwZXIub3BlbigpO1xuICAgfVxuIH1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoSW1hZ2U7IiwiY2xhc3MgU2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3IgKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIF9jbGVhcigpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9XCJcIjtcbiAgICB9XG5cbiAgICByZW5kZXJJdGVtcygpIHtcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgICAgICB9KVxuICAgIH1cbiAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uOyIsIlxuY2xhc3MgVXNlckluZm8ge1xuICAgIGNvbnN0cnVjdG9yKHsgdXNlck5hbWUgLCB1c2VySm9iIH0pIHtcbiAgICAgIHRoaXMuX3VzZXJOYW1lID0gdXNlck5hbWUgXG4gICAgICB0aGlzLl91c2VySm9iID0gdXNlckpvYjtcbiAgICB9XG5cbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50LFxuICAgICAgICBqb2I6IHRoaXMuX3VzZXJKb2IudGV4dENvbnRlbnQsXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBzZXRVc2VySW5mbyh7bmFtZSwgam9ifSkgeyBcbiAgICAgIHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTsgXG4gICAgICB0aGlzLl91c2VySm9iLnRleHRDb250ZW50ID0gam9iOyBcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBVc2VySW5mbztcblxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT0gIC8vXG4vLyAgICBJbml0aWFsIENhcmRzICAgICAgLy9cbi8vID09PT09PT09PT09PT09PT09PT09ICAvL1xuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXG4gICAgICAgIGFsdDogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgICAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkxhdGVtYXJcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgICAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgIH0sXG5dO1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09ICAvL1xuLy8gICAgICAgV3JhcHBlcnMgICAgICAgIC8vXG4vLyA9PT09PT09PT09PT09PT09PT09PSAgLy9cbmV4cG9ydCBjb25zdCBlZGl0TW9kYWxXaW5kb3dTZWxlY3RvciA9IFwiI2pzLWVkaXQtbW9kYWxcIjtcbmV4cG9ydCBjb25zdCBlZGl0TW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVkaXRNb2RhbFdpbmRvd1NlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCBwcmV2aWV3SW1hZ2VNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtcHJldmlldy1tb2RhbFwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbEVkaXRGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtZWRpdC1mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IHBsYWNlc0xpc3QgPSBcIi5waG90by1ncmlkX19nYWxsZXJ5XCI7XG5leHBvcnQgY29uc3QgYWRkTW9kYWxXaW5kb3dTZWxlY3RvciA9IFwiI2pzLWFkZC1tb2RhbFwiO1xuZXhwb3J0IGNvbnN0IGFkZE1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhZGRNb2RhbFdpbmRvd1NlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCBtb2RhbEFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWFkZC1mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IGFkZEZvcm1FbCA9IGFkZE1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xuZXhwb3J0IGNvbnN0IGVkaXRGb3JtRWwgPSBlZGl0TW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09ICAvL1xuLy8gICAgICAgIEJ1dHRvbnMgICAgICAgIC8vXG4vLyA9PT09PT09PT09PT09PT09PT09PSAgLy9cbmV4cG9ydCBjb25zdCBtb2RhbEVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1idG5cIik7XG5leHBvcnQgY29uc3QgZWRpdE1vZGFsQ2xvc2VCdG4gPSBlZGl0TW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1jbG9zZS1idG5cIik7XG5leHBvcnQgY29uc3QgYWRkTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5leHBvcnQgY29uc3QgYWRkTW9kYWxDbG9zZUJ0biA9IGFkZE1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNsb3NlLWJ0blwiKTtcbmV4cG9ydCBjb25zdCBwcmV2aWV3SW1hZ2VDbG9zZUJ0biA9IHByZXZpZXdJbWFnZU1vZGFsV2luZG93LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlldy1jbG9zZS1idG5cIik7XG5leHBvcnQgY29uc3Qgc2F2ZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fc2F2ZS1idG5cIik7XG5leHBvcnQgY29uc3QgY3JlYXRlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jcmVhdGUtYnRuXCIpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PSAgLy9cbi8vICAgICAgICBJbnB1dHMgICAgICAgICAvL1xuLy8gPT09PT09PT09PT09PT09PT09PT0gIC8vXG5leHBvcnQgY29uc3QgbW9kYWxOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW5hbWUtaW5wdXRcIik7XG5leHBvcnQgY29uc3QgbW9kYWxCaW9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmlvLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVCaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Jpb1wiKTtcbmV4cG9ydCBjb25zdCBwb3N0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbnB1dC10ZXh0X3RpdGxlXCIpOyBcbmV4cG9ydCBjb25zdCBwb3N0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2lucHV0LXRleHRfbGlua1wiKTsgXG5cbi8vID09PT09PT09PT09PT09PT09PT09ICAvL1xuLy8gICAgICAgVGVtcGxhdGVzICAgICAgIC8vXG4vLyA9PT09PT09PT09PT09PT09PT09PSAgLy9cbmV4cG9ydCBjb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIikuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3RvLWdyaWRfX3Bvc3RcIik7XG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRpb25Db25maWcgPSB7XG4gICAgaW5wdXRTZWxlY3RvcjogXCIucG9wdXBfX2lucHV0XCIsXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19idXR0b25cIixcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcbiAgICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcbmltcG9ydCB7XG4gIGluaXRpYWxDYXJkcyxcbiAgZWRpdE1vZGFsV2luZG93U2VsZWN0b3IsXG4gIHBsYWNlc0xpc3QsXG4gIG1vZGFsRWRpdEJ0bixcbiAgYWRkTW9kYWxCdXR0b24sXG4gIG1vZGFsTmFtZUlucHV0LFxuICBtb2RhbEJpb0lucHV0LFxuICBmb3JtVmFsaWRhdGlvbkNvbmZpZyxcbiAgYWRkRm9ybUVsLFxuICBlZGl0Rm9ybUVsLFxuICBwcm9maWxlTmFtZSxcbiAgcHJvZmlsZUJpbyxcbiAgYWRkTW9kYWxXaW5kb3dTZWxlY3Rvcixcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XG5cbi8vQVBJXG5jb25zdCBhcGlTZXR1cCA9IG5ldyBBcGkgKHtcbiAgICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtMTJcIixcbiAgICBncm91cElEOiBcImdyb3VwLTEyXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgICBhdXRob3JpemF0aW9uOiBcIjIzOGU5OTkxLTUyZDQtNDE2MS1hOTEzLWY0NjkyOTIyZWIwMFwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcblxuLy8gQ3JlYXRlIG5ldyBpbnN0YW5jZXNcblxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0aW9uQ29uZmlnLCBhZGRGb3JtRWwpO1xuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdGlvbkNvbmZpZywgZWRpdEZvcm1FbCk7XG5mdW5jdGlvbiByZW5kZXJDYXJkKGl0ZW0pIHtcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaXRlbSwgJyNjYXJkLXRlbXBsYXRlJywgKG5hbWUsIGltYWdlKSA9PiB7XG4gICAgICAgIGltYWdlUG9wdXAub3Blbih7IG5hbWUsIGltYWdlIH0pO1xuICAgIH0pO1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICAgICAgZGVmYXVsdENhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xufTtcblxuY29uc3QgZGVmYXVsdENhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICBpdGVtczogaW5pdGlhbENhcmRzLFxuICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgICAgcmVuZGVyQ2FyZChpdGVtKTtcbiAgICB9LFxuICB9LFxuICBwbGFjZXNMaXN0LFxuKTtcblxuY29uc3QgaW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZSgnI2pzLXByZXZpZXctbW9kYWwnKTtcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZTogcHJvZmlsZU5hbWUsXG4gIHVzZXJKb2I6IHByb2ZpbGVCaW8sXG59KTtcblxuY29uc3QgZWRpdFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXG4gIHtcbiAgICBoYW5kbGVGb3JtU3VibWl0OiAoeyBiaW8sIG5hbWUgfSkgPT4ge1xuICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oeyBuYW1lOiBuYW1lLCBqb2I6IGJpbyB9KTtcbiAgICB9LFxuICB9LFxuICBlZGl0TW9kYWxXaW5kb3dTZWxlY3Rvcixcbik7XG5cbmNvbnN0IGFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICB7XG4gICAgaGFuZGxlRm9ybVN1Ym1pdDogKGl0ZW0pID0+IHtcbiAgICAgIHJlbmRlckNhcmQoaXRlbSk7XG4gICAgfSxcbiAgfSxcbiAgYWRkTW9kYWxXaW5kb3dTZWxlY3Rvcixcbik7XG5cbi8vIFNldHVwIGNsYXNzZXNcbmRlZmF1bHRDYXJkTGlzdC5yZW5kZXJJdGVtcygpO1xuZWRpdFBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5hZGRDYXJkUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4vLyBoYW5kbGUgb3RoZXJcbm1vZGFsRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBqb2IgfSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIG1vZGFsTmFtZUlucHV0LnZhbHVlID0gbmFtZTtcbiAgbW9kYWxCaW9JbnB1dC52YWx1ZSA9IGpvYjtcblxuICBlZGl0UG9wdXAub3BlbigpO1xufSk7XG5cbmFkZE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRDYXJkUG9wdXAub3BlbigpO1xufSk7XG4iXSwibmFtZXMiOlsiQXBpIiwiYmFzZVVybCIsImhlYWRlcnMiLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsImZldGNoIiwidGhlbiIsIl9jaGVja1NlcnZlclJlc3BvbnNlIiwiQ2FyZCIsImNhcmQiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJfbmFtZSIsIm5hbWUiLCJfaW1hZ2UiLCJpbWFnZSIsIl9hbHQiLCJhbHQiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VzdCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlQWN0aXZlTGlrZUJ0biIsIl9kZWxldGVDYXJkIiwiX2dldFRlbXBsYXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0ZXh0Q29udGVudCIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsImVycm9yU3BhbiIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwiX2hpZGVJbnB1dEVycm9yIiwiaW5wdXRMaXN0IiwiZXZlcnkiLCJzdWJtaXRCdXR0b24iLCJfaGFzVmFsaWRJbnB1dHMiLCJkaXNhYmxlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfY2xvc2VNb2RhbE9uQ2xpY2siLCJiaW5kIiwiX2Nsb3NlTW9kYWxPbkVzY2FwZSIsImV2dCIsInRhcmdldCIsImNvbnRhaW5zIiwiY2xvc2UiLCJrZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9wb3B1cEZvcm0iLCJfaW5wdXRMaXN0IiwiX2lucHV0VmFsdWVzIiwiaW5wdXQiLCJ0b0xvd2VyQ2FzZSIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltYWdlIiwiX3BvcHVwQ2FwdGlvbiIsInNyYyIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfcmVuZGVyZWRJdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJlbGVtZW50IiwicHJlcGVuZCIsImlubmVySFRNTCIsIl9jbGVhciIsIml0ZW0iLCJVc2VySW5mbyIsInVzZXJOYW1lIiwidXNlckpvYiIsIl91c2VyTmFtZSIsIl91c2VySm9iIiwiam9iIiwiaW5pdGlhbENhcmRzIiwiZWRpdE1vZGFsV2luZG93U2VsZWN0b3IiLCJlZGl0TW9kYWxXaW5kb3ciLCJwcmV2aWV3SW1hZ2VNb2RhbFdpbmRvdyIsIm1vZGFsRWRpdEZvcm1FbGVtZW50IiwicGxhY2VzTGlzdCIsImFkZE1vZGFsV2luZG93U2VsZWN0b3IiLCJhZGRNb2RhbFdpbmRvdyIsIm1vZGFsQWRkRm9ybSIsImFkZEZvcm1FbCIsImVkaXRGb3JtRWwiLCJtb2RhbEVkaXRCdG4iLCJlZGl0TW9kYWxDbG9zZUJ0biIsImFkZE1vZGFsQnV0dG9uIiwiYWRkTW9kYWxDbG9zZUJ0biIsInByZXZpZXdJbWFnZUNsb3NlQnRuIiwic2F2ZU1vZGFsQnRuIiwiY3JlYXRlTW9kYWxCdG4iLCJtb2RhbE5hbWVJbnB1dCIsIm1vZGFsQmlvSW5wdXQiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVCaW8iLCJwb3N0VGl0bGUiLCJwb3N0TGluayIsImNhcmRUZW1wbGF0ZSIsImZvcm1WYWxpZGF0aW9uQ29uZmlnIiwiYXBpU2V0dXAiLCJncm91cElEIiwiYXV0aG9yaXphdGlvbiIsImFkZEZvcm1WYWxpZGF0b3IiLCJlZGl0Rm9ybVZhbGlkYXRvciIsInJlbmRlckNhcmQiLCJpbWFnZVBvcHVwIiwib3BlbiIsImdlbmVyYXRlQ2FyZCIsImRlZmF1bHRDYXJkTGlzdCIsImFkZEl0ZW0iLCJ1c2VySW5mbyIsImVkaXRQb3B1cCIsImJpbyIsInNldFVzZXJJbmZvIiwiYWRkQ2FyZFBvcHVwIiwicmVuZGVySXRlbXMiLCJzZXRFdmVudExpc3RlbmVycyIsImVuYWJsZVZhbGlkYXRpb24iLCJnZXRVc2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=