import Container from "./interface/Container.js";
import Icon from "./interface/Icon.js";
import Title from "./interface/Title.js";
import Link from "./interface/Link.js";
import { ListUl, ListLi } from "./interface/List.js";

const creatingHeaderComponent = () => {
  document.getElementById("headboard").innerHTML = Container(
    "navegation",
    "navegation"
  );
  document.getElementById("navegation").innerHTML = Container(
    "navLogo",
    "navLogo"
  );
  document.getElementById("navLogo").innerHTML = Title("navTitle", "ToList");
  document.getElementById("navegation").innerHTML += ListUl(
    "navMenu",
    "navMenu"
  );
  document.getElementById("navMenu").innerHTML = ListLi("navItems", "navItems");
  document.getElementById("navItems").innerHTML += Link("navLinks", "Start");
  document.getElementById("navMenu").innerHTML += ListLi(
    "navItems",
    "navItems"
  );
  document.getElementById("navItems").innerHTML += Link("navLinks", "Planning");
  document.getElementById("navMenu").innerHTML += ListLi(
    "navItems",
    "navItems"
  );
  document.getElementById("navItems").innerHTML += Link("navLinks", "Contac");
  document.getElementById("navMenu").innerHTML += Icon(
    "iconClose",
    "material-icons-outlined",
    "close"
  );
  document.getElementById("navegation").innerHTML += Container(
    "nMenu",
    "nMenu"
  );
  document.getElementById("nMenu").innerHTML += Icon(
    "iconMenu",
    "material-icons-outlined",
    "menu"
  );
};

creatingHeaderComponent();
