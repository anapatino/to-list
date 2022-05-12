import { Headboard } from "./components/Headboard.js";
import { Footer } from "./components/Footer.js";
import { Content } from "./components/Content.js";
import { Principal } from "./components/Principal.js";

export const appState = {
  content: {
    default: `${Headboard()} ${Content()} ${Footer()}`,
    principal: `${Principal()} ${Footer()}`,
  },
};

export const App = (display) => {
  return appState.content[display];
};
