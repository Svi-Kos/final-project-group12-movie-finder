const main = document.querySelector('.main');
const myLibraryBtn = document.querySelector('.my-library');
const list = document.querySelector('.js-data-container');
const watchedBtn = document.querySelector('.libr-watched');
const queueBtn = document.querySelector('.libr-queue');
const modal = document.querySelector('.modal');
// const loadMoreBtn = document.querySelector('[data-action="load-more"]');
let arrayWatched = [];
let arrayQueue = [];

if (localStorage.getItem('arrayWatched') !== null) {
  arrayWatched = localStorage.getItem('arrayWatched');
  arrayWatched = JSON.parse(arrayWatched);
}

if (localStorage.getItem('arrayQueue') !== null) {
  arrayQueue = localStorage.getItem('arrayQueue');
  arrayQueue = JSON.parse(arrayQueue);
}

modal.addEventListener('click', function () {
  console.log(event.target.nodeName);

  if (event.target.nodeName === 'BUTTON') {
    if (event.target.className === 'button button-watched') {
      arrayWatched.push(localStorage.getItem('targetModal'));
      console.log(localStorage.getItem('targetModal'));
      console.log(arrayWatched);
      localStorage.setItem('arrayWatched', JSON.stringify(arrayWatched));
    } else {
      arrayQueue.push(localStorage.getItem('targetModal'));
      console.log(localStorage.getItem('targetModal'));
      console.log(arrayQueue);
      localStorage.setItem('arrayQueue', JSON.stringify(arrayQueue));
    }
  } else {
    return console.log('noButton');
  }
});

watchedBtn.addEventListener('click', function () {
  const allList = document.querySelectorAll('.js-data-container');
  for (const list of allList) {
    list.remove();
  }
  const allTitle = document.querySelectorAll('.title-view-type');
  for (const title of allTitle) {
    title.remove();
  }
  const watchedList = document.createElement('ul');
  watchedList.setAttribute('class', 'js-data-container');
  main.appendChild(watchedList);
  let watchedArray = localStorage.getItem('arrayWatched');
  watchedArray = JSON.parse(watchedArray);
  for (const object of watchedArray) {
    const innerHTML = JSON.parse(object);

    const li = document.createElement('li');
    li.setAttribute('class', 'list__element');
    li.insertAdjacentHTML('beforeend', innerHTML);
    watchedList.appendChild(li);
  }
  // loadMoreBtn.style.visibility = 'hidden';
});

queueBtn.addEventListener('click', function () {
  const allList = document.querySelectorAll('.js-data-container');
  for (const list of allList) {
    list.remove();
  }
  const allTitle = document.querySelectorAll('.title-view-type');
  for (const title of allTitle) {
    title.remove();
  }
  const queueList = document.createElement('ul');
  queueList.setAttribute('class', 'js-data-container');
  main.appendChild(queueList);
  let queueArray = localStorage.getItem('arrayQueue');
  queueArray = JSON.parse(queueArray);
  for (const object of queueArray) {
    const innerHTML = JSON.parse(object);

    const li = document.createElement('li');
    li.setAttribute('class', 'list__element');
    li.insertAdjacentHTML('beforeend', innerHTML);
    queueList.appendChild(li);
  }
  // loadMoreBtn.style.visibility = 'hidden';
});

myLibraryBtn.addEventListener('click', function () {
  const allList = document.querySelectorAll('.js-data-container');
  for (const list of allList) {
    list.remove();
  }
  const allTitle = document.querySelectorAll('.title-view-type');
  for (const title of allTitle) {
    title.remove();
  }
  const queueTitle = document.createElement('h3');
  queueTitle.classList.add('title-view-type');
  queueTitle.textContent = 'Queue';
  main.appendChild(queueTitle);
  const queueList = document.createElement('ul');
  queueList.setAttribute('class', 'js-data-container');
  main.appendChild(queueList);
  let queueArray = localStorage.getItem('arrayQueue');
  queueArray = JSON.parse(queueArray);
  for (const object of queueArray) {
    const innerHTML = JSON.parse(object);

    const li = document.createElement('li');
    li.setAttribute('class', 'list__element');
    li.insertAdjacentHTML('beforeend', innerHTML);
    queueList.appendChild(li);
  }
  const watchedTitle = document.createElement('h3');
  watchedTitle.classList.add('title-view-type');
  watchedTitle.textContent = 'Watched';
  main.appendChild(watchedTitle);
  const watchedList = document.createElement('ul');
  watchedList.setAttribute('class', 'js-data-container');
  main.appendChild(watchedList);
  let watchedArray = localStorage.getItem('arrayWatched');
  watchedArray = JSON.parse(watchedArray);
  for (const object of watchedArray) {
    const innerHTML = JSON.parse(object);

    const li = document.createElement('li');
    li.setAttribute('class', 'list__element');
    li.insertAdjacentHTML('beforeend', innerHTML);
    watchedList.appendChild(li);
  }
  // loadMoreBtn.style.visibility = 'hidden';
});
