import debounce from 'lodash.debounce';
import './styles/styles.css';
import './styles/stylesForHeader.css';
import './styles/stylesForMain.css';
import './styles/stylesForFooter.css';
import './styles/stylesForModal.css';
import ApiService from './js/apiService';
import './js/modal';
import cardFilmTpl from './templates/card-film.hbs';
import MainApiService from './js/mainApiServise';
// import getRefs from './js/refs';
import header from './partials/header.hbs';
import main from './partials/main.hbs';
import footer from './partials/footer.hbs';
// import modal from './templates/modal.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import teamTpl from './templates/team-markup.hbs';
import teamList from './js/team';

import Tetiana from './images/team/Tetiana.jpg';
import Svitlana from './images/team/Svitlana.jpg';
import Ivan from './images/team/Ivan.jpg';
import Dasha from './images/team/Dasha.jpg';
import Natalie from './images/team/Natalie.jpg';
import Dmytro from './images/team/Dmytro.jpg';
import Yulia from './images/team/Yuliia.jpg';

// import paginationTpl from './js/pagination';
// import paginationSettings from './templates/paginationSettings.json';

// console.log(paginationTpl(paginationSettings));

const headerEl = document.querySelector('.header');
// const mainEl = document.querySelector('.main');
const footerEl = document.querySelector('.footer');
const modalEl = document.querySelector('.modal');

const headerMarkup = header();
// const mainMarkup = main();
const footerMarkup = footer();
// const modalMarkup = modal();

headerEl.insertAdjacentHTML('beforeend', headerMarkup);
// mainEl.insertAdjacentHTML('beforeend', mainMarkup);
footerEl.insertAdjacentHTML('beforeend', footerMarkup);
// modalEl.insertAdjacentHTML('beforeend', modalMarkup);

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  dataContainer: document.querySelector('.js-data-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),

  modalFooterEl: document.querySelector('.js-team'),
  teamBtn: document.querySelector('.button-team'),
};

const moviesApiService = new ApiService();
const trendMoviesApiServise = new MainApiService();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));
refs.loadMoreBtn.addEventListener('click', onLoadMore);

trendMoviesApiServise.fetchMoviesTrend().then(appendMovies);

function onSearch(event) {
  refs.dataContainer.innerHTML = '';

  const form = event.target;
  moviesApiService.query = form.value;
  moviesApiService.resetPage();
  moviesApiService.fetchMovies().then(appendMovies);
}

function onLoadMore() {
  trendMoviesApiServise.fetchMoviesTrend().then(appendMovies) ||
    moviesApiService.fetchMovies().then(appendMovies);
}

function appendMovies(results) {
  refs.dataContainer.insertAdjacentHTML('beforeend', cardFilmTpl(results));
  console.log(refs.dataContainer.offsetWidth);
}

// Модалка для футера________________________________________________

function renderModalTeam() {
  const markup = teamTpl(teamList);
  refs.modalFooterEl.insertAdjacentHTML('beforeend', markup);
}

refs.teamBtn.addEventListener('click', onOpenModal);
renderModalTeam();

const closeTeamBtn = document.querySelector('[data-action="close-btn-team"]');
const modalTeamOverlay = document.querySelector('.team__overlay');
closeTeamBtn.addEventListener('click', onCloseModal);
modalTeamOverlay.addEventListener('click', onOverlayClick);

function onOpenModal() {
  refs.modalFooterEl.classList.add('is-open');
  window.addEventListener('keydown', onKeyPress);
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function onCloseModal() {
  refs.modalFooterEl.classList.remove('is-open');
  window.removeEventListener('keydown', onKeyPress);
}

function onOverlayClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// header buttons switches by Dasha

const refsHeader = {
  header: document.querySelector('.header'),
  searchInfo: document.querySelector('#notify-text'),
  searchIconRef: document.querySelector('.search-icon'),
  pageHomeRef: document.querySelector(`[data-nav-choice="home"]`),
  pageMyLibraryRef: document.querySelector(`[data-nav-choice="my-library"]`),
  buttonListRef: document.querySelector(
    `[data-button-list-header="watched-and-queue"]`,
  ),
  inputSearchRef: document.querySelector('.search-field'),
};

refsHeader.pageMyLibraryRef.addEventListener('click', onLibraryClick);
refsHeader.pageHomeRef.addEventListener('click', onHomeClick);

function onLibraryClick(event) {
  refsHeader.pageMyLibraryRef.classList.add('is-active');

  refsHeader.pageHomeRef.classList.remove('is-active');

  refsHeader.searchInfo.textContent = '';

  refsHeader.buttonListRef.classList.remove('not-visible');
  refsHeader.header.className = 'header-lib';
  refsHeader.inputSearchRef.classList.add('not-visible');
  refsHeader.searchIconRef.classList.add('not-visible');
}

refsHeader.pageHomeRef.addEventListener('click', onHomeClick);

function onHomeClick(event) {
  refsHeader.pageHomeRef.classList.add('is-active');
  refsHeader.pageMyLibraryRef.classList.remove('is-active');

  refsHeader.buttonListRef.classList.add('not-visible');
  refsHeader.header.className = 'header';

  refsHeader.inputSearchRef.classList.remove('not-visible');
  refsHeader.searchIconRef.classList.remove('not-visible');
}

import './js/local-storage.js';
