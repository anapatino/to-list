import Rutine from "./services/Rutine.js";
import { App } from "./App.js";

const main = () => {
  render(App);
  createRutine();
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
