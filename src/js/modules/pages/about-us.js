import Swiper from 'swiper/bundle';

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

function addSwiperForGallerySwiper() {
  if (document.querySelector('.gallery-modal')) {
    const gallerySwiperThumbs = new Swiper('.gallery-modal__thumbs', {
      spaceBetween: 16,
      slidesPerView: 'auto',
      watchSlidesProgress: true
    });
    const gallerySwiper = new Swiper('.gallery-modal__swiper', {
      zoom: true,
      loop: true,
      spaceBetween: 10,
      grabCursor: true,
      thumbs: {
        swiper: gallerySwiperThumbs
      }
    });

    document.querySelector('.gallery-modal__swiper-next').addEventListener('click', () => {
      gallerySwiper.slideNext();
    });
    document.querySelector('.gallery-modal__swiper-prev').addEventListener('click', () => {
      gallerySwiper.slidePrev();
    });
  }
}

addSwiperForOurMissionSwiper();
addSwiperForGallerySwiper();

function addEventListenerForAboutUsToggle() {
  if (document.querySelector('.about-us__toggle')) {
    const aboutUsToggleItem = document.querySelectorAll('.about-us__toggle div');
    const pathThis = document.querySelector('.about-us .path__this');

    const addActiveClassForToggleItem = index => {
      aboutUsToggleItem.forEach(elem => {
        elem.classList.contains('toggle__item_active') ? elem.classList.remove('toggle__item_active') : null;
      });
      aboutUsToggleItem[index].classList.add('toggle__item_active');
    };

    // toggleContentForAboutUs(0)

    aboutUsToggleItem.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        addActiveClassForToggleItem(index);
        // toggleContentForAboutUs(index);
        pathThis.innerHTML = e.target.innerHTML;
      });
    });
  }
}

addEventListenerForAboutUsToggle();

