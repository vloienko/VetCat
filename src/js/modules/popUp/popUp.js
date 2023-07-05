function initSelectInFeedback() {
  if (document.querySelector('.popUp-feedback__select')) {
    const select = document.querySelector('.popUp-feedback__select');
    const selected = document.querySelector('.popUp-feedback__selected');
    const selectList = document.querySelector('.popUp-feedback__list');
    const selectListItem = document.querySelectorAll('.popUp-feedback__list-item');

    const toggleItem = index => {
      selectListItem.forEach(elem => {
        elem.classList.contains('popUp-feedback__list-item_active')
          ? elem.classList.remove('popUp-feedback__list-item_active')
          : null;
        selectListItem[index].classList.add('popUp-feedback__list-item_active');
        selected.childNodes[0].textContent = selectListItem[index].innerHTML;
      });
    };

    select.addEventListener('click', () => {
      selectList.classList.toggle('popUp-feedback__list_show');
    });

    selectListItem.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        toggleItem(index);
      });
    });
  }
}
function initToggleInReception() {
  if (document.querySelector('.popUp-reception__toggle')) {
    const toggleItems = document.querySelectorAll('.popUp-reception__toggle div');

    toggleItems.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        toggleItems.forEach(elem => {
          elem.classList.contains('toggle__item_active') ? elem.classList.remove('toggle__item_active') : null;
        });
        toggleItems[index].classList.add('toggle__item_active');
      });
    });
  }
}

function showFeedback() {
  if (document.querySelector('.btn_feedback')) {
    const btnsFeedback = document.querySelectorAll('.btn_feedback');
    const closeFeedback = document.querySelectorAll('.popUp-feedback__close');
    const popUp = document.querySelector('.popUp-feedback');

    btnsFeedback.forEach(elem => {
      elem.addEventListener('click', () => {
        console.log('click');
        popUp.classList.add('popUp-feedback_show');
        document.body.style.overflow = 'hidden';
      });
    });

    closeFeedback.forEach(elem => {
      elem.addEventListener('click', e => {
        popUp.classList.remove('popUp-feedback_show');
        document.body.style.overflow = 'auto';
      });
    });
  }
}
function showReception() {
  if (document.querySelector('.btn_reception')) {
    const btnsReception = document.querySelectorAll('.btn_reception');
    const closeReception = document.querySelectorAll('.popUp-reception__close');
    const popUp = document.querySelector('.popUp-reception');

    btnsReception.forEach(elem => {
      elem.addEventListener('click', () => {
        popUp.classList.add('popUp-reception_show');
        document.body.style.overflow = 'hidden';
      });
    });

    closeReception.forEach(elem => {
      elem.addEventListener('click', e => {
        popUp.classList.remove('popUp-reception_show');
        document.body.style.overflow = 'auto';
      });
    });
  }
}
function showReviewModal() {
  if (document.querySelector('.review-modal')) {
    const btnsReviewModal = document.querySelectorAll('.feedback__btn');
    const feedBackModal = document.querySelector('.review-modal');
    const feedBackClose = document.querySelector('.review-modal__close');

    btnsReviewModal.forEach(elem => {
      elem.addEventListener('click', e => {
        feedBackModal.classList.add('review-modal_show');
        document.body.style.overflow = 'hidden';
      });
    });

    feedBackClose.addEventListener('click', e => {
      feedBackModal.classList.remove('review-modal_show');
      document.body.style.overflow = 'auto';
    });
  }
}

initSelectInFeedback();
initToggleInReception();

showReception();
showFeedback();
showReviewModal();
