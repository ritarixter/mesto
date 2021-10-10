import './index.css'
import {editButton,popupProfile,popupProfileName,popupProfileProf,profileName,profileProf,addButton,popupCloseProfile,popupCloseCard,popupCard,popupImage,popupOverlay,variablesValidation,popupCloseImage,cards} from '../components/constants.js';
import {initialCards} from "../components/initial-сards.js";
import {openPopup,closePopup,handleProfileFormSubmit,closePopupOverlay} from "../components/modal.js";
import {createCard,handleCardFormSubmit} from "../components/card.js";
import enableValidation from "../components/validate.js"

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

popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCard.addEventListener('submit',handleCardFormSubmit);

initialCards.forEach(item => {
  cards.prepend(createCard(item.link,item.name));
})

enableValidation(variablesValidation);