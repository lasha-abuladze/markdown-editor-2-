`use strict`;

const closeOpenBtn = document.querySelector(`.close-open--btns`);
const btnMenu = document.querySelectorAll(`.btn--menu`);

const appContainer = document.querySelector(`.app-container`);

closeOpenBtn.addEventListener(`click`, () => {
  btnMenu.forEach((btn) => btn.classList.toggle(`display-none`));
  appContainer.classList.toggle(`translate`);
});
