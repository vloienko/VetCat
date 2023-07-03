function initSelectInFeedback() {
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

function showFeedback() {
  if (document.querySelector('.btn_feedback')) {
    const btnsFeedback = document.querySelectorAll('.btn_feedback');
    const closeFeedback = document.querySelectorAll('.popUp-feedback__close');
    const popUp = document.querySelector('');

    btnsFeedback.forEach(elem => {
      elem.addEventListener('click', () => {
        console.log('click');
        popUp.classList.add('popUp-feedback_show');
      });
    });

    closeFeedback.forEach(elem => {
      elem.addEventListener('click', e => {
        popUp.classList.remove('popUp-feedback_show');
      });
    });
  }
}

initSelectInFeedback();
