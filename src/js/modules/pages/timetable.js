function addEventListenerForTimeTableToggle() {
  if (document.querySelector('.timetable__toggle')) {
    const timeTableToggleItem = document.querySelectorAll('.timetable__toggle div');

    const addActiveClassForToggleItem = index => {
      timeTableToggleItem.forEach(elem => {
        elem.classList.contains('toggle__item_active') ? elem.classList.remove('toggle__item_active') : null;
      });
      timeTableToggleItem[index].classList.add('toggle__item_active');
    };

    timeTableToggleItem.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        addActiveClassForToggleItem(index);
      });
    });
  }
}

function swipeTable(mod) {
  if (document.querySelector('.timetable__list')) {
    const btnPrev = document.querySelector(`.timetable__btn-prev_${mod}`);
    const btnNext = document.querySelector(`.timetable__btn-next_${mod}`);

    const swiperWrapper = document.querySelectorAll(`.timetable__swiper-wrapper_${mod}`);
    const widthElem = 112;
    let countSlide = 0;

    swiperWrapper.forEach(elem => {
      elem.style.width = widthElem * elem.children.length + 'px';
    });

    btnPrev.addEventListener('click', () => {
      countSlide--;
      if (countSlide == 0) {
        swiperWrapper.forEach(elem => {
          elem.style.transform = `translateX(0px)`;
        });
      } else {
        swiperWrapper.forEach(elem => {
          elem.style.transform = `translateX(-${widthElem * countSlide}px)`;
        });
      }

      if (countSlide < 1) {
        btnPrev.classList.remove(`timetable__btn-prev_show`);
      }
      if (swiperWrapper[0].parentNode.clientWidth == 560) {
        if (countSlide <= swiperWrapper[0].children.length - 6) {
          btnNext.classList.add(`timetable__btn-next_show`);
        }
      } else {
        if (countSlide < swiperWrapper[0].children.length - 7) {
          btnNext.classList.add(`timetable__btn-next_show`);
        }
      }
    });

    btnNext.addEventListener('click', () => {
      countSlide++;
      swiperWrapper.forEach(elem => {
        elem.style.transform = `translateX(-${widthElem * countSlide}px)`;
      });
      if (countSlide > 0) {
        btnPrev.classList.add(`timetable__btn-prev_show`);
      }
      if (swiperWrapper[0].parentNode.clientWidth <= 560) {
        if (countSlide > swiperWrapper[0].children.length - 6) {
          btnNext.classList.remove(`timetable__btn-next_show`);
        }
      } else {
        if (countSlide > swiperWrapper[0].children.length - 8) {
          btnNext.classList.remove(`timetable__btn-next_show`);
        }
      }
    });
  }
}

addEventListenerForTimeTableToggle();
swipeTable('terapia');
swipeTable('diagnostik');
swipeTable('cardiology');
swipeTable('surgery');
