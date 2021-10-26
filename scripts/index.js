import FormValidator from './FormValidator.js';
import Card from './Card.js';

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

//Open Modal
function openModal(modal) {
    modal.classList.add("modal_open");
    document.addEventListener("click", closeModalOnClick);
    document.addEventListener("keydown", closeModalOnEscape);
}

//Close Modal
function closeModal(modal) {
    modal.classList.remove("modal_open");
    document.removeEventListener("click", closeModalOnClick);
    document.removeEventListener("keydown", closeModalOnEscape);
}

//Closes modal on click
function closeModalOnClick(evt) {
    if (evt.target.classList.contains("modal_open")) {
        return closeModal(evt.target);
    }
}

//Closes modal on esc
function closeModalOnEscape(evt) {
    if (evt.key === "Escape") {
        return closeModal(document.querySelector(".modal_open"));
    }
}

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
}

/*function generateCard(card) {
    const cardElement = cardTemplate.cloneNode(true);

    function deleteCard(e) {
        e.target.closest(".photo-grid__post").remove();
    }
    const deleteCardBtn = cardElement.querySelector(".photo-grid__trash-btn");
    deleteCardBtn.addEventListener("click", deleteCard);

    const handleActiveLikeBtn = (cardElement) => {
        cardElement.classList.toggle("photo-grid__like-btn_active");
    };
    const likeBtn = cardElement.querySelector(".photo-grid__like-btn");
    likeBtn.addEventListener("click", () => handleActiveLikeBtn(likeBtn));

    cardElement.querySelector(".photo-grid__caption").textContent = card.name;
    const imageEl = cardElement.querySelector(".photo-grid__photo");
    imageEl.style.backgroundImage = `url(${card.link})`;

    imageEl.addEventListener("click", function () {
        previewImageElement.src = card.link;
        previewImageElement.textContent = card.alt;
        previewImageCaption.textContent = card.name;
        openModal(previewImageModalWindow);
    });
    return cardElement;
}*/

function renderCard(card, container) {
    const newCard = new Card(card, '#card-template').generateCard();
    //append it to list
    container.append(newCard);
}

function addRenderCard(card, container) {
    //append it to list
    const newCard = new Card(card, '#card-template').generateCard();
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
modalEditBtn.addEventListener("click", () => openModal(editModalWindow));
modalEditBtn.addEventListener("click", () => openEditModal(submitEditForm));
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
