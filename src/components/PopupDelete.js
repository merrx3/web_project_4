import Popup from "./Popup";

class PopupDelete extends Popup {
  constructor({handleFormSubmit}, popupSelector) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
  }

  open(card, id) {
    this.card = card
    this.id = id
    super.open()
  }

  _setEventListeners() {
    super._setEventListeners()
    this._popupElement.addEventListener("submit", this._handleFormSubmit)
  }

  _removeEventListeners() {
    super._removeEventListeners()
    this._popupElement.removeEventListener("submit", this._handleFormSubmit)
  }
}

export default PopupDelete