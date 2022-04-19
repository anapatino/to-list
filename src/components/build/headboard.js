import container from "../interface/Container.js";
import icon from "../interface/Icon.js";
import title from "../interface/Title.js";
import { link, linkSocial } from "../interface/Link.js";
import { listUl, listLi } from "../interface/List.js";
import navegation from "../interface/Navegation.js";
import section from "../interface/Section.js";
import paragraph from "../interface/Paragraph.js";


const creatingHeaderComponent = () => {
  creatingNavegationComponent();
  creatingSectionHeader();
};

const creatingNavegationComponent = () => {
  document.getElementById("headboard").innerHTML = navegation("navegation","navegation");
  document.getElementById("navegation").innerHTML = container("navLogo","navLogo");
  document.getElementById("navLogo").innerHTML = title("navTitle","ToList");
  document.getElementById("navegation").innerHTML += listUl("footerNavegationLink","footerNavegationLink");
  document.getElementById("footerNavegationLink").innerHTML = listLi("navItems","navItems");
  document.getElementById("navItems").innerHTML = link("navLinks","Introduction","navegation");
  document.getElementById("navItems").innerHTML += link("navLinks","Planning","root");
  document.getElementById("navItems").innerHTML += link("navLinks", "Contact","footer");
  document.getElementById("footerNavegationLink").innerHTML += icon("iconClose","material-icons-outlined","close");
  document.getElementById("navegation").innerHTML += icon("iconClose","material-icons-outlined","menu");
};

const creatingSectionHeader = () => {
  document.getElementById("headboard").innerHTML = section("headSection","headSection");
  document.getElementById("headSection").innerHTML = title("headTitle","ToList from fatigue to full control");
  document.getElementById("headSection").innerHTML += paragraph(
    "headParagraph",
    "ToList is a web application designed for all types of people and its handling is simple and optimal."
    );
    document.getElementById("headSection").innerHTML += link("start","Start Now","root");
};

export default creatingHeaderComponent();
