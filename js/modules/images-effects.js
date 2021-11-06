const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const effectsPreviewNone = document.querySelector('.effects__preview--none');
const effectsPreviewChrome = document.querySelector('.effects__preview--chrome');
const effectsPreviewSepia = document.querySelector('.effects__preview--sepia');
const effectsPreviewMarvin = document.querySelector('.effects__preview--marvin');
const effectsPreviewPhobos = document.querySelector('.effects__preview--phobos');
const effectsPreviewHeat = document.querySelector('.effects__preview--heat');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
  effectLevelValue.value = unencoded[handle];
});
