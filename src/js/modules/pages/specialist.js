function swipeTime(mod) {
  if (document.querySelector('.profile__timetable')) {
    const btnPrev = document.querySelector(`.profile__btn-prev`);
    const btnNext = document.querySelector(`.profile__btn-next`);

    const swiperWrapper = document.querySelectorAll(`.profile__swiper-wrapper`);
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
        btnPrev.classList.remove(`profile__btn-prev_show`);
      }
      if (swiperWrapper[0].parentNode.clientWidth == 560) {
        if (countSlide <= swiperWrapper[0].children.length - 6) {
          btnNext.classList.add(`profile__btn-next_show`);
        }
      } else {
        if (countSlide < swiperWrapper[0].children.length - 7) {
          btnNext.classList.add(`profile__btn-next_show`);
        }
      }
    });

    btnNext.addEventListener('click', () => {
      countSlide++;
      swiperWrapper.forEach(elem => {
        elem.style.transform = `translateX(-${widthElem * countSlide}px)`;
      });
      if (countSlide > 0) {
        btnPrev.classList.add(`profile__btn-prev_show`);
      }
      if (swiperWrapper[0].parentNode.clientWidth <= 560) {
        if (countSlide > swiperWrapper[0].children.length - 6) {
          btnNext.classList.remove(`profile__btn-next_show`);
        }
      } else {
        if (countSlide > swiperWrapper[0].children.length - 8) {
          btnNext.classList.remove(`profile__btn-next_show`);
        }
      }
    });
  }
}

swipeTime();