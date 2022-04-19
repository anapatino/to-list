import title from "../interface/Title.js";
import container from "../interface/Container.js";
import form from "../interface/Form.js";
import textBox from "../interface/TextBox.js";
import button from "../interface/Button.js";
import Rutine from "../Rutine.js";

const principal = () => {
  creatingComponentsPrincipal();
};

const creatingComponentsPrincipal = () => {
  document.getElementById("root").innerHTML += container("container","container");
  document.getElementById("container").innerHTML = title("title", "Tasks");
  document.getElementById("container").innerHTML += form("form", "form");
  document.getElementById("form").innerHTML = textBox("activity","frmcontrol","enter your task");
  document.getElementById("form").innerHTML += button("btnprimary", "save");
  document.getElementById("container").innerHTML += container("activitieslist","activitieslist");
  const rutine = new Rutine();
  rutine.addCreateRutineEvent();
  rutine.addModifyRutineEvent();
};

export default principal;
