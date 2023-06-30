import Swiper from 'swiper';

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

function addSwiperForOurMissionSwiper() {
  if (document.querySelector('.our-mission__swiper')) {
    const ourMissionSwiper = new Swiper('.our-mission__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      grabCursor: true
    });

    document.querySelector('.our-mission__swiper-next').addEventListener('click', () => {
      ourMissionSwiper.slideNext();
    });
    document.querySelector('.our-mission__swiper-prev').addEventListener('click', () => {
      ourMissionSwiper.slidePrev();
    });
  }
}

addSwiperForSpecialistSwiper();
