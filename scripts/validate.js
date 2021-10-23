const showInputError = (input, formElement, { errorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error");
    //add error class/messge
    errorSpan.textContent = input.validationMessage;
    input.classList.add(errorClass);
};

const hideInputError = (input, formElement, { errorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error");
    //add error class/messge
    errorSpan.textContent = "";
    input.classList.remove(errorClass);
};

const checkInputValidity = (formElement, input, settings) => {
    if (input.validity.valid) {
        hideInputError(input, formElement, settings);
    } else {
        showInputError(input, formElement, settings);
    }
};

const hasValidInputs = (inputList) => {
    return inputList.every((input) => input.validity.valid === true);
};

const toggleButtonState = (inputList, submitButton, settings) => {
    if (hasValidInputs(inputList)) {
        submitButton.disabled = false;
        submitButton.classList.remove(settings.inactiveButtonClass);
    } else {
        submitButton.disabled = true;
        submitButton.classList.add(settings.inactiveButtonClass);
    }
};

const setEventListeners = (formElement, settings) => {
    const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
    const submitButton = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach((input) => {
        input.addEventListener("input", () => {
            //check validity
            checkInputValidity(formElement, input, settings);
            //toggle button
            toggleButtonState(inputList, submitButton, settings);
        });
    });
};

const enableValidation = (settings) => {
    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach((formElement) => {
        formElement.addEventListener("submit", (e) => e.preventDefault());
        setEventListeners(formElement, settings);
    });
};

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
});
