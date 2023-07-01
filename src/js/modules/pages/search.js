const articles = {
  0: 'Терапия | Ветеринарный центр «ВетКэт» Терапия Записывайтесь на прием к врачам терапевтам',
  1: 'Терапия — процесс, осуществляемый с целью облегчения, снятия или устранения симптомов и проявлений того или иного заболевания. Ветеринарный  терапевт — это врач общей практики. Как правило именно с терапевта начинается первичный прием. Он произведет...',
  2: '... государственную академию ветеринарной медицины в 2012 году. Профессиональные интересы: интенсивная терапия, реанимация.',
  3: '... конечно же лишай можно вылечить при своевременной диагностике и грамотной терапии.'
};

function addArticles() {
  if (document.querySelector('.search')) {
    const articlesBlock = document.querySelectorAll('.search__text');

    articlesBlock.forEach((elem, index) => {
      elem.innerHTML = articles[index];
    });
  }
}

function searchInArticles() {
  if (document.querySelector('.search')) {
    const articlesBlock = document.querySelectorAll('.search__text');
    const searchBtn = document.querySelector('.search__btn');
    const searchInput = document.querySelector('.search__input');

    searchBtn.addEventListener('click', e => {
      if (searchInput.value != '') {
        const searchValue = searchInput.value.trim();
        for (const key in articles) {
          if (Object.hasOwnProperty.call(articles, key)) {
            if (articles[key].includes(searchValue)) {
              const words = articles[key].split(' ');
              const index = words.indexOf(searchValue);
              words[index] = `<span>${words[index]}</span>`;
              articlesBlock[key].innerHTML = words.join(' ');
            } else {
              articlesBlock[key].innerHTML = articles[key];
            }
          }
        }
      } else {
        console.log('Empty');
      }
    });
  }
}

addArticles();
searchInArticles();
