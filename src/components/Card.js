class Card {
    constructor(card, cardSelector, handleCardClick) {
        this._name = card.name;
        this._image = card.image;
        this._alt = card.alt;
        this._cardSelector = cardSelector;
        
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector)
        .content
        .querySelector(".photo-grid__post")
        .cloneNode(true);

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
        this._element.querySelector(".photo-grid__photo").addEventListener("click", () => this._handleCardClick(this._image, this._name));
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".photo-grid__photo").style.backgroundImage = `url(${this._image})`;
        this._element.querySelector(".photo-grid__caption").textContent = this._name;


        return this._element;
    }
}

export default Card;


        //({card, handleCardClick, handleDeleteClick, handleLikeClick}, cardSelector,  userID)
        //this._likes = card.likes;
        //this._userID = card.userID;
        //this._card = card
        //this._cardItem = document.querySelector(cardSelector);


        /*this._trashButton = this._cardItem.querySelector(".photo-grid__trash-btn");
        this._likeButton = this._cardItem.querySelector(".photo-grid__like-btn");
        this._likeNumber = this._cardItem.querySelector(".photo-grid__like-num");
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick =handleDeleteClick;*/

        /*const cardElement = this._cardItem.content.querySelector('.photo-grid-post').cloneNode(true);
        return cardElement;*/