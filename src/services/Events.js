import { App } from "../App.js";
import { render } from "../main.js";
import Rutine from "../services/Rutine.js";

export const displayMenu = () => {
  const menu = document.querySelector(".nListItems");
  const options = Array.from(document.querySelectorAll(".nLinks"));
  const button = document.querySelector(".iconMenu");
  button.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  options.forEach(addToggleEvent);
};

const addToggleEvent = (option) => {
  const menu = document.querySelector(".nListItems");
  option.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
};

export const renderMainPage = () => {
  const plannings = Array.from(document.querySelectorAll(".planning"));
  plannings.forEach(addPagePrincipalEvent);
};

const renderPrincipalPage = () => {
  const principals = Array.from(document.querySelectorAll(".principal"));
  principals.forEach(addPageDefaultEvent);
};

const createRutine = () => {
  const rutine = new Rutine();
  rutine.addCreateRutineEvent();
  rutine.addModifyRutineEvent();
};

const addPagePrincipalEvent = (planning) => {
  planning.addEventListener("click", () => {
    render(App, "principal");
    createRutine();
    renderPrincipalPage();
  });
};

const addPageDefaultEvent = (principals) => {
  principals.addEventListener("click", () => {
    render(App, "default");
    renderMainPage();
  });
};
