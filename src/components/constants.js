const popupProfile = document.querySelector('.popup_type_profile');
const popupCard= document.querySelector('.popup_type_card');
const popupImage= document.querySelector('.popup_type_image');
const popupCloseProfile = document.querySelector('.popup__btn-profile');
const popupCloseCard = document.querySelector('.popup__btn-card');
const popupCloseImage = document.querySelector('.popup__btn-image');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupProfileName = document.querySelector('.popup__profile-name')
const popupProfileProf = document.querySelector('.popup__profile-prof')
const profileName = document.querySelector('.profile__name');
const profileProf = document.querySelector('.profile__prof');
const cards = document.querySelector('.elements');
const cardTemplate = document.querySelector('#template-element').content;
const popupCardName = document.querySelector('.popup__card-name');
const popupCardLink = document.querySelector('.popup__card-link');
const popupOverlay = document.querySelectorAll('.popup');

const variablesValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

export {popupProfile,popupCard,popupImage,popupCloseProfile,popupCloseCard,popupCloseImage,editButton,addButton,popupProfileName,popupProfileProf,profileName,profileProf,cards,cardTemplate,popupCardName,popupCardLink,popupOverlay,variablesValidation}