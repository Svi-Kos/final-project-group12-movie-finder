import debounce from 'lodash.debounce';
import './styles/styles.css';
import './styles/stylesForHeader.css';
import './styles/stylesForMain.css';
import './styles/stylesForFooter.css';
import './styles/stylesForModal.css';
import ApiService from './js/apiService';
import MainApiService from './js/mainApiServise'
import './js/modal'
import cardFilmTpl from './templates/card-film.hbs'
// import getRefs from './js/refs';
import header from './partials/header.hbs';
import main from './partials/main.hbs';
import footer from './partials/footer.hbs';
import modal from './templates/modal.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import teamTpl from './templates/team-markup.hbs';
import teamList from './js/team';

const headerEl = document.querySelector('.header');
// const mainEl = document.querySelector('.main');
const footerEl = document.querySelector('.footer');
const modalEl = document.querySelector('.modal');

const headerMarkup = header();
// const mainMarkup = main();
const footerMarkup = footer();
const modalMarkup = modal();

headerEl.insertAdjacentHTML('beforeend', headerMarkup);
// mainEl.insertAdjacentHTML('beforeend', mainMarkup);
footerEl.insertAdjacentHTML('beforeend', footerMarkup);
modalEl.insertAdjacentHTML('beforeend', modalMarkup);

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  dataContainer: document.querySelector('.js-data-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),

  modalFooterEl: document.querySelector('.js-team'),
  teamBtn: document.querySelector('.button-team'),
  closeTeamBtn: document.querySelector('[data-action="close-btn-team"]'),
  modalTeamOverlay: document.querySelector('.team__overlay'),
};

const moviesApiService = new ApiService();
const trendMoviesApiServise = new MainApiService();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));
refs.loadMoreBtn.addEventListener('click', onLoadMore);

trendMoviesApiServise.fetchMoviesTrend().then(appendMovies);


function onSearch(event) {
  const form = event.target;
  moviesApiService.query = form.value;
  moviesApiService.resetPage();
  moviesApiService.fetchMovies().then(appendMovies);
}

function onLoadMore() {
  trendMoviesApiServise.fetchMoviesTrend().then(appendMovies);

  moviesApiService.fetchMovies().then(appendMovies);

}

function appendMovies(results) {
  refs.dataContainer.insertAdjacentHTML('beforeend', cardFilmTpl(results));
  console.log(refs.dataContainer.offsetWidth);
}



// header buttons switches by Dasha

const refsHeader
  = {
  
  header: document.querySelector(".header"),
  searchInfo: document.querySelector("#notify-text"),
  searchIconRef: document.querySelector(".search-icon"),
  pageHomeRef: document.querySelector(`[data-nav-choice="home"]`),
  pageMyLibraryRef: document.querySelector(`[data-nav-choice="my-library"]`),
  buttonListRef: document.querySelector(
    `[data-button-list-header="watched-and-queue"]`
  ),
  inputSearchRef: document.querySelector(".search-field"),
};





refsHeader.pageMyLibraryRef.addEventListener("click", onLibraryClick)
  
  

  function onLibraryClick(event) {
  // refsHeader.pageHomeRef.classList.remove("is-active");
  refsHeader.pageMyLibraryRef.classList.add("is-active");
  refsHeader.pageHomeRef.classList.remove("is-active");

  refsHeader.searchInfo.textContent = "";

  refsHeader.buttonListRef.classList.remove("not-visible");
  refsHeader.header.className = "header-lib";
  refsHeader.inputSearchRef.classList.add("not-visible");
  refsHeader.searchIconRef.classList.add("not-visible");
};


refsHeader.pageHomeRef.addEventListener("click", onHomeClick);
function onHomeClick(event) {
  refsHeader.pageHomeRef.classList.add("is-active");
  refsHeader.pageMyLibraryRef.classList.remove("is-active");

  refsHeader.buttonListRef.classList.add("not-visible");
  refsHeader.header.className = "header";

  refsHeader.inputSearchRef.classList.remove("not-visible");
  refsHeader.searchIconRef.classList.remove("not-visible");
};