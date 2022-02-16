import './index.css';

import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDelete from '../components/PopupDelete.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import {
  initialCards,
  editModalWindowSelector,
  deleteCardWindow,
  placesList,
  modalEditBtn,
  addModalButton,
  modalNameInput,
  modalBioInput,
  formValidationConfig,
  profileImage,
  addFormEl,
  editFormEl,
  profileName,
  profileBio,
  addModalWindowSelector,
  cardTemplate,
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


Promise.all([api.getInitialCards(), api.getUserInfo()])
.then( ([initialCards, userInfo]) => {
  const {
      name,
      bio,
      avatar,
      _id
  } = userInfo;
  userData.setUserInfo({
      name: name,
      job: bio,
      _id: _id,
      avatar: avatar
  })
  defaultCardList.renderedItems = initialCards;
  defaultCardList.renderItems();
})
.catch(err => `Unable to load data: ${err}`)

// Create new instances

const addFormValidator = new FormValidator(formValidationConfig, addFormEl);
const editFormValidator = new FormValidator(formValidationConfig, editFormEl);
function renderCard(item) {
    const card = new Card ({
        data: item,
        handleCardClick: (data) => imagePopup.open(data),
        userId: userData.getUserId(),
        openDeleteModal: function openDeleteModal() {
            deleteCardWindow.open(item._id, cardElement);
        },
        handleCardLike: function handleCardLike() {
            if (card.isLiked()) {
                api.toggleCardLikes(item._id)
                    .then((data) => card.changeLikeStatys(data))
                    .catch(err => console.log(`Error: ${err}`))
            }
        }
    },
    cardTemplate);
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
  cardTemplate,
);

const imagePopup = new PopupWithImage('#js-preview-modal');

const userData = new UserInfo({
  userName: profileName,
  userJob: profileBio,
  userAvatar: profileImage
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

/* const handleDeleteImgFormSubmit = (cardID, something ) => {
//call the api function
  api.removeCard(cardID)
    .then(() => {
      something
    })
    .catch(err => console.log(err));
}

const deleteImagePopup = new PopupDelete(
  {
    handleFormSubmit: handleDeleteImgFormSubmit,
  },
  deleteCardWindow,
); */

// Setup classes
defaultCardList.renderItems();
editPopup.setEventListeners();
addCardPopup.setEventListeners();
addFormValidator.enableValidation();
editFormValidator.enableValidation();

// handle other
modalEditBtn.addEventListener('click', () => {
  const { name, job } = userData.getUserInfo();
  modalNameInput.value = name;
  modalBioInput.value = job;

  editPopup.open();
});

addModalButton.addEventListener('click', () => {
  addCardPopup.open();
});


  /*const card = new Card(item, '#card-template', (name, image) => {
        imagePopup.open({ name, image });
    });
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);*/