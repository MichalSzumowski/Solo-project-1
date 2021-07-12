/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* toggle menu */

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('active');
  document.querySelector('.main').classList.toggle('active');
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


/* MyCharts */

const ctx = document.getElementById('myChart').getContext('2d');


const chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});
