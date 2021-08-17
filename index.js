// Wrappers
const modalElement = document.querySelector('.modal');
const modalFormElement = document.querySelector('#modal-edit-form');

// Buttons
const profileLikeBtn = document.querySelector('.photo-grid__like');
const profileHeart = document.querySelector('#black-heart');
const modalEditBtn = document.querySelector('#profile-edit-btn');
const modalCloseBtn = document.querySelector('#modal-close-btn');

//Form data
const modalNameInput = document.querySelector('#modal-name-input');
const modalBioInput = document.querySelector('#modal-bio-input');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');

function toggleModalWindow() {
    modalElement.classList.toggle('modal_open');

    if (modalElement.classList.contains('modal_open')) {
        modalNameInput.value = profileName.textContent;
        modalBioInput.value = profileBio.textContent;
    }
}

function formSubmit(e) {
    e.preventDefault();
    profileName.textContent = modalNameInput.value;
    profileBio.textContent = modalBioInput.value;
    toggleModalWindow();
}

modalEditBtn.addEventListener("click", toggleModalWindow);
modalCloseBtn.addEventListener("click", toggleModalWindow);
modalFormElement.addEventListener("submit", formSubmit);
