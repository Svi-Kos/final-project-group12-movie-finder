localStorage.clear()
const main = document.querySelector('.main')
const list = document.querySelector('.js-data-container')
const watchedBtn = document.querySelector('.libr-watched')
const queueBtn = document.querySelector('.libr-queue')
const modal = document.querySelector('.modal')
let arrayWatched = []
let arrayQueue = []

if(localStorage.getItem('arrayWatched') !== null){
    arrayWatched = localStorage.getItem('arrayWatched')
    arrayWatched = JSON.parse(arrayWatched)
}

if(localStorage.getItem('arrayQueue') !== null){
    arrayQueue = localStorage.getItem('arrayQueue')
    arrayQueue = JSON.parse(arrayQueue)
}

modal.addEventListener('click', function() {
    console.log(event.target.nodeName)

    if(event.target.nodeName === 'BUTTON'){
        if(event.target.className === "button button-watched"){
            arrayWatched.push(localStorage.getItem('targetModal'))
            console.log(localStorage.getItem('targetModal'))
            console.log(arrayWatched)
            localStorage.setItem('arrayWatched', JSON.stringify(arrayWatched))
        }else{
            arrayQueue.push(localStorage.getItem('targetModal'))
            console.log(localStorage.getItem('targetModal'))
            console.log(arrayQueue)
            localStorage.setItem('arrayQueue', JSON.stringify(arrayQueue))
        }
    }else{
        return(console.log('noButton'))
    }
  })

watchedBtn.addEventListener('click', function() {
    list.remove()
    const watchedList = document.createElement('ul')
    watchedList.setAttribute('class', 'js-data-container')
    main.appendChild(watchedList)
    let watchedArray = localStorage.getItem('arrayWatched')
    watchedArray = JSON.parse(watchedArray)
    for (const object of watchedArray) {
        const innerHTML = JSON.parse(object)

        const li = document.createElement('li')
        li.setAttribute('class', 'list__element')
        li.insertAdjacentHTML('beforeend', innerHTML)
        watchedList.appendChild(li)
    }
  })

queueBtn.addEventListener('click', function() {
    list.remove()
    const queueList = document.createElement('ul')
    queueList.setAttribute('class', 'js-data-container')
    main.appendChild(queueList)
    let queueArray = localStorage.getItem('arrayQueue')
    queueArray = JSON.parse(queueArray)
    for (const object of queueArray) {
        const innerHTML = JSON.parse(object)

        const li = document.createElement('li')
        li.setAttribute('class', 'list__element')
        li.insertAdjacentHTML('beforeend', innerHTML)
        queueList.appendChild(li)
    }
  })