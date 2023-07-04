function addEventListenerForAllSpecialistToggle() {
  if (document.querySelector('.all-specialist__toggle')) {
    const toggleItem = document.querySelectorAll('.all-specialist__toggle div');

    toggleItem.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        toggleItem.forEach(elem => {
          elem.classList.contains('toggle__item_active') ? elem.classList.remove('toggle__item_active') : null;
        });
        toggleItem[index].classList.add('toggle__item_active');
      });
    });
  }
}
function selectItem() {
  if (document.querySelector('.all-specialist__select')) {
    const selectItems = document.querySelectorAll('.all-specialist__list-item');
    const selected = document.querySelector('.all-specialist__selected');

    selectItems.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        selectItems.forEach(elem => {
          elem.classList.contains('all-specialist__list-item_active')
            ? elem.classList.remove('all-specialist__list-item_active')
            : null;
        });
        selectItems[index].classList.add('all-specialist__list-item_active');
        selected.childNodes[0].textContent = selectItems[index].innerHTML;
      });
    });
  }
}
function showList() {
  if (document.querySelector('.all-specialist__select')) {
    const select = document.querySelector('.all-specialist__select');
    const selectList = document.querySelector('.all-specialist__list');

    select.addEventListener('click', () => {
      selectList.classList.toggle('all-specialist__list_show');
    });
  }
}

selectItem();
showList();
addEventListenerForAllSpecialistToggle();
