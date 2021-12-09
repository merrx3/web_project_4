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
      const card = new Card(item, "#card-template");
      const cardElement = card.generateCard();
      defaultCardList.setItem(cardElement);
    },
    handleCardClick: (image, caption) => {
        imagePopup.open(image, caption);
        imagePopup.setEventListeners();
      },
  }, placesList);

defaultCardList.renderItems();

const imagePopup = new PopupWithImage("#js-preview-modal");

/*const newUserInfo = UserInfo ({
    nameSelector: profileName,
    bioSelector: profileBio
});*/

const editPopup = new PopupWithForm ({
    popupElement: modalEditFormElement,
    handleFormSubmit: (e) => {
        e.preventDefault();
    
        profileName.textContent = modalNameInput.value;
        profileBio.textContent = modalBioInput.value;
    },
}, editModalWindow);

function handleCardClick(card) {
    imagePopup.open(card)
  };

const addCardPopup = new PopupWithForm ({
    popupElement: addModalWindow,
    addFormSubmit: (e) => {
        createModalBtn.disabled = true;
        createModalBtn.classList.add("popup__button_disabled");
        e.preventDefault();
        const cardData = {
            name: postTitle.value,
            link: postLink.value,
          }
          addRenderCard(cardData, placesList);
        e.target.reset();
    },
}, addModalWindow); 

//Submits edited profile
function editFormSubmit(e){
    e.preventDefault();

    profileName.textContent = modalNameInput.value;
    profileBio.textContent = modalBioInput.value;
    editPopup.close();
};

//Fills in information inputted
function openEditPopup() {
    /*modalNameInput.value = profileName.textContent;
    modalBioInput.value = profileBio.textContent;
    openModal(editModalWindow);*/
    editPopup.open();
    editPopup.setEventListeners();
}

function openAddPopup() {
    addCardPopup.open();
    addCardPopup.setEventListeners();
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
function addFormSubmit(e){
    e.preventDefault();
    addCardPopup._handleFormSubmit(e);
    addCardPopup.close();
}
 
/*function addFormSubmit(evt) {
    createModalBtn.disabled = true;
    createModalBtn.classList.add("popup__button_disabled");
    evt.preventDefault();
    const cardData = {
        name: postTitle.value,
        link: postLink.value,
      }
      addRenderCard(cardData, placesList);
    evt.target.reset();
}*/

modalAddForm.addEventListener("submit", addFormSubmit);

// =====
// Event Listeners
// =====
modalEditBtn.addEventListener("click", openEditPopup);
//editModalCloseBtn.addEventListener("click", () => closeModal(editModalWindow));
modalEditFormElement.addEventListener("submit", editFormSubmit);
addModalButton.addEventListener("click", openAddPopup);
modalAddForm.addEventListener("submit", addFormSubmit);
//addModalCloseBtn.addEventListener("click", () => closeModal(addModalWindow));
//previewImageCloseBtn.addEventListener("click", () => closeModal(previewImageModalWindow));
//saveModalBtn.addEventListener("click", () => closeModal(editModalWindow));
//createModalBtn.addEventListener("click", () => closeModal(addModalWindow));

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