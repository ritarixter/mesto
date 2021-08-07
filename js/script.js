const popup_profile = document.querySelector('.popup__profile-edit');
const popup_card= document.querySelector('.popup__card-edit');
const popup_image= document.querySelector('.popup__image');
const popup_close_profile = document.querySelector('.popup__btn-profile');
const popup_close_card = document.querySelector('.popup__btn-card');
const popup_close_image = document.querySelector('.popup__btn-image');
const edit_button = document.querySelector('.profile__edit-button');
const add_button = document.querySelector('.profile__add-button');
const popup_inputs =  document.querySelectorAll('.popup__input');
const profile__name = document.querySelector('.profile__name');
const profile__prof = document.querySelector('.profile__prof');
const cards = document.querySelector('.elements');
const popup__card_save = document.querySelector('.popup__card-save');
const likes = document.querySelectorAll('.element__btn');
const cards_delete = document.querySelectorAll('.element__delete');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

edit_button.addEventListener('click', function(){
  popup_profile.classList.add('popup_opened');
  popup_inputs[0].value = profile__name.textContent;
  popup_inputs[1].value = profile__prof.textContent;
});

add_button.addEventListener('click', function(){
  popup_card.classList.add('popup_opened');
  //popup_inputs[0].value = profile__name.textContent;
  //popup_inputs[1].value = profile__prof.textContent;
});

popup_close_profile.addEventListener('click', function(){
  popup_profile.classList.remove('popup_opened');
})

popup_close_card.addEventListener('click', function(){
  popup_card.classList.remove('popup_opened');
})

popup_close_image.addEventListener('click', function(){
  popup_image.classList.remove('popup_opened');
})

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profile__name.textContent = popup_inputs[0].value;
  profile__prof.textContent = popup_inputs[1].value;
  popup_profile.classList.remove('popup_opened');
}

popup_profile.addEventListener('submit', formSubmitHandler);

function addCard (imgValue,nameValue) {
  const cardTemplate = document.querySelector('#template-element').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src=imgValue;
  cardElement.querySelector('.element__name').textContent=nameValue;
  cardElement.querySelector('.element__btn').addEventListener('click', function(evt){
    evt.target.classList.toggle('element__btn_active');
  })
  cardElement.querySelector('.element__delete').addEventListener('click', function(evt){
    const card_delete_btn = evt.target
    const card_element = card_delete_btn.closest('.element') 
    card_element.remove();
  })

  cardElement.querySelector('.element__image').addEventListener('click', function(evt){
    popup_image.classList.add('popup_opened');
    document.querySelector('.popup__img').src=evt.target.src;
  })
  
  cards.prepend(cardElement);
}

function cardSubmit(evt){
  evt.preventDefault(); 
  const popup__card_name = document.querySelector('.popup__card-name');
  const popup__card_link = document.querySelector('.popup__card-link');
  addCard(popup__card_link.value,popup__card_name.value);
  popup__card_name.value='';
  popup__card_link.value='';
  popup_card.classList.remove('popup_opened');
}

popup_card.addEventListener('submit',cardSubmit);

likes.forEach(function(like) {
like.addEventListener('click', function(evt){
  evt.target.classList.toggle('element__btn_active');
})
})

cards_delete.forEach(function(card_delete) {
card_delete.addEventListener('click', function(evt){
  const card_delete_btn = evt.target
  const card_element = card_delete_btn.closest('.element') 
  card_element.remove();
})
})

initialCards.forEach(item => {
  addCard(item.link,item.name);
})

/*addCard(initialCards[0].link,initialCards[0].name);
addCard(initialCards[1].link,initialCards[1].name);
addCard(initialCards[2].link,initialCards[2].name);
addCard(initialCards[3].link,initialCards[3].name);
addCard(initialCards[4].link,initialCards[4].name);
addCard(initialCards[5].link,initialCards[5].name);*/

const element_images = document.querySelectorAll('.element__image');

element_images.forEach(function(element_image){
  element_image.addEventListener('click', function(){
    popup_image.classList.add('popup_opened');
    document.querySelector('.popup__img').src=element_image.src;
  })
})