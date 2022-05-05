export const displayMenu = () => {
  const menu = document.querySelector(".nListItems");
  const options = Array.from(document.getElementsByClassName("nLinks"));
  const button = document.querySelector(".iconMenu");
  button.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  options.forEach(addEvent);
};

const addEvent = (option) => {
  const menu = document.querySelector(".nListItems");
  option.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
};
export const fixedNavegation = () => {
  const navegation = document.querySelector(".navegation");
  window.addEventListener("scroll", () => {
    navegation.classList.toggle("active", window.scrollY > 0);
  });
};
