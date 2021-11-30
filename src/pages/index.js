import "./index.css";

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import { openModal, closeModal, closeModalOnClick, closeModalOnEscape} from "../utils/utils.js";

const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
        alt: "",
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
        alt: "",
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
        alt: "",
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg",
        alt: "",
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
        alt: "",
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg",
        alt: "",
    },
];

// =====
// Wrappers
// =====
const editModalWindow = document.querySelector("#js-edit-modal");
const previewImageModalWindow = document.querySelector("#js-preview-modal");
const modalEditFormElement = document.querySelector("#modal-edit-form");
const placesList = document.querySelector(".photo-grid__gallery");
const addModalWindow = document.querySelector("#js-add-modal");
const modalAddForm = document.querySelector("#modal-add-form");




// =====
// Buttons
// =====
const modalEditBtn = document.querySelector("#profile-edit-btn");
const editModalCloseBtn = editModalWindow.querySelector("#modal-close-btn");
const addModalButton = document.querySelector(".profile__add-button");
const addModalCloseBtn = addModalWindow.querySelector("#add-close-btn");
const previewImageCloseBtn = previewImageModalWindow.querySelector("#preview-close-btn");
const saveModalBtn = document.querySelector(".modal__save-btn");
const createModalBtn = document.querySelector(".modal__create-btn");


// =====
// Inputs
// =====
const modalNameInput = document.querySelector(".modal-name-input");
const modalBioInput = document.querySelector(".modal-bio-input");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const postTitle = document.querySelector(".modal__input-text_title"); 
const postLink = document.querySelector(".modal__input-text_link"); 


// =====
// Templates
// =====
const cardTemplate = document.querySelector("#card-template").content.querySelector(".photo-grid__post");

// =====
// Handlers
// =====


//Submits edited profile
const submitEditForm = (e) => {
    e.preventDefault();

    profileName.textContent = modalNameInput.value;
    profileBio.textContent = modalBioInput.value;
};

//Fills in information inputted
function openEditModal() {
    modalNameInput.value = profileName.textContent;
    modalBioInput.value = profileBio.textContent;
    openModal(editModalWindow);
}

function renderCard(card, container, handleCardClick) {
    const newCard = new Card(card, '#card-template', handleCardClick).generateCard();
    //append it to list
    container.append(newCard);
}

function addRenderCard(card, container, handleCardClick) {
    //append it to list
    const newCard = new Card(card, '#card-template', handleCardClick).generateCard();
    container.prepend(newCard);
}

function addFormSubmit(evt) {
    createModalBtn.disabled = true;
    createModalBtn.classList.add("popup__button_disabled");
    evt.preventDefault();
    const cardData = {
        name: postTitle.value,
        link: postLink.value,
      }
      addRenderCard(cardData, placesList);
    evt.target.reset();
}

modalAddForm.addEventListener("submit", addFormSubmit);

// =====
// Event Listeners
// =====
modalEditBtn.addEventListener("click", openEditModal);
editModalCloseBtn.addEventListener("click", () => closeModal(editModalWindow));
modalEditFormElement.addEventListener("submit", submitEditForm);
addModalButton.addEventListener("click", () => openModal(addModalWindow));
addModalCloseBtn.addEventListener("click", () => closeModal(addModalWindow));
previewImageCloseBtn.addEventListener("click", () => closeModal(previewImageModalWindow));
saveModalBtn.addEventListener("click", () => closeModal(editModalWindow));
createModalBtn.addEventListener("click", () => closeModal(addModalWindow));

initialCards.forEach(function (cardElement) {
    renderCard(cardElement, placesList);
});

//=====
//Validation
//=====
const addFormEl = addModalWindow.querySelector('.popup__form');
const editFormEl = editModalWindow.querySelector('.popup__form');

export const formValidationConfig = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
}

const addFormValidator = new FormValidator(formValidationConfig, addFormEl);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, editFormEl);
editFormValidator.enableValidation();