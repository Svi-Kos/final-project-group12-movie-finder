import ApiModal from './apiServiceModal.js';
import ModalTpl from '../templates/modal.hbs';

const refs = {
openedModal: document.querySelector('.main'),
modal: document.querySelector('.modal'),
  body: document.querySelector('body'),
overlayClick: document.querySelector('.backdrop')
}

refs.openedModal.addEventListener('click', openModal);


export function openModal(event) {
   const movieId = event.target.dataset.src;

  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    refs.modal.classList.remove('is-hidden');
    refs.body.classList.add('body');
    ApiModal.fetchMovie(movieId)
      .then(renderModalCard)
      .catch(err => console.log(err));
  }
}

refs.overlayClick.addEventListener('click', onOverlayClick);

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
  refs.modal.classList.add('is-hidden');
  refs.body.classList.remove('body');
  const markup = ModalTpl();
  refs.modal.insertAdjacentHTML('beforeend', markup)
}

function renderModalCard(data) {
  const markup = ModalTpl(data);
  refs.modal.insertAdjacentHTML('beforeend', markup);
}
