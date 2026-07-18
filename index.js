`use strict`;

const closeOpenBtn = document.querySelector(`.close-open--btns`);
const btnMenu = document.querySelectorAll(`.btn--menu`);

const appContainer = document.querySelector(`.app-container`);

const body = document.querySelector(`body`);
const themeSwitcher = document.querySelector(`.btn--theme-switcher`);

closeOpenBtn.addEventListener(`click`, () => {
  btnMenu.forEach((btn) => btn.classList.toggle(`display-none`));
  appContainer.classList.toggle(`translate`);
});

themeSwitcher.addEventListener(`click`, () => {
  body.classList.toggle(`body--dark`);
});
