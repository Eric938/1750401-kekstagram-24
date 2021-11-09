import  {hideElement, showHiddenElement} from'../modules/utils.js';

const socialCommentCount = document.querySelector('.social__comment-count');
const moreCommentsButton = document.querySelector('.comments-loader');

const INITIAL_COMMENTS = 5;
const MAX_REMAINDER_COMMENTS = 5;
const COMMENTS_SHOWN = 4;


const cleanSocialCommentCount = () => {
  socialCommentCount.textContent = '';
};

const showHiddenButton = () => {
  if (moreCommentsButton.classList.contains('hidden')) {
    showHiddenElement(moreCommentsButton);
  }
};

const putCountComments = (current, total) => {
  socialCommentCount.textContent = `${current} из ${total} комментариев`;
};

const onMoreCommentsButtonClick = () => {
  const socialCommentsChildsHidden = document.querySelectorAll('.social__comment.hidden');

  const totalComments = document.querySelectorAll('.social__comment').length;

  let commentsShownAmount = COMMENTS_SHOWN;

  putCountComments(totalComments + INITIAL_COMMENTS - socialCommentsChildsHidden.length, totalComments);

  if (socialCommentsChildsHidden.length <= MAX_REMAINDER_COMMENTS) {
    hideElement(moreCommentsButton);
    putCountComments(totalComments, totalComments);
    if (socialCommentsChildsHidden.length > 0) {
      commentsShownAmount = socialCommentsChildsHidden.length - 1;
    }
  }

  for (let i= 0; i <= commentsShownAmount; i++) {
    showHiddenElement(socialCommentsChildsHidden[i]);
  }
};

const showComments = (comments) => {
  const totalComments = comments.length;

  if (totalComments <= INITIAL_COMMENTS) {
    putCountComments(totalComments, totalComments);
    hideElement(moreCommentsButton);
  }
  else {
    for (let i= INITIAL_COMMENTS; i < totalComments; i++) {
      hideElement(comments[i]);
    }

    putCountComments(INITIAL_COMMENTS, totalComments);
  }
};

const addEventOnMoreButton = () => {
  moreCommentsButton.addEventListener('click', onMoreCommentsButtonClick);
};

const removeEventMoreButton = () => {
  moreCommentsButton.removeEventListener('click', onMoreCommentsButtonClick);
};

export {
  addEventOnMoreButton,
  cleanSocialCommentCount,
  removeEventMoreButton,
  showComments,
  showHiddenButton
};
