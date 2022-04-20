const listUl = (name) => {
  return `<ul id="${name}" class="${name}"></ul>`;
};

const listLi = (name) => {
  return `<li id="${name}" class="${name}"></li>`;
};

export { listUl, listLi };
