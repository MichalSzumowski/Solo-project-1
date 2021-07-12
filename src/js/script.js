/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* TOGGLE MENU */

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('main').classList.toggle('active');
});

/* Modals */ 

// close modal by removing "show" class
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

// attach closeModal function to 'js-close-modal' class
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

// close modal by clicking on the background overlay
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

// close modal by clicking ESC
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

// open modal
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

// select all modals
const modalButtons = document.querySelectorAll('.modal-open');

// use selected modals and loop them to open single modal
for (let e of modalButtons) {
  e.addEventListener('click', function() {
    const modal = this.getAttribute('data-modal');
    openModal(modal);
  });
}