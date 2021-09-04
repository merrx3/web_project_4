const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ]; 


// =====
// Wrappers
// =====
const editModalWindow = document.querySelector('.js-edit-modal');
const previewImageModalWindow = document.querySelector('.js-preview-modal');
const modalEditFormElement = document.querySelector('#modal-edit-form');
const placesList = document.querySelector('.photo-grid__gallery');
const previewImageElement = document.querySelector('.modal__preview-image');
const previewImageCaption = document.querySelector('.modal__preview-caption');
const modalAddFormElement = document.querySelector('#modal-add-form');
const addModalWindow = document.querySelector('.js-add-modal');



// =====
// Buttons
// =====
const profileLikeBtn = document.querySelector('.photo-grid__like');
const profileHeart = document.querySelector('#black-heart');
const modalEditBtn = document.querySelector('#profile-edit-btn');
const editModalCloseBtn = editModalWindow.querySelector('#modal-close-btn');
const addModalButton = document.querySelector('.profile__add-button');
const addModalCloseBtn = addModalWindow.querySelector('#add-close-btn');
const previewImageCloseBtn = previewImageModalWindow.querySelector('#preview-close-btn');
const modalAddForm = document.querySelector('#modal-add-form');
const saveModalBtn = document.querySelector('.modal__save-btn');
const createModalBtn = document.querySelector('.modal__create-btn');



// =====
// Inputs
// =====
const modalNameInput = document.querySelector('#modal-name-input');
const modalBioInput = document.querySelector('#modal-bio-input');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
const postTitle = document.querySelector('.modal__input-text_title');
const postLink = document.querySelector('.modal__input-text_link');



// =====
// Templates
// =====
const cardTemplate = document.querySelector('#card-template').content.querySelector('.photo-grid__post');


// =====
// Handlers
// =====
function toggleModalWindow(modal) {
    modal.classList.toggle('modal_open');
}

function editFormSubmit(e) {
    e.preventDefault();

    profileName.textContent = modalNameInput.value;
    profileBio.textContent = modalBioInput.value;
}

function openEditModal() {
    modalNameInput.value = profileName.textContent;
    modalBioInput.value = profileBio.textContent;
}

function generateCard(card) {
    const cardElement = cardTemplate.cloneNode(true);

    function deleteCard(e) {
        e.target.closest('.photo-grid__post').remove();
    }
    const deleteCardBtn = cardElement.querySelector('.photo-grid__trash-btn');
    deleteCardBtn.addEventListener("click", deleteCard);

    function activeLikeBtn(cardElement) {
        cardElement.classList.toggle('photo-grid__like-btn_active');
        }
    const likeBtn = cardElement.querySelector('.photo-grid__like-btn');
    const photoLikeBtn = cardElement.querySelector('#js-like-btn');
    photoLikeBtn.addEventListener("click", () => activeLikeBtn(likeBtn));
    
    cardElement.querySelector('.photo-grid__caption').textContent = card.name;
    const imageEl = cardElement.querySelector('.photo-grid__photo');
    imageEl.style.backgroundImage = `url(${card.link})`;

    imageEl.addEventListener("click", function() {
        previewImageElement.src = card.link;
        previewImageCaption.textContent = card.name
        toggleModalWindow(previewImageModalWindow);
    });
    return cardElement;
}

function renderCard(card, container) {
    //append it to list
    container.append(card);
}

function addRenderCard(card, container) {
    //append it to list
    container.prepend(card);
}

function addFormSubmit(evt) {
    evt.preventDefault();
    const newPost = {
        "name": postTitle.value,
        "link": postLink.value
    }
    const newPostElement = generateCard(newPost);
    addRenderCard(newPostElement, placesList);
}
modalAddForm.addEventListener("submit", addFormSubmit);


// =====
// Event Listeners
// =====
modalEditBtn.addEventListener("click", () => toggleModalWindow(editModalWindow));
modalEditBtn.addEventListener('click', () => openEditModal(editFormSubmit));
editModalCloseBtn.addEventListener("click", () => toggleModalWindow(editModalWindow));
modalEditFormElement.addEventListener("submit", editFormSubmit);
addModalButton.addEventListener("click", () => toggleModalWindow(addModalWindow));
addModalCloseBtn.addEventListener("click", () => toggleModalWindow(addModalWindow));
previewImageCloseBtn.addEventListener("click", () => toggleModalWindow(previewImageModalWindow));
saveModalBtn.addEventListener("click", () => toggleModalWindow(editModalWindow));
createModalBtn.addEventListener("click", () => toggleModalWindow(addModalWindow));




initialCards.forEach(function(card) {
    const newCard = generateCard(card);
    renderCard(newCard, placesList);
});

