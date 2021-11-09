import  {hideElement, showHiddenElement} from'../modules/utils.js';

const STEP = 0.25;
const MAX_SIZE = 1;
const MIN_SIZE = 0.25;
const NUMERAL_SYSTEM = 10;
const CONVERSION = 100;

const SLIDER_MIN = 0;
const SLIDER_MAX = 100;
const SLIDER_STEP = 1;

const EFFECT_CHROME_MIN = 0;
const EFFECT_CHROME_MAX = 1;
const EFFECT_CHROME_STEP = 0.1;

const EFFECT_SEPIA_MIN = 0;
const EFFECT_SEPIA_MAX = 1;
const EFFECT_SEPIA_STEP = 0.1;

const EFFECT_MARVIN_MIN = 1;
const EFFECT_MARVIN_MAX = 100;
const EFFECT_MARVIN_STEP = 1;

const EFFECT_PHOBOS_MIN = 0;
const EFFECT_PHOBOS_MAX = 3;
const EFFECT_PHOBOS_STEP = 0.1;

const EFFECT_HEAT_MIN = 1;
const EFFECT_HEAT_MAX = 3;
const EFFECT_HEAT_STEP = 0.1;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const uploadPreviewImg = imgUploadPreview.querySelector('img');

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

const getScaleInputValue = () => parseInt(scaleControlValue.value, NUMERAL_SYSTEM)/CONVERSION;

const editImageSize = (inputValue) => {
  uploadPreviewImg.style.transform = `scale(${inputValue})`;
  scaleControlValue.value = `${inputValue*CONVERSION}%`;
};

const onScaleControlSmallerClick = () => {
  const scaleInputValue = getScaleInputValue();

  if (scaleInputValue > MIN_SIZE) {
    const inputValue = scaleInputValue - STEP;
    editImageSize(inputValue);
  }
};

const onScaleControlBiggerClick = () => {
  const scaleInputValue = getScaleInputValue();

  if (scaleInputValue < MAX_SIZE) {
    const inputValue = scaleInputValue + STEP;
    editImageSize(inputValue);
  }
};

const addInitialInputValue = () => {
  scaleControlValue.value = '100%';
};

const addEventOnScaleControlButtons = () => {
  scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);
  scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);
};

const removeEventOnScaleControlButtons = () => {
  scaleControlSmaller.removeEventListener('click', onScaleControlSmallerClick);
  scaleControlBigger.removeEventListener('click', onScaleControlBiggerClick);
};

const cleanStyles = () => {
  uploadPreviewImg.style = '';
};

const cleanStyleFilter = () => {
  uploadPreviewImg.style.filter = '';
};

const cleanImageClasses = () => {
  uploadPreviewImg.className = '';
};

const hideEffectLevel = () => {
  hideElement(effectLevel);
};

const addInitialValues = () => {
  cleanImageClasses();
  cleanStyleFilter();
};

const editeSliderRange = (min, max, step) => {
  showHiddenElement(effectLevel);
  addInitialValues();
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    step: step,
  });
  effectLevelSlider.noUiSlider.set(max);
};

const onEffectsListChange = () => {
  if (effectNone.checked) {
    hideEffectLevel();
    addInitialValues();
  }
  if (effectChrome.checked) {
    editeSliderRange(EFFECT_CHROME_MIN, EFFECT_CHROME_MAX, EFFECT_CHROME_STEP);
    uploadPreviewImg.classList.add('effects__preview--chrome');
  }
  if (effectSepia.checked) {
    editeSliderRange(EFFECT_SEPIA_MIN, EFFECT_SEPIA_MAX, EFFECT_SEPIA_STEP);
    uploadPreviewImg.classList.add('effects__preview--sepia');
  }
  if (effectMarvin.checked) {
    editeSliderRange(EFFECT_MARVIN_MIN, EFFECT_MARVIN_MAX, EFFECT_MARVIN_STEP);
    uploadPreviewImg.classList.add('effects__preview--marvin');
  }
  if (effectPhobos.checked) {
    editeSliderRange(EFFECT_PHOBOS_MIN, EFFECT_PHOBOS_MAX, EFFECT_PHOBOS_STEP);
    uploadPreviewImg.classList.add('effects__preview--phobos');
  }
  if (effectHeat.checked) {
    editeSliderRange(EFFECT_HEAT_MIN, EFFECT_HEAT_MAX, EFFECT_HEAT_STEP);
    uploadPreviewImg.classList.add('effects__preview--heat');
  }
};


const addImageEffect = () => {
  noUiSlider.create(effectLevelSlider, {
    range: {
      min: SLIDER_MIN,
      max: SLIDER_MAX,
    },
    start: SLIDER_MAX,
    step: SLIDER_STEP,
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

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];

    effectsList.addEventListener('change', onEffectsListChange);

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
};

const removeEventEffect = () => {
  effectLevelSlider.noUiSlider.destroy();
  effectsList.removeEventListener('change', onEffectsListChange);
};

const addOriginalEffectChecked = () => {
  effectNone.checked = true;
};

export {
  addEventOnScaleControlButtons,
  addImageEffect,
  addInitialInputValue,
  addOriginalEffectChecked,
  cleanImageClasses,
  cleanStyles,
  hideEffectLevel,
  removeEventEffect,
  removeEventOnScaleControlButtons
};
