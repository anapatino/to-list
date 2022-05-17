import { isFirefox } from "./utils.js";

export default class Rutine {
  constructor() {
    this.formUI = document.querySelector("#form");
    this.actitiesListUI = document.getElementById("activitieslist");
    this.activitiesArray = [];
    document.addEventListener("DOMContentLoaded", this.paintDB);
  }

  generateId = () => {
    if (this.activitiesArray == null || this.activitiesArray.length == 0) {
      return 0;
    }
    return this.activitiesArray[this.activitiesArray.length - 1].id + 1;
  };

  createItem = (activity) => {
    let item = {
      id: this.generateId(),
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
      this.actitiesListUI.innerHTML += `<div class="alert alert-light" role="alert"><i class="material-symbols-outlined float-left mr-2 clickable">check_circle_outline</i><b id="${element.id}">${element.activity}</b> - ${element.status}<i class="float-right material-symbols-outlined clickable">delete</i></div>`;
    } else {
      this.actitiesListUI.innerHTML += `<div class="alert alert-dark" role="alert"><i class="material-symbols-outlined float-left mr-2 clickable">radio_button_unchecked</i><b id="${element.id}">${element.activity}</b> - ${element.status}<i class="float-right material-symbols-outlined clickable">delete</i></div>`;
    }
  };

  deleteDB = (id) => {
    const indexArray = this.activitiesArray.findIndex((element) => {
      return element.id == id;
    });
    this.activitiesArray.splice(indexArray, 1);
    this.saveDB();
  };

  toggleStatusChecked = (id) => {
    const indexArray = this.activitiesArray.findIndex((element) => {
      return element.id == id;
    });

    const currentStatus = this.activitiesArray[indexArray].status;
    this.activitiesArray[indexArray].status =
      currentStatus === "Completed" ? "Peding" : "Completed";
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
      return e.target.parentNode.childNodes[1].id;
    }
    // chrome
    return e.path[1].childNodes[1].id;
  };

  addModifyRutineEvent = () => {
    this.actitiesListUI.addEventListener("click", (e) => {
      e.preventDefault();
      const button = e.target.innerHTML;
      const id = this.getRutineRoute(e);
      this.chooseOption(id, button);
    });
  };

  chooseOption = (id, button) => {
    if (
      button == "radio_button_unchecked" ||
      button == "check_circle_outline"
    ) {
      this.toggleStatusChecked(id);
    } else if (button == "delete") {
      this.deleteDB(id);
    }
  };
}
