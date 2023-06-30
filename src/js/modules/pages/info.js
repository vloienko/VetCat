function addEventListenerForInfoToggle() {
  if (document.querySelector('.info__toggle')) {
    const infoToggleItem = document.querySelectorAll('.info__toggle div');
    const pathThis = document.querySelector('.info .path__this');

    const addActiveClassForToggleItem = index => {
      infoToggleItem.forEach(elem => {
        elem.classList.contains('toggle__item_active') ? elem.classList.remove('toggle__item_active') : null;
      });
      infoToggleItem[index].classList.add('toggle__item_active');
    };

    toggleContentForInfo(0);

    infoToggleItem.forEach((elem, index) => {
      elem.addEventListener('click', e => {
        addActiveClassForToggleItem(index);
        toggleContentForInfo(index);
        pathThis.innerHTML = e.target.innerHTML;
      });
    });
  }
}

addEventListenerForInfoToggle();

function toggleContentForInfo(index) {
  const infoBody = document.querySelector('.info__body .container');

  infoBody.innerHTML = '';

  if (index) {
    infoBody.innerHTML = `
    <div class="articles">
	<div class="articles__group">
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets15.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Обзор заболеваний некастрированных кобелей породы янокуисосто
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets16.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Большой животик. Что это может быть?
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets17.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Эзофагостома у собак и кошек — ответы на распространенные вопросы владельцев
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>

		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets18.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Черепаховый окрас у кошек: чудо природы или генетическая мутация?
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets12.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Хроническая диарея <br> или когда не прекращается понос
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets11.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Как корги сломала клык в погоне за дружбаном
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets14.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Острая почечная недостаточность <br> у пса Мопса
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>

		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets19.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Инородное тело в пищеводе собаки
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets20.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Билатеральный поликистоз почек у кошки Зинаиды
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets17.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Эзофагостома у собак и кошек — ответы на распространенные вопросы владельцев
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>

		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets4.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Новообразование мочевого пузыря <br> у хомяка Бориса
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets5.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Язвенный дерматит <br> у кота, отягощенный короновирусной инфекцией
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets6.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Отравление немытым виноградом у пекинеса Гремлина
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets7.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Культит, осложнённый бактериальным циститом
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
	</div>
</div>
    `;
  } else {
    infoBody.innerHTML = `
    <div class="history">
	<div class="history__group">
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets1.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Непростое лечение перелома нижней челюсти у кошки Маруськи
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets2.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Отравление немытым виноградом у пекинеса Гремлина
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets3.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Патологические роды и кесарево сечение у крысы Анфисы
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>

		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets4.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Новообразование мочевого пузыря <br> у хомяка Бориса
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets5.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Язвенный дерматит <br> у кота, отягощенный короновирусной инфекцией
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets6.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Отравление немытым виноградом у пекинеса Гремлина
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets7.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Культит, осложнённый бактериальным циститом
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>

		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets8.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Восьмидневные роды и кесарево сечение у Стрелки
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets9.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Острый панкреатит <br> у йоркширского терьера <br> Луи II Саксонского
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_big">
	<div class="historyCard__img">
		<img src="img/pets/pets10.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Доброе дело — история одного котёнка
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>

		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets11.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Как корги сломала клык в погоне за дружбаном
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets12.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Инородное тело <br> в пищеводе собаки
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets13.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Билатеральный поликистоз почек <br> у кошки Зинаиды
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
		<div class="historyCard historyCard_small">
	<div class="historyCard__img">
		<img src="img/pets/pets14.jpg" alt="pets" loading="lazy">
	</div>
	<div class="historyCard__wrapper">
		<div class="historyCard__title">
			Острая почечная недостаточность <br> у пса Мопса
		</div>
		<div class="historyCard__date">
			21.06.2020
		</div>
	</div>
</div>
	</div>
</div>
    `;
  }
}