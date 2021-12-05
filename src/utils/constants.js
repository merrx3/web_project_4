// ====================  //
//    Initial Cards      //
// ====================  //
export const initialCards = [
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


// ====================  //
//       Wrappers        //
// ====================  //
export const editModalWindow = document.querySelector("#js-edit-modal");
export const previewImageModalWindow = document.querySelector("#js-preview-modal");
export const modalEditFormElement = document.querySelector("#modal-edit-form");
export const placesList = ".photo-grid__gallery";
export const addModalWindow = document.querySelector("#js-add-modal");
export const modalAddForm = document.querySelector("#modal-add-form");

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
