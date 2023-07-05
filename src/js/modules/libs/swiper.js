// import Swiper, { Navigation } from 'swiper';
import Swiper from 'swiper/bundle';
// import Swiper from 'swiper';

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
addSwiperForOurMissionSwiper();


function petServiceSwiper() {
  const swiper = new Swiper('.pet-service__swiper', {

    slidesPerView: 3,
    spaceBetween: 40,
    grabCursor: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1081: {
        spaceBetween: 40,
        slidesPerView: 3,
      }
    },

    navigation: {
      nextEl: '.pet-service-next',
      prevEl: '.pet-service-prev',
    },

  });
}
petServiceSwiper();


function swiperHistory() {
  const swiperHistory = document.querySelector(".history__swiper");
  if (swiperHistory) {
    const swiper = new Swiper(swiperHistory, {
      slidesPerView: "auto",
      navigation: {
        nextEl: ".history__button-next",
        prevEl: ".history__button-prev",
      },
    });
  }
}
swiperHistory();