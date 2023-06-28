// Меню бургер
function burger() {
   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.sidebar');
   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         iconMenu.classList.toggle('_active');
         menuBody.classList.toggle('_active');
      });
   }
}

burger();


// sidebar
function sidebar() {
   const toggleButtons = document.querySelectorAll(".sidebar__arrow");

   toggleButtons.forEach(button => {
      const content = button.nextElementSibling;
      content.style.height = "0";
      content.style.overflow = "hidden";
      content.style.marginTop = "0";
      content.style.transition = "all 0.6s ease";

      button.addEventListener("click", handleToggle);
   });

   function handleToggle(event) {
      const currentButton = event.currentTarget;
      const content = currentButton.nextElementSibling;

      toggleButtons.forEach(button => {
         if (button !== currentButton) {
            button.classList.remove("active");
            closeContent(button.nextElementSibling);
         }
      });

      if (currentButton.classList.contains("active")) {
         currentButton.classList.remove("active");
         closeContent(content);
      } else {
         currentButton.classList.add("active");
         openContent(content);
      }
   }

   function openContent(content) {
      content.style.height = `${content.scrollHeight}px`;
      content.style.overflow = "visible";
      content.style.marginTop = "20px";

   }
   function closeContent(content) {
      content.style.height = "0";
      content.style.overflow = "hidden";
      content.style.marginTop = "0";
   }

}

sidebar();
