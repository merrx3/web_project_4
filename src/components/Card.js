
import { openModal, closeModal } from "./utils.js";
import { formValidationConfig } from "../pages/index.js";
import PopupWithImages from './PopupWithImages';

const previewImageModalWindow = document.querySelector("#js-preview-modal");
const previewImageElement = document.querySelector(".modal__preview-image");
const previewImageCaption = document.querySelector(".modal__preview-caption");

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

   /* _handlePreviewPicture() {
        previewImageElement.src = this._link;
        previewImageCaption.textContent = this._name;
        previewImageElement.alt = this._name;

        openModal(previewImageModalWindow);
    }*/

    _setEventListeners() {
        //this is where we set up the events
        this._element.querySelector(".photo-grid__photo").addEventListener('click', () => {this._handleCardClick({ link: this._link, title: this._name })});
        this._element.querySelector(".photo-grid__like-btn").addEventListener("click", () => { this._handleActiveLikeBtn() });
        this._element.querySelector(".photo-grid__trash-btn").addEventListener("click", () => { this._deleteCard() });
        this._element.querySelector(".photo-grid__photo").addEventListener("click", () => { this._handlePreviewPicture() });

        //modalAddForm.addEventListener('submit', addFormSubmit);
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