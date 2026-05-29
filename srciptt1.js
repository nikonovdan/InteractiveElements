'use strict'

const btnOpen = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');

const modalViewHandler = () => {
    modal.classList.toggle('modal--open');

};

const modalClose = () => {
    modal.classList.toggle('modal--close')
}

btnOpen.addEventListener('click', modalViewHandler);
btnClose.addEventListener('click', modalClose);
modal.addEventListener('click', modalViewHandler);