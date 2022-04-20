import container from "../interface/Container.js";
import title from "../interface/Title.js";
import { link, linkSocial } from "../interface/Link.js";
import { listUl, listLi } from "../interface/List.js";
import navegation from "../interface/Navegation.js";
import section from "../interface/Section.js";
import { headboard, main, footer } from "../interface/Elements.js";

const createComponents = () => {
  createSectionPrincipal();
  createSocialSection();
  document.getElementById("footer").innerHTML += title(
    "footerCopy",
    "All rights reserved &copy; Ana Sofia Patino Aliendra"
  );
};

const createSectionPrincipal = () => {
  document.getElementById("root").innerHTML += footer("footer");
  document.getElementById("footer").innerHTML = navegation("fNavegation");
  document.getElementById("fNavegation").innerHTML = title(
    "footerTitle",
    "ToList"
  );
  document.getElementById("fNavegation").innerHTML += listUl("fNavegationList");
  document.getElementById("fNavegationList").innerHTML = listLi("nItems");
  document.getElementById("nItems").innerHTML = link(
    "navLinks",
    "Introduction",
    "navegation"
  );
  document.getElementById("nItems").innerHTML += link(
    "navLinks",
    "Planning",
    "root"
  );
  document.getElementById("nItems").innerHTML += link(
    "navLinks",
    "Contact",
    "footer"
  );
};

const createSocialSection = () => {
  document.getElementById("footer").innerHTML = section("fContainerSocial");
  document.getElementById("fContainerSocial").innerHTML += container("fSocial");
  document.getElementById("fSocial").innerHTML = linkSocial(
    "fIcons",
    "https://www.facebook.com/ana.sofia.patino.A/",
    "./image/facebook.png"
  );
  document.getElementById("fSocial").innerHTML += linkSocial(
    "fIcons",
    "https://github.com/anapatino",
    "./image/logotipo-de-github.png"
  );
  document.getElementById("fSocial").innerHTML += linkSocial(
    "fIcons",
    "https://www.linkedin.com/in/ana-sofia-patiño-aliendra-19a0a8237/",
    "./image/linkedin(1).png"
  );
};

export default createComponents();
