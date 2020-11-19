
const openedModal = document.querySelector('.main')
const modal = document.querySelector('.modal')
console.log(openedModal)
openedModal.addEventListener("click", openModal);

export function openModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  } else {

      modal.classList.remove("is-hidden")
      console.log('re')
      window.addEventListener('scroll', (e) => {
  window.scrollTo(0,0);
});
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
    modalImg.src = ``;
    
}

