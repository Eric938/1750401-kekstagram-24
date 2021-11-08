const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const hideElement = (element) => {
  element.classList.add('hidden');
};

const showHiddenElement = (element) => {
  element.classList.remove('hidden');
};

const cleanElement = (element) => {
  element.value = '';
};

const addKeydownEventListener = (callback) => {
  document.addEventListener('keydown', callback);
};

const removeKeydownEventListener = (callback) => {
  document.removeEventListener('keydown', callback);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '50px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey, hideElement, cleanElement, showHiddenElement, addKeydownEventListener, removeKeydownEventListener, showAlert};
