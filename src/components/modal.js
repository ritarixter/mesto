function openPopup(popup) {
  popup.classList.add('popup_opened');
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