const formUI = document.querySelector("#form");
const actitiesListUI = document.getElementById("activitieslist");
let activitiesArray = [];

const CreateItem = (activity) => {
  let item = {
    activity: activity,
    status: false,
  };
  activitiesArray.push(item);
  return item;
};

const SaveDB = () => {
  localStorage.setItem("rutine", JSON.stringify(activitiesArray));
  PaintDB();
};

const PaintDB = () => {
  actitiesListUI.innerHTML = "";
  activitiesArray = JSON.parse(localStorage.getItem("rutine"));
  if (activitiesArray === null) {
    activitiesArray = [];
  } else {
    activitiesArray.forEach((element) => {
     if (element.status) {
      actitiesListUI.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left mr-2"> accessibility </i><b>${element.activity}</b> - ${element.status}<span class="float-right"><i class="material-icons"> done </i><i class="material-icons"> delete </i></span></div>`;
     }
     else {
      actitiesListUI.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-2"> accessibility </i><b>${element.activity}</b> - ${element.status}<span class="float-right"><i class="material-icons"> done </i><i class="material-icons"> delete </i></span></div>`;
     }
      
    });
  }
};

const DeleteDB = (activity) => {
  let indexArray;
  activitiesArray.forEach((element, index) => {
    if (element.activity === activity) {
      indexArray = index;
    }
  });
  activitiesArray.splice(indexArray, 1);
  SaveDB();
};

const EditDB = (activity) => {
 let indexArray = activitiesArray.findIndex((element) => {
  return element.activity === activity
 });
 activitiesArray[indexArray].status = true;
 SaveDB();
}

formUI.addEventListener("submit", (e) => {
  e.preventDefault();
  let activity = document.querySelector("#activity").value;
  CreateItem(activity);
  SaveDB();
  formUI.reset();
});

document.addEventListener("DOMContentLoaded", PaintDB);

actitiesListUI.addEventListener("click", (e) => {
  e.preventDefault();
  const text = e.target.offSetParent.childNodes[1].innerHTMLL;
  if (e.target.innerHTML === "done") {
  }
  if (e.target.innerHTML === "delete") {
    DeleteDB(text);
  }
});
