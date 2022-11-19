const throttle = require('lodash.throttle');
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};
const onLoad = () => {
  try {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    return (refs.email.value = data.email), (refs.message.value = data.message);
  } catch (error) {
    return error.name, error.message;
  }
};
onLoad();
const onInput = e => {
  e.preventDefault();
  const data = { email: refs.email.value, message: refs.message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};
const onSubmit = e => {
  e.preventDefault();
  const data = { email: refs.email.value, message: refs.message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
  console.log(data);
  return refs.form.reset();
};
refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);
