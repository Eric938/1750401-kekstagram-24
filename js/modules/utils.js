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

  const style = alertContainer.style;

  style.zIndex = 100;
  style.position = 'absolute';
  style.left = 0;
  style.top = 0;
  style.right = 0;
  style.padding = '50px 3px';
  style.fontSize = '30px';
  style.textAlign = 'center';
  style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const removeElements = (elements) => {
  for (let i=0; i < elements.length; i++) {
    elements[i].remove();
  }
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  addKeydownEventListener,
  cleanElement,
  debounce,
  hideElement,
  isEscapeKey,
  removeElements,
  removeKeydownEventListener,
  showAlert,
  showHiddenElement
};
