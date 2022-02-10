import './index.css';

import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import {
  initialCards,
  editModalWindowSelector,
  placesList,
  modalEditBtn,
  addModalButton,
  modalNameInput,
  modalBioInput,
  formValidationConfig,
  addFormEl,
  editFormEl,
  profileName,
  profileBio,
  addModalWindowSelector,
} from '../utils/constants.js';
import Api from "../components/Api.js";

//API
const api = new Api ({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    groupID: "group-12",
    headers: {
        authorization: "238e9991-52d4-4161-a913-f4692922eb00",
        "Content-Type": "application/json",
    },
  });

// Create new instances

const addFormValidator = new FormValidator(formValidationConfig, addFormEl);
const editFormValidator = new FormValidator(formValidationConfig, editFormEl);
function renderCard(item) {
    const card = new Card(item, '#card-template', (name, image) => {
        imagePopup.open({ name, image });
    });
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
};

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      renderCard(item);
    },
  },
  placesList,
);

const imagePopup = new PopupWithImage('#js-preview-modal');

const userInfo = new UserInfo({
  userName: profileName,
  userJob: profileBio,
});

const editPopup = new PopupWithForm(
  {
    handleFormSubmit: ({ bio, name }) => {
      userInfo.setUserInfo({ name: name, job: bio });
    },
  },
  editModalWindowSelector,
);

const addCardPopup = new PopupWithForm(
  {
    handleFormSubmit: (item) => {
      renderCard(item);
    },
  },
  addModalWindowSelector,
);

// Setup classes
defaultCardList.renderItems();
editPopup.setEventListeners();
addCardPopup.setEventListeners();
addFormValidator.enableValidation();
editFormValidator.enableValidation();

// handle other
modalEditBtn.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  modalNameInput.value = name;
  modalBioInput.value = job;

  editPopup.open();
});

addModalButton.addEventListener('click', () => {
  addCardPopup.open();
});

let myData = null;

Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then( ([initialCards, userInfo]) => {
      myData = userInfo
      defaultCardList.items = initialCards
      defaultCardList.renderItems()
      myProfileInfo.setAvatar({link: myData.avatar})
      myProfileInfo.setUserInfo({name: myData.name, about: myData.about})
    })
    .catch(err => `Unable to load data: ${err}`)