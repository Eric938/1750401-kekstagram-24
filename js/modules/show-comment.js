import  {hideElement, showHiddenElement} from'../modules/utils.js';

const socialCommentCount = document.querySelector('.social__comment-count');
const moreCommentsButton = document.querySelector('.comments-loader');

const cleanSocialCommentCount = () => {
  socialCommentCount.textContent = '';
};

const showHiddenButton = () => {
  if (moreCommentsButton.classList.contains('hidden')) {
    showHiddenElement(moreCommentsButton);
  }
};

const putNumbersOfComments = (currentNumber, totalNumber) => {
  socialCommentCount.textContent = `${currentNumber} из ${totalNumber} комментариев`;
};

const onMoreCommentsButtonClick = () => {
  const socialCommentsChildsHidden = document.querySelectorAll('.social__comment.hidden');

  const totalNumberOfComments = document.querySelectorAll('.social__comment').length;

  let commentsNumber = 4;

  putNumbersOfComments(totalNumberOfComments + 5 - socialCommentsChildsHidden.length, totalNumberOfComments);

  if (socialCommentsChildsHidden.length <= 5) {
    hideElement(moreCommentsButton);
    putNumbersOfComments(totalNumberOfComments, totalNumberOfComments);
    if (socialCommentsChildsHidden.length > 0) {
      commentsNumber = socialCommentsChildsHidden.length - 1;
    }
  }

  for (let i= 0; i <= commentsNumber; i++) {
    showHiddenElement(socialCommentsChildsHidden[i]);
  }
};

const showComments = (comments) => {
  const totalNumberOfComments = comments.length;

  if (totalNumberOfComments <= 5) {
    putNumbersOfComments(totalNumberOfComments, totalNumberOfComments);
    hideElement(moreCommentsButton);
  }
  else {
    for (let i= 5; i < totalNumberOfComments; i++) {
      hideElement(comments[i]);
    }

    putNumbersOfComments(5, totalNumberOfComments);
  }
};

const addEventOnMoreButton = () => {
  moreCommentsButton.addEventListener('click', onMoreCommentsButtonClick);
};

const removeEventMoreButton = () => {
  moreCommentsButton.removeEventListener('click', onMoreCommentsButtonClick);
};

export{showComments, cleanSocialCommentCount, showHiddenButton, addEventOnMoreButton, removeEventMoreButton};
