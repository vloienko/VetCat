function addEventListenerForContactsToggle() {
  if (document.querySelector('.contacts__toggle')) {
    const contactsToogleItem = document.querySelectorAll('.contacts__toggle-item');
    const contactsTabs = document.querySelectorAll('.contacts__tab');

    const addActiveClassForToggleItemAndTab = index => {
      contactsToogleItem.forEach(elem => {
        elem.classList.contains('contacts__toggle-item_active')
          ? elem.classList.remove('contacts__toggle-item_active')
          : null;
      });
      contactsToogleItem[index].classList.add('contacts__toggle-item_active');
      contactsTabs.forEach(elem => {
        elem.classList.contains('contacts__tab_active') ? elem.classList.remove('contacts__tab_active') : null;
      });
      contactsTabs[index].classList.add('contacts__tab_active');
    };

    contactsToogleItem.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        addActiveClassForToggleItemAndTab(index);
      });
    });
  }
}

addEventListenerForContactsToggle();
