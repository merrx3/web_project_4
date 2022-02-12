import { cardTemplate } from '../utils/constants.js';

class Card {
    constructor({
        data, 
        handleCardClick, 
        openDeleteModal, 
        handleCardLike, 
        userId,
    }, cardTemplate) {
        this._name = data.name;
        this._image = data.image;
        this._alt = data.alt;
        this._likes = data.likes;
        this._authUserId = data.owner_id;
        this._userId = userId;

        //const cardSelector = document.querySelector("#card-template");
        this._cardSelector = cardTemplate;
        this._handleCardClick = handleCardClick;
        this._openDeleteModal = openDeleteModal;
        this._handleCardLike = handleCardLike;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector)
        .cloneNode(true);

        return cardElement;
    }

    likeCount(card) {
        this._likes = card.likes;
        this._handleActiveLikeBtn;
    }

    _handleActiveLikeBtn() {
        this._likeCount.textcontent = this._likes.length;

        if (this._likes.filter((user) => user._id === this._userId).length > 0) {
            this._likeButton.classList.add("photo-grid__like-btn_active");
        } else {
            this._likeButton.classList.remove("photo-grid__like-btn_active");
        }
    }

    _deleteCard() {
        if (this._userId === this._authUserId) {
            this._deleteButton.classList.add("photo-grid__trash-btn");
        } else {
            this._deleteButton.classList.remove("photo-grid__trash-btn");
        }
    }

    isLiked() {
        if (this._likeButton.classList.contains("photo-grid__like-btn_active")) {
            return true;
        } else {
            return false;
        }
    }

    _setEventListeners() {
       this._likeButton.addEventListener("click", () => this._handleCardLike);
       this._element.querySelector(".photo-grid__photo").addEventListener("click", () => this._openDeleteModal());
     
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this.likeCount = this._element.querySelector(".photo-grid__like-num");
        this._likeButton = this._element.querySelector(".photo-grid__like-btn");
        this._deleteButton = this._element.querySelector(".photo-grid__trash-btn");
       

        this._setEventListeners();
        this._deleteCard();
        this._handleActiveLikeBtn();

        this._element.querySelector(".photo-grid__caption").textContent = this._name;

        cardElImage.src = this._image;
        cardElImage.alt = this._name;

        return this._element;
    }
}

export default Card;


      
        
        
        
 
          /*
           const cardElImage = this._element.querySelector(".photo-grid__photo");
          
          
          
          this._element.querySelector(".photo-grid__like-btn").classList.toggle("photo-grid__like-btn_active");
          
          this._element.querySelector(".photo-grid__trash-btn").closest(".photo-grid__post").remove();
          
        this._element.querySelector(".photo-grid__like-btn").addEventListener("click", () => { this._handleActiveLikeBtn() });
        this._element.querySelector(".popup__button-delete").addEventListener("click", () => { this._deleteCard() });
        this._element.querySelector(".photo-grid__photo").addEventListener("click", () => this._handleCardClick(this._image, this._name));
        
           this._element.querySelector(".photo-grid__photo").style.backgroundImage = `url(${this._image})`;
           this._element.querySelector(".photo-grid__caption").textContent = this._name;*/

      