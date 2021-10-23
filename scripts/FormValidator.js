class FormValidator {
    constructor(config, formElement ) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;

        this._formElement = formElement;
    }

    _showInputError(inputElement) {
        const errorSpan = this._formElement.querySelector(
            `#${inputElement.id}-error`
          );
        errorSpan.textContent = inputElement.validationMessage;
        errorSpan.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const errorSpan = this._formElement.querySelector(
            `#${inputElement.id}-error`
          );
        errorSpan.textContent = '';
        errorSpan.classList.remove(this._errorClass);
    }

    _checkInputValidity(inputElement, settings) {
        if (!inputElement.validity.valid) {
            this._hideInputError(inputElement, this._formElement, settings);
        } else {
            this._showInputError(inputElement, this._formElement, settings);
        }
    }

    _hasValidInputs(inputList) {
        return !inputList.every((inputElement) => inputElement.validity.valid === true);
    }

    _toggleButtonState(inputList, submitButton, settings) {
        if (this._hasValidInputs(inputList)) {
            submitButton.disabled = false;
            submitButton.classList.remove(settings.this._inactiveButtonClass);
        } else {
            submitButton.disabled = true;
            submitButton.classList.add(settings.this._inactiveButtonClass);
        }
    }

    _setEventListeners() {
        const inputList = [...this._formElement.querySelectorAll(this._inputSelector)];
        const submitButton = this._formElement.querySelector(this._submitButtonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("inputElement", () => {
                this._checkInputValidity(this._formElement, inputElement);
                this._toggleButtonState(inputList, submitButton);
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (e) => e.preventDefault());
        
        this._setEventListeners();
    }
}

export default FormValidator;




