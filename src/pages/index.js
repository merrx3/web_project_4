import "./index.css";

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
  addModalWindow, // should be a selector
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
// Create new instances

const addFormValidator = new FormValidator(formValidationConfig, addFormEl);
const editFormValidator = new FormValidator(formValidationConfig, editFormEl);

const defaultCardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, '#card-template', (name, link) => {
        imagePopup.open({ name, link });
      });
      const cardElement = card.generateCard();
      defaultCardList.setItem(cardElement);
    },
  },
  placesList,
);

const imagePopup = new PopupWithImage('#js-preview-modal');

const userInfo = new UserInfo({
  nameSelector: profileName,
  bioSelector: profileBio,
});

const editPopup = new PopupWithForm(
  {
    handleFormSubmit: ({ bio, name }) => {
      userInfo.setUserInfo({ userName: name, userBio: bio });
    },
  },
  editModalWindowSelector,
);

const addCardPopup = new PopupWithForm(
    {
    addFormSubmit: ({name, link}) => {
          defaultCardList.setItem({name, link});
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
  const { userName, userBio } = userInfo.getUserInfo();
  modalNameInput.value = userName;
  modalBioInput.value = userBio;

  editPopup.open();
});

addModalButton.addEventListener('click', () => {
    addCardPopup.open(); 
})
