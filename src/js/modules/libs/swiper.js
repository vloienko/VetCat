import Swiper, { Navigation } from 'swiper';

function addSwiperForSpecialistSwiper() {
  if (document.querySelector('.specialist__swiper')) {
    const specialistSwiper = new Swiper('.specialist__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 40,
      loop: true,
      grabCursor: true
    });

    document.querySelector('.specialist__swiper-next').addEventListener('click', () => {
      specialistSwiper.slideNext();
    });
    document.querySelector('.specialist__swiper-prev').addEventListener('click', () => {
      specialistSwiper.slidePrev();
    });
  }
}

addSwiperForSpecialistSwiper();
