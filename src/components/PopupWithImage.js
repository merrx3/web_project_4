import Popup from './Popup.js';

class PopupWithImage extends Popup {
   constructor(popupSelector) {
     super(popupSelector);
     this._popupImage = this._popupElement.querySelector('.modal__preview-image');
     this._popupCaption = this._popupElement.querySelector('.modal__preview-caption');
   }
 
   open({ image, caption }) {
     this._popupImage.src = image;
     this._popupCaption.textContent = caption;
     super.open();
     super.setEventListeners();
   }
 }

export default PopupWithImage;