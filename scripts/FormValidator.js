class FormValidator {
    constructor(config, formElement ) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;

        this._formElement = formElement;
    }

    _showInputError(input) {
        const errorSpan = this._formElement.querySelector("#" + input.id + "-error");
        errorSpan.textContent = input.validationMessage;
        input.classList.add(this._errorClass);
    }

    _hideInputError(input) {
        const errorSpan = this._formElement.querySelector("#" + input.id + "-error");
        errorSpan.textContent = "";
        input.classList.remove(this._errorClass);
    }

    _checkInputValidity(input, settings) {
        if (input.validity.valid) {
            this._hideInputError(input, this._formElement, settings);
        } else {
            this._showInputError(input, this._formElement, settings);
        }
    }

    _hasValidInputs(inputList) {
        return inputList.every((input) => input.validity.valid === true);
    }

    _toggleButtonState(inputList, submitButton) {
        if (this._hasValidInputs(inputList)) {
            submitButton.disabled = false;
            submitButton.classList.remove(this._inactiveButtonClass);
        } else {
            submitButton.disabled = true;
            submitButton.classList.add(this._inactiveButtonClass);
        }
    }

    _setEventListeners() {
        const inputList = [...this._formElement.querySelectorAll(this._inputSelector)];
        const submitButton = this._formElement.querySelector(this._submitButtonSelector);
        inputList.forEach((input) => {
            input.addEventListener("input", (e) => {
                this._checkInputValidity(this._formElement, input, settings);
                this._toggleButtonState(inputList, submitButton, settings);
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        

        this._setEventListeners();
    }
}

export default FormValidator;




