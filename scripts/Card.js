const previewImageModalWindow = document.querySelector("#js-preview-modal");
const previewImageElement = document.querySelector(".modal__preview-image");
const previewImageCaption = document.querySelector(".modal__preview-caption");

function openModal(modal) {
    modal.classList.add("modal_open");
    document.addEventListener("click", closeModalOnClick);
    document.addEventListener("keydown", closeModalOnEscape);
}

function closeModal(modal) {
    modal.classList.remove("modal_open");
    document.removeEventListener("click", closeModalOnClick);
    document.removeEventListener("keydown", closeModalOnEscape);
}


function closeModalOnClick(evt) {
    if (evt.target.classList.contains("modal_open")) {
        return closeModal(evt.target);
    }
}

function closeModalOnEscape(evt) {
    if (evt.key === "Escape") {
        return closeModal(document.querySelector(".modal_open"));
    }
}

class Card {
    constructor(card, cardSelector) {
        this._name = card.name;
        this._link = card.link;

        this._cardSelector = cardSelector;
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

    _handlePreviewPicture() {
        previewImageElement.src = this._link;
        previewImageCaption.textContent = this._name;

        openModal(previewImageModalWindow);
    }

    _setEventListeners() {
        //this is where we set up the events
        this._element.querySelector(".photo-grid__like-btn").addEventListener("click", () => { this._handleActiveLikeBtn() });
        this._element.querySelector(".photo-grid__trash-btn").addEventListener("click", () => { this._deleteCard() });
        this._element.querySelector(".photo-grid__photo").addEventListener("click", () => { this._handlePreviewPicture() });
    }
    
    produceCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        
        this._element.querySelector(".photo-grid__photo").style.backgroundImage = `url(${this._link})`;
        this._element.querySelector(".photo-grid__caption").textContent = this._name;

        return this._element;
    }
}

export default Card;