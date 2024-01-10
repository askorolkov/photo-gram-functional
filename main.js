import Card from "./src/components/Card";
import { formValidator } from "./src/utils/formValidator";

import { cardItems } from "./src/utils/constants";
import { validationConfig } from "./src/utils/constants";

const pictureAddButton = document.querySelector('.profile__add-picture');
const picturePopup = document.querySelector('#addPicture');
const pictureCloseButton = picturePopup.querySelector('.popup__close');
const pictureForm = picturePopup.querySelector('.popup__form');
const pictureNameInput = pictureForm.querySelector('#pictureName');
const pictureUrlInput = pictureForm.querySelector('#pictureUrl');

const profileEditButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('#editProfile');
const profileCloseButton = profilePopup.querySelector('.popup__close');
const profileForm = profilePopup.querySelector('.popup__form');
const profileNameInput = profileForm.querySelector('#profileName');
const profileJobInput = profileForm.querySelector('#profileJob');
const profileAvatarInput = profileForm.querySelector('#profileAvatar');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileAvatar = document.querySelector('.profile__pic');

function addPictureSubmit(e) {
  e.preventDefault();
  Card(pictureUrlInput.value, pictureNameInput.value);  
  closePicturePopup();
}

function openPicturePopup(e) {
  picturePopup.classList.add('popup__open');
}

function closePicturePopup() {
  picturePopup.classList.remove('popup__open');
  pictureNameInput.value = '';
  pictureUrlInput.value = '';
}

function editProfileSubmit(e) {
  e.preventDefault();
  profileName.innerText = profileNameInput.value;
  profileJob.innerText = profileJobInput.value;
  profileAvatar.src = profileAvatarInput.value;
  closeProfilePopup();
}

function openProfilePopup() {
  profileNameInput.value = profileName.innerText;
  profileJobInput.value = profileJob.innerText;
  profileAvatarInput.value = profileAvatar.src;
  console.log(profileAvatarInput.value)
  profilePopup.classList.add('popup__open');
}

function closeProfilePopup() {
  profilePopup.classList.remove('popup__open');
  profileNameInput.value = '';
  profileJobInput.value = '';
}

pictureForm.addEventListener('submit', addPictureSubmit);
pictureAddButton.addEventListener('click', openPicturePopup);
pictureCloseButton.addEventListener('click', closePicturePopup);

profileForm.addEventListener('submit', editProfileSubmit);
profileEditButton.addEventListener('click', openProfilePopup);
profileCloseButton.addEventListener('click', closeProfilePopup);

for(let i of cardItems) {
  Card(i.url, i.name)
}

formValidator(validationConfig, profileForm)
formValidator(validationConfig, pictureForm)


