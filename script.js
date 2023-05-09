const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorText = document.getElementById('error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!firstName.value || !lastName.value) {
    errorText.textContent = 'Name cannot be empty.';
    return;
  }

  if (!/^[0-9]{10}$/.test(phone.value)) {
    errorText.textContent = 'Please enter a valid phone number.';
    return;
  }

  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    errorText.textContent = 'Please enter a valid email address.';
    return;
  }

  if (password.value.length < 8 || !/\d/.test(password.value) || !/[A-Z]/.test(password.value)) {
    errorText.textContent = 'Password must be at least 8 characters long and contain at least one numeric value and one uppercase letter.';
    return;
  }

  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
  });

  alert('Form submitted successfully.');
  errorText.textContent = '';
});