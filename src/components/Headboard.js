export const Headboard = () => {
  return /*html*/ `<header class="headboard">
  <nav class="navegation" id="navegation">
    <div class="nLogo">
      <img class="pictureLogo" src="../src/image/logo.png" ></img>
    </div>
    <ul class="nListItems">
      <li class="nItem">
        <a href="#navegation" class="nLinks">
          Introduction
        </a>
      </li>
      <li class="nItem">
        <a href="#title" class="nLinks">
          Planning
        </a>
      </li>
      <li class="nItem">
        <a href="#footer" class="nLinks">
          Contact
        </a>
      </li>
      <img src="../src/image/close.png" id="iconClose"></img>
    </ul>
    <img src="../src/image/menu.png" id="iconMenu"></img>
  </nav>
  <section class="hSection">
    <div id="sectionContent" class="sectionContent">
      <h1 class="headTitle">ToList from fatigue to full control</h1>
      <p class="headParagraph">
        ToList is a web application designed for all types of people and its
        handling is simple and optimal.
      </p>
      <button class="start">Start Now </button>
    </div>
    <img src="../src/image/ilustrationPh.png" id="picture"></img>
  </section>
</header>`;
};
