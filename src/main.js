import { displayMenu, renderMainPage } from "./services/events.js";
import { App } from "./App.js";

const main = () => {
  render(App, "default");
  displayMenu();
  renderMainPage();
};

export const render = (app, display) => {
  document.getElementById("root").innerHTML = app(display);
};

main();
