const modalElement = document.querySelector('.modal');
const profileLikeBtn = document.querySelector('.photo-grid__like');
const profileHeart = document.querySelector('#black-heart');
const modalEditBtn = document.querySelector('#profile-edit-btn');
const modalCloseBtn = document.querySelector('#modal-close-btn');
const modalFormElement = document.querySelector('#modal-edit-form');
const modalNameInput = document.querySelector('#modal-name-input');
const modalBioInput = document.querySelector('#modal-bio-input');
const profileName = document.querySelector('.js-profile-name');
const profileBio = document.querySelector('.js-profile-bio');


function closePopup() { 
    modalElement.classList.remove('modal__open');
}

function openPopup() {
    modalElement.classList.add('modal__open');
}

modalEditBtn.addEventListener("click", openPopup);

modalCloseBtn.addEventListener("click", closePopup);

modalFormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    profileName.textContent = modalNameInput.value;
    profileBio.textContent = modalBioInput.value;
    closePopup();
});