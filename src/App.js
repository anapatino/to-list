import { Headboard } from "./components/Headboard.js";
import { Principal } from "./components/Principal.js";
import { Footer } from "./components/Footer.js";
import { Content } from "./components/Content.js";

export const App = () => {
  return `${Headboard()} ${Content()} ${Footer()}`;
};
