export const displayMenu = () => {
  const menu = document.querySelector(".nListItems");
  const button = document.querySelector(".iconMenu");
  button.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
};

export const fixedNavegation = () => {
  const navegation = document.querySelector(".navegation");
  window.addEventListener("scroll", () => {
    navegation.classList.toggle("active", window.scrollY > 0);
  });
};