function toggleContentForAboutUs(index) {
  const aboutUsBody = document.querySelector('.about-us__body .container');

  aboutUsBody.innerHTML = '';

  switch (index) {
    case 0:
      aboutUsBody.innerHTML = `
      <div class="our-mission">
								<div class="our-mission__wrapper">
									<div class="our-mission__title">
										Врачи ветеринарного центра «ВетКэт», вот уже 20 лет лечат кошек, собак и других
										питомцев. Каждый год нашей работы — <br> это бесценный опыт, новые знания, а главное — благодарные
										животные и их
										хозяева.
									</div>
									<div class="our-mission__descr">
										Наша главная идея состоит в том, что каждый домашний любимец должен иметь возможность получить
										современную и
										высокотехнологичную медицинскую помощь, основанную на принципах доказательной медицины и заботливом
										отношении к
										каждому пациенту.
									</div>
									<div class="our-mission__img">
										<img src="img/about-us/vetket.jpg" alt="vetket">
									</div>
									<div class="our-mission__subtitle our-mission__subtitle_first">
										Почему стоит обратиться к нам
									</div>
									<div class="our-mission__text">
										Врачи клиники и медицинский персонал клиники делают все возможное, чтобы каждая пара дождалась
										своего малыша,
										обеспечивая уверенность пациентов в успехе разрабатываемых для них индивидуальных лечебных программ
										и создавая
										максимально комфортную обстановку. Экспертный уровень квалификации сотрудников: в штате клиники
										доктора и
										кандидаты наук с большим опытом работы и собственными наработками.
									</div>
									<div class="our-mission__text">
										Использование самых современных эффективных технологий и новейших лечебных методов, обеспечивающих
										максимальную
										результативность: мы единственные ввели систему Primo Vision, гарантирующую наглядность и
										прозрачность ЭКО.
										Безупречное оснащение клинических отделений, лабораторий и операционных: клиника ориентирована
										только на
										европейские стандарты. Нашим пациенткам доступно все лучшее, что есть в мире.
									</div>
									<div class="our-mission__subtitle">
										Лицензии и сертификаты
									</div>
								</div>
								<div class="our-mission__slider">
									<div class="swiper our-mission__swiper">
										<div class="swiper-wrapper our-mission__swiper-wrapper">
											<div class="swiper-slide our-mission__swiper-slide"></div>
											<div class="swiper-slide our-mission__swiper-slide"></div>
											<div class="swiper-slide our-mission__swiper-slide"></div>
											<div class="swiper-slide our-mission__swiper-slide"></div>
										</div>
									</div>
									<div class="swiper-button-prev our-mission__swiper-prev">
										<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd"
												d="M22 29.0001C22.7416 28.3292 22.7416 28.3291 22.7415 28.329L22.7411 28.3286L22.7398 28.3271L22.7348 28.3217L22.7159 28.3009L22.643 28.2208C22.5791 28.1508 22.485 28.048 22.3636 27.9162C22.1207 27.6526 21.7682 27.2726 21.3278 26.8053C20.4475 25.8711 19.2148 24.5862 17.8053 23.184C15.3763 20.7673 12.3758 17.9547 9.73674 16.0001C12.3758 14.0454 15.3763 11.2328 17.8053 8.81611C19.2148 7.41386 20.4475 6.12906 21.3278 5.19479C21.7682 4.7275 22.1207 4.34751 22.3636 4.08391C22.4851 3.9521 22.5791 3.84935 22.643 3.77932L22.7159 3.69923L22.7348 3.67843L22.7398 3.67299L22.7411 3.67153L22.7415 3.67111C22.7416 3.67099 22.7416 3.67091 22 3.00006L21.2584 2.32921L21.2582 2.32943L21.2573 2.33051L21.2531 2.33517L21.2356 2.35438L21.1657 2.43118C21.1038 2.49897 21.0119 2.59936 20.8927 2.7287C20.6544 2.98742 20.3069 3.3619 19.8723 3.82318C19.0026 4.74605 17.7853 6.01482 16.3948 7.39829C13.5959 10.1828 10.157 13.3695 7.44731 15.1667L6.19087 16.0001L7.44731 16.8334C10.157 18.6306 13.5959 21.8173 16.3948 24.6018C17.7853 25.9853 19.0026 27.2541 19.8723 28.1769C20.3069 28.6382 20.6544 29.0127 20.8927 29.2714C21.0119 29.4008 21.1038 29.5011 21.1657 29.5689L21.2356 29.6457L21.2531 29.6649L21.2573 29.6696L21.2582 29.6707L21.2584 29.6709L22 29.0001Z" />
										</svg>
									</div>
									<div class="swiper-button-next our-mission__swiper-next">
										<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd"
												d="M9.99995 2.99995C9.25836 3.6708 9.25844 3.67088 9.25855 3.671L9.25892 3.67142L9.26025 3.67288L9.26518 3.67832L9.28406 3.69912L9.35699 3.77921C9.4209 3.84924 9.51495 3.95198 9.6364 4.0838C9.87928 4.3474 10.2318 4.72739 10.6722 5.19467C11.5525 6.12895 12.7852 7.41375 14.1947 8.816C16.6237 11.2327 19.6242 14.0453 22.2633 15.9999C19.6242 17.9546 16.6237 20.7672 14.1947 23.1839C12.7852 24.5861 11.5525 25.8709 10.6722 26.8052C10.2318 27.2725 9.87928 27.6525 9.6364 27.9161C9.51495 28.0479 9.4209 28.1506 9.35699 28.2207L9.28406 28.3008L9.26518 28.3216L9.26025 28.327L9.25892 28.3285L9.25855 28.3289C9.25844 28.329 9.25836 28.3291 9.99995 28.9999L10.7416 29.6708L10.7418 29.6706L10.7427 29.6695L10.7469 29.6648L10.7644 29.6456L10.8343 29.5688C10.8962 29.501 10.9881 29.4006 11.1073 29.2713C11.3456 29.0126 11.6931 28.6381 12.1277 28.1768C12.9974 27.2539 14.2147 25.9852 15.6053 24.6017C18.4041 21.8172 21.843 18.6305 24.5527 16.8333L25.8091 15.9999L24.5527 15.1666C21.843 13.3694 18.4041 10.1827 15.6053 7.39817C14.2147 6.01471 12.9974 4.74594 12.1277 3.82307C11.6931 3.36179 11.3456 2.98731 11.1073 2.72859C10.9881 2.59925 10.8962 2.49886 10.8343 2.43106L10.7644 2.35427L10.7469 2.33506L10.7427 2.3304L10.7418 2.32932L10.7416 2.3291L9.99995 2.99995Z" />
										</svg>
									</div>
								</div>
							</div>
      `;
      addSwiperForOurMissionSwiper();
      break;
    case 1:
      aboutUsBody.innerHTML = `
			<div class="gallery">
	<div class="gallery__group">
		<div class="galleryCard">
	<div class="galleryCard__img">
		<img src="img/gallery/photo1.jpg" alt="galleryCard" loading="lazy">
	</div>
	<div class="galleryCard__wrapper">
		<div class="galleryCard__title">
			Наши пациенты
		</div>
		
		<a href="#" class="galleryCard__more">
			Смотреть
			<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M-1.74845e-07 5L17 5M17 5C15.3146 3.85714 12.7865 1 12.7865 1M17 5C15.3146 6.14286 12.7865 9 12.7865 9"
					stroke="#1DC4B0" stroke-width="2" />
			</svg>
		</a>
	</div>
</div>
		<div class="galleryCard">
	<div class="galleryCard__img">
		<img src="img/gallery/photo2.jpg" alt="galleryCard" loading="lazy">
	</div>
	<div class="galleryCard__wrapper">
		<div class="galleryCard__title">
			Передержка <br> животных
		</div>
		
		<div class="galleryCard__place">
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M8.00016 0C4.805 0 2.20557 2.59944 2.20557 5.79456C2.20557 9.75981 7.39116 15.581 7.61194 15.8269C7.81932 16.0579 8.18138 16.0575 8.38838 15.8269C8.60916 15.581 13.7948 9.75981 13.7948 5.79456C13.7947 2.59944 11.1953 0 8.00016 0ZM8.00016 8.70997C6.3926 8.70997 5.08478 7.40213 5.08478 5.79456C5.08478 4.187 6.39263 2.87919 8.00016 2.87919C9.60769 2.87919 10.9155 4.18703 10.9155 5.79459C10.9155 7.40216 9.60769 8.70997 8.00016 8.70997Z" />
	</svg>

	Строгино
</div>
		
		<a href="#" class="galleryCard__more">
			Смотреть
			<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M-1.74845e-07 5L17 5M17 5C15.3146 3.85714 12.7865 1 12.7865 1M17 5C15.3146 6.14286 12.7865 9 12.7865 9"
					stroke="#1DC4B0" stroke-width="2" />
			</svg>
		</a>
	</div>
</div>
		<div class="galleryCard">
	<div class="galleryCard__img">
		<img src="img/gallery/photo3.jpg" alt="galleryCard" loading="lazy">
	</div>
	<div class="galleryCard__wrapper">
		<div class="galleryCard__title">
			Ветеринарный центр
		</div>
		
		<div class="galleryCard__place">
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M8.00016 0C4.805 0 2.20557 2.59944 2.20557 5.79456C2.20557 9.75981 7.39116 15.581 7.61194 15.8269C7.81932 16.0579 8.18138 16.0575 8.38838 15.8269C8.60916 15.581 13.7948 9.75981 13.7948 5.79456C13.7947 2.59944 11.1953 0 8.00016 0ZM8.00016 8.70997C6.3926 8.70997 5.08478 7.40213 5.08478 5.79456C5.08478 4.187 6.39263 2.87919 8.00016 2.87919C9.60769 2.87919 10.9155 4.18703 10.9155 5.79459C10.9155 7.40216 9.60769 8.70997 8.00016 8.70997Z" />
	</svg>

	Приморский
</div>
		
		<a href="#" class="galleryCard__more">
			Смотреть
			<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M-1.74845e-07 5L17 5M17 5C15.3146 3.85714 12.7865 1 12.7865 1M17 5C15.3146 6.14286 12.7865 9 12.7865 9"
					stroke="#1DC4B0" stroke-width="2" />
			</svg>
		</a>
	</div>
</div>
		<div class="galleryCard">
	<div class="galleryCard__img">
		<img src="img/gallery/photo4.jpg" alt="galleryCard" loading="lazy">
	</div>
	<div class="galleryCard__wrapper">
		<div class="galleryCard__title">
			Стационар
		</div>
		
		<div class="galleryCard__place">
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M8.00016 0C4.805 0 2.20557 2.59944 2.20557 5.79456C2.20557 9.75981 7.39116 15.581 7.61194 15.8269C7.81932 16.0579 8.18138 16.0575 8.38838 15.8269C8.60916 15.581 13.7948 9.75981 13.7948 5.79456C13.7947 2.59944 11.1953 0 8.00016 0ZM8.00016 8.70997C6.3926 8.70997 5.08478 7.40213 5.08478 5.79456C5.08478 4.187 6.39263 2.87919 8.00016 2.87919C9.60769 2.87919 10.9155 4.18703 10.9155 5.79459C10.9155 7.40216 9.60769 8.70997 8.00016 8.70997Z" />
	</svg>

	Приморский
</div>
		
		<a href="#" class="galleryCard__more">
			Смотреть
			<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M-1.74845e-07 5L17 5M17 5C15.3146 3.85714 12.7865 1 12.7865 1M17 5C15.3146 6.14286 12.7865 9 12.7865 9"
					stroke="#1DC4B0" stroke-width="2" />
			</svg>
		</a>
	</div>
</div>
		<div class="galleryCard">
	<div class="galleryCard__img">
		<img src="img/gallery/photo5.jpg" alt="galleryCard" loading="lazy">
	</div>
	<div class="galleryCard__wrapper">
		<div class="galleryCard__title">
			Ветеринарный центр
		</div>
		
		<div class="galleryCard__place">
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M8.00016 0C4.805 0 2.20557 2.59944 2.20557 5.79456C2.20557 9.75981 7.39116 15.581 7.61194 15.8269C7.81932 16.0579 8.18138 16.0575 8.38838 15.8269C8.60916 15.581 13.7948 9.75981 13.7948 5.79456C13.7947 2.59944 11.1953 0 8.00016 0ZM8.00016 8.70997C6.3926 8.70997 5.08478 7.40213 5.08478 5.79456C5.08478 4.187 6.39263 2.87919 8.00016 2.87919C9.60769 2.87919 10.9155 4.18703 10.9155 5.79459C10.9155 7.40216 9.60769 8.70997 8.00016 8.70997Z" />
	</svg>

	Приморский
</div>
		
		<a href="#" class="galleryCard__more">
			Смотреть
			<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M-1.74845e-07 5L17 5M17 5C15.3146 3.85714 12.7865 1 12.7865 1M17 5C15.3146 6.14286 12.7865 9 12.7865 9"
					stroke="#1DC4B0" stroke-width="2" />
			</svg>
		</a>
	</div>
</div>
		<div class="galleryCard">
	<div class="galleryCard__img">
		<img src="img/gallery/photo6.jpg" alt="galleryCard" loading="lazy">
	</div>
	<div class="galleryCard__wrapper">
		<div class="galleryCard__title">
			Стационар
		</div>
		
		<div class="galleryCard__place">
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M8.00016 0C4.805 0 2.20557 2.59944 2.20557 5.79456C2.20557 9.75981 7.39116 15.581 7.61194 15.8269C7.81932 16.0579 8.18138 16.0575 8.38838 15.8269C8.60916 15.581 13.7948 9.75981 13.7948 5.79456C13.7947 2.59944 11.1953 0 8.00016 0ZM8.00016 8.70997C6.3926 8.70997 5.08478 7.40213 5.08478 5.79456C5.08478 4.187 6.39263 2.87919 8.00016 2.87919C9.60769 2.87919 10.9155 4.18703 10.9155 5.79459C10.9155 7.40216 9.60769 8.70997 8.00016 8.70997Z" />
	</svg>

	Приморский
</div>
		
		<a href="#" class="galleryCard__more">
			Смотреть
			<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M-1.74845e-07 5L17 5M17 5C15.3146 3.85714 12.7865 1 12.7865 1M17 5C15.3146 6.14286 12.7865 9 12.7865 9"
					stroke="#1DC4B0" stroke-width="2" />
			</svg>
		</a>
	</div>
</div>
	</div>
</div>
			`;
      addSwiperForGallerySwiper();
    default:
      break;
  }
}

function addShowModal() {
  if (document.querySelector('.galleryCard')) {
    const galleryCard = document.querySelectorAll('.galleryCard');
    const galleryModal = document.querySelector('.gallery-modal');

    galleryCard.forEach(elem => {
      elem.addEventListener('click', e => {
        galleryModal.classList.add('gallery-modal_show');
      });
    });

    galleryModal.querySelector('.gallery-modal__close').addEventListener('click', () => {
      galleryModal.classList.remove('gallery-modal_show');
    });
  }
}

addShowModal();
