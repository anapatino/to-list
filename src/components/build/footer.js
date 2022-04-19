import container from "../interface/Container.js";
import title from "../interface/Title.js";
import { link, linkSocial } from "../interface/Link.js";
import { listUl, listLi } from "../interface/List.js";
import navegation from "../interface/Navegation.js";
import section from "../interface/Section.js";

const creatingFooterComponent = () => {
    creatingFirstSectionFooter();
    creatingSocialSectionFooter();
    document.getElementById("footer").innerHTML += title("footerCopy","All rights reserved &copy; Ana Sofia Patino Aliendra");
};
  
const creatingFirstSectionFooter = () => {
    document.getElementById("footer").innerHTML = section("footerContainer","footerContainer");
    document.getElementById("footerContainer").innerHTML = navegation("footerNavegation","footerNavegation");
    document.getElementById("footerNavegation").innerHTML = title("footerTitle","ToList");
    document.getElementById("footerNavegation").innerHTML += listUl("footerNavegationLink","footerNavegationLink");
    document.getElementById("footerNavegationLink").innerHTML = listLi("navItems","navItems");
    document.getElementById("navItems").innerHTML = link("navLinks","Introduction","navegation");
    document.getElementById("navItems").innerHTML += link("navLinks","Planning","root");
    document.getElementById("navItems").innerHTML += link("navLinks", "Contact","footer");
};
  
const creatingSocialSectionFooter = () => {
    document.getElementById("footer").innerHTML = section("footerContainerSocial","footerContainerSocial");
    document.getElementById("footerContainerSocial").innerHTML += container("footerSocial","footerSocial");
    document.getElementById("footerSocial").innerHTML = linkSocial("footerIcons","https://www.facebook.com/ana.sofia.patino.A/","./image/facebook.png");
    document.getElementById("footerSocial").innerHTML += linkSocial("footerIcons","https://github.com/anapatino","./image/logotipo-de-github.png");
    document.getElementById("footerSocial").innerHTML += linkSocial("footerIcons","https://www.linkedin.com/in/ana-sofia-patiño-aliendra-19a0a8237/" ,"./image/linkedin(1).png"); 
};

export default creatingFooterComponent();