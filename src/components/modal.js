import {profileName,profileProf,popupProfileName,popupProfileProf,popupProfile} from "./constants.js"


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click',closePopupOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
} 

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = popupProfileName.value;
  profileProf.textContent = popupProfileProf.value;
  closePopup(popupProfile);
}

function closePopupEsc(evt){
  if(evt.key === "Escape")
    closePopup(document.querySelector('.popup_opened'))
    document.removeEventListener('keydown', closePopupEsc);
}


function closePopupOverlay(evt){
  if(evt.target.classList.contains('popup')){
    closePopup(document.querySelector('.popup_opened'))
}
}
export {openPopup,closePopup,handleProfileFormSubmit,closePopupOverlay};