export const Principal = () => {
  return /*html*/ `<main id="main" class="main">
      <div id="container" class="container">
        <div class="titlePrincipal">
        <img src="../src/image/sunset.png" class="iconTitle"></img>
        <h2 id="title">
          Good morning
        </h2>
        <div class="timeTitle">
          <span class="timeSpan">Monday, May 16th, 2022</span>
        </div>
        </div>
        <hr/>
        <form id="form" class="form">
          <div class="inputTask">
          <input
            type="text"
            id="activity"
            class="frmcontrol text"
            placeholder="Enter your task"
          ></input>
          <button type="sumit" class="btnSumit">save <img src="../src/image/arrow-right.svg"><img/></button>
          </div>
        </form>
        <div class="titleTask">
        <h2 id="titleTask">
          My tasks
        </h2>
        </div>
        <hr/>
        <div id="activitieslist" class="activitieslist list">
          <h3 id="nothing">Nothing yet...</h3>
        </div>
      </div>
    </main>`;
};
