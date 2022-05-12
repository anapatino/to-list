export const Headboard = () => {
  return /*html*/ `<header class="headboard">
  <nav class="navegation" id="navegation">
    <div class="nLogo">
    <h3 class="title">ToList</h3>
    </div>
    <ul class="nListItems">
      <li class="nItem">
        <a class="nLinks principal">
          Introduction
        </a>
      </li>
      <li class="nItem">
        <a href="#main" class="nLinks planning">
          Planning
        </a>
      </li>
      <li class="nItem">
        <a href="#footer" class="nLinks">
          Contact
        </a>
      </li>
    </ul>
    <img src="../src/image/menu.png" id="iconMenu" class="iconMenu"></img>
  </nav>
  <section class="hSection">
    <div id="sectionContent" class="sectionContent">
      <h1 class="headTitle letter">ToList from fatigue to full control</h1>
      <p class="headParagraph">
        ToList is a web application designed for all types of people and its
        handling is simple and optimal.
      </p>
      <button class="planning start button letter">Start Now </button>
    </div>
    <div class="contentPicture">
       <img src="../src/image/ilustrationPh.png" id="picture">
      </img>
    </div>
  </section>
</header>`;
};
