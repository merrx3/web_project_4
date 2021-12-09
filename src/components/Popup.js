class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(".popup__form");
        this._closeModalOnEscape = this._closeModalOnEscape.bind(this);
    }

    _closeModalOnEscape(evt) {
        if (evt.key === "Escape") {
            return close(document.querySelector(".modal_open"));
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("modal_open")) {
                return close(evt.target);
            }
        });
    }

    open() {
        this._popupElement.classList.add("modal_open");
        document.addEventListener("click", closeModalOnClick);
        document.addEventListener("keydown", this._closeModalOnEscape);
    }

    close() {
        this._popupElement.classList.remove("modal_open");
        document.removeEventListener("click", closeModalOnClick);
        document.removeEventListener("keydown", this._closeModalOnEscape);
    }
}

export default Popup;