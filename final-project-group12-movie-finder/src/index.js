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
// import { alert, defaultModules } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

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
