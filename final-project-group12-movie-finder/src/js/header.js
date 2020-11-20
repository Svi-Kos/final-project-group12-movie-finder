// const refs = {
  
//   header: document.querySelector(".header"),
//   searchInfo: document.querySelector("#notify-text"),
//   searchIconRef: document.querySelector(".search-icon"),
//   pageHomeRef: document.querySelector(`[data-nav-choice="home"]`),
//   pageMyLibraryRef: document.querySelector(`[data-nav-choice="my-library"]`),
//   buttonListRef: document.querySelector(
//     `[data-button-list-header="watched-and-queue"]`
//   ),
//   inputSearchRef: document.querySelector(".search-field"),
// };





// refs.pageMyLibraryRef.addEventListener("click", (event) => {
//   refs.pageMyLibraryRef.classList.add("is-active");
//   refs.pageHomeRef.classList.remove("is-active");

//   refs.searchInfo.textContent = "";

//   refs.buttonListRef.classList.remove("not-visible");
//   refs.header.className = "header-lib";
//   refs.inputSearchRef.classList.add("not-visible");
//   refs.searchIconRef.classList.add("not-visible");
// });

// refs.pageHomeRef.addEventListener("click", (event) => {
//   refs.pageHomeRef.classList.add("is-active");
//   refs.pageMyLibraryRef.classList.remove("is-active");

//   refs.buttonListRef.classList.add("not-visible");
//   refs.header.className = "header";

//   refs.inputSearchRef.classList.remove("not-visible");
//   refs.searchIconRef.classList.remove("not-visible");
// });