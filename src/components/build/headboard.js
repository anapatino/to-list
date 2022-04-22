import container from "../interface/Container.js";
import icon from "../interface/Icon.js";
import title from "../interface/Title.js";
import { link, linkSocial } from "../interface/Link.js";
import { listUl, listLi } from "../interface/List.js";
import navegation from "../interface/Navegation.js";
import section from "../interface/Section.js";
import paragraph from "../interface/Paragraph.js";
import { headboard, main, footer } from "../interface/Elements.js";
import { button, textBox } from "../interface/Input.js";

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
  document.getElementById("nListItems").innerHTML = listLi("nItem1");
  document.getElementById("nItem1").innerHTML = link(
    "nLinks",
    "Introduction",
    "navegation"
  );
  document.getElementById("nListItems").innerHTML += listLi("nItem2");
  document.getElementById("nItem2").innerHTML = link(
    "nLinks",
    "Planning",
    "root"
  );
  document.getElementById("nListItems").innerHTML += listLi("nItem3");
  document.getElementById("nItem3").innerHTML = link(
    "nLinks",
    "Contact",
    "footer"
  );
  document.getElementById("navegation").innerHTML += container("nMenu");
  document.getElementById("nMenu").innerHTML = icon(
    "iconMenu",
    "./image/menu.png"
  );
};

const createSection = () => {
  document.getElementById("headboard").innerHTML += section("hSection");
  document.getElementById("hSection").innerHTML = container("sectionContent");
  document.getElementById("sectionContent").innerHTML = title(
    "headTitle",
    "ToList from fatigue to full control"
  );
  document.getElementById("hSection").innerHTML += icon("picture","./image/ilustrationPh.png");
  document.getElementById("sectionContent").innerHTML += paragraph(
    "headParagraph",
    "ToList is a web application designed for all types of people and its handling is simple and optimal."
  );
  document.getElementById("sectionContent").innerHTML += button("start", "Start Now");
};

export default createHeaderComponent();
