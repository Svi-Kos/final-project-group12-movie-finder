import ApiModal from './apiServiceModal.js';
import ModalTpl from '../templates/modal.hbs';
import Card from '../templates/card-film.hbs';


const openedModal = document.querySelector('.main');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

openedModal.addEventListener('click', openModal);
let movieId =''

export function openModal(event) {
   movieId = event.target.dataset.src;

  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    modal.classList.remove('is-hidden');
    body.classList.add('body');
    ApiModal.fetchMovie(movieId)
      .then(renderModalCard)
      .catch(err => console.log(err));
  }
}

const overlayClick = document.querySelector('.backdrop');

overlayClick.addEventListener('click', onOverlayClick);

function onOverlayClick(e) {
  closeModal();
  console.log(e)
}
window.addEventListener('keydown', onOverlaykey);

function onOverlaykey(evt) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    closeModal();
  }
}

function closeModal() {
  modal.classList.add('is-hidden');
  body.classList.remove('body');
 modal.insertAdjacentHTML('beforeend', "");
}

function renderModalCard(data) {
  const markup = ModalTpl(data);
  modal.insertAdjacentHTML('beforeend', markup);
}
