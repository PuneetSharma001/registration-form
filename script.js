const form = document.getElementById('registrationForm');
const modal = document.getElementById('successModal');
const closeBtn = document.querySelector('.close');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  modal.style.display = 'flex';
  form.reset();
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
