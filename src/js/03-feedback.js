import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');
const inputEl = document.querySelector('input')

const LOCAL_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

saveData() 

formEl.addEventListener('input', throttle(handlerInpData, 500));

function handlerInpData(e){
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

formEl.addEventListener('submit', event =>{
  event.preventDefault();
  localStorage.removeItem(LOCAL_KEY);
  event.currentTarget.reset();
  console.log(formData);
});

function saveData() {
  const data = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (data === null) {
    return;
  }

  textareaEl.value = data.message || '';
  inputEl.value = data.email || '';
  formData.email = data.email || '';
  formData.message = data.message || '';
}


