import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor({ handleFormSubmit }, popupSelector) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector('.popup__form');

        this._saveButton = document.querySelector(popupSelector).querySelector(".popup__button");
    }

    handleLoading() {
        if (this._saveButton.textContent === "Saving...") {
          if (this._popupSelector !== ".modal__form") {
            this._saveButton.textContent = "Save"
          } else {
            this._saveButton.textContent = "Create"
          }
        } else {
          this._saveButton.textContent = "Saving..."
        }
      }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._inputValues = {};
        this._inputList.forEach(
            (input) => (this._inputValues[input.name.toLowerCase()] = input.value)
        );
        return this._inputValues;
    }

    setEventListeners() {
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
}

export default PopupWithForm;