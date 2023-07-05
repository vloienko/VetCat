import mixitup from 'mixitup/dist/mixitup.min.js';

function mixitupFilter() {
   if (document.querySelector('.mixitup-filter')) {
      const mixer = mixitup('.cost-services__filter');
   } else {
      return;
   }
}
mixitupFilter();