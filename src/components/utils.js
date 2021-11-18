import Card from "./Card.js";

export function openModal(modal) {
    modal.classList.add("modal_open");
    document.addEventListener("click", closeModalOnClick);
    document.addEventListener("keydown", closeModalOnEscape);
}

export function closeModal(modal) {
    modal.classList.remove("modal_open");
    document.removeEventListener("click", closeModalOnClick);
    document.removeEventListener("keydown", closeModalOnEscape);
}


export function closeModalOnClick(evt) {
    if (evt.target.classList.contains("modal_open")) {
        return closeModal(evt.target);
    }
}

export function closeModalOnEscape(evt) {
    if (evt.key === "Escape") {
        return closeModal(document.querySelector(".modal_open"));
    }
}

