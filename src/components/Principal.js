export const Principal = () => {
  return /*html*/ `<main id="main" class="main">
      <div id="container" class="container">
        <div class="titlePrincipal">
        <h2 id="title">
          New task
        </h2>
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
          <button class="btnSumit">save <img src="../src/image/arrow-right.svg"><img/></button>
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
