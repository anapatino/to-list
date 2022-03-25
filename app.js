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

const SaveDB = (activity) => {
  localStorage.setItem("rutine", JSON.stringify(activitiesArray));
  PaintDB();
};

const PaintDB = () => {
  actitiesListUI.innerHTML = '';
  activitiesArray = JSON.parse(localStorage.getItem('rutine'));
  if (activitiesArray === null) {
    activitiesArray = [];
  } else {
    activitiesArray.forEach(element => {
      actitiesListUI.innerHTML += `<div class="alert alert-primary" role="alert">
        <i class="material-icons float-left mr-2"> accessibility </i>
        <b>${element.activity}</b> - ${element.status}
        <span class="float-right">
          <i class="material-icons"> done </i>
          <i class="material-icons"> delete </i>
        </span>
      </div>`;
    });
  }
};

formUI.addEventListener('submit', (e) => {
  e.preventDefault();
  let activity = document.querySelector('#activity').value;
  CreateItem(activity);
  SaveDB();
  formUI.reset();
});

document.addEventListener('DOMContentLoaded', PaintDB);
