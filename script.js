const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainter = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

const validateForm = () => {
  // using contraint API
  // https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
  isValid = form.checkValidity();
};

const processForm = (e) => {
  e.preventDefault();
  // check validity
  validateForm();
};

// Event listeners
form.addEventListener('submit', processForm);
