const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesListFragment = document.createDocumentFragment();

const renderPhoto = (photo, onClick) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  pictureImg.src = photo.url;
  pictureImg.alt = photo.description;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;
  picturesListFragment.appendChild(picture);

  picture.addEventListener('click', () => {
    onClick(photo);
  });
};

export {renderPhoto, picturesListFragment};
