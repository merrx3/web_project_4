class Card {
    constructor({
        card, 
        handleCardClick, 
        openDeleteModal, 
        handleCardLike, 
        userId,
    }, cardSelector) {
        this._name = card.name;
        this._image = card.image;
        this._alt = card.alt;
        this._likes = card.likes;
        this._authUserId = card.owner._id;
        this._userId = userId;


        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._openDeleteModal = openDeleteModal;
        this._handleCardLike = handleCardLike;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector)
        .content
        .querySelector(".photo-grid__post")
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

      