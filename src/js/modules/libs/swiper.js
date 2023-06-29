// import Swiper, { Navigation } from 'swiper';
import Swiper from 'swiper/bundle';

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


function petServiceSwiper() {
  const swiper = new Swiper('.pet-service__swiper', {

    slidesPerView: 3,
    spaceBetween: 40,
    grabCursor: true,

    navigation: {
      nextEl: '.pet-service-next',
      prevEl: '.pet-service-prev',
    },
  
  });
}
petServiceSwiper();

