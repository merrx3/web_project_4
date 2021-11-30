import Popup from './Popup.js';

/*class PopupWithImage extends Popup {
   open({link, name}){
        this._popupElement.querySelector('.modal__preview-caption').textContent = name;
        const image = this._popupElement.querySelector('.modal__preview-image');
        image.src = link;
        image.alt = `image of ${name}`;
        super.open();
   }
}*/
class PopupWithImage extends Popup {
   constructor(popupSelector) {
     super(popupSelector);
     this._link = this._popupElment.querySelector('.modal__preview-image');
     this._title = this._popupElement.querySelector('.modal__preview-caption');
   }
 
   open({ link, title }) {
     this._link.src = link;
     this._title.textContent = title;
     super.open();
     super.setEventListeners();
   }
 }

export default PopupWithImage;