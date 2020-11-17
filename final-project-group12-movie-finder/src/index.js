// import debounce from 'lodash.debounce';
import './styles/styles.css';
import './styles/stylesForHeader.css';
import './styles/stylesForMain.css';
import './styles/stylesForFooter.css';
// import ApiService from './js/apiService';
// import getRefs from './js/refs';
import header from './partials/header.hbs';
import main from './partials/main.hbs';
import footer from './partials/footer.hbs';
// import { alert, defaultModules } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

const headerEl = document.querySelector('.header');
const mainEl = document.querySelector('.main');
const footerEl = document.querySelector('.footer');

const headerMarkup = header();
const mainMarkup = main();
const footerMarkup = footer();

headerEl.insertAdjacentHTML('beforeend', headerMarkup);
mainEl.insertAdjacentHTML('beforeend', mainMarkup);
footerEl.insertAdjacentHTML('beforeend', footerMarkup);
