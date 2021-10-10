import {popupCardName,popupCardLink,popupCard,popupImage,cardTemplate,cards} from "./constants.js"
import {openPopup, closePopup} from "./modal.js"

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
}

function handleCardFormSubmit(evt){
  evt.preventDefault(); 
  cards.prepend(createCard(popupCardLink.value,popupCardName.value));
  popupCardName.value='';
  popupCardLink.value='';
  closePopup(popupCard);
}

export {createCard,handleCardFormSubmit};