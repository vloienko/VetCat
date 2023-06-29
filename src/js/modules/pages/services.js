function addEventListenerForServicesToggle() {
  if (document.querySelector('.services__toggle')) {
    const servicesToggleItem = document.querySelectorAll('.services__toggle-item');

    const addActiveClassForToggleItem = index => {
      servicesToggleItem.forEach(elem => {
        elem.classList.contains('services__toggle-item_active')
          ? elem.classList.remove('services__toggle-item_active')
          : null;
      });
      servicesToggleItem[index].classList.add('services__toggle-item_active');
    };

    servicesToggleItem.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        addActiveClassForToggleItem(index);
      });
    });
  }
}

addEventListenerForServicesToggle();
