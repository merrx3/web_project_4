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
            '#' + inputElement.id + '-error'
          );
        inputElement.classList.add(this._inputErrorClass);
        errorSpan.classList.add(this._errorClass);
        errorSpan.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement) {
        const errorSpan = this._formElement.querySelector('#' + inputElement.id + '-error');
        inputElement.classList.remove(this._inputErrorClass);
        errorSpan.textContent = '';
        errorSpan.classList.remove(this._errorClass);
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasValidInputs(inputList) {
        return inputList.every((inputElement) => inputElement.validity.valid === true);
    }

    _toggleButtonState(inputList, submitButton) {
        if (this._hasValidInputs(inputList)) {
            submitButton.disabled = true;
            submitButton.classList.add(this._inactiveButtonClass);
            
        } else {
            submitButton.disabled = false;
            submitButton.classList.remove(this._inactiveButtonClass);
        }
    }

    _setEventListeners() {
        const inputList = [...this._formElement.querySelectorAll(this._inputSelector)];
        const submitButton = this._formElement.querySelector(this._submitButtonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
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




