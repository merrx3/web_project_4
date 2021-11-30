
/*import { openModal, closeModal } from "./utils.js";
import { formValidationConfig } from "../pages/index.js";
import PopupWithImage from './PopupWithImage.js';

const previewImageModalWindow = document.querySelector("#js-preview-modal");
const previewImageElement = document.querySelector(".modal__preview-image");
const previewImageCaption = document.querySelector(".modal__preview-caption");*/

class Card {
    constructor(card, cardSelector, handleCardClick) {
        this._name = card.name;
        this._link = card.link;
        this._alt = card.alt;

        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector)
        .content.querySelector(".photo-grid__post").cloneNode(true);

        return cardElement;
    }

    _handleActiveLikeBtn() {
        this._element.querySelector(".photo-grid__like-btn").classList.toggle("photo-grid__like-btn_active");
    }

    _deleteCard() {
        this._element.querySelector(".photo-grid__trash-btn").closest(".photo-grid__post").remove();
    }

    _setEventListeners() {
        //this is where we set up the events
        this._element.querySelector(".photo-grid__like-btn").addEventListener("click", () => { this._handleActiveLikeBtn() });
        this._element.querySelector(".photo-grid__trash-btn").addEventListener("click", () => { this._deleteCard() });
        this._element.addEventListener("click", () => this._handleCardClick( this._link, this._name));

    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        
        this._element.querySelector(".photo-grid__photo").style.backgroundImage = `url(${this._link})`;
        this._element.querySelector(".photo-grid__caption").textContent = this._name;


        return this._element;
    }
}

export default Card;