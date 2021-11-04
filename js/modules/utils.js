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

export {isEscapeKey, hideElement, cleanElement, showHiddenElement, addKeydownEventListener, removeKeydownEventListener};
