import Popup from './Popup';

class PopupWithImages extends Popup {
   open({link, name}){
        this._popupElement.querySelector('.modal__preview-caption').textContent = name;
        const image = this._popupElement.querySelector('.modal__preview-image');
        image.src = link;
        image.alt = `image of ${name}`;
        super.open();
   }
}

export default PopupWithImages;