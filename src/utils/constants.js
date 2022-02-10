// ====================  //
//    Initial Cards      //
// ====================  //
export const initialCards = [
    {
        name: "Yosemite Valley",
        image: "https://code.s3.yandex.net/web-code/yosemite.jpg",
        alt: "",
    },
    {
        name: "Lake Louise",
        image: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
        alt: "",
    },
    {
        name: "Bald Mountains",
        image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
        alt: "",
    },
    {
        name: "Latemar",
        image: "https://code.s3.yandex.net/web-code/latemar.jpg",
        alt: "",
    },
    {
        name: "Vanoise National Park",
        image: "https://code.s3.yandex.net/web-code/vanoise.jpg",
        alt: "",
    },
    {
        name: "Lago di Braies",
        image: "https://code.s3.yandex.net/web-code/lago.jpg",
        alt: "",
    },
];


// ====================  //
//       Wrappers        //
// ====================  //
export const editModalWindowSelector = "#js-edit-modal";
export const editModalWindow = document.querySelector(editModalWindowSelector);
export const previewImageModalWindow = document.querySelector("#js-preview-modal");
export const modalEditFormElement = document.querySelector("#modal-edit-form");
export const placesList = ".photo-grid__gallery";
export const addModalWindowSelector = "#js-add-modal";
export const editAvatarWindow = document.querySelector("#js-edit-avatar-modal");
export const deleteCardWindow = document.querySelector("#js-delete-modal");
export const addModalWindow = document.querySelector(addModalWindowSelector);
export const modalAddForm = document.querySelector("#modal-add-form");
export const addFormEl = addModalWindow.querySelector('.popup__form');
export const editFormEl = editModalWindow.querySelector('.popup__form');

// ====================  //
//        Buttons        //
// ====================  //
export const modalEditBtn = document.querySelector("#profile-edit-btn");
export const editModalCloseBtn = editModalWindow.querySelector("#modal-close-btn");
export const addModalButton = document.querySelector(".profile__add-button");
export const addModalCloseBtn = addModalWindow.querySelector("#add-close-btn");
export const previewImageCloseBtn = previewImageModalWindow.querySelector("#preview-close-btn");
export const saveModalBtn = document.querySelector(".modal__save-btn");
export const createModalBtn = document.querySelector(".modal__create-btn");

// ====================  //
//        Inputs         //
// ====================  //
export const modalNameInput = document.querySelector(".modal-name-input");
export const modalBioInput = document.querySelector(".modal-bio-input");
export const profileName = document.querySelector(".profile__name");
export const profileBio = document.querySelector(".profile__bio");
export const postTitle = document.querySelector(".modal__input-text_title"); 
export const postLink = document.querySelector(".modal__input-text_link"); 

// ====================  //
//       Templates       //
// ====================  //
export const cardTemplate = document.querySelector("#card-template").content.querySelector(".photo-grid__post");
export const formValidationConfig = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
}