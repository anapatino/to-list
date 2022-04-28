import Rutine from "./services/Rutine.js";
import { displayMenu, fixedNavegation } from "./components/Grid.js";
import { App } from "./App.js";

const main = () => {
  render(App);
  createRutine();
  displayMenu();
  fixedNavegation();
};

const render = (app) => {
  document.getElementById("root").innerHTML = app();
};

const createRutine = () => {
  const rutine = new Rutine();
  rutine.addCreateRutineEvent();
  rutine.addModifyRutineEvent();
};

main();
