export const Principal = () => {
  return /*html*/ `<main id="main" class="main">
      <div id="container" class="container">
        <h2 id="title" class="title">
          Tasks
        </h2>
        <form id="form" class="form">
          <input
            type="text"
            id="activity"
            class="frmcontrol"
            placeholder="enter your task"
          ></input>
          <button class="btnprimary">save</button>
        </form>
        <div id="activitieslist" class="activitieslist"></div>
      </div>
    </main>`;
};
