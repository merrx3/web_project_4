class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._closeModalOnClick = this._closeModalOnClick.bind(this);
        this._closeModalOnEscape = this._closeModalOnEscape.bind(this);
    }

    _closeModalOnClick(evt) {
        if (
          evt.target.classList.contains("modal_open") || 
          evt.target.classList.contains("modal__close-img")) {
            return this.close();
        }
    }
    _closeModalOnEscape(evt) {
        if (evt.key === "Escape") {
            return this.close();
        }
    }

    open() {
        this._popupElement.classList.add("modal_open");
        document.addEventListener("click", this._closeModalOnClick);
        document.addEventListener("keydown", this._closeModalOnEscape);
    }

    close() {
        this._popupElement.classList.remove("modal_open");
        document.removeEventListener("click", this._closeModalOnClick);
        document.removeEventListener("keydown", this._closeModalOnEscape);
    }
}

export default Popup;