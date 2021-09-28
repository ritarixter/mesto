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

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 

function openPopup(popup) {
  popup.classList.add('popup_opened');
} //1.modal.js

function closePopup(popup) {
  popup.classList.remove('popup_opened');
} //2.modal.js


function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = popupProfileName.value;
  profileProf.textContent = popupProfileProf.value;
  closePopup(popupProfile);
}//3.modal

function createCard (imgValue,nameValue) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src=imgValue;
  cardImage.alt=nameValue;
  cardElement.querySelector('.element__name').textContent=nameValue;
  cardElement.querySelector('.element__btn').addEventListener('click', function(evt){
    evt.target.classList.toggle('element__btn_active');
  })
  cardElement.querySelector('.element__delete').addEventListener('click', function(evt){
    const cardDeleteBtn = evt.target
    const cardElement = cardDeleteBtn.closest('.element') 
    cardElement.remove();
  })

  cardImage.addEventListener('click', function(evt){
    openPopup(popupImage);
    const popupLabel=document.querySelector(".popup__label");
    document.querySelector('.popup__img').src=evt.target.src;
    document.querySelector('.popup__img').alt=evt.target.alt;
    popupLabel.textContent=evt.target.alt;
  })
  return cardElement
}//4 card.js

function handleCardFormSubmit(evt){
  evt.preventDefault(); 
  cards.prepend(createCard(popupCardLink.value,popupCardName.value));
  popupCardName.value='';
  popupCardLink.value='';
  closePopup(popupCard);
}//5 cards.js

editButton.addEventListener('click', function(){
  openPopup(popupProfile);
  popupProfileName.value = profileName.textContent;
  popupProfileProf.value = profileProf.textContent;
});

addButton.addEventListener('click', function(){
  openPopup(popupCard);
});

popupCloseProfile.addEventListener('click', function(){
  closePopup(popupProfile);
})

popupCloseCard.addEventListener('click', function(){
  closePopup(popupCard);
})

popupCloseImage.addEventListener('click', function(){
  closePopup(popupImage);
})

popupOverlay.forEach(item => {
  item.addEventListener('click', function(evt){
    if(evt.target.classList.contains('popup')){
    closePopup(popupImage);
    closePopup(popupCard);
    closePopup(popupProfile);
  }
  });

})

document.addEventListener('keydown', function(evt){
  if(evt.key === "Escape"){
  closePopup(popupImage);  
  closePopup(popupCard);
  closePopup(popupProfile);
}
})


popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit',handleCardFormSubmit);

initialCards.forEach(item => {
  cards.prepend(createCard(item.link,item.name));
})
