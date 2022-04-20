import container from "../interface/Container.js";
import icon from "../interface/Icon.js";
import title from "../interface/Title.js";
import { link, linkSocial } from "../interface/Link.js";
import { listUl, listLi } from "../interface/List.js";
import navegation from "../interface/Navegation.js";
import section from "../interface/Section.js";
import paragraph from "../interface/Paragraph.js";
import { headboard, main, footer } from "../interface/Elements.js";

const createHeaderComponent = () => {
  createNavegation();
  createSection();
};

const createNavegation = () => {
  document.getElementById("root").innerHTML = headboard("headboard");
  document.getElementById("headboard").innerHTML = navegation("navegation");
  document.getElementById("navegation").innerHTML = container("nLogo");
  document.getElementById("nLogo").innerHTML = title("nTitle", "ToList");
  document.getElementById("navegation").innerHTML += listUl("nListItems");
  document.getElementById("nListItems").innerHTML = listLi("nItems");
  document.getElementById("nItems").innerHTML = link(
    "nLinks",
    "Introduction",
    "navegation"
  );
  document.getElementById("nItems").innerHTML += link(
    "nLinks",
    "Planning",
    "root"
  );
  document.getElementById("nItems").innerHTML += link(
    "nLinks",
    "Contact",
    "footer"
  );
  document.getElementById("nListItems").innerHTML += icon(
    "iconClose",
    "material-icons-outlined",
    "close"
  );
  document.getElementById("navegation").innerHTML += icon(
    "iconClose",
    "material-icons-outlined",
    "menu"
  );
};

const createSection = () => {
  document.getElementById("headboard").innerHTML += section("hSection");
  document.getElementById("hSection").innerHTML = title(
    "headTitle",
    "ToList from fatigue to full control"
  );
  document.getElementById("hSection").innerHTML += paragraph(
    "headParagraph",
    "ToList is a web application designed for all types of people and its handling is simple and optimal."
  );
  document.getElementById("hSection").innerHTML += link(
    "start",
    "Start Now",
    "root"
  );
};

export default createHeaderComponent();
