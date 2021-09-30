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
