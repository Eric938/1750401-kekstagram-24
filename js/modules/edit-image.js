import  {hideElement, showHiddenElement} from'../modules/utils.js';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadpreview = document.querySelector('.img-upload__preview');
const uploadpreviewImg = imgUploadpreview.querySelector('img');

const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = effectLevel.querySelector('.effect-level__value');
const effectLevelSlider = effectLevel.querySelector('.effect-level__slider');


const effectsList = document.querySelector('.effects__list');
const effectNone = effectsList.querySelector('#effect-none');
const effectChrome = effectsList.querySelector('#effect-chrome');
const effectSepia = effectsList.querySelector('#effect-sepia');
const effectMarvin = effectsList.querySelector('#effect-marvin');
const effectPhobos = effectsList.querySelector('#effect-phobos');
const effectHeat = effectsList.querySelector('#effect-heat');

const STEP = 0.25;
const MAX_SIZE = 1;
const MIN_SIZE = 0.25;

const onScaleControlSmallerClick = () => {
  const scaleInputValue = parseInt(scaleControlValue.value, 10)/100;
  if (scaleInputValue > MIN_SIZE) {
    uploadpreviewImg.style.transform = `scale(${scaleInputValue - STEP})`;
    scaleControlValue.value = `${(scaleInputValue - STEP)*100}%`;
  }
};

const onScaleControlBiggerClick = () => {
  const scaleInputValue = parseInt(scaleControlValue.value, 10)/100;

  if (scaleInputValue < MAX_SIZE) {
    uploadpreviewImg.style.transform = `scale(${scaleInputValue + STEP})`;
    scaleControlValue.value = `${(scaleInputValue + STEP)*100}%`;
  }
};

const addEventOnScaleControlButtons = () => {
  scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);
  scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);
};

const removeEventOnScaleControlButtons = () => {
  scaleControlSmaller.removeEventListener('click', onScaleControlSmallerClick);
  scaleControlBigger.removeEventListener('click', onScaleControlBiggerClick);
};

const returnOriginalSize = () => {
  uploadpreviewImg.style = '';
};


noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const deleteImageClasses = () => {
  uploadpreviewImg.className = '';
};

const hideEffectLevel = () => {
  hideElement(effectLevel);
};


const addImageEffect = () => {
  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];

    if (effectChrome.checked) {
      document.querySelector('.effects__preview--chrome').style.filter = `grayscale(${values[handle]})`;
    }
    if (effectSepia.checked) {
      document.querySelector('.effects__preview--sepia').style.filter = `sepia(${values[handle]})`;
    }
    if (effectMarvin.checked) {
      document.querySelector('.effects__preview--marvin').style.filter = `invert(${values[handle]}%)`;
    }
    if (effectPhobos.checked) {
      document.querySelector('.effects__preview--phobos').style.filter = `blur(${values[handle]}px)`;
    }
    if (effectHeat.checked) {
      document.querySelector('.effects__preview--heat').style.filter = `brightness(${values[handle]})`;
    }
  });

  effectsList.addEventListener('change', () => {
    if (effectNone.checked) {
      hideEffectLevel();
      deleteImageClasses();
    }
    if (effectChrome.checked) {
      showHiddenElement(effectLevel);
      deleteImageClasses();
      uploadpreviewImg.classList.add('effects__preview--chrome');
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.set(1);
    }
    if (effectSepia.checked) {
      showHiddenElement(effectLevel);
      deleteImageClasses();
      uploadpreviewImg.classList.add('effects__preview--sepia');
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.set(1);
    }
    if (effectMarvin.checked) {
      showHiddenElement(effectLevel);
      deleteImageClasses();
      uploadpreviewImg.classList.add('effects__preview--marvin');
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
      });
      effectLevelSlider.noUiSlider.set(100);
    }
    if (effectPhobos.checked) {
      showHiddenElement(effectLevel);
      deleteImageClasses();
      uploadpreviewImg.classList.add('effects__preview--phobos');
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.set(3);
    }
    if (effectHeat.checked) {
      showHiddenElement(effectLevel);
      deleteImageClasses();
      uploadpreviewImg.classList.add('effects__preview--heat');
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.set(3);
    }
  });
};

export {addEventOnScaleControlButtons, removeEventOnScaleControlButtons, returnOriginalSize, hideEffectLevel, deleteImageClasses, addImageEffect};
