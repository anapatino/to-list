import Title from "./interface/Title.js";
import Container from "./interface/Container.js";
import Form from "./interface/Form.js";
import TextBox from "./interface/TextBox.js";
import Button from "./interface/Button.js";
import Rutine from "./Rutine.js";

const main = () => {
  componentsCreation();
};

const componentsCreation = () => {
  document.getElementById("root").innerHTML += Container(
    "container",
    "container"
  );
  document.getElementById("container").innerHTML = Title("title", "Tasks");
  document.getElementById("container").innerHTML += Form("form", "form");
  document.getElementById("form").innerHTML = TextBox(
    "activity",
    "frmcontrol",
    "enter your task"
  );
  document.getElementById("form").innerHTML += Button("btnprimary", "save");
  document.getElementById("container").innerHTML += Container(
    "activitieslist",
    "activitieslist"
  );
  const rutine = new Rutine();
  rutine.addCreateRutineEvent();
  rutine.addModifyRutineEvent();
};

main();
