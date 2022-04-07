import { isFirefox } from "./utils.js";

export default class Rutine {
  constructor() {
    this.formUI = document.querySelector("#form");
    this.actitiesListUI = document.getElementById("activitieslist");
    this.activitiesArray = [];
    document.addEventListener("DOMContentLoaded", this.paintDB);
  }

  createItem = (activity) => {
    let item = {
      activity: activity,
      status: "Pending",
    };
    this.activitiesArray.push(item);
    return item;
  };

  saveDB = () => {
    localStorage.setItem("rutine", JSON.stringify(this.activitiesArray));
    this.paintDB();
  };

  paintDB = () => {
    this.actitiesListUI.innerHTML = "";
    this.activitiesArray = JSON.parse(localStorage.getItem("rutine"));
    if (this.activitiesArray == null) {
      this.activitiesArray = [];
    } else {
      this.activitiesArray.forEach((element) => {
        this.checkStatus(element);
      });
    }
  };

  checkStatus = (element) => {
    if (element.status == "Completed") {
      this.actitiesListUI.innerHTML += `<div class="alert alert-alert" role="alert"><i class="material-icons float-left mr-2">check_circle_outline</i><b>${element.activity}</b> - ${element.status}<span class="float-right"><i class="material-icons clickable">done</i><i class="material-icons clickable">delete</i></span></div>`;
    } else {
      this.actitiesListUI.innerHTML += `<div class="alert alert-dark" role="alert"><i class="material-icons float-left mr-2">radio_button_unchecked</i><b>${element.activity}</b> - ${element.status}<span class="float-right"><i class="material-icons clickable">done</i><i class="material-icons clickable">delete</i></span></div>`;
    }
  };

  deleteDB = (activity) => {
    let indexArray;
    this.activitiesArray.forEach((element, index) => {
      if (element.activity == activity) {
        indexArray = index;
      }
    });
    this.activitiesArray.splice(indexArray, 1);
    this.saveDB();
  };

  editDB = (activity) => {
    let indexArray = this.activitiesArray.findIndex((element) => {
      return element.activity == activity;
    });
    this.activitiesArray[indexArray].status = "Completed";
    this.saveDB();
  };

  // Events
  addCreateRutineEvent = () => {
    this.formUI.addEventListener("submit", (e) => {
      e.preventDefault();
      let activity = document.querySelector("#activity").value;
      this.createItem(activity);
      this.saveDB();
      this.formUI.reset();
    });
  };

  getRutineRoute = (e) => {
    if (isFirefox()) {
      return e.target.parentNode.parentNode.childNodes[1].innerHTML;
    }
    // chrome
    return e.path[2].childNodes[1].innerHTML;
  };

  addModifyRutineEvent = () => {
    this.actitiesListUI.addEventListener("click", (e) => {
      e.preventDefault();
      const text = this.getRutineRoute(e);
      const button = e.target.innerHTML;
      this.chooseOption(text, button);
    });
  };

  chooseOption = (text, button) => {
    if (button == "done") {
      this.editDB(text);
    }
    if (button == "delete") {
      this.deleteDB(text);
    }
  };
}
