export const Principal = () => {
  return /*html*/ `<main id="main" class="main">
    <div class="sizeContainer backgroundContainer"></div>
      <div id="container" class="container">
        <h2 id="title" class="titlePrincipal">
          Tasks
        </h2>
        <form id="form" class="form">
          <input
            type="text"
            id="activity"
            class="frmcontrol text"
            placeholder="enter your task"
          ></input>
        </form>
        <div id="activitieslist" class="activitieslist list"></div>
      </div>
    </main>`;
};
