import Popup from './Popup.js';

class PopupWithImage extends Popup {
   constructor(popupSelector) {
     super(popupSelector);
     this._popupImage = this._popupElement.querySelector('.modal__preview-image');
     this._popupCaption = this._popupElement.querySelector('.modal__preview-caption');
   }
 
   open({ name, link }) {
     this._popupImage.src = name;
     this._popupCaption.textContent = link;
     super.open();
     super.setEventListeners();
   }
 }

export default PopupWithImage;