import "./index.css";

import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm  from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';

import { openModal, closeModal, closeModalOnClick, closeModalOnEscape} from "../utils/utils.js";
import { initialCards } from "../utils/constants.js";
import {editModalWindow, previewImageModalWindow, modalEditFormElement, placesList, addModalWindow, modalAddForm} from "../utils/constants.js";
import { modalEditBtn, editModalCloseBtn, addModalButton, addModalCloseBtn, previewImageCloseBtn, saveModalBtn, createModalBtn } from "../utils/constants.js";
import { modalNameInput,modalBioInput, profileName, profileBio, postTitle, postLink } from "../utils/constants.js";
import { cardTemplate } from "../utils/constants.js";

// =====
// Handlers
// =====

const defaultCardList = new Section({
    data: initialCards,
    renderer: (item) => {
      const card = new DefaultCard(item, "#card-template");
      const cardElement = card.generateCard();
      defaultCardList.setItem(cardElement);
    }
  }, placesList);

  defaultCardList.renderCard();

const imagePopup = new PopupWithImage("#js-preview-modal");
imagePopup.setEventListeners();

const handleCardClick = (image, caption) => {
    imagePopup.open({ image, caption });
};

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

function renderCard(card, container) {
    const newCard = new Card(card, '#card-template', handleCardClick).generateCard();
    //append it to list
    container.append(newCard);
}

function addRenderCard(card, container) {
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