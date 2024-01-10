export default function Card(url, name) {

  const card = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
  const cardPic = card.querySelector('.card__img');
  const cardName = card.querySelector('.card__name');
  const cardLike = card.querySelector('.card__like-counter');
  const likeButton = card.querySelector('.card__like-button');
  const deleteButton = card.querySelector('.card__delete-button');
  cardPic.src = url;
  cardName.innerText = name;  

  function setCardLike() {
    if(cardLike.innerText === '0') {
      cardLike.innerText = 1
    } else {
      cardLike.innerText = 0
    } 
  }

  function deleteCard() {
    card.remove();
  }

  function handleEventListeners() {
    likeButton.addEventListener('click', setCardLike);
    deleteButton.addEventListener('click', deleteCard);
  }

  handleEventListeners();
  document.querySelector('.photo').prepend(card);
}