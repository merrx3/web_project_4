import Popup from "./Popup";
import { deleteCardWindow } from '../utils/constants.js'

class PopupDelete extends Popup {
  constructor({handleFormSubmit, popupSelector}) {
    super(popupSelector);

    this.handleFormSubmit = handleFormSubmit;
    this._popupFormElement = this._popupElement.querySelector('.popup__form');
  }

  open(cardId, e) {
    super.open();
    this._cardId = cardId;
    this._cardToDelete = e.target.closest(".photo-grid__post");
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        this._handleFormSubmit(this._cardId, this._cardtoDelete);
    });
}

}

export default PopupDelete

/*  _deleteCard() {
    this._popupElement.querySelector(".photo-grid__trash-btn").closest(".photo-grid__post").remove();
  }

  _setEventListeners() {
    super._setEventListeners()
    this._popupFormElement.querySelector(".popup__button-delete").addEventListener("click", () => { 
      this._deleteCard();
    });
    */