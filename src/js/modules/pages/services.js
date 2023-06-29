function addEventListenerForServicesToggle() {
  if (document.querySelector('.services__toggle')) {
    const servicesToggleItem = document.querySelectorAll('.services__toggle-item');

    const addActiveClassForToggleItem = index => {
      servicesToggleItem.forEach(elem => {
        elem.classList.contains('toggle__item_active') ? elem.classList.remove('toggle__item_active') : null;
      });
      servicesToggleItem[index].classList.add('toggle__item_active');
    };

    servicesToggleItem.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        addActiveClassForToggleItem(index);
      });
    });
  }
}

addEventListenerForServicesToggle();
