import Popup from './Popup.js';

class PopupWithImage extends Popup {
   constructor(popupSelector) {
     super(popupSelector);
     this._popupImage = this._popupElement.querySelector('.modal__preview-image');
     this._popupCaption = this._popupElement.querySelector('.modal__preview-caption');
   }
 
   open(card) {
     this._popupImage.src = card.image;
     this._popupImage.alt = card.name;
     this._popupCaption.textContent = card.name;
     super.open();
   }
 }

export default PopupWithImage;


/*  open({ name, image }) {
     this._popupImage.src = name;
     this._popupImage.alt = name;
     this._popupCaption.textContent = image;
     super.open();
   }
  */