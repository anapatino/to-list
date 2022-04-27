export const displayMenu = () => {
  const menu = document.querySelector(".nListItems");
  const button = document.querySelector(".iconMenu");
  button.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
};
