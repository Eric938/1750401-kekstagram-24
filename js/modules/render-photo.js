const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPhoto = (photo, onClick) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  pictureImg.src = photo.url;
  pictureImg.alt = photo.description;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;

  picture.addEventListener('click', () => {
    onClick(photo);
  });

  return picture;
};

export {renderPhoto};
