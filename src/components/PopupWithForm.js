import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor({ handleFormSubmit }, popupSelector) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector('.popup__form');
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