
const openedModal = document.querySelector('.main')
const modal = document.querySelector('.modal')
const body = document.querySelector('body')
console.log(body)
openedModal.addEventListener("click", openModal);

export function openModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  } else {

    modal.classList.remove("is-hidden")
    body.classList.add("body")
      console.log('re')
  }
}

const overlayClick = document.querySelector(".backdrop");

overlayClick.addEventListener("click", onOverlayClick);

function onOverlayClick() {
  closeModal();
}
window.addEventListener("keydown", onOverlaykey);

function onOverlaykey(evt) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    closeModal();
  }
}

function closeModal() {
  modal.classList.add("is-hidden");
  body.classList.remove("body")
    modalImg.src = ``;
    
}

