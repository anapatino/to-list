import title from "../interface/Title.js";
import container from "../interface/Container.js";
import form from "../interface/Form.js";
import { button, textBox } from "../interface/Input.js";
import Rutine from "../Rutine.js";
import { headboard, main, footer } from "../interface/Elements.js";

const principal = () => {
  createComponents();
};

const createComponents = () => {
  document.getElementById("root").innerHTML += main("main");
  document.getElementById("main").innerHTML = container("container");
  document.getElementById("container").innerHTML = title("title", "Tasks");
  document.getElementById("container").innerHTML += form("form");
  document.getElementById("form").innerHTML = textBox(
    "activity",
    "frmcontrol",
    "enter your task"
  );
  document.getElementById("form").innerHTML += button("btnprimary", "save");
  document.getElementById("container").innerHTML += container("activitieslist");
  const rutine = new Rutine();
  rutine.addCreateRutineEvent();
  rutine.addModifyRutineEvent();
};

export default principal();
