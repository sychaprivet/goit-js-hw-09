let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  form.reset();
});